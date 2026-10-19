## Why some metrics can't be measured, even in hindsight

Jason's core rule: if a metric cannot be measured in retrospect, with all the facts and months of analysis available, it cannot be measured now, and you certainly cannot predict it or set a goal on it. He says many of these metrics are so tempting and seemingly important that teams try anyway, which is "a frustrating waste of time" that ends in failure. His fix is to learn the pattern and stick with KPIs that measure specific aspects of your systems.

## Revenue impact of a single feature

Jason argues you cannot attribute revenue to an individual feature, even after the fact and with hundreds of thousands of customers (his example is WP Engine).

- Some WP Engine features get genuine excitement in sales pitches but are rarely used after the sale. Low usage does not mean no revenue contribution, because the feature may have helped close the deal.
- A frequently used feature is almost surely valuable, but how much it "earns" is unclear. If ten features are all used often, does each earn 10% of revenue?
- If the feature is also heavily used by people who cancel, it wasn't keeping them. But it may have been, and something unrelated caused the cancellation.
- Many other reasons customers are willing to pay have nothing to do with that feature.
- His takeaway: use a variety of KPIs, only one of which is "usage." Product teams should celebrate widely used features, but usage is not the same thing as revenue.
- Side point: this is why you should listen to customers rather than copy competitors, since you don't know what is really driving results over there.

## Measuring the impact of a single activity on churn

Jason says churn is one of the most valuable things to work on, because retention compounds. All the profit from a SaaS customer arrives in the later years, after they have paid back sales and marketing costs, gotten past the higher initial support load, and after gross margins expand with scale. Churn is also a lagging indicator that customers don't want what you sell.

But measuring what any single initiative did to churn is folly. Even a year later you won't know, unless the effect was enormous and immediate. He gives four reasons, which he says apply well beyond churn.

- **Signal is swamped by noise for rare events.** If churn is 3%/mo, a big 10% improvement only gets you to 2.7%/mo. Random variation can exceed a 0.3-point difference. Example: some months have 15% more weekdays than others, so if most customers churn on weekdays, churn can swing 15% from that alone.
- **Lag between action and reaction.** A customer who churns today has likely been struggling and researching alternatives for weeks or months. Larger customers may try for a year, then run a multi-month evaluation. Something you start today won't change the path of people who already decided and only today pushed the button.
- **Many causes of one result.** People leave because they never got hooked, got mad at support, gave up waiting for a feature, were never the right fit, or simply forgot they had the product until a spouse asked about the card charge. Any one action is incremental and hard to see in that fog.
- **External forces larger than your control.** Market, competition and the economy have a big, unmeasurable effect. Growth and churn rates can map onto the stock market or inflation, and sometimes that is the largest factor.

He adds one exception: when churn is especially bad (anything over 3%/mo is "scary"), large improvements are sometimes possible and measurable.

## Probabilities of risks on a "Risk Slide"

Executives rightly ask for the probability and magnitude of each risk, since probability decides whether you mitigate, monitor, or ignore it. Jason argues these probabilities cannot be measured even after the fact.

- Each risk is independent and one-off. It happens or it doesn't, and you may not find out for months or years.
- If a risk listed at 30% happens and one listed at 70% doesn't, the numbers weren't necessarily wrong, because 30% is not 0% and 70% is not 100%.
- Contrast with weather forecasting: across hundreds of days with a "30% chance of rain" forecast, you can check whether it rained about 30% of the time. If it rained 34% of the time, the forecaster is doing great; if 70%, they need work.
- A Risk Slide has only a handful of complex risks that have never happened before, so no such calibration is possible.
- His advice: don't put probabilities on the slide at all. List only the risks important enough to merit action or awareness.
- If you do give probabilities, use numbers, not "medium" or "low." He has a separate piece on how to talk about probabilities properly.

## Other things not to try to measure

Jason lists more examples of the same trap.

- **Small design choices (color, typography, layout, word choice).** They matter, but noise overwhelms signal in small iterations, and surveying users on a font preference doesn't work. Any UI change also initially lowers satisfaction scores because people dislike change.
- **ROI of company culture or values.** A strong culture with a specific direction creates a healthy organization of people alike in the ways that matter and diverse in all other ways. But measuring the impact of a specific value or culture initiative doesn't make sense.
- **Value of brand.** Techniques like unaided awareness or brand recall may work for the largest companies in the world. Otherwise you can't look at winning specific deals, competitiveness or growth and say how much was due to brand. This includes brand-focused marketing such as company-sponsored events.
- **Value of fixing bugs proactively or good engineering practices.** You can't measure the impact of a bug that never shipped or a practice that is simply how you work. There is no counterfactual.
- **Willingness-to-pay or "value delivered."** Even raising prices and watching new-customer counts or cancellations doesn't measure value or willingness. You also can't run that test often, and it is often destructive to brand and customer relationships.
- **Efficacy of employee compensation or retention programs.** Overall retention is easy and important to measure, but it is multi-factored and the rules change over time, so it is like measuring a feature's impact on product retention.
