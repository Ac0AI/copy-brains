## Simplify first: the cloudup lesson behind Vercel

- At his first startup (edtech) Guillermo tried to "boil the ocean" with a very broad platform. Users kept latching onto one feature, file sharing used for lesson plans.
- He pivoted to cloudup: drag and drop a file or folder from the menu bar and get back a URL. The product was reliable, took 30 seconds to demo, and needed no storytelling.
- Folders of HTML files got fast static hosting. Cloudup was sold to Automattic (WordPress) in 2013, before it opened to the public.
- His takeaway is the "unreasonable effectiveness of URLs": a shareable link is embeddable anywhere. Vercel's preview URL for every change is the same idea, much as Google Docs did for word processing and Figma for design.
- On company building, he says focus matters most early, and it is easy to slowly let go and overbuild. Returning to the simplicity of cloudup is what produced the exit.

## How Vercel started: a founder's own pain, dogfooded

- As an early AWS user he loved the idea of hardware becoming software, but found that doing anything in the cloud was "so freaking hard".
- At WordPress he saw millions invested in hosting one application, wordpress.com, while every new app or feature stayed hard. The industry was moving from monoliths to microservices.
- He left to make deploying software "completely instantaneous" and give that power back to the developer. His rule was to dogfood from day one: build a tool he would use every day to improve itself.
- His first task was a company website with a production-grade stack, using React and a deployment platform on top of Kubernetes. Four weeks of struggling confirmed his hypothesis.
- If he struggled, he reasoned, the next 100,000 companies going through digital transformation would too, especially e-commerce players moving from brick and mortar.
- Selling to successful companies at WordPress gave him a view of highly qualified Enterprise buyers who have the capital to buy innovative technology.

## Next.js: a high bar, a customer zero, and a "seven principles" master plan

- In 2014 he wrote an essay, "the seven principles of Rich web applications", before he had any framework. He calls it a Tesla-style master plan for what became Next.js and Vercel.
- He reverse engineered how Google Search, Facebook and amazon.com were built. His bar was that Next.js should have no compromises: it could build a small website but also the next Amazon or Google. Most of his original code is now deleted, but the bar gave direction.
- He told himself he would put out a deployment platform prototype in 3 months, publicly, to get feedback.
- The platform needed a dynamic web app for logs and orchestration, so he started the framework internally (called N4) with the deployment platform as customer zero. He compares this to Rust, whose early customer zero was Mozilla's Servo rendering engine.
- React was "a great engine" that needed "a car". After about six months of internal use he open sourced it.
- It felt like an overnight success, he says, but it came after a long internal battle. He had been thinking about the principles for two years or more.

## Reading product-market fit signals

- Fast growth right out of the gate is a sign the product solves a huge pain, though it can be hard to see.
- A strong signal is that smart people at other companies are building the same thing. Right after launch, someone from Redfin reached out saying they were building it, and a week later Trulia did. Companies running businesses at scale were building or about to staff a version.
- He already had a following from MooTools, Socket.io and Bongo, so developers would look. The corresponding interest from large organizations is what made him "extremely bullish".
- Signals were mixed for a couple of years. Server rendering ran against the popular narrative of rendering everything on the client, and some developers preferred competing alternatives. He says he had to navigate the market and competition for quite a few years.

## Balancing developer experience and user experience

- He says "developer experience at all costs" doesn't work. Developers (himself included) sometimes choose what is easier for them at the expense of end users.
- Many developers assumed the user side would figure itself out. Years later it hadn't, and Next.js invested in a balance.
- He distinguishes a "simplistic" solution from a "simple" one. A project can promise the world on your laptop but ignore a million users, deployment and scaling. Real global systems are often in a partial state of constantly recovering.
- Internally he frames this as "day one versus day 1000": it has to be good at day one but never at the expense of day 1000, which has to be secure, debuggable and global.
- The opposite myth is that systems built for huge scale must be hard to use. He cites Redpanda: faster than Kafka, a single statically linked C++ binary, lower memory footprint, and no ZooKeeper, so it has both good DX and business value.

## Focus on the front end, and win through integrations

- His early deployment platform tried to deploy absolutely everything, so its complexity equalled the hardest thing deployable (his example was a Java Docker container needing 20 GB of memory).
- Their "finding ourselves" moment: their earliest customers and design partners were in e-commerce and storefronts. So they simplified to the frontend, building the "front-end cloud" instead of "the cloud".
- It resonated with customers because enterprises tune out vendors who promise to solve every problem. He says it's better to say what you do not solve and integrate with what they already bought. Enterprises buy about a thousand SaaS products on average, so "your strength can be in what you don't build".
- He underestimated the value of excellent integrations. Their GitHub and GitLab integrations took probably tens of thousands of developer hours of tuning. Users link a repo, and every commit builds and returns a URL.
- He warns that Founders fall into the trap of saying "please use our hosting too" instead of integrating.
- The frontend cloud's shift is from static to dynamic. Teams cache everything in a CDN under load or attack and lose personalization, even whether a user is logged in. Vercel offers an incremental path: modernize the front end and keep the back end.
- He says ChatGPT is built on Next.js, and that many generative AI companies bet on Vercel for dynamism.
- Services integrate by shipping a React component, the "Lego bricks for adults". Examples he gives: Clerk (auth), Frigade (product tours and onboarding), Resend (email).
- Backends were built first as foundations. Newer companies succeed by going higher up the stack, for example not making you rebuild your login screen for the thousandth time.

## From open source to business, and pricing

- His framework is to align the value creation of the open source project with that of the business behind it. Users want continuous investment (commit activity, green tests) and a bet that lasts 10 years.
- Business paths he lists: open core (limit features), licensing that constrains deployment, or an infrastructure business. Vercel took the infrastructure route, outsourcing "a team's worth of responsibility". A Japanese customer presented how many engineers moved from platform engineering to product engineering and data science.
- Open source is "the global Maxima": a company supporting it automates undifferentiated work, while the customer keeps the option to take the workload on-prem. He would do it the same way again and keep the product as free and available as possible.
- Pricing began with metering every infrastructure resource. It later expanded to a hybrid reflecting platform value beyond hosting: collaboration, pre-production, QA and iteration speed. He compares it to GitHub's value plus Snowflake's infrastructure value.
- Customers use it differently. Some use all of it, and some in highly regulated environments use Vercel only pre-production for faster iteration.

## Positioning, multi-product, and AI

- Early on, be relatable to what already exists. A lofty category name hurts a small team with three landing pages. He once told the team to change a landing page hero that made no sense, and Vercel's deployment history let them laugh at an oversimplified old version like "faster websites made easier".
- You earn the right to define a category later. Partners (Shopify headless, Algolia, CMS vendors) help by teaching their customers that their product makes sense with a front-end-as-a-service. Sales engineers use Vercel to demo their back ends.
- He cites Stripe: its first code snippet (curl and an API call) made it instantly understandable. Today the higher-level entry is often a React component, like a checkout, because back-end complexity has accumulated.
- Vercel's products: managed infrastructure, the DX platform (iteration speed, even for on-prem users), and v0, which he calls "generative UI". v0 turns a plain-English prompt into React and Tailwind code with taste and accessibility.
- v0's catalyst was noticing developers still spend lots of time copying and pasting. Frontend quality is judged visually, so he says code is becoming less interesting.
- On AI: it is an accelerator of human potential. He frames it as removing tedium.
- His product heuristics:
  - Anytime you start from blank (an email reply, a support ticket), give the user a starting draft.
  - Help users before they file a support case, with co-pilots and contextual docs.
  - Anytime you show an error, suggest the solution.
  - Quoting Elon, "all user input is error"; ask whether the input was necessary.
- Domain-expert AI beats general chatbots. He cites finance reporting tool thin tool.com and a legal AI proof of concept for redlining. He doesn't think chat text will be the only interaction mode.
- He predicts that in 10 to 20 years engineers write very little code by hand, much like not thinking about compiler instructions today. Engineers shift toward creativity, curation and feedback, and AI helps legacy customers migrate incrementally.

## Advice: velocity, saying no, raising the bar

- Focus on iteration velocity, not speed. Velocity is speed with a direction. Sometimes the answer is to build less, or to talk to a prospect and find their real pain.
- Customers can be too nice, so do the work to discover what is behind feedback or a metric that isn't moving.
- Say no to more things. When launching Next.js he launched two other successful open source projects at once and says there was no need. Seven years later he is still improving Next.js.
- He invokes Steve Jobs: saying no "has to hurt" because the ideas you turn down are genuinely interesting.
- Be honest with yourself and the team about whether you meet the quality bar and iteration velocity you are chasing. "We're here to raise the bar", especially leaders.
