## Recursive founder mode: how Guillermo structures Vercel's product organization

Guillermo's response to Paul Graham's founder mode essay (September 2024) is "recursive founder mode": founder mode doesn't scale on its own, so he builds "the machine that builds the machine."

- Vercel started by hosting frontends, then expanded to backends, agents, and the whole agentic software development life cycle. That meant growing the product portfolio and the team.
- He keeps the founder traits (pioneering spirit, being the voice of the customer, pride over every detail) but spreads them across a handful of product owners, each acting as "the CEO of his own product."
- Examples: Lars Grahammer (AI SDK, a seasoned engineer with a strong point of view who joined Vercel); Tom Leonard (Fluid Compute, an acquired one-man company who did marketing, comms, product design and a low-level Rust runtime); and the founder of Vercel's feature flags product, now one of its fastest-growing products.
- His job is to set the organizational framework, the values, and the KPIs and north stars with his executive team. He then creates "pools of autonomy" because the best people could otherwise start their own companies.
- Many new Vercel products are bootstrapped on the Vercel platform itself: "we have millions of companies building on Vercel and now we also have companies within Vercel."
- Why talent stays: some acquired products didn't do as well standalone but thrive "as part of a broader platform." The feature flags founder found distribution and channel inside Vercel.
- His "love language" is seeing someone take full ownership of the end-to-end business. He expects AI to force this, since models can already do a narrow job like writing Rust.
- On retention, he's explicit in interviews that the work "is going to take at least a decade" with insane hours and a lot of fun. He avoids "jitter" in the organization and is supportive of people who want to start companies.

## Hiring in the AI era: work prompts and proof of work

Guillermo says the requirements change weekly, and his interviews now center on building.

- He screens for a mindset that extrapolates: where will things be in 6 or 12 months? "We are in the middle of an exponential." He wants proof of work, and asks candidates what they would ship next week.
- Interviews include a "work prompt": candidates build something, produce an artifact, and talk through it. He values the side quests they take, such as features they found missing or where they got stuck. One candidate delivered a beautiful output but noted she wasted an hour on something Vercel could fix, which signaled a point of view on improving the platform.
- This applies to non-technical hires too. Marketers are expected to build agents that produce marketing artifacts instead of filing Jira tickets or begging for engineering or agency resources: "You solve that problem."
- Vercel is nearly 800 people. He doesn't meet every hire, but hiring agents keep him posted on interview loops, with his requirements embedded in the candidate-summary prompts. He still reviews work and profiles, and sometimes asks for async revisions.
- Candidate experience matters even for rejections: "we think of you as a customer."
- He takes each hire seriously because he expects people to stick around for a decade.

## Moving fast without blocking: iterative greatness and choke points

- One of Vercel's values is "iterative greatness" (ITG). "No one at Vercel has the right to block things." He uses a Dune reference: "The spice must flow. The tokens must flow." Only security can halt the production line.
- If an executive objects, that is a veto, which puts the onus on the objector: "You don't get to relax."
- His rule for approvals: "Send me the email, and when I get time to review it, your product goes out." Vercel has "very, very few and very carefully designed choke points."
- He and the CTO obsessively study throughput, for example by asking agents to study the changelog rate (how frequently product improvements are communicated to customers).
- He resolves the speed-vs-taste tension by raising the floor: hiring, culture, and the platform make it "kind of hard to come into Vercel, be competent... and then ship a POS into the world."
- Example: shadcn built a component system that raised the floor of the internet, and Vercel extended it into its own Geist component system.
- Design engineering is building an agent that reviews work for polish and delight. He says AI and taste are a "false dichotomy": what's tasteless is taking raw model output (purple gradients, uppercase separated text, a green "online" dot). Skills can encode taste and best practices.

## "Everything is code": building the software factory

- One of his banger tweets: "everything is code." A slide deck, a document and an Excel spreadsheet are code (tool calls plus a little Python). The data from Vercel's AI Gateway shows most token volume is from coding agents. "Coding is a misnomer."
- The new engineering skill is a meta-skill: "I work on the output" shifts to "I work on the machine that produces the output." He sees the acceleration of delivery correlated with the acceleration of revenue.
- Example: the AI SDK repo is being turned into a public software factory. Issues and model changes get typified and handled automatically, so keeping up with new model capabilities is largely automated.
- He expects the rise of the "product engineer" (Lee Robinson's post): someone who covers product management, P&L, customers, retention and expansion, plus engineering.
- Past waves of gatekeeping repeated: JavaScript as a "toy language," data center operators dismissing AWS. His takeaway: "the fork in the road" is either an identity crisis or a leap to the next platform. His family mindset is "if it's new, we're into it," as with mining Bitcoin early and seeing Copilot-style autocomplete as the second coming.
- Skills: Vercel launched skills.sh, an open repository of skills. He open-sourced Vercel's Next.js knowhow so any customer's AI-written code can be as good as his. His conviction is that Vercel's value is the whole platform and the trust earned by giving things away. He is also converting his own communication craft into internal skills.

## V and Eve: one internal agent for the whole company

- Many companies gave everyone a Claude subscription, and usage diverged widely: some people use prompt libraries and skills, others "clock in, clock out." Vercel's fix is an internal agent in a self-improvement loop, called V.
- Principle: like the iPhone, agents need "one front door." Internally it was the "omni agent project." Employees ask V when they want a job automated or have a question about the business or a customer. Under the hood are agents, applications, skills and a team that maintains it.
- Vercel open-sourced the Eve framework for building agents like V.
- Examples: the COO built about a dozen go-to-market agents (lead routing, sales skills) and rethought go-to-market agent-first. The data team built a data agent, with a security model so policy on who can access what is in the agent's brain. Their SLA is now measured as time to first token instead of a ticket queue. V once suggested a tweet about reaching two billion deployments by combining the data agent and its own hypotheses.
- Executives are "agent builders." Guillermo says a company's foundation increasingly starts with the agent that helps run the business, even before a website or incorporation. V's personality is even being tuned (an intern improved it because it didn't "speak like a Vercelian").
- Collaboration pattern: "It's always going to be you, me and the agent." He wants agents in DM threads (with consent) so people see how capable they are. If he DMs a person, "it probably meant that my agent couldn't figure it out."
- His personal workflow: CLI-first, firing asynchronous research tasks at the lowest-level substrate he can get, and he keeps a research folder. Example: he asks an agent how easy it is to sign up for the AI Gateway and get an API token, which used to require a product review meeting.

## Agent-readiness, token economics and model benchmarking

- He now judges vendors on agent interoperability. He approved spend on a sales and marketing platform that plugs into V, and has vendors on the "chopping block" because their MCP took thousands of tool calls and failed often.
- Infrastructure must absorb agentic load: Vercel's own load doubled in a couple of months, and agents can 100x load week to week. He cited a GitHub outage as an example of infrastructure not holding up. A legacy internal platform that can't absorb agent-driven deploys gets replaced ("I gave you a Ferrari... I just went into a two-week queue").
- Cloud services for the agent age: "a CDN for tokens" (AI Gateway), sandboxes, and MCP 2.0 backends deployable on Vercel. Agents increasingly choose their own tools. He quotes Notion's founder: designers should now design CLIs and APIs.
- Vercel built DeepSec, a security-review tool that tells models to be paranoid about auth, security and privacy. He found a model that was great at finding vulnerabilities cost thousands of dollars on their codebases, while Kimi was cheaper (about seven times) though less capable. Vercel builds benchmarks (like a DeepSec bench) because model cost and quality shift constantly, including new open-weight releases.
- Vision: ask V for a security review and it automatically calls DeepSec and decides how much to invest. "Tokens are going to become a huge percentage of your operating budget" and will inform P&L by business area.
- Why v0: he thinks about time to "aha." v0 packages Vercel's skills so a prompt yields a Next.js project at Vercel's quality bar, making it faster to try and sell Vercel. Vercel's soul remains the platform: whether you use Claude Code or v0, can you deploy software and agents?

## Platforms, moats and the future of software

- He doesn't buy a "complete SaaS apocalypse." Bespoke software that doesn't fit a platform may not survive, but platforms will do extraordinarily well.
- Example: a large marketing agency moved from buying 10 to 20 point products to building its own agents and internal tools on Vercel (even competing with an Adobe product for its own needs). That adds to its IP and consolidates procurement to one platform.
- Infrastructure is hard to "vibe code": it needs operational rigor, security and global distribution, so infrastructure and platforms are strong moats.
- He expects the bar for a venture investment to recalibrate, and a reinvigoration of small businesses and solopreneurs (he hears of single-person companies doing tens of millions in revenue).
- Standing out as a builder: building software is baseline now. Differentiate with storytelling, landing page and call-to-action skill, and getting customers. He invited indie maker Marc Lou to a Friday fireside chat to explain how he designs landing pages and correlates visitors with revenue. His regret about Socket.IO: Microsoft embedded it in Microsoft 365 and he didn't tell that story. "Open source is blurring the lines with businesses and startups," so name, logo and website now matter.
- Optimistic view of society: the web becomes more "whimsical" and immersive (e.g., someone vibe-coded a 3D examination of the human body), artists and handmade small businesses come back, and partnerships like Shopify's backend let people launch shops by prompt.
- What stays human: capital allocation, values and taste, empathy and connection. "I refuse to have an AI as a friend." He writes his own tweets (AI only reviews them): "farm-to-table next token from me, not from a machine."
- CEOs should build with agents themselves (he praised Gary Tan for going back to the arena), and should get their top leaders to SF to see what agents can do.

## Leadership and operating principles

- Early-stage founders do everything and aren't world-class at all of it. In the AI era, leaders must become more full-stack, because bandwidth is amplified; staying in your lane ("the CSS expert") gets you left behind.
- Quote he cites from Elon: the product is the factory that produces the cars at scale. Guillermo applies that to software and to his personal "factory" (his psychology, energy and routines).
- Scaling a manager: he cites Jensen Huang's large-group meetings over one-on-ones. Values and leading by example scale more than one-on-ones. He does customer support rotations ("it's become a meme"), stays in the weeds, and invoked the value of iterative greatness.
- Focus lesson: Vercel succeeded with simplicity (a single-command deploy). When he got distracted and "threw things at the wall," life "gave me the A/B test."
- Mistakes: he hates making them, but most are two-way doors; "breathe, this too shall pass."
- Energy: he works out every morning; the gym "expands your energy capacity" ("you have to spend energy to increase your energy budget"). He vibe-coded an app to count his keystrokes per day. He frames low periods as observations, not "burnout."
- Quick-fire: overrated startup advice is "ambition" (many startups ship slop because they're too ambitious; moderate it); overhyped is voice control of computers; his advice for aspiring builders is discipline and hours ("10,000 hours, 996, that's rookie numbers").
- Tooling goal: deployments in single-digit seconds at any app size (he recalls the magic of FTP); fast feedback loops matter for agents. A new Next.js release cut build time sometimes by 50%.
