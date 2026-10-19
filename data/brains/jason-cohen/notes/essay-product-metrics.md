## Product metrics as a value chain

- Jason maps product metrics as a chain of events across time, by actor (team, customers, peers in other departments), and by type of value.
- Every box on the map gets one or more metrics showing "it is happening" or "we're making progress". Arrows can carry funnel or conversion metrics, but he notes too many arrows make a "dizzying bird's nest".
- The map lets every department "see themselves" in it: executives want financial outcomes, strategists want systemic impact, managers want team accountability, teams want credit for work, planners want progress, ops wants stability.
- He used to believe in "one true metric" plus operational indicators, but now prefers this more comprehensive system. He argues it gives the team a view of everything they do and everything they affect.
- Color the boxes by what you are maximizing versus satisficing. Maximizers are critical to success; satisficers are operational indicators that can't be ignored but shouldn't distract day to day.

## Satisficing KPIs and SLO-style thresholds

- At WP Engine, satisficing KPIs are tracked continuously using Google's SLO approach. The team acts only when a KPI slips into "violation" territory, instead of fielding requests to invest in improving it.
- The violation threshold is pre-agreed with stakeholders in periodic meetings, outside "high-emotion catastrophes". Everyone can then soberly decide when high-value work will be interrupted for a critical problem.

## Leading vs lagging: the axis of time, immediacy and control

- Some events happen before the product team's activity, some after. Some team activity is measurable immediately and fully in the team's control, so the team should be held directly accountable for it.
- This resolves the conflict where executives ask "why isn't the team more focused on increasing revenue in the next 60 days" and the team says "other people don't understand that we're doing a lot of important work".
- Work is measured sprint by sprint. Revenue is a "multi-input, lagging indicator". The product team is responsible for it but is not the only contributor, and individual features often can't be directly linked to revenue.
- Revenue stays potentially the most important metric. It just lags by months or years. Example: Blackberry's revenue kept growing for two years after the iPhone launched, while other KPIs changed far faster.
- If the work is succeeding but financial impact isn't, the conversation becomes diagnosing that disconnect. If the work isn't completed, or built features aren't used, those are immediate and within the team's control.
- Teams must measure both direct results and lagging outcomes, and are accountable for all of it. Not yet achieving the outcome is "not a complete failure" but a learning that shapes the next two weeks of work.
- He argues the world is unpredictable, not all work yields a large outcome, and outcomes need execution plus luck, so expecting every idea to produce the desired outcome is wrong.
- Quote he endorses (Fermi): "If the result confirms the hypothesis, then you've made a measurement. If the result is contrary to the hypothesis, then you've made a discovery."

## Internal vs external, visible vs hidden work

- Draw a bright line between internal (engineering, infrastructure, security) and external (product, design, support, sales working with customers) activity. Use the right metrics for each.
- Internal work splits into customer-near (releasing features) and customer-far (security patches). If all work is invisible, customers see a stagnant product, competitors look faster and sales has nothing new to say.
- If only visible work is valued, you get tech debt, unhappy engineers and slow delivery from an under-invested foundation. The diagram honors both.
- Strategic outcomes are often distant from the product team. A team controls "satisfaction" more than self-motivated customer "advocacy", yet advocacy is the ultimate measure and drives efficient growth. Teams should own creating those outcomes without letting lagging metrics be the only progress measure.
- The most valuable outcome is the customer achieving their own ultimate goal (the Needs Stack). If the customer's business doesn't thrive, they stop paying regardless of software quality.
- You can't control that, but you can notice attributes of customers who thrive and aim marketing, sales and features at that subset. He says this yields higher growth, retention and likely profitability.

## Checklist for great metrics, part 1: definition and intent

- **Normal language:** "Customers are using feature X" works. A precise formula like unique IPs firing events P, Q or R over rolling 14 days divided by total unique IPs is too hard to scan.
- **Precise too:** Also keep the technical definition. Writing it often reveals you can't get the exact metric, or need engineering work first. Terms like "cancellation rate" or "cost to acquire a customer" can be defined many ways, and different precise definitions can suit different metrics in one company.
- **Matches the intent:** Example failure: intending "User Portal usage" but measuring "User Portal logins", which only fires when a session expires. Proxies can be fine if they truly measure the intended concept.
- **Causes action:** If the metric moved, would you re-plan the next sprint or interrupt the current one? If not, it doesn't belong on the main board. It may belong on an operational board as explanatory.
- **Obvious what good looks like:** Not every metric needs an explicit goal. "Not changing" or directional ("usage increasing") is enough.
- **Measures "what is happening", not work:** Metrics are "the dials on the airplane dashboard", not the pilots' actions. If a metric can only be moved by one course of action, it measures work and presupposes solutions. Exception: metrics explicitly measuring volume or quality of work completed.

## Checklist for great metrics, part 2: practicality and trust

- **Measured easily:** Best is automated, second-best is manual-but-trivial. Hard-to-get metrics stay un-updated in spreadsheets.
- **Measured frequently:** Daily is best. "Rolling N days" can update daily while still thinking in weeks or months. Slow-moving numbers needn't be measured often.
- **Stable definition and applicability:** Stable definitions ensure changes come from deliberate actions or environment shifts, not changes in measurement, enabling month-to-month comparison.
- **Common definitions when possible:** Standard definitions enable benchmarking and make it easier for others to understand. Custom definitions can hide signal or be used for deception. His examples: revenue recognition, classifying costs in or out of COGS/GPM, and conveniently leaving costs out of EBITDA. He says "Don't do that."
- **The team actually cares:** When management mandates a KPI the team doesn't believe in, "the team always wins". Six months later it is likely not even tracked. The team must want to depend on it, look at it at least weekly and change behavior at a threshold.

## Signal at least 2x stronger than noise

- Metrics vary for reasons unrelated to the underlying signal. Monthly revenue example: calendar months vary in days by ±5%, daily numbers can differ 2x between weekday and weekend, and months vary in weekdays by ±10%.
- So a real 10% change in new revenue per month is the same size as the noise and can't be detected.
- Fix noise via definition: "new revenue over rolling 28 days" removes both factors and approximates a calendar month. Multiply the trailing 28-day figure by `52/48` to approximate an average calendar month.
- For infrequent noise, use median or 95th percentile to ignore outliers.
- If you don't know how much of a metric is noise, "it's probably a bad metric".
