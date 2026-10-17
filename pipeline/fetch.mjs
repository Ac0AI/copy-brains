// Step 3: pull full text for the curated shortlist only.
// Usage: node pipeline/fetch.mjs <slug>
// Reads shortlist.json + candidates.json, writes sources/<id>.md and sources.json.
import { mkdir, writeFile, access } from "node:fs/promises";
import { join } from "node:path";
import { stripLinkTail } from "./clean.mjs";
import { brainDir, contextDev, pool, readJson, scrapeCreators, usage, writeJson, ytTranscript } from "./lib.mjs";

const slug = process.argv[2];
if (!slug) throw new Error("Usage: node pipeline/fetch.mjs <slug>");
const dir = brainDir(slug);
const shortlist = await readJson(join(dir, "shortlist.json"));
const candidates = await readJson(join(dir, "candidates.json"));
const sourcesDir = join(dir, "sources");
await mkdir(sourcesDir, { recursive: true });

const decode = (s) =>
  s
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

const slugify = (url) =>
  new URL(url).pathname
    .replace(/\/+$/, "")
    .split("/")
    .pop()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .slice(0, 60) || new URL(url).hostname.replace(/\W+/g, "-");

const exists = (path) => access(path).then(() => true, () => false);

async function videoText(video) {
  try {
    const result = await ytTranscript("/api/transcript", { videoId: video.id });
    if (result.success && result.transcript?.length) return decode(result.transcript.map((t) => t.text).join(" "));
  } catch (error) {
    if (error.status !== 404) console.warn(`transcript3 ${video.id}: ${error.message}`);
  }
  // Fallback: ScrapeCreators charges one credit and covers videos the first API misses.
  let result;
  try {
    result = await scrapeCreators("/v1/youtube/video/transcript", { url: video.url });
  } catch (error) {
    if (error.status === 402) return null; // out of credits: drop the video
    throw error;
  }
  return result.transcript_only_text ? decode(result.transcript_only_text) : null;
}

async function pageText(page) {
  const result = await contextDev("POST", "/web/scrape", {
    body: { url: page.url, formats: { markdown: true }, sharedParams: { mainContentOnly: true } },
  });
  return { text: result.markdown?.data ? stripLinkTail(result.markdown.data) : null, title: result.metadata?.title ?? null };
}

function frontmatter(meta) {
  const lines = Object.entries(meta)
    .filter(([, v]) => v != null && v !== "")
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`);
  return `---\n${lines.join("\n")}\n---\n\n`;
}

const index = [];
const failures = [];

await pool(shortlist.videos ?? [], 4, async (video) => {
  const id = `yt-${video.id}`;
  const path = join(sourcesDir, `${id}.md`);
  const candidate = candidates.videos.find((v) => v.id === video.id) ?? {};
  const meta = {
    id,
    type: "youtube",
    title: video.title,
    url: video.url,
    publishedAt: video.date ?? candidate.date,
    outlet: video.channel ?? candidate.channel,
    durationSec: video.seconds ?? candidate.seconds,
    views: candidate.views,
    topics: video.topics,
  };
  if (!(await exists(path))) {
    const text = await videoText(video).catch((error) => {
      failures.push({ id, error: error.message });
      return null;
    });
    if (!text) return failures.push({ id, error: "no transcript" });
    await writeFile(path, frontmatter(meta) + text + "\n");
  }
  index.push(meta);
});

await pool(shortlist.pages ?? [], 1, async (page) => {
  const id = `essay-${slugify(page.url)}`;
  const path = join(sourcesDir, `${id}.md`);
  const meta = { id, type: "essay", title: page.title, url: page.url, outlet: new URL(page.url).hostname, topics: page.topics };
  if (!(await exists(path))) {
    const result = await pageText(page).catch((error) => {
      failures.push({ id, error: error.message });
      return null;
    });
    if (!result?.text) return failures.push({ id, error: "no markdown" });
    meta.title = page.title ?? result.title;
    await writeFile(path, frontmatter(meta) + result.text + "\n");
  }
  index.push(meta);
});

const postsById = new Map(candidates.posts.map((p) => [p.id, p]));
const posts = (shortlist.posts ?? [])
  .map((s) => ({ pick: s, post: postsById.get(s.id) }))
  .filter(({ post }) => post)
  .map(({ pick, post }) => ({
    id: post.platform === "linkedin" ? `li-${post.id}` : `x-${post.id}`,
    type: post.platform === "linkedin" ? "linkedin_post" : "x_post",
    title: post.text.replace(/\s+/g, " ").slice(0, 90),
    url: post.url,
    publishedAt: post.date,
    outlet: post.platform === "linkedin" ? "LinkedIn" : "X",
    views: post.views,
    likes: post.likes,
    topics: pick.topics,
    text: post.text,
  }));
await writeJson(join(sourcesDir, "x-posts.json"), posts);
index.push(...posts.map(({ text, ...meta }) => meta));

await writeJson(join(dir, "sources.json"), { slug, fetchedAt: new Date().toISOString(), sources: index, failures });
const byType = index.reduce((acc, s) => ({ ...acc, [s.type]: (acc[s.type] ?? 0) + 1 }), {});
console.log(slug, byType, "failures:", failures.length, usage);
