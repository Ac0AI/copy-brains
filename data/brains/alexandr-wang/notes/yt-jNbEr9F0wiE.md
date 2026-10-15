## Data, not compute, is the bottleneck for foundation models

- Alexandr notes that GPT-4 has been out since fall 2022 and no model has been "jaw droppingly better" since, despite far more compute spend.
- In the same period, Nvidia data center revenue went from roughly $5 billion a quarter to north of $20 billion a quarter.
- He names three pillars of AI progress: compute, data and algorithms. His view is that the industry scaled compute dramatically without building the other two in tandem.
- He explains the plateau as a "data wall". GPT-4 was trained on nearly all the easy internet data (Common Crawl and similar, plus torrented material).
- In his view, if compute and data were produced in lock step, models would become "astronomically more capable".
- His misconception answer: people think "all that's between us and AI's compute", but "we need data to get there too".

## Frontier data: what agents need that the internet lacks

- Pre-training made models excellent at emulating the internet. Alexandr says AGI needs systems that do tasks, solve hard problems and collaborate with humans, and the internet cannot teach that.
- Most reasoning that powers the economy is never written down. His example is a bank fraud analyst who weighs several data sources to decide whether a transaction is fraudulent, without documenting each step.
- He defines "Frontier data" as complex reasoning chains, agent chains (look up data, reason, look up more, self-correct), tool use, advanced code, and advanced physics, biology and chemistry data.
- He wants a shift from data scarcity to data abundance of Frontier data.
- Models reason well in scenarios where they have seen a lot of data. They lack the human ability to drop into a new setting and cope.
- So either a general reasoning breakthrough happens, or it is a data problem: "overwhelm them with data in all those scenarios".

## Mining existing data and producing new data

Alexandr describes two directions:

- **Mining existing data.** Enterprises hold huge proprietary data. He cites JP Morgan's internal data set at 150 petabytes against GPT-4's internet training set of under one petabyte. He sees this as a one-time benefit, and expects only the most sophisticated companies to do it within 5 years.
- **Forward data production.** He argues the world thinks about expanding chip production (bigger fabs, smaller nanometers) but not "the means of production" of data. He calls for a similar build-out.
- He describes production as a hybrid human and synthetic process. Algorithms do the heavy lifting, and human experts step in when the model gets stuck, makes factuality errors or hits something new. He compares this to safety drivers in autonomous vehicles who disengage and take over.
- Longitudinal collection helps but will not push the frontier. Examples are enterprise process mining (apps used, copy-paste flows) and consumer wearables like Limitless or Meta Ray-Ban. Frontier data needs experts collaborating with models.
- He calls contributing expert data to AI one of the highest-leverage jobs. A mathematician who makes GPT-4 slightly better at math multiplies that gain across every student, company and developer who uses it.

## Data as the durable moat for model labs and enterprises

- Of the three pillars, Alexandr says data is the one where a long-term competitive advantage can form. Algorithms are IP that the industry eventually learns, and compute can be bought by spending more.
- Early signs are OpenAI's deals with the Financial Times and Axel Springer. He expects labs to start building data strategies to differentiate.
- Content owners will not give exclusives to one lab, so each lab needs its own method to produce unique data. He suggests Anthropic could lean into Enterprise use cases and OpenAI into its large user base.
- He predicts labs will brag about data access and data production the way they brag about GPU counts today.
- Enterprises realize their data may be their only competitive differentiator in an AI world. They fear "mortgaging away their entire future" by sharing it with a model developer.
- That creates a large unmet need for open or on-prem models (Llama, Mistral) that enterprises customize on their own data without it going back to a model developer or cloud.

## Where AI value accrues, software, and pricing

- Alexandr cites Andy Grove's *High Output Management*: Intel kept discovering value capture was moving to a different part of the stack. He sees the same in AI.
- He doubts much value accrues at the model layer because competition is intense. He is confident about value below the model (Nvidia, the third most valuable company in the world) and above it (apps and services).
- He discusses Chris Pike's "end of software" article, which compares software today to media before social media. He agrees with the provocative claim only in part: enterprises will demand more customization and personalization.
- He sees Palantir as an early version of this: go into enterprises, understand their problems and build the perfect application on top of their data. It was derided as a consulting company.
- As software creation costs fall, more enterprise software will be custom built for exact problems.
- Engineers will spend less time on routine work. The valuable part is turning customer problems into scoped engineering tickets an AI engineer can solve.
- He argues per-seat pricing stops making sense when AI agents do more of the work. Software providers want to capture the value agents produce, so he expects a shift toward consumption-based pricing.

## Policy, China and closed versus open models

- Alexandr argues that permissive data regulation fits with a liberal democracy. He says the US protects chip production but does not take a pro-data regulatory stance.
- He proposes pooling data where it gives no proprietary advantage to one player. His examples are aerospace safety data, and fraud and compliance data in financial services.
- He says rules like HIPAA and PII regulations effectively block patient data from training models. He wants clear anonymization provisions so existing patient data can improve health outcomes.
- On China, he says it was far behind two years ago. Now 01.AI's Yi-Large sits just behind GPT-4o, Gemini and Claude 3 Opus, so capability is close to neck and neck.
- He argues the CCP is strong at aggressive centralized industrial policy, citing solar and EVs, and is "better at turning the crank" once an industry is established.
- He calls AI potentially "one of the greatest military assets" in history, possibly more than nukes. He worries that a totalitarian state with AGI could use it to conquer.
- He wants the most advanced systems kept closed, with open versions of less advanced models still allowed. He says Llama 3 is not a military asset yet.
- He expects the cost of training models to rise from billions to possibly tens or hundreds of billions. Foundation model efforts will then coalesce around nations or hyperscalers. He is unsure how the OpenAI-Microsoft and Anthropic-Amazon partnerships play out.

## Company building: PR, personal brand, hiring and hypergrowth

- **PR.** Alexandr says traditional press is click-oriented: it builds you up and tears you down for clicks. He says he got fairer treatment testifying to Congress about military AI than from media.
- He tells founders to skip traditional PR and own direct channels (podcasts and similar) where their message is not altered. He notes people follow personalities, not companies.
- **Hiring.** He wants hires who "give a" and care about quality, detail and impact, 10 to 100 times more than average employees at big companies. His aim is "Navy Seals".
- At about 800 people, he still approves every hire, by interviewing or reading feedback. He overrides the team's recommendation roughly 25 to 30% of the time, usually for new hiring managers who need calibrating or for edge cases. He draws on having seen who succeeds and fails at scale.
- **Hypergrowth mistake.** In 2020-2021 he assumed company hypergrowth meant team hypergrowth. Headcount went from about 150 in 2020 to over 700 by end of 2022. The bar slipped subtly, and problems the org used to solve calcified.
- The team has since stayed around 800 while revenue grew dramatically. He now separates team growth from company growth and invests in quality.
- He relays Patrick Collison's point that the best Stripe hires would have joined even if Stripe weren't the hottest company. He wants a self-preserving talent ecosystem that keeps a high bar whether the brand is hot or not. He cites Airbnb's Brian Chesky shrinking the team and raising talent density.
- **AI hype.** From autonomous vehicles he learned that bold promises divorced from technical reality cause a painful trough. He fears generative AI may repeat it.
