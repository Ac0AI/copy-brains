## SaaS metrics: why LTV:CAC misleads and what to use instead

- Corey argues LTV:CAC is "a lazy metric" for SaaS. LTV was invented for e-commerce, where a customer buys again and again. In SaaS, plans range from about $10 a month to $10,000 or more, so a single average lifetime value does not represent what customers actually pay.
- LTV:CAC is really a proxy for "how much can we afford to spend to acquire a customer." He prefers payback period: CAC divided by average revenue per customer, which tells you how many months it takes to recoup acquisition cost.
- A 3:1 LTV:CAC rule of thumb usually assumes about two years of customer life. That implies a 12 to 18 month payback, which means holding 12 to 18 months of marketing budget in cash to float acquisition.
- His target is a 3 to 6 month payback, ideally under a year.
- LTV is usually calculated by dividing by churn rate, which is flawed. Most churn happens in the first 30 days, and most of the rest within 90 days. Many acquired customers never pass month three, and the long-tenured customers (3 to 5 years) have to make up for them. That pushes the true payback out.
- He says "averages lie." A 6% churn rate can hide customers who all leave around month 7 or 8. Cohort retention charts, segmented by plan, can show $10 customers churning about three times faster than $100 customers.
- This comes from his time as head of growth at Baremetrics, where he reviewed cohort retention charts constantly.

## Why most SaaS companies stall: no sustainable channel

- Corey cites the stat that only 4% of SaaS companies reach $1M ARR and 0.4% reach $10M. Setting product-market fit aside, he says the main marketing failure is never building a sustainable channel.
- Founders rely on "Flash in a pan" tactics (Product Hunt launches, tweeting, one-off deals, occasional outreach, a webinar now and then). These are sporadic and none compound.
- Dabbling works up to roughly $10K MRR at best. Beyond that the numbers from sporadic tactics are never big enough for traffic, leads or customers.
- Companies that scale find channels (SEO, an ad channel, even social posting) and "go all in" to exploit them fully. He says there are no silver bullets, and a mentor's line he agrees with is that there are only "a shitload of lead bullets."
- Unfunded or lightly funded companies must grow profitably from the start, which is hard. VC-backed companies can subsidize acquisition for a while.
- Common mistake in his coaching: a founder has a channel that works, but wants to start another instead of doing more of the working one. His advice: do more of what's already working.

## Marketing as a slot machine: how to pick channels

- Technical founders think marketing is deterministic (X blog posts yields Y customers). Corey says it is "basically a slot machine." The job is to find a machine that pays out once every 3 pulls instead of once every 3,000, then keep tweaking to raise the odds.
- He starts with the channels most likely to hit, "why play on hard mode when you can play on easy mode":
  - **Sales / direct outreach.** The most deterministic option: good pitch plus the right people, sent at scale by email or LinkedIn, yields an expected number of calls and trials. Mostly costs time. "If you're not doing some sort of outreach I think you're just lazy."
  - **SEO.** The only source of traffic that is both free and recurring, and it compounds. Other recurring traffic is pay-to-play (Google PPC, Meta, LinkedIn, newsletter sponsorships).
  - **Ads.** Still a good channel, though more expensive each day.
  - **Partnerships.** Affiliates, white-label or agency relationships (where the partner is a service provider or implementer), and co-marketing with other tech or SaaS companies.
- On Product Hunt: still worth doing but less than before. He cites acquisition by AngelList, new leadership, monetization and more curation of the front page, plus bots he says are up to 60% of upvotes and traffic. He has seen a late-night surge push a 10th-place product to number one. He says to diversify and not make launching on Product Hunt the whole strategy, since any platform is subject to an algorithm and rules you can't control.

## SEO in the AI era and where it still works

- Corey rejects the idea that ChatGPT and Perplexity are replacing search. He argues AI tools draw their information and citations from search results, so SEO may become more important because it is the main thing you can control for AI-driven discovery.
- What AI summaries have hurt: top-of-funnel, low-expertise, easily copyable content that quickly satisfies search intent.
- What is largely unaffected: bottom-of-funnel, commercial-intent keywords and niche SEO. His range: keyword difficulty 10 to 30 with about 50 to 5,000 searches a month. Those searchers click through several results and still need real expertise.
- He sees SEO as saturated and hypercompetitive rather than the "Wild West," so quality bars rise. Old growth hacks and flywheels (like "powered by" embeds) get copied until they lose their juice, so he says go back to basics.

## Programmatic SEO for SaaS

- His definition: pages whose content is generated programmatically from a database of rows and columns. It does not require AI, and he explicitly does not advocate mass AI-written blog posts, which he says get a site flagged by Google.
- Playbook types he lists: templates, curated lists, conversions, comparisons, examples (text, video, screenshots, images), location-based pages, persona pages, integrations (like Zapier), glossaries, translations, directories, and profiles of people or companies. He counts 12.
- The moat is proprietary data only your SaaS can produce (first-party or curated third-party), which is hard to copy.
- He says there is no evidence Google penalizes publishing many pages at once. The advantage is speed: 52 blog posts published one per week means the week-52 post pays off around week 104, while publishing everything in week one means all of it has matured by week 52.
- Example: for his Chrome extension Swipewell (a swipe-file tool), people searched "SaaS landing page examples," "e-commerce landing page examples," "book landing page examples." He spent a month organizing over 6,000 pieces of media into over 300 pages. Competitors show "six examples" while he shows 400.
- Results: two of his sites now get tens of thousands of visitors a month on autopilot, and they are the biggest traffic drivers years later.
- Ways to build it:
  - Programmers: a separate database or schema in an app that generates pages, often on a subdomain or proxied onto the main site.
  - A static site generator with a folder of markdown files.
  - Airtable or Google Sheets connected to Webflow or WordPress.
  - His tool Commence (spelled with a Z, "commence") is a website builder/CMS where you bring your own data from Airtable, Google Sheets or an API and it publishes on the root domain. He calls Airtable or Sheets plus Commence or Webflow the simplest no-code route.

## Conversion optimization: positioning first, then copy, then targeting

- Corey's order of operations for a conversion client: (1) core positioning, (2) copy, (3) targeting or personas. Positioning is the deepest cause of conversion rate: why people choose you over alternatives and what makes them urgently need the product.
- Many SaaS companies drift from their original problem by the time they reach some product-market fit and can no longer describe specifically why people pay, falling back on vague "make money, save money, save time."
- Every time he has redone copy on top of clearer positioning, conversions have gone up.
- Results from his agency, Conversion Factory:
  - A CRM client refused a full homepage redo, so he inserted a new hero above the old one with an outcome-based H1 and a couple of pieces of social proof: roughly a 20% lift.
  - Another client narrowed from "everybody" to one persona without changing the product: about a 177% lift.
- Small tweaks like button size or color are not the lever; it depends on the product.

## High-converting SaaS homepage template (copy first)

Corey works copy first, not design first. The raw ingredients he has found work after trial and error:

1. **Hero** with a big outcome-oriented headline, one or two primary calls to action, and objection busting or risk reversal. Show the product (a screenshot, GIF or animation), not abstract illustrations or stock photos. Show the product in action tied to the outcome, not just a dashboard. If the product is ugly, fix it.
2. **Alternative comparison** section: old way vs new way, before vs after, us vs them. It gets the reader nodding at the pain of the current approach.
3. **Features:** only the core, differentiated ones people need to decide on, normally 4 to 6.
4. **Integrations.**
5. **How it works** in 3 to 5 steps, borrowed from service-provider sites, to make it look easy and approachable and let people imagine using the software. He suspects it helps onboarding by giving a roadmap, though he can't attribute that directly.
6. **Final call to action**, "ask for the sale," often paired with social proof, a screenshot or a founder face.
- Optional: a founder "manifesto" (emotional, conversational, placed near the final CTA) and an interactive demo or Loom-style explainer. He puts the demo high for brand-new product categories and at the end for established ones. The how-it-works section can go before features if features are complex.
- The page is intentionally repetitive. He says people skim and need to see the same message several times.
- Compared to just a hero and features, adding these sections has increased conversions even when clients skip positioning work.

## A/B testing in practice

- Significance calculators often demand huge traffic. His rule of thumb: about 50 to 100 conversion events per variant, e.g. around 100 trials created per variant, before calling a winner. He calls it "a little bit pseudo science" and notes that a clear winner usually shows early and more time rarely changes the outcome.
- Tools he has used: Optibase (a Webflow app, which he praises), Crazy Egg and PostHog. He also recommends Webflow so marketers can publish daily instead of waiting months in a developer queue.
- Traffic source matters. One client's new hero only moved referral traffic (review sites, unknown links), not warm SEO traffic, which he guesses relates to brand equity.
- Counterintuitive example: a client removed the primary CTA from the hero to force people to scroll and learn more. Trial creations dipped but trial conversions and net new customers rose month over month. Optimizing for trial creation versus trial conversion can give different answers.

## Failed experiment: Baremetrics affiliate program

- At Baremetrics Corey set up an affiliate program aimed at fractional CFOs, growth consultants and agencies who need financial analytics data. It had generous commission, unique links, tracking and a portal. He did heavy outreach, and some affiliates did big blasts.
- It produced zero customers, and he killed it after several months.
- Reasons he gives:
  - Affiliate programs work when bloggers recommend a product in listicles ("best email software for e-commerce") with an affiliate link, and few people blogged about SaaS financial analytics.
  - Baremetrics already ranked well in SEO, so it didn't need that real estate or "parasite SEO" placements.
  - Buyers were already one Google search away and could trial Baremetrics, ChartMogul and ProfitWell at the same time by connecting Stripe, so an affiliate link added little. Products that take real setup (email platforms, website builders) convert better from affiliate clicks.

## Corey's background, tools and recommendations

- Career: first marketing hire at a San Diego startup, then full-time roles including head of growth at Baremetrics, then consulting and freelancing after COVID. He built the Swipe Files newsletter, teaches courses, and about a year and a half before this interview started Conversion Factory.
- Conversion Factory does product marketing for SaaS (copywriting, branding, websites, emails, conversion optimization) with no contracts or billable hours, fixed monthly prices, and a task model of one, two or three at a time.
- He is also building a book and other SaaS tools, including Commence.
- Recommended books: April Dunford's "Obviously Awesome" and "Sales Pitch."
- Tools he named: Webflow, Optibase, Crazy Egg, PostHog, Airtable, Google Sheets, Commence.
