## What an "infinite army of software engineers" changes: agents that close the loop

Scott frames the core question for any company as: "What would you do with an infinite army of software engineers?" His premise is that every company is now a software company. Goldman Sachs, Mercedes-Benz, Lowe's and Elevance each have tens of thousands of engineers and huge backlogs (car software and process management, transaction processing, internal tools). Cognition (makers of Devin, the AI software engineer, started about 2.5 years ago) sells to these enterprises across the US, Europe, Latin America, Asia Pacific and the Middle East.

- He compares it to the internet: "we don't say that companies are internet companies anymore."
- His point is that the question is practical, not theoretical, because AI coding capacity is already here.

## Cognition's own proof: 10x software shipped in six months

Scott's favorite internal stat is that Cognition uses Devin to build Devin, and its shipped software volume exploded.

- From November 2025 to end of April 2026, Cognition shipped 10x the software.
- Headcount grew only about 40% (roughly 45 to 60 engineers).
- AI coding was already a big thing in November 2025, so this is not a story about early adopters catching up.
- The share of code committed by Devin rose to 90%+. Cognition uses Devin for "pretty much everything."
- Scott's framing of the scale: at 13% AI-written code (December 2025), a 1,000-engineer team gets about 130 extra engineers of bandwidth. At roughly 90%, it is "like you are doing 10 times as much," or about 9,000 AI engineers alongside 1,000 humans.
- At 13%, AI handles one-off features and repetitive tasks. At around 90%, it covers pretty much everything.

## Why it works: longer autonomous tasks and closing the loop

Scott credits two things for the jump: model capability and agents doing every step.

- **Model capability:** He points to the METR chart of task length an AI can complete without interruption. GPT-3.5 managed about 30 seconds of work (the "ChatGPT moment," an assistant or chatbot). The latest models have nearly broken the scale; the longest tasks in the dataset top out around 16 hours, and multi-day work is next. Every lab's flagship model improved, so he says models are now "good enough" to do these tasks.
- **Assistant vs. engineer:** 30-second tasks make a chatbot. 16 hours or more makes a full AI software engineer you can give a whole project to and ask to own end to end.
- **Closing the loop:** The first big AI coding breakthrough was GitHub Copilot's tab complete, which only wrote code. Now the agent does every step autonomously: understands the codebase, plans the change, writes the code, uses a computer to test its own work, and reviews it. You tag Devin on a ticket or a customer issue and it solves it. Scott says this is "how you get the real gains."

## Event-driven, parallel agents: most Devin sessions start without a human

Scott argues you should run agents as parallel and event-driven as possible, giving Devin the same hooks that would prompt a human engineer to act.

- At Cognition, the majority of Devin sessions are now started asynchronously by automated triggers, not by a human saying "Devin, please do this." He shows weekly data of interactive vs. async starts.
- Devin also starts sub-agents and plans specific tasks.
- Example triggers:
  - Monitor API route performance, compare against one week ago, and spin up a Devin if it is noticeably slower.
  - An error appears in Datadog, so a Devin spins up to investigate.
  - Bulk CVE remediation: scanners flag vulnerabilities and warnings, and Devin fixes them automatically.
  - Big version upgrades and large code base refactors, with Devin tackling every file in parallel.
  - Bug triage: a customer report goes straight to a Devin, skipping the human who would have started it, and a pull request is ready for review.
  - Everyday development: PRs, testing and building features end to end.
- He says agents can use the computer, work with every integration, test code and use a browser, so you can treat them as full software engineers. (Anecdote: in Japan a user asked which honorific to use for Devin: "-san, -kun, -sama?")

## Measure business outcomes, not tokens or lines of code

Scott says the "token maxing" era "lasted for approximately 6 months" (roughly January to May 2026) and that you should move past it.

- Counting tokens is "almost exactly the same" as counting lines of code written.
- He tells the story of an engineer whose weekly report said -200 lines of code: they re-implemented a system with a better, faster, cheaper architecture, deleting 800 lines and writing 600. The lesson is that lines of code is the wrong metric.
- He cites Uber as the famous example of burning its entire annual token budget in 3 months. His view is that the answer is not to maximize token use.
- What to measure instead: the outcomes you want to drive, productivity, what you do with the added capacity, and "actual project outcomes" delivered end to end. Hold agents to the same standards as human engineers.

## Why human engineers still matter: there is 10x more to build

Asked what happens to human software engineers, Scott's answer is that every engineer becomes about 10x more productive, "but guess what? We have 10 times more things to go build."

- Enterprises employ thousands or tens of thousands of engineers because there is so much software to build, and he says there is actually 10x more of it to do.
- Examples of software that should be better: a Department of Motor Vehicles "except it works," medical records with a genuinely good product experience, and banking apps that let you do everything you want.
- He calls this "the golden age of software engineering": abundance is arriving now, and a team doing this correctly can do 10x more.
- His closing question for every company: "What do you want to build?"
