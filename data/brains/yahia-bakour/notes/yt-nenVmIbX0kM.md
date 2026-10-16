## Why Yahia's first customers came from angry emails

- Yahia was running several projects at once; each stalled around $1K per month.
- Only context.dev drew large companies who signed up, hit poor data quality, and sent long angry emails.
- His reasoning: "why did this person care so much or care enough to write this long email? That means there's probably something here."
- He read that as the signal to double down. He killed the other projects and focused on this one.
- His fix: take the single most annoyed user, ask "if I add these things, you'll be happy with it", build them, and they paid. He says you "kind of have to force the first 10 like that", fixing one customer at a time because different users ask for different things.

## Early traction curve and growth to 400 customers

- Context.dev is about a year and a half old. It has 400 customers and doubled from roughly 200 in the last month.
- The first 200 were "an absolute grind". The first customer took a month and the first 10 took about 3 months.
- He expects product-led companies to follow a curve: slow until critical mass, then rapid growth once you become "a default option or at least part of the conversation".
- He says he is not there yet and sees more room to grow.
- His reference example is Resend: about 2 years to reach 9,000 subscribers, then about 1 year to reach roughly 90,000.
- At the beginning there is no data, only noise, so he relied on the qualitative signal of strongly reacting users.

## Free credits beat a paywall at signup

- Yahia tested paywalling the start of the funnel. It works, but churn is much higher.
- The reason is that people don't know what they're buying. Someone expecting a marketing tool for generating assets doesn't realize it's an API.
- What works best is free credits or a free trial. When the credits run out, users subscribe and renew.
- Benefits:
  - Users know exactly what they're buying.
  - Churn is "super low".
  - Users who don't convert tell you why, because they actually tried the product.
- Paywalling upfront removes that feedback loop.

## What context.dev is and why agents need it

- Context.dev is a web context API. It turns any website into clean, structured, real-time data for AI agents and software products, from brand assets to full site crawls.
- Yahia's thesis: everyone is building agentic products, and agents need data to do anything useful. Context.dev is "infrastructure for web data".
- Why not just use a local Claude Code session to browse:
  - A local browser lacks scale. Scraping 100,000 URLs, structuring and comparing them could take 12 hours to 2 days locally; with context.dev it takes minutes.
  - He compares it to why sandboxes exist: you need the ability to spin up a thousand of them.
  - To ship a product and charge customers, you can't run Claude Code on one box to serve 10,000 concurrent customers.
- Data is gathered on demand to return the freshest results.
- The longer-term plan is to build its own index. He says you don't need the whole internet, only a subset, and text on the internet is hundreds of terabytes, not an extreme number. He counts about seven players in the space.

## Use cases and positioning as infrastructure

- Early main use case: personalizing onboarding. The more a product knows about a user at signup (from a corporate email), the higher onboarding conversion and the more "magical" the product feels.
- Keeping customer knowledge bases current: detecting when a customer updates their website, adds a product or service, or changes pricing, instead of relying on the customer to tell you.
- Turning any website into an API: give a schema and context.dev structures the data. His example is pulling pricing tiers from sites in hundreds of languages where pricing is spread across pages.
- Other uses: monitors on the internet and massive crawls.
- Because it is infrastructure, use cases are hard to pin down, like asking what EC2 or sandboxes are used for. He sees "very random use cases that are very high value".
- Customers and projects he named: Mintlify, daily.dev, Klarna.
- Next steps: add more company data and some people data. He says the scope can blow up, so he is trying to stay focused on "infrastructure for your products".

## Customers absorb new features fast

- Yahia says typical startup advice (focus on one thing, go all in, expand one step at a time) has often been wrong for him.
- Whenever the team ships something new, the customer base "absorbs it faster than I can ship it".
- Example: a new feature, monitors, had about 500 created within 20 minutes, before it was announced. Context.dev is an API product, so users aren't on the dashboard daily.
- His rule: once customers show they enjoy you shipping more, and you can go in different directions with them still happy, you can go in even more directions. There is a point where you ship too much, but everything shipped so far is correlated (all infrastructure) and packaged well.

## Running a 4-person team at 30 million requests a month

- Team of four including Yahia; agents are used heavily for research loops and eval loops.
- Scale: about 30 million requests a month, so uptime matters. "We just can't go down."
- Agent-driven performance loop:
  - Send all logs to Axiom (axiom.co). He says it ingests about 1,000 GB of logs a month for $25 a month and recommends it over New Relic or Datadog.
  - Use the Axiom MCP to have an agent create custom monitors for CPU, RAM, latency and data quality spikes.
  - When a monitor spikes, take a sliver of production traffic (requests and responses) from that window and rerun it locally or in a sandbox, unless it was zero data retention.
  - Give the agent a goal, let it run, and steer it when it wanders; wandering means the setup is lacking context.
- He says work that took an engineer weeks now takes about an hour.
- He needs much more automated testing than before.
- Customer support: an AI chatbot on the website, mainly for non-English questions. The team steps in if it isn't resolved within three question turns.
- Principle: "we try to only automate something after it's proven to work like manually."

## Background and Y Combinator

- Past roles: Amazon (learned proper engineering and scale, though he says to forget some of it when building a startup), Sunrun (an AI team inside a solar company, building revenue-driving products, and learning how big companies and budget decision makers work).
- Prior startup: StockAlarm, his first.
- Context.dev is in Y Combinator. He describes it as fun but very tiring, with outlandish goals every 2 weeks; most people miss them, but setting such a goal gets you much further than you otherwise would.
- Because his business is product-led, he doesn't have to travel as much as sales-led founders.
