## Steady-state profit as the test for "spending to grow"

Jason's problem: a SaaS company that is "spending to grow" can't easily tell whether it is investing for future profit or running a model that will never be profitable. He wants an objective measure, not a story.

- Companies claim "we're unprofitable because we're growing" and many never become profitable.
- The question to answer: if you stopped spending on growth and just held the business where it is, would it make money?
- If yes, the extra spend really is "to grow." If no, the core model is broken.

## Rackspace's EBITDASM and why Jason liked it

Rackspace, while scaling fast, asked what would happen if it stopped Sales & Marketing (S&M) spend. Their logic: CAC is small relative to LTV, so spend as much as possible on growth, but check that the underlying business is profitable.

- Metric: EBITDASM = EBITDA + S&M. This is the usual EBITDA with S&M also excluded.
- For small software companies with no amortization, depreciation or loan interest, it simplifies to "[your definition of profit] + S&M."
- Jason: "I like this model, and ten years ago we were using it at WP Engine."

## Two flaws in EBITDASM

**1. Halting S&M does not mean revenue stays flat.**
- Revenue would fall from cancellations and downgrades, or rise from upgrades.
- The intent was to measure profitability assuming the company is neither growing nor shrinking. A company with revenue above costs that shrinks every month is soon dead, so it isn't truly "profitable."

**2. It assumes sales and marketing is efficient.**
- Rackspace's logic only holds if acquisition is efficient, and nobody can say how efficient is efficient enough.
- Jason's view: the metric should apply to every company. Sales and marketing efficiency matters but is a separate metric you can already compute. Don't cram multiple ideas into one metric.
- On thresholds: some say LTV/CAC of 3 (from a David Skok post), others 5, others 1. Jason says LTV isn't the right way to think about it and prefers payback period.

## SSEBITDA: steady-state profitability

Jason's fix is **SSEBITDA**, which answers: "How profitable would we be, if we were spending only enough to maintain the current state of the company, neither growing nor shrinking?"

- Formula: **SSEBITDA = EBITDA + S&M − COC**
- COC (Cost of Cancellation) is the cost of replacing customers who cancel. Simplest form: CAC × C, where C is the number of customers who cancel in a month.
- It adds back all S&M, then subtracts only the S&M needed to replace churned customers. That keeps revenue flat.
- Because COC embeds sales efficiency (via CAC), the metric works for any company.
- It is "profit if we maintain the company as it exists today."

## Profitable Growth Rate: justifying "spend to grow" with precision

SSEBITDA gives a self-funded growth rate.

- Formula: **Profitable Growth Rate = SSEBITDA / p**, where p is the cost of a dollar of revenue (defined in his COC article).
- Reasoning: if you recycle 100% of steady-state profit into growth, you spend p dollars per dollar of new recurring revenue.
- Example: SSEBITDA of 12% and p of 4 means the company can self-fund 3% growth per month.
- If it wants 8% per month, that's 5% beyond what it can fund, bought at p = 4, so it will be unprofitable by 5% × 4 = 20%.
- A company in that position is spending to grow responsibly, and "will result in a profitable business once the dust settles."
- Any growth beyond the self-funded rate requires a known, quantifiable loss, so "now we can justify 'spend to grow' with precision."

## How to use and read SSEBITDA

Lessons from using it for years, including at WP Engine:

- **Negative SSEBITDA isn't automatically bad.** Early-stage companies spend a higher share of revenue on R&D. Mid-stage companies like WP Engine carry high G&A (office space, finance, legal, HR) until they grow into it. These eat into SSEBITDA but may not matter at scale.
- **Don't strip out other "growth" costs to refine steady-state.** It's tempting to say not all engineers do maintenance, but Jason says it's too much work and not really true. A product with no new features isn't in steady state because the market, customer needs, competition and technology (like AI) keep changing. Nobody knows how much new development "steady-state" needs, so don't invent an answer.
- **Diagnose from the components.** If SSEBITDA is negative because gross margin is low or COC is high, the model is unprofitable and you fix root causes. High cancellations and high CAC are actionable. Temporary R&D investment or a new office will correct over time. You can compute an "expected SSEBITDA after scale," for example assuming R&D plus G&A total 30% of revenue.
- **Treat it as a north star, with insight in the inputs.** "All the insights and actions come from backing out of the inputs."
- **Watch direction more than the absolute number.** At WP Engine they watched it move month over month from negative to positive and keep growing. A positive trend in the metric and its inputs, plus a roadmap to improve them, is healthy whatever today's value. "After all, your goal is not to actually be in a steady state!"
- **Once positive, percent growth matters less.** If SSEBITDA holds at 10% of revenue while the company grows, absolute dollars grow. It's reasonable to reinvest some for de-risking and growth rather than "maniacally" maximizing the percentage.
