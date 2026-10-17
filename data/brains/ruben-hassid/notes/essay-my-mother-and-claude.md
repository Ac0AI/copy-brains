## How Ruben teaches Claude to a non-technical beginner

Ruben taught his mother, a retired pharmacist, "how to Claude". His claim: "If my mom gets Claude, you will." He frames Claude (and any AI) as a guide that works the same across ChatGPT, Gemini or Grok, saying that soon they will be "like picking up sneakers".

- He says Claude is still small: it grew 10x in a year but is about 6x smaller than ChatGPT.
- Most non-technical people see AI as whatever is on their phone (his mom's AI is Gemini on Android).
- He ends the lesson by telling her she doesn't need to open Claude. She is retired. She will use products built on Claude without noticing.

## Explaining what AI is: prediction, not search

Ruben's first correction for beginners is that Claude is not Google. It is closer to a phone predicting the next word.

- He uses the sentence "This is how AI finds the next [...]" and walks through four steps Claude takes to pick the missing word.
- His line: "You are also just predicting the next word very well."
- When asked how it knows which word, he explains in one sentence: it read so many books and internet discussions that it got a good feeling for how sentences are made.
- He admits the training ethics are "Meh". Anthropic trained on millions of single-unit books and then burned them, and got away with it legally. ChatGPT did similar, and new AIs now distill other AIs.
- His takeaway: "technology can't be stopped. It can be contained, regulated, safely deployed - but never stopped."

## Where he sees work going: frontier tech or likability

He argues the world is dividing in two: people extremely good at handling frontier technology like AI, or people so likable that customers keep coming back (his mom's pharmacy).

- He warns that "likable = job" is not guaranteed.
- Example: the French porter, whose job was carrying luggage. Wheels on luggage and easier roads replaced them. "Technology replaced likable people."
- His implication: anyone relying only on likability should get better on the technology side.

## The beginner prompt template

Ruben says a beginner needs only this structure, and promises "you won't need more than this":

- "I need [goal] that I will consider achieved once [success criteria]."
- "I am [context about me, my situation]."
- "If necessary, ask me clarifying questions first."

Worked example: his mom needed a plan to pass her apartment to her four children with minimal tax under French law, normally a costly notary question.

- Goal: a plan to pass her apartment to four children with minimal tax.
- Success criteria: she has the best options under French law.
- Context: age 61, retired, in Paris, 4 children, one apartment, wants to keep living in it after transferring it.
- The clarifying-questions line matters because she feared not saying enough. Claude replied with a form where she clicked options 1-2-3-4 or typed in "Something else".
- He used Wispr Flow, a dictation tool, because she types slowly. She simply talked as she would to her notary.
- Result: in about 10 minutes she had every answer the notary gave her, without the cost.

## Showing the difference from Google: Claude produces the deliverable

Ruben says the moment his mom understood AI was when it produced documents, not just answers.

- Claude wrote a complete strategy document and a pre-filled contract a notary can review, in under 10 minutes and almost for free.
- His framing to her: "Imagine if you started the conversation with the notary having these documents first. Would it be the same price?"
- His principle for expanding someone's view of AI: let them feel how it widens their options. "They are now capable."
- Search and find answers is one step. Then build the strategy and write the contract.

## Handling hallucinations with source restriction

Ruben defines a hallucination as the AI making things up ("The AI hallucinated [something]").

- He cites a paper (arXiv:2608.27167, Aug 2026) finding that AI trusts a fancy-looking chart as real without checking the numbers.
- His fix is a prompt that restricts domains and forces citations: "Answer only from [DOMAINS]. Cite the exact reference and link for every figure. If it's not there, say 'not found'. Don't fill from memory."
- For his mom, the domains were legifrance.gouv.fr and bofip.impots.gouv.fr, official French government sites, with the exact article and link cited for every figure.
- He argues most "AI is bad" takes come from one bad experience or one bad story: hallucinations exist, but you can fix them.
- Privacy: public Claude with private data carries some risk. Business Claude is SOC 2 compliant and can't leak that data, "the same way Microsoft or Google works."

## Turning a result into a product with a simple prompt

Ruben says it is easy to build anything with Claude, so his mom will likely use a Claude-made product without noticing.

- Example: in the same chat, a simple prompt had Claude build a website so any mom in her situation could get the same strategy and contract results, with a share button.
- He then says he uses Claude less like he taught his mom and more through Claude Code.
- He says he is not technical and doesn't code, yet spins up live websites almost every day for any use case from one simple prompt (the prompt itself is behind the paywall).
