## Why probability words fail

- Jason argues that words like "unlikely" and "almost certainly" don't communicate probability, because people read them very differently.
- In the study he cites, the median intended probability of "likely" is 70%, but "unlikely" is 20%. Since one is just the negation of the other, he says you'd expect a symmetric 70/30 or 80/20 split, but the numbers are biased.
- "Probable / improbable" is worse, at 70% vs 10%. "Probable" and "probably" are both 70%, yet "probably not" is 25% while "improbable" is 10%.
- He notes this causes confusion in analytical settings such as risk analysis or debating a strategy.
- He points to the literature on our bias about rare and common events. People are surprised how often 5% things happen and how often 95% things don't. Examples: Taleb's *Black Swan*, and getting upset when a "10% chance of rain" rains out a picnic.

## Individuals disagree more than the words differ

- Jason's central point: "the differences between individual interpretations are larger than the differences between the words themselves."
- One person's ratings in the study: "probable," "probably" and "likely" were each scored only 50%. "Probably not," "we doubt" and "unlikely" were each 20%. "Improbable" was a flat 0%, while "highly unlikely" was still 30%.
- He sympathizes with that rater. If the consensus is that a project is "improbable" to finish on time, he would *act* as though the probability were 0%.
- Conclusion: give up on using words to describe probabilities.

## Why assigning numbers to words doesn't work either

- The CIA tried to fix this with the "Sherman Kent Scale," published in 1964. For example, "probable" was defined as 75% and "almost certainly not" as 7%.
- When officers were assessed against the scale, fully half the time they failed to stay in range.
- Even with official numeric definitions and trained, competent people, words still fail.
- Jason says the CIA's mistake was continuing to use words. Their categorical probabilities were already Fermi-style:
  - Certain 100%
  - Almost certain 93% (range 87-99%)
  - Probable 75% (63-87%)
  - Chances about even 50% (40-60%)
  - Probably not 30% (20-40%)
  - Almost certainly not 7% (2-12%)
  - Impossible 0%

## The solution: Fermi-style probabilities

- Rule one: force numbers and never use vague words. He says this alone improves communication.
- Writing precise probabilities is hard, because we usually can't know the true value. The world is unpredictable even with expertise and data, so we need fuzzy ranges to gesture at our intent.
- Saying "unlikely" can seem more accurate when the true figure could be 10% or 40%. But given how differently people read "unlikely," the range isn't communicated anyway.
- Borrowing from Fermi estimation (as used for impact and time estimates), he says haggling over "20% or 30%" is unproductive. Nobody knows the true number, and you need crisp signals to make decisions.
- His formula for a Fermi-style probability:
  1. Use numbers, not words.
  2. Select from a small set of options.
- His recommendation: "use just a few raw numbers, without words," with instructions for rounding off that depend on context.
- Example: when estimating whether a project finishes on time, things are more likely to be late than early, so round toward the lower probability.

## Where to apply it

- **Risk slides:** use Fermi probabilities to force yourself to decide what you think the risk really is, so everyone can decide whether to act.
- **Strategy:** put a Fermi probability on each assertion, so people know what is more or less likely to change as the team learns.
- **Work prioritization:** put Fermi probabilities on the "value" or "estimate" metrics used for decision support.
  - Have everyone supply their numbers independently.
  - Where numbers disagree, discuss. Where they agree, move along and save time.
  - He adds a caveat: sometimes probability isn't even applicable to such things.

## Why people avoid numbers

- Jason's view: we use wishy-washy probability words because we don't actually know the probability, and rather than admitting that, we glide past the challenge. He calls that "the worst reason of all."
- His closing instruction: "Be brave, and put a number on it."
