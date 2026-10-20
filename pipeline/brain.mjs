// Step 7: write data/brains/<slug>/brain.json, the manifest the site reads (docs/brain-schema-ui.md).
// Editorial fields (tagline, topics, principles, sample Q&A) come from headless Claude over the
// source cards; counts, links and sources are computed here so they always match the index.
// Usage: node pipeline/brain.mjs <slug>   (needs index.json from build.mjs)
import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { brainDir, focusOf, isPost, loadPerson, readJson, writeJson } from "./lib.mjs";

const MCP_BASE = process.env.BRAINS_MCP_BASE ?? "https://mcp.brains.ceo";
const CATEGORIES = ["indie-hackers", "ceos", "investors", "ai-builders", "marketers", "operators", "health", "thinkers"];
const TYPE_MAP = { youtube: "youtube", essay: "essay", podcast: "podcast", x_article: "x_article", x_post: "x_post", linkedin_post: "linkedin_post" };

const slug = process.argv[2];
if (!slug) throw new Error("Usage: node pipeline/brain.mjs <slug>");
const person = await loadPerson(slug);
const focus = focusOf(person);
const dir = brainDir(slug);
const index = await readJson(join(dir, "index.json"));
const candidates = await readJson(join(dir, "candidates.json"));

const sourceIdList = index.sources.map((s) => s.id);
const SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["shortName", "tagline", "role", "company", "categories", "quote", "topics", "principles", "sampleQA", "featuredSourceIds"],
  properties: {
    shortName: { type: "string" },
    tagline: { type: "string", maxLength: 80 },
    role: { type: "string" },
    company: { type: "string" },
    categories: { type: "array", items: { type: "string", enum: CATEGORIES }, minItems: 1, maxItems: 3 },
    quote: {
      type: "object",
      additionalProperties: false,
      required: ["text", "sourceId"],
      properties: { text: { type: "string", maxLength: 140 }, sourceId: { type: "string", enum: sourceIdList } },
    },
    topics: {
      type: "array",
      minItems: 3,
      maxItems: 6,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["id", "label", "summary", "sampleQuestion", "sourceIds"],
        properties: {
          id: { type: "string" },
          label: { type: "string" },
          summary: { type: "string", maxLength: 120 },
          sampleQuestion: { type: "string", maxLength: 90 },
          sourceIds: { type: "array", minItems: 1, maxItems: 8, items: { type: "string", enum: sourceIdList } },
        },
      },
    },
    principles: {
      type: "array",
      minItems: 3,
      maxItems: 5,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["text", "sourceIds"],
        properties: {
          text: { type: "string", maxLength: 140 },
          sourceIds: { type: "array", minItems: 1, maxItems: 4, items: { type: "string", enum: sourceIdList } },
        },
      },
    },
    sampleQA: {
      type: "array",
      minItems: 1,
      maxItems: 3,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["question", "answer"],
        properties: {
          question: { type: "string" },
          answer: {
            type: "array",
            minItems: 2,
            maxItems: 4,
            items: {
              type: "object",
              additionalProperties: false,
              required: ["text", "sourceIds"],
              properties: {
                text: { type: "string" },
                sourceIds: { type: "array", minItems: 1, items: { type: "string", enum: sourceIdList } },
              },
            },
          },
        },
      },
    },
    featuredSourceIds: { type: "array", minItems: 3, maxItems: 6, items: { type: "string", enum: sourceIdList } },
  },
};

// Compact digest of the brain for the editor: every long-form card plus the most-liked posts.
const longForm = index.sources.filter((s) => !isPost(s.type));
const topPosts = index.sources
  .filter((s) => isPost(s.type))
  .sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0))
  .slice(0, 80);
const postText = new Map(index.chunks.filter((c) => /^(x|li)-/.test(c.sourceId)).map((c) => [c.sourceId, c.text]));
const digest = [
  `PERSON: ${person.name}${person.x ? ` (@${person.x})` : ""}.` +
    (candidates.profile?.bio ? ` X bio: ${candidates.profile.bio}` : "") +
    (candidates.linkedinProfile?.headline ? ` LinkedIn headline: ${candidates.linkedinProfile.headline}` : ""),
  "",
  "LONG-FORM SOURCES:",
  ...longForm.map(
    (s) =>
      `[${s.id}] ${s.title} (${s.outlet ?? ""}, ${s.publishedAt ?? ""}, quality ${s.quality})\n  ${s.summary}\n` +
      (s.principles ?? []).map((p) => `  - ${p.text} | "${p.quote}"`).join("\n"),
  ),
  "",
  "TOP POSTS:",
  ...topPosts.map((s) => `[${s.id}] (${s.type === "linkedin_post" ? "LinkedIn" : "X"}, ${s.publishedAt}, ${s.likes} likes) ${postText.get(s.id)?.replace(/\s+/g, " ").slice(0, 400)}`),
].join("\n");

const system = `You are the editor of "${person.name}'s brain" on The Brains, a directory of unofficial, cited knowledge bases of notable people's principles. This brain covers ${person.name}'s principles on ${focus.domain}. From the digest, write the brain's editorial fields.
- Everything must be supported by the cited source ids. Principles and the quote must be verbatim or a close paraphrase of what ${person.name} said in those sources. The quote must be verbatim from a principle quote or post in the digest.
- tagline: claim-style, factual, ≤ 80 chars (e.g. "Solo founder behind Photo AI and Nomad List"). role: e.g. "Indie hacker", "Founder & CEO". company: current main company.
- topics: 3-6 areas the brain is strongest on, ordered by weight; id is kebab-case; sampleQuestion is something ${focus.audience} would actually ask.
- sampleQA: short, concrete answers in ${person.name}'s actual positions, each line cited.
- featuredSourceIds: the 3-6 best long-form sources.
- Plain, specific language. No hype words.`;

function runClaude(prompt) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      "claude",
      ["-p", "--model", "opus", "--output-format", "json", "--json-schema", JSON.stringify(SCHEMA), "--tools", "",
        "--no-session-persistence", "--system-prompt", system],
      { stdio: ["pipe", "pipe", "pipe"] },
    );
    let out = "";
    let err = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (err += d));
    child.on("close", (code) => {
      if (code !== 0) return reject(new Error(`claude exited ${code}: ${(err || out).slice(0, 300)}`));
      const envelope = JSON.parse(out);
      resolve(envelope.structured_output ?? JSON.parse(envelope.result));
    });
    child.stdin.end(prompt);
  });
}

const editorial = await runClaude(digest);

// Avatar: keep the X (or LinkedIn) photo locally; the site renders it as a duotone until a sketch exists.
// `avatar` in people.json covers people with no X or LinkedIn photo (e.g. a public-domain portrait).
const avatarUrl = candidates.profile?.avatar || candidates.linkedinProfile?.avatar || person.avatar || null;
let photo;
if (avatarUrl) {
  const response = await fetch(avatarUrl);
  if (response.ok) {
    await writeFile(join(dir, "photo.jpg"), Buffer.from(await response.arrayBuffer()));
    photo = "photo.jpg";
  }
}

const sources = index.sources.map((s) => ({
  id: s.id,
  type: TYPE_MAP[s.type],
  title: s.title,
  url: s.url,
  publishedAt: s.publishedAt ?? null,
  ...(s.outlet ? { outlet: s.outlet } : {}),
  ...(s.durationSec ? { durationSec: s.durationSec } : {}),
  ...(s.views ? { views: s.views } : {}),
  topicIds: [],
  ...(s.summary ? { excerpt: s.summary.slice(0, 200) } : { excerpt: postText.get(s.id)?.slice(0, 200) }),
}));
for (const topic of editorial.topics) {
  for (const id of topic.sourceIds) sources.find((s) => s.id === id)?.topicIds.push(topic.id);
}

const byType = { x_post: 0, linkedin_post: 0, x_article: 0, youtube: 0, podcast: 0, essay: 0 };
for (const s of sources) byType[s.type]++;
const dates = sources.map((s) => s.publishedAt).filter((d) => /^\d{4}-\d{2}/.test(d ?? "")).sort();
const transcriptSeconds = sources.filter((s) => s.type === "youtube" || s.type === "podcast").reduce((t, s) => t + (s.durationSec ?? 0), 0);

// yt-api reports subscribers as text like "6.21M"; turn it into a number.
function subscribers(text) {
  const m = String(text ?? "").match(/([\d.]+)\s*([KMB])?/i);
  if (!m) return null;
  return Math.round(Number(m[1]) * ({ K: 1e3, M: 1e6, B: 1e9 }[m[2]?.toUpperCase()] ?? 1)) || null;
}

const previous = await readJson(join(dir, "brain.json"), null);
const now = new Date().toISOString();
const links = [];
if (person.x) links.push({ kind: "x", url: `https://x.com/${person.x}`, label: `@${person.x}` });
if (person.linkedin) links.push({ kind: "linkedin", url: `https://www.linkedin.com/in/${person.linkedin}`, label: "LinkedIn" });
if (candidates.youtubeChannel?.handle) links.push({ kind: "youtube", url: `https://www.youtube.com/${candidates.youtubeChannel.handle}` });
for (const site of person.sites ?? []) links.push({ kind: "website", url: `https://${site.domain}` });
for (const link of person.links ?? []) {
  const same = links.findIndex((l) => l.url.replace(/\/+$/, "") === link.url.replace(/\/+$/, ""));
  if (same === -1) links.push(link);
  else links[same] = { ...links[same], ...link };
}

const brain = {
  schemaVersion: 1,
  slug,
  name: person.name,
  ...editorial,
  avatar: {
    ...(photo ? { photo } : {}),
    ...(avatarUrl ? { remoteUrl: avatarUrl } : {}),
    alt: `Photo of ${person.name}`,
  },
  links,
  followers: {
    ...(person.x && candidates.profile?.followers ? { x: candidates.profile.followers } : {}),
    ...(candidates.linkedinProfile?.followers ? { linkedin: candidates.linkedinProfile.followers } : {}),
    ...(subscribers(candidates.youtubeChannel?.subscribers) ? { youtube: subscribers(candidates.youtubeChannel.subscribers) } : {}),
    asOf: now.slice(0, 10),
  },
  claim: { status: "unofficial" },
  stats: {
    longFormCount: sources.length - byType.x_post - byType.linkedin_post,
    xPostCount: byType.x_post,
    linkedinPostCount: byType.linkedin_post,
    byType,
    transcriptMinutes: Math.round(transcriptSeconds / 60),
    dateRange: { from: dates[0]?.slice(0, 7) ?? null, to: dates.at(-1)?.slice(0, 7) ?? null },
  },
  createdAt: previous?.createdAt ?? now,
  updatedAt: now,
  sources,
  mcp: {
    url: `${MCP_BASE}/${slug}/mcp`,
    serverName: `${slug}-brain`,
    auth: "none",
    tools: [
      { name: "search_brain", description: `Search ${person.name}'s ${focus.search}.`, readOnly: true },
      { name: "list_sources", description: `List every source in ${person.name}'s brain, with links.`, readOnly: true },
    ],
  },
};

await writeJson(join(dir, "brain.json"), brain);
console.log(slug, brain.tagline, brain.stats);
