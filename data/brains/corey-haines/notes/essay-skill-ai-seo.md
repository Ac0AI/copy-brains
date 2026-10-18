## AI SEO: citations, structure and where to show up

Corey argues AI SEO is a layer on top of normal SEO, not a replacement. "Traditional SEO gets you ranked. AI SEO gets you **cited**." Strong organic rankings remain one of the best predictors of AI visibility, but a well-structured page can be cited even from page 2 or 3.

- AI systems extract passages, not pages, so every key claim should work as a standalone statement.
- Google AI Overviews: Corey says to optimize for people and core Search, with strong E-E-A-T, original information and clean indexability.
- ChatGPT, Claude, Perplexity and Copilot: these reward extractable structure (passages, FAQs, comparison tables, definition blocks). He layers on `llms.txt` and machine-readable files for them.
- Google's own guide says no special markup or AI files are needed, and not to chunk or write separate content for AI.

## The three pillars: structure, authority, presence

Corey organizes the work into three pillars.

- **Structure:** make content extractable.
- **Authority:** make content citable.
- **Presence:** be where AI looks.

**Structural rules**
- Lead every section with a direct answer.
- Keep key answer passages to 40-60 words.
- Use H2/H3 headings that match how people phrase queries.
- Use tables for comparisons and numbered lists for processes.
- One idea per paragraph.
- Use definition, step-by-step, comparison, pros/cons, FAQ and statistic blocks.

## Authority levers from the Princeton GEO research

Corey cites the Princeton GEO study (KDD 2024, tested on Perplexity) and its visibility boosts:

- Cite sources: +40%
- Add statistics: +37%
- Add quotations: +30%
- Authoritative tone: +25%
- Improve clarity: +20%
- Technical terms: +18%
- Unique vocabulary: +15%
- Fluency: +15-30%
- Keyword stuffing: -10%, which he says actively hurts AI visibility

Best combination is fluency plus statistics. Low-ranking sites benefit more, up to 115% with citations.

Practical tactics:
- Include specific numbers with sources and dates; original data beats aggregated data.
- Use named authors with credentials and expert quotes with titles.
- Show "Last updated: [date]" and refresh competitive topics at least quarterly.
- Show first-hand experience and transparent sourcing.

Original-study stats drift. Re-check before quoting to a client, and don't forecast a site's traffic from them.

## Presence: third-party surfaces AI cites

Corey says AI cites your own site and the places that talk about you, in proportions that vary by engine. In one large dataset (Profound, July 2026), company sites took about 57% of citations (ChatGPT 47%, Gemini 69%). Shortlist recommendations lean on third-party consensus.

Surfaces to cover:
- Wikipedia: 7.8% of ChatGPT citations in Profound's Aug 2024 to Jun 2025 data.
- Reddit: 1.8% in the same data, then nearly wiped from ChatGPT by Aug 2026 retrieval changes. Use it as one surface in a portfolio, never the whole strategy.
- LinkedIn: front-load the target phrase, since a post's first words become its URL slug. ChatGPT now favors posts over articles; Gemini barely cites LinkedIn.
- Review sites (G2, Capterra, TrustRadius), industry publications, guest posts, YouTube, podcasts and Quora.

Make every third-party profile (G2, Capterra, Gartner, Crunchbase, LinkedIn) describe you with the same segment and positioning as your About page, because models look for consensus.

## Machine-readable files for agents

Corey notes AI agents are becoming buyers. Pricing locked in JavaScript or a "contact sales" wall gets skipped in favor of competitors whose information they can read.

- **`/pricing.md`:** per tier, list price, limits and features. Use consistent units, specific thresholds, and keep it current ("stale pricing is worse than no file"). Link it from the sitemap and pricing page.
- **`/llms.txt`:** overview of what the product does, who it's for, and links to key pages including pricing.
- **`/okf/`:** an Open Knowledge Format bundle (Google-backed, v0.1, June 2026). He says there's no confirmed ranking signal, so treat it like early schema.org.
- Agents read sites through visual rendering, DOM inspection and the accessibility tree. He recommends semantic HTML, labelled interactive elements, content that renders without heavy JS, and visible pricing, specs and contact info.
- Schema (Article, HowTo, FAQPage, Product, ItemList, Review, Organization) helps parsing, but he says no well-documented study isolates a citation lift from it.

## Auditing AI visibility and crawler access

**Audit steps**
1. Test 10-20 queries across ChatGPT, Perplexity and Google AI Overviews. Cover problem-aware, solution-aware, product-aware and most-aware queries, written the way people type into a chat box.
2. Keep only prompts that would change revenue. A glossary-question citation rarely sells anything.
3. Where competitors are cited and you aren't, compare structure, authority signals, freshness, schema and third-party presence.
4. If an assistant says something wrong or vague about you, fix the page that should state that fact. If you're absent, the sources it cites are your PR, review and directory target list.

**Crawler policy.** Treat AI user agents by purpose:
- Search discovery: `OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`.
- User retrieval: `ChatGPT-User`, `Claude-User`, `Perplexity-User`.
- Training: `GPTBot`, `ClaudeBot`.
- `Google-Extended` does not affect Search inclusion or ranking.

Blocking a training crawler doesn't necessarily block citations. Restricting discovery crawlers may cut visibility. Also check WAF and CDN rules separately.

## Format volatility, citation vs recommendation, and monitoring

**Format volatility.** Comparison articles (~33%) and listicles (~10%) were long top citation earners. ChatGPT 5.6 (Aug 2026) cut listicle citations by 50.5% and comparison-page citations by 32.1%, with `site:` and "official" retrieval surging. Format strategy is now per platform, and comparisons still work on Google AIO, Gemini and Perplexity. Evergreen winners are original research, definitive guides and owned "official" pages with extractable structure.

**Citation is not recommendation.** Being cited means your content was useful to consult. Being recommended on the buyer's shortlist is driven by web-wide consensus (reviews, forums, analysts, press). In one 100-query B2B study, 69% of AI Overview citations earned by self-promotional listicles came in answers recommending competitors.

**Query fan-out.** Google AI search generates concurrent related queries. Plan 5-10 related queries per topic and cover the full topical cluster, with one owning page per fact family. ChatGPT's fan-outs shifted toward `site:` and "official" searches post-5.6.

**Monitoring**
- AI answers are non-deterministic. Run each query 3-5 times per platform and track the mention rate with sample size (e.g. "cited 3/5, n=5").
- Tools: Otterly AI, Peec AI, ZipTie, LLMrefs, Profound, Ahrefs Brand Radar and Semrush.
- Google has no AI-specific Search Console reporting.
- Check manually each month: top 20 queries, who is cited, which page.

## Common mistakes Corey warns against

- Writing separate content "for AI", or chunking pages into fragments (risks Google's scaled content abuse policy).
- Mass-producing thin variations, or fake mentions, awards and reviews.
- Gating the most authoritative content, or hiding main content behind JS that doesn't render.
- Skipping E-E-A-T basics, or leaving content undated.
- Generic claims. "We're the best" won't get cited; "Our customers see 3x improvement in [metric]" will.
- Hiding pricing behind "contact sales".
- Not monitoring AI visibility at least monthly.
