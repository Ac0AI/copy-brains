## The capacity of coding agents doubles every ~70 days

- Scott frames agent capability as how much work an AI can do uninterrupted before a human has to step in or steer it.
- Across AI generally, he cites a doubling time of about every seven months. In code it is "every 70 days", which is two to three months.
- That gives four to six doublings a year, so the work an agent can do in code grows 16x to 64x per year. He says this matches what Cognition has seen over the last couple of years.
- About 18 months before the talk, the only product experience with PMF in code was tab completion (predict the next line). It has since gone to a full AI engineer that implements whole tasks.
- He expects another 16 to 64x over the following 12 months.

## The right interface and the bottleneck change at every tier

- Scott's answer to "what is the future interface?" or "which capability matters most?" is that it "changes every two or three months". Each new tier brings a different bottleneck, a different most important capability and a different right way to interface with the agent.
- Each 2x looks the same from a cosmic perspective, but in practice each one is a different problem.
- Tab completion was only a text problem: take the single file so far and predict the next line.
- Over about 18 months Cognition had to solve much more:
  - working with the human in Linear or Slack
  - taking in feedback and steering
  - helping the human plan
  - testing on its own
  - making longer-term decisions
  - debugging its own outputs and running the right shell commands to get feedback
- Takeaway for builders: don't lock in one interface or capability roadmap. Re-ask what the bottleneck is each time agent capacity doubles.

## Tier 1 (summer 2024): repetitive migrations and playbooks

- The first broad-adoption use case for Devin was repetitive migrations: JavaScript to TypeScript, Angular version upgrades, Java version upgrades.
- The task shape is a huge codebase, file-by-file changes and a clear set of steps (for example, the steps on the Angular website). It is not routine enough for a classical deterministic program, but it is clear enough to follow reliably.
- This was all agents could be trusted to do consistently at the time, and it was the most annoying work for humans.
- Scott's general trend: AI takes the boilerplate, tedious and repetitive work first, and humans keep the fun, creative work. Over time AI takes on more of the boilerplate.
- The key capability was instruction following. Cognition built **playbooks**, where a user outlines a clear set of steps and Devin executes each step by step.
- Another system built at this time, and rebuilt many times since, was **knowledge/memory**:
  - When the same task runs over and over, humans give feedback like "remember to do X" or "do Y every time you see this".
  - The system keeps those learnings and uses them to improve every future run.

## Tier 2 (late summer/fall 2024): isolated bugs and small features

- As systems improved, Devin could take on broader but still isolated bugs and features, described in plain language. Example: "in this repo select dropdown, list the currently selected ones at the top".
- Scott compares the task level to what you would give an intern, with Devin as a "junior buddy".
- These changes are usually contained in one or two files, but the agent still has to set up and work with the repo, including running lint and CI as basic checks.
- Cognition's main build was repository setup ahead of time. That means a snapshot you can start from, reload and roll back, on a clean remote VM that runs CI and the linter.
- This is where Devin started to show value beyond the single migration use case.

## Tier 3 (fall 2024 to early 2025): broad bugs and requests across the codebase

- Most real changes don't stay in one file. They need diagnosis, work across files, and often hundreds of lines.
- Cognition leaned on treating code as a hierarchy, not just text:
  - call hierarchies
  - running a language server
  - git commit history, to see how files relate
  - the linter
- The core problem was context. The agent has to make consistent changes across several files and understand the whole codebase.
- This is when you could tag Devin on an issue and have it build the fix. Slack became a huge part of the workflow, because that is where teams discuss issues. Scott says this is "right around when we went GA".
- Scott's human analogy: on day one in a codebase you don't know what to do, because understanding is built over time. Devin had to build a representation of the codebase and learn to plan a task, find all the files to change, and produce the diff.

## Tier 4 (spring 2025): complex tasks need an iterative, collaborative workflow

- On harder tasks (improve an architecture, profile a slow function, handle an error case better), the human doesn't know everything they want when they hand over the task. A two- or three-line prompt that becomes a Devin task is no longer enough.
- Cognition released **DeepWiki**. Devin had its own internal representation of the codebase, and it turned out to be just as useful for humans trying to understand it or ask quick questions.
- Closely related was **Search**: asking questions about a codebase.
- This produced a more iterative workflow:
  1. Ask questions and explore the codebase with your agent, an "L2 experience".
  2. Work out what the task really is.
  3. Then set the agent off to do it.
- This shift also came with **Devin 2.0** and the in-IDE experience. The human closely monitors the first 10-20% of a task, then lets the agent work alone for the other 80-90%.

## Tier 5 (June 2025): clearing the backlog, with confidence and testing

- The newest tier is handing Devin a large pile of tasks and having it work through them at once, "kill your backlog".
- It combines most of the earlier capabilities:
  - integrating with Linear and Jira
  - scoping a task and working out what is meant
  - deciding when to ask the human for approval or questions
  - working across files
  - choosing the right repo, or the right part of the codebase, in an org with several repos
- Two things become critical:
  - **Confidence.** The agent must tell "I'm quite sure this is the task, I'll execute" apart from "I don't understand, human please help". Without that it can't work autonomously.
  - **Asynchronous testing.** To deliver whole PRs on larger tasks, the agent must test its own work. It needs an iterative loop: run the code locally, know what to test, know what to look for. Scott calls this a much higher-context problem.
- The next questions he raises are how to tackle an entire project rather than one task, and what comes after projects.
