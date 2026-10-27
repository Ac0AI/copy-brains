## Why ThePrimeagen thinks Git matters and how he learned it

- Git is "the very bottom of the things you should probably know and be good at." He wanted to teach it for that reason.
- Most developers have an FTP horror story, such as uploading the wrong file and erasing their work. A good grasp of Git removes that pain.
- For years he treated Git as magic, knowing only add, commit, push and pull, because it felt daunting. His later realization: nothing is really daunting, and a little time spent "can massively improve your life."
- His example: for about 10 years, when a rebase hit a conflict, he resolved it and then ran `git commit` instead of `git rebase --continue`. He didn't know how to undo that, so he ran `git rebase --abort` and redid the conflict resolution, sometimes twice in a row.
- The fix he later found: `git reset --soft` to walk the commit back, then `rebase --continue`.
- Conflicts also occur in `revert` and `cherry-pick`, not just rebase. Merge is the only case where resolving the conflict means committing.
- Small tricks like this "save your bacon every single time."

## His daily Git workflow: `git add .` and clean ignore files

- He runs `git add .` from the top level of the repo, unless he knows all his changes sit downstream of where he is.
- On people who add files one at a time: "when you delete a directory do you delete them one file at a time?" If everything that changed is meant to be added, adding individually makes no sense.
- This works because he keeps a very clean `.gitignore` and `.git/exclude`.
- He pipes temporary output to a file named `out`. In Vim with fugitive, running `gI` on a changed file opens `.git/info/exclude`, so he adds personal files to his internal excludes rather than the shared `.gitignore`.
- He avoids creating other temporary files, so `git add .` only ever picks up his real changes.

## Work fast and sloppy first, rely on tools to rein it in

- His rule of thumb: "you will never get it right the first try," so he doesn't try.
- He works "fast and sloppy and clean up later" rather than "perfect and slow," because perfection is wasted on unknown unknowns.
- Example: after building multiplayer Minesweeper for Twitch chat, he saw what he wanted to change before starting the Doom version. The first build was what revealed the unknowns, and he can build it right on the second try.
- He says anything that doesn't keep him on the rails (tools, types) slows him down, which is part of why dynamic languages wear on him.

## Why he thinks schools shouldn't teach Git, and what they should teach instead

- His "smoldering hot take": he doesn't think school should teach Git.
- If schools cover it, he'd have them teach how to implement version control, as with other courses:
  - Data structures: you implement them.
  - Compilers: you build one.
  - Networks: you build protocols.
- Academia is meant to teach foundations. A version control class would cover how version control works and the different types, with one day for "also there's Git, let's look at why its algorithms work."
- Simply forcing students to use GitHub ("push all your stuff up, good luck") isn't teaching Git. Push, pull, add and commit are easy to pick up, but students never learn how Git stores things.
- His own course reflects this: chapter 3 is "internals," starting from how Git stores data, because everything else makes more sense once you know that every commit contains the entire tree. Understanding the plumbing makes the porcelain, the index and the staging area more intuitive.

## What college is for, and the trade school he wants instead

- Historically, higher education was for the wealthy. A liberal arts degree was meant to prepare you to "leisure well" and to discuss philosophy and poetry. Around Coleridge and Wordsworth (mid-1700s), a person could still know everything. That is no longer possible, and expertise is now very narrow.
- A bachelor's degree is not about becoming a subject matter expert (that is a PhD, and experts typically emerge later in a career). That makes it misaligned with a workforce that expects job readiness.
- His hot take: "boot camps need to be shot and people should quit going to college."
- What he wants instead is a two-to-four-year trade school: like a boot camp but longer, with data structures, Git and version control, and implementing harder things "quickly and ferociously preparing you for a real job."
- Why college persists: after year one, the students who stay get bitten by computer science and build things with friends, so they come out as if they'd had a four-year trade school.
- Why boot camps fall short: they're good at JavaScript, but "everything else is missing," so grads don't know what adjacent systems are.
- He wants education that is neither six months and "ready for work" nor four years of foundations only. He says Boot.dev is trying to fill that middle.
- On the pace of learning: after 20 years of programming, three months of Go got him to a moderately sufficient level, "junior to maybe near mid-level" on Go alone. So "within one year" claims for newcomers are absurd.

## Go gotchas and code review habits

- Go gotcha he learned: a struct with a pointer to another struct lets you call methods on it even when the pointer is nil.
- The book "100 Go Mistakes" became more useful once he had enough Go experience; he says about 90 of the 100 are nil pointer dereferences.
- Review rule: whenever he sees a nil dereference in Go, the nil check "better be the line before it." He pushes back on PRs that say "I checked 40 lines before," since someone may remove the check or he'll forget it.
- He cites locality of behavior: put expectations as close together as possible.

## Rebase vs. merge: his reasoning

- Never change the history of a public branch, such as main. On your own feature branch, force-pushing after a rebase is fine: "I don't care, I'm force pushing on my own thing."
- His practical reason for rebasing: revertability. With repeated merge commits between main and a feature branch, pulling a feature out later in one command becomes very difficult.
- If you rebase the feature branch onto main, squash it into one commit, and merge, you get no merge commit. Reverting is then one `git revert`, a new commit that is the "antimatter" of the bad one.
- He reverted at Netflix three times in 10 years, and each time it was one clean commit with no merge commit.
- His philosophy: "always bet against yourself." He assumes he'll screw it up, which is why he writes unit tests and rebases into one commit.
- Feature flags and similar strategies help avoid needing reverts, but reality means you sometimes will.
- Modern "push forward" culture means few people revert, which partly explains why merge has regained popularity. That, plus not knowing the tools, drives the anti-rebase sentiment.
- A linear history is also easier to read if you're a "history person," typically someone from larger legacy apps. GitHub's commit list also looks linear even when merges exist, which hides the fork in the road.

## Fixing repeat rebase conflicts with `rerere`

- The common complaint is hitting the same conflict repeatedly during rebase, because rebase replays commits one at a time.
- His answer is `git rerere` ("reuse recorded resolution"), a lesser-known feature. Once you resolve a conflict between two commits, Git replays that same resolution automatically the next time it sees the same conflict.
- He believes people don't realize this tool exists, and that most dislike rebase because they use it incorrectly.
- His take on "rewriting history": it's bad to rewrite everyone's reality, but "in my branches I own reality." He quotes Sarah Bad Cop's framing and says `git reset` plus force push could rewrite history too.
- Rebase is easy to use wrong at first but easy to use right once you understand it. He compares it to the unwritten agreement in old JavaScript that libraries won't mutate your object.

## His Git course: scope and plan

- Part 1 (on Boot.dev) is about 10 chapters and 50 lessons, covering what you need to be competent as a solo developer.
- It skips conflicts deliberately, since you rarely conflict with yourself. His reasoning: teach the powerful stuff first; conflicts can be looked up or handled with VS Code, IntelliJ or fugitive.
- Part 1 is enough to work in a big organization, though you'll occasionally take two or three commands for something that needs one.
- Part 2 will cover conflict resolution, more plumbing, merge and rebase in depth, cherry-pick, squashing, editing history, work trees and tags.
- He admits he doesn't know what `HEAD~2` means after a merge commit, and guesses it follows the branch that was merged onto rather than the incoming one.

## Streaming Doom to Twitch chat: encoding for cost

- His project is real-time games controlled by Twitch chat. Twitch's 5 to 15 second latency makes games like Doom unplayable there, so the plan is:
  - Run the game on his machine (with System76 hardware).
  - Render it in ASCII and send the feed up to a few Fly.io instances.
  - Viewers open it in a browser and see it at roughly 500 ms latency.
- Frame size: 13,992 bytes of characters plus 1,992 bytes of colors per frame, about 28k.
- Why not gzip: browsers don't implement the WebSocket per-message deflate extension.
- Steps he plans to reduce size:
  - Doom-specific encoding that exploits every character and color being duplicated, which halves the size immediately.
  - Run-length encoding (count byte, character byte), which already got color to about 40% of its size and characters to 60%.
  - Diffing frames with XOR, since unchanged frames produce zeros, and toggling RLE on or off per frame depending on whether it helps.
  - Quad-tree splitting, since the image has large blocks of one color, with small RLE per box.
  - Huffman encoding: count frequencies, build a priority queue, and give frequent characters about 4 bits and rare ones about 9. Decoder in JavaScript, encoder in Go.
- Target is under 10% of original size. His reasoning is cost: 2,000 viewers at about 50 MB per person per minute is huge, whereas at 10% it is 5 MB per person, about 5 GB per minute at 1,000 viewers.
- As a full-time creator with no employer to expense it, an accidental $1,000 bill matters to him.

## Controls for Twitch plays Doom

- Problem with Twitch Plays Pokemon style input: chat spams keys and the result feels random.
- His plan: sample chat every 16 ms (or another interval), take the most frequent character, and replay that action like a held key repeat. He suggests one action every 100 ms.
- Why Minesweeper works well: actions are slow. After each move he pauses the game for 7 seconds, then gives 12 seconds for the next move, so chat can see the board update before voting.
- Latency matters: six seconds between pressing fire and seeing its result makes an FPS unplayable, while a second or less is workable.

## Terminal.shop coffee and building for developers

- Terminal.shop sold out of its first coffee blend in 36 hours. He considers it the "worst blend" they'll ever ship and the team found new roasters; he calls the new ones different rather than better.
- It started as an idea with TJ about "the dumbest thing you can build in Neovim": ordering coffee over SSH. Bash, who works at Charm, helped.
- They sourced coffee directly from Brazil instead of white-labeling, and handled roasting, shipping, packaging and bag printing themselves.
- Audience reasoning: "you don't make Boot.dev for the person who doesn't want to program." For developers, coffee is essential, so the brand leans into dev memes.
- Price comparison: Starbucks bags are about $23 to $24, and he wants to be on par on price while being significantly better.
- Limited-run viral bags are more expensive because of custom printing and packing.
- Plan: subscriptions, better roasters, more meme-driven drops.
- Stack: TypeScript with SST on the back end and Go on the front end, which he calls "the mullet stack."
- The launch went to the top of Hacker News organically, and he didn't post it.
