## Max MRR: the growth ceiling formula

- Jason defines "Max MRR" as the revenue level at which a SaaS company stops growing. It happens when dollars lost to cancellations equal new dollars added each month.
- Formula: Max MRR = New MRR per month ÷ monthly cancellation rate. Written out, MRR_max × c = MRR_new.
- Toy example: $1,000 of new MRR per month and 5% monthly cancellation gives a ceiling of $1,000 / 0.05 = $20,000. Starting from $0, such a company reaches about $10k MRR in 15 months and never reaches $20k, even after 60 months.
- Churn dollars grow with company size while new-MRR dollars stay flat. The churn rate is constant, but the absolute dollars lost keep rising, so growth slows.
- "New MRR" here includes new-customer MRR, upgrade MRR, and reactivated customers. "Cancels" includes cancellations and downgrades.

## Why startups plateau sooner than expected

- Early growth is fast because there are few customers who could cancel. As customers accumulate, churn becomes the force slowing growth, not the size of the market.
- Jason says this explains the common founder surprise: growth tapers off while the target market is still "many orders of magnitude larger than the company."
- Max MRR marks both the maximum size of the company and the size at which growth starts to slow.
- Revenue follows an S-curve. Growth accelerates while there are few customers to cancel and a new channel is still ramping, then decelerates once marketing output levels off.
- Jason says the Max MRR curve predicts this "months or even years before it happens."

## Cancellation rate is the biggest lever

- Cancellation compounds exponentially, so small changes in the rate move the ceiling a lot. Halving the cancellation rate doubles Max MRR.
- Toy example: new MRR fixed at $1,000/mo, cancellation at 7% for 20 months, then improving to 4% over 10 months. Max MRR jumps as soon as cancellation starts improving, while actual MRR looks "mostly linear but wavy." It is hard to see from revenue alone that the business model got massively better.
- Jason calls Max MRR a leading indicator and current MRR a lagging indicator.
- When MRR is near the ceiling, cancellation dominates growth. Lifting the ceiling makes new MRR the dominant factor again.
- Common misconceptions he has fought for years:
  - "7% cancellation is fine, especially for consumer businesses."
  - "As long as I keep adding $300/mo of new MRR every month, I'll build a real business."
  - Believing he'll keep scaling past a few million ARR by doing what he's always done.

## Accelerating new MRR still yields linear revenue

- Toy example: new MRR rises by $100 each month for 60 months (100, 200, 300, ...) at 5% churn. Max MRR keeps rising alongside actual MRR, but actual MRR grows at "more or less a constant pace," roughly a line.
- The reason is that churn is exponential. Accelerating cancellations offset the acceleration in new MRR.
- Jason says even companies with accelerating new growth typically grow revenue only linearly.
- This scenario is still too optimistic, because marketing channels top out and tend to decline once mature.
- The typical real pattern is that a company unlocks a channel, then hits the channel's capacity for new sales each month. The result is accelerating growth followed by the ceiling.

## Buffer case study

Buffer publishes its financials at buffer.com/metrics, which makes it a good case. Jason walks through four phases:

| Period | MRR | Cancel rate | What happened |
|:--|:--|:--|:--|
| 2012-2014 | $3k to $40k | 8% to 6% | Found product/market fit, brought cancellations under control, and accelerated new MRR. Max MRR rose and revenue accelerated. |
| 2014-2020 | $40k to $140k | 6% | Cancellations never improved. New MRR was accelerated through several "found a new channel... channel became saturated" events, visible as brief plateaus in Max MRR. Growth stayed linear. |
| 2020-2024 | $140k to $90k | 7% | Cancellation rose about a point. New MRR was still large, but Max MRR dipped below revenue, so revenue fell. |
| 2024 onward | $100k to $150k | 6% | New MRR rose substantially and cancellation improved slightly, so Max MRR shot up and growth restarted. |

- During the stagnation, Buffer had more new customers and upgrades than ever, but also more cancellations and downgrades than ever. The customer base was very dynamic yet flat overall.
- Max MRR reacted ahead of revenue and with much larger magnitude, anticipating both the good and the bad news.
- Jason's counterfactual: if Buffer had cut cancellation from 8% in 2014 to 3% by 2019, revenue would have doubled.
- He calls 6% "precarious." It requires forever-accelerating new MRR and quickly tanks revenue once new MRR stops keeping up, which it inevitably does.
- Buffer's 2023 fix, per CEO Joel Gascoigne's strategy letter, was to return to its ideal customer in its best target market (entrepreneurs and small businesses) and to a pricing model that works better for them (freemium). Those customers retain at higher rates, and cancellation fell, MRR rose, and Max MRR rose ahead of MRR.
- Jason adds: "Imagine what would happen with cancellation of 4%!"

## Max MRR vs NRR: after retention, push NRR to 100% or more

- NRR (Net Revenue Retention) = (Upgrade - Downgrade - Cancel) / MRR × 12, converting MRR to ARR. It measures how revenue would change over a year with no new customers.
- When upgrades exceed cancellations and downgrades, revenue grows every month even with zero new customers. Max MRR then stops being meaningful, because with an infinite market you would never stop growing.
- Markets and channels are finite, so you still top out, but through market saturation rather than churn.
- Jason's rule: after high retention, the most powerful growth lever is NRR of 100% or more.
- Almost all public SaaS companies have NRR of 100% or more. Average NRR at IPO was 119% and average ARR at IPO was $255M (2022 data in his chart). Without it, the ceiling would be too low for their revenue goals.
- He says this is just as valid for solopreneurs, because NRR creates growth even with a limited marketing budget.
- It also signals that customers are growing with you, getting more value, and are "happy to share some of that with you" through price.

## Max MRR vs SaaS Quick Ratio

- Quick Ratio = (New + Upgrade) / (Cancel + Downgrade).
- Jason's benchmarks:
  - 3-4 for a high-growth, early-scale company
  - 1.5-2 for a company at scale with healthy growth
  - 1 means no growth
  - Below 1 means contraction
- He says Quick Ratio is useful but "does not forecast revenue growth at all." Buffer's Quick Ratio fell sharply during its multi-year healthy growth and kept falling when growth stalled and reversed. It started recovering before the 2023 changes and still looked weak in 2025 when growth had clearly changed.
- Max MRR is predictive where Quick Ratio is not, and he finds it easier to rally a team around. Raising a "revenue ceiling" feels tangible, while "get our Quick Ratio from 1.4 to 1.6" does not.
- Caveat: no single metric tells the whole story, Max MRR included. It applies to companies of all stages and sizes.
- His closing advice: get cancellation rate under control first, then focus on NRR.
