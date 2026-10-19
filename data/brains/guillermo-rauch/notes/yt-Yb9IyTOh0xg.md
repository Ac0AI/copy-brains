## v0 and the git workflow: taking vibe coding from prototype to production

Guillermo's core claim: going from zero to one with vibe coding is easy, and everyone has seen the demos. The hard part is iterating on a project at scale and deploying changes safely. Vercel's answer was to make real engineering practice a first-class part of v0:
- Work on branches, use branch previews, code review, then merge.
- v0 gained a "new branch" button, so the git flow no longer requires a terminal or GitHub Desktop. "It's the stone age" to branch manually.
- Branches follow the engineering convention of contributor/feature (for example "v0/rauchg"). He says the product deliberately embeds the small details of a real engineering workflow, but makes them easy.
- Each branch runs the real project in a VM sandbox: dependencies installed at exact versions, a full VS Code editor, and the live app preview. He credits the Next.js team for mirroring dev and production environments as closely as possible.
- Importing a GitHub repo into v0 lets anyone start a chat from an existing production project.

## Demo: shipping a rating feature to skills.sh from a prompt

Guillermo built a feature live on skills.sh, an npm-like hub for agent skills that was itself conceived in v0. It had 34,000 skills submitted by the community (he later says 35,000), with about 500 skills added per hour.
- The prompt: add a five-star rating system for skills, put it on the sidebar, and be mindful to rate limit or prevent abuse on the scores. His reasoning: ask "what could go wrong if we accept ratings from the internet," and the answer is abuse.
- v0 read the project, noticed the data lives in Redis (Upstash) via the Vercel marketplace, and reused it rather than inventing a new storage approach. The result matched the site's "terminal core" monospace style.
- He caught a small layout shift on refresh when there was no data and asked v0 to remove it. He says he has "a laser eye for product."
- v0 then opened a PR and wrote the description. The Vercel bot built a preview deployment on the production-grade CDN and hosting infrastructure. Seeing the rating there gave him "pretty good confidence" it was shippable.
- He frames the preview as a second layer of assurance beyond the dev server.

## How skills.sh was actually built at Vercel

- It started as a moment of inspiration: "wouldn't it be cool if this thing took shape?" The team iterated in Slack, prompting and discussing what it should look like.
- Guillermo's design contribution was making the top of the site look like a terminal, which became "terminal core."
- Four or five v0 prompts, in conversation with the VP of Design, produced the first version. The VP of Design then took it much further, with input from the CTO and product leader.
- It was production grade from day one because it needed to scale and many people would watch it. Page transitions are instant, using Vercel infrastructure primitives.
- Skills were already on the backlog because customers asked why Opus 4.5 "kind of knows the latest Next.js but not really," and how to embed Vercel's best practices.
- Vercel now plans to preload skills for its frameworks and the AI SDK into v0 so the model gets stuck less often.

## Adoption data and the internal data agent

- Vercel's internal data analyst agent, d0 ("we take the first initial and we add a zero"), reported PRs merged via v0 growing from near zero in early January to 3,200 per day by January 28-29, which he calls about a 100x increase.
- He says it was still early preview, with people just being let in.
- Why d0 works: it has a computer (a Vercel Sandbox VM). It can do research, write and run Python, query Snowflake, search the web, and fix its own mistakes over a four-to-five-minute process. He argues what makes agents capable is not perfection but having a computer to solve any problem.
- He expects this to change how Vercel works: tasks triggered from a phone, Slack, or v0.app.

## Letting non-engineers ship: marketing, prioritization and rigor

- Guillermo now creates a v0 prototype whenever he has an idea for improving the product. Before, he says he was "playing in La La Land." Now a prototype can be handed to engineers as a pull request on a shared substrate.
- Example: every marketer at Vercel wants to change the enterprise page. The old way was either "petition the government" (ask engineers to add a logo) or hope the CMS was wired for the idea. Now they open the page in v0 and prompt any change.
- It would be irresponsible to ship unreviewed, so the git workflow, PR and preview build confidence, and changes can be rolled back.
- For enterprise rigor (feature flags, experiments, measured events) he sees skills added to v0 as the way to make vibe coding scale to that standard. Moving a button is never as low risk as it sounds.
- Collaboration is the point: the git substrate lets engineers, designers and marketers work in one medium. When stuck, there is an escape hatch to clone the repo locally or hand it to someone else, so "a lot less people are going to get stuck."

## Product validation: customer zero and customer one

- Guillermo's new internal mental model: customer zero is Vercel itself, trusting its own taste and the products it wants to exist. Customer one is a close design partner.
- Design partners include enterprise companies, individuals, community members, and people who message him on X DMs. Claire Vo texts bug reports and needs. He wants that constant pressure test from the outside world.
- Vercel's rule for internal projects: hold them to the same bar as an external launch, so people actually adopt them.
- Principle: "Every day we're basically asking ourselves how can we build an agent that takes over a task that we were previously giving to a person," and the person who did the task usually builds the agent.
- v0's roadmap goal is to be great for creating agents, not just web apps. Example: an OG/Twitter card generator combining traditional rendering with image generation, built because social cards were a team bottleneck.

## Agents, workflows and the roadmap

- Durable workflows: his AI chess match demo (two models playing in 3D, streaming thinking tokens, built with Three.js, AI Gateway and Vercel Workflow) can run forever. If a provider is down or a function times out, the workflow engine retries. He wants v0 to help build workflows like this, since many agents need that reliability.
- He describes background agents you message (for example over WhatsApp, as with the OpenClaw/Moltbot craze) that use workflows and sandboxes.
- Generative UI: "flash v0," where an agent spontaneously renders UI code without deploying an application, is being researched as another tool for agents.
- Mobile: no timeline promised, but a long-held dream is to make pushing to app stores like pushing to the web, using React Native skills and a React-based deployment platform.
- Debugging tip: when stuck, ask v0 to build debugging tools for itself (he had it visualize the 3D mesh and toggle textures), and ask other models to explain unfamiliar domains, then paste their answers into v0.
- Tooling notes: he generates 20 images in parallel with Nano Banana and picks one before taking it into v0 for higher-fidelity implementation. Vercel built its own playground for it and is dropping text-to-SVG via Recraft models on AI Gateway and a video-generation feature.
