## Using the Prompt Maker GPT instead of learning prompt engineering

Ruben offers two routes to better prompts: use his free "Prompt Maker" custom GPT, or learn prompt engineering yourself (Chain-of-Thought prompting, Zero vs. Few-shot prompting, Role - Ask - Steps - Example(s) - Iteration). His framing: ChatGPT is only as good as its input, so the prompt matters, but you can delegate the writing of the prompt.
- The Prompt Maker is a free GPT inside ChatGPT, reported at 700,000+ users, built to convert bad prompts into good ones.
- He updated it on the day of the essay (Jun 8, 2025).
- Access: ChatGPT left menu > "GPTs", or the direct link chatgpt.com/g/g-hhh4w3eov-prompt-maker. The "About" tab on the GPT shows user reviews.
- He says his newsletter will eventually teach the manual techniques too, but this essay focuses on the tool.

## The two-step Prompt Maker workflow

Ruben reduces the process to two steps:
1. Send your bad (even one-line) prompt to the Prompt Maker and get back a better prompt.
2. Copy that prompt (the tool always adds a "Copy" button at the top right), paste it into a new ChatGPT chat, add your own material, and pick the model (he chose o3, via the model picker at the top left).

His expectation-setting on quality: the output is not "the best prompt possible" for the task, but it is "a fantastic start from a one-liner terrible prompt... The best you could have."

## Filling in the placeholders in a generated prompt

Generated prompts contain green placeholder text such as "Insert Linkedin post here". The user must replace it. Ruben's method is to wrap the pasted material in delimiters:

/// what I'm about to share ///
[WHAT I SHARE]
/// what I'm about to share ///

He then pastes the real content (in his example, a random LinkedIn post) inside the delimiters. He acknowledges the final pasted result looks like a "monstrous prompt", but the effort on the user's side is only the two steps above.

## Example 1: LinkedIn hooks across models

- Input to Prompt Maker: "A prompt to write drastically different hooks for a Linkedin post I share."
- He ran the resulting prompt on three models and compared outputs:
  - ChatGPT o3 (his first choice).
  - GPT-4.5 for "a different twist" ("also good").
  - Claude, with the pro tip: "Use Claude-Opus 4 + Extended thinking."
- Takeaway: the same generated prompt is portable across LLMs, and switching models is a cheap way to get a different style of output.

## Example 2: Newsletter topic research

- Input to Prompt Maker: "A prompt to read my last 3 newsletters I input to search the web & give me ideas for new topics."
- He pasted the generated prompt with model o3; ChatGPT then asked him for the newsletters, which he pasted in.
- Result: the answer "blew me away", so long, detailed and on point that he couldn't screenshot it, so he shared the conversation as a ChatGPT share link instead.
- Pattern shown: the generated prompt can make ChatGPT ask for the inputs it needs, so the user does not have to anticipate every field up front.

## How Ruben markets the newsletter (as stated in the essay)

- He reports 40,000 people opened the email.
- His stated referral math: if 1% forward it to a colleague, that is about 4,000 extra subscribers, which he frames as what keeps the newsletter "free forever."
- He calls his own pitch "the annoying marketing part" and keeps it short and self-aware, a pattern of acknowledging the ask openly instead of hiding it.
- The essay itself is distribution for his free tool: the GPT drives traffic to the newsletter and vice versa.
