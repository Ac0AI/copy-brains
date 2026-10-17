## Never use tag questions or leading prompts

- Ruben cites a Cornell Tech study (Tapan Parikh, 27 Jul 2026) that tested 45 AIs with one-word changes.
- "\[X\] is the better choice, right?" makes new models disagree with you. "\[X\] is the better choice, maybe?" makes all 45 models agree with you more.
- His conclusion: asking an AI for its opinion is a bad idea, because the answer is biased more by how you ask than by the model's actual view.
- Fix: keep it neutral and avoid yes/no questions. Instead of "Buying is the better choice, maybe?", write "Compare buying and renting for my situation."
- His analogy: don't make a friend answer the way you want them to answer.

## "Step by step" no longer helps; a short role does

- Ruben used to tell everyone to add "Take a deep breath and work on this step by step". That came from the OPRO paper ("Large Language Models as Optimizers", September 2023), which tested Google's PaLM 2-L.
- He says that is outdated: Claude and ChatGPT models are now about 10x more capable, and prompting techniques from that era no longer work.
- He cites an IBM Research paper (Preet, Lin & Patel, 7 May 2026) with 430,738 evaluations across 8 prompting techniques. "Let's think step by step" lost to asking normally.
- The winning combo was the plain question plus a role in a few words, e.g. "…as a reliability engineer". Role prompts ranked on top and chain-of-thought near the bottom.
- Caveat he raises: the paper used "reliability engineer" for every topic (medicine, physics, math), so it is unclear whether picking a well-matched role improves results further.
- Bad pattern: "\[question\] Gather information, devise a plan, answer step by step." Good pattern: "\[question\] . . . as a reliability engineer."

## Don't trust confident AI output; verify every source

- Ruben cites a Microsoft audit by Mark Russinovich (CTO of Microsoft Azure), Siva Kumar and Salem (1 Jul 2026) of 2.6 million references at top AI conferences.
- Finding: 1 in 4 NeurIPS 2025 papers, which had passed expert peer review, contained a hallucinated citation. Reviewers missed it and scored those papers slightly higher.
- The affected-paper rate rose 1.9x since ChatGPT; one paper had 20 hallucinated references.
- His takeaway: if professional reviewers can't catch hallucinated papers, you won't either, so open every link.
- He admits the practical problem ("who in their right mind will open 210 sources") and says he wishes he could trust AI research more.

## Keep prompts to 3 rules maximum

- Ruben cites Meta Superintelligence Labs (Mariya Vasileva, 14 Aug 2026), which tested 15 models, including GPT-5.5, Claude Opus and Gemini Pro, on prompts with 1 to 12 rules. An example of 3 rules: "Exactly 3 paragraphs. Under 150 words. No emojis."
- At 8 rules, models get each individual rule right 41% of the time, but satisfy all 8 at once only 5.7% of the time. The gap between per-rule and all-rules success was 35 percentage points at k=8.
- 12 of the 15 models can't reliably hold more than 3 rules.
- Bad example: one LinkedIn-post prompt stacking about 8 constraints (3 paragraphs, under 150 words, no emojis, required keywords, no competitors, end with a question, grade-6 reading level, voice sample).
- Fix, two runs:
  - First run: write the post with 3 rules: must include "AI-native", "workflow", "ship"; no emojis; end with a question.
  - Second run: "Check your draft against each of these requirements ONE AT A TIME, then revise: 3 paragraphs, under 150 words, grade-6 reading level, no competitor mentions."
- His broader lesson: prompt engineering is about giving a clear goal.

## Goals beat examples in modern prompts

- Ruben cites a study from EPFL, Apple and Mistral AI (Pushkin, Jiang, Lotfi, Sandon, Abbé, 4 Aug 2026) finding that examples in a prompt can hurt modern models.
- Mistral's model scored 74% with the standard examples prompt and 83.8% after the examples were deleted. In his chart, every few-shot configuration sat in the low 70s and zero-shot in the mid 80s.
- Bad prompt: "You are a world-class newsletter strategist", two worked examples, then "Find a plan, and answer step by step: How can I improve my newsletter?"
- Good prompt: state the situation and goal concretely ("My newsletter open rate fell from \[X\]% to \[Y\]% over three months. I send one issue every Tuesday. I did not change the format, the send time, or the subject. What are the most likely causes?") and add "Ask me for the data you need before you answer."
- His summary: "Specifying a goal is the ultimate key to a good prompt."

## How Ruben keeps up with prompt research, and the "One Prompt" template

- Method: he reads new academic papers daily (arxiv.org/list/cs.AI/recent, 100+ new AI papers a day) because model behavior changes fast and older techniques go stale.
- He distills the findings into five rules: never end with "right?", skip "step by step", don't trust confidence, stick to 3 rules max, goals over examples.
- He packaged all five into a single reusable "One Prompt" template, plus a keyboard shortcut so it doesn't need to be copy-pasted each time. The template itself is behind the paywall and not covered in the source.
- Distribution note: the essay is a paid Substack post (Aug 19, 2026). He asks readers to save it (about a 15-minute read), send it to anyone searching for better prompts, and share it, saying the newsletter grows from shares and calling it his "weekly north star".
