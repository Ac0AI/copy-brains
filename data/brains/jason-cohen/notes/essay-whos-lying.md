## Redundant instruments: "Who's lying?"

- Jason takes the pilot's rule "Who's lying?" and applies it to business metrics: some instrument is always wrong, so important numbers need independent cross-checks.
- Origin story: on a long flight with a pilot friend, Gerry, both fuel gauges still read "full" after four hours. The needles stick to the glass.
- Gerry had "stuck" the tanks before takeoff, meaning he dipped a wooden dowl into the tank through the top of the wing to judge fuel by the wet line. Jason's takeaway: "Sometimes the simplest technology is best. Wooden sticks don't run out of batteries."
- Usually your instruments are right. The danger is not knowing when one is wrong, like running out of gas without realizing it.

## Redundancy must be different in kind, not just doubled

- Having "two of everything" is not enough. Two gauges that both depend on electricity both fail when the power goes out, and that was exactly the case with the two fuel gauges.
- The second source must be implemented differently, using a different source of energy or method. Example: a stick versus a gauge.
- Aviation example: a magnetic ball compass floating in liquid works without power but bounces with vibration. A second compass runs on suction (air pressure differential), which stays stable in turbulence. Each covers the other's failure mode.
- Gerry's check: ask "Who's lying?", and cross-check suction-based dials against electric ones.
- Jason cites "Trust, but verify" as the principle.

## How metrics silently go wrong

Jason lists failures he has seen in real companies:
- A spreadsheet with a subtle formula bug.
- Analytics JavaScript accidentally left off one page.
- A survey email not sent to every customer in the cohort.
- A database query that did or did not filter something important.
- A nightly update script that had not run for three months.

## Cross-check the same number two ways

Jason's method is to derive the same figure from two different systems:
- **Revenue:** billing system versus cash flows in bank statements. He once discovered his credit card processor was delaying cash receipts.
- **Active customers:** Stripe versus the user portal, because sometimes a cancellation in one system fails to cancel in the other.
- **Web traffic:** Google Analytics plus another analytics tool, or your raw web server logs. Five analytics tools will give five different numbers. This could be differing definitions of "visit" and "session," but he asks: "is that truly all it is?"

## Redundancy also improves understanding

- Beyond catching bad data, computing the same thing twice gives a better grasp of the forces behind it, and so better analysis of how the company operates and how the market is changing.
- Web traffic example sources: analytics on where traffic originates (imperfect, especially as browsers and extensions block or obscure data), ad click-through data, your own raw server logs, and industry-wide data such as Google Trends on search volume for your keywords.
- Each tells a different story, none has the full picture, and all are biased. Together the picture is more complete, and biases can cancel through averaging or by heeding only the clearest, most consistent trends.
- His rule of thumb: "If four different sources agree that a trend is happening, then it's definitely happening."

## When to double-check a metric

- Criterion: if a metric is important enough to watch every day, and to act on when it deviates from expectation, it is important enough to be double-checked.
- Reasons: accuracy and completeness of comprehension.
- His closing warning: if your dashboard isn't redundant, you will never know "who's lying."
