// Connects to a running server as a real MCP client and exercises both tools on every brain.
// Usage: npm start (in another shell), then node pipeline/smoke.mjs [baseUrl=http://localhost:8790] ["query"]
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const base = process.argv[2] ?? "http://localhost:8790";
const query = process.argv[3] ?? "how to price a product";
const brains = await (await fetch(`${base}/brains`)).json();

for (const brain of brains) {
  const client = new Client({ name: "brains-smoke", version: "0.1.0" });
  await client.connect(new StreamableHTTPClientTransport(new URL(`${base}${brain.mcp}`)));
  const { tools } = await client.listTools();
  const search = await client.callTool({ name: "search_brain", arguments: { query, limit: 3 } });
  const list = await client.callTool({ name: "list_sources", arguments: {} });
  const text = search.content[0].text;
  console.log(`\n=== ${brain.name} (${brain.sources} sources) tools: ${tools.map((t) => t.name).join(", ")}`);
  console.log(`list_sources: ${list.content[0].text.split("\n").length} lines`);
  console.log(text.slice(0, 900) + (text.length > 900 ? "\n…" : ""));
  await client.close();
}
