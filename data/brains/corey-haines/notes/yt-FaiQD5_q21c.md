## How Corey built the marketing skills library and why he works in Claude Code

- Corey started his B2B SaaS marketing agency Conversion Factory in July 2023. In August 2023 he went to a two-week coding boot camp (nine strangers in a garage outside Atlanta, 14-16 hours a day) and learned to code.
- At the boot camp he found Cursor early and became one of its original users. Since then he has built about 15 tools, launched five publicly, and they make money, "one of them quite substantial revenue".
- He turned agency work into SOPs stored in Notion, because a service business lives and dies by repeatable processes.
- Before Anthropic launched skills (around December 2025 / January 2026), he fed AI agents chapters of his books every time he wanted a task done. Loading context each time "was so tiring".
- Skills let him hardcode his marketing knowledge into prompts at the system level. In his words, the agent can "take what's in my brain, download it into their brain permanently, and then access it any time".
- The skills are born from real needs, both client work and marketing his own products. He says they are not "AI slop whipped together".
- The repo (named "marketing skills", partly as an SEO play) passed 30,000 GitHub stars, heading toward 32,000. He says he "did not anticipate this whatsoever".
- He works in Claude Code in the terminal. Anything you can do in Claude chat, Cowork or OpenClaw you can do in Claude Code, but not the reverse. Claude Code gives the most options and shows its logs, so you learn how coding works by watching.
- He built a site called Coding for Marketers with a quick start guide for non-coders. His advice if you hit an error: screenshot it, feed it to ChatGPT or Claude, and ask for troubleshooting.

## How a skill works and how to get the most out of one

- A skill is a markdown file (a folder, really). Corey says people ask how to get the most out of the copywriting skill, and he gives two answers: "read it", and ask the agent how to use it.
- Front matter holds the name, description and metadata. It controls how the skill gets invoked and what context the agent has about why it is being used.
- The copywriting skill has principles, writing style rules, best practices, a page structure framework, call-to-action guidance, copy guidelines and page-specific guidance.
- What doesn't fit in the main file goes into subfolders. For example, headline brainstorming points at a copy frameworks reference with pre-baked headline formulas. He wants to beef this up.
- Skills are downloaded locally into hidden agent folders you can only reach through the terminal. They become your files to customize.
- Install: paste the install command from the repo into the terminal, or ask Claude "download Corey Haines's Marketing Skills" and it finds and runs the commands.
- Customize by asking Claude to edit the skill. Example: "I see Corey likes to use a lot of em dashes. I'm not a fan. Replace them with commas or semicolons." Claude edits the copywriting skill file, so future runs carry your voice.
- He keeps using em dashes himself: "If you're using the em dash with good copy, then it doesn't look like an AI-ism."
- The skills marketplace skills.sh is where to find others' skills. His rule: start with someone else's skill when you can, fork and customize it, and build your own only when nothing exists. He also builds hyper-specific internal skills for his companies and products.

## The product marketing context skill as the foundation

- Every skill starts with an instruction to check the product marketing context file first.
- Without it, every skill asks the same foundational questions each time: customers, market, product, differentiators, better or worse than competitors, value propositions, testimonials. These are positioning, messaging, targeting and product strategy questions he did not want to answer repeatedly.
- The product marketing skill walks you through them and writes one file. The sections include product overview, target audience, personas, problems and pain points, competition and differentiation. It uses a specific template so the agent doesn't stray.
- Starting from nothing: "Unfortunately, you have to take about 30 seconds to use the product marketing skill, get it up to speed, and then you're good to go."
- You can feed it your website, 100 documents, or anything between. It collates and structures them.
- In the demo it made assumptions to move quickly. For real use he says to take all the time needed to refine the details.

## Live demo: rewriting a homepage with the copywriting skill

- The demo product was Formcraft, a fictional form builder SaaS. His prompt: use the copywriting skill to redo the homepage step by step before implementing.
- The agent produced a plan first. The old page was sparse and bland. He pushed back: introduce new sections, lengthen the page, and use the page structure instructions from the skill.
- The page went from 5 to 10 sections: headline, social proof, a jab naming the enemy (Typeform) to pick a fight, how it works, features, comparison table, testimonials, FAQs and a final call to action.
- Headline from the demo: "Beautiful forms that convert without the Typeform price tag." Supporting copy: "fair pricing, integrations that don't need Zapier in the middle."
- His point: no AI-isms, and this is not a claim to have cracked AI copy. The skill gives very specific instructions the AI can follow, and that gets good results.
- The agent asks questions before writing: headline direction, what social proof exists, whether testimonials are real, and tone (professional, tongue-in-cheek, whimsical). The skill does not override your own style.
- Skills can run in sequence in one prompt (e.g. keyword research, then programmatic SEO, then build pages, then copywriting) without stopping to ask questions.

## Giving AI access to your tools, and why custom code beats abstraction layers

- The old way: you switch between the website tool, email tool, A/B testing tool and CRM, and bring context between them yourself. The ChatGPT era: AI writes copy and you paste it into Webflow.
- His model: give AI access to your tools. Then "I'm no longer the middleman or the bottleneck"; the human becomes "the orchestrator and the overseer" and the tools talk to each other.
- Credentials are saved in his terminal shell files so the agent can use them. He says there are many ways to do this.
- The homepage rewrite worked fast because the site is custom code. He calls this a shift in what SaaS tools will look like. An agent with an MCP into Webflow can fill in blanks but struggles to create sections or make design decisions, because Webflow sits "a few abstractions above the actual code".
- "Coding is cheap." Thousands of lines of code don't matter to AI. Emails, A/B tests, reports and lead magnets in custom code let agents do much more.
- On Webflow-style CMS companies, he says they are worried. They will probably have to build their own Claude Code-like engine under the hood. Layers of abstraction hurt agents, which want to be as close to "bare metal" as possible, and these products can never fully get there or there would be no product.
- Their advantage is brand familiarity and user experience, since many people fear the terminal. As fewer people do, pressure grows.
- He expects the number of websites to explode, as blog posts did after ChatGPT. There will be lots of AI slop, and it is up to marketers to use skills, taste and expertise.

## Live demo: keyword research and programmatic SEO with stacked skills

- Step 1: the content strategy skill with real keyword data. He gave it access to DataForSEO and Ahrefs credentials. DataForSEO is cheap and API-only, suited to agents. Ahrefs opened its API but is much more expensive, though with a deeper data set. He prefers DataForSEO for demos.
- The agent proposed a four-phase plan: seed list, DataForSEO expansion and clustering, Ahrefs validation. He told it to skip Ahrefs and use only DataForSEO for the demo. Keyword research that normally takes a long time of rabbit holes (competitor rankings, industry blogs) took roughly 30 seconds or less.
- Step 2: the programmatic SEO skill. It outlines all 12 playbooks, scores each, and recommends the best fit. For Formcraft it picked templates and explicitly said why not the others, which he uses as proof the skill isn't a yes-man.
- Step 3: he asked it to pull real template keyword data. It wrote a Python script to build a table merging the playbook with keyword data. Result: 42 template variants, about 12,000 estimated monthly visitors in total, cost about 7 to 12 cents. It also produced CSVs and tiers (tier 1 recommended, tiers 2 and 3).
- Step 4: build the tier 1 pages. He limited it to 10 ("otherwise it would have to copy over like 100 different inputs"). The result: breadcrumbs, H1, description, template content, related templates for internal linking, and a call to action, each targeting a unique keyword. He says it could be 10,000 pages and would run until done.
- Next step he would run is the SEO audit skill, checking code for metadata, JSON-LD and URL structure.

## What AI is good at, and how Corey thinks about AI-proofing a career

- Where agents beat humans, in his list:
  - Ingesting and remembering huge amounts of data.
  - Chaining multi-step tasks autonomously instead of a sequence of pasted prompts.
  - Changing multiple files simultaneously.
  - Spinning up sub-agents and parallel agents (content strategy, programmatic SEO and keyword research at the same time), including across projects.
  - Ideation: keyword research is a "you don't know what you don't know" problem, and AI can brainstorm 100 seeds in a second then run the searches.
  - Grunt work: "the monkey work, the stuff that no one else wants to do".
- His day-to-day: his job is now managing agents, sometimes 10 at once, clicking between them. "I'm finding myself being the bottleneck."
- Why the terminal: it is a "back door" to everything on your computer, like a jailbroken iPod. It can open headless browsers, manipulate files, do web search and use other apps, and it can write scripts, reports and CSVs. He thinks tools may converge into one app eventually (Claude, Cowork, Claude Code, ChatGPT, Codex), but for now the terminal gives maximum capability.
- Code is "just text in files... files within folders". He explains the stack from first principles: AI providers (OpenAI, Anthropic, Google) make models; agentic tools (Claude Code, Cursor, Codex) harness them; they work in languages and frameworks (HTML, CSS, Next.js, Rails, Django, Laravel); files are backed up on GitHub; and hosting puts the code on a data center computer.
- How to AI-proof a marketing career: don't rely on hard skills, since AI is now better at those than anyone. Instead, be at the forefront of creating and discovering the playbooks, tactics and principles to bake into a skill. He wants marketers known as efficient AI users who "can build new playbooks", not limited to the playbooks everyone (and the AI) already runs.

## Integrations, token cost and handling tools without an MCP

- For tools like Postscript with no native MCP: you don't need an MCP. If a tool has an API, ask Claude Code to write an integration to pull the data and shape it how you want. "At the very very least, if you have an API key, you're in business."
- The marketing skills repo has a tools and integrations section with custom CLIs he built for tools that only have an API. Each acts as a wrapper, a CLI/MCP-like layer.
- On token cost: he's on the highest Claude plan so he rarely thinks about it. His argument: skills reduce token spend because the AI doesn't burn tokens struggling and making errors while figuring out integrations or skills, so outputs are sharper with fewer tokens. He calls that "pretty much the only thing in our control".
