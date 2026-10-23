## Why Scott thinks software engineering grows instead of disappearing

- Scott argues there will be more engineers, not fewer, for two reasons.
- Demand: "every company is hiring for more software engineers" and everyone has more ideas than time to build them. Much Excel and tool use exists only because engineering is hard, so many problems that code could solve go unsolved.
- Deciding what to build: Devin does not decide what to build or which problem to solve. Engineering becomes a "more pure" abstraction of that decision-making.
- He estimates a typical engineer spends about 20% of their time on fundamental problem solving and 80% writing code. With AI they can do about 5x more and spend nearly all their time on creative problem solving.
- Analogy: human calculators. Letting people stop doing that work expanded what capable people could do.
- He sees AI as democratizing: it taps latent demand where software was unaffordable before.
- Stat he cites: about 30 million software engineers worldwide, only around 0.4% of people. His goal is to multiply those engineers and let many more people work with software.

## What Devin is and how he positions it

- Cognition began around November 2023 (as he describes it, "around November"). Devin is an AI software engineer that makes its own decisions like a human engineer.
- It writes and edits code, uses the command line and browser, reads documentation, and deploys, tests and debugs autonomously.
- You give it a simple prompt and it runs end to end. You can watch what it is looking at and give feedback, mirroring "looking over the shoulder of another engineer".
- Scott frames Devin as the next generation of human-computer interface. In 10 years people will find it crazy that you had to "learn all these esoteric languages" and work through stack traces to talk to a computer.
- Product launch note: the demo got far more views than the team expected and was shared widely on tech Twitter.
- He expects reactions to split between skeptics ("there's no way this could possibly work") and people who think all jobs will be lost.

## Product design: why interactive agents beat fire-and-forget

- Scott's critique of typical agents: if you give a task and it goes off to do it, "it basically only has one try to do it all and to do everything perfectly".
- Devin is modeled on a human intern or junior engineer who works through the day while you check in four or five times with about 30 seconds of feedback each.
- Benefits of check-ins: the worker learns, still delivers valuable work, and the process is much faster than doing everything yourself.
- The UI shows planning, shell, code and browser views, so you see how it interacts with the world and can steer it.
- Process: the team built for itself, using Devin daily while building Devin. They worked backwards from "how we would want to interact with an AI coding teammate", then figured out technically how to make it work.

## Where Devin is strong and weak

- Strong at devops and dev setup, which is hard for humans too. An early exciting moment: the team was stuck for about an hour setting up a database and Kubernetes, asked Devin to do it, and it did.
- Step-by-step workflows work well for agents: run commands, read errors, check whether a port is open, install a missing package.
- Strong at data analysis end to end: find datasets online or pull a CSV, sanitize the data, run the analysis, build a visual.
- Strong on "encyclopedic knowledge".
- Weak at deciding what to do. You supply the precise formulation, and Devin does the thoughtful execution, including testing, debugging, installing packages and deploying. You cannot say "build me a great business".

## How Scott thinks about agent design and what improves agents

- He declines to share internals but says much comes down to understanding the interface of the problem and what exactly to optimize.
- Example (a GitHub issue to fix): in theory a perfect intelligence could read the whole codebase and write the diff directly. Practically, for humans and today's AIs, the cleaner path is to reproduce the bug, add print statements and rerun, check logs, or search Stack Overflow.
- Much of the work is getting Devin to think and decide that way, so planning and evaluation take most of the team's effort.
- Agents are a combination of factors, and he says "yes to all the above" on what improves them: faster inference, better base-model reasoning, planning, better tool use.
- He describes a race between these factors. A perfect intelligence would need nothing else, but a perfect tool user could also work. All are a "rising tide", and the question is which sees the most progress.

## The future role of engineers

- 5 to 10 years out, he expects "what we call software" to change a lot. Engineers spend their time on the fun part: working out edge cases, flows and architectures for a problem.
- He describes the future engineer role as "a mix between a technical architect and a product manager today".
- English as "the hottest new programming language" has truth to it, but fundamentals stay valuable: algorithms, logic gates, how computers work, logical reasoning. Analogy: people who work with networks benefit from understanding TCP.
- Near term (1 to 2 years): engineers who are AI-native will multiply themselves and do more.
- On very long timelines, he says it is hard to predict and he is not high confidence. He expects concrete AI impact on work and the economy well before any singularity. Even with today's technology, much is still possible, and "we're still very very early" (ChatGPT was about a year and a half old).

## Hiring and team principles

- Founding team: friends from the math and programming competition community, each with their own AI path. Scott ran the machine learning company Lunch Club for about 5 years. Co-founder Walden built much of early Cursor, and co-founder Steven was one of the first engineers at Scale AI.
- Hiring so far has been through a close network of people the team knows and has worked well with.
- Almost everyone on the team was a founder before or planned to start a company if not for Cognition.
- He wants high-ownership people focused on outcomes "more than ... politics", plus creativity, work ethic and good communication.
- Roles sought: great engineers, researchers and technical thinkers who want to work across multiple parts of the business. Early on, "we're kind of all doing everything", across customers, strategy, research, engineering and product.

## How competitive programming shaped his approach to startups

- Scott did math and programming competitions growing up, including the IOI (International Olympiad in Informatics), and says they were once his entire life. He grew up in Baton Rouge, Louisiana, and met like-minded peers through competitions and online communities. Many in that group became founders, many in AI.
- Core lesson: the best problems are about finding which assumption you take for granted might not be true, then finding a creative idea you would not intuitively think of.
- Startup parallel: building a great startup is about "finding something that the world doesn't believe is true yet but actually is".
- He stresses first-principles, independent thinking, being brutal about your own shortcomings, focusing on what you are not doing well, and constant effort to improve.
- Why code: he says most progress in the world over the last 20 to 30 years has come from software, and everyone needs more software engineering, not less.
