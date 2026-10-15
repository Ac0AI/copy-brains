## Why Theo builds around problems, not technologies

- Theo says his edge is that he "never cared about the tech as much as I cared about the thing I was doing."
- He argues engineers often pick technologies and push them as hard as they can instead of solving the specific problem.
- Origin: he learned code only to host a Minecraft server for friends. He learned Git to roll back damage from griefers, then web tech for the server site, then Java for plugins (WorldGuard, Bukkit).
- His rule: "Have the problem first." He believes building for the sake of building is fun for learning but will not carry you through the hard parts.
- His test: if someone handed you a working solution and you would not be happier, you are not doing it for the right reasons. He says he would be pumped if someone had already built Ping, but these problems are unsolved, so he builds it.

## Getting close to users before writing code

- At Twitch (about 2017 to 2021) he worked in a Slack room with the admins who stared at his reports tool 8 to 12 hours a day. Any small improvement was received well, and that feedback loop shaped him.
- On the mod tools team (he was lead engineer on ModView), the team were moderators themselves. He moderated big channels to feel the pain points firsthand.
- He became a content creator for the same reason: not to make a living on Twitch or YouTube, but "I need to understand the pain points if I'm going to build for them."
- Advice to would-be builders: be the user with the pain point. If you can't, spend eight hours a day talking to users. He does both, going live every Wednesday with 200 to 400 viewers doing code.
- Using his own product on his own show exposed the same issues his first users reported.

## How Ping's idea was validated

- The trigger: he watched Trainwreck's podcast stream and timed it. Over a third of the stream went to fixing the overlay layout when a guest left.
- Before writing code he talked to moderators and hosts of multi-person Twitch shows.
- In about two days he built a rough prototype: a video call app you sign into with Twitch, showing your Twitch name and holding positions in the call, so you can capture it in OBS.
- He showed it to a few creators. Gun Run asked how much he'd have to be paid to quit and work on it full time, because they needed it for VShojo, Iron Mouse, Silvervale and Project Melody collaborations.
- Gun Run then pushed him to build it directly into OBS via the embed system.
- Company incorporated in September, investment and Y Combinator in January. Customers he names: Linus Tech Tips, VShojo, The Majority Report, Elgato, Obsidian.

## Pricing and positioning: no free tier, serve existing creators

- Theo says Ping will not be free if it wants to hit its quality bar. Zoom, Meet and Discord can be free because their costs are low.
- Ping's cost base: thousands of edge servers worldwide with their own interconnects, plus multi-encoding (sending a 1080p stream and a 360p 15fps stream so callers get usable video without server transcoding).
- Comparison: "Adobe doesn't have a free tier, I don't see why we should."
- He notes there are many good free options in the space, so the paid product competes on quality.
- Critique of creator-economy startups: many build for people who haven't created before, because founders imagine they'd create if it were easier. Theo says content creation is hard enough that better tools won't make many more creators, "the hard part of starting a company isn't filing the documents, it's doing it every day."
- His conclusion: focus on improving workflows for existing creators. Value he pitches is giving producers time and stress back.

## Building on OBS: complement, don't replace

- Many companies tried to replace OBS in the browser. Theo's view: OBS works, so complement it with infrastructure an open source project can't reasonably fund.
- Ping is "the pipes for the remote TV studio," the way Ableton is the DAW for the remote music studio. Its focus is the space before OBS (guests, layout, names).
- He gives back: Ping is an OBS contributor in code and money, and as soon as money hit the bank he started distributing it to the open source projects it relies on.
- He sees a land-grab opportunity because the creator space still mostly ignores OBS's importance. He cites Apple contributing 15,000+ lines for native macOS capture and TikTok Live Studio being an OBS wrapper.
- On relationships: make something cool enough, stay open to connections, and don't force it. They arrive fast once the work is visible.
- Planned native camera app to fix problems like the same camera selected in browser and OBS crashing both. It works even if you don't use Ping.

## Build primitives, not opinions

- OBS's philosophy is primitives (scenes, layers, sources, audio tracks), and Ping copies it. He gives the Unix-box analogy: Ping is a box with a clear input (a video call) and output (individual streams).
- Example: Ping's embed lets you choose desktop audio or direct Ping audio in the browser source. Usage is "straight up 50/50," so both must be supported.
- He ships a full-screen embed for people who just screen-capture the whole call.
- He gives recommendations but does not encode opinions into the product.
- Payoff: users invent uses he never imagined. First user Gun Run did anime-avatar remote composition. Nicotine at Transmission Gaming recreates Star Trek live with 8 guests and 1,500 scenes in OBS. A Magic: The Gathering production person used it for remote production.
- His design intent was simply to let a host bring on 2 to 15 guests with names on their video.

## Trust and safety as product features

- Ping requires sign-in with Twitch so names are authoritative. If a link leaks, an impersonator can't pose as another creator. Theo says "when you hit accept... it's actually the person you're expecting."
- It also removes the host's burden of manually relabeling overlays when guests change.
- He took this level of security seriously from the start, drawing on his safety-team background.

## Where he thinks video production is heading

- Core belief: only a limited number of people have the drive to produce high-quality content, while video demand grows. He cites the average US company spending $15k a year on video production.
- He expects tools that let producers use live workflows for non-live content. His own show recorded via Ping into OBS even though nobody was going live.
- He predicts producers like the one running this show will take over what TV studios do, with the production van replaced by remote producers.
- He compares it to software, where small teams (Linear against Atlassian, Clubhouse at four people, Vercel on top of open-source Linux) take ground from huge incumbents using better tools on open foundations.
- Support for users: Theo personally engages, says users can DM him directly, and runs office hours in the Discord every Friday around 1pm PST.
