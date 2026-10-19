## Binstack: picking the single most impactful option

- Jason's technique for "multi-dimensional maximization": choosing one best option when each is better on a different, incomparable dimension.
- Examples he gives: which major feature to build in the next six months, which candidate to hire, which marketing campaign to test.
- Goal: pick the best option, and be able to explain the decision to people who wanted a different outcome. He says not to undervalue "crisp explanation."
- Binstack asks whether an option has a material effect on each attribute (yes or no), then stack-ranks the attributes by importance. It is meant to maximize impact, not ROI or efficiency.
- Jason says to use a separate ROI rubric if you want to maximize impact per unit of effort.

## Why weighted rubrics fail

- Adding up scores often produces ties. His example: Player P (Health 8, Strength 5, Speed 2, Endurance 5) and Player Q (5, 7, 6, 2) both total 20.
- Adding weights doesn't fix it. Weighting Strength 2.0 and Speed 0.5 gives 24 vs 24. Even weights rigged to favor Q give only 20.5 vs 17.5, which is not a decision anyone can feel confident about.
- Real-world scores are imprecise guesses, such as "potential new revenue" or a 1-to-5 scale. Multiplying by weights compounds the error, so "differences in the final results are more error than signal."
- Attributes aren't comparable. Adding them implies they are. Saying the weights out loud exposes it: "Every $150k of additional ARR is exactly as valuable to us as 10% more customer satisfaction... Really?"
- A tie broken arbitrarily can't be explained to anyone.
- His general rule: complex decisions are hard because we've avoided making smaller decisions first.

## Step 1: Binary materiality

- Drop values, weights and scores. An option either materially affects an attribute or it doesn't. "Materially" means the effect is large enough to measure easily.
- Examples of material thresholds he gives:
  - Revenue: at least a 10% bump so the curve visibly changes.
  - Retention: a 20% decrease in cancellations tied to a specific cause.
  - Usability: a 40% decrease in support tickets on a topic, or a 50% increase in interface success rate.
  - Profitability: gross profit margin improves by 1%.
  - Monetization: putting it in a higher tier or add-on makes 5% of customers upgrade.
  - Adoption: 40% of surveyed customers score at least 4 out of 5 on whether they'd use it.
  - Satisfaction: a survey score moving from 4/10 to 8/10.
  - Competitiveness: sales adds it to the standard presentation and marketing adds it to the pricing-page feature table.
  - Thought leadership: marketing commits to ten external articles referencing it next quarter.
- Have people write down the expected material change. The estimates aren't accurate; the point is that writing them forces the person to think it through.
- Most ideas will turn out to be too incremental to measure, so they are "not material." Jason says that's the point: it shrinks the field to the actually-best ideas.
- Don't put the guesses into an equation: "no computing with noise!"
- With "6 or greater is material" in the player example, P gets 1 check and Q gets 2. Each point is meaningful, so even a 1-point lead is a clear winner, and the explanation is easy: Q materially impacts two important things.
- Ties still happen. At a threshold of 5, both players get 3. His footnote says the problem may be that the materiality standard is too low.

## Step 2: Stack-rank the attributes

- Not all attributes matter equally, so rank them in a single ordered list. No numbers and no weights.
- People get stuck in circular debates (growth vs. profit vs. "10x prices" vs. "sell $1 bills for $0.80"). Jason says those reductio ad absurdum arguments are moot. Ensure the list contains nothing absurd, then decide which outcome is most important.
- If options keep failing basic standards, set entry criteria for the list. Examples: not less unit-profitable than a set target, not longer than N sprints, no significant retraining of the support team.
- Example stack for a VC-backed B2B company:
  1. Revenue growth ("single biggest driver of equity-value")
  2. Number-of-customers growth
  3. Product experience
  4. Support cost
  5. Infrastructure cost
  6. Net-profit expansion
- Example stack for a bootstrapped company focused on wealth creation and a good workplace:
  1. Cash-basis profit expansion
  2. Product experience
  3. Fun
  4. Number-of-customers growth ("stagnation is the prelude to death")
  5. Minimizing number of employees
- Better still, make attributes specific to current circumstances. His example is a product for mid-sized restaurant chains with a retention problem:
  1. Dramatic increase in usability (the top first-year cancellation reason is that training employees is too hard)
  2. Reduce costs (price is the top reason long-tenured customers switch, so lower costs allow lower prices at the same profit)
  3. Increase market differentiation (unique features would keep customers despite 1 and 2)
- Specific goals produce better selections and help the team brainstorm better ideas.

## The Binstack process and how to explain the result

1. Cross out options that don't materially address the top-ranked attribute.
2. For the next attribute:
   - If no remaining option addresses it, move on.
   - If exactly one remaining option addresses it, that is the winner.
   - If several do, cross out the rest and continue.
3. Repeat down the list.

- This guarantees the winner moves your #1 attribute, even if another idea moves several lesser ones.
- Example explanation of the winner: "We decided the most important things we have to accomplish in the next few months are to grow top-line revenue and create defensible technology. Item P does both of these things; none of our other choices did."
- Example explanation of a rejection: Item Q is solid and would raise profitability and differentiation, but the priority is revenue and only P delivers it. If priorities change or P is done, Q is worth revisiting.
- Explaining "why not Q" matters as much as "why P." Some people really wanted Q, maybe because it was their idea. Seriously considering it and inviting them into the process may bring them to the right conclusion themselves. He calls this "the human, and humane, part."
- You needn't score every item if most are rejected immediately, which saves time.

## Edge cases: effort, ties, fun, changing priorities, empty results

- **Effort is deliberately absent.** ROI rubrics tend to select less-impactful items that are cheap to build. Binstack selects only for maximum impact.
- **Ties:**
  - If many items remain, raise the materiality threshold.
  - If two are truly indistinguishable, don't flip a coin, because you can't explain it to the person whose pick lost.
  - Instead pick what the people doing the work want to do. His argument: people work harder and better on fun work, so you get more productivity and more happiness.
  - Don't do fun at the expense of what needs doing, but otherwise "round off in favor of fun."
  - He suggests putting "fun" in the stack-rank itself, even in second position.
- **Rankings change over time and by team:**
  - Early on, getting any customers at any price may outrank revenue or profit.
  - A mature company that reliably gets customers may prioritize efficiency or profit.
  - With multiple teams, run separate lists. Example: one initiative to materially increase profit, one for internal efficiency, the rest maximizing growth.
  - He quotes Aaron Levie: the best product ideas "live at the intersection of 'duh' and 'holy shit.'"
- **If nothing clears the bar:** the real problem isn't prioritization, it's that you lack ideas worth prioritizing.
  - Refocus the team on generating better ideas, even if it takes a month.
  - He argues it's better to spend a month finding something worth the rest of the year than to plod through low-value work.
  - Do high-ROI small projects in the meantime.
- **"It's reductive":**
  - He grants that a reductive approach is invalid for foreign policy, national economics or climate change.
  - For picking a feature, marketing campaign, bug tracker, database or job candidate, being "(intelligently) reductive" is how you cut through noise, decide clearly and explain it. His line: "This isn't foreign policy, it's a feature list."
