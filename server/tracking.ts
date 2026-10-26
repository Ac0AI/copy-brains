// Install and usage tracking, plus the install counts the site shows and the admin email export.
import { db, hasDatabase } from "./db.js";

export async function recordInstall(userId: string, slug: string, client: string | null): Promise<void> {
  await db().query(`insert into installs (user_id, brain_slug, client) values ($1, $2, $3)`, [userId, slug, client?.slice(0, 40) ?? null]);
}

// Clients that skip the RFC 8707 resource parameter still count: the first authenticated call
// a user makes to a brain records the install. Remembered in memory so it's one insert per pair.
const seenInstalls = new Set<string>();
export function ensureInstall(userId: string, slug: string, client: string | null): void {
  const key = `${userId}:${slug}`;
  if (!hasDatabase() || seenInstalls.has(key)) return;
  seenInstalls.add(key);
  db()
    .query(
      `insert into installs (user_id, brain_slug, client)
       select $1, $2, $3 where not exists (select 1 from installs where user_id = $1 and brain_slug = $2)`,
      [userId, slug, client?.slice(0, 40) ?? null],
    )
    .catch((error) => {
      seenInstalls.delete(key);
      console.error("install insert failed:", error.message);
    });
}

// Fire-and-forget: a tracking hiccup must never fail an agent's tool call.
export function recordToolCall(entry: { userId: string | null; slug: string; tool: string; query?: string; clientName?: string }): void {
  if (!hasDatabase()) return;
  db()
    .query(`insert into tool_calls (user_id, brain_slug, tool, query, client_name) values ($1, $2, $3, $4, $5)`, [
      entry.userId,
      entry.slug,
      entry.tool,
      entry.query?.slice(0, 500) ?? null,
      entry.clientName?.slice(0, 80) ?? null,
    ])
    .catch((error) => console.error("tool_call insert failed:", error.message));
}

// Unique installers per brain, cached for a minute because every directory view asks for it.
let installCounts: { at: number; counts: Map<string, number> } | null = null;

export async function uniqueInstallsBySlug(): Promise<Map<string, number>> {
  if (!hasDatabase()) return new Map();
  if (installCounts && Date.now() - installCounts.at < 60_000) return installCounts.counts;
  const { rows } = await db().query<{ brain_slug: string; n: string }>(
    `select brain_slug, count(distinct user_id) as n from installs group by brain_slug`,
  );
  installCounts = { at: Date.now(), counts: new Map(rows.map((r) => [r.brain_slug, Number(r.n)])) };
  return installCounts.counts;
}

export async function emailRows() {
  const { rows } = await db().query(`select u.email, u.created_at, u.last_seen_at,
      coalesce(string_agg(distinct i.brain_slug, ' '), '') as brains,
      count(distinct i.id) as installs,
      (select count(*) from tool_calls t where t.user_id = u.id) as tool_calls
    from users u left join installs i on i.user_id = u.id
    group by u.id order by u.created_at desc`);
  return rows;
}
