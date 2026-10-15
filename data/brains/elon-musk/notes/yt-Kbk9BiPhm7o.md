## Elon's first-principles engineering algorithm: question, delete, simplify, speed up, automate

- Elon runs a five-step process "as like a mantra," and the order matters.
- Step 1: Question the requirements and make them "less dumb." "The requirements are always dumb to some degree," however smart the person who wrote them. Otherwise "you could get the perfect answer to the wrong question."
- Step 2: Delete the part or process step entirely. "If you're not forced to put back at least 10% of what you delete, you're not deleting enough."
- Step 3: Only then simplify or optimize. "The most common mistake of smart engineers is to optimize a thing that should not exist."
- Step 4: Speed it up, but only after deleting and optimizing. Speeding up something that shouldn't exist is "absurd."
- Step 5: Automate last. He has automated, sped up and simplified things he later deleted, and he says the mantra exists because he "got tired of doing that."
- Why people over-keep: they remember the pain of one deleted thing they later needed (he gives "3 years ago" as an example). So they overcorrect and add too much. Elon tells teams in advance that some deletions will be put back, and he sees people "feel a little bit of the pain."
- Applied at the xAI Memphis cluster: he walks the process and asks of each step whether it can be deleted.

## Doing the front-line work himself

- Elon does whatever the people on the front lines do, at least a few times himself. At the Memphis cluster that meant connecting fiber optic cables and diagnosing a connection.
- The result is that he understands the process well enough to tell when a step is dumb or inefficient.
- The cabling is often the limiting factor for large training clusters. The cluster is one coherent system with RDMA and any-to-any connections between 100,000 GPUs.
- Synchronized training causes "power jitter": swings of 10 to 20 megawatts several times a second. Electrical systems aren't built for that, so power, cooling and distributed-compute software all had to be solved.
- The cluster was built in a handful of weeks. Training finally started at roughly 4:20 a.m. one Monday after he stayed up late, and he was still working through power fluctuation issues with the Memphis team.

## How AI competition is won: compute, efficiency, talent, data

- "Play to win or don't play at all." For xAI that means the most powerful training compute, with a rate of improvement faster than everyone else's.
- His Formula 1 analogy: training compute is the engine. If a competitor has twice the horsepower, even a mediocre driver wins. At half the horsepower, the best driver still loses.
- After compute, what matters is how efficiently you use the training compute and the inference, which "comes down to human talent," plus unique access to data.
- Data edges for xAI and Tesla:
  - X data is up to the second, which is hard for rivals to scrape in real time.
  - Tesla has real-time video from several million cars, heading to tens of millions.
  - Optimus could become the biggest data source: "reality scales to the scale of reality."
  - Humans have produced surprisingly few trillions of usable, non-duplicate tokens.
- Internet data is increasingly polluted by AI-generated content. xAI applies AI to the data to judge whether it is likely correct before feeding it to training.
- Grok timeline as he states it: Grok 2 finished training about six weeks earlier and would be a giant improvement. Grok 3 is hoped to be roughly an order of magnitude better, "hopefully by end of this year." He says the target may be missed.
- Competitive view: if xAI gets to AGI first, "the others won't be far behind," maybe six months to a year.

## Why xAI is built around truth-seeking

- His main safety principle is "adherence to truth, whether that truth is politically correct or not." Training an AI to lie, even with good intentions, is "asking for trouble."
- Examples he cites: an image model showing a diverse group of women as America's founding fathers. He also cites AIs answering that misgendering is worse than global thermonuclear war.
- His point is that a powerful AI given a rigid objective like "diversity is required" could pursue it to absurd, dangerous extremes. He cites HAL 9000 as an example of this failure.
- Truth is approached like physics. You never claim absolute certainty, but many things are "99.99999% likely to be true."
- Why it matters: "small ways become big ways" once AI is used at scale. Whatever AI wins should be maximum truth-seeking.
- xAI's mission is to "understand the universe." Grok is built toward that.
- He also treats AI risk as real. He notes Geoffrey Hinton puts the probability of AI annihilation around 10 to 20%, and he says being multiplanetary is a risk mitigation.

## Optimus: manufacturing scale and the hard parts

- Vehicle manufacturing sets the scale model. Global capacity is about 100 million vehicles a year, with roughly 2 billion in use and a life of about 20 years.
- Humanoid robots have much greater utility, so he guesses "a billion plus per year" and potentially hundreds of millions to billions of robots in service. "There will be billions of robots," which he calls "a virtual certainty."
- Optimus is "still extremely difficult" and it takes enormous engineering to go from walking to handling all kinds of objects, for example pouring water into any container.
- The hand is roughly half of the electromechanical engineering in Optimus.
- Hand design decisions:
  - A human hand's actuators sit in the forearm, with tendons running through the carpal tunnel.
  - Putting actuators in the hand made "giant hands" with too few degrees of freedom and too little strength.
  - The new arm has 22 degrees of freedom, up from 11, with the actuators in the forearm.
  - All actuators and sensors are designed from scratch using first-principles physics.
  - Fingers of different lengths give better dexterity.
- A humanoid robot that does what a human can do is "a very high bar." The simplest version that does most of it is still complicated.
- Optimus advantage over cars: it can go anywhere off the road, and it can test cause and effect, such as picking up a cup or pouring water, at scale.

## Allocating time and the value of decisions

- Elon defines success as how many useful things he gets done in a day. "Time is the true currency."
- Value of a better decision: Tesla will do over $100 billion in revenue this year, about $2 billion a week. A slightly better decision can move outcomes by a billion dollars. The marginal value of an hour can reach "$100 million" at times.
- He evaluates decisions on a percentage basis, because in absolute terms "I would never get any sleep."
- Happiness is part of the equation. If he's depressed he makes worse decisions, and if he has zero recreational time he makes worse decisions. His recreational time is "not a lot, but above zero."
- His motivation is curiosity and understanding the universe. He argues that framing the right question matters more than the answer.

## Policy views on prosperity, spending and regulation

- His case for what makes the US succeed:
  - A secure border, and safe, clean cities.
  - Slow the spending. He says interest payments on US debt this year exceeded the entire defense budget, and warns of an Argentina-style decline. He says "we've got to reduce the size of government" and live within our means.
- Laws and regulations accumulate over time. Without a forcing function like a war, "everything becomes legal." He calls it hardening of the arteries, or being "tied down by a million little strings."
- His proposal: a "garbage collection" for laws and regulations. He says he discussed a government efficiency commission with Trump and would be willing to be part of it, but expects strong "antibody reaction."
- Example: he says building high-speed rail in America is effectively illegal.
- He sees the birth rate as the biggest civilizational risk. He says a civilization below replacement rate "will eventually disappear," and that population collapse is "real and current."
- He endorsed Trump after the assassination attempt, citing courage under fire, while saying no one is without flaws.
- He says daily attacks do wear on him, but he tries to remember they come from people who don't know him and are "writing to get impressions and clicks."

## Neuralink: roadmap, product logic and targets Elon states

- Status when recorded: the second human implant went well, with roughly 400 electrodes giving signal. The goal was 10 patients by year end, depending on regulatory approval.
- First patient performance: with only about 10 to 15% of electrodes working, the first patient achieved twice the world-record bits per second. He expects to exceed it by orders of magnitude, possibly a megabit in about five years.
- Sequencing logic: start with basic neurological damage, because there is irreducible surgical risk and the reward must be highest. "You need literacy before you can have Lord of the Rings."
- Even for patients, the aim is augmentation: "Let's give people superpowers."
- Second product, Blindsight: restores sight to people who are completely blind by directly triggering visual cortex neurons. It starts low resolution, but could eventually exceed human eyes and see other wavelengths.
- Long-term rationale: raise human-AI bandwidth so the AI isn't "talking to a tree." He estimates output could increase by three to six orders of magnitude.
- He expects hundreds of millions of users in a couple of decades if it is extremely safe, and says it could supersede the cell phone.
- Near-term claim: within a year or two, someone with a Neuralink implant could outperform a pro gamer on reaction time.
- Timeline for the general public: "10 years, probably less than 10 years."
