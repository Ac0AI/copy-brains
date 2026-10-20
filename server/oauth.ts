// MCP authorization (OAuth 2.1 + dynamic client registration). The brain URLs are public; when a
// client (Claude, Cursor, ChatGPT, Codex...) connects, it opens /authorize, where the person signs
// in with their email and a 6-digit code. The access token we issue is their personal key.
import type { Response } from "express";
import { createHash, randomBytes } from "node:crypto";
import type { AuthorizationParams, OAuthServerProvider } from "@modelcontextprotocol/sdk/server/auth/provider.js";
import type { OAuthRegisteredClientsStore } from "@modelcontextprotocol/sdk/server/auth/clients.js";
import type { AuthInfo } from "@modelcontextprotocol/sdk/server/auth/types.js";
import { InvalidGrantError, InvalidTokenError } from "@modelcontextprotocol/sdk/server/auth/errors.js";
import type { OAuthClientInformationFull, OAuthTokens } from "@modelcontextprotocol/sdk/shared/auth.js";
import { hashKey, issueKey, resolveKey, signIdToken } from "./auth.js";
import { db } from "./db.js";
import { renderSignInPage } from "./oauth-page.js";

const CODE_TTL_SECONDS = 5 * 60;
const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");
const token = (prefix: string) => `${prefix}_${randomBytes(24).toString("base64url")}`;

// The brain slug a sign-in is for, from the RFC 8707 resource (…/<slug>/mcp) when the client sends one.
export function slugFromResource(resource: string | null | undefined): string | null {
  if (!resource) return null;
  try {
    return new URL(resource).pathname.match(/^\/([a-z0-9-]+)\/mcp\/?$/)?.[1] ?? null;
  } catch {
    return null;
  }
}

// The brain slug from a "brain:<slug>" scope, which our per-brain 401s ask clients to request.
export function slugFromScopes(scopes: string[] | undefined): string | null {
  return scopes?.map((s) => s.match(/^brain:([a-z0-9-]+)$/)?.[1]).find(Boolean) ?? null;
}

const clientsStore: OAuthRegisteredClientsStore = {
  async getClient(clientId) {
    const { rows } = await db().query<{ metadata: OAuthClientInformationFull }>(
      `select metadata from oauth_clients where client_id = $1`,
      [clientId],
    );
    return rows[0]?.metadata;
  },
  async registerClient(client) {
    const full = client as OAuthClientInformationFull;
    await db().query(`insert into oauth_clients (client_id, metadata) values ($1, $2)`, [full.client_id, full]);
    return full;
  },
};

export function createOAuthProvider(options: {
  issuer: string;
  brainName: (slug: string) => string | null;
  onAuthorized: (entry: { userId: string; slug: string | null; clientName: string | null }) => Promise<void>;
}): OAuthServerProvider {
  return {
    clientsStore,

    async authorize(client: OAuthClientInformationFull, params: AuthorizationParams, res: Response) {
      const id = token("req");
      await db().query(
        `insert into oauth_requests (id, client_id, redirect_uri, code_challenge, state, resource, scopes)
         values ($1, $2, $3, $4, $5, $6, $7)`,
        [id, client.client_id, params.redirectUri, params.codeChallenge, params.state ?? null, params.resource?.href ?? null, params.scopes?.join(" ") ?? null],
      );
      const slug = slugFromResource(params.resource?.href) ?? slugFromScopes(params.scopes);
      res
        .status(200)
        .type("html")
        .set("Cache-Control", "no-store")
        .send(renderSignInPage({ requestId: id, brainName: slug ? options.brainName(slug) : null, clientName: client.client_name ?? null }));
    },

    async challengeForAuthorizationCode(_client, authorizationCode) {
      const { rows } = await db().query<{ code_challenge: string }>(
        `select code_challenge from oauth_codes where code_hash = $1`,
        [sha256(authorizationCode)],
      );
      if (!rows[0]) throw new InvalidGrantError("Invalid authorization code");
      return rows[0].code_challenge;
    },

    async exchangeAuthorizationCode(client, authorizationCode, _codeVerifier, redirectUri): Promise<OAuthTokens> {
      const { rows } = await db().query<{ user_id: string; redirect_uri: string; resource: string | null }>(
        `update oauth_codes set used_at = now()
          where code_hash = $1 and client_id = $2 and used_at is null and expires_at > now()
          returning user_id, redirect_uri, resource`,
        [sha256(authorizationCode), client.client_id],
      );
      const grant = rows[0];
      if (!grant) throw new InvalidGrantError("Authorization code is invalid, expired or already used");
      if (redirectUri && redirectUri !== grant.redirect_uri) throw new InvalidGrantError("redirect_uri mismatch");

      const accessToken = await issueKey(grant.user_id, client.client_id);
      const refreshToken = token("brr");
      await db().query(
        `insert into oauth_refresh_tokens (token_hash, client_id, user_id, resource) values ($1, $2, $3, $4)`,
        [sha256(refreshToken), client.client_id, grant.user_id, grant.resource],
      );
      await options.onAuthorized({ userId: grant.user_id, slug: slugFromResource(grant.resource), clientName: client.client_name ?? null });
      // Dashboards like Manufact's read the connected account from an ID token; plain OAuth clients ignore it.
      const { rows: users } = await db().query<{ email: string }>(`select email from users where id = $1`, [grant.user_id]);
      const now = Math.floor(Date.now() / 1000);
      const idToken = signIdToken({ iss: options.issuer, sub: grant.user_id, aud: client.client_id, email: users[0]?.email, email_verified: true, iat: now, exp: now + 3600 });
      return { access_token: accessToken, token_type: "bearer", refresh_token: refreshToken, id_token: idToken };
    },

    async exchangeRefreshToken(client, refreshToken): Promise<OAuthTokens> {
      const { rows } = await db().query<{ user_id: string }>(
        `select user_id from oauth_refresh_tokens where token_hash = $1 and client_id = $2 and revoked_at is null`,
        [sha256(refreshToken), client.client_id],
      );
      if (!rows[0]) throw new InvalidGrantError("Invalid refresh token");
      return { access_token: await issueKey(rows[0].user_id, client.client_id), token_type: "bearer", refresh_token: refreshToken };
    },

    async verifyAccessToken(accessToken): Promise<AuthInfo> {
      const user = await resolveKey(accessToken);
      if (!user) throw new InvalidTokenError("Invalid or revoked token");
      return { token: accessToken, clientId: "brains", scopes: [], extra: { userId: user.userId, email: user.email } };
    },

    async revokeToken(client, request) {
      await db().query(`update oauth_refresh_tokens set revoked_at = now() where token_hash = $1 and client_id = $2`, [
        sha256(request.token),
        client.client_id,
      ]);
      await db().query(`delete from api_keys where key_hash = $1`, [hashKey(request.token)]);
    },
  };
}

// Called by the sign-in page once the email code checks out: mint the authorization code and
// return where the browser should go next (back to the MCP client).
export async function completeAuthorization(requestId: string, userId: string): Promise<string> {
  const { rows } = await db().query<{ client_id: string; redirect_uri: string; code_challenge: string; state: string | null; resource: string | null }>(
    `delete from oauth_requests where id = $1 and created_at > now() - interval '30 minutes'
     returning client_id, redirect_uri, code_challenge, state, resource`,
    [requestId],
  );
  const request = rows[0];
  if (!request) throw new Error("expired_request");
  const code = token("brc");
  await db().query(
    `insert into oauth_codes (code_hash, client_id, user_id, redirect_uri, code_challenge, resource, expires_at)
     values ($1, $2, $3, $4, $5, $6, now() + make_interval(secs => $7))`,
    [sha256(code), request.client_id, userId, request.redirect_uri, request.code_challenge, request.resource, CODE_TTL_SECONDS],
  );
  const target = new URL(request.redirect_uri);
  target.searchParams.set("code", code);
  if (request.state) target.searchParams.set("state", request.state);
  return target.href;
}

export async function requestExists(requestId: string): Promise<boolean> {
  const { rows } = await db().query(`select 1 from oauth_requests where id = $1 and created_at > now() - interval '30 minutes'`, [requestId]);
  return rows.length > 0;
}
