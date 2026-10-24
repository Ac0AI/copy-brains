## Telegram's lean team: 40 engineers, automation, and self-built infrastructure

- Telegram's core engineering team is about 40 people (backend, frontend, designers, sysadmins). Pavel argues headcount doesn't translate to product quality: with too many people, "90% of their time will be spent on coordinating the small pieces of work they're responsible for."
- Idle employees demotivate everyone else, and they start inventing problems inside the team.
- Refusing to let people hire helpers forces automation. Telegram runs nearly 100,000 servers across several continents. Managing them by hand would take thousands or tens of thousands of staff, so algorithms run the fleet. He says this is more scalable, more reliable and more resilient to geopolitical change.
- He treats humans as attack vectors, so a self-running distributed system raises both security and speed.
- Telegram's stack is built in-house from scratch: servers, database engines, web servers and the programming language for the client API. He says this shrinks the attack surface. The one exception is Linux on the back end.
- He claims Telegram is the only popular messenger with open-source reproducible builds on both Android and iOS. Apps have been open source on GitHub since 2013.

## Hiring: coding contests, selective and slow

- Pavel hires through competitions: "What can be better than a competition?" Coding contests let anyone prove skill. If the data is thin, he repeats the contest with a new task.
- A candidate who competed in 10 contests since age 14-16 and won 8 is a strong signal of consistency.
- Contest tasks are real product work, such as a tricky profile-page animation for the open-source Android app. Telegram gets both a hire and the best solution.
- He prefers people who have never worked at a big company, because big companies "shift responsibility" and nobody knows who owns what.
- He prefers hiring users of the product over ex-Google profiles from LinkedIn.
- He promotes contests on his large social platforms, so finding engineers and designers is never a problem.
- He cares about A players versus B players. Firing one weak Android engineer made a third hire unnecessary and raised output. B players demote A players because everyone can see who isn't competent.
- Hiring bar: he hires only when "ultimately certain it's the best option." A careless developer can add inefficiencies worth tens of millions of dollars.
- He says the key trait is the ability to focus on one task for a long time.

## Speed, simplicity and craft as product principles

- Speed is a core priority. In 2009 Mark Zuckerberg's team asked why VK loaded faster than Facebook. Pavel says even a 50 ms difference is felt subconsciously, and faster code means fewer servers and lower cost.
- Scale argument: half a second of delay, times dozens of opens a day, times a billion users, is "centuries, millennia lost for humanity."
- He asks every developer to keep asking whether something can be done more simply and efficiently.
- He says getting rid of features is essential to scale. Existing users will ask for more complexity, so relying only on their feedback is a trap.
- Design details he describes obsessing over:
  - A four-color shifting default chat background. He reviewed several thousand variations, with pattern overlays that must not distract and must be vector-based.
  - Message send and delete animations. Deleted messages dissolve in a "Thanos snap" effect while neighbors close the gap at the same time.
  - Vector stickers of only a few KB to 20-30 KB, with 180 frames at 60 fps on all devices, launched 3 years 8 months before WhatsApp's stickers. He says WhatsApp used GIF/WebM instead.
  - Custom animated emoji: up to 100 per message without crashing the device.
- He wants animations to create a feeling without causing distraction. His test is whether users feel even a tiny bit of joy.
- The hard part is making it beautiful and fast on the oldest, cheapest phones.
- He says going back to another messenger after a few weeks of Telegram "feels like a serious downgrade."

## Shipping pace and being first

- Telegram pushes several meaningful features every month, and Pavel claims it out-innovates the industry.
- Examples he says Telegram shipped first, with competitors copying later (sometimes down to identical timestamps):
  - The auto-delete timer in 2013 secret chats. WhatsApp copied it about 7 years later.
  - Message replies with a quoted snippet and vertical line.
  - Message editing.
  - End-to-end encryption in secret chats, in 2013. WhatsApp rolled out around 2016.
- On deadlines, he accepts only ambitious ones. His benchmark: "I built the first version of VK in just two weeks. Why would you need three weeks?"
- He uses Telegram itself for all team collaboration, which exposes product gaps early.

## Encryption design: the trade-off behind opt-in secret chats

- Telegram has never shared a single private message with any government or agency. Cloud data is encrypted and the keys are split across jurisdictions. No employee can access private messages, and the design means a single point of failure can't be created.
- Pavel says he would rather shut Telegram down in a country than add a back door. The EU push to weaken encryption would just mean Telegram leaves that market.
- Secret chats are end-to-end encrypted but limited by design: no screenshots, no forwarding, no large groups, no multi-device sync.
- Reasons he gives for keeping end-to-end encryption opt-in:
  - Large communities of up to 200,000 members with persistent history.
  - Channels, high-volume bots, and multi-device support.
  - Not losing shared documents.
- Result: a hybrid where users choose the level of protection. He calls secret chats "the most secure means of communication today" for the paranoid.

## Monetization without selling user data

- Telegram was first profitable in 2024. Pavel says it has lost money for him personally and he has never sold a share.
- Premium subscription (launched 2022) is priced around $4-5 a month with 50+ extra features. It has over 15 million paid subscribers and more than $500M in revenue this year, and is growing fast.
- His principle is to keep all existing features free and add extras for business and power users.
- Ads are context-based (by channel topic), not targeted. He says Telegram leaves about 80% of potential value on the table by refusing to use personal data. There is also no newsfeed.
- Mini apps: Telegram takes a 5% commission on in-app purchases through Apple/Google payments. Developers earn from games and tools. He cites developers making $3M, $10M and $12M in months.
- Channel owners get a 50/50 split of ad revenue, paid out via TON.
- Gifts: blockchain-based collectibles shown on profiles, built on TON. The Snoop Dogg collection sold $12M in 30 minutes. Early items sold around $5 and later traded from $10,000.
- TON came from the 2018-19 project. His brother designed a sharded blockchain for scale, the SEC dispute ended the project, and the open-source community took it over. Now all payments, usernames and withdrawals on Telegram run on TON.
- He owns 100% of Telegram with no shareholders, which lets him hold to principles.
- Personal finance: he bought his first few thousand bitcoin in 2013 at about $700 each, held through the drop to about $300, and says Bitcoin funds his lifestyle. He expects it to reach $1M.

## Building VK: from a student site to a social network

- He started coding at 10 and built games at 11. Scarcity of games and entertainment pushed him to build, and he thinks scarcity drives creativity.
- At university he built a site with digital exam answers and lectures, then forums, friends lists, photo albums and blogs. It grew to tens of thousands of users across universities.
- A classmate asked if he was building a Russian Facebook. Seeing Facebook showed him which features to cut in order to scale.
- He built VK alone for nearly a year: backend, frontend, design, support and marketing (announcements and competitions).
- His brother's first-step advice was to build just the login module and prepopulate the database, so you can see the first working behavior.
- Stack: PHP, MySQL, Debian, memcached, then nginx. He scaled with extra servers, database splits and sharding.
- Around 2008 his brother and a friend rewrote the search, ad engine and messaging data engines in C/C++. That made VK among the fastest-loading sites.
- Growth brought DDoS attacks, which intensified on days of share-sale negotiations.
- He argues that alone for a year taught him every part of a social platform and how much one person can do. He now sets deadlines on that basis.

## Competition, focus and a niche as a route to success

- He credits competition for progress: in schools and in hiring, removing competition removes winners too, and kids then compete in video games instead.
- He cites education systems built on ruthless competition (China, South Korea, Singapore, Japan) outpacing those that removed it.
- Strategy on differentiation: don't copy the majority. Set your own agenda and pursue mastery in a niche over time until you are the world's top expert, since few people stay consistent.
- Information diet: curate sources instead of living on algorithmic feeds. Ask "who benefits from me reading this?" about news.
- Habits he links to productivity: no phone beyond occasional Telegram testing, long sleep, quiet thinking in the morning, and avoiding being "told what to think about" first thing.
- His view on being reachable: "the more connected and accessible you are, the less productive you are."
- Self-discipline: 300 push-ups and 300 squats every morning, gym 5-6 times a week, no alcohol, tobacco, coffee, pills or drugs for 20+ years. He says action creates energy: "do first and then feel."
- Leadership on Elon Musk: he says a founder must be ready to be unpleasant, insult inferior work and fire without remorse, since an entrepreneur "sacrifices peace of mind."

## Refusing government pressure in practice

- 2011: he publicly refused a Russian prosecutor's demand to take down opposition groups on VK. He expected prison, and the episode led to leaving VK and launching Telegram.
- 2018: Russia demanded encryption keys and banned Telegram. Telegram rotated millions of IP addresses automatically, and volunteers worldwide ran proxies ("digital resistance"). Telegram spent millions of dollars on it, and Russian infrastructure was disrupted by the blocking.
- Apple blocked Telegram updates for over four weeks. Pavel went public via his channel and was ready to withdraw from the Russian market. Apple approved the update minutes before his deadline.
- Iran: Telegram let proxy operators monetize with a pinned ad chat. He says about 50 million people there still use it despite the ban.
- 2024-25: after his French arrest, he says French intelligence asked him to restrict conservative channels around the Romanian election and Moldovan channels. He refused, disclosed it publicly, and never signs NDAs with such parties.
- Moderation: Telegram has published daily takedown reports for years, with hundreds of CSAM and terrorism channels removed daily and millions of pieces of content weekly. It protects peaceful speech on all sides as long as it does not call for violence.
- Principle: "I would rather lose everything I have than yield to this pressure."
