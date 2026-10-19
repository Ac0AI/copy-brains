## Why traditional ROI rubrics fail

Jason argues that spreadsheet ROI (value divided by time, sorted descending) looks analytical but is mostly noise.

- Typical real-world misses compound: a feature estimated at impact 60 and effort 4 (ROI 15) that delivers 20% less impact and takes 50% more time (48 and 6) ends at ROI 8. That is about half the estimate.
- In his example rubric, Feature A (ROI 17) looks clearly better than Feature D (ROI 10). Since A can easily land at half its ROI, there is "no objective justification" to rank it above D or anything else.
- Estimation errors do not cancel out. Effort is almost always under-estimated; 4-sprint projects that stretch to 6 are not offset by an equal number that finish in 2.
- Impact is ill-defined. Revenue from customers asking today is precise but often uncorrelated with long-run revenue. Next-year sales attributed to a feature are high-error, and if attribution is unmeasurable after the fact, it is unpredictable beforehand. A 1-5 relative scale is a wild guess that people read differently, and a one-point difference swings computed ROI a lot.
- Combining several impact metrics compounds the error, and the ROI division expands it again. The many decimal places in the output are "a random number generator", not precision.
- His requirements for a fix: scores must carry far more signal than noise, and their definition and estimation must be obvious and uncontroversial.

## Fermi estimation: powers of ten only

The fix is to estimate every input as an order of magnitude: a 1 followed by zeros, with no ranges and no other digits.

- Origin: Enrico Fermi estimated the 1945 Trinity blast at about 10,000 tons of TNT by dropping paper scraps and measuring a ~2.5 m shift. The official figure was 21,000 tons.
- Gas-station example (Joel Spolsky's interview question, LA County): 10 million people, 1 car each, 1 refill per month, 10,000 refills per station per month, so 1,000 stations. The actual count is about 600, the same order of magnitude.
- Choices are easy because the adjacent powers of ten are obviously wrong.
- Scores end up either identical or very different, so calculation error is small relative to the gaps.
- Remaining debate is valuable. If people disagree whether a product yields $1M or $10M, they hold different assumptions about the customer, market or idea, which is strategic discussion. Small disagreements that estimation error would swamp never come up.
- If you have precise data (cars per person of 0.54), use it only if you still zero out every digit but the first after combining it with other rough estimates. Otherwise just enjoy the simpler system.

## Fermi impact for quantitative measures

Pick any definition of impact, then limit answers to widely spaced values. Examples he gives:

- Revenue increase: $1k/mo, $10k/mo, $100k/mo
- New customers per month: 1, 10, 100, 1,000, 10,000
- Take-rate among existing customers: 1%, 10%, 50%
- Share of customers actively using it: 0.1%, 1%, 10%, 50%

The last two cheat a little because 100% is impossible, but a 5x gap between choices is still much wider than Fibonacci-style scales. The danger zone is gaps of only 2x or 20%.

## Fermi impact for qualitative goals (WP Engine Atlas example)

Jason used this when WP Engine launched Atlas (headless WordPress platform) and needed to choose 4-5 of 22 topic ideas for a developer thought-leadership presentation.

1. State the goal even if unmeasurable: everyone leaves "loving the content and interested in our software". It is met only if all four sub-goals are met: widely applicable, matters to real people, insightful (non-obvious), relevant to Atlas features.
2. Turn each into a specific question: how many customers care; how much do they care; how insightful is our perspective; how powerfully or uniquely does Atlas pay off the insight.
3. Give each question a Fermi scale with concrete definitions. Examples:
   - How many care: 100 = definitionally everyone, 70 = most, 30 = some, 0 = one or two or no one.
   - How much they care: 1000 = mission-critical, 100 = "serious concern we've discussed internally", 10 = "I'm curious", 1 = "Meh", 0 = "Don't waste my time".
   - Insight: 1000 = "Wow!!! This changes everything", 100 = "I took notes", 10 = "Yup, makes sense", 1 = "No shit, Sherlock".
   - Atlas payoff: 1000 = "I'll buy Atlas just for that", 100 = "Nice, I'll take a look", 10 = "That's fine", 1 = "So what?", 0 = "I actively do not want this".
4. Multiply the scores, because all four are needed together, and sort.

- Specific questions and specific value definitions make scoring easy and consistent between people, versus "Insight is a 2 out of 5."
- Result: the presentation was routinely scored 5 of 5 in post-event surveys, and the main complaint was wanting even more detail.
- Footnote: multiplying powers of ten is equivalent to adding 1-5 scores (a logarithm), but Fermi values can carry meaningful specific numbers that break ties, and stressing divergent values yields better phrasing and more scoring agreement.

## Fermi time estimates: 2d / 2w / 2m

Roughly twenty years earlier, at Smart Bear Software (on-premises product, a few major releases a year, about four months planned at a time), the team estimated on index cards.

- Only three sizes were allowed: `2d`, `2w`, `2m` (two days, weeks or months). Whatever you think the real figure is, round up.
- Most cards caused no disagreement, saving hours. The contested ones were really scope and definition arguments, which are worth having anyway.
- Planning: spread cards on a table, each person holds the cards they will do. Typical window was 16 weeks, with two `2d` cards equal to 1 week and one `2m` card equal to 8 weeks. Over- and under-scheduled people were easy to spot.
- Multi-card projects (an "epic") were color-coded: accept all cards of that color or none.
- Outcome: the whole plan took a few hours, and four months later they typically hit it within a week of the estimate.
- It is roughly powers of five in work-days (`2` vs `10` vs `45`). He used real time instead of abstract units because it is easier to imagine, and kept only three values to minimize controversy and force critical thinking about scope.

## Putting it together: single-valued impact

Example using next-twelve-months revenue and effort converted to work-days, ROI rounded to the nearest 10%:

| | NTM revenue | Effort | ROI |
|---|---|---|---|
| A | $100,000 | 2m | 2200 |
| B | $10,000 | 2w | 1000 |
| C | $1,000 | 2d | 500 |
| D | $10,000 | 2m | 200 |
| E | $1,000 | 2w | 100 |

Properties he highlights:
- Biased toward more impact, even over quick wins. A good bias, since real impact usually falls short of hopes.
- Robust to misjudgment. If A delivers $80,000 in three months, ROI is about 1200, still ahead of B. If B delivers $8,000 in three weeks, ROI is 533, still ahead of C.
- Easy to explain. "Feature A has by far the greatest potential for impact. The impact is so large, it's worth spending multiple months on it." For B: faster and a great idea, but A's impact is far larger; if A turns out much harder or lower-impact, pivot to B.

## Combining multiple impact scores

- Multiply when several factors are all required together for one goal (as in the presentation example).
- Do not multiply unrelated attributes such as revenue and customer delight. Different units cannot be combined sensibly.
- Option 1: do not combine unlike attributes. Pick the most important one and compute ROI on it, then break ties with the other. Explanation: "A, B and C are equally effective at generating revenue, our most important goal. Among those, B also increases delight more, so we're implementing B."
- Option 2: add instead of multiply, only when attributes are truly equally important, such as filling out a schedule with secondary quick wins where you do not care what kind of win each is. With Fermi values, a lot of value in one area beats some value in two areas, which traditional rubrics get wrong.

## Breaking ties

Because Fermi inputs have few values (3 revenue levels times 3 effort levels gives 9 unique ROIs), ties are common. Jason treats that as a feature: it exposes real ties instead of letting noise crown a false winner. In the presentation case there were clear first and second places and a three-way tie for third.

- Adding precision is tempting but only legitimate if you are certain it is accurate or you want an intentional bias.
- Weighting by multiplying a factor by a constant does nothing: every total scales equally, so order and ties are unchanged. What matters is the interval between choices. To make a factor less influential, shrink the spacing (powers of 3: `1, 3, 9` instead of `1, 10, 100`). Spacing need not be regular: `800` and `1000` at the top reflects "essentially the same, one slightly more", and extra `0` options can filter out anything below a standard.
- Run-off: for items tied on ROI, drop time and choose a new dimension, or drop existing dimensions. For the presentation he preferred insightful topics over product-selling ones, so the run-off used "insight x reach".
- To choose the dimension, ask: "If we maximize this dimension in the next few months, then even if we get nothing else accomplished, it will still be a success. Conversely, if we moved other needles, but this dimension remained unchanged, it will have been a failure."

## Human-factor tiebreakers: excitement and confidence

Once the business metric is maximized and tied, Jason is happy to break ties with human factors, scored on Fermi scales.

- Team excitement: excited teams are happier, feel listened to, and work harder and better ("win-win"). Scale: `0` no one is excited, `1` one person, `10` about half the team, `100` all or all but one.
- Confidence: not the same as correctness, but if you are sure how to execute one option and full of doubt about another, pick the first. He avoids percentages ("60% sure") because pinning down a number is suspicious and invites unproductive debate. Scale: `0` no way we pull this off, `1` "we can try, but don't be surprised when it fails", `10` "probably doable; we'll be surprised if it goes very wrong", `100` squarely in our expertise, done something similar before, nothing uncertain in the task breakdown.
