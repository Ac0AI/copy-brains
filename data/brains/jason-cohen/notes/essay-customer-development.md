## Validate customer problems by iterating written hypotheses, not by pitching

Jason Cohen's customer development method exists to uncover truth about potential customers, not to sell. He has used it for 17 years, and says it led him to reject some startup ideas, pick the idea for WP Engine, and choose the right features in its early years, which led to hyper-growth and a unicorn.

- The most common mistake he sees as an interviewee is the founder spending the hour pitching. A kind interviewee will say "yeah, that sounds pretty good," and the founder has learned nothing.
- His test: "If you don't come away knowing something new and actionable at the end of the interview, you've wasted your time and theirs."
- The mindset should be "What does this person know, that invalidates something I thought was true?" Seeking confirmation means you see confirming evidence, miss disconfirming evidence, and end up believing wrong assumptions, which is worse than wasted time.

## Start with learning goals, and never ask customers what to build

He lists goals first because they drive the interview content. For a B2B product solving an existing pain, his goals are to learn:

1. What the "perfect customer" (PC) looks like.
2. What outcomes PC must deliver in a typical month (Jobs to Be Done).
3. What PC does in a typical day (tools, workflows, loves, dreads).
4. What pain points PC has today.
5. How PC copes today (competition, including DIY).
6. How much PC would pay, and how PC can budget and execute payment.
7. The triggering moment that makes PC decide "today's the day I'm going to buy something" ("no one randomly switches vendors").
8. What makes PC resist or fear buying (habits, anxiety of change, implementation risk and cost).
9. Where PC goes to discover and buy products like this (distribution channels).
10. The exact words PC uses and their tacit assumptions.
11. PC's higher-level goal.

Not on the list: asking the customer what to build, or whether they would buy a specific feature. Jason says this has happened to him dozens of times: he asked "Would you buy if we build ______?", heard "Yes", built it, and they didn't buy. Every seasoned PM has the same story.

He dismisses the Henry Ford "faster horse" quote: a faster horse is often a wonderful product, sometimes you should invent the car, and Ford never said it (the Henry Ford Museum doesn't list it, and it first appears over fifty years after his death). The point stands that you can't decide what to build by asking customers; you learn what their current life is like.

## Write down hypotheses before interviewing

Step 2 is to write your current best guesses, at least one per goal, in the first column of a spreadsheet, one per row, mapped to goals.

- Reason one: research on predictions shows people are more objective when forced to record bets. Otherwise we retcon our beliefs or discard new information (confirmation bias).
- Reason two: hypotheses generate good interview questions.
- Example WP Engine hypotheses from 2009: bloggers with over 100,000 page-views a month struggle with speed; blogs with over 10,000 RSS subscribers have traffic bursts that take sites down; all bloggers worry about being hacked; a blogger with 50,000 page-views per month will pay $50/mo to fix these problems; bloggers need to try software before buying; bloggers call themselves "bloggers" and their site a "blog."
- After dozens of hours of interviews, about half the hypotheses were wrong, the correct ones needed tuning, and new attitudes surfaced that weren't on the list.
- List even the most mundane assumptions. Jason says "We're all wrong, at the beginning," even experts.

## What the WP Engine interviews overturned

- **Security:** Most bloggers would not pay extra for it. Selling security to bloggers is like selling backup software: until you've had a failure, you won't pay $30/mo, and afterward you sign up for any service promising full backup. Mid-sized companies differ, because they run a formal security policy.
- **Free trial:** Bloggers like trials for most software, but moving a site is such a disruption they treat hosting as permanent. "Free migrations" was more compelling than "free trial." WP Engine tried a free trial anyway; conversion was over 90%, and removing the trial didn't reduce signups at all.

## Write open-ended questions, one per hypothesis

Step 3: in the second column, write a question per hypothesis (one question can cover a few related hypotheses). Questions must:

1. Confirm or negate the hypothesis.
2. Not hint at a specific answer.
3. Invite a specific answer.
4. Invite more information, including answers to questions you didn't know to ask.

Leading questions get a polite "yes" and tell you nothing about what visitors will think of your ad, home page or pricing page.

| Hypothesis | Bad question | Good question |
|---|---|---|
| Bloggers call themselves "bloggers" | Do you consider yourself a "blogger?" | When you meet someone new, how do you explain what you do in a few sentences? |
| Serious bloggers publish 4+ times a week | Do you publish often so Google ranks you high? | How often do you publish new content? Why at that rate, what led you to that decision? |
| Some spend thousands on consultants for speed | Would you spend $2000 on a consultant if it made your blog faster? | How valuable is the speed of your website? Have you ever spent money to improve it? If so, how much, what did you do, did it work, were you happy with it? |

On security, the good version was: "Do you ever think about website security? If so, how do you think about that? Do you do anything about it today?"

## Run the interview, iterate, and know when to stop

- Take notes in a third spreadsheet column beside each question. Straying from the script is fine if it teaches something.
- Treat surprise as the signal to dig deeper: "Surprise means you're learning." His trick is to say "Tell me more about that."
- After each interview, check what supported or contradicted each hypothesis. Don't alter hypotheses after just a few interviews unless there's a pattern. Add new hypotheses and questions from new learnings, even if they don't map to a goal.
- Stop when it's boring, meaning surprises have stopped and learning has stopped. Then move to a proof-of-concept, high-fidelity demo, MVP (or SLC), or other method.
- A typical mistake is stopping after three interviews because "I'm not learning anything." He compares it to a marketer testing two AdWords variants and quitting.
- If there are truly no patterns, you may be fishing in the wrong spot: no pain point that more than a few people have and will pay for. Then you need different ideas.

## Segment emergently and discuss price in the interview

**Emergent segmentation.** Customers may cluster, such as marketing departments at large companies thinking about security while independent bloggers almost never do.
- Write hypotheses and questions that determine the segment and ask them at the top of the call.
- Keep a separate hypothesis spreadsheet per segment.
- Then target one, some or all segments with clarity about each.

**Discuss price.** He disagrees with those who say to avoid price in early interviews.
- Price is tied to what the product means to the person, and it determines the company's business model, so it shouldn't be "figured out later."
- In early WP Engine calls, near the end, he floated $50/mo for a faster, more scalable, more secure service with genuinely good support. Reactions were immediate and vehement. One group was shocked at such a high price and would never pay near it. Another said they'd buy only if it were much more expensive, because otherwise it couldn't possibly deliver. These became emergent segments, which told him how to price and for whom.
- Pricing insights were also how he invalidated an earlier startup idea, which made room for WP Engine.
- Pricing questions can be open-ended ("How much would you expect to pay for..."), but he thinks quoting a specific price is an acceptable breach of protocol. A specific number draws a visceral reaction, the same one people will have on your pricing page.
- Tie price to other topics to test real value. For security: "Would you pay extra for a security package that really worked, or do you not really worry about being singled out for getting attacked by a hacker?" Most bloggers said security mattered but admitted they wouldn't pay extra.

## Interview tactics that surface the truth

- **Expect contradictions.** People differ in goals, values, experiences, roles and projects, so data is noisy. Some hypotheses will turn out to reflect variation or no pattern, which is still learning, since it stops false assumptions. Real patterns stand out from the noise, and there may not be much of it, which is "all the more reason to highlight it."
- **Ask for step-by-step usage.** Customers say they have the problem and would buy, then don't. Ask them to describe in painstaking detail how they'd use the product: when they'd open it, how it fits their workflow, which features they'd invoke, how outputs move to other systems. Thinking it through exposes blocking barriers like missing integrations or unconsidered features.
- **Use customers' exact words for positioning.** Discord calls rooms "servers" because founder Jason Citron found kids were setting up servers for audio or chat, so the early pitch was "Get a free server!" even though "we create communities" sounds better to investors. Record the calls and note exact phrases.
- **Ignore "market guru" mode.** Almost every interviewee starts speaking for others ("I wouldn't pay $50/mo, but a lot of people would"). They don't know what everyone else wants, and neither does he, which is why he interviews. Politely thank them, reinterpret "everyone wants X" as "I want X" or discard it, and redirect to their own situation. Successful companies find an untapped aspect of the market (Zappos: human touch wins; Geico: it doesn't matter), and even experts may have missed it.
- **STFU.** "If you're talking, you're not learning." Talk only to clarify, dig deeper, or open a new vein.

## Where AI helps and where it doesn't

Jason says half the value of the exercise is thinking it through yourself. The "aha" moments, such as finding contradictions, realizing you didn't believe something, or seeing which hypotheses are wrong, come from wrestling with the details.

- He advises against using AI for the core thinking.
- Fine uses: cleaning up transcripts so they take less space, double-checking your thinking after you've done it (and maybe suggesting new ideas), and summarizing your own thinking to be pithy and clear.
- Possible but secondary uses he lists: scanning conversations for themes or for evidence contradicting a set of hypotheses.
- He names Rob Fitzpatrick's *The Mom Test* as probably the single best book on this topic and compatible with his method.
