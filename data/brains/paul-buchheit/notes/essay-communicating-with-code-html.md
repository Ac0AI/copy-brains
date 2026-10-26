## Prototype instead of pitching

- Paul distrusts ideas sold through "brilliant speeches" and "slick powerpoints", partly because it's easy to overlook messy details or get caught up in details that seem important but aren't. He also gets bored by endless debate, and says he is bad at selling ideas that way.
- His alternative is to build the thing and watch the response: "Your code can be a very persuasive argument."
- He advises spending less time talking and more time prototyping, especially for people who aren't good at talking or slides.
- With a live prototype he didn't need to sell anyone. He wrote the code, released the feature and watched the reaction.

## Always have live code: how Gmail was built

- The first version of Gmail was written in a day. He took the Google Groups (Usenet search) code from his previous project and stuffed his own email into it. It only searched his mail, but it was live and people could use it.
- From that day until launch, every new feature went live immediately and most new ideas were implemented as soon as possible.
- This caused a lot of churn: the frontend was rewritten about six times and the backend three times before launch. The payoff was direct experience with every feature.
- Features that seemed like great ideas often failed once tried. Things expected to be big problems or very confusing turned out fine, and the team forgot the theoretical problems once they were in.
- Usually everyone, including Paul, ended up hating whatever was released (especially his own ideas). They always learned something and could move on to other ideas quickly.
- He lists this as one thing done "very right" in 2.5 years of pre-launch development, in which "we did a lot of things wrong."

## Content-targeted ads (AdSense): a bad idea proved by a few-hours prototype

- Targeting keyword ads to arbitrary web content had floated around Google for a long time. It was "obvious" but also "obviously bad": most people thought it needed fancy AI to understand content, and that nobody would click the ads. Paul thought they were probably right.
- Gmail needed a way to make money, and Sanjeev Singh kept pushing relevant ads. Paul was skeptical but thought it might be a fun experiment.
- How he built it, in a few hours:
  - Connected to the ads database, copied out all ads and keywords, and did light sorting and filtering with unix shell commands.
  - Hacked the "adult content" classifier he and Matt Cutts had written for safe-search. It was a separate code branch, so breaking its original function didn't matter.
  - Changed it to classify pages by which ad was most relevant, then loaded the ads data into it.
  - Linked it into the Gmail prototype UI and showed the ad in a small box.
- The code was "ugly and hackish". He released it to about 100 Googlers and went to sleep.
- The reaction the next day was negative; someone may have used the word "blasphemous". But the ads were amusing and often relevant. A lost-sunglasses email got a sunglasses ad, and a lunch menu got a balsamic vinegar ad.
- Others also found the ads surprisingly relevant. Content-targeted ads went from a lowest-priority, unstaffed project to a top priority. An "extremely talented team" was formed and a live beta shipped in roughly six months.
- It became a business with "billions of dollars in revenue (I think)". None of his prototype code reached the real product, but it showed the idea had real potential, which his arguments could not.

## Keep prototyping cheap as the product grows

- Making it fast and easy to prototype new ideas, especially bad ones, is important, and gets harder as a product scales.
- Contrast: stuffing random broken features into Gmail was easy with about 100 users who all worked at Google, but "not so simple when there are 100 million users."
- Gmail's solution: Gmail Labs, which lets thousands of Google engineers add new UI features.
- Google's "20% time" works for the same reason. For innovation, people must be able to work on ideas that are unapproved and generally thought to be stupid. The real value of 20% is "not the time, but rather the 'license' it gives to work on things that 'aren't important'."

## Public APIs let outsiders prototype for you

- Paul calls an API one of the best ways to enable prototyping and innovation on an established product.
- Twitter is his example: thousands of third-party clients, new ones written daily, and he believes a majority of Twitter messages come in through them.
- Reasoning: "no matter how brilliant you and your coworkers are, there are always going to be smarter people outside of your company."

## Use your API to find and hire builders

- At FriendFeed, the API did more than enable apps; it revealed great app developers.
- Gary Burd and Benjamin Golub were both writing FriendFeed apps with the API before FriendFeed hired them.
- Hiring takeaway: you don't have to guess who is "smart and gets things done"; you can watch it in the wild.

## Example: a FriendFeed prototype built in the browser

- Paul found it hard to judge an idea from words or mockups: "I really need to try it out." So he built a prototype of his "ideal FriendFeed" in his spare time.
- It is a single web page, a few hundred lines of HTML and JS, running entirely in the browser and fetching data from FriendFeed's JSON APIs. No server is needed, so others can copy and modify it easily.
- Ideas he tried:
  - Treat entries, comments and likes all as simple "messages".
  - Show only comments from the user's friends (which can be a little confusing).
  - Put everything in reverse-chronological order.
- He stresses it isn't "the future of FriendFeed", just a collection of ideas, some he likes and some he doesn't.
- He invited others to copy the code and build their own prototypes.
