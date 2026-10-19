## A/B tests need a simple significance check, not a tool's say-so

Jason argues that A/B testing tools often use misleading or incorrect math about whether a result is "statistically significant." He offers a simple, mathematically sound formula you can run yourself. The cost of guessing wrong is real:
- Wait too long between tests and you waste time.
- Don't wait long enough, and you "think" a variant is better. You then build new variants on that false assumption, a wild goose chase.
- The correct move after an inconclusive test is usually to come up with a completely new test.

He says human intuition is bad at this. People misjudge rare events and "can't distinguish between patterns and noise."

## The rule: D squared must exceed N

For a two-variant test (AdWords clicks, conversions, or a hamster's choices):
1. Let N be the total number of trials (A plus B).
2. Let D be half the difference between the winner and the loser.
3. The result is statistically significant only if D² > N.

Examples he works through:
- **AdWords day one:** 31 clicks vs 19. N = 50, D = 6, D² = 36. Not bigger than 50, so not significant.
- **AdWords day two:** 62 vs 38. N = 100, D = 12, D² = 144. Significant.
- **Hammy the Hamster:** chose organic 8 times and conventional 4 times, "twice as often." N = 12, D = 2, D² = 4. Not significant.
- **6 clicks vs 1:** N = 7, D = 2.5, D² = 6.25. Inconclusive even though A beats B six to one. "With only a few data points, you really don't know anything yet."

## How big a gap you need at a given sample size

Results are significant only if the ratio of winner to loser exceeds (√N + 2) / (√N − 2). Jason's figures:
- **N = 50:** the winner needs almost double the loser's clicks, e.g. a 10% vs 5% conversion rate. He says this is rare, so you can almost never find a significant test from 50 clicks.
- **N = 100:** the winner must be at least 50% higher than the loser.
- **N = 1800:** needed to detect a winner only 10% larger than the loser.

Small N means only big differences are detectable.

## Test big differences, not tweaks

Because variants are often less than 10% apart (he cites "2.4% vs 2.2% conversion rate"), he draws these conclusions:
- "You need to be seeking big differences, not subtle ones."
- Test wildly different designs rather than tweaks. Tweaks can only be tested when N is enormous.
- If a test keeps running and still isn't significant, you aren't learning anything. The variants aren't meaningfully different for your readers, so it's time to try something new.
- Check the formula as the test accumulates data. The day-one AdWords result became significant on day two with the same proportions and double the volume.

## Where the formula comes from

- The right test is Pearson's chi-squared, not the Student t-test. The t-test suits continuous, normally distributed variables; chi-squared suits categorical outcomes from independent trials, which is what an A/B test is.
- The null hypothesis is that results are due to chance alone, so the expected split is N/2 for each variant.
- For two variants the statistic simplifies to χ² = 4D²/N.
- At one degree of freedom, χ² must exceed 3.8 for 95% confidence and 6.6 for 99%.
- Jason picked 4 as a round threshold, giving D² > N.
- If D² is more than double N, you are well past 99% confidence.
