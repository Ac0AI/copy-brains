## Marc's DataFast build: 90 days, AI-assisted, and the revenue it made

- Marc set out to grow a business analytics product (DataFast) to $1 million in valuation, which he defines as $25,000 MRR.
- He locked himself in a room for 90 days to build it. It was his 25th business.
- He says that without AI he "would probably spend an entire year" on it.
- DataFast is web analytics combined with revenue data. Setup is three steps: add a script to the site, connect a payment provider (Stripe or Lemon Squeezy), then get insights on how to earn more from traffic.
- He says AI wrote around 80% of his code. His own job became reviewing it.

## Using AI to build fast: Cursor, Claude Sonnet and a personal boilerplate

- Marc moved from VS Code with GitHub Copilot to Cursor, saying it is "so much better".
- He starts every project from his own existing codebase (boilerplate), then adds features on top.
- Workflow for a feature: he describes it in chat to Claude Sonnet. Example: showing users the viewport of their own visitors. That meant changing the tracking script, the database model, the API endpoint and the UI.
- The AI lists all the steps and he reviews them, because he knows how the code works. Then he clicks apply and continues.
- His stack:
  - Next.js for the app and the API endpoints
  - Vercel for hosting
  - Tailwind (his own components) for design
  - Resend for email
  - NextAuth for login
  - MongoDB for the database

Details on the stack:
- He switched from Mailgun to Resend because it is easier to set up. Resend lets him create audiences and broadcast to them, for example telling the 676 people in the DataFast audience that a feature shipped. Mailgun was only for transactional email.
- Login is Google first ("people want to click on a button and log in instantly"), with a magic link as backup.
- He expects the database to be the highest cost of running the business. His MongoDB cluster went from zero to a "decent amount" of cost within days.

## Ship the "24 hours version" and let users decide what to build

- Marc believes every startup has a 24-hour version. His examples:
  - Airbnb could be a Google spreadsheet.
  - Instagram could be a public Google Drive.
  - McDonald's could be a pop-up store.
- He asks: "if I had to launch tonight what would my startup look like?" Then he builds only the minimum needed to show customers.
- Shipping gives real feedback from the real world, not "my own thoughts created features". Sometimes people ignore what he shipped. Sometimes a user comment turns into a feature they love.
- His MVPs usually take about a week. DataFast took three months, and he says the full product is much bigger than that. He shipped as soon as he could because users then give him the right feedback.
- He built a feedback board inside the app where logged-in users suggest and upvote features and leave comments. He picks the most requested feature and builds it.
- He is also building a customer journey view. It shows each customer's profile, location, device and first visit. It also shows how they found the site and every action up to the payment.

## Landing page structure and conversion tactics

- Hero section: a big dashboard screenshot, a clear headline, a short explainer, a strong call to action and a product demo. He says the hero is what every visitor sees first and shapes signups and payments.
- Lead with the customer outcome, not the product. His product is an analytics tool, but the headline says "grow your startup", and the section below explains how.
- Other sections, in order:
  - a three-step "how simple it is" section
  - feature sections with a playable video for each core feature
  - a founder story section, with a personal video walkthrough
  - pricing
  - FAQ
  - a final call to action
- Personal touch: he thinks it matters for solo founders. He is "not a VC company", just himself.
- The login page autoplays a product video on the left side, to remind people why they are there and to increase conversion.
- Pricing:
  - Starts at $9 a month, based on events or page views.
  - A yearly plan gives two months free.
  - There is a 14-day free trial.
  - He normally does not recommend free trials. Here he used them because the market has many competitors and his product is not yet different enough, so he copied competitors' pricing.
- Design tip: he is not a designer. He borrows from sites he finds beautiful, such as the orange color, grayish background and border sizes from one site and the overall dashboard layout from Vercel. He publishes free design articles on his blog.

## Launch results and what they say about audience vs. product

- Launch: one tweet, about 20 days before filming, which got 700 likes. Marc has about 13,000 followers.
- Traffic: around 30,000 visitors since launch on October 1st, mostly from Twitter plus some bot and hacking traffic he does not want. Top countries were the United States, India and Europe.
- Revenue figures at the time:
  - $18 on the day he checked
  - $600 in the last 20 days, with 14 of those days being the free trial with zero revenue
  - MRR of $353
  - gross volume about double MRR, because many people picked the yearly plan, which he reads as trust in the product
  - churn of 28%, which he calls "a lot, like really a lot"
- Comparison: his friend Jack Friks (named "Jack freaks" in the transcript) launched a similar-time product with a tweet that went viral. He had about 88,200 followers and reached about $600 MRR, roughly double Marc's.
- Marc's conclusion: followers, luck and ad money help a little, but "the thing that matters the most is that you build a good product that solves a real problem".

## Two ways to find business ideas almost guaranteed to make money

**1. Scratch your own itch**
- Solve a problem you have. Someone else probably has it too.
- His examples:
  - People kept praising his personal website, so he built a small link-in-bio style tool so they could make one.
  - He kept repeating the same startup setup, so he created a code boilerplate for developers to ship faster.
  - Jack posted a video daily to four platforms, found it painful, and built a tool that posts one upload to Twitter, YouTube, TikTok and Instagram.

**2. Stop looking for ideas and copy something already working**
- Pick a market or group of people you care about, find a product people already pay for, and make it yours: cheaper, more expensive, better, prettier or easier.
- Paying customers prove a real problem exists.
- His first dollar online: a game for escape room businesses, on the logic that if he gives them $2 for each $1 they pay, they will pay. Starting in 2018 it made about $70,000, and he stopped working on it when he moved on.
- Ways to compete on a copy:
  - a niche segment (Calendly for veterinarians or doctors)
  - pricing (a one-time $99 Calendly alternative for people who hate subscriptions)
  - a better product

DataFast mixes both: he always wanted analytics with revenue data (his own itch), and people already pay for web analytics, so "I couldn't go really wrong".

## Marketing angle: why ShipFast made $1 million

- Marc says adding features alone will not get DataFast to $25,000 MRR. A better marketing angle will.
- ShipFast (his codebase for developers) made about $1 million in revenue in roughly a year. He says he does not think any other developer codebase has reached that.
- The reason: an untouched angle. Competing codebases were marketed on features ("there is that feature, there is this feature").
- He used an emotional headline about the benefit instead. Developers overthink and over-engineer, so ShipFast was marketed as the structure that stops them overthinking and lets them finally ship the side project.
- His closing advice: build something and share it publicly. A transparent post can go viral, as Jack's did, so "everybody has a chance if you show up on social media".
