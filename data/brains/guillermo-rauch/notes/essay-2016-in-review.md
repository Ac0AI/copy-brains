## Building ZEIT: now, Hyper, Next.js (2016)

Guillermo started ZEIT in November 2015 with Tony Kovanen and Naoyuki Kanezawa. He chose to launch with "people you love and respect" as a hedge against the personal risk of founding a company. The mission: "empower the individual. At home or inside companies and teams. Go directly to production without barriers." The aim is cloud deployment that is simple, instant and global. In his view, "a cloud where you choose regions is not living up to its name."

By January 2017 the team had grown to 8 people.

## now: one-command, immutable deployments

Announced in April 2016, `now` deploys any project with one command. It takes a `package.json`, `Dockerfile` or static files, builds them in the cloud and serves them under HTTP/2.

- Each deployment is immutable and gets its own unique URL (e.g. `rauchg-blog-hhafwnefgw.now.sh`).
- The same system covers development, staging and production. You deploy to build and test, and "stage" by sharing the link with co-workers or clients before going live.
- Going to production is a single `alias` command (`now alias <deployment> rauchg.com`), with zero downtime. He used this to publish the blog itself.
- Milestones by end of 2016: 2 billion+ requests served, 40,000+ deployments, and usage nearly doubled in the last two months of the year.
- Adopters included government, health care, non-profits, tourism, education (hackathons, Ivy League classrooms), many Fortune 500 companies, and parents teaching kids to code.

## ZEIT World: removing the DNS/SSL bottleneck

Guillermo calls dealing with SSL certificates, domains and DNS records "very tedious," for individuals and for teams. He has seen too many companies that depend on one specific person or team for this. Such processes "kill productivity and create invisible barriers for product engineers," and people get used to them.

- ZEIT World is a free global DNS solution.
- When `alias` is used with a new domain, ZEIT checks whether it uses its nameservers. If so, it configures the records automatically.

## Hyper: the terminal as a web-tech platform

He sees the CLI as a combination of elegance and productivity.

- Elegant because most CLI programs follow the Unix philosophy: they do one thing well, compose, are easy to replace, and resist bloat.
- Productive because "text is king": low-bandwidth, fast to input, searchable (he cites `ctrl+r`).
- Hyper is the "Atom of terminals": open source, built and extended with web technologies on Electron. URLs can render as sandboxed `<webview>` tags.
- Milestones: 300,000+ downloads, 13,000+ GitHub stars, 300+ plugins and themes. It launched on Windows and Linux after macOS, and beat native terminals on some benchmarks.
- Plugins explored new CLI directions: HTML rendering, charts, status lines.

## Next.js: server-rendered React, minimal setup

Next.js is a minimalist framework for universal React apps. He describes it as bringing back good ideas from PHP: no setup, start from the filesystem, automatic routing, and pre-rendered HTML on the first hop instead of a blank page.

- Start with `./pages/index.js` exporting a component, then run `next`.
- Each page is a webpack entry point, so each section becomes its own bundle based on its imports. No more shipping "several megabytes of JS code with each page."
- React's declarative model allows `<Link>` prefetching in the background via a ServiceWorker, which is why zeit.co and his blog feel snappy.
- Positioning: a generalization of the site vs app paradigms. Sites pre-render markup and load code lazily; apps download everything up front and feel faster afterwards. Next.js does both.
- He says it enables the "7 principles of rich web applications" he wrote about in 2014.

## Developer-experience details he adopts

- **Addressable errors:** his only essay of 2016. Whenever he writes an error to a terminal or console, he attaches a URL, inspired by React's warnings. Instead of users Googling error messages, they land on a resource that can be updated over time and commented on.
- **Gradient default avatars:** hash the customer UID, take `mod 360` as the HSL hue, and spin evenly around the cylindrical HSL space to find harmonic colors. This makes multiple accounts easy to tell apart.
- **Universal code styles:** he now uses `standard` for JavaScript (no semicolons) and was initially skeptical. He is glad to spend no time debating style and wants this mindset applied to every language his teams use.
- **Emoji reactions:** he first expected them to be an annoying gimmick, especially for work. He now calls emojis "one of the best tools for conveying nuance and emotion" in text, since reactions add information to a channel without clutter and let people share how they feel instead of staying quiet.
- **Accessibility:** inspired by a talk from IBM Fellow Chieko Asakawa, he argues accessibility drives invention (braille went digital before consumer e-books; the telephone grew out of work for the hearing-impaired; the blind community adopted internet forums early). His conclusion: "No excuses anymore for disregarding accessibility!"

## Ideas about networks, unpredictability and humility

- **The Earth is a brain:** the effectiveness of this "mega-brain" depends on how well individual "sub-brains" communicate. His example is Terence Tao solving the Erdős discrepancy problem after a stranger's blog comment (Uwe Stroinski). The whole is greater than the sum of its parts, so an individual's role is diminished.
- **Unpredictability:** citing Nick Szabo's "rolling singularity," people "can't generally predict what's going to happen next in markets or which new startups will succeed in the long run."
- He expects fast, free, unrestricted internet to have an outsized impact.
- **Interface vs reality:** from Donald Hoffman, perception is a set of evolutionary "hacks." His takeaway: "don't mistake the UI for the reality of the computer behind it."
- **"True enough":** he is drawn to accepting an inherent messiness in explanations. "True enough is as true as can be gotten."

## Bitcoin as a battery

He answers the objection that proof-of-work is wasteful. If a system has no trusted third party, it must be anchored to a universally verifiable reality, and physical energy expenditure provides that. The cost of running Bitcoin is the exact cost of a system that trusts a network with no privileged nodes.

Via Chandler Guo, he adds a second incentive: if you produce surplus electricity, "Bitcoin mining is your battery." He cites Adam Back's framing of Bitcoin as a universal element representing proof-of-joules spent.

## Side projects

- **thoughtcomplete:** autocomplete for your thoughts, built on the Twitter API. It came from the observation that there are only about `2 * 10^46` meaningfully different English tweets, so people keep making remarkably similar observations and puns.
- He sees npm as the closest thing to a Library of Babel for code: need a module to compare versions? You find all the possible ones.
