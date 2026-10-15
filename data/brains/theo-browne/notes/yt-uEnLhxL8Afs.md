## Mod View: what it was and why it mattered to Theo

- Mod View is the moderator tool Theo built at Twitch. He calls it his proudest project, ahead of this channel, his work at Ping, or UploadThing.
- It is a fully customizable moderation UI. Moderators move, resize, dock, hide and show widgets such as chat, automod queue, mod actions and predictions.
- Theo describes it as "one of the most successful launches in twitch's history", delivered despite roadblocks that made it "seem like it was doomed for failure".
- It started from internal safety tooling. Theo first built admin panels used to investigate reports and ban users. That internal platform got good enough that the team decided external moderator tools should be as good.
- Theo ranks it above his other work because of both technical innovation and team organization.

## Constraints: shared ownership, short deadline, small team

- The safety team was close to the chat team, but did not own whispers, channel points, ratings, subscriptions, bits or even the player. Moderators needed all of that data in one place.
- Widgets came from different teams with different opinions on React, including hooks support and external state management.
- Rewriting every team's code to use one shared state manager was possible but not feasible.
- Staffing was Theo plus two additional engineers, with about 6 months to ship.
- Theo had the product manager set the deadline a month early to create a buffer for polish. He says that month "was huge for us" in making the product really good.

## Technical decisions: bet on hooks, fork what is close, compose

- The team went all in on hooks, functional programming and a composable model. This was late 2018 to early 2019, and they kept that choice as work ramped up through 2019.
- They evaluated what neighboring teams used. The dashboard team used react-mosaic for resizing and moving panes.
- react-mosaic had no concept of open/close or reuse, and it remounted children when things moved, losing their state. It "introduced as many problems as it solved", but its UI capabilities were good enough that they used it.
- Theo internally forked react-mosaic and added what was missing.
- They used react-dnd for the hooks and primitives behind the widget bar, reorderable side nav and dragging elements in and out of Mosaic. Making these interact took deep understanding of both the forked Mosaic code and react-dnd, which they kept up to date.

## The state problem and the inverse portal solution

- Problem: moving a widget unmounts and remounts it, so components like chat lose state (messages vanish). Teams outside his own owned the widgets, so he could not move their state to a global store.
- Theo's solution: widgets are never mounted where they appear.
  - All possible widgets, including those not currently shown, are mounted once in a hidden, stable list in the virtual DOM.
  - The visible layout renders only an "out portal" (placeholder) for each widget.
  - Moving a widget moves the out portal's location, not the component, so state survives drags, hides and re-renders.
- He frames it as in portals (where you mount) and out portals (where it appears). The React tree keeps one stable parent while the real DOM places the element elsewhere.
- Origin: he proposed it "somewhat chaotically" from using portals for odd things before. He nearly shut it down when it did not seem viable. His manager asked to try it, found Theo's dumb mistakes, and got it working.
- It is still the pattern that keeps Mod View state persistent regardless of UI customization.

## Performance testing at scale

- Mod View sometimes leaked memory for very large streamers.
- Theo had roughly six laptops and four desktops on his desk, running custom builds against very large streams to find the leaks.
- He says this dedication came from caring about the users: "that level of dedication ... it was so much effort but we did it because we cared so much".

## Why it succeeded, in Theo's words

- Main reason: "everyone working on it cared". The whole team was aligned that moderators deserve better tools.
- Moderators "make the content that we do possible" and "keep twitch safe". Theo says his own chat would be unmanageable without his moderators.
- Success factors he lists:
  - Patterns that fit the problem (hooks, composition, portals).
  - Libraries forked and built on rather than rewritten.
  - A small team genuinely invested in the users.
  - A deadline with real buffer built in.
- He also notes the project worked because the team did not wait for perfect architecture. They fit the solution to the organization (many teams, no shared state manager) instead of forcing a rewrite.
