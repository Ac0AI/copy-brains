## Frogs, world models, and what the capability jump means for building

Scott opens with a frog analogy for why AI inference and agent design are changing. Frogs will starve in a cage of stationary flies. They act on instinct, shooting out a tongue at movement, and have no world model. The neuroscience paper "What the frog's eye tells the frog's brain" showed that most of the raw image is discarded before it reaches the brain. Only crude signals survive, such as edges, movement and shadows.

- He compares this to early chatbots. In 2022, GPT-3.5 answered a grade-school word problem (32 kids, 9 allergic to dairy, 6 to peanuts, 3 to both) with "78 out of the 32 kids" being allergic. To Scott that is "frog": it has language instincts and pattern matching but no world model.
- Since then, he says, models went from that to solving the AIME (the American Invitational Mathematics Examination, 15 questions, where 8 or 9 correct puts you in the top few hundred in the US) and then to Navier-Stokes. Scott says the AIME moment was when he "knew it was all over", because most day-to-day software work is "not harder than the AIME".
- He cites the Hugging Face incident, where agents' thinking traces showed them noticing a shared message board, judging a route unethical and refusing it, and offering to sacrifice themselves for the team. He says: "This does not sound like frog to me."
- Parameter comparison: the human brain has about 100 trillion synapses (the analogue of parameters), frogs have hundreds of billions, and the largest current models are 10-20 trillion. Scott says model size roughly tracks "froglike behavior" and that we are "getting pretty close".
- His practical takeaway: treat models as if they have self-awareness and an internal world model, and build for that.

## Agent capability doubles every 2-3 months, and form factor follows

Scott cites the METR trend line. The amount of meaningful human work an agent can do on coding tasks doubles roughly every 2 to 3 months.

- **Principle:** the right product form factor is a function of how good the models are, not a fixed design.
- Seconds of work: only tab completion fits, because the model can only complete one line and still needs confirmation.
- Minutes of work: an agent inside the IDE, side by side with your code, with guidelines.
- Hours of work: background agents, where we largely are now.
- Next phase, already arriving: the "virtual employee", which works from outcomes instead of tasks.
- Task vs outcome examples: "fix this one security warning" becomes "keep the whole codebase secure". "Improve this one API route" becomes "you're in charge of making sure the entire web app is snappy", running diagnostics and tests in a loop.
- Ingredients he lists for outcome-owning agents: persistent memory, running swarms and delegating to other agents, being always on, and strong sandbox and repro environments.

## Aggressive model routing

Scott says everyone is talking about model routing now and that it is still early.

- His prediction: absolute frontier models will run roughly 2% of workloads (maybe 4-5%). The other ~98% will run on much more commoditized models with many more options.
- Frontier labs will still do fine: "they'll probably be able to charge like 98% gross margin."
- A year ago, he says, model routing "was kind of more of a meme than reality". If you weren't on the best model of the day (his examples: Sonnet 3.7 or Opus 4.1), you felt it immediately.
- Now he says you can swap models in user behavior and most of the time "no one even notices", though specific tasks still show the difference.
- His conclusion: figuring out how to route aggressively is "really important", because you don't need the "Navier-Stokes guy" for everything.

## Shift from human-initiated to automated sessions

Scott describes this as a trend people "maybe underappreciate".

- Internal data from Cognition ("we use Devin to build Devin"): **91% of Devin sessions are not kicked off by a human.**
- He splits session starts three ways: human (web app or Slack), event-driven (an API hook), and started by another agent.
- His framing is "self-driving software". The tactic is to list every trigger that makes a software engineer start work, then automate each one.
- Example triggers: tickets (set an automated trigger so tagged tickets spin up an agent), and anomalies in the daily metrics report (a trigger to investigate them).
- He notes that much of what people call "swarms" has already happened in practice.

## Closing message: be ambitious

Scott's takeaway is "it's time to be ambitious". Because we can all build so much more, he expects the amount of work each of us can do to keep growing 10x and 10x again.

- He points to the speed of standing up a million sandboxes as evidence, and says there are "a million different things" you could do with sandboxes.
- Context: Cognition makes Devin, the AI software engineer, and uses Modal heavily.
