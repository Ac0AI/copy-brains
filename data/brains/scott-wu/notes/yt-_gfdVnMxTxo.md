## Applied AI lab vs foundation lab: research in service of the product

Scott describes Cognition as an "applied AI lab", as distinct from a foundation lab. Both kinds of company do research and build products. The difference is which one serves the other.
- A foundation lab advances basic research, and products come out of that research.
- At Cognition it runs the other way. The goal is to build something people will use and deliver value to customers, and all research comes from that.
- Cognition does not spend time on new attention mechanisms. It works on "hairier" practical problems: how to process and understand a large codebase, what information to pull, how to build a fast agent that explores a codebase and finds the right things quickly, and how to teach Devin to use Datadog well so it can debug.
- Cognition partners closely with all the foundation labs.
- Scott's framing is that many labs focus on code, while Cognition focuses on software engineering. Example: "my Kubernetes is down, let me go through the logs, figure out what happened, restart the service and see if that works." That is more than analyzing logical code problems in a vacuum.

## RL's real constraint is choosing the benchmark

Scott calls Karpathy's line on RL ("horrible but the best thing we have") a good description.
- In theory, with a good eval set, a defined tool set and a way to judge success or failure, you can give it to a model over and over and wake up to a model that aces that benchmark. In practice it is far more finicky.
- Solving any benchmark does not mean you are done, because RL does not generalize well. Debugging a particular Kubernetes deploy is something you have to have done before. Broad software engineering or math practice only goes so far.
- So the question for everyone in AI becomes which benchmark you want to ace.
- The work has converged on defining the exact environments, tasks and evals, and how success or failure is determined, then building models around that.
- Code was one of the first domains where RL works, because the feedback loop is clean. You can run the code instead of needing a human judge.
- The same logic explains why the best human competitive programmer may still beat AI. At the very hardest problems there is far less data on totally new problem types. He says the bottleneck is "the data and the evals that we create", not a fundamental intelligence gap.

## How Cognition started: the November 2023 window

- Scott and a group of long-time friends were exploring AI ideas and chose code. They were coding nerds themselves and saw clear breakthroughs coming.
- The thesis, in late 2023: RL was starting to work in the labs, and full multi-step, iterative processes (now called agents, though the category had no name then) were about to work.
- They talked about starting something over a lunch in New York. Right after, on Friday November 17, news broke that Sam Altman had been fired from OpenAI. Scott's reaction: if there was ever a time to start a company, it was now.
- He sent an email at 11:59 that night to get the pieces together and build critical mass. Altman was reinstated about two days later, but by then the team was already moving.
- They rented a hacker house in Burlingame, California for about a week and a half and iterated on many ideas. At first these were theoretical, researchy ideas such as improving problem solving in code. A second and third hacker house followed, and eventually it became Devin.

## Product evolution and the doubling time of agents

- 18 months earlier, single-line tab completion was the only thing that worked in code. Since then Scott counts about 10 generations of products: multi-line tab, chat with codebase, synchronous multi-turn agents, asynchronous agents, automated testing, wikis, CLI and more.
- He cites the chart of how long an agent can work without human guidance. In code it has doubled every two to three months.
- The problem form factor changes at each doubling, not just the duration:
  - Seconds is tab complete.
  - Minutes means navigating between files, finding the right things and running CI.
  - Hours means planning out an actual task.
- Model capabilities are coupled to form factor, so what works moves from the IDE to the CLI to async agents as capabilities grow.

## Betting on the whole software lifecycle

Cognition's bet is on everything in the software lifecycle, not just writing code. Scott notes engineers spend a minority of their time literally writing code. The rest goes to reading and understanding the codebase, planning, reviewing and testing.

His predictions for roughly the next 12 months:
- **Automated testing:** still early, but computer-use agents will be very capable. An agent makes a front-end change, clicks through the whole thing and sends back a screen-cap video of what it tried and how it looks now.
- **Codebase understanding:** much better tools for a human working with AI to understand an unfamiliar codebase. Today nothing helps until you know exactly what code to write. He expects a tool where you say "I want to rearchitect the build system" and it feeds back how things are now, the trade-offs that were made and what you could do differently.
- **AI PR review and automated bug catching:** will get much better.

## Product strategy: stay focused on the long-term picture

- The controversial decision Scott names first is Devin itself. When Cognition started, "everyone thought we were crazy" to build a fully autonomous engineer that iterates multi-turn. Features like wikis were similarly early, when no one was thinking about them.
- The motivating question is always: what is the future of software engineering?
- In a hot market where "everything is going crazy at once", it is important to stay laser focused on how code will actually be written in 5 or 10 years and to keep getting closer to that.
- The specifics depend on which capabilities come online, but the direction is the anchor.

## Founder lesson: be honest with yourself

Asked what he learned between his first company, Lunch Club, and Cognition, Scott's advice for founders:
- The most important part of founding a company is being honest with yourself.
- Founders often feel they must always be optimistic and the one who pushes things forward. Long-term belief that it is possible is needed, but it does not mean blindly pursuing things when you already have evidence of what is and is not working.
- At Cognition they say things like "Devin was so bad at this thing" and openly call out what they could do better, asking whether a strategy is right.
- In a fast-changing world, the bet is not that you had the right view at the start but that over all your iterations and work you will get there.

## AGI and what matters in practice

- Scott's "we have AGI already" comment is partly facetious. He finds AGI hard to define. If AGI means automating 80% of human labor, then the tractor would count, since at some point more than 80% of work was farming.
- Humans do the things automation cannot, so any "post" definition keeps moving. Under a "pre" definition, 80% has been automated many times.
- He likes the line that in 2017 the answer to "do we have AGI" was no, and in 2025 it is "define AGI". There will be no smooth cutoff.
- The practical shift that matters is AI changing day-to-day lives, making people much more productive and widening what they can do. He says that is already happening.
- On the IMO gold and similar results: most day-to-day work is not harder than that. It does not mean a model will do everyone's jobs, but it is proof that with the right feedback loops, curriculums and setup, models can learn incredibly hard things.
- On beating the world's best competitive programmer, a Cognition colleague, within 12 months: Scott puts it at about 75% likely, while the colleague is confident it will not happen.
