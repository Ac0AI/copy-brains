## Anthropic's reported first profitable quarter and the growth math

- Theo cites reports that Anthropic told investors it would more than double revenue to about $10.9B in Q2 and post its first operating profit.
- He says he expected the gap between revenue and expense growth to get worse before it got better, and did not expect profit this soon.
- Revenue per his chart: about $87M a year in 2024, about $1B by end of that year, about $9B by end of 2025, then roughly tripled to about $30B run rate.
- Valuation went from $61B 14 months ago to a reported ~$900B in the round being raised, about 15x. The raise is reportedly $30-50B, under 10% dilution.
- Compute is huge (a SpaceX deal at $1.25B per month with one source), but $11B per quarter of revenue makes those costs "feel a lot smaller."
- He calls media explanations like "pros prefer their chatbot" junk. The real drivers are distribution, pricing and model quality.

## Distribution: being on every cloud, with a revenue share

- Anthropic models are on AWS, GCP and now reachable via Azure, so Fortune 500 companies can use them inside the cloud they already run on.
- OpenAI models are only on Azure, which Theo calls the worst option for real engineering orgs. His view: engineers building on Azure are mostly on legacy stacks.
- Rough figures he gives: AWS about 30% of the cloud market, Azure about 20%. He flags that reliable numbers are scarce and that he is biased by his AWS enterprise background.
- Open-weight models and Amazon Nova are the alternative on AWS, so Opus is the obvious pick there.
- Anthropic puts up no compute for this. He says it sends weights to the clouds under restrictive agreements and takes roughly a 50% fee on tokens sent. That keeps its own GPUs free for research.
- His takeaway: enterprise adoption follows existing vendor relationships, and the model that is available everywhere wins by default.

## Price inflation through tier shifting and tokenizer changes

- Old tiers: Haiku for cheap bulk, Sonnet for most real work including coding, Opus as an expensive research model few could afford. Mythos is now a fourth tier above Opus.
- Opus 4.1 was $75 per million output tokens and Opus 4.5 is $25. Theo argues this is a price increase, because Opus 4.5 replaced Sonnet as the default model most people use. Output went from $15 to $25 per million for that default.
- Haiku is now effectively dead in his view. Mini models and open-weight models are cheaper, faster and often as good for those tasks.
- Opus 4.7 changed the tokenizer so the same text becomes 30-50% more tokens, an immediate price increase at the same list price.
- He guesses the price hikes were meant to ration scarce GPUs for research, not to maximize revenue. Customers kept paying anyway.

## Token efficiency and the hidden cost of wrong answers

- Billing is per token, and wrong answers cost far more than right ones. A solved task can take a few thousand tokens, while a failed loop can take a few million.
- At $25 per million output tokens, a single failed run can cost hundreds of dollars.
- On the Deep SWE benchmark he cites:
  - GPT-5.4 scored slightly better than Opus 4.7 using about 67,000 tokens, versus about 100,000 for Opus 4.7.
  - GPT-5.5 scored much better using about 47,000 tokens.
  - Cost per run: Opus 4.6 $4.70, Opus 4.7 $16, GPT-5.5 $5.80, GPT-5.4 $3.30.
- Moving from Opus 4.6 to 4.7 at the same task roughly doubles spend, because Opus 4.7 uses more than twice the tokens.
- His revenue model: double the customers, double usage per customer, triple the cost per task, and revenue grows about 12x.

## Why enterprise is paying API prices (product-market fit)

- Theo agrees with Simon Willison that labs have found product-market fit. His evidence is that companies pay more and do not churn.
- Individual plans are heavily subsidized. His $200 Codex plan generated $553 of inference at API prices, and teammates have hit $3,000+. Simon got about $1,200 of tokens from a $100 Anthropic plan and about $1,000 from OpenAI's.
- Enterprise plans have shifted to seat fees plus API-priced usage. Anthropic's is about $20 per seat per month plus usage, and OpenAI's credits match API token costs.
- Discounts are tiny. Even at about $40k a month committed spend, you are "lucky to get more than 5% off."
- He repeats a rumored ~90% margin on API tokens, which implies room for better deals that the labs are not offering.
- Consumer comparison: ChatGPT has about 900M weekly users but only about 50M (5%) pay. Spending $1T on infrastructure would need roughly a billion customers for 4 years. Enterprise users spending $200+ per month get there much faster.
- Hiring signals the focus: OpenAI has 703 open jobs, about 30% enterprise sales. Anthropic has 390, about 27%.
- OpenAI leaving its Microsoft exclusivity is, in his reading, about being available in every cloud for enterprise selling.

## What actually triggered the demand wave

- He credits Opus 4.5 as the pivotal model. It changed what tasks teams could trust AI with, from editing a file to solving complex problems. It converted even him, an OpenAI fan, to Anthropic for a while.
- Enterprise lags by roughly 3 months to 2 years. The spend now reflects a model released months ago, and he expects OpenAI's enterprise spend to follow.
- His adoption pattern: a dev tries Opus on holiday break, then asks the company to approve it, and spend jumps because the new models both do more and use more tokens.
- On usage growth: even as models get more efficient, he generates more code and more tokens each month.
- He debunks two stories:
  - Microsoft "cancelling" Claude Code licenses is just routing through the GitHub Copilot CLI while still paying Anthropic.
  - Uber blowing its annual AI budget in 3 months happened because it moved from autocomplete-level usage to full agentic work and never rebudgeted.

## Compute constraints and the caveats on profitability

- Anthropic's costs can't grow faster than compute exists. Nvidia supply is largely sold out for years, so more money does not buy GPUs sooner.
- Anthropic made conservative compute commitments. OpenAI committed to far more future capacity and so took on far more cost this year.
- Theo says Anthropic's profit is partly accidental: it under-bought compute and raised prices to ration what it had. He still calls the profitability real.
- Researchers prefer Nvidia GPUs and CUDA over Trainium and TPUs. Claude Code subscriptions put first-party inference on Anthropic's own GPUs, competing with research.
- To protect research compute, Anthropic tightened rate limits and integration access and raised effective prices.
- It is also renting compute from competitors, such as xAI/SpaceX, which raises spend.
- He argues Anthropic can charge this much because it has no real competition until OpenAI models are on AWS. He is rooting for competitors to push prices down.
