## Scott's product: Devon as a fully autonomous AI software engineer

- Cognition's product is Devon, which Scott describes as "a fully autonomous AI software engineer" and a full asynchronous coding agent that takes on whole tasks.
- Devon works across the end-to-end stack. It writes and edits code, runs the linter and tests, executes commands, installs packages, reads tickets, and talks to the user in Slack. In short, it uses the same tools a human engineer would.
- The company was founded in November 2023. When Scott said "AI software engineer" in 2023, "everyone thought we were kind of crazy."
- Scott frames the product as "turning the brick layers into architects." Every engineer becomes an eng lead with their own team of Devons, assigning tasks and answering questions.
- His self-driving analogy: autonomy comes in phases (automatic shift, then cruise control, then no driver's license needed). Devon today is aimed at technical users with existing codebases, doing new features, bug fixes and upgrades.
- Honest capability assessment: Devon is "a junior engineer today." Six months earlier it was "like a college intern," and twelve months earlier "like a high school CS student." It can't yet handle really tough architectural questions or massive projects alone.

## Launch playbook: the viral demo, then general availability

- The launch article (Bloomberg) was supposed to go out at 6 a.m. on a Tuesday. Scott asked them to hold it, and it went out at 9 a.m. because the team needed more time. The demo video still wasn't filmed by 1 a.m. the night before.
- The launch checklist, run by a very small team:
  - Get investors and friends to help promote it.
  - Write a blog post that articulates "what we think the future is going to look like."
  - Put out the demo runs.
  - Get it to initial early users so they could give firsthand feedback.
- The team did not expect the level of attention: "we were honestly shocked."
- After launch, the criticism was that Devon was taking engineers' jobs. Scott's response: once you put something out, "you're not really in control of your own narrative anymore." The lever he does control is getting the product into people's hands.
- That meant general availability in December 2024: anyone could "put down a card," sign up, pay, and connect their GitHub repo. Before that, Devon was mainly sold to enterprises.
- Scott's stated rationale for GA: let people see "the good and the bad and everything" and try it themselves. He is upfront that Devon "is certainly not magic" and does some things well and some not.
- Afterwards, adoption became more organic. Companies posted GitHub graphs showing Devon as their number one contributor.

## Competitive positioning: the autonomous agent category

- Scott sees three categories of AI coding product:
  - Code completion tools and AI IDEs.
  - Zero-to-one "build me a cool website" tools, mainly for non-engineers.
  - The AI software engineer, the direction Cognition has "always been building towards."
- He says Devon "is still rather unique" as a full autonomous agent, and that Cognition "kind of invented the category" and "believed in agents before anyone else did."
- On the competition, he stays generous: "there's a lot of really great teams," and the market is large enough that overlap isn't zero-sum. He argues that the idea of full autonomy "either resonates or it doesn't with folks," and that is what sets Cognition apart.
- Why code is a defensible space: its ceiling is unusually high. A trivia question has one best answer ("Thomas Jefferson"), but with code "there is always another level of understanding," more efficient or better ways to build, so there is real room for differentiation.
- The messy questions Cognition spends all its time on:
  - How does the agent learn over time?
  - How does it interact with humans and slot into the workflow?
  - How does it make the right decisions about the codebase?
  - How does it use tools like the browser, Datadog or CI?

## Product design for agents: beyond the chatbot

- Scott says Cognition has not "cracked" agent UX. Chatbots are simple (ask a question, get an answer), but agents "actually do things and take actions in a real-world environment," so the interface differs for every product.
- Devon's specific surfaces:
  - GitHub: Devon makes PRs and responds to comments on them.
  - A clean way into Devon's VS Code.
  - Visibility into the shell commands it runs.
  - Visibility into Devon's browser.
  - Tagging Devon on Slack issues.
  - SSH into Devon's machine.
- His prediction: a "proliferation of vertical-specific agents." A legal agent wouldn't use VS Code and GitHub, so each vertical needs its own tools and workflow integration.
- Guardrails follow how human teams already work. Devon never pushes straight to master or production. It creates its own branch and opens a PR, and a human reviews and merges. Access is tightly scoped per task, and Devon slots into the same permission models large orgs already use.
- Build vs. buy: Cognition builds the agent infrastructure in-house because it wants "such tight control" over the action space, how Devon learns over time, and how the right files are pulled into context. Scott calls these "the meat of what makes Devon special."

## Technical approach: compound system, RL, and feedback loops

- Devon is a compound AI system that relies on multiple models working together.
- Scott splits the Gen AI era in two:
  - 2022 to roughly early 2025: imitation learning (train on the internet, get something that talks like the internet).
  - Now: reinforcement learning, which works when you have a clearly defined set of tasks and a clean feedback loop for success versus failure.
- He expects specialization. For customer service, sales or legal AI, a clean loop means you can train a model toward near-perfect results on it. Differentiation then lies in what behaviors you define, what the model uses to make decisions, and what tools it has.
- Why code took off first: you can run it. In accounting, by contrast, the feedback might be "you get audited a year later." In code, the result is real output that "is not fakeable," which gives a tight loop for judging whether Devon succeeded on a task.
- The hardest problem he names: Devon learning over time. A great engineer on day one is still less useful than someone with 10 years at the company. The open question is how Devon distills, for example, 500 sessions with different engineers into the best action for the current task. It pulls in retrieval, context and search.
- Building an AI engineer has two parts: "the computer" (connectivity to tools and information, VMs, infra, rolling back state, parallelizing and forking) and "the brain" (knowing how to use tools to raise the probability of success). He compares it to a human debugging process: pull, run locally, reproduce the bug, read logs, edit, retest. A human who just "yolos" a diff rarely succeeds.
- Team time is split across 3 to 4 rotating pods. If forced to pick one focus, it is the brain side (capabilities and intelligence), with infra and core product interface close behind. Scott says he sees no single glaring bottleneck.

## Hiring and team: small, dense, high-drive

- The team is about 25 people and has been kept "pretty small and pretty steady." Roughly 15 months in, it works late: "in the office after midnight most days," with a brainstorm that ran past 1 a.m. the night before.
- About 18 of the team have founded companies before (Scott included). Scott's logic: they are clearly capable of running a company alone but come together to build something bigger.
- Many early hires came from the international Olympiads. The team has 20 gold medals at the International Olympiad, along with those 18 former founders.
- Ambition is a hiring filter: "we're going after really the biggest thing. You don't end up with a medium-sized outcome." The mindset is "this is going to be the big one."
- December launch examples of range: one engineer (a top CTF team member) sized VMs and prepared infrastructure for load; another pulled an all-nighter perfecting product features; the president flew to Madrid for a 36-hour trip the week after a 36-hour Paris trip. The team has traveled to South America, Asia and the Middle East in one year.
- Pitch to candidates: for "a bunch of programming nerds like us," teaching an AI to code is "the coolest possible thing we could be working on." Contact is scott@cognition.ai.

## View on the future of software engineering

- Scott calls this the start of "the golden era of software engineering."
- He says CS is still worth studying. At its core, software is about telling a computer what you want it to do, and the durable skill is problem solving: decomposing problems, designing solutions, understanding what architectures work.
- On programming languages: he expects Python to eventually feel like assembly does today, used only by people who need to peel back the layers.
- Data point he cites: until around the year 2000 there were fewer than a million software engineers, and today there are about 30 million. Making programming easier has grown the field, not shrunk it.
- On the line between idea and execution: it has always shifted. Hosting your own website once meant servers and DNS, before Cloudflare. If AI takes the 90% that is execution, humans do the 10% ideation "10 times more," and that boundary keeps moving toward 99.9%.
- Predictions:
  - The next 2 to 3 years bring about as much change as the last 40 in software, with entirely new frameworks and processes.
  - Single-use software, built for one purpose and used once, will appear.
  - Jevons paradox applies most in software: cheaper software means more uses for it. He ranks products by tier (billions of users, 100 million, 10 million, down to a community school website) and sees large gaps in quality that are not built today simply because they would take months of engineering time.
