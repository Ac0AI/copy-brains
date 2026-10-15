## Start from a problem you personally have

- Jack's rule for picking an app idea: solve your own problem. He calls it "the easiest way to build something that's going to sell" and "the easiest way to be a user and build things that your users want because you want it."
- His idea for the 30-day challenge was "Doof" ("food" backwards), a food diary to quit junk food. It came from his own habit of eating badly and feeling worse for it.
- His sanity check before building: "would I pay for this?" If not, other people probably won't, so don't build it. The exception is a problem you don't have yourself, but he suggests starting with one you do.
- He chose a health niche because it is evergreen: people always need health problems solved and will pay for it.
- He argues ideas are worth very little. "The idea is only a multiplier for how good you execute." He rated Doof "good, it's okay, not amazing", but good enough because he will be his own user.
- He publicly shared the idea and the scope document on day one. Copycats can't be stopped once an app is live anyway, and they won't market as well or be solving their own problem.

## Scoping the idea in a one-page document

- Jack writes the idea down in a doc before building. The questions it answers:
  - What problem does it solve, and for whom?
  - How does it solve it?
  - Which 1-3 core features does it have?
  - What are the bonus features that would be nice to have?
  - What is the tech stack, onboarding and paywall approach?
- He feeds the doc into ChatGPT to flesh it out, and suggests the same for finding problems worth solving.
- Doof's two core features:
  - A food and mood log: what you ate, how it felt, and whether you regret it.
  - A coin flip with adjustable odds (e.g. 50/50) for foods you're tempted by, so there is a barrier before the junk food.
- Core assumption stated up front: the user already wants to change their eating habits. If they don't, the app isn't for them.
- The 30-day plan builds only the two core features. Bonus features come only if there is time.
- Timeline logic: get the app out within the first two weeks. App review takes days and he usually misses something, and warming up social accounts and marketing can take a week alone. Time to market matters more than extra features.

## Product and monetization decisions

- Onboarding: always include one. Describe the problem, then slowly show how the app solves it, before the paywall. This matters especially for mobile apps.
- Paywall: a hard paywall with a 7-day free trial, no free version. "Pay to use or download or just delete the app."
- He says a hard paywall with a free trial "tends to convert much, much better into sales" than freemium. His other app, Curiosity Quench, is freemium, and Doof is deliberately different.
- Privacy-first, local-only data: no authentication and no cloud sync, with everything in a local database on the device.
  - He admits it is partly laziness.
  - He also frames it as a selling point, since many people value not having data stored anywhere but their own device. He cites the app Habit Kit doing the same.
  - Tradeoff: deleting the app loses the data.

## Tech stack and boilerplate workflow

- Stack: React Native with Expo and React Navigation, which publishes to both iOS and Android. He will probably submit to Apple first, and may add Android since the code is the same.
- Payments: Superwall, which he says is the easiest to implement now (previously people combined it with RevenueCat). Superwall public API keys are fine to ship in the app, because environment keys can't be hidden in a built binary.
- He keeps a free boilerplate (shared in his Discord) with onboarding screens, a base layout, tabs and Superwall pre-integrated. Setup steps:
  - Clone the repo.
  - Delete the included iOS and Android build folders if they cause problems.
  - Install dependencies, then start with Expo.
  - Add your Superwall project's public API key.
- Cursor costs him about $30 a month, with occasional slow requests that he works around by doing something else while it answers. He has never connected his own API keys.

## Using Cursor to prototype fast, then scrapping the output

- Demonstrated workflow:
  - Paste the whole app scope document into Cursor's agent chat.
  - Ask it to design the UX and UI for the two core features and restructure the tabs as it sees fit.
  - Result in about 20-30 minutes: a log screen, a coin toss screen and a history screen.
- He also puts the app information into Cursor rules so the model keeps the context.
- His typing tip: sloppy typos in prompts still work. "Type slop and it still comes out pretty good."
- His honest assessment of the output: "this is slop", with too much margin and old UI left over. It is useful for seeing a baseline, not for shipping.
- Next step he planned: sketch the real UX in Figma as a "sketch pad", define colour themes and copy, and delete the existing UI before asking Cursor for more changes, so it doesn't iterate on a bad base.
- Logging UX idea: a quick slider-style scale per question (from strongly disagree to strongly agree), so a food can be logged fast, with a dashboard of foods that made you feel good.
- Simulator limits: features like barcode scanning need a physical device, so he skipped them for now.

## Marketing plan and numbers

- His view: "the marketing is like 75% of the work." You can build an amazing app, but without marketing you get no downloads, views or money.
- Plan: build the app, start marketing as soon as possible, and use Post Bridge (his own tool) to make and schedule the videos.
- Content formats he uses:
  - Simple 2x2 image-style videos from the content studio, made in a few minutes, which have reached millions of views.
  - Talking-head videos explaining how the app works, a few of which have passed a million views.
  - A branded page reusing one template. He cites about 600,000, 45,000 and 2.8 million views on three posts, and says it has diminishing returns from overuse, so he plans new templates.
- Account warm-up: make the account, warm it up, and look for viral videos for inspiration. He notes you may need a VPN depending on location, and he is lucky as a Canadian to get US reach. He planned to stream this later.
- Track record he cited:
  - Curiosity Quench: over 100,000 downloads using the guide pinned on his Twitter.
  - About 20,000 monthly active users.
  - Almost $1,500 last month with no recent marketing or coding, and several yearly subscriptions about to renew.
  - Post Bridge: about $113,000 CAD in the last month. He keeps working on it daily as his main business during the challenge.
- Building in public: he says SaaS can succeed without a personal brand (most aren't built in public), but putting your name out there is harder to skip and "claiming responsibility" helps.
