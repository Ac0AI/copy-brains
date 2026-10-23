## Pricing AI on outcomes: the case for a productivity guarantee

Scott argues that companies are spending more on AI than ever without knowing what they get for it. Dashboards show activity metrics such as "tokens consumed and lines of code generated", but none answer "how much value is the business actually getting out?"

- He says the industry needs to move from maximizing usage metrics to maximizing outcomes.
- There is no good standard for measuring outcomes today, and he argues AI vendors should be the ones to provide it.
- His closing principle: "Every AI vendor should be able to tell their customers what they're getting for their money."
- He hopes other AI companies move in the same direction.

## The AI Productivity Guarantee (Cognition, June 2026)

Cognition offers its enterprise customers a financial guarantee on Devin's output.

- If Devin delivers less engineering value than the customer is paying for, Cognition funds the customer's usage, via credits, up to $10M, until it does.
- Engineering hours are converted to dollar value using a standard global rate.
- That value is compared against each customer's actual consumption near the end of their annual contract.
- If the value falls short, Cognition issues the credits.
- The guarantee applies to enterprise deployments, and interested customers contact Cognition (existing customers go through their account team).

## Why Scott is confident enough to guarantee

Scott lists the reasons Cognition could put money behind its product's productivity:

- The estimator's results, validated against engineers' own time estimates.
- A review of historical productivity data.
- Devin is model-independent: Cognition uses the right model for each task, which helps customers optimize price performance.
- Devin has fine-grained controls to manage spend and steer users toward more productive prompts.
- Cognition's engagement model: teams embed in customer accounts to identify high-value projects, pair-program with engineers on their backlog, run enablement workshops on managing fleets of agents, and measure outcomes.

The takeaway is that the guarantee rests on both the product and a hands-on adoption process that drives usage toward productive work.

## How the productivity estimator works

Cognition built an AI estimator to measure the productive engineering output Devin provides.

- An agent reviews each completed Devin session and answers two questions: did the session produce useful output, and if so, how long would a human engineer have taken to produce the same work?
- The estimator sees the user's prompt, the PR if one exists, every action Devin took, and codebase context from DeepWiki.
- Sessions that ended in unmerged PRs, or were otherwise classified as unproductive, count as not useful.
- Output is measured in hours of productive output, not lines of code, because lines don't track effort: "a critical bug that takes hours to investigate might be a two-line fix."

## Validation and honest limits

- Cognition asked users across its enterprise customers how long their Devin tasks would have taken by hand, then validated the estimator against those answers.
- Scott concedes "no single estimate is perfect", but argues that across many tasks of varying complexity the highs and lows average out.
- The estimator measures engineering productivity (hours of useful output). It does not replace ROI measurement, which needs deeper context on the business value of each task.
- Cognition's customer-facing teams work with enterprises on full ROI impact. The estimator provides a baseline of productive output.
- He says Cognition will keep iterating and publish what it learns.

## Takeaways for pricing and selling a product

- Replace vanity usage metrics with a measure of delivered value, and have the vendor own that measurement.
- Back the claim with money: a capped guarantee signals confidence and shifts risk from buyer to seller.
- Tie the guarantee to a clear, auditable calculation (hours of useful output times a standard rate versus actual spend, checked near the end of the annual contract).
- Pair the guarantee with embedded customer success so customers actually reach the value being guaranteed.
