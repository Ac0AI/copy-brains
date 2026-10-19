## Why Guillermo built Vercel: make the first deploy feel like a new laptop

- At his earlier startup (sold to Automattic, parent of WordPress.com), he was CTO and focused on how to help his team ship the right things with the best tools.
- His most impactful move was investing heavily in continuous integration and deployment. You write a small feature, push to git, and get an instant result.
- He built a real-time system that returned a link with a commit ID, so a team could edit "the internet" almost in real time. Teammates later named iteration speed and deploy speed as the thing that mattered most.
- His analogy: a new Apple laptop feels great because Apple solved the bootstrapping problem and everything works out of the box. He wanted that same feeling for developer tooling.
- He saw that WordPress.com was excellent at hosting its own site but had no zero-to-one experience for a developer with a new idea. Cloud was powerful and scalable but felt like the opposite of a new computer, with complex setup and instance concepts.
- His first-principles benchmark was PHP in the 90s: edit a file in a folder and it is live. He describes it as a Dropbox that is also a live deployment, and Vercel chased that experience.

## Frontend focus and business outcomes

- Vercel put heavy emphasis early on the frontend. Backend code mattered, but standout web experiences depended more on the frontend. He points to ChatGPT, which streams, thinks and splits into a live document in front of your eyes, as something that needs strong frontend frameworks.
- Next.js was the competitive advantage. A brand-new language like PHP would have been a big ask, because any new tool forces people to learn something and possibly migrate. He asks what a migrating enterprise gets in return.
- Vercel's answer is concrete business outcomes: faster, more dynamic apps, faster iteration, and the ability to build AI products. He cited stats on a large retail chain that recently moved to the platform.
- Great developer experience without business results is an incomplete equation. Early cloud had a bad financial equation: companies paid for their own data centers and then also paid a cloud bill, with no visible payoff.
- He has always cared about visual design. If there is nothing to see or touch at the end of the path, a software project feels unjustified to him. Vercel works backward from the site URL you deploy, and you feel an improvement even without complex performance tests. Then it teaches you the technology behind it.
- His line: cloud used to be about implementation details and primitives; Vercel made it about products and experience.

## Enterprise rigidity and the AI infrastructure problem

- He found that as companies grow they get more rigid, locked into legacy infrastructure choices. Some deploy once a quarter, and some freeze code for weeks or months around Black Friday.
- He says AI makes this ten times more important. New models appear daily, and two new open-source models shipped the week before. A company locked into its deployment and infrastructure choices cannot keep up.

## Defining "shipping" and the review bottleneck

- At Vercel, shipping means more than writing code. It means a tangible business result along the whole conversion path (conversions, signups, new information, impressions), working backward from pixels on someone's screen. He says the higher you set the bar for what counts as shipped, the better.
- He sees a new bottleneck: code generation is "almost solved," with companies reporting 50%, 80% or 90% of their code comes from AI, but the bottleneck moved to reviewing that code.
- His framework has two ends of a spectrum:
  - Vibe coding for a wide audience, where v0 operates ("everyone can cook").
  - An engineer on a 20-year-old codebase, which he calls AI-assisted or agentic engineering.
- He expects code to be fully solved because models will keep improving as they learn from accepted and rejected code, a self-fulfilling prophecy. But for mature projects it is unclear a human can fully trust the output.
- Example he shared: an agent produced a PR that did what the engineer wanted, but deleted one critical line. In a sensitive production codebase, one line (an infrastructure file deleting a critical resource, or auth code) can be the difference between the internet going down or not.
- His response: Vercel is investing heavily in giving higher confidence that a change is good, safe and follows best practices. He expects agents to review code too, with a human still in the loop.

## Why constrained, vertically integrated agents can beat humans

- He says v0 is more opinionated because it serves everyone, not only developers. v0 outputs Next.js, Vercel builds Next.js, and it integrates with a specific set of database partners, so Vercel can closely control the known quantities.
- With a restricted approach the model can embed every security best practice and refuse to do something security-wise foolish, going beyond what a human does.
- The harder general case needs a model to know the company's full history, code semantics, runtime behavior (logs, metrics, such as a baseline of 1,000 requests per second that makes a hot-path algorithm risky), and every language, cloud and deployment tool.
- His self-driving analogy: Waymo is restricted (not on highways, not in New York), but has far fewer accidents than humans. He wants tools like v0 to restrict what they can do realistically so that quality is near guaranteed, rather than being "a machine for producing slop."
- The flexibility scale: Claude Code or Cursor can work on any codebase, while v0 is more specialized and opens programming to everyone.
- He floated an idea: a convention where agents announce to tools that they are agents, not humans, so tools can adapt their interface (a human gets the hammer for their motor skills, an agent could hold 20 hammers). He says this opens a whole set of languages, runtimes and frameworks designed for agent engineering.

## Perceived vs. real productivity from AI tools

- He is not surprised by the study showing developers felt 20% faster but were 20% slower. He talked to a CTO of one of the largest engineering forces in the world, who said they spent a long time measuring perceived vs. realized gains from AI tools and the gap was large: people thought it was the best thing since sliced bread, but measured output was much smaller.
- His explanation: a multi-step process where some steps become very fast while others are slower, and people focus on the parts where they started flying.
- Counterpoint he offers: engineering is emotionally brutal. He describes the pager, the weight of knowing one deleted line took down a famous .com, and day-long loops of error after error. Agents now absorb that mess, so the shift to agents makes developers feel in control.
- His internal line: "the agent is the new model." An agent is "an LLM on steroids" focused on outcomes. Early LLMs responded to prompts (write a poem, translate this); now the ask is "get me an outcome."
- Vercel added a sound to v0 when generation completes. People said it feels like winning the jackpot, since it only plays after the agent gets through all the errors a human would have suffered. He says psychological and emotional effects should be factored into productivity studies.
- He expects both v0's platform API and Claude Code's SDK to let companies embed agents. For example, a company like Squarespace could use the v0 platform API to build its own site-building agent.

## Personal software, internal tools, and where vibe coding fits

- Vercel's design team has built small tools to process and ship assets, work that used to take days or weeks.
- Vercel now uses traditional BI tools much less. Static dashboards pile up unmaintained lists nobody opens, while people want generative UI: ask a question and get the ideal visualization at that moment. He says he would not claim vibe coding can replicate Microsoft Power BI for 10 million enterprise customers, but the platform can lose by people simply no longer needing it. Each customer builds their own small tool, with better visualizations, and can add features the same day.
- Story he shared: a CTO at a company started vibe coding on his personal account during a customer call. The customer threatened to cancel unless a feature existed. In a 30-minute conversation the CTO built a version, and the customer said "this is exactly what I want." The CTO then told the field org he wanted everyone to build this way, and wanted their data available to the platform. It was announced for Q4.
- Caveat: building it in 30 minutes is not the same as integrating it into a huge production system with millions of customers. That is why he argues the world will split into more and more specialized tools and agents for each kind of problem.

## Advice for kids, taste, and the human skill that remains

- For a 10 to 16 year old, his advice is to start with a product idea rather than "learn to code." Starting with v0 builds the muscle of asking what you actually want and what you picture in your head.
- He defines taste as the ability to refine a vague idea until you can visualize its end state, "predicting the next step" rather than "predicting the next token." He admits it's a debatable psychological idea, since people differ in how much they can visualize.
- Story: he built a football game with his six-year-old son. The idea was entirely the son's, but it was hard to get him to ask for next steps or improvements. They ended with a dribbling game that scores points and gets harder, and the polish came from Guillermo. His lesson: you must build the muscle of understanding there is an audience, what the technology can do, and how to combine these into prompts for what you want to see in the world.
- Since code generation is "solved" (his parenthetical, controversial claim), what is left is ideas and capital allocation. Tokens cost money, so the better idea wins the tokens behind it. He says storytelling is the human skill, and your pitch persuades the world to allocate tokens to your idea.
- On whether anyone needs to understand low-level code: he says we already live in a world where most people don't know how a garbage collector works, and nobody fully knows how LLMs reach answers, so we will need frameworks, guardrails and interpretability. He thinks it ends up being about the investment relationship: what you're willing to pay for a level of performance and outcome.
- He wants people to avoid a "Wall-E" future. He recommends making sure your relationship with any tool challenges you, teaches you and leaves you with expanded capabilities.

## Combining product vision with customer listening, and building the culture

- He says the best product builders for enterprises are extreme: they listen to concrete pain points and build together with customers, but they also hold a vision of the future, which he calls "working from science fiction backwards." Without the vision you miss the next platform shift and what the next generation of builders is excited about.
- He argues agents can do user research, so the agent can act like a product manager: search keywords, find 10 complaints, prioritize them, and check what others say. He expects a world of many specialized agents collaborating, not one agent governing all.
- He wants the next internet to move from HTTP to MCP, with specialized agents collaborating. He opposes a single platform gatekeeper deciding what is allowed (pointing to the story of Apple wanting to remove X from the App Store). Companies could expose tools and data as an MCP interface for agents, in addition to a pixel interface for humans.
- On culture: he recommends "reverse engineering your success." You can succeed without understanding why, or even despite doing A, B and C. He cites a quote that it is harder to predict the past than the future.
- Vercel's culture grew out of open source: an open contribution culture and high transparency. Internal Slack is mostly information, with few DMs, so it works like an internal Twitter. He works behind the scenes coaching engineers to show their own work (what they learned from X, how to make a post shorter, which example to use), so they own the storytelling and learn how to talk to customers and community. He notes privacy and compliance remain top priorities.
- He still reads user issues, error messages and X posts. Example: an escalated outage report from a startup via investors turned out to be another provider returning a 502, visible in the error message. His takeaway: errors should be in natural language and agents can help attribute fault, and Vercel moves "from problems to solutions" (an agent for metric anomalies that sends a PR or a diagnosis rather than raw data). His stance is that every customer problem is his problem.

## Personal discipline and facing hard feedback

- Coding taught him focus and discipline, including how to take negative feedback from the compiler and push through. He recalls coding for about seven hours straight as a kid while his father marveled at his focus.
- He exercises for the mental benefits, calling hard workouts an "active meditation." He boxed for years, going to a gym from 6 to 7:30 a.m. in Dogpatch, and likes unfashionable training such as bodyweight exercises. His coach would end a session by sending them to run around the Giants stadium.
- Link to product: presence gives clarity, and better taste comes from being responsive to real reactions. The best thing to do for your product is read all the negative feedback, and he asks whether you can face it or flee. He says many people want to help you build the right thing, so "don't get in your own way."
