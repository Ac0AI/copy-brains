## Building Doof with AI-assisted "vibe coding" in React Native and Expo

- Jack builds Doof, a food diary app for tracking what you eat and how it makes you feel. He built it for himself after noticing chocolate gave him headaches. The App Store name is "food diary to quit junk", which fits the 30-character limit exactly.
- The stack is React Native and Expo. Jack made a boilerplate and shares it through his Discord. Data lives in a local Expo SQLite database, so the app works fully offline with no server.
- He does almost no hand-coding on this app. He says: "I'm not doing any coding today it's called Vibe coding we are just asking cursor what to do and then it does it."
- Fast Refresh shows JavaScript changes in the simulator immediately. Installing a package needs a rebuild of about a minute.
- He ran this as a live stream, "day 3" of a 30-day build. He skipped the day 2 video because he was lazy, and says he got more done by not worrying about it.
- He wants to track his own food and feelings, then use that history to decide what to eat next.

## Working with Cursor and AI models effectively

- **Model choice:** Jack uses Claude 3.5 inside Cursor for most work. Claude 3.7 "adds so much data" and extra features he didn't ask for, even with Cursor rules telling it not to.
- **Database risk:** 3.7 helped build the initial database. It later "took some initiative and it broke and it dropped my table" with data in it. He now has import/export, so he can export data before risky changes.
- **Docs-driven setup:** For Expo SQLite he pasted the documentation into Cursor, and also copy-pasted the whole page, because "it usually doesn't read the links I send." It worked in about two tries. The first errors went back into the chat and it fixed them.
- **How to copy docs:** Highlight only the documentation content, from the top header to the bottom, and skip the rest of the page.
- **Be specific when it fails:** Cursor repeatedly failed to show a saved "was this a craving" value. The cause was a data-type mismatch: the database stores a Boolean as 0/1 and it wasn't converted back. Jack fixed it by telling Cursor exactly what to do.
- **Accept or reject per change:** He often rejects unwanted additions, such as an extra delete button, and re-prompts with a narrower instruction ("I just want the answer if any to be toggled in the edit... don't change card data").
- **Stuck sessions:** When Cursor stalled, he stopped it, restarted the app, and opened a fresh composer or chat session.
- **Tailwind:** He doesn't use it for React Native and sticks to default styles. He says simple styling goes a long way.

## Advice for beginners starting their first app

- If you have no development experience, describe your idea to ChatGPT, bolt.new or v0. Jack calls v0 and bolt.new the best bets.
- Follow what the tool tells you, get something up and out there, and learn as you go.
- Expect to read a lot of documentation and make mistakes. He says "that's like the only way to really get through that is to learn and if you're interested enough you will go through that."
- His own first app took months, so he tells beginners not to get discouraged.
- **Simulators:** An iOS simulator needs a Mac with Xcode. Without a Mac, use the Android simulator, which "kind of sucks" but works. Jack built his first app on it.
- **Physical phone:** Some features can't be tested on a simulator, such as on-device ML, so some people test on a real phone.
- **Expo Go:** It is very limited. You can't use custom SDKs such as Superwall or RevenueCat, "pretty much the things you're going to need."

## Designing the coin-flip "chance" feature to curb temptation

- **Purpose:** The feature adds a last layer of friction before eating something you shouldn't. Jack wanted to flip a coin to decide whether to eat a chocolate bar, but never has a coin on him. His paywall already advertises a "flip a coin" feature.
- **Iterating with the AI:** The first Cursor version worked but was clunky, with flipped check marks and always saying "go for it." Jack asked for "more dramatic," a bigger coin and a cleaner, lighter UI.
- **Assets:** He first tried custom Figma coin images (check, X, blank), then switched to emojis, which "feel like not serious" and looked better than the AI-looking version. He wants proper heads/tails coin icons later and found free animated flip-coin graphics on Rive.
- **Final mechanic:**
  1. The user types what they're tempted to eat.
  2. They call heads or tails (heads by default).
  3. They flip the coin.
  4. If they call it right, they can eat it. If wrong, they skip it.
- **Why 50/50:** He dropped odds adjustment, such as a 20% chance, to keep it simple. Earlier he had considered a max of 50%.
- **Cooldown:** He chose a 30-second cooldown (first thought was once per hour). The input is disabled after flipping, so users can't change their call. Users can still ignore the result, so it's one last nudge, not enforcement.
- **UI polish:** The flip button sits sticky at the bottom, with result info above it. He plans to auto-fill the food name from where the user taps in, and to prompt users to log the food after a "yes."
- **Priorities:** He says the coin flip "doesn't have to be that great" and should stay clean and a bit fun. He chose it over the filtering system because it's "more fun to watch."

## Product principles for the food log and dashboard

- **Core value:** The app isn't meant to say what's healthy. It's for logging how your body reacted so you can decide with more information next time. People forget how bad something felt, so a note like "do not eat this again" sways later decisions.
- **Log fields:** Food name, how much you liked it, whether it was worth it, whether it was a craving, notes, hunger, digestive comfort, sleep quality, mental clarity, time eaten and location. A daily reminder is time-selectable and can be turned off.
- **Names over photos:** He rejected photo-based auto-categorizing. It's a lot of work, and he wants to type the name he'll remember. A photo of his chicken stew labeled "chicken stew" wouldn't match how he'd search for it. Search already covers notes.
- **Rating scale:** He tried sliders and 1-10 and didn't like them, so he kept 1-7. He chose 7 because 6 has no middle.
- **Dashboard plan:** The current dashboard is "terrible" and will be redone. He wants it to show:
  - which foods most often make the person feel good
  - which foods they should avoid
  - suggestions like "when you eat fruits in the morning you have a much better mood"
- **Local AI idea:** An offline local model could generate insights at zero cost. He notes many Android users have older devices that may not run one well.
- **Notifications:** After onboarding, a popup explains daily reminders. If the user denies permission, small text points them to device settings to enable it.

## Monetization, launch and distribution plan for Doof

- **Hard paywall:** After onboarding and personalized insights, users hit a paywall. They can exit but can't use the core features without paying. Jack says: "I have made free stuff before and... no one pays so trying to be profitable business here."
- **Marketing:** He'll market Doof fully organically through social, with no ad spend at first, and maybe hire influencers later. He'll use his own app, Post Bridge, for posting. He hasn't yet worked out what the videos will be about.
- **Branding:** A friend, Desmond, noted that an emoji-style logo, like the coconut emoji in the app "Coconote," can build familiarity and trust. Jack compared his own watermelon logo with a banana emoji and kept his green watermelon logo, noting the icon looks better zoomed out.
- **Store submission:** He plans to also publish on Google Play, calling it about an hour of extra work. Google Play needs a closed-testing release before production for new developer accounts, which he found annoying and may skip.
- **Working style:** Streaming is a build-in-public channel. He admits he doesn't know how full-day streamers do it, and notes it's "its own game" apart from building a business.
- **Time split:** He also runs his SaaS (Post Bridge), so he streams for short stretches and then goes back to other work.
