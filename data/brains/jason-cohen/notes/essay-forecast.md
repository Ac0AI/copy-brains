## Why accuracy alone fails: the climatic-average trap

Jason's starting point is a probabilistic forecast like "30% chance of rain". A single outcome tells you nothing about whether it was good. The correct reading is: gather every day the forecaster said 30%, and check whether it rained about 30% of those days. Forecasts are "bucketed" by predicted value (0%, 10%, 50%...) and each bucket is compared with what actually happened.

- **Accuracy Error** is the squared difference between the predicted probability and the actual rate in that bucket. Example: A always predicts 32%, B always predicts 25%, and it really rains 30% of the time. A's error is (0.32-0.30)^2 = 0.0004 and B's is (0.25-0.30)^2 = 0.0025, so A is more accurate.
- He squares errors instead of using absolute values for two reasons: squaring exaggerates items that are very different, and the math of squared differences is far more tractable (it can be factored and used with calculus, which is how least-squares linear regression is derived).
- The trap: a forecaster in a region that rains 110 of 365 days (30%) can predict "30%" every day. Her accuracy error is exactly zero, yet she is "not forecasting at all", just "regurgitating the climatic average".

## Discernment: rewarding forecasters who stick their necks out

Jason adds a second concept, *discernment*: the forecaster actively segments days and takes a strong stance on which will rain, instead of copying the overall average.

- Discernment is computed like accuracy error, but compares the **actual rate in each bucket** to the **climatic average** (not to the prediction). It measures how far the buckets depart from the average, so how much the forecaster is "saying something specific".
- Worked example, forecaster B (100 predictions): 8 times he predicted 0% (actual 10%), 12 times 100% (actual 90%), 80 times the 30% average (actual 30%).
  - Accuracy error per bucket: 0.01, 0.00, 0.01. Weighted by bucket size: (0.08 + 0 + 0.12) / 100 = 0.002.
  - Discernment per bucket: (0.30-0.10)^2 = 0.04, 0.00, (0.30-0.90)^2 = 0.36. Weighted: (0.32 + 0 + 4.32) / 100 = 0.0464.
- Predicting the average earns zero discernment points. A confident 100% call earns many, because it is a bigger departure from average.
- B has slightly worse accuracy error than a forecaster who always says 30%, yet Jason says you should prefer B, "even though he has more error". When B is very sure, he is usually right. So discernment is "a fundamental component of how 'good' a forecaster is".
- Naively comparing the two numbers (0.0464 vs 0.002) and calling the forecaster good is not valid. They need a proper way to combine.

## Discernment Error: how much discernment is even possible

Jason argues it is unfair to ask "how discerning is the forecaster?" without asking how much discernment the environment allows.

- Antofagasta, Chile gets rain about five days a year (1.7 millimeters annually). Any varied prediction would necessarily be wrong, since reality isn't varied. There is "no space" for discernment.
- Portland, Oregon rains 164 days a year (about 45%) with no rainy season, so a world-class forecaster has lots of room to be discerning.
- Maximum possible discernment given climatic average c is **c(1-c)**. It peaks at 0.25 when c = 50% (a coin flip) and shrinks as c nears 0% or 100%.
  - At c = 30%: 0.30 x 0.70 = 0.21. B's 0.04 is "not too impressive", though still better than a no-discernment forecaster.
  - For the desert (5/365 days), only about 0.0128 is available.
- Derivation: maximum discernment occurs when forecasts are only 0% or 100% and fully accurate. The positive bucket contributes (1-c)^2 for Nc cases, the negative bucket c^2 for N(1-c) cases, and the weighted average simplifies to c(1-c).
- **Discernment Error = Maximum Discernment - Discernment.** Lacking discernment is its own kind of error.

## The Forecast Error score (Brier score) and the baseline

Jason's combined metric is simple addition:

- **Forecast Error = Accuracy Error + Discernment Error = Error + Maximum Discernment - Discernment.** Lower is better, as it is a total error.
- Baseline: always guessing the climatic average gives zero accuracy error but maximum discernment error, so a score of **c(1-c)**.
- Forecasters deviate from the average to cut discernment error, but must be right. The best ones reduce discernment error by more than the accuracy error they add.
- It is possible to do worse than the baseline (making bold guesses and being wrong). That shows when total error exceeds c(1-c).
- Equivalent normalized version: divide Forecast Error by c(1-c). Then **1 = same as baseline, 0 = perfect, and the distance from 1 shows proportionally how much better or worse** the forecast is. The reader doesn't need to know c(1-c) to interpret it.
- Credit: this is the Brier score (Glenn Brier, 1950). The three-component breakdown was found by Allen Murphy in 1973.

## Diagnosing a model with the two components

Jason says the total is useful, but the components show what is going wrong:

| Accuracy error | Discernment | Meaning | Explanation |
|---|---|---|---|
| High | Low | Failure | Not segmenting, and still worse than guessing the average |
| Low | Low | Useless | Accurate only because you guess the average |
| High | High | Try Again | Strong predictions, but wrong |
| Low | High | Ideal | Strong predictions, and correct |

## Business uses and how to apply it

Jason lists where better probability forecasts pay off:

- **Lead scoring:** predict the chance a new sales lead converts, and its dollar value.
- **Predicting churn:** if you can predict a given customer's chance of churning in the next 30 days, you can act proactively and perhaps avert the loss. Doing this enough puts you "on the road to Product/Market Fit".
- **Predicting upgrades:** know which customers are amenable to an upgrade and focus internal messaging accordingly.
- **Risk assessments:** better probabilities on risks lead to more intelligent investments.

His advice: build forecasting models to better understand customers and prospects, then use this score to know whether each iteration of the model is actually improving. He says the whole calculation is simple enough to do in Google Spreadsheets.
