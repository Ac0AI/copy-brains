## Static hoisting: pushing computed results to the edge

Guillermo argues that Jamstack CDNs differ from "a server with a traditional CDN on top" because they can do more than host and cache static assets: they can **hoist** them. A traditional CDN treats the origin as "an opaque black box". A Jamstack network lets you push content directly to the network, and frameworks can be designed to exploit that.

## Hoisting as a compiler idea, applied to architecture

- In JavaScript, hoisting means declarations are moved to the top of a scope, so calling `b()` before it is defined still works.
- In compiler optimization, hoisting means code that is static or invariant is moved outside a loop. His example: in `sum[i] = i + (b + c)` inside a 100,000-iteration loop, `b + c` is loop-invariant, so an optimizing compiler moves it out and it behaves "as if you had written it outside of the loop yourself".
- He extends the same idea to architecture: Jamstack makes it possible to hoist the results of computation to the edge, right next to visitors.

## Pre-render as much as possible

- A core tenet of Jamstack is to "pre-render (pre-compute) as much as possible", which gave static site generation its prominence.
- The key shift: computation that would have happened later in the request's timeline moves to the build phase. It is performed once and shared by all users.

## Edge-aware frameworks: how Next.js does it

- Since Next.js 9, `next build` automatically outputs the optimal asset per page (entrypoint), via automatic static optimization.
- Next.js 9.3 refined the static-site generation hooks and introduced incremental static generation for appending pages. Next.js 9.5 made incremental static regeneration stable for updating them.
- He says Next.js makes hoisting the static parts of a site or app to the edge "a breeze". The output type depends on the data fetching strategy the developer uses:
  - ○ Static: automatically rendered as static HTML, with no initial props.
  - ● SSG: generated as static HTML plus JSON, using `getStaticProps`.
  - λ Lambda: server-side rendered at runtime, using `getInitialProps` or `getServerSideProps`.

## Worked example: how vercel.com is built

- The homepage, which he calls the company's "cover letter", is built statically as `index.html` and pushed to the edge "for maximum speed and reliability".
- `/api` functions are exported as serverless (lambda) functions, created by placing files in `./pages/api`.
- Blog posts are generated at build time by querying an API with static site generation hooks, so they are hoisted to the edge like the homepage. The build output showed `/blog/[post]` with about 100 paths.
- The dashboard is "super dynamic in nature", yet it is a static HTML page that fetches data securely from the client side using React Hooks (SWR).
- Takeaway: even a highly dynamic app can ship a static shell at the edge and fetch only the dynamic data on the client.

## The conclusion he draws

- CDNs and static hosts have existed for a long time, but only now can content be pushed to the network itself, with frameworks optimized for it.
- With optimizations like static asset hoisting, he says websites are "faster and more reliable than ever before".
- His recommended starting point for a Jamstack site or app: Next.js, deployed to the Vercel edge network.
