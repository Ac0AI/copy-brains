## Manufacturing is harder than design

- Elon says "manufacturing is underrated and design is overrated." People imagine a eureka moment of design, but he argues far more work goes into the production system than into the product.
- He puts the effort for Raptor at ten to a hundred times more for the manufacturing system than for the engine design. The design effort "rounds down to zero" next to it.
- His test: "if this was not true great, I'd like a thousand Raptors please." You can't have them, because production is the hard part.
- People who haven't done manufacturing, especially of something new, think production is "like a copier." He says that is completely false.
- Staged combustion engines have been designed many times, notably by the Russians. What is hard about Raptor is making one where the cost per ton of thrust is under a thousand dollars.
- The launch tower and the catch arms (the "chopsticks") are as complex as either stage, and he says they are harder than any single booster or ship.

## Optimize for cost per ton to orbit

- Elon says the fundamental thing to fix is cost per ton to orbit. Things that reduce it are good.
- He frames the Mars goal as an optimization of cost per ton to orbit, and ultimately cost per ton to the surface of Mars. Humanity becomes multi-planet if that cost gets low enough to afford a spacefaring civilization.
- Full reusability is "the holy grail of rocketry." It forces tight margins, because loose margins mean "you're going to get nothing to orbit."
- The booster is designed for 3,600 tons of propellant, about 78% liquid oxygen by mass. He biases toward oxygen because it is denser and cheaper, "basically plants make it for free". Its cost is mostly electricity for separation and distillation.
- He says to avoid running too close to stoichiometric, because the engine can melt before ISP rolls over.
- He gave Raptor 2 (V2) figures: the sea-level engine at 230 tons of thrust with chamber pressure of about 300 bar ("technically I think 298"). Opening the throat and reducing the area ratio costs two or three seconds of ISP but gains much more thrust. He says that is worth it, especially on the first stage, because "any thrust to weight below one is worthless."

## The five-step engineering algorithm

Elon says he is trying to get everyone to follow this process rigorously, in this order:

1. **Make your requirements less dumb.** "Your requirements are definitely dumb." It does not matter who gave them to you. It is more dangerous when a smart person did, because you question them less. Every requirement must come with a person's name, not a department. That person must take responsibility for it. Otherwise it may be something an intern invented two years ago who has since left.
2. **Delete the part or process step.** If you are not adding things back at least 10% of the time, "you're clearly not deleting enough." The bias is to add "in case we need it," and you can make in-case arguments for almost anything.
3. **Simplify or optimize.** Only third, "not the first step." "Possibly the most common error of a smart engineer is to optimize the thing that should not exist." He says school trains people to always answer the question, so they work on things that should not exist.
4. **Accelerate cycle time.** Go faster, but only after the first three steps. He says "you're digging your grave, don't dig it faster."
5. **Automate.**

He says he has personally made the mistake of doing all five in reverse several times.

## Examples of deleting the part

- **Grid fins:** The booster's huge grid fins do not fold. He says a folding mechanism is a part you clearly don't need, and "let's not fold them, why are we folding them anyway." He also says: "all the designs are wrong, it's just a matter of how wrong."
- **Catch points:** The quick-disconnect lines do not hold both sides down, because that is a whole extra mechanism that is not needed. He says you "can't hedge your bets" on a rocket running tight margins. He notes that extra engine authority can be added later if needed.
- **Stage separation:** He questioned the requirement for hot-gas or cold-gas thrusters on the booster. The main engines start rotating the stack, then shut down, and the two stages separate by themselves because of different inertia. The ship uses a little cold gas. The booster uses vented hot gaseous oxygen and methane from the main tanks, pointed in a useful direction. This means no separate hot-gas or cold-gas thruster system.
- **Starlink deployment:** The 60 satellites are flung off with no separation mechanism, "like a hay bale." They bump at about a mile an hour and that is fine.
- **Ship ullage gas:** He suggests the ship could do the same, because once it is mostly empty in orbit it also holds a lot of hot gas. Tank pressure of about 6 bar is decent thrust in vacuum. Dragon's Draco thrusters run at about 8 to 9 bar chamber pressure. Hotter gas gives higher ISP, up to the point where it softens the hull.
- **Falcon 1 upper stage:** Early on, the spreadsheet had a hypergolic NTO/MMH upper stage. He says it was very expensive and toxic to handle. "Even if Edison and Nikola Tesla had a baby" and it optimized that stage, "you're screwed." He says you should not optimize the thing that shouldn't exist. Dragon keeps hypergolics because its Draco engines need many short pulses.

## The Model 3 battery pack mats lesson

- Elon says he lived on the Model 3 battery pack line, which was choking the whole battery program.
- Fiberglass mats sat between the battery pack and the floor pan. A robot cell applied them.
- He first tried to fix the robot: faster path, more torque, removing an unnecessary reverse rotation on the bolt, and little dabs of glue instead of glue over the whole pack. Automating, accelerating and optimizing were all mistakes.
- He finally asked what the mats were for. The battery safety team said noise and vibration. The noise and vibration team said fire safety. "It was like being in a Dilbert cartoon."
- They tested cars with and without the mats, with microphones in both. Nobody could tell the difference.
- They deleted the mats and bypassed the cell, which he says cost two million dollars. "A complete pile of nonsense."

## Production line testing mistakes

- Early in a line, you test work in process at many steps to find where things break. A very common mistake is to not remove that in-process testing once the problems are diagnosed.
- In-process testers can choke cycle time. They also produce false positives that reject good parts, and false negatives.
- If end-of-line tests mostly pass, you don't need in-process testing. In volume production he wants to test at the end of the line, keeping only one or two in-process steps that are hard to test at the end.
- The pack leak test was another example. The line pressurized the inside of the pack, which was the wrong direction. It blew out uncured resin that was holding the lid down. He says the test should have been a vacuum test.

## Make everyone the chief engineer

- Elon says "you really want everyone to be chief engineer." People need to understand the system at a high level to know when they are making a bad optimization.
- Example: the team put huge effort into cutting engine mass, but hardly any into propellant residuals, which have far more leverage. About 130 kg per engine was saved, yet Falcon 9 still lands with about a ton of unused fuel.
- Booster mass breakdown, as a rough rule: engines about 2 tons each including mounts (29 engines is about 58 tons). The tanks are about 80 tons, the interstage and grid fin area about 20 tons, and residuals about 20 tons. That gives roughly 160 to 200 tons, with a target under 200. Mass is "a moving target."
- The grid fins run on electric power, so he wants batteries optimized for power instead of energy. They only need to work for two or three minutes, so battery mass could drop by about a factor of 10.
- The first grid fins were "good enough for now," and he says they could cut the actuator hardware weight in half later.

## Iterate fast and use sensible units

- Starship test flights were minimum viable product: get it good enough to fly, learn what works, and iterate. The things that blew up Starships were not on the risk list. He says "we need to iron out the unknown unknowns," because a lot of new technology is evolving simultaneously.
- He reused Model 3 motors for the grid fin actuators ("might as well use them").
- He says to measure rocket thrust and mass in metric tons and pressure in bar, because everyone has an intuition for a ton or an atmosphere. Thrust to weight is then easy to do in your head. He calls newtons and pascals the wrong units for the job: "only a fool would use newtons" for designing a rocket.
- He says to use nuanced analysis before committing. For landing on the Moon with the main engines, he says to prove it with a regolith analog test to see how big a hole forms, rather than just assuming a separate thruster system is needed.
