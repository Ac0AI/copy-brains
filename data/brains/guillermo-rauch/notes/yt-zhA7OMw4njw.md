## Why Vzero exists and how it started

- Guillermo describes Vzero as converting text or an idea into an application. It speaks to an audience Vercel hadn't reached before: "basically everybody with a job or even everybody without a job."
- Vercel's original product required engineering skills. Vzero only requires an idea.
- Traction he cites as of the interview (Oct 2025): over 100 million generated applications, about 7 app generations per second, and a user base that more than doubled Vercel's entire base in under a year (Vercel had been around almost 10 years).
- It began as a small skunkworks team (about four people, with Guillermo doing QA at launch; about 10 now). The reason was to prove the AI cloud infrastructure with a "patient zero" application that embodies the transformation he expects every company to go through.
- As of the previous week, Vzero runs a "GM model": a general manager acts as CEO of Vzero and is a customer of the Vercel platform. He compares it to a microservice architecture for people, with Vzero as amazon.com and Vercel as the AWS underneath.
- Vercel also hosts many Vzero competitors. He believes there will be billions of agents and wants Vercel to be the platform they are built on.

## Vibe coding, agentic engineering, and where each fits

- Vibe coding (Karpathy's term): you don't pay attention to the code; you give requirements, watch what gets built, and give feedback on the product, not the code.
- Agentic engineering (a term from the Zed team): you pay close attention to everything the agent generates. He wants Vercel's mission-critical infrastructure people (e.g. fluid compute, which just hit a trillion function invocations) working this way.
- His split: low-level and mission-critical work leans agentic engineering; apps, interfaces, demos, prototypes, specs, and slide decks lean vibe coding. Both have a place.
- Market size logic: an IDE-based tool still requires being a coder (downloading tools, setting up dev servers, SDKs). A web product like Vzero has a TAM of "everyone with a computer," because you open a website and start.
- The two worlds connect. Vzero has a git integration, so a vibe-coded project can be handed to professional coders. He also made the Vzero model available inside code editors like Cursor, VS Code, and open code.
- Why use the Vzero model over a stock model: it carries up-to-date Next.js and React knowledge, library knowledge (e.g. the AI SDK), design patterns, taste, and best practices.

## Encoding expertise into a model

- Origin of Next.js: after a talk at BrazilJS where he presented "seven principles of rich web applications," he realized he couldn't scale himself by going to every conference. So he built a framework that embeds the best practices. "It was literally an essay to web framework pipeline."
- Next.js today has 1.4 million monthly active developers and powers sites like Midjourney, Walmart, and Nike.
- The Vzero model is the next step: "my brain into tokens," plus his team's and the community's (CTO ex-Google 11 years, CPO ex-Meta who created React, 13 years). He aims to scale from 1.4 million developers toward 100 million or a billion.
- He argues every company will go through the same process: turning its expertise from ad hoc work or SaaS into tokens. He cites Jensen Huang's "token factory" idea.
- Vercel's own support runs on the Vzero model at vercel.com/help. Human support became "customer support engineers" handling only frontier problems that AI can't solve, and they use Vzero to suggest product fixes that remove whole ticket categories. He was initially skeptical about AI support for a technical audience, but customers responded warmly.
- He tracks "disengagement" events (borrowing the self-driving term) to see where the product leaks and the model needs work.

## Building for agents as customers

- Agents are given tools, context, and a prompt, and they wield the tools. Tools used to be drawn in front of a human's face. His point: agents removed the GUI by using the tools themselves and returning results.
- Developer workflow reality: developers constantly hit errors, alt-tab to Google, and paste errors. Vzero now hands that loop to the agent, and sometimes doesn't even render the error because the agent will probably fix it.
- Developer tools now have two audiences. Humans want visual context in errors and docs. Agents want "pure signal, no noise": raw text, `llm.txt`, or raw markdown. He expects dual output: HTML for humans, text for agents.
- Vercel started as a simple command-line tool (type `vercel` and enter to deploy). He was repeatedly told to move beyond the CLI for broader appeal, but now when Claude Code deploys something, it uses Vercel: "we accidentally created the perfect tool for an agent to deploy."
- His summary: "you need to be thinking about agents as your customer and developers as your customer."

## MCP and the generative web

- He explains MCP as "the HTTP for AIs": a protocol that lets AIs talk to other AIs and call tools over the internet.
- Vercel reduced deploying an MCP server to about five lines of code. Zapier hosts MCP servers on Vercel, and he says some run significant volume.
- Why a company should do it: an MCP server is your "minimum viable AI product." If you're Target, exposing inventory via MCP makes you interoperable with ChatGPT and with Vzero (internal teams can build tools against it in plain English). Not doing it means excluding yourself from that economy.
- He thinks MCP "will be the new business development, but at 100 times the speed," with agents meeting instead of people.
- His historical analogy: Amazon Web Services was named for the Web 2.0 "mashup" idea. Mashups didn't take off then, but he thinks they're relevant again with MCP, producing cross-pollination between products and a "fully generative" internet with no rigid fixed interface.
- Security: new needs include observing which MCP tools are called, harmful context, and prompt injection. His example: hiding a prompt injection in an image that a human can't see but a model reads, triggering a tool call that exfiltrates data. Vercel's AI security team works on new primitives beyond a traditional firewall.
- Commerce: he expects hyper-personalized experiences for returning customers, using memory (extracting about five key facts like preferences and location from an event log) to improve later visits.

## The AI cloud: pixels to tokens

- His framing: a transition "from pixels to tokens." Pixels still matter (fast, beautiful), but much more will happen agentically by serving tokens.
- Core idea: a traditional cloud showers operators with problems (alerts, 500 errors). "An AI cloud should have agents that automatically produce solutions rather than give you problems."
- Vercel sees every request end to end (CDN, firewall, rendering, backend), so a Vercel agent can investigate anomalies and open pull requests. He wants to say to a customer like OpenAI, "I've cooked on what I believe to be 95% or in many cases actually 100% of the solution." Humans stay in the loop.
- Three problem areas: attacks (e.g. bots doing credit-card stuffing and scraping on a sneaker site; the agent investigates anomalies like a 100x traffic spike from one country and decodes spoofed user agents); outages (attributing the cause, e.g. a failed upstream dependency, during the Google Cloud outage); and optimization (e.g. unoptimized images on mobile, delivered as pull requests).
- Fluid compute: AI workloads such as a model "thinking" for 15 minutes don't fit short-burst serverless. Fluid only bills for actual CPU cycles used, not idle waiting time. He says the compute work already existed and the change was the billing model.
- Other pieces announced: AI Gateway (beta), Vercel Sandbox (secure place to run model-generated code, "the Amazon EC2 of AI"), the Vercel agent, and a marketplace of partner products (Braintrust for evals, Browserbase and Browser Use for agent browsers).
- He stresses data-driven evals as non-optional for AI products, e.g. tracking the acceptance rate of changes an agent proposes.

## Product and business decisions at Vercel

- Persona focus: he "doubled down where there was the light," citing Bezos. Vzero is usable by everyone, but the people who said it was life-changing were dev-adjacent people at companies (outside the dev room but working daily with developers).
- Design from the model forward: the first Vzero UI was too ambitious (three generations per prompt, hard to get into an agentic conversation). Rebuilding for what models could actually do was labeled "V1" internally, and traction improved "by 100x." Still leave room for the sci-fi future, and design for where models will be in six months.
- Economics: he says Vzero has positive gross margins that are improving. He attributes healthy retention to an enduring business persona: at work "you're forced to be creative," and there is an economic equation attached. He wants to add ways for individuals to make money (in-app payments, subscriptions), inspired by Apple's app store and by WordPress, which he saw through his previous company's sale.
- Growth: he cites roughly $100M revenue last year and around $180M at the start of this year (the host's figures, which he didn't dispute) and says it comes from "all of the above" including AI. A lot of it is Vzero.
- Leaning into AI trends early: he defended "ChatGPT wrappers" ("everything's always been a wrapper of a wrapper") and built the AI SDK, which he says is the second largest AI module in the TypeScript ecosystem behind OpenAI's, and a chat SDK.
- Earlier tailwinds: product-market fit "accidentally" in e-commerce (accelerated by COVID) and crypto.
- Churn view: Vzero is "a mind virus." Users may cancel and return months later when they need a prototype because "you can't forgo efficiency."
- Distribution tactics for Vzero: a community of one-click clonable examples (compared to Notion templates), starting from a screenshot, diagram, or photographed napkin sketch, and an "enhance prompt" button.

## Taste, communication, and principles

- On taste: you need a vision, must be able to articulate it, and must give and receive feedback. He builds taste through "exposure hours": understand how people actually use your product, and use many other products so crossovers become new ideas.
- He wants AI creators to "set the bar" so AI doesn't produce slop (the way TikTok could have set a different bar), by embedding instructions and context.
- "Sweat every pixel": every pixel, button, or feature is a liability (surface area that can confuse users or go wrong). He contrasts ChatGPT's simple UI with Google's crowded one.
- He posts on X first to himself and his team (almost 700 Vercel employees), and to the builder community. He applies the same minimalism to words, calling prompting and communicating "practice," and believes "there is a positive correlation between prompting and success."
- On criticism: stay positive, don't post meanness, use negativity sparingly, and assume good faith. "There's a kernel of truth in everything a customer says"; the customer is always right. "I'm not here to create fans of Rauch G. I'm here to create amazing products."
- Competition mindset: whatever your size, you're competing with "the vibe coder in a garage."

## Advice for a young developer

- Focus on learning everything available in the new world; don't chase high-status old paths. He bet on JavaScript when it was considered a toy language, and was being recruited by Facebook at 17.
- Coding will be done by agents, so learn enough to tell an agent what you want and to understand system limits (hardware, services, LLMs).
- He supports companies screening for AI literacy (naming Shopify and Zapier): prompting is a proxy for curiosity.
- "The world makes progress one deployment at a time, not one line of code at a time." Code needs to run to be useful; abstraction keeps rising.
- Keep learning math (systems thinking) and language and writing (pitches, storytelling). He recommends reading high-quality literature and says AI isn't yet at Borges level.
