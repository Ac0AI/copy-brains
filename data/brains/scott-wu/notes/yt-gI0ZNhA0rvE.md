## How Scott frames Devin and the shift from text completion to autonomous agents

- Devin is "a fully autonomous software engineer" that works on tasks end to end and asynchronously. You tag it in Slack or Linear, and it opens pull requests in GitHub.
- Cognition's founding bets, made in late 2023:
  - High-compute reinforcement learning was the next paradigm shift. Models do work on a task, get evaluated on whether it was correct, and learn from that. Code suits this well because it has "an automated feedback loop": you can run it.
  - The product experience would move from text completion (GitHub Copilot-style, also marketing, support, education) to agents. An agent makes decisions, interacts with the real world, takes feedback, and iterates over multiple steps.
- Timeline:
  - Hackathon mode in November 2023, starting from an Airbnb booked around Thanksgiving. The first work was agentic loops for contest programming problems.
  - Incorporated around the start of 2024, prototypes to early users in February, launch in March 2024, first customers in April.
  - Self-serve in December 2024, and Devin 2.0 a few weeks before this episode.
- Scott says the team pivoted "like eight times" within coding agents. The core question behind every product decision is: "what is the future of software engineering?"
- Many features did not exist at launch: Slack, the GitHub integration, Linear, an interactive planning phase, and touching up Devin's code. Even talking to Devin mid-task had to be invented. Originally you handed off a task and got finished code back.
- He puts the work at "a 50-50" split between model capability improvements and product interface and tools, because users already know chatbots but need to learn how to use agents.
- Seniority analogy: a high school CS student at launch, then a college intern, now a junior engineer. He prefers the phrase "jagged intelligence". Devin is far better than a human at some things (such as retrieval and processing lots of code) and worse at others.

## How Cognition uses Devin to build Devin

- The engineering team is about 15 people, and the whole company is 26-27.
- Devin merges "several hundred pull requests" into production in the Devin codebases every month.
- Share of PRs written by Devin: "in the neighborhood of a quarter" at recording time. He said it had grown exponentially internally and that "we expect it to be more than half" by the end of 2026.
- Most engineers work with up to five Devins at once. The flow is to decide the five things to get done today, then give one to each Devin.
- The human's role is the 10-20% that needs judgment:
  - Defining exactly what is being solved.
  - Steering architecture and class design.
  - Testing the front end and giving one or two lines of feedback.
- Teammates can chime in on a Devin session in Slack with context (for example "the reason we did it initially was X and Y"), and Devin adjusts. Others review Devin's GitHub PRs and Devin responds to the comments.
- Devin can start other Devins through the API, so it splits big tasks into parallel sessions. This needs credentials and is not on by default.
- On agents versus humans: a human has one context tied to one thread. An agent can run several lines of exploration at once while sharing all the context.

## What to hand Devin: tasks, not problems

- "You want to be giving Devin tasks, not problems." Devin is best on well-defined work that is easy to verify and test.
- Good fits:
  - Quick front-end features, such as the live demo where it added a link to Lenny's newsletter in the Devin web app sidebar.
  - Bug fixes.
  - Adding tests and documentation.
  - Scoping tickets and answering codebase questions.
- Bigger asks work too, but expect to steer Devin more.
- Devin asks clarifying questions mid-run (for example whether a link should open in a new tab), and you can answer at any point. If you don't, it decides itself.
- It tests its own work. On Devin's own codebase it will log into Devin and start a session to check its changes.
- Advice for new users, his "one-liner": "treat Devin like your new junior engineer." Specifically:
  - Pick the tickets for the day or week and start with the easier ones.
  - Get the repo set up first and give it one-pointer tasks so it learns the codebase.
  - Make sure it has a virtual machine that can run tests, the linter and CI.
  - Scale up over time.
- Early on, many users saw a blank screen and asked for a huge re-architecture. That is the failure pattern the onboarding now steers away from.
- Typical team adoption pattern:
  - A few enthusiasts do the setup (repos, lint, CI) and give Devin initial tasks to "build a foothold".
  - Others see the stream of PRs and join, and Devin already knows the repos by then.
  - The early adopters pave the way for the rest of the team.

## Product surface: Wiki, Search, Linear automation, and the codebase representation

- Devin indexes a codebase into a high-level architecture it can zoom into. Scott compares this to how engineers work: they never load every line, they hold an abstraction and zoom in. This lets it scale to very large codebases.
- Devin Wiki is generated documentation with architecture diagrams and component detail (shown on a DeepSeek repo fork). Cognition built it for the agent, and then found "humans really are interested to understand this codebase representation as well."
- Devin Search is a Q&A mode over a repo.
  - Scott says users want an explicit "just ask, don't start the task" control, to see relevant snippets or the wiki without kicking off work.
  - Improving capability for Q&A specifically also justified a separate feature.
  - Over time he sees the product as a suite of tools around a core agent, not one monolith, because real engineering is messy.
- Linear automation (rolled out the week before recording):
  - Add the Devin label to a ticket and Devin posts its scoping thoughts, relevant files and snippets, and a confidence level.
  - If you agree, you start a session that does the work.
  - Product managers use it to understand the codebase. Scott cites Claire Vo, who uses Devin to scope tasks, ask data questions, and check things like whether a feature is merged or behind a flag.
- Onboarding: teams use Devin to onboard new engineers, who can ask codebase questions without feeling awkward about asking a mentor.

## Positioning, stickiness instead of moats, and focus

- Scott frames the competitors (labs, IDE companies, other agents) as strong teams. He argues the whole space will move "an order of magnitude" faster and there is a lot to do.
- Cognition's stance is that it has been "laser focused on agentic coding" since the start. That focus shows up in:
  - The usage-based revenue model with ACUs.
  - The interfaces (Slack, issue trackers).
  - The capabilities.
- He says there are "20 generations" of agent coding products ahead. A far-future one may not show you code at all: you describe changes to the running product ("make this button rounder", "start a table and index it on x, y, z") and the agent builds them.
- On defensibility, he prefers "stickiness" to "moats", and says nothing prevents others from entering at any layer. Sources of stickiness for coding agents:
  - Accumulated learning. Devin builds a representation of your codebase, stack and process over time, like an engineer who has been at the company for five years.
  - A multiplayer effect. Knowledge from every teammate's sessions flows into new sessions, and Devin is shared across Slack, GitHub PRs and Linear.
  - A clear tie to value. Software quality always matters, and developers are willing to learn new tools if the result is better.
- On base intelligence, his "hot take" is that it is "basically already there". Cognition does not pre-train models. It works with the labs' research teams. No single base-model release was a step change for Devin, although each release improves it.
- Cognition's effort goes into "teaching it all of the idiosyncrasies of real world engineering": how to use Datadog, diagnose a given error, and make a GitHub PR. In his words, this is teaching "the model to mirror the complexity of the real world".

## Trade-offs Cognition debated: opinionated versus general, and the startup niche advice

- Scott says the common advice is to "focus on a really niche cohort" and do things that don't scale. He calls it great advice across the board, but notes it is complicated by generative AI, where a single product can serve many uses.
- Users have ordered DoorDash with Devin and built websites from scratch. Most product features are built for PRs and engineering teams, but Cognition is fine with people using Devin for other things, as long as they know the limitations.
- Cognition still goes back and forth on how much to support those other uses.
- The other debate was whether Devin should be one comprehensive experience or a suite of tools. He says it has trended toward a suite, with the core agent as "the core piece".
- The name "Devin" came early from the founders' "Dev Walden" and "Dev Steven" prototypes, built when everyone worked independently and then consolidated.
- Branding has both hexagons and an otter with a laptop, because the team never settled the debate.

## The startup basics, executed extremely: speed, hiring, closeness to customers

- Scott says 18 of the roughly 26-27 people on the team have started companies before. His counterintuitive lesson is that the "three to five things" of startup advice are repeated for a reason, and that building well "sometimes just comes down to doing those three to five things just even more than you could possibly expect."
- His list:
  - Move fast.
  - Hire great people.
  - Build something people want.
  - Stay as close as possible to customers.
  - Always think about where things are going, not where they are today. In AI that means next week as well as 10 years out.
- On speed, he gives the timeline: hackathons in November and December 2023, officially a company in January, prototypes to users in February, launch in March, first customers in April.
- On hiring, he says to "fight to all ends" for the people you want. His examples:
  - An MIT junior who aced the interview, and who wanted to join but whose parents wanted him to graduate. The team flew to North Carolina, went from the airport to dinner at his parents' house, and agreed a setup where he works essentially full-time and comes in only for required classes. Scott says he has been on the team for over a year and is "an incredible, incredible engineer".
  - Another strong candidate with multiple offers who wanted to start his own company someday. They offered investor intros and customer work, and helped him hand-write rejection notes to the other companies so he wouldn't burn bridges.

## Why Scott expects more engineers, and how the role changes

- Scott says programming is "the discipline of telling your computer what to do", so it only grows more important as AI gets more powerful.
- He argues for Jevons paradox: as the price of software work drops, total spend goes up. If engineers become 10x faster, society will build more than 10x as much code (including more personalized experiences) and need more engineers, not fewer.
- He says you should still learn to code. CS teaches how to break problems down logically and how abstractions work (databases, garbage collection, networking, TCP/IP, what happens when Python is interpreted). Those let you build good systems and peel back layers when needed.
- Engineers go "from bricklayer to architect". Skills that grow in value:
  - Understanding complex systems in the context of the whole company.
  - Defining the problem and the right solution.
  - Making key decisions and trade-offs.
- He estimates defining the problem is roughly 10% of an engineer's time, with about 90% going to implementation chores such as debugging Kubernetes errors, bug reports, migrations and upgrades.
- Asked whether this turns engineers into managers, he prefers "bricklayer to architect" and calls it closer to having an interface to hand off tasks than to people management, with none of the emotional load.
- He frames AI as a faster adoption curve than the PC, internet or mobile, which each depended on hardware distribution. In AI code, "if you're not using AI at all you're falling behind", and there is no hardware limit slowing diffusion.
- He ties the practical gains (his "200%, 500%, a thousand%" figures are rough) to the agentic workflow: real engineering work like reproducing a bug, checking Datadog and rerunning takes real time, and agents run it in parallel.

## Scott's operating mindset

- On founder psychology, he says startups have ups and downs even at the most successful companies. His view is to give maximum effort ("put it all out on the field") while not tying your personal worth to wins or losses. He says this makes you more successful because you can give your best and move on.
- He reads Silicon Valley history (The Power Law by Sebastian Mallaby) because "somebody invented the idea of a seed round... venture capital... product-market fit."
- His summary of the future of work is optimistic: "the ability for everyone to multiply themselves", with "a lot more to do out there in the world."
