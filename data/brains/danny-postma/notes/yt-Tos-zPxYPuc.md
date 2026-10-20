## Agent OS: the setup and why Danny built it

- Six months before this video, Danny worked in Claude Code in the terminal with his laptop open. He decided that was "quite stupid" and wanted overnight runs, cron jobs and triggers that start tasks while he is away.
- He built the first month of the system by hand with Claude Code. After that the system built itself.
- He says it now runs most of his businesses and most of his coding, and that he automated about 95% of his tasks. He does little programming manually.
- He has no name for it beyond "Agent OS".
- The system is a UI on top of Anthropic's Claude Managed Agents API and SDK. That API handles sessions, MCP connections and the Files API.
- Danny describes the loop as: set a goal (for example "ship a new landing page"), break it into tasks or hand it to the goal system, and agents work it. Tasks move through to do, doing, review and done.
- Each session runs in its own container. The container pulls the repo, mounts the file system, does the task, commits and cleans up. It is thrown away afterwards, so the next session starts clean.
- Agents message him only when they need him, through an inbox. He can go running or out with his wife and the work continues until an agent gets stuck.

## Agent design: one job per agent, walled-off access

- Each agent has a name, title, model, prompt, skills, MCP access, file access and environment. Examples are a default agent, senior dev, plan agent, review coordinator and librarian.
- Every agent gets a shared "Agent OS foundational prompt" that explains which files, systems and MCPs it can reach. Its role prompt is layered on top.
- The plan agent has one job: turn an approved spec into a concrete implementation plan, write it to the task and finish.
- Danny's rule: "you don't want to give any access to your agent that they don't need."
- His customer support bot has the Front MCP. It has no Gmail and no GitHub repo access, so a prompt injection cannot leak code from customer support.
- The plan agent gets plan mode and the Agent OS MCP only. It has no Ahrefs and no GitHub MCP, so a leaked prompt has nothing to act on.
- Each agent has a collaboration list that controls which other agents it can spawn as subtasks.
- Environments set network access. An agent can be limited to a single host such as api.front.com. Everything else, including GitHub, is blocked at the base level even if the agent tries.
- Skills attach to agents. For example `/plan` is a plan-mode skill, and a skill can include files such as a Python script.

## File system, MCPs and secrets

- Containers don't persist files, so Danny put Cloudflare R2 storage behind an MCP.
- Each agent gets its own folder. It can read other folders only if granted access.
- Server-side checks enforce permissions. For example, an agent can be write-only and cannot delete, because deletes must go through the MCP.
- He can open, edit, download and preview any agent file from the UI.
- Repos are registered with the GitHub repo, mount path, credential file and a personal access token.
- Environment variables are injected into the session and stored encrypted with Google's token encryption system. He could not recall its name. He uses this to give an agent a read-only MongoDB connection, for example.

## Tasks and the spec-to-PR template

- Tasks are a kanban board. A task can run once immediately, be scheduled, or recur (for example, summarize his inbox every Monday).
- Tasks can start from templates. His "compound engineer workflow" template for a new feature is "like a 3-hour fully managed" run.
- Each step is a follow-up task bound to a specific agent and prompt. Some steps need his approval, and the next step starts only when a task is marked done:
  1. Write a spec (needs his approval).
  2. A plan agent turns the spec into a plan.
  3. A review coordinator spawns four review agents (feasibility, scope guardian, coherence and others). They write reports, and the coordinator consolidates them into must-fix and should-fix lists.
  4. Another agent revises the plan from the review.
  5. An implementation agent writes the code.
  6. A review coordinator reviews the code.
  7. A senior dev applies the review fixes.
  8. A librarian updates an internal wiki on how the code base works.
  9. Danny reviews the deployment.
- One example task started at 3:00 p.m. and finished about 5 hours later, partly because he forgot to answer a question. He wakes up to a PR.
- He says it works 99% of the time because end-to-end testing is built in.

## Inbox, mobile access and live visibility

- The inbox is an MCP that agents write to. His replies go back to the agent. Agents can wait for a reply, ask open-ended questions, or send multiple-choice questions with tabs and radio buttons.
- The app is mobile responsive and a progressive web app. He gets push notifications at the gym when an agent needs help or finishes.
- He can open any session as a live stream and see which tools are being called. At the time, his game's farming feature was being implemented that way.

## Triggers and automations in production

- Triggers are webhook-started jobs. Customer support chat messages at Hedgehog Pro fire a webhook. An agent with access to customer support reads the chat and assigns it to a support rep or an account executive. That trigger had fired 600 times.
- A bug-report trigger fires when support submits a bug in the back end. A diagnostic agent has access to the repo and the support chat and writes a report on the cause. If he approves the finding, the system runs plan, plan review, fix and end-to-end testing. He only reviews and merges, so he no longer does big bug fixes by hand.
- Automations are cron-style schedules. Example: a bot that creates the company's LinkedIn content on the first of the month, automated end to end.

## Goals: open-ended work with a definition of done

- Tasks suit structured work. Goals suit open-ended implementation and are what people now call a "gauntlet loop".
- A goal runs against a definition of done. He writes it, or feeds in a spec and the system writes the success criteria for him to approve. The loop continues until every box is checked.
- An orchestrator spawns a session, then checks the progress logs, the definition of done and what has been implemented. It decides the next step. It might spawn a senior dev to implement a feature or a plan agent to write a plan.
- Agents share an inbox and a file system and keep a progress log.
- Guardrails on every goal:
  - A spend cap. He ran one goal without a cap one night and it "ran up to $1,000".
  - A maximum run time.
  - A stuck limit: after 19 identical iterations the orchestrator stops the run.
- His daily routine: write a spec in the morning, throw it into the goal system, approve the definition of done, and let it run 5 to 6 hours. At the end of the day he reviews and merges the PR, then starts again.
- He says his whole video game is being developed by this system.

## Cost and runners

- Running everything on Claude Managed Agents got expensive. He was spending about $500 a day.
- He added local runners: a $10 Hetzner VM running Claude with dangerously-skip-permissions and Grok in yolo mode. Work goes to the cloud when it is busy and otherwise runs locally. A goal can be pinned to local runners only.
- He assigns models by role. Planners stay on Fable, and workers run on Grok ("Grok 4.6 is really fast"). Model and runner are set per agent.

## Config as code and the CLI

- Every project has an AgentOS folder that mirrors the online setup. Agents, skills and templates are all YAML files, and an agent's file holds its model, skills, MCP connections, repo and prompt.
- A CLI can push and pull these files and create projects.
- He brainstorms with Claude locally. Then he tells the CLI to create a goal or session in Agent OS with all the details. It creates the task and picks the agents.
- He builds the loop templates by having Claude Code write the YAML steps, which saves the manual work. Templates use variables such as the branch name.
- He offered to open-source his agents, skills and prompts on GitHub if viewers ask in the comments.
