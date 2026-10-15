## Why Pieter says "indie hacking is dead"

- His point: indie hacking started around 2014-2016 (with Product Hunt) and became mainstream. Like "remote hacking" would have died once Covid made remote work normal, it's no longer "hacking", just normal business.
- Big tech and VC-funded AI startups now follow him and other indie makers on Twitter. If he launches a feature, they ask their developers to build the same one.
- He sees indie hackers sleeping in a $600/month pod hostel in San Francisco to ship AI startups, which he takes as proof it's mainstream.
- Consequence: more competitive, more saturated, harder. He competes with companies that raised $500 million.
- Recession and burned-out VC-funded founders make lean, bootstrapped building a necessity. Several VC-funded friends say their next startup will "preferably" be indie.
- Advice for beginners: "you should always do the opposite everybody else is doing." Now that indie hacking is mainstream, go where nobody is going and "look for the part of the grass where nobody is".

## Moats, margins and platform dependency in AI startups

- Moat is the big problem for AI startups, including VC-funded ones he talks to. Retention (churn) is very high and defensibility is low.
- Everyone uses the same models (GPT-4, Llama, Stable Diffusion), so it isn't proprietary tech. The stuff built around the models is proprietary, but a smart competitor can copy it in about three months, a slower one in six months to a year.
- Competition pushes prices down, which is good for customers but pushes profit margins toward zero. GPU costs keep his AI margins low, and Nvidia can't produce enough chips.
- Supplier risk example: his fine-tuning provider charged $3 per training. After seeing his tweets about revenue, it raised the price to $20 per training while he sold for about $25-30. For a month they captured the money and he couldn't switch. Lesson: when you look successful, suppliers raise prices.
- He moved to Replicate, which he says is helpful and only decreases prices.
- Mitigation: abstract providers so you can swap, and note that platform dependency is lower now because there are many API providers.
- Running your own GPU servers is a level up, but needs Python skills he doesn't have, so he hired an AI developer.
- Stress: AI moves weekly, so you must implement new breakthroughs fast. He lifts (deadlift, squats, overhead press) to manage anxiety.

## Validate manually before writing code (Avatar AI)

- Origin: he built interior AI, then tried fine-tuning on his own photos, tweeted the results, and it went viral. The next day he built Avatar AI.
- First version had no code: an index HTML page with example avatars and inputs, a Stripe payment link, and a Typeform after payment that collected photo uploads.
- He fulfilled about 100-200 orders manually: download photos, upload to the fine-tuning platform, download results. He worked all night, then started automating on day two. It took about a week to be fully automatic.
- Price was about $30 per order, which he describes as roughly $3,000-6,000 for a night's work.
- Result: about $400,000 (maybe half a million) in a month or two. Big VC-funded companies cloned it within a month and got much bigger (he cites about $40 million).
- Principle: "I'm not going to build anything until there's customers." This comes from spending about a year on a YouTube analytics startup around 2013-14 that nobody paid for.
- Rule of thumb: if automating takes longer than doing the thing by hand, just do it yourself until volume forces automation (he references the XKCD chart).

## Keep the tech stack simple and ship fast

- His stack is PHP, jQuery and SQLite. He says the "bad code" meme is exaggerated for viral effect. The code is structured, commented, in multiple files, on GitHub, with workers and a clear folder structure.
- He cites the Lindy effect (Taleb): old technology like PHP is proven because it has lasted. New tech needs more distrust.
- He argues web agencies and framework companies (he names Vercel's evangelists) push new tech as a sales and growth cycle, making developers think they need it.
- For entrepreneurs the priority is getting customers who pay, not elegant or over-engineered code.
- On speed: "I'm not a good developer but I'm really fast." He repeats himself rather than abstracting early; if code repeats ten times, then write a function.
- Landing pages: beautiful gradients and fancy design are "a red flag" before validation. Google and Facebook started very ugly. Behind 400 no-upvote Product Hunt launches are developers who spent six months on a perfect product.

## Learning his limits: hiring, SEO and TikTok

- Until this year he did almost everything himself except customer support and chat moderators, plus a server person. He now says he hit complete limits (Python, GPUs, marketing).
- He hired an AI developer for the models, and a person for TikTok marketing.
- Danny Postma (Headshot Pro) is a peer: they swap tech tips every few weeks. Danny is a strong SEO guy who builds startups from keyword research (found that LinkedIn headshots drove most searches). Danny beating him in revenue pushed Pieter to learn SEO: look at what keywords people search and make sub pages.
- One TikTok influencer posting about photoai.com took his MRR from about 12K to 40-50K, and it stayed. Influencers had a much bigger effect than press, which he says does almost nothing (nobody clicks the logos).

## Distribution advice in 2023 and Twitter dynamics

- If starting today he probably wouldn't use Twitter/X. He'd go to TikTok, see what people want, and document the journey ("I'm starting out, I want to make a startup and pay my rent, every day I'll make a video").
- Find startup ideas in subreddits ("every category becomes a startup", like the Craigslist meme); the Reddit of the day is TikTok.
- Catch technology waves and add a front end: new tech is hard to use, so making it easy gives a first mover advantage. Nomad List did the same by collecting scattered travel blog info. When ChatGPT and Stable Diffusion launched he scrambled to build many things and see what stuck, because waiting six months would be too late.
- Twitter's algorithm now tests tweets early (watch time) and pumps winners; many tweets get almost nothing despite 300K followers. Product updates get fewer views. Long posts get more because of dwell time, so he writes blog posts there.
- Packageable first sentences help: people who answer in one clear sentence and then go long form get clipped and get more views.
- He tweets honestly, with "strong opinions weakly held", and says most of his friends came from Twitter. He avoids "clickbait" listicles.

## Long-term businesses vs hype, and selling

- Nomad List: about nine years old, usually $40-60K per month with low costs. He expected it to fade like his electronic music YouTube channel did. He is working on a 3D globe and would return to improve it once AI backlog is done.
- Contrast: AI is stressful and gimmicky (Avatar AI "felt so kitschy"), while Photo AI is meant as a long-term photo studio where people can have unlimited AI photos without a camera.
- Exit plan: grow Photo AI and Interior AI to about $100K MRR, cut costs, then sell via a broker. Valuations he got: AI startups can get about 5-8x profit versus 2-3x for typical startups, but multiples are based on profit, so he must cut GPU costs.
