## Bootstrapped CPC rule of thumb: max bid = ARPU / 25

Jason's pre-data shortcut for how much a bootstrapped, profit-seeking company should pay per click on campaigns like Google AdWords. It is built from four assumptions that chain together, and he says to tune the numbers if you disagree with them.

- Funded startups can "bid as much as possible" to buy customers and data quickly ("pay to find out").
- Bootstrapped companies cannot, and need a reasonable return reasonably quickly.
- In the first year there is no data. Even after 100 customers, half are serendipitous one-offs and the sample isn't statistically significant.

The end formula is CPC = ARPU / 25. Example: if the average customer generates $50/month, you can spend $2 per click.

## LTV = ARPU x 20: the pre-data customer lifetime

- ARPU (Average Revenue Per User) is the average monthly charge across all customers, including mixed tiers and add-ons.
- LTV (Life-Time Value) is roughly ARPU x expected months a customer stays. With data, expected months = 1/c, where c is the monthly cancellation rate.
- A more correct LTV also multiplies by gross profit margin (support, servers, payment fees). He skips it because small bootstrapped companies usually have very high margins.
- With no data, his rule of thumb is 20 months, based on his experience and an informal survey of some of the ~100 startups at the Capital Factory co-working space in Austin.
- If real lifetime is under 20 months (cancellation above 5% per month), that is a "dangerously high" rate for almost any SaaS business. Fix the business issues before acquiring more unsatisfied customers. Use surveys and one-on-ones to find out whether the cause is technical failings, missing features, missed expectations, bad service, or not hitting pain points.
- Assume a low LTV early. Early adopters and non-ICP customers meet the product at its worst (fewest features, lowest quality), so don't inflate LTV to where it might be later.
- He dislikes LTV as a metric in general because it is hard to compute for small companies and impossible for young ones, but it is the common tool for this question.

## CAC = LTV / 5: the acquisition budget

- CAC (Cost to Acquire a Customer) is total acquisition cost divided by customers acquired. It includes direct costs (AdWords spend, affiliate payouts, affiliate system fees) and indirect costs (consultants and your own time).
- "A surprising number of startups have CAC > LTV." They justify it by ignoring indirect costs, promising to fix it later with higher prices or other revenue, or calling it a "land-grab."
- "Profit-seeking bootstrapped companies cannot afford those delusions." CAC = LTV is not enough either, because you still have to cover other expenses and make a profit.
- Funded SaaS companies commonly target CAC = LTV / 3. This echoes his IT WatchDogs co-founder Gerry Cullen: "A third to build it, a third to get rid of it, and a third to keep." (Build cost, acquisition cost, then overhead, development and profit.)
- Jason urges profit-seekers to be stricter and use LTV / 5. His reasoning is that early on you should be able to find a few efficient channels, even though those saturate over time.

## CAC = ARPU x 4: payback period

- Combining the two rules: acquisition cost should be no more than four months of revenue, i.e. a four-month payback period.
- If you collect the first month's revenue immediately (for example via annual prepay), it is effectively three months of cash float.
- Companies with large budgets accept 12-month paybacks, and very high-volume businesses like shared hosting accept 24 or 36 months. A bootstrapped company's cash flow can't, even if the long-run math works.

## Conversion rate = 1%: from CAC to cost per click

- Conversion rate here is the percentage of website visitors who become paying customers. In practice it should be data-driven and segmented by customer type, channel and landing page, and A/B tested. With no data and too few visitors to measure, you take a guess.
- He uses 1%, based on his informal survey and formal surveys, where a large number of bootstrapped SaaS companies report about 1%. In his words: "You need 100 visitors to make 1 sale."
- So if a sale can cost at most CAC, each visitor can cost at most CAC/100, which is the maximum CPC.
- Substituting CAC = ARPU x 4 gives CPC = ARPU / 25.

## Customized formula and the "charge more" corollary

- With your own numbers: CPC = ARPU x r / (5c), where c is the monthly cancellation rate and r is the visitor-to-purchase conversion rate for that paid source.
- Corollary: "you should charge a lot more than you think." Higher ARPU lets you pay more per click, opens up more marketing channels, and lets you outbid parsimonious competitors whose low LTVs rule out competitive ad spend.
