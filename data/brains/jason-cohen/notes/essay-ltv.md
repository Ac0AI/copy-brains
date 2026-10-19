## Why Jason distrusts the LTV metric

- Jason says a metric packs many causes and processes into one number. That makes it powerful for reasoning about complex systems, but it also hides error and uncertainty behind false precision.
- He argues the dangerous outcome is "the illusion of knowledge": you think you understand something you don't, and make bad decisions with confidence.
- His verdict: "For many SaaS businesses, the incorrectness of the LTV metric outweighs the value it supposedly confers."
- He says the rubric-style number always gives "8 decimal places" of precision even when those digits are all error and uncertainty.

## How LTV is defined and used

- LTV is the total gross profit a customer will generate over its lifetime.
- Gross profit means income after the costs required to deliver the product (tech support and infrastructure for SaaS, cost of materials for physical products). It excludes sales and marketing, development and other costs of running the business.
- Formula: LTV = MRR x GPM x lifetime in months. Since lifespan is usually estimated from monthly cancellation, this becomes LTV = (MRR x GPM) / monthly cancellation rate.
- It is commonly used to cap customer acquisition cost (CAC). If CAC exceeds LTV, the business is unprofitable even at scale over ten years. If LTV = 3 x CAC, the business is unprofitable at first (months of revenue are needed to pay back CAC) but profitable in the long run.
- Jason notes that using LTV for a decision like this implies lifetime gross revenue is knowable today, and it isn't.

## Why the inputs to LTV can't be trusted

Every component changes over time:

- **MRR:** moves with how systematic you are at upgrades, cross-selling, customers growing or shrinking, per-use charges, and the mix of customer segments.
- **GPM:** for small companies it can change by 30% in a year, and even large stable companies can move about 1% per year.
- **Cancellation rate:** hopefully shrinks as you improve the product and service, but over years it can swing with new competitors, a shrinking market, new technology, or a new customer mix when you grow into adjacent markets.
- Example: HubSpot famously had a low LTV that rose 3x in 18 months (documented in David Skok's SaaS metrics overview). That is a big swing in a metric meant to summarize the next ten years.
- His point: "Three variables, all changing, unpredictably, which you multiply together and.... you expect the result to *mean* something?"
- If LTV can vary 2x in a year through normal business activity, rules like "an LTV:CAC ratio of 3:1 is healthy" can't be trusted either. You may believe you're acquiring customers efficiently, then find your growth is capped or that you're not profitable even at scale.

## What to use instead: payback period

- Every insight LTV promises can come from metrics that avoid long time horizons and point to actions you can take.
- For "what is a reasonable CAC?", he replaces "LTV/CAC should be at least 3, and 5 is very good" with payback period: p = CAC / MRR, the months until a single customer has paid back its acquisition cost.
- He prefers p = CAC / (MRR x GPM), which also accounts for the cost of serving the customer.
- Rule of thumb for payback:
  - 6 months is fine.
  - 3 months is fantastic.
  - 12+ months is poor, unless there is indirect strategic benefit (e.g. branding), efficiency is improving so you want to stick with it, or it is a mature company or one with larger business customers where you can justify assuming 5-10 years of revenue per customer.
- Payback period also explains why annual prepayment is smarter than it looks, and feeds other metrics he uses: COC (Cost Of Cancellation), showing how cancellation affects the cost of growth, and Max-MRR, showing how cancellation caps your maximum size. He says LTV leads to none of these insights.

## Why you need the components, not the blended number

- A common defense is that LTV measures long-run dollars earned and should rise over time. Jason says that in practice you always need the individual components to know whether the company is healthy.
- Example 1: LTV is steady, but GPM is improving through cost-cutting while cancellations rise. He says this is not good: "Your customers are pissed."
- Example 2: MRR rises because you land larger customers, but GPM falls because you're inefficient at serving them. That is both good and bad news. It means you need efficiency work now, or you need to raise money so you can stay devoted to growth for the next few years.
- His conclusion: always measure MRR, cancellations, GPM and CAC individually. Combining them into one number "only serves to hide data, hide insights, not help 'get a handle on the business.'"
