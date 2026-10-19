## Scale turns rare events into daily events

- Jason's core claim: "scale causes rare events to become common." Things that happened once in a blue moon with 50 servers happen every week or every day with 2,000.
- Worked example from WP Engine, which ran over 1,000 servers hosting hundreds of thousands of websites in 2014 (he later notes it now runs about twenty times as many).
- Suppose a server suffers one fatal failure every three years (kernel panic, both power supplies failing). That is normal, not a quality problem to "fix."
- Three years is about 1,000 days, so with 1,000 servers there is one fatal server error every single day.
- On top of that come about 10 minor incidents with degraded performance, DDoS attacks in the data center, and other events that set pagers buzzing and mobilize Customer Support.
- A shrug and a manual reboot every six months is an appropriate "process" at small scale. At large scale the same event needs a real process.

## Scale changes how you handle problems, not just how many you have

- A dozen minor and major events a day means 20-50 customers affected every day.
- Notifying 50 customers a day breaks down quickly. Some contact emails are out of date, so those customers are not told.
- Some of those customers notice anyway, create extra support load, or post on Twitter that their site was slow or down and WP Engine "didn't even know it."
- The social media team then has to piece the story together, respond, and perhaps arrange a special phone call.
- Affected customers are more likely to leave a bad review. The 99.99% who had no incident have no reason to decide "today is the day I will go to a review site and leave a good review."
- So rare events create far more downstream work than operational fixes alone suggest.

## Fast onboarding makes every incident a first impression

- With 1,000 new customers a month, any given server issue probably hits a customer who has been around only a month or two.
- That produces a "bad first impression," which is harder to repair than an incident for a three-year customer who has "built up a bank account of patience."
- Customer age mix is therefore part of how scale amplifies problems.

## "Automate everything" is true but incomplete

- Jason calls "automate everything" a knee-jerk response with truth in it. Without automated monitoring you are blind, and without automated problem-solving you are overwhelmed.
- Some things cannot be automated:
  - A knowledgeable, friendly customer support team.
  - Responding to a complaint on social media.
  - Recruiting, training, rapport, culture and "downright *caring*" in teams awake 24/7/365, from support chat multitasking to clear phone communication to logging into servers and fixing issues fast.
- Rare things cannot be fully automated away, even technical ones. They are hard to define, so hard to monitor, and hard to repair without the forensic skills of a human engineer.

## Better per customer, harder in aggregate

- Any one customer has fewer problems per year than a year earlier, because processes, automation, hardware and human service keep improving.
- The difficulty shows up across the whole company: the effort needed to manage the worst-case experience grows non-linearly, not just the average experience.
- This explains why people complain about a company daily on Twitter while you have never had an issue with it. "Rare" means you probably never saw it, but at scale someone experiences it every day.
- Jason says this is no excuse for high-scale companies to have problems: "if we're not constantly improving on all fronts, the scale will catch up and overtake us."

## Budgeting for growth in early-stage companies

- A projection of 5x growth against 5x costs (or 3x costs, assuming savings at scale) is "guessing low."
- Plans that show 5x growth without budgeting for new hires in security, technical automation and specialized customer service areas are "heading for an ugly surprise."
- He also says to hire managers and executives who have been down this path before, "battle-hardened" with playbooks for tackling these problems.
- With high growth the surprise arrives quickly, and recovery means acting twice as fast again to climb out of the hole and then get ahead of it.
- His summary elsewhere: scaling is hard.
