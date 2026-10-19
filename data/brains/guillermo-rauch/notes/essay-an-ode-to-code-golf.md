## Learning by hacking: Izhal and early exposure

- Guillermo says there was no single moment he "learned to code". It was a discontinuous process of ups, downs, impostor syndrome, months of voracious learning, then months of distractions.
- Decisive factors he names: exposure to open-source (Linux), online communities (IRC and forums), and hacking competitions.
- Izhal.com was a hacking game: start at Level 1 and hack a made-up system to reach each next level. It had a forum for hints, a level shown as flair, and a public leaderboard.
- Level 1 was solved by viewing page source and finding an HTML comment with the next URL. Difficulty climbed to disassembling binaries and writing key generators.
- He argues it taught problem-solving skills rather than coding itself: reverse engineering a system and "unusually effective debugging" with very little information, and it did so very quickly.
- He recommends beginners try similar challenge sites and suggests content creators experiment with this model for new educational materials.

## Why he recommends learning by having fun

- His closing advice: there have never been as many ways to learn to code (bootcamps, free YouTube videos, expensive courses, exclusive chatrooms), but he suggests "learning by having fun, overcoming obstacles and a healthy dose of competition with your friends".
- He frames code golf and hacking tournaments as the alternative to formal curricula.
- He would not start a beginner on JS1k. He sees it as useful for setting aspirations of what you could one day do and for marvelling at the expressive power of JavaScript.

## Code golf, JS1k and the expressive power of JavaScript

- Code golf is a game whose goal is to reduce code as much as possible ("golfing").
- JS1k was a yearly tournament: make the coolest possible demo in 1K (1024 characters) of JavaScript. It is not returning for 2020.
- He cites his friend Román Cortes, for many years one of the most successful JS1k contestants. Román's 2013 runner-up entry is a heavily compressed program that still runs fine in any browser seven years later, and Guillermo embedded it in his Next.js-powered blog post.
- Román's new hobby, code-golf.io, inspired the post. It offers challenges at all difficulty levels across several languages, and solutions are submitted in the fewest characters.
- He noted that results are remotely verified, so the game is sound and complete with no easy way to cheat. That made him curious about secure code execution, a topic he had studied over the years.

## Reverse engineering an unfamiliar environment

His method when probing code-golf.io's sandbox, with no manual:

- Start with the question "What is this system executing?" (a function? who invokes it? how?).
- Throw an error to read the stack trace. The trace was too short for Node.js, which ruled Node out, and it revealed the code was read from `/tmp/code.js`.
- Enumerate the global object. `globalThis` existed, indicating a very recent JS environment, and the first member was `print`. `console.log` did not work, so he kept using `throw` for inspection.
- With `print` he enumerated the whole environment. Finding `Realm` hinted at how sandboxing was implemented.
- He notes `print` adds a newline, so he needed `write` to solve the Quine challenge.
- He says this brought back the feeling Izhal gave him in 2002: starting from very little and figuring things out, "like learning to code again".

## Solving the Quine challenge: iterating from 27 to 24 characters

A Quine is a program that prints its own source. Writing one requires thinking recursively; writing the source as a string leaves you "one layer removed from success".

His iteration path:

- First working solution: use `read` on the file found earlier (`/tmp/code.js`) and `write` the result. It used 27 characters. He called it a "completely unsatisfactory, partial" victory because leaderboard leader primo had 24.
- Second approach: a function that prints its own source via function-to-string introspection. It used 30 characters. The gap to the old approach was 3, and he needed 3 more to match primo, so he abandoned it. He was still encouraged that another path existed, and documented attempts in Notion.
- Back to the first approach, compressing the path: relative `code.js`, `/tmp/code` without extension, `/tmp/code*`. None worked.
- Enumerating an `os` object revealed Unix-style syscalls. Using `chdir` with a relative path pushed him to 39 characters, but confirmed he was in a regular Unix-like filesystem.
- He then worked out the default working directory, guessed `/`, and made `tmp` relative, removing the leading `/` for one character.
- Still 2 characters short, he reasoned the only removable pair was the parentheses. He recalled JavaScript's tagged template literals (popularized by styled-components) and dropped the parentheses to match the 24.
- Result: his "one and only contribution" was a permanent "4th 1st-place" on the leaderboard.

## Principles for tough problems

- Seeing others' demonstrated results drives him: "inspired by what other had demonstrably accomplished", as on the forums back in the day. When primo's 24 showed it was possible, he kept going despite believing nothing was non-essential.
- Apply multiple "search" strategies and choose the most promising one; drop a path when the remaining gap is too large (his 30-character attempt).
- Document attempts as you go (he used Notion).
- Expect trial-and-error and perseverance. Each failed path (path shortening, `chdir`) still taught something that later helped.
- Skills he says matter throughout his career as a programmer: figuring out unfamiliar environments and systems without a manual, iterating, and perseverance.
- He compares the small win to CI: "green just… feels good".
