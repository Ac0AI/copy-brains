# Brain runbook (one agent per brain)

You build one brain end to end. Work only inside `data/brains/<slug>/`. Never edit `pipeline/`, `server/`, `web/`, `docs/` (except this runbook is read-only), `pipeline/people.json`, or another brain's folder. Other agents run in parallel on other slugs. If a script is broken, report it instead of patching it.

All commands run from the repository root.

## Budget (hard caps per brain)
| Resource | Cap | Notes |
|---|---|---|
| Apify (cash) | $0.60 → `maxItems` ≤ 1,500 | `x-deep.mjs` prints `estUsd` |
| ScrapeCreators credits | 60 | discover uses 2; transcript fallback uses 1 per video |
| context.dev credits | 120 | 1 per page scraped; shared org allows ONE request at a time, so expect slow 429 retries; don't panic |
| RapidAPI calls | 300 | yt-api search + transcripts |
| `claude -p` concurrency | 2 | pass `2` as the concurrency arg to summarize/notes |

## Steps
1. **Discover:** `node pipeline/discover.mjs <slug>` → `candidates.json`. Check `counts`; if pages = 0 because a site map failed, that's OK when the person's long-form lives in videos.
2. **Deep X pull:** `node pipeline/x-deep.mjs <slug> <minFaves> <maxItems>` with the values in your brief. Skip if your brief says so.
3. **Curate:** write `shortlist.json` yourself (read candidates with python/jq, in batches):
   ```json
   { "slug": "<slug>",
     "videos": [{"id","url","title","channel","date","seconds","why","topics"}],
     "pages":  [{"url","title","why","topics"}],
     "posts":  [{"id","url","why","topics"}],
     "rejectedNotes": "...", "gaps": ["..."] }
   ```
   - videos: 12–25 where the person is actually speaking (guest/host/own channel). Drop videos about them, reaction/compilation clips, clips < 8 min unless uniquely valuable, duplicate uploads of the same interview, off-topic content.
   - pages: 5–30 written pieces BY them (own blog/essays first) or verbatim interview transcripts. Drop listicles, news about them, LinkedIn/Instagram reposts.
   - posts: 60–300 X posts that state a principle, tactic, concrete number/result, lesson or strong opinion about business, startups, growth, distribution, marketing, pricing, product, AI building, hiring, leadership, productivity. Drop politics, culture-war, jokes without a business point, memes, pure announcements, context-less replies, near-duplicates.
   - Topic vocabulary only: growth, distribution, marketing, pricing, product, building, ai, hiring, leadership, fundraising, bootstrapping, mindset, productivity, sales, seo, community, launch.
4. **Fetch:** `node pipeline/fetch.mjs <slug>`. Re-run once if there are transient failures (it skips finished files). A video with no transcript is fine to drop.
5. **Cards:** `node pipeline/summarize.mjs <slug> 2`.
6. **Notes:** `node pipeline/notes.mjs <slug> 2`.
   - If a run prints "session limit" / "hit your limit", stop and report it; don't loop.
   - If a FAILED line says the source text is missing, check that the source file has real body text; delete the bad `cards/<id>.json` and refetch/re-run.
7. **Index:** `node pipeline/build.mjs <slug>`.
8. **Manifest:** `node pipeline/brain.mjs <slug>` → `brain.json`.

## Quality gate (check before reporting)
- `brain.json` exists; every `sourceIds` / `featuredSourceIds` / `quote.sourceId` resolves to `sources[].id`.
- Long-form count ≥ 12 (≥ 8 is acceptable for people with little long-form) and posts ≥ 40 unless the person barely posts.
- Spot-read 3 notes files: third person, concrete, only the person's views (not the host's), no invented numbers.
- `quote.text` appears (near-)verbatim in a card quote or post.

## Report (under 120 words)
Counts by type, tagline, quote, spend (Apify $, ScrapeCreators credits, context.dev credits), any gaps or failures.
