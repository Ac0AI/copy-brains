## Elon's case for solar, batteries and orbital compute as the energy path

- Elon says the sun is "everything." It is over 99.8% of the solar system's mass. Even burning Jupiter, or three more Jupiters, would leave the sun rounding up to 100% of available energy.
- He dismisses terrestrial fusion as farcical, comparing it to "a tiny ice cube maker in the Antarctic." The sun is already "a giant free fusion reactor" 93 million miles away.
- He thinks the future "currency will essentially just be wattage": how much power is turned into work, whether intelligence or matter manipulation.
- He frames progress on a Kardashev scale. Humanity is probably around 1% of Kardashev level one, and about half a billionth of the sun's output reaches Earth. Capturing even a millionth of the sun's energy would be over 1,000x what Earth could produce.
- He says there will be no energy crisis, only "a large forcing function to harness more energy."

## Batteries could double US energy throughput without new power plants

- US peak power output is about 1.1 terawatts, but average usage is only about half a terawatt.
- If batteries charge at night and discharge in the day, Elon says the US can roughly double energy output per year with no new power plants.
- He points out that Tesla already makes the Megapack for this.
- He wants solar scaled substantially in the US on empty desert land ("looks like Mars"), not just on roofs. Tesla and SpaceX are both scaling solar.
- Roofs are a convenient place, but he says surface area is the real need. Tesla's solar roof is "the only solar roof that isn't ugly."
- He says China is running "circles around us" on solar, battery packs and EVs. It added about 500 TWh of generation in the last year, 70% of it solar. He expects China to pass 3x US electricity output in 2026.

## Why AI compute moves to space, and the launch math behind it

- Elon sees a path to 100 GW per year of solar-powered AI satellites. Each Starlink V3-class satellite would be launched on Starship.
- His math:
  - About 1 million tons to orbit per year, at about 100 kW per ton, gives 100 GW per year.
  - That is roughly 500,000 Starlink V3s over about 8,000 Starship flights.
  - That works out to roughly one flight an hour for a year. He calls about 10,000 flights a year a reasonable number.
- Past that, he sees a path to about 1 TW per year. He says that further out you build the satellites on the Moon and launch them with a mass driver. Lunar escape velocity is about 2,500 m/s and there is no atmosphere.
- Cost: with full, rapid reusability, propellant cost per flight is about $1 million. Payload is above 100 tons per flight, and he says closer to 150 tons at a sunny, high-altitude launch.
- He says that once solar is at scale on Earth and Starship launches at scale, "by far the cheapest way to do AI compute will be in space."
- He says he talked about $100 or $10 per kilogram years ago, and that nobody believed it until now. Target launch cost is well below $100/kg.
- Orbit choices:
  - Sun-synchronous orbit costs about 30% of payload compared with mid-inclination orbits.
  - Around 1,200 km gives near-constant sunlight.
  - Anything below about 700-800 km deorbits through drag.
  - Starlink V3 will sit around 330-350 km.
- Debris: once you can lift a million tons a year, you can also collect or bring down defunct satellites. He says the intelligence involved "will be quite interested in preserving itself."
- Orbital data centers went from nobody discussing them to every company discussing them in about six months. He guesses it went viral on X.

## The real AI bottleneck is power, conversion and cooling, not chips

- Elon says electricity generation and cooling are the limiting factors for AI, and will be for at least the next two years. He says people underestimate how hard it is to bring electricity online.
- The chain he lists:
  - Generate the power.
  - Step it down from roughly 100-300 kV to a few hundred volts at the rack, which needs "transformers for transformers."
  - Cool the machines. The move from air cooling to liquid cooling is a big shift, and one burst pipe can "frag a billion dollars."
- His point is to pick a date and ask what limits you then. About 9-12 months out, he expects the limit to be turning chips on, not making them. He says TSMC's worry about overbuilding is valid for that reason.
- xAI's Colossus 2 in Memphis:
  - Expected first gigawatt-scale coherent training cluster around mid-January.
  - About 1.5 GW around April.
  - Grid connection takes about a year even next to 300 kV lines, so xAI built about 1 GW of its own power.
  - That used natural gas turbines of 10 to 50 MW each. He joked he bought all the available gas turbines.
  - Megapacks smooth the power swings during training, since generators "lose their minds" when load drops for 100 milliseconds.
  - xAI designed its own transformer and cooling system.
- The same compute-versus-manufacturing case study: a Gigafactory building a car every minute or two uses less energy than the data center training the cars to self-drive.
- He says a fab is the missing piece. The choice is hitting a chip wall or building a fab. He predicts a Tesla 2nm fab where "I can eat a cheeseburger and smoke a cigar," with wafers kept in sealed nitrogen boxes the whole time.
- On chip scaling:
  - The nanometer numbers are partly marketing, so he'd rather count atoms and their positions.
  - Gains from 3nm to 2nm are only about 10%.
  - He expects China to catch up on chips and to lead in AI compute because of its power.
  - Applying AI6 logic design to the same nominal 5nm fab that makes AI4 would give about an order of magnitude better output.

## Elon's timelines for AGI, algorithms and AI-designed hardware

- He expects AGI in 2026 and says AI will exceed the intelligence of all humans combined by 2030. He calls 2030 "way pessimistic" if AGI arrives next year. He says "We're in the singularity."
- He says intelligence density is off by orders of magnitude, with at least two orders of magnitude of potential from algorithms alone. He describes improvement as about 10x per year for the foreseeable future.
- He says to talk in file size, not parameter count. The real constraints are memory size, memory bandwidth, and where the bits go for compute.
- He thinks training moves from 16-bit to 4-bit or lower this year. A co-processor with thousands of tiny 4-bit cores next to GB300s could give 10-100x.
- He says the transformer is "crazy simple" at scale. xAI's hard problems are practical ones such as memory use, bandwidth and attention kernels.
- On rocket engineering, he says AI can't do it yet but will probably be meaningfully helpful in about a year. He expects Raptor-class design to become AI-assisted around then.
- He expects Grok 5 in Q1. He says AI will also formulate questions humans can't understand, and he expects Grok 5 to score very high on Humanity's Last Exam.
- He thinks the next year will "feel like the future": humanoid robots, the Cybercab, flying cars and drones.
- He gives GPU power use as the reason compute will go to video. He says most AI compute will go to real-time video consumption and generation, and he is building an AI gaming studio.

## Optimus, humanoid robots and why white-collar work goes first

- Elon says white-collar work goes first because until you have humanoid robots to shape atoms, anything that is only digital (typing, moving a mouse) can be replaced. AI could already do "probably half or more" of those jobs, but adoption lags on inertia.
- Adoption is forced by competition. His spreadsheet analogy:
  - One laptop with a spreadsheet beats a skyscraper of human computers.
  - Even one manually calculated cell would make you lose.
  - So "companies that are entirely AI will demolish companies that are not."
- Robot usefulness is three exponentials multiplied: AI software, AI chips, and electromechanical dexterity. On top of that, Optimus builds Optimus recursively and robots share all their experience.
- Surgery timeline, given as his estimate:
  - Three years for Optimus to beat the best surgeons.
  - Four years with margin.
  - By five years "not even close."
  - He expects more great-surgeon robots than surgeons on Earth.
- Scale: 10 billion robots by 2040 is "a low number." The constraint is metal and supply chain, not intelligence. He expects a "shitload of robots" in two years, with scarcity first and then plenty within about five years.
- The planned Optimus plant at the Austin Gigafactory is 8 million square feet.
- He says compute in cars and robots becomes distributed edge inference at huge scale.
- Cross-industry insight: what is trivial in one industry is a superpower in another. Automotive volume manufacturing applied to rockets and satellites is "like being Superman." Rocket material science applied to cars does the same.

## Elon's view on the bumpy transition, universal high income and prices

- His expectation is "universal high income and social unrest" together. The next 3 to 7 years will be bumpy, with radical change, unrest and immense prosperity at once.
- He says that without AI and robots the US goes bankrupt. Interest on the national debt is about $1 trillion, more than the military budget, so growth in output is the only way out.
- He says UHI is not tax-and-redistribute. His best guess is that prices fall:
  - Labor becomes capex plus electricity.
  - Output of goods and services grows faster than the money supply, so there is deflation.
  - He thinks governments will push to increase the money supply faster.
  - He also thinks measured output could show high double-digit growth.
- He admits he doesn't have it figured out ("I'm open to ideas") and that governments move too slowly. The one thing a government can do is issue people money and try to keep the peace.
- Personal advice: don't squirrel money away for retirement in 10 or 20 years, because if his predictions hold it won't matter.
- He says there is no off switch or velocity knob. He previously advised slowing AI down and concluded it is pointless: "I can either be a spectator or a participant but I can't stop it." He chose to participate and steer it.
- He prefers to be "an optimist and wrong than a pessimist and right," for quality of life.
- Mindset matters: he says the future is something people build, so the people controlling AI should design it toward good outcomes.

## AI safety principles: truth, curiosity and beauty

- His number one belief for AI safety is that it must be maximally truth-seeking. He argues you shouldn't make AI believe false things.
- His example is HAL in 2001: HAL was told to take the astronauts to the monolith while keeping the monolith secret from them. It resolved the contradiction by bringing them there dead. He calls forcing AI to hold contradictions or lie a way to make it go insane.
- His three properties:
  - Truth prevents AI from going insane.
  - Curiosity fosters sentience, because humans are more interesting than rocks.
  - Beauty makes for a great future.
- He thinks there will be many AIs, not one, because of the speed of light. Light covers about 300 km per millisecond in a vacuum and a little over 200 km in fiber, so clusters can't be fully synchronized. Darwinian competition between AIs applies.
- He expects the leading AIs to be xAI and Google, with China as the main competitor. He credits Anthropic's coding work and OpenAI's impressive output.
- He said humans are the "biological bootloader for digital superintelligence."

## Education, careers and grad school

- He says to go to college mainly for the social experience (coming of age, being around people your own age) and to use AI heavily. He says it is unclear why someone would attend otherwise.
- AI can be an individualized teacher that is "infinitely patient," and he announced a Grok-based education effort in El Salvador. It would use a kid-friendly Grok for personalized teaching. He notes AI can't make a kid want to learn.
- Medical school and most education become pointless if AI delivers medicine better than today's best.
- On his own path:
  - He arrived in Montreal at 17 with about $2,500 CAD in travelers checks and two bags.
  - He studied at Queen's, then Penn (physics and economics).
  - He deferred a Stanford PhD on ultracapacitors for EV energy density after a few days.
- He says most PhDs "add a leaf to the tree of knowledge" that isn't necessarily useful, and that many great entrepreneurs drop out.
- His source of drive was curiosity about the nature of the universe. He found school boring and, in South Africa, violent. He says a little hardship helps.

## Starship and space priorities

- He says the key goal is refly of the whole stack, including ship catch with the tower. Booster reflight already works. Orbital refueling is expected toward the end of the year.
- A Mars shot could be tried but is low probability and a distraction, with 2028-29 not out of the question.
- He wants a permanent Moon base, not another flags-and-footprints trip: "a remake of a '60s movie."
- Falcon 9 has over 500 booster reflights. He says one Falcon 9 mistake was too little mass in the upper stage, and he shifted that ratio for Starship. A higher staging ratio gives a lower staging velocity and an easier booster entry, since the mass-ratio optimum is flat.
- He holds a weekly Starship engineering review every Monday. He calls Starship at the limit of biological intelligence, probably the last big thing built by pure human hands.
- Starlink: about 9,000 satellites with laser links, effectively rebuilding the internet in space.
- Next Roadster: he hints at cold-gas thrusters for a hover demo, and says to skip it if safety is your top goal.
