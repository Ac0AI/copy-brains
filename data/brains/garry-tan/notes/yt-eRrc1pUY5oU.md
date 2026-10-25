## Personal AGI is general intelligence for one person, not a god in a data center

Garry rejects the "AGI as a singular event" framing. He argues AGI is arriving diffused, as "your agent running on your context doing your work," which he calls personal AGI. He separates it from rented products:
- A $20/month chatbot, better autocomplete, or a calendar-only assistant is "a subscription you rent." It resets when you close the tab, knows what everyone knows, and gets "a lobotomy on someone else's schedule" when the company pivots.
- Personal AGI is an agent on your infrastructure, reading memory you own, running procedures you wrote, and compounding.
- Corporate AI improves only when the company ships. Personal AGI improves every day because it knows more of your life. One is "a product you consume," the other "an asset you build."
- He believes intelligence of this kind should be "owned by you, not rented."

## The equation for the next decade: rented model + owned context + harness

Garry's formula: a frontier model (rented, a commodity, cheaper every quarter) plus your context (owned, unique) plus a harness that wires them together (OpenClaw, Hermes Agent, Claude Code, or Codex). The result is an agent that acts like "a very fast version of you."
- "Model quality is rented but your brain is owned."
- 2x people and 100x people use the same Claude, with the same weights, context window and API. The leverage is in what context you give it, how relevant it is, and whether it arrives at the right step.
- Paul Graham's "make something people want" and "do things that don't scale" still govern. Agents are how one founder now does unscalable things at scale.

## Personal output multipliers and portfolio evidence

- In 2013, as a YC partner building Bookface at night, Garry shipped about 14 useful lines of code a day. Today he runs YC full-time, with a 5:00 kid pickup, and estimates about 400x his 2013 output.
- Under a pathological verbosity penalty (assume bloated code, half scaffolding, self-flattery) it is still "8x at the absolute floor" and roughly 10x that in the middle of the range.
- He says the multiplier applies to design, product management, growth and every knowledge-work area, not just code.
- In YC's Winter 25 batch, a quarter of companies had code bases that were 95% AI generated. They use agents for everything, and the batch is on track to be one of the fastest growing and most profitable in YC history. He admits he cannot prove causation.
- Revenue per person: Emergent (Summer 24) went from public launch to nine figures of revenue in eight months and was 15 people at $15M annualized. Retail (Winter 24) hit $60M annualized with about 40 people.
- His claim: the fastest growing founders "are not treating AI as autocomplete. They are treating it as a workforce."

## GBrain: the library plus the librarian

Humans hold about seven things in working memory, and every checklist, org chart and standup is a prosthetic for that limit. An agent holds about a million tokens (roughly 1,000 pages). The real question is what decides which three books are open on the desk.
- Garry's personal OpenClaw has a Karpathy-style knowledge wiki of about 220,000 markdown pages: 25 years of his life, including email, meetings, notes, photos, drafts and mistakes, compiled and curated mostly by agents.
- Example: when a founder emails about a crisis, the agent has already pulled every prior conversation with that founder and three portfolio companies that hit the same wall, with what worked.
- A typical day: overnight inbox processing (not sorting), triage using context on who the sender is and what they are really asking, a morning briefing, pre-meeting prep docs, and finished research.
- GBrain is free and open source, with a hosted version at gbrain.io. Coding framework GStack has 123,000 GitHub stars, in the top 100 open source projects in GitHub history.
- It started as "a folder," a few markdown files about companies and people. "Nobody builds the warehouse first. First, you build one shelf."

## Fat skills, thin harness: markdown is code

Skill files are pages of English. His example: when a Circle Back meeting recording lands, transcribe with speaker labels, extract commitments, owners and deadlines, cross-check named people against the library, file summary and transcript, and flag (don't override) contradictions.
- Test: "If a smart intern could follow it, an agent can run it." He says "Markdown is actually code... The compiler is a language model."
- A skill file is an employee; a resolver is an org chart. You can run "an organization of one plus your agents" before incorporating.
- At YC, media, events and finance staff who never open a terminal build skill files and scheduled jobs. One finance person compiled about 100 Excel workbooks into a single app with an internal agent.
- Latent vs deterministic: judgment and taste belong in latent space (steered by markdown); arithmetic, SQL and scheduling belong in deterministic code. Seating five people is latent; building custom schedules for 6,000 conference attendees needs markdown files calling code and a SQL database. "The model fails where we fail."
- Compendium skill example: five days before the talk, his agent bought three Spinoza biographies (about 1,500 pages), then produced a dated chronology, points of biographer disagreement, verbatim quotes with chapter citations, and the 10 most tellable moments ranked with delivery notes.

## Five steps to start, and the 90-day curve

1. Tonight: pick a harness and run an agent on your own machine. Ferrari is OpenClaw/Hermes with GBrain; "the Honda is really good, too" (Codex, Claude Code). "The concepts are the point."
2. This weekend: start a library as one folder of markdown. Export notes and email, write one page per project and person (what you build together, what they care about, what you owe them, what they said last time). Unindexed inbox history is "your moat just lying there."
3. Write your first skill file for the task you hate most each week. Explain it in plain English, let it get it wrong, correct every exception.
4. Make it a recurring job (for example every morning at 7, or every Friday). Waking to finished work shifts "the day stops being the unit of work."
5. Never do one-off work. After each task, ask the agent to "skillify" it (a skill in GBrain). "If you have to ask for something twice, you failed."

Expected curve: week 1 is a toy; week 4 the flywheel catches; week 12 the library "answers before you finish asking," with a dozen skills and a tool others want to borrow, "which in this room is called a startup." Most quit in week two. He warns that a brain nobody curates is "a garbage dump with great search," so use provenance on every fact, contradiction checks, and a librarian whose job is pruning.

## Own your skills, or your job becomes a skill file

- Fictional Maya teaches her agents 40 skills over two years. If the files live in her repo, they go with her and she compounds. If they live in the company's repo, she leaves with nothing: "She didn't have a career. She had an extraction."
- His doctrine: "skill files are yours. Own your skills because if you don't, your job becomes a skill file." Keep brain and skills in a repo you control from day one, before any platform or acquirer has an opinion.
- Any comfortable arrangement where your judgment compounds in someone else's repo is "a thousand gilders a year." He ties this to starting a startup. "Entire startups these days will be markdown files."
- Software no longer needs to be precious: build a tool for an audience of one in a weekend. Scratch your own itch because "scratching itches is nearly free"; tools others beg for may be companies.

## Answers to three objections, and why he open sources everything

- Models will make harnesses obsolete: as models improve, the differentiator moves to context. "The weights are everyone's. The library is yours." Each release is "a free upgrade to a workforce I already own."
- Is it just RAG: "Postgres is just B-trees." Retrieval is the primitive; the product is what gets written down, enriched and linked, hot vs cold memory, and arbitrating conflicting facts. "Being worth retrieving from is the product."
- Privacy: his brain runs on his own infra, repo and keys. The default is a life already scattered across 10 clouds. "Custody is the security model."
- Open sourcing: he can because YC means he need not monetize infrastructure, but his belief is that "tools of the powerful should be given away." Private leverage creates "a priesthood"; giving it away creates "a renaissance."
- Expect backlash: "First, they quote tweet you, then they clone you." He notes loud critics of agent-written code are shipping agents too.
- Example: a friend built an 80,000-markdown-file brain for his son's rare epilepsy. "Nobody is coming to build yours for you."
