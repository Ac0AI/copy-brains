## Two companies, then the Vercel bet

- Guillermo describes Vercel as his second serious company. He says he's been an entrepreneur since selling CDs at school around age 10 ("The teachers didn't love it").
- He built a first startup in Silicon Valley, sold it to the company behind WordPress, then spent about 2 years there. He started Vercel in late 2015/2016.
- Reason he left: "I love building stuff. I don't love working for a boss."
- He bet on two waves without knowing the product yet:
  - **The cloud.** WordPress ran its own data centers, and he doubted "the next billion companies" would. The Instagram founders in his first co-working space ran on AWS and became one of S3's biggest customers as photo uploads grew.
  - **Rich client-side front ends.** The PHP monolith put everything in one runtime and one code base, and React was arriving.
- His intuition was that there'd be "something like Ruby on Rails but for this new generation," and that the cloud was powerful but "insanely hard."
- His advice: "noticing these asymmetries about the world is really important for entrepreneurs."

## Gathering feedback and discovering pain

- Guillermo tests ideas out loud. After he left WordPress he floated a framework idea over dinner in Finland, which he thinks was the first time he said aloud what became Next.js.
- He says he's always been outspoken about what he's building, even though founders fear theft, because people's reactions are useful.
- "Everything is feedback." That includes noticing that someone isn't following your train of thought, or a lack of reaction.
- He does deliberate pain discovery: he tries to pull every negative out of a customer.
  - Customers often don't volunteer what's bad, or are oblivious to what's painful.
  - Opportunities appear "commensurate with your ability to dig."
- Before a hard customer meeting, he tells the responsible engineering manager in advance that the customer will say a lot is broken, so the team expects it.

## Running with high standards: annoyance, impatience, and ideas over opinions

- He agrees that being annoyed about everything is a useful trait for a CEO, because you stop taking things for granted.
- He borrows Stripe's framing, "short-term pessimism, long-term optimism": tearing apart the company's own sites and apps is his process for extracting greatness over time.
- He pairs impatience with shipping discipline: if something takes 3 months, ask whether an intermediate step can ship in 2 weeks, without shipping junk.
- He balances criticism with celebrating wins and "the joy of our accomplishments," so the company doesn't sit in permanent critique or in "everything is perfect."
- He uses Jony Ive's distinction between opinions and ideas.
  - Opinion: "this app sucks," plus a screenshot.
  - Idea: "this app sucks because X, and here's how to improve it." He calls the concrete idea the superior form of feedback.
- Ideas can come from anyone in the company, and the ones he celebrates most came from customers. He corrects people who credit Vercel with an invention: "No, that was invented by HashiCorp, who was a customer of ours in the early days, or that was invented by TripAdvisor."

## Killing bad ideas, using data, and saying no

- To test a questionable idea early, he asks the team to build it: ship it as an experiment or a V0 prototype. Seeing it in action, people quickly realize it's bad, as long as the cost isn't too high.
- He uses the voice of the customer and data to contrast the hypothesis with what happened. He has Slack workflows where an agent sends him a weekly download of metrics plus an analysis.
- Data often shows that an idea isn't bad, but that a much greater idea deserves the attention.
- He says Vercel's reputation for shipping fast hides how often he blocks things, says no, or asks for refinement every day.
- On AI: "Just because you can prompt... doesn't mean you should." Even if code is nearly free, you still have to afford to maintain it and market it. He wants a "fair amount of no" in his own head before he verbalizes an idea or greenlights a feature.
- He cites Satya Nadella's "brand permission": a company can have the team and the technology but not the permission, as Google did when it tried to become a social network.

## Vercel's chapters: focus, repeatability, then the organization as the product

- **Chapter 1: finding focus (roughly $0 to $1M).** The problem was too many ideas, not too few. Among the open-source projects (Next.js, the Hyper terminal, a microservice framework), Next.js was clearly being adopted by enterprises and individuals. On infrastructure, his instinct was to "build infrastructure for everything," and he had to narrow to one kind of deployment, done really well, with focus on the CDN and global distribution. "It was a process of trimming the forest and finding the thing that would stick."
- **Chapter 2: repeatability ($1M to $5M, then 5x again from $5M to $25M).**
  - Next.js distribution let him pick three use cases to dial in. One was e-commerce and storefronts, "anything that has a commercial transaction."
  - E-commerce gave him an ROI calculation for business buyers: Next.js cost, Vercel cost, conversion-rate improvement, development cost, total cost of ownership, profit, and higher top-line retail sales. CIOs and CTOs had asked him to spell out why making developers' lives better pays off.
  - His marketing was built on what he heard from customers: "This is the easiest way to do marketing in the world."
  - Startups stayed a strong segment, and Vercel became synonymous with getting an idea to market fast for crypto, then AI and agents.
- **Chapter 3: scaling beyond comfort.** Vercel was a product-led growth machine where people recommend and invite friends, with everything growing bottoms-up. He then layered on top-down enterprise sales, which pushes into less comfortable territory and adds product requirements founders wouldn't otherwise hear, so the company isn't trapped in a local maximum.
- **Next:** turning Vercel into an "innovation machine" by making the organization itself the product, like Next.js.
  - Escape hatches, a shared set of values, known operational best practices and rituals, and clarity on what's rewarded and punished.
  - He doesn't want every decision to run through the CEO.
  - This is what let Vercel become multi-product (front ends, back ends, agents, AI Gateway, V0) while keeping a high quality bar.

## Building for your own pain and betting on simplicity in a "crowded" market

- The projects that worked best were solving the team's own pain, proven before they went to market. He built Next.js for himself: after leaving WordPress he planned to use React for everything, but even one page "almost took a PhD." Only later did he notice that other people had the same problem.
- He says he tries not to think about competitors: "I would have never shipped anything if I was motivated by competitors." There were probably 20 React frameworks before one got minimalism, zero configuration, server-side rendering and the rest right.
- Skeptical VCs argued each piece was already solved: CDNs, CircleCI for CI, Heroku for hosting. His answer was ease: "I kept dreaming of that simplicity that I could give to the world."
- Analogy: as a kid in Argentina he built a PC from parts; Apple later offered a MacBook. "So much of the world is won by the people that bring simplicity and ease of use."
- On markets: "you really have to play in enormous markets." Next.js became a wedge into what is now the entirety of the cloud for Vercel.
- On consensus: "what you do cannot fully be consensus." If everyone is already talking about the idea, it may already exist by the time you build it.
- On hype categories like AI, he says to talk about the customer. He asks founders who lose him to restart "from the point of view of a customer." He notes that many pitches get excited about the category (AI for books, AI for drinks) without depth.

## Multi-product growth: strong core, adjacencies, and customer-pulled products

- He rejects the idea that a second product is hard for a big company: distribution and hiring advantages make it easier than zero-to-one, and believing it's hard is what makes it hard. Zero to one is "the hardest thing in the world."
- Risks he names for a second product:
  - Promoting it can damage the first product, for example by spamming it with ads for the new one (he cites Meta as a company people accuse of this).
  - It can end up a mediocre success, which is unacceptable once you have distribution: a product that took years to reach its first million ARR "should get it in a day."
- His answer is to build "a very strong core" and then "really smart adjacencies" to it. His metaphor is iPhone and AirPods: AirPods sell tens of billions a year but would never have succeeded "if the iPhone wasn't this good." So "your job is to create the iPhone."
- He warns early-stage founders not to jump to the second thing too quickly.
- The best expansion comes from customers: with a core in the critical path, customers pull features out of you. He gives the example of HashiCorp, which had outgrown static sites but wanted every click to stay instantaneous, and came to him with that conundrum. If he could solve it they would drop their existing provider and use more of Vercel, so he calls it true design partnership, and the customer supplied both the product and the marketing story.
- He dislikes logo banners without substance ("none of these logos use this company"). His test for founders is: "tell me about one happy customer. Just one."

## Staying sane: ignore the noise, find product-market fit, and manage your own psychology

- He tries to turn off the narrative noise ("company X will destroy company Y"), noting that Steve Jobs did not read the Wall Street Journal to outsource his opinions. He calls X a double-edged sword: a source of fog and anxiety, and also the best marketing channel in human history.
- He says he remains "insanely optimistic": "if I create something great, the rest of the world sorts itself out." He repeats his previous company co-founder's line, "product market fit solves all kinds of problems," while noting he isn't advocating selling dollars for a penny.
- His allocation of attention: "product product product, customer customer customer, code code code. Not media media media."
- On Silicon Valley's competitive pressure, he sees it as like athletics: you put in hours and optimize your company, agents and life. Stress is ambient, and he says the founder has to be their own coach.
- "Being a founder can be so lonely." He describes managing your own psychology (Ben Horowitz's phrase) as something to master: deciding when to unplug, go for a run, or invest in your social life. He found this hard coming from another country alone.
- On raising money, he says it is celebrated but is like going from 10 to 14 on a treadmill: stress goes up afterward.
