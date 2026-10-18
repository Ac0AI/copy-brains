## Product marketing context as a persistent doc

Corey built an open-source "product-marketing" skill that makes an AI agent create one foundational document, `.agents/product-marketing.md`. It is meant to be created at the start of any project, before other marketing skills run. Every other marketing skill reads it, so the user never has to re-explain their product, audience, or positioning. He argues for capturing this once and reusing it.

- Legacy locations are `.claude/product-marketing.md` and `product-marketing-context.md`. If found, the skill offers to move the file to the canonical `.agents/` path.
- If the doc already exists, it reads it, summarizes the current Document version and last few Changelog entries, asks which sections to update, and gathers info only for those.
- If it doesn't exist, it offers two routes: auto-draft from the codebase (recommended) or a conversational walkthrough.
- Auto-drafting means reading the README, landing pages, marketing copy, about pages, meta descriptions, `package.json`, and existing docs. It drafts all sections, then asks "What needs correcting? What's missing?" and iterates.
- When starting from scratch, it walks through one section at a time: explain what is being captured, ask questions, confirm accuracy, move on. It never dumps every question at once.
- It pushes for verbatim customer language: "exact phrases are more valuable than polished descriptions because they reflect how customers actually think and speak, which makes copy more resonant."

## The 14 sections the context doc captures

- **Product overview:** one-liner; 2-3 sentence description; product category (the "shelf" you sit on, i.e. how customers search for you); product type; business model and pricing.
- **Target audience:** company type (industry, size, stage); decision-maker roles; primary use case; 2-3 jobs to be done ("things customers hire you for"); specific scenarios.
- **Personas (B2B only):** User, Champion, Decision Maker, Financial Buyer, Technical Influencer, each with what they care about, their challenge, and the value promised.
- **Problems and pain points:** the core challenge before finding you; why current solutions fall short; the cost in time, money, and opportunities; emotional tension (stress, fear, doubt).
- **Competitive landscape** has three tiers:
  - Direct: same solution, same problem (Calendly vs SavvyCal).
  - Secondary: different solution, same problem (Calendly vs Superhuman scheduling).
  - Indirect: conflicting approach (Calendly vs a personal assistant).
  - For each, record how it falls short.
- **Differentiation:** capabilities alternatives lack, how you solve it differently, why that is better, and why customers choose you.
- **Objections and anti-personas:** the top 3 objections heard in sales and how to address them; who is not a good fit.
- **Switching dynamics (JTBD Four Forces):**
  - Push: frustrations driving them from the current solution.
  - Pull: what attracts them to you.
  - Habit: what keeps them stuck.
  - Anxiety: worries about switching.
- **Customer language:** verbatim descriptions of the problem and of your solution, words to use, words to avoid, and a glossary of product terms.
- **Proof points:** key metrics, notable customers or logos, testimonial snippets, value themes with supporting evidence.
- **Goals:** primary business goal, key conversion action, current metrics.

## Brand voice section

Corey wants this built from evidence rather than from adjectives picked in a meeting: "copy that already performed and... the founder's own writing."

- 3-5 voice attributes, each with what it means, what it doesn't mean, and a real line from existing copy.
- Tone by context: how the voice shifts for support, launches, errors, sales, and social.
- Brand words: terms you own, and words you never use, with the reason.
- The skill points to a `references/brand-voice.md` file with extraction steps, a worked profile, before/after examples, and per-person voice guides.

## Optional paid ads section

Included only if the user runs ads, so the separate **ads** skill doesn't need the account re-explained each session.

- **Margin reality:** the target CPA or ROAS that keeps the business profitable, plus a hard floor (the ROAS below, or CPA above, which gets flagged immediately).
- **Budget:** monthly budget and acceptable daily variance.
- **Conversion truth:** which conversion actions count and what each is worth; known tracking weaknesses (lag, double counting, offline gaps); what separates a good lead from a form fill. The doc template has a table with Action, Means, Value, and "Feeds bidding?" columns.
- **Campaigns:** naming convention, and one line on what each campaign is for.
- **Agent permissions:**
  - May: read, compare, flag, draft, recommend.
  - May not without approval: change budgets or bids, pause or launch, edit tracking, publish ads.

## Versioning and changelog

Because every other skill reads this doc, Corey wants a dated paper trail of what changed and why.

- The doc starts with `Document version: v1` and a "Last updated" date. It ends with a Changelog, newest first, one line per revision.
- New doc: a single entry, `- v1 ([today]) — Initial context.`
- Any substantive update: increment the version, update the date (ISO YYYY-MM-DD), and prepend a changelog line. Never rewrite or reorder past entries.
- Good entries name the sections touched and the reason. Examples from the skill:
  - "v3 (2026-07-16) — Repositioned from 'email tool' to 'deliverability platform'; added RevOps to the ICP."
  - "v2 (2026-06-02) — Rewrote value prop and objections after 5 customer interviews; added competitor Acme."
- A pure typo fix gets no version bump or entry.
- On a real repositioning, say so plainly, because downstream skills will now generate against the new context.
- After saving, tell the user other marketing skills will use it automatically, and that `/product-marketing` can be run anytime to update it.

## Learnings table

The Changelog records how the doc changed. **Learnings** records what the team found out by shipping. Drafting skills (copywriting, emails, ads, ad-creative, social) read it before writing, so the next brief starts from what is already known. It starts empty.

- **Columns:** Date, Learning, Evidence, Applies to, Status.
- **Learning** must be specific enough to change a draft. "Price-anchored headlines beat outcome headlines on the pricing page" works; "Be clearer" doesn't.
- **Evidence** names the test or campaign with the number and sample size, e.g. "Variant B +18% trial starts, 2,400 visitors per arm, 3 weeks."
- **Status** is `active`, `watch` (one data point, worth retesting), or `retired`.
- **What earns a place:**
  - A test that reached its planned sample, or the same pattern in two or more campaigns.
  - A user decision with a reason (positioning, pricing, a channel cut) that future drafts must respect.
  - A correction the user gave more than once (e.g. "never call it a platform").
- **What doesn't:** single-run anecdotes (log as `watch` or omit), task notes, and anything belonging elsewhere (new objections go in Objections, new customer phrases in Customer Language).
- **Retiring:** mark `retired` with a line saying why, rather than deleting, so nobody re-tests a settled question. Move retired rows to the bottom and archive once active rows pass about 20.
- **Who writes it:** any skill finishing a test, campaign, or postmortem may propose a row. The user approves it, then it is added with a version bump and Changelog line. Scheduled loops do this at session end, via the **marketing-loops** skill.

## Tips Corey gives for gathering context

- Be specific: ask "What's the #1 frustration that brings them to you?" rather than "What problem do they solve?"
- Capture exact words, since customer language beats polished descriptions.
- Ask for examples: "Can you give me an example?" unlocks better answers.
- Validate as you go by summarizing each section and confirming before moving on.
- Skip what doesn't apply, e.g. Personas for B2C, or Paid Ads if the user doesn't run ads.
