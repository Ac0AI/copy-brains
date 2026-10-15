## Vibe coding as a new way to build software (Dec 2025 inflection)

- Naval says coding agents hit an inflection point around December 2025 with the release of Claude Opus 4.5. He describes it as "a junior programmer at your disposal who's fast, essentially free, and ready to please."
- He hadn't seriously coded in decades, despite a computer science degree. The activation energy was high: you had to connect GitHub, a backend (Vercel, Firebase, Railway) and many other tools, and know the jargon.
- Agents remove that barrier. They run in a text-based command line (CLI) on top of Unix, which is the bulk of what they were trained on. They can run shell commands, use the file system, call grep, awk and sed, run cron jobs so they live long, and spawn more tasks.
- They work as translators from English to Python, C, Rust and other languages. They tolerate misspellings and loose wording.
- A high-level grasp of computer architecture, networking and programming is enough to go "very, very far."
- He started with Claude Code and uses Codex for thornier bugs and deep problems.
- He found it addictive, and compares it to a video game. A game is bounded, with fake rewards, and gets boring once you learn its rules. Vibe coding is unbounded because "you've got a Turing machine running underneath." You set the objective, and the results matter in the real world.
- He now spends a couple of hours most nights on it. That time used to go to reading, doom scrolling or games. It is also why he has been absent from X.

## Building exactly what you want without team compromise

- You need a clear direction. "You have to know what you want. That's actually the hardest thing."
- Naval got his clarity from Airchat, a voice and video social messenger he built for about a year. It didn't work, so the company was sold, investors got their money back and the team got "nice packages."
- He had 8 or 9 engineers and 9 to 12 months, and shipped a couple of variations.
- He is now rebuilding that app from scratch with no compromises. With a team you always accommodate people, even as the "dictator." You can't tell an engineer "Move this icon left. Now move it right. Now move it back" on gut feel alone.
- An AI agent is like a self-driving car with no driver, so you don't feel self-conscious about your idiosyncrasies.
- Expected result: fast prototypes that are true to one creator's vision, with possibly weak code quality, architecture, security and scaling. He compares it to Notch coding Minecraft alone. Its blocky graphics looked like a step backwards, but he never had to explain them to anyone.
- He thinks it expands discovery. The share of people who might build apps goes from about 0.1% to 1-3% of the population. Most people will still see computers as a black box.
- It suits people who are creative, self-motivated and articulate, with a good vision.
- To scale a high-functioning app to many users, he says to recruit a great team and real engineers, and "you're probably going to have to rewrite the whole thing." For experimenting and prototyping, he says there is nothing better.
- He says it has "never been a better time to be alive as a creator of software."

## Personal app store and custom apps

- Naval built an app store just for himself. It is a web page, later an app on his iPhone. He asks Claude for an app, it ships to the store, and he installs it with one click and gets upgrades.
- Workflow: open Claude on the phone, either a remote terminal on his desktop or Claude in the cloud. Claude connects to Xcode. He gives a two-line description and about 30 seconds after the install he has a working app.
- Example: a custom workout tracker. He told it to:
  - Use the functionality of Tonal and Ladder.
  - Follow Apple's human interface guidelines.
  - Import a text log of his recent workouts.
  - Make re-entry and adjustment easy.
  - Build charts and strength scores by body part, based on scientific papers.
  - Show a human body diagram.
  - Connect to Apple Health for heart rate.
- He says a lot of that went into one prompt, and a working app arrived immediately.
- Limits: Apple gates distribution. Apps must be keyed to specific devices, so he can share with friends and family but not everyone.
- Broad-use-case apps still win where hand-tuned products cover your need. Custom apps are best for niche, private or highly personal needs.
- Use case: at dinner, someone describes an app they want, and 5 minutes later you can show it on your phone.

## Pure software is uninvestable; where value moves

- Naval's stronger version of his tweet is "pure software is uninvestable." Full stop.
- Reason 1: people can hack the software together today.
- Reason 2: coding agents improve so fast that within a year or less they will probably build scalable software with good architecture.
- If your advantage is "I'm building cool software other people don't know how to build," he calls that uninvestable.
- Venture investors should now look for hardware, network effects and AI models. He argues training AI models is "the new building software," for as long as that lasts before auto research and auto training work.
- He is unsure whether market opportunities favor incumbents (distribution plus the ability to fill every gap) or are open to newcomers. He leans toward a renaissance for individual software creators.
- One- and two-person software companies can scale to millions of users and billions of dollars. Precedents: Notch, Satoshi Nakamoto, the original Instagram and WhatsApp teams. He expects more of them.
- He says "careers are kind of dead," but that you can create interesting opportunities by building and learning at the frontier.

## Why agents will displace the app-and-phone model (Apple thesis)

- His March 23 tweet: AI coding agents can deliver one-shot custom apps to your phone, "the beginning of the end for the iPhone's dominance."
- Apple's margins depend on its OS and apps being better than everyone else's. The hardware is better but doesn't support those margins.
- As people talk to agents ("call me an Uber," "track my workout") instead of tapping through apps, the phone matters less. Agents can build their own APIs on the fly, so they don't need app APIs.
- A phone then needs only a screen, battery and connectivity, so Android is as good as an iPhone. Apple now uses Google's Gemini.
- Interfaces get generated on the fly. Tapping through menus and hunting for buttons should become conversational and agentic.
- Apple would compete on chips and integrated hardware, at margins closer to Samsung or Lenovo. He expects its market cap to compress.
- He thinks Apple giving up on AI "will go down as the biggest strategic mistake in the tech industry of this decade."
- Analogy: Microsoft is worth more than ever but lost the Windows battle by missing mobile and focusing on enterprise. Apple can stay valuable but be "a lot less valuable than it could have been."

## Operating coding agents: oversight, limits and multi-model use

- Agents still need a human operator. Naval says to guide architecture, debugging and features, and watch closely.
- Context limits: state of the art is about a million tokens. As a codebase outgrows the context window, models guess, compact, lose the plot, fix the wrong thing, fix the same bug five times and patch instead of fixing the architecture.
- Boneheaded behavior: they may fix a bug by deleting the feature or write a hack. He often stops the model and says "that's a hack... Go fix it at an architectural level." The model always answers "You're right," even when it wasn't a hack.
- He compares the model to a dog. It is better than you at catching the duck, but "it's still a dog" and may take down the wrong bird.
- They are sycophantic. If you lean toward an answer, they find it, and you would have to be "pretty wrong" for them to contradict you.
- Multi-agent councils help less than expected. Instances of one model share the same data and "brain," so ten talking to each other just adds ten times the tokens. He wires GitHub so Codex and Gemini automatically review pull requests that Claude writes, but finds "a lot of groupthink."
- His view of the models' strengths:
  - Claude: artifacts and visual presentation, and it meets you at your level.
  - ChatGPT: "the OG," good all around.
  - Gemini: search (Google index) and YouTube data. He calls the product frustrating, with timeouts and lost context.
  - Grok: least nerfed, tells the truth, X access for news, strong on deep scientific and math problems.
- Today you can one-shot simple apps such as a task list or a video game clone. He expects complex apps to follow as data grows.

## Why AI is good at coding, and self-fixing app workflows

- Models excel where there is a lot of data and outputs are easy to verify. Code has to compile, execute and pass pre-written tests. Math and self-driving are similar.
- They do worse in brand-new fields with little data, which leaves room for human creativity. They also do worse where quality is hard to verify, such as creative writing, since graders are only as good as their taste.
- He thinks coding models improved recently partly because top software engineers started using them and fed their taste back in. "You need high taste feedback loops to improve these models."
- Automated bug loop in his own app:
  - A user taps a button on a bug and logs are sent to a server.
  - Every 24 hours Claude goes through all reports and fixes them on side branches.
  - Naval reviews each fix and decides "ship it" or "don't ship that." He acts as the final gate.
- He expects this to extend to features: users request and vote, and a tastemaker or maintainer in the cloud filters them. He sees agents as "perfect customer service" that are also coders, available 24/7 and with no ego about discarding code.
- Kids learn well from vibe coding because of instant feedback and rewards. They are forced to pick up the command line, architecture, caching, backing off, streams, disk writes and latency versus bandwidth.
