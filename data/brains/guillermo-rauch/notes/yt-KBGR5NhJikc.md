## Building products with AI: ghost text, v0, and why every product becomes an AI product

- Guillermo caught the AI bug from GitHub Copilot's "ghost text" (a suggestion shown next to what you typed, which you accept or ignore). His framework at the time: "we are going to need ghost text for every product in the world." Coding was only step one, and he argues that makes the insight stronger because programming is a hard task.
- He now uses AI to proofread tweets and rephrase text. When Copilot came out he told Notion's CEO (he is a small investor) they needed to bring ghost text to Notion. It ended up as a slash command and context menu instead.
- Vercel's thesis is that the speed at which a user interface is delivered is king, so the same completion idea should apply to UIs. v0 generates the first version of an interface from intent, offers three or four options, then loops with the user on refinements.
- v0 targets production-grade code. Vercel's customers operate at large scale (he says Vercel is overkill for "your uncle's restaurant website"), so generated UI must be good enough to ship. At the time of the interview, hundreds of thousands of generations had been made for a small group admitted from the waitlist.
- He frames v0's value as fixing "the empty canvas." Engineers still start from a blank text file and he predicts "we're going to look back on this and we're going to be like those were the dark ages of development."

## v0 as an accelerant: his own website test

- Guillermo rebuilt his personal site (rauchg.com), which he hand-crafted pixel by pixel, using only natural-language prompts. Example prompts: gray background, center it, blog post list top right, an "about" link, a Twitter icon.
- The visual result was satisfying. What shocked him was the code: "better code than what I wrote." It was objectively more accessible. The AI generated a "Twitter" label shown only to screen readers, a detail he had missed in 20 years of front-end work.
- His reasons: AI has "infinite memory," "infinite patience" (he attributes this to Marc Andreessen), and access to ever-growing data, so it is hard to compete with on details.
- For v0 specifically, Vercel steers output with fine-tuning, retrieval and its own knowledge of best practices: accessible interfaces that work on mobile and desktop.
- He sees v0 as helping experienced engineers from other domains (say, back end) who know systems well but not the front-end best practices, plus anyone else who wants to build.

## Skills for working with AI

- Guillermo says people must build the skill of working with AI: prompting, knowing what it can do and where it struggles.
- Example: someone replicated Angry Birds entirely with AI. Guillermo DM'd the author to check how much was AI-written (all of it). The author said the AI could not reason about the passage of time, which games need for state evolution and collision detection.
- He expects people to use different AIs for different skills, because each domain needs different handling of error correction, hallucination and freshness. His own picks:
  - Perplexity for very recent or real-time information and trends.
  - Metaphor for crawling the web with ChatGPT-like prompts, useful when you don't know the keyword (the "what was that song" problem).
  - Phind for searching developer documentation across many sources, useful for integrations when he needs confidence the AI saw recent docs.
  - ChatGPT for coding.
- Prompting tips:
  - Paste the entire error message from the compiler or tool. Giving the AI lots of context is counterintuitive for people used to two- or three-word Google searches, but more context gives better output.
  - Phrase things as a question. Ask "what is 2+2?" and push back with "no, it's 5," and the model caves. Understanding next-token prediction helps you reduce overconfidence and hallucination.
  - Upload context rather than starting from scratch each time. He sees this as why OpenAI went with GPTs and system prompts. Fresh starts are less helpful and more expensive, since powerful models are needed to reason with little context.
  - He repeats Satya Nadella's line about large models: using GPT-4 is like driving a Ferrari, and you should ask whether you'd cross the street with one.

## GPTs vs your own product: a strategic and technical framework

- Business question: do you want to keep the direct connection to your customer, or be "a product in somebody else's shelf"? The analogy is Vercel's e-commerce customers (Under Armour, Chico's) that could have handed all their inventory to Amazon.
- The answer is often both. His example: a mattress brand selling on amazon.com and also running its own site. Do not sit on the sidelines training people to go to someone else's website instead of yours.
- Technical question: GPTs are constrained like Amazon product pages. You get a bit of bold, italic and code, and everything must fit the host UI, so he expects them to be very limited.
- Products like v0 need visual and UI freedom, and he thinks that need grows over time. He expects many verticalized AI assistants, some inside existing products and some new. Examples he gives: a new Bloomberg terminal, and AI-first healthcare (looking up preeclampsia, where presentation and regulation matter).
- Shopify's in-product copilot for merchants is his example of companies embedding assistants. He is "talking my book": Vercel bets every product becomes an AI product in some capacity. It offers templates and the AI SDK (sdk.vercel.ai) to add AI to existing or new products.
- Companies can build better AIs with RAG, LLMs and fine-tuning, and keep information current.

## Software 2.0, Cloud 2.0 and who wins

- He cites Andrej Karpathy's "Software 2.0" essay. Software 1.0 is explainable code: algorithms, data structures, languages. Software 2.0 is "more like cooking than engineering": mix data and compute to train neural networks, and the resulting "code" is hard to interpret.
- Parallel to cloud: Cloud 1.0 gave VMs (EC2) and object storage (S3). Cloud 2.0 gives vector databases, LLMs, indexing pipelines and retrieval.
- Advice to technical leaders: ask how much you invest in the 2.0 paradigm versus the 1.0 paradigm. Vercel's pitch: infrastructure is not your business, so offload it and focus on bringing software 2.0 features to market.
- His speculative prediction: because attention, money and VC excitement go to 2.0, 1.0 technologies may ossify. Models are good at JavaScript and Python but poor at obscure languages, which reinforces existing choices. He compares this to JavaScript automating away memory management, and expects writing code to matter less while attention moves elsewhere.
- Who wins: both startups and incumbents.
  - Incumbents will add incremental AI (assistants in dashboards) fast and with lots of money.
  - Startups can build 2.0 products so different in visuals, function and customers that big companies struggle to pivot into them.
- He wants to see "the Uber and Airbnb of Cloud 2.0," companies that couldn't exist without LLMs and diffusion models. He expects AI-first social networks and compares the opportunity to Zuckerberg as a PHP developer assembling off-the-shelf pieces (MySQL, PHP). Today you can use off-the-shelf services and APIs without a machine learning PhD.
- Advice for the fast-moving environment: re-evaluate your assumptions every week, since models, context windows and architectures keep changing.

## Open source always wins

- His rule: "never underestimate open source." Betting against it is costly and shortsighted. Microsoft once underestimated it and has since changed.
- Next.js example: in the early days (a 3-4 person startup) a CTO of a popular real estate site said Next.js wasn't mature enough and built his own. A couple of years later every major online real estate player was on Next.js.
- Why open source improves faster: CTOs told him the best feature of Next.js was finding problems and solutions on Google. Proprietary tools can't use that ecosystem of knowledge and intelligence.
- Applied to AI: Llama may trail GPT-4 and Code Llama may trail Copilot, but it will get better. Garage chip startups will download Llama first and battle-test against it, since they can't access GPT-4. His phrase: "business development is not done with phone calls and meetings and contracts, it's done by doing a git clone of our repository."
- Caveats he names: regulatory capture is the main adversary of open source.
- Counter-thesis: the model is only the engine, and APIs win over long periods through ease of use (people use Stripe, not MasterCard directly). Open-source model folks must provide utility on top of the model. Vercel is investing in that connective tissue between product and model, including the AI SDK.

## Iteration velocity and the Vercel developer-first model

- Vercel's front-end cloud makes sites fast and dynamic, built on open source (Next.js, React). He compares Next.js to "the Kubernetes of front end."
- Modular, composable stacks (Stripe, Twilio, OpenAI) replace monolithic vendors like Oracle or SAP. One retailer's chief digital officer told him moving to Vercel was "the last digital transformation" he needed, because decoupling front end from back end lets him swap payment or order-tracking providers later.
- Developer experience is a business strategy: "developers choose the products that feel the best." A top-three world bank migrating to Next.js was driven by its developers, not by Guillermo convincing the CTO. Next.js is free MIT-licensed software, so anyone can adopt it.
- He prefers "iteration velocity" (speed with direction) over iteration speed. Vercel gives data such as Speed Insights, citing a Google-commissioned study that 100 ms faster mobile pages improved conversion by 8%.
- Teams should iterate "fearlessly": feature flags, rolling a change to a small cohort first (like movie pre-screenings), and automatic reverts based on business metrics. He points to ChatGPT plugins, then GPTs, as an example of fast iteration from feedback.
- He ran a tiny version of this at his previous startup, optimizing the deployment pipeline so engineers could discover customer needs faster, which later became Vercel.
- Vercel has over 450 people. It powers the front ends of AI products such as ChatGPT, Pi, Perplexity and You.com.
