## Why Scott went after Windsurf in a weekend: speed over diligence

- Cognition learned about the Google/Windsurf split on Friday, "the same time everyone else did," and reached out cold that evening.
- Scott's framing: ask "what is the correct way that things should happen here." With customers, staff and recruiters all scrambling, a month-long (or even week-long) diligence process was not an option.
- His analogy: "the bank goes into receivership Friday night, you got to have an answer by Sunday and by Monday morning."
- The timeline he describes:
  - Friday night: first call.
  - Saturday: verbal agreement.
  - Sunday: terms and legal hashed out.
  - Monday morning: signed and announced.
- Cognition accepted it would not go as deep on diligence as it would like. It judged it could still understand the business well enough at a high level.
- Priority was giving customers and employees a clear answer fast: Cognition would support the product and keep things running smoothly.
- He credits the Windsurf leadership team (Jeff, Graham, Kevin) for working around the clock for their team.
- He declined to give the cash/stock split ("a mixture of both"). He also declined to say what share of Cognition's revenue goes to Anthropic.

## Why the "husk" was actually valuable: complementary assets

- Online, people argued all the best researchers left and nothing was left behind. Scott disagreed.
- What remained, in his words: an amazing product many people use, the entire customer book, all the code, a lot of the data and proprietary IP, and "a really incredible team."
- It was somewhat incomplete as a piece, but fit what Cognition needed.
- Team fit:
  - Cognition is focused on the core engineering and product team.
  - Windsurf built a strong go-to-market, marketing, finance and operations team.
- Product fit: the two were "very naturally complementary."
- His general point: "often there are actually a lot of really valuable pieces that get left behind" in these deals.
- On the new deal-structure norm (acqui-hire style splits), he said there's "an unspoken covenant that as a founder you go down with the ship," and that it has changed over the last year. He called that "a bit disappointing."

## Combining IDE and agent into one product

- Biggest question since the deal: what is the combined IDE-plus-agent experience.
- His view: years from now these systems will look different and may not share today's terms. In the near term, both IDEs and agents matter in a developer's workflow.
- Workflow he imagines:
  - Plan a task in the IDE, using retrieval, search and the wiki to see what code it touches.
  - Hand it to an agent to do the bulk of the work.
  - Review and touch up the code locally in the IDE.
- The goal is moving "from synchronous to asynchronous to synchronous," being present only where needed and parallelizing the rest.
- Near term, Cognition plans to keep the philosophy of both Devon and Windsurf and run both products, then work on the intersection for users of both.
- Longer term he sees this as the next human-computer interface: expressing intent instead of writing code. "Tony Stark does not pull up his laptop. He goes and talks to Jarvis." He estimates 10 to 20 product levels to get there, each taking roughly 2 to 3 months, so "a few years."
- He thinks none of the players are close to the future of software engineering yet and that there will be more than one winner in code.

## Devon's positioning, pricing and growth

- Pricing: usage-based, essentially by the hour. The aim is to be about 10x cheaper than the value of an engineer's time.
- Usage growth: between January and October, Devon usage grew roughly 5 to 10x in both self-serve and enterprise, excluding Windsurf. He claims this is comparable to the growth of consumer-leaning rivals over the last 6 to 8 months.
- Who uses it: real engineering teams, from startups to some of the biggest companies. Sessions start in Slack or Linear, Devon opens pull requests in GitHub, and it learns to onboard to a repo.
- Why Devon gets less buzz: IDEs took off about a year before agents (IDEs sometime last year, agents in the last 6 months), so people know them better. He expects agents to be as familiar in 6 to 12 months.
- He contrasts this with Replit and Lovable, which he sees as more consumer-leaning products solving a different problem, such as getting non-coders to a working product.
- Marketing feedback he took on board: Cognition should tell its story better. He noted the Windsurf marketing team is now an asset.
- Suggestion he received and endorsed: Cognition had been quiet about its traction (it was "almost better if people don't hear that agents are working"), but now that everyone is building agents it makes sense to be more public.

## Where value accrues in AI and where code is headed

- On value capture: it occurs "wherever you are able to establish real differentiation in your space."
- On the foundation labs: he expects them to do extremely well. Cognition's piece is optimizing for specific software-engineering capabilities and shipping a great product experience around them. He says "you really need both."
- On competing with labs: Cognition focuses on how humans and AI work together to produce code, and on teaching a model to use real tools (pull Datadog logs, debug a front end live, learn a codebase representation).
- Market size: there are about 30 million software engineers. Whether the value captured is 5%, 10%, 20% or 30%, the bigger point is getting the technology and products to where everyone moves much faster.
- Productivity today: he estimates 1.5x to 2x faster for engineers who use the best AI tools well, in aggregate. In three years he sees no reason it shouldn't be 10x.
- Why more code: he expects more than 10x more code, citing Jevons paradox. Most software people use (banks, healthcare, insurance, customer tools) is far worse than top products like YouTube, TikTok and Instagram.
- Percent of code written by AI is a flawed metric: lines vary in importance (protobufs vs. core logic) and "written with the help of AI" varies in degree. He prefers measuring how much faster an engineer is per hour.
- His forward view of the engineer's role: more "technical architect, technical product manager," deciding what problem to solve and how to architect the solution.

## What is next for coding agents: deep context and RL

- Biggest unsolved problem: deep context, the difference between code and software engineering. That means:
  - Working in a large, complex codebase.
  - Building an intuition and representation of how pieces interact.
  - Learning to use tools to diagnose and debug.
  - Reusing knowledge from similar past tasks.
  - Testing a front end and knowing what it should look like.
- He says this is a practical problem that can't be solved in a sandbox, so it needs real software-engineering practice.
- His case for continued progress: RL is "the biggest breakthrough of the last year and a half." With a clean set of target behaviors, environments and a definition of success or failure, "you roughly can solve any benchmark."
- The open question in every vertical is defining the benchmark. His example: for an accountant, a failed audit is a fail signal, but you'd want shorter feedback loops.
- Change in belief: two years ago the story was more data. Now it's a small, highly curated dataset for the exact use case, with environments and feedback loops set up correctly. "A lot of compute, not a lot of data."
- Example: Cognition's Kevin 32B model, trained with RL on agent trajectories for writing CUDA kernels (KernelBench), beat state-of-the-art models on that task.
- Even with zero further progress in AI code, he says "the world would still be entirely different," and engineers who don't use AI are simply slower.

## Talent and market outlook

- On AI talent pay: he thinks it is "quite reasonable." He argues AI is the biggest technology shift in our lives and that fewer than 10,000, and probably closer to 100 to 1,000, people truly set its trajectory.
- He says competition for talent is as fierce at the application layer as at the foundation labs.
- Foundation lab consolidation: he said something like two to six players, "three to five seems pretty reasonable."
- Valuation view (framed loosely): he expects both the foundation labs (around $500B combined for the private ones) and the application-layer leaders (he guessed $50B to $100B for companies like Perplexity, Sierra, Decagon, Harvey, Cognition and Cursor) to go up a lot in aggregate.
- He cited Sam Altman's old "bubble theory" post as the model for betting against bubble talk.
- Advice on studying CS: yes. The degree is "more a degree in how to think," covering first-principles problem solving and how computers and databases work, which stay valuable.
- Personal trait he's proudest of: emotional calm under stress. He describes himself as competitive and easily frustrated, but able to stay composed.
