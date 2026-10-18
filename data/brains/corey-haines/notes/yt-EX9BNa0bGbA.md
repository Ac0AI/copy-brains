## How Corey uses Claude Code as the marketing "terminal" instead of chatbots or browser tools

- Corey spent his career in B2B SaaS marketing. He started the Swipe Files newsletter (about 27,000 subscribers) and, in 2023, the SaaS marketing agency Conversion Factory.
- In August 2023 he flew to a stranger's house outside Atlanta (Ryan Kulp, found on Twitter) for 2 weeks to learn to code. His reason: "I was really tired and frustrated of trying to lean on someone else" to build things.
- His AI moment came at that boot camp, when someone found a VS Code fork with ChatGPT inside the code editor (Cursor). The unlock was AI in the workspace with full context, so he stopped copy-pasting between tools.
- He thinks marketers are only now, about two years later, catching up to AI living inside their email platform, CMS and analytics.
- Because he learned to code, he understands "how the internet works." That lets him judge what a new model or agent update makes possible.
- He is a terminal-first user of Claude Code. He ranks the surfaces by control:
  - The terminal is "the backdoor jailbroken version" of your computer and its tools.
  - The desktop app is "one layer higher".
  - The browser is "nerfed normie mode".
- He expects the Claude surfaces to converge eventually, but says full control only comes from the terminal.
- If a marketer is stuck on setup, his advice is to ask Claude, paste in errors, take screenshots, and "figure it out." He has used the Claude Max plan for about a year (the plan costs $100/month) and calls it "the best money I've ever spent."

## What a skill is and how Marketing Skills is built

- A skill is a hard-coded prompt for an AI agent (Claude Code, Codex, Cursor, Windsurf). Anthropic created the paradigm. It gives the agent specific SOPs, processes and frameworks with "really tight guardrails," so it stops relying on a mix of good and bad training data.
- He built marketingskills.com (marketing-skills.com) because he kept pasting the same prompts into Cursor and had to rebuild context each time. It began as a GitHub repo of his brain: Swipe Files newsletters, agency SOPs, playbooks and templates. It has over 20,000 GitHub stars (21,569 in the episode).
- Skills install into a hidden folder on your computer (`.claude` or `.agents`) and are always available. They are forkable and editable: download his copywriting skill, then change it to make your own.
- Claude can invoke a skill automatically when keywords match (for example "programmatic SEO"), or you can name it directly.
- Skills.sh is a directory of about 91,000 skills. Vercel made a skill for finding skills. His rule: if you need a capability, ask Claude to search for a free library or skill, and if none exists, build or jerry-rig one.
- He used Claude to articulate his own editing style. He gave it his newsletter edits and had it write a system prompt, which his team now uses. He does the same for design taste: "I can't say those things" in design language, but can show three sites he likes and have AI describe the style.
- Skill file structure:
  - Skills are Markdown files, chosen because they are small and structured. Headers and bullets let the AI scan quickly without burning tokens.
  - A skill folder can also hold `references` (templates, playbooks, definitions, scoring models) and `evals` that check the skill works to standard.
  - Front matter tells Claude when and why to reference the skill.
  - Keep a skill under about 500 lines, and smaller is better. Claude's context window is roughly 100,000 tokens, and a bloated skill leaves less capacity for the actual task.
- Each tactical skill first references a shared "product marketing context" skill. It stores ICP, pricing, differentiators and the other basics, so every skill starts with your business context.

## Tool integrations: APIs, CLIs and a tools registry

- Corey says the biggest limit on what marketers can do with agents is the capabilities their tools expose: APIs, CLIs and MCPs. A tool is only as usable as the access it gives. He prefers "API-first" products.
- He loads API keys and logins into the terminal, so Claude can "figure out a way to make this work" instead of relying on fragile connectors.
- An API key alone is not enough, because every API works differently. His repo has a tools registry with integration skills and CLIs per tool (HubSpot, Instantly and others). Each lists what the tool offers (API, MCP, CLI, SDK), how it authenticates and the common operations.
- Example: a script for Instantly that is "a little mini app" interfacing with its API for cold email.
- His method: every integration he got working after repeated failure became a saved skill, so others get it working "out of the box with limited errors."

## Workflow: keyword research to programmatic SEO pages

- Demo on a fake form-builder SaaS. He asked Claude to do keyword research using the DataForSEO API (cheap, API-first).
- Claude pulled competitor and "alternative" keywords and long-tail use cases, deduped them and organized a list in about 30 seconds.
- He argues that with SEO "you don't know what you don't know." AI works as a brainstorming machine that tries to cover every competitor and tangential site, and you can keep prompting it for more keywords.
- He then invoked his programmatic SEO skill with the prompt to build the first 10 pages targeting those keywords and show the localhost version.
- Claude generated a templates index with clean URLs. The 10 pages (for example, an order form template) came with target keyword, estimated volume, copy, FAQ and call to action. The SEO tool's summary estimated about 30,000 combined monthly volume, mostly low competition.
- The pages were built in Next.js on his computer. To ship, you tell Claude to push to GitHub and sync with Vercel. GitHub is "the central source of truth."
- His agency now builds only in Next.js instead of Webflow or Framer. He calls it "way easier, way faster, way more scalable." Webflow is possible via its CMS API, but you still have to design the page and keep checking it.
- He thinks marketing tools will increasingly be driven through Claude: "Claude becomes the driver. You're the co-pilot." He uses the rally-race analogy of the navigator reading turns to the driver.

## Workflow: cross-referencing analytics data and scheduling routines

- Real example from his product TrueList (an email validation tool, truelist.io). He connected Google Search Console, Fathom Analytics, and keyword dumps from Ahrefs and DataForSEO, then told Claude to cross-analyze it.
- Claude produced a report with page-by-page Search Console clicks, Fathom clicks and keyword volume, plus key takeaways: what is working, what is underperforming and where the sources diverge.
- Example finding: direct and referral traffic growing while organic visibility softened. He compares the output to a deliverable from "an SEO god after 3 months."
- He says agents are especially good at "cross-referencing data" and working with huge amounts of it. Marketers' brains were never meant to switch between Google Analytics, Search Console and Ads and do that math by intuition.
- He ties this to the classic "why did traffic dip this month?" question from CEOs. The agent can at least attempt an answer.
- Claude has a feature called routines. It lets you run the same analysis on a schedule (daily, weekly or monthly), pulling new keywords and fresh Fathom data.
- His vision is one command center. Pipe in the marketing tools, then layer on customer calls, sales, customer and product data, and just ask: "Are leads down right now?"
- He uses voice dictation (WhisperFlow) heavily and says it makes the process feel more human and faster.

## Workflow: RevOps audit in HubSpot

- His RevOps skill contains a lead lifecycle framework, lead scoring, lead routing and pipeline stage management. It has references and evals, and it reads the shared product marketing context first.
- Usage: tell Claude to use the RevOps skill and give it access to HubSpot. It will audit the pipeline stages and check whether lead scoring exists. If it doesn't, it can build the scoring model and either tell you what to do in HubSpot or do it for you, depending on the access the tool allows.
- He says several people have done this, and results depend on how much API access the tool gives.
- When you update the scoring model in the references, the skill updates too.

## Workflow: social content and video with Remotion, plus email in React

- His social content skill holds platform-specific guidelines, ideas and templates, and frameworks for different social formats.
- For video he uses Remotion, an open-source library that renders video from TypeScript code. Remotion also ships its own "best practices" skill from its team, which teaches Claude how to make videos.
- Example: he made the launch video for the Marketing Skills 1.7 release by telling Claude "use Remotion and make this video." He says he is "literally handicapped when it comes to video things."
- Edits are done by prompt. For example: give the opening and end an extra second or two to breathe, with no manual dragging and no manual fixing of transitions. Remotion runs a video editor in the browser, so he previews changes live.
- Emails are the same: "write it in React and then show me." He views and edits emails in a localhost preview, then sends. He calls it "a totally different paradigm" from clicking a thousand buttons.
- He is building Magister, "Claude Code for marketing in your browser for all the normies" (waitlist open at the time).

## The creative-director mindset and the marketer's role

- Corey is an optimist, not an "AI doomer." He frames the shift with Mad Men: Don Draper dreams up a concept, Peggy writes copy, Bob in art builds a mock-up, and weeks pass. His view is that we will look back on working in Google Docs the way we look back on Don and Peggy on pen and paper.
- The marketer becomes the creative director, "not the typist." Claude is "the full tool stack" and the full team across copy, design and format (website, email, video, ad, poster).
- His reasoning: marketers have always been told to run experiments and make a thousand ad variations, but "I was so bogged down in the day-to-day minutia" of pulling reports, building decks and syncing with teams. The new setup lets you spend time on creative marketing.
- He notes engineers are "the laziest people" and so find the best way to do things. Marketing is moving toward the engineer's way of thinking.
- Advice for learning: give yourself a real project rather than just watching videos, because this stuff only clicks by doing.
