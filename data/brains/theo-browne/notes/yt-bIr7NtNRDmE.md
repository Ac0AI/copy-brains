## T3 Chat: speed as the product

- Theo launched T3 Chat as "the fastest AI chat app you've ever used." The AI is not the interesting part; the experience around it is.
- He says it is "pure UX" and that this is his expertise: building very performant, local-first web apps and applying that to apps that deserve it.
- The goal is not that 5 seconds matter. It's that navigating and using the app should feel good.
- He compares it to Claude, where opening a thread or sending a message shows loading spinners and slow navigation. He calls that "a fundamental difference in experience."
- He used an early prototype as his only chat app for 4 days before launch and says he couldn't be happier.
- His benchmarks for the feel he wanted: Superhuman and Linear, local-first apps that feel great when you spend a lot of time in them.

## Pricing and launch decisions

- T3 Chat is free to use. The Pro tier is $8 a month and exists only for higher message limits.
- Pro includes 500 messages every 7 days. He says he'll probably change the amounts and email users when he does.
- He advises not paying for Pro until you hit the free limits. More paid features come later.
- Over 100,000 messages were sent in the first 12 hours, before the launch video was out.
- Users asked for model selection. He shipped it at no extra charge instead of locking it behind pricing.
- His reasoning: he didn't want to guess a perfect pricing model up front. He'd eat some cost to figure out what's right and let people have the best experience.
- He skipped the sponsor spot in the launch video because he wanted to show what he built.
- The product was built in about 5 days.

## Technical architecture for a local-first app

- Static app shell: the core app is a client-side React Router app, hacked into Next.js. The app route is imported with SSR disabled so nothing waits on the server.
- A rewrite in the Next config sends every path not resolved otherwise to the static shell.
- Standard Next server components remain only for terms of service, privacy policy and the auth flow.
- The server is only needed while streaming an LLM response. Otherwise the app works with no connection, and he could turn off Wi-Fi and still navigate.
- Storage: Dexie, a minimal wrapper over IndexedDB, whose raw API he calls "garbage."
- He built his own sync layer on top rather than using Dexie Cloud, and says he's "hacking the hell out of" Dexie to make it work.
- He combines local storage, data fetching and caching so there are no loading states, only stale states. Auth state is cached locally as a backup, not the source of truth.
- Example: a user who subscribes in another tab sees "free" until the next action upgrades them to Pro.

## UI performance tactics

- Navigate on mouse down, using a custom link component, instead of on click.
- Prefetch everything that could happen next.
- Lean on the React compiler and memoization.
- Aiden (creator of Million Lint, React Scan) helped tune rendering.
- Message history search is built locally.
- Planned: branching chats, file uploads, projects with context, local search, a dedicated desktop app with hotkeys.
- He wants a desktop app because he's tired of AI chats and dev mode being random browser tabs.

## When local-first is worth it

- He says this approach "isn't worth it most of the time" and isn't great for apps heavy on server-side work.
- It fits apps where the user mostly navigates, clicks around and does things without needing the server often, like a chat app.
- He notes it's the furthest he's strayed from the T3 stack in a while, and Next.js was not what helped here.

## Competition and copycats

- Asked what happens if LLM vendors just improve their chat apps: most products he builds would die if the competition woke up and did things right.
- His view: if companies were capable of it they'd probably have done it already. Pushing them to build better things usually gets them to try, and rarely to succeed.
- Examples: Zoom could make OBS integration easy and kill Ping; Twitch tried Guest Star and failed.
- He has watched many products try to copy Ping, UploadThing and others, and expects copies of T3 Chat.
- He's fine with that. If someone ships a better chat app he'd subscribe and use it. He built it because he wanted a better chat app, not to be the only one.

## Community-driven iteration

- He set up a T3 Chat channel in his Discord for feedback and bug reports.
- He has a feature priority list but will "immediately delay any of them" if users need other things more.
- His aim is the best AI chat app ever, shaped by users telling the team what works and what doesn't.
- He expects some backlash for "going down the AI pipe" and asks people to try the app before judging.
