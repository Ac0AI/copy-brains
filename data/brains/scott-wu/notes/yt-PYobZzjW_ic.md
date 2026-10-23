## Scott's competitive drive and how it shaped Cognition

- Scott says he has "always been this way" and describes himself as "salty": someone who takes offense at the idea of losing. His first competitive memory is a seventh-grade math competition he entered at about age seven or eight, where his name was never called and he was furious.
- He frames building a company as the same game as everything else he competed in: "it's like a tree search" where you explore decisions and calculate which moves lead to victory.
- He grew up competing in math and programming contests, qualifying up through school, city, regional, state, national and international rounds. The people he met there became his real childhood friends. He also played Super Smash Brothers (Melee), Tetris, poker, chess and Go.
- His mother always told him he was the best, even before there was evidence, and hung his math trophies on the mantel instead of family photos. His father was a strong Go player.
- On losing vs. winning: he agrees losing feels far worse than winning feels good, "but not by enough that it makes me want to stop trying." To get anywhere you have to lose a lot and put yourself out there.

## How Scott defines Devin's long-term goal

- Cognition's founding team is nine people, and most had already founded companies before. Scott says they treated this as "the big one" and want to build a generational business, even a hyperscaler.
- His framing: Devin is not just a "coding agent." Code may not be the right abstraction for long, but the human-computer interface will always matter. If they succeed, "Devin is the way that humans can tell their computers what to do."
- Abstraction keeps climbing: vacuum tubes, punch cards, assembly, BASIC, then now describing what you want. You no longer need to know Python or Java to build software.
- Why one-off software becomes possible: building software only pays off if it will be used roughly 10,000 to a million times, because engineers are expensive. Once agents write the code, one-time tasks (checking 15 LinkedIn profiles, filling forms, a one-off data analysis) can be automated, so you just give instructions and the agent writes scripts behind the scenes.
- His motivation: "we're all nerds" who spent about 20 years coding and now get to teach AI to make things for everyone. He says humanity has spent its time in "survival mode" and is moving to "creative mode," like Minecraft, where the only question is what you want to make happen.

## Scott's view of AI progress and agents on long missions

- He says people badly misread exponential curves, and that pattern-matching to history fails in the rare periods that are actually different. Better to reason from first principles.
- Example: the METR report showed AI doing about 10 to 20 seconds of human work unassisted a couple of years ago; that has doubled every couple of months and is now hours. He asks why it can't be days, weeks or months.
- He expects most of this to be solved "over the next 5 years or so," and that people will have forgotten they lived without it within 10.
- His picture of the future: agents work for months or a year on a "mission," not a task. Examples he gives are spreading awareness of a societal problem, designing a game combining two favorite games, or exploring a novel materials-science idea. People would then spend their time on curiosities and causes, which future people will call "work."
- A small current example: he spent time fighting an email editor's indentation for a bulk email and thinks that kind of execution should just be handed off.
- He is cautious about the hype: some places have "gotten carried away," like ranking engineers by tokens spent. He says to rank by output and good work done, though if engineers ship three times more, the GPU cost is clearly worth it.

## The launch, the backlash and finding a wedge

- Scott recalls the March 2024 Devin demo went viral with polar-opposite reactions: some thought it was the coolest thing ever, others thought it was a scam, and others thought everyone would lose their jobs tomorrow (which he says Cognition never believed).
- The first real Devin task set up MongoDB: instead of the usual loop of Googling errors and pasting fixes, they told it to just run the commands, and it worked. "I could not sleep that night." The demos in the launch were real runs.
- The first SWE-bench result was about 13%, versus roughly 3 to 4% for the best known at the time, though it still failed 87% of the time.
- He says Cognition was late: OpenAI started in 2015, GitHub Copilot already existed, and Cognition began in early 2024. As a startup, "you have no right to exist," and the way to win is to plant a flag on what you think the future is and run at it. Their flag was working with AI as a coworker rather than a chatbot or autocomplete, which helped brand, recruiting and customers.
- He admits they were "wrong on a lot of things" and early, but learned and adjusted. Hate did not motivate them to pivot toward chatbot Q&A.
- Early pilots in April and May 2024 mostly failed because the agents (built on GPT-4) were primitive. The team then asked which tasks agents could do end to end first, and chose repetitive, tedious, scoped, tight-feedback-loop work that still needs some intelligence: migrations and version upgrades (for example Java 7 to Java 8) across codebases of tens of thousands of files.
- The first success was New Bank (Nubank), the biggest bank in Brazil by market cap at the time, on a migration use case with a heavily customized Devin. The whole company flew to Brazil and sat with their engineers, essentially building the product for one customer.

## Going after enterprise

- Scott says roughly 75 to 80% of revenue now comes from enterprise, with a growing self-serve business among startups (he names Exa and OpenRouter). He says Cognition focuses on real engineering teams building real products, not hobbyists.
- His reasoning: every large company is a software company with huge engineering teams (Walmart, CVS, JPMorgan, Mercedes), and real work is messy: understanding the existing codebase, collaborating with humans, plugging into ticketing systems, letting the agent test its own code locally.
- The enterprise motion: education first, then guidance on the right use cases and which projects are or aren't feasible with agents. Typical enterprise software cycles for a big bank run 12 to 18 months; Cognition tries to get deployed in about 3 months by working through security reviews.
- Cognition can deploy in a customer's private cloud, uses strict data agreements and "tight airwalls." It has a forward-deployed motion, but today it is mostly user education, playbooks and setup help, and the customer's own team runs Devin.
- Incentive alignment: define ROI clearly and tie it to outcomes, not token spend. His example is a project scoped at 18 months and $15M with an outsourced contractor, done in-house in 3 months for about $1M.

## Being "Switzerland" and compound model systems

- Scott says Devin is deliberately a compound model system: for each subtask, such as investigating a ticket, reproducing a bug, reading logs, debugging, testing and review, it dynamically chooses among models from Anthropic, OpenAI, Google, open-source models and Cognition's own.
- Hard tasks get max-thinking frontier models; boilerplate tasks use whatever is cheapest and fastest and can be verified.
- Being model-neutral ("Switzerland") means customers can trust Cognition to route to the right model and optimize price-performance, because it is not incentivized to make them spend more on any one lab.
- He treats the labs as both suppliers and competitors but says there are many ways to cooperate.

## Focus, independence and the long game

- On focus: if you try to do everything you lose to Microsoft or Google, who have trillions more in resources. A lasting business comes from concentrating on one thing and executing tightly. He cites Spotify's Daniel Ek: "we're just going to care way more about music than they are," and says Cognition will care far more about end-to-end software at places like Goldman Sachs or Mercedes-Benz.
- On "Microsoft already has Copilot" objections: he says the world is dynamic with millions of problems, and there are always niches to own. The same argument was made against Datadog, Snowflake and Databricks.
- He rejects the nihilist view that it's too late to build an independent company, and says there are "10 more generations" of product experiences coming. Today's flow of a prompt in a web app and a pull request out is not the permanent shape of software.
- On acquisitions: he declines to say how many offers they've had. His stated position: "we would sell if we thought it was the most ambitious thing to do." The team wants to build a generational business.
- On money: he says he doesn't own a car, rents an apartment, and likes sushi. His motivation is to "achieve our potential and build what we were meant to build." He says he could live with trying fully and not being good enough, but not with having not pushed as hard as possible.
