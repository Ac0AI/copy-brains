## A/B testing false positives and p-hacking

- Jason argues that roughly half of the A/B tests marketers call "successful" are false positives.
- A test at 90% confidence is wrong about 1 time in 10, and many teams use 85% or 80%, which makes false positives more common.
- Some teams never pick a confidence level or a sample size N. They "run the test until we get a result that looks conclusive."
- He calls stopping whenever a result looks conclusive "p-hacking," a fallacy statisticians have documented since the 1950s.
- It fails because at small N, random fluctuation often looks like "90% confidence of a positive result." If the experiment continues, the data drifts back to a negative result.
- Jason says, "Before you shake your finger at them, shake that finger at yourself." He is comparing marketers to scientists who publish a single lucky result.

## The coin-flip example of multiple testing

- Jason's example: flip a coin 270 times. If the coin is fair, 90% of the time the result lands between 45% and 55% heads, per the binomial distribution.
- If you get 57% heads, you can say "biased" at 90% confidence.
- Now test 10 coins and get 9 "fair" and 1 "biased." That result is exactly what you'd expect even if all 10 coins are fair, because 10% of tests wrongly say "biased."
- The `9 / 1` result is also the single most likely outcome if 9 coins are fair and 1 is biased.
- So the result can't separate the two cases. His conclusion is that "this procedure is insufficient" and needs to be augmented, not that you've found a biased coin.
- He says marketers make exactly this mistake with A/B tests: run a batch, see about one in ten "win," and call that a success.

## How pharma and social science fake results with real experiments

- To get a useless drug approved, a company can run the same study 15-25 times until a false positive appears, then publish only that result.
- Pharma used to do this. The FDA now requires pre-registered studies and publication of all results.
- Jason notes companies are still sometimes approved on a subset of trials and later found ineffective. His example is the decongestant phenylephrine, with nearly $2B in annual sales, which an FDA advisory panel unanimously concluded is ineffective.
- Social science has the same problem as the Replication Crisis. One small study, often on college students, produces something "interesting," and journals publish it without waiting for replication.
- Even Nobel Laureates have admitted the fallacy debunked their own work and called for "replication rings."

## The evidence from real A/B testing programs

- A study of more than 2,100 real-world A/B tests across Optimizely's customer base found a 40% false positive rate. The software declared those tests "significant," so marketers had no way to know.
- Shopify's Growth Team (600 people) tracks results at 2-8 weeks and again at 12 months.
- Of tests that showed statistically significant improvement in the short term, 35% had the effect disappear over the long run. Jason cites this from Archie Abrams, Shopify's VP of Product and Head of Growth.
- He describes a pattern many testers recognize:
  1. Run tests and keep the winners.
  2. One is 10% better, another 20%, another 10%.
  3. That should compound to about 45% overall.
  4. Looking back months later, there is often no improvement at all.
- His explanation is that the improvements didn't add up because they were false positives.

## Practical fixes to stop fooling yourself

- Run the test again. If false positives are 1 in 10 at 90% confidence, a real effect should reproduce in a second test.
- Don't stop tests early. His blunt advice: "I know you're excited. Just wait."
- Decide how much N you need before the test starts, and pick a confidence level up front.
- Seek large effects, such as double-digit changes in conversion rate.
  - Large effects are unlikely to be caused by randomness. Small fluctuations are far more likely to be false positives.
  - Large effects also matter to the business, and small ones don't.
  - This may mean testing drastic changes instead of incremental ones.

## Form a theory, test it, extend it

- Jason says many A/B tests are just "throwing shit at the wall," excused by "no one knows which headline will work." He calls that thoughtless, and says you learn nothing whatever the result.
- His alternative is to create validated learning. Form a theory of the customer, then design variants that would win if the theory were true.
- Example theories he lists:
  - Visitors at this point are ready to buy, so send them down a restricted purchase funnel.
  - Visitors here want to learn more, so let them explore features rather than pushing a funnel.
  - People are on the fence, so use more forceful, confident language.
  - People can't see well on mobile, so use higher contrast and less text.
  - Pictures beat paragraphs, because people hate reading and half don't speak English natively.
  - People click buttons more than links.
  - Visitors from channel X are in a Y state of mind and excited by Z.
- Write down the theories that come to mind first, then build designs that would perform better if each were true.

## Reading negative and positive results against a theory

- **Negative result:** the theory isn't disproved yet, because your implementation may not have been extreme enough or had other issues. Run a new experiment.
  - If you still get nothing after a few iterations, you've accumulated evidence the theory is wrong. Jason calls that "learning," and it wasn't happening when you threw things at the wall.
  - Then invent a different theory and test that.
- **Positive result:** the theory isn't proven, since positive tests are often false. Lean further into it with a more extreme version or a different form of the same concept.
  - If the theory is right, it works again, maybe better. If it reverts to nothing, it wasn't real.
  - Once validated, extend it: ask what else is probably true and design to exploit it. This can give multiple leaps of improvement instead of random changes.
- Jason says most theories won't be right, or won't be impactful enough, and most tests will come up negative. That's true even for world-class testers like Shopify's Growth Team.
- He frames this as the route to being a marketer AI can't replace, since AI can generate random phrases but isn't a good marketer.
