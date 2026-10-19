## Leverage means a large effect from small effort, and strengths are the source

Jason defines leverage as generating a large effect from a relatively small effort by riding natural abilities or hard-won assets, rather than fighting a battle you are ill-equipped for. Whatever makes others wonder how you got so much done with so little is leverage, not just a "strength."

He ranks three tiers:
- Leveraging strengths is the only way to do great work, not "fixing weaknesses."
- Leveraging differentiated strengths means you beat the competition.
- Leveraging durable differentiated strengths means the win lasts.

He treats the near-term, accessible forms of leverage as worth using. They are not a substitute for a moat, but he warns against ignoring them while waiting for one.

## Why fixing weaknesses is the wrong strategy

Jason notes that company success stories are always about one or two things done amazingly well, never the 47 complex details or a 28-page strategy document, and never about "shoring up weaknesses."

- Netflix pivoted to streaming. Snap had disappearing messages in a uniquely simple interface. The iPhone had unparalleled design. Tesla solved both EV performance and safety. Google's PageRank was an order of magnitude better than anything else and beat thirteen major search companies that had a head start.
- Twitter's 140-character limit created an addictive communication pattern and worked on cheap devices and cheap cellular plans. It kept growing through years of the Fail Whale because of that experience.
- Facebook beat MySpace on its strengths in hypergrowth, not stable infrastructure. It later changed its motto from "Move fast and break things" to "Move fast with stable infrastructure."
- Downtime and security flaws must be fixed, but that is an operational necessity, not a strategy.

His summary: "Reversing weakness is hard, painful, likely to result in something merely neutral, not great, and is at high risk of failing completely." "How we will win" is the entire purpose of a strategy.

Corollary on tools: the best answer to "what tool/language/framework/process should I use?" is usually "the one you already know," because it leverages your most limited resource, time. Slack was built in PHP, a language derided as passé at the time, because that is what the founders knew. Facebook used PHP too and later wrote its own version when it needed performance. Companies that never get off the ground never earn the "good problems to have" of scaling.

## How to handle weaknesses: avoid them, accept them, or fix at most one

- **Rarely fix a strategic weakness.** Occasionally you must change "who we are" because you keep losing deals to a competitor over a major product or positioning gap. A good strategy explains why this risky, expensive, unnatural journey is the best way to win. There should be probably no more than one, because you can't afford the time, people, or energy for more.
- **Avoid weaknesses through target market, persona, and product decisions.** If you can't offer 24/7 support, position as a "boutique" where customers get incredible interactions with experts available at limited times. If you have a small team that can't build millions of features, build for users with simple needs who appreciate simple, well-built software that "doesn't have all that crap I don't want."
- **Manage threshold weaknesses (like uptime) with SLOs.** Jason says WP Engine had great success with the SLO system from Google's SRE Book. It works for anything that should be satisfied rather than maximized:
  1. Define a metric for the effect (for example "uptime in past 28 days").
  2. Define the acceptable threshold (for example 99.5%).
  3. While the metric exceeds the threshold, do not try to improve it, since that over-invests in a weakness that will never become a strength.
  4. If it drops below the threshold, the team addresses it.
  - A cross-functional team agrees on the threshold quarterly. When downtime hits and everyone is emotional and demanding that "something must be done, so this never happens again," you go back to the previously agreed decision rule and defuse the discussion.

## Other sources of leverage: business model, tooling, and passion

- **Near-zero marginal cost business models.** Software and content (blogs, newsletters, podcasts, videos, books, courseware) cost a lot to create the first copy and almost nothing to sell the next. A newsletter written for 100 people takes the same effort as for 100,000, yet the latter can generate 1000x more revenue. A self-funded content company is hard at first (all effort, no income, no compounding) but can be extremely profitable if it takes off.
- **Supporting tools and systems.** AI can draft a simple blog post, with factual errors, no personal examples, and a plodding style. But it can draft ten articles, and a human can edit those many times faster than writing from scratch, which greatly increases output. A great strategy may call for a specific supporting system that makes the team 10x more efficient, which becomes a new form of leverage.
- **Passion.** It magnifies strengths through sheer will and carries you through the emotional pain and drudgery of challenges. "Follow your passion" is correct but incomplete. He quotes Teller: "Magic is just someone spending more time on something than anyone else might reasonably expect."

## Differentiated strengths: separating yourself from competitors

The strengths above are shared by competitors (many organizations have talented, passionate engineers, and all content companies have a leveraged model). The more strategic strengths are the ones that separate you from others. These are the familiar "differentiated competitive advantages" or "unique selling propositions."

- It is hard to invent differences that are non-trivial and also apply to most of your target audience. That is why they must be identified in the strategy; you won't stumble onto them during day-to-day work.
- **Technology and design trade-offs.** Every architecture makes some capabilities easy and others hard or impossible, and every design makes some use cases delightful and others annoying. Great strategy names the trade-offs, shows how they fit the target market and persona, and exploits them. Competitors who made different trade-offs can't follow without extreme cost and time.
- **Accept the downsides of your trade-offs.** The limitations that result are not "bugs." Trying to fix them takes inordinate effort, won't yield a fantastic product, blunts your strengths, and takes time away from magnifying them.
- **Heroku example.** It mandated trade-offs many Rails developers initially hated: Bundler (when it was bad), PostgreSQL instead of MySQL (when MySQL was about 10x more common), and no writing data to disk. Together they enabled a new way to develop, test, stage, deploy, and scale apps. Today nearly all SaaS apps follow 12-factor principles, and Heroku won the Rails market for a decade.

## Differentiating through hard engineering problems and secret insights

**Solving a very hard engineering problem**
- Upside: success can create a moat (Google search, Tesla cars, OpenAI).
- Downside: it likely fails by taking too long, costing too much, not truly solving the puzzle, or not doing enough of what the customer needs.
- His advice: be surgical about which subset of the software is hard. Pick something that creates a moat and leverages existing strengths or assets.
- Example: Google Wave pioneered fast multi-user simultaneous editing, a precursor to Google Docs. It was so difficult that it failed. Co-founder Lars Rasmussen said that even redoing it with the same team and all the knowledge gained, it would take years and probably still not work. That means competitors would have failed too, so success would have been durable leverage.

**Insights (Thiel's "Secret")**
- An insight is an important truth you understand while the rest of the world does not, especially if the world confidently believes the opposite. Their disbelief prevents competition. Once proved true others follow, but by then the strategy has already succeeded.
- Examples he lists: "People will buy shoes over the internet" (Zappos), "People will take rides from strangers" (Uber, Lyft), "People want to sleep in stranger's houses" (Airbnb), "Rockets can be reusable" (SpaceX), "The highest-performing sedan can be battery-powered" (Tesla), "Large enterprises will put customer data in the cloud" (Salesforce), "Open source copycats will defeat multi-billion-dollar incumbents" (RedHat).
- Differentiation erodes: secrets become known and almost anything in software can be copied. He doubts patents protect software companies. The most valuable differentiation is the kind that takes decades to erode, if ever.

## Durable differentiation: moats and exploiting a competitor's ossified structure

A durable differentiated advantage is a moat. Jason describes it as: "I have something that you don't, and furthermore, you either don't have the ability to acquire it, won't invest enough to achieve it, or in the case that you try, you would have to make an incredible investment of time and energy and possibly brand adjustment to do it, which is unlikely to succeed, and even if it does succeed it will take years, by which time we've already won."

He highlights an often-overlooked form: exploit an ossified structure in a competitor that prevents them from reacting even if they wanted to.
- **High cost structure.** A competitor with high costs must charge high prices, so "40% of the features at 10% of the price" is a position they can't match. This is a simple form of Innovator's Dilemma disruption.
- **Simple product, no tech support.** That competitor can't win complex clients, so "Enterprise offering at Enterprise prices" stays differentiated.
- **Publicly espoused values.** A competitor can't act against its stated values, so a strategy built on contrary values stays differentiated. A company that values sustainable sourcing can't price-compete with those who don't, and sustainability-minded consumers will pay the premium.
- **Platform trade-offs.** A competitor invested in a core platform can't change its trade-offs for years, if ever, so choosing different trade-offs yields different features and liabilities that stay differentiated.
- **Loss-leader attacks.** A competitor whose profit depends on one product can't cut prices when someone builds the same thing free to power another business:
  - Netscape (browser revenue) was killed by Microsoft's IE, a loss-leader for Windows.
  - For-profit smartphone operating systems were killed by Google's Android, a loss-leader for Google's services. Apple is the exception, remaining because of hardware; 87% of global handsets are Android.
  - Twenty proprietary Unix operating systems were killed by RedHat's Linux, a loss-leader for RedHat's Enterprise Services (later sold for $34B).
  - He quotes Satya Nadella on Bing: "There is such margin in search, which for us is incremental. For Google it's not, they have to defend it all."

## Mutually reinforcing structures: durability from a combination of choices

In a crowded space no single thing may be unique or durable, but a combination can be both, if the pieces form a mutually reinforcing, cohesive structure. A competitor who copies only a fraction still won't have a similar product.

- **Southwest Airlines example.** It stayed profitable through September 2001 and the 2008 Great Recession, when every other major US airline filed for bankruptcy at least once. It has no single unique element a competitor couldn't copy, but its combination of decisions, strengths, and weaknesses has been durable for sixty years. Michael Porter diagrammed it in 1996 and the analysis was still accurate twenty-plus years later.
- Some attributes are customer strengths (low fares, frequent reliable departures) and some are weaknesses (no meals, no baggage transfers, no connections to other airlines, no long-haul routes). They all support one structure: no amenities allows lower prices, and short hauls on standardized aircraft cut costs and also produce frequent, reliable departures.
- He quotes Roger Martin: "Strategy is a set of interrelated and powerful choices that positions the organization to win."
- It is not strategic to claim "our peculiar set of features makes us unique" unless they form a mutually reinforcing network that includes the weaknesses. It is not durable leverage unless a written strategy explains the network, so the company keeps reinforcing the whole thing and accepts the weaknesses instead of treating them as bugs. "Otherwise, it's just a pile of features."

## What a winning strategy must say, and what happens without each tier

- Without leveraging strengths (rather than spending far more energy shoring up a weakness that still won't be great), the company won't create something great.
- Without leveraging differentiated strengths, it won't surpass competitors, will struggle to win and keep customers, and will struggle to justify profitable prices.
- Without leveraging durable differentiated strengths, success is short-lived and the company is reduced to out-spending on marketing or cutting prices until it is unprofitable.

A winning strategy states:
- which strengths the company will leverage;
- how it will side-step, not "attack," its weaknesses;
- which strengths can be leveraged for differentiated sales today;
- which long-term moats it is constructing.
