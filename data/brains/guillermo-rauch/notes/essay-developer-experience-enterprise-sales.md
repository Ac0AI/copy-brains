## Developer love gets him in, enterprise needs keep him there

- Guillermo built Vercel's approach on open source Next.js, then asked what a company needs to pay for on top of the framework: a platform, collaboration workflow, and enterprise features.
- Next.js was designed by borrowing from the largest sites on the internet. He started with server rendering, "what google.com was doing for search and what facebook.com was doing for newsfeed."
- Vercel's pitch spans three phases: develop (open source Next.js), preview (a URL for every change or code push, for team feedback), and ship (an edge network that automates cloud infrastructure).
- He says the real-time feedback loop has been the throughline since launch: changes appear in the browser without a refresh, now targeting around 10 milliseconds from keystroke to screen.
- Browser-based development (Next.js Live) lets anyone be hyperlinked into editing a project collaboratively in single-digit seconds, instead of losing a day or weeks to environment setup. He doesn't expect developers to work only in the browser, but says quick copy changes and pair debugging suit it.

## Growing past self-serve signups into enterprise

- He says he used to be obsessed with thousands of signups, then started caring what people were using the technology for. He didn't want it to stay a tool for quick tests or side projects.
- Self-serve interest was growing and working. He chose to look at the early experiments inside large companies and ask how to grow them "into much more than just a handful of developers being excited."
- The shift in thinking: beyond making things fast for developers, arm developers with "features, substantiations, materials, documentation, integrations, and workflows that the rest of the company needs" to turn an experiment into "the lifeline of the company."
- Customers named in the conversation include the Washington Post, Airbnb, IBM, Staples, McDonald's, and the Grammys (Vercel hosted the 2022 Grammys, a couple of years after its first paid customers).
- He frames enterprise as mission-aligned. Vercel's goal is to make the web faster for developers and end users, and "without that enterprise arm, I think we would be leaving a lot of business on the table."
- Enterprise rollout also drives seat expansion. Without it, a product "might get stuck at just one team within a company."

## Think two layers past the developer who adopts you

- His advice to tool founders: your early adopter is a developer, but that developer has stakeholders and users beyond them. "If you just think one layer in you're going to get stuck." Think one layer in, then two layers deeper.
- Imagine those conversations and requirements, and then simply ask: what does your company need to use more of the product?
- He says to talk to procurement, the security questionnaire owners and the CSO, "even if they're not yet even buying your product." Knowing their questions and concerns gives "the right frame to build scalable products in the future."
- Developers stay valuable as advocates. Executives turn to developers and ask what will make them happy and what the company should buy.

## Building sales: start from customer success, then add account executives

- Vercel's sales function grew out of customer success, not the other way around. It started with the support team and a recognition that customers fall into categories with different levels of "demand/anxiety/tolerance for failure."
- Some customers need to know every possible roadmap direction, ask detailed questions constantly, and want priority in the queue when stuck. The support team guided companies through successfully rolling out the technology.
- The first account executives came next. Their job was to help companies understand the landscape, compare offerings, and see why Vercel is the better long-term partner, which meant selling more of the vision of where Vercel will be.
- He rolled this out slowly so the team could learn what worked. Vercel hired its first CRO and developed customer success and sales together, using those conversations to find gaps in documentation and in how customers are serviced.
- Why a sales motion matters: some companies "will just not even entertain the technology if they cannot talk to sales." Developers may avoid sales, but the company as a whole wants to know who it's partnering with.
- Enterprises also want more predictable pricing than serverless usage-based models offer, and they want a person on the phone for when they have issues or "need to make my next big step."

## Selling features that don't exist yet

- Before SSO, Vercel had already landed many enterprise customers. He says demand was strong enough that his team worked with customers' security teams and internal champions to align roadmaps.
- The pitch was candid: "You really need our product. We've made it really secure. We have a lot of the foundations... But we do recognize that the SSO feature is missing." He told customers the partnership with WorkOS was coming, and offered to work on it together.
- He says roadmap conversations with enterprises are often this kind of close collaboration. He had assumed Vercel would just ship products from its R&D labs and "lead the way."
- Looking back, he says Vercel "could have done even more business" had it partnered with WorkOS earlier. Customers who compared the SSO onboarding to other tools' integrations loved it.
- He argues enterprise features offer room for delight too. "It's not just all like real time react components. It's also delighting all the other stakeholders."

## Reconciling developer-led and enterprise buyers

- He describes two buyers with opposite preferences: developers want self-serve and usage-based pricing, while enterprise buyers want predictability and a phone call. Vercel runs one motion for the scalable, bigger customer.
- Security and SSO are a "clean differentiator" of which bucket a customer falls into. Corporate security was a top-three priority for Vercel's own security team once the company passed 100 people.
- Enterprise deals move slower than a developer picking up a product they like that day, but "the impact just goes up dramatically." He cites doing tens of billions of requests a week as the leverage Vercel brings to its own providers.
- Enterprises evaluate guarantees "years down the line," including security and infrastructure. Developers pick whatever solves the immediate situation.
- On the risk of drifting from developer experience (he cites Heroku's website as an example others have drifted), he acknowledges the tension: a more secure system can add friction. He is "confident that we can still retain an excellent DX over time while we have a successful enterprise business."
- His reasoning: enterprises increasingly buy developer experience too, since they want teams to enjoy daily tooling. He points to Stripe, which made developer productivity a focus of its go-to-market and educated the enterprise world about its value.

## Enterprise roadmap: security, access control and isolation

- Security is his top enterprise priority. Vercel sits at the entry point for healthcare providers, fintech, multimedia companies and e-commerce stores, so enterprises need a lot to succeed at scale.
- Investments named: role-based access control, more granular controls, and corporate identity and access management.
- He wants to give security teams a way to understand the system from the outside: data flows, activity, auditing, and what endpoints exist and what data flows through them. The aim is "to lead with great solutions rather than try to be reactive to security questionnaires."
- Supply chain attacks are a concern for customers anxious about what gets deployed. Role-based access control helps companies see and control what ships to their ".com" sites. He notes the platform was conceived so everyone can make changes instantly, and says the two worlds can be reconciled.
- Isolation is the longer-term goal: Vercel as a company's own developer platform with full control in isolation from others. Vercel is massively multi-tenant at ingress, but he sees ways to isolate workloads and give enterprises more ownership.

## What he'd tell his past self

- Be aware of your taxonomy and schema early. He cites a joke tweet: if you sell guitars, don't name the table "guitars," because you may sell drums later. Call it "items," then "sellable things," because you may sell services.
- Learning your future requirements (for example from podcasts like this) doesn't mean obsessing over them, but you can lay basic infrastructure from the start.
- Take security seriously early. He gives the example of a company with a centralized identity provider from the start, which can grow from 100 to 200 to 500 people "and not have to like deal with like five different IDP systems."
- Use vendors that provide enterprise features out of the box rather than reinventing them. He says most startups and internet companies "have a long way to go on this security space."
