## When Corey builds competitor comparison pages: formats, goals and search intent

Corey's "competitors" skill is a playbook for pages that rank for competitive search terms, help evaluators decide, and position the product. He covers four formats, each tied to a different search intent:

- **[Competitor] Alternative (singular).** The user is actively trying to switch from one named competitor. URL: `/alternatives/[competitor]` or `/[competitor]-alternative`. Keywords: "[Competitor] alternative", "alternative to [Competitor]", "switch from [Competitor]".
- **[Competitor] Alternatives (plural).** The user is researching options, earlier in the journey. URL: `/alternatives/[competitor]-alternatives`. Keywords: "[Competitor] alternatives", "best [Competitor] alternatives", "tools like [Competitor]".
- **You vs [Competitor].** The user is directly comparing you to a specific competitor. URL: `/vs/[competitor]` or `/compare/[you]-vs-[competitor]`. Keywords: "[You] vs [Competitor]" and the reverse.
- **[Competitor A] vs [Competitor B].** The user compares two other products. URL: `/compare/[competitor-a]-vs-[competitor-b]`. It captures search traffic for competitor terms and positions you as knowledgeable.

Before writing, he wants to understand the product (value proposition, differentiators, ideal customer, pricing model, honest strengths and weaknesses), the competitive landscape (direct and adjacent competitors, their positioning, search volume for competitor terms), and the goal (SEO traffic, sales enablement, converting competitor users, brand positioning).

He is firm on one rule: never guess the competitor. If the request doesn't name one and the product marketing context file doesn't identify it, ask and stop. Don't draft a polished page around the most likely candidate.

## Page structures for each format

**Singular alternative:**
1. Why people look for alternatives (validate their pain)
2. Summary: you as the alternative (quick positioning)
3. Detailed comparison (features, service, pricing)
4. Who should switch, and who shouldn't
5. Migration path
6. Social proof from switchers
7. CTA

**Plural alternatives:**
1. Why people look for alternatives (common pain points)
2. What to look for in an alternative (a criteria framework)
3. List of alternatives (you first, but include real options)
4. Summary comparison table
5. Detailed breakdown of each alternative
6. Recommendation by use case
7. CTA

He says to include 4-7 real alternatives: "Being genuinely helpful builds trust and ranks better."

**You vs Competitor:**
1. TL;DR summary (key differences in 2-3 sentences)
2. At-a-glance comparison table
3. Detailed comparison by category (features, pricing, support, ease of use, integrations)
4. Who you are best for
5. Who the competitor is best for (be honest)
6. What customers say (testimonials from switchers)
7. Migration support
8. CTA

**Competitor A vs Competitor B:**
1. Overview of both products
2. Comparison by category
3. Who each is best for
4. The third option (introduce yourself)
5. Comparison table of all three
6. CTA

## Core principles and essential sections

His principles for these pages:

- **Honesty builds trust.** Acknowledge competitor strengths, be accurate about your own limitations, and don't misrepresent competitor features. "Readers are comparing, they'll verify claims."
- **Depth over surface.** Go beyond feature checklists, explain why differences matter, and include use cases and scenarios.
- **Help them decide.** Different tools fit different needs. Be clear about who you're best for and who the competitor is best for, to reduce evaluation friction.
- **Modular content architecture.** Competitor data is centralized so updates propagate to every page, with a single source of truth per competitor.

Sections every page should have:

- **TL;DR summary** at the top for scanners, covering key differences in 2-3 sentences.
- **Paragraph comparisons.** Beyond tables, write a paragraph for each dimension explaining the differences and when each matters.
- **Feature comparison.** For each category, describe how each product handles it, list strengths and limitations, and give a bottom-line recommendation.
- **Pricing comparison.** Tier-by-tier, what's included, hidden costs, and a total cost calculation for a sample team size.
- **Who it's for.** Be explicit about the ideal customer for each option.
- **Migration section.** What transfers, what needs reconfiguration, support offered, and quotes from customers who switched.

## Evidence discipline for public claims about another company

Corey treats a comparison page as a public claim about another company. Every one "should survive the competitor's own team reading it."

- **"Not observed" is not "doesn't have."** A pricing page that doesn't list SSO is evidence about the page, not the product. Write "not listed on their pricing page (as of Mar 2026)" or drop the row. Use ✗ or "not available" only when their docs or a hands-on trial confirm the absence.
- **Date competitor facts.** Pricing and features change. Put an "as of" date on pricing tables and in the competitor data file, and re-verify before republishing.
- **One look is a snapshot.** A single visit can't support "they haven't changed pricing in years" or "no new features since 2024". That needs dated history such as a changelog or archived pages.
- **State what changed, not why.** "They moved SSO to the Enterprise tier" is a fact. "Because they're squeezing upmarket" is a guess. Leave motive out unless they've said it publicly.
- **Separate fact from interpretation.** Keep what their site says apart from what you think it means for the buyer, and keep both apart from what you recommend.

## Centralized competitor data and research process

Each competitor gets one source-of-truth profile (he suggests YAML) reused across every comparison page. It holds:

- Positioning and target audience
- Pricing (all tiers)
- Feature ratings
- Strengths and weaknesses
- Best for / not ideal for
- Common complaints from reviews
- Migration notes

His research process for each competitor:

1. **Product research.** Sign up, use it, and document features, UX and limitations.
2. **Pricing research.** Current pricing, what's included, hidden costs.
3. **Review mining.** G2, Capterra and TrustRadius for common praise and complaint themes.
4. **Customer feedback.** Talk to customers who switched, in both directions.
5. **Content research.** Their positioning, their own comparison pages, their changelog.

Refresh cadence:

- **Quarterly:** verify pricing and check for major feature changes.
- **When notified:** a customer mentions a competitor change.
- **Annually:** a full refresh of all competitor data.

## Auditing existing competitive assets for stale or risky claims

When asked to check existing competitive content, Corey audits every asset that makes competitor claims: vs and alternative pages, battle cards, talk tracks, objection docs, and comparison tables in decks.

1. **List each claim** about a competitor, with the asset and line it lives in.
2. **Re-verify each claim** against the competitor's current site, docs or changelog, and note the date checked. If you can't browse, mark claims unchecked and list what to verify. Never mark one Current without a check date.
3. **Mark each claim:**
   - **Current:** still true, source and date updated.
   - **Changed:** now wrong, with what it says now.
   - **Unverifiable:** it had a source once, but nothing current confirms or rules it out. Soften to "not listed (as of date)" or remove.
   - **Overclaimed:** stated as fact with no source (an unconfirmed ✗, a guessed motive, a "why we win" with no evidence). Rewrite to what the evidence supports or remove.
4. **Prioritize fixes.** Public pages first (buyers and competitors read them), then anything reps say on calls, then internal docs.
5. **Report:** assets audited, claims checked, counts by status, and a fix list with replacement wording.

He applies the same evidence rules to internal sales assets. Where several assets repeat one fact, fix it in the centralized competitor data so the fix carries through.

## SEO, internal linking and AI-answer expectations

- **Keyword targeting** follows the format table above: the alternative formats target "[Competitor] alternative(s)", the vs formats target "[A] vs [B]" in both orders.
- **Internal linking.** Link between related competitor pages, link from feature pages to relevant comparisons, and build a hub page linking to all competitor content.
- **Schema.** Consider FAQ schema for questions like "What is the best alternative to [Competitor]?"
- **AI answers.** Alternatives pages often earn citations in AI answers, but whether AI recommends your brand depends on offsite consensus (reviews, forums, analysts). For emerging brands, a self-ranked list can surface the competitors in the AI answer while the brand gets only the citation. He still says to publish for search intent and category framing, but to set expectations accordingly.

## Deliverables and questions to ask first

Corey's output for this work has four parts:

- **Competitor data file:** a complete YAML profile used across all comparison pages.
- **Page content:** for each page, the URL, meta tags, full copy by section, comparison tables and CTAs.
- **Page set plan:** recommended pages in priority order based on search volume.
- **Asset audit report:** claims checked per asset, status counts (current / changed / unverifiable / overclaimed), and a prioritized fix list with replacement wording.

Questions he asks up front:

1. What are common reasons people switch to you?
2. Do you have customer quotes about switching?
3. What's your pricing vs. competitors?
4. Do you offer migration support?

Related skills he points to: programmatic-seo (competitor pages at scale), copywriting (comparison copy), seo-audit (optimizing these pages), schema (FAQ and comparison schema), and sales-enablement (battle cards and internal sales collateral).
