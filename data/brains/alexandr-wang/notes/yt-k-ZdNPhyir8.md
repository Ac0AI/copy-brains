## Starting scale: the data bottleneck and the infrastructure thesis

- Alexandr grew up in Los Alamos, New Mexico, with two parents who were weapons physicists at Los Alamos National Lab.
- At MIT, around when AlphaGo and TensorFlow launched, he built side projects: a facial-emotion detector and a fridge camera that told him when roommates took his food.
- His insight: models are "sponges for data." The facial-recognition model and the fridge camera were the exact same algorithm, fed different data.
- He concluded the bottleneck for AI was not the algorithm. It was data and its availability.
- Starting thesis for Scale: AI needed an infrastructure platform "like an AWS or Stripe," focused specifically on data.
- Seven years in, Scale had been at the forefront of each major AI wave:
  - Autonomous vehicles (General Motors, Toyota, many startups).
  - The first major US government AI programs of record.
  - Large language models (working with OpenAI since 2019, plus Meta, Microsoft, Character and others).
- He says the industry has progressed much faster than he predicted a decade ago.

## What makes a company infrastructure: boil it down to primitives

- Alexandr says the key trait of an infrastructure company is deep focus on primitives.
- His example is AWS. A "stroke of genius" was boiling cloud computing down to the core APIs: EC2 (compute on demand) and S3 (storage on demand).
- He sees four primitives behind every advanced AI model:
  - Compute: high-end GPUs and accelerators.
  - Data: what models train on and learn concepts from.
  - Talent: very scarce, high-end AI talent.
  - Algorithms: now broadly open-sourced (Transformers), so least differentiated.
- Test for a great infrastructure opportunity:
  - It is a base primitive with no way around it ("you can't build AI without data fundamentally").
  - It has to scale exponentially as the whole field scales.
- Scaling laws (found by OpenAI around 2018-2019): every 10x increase in model size gives a predictable performance increase.
  - GPT-2 was about 2 billion parameters.
  - GPT-4 is reported at roughly 1.5 to 2 trillion (sparse), almost a thousand times larger.
  - Companies are on record seeking roughly another 100x in compute.
- He calls this a rare ~100,000x scale-up of anything in human history.

## Advice for founders starting AI companies

- Most successful companies start long before a trend becomes cool, so the head start is what lets them win when it does.
- Crowded AI categories are hard. He cites AI-powered sales, with "probably literally 50 if not more" companies, where even a great team ends up marginally better than competitors.
- He references Peter Thiel's Zero to One: the best capitalists skate away from competition. His advice: pick unpopular areas where AI can have a large impact.
- Don't build ahead of what the technology can do. Models still hallucinate, are weak at reasoning, and tool use doesn't work well.
- "I wouldn't start a company assuming these problems will go away." They might, but that is a lot to risk the whole company on.

## Naivety, small TAMs and irrational conviction

- Alexandr believes there is "a huge premium to naivety." Approaching an industry with a blank slate, without knowing what makes it hard, lets you do what entrenched players can't. He cites AI labs and Elon Musk's companies.
- Founders should not be dogmatic about the "HBS business case" framework.
- Scale's early fundraising got a lot of "nos." Investors said it wasn't important or big enough, or the TAM was small.
- The counterpoint he took on: the TAM was small, as it was for every important company at the start. What mattered was that the market was growing super fast.
- The case for investing in Scale rested on believing the AI industry would grow many-fold. Founders need that kind of early conviction.
- Midjourney example: it looked weird and unlike a business at first, and is now bigger than most SaaS businesses despite an unusual user experience.
- He says the rules are being rewritten. No business-school graduate would have advised OpenAI to spend hundreds of millions to a billion dollars training GPT-4 speculatively with no business plan.

## Predictions: multimodality, proprietary data and enterprise AI

- Multimodality will keep improving: images, audio, and especially video. Models will see and understand what humans see, enabling an always-present AI assistant.
- Models will go deeper into proprietary data:
  - Today's models train mostly on internet data.
  - He says 99.99% of data is private and proprietary. Example: how few of your phone photos end up on the public internet.
  - Enterprises and governments will customize models through training, fine-tuning or RAG on their own data.
- Enterprise opportunity, top down:
  - Roughly $27 trillion of US GDP, of which about $15-16 trillion is services.
  - Healthcare is the biggest bucket, financial services second.
- Healthcare example: care is reactive because of a shortage of medical talent. His vision is a healthcare AI buddy that constantly monitors you and catches problems early.
- Labor: this is one of the first technologies to pressure knowledge work. The shift is from being "the computer" to being a user of computers who orchestrates AI systems.

## Open questions: misuse and the global AI race

- He says the field has high uncertainty on several fronts.
- Misuse: he subscribes less to the AI-doom view and more to the view that bad people will use AI to do bad things, with real risk in bioweapons and cyber attacks.
- Global race: ChatGPT was the "firing gun" of something like a modern space race.
  - Mistral (France) has produced top open-source models.
  - The UAE and Saudi Arabia have been aggressive, announcing large compute clusters. The UAE has trained multiple LLMs, including large Arabic ones.
  - China has bought roughly $5 billion worth of high-end Nvidia GPUs.
- He says he doesn't know how this plays out long term.
