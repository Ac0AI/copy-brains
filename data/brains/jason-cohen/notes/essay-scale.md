## Why a 500-person company can't run like a 50-person one

Jason argues that idealistic founders believe they can scale without becoming a "typical big company": no dumb rules, no meetings, no "average" hires. He says they never succeed because two forces are unavoidable. Everything else about scale follows from them.

- **Rare things become common.** At scale, events that were rare happen daily, so manual handling stops working and new processes become necessary. Example: with 1,000 servers, one failure per server every three years means one failure per day. That hits DevOps, customer support and social media every day, and automation helps but doesn't solve it.
- **Complexity beyond human comprehension.** "Complicated" systems can be split up, built and tested in parts, and handled by specialists. "Complex" systems have components that affect each other, often in cycles, so most of the difficulty is in the interactions. Jason says that difficulty "grows non-linearly" as the company grows and never stops being difficult. He cites the Cynefin Framework for the terminology.
- **Large companies are not small companies × 100.** He calls the difference "not a bad thing or a good thing. It's a different thing."
- **Org structure doesn't fix it.** None of his examples depend on organizational structure, so Holacracy and Teal Organizations do not solve these problems. The forces are universal.

## Robustness costs productivity: the trade-off in teams and systems

Jason's line: "a team of one is fast, but brittle."

- A one-person team has the highest output per person: no meetings, instant decisions. Small companies need this speed, because it counters the things constantly about to kill them: no customers, no attention, missing core features.
- The brittleness: one illness takes velocity or quality to zero. If the person leaves, you lose about six months, or twelve months or a rewrite if nothing was documented. If it was a co-founder, it can be fatal ("founder trouble" is a leading cause of startup death). He notes data also show solo-founder companies fail more often, and says the choice comes down to temperament.
- At scale, with 15-25% annual employee turnover plus illness, vacation and family, people are out every day. Keeping the tiny-company attitude becomes "disorganized and irresponsible."
- His rule of thumb: no project can have fewer than about three dedicated people, plus management and possibly product or project management. A team of 4-5 is not 4-5x as productive as one person. "Per-person productivity goes down in exchange for robustness and continuity."
- The payoff: the small company loses 9 months to a key departure or implodes, while the big company "adds thousands of customers per month like clockwork and wins the race."

**Software robustness works the same way.** His worked example:
- One server at 99.9% uptime sounds good but means over 500 minutes of downtime a year.
- Two servers cut simultaneous failure to 0.1% × 0.1% = 0.0001%, about 30 seconds a year. Each server must still be big enough to carry all traffic alone, so there are no savings from smaller machines.
- You then need a load balancer, plus a shared database moved to its own server, plus two of those. That is four servers and a load balancer, "more than 4x the original cost."
- Caveats: real failures are correlated or cascade, and the load balancer itself can fail.
- "Robustness always carries a cost." You trade local inefficiency for whole-company continuity.

## Predictability becomes a requirement, not a nice-to-have

- A small company has no need to predict ship dates, so it should "optimize myopically for speed-to-market."
- A large company's advantage is coordinated execution. When WP Engine launches a product, a well-funded set of teams hits press, events, campaigns, social and newsletters at once, getting more attention in one week than a small company gets in a year. It also sells immediately to about 200,000 existing customers plus thousands of new ones per month, adding more revenue each month than a small company earns in a year.
- That requires predictability, and predictability requires going slower: estimation, coordination, planning, documentation, and re-planning across teams when reality differs.
- **Hiring lead time example (support team):** recruiting, interviews, the new hire's notice and a week off, orientation, classroom training, then pairing with senior staff. That is four to six months from deciding to grow the team to having people up to speed. So support demand must be forecast four to six months ahead.
  - Under-estimate: staff are overwhelmed and customers suffer.
  - Over-estimate: you pay a cost penalty. This is the better failure mode, but both are sub-optimal.
- Against "the future is inherently unpredictable": he says that is partly a self-fulfilling prophecy, because insisting on it means skipping the work that makes things more predictable. Small companies lack the data, customers and experience, so they are usually right that they can't predict, but that is "impossible for *them*," not impossible in principle.
- At scale it is required, "not because Wall Street demands it" or investors do, but because it's critical for healthy scaling.

## The Materiality Threshold

- Definition: the minimum contribution a project must deliver to materially affect the business.
- Google example: a new product earning $10M/year is a failure, because the same tens of millions of dollars spent making the existing operation just 0.01% more effective would earn more. At over $100B/year in revenue (when written in 2017), Google could only consider products with potential of at least $1B/year as an absolute floor, up to $10B/year if things go well, such as YouTube, Cloud and self-driving cars. An editor's note says that by 2023 Google's revenue was nearly $300B, reinforcing the point.
- A small business's threshold is near $0. A feature that lands a few customers, or a campaign that adds two sign-ups a week, counts as success.
- A modest-sized company needs millions in revenue from new products, maybe tens of millions. Very few products reach that; most startups never hit a $10M/year run-rate, even with decent products and dedicated teams.
- So a Product Manager at a mid-sized company has a "tough job": inventing, designing, implementing and nurturing exactly those products, which most entrepreneurs never achieve.

## Recruiting changes at scale: employee #200 is not employee #2

- Employee #2 joins for the experience, stories, influence, potential, thrill, control and camaraderie, even with a pay cut and even if the company likely fails. Employee #200 has a different risk profile, won't take a pay cut, and wants different problems to solve (scale problems rather than "why 7 people bought and the next 3 didn't").
- Small companies see cheap amazing hires as an advantage. But Jason says hundreds of people at WP Engine are much more skilled in their area than anyone he met at a small startup, including his own.
- Why experienced people join larger firms:
  - They are in a life phase where they want a predictable, larger paycheck and a well-defined job, so they can still tuck their kids into bed at night.
  - They enjoy applying advanced skills in a larger environment (for example, marketing techniques that make no sense for a small company). They'd hate going "back to Kindergarten" as Jeff Bezos quipped, scratching out a $2,000/month AdWords campaign or being called a "growth hacker."
- Implications: compensation, where you find talent, and why someone picks you over a company that pays a bit more. It is critical to have a genuinely important mission, meaningful and interesting work, and to connect everyone's work to something bigger. "These matter even more at scale, because it's the reason why talent will join and stay."

## Communication: repeat simple messages

- With 4 people, everyone can know everything, and a 5% chance of misunderstanding rarely matters. With 400 people, that 5% means 20 confused people, and that assumes they even read or listened.
- "Slack" is not the answer and "Email" is not the answer. The answer is **repeating simple messages.**
  - Repetition answers "I didn't see it": repeat in different formats, at different times, by many leaders. It approaches 100% asymptotically, with collateral damage for people who read everything and tire of hearing it.
  - Simplicity answers "I didn't understand / remember it": accept that people don't read, don't remember, have other things on their minds, and that you wrote less clearly than you hoped.
- Consequence: you cannot communicate anything complex to 1,000 people. "Scale is hard."

## Technology, infrastructure and risk mitigation at scale

**Technology**
- Managing 10,000 virtual servers sounds easy ("automate everything"), but it never works like that. Examples he cites: Reddit took 18 months to get "number of likes" working at scale, StackOverflow took 4 years to convert to HTTPS, Wired did the conversion in 18 months.
- Patterns behind this:
  - Rare things are common, and hard to predict, identify or reproduce.
  - Compatibility with existing technology. New companies start from scratch, but at-scale companies must transform, and the cause of the difficulty may also be generating $100M in revenue ("Instead of 'legacy code' we call it the 'revenue code.'").
  - Bottlenecks. Small scale can be fixed by adding capacity; eventually something forces re-architecture.
  - Hickam's Dictum: problems in complex systems usually have more than one root cause. Example: a software upgrade breaks seven customers undetected. Causes include no failure detection, missing tests, undocumented code, and inadequate code review. Five Whys and Occam's Razor don't apply, so analysis and decisions are complex.
- Result: entire teams for infrastructure, scaling, deploys, cost management and dev process, none directly customer-visible but necessary.

**Risk**
- A small company's likeliest cause of death is "suicide": starvation (not enough customers paying enough for long enough), founders splitting, no traction for the next round, going back to a day job.
- At scale the risks differ. At WP Engine, the risk of failing to sign thousands of customers this month is very low, but other risks are likely and must be addressed head-on. Example: an Amazon data center down for a week. How fast could all customers be restored while thousands of other businesses also spin up servers? Could you communicate quickly and simply so support isn't swamped with tens of thousands of angry customers?
- Risk mitigation can drive growth: serious customers want vendors who manage risk. That is why enterprise suppliers like WP Engine promote SOC 2 and ISO 27001 compliance. Small companies mock these, "while they're busy making that point, the larger companies are busy signing three-year multi-million dollar deals."
- Early on you don't need a disaster-recovery plan, since it won't kill the business and customers understand young-company risk. Later it becomes critical.

## What founders must do: change the details, keep a few values

- Many founders believe "what got us here is what's important and unique about us, and thus we should preserve *all* of it," and that other companies fail because they act like big companies. Jason says: "But they're wrong."
- Keep a few constant values, otherwise "none of it means anything," but the details "must change."
- Scaling is hard, foggy, lasts years, may need a different set of people, and "no one emerges unscathed." Struggling with these forces is not a sign of disaster. Everyone does.
- Disaster is when leaders don't appreciate these forces, don't work constantly to reshape the organization, don't bring in experienced talent, and assume they can figure it out alone.
- Instead, expect new people, roles, values, processes, recruiting, stories, constraints and opportunities.
- Many founders can't make the shift, which always hurts the company and sometimes kills it, an avoidable waste of sometimes hundreds of person-years of effort.
