## Why Rob buys small startups instead of building them

- Rob built a portfolio of web apps and sites over several years, including an SEO keyword tool (HitTail), an ASP.NET invoicing system (DotNetInvoice) and a wedding-website builder (WeddingToolbox). The portfolio revenue was enough for him to shut down his consulting firm in 2008.
- He funded the HitTail acquisition from that portfolio revenue. It was done from a spare bedroom for "less than most people pay for a new car", not a mid-seven-figure deal.
- Rob argues that buying a product with an existing customer base can beat building from scratch. He promised to cover the full reasoning in part 2 and gives only the setup here.

## Rob's startup philosophy: modest, self-funded success

- Rob focuses on ideas with a "1000x higher chance of success" than the next un-monetizable social site. The payout he targets is about 1/1000th of a big exit.
- He rejects the tech-press script of "raise funding! exit big! lose control of your company and get fired by the board!". He prefers to work out what will make a person happy and pursue that.
- He believes this approach is more likely to make people happy and to make a difference for more than the handful who "hit the startup lottery" each year.
- He backs this with a manifesto, a book, hundreds of blog posts and MicroConf, a yearly conference on self-funding your startup.

## How Rob picked the problem and found HitTail

1. After co-hosting MicroConf in early 2011, he decided to build a SaaS app.
2. He made a short list of problems entrepreneurs need help with, since he knows that space, then ranked them by his own interest.
3. A top-3 problem was that entrepreneurs need more organic search traffic.

- Rob argues that many successful startups, far more than people hear about, are masters at SEO. It is an unsexy channel that can produce huge amounts of highly targeted, high-converting traffic.
- Depending on the market, he says SEO ROI can beat any other traffic source. Viral traffic is the most common exception.
- He realized he had used HitTail since 2006, and it was nearly abandoned. It analyzes a site's visitor stream in real time and lists the organic keywords to target.
- Rob's rationale for HitTail: a loyal, long-term customer base stayed through a five-day outage in early 2011 and semi-regular downtime in 2010 and 2011. The core recommendation algorithm had never stopped working even as everything around it failed.

## Negotiating and closing the HitTail deal

- In early June 2011 Rob cold emailed the owner through the website contact form. She replied within 24 hours and they began discussing an acquisition.
- The site had once been marketed by a high-end NYC PR firm and covered by Inc Magazine, BusinessWeek, The Wall Street Journal and PC World. It was then neglected, and the technical problems grew as the original developers left. The owner was open to selling.
- Rob made an offer and she countered at 5x the amount. He wasn't willing to pay "dot com" pricing. Based on what he knows about rehabbing applications, he held to a firm figure.
- Why he held firm: the site made revenue but was losing customers, and its hosting bill was heavy because of real-time analytics performance needs.
- It took three months of emails to settle terms. He then had a lawyer draw up an agreement and used an escrow service (Escrow.com) to move the money.
- He became the owner at the end of August 2011 and describes himself as "running scared".

## Step 1 after acquisition: fix the infrastructure first

- The server hardware was "sketchy at best": ancient hard drives, Windows Server 2003 not refreshed for 5 or 6 years, and two SQL Server databases with no visible maintenance (no re-indexing) for 3 years.
- The system still handled 10-30 database inserts per second, every day, for years. The database held over a billion rows and had not been touched since 2008.
- Rob hired a DBA on oDesk and moved the 250GB database to new cloud server infrastructure. It took a few weeks of prep and an all-nighter, after which he felt much better about stability.
- The lesson he shows is to stabilize the thing that is failing customers (downtime) before polishing the front end.

## Step 2: plug the funnel and fix broken features

Rob found these leaks in the sales funnel:
- Many 60-day trials never ended, because no script closed them. People used the product free for years.
- Trial users received zero emails: no reminders to check their suggestions and no inquiry about why they never installed the code.
- The site made it easy to wander off. Nothing moved visitors from content pages back to the main marketing site that promoted the product's benefits.

Product problems:
- He commented out 3 or 4 "top line" features listed on the pricing page, because they hadn't worked in years and no one used them.
- The suggestion algorithm was running at roughly 10-20% effectiveness. Google had changed how it passed URLs in the querystring, so many keyword suggestions were missed.
- The home page looked unchanged since about 2006.

## How Rob ran the turnaround

- He hired a developer and a designer, both contractors ("since I don't hire employees"), and did "quite a bit of coding" himself.
- He found them via oDesk and calls them his "ragtag team of intrepid oDesk contractors".
- The redesigned home page launched three months later, about 4 months after the acquisition. Rob says it was converting very well early on.
- He sums it up as bringing a "dying web property" back from the dead in 4 months. He points to a 90-minute TechZing interview (episode 165) for more detail.
