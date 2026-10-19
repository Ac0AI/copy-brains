## Static sites as the default, with servers moved off the hot path

Guillermo argues that in 2019 the JAMstack (client-side JavaScript, APIs, Markup) kept growing, and that his favorite part is the assumption that markup is static. His case for static:
- **Globally fast:** deploy hoists all static assets to a global CDN. Removing the server also maximizes availability by cutting or eliminating cache misses.
- **Consistently fast:** "O(1) TTFB", meaning stable, predictable latency to the first byte, because no code, servers, sockets or databases are involved.
- **Always online:** servers go down and need complex rollouts, while static files are trivially cacheable. The odds of being paged over a static asset a CDN can't serve are "basically zero".
- **Faster and safer to roll:** no pods to rotate, containers to shut down, signals to handle or liveness probes to configure.
- **More secure:** serving the same markup and code to all users gives a drastically simpler security model.

On dynamic needs, he says servers "are not going away, but they are moving around and hiding."
- **Static Site Generation** moves servers off the hot path by computing the response ahead of time. Anything that could go wrong goes wrong at build time (availability), you compute once and reuse (less database/API load), and the HTML is fast.
- **Client-side JS and APIs** run later and allow "effectively infinite dynamism".
- When the set of pages is too large to pre-compute at build time, he suggests pre-computing the most critical public pages and doing the rest asynchronously.

## Next.js in 2019: a hybrid framework with per-page granularity

Guillermo says Next.js grew to power Hulu, Tencent News, Twitch, AT&T and Auth0. He credits its all-in-one coverage of JAMstack, from a static landing page to very large sites to fully dynamic apps.

- The "secret sauce" is the simple `pages/` system, inspired by `cgi-bin` and throwing `.php` files in an FTP webroot. A page is just a React component; the simplest app is `pages/index.js` serving `/`.
- 2019 additions:
  - Dynamic path segments such as `pages/r/[subreddit].js`, with no configuration or custom server.
  - Pages with no server-side data props build to plain static `.html`.
  - Static data props fetch data at build time and "explode" dynamic path segments into many discrete pages.
  - `pages/api/myApi.js` defines a serverless function, most likely a JSON API.
- Mapping to the stack: J is client-side JS via React Hooks, A is `pages/api`, M is pages with no data dependencies or with static data deps.
- He stresses being "uncompromising" about backwards-compatibility: SSR is still fully supported and "no apps have been harmed".

## Deploy previews, the deploy URL and testing against the real thing

Guillermo says Vercel's goal is to let teams instantly build and deploy JAMstack sites with no servers or infra to configure. Deploying anything from a bare `index.html` to Next.js, Gatsby or Gridsome starts with one command, `vc`, which returns a preview URL. The platform bundles CI/CD and a global CDN.

- **From code review to deployment preview:** he sees a transition away from code review toward preview. Code review (especially speedy review) still matters, "but nothing beats teams collaborating by sharing URLs to the actual sites that are being worked on."
- With the Git integration, every `git push` gets its own live deployment URL. The model makes deployments "orders of magnitude faster" to build, deploy and serve than servers or containers.
- **The deploy URL as center of gravity:** each preview is a real, production-like environment, so instead of mocking assumptions you test "the real thing". The most natural e2e test is visiting the URL and sharing it with customers, co-workers and your manager.
- The GitHub app does not just register a "Check" like other CI providers; it says "this is a deployment, here is the URL". Checks then run in parallel against that URL:
  - Browser testing of user journeys
  - Screenshot testing to prevent visual regressions
  - HTTP assertion testing of APIs and pages
  - Manual QA with designated reviewers who approve the PR

## Reliability: flaky tests, microservices and "everything is code"

- **Flaky tests mean flaky UX:** developers are too quick to blame tools and press restart. The question to ask is what if it had been a customer instead of an automated test: would they have had a flaky experience, and would it be OK to tell them to press F5?
- **Serverless means infrastructure that upgrades itself:** his preferred defining trait. It covers OS upgrades, OpenSSL patches and Node.js runtime bumps, and is especially valuable for databases, where he is glad not to deal with upgrading stateful infrastructure.
- **Microservices increase complexity and reduce availability:** splitting into services removes guarantees the compiler or runtime gave a unit, turning it into a distributed system, and an extra network hop can only make things worse. Citing Kevin Mahoney's example, if C depends on A (0.8) and B (0.95), C averages 0.8 × 0.95 = 0.76, with a worst case of 0.75.
- His remedy is to make serverless functions "monolithic": statically bind each function's dependencies (Next.js API routes and the Go compiler do this) and avoid unneeded service hops.
- **Everything is code:** apply a config change the way you'd ship code. Review it, roll it gradually, and "mistrust it, just like you mistrust code."
- **All code is wrong:** assume most of it is. He endorses "if it's not fast and reliable, then it is wrong". Slowness is an off smell that makes users doubt the product, quoting Craig Mod: "Speed can be a good proxy for general engineering quality."

## What "native" means, and building cross-platform apps

Guillermo says the word "native" has always bothered him, since people agree native apps are optimal but not on what native is. He proposes: "an app that behaves to the quality standards of the platform it's deployed to", which he calls platform fidelity rather than native code.

- That explains Electron's success: a well-engineered Electron app (he cites Slack's rewrite) delivers native fidelity regardless of language.
- Platform fidelity requires access to platform APIs, which makes mobile web "apps" a non-starter, especially on iOS Safari. He says this has nothing to do with performance or JS and HTML, but with being unable to deliver what a real app can do on the platform. One example he gives is the dynamic viewport that shifts as toolbars appear and disappear.
- React Native can reach full platform fidelity, with good performance via solid engineering (he cites Discord) and no API constraints. Like Electron it offers one development experience, a universal language, shared modules and components, seamless updates, faster deployments and iOS plus Android support.
- On SwiftUI: it is exciting, but RN, like Electron, "has a tremendous economic advantage".
- He suspects native mobile apps' performance comes less from native code generation and more from a rich standard library of well-optimized UI components. He draws the same parallel with Go's stdlib versus Node.js plus npm.

## Product design lessons: settings, inputs, demos and speed

- **Settings are for successful products:** great products usually start with a dead simple onboarding that minimizes or eliminates options. His rule for startups and product management is to "absolutely resist adding options until substantial evidence of success without them exists."
- **Inputs should look like inputs:** he cites a study of 600 participants, 2 designers and 1 researcher confirming this, and points out that Google does it too.
- **Notion as the fanciest data structure:** quoting Joel Spolsky that "the great horizontal killer applications are actually just fancy data structures", he explains why he fell in love with Notion in 2019.
  - Its structure is a mutable, realtime graph of documents made of known blocks.
  - The key ingredient is direct manipulation, which requires the topology to be "completely transparent and obvious to the end user".
  - The sidebar exposes the document graph as trees you arrange yourself, and block types are trivial to create, edit, rearrange and combine.
- **Get busy demoing:** he marvels at the "product-improving and life-improving power" of frequent demos, noting they were essential to creating the iPhone. His advice: "Don't be afraid to ~~fail~~ demo."
- **Game engineering as inspiration:** React drew on how game engines get rendering performance. From a talk on Marvel's Spider-Man, he highlights careful planning around the platform's well-understood limits. Web tooling mostly only suggests limits (webpack warnings, Lighthouse and WebPageTest scores, Google rankings, the Amazon 100ms rule), whereas AMP is a systematic answer where slow experiences are very hard to create. He is optimistic about Chrome's Never-Slow Mode as a more general version.

## Trends Guillermo bets on: NoCode/LowCode, WebAssembly, QUIC and team velocity

- **NoCode and LowCode are real:** the less code you write, the easier it is to maintain and the less likely it is wrong. He cites Next.js, SWR and zero-config deployments as examples. SWR in particular: "What you do in one line of SWR, you tend to do in a few dozen lines of Redux."
- He expects LowCode tools (React, Vue, Svelte) to keep gaining traction by making it succinct to share UI and behavior as components or hooks. He also expects visual tools to rise that bring those primitives together, including reusable components from a canonical system or a global shared library, and predicts the two camps will collide.
- **WebAssembly:** with sandboxing disabled it can match 95% of native code speed, better than he anticipated.
- **QUIC (HTTP/3):** Uber deployed it at scale and saw a 50 percent latency reduction from the 50th to the 99th percentile.
- **Shared CDN caches are dead:** browsers partitioning caches busts the idea of sharing React or jQuery via a common CDN URL.
- **Team speed over individual speed:** he endorses Google's open-sourced engineering practices: "optimize for the speed at which a team of developers can produce a product together," rather than individual coding speed, with an emphasis on speedy code review.
- **Zoom:** it went public, and its differentiator was that it "works better".
