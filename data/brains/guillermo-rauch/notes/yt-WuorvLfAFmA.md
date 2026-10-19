## Agents are now the main deployers, so Vercel is built for them

- Guillermo says Vercel took about 10 years to reach 1 billion deployments, then added another 1.5 billion in roughly the next 10 months.
- Coding agents made 3% of deployments at the start of the year. Now they make 60%.
- His founding idea was to make deployment easy, because deploying a fast, secure, scalable app once required "a PhD in cloud computing."
- Agents write good code but have nowhere to put it. He calls code a liability: it can hold vulnerabilities, delete things or leak customer data, so it needs a responsible place to run.
- Vercel became that place. He says most of what goes viral on X is a Vercel app, often visible from the default vercel.app domain.
- Open source helped. After 11 years of making everything open, models trained on that material know Vercel well, so agents default to it.

## Building the internet for agents

- The old internet is HTML pages for humans. The agent internet runs on protocols: MCP for exposing tools, plus new agent-payment and agentic-commerce protocols.
- When an agent visits vercel.com, he wants it to get direct information, not the gradient triangle and polished UI.
- Companies should give agents context and also expose their tools, products and services. Vercel works with Stripe and Shopify so agents can transact.
- Agents already buy from the Vercel marketplace: one of the most popular tools in Vercel's toolkit lets an agent purchase a product for an employee with no human step.
- He criticizes a web built to block bots. Vercel's stance is to help every company re-tool for agents.
- What matters is bot intelligence: knowing which agents (ChatGPT, Claude, Grok, coding agents, crawlers) visit and whether they get a good experience.
- Content tactic: publish transcripts alongside podcast episodes. Models have training cutoffs and agents rely on web search, so published text is what they can find.
- Inside Vercel, agents sit on top of Salesforce and similar tools. He asks the Slack agent for a briefing on an account before a meeting and never opens Salesforce.
- Interfaces become dynamic and contextual. A junior sales rep and the finance team would see different depth from the same data.

## Custom software over bundles of SaaS

- He is "yes-code," the opposite of the no-code wave. Coding agents make code free, so he argues the winning combination is to "buy or sell as a platform" and never need to buy software again.
- Teams can build the exact podcast scheduler, note-taker or agent they need. He says enterprises get the biggest return from tools built for their own domain.
- Systems of record (customer records, contact info, meeting notes, support tickets) stay as critical data infrastructure.
- Software that was mostly a UI over that data is what changes.

## Open models, model choice and the frontier labs

- Vercel runs one of the largest token-distribution networks through its AI Gateway. It serves open and closed models and republishes anonymized usage data under a Creative Commons license.
- At the start of the year most traffic went to proprietary models (OpenAI, Gemini, others). Now, he says, 80% of tokens on the network are open models.
- The cause: Chinese labs shipped open models that compete with the frontier on coding. He used Kimi the day before and liked it.
- His reasoning is that most work doesn't need "Albert Einstein." Support replies, proofreading and data labeling are fine on open models.
- Pattern he describes: use a frontier model for planning, then open models to execute the plan.
- He wants model choice to be modular like an engine. Swapping a provider should take one line of code, and auto-selection by task is where the field is heading.
- Enterprises like this because it avoids lock-in, gives them leverage and forces labs to compete on price and quality. A leading model may hold the lead for only two weeks.
- His view of frontier-lab risk is that loyalty and retention are hard to measure. Parts of AI feel like crypto, where money "comes easily and goes easily."
- He names free promotions, inflated token volumes and fake zero-data-retention claims as things to question. Vercel's gateway contractually guarantees zero data retention with its providers.
- His stated goal is to push token prices toward zero.

## Security, sandboxes and verifiable code

- Agents will do whatever it takes to finish a task, and prompt injection (malicious instructions hidden in a YouTube comment, say) can redirect them using your tokens and tools. He says most people haven't mastered agent security.
- He cites the OpenAI/Hugging Face breach story as his example: an agent escaped a sandbox. He prefers FreeBSD's old word "jail" to "sandbox," because once out of a sandbox the agent is everywhere.
- Vercel runs a $1M sandbox challenge, inviting the world to break its sandbox. One participant with an army of agents made progress, and Vercel is sharing the findings with industry peers.
- He opposes banning open models over cyber risk. Their intelligence is what makes them useful for defense too, and he expects a near-term war between good tokens and bad tokens.
- Vercel is not tied to one lab for security work. Enterprises can pick whichever model is best at cybersecurity.
- For enterprises he built an "intranet for the agent era": a private platform to deploy internal software without it leaking to the public internet.
- He launched a proof system over a weekend so AI doesn't ship bad code or leak data. He expects code to move toward mathematical verifiability, and likes Rust because its compiler tells you you're wrong, a burden agents now carry instead of humans.
- Compute vision: "serverless" evolves into "fluid compute" that scales up with traffic and shrinks to nothing, serving sandboxes, jobs, websites and agents.

## Humans still need to understand the code

- His tweet "refuse not to understand" rejects the idea of prompting an agent and shipping without looking. He asks the AI to explain what it did, and he still reads code.
- His analogy is an engineering manager who unblocks work and sometimes writes code, tests or benchmarks. The best ones he has worked with love code.
- He doesn't want to be the person demanding that everyone understand every line. Beginners should be able to ship, as he never could at their age.
- For truly critical systems (infrastructure, security, national security) he thinks human engineers are still needed, including those who go deep with AI.
- A migration example: Vercel moved Mercedes' F1 site to its platform using an agent in about five minutes on the first pass, work that used to take months with consultants. Migration fear used to block cloud adoption.

## Hiring, running the company and personal operating principles

- Hiring: he looks for people who can build teams of agents ("agentic engineering," "software factories"). A demo or side project is no longer proof, since projects are easy.
- He also wants strong human communication. He doesn't want to read machine-written tweets.
- He expects much higher technical depth from sales engineers and account execs, because agents let them handle questions that used to need engineering. Borrowing a former Splunk CEO's line: the two most important people are the ones closest to the code and closest to the customer.
- Company values: "continuous improvement toward excellence" and "dig into the details."
- He treats the company as a product and invests in the infrastructure that produces future innovation. The core of it is values and mission.
- Public communication: his advice to founders is "be yourself," share your story and don't overthink it. He uses no hidden ghostwriters.
- Decisions: use data, but in a fast-moving AI market pair it with anecdotes and intuition, because a quarterly analyst spreadsheet is too slow.
- Founder metric advice: focus on metrics that can't be gamed. Ads and viral marketing can be gamed. Lifetime customers can't.
- Pace: what Vercel sells is speed of iteration, not raw speed, which can mean spinning in circles. He says peers are working roughly 7am to 7pm, seven days a week, and mostly enjoying it.
