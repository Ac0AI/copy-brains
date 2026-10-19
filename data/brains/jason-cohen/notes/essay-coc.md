## COC: the cost of cancellations as a percentage of revenue

Jason introduces COC (Cost of Cancellations), a SaaS metric for the share of revenue spent each month just to replace cancelled revenue and avoid shrinking.

**Building blocks**
- `CAC` is the all-in cost to get one customer in the door: Sales and Marketing spend, including fully-loaded salaries and commissions, divided by new customers added that month.
- `ARPC` is average monthly recurring revenue per customer: MRR divided by number of customers.
- `p` = `CAC / ARPC`. This is both the cost to acquire one more dollar of MRR and the payback period in months. Example: $80 CAC on $10 MRR means 8 months to payback.
- `c` is monthly cancellation rate in terms of MRR (4% means `c = 0.04`).
- Each month `MRR × c` dollars stop recurring, and replacing each one costs `p`.
- **`COC = p × c`**: "The percentage of our revenue we'll have to spend this month, just to keep from shrinking."

**He notes a full payback definition should also include gross profit margin.**

## COC examples across SaaS models

- **SMB SaaS:** 3%/month cancellation and a 7-month payback gives `COC = 0.21`. That is 21% of revenue every month just to stay level. His example of a 7-month payback: Google Ads at $2 per click, 1% conversion to sale, $30/month average sale price.
- **Enterprise SaaS:** 1.5%/month cancellation and an 18-month payback gives 27% of revenue spent replacing cancellations. He says many public SaaS companies have stopped net customer-count growth and grow mostly from upgrades because replacement is so costly (example cited: Fastly).
- **No-touch, word-of-mouth SaaS:** a prominent business he knows has a 2-month payback and 5%/month cancellation, so 10% of revenue to stay even. Half of its revenue cancels within a year, yet the low acquisition cost keeps it healthy, and another 10% of revenue on marketing buys reasonable growth.
- **What fails:** 5% cancellation with a 12-month payback burns 60% of revenue to stay even. Profitable growth is nearly impossible and the business may shrink.
- These figures exclude support, infrastructure, 3% credit card fees, engineering, and growth spending.

## COC can be as big as R&D or G&A

- COC is often as large as R&D or G&A, which means the business model stays unprofitable even at scale.
- A SaaS business must work constantly to reduce COC.
- Reducing COC means lowering cancellations and lowering `p`. Lowering `p` means decreasing `CAC` and increasing `ARPC`.
- He argues typical metrics literature "focuses only on reducing cancellation rate, which is only a third of the story."
- After product/market fit, cancellation rate is often hard to shift compared with the other two levers.
  - Reduce `CAC`: smarter campaigns, optimized landing pages, self-serve sales and onboarding.
  - Raise `ARPC`: tiered features to segment customers by budget, a la carte add-ons, price scaling with usage.
- A great payback period can overwhelm a bad cancellation rate. The 5%-cancellation company above has a better COC than a typical enterprise SaaS business.

## Applying COC at WP Engine

- WP Engine's cancellation rate is under 2% per month, low for hosting.
- When customers who cancel after 90 days are polled, the most common reason is "project ended," which product changes can't affect.
- So Jason focuses on payback period instead.
  - CAC is already very low thanks to strong word-of-mouth; he suggests doing more to increase word-of-mouth while continuing to optimize paid ads.
  - For revenue per customer, WP Engine started selling SSL certificates to customers who want secured sites. This adds revenue and improves the experience because WP Engine handles installing and renewing them each year.

## Zero net churn beats both CAC and ARPC

- Upselling existing customers offsets cancellations. If cancellations are 2%/month but upgrades, extra seats, add-ons and premium support add 1%/month, effective loss is 1%.
- So `c` should really be net churn: cancellations plus downgrades, minus upgrades. The strongest SaaS companies have negative net churn.
- If `c = 0`, COC is 0. Replacing losses costs nothing, and `p` (therefore CAC and ARPC) stops mattering for the "not shrinking" headwind. They still matter for cash flow and efficient growth.
- He concludes that getting to zero net churn is the strongest thing you can do for COC. Since cancellation rate has a floor, you must build paths for upsells.

## Using COC as a standard metric

- The conventional claim is that growth rate diminishes as a SaaS company scales while cancellation rate doesn't, so you need zero net churn to build a large, profitable SaaS company.
- Expressing this as COC measures how big the headwind is and what it costs every month, so you can set goals and track progress.
- It balances the headwind of cancellation against the tailwind of low CAC, which helps decide where to spend time improving the business.
