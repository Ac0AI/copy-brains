// Home: search-first directory. Typing filters rows in place (instant, it's keyboard-driven);
// chip and sort changes move rows with a FLIP animation so they travel instead of teleporting.
import { REDUCED_MOTION, requestBrainUrl, fmtAgo, h, highlight, icon, mountChrome, plural, portrait } from "./shared.js";
import { mountCollapsedWall } from "./love-wall.js";

const CATEGORIES = {
  "indie-hackers": "Indie hackers",
  "ai-builders": "AI builders",
  ceos: "CEOs",
  investors: "Investors",
  marketers: "Marketers",
  operators: "Operators",
  health: "Health",
  thinkers: "Thinkers",
};

const $ = (sel) => document.querySelector(sel);
const input = $("#q");
const searchBox = $("#search");
const rowsEl = $("#rows");
const emptyEl = $("#empty");
const resultLine = $("#result-line");
const sortEl = $("#sort");
const catsEl = $("#cats");
const moreEl = $("#more");
const moreBtn = $("#more-btn");
// The first fold shows this many brains; "Show more" reveals the rest. Searching always shows every match.
const FOLD = 10;
let expanded = false;

const params = new URLSearchParams(location.search);
const state = {
  q: params.get("q") ?? "",
  cat: params.get("cat") ?? "all",
  sort: ["installs", "sources", "updated", "az"].includes(params.get("sort")) ? params.get("sort") : "installs",
};

mountChrome();
$(".search .clear").append(icon("close"));

let brains = [];
const rowFor = new Map();

const posts = (b) => b.stats.xPostCount + (b.stats.linkedinPostCount ?? 0);
const total = (b) => b.stats.longFormCount + posts(b);
const haystack = (b) =>
  [b.name, b.shortName, b.tagline, b.role, b.company, ...b.topics.flatMap((t) => [t.label, t.sampleQuestion]), ...b.principles]
    .filter(Boolean)
    .join(" \n ")
    .toLowerCase();
// Light stemming so "pricing" also finds "price", "launches" finds "launch".
const stem = (t) => (t.length > 5 ? t.replace(/(ing|ed|es|s)$/, "") : t);
const terms = () => state.q.toLowerCase().split(/\s+/).filter(Boolean).map(stem);
const matches = (b) => terms().every((t) => b._hay.includes(t));

function metaText(b) {
  const parts = [
    b.role,
    b.installs > 0 ? plural(b.installs, "install", "installs") : null,
    plural(b.stats.longFormCount, "talk & essay", "talks & essays"),
    posts(b) ? plural(posts(b), "post", "posts") : null,
  ];
  if (b.updatedAt) parts.push(`updated ${fmtAgo(b.updatedAt)}`);
  return parts.filter(Boolean).join(" · ");
}

/** When the query matches a topic or principle rather than the visible text, say why the row matched. */
function whyMatched(b) {
  const ts = terms();
  if (!ts.length) return null;
  const visible = `${b.name} ${b.tagline ?? ""}`.toLowerCase();
  if (ts.every((t) => visible.includes(t))) return null;
  const topic = b.topics.find((t) => ts.some((x) => t.label.toLowerCase().includes(x)));
  if (topic) return h("span", {}, "On ", highlight(topic.label, ts.find((x) => topic.label.toLowerCase().includes(x))));
  const principle = b.principles.find((p) => ts.some((x) => p.toLowerCase().includes(x)));
  if (principle) return h("span", {}, "“", highlight(principle, ts.find((x) => principle.toLowerCase().includes(x))), "”");
  const question = b.topics.find((t) => ts.some((x) => t.sampleQuestion?.toLowerCase().includes(x)));
  if (question) return h("span", {}, "Ask: “", highlight(question.sampleQuestion, ts.find((x) => question.sampleQuestion.toLowerCase().includes(x))), "”");
  return null;
}

function buildRow(b) {
  const ask = b.topics[0]?.sampleQuestion;
  const row = h(
    "a",
    { class: "row", href: `/${b.slug}` },
    h("span", { class: "rank", "aria-hidden": "true" }),
    portrait(b, 52),
    h(
      "span",
      { class: "row-main" },
      h("span", { class: "row-name" }, h("span", { class: "nm" })),
      h("span", { class: `row-tagline${b.status === "building" ? " building" : ""}` }),
      h(
        "span",
        { class: "swap" },
        h("span", { class: `row-meta${ask ? " has-ask" : ""}` }),
        ask ? h("span", { class: "row-ask", "aria-hidden": "true" }, h("b", {}, "Ask: "), `“${ask}”`) : null,
      ),
    ),
    icon("chevronRight", "chev"),
  );
  return row;
}

function paintRow(b, rank) {
  const row = rowFor.get(b.slug);
  const q = state.q.trim();
  row.querySelector(".rank").textContent = String(rank).padStart(2, "0");
  row.querySelector(".nm").replaceChildren(highlight(b.name, q));
  const tag = row.querySelector(".row-tagline");
  if (b.status === "building") {
    tag.replaceChildren(h("span", { class: "dot", "aria-hidden": "true" }), `Brain in progress · ${plural(total(b), "source", "sources")} indexed`);
  } else {
    tag.replaceChildren(highlight(b.tagline ?? "", q));
  }
  const meta = row.querySelector(".row-meta");
  const why = whyMatched(b);
  meta.replaceChildren(why ?? metaText(b));
  meta.classList.toggle("has-ask", !why && Boolean(b.topics[0]?.sampleQuestion));
}

function sorted(list) {
  const by = {
    installs: (a, b) => (b.installs ?? 0) - (a.installs ?? 0) || total(b) - total(a),
    sources: (a, b) => total(b) - total(a),
    updated: (a, b) => (b.updatedAt ?? "").localeCompare(a.updatedAt ?? ""),
    az: (a, b) => a.name.localeCompare(b.name),
  }[state.sort];
  return [...list].sort(by);
}

function renderChips() {
  const counts = new Map();
  for (const b of brains) for (const c of b.categories) counts.set(c, (counts.get(c) ?? 0) + 1);
  const chip = (id, label, n) =>
    h(
      "button",
      { class: "chip", type: "button", "aria-pressed": String(state.cat === id), dataset: { cat: id }, onclick: () => setCat(id) },
      label,
      h("span", { class: "n" }, n),
    );
  catsEl.replaceChildren(
    chip("all", "All", brains.length),
    ...Object.entries(CATEGORIES)
      .filter(([id]) => counts.has(id))
      .map(([id, label]) => chip(id, label, counts.get(id))),
  );
}

function syncUrl() {
  const p = new URLSearchParams();
  if (state.q.trim()) p.set("q", state.q.trim());
  if (state.cat !== "all") p.set("cat", state.cat);
  if (state.sort !== "installs") p.set("sort", state.sort);
  const qs = p.toString();
  history.replaceState(null, "", qs ? `/?${qs}` : "/");
}

/** Applies filters and order. `animate` = FLIP the rows (pointer-initiated changes only). */
function apply({ animate = false } = {}) {
  const before = animate && !REDUCED_MOTION.matches ? new Map([...rowFor].map(([slug, el]) => [slug, el.hidden ? null : el.getBoundingClientRect()])) : null;

  const visible = sorted(brains.filter((b) => (state.cat === "all" || b.categories.includes(state.cat)) && matches(b)));
  const folded = !expanded && !state.q.trim() && visible.length > FOLD;
  const shown = new Set((folded ? visible.slice(0, FOLD) : visible).map((b) => b.slug));
  visible.forEach((b, i) => {
    paintRow(b, i + 1);
    rowsEl.append(rowFor.get(b.slug));
  });
  for (const [slug, el] of rowFor) el.hidden = !shown.has(slug);

  moreEl.hidden = !folded;
  if (folded) moreBtn.replaceChildren(`Show ${plural(visible.length - FOLD, "more brain", "more brains")}`, icon("chevronDown"));
  for (const chip of catsEl.children) chip.setAttribute("aria-pressed", String(chip.dataset.cat === state.cat));
  searchBox.dataset.hasValue = String(state.q.length > 0);
  renderStatus(visible);
  syncUrl();

  if (!before) return;
  for (const b of visible) {
    if (!shown.has(b.slug)) continue;
    const el = rowFor.get(b.slug);
    const from = before.get(b.slug);
    const to = el.getBoundingClientRect();
    if (from) {
      const dx = from.left - to.left;
      const dy = from.top - to.top;
      if (dx || dy) {
        el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], {
          duration: 260,
          easing: "cubic-bezier(0.77, 0, 0.175, 1)",
        });
      }
    } else {
      el.animate([{ opacity: 0, transform: "scale(0.98)" }, { opacity: 1, transform: "none" }], {
        duration: 220,
        easing: "cubic-bezier(0.23, 1, 0.32, 1)",
      });
    }
  }
}

function renderStatus(visible) {
  const q = state.q.trim();
  const filtered = q || state.cat !== "all";
  if (!filtered) resultLine.textContent = "";
  else if (visible.length) {
    const where = state.cat !== "all" ? ` in ${CATEGORIES[state.cat]}` : "";
    resultLine.textContent = `${visible.length} of ${plural(brains.length, "brain", "brains")}${where}${q ? ` match “${q}”` : ""}`;
  } else resultLine.textContent = "";

  emptyEl.hidden = visible.length > 0;
  if (visible.length) return;
  // Round-robin each brain's strongest topics so suggestions cover every brain.
  const depth = Math.max(0, ...brains.map((b) => b.topics.length));
  const suggestions = [...new Set(Array.from({ length: depth }, (_, i) => brains.map((b) => b.topics[i]?.label)).flat().filter(Boolean))].slice(0, 5);
  emptyEl.replaceChildren(
    h(
      "div",
      { class: "empty" },
      h("h2", {}, q ? `No brain for “${q}” yet.` : "No brains in this category yet."),
      h("p", {}, `There are ${plural(brains.length, "brain", "brains")} so far. Try a topic they cover:`),
      h(
        "div",
        { class: "chips" },
        suggestions.map((label) =>
          h(
            "button",
            {
              class: "chip",
              type: "button",
              onclick: () => {
                input.value = label;
                state.q = label;
                state.cat = "all";
                apply({ animate: true });
              },
            },
            label,
          ),
        ),
      ),
      q
        ? h(
            "a",
            { class: "btn btn-primary", href: requestBrainUrl(q), target: "_blank", rel: "noopener" },
            `Request a brain for “${q}”`,
          )
        : null,
    ),
  );
}

function setCat(id) {
  if (state.cat === id) return;
  state.cat = id;
  apply({ animate: true });
}

// Pinned so new brains don't reshuffle the hero; any missing slug is filled from the list.
const HERO_FACES = ["adam-robinson", "alex-hormozi", "alex-west", "alexandr-wang", "naval-ravikant"];

function renderHeroFaces() {
  const el = $("#hero-faces");
  const sources = brains.reduce((t, b) => t + total(b), 0);
  const pinned = HERO_FACES.map((slug) => brains.find((b) => b.slug === slug)).filter(Boolean);
  const faces = [...pinned, ...brains.filter((b) => !pinned.includes(b))].slice(0, 5);
  el.replaceChildren(
    h("span", { class: "stack", "aria-hidden": "true" }, faces.map((b) => portrait(b, 30))),
    h("span", { class: "tnum" }, `${plural(brains.length, "brain", "brains")} · ${sources.toLocaleString("en")} cited sources`),
  );
}

/* ---------- Events ---------- */
input.value = state.q;
sortEl.value = state.sort;
input.addEventListener("input", () => {
  state.q = input.value;
  apply();
});
input.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && input.value) {
    e.preventDefault();
    input.value = "";
    state.q = "";
    apply();
  }
});
$(".search .clear").addEventListener("click", () => {
  input.value = "";
  state.q = "";
  apply({ animate: true });
  input.focus();
});
moreBtn.addEventListener("click", () => {
  expanded = true;
  apply({ animate: true });
  // Keep keyboard focus in the list: on the first newly revealed brain.
  [...rowsEl.children].filter((el) => !el.hidden)[FOLD]?.focus({ preventScroll: true });
});
sortEl.addEventListener("change", () => {
  state.sort = sortEl.value;
  apply({ animate: true });
});
addEventListener("keydown", (e) => {
  const typing = e.target instanceof HTMLElement && (e.target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName));
  if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
    e.preventDefault();
    input.focus();
    input.select();
  }
});

mountCollapsedWall($("#wall"), $("#love-clip"), $("#love-more"));

/* ---------- Load ---------- */
try {
  const res = await fetch("/api/brains");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  brains = (await res.json()).map((b) => ({ ...b, _hay: haystack(b) }));
  for (const b of brains) rowFor.set(b.slug, buildRow(b));
  if (!brains.some((b) => b.categories.includes(state.cat))) state.cat = "all";
  renderHeroFaces();
  renderChips();
  rowsEl.classList.add("first-paint");
  apply();
  [...rowsEl.children].forEach((row, i) => row.style.setProperty("--i", String(Math.min(i, 12))));
  setTimeout(() => rowsEl.classList.remove("first-paint"), 1200);
} catch (error) {
  console.error(error);
  rowsEl.replaceChildren(
    h("div", { class: "empty" }, h("h2", {}, "The brains didn't load."), h("p", {}, "Check that the server is running, then refresh.")),
  );
}
