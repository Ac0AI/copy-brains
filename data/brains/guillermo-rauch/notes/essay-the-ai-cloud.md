## From pages to agents: the cloud's next unit of software

Guillermo argues the web's first wave was pages, and the next is agents. Pages are fast, dynamic, personalized, and page speed correlated closely with conversion, which Google rewards with rankings, creating a flywheel of "more business, more conversion, more organic traffic". Customers like Under Armour, PetSmart, DoorDash, Nintendo and Porsche partner with Vercel to work backwards from the customer experience while the infrastructure is automated away.

His claim: "Pages got us here, but agents will get us there."

- An agent is "just" a piece of software that performs a bunch of steps on your behalf, intelligently, and delivers an outcome. His example: Google AI Overviews acting like "someone" who opens 10 tabs, reads, compares and visualizes for you.
- Unlike pages, agents are not usually synchronous and are never static. They can think for seconds, minutes, hours, and soon days and weeks.
- Agents don't follow rigid fetch-and-render instructions. They can write their own code and create tools on the fly.
- He believes every organization and individual should be able to create and deploy their own agents, keeping the web's freedom to "own a domain and deploy to it".

## Traditional Cloud vs AI Cloud: how each layer changes

Guillermo maps each cloud layer to an AI-era equivalent, and says traditional services "are foundational, they're not going away":

- Static and semi-static UI, one-shot responses, become fully dynamic and generative UI with streaming responses.
- Framework for UI and pages (React / Next.js) becomes framework for AI and agents (the AI SDK).
- CDN of pixels (CloudFront) becomes a CDN of tokens (AI Gateway).
- Compute for human-written code (EC2) becomes compute for agent-written code (Vercel Sandbox).
- Foreground compute, quick and CPU-bound (Lambda), becomes background compute, long-running and IO-bound (Fluid).

He also notes the "hello world" of yesterday was a page and today it is an agent. The interface used to be clicking through UIs; now it is prompting, or just doing work behind the scenes.

## Framework-defined Infrastructure and the "React of the Cloud"

Guillermo says Vercel was born from his 2015 frustration that the cloud offered infinite compute, yet the pixels on the web weren't getting better, nor was crafting them. The cloud's burden of physical data centers was inherited in digital form: DevOps, K8s, VPCs, CI/CD, IAM, CDNs, IaC. "The time you should have spent on the pixels... was spent on the configs."

- Vercel led with developer experience: frameworks and tools that generate the infrastructure on deployment.
- The analogy is React, which treats the DOM as the output of state and data. Vercel aims to be "the React of the Cloud", where hyperscaler primitives are outputs, not things to manipulate directly ("jQueryed").
- Framework-defined Infrastructure (FdI) is the mechanism: CI/CD, compute clusters, CDNs and caching systems are provisioned automatically, like a "cloud compiler" that turns code into optimal infrastructure.
- Frameworks serve two purposes: abstracting platform complexity by codifying expert best practices, and on Vercel, automating infrastructure.
- Traction he cites: Next.js had 500M downloads over the past 12 months, more than in the entire 2016 to 2024 period. Vercel is crossing 1 billion application deployments and powers two of the top 20 highest-traffic web properties (OpenAI and The Weather Company), while also serving 1-person companies making millions in ARR.
- His guiding principle: "it's always Day One."

## From problems to solutions: the self-healing cloud

Guillermo splits the software lifecycle into build and run. FdI gave autonomy in build (write, test, prepare for production). Run is where code serves users and things "go wrong, slow down, or altogether break", and he believes AI will deliver the next level of cloud autonomy there.

- An AI Cloud should "monitor, optimize, secure, and repair itself, without human intervention".
- Today every application at scale pays gigantic costs collecting telemetry and observability data and surfacing it in dashboards, "hoping that humans will open them, prioritize issues, and fix them by hand".
- His rule: an AI Cloud shouldn't hand you problem after problem (alerts, 5xx errors, latency spikes, traffic anomalies). It should give you solutions: pull requests, recommendations and automated actions. It should "repair and optimize, not merely inform".
- Vercel's examples: the Firewall Agent responds to threats and provides investigations and mitigation strategies to human operators; the Code Review Agent analyzes every pull request by running it in a secure sandbox, emulating a skeptical expert colleague, a thorough "vibe check".

## Keeping the AI web open: model choice, open protocols

Guillermo warns the choice is to give up the web and proxy all data and intent through one closed mega-app, or to reinvent it in the open. The web's beauty is that anyone can own a domain, deploy to it and link to anyone, with "no app review process", no "platform fee", and open, documented protocols and formats.

- The first AI wave has been dominated by closed models, proprietary SDKs, protocols and centralized interfaces.
- His alternative: a web of agents instead of a single agentic interface, and model choice instead of a single model SDK.
- Vercel's contribution is the AI SDK, which abstracts over providers and aims for better developer experience than vendor-specific SDKs. The `ai` package is the second-largest AI package on npm by downloads, behind only `openai`, and notably provider agnostic.
- He points to open protocols as the foundation of the new web: MCP for connecting agents, the Agentic Commerce Protocol for commerce, and the Agent Client Protocol for coding.

## Building for developers and their agents

Guillermo says users increasingly rely on agents to solve problems and expect more intelligent experiences. This changes the job of framework and devtools builders: "our job is no longer to empower and delight developers, but also their agents."

- Developers themselves offload problem-solving to agents, so tools must serve both audiences.
- The product goal is surfacing insights and solutions, "not endless UI or problems".
- He frames this as an opportunity for everyone, developers or not (he points to v0), to reinvent the web on open foundations.
