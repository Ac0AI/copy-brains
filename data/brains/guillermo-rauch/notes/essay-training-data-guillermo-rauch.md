## Why v0 is built for reliability and taste, not just generation

- Guillermo says AI products come with built-in metrics. Copilot's completion acceptance rate is one big number (51% one week, 52% the next), so a team always has a compass for iterating.
- For v0 the signals are whether people deploy what they generate, what happens to the app afterwards, and whether the code works and renders correctly.
- He treats reliability as the core quality bar: "You want to come in, you create a generation, it has to work." v0 trained its own custom code application model that sits in front of the frontier model, plus fine-tuning, all in service of reliability.
- Users of AI coding tools have a shorter fuse than traditional developers. If something fails, they flip the table, so he wants outputs that work 99.99% of the time.
- Taste is embedded in the model. Example: on iOS, the Safari theme bar should match the page background color. Before, that took frameworks and education plus hoping people upgraded; now it can be taught to the model and applied to every generated landing page.
- He calls this "the next thing after frameworks." Frameworks created a "pit of success" for people who fit them. A model can deliver that guidance to a far broader set of people than the single-digit-to-low-double-digit millions of developers.
- To keep improving, he analyzes categories of customer errors and asks "could a model have solved this problem?", then turns each one into an eval.

## Expanding who builds: dev-adjacent users and prototypes replacing pitch decks

- Guillermo noticed early that ChatGPT was very good at React and Tailwind, so Vercel embraced it instead of ignoring or fearing it. He saw LLMs as a generational leap "more general than a framework" that opens the top of the funnel to "every person on the planet."
- v0 (text to app or front end) has over 3 million builders, with high engagement and retention, and Fortune 10 companies on the enterprise tier.
- The biggest discontinuity is that AI coding tools attract dev-adjacent people: designers, marketers, "basically anybody with a keyboard." His joke: instead of yapping into your team chat app, yap into v0 and create more value.
- Prototypes are replacing pitch decks. You used to raise a seed round to build a first prototype; now founders arrive with a working front end because the cost is so low. You can go through hundreds of prototypes before settling on an idea.
- Vercel's user base doubled year over year at zero extra cost, which he credits to AI opening the top of the funnel.
- His advice for newcomers: people entering software today leapfrog the previous generation because they have access to everything learned collectively.

## ChatGPT as a lead and signup channel

- Vercel shared that signups sourced from ChatGPT have been growing exponentially.
- Cause: the AI SDK playground lets Vercel query multiple LLMs side by side. Over time they saw that asked for the best way to deploy a React app, the models often choose Vercel, due to training data (opinions, writings, GitHub issues).
- Anecdote: at the AI Engineer conference in San Francisco, people at the Vercel booth said ChatGPT had told them to use Vercel.
- He says this changes marketing: people used to find Vercel through a podcast like this one; now they go straight to "your AI buddy."
- AIs still ground themselves in search for fresh information, so he tells customers to keep ranking high and publishing good content.
- Content needs to change: people ask questions rather than type keywords. Vercel thinks "LLM first" in how it publishes, and FAQ-style content may help because it matches questions one to one.
- Agents need their own representation of a site: llms.txt is the static version, and MCP servers are the next evolution, letting agents talk to other agents.

## Building dev tools: two customers and the developer experience trade-off

- Vercel started from his pain bringing a cutting-edge site online: configuring cloud infrastructure from scratch and bridging tools and infrastructure (which led to Next.js). The test was always "I want to bring my idea online immediately."
- Strategy: developer experience as a Trojan horse for automating the cloud, rather than courses or certifications.
- He obsessed over the number of characters and steps between a user and the "a-ha" moment, down to creating a folder, creating a file, and exporting a first React component.
- Advice for dev tool founders: you have two customers, the developer and the developer's end user. Start from the end user and work backwards.
- Navigating the tension: a feature can delight developers (+10 happiness points) while leaving their users unhappy two quarters later. He got this wrong early, for example with extra config flags or relaxed operational limits like "unlimited" quotas, which hurt operational excellence.
- His exercise: visit a newly launched AI product as an end user, judge how it feels, then work back to what powers it.
- With AI, the customer is now also the agent the developer wields. He asks whether APIs should change to favor LLMs as users. Short, succinct APIs (like Stripe's dot notation) still matter, but LLM strengths and weaknesses will shape runtimes, languages, type checkers and frameworks.

## Agents: expert agents, synchronous vs asynchronous, and a separate entry point

- Framework: "virtual co-workers." Vercel will have virtual designers, marketers and developers. These are expert agents, and he expects millions, if not hundreds of millions of them.
- People start with broad tools (ChatGPT, Claude) then move to domain experts. Examples he cites among Vercel customers: OpenEvidence (healthcare, sourcing frontier data) and GC AI (legal).
- A digital-native company reinvented today would likely have an agentic interface rather than a SaaS dashboard.
- Two types: synchronous agents (ask and get an answer, like ChatGPT or an AI IDE) and asynchronous agents that work longer, collaborate with other agents and humans, and return an artifact such as a website, a pull request or a confirmation message. His example: tell an agent from bed to fix a problem and come back with a PR.
- Front ends still matter on both sides: the output artifact and the input, capturing attention with an ergonomic entry point.
- Agents are their own modality and are hard to merge into existing products. That is why Vercel created a separate app, v0.dev. He notes Google faces the same choice, hence "AI mode" sitting beside Maps and Images.
- Two classes of users: people building apps (conversational onboarding, v0) and people building platforms (experienced developers with GitHub repos, who use Vercel and roll up their sleeves). He compares v0 to Waymo: ideally no human operator, with an eject path to Cursor or VS Code if needed.
- He now uses v0 almost exclusively for his own coding because he is obsessed with time from idea to online.

## Making a company AI-native: prototype, product, then whole business

- His tweeted path: no AI, then an AI prototyping team, then an AI product team, then every company is an AI company, applying the lessons to the rest of the business.
- Support AI is the lowest-friction entry point for established companies. Vercel went further by building an expert model in its own technologies (Next.js, React, the web).
- v0 serves two roles: it feeds Vercel's support (vercel.com/help reuses that intelligence) and lets customers get access to the expertise of the CEO and CTO at scale, since Vercel has over 100,000 customers and cannot offer broad professional services. He calls AI a "human amplifier" and a "token factory" for the business.
- Next: apply AI to firewall, security and observability. Instead of reporting 500 errors, an agent opens a pull request with the fix.
- On self-driving infrastructure he says Vercel is "practically almost there." During a Google Cloud and Cloudflare outage, v0 could diagnose from logs and observability data which vendor was the cause.
- The payoff of the developer-experience work: if agents fall into the pits of success of the frameworks, you no longer have to convince developers.

## Generative, ephemeral software and security by construction

- The web went from static to dynamic, and now moves from dynamic to generative. Vercel's years of work on streaming and dynamic sites (like Amazon-style just-in-time recommendations) was repurposed through Fluid Compute for apps that stream from LLMs.
- He fights the idea that an app is a permanent thing. He criticizes the Mac DMG-and-drag-to-Applications ritual ("this is your puppy now") and the latency of app stores.
- He is "Team Web" and "Team Fully Generative Software forever": "Everything will be ephemeral." He now has an aversion to searching for software because generating it can beat the latency of finding and installing it. If generation keeps improving in quality, performance, security and reliability, installable and procured software is "an unwinnable battle."
- For developers this means building agentic platforms where each user may get an app generated on the fly, with v0 possibly becoming the generation engine.
- Security: he believes LLMs will produce code that is secure by construction, especially in safer languages like Rust and TypeScript, and that the next Heartbleed won't happen in a world of AI-written code. He cites an LLM-found Linux kernel use-after-free bug and Vercel's own evals of frontier models against a real vulnerability.
- v0 prevents about a thousand vulnerabilities per day (such as shipping database secrets in client-side code) compared with what the LLM would otherwise ship, because Vercel's infrastructure primitives let it guide generation.
- He wants QA agents that constantly test critical paths (sign up, buying, downloading), noting the AWS CTO's line that "everything is failing all of the time." He cites failed onboarding flows he hit while testing speech-to-text apps.
- Timeline: the biggest transformation of the web in about five years, perhaps three, with "kingdoms collapse" for companies that don't adapt and AI-native companies rising quickly.

## Mindset: few strong beliefs, clean slate, long-term view

- He encourages not holding too many strong beliefs. When people say "AI can't do this," he tries to be on the side of AI, because the situation changes in 3 to 9 months.
- He thinks from a clean slate: everything is up for grabs, including which tools a new startup procures first. He picks on chat apps as likely to be disrupted.
- Habit: most weekends he starts something from scratch on Vercel, to dogfood the platform and ask what friction can still be removed from idea to application.
- He calls AI "underhyped": even if progress froze, the value and number of entrepreneurs building would be huge, and it is a platform shift that requires rewiring your brain. He values AI as a place to ask any question without embarrassment.
- He takes such a long-term view that little seems overhyped, since "all software will be AI."
- He says Vercel hires fast typists, and uses speech-to-text tools like Superwhisper and Wispr Flow himself.
