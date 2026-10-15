## Theo's trigger for building tools: a problem he personally has

- Theo builds small tools when he hits a problem that "seems really easy to solve" but the existing solutions are expensive, broken, or both ("charging you money for something that doesn't work").
- His own case: he often has an SVG (a company or framework logo) that he needs as a PNG, because most video editors don't support SVGs even though his graphics editor does.
- He built two free, open source tools out of annoyance. He says he doesn't know how much he'll maintain them: "I wanted to solve the problem that I had and now the problem is solved and I am happy."
- The tools live on a service called Quick Pick (quickpick.t3.gg), with a Square image generator and an SVG to PNG converter.

## What was wrong with the existing SVG to PNG tools

- One free tool accepted any upload (zips, folders), so finding the actual SVG was annoying. It was slow and could not scale the output. An SVG that declared a small size (a logo at 117 by 24 pixels) came out as a roughly 2 KB blurry PNG. He notes there was no way to say "since SVG is a scalable vector, scale it up a little bit."
- It also offered PNG to SVG, which he calls fundamentally misguided. You can't turn pixels into a vector; tools like Figma embed the PNG as a base64 data blob inside the SVG. Run through a real tracing tool (Affinity), his face became a "weird watercolor pastel" mess. His advice: if you're looking for a PNG to SVG converter, your understanding of both formats is wrong.
- CloudConvert (cloud-based, so it costs them money) lets you raise the width in settings, but after about three conversions it demands a paid subscription.
- Both tools lacked the one-line fix of restricting the file input to SVGs (`accept=svg`).

## How Theo's SVG to PNG tool works

- It runs entirely in the browser, with roughly 30-40 lines of core logic. It works with Wi-Fi off and needs no cloud.
- UX choices: upload only accepts SVGs, it shows the original resolution and the scaled output resolution, and the saved file name includes the multiplier used. He initially shipped only a custom scale option and planned to add presets.
- Implementation:
  - Parse the SVG string with a `DOMParser`, read the width and height attributes, multiply them by the scale, and serialize it back.
  - Load the scaled SVG as an image (`data:image/svg+xml` with `encodeURIComponent`), draw it to a canvas sized to match, convert the canvas to a PNG data URL, and trigger the download by programmatically clicking an `a` tag. He notes that "there's no download API," only links.
  - He used `useState` instead of a ref for the canvas, because refs gave him stale references.
  - Most of the Square tool's code was AI-generated (Cursor); he wrote the SVG tool himself. He runs React Compiler on the project.
- He logs saves to Plausible, his go-to anonymous analytics provider. In about 12 hours the site got around 1,000 visitors and 207 conversions.
- A community contributor already sent a PR removing his leftover console logs, and he explicitly invites PRs.

## The Square image generator and why it exists

- Problem: YouTube Community posts crop non-square images, and you can't show the whole image in the preview. Reddit blurs the sides to fit a square, but YouTube does not.
- Fix: take any non-square image, pad it to a square with a white or black background, and save. He uses it for memes (for example from r/ProgrammerHumor) in his Community posts.
- The existing tool he used before had several friction points:
  - It defaulted to a hard-to-justify red background.
  - It used a blur-hash background that "literally never ever works."
  - It needed about three times more clicks than necessary, with no way to switch images without refreshing.
- His design choices: the background defaults to white (the right default), black is one click, saving is one click without scrolling, and you can cancel.
- YouTubers have told him they were amazed nobody had built this before.
- Remaining to-dos he listed: drag and drop (the label wraps the input, so it needs a fix), more options, a bulk processor, and a favicon generator that people asked for.

## The takeaway: build what you need

- Theo's main point is that he is not a "God Dev" or a "product visionary." He built these because he needed them. Plenty of developers could have built the same thing.
- "Everyone has unique needs based on the things that they do." Whatever is not optimal in your life, a piece of software could make it easier, whether or not you know how to write it yet. His advice: do it.
- His track record backs the pattern: "some of the most successful things I have built have been for me wanting something so badly that I built it for my own use case and then it blew up almost immediately afterwards." Examples he names are UploadThing, Pick Thing, Quick Pick, his work at Twitch, Ping.gg, and the YouTube channel itself.
- The channel exists because he wanted a senior-plus, conversational deep dive into tech and nobody had made one.
- His claim: if you make the thing you want to exist and make it good enough that you genuinely enjoy it, you will almost certainly eventually find success. In the worst case you have a great thing to talk about in your next interview.
