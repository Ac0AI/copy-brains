## Why Alexandr says data is the new code, not the new oil

- He agrees with the "data is the new oil" analogy on one point: data will be the main lever of economic power over the coming decades.
- He rejects the commodity framing. Data is not a scarce, uniform commodity. Coding, language and legal data are very different from each other.
- The strategy is therefore not to drill data wells and resell them. Companies need a deliberate plan to connect qualitatively different, useful data sources.
- His preferred line is "data is the new code." For 50 years code was the building block of technology. In the AI era, models and algorithms run the applications, so data becomes the building block.
- His formative experience was at MIT when Google released TensorFlow. He used the exact same algorithm to detect facial expressions and to detect whether food was missing from his fridge. Only the data changed.
- If data is the oil, he says scale is the refinery. Scale turns huge amounts of raw data into high-quality data that can power algorithms.

## How Scale started: autonomous vehicles, infrastructure and the "data engine"

- Scale began in 2016 with autonomous vehicles. Cars collected huge amounts of video, lidar, radar and other sensor data, but none of it was labeled as "person," "pedestrian," "cyclist" or "car." The algorithm had nothing to learn from.
- Scale's role was moving from raw data to labeled, high-quality data for machine learning.
- His core insight: if AI grows, the need for data grows enormously. He had no idea of the timing or scale, but he was convinced neural networks would spread. The appetite for data has far exceeded what he imagined.
- He drew inspiration from Stripe and Amazon as large-scale infrastructure companies. They saw that every company in the sector faces the same problems. They built easy developer experiences with enough simplicity and economies of scale to become the default.
- He sees three components of AI: compute (dominated by Nvidia), talent (cannot be outsourced, and companies spend billions on it), and data. Each is a large piece of the AI tree, so a company that solves one at high quality becomes required infrastructure.
- Build vs. buy: most companies build a few things in-house to differentiate. But they will do those things less efficiently than the industry standard, because infrastructure providers have economies of scale and network effects.
- Scale now builds a "data engine," a refinery for raw data that feeds every leading large language model company today. The key technique is reinforcement learning from human feedback (RLHF).
- Scale first worked on RLHF with OpenAI in 2019.

## How RLHF works and where the bottleneck moves

- Human experts show the model what good work looks like. An expert says one response is better than another and explains why.
- The model learns an internal sense of good vs. bad, called a reward model. It then uses reinforcement learning to improve its own responses against that sense.
- Models can surpass humans this way. His analogy: anyone can be a movie critic, but none of us can make a film. If humans can teach the model what "better" looks like, it can keep improving far past human ability.
- Bottlenecks today: compute is limited by manufacturing. He says 100% of high-performance GPUs are made in Taiwan, and TSMC has spent tens to hundreds of billions in capex. Exponential growth needs exponential supply chain growth, which isn't economically possible right now.
- Data is also constrained. Text is an extremely compressed form of knowledge, and video is much less compressed. If pre-training data runs short, the compensation is RLHF and post-training data.
- He expects the number and quality of human experts feeding RLHF to become "GPUs in themselves," another supply chain bottleneck for the industry.
- He thinks the frontier labs will find solutions, since this is likely the greatest engineering project humans have undertaken.
- Why models do knowledge work better than physical tasks: it comes down to data availability. Decades of internet use created the largest dataset of human behavior ever, but almost no data exists on picking things up, throwing a ball or making things.

## Advice for companies adopting AI: use your private data

- Public frontier models are trained mostly on the open internet. He estimates that 99.9% of usable data is private or proprietary (messages, emails, journals).
- Most companies, whether they know it or not, sit on far more data than what is on the public internet.
- The big opportunity is to take strong foundation models and blend, refine and customize them on the company's own data, business and customers. That produces unique, proprietary outputs.
- Scale built a platform, EGP, so companies can fine-tune GPT-3.5, Llama 2 or other foundation models on their data. It supports use cases like customer service, legal applications and developer tooling. Scale partnered with Meta on Llama 2.
- For a non-AI founder or executive, his steps:
  1. Inventory and classify your unique data assets.
  2. Run a thought experiment: imagine a superpowered person who can read all of it faster than anyone. What could they do better than anyone in the world?
  3. Decide where to cut costs (customer service is the obvious example) or play offense.
  4. Build with AI partners such as Scale, OpenAI or Anthropic.
- He expects it to become obvious which companies adopted AI and which didn't, through consumer experience and financial results.

## Why he thinks AI is a bigger economic opportunity than software

- US GDP is about $27 trillion. Software and IT services are about $2 trillion, which is not even 10%.
- About $16 trillion, more than half, is services. The biggest sector is healthcare, followed by financial services. He sees the real potential of AI as disrupting this $16 trillion of services output.
- The key belief required: models keep improving quickly. He sees no slowdown soon.
- Scaling evidence: in 2019 GPT-2 couldn't count to 10. GPT-4 is arguably more persuasive and eloquent than most humans. That took about four years and roughly a 1,000x increase in model size, from about 2 billion parameters to roughly 1 to 2 trillion, depending on the source.
- Companies have announced plans to scale another 100x, taking spending from hundreds of millions to tens of billions of dollars. He expects costs to reach hundreds of billions, making these projects comparable to particle colliders.
- Don't bet against the technology. At each stage people dismissed it (GPT-2 couldn't count, GPT-3 failed simple math, GPT-4 hallucinates), and each time it improved. Many people, even in the AI industry, don't truly believe models will keep improving.
- The "Turing Trap" (from Erik Brynjolfsson's paper): framing AI as a replacement for humans is a trap. Most value will come from hybrid human-AI systems. He expects AI to create a different mix of jobs and likely a net increase in demand for human labor.
- Democratization: scaling makes the frontier undemocratic, like particle accelerators. The counterforce is open-source models arriving a few years behind and getting cheaper. Models around 10 billion parameters or smaller are reaching GPT-3.5 level.

## Building a company that keeps reinventing itself

- Investors think they bet on the next few years of a company. In the best companies, he says, they are really betting on continual reinvention.
- Amazon example: online bookstore, then everything store, then Prime, then the largest data center provider. AWS was the unpredicted move, and most analysts attribute most of Amazon's value to it.
- Nvidia example: a GPU company selling gaming and graphics chips for decades. About 15 years ago it saw people using its chips to train AI and invested heavily in R&D long before it showed in financials. It is now a trillion-dollar company almost entirely because of AI.
- Amazon lessons he applies at Scale:
  - Operational excellence is a huge engine of technical value. Jeff Wilke, who ran Amazon's consumer operations, is a close mentor.
  - Embrace operational complexity and marry technology with operations.
  - Take a very practical approach to business decisions.
  - Engineer problems to have as few interdependencies as possible. That lets you run many independent bets in parallel and double down on the winners.
- Culture tactics for reinvention at Scale:
  - Pure meritocracy. People at junior levels with good ideas get full responsibility to execute them. At most companies a manager or VP takes the idea and turns it into a career step.
  - Impact ceiling is unlimited, depending on how hard you work and how good and original your ideas are.
  - Anchor on solving big problems in the industry, the way Amazon anchors on the customer. Scale started with autonomous vehicles, then moved to US government and defense work, then to ensuring AI progress. Each larger problem opened bigger opportunities than the original one.
  - Keep pushing the ambition of the core vision.

## Hiring: the four traits and how he screens for them

- His favorite interview question: "What is the hardest thing you've worked on?"
- It tests for an internal vs. external locus of control. Internal means you believe your life outcomes come from your actions. External means you feel like a ball in a pinball machine. He only wants to work with internal-locus people.
- A way to measure it: how hard people work on things they care about, and how deeply they obsess over details.
- Scale's early hiring document had four traits:
  1. Internal locus of control.
  2. Problem solving: finds creative ways around obstacles, even when a problem can't be solved head-on.
  3. Impressive: people you genuinely admire, who raise the organization's level. If you admire someone, you are excited to come to work to learn from them.
  4. Collaborative: some people are impressive and driven but bad to work with.
- Test for real passion by asking why candidates want to interview at Scale. A good answer is odd and specific. A weak answer is "AI is the next big thing." A strong answer: they spent five hours checking data with a friend while training a model, one small data error broke the whole model, and they found that problem fascinating. He cites Paul Graham on people caring for an irrational reason.
- Warning sign: "If your hiring department looks like a college admissions office, you should be worried." Big-tech brand prestige selects for people who overvalue brand and status over impact. Big companies also give most people a tiny piece of a tiny piece of a problem. He wants people who care about impact, not status.
- Scale is not a "cool" company, because it is infrastructure. He doesn't want people who just want to be cool and work on exciting new technologies. He wants people willing to do unglamorous but important work. People who join know what they are signing up for.
- Non-consensus view: hard-working, high-capability people who are not highly experienced are very valuable. Most startups are "a buzzing hive" of such people building amazing things through trial and error. Much of the ecosystem over-focuses on hiring experienced people who have done it before.
- He also values weird people. Statistically, if you're normal you are inside the bell curve, and it's hard to do great things from there. A normal person's conversation is easy to simulate and has low information content. Surrounding yourself with weird people gives you a richer sea of ideas.

## Taste, strong opinions, and how he runs his day

- Strong point of view: the older advice was to have a neutral brand to appeal to everyone. He argues we are entering an era where it is right to have and voice a strong view. It attracts aligned talent, builds culture, and matters to customers who want to work with people who share their philosophy. Many enterprise software companies lose their identity and become just another tool in the toolbox.
- Taste: much of a company's product is the output of its taste. That covers taste in people, aesthetics, product and how to organize. Apple is the best example. He credits his violin training for developing taste and comfort with intuition. Business means working in gray areas where you can't be sure decisions are right, and most important things are hard to measure.
- Office space: he spends on a nice office because space affects thinking quality. Natural light is one of the best things for his thinking, and seating arrangements and small differences in space quality matter.
- Daily routine: he sets clear goals at the start of the day, asking "what are the most important things I need to get done today?" Start small, then raise the goals as you learn your limits. He attends many meetings and keeps checking progress against those goals.
