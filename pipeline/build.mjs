// Step 6: package a brain into the search index the MCP server loads.
// Usage: node pipeline/build.mjs <slug>
// Reads sources.json, cards/, notes/, sources/x-posts.json. Writes data/brains/<slug>/index.json.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { brainDir, isPost, loadPerson, readJson, writeJson } from "./lib.mjs";

const slug = process.argv[2];
if (!slug) throw new Error("Usage: node pipeline/build.mjs <slug>");
const person = await loadPerson(slug);
const dir = brainDir(slug);
const { sources } = await readJson(join(dir, "sources.json"));
const posts = await readJson(join(dir, "sources", "x-posts.json"), []);

const decodeEntities = (text) =>
  text.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");

const TYPE_LABEL = { youtube: "YouTube video", essay: "Article", podcast: "Podcast", x_article: "X article", x_post: "X post", linkedin_post: "LinkedIn post" };

function sections(markdown) {
  const out = [];
  let current = null;
  for (const line of markdown.split("\n")) {
    const heading = line.match(/^##\s+(.*)/);
    if (heading) {
      if (current) out.push(current);
      current = { heading: heading[1].trim(), lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current) out.push(current);
  return out.map((s) => ({ heading: s.heading, text: s.lines.join("\n").trim() })).filter((s) => s.text);
}

const indexSources = [];
const chunks = [];
const skipped = [];

for (const source of sources.filter((s) => !isPost(s.type))) {
  const card = await readJson(join(dir, "cards", `${source.id}.json`), null);
  const notes = await readFile(join(dir, "notes", `${source.id}.md`), "utf8").catch(() => null);
  if (!card || !card.personIsSpeaker || card.quality < 2 || !notes) {
    skipped.push({ id: source.id, reason: !card ? "no card" : !notes ? "no notes" : "off-person or low quality" });
    continue;
  }
  indexSources.push({
    id: source.id,
    type: source.type,
    title: card.title,
    originalTitle: source.title,
    url: source.url,
    publishedAt: source.publishedAt ?? null,
    outlet: source.outlet ?? null,
    durationSec: source.durationSec ?? null,
    views: source.views ?? null,
    topics: card.topics,
    summary: card.summary,
    principles: card.principles,
    quality: card.quality,
  });
  chunks.push({ sourceId: source.id, heading: "Summary", text: card.summary });
  for (const s of sections(notes)) chunks.push({ sourceId: source.id, heading: s.heading, text: s.text });
}

for (const post of posts) {
  indexSources.push({
    id: post.id,
    type: post.type ?? "x_post",
    title: decodeEntities(post.title),
    url: post.url,
    publishedAt: post.publishedAt,
    outlet: post.outlet ?? "X",
    views: post.views ?? null,
    likes: post.likes ?? null,
    topics: post.topics ?? [],
  });
  chunks.push({ sourceId: post.id, heading: null, text: decodeEntities(post.text) });
}

const index = {
  schemaVersion: 1,
  slug,
  name: person.name,
  x: person.x,
  ...(person.linkedin ? { linkedin: person.linkedin } : {}),
  builtAt: new Date().toISOString(),
  typeLabels: TYPE_LABEL,
  sources: indexSources,
  chunks,
};
await writeJson(join(dir, "index.json"), index);
const byType = indexSources.reduce((acc, s) => ({ ...acc, [s.type]: (acc[s.type] ?? 0) + 1 }), {});
console.log(slug, byType, "chunks:", chunks.length, "skipped:", skipped.length);
