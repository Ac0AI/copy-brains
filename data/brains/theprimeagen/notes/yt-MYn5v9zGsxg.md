## Pricing a long-running Zig project: why ThePrimeagen sticks with hard tools

(Title corrected below; see sections.)

## Finishing hard projects: maturity over mood

- ThePrimeagen says the key to sticking with Zig for his game builds is "maturity": being able to say no to how he feels in the moment.
- He admits there were times he thought "F Zig" and wanted to go back to his "love language" (Go), but he pushed on because he had decided to do the thing.
- His rule once committed: "I'm just going to finish it. It doesn't matter about how I feel in the moment... that's that."
- He will still change plans when it makes sense. He dropped Vim APM as a first project because it turned out to be one of the hardest to build.
- He sequenced projects by difficulty: the Doom one (1,000 players, one game) went first because it was the easiest, being mostly networking. That gives a base of networking and compression to build on for later projects involving ChatGPT and Twitch chat, which he expects to occupy him for the next six to seven months.

## Hidden knowledge: why a new language starts to feel good

- He describes "hidden knowledge" that appears once you have done something enough, using making eggs as the analogy: after enough eggs you can control crispiness and read the egg by sight.
- Zig has this hidden knowledge too. Once he got going he thought "oh okay, actually I really like this."
- He calls himself roughly a novice, but says he now has a good picture of how to build a few thousand to 10,000 line programs in Zig.
- He now values control over stack versus heap. You can still hurt yourself (returning a reference to something created on the stack gets it ruined), but what first felt like an obstacle becomes something he appreciates.
- Takeaway: push past the early frustration, because the control that annoys you at first is what you later like.

## Solving hard bugs: time in the saddle and printf

- He compares hard problems to learning recursion: it felt very hard once and now feels easy, so problems that feel insurmountable now will feel easy later.
- He notes most things are solvable; truly unsolvable problems (e.g. exact traveling salesman across the US, factorial time) can be approximated instead.
- Netflix story (about 2.5 years before the interview): he built a JavaScript library that took a 30-second mp4, split it into audio and video packets, and looped it through Netflix's real-time video system for performance, bug and simulation testing. The backend was a fake TV software layer written in C, with "raw dogging structs and pointers."
- Bug: after roughly 160,000 frames he got an off-by-one error that took days to find. The cause was "slippage": with about 330 ns lost per frame, nanoseconds sum to microseconds and then milliseconds. Over two days of audio and video, that exceeded a roughly 60 ms audio buffer and broke playback.
- Fix: keep a separate counter strictly for nanoseconds, and each time it sums to a microsecond, add it in and reset.
- Method: print-statement debugging. He built ASCII art of a timeline, megabytes long, and scrolled through it until he saw the offset.
- On debuggers: he uses them only when they make sense (e.g. a simple state problem). Otherwise printf is enough because he knows where the bug starts and ends and which handful of variables are involved. Run it many times and watch the state change.

## Making content: quality, story and not watching numbers

- He turns off viewer counts, sub counts and similar while streaming. When he had 100 viewers he wanted 200, but with 200 today he would feel like he failed, so he avoids looking.
- He recalls hitting 100,000 YouTube subscribers (after about three years) as one of the worst times of his life: "it's flaccid." There is no finish line, so he says make things because you enjoy them and let it out into the world.
- He is skeptical of algorithm optimization and strategic marketing. He argues successful creators mostly "are just good" and that consistency over years wins. Pirate Software is an "overnight success in seven years." Going too fast risks peaking before you are good enough.
- Twitch tracker figures he cited for his own streaming: about 1,600 hours in Science and Tech, 1,500 in software and game development, 400 in Just Chatting, 400 in Fortnite, 250 in Apex.
- His current focus is storytelling: "how do I make me do it better," not "how do I make people like it more." He adopts a conference speaking mentality, imagining presenting to a thousand people.
- He re-records until he feels he did it right and is deliberately slowing down. He does not think content volume is what matters (he cites Michael Reeves).
- He gets nervous that fixating on metrics is toxic. He admits he still glances at numbers.

## Two YouTube channels, two jobs

- The Prime Time channel (article reads and talking through thoughts) is about distributing experience: filtering down life experience, such as a quick moment about impostor syndrome that helps more than a dedicated video on it.
- The ThePrimeagen main channel is for telling a story well and learning how to tell better stories. He has two main-channel videos in progress, with roughly 100 to 200 more hours of programming left before he can tell the story.
- He enjoys both and does not expect one to win out.

## Vim, ergonomics and opinion fights

- He got into Vim after college. His coworker Bard Tabiri challenged him to get good at it, and by the time he hit "f" (find character motion) after learning w, b, d, y and p, "it was over."
- Earlier he mocked Vim users, which he says is why it's easy to nerd-snipe him on it. He now thinks Vim is a vastly superior editing experience.
- He treats programming "like a game" with an infinite skill gap, comparing Vim shortcuts to building 90s in Fortnite. He does complicated macros for the fun of doing it, not for speed ("why would someone climb a mountain").
- He posts deliberately silly tweets (e.g. "Rust is complicated C++, Zig is convenient C, TypeScript is Walmart C, Go is scratch for adults") and enjoys watching people get angry over jokes. His rule: be serious only about thoughtful jokes, not the internet.
- Wrist pain started at 28 with a second kid on the way, at Netflix about a year and a half in. He learned Dvorak first (less finger travel), then moved to a Kinesis Advantage after three friends recommended it.
- Advice: thumb clusters matter most, and he says to avoid flat keyboards. Even a Dactyl or Glove80 is worth it because "by the time you're like 40 a huge percentage of people" get knocked out of the game by wrist pain. Expensive boards beat losing 10 to 20 working years.

## Leaving Netflix for full-time content

- He worked at Netflix for about 10.5 years and had all four of his kids during that time. It was the last thing tying him to his life before being a father.
- He found doing both job and streaming left him "75%" in each, never fully engaged in either.
- Two months in, he says he couldn't be happier and does not expect to regret it. He gets to build what he finds interesting at 100% effort.
