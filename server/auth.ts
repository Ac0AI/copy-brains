// Email + 6-digit code sign-in. A verified email gets a personal API key, which is both the
// site session and the `?key=` on that person's MCP URLs, so every install and tool call is
// attributable to an email.
import { createHash, randomBytes, randomInt, timingSafeEqual } from "node:crypto";
import nodemailer, { type Transporter } from "nodemailer";
import { db } from "./db.js";

const CODE_TTL_MINUTES = 10;
const MAX_ATTEMPTS = 5;
const CODES_PER_EMAIL_PER_HOUR = 5;
const CODES_PER_IP_PER_HOUR = 20;
const RESEND_COOLDOWN_SECONDS = 30;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export class AuthError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    readonly extra: Record<string, unknown> = {},
  ) {
    super(code);
  }
}

const pepper = () => process.env.AUTH_SECRET ?? "dev-only-secret";
const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");
const hashCode = (email: string, code: string) => sha256(`${pepper()}:code:${email}:${code}`);
export const hashKey = (key: string) => sha256(`${pepper()}:key:${key}`);

export function normalizeEmail(input: unknown): string {
  const email = String(input ?? "").trim().toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email)) throw new AuthError(400, "invalid_email");
  return email;
}

export async function requestCode(rawEmail: unknown, ip: string | null): Promise<void> {
  const email = normalizeEmail(rawEmail);
  const { rows } = await db().query<{ email_count: string; ip_count: string; last_seconds: string | null }>(
    `select
       count(*) filter (where email = $1) as email_count,
       count(*) filter (where ip = $2) as ip_count,
       extract(epoch from now() - max(created_at) filter (where email = $1)) as last_seconds
     from login_codes where created_at > now() - interval '1 hour' and (email = $1 or ip = $2)`,
    [email, ip],
  );
  const stats = rows[0];
  const lastSeconds = stats.last_seconds == null ? Infinity : Number(stats.last_seconds);
  if (lastSeconds < RESEND_COOLDOWN_SECONDS) {
    throw new AuthError(429, "rate_limited", { retryAfter: Math.ceil(RESEND_COOLDOWN_SECONDS - lastSeconds) });
  }
  if (Number(stats.email_count) >= CODES_PER_EMAIL_PER_HOUR || Number(stats.ip_count) >= CODES_PER_IP_PER_HOUR) {
    throw new AuthError(429, "rate_limited", { retryAfter: 3600 });
  }

  const code = String(randomInt(0, 1_000_000)).padStart(6, "0");
  await db().query(
    `insert into login_codes (email, code_hash, ip, expires_at) values ($1, $2, $3, now() + make_interval(mins => $4))`,
    [email, hashCode(email, code), ip, CODE_TTL_MINUTES],
  );
  await sendCodeEmail(email, code);
}

export async function verifyEmailCode(
  rawEmail: unknown,
  rawCode: unknown,
  meta: { ip: string | null; userAgent: string | null },
): Promise<{ userId: string; email: string }> {
  const email = normalizeEmail(rawEmail);
  const code = String(rawCode ?? "").replace(/\D/g, "");
  const { rows } = await db().query<{ id: string; code_hash: string; attempts: number; expired: boolean }>(
    `select id, code_hash, attempts, expires_at < now() as expired
       from login_codes where email = $1 and consumed_at is null
       order by created_at desc limit 1`,
    [email],
  );
  const latest = rows[0];
  if (!latest) throw new AuthError(400, "invalid_code", { attemptsLeft: 0 });
  if (latest.expired) throw new AuthError(410, "expired");
  if (latest.attempts >= MAX_ATTEMPTS) throw new AuthError(429, "rate_limited", { retryAfter: 60 });

  const expected = Buffer.from(latest.code_hash, "hex");
  const actual = Buffer.from(hashCode(email, code), "hex");
  if (code.length !== 6 || !timingSafeEqual(expected, actual)) {
    await db().query(`update login_codes set attempts = attempts + 1 where id = $1`, [latest.id]);
    throw new AuthError(400, "invalid_code", { attemptsLeft: Math.max(0, MAX_ATTEMPTS - latest.attempts - 1) });
  }

  await db().query(`update login_codes set consumed_at = now() where id = $1`, [latest.id]);
  const user = await db().query<{ id: string }>(
    `insert into users (email, signup_ip, signup_user_agent) values ($1, $2, $3)
     on conflict (email) do update set last_seen_at = now()
     returning id`,
    [email, meta.ip, meta.userAgent?.slice(0, 300) ?? null],
  );
  return { userId: user.rows[0].id, email };
}

// Personal keys double as OAuth access tokens, so every MCP call maps back to an email.
export async function issueKey(userId: string, clientId: string | null = null): Promise<string> {
  const key = `brn_${randomBytes(24).toString("base64url")}`;
  await db().query(`insert into api_keys (user_id, key_hash, client_id) values ($1, $2, $3)`, [userId, hashKey(key), clientId]);
  return key;
}

// Key lookups happen on every MCP request, so cache them briefly in memory.
const keyCache = new Map<string, { userId: string; email: string; at: number }>();
const KEY_CACHE_MS = 5 * 60_000;

export async function resolveKey(key: string | null | undefined): Promise<{ userId: string; email: string } | null> {
  if (!key || !key.startsWith("brn_") || key.length > 100) return null;
  const hash = hashKey(key);
  const cached = keyCache.get(hash);
  if (cached && Date.now() - cached.at < KEY_CACHE_MS) return cached;
  const { rows } = await db().query<{ user_id: string; email: string }>(
    `update api_keys k set last_used_at = now() from users u
      where k.key_hash = $1 and u.id = k.user_id
      returning k.user_id, u.email`,
    [hash],
  );
  if (!rows[0]) return null;
  const entry = { userId: rows[0].user_id, email: rows[0].email, at: Date.now() };
  keyCache.set(hash, entry);
  return entry;
}

// Codes go out through Resend's API when RESEND_API_KEY is set, otherwise over SMTP
// (Spacemail: mail.spacemail.com:465). Locally, with neither configured, the code is printed to the console.
let smtp: Transporter | null = null;
function smtpTransport(): Transporter {
  if (!smtp) {
    const port = Number(process.env.SMTP_PORT ?? 465);
    smtp = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return smtp;
}

async function sendCodeEmail(email: string, code: string): Promise<void> {
  const from = process.env.EMAIL_FROM ?? "The Brains <onboarding@resend.dev>";
  const subject = `${code} is your code for The Brains`;
  const text = `Your code for The Brains is ${code}\n\nIt expires in ${CODE_TTL_MINUTES} minutes. If you didn't ask for it, ignore this email.`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#2b2b2b">
<div style="margin-bottom:12px">Your code for The Brains:</div>
<div style="font-size:30px;letter-spacing:6px;font-weight:700;margin-bottom:12px">${code}</div>
<div style="color:#767676">It expires in ${CODE_TTL_MINUTES} minutes. If you didn't ask for it, ignore this email.</div></div>`;

  // Resend (HTTPS) wins when configured: Railway's Hobby plan blocks outbound SMTP ports.
  if (process.env.SMTP_HOST && !process.env.RESEND_API_KEY) {
    try {
      await smtpTransport().sendMail({ from, to: email, subject, text, html });
    } catch (error) {
      console.error(`SMTP send failed: ${(error as Error).message}`);
      throw new AuthError(502, "email_failed");
    }
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "production") throw new Error("No email transport configured (SMTP_HOST or RESEND_API_KEY)");
    console.log(`[dev] install code for ${email}: ${code}`);
    return;
  }
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [email], subject, text, html }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) {
    console.error(`Resend ${response.status}: ${(await response.text()).slice(0, 300)}`);
    throw new AuthError(502, "email_failed");
  }
}
