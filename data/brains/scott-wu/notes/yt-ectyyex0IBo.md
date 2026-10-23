## How Scott defines AGI and why he calls it "here"

- Scott says "AGI is here," with a self-aware "facetious" caveat. His test: what would people have called AGI ten years ago? Passing the Turing test, solving hard technical problems, and acting in the real world. He argues these are largely done: Turing test passed, gold-medal IMO and IOI results, agents that reason and interact.
- He thinks there is no single hard cutoff, because humans always do the part that is not yet automated. Definitions like "AGI does 80% of knowledge work" are slippery: that share of work was automated long ago (tractors and the like) if you compare to what people did a thousand years ago.
- Humans are "humancentric" in how they judge this. Even if a few thoughts could produce whole products, people would still say AI cannot do the important work.
- He notes the exponential in how long agents can operate has kept holding, despite the saying that you can't keep predicting points on an exponential curve.
- On Dan's "AGI is when it is economically profitable to never turn your AI off" definition, he agrees an always-on agent doing meaningful work is the right idea. He pushes back on "economic value" as the yardstick, because value depends on how substitutable the output is (if everyone has AGI, they compete with each other).

## Why Scott started Cognition: "I just have to try"

- Cognition is his second company. He ran Lunch Club for about 5 years before this.
- He describes walking into the company rather than planning it. He and long-time friends were exploring AI ideas and found AI coding the coolest thing, as "nerds." The commitment came once it was clear AI coding would take off and RL would work, unlocking new product experiences.
- His decision frame: try and give it everything, and find out it did not work out, or don't try and wonder. He wanted to give it a go.
- Principles he states: work with people you really like, since you spend most of your time working. And "leave it all on the field": control the inputs, not the outcome, and be able to live with the result.
- He would do it even if it failed, and calls even a collapse (AI winter, hardware problems) "an amazing two years."
- Devon's unofficial otter logo reflects how the team thinks of the product: "our little buddy" with his own computer, typing away on tasks. He says if they believed this was the end of programming, they would be far less excited.

## What software engineering becomes: abstraction, architects and skipping the hazing

- Long term, he expects engineers to operate at higher and higher levels of abstraction, like the jump from assembly to Python or JavaScript. Eventually you express ideas in English, look at your product rather than your code, and the "Jarvis, Iron Man style future" is correct. Keyboard and mouse may not stay the right input.
- Calculator analogy: teachers once picketed against calculators. Some skills fade (multiplication tables), but humans with tools can do much more.
- The skills that matter more: logical fundamentals, breaking down problems, articulating answers, strategic trade-offs and architecture. The skills that matter less: debugging Kubernetes, knowing obscure libraries, esoteric syntax.
- He thinks computer science becomes more valuable, not less, because you are at the helm making decisions, and those decisions come from fundamentals.
- "Turning brick layers into architects." A "sick" software engineer is not someone who types fast; they break down problems, have good feel, think logically and cover the cases.
- Many professions have a "hazing" period of boring work in the first years. AI lets people skip rungs and become managers or architects directly, like an "officer's school." Devon takes the boring work that juniors used to absorb.

## Sync versus async coding tools: the spectrum and how to hand off

- He sees two form factors. The IDE category (tab complete, chat with codebase) makes you faster with hands on the keyboard. The agent category runs asynchronously in the background on full tasks.
- Until agents can handle everything, you want both. He guesses this phase lasts about three years, after which you mostly dictate to some agent form factor.
- It is a spectrum, not a binary. Tab complete is the most synchronous ("speculative coding," in his words). Cascade in Windsurf and CLI agents like Claude Code sit in the middle: multi-step, but you check in more, and they do not usually open pull requests, work with all your systems or test everything. Devon is fully autonomous.
- The open question he highlights: how to use the tools in tandem and hand off between them. His example of the lifecycle:
  - Fleshing out the idea and decisions (which user buckets get the feature, what replaces what in the UI): synchronous, live conversation with the agent, which surfaces code paths and edge cases while you decide.
  - Writing the PRD or spec: still collaborative.
  - Implementation, testing, making it work: async, you don't need to be involved once details are settled.
  - PR review and reading diffs: synchronous again.
- His view: flows naturally go sync, async, sync, async, and tools should support the whole cycle.

## Why Claude Code took off, and the form-factor hyperspace

- He credits Anthropic with an incredible product experience and says two things happened: capabilities improved enough to handle day-to-day work more autonomously, and Anthropic "put a lot of love" into the experience.
- His slightly contrarian take: the CLI itself is not the most important part. The right form factor depends on capabilities, and internally Cognition debates whether it should live in the IDE, Slack or a web app. Their answer: "the form factor just is a software engineer." What matters is what the tools do and how you expect to work with them. Engineers spend time in the terminal, IDE and Slack, and tools will integrate with more of them.
- How he distinguishes the three paradigms:
  - Windsurf tab completion augments you.
  - Devon is the software engineer sitting next to you with their own virtual machine and a repo they spun up themselves.
  - Claude Code is "handing the reins over to your AI buddy to take the wheel of your computer."
- He describes a hyperspace of design choices: sync vs async, local vs remote environment, in the IDE vs elsewhere, single-player vs multiplayer. Different single points are valuable, Devon is one, Windsurf another, Claude Code a new one Anthropic unlocked. He expects many to coexist for a while, since the best depends on use case and flow.

## Why Cognition bought Windsurf and how it fits with Devon

- Devon's bet is an agent with its own persistent cloud computer, like onboarding a software engineer. Because it has its own environment, it can learn to run tests and handle tasks that nothing else does.
- Even before the Windsurf acquisition, they were asking how to make an experience more accessible and more synchronous. Windsurf was "a great opportunity."
- His adoption path: Windsurf is a fast time-to-value option you can download and use immediately. Over time you learn to work with the Cascade agent and with DeepWiki indexing, which naturally pulls you toward the agentic flow. Humans have to learn to work with async agents, so the transition has to run sync to async.

## Post-training, RL environments and where Cognition focuses

- Cognition does post-training (fine-tuning and RL) but does not pre-train base models. His reasoning: as a startup, your edge is speed and focus, and Cognition's core DNA is understanding real-world software engineering nuance and teaching it to models to build a great product.
- Examples where post-training fits: having Devon predict its own confidence in a task, and training on workflows like pulling up Datadog, finding the logs, debugging and making the right edits. These need custom data models do not learn on their own. He also mentions COBOL, which models are not adapted to though it is real work.
- Code has a cleaner feedback loop (you can run it, and version control gives full history).
- His RL view: the "platonic ideal" is that you can solve any benchmark, so the real question is what the benchmark is: the tasks, environments, tools, decisions and the success criteria. If you describe these exactly and collect enough data, you can train a model to do it. Defining "good" is the hard part.
- Three ways to get capability: (1) the data exists on the internet (pre-training, which he thinks is converging), (2) experts handcraft RL environments, (3) agents learn continually on their own. He expects to eventually get to (3), but building real agents and environments is the primitive needed for both (2) and (3).
- Tight rewards example: a Grafana eval where the agent must get a broken dashboard running (fix package version locks, follow successive errors) and then answer what the dashboard says. If it didn't get it running it can't answer, and if it did it always can, so the signal is clean. In open-ended live learning the reward is harder: you could get the dashboard running and still have a wrong number.
- On brittleness: it depends on task design. If the task requires recalling exact package versions from memory, it won't generalize. If the agent must search, read the docs, read the logs and open the relevant file, it learns to interact with the real world to gain information, and that skill generalizes.

## The personal agent Scott wants someone to build

- Outside Cognition, he is most excited about a mass-consumer agent on your phone that handles things for you. He thinks capabilities are already there, and that flight booking is the over-used example.
- Examples he wants: calling and booking reservations, dealing with messages, tracking package deliveries, reordering Amazon items.
- Cognition has experimented with Devon for this: they order their Amazon packages with Devon. Devon has memory, stored secrets and a browser. A Slack message or Linear ticket is the wrong form factor for it, so "somebody else should build the right" interface.
- He predicts this will exist in about 12 months.
