// Wall of love: kind words from X, LinkedIn, Product Hunt and Reddit, shared by the home page and /love.
// Like the brains, every quote links to its source. Quotes are verbatim (trimmed of leading @mentions);
// `mark` is the phrase that gets the highlighter. Avatars live in /assets/love (deployed, never committed),
// so a missing file falls back to initials.
import { fmtDate, h, icon } from "./shared.js";

const PLATFORMS = { x: "X", linkedin: "LinkedIn", producthunt: "Product Hunt", reddit: "Reddit" };
const asset = (file) => `/assets/love/${file}`;

export const LOVE = [
  {
    platform: "x",
    name: "Alex West",
    handle: "Grew CyberLeads to $500k/yr",
    avatar: asset("alexwestco.jpg"),
    date: "2026-10-19",
    url: "https://x.com/alexwestco/status/2112151182256824441",
    text: [
      "Bro brains.ceo is actually not bad! 🔥",
      "I installed my own “brain” just to test it and asked it a simple question. “How do I pick a business idea that actually makes money?”",
      "On the left, it's the default LLM answer. And on the right, it's digital Alex.",
      "Sounds a little too absolute in my opinion, but it's actually something I might say in real life!",
    ],
    mark: "something I might say in real life",
    shots: [
      { src: asset("alex-default-llm.jpg"), alt: "The default LLM's answer", w: 1100, h: 356 },
      { src: asset("alex-brain.jpg"), alt: "The answer from Alex West's brain, based on his framework", w: 1100, h: 782 },
    ],
  },
  {
    platform: "producthunt",
    name: "Adrian",
    handle: "Founder’s cybersecurity handbook",
    avatar: asset("like_who.jpg"),
    date: "2026-10-21",
    url: "https://www.producthunt.com/posts/the-brains?comment=5968865",
    text: "Might be the best mcp server idea I saw in a while, imagine having alex west rate your idea or improving it after his model",
    mark: "best mcp server idea I saw in a while",
  },
  {
    platform: "linkedin",
    name: "Octavia Niekoop",
    handle: "Head of Operations",
    avatar: asset("octavia-niekoop.png"),
    date: "2026-10-16",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7516538147715854336?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7516538147715854336%2C7516820523214036992%29",
    text: "wow, apparently I don't need to catch up with Hormozi's podcast on 1.5 speed anymore as I intended to 🤯💫🍾🥂 Thank you Victor Giurgiu!",
    mark: "I don't need to catch up with Hormozi's podcast on 1.5 speed anymore",
  },
  {
    platform: "reddit",
    name: "u/geoffreybyers",
    handle: "r/ClaudeAI",
    avatar: asset("geoffreybyers.png"),
    date: "2026-10-16",
    url: "https://www.reddit.com/r/ClaudeAI/comments/1x7ox1x/i_used_headless_claude_code_to_turn_18_founders/",
    text: "The value is the retrieval layer that forces citation. It solves the hallucination problem inherent in impersonation prompts. The LLM does not need to roleplay the persona. It needs to point to the quote. This approach turns a creative exercise into a utility.",
    mark: "turns a creative exercise into a utility",
  },
  {
    platform: "x",
    name: "Demetrius",
    handle: "@iamdemetrius_",
    avatar: asset("iamdemetrius_.jpg"),
    date: "2026-10-20",
    url: "https://x.com/iamdemetrius_/status/2112456327549333872",
    text: "This literally seems too good to not be monetized 🤯 Keep it up, Vic!",
    mark: "too good to not be monetized",
  },
  {
    platform: "x",
    name: "Product Hunt",
    handle: "@ProductHunt",
    avatar: asset("producthunt.jpg"),
    date: "2026-10-21",
    url: "https://x.com/ProductHunt/status/2112925633005383709",
    text: "Ask Claude how Paul Graham would price your thing and it answers confidently, whether or not he ever said it. The Brains built 37 founders into MCP servers from their talks and essays, with a link on every answer.",
    mark: "a link on every answer",
  },
  {
    platform: "reddit",
    name: "u/AccidentallyVenomous",
    handle: "r/LLMDevs",
    avatar: asset("accidentallyvenomous.png"),
    date: "2026-10-24",
    url: "https://www.reddit.com/r/LLMDevs/comments/1xe5vnv/llms_are_bad_at_quoting_people_so_i_stopped/",
    text: "this is really well thought out, i love how you moved the citation problem out of the llm completely and just let the index carry the metadata",
    mark: "really well thought out",
  },
  {
    platform: "linkedin",
    name: "Eric Melchor",
    handle: "Founder, 3rd Space Bucharest AI Circle",
    avatar: asset("eric-melchor.jpg"),
    date: "2026-10-24",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7519360401986265088?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7519360401986265088%2C7519631509595566080%29",
    text: "lots of ideas generated to help me with my projects 🙂",
    mark: "lots of ideas generated",
  },
  {
    platform: "producthunt",
    name: "Thami Benjelloun",
    handle: "Mailwarm",
    avatar: asset("thamibenjelloun.jpg"),
    date: "2026-10-21",
    url: "https://www.producthunt.com/posts/the-brains?comment=5969159",
    text: "Really like that every answer is cited, that's the whole point.",
    mark: "every answer is cited",
  },
  {
    platform: "x",
    name: "Nevo David",
    handle: "Building Postiz",
    avatar: asset("wickedguro.jpg"),
    date: "2026-10-20",
    url: "https://x.com/wickedguro/status/2112451470511751428",
    text: "🔥 remember me when you are a millionaire :D",
    mark: "remember me",
  },
  {
    platform: "x",
    name: "青雲",
    handle: "Indie app maker",
    avatar: asset("echo_vic.jpg"),
    date: "2026-10-23",
    url: "https://x.com/echo_vic/status/2113522028435448304",
    text: "Found a pretty interesting open-source project, The Brains. I build indie apps, and when I'm pricing or writing store copy, what I most want to reference is the actual words of people like Levels. Before, I could only dig through their tweets myself.",
    mark: "the actual words of people like Levels",
    note: "Translated from Chinese",
  },
  {
    platform: "reddit",
    name: "u/ruprechttmb",
    handle: "r/SideProject",
    avatar: asset("ruprechttmb.png"),
    date: "2026-10-19",
    url: "https://www.reddit.com/r/SideProject/comments/1xa5e1f/i_cloned_paul_graham_naval_and_28_other_founders/",
    text: "the only answers with a source link part is what makes this actually useful, half the founder advice floating around is stuff nobody ever said.",
    mark: "what makes this actually useful",
  },
  {
    platform: "linkedin",
    name: "Dustin Howes",
    handle: "VP of Product Marketing @ XPFlow",
    avatar: asset("dustin-howes.png"),
    date: "2026-10-15",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7516538147715854336?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7516538147715854336%2C7516556469442342912%29",
    text: "woah, that is cool. Did I make the cut? lol",
    mark: "that is cool",
  },
  {
    platform: "x",
    name: "Saïd Aitmbarek",
    handle: "Founder, Microlaunch",
    avatar: asset("saidaitmbarek.jpg"),
    date: "2026-10-21",
    url: "https://x.com/SaidAitmbarek/status/2112940479692128650",
    text: "love the founder brains as mcp idea lol :) .. upvoted",
    mark: "love the founder brains as mcp idea",
  },
  {
    platform: "producthunt",
    name: "Igor Krasnik",
    handle: "Clipwing",
    avatar: asset("igorkrasnik.jpg"),
    date: "2026-10-21",
    url: "https://www.producthunt.com/posts/the-brains?comment=5969316",
    text: "great stuff, love it, congrats with the launch and thanks for making it opensource!",
    mark: "great stuff, love it",
  },
  {
    platform: "linkedin",
    name: "Cynthia Chan",
    handle: "Leadership Coach & Business Strategist",
    avatar: asset("cynthia-chan.jpg"),
    date: "2026-10-21",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7518609981458284544?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7518609981458284544%2C7518614387096518656%29",
    text: "The future of AI agents depends on the quality of knowledge behind their responses. Greater depth and perspective can make interactions much more powerful.",
    mark: "the quality of knowledge behind their responses",
  },
  {
    platform: "x",
    name: "David Toniolo",
    handle: "@davidtoniolo",
    avatar: asset("davidtoniolo.jpg"),
    date: "2026-10-20",
    url: "https://x.com/davidtoniolo/status/2112514493762981916",
    text: "Great idea, but what's most impressive about it is the list of people NOT on it.",
    mark: "Great idea",
  },
  {
    platform: "reddit",
    name: "u/Sweet-Neat-9082",
    handle: "r/buildinpublic",
    avatar: asset("sweet-neat-9082.png"),
    date: "2026-10-21",
    url: "https://www.reddit.com/r/buildinpublic/comments/1xbk5ep/6_days_from_first_commit_to_product_hunt_launch/",
    text: "Great idea! I added alex hormozi’s brain now. And thanks for your sharing, really helpful.",
    mark: "really helpful",
  },
  {
    platform: "x",
    name: "Manish",
    handle: "Micro SaaS Examples",
    avatar: asset("ideasbymanish.jpg"),
    date: "2026-10-22",
    url: "https://x.com/ideasbymanish/status/2113305918683369982",
    text: "this is such a good product man",
    mark: "such a good product",
  },
  {
    platform: "linkedin",
    name: "Tyler S.",
    handle: "Affiliate & Performance Marketing",
    date: "2026-10-15",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7516549982183931905?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7516549982183931905%2C7516596666053922816%29",
    text: "Very cool - gunna take it for a spin soon!",
    mark: "Very cool",
  },
  {
    platform: "x",
    name: "Hasif",
    handle: "@hasif_dev",
    avatar: asset("hasif_dev.jpg"),
    date: "2026-10-23",
    url: "https://x.com/hasif_dev/status/2113684299811889486",
    text: "An Engineer cloned CEO brains and open-sourced it",
    mark: "cloned CEO brains",
  },
  {
    platform: "reddit",
    name: "u/Vanille-Niva",
    handle: "r/buildinpublic",
    avatar: asset("vanille-niva.png"),
    date: "2026-10-21",
    url: "https://www.reddit.com/r/buildinpublic/comments/1xbk5ep/6_days_from_first_commit_to_product_hunt_launch/",
    text: "6 days is solid execution.",
    mark: "solid execution",
  },
  {
    platform: "x",
    name: "Pietro Zullo",
    handle: "Co-founder, Manufact",
    avatar: asset("pietrozullo.jpg"),
    date: "2026-10-20",
    url: "https://x.com/pietrozullo/status/2112549559750783389",
    text: "Now let’s get this on the stores 🚀",
    mark: "get this on the stores",
  },
  {
    platform: "linkedin",
    name: "Luca Popa",
    handle: "Founding engineer @ Astraea (YC P26)",
    avatar: asset("luca-popa.png"),
    date: "2026-10-15",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7516549982183931905?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7516549982183931905%2C7516573972814172161%29",
    text: "Really nice work, victor !!",
    mark: "Really nice work",
  },
  {
    platform: "x",
    name: "Akbar Ali",
    handle: "@heyakbarali",
    avatar: asset("heyakbarali.jpg"),
    date: "2026-10-20",
    url: "https://x.com/heyakbarali/status/2112460976041914674",
    text: "140 installs in 5 days is solid",
    mark: "is solid",
  },
  {
    platform: "x",
    name: "Fondo",
    handle: "@Fondocom",
    avatar: asset("fondocom.png"),
    date: "2026-10-22",
    url: "https://x.com/Fondocom/status/2113057750653514185",
    text: "Congrats on the launch @PiticVic & team The Brains! 🚨 Live on @ProductHunt 👇",
    mark: "Congrats on the launch",
  },
  {
    platform: "reddit",
    name: "u/moviscribe",
    handle: "r/coolgithubprojects",
    avatar: asset("moviscribe.png"),
    date: "2026-10-24",
    url: "https://www.reddit.com/r/coolgithubprojects/comments/1xe5wb5/the_brains_42_founders_and_investors_as_mcp/",
    text: "Very neat. I'll add it to the test pile.",
    mark: "Very neat",
  },
  {
    platform: "x",
    name: "Ryan",
    handle: "@ryantalks1024",
    avatar: asset("ryantalks1024.jpg"),
    date: "2026-10-20",
    url: "https://x.com/ryantalks1024/status/2112678637514412268",
    text: "Such a good idea",
    mark: "Such a good idea",
  },
  {
    platform: "x",
    name: "Priyam Raj",
    handle: "@priymrj",
    avatar: asset("priymrj.jpg"),
    date: "2026-10-23",
    url: "https://x.com/priymrj/status/2113604827553157127",
    text: "LFG this is interesting",
    mark: "this is interesting",
  },
];

function quoted(text, mark) {
  const at = mark ? text.indexOf(mark) : -1;
  if (at < 0) return [text];
  return [text.slice(0, at), h("mark", {}, mark), text.slice(at + mark.length)];
}

function avatar(item) {
  const initials = item.name.replace(/^u\//, "").charAt(0).toUpperCase();
  const wrap = h("span", { class: "love-avatar", "aria-hidden": "true" });
  if (!item.avatar) return wrap.append(initials), wrap;
  const img = h("img", { src: item.avatar, alt: "", width: 44, height: 44, loading: "lazy", decoding: "async" });
  img.addEventListener("error", () => img.replaceWith(initials), { once: true });
  wrap.append(img);
  return wrap;
}

function card(item) {
  const paragraphs = Array.isArray(item.text) ? item.text : [item.text];
  return h(
    "a",
    { class: "love-card", href: item.url, target: "_blank", rel: "noopener" },
    h(
      "span",
      { class: "love-by" },
      avatar(item),
      h("span", { class: "love-who" }, h("b", {}, item.name), h("span", {}, item.handle)),
      h("span", { class: `love-src ${item.platform}` }, icon(item.platform), h("span", { class: "sr-only" }, `on ${PLATFORMS[item.platform]}`)),
    ),
    h(
      "span",
      { class: "love-text" },
      paragraphs.map((p) => h("span", { class: "love-p" }, quoted(p, item.mark))),
    ),
    item.shots
      ? h(
          "span",
          { class: "love-shots" },
          item.shots.map((s) => h("img", { src: s.src, alt: s.alt, width: s.w, height: s.h, loading: "lazy", decoding: "async" })),
        )
      : null,
    h("span", { class: "love-date" }, h("time", { datetime: item.date }, fmtDate(item.date)), item.note ? ` · ${item.note}` : null),
  );
}

/** Row-first masonry (Testimonial.to-style): each card drops into the shortest column, so reading order stays top-down. */
function layout(wall, cards) {
  const count = innerWidth >= 1000 ? 3 : innerWidth >= 640 ? 2 : 1;
  if (wall.childElementCount === count && wall.dataset.cols) return;
  wall.dataset.cols = String(count);
  const cols = Array.from({ length: count }, () => h("div", { class: "love-col" }));
  wall.replaceChildren(...cols);
  const heights = cols.map(() => 0);
  for (const el of cards) {
    const i = heights.indexOf(Math.min(...heights));
    cols[i].append(el);
    heights[i] += el.offsetHeight + 18;
  }
}

/** Fills `wall` with the cards. They rise in, and the highlighter swipes, as each one reaches the viewport. */
export function mountWall(wall) {
  const cards = LOVE.map(card);
  layout(wall, cards);
  let raf = 0;
  addEventListener("resize", () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => layout(wall, cards));
  });
  if (!("IntersectionObserver" in window)) return void cards.forEach((el) => el.classList.add("is-in"));
  const seen = new IntersectionObserver(
    (entries) => {
      let n = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.style.setProperty("--d", `${Math.min(n++, 8) * 50}ms`);
        entry.target.classList.add("is-in");
        seen.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -6% 0px" },
  );
  cards.forEach((el) => seen.observe(el));
  wall.classList.add("love-ready");
}

/** Home: the wall starts clipped to a few rows; "Show more love" opens it in place. */
export function mountCollapsedWall(wall, clip, button) {
  mountWall(wall);
  button.addEventListener("click", () => {
    const from = clip.offsetHeight;
    clip.dataset.collapsed = "false";
    button.closest(".love-more").hidden = true;
    const to = clip.scrollHeight;
    clip.animate([{ height: `${from}px` }, { height: `${to}px` }], { duration: 520, easing: "cubic-bezier(0.23, 1, 0.32, 1)" });
    // Keep keyboard users where they were: on the first card that was hidden.
    const top = clip.getBoundingClientRect().top;
    const next = [...wall.querySelectorAll(".love-card")].find((el) => el.getBoundingClientRect().top - top >= from - 40);
    next?.focus({ preventScroll: true });
  });
}
