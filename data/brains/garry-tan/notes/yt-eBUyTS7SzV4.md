## How Garry builds an AI-native company: skill files as employees, a company brain, and "400X" leverage

**Source:** "Every company should have a Brain", AI Engineer, 2026-07-25 (https://www.youtube.com/watch?v=eBUyTS7SzV4)

## The 400X claim: the leverage is in how you wire the work, not the model

- In 2013, as a YC partner building YC's internal social network, Garry could write about 14 usable logical lines of code a day. Median output in the literature of that era was roughly 15, with some people at 50.
- Today he runs YC full-time, works fewer hours (he has a 5:00 p.m. kid pick-up), and estimates his output at about 400X.
- He stress-tests it himself: assume the agent writes bloated code, assume half is scaffolding, assume he is flattering himself. It is still "8X at the floor and 80X in the middle."
- His key point: "It's not the model." The 2X people and the 100X people use the exact same Claude, with the same weights, context window and API. "The leverage is not in the weights. It's in how you wire the work."
- Evidence from YC: in the Winter 2025 batch, a quarter of companies had code bases that were 95% AI-generated. That batch became the fastest-growing, most profitable in YC history. 94 companies have crossed $100M in revenue from a seed check in YC history.
- He says he can't prove AI-generated code caused the growth. Still, the fastest-growing founders "are not treating AI as auto-complete. They're treating it as a workforce."

## Wiring the work: every agent concept maps to an organization

Garry's core framing is that what we've learned building with agents maps one-to-one onto an organization.

- **A skill file is an employee.** One capability, one job, written clearly enough that someone can execute it.
- **A resolver table is an org chart.** Example: "whenever you need to alter a test, load tests.md." It is what many people build when Claude Code complains their CLAUDE.md context is too big. A task comes in and the resolver decides who handles it.
- **Filing rules are internal process.** They cover whether the resolver is actually working and in compliance.
- **Trigger evals are performance reviews.** Example: a test that checks whether, when you need to alter a test file, tests.md actually gets loaded.
- All of this is markdown files, "and maybe there's some TypeScript in there, too." Organizations that once took a thousand people are now markdown. "We've been building organizations this whole time, but we didn't have a management layer, but now that's what we have."
- Working with Claude Code or Codex is not writing software. "You're hiring, training, and managing a workforce made of markdown."

## What AI-native companies look like (YC examples)

- AI-native companies encode sales, support, ops and finance as skills, which are written procedures their agents execute. They hire engineers to maintain those skills and to do the work the skills can't do yet.
- Garry's example: it will even file your taxes if you have a skill file for it.
- **Emergence** (AI app builder, Summer 2024): public launch to nine figures of ARR in eight months. It was only 15 people when it crossed $15M ARR.
- **Retail** (Winter 2024): $60M with about 40 people.
- He says that revenue per head "did not exist before. Not in software, not in oil, not in railroads, never." These companies are not freaks of nature, just "the first companies built natively on the new physics."
- His bar for a YC batch: every founder doing "a former person's entire year worth of work in a single day." If you aren't, "your competitor is, and they will eat your lunch politely and thank you for it."

## Beyond engineers: YC's own transformation

- The leverage is not only for engineers. At YC, media people, event staff and the finance team are building skill files and cron jobs, many of whom had never opened a terminal.
- One finance team member collapsed about a hundred Excel workbooks into a single app, built with YC's internal OpenClaw and company brain. "She's not a programmer. She's a manager of agents now and everyone at YC now is."
- This is why YC runs at its scale with a staff that "would look like a rounding error at any other comparable firm." The goal is not 400X engineers but "one company that operates at the level of 400X everyone else."

## Latent space vs. deterministic space

Garry says most AI engineering bugs come from computation happening on the wrong side of this split.

- **Latent space (the LLM):** taste, judgment, understanding what a human means by something vague, non-deterministic calls. You steer it with markdown.
- **Deterministic space (code):** what engineers know, such as TypeScript or Elixir/Erlang that agents write.
- **Worked example:** Startup School with 6,000 people. One experiment is to seat 800 at a time so the people on each side of you are the right people to meet. The seat arrangement, a multi-dimensional array of 800 seats, "must not live in the context window." The LLM does the human part of judging who fits; the placement is computed deterministically.
- The human version would be printing 800 pages in a big room for a month. Now it can take about 10 minutes and "a couple hundred dollars worth of tokens," something he says was impossible about six months ago.

## Working memory and the company brain

- Humans hold about seven things at once (Miller's "seven plus or minus two"). Every checklist, org chart and filing cabinet is a prosthetic for that limit, and almost every company is still organized around "the seven-digit brain."
- An agent holds about a million tokens, roughly a thousand pages. He explained it to his 10-year-old as three Harry Potter books open at once, able to find a needle in any and synthesize across all three in seconds.
- But "your company is not three books. Your company is a library": every email, meeting, decision and its reasoning, customer conversation and postmortem. The question is "who decides which three books are open on that desk." That is context engineering.
- A company brain is "the library plus the librarian."
- On "this is just RAG": retrieval is the primitive, the way Postgres is "just B-trees." The hard parts are what gets written into the knowledge wiki, how it is enriched and linked, what is promoted to hot memory versus filed as cold reference, and who arbitrates when two facts disagree. "Retrieval is easy. Being worth retrieving from is the product."

## Garry's own brain (GBrain) and how it behaves

- He builds it in the open as **GBrain**. It is MIT open source, free, and works with any harness, though it "loves" the open client Hermes agent. He describes it as "effectively Postgres for agents": a retrieval layer that decides which three books to load for any task.
- His personal brain is about 220,000 pages, written mostly by his agents from his email, meetings, 20 years of notes and his lived experience.
- Example: when a founder emails him about a crisis, before he finishes reading, the agent has already pulled every prior conversation with that founder, three portfolio companies that hit the same wall, and what worked for them. "That's the difference between an assistant and a colleague."
- He is not trying to make money from it: "the layer should be open the way Linux is open." He hopes someone builds the defining company in this space and says he'd like to fund them at YC.
- He says you don't need his tools: "Open Claw is the Ferrari... but Codex is a really good Honda. It will do 90% of this." The concepts matter, not his repos.

## Brain failure modes and the "skillify it" discipline

- **Failure modes:** a brain nobody curates "becomes a garbage dump with great search." Retrieval surfaces stale facts with total confidence. A bad skill file encodes a bad process forever.
- **The fix is memory plus hygiene:**
  - provenance on every fact
  - contradiction checks when new information collides with old
  - a librarian (human plus agent) whose job is pruning
- Treat the brain like production infrastructure and it compounds. Treat it like a dumping ground and you get "a very confident agent that is wrong in ways nobody can trace."
- **His signature rule: never do one-off work.** When you're happy with an agent's output, "skillify it," turning what you just did into a reusable skill. He has a blog post on X on this (search "skillify it") and a skill file you can load into your own harness.
- "If you have to ask for something twice, you failed." An organization that captures what it learns gets smarter every day; one that doesn't "wakes up every morning with amnesia, no matter how good the model is."
- "Model quality is rented, but if you build your brain, you own that brain."

## What to build now

- **Build an AI-native company, not a company that just uses AI:** a thin team, skill files for everything, the founder still in the code, and a company brain plus personal AI from day one. The library compounds from week one.
- **Greenfield he'd pursue at 25:** "every company on this earth is about to need a brain": the memory layer so you never re-ask what you knew, personal AI that actually knows you, and the librarian that picks the three books.
- **Mindset:** he calls fear about jobs "a failure of imagination" and says "Abundance is not a policy paper, it is shipped software."
- **Example he cites:** a friend whose son has a rare form of epilepsy built a repo of 80,000 markdown files, a company brain for one boy. It pushed him to the edge of what humanity knows about his son's condition, with "no lab, no grant, no permission."
- Closing line: "We can boil the ocean now." Go write the test, ship the skill, and build the brain that makes every company after yours easier to build.
