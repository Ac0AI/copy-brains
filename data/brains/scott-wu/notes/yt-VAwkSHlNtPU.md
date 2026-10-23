## Agents as delegated work, not autocomplete

- Scott separates two product types that "are very complimentary". Copilot-style assistants (autocomplete, suggestions inside the IDE) suit tasks an engineer wants to handle personally and specify closely.
- Agents suit "tasks that you want to delegate entirely".
- His framing: copilot tools "make everyone a faster engineer", while agent tools "make every engineer into almost an engineering manager". Each engineer gets "your own team of interns" to assign tasks to.
- He expects both product types to coexist "for quite some time".
- Cognition's founders were drawn to code because it is inherently agentic. A perfect diff can't be produced in one shot, since real coding means reading files, pulling docs, running code, adding print statements, debugging and testing the front end before landing a diff.
- He views code as "one of the most powerful direct applications of better reasoning and better logic". He calls it probably one of the main drivers of progress in the last 50 years.

## What the engineering job becomes

- Programming has always moved up the abstraction ladder: punch cards, assembly, C, Cobol/Fortran, Python, frameworks and clouds.
- Each step made programming more effective and produced more programmers, not fewer.
- Scott says a great engineer was never defined by typing speed. The value is in solving problems, breaking them down, having intuition about what works, and building in a "future ready" way.
- He expects future engineers to be "technical architect types", halfway between an architect and a product manager. They decide what to build, describe the flows and cases, and the system builds it.
- Interaction is conversational (voice or typing). You describe the page or the database setup, then change direction dynamically ("wait actually let's change this up").
- He says Devin will not be the decider of what to build for quite some time. "That still rests in human hands."
- He cites the idea that people first expected AI to make better movies, when the real outcome is a different experience that does what movies do, only better. He expects agent workflows to follow the same pattern.

## Multi-agent design: don't copy human org charts

- Scott warns that the intuition from human organizations breaks down for agents. Humans couple action, agent and context: one person knows one set of things and acts serially.
- Agents can run in parallel. Example: to find a variable in a codebase, spin up 10 agents that search at once, and they can share context with each other.
- On specialization, he leans toward agents sharing the same underlying expertise, but says he could see it either way.
- A likely hierarchy: cheap execution-focused models for straightforward tasks, and the most compute-intensive models for deep planning that sees far ahead. Different "flavors" of agents split tasks appropriately.
- He sees a Pareto frontier of capabilities emerging. The most powerful reasoning is paid for only where it's needed, and smaller models handle niche knowledge recall and execution.

## Open models, reasoning and synthetic data

- Scott says open source will keep growing, for two main reasons: economics, and customers wanting maximum control over post-training, fine-tuning and inference-time tricks.
- As model capability rises, several models will suffice for many tasks, and "all else equal" teams will prefer the open one.
- His wish list for open model builders is logical reasoning. It underlies both the code Devin writes and the decisions around it. He says the field is "right at the cusp of actually a pretty big wave of reasoning capabilities".
- He expects synthetic data to drive gains where there is a clear, verifiable ground-truth signal. His example is Google DeepMind's IMO silver medal result, which used Lean as a programmatic proof verifier to generate lots of data and clean feedback.
- His prediction: within a few years, any field with a good ground-truth label and an abundant way to create more data will see AI reach peak human capability or beyond.
- Beyond data, he also sees room for models that "generalize better", which he says deserves more exploration.

## Infrastructure implications for agent products

- A chatbot's token usage roughly matches what the user puts in. An agent given a whole task (a web app with a database) may work for hours, making far more calls and consuming far more inference compute.
- He expects the ratio of training time to inference time to shift sharply toward inference. His bet is that post-training and inference grow more than pre-training, though pre-training grows too.
- He expects a "platform layer" to rise on top of foundation models: businesses that build applications on them and do heavy custom post-training for their use case.
- Optimizing and serving inference cheaply, and making custom fine-tuning easy, "is only going to get more and more important over time".

## Safety, review and testing for coding agents

- For Cognition, guardrails are a practical customer concern: customers give Devin their code, keys and logs and want responsible decisions.
- His view: in the current regime, safer comes from better reasoning. The main worry is Devin misinterpreting a task or making a wrong decision, so improving reasoning is the main safeguard.
- Today Devin works inside the existing process: it opens PRs in the company's GitHub, humans review them, and Devin can review humans' PRs too. He sees piggybacking on the existing system as sensible.
- Devin already tests its own code, for example by pulling up the front end and clicking around.
- He expects changes to be vetted far more thoroughly by AI before shipping. He thinks some review system will persist for a long time, with at least two entities (human or agent) signing off on a change.
- In the long run he can imagine testing automation clean enough that changes ship as soon as the desired behavior is clear.

## Advice on skills and careers

- He thinks it's "a better time than ever" to study computer science and math. Logical reasoning is a foundation for almost anything.
- CS is not about typing a certain language. It's about understanding what computers can and can't do and how to break problems into clear steps. Algorithms is "less about the computer almost and more about... the best approach that's going to solve a given problem".
- Engineers may type less JavaScript or C++ directly, but that problem-breakdown fundamentals stay important.
- On competitive programming, he expects it to be solved by AI soon but still be fun and rewarding. Many people from these communities have gone into AI work. He expects participants to get much better thanks to new ways to train.
- He expects AI to speed up breakthroughs in theoretical computer science and algorithmic complexity.
- His analogy: chess, Go and poker remain thriving after AI beat humans.
- On math research, he expects a human plus machine era, with AI proving lemmas for researchers. He doubts any Millennium Prize problem will be solved purely by humans from here.

## Competitive background and team formation

- Scott's first math competition was in second grade, at about 7 or 8 years old, in a middle-school event. He competed at the seventh-grade level and didn't place.
- After training, he came back the next year (algebra) and won. Math and programming competitions then "were kind of my whole life".
- He won three IOI gold medals and counts competition as a source of brutal honesty with yourself: examining your flaws and being ready to work on them.
- The Cognition founding team largely met through math and programming competitions and had known each other for years.
- Co-founders: Steven (early at Scale AI) and Walden (early at Cursor). Scott previously built Lunch Club.
