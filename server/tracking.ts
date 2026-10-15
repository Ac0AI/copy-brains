// Install and usage tracking, plus the numbers the site and admin page show.
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

export async function adminStats() {
  const [totals, brains, clients, recentQueries] = await Promise.all([
    db().query(`select
        (select count(*) from users) as users,
        (select count(*) from users where created_at > now() - interval '7 days') as users_7d,
        (select count(*) from installs) as installs,
        (select count(*) from tool_calls) as tool_calls,
        (select count(*) from tool_calls where created_at > now() - interval '7 days') as tool_calls_7d`),
    db().query(`select b.slug,
        coalesce(i.installers, 0) as installers, coalesce(i.installs, 0) as installs,
        coalesce(t.calls, 0) as calls, coalesce(t.calls_7d, 0) as calls_7d, coalesce(t.callers, 0) as callers
      from (select brain_slug as slug from installs union select brain_slug from tool_calls) b
      left join (select brain_slug, count(distinct user_id) as installers, count(*) as installs from installs group by 1) i on i.brain_slug = b.slug
      left join (select brain_slug, count(*) as calls, count(*) filter (where created_at > now() - interval '7 days') as calls_7d,
                        count(distinct user_id) as callers from tool_calls group by 1) t on t.brain_slug = b.slug
      order by installers desc, calls desc`),
    db().query(`select coalesce(client, 'unknown') as client, count(*) as n from installs group by 1 order by n desc`),
    db().query(`select t.brain_slug, t.query, t.client_name, t.created_at, u.email
        from tool_calls t left join users u on u.id = t.user_id
        where t.tool = 'search_brain' order by t.created_at desc limit 50`),
  ]);
  return { totals: totals.rows[0], brains: brains.rows, clients: clients.rows, recentQueries: recentQueries.rows };
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
