## Start with a niche and earn the right to expand

- Guillermo's early mistake was trying to make everyone happy. Vercel's infrastructure was so generic that he was "appealing to everybody" (Java, Next, and more), which stretched the company thin.
- His principle: ambition for a venture-backed business should be "pretty much unbounded", but it has to be met with realism. Pure ambition leaves you "jack of all trades, master of none".
- He contrasts "a million mediocre customers" with "a thousand customers that really love you".
- Vercel first dominated a niche: the front end, meaning hosting the front end of websites and web apps, then CDN and security services.
- He says the "niche" has produced $250 million of revenue (earlier in the talk, $200 million ARR and a doubling of users year over year). Things that look like niches often turn out to be very large markets.
- Back end, agents and the AI cloud came later than he expected. "You have to earn the privilege to expand."

## Rules for when to expand into the next chapter

- Once a business reaches product-market fit, he says you can't get too satisfied. Customers and the world expect more, and you have the people and funding to expand into adjacencies.
- Brand permission: if Vercel launched a washer and dryer, people would find it strange. They would expect an AI coding tool. The brand has to give you permission.
- Adjacency to core competence: his example is that a payments company can do billing or fraud next.
- For Vercel's AI cloud, the same demand carries over. Developers want simple frameworks, tools and solutions for building agents.
- He treats platform shifts as the moment to start. The shift 10 years ago was the cloud; the current one is AI. Old technology doesn't disappear. Pages, URLs and links stay relevant, much like AM and FM radio.

## Pairing an open source framework with a cloud business

- At the start, Guillermo wanted to remove all friction from "idea to global cloud application". He needed two halves: tooling (framework, runtime, compilers) and cloud infrastructure.
- He saw an asymmetry in the market. AWS and Google Cloud gave you primitives such as VMs, clusters and networking and left the application framework to you, "draw the rest of the owl".
- Next.js was built for the sophistication, performance and flexibility of the internet's giants. Vercel hosts and scales it with universal performance, so no one needs to be an infrastructure expert.
- The goal is to be born on Vercel and never graduate, "much like Stripe", because scale is effectively infinite.
- Open source is the company's "cover letter to the world". Starting with Next.js, or another open source framework Vercel contributes to, leads people to the business.
- His own open source contributions (such as MooTools) served as his résumé and let him reach a worldwide audience from Argentina.
- The AI SDK follows the same pattern as Next.js, a framework for the agent era. He says it may surpass Next.js in downloads. The conversation cites about 4.3 million downloads a week.

## Going from developers to everyone with v0 and Stripe

- Vercel's v0 is a deliberate "self-disruption". JavaScript let Vercel enable tens of millions of people to create. Natural language, where "English is becoming the next hot programming language", could reach far more.
- His proxy for the market is Slack and Teams, with roughly half a billion combined monthly active users who talk about building software or a business. He wants to turn those words into software, taking the creator pool "from like 20 million to 500 million".
- Vercel added a Stripe integration so anyone who prompts v0 or deploys to Vercel gets a Stripe sandbox provisioned without setting up the environment.
- It quickly became the third most popular integration on the platform. His reasoning: when people build something, they want to monetize it, and selling is the best way to get market feedback.
- Surprising users: people building side-project startups they previously found too hard to build, 12 to 13 year olds selling products online, and enterprise staff who lack resources to execute. One company went "from v0 to patent filed" by prototyping and talking to customers.
- He thinks enterprises could innovate from within, rather than only by acquiring startups.
- He doesn't think the tool replaces engineers. Many people start in v0 and grow into proficient engineers, moving to Git and other tools. He personally sends prototypes from v0 to his team rather than describing ideas in Slack.
- Non-English use is strong. People build in Japanese, Spanish and Arabic, and he rates Spanish as "amazing".

## Designing for the LLM as a customer

- Internally, Vercel now treats "the LLM as our customer". Next.js used to be designed only for people; the first version looked like a templating language (like MySpace codes, or Shopify Liquid) to make React relatable.
- His design rule is progressive disclosure of complexity. Meet each customer at their level and reveal sophistication only as needed. The hard part is keeping the simplicity of the early days at scale; Stripe supporting Shopify has far more advanced needs than a one-person shop.
- Vercel now hosts two of the top 20 websites by traffic, so the complexity must be exposed carefully, now to agents as well as people.
- Example: agents boot up and kill many dev servers, which humans don't do. Vercel added the process ID to a Next.js error message so the agent knows which process to kill to free the port. A tiny change that is marginal for humans makes "a gigantic difference for agents".
- He says to think of yourself as a junior engineering manager managing a fleet of agents, not a junior engineer.
- Context is king: "the context we put into the agent determines the quality of the outcome". The error-message tweak is context engineering.

## Pricing and billing for the AI era

- Early platform decisions can be regrettable. Examples are how you structure users, teams, organizations, workspaces and roles, and pricing models. You can wake up five years later wishing you had done it differently.
- His rules of thumb:
  - Optimize for high iteration velocity in pricing, packaging and billing, because they will change constantly.
  - Optimize for transparency. Vercel shows the exact cost per request, data transfer unit or AI token, with real-time accounting.
  - He frames cloud as power and Vercel as "a utility". Customers draw capacity on demand, so prediction markets like Polymarket and Kalshi can scale on election day without calling Vercel.
- Usage varies widely. Some engineers run long agent sessions, others run parallel ones, and some on frontier domains get little return from AI today. This calls for fluid accounting and billing.
- He runs a hybrid model: on-demand for compute, builds and tokens, plus traditional per-seat or per-project pricing for collaboration (as with GitHub or Figma).
- Warning on pure on-demand: you can face a cold start problem with 100,000 customers paying around 3 cents a month while carrying fixed platform costs.
- He advocates extreme experimentation because "no one really knows the answer", and recommends against building billing infrastructure yourself.

## Interfaces and protocols for agents and commerce

- If English is the programming language, you must be where conversations already happen (WhatsApp, Slack, ChatGPT, Cursor). He is paying close attention to MCP, since many enterprises (Vercel, Stripe, Shopify) have internal chatbots and your product may have no pixel interface at all.
- On agentic commerce, he thinks it is overrated for repeat purchases, using his habit of buying the same black shirts. He sees real potential for personalization when an LLM has good context about preferences and purchase history.
- His mental model for future pages: an LLM with context produces the page, and its tool calls orchestrate UI components. Businesses need both a protocol to integrate into big chat platforms and their own interface.
- He describes three interfaces: a human in a personalized storefront, an agentic browser ("get me my black sweater"), and agent-to-agent.
- Demo with Stripe: a coding agent told to deploy picks Vercel, procures an account and pays for it, delivering a live URL while the purchase is an implementation detail. He says oversight, persistent payment methods and fraud prevention remain necessary.
- He thinks B2B procurement by agents is under-discussed compared with B2C.
