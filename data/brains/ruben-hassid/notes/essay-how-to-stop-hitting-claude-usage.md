## Convert files and plan cheap before building expensive

- Ruben's core model: "Claude counts tokens. A token is roughly a word." Each message makes Claude re-read the entire conversation from the top, so message 1 is cheap but message 30 re-reads 29 prior exchanges first.
- Every habit comes back to one idea: avoid wasting tokens so they can be spent on what matters.
- Documents are costly. A single PDF page costs 1,500 to 3,000 tokens. A full 1000x1000 screenshot is roughly 1,300 tokens; a tight crop can drop under 100. DOCX and PPTX carry invisible metadata bloat.
- Uploading the same 15-page PDF to 4 chats burns 180,000+ tokens on something convertible to about 2,000 tokens of clean text.
- His workflow: open a Google Doc (type doc.new in the URL bar), paste the needed text, download as markdown (.md), upload that.
- Plan in Chat, build in Cowork. Anthropic confirmed file creation (spreadsheets, docs, presentations) uses more of the limit than regular chat. He plans structure, sections and assumptions in Chat, then pastes the result into Cowork (Opus 4.6 + Extended thinking) with "Build this exact file."
- Match product to task: quick question = Chat with Haiku; report from files = Cowork with Opus; chart from data = Code with Sonnet. Chat is lightest, Cowork heaviest. Chat's Research feature also uses a lot of tokens.

## Prompt less, ask more: short prompts, AskUserQuestion, voice input

- A 500-word prompt costs 500 tokens on every re-read. Instead, write about 15 words and let the AskUserQuestion tool generate clarifying questions once; answers are cheap clicks.
- His go-to prompt, under 30 words, used for about 80% of his Cowork sessions: "I want to [task] to [success criteria]. Read my folder. Ask me questions using AskUserQuestion before you start."
- Keeping a stable prompt structure helps: Anthropic confirmed frequently used similar prompts get partially cached (mechanism unpublished). He recommends a stable prompt library, swapping only the variable part.
- Wispr Flow (voice-to-text) reduces total tokens: typed prompts tend to be lazy ("Make it better"), causing follow-ups that force more re-reads. Speaking gives richer one-shot context, e.g. "The tone is too stiff. I want it to sound like I'm texting a friend who runs a 200-person company. Keep the data but make it casual. Only redo section 2."
- Fewer messages means fewer context reloads.

## Avoid redos, follow-ups and wasted output

- Don't say "redo the report." Say "only redo section 3. Keep everything else to save tokens." A full redo regenerates all output (e.g. 2,000 output tokens again).
- Add "No commentary. No explanations. Just the output." when the desired result is clear; otherwise Claude's "Happy to help! Here's what I did..." costs tokens.
- Batch tasks into one message: three prompts = three full context reloads, one prompt with three tasks = one reload. Example: "Summarize this article, list the main points, and suggest a headline." Answers also tend to be better with the full picture.
- In Chat, use the Edit button on the original message and regenerate, instead of sending "No, I meant..." or "Actually, change X to Y". The old exchange is replaced, not stacked. He calls it his favorite hack and uses it constantly.
- In Cowork, where prompts can't be edited, use "Restart the conversation from here" on an earlier message. The higher up, the more tokens saved. If the whole session went sideways, start fresh with a one-line summary.

## Keep conversations short and start fresh deliberately

- Cost grows fast: a 20-message session burns roughly 105,000 tokens; a 30-message session roughly 232,000.
- He cites a developer who tracked usage and found 98.5% of tokens went to re-reading history and only 1.5% to actual output.
- Every 15-20 messages, ask Claude to summarize what matters, copy the summary, open a new session, and paste it as the first message.
- At the end of a Cowork session, prompt "Write a session-notes.md with the key decisions and next steps." Next session start with "Read session-notes.md first."
- New topic = new chat, always. Old messages about a LinkedIn post or client proposal remain dead weight when asking about dinner.

## Trim context: files, folders, features, memory

- Cowork reads the folder before every task. His about-me file was 22,000 words; he trimmed it to under 2,000. Rule: keep ABOUT ME files under 2,000 words each.
- Don't dump 50 files "just in case"; oversized files also get summarized loosely. For tasks needing no files (e.g. an email draft via a connector), select zero folders.
- Turn off unused features: web search, connectors and "Explore" mode add tokens to every response. His default is everything off, enabled per task. (He still uses Extended thinking almost always, but pays for the $100 plan.)
- Be specific with connectors: "Search Slack from the last 7 days for messages about the Q2 launch" beats "Search Slack for anything about launches."
- Use Projects for recurring documents: upload once, it is cached and referenced by all chats in the project without re-tokenizing. Anthropic confirmed reused project content doesn't count like fresh uploads. On paid plans Projects use RAG, retrieving only relevant chunks. Useful for contracts, brand guides, research papers.
- Turn Memory off (he always does) and set Settings > General > Personal preferences plus Styles (e.g. "Concise" or custom) so new chats skip 3-5 setup messages.

## Model choice, Claude Code and scheduling

- Use Sonnet or Haiku for grammar checks, brainstorming, reformatting, short answers. "Opus + Extended thinking is your heavy machinery. Don't use heavy machinery to move a chair." His rule: if Claude would answer in under 30 seconds, it probably doesn't need Opus. Switch models before the session (2 clicks, sometimes under "More models").
- Scheduled tasks: for weekly reports, digests or research, use the /schedule plugin instead of a growing Cowork session.
- Claude Code: he uses it for briefs for his tech team and quick data visualizations. It goes wide (explores files, reads directories) unless scoped. Example: "Create a bar chart from this CSV showing monthly revenue for 2025. Save it as chart.png."
- CLAUDE.md loads every task, so put recurring instructions there (folder, language, naming conventions) but keep it short; Anthropic warns bloated files make Claude ignore instructions. Move occasional workflows into Skills, which load on demand.

## Plans, timing and using the right tool for the job

- Claude uses a rolling 5-hour usage window. Burning the whole limit in one morning wastes daily capacity; split into 2-3 sessions (morning, afternoon, evening) so earlier usage rolls off.
- Ruben pays $100/month specifically to avoid worrying about this; he moved up from the $20 plan after hitting limits by 2 pm. With the habits he now hits his limit about once a month.
- Don't use Claude for what it's bad at: it can't generate images (use Gemini instead of spending 5 messages on workarounds); for real-time search he says Grok is faster and more accurate. He notes ChatGPT has recently been good at both.

## Where to start (his prioritization)

- Pick 3 habits, not all 23.
- Daily Cowork users: habits 1 (convert files), 2 (plan in Chat), 5 (no full redos).
- Mostly Chat users: 8 (edit instead of correcting), 15 (new chat per topic), 17 (Projects).
- $20-plan users hitting limits: 6 (batch prompts), 13 (cheaper models), 22 (spread sessions across the day).
- Distribution note: his free articles routinely get 1,000+ shares, which he calls his "north star" and says keeps the newsletter free; he asks readers to share with colleagues in Teams or Slack groups.
