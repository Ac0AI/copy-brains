## Why Vercel's AI strategy is integration, not model training

Guillermo describes Vercel as a web infrastructure company that provides the frameworks, tools, infrastructure and workflows for deploying dynamic websites. It powers ChatGPT's front end (via Next.js, the open source framework) and customer sites like underarmour.com and Nintendo.

His AI thesis is that foundation models are "Cloud 2.0": the new backends. Just as great SaaS companies were built on AWS and Snowflake, he expects many AI-native companies to be built on top of models.

- He argues you do not need to train or fine-tune a model to build a useful product.
- He advises teams against "random acts of AI" (checking a box) and pushes for genuinely useful products.
- He believes much of the value accrues in the last mile of integration.
- Vercel's AI SDK is meant to be the easiest way to build an AI app without reinventing the backend. It connects to OpenAI, Hugging Face and Replicate, and he said text models were supported with voice, audio and image generation planned.

## Build AI-native products instead of bolting AI onto existing ones

Guillermo contrasts "adding AI to an existing product" (his example: adding AI to a word processor) with starting from the problem and asking what solving it looks like when AI is an input to the design.

- His example is Jenni.ai, which he says went from $1M to $1.5M ARR over two months with a specialized product that helps researchers write papers.
- He says many productivity tools he uses daily could be rethought from the ground up.
- Vercel's template marketplace includes viral apps like Room GPT, which redesigns a room using an image generation model hosted on Replicate, packaged with a turnkey subscription, login and signup, and deployable in seconds.
- He pitches this as a way to put AI into as many developers' hands as possible.

## Dogfooding: being customer zero

Guillermo says Vercel builds the best products by being customer zero of its own.

- All of vercel.com is built on the Vercel platform, which pushes the team to improve Next.js, infrastructure and build speed, especially as engineering headcount grew.
- He applies the same approach to AI: Vercel dogfoods its own AI SDK to automate front-end work such as forms, UIs and layouts.
- His reasoning is that good UI is statistical in nature. Users expect it to be familiar, so it is a good target for automation.

## Infrastructure for streaming AI responses

Guillermo explains that AI apps change performance expectations on the web.

- Traditional e-commerce backends are optimized to respond in about 100 milliseconds, while AI responses can take 15-20 seconds to fully form.
- Vercel's Edge Functions run compute as close as possible to the user and support long sessions of dynamic streamed responses.
- The AI SDK demonstrates the difference between a blocking backend and a streaming one, and he says streaming makes AI apps feel good to the user.

## AI security, abuse and cost control

Guillermo says security is a key Vercel investment area for AI.

- OpenAI is the most popular backend his aggregated, anonymized telemetry shows Vercel server functions talking to.
- When GPT-3 launched, many demos were published and abuse followed: people ran bots and proxies to get free tokens, which he calls "scraper 2.0" ("free GPT-4").
- Many products integrated AI so generically that they opened up their tokens, even with authentication in front, including to countries or companies where AI use is banned. He says this is still a huge problem.
- Vercel's response is tooling for rate limiting, bot detection and integrated caching of cacheable OpenAI responses to reduce cost.
- He expects an AI-vs-counter-AI dynamic: better AI to block bad bots while still letting authenticated good bots, such as user agents, through. He notes many AI companies are very strict about blocking bots.

## Observability and frameworks for AI are still immature

Guillermo sees a gap in monitoring, testing and feedback tooling for AI.

- He credits Datadog and Zapier for onboarding that enumerates integrations and won't let you move on until you send a data point or choose your tools. He says this has not fully landed for AI, where the topology and frameworks (AI SDK, LangChain) differ.
- He says observability is mandatory from the first version of an AI app (V0.1), because the feedback loop is critical, whereas early startups in Cloud 1.0 might be lenient about it.
- His "hot take" is that today's opinionated AI frameworks (agents, indexing, retrieval, the last mile, not training tools like PyTorch) will have to evolve a lot, and a second generation will come out of running AI at production scale.

## SEO, content and the dynamic web

Guillermo describes how AI shifts SEO and web architecture.

- Intermediaries to content are no longer only Google. Retrieval engines like Perplexity work in real time, and customers keep asking whether the rules of SEO still apply.
- He wants AI models to have the latest Next.js docs (ChatGPT gives the 2020 solution) and says he'd happily provide docs in whatever format. Other companies will have different content-negotiation needs.
- He expects APIs to become duplex streams of content plus citations, partly because logging sources may become a legal requirement and for UI features like hover-to-see-source.
- On crawling: Google's open Chrome User Experience Report (CrUX) shows a power law, with the top 1,000 sites making up about 50% of page views (more skewed on mobile). He suggests covering the top ~10,000 sites, delegating broad coverage to model pre-training, and adding your own up-to-date indexing of domain-relevant sources. He cites Phind as an example of a focused developer search.
- Architecture is moving from static to dynamic: static generation, which rebuilds the whole site on every content change, can take an hour to go live at scale in 2023. He notes headless CMS vendors and tools like Notion adding AI, which increases the rate of content change and personalization ("a web that's just for you").

## Front-end tooling, copy-paste and taste

Guillermo argues the front-end ecosystem is more stable than its reputation.

- Despite the meme that front-end engineers change tools every week, the Chrome report shows React, Svelte and Vue clearly staying at scale, with React dominating. He expects innovation to shift to AI tools that generate the code.
- UI generation should resemble Midjourney: every prompt gives a statistically pleasant start. He sees this avoiding both hand-crafting every pixel and the same-looking startup template (the purple gradient hero).
- He expects the product engineer role to become about taste, like Rick Rubin ("artists hire me because of my taste"): "I like this, I don't like this, re-prompt," with the option to dive into code.
- He says AI makes copy and paste more ergonomic, questioning whether you need a package. He quotes "copy and paste is always better than a bad abstraction" and points to shadcn/ui, whose author told people to copy and paste from the browser.
- Owning the code means you can audit and secure it, avoiding dependency liabilities. He ties this to monorepos (Vercel built Turborepo), which the largest software companies use without global package managers, and sees a swing back to vendoring with AI doing code scanning.
- On languages, he notes GPT-4 is strong in JavaScript and Python because of available data. Token efficiency already favors terser syntax (e.g., redundant closing tags in HTML), and he thinks AI could operate in a purer logic layer mapped back to code.
