## Why Ruben quit ChatGPT for Claude Cowork

- Ruben says he went almost a month (as of Feb 2026) without opening ChatGPT because of Claude Cowork. He says he is non-technical and doesn't know how to code, and that anyone can replicate his setup.
- His claim: "Claude Cowork replaced ChatGPT and any other AI." He still uses Gemini sometimes (images, videos) and Grok sometimes (to search).
- He frames Cowork as "a philosophy more than a tool". Just as learning to prompt ChatGPT teaches you to prompt any AI, the lesson is to think "This is how things can be done" rather than "This is the right tool."
- He calls it the tool that changed how he works more than any since the original ChatGPT launch, while admitting it isn't perfect.
- Setup:
  - Install the Claude app.
  - Use a Pro account (he quotes seventeen dollars a month).
  - Open the "Cowork" tab.
- Reader comments note Cowork was macOS only at the time.

## Reason 1: It follows long instructions, so context quality compounds

- Ruben's complaint about ChatGPT: you give it a 500-word prompt with context, requirements, formatting rules, do's and don'ts, and it ignores half. When reminded, it apologizes, then ignores the other half.
- In Cowork he uploads:
  - His voice profile (over 2,000 words on how he writes, what he hates, phrases he never uses, preferred structures).
  - His copywriting rules.
  - Reference documents.
- He says it reads and follows all of it, so output sounds like him, not "AI trying to sound like me."
- His principle: the quality of AI output depends on how much context you can give. If the AI ignores your context, you're stuck with generic results.

## Reason 2: Long sessions without the infinite loop

- ChatGPT problem he describes: about 45 minutes into a complex task it repeats itself, contradicts earlier statements, or loops on apologies and the same wrong output, so you restart or give up.
- In Cowork he has run 2-hour sessions with back-and-forth, revisions and mid-conversation pivots. His four observations:
  1. It doesn't lose the thread.
  2. It doesn't get trapped.
  3. It remembers what was decided 90 minutes earlier and builds on it.
  4. It creates a form to ask him about a new direction when he's unhappy with the output.
- His principle: real work takes time and multiple pivots. If your AI breaks after 20-minute sessions, you can only do small tasks, which is a ceiling on what's possible.
- His rescue prompt when things go wrong, using the AskUserQuestion tool so Claude prompts him:
  - "We are getting sidetricked. We need to start over without losing the context of this chat. First, generate a first AskUserQuestion form for me to answer so we get to decide what went wrong and where we must go instead. From my answer, generate a second AskUserQuestion form to now be able to complete the task."
- Summary line: "Claude Cowork is the one prompting me."

## Reason 3: No memory is a feature (avoiding overfitting)

- Ruben argues ChatGPT's cross-conversation memory causes what he calls overfitting. It matches what you said last week too hard, makes assumptions from stale context, and gets weird in ways that are hard to diagnose.
- Cowork starts fresh every time. He gives context explicitly, per conversation and per task, usually via his markdown files. His line: "I decide what matters. Not some algorithm guessing."
- He concedes an AI that knew exactly when to pull the right past information would be great, but says it doesn't work that way today. So use AI the way it works best: control the full context before starting the task.
- Tactic: if you're tired of introducing yourself, create a markdown file with everything about you and upload it to any AI at the start of conversations when necessary.

## Reason 4: It creates real files, not text to copy-paste

- ChatGPT gives text you copy, paste into another tool and format yourself, "every single time." Cowork writes the actual files into your folder:
  - Presentation request gives real slides.
  - Spreadsheet request gives an Excel file with working formulas.
  - Document request gives a formatted Word file.
- Cowork can generate slides, Excel and PDFs inside your computer.

## Five things he built with Cowork

**Slides via Gamma.** Gamma is his favorite AI for slides, and Cowork connects to it. His process:
1. Tell Cowork what you need.
2. Use the AskUserQuestion tool so Claude prompts you on the outline.
3. Once the outline is good, create content for each slide.
4. Final prompt: "Use Gamma MCP connector to create the slide in [style]."

**Triage a huge reading pile.** He is writing a book with a publishing house, which sent him 4,992 files. He asks Cowork what he should really read and why.

**Excel.** Cowork absorbs existing Excel files and produces an upgraded version. He separately wrote a newsletter on Claude in Excel.

**Expense report from receipts.** 47 receipts from a work trip.
- Old way: open each photo, read amounts, type into a spreadsheet, categorize, total. At least 2 hours.
- His prompt: "Create expense report. Categorize by type. Include date, vendor, amount. Calculate totals."
- Result: an Excel file with every receipt logged, dates extracted, vendors identified, categories assigned and totals calculated.
- Claude flagged 3 blurry receipts ("Could not read clearly. Please verify."). He filled 3 cells manually. Total time: 10 minutes.

**Research brief with sources.** For a newsletter on AI agents.
- Old way: 23 browser tabs, quotes pasted into a doc, losing track of sources.
- His prompt: "Research AI agents in 2026. Major players, product launches, company use cases. Create a brief I can reference while writing."
- Result: a markdown file organized by theme, with key points summarized and source links, in about 2 minutes and without opening a browser tab.

## Going from top 1% to top 0.1% in AI, and his offer

- He sees three ways to move from top 1% to top 0.1% in AI:
  1. Play with AI. He notes you learned through games as a kid.
  2. Use AI without its current limitations. He says Cowork has the fewest today.
  3. Join a community of obsessed AI users, such as his Slack with 1,000+ professionals.
- Consulting offer: he consults Fortune 500 companies in the US to deploy this system, setting up Claude Cowork per department and duplicating seniors' knowledge. He had a spot left for Q2, taken via LinkedIn DM.
- Content approach: he teased plugins and connectors for Cowork as a future newsletter and asked readers what he should cover next, saying his team uses Claude to select the best comment suggestions.
