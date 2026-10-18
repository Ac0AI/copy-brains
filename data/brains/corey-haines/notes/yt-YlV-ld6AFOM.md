## What a skill is and why Corey builds them

- Corey calls skills "the final result of prompting": a hard-coded prompt that gets invoked contextually, so you don't re-explain role, context, do's and don'ts on every input.
- Origin: while "button mashing" Cursor vibe coding, he kept a bucket of saved snippets, e.g. "you are a conversion rate optimization expert", because that framing gave better output.
- Most skills are a markdown file, roughly 500 lines long. Some add scripts, integrations or connectors.
- His rule: "I don't make the rules." If you want to do marketing with Claude Code, specific skills give much better results.
- The marketing skills repo had about 34 skills at the time. They come from his agency Conversion Factory SOPs and templates, his swipe files, newsletter, courses and ebooks, and work done on his own projects and for clients.
- His test for what to skillify: when he's doing the same thing over and over, he asks what the process or SOP is, then turns it into an "autonomously executed SOP" for Claude Code.

## Installing and using skills (Claude Code vs. Claude/Cowork)

- Corey expects Claude, Cowork and Claude Code to converge. He thinks Anthropic has "a bit of a product marketing problem" with naming and getting products to work together.
- He prefers Claude Code because it runs in the terminal and has full control. Claude and Cowork are browser- or desktop-based and always limited.
- Installing the marketing skills into Claude Code is a single command, `npx skills add coreyhaines31/marketing-skills`. Doing it in Cowork takes lots of downloading and uploading.
- Simplest route: tell Claude Code "download all of the marketing skills from Corey Haines". It installs globally (in a hidden agents folder), so they work across projects.
- Telling Claude Code to download the repo grabs everything, not just the skills folder, including the tools and integrations folder.
- Skills install globally but apply locally: they get customized and filled in per project.
- After install, skills can be invoked with a slash command, e.g. `/ai-seo` plus a URL.
- What a skill can do depends on what Claude Code has access to. With admin-level access it can run audits; otherwise it works from the outside via web search or scraping.
- He runs Claude Code in "dangerously bypass permissions" mode by default because approving everything takes too much time.

## Product marketing context: the foundation skill

- All other skills are meant to draw from one skill at the top of the dependency diagram: product marketing context.
- Problem it solves: skills like AI SEO otherwise start by asking you about your business, goals and context. This skill captures it once: ICP, product, differentiators, business model, goals, brand voice.
- Every other skill's instructions say to check for the product marketing context file first (it looks for `agents/product marketing context`, and also older setups).
- Setup workflow: tell it your site URL and ask it to build a product marketing context from the website, "use your best judgment". If the file exists, it summarizes it and asks which sections to update.
- Run it first, then run other skills such as AI SEO, content strategy or SEO audit. They skip the repeated questions.
- Over time some of this saves to memory, so there's less of a big context download, but each skill still re-checks it to confirm its work matches what you set.

## Anatomy of a skill and how to extend it

- Front matter: name, description and metadata, which determine what the skill knows about itself and when it triggers. This follows Anthropic's protocol, e.g. "when the user wants to X, Y, Z... use this at the start of any new project before other marketing skills."
- Architecture: one main `SKILL.md`, plus reference folders and other subfolders the main file can be told to read for more specific, prescriptive instructions.
- Example for extending voice: add a voices section, tell the skill to ask the user which voice to use, then reference the matching file in a voices subfolder (LinkedIn voice, X voice, YouTube scripts).
- Recursive improvement is a "really big pro tip": get AI output, make your edits, give it back and ask it to identify what you changed, so the voice or instructions improve in a loop.
- The open-source repo is the foundation and guardrails. Others are meant to make it their own with ICP, brand voice and best-example folders.

## Tools and integrations

- Skills are top-level instructions that guide the AI. Tools like Ahrefs need your own API key, stored outside the skills (e.g. in an environment file).
- A tools and integrations folder has scripts for the APIs of many popular marketing tools. They show the AI the API structure ("don't call it this way, call it that way").
- It also includes many CLIs and guidance on which tools have MCPs, which have no API and need an MCP instead.
- Skills can reference these, e.g. "pull Ahrefs data for this".

## Skill security and discovery

- Corey finds skills through the skills.sh directory, built by the Vercel team.
- Vercel partnered with cybersecurity firms that audit every skill (he says about 90,000 exist) for things like prompt injection. Each skill page shows security audits from multiple companies on the right-hand side.
- Warning: it's easy to fork a repo and impersonate, so always check exactly what you're downloading.

## Magister: the browser-based AI CMO

- Why he built it: after the marketing skills repo took off, people asked whether they really had to use the terminal, and how a non-technical team without Claude Max subscriptions could use it. His answer was to "SaaSify" it.
- Concept: an OpenClaw-style agent hosted in the browser, powered by the marketing skills, handling day-to-day marketing work.
- Stack: OpenClaw as the agent harness (derived from Pi, which derives from the Claude Code SDK, giving an agentic chat that can change files, search the web, install and remove files). On top: a hosted server experience where everything is isolated per user, with no shared servers, so API keys and environment variables never cross over. Marketing skills and other OpenClaw and Claude Code skills are layered on, with a chat interface and one-click integrations to your tools. It is standalone and not tied to Anthropic.
- On "AI CMO" claims: he's "really annoyed" by companies claiming the first AI CMO when theirs "scans Reddit for opportunities to comment in a thread". His definition: a real AI CMO has the full breadth and depth of day-to-day marketing, lead you through building a strategy, execute it on any tactic, channel or tool, and do it autonomously. They are taking their time to fulfill that.
- Key shift: in ChatGPT you are the middleman between the AI and your tool. With Claude Code plus skills, or Magister, the AI asks you for what it needs and works with your tools directly, so you're no longer the bottleneck.
- Human in the loop: "There's always always always going to be a human in the loop component." He is not a fan of AI slop, e.g. "a 100,000 posts that will never rank for anything". The aim is strategies that work and move business goals.
