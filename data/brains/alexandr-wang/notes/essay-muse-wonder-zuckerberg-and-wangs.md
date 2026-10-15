## Talent density over headcount: how Alexandr staffed Meta Superintelligence Labs

- Two days after a 44-minute first call with Mark Zuckerberg, Alexandr sent a written plan. Its first point: "you don't need a lot of people, and talent density is the thing that matters."
- The research team is under 200 people, closer to 100 by Mark's count, plus infra staff. Each stage of model training (pre-training, post-training) is tens of people at Meta versus hundreds elsewhere.
- Compute is concentrated on a few key people. The lab does not "peanut-butter" it across competing efforts, so each researcher gets a lot of compute.
- A small, talent-dense team is a recruiting pitch in itself: it feels like a startup with a big company's stability and resources.
- Flat structure: nearly 200 direct reports in principle, with team leads in practice. The point is the absence of non-technical managers, not heavy managerial support.
- Staying technical is a rule. People must use the agents and write code, because leaders who move out of the details lose technical understanding faster than they realize.
- Alexandr says the team is full of "insecure overachievers." He records their pessimistic 3-month forecasts, then replays them after a ship to show what they actually delivered.
- He prefers strong-willed people who argue for what they believe, because ownership matters more than blind execution. He recommends hiring people who really care.

## The full reboot after Llama 4

- Llama 4 launched in April 2025. Zuckerberg began calling people for advice around April 20-21.
- Early on, the group "jammed a bunch of people together" in a Supernova-style push. Neither slept much for the first couple of months, and Mark cleared his calendar for a month or two to meet researchers.
- The reboot was not planned upfront. It emerged during recruiting conversations: to make the effort attractive to the best people, it had to feel like starting from scratch. Strong people from Llama and FAIR were pulled in as well.
- Alexandr says the construct was shaped in real time during early recruiting conversations: when a pitch to a candidate didn't work, they adjusted it.
- A diagnostic moment from his first week: a lead of the old effort said consumers did not need a reasoning model. He took it as a sign that leadership needed to be far more AI-pilled and forward-leaning.
- Once the CEO visibly shifted, long-tenured Meta leaders adapted quickly. His example is Adam Mosseri at Instagram, who built an effective personal vibe-coded mini-app setup.
- A reboot needs the whole company behind it: infrastructure, data centers and other teams had to pivot. Only one thing can be the top priority at a time.
- Alexandr sets no deadlines and tells the team the work will go at "the right pace." With high-talent people this still produced speed, because they were self-motivated.

## Making huge bets before there is proof

- Alexandr calls frontier AI "entrepreneurship on hard mode" and "the opposite of Lean Startup." You cannot build, check, then double down, because planning runs a year or more ahead.
- Muse Wonder was planned from August of the prior year, with data centers and clusters planned years before that. Muse Spark was a stepping stone to it.
- At the end of the prior year, with no models yet, the exec team (CFO Susan Li included) discussed a roughly $100-200B commitment. Alexandr's evidence was a "vibe report" and some plots. His felt risk: "this is a fuck ton of risk."
- He credits Mark with internalizing power laws: "it's not how much you fail, it's how big the win is when you win."
- Mark's counter-view of the risk: if the models fail, AI overall has to fail for the compute to be worthless, because others would pay for the capacity. He also notes the company believed in the product thesis (a personal consumer version of coding agents).
- Cost figures Mark gave: about $15B a year to operate a 1 GW cluster, about $50-60B CapEx to build one, with research testing at every rung roughly doubling the run cost. Alexandr's estimate for training a frontier model is "tens of billions of dollars."
- Alexandr's view on CEO conviction: once Mark decides something is right, he reshapes everything (calendar, company, spend) to match. Alexandr sees this as rarer than just saying AI is important: "look at what they're actually doing and how consistent are their actions with that belief."

## Product thesis: the model is the product

- Internal saying at Meta: "the model is the product." Products are getting thinner while the model carries more of the experience.
- Alexandr argues traditional product specs are the wrong axes for AI-native products. Decisions about personality, proactivity, tool use and behavior in each situation are specified through training methods, data and evals.
- The comparison he draws: early mobile, when "it's just an app," hid enormous differences between apps. Today "it's just an agent" hides real differentiation.
- Muse has no model selector or effort selector. Alexandr criticizes AI products built by technical groups with no "randomly sampled American" in mind, where model names are confusing and version numbers sometimes go backwards.
- Mark's examples of where product work remains: the privacy and security model for connected data, and a dedicated VM per agent so users feel their data isn't running on shared compute.
- Muse is built as a personal and professional agent, not a retrieval assistant: delegation, not lookup.
- Alexandr names the pieces that make the product feel right: reliable task handling, proactivity (and in what context), and how it talks to you. Reliability is a big part of the "magic": if everything were slightly less reliable, people would throw the app away.
- Multimodal was an early priority from Alexandr, against an industry consensus that "coding was all that mattered." His reasoning: most consumers experience the world through voice, video and images.
- He says personal agents are best framed as "a team of experts in your corner" (legal, finance, medical). Wonder is state of the art on many finance and legal evals by their measurement.

## Evals and how Alexandr measures a model

- Early on, public benchmarks are fine for finding "signs of life." As the program matures, a growing share of what the lab watches is internal.
- Alexandr's critique of external benchmarks: someone's PhD project that went viral shouldn't set your product direction. "You're outsourcing all of your product thinking to that PhD student."
- A big part of the work is crafting evals. They keep a rigorous spreadsheet of small capabilities that matter to end users. "Maybe each of them matters like 2% to the user, but in aggregate, that's the obsession" that makes a model feel magical.
- He quantifies "big model smell" as the gap between in-distribution (RL/post-training tasks) and out-of-distribution performance. The gap shrinks sharply from the Spark line to the Wonder line.
- Mark uses his MMA coaching setup as a personal eval: the agent must process video and give feedback within a 1-minute round break, which tests speed and coding ability.
- Alexandr prefers a differentiation lens for models: the models of different labs have different "texture," and flattening them to the same benchmarks hides that.

## How frontier models are built (Alexandr's mental model)

- Pre-training is the massive-data, massive-compute stage. It's the highest-stakes stage and the most scientific, with very few samples. The team invests a large share of compute in it and goes through "troughs of uncertainty."
- Climbing a ladder: you train models roughly 4-5x bigger in steps rather than jumping straight to your largest cluster. Domain and modality data (health, legal, finance, images, video, audio) should be in pre-training, not RL'd in at the end.
- Post-training has two parts. SFT (supervised fine-tuning) initializes behaviors and personality; they may appear only about 10% of the time. RL then drives those behaviors up reliably.
- RL: environment and task design is a place of intentionality, and "less is more" for data there, which he calls flipped from pre-training. Large RL runs can magnify misaligned behavior if the only way to succeed in an environment is something unsafe, so environments are curated.
- Both axes scale: his one-line summary is "scale everything." Muse Spark went from 1 to 1.3 with RL recipe gains only, and feels "night and day" better. Agent harness co-optimization is another axis.
- Alignment view (Mark's): it means instruction and values alignment with the person served, not moralizing lectures.
- Wonder features: active memory (the model is aware of memory as a core system and handles compaction itself, rather than relying on a harness), active focus (persistence over long horizons through setbacks), domain expertise, and frontier coding.

## Why no AI winner-takes-all, and where Muse monetizes

- Alexandr's reasons AI hasn't become winner-takes-all: execution varies by lab and averages out; distillation packs capability into smaller models and helps open source; and many people and companies want a plural outcome and choose where to work and do business accordingly.
- Muse Wonder and Muse Spark focus on personal and professional agents, which he thinks is a real differentiation from other labs. "There should be differentiation in the economy."
- Distribution plan: free for everyone on Spark, a paid subscription for Wonder because it's costly to serve, then API access (Meta Model API, OpenRouter) and Muse Code. Mark hopes to get Wonder-level quality in the cheaper Spark form factor soon.
- Agentic commerce: Alexandr says Muse is among the first products where people fully delegate purchases. He sees value in reduced friction, hard criteria applied automatically ("need it by Wednesday"), and personalization from holistic context versus siloed recommendation systems.
- Alexandr says he told Patrick Collison in 2023 that agentic commerce was coming ("directionally correct, but like 3 years early").
- Mark's framing of the opportunity: agents get accounts, so total commerce demand may grow, not just conversion rates.
- Alexandr on demand shifts: agentic commerce will grow as a share of commerce, like e-commerce next to brick-and-mortar, and businesses must decide whether to participate.
