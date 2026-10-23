## How Scott works with Devon: the junior engineer framing

- Scott describes Devon as a junior engineer, "an intern", not a senior one: "we'll get Devon the promotion" eventually.
- Devon is not meant to solve hard architectural problems or make big strategic decisions that a human will own for the next month. It can help with the decision by pulling references and input.
- His rule of thumb is "tasks not problems". Where there is a clear "here is exactly what we need to go do", with all the details, Devon executes much faster.
- The open question is how to get the spec. He pairs Devon with Wiki and Search so humans can ask the right questions about the codebase and turn them into a task.
- Devon is "first and foremost almost like an engineer on your team", unlike IDE or terminal-UI tools.
- His top-level claim on form factor: coding agents are really "the next generation of human computer interface". He pictures a future where you look at your product, say "make this button rounder", and an agent implements it.
- Today the best form factor depends on the person:
  - Lots of meetings (him): Slack or Linear tagging.
  - Engineers coding 8 to 10 hours a day: the IDE, with background async processes running.

## Sync-then-async workflow: DeepWiki, a better prompt, then a Devon session

Scott's example task was adding the ChatPRD MCP server to Devon's MCP marketplace list.

1. **Synchronous part, in DeepWiki.** DeepWiki gives AI-generated documentation of any repo, public or private. He asked how the MCP marketplace is set up and where the server list is implemented. The answers combine English explanation with the actual code snippets and files. He notes engineers today want both "English and code".
2. **Turn the question into a Devon prompt.** In that context, he typed an unrefined request ("please go research the ChatPRD MCP server and add it to the list"). DeepWiki rewrote it into a detailed prompt: follow the existing Atlassian and HubSpot server pattern, the exact type structure, which functions to look at, and what to check to confirm it works.
3. **Kick off the async session.** Once he hits go, Devon researches and codes on its own and produces a pull request. He reviews and merges it.

Why this matters to him:
- Analogy: with a human intern you would not send a five-word Slack message. You would spend about two minutes talking it through and reading the code together, then hand off.
- The extra "turn this into a good prompt" step feels like friction but saves heartache. He expects it to become invisible, handled by the tool or the reasoning model.
- Async removes latency anxiety. Because the expectation is "intern, go do this", nobody expects an instant reply.
- Async also means he can run several tasks at once. He is in meetings most of the day, so he kicks off 3 or 4 tasks and checks back.
- The flow works especially well for tech leads and PMs, who already figure out an issue, hand off "here's exactly what we need to build", and are in back-to-back meetings. Starting tasks from the web app or Slack suits people not living in an IDE.

## Making Devon the first line of response across Slack and Linear

Scott's team "institutionalizes" Devon as the first responder on everything:
- Devon is tagged first on issues in many Slack channels: crashes, core infrastructure, the web app, and more.
- It will not nail every task in one shot, but the usual loop is Devon opens a PR, there is some back and forth, and a human does a small touch-up and merges.
- Examples he showed:
  - "Standardize the font size, spacing, and style for these three levels." Devon made the PR, there was feedback, and an engineer merged it.
  - "When you command-click a notification, open it in a new tab." This is likely a user feature request.
  - He also tags Devon from Linear.
- Devon posts progress updates in the thread (files it is looking at, what it sees), and can be corrected by humans mid-thread.
- Devon is multiplayer: several people can be in one thread. In his example a teammate said to use a Link element from TanStack Router, and Devon changed the PR and pushed more commits.
- Two benefits of multiplayer, in his words:
  - **Knowledge transfer for the agent.** One person's session adds to the agent's knowledge, so a week later Devon recalls it already worked on that piece of code.
  - **Educating the humans.** Teammates see how others work with the tool.
- Devon's knowledge feature learns your codebase over time, and you can also feed it details about how things work.

## Scott's top five Devon tasks

1. **Miscellaneous front-end fixes.** The old flow needed three or four people (describe the change, find the code, review). Now you tag Devon with a screenshot ("make this button a bit rounder", "touch up this design"). Devon finds the code, implements it, and sends before and after screenshots. It works well because the result is verifiable for both the agent and the human. He showed a new hero image Devon produced for the ChatPRD homepage, and gave feedback on it in Slack.
2. **Version upgrades and migrations.** Upgrading Node, moving to the latest packages. The detail is in finding every component or call site affected by a new recommended structure. Devon does semantic search to find each instance and makes the changes.
3. **Documentation.** Devon wrote Cognition's external docs. DeepWiki is an extension of the same capability. It is not strictly a code-writing use case, but it relies on the same ability to process a codebase and explain what references what.
4. **Incident response.** When there is a crash, the first line on page duty is Devon. Devon starts a session and has a report waiting by the time a human gets to the computer at "4:00 a.m." That report says what it looked at, which change from last week or yesterday likely caused it, and the trace of the error. He still wants a human involved in big incidents. He calls it a "huge lifesaver".
5. **Adding tests.** Last step before shipping a feature: Devon writes the unit tests, runs them locally to confirm they pass, and iterates on lint and CI with you.

## Using ChatGPT voice as "a better Google" in meetings

- His framing: Google 20 to 25 years ago was a faster, more current encyclopedia. ChatGPT voice is "a better Google": an even faster answer, fully synchronous, and it can research behind the scenes.
- Encyclopedia lookups took about 5 minutes, Google about 10 seconds, and voice about 1 or 2 seconds. That friction drop matters for off-the-cuff questions.
- The meeting use: pull out ChatGPT in voice mode, effectively "adding chat to every conversation". Example from the day before: "how many companies have 10,000+ software engineers?" (the first that came to mind: big banks, big tech, Accenture, Infosys).
- It is rude to disappear into your phone for two minutes mid-meeting; asking out loud is quicker.
- He uses both voice-to-voice and voice-in, text-out modes.
- Windsurf added voice as of Wave 11, partly for this reason.

## Debugging an agent: review its history, then re-instruct

- An agent is different from a chatbot. With a chatbot, if the answer is wrong, "that was the wrong answer" is about all you can say. With an agent you can read the whole history of what it did.
- His technique, framed as pair debugging with an intern: scroll through the logs, find where it went wrong, then correct it. He admits he does not always follow his own advice.
- Example from the demo: Devon got stuck because it could not find the ChatPRD MCP page. The logs showed it had Googled and found other things, so the missing piece was the link. He sent the link.
- Another example of a correction: "I think you missed this one file, the downstream reference, and that's why there was the bug."
- He says this is "the biggest thing that will really move the needle".
