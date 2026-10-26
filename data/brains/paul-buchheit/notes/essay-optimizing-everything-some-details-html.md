## Optimization is a general discipline: find what matters, fix in ROI order

Paul argues that all engineers and product designers should understand "make it better" optimization (the CS kind, not "make it optimal"). He says most people's words and behavior show they haven't internalized it. He reduces it to three steps:

1. Find the problems (profiling).
2. Sort them by benefit-of-fixing / cost-of-fixing (ROI).
3. Fix them in order, highest ROI to lowest.

He applies this to everything, not only CPU profiling. The zeroth step is deciding what you are optimizing for.

## Optimizing the wrong things: pennies vs. big leaks

- Paul's personal-finance example: people who drive around town to save a few cents on gas, but waste thousands on a fancy car or credit card interest, put their effort into low-reward activity while losing more elsewhere.
- Big, dumb, "Dilbertesque" companies do the same: "cutting back on pencils while running super-bowl commercials."
- To optimize money, first observe where most of it comes from and where most of it goes.
- Interest rates work the same way. "What's a few percent?" on a mortgage can be one of the details that determines the outcome.

## Time spent on trivia is time not spent on what matters

- Paul ties this to his post "Wasting time on things that really don't matter." The choice between two slightly different ways of testing for the empty string is not zero-value, but a product probably has "100,000 more serious problems."
- His rule: "fix all of the other problems first, then debate the empty string."
- The empty-string debate is only worth having if you are optimizing for endless debates or code "beauty." If you are optimizing for the success of the product, it "probably has negative value and should be strongly avoided."
- Your time is finite, so time on unimportant details is time not spent on important ones.
- Engineers are very detail-oriented. That helps when they focus on the important details and hurts when they focus on the unimportant ones. Learning to tell the difference "will be worth your time."

## A few details determine most of the outcome (80/20, 90/10, 99/1)

- Small details still matter, because a small fraction of them decide the majority of the result. Paul calls this the 80/20 or 90/10 rule. For example, "90% of the time is spent in 10% of the code," and it could just as easily be 99/1.
- It can be a few lines in the inner loop, or the interest rate on a mortgage.
- Concrete example: at Google he profiled a server and found about 90% of the time going to a single line, a call to `sscanf` repeated millions of times, which someone had snuck into the scoring code. He calls it "the 99999/1 rule."
- Caveat he added after a commenter's pushback: 80/20 is only a heuristic. Code that has already been well optimized, such as games, HPC and embedded, tends to have flatter profiles where it may not hold.

## Product design: get the important details right (the iPod example)

- Slashdot's 2001 summary of the newly released iPod was "No wireless. Less space than a nomad. Lame."
- By 2007 those turned out not to be the important details. There was still no wireless iPod (until the 29th of that month), and most iPods had less than the original 5GB of storage.
- Apple got a few important details right:
  - It was easy to get your music onto an iPod.
  - It held "enough" music, unlike early flash players.
  - It fit easily in a pocket, unlike early disk-based players.
- His conclusion: "If you get all of the important details right, you'll be so far ahead of everyone else that the other details probably won't matter."

## How to tell which details matter: observation

- Paul's answer is "Observation," plus some judgment, which he thinks is mostly formed through observation.
- For an application, observe which resources are being exhausted or causing delay. It is not always CPU; it is often disk seeks. Then observe where they are consumed.
- For product design, observe which things are most useful and which are most painful or annoying. He says the pain is usually waiting or thinking.
- For money, observe where it goes and where it comes from.

## Raise the number of details you get right by lowering cost

- The benefit/cost equation has a cost side too. Cut it so you can do more things in less time.
- His ways to cut cost: find easier solutions (he links his post "The secret to making things easy: avoid hard problems") and avoid endless debates.
