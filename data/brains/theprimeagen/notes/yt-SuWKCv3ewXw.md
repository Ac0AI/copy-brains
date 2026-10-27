## Why ThePrimeagen turned off GitHub Copilot

- He used Copilot from the beta phase; Nat Friedman, then CEO of GitHub, gave him early access in Vim. About a month and a half before this recording he removed it.
- His view: Copilot is "a very fancy autocomplete", a next-token predictor with no reasoning. It extrapolates the pattern you were already writing, for example a `16bitReader` method after a one-byte reader.
- He had used it while learning Go for about two months. With it off, he realized "I didn't know Go. What I knew is how to use Copilot to write Go." He had been fooling himself about his skill level.
- Side effects he noticed:
  - The "Copilot pause": he would stop typing and wait for it to tell him what to do.
  - He could not write a for loop in Lua because it always autocompleted the syntax.
- His description: it was like filling his coding ability with water and turning the temperature down. His Go stayed frozen at the level he reached when he first picked it up, even though he was getting faster.
- He admits typing more and missing some completions, but is "not willing to go back right now". He calls it a Faustian bargain: you get what you want in the moment and pay for it later.
- He does not claim to know the long-term consequences. He sees the atrophy in himself as a red flag.

## ThePrimeagen's rule of thumb for when to use AI autocomplete

- Training wheels analogy: kids now learn on Striders (pedal-less balance bikes), because balance is the hard skill and pedaling is easy. He treats Copilot like training wheels, which he says are "objectively bad".
- When not to use it: if it produces code that surprises you, or you use it to solve a problem you don't know how to solve.
- It should not be the pilot. In his football analogy, you want to be the kicker, with the tool only setting up the ball and removing boilerplate.
- Productivity argument:
  - People who feel more productive may not be learning anything.
  - It is hard to know whether the "canonical way" an AI gives you is actually good code.
  - You learn that by failing, switching languages and environments, and getting bitten by bad patterns. Using the tool trades that experience for speed.
- Python experience: he spent a lot of time coaxing ChatGPT-4 into writing his Python, and learned nothing. He was only learning to prompt the AI. In hindsight, asking it for step-by-step instructions and writing the code himself would have taken about three hours and paid off many times over.
- He suggests using AI as a research and learning platform, not as the thing that solves the problem for you.

## Why ThePrimeagen thinks AI won't take programmers' jobs soon

- Adoption is slow. The internet started in the 1960s and hit its stride in the 1990s; businesses took about 25 years to really integrate it. Most businesses still have only a minimal website.
- He puts AI in a 10-year business exploration phase. Companies are testing guidelines and consequences, and some have already backed away after overdoing it.
- LLMs are weak at precision:
  - A request like "paint a crab" has millions of acceptable answers.
  - Asking for something exact, such as a perfectly white canvas, how many R's are in "strawberry", or singing exactly one line, makes them fail.
- English is the wrong medium for specifications: "English is just not a precise form of communication". A legal document is a good example of how hard exactness is.
- On programming: "there's no mostly right in programming. This is not horseshoes, this is not hand grenades." Every symbol and identifier has an exact meaning and consequence, so being mostly right compiles terribly.
- Diminishing returns: he compares it to 2003-2005, when CPUs went from about 1.3 to 2 GHz and he expected 10 GHz machines within 10 years, which never happened. He asks whether today's AI is at the start of a growth curve or about to hit a wall, and says nobody knows.
- Jobs he thinks are at risk:
  - Customer service reps who take a flawed input, match it to business requirements and return another flawed response.
  - Pure guessing or screening work, such as scanning backpacks.
- Roles with concrete accountability, such as a doctor reviewing an MRI, still need people.
- His prediction: the most programming jobs in the next 10 years will come from cleaning up the nonsense AI produces.
- He cited a study of public GitHub repos: the time between reworks of the same lines dropped from roughly once every 6 months to once every 2 weeks since AI tools arrived. He notes this could have other causes, such as many new developers.
- He has been bitten by bugs after approving Copilot or ChatGPT code with a casual "looks good to me" instead of writing it himself.

## What ThePrimeagen says to prioritize when learning to program

- Time in the saddle is the biggest predictor of success. Choose the "workout" that makes you come back tomorrow over a perfect plan you quit.
- Build and read widely to find what you like. Examples:
  - Algorithms and data structures courses
  - Networking and HTTP servers
  - Front end, back end and embedded work
  - Thorsten Ball's *Writing An Interpreter In Go*, to see how languages actually run
- Expect a marathon: "I don't believe there is a six-month path to becoming some six-figure job." That was the Covid-era exception and should not be your expectation. Treat your first 10 years as the learning period.
- Craftsmanship matters to him. He wants "the craft for the sake of the craft", not only output. He says output felt more important when he was younger, and now he wants to enjoy the work even on bad days.

## How ThePrimeagen builds things: instinct, craftsmanship and live streaming

- Experienced programmers see the path to a solution without consciously planning every step, like hiking a familiar trail. He says he "rarely, rarely really think[s]".
- Huffman encoding example:
  - He had never built it. He watched a 5-minute YouTube video, then spent about 45 minutes writing hundreds of lines.
  - The encoder worked on the first try, with unit tests passing.
  - The decoder took four tries. A bit shift in the wrong direction was a common mistake.
- Stream game: viewers bet channel points on whether he finishes within 3 runs.
- Current project: a real-time rendering engine in Go that renders ASCII output in the browser using DOM elements.
  - He beat gzip with his Huffman encoding.
  - Next he plans quad trees, on the theory that splitting the screen into regions means each region changes less than the whole screen.
  - The goal is a Twitch chat-plays-Doom setup. Players open a website, and he streams the rendered game to them with about 90 ms of server routing, so it doesn't depend on Twitch's multi-second delay.
  - Chat votes with W/A/S/D, and the winning key is applied every 75 to 100 ms.
  - A second planned game is a tower defense, chat versus him. Trolling costs bits and makes the trolls' own team lose.
- Four YouTube channels, split by audience, because one mixed channel gets rejected by every group that doesn't want that type of content:
  - Edited, curated engineering videos
  - Article and tweet reactions
  - Long-form programming
  - Clips and shorts
- He is "just some guy on the internet" giving opinions, and avoids taking tech discourse too seriously. He thinks humor is a big part of his success, and cites a joke tweet: `new Promise` with "respect, disrespect" in place of "resolve, reject".
- Open source: Harpoon is his most popular plugin and the one he still feels obliged to maintain. He mostly says no to new features. He stops caring about a project once it does what he wants.

## ThePrimeagen on work hours, balance and routine

- "Work smart not hard" is incomplete. When you don't yet know what smart is, working hard is how you find out.
- Compared with 40-hour-a-week competitors, 80 hours a week gives you "a significantly different position" after two years. "Time wins every time."
- He criticizes people who tell others to never overwork while having succeeded by overworking. He treats that as real gatekeeping, since it implies success is only for them.
- He is not recommending 100-hour weeks. They are unhealthy. But he would do them for six months if a founder's situation required it.
- Work-life balance in practice: people are physically home but mentally at work. He wants to be fully present in whichever one he's in.
- Distractions can't be eliminated, only responded to. When he notices he has drifted, he cuts the thought off immediately instead of finishing it.
- Setup and routine:
  - A converted horse barn on his property, about 50 feet from the house, with a mini-split and a green screen. The physical separation helps.
  - He stops work at the same time every day (4 pm).
  - He gets up at 5 am, makes coffee and goes straight to work, with no morning routine.
- Sleep trick: you can't control when you fall asleep, only when you wake up, and your body falls into line. Having kids moved him from a natural night owl to a morning schedule.
- If he couldn't program, he would probably work on the family's Airbnbs and learn construction trades such as drywall, painting and floor refinishing.
