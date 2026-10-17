## Ruben's current Claude Cowork setup: Skills plus Projects, no folders

- Ruben says he was wrong about his earlier Cowork guides ("Cowork" and "Cowork 2.0", about 20 million views combined) and tells people not to read them.
- He still stands by the prediction that Claude will become bigger than ChatGPT because of Cowork, launched in January. He has urged people to switch to Claude since December 21st 2025.
- His claim: "If you don't code, you must be using Claude Cowork."
- What broke the old setup: enterprise workshops with teams of hundreds using Cowork together. His files-and-folders system didn't work for collaboration.
- He says how Anthropic wants people to use the product differs from how people actually use it. He isn't paid by Anthropic, so he says whatever setup works best.
- Access:
  - Download the app at claude.com/download.
  - A Pro account ($20/month) is required. He pays for the $100/month plan.
  - Click the Cowork tab between Chat and Code.
  - Use Opus for complex tasks. He uses Opus 4.8 (High) most of the time, Max effort when needed, and Fable-5 once available.
- Why Cowork beats normal Claude: it answers with many Claude sessions at once. One session reads the Excel, another searches the web, another plans. Tasks can run 30+ minutes. One example took 8 minutes of many sessions from a single prompt.

## Why he dropped folders and files for Cowork

His old setup was a local Cowork folder with an "about-me" file and an "output" file or folder, selected at the start of each session. After months of use he found two problems:

1. **Folders leak.** Even when told "never check my output folder," Claude sometimes read it, poisoning context with outdated outputs.
2. **Files are impossible to maintain.** Nobody with a full-time job can spend hours a week updating an about-me file. It became a painful bottleneck.

- He also says he rarely opens Claude's output files anyway. He exports spreadsheets, text docs, PDFs and slides to Google Drive with one button (the Google Drive integration, opening as Google Sheets/Docs).
- His conclusion: "You really don't need folders."

## Skills vs Projects: the core of the new setup

- **Skill** = a capability you call with a slash command (e.g. /linkedin-post). It travels into any chat, and into other AIs like Gemini or ChatGPT.
- **Project** = a place you go to. Files and instructions stay loaded, it remembers, and it can be shared with a team. Every chat in a Project has the full Project context, and it doesn't pollute chats outside it.
- His test:
  - A skill you can teach someone → **Skill**.
  - A specific context (a client, a campaign) → **Project**.
- Teach teams the difference. Otherwise they end up with hundreds of skills that should be a few projects, or dozens of projects that should be shared skills.
- Best practice is to combine them:
  1. Make skills for your most recurring capabilities (e.g. drafting a contract).
  2. Run them inside a client Project with that client's information uploaded.
  3. Connect Gmail/Outlook and Slack/Teams first for extra context.
- His team gets access to his skills and projects in their own Claude.
- Some skills carry hundreds of pages of posts, hooks and SOPs as data.

**Ways to create a skill**
- Use Claude's built-in /skill-creator, answer its questions, test, save, then invoke it with the slash command.
- Use his free tool makemyskill.com (free account, no paid version). It scrapes the web more deeply than Claude usually does. Download the skill, then go to Cowork > Customize > Skills > Add > Create skill > Upload a skill.
- Ask Claude in an existing chat to "make it a skill."
- Run Research in Chat on a topic (he pasted a tweet praising experts). Claude generated a deep research report and decided to create 7 skills from it.
- His advice: create many skills, test them, improve them.

**Sharing**
- Projects: create them in Chat (not Cowork), make sure they're set to shared (top right), then start any task from Cowork. He admits "It's weird, I know."
- Skills: Customize > Skills > click one > Share > select the workspace.

**Problems he dislikes**
- Skills can auto-fire from their description. He wants a switch to only activate on invocation.
- Projects have a file-upload limit.

## His minimal settings philosophy

- His belief: "you shouldn't give too many instructions to an AI." Too much context makes Claude fall into the same answers every time and lose creativity. That's fine for drafting the same contract, but bad for brainstorming.
- His current setup:
  1. No folders.
  2. Minimal account settings, with no personal info given.
  3. Everything off except Connectors (the + menu, e.g. Gmail) and the setting that enables interactive charts.
  4. Global Instructions kept free of context.
- Instead of settings, use Skills for recurring tasks, Projects for recurring projects, and AskUserQuestion to prompt better.
- Turn the old about-me file into a skill so it's invoked only when wanted.

## The AskUserQuestion trick

- His #1 trick. Prompt Claude to use AskUserQuestion and it builds a form you answer. Claude then thinks more about how to reply, giving a much better output.
- It works for follow-ups too. Claude keeps interviewing you until there's enough context that failure is hard.
- When you don't know what to ask next, ask Claude to ask you.
- His view: most people don't know how to prompt LLMs. It takes practice and an understanding of how the technology works, since models are built to answer rather than state truth, which causes hallucination.

**Spreadsheet prompt template**
```
Create an Excel spreadsheet from: [DATA]
Purpose: [who uses it, what decision it supports, 1 sentence]
Sheets needed: "[Sheet name]": [columns, row meaning, calculations]
Formatting: [currency/date formats, conditional highlighting, frozen header, totals row]
Before building, list your top 10 assumptions so I can sanity-check them, then execute.
```
- His example was a customer support capacity and cost model for a B2B SaaS company with 4,800 accounts growing 8% month-over-month. It had 7 sheets (Assumptions, Ticket Forecast, Capacity Plan, Cost Model, SLA & CX, Dashboard, Scenarios).
- Key rule: every assumption is an editable, labeled input, never hardcoded in a formula.
- To edit afterward, go back to Cowork (ask Claude to ask you what to change), or use the free ChatGPT extension in Google Sheets (Extensions > ChatGPT, Heavy mode).
- He says he tested every way to create spreadsheets with AI and Cowork is the best.

## Onboarding new employees with Claude

1. Create a Claude Project with the company mission, deck, CEO/C-level interviews, and support best practices (which usually cover everything a new hire should know).
2. Invite the new hire to the Project.
3. Add a skill called /answer-onboarding that explains how to use the Project data to answer onboarding questions.
4. New hires start with the Project, run /answer-onboarding plus their question.

His company rules:
- "Please ask me as many questions as possible. Failing is winning."
- "Never ask me a question before giving me a potential answer."
- Find the potential answer via project plus skill first. This shifts people from "I'm new, I can't think for myself" to "I work actively to find the answer, but I still need help."

## Picking the right tool, and speeding up with voice

**Which tool**
- **Chat**: nothing to build, nowhere to keep it; a question or quick rewrite.
- **Claude Code**: the deliverable is software.
- **Cowork**: everything document-shaped (decks, analysis, client work).
- He references how-to-ai.guide for the visual.

**Voice with Wispr Flow**
- His claim: "its biggest blocker is most of the time… you."
- Typical session time he cites: prompt 30 seconds; skills read 50 seconds; plan 50 seconds; clarifying questions 50 seconds. Answering around 8 questions at 60 seconds to 2 minutes each means 8-15 minutes of the human being the slow part.
- Typing is about 60 words per minute; speaking is about 150.
- Wispr Flow is a dictation tool: hold a key (he uses Shift), talk, release, and the words appear wherever the cursor is, including Cowork's chat box. No integration needed.
- Free tier is 2,000 words/week. Paid newsletter subscribers get a free month (not required).
- The bigger benefit is richer context: people give more context when talking ("we are yappers by nature"), and speaking feels natural and puts you in flow state.
- Use it for three things:
  1. The initial prompt.
  2. AskUserQuestion custom answers (dictated, no self-editing).
  3. Feedback and pivots, e.g. "The tone is too stiff... like I'm texting a friend who runs a 200-person company. Only redo section 2."

## Saving tokens and money in Cowork

His framing: at company scale, saving tokens saves thousands of dollars.

1. **Restart instead of following up.** Claude counts tokens, not messages, and re-reads the whole history every turn.
   - His figures: message 30 costs 31x more than message 1; at about 500 tokens per exchange, 20 messages burn 105K tokens and 30 messages burn 232K.
   - Use "Restart the conversation from here" on an earlier message (higher is better), or Edit your own prompt, which deletes what follows. He calls it "the biggest hack."
2. **Fresh session every 20 messages.** He cites one developer who found 98.5% of tokens went to re-reading history and 1.5% to output. Ask Claude to summarize, copy it, start a new session, and paste the summary first.
3. **Batch tasks into one message.** Three prompts means three context reloads; one prompt with three tasks means one. Wispr Flow helps with this.
4. **Use Sonnet or Haiku for quick tasks** (grammar, brainstorming, formatting, short answers). He says this frees 30-70% of budget for deep work. Save Opus with extended thinking for hard work.
5. **Fable-5 ("Mythos-level")** is better than Opus for the hardest tasks but the most token-intensive. He uses it freely on the $100 plan with no problems, since his team doesn't code and so uses fewer tokens.
6. **Spread work across the day.** Claude uses a rolling 5-hour window; split into 2-3 sessions and avoid peak hours (5-11 AM Pacific on weekdays). He admits he never does this: "If I want to work, I work."

- His view on cost: "a couple of dollars per day is worth it to have a godlike intelligence by my side."

## First 20 minutes, and how Ruben monetizes

**Setup plan**
- 0-3 min: empty your settings, turn everything off.
- 3-8: build your first Skill (something you keep doing).
- 8-13: create your first Project (upload a client's PDFs, Excels).
- 13-17: use the skill inside the Project.
- 17-20: download his Claude Skills library (free in his welcome email).
- Creating skills should be the priority once Cowork is set up.

**Business model and positioning**
- His newsletter is free; he makes money consulting for companies of 50-500 employees with his team in NYC (about 20 people), through discovery calls and tailored enterprise AI workshops.
- In the PS he targets companies with 100+ people, arguing that AI adoption is "not a 'send them a newsletter' problem. It is a systems problem" (different roles, clients, tools, workflows, permissions, data, risks, habits). Workshops map where AI saves time, where it shouldn't be used, and how to adopt it without chaos.
- Audience and positioning: about 750,000 readers; he publishes twice a week; he wants to be the "filter to the noise": what to ignore and what to set up this weekend.
- Growth and lead-gen mechanics:
  - A free skills library is given to new subscribers in the welcome email, and to existing subscribers by comment and DM.
  - A free tool (makemyskill.com) is "free because it costs almost nothing to run."
  - Share and thank-the-sender calls to action appear throughout.
  - A paid-subscriber perk is a free month of Wispr Flow.
