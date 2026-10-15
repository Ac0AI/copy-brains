// Password-protected admin: totals, per-brain installs and usage, recent questions, email CSV.
import type { NextFunction, Request, Response } from "express";
import { timingSafeEqual } from "node:crypto";

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const password = process.env.ADMIN_PASSWORD;
  const [scheme, encoded] = (req.get("authorization") ?? "").split(" ");
  const given = scheme === "Basic" && encoded ? Buffer.from(encoded, "base64").toString().split(":").slice(1).join(":") : "";
  const ok = Boolean(password) && given.length === password!.length && timingSafeEqual(Buffer.from(given), Buffer.from(password!));
  if (!ok) {
    res.set("WWW-Authenticate", 'Basic realm="The Brains admin"').status(401).send("Admin login required");
    return;
  }
  next();
}

const escape = (value: unknown) =>
  String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const fmt = (value: unknown) => Number(value ?? 0).toLocaleString("en-US");
const when = (value: unknown) => (value ? new Date(String(value)).toISOString().replace("T", " ").slice(0, 16) : "");

export function toCsv(rows: Record<string, unknown>[]): string {
  if (!rows.length) return "email,created_at,last_seen_at,brains,installs,tool_calls\n";
  const columns = Object.keys(rows[0]);
  const cell = (v: unknown) => {
    const text = v instanceof Date ? v.toISOString() : String(v ?? "");
    return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  };
  return [columns.join(","), ...rows.map((row) => columns.map((c) => cell(row[c])).join(","))].join("\n") + "\n";
}

type Stats = {
  totals: Record<string, unknown>;
  brains: Record<string, unknown>[];
  clients: Record<string, unknown>[];
  recentQueries: Record<string, unknown>[];
};

export function renderAdmin({ totals, brains, clients, recentQueries }: Stats): string {
  const tiles = [
    ["Emails", totals.users, `${fmt(totals.users_7d)} this week`],
    ["Installs", totals.installs, "install links issued"],
    ["Tool calls", totals.tool_calls, `${fmt(totals.tool_calls_7d)} this week`],
  ]
    .map(([label, value, note]) => `<div class="tile"><div class="n">${fmt(value)}</div><div class="l">${label}</div><div class="m">${note}</div></div>`)
    .join("");
  const brainRows = brains
    .map(
      (b) =>
        `<tr><td><a href="/${escape(b.slug)}">${escape(b.slug)}</a></td><td>${fmt(b.installers)}</td><td>${fmt(b.installs)}</td><td>${fmt(b.callers)}</td><td>${fmt(b.calls)}</td><td>${fmt(b.calls_7d)}</td></tr>`,
    )
    .join("");
  const clientRows = clients.map((c) => `<tr><td>${escape(c.client)}</td><td>${fmt(c.n)}</td></tr>`).join("");
  const queryRows = recentQueries
    .map(
      (q) =>
        `<tr><td>${when(q.created_at)}</td><td>${escape(q.brain_slug)}</td><td>${escape(q.query)}</td><td>${escape(q.email ?? "")}</td><td>${escape(q.client_name ?? "")}</td></tr>`,
    )
    .join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Admin · The Brains</title><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<style>
  :root { --ink:#3d3d3d; --muted:#767676; --line:#e8e8e8; --band:#f7f7f7; --pink:#db0070; color-scheme: light; }
  body { margin:0; font:15px/1.5 system-ui, -apple-system, sans-serif; color:var(--ink); background:#fff; }
  main { max-width:72rem; margin:0 auto; padding:32px 16px 64px; }
  header { display:flex; justify-content:space-between; align-items:center; gap:16px; flex-wrap:wrap; margin-bottom:24px; }
  h1 { font:700 22px/1.2 Georgia, serif; margin:0; } h2 { font-size:13px; letter-spacing:.06em; text-transform:uppercase; color:var(--muted); margin:36px 0 10px; }
  a { color:var(--pink); } .btn { background:#202020; color:#fff; text-decoration:none; padding:9px 14px; border-radius:10px; font-weight:600; font-size:14px; }
  .tiles { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px; }
  .tile { border:1px solid var(--line); border-radius:12px; padding:16px; } .n { font-size:28px; font-weight:700; font-variant-numeric:tabular-nums; }
  .l { font-weight:600; } .m { color:var(--muted); font-size:13px; }
  .scroll { overflow-x:auto; border:1px solid var(--line); border-radius:12px; }
  table { width:100%; border-collapse:collapse; font-variant-numeric:tabular-nums; } th, td { text-align:left; padding:9px 12px; border-bottom:1px solid var(--line); vertical-align:top; }
  th { background:var(--band); font-size:12.5px; color:var(--muted); font-weight:600; white-space:nowrap; } tr:last-child td { border-bottom:0; }
  td:nth-child(3) { max-width:36rem; } .empty { color:var(--muted); padding:14px 12px; }
</style></head><body><main>
<header><h1>The Brains admin</h1><a class="btn" href="/admin/emails.csv">Download emails (CSV)</a></header>
<div class="tiles">${tiles}</div>
<h2>Brains</h2><div class="scroll"><table><thead><tr><th>Brain</th><th>Unique installers</th><th>Install links</th><th>Active users</th><th>Tool calls</th><th>Calls, 7 days</th></tr></thead>
<tbody>${brainRows || '<tr><td class="empty" colspan="6">No installs yet.</td></tr>'}</tbody></table></div>
<h2>Clients</h2><div class="scroll"><table><thead><tr><th>Client</th><th>Install links</th></tr></thead>
<tbody>${clientRows || '<tr><td class="empty" colspan="2">No installs yet.</td></tr>'}</tbody></table></div>
<h2>Latest questions</h2><div class="scroll"><table><thead><tr><th>When (UTC)</th><th>Brain</th><th>Question</th><th>Email</th><th>Client</th></tr></thead>
<tbody>${queryRows || '<tr><td class="empty" colspan="5">No questions yet.</td></tr>'}</tbody></table></div>
</main></body></html>`;
}
