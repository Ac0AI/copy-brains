## Why Jason distrusts confidence scores in prioritization

- Frameworks like RICE ("Reach x Impact x Confidence / Effort") and RPS ("Reach x Potential x Solution Confidence") bake confidence into the score. Jason argues this is the wrong use.
- A small incremental feature he is sure he can ship and a large, high-impact, risky feature then score as equals. He calls that equality false.
- Teams are nearly always choosing between exactly those two kinds of project. They are confident about small ones and unconfident about large ones, "as well we should be."
- The result is that confidence systematically skews prioritization away from delivering as much value as possible, which he says is the opposite of what a framework should do.
- A sane use of confidence is as a tiebreaker only:
  1. Score the projects.
  2. If there is one clear winner, do it.
  3. If there is a tie, pick the one you are more confident in.

## Why he doesn't believe the numbers

- **Ill-defined.** "30%" only means something if you track your confidence scores across all projects, compare them to outcomes, and compute how accurate you were. Teams don't do this. Teams that ship only a few major features a year lack the data to know, even in hindsight.
- **Always overconfident.** Projects are nearly always late and often have less impact, less quickly, than hoped, however confident the team was. They were at least "fairly confident" or they would not have agreed to a nine-month, six-team project.
- Hofstadter's Law: "It always takes longer than you expect, even when you take Hofstadter's Law into account."
- **Experienced PMs have stories.** Ask any experienced product manager about a feature they were certain would be well-received, backed by customer conversations, explicit requests or purchase commitments, that almost nobody used, including people who promised they would. Everyone has these stories, and that is his point.
- **Content creators see the same thing.** Hastily produced pieces they almost didn't publish often outperform work they spent dozens of hours on. He quotes the Twitter example of hours on threads with no traction versus 10 minutes on two tweets that each drew 15K+ followers.
- His two-by-two of confident/not confident versus loved/ignored has "lots of examples" in every cell.
- A mitigation for stated demand: ask customers to describe exactly how they would use a feature in their normal workflow, step by step. They often realize it would mean rewriting code or exporting to another system, and back off.

## Probability vs. uncertainty

- Probability assumes you know the underlying distribution, like 100 fair coin flips landing between 40 and 60 heads.
- Almost nothing in a startup is like that. Strategies, features and startup success are unprecedented, too complex to model, or lack precision on inputs. This is Knightian uncertainty (Frank Knight, 1921).
- Bayesian methods don't rescue it, since they need numeric priors and conditional probabilities, which are unknowable and ill-defined.
- The question he asks instead: what actions are wise regardless of the probability distribution?

## Techniques for prioritizing under uncertainty

**True always**
- Focus on what is true under any circumstance, in Bezos's sense of long-term constants (lower prices, faster shipping, fair and fast service).
- Example: users universally like fast, responsive software. At worst they don't care; at best (Notion, Figma, Miro, Gmail, Google Docs) performance is a differentiator.
- Mandatory-but-mundane items such as SOC 2 compliance are certain to be valuable when selling to enterprises.
- Caveat: your most innovative, differentiated ideas rarely fall in this "certain" bucket. Great products need both reliable improvements and leaps of faith.

**Quick discovery, quick recovery**
- Customer interviews can invalidate an idea before you build, saving months or years, but "you never really know until you build."
- Build an SLC (his upgrade of the MVP: simple but complete) to get experience instead of prediction.
- For existing products, keep a balanced portfolio of guaranteed wins and innovative bets, using different validation for each.
- "Dummy features": a button that says "This feature isn't built yet. Tell us how you'd use it." You get a count of interested users and interview candidates who showed interest through action. He says this gives 100x better signal than hypothetical survey questions: "Observed behavior beats stated intentions."

**Focus on customer impact instead of confidence**
- Majority rule: a feature most users use regularly is important.
- Passionate advocates: features a smaller segment says are the only reason they bought. These "magnificent delighters" drive purchase decisions, and users tolerate shortcomings elsewhere (the iPod's magic made people put up with iTunes).
- His quantified bar: a high-impact feature is either (1) regularly used by at least 51% of customers, or (2) cited by at least 15% of customers among their top three reasons for choosing or retaining the product.
- The bar is deliberately high because risky projects that may overrun need rewards that justify the risk.

## Leverage and optionality

**Invest in leverage**
- Some areas of the business or product reward small changes with outsized results. He points to his book *Hidden Multipliers*, which covers eleven such areas of leverage with your current budget and team.

**Maximize optionality**
- If you can't know the future, make choices that keep the most options open. Examples:
  - Keep costs low so many pricing and packaging options stay profitable.
  - Choose established, actively developed, cross-platform UI frameworks.
  - Use a plug-in architecture so others can build things you can't imagine.
  - Use an API-first architecture to isolate teams and connect front-end, back-end and integrations.
  - Wrap vendor services so you can swap vendors that become unstable, expensive or laggy.
- Optionality costs work today (vendor-wrapping APIs add no value now). That suits mature companies that value stability over shipping a feature a month earlier, but may be wrong for early-stage companies that need velocity to beat incumbents.
- Company-level optionality comes from being a great company: healthy sustained growth, large and expanding gross margins, customers who love you (retention, upgrades, online chatter), employees who love you (longevity, advancement). Such a company can be acquired on decent terms, run as-is for a long time, raise money, never raise, go public, or be passed to employees or children.

## Portfolios vs. asymmetric bets

**Portfolio of bets**
- Portfolios reduce variability at the cost of lower maximum upside: you are unlikely to have zero wins, but even a massive win is diluted by the losses. His example: buying Amazon at IPO and holding would have been best, but the same advice applied to other IPOs that year gives $0.
- They work regardless of the underlying distribution because of the Central Limit Theorem. Sample means converge to a normal distribution with the population mean and variance of 1/n of the population variance. A Lindeberg-type version holds even with different distributions per sample, if independence, finite variance and no dominant variable hold.
- Those conditions arguably fail for startups, since some power laws have infinite variance.
- Use portfolios when you want predictable, typical outcomes, such as prioritizing many smaller things for incremental reliable results.
- Don't use them to hunt outliers. He cites that 65% of venture/angel portfolios lose money and only about 10% generate returns high enough to justify the risk and illiquidity. Outlier hunting calls for all-in investments, not portfolios.

**Asymmetric bets**
- Portfolios give reliability; asymmetric bets give outliers. You don't predict whether it pays off. You take bets with limited, quantifiable downside and large upside.
- Example: if the worst case is "we lose two months" and the best case is "we're completely differentiated," the probability barely matters. The downside must be survivable and one win must pay for ten losses. "The exact probabilities are unknowable; the *shape* of each bet is not."
- At the feature level you usually have to construct the asymmetry. Software projects default to drifting from "two weeks" to "two months" to "we've spent so long we have to finish it."
- The mechanism is a budget written down before starting, for example "two engineers, three weeks, then we stop and look." The time-box is the bounded downside.

## What to use instead of confidence in a framework

- Replace "confidence" with "how asymmetric." RICE asks for a probability you've already conceded you can't know.
- Asymmetry asks for two things you can estimate: the worst case in time and money, and the best case in customer value. Both are concrete and can be argued to a defensible number in a meeting.
- He recommends restricting all numbers to powers of ten when doing this.
- His closing line: "Stop pretending you can quantify confidence, or even define it. Instead, use techniques that work whenever the future is unpredictable. Because it always is."
