// Step 1b: targeted X history pull through Apify's apidojo/tweet-scraper ($0.40 per 1,000 tweets).
// Only high-engagement original posts plus business-keyword posts, never the full archive.
// Usage: node pipeline/x-deep.mjs <slug> [minFaves=200] [maxItems=800]
// Merges results into candidates.json `posts` (deduped by id).
import { join } from "node:path";
import { brainDir, loadPerson, readJson, writeJson } from "./lib.mjs";

const BUSINESS_TERMS =
  "(revenue OR MRR OR ARR OR startup OR startups OR users OR customers OR marketing OR pricing OR growth OR launch OR ship OR shipped OR SEO OR distribution OR profit OR business OR founder OR hiring OR product)";

const [slug, minFavesArg, maxItemsArg] = process.argv.slice(2);
if (!slug) throw new Error("Usage: node pipeline/x-deep.mjs <slug> [minFaves] [maxItems]");
const person = await loadPerson(slug);
const minFaves = Number(minFavesArg ?? 200);
const maxItems = Number(maxItemsArg ?? 800);

const input = {
  searchTerms: [
    `from:${person.x} ${BUSINESS_TERMS} min_faves:${Math.round(minFaves / 2)} -filter:replies -filter:retweets`,
    `from:${person.x} min_faves:${minFaves} -filter:replies -filter:retweets`,
  ],
  sort: "Top",
  maxItems,
};

const url = new URL("https://api.apify.com/v2/acts/apidojo~tweet-scraper/run-sync-get-dataset-items");
url.searchParams.set("token", process.env.APIFY_TOKEN);
url.searchParams.set("timeout", "300");
const response = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(input),
  signal: AbortSignal.timeout(330_000),
});
if (!response.ok) throw new Error(`Apify ${response.status}: ${(await response.text()).slice(0, 300)}`);
const items = await response.json();

const posts = items
  .filter((t) => t.id && t.text && !t.noResults)
  .filter((t) => (t.author?.userName ?? person.x).toLowerCase() === person.x.toLowerCase())
  .filter((t) => !t.isRetweet)
  .map((t) => ({
    id: String(t.id),
    url: `https://x.com/${person.x}/status/${t.id}`,
    date: new Date(t.createdAt).toISOString().slice(0, 10),
    text: t.fullText ?? t.text,
    likes: t.likeCount ?? 0,
    views: t.viewCount ?? 0,
    isReply: !!t.isReply,
    isRetweet: false,
    foundBy: "apify-search",
  }));

const path = join(brainDir(slug), "candidates.json");
const candidates = await readJson(path);
const known = new Set(candidates.posts.map((p) => p.id));
const added = posts.filter((p) => !known.has(p.id));
candidates.posts.push(...added);
candidates.counts.posts = candidates.posts.length;
candidates.xDeep = { ranAt: new Date().toISOString(), input, returned: items.length, added: added.length, estUsd: +(items.length * 0.0004).toFixed(2) };
await writeJson(path, candidates);
console.log(slug, candidates.xDeep);
