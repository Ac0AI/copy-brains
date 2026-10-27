## Learning a language: build first, or read the reference first

- ThePrimeagen has tried several ways to learn new languages (Zig, Go, Rust and others).
- Approach one is to start building. Put hands on the keyboard and Google your way through it ("how do I do a main function, an if statement, my own functions, modules"). He says repetition and rote learning is the best way to learn, and you can build a lot this way.
- The trap: you solve problems in the new language using your old languages' habits. You end up without what makes that language special and can't use it very effectively.
- Approach two, inspired by Mitchell Hashimoto (creator of Ghostty), is to read the whole language reference first. For Zig that is about 8 to 10 hours of reading, with the computer out to practice a few examples from the docs.
- The payoff: when he starts building, he remembers "there's a thing over here" and goes back to reread it, because it is now indexed in his brain.
- He still says you must build something eventually. Reading alone isn't enough, and building is where you discover what is painful or great. Without the breadth of what the language offers, you can make it painful just by being bad at it.
- For beginners who don't yet know what an if statement is, he says reading the reference is the wrong method. They should build very simple things and grow in complexity slowly, because classes, instances, functions and modules just take time to learn.
- He separates reading code from writing code: he can read a lot of C++ but would be bad at writing it, and that skill gap is real.

## Languages he recommends exploring

- He says the answer depends on what you want to do. Game dev: C# or C++. Jobs on the backend: C#/Java, JavaScript or Go. Embedded: C or C++.
- His first language for a complete beginner is JavaScript. You can express anything with little effort, draw a box and move it, write a quick backend, save to a database, and render in 2D or 3D on a canvas. He admits he isn't "supposed to" say nice things about JavaScript.
- He suggests exploring one loosely typed language (Python, JavaScript or Lua) and one strict language (Rust or Go). He notes the Stack Overflow top languages are all non-strict, and says learning something stricter (Go, Rust, C#, C++) changes your perspective on types.
- Python is good for ML work, but he notes the libraries are largely C++ and CUDA underneath.
- His own curiosity list: Swift, Elixir, OCaml and Odin. He says he lacks a strong functional language and wants to fix that.
- His 2025 plan: Go as the mainstay (his favorite for building web apps and complicated backend logic), with Zig and Jai as "side honeys." He plans to build a service that talks to ChatGPT and ElevenLabs, sends data to a client and uses WebSockets, to see how each performs. Go frustrates him on expressing heterogeneous lists.
- On Stack Overflow's survey he warns of selection bias: respondents are people who participate on Stack Overflow, "largely very, very new people, and that one guy that loves answering questions."
- He says benchmarks of language speed can mislead. In a test where Zig ranked sixth or seventh, he added `noalias` to the argument and made it faster than the C version. A speed difference between LLVM-backend languages usually means the code wasn't specified correctly.

## C, Zig and Rust compared; metaprogramming

- C: the ultimate language that can do anything, with macros. It is also really difficult, but simple enough to learn, and "magical" when you get good.
- Rust: the ultra-safe language. What you can do in C you can't even express in Rust.
- Zig sits in the middle. It has optionals, so a pointer can't be null unless you mark it nullable, which avoids the null-dereference segfault. You get a little safety but a more C-like feel.
- What he likes in Rust: freeing heap memory is tied to the stack variable going out of scope, so you don't forget to free. It is not a garbage collector and not manual like C. Variables must be declared mutable explicitly, so anything without `mut` can't change, which makes code readable.
- Zig's metaprogramming is just the language itself with `comptime`, so you can build a list of primes at compile time and use it at runtime. Rust macros need a separate macro syntax.
- He calls himself a metaprogramming newbie and wants to explore it more.

## Asserts and deterministic simulation testing

- Lex Fridman's talk with John Carmack on asserts, plus Joran (CEO and creator of TigerBeetle, a financial database written in Zig), made him try asserts heavily.
- The TigerBeetle approach, drawn from NASA-style guarantees: specify exact int sizes everywhere (not usize), and have at least two asserts per function. They can be positive space (these things should happen) or negative space (this pointer should never be null).
- The asserts run in production and testing, always on.
- They pair this with deterministic simulation testing, running about 200 years of random data through the system. When an assert fires, you get the exact input and everything that happened, so you can see where it went wrong.
- He tried it on a big reverse proxy for game dev and a game he was making, with a deterministic simulation test where even request results arrive in specific orders. It found bugs he "would just never have found," including a cursor going off-screen.
- His thinking: "If I'm wrong, I'm going to crash this thing and I'm going to crash it right here because I should never be wrong." This solves a whole class of problems.
- He says it is a skill he doesn't practice constantly, so it isn't muscle memory yet.
- For web apps, he notes you can show a friendly "things have gone very wrong" message, log it, and measure how often it happens. Crashing all your servers with a bad release is a gamble you have to accept.
- He says that past 10,000 to 20,000 lines of code, bugs can take days just to find the root cause, not the fix.

## Code size, feedback, and learning from projects

- He finds the most learning at about 5,000 lines of code in a project or feature (he says 5,000 to 10,000 is where your choices "either weigh you down or free you up"). Any small program is 1,000 to 5,000 lines.
- At that size he tests whether his initial gut design decisions were good, and asks how to test and scale it out to 20,000 lines. His goal is to reach the point where he can shoot from the hip to 20,000 lines without being upset.
- That number should grow as you get more experienced. A million-line project isn't holistic, because every part is from a different era and style.
- His favorite stream project: Twitch chat plays Doom ASCII. A Go program spawns Doom ASCII and streams it to the browser. Chat input (like spamming W) is aggregated over a window and replayed as controller presses (holding W for 150 ms if the majority said W). It used IRC over a TCP socket to read chat.
- Lag was about 70 ms from his computer to the website. Roughly 1,000 to 1,400 people played, and chat beat level one. He avoided Twitch's roughly 5 seconds of delay by piping to a website.
- The fun part was encoding: quad trees, run-length encoding, and a custom compression using the fact that ASCII character shape tracks pixel luminosity. It took the data from gigabytes to kilobytes. He says encoding is normally "gzip it, the server just does it."
- He builds the Twitch chat voice tool with about eight OpenAI calls: set a persona (e.g. "Randall, the software engineering manager"), generate 10 candidate thoughts, then re-prompt to select one and reword it. He iterates rather than one-shotting. Too much iteration loses the original question, too little is too degenerate.
- His tower defense game in Zig pitted Claude 3.5 against OpenAI; Claude did better in daytime and OpenAI at night, and he doesn't know why.

## Reading other people's code, and print debugging

- His print debugging skill came from a side job writing robots for the government while at school, where "the only way to really get anything out of the machine was to print." His professor, Hunter Lloyd, handed him a robot and manuals (some missing) and told him to write the flash driver, Ethernet driver and planetary pancake motor driver.
- At Netflix, the code ran on machines he couldn't log into, so he printed his way through problems. He says print debugging confirms or tests your intuition and accumulates the bigger picture: edge cases that break the system.
- Prime says the lesson for engineers who stall in unfamiliar code and want to "write my own from scratch" is to learn what already exists first.
- His story: at Netflix, he disliked how a colleague wrote the Falcor request-deduping code (request side, de-duplicating pending and held data; it ran on web, TV and mobile in Objective-C). He deleted it and rewrote it. Each time he hit an edge case he understood why the original was written that way. By the end, "I almost line for line just reproduced what he already wrote." His conclusion: "I am the idiot in this situation because it was already a solved problem. I just didn't take the time to learn what he did."
- Counterpoint he holds: to understand a concept (e.g. how an HTTP server works), starting from scratch is great. Create a TCP socket and parse HTTP yourself and you'll understand why you have to await the text.

## Working at Netflix: learning curve, big-company coordination, and breaking prod

- He got hired in 2013 after a Netflix manager (Jeff Wagner) sent a personalized note because he had RxJS experience. He had spent five years working about 80 hours a week to prepare (he was at WebFilings before, with 60-hour weeks and complex UI state machines).
- He is mostly a tools engineer and generalist. At Netflix he spent 10 years, mainly building things for developers. He wrote the WebSocket connection and framing for TVs, worked on memory, and built a tool UI. He doesn't want to be the world's greatest Kubernetes engineer but would learn it if needed.
- The first week: he had a PlayStation 3 on the TV team. The middle layer between backend and front end was in Groovy, which nobody there really understood. He read the Groovy language reference for a day and rewrote the TV data structure from LoLoMo (list of lists of movies) into LoLoRoMo (list of lists of recommendation objects for movie), adding a level of indirection so recommendation evidence could be attached to a video without being shared across lists.
- His takeaway on how he excelled: "being the person that was willing to do the thing that no one else was."
- He once locked up all of staging by running observable.sleep in Groovy, because the code was not multi-threaded as everyone assumed.
- He hates the phrase "work smarter not harder." Hidden in it is the suggestion that you already know what smart is. He says: "the only way I can learn how to work smart is by working very, very hard." His rewrite: "work hard, get smart." Great engineers forget the hard work when they give "just do it the easy way" advice.
- He also dislikes "the journey is better than the destination," which would mean you're always heading to somewhere worse. He prefers: enjoy the journey, celebrate the destination.
- Falcor security bug: a path request with huge ranges (rows 0 to 10,000, columns 0 to 10,000) plus the materialize flag created billions of boxed objects on the JVM, killing a machine with one request. He found it before anyone else and reported it to security. It got the name Repulsive Grizzly Attack. It had been in production for years, so a rollback wasn't an option. The same risk applies to GraphQL and any RPC where the client controls how much data is requested.
- Other prod breaks he owns: static in PHP held across requests (he assumed static lasted a request's lifetime and showed the wrong country data), a Lady Gaga video countdown that froze the billboard at zero, and an "add to my list" infinite loop. His manual QA also missed the loop.
- He says Pieter Levels' push-to-production approach is perfect for what he does and works for a small org or solo developer. It wouldn't work at Microsoft, Netflix or Google. His own app (zooming and scrolling with a lot of library code) needed a good test suite because "when you squeeze that ball, different things come popping out in different areas." He loves that Levels breaks tech Twitter's notion that you need the latest React and expensive services to succeed. Most software is "old crappy software that someone has to maintain."
- Cross-team change at Netflix: reversing the season order for Black Mirror (so season one, episode one wasn't first) needed about 20 engineers across metadata, middle layer, billboard, web, mobile and TV teams. He met with a VP and product designer, then went to each manager asking for an engineer, and acted as captain, assigning pieces. It took about three weeks. He also had to support hiding episode numbers (for daily shows like Chelsea Handler's).
- His takeaway: at large companies there's no such thing as a small feature, and people who can rally troops, explain and convince are the ones you want to keep. He says waiting for meetings with VPs would destroy his soul.
- Netflix has an easier infrastructure problem than YouTube or Twitch. They know their catalog and what's about to be hot, so they can pre-cache (e.g. a Stranger Things season) on Open Connect Appliances (OCAs) worldwide. YouTube must cache newness and relevance at scale, and Twitch must ingest and re-encode live video.

## Productivity, focus and setup

- Focus: on ADHD he cites maturity and emotional resilience. He forced himself to reread pages (once 18 times in a row in college) and says you can make that decision today, though the first couple of years are painful. He says his wife handles the admin that would snowball him.
- He found programming became easier to focus on over time and can now do it 10, 12 or 15 hours at a time. He says it's like playing a musical instrument.
- Learn your instrument well enough that you have no side quests: when he started, every step (double buffering, rendering) was a question. Now on an airplane he writes 1,000 lines without testing and is confident it's about "98% pretty dang good." He recommends touch typing and stop looking down, since glancing at the keyboard costs mental effort.
- He edits his Neovim config at most once a year, writing down annoyances rather than fixing them on the spot. He does allow a quick 13-second remap. He doesn't go plugin-exploring: "I don't want a perfect editor because that is a pursuit that will never stop." Last month he spent about 100 hours automating his full system setup and won't touch it again for a year.
- Setup: Kinesis Advantage keyboard (he says concavity and thumb clusters "saved my career"; he got a sponsorship by asking them and had used it first). He has pain history: in 2017 arm pain led him to build a custom Dvorak layout with symmetrical symbols and numbers behind Shift.
- One monitor, with single-key navigation inspired by StarCraft: Alt-1 browser, Alt-2 Twitch chat, Alt-3 programming, Alt-6 GIMP, Slack was Alt-5, Alt-4 spare terminal. Linux with i3. Tmux with prefix-1 Vim, then spare terminals and long-running processes, and a Ctrl-F fuzzy finder that jumps to any project folder; prefix-L swaps to the last project. He says the mouse and window-exploding search is "search fatigue" that gives him anxiety.
- Harpoon is his plugin: pin up to four files (a take on alternate file) and jump with one keystroke, since a feature usually involves about three files. He built it for himself, kept Harpoon 1 on master and Harpoon 2 on a branch, and avoids answering open source support questions (his soul got "crushed during the Falcor years").
- Also: yoga ball for posture, desk height right, eyes two-thirds up the screen, large zoomed-in text (about 25 lines of code on a 27-inch monitor), hands in a neutral pistol position.

## Vim motions and editor mastery

- He was once the biggest Vim hater (his Saul to Apostle Paul comparison). He says Vim motions are superior and you can't argue otherwise, but only if you are willing to endure the pain of learning. If not, "it's actually way worse."
- Vim is a language for describing movements in text: delete a paragraph with `dap` (delete around paragraph), `df(` to delete up to the next parenthesis. Duplicate a line with `Shift-V`, `y`, paste, `ci"` to change inside the first string, then Escape and save.
- He maps Ctrl-C (or Caps Lock) to leave insert mode, a habit from IntelliJ.
- His point is Vim motions, not necessarily Vim: take the motions anywhere. Bottleneck argument: once you know the language and problem well, "editing text and getting code out actually becomes one of the many bottlenecks."
- A person who commits 50,000 hours to programming but never learns their editor "just seems strange." He says it speaks to character, not skill, and wants someone who knows the tool and can explain why a problem exists and fix it.
- He doesn't love Neovim for itself; he loves the instrument. If Cursor met his needs he could move. Neovim is C with Lua as the config language. He used Emacs for a year (Doom, Spacemacs and vanilla).
- On Teej DeVries (TJ): they share a Neovim mindset, and Teej is more of an automator. He trusts him and calls him one of the most talented developers he's met.
- He and Teej made terminal.shop, a coffee company you can only order through SSH (payments via Stripe). Origin: they wanted something to sell that they wouldn't feel bad shilling. He avoids merch and tequila, and only did Kinesis as a sponsor because he used it first. The team included Dax (THDXR), Adam (adamdotdev), Liz and designer David Hill. It sells whole bean boutique coffee with a built supply chain, and subscriptions.

## AI and coding

- His rule of thumb: AI is nice for predictable things and weak for unpredictable ones. It is good at TypeScript and weak at Zig because Zig is less documented. Cutting-edge tools are poorly supported.
- Early Copilot: he got early access when Nat Friedman saw his Twitch clip. It predicted an if statement correctly and blew his mind. After using it (until about six months before the interview), he kept introducing bugs. He was "autopiloting" rather than copiloting, reviewing more than writing, engaging less, and not thinking heavily. He says he has skill issues with AI and may spend two weeks fully in Cursor.
- He writes functions with the next 2,000 lines in mind, "chess moving" himself into future needs, and faster AI output breaks that. He still uses AI plenty, just not for programming: Twitch chat voices, role-play prompts and games.
- Reading vs writing code are different skills. He said he doesn't consider code as carefully when reading as when writing.
- Open question he raised to Lex Fridman: if interfaces change greatly, is anyone falling behind by not using AI now? Prime concedes today's tools might be like punch-card AI versus compiler-time AI.
- Worries: market manipulation (premium spots in training data, bought like ad slots, without it being an ad), prompt injection ("at the end of the day word calculator make word come out") which he says is hard to defend against and why he says "don't give too many powers yet," and a "denial of attention" attack where LLM-generated fake bug reports demoralize open source maintainers.
- His biggest gripe isn't capability. It's people telling young folks not to acquire hard skills. He quotes a reply to Pieter Levels saying no one should acquire hard skills in 2025. He says that is "damning advice," because if you aren't the driver, your skill ceiling is bound to whatever the LLMs are.
- Will AI replace programmers: only way down the road and he doesn't predict timelines. Natural language is ambiguous, so he expects some terse pseudo-language for prompting, which is just another higher-level language. If natural language lets more people program, more software gets made and needs maintenance. No computer improvement so far has resulted in fewer jobs.
- To stay valuable: manage bigger projects and understand more of the stack, up and down, so you can kick off several LLM tasks (front end, CLI) and review, adjust and commit results.
- On agents like Devin: the people are nice and he loves the idea of running small backlog tickets offline. In practice, narrower tasks work better; too much specification fails and too little gives weird results. He usually ends up thinking "I should have just learned Tailwind myself." He wants "an intern that cares": something that revisits and improves the craft, not just completes the task.
- Debugging is where AI is weakest, since it mostly predicts text and points at the likely spot. He'd like semantic search to find where things are in big code bases.
- He doubts anyone should highly trust AI output ("you have to be very green"). Assume something is wrong, then challenge it. He argues people misjudge what's complex: quicksort is well documented, so it's among the easiest things to ask.
- On learning with AI: it's democratizing and personal, but he worries about "learned helplessness" and a generation of juniors who stay juniors forever, trading knowledge for speed. He still wants his kids to learn to program.

## Advice for engineers and careers

- Build the love and skill by showing up daily ("getting the reps in") but don't get lost in the sauce: don't sacrifice health, relationships or morals for a startup or money shortcuts. He says he programmed way too many hours and wasn't wise about it, though it made him who he is.
- Staying at a company longer is good: more responsibility and more authority in interviews. The only danger is staying because you're afraid or going mindless for years. Moving around isn't required. If you don't strive for money, "sometimes the money just shows up anyways."
- A first job can mislead you: his internship at a C# shop (Total Information Management System, healthcare and shipping) was so bad he switched his major to mechanical engineering for a semester because he thought he hated programming.
- His first job at Schedulicity was boring because he knew everything. The worst part of programming for him is when you already know the solution and it's only a matter of typing speed, with "no unknown unknowns."
- Persistence: he failed pre-calculus twice, got a C the third time, then topped the school on the Calc 1 final (done in 30 minutes of a two-hour exam) and was the only one of about 400 to finish the Diffy Q final. Method: go to class, go straight to the math learning center, then redo the book's odd-answer problems repeatedly until rote memory sets in, like a times table for calculus. He prefers concrete-to-abstract. His advice: "there's no substitute for the hours," and it only starts getting fun when you cross the barrier.
- In high school terms: people there are "some of the least consequential people in your life." Treat it as a tutorial where you can try things.
- Career path to full-time creator: he started streaming in June 2018 through a charity event (Extra Life), first playing Fortnite, then programming (about 30 viewers at first). He did streams three nights a week until about 2 a.m. while working at Netflix, and made YouTube videos. His editor Flip worked on a 50/50 split of YouTube revenue for years while making about $0 a month. He went full-time in April 2024, after a challenge coin from Pirate Software at the Streamer Awards. He says it was an emotional decision and the work is very lonely, and he misses seeing how other people solve problems, the "forced hard problem solving together."
- His name comes from the last boss in Turok 2 on the N64. He took it back after tech culture in 2017 to 2018 felt pretentious ("tons of dick measuring"), to make tech fun and include newcomers: it's okay to be dumb and ask dumb questions.
- His startups: Via Text (text-message marketing, 2010, a short code product, years too early, as his father's phone card company was), and Greet Feed (pre-schedule friends' birthday messages via Facebook).
