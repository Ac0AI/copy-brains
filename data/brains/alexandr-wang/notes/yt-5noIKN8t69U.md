## Starting Scale: from chatbots for doctors to an API for human labor

- Alexandr worked at Quora as a software engineer in 2014-2015, then went to MIT at 18. He applied to YC when he got "antsy".
- The first idea was chatbots for doctors, during the 2016 chatbot boom. He admits they knew nothing about doctors. His read on young founders: first ideas are memetic (dating apps, social apps), and young people have a poor sense of their own "alpha", meaning what they are uniquely positioned to do.
- Mid-batch, while roommates with another YC company, they noticed chatbots needed lots of language data and human "elbow grease". The pivot: do the human data for the chatbot companies. The framing became an "API for human tasks" / API for human labor.
- He found scaleapi.com available one night, bought it, and launched on Product Hunt about a week later. The landing page took about 3 days to build.
- Launch brought inbound from engineers with varied use cases, which was enough to raise money and get going.
- Mechanical Turk was the incumbent. His rule: when people mention a thing in your space but it "sucks", that is a good sign.

## Narrowing to self-driving cars, and why it was right and wrong

- About 6 months after YC, another YC company, Cruise, reached out via the website and quickly became the largest customer. The contact was an ex-YC founder working there.
- Alexandr decided to focus entirely on self-driving data. His lead investor objected that it was "obviously way too small a market".
- His counter: self-driving companies were getting huge funding and automakers had big programs, so focusing would let them build the business faster.
- Looking back, he says both are true: the focus got Scale to scale quickly, and it was not a big enough market to sustain a gigantic business.
- The company was fully focused on self-driving for about the first 3 years.
- His startup market rule: early on, go for the narrowest markets you can and build momentum. If you want a $100B+ company, you must later switch gears and find "infinite markets".

## Building ahead of each AI wave

- Scaling laws were not a thing in self-driving, because algorithms must run on the car's limited compute. Scale started working with OpenAI in 2019 (GPT-2 era).
- GPT-3 (2020) made scaling laws feel real to him. Instruct GPT work with OpenAI in 2022 was the "aha" moment for the company. GPT-4 made it clear that the need for data would "grow to consume all available information and knowledge that humans have".
- Because AI needs data to work in any vertical, demand for Scale's data precedes AI's arrival in each industry. Examples:
  - OpenAI on language models: 2019.
  - DoD on defense AI: 2020, long before the drone-fueled AI craze.
  - Enterprises: long before the recent enterprise AI wave.
- He compares this to Nvidia, where Jensen is always ahead of the trends because the company has to get there before the trend can happen.
- Late 2021 / early 2022, Scale began building AI applications, now increasingly agentic workflows, for enterprises and governments.

## Adding a second business: the AWS lesson and the applications push

- The core data business is highly operational: a "data foundry" with many humans and experts plus quality control systems. That success created momentum to build an applications business.
- Before starting, he studied companies that successfully added very different businesses. The standout is Amazon building AWS. Analysts hated it when it launched in 2006 and Amazon stock fell.
- Two lessons he took from AWS:
  - Conviction that the underlying market is effectively infinite and growing exponentially (compute demand).
  - Sufficient cost advantages from economies of scale.
- His reasoning for Scale: every business and organization must reformat itself around AI, and now agent-driven technology, and that will "swallow the entire economy".
- Strategy: focus on a small number of customers and be selective. Scale works with the number one pharma company, telco, bank and healthcare provider in the world, plus the US government (DoD and other agencies).
- He says the applications business is multi-hundred-million in size, and that investors tell him it is one of the largest AI application businesses. It is growing much faster than the data business.
- Differentiation comes from the data business: help each enterprise generate or harness its most strategic data to build specialized AI.
- Versus Palantir: Palantir focuses on data ontologies and solving the messy data integration problem. Scale focuses on which strategic data enables AI differentiation. In practice Scale is more partnered with Palantir than competitive. He sees the market as too big to be winner-takes-all, like cloud.

## Specialized models as company IP, and the future of work

- His blueprint: one version of the future is that every firm's core IP is its specialized, fine-tuned model, the way a codebase is IP today.
- Companies add data and environments specific to their day-to-day business problems, which nobody else has. Model providers' base models, plus your data and environments, give a fine-tuned model ("Lego blocks"). Evals matter in this stack.
- He believes the economy stays specialized rather than becoming one "Borg". Alpha will go to those who can encapsulate their business problems into datasets and environments.
- On a model lab asking YC companies for their evals: companies should not hand them over. His view is that the industry will learn the "bright lines", like not giving away your codebase or database. In an AI economy those lines will include evals, data and environments.
- Coding is the case study for work. It moved from assistant, to synchronous agent mode (Cursor-style), to a swarm of agents (Codex-style) that you manage.
- His belief: humans manage agents is the terminal state, since the economy is driven by human demand and vision.
- Management is mostly putting out fires. Coordinating agents and debugging them will be hard. Self-driving showed that getting to 90% is easy and 99% is very hard, and he expects the last 10% of agent accuracy to take a lot of work.
- Self-driving still needs human teleoperators, at roughly 3 to 5 cars per operator by his estimate (companies do not publish the ratio).
- On jobs: people have insatiable demand, so as the economy gets more efficient humans will want more. He frames agents as giving every trade the leverage programmers have had ("the closest thing to alchemy").

## Running Scale on agents internally

- Because Scale produced the datasets that trained agents with reinforcement learning, it saw how effective RL is for agent deployment.
- Core method: turn existing human workflows into environments and data for RL, where some fault tolerance is acceptable, and convert them into agentic workflows.
- Agents are used in hiring, quality control, data analyses and sales reporting, "embedded at every major org of the company".
- Mindset: identify very repetitive human workflows, then turn them into datasets that let you build automation.
- Concrete example: distilling a candidate's full packet into a brief for a broader committee. He says deep-research-style tasks, which involve clicking around, pulling information, blending it and producing analysis, are the lowest-hanging fruit.
- The data needed is the task, the full dataset needed to do it, and a rubric for doing it well.
- Prompting vs RL: prompting works well most of the time and gets better as models improve. RL goes beyond what prompting reaches.
- Startup advice: have a strategy to "walk up the complexity curve", so the product benefits from rising model capability.

## Hard evals as a lever on the AI industry

- Scale built Humanity's Last Exam with the Center for AI Safety. Professors and researchers each wrote new problems from their recent research. The problems appear in no textbook and cannot be searched.
- At launch (earlier in 2025) the best models scored about 7-8%. Now the best score is north of 20%. A lab asked to raise the thinking-time limit from 15 or 30 minutes to a day.
- His point: the industry lacks very hard evals. An eval that becomes popular becomes the northstar researchers optimize for, and model providers report on it.
- He expects it to saturate eventually. The next evals will be fuzzier real-world tasks.
- He thinks genuine scientific breakthroughs from reasoning models are plausible, biology most clearly.

## Defense, China, and competing on data

- Thunder Forge: built with Indo-Pacific Command, the flagship DoD program for AI in military planning and operations. It takes the doctrinal human planning workflow and converts it into a series of cooperating agents. He says it turns decision cycles from 72 hours to 10 minutes.
- He expects warfare to shift toward small, nimble, attritable assets (drones, embodied robots, cyber) and toward agentic decision-making.
- On China: the best open-source models now come from China. His simplest explanation is espionage of training secrets (hyperparameters, tricks, intuitions) leaving US labs. He says Chinese models are about a half step behind.
- US energy grid production looks flat, while China's has roughly doubled over a decade, mostly coal. He expects the US to come out ahead on compute because of chips.
- China's data advantages, per Alexandr:
  - Ignoring copyright and privacy rules.
  - Government data labeling programs, including 7 data labeling centers, subsidies and vouchers for AI companies, and college programs, since employment is a national priority.
  - Factories full of robots collecting data. He says even some US companies rely on Chinese data for robotics foundation models.
- His rough odds: 60/40 or 70/30 that the US keeps an advantage. Manufacturing cost is a big problem for robotics hardware.

## Hiring people who care, and "quality is fractal"

- His main advice: "you just have to really really really care." He wrote a post years ago called "hire people who give a [damn]".
- In interviews he looks for people who hang on to their work versus people who phone it in. For him the biggest predictor of enjoying working with someone, and of their success at Scale, was how much of their soul is invested in the work.
- He approves or rejects every single hire at Scale.
- Caring means feeling the business more deeply, which lets the company change course, learn and adapt faster.
- He personally hand-reviewed the data sent to partner companies as final quality control, even when Scale was large, because unhappy customers are personally painful.
- Scale value: "quality is fractal". High standards trickle down; standards rarely increase as you go lower in an org, and if a manager does not care, their reports stop caring.
