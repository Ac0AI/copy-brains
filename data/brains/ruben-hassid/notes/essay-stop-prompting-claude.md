## Prompting is the weakest way to use Claude: context files beat long prompts

Ruben argues that short prompts give "average results" because Claude lacks context on tone, audience and rules. Typing 500 words of instructions for every first draft is something nobody does, so outputs "sound like everyone else" and people blame Claude for it.

- **Projects** (upload files once, reuse across chats) are better, but still force a new project per topic, repeated uploads and re-explained rules. He says that is not how a "Second Brain" works.
- **Claude Cowork** is the fix. He calls it "the biggest thing to happen to AI since ChatGPT".
  - It connects to a folder on your computer.
  - You save text files in it covering your style, rules and goals.
  - Claude reads them automatically before every session: "The files are the prompt. Forever."
  - It then creates documents (docx, ppt, Excel) inside the folder, "like a real employee".
- He claims software lost about $2.5 trillion in valuation since Cowork and that it made Claude's growth parabolic, surpassing ChatGPT. This is his belief ("I believe...").
- Payoff example: with a one-line prompt, Cowork read his whole folder (writing style, taste, dislikes), ran an "Anti-AI Writing Style" audit unasked, and saved a solid LinkedIn post into an OUTPUTS subfolder.

## Minimal Cowork setup (recap)

- Cowork exists only in the Claude desktop app (free to download). It needs a paid plan: $20/month minimum; Ruben pays $100/month.
- Create a folder called "Claude Cowork" with 3 subfolders:
  - **about-me**: three files. `about-me` (him and his taste), `anti-ai-writing-style` (because he hates sounding like an AI), `my-company` (business info).
  - **claude-output**: where Claude stores its work; you don't touch it.
  - **templates**: saved work templates; you don't touch it.
- Set Global Instructions (Settings > Cowork > Global Instructions) so Cowork always reads `about-me` and leaves the rest alone.
- His earlier free Cowork guide was read by over 3 million people, and he offers to DM his files to commenters.

## The Cowork problem: markdown files are unfriendly to non-developers

- Cowork runs on `.md` text files, but non-developers have never managed them.
- Double-clicking opens a geeky editor full of hashtags and asterisks that "looks like coding", so people rarely edit the files and close them.
- Ruben's diagnosis: this is why most people never try Cowork ("too much work to set up").
- What he wanted: something as easy as a Google Doc that saves automatically. He tested 6 tools over two weeks and picked one.

## Obsidian as the interface for Claude's "brain"

- Obsidian is a free app that opens a folder as a "vault" and renders it like a clean knowledge base: formatted files, sidebar navigation, search across everything, in-place editing that writes to your actual folder.
- Setup is two steps: download from obsidian.md (works on Mac, Windows, Linux), click "Open folder as a vault", and select the Cowork folder. No import, conversion or sync.
- Daily workflow:
  1. Open Obsidian to browse, search, read and edit files.
  2. Open Cowork to create work and deliverables.
  3. Both see the same folder, always in sync.
- "Obsidian is where you update your brain → Cowork is where you build."

## Five ways he uses Cowork + Obsidian

1. **Stop prompting.** Demo: he edited the first line of `about-me` to say he eats only coconuts. A new Cowork session on the same folder read the file first and answered accordingly. Edits in Obsidian become the new prompts. When Claude does something he hates, he updates the file with "Remember [this]" or "Replace [this] with [that] always."
2. **Edit context files properly.** Update job title, targets, new tools, or new things he hates from Claude. He calls the last one "usually the best update you can make". Example rule he added: always ask him questions before executing any task, so they outline it first. Then a one-line prompt triggers questions, the anti-AI-writing-style check, and a draft that is "already 80% there".
3. **Finding things.** Obsidian searches everything he and Claude wrote. He says "Claude's internal search engine is terrible."
4. **Reading outputs.** Past outputs (e.g. his newsletter on Claude usage limits) are readable in one folder with proper formatting, and new Cowork files appear in Obsidian automatically.
5. **Combining capabilities.** Cowork can produce multi-tab Excel files with formulas and charts, Word docs, PowerPoints with speaker notes, PDFs (fill, merge, split, extract tables), full websites and dashboards, research reports, CSV analysis, scheduled tasks, and use connectors to Slack, Google Drive, Notion, Gmail and 50+ apps.

## Skills: saved workflows for repeated tasks (advanced)

- Problem: weekly tasks (LinkedIn post, newsletter, client brief, specific contract) need the same extra instructions repeated, like "under 1,300 characters" or "single image only". Saying it 30 times is inefficient.
- Skills are one file per task, called with a `/` command (e.g. `/contract`, `/negotiation`).
- Creating one:
  1. Open Cowork, start a new task (he uses Opus 4.6, with the Cowork folder selected).
  2. Prompt: create a skill called "negotiation", interview me about the deals I negotiate daily, build the best negotiation skills based on different experts, and save it as a skill callable with `/negotiation`.
  3. Answer Cowork's questions and click "Always allow" so it can edit.
  4. Claude reviews the skill with examples and benchmarks. Tell it "It's ok now", then click "Save skill".
  5. Type `/nego` and the skill appears.
- He moves the generated skill file from the OUTPUT folder into a new `SKILLS` folder via Obsidian.
- Skills stack with other pieces: Cowork + his folder + `/negotiation` + the Gmail connector so it reads his email.
- To change a skill, edit the text file in Obsidian, then re-upload it into Claude.
- Ideas: `/newsletter`, `/client-brief`, `/sales-email`, `/weekly-report`, `/meeting-notes`.
- He says most people don't need skills.

## Why Obsidian won over six alternatives

- His criteria: free, local on the computer, easy and clean for non-developers.
- Rejected:
  - **Notion**: cloud database, would need re-import every time Cowork updates a file. Good for project management (his team still uses it for the content library), "terrible for this".
  - **Google Docs/Drive**: not `.md`, constant conversion.
  - **Apple Notes**: closed format, can't point at a folder.
  - **VS Code / Cursor**: made for developers; "If I see a code editor, I close the tab."
  - **GitHub**: needs git, commits, pushes.
  - **Typora**: $15 one-time, but one file at a time, no folder-wide sidebar, search or linking.
  - **MarkEdit**: free, Mac only, but one file at a time.
- Obsidian wins because it:
  - reads the existing folder with no import, conversion or sync,
  - is free on one device ($4/month to add a phone),
  - has a clean interface for non-developers,
  - never touches files in a way that breaks Cowork (no hidden metadata or format changes), so `.md` files stay `.md`.
- He states he is not paid, affiliated or sponsored, and likes that Obsidian's CEO Steph Ango says they don't know their user count (no forced accounts, no analytics).

## Distribution and call to action

- He asks readers to block 20 minutes that week to set up Claude ("Acting > Reading") and to share with anyone using Claude who hasn't tried Cowork.
- Distribution note: his newsletter "mostly grows because of your shares", with 1,000+ shares on each free article, which he calls his "north star" and says keeps it free.
- Lead magnets: 100+ infographics (like the Skills recap) given to free subscribers, and his Cowork files via DM to commenters.
- His suggested learning plan: read only the Cowork newsletter and this one, then spend 2 x 20 minutes twice a week.
- Best share channel: colleagues' group chats (Teams or Slack).
