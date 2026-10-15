## Why data decides AI quality ("data is the new code")

Alexandr's core thesis for Scale AI is that "better data results in better AI." He argues the performance of machine learning systems will be dictated by the datasets they are trained on far more than by the code written to power them.
- He frames the raw ingredients of ML as compute, data and human insight. Annotated data is produced by mixing raw data with human insight.
- Scale started with data labeling and annotation, first in autonomous vehicles. It then expanded into e-commerce, financial services, government and large tech platforms.
- Over time it added data management and algorithms, such as document automation and e-commerce AI, on top of annotation.
- He says most industries have lots of data that is not "AI ready": not annotated, not cleaned. Old AI use cases like ads, search and social ranking have "natural labels" from user clicks, and most other industries do not.
- Step one at Scale is turning huge pools of unstructured data into well-labeled, unbiased, high-quality datasets.
- Where data is hard to collect (privacy, missing sensors), he points to synthetic data and data augmentation. These combine real-world data with diverse, realistic synthetic data.

## How he spotted the opportunity at 19

Alexandr was studying AI at MIT in the year TensorFlow and AlphaGo launched. A side project, a camera in his fridge to catch roommates stealing food, made the point viscerally: "the algorithm is only as good as the data that it's trained on." He gave up on it in about two hours because the data needed would have been astronomical.
- He saw few people focused on the data problem.
- His pattern recognition came from platform companies: "what aws has done for the cloud or what stripe has done for payments," there was an opportunity to do for AI.
- He admits he "didn't have all the answers" and did not know the idea would become this big. The fundamentals justified exploring it.
- For the first years the company just focused on data labeling and annotation. Only later did it look up and realize it could expand into many more industries.

## Going full time without a big decision

Alexandr says he wishes he could claim he was fully convicted, but the reality was less dramatic.
- He put the work on hold for finals and final projects. When summer started he had nothing else to do, so he worked on it in earnest.
- Over the summer the company gained enough momentum that "there's kind of no option but to just keep going."
- His advice: the mental barrier of sacrificing your current life feels huge. Avoid that false dichotomy and put yourself in situations with freedom and flexibility to explore, then see whether you gain momentum.
- He also says that early on it helps to "dare to dream big" even when a big outcome is only a pipe dream.

## Ambition, building and the "ambition shapes reality" value

He argues that going from an idea in your head to something real is empowering, even when it does not always work. It gives you the sense that you can will things from your mind into reality.
- Scale has an internal value called "ambition shapes reality." His claim: an ambitious project and an unambitious one can take the same amount of work, so dream big and then build.
- He collects examples of limits being broken once someone shows it is possible, such as the four-minute mile.

## Training annotators: AI helping humans, and an internal edtech system

Alexandr describes two principles for working with human annotators on specialized data (for example cilantro vs parsley stems, or melanoma on skin).
- Give trained people as much leverage as possible. ML systems do as much of the work as they can, and humans spend effort on the edge cases and high-judgment work that give top quality.
- Treat training as an education problem. Scale tracks the nuances and edge cases of each data problem. It monitors which ones each annotator handles well and which trip them up, then proactively serves them materials and examples. He calls it "one of the more interesting edtech systems out there."
- He believes all future AI systems will depend heavily on human insight, at minimum for oversight.

## Bias, responsible AI and data privacy

He says responsible AI depends on high-quality, representative data: "you are what you eat."
- Example: with the MIT Media Lab on medical imaging, Scale found far more light-skinned than dark-skinned images. It added data for under-represented classes, using real-world data, data augmentation or synthetic data, and significantly de-biased the model outcomes.
- He calls bias a hard problem with no architectural silver bullet. It comes down to the "nitty gritty" of knowing what your dataset looks like, spotting bias ahead of time, fixing it and repeating.
- Customers often sit on huge troves of data but lack tooling to find the "needles in the haystack." Scale's Nucleus product lets them search their own labeled data for more samples of an under-represented class.
- His philosophy is continual improvement of algorithms through continual improvement of data.
- On privacy, he says the community must shift from "however I can get the data, I will use it" to collecting data responsibly. Providers should understand how their data is used, and it should be collected in a de-biased way and in sufficient amounts. He accepts this will make some AI harder to build, and says Scale helps customers do it.

## Where he sees AI opportunity by 2032

Alexandr says we are in the "golden age of AI." His analogy is "software eats the world": take any industry or problem and ask how machine learning, applied properly, could make it far more efficient.
- Examples he cites: fraud and transaction flows in finance (Brex, PayPal, Square), automating global trade workflows (Flexport), driver-assistance systems, and insurance claims processing ("10x more efficient").
- He highlights four areas for aspiring founders:
  - **Science:** simulating expensive experiments (AlphaFold, fusion simulations) to counter slowing scientific progress.
  - **Metaverse and AR:** needs fine-grained understanding of the world, a very hard ML problem.
  - **Government, defense and intelligence:** warfare is shifting to digital, and he argues democracies need best-in-class technology.
  - **Broad automation:** AI spreading across every industry.
- He thinks human-like AI with real judgment is far off. He points out that OCR and document processing still do not work fully reliably.
- The nearer-term issue is AI shaping how humans think (content ranking, chatbot "friends" for children). He frames political polarization partly as a "data distribution problem" in ML content systems.

## Lessons from running the company

- **People matter most:** The hardest and most rewarding part has been building the team and getting people to buy into the mission, covering team, investors and customers. If he could tell his earlier self one thing, people matter "10x more" than he thought.
- **Never be paralyzed:** Moments of self-doubt are part of the journey. "It is not okay to be paralyzed." Even the worst action beats no action, because there are no one-way doors and action gives you information to course correct.
- **Customer-centricity:** One of Scale's first large customers took a big bet on a "janky" early product. Scale lost focus on them while chasing other big customers, stopped solving their problem, and they left. It made him question whether Scale had a business. The lesson was to always stay focused on customers and make them ecstatic. He is grateful it happened early.
- **Partner, don't just sell:** On nuanced issues like privacy and bias, he works with customers as partners rather than selling a finished product.
