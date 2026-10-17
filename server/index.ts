// The Brains MCP server: one stateless Streamable HTTP endpoint per brain at POST /<slug>/mcp.
import { mcpAuthRouter } from "@modelcontextprotocol/sdk/server/auth/router.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import express from "express";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";
import { renderAdmin, requireAdmin, toCsv } from "./admin.js";
import { AuthError, requestCode, resolveKey, verifyEmailCode } from "./auth.js";
import { type Brain, listSources, loadBrains, searchBrain } from "./brains.js";
import { hasDatabase, migrate } from "./db.js";
import { getBrain, listBrains, SLUG_RE, toCard } from "./site.js";
import { completeAuthorization, createOAuthProvider, requestExists } from "./oauth.js";
import { adminStats, emailRows, ensureInstall, recordInstall, recordToolCall, uniqueInstallsBySlug } from "./tracking.js";

const DATA_DIR = join(fileURLToPath(import.meta.url), "..", "..", "data", "brains");
const WEB_DIR = join(fileURLToPath(import.meta.url), "..", "..", "web");
const PORT = Number(process.env.PORT ?? 8790);
const PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL?.replace(/\/$/, "") ?? null;
// MCP endpoints live on their own host (mcp.brains.ceo); the same service answers both.
const MCP_BASE_URL = process.env.MCP_BASE_URL?.replace(/\/$/, "") ?? null;
const mcpHost = MCP_BASE_URL ? new URL(MCP_BASE_URL).host : null;
// OAuth issuer and base for MCP URLs: the MCP host in production, this server locally.
const ISSUER = MCP_BASE_URL ?? PUBLIC_BASE_URL ?? `http://localhost:${PORT}`;
// MCP endpoints need a signed-in user once accounts exist; local runs without a database stay open.
const REQUIRE_AUTH = hasDatabase() && process.env.REQUIRE_KEY !== "false";

let brains = await loadBrains(DATA_DIR);
// Pick up brains the pipeline finishes while the server is running.
setInterval(() => {
  loadBrains(DATA_DIR)
    .then((next) => (brains = next))
    .catch((error) => console.error("brain reload failed:", error.message));
}, 60_000).unref();

if (hasDatabase()) await migrate();

interface Caller {
  userId: string | null;
  clientName: string | null;
}

function buildServer(brain: Brain, caller: Caller): McpServer {
  const firstName = brain.name.split(" ")[0];
  const posts = !brain.linkedin ? "X posts" : brain.x ? "X and LinkedIn posts" : "LinkedIn posts";
  const server = new McpServer(
    { name: `${brain.slug}-brain`, version: "0.1.0" },
    {
      instructions:
        `${brain.name}'s principles on growth, distribution, marketing, pricing and building a business, ` +
        `curated from public talks, interviews, essays and ${posts}. Unofficial: not affiliated with or endorsed by ${brain.name}. ` +
        `Use search_brain for anything about how ${firstName} builds, grows or prices products, and cite the returned sources.`,
    },
  );

  server.registerTool(
    "search_brain",
    {
      description:
        `Search ${brain.name}'s playbooks on growth, distribution, marketing, pricing and building a business, ` +
        `from his talks, interviews, essays and ${posts}. Ask in plain words, one topic per call; call again with ` +
        `other words to dig deeper. Returns passages with their source.`,
      inputSchema: {
        query: z.string().min(2).max(500).describe("What to look for, in plain words"),
        limit: z.number().int().min(1).max(10).default(6).describe("How many passages to return"),
      },
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async ({ query, limit }) => {
      recordToolCall({ userId: caller.userId, slug: brain.slug, tool: "search_brain", query, clientName: caller.clientName ?? undefined });
      return { content: [{ type: "text", text: searchBrain(brain, query, limit) }] };
    },
  );

  server.registerTool(
    "list_sources",
    {
      description: `List every talk, interview, essay and post collection in ${brain.name}'s brain, with links.`,
      inputSchema: {},
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async () => {
      recordToolCall({ userId: caller.userId, slug: brain.slug, tool: "list_sources", clientName: caller.clientName ?? undefined });
      return { content: [{ type: "text", text: listSources(brain) }] };
    },
  );

  return server;
}

const app = express();
// Railway puts exactly one proxy in front of us; a precise hop count keeps req.ip honest.
app.set("trust proxy", 1);
app.use(express.json({ limit: "1mb" }));

// The MCP host only serves MCP endpoints, OAuth and health; anything else goes to the website.
const MCP_HOST_PATHS = /^\/(?:[a-z0-9-]+\/mcp|health|\.well-known\/.*|authorize|token|register|revoke|oauth\/.*)$/;
app.use((req, res, next) => {
  if (!mcpHost || req.hostname !== mcpHost.split(":")[0] || MCP_HOST_PATHS.test(req.path)) return next();
  res.redirect(301, `${PUBLIC_BASE_URL ?? ""}${req.originalUrl}`);
});

const bearer = (req: express.Request) => req.get("authorization")?.match(/^Bearer\s+(\S+)$/i)?.[1] ?? null;
const siteOrigin = (req: express.Request) => PUBLIC_BASE_URL ?? `${req.protocol}://${req.get("host")}`;

function sendAuthError(res: express.Response, error: unknown) {
  if (error instanceof AuthError) return void res.status(error.status).json({ error: error.code, ...error.extra });
  console.error(error);
  res.status(500).json({ error: "server_error" });
}

// ---- MCP authorization: public brain URLs, sign-in with email + 6-digit code on connect ----
if (hasDatabase()) {
  const provider = createOAuthProvider({
    brainName: (slug) => brains.get(slug)?.name ?? null,
    onAuthorized: async ({ userId, slug, clientName }) => {
      if (slug && brains.has(slug)) await recordInstall(userId, slug, clientName);
    },
  });
  // Each brain is its own protected resource, all served by one authorization server.
  app.get("/.well-known/oauth-protected-resource/:slug/mcp", (req, res) => {
    const brain = brains.get(req.params.slug);
    if (!brain) return void res.status(404).json({ error: "not_found" });
    res.json({
      resource: `${ISSUER}/${brain.slug}/mcp`,
      authorization_servers: [ISSUER],
      bearer_methods_supported: ["header"],
      resource_name: `${brain.name}'s brain`,
    });
  });
  app.use(mcpAuthRouter({ provider, issuerUrl: new URL(ISSUER), resourceServerUrl: new URL(ISSUER), resourceName: "The Brains" }));

  app.post("/oauth/send-code", async (req, res) => {
    try {
      if (!(await requestExists(String(req.body?.requestId ?? "")))) return void res.status(410).json({ error: "expired_request" });
      await requestCode(req.body?.email, req.ip ?? null);
      res.json({ ok: true });
    } catch (error) {
      sendAuthError(res, error);
    }
  });

  app.post("/oauth/verify", async (req, res) => {
    try {
      const requestId = String(req.body?.requestId ?? "");
      if (!(await requestExists(requestId))) return void res.status(410).json({ error: "expired_request" });
      const user = await verifyEmailCode(req.body?.email, req.body?.code, { ip: req.ip ?? null, userAgent: req.get("user-agent") ?? null });
      res.json({ redirect: await completeAuthorization(requestId, user.userId) });
    } catch (error) {
      sendAuthError(res, error);
    }
  });
}

app.get("/health", (_req, res) => {
  res.json({ ok: true, brains: [...brains.keys()] });
});

app.get("/brains", (_req, res) => {
  res.json(
    [...brains.values()].map((b) => ({
      slug: b.slug,
      name: b.name,
      sources: b.sources.length,
      builtAt: b.builtAt,
      mcp: `/${b.slug}/mcp`,
    })),
  );
});

app.post("/:slug/mcp", async (req, res) => {
  const brain = brains.get(req.params.slug);
  if (!brain) {
    res.status(404).json({ jsonrpc: "2.0", error: { code: -32004, message: `No brain named "${req.params.slug}"` }, id: null });
    return;
  }
  // Bearer token from the OAuth flow; ?key= keeps early personal links working.
  const key = bearer(req) ?? (typeof req.query.key === "string" ? req.query.key : null);
  const user = hasDatabase() ? await resolveKey(key).catch(() => null) : null;
  if (REQUIRE_AUTH && !user) {
    // Tells the MCP client where to start OAuth (RFC 9728); it then opens our sign-in page.
    res
      .status(401)
      .set("WWW-Authenticate", `Bearer resource_metadata="${ISSUER}/.well-known/oauth-protected-resource/${brain.slug}/mcp"`)
      .json({ jsonrpc: "2.0", error: { code: -32001, message: `Sign in to use ${brain.name}'s brain: connect it from your MCP client.` }, id: null });
    return;
  }
  const clientName = req.body?.params?.clientInfo?.name ?? req.get("user-agent") ?? null;
  if (user) ensureInstall(user.userId, brain.slug, clientName);
  const server = buildServer(brain, { userId: user?.userId ?? null, clientName });
  const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
  try {
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
    res.on("close", () => {
      void transport.close();
      void server.close();
    });
  } catch (error) {
    console.error(`MCP request failed for ${brain.slug}:`, error);
    if (!res.headersSent) {
      res.status(500).json({ jsonrpc: "2.0", error: { code: -32603, message: "Internal server error" }, id: null });
    }
  }
});

// Plain-text previews of the two tools, for checking a brain in a browser.
app.get("/:slug/preview/search", (req, res) => {
  const brain = brains.get(req.params.slug);
  if (!brain) return void res.status(404).send(`No brain named "${req.params.slug}"`);
  const query = String(req.query.q ?? "").trim();
  if (query.length < 2) return void res.status(400).send("Pass ?q=<what to look for>");
  const limit = Math.min(10, Math.max(1, Number(req.query.limit ?? 6) || 6));
  res.type("text/plain; charset=utf-8").send(searchBrain(brain, query, limit));
});

app.get("/:slug/preview/sources", (req, res) => {
  const brain = brains.get(req.params.slug);
  if (!brain) return void res.status(404).send(`No brain named "${req.params.slug}"`);
  res.type("text/plain; charset=utf-8").send(listSources(brain));
});

// Stateless server: no SSE stream or session teardown.
app.get("/:slug/mcp", (_req, res) => {
  res.status(405).set("Allow", "POST").send("Method Not Allowed");
});

// ---- Website: static assets, JSON API and pages ----
app.use("/assets", express.static(join(WEB_DIR, "assets"), { maxAge: 0 }));

app.get("/api/brains", async (_req, res) => {
  const [all, installs] = await Promise.all([listBrains(DATA_DIR), uniqueInstallsBySlug().catch(() => new Map<string, number>())]);
  res.json(all.map((brain) => ({ ...toCard(brain), installs: installs.get(brain.slug) ?? 0 })));
});

// ---- Admin: who installed what, and the email list ----
app.get("/admin", requireAdmin, async (_req, res) => {
  res.type("html").send(renderAdmin(await adminStats()));
});

app.get("/admin/emails.csv", requireAdmin, async (_req, res) => {
  const stamp = new Date().toISOString().slice(0, 10);
  res.type("text/csv").set("Content-Disposition", `attachment; filename="the-brains-emails-${stamp}.csv"`).send(toCsv(await emailRows()));
});

app.get("/api/brains/:slug", async (req, res) => {
  const brain = await getBrain(DATA_DIR, req.params.slug);
  if (!brain) return void res.status(404).json({ error: `No brain named "${req.params.slug}"` });
  res.json(brain);
});

app.get("/media/:slug/:file", (req, res) => {
  const { slug, file } = req.params;
  if (!SLUG_RE.test(slug) || !["photo.jpg", "sketch.png"].includes(file)) return void res.status(404).end();
  res.sendFile(join(DATA_DIR, slug, file), { maxAge: "1h" }, (error) => {
    if (error && !res.headersSent) res.status(404).end();
  });
});

const sendPage = (res: express.Response, page: string, status = 200) =>
  res.status(status).set("Cache-Control", "no-cache").sendFile(join(WEB_DIR, page));

app.get("/", (_req, res) => sendPage(res, "index.html"));

// /<slug> and /<slug>/sources are the brain page (the sources view is an anchor on it).
app.get(["/:slug", "/:slug/sources"], async (req, res) => {
  const brain = await getBrain(DATA_DIR, req.params.slug);
  if (!brain) return void sendPage(res, "404.html", 404);
  sendPage(res, "brain.html");
});

app.use((_req, res) => sendPage(res, "404.html", 404));

app.listen(PORT, () => {
  console.log(`The Brains MCP on :${PORT} serving ${[...brains.keys()].join(", ") || "no brains yet"}`);
});
