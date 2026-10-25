## Garry's G-Stack: coding agents as a software factory

- Garry says he wasn't coding in December 2025, then used Claude Code to write around a million lines of code. He did it in part by recreating a startup he had built twice before in about 5 days.
- He cites Steve Yegge's claim that people using AI coding agents are 10x to 100x more productive, and that engineers at Anthropic are about 1,000x as productive as Googlers were in 2005.
- G-Stack hit 87,000 GitHub stars and G-Brain 13,000, for more than 100,000 total. About 15,000 people use G-Stack daily, with hundreds of thousands of skill invocations.
- His shift in framing: in 2025 AI was a "copilot"; in 2026 it is a "software factory". The factory's job is to fight slop and hallucinations by default.
- Production quality: `plan-eng-review` is the skill he runs about 20 times a day to reach 80-90% test coverage, so he ships code he relies on rather than demo code.
- On lines of code: LOC alone can be a garbage metric. The real tests are whether it works for him, whether it works for customers, and whether people pay. Nothing in the harness tells the model to write more lines; the pressure is toward dense, concise code.
- His personal arc: Posterous (YC 2008) took about $4M, 10 people and 2 years, and sold to Twitter for $20M. He says one person on a $200/month Claude Code Max plan can now build the same software in about 5 days.

## Persona skills and "boil the ocean"

- He found it useful to pull specific personas out of the model's latent space as skills.
- `/office-hours` distills YC office hours. He fed in 3-4 months of transcripts across thousands of conversations, then cut it down about 90%. It asks what the problem is, who the customer is, how you know, and what you are building.
- `plan-ceo-review` asks for the 10x version of the product, the "platonic ideal". Garry's PM background at Palantir and Microsoft shaped this: find the perfect form of the thing, then lay a straight roadmap from where you are to it.
- He rejects the old "don't boil the ocean" reflex: "let's boil the ocean." One person at a terminal can do the work of roughly 500 to 1,000 people, so inherited expectations of what a founder or small team can do are "a thousand X wrong."
- Models haven't caught up. Claude Code will estimate 3 weeks for a plan, and after approval it is done in about an hour.

## Skills, resolvers, and the deterministic vs latent split

- His agentic systems broke when deterministic work (belongs in code) was put in markdown skills, or when judgment work (belongs in the LLM) was put in code.
- Example: seating 8 dinner guests works in latent space with ChatGPT. An 800-person dinner or 6,000-person Startup School does not, because the model hallucinates at that scale. That calls for latent and deterministic parts working together.
- A skill is a runbook: steps any human or agent can follow, possibly with branching, and it can call code.
- OpenClaw and Hermes Agent now let non-technical, process-oriented knowledge work be automated. He mentions Twilio for phone calls and Gemini Live for booking or buying, and says you no longer have to wait for Google to ship the phone-booking demo.
- Code example: OpenClaw kept assuming he was in Greenwich, UK. He wrote a TypeScript `context-now.mjs` with tests and built it in, so time and upcoming items come from code, not the latent space.
- Resolver: Claude Code warns when `CLAUDE.md` is huge (for example 40,000 tokens). The fix is a resolver, a master directory that says "when you write to the change log, load `change-log.md`." Instructions load only when needed. He calls it the core of a really great agent.
- Example: signature checks route to an executive-assistant skill that looks up the brain repo for how to do it, a specific "skill pack".

## Skillify: turning a one-off into a tested skill

- Workflow: get the agent to do a task exactly right once (his example: "save this article"), then tell it `skillify`. He uses it about 20 times a day.
- He says writing the skill and the code is only 2 of roughly 10 steps. The rest:
  - Unit tests for the code.
  - LLM evals for the skill file.
  - An integration test.
  - A resolver trigger in `agents.md`, and a test of it.
  - An LLM-as-judge eval that the trigger is broad enough to fire.
  - `check resolvable`, to keep skills DRY and avoid several skills doing the same thing.
  - An end-to-end smoke test.
  - A schema for where it lives in the memory repo.
- He compares this to the 10-20% of people in finance orgs who do compliance: agentic systems are messy and human-like, so they need the checking.
- Org mapping he draws: skill = an employee with a capability; resolver = the org chart; filing rules = internal process; check resolvable = audit and compliance; trigger eval = performance reviews.
- Planned: a cross-modal eval where Opus, GPT-5.5 and DeepSeek-V4 rate inputs and outputs and feed ratings back to the sub-agent to iterate toward something about 10x better. He quotes a YC founder: Claude Code is "my ADHD CEO" and Codex is "my nearly non-verbal 200 IQ CTO."

## G-Brain: memory for agents

- G-Brain is a three-layer memory system built on Karpathy's knowledge-wiki idea. A plain wiki fell over because it only used grep.
- He added vector search, RRF fusion, backlinks and a typed knowledge graph (graph database).
- Next: an epistemology layer to tell hunches, beliefs held by specific people, and world knowledge apart, so it can spot early contrarian beliefs (his example: someone at Stanford believes X before anyone else, then proves it).
- Before v1 (hoped within weeks) he wants a fully dynamic ontology, since the current schema is built for him. A researcher, journalist or politician would each need a different schema.
- His stance: he is building for himself and open-sourcing it so everyone can. "I am not a guru. I am just an entertainer" (Alan Watts).
- His exhortation: the lecture is useless unless students open their own Hermes or Claude, load G-Brain, try the roughly 40 skills, skillify their own work and release it. Founders should "meta prompt one another."

## The AI-native company: a closed loop

- The AI-native version embeds an agent (Hermes or OpenClaw) in all decision-making. It needs read access to every artifact the company produces: codebase, Discord, recorded meetings.
- Garry says founders still working at "copilot level from last year" won't make it; the new role is the "AI founder", someone living at the edge of the tools.

## Taste, evals, and wedges for new startups

- Shipping code goes to zero cost; what doesn't is taste.
- Startup wedge: pick a painful workflow, go deep with customers, and act as the forward-deployed engineer. Go "undercover": founders of Happy Robot (logistics) and Salient (loan servicing) didn't come from those industries and learned by shadowing or taking jobs.
- Example companies: Salient (voice agents for loan servicing, closed top US banks), Happy Robot (freight agents, Series B, 10x revenue in a year), Reducto (document processing, which improves RAG and memory).
- White space: Anthropic's industry-usage chart shows about 50% penetration in software but wide gaps in back office, finance, data, academics, cybersecurity and customer service. Garry calls it room for hundreds of AI unicorns.
- Growth benchmark: PG's bar was 10% week over week, hit by roughly the top 1% historically. Garry cites the latest YC batches, where on average companies roughly 3x within 3 months. His framing: "first pitch of the first inning."
