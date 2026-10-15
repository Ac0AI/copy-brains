## Why Scale AI exists: data is the bottleneck for machine learning

- Alexandr describes machine learning as a subset of AI where programs learn tasks that normally need human judgment by being fed lots of data.
- He frames AI as a "once in a generation shift in technology," comparable to the advent of computing, because it is an enabler of things that previously had to be done by humans.
- The idea came while he studied machine learning at MIT. He had product ideas but hit an "elephant in the room" problem: how to get the data to build the models.
- Scale's stated mission is "to accelerate the development of AI applications."
- He left MIT after about a year, bored by the slower pace of school. He had earlier worked at Quora for a couple of years, having been recruited through anonymous online coding competitions in high school.

## What Scale does and how the data pipeline works

- Scale is a "data refinery." Customers send raw data such as camera images. Scale labels it so models know what they should be doing, for example outlining people, cars and lane markings in a self-driving image.
- Customers named as examples: Waymo and Uber.
- The pipeline is mostly machines, with humans on top:
  - Scale's own classical computer vision and ML models do a first pass (for example drawing and tracking boxes over time).
  - A large team of well-trained humans spots and corrects errors, mainly where the models are uncertain.
  - He says Scale uses "more sophisticated filters" than a simple confidence cutoff.
  - Accurate data goes back to the customer, who retrains their models. He calls it "a wonderful cycle."
- Positioning: Scale is "an infrastructure layer for machine learning globally." It takes the data problem off customers' plates so they can focus on building models.
- Team size at the time: about 150 people, mostly in the San Francisco Bay Area.
- Total raised: over $100 million, with Founders Fund named as an investor.

## Quality as an infrastructure promise

- Scale takes responsibility for data quality. Customers can audit all the data.
- He compares it to AWS: infrastructure providers must be extremely reliable, because many people build on top of them. Reliability is what lets customers trust the layer beneath them.
- On bias and weird model behavior, he says the cause can usually be traced to the data. The fix is large, diverse, representative datasets that fill gaps and make models more robust over time.
- Example he gives: face unlock failing across similar-looking faces comes down to what was in the training data.

## Why companies keep their data private, and the open-source tradeoff

- Companies train on separate datasets, and he sees that as reasonable. Data and models are their IP, which preserves the incentive to build novel, valuable things.
- He ties this to free-market logic: many parties running in different directions produce variety, versus a planned economy with efficiency but low variance.
- Open datasets do exist in research. He credits ImageNet (Stanford's Fei-Fei Li and her lab) as the large dataset that kicked off the deep learning wave.
- He says shared infrastructure that a large community builds on is "very valuable."

## Lidar vs cameras: use multiple sensors

- Scale published a blog post on lidar versus cameras, based on seeing a lot of both kinds of data.
- Lidar strengths: an accurate, reliable 3D map, and it works in the dark because it makes its own light.
- Lidar weakness: snow, fog and smoke reflect its lasers and distort the model.
- Cameras: the best computer vision models are about 99% accurate, which is not enough for driving where rare failures matter.
- His conclusion: use both. Sensors with different strengths and weaknesses can cover each other to reach the extreme reliability needed.
- He says real vehicles from companies like Waymo and Cruise combine them, and many still lean heavily on lidar.

## Where AI goes next, and why automation creates work

- Self-driving timeline: he would not give a precise year but expects it within roughly ten years. He thinks regulation won't be that hard, citing precedent from airplane autopilot.
- He argues the "AI replaces humans" narrative is far from reality. His example is ATMs: bank teller jobs grew because ATMs expanded banking, brought in new customers, and let tellers move to higher-value work like mortgages and credit.
- Trucking example: long-haul automation targets the boring, arduous stretches in a market short of drivers (median driver age around 50). Current drivers can move to higher-value short trips, such as warehouse-to-meeting-point runs.
- Automation arrives first where there is an acute problem today, then makes existing jobs higher value.
- Near-term "boring" opportunities he names: paper form processing, email reply suggestions, and medical imaging (X-rays, ultrasounds, scans). The World Health Organization reportedly shows roughly a 10x global shortage of doctors, so automating first-pass reads and marking problem zones has huge value.
- He also names adaptive education as an obvious application, and notes the Apple Watch fall detection as an example of useful "boring" ML.
- He is skeptical of near-term general AI. He says "Moore's law is gonna be dead," quantum computing is far away, and it is unclear that infinite compute would produce general AI.

## Principles for building a company

- On talent, he tweeted that there is a huge "band gap" between good and great people. Great people are "clever, determined, fight hard, more loyal in hardship, and strategic."
- His five-step recipe for building something great:
  1. Build something you care about.
  2. Find users and listen to them.
  3. Improve it every single day (the step he says people leave out).
  4. Find people who inspire you and convince them to work with you.
  5. Repeat.
- On improvement: a product is either getting better or getting worse. If you stop, a competitor improves and your users get used to an average product.
- On startup ideas, he tweeted that watching YC demo days showed many ideas derivative of hot financings, and that "one of the unhip ideas will be the big company." On large YC batch sizes, he thinks a hundred is fine because it is "Black Swan farming," and takes "as many as it takes."
- Long-term thinking: he praised Quora's Adam D'Angelo for thinking extremely long term, calling it a competitive advantage in an ecosystem where most people are short-sighted.
