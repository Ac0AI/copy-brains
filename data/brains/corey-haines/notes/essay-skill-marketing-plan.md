## Corey's definition of the marketing-plan skill and its 13-section AARRR structure

Corey wrote an open-source agent skill, "marketing-plan", that produces a 12-month fractional-CMO (fCMO) marketing plan for a client, a company he advises, or the user's own product. The output is one Notion-paste-ready markdown document of roughly 8,000-12,000 words, saved as `~/marketing-plans/{client-slug}/final_plan.md`.

- The workflow has three phases:
  - INIT: research and structured intake.
  - REVIEW: walk through each of the 13 sections interactively.
  - FINALIZE: compile, verify cross-references, optionally publish to a shared repo.
- The plan is structured by AARRR: Acquisition, Activation, Retention, Referral, Revenue. Brand and content are cross-cutting rather than their own stage.
- The 13 sections are:
  1. Executive summary: 3 big bets, 90-day priorities, 12-month outcome.
  2. Strategic frame.
  3. Current state.
  4. Acquisition.
  5. Activation.
  6. Retention.
  7. Referral.
  8. Revenue.
  9. 90-day roadmap.
  10. 12-month outlook.
  11. Marketing operations stack.
  12. Tactical idea bank.
  13. Measurement, RACI, open decisions, appendix.
- The 90-day roadmap runs weeks 1-2 (Unblock), 3-4 (Foundation), 5-8 (Velocity), 9-12 (Compound). It is AARRR-tagged and owner-assigned.
- Section 12 cross-references all 139 ideas from his marketing-ideas library to an AARRR stage and a client status: Now, Q2, Q3+, Q4+, or Skip.
- Section 3 scores the client against a 17-section current-state rubric, 0-5 per section. If scores come from materials rather than a real audit, the section is labeled "scored from materials" so the team can push back.
- A plan is "a single coherent plan" that consolidates scattered work: SEO research, brand voice docs, audit findings, onboarding analyses.
- Corey says the executive summary should be readable in 60 seconds and able to be lifted into an investor or board update. It is written like "a thoughtful colleague, not a deck-slide-writer".
- Rate definitions divide matching closed windows. A trial still inside its window is pending, not failed, and stays out of the denominator.

## Marketing as investing: the philosophy behind every plan

Corey says AARRR gives the plan its structure and "marketing as investing" gives it its spine. This is adapted from his book *Founding Marketing* (Ch. 1).

- **Marketing is like investing.** Treat the plan as a compounding portfolio, not a campaign calendar.
  - Favor buy-and-hold assets (SEO content, a newsletter, a community, a referral loop) over one-off spikes.
  - Diversify so no single channel carries the plan.
  - Time in market beats timing the market.
- **No silver bullets, a hundred golden pellets.** Growth comes from stacking many small compounding assets. Be suspicious of any recommendation that promises to be "the" thing.
- **One asset, many returns.** A cornerstone piece can rank in search, earn backlinks, feed the newsletter, seed social, and become a conference talk. When sequencing, prefer assets with the most downstream reuse.
- **Audition, not an auction.** You earn attention by being worth paying attention to; you don't buy a captive audience. Marketing is non-deterministic, so run a portfolio of bets and double down on what works.
- **Hope is not a strategy.** Every move names its mechanism and leading indicator. A move that can't be tied to a measurable gets labeled an experiment with a kill criterion.

## The market-quality gate: problem size × frequency

Before planning how to market, Corey has the plan score the core problem on two axes, size (how painful or valuable) and frequency (how often felt). He uses it as a strategic gate in Section 2.

- Large problem, high frequency: the best quadrant, "build here". Marketing compounds.
- Large problem, low frequency: winnable but expensive to keep top-of-mind (long sales cycles, retargeting-heavy).
- Small problem, high frequency: habit-forming but easy to churn on price; needs strong retention.
- Small problem, low frequency: weakest; hard to justify attention or spend.
- If the product sits in a weaker quadrant, the plan says so plainly. It constrains realistic CAC, channel mix and budget, and goes into Section 13's open decisions instead of being papered over.
- When the gate raises "is this market big enough?", size it with TAM/SAM/SOM using four triangulated methods (bottom-up, search-led, competitor-led, channel-led) plus a 10-factor attractiveness scorecard. He gives confidence-labeled ranges instead of single precise numbers.

## Budget setting and funding-stage capability unlocks

Corey wants every plan to state what changes when funding closes or budget unlocks. That makes it investor-friendly and honest about what the team can execute now.

- **Funding-stage anchors:**
  - Pre-seed/bootstrapped: $0-$2K/mo total marketing spend, organic only.
  - Seed close: $5-$15K/mo paid test budget; first marketing hire.
  - Seed deployment: $20-$50K/mo paid; second marketing hire.
  - Series A: $50-$150K/mo paid; performance, content and designer; consider international.
  - Series B+: $150K+/mo paid; brand campaigns; PR firm; full-stack marketing org.
  - Adjust by category: consumer apps and ecommerce can spend more, deep-tech B2B less.
- **Two methods to set the actual budget:**
  - Revenue-based: 5-40% of ARR. Start from comfortable spend and forecast the revenue. Best when historical CAC data exists.
  - Goal-based: reverse-engineer from the revenue target. Formula: `[(New ARR / (ARPC × 12)) × CAC] / annual retention rate`. Best for fundraising or a fixed goal.
- Add 10-20% experimental budget on top. CAC is the main dependency, and this layer funds the next channel before the current one plateaus.
- For VC-backed Series A+ clients, anchor the 12-month outlook to the 3-3-2-2-2 rule: 3× in years 1-2, then 2× in years 3-7 from $1M ARR.
- Blended CAC must include salaries, content costs, tools and retainers, not just paid ad spend. "CAC unknown is the highest-impact open decision" because every revenue projection depends on it.

## Growth patterns: S-curves, phases and 70/20/10

Corey says pitch decks show hockey sticks, but real SaaS growth is a series of S-curves with plateaus between them.

- **Phases by ARR:**
  - $0-10K: grueling.
  - $10K-100K: the treacherous middle.
  - $100K-1M: acceleration.
  - Section 3 names the current phase and Section 10 sequences the next.
- **Linear vs step-function:** healthy growth is mostly linear (predictable monthly additions) punctuated by step-functions such as an enterprise tier launch, a new segment or a channel breakthrough. Plans should describe both honestly and not promise exponential growth.
- **S-curve layering:** layer Channel × Product × Market, and start the next S-curve while the current one is still growing. Riding one curve to its ceiling before investing in the next produces multi-month plateaus.
- **70/20/10 allocation:** split effort and budget 70% current, 20% next, 10% experimental, so the next S-curve is funded before the current one plateaus.
- **Weekly tracking:** review leading indicators weekly. A flattening curve is the trigger to shift weight toward the next curve, "not a reason to push harder on the current".

## Team and agency model

Corey's view: strategy lives in-house, and execution can often be outsourced.

- The first hire is a strategist, not a tactician. He wants a π-shaped marketer (two deep skill sets). High-leverage combos: Product Marketing + Growth Marketing, Product Marketing + Content Marketing, Growth Marketing + Content Marketing.
- Title conservatively. The first marketing hire is almost always Manager or Lead, not VP or CMO, because inflated titles paint the org into a corner when you scale.
- Most pre-Series-A companies should use individual contractors for nearly all outsourced work, then deepen agency relationships in the Growth and Scale stages.
- A small team plus an fCMO plus the marketing-skills library plus MCP integrations "can output the work of a 15-20-person traditional marketing org". The plan's Section 11 maps skills and MCP/API integrations to each AARRR stage to show this.

## What every plan must customize, and client-type variations

Corey says "a generic plan is a failed plan". Every plan must be tailored on:

- Exact current monthly budget by line (paid, tools, headcount, retainers), blended CAC, and % of ARR.
- Unit economics: ARPC, annual retention rate, LTV.
- Team composition, who owns what, and whether the strategic owner is π-shaped, T-shaped or tactical-only.
- Current channels with status (working / not / TBD).
- Past work worth acknowledging (launches, PR, content, partnerships).
- SaaS growth phase.
- Future funding milestones and what each unlocks.
- The named skill and tool/MCP connection that executes each move.

Anything he can't confirm in intake goes to Section 13's "Open decisions", never glossed over. Variations by client type:

- **B2B SaaS:**
  - Acquisition: SEO, content, outbound, LinkedIn.
  - Activation: signup plus product trial.
  - Retention: product engagement plus a CSM motion.
  - Referral: customer advocacy.
  - Revenue: expansion / NRR.
- **D2C consumer app:**
  - Acquisition: App Store, paid social, influencer, PR.
  - Activation: onboarding, first session, paywall.
  - Retention: lifecycle email and push.
  - Referral: sharing mechanics.
  - Revenue: subscription plus upsell.
- **Hardware-led:**
  - Acquisition: PR, retail, Amazon, Shopify SEO.
  - Activation: unboxing, setup, first use.
  - Retention: software companion and community.
  - Referral: gifting and reviews.
  - Revenue: blended LTV across hardware, accessories and subscription.
- **Marketplace:**
  - Activation has two sides (supply and demand).
  - Retention is repeat transaction frequency.
  - Revenue is take-rate × GMV.
- **Developer tool:**
  - Acquisition: technical content, DevRel, documentation SEO.
  - Activation: first build or first integration.
  - Retention: depth of integration.
  - Referral: team adoption.

## Quality bar and failure modes for a good plan

Corey lists what separates a strong plan from a generic one.

- **Good signals:**
  - Every move names its AARRR stage.
  - Recommendations are anchored in the client's real budget, team and channels.
  - The 90-day roadmap has owners, not just actions.
  - The funding-stage section explains what changes when the next round closes.
  - The ops stack names specific skills and MCPs per move.
  - The idea bank shows what is being skipped and why.
  - The executive summary stands alone.
  - Open decisions are explicit.
- **Failure modes:**
  - Listing tactics without sequencing.
  - Recommending things the team can't execute at its size.
  - Pretending paid budget exists before the round closes.
  - Glossing over uncomfortable metrics such as churn instead of naming them as open decisions.
  - Generic language like "build a community" or "improve SEO".
  - Ignoring brand voice.
  - Padding with skills or ideas the client doesn't need.
  - Not acknowledging work the team is proud of.
- Length: default to comprehensive ("a 10,000-word plan with the right structure is more useful than a 3,000-word plan that misses the ops stack or the idea bank"), but stay dense. If a section has nothing to say, say so explicitly, for example "Q4+ — long-game / not in scope for this 12-month plan".

## Intake questions and operating mechanics for running the skill

Corey's INIT intake covers the questions below. The skill is resumable, and finalized plans are never silently overwritten.

- **Intake questions:**
  1. Funding state: round, amount raised, burn, runway, next round timing.
  2. Team: everyone who touches marketing, what each owns, where the gaps are.
  3. Budget: current monthly spend by line, and what unlocks when the next round closes.
  4. Current channels: what's working, what's not, what hasn't been tried.
  5. Already done: past campaigns, launches, content and PR to acknowledge.
  6. In-flight: what's drafted but unshipped, and what blocks it.
  7. Tooling stack: for example Customer.io/Mailchimp/Resend, Shopify/Stripe/App Store Connect, GA4/Mixpanel/Amplitude, GitHub/Notion/Figma.
  8. Beta or GA: GA timeline, throttling, gates.
  9. The most important thing to fix this quarter.
  10. The most important thing to ignore this quarter.
- **Invocation:** `/marketing-plan {client-name-or-domain}`. The skill reads `~/marketing-plans/{client-slug}/progress.md` and resumes through the states fresh → INIT → REVIEW → FINALIZE → finalized. For a finalized plan, the user chooses to revise as v{N+1}, start fresh, or re-open a section.
- **Path safety:** slugify the client name to lowercase `[a-z0-9-]`, reject `..`, `/` and absolute paths, and never read or write outside `~/marketing-plans/` so one client's data doesn't leak into another's context.
- **Review loop:** each section is shown in chat and the user can approve, adjust, add observations, or expand. Each confirmed section is saved to `sections/01.md`, `02.md`, and so on.
- **Finalize:** compile `final_plan.md`, verify marketing-ideas numbers, related skills and MCP integrations, check for machine-specific paths that shouldn't ship, and confirm brand voice matches the strategic frame.
- **When not to use it:** for a single-channel execution document, use the channel-specific skill (`emails`, `ads`, `seo-audit`, `onboarding`). For ideas without commitment to a plan, use `marketing-ideas`.
- **Companion skills:**
  - `product-marketing`: run first to capture positioning, ICP and voice.
  - `customer-research`: deepens ICP and voice-of-customer.
  - `onboarding`: Section 5.
  - `emails`: Section 6.
  - `referrals`: Section 7.
  - `pricing`: Section 8.
  - `seo-audit`, `ai-seo`, `programmatic-seo`: SEO within Section 4.
  - `ads`, `ad-creative`: paid, once budget unlocks.
  - `launch`: launch moments.
