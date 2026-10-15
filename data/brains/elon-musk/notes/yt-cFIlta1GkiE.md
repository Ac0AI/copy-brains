## Starting with a useful product, not a company

- Elon did not set out to build something great. He says: "I wanted to try to build something useful, but I didn't think I would build anything particularly great."
- In 1995 he chose between a Stanford PhD in material science (ultra capacitors for electric vehicles) and the internet. He asked his professor to defer for a quarter because "this will probably fail."
- He expected failure each time and treated the downside as returning to grad school.
- He did not initially want to start a company. He sent his resume to Netscape and got no response. He hung around the lobby but was too shy to talk to anyone. "Since I couldn't get a job at an internet company, I had to start an internet company."
- Zip2 was an early maps, directions, white pages and yellow pages product for the internet. He wrote it himself and read the port directly instead of using a web server, because he couldn't afford a T1.
- The office cost $500 a month on Sherman Avenue in Palo Alto. He ran a LAN cable through a drilled hole to the ISP on the floor below. The team slept in the office and showered at the YMCA.
- Zip2 sold for about $300 million. His share was a $20 million check.

## Lesson from Zip2: don't let legacy customers and investors steer the product

- The main mistake at Zip2 was too much shareholder and board control by legacy media companies.
- The New York Times and others were investors, customers and board members. They saw everything through the lens of legacy media and pushed the company to use the software "in ways that made no sense."
- Elon says Zip2 had better technology than Yahoo but "never really got used" because customers constrained it.
- That pushed him to go direct to consumer with X.com, which merged with Confinity to become PayPal.
- He put almost all of the $20 million from Zip2 into X.com and "kept the chips on the table."
- He says the PayPal alumni network may have created more companies than anything else in the 21st century.

## Starting SpaceX with a low chance of success

- After PayPal he found no date or plan for sending people to Mars on the NASA website. His first idea was a philanthropic "Life to Mars" mission to land a small greenhouse with plants.
- In 2001 and 2002 he went to Russia to try to buy ICBMs to use as rockets, minus the nukes. The Russians kept raising the price, so he concluded the real problem was cost, not will. There was no way to reach Mars without breaking the budget.
- He started SpaceX in mid-2002 to advance rocket technology.
- His reasoning on odds: defense contractors won't advance the technology because they are beholden to the government. "It's either coming from a startup or it's not happening at all." So "a small chance of success is better than no chance of success."
- He put the odds at under 10%, maybe 1%. When recruiting he said "we're probably going to die."
- He became chief engineer because he couldn't hire anyone good. The good chief engineers wouldn't join a risky company.
- The first three Falcon flights failed. The fourth worked, and he had no money left. He says that without it "it would have been curtains."
- A working fourth launch wasn't enough. NASA also awarded a space station resupply contract just before Christmas 2008. He blurted out "I love you guys."
- The Tesla financing round closed at 6 p.m. on December 24, 2008. Payroll would have bounced two days after Christmas without it.
- The press called him "internet guy" and ridiculed the attempt. He says he didn't hold it against them: "It does sound improbable and I agree that it's improbable."

## How to be useful: true work, low ego, tight feedback loop

- His main advice: be as useful as possible. "Don't aspire to glory, aspire to work."
- He defines usefulness as "the area under the curve of total utility": how useful you are to people times how many people. He compares it to the physics definition of work and says it is very hard.
- To judge an idea, ask "if this thing is successful, how useful will it be to how many people?"
- Whatever your role, do whatever it takes to succeed, whether the task is grand or humble.
- Keep your ego small and internalize responsibility. He says a major failure mode is an ego-to-ability ratio that is too high, because it "break[s] the feedback loop to reality."
- In AI terms, you want a strong RL loop. "Close the loop on reality hard."
- He prefers the word "engineer" to "researcher" and doesn't want xAI called a lab. He wants it to be a company. His rule is to use the simplest, lowest-ego terms.
- He says math and physics are rigorous judges. Building rockets or software that must compile and run requires being "maximally truth-seeking," unlike politics.

## First-principles thinking with rocket costs

- First principles means breaking things down to the fundamental elements most likely to be true, then reasoning up. This replaces reasoning by analogy or by what has been done before.
- He also uses "thinking in the limit": maximize or minimize a variable and see where it goes. He calls the tools of physics "a superpower" that applies to any field.
- Rocket example:
  - The usual approach is to look at historical rocket costs and assume a new rocket will cost about the same.
  - The first-principles approach is to list the materials (aluminum, copper, carbon fiber, steel), weigh them, and price them per kilogram. That sets the floor, and cost can asymptotically approach it.
  - He found raw materials were only about 1 to 2% of historical rocket cost, so manufacturing must be very inefficient.
  - He says this analysis comes before counting reusability.

## Building the xAI Memphis supercluster in six months

- At the start of 2024, suppliers told xAI that 100,000 H100s training coherently would take 18 to 24 months. Elon says xAI needed it in 6 months "or we won't be competitive."
- He broke it into parts: building, power, cooling, power smoothing, networking.
  - **Building:** there was no time to build one, so xAI found an unused Electrolux factory in Memphis.
  - **Power:** the site had 15 megawatts and needed 150. xAI rented generators and put them on one side of the building.
  - **Cooling:** xAI rented about a quarter of the mobile cooling capacity of the US and put the chillers on the other side.
  - **Power swings:** training power can drop 50% in 100 milliseconds, faster than generators can follow. xAI added Tesla Megapacks and modified their software to smooth the swings.
  - **Networking:** cabling 100,000 GPUs to train coherently is very hard. The cabling ran in four shifts, 24/7. He slept in the data center and did cabling himself.
- Later xAI doubled to 200,000 GPUs. The Memphis center now has 150,000 H100s, 50,000 H200s and 30,000 GB200s. xAI is about to bring 110,000 GB200s online at a second Memphis-area data center.
- He says the same first-principles approach works in software and hardware: when told something is impossible, break it into constituent parts and solve each one.
- On what matters for a competitive foundation model:
  - talent
  - hardware scale and the ability to train it coherently and stably
  - unique access to data
  - distribution, meaning how people get exposed to the AI
- On data: human-generated high-quality tokens have mostly run out, so synthetic data matters more. The hard part is verifying it against reality and not accepting hallucinations. Grok 3.5 was in training with a heavy focus on reasoning. He says physics and hard science are useful for reasoning, and social science is probably useless for it.

## AI, humanoid robots, and the odds he accepts

- He argued that a rigorous adherence to truth, even politically incorrect truth, is the most important thing for AI safety. Forcing an AI to believe false things is what he thinks could make it dangerous. xAI aims for Grok to be "the maximally truth-seeking AI."
- He expects several deep intelligences, at least five and maybe about ten, roughly four of them in the US. He doesn't expect one runaway AI.
- He said digital superintelligence, "smarter than any human at anything," may arrive this year and, if not, "next year for sure."
- He agrees roughly with Geoff Hinton's 10 to 20% chance of annihilation, which he frames as an 80 to 90% chance of a great outcome.
- He expects humanoid robots to outnumber all other robots combined by roughly an order of magnitude. He predicts at least five times as many humanoid robots as humans, maybe ten times.
- He delayed AI and humanoid robotics because he didn't want to "make Terminator real." He then concluded "it's happening whether I do it or not," so "I'd rather be a participant than a spectator."
- Tesla works closely with xAI on combining large data-center AI with robotics like Optimus.

## Multiplanetary life, Neuralink and the long view

- Elon says making life multiplanetary greatly increases the probable lifespan of civilization, consciousness and intelligence, biological and digital.
- He expects enough mass on Mars within roughly 30 years to make it self-sustaining if resupply from Earth stopped.
- Having two planets creates a forcing function for improving space travel and is the step before other star systems.
- He is troubled by the Fermi paradox. Intelligence may be rare, a "tiny candle in a vast darkness." He cites global thermonuclear war as one great filter.
- On the Kardashev scale, he says humanity has harnessed only about 1 or 2% of Earth's energy. He says we are at "the very, very early stage of the intelligence big bang."
- He predicts human intelligence will eventually be a tiny share of all intelligence, under 1% at some point. At Kardashev level 2 it could be about a billionth of digital intelligence, even with massive augmentation.
- Neuralink:
  - He says a human's sustained output is under one bit per second, and Neuralink can raise both input and output bandwidth.
  - Five people have received the read implant, including people with ALS who can control a computer and phone.
  - He expected first vision implants (writing to the visual cortex) in 6 to 12 months. A monkey has had a visual implant for three years.
  - Long term he expects augmentation such as infrared, ultraviolet and radar vision.
  - He says Neuralink is not needed for digital superintelligence, which will arrive first.
- On DC and government cost-cutting: he calls it a side quest. Compared with the AI "thousand-foot tsunami," cleaning the beach doesn't matter much, and he wants to get "back to the main quest" of building technology.
