## Vercel is frontend focused

Guillermo argues the most customer-obsessive way to build a web product is to focus on the frontend.

- Every customer interaction passes through the frontend: first contact with the brand, every purchase, signup, article and form submission. Each one is a chance to "impress, delight, perform, be accessible and memorable."
- He borrows from Jeff Bezos' Day 1 letter: "obsessive customer focus is by far the most protective of Day 1 vitality."
- Frontend is where technological and artistic differentiation lives. Backend is becoming "increasingly commoditized, turnkey and undifferentiated," whereas it used to be built entirely from scratch.
- Vercel's customer focus is a double challenge: delight the developer, and give them the platform to delight their own customer.

## Zero configuration and defaults that serve end users

- Next.js pioneered zero configuration in the React space, so developers can focus on their product.
- It was not only developer experience. Next.js shipped preconfigured essentials for users: out-of-the-box server rendering for fast page boots and SEO, code splitting, production bundle optimization and minification.
- Guillermo's point: a better developer experience, backed by good defaults, lets frontend developers succeed in production.
- Cited proof: Next.js powers Apple and TikTok.com.

## Hybrid rendering and incremental adoption

- Being customer focused means not being dogmatic: "meeting the customer where they are" and enabling incremental adoption of new technology.
- Four years before the post, Next.js made contrarian bets: multi-page over single-page apps, server rendering (SSR) over spinners, and dynamism everywhere rather than only on the client.
- Static site generation (SSG) later added the option of pre-rendering pages and caching them at the edge.
- His conclusion: pure server rendering was not enough and pure static (Jamstack) is not enough. Giving developers SSR and SSG "on a per-page basis" is what works.
- Next.js keeps evolving while maintaining backwards compatibility.

## Computing everywhere

- JavaScript runs everywhere: the build process (SSG), the origin (SSR), the edge and the client's device. Vercel embraces this "everywhere computing model" rather than "serverless."
- Flow: a Git push triggers a build, where frameworks like Next.js pre-render pages before any user requests them.
- The build can also output serverless functions alongside static assets, which run on demand for more personalization and dynamism.
- After the page boots, React adds interactivity, realtime data fetching and caching (he links SWR), and animation.
- Apps are pushed automatically to a global edge network with "no management, no overhead, no configuration and… really fast page loads."

## Realistic performance: Core Web Vitals over CDN latency

- A CDN is a key ingredient but "only represents a minor contribution" to a fast site. HTML download time from the edge is "just the tip of an entire iceberg."
- Backend teams can read p99 and p999 times from a dashboard. Frontend teams were tempted to say "my page loaded in 42ms" from CDN latency or PoP counts, which misses the real experience.
- Measuring frontend quality was hard because nobody knew what to measure. The breakthrough was Core Web Vitals from the W3C Web Performance Working Group and Google: LCP, CLS and FID. They capture how fast content appears, how little the page jitters, and how fast it reacts to input.
- These became a Google search ranking signal starting May 2021.
- Two strategies to prepare:
  - Austerity: drop chat widgets, analytics, ads, GDPR popups and all JS. He jokes you might as well shut down your business.
  - Address reality: for example, optimize oversized, slow images with the Next.js image component.
- Instead of relying only on synthetic Lighthouse tests, Vercel's built-in Analytics computes a "real experience score" from actual visitors' web vitals. Hashicorp uses it to hold itself to performance goals.

## Collaboration through preview deployments

- Development should not be confined to `localhost:3000`, bespoke VMs or a monolithic staging server.
- Every branch and PR, and every proposed content change, gets a shareable link served from the same serverless infrastructure as production.
- Clients, teammates "and robots" can visit it to give early feedback or report bugs.
- Decoupling frontend from backend lets non-coders contribute:
  - Marketing or technical writing teams: connect Next.js data fetching functions to a headless CMS.
  - Product teams: integrate a feature flagging system to decouple deploy from release.

## Openness and where Vercel goes next

- Next.js is the "lighthouse framework," but Vercel is designed to be completely agnostic to it.
- Capabilities any framework can use: pushing and updating static pages without rebuilding the whole site, previewing proposed data changes, serverless functions, image optimization and the analytics system. He names Svelte, Nuxt.js and Gridsome.
- Vercel's mantra until then: Develop → Preview → Ship. He commits to making it the most delightful process, with top performance at every step, computation everywhere, and help with the "iceberg of frontend complexity."
- Next step is adding "Iterate": a mindset of experimentation coupled with constant feedback, helping teams "discover what to develop next."

## Series B and business context (Dec 2020)

- Announced a $40M Series B led by GV, with Greenoaks, Bedrock, Geodesic and existing investors Accel and CRV. It followed the April 2020 Series A.
- In 2020 alone Vercel added Airbnb, The Washington Post, Trip Advisor, Scale and Hashicorp as flagship customers.
- He frames the post as seven tailwinds behind the acceleration: frontend focused, fast for everyone, hybrid, everywhere, realistic, collaborative and open.
