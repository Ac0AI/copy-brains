## Four prospecting motions, not one workflow

Corey's prospecting skill forks at intake. He picks one branch based on who is being sold to, because qualification signals and sources differ.

| Branch | Sell to | "Qualified" means | Primary sources |
|---|---|---|---|
| SaaS | SaaS and digital companies | ICP fit, tech stack match, growth signals (funding, hiring, product velocity) | LinkedIn, BuiltWith, Crunchbase, Apollo, Clay, ProductHunt |
| B2B | Non-SaaS B2B (services, manufacturers, enterprises, mid-market) | Industry, size and geography fit, plus buying signals (trigger events, vendor changes) | Apollo, ZoomInfo, Clay, LinkedIn Sales Nav, industry directories |
| Local SMB | Shops, gyms, restaurants, clinics, salons, services | Active business, website status, proximity, decision-maker access | Google Maps, Yelp, local directories, Facebook, business sites |
| Demand-signal | Early-stage: first customers, design partners, beta users | A cited public source showing the exact pain, demand or timing signal, not just firmographic fit | Forums, communities, reviews, GitHub issues, job posts, launch announcements |

- For a hybrid motion, he picks the dominant branch and borrows signals from the other.
- If the user needs their first customers, he favors evidence of demand over list coverage, so he uses Demand-signal.
- He warns against mixing branches, for example applying Local SMB website-status scoring to a SaaS prospect.

## The five-phase framework

Every engagement follows the same phases. Tools change per branch; the phases don't.

1. **Define the ICP.** Cover firmographic fit, technographic fit (SaaS), buying signal ("why now?"), decision-maker profile, and disqualifiers. Output one paragraph plus a pass/fail checklist. "Don't move to discovery without this."
2. **Build the candidate list.** Source 2-3x more candidates than the final list needs, because qualification culls hard. For SaaS and B2B, combine 2-3 sources for cross-verification.
3. **Qualify each candidate.** Score against the ICP checklist and attach a source URL or two as evidence for every qualification.
4. **Score and prioritize.** Use Hot, Warm, Cold or Skip, then assign an account tier.
5. **Output the lead sheet.**

- He says smaller is better when the quality bar is high: "25 verified leads beats 250 mostly-junk ones."
- If no context file exists, he reads `.agents/product-marketing.md` first and asks only for what's missing.

## Qualification, confidence and scoring

**Confidence levels (all branches):**
- High: confirmed by at least two independent sources or the official business page.
- Medium: one credible source plus consistent search evidence.
- Low: incomplete or ambiguous evidence; flag what's uncertain.

**Scoring (SaaS, B2B, Local SMB):**

| Score | Definition |
|---|---|
| Hot | Strong ICP fit, clear buying signal, accessible decision-maker, verified contact |
| Warm | ICP fit, softer or older signal, contact verifiable |
| Cold | Loose fit, or no clear signal, or unverified contact |
| Skip | Disqualifier hit (out of ICP, closed business, duplicate, irrelevant, low confidence) |

- Default ratio target: about 20% Hot, 30% Warm, the rest Cold or Skip.
- Demand-signal scores differently: a 0-100 demand-fit, not Hot/Warm/Cold.
- ICP fit alone never earns "Hot." The signal makes the timing right.

**Account tiers** set research depth and channels:
- Tier 1: 1:1, the top 25-50 accounts. Each gets a sourced research brief before any outreach.
- Tier 2: 1:few, segments of 20-200 sharing one pain.
- Tier 3: 1:many.

## Email verification and data hygiene

- Always verify email deliverability before a lead joins the final list, and again within 7 days of sending if the list sat.
- Catch-all domains need a set policy. Invalid or risky emails go in a separate "invalid" bucket, flagged for the user.
- Apollo and ZoomInfo are often out of date, so verify before scoring a lead Hot.
- Bounces tank cold email reputation fast.
- Capture source URL and date for every contact. This lineage is required for GDPR requests and CAN-SPAM audits.
- Dedupe by domain (SaaS and B2B) or by business plus address (Local SMB).
- Retain consent and lineage records.

## Tool picks by situation

| Tool | Use |
|---|---|
| Apollo | B2B and SaaS firmographic plus contact discovery |
| Clay | Multi-source enrichment, waterfall lookups, custom scoring |
| FullEnrich, LeadMagic | Waterfall email and phone enrichment via one API |
| TheirStack | Hiring signals and tech stacks from job posts |
| ZoomInfo | Enterprise contacts plus intent data |
| Hunter, Snov | Email pattern guessing and verification |
| Truelist | Deliverability validation, including catch-all resolution |
| LinkedIn Sales Navigator | Decision-maker mapping, done manually |
| BuiltWith, Wappalyzer | Tech stack qualification (SaaS) |
| Crunchbase | Funding signals (SaaS) |
| GitHub | Stargazers and forks of competitor repos (dev-tool SaaS) |
| Google Maps plus browser | Local SMB discovery |
| Firecrawl, Browserbase | Extraction from one prospect's own site, never from platforms |

- With no enrichment tools, he leans on browser-assisted research: company site, About page, LinkedIn company page, news mentions. It's slower but works.
- For multi-provider lookups, he defines accepted results first, stops the waterfall once satisfied, and keeps lookup errors distinct from no-match records.
- Visitor identification (RB2B and similar) is a warm-intent source.

## Compliance guardrails (read first, every engagement)

- **LinkedIn:** "Never scrape LinkedIn." Define audiences in Sales Navigator and pull contacts from licensed data.
- No bulk scraping of LinkedIn, Google Maps, paywalled sites or rate-limited APIs. The browser is an assisted research tool, not a scraper.
- No bypassing CAPTCHAs, login walls or bot protection.
- Use public business contact channels only (info@, hello@, contact@, named-role emails published on the business's own site). Personal emails need a lawful basis.
- Stay GDPR, CAN-SPAM and CASL aware.
- Don't resell data extracted from Google Maps, LinkedIn or any platform whose terms forbid it. Building a list for your own outreach is fine; productizing it is not.
- Rate limit yourself even on public sources.
- No breached, leaked or unprovenanced data and no list brokers without source lineage. Licensed providers (Apollo, ZoomInfo, Clay) are fine within their terms.
- Never qualify, segment or personalize on sensitive traits such as health, financial hardship, politics, sexuality or religion, even if a public post reveals them.

## Lead sheet output format

- Default to a markdown table in chat. Switch to CSV above 25 rows or when a file is requested.
- Default target counts: 25 for SaaS and B2B, 15 for Local SMB.
- SaaS and B2B columns: score, company, industry, size, signal, contact, email status, source, confidence. CSV adds domain, country, title, LinkedIn, why-prospect, verified date and notes.
- Local SMB columns: score, business, category, area, website status, website or social, phone, why it's a prospect, confidence.
- After the table, add three things:
  - **Top outreach targets:** the top 3-5 Hot leads, one sentence each on why to reach out first.
  - **Search parameters:** branch, ICP, location or radius, target count, date.
  - **Open questions:** anything unverified.
- Demand-signal ships an evidence report instead of a lead sheet.

## Pre-finalize checklist and common mistakes

**Checks before finalizing:**
- Every Hot lead has a verified contact and at least one source URL.
- No Hot lead lacks a clear buying signal.
- "High" confidence requires two independent sources, not two of your own searches.
- Final count matches the request, or the shortfall is explained by the quality bar.

**Mistakes he calls out:**
- Starting discovery without an ICP.
- Treating data sources as authoritative without cross-checks.
- Adding contacts without email verification.
- Bulk scraping LinkedIn or Google Maps, with the real risk of account suspension and ToS violation.
- Labeling leads "Hot" without buying signals.
- Skipping source URLs.
- Ignoring quiet hours and time zones when handing off to outreach.

**Where outreach goes next:** copy, sending setup, LinkedIn and cadences belong to his cold-email skill. Competitor research belongs to competitor-profiling. Lead routing and CRM handoff belong to revops.
