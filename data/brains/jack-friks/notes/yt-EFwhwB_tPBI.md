## Idea-to-revenue in 5 days: the build timeline and results

- Jack had the app idea on a Wednesday and the app went live on the App Store about 5 days later. It earned its first dollar the day before he recorded the video.
- It is a couples app: "love letters" sent to a partner that show up as home-screen widgets, plus check-ins, doodles and reminders. He built it for himself and his fiancée.
- The build took about 3 days at 6 to 8 hours a day.
- Jack says part of the speed was luck, and that the launch-day spike was a viral post and not yet a repeatable system.
- Launch results, 3 hours after going live: 100 downloads, 11 trial starts, and one yearly sub for $21 in profit.
- Results at recording: $42 in proceeds, 460 downloads, and 36 conversions (2 yearly subs, 34 trial starts).
- He estimates 50% or more of the trials had already canceled, leaving maybe 15 active trials at best.
- The trials are on a weekly plan at $4.99 USD a week.

## How Jack built a Swift iOS app without writing code

- He used Xcode and Swift, with Claude Code running inside Cursor (he used it as the editor shell, not Cursor's own AI). The project directory sat in the left sidebar and he asked Claude to build things.
- It was his first time using Swift. He says he hit few problems he couldn't search up or ask Claude about.
- He wrote no code himself. He says Claude was very good at the UI and usually got things right on the first try.
- Tweaking was slower because every change needs a rebuild in Xcode. Widgets were buggy to add.
- He double-checked the Firebase security rules himself, so that only owners can access their own data.
- Without a Mac, he suggests Expo and React Native, which he has used for three other apps. He still recommends a physical iPhone for testing.
- Steps he gives for doing something similar:
  1. Create the project in Xcode first to get a base.
  2. Open the project directory in Cursor or Claude Code and ask it to build.
  3. Work in test mode with a test bundle at first.
  4. Later, ask Claude to help migrate off test mode and prepare for production. It gave him many steps.
- App Store review is a time sink. App screens take time, and rejection is likely if terms of service and privacy policy aren't set up properly. Jack passed first try because he had done it before.

## Launch tweet and building in public as distribution

- His launch tweet got about half a million views, 1,000 likes and many replies. Jack says he has "quite a bit of followers" on Twitter.
- He credits it to posting about what he builds, which he does regularly because people find it interesting. He also tweeted the results 3 hours after launch.
- Twitter is not the target audience for a couples app, which fits Instagram and TikTok better. Even so, the Twitter followers drove the early downloads and trials.
- He says these numbers came from build-in-public posts and are probably not replicable in the same way.

## Jack's plan to grow beyond the launch spike: find a content format, then scale it

- Step 1: test content formats on TikTok. Jack made couples content from his fiancée's account, which he had warmed up with two other TikToks, and she made one video about the app.
- A direct ad-style video probably won't go anywhere, because people recognize it as an ad and don't connect with it. His non-ad tests also didn't perform well yet, because none had gone viral.
- Step 2: once a format works, repeat it. His other app, Curiosity Quench, passed 100,000 downloads. One format on it brought in roughly 30,000 to 50,000 of those downloads and got millions of views across many simple videos.
- That format converted modestly because the call to action sat only in the caption, but he kept repeating it once it worked.
- Step 3: make sure the format converts to paying downloads, not just views. He notes this app's first TikTok did not do well on that.
- Step 4: scale with automation. Once content performs when posted manually, post once or twice a day to TikTok, Instagram and other platforms through PostBridge, the tool he built for scaling his own mobile apps.
- Formats decay. His Curiosity Quench format works less well now because he hasn't iterated on it and it has been "milked dry".
- He says this system has grown apps to $100,000 before, and that it applies to consumer mobile apps, not B2B, which he calls "a whole different monster". His pinned tweet has a detailed outline.

## Why he builds his own apps

- Much of the project serves as a case study for PostBridge: "if I can't grow my own mobile app through PostBridge, how can I expect to help other people grow too?"
