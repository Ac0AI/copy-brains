## Hypotheses come before tests, and every test needs one

- Corey rejects "let's see what happens." A test needs a specific predicted outcome based on reasoning or data.
- He uses a fixed template: "Because [observation/data], we believe [change] will cause [expected outcome] for [audience]. We'll know this is true when [metrics]."
- Weak example: "Changing the button color might increase clicks."
- Strong example: "Because users report difficulty finding the CTA (per heatmaps and feedback), we believe making the button larger and using contrasting color will increase CTA clicks by 15%+ for new visitors." He measures it as click-through rate from page view to signup start.
- He tests one variable per test, because otherwise you can't tell what worked. The change should be bold enough to make a difference and true to the hypothesis.
- Testing changes too small to detect, testing too many things at once, and having no clear hypothesis are his listed design mistakes.

## Sample size, metrics and traffic allocation

- Pre-determine sample size, commit to the method, and don't peek and stop early. Peeking before reaching sample size "leads to false positives and wrong decisions."
- His quick-reference sample sizes per variant, by baseline conversion rate and relative lift:
  - 1% baseline: 150k (10% lift), 39k (20%), 6k (50%).
  - 3% baseline: 47k, 12k, 2k.
  - 5% baseline: 27k, 7k, 1.2k.
  - 10% baseline: 12k, 3k, 550.
- He points to Evan Miller's and Optimizely's sample size calculators.
- Test types by traffic need:
  - A/B (two versions, one change): moderate.
  - A/B/n: higher.
  - Multivariate: very high.
  - Split URL: moderate.
- Metric setup:
  - One primary metric tied to business value, which is what you use to call the test.
  - Secondary metrics explain why or how the change worked.
  - Guardrail metrics are things that shouldn't get worse; stop the test if they go significantly negative.
- Pricing page example: primary is plan selection rate; secondary is time on page and plan distribution; guardrails are support tickets and refund rate.
- Allocation: 50/50 is the default. Use 90/10 or 80/20 to limit the risk of a bad variant. Ramp up from a small share to mitigate technical risk. Users should see the same variant on return, and exposure should be balanced across time of day and week.

## Implementation and running the test

- Client-side (JavaScript modifies the page after load) is quick but can cause flicker. Tools he lists: PostHog, Optimizely, VWO.
- Server-side (variant decided before render) has no flicker but needs dev work. Tools: PostHog, LaunchDarkly, Split.
- Pre-launch checklist: hypothesis documented, primary metric defined, sample size calculated, variants implemented correctly, tracking verified, QA done on all variants.
- During the test, do monitor for technical issues, check segment quality and document external factors.
- During the test, don't peek and stop early, change variants, or add traffic from new sources.
- Execution mistakes he names: stopping early, changing things mid-test, not checking implementation.
- What to vary: headlines and copy (angle, value prop, specificity, tone), visual design (layout, color, images, hierarchy), CTA (copy, size, placement, number), and content (information included, order, amount, social proof).

## Analyzing results with statistical care

- For a pre-specified fixed-horizon test, compare the p-value to the chosen significance level (commonly α = 0.05).
- A p-value is the probability, assuming the null model, of a result at least as extreme as observed. It is not the probability that the result is random, that the null is true, or that a variant will win again.
- A 95% confidence interval is a procedure with 95% coverage over repeated samples, not a 95% probability that this interval contains the true effect. Report the interval and effect size alongside the p-value.
- Use the planned analysis and stopping rule. Sequential and Bayesian tests have their own interpretation, so don't translate every platform's "confidence" score into a fixed-horizon p-value. He cites the American Statistical Association's p-value statement.
- Significance alone doesn't establish business value or justify shipping.
- Analysis checklist:
  1. Did it reach sample size? If not, the result is preliminary.
  2. Is it significant? Check confidence intervals.
  3. Is the effect size meaningful versus the minimum detectable effect?
  4. Do secondary metrics support the primary?
  5. Did any guardrail get worse?
  6. Are there segment differences (mobile vs desktop, new vs returning)?
- Interpreting outcomes:
  - Significant winner: check effect size, uncertainty and guardrails before implementing.
  - Significant loser: keep control and learn why.
  - No significant difference: report the effect interval, since it may still allow meaningful benefit and harm. Don't extend a finished fixed-horizon test until it becomes significant. Plan a new test if needed.
  - Mixed signals: check data quality and planned metrics. Label unplanned segment findings exploratory and confirm them in a new test.
- Analysis mistakes he names: ignoring confidence intervals, cherry-picking segments, over-interpreting inconclusive results.

## Running experiments as a growth program

- Individual tests are valuable, but "a continuous experimentation program is a compounding asset."
- The loop:
  1. Generate hypotheses.
  2. Prioritize with ICE.
  3. Design and run the test.
  4. Analyze with rigor.
  5. Promote winners to a playbook.
  6. Generate new hypotheses from learnings, then repeat.
- Hypothesis sources:
  - Analytics: drop-off points, low-converting pages, weak segments.
  - Customer research: pain points and confusion.
  - Competitor analysis: patterns they use that you don't.
  - Support tickets: recurring conversion questions.
  - Heatmaps and recordings: hesitation, rage-clicks, abandonment.
  - Past experiments: "significant loser" tests often reveal new angles.
- ICE: score each hypothesis 1-10 on Impact, Confidence (based on data, not gut) and Ease. ICE score = (Impact + Confidence + Ease) / 3. Run the highest scores first and re-score monthly.

## Velocity targets, cadence and the experiment playbook

- Velocity benchmarks:
  - 4-8 experiments launched per month for most teams.
  - A 20-30% win rate is common for mature programs; sustained higher rates may indicate conservative hypotheses.
  - Average test duration of 2-4 weeks.
  - A backlog of 20+ hypotheses.
  - Track cumulative lift from compounding winners.
- Cadence:
  - Weekly (30 min): check running tests for technical issues and guardrails. Don't call winners early, but stop tests with significantly negative guardrails.
  - Bi-weekly: conclude finished experiments, update the playbook, launch the next test from the backlog.
  - Monthly (1 hour): review velocity, win rate and cumulative lift; replenish the backlog; re-run ICE.
  - Quarterly: audit the playbook for patterns not yet scaled and under-tested funnel areas.
- When a test wins, he documents the pattern, not just the result. Each playbook entry records: date, hypothesis, sample size per variant, result (winner, loser or inconclusive, with % change, 95% CI and p-value), guardrail outcomes, segment deltas, why it worked or failed, the reusable pattern, where else to apply it, and status (implemented, parked, needs follow-up).
- Example reusable pattern: "social proof near pricing CTAs increases plan selection."
- Over time the playbook becomes "a library of proven growth patterns specific to your product and audience."

## Questions Corey asks before designing a test

- What's the current conversion rate?
- How much traffic does the page get?
- What change is being considered and why?
- What's the smallest improvement worth detecting?
- What testing tools are available?
- Has this area been tested before?
- Before asking anything, he reads any existing product marketing context file so he only asks for what isn't already covered.
- He pairs this skill with CRO (for test ideas), analytics (for measurement) and copywriting (for variant copy).
