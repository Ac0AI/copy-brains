## Product design starts with empathy, not novelty

- Garry defines design as "creating things for users that work well and delight them." He rejects the idea that design is only how something looks; it is also how it works.
- He puts function before form. His examples of form over function include Apple's notched-iPhone marketing image ("I'm not here for the notch, I'm here for the content"), a romantic restaurant where you can't read the menu, and a beautiful door that needs a "PULL" sign because nobody can tell how to open it.
- He argues novelty is the opposite of functionality: "there's very little totally new under the sun," and founders shouldn't spend much time being extremely novel.
- He treats empathy as the thing founders must spend the most time on. He recalls Paul Graham pushing the Posterous team to ask what users are thinking, feeling, and why they showed up. He also recommends Dale Carnegie's "How to Win Friends and Influence People" as required reading, because you must become genuinely interested in other people's point of view.
- His mental model: building a product is throwing the best possible party. No line, someone friendly greets you at the door, takes your coat, and shows you where your friends are.
- Design with no clear problem is art, not design. His example is a lineup of absurd inventions, each solving the inventor's own interest rather than a user's problem: "now you have two problems."
- He recommends Dieter Rams' principle that good design is "as little design as possible" and Don Norman's "The Design of Everyday Things."

## The three layers of design for startups, and who should do them

- Garry splits startup design into three layers:
  - **Product design:** what is the problem and who is it for.
  - **Interaction design:** how users accomplish their goals (flows, wireframes).
  - **Visual design:** the last mile, pixel-level composition or HTML/CSS.
- The ideal is a co-founder who can do all three (and code, and handle business), a "unicorn." If you find one, make them a co-founder, but only after you've known them for a while.
- The process is roughly a waterfall: requirements, then interaction design, then visual design, then engineering, with conversation throughout.
- He stresses that at the early stage the founder owns all of it and shouldn't box themselves into one role. Design sits alongside product management, engineering, and customer support.
- He says he is self-taught: trained as an engineer, never went to design school, employee number 10 at Palantir, then Posterous (funded by YC in 2008), then 10 batches advising YC founders as a designer in residence.

## Writing a PRD with personas, using Posterous as the example

- Start with a problem statement. Posterous's 2008 YC application framed it as: blogging platforms were stale, the iPhone was new, and email was a universal way to get content online.
- Use personas to make users specific people. Posterous had three:
  - **David the dad:** comfortable with technology, owns the newest iPhone.
  - **Grace the grandma:** ASUS netbook, Hotmail, doesn't really understand how it works.
  - **A social-network-native persona:** with her own distinct needs, in the early social media era.
- He says to give personas backstory where useful: technology comfort, browser, email client, device. Personas also create productive tension (David versus Grace).
- This matters for B2B too. Even in industries like construction or freight, you'll have an executive decision maker and a line-level worker with very different motivations and capabilities.
- Group requirements into coherent features an engineer can pick up. Posterous's list:
  - Post by email with plain text.
  - Post by email without an account.
  - Photo attachments, multiple attachments into a web gallery, video.
  - Anti-spoofing security.
- "Post by email without an account" was intentional. There was no signup flow on the homepage; you emailed post@posterous.com and got a reply with your new URL. It opened the product to non-technical users and cemented a new behavior.
- The security feature mattered because Michael Arrington reviewed the launch on TechCrunch and immediately had technical friends try to spoof his Posterous email address. The team had already prevented it.
- The step before all of this is user research. He says founders should do it themselves, not outsource it, as a basic part of customer development. Talking to people you want to build for can even reveal which problem to solve.

## Prioritizing with P0-P3 and the scope/quality/time trade-off

- Garry assigns every feature a priority:
  - **P0:** the core; if you don't do it, why are you here.
  - **P1:** wouldn't ship without it.
  - **P2/P3:** nice to have; the devil in the details often lives here.
- Also note which persona wants each feature (for example, photo attachments served David and Irene as power users; no-account posting served the less technical users).
- Put the work in a bug database and link it to the PRD, wireframes, and visual comps. He says every team should use one, and it becomes more important as the team grows.
- A sprint should be short, two to three weeks, "the shorter the better." Without priorities, "you don't know what to cut," and a two-week sprint becomes a month, then three.
- You always have three levers: scope, quality, and time. Cut scope from the bottom of the priority list; otherwise time slips or you ship bugs to production.
- P3 items still help engineers architect for later (for example, knowing video is coming means they don't build the media classes for photos only).
- He says many bad product decisions you see in a settings panel come from teams skipping this prioritization and shipping.
- He claims doing this basic step already puts you ahead of many peers.

## Interaction design: command language, fewer steps, and stealing patterns

- People treat computers like people. Garry cites his Stanford research with the late professor Cliff Nass: politeness gets politeness back, and mirroring effects show up without avatars or anthropomorphism. He mentions BJ Fogg and Byron Reeves as part of that work.
- So interaction design is about commands, and it includes writing. Users read copy in their own voice and tend to do what they're told.
- A common founder mistake is passive, disembodied, third-person copy. Big companies like Microsoft get away with word-salad product names because they have scale and a sales force; startups can't afford that.
- Use direct, personal command language, high contrast, and an obvious call to action. Be opinionated about what the next user action should be, so someone landing on a page or app just knows what to do.
- Two ways to get people to act:
  - **Remove actions.** Paul Graham asked why the 2008 signup page had a confirm-password field. Just let people use "forgot password." Removing it can raise signup conversion by as much as 50 percent. "Cognitive load is an incredibly real issue."
  - **Chop up an action** into steps, such as a wizard (his example is the Windows 95 style, and tax-like B2B configuration flows).
- Don't be novel at this stage. "Steal what works": pull-to-refresh, swipe left to right (Mailbox, sold to Dropbox), and other established patterns. He says you can get very far on design patterns alone and points to pattern galleries on the web.
- Watch for mixing modalities, such as swipe-style pagination dots on a desktop site with a touchpad.
- Deliverables are wireframes or prototypes (OmniGraffle or similar): text, calls to action, and screen-to-screen flow, with no color or finished fonts yet.

## Visual design: contrast, closeness, grids, and removing ornament

- Garry's rule: "when you're forced to be simple, you actually have to solve the real problem." Avoid ornament and ask whether anything (text, lines, borders, even colons on form labels) could be removed without losing meaning.
- He cites Edward Tufte's "chart junk": charts with no axes, odd gradients, and decorative backgrounds.
- Visual design is not self-expression; it is about what information you're trying to get across.
- His three principles:
  - **Contrast.** Use bold, color, and size to mark what is more and less important. "If everything is bold, nothing is bold."
  - **The squint test.** Squint at a page; your eye should land on the highest-contrast element, and you should make out the basic shapes without reading.
  - **Closeness.** Group related things. His example is a login form that seems detached from account creation.
- Contrast plus closeness gives visual hierarchy, and a grid supports it. He credits Twitter's Bootstrap for putting a flexible grid into everyone's hands.
- Users scan for the highest-contrast items (headings exist for this reason) to decide whether the page matches their goal, then dive deeper.
- For layout, his sequence is: use padding and margin and a proper grid first, a line if needed, and a box last. Boxes draw a lot of attention (good around a call to action), but overuse makes everything compete. Whitespace helps focus attention.
- He credits the minimal techniques to Swiss design and the folks behind Helvetica.

## Feedback: usability testing and customer support

- Design isn't done at creation. His airport analogy: the sign designer knows where everything is, but a first-time visitor gets lost. Feedback exists to solve that.
- **Usability testing.** Start once you have wireframes, before writing code. Print them out, sit with people who have never seen them, ask open-ended questions ("What are we looking at? What would you click next?"), and prompt lightly with the user's goal. This is far cheaper than fixing bugs in code later.
- **Customer support** is "way under-appreciated." Most teams treat the support line like a shredder.
  - Specs and designs cover the 80 percent case, but there are thousands of once-in-a-blue-moon cases, and added up they make a broken product. "The devil truly is in these long-tail bugs."
  - Big companies keep designers and engineers away from support and treat users as cattle. A founder's advantage is being human and fixing the bug.
  - Fixing it creates an evangelist for life. Quoting Paul Buchheit: don't make something a thousand people kind of like; make something a hundred people absolutely love. Support is how you get there.
  - He says the designer, who thinks through the user, is the best person on the team to advocate for users.
- Product development is a perpetual cycle: research, product design, interaction design, visual design, build, usability testing, support, repeat. You don't need a person for each step, but you need to spend time on each.
