## Why Garry went back to building, and what he rebuilt

- Garry coded for the first time in about 13 years after a Light Cone episode and Claude Code. He says the experience "awakened my 25-year-old self."
- He started because he wanted to write about issues he cares about, like letting San Francisco middle schoolers take algebra. He built Garry's List (a 501c4, now a C3 and a PAC) so smart people with shared beliefs could organize. He says "bringing together people is so powerful."
- He rebuilt Posterous (blogs by email, his 2008 YC startup, sold to Twitter for about $20M) three times:
  - Original: about $4M, 6-7 people, about 1.5 years.
  - Posthaven: about $100K, 2 people, about 3 months.
  - 2026 version: about $200 (a Claude Code Max account) and about 5 days.
- The 2026 version is a full blog platform plus RAG and agentic retrieval. It crawls the internet recursively, does deep research on any topic, and extracts quotables.
- He claims he went from roughly 2/3 of his time coding in 2013 to about 400x the output, while running YC full-time.

## "Boil the ocean" and token maxing

- Garry's Garry's List newsroom, modeled on what Jake Heller (Casetext) described, does the work of a human researcher for about $5-$10 of Opus calls.
- His rule for agentic design: think about what a human would do with the context. Which book would they pull, what would they search?
- Boil the ocean: don't settle for one source when you can fetch 20, cross-reference them, and feed all of it into the core prompt. He uses Perplexity's API for deep research, X's API, and Grok's API for research on X.
- He argues that "if there is incremental work that makes something more complete, more awesome... you should token max." You "zap the rocks harder" and pay more.
- He thinks every kind of knowledge work can be token maxed. People still supply the agency ("I'm the one who's sitting here caring about algebra").
- He compares token spend to San Francisco rent: it is expensive, but it is more expensive not to pay it. He gave $500 in tokens in a single day as an example of spend a builder should accept if the product is valuable.
- He ties this to the YC maxim: live in the future and build what's missing.

## How G Stack started

- G Stack began as notes in Apple Notes: prompts he kept retyping into Claude Code. He did not plan it as a product. It went viral, with about 200,000 views on the first post.
- The first piece was the plan eng review. Before any work, Claude must make ASCII diagrams of data flows, state machines, dependency graphs, processing pipelines, decision trees, user flows, inputs and outputs, and error messages. Loading that context made the output more complete.
- Review sections cover architecture, code quality, and tests.
- Testing lesson: when he hand-coded he did the minimum. When vibe coding, the code worked for the 80% case but fell over once users touched it. He pushed to 100% test coverage and later concluded that 80-90% is the best practice.
- Office hours skill: simulates a YC conversation. How do you know people want this? Who is it for? What does it do? What is the impact? He still uses it for new products and features.
- CEO plan (first called the "mega plan"), built with meta prompting. It channels Brian Chesky's 10-star experience exercise: go from a 3-star hotel experience up through 6, 7, 8 stars and beyond. It also asks for the 10x check: what is more ambitious and delivers 10x more value for only 2x the effort.
- He describes himself as an "ADHD CEO" who loves potential, and says those two sentences unlock a lot.

## His daily workflow and the QA browser

- He runs Conductor with many parallel agents. He says he dropped 13 PRs in 48 hours by queuing ideas, planning in plan mode with the CEO and eng skills, then approving.
- Bottleneck: about 15 features piled up waiting for him to test them by hand, even after unit, integration, and end-to-end tests passed.
- The Claude in Chrome MCP took 2-3 seconds per turn, too slow for QA. He told Claude to wrap Microsoft's Playwright instead. That became `browse`, a long-lived HTTP daemon with about 70 commands as a CLI.
- The QA skill is `browse` plus a prompt: look at what changed on this branch, and if there is UI or data mutation, test it in the browser. He says it blew his mind: "Mini AGI is already here."
- His plan order: office hours, CEO review, design review if there is UI, developer experience review if developers will use it, eng review, then Codex.

## Using Codex as a second opinion

- A YC alum told him many people prefer Codex. His view: Claude Code is ideal for the ADHD CEO, but Claude models "are not the smartest." For crazier problems you need "the 200 IQ nearly non-verbal CEO."
- The `/codex` skill takes the plan (or the implemented repo), runs Codex from the command line with a prompt to find all problems and bugs, and reports back to Claude Code. He then works through the feedback. He later added `/claude` so Codex users can bring Claude in briefly.
- G Stack leans heavily on ask-user-question. He argues the human must supply understanding of what to build, and he doubts software will be made with the human fully out of the loop. "I never want to be entirely out of the loop."

## Thin harness, fat skills

- The name came from Pete Koomen. Companies keep rebuilding the harness, which is the core loop that takes user input, calls the LLM, and runs tool calls. Garry says to use the best existing harness (such as Claude Code) and spend time on the markdown instead.
- Test for markdown: if you were an event planner writing a checklist for the next person to throw a wedding, what would you write in plain English? That goes in markdown. Real actions, like calling 20 venues, go through deterministic code (for example, a Twilio call).
- Common failure he sees: people put things that belong in markdown into code. Code is brittle and does not understand special cases or who you are. LLMs have latent space and can handle general cases.
- Skill for the engineer: decide how much lives in LLM land and how much in code land. Then unit test each piece, then test the integration. Untested code with real users is "10x worse" than human-written code.
- He says markdown is effectively code compiled differently, and he no longer uses Visual Studio.

## OpenClaw, G Brain, and personal AI

- He compares OpenClaw to a Ferrari: exhilarating, but "you better be a mechanic." It can break down at the worst time and you fix it yourself. Setup took roughly 2-3 hours and $500-$1,000 in tokens and cloud for a technical person. He calls this the Homebrew Computer Club / Apple 1 moment.
- G Brain started when he realized his markdown context repo was only searched with grep, which wasted context. After Karpathy's post on LLM wikis, he used what he learned building Garry's List (vector embeddings, hybrid RRF, chunking) and asked an agent to extract that code. He chose Postgres with pgvector and built a full RAG system for his OpenClaw.
- His split now: about 50-60% of building time is in Claude Code, about half is through OpenClaw, and most of his time is on G Brain.
- Open source: he says "we're entering the golden age of open source." You can point an agent at your own repo and tell it to extract and reuse the proven parts.
- His big prediction: within about a year, everyone will have a personal AI. The choice is owning your data, integrations, and prompts, or living in a corporate-controlled feed. "Will you have control over your own tools or will your tools have control over you?" He says if you don't write your own prompts, you sit "below the API line" for a PM or developer who won't understand your needs.

## Lines of code, and why the 400x claim holds

- He drew criticism for saying he coded at 100x his 2013 rate. After stripping to logical lines of code with a published tool, the figure rose to 400x.
- Agent output was trimmed slightly by the logical-line count. The surprise was that his own 2013 output dropped by about 70%.
- His point: humans can pad lines of code, but an agent isn't optimizing for the metric. It may build the wrong thing if you steer badly, but it isn't padding.
- Per industry literature, a professional engineer's tested, production-ready output is about 30-50 lines a day. He says his own was about 14, part-time.
- He admits he should have explained this earlier instead of trolling. He says the people attacking the metric are the ones with taste and technical skill who would benefit most from trying it: "All someone has to do is believe."
- Caveat he gave: the same model feels different across harnesses. His OpenClaw agent fails on moderately complex programming tasks that Claude Code handles, so he switches back to Claude Code for them.

## Time scarcity and mindset

- Asked whether a full-time CEO job helped, he said his time is scarce, which forced him to automate everything. He called himself "in a crazy rush."
- He frames token maxing as borrowing machine time: "You could have infinite time by borrowing the time from the machines." He says he can be a time billionaire this way, serving YC and builders and the causes he cares about.
- Seeing Boris Cherny say his team writes no code showed him it was possible: "we have the same prompt. We have the same MacBook Pro."
