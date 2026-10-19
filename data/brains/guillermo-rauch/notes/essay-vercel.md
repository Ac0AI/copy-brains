## Vercel's thesis: the frontend is the new opportunity, and the workflow is the product

- Guillermo argues the backend has been "commoditized by cloud infrastructure, Kubernetes and off-the-shelf APIs," so the most interesting new modernization opportunities have shifted to the frontend.
- The frontend is where enterprises create products and content that attract users and drive revenue.
- Jamstack (JavaScript / APIs / Markup) lets the frontend split from the backend, so site development moves faster and independently. He cites Google, Facebook and Microsoft (Microsoft Docs is 100% Jamstack) as proof.
- Vercel's mission: "the ultimate workflow for developing, previewing, and shipping Jamstack sites."
- Accel's Dan Levine framed the opportunity as Vercel being "like AWS for frontend developers," with a designer and developer-first approach separating winners from losers across market categories.
- Announcement context: re-brand to Vercel plus $21M in funding from Accel, CRV and angels including Jordan Walke, Nat Friedman, Pete Hunt, Jessie Frazelle, Soleio and Naval Ravikant.

## Components are the right primitive for the frontend

- Demand for richer frontend experiences pushes teams toward component and design systems: "Your button should look the same on web, mobile and desktop, and even your emails."
- Guillermo notes people used to talk about selector engines and the DOM until React introduced the component primitive. Other frameworks define components, but React pioneered the trend.
- He, Tim Neutkens and Naoyuki Kanezawa co-created Next.js on the belief that React was powerful enough to be "the full engine for the frontend," so people could do everything with React rather than a single component.
- Product-positioning stance: Vercel aims to be the one-stop shop for any component-based technology a team adopts (Vue, Nuxt, Svelte, Angular, Glimmer), not just Next.js users.
- He frames Svelte and Vue as compelling frameworks attacking different problems, such as reducing client-side JavaScript, and says "Vercel as a platform wants to support them all."

## Deploy preview beats code review: URLs as the collaboration primitive

- Guillermo's diagnosis: the push-and-review workflow is too complicated. Teams burn cycles configuring CI/CD, setting up Jenkins, picking a CI vendor and a CDN vendor, and getting them to talk, "ensuring the Rube Goldberg apparatus stays coherent."
- Vercel's breakthrough was realizing the preview deploy URL is the superior abstraction. It works like a CMS preview, but is achieved by integrating with Git and deploying on every push.
- Benefits he lists:
  - Anyone (marketing, sales, legal, engineering) can review by receiving a URL over chat.
  - It redefines the whole process from idea to QA, because you test against the real thing.
  - It "eliminates the entire staging process."
- Every deploy URL gets automatic HTTPS via Let's Encrypt, so sharing is secure and testing happens in a production-like environment.
- Without SSL, teams find security warnings after deploying, and browsers disable modern features such as Bluetooth, webcam and microphone on non-SSL sites.
- His framing: "Sounds like a pretty basic evolution, but it tears down so much complexity and makes frontend teams so much faster!"

## Speed as the core value: performance for users and for teams

- Guillermo's claim: "If you're creating a modern frontend nothing matters more than great site performance for the user."
- Google Lighthouse scores measure frontend performance across multiple dials and strongly influence SEO ranking.
- Vercel's pitch is a global edge network and a perfect Lighthouse score out of the box on every deploy, without teams thinking about the CDN or serverless internals.
- Mechanics he describes: each URL deploys to every edge in the world, static assets are cached and compressed with top codecs (Brotli built in), and sites are optimized for performance metrics that are hard to test locally.
- Speed is also about the team: bring the developer experience closer to the cloud and make iteration "easy and fast by default."

## Positioning and going-to-market stance

- Narrative structure he uses: establish a market shift (backend commoditized, frontend is where value is), then name three megatrends the product is built around (components, preview URLs, speed).
- Open source as strategy: he calls the journey "open at its heart," pointing to Next.js, "much like the platform it builds on."
- Framework-agnostic distribution: supporting every component framework widens the funnel beyond Next.js adopters.
- Calls to action are simple: join the movement and follow the company on Twitter.
- Closing framing: "We are still in the early days of a new beginning for the Web. A Web that's faster for end-users and easier to build for developers."
