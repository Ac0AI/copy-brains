## Ambition, earnestness and the "don't be a lemming" lesson

- Garry's central regret: he chased "what was hot" instead of what he knew. Around 2003 he left web programming right as Web 2.0 and social took off, and chose Windows Mobile because "the next hot thing will be mobile."
- He frames the right question as "what are you interested in? What do you know uniquely?", not "what's hot, what should I work on?"
- He defines earnestness as courage: trust your own direct experience even when a blog post, a tweet, or a smart investor contradicts it. Hence his "don't lar" meme at Startup School.
- He tells his own mistakes publicly and plans to keep doing so: "I'm a little bit doomed to be the first principal storyteller of all the mistakes that I made."
- He calls himself a late bloomer, and says introspecting on mistakes and choosing differently next time is the hope: "I can make mistakes and then I can introspect."

## The Palantir miss and how to read the map vs the territory

- Frat brothers Joe Lonsdale and Stephen Cohen, then interns at Peter Thiel's hedge fund, got Garry flown to dinner with Thiel. Thiel offered a $70K check, which matched his Microsoft pay.
- Garry declined because he "might get promoted to level 60 this year." He now estimates this as a $2-4 billion mistake.
- The pattern he names: he was "working backwards from the map instead of looking down at the territory." Joe and Stephen were among the smartest people he knew, and the universe was telling him to join them.
- The thesis he took from Palantir: the best computer scientists in Palo Alto were building things that DC and three-letter agencies had no access to. "The future is already here. It's not evenly distributed."
- First-principles knowledge works like science: go down into the experiment and talk to first-party people, and you get secret knowledge.
- His takeaway: "Everything that's awesome in my life is kind of a cult." It starts with a truth that flies in the face of orthodoxy. A lone person with a belief is a crazy person; the second person who joins (the Derek Sivers dancing-guy talk) turns it into a party.
- Chris Dixon's test for interesting ideas: can you find the edge? The best ones start as weird toys, and the people behind them were fringe outsiders (Homebrew Computer Club "was not where you were getting laid").

## What YC figured out and why community matters

- He credits Paul Graham, Jessica Livingston, Trevor Blackwell and Robert Morris with seeing that many very smart people lacked access to Silicon Valley, which used to require the right school, the right contacts, and cracking a social scene ("sceners").
- YC's answer was a website, 12 questions (later a one-minute video), and builders on the other end giving a fair shake.
- Today YC has 16 equal partners, all of whom went through YC. About 7,000 people attended Startup School in San Francisco, most for the first time. He calls it "Birthright but for tech."
- Core value he cites: a community where you can be real. At a TechCrunch-style event everyone says "killing it." Founders need someone to call on the day the best customer leaves, the best engineer quits, or a co-founder loses hope.
- Co-founders: everything else equal, having them is net very good, but vibe and agentic coding are shifting this. "Any given person could be 400 of that person from nine months ago."

## Founder ambition in the agent era (what founders should do now)

- The game changed. "Don't chase your success or my success." Founders should be more ambitious than ever.
- SaaS warning: a pure per-seat SaaS product may not exist in 5-10 years. It is fine as a wedge, but in 2026 it must lead to a moat around data, network effects, or something else. Two years ago a 10-20x forward revenue multiple on SaaS was "iron law."
- Code is no longer precious. The new scarce things are agency and taste, and he thinks both are practiced, not innate: "that's how you get better."
- Just use the tools: build trivial things on every model to learn, like arranging a zen rock garden. The output matters less than the practice. He notes few people show their work.
- Origin of gstack: after Boris Cherny's appearance on the Light Cone podcast and friends going back to coding, he started messing around. He turned YC office-hours rhetoric into a markdown file for raising founder ambition, told Claude to "reduce the strength and intensity of this prompt by 90%," then open sourced it. He jokes "we can't give away the crown jewels for free."
- He says to apply to YC only if you are a top-10% Claude Code user, judged by how thoughtful you are about users, product and design.

## Agent loops, skills and token-maxing

- Interesting loops are business loops, where output changes how the business operates.
- Token-max on purpose. Frontier labs constrain cost and compute in their apps, so to go all the way he uses Hermes agent or OpenClaw and loads 800K to 1M tokens per request. At full strength it costs roughly $50-100K a year, but "you basically get to live in 2028." He says founders and CEOs should give themselves permission to do this.
- GBrain: he extracted the agentic RAG part of his Garry's List newsroom repo (garryslist.org, "an agentic newsroom"), including after-the-fact graph generation, and it beat other open-source memory systems. Its purpose is to let the agent know which million tokens to keep in its head for a task.
- The skill loop:
  - Do a task by hand with the agent, iterating until it is right.
  - Have it "skillify" the task into a markdown file plus code plus tests.
  - Put it on a cron.
  - Any later failure is just a bug fix that is then fixed forever.
- "A markdown file is an employee." It does the job the same way every time. He applies this to sales, marketing, support, everything.
- gstack for engineering followed the same loop: QA via a browser tool, a PM skill, an eng manager skill enforcing unit and end-to-end coverage, until all that was left was black-box testing. The work becomes finding bottlenecks and instructing the agent to build software or a markdown file that removes each one.
- Claim: companies can now go from zero to $15M ARR in about four months with two or three people and a few hundred skill files.
- Failure modes at scale: with many markdown files, provenance and conflict management matter. When two facts conflict, provenance tells you which is newer and wins. A cron job should sweep for accuracy.
- Experience helps: 35-45-year-old founders who have "been around the block" (he cites Peter Steinberger) are a megatrend, because they know what to build and now have 400x leverage.

## Running a company through agents (the Brex example)

- Pedro of Brex got Garry into OpenClaw. Brex built and open sourced "Crab Trap," an agent that watches all of OpenClaw's network traffic. That squares the safety issue for a heavily regulated fintech.
- Pedro's agent reads meeting transcripts from direct reports two levels down, including meetings he is not in. It surfaces what is broken, such as a compliance team issue, and he can walk in with the answer.
- Garry's thesis: a classic reason businesses fail is that they get too big to fit in one head. Humans hold about "seven plus or minus two" things; a person plus an agent can effectively hold "three Harry Potter books." The world, including government, is built around human limits and is not ready for agents.
- His expectation: products and services should be 100-1000x better, not just cheaper.
- Org design: the mid-level coordination layer (what PMs did) should be agents, with execs setting direction and individuals deciding execution. He recounts his Windows Mobile days, when he and a PM mentor had to go to the Windows team "with a baseball bat" because bugs were ignored. A cron-run markdown file tracking blockers and dependencies could have replaced that.
- Large orgs like Microsoft can't reorganize this way. "A startup can. And every startup must."
- Toyota production system analogy: let the worker on the line change the line, since they have the most context. He ties this to an agent-facing bug endpoint from Claw Visor (a YC company) where agents file bugs and get a live reply: filed, fix coming next week, here's a workaround. He says AI erases the "API line" (Venkatesh Rao's concept).
- He cautions that the white pill is slowness: companies, government and society move slower than you think, so he expects about 20 years for society to fully absorb AI. Big incumbents have real moats.

## Where computing and consumer AI go next

- The next computer will likely be voice-first with deep memory and context: "watched over by machines of love and grace," a benevolent assistant that knows your hopes, fears and desires. The path runs through computer use, memory, diarization and ingestion.
- Prediction: 2027 will be "the harness wars," a "war for a billion consumers" and a return of the browser wars, once today's frontier-level compute costs about $50-100 in two or three years. Cost is the current constraint.
- He notes he was too early in thinking it was all about to happen right after converting to OpenClaw.
- Consumer AI is underbuilt and zero marginal-cost distribution should unlock new consumer products as model costs fall.

## Civic engagement and San Francisco

- Garry says the case for hope is that US rule of law holds and people in government are mostly earnest. Jury duty in San Francisco showed him an orderly process, and tech is roughly 10-20% of the city, so "we actually have a say."
- What made it personal: a DA ignoring heinous crimes against Asian elders and a school board hostile to Asian-American kids taking algebra in middle school. He benefited from algebra in public middle school in Fremont and says it led to calculus by senior year and Stanford engineering.
- He ties it to a pattern: the same ideologues oppose data centers and housing, and "words have meaning, supply and demand exists, incentives exist."
- His diagnosis: when builders don't speak up and don't hold media accountable, things get deranged. He cites local TV not covering anti-Asian crime. Communities organized, including at farmers markets, to push back.
- His stance: "put your body on it" (Mario Savio), accepting reputational cost as a covenant with fellow citizens.
- Garry's List (garryslist.org) aims to export the San Francisco playbook to LA, New York, Minneapolis, Seattle and other blue cities.
- His advice: act local. Care about housing, crime, treatment and recovery in your own city. "If we fix local, state and national will fix itself."
