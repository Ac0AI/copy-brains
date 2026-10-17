## Research stack for a thesis: Consensus, Sci-Hub, ChatGPT

Ruben wrote a full 20+ page thesis on "the differences between the EU and US approach to Iran over the last 20 years" to test how fast AI could do it. A friend needed the paper in about two weeks. He used three tools:
- **Consensus**, which he calls the best AI for finding scientific papers.
- **Sci-Hub**, to get the full PDFs.
- **ChatGPT**, to read the PDFs and write the text.

## Sourcing papers with Consensus and Sci-Hub

- Type the research question into Consensus. Each result shows the paper title and the passage that answers the question. Opening a result gives key points, a summary and references.
- Consensus has a new CSV export. Ruben had been scrolling the page by hand before, so the export saves him that work. It includes the DOI, the unique identifier of each paper.
- Paste each DOI into Sci-Hub, which he describes as a piracy site that bypasses paywalls, and download the PDF.
- Splitting the question helps. He ran one query for the EU approach to Iran and one for the US approach over the last 20 years. He ended with 9 usable papers; some DOIs failed.
- If Sci-Hub keeps loading forever, it is most likely down or the paper isn't available. Skip it.
- He treated about 10 papers as enough for a 20-page paper, but said a more serious version would probably need around 30.

## Prompt structure for the first ChatGPT call

- He builds the prompt as role, context, task, then a step-by-step process (chain-of-thought prompting).
- Role and context: "You are a PhD professor", later "from Harvard", writing a paper on the EU vs US approach to Iran. He asks it to respect academic writing style.
- He uploaded all the PDFs in one go. He said ChatGPT is best at handling several PDFs at once and was top of the LMSYS leaderboard at the time.
- Step 1: read all the PDFs and think of a strategy for writing the paper.
- Step 2: build a table of contents with an introduction, a conclusion, two big parts, and two sub-parts per big part. That gives 10 sections.
- He adds "take a deep breath and work step by step" as a small trick to improve chain-of-thought prompting.

## Controlling length

- A 20-page double-spaced paper is about 5,000 words, so about 500 words per section.
- He says language models can't hit an exact word count. Asking for 500 won't give 500.
- His workaround is to ask for a different number and expect the model to land near the target. He asked for about 1,000 words for the introduction and got 1,263.
- He then told it to make the intro half the size and more like a Harvard-style academic paper. He found the first draft didn't read like an actual paper introduction.
- Body sections were requested at 500-700 words and came back around that (one measured 686).
- He checks length with a word counter.

## Section-by-section loop with real citations

1. Paste the full table of contents again and say which section to focus on. Tell it the intro (and earlier sections) are already written.
2. Ask it to first extract all relevant quotes for that section from the uploaded PDFs only. It must not use any other PDF or invent any study.
3. Tell it not to start writing the next section until he says so. He added this after realizing it might jump ahead.
4. Then ask for the section at 500-700 words, using those quotes, in the voice of the Harvard PhD professor.
5. Copy it into a Word document: Times New Roman, about size 11, double spacing. The table of contents stays single-spaced and smaller.

- He verified the citations. He took one quote, opened the PDF, searched with Ctrl+F, and found the exact sentence ("The Bush administration embarked on a military invasion"). The quotes were real.
- The intro and conclusion need no citations.
- He kept a tokenizer open to watch the context window (about 128k tokens). Around section 6 it showed roughly 13k tokens used, so there was plenty of room.

## When ChatGPT drifts, and final result

- By section 9 the model started with the wrong section number and stopped providing sources. He suspected the context window was getting long.
- His fix was to keep restating what is happening and the full table of contents, so ChatGPT knows what to do and what not to do. He re-ran the quote extraction and re-prompted.
- For the conclusion he reminded it of the nine written parts plus the ten-part table of contents. He asked for a final paragraph opening a new perspective the reader hadn't considered.
- Result: 26 double-spaced pages, 7,580 words and about 52,000 characters, built in about 51 minutes. He still needed to add the reference list and should read everything.
- The final paragraph argued that the real issue may be the shared assumption that Iran can be changed by outside pressure or engagement, and that its internal dynamics need more attention.
- He also asked ChatGPT for three distinct hypotheses for the thesis:
  - The EU's multilateral, diplomatic approach is more effective.
  - The divergent strategies reflect something deeper in the Western alliance.
  - Unilateral US withdrawal pushed Iran closer to Russia and China.
- Caveat he gives himself: with more time he might feed the papers one at a time instead of all at once.

## Building a product and the lesson for education

- He sees a SaaS opportunity: connect the Consensus API, the ChatGPT API and Sci-Hub (he doesn't think Sci-Hub has an API), add the user's own material, and produce a 20-page paper in about 30 minutes.
- On top of that you could build an "AI detector" that pretends to detect AI. He says it can't.
- On schools: "this shouldn't be the way we assess students." It is too easy, so evaluation should come from something that originates in the students themselves. He doesn't know exactly what, but it has to be different.
