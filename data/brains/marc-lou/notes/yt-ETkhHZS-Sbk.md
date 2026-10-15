## Stack philosophy: pick one and never change it

- Marc made the decision 3 years ago to "never ever change my text tag ever again." Since then he has built over 30 websites that get around 500,000 page views per month and make over a million dollars per year.
- He spent the first 3 to 5 of his roughly 7 years changing stacks over and over, and wishes he had known "tech stack don't matter." Customers "don't care about the invisible," only the problem being solved.
- Tech stack is "like a muscle": the more apps built with the same tools, the faster he ships, and the faster he ships, the more small bets he makes and the sooner he gets customers.
- On UI libraries specifically, he warns people will push you to switch to the new trendy one: "Don't fall for it. Stick to one UI library you like."
- He starts every project from the same base template, so buttons and components look and behave alike, then customizes colors per site.

## Frontend and backend stack

- **React**: used for all UI. He says it is not hard for small internet businesses; he uses only three hooks across his 30 websites. Libraries like Recharts make charts easy.
- **Tailwind CSS** for styling, with **DaisyUI** as the component library (toggles, forms, 30+ themes, customizable). Two sites can look very different (e.g. gradient style) while using the same DaisyUI templates.
- **Next.js** wraps everything. New page = a `page.js` file, shared layout = `layout.js`. This also gives him programmatic SEO pages: one project has a couple hundred pages ranked on Google, auto-generated from Next.js pages and layouts.
- **Backend**: Next.js API routes (`route.js` inside an `api` folder) with POST, PATCH, DELETE handlers in the same project. No separate server to create, maintain or update; it runs serverless.
- **Database**: MongoDB with Mongoose. Free plan to start, automated backups. Each project has a `models` folder (User with name, email, Stripe customer ID, etc., plus one model per data type users create). Endpoints do things like `User.findById`, then update.

## Hosting and what it costs

- **Vercel** hosts front end and API together. He has used it since about 2021: commit, push to prod, auto-deploy.
- Vercel pricing changed 6 to 12 months earlier and most people paid more. For January he would have owed about $1,000, roughly 50 times the prior year. Vercel waives his bill in exchange for feedback because he has 30 websites on the platform. He says he is not sponsored and is disclosing it for transparency.
- Cost driver: Datafast's API endpoints are called repeatedly by events from, say, 200 customers' websites.
- **MongoDB Atlas**: one cluster per project, a prod database, and a test database locally. Bill went from $9/month, to $67/month, to about $500/month after launching the web analytics tool in October. That is 10x the prior year. He thinks he can optimize but hasn't had time.

## Third-party services (auth, email, payments)

- **Auth**: NextAuth ("OJS" in the transcript), used on all sites. Google login plus magic links gives a full login system. Free and open source.
- **Email**: broke his "never change" rule to move from Mailgun to **Resend** for new apps (old apps stay on Mailgun). Reasons: friendlier UI, and it handles both transactional and marketing email. Because he builds in public, he broadcasts feature updates to audiences of people who signed up. Cost: about $60/month.
- **Stripe** for all payments: his most expensive and most important tool. He cites about a 5% cut, which he puts at $60,000 for the year, and is happy to pay it. He creates one new Stripe account per project, all owned by the same company.

## Datafast and the analytics he wants

- He built Datafast (web analytics) for himself because Google Analytics is "a complete headache" and other tools target developers, while he sits between developer and entrepreneur and wanted revenue tied to traffic.
- It shows traffic and revenue per site, period comparisons, and revenue per visitor. If he spends under $1 per visitor on Facebook ads, he knows he is still profitable.
- It attributes revenue to marketing channel, country and browser.
- The "journey" view shows one buyer's path (for example YouTube, return a month later, return 5 days later, then Twitter, then purchase).
- Next step: feed this data to an AI to find recurring pre-purchase patterns so he knows what to double down on.

## Supporting tools for specific use cases

- **AWS S3 + CloudFront**: images and video for products where users upload logos and photos (link-in-bio and portfolio builder tools). Costs maybe $5 to $10/month.
- **Upstash**: background tasks for long jobs, e.g. fetching all payments from a user's Stripe account for a revenue leaderboard (one user crossed $10 million). Paid plan about $30/month.
- **Currency API**: converts foreign-currency revenue to USD so the leaderboard can rank users fairly.
- **Namecheap** for domains; **Netim** for exotic TLDs it won't sell (like .st for shipa.st). Domains run about $20/year each, roughly $400 to $600+/year total.
- **Mux**: video streaming for his CodeFast course and, since then, for product changelogs. Adaptive quality (720p up to 4K) and auto-generated English subtitles. Downside: about $500/month for the course. Mux offers a badge program that covers up to $1,000 of spend for developer-content makers.
- **Capacitor**: wraps a native view around a web app so he ships iOS and Android apps without knowing native code. His habit tracker is on the App Store and ranks there.

## AI in the workflow

- About 80% of his code is written by AI in 2025.
- He uses **Cursor** as the editor with Claude 3.5 Sonnet, mainly chat, and Composer when he knows exactly what he wants. It can run terminal commands.
- Because it knows the whole codebase, he uses it to find security flaws and insecure endpoints, and to write documentation, changelogs and copy.
- Design trick: screenshot a component you like (e.g. a time picker) and paste it into Cursor with "recreate these components, change the colors, change the border radius."
