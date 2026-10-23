## Defines "heretical" view on AGI and adoption

- Scott argues an AGI timeline "doesn't really matter."
- He expects a smoother curve of AI adoption and widespread usage rather than a single capability jump.
- His reasoning: you can have widespread adoption of generative AI without AGI, and a theoretical AGI without widespread adoption.
- He cares more about the second metric, making AI actually useful for real-world use cases and changing economies and everyday lives.

## Building an AI company differs from past tech waves

- Past companies were powered by discrete technological shifts (consumer social, mobile, internet). He says AI is "a sequence of increasing steps" rather than a single binary change.
- Founders must make concrete bets on what the technology will be able to do in 12, 24 or 36 months, then work backwards. Product strategy, customer work and basic company decisions all rely on that forecast.
- Consequence: he thinks it is better than ever to be a very technical founder, since both the product and nearly every decision are technical.
- Core company-building principles are unchanged: a Rockstar team, building something people want, distribution, growth, first-principles thinking.
- On the foundation-model market he compares it to the clouds. Heavy capex, big economies of scale, and room for differentiation lead to an equilibrium of roughly two to five big platform players with huge margins. Many applications get built on top, so he dislikes the word "commodity."

## Founder mindset: long-term optimist, short-term paranoid

- Founders should be honest with themselves about what is working and what is not.
- He rejects the trope of "unbridled optimism" in the short term. Be optimistic about the long term but "really paranoid in the short term."
- In AI the ground moves fast (models, hardware, robotics all progress at once), so expect big surprises and challenge your own assumptions.
- Startups' main advantage is the ability to adapt and move quickly, so use it.
- On when to quit, he cites Paul Graham's "determined but not stubborn." At each point write the story of how this becomes a massive success and list what must happen for that to be true. Then ask whether the original thesis still holds and whether this is still the best thing to work on.
- His warning: people are told to "drink their own Kool-Aid," but "a lot of doing startups is really just being honest with yourself."
- His core advice for founders: build something people want. It is easy to proxy that with team size or number of people who tried the product.
- He also advises not being afraid to look dumb: do things that are very different and very new.

## Math/EV mindset ("Moneyballisation") for startup decisions

- His background is math and programming competitions (including the IOI). He says sales, product strategy and similar decisions "map to just doing math questions."
- He describes a trend he calls the "Moneyballisation of everything": startups are becoming more analytical, like sports and poker, with founders breaking down each situation to find the optimal strategy rather than relying on raw intuition.
- His self-described superpower: breaking each situation into logical reasoning and applying principles of logic. Since you are doing something nobody has done, you learn playbooks but must decide from first principles.
- Example of EV thinking on effort: he and a co-founder flew to North Carolina to have dinner with a recruit's parents, bring gifts, and explain the mission. It was about eight hours total (a 2-3 hour dinner plus travel, back the same night). He says the ROI was "unimaginably high" for landing an MIT student whose parents were hesitant, even though it felt dumb and might have made no difference.
- His framing: ask what the chance is that it does something meaningful and what you get out of it, and "the math at some point is all there."

## Product strategy: agents as decision-makers, not chatbots

- For two to three years, products were chatbot-style: feed the model a prefix and take the suffix (ChatGPT, Q&A, marketing copy, customer support, GitHub Copilot).
- His thesis: the bigger value is in "an actual decision maker." His analogy: a legal assistant to talk to is cool, "but what about if you just had a lawyer."
- That is why Cognition built agents from the start. Devin browses the web, runs commands, stores secrets, plans, and optimizes multi-step processes.
- Planning and reasoning generalize: improving Devin's browser use also improved its ability to make decisions in testing and other tasks.
- He sees UX for agents as "super underdeveloped." Cognition invests in how you interact with Devin: its browser, shell, conversing with it, talking to it asynchronously while it works, giving feedback, and running multiple Devins in parallel (the engineer acts like a manager of a team of Devin interns).
- He does not share how Devin works internally, but says investment that transfers across models (such as datasets capturing desired behavior for RL or fine-tuning) generalizes better than model-specific work, which is how to prepare for the ground moving.

## Go-to-market and finding product-market fit for Devin

- The first real signal: while setting up MongoDB, which was a tedious whack-a-mole of googling errors, the team handed it to a prototype Devin. It worked, which was "one of the really exciting moments." Iterating with customers and being customers themselves is among the most important things.
- Customer use cases today are "the more tedious or repetitive" ones: code migrations and re-platforming (for example thousands of files, or a migration to Flutter), front-end issues, triaging logs and debugging sessions, and tasks with tight feedback loops (Devin can change code and test it on a local front end).
- He notes AI is better at repetitive tasks, and engineers do not want to do them anyway, so Cognition has largely avoided engineer defensiveness. Such migrations often lag because they are painful.
- Real customer work is messy. Examples: connecting to Datadog to read logs, learning the code base over time, running the dev environment locally, and rules that must be applied thousands of times. He calls these "brain dead" but high value.
- Sales motion: go into orgs and look for both top-down support (executives who want AI) and bottom-up support (developers who want to try it). Budget source varies (innovation, general tech, or dev tools). What matters is real excitement plus clear use cases that work. He contrasts fighting for every little thing with the customer saying "let's try it today, let's buy it today."
- Limits: Devin would not build a whole complex system from scratch on the first try. Cognition focuses on cases that are repeatable and clear enough for real ROI.
- On the high valuation (a figure around $2 billion was raised by an audience member), he says they are very early but going after a very big goal, and asks "how much is software worth as a category."

## Launch lessons from the Devin release

- He says the launch was not very intentional. A Bloomberg article was planned, and over the weekend before they scrapped their whole video and started over.
- The article was due Tuesday at 6am and they were still filming at 1am, so they asked for a delay and got 9am, the three hours they needed. They stayed up all night writing the blog post, making the video and showing example runs of Devin.
- His lesson: figure out what makes your company and product unique. They disliked the first video because any company could have made something similar. The final version simply showed what the product looks like and how it works in action, and talked it through. It was less formatted but better.

## Future of software engineering and code

- At Cognition, Devin already built much of their front end, API integrations, and internal dashboards and tracking.
- He argues demand for code is "more than 10x the supply" (and likely more). Every company has about 30 projects and has to pick four. There is also large unmet demand for single-use software that does not make economic sense today (for example clicking through LinkedIn profiles or placing an order could be code but is not worth paying someone to write).
- He expects more software engineers, not fewer, as when moving from assembly to C to Python.
- The role shifts toward something between a PM and a technical architect: break the problem down, define details, edge cases and flows precisely, then hand it to an agent. The net result is building far more.
- He thinks code is treated as precious only because it has been expensive to write. He expects tiers of code, where most code is written once and thrown away or is dirtier, and says "a lot of our emotional attachment to how we think about code is actually the second order effect of how hard it is to write code."
- On code quality in an AI world: keep one human on git blame for each commit (an ownership mentality). Devin opens PRs in their own repo and a human reviews and merges them. He expects code in an idiomatic style, to the point that you reason about logic and edit that rather than reading code.
- On memory: context windows will keep growing, but he does not expect a world where you shove an entire code base and history into the context. Humans have very short context but excellent retrieval, and problem solving does not require millions of tokens.
- On roles: great designers, engineers and PMs share the same core skill of breaking a problem down and choosing the right solution. Getting good at using Devin takes time. People must learn how granular to make tasks, how to prompt it, and how to parallelize it, since working with an agent differs from working with humans or chatbots.

## Team building

- Most of the founding team has known each other for around 10 years. He has known co-founders Steven since high school, and Walden for a long time. They share a competition background and spent years building different things in AI.
- His advice: for the initial team, work as much as possible with people you know directly or have a very strong mutual connection with. At some point you have to branch out.
- When recruiting, go to unusual lengths (see the dinner with a recruit's parents above).
- Interviewing, he says, is also where non-obvious effort pays off since a good candidate's hesitation can be a family concern rather than a lack of interest.
