## Why ThePrimeagen built Harpoon: the navigation problem

- ThePrimeagen started in NetBeans, moved to IntelliJ, and learned Ctrl+N (fuzzy finder). He later used Doom Emacs/Spacemacs, then Vim and Neovim, and kept chasing faster file navigation.
- His core pain point: constantly fuzzy finding. He says it "emotionally hurts me" to do it over and over.
- He found alternate file (Ctrl+^), which was great, but it broke down in a pattern like main file → other file → main file → next file → main file.
- LSP made it worse. He jumped around definitions and then had to fuzzy find his way back to the main file.
- Other tools he relied on also got worse:
  - He used `ci` and `co` heavily, but navigating with squirrely braces `{ }` polluted the jump list.
  - Ctrl+O then became worse to use.
  - He had "5,000 memorized three-sequence types" of fuzzy-finder keystrokes for specific files, and hated holding that information.

## What he tried before Harpoon

- He built Vim Be Good to practice relative jumps. It helped, but "not much."
- He switched to Ctrl+D and Ctrl+U for vertical navigation, plus relative jumps. This also helped "but not much."
- Buffer next/previous (`bp`/`bn`): awful, because you cycle through "next next next next." He says it is fine on a server where only about three things are open.
- Vim marks (mark a, b, c, d): the right shape, but they fail in practice:
  - They are global or local, so switching projects loses them.
  - They stay where they were set. If you move on in the file, the mark still points to the old spot.
  - He kept forgetting to update them.
- His own plugin attempts:
  - `AF+` (a second alternate file, named after Mike Tyson as a "knockout"). It failed because with three-plus files you must read the order instead of knowing it. His analogy is Cmd+Tab, which is fine with two apps and falls apart at three.
  - A jump-list reader plugin that gave more intelligent fixed positions. He did not want to talk about it.

## The insight: you work in about four files

- His model: when you focus on a feature, you really work in a small set of files, "four or maybe three, maybe two." That maps to four fingers.
- Everything else (the long tail of files) can be reached with LSP jumps or a fuzzy finder.
- His principle: "my primary thing I need to go to, I should want that. I should want to jump there." The files you use most should be one keypress away.

## Harpoon's design

- Harpoon is a Neovim plugin, named after the song "Harpoon" by Pegboard Nerds. He built it on stream on Twitch.
- It is marks, redesigned:
  - Marks are per project. Another project has its own set.
  - Each mark saves its column and line position.
  - Position is saved when you change buffers and when you quit Vim, so reopening drops you at the same spot.
  - There is a UI to reorder or delete marks, because marks go stale. A mark that becomes important can be moved to your strongest finger or most-used shortcut.
- He frames it against tabs. A viewer said it is "tabs with extra steps." His reply: with tabs you have to look at them, remember them and adjust them. With Harpoon you highlight an item and move it up or down a line in a list.

## Demo workflow

- Add the current file with the harpoon add command. It appears in the menu list as "file navigation one."
- Jump to a harpooned file with a single command. Position is preserved: scroll down, quit Vim, reopen, and you return to the same spot.
- Git worktrees work well with it. Each worktree has a different path, so it gets its own set of harpoons.
  - His example: a new worktree called `master two` starts with no harpoons.
  - This lets each feature or commit have its own set of important files.
- Open the menu to reorder entries. Moving an entry up changes which file a given jump key goes to. Deleting a line removes the mark.
- Harpoon also has terminal jumping. He was trying to move to tmux and figure out how to make Harpoon terminals into Harpoon tmux terminals, but he did not cover this in the talk.
