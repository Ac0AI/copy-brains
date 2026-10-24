## Farza's pitch: AI agents make building software a matter of knowledge, not coding skill

- Farza argues the only thing separating people building cool things with AI from everyone else is "knowledge", not talent or creativity.
- He says a League of Legends music site that took him 6 months to code in 2016 (about 2 million users in two weeks) was rebuilt by AI in 6 minutes from one sentence.
- Coding agents differ from chat: you send one message and the agent works alone for 30-45 minutes, making its own decisions and needing no intervention.
- A build that once cost around $250,000 for a Noon-style app now costs "20 bucks at minimum, maybe like 100 bucks, 1,000 bucks at maximum".
- His proof: a Mac journaling app built in about 8 hours without knowing Swift, which got 2 million views and 10,000 downloads.
- His working method is to run two agents in parallel so he is never waiting on one.
- His 13-year-old self sold blank DVDs, and by 15 he made about $100,000 a year.

## Level 1: a personal landing page in Lovable instead of a resume

- Farza starts beginners with a landing page, since it is only a website that shows information.
- Prompt: "make me a personal website", then paste in the person's whole LinkedIn and Twitter. The agent infers what to highlight, and it linked projects to their real URLs.
- The page was live on the internet in minutes. The follow-up edits took one prompt each: a light/dark mode toggle, a mobile layout, and a fix for a hallucinated LinkedIn link.
- He says a page like this beats a resume for job hunting: "If I got this website and I was hiring, I would jump on a call with you".
- Mobile layout is "notoriously difficult" for engineers, and it took one sentence.
- The agent picks the language (JavaScript) itself, and you can name one if you care.
- He tells people to give the agent the correct link when it hallucinates, and to re-prompt when something breaks.
- Lovable's free tier ran out mid-demo, and he calls it great for beginners with no idea what they are doing.

## Level 2: a full app with accounts, a database and payments in Replit

- A full app differs from a landing page because it stores private user data, so it needs logins, a database, image storage and security.
- Replit created the database and picked the authentication service on its own from the request "visitors can make an account, all moments are private to the user".
- Prompting advice: "Describe what you want kind of like you'd be asking a real human being", as if briefing a software engineer.
- He sketched the UI in Excalidraw (a profile pic and date, a "new moment" button, a feed) and pasted it into the prompt as a PNG. Agents also accept a screenshot of a site to clone with changes.
- The example app, Moments, is a private visual journal: Instagram only for yourself.
- Replit built a landing page, signup, login and moment upload. It also added unrequested features such as a calendar and a "best moment" star.
- The agent can test its own app by driving a mini browser and recording video of the flow.
- He treats a human testing pass as non-negotiable. Bugs found live included a cropped image, a missing subscribe banner, a Stripe error and a build failure.
- Fix loop: tell the agent what is wrong, or click "debug with agent", and repeat until it works.

## Adding payments with Stripe and publishing

- Prompt: add a $5/month subscription button after login. Replit proposed connecting Stripe and created the checkout page.
- Test with the fake card 4242 4242 4242 4242 while in sandbox mode, then connect a real Stripe account tied to a bank account and publish.
- Publishing was a single button that deployed to the internet with a URL. A custom domain such as moments.live is about $30 a year.
- Costs seen live: the Flappy Bird clone cost 58 cents and about 3 minutes, and the whole Moments app ran about $3 of credits by the time payments were added.
- Replit is about $20 a month, versus about $49 for Claude Code as he states it.
- The live Stripe checkout broke on stage with "internal server error" and was never fixed. He guesses it was a key or account mix-up and says some bugs cost "10, 20, 30 minutes".
- Pricing idea he floated: free for the first 10 entries then charge, or show only the 3 most recent entries free and charge for the rest. "Dumbest thing possible" was simple $5/month.

## Fast prototyping with games, and iterating by talking to the agent

- He built a Flappy Bird clone with Batman as the bird in about 3 minutes for 58 cents, then iterated: "make it harder" (the agent raised gravity and pipe speed, shrank gaps and sped up spawning), then a daytime Superman skin.
- He notes the original Flappy Bird made $50,000 per day, and that anyone with a game idea can now build it in minutes.
- Agent edits are plain-language requests. The agent already holds the whole codebase and knows which file to change.
- He suggests being polite to the AI ("I say good morning to my AI every morning").
- The lightning button in Replit makes quick changes faster.

## Level 3: a native iPhone app with Claude Code and Xcode

- Claude Code is "the hardest one to learn, but it's the best one" and runs in the terminal on your computer. Replit and Lovable run on the internet, while iPhone app code lives locally.
- Steps: create a new project in Xcode (free), open Claude Code in that folder, describe the app, answer its clarifying questions, approve its file permissions, then press play in Xcode to run a simulated iPhone.
- The demo prompt was a workout tracker for progressive overload that logs workouts and weights, with a welcome screen and onboarding questions (weight, height). Claude Code asked about workout type and detail level, then built it in minutes with working onboarding, exercise logging and saved history.
- iPhone apps are "notoriously difficult" with their own language (Swift). You can test on your own phone without App Store approval.
- He compares the idea to the workout app Strong, which he says makes millions of dollars a month.

## Idea selection and the $250 a month target

- "You don't need a crazy innovative idea, you just need an idea that you enjoy that's useful to you."
- Don't make the next Uber or Airbnb, and don't worry that similar apps exist: "There's thousands of journaling apps" but yours is made for you and your friends.
- If 10 people pay $5 a month that is $50 a month and fine; software is built once and sold to everybody.
- Target he gives: $250 a month, meaning 25 people paying $10 a month. "If everyone here was making $250 a month, they'd be pretty happy."
- To start, find one person to pay, then five, then 10 to 25.
- His first-dollar story: at 13 he made $10 on eBay in about 5 minutes, compared with friends earning that in an hour at a grocery store.
- Perk from the event: a Replit partnership gave attendees one month free with the code "Farza", and Rork (a mobile app builder) offered one month free with "Farza Dubai".
