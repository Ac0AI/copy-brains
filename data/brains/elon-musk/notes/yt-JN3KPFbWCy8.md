## First-principles reasoning and physics as the test of truth

- Elon says the tools of physics apply to almost any arena of life. For something important, "you need to reason from first principles and think about things in the limit" in one direction or the other.
- Example of limit thinking: even if you harnessed the entire power of the Sun, you would still care about useful compute per watt.
- He treats reality as the judge: "Physics is a law, everything else is a recommendation." He says he has seen people break laws made by man, but none break the laws made by physics.
- He distinguishes physics (discovering rules that already exist) from engineering (inventing things that never existed). The range of possible engineering is far larger, but it only works if the physics underneath is right. If you can't count on the foundational physics, "the inventions are simply wishful thinking."
- At SpaceX and Tesla, simulation is the main way to predict outcomes. A rocket can't be tested until it flies, so the team simulates subsonic, transonic, supersonic and hypersonic ascent, re-entry heating and orbital dynamics. He says you run a simulation because you don't already know the outcome.
- He ends the conversation on a quote from Walter Isaacson's biography: "the only rules are the ones dictated by the laws of physics."

## Building AI at xAI: truth-seeking, Grok and compute constraints

- xAI's mission, in his words, is "understand the universe". He frames AI that cannot figure out new physics as not yet equal to humans.
- He says other large language models are unreliable on engineering. They hallucinate most "when you least want it to", on important and difficult questions, where they are confidently wrong.
- xAI's aim is engineering, math and physics answers you can count on. That means tracing answers back to physics first principles and mathematical logic, and minimising how often the model is confidently wrong. Some error is accepted.
- He explains token-by-token drift. Predicting one token after another is like summing vectors, and small errors add up until the output makes no sense.
- His fix is to revise the way an author revises a book. The model should check the whole output for coherence, going back over the beginning, middle and end, and iterate on a draft.
- Grok has a "fun mode". Its personality is modelled on *The Hitchhiker's Guide to the Galaxy*. He says the humor sits on top of an aim to adhere to the truth as closely as possible. His view is "I would never go back to regular mode even on serious topics", because fun mode is more compelling.
- Grok was trained on 8,000 H100s running at peak efficiency. He says xAI will be "more than doubling our compute every couple months for the next several months."
- He argues that most of the work in open-sourcing a model is data curation, not code. The code is small and the model weights are essentially a giant file of numbers.
- He says you can't just crawl the internet. A huge percentage of websites have more noise than signal, because they exist for SEO or are scams. Separating good data from bad is the core job.
- When Grok critiqued him, he corrected it where it leaned on conventional media. He said the training data should include the actual court conclusions, which are public. In his account they are "completely the opposite of what the media wrote."
- He favors open sourcing, "perhaps with a slight time delay", maybe six months, and says he is generally biased toward open sourcing.

## Efficiency, power and the next bottlenecks for AI

- He sequences the bottlenecks. Right now it's silicon chips. In about a year it becomes a shortage of voltage step-down transformers. In about two years it becomes electricity shortages in general.
- The transformer constraint is concrete. Power arrives at around 300,000 volts and must step all the way down to around 7 volts. He says the industry "is not used to rapid growth."
- Of the limiting-factor sequence he says, "it will get solved, it's the question of how long it takes."
- He told a gathering of utility companies to prepare for a tripling of electricity demand. In very rough terms, energy use is 1/3 electric, 1/3 transport and 1/3 heating. Moving to sustainable, electric everything means tripling electricity output.
- He says electrification of transport and heating will be much bigger than AI demand, at least in the short term.
- The grid is sized for real-time peak load because there is almost no buffering. The peak-to-trough ratio for power plants is anywhere from 2 to 5. He urged utilities to build more power plants and "definitely" buy more batteries to produce energy at night and use it during the day. He expects very heavy battery usage.
- He cites the multi-day blackout in Austin as an example of an under-buffered grid.
- On efficiency he says the thinking part of the brain uses less than 10 watts, yet can produce a better novel than a 10-megawatt GPU cluster, a six-order-of-magnitude gap.
- His principle for any technology is "first you try to make it work and then you make it efficient." He expects models to get smaller and need far less compute and power over time.

## Tesla Autopilot, Optimus and building in-house

- Elon describes Tesla's end-to-end approach as "photons in, controls out". Video goes in and motor controls come out. The network learned to read, and learned what cars, people and cyclists are, from video alone. Nobody taught it.
- He argues Tesla's approach is more compute-efficient than LLMs because it had to be. The car works with about 100 watts and an in-car computer at 144 trillion operations per second.
- He says that even with Hardware 3 and 100 watts, the car will be able to drive better than a human. With optimisation it could be under 50 watts. Hardware 4 fixed a number of functions that had been run in emulation, and Hardware 5 will be better still.
- He expects the vehicle work to carry over to Optimus, since the car is "a robot on four wheels". The perception is similar and only the controls differ.
- For Optimus he was surprised that every part had to be developed in-house. There were no off-the-shelf motors, electronics or sensors. He says they couldn't find a source of electric motors "for any amount of money", and of the many existing motor designs, "none of them were suitable for a humanoid robot."
- Optimus is designed to be manufactured the way a car is. He thinks it can ultimately cost less than a car, because the robot has much less mass and fewer actuators.
- One goal is for Optimus to thread a needle just by looking. He estimates that's about a year away, and he notes he is "pathologically optimistic on schedule" but "always late in the end" rather than never.

## Regulation, bureaucracy and the cost of delay

- He says the limiting factor for Starship launches is currently regulatory approval. The FAA had approved, but SpaceX was waiting on Fish and Wildlife to finish its analysis.
- Tesla is subject to over 100 regulatory agencies, domestically and internationally. He says you could fill a room with the regulations Tesla must follow.
- He shares examples of absurd process:
  - **Shark risk:** the agency wouldn't share shark data because of fin hunters. Another part of the same department could do the analysis, but the first part wouldn't give it the data. It took an internal workaround to confirm the shark-strike probability was essentially zero.
  - **Whales:** an organisation he didn't know existed cares about hitting whales in international waters. He says the probability is basically zero.
  - **Seals:** at Vandenberg, regulators worried about seal procreation and sonic booms. The seal population had steadily increased through many launches. SpaceX still had to strap a seal to a board and play sonic boom sounds through headphones, twice, with different seals.
- Despite his own record of regulatory battles, he supports oversight of AI. He has been "somewhat of a Cassandra on the subject for over a decade" and wants at least an objective third-party referee who can understand what the leading players are doing and voice concerns publicly, even without enforcement power.
- On the SEC, he says he settled only because Tesla's CFO told him the banks would suspend credit lines and Tesla would go bankrupt immediately. In his account, he then won two unanimous jury verdicts, in San Francisco and Los Angeles, which he says were venues chosen because opponents thought he was most likely to lose there.
- He argues the SEC never pursued hedge funds that were shorting Tesla. His explanation is incentive structure. Staff lawyers are paid little, want a "trophy" for their LinkedIn, and don't want to harm the future prospects of high-paying firms that represent the funds. He calls this regulatory capture.

## Making life multiplanetary and the case for urgency

- Elon lays out a timeline argument. Earth is about 4.5 billion years old, and civilization is only about 5,000 years old, which is "1 millionth of Earth's existence."
- The Sun is slowly expanding and will eventually boil the oceans. He says that if humanity does not become multiplanetary, then "annihilation of all life on Earth is a certainty."
- On a galactic time scale this could be as little as half a billion years. He notes that is only about 10% longer than Earth has existed, so if life had taken 10% longer to evolve, it wouldn't have existed at all.
- He reads the Fermi paradox through "great filters", one of which is whether a civilization becomes multiplanetary.
- He says this is the first time in Earth's history that life can extend beyond Earth. The window is open now, and "it may be open for a long time or a short time". His conclusion is that the smart move is to make life multiplanetary while it's possible.
- He says he has seen no evidence of aliens. SpaceX has no official policy for meeting aliens. He notes SpaceX has more satellites up there than everyone else combined, so it would likely know.
- He ties his philosophy to this. We don't know the meaning of life, but the more we expand the scope and scale of consciousness, digital and biological, the better we can understand which questions to ask.

## X: recommendations, attention and Community Notes

- He says the X recommendation system should become fully AI-driven. Today it is mostly heuristics, with a little AI. He describes the goal as a vector match: build vectors around a post and around a user, then match the two.
- He says recommendations are currently weak for accounts you don't follow, or beyond one degree of separation. Replies are weighted a couple of orders of magnitude lower than primary posts. He says that is incorrect, since a reply can be better than the original.
- He wants to move away from the word "tweet", because posts now include two- to three-hour videos. Apple posted a full episode of *Silo* on X, which he says was their best social media performance ever on any platform. He calls it a good idea.
- For video, context from comments can populate the vector space. A later step is for the AI to watch the content and describe it, so it can recommend like a friend who knows you. He says AI will know you better than your friends do.
- Attention is a large factor in ranking. He says long-form is better on the platform because it generates more user seconds. A link leading off-platform gets fewer user seconds, though X is not opposed to links.
- On ads, he says an ad you actually need, shown when you need it, is content. Even when it isn't needed, it should be entertaining or aesthetically pleasing. His test is "do you regret seeing it or not", and if you don't, it's a win. He names Coca-Cola and McDonald's as brands running good ads on X.
- He says the goal is for X to be even-handed and a level playing field. His line on free speech is that it only matters if people you don't like are allowed to say things you don't like. Otherwise "it's only a matter of time before the censorship is turned upon you."
- Community Notes, as he describes it:
  - A note is shown only when people who have historically disagreed in how they rate notes agree with each other.
  - AI builds a vector space of how each user has rated past notes, so it's not simply left versus right.
  - All code and all data are open source, so any note can be independently recreated and interference would be noticed.
  - He says he has yet to see an incorrect note survive more than a few hours.
  - He contrasts it with Wikipedia, which he calls very hierarchical, while Community Notes has no hierarchy. His test is that he couldn't change a note "if somebody put a gun to my head."

## OpenAI, recruiting and trust

- Elon says OpenAI was created because of his discussions with Larry Page about AI safety. At that time Google had acquired DeepMind, had about two-thirds of the world's AI researchers, and had "basically infinite money and compute". He says Page didn't care about safety and called him a "speciesist" for being pro-human.
- He calls recruiting Ilya Sutskever one of the toughest recruiting battles he has had, mostly against Demis Hassabis. He calls Ilya the "linchpin" of OpenAI's success.
- He says he provided all of the funding at the start, over $40 million. The "open" in OpenAI was supposed to mean open source, and it was created as a nonprofit. He says it is now closed source and maximum profit, "which I think is not good."
- On trust, he says he looks at someone's track record over time. He says he has almost never been betrayed.
- He says to never trust a cynic. Cynics excuse their own bad behavior by saying everyone does it, so cynicism is a red flag.
- He believes most people are "kind of medium good".
