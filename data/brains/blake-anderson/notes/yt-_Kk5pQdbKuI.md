## Mindset: Build Fast Without Faking It

- Blake says anyone claiming you can build a working app "in an hour with AI" is lying. He says anyone claiming you can't go from zero to a fully working app in a month with AI is lying too: "the truth lies somewhere in between."
- The biggest barrier for beginners is mindset, not technical skill. He built RizzGPT with almost no coding experience, using AI as a teacher and personal assistant rather than something that does all the work.
- Growth mindset: don't get discouraged if it takes longer than an hour, but push to move as fast as possible and reject the idea that building will take a year. Start today even if you're not ready, and you'll figure it out over time.
- Expect a bad first version. The first RizzGPT was "horrendous," but it worked, "and that's the only thing that matters."
- Blake counts himself as the first person to build three different mobile apps (RizzGPT, UMAX, Cal AI) that each reached millions in revenue and millions of downloads in one year. He focuses on single-service apps with no social features and no complex backend.

## Deep Work: Block Time and Ship

- Building needs focused, uninterrupted time. People used to social media often struggle moving from fast-moving feeds to deep, isolated work.
- Example: block 4 hours of deep work for coding with no phone, no email, no distractions. Just you, the code editor, some AI, and Stack Overflow.
- It's about making hours count, not working more hours. Set a specific goal per session, such as:
  - Build the camera interface.
  - Finish onboarding.
  - Add a paywall.
- Don't code endlessly. Make a plan and execute it.
- Apps fail not because of bad code but because nothing ships. "The biggest failure you can make as a developer isn't shipping bad code, it's not shipping any code at all."

## Progressive Overload: Start Small, Scale Up

- Like lifting weights, increase difficulty gradually, both in your product and your skills.
- Product: launch with the smallest possible feature set.
  - RizzGPT: upload a screenshot, get a response.
  - UMAX: upload a face photo, get ratings.
  - Cal AI: upload a food photo, get calories.
- Skills: start with easy apps. Had Blake started with UMAX or Cal AI, they would have taken at least twice as long as RizzGPT, and he might never have finished.
- Add features and take on harder projects over time. A bug that takes 10 hours at first may take 5, then 3, then 2, then the 1 hour it should take.
- Loop: "Build, launch, learn."

## Tech Stack Recommendation for 2025

- Frontend: React Native with Expo, built in Cursor.
  - React Native is the core framework, Expo simplifies the workflow, and Cursor is the best AI code editor.
  - Lets you build for iOS and Android at once, ship updates quickly, and use AI to speed development.
  - Blake started with SwiftUI, but if he started today he would use this stack.
- Priority is learning the frontend and shipping as fast as possible. His bias: "execute first, learn second." If you're already a developer on another stack, that's fine; this is the best stack for beginners in 2025.

## Backend and Tooling

- Blake says he's not a backend expert and speaks from his own experience and what he's seen successful apps do. He prefers letting big established platforms handle the heavy lifting rather than heavy custom setups.
- Supabase or Firebase: handle user authentication, databases, file storage, API endpoints and more.
- Superwall: for testing paywalls and monetization. It lets you A/B test paywalls and offers at different points in the app with different designs, in real time.
- AI features: use Anthropic (Claude) or OpenAI (ChatGPT) APIs. Read their documentation to understand how the endpoints work.
- Keep up with the latest AI capabilities to improve existing features or create entirely new ones.

## Prompting AI Effectively

Blake calls prompting probably the most important skill of the future, beyond app development.

- Be specific and structured. Break complex tasks into smaller ones. Without examples of what you want, AI has to guess, like working with another human.
- Iterate and refine. Short feedback loops (as in marketing) let you learn fast what works. Try different ways of talking to the AI and explaining what you want.
- Save your prompts. He keeps different prompts for code generation (with formatting preferences for a given project) and for content scripts. Build an arsenal across AI development, content creation, marketing and ideation.
- Example of a vague vs. specific prompt for an initial layout:
  - Vague: "Can you build an app where I upload a screenshot and it gives me responses for girls?"
  - Specific: one button in the center reading "Upload screenshot," white text inside, red outline around it; tapping it opens the photo library to pick an image, which then calls the OpenAI API.
  - He then iterates back and forth until the structure matches what he wants, and remembers (or saves) the prompting techniques that worked best.
- "AI is a co-pilot, not an autopilot." The better and clearer your instructions, the more value you get. It takes time to learn, but it's likely the best investment you can make in yourself.
