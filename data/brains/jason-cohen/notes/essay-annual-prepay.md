## Annual pre-pay turns customer cash into a marketing budget

Jason's core claim is that charging annually up front can transform the cash flow of a bootstrapped SaaS business. He says multiple founders have told him this idea was responsible for their startup's financial success. In his words, it gives "an infinite marketing budget", which he admits is "artistic license" to make the point that the effect on cash flow is large. It does not mean CAC is the only cost the company has.

The mechanism:
- Spend $80 on ads, but put it on a credit card, so no cash leaves yet.
- The customer pays $120 for the year today.
- Set aside the gross-margin costs ($40) that this revenue must cover. That leaves $80 free to spend.
- When the card bill comes due, the $80 ad cost is paid from cash already received, so the business never goes cash-negative on that customer.

## How to compute the real cost of a dollar of MRR and the payback period

Jason's framework for understanding SaaS cash flow:
- **CAC** is the total cost to get one new paying customer. It includes Marketing and Sales costs and fully loaded salaries. Founder time spent on marketing and sales counts too, as does the cost of hiring someone else for the same work. Commissions count as well. Simplest calculation: total monthly spend divided by new customers added that month.
- **ARPC** is average monthly recurring revenue per customer (MRR divided by number of paying customers).
- **Cost to create $1 of MRR** = CAC / ARPC.
- **GPM** (gross profit margin) is the share of revenue left after the costs of delivering the whole product: credit card fees, tech support, infrastructure, professional services, bill of materials, and anything else the customer expects. Even a solopreneur's own support time must be costed at what it would take to hire someone to do it.
- **Payback period** p = CAC / (MRR × GPM).

Worked example:
- A $10/mo consumer SaaS pays $1.60 per Google Ads click.
- Traffic converts 5% to a free trial, and trials convert 40% to paid, so CAC = $80.
- It costs $8 to create $1 of MRR, which looks like an 8-month payback.
- Costs are 3% card fees, 5% infrastructure and 25% support, so GPM = 67%.
- Real payback = 80 / (10 × 0.67), about 12 months.
- Spending $1000 on ads yields $125 MRR but $42/mo in expenses, so the cash takes a year to return.

He notes that "the faster you grow the more cash it takes", because no matter how much you spend it still takes a year to get back. That is why fast-growth companies raise money, and why it "always takes more money than you think". He says computing this metric is "eye-opening" if you haven't done it before.

## Optimizing the equation: raise price first, then cut CAC and costs

Jason ranks the levers by how much they can change the business.

- **Reduce CAC.** Worth optimizing, but incremental. Most advertising is an auction, so it is hard to find channels with both enough traffic and low cost. CAC rises as a company scales (low-hanging fruit gets picked) and as a market matures (more competitors bid). He rejects "social, SEO and content are free": they take writing, managing, chasing algorithm "whims" and optimizing site layout and content.
- **Increase MRR (raise price).** This is why he and other pundits keep telling founders to raise prices. Going from $39/mo to $19/mo (read in the other direction, $19 to $39) can cut payback to a third of what it was, not a half. MRR doubles while the costs behind GPM do not, so GPM rises too and you get a double benefit. If signups halve after a doubling, you still have a same-sized business with far more profit and higher-quality customers. In his experience, and that of many others, signups often don't halve and may even rise. He cites screenshots from founders who raised prices and saw MRR grow, plus data from 4,200 founders pointing to the same lesson: "typically, startups are under-charging."
- **Increase GPM (cut costs).** Valuable if easy, such as halving support time with keyboard macros, better docs or an AI first line of defense. He warns that engineers tend to file rough edges off costs, which isn't impactful, instead of working on pricing and marketing, which can transform the company. His reasoning: "you can only cut costs so much, but the potential upside of better marketing or pricing is uncapped." That is why he calls marketing and pricing strategic and cost cutting not.

## Rolling out annual billing: pricing and structure

Jason's recipe for the plans:
- Offer an annual plan as a reward for paying up front. Typical discount is "two months free": a $10/mo product becomes $100/year.
- Use this as an excuse to raise prices slightly. Set the annual price at 12 times the current monthly price, then raise the month-to-month price by about 20% (the "2 months free" amount).
- Existing customers can be grandfathered, or asked to move to annual to keep their old monthly rate.

Cash effect: before, $80 of CAC bought $120/year of revenue collected over time. Now the same $120 arrives today, which removes the payback gap.

Not every customer will pick annual, and it still helps:
1. Even if only a third of customers choose annual, the cash-flow impact is large.
2. Raising monthly prices further increases annual uptake and shortens the monthly plan's payback.
3. An annual-only plan is possible, but he says an "even more expensive monthly plan" is typically better. It says yes instead of no, keeps optionality for the customer and is very profitable.

## Annual plans, retention and cancellation analysis

Jason's view on whether annual plans reduce churn:
- Annual customers do retain better, but only because they self-select. People who intend to stay choose annual.
- Offering annual does not lower overall cancellation rate.
- It does segregate customers usefully: those likelier to cancel identify themselves on monthly plans. You can contact them, learn why, and compare their behavior and answers with annual customers to see what differs. He says improving cancellations is likely one of the most valuable things a company can do.

## Refund policies for annual plans

Options Jason lays out, from most to least generous:
- **Pro-rata refund.** After 7 months, refund 5/12 of the payment ($42 on a $100 plan). Simple and good for reputation.
- **Refund as if monthly.** Compute what they would have paid monthly and refund the difference. On a $100/yr plan with a $10/mo alternative, a cancel after 7 months pays $70, so the refund is $30. Late-year cancellations get no refund.
- **Credits.** Account credit instead of cash, usable for another purchase, a cheaper plan or monthly billing. He credits Fabio Caravita for this idea.
- **No refunds.** Least generous, like phone bills. He says to check it against your cultural values, your sense of ethics, and whether you want a coercive relationship with customers.

## Accounting for cancellations in payback

The basic payback model omits churn, which can't be ignored: customers who cancel before payback are a net loss.

His simple adjustment:
- Measure retention r across the nominal payback period (for a 12-month payback, 12-month retention).
- Benchmarks he gives: excellent Enterprise software r = 95%, SMB 75%, Shopify 50%.
- The customers who stay must pay for those who leave, so the real payback wait is p / r.
- He says the formula is not exactly right but "gets you to the right vicinity."
