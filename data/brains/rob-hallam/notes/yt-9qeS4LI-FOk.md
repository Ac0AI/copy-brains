## Sakana Fugu is an orchestration model, not a conventional frontier model

- Rob describes Sakana Fugu (from Sakana AI Labs in Tokyo) as an orchestration model with about 7 billion parameters.
- Frontier models such as Opus 4.8, Fable 5 and GPT 5.5 are described as running on trillions of parameters.
- Fugu doesn't answer directly. It coordinates several models (e.g. GPT 5.5 and Opus 4.8) behind the scenes, instructs them, judges their outputs and returns the result.
- His analogy: Fable 5 is one genius child, while Fugu Ultra is a classroom of smart kids working together.
- Sakana's marketing claims Fugu Ultra matches Fable 5 and Fable Mythos at roughly half the price, with no export-control risk. Rob notes those models are restricted from public access by US export controls.
- He flags that the claim is about capability without that regulatory risk, and decided to test it rather than trust it.

## Published benchmarks: strong, but not Fable-level

- On SWE Bench Pro, Fugu Ultra scores 73.7 versus 69.2 for Opus 4.8, but remains below Fable 5.
- On long-context reasoning, GPT 5.5 leads with 94.8 versus 93.6 for Fugu Ultra.
- Rob says the close result is expected, since Fugu is using those frontier models underneath.
- He points out that a model trained specifically to orchestrate other models beating the best single model on some benchmarks is notable, even though it falls short of the Fable 5 comparison in the marketing.
- He stresses that all these benchmarks are run internally and reported by the producing company, which is why he ran his own independent comparison.

## How Rob ran the comparison

- He used Vercel AI Gateway (not a paid ad, just a tool he uses) to bring external models into Claude Code. This lets him compare several models head to head in the same AI coding environment.
- He gave Opus 4.8 and Fugu Ultra identical tasks: a simple one-line bug fix, and a more complex design task he could judge subjectively.
- He tracked quality, cost, tokens used and run time.
- Setup friction: Fugu isn't available in the EU and Asia because of GDPR and data-security compliance. Rob is in Vietnam and worked around it with a VPN.
- The orchestration is invisible. He sees only the token count and the bill, not which models Fugu chose or why.
- Alternatives to AI Gateway for testing models himself: Fireworks.

## Test 1, simple one-line bug fix: single model wins on cost

- Opus 4.8 found the bug. It cost about 14 cents, using roughly 1,500 input and 1,700 output tokens (a little over 3,000 total).
- Fugu Ultra also fixed the bug, but cost 80 cents, about 5.7x more, and used 147,000 tokens.
- Rob's read: that overhead makes sense for a model coordinating multiple agents in the background and comparing their results.
- He concedes nobody would realistically use an orchestrator for a trivial bug, which is why he added a second test.

## Test 2, complex design task (a "kebab stand" HTML design benchmark)

- The task asks a model to produce an HTML kebab design, scored subjectively. Rob credits GLM 5.2, an open-source model, as the best open-source result on this benchmark, in his view.
- Opus 4.8: about $2.55, around 15 minutes, a little over 70,000 tokens (6,000 input, 64,000 output). Result: a rotating 3D kebab with fire in the background, glow, and fat dripping into a pool at the bottom. He was very happy with it.
- Fugu Ultra: about 50 cents, roughly 4 minutes (about a third of the time), 35.8k input and 12k output tokens. It produced a valid HTML file.
- Quality: Rob was disappointed. The output was 2D with little detail and only simple animation. A "drag to direct heat" prompt did nothing when clicked, which he attributes to multiple orchestrated models not communicating with each other.
- It was better than GLM 5.1 and GLM 5, but he found GLM 5.2 (open source, much cheaper) clearly more impressive.
- He says he expected far better, given the claim that Fugu rivals Fable 5, and the gap with Opus 4.8 should have been large if that were true.

## Rob's verdict: no clear winner, so pick by task and cost

- Simple tasks: a single model (Opus 4.8) gets the same result far more cheaply.
- Complex, creative tasks: Fugu was cheaper and faster but lower quality in his test.
- He doesn't want the kebab test to be the only takeaway. Sakana's bet is that orchestration models are the future of AI, and he thinks that bet is interesting, especially with export controls on frontier models.
- Orchestration adds a layer that extracts and coordinates the best of several models, but it comes at a cost: either lower performance at much lower cost, or equal-or-better results on some benchmarks (like SWE Bench Pro, which he didn't test) at a much higher price.
- Practical advice: in most cases, stick with one model and your current workflow, since it's cheaper and more sensible. The landscape could change in a week or two.
- "Don't just take my word for it, try it yourself." He recommends spending a little money to test models on your own workload, because everyone's needs differ, and invites viewers to report if their results differ.
