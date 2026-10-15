// Lists a brain that someone runs themselves (e.g. Nevo David's mcp.nevo.md) in the directory.
// The site shows it like any other brain, but installs point at their MCP URL, not ours.
// Usage: node pipeline/external.mjs <slug>
// Reads pipeline/external/<slug>.json (editorial fields, cited by URL) and <slug>.sources.txt
// (the output of the brain's own list_sources tool). Writes data/brains/<slug>/brain.json.
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { brainDir, ROOT, scrapeCreators, writeJson } from "./lib.mjs";

const MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

const slug = process.argv[2];
if (!slug) throw new Error("Usage: node pipeline/external.mjs <slug>");
const config = JSON.parse(await readFile(join(ROOT, "pipeline", "external", `${slug}.json`), "utf8"));
const listing = await readFile(join(ROOT, "pipeline", "external", `${slug}.sources.txt`), "utf8");

function parseDate(text) {
  const full = text.match(/\b(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})\b/);
  if (full) return `${full[3]}-${String(MONTHS[full[2]]).padStart(2, "0")}-${full[1].padStart(2, "0")}`;
  const month = text.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})\b/);
  return month ? `${month[2]}-${String(MONTHS[month[1]]).padStart(2, "0")}` : null;
}

function typeOf(meta) {
  if (/X posts by/.test(meta)) return "x_post";
  if (/^X (article|post|video)/.test(meta)) return "x_article";
  if (/podcast|interview/i.test(meta)) return "podcast";
  if (/YouTube/.test(meta)) return "youtube";
  return "essay";
}

let postCount = 0;
const sources = [];
for (const line of listing.split("\n")) {
  const m = line.match(/^- (.+) \((https?:\/\/[^)\s]+)\): (.+)$/);
  if (!m) continue;
  const [, title, url, meta] = m;
  const type = typeOf(meta);
  if (type === "x_post") postCount += Number(meta.match(/(\d+) X posts/)?.[1] ?? 0);
  sources.push({
    id: `${type}-${sources.length + 1}`,
    type,
    title,
    url,
    publishedAt: parseDate(meta),
    outlet: meta.split(",")[1]?.trim() || meta.split(",")[0].trim(),
    topicIds: [],
    excerpt: meta.slice(0, 200),
  });
}

const idFor = (url) => {
  const hit = sources.find((s) => s.url === url);
  if (!hit) throw new Error(`Cited URL is not in the source list: ${url}`);
  return hit.id;
};
const cite = (urls) => urls.map(idFor);

const topics = config.topics.map(({ urls, ...t }) => ({ ...t, sourceIds: cite(urls) }));
for (const topic of topics) for (const id of topic.sourceIds) sources.find((s) => s.id === id).topicIds.push(topic.id);

const byType = { x_post: 0, x_article: 0, youtube: 0, podcast: 0, essay: 0 };
for (const s of sources) byType[s.type]++;
const dates = sources.map((s) => s.publishedAt).filter(Boolean).sort();

let followers = null;
let remoteUrl = null;
let photo;
try {
  const profile = await scrapeCreators("/v1/twitter/profile", { handle: config.x });
  followers = profile.legacy?.followers_count ?? profile.followers_count ?? null;
  remoteUrl = (profile.avatar?.image_url ?? profile.legacy?.profile_image_url_https ?? "").replace("_normal", "_400x400") || null;
  if (remoteUrl) {
    const response = await fetch(remoteUrl);
    if (response.ok) {
      await writeFile(join(brainDir(slug), "photo.jpg"), Buffer.from(await response.arrayBuffer()));
      photo = "photo.jpg";
    }
  }
} catch (error) {
  console.warn(`profile lookup failed: ${error.message}`);
}

const now = new Date().toISOString();
const brain = {
  schemaVersion: 1,
  slug,
  name: config.name,
  shortName: config.shortName,
  tagline: config.tagline,
  role: config.role,
  company: config.company,
  categories: config.categories,
  quote: { text: config.quote.text, sourceId: idFor(config.quote.url) },
  topics,
  principles: config.principles.map(({ urls, ...p }) => ({ ...p, sourceIds: cite(urls) })),
  sampleQA: config.sampleQA.map((qa) => ({
    question: qa.question,
    answer: qa.answer.map(({ urls, ...a }) => ({ ...a, sourceIds: cite(urls) })),
  })),
  featuredSourceIds: cite(config.featuredUrls),
  avatar: { ...(photo ? { photo } : {}), ...(remoteUrl ? { remoteUrl } : {}), alt: `Photo of ${config.name}` },
  links: config.links,
  followers: followers ? { x: followers, asOf: now.slice(0, 10) } : undefined,
  claim: config.claim,
  stats: {
    // Monthly post collections stand in for the individual posts the brain's own list reports.
    longFormCount: sources.length - byType.x_post,
    xPostCount: postCount,
    byType,
    dateRange: { from: dates[0]?.slice(0, 7) ?? null, to: dates.at(-1)?.slice(0, 7) ?? null },
  },
  createdAt: now,
  updatedAt: now,
  sources,
  mcp: config.mcp,
};

await writeJson(join(brainDir(slug), "brain.json"), brain);
console.log(slug, { sources: sources.length, longForm: brain.stats.longFormCount, posts: postCount, byType });
