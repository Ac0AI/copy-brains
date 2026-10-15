## Founding insight: AI rests on three pillars, and data was the neglected one

- Alexandr studied AI and machine learning at MIT in 2016, the year of AlphaGo and TensorFlow's release. He saw that models are "very much so just a product of their data."
- He frames AI as three pillars: algorithms, compute, and data.
  - Research labs such as OpenAI and Google were working on algorithms.
  - Nvidia was already the clear compute leader.
  - Nobody was focused on data, and he judged data would only get more important over the long arc of the technology.
- He dropped out of MIT, did YC in 2016, and started Scale to solve the data pillar. He calls Scale the "data Foundry" for AI.
- The mission was to solve the hard problems of producing enough data to fuel the whole AI ecosystem.

## How Scale's business evolved by following where AI applications emerged

- **Infrastructure rule:** As an infrastructure provider, Scale has to guess where breakthrough AI use cases will appear and "lay down the tracks before the freight train of AI comes rolling through."
- **2016-2018, autonomous vehicles:**
  - He followed the early-startup advice to focus. Scale built the first data engine for sensor-fused data, meaning 2D camera data plus 3D lidar data.
  - It became an industry standard. Customers included General Motors, Toyota and Stantec.
  - For the first few years the company did only autonomous driving and a few robotics use cases.
- **2019-2020, government:**
  - The future of AI applications was unclear, so Scale moved to government, where applicability was high.
  - It built data engines for geospatial, satellite and overhead imagery. This fueled the first AI program of record for the US DoD.
  - He says that technology proved critical years later in the Ukraine conflict.
- **2019 onward, generative AI:**
  - Scale partnered with OpenAI on the first RLHF experiments on top of GPT-2. The models were rudimentary, and "it did not seem like anything to us."
  - The reasoning was simply that OpenAI had smart people and Scale should work with them.
  - Scale worked on InstructGPT, the precursor to ChatGPT.
  - After DALL-E 2 and ChatGPT in 2022, Scale redirected much of the company toward being the data foundry for generative AI.
- **Today:** Scale's data fuels nearly every major LLM effort, including OpenAI, Meta and Microsoft. The ambitions of those labs have exploded, covering agents, complex reasoning, multimodality and multilinguality, and the infrastructure has had to grow to match.

## Data abundance versus scarcity, and what "frontier data" means

- **Scarcity as a choice:** On "are we going to run out of tokens," he says the industry can choose data abundance or data scarcity. He sees Scale's job as building abundance.
- **The scaling bottleneck:** The key to scaling language models is scaling data. He calls it a fundamental bottleneck on the path from GPT-4 to GPT-10.
- **Easy data is gone:** The easy data (the internet) is largely exhausted. What is needed now is forward data production with high supervisory signal. He calls it frontier data.
- **Quality bar:** Models can no longer learn much from Reddit comments. Frontier data includes:
  - reasoning chains and chain-of-thought from experts (mathematicians, physicists, biologists, chemists, lawyers, doctors)
  - agent workflow data, from enterprise, consumer and coding agents
  - multilingual data across the world's languages
  - multimodal data (video, audio) and the esoteric data types inside enterprises and industry
- **Sources of new tokens:**
  1. The best and brightest minds contributing expertise. He argues improving a model slightly, integrated over all its future uses, is "near infinite impact." Contributors are motivated by money and by fueling AI progress.
  2. Proprietary enterprise and government data. His example: JP Morgan's proprietary data set is 150 petabytes, while GPT-4 was trained on less than one petabyte.
  3. Synthetic data, specifically "hybrid human AI synthetic data": AI does the heavy lifting and human experts contribute reasoning and insight to keep quality and fidelity high.
- **Data production as spice:** He compares data production to spice in Dune, "the lifeblood" of future AI systems.
- **Data capture gap:** Digitization did not capture the data AI needs. Most incumbent vendors never captured the information needed to teach a model.

## Humans plus models: why expert input stays additive

- **Hybrid framing:** The question is not whether a model beats an unassisted human. It is whether human plus model beats the model alone. He expects that to hold "for a very very very long time."
- **Evidence for complementarity:** Models show odd failures (ROT-13 works but ROT-8 does not, the reversal curse). He reads these as a sign model intelligence differs from biological intelligence.
- **In practice:** Humans critique model outputs, flag factuality and reasoning errors, and guide models through long reasoning chains.
- **Model beating a physician:** Asked whether experts stop adding value once a model beats a doctor on Med-PaLM-style tests, he says never.
- **Why never:**
  - Biological intelligence optimizes over very long time horizons (lifetimes, reproduction) and keeps adjusting long-term goals.
  - Current models are trained on small "nuggets" of intelligence, "a shot glass full of human intelligence," and are bad at sustaining it over long horizons.
  - That quality has to be transferred through data. We lack environments to train models on amorphous long-horizon goals, so he calls it a fundamental limitation.
  - Architectural breakthroughs will help performance dramatically, but he does not expect them to remove it.

## Evals: why measurement is hard and what Scale is building

- **Role in the loop:** The AI lifecycle is data, then train, then evaluate, then repeat. Evaluation is also how governments, enterprises and labs build trust and confidence.
- **Why it is hard:** Evals are essentially IQ tests for models, which is a fraught philosophical problem, and the practical problems are real too. Academic benchmarks are "fraught with issues," and many models are overfit because the benchmarks leak into training data.
- **GSM1K:** Scale published a held-out math eval, GSM1K, built so it could not appear in training data. Some models performed well, but others did much worse than their reported performance.
- **Answer:** Use human experts and the best minds for expert evaluations to find where models are strong and weak and what the risks are.
- **Transparency:** He wants public leaderboards and rigorous public evaluations. He also wants platforms for governments, enterprises and labs to run constant evaluation.
- **Launch:** Scale is releasing private held-out evals with leaderboards for leading LLMs, rerun every few months.
  - Starting domains are math, coding, instruction following and adversarial capabilities, with more over time.
  - He describes it as "an Olympics for LLMs" but every few months instead of every four years.

## Enterprise and application strategy: self-improvement via data flywheels

- **GPT-4 timing:** After GPT-4 launched there was an application frenzy (agents and more). He thinks GPT-4 was "a few generations too early" for the thousand flowers to bloom. He expects a trough of disillusionment, then stronger models that enable agents.
- **Flywheel thesis:** The large labs improve through data flywheels: constantly collect new data that improves the model, and constantly evaluate to find weaknesses. He argues every enterprise, government and startup will need that self-improvement loop in its applications, and that it is hard to build.
- **Scale's product:** Scale's GenAI platform is the groundwork for building these loops. For enterprises Scale works at the platform level, not by building the applications.
- **Enterprise data problem:**
  - Not all data is equal. Frontier data can be "10,000 times more valuable" than run-of-the-mill data.
  - The work is compressing a mountain of scattered data into the high-quality subset that can fine-tune or train models for differentiated performance.
- **Government (Donovan):**
  - Scale is launching agentic features in Donovan, an "AI staff officer" application that plugs into whichever model the customer prefers.
  - He says valuable government agent use cases are often boring: writing reports, filling out forms, moving information between places.

## The raise and ecosystem positioning

- Strategic investors named include AMD, Cisco, Intel and Meta.
- Reasoning:
  - Scale is infrastructure and aims to serve the entire AI ecosystem.
  - The strategics span infrastructure providers (Intel, AMD), industry players (Meta, Cisco) and the stack layers of infrastructure, technology and application.
  - The goal is a broader industry view of what future data needs are.
  - Tens of billions, maybe hundreds of billions, are going into compute. Real investment is needed in data production too.

## Contrarian views: AGI as curing cancer, and staying nimble

- **AGI path:** He believes the path to AGI looks more like curing cancer than developing one vaccine. It means solving many small problems with little leverage from one to the next, and building separate data flywheels for each capability.
- **Limited generalization:** He sees little positive transfer between capabilities. As he understands it, training on lots of video does not help text problems much, and vice versa. So each capability area needs its own flywheel.
- **World-model claims:** He calls Nvidia's world-model story a "great narrative" without strong scientific evidence yet.
- **Societal read:** He says this is a bullish case for society adapting, because progress will be consistent and slow for a long time.
- **Multimodal launches:** On the OpenAI and Google multimodal releases, he notes the labs converged on similar demos. He also notes multimodal data is scarce for personal agents. He was disappointed because the industry mainly needs smarter models, a GPT-5-class jump, to unlock more applications.
- **CEO mindset:** The market looks crowded, but the technology is at "one 100th or one 1,000th" of its future capability. What he thinks about most is nimbleness, so Scale keeps adapting as the technology develops.
