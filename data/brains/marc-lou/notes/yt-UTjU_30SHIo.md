## Starting point: a finished product, no validation beyond "I'd use it"

- Marc spent two months building DataFast, analytics for websites that combines visitor data (pages, countries, browsers) with revenue data (payments, revenue per visitor, best marketing channels).
- At launch there were four users: him and three friends. His only validation was "I would use the product."
- Goal: take MRR from $0 to about $20,000, which at a 4x multiple on roughly $250,000 per year equals a $1 million valuation. He documented it as a video series and guessed it might take under 3 years.
- Launch was a Twitter post. About 100 sign-ups on day one, 15 of them entered a credit card for the 14-day free trial.

## Early traction and pivoting positioning when conversion was low

- Day 3 plan: listen to users, build what they ask for (a feedback board with upvotes), hoping word of mouth gets him to $1,000 MRR.
- Day 4 he reversed it. Visitor-to-sign-up rate was low, so he asked on Twitter why people did not sign up.
- Finding: people compared him to other web analytics tools, and as a newcomer and solo maker there was "less trust" and "no clear reason" to switch.
- His response was to find a different angle: analytics that tells you what to do to make money, by combining web data, revenue data and knowledge of what the business sells, then using AI for insights.
- He later dropped that AI insight idea: on day 88 the AI pattern-finding was "just not good" and nothing was worth sharing. On day 100 he removed the AI Insight feature until more data could make it good enough.

## Revenue milestones and timeline

- Day 15: first payment, $9 (after the 14-day trial ended).
- Day 16: $400 in one day.
- Day 19: about $350 MRR, almost $600 in revenue because many paid yearly. He read yearly plans as a sign people like the product enough to commit for a year.
- Day 37: $670 MRR (2% of goal).
- Day 79: 60 active subscribers at peak, churn about 15%.
- Day 110: $1,000 MRR, 5% of goal.
- Around day 165: a live globe visualization feature, his favorite, launched on Twitter. He names "the globe" as the one thing that made the software grow, and MRR reached $3,000 around then.
- Day 331: $5,000 MRR. He had wanted to quit a month or two earlier.
- Day 371: $8,000 MRR.
- Day 477: $17,000+ MRR, growing faster than ever while he was distracted by another project.
- Day 512: passed $20K MRR after about a year and a half. New goal: $1 million ARR, about $83,000 MRR, four times the current level.

## What actually drove growth

- Customers doing the marketing: "Almost every single day, I see multiple user mentioning that they're using DataFast. They post screenshots. They share features they like." His job: "build features that are good enough for them to share."
- Shareable features: the globe with live visitors per city, a GitHub-connected view with comments shown as avatars ("people see those little avatars and make screenshots"), and the ability to share a dashboard with your own audience.
- Positioning around pain: he targeted a deep, painful segment of Google Analytics users and made revenue attribution the number one core positioning feature. He rewrote the website copy because that was where he was "losing a lot of people". He also updated the headline, calling it "a really big deal in marketing."
- Pricing: he roughly doubled prices once the product had more features, keeping existing customers on their old pricing because they "mean a lot" to him.
- Second plan: he split into a startup plan and a higher plan with new features, listing it as another main driver.
- Cross-promotion: buyers of his info products (ShipFast) got a discount on the software, aiming to convert existing customers. CodeFast, a coding course he launched around day 63, also made the most money of his life in a few days and gave him the same dashboard visibility.
- He says he reached $20K without "traditional marketing", only marketing he enjoys.

## Retention, trials and cost control

- After the 2-week trial, non-converters get 1 more week, then their analytics data (page views and events) is deleted, because databases are expensive.
- He sends an email when the trial expires explaining the 7-day deletion and another 1 day before deletion, to nudge indecisive users to decide.
- Weekly email summaries to each customer (day 52) with a growth insight.
- Added conversion rate per day so users can compare each day to the previous one after a change.
- Customer journey and goal-journey views show where a customer came from, how much they spent and how long to first payment. Data like first touch via Behance, later return via Google.
- Server-side tracking (day 79) for close to 100% accuracy; funnel feature; simplified onboarding with fewer clicks.

## Technical and operational mistakes

- Database growth: 3 million documents by day 6 slowed everything. Adding indexes fixed it; compound indexes on MongoDB on day 56 made the dashboard "super fast".
- Event tracking of scrolls and clicks added almost 4 GB per day. First MongoDB invoice was $289, and by day 92 about 50% of the bill was the database itself. By day 110 disk usage was around 100 GB, which he called a "time bomb" and "massive tech debt."
- Widget feature disaster (day 135): an iframe widget embedded on a site with about 2,000 visitors a day loaded the DataFast site, which itself had a widget. One page view became three billable Vercel page views and the bill was "absolutely insane." He removed the feature the next day and said it cost him about two weeks. The widget was 80% built with AI.
- Fake enterprise customer: his biggest customer on day 63 was a scam account.
- Security: a person found a vulnerability in public; Marc fixed it and paid a second reporter $300 after a private email, then tweeted about it. That tweet drew backlash and a week of people trying to hack him and bypass paywalls. He says his line is user data: "they can [mess with] my site if they want but they will never [mess with] my user data."
- GDPR: he made clear in the FAQ and terms that cookies are used and that anyone needing GDPR compliance should show a cookie banner, rather than selling it as a cookie-free alternative.
- He built a mobile app for DataFast "in a day" using AI.

## Operating principles and mindset

- Prioritization was hard: a Trello board of 50 tasks, conflicting user requests. He said one shipped feature (custom goals) was barely used because users could not find it, so he had to update the interface.
- Desire to quit around day 165: "I just want to give up on this project" because of the time versus results, yet around day 331 he credited not giving up, changing a lot and shipping a lot.
- His stance: "I'll just keep focusing until something happens" and "I just have to keep shipping."
- Ends with "Don't you dare give up."
