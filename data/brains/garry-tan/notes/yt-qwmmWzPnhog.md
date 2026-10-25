## Coding agents: why Claude Code and Codex feel so fast, and how to use them well

Source: Y Combinator Light Cone, "We're All Addicted To Claude Code" (2026-02-25). Only Garry's views are kept.

## Garry on coming back to coding with Claude Code

- Garry describes his past decade as "manager mode": he used to code like a marathon runner, then stopped.
- After roughly nine days on Claude Code he says it was an "incredible unlock", like a bionic knee that lets him run five times faster.
- He says he can do "five people's worth of work in like a single day", calling it "rocket boosters".
- Part of the thrill is nostalgia: he used to hand-write odd regexes to refactor and understand code. Now the agent does that work.
- He finds it "weird" that CLIs, 20-year-old technology, beat the IDEs that were supposed to be the future.
- He uses it on his own Rails project; it can reach his dev database directly, which the sandboxed approach could not do easily.
- Example: it debugged nested delayed jobs "five levels in", found the bug, and wrote a test so it "never happens again". His reaction: "This is insane."
- He admits he has even let it access his production database to debug a concurrency issue, adding "I'm not sure if I'm supposed to do this".

## Garry's view on tests, debugging and agent memory

- For the first 2 to 3 days of his nine-day stretch he had few or no tests.
- Then he ran a "refactor day" to reach 100% test coverage, and "I just sped up like crazy."
- With strong coverage he rarely has to test manually, and "nothing breaks".
- He links this to prompt engineering at AI companies: test-driven development, where the test cases are your evals (he recalls the Jake Heller episode).
- Debugging story: the agent wrote a comma-delimited string where a priority job queue expected a JSON array, so no jobs ran.
  - He watched it spend about 30 minutes reading thousands of lines of Rails ActiveJob internals before finding the bug.
  - Ten years ago he would have searched for a Stack Overflow thread or a Rails blog post.
- He wonders whether agents need their own "Stack Overflow" for coding agents.
- He is intrigued by a model-generated wiki, "Grokipedia" style, as a way to share fixes across people.
- He warns about Clawbot-style personal agents: "do not give it access to emails", because it is unclear how safe it is and prompt injection is likely.

## Garry on a future of custom software and agent-first data

- Garry imagines software 40 years from now as "entirely personal": instead of one shared codebase, each customer gets a fork they edit by chatting with an agent.
  - His example: every company that signs up for Segment gets its own copy on its own servers.
  - The vendor pushes new features and an agent merges them into each fork.
- He thinks data models and the system of record still need to be consistent and correct.
- He sees an opening for something "agentic first" that generates the data for many custom views while keeping one source of truth.
- He sees the maker schedule changing: code used to need a block of 4+ hours to fill your own context window with class names and functions. Now he can build in short pockets, even "in the meeting".
- Yet he describes his own YC job as largely manager schedule, which now no longer blocks building.

## Garry on distribution in an agent-driven world

- Download-and-run CLI tools win on distribution because you do not need anyone's permission to start.
- Garry notes Netscape Navigator was free for non-commercial use, and the company later tracked IPs to find commercial users and sell licenses. He wonders whether that top-down capture could work again.
- Developers may increasingly let the agent pick their stack. Garry's example: if Claude Code says to use PostHog, they use PostHog.
- He notes Supabase has become the default LLM answer for "how do I set up a backend" because of strong open-source docs, similar to how Stack Overflow won search before.
- He sees auto-bug-fixers (Sentry, New Relic MCP) as a natural fit, since the context sits right in the CLI.

## Garry on how new engineers and founders learn

- His 10-year-old used AI for a writing assignment and produced a phrase "not a turn of a phrase that a 10-year-old is capable of".
- He applies this to the 18 to 22 year olds YC works with: they have not done real management work, such as combing through hundreds of thousands of errors after product-market fit.
- He asks how the next generation learns architecture and operations. Can Claude Code teach it, or will people just "bump your head into it"?
- He argues the best young builders could develop "off the charts taste" because they ship and touch reality ten times as much as the previous generation.
- He relates to the ADHD-style founder with ten half-finished branches: Claude Code "gets you over the line" on everything, with a constant novelty factor that feels like a video game.

## Garry's practices and stance on tooling choices

- He reads what the agent is doing and does not run in skip-permissions mode (his words: "Not I like to read").
- He tried Codex on his Rails project and found it clearly under-served for Rails, which he calls "a vestigial language" that he happened to go deep on 10 years ago.
- His ask to Codex: add syntactic sugar for the top ~15 runtimes, "probably 10 PRs at most".
- His point: there are "far fewer excuses for software that doesn't quite work for a user now than ever".
- On YC itself: "YC has progressed a little bit from a startup. We still act like one though, which is, I think, important."
