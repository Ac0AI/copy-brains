## Why AI landing pages look like slop, and the skill Danny built to fix it

Danny was frustrated that, however good AI has become, it still outputs generic, uncreative, inconsistent landing pages that "look like AI." While working on a new landing page for one of his companies, he built a skill to push AI toward higher quality, more creative, more visually pleasing designs. He published it free at danny.md. His framing: one skill turns an "AI slop generator" landing page into something people would "love to look at, would love to use."

## How the explore-design skill works

- **Brand scan (runs once).** When he asks the AI to explore directions for a section such as the hero, the skill first scans the project's color system, typography and overall design style.
- **Component-level exploration.** It then looks at the elements in the section being designed and explores several distinct, unique design directions that could suit the project.
- **Runtime and model.** The exploration normally takes 5 to 10 minutes. Danny "highly recommend[s] using Fable" for this step.
- **Output.** When finished, it opens the browser with a comparison of options and their trade-offs.
- **Invocation.** He types `/explore design` and points it at the section (for example, the hero).

## Reviewing options and locking one in

- The skill returns four options for a section (e.g. a home page hero). Each comes with its own trade-offs, the risk, and what happens if you pick it, so it helps him decide direction rather than just dumping mockups.
- The input was an undesigned, unstyled section; the output was four styled alternatives.
- Danny liked one option for its clear call to action ("where to drop your photo") but felt it lacked a visual showing what the site actually does. He told the skill to combine it with option A into a new "option E": a drop zone plus the earlier visual. The result had a clear place to start the generator and visuals on the right side. He called it "amazing."
- Tactic: you can mix and merge options by instruction rather than accepting only what is generated.

## From chosen design to implemented page

- After he says "lock in E," the skill extracts the design from the HTML file it created.
- It checks whether all requirements for photos and visuals are present. If something is missing, it asks whether to pick a certain asset or limit the design to a certain area.
- Then it implements the design into the real landing page.

## Work section by section, not the whole page

- Danny runs the process for every section of the landing page (hero, before/after, how the PFP maker works, and so on).
- His reason: the AI does not have the context to hold a whole landing page, or a full-page screenshot, at once. Designing everything in one go produces worse results.
- His workflow per section: run explore, get options, choose one, refine it a little, then move on to the next section.

## Not just for landing pages

- Danny says the skill works for "basically everything," not only landing pages.
- Example: the editor in his product. Its output was "absolute undesigned slop." After running the skill and getting inspiration, it produced a design where he could upload a photo, and it "works much much better."

## Installing the skill

- It is free on Danny's site: go to danny.md and open the explore design file, which documents how it works.
- Pick your AI harness (his is Claude Code), copy the install line and paste it into your terminal. It unpacks the archive and places the skill in your skills folder.
- Restart the AI session, type `/explore design`, and it starts running.
