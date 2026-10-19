## Why Vercel went agent-first: the market shift

- Guillermo started Vercel on a developer-experience obsession. Deploying his own startup's site on AWS, Google Cloud and Azure "took me weeks", and he decided it "can't be this hard" to deploy a site built on React and Kubernetes.
- He targeted JavaScript developers first, a pool he sized at roughly 20 million. Anyone who could build a front end got the superpower to deploy something fast everywhere and able to scale to the whole planet.
- AI coding agents then expanded who can create software. He frames the history of technology as the story of expanding access, and says AI is the biggest expansion of software creation's addressable market ever.
- Vercel's growth accelerated sharply from October 2025, especially with Opus 4.5. He says the platform "3x'ed in a few short months" and daily deployments doubled since January.
- Support on Vercel has a similar example: an agent now answers 93% of user inquiries, which improved customer experience and let Vercel give free support to far more people.

## Agentic infrastructure: three sides of the triangle

- Guillermo's term is "agentic infrastructure", and it has three legs:
  - Infrastructure for coding agents. Claude Code, Codex and v0 need somewhere to deploy.
  - Infrastructure for building your own agents. He expects the software of the future to be agents.
  - A self-driving cloud, where the platform configures and optimizes itself.
- Self-driving cloud: the agent comes back and says "I just optimized all your software. I made it twice as fast. Here's the PR," or has already shipped it and measured improved conversion. The goal is to end pager-duty pain.
- He calls Vercel "the AWS of AI or agents": a full-stack cloud from developer tools down to infrastructure.
- He thinks Amazon might name AWS "Amazon Agent Services" if it started today, because the thing people ship is now an agent.

## The cloud is changing: from pages to agents, from pixels to tokens

- Old web assumption: instant request-response. Amazon found that every 100 ms of slowdown cost 1% of conversion.
- Agents break that. Runs went from seconds to minutes to hours, and some now work for an entire day before returning a report or building software.
- Vercel hosts platforms that create whole companies for people and deploy agents to maintain, advertise and grow them.
- EC2 was designed for human-written code, so compute demand was bounded by the number of programmers. Agent-written, agent-repaired and agent-secured code lifts that bound.
- Vercel used to stream pixels; now it streams intelligence as tokens. He says this changes pricing and business models: seat-based pricing gives way to token-based pricing that measures intelligence.
- He is still "super bullish" on human-centric experiences and predicts a return of a more whimsical web, citing Microsoft Encarta as the model. He expects immersive experiences from video and 3D generation, including just-in-time 3D rendering on Vercel.

## Products built by reusing the same engine

- **AI Gateway:** described as a CDN for tokens. It adds observability, failover, security, acceleration and caching for tokens from Anthropic, Gemini and others, plus load balancing.
  - His example: if a user says "thanks", a smart gateway could route to a small model to reply "you're welcome" instead of firing up huge GPU capacity.
  - Also a semantic cache. Vercel open-sourced the recipe so others can build a competing gateway.
- **Sandbox:** the EC2-equivalent for agents. Models get better results given a computer, and are post-trained in Docker containers. His analogy: the first thing a company does with a new hire is hand over a laptop.
  - Sandbox reuses the virtualization primitive behind every Vercel deployment.
  - Because agents can fall for phishing and exfiltrate data, Vercel is building security products to protect sandboxes.
- **Dogfooding principle:** Vercel builds new products on its own platform. AI Gateway is built on Fluid Compute and the global network, so he "reused 95% of the rocket engine" from the CDN of pages.
- **Why Vercel built the whole stack:** "You have to do the whole thing for the thing that matters." He says agents are "probably the last class of software" and Vercel can't skip the fastest-growing economy.
- Almost nothing broke under the surge, because Sandbox and deployments share the same compute expertise.

## How Vercel became the default for coding agents

- Agents arrive with a world model. Models learned from years of public content about Next.js, React and Vercel's open source tools.
- A report he cited gives Vercel's shadcn UI library 90.1% share in coding-agent output, and Vercel near-total share on deployment.
- His answer on how it happened: "All of the above" (content, API quality, composability), and he neither confirms nor denies deals.
- **Design for local reasoning:** he bet on Tailwind despite finding its long lines ugly, because components can be reasoned about and moved in isolation. This suits context windows (about 1 million tokens today) that can't hold all of humanity's code. Next.js and React have the same property.
- **Composability** is the prerequisite for agentic scalability.
- **Block economy** (Mitchell Hashimoto's phrase, who recently joined Vercel's board): to get Claude Code, Codex or Grok CLI to choose your technology, build blocks that fit "agentic ergonomics". Open infrastructure gives agents a target, like LEGO bricks.
- Domains were an early bet. Codex users want to name their creations, so many find Vercel first through domain purchase. He wants Vercel to be "the front door to any emerging idea on the planet."

## Software, SaaS and what survives

- He doesn't call it the death of software: "software has never moved faster and been more alive."
- Examples:
  - A startup CEO replaced the company's parking-lot management software with a v0 prototype.
  - Vercel rebuilt its own Salesforce front end with a team of two, for sales reps' account, opportunity and business-intelligence views, while keeping Salesforce as the system of record.
  - Sales engineers use v0 to arrive at customer calls with working custom software instead of a slide deck.
- Software is now close to free and often throwaway, but this raises engagement. He cites Tobi Lütke's "reflexivity of AI" and his own essay, "It's Hard to Forego Efficiency."
- Hard infrastructure engineering remains hard. Sometimes Vercel convenes three agents plus smart humans to review a single line of code.
- SaaS companies that expose agentic interfaces (MCP, CLIs, APIs) will fit this world. System-of-record and access-control layers get reused.
- Customers' agents now find Vercel on their own. He asks customers for their agent transcripts to turn into evals. He expects agent-to-agent bug reports and feature requests.

## Where value accrues and who loses

- He expects the most value in useful services that agents need to do real work: sandboxes, deployment platforms, domains. He says whether this is a bubble depends on delivering useful services.
- Security and governance (guardrails, securing the broader internet) are big opportunities, and Vercel keeps hiring engineers because "there's just so much more to build."
- **Short:** static data and content businesses (Stack Overflow as the example), and drag-and-drop builders ("coding with training wheels", which he found patronizing). Also companies that don't open up, the "e-brochure" model where you talk to enterprise sales for months.
- **Long:** anyone "moving at the speed of tokens". Agents want raw signal: consumption-based pricing, instant sign-up, no sales call.
- **No more rate limits:** he told his company to drop arbitrary rate limits (e.g. a made-up 100 deploys per minute), keeping them only for abuse prevention and KYC, since pay-for-what-you-use should not cap demand. A YC company that didn't exist three months earlier was generating so many deployments it surprised the team.

## Open source and personal background

- Open source came from being a teenager in Argentina wanting free tools. Vercel built a large business on top of open source, which he calls contrarian.
- His advice on schooling: dropping out of high school made his visa harder (he wrote *Smashing Node.js* to qualify for an O-1), so he suggests not dropping out of your degree, with caveats.
- If not building Vercel, he'd work on space tech (Mars, a multi-planetary species) and energy (fission, fusion, geothermal), viewing intelligence as energy in, intelligence out.
