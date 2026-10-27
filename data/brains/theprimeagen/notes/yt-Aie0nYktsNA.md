## ThePrimeagen's six-phase planning workflow for programming with LLMs

- ThePrimeagen built this workflow because he was traveling for two weeks with no keyboard and still wanted to produce the code he would normally write. He could run it from his phone (Cursor's preview app, iOS only) or his computer.
- He asks the LLM to go slowly, one step at a time, and he reviews and corrects each phase before moving on. The point is "slowly designing the thing one step at a time the way I would like to program it."
- Phase 0 (technically a seventh phase): research and come up with a plan for phases one through six.
- Phase 1, structs: define the data structures being built.
- Phase 2, interfaces: define the functions that need to be created or changed (the project's API surface).
- Phase 3, to-dos: place a to-do in every spot in the codebase where code needs to change. He checks that each to-do exists, adds missing ones, and removes ones he doesn't want.
- Phase 4, implement then revert: the LLM implements the change, runs the game in JSON mode to verify it plays through, undoes all the changes, and reports where it had to break from the structs, interfaces or to-dos.
- Phase 5, invariants: add any invariants. He says LLMs are "horrible at this step" and he hasn't figured out how to get them to do it well.
- Phase 6, implement the real change. His joke for phase 7 is "finishing a game is my goal."

## The gating rule: he decides when code advances

- ThePrimeagen stays the one who determines when code is ready for the next step. If the data structures look wrong, "we do not go forward." Same for interfaces and to-dos.
- The test at phase 4 is: can the requested feature be implemented with the to-dos, data structures and interfaces without going anywhere else? If not, "break it again."
- He says phase 4 is his favorite step and "the greatest change in how I design my programs yet." Even without an AI, hand-coding the implementation and noting where the plan broke is "a great way to get information back."
- He says he usually doesn't just prompt "make me a game and make sure it's pretty good." His view: "agents left alone just produce" garbage, and simply telling AI to go do the thing wrecks a project.

## Giving LLMs a JSON mode to play and test the game

- ThePrimeagen's tower-defense-style card game is written in Odin with raylib. He added a JSON mode (`odin run . -- --json`) that runs the full game but emits JSON instead of rendering, and accepts JSON events (mouse operations, moving cards) as input.
- He built it instead of an MCP server because he wanted something "more robust than MCP" that can also emit events. He compares it to a Playwright CLI for game dev.
- The game loop is deterministic: it uses a fixed test delta time and no real sleeping, so it can run at something like "40,000 frames a second," which makes testing very fast.
- In Cursor, he prompts it to play in JSON mode, place a tower and record every JSON output to a file so it can be replayed.
- Longer-term goal: a real agent loop where an agent plays as a character (the blacksmith) for 1,000 games, he inspects win percentages, and the agent writes a file of skills and best strategies, so he can see which cards win most and least.
- He admits he should document how to launch and control the game in an `agent.md`.
- He has few unit tests, only basic layout and animation tests. The JSON mode is his main verification path.

## Design example: static enemy array instead of a dynamic array

- One PR he made through this process replaced a dynamic array of enemies with a fixed-size array, with a defined maximum number of enemies and no removals.
- Reason: during a level, a dead enemy still needs to play a death animation, so it must stay in the array to keep updating. Enemies are marked dead (with the time of death) or completed (path percent 100%) rather than removed.
- Each new wave clears out the previous enemies and projectiles.
- Draw loops iterate up to the enemy count and skip finished enemies. The same pattern applies to towers.
- He says this is the kind of design change the workflow handles well.

## Where LLMs fail him and what he does by hand

- ThePrimeagen says he hates describing API changes in English. When reviewing, he'd rather make the edit himself because "I can just do it much much faster."
- Example: a mouse-interaction bug where he wanted a function to return the highest Z-ordered interactive element instead of doing the interaction inside the check. He tried to get agents to do it about seven times while traveling and couldn't get normal code. He hand-wrote it in about 15 minutes. His takeaway: "Some problems are just horrible to describe in English."
- He tried to have an LLM "slop" an MCP server into the project and calls the result "absolutely awful."
- LLMs keep using `println`-style `ln` calls in Odin even though they don't exist there.
- He says LLMs don't produce great code but produce even worse assets. He used a human pixel artist (Adam C. Younis) for the game art and hand-rolled his own immediate-mode animation system, which he's proud of.
- He admits a personal weakness: he's "not really great at reviewing code" and sometimes lets logic slip into the UI layer that belongs in the game layer, especially when reviewing on his phone.
- His framing: "Can I become a good programmer while using an LLM?" He wants to be deliberate about how he uses AI.

## "55": his local tooling for running the workflow with worktrees

- ThePrimeagen built a Neovim-based tool called 55, named after the Halo BR55 battle rifle. It's the follow-up to his earlier AI Vim plugin 99 (named for the SRS99 sniper rifle). The name signals precision over "spray and pray."
- Each project (for example, "the damage" feature where an enemy reaching the end of the map deals one damage to the player) gets its own Git worktree, so it can hold pending changes without touching his main checkout.
- Starting a project: he tells the agent it will go through seven phases of planning and to acknowledge when ready, then gives the task. He can see which phase it is in, and whether an agent is running, from a home screen.
- The `inspect` command puts every Git hunk into the Vim quickfix list so he can walk through the agent's changes. A toggle shows diff lines.
- Workflow: let the agent make the change, then edit the code himself by hand, then continue the phases locally. For fixes he prompts directly, for example "pull from master and resolve conflicts" or "enemies no longer are removed but marked dead."
- Planned next step: a cloud handoff (a control-G command in 55 that records a handoff prompt). If he is partway through a change and has to leave, he can send it to the cloud and finish on his phone. He says he hasn't tested it and doesn't know if it's possible.

## Autocomplete, not vibe coding, and why 55 isn't public

- ThePrimeagen says he is not vibe coding. He wants to stay the one doing the coding and the reviewing.
- For tab autocomplete he still uses Supermaven (not his own 99), citing about 250 ms latency. He says that if he's locked in and his program is clear in his head, he can go faster and better than any LLM, and autocomplete is enough.
- He released 99 as experimenting in public, but isn't releasing 55 yet because he isn't sure it's the right approach: "I don't know if 99's the right choice, so I want to first really like it."
- Game status: he intends to release it as a real game. An older Lua version (Mordoria, "V2") is public with a retained-mode UI. The new Odin version uses immediate mode for both UI and animations.
