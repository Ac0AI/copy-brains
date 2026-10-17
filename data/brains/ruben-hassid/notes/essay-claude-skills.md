## What Claude Skills are and how they differ from prompts, files and Projects

Ruben frames AI use as levels: 1 free ChatGPT, 2 paid ChatGPT + Thinking, 3 paid Claude chat + Opus + Thinking, 4 Claude Premium + Cowork + Opus, 5 a whole team on Claude Teams with Projects. Skills are the next step up.

- A Skill is "a very long context + instructions, living inside the AI", triggered with a slash command (e.g. /brief, /linkedin, /contract-x).
- Skills can be shared with a team and downloaded from libraries.
- Context is "how much the AI knows about you / the task before doing it". Ruben says context matters more than the prompt, and lists three ways to supply it: prompt, files, skills.
- Progression for something like a LinkedIn post: (1) a very long prompt, which needs a prompt library; (2) a long text file uploaded each time (e.g. his voice file); (3) both uploaded once into a Project, where you can start many chats; (4) Skills, which are all of this as a slash command.
- Context files need "read my file first" every time; Projects need you to open the right Project. Skills fire automatically: Claude recognizes the task from what you type and activates the right Skill. "You don't invoke a Skill. It invokes itself."
- Ruben's complaint: Anthropic's own Skills guide (28 pages) is written for developers, so he spent days mastering it for non-coders.

## Building a first Skill with Claude's skill-creator in Cowork

Ruben's step-by-step process, using a LinkedIn Post Skill as the example:

1. Open Claude Cowork, select your folder, use Opus 4.6 + Extended thinking. Type: "Use the skill-creator to help me build a skill for writing LinkedIn posts."
2. Answer the interview. Be specific and honest; pick Claude's premade answers or choose "something else" and write your own (he recommends writing your own). It works like his 100-question taste interview, but captures a process rather than a personality.
3. It generates a correctly named folder (lowercase, hyphens, no spaces) and a SKILL.md with the trigger description plus instructions.
4. Run the evaluation Claude creates ("View the eval results"). Ruben calls this the most important step, the one most people skip out of laziness or lack of time: "Take the time."
5. Save the folder and install: Settings → Capabilities → Skills → Upload, or Customize → Skills → + → Upload a skill. Then "Try in chat". Once installed it works everywhere and teammates can access it.

## makemyskill.com, the free alternative from Ruben's consulting company

- Ruben runs GPC in New York, which speeds AI adoption in large US enterprises (e.g. training teams of at least 100 people). It built the free tool makemyskill.com.
- Flow: describe the skill (the longer the better), click Create Skill, download it, upload it to Claude.
- Difference from the skill-creator: it searches the web before building (useful when you're unsure what the skill should contain) and skips the interview. Faster and more convenient, but with less control.
- Example he shows: a skill that needed research first, tested with Claude connected to Gmail through connectors.
- He pitches GPC for company-wide Claude training (100+ people in the US) and says he reads all his LinkedIn DMs.

## Using Anthropic's pre-built Skills and plugins

- You don't have to build from scratch. On the desktop app: Customize → Personal plugins → Browse plugins (inside the +).
- A plugin is "just a bunch of skills for a task". Click one to download it and you get all its skills to test.

## Seven lesser-known Skills hacks

Ruben says these come from reading Anthropic's guide, other creators' write-ups, and his own testing.

1. **Debugging trick.** If a Skill doesn't fire, ask Claude "When would you use the linkedin-post skill?" It quotes the description back word for word, showing what's missing or vague. "Fastest fix for any broken Skill."
2. **Negative triggers matter more than positive ones.** The "Do NOT use for..." line in the description is more important than "Use when...". It stops the Skill hijacking unrelated conversations. He ties it to his voice file, where "80% of the file is what I'm not."
3. **Skills stack with your voice file.** about-me.md says who you are; the Skill says how to do the job; both fire together. The LinkedIn Skill handles structure, hooks and CTA format; the voice file handles tone.
4. **Build Skills from past conversations.** Past prompts already contain the process. In Cowork: click a chat session → the name's arrow → turn it into a skill.
5. **Skills save tokens.** Claude reads only the 3-line header of each Skill at first; full instructions load only when a task matches, so 30 installed Skills barely touch the context window. Anthropic's data, as he cites it: a task taking 15 messages and 12,000 tokens without a Skill took 2 questions and 6,000 tokens with one.
6. **Laziness workaround.** If Claude skips steps, don't edit the Skill; change the prompt: "Take your time. Quality over speed. Don't skip steps." Anthropic says this works better in the user prompt than in Skill instructions; Ruben tested it and says it works.
7. **Portability.** Anthropic published Skills as an open standard, so the same SKILL.md should transfer to other platforms (Gemini, ChatGPT) if they support it. His point: workflows become portable the way his voice file already works across ChatGPT, Gemini and Grok.

## Where Skills fall short

Ruben lists the limits himself:

- **The description is everything.** A vague description means the Skill never fires, which looks like it's broken. Use the debugging trick.
- **Skills can hijack conversations** if the description is too broad (a LinkedIn Skill firing on a simple question). Fix with negative boundaries such as "Do NOT use for blog articles, newsletters, emails."
- **Still needs editing.** A Skill gives a consistent starting point, "80% there, every time, instead of starting from zero." You still review and push back.
- **Usage still burns fast.** Beyond the efficiency gain in hack 5, Cowork still eats your plan. If you use Cowork daily, he suggests the Max plan ($100/month) and says he's being direct so readers aren't surprised.

## A 30-minute plan to get your first Skill working

- **Minutes 0-5:** Open Cowork, pick your folder, use Opus 4.6 + Extended thinking, and ask the skill-creator to build a skill for your most repeated task (the one you re-explain the most).
- **Minutes 5-15:** Answer the interview with specifics. Useless: "I write reports." Useful: "I write weekly reports that always start with the headline metric, use 3 sections max, and end with next steps as bullet points." Review the generated SKILL.md and request changes.
- **Minutes 15-20:** Save the folder, upload via Settings → Capabilities → Skills, open a new chat, type a request that should trigger it, and compare with your old output.
- **Minutes 20-25:** Test about five phrasings ("Write a LinkedIn post," "Draft a post for LinkedIn," "I need LinkedIn content about X") to confirm it fires. Try 2-3 unrelated requests ("Summarize this document," "Draft an email") to confirm it stays quiet. If off, ask "When would you use this skill?" and fix the description.
- **Minutes 25-30:** Browse Claude's plugins in Cowork (Customize → Personal plugins → +) and test a few more.

## Ruben's stance and audience

- He says he is not a Claude fan and is not paid by Claude or Anthropic; he shares how his own work speeds up with AI and wants to be "the great filter to your AI noise."
- He says 420,000 people read his newsletter twice a week, focused on "the How." Most subscribers came via a trusted person sharing an article, so he asks readers to forward guides to others (here, to anyone who keeps re-explaining the same task to Claude).
