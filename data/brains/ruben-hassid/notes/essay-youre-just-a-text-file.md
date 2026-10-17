## Pack your voice into one compact file

- **Core idea:** Ruben argues that a person's voice, taste, and judgment are patterns, and patterns fit in a text file. After uploading the right file, an AI like Claude can write first drafts he "could have written," and sometimes drafts ideas before he has thought of them.
- **Why it works for him:** His life is complex (French, born in Paris, lived in Seoul, Berlin and Tel Aviv, learned English at 9 from a video game forum, dropped out of university twice, consults Fortune 500 companies on AI, newsletter read by 500,000+ people a week). Twenty years of writing to make people feel still fits in one file.
- **Time cost:** About 2 hours with one file. With Wispr Flow voice dictation, about 90 minutes.
- **Portability:** The same file works in Claude, ChatGPT, Gemini, Grok, or whatever ships next.

## Step 1: Extract yourself with a 100-question interview

- **Setup:** Claude + Cowork + Opus 4.7 with Extended thinking. Dictate answers with Wispr Flow (free). Ruben says voice is "faster and more honest."
- **Prompt 1 casts Claude as a "Taste Interviewer"** who is "not here to be polite" and wants the truth, since most people give vague, socially acceptable answers about their own taste.
- **100 questions, one at a time, across 7 categories:**
  - Beliefs and contrarian takes (15)
  - Writing mechanics (20)
  - Aesthetic crimes (15)
  - Voice and personality (15)
  - Structural preferences (15)
  - Hard nos (10)
  - Red flags (10)
- **Interview rules baked into the prompt:** push back on vague answers, ask for specific examples, call out contradictions, follow interesting threads, don't accept "I don't know" easily.
- **Output:** A "VOICE PROFILE" markdown document with every answer preserved verbatim, plus a Quick Reference Card (Always, Never, Signature Phrases, Voice Calibration). It runs about 20,000 words.
- **Ruben's note:** It is "super fun" because Claude goes deep on introspection.

## Step 2: Compress it into an about-me file

- **Problem:** Most people stop at the 20,000-word dump. It eats the context window, and Claude rereads it on every turn, which costs tokens and money.
- **Prompt 2 casts Claude as a "Voice Compiler"** in the same conversation. It produces a compact file written for AI, not humans.
- **Core test for every line:** "If this line disappeared, would the AI write, edit, judge, refuse, structure, or decide differently?" Keep it if yes, cut it if no.
- **Size target:** Usually 2,000-4,000 tokens, hard ceiling 5,000.
- **Keep:** voice laws, hard refusals, compact BAD/GOOD examples, verbatim phrases, words loved and hated, sentence shapes, taste loves and disgusts, decision rules, tiny tells, productive contradictions.
- **Cut:** generic values, flattering self-description, biography that doesn't change output, aspirations without evidence, long quotes.
- **XML structure:** `<about_me>` with usage, priority, identity_context, voice_fingerprint, writing_laws, communication_laws, hard_refusals, taste_loves, taste_disgusts, phrase_bank, signature_tells, decision_rules, productive_contradictions, golden_examples (3-6), do_not_infer, final_instruction.
- **Priority order inside the file:** current user instructions, then truth/safety/task needs, then hard refusals, then specific examples, then evidence-backed rules, then deeper judgment over surface style.
- **Output must be a .md file.**

## Step 3: Test it, then wire it in

- **Test cold:** Open a blank session with no folder and run a known task. Ruben used "a newsletter like I would have written it on day 1 of ChatGPT" and said it sounded like him.
- **Make it permanent:** Put the about-me file in the Cowork folder so Claude "ALWAYS" reads it before answering. In that mode, he says the brief sounds "exactly like me."
- **Use it with other models too.** He tried ChatGPT-5.5 ("Not so bad") but still prefers Claude.

## Why people resist (and his answers)

- **"It feels reductive."** A person who knows him well read the compressed file and said "yes, that's you." Ruben: it "just made me compatible (to AI)."
- **"It feels scary."** Every belief becomes a commitment and every refusal a rule. He flinched reading his own.
- **"Self-knowledge takes decades."** Much of therapy is articulating what you already feel. The file does the same, because Claude forces specifics and "vagueness won't survive my prompt."
- **"I'm hard to capture."** He claims the mystery is usually just vagueness.

## What you gain and how to maintain it

- **Portable:** hand it to a ghostwriter or any AI.
- **Team use:** give it to customer service staff so they respond "the way you would."
- **Consistent:** do the hard work once (100 questions), then ship.
- **Caveat he names:** AI plus consistency makes you predictable. His solution is to keep editing the file, though he says readers "won't like it."
- **Edit often:** taste changes day by day. Raw .md files are ugly to edit, so he uses Obsidian (free, also on Windows and Linux): "Open folder as a vault," point it at the Cowork folder, and edits sync automatically, including to Cowork.
- **Stated goal:** Capture taste not to be faster, but to free up time for editing, refining, and choosing the right task.
