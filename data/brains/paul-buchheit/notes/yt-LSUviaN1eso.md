## Freedom vs. centralization as the frame for AI

- Paul calls AI "the most powerful technology we've ever invented" and says the question is "where does that power go."
- Two directions: centralization (power concentrated in government or a few big tech companies) or freedom (giving capabilities to every individual).
- He thinks centralization is "catastrophic for the human species" because it minimizes individual agency. He wants to move toward a world where everyone effectively has a "200 IQ."
- He treats open source as the litmus test: "freedom of speech is meaningless if I don't have the freedom of thought to even compose the ideas."
- He distrusts central planning: "we're not smart enough" to plan how the world will look. The job is to move in the right direction and give people the right tools.
- He argues doomers have always sided with control and lockdown (population bomb, limits of growth). His framing: "control versus freedom ultimately", and doomers are degrowth and control while he is growth and freedom.

## Why Google didn't win AI, and why startups beat incumbents

- Paul joined Google in June 1999 as a very small startup. He sees Google as always meant to be an AI company: gather the world's data and feed it into a giant AI supercomputer.
- His diagnosis of why Google stalled (as an outside observer who left in 2006):
  - After the move to Alphabet and the founders stepping back, the company focused on protecting the search monopoly.
  - AI threatens the ad model: giving the right answer means fewer clicks on ads.
  - AI also angers regulators, and the models say offensive things.
- Google was internally risk-averse. The chatbot (Lambda) couldn't keep its original name, "human", and the image model "image gen" was prohibited from generating human forms.
- He believes Google would never have launched AI on its own. It only did because OpenAI released ChatGPT, and OpenAI "took a lot of those bullets" first.
- General startup lesson: "the reason startups work a lot of times is because you're competing with a slow company," where big companies have the wrong incentives. "If you were facing an actual formidable competitor you don't have a chance."

## How OpenAI started (and why it looked like a long shot)

- Around 2015, after Google's DeepMind acquisition, YC folks worried AI would end up locked inside Google.
- Sam Altman asked whether to push for AI regulation. Paul argued regulation makes things worse and that it was better to build the AI so they could influence its direction.
- It began as "YC Research", funded by donations from Elon, Paul Graham and Jessica Livingston, and some YC value. Sam recruited the original team, including Greg Brockman and Ilya Sutskever (Paul interviewed Ilya).
- The researcher pitch: your work won't be locked away, it goes out into the world. Paul says this attracted talent, as OpenAI was "the startup version of AI."
- It was far from obvious it would work. Paul points to the lawsuit emails where Elon says they have a "zero percent chance of success."
- The turning point was LLMs. When Sam showed him GPT-2 predicting the next word, Paul saw it as deceptively simple: "if you can predict the next word, you can predict anything," because a prompt is just the setup for a prediction. To do it well, the model must build a model of reality.
- Even if OpenAI vanished, he thinks it has achieved the key part of its mission by bringing AI into public awareness.

## Open source, Meta and who funds it

- Paul is "totally in favor" of open-source models. He is glad Meta is on the right side but says "we shouldn't exclusively rely on them."
- He wants a broader coalition for freedom and open source rather than betting everything on Facebook.
- His fundamental concern is cost: building models is expensive, which is inherently centralizing.
- His mitigations:
  - Secure the legislative right to build and release models.
  - New hardware could be orders of magnitude more efficient.
  - He'd bet that in 10 years the learning algorithms will be far better and more efficient.
- Comparison he draws: the human brain runs on roughly 15 watts.

## Regulation, liability and geopolitics

- On California bill SB 1047: holding model builders personally or criminally liable is "toxic" and a way to exert total control. Nobody would build, and builders would add draconian guardrails.
- He compares this to the lockdown of social media during Covid, where "we weren't allowed to talk about where it came from." His point: "if we can't make sense of the most important thing in the world, then we can't make sense of anything."
- Geopolitics: he wants the AI built in the US. If China has the super AI, "that's not going to be good for us." The worst case is permanent lockdown, because AI could create a totalitarian system "from which escape is impossible."
- Freedom is a competitive advantage: authoritarian systems are "inherently truth denying", so a model there has to lie about things like Tiananmen Square. He likes that xAI's mission is to be "maximally truth seeking."
- Conclusion: "we've actually got to fight for open source AI and keep it open." Developing it in the open, across many perspectives, is "our best shot at the optimistic outcome." He contrasts that with doomers who want it done in a secret government lab ("that's how you get Skynet").

## Is AGI coming, and what happens to work

- Paul believes we are on the path to AGI. The key shift: AI went from a research project where money went in and little came out, to something where "you put in money and you get out more." He compares it to a reaction going critical, or the internet in the mid-90s.
- That creates a flywheel: more investment produces more impressive outcomes, which attracts more investment. He notes electricity supply is now seen as a national security issue.
- He agrees there are missing pieces, but sees progress as incremental, adding one component after another.
- System 2 thinking: today's chat models run as "stream of consciousness", and a human couldn't answer without stopping to think. A next step is giving models time to plan and explore options. Current workflows and chain-of-thought tricks are "a hack for now" that the model will absorb over time.
- His belief: "it all just comes down to patterns", and neural nets are huge pattern recognition and generation engines.
- Prediction from a prior post: by 2033, much of the work done by "Zoom-based" knowledge workers could be transparently replaced. An AI watches a person's camera, audio and keyboard input, learns their patterns, and effectively deepfakes the employee on calls.
- He says the real question is what happens to all those people, so we need longer-term visions of what we're building toward.
- His optimistic scenario: a child making an animated series on par with a Pixar movie, and tools making individuals more capable. He thinks startups will increasingly need no massive team, which fits YC's founding idea that technology lets a couple of kids start a real company.
- Risk he flags: incumbents like UnitedHealth blocking AI-made claim calls. His view is that the best answer for companies is to build better AI, not to rely on locking everything to the big players. Power concentrates by default.

## Building the Google spell corrector (an early data-over-algorithms example)

- Paul built the first "did you mean" feature at Google, started because he's a poor speller and saw in query logs that about a third of queries were misspelled. He called it the easiest quality win ever.
- His first version used an existing spell-check library plus statistical filtering to block idiotic corrections (for example "Turbo Tax" becoming "turbot axe", a fish).
- He then used it as an interview question: roughly 80% of engineers had no idea and 20% gave mediocre answers, but one gave an answer better than his own, so Google hired him.
- That engineer, Noam Shazeer, took Paul's code, and within about two weeks of joining (over Christmas, while Paul was away) invented what became the "did you mean" feature. It could even correct proper nouns like Paul's last name.
- The approach had no dictionary. It was based purely on the web and query logs, predicting the most likely correction. Paul sees this as one of the first widely used AI products.
- Shazeer later became a key author of the "Attention Is All You Need" paper and then started Character.AI.
- Lesson he draws: with enough data (a copy of the web plus billions of queries), the data path beats endlessly iterating on small algorithms.
