## Video skill: choosing an approach by job

Corey's "video" skill is an AI agent playbook for producing marketing video. It starts from the job, not the tool, and sorts every request into one of four approaches.

- **Programmatic**: Remotion or Hyperframes. Use for templated, data-driven, batch or recurring video such as product updates, changelogs and personalized outreach.
- **AI generation**: Veo 3, Runway, Kling, Seedance. Use for original footage from prompts, like B-roll, hero shots and visuals that can't be filmed.
- **AI avatars**: HeyGen, Synthesia. Use for talking-head presenters without filming: explainers, tutorials, multilingual content.
- **Editing and repurposing**: Descript, Opus Clip, CapCut. Use to cut long-form (podcast, webinar) into short clips.

His first common mistake is "Starting with tools, not strategy" — decide what video you need before picking tools.

## Intake questions before producing any video

Before starting, Corey has the agent check `.agents/product-marketing.md` (or `.claude/product-marketing.md`) and only ask for what that file doesn't cover. The context to gather:

- **Goal**: video type (demo, explainer, testimonial, social clip, ad, tutorial), target platform (YouTube, TikTok/Reels/Shorts, website, ads, sales deck), desired length.
- **Production approach**: human presenter vs. avatar vs. voiceover vs. screen recording; existing assets (screenshots, logos, product UI); whether generated footage is needed; one-off or reusable template.
- **Technical context**: tech stack, API keys for video tools, budget (some tools charge per minute of video).

## Programmatic video: Hyperframes vs. Remotion

He recommends Hyperframes for agents. It is open source (Apache 2.0), from HeyGen, and uses plain HTML/CSS/JS with no framework DSL. His reasoning: "AI models generate better HTML than React components."

- Commands: `npx hyperframes init my-video`, `npx hyperframes preview`, `npx hyperframes render -o output.mp4`.
- A composition is one HTML file. The root sets canvas and length (`data-composition-id`, `data-duration`, `data-width`, `data-height`). Each on-screen element is a clip (`class="clip"` with `data-start`, `data-duration`, `data-track-index`). A paused GSAP timeline registered in `window.__timelines` drives animation.
- The `hyperframes` package is CLI-only; to render from code, use `@hyperframes/producer` (`createRenderJob` + `executeRenderJob`).
- Rendering is deterministic: the same input always gives identical output.
- Best for product announcements, changelogs, data-driven reports, personalized outreach.

Remotion (`npx create-video@latest`) is the mature React option. React components are frames, props drive content, and Remotion Lambda (AWS) renders at scale. It suits complex animations (Spring, interpolate), interactive previews and large batches, but needs a company license for commercial use.

| Factor | Hyperframes | Remotion |
|---|---|---|
| Agent compatibility | Better (plain HTML) | Good (React) |
| Animation | GSAP timelines plus CSS | Advanced |
| Batch rendering | Local | Lambda for scale |
| Learning curve | Minimal | Moderate |
| License | Apache 2.0 | Company license for commercial use |

## AI video generation: model picks and prompting

Corey's model comparison and quick picks:

| Model | Max duration | Best for | Cost |
|---|---|---|---|
| Veo 3 (Google) | Variable | Top overall quality, synced audio | API-based |
| Runway Gen-4 | ~10 sec/gen, up to 4K | Motion control, temporal consistency | $12-76/mo |
| Kling 2.5/3.0 | Up to 2 min | Long takes, lower per-second cost | ~$0.03/sec |
| Seedance (ByteDance) | Short clips | Fast, strong motion fidelity at low cost, batch-friendly | Per-credit |
| Hailuo / MiniMax | Short clips | Character consistency across shots | Per-credit |
| Pika 2.x | Short clips | Quick effects, image-to-video | Per-credit |
| Hunyuan Video / Wan 2 | Variable | Open-source, self-hosted, no API fees | Free (GPU) |

- Highest quality plus audio: Veo 3.
- Batch, volume, cost: Kling, Seedance.
- Character consistency across shots: Hailuo.
- Self-hosted, brand-controlled: Hunyuan Video or Wan 2.
- Storyboard to video: Runway, LTX Studio.
- Image-to-video from an existing still: Kling, Pika, Runway.

Prompt formula: **subject + action + camera + style + mood**. His example: "A close-up shot of hands typing on a laptop keyboard, shallow depth of field, warm office lighting, camera slowly pulls back to reveal a modern workspace, cinematic color grading, 4K."

Prompt mistakes he flags: too vague ("a person working"), ignoring camera movement (specify dolly, pan, static), forgetting style ("cinematic," "documentary," "commercial"), and requesting readable text, which models struggle with.

AI generation vs. stock: use AI for an exact imagined scene or consistent style across clips. Use stock for recognizable real locations (AI hallucinates them). Neither works for specific products or brands; use programmatic video for those. For quick B-roll, either works.

## AI avatars: when to use them and when not to

Corey recommends HeyGen, which has an official MCP server so agents can generate avatar videos directly. He cites best lip-sync and micro-expressions, 230+ avatars and 140+ languages.

- Plans: Free is 3 videos/mo with a 3-minute max; Creator is unlimited at 5 minutes; Business is unlimited at 20 minutes. Check heygen.com/pricing for current prices.
- Custom avatar ("digital twin"): upload a 2-5 minute video of yourself and generate videos from text scripts.
- Synthesia: full-body avatars, script generation from URLs/docs. Best for corporate training and compliance, where "professional tone > realism."

Use an avatar for recurring content (weekly updates), multilingual versions and personalized outreach at scale. Don't use one for authentic founder content (film yourself), product UI walkthroughs (screen recording) or creative/artistic video (AI generation). If quality matters, invest in HeyGen Creator+ to avoid the uncanny valley.

## Repurposing and reverse-engineering a video edit

Tools Corey lists:

- **Descript**: transcript-based editing, for cleaning up interviews, podcasts, webinars.
- **Opus Clip**: auto-clips long videos and scores virality, for long-form to short-form at scale.
- **CapCut**: effects, captions, platform-native styling for TikTok/Reels.
- **Captions.ai**: auto-captions, eye-contact correction, AI dubbing for solo talking-head content.

Repurposing workflow: long-form content, then Descript (clean up, remove filler), then Opus Clip (extract the 5-10 best moments), then CapCut (captions, effects, platform styling), then distribute to TikTok, Reels, Shorts, LinkedIn.

To copy the style of an edit you admire, he has the agent decompose it into an **edit spec** (a beat sheet):

1. Pull the reference with watch-video (visual mode extracts frames at cut points) or social-fetch.
2. Extract cut rhythm, caption treatment, punch-ins, on-screen text and sound design, beat by beat.
3. Output a per-beat table plus the 3-5 signature moves that make the edit recognizable.
4. Review the beat sheet once, then execute it in Remotion/Hyperframes, CapCut or an AI restyle tool.

The rule: copy the editing grammar, never the reference's footage, script or music.

## Production workflows and the agent-native pipeline

**Product demo:**
1. Script key features and value props (copywriting skill).
2. Screen record the product flow.
3. Add titles, callouts and transitions programmatically with Hyperframes/Remotion.
4. Generate establishing or lifestyle B-roll with Veo/Runway.
5. Voiceover yourself or use an avatar.
6. Export at platform specs.

For repeatable web-app demos re-recorded every release, he drives the app with Playwright, adding subtitles, a visible cursor and optional TTS narration.

**Explainer:**
1. Script the problem, solution, CTA arc.
2. Pick the presenter: avatar (HeyGen) or voiceover plus visuals.
3. Build visuals from programmatic slides, screen recordings and AI scenes.
4. Always add captions.
5. Export landscape for YouTube/website, vertical for social.

**Batch social clips:**
1. Build a master template in Hyperframes/Remotion.
2. Feed it data (features, testimonials, stats).
3. Render a batch of variations from the one template.
4. Add platform-specific captions via CapCut or Captions.ai.
5. Schedule across platforms.

**Agent-native pipeline:** the agent writes a script from product context, then Hyperframes renders templated video (HTML to MP4) and/or the HeyGen MCP generates avatar video and/or Veo/Runway APIs generate B-roll. The agent assembles the final cut with no manual editing step. It works because Hyperframes is plain HTML, HeyGen has an MCP server, and video models take standard HTTP requests.

## Common video mistakes Corey warns about

- Starting with tools, not strategy.
- Using AI-generated text in video. Models can't reliably render readable text, so use programmatic overlays.
- Uncanny-valley avatars (invest in HeyGen Creator+ if quality matters).
- No captions: "85% of social video is watched without sound."
- Wrong aspect ratio: 9:16 for social, 16:9 for YouTube/website, 1:1 for feeds.
- Over-producing: "authentic often outperforms polished, especially on TikTok."

Related skills he points to: social (video content strategy, hooks, what to post), ad-creative (paid video ads), copywriting (scripts), marketing-psychology (hooks and persuasion).
