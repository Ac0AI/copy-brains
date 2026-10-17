## AI is an average-answer machine (the "70th percentile")

- Ruben argues LLMs "don't know things, they predict." They output the most likely next word, based on everything they were trained on: "every blog post, textbook, Reddit thread, corporate memo, and Medium article ever written."
- The result is the statistical average of human writing on a topic: acceptable to the most people, offends no one, excites no one. He calls this the 70th percentile answer.
- He says this is by design, not a bug. The goal for users is the 95th percentile, which AI will not reach on its own.
- His consequence: using AI to fill a skill gap ("I don't know sales copy / financial modeling / design, AI will do it") is "exactly why you use AI wrong."

## The confidence trap

- The more confident AI sounds, the more suspicious one should be. Real expertise is messy: a great strategist says "it depends," asks clarifying questions, flags exceptions, and tells you when it didn't work. "That mess is the expertise."
- AI gives clean, confident, structured answers (headers, bullets, authoritative tone). Non-experts mistake "legibility for quality" and confidence for competence.
- Experts spot it immediately: it feels like someone who read a lot of books but never did the work. "Too clean. Too confident. Too agreeable."
- His line: "AI has consensus. And consensus is just another word for average."

## What expertise actually is (four things AI lacks)

Ruben says "expertise isn't knowledge," it is a set of capabilities built over years:

1. **Taste:** you feel wrongness before you can name it (a designer senses off spacing, a writer senses a clunky sentence). This is pattern recognition from thousands of reps. AI has seen more examples but has no visceral response to quality. "That feeling is the asset."
2. **Scars:** constraints learned the hard way. His examples:
   - "Never present strategy without a 'what kills this' section" (blindsided in a board meeting).
   - "Never commit to a timeline without 40% buffer" (shipped late three times, lost a client).
   - "Never use jargon in the first paragraph."
   - "Never design without knowing how it fails."
3. **Knowing where the danger is:** consultants know the real risk is internal politics, designers know it's the edge case (a 47-character name), writers know it's the wrong frame, executives know it's second-order effects. AI gives the textbook path and misses the landmines.
4. **Knowing what your audience won't say:** their unspoken fears, objections they won't raise, what they tried before and why it failed. AI knows generic "marketers" or "executives"; you know your specific ones.

His conclusion: give AI your expertise as context. You are not hoping it will "act like an expert"; you ask it to draft while you steer.

## Build a reusable context file (2-3 hours, once)

Ruben's five-step process, run in one chat (he recommends Claude Cowork with Opus 4.5 for the extraction):

1. **Upload what you love:** 5 examples of excellent work (yours or others'): PDFs, screenshots, links, pasted text.
2. **Extract patterns:** ask the AI to analyze why each example works and write each pattern as a rule starting with "Always" or "Never."
3. **Add your scars:** have the AI interview you one question at a time: what you never/always do, where you were burned, mistakes you see others make.
4. **Add your audience:** same interview format: who they are, what they tried, what they fear, what they won't say aloud, what builds or breaks trust.
5. **Export:** compile into one file with four headings: STANDARDS, CONSTRAINTS, LANDMINES, AUDIENCE. Paste into a Google Doc, download as markdown.

## How to use the file on each task

- Upload the markdown file at the start of a chat, then prompt simply: read it fully, list the 3 rules from the file that matter most for this task, and give an execution plan before writing anything.
- Then instruct: do the task, follow the file strictly, and "if you're about to break one of my rules, stop and tell me."
- He says the file is reusable "for months." Most people skip the follow-up steering, which he treats as the key step.

## The steering wheel: the 95/5 split

- AI's first draft will be about 60% there, and he says that is fine: an expert can see exactly what's wrong.
- Each redirect takes ~30 seconds. His examples:
  - "Paragraph 2 is too generic. Make it specific to B2B SaaS."
  - "You missed the risks. Add a section on what could go wrong."
  - "This sounds like a textbook. Make it sound like someone who's actually done this."
  - "Wrong angle. They don't care about features. They care about not looking stupid in front of their board."
- Non-obvious steering prompts: "What did you leave out?", "Argue against this.", "Write this for someone who's seen this advice 100 times.", "What's the uncomfortable truth you're avoiding?", "What context would change this completely?", "Now give me the 20% that will yield 80% of the results."
- The formula:
  1. AI writes v1 using your context file.
  2. You name what's wrong (your taste).
  3. AI rewrites from your direction (60% to 95%).
  4. You write the final 5%, the parts only you can write (your voice).
- "AI does the prep. You do the surgery."

## The shift: use AI for strengths, not gaps

- Flip the default from "I don't know X, so AI will figure it out" to "I know X deeply, so AI will help me move faster while I steer."
- Reason: on things you're bad at, you can't tell when the AI is wrong. On things you're great at, you catch every mistake and push it further than it would go alone.
- His TL;DR: build the context file once (standards, scars, landmines, audience), upload it before every task, steer with follow-ups, write the final 5%. He claims this puts you in the top 1% of AI users.
- To go from top 1% to top 0.1%: join a community of obsessed AI users (he mentions his Slack with 900 professionals), play with AI the way you learned through games as a kid, and use AI for your strengths.
- Closing line: "AI is a mirror. It reflects what you bring. So bring your best."
