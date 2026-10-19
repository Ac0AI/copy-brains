## Why Vercel went from a general deploy platform to a focused front-end cloud

- Guillermo started Vercel to democratize web quality at the level of Meta, Google and Amazon. In his words, the cloud "felt like you needed a PhD" and open source tools like Kubernetes and React took months to assemble.
- His first mistake was being too general. The company "was trying to deploy everything under the sun." It started working when he focused on the front end, where his expertise lay.
- His rule: "Being a jack-of-all-trades doesn't work in this world. Both developers and the most discerning enterprises just want the best product in the category."
- He calls it dominating a niche. Be world-class at one thing first, then expand outward.
- Many founders think the first version of the product has to match the size of their ambition. Vercel's ambition was to disrupt all applications, but it started "world-class and small."

## Expanding by letting customers pull product out of you

- Guillermo says he "had it upside-down in the beginning" and thought he had to give developers everything.
- His better approach is "to establish a dance with a customer." Give them enough that they love the product, and then "they should be the ones pulling product out of you."
- Developers kept asking for a database and more back end on Vercel. For years his answer was "we're not ready yet." Now Vercel is ready, and he describes the shift as going from a front-end cloud to a developer cloud.
- Next.js stayed tightly coupled to the business for the first 6-7 years. Vercel also supports other front-end frameworks, such as Svelte, used by Logitech and IKEA.

## Open source framework plus paid infrastructure: how the business model works

- Next.js has no direct revenue. Guillermo says he never considered doing it differently: "Open source for me has always been my life," and a proprietary framework "just doesn't make sense."
- Vercel gives away the programming model (Next.js) and charges for the heavy lifting of running it: global infrastructure, security, DDoS mitigation, and staying up through traffic spikes.
- He argues open source hits diminishing returns on infrastructure. Most of that engineering is operational (monitoring, upgrades, rolling systems, staging), and "Vercel doesn't need to be open source."
- His principle is "infrastructure has to be an output of the application." Most companies start from the infrastructure, and Vercel inverts that.
- The comparables he cites are GitHub (URLs to code), Databricks (open source Spark plus a highly optimized cloud engine) and Snowflake and Datadog. Pricing follows usage: a small app pays little, and an app that takes over the world pays more.
- The AI SDK follows the same pattern: open source, no direct business model, and growth from about 100,000 to almost 1 million weekly downloads in about a year. The goals are developer adoption, feedback, brand and learning, with the bet that people deploying later will choose Vercel.

## Preview URLs as a collaboration feature

- He built Vercel around "keystroke to live application," measured in milliseconds. He wanted to cut a weeks-long process to a developer running `git push`.
- Every Git branch automatically gets an ephemeral, secure preview URL. He says he underestimated how valuable this would be: companies value even more the ability for developers to collaborate with everyone else in the organization.
- Preview URLs let you test on a phone before shipping. One ecommerce customer has 90% mobile traffic and uses the URLs to "have the developers face reality."
- His example of the alternative: a large bank still schedules 12-person meetings so one person can screen share a feature.

## How v0 grew and why it changed Vercel's funnel

- v0 turns English prompts into working web apps. He describes it as "not code first. It's code last."
- It launched as a research preview in September 2023. It took 10 months to reach $1M ARR, then 14 days to $2M, then 20 more days to $4M. He says he has never seen a trajectory like it and that it was making hyperscalers run out of GPU capacity in their largest regions.
- It is a "startup within a startup," built by a team of fewer than 10 people, entirely on the public Vercel platform. Guillermo checks that the team is "not allowed to cheat" by asking infra for special provisioning, which proves the platform has "no graduation risk" (customers outgrowing it).
- v0 widens the top of the funnel from a couple of million developers to potentially hundreds of millions of people. Signups are "through the roof" and application creation has roughly quadrupled.
- v0 output beat his own hand-built personal blog on responsiveness and accessibility.
- v0 is not a new foundation model. It combines state-of-the-art models with evals, benchmarks, prompts, RAG and AI-tailored design systems. This encodes the Next.js and React teams' preference data and taste, which lets him "scale myself" instead of sending experts to every company.
- His prediction is that Vercel's expertise will be exported through AI, and other companies will build their own "v0 for X" (CAD, email, medicine) using the AI SDK.

## Using v0 in sales and as a collaboration link

- Sales reps screenshot a prospect's legacy website, drop it into v0, and show a high-performance rebuild during the call. It replaces a "trust me bro" pitch.
- He says this shortens sales cycles and raises customer trust and delight.
- Customers now collaborate by sharing v0 links rather than documents or words. This extends his earlier aim of making people collaborate through links.
- v0 also makes migrating legacy frameworks to Next.js easier, which removes a sales hurdle (customers who want to move but cannot spare dev time).

## Security and enterprise trust

- Vercel's rule is zero configuration and secure by default. Because it hosts the application, it has to filter out 100% of malicious traffic instantly, unlike a pure CDN that only filters.
- He credits crypto customers (Solana, large NFT companies) with forcing Vercel to harden security and DDoS mitigation. Vercel responds within seconds, while he says competitors sometimes take minutes.
- Whenever a new technology wave arrives (crypto, AI), startups tend to build on Vercel, and that is also how it enters large enterprises: they acquire the disruptor. A shared Next.js and React stack speeds integration: "you copy-and-paste some files into another repository."
- As of this conversation: $100M annualized revenue in May 2024, 80% year-over-year growth, developer usage more than doubled over the past year, and about 550 employees.

## How he runs the company as a technical CEO

- He believes CEOs, especially technical ones, "can and should be involved in every aspect of the business," including closing deals, sales compensation, roadmap and pricing.
- He stays informed by using the product himself (v0, Vercel), talking to customers and the developer community, and hiring people with technical backgrounds who have used Vercel. Executives are expected to understand the customer and product deeply, so no time goes to briefings.
- His role with executives is "the bridge to reality": bring customer stories, give high-quality feedback, and require that "you have to be able to use our product to demo our product."
- His principle: "as a CEO you have to understand." Delegating with confidence comes from understanding, not from outsourcing the labor.
- He sees companies becoming more transparent and optimizing information flow rather than creating silos.
- He expects smaller teams: more products, reaching more people, built by fewer people, as AI writes code and infrastructure is abstracted. He says the "marginal cost of software production goes to zero," and cites Open Operator, built by a Vercel customer within 24 hours of OpenAI's Operator launch using v0, cloud browser infrastructure and open models.
