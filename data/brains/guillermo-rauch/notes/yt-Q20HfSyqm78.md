## Front-end-first development: design and engineering converge on the web

Guillermo argues the next decade of the web will be defined by products that are designed first. Designers and engineers with the right tools can craft new, personalized experiences. He frames design as "not a luxury, it's a necessity" and a starting point for how software gets built, not a layer applied at the end.

- The web's advantage is that it is open and free, so anyone can contribute.
- The best web products enable a deeper human connection: they remember your preferences, language, currency and past visits, and the UI is regenerated dynamically for you.
- He cites Amazon and Google as examples. They built heavy invisible infrastructure first (AWS, distributed systems, new databases), and that foundation now enables personalized, even generative-AI-driven, front ends.

## Why he treats the front end as the starting point (the "front-end cloud")

Guillermo says the industry over-indexed on invisible engineering (databases, devops, cloud infra) relative to design. That investment was necessary, but it is now a foundation to build on, not something to rebuild at the start of every project.

- Old order: start from algorithms, databases, cloud infra and devops. New order: "what can we innovate with in Figma, how do we test it with Next.js, how do we deploy it and put it in front of users."
- The "front-end cloud" starts with a framework (Next.js or Svelte), implements design intent, and deploys. You don't begin by provisioning AWS or Google Cloud.
- Inverting priorities gives free choice of backend. Either use off-the-shelf services over the network (Stripe, including Stripe Elements React components with your design layered on top), or connect existing legacy data systems (his example: an airline's decades-old database). Separating front and back end also lets you modernize old systems.
- Vercel converts framework code into serverless and CDN primitives automatically, piggybacking on the infrastructure investment.

## The business case: speed and conversion

Guillermo uses data to argue that prioritizing the front end pays off commercially.

- The old meme: Amazon found that 100 ms of added latency cost about 1% of sales (a desktop-era finding).
- A study Google commissioned with Deloitte on mobile found that a 100 ms improvement lifted conversion by 8%, across industries such as travel, luxury, fashion and marketing.
- Developer attention is also shifting: interest in monolithic, database-centric approaches is flattening while questions and tools gravitate to the front end.
- Starting front-end-first also supports accessibility, usability and a distinctive brand, versus the gray-background, blue-hyperlink sameness of early Amazon, Google and Craigslist.
- Consumer-facing payoff: a shift from a static to a dynamic web (infinite lists, ML-ranked video, viewport- and device-aware experiences, modals). He says you could "upgrade your infra all day long" without unlocking these.

## Components as the shared language between design and engineering

Guillermo calls React's component the pivotal point in his career. Before it, engineers talked about functions, methods, algorithms and data structures. After it, "let's create a component" mirrors the component concept in Figma, giving designers and engineers a common vocabulary and abstraction.

- Advice on design systems: conceive the design in Figma, then adopt a baseline headless component library (he names Radix and shadcn/ui) and adapt the design to it, rather than rediscovering accessibility, keyboard support and interaction details.
- He cites a quote from Rasmus Andersson about the engineering hours a Figma context menu took to perfect, and says every project otherwise reinvents UI foundations from scratch.
- Components must also render fast, or you lose the conversion benefits.
- With a rich, well-designed component library plus AI context, engineers can produce something "statistically good" quickly. He compares it to the CSS Zen Garden: fixed structure, many expressions. Designers can then comment, and the improvement cycle runs both ways between the two roles.

## Preview URLs and the Vercel toolbar: collaboration inside the real product

Guillermo's workflow thesis is to share a URL of the product, not a link to code, so non-engineers can review real work early. He says the URL is the web's "unreasonable advantage" over native apps (TestFlight, 300 MB downloads, files).

- Every git push yields a preview deployment URL (an "infinite number of parallel environments" that load instantly), so anyone can see what colleagues are working on instead of reading diffs and pull requests. "Seeing is believing."
- Real-world testing early: Safari typeface quirks, mobile web, in-app browsers (e.g. opening a link from Twitter), Chrome for iOS and Android, and real production infrastructure for performance (not a screenshot).
- He contrasts this with the caricature of an engineer who "goes into the woods for three months" and returns with a pull request. He prefers velocity (right direction) over raw speed, and says shipping to others' hands informs the next step.
- The toolbar adds comments attached to the actual rendered component node and DOM structure. If the component is changed or removed, the comment can auto-resolve.
- Comments can be filed in one click to Linear, and become part of the CI/CD process: a non-engineer's critical comment can block merging the PR. This is his example of inviting non-engineers into building real software.
- Comments work across branches and across product types, from blogs and marketing pages to dynamic apps. He notes TikTok mobile and ChatGPT are built with Next.js.

## Visual editing and draft mode: editing content in place

Guillermo describes making the live product editable while respecting where content really lives.

- Draft mode visualizes which parts of a page came from external data systems (headless CMS or APIs), lets you edit inline, and patches the change as a draft into the CMS.
- It is built on an open spec developed with Sanity. He likens it to luggage tags: every piece of text carries an invisible tag of the system that produced it, so the front-end renderer knows its source.
- Why click-through to the CMS is also needed at scale: companies don't know which CMS to log into, and real products run A/B tests (several headline permutations) and translations (e.g. 18 languages), so inline editing alone may not suffice.

## AI and where this is heading

Guillermo is optimistic about AI collapsing the gap between idea and shipped product, framed as removing obstacles between creativity and the real world.

- He wants AI to suggest transformations starting from the product itself, not only from the code editor. Ideas include visualizing a product's other states (feature flags, experiments) in parallel and suggesting changes back to the team.
- On text-to-product versus text-to-Figma: it may be easier to skip intermediate steps and go from text directly to the real rendered product, because the web holds so much data on headers and implementations. Text-to-Figma and Figma-to-front-end are also exciting.
- He values copilot-style output: not the fully baked solution but a quick path to the next step. His example is draft mode, visualizing an idea and continuing to code it.
- Generative AI must respect the abstractions in a code base, which makes it harder than making something look good.

## How Guillermo prioritizes delight and performance at Vercel

Asked how he prioritizes delightful moments (e.g. passwordless login), Guillermo says Vercel starts from what the customer needs at that moment and gets them to it fast.

- No spinners; log users in fast so the product remembers them. The Vercel AI SDK docs are personalized and include live components for prompt engineering from the documentation site.
- His aspiration is that websites and web applications merge into one dynamic experience. He treats a blog post, login screen, dashboard and data visualization the same way: render fast, personalize, stay true to the design system, delete everything unnecessary. His example: he received a pitch for a new homepage that was nearly empty, and said "great, let's start from there."
- Interaction speed matters beyond initial load. He cites Linear, where pressing enter applies an optimistic mutation without waiting on the cloud. He prioritizes initial load time, the speed of subsequent interactions, and feedback from as many people as possible.
- Vercel dogfoods its comments product to get feedback, including from prospective customers, on new experiences like login.
