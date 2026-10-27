## Vim motions are worth learning on their own; Vim the editor is optional

- ThePrimeagen separates Vim motions from Vim the editor. Motions are "fantastic by themselves", work standalone, and "will always work for you in an amazing way".
- He says everyone should learn the motions.
- He is "less sold" that everyone needs to use Vim the editor.
- He recommends trying Vim long enough to understand what it is and how it differs from VS Code.
- He has used VS Code, Vim, Neovim, Doom Emacs, plain Emacs, IntelliJ, Atom and NetBeans, "ran the gauntlet", and says you learn what you like and how to be super efficient in it.
- Vim navigation is more than Vim mode: Harpoon (a short list of the files you are editing, jumped between instantly), the alternate file, and walking backward and forward through the jump list.
- He notes VS Code has a Harpoon clone, but "you don't have a jump list" there.

## Learning Vim makes you a stronger developer because you learn how your tools work

- He argues, as devil's advocate, that Vim won't hugely change productivity versus other modern editors, but says it does make him more efficient, with trade-offs.
- Choosing Vim leads you into its ecosystem: flavors, plugin management, config, and wiring up code completion, syntax highlighting and compilation for each language.
- He answers yes to whether you come out a better developer: "you do actually end up a better developer in a sense that you know more of how the tools undergirding your system work".
- Most people never ask what happens when they press the green play button, what it calls, or how dependencies are managed.
- He does not claim this is a "better level" of understanding, only that you will be more capable than before.
- He calls "learn tools or get better at programming" a false dichotomy.
- A lot of programming time goes to ancillary problems around the main task, and getting better at those makes you a better developer.

## Tooling skill is a path to becoming a tools or editor developer

- Many people want to be full-time tools developers, which he calls "very, very hard".
- He says the route runs through understanding how tools work, not "just pressing the green play button until somebody just says hey go do these things".
- His example is TJ, who works on language tooling at Sourcegraph and whose skills come from that understanding.
- He says "you have to invest in how things work".

## Master your tools, whichever they are

- His main takeaway is "know your tools", more than Vim specifically. Mastering them is "one of the most important things you'll do", even if the tools change.
- Not knowing how to use your editor is, in his words, "a tragedy".
- Many people default to VS Code and never leave it or learn how their system works. He pleads: "just learn how it works".
- Example: if you haven't written enough CLI tools, you won't think about standard in and standard out properly, and you leave many better designs on the table.
- He says he hasn't touched his Vim config since his last rework, about two or three months earlier, so the time sink is front-loaded.

## Learn the small Unix tools outside your editor

- Your editor "does not have to solve all of your problems".
- He often sees someone with a log file who wants to sum a column and has no idea `awk` exists.
- He says he is bad at `awk` but knowing it exists and doing it in one try is enough.
- Tools he names as worth knowing:
  - `awk` for summing numbers in a log
  - `tr`
  - `grep`
  - `find`
  - `xargs`
- He says this knowledge came from using Vim, because he had to go learn these things.
- "Just knowing that you have a couple tools that work is really nice."

## His workflow: tmux and tmux-sessionizer instead of a terminal inside the editor

- Stepping away from the terminal inside his editor gave him a slightly better workflow.
- He now uses tmux, and that led him to build tmux-sessionizer.
- With it he fuzzy-finds a project and jumps between project sessions quickly.
- Shortcuts let him copy a line in one project, jump to another, and paste it there.
- His conclusion: "just having a command over your system is worth way more than just simply using your editor and never knowing how anything works".
