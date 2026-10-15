## Marc's core stack: Next.js, React, Tailwind and daisyUI

- Marc says he never changes his tech stack. His 21 products get 250,000 page views per month and generate $1,753 a day (the title cites $52,600/month) on a "simple, non-fancy" stack.
- Front-end: ReactJS, Tailwind CSS and NextJS.
- He adds daisyUI, a Tailwind component library, to speed things up.
- He treats design trends as a distraction for solopreneurs: "Design trends give birth to new UI components every day." daisyUI's 20+ themes and full component set are enough.
- His UI workflow: pick a daisyUI theme, change the font, and the UI is ready.

## Back-end: serverless Next.js, MongoDB, NextAuth, Mailgun, Stripe

- He uses Next.js serverless functions as the API. There are no packages to install and no OS to maintain. He clones a Next.js project and has a scalable API for a micro SaaS "in seconds".
- Database: MongoDB Atlas.
  - He creates a free M0 cluster for each new project.
  - He pays $10/month for daily backups.
  - He uses mongoose on top to simplify queries.
- Auth: NextAuth, for example for a private dashboard.
- Email: Mailgun at $4/month. It is easy and free to start.
- Payments: Stripe at 3.5%. He notes that getting started is "a bit daunting", so he wrote a tutorial on handling subscriptions with Stripe, React and Next.js.

## Hosting and deployment

- He hosts all 21 apps on Vercel for $20/month.
- Deployment is automatic. He pushes changes to a GitHub repo and Vercel deploys them.

## Monitoring and analytics on a minimal budget

- Traffic metrics (visitors, pageviews): Plausible at $29/month.
- When something breaks, he checks the Vercel deployment logs.
- For advanced monitoring such as split testing, he queries the database with filters, though he says he rarely does this.
- His split-test method: add a random split test number to the DB model, then query the latest created users.

## Extras: AI tooling and AWS

- GitHub Copilot is his "junior developer" at $10/month.
- Some products use AI models like GPT-4. Cost varies with usage, and he spends about $20/month.
- For specific needs like image hosting or a CDN, he uses AWS at about $1/month.

## Tech stack doesn't matter: pick one and stick to it

- Marc says that when he learned to code, he struggled to choose a stack amid all the noise.
- His conclusion: "Tech stack doesn't matter. Pick one and stick to it. You'll get comfortable and ship much faster."
- His broader argument is that sticking to one familiar stack across 21 products gives speed and focus. The stack comes down to a handful of cheap tools, with total monthly costs in the tens of dollars per tool.

## YouTube as a distribution lever (solopreneur update)

- He started making one YouTube video every Saturday in January 2024.
- One video went viral on a Tuesday, with 55,000 views against a 5,000 average.
- It brought 7,000 new subscribers and got his channel monetized.
- It was also the 2nd biggest day for ShipFast. He says: "I didn't realize the scale of YouTube."
