## Cognition's growth: shipping 7x more with its own agent, 12x customer usage, and staying independent

Scott Wu is CEO of Cognition, which makes Devin, an AI software engineer. Cognition has raised over $2.5 billion at a last valuation of $26 billion and reached about $500 million in revenue in under 3 years. Customers named include Goldman Sachs, Mercedes-Benz, Citi, Dell, NASA, the US Navy and the US Army.

- **Dogfooding.** Scott says about 95% of Cognition's code is now written by Devin, and Cognition "almost exclusively" uses Devin to build Devin.
- **Shipping speed.** In roughly six months, the company's total code shipped grew about 7x.
- **Customer usage.** Customers grew their Devin usage roughly 11 to 12x over about six months.
- **Founder profile.** Of the first 5 or 6 people at Cognition, about 30 had founded a company before (as Scott states it). He says this makes the team ambitious and comfortable thinking from first principles.

## Measuring AI productivity by outcomes, not tokens

- Scott says raw token counts are "just not the right answer" for measuring productivity. He dates the "token max era" to roughly January through May 2026.
- He argues what matters is the outcomes a business drives, and there is "no secret trick" or easy shortcut for measuring ROI.
- At Cognition, he tracks the business's KPIs and how fast they grow, plus how much is shipped and delivered to customers, rather than tokens or spend.
- He notes literal output (PRs, code shipped) can be measured in different ways, but the real test is what the product delivers.

## Why growth this fast was predictable: extrapolate the adoption curve

- Scott's first-principles check: a year ago, the number of people using coding agents was "roughly zero." In 2-3 years, the number should be "roughly every software engineer in the world and probably a lot more," since more non-engineers will be able to produce code and products.
- Taking those two points and extrapolating means massive adoption and growth has to happen. He says if Cognition only grew 3x year over year it would be "lagging the market."
- Growth drivers he names:
  - Virality and strong educational content from many people showing how to use the tools.
  - Real organizational change inside customer companies.
- He says the hardest part of selling most products is explaining why anyone should care. With AI that writes code and builds products on its own, "it's kind of obvious why you should care," so the work is solving the practical problems of getting the technology out.

## The Windsurf acquisition: moving in a single weekend

- **Trigger.** A Friday afternoon in 2025: Windsurf (an AI IDE) announced that part of its team, mainly researchers, was going to Google in an acqui-hire-style deal. The remaining company still had its customers, a go-to-market team, platform engineering and the product.
- **Why it fit.** Scott says good IDE products (where you read and edit code) and agent products (an engineer you delegate to) should be tightly paired. They share knowledge of your codebase, and users often review code themselves, then hand work to a remote agent. Windsurf also had strong enterprise traction and a deployed-engineer go-to-market motion.
- **Speed.** Cognition contacted the Windsurf team that Friday evening and worked out the whole acquisition over the weekend. The announcement was ready Monday morning. Leaders from each side (Scott and Russell for Cognition; Jeff and Graham for Windsurf) handled the first talks, then every function worked its piece that Saturday, including engineering, product and go-to-market.
- **Relative size.** At the time Cognition had about 35 to 40 people and a run rate of roughly $70 to 80 million. Windsurf had about 200 people because it had scaled go-to-market.

## Integrating two products and teams without forcing it

- **Day one.** Reassure customers they will be supported, keep shipping, and take care of both products.
- **Product integration.** Scott's approach was "not trying to overly force it." Both products continued, with obvious next steps on each. Overlap was built together as it came up. Today Devin Cloud and Devin Desktop are paired, so sessions can start in one and be handed off to the other.
- **Let usage pull products together.** He chose to let actual usage and new features pull the products together gradually rather than set a 30- or 60-day integration deadline. Many users of either product were already looking for the other: IDE users wanted async agents, and cloud-agent adopters wanted a local form factor.
- **Team integration.** Offsites helped people get to know each other, plus many strategy sessions. By the end of 2025 they found a larger SF office to put everyone in one space. Scott says "peanut butter and chocolate" and that you can no longer tell which people came from which company.
- **Advice sources.** Asked who advised him through this, Scott said "a lot of making it up."

## Why staying independent beats being a lab or selling to one

- **Model neutral.** Cognition works with OpenAI, Anthropic, Google and others. Scott pushes back on the narrative that you must be a lab or sell to a lab to win.
- **Enterprise reasons for third-party tools:**
  - Enterprises want long-term partnerships and can't know who will have the best model in 6 or 12 months. They don't want to train engineers on one suite and later find everyone has moved on.
  - Companies care about value driven, not tokens used, and want a partner to help drive that value.
  - Adopting AI changes how teams are organized, how they plan, write specs, design and do user research. He says it is not enough to "throw the tool over the wall," so customers want a vendor who thinks about organizational change and helps with the details.
- **Strategic view.** He rejects a future where one entity owns all intelligence. He wants people and businesses to control their own intelligence, and sees real appetite for independent tools that innovate at the product and value layer rather than just the raw intelligence layer.

## Government and Washington as a market

- Scott says government might be the biggest pool of unmet software demand: many things to build and not enough engineers. His line: imagine the DMV "actually worked."
- Cognition spent Independence Day in DC for this reason.
- He also thinks AI will be a fundamental policy issue within a few years. He compares it to early internet debates about whether a few corporations would control it, and notes that eventually all businesses will be built on AI.

## Where AI is going: limits on "six months to singularity"

- Scott doesn't believe in a six-month singularity. He agrees a recursive loop exists (Devin writes most of Devin's code), but names reasons everything won't be solved overnight:
  - Many real-world problems are not purely intelligence problems: organizational processes take time, and GPU compute is limited by hardware.
  - Models can learn almost anything where success is clearly defined and measurable. Benchmarks work because they define the task, success criteria and examples, so "RL works" extremely well.
  - Tasks that are amorphous, lack clear success measures or have long time horizons are harder. He contrasts a simple program, which is easy to check, with a 10-year strategic decision, where feedback takes 10 years.
- Still, he says "there is nothing that humans do that AI can't do" in pure knowledge work, in the long term.
- His advice for living with that uncertainty: stay sane, make reasonable decisions and keep building.

## Origin of Devin and the abundance thesis

- **First real task.** In late 2023, the team built small agent prototypes, including an AI version of each co-founder in Slack. Co-founder Walden couldn't get MongoDB set up, so he handed it to his agent, which fixed it in a few minutes. Scott says it was a good use case because it needs encyclopedic knowledge of errors plus the ability to run and diagnose commands, which is what a coding agent is. He says he couldn't sleep that night, because maybe you really can have "an AI engineer buddy that can just do work for you."
- **Abundance over efficiency.** Scott says the real unlock of AI is capacity, not efficiency: "what can we do if we can build so much more." He expects "single use software" and "self-driving software" that generates on demand, since anything done on a computer is ultimately software.
- **Analogy.** He compares it to the industrial revolution: abundance first, then a period of figuring out what people want to create with it. He says we are starting to enter that question.
- **Fundraising anecdote.** In the seed round, Scott offered to settle valuation terms with a heads-up poker match against Napoleon (about 1% of the company at stake, as he recalls). Peter Thiel shut the idea down and they reached a deal normally.
