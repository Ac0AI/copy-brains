## Series C framing: what Vercel is building and why

Guillermo announced a $102M Series C (June 23, 2021), following the Series B the previous December. He states the vision as: "a global realtime medium for both creators and consumers, where all friction and latency are eliminated." He names three uses of the money: build the SDK for the Web, lower the barrier of entry, and focus on the end-user.

## The Web has no SDK, so Next.js is the starting point

- Guillermo points out that, unlike other software platforms, the Web never shipped with an SDK or Standard Development Kit.
- New browser APIs keep arriving, but the developer still has to assemble them into an "engine" for every new project.
- He sees the resulting diversity of tools as what makes the Web innovative and dynamic. He also sees it as a major obstacle when companies rush to reinvent themselves digitally.
- Next.js is positioned as the meaningful starting point for building great pages, open sourcing "the lessons learned from the giants of the Web" (he cites Next.js 11's conformance work).
- He notes Next.js grew organically, as developers explained and recommended it to one another.

## React as a durable building block

- React was then 8 years old. Guillermo calls it "a durable abstraction and building block."
- He calls its longevity "a narrative violation of the common wisdom that 'frontend frameworks are changed every week.'"
- Next.js is built on that foundation rather than on a new rendering paradigm.

## Lowering the barrier to contribute

- Vercel already gave developers global infrastructure to deploy and scale frontend projects. Guillermo lists remaining collaboration friction:
  - Setting up and maintaining your developer environment
  - Integrating it into Git for continuous integration
  - Manually pushing and waiting to share progress with your team
- His view: the Web is not a read-only medium. "Each Web browser is simultaneously the consumption and creation mechanism."
- Product response: Next.js Live, meant to let everyone contribute to the Web, whether pitching an idea or an edit, as an experienced developer or a new designer, from a local editor or the browser itself.

## A platform company has two users

- Guillermo argues a platform and tooling company has two users, acknowledged or not:
  1. The user of the tool (the developer)
  2. The user of the output of the tool (the end customer)
- However many downloads Next.js gets and however delightful the dev experience, "the customer is king."
- Stated fitness function: "Our primary fitness function is your success for your customers."
- Goal: visitors may not know how a page is built, but if it is delightful and fast, "they ought to think it was powered by Vercel."

## End-user performance is designed in

Guillermo's examples of end-user performance baked into products:

- **Next.js origin:** born from the insight that React as a Single Page Application put rendering burden on the user's device that should have been on the server.
- **Vercel Analytics:** prioritizes a Real Experience Score calculated per device, rather than listing traffic stats or TTFB latencies.
- **Pre-rendering** at build time or via Incremental Static Regeneration: takes CPU cycles out of the page-serving equation entirely, removing latency for the end user.
