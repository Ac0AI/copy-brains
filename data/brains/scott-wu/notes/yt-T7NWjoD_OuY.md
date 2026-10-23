## Scott's pitch for autonomous coding agents: what Devin is and why code is the first domain

Scott Wu co-founded Cognition AI, which builds Devin, which he describes as a "fully autonomous software engineer". It has access to the same tools a human engineer would use: a shell, a code editor, and a browser. His thesis is that language models have moved from text completion to agents that make their own decisions.

- **Timeline:** Cognition started in November 2023 (about seven months before this talk) in a Bay Area hacker house, then moved between the Bay and New York in progressively larger Airbnbs as the team grew.
- **First wave of generative AI:** He calls these "text completion products": ChatGPT, Q&A bots, marketing copy, customer support, GitHub Copilot and Cursor. The model gets a prefix and completes the suffix.
- **Second wave (agents):** These add "some amount of autonomous decision-making". That demands a much higher bar of consistency, and it creates a new product design problem because "the UX of agents is something that's extremely new".
- **Why Devin exists:** The team are "coding nerds", and teaching AI to code was one of the coolest things they could think of.

## The name game demo: plain-English iteration as the interface

Scott demoed Devin building a mobile-friendly "name game" site (he struggles to memorize names and faces) in one morning.

- **The prompt:** He gave Devin a TSV file of the roughly 170 World's Fair speakers with their faces and asked it to show two random faces, show one name, and have him guess which face matches.
- **What Devin did on its own:** It made a plan, created a directory, started a React app, read the TSV, built the code, and deployed a first version in a few minutes.
- **The first version was close but not right.** It still showed both names, and he says he probably hadn't specified that well.
- **Feedback loop:** He fixed it with plain-English feedback only: hide the names until the user clicks an answer, restyle the "play again" button, add a streak counter that resets to zero on a wrong answer.
- **Takeaway:** "If software engineering is just this easy, if you can just explain exactly what you want in plain English", the world looks very different. He says he actually used the game and learned the names.
- **Plans change:** He notes Devin's plan changes a lot over time as it gets new information or feedback, as a human's would.

## Dogfooding: Devin building Devin inside a production codebase

The Cognition team uses Devin on their own product daily.

- **Example:** An engineer (Bryce) asked Devin to add a search bar component to the Devin sessions list. That PR was merged and is the session search bar in the product.
- **Setup that makes production work possible:**
  - Devin starts from a **machine snapshot** with the repo already cloned.
  - It uses a **Playbook** that holds details about the team's repositories.
  - It works inside the team's git environment and opens PRs.
- **Conversation style:** Feedback is like talking to another engineer. Bryce asked for a magnifying glass icon, told it to be idiomatic and use the Phosphor icon library, and said "no need to test, I trust you". Devin mentioned a login issue it ran into.
- **Scope of internal use:** Many of Devin's API integrations, internal dashboards and metrics tracking were built by Devin. He calls it "Devin building the company with the company".

## Why code is a good domain for agents

Scott gives three reasons, beyond the team being engineers.

1. **Software engineering is more than typing code.** Real work is investigating a bug, reading across files, running commands, pulling up docs, running the front end to reproduce an issue, editing, and trying again. That maps naturally to an agentic workflow.
2. **Code gives feedback to iterate on.** Fixing one bug in a codebase of thousands of files and hundreds of thousands of lines is hard for humans and AIs alike. Humans do it by adding print statements, pulling logs, checking monitoring and jumping between files. Each step is a decision followed by running real code to see what happened. That gives agents a cleaner path to a solution.
3. **Agentic capabilities are improving fast.** Even a demo this simple "would have been almost unthinkable" two years earlier, and training data and methods are improving rapidly.

## Agent UX is its own deep product problem

Scott argues agent products shouldn't just copy existing software or human collaboration. His point is that an agent differs from both.

- Early mappings are "how we use software today" and "how we talk with other humans". Devin's features partly resemble "looking over your own intern's shoulder": you can see its computer and the commands it runs.
- The real differences involve parallel work, information gathering and managing context.
- **Features listed as part of the product iteration:** shell, code editing and web browsing, plus forking and rolling back sessions, Slack and GitHub integrations, Playbooks, machine snapshots, secrets management, and tools for verification.
- **Recently shipped:** VS Code Live Share into Devin's machine, so a user can make an edit alongside Devin and tell it "I went ahead and did that edit for you". He notes there is no close parallel in today's software.
- He expects "a lot more iteration" here over time.

## How Cognition's own workflow changed: async, parallel, "every engineer becomes a manager"

- **Parallel Devins:** An engineer with four tasks can give each to its own Devin and run four in parallel. He describes this as "turning every engineer into an engineering manager".
- **How he describes Devin:** "Very enthusiastic interns". They try hard, don't know everything, get small things wrong and ask lots of questions, so you iterate with each.
- **Slack-first workflow:** Tag @Devin in a conversation ("change this color"), Devin makes the PR, you hit merge. The team has done this from the gym or the car.
- **Mobile angle:** You can "write code" without your computer because you can describe the task to Devin and review the code afterward.

## What's next: engineers spend more time on problem solving, and demand for software keeps growing

Scott frames software engineers as doing two jobs.

1. **Problem solving with code:** deciding the solution, the architecture, the flows and the edge cases.
2. **Implementation:** debugging, writing functions, writing unit tests.

- **Today's split:** He estimates the average engineer spends about 10 to 20% of time on the first and 80 to 90% on the second.
- **His claim:** Devin frees engineers to do more of the first. Setting up Kubernetes, debugging broken APIs, and handling version changes and migrations are the things he expects to hand off. The role becomes "a mix between a technical architect and a product manager".
- **Devin doesn't decide what to build:** "Devin is not the one that decides what to do or what to build."
- **Headcount argument:** The job will change, but "there's actually going to be way more software engineers than ever". His precedent is punch cards, then assembly, then C: programming tools changed and the number of programmers grew.
- **Demand argument:** Software has been "the number one driver of progress in the world in the last 40 or 50 years", and demand for it is probably far more than 10x what is being built now. Each engineer becomes 5 to 10x more effective, and far more software gets built.

## Q&A positions: access, junior engineers, and remaining challenges

- **Access:** Cognition was letting in more people every week and scaling up with enterprise customers, with a large waitlist.
- **Debugging in context:** In Cognition's own codebase, Devin has a machine with the dev environment, server and front end, so it can reproduce a bug, debug it and retry.
- **Junior engineers and interns:** He expects demand to keep rising with supply and training to change. What makes a great engineer is not typing speed but understanding problems, knowing architectures and never missing an edge case. Juniors will use those fundamentals "earlier and earlier".
- **Biggest challenges for the vision:** "Basically everything": speed, consistency, access, integrations and the right product UX. He sees a "rising tide" from new hardware, foundation models and agentic research, and expects optimizations at many layers of the stack rather than one fix.
