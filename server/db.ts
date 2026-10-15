// Postgres access for accounts, install codes, API keys and usage tracking.
// Railway injects DATABASE_URL; locally it comes from .env.local.
import pg from "pg";

let pool: pg.Pool | null = null;

export function db(): pg.Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) throw new Error("DATABASE_URL is not set");
    pool = new pg.Pool({
      connectionString,
      max: Number(process.env.DB_POOL_MAX ?? 10),
      // Railway's internal network and local databases are plain TCP; Railway's public proxy needs TLS.
      ssl: /\.railway\.internal|@(localhost|127\.0\.0\.1)[:/]/.test(connectionString) ? false : { rejectUnauthorized: false },
    });
    // An idle client can be dropped by the database (restart, network blip). Without a listener
    // pg re-throws it as an uncaught error and takes the whole server down.
    pool.on("error", (error) => console.error("postgres idle client error:", error.message));
  }
  return pool;
}

export const hasDatabase = () => Boolean(process.env.DATABASE_URL);

const MIGRATIONS = [
  `create table if not exists users (
     id bigserial primary key,
     email text not null unique,
     created_at timestamptz not null default now(),
     last_seen_at timestamptz not null default now(),
     signup_ip text,
     signup_user_agent text
   )`,
  `create table if not exists login_codes (
     id bigserial primary key,
     email text not null,
     code_hash text not null,
     ip text,
     attempts int not null default 0,
     expires_at timestamptz not null,
     consumed_at timestamptz,
     created_at timestamptz not null default now()
   )`,
  `create index if not exists login_codes_email_created on login_codes (email, created_at desc)`,
  `create index if not exists login_codes_ip_created on login_codes (ip, created_at desc)`,
  `create table if not exists api_keys (
     id bigserial primary key,
     user_id bigint not null references users(id) on delete cascade,
     key_hash text not null unique,
     created_at timestamptz not null default now(),
     last_used_at timestamptz
   )`,
  `create table if not exists installs (
     id bigserial primary key,
     user_id bigint not null references users(id) on delete cascade,
     brain_slug text not null,
     client text,
     created_at timestamptz not null default now()
   )`,
  `create index if not exists installs_brain on installs (brain_slug)`,
  `create table if not exists tool_calls (
     id bigserial primary key,
     user_id bigint references users(id) on delete set null,
     brain_slug text not null,
     tool text not null,
     query text,
     client_name text,
     created_at timestamptz not null default now()
   )`,
  `create index if not exists tool_calls_brain_created on tool_calls (brain_slug, created_at desc)`,
  `alter table api_keys add column if not exists client_id text`,
  // OAuth (MCP authorization): dynamically registered clients, sign-ins in progress,
  // authorization codes and refresh tokens.
  `create table if not exists oauth_clients (
     client_id text primary key,
     metadata jsonb not null,
     created_at timestamptz not null default now()
   )`,
  `create table if not exists oauth_requests (
     id text primary key,
     client_id text not null,
     redirect_uri text not null,
     code_challenge text not null,
     state text,
     resource text,
     scopes text,
     created_at timestamptz not null default now()
   )`,
  `create table if not exists oauth_codes (
     code_hash text primary key,
     client_id text not null,
     user_id bigint not null references users(id) on delete cascade,
     redirect_uri text not null,
     code_challenge text not null,
     resource text,
     expires_at timestamptz not null,
     used_at timestamptz
   )`,
  `create table if not exists oauth_refresh_tokens (
     token_hash text primary key,
     client_id text not null,
     user_id bigint not null references users(id) on delete cascade,
     resource text,
     created_at timestamptz not null default now(),
     revoked_at timestamptz
   )`,
];

export async function migrate(): Promise<void> {
  for (const statement of MIGRATIONS) await db().query(statement);
}
