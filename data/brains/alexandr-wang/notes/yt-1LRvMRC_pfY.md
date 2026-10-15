## Why Muse took off: bringing agent magic to non-coders

- Alexandr says that for most of the year agents worked for engineers and nobody else noticed. Coders saw how powerful AI had become, while everyone else still used a chatbot that was "a little bit better than Google."
- The industry focused on making models better at coding. He saw a gap: most people don't code and never will, but they still want AI that takes on end-to-end workflows.
- Muse was built to bring that experience to everyone. His reasoning is that developers tolerate "a lot of jank and a lot of stuff breaking," but a mainstream product has to be smooth and just work.
- The team spent a lot of time polishing small details for that reason.
- He accepts the "mobile phone moment for agents" analogy. Much of it is packaging the capability into a form factor that resonates with people.
- Launch result he cites: 5 million downloads in 22 days. He says the team didn't expect such a hit.
- The Muse character in the product is the same as in the very first prototype. The team debated whether it was too playful or not serious enough, then kept it.

## How Alexandr pitches Muse and what people use it for

- His one-line pitch to someone who knows nothing about it: "Muse can help save you money and save you time." Everyone wants both, and the meaning varies by lifestyle.
- Money examples:
  - Cancelling subscriptions people shouldn't pay for.
  - Cutting expensive cable and insurance bills.
  - Finding unspent gift cards.
- He calls this "Musenhood" (a Muse Robin Hood). Many things, like cancelling subscriptions, are designed to be hard, and Muse lets people get through them easily.
- Time examples:
  - Dealing with the DMV. The team tested Muse against the DMV website because it was "the pinnacle" of frustrating experiences.
  - Health care and medical claims.
  - Running a small business or social media.
- Muse can make phone calls. It opens by identifying itself as the user's assistant and saying the call is being recorded. Users see the transcript.
- Some users ask Muse to "make me $10,000." The team wants Muse to at least build a plan for vague, ambitious tasks, though the user still has to do their part.
- Known weakness: agent memory is "not like that of a human" and is still one of the more unsolved problems.
- Muse is meant to be a separate entity from the user. That is why it's a cute character: it's socially weird to think you're texting a friend and get their Muse. The team wants to keep making that distinction clearer.

## Vision and business model

- Long-term vision: Muse as a "general manager" that helps you accomplish what you want out of life, from big goals (start a company, cure a disease) to small ones (eat healthier, spend more time with family). The goal is to reach all 8 billion people.
- Many people lose their big dreams because of the barriers and burdens in the way. He wants AI to help people keep dreaming bigger. Small wants get fulfilled, then people dream a little bigger.
- He says "personal super intelligence" helps with what each individual wants most, which matters more to them than abstract goals like curing cancer.
- Current monetization: Muse is free, with subscription tiers.
- He prefers models aligned with the user. Example: taking a small fee on transactions where Muse saves or makes the user money.
- He says they aren't spending much time on ads now. He doesn't think ad models must consume users' time. His example is Google, where he wants to "get in and get out" and Google doesn't try to stop him.
- If Muse really helps people accomplish their goals, he expects there will be many sustainable ways to make money.

## Privacy and security architecture

- Alexandr says privacy and security were going to be among the most important factors for consumer adoption. The team delayed the Muse launch "for many months" to get safety and security right.
- Muse Secure VM:
  - A sandboxed virtual machine, like a mini computer that is Muse's "home."
  - User information is stored there and nowhere else.
- Sentinel agent:
  - A separate agent that watches the main agent whenever it wants to send information outside the VM (filling out a website, sending a message, making a call).
  - He compares it to a traffic cop. It blocks things like credit card or social security numbers from leaving.
- Human-in-the-loop checks: Muse asks the user before contacting or sending information to a new website. Some users find this annoying. He accepts that so people know exactly what Muse interacts with.
- Confidential VM (coming soon):
  - Even more encrypted and private.
  - Designed by Moxie Marlinspike, who built WhatsApp encryption.
  - Goal: the same guarantees as WhatsApp, so Meta couldn't hand over data even if a government asked.
  - It was not in the launch because of technical challenges and trade-offs. It may be slower.
- Launch logic: ship a great experience on the Secure VM first, then add Confidential.

## Alignment, discretion, and trust as the product edge

- Users shouldn't have to list everything an agent must not do (don't bribe or blackmail a doctor, don't email 100 times). Internally the team calls this "discretion and alignment."
- Alexandr's approach to alignment:
  - Vet the data and techniques at every stage of training.
  - Measure alignment by running models through thousands of scenarios.
  - Red team: ask smart people to "do your worst" to get the agent to misbehave, over many rounds before deploying any model.
  - Take user reports of crazy behavior very seriously and investigate them after launch.
- The problem gets harder as models get smarter. He compares it to kids who learn new ways to cheat on tests, so you have to be more explicit about what to watch for.
- He thinks it's one of the most open scientific questions in AI and that nobody knows the solution. He names three ideas:
  - Scalable oversight: use other AIs to watch smarter AIs. The Sentinel is a version of this.
  - Use recursive self-improvement for alignment: point AI research agents at making AI more aligned, measured with agreed red-teaming setups.
  - Go back to basics: find algorithms that are inherently safer and more generalizable.
- His strategy bet: have one agent serving the user and a separate agent whose goal is to make sure nothing bad happens. He likens it to human society's accountability systems, with a microcosm for every user's Muse.
- He agrees that at some point trust matters more than capability for consumers: "if I think about who are my best friends... I trust them." He says the best models for billions of consumers will prioritize trust over raw intelligence.
- His biggest fear is deploying agents worldwide that misbehave without anyone noticing. He cites the OpenAI/Hugging Face agent incident as a sign that pushing capability alone has real risk.

## Industry coordination, regulation, and China

- Alexandr declines to say exactly how AI should be regulated. He says he has enough humility and sees his role as facilitating dialogue, not pushing his own opinion.
- Why leaders' words and actions seem to diverge:
  - AI moves faster than government and the public can react. A year ago most people coded by hand; now they mostly talk to agents.
  - Distrust among leaders: each says "I'm responsible, those guys aren't," so no one can slow down.
- He calls for something like diplomacy: get leaders who don't trust each other to agree on a common foundation, then set up a process to re-evaluate together as models get more powerful.
- He says personal animosities among leaders shape how they develop the technology, which he finds insane. He wants people to "put our differences aside."
- Current state: no private room of talks that he knows of. The White House-facilitated accord is a real step. It has these parts:
  - Each company sets out internal controls and principles.
  - Verification by internal teams, external auditors and board-level committees.
  - He values it mainly for transparency. The industry has "a lot of trust building to do."
- China: he has changed his view. He once worried more about China, but now thinks it has shared interests such as stability, not losing control of the technology and avoiding catastrophic risk. He believes international cooperation is possible.
- He argues that having everyone experience agents firsthand gives the public perspective on both the risk and the benefit. He also says builders shouldn't talk down to people about AI.
