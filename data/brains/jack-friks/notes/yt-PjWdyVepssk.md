## Why Jack is rebuilding his app's onboarding and making the paywall a hard gate

- Jack's food-mood app "Doof" was live on the App Store, but its onboarding was weak. It had 3 sell-the-problem screens, 5 questions, a loading animation, tips, and then a paywall. That is about 9 interactions in total.
- A tweet pointed out that he had too little onboarding and a skippable paywall. He admits he "made a decent onboarding" but has "no great system to capture people who are downloading my app and make sure that they are ready to buy by the time that the paywall comes up."
- Status at the time:
  - Almost 400 downloads in total.
  - 62 new users.
  - No revenue yet.
  - 26 trial starts in the last 7 days, and most were cancelled right away.
  - Zero conversions in the last 24 hours.
- He had already removed free trials. His reasoning: get the true conversion rate of the onboarding first, then A/B test trials. A 7-day trial delays the conversion signal.
- His trial view: 3-day trials are okay, but 7-day trials have worked better on his other apps (including Curiosity Quench). He plans to add a trial back and test it after the onboarding converts.

## Hard paywall setup with Superwall

- Jack removed the X and the "skip" paths. After onboarding, 100% of users see a gated paywall they cannot pass without paying. The coin-flip feature and the second food log also trigger gated paywalls.
- Discount flow: users cannot dismiss the paywall. If they start a purchase and cancel it, they get another discount offer. The discount element sits at the bottom of the paywall.
- Apple approves hard paywalls. His rule: put a disclaimer in the app description and "make it abundantly clear that there is paid content." Apple approved his paywall and the app.
- Superwall campaigns use triggers placed in the app, such as a "flip coin" trigger. You can:
  - Remove the paywall entirely.
  - Show it to only 50% of users.
  - Show different paywalls to different groups and compare results.
- Paywalls and gating can change over the air with no app update.
- He picked Superwall over RevenueCat because RevenueCat has very limited paywall functionality. He used both together on Curiosity Quench, but on a fresh start he uses Superwall only.
- He built the paywall from a Superwall template in about 1 to 1.5 hours, adding his own copy, logo, and products.
- For plan tests (for example quarterly vs yearly, or yearly vs monthly), split traffic 50/50 and run it for 1 to 2 months. Keep whichever makes more money. He says Superwall makes this easy.
- Setting up Superwall and RevenueCat took him 2 to 3 weeks the first time.
- His stack: React Native, Expo, and Superwall, with no login. Data is local only, which saves him auth work.

## Why longer onboarding helps conversion

- Jack's reasoning: a longer flow is a time investment. By the paywall, users have already put in a cost, so they are more likely to pay.
- Questions about goals help for two reasons. People who state a goal are more serious about it, and the app can affirm them for it.
- A fake "calculating" stage after the questions makes the result feel more tailored and valuable, even though the result is ready instantly. He calls it an easy way to raise perceived value.
- Benchmarks from his research: he screenshotted every screen of competitor apps by downloading them (he skipped Mobbin as too costly):
  - Slide counts of 43, 36, 177, and about 8.
  - Death Clock asks about 25 questions. Much of that is time investment, plus a shareable result.
  - Quitter has about 40 slides, goal setting, and carousels. It uses a hard paywall with no trial, only yearly or monthly.
- His target is to roughly double his flow (about 9 to about 18 steps). He says 177 slides "works but it is crazy."
- He says his own taste leans toward showing how the app helps before asking for money. A flow that only says "here's your problem" and then asks for payment loses him. Part of why he wants this change is that the old flow never showed how the app solves the problem.
- Key principle: "a lot of how effective this app is going to be to help people is based in the onboarding. Do they believe it's going to work... can they see how it directly impacts their life."

## The new Doof onboarding flow

1. Welcome splash with a get-started button. Copy: "find the foods that fuel your body best." Lowercase, matching the app's playful name. Below it, a note that no login is required and the user's data is 100% theirs.
2. Name input. Stored locally. Jack notes some apps ask for a name and never use it. It still eases the user in.
3. Goal selection with about four preset goals and a custom entry.
4. A congratulations screen. Draft copy: "Cheers to you."
5. A feature carousel with 8 screens, using his App Store screenshots. Each has a title and subtitle:
   - Log food: "log once, learn forever."
   - Track how your food makes you feel.
   - A history screen: "your personal food memory bank" and "see your history, change your future."
   - A dashboard of food moods and streaks: "your food mood patterns tell a story."
   - The coin flip: "tempted by junk? let the coin decide your fate." Subtitle: stack the odds in your favor.
   - Recommendations from past logs: "log the good, get more good." These come purely from the user's own past logs, with no AI.
   - Whole-body impact and hidden food patterns.
   - Filter which foods fuel you and which drain you.
6. A "ready to find your fuel" screen: answer questions in 30 seconds to get personal insights.
7. A privacy-first screen: users own their data, and can export and import it.
8. The existing mood/energy questions, the insights, and then the hard paywall.

- Jack also planned to ask for an app rating in the flow.
- The screenshots were reused from the App Store listing because he had already spent time on that copy. He reuses them as proof of what the app does.
- Onboarding messaging should match App Store positioning. People download for specific reasons: track how food feels, avoid repeating mistakes, and find foods that fuel them best.

## Copywriting and design workflow

- Copy takes iteration. Jack spent about 1.5 hours with ChatGPT and his own brain on the headings, and made about 10 versions of each slide. He says "you're going to have to iterate through like 10 different versions."
- He asks Cursor for subheading ideas because it has his project context. He gives it the title and the screenshot, then picks the best of the options.
- His mockup process:
  - He builds a very rough layout in Figma, using the competitor screenshots as references.
  - He feeds the mockup and screenshots to Cursor, then tweaks by hand where Cursor fails.
  - He says it is "mockup time, not design time," and that he is a Figma beginner.
- Cursor tips from the session:
  - Tell it exactly what to change and to touch nothing else. Otherwise it rewrites unrelated screens.
  - Give it good references and keep prompting for small changes, adjusting with your own taste.
  - He had issues with Claude 3.7 doing things he did not ask for. He considered switching to 3.5.
  - The first Cursor attempt looked awful, so he rejected it and gave a reference image instead.
- Technical details he asked Cursor for:
  - Bottom buttons in the same position on every slide.
  - Lowercase copy.
  - A fix for the keyboard covering the inputs.
  - Auto-capitalization turned off.
  - A vertical-offset variable per slide image.
- The change requires an app update, so he planned to push it to the App Store and start marketing the next day.

## Marketing and launch advice Jack gave

- He is building the app as part of a 30-day challenge (day 9). The point is to show how easy it is to market a project, and that marketing matters more than the app itself.
- Organic short-form video on TikTok and Instagram is his go-to channel for getting free users. Watch what performs on each platform, make similar videos, and reuse them across both.
- Competing apps do not rely only on paid ads; they have organic content that performs. Content must be valuable, not ads.
- Launch early: "if it's crap you can just fix it later." Waiting risks burnout or never launching.
- For a Play Store requirement of 12 testers, he suggests a TikTok video asking for free testers, with a link in your bio to collect emails.
- Ideas: build something you will use yourself, and paste your idea into ChatGPT to ask how to build it as a web app.
- Getting started: open Cursor, Bolt, v0, or ChatGPT and start building, or follow a tutorial. He learned by building with ChatGPT and reading docs only when stuck, with no courses. He had been coding for about 1.5 years.
- He doubts "vibe coding" works for the long term without thinking, but says AI coding is not going away.
- Post Bridge: US-based accounts must be warmed up in the US before posting through it. A VPN can be used just to connect the account.
- Designer help: his Curiosity Quench screens were doodled by a freelance designer. For Doof, he used a Superwall template and his own work.
- Testing: he uses the Xcode iPhone simulator (requires a Mac), a TestFlight phone, and App Review as a bug catcher.
