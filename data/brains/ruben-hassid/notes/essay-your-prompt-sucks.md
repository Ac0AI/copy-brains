## Prompting is thinking: prepare three artifacts before you type

Ruben argues that most bad prompts fail before the first word is typed. "Most people think prompting = typing. But prompting = thinking." The model only knows what you type, so a fuzzy input produces a fuzzy output "every single time."

- He lists three causes of bad prompts: vague descriptions, no definition of what success looks like, and trying to fit everything in one shot.
- He splits LLM requests into two types. Quick requests (a Google-style lookup, finding something in a PDF) don't need a complex prompt, only the right settings. Serious tasks (heavy brainstorming, parsing a legal contract, a multi-step marketing plan, an agency brief) need a specific method.
- His rule: "No, ChatGPT won't help you write better prompts." Asking ChatGPT "Make a prompt for [desired result]" gives a vague, generic prompt.
- He admits that his own Prompt Maker GPT (built about two years earlier) helped create this belief. He says its prompts beat "Write me an email" but still fall short of the method below.
- Before prompting, he prepares three things: a reference, a blueprint, and a success brief.

## Step A: find a reference and convert it to markdown

Ruben starts from a real example of the output he wants, not vague inspiration.

- Find something that makes you say "I want exactly this": a contract, memo, proposal, landing page, email or report.
- Convert it to markdown with a tool like MarkdownDown (or any markdown converter) and save the .md file. He calls markdown a text file made for LLMs like ChatGPT. He also quotes the line "AGI will be a single markdown file."
- Use a Project in ChatGPT when the task repeats with the same desired output (weekly reports, client proposals, team updates). Upload the reference once, and every future prompt starts with that context.
- For a one-time task, upload the file straight into the chat. Repeating task means a Project.

## Step B: reverse-engineer the reference into a blueprint

Ruben uploads the markdown reference and asks the AI to analyze it so it can recreate something similar later. His prompt:

- "Analyze this reference so you can recreate something similar later."
- Ask for a short, actionable blueprint covering what it is, tone, and key patterns, under 100 words total.
- The blueprint should work as instructions: someone who never read the reference could recreate it start to finish. Put everything in a codeblock.
- Save the output. This is the blueprint.

## Step C: fill out a four-question success brief

The success brief is the only part you actually type. It defines what your version must achieve.

- **Type of output + length:** contract, memo, report, proposal, landing page.
- **Recipient's reaction:** what they should think, feel or do after reading.
- **Does NOT sound like:** what to avoid (generic AI, too casual, too legal, jargon-heavy).
- **Success means:** they sign, approve, reply or take action.

His examples:
- C-level briefing: executive summary, 1 page max; reaction "I understand the situation and know what to decide"; not jargon-heavy consultant speak; success is a decision in the meeting with no follow-up questions.
- Legal contract review: contract risk summary, 2 pages; reaction "I know exactly what to negotiate"; not legalese that needs translating; success is the client walking into the negotiation prepared.

## Step 2: "Show, don't tell" by stacking the artifacts into one prompt

Once he has the reference, blueprint and success brief, Ruben assembles them in a fixed order.

1. Upload the reference markdown file first.
2. Write: "I uploaded a reference to what I want to achieve. Here's what makes this reference work:" and paste the blueprint (wrapped between ### markers).
3. Write: "Here's what I need for my version:" and paste the success brief (also wrapped in ###).
4. Close with: "Now that you know all of this information, let's create the plan to complete it step by step in a chat (5 steps maximum). Define the outline, and ask me one question so you can move on to the first step."

The AI gets a concrete example to follow, a breakdown of why it works, a brief defining success, and context about your situation. He contrasts this with "write me something like..." and hoping the AI figures it out. He adds that you shouldn't skip chatting with it afterward.

## Chat is the point: why multi-turn beats one shot

Ruben calls not chatting "the biggest mistake you make when you use AI," regardless of tool (ChatGPT, Gemini, Grok or Claude).

- He explains GPT as Generative Pretraining Transformer, roughly "fancy autocomplete machine that replies, using training data."
- He argues the real revolution on November 30th, 2022 was adding "Chat": the ability to discuss, call out mistakes and steer the conversation.
- He says this conversation is now embedded in the technology: when an AI is "thinking," it is talking to itself, and results are much better (smarter, better at following instructions).
- He cites three papers: "Training language models to follow instructions with human feedback" (arXiv:2203.02155, 2022), "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (arXiv:2201.11903, 2022), and "A Survey on Multi-Turn Interactions with Large Language Models" (arXiv:2504.04717, 2025).
- The goal is to avoid bloating the chat, so he sets strict guidelines (next section).

## Six rules for steering a chat

Ruben's rules for chatting with an AI without bloating the context:

1. **Correct errors immediately and explicitly.** When the model makes a factual or logical error or drifts, call it out directly, e.g. "That's incorrect, X is actually Y because [brief reason]. Fix this and continue." Don't let errors compound across turns.
2. **Keep every message concise.** No long preambles, chit-chat or unnecessary politeness. State the correction (if needed), the next instruction and any required context reference. Long user messages bloat the context window and encourage long AI replies.
3. **Reference prior output precisely.** Quote or point to specific parts instead of repeating information, e.g. "In your previous response, you said [short quote]. Build on that by adding..."
4. **Use directive language.** Phrases like "Respond briefly," "One paragraph only," "Bullet points, no fluff," or "Revise your previous answer to be ≤200 words." He says modern models follow these well.
5. **Steer aggressively toward convergence.** Each turn should push closer to the final output, e.g. "Now produce the final version incorporating all fixes" or "Summarize everything so far into a clean, complete answer." Avoid tangents unless strictly necessary.
6. **Reset when the context feels bloated.** If the conversation passes roughly 8-10 meaningful exchanges, or you see repetition or declining quality, copy the current best output, start a new chat, paste it and continue with "Here is the refined version so far, now improve/finish it by..." This avoids token waste and context decay.

## Distribution mechanics: the cheat sheet and subscriber prompt library

Ruben ends the guide with a lead-magnet offer tied to his newsletter, How to AI.

- He packaged the method into a one-page cheat sheet to bookmark, without the full instructions.
- The cheat sheet sits in his prompt library under a "Cheat Sheet" category, offered as a free gift to people who subscribe to How to AI.
- He cites "230,000 other weekly readers" as the newsletter's size.
- Subscribers who can't find the library link are told to comment under the article, and his team will DM them the link personally.
- He links back to a free companion guide on ChatGPT Projects and settings ("How to better use AI before prompting") for the quick-request case.
