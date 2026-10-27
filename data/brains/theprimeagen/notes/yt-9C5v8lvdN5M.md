## Strong opinions on React, TypeScript, and Bun

- ThePrimeagen says "react is the new Java": it is the industry standard, but he doesn't see developers genuinely excited about it. Most teams work on 4-6 year old React codebases with classes, mixed-in hooks and `UNSAFE_componentWillUpdate` methods, not greenfield projects.
- On TypeScript, he agrees with Svelte moving to JSDoc. His worry is being "too clever by half" with generics, custom methods and key-specific types, where two tightly coupled trains of logic (types and application code) must change together. JSDoc forces simplicity: you give up some autocomplete but "not shoot yourself in the foot".
- On DHH removing types entirely, he thinks typeless forces you to handle bad inputs at runtime (a number arriving where a string was expected), but no types at all is "probably not in the right direction". He respects the decision. He disliked that existing users were left behind, though someone can ship a `.d.ts` package.
- He labels his own projects (dotfiles, tmux-sessionizer) "public source", not open source: he makes all decisions and has no obligation to make users happy. He says people shouldn't expect open source maintainers to owe them forever, since it is free work and "it's always because of money".

## Bun at 1.0: promising, but not ready

- ThePrimeagen likes Bun but says it is "just not 1.0". He frames the early 1.0 as a venture-capital-driven decision.
- Performance: in his own performance-improvement app, Bun "dominated" Node on the process tick callback mechanism, `setTimeout` runtime interaction and promise handling.
- Compatibility gap: a `setTimeout` of 0 in a loop starves the thread in Bun but not in other JavaScript runtimes, so it is "not feature complete".
- He thinks JavaScriptCore could well be faster than V8, and that Node's 15 years of legacy (2008-2009 onward) brings code that is not as good as newer designs, such as futex-based mutexes not being available on Linux when Node began.
- His bigger selling point for Bun is not speed. One tool installs dependencies, bundles, minifies and runs TypeScript directly, and it makes ES modules and CommonJS just work. He compares this to Cargo and Go.
- He contrasts this with Vite, where adding a dependency can force `"type": "module"` and then break the build ("it fails if you do or fails if you don't"), a problem he says is "30 lines of code" to solve.
- He still uses webpack for projects because ChatGPT generates working configs for it easily. He thinks Bun is "a year off" from real adoption.

## Why he doesn't care about Twitter's ownership or name

- ThePrimeagen says he has "more in life to be upset about" than Twitter/X's name or owner.
- His argument: if you dug into the owners of most companies you use, you wouldn't like what you found, and most people choose to be "blissfully ignorant". He cites a Google executive tied to an overdose death involving a prostitute on a yacht.
- He says nobody has a billion dollars, so nobody knows how they would act. He recounts that a billionaire he knew said the hard part is that you can no longer make real friends because everyone wants something from you.
- He tries not to judge people from a position he has never occupied.

## How he uses social media as a creator

- He is "slowly ramping down" on Twitter: he goes on about twice a day for news, what people are discussing and material for videos. He posts whatever is on top of his head and doesn't chase replies.
- Because he makes statements about tech for a living, he says he must stay careful and up to date. A recent stream drew about 2,700 live viewers; a typical big tech stream is about 100.
- He says Twitter "is not a place for complete takes" and is a place for stream-of-thought. For long-form takes he points people to Twitch and YouTube.
- He now is best known as "ThePrimeTime", his second YouTube channel where he reads articles. Its views now exceed his main channel.
- On the milk meme: it started when MKBHD-style stunts led to him drinking milk on a wake surfboard, hoodie and headphones on. Someone then claimed drinking milk from the gallon is a white-supremacist signal. He says he wanted Tech Twitter to be "more fun" and not full of arguments and belittling.
- He cut milk and artificial sweeteners to lower sugar, calling it an "easy win". He cites a rat study on two generations of heightened anxiety from artificial sweeteners and prefers half-caff coffee and yerba mate.

## Multitasking while coding and streaming

- He compares coding while reading chat to playing an instrument while singing: it feels like two tracks in your head at first, then the instrument becomes lizard-brain automatic.
- He programmed about 80 hours a week from his sophomore year of college until roughly 2016, so when he hears a problem he can see the general steps and "start running".
- His coding goal is "okay" code that gets from A to B. He says building for extensibility has "always been a lie of our industry".
- He sees streaming as a trained skill like any other.

## Split keyboard and typing setup

- He uses a Kinesis Advantage 360 ("Prime 360") with Kailh Pink switches, and says it is the best keyboard on the market.
- He types 100+ WPM and has done so since age 9, and he uses a custom Dvorak layout from his GitHub, adapted so V and forward slash sit together on the laptop layout.
- He says adaptation took "approximately zero seconds", and he spent about 120 hours (60 hours in a week) forcing himself to use it. The only lasting slip was mixing up V and slash, and the thumb cluster felt slow at first.
- He argues the split design prevents wrist twist and torque, and that it feels weird only because of retraining existing muscle memory, like learning a new chord shape.
- He uses Windows only for video and games and dislikes Macs.

## Working at Netflix: Atlas and saving millions in server costs

- Around 2016-2017, Netflix was releasing about 100 originals a year and launching in every country. ThePrimeagen worked on validating which artwork assets were missing across languages, six box-art variants and canvases, a large multiplication matrix.
- Atlas is Netflix's time-oriented gauge/counter metrics database. Memory cost is combinatoric: fields with 2 values each across 3 fields cost 2×2×2 = 8, so extra dimensions like machine location (Us-East, Us-West-1, Us-West-2, EU-West) multiply data several times over.
- He found metrics he says cost "literally millions of dollars a year", and audited all logged metrics for roughly $100 million in spend to cut. He received a mug saying "I saved Netflix thousands of servers and all I got was this lousy mug" from the performance team, although he was not on it.
- He says Netflix employees don't get free Netflix accounts, in his view for process-cost and "people over process" reasons, and he says employees were once given a one-time $120 bonus to buy their own.

## Netflix culture: autonomy and the cloud-gaming triage tool

- ThePrimeagen describes Netflix's culture as "people over process" and "create your own destiny": you decide what to build.
- Story: while Netflix was entering cloud gaming (a few countries, "hundreds of thousands" of users, with about 50 people on it), he skipped his tickets for a week and a half. He pulled data from several sources (real-time databases, offline Hive/big-data stores) into one command-line tool.
- In his next one-on-one, his boss played a game, gave him the UUID, and a few minutes later the tool reported whether the game succeeded, how long it ran, how many video frames and other stats. His boss then made it his full-time job.
- That became about eight months of work on an auto-triage ("autodoo") tool, so anyone could triage a game in about 10 seconds: what happened, why it failed or was good or bad. He says nobody else had joined all those data sources.
- He says he likes the Netflix model because "it's not some corporate BS machine", has less corporate bureaucracy than most, and he intends to stay as long as he can. He wrote only README.md-style docs and never a PRD.

## Why he won't pick another career, and when he'd stop

- He says he can't answer "what would you do if not programming" because he has been programming since age 5 (trying to install a Doom level extension on Windows 3.1). He cites C.S. Lewis on the "intrinsically impossible" question.
- He expects he will quit social media and content long before programming, since he says it drains him like open source maintenance: kind words get read as mean and mean words get cheered.
- Outside tech he is growing berries on his South Dakota land: about 25 raspberry plants, aiming for 20 each of blueberries, raspberries and blackberries plus strawberries.

## Faith, family and the case against pornography

- ThePrimeagen argues against porn on both practical and moral grounds. He notes most porn is tied to sex slavery by creator-reported stats he's heard, says men inundated with it lack a compass for boundaries or dating, and says erectile dysfunction in young men is at its highest ever, "several percent".
- He argues porn differs from regulated prostitution because it is continuous, on-demand and escalating in intensity ("one person, next person").
- He frames it as lower-will versus higher-will: like eating a fourth cookie or too many french fries, you can foresee the pain and choose against it. He says his pure-human argument, without appealing to a higher authority, is that this path doesn't lead to long-term happiness.
- His alternative: love one person and make sex part of that; in long marriage "you slowly become one person". He says if he could redo his younger years he would tell himself "it's not worth it".
- He says his own belief in God and his change of life give him a more absolute morality, but he deliberately tried to argue without appeal to authority.

## Why he talks to young men

- His father died when he was seven, and he says no one gave him guidance on how to live. His mother tried hard to be both parents, but he says a dad speaks into a boy's life differently.
- He says he was suicidal and did meth in his youth, trying to fill a void he thinks everyone has, and that he made every decision himself at 14 "as an idiot".
- His goal is to speak to the 20-25-year-old guy who doesn't know what he's doing: work hard, be respectable, treat women right. He calls himself "the anti-Andrew Tate", a healthy version.
- He says he doesn't aim content at women because he doesn't understand them ("I barely understand my wife") and doesn't want to pretend to.
