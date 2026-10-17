## Setting up Claude as a 5-day team rollout (seats, Projects, templates, proof, then launch)

Ruben's pitch: adoption fails when teams are told to "switch" and left with a blank chat. His fix is a one-week playbook, 15-60 minutes a day, that pre-loads context so a teammate's first interaction already works. He frames it as "what most companies hire a consultant to do in 5 months," with no IT ticket, leadership deck or training session.

## Choosing the Claude team plan and seats

- Team plan is at claude.com/pricing/team. Minimum 5 seats, maximum 150. Enterprise goes through claude.ai/create/enterprise/qualification.
- Seat advice: Premium if someone uses Claude every day, Standard for less than twice a week. In between he still leans Premium.
- Claude does not train on team data, "like every AI-team plan." He says people keep asking this.
- He prefers Claude Cowork for personal use but Projects for onboarding a team.

## Monday: build one Claude Project per recurring deliverable (45-60 min for 3-5 Projects)

**Goal:** a separate Project for each task the team repeats weekly (client updates, proposals, meeting recaps, campaign briefs, internal reports). Each gets only the context that deliverable needs. Example: a law firm gets Projects for client memos, case summaries, demand letters and internal reports. Client memos get the tone guide and client roster; court filings get formatting rules and statutory references. "Your sales proposals don't need your brand guide. Your meeting recaps don't need your pricing sheet."

**Steps:**
1. **Let Claude identify the Projects.** Prompt #1 has Claude interview you one question at a time (use AskUserQuestion) about daily work, deliverables, repetitive tasks and work that gets redone. It outputs 3-5 deliverables, a Project name for each, and exactly which documents to upload. His fake firm "RubenLegal" got five Projects after four Q&As.
2. **Create the Projects:** Claude > Projects > Team > New Project. Name each as Claude suggested, add a short "what are you trying to achieve," and set it visible to the whole workspace.
3. **Load only the right context:** one gold-standard example of the deliverable, any relevant background doc (client list, pricing sheet), and the brief or template the team already follows.
4. **Generate instructions per Project.** Prompt #2 (run in regular Claude on Opus with Extended thinking, with examples uploaded) outputs a paste-ready block: what the deliverable is, who it's for, tone and format, quality bar, and guardrails (e.g. never speculate on timelines, always include next steps, never exceed one page). Turn on Extended thinking for most Projects; Web search is optional.
5. **Test and validate.** Prompt #3 asks Claude to produce a sample for a fictional scenario, then critique its own output and say what to add. Tweak instructions if off, about 2 minutes per Project. His test output was an 8-page document he called impressive.

## Tuesday: write a one-sentence prompt template for every Project (15-25 min)

- Teammates otherwise "stare at the empty chat and think, 'What do I type?'"
- Prompt #4 asks Claude, inside each Project, for the shortest possible copy-paste template: one sentence max and ONE [INPUT] field (raw notes, rough draft or bullets). It must rely on the Project instructions for tone, format, quality and guardrails and not repeat them.
- Save each template in the Project's Knowledge (probably on Drive). About 5 minutes per Project.
- Result: a junior pastes notes, hits enter, done.

## Wednesday: manufacture a before/after "wow" (20-30 min)

- "People don't adopt tools because of features. They adopt tools because someone showed them a specific output that made them feel behind."
- Pick a task you did manually this week that took 30+ minutes, has a visible "before," and that a teammate also does regularly.
- Run it through the new Project. Optionally record the screen (he uses ScreenStudio) and store the video on Drive with the template and Project link for onboarding.
- Screenshot your manual version and the Claude version, and save everything in one document. This is "actual side-by-side evidence," not "trust me, Claude is good."

## Thursday: convert one person instead of training ten (20 min prep + 15 min session)

- Core claim: "Adoption is a sales problem. Get one colleague excited, and the rest will follow."
- **Pick the drowning colleague:** behind on emails, always in meetings, staying late, visibly short on time, and someone whose reaction will make others curious. Not the tech enthusiast (will self-serve) and not the biggest skeptic (too much resistance for day one).
- **Message to send** (Slack/Teams): offer to show a tool that could save them serious time on a specific task, 15 minutes, using their actual report/email/brief from this week, no prep needed.
- **15-minute session:** open the Monday Project, paste the Tuesday template, show the Wednesday result, using THEIR work. They learn nothing and take no course; "the context layer you built Monday through Wednesday did the work."
- **Make them co-owner:** add them to the shared Project, show where templates live, and ask "What other tasks should we template?"

## Friday: roll out to the whole team (about 60 min)

- Rationale: the first interaction decides whether someone uses the tool again. It should be opening a Project where Claude already knows their work and standards, then pasting a template.
- **Pre-flight:** instructions validated (Mon), template ready (Tue), before/after receipts (Wed), one teammate who vouches (Thu).
- **Rollout message.** Prompt #5 writes a Slack announcement of under 150 words: lead with one specific result from the Wednesday test, one sentence on the shared Project, three things to do right now, ending "Try [template] on your next [task]. It takes 2 minutes." Casual, no exclamation marks, "like a teammate, not a manager," and an invitation to an onboarding call.
- **Seed it:** post in the team channel, then separately DM 2-3 people to try a specific template on a specific task today. The Thursday co-champion does the same so it's not only the manager pushing.
- **Collect feedback at end of day.** Prompt #6 takes the Slack reactions and returns: instruction adjustments, new templates to add, the biggest misconception to address, plus a Monday follow-up message with one team quick win.

## Why Claude, and his closing view

- He argues Claude is "simply the best out there" and cites Polymarket as expecting it to stay on top for a long time; he says he is betting on it.
- Closing framing: "intelligence compounds." Teams that use AI together get smarter together, which he compares to humans hunting together.
