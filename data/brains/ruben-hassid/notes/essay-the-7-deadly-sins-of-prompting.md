## Prompts are briefs, not wishes, and Ruben's seven fixes

Ruben's core claim: most ChatGPT prompts fail because they are wishes, not briefs. "Good outputs start with good inputs. Prompting isn't magic; it's a good brief." He says to prompt quicker, not longer, because iteration beats length.

## Sin 1 and 2: No context, vague instructions

**No context.** The model guesses the job, audience and constraints, and guessing multiplies errors. Fix: add role, task scope and constraints.
- Before: "Analyze this."
- After: "You are a product analyst. Analyze the attached transcript for founders from seed to Series A to find the vision outliers. Output a 5-bullet decision memo. Max 180 words."

**Vague instructions.** The prompt never defined success. Fix: define success and acceptance tests.
- Before: "Write about marketing trends."
- After: "Write a 1,000-word brief on the three most important B2B AI marketing trends for Q3 2025. Include one data point per trend with a source and a one-line implication."

## Sin 3 and 4: Treating AI like Google, asking for everything at once

**Treating it like Google.** Asking questions is "level 1". Give directives instead. Fix: turn questions into jobs with deliverables.
- Before: "What are good onboarding ideas?"
- After: "Draft a 5-step onboarding flow for a B2B SaaS. Include the email subjects, timing in days, and one KPI per step."

**Asking for everything at once.** One giant ask hides failures and produces spaghetti outputs. Fix: split into steps and chain the outputs.
- Bad: "Create our GTM plan, website copy, and investor memo."
- Step 1: list the 5 core customer jobs-to-be-done, with a one-line pain each.
- Step 2: using the chosen JTBD 2 and 4, write 5 homepage H1 options of 8 words max each.
- Step 3: expand H1 #3 into a 150-word hero section.

## Sin 5: Not iterating

Ruben's point: "It's a chat. So have a chat with it." The critique-then-revise loop is the key. Example for an article:
1. Ask for 5 potential angles on the topic, aimed at a given audience and niche.
2. Using the chosen angle, ask for 10 SEO-ready titles with one-line summaries.
3. Using the chosen title and one-liner, ask for the article outline.

Each step builds on a choice he made from the previous output, instead of a single "Write the article" request.

## Sin 6 and 7: No format or tone, no examples

**No format or tone.** Models default to generic structure and a bland voice. Fix: force the shape and the voice.
- Before: "Announce the feature."
- After: "Write a LinkedIn post. 220 words. Hook (2 lines), 3 bullets, one CTA. Tone: direct and practical, no buzzwords, plain English."
- Side note: for LinkedIn posts specifically, he would use easygen instead of ChatGPT.

**No examples.** "Examples are how models learn your taste." Fix: add 1-2 gold standards, and optionally one anti-example.
- After: "Model the tone and density on these two snippets [paste]. Avoid this anti-example [paste]. Keep sentence length under 16 words."

## The R-E-X prompt

Ruben says the R-E-X prompt "works 99% of the time". It defines a Role, gives Examples and sets Expectations.
- **Role:** who the model is and the constraints of the job (domain, audience, risk tolerance).
- **Examples:** paste one or two gold outputs to imitate, with a short note on why they work. Optional anti-example.
- **Expectations:** format, length, tone, banned words, a scoring rubric and the iteration loop.

Checklist: write the Role line, paste the Examples, set Expectations (format, word range, tone, rubric, loop).

His worked example is a marketing analyst prompt:
- Role: senior marketing analyst for non-technical leadership, plain English, no hype.
- Example to imitate: "CTR 1.8% vs 1.2% (+0.6pp). CPC $2.45 vs $3.10 (−21%). So what: shift budget to exact-match."
- Inputs the user pastes: timeframe, channels, metrics, benchmarks. If anything is missing, the model asks one precise question and stops.
- Task: compare against benchmarks and flag any KPI with a gap of 15% or more, better or worse.
- Output order: Summary (max 5 lines plus one "so what"); Comparisons by channel; Findings (5-7 lines with likely cause and H/M/L confidence); Actions (top 3, with impact %, test days, difficulty L/M/H); Notes (methods and data risks).

## Prompt Maker and the shortcut

Ruben built a free custom GPT, Prompt Maker, and says he gets nothing from it. Flow: write a bad prompt, receive a better one.
- His self-critique: it sometimes makes the prompt too long, so he trims it before copying and pasting.
- Shortcut if that feels too long: write a quick, clear prompt, then ask ChatGPT to ask you clarification questions. Answering them forces you to be clearer.
- Closing principle: "the more you prompt, the better you are at it."
