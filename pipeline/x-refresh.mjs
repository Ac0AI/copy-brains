// Re-fetches the full text of a brain's long X posts. Earlier pulls stored Apify's `fullText`,
// which stops at about 280 characters, so long posts were cut short.
// Only posts already in the brain are fetched, one URL per run ($0.0004 each through apidojo/tweet-scraper).
// Usage: node pipeline/x-refresh.mjs <slug>   then: node pipeline/build.mjs <slug>
import { join } from "node:path";
import { apifyRun, brainDir, pool, readJson, tweetText, writeJson } from "./lib.mjs";

const MAYBE_CUT = 250; // posts shorter than this were never truncated
const CONCURRENCY = 6;

const slug = process.argv[2];
if (!slug) throw new Error("Usage: node pipeline/x-refresh.mjs <slug>");
const dir = brainDir(slug);
const postsPath = join(dir, "sources", "x-posts.json");
const posts = await readJson(postsPath, []);
const todo = posts.filter((p) => p.type !== "linkedin_post" && p.text.length >= MAYBE_CUT);

const full = new Map();
// One run per post: the scraper returns nothing when given several tweet URLs at once.
await pool(todo, CONCURRENCY, async (post) => {
  try {
    const items = await apifyRun("apidojo/tweet-scraper", { startUrls: [post.url], maxItems: 1 }, 120);
    const t = items.find((i) => String(i.id) === post.id.replace(/^x-/, ""));
    if (t) full.set(String(t.id), tweetText(t));
  } catch (error) {
    console.warn(`${post.id}: ${error.message}`);
  }
});

let updated = 0;
for (const post of posts) {
  const text = full.get(post.id.replace(/^x-/, ""));
  if (text && text.length > post.text.length + 5) {
    post.text = text;
    post.title = text.replace(/\s+/g, " ").slice(0, 90);
    updated++;
  }
}
await writeJson(postsPath, posts);

const candidatesPath = join(dir, "candidates.json");
const candidates = await readJson(candidatesPath, null);
if (candidates) {
  for (const p of candidates.posts) {
    const text = full.get(p.id);
    if (text && text.length > p.text.length) p.text = text;
  }
  await writeJson(candidatesPath, candidates);
}
console.log(slug, { checked: todo.length, returned: full.size, updated, estUsd: +(full.size * 0.0004).toFixed(2) });
