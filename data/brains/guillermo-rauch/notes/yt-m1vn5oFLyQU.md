## Starting from a narrow wedge, then sequencing the product

- Guillermo says there is no universal truth on whether great products are "deceptively simple." It depends on stage and market.
- Early on he likes a simple interface that hides huge complexity. Examples: Google search, Auth0 (he invested), and Stripe (he admired it but did not invest). He calls Stripe "a simple API call that hides a tremendous amount of complexity."
- He thinks in terms of "sequencing." Seed, A, B, C and D are arbitrary, but they give a common language for pressure-testing frameworks.
- What gets you to Series A is not what gets you from D to IPO. The simplicity of your product from zero to one is not the simplicity from one to two.
- Companies become multi-product over time. AWS looks complex now, but a competitor will not win by copying it. They will bring a simplification, then re-evaluate their priors as the market changes.
- He cites a conversation with Snowflake's original CEO, whose view was that open source solves a zero-to-one problem (market positioning and awareness) but not the one-to-one-million problem.
- Guillermo is himself deeply open source (node.js since 0.1, Mongoose), and agrees that GitLab, Hashi and others succeeded on more than open source alone.

## Picking battles and saying no

- "Great companies are defined by how many things they say no to."
- His own job is to build a few of the best products in his category, not to solve every problem a customer has. Compare a VC, whose job is to find a handful of the best companies in the world.
- Options for not solving a problem right now:
  - Push solutions to user space.
  - Skip entering a market.
  - Wait and hold. "Sometimes you're better off waiting" and letting the truth emerge from the experiments being run.
- He holds up Apple as a model: it does not react to every trend, it picks its battles.
- This matters more as the company matures: "you don't always have to be first, you have to be right."
- He says a good designer or product person is defined by how much they have rejected over time, and what survives many rounds of yes and no earns its place in the product lineup.
- Faster iteration loops that turn things down can be healthy if the system learns from each rejection. He uses Rick Rubin as the reference: Rubin's value is telling artists what he likes and does not like, not knowing how to play an instrument.

## Shipping fast with a high quality bar

- Culturally, Vercel goes deeper into what counts as complete than most people are willing to. It spends a lot of time on internal testing before a product reaches the market.
- He separates a high bar from being slow. A founder told him his customers complained he was breaking their stuff too often while he was trying to move fast. His advice: reduce the blast radius of experimentation, so that by the time you bring a product to everybody you have enough evidence of success to have overwhelming confidence.
- He compares this to Boeing bending the wings of an airplane in the factory beyond what turbulence could realistically do, so millions of flights a year are safe. "You've gone above and beyond to certify and sign off."
- On whether the bar costs speed: if the process is rigorous, frequent and part of the culture, people carry the approach into their own work. He is not applying it to every project himself. He sets the bar, shares techniques, and tells stories.
- The stories matter because "moving fast and shipping with high quality" otherwise sounds contradictory. He points to how they did it for Next.js 1.0 and for the new deployment infrastructure.

## Hiring: judge by what people have put into the world

- Guillermo works backwards from what outstanding products look like. This is why Vercel bet that front end matters, though it was overlooked for years. His own dad asked why he was wasting time on JavaScript instead of hardcore back-end languages.
- His main hiring signal, for people and for acquisitions, is what they have made that is tangible. What can he use? What hyperlinks have they shared? "You're communicating your capability through your creations."
- He admits this is not a silver bullet, since some people contribute more theoretically.
- Writing is another signal: whether they follow through, and the quality of how they present themselves. So are the stories they tell about their work.
- For candidates from big companies where attribution is hard (e.g. "I was at Apple for 25 years"), he wants a narrative of where they moved the needle. How did that contribution reach the business or make an end user's or developer's experience better?
- To separate depth from storytelling, he goes into the details:
  - how they implemented something, down to the syscall
  - which cloud infrastructure they used
  - what alternatives and vendors they were aware of
  - for a paper, what other papers they looked at
- He wants conceptual understanding. A candidate does not need to know how to write a custom Linux kernel module, but should be able to explain how the parts fit together.
- His biggest hiring mistake was overweighting a resume that was "a stellar list of awesome brands" (Apple, Google, Amazon, Netflix). Four strong companies in a row cannot all be wrong, but he now treats that with curiosity about what the person actually brings. He says the same trap exists with universities.
- On second-time founders, he agrees they are a good heuristic but warns the pool is constrained. His reasoning: "You don't have to get every single opportunity right. You just have to get a few great ones."
- His own edge as a founder was seeing decisions at an early-stage startup where he "would have chosen the exact opposite," then setting up hiring, product development and speed differently. He sold his first startup in a moderately successful exit and built his second on those learnings.

## AI changes interface design, and more UI is needed

- Guillermo expects UI to change, not disappear. The jobs people have to do (decisions, data, communication) stay, but how they get done is profoundly transformed.
- When designing software in the past 10 years, AI was not in the design space. Now you can invoke reasoning machines on demand, so a next Notion, Superhuman or Figma would look completely different.
- He says design instinct is like a go player's pattern matching (the Lee Sedol versus AlphaGo reference). The board has shifted, so software 1.0 designers have to update.
- Startups have no legacy software to retrofit AI onto. Incumbents can say "I added AI, ship it" and increase their TAM, but they are also exposed to someone producing a completely different design.
- Vercel's own products are moving the same way. What used to be dragging, dropping and long editing is increasingly typing in English, and Vercel's job is to help developers create the new kinds of interfaces.
- He pushes back on "UI matters less":
  - Software 1.0 is deterministic: input a, b, c, get d every time.
  - AI is probabilistic, so "you actually have to create UIs that tame the craziness of the machine."
  - Midjourney is the example: a text prompt returns four choices. "It's actually giving you more UI, not less, because it's uncertain about what it is that you actually want."
  - The choices also feed data back into the system.
- On the paradox of choice: more options suit the creative stage of a workflow. The best assistant has rich context about what you like and proposes better variations over time, but should not be too absolutist.
- Successful AI products so far are suggestive, not authoritative: Copilot, Gmail Smart Compose, Notion AI. Agents acting alone with no supervision have not produced many successful products.
- He expects agents to arrive, but with a close feedback loop. His metaphor is the editor in a newsroom: agents bring ideas, you say "nope, go back to the drawing board," and you set the creative direction. He calls this the healthiest AI future, because the alternative, with AI calling the shots, is what scares people.
- Against a view that "selling the work, not the tools" will leave incumbents winning only an intermediary phase, he says it may be true over a long timeline but gives no practical advice for the next few quarters.
  - The iPhone's OS came from retrofitting Mac OS, not a fresh codebase. The first killer app was shrinking websites onto a small screen, and native-only apps came later.
  - He expects AI and traditional software to co-evolve the same way, so chat-type interfaces will meet customers where they are, and "it's still all UIs all the way down."

## Incumbents versus new entrants in AI

- Guillermo's example: Microsoft Word shipped a thick toolbar exposing every option, a fully additive approach where adding utilities gets you promoted. Notion did less. It offers 8 or 16 text colors and no custom hex input, which he reads as a focus decision.
- A hypothetical next entrant might do even less, because AI can do exactly what you want without the menus, icons and blocks. The incumbent then faces "holy crap, we have to delete everything" after crafting every icon, menu, doc and training video.
- When challenged that today's incumbents are stronger and faster than ever (Notion, Adobe), he agrees they can be underestimated in both directions.
  - He gives Microsoft credit for telling the company years ago to focus on AI.
  - He praises Adobe's Firefly additions as high quality and considered.
  - But the interface itself can shift. Midjourney is a place where Photoshop's drag-and-drop, magic wand, selection tool and color switcher "just don't exist."
- His desktop-to-mobile analogy: the right call for Meta was not to delete desktop software but to go where the growth and user minutes were going and "almost start over." Desktop still exists, like AM and FM radio, but the growth is elsewhere. Most incumbents historically do not manage this.

## Pricing: hybrid seat plus consumption

- Vercel offers two things: front-end hosting with infrastructure that scales autonomously (a consumption, pay-for-what-you-use model like Snowflake), and iteration velocity and agility, similar to Google Docs or Figma, via collaboration with shared links across the organization.
- His claim: businesses that sell only one half of that equation will become less popular. Buyers want a comprehensive platform for business problems, "like an operating system for my organization," especially at scale.
- Vercel combines SaaS priced per seat, for platform capabilities, with infrastructure that grows when visitors use the software.
- AI accelerates what cloud already started. AI products cost more to serve the more they are used (GPU cycles, "expensive outsourced intelligence"), so a flat $20 to $30 a month does not model it.
- He expects more hybrid models: a baseline of utility, plus the ability to burst and use more of what you can automate for me.

## Open versus closed AI, and his framework for betting

- He says he has no firm prediction, but gives his framework from how past platform wars resolved.
  - Kubernetes won because every company decided it was the standard to build an ecosystem on.
  - React won "the hearts and minds" of the ecosystem, and developers talk about "React brain."
  - Linux brain: the ecosystem value of everyone who learned Linux overcame proprietary alternatives, even when it benchmarked worse.
  - On this basis, "Llama becomes Linux." It is not as good as GPT-4 now ("not even close"), but ecosystem commitment (researchers, hardware budgets, documentation, user-space tools like LlamaIndex and LangChain) can make it better.
- The counter-thesis is a Jeff Bezos line about why AWS pulled ahead: even a two-year technology advantage can be lethal, five years is exponential, and ten is nearly impossible to catch.
- He applies this to Vercel's own bets. When others bet on static rendering, Vercel bet on dynamic front-end rendering, which was less popular among VCs in the Valley at a few crucial points.
- On the AI funding question, he disagrees that 99% of cash going into AI companies goes to zero. He compares it to Web 2.0 (mobile and social produced Uber, Airbnb, Facebook), and would bet about 20% of investments are productive, including companies that get acquired. He mentions Vercel might buy an AI company.

## Angel investing lessons

- Many of his best angel investments were problems he would have loved to work on himself but lacked the time and bandwidth for. Scale AI is an example, and he says he got lucky choosing the right horse.
- Founders should be uniquely positioned, but not necessarily by existing expertise. He says "it's about the slope," meaning how fast people can learn, which is also his hiring philosophy.
- Judge the problem and market separately from the solution. "It's all about people's willingness to buy a certain thing." Be open-minded, because he can be bad at judging solutions.
- On Auth0, he was skeptical about outsourcing auth to a three-person startup ("chicken and egg"), but invested because he knew implementing auth is "freaking hell."
- The same pattern shows up with Slack. People knew the problem (collaboration over chat) but the solution space was odd, including IRC-as-a-service and a Slack IRC proxy. When he sold his first company to WordPress and Matt said to install Slack and deprecate IRC, his first reaction was the same hesitation about trusting a company with all their communication.
- His rule of thumb: when the problem is very painful and your only hesitation is whether you can offload it to someone else, there may be a huge opportunity.
- He also notes that people overestimate their capacity to solve problems excellently themselves, as when he used to set up IRC servers for teams.
