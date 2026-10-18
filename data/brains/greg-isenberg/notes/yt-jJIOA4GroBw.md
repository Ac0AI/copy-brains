## The six-skill stack Greg says stays valuable as AI improves

- Greg's framing: imagine a few years out, when AI can build and write almost anything. He asks which skills still matter and narrows it to six. None needs a fancy degree or connections, and all could be started "this weekend".
- The six skills, in no particular order:
  1. Setting up and managing agents and running local models.
  2. Marketers who build distribution.
  3. Robotics engineers who build hardware, wire in AI and source manufacturing.
  4. Curators who are good at yapping and short-form video.
  5. The builder-distributor.
  6. IRL community builders.
- Each skill gets more valuable as AI improves, not less.
- He says: "pick one and get dangerous. Pick two and you have some leverage. But pick three and you become the kind of person that everyone wants on the team."
- The advantage goes to people who know how the pieces fit together, not to those who know every tool.
- He sees skills as a defense against an uncertain job market: "It is your defense. It is your shield."

## Agent setup, management and local AI: the grown-up version of prompt engineering

- Typing a good prompt into ChatGPT is useful. The next layer is designing a "little AI employee" with context, tools, permissions, memory, a goal, and a way to check its own work before it bothers you.
- Most companies will soon have 10 AI tools, 50 workflows and a pile of half-working automations. Nobody will know how to turn them into an operating system.
- The person who can say "here's a customer support agent, a research agent, a sales follow-up agent, here are the rules, here's what it's allowed to do, here's where it needs approval, here's how we know it's working" becomes very hard to replace.
- Local models matter where privacy, cost (he notes model prices are going up), latency or control matter.
  - Tools he names: Ollama and LM Studio.
  - Running locally teaches what can happen on your own machine, what needs the cloud, what touches private docs and what should stay "behind the wall".
  - Even if local models get smaller, you learn the architecture. You learn which jobs need a giant brain and which just need "a reliable worker that never sleeps".
- First rep: build a daily briefing agent for yourself.
  - Give it three sources: your calendar, a folder of notes and a few saved links.
  - Its job is to say what matters today, what decisions are waiting and what follow-ups you owe.
  - Add one rule: it must show sources and ask for approval before sending anything.
  - This teaches context, retrieval, tool use, permissions and evals. He calls it "basically the shape of every serious agent inside a company".
- Common mistake: building a big all-knowing agent first.
  - Build a small agent, make it very valuable, schedule it, and set a clear success metric.
  - Example metrics: did it save 10 minutes, catch something you'd have missed, or produce something you'd actually use?

## Distribution is not posting: how marketers win when building is easy

- Greg says people confuse distribution with posting. Distribution means knowing where attention already lives, what people are anxious about, and what language they use to describe the problem. You then turn that into trust before asking anyone to buy.
- When anyone can ship a landing page, app or SaaS, "the bottleneck moves to can you make people care". Building demand matters more as building products gets easier.
- The winning marketer is part researcher, storyteller, media operator and community builder. They turn one insight into a tweet, short-form video, YouTube title, newsletter angle, landing page headline, founder story and sales conversation. He sees marketers becoming generalists, because managing agents requires understanding many components.
- First rep, a distribution map:
  1. Pick a niche (examples: dentists using AI, solo consultants, real estate agents, Shopify operators), or the business you're building.
  2. Write down 20 places their attention goes: newsletters, creators, popular Reddit threads, Slack groups, podcasts, events, search terms and tools they already pay for.
  3. Write one painful sentence they'd say out loud. His example: "I know I should follow up with leads faster, but by the time I sit down and do it, half of them are cold."
- Second rep: write 20 hooks for the same idea, mixing curiosity, fear, status, money and "I wish I knew this earlier" hooks.
- Mindset shift: don't ask "how do I promote this?" after the product is built. Ask "what existing desire am I pointing this at?" before you build.
- Take "a lot of shots on net", because some will win and some won't.

## Robotics and hardware: moving from pixels to atoms

- Greg argues software was an incredible business for 20 years, and SaaS, consumer mobile and enterprise apps still have opportunity. But he says "the moat is moving to hardware" and many people are sleeping on it. The last decade rewarded people who moved pixels. The next will reward people who move atoms too. He says he is learning this in real time.
- Robotics used to feel like a PhD-only field, with expensive parts, custom hardware and long timelines. That has changed:
  - Open-source robot learning projects, cheap cameras, low-cost arms, better simulation, multimodal models and community-shared datasets.
  - Hugging Face's LeRobot makes robot learning more accessible. He describes Hugging Face as a database of open-source projects you can download and inject into a robot.
  - Low-cost arm projects such as SO-100 and the SO-101 ecosystem.
  - Smaller vision-language-action models like SmolVLA that let you train and run robot policies without a giant industrial setup.
- The valuable person makes the whole loop work:
  - Put a cheap arm on your desk and mount a camera.
  - Collect demonstrations.
  - Train or fine-tune a model.
  - Make the robot repeat one useful task.
  - Read a supplier listing in China and judge whether it's manufacturable.
- First rep: buy or assemble a low-cost arm, add a cheap camera, and teach it one boring task (sorting three objects, pressing a button, moving something between trays). Document every failure, such as a bad camera angle, changed lighting, a slipping gripper, a small dataset, or a model that falls apart when the object moves 2 inches. He says robotics "teaches humility" quickly, and that humility becomes your expertise.
- Sourcing rep: study how components are sold on Alibaba or a similar marketplace (he says he isn't affiliated). Ask for a sample before talking bulk. Ask for:
  - motor specs and controller board details
  - CAD files, if they exist
  - replacement parts, lead times, minimum order quantity and shipping terms
  - a short video of the part doing the exact thing you need
- The core question is whether it can be made, shipped, repaired and used by a normal person.
- The skill is rare because it sits between worlds. Software people avoid hardware, and hardware people avoid distribution and AI. Someone who connects open-source models, prototyping and manufacturing can build things that "feel like science fiction, but sell like practical tools".

## Curators and yappers: short-form content as a niche business

- Greg says the internet is drowning in information, so the person who makes sense of it in public is valuable. Curation has moved past "five links in a newsletter". It now means saying "here are five products in this niche you'd like" with storytelling.
- The curator watches the timeline (model demos, startup launches, robotics clips, policy changes, pricing updates) and translates it for a niche. The curator says what to learn, what to ignore, what to try this weekend, and what is hype versus useful.
- His claim: you don't need to be super smart or have millions of followers. 50,000 to 100,000 followers in a niche can support an incredible business.
- He says algorithms currently prioritize yapping, because AI slop is filling timelines and people are tired of it. Raw, authentic content stands out. His example format: "Hey, my name is Greg Isenberg and I suffered from XYZ until I found these five products / this story / this person."
- Good yappers feel like "a group chat of a research report": fast, opinionated, useful and a little entertaining.
- First rep, a 7-day curation sprint:
  - Pick a lane (e.g. AI agents for real estate, robotics for small businesses).
  - Every day, find three things and make one short video using the same structure: "I saw this. Most people will think it means this. I think it actually means this. Here's the move."
  - The structure forces a take, which separates curation from forwarding links. Good curators are pro- or anti-something.
- Keep a swipe file or "taste file" of great hooks, analogies, titles, weird use cases, and comments that show what people are confused about. "Curators are only as good as their taste inputs": generic inputs give generic outputs, and weird, specific, high-signal inputs earn trust.

## The builder-distributor: one person closes the whole loop

- Greg calls this possibly the most important skill for founders. Historically one person built (Wozniak) and another sold (Jobs). AI is compressing the split.
- One person can now prototype the product, make the landing page, write the launch thread, record the demo, DM the first 100 users, edit short-form clips and iterate on feedback. They don't wait for handoffs, so nothing gets lost.
- "The loop is the whole game." Build something small, put it in front of people, watch where they get confused, change the product and story, and try again.
- Most people do half of it: they build in private forever, or talk in public forever and never ship.
- He believes the "one-person, one-billion-dollar startup" will be a builder-distributor. His example is Peter, founder of OpenClaw, who builds well and is also a strong marketer and customer support person (Greg notes he doesn't know him personally).
- First rep, a 48-hour loop:
  1. Pick one tiny problem you personally understand.
  2. Build the smallest version with AI. It can be ugly: a script, form, simple web app or automation.
  3. Create 10 pieces of distribution before you feel ready: one demo video, three short clips, three posts, two DMs to people with the problem, and a landing page.
- AI makes building faster, so marketing learning can start earlier. You don't spend 6 months wondering if people want it. You spend a weekend earning a real reaction.
- The loop turns attention into product feedback and feedback into better attention. He ties it to his ACP funnel (audience at the top, convert to community, build a product there), which he calls "the future of building businesses".

## IRL community builders: scarcity shifts to belonging and trust

- As work moves to agents, chats and feeds, real rooms get more valuable. AI makes content, software and advice abundant, so scarcity moves to "belonging, trust, and context": who would answer your text, help you hire, intro you to a customer, or give you the honest version of a market.
- The builder picks the right room and topic, invites the right mix, and creates a ritual. "A great community is actually more like a habit than an event": same time, same kind of people, same promise, better conversations each time.
- He sees hundreds of millions to billions of dollars available for people who create great events. He cites SaaStr (Jason Lemkin) and South by Southwest as large event businesses, and says Lemkin has probably shared massive numbers. He believes people now want smaller, more bespoke events rather than massive ones.
- First rep: host 6 to 8 people around one sharp question, as a dinner, walk, hike or breakfast. Example questions: "What skill are you learning because of AI?", "What are you automating in your company right now?", "What is everything in tech missing?" Invite people who can actually answer it.
- Send a short recap afterward with the best quotes, inside jokes and ideas, and one follow-up for everyone. The recap turns the room into a network, creates memory, gives people a reason to forward it and makes the next invite easier.
- Over time the room becomes a media asset, recruiting asset, deal-flow asset and "a life asset".
- He says the skill pairs with the others: agents for community tools, marketers to grow it, curators to turn conversations into content, builder-distributors to launch products from it, and robotics people to bring demos.
