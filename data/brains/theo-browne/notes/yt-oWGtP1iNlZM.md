## How the T3 stack started and went viral

- Theo built the stack by trial and error after leaving Twitch. He worked at Twitch for about 5 years, then joined a startup, built his own stack, and left to start his own company. He kept adding and removing pieces, aiming for something simple and composable.
- The pieces were Next.js, tRPC, Tailwind, Prisma and NextAuth. He had been frustrated that the pages router lacked much of what you need to do data correctly in React.
- The first proof was a friend's open source project, a "giant Firebase mess". Theo rewrote the whole thing in two hours with his stack. It was less code and a faster app.
- He then streamed himself building with the stack and posted it on YouTube. The video became one of the most popular in dev content, which he says is odd because it was "me just ranting on stream showing people this tech that I liked". It got "retconned into a tutorial".
- His earlier video of Dan Abramov doing a mock job interview went viral first. Theo says he has done 500+ interviews, and that this brought attention to the T3 demo.
- He has run YouTube for about two years and says it is now among the top three software dev YouTube channels by viewership. It grew out of nerding out with friends, and it "all of a sudden" became a brand.

## Simplicity, modularity and why he refused to make a template

- The point of the stack was modular: start with Next.js and add or remove parts as needed. Any one part can be swapped or left out.
- Everyone asked for a template. He refused: "If I give you a template, you're going to make your blog with Prisma, NextAuth. You don't need these things for these problems."
- His stated aim: "if there's anything that I want my impact to have on this industry, it is a reset going as far back as possible to simple is best. Simple scales incredibly well."
- He said he would support a CLI where you pick the pieces you need, but he would not build it. A 16-year-old from India, Nexel, built it as create-t3-app. Other contributors joined and it became roughly the third or fourth most popular way to start a React app. He says it regularly outpaces Remix.
- create-t3-app's first question is TypeScript or JavaScript. Picking JavaScript shows an error and falls back to TypeScript. They have kept this for about two years. Every couple of weeks someone files an issue asking for JavaScript support, and the answer is that TypeScript "is the right answer".

## Branding problem: modular stack retconned into fixed tech

- "T3" is the three letters after the T in his name. He has owned T3.gg for 10 years. It was later retconned to mean Tailwind, TypeScript, tRPC, but it never meant that.
- Because it was modular, his own stack drifted away from the original. He now prefers Drizzle to Prisma. He uses Clerk instead of NextAuth, because he does not want to deploy and maintain an auth service. He still uses tRPC in about half his projects, but less, since server components and the app router cut his need for it. He uses it for client-heavy data interaction.
- The downside: people now use "T3 stack" to mean one specific set of technologies, which is out of his control. He is afraid to publish an "update to the T3 stack" for that reason.
- He is in the process of a rebrand, moving off T3 as his personal branding so he can just be Theo and let T3 stack remain the stack. He says he spent a lot of money on that Twitter handle.
- He does not run a persona: "I am me online, offline, in videos, in person."
- His current practice: use create-t3-app with every optional piece turned off, because it gives the app router version with better ESLint rules and better environment variable management than the stock Next template.

## App router vs pages router

- He was skeptical of the app router and for a while said to stick with pages router. He now says even a traditional SSR app should move to app router, with everything mounted as client components, because the DX gain is too large to skip.
- His main example is layouts. Pages router had no real concept of a layout. The recommended pattern was to attach a `getLayout` function to the page, then modify `_app.tsx` to pull that function off the page and wrap it. This only works at a depth of one. With two nested layouts the pattern stops working. In his words, "It's five times more work to get one layer of depth. Or with app router, it's no work and infinite depth."
- He built the same app in five stacks and found he had forgotten how bad pages router layouts were. He notes every site he has worked on benefits from shared layout structure.
- He says T3 stack exists in large part because of how bad pages router was.

## TypeScript: how he came to it and how he writes it

- He was long anti-JavaScript and started as a Ruby and Python developer. Twitch's rewrite to React and TypeScript, driven by a team from Curse, got him interested. When he was moved to a Go team and was miserable, his manager pointed him at the React and TypeScript codebase, and Hooks landed about three weeks in. He became the person who brought functional programming to the 500+ person Twitch codebase, and says that was where his career trajectory took off.
- His biggest productivity jump was Ruby and Python to Elixir, not to TypeScript. He is not a TypeScript enthusiast in the Matt Pocock sense; he is productive in the technologies that happen to use TypeScript.
- He is working with Boot.dev on a TypeScript course. He says the first 2 to 3 lessons should have almost no type definitions, since the goal is not to teach crazy types.
- A tRPC router file looks like vanilla JS. Input types are inferred from the Zod validator, and return types are inferred from what the procedure returns. In T3 he writes less TypeScript than ever, mostly just React component props.
- Rules of thumb:
  - Let TypeScript infer. If more than about one in fifteen of your functions has an explicit return type, you are using TypeScript wrong.
  - If adding types to a 100-line JS file adds more than 5 lines, you are using it wrong.
  - Return types can lie to TypeScript and make it infer bad things.
- He made a "case against return types" video, partly in reply to ThePrimeagen's Rust habit of putting return types on everything. He closed it with short clips from about 15 TypeScript experts agreeing.

## Career growth: follow excitement, not content

- His advice: "Stay away from YouTube and content. It's a distraction." Content is not the lever for a career. "The lever that will help your career is a thing you're excited about."
- His own channel exists because he had nerdy lunch and dinner conversations at Twitch that disappeared with COVID, and nobody at his later jobs wanted to nerd out. He started it out of an urge to rant about compiler work, not as a career move.
- He argues "career growth doesn't stop because you picked the wrong tech. Career growth stops because you lose the energy to push through those hard parts."
- "You grow via suffering and you grow via feeling really dumb." He compares it to skateboarding: you don't learn from a lecture on the history of the skateboard, you learn by hitting the ground over and over.
- His career grew when he fell in love with functional programming. Hooks then let him combine that excitement with a few years of experience and make significant changes at Twitch.
- His PSA on his own content: under 5 years of coding, don't watch his videos too much; under 2 years, stop watching. It is made because he is excited, not as a learning path, and chasing every new thing is a trap.

## How he uses AI

- His test for whether AI is helping a learner: when you hit an error, are you telling the AI to fix the code, or pasting the error and asking what it means, then fixing the code yourself? The first is "screwed" for a beginner. The second uses AI to accelerate learning.
- He is also clear that Cloudflare's docs are a "masterclass in gaslighting your users". He finds Claude has roughly a 60% success rate deploying there against about 20% for the Cloudflare engineers he asked.
- His own workflow: he runs two companies and is an investor and adviser, so he codes far less than before. He spends idle time thinking through architecture, then uses AI to build quickly once he sits down. "The complex part happened here over the last few weeks. Now I'm combining that with the AI to accelerate my own development."
- He uses Cursor (he is an investor, which he disclosed) and prefers Command K, where he describes what he wants, over constant autocomplete.
- Favorite uses: "build this like this one", and conceptual refactors across files. He copies JSX from a finished component and asks the AI to make another form match its styling. He ported a Prisma.js app to Rails by giving it the Prisma code.
- Before, he would rewrite a project three times to settle on a version he liked. Now he adjusts the system incrementally as his intuition improves.
- The people who thrive use AI to evolve their mental model; the ones who fail delegate the mental model to the AI. "I've never asked an AI how to do something. I've asked it to do this thing." And "if you're replacing your thinking, you're doing it wrong."

## Conferences, networking and what he does with his time

- He did one conference before COVID. He did 3 last year and 15 this year ("I want to die"). His limit is now 5 a year and he has already picked next year's five.
- He goes for the people, not the talks. He has watched about four talks across 15 conferences, and watches the rest on YouTube later so he can make videos about them. He wants the hallway track.
- His own path: Rich Harris's talks shaped how he communicates. He then edited a blog post for Ryan Carniato, helped Fred Schott, and joined a Tanner Linsley Twitter space. He pitched a "use backend query" compiler hook, and Tanner suggested looking at Blitz.js and tRPC. He fell in love with tRPC and ranted about it. He credits Tanner, Ryan and Fred with starting his creator journey.
- He will not be the first name on a conference list. "I like joining the list once I see enough of my friends on it. I don't want to be a kingmaker."
- The one event he actively pushes people to attend is Open Sauce, run by Will Osman. He says it handles creators well, down to index cards with schedules and a phone number to call. This year he brought his creator and tech friends.
- On networking: "Networking is geeking out about the stuff you like with people who also like that stuff."
- His closing advice: "Build stuff and follow your excitement." He thinks the future belongs to the most excited people becoming 10 times more productive, not engineers who are only in it for the money.
