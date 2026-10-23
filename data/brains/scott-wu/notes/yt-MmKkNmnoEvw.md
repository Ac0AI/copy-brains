## Early path: math competitions, Adaparable, and the Cognition founding group

- Scott grew up in Baton Rouge. His parents were chemical engineers who immigrated from China.
- He started math competitions in second grade, following his older brother Neil. He entered the seventh-grade division, placed nowhere, and trained hard. He won his division the next year.
- He left high school a year early and worked as a software engineer at Adapt in the Bay Area in 2014. He then did two years at Harvard before dropping out.
- Several founders came out of the same math and programming competition circuit and knew each other as teenagers, including Alexander Wang, and the founders of Perplexity, Pika and Decagon.
- Scott credits Alex Wang as the first of the group to be entrepreneurial. He says entrepreneurship was "infectious" among them.
- Of Cognition's first ~35 people, he says 21 had founded a company before.

## Why young founders are rarer: the "Moneyballification" of everything

- Scott's view is that being a founder has gotten harder, mainly because the space is more mature. Sharp first-principles thinking used to beat experience. Now many people have both.
- Playbooks now exist for how to structure equity, raise money and hire an initial team. Earlier eras had no written book, so success came down to how sharp you were and how well you made your own decisions.
- His pattern across fields: when a space is immature, intuition and wily thinkers win. As it matures, "the conclusion of it kind of is math."
- Examples he gives are poker (1980s-90s pros played on intuition, now it is math nerds), chess (the romantic style gave way to engine-optimal play) and Super Smash Bros. Melee.
- He says the same is happening to startups. It is a shift in which skills get selected for, not a drop in competitiveness.

## Cognition's products and how Devin is used

- Cognition builds the AI software engineer. Devin is the agent. It acquired Windsurf, the IDE.
- Devin works asynchronously. You tag it in Slack, Linear, Jira or GitHub and delegate a ticket-level or project-level task, as you would with a coworker.
- Scott calls Devin a junior engineer. It is far better than people at encyclopedic knowledge and still makes some terrible decisions.
- Typical uses are bugs, simple feature requests and fixes, and repetitive tasks: migrations, modernizations, refactors, version upgrades, testing, documentation and dependency management.
- Devin is deployed at thousands of companies, from Goldman Sachs and Citibank down to startups of two or three people.
- Cognition tracks merged pull requests. In a successful org, Devin merges roughly 30 to 40% of all PRs.
- On enterprise migrations, customers measure internally an 8 to 15x gain. Devin handles something like 50,000 files, makes a PR for each, and humans review.
- On enterprise trust: he recommends not giving Devin prod database access. Devin slots into existing human safeguards such as PRs, review and CI, because humans make mistakes too.
- Cognition's internal benchmark is "junior dev," made of real junior-engineer tasks such as fixing a Grafana dashboard where the server runs the wrong package version. It is not published, so it can't be gamed. He says Claude 4.1 and GPT-5 are the best models on it.

## Sync vs async, and essential vs accidental complexity

- Scott frames software work as essential complexity (the decisions about what the software does) and accidental complexity (routine implementation, standard CRUD, scaling support). He says engineers spend 80 to 90% of their time on the latter.
- His model is a merged experience. The engineer stays in the loop synchronously on strategy and key decisions, in the IDE. Routine execution is handed off asynchronously to the agent.
- Projects alternate between the two modes. The product goal is moving smoothly between IDE and agent.
- On productivity measurement, he says IDE gains are hard to quantify (tab completions). Agents are easier to measure because they complete whole tickets or migrations with known engineering-hour costs.

## Surviving the model labs: specialization and the benchmark problem

- He rejects the "nihilist computer use" take, in which models keep improving until the AI just uses the computer and does all the work.
- His argument is that real software engineering is messy and context-specific: Datadog debugging, industry details, codebase knowledge. Models improve at these only through the right data and environments.
- He describes RL as the "platonic ideal" of solving any benchmark. Once that works, the hard question becomes what the benchmark is. He says defining success in each domain is the practical messiness that remains.
- The same logic applies to law and medicine. General intelligence will keep improving, but there is still work in making a product excellent for specific use cases and delivering it to customers.
- He says app-layer companies focus on one use case. Cognition cares only about software engineering, with its product interface, delivery, usage model and specific capabilities, not "code" in the abstract.

## AI market structure, pricing and agent infrastructure

- Scott says all layers of the stack will do well: chips, labs and applications. Value accrues wherever there is meaningful differentiation. The layers solve very different problems, which limits vertical integration.
- He says foundation model companies are built around strong researchers and GPUs. Application companies are built around making one use case work.
- AI is unlike the PC, internet or mobile because it has no hardware rollout and no network-effect critical mass. As soon as it works, it works single-player for everyone, which is why companies claim fastest 1M to 100M ARR so often.
- He says product progress lags capability. Even with models frozen today, "a whole decade of product progress" remains.
- Pricing: seat-based to usage-based is a "big, big, big" shift. Seats don't make sense when the AIs are arguably the seats, and usage maps naturally to COGS, mostly GPU spend.
- Agents: Cognition orders DoorDash and Amazon packages through Devin. In one case Devin got a human at an airline to secure a flight refund.
- He expects agent access to move from blanket bot blocking toward delegated access, where agent actions are attributable to the user and carry their reputation.
- On M&A: he predicts more of it, and says AI is "polarized toward become a hyperscaler or bust." Companies either think they can get there or choose to work with another company.

## Windsurf acquisition, team and culture

- Scott learned of the Google/Windsurf deal on a Friday, reached out cold that evening, and shook hands Saturday. Everyone worked an all-nighter Sunday, the deal signed Monday around 9am, and they announced it Monday.
- His reasoning for speed: customers and staff were wavering. "If there is something to do here at all, then it has to be ready to go by Monday morning."
- He needed no diligence on product or customers because he already knew the space. The fit was complementary: the research and product engineering team had left for Google, while enterprise engineering, deployed engineering, go-to-market, finance and operations stayed intact.
- Cognition had built a strong core research and product team but was behind on other functions. Windsurf had JP Morgan where Cognition had Goldman Sachs.
- The team was about 35 people before, with about 19 in core engineering. After the acquisition it was about 30 to 35 in core engineering.
- Cognition offered an opt-in buyout so people who didn't want its intense culture could leave. Only a small fraction took it. He says that while others may see Cognition as mid or late stage, "we are still very much early stage."

## Hiring and the future of engineering

- Cognition's interview has candidates build their own full agent in about 6 to 8 hours.
- He expects syntax and memorized facts to matter less. High-level decisions, technical concepts, product sense and being a self-owner matter more.
- He predicts that in about 2 to 4 years code will stop being the main interface, as assembly isn't today. Engineers will decide on architecture and pages by looking at the product.
- He expects more software engineers, not fewer, citing Jevons paradox. "We haven't finished writing all the software yet." He still tells students to study computer science, because the core skills are concepts and problem solving.
- On AGI, he says "we have AGI" and doesn't expect a sudden singularity. He expects steady improvement and no sudden shift in the next few years.
- On UIs: AI interfaces are still retro, like early mobile apps that looked like shrunken websites. He expects more generative flows beyond the chat box.
- For learning, he leans on close founder friends such as Eric and Kareem at Ramp, and on his former Lunch Club co-founder Vlad. Together they give honest advice. He doesn't believe in professional coaches. For tech news he uses Twitter.
