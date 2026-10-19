## Next.js 16: Turbopack, defaults and what the app router bets taught him

- **Adoption:** Next.js went from about 7 million downloads per week a year earlier to 13 million per week ("nearly double the adoption in just one year").
- **Turbopack is the default in Next.js 16.** Guillermo says it already drove more than half of all Next.js 15 dev sessions, with over half a million developers using it weekly.
- **Test suite:** reaching default meant passing the existing suite of 8,266 tests, then proving it on Vercel's own internal sites for production builds.
- **Webpack stays:** "We are shipping both." He cites backwards compatibility.
- **Benchmarks vs Webpack:** up to 7x faster production builds, up to 3.2x faster initial dev load, up to 70x faster HMR updates.
- **File system caching for dev** is in beta. It extends Turbopack's in-memory task tracking across full server restarts. A production-build version is already being worked on.
- **Why speed matters for agents:** when he first saw single-digit-millisecond fast refresh, the doubt was that a human can't tell under 100ms. His answer: "for an agent loop, every millisecond counts."

## Bets that paid off vs the one that didn't

Guillermo reviewed the app router "portfolio": server components, server actions, file system routing, Turbopack and caching.

- **Server components:** a novel, unproven architecture when adopted. Now Vite, React Router, Redwood SDK, Waku and Parcel have adopted it, TanStack Start is integrating it, and Svelte is moving more rendering to the server. "The server is so back."
- **Server actions:** with RSCs they give Next.js first-class APIs for both data reads and writes, which the pages router never had.
- **Routing:** layouts persist across navigations, avoiding unnecessary renders and keeping ephemeral state. Parallel and intercepting routes support advanced patterns, and file system conventions keep each screen's UI, data and logic together.
- **What didn't pay off:** caching. Trying to marry static rendering with nested layouts produced "confusing APIs and unpredictable behavior." He says `fetch` cache no-store and `export const dynamic = force-static` "give me a little bit of PTSD", because they created implicit coupling and "spooky action at a distance."

## Design principle: composition and co-location

- The winning features share two traits: composition and co-location, which let developers "reason locally." Server components let any component fetch data, where `getServerSideProps` was restricted to the page module.
- Caching failed because it spans CDNs, Redis, `cache-control`, TTL and `vary`, so it always felt separate from React rather than "another Lego brick."
- RSCs pulled server-side rendering and API routes into the component boundary. `use cache` pulls caching in too.
- "Composition wins over separation of technology every single time."

## Designing for LLMs and agents

- Models are now a design constraint: "An LLM's context window is even shorter than a human's attention span. So, if we make an API that's confusing for anyone in this room, the LLMs stand no chance."
- Rule of thumb: "The easier we make the developer experience for humans, the better we make it for agents."
- Composition and co-location also suit LLMs. His examples are React with Tailwind, shadcn, and Next pages with server and client logic in one file.
- Writing code has moved from by hand, to suggestions, to models, to agents that "author, test, execute, and ship entire features."
- **Next.js evals:** Vercel is open-sourcing a public benchmark of how well coding agents build with Next.js. His pitch: "The better AI gets at Next.js, the better everyone's developer experience will become." He invites AI companies to collaborate, partly to stop models using old APIs ("You're absolutely right" followed by outdated code).

## Cache components and partial pre-rendering

Presented by Sam (Next.js team) as the answer to Guillermo's caching problem; Guillermo introduces the direction but the feature detail is the team's.

- Cache components (`use cache`) make partial pre-rendering the single rendering mode, with explicit caching at the component level. Guillermo frames it as bringing caching into the component boundary.
- The goal is to keep the server-first model while restoring instant client navigations.
- It is opt-in in Next.js 16, with guides and migration paths promised.

## Open platform: Build Deployment Adapters API

Presented by Jimmy (Next.js and Turbopack lead). Guillermo's framing is the Vercel-side strategy.

- Vercel acknowledges the lock-in perception: "a lot of people claimed it was by design", though lock-in was never intended.
- The Build Deployment Adapters API is a versioned, documented contract between Next.js and the host platform. It is in alpha.
- Vercel uses the same API for its own adapter, "with the same rules we're imposing to our partners."
- The same test suite used to validate Next.js on Vercel is shared so users can verify any platform.
- A working group formed earlier in the year with AWS, Cloudflare, Firebase, Netlify and OpenNext shaped the RFC.
- Cache components also let Vercel serve the static shell from the CDN and stream dynamic content from the origin, "composing it over space." Everything works the same on a $5 Hetzner VPS.
