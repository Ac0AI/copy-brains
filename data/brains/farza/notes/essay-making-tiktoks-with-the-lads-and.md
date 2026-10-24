## Tidbit's week: daily A+ goals, a messaging pivot, and moving from Instagram Reels to TikTok

Farza describes a single week of Tidbit (an AI product with shared team chat) when it had three weeks left before its future was decided.

**Daily A+ goal and a win/loss board**
- Farza set one "A+" goal per day for the whole team and judged each day a win or a loss against it. The week ended with 5 W days and 2 L days.
- Monday's A+ was "ship a link to the app to Michael (Cursor) + Ivan (Notion)", the two founders who had asked to use Tidbit. The Notion CEO had already paid the $99 a month.
- The team shipped it by end of day Monday, after delaying the new version for a while while working on reliability, a team-invite flow and a desktop app. Farza's note on it: "we turned our brains off and shipped."
- His reasoning: "I really hate going home and not knowing if I won or lost." A clear result lets him come back and play harder after a win, or step back and set a better goal after a loss. He says the in-between state is the bad one: "I get sad when its in the middle."
- He says "an intense deadline with the right goal can feel so good."

**Results after the Monday ship**
- About 300 teams on the free tier.
- About 35 paying teams at $99 a month.
- Farza emailed the paying teams and posted a tweet that brought in more teams.

**Why simple tweets work**
- He argues that simple tweets are "extremely underrated". His example: a tweet built around how people feel about Slack drew almost 100 DMs.
- His view is that a plain "if you wanna try Tidbit drop a reply" would not have produced as many good leads: "No one gives a shit about Tidbit. But, everyone knows how they feel when they think of Slack."

**Messaging pivot: from "replace Slack" to "work better with AI"**
- The DMs made him realize "Tidbit kinda sucks as a Slack/Discord competitor." The team noticed this internally too, and saw new users sign up and churn.
- The value people actually felt was collaborating with the AI on a very specific problem together. His example: he and Hasan coming up with a TikTok idea with the model in the same chat.
- He dropped the "do all your work chat here as well" and "ditch Slack" narrative and reframed Tidbit around "work better with AI".
- He treats this as a messaging pivot, not a product pivot. The change was a few words on the landing page and in the DMs he sent.
- His principle: in the early days, nail the messaging. "Sometimes, it's up just setting up messaging properly so the emotion people enter the tool with is a hyper-specific one."
- Method for picking the angle: find (1) the most exciting angle for the team, (2) the angles people are most excited about, and combine them. He judged the messaging to be "getting better and better every week."

**New features: webhooks and basic MCPs**
- Tidbit users were already hacking the product to pipe external data into channels and work on it alongside Claude, so the team shipped a simple way to do it:
  1. Create a channel.
  2. Add a system prompt telling Claude what to do when a new webhook arrives.
- The example setup: a webhook fires every time someone fills out the access form on the landing page and goes to #new-users. The channel's system prompt tells Claude to research the signup from their email or company using web search, judge whether they are interesting or a big potential customer, and if so write a personalized email from Sharif's point of view scheduling a call.
- Tidbit has web search and recursive tool calling, so Claude can run several searches to dig deeper into someone's background.
- Farza was already doing this by hand: he Googled each new user to decide whether to learn more. Now an agent does it, and he wakes up to a message telling him which signups have the most revenue potential. It correctly flagged a legitimate marketing agency as a serious user worth a call.
- Emails can be sent from inside Tidbit through the Gmail MCP. He clicks "Send, Edit, or Decline" to tell the AI what to do.
- He can also ask Claude questions in the chat about the incoming user data.
- Because Tidbit is multiplayer, Sharif can step in to control the agent and who it contacts, and the whole team can see what the agents are doing.
- Further agents he describes: one for #hiring to track strong engineers who reach out, and one for #stripe that alerts him when someone notable starts a trial.

**Moving from Instagram Reels to TikTok**
- He and Hasan pivoted off IG Reels. They felt they were trying too hard to tell a story that was not there yet, and the "tell a story about what I'm building" format felt wrong.
- Hasan was only there for three more weeks. Farza calls it naive to think they could craft a new storytelling style in four weeks, since that would take at least 3-4 months. What they wanted was people flooding into Tidbit.
- He rejects the idea that short-form video is the same across platforms: "TikTok has an extremely different culture."
- On TikTok they started getting their first B2B customers: agencies, consulting firms and founders ("yes, they are all on TikTok").
- Cadence: 3-4 TikToks a day. Hasan holds the camera and hands Farza a script, and Farza just delivers it. His takeaway: "It's good to trust your team." Sharif also started making TikToks.
