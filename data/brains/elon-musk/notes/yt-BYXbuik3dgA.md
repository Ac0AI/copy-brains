## Why Elon says space becomes the cheapest place for AI within 36 months

- Elon predicts space will be "by far the cheapest place to put AI" in 36 months or less, "maybe 30 months."
- Outside China, electricity output is roughly flat while chip output grows close to exponentially. He asks how you turn the chips on.
- Solar panels produce about 5x more power in space than on the ground. There is no day/night cycle, seasonality, clouds or atmosphere, and the atmosphere alone costs about 30% of the energy.
- Space also needs no batteries, so he puts the combined advantage at about 10x cheaper.
- Space solar cells are cheaper to make because they need little or no glass and no heavy framing, since there is no weather.
- Chinese ground solar cells cost roughly 25-30 cents a watt, which he calls "absurdly cheap."
- On servicing: GPUs are quite reliable once past infant mortality, which can be burned in on the ground first.
- Scaling logic: Earth receives about half a billionth of the sun's energy. Harnessing even a millionth of it would be roughly 100,000x current civilization's electricity (give or take an order of magnitude).
- The US uses about half a terawatt on average, so one terawatt of data centers would double US consumption.
- Launching from Earth tops out around a terawatt a year before rocket fuel supply becomes a problem. Beyond that he wants a mass driver on the Moon, which he puts at around a petawatt a year.
- On the Moon, silicon and aluminum are available for cells and radiators, while chips would be shipped from Earth.

## Why ground power is the bottleneck: the real power needed per GPU

- Elon calls power "the limiting factor" in the one-year timeframe. He expects chip output to exceed the ability to turn chips on toward the end of this year.
- He says naive estimates just multiply GB300 power draw and miss the rest of the load:
  - networking, CPU and storage
  - peak cooling, about a 40% increase in Memphis heat
  - a 20-25% margin for taking generators offline to service them
- His result is that roughly 330,000 GB300s with all support need about 1 GW at the generation level.
- Utilities are slow: an interconnect study alone takes a year.
- For Colossus 2, xAI built its own power plants. It ganged turbines together and hit a Tennessee permit issue, so it crossed into Mississippi, a few miles away, and ran high-power lines.
- Gas turbines are sold out through 2030. The limiting part is the vanes and blades, which come from only three casting companies worldwide, all massively backlogged.
- He thinks SpaceX and Tesla may have to make turbine blades internally.
- US solar tariffs are "several hundred percent" and domestic production is "pitiful."
- Tesla and SpaceX each have a mandate toward 100 GW a year of solar cell production, built from raw materials up.
- He says anything that limits US electricity should be fixed, provided it isn't very bad for the environment. He supports permitting reform and says countervailing tariffs make sense against another country's subsidies.
- Edge compute (Tesla cars, Optimus) is not power-constrained, because the load is distributed and can charge at night. US peak capacity is over 1,000 GW against 500 GW average use.

## Orbital AI scale-up plan: launch cadence, chips and Terafab

- In five years he predicts SpaceX will launch and operate more AI in space each year than the cumulative total on Earth, at "a few hundred gigawatts per year and rising."
- 100 GW takes on the order of 10,000 Starship launches, roughly one an hour. He compares this to airline cadence.
- He thinks 20 or 30 ships could do it if each turns around in about 30 hours. SpaceX is aiming for 10,000 launches a year, maybe 20,000 to 30,000.
- Target: a million tons to orbit in 3-4 years at 100 kW per ton, which is 100 GW a year of solar and matching chips.
- Chip math: about a kilowatt per reticle means about 100 million full-reticle chips for 100 GW.
- He says memory is his biggest concern, ahead of logic.
- Chip design for space:
  - radiation-tolerant
  - runs hot, because raising operating temperature 20% in kelvin can halve radiator mass
  - neural nets tolerate bit flips, unlike heuristic programs
- Terafab plan:
  - TSMC and Samsung are moving as fast as they can. Fab start to high-yield volume takes about 5 years.
  - Elon says he told TSMC, Samsung and Micron to build more fabs faster and that he would guarantee to buy the output.
  - His own fab would need "north of a million" wafers a month and would do logic, memory and packaging.
  - He would buy conventional equipment (ASML, Tokyo Electron, KLA, etc.), use it in unconventional ways to scale, then modify it. He compares this to The Boring Company.
  - First step: build a small fab, "make our mistakes at a small scale and then make a big one." He admits "success is not guaranteed."
- Tesla AI5 is expected to reach volume around Q2 next year, with AI6 under a year later. Chip supply is booked across TSMC Taiwan, Samsung Korea, TSMC Arizona and Samsung Texas.
- Limiting factor: chips in the 3-4 year range, power before then.

## How Elon runs companies: limiting factor, urgency and engineering reviews

- His core method: "I'm constantly addressing the limiting factor." He spends time where the bottleneck is, so a well-running company sees little of him. He has no regular meetings with The Boring Company.
- Deadlines: he sets the most aggressive one he thinks has a 50% chance of being hit. He says schedules expand to fill the time available.
- He says a "maniacal sense of urgency" from whoever leads the company flows through the organization.
- Review cadence:
  - weekly or twice-weekly detailed engineering reviews on limiting-factor items
  - the AI5 chip review is Tuesdays and Saturdays, usually two to three hours
  - skip-level format: everyone reporting to a manager gives an update, with no advance preparation, to avoid being "glazed"
  - he mentally plots each update on a curve to see whether the work is converging
- He takes drastic action only when he concludes success is not in the set of possible outcomes. That happened with Starlink in 2018.
- He says micromanaging thousands of things is impossible. He drills into a detail only when it is the limiting factor, because "sometimes the tiny things are decisive."
- Scaling manufacturing follows an S-curve, and there is a physical limit on how fast atoms can be moved.
- He says people should do what they find personally motivating, not take his ideas.
- Closing frame: solve bottlenecks by leaning into acute pain ("I have a high pain threshold"). He says it is better to err on the side of optimism and be wrong than on the side of pessimism and be right.

## Hiring and talent evaluation

- Elon interviewed the first few thousand SpaceX employees. He treats his interviewing record as a large training set and "RL'd" himself on the misses.
- He asks for bullet points of evidence of exceptional ability. The evidence can be off-the-wall and outside the domain. If someone can cite three "wow" items, that's a good sign.
- "Don't look at the resume, just believe your interaction." If the conversation isn't impressive after 20 minutes, trust it over the paper.
- Hire for talent, drive, trustworthiness and goodness of heart. Domain knowledge can be added, but those traits cannot be changed. Most Tesla and SpaceX people did not come from the auto or aerospace industries.
- He does not look for a sparring partner. His test is whether someone gets things done.
- Senior Tesla team average tenure is about 10-12 years. Executive churn tracks growth: the team that runs 50 people differs from the one that runs 500, 5,000 or 50,000.
- "Pixie dust" problem: Tesla execs were relentlessly poached (Apple offered double compensation without an interview). He says hiring a Google or Apple name does not automatically bring success.
- He cites the "significant other problem" in getting engineers to move, calling Starbase a "technology monastery."

## Starship: steel over carbon fiber, and what's still hard

- Original plan was carbon fiber. Progress was slow, and he says the switch to steel came from desperation.
- Carbon fiber problems:
  - about 50x the cost of steel for the specialized cryogenic-capable grade
  - needs an autoclave bigger than any that exists, or a slow room-temperature cure
  - wrinkles and defects at scale, and low toughness (it shatters)
- Why steel works:
  - at cryogenic temperatures, full-hard 300-series stainless has strength-to-weight similar to carbon fiber, and Starship's methane and oxygen are both cryogenic
  - costs about 50x less
  - easy to weld, even outdoors, and easy to modify by welding things on
  - melting point is about twice aluminum's, so the heat shield mass is much lower, roughly half on the windward side and none needed on the leeward side
  - net result: the steel rocket weighs less than the carbon fiber one
- He avoided aluminum-lithium (used on Falcon 9) because it needs friction stir welding and mechanical attachments. That was hard enough at 3.6 m diameter, let alone 9 m.
- His precedent was early US Atlas rockets, which used thin steel balloon tanks. In retrospect: "we should have started with steel."
- He calls Starship "the most complicated machine ever made by humans by a long shot." Raptor 3 is the best rocket engine ever, and it "desperately wants to blow up."
- Liftoff produces over 100 GW of power, about 20% of US electricity. Two boosters have exploded on test, one obliterating the test facility.
- Biggest remaining problem: a fully reusable heat shield. No one has made one, and landing, refilling and flying again without inspecting 40,000 tiles is the goal.
- Full reusability is what lets humanity become multiplanetary.

## Optimus, AI strategy and the economics of digital labor

- Optimus has three hard problems: real-world intelligence, the hand, and scale manufacturing. The hand is "more difficult than everything else combined" electromechanically.
- Everything is custom-designed from first principles (motors, gears, power electronics, controls, sensors), with no supply chain and nothing in a catalog.
- He plans an "Optimus Academy" with at least 10,000, maybe 20-30,000, robots doing self-play in reality. Tens of thousands of real robots close the sim-to-real gap for millions of simulated ones.
- Optimus 3 can reach about a million units a year. He thinks Optimus 4 is needed before 10 million a year. Initial ramp will be slow.
- The Optimus 3 target is a tall (5'11") robot with human-level or better dexterity, so it will cost more than small Chinese humanoids (he names Unitree).
- Best early use: any 24/7 continuous operation. He sees Tesla headcount rising, with output per human rising dramatically.
- Robot usefulness is digital intelligence times chip capability times electromechanical dexterity, all growing exponentially. Robots building robots makes it a "recursive multiplicative exponential." He calls Optimus "the infinite money glitch."
- On xAI:
  - Grok could orchestrate Optimus robots, for example assigning tasks to build a factory.
  - His xAI plan follows the Tesla self-driving path, "instead of driving a car, it's driving a computer screen."
  - He expects digital human emulation to be solved by the end of this year.
  - Customer service is his example entry point: close to a trillion dollars, about 1% of world economy, no barriers to entry, and no API integration needed if AI uses the same apps humans do.
  - He then expects it to march up the difficulty curve, for example to chip design with Cadence and Synopsys tools.
  - He argues the most valuable companies' output is digital, so a human emulator "would give access to trillions of dollars of revenue."
  - He predicts pure AI and robot corporations will far outperform any with humans in the loop, like a spreadsheet versus a skyscraper of human "computers."
  - xAI's edge, he argues, is hardware speed: "whichever company can scale hardware the fastest will be the leader."
  - He says ideas diffuse between the AI companies in about six months or less.
- He says the real RL verifier is reality, "you can't fool physics."
- He wants debuggers that trace AI errors to the neuron level and to the origin (pre-training data, post-training or RL).
- His alignment view is to make AI truth-seeking and not "politically correct," because forcing it to lie or hold contradictory axioms can break it. He cites the lesson of HAL in 2001.
- On China, he says it does about twice as much ore refining as the rest of the world combined and about 98% of gallium refining, and expects its electricity output to pass 3x the US this year.
- His view is that the US can't win on human headcount, with China at 4x the population, but might win on robots.
- Tesla recently opened a lithium refinery in Corpus Christi and a nickel cathode refinery in Austin, which he calls the largest outside China.
