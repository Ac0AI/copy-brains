## Meta's AI bet: build the frontier lab first, pay for it later

Alexandr describes Meta Superintelligence Labs (MSL) as "entrepreneurship on hard mode" and "the opposite of lean startup."

- Frontier model decisions have to be made years before any proof point exists. Planning for Muse Wonder started around August of the prior year, and the data centers date back to 2023-2024 plans.
- In his words, you can't "see if you get something working and then double down." If you wait for proof, you are "radically behind."
- By late the prior year, the exec team was deciding whether to spend roughly $100-200 billion on compute before seeing the models. The CFO told them that if the model didn't work, "it's going to be very very bad in financial terms."
- Alexandr argues the ante to start a frontier lab is now extremely high.
- The cost figures he cites:
  - Operating a 1 gigawatt cluster for a year is on the order of $15 billion.
  - Building that capex up front is roughly $50-60 billion.
  - Research costs roughly as much again, because every change is tested on the ladder of smaller runs.
  - Serving the model costs more on top.
  - A frontier model costs "tens of billions of dollars" in total.
- Meta's clusters are Prometheus in Ohio (scaling past 1 GW) and Hyperion in Louisiana (scaling to 5 GW).
- The risk is bounded. If AI works, other buyers want the compute. For the bet to fail, "AI overall has to fail."
- A launch that needs a few iterations to find product-market fit is "not the end of the world." Muse was a home run at launch, and Alexandr says they could have grown it faster had growth tooling been ready.

## Talent density and a flat, technical org

Alexandr's first advice to Zuckerberg was that you don't need many people; you need each person to be as good as possible.

- **Team size:** The research team is under 200 people, closer to 100 plus infra staff. Each stage of training has tens of people, not hundreds.
- **Compute per researcher:** He bets on key people and gives them a lot of compute each. Meta is "not peanut buttering across a lot of competing efforts."
- **Reboot:** MSL was framed as starting again from scratch, which made recruiting more compelling. It still pulled in good people from the Llama and FAIR efforts.
- **Flat structure:** Leads have very many direct reports (a joke about "almost 200"). The point is the absence of non-technical managers.
- **Staying technical:** Researchers who move into management lose technical depth faster than they realize. People should use agents and write code.
- **No deadlines:** Meta told the lab there were no deadlines. Alexandr says this worked because a dense group of high achievers is self-motivated to ship.
- **Pessimism check:** He calls the team "insecure overachievers." He records their pessimistic forecasts, then shows them the results three months later.
- **Ownership:** He prefers people who push for what they believe in and argue over things to people "blindly executing." He says "people need to feel ownership."
- **Leader profile:** He wants leaders who are clear thinkers and can update dynamically like an entrepreneur, not experts in the latest technique.
- **A telling moment:** In an early meeting, a lead said consumers didn't need a reasoning model. That convinced him leadership had to be much more "AI-pilled."

## Training a frontier model: pre-train, RL, and why quality beats quantity

Alexandr gives a high-level recipe.

- **Pre-training:**
  - Public internet, books, and as much data as possible, across modalities (images, audio, video).
  - Domain data (finance, legal, health) goes in early rather than only via RL.
  - It is the highest-stakes stage, with few samples to learn from.
- **Ladder approach:** Train models around four or five times bigger at each step. Muse Spark came from the December pre-train. Muse Wonder is a significantly bigger class. Internal code names were Avocado and Watermelon.
- **Post-training:** Supervised fine-tuning initializes behaviors, which may only fire about 10% of the time. RL then raises how often they appear.
- **Scale everything:** His broad statement is "scale everything." You can scale one dimension, but you get much better results scaling many together.
- **Point releases:** Muse Spark 1 to 1.3 used the same pre-train with more RL, and felt "night and day" different.
- **RL data:** "Less is more." Environments must be curated carefully, because RL magnifies whatever behavior is needed to succeed, including misaligned behavior.
- **Alignment:** He defines it as instruction and values alignment with the person served. Users want reliability and no "moralizing lecture." Truly catastrophic requests should be declined gracefully.
- **Expected speedup:** He expects the time between successive model classes to compress.

## Evals, "big model smell," and building for a specific user

Alexandr argues public benchmarks are a starting point, not a destination.

- Benchmarks saturate quickly. Early on, external ones confirm you're on track. Each release shifts more weight to internal evals.
- Outsourcing evaluation to public benchmarks means "outsourcing all of your product thinking" to whichever PhD student made a viral benchmark. Much of the team's effort goes into crafting evals.
- Internal evals come from a detailed spreadsheet of small product capabilities. Each might matter about 2% to the user, but together they are "the obsession that will ultimately result in these models that feel magical."
- **Big model smell:** He quantifies it as the gap between in-distribution and out-of-distribution performance (tasks like the RL training versus unlike it). Wonder shows a large improvement over Spark on this measure.
- **Differentiated targets:** Meta targets personal and professional agents. That makes some things matter more:
  - Personality.
  - Discretion: sharing as little personal information as needed while getting a task done.
  - Multimodal perception.
  - Memory.
  - Coding where users may never see the code.
- Memory is built into the model ("active memory"), including how it compacts, not just a harness. Persistence over long tasks is a second focus.
- **Muse Wonder:** He claims it is state of the art on personal and professional agent evals, plus legal and finance evals, and on coding benchmarks. These are his claims, based on Meta's own measurements.

## The model is the product: product principles for AI agents

Alexandr disagrees that AI product space collapses to a few obvious shapes.

- "The model is the product." Products are getting thinner, and personality, capabilities and behavior are trained into the model. Post-training choices often matter more than UI.
- Traditional product specs aren't the right axes for AI-native products. Dimensions that matter:
  - How proactive the agent is.
  - When it is proactive.
  - How it talks to you.
  - Reliability on tasks.
- The spec of intended behavior in all situations would be an extremely long document. Calling it "just an agent" hides real differences, as "just an app" did in early mobile.
- Meta's agent runs on a dedicated VM. Alexandr says this matters for feeling confident about security and privacy. Much of the conventional product work is privacy and security for connected data.
- Muse has no model selector or effort selector. He criticizes the industry for confusing naming, such as numbers going backwards, and says an average person can't be expected to pick.
- **Embodiment:** Muse feels like a little guy working on your behalf because persistent memory, action-taking and personality come together.
- **Voice:** Voice input is high bandwidth, but consuming information by voice is inefficient. The ideal interface is multimodal.
- **Pricing approach:** Free for everyone on Muse Spark, with a large amount of free tokens. The bigger Wonder model starts on paid subscriptions only. He hopes to later get Wonder-level quality in the cheaper form factor.
- **Distribution:** Wonder is also offered through the Meta model API, OpenRouter, and to Muse Code users. Wonder Full goes to Muse Code subscribers.

## Agentic commerce and how Meta plans to make money

Alexandr sees agents as a discontinuous change in how commerce works.

- **Browser use:** Meta trained strong browser use into the model so no business has to integrate with Muse. The long-term aim is direct API access with top partners, which is faster and cheaper for both sides.
- **Business agents:** Every business will eventually have agents, like websites and email today, and Muse agents will work especially well with Meta's.
- **Demand shift:** Agentic demand will grow as a share of the pie while other channels persist. He thinks businesses that block agents will probably find that the wrong strategy.
- **Delegated purchasing:** Muse is one of the first products where people fully delegate purchases. Value for the user:
  - Less friction.
  - Criteria applied automatically (for example, "need it by Wednesday").
  - Personalization from a holistic view of your life, not siloed recommendations.
- **Market expansion:** He argues the total addressable market of commerce grows because agents effectively get accounts. His example is creating an Instacart account for Muse, and now using it once or twice a week when previously it was about twice a year.
- **Revenue streams he lists:**
  - Subscriptions, which he expects to be a big business.
  - A small cut of what Muse saves or makes people in commerce.
  - A "business in a box" for small businesses.
  - A model API and a new Meta enterprise platform.
- **Funding:** Meta's core business is "hundreds of billions of dollars" and still growing fast, so it underwrites the buildout. He also notes Meta owns its data centers, so costs are capitalized and depreciated, and older GPUs stay valuable while compute is constrained.
- **Playbook:** Build something, get it to a billion people, then scale revenue while the existing business keeps growing.

## Why no single winner, and why Meta builds the stack

Alexandr expects multiple frontier labs rather than one winner.

- **Execution evens out:** Every lab has strong and weak periods.
- **Distillation:** It is an "anti-hegemonic force." It packs strong capability into small, cheap models, and today's small models beat the biggest models of a year or two ago.
- **Mission:** Many people and companies want a future where technology reaches billions, which pulls toward a more equal outcome.
- **Differentiation:** He welcomes labs focusing on different things, "the point of capitalism to some extent." He sees value in routers like OpenRouter that help developers understand the subtle differences between models.
- **Safety through diversity:** He thinks a few models in a few hands is the riskier configuration.
- **Why own the stack:** In each technology era, the companies with core technology serve people best. He expects a small handful of companies to build frontier superintelligence and drive the agenda for consumer, enterprise and hardware experiences. Wanting to invent new things that matter means owning the stack end to end.
- **Open lane:** He sees personal and consumer agents as underserved because others focus on automating knowledge work. He believes "the highest use of super intelligence is invention and creation, not automation."
