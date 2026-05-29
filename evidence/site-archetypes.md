# Evidence — Site archetypes (multi-page composition)

Reference study of real, public, shipped multi-page products — looking at *whole flows*, not single screens. The question for every product: **does it read as one product across its pages, and what makes it cohere?** Source: reference study of real, public, shipped products (marketing sites, web-app shells, docs sites, dashboard products), 2026-05-29.

This file backs `patterns/site-archetypes.md` (`P-SA`). It is deliberately about *cross-page* observations — the nav that persists, the container width that holds, the type rhythm that repeats — which a single-screen capture can't show. Where a claim is about one page's internal shape, that belongs to the single-screen pattern files (marketing/dashboard/detail/docs-article) and is not repeated here.

---

## 1. Marketing sites — one top nav, one container axis, one type rhythm across home → pricing → …

Studied home + pricing (+ product/about where visible) for: **Dovetail, Fibery, Figma, Wrangle, Time2book, Zapier**.

- **The top nav is byte-identical across every marketing page.** Same wordmark far-left, same 4–6 destination links (Product · Solutions · Pricing · Customers · …), same right-side auth pair (a ghost "Log in" + one filled primary "Sign up / Contact sales / Start free"). Dovetail, Fibery, Figma, Wrangle, Time2book all share this exact skeleton — only the labels differ. The nav does **not** restructure between home and pricing; only the active state moves.
- **The right-side primary CTA is the same verb on every page** — "Sign up for free" (Fibery), "Get started" (Figma/Wrangle), "Contact sales" (Dovetail), "Start free trial" (Time2book). CTA continuity: the conversion action follows the visitor page to page; it is never dropped on the pricing page (where it matters most) nor swapped for a different verb.
- **One container width holds the whole site.** Hero content, feature sections, and the pricing table all return to the same centered max-width (~1100–1200px) on the same axis. Pricing pages (Zapier's plan-comparison, Figma's) sit inside the identical content column as the home hero — the spine (F74) is a *site-wide* invariant, not a per-page one.
- **One type rhythm.** The display face + weight + tracking used on the home hero is the same face used on the pricing page's section titles; body sans + size + line-height is shared. You can tell two pages belong to one site before reading a word — because the type system is identical.
- **The footer is the same sitemap on every page** (Dovetail, Fibery) — columns of links + legal + brand mark, dark or neutral. It is the second persistent chrome element alongside the top nav.
- **Zapier's pricing-inside-the-app tell:** Zapier's plan comparison renders inside the *product* left-sidebar shell (Dashboard · Zaps · Transfers …), not the marketing top-nav shell — because for a logged-in user, pricing/upgrade is an in-app destination. This proves the shell is chosen by *who's looking and where they are*, not by the page's topic.

**Cross-page takeaway:** a marketing site coheres through three persistent invariants — the top nav (identical structure, moving active state), the footer sitemap, and the container axis + type rhythm — while each page's *interior* varies (hero vs pricing table vs feature grid). The pages differ in content shape; the chrome and the spine do not.

## 2. Web-app product shells — persistent left sidebar, page-to-page, with a pinned account/upgrade card

Studied multi-page app navigation for: **Productboard, Asana, Amplitude, Replit, Microsoft Copilot, Relume, Zapier (app)**.

- **A persistent left sidebar is the universal product-app shell** (matches `P-LY-03`, `evidence/dashboard.md`). Every studied app leads with a grouped left rail: a top cluster of primary destinations (Home · Inbox · Reporting · Products · Roadmaps …) and lower grouped clusters (Favorites, Teamspaces, Projects, Personal). Asana, Productboard, Amplitude, Replit, Zapier-app all share this.
- **The sidebar is the same on every in-app page** — overview, drill-down detail, settings. Only the active item changes. The user never relearns navigation moving from a dashboard to a record to settings; the rail is the constant.
- **A pinned account / trial / upgrade card sits at the rail's bottom** — Asana "Advanced free trial · 5 days left · Add billing info", Productboard "15 days left · Buy now", Replit "Refer & Earn". This is a real, repeated pattern (not decoration): global account state lives at the bottom of the persistent rail, present on every page.
- **The top edge carries page-level scope, not the global nav** — Asana's reporting page puts "Reporting" + tabs (Dashboards) + a "Create" primary at the top of the content area; Amplitude puts the analysis tabs there. Global nav = left rail; page scope + the page's own primary action = top of the content area. The two never merge (`P-LY-03`).
- **Global vs local actions are spatially separated and consistent:** global search + account/notifications sit top-right or top of the rail on *every* page (Productboard, Asana, Amplitude); the page's own primary ("Create dashboard", "New project") sits in the page header. A user learns "global lives in the chrome, local lives in the page" once, and it holds site-wide.
- **Settings is the same shell** — it is not a different site. Settings opens inside the same left-sidebar product shell (often with its own nested left sub-nav for settings sections), so the user never leaves the product to configure it.

**Cross-page takeaway:** a product app coheres through one persistent shell (left sidebar + top-right global chrome + bottom account card) that is identical on every in-app page, while the content area swaps among archetypes (dashboard / list / detail / settings). The shell is the product's spine; the content area is where the single-screen patterns live.

## 3. Docs / content sites — three persistent zones + a top-level section switcher, embedded in the marketing shell

Studied docs flows for: **Mintlify, GitBook**.

- **The canonical docs layout is three persistent zones** (matches the docs-article single-screen recipe): left **category tree** (~200–260px, grouped, active branch expanded) · center **prose at reading measure** (~680px) · right **"On this page" / TOC** (sticky, active-section highlighted on scroll). Mintlify shows all three; GitBook shows left tree + prose + page-options. These zones persist across *every* docs article — the tree and TOC don't disappear when you move between pages; only their contents and active states update.
- **A top-level section switcher sits above the tree** — Mintlify's "Guides | API reference" tabs, GitBook's space switcher. This is how a docs site partitions large content (Guides vs Reference vs SDK) without exploding the left tree; the switcher is persistent, the tree below it re-scopes.
- **Search is a persistent hero affordance, not a nav afterthought** — Mintlify's `⌘K Search` bar centered at top, GitBook's "Ask or search" pinned at the top of the rail. Present on every docs page; the primary wayfinding tool.
- **Prev / next at the foot of every article** — GitBook renders "← Previous: Jdoe's Handbook | Next: Setup →" cards at the article bottom; Mintlify renders "Quickstart →". Sequential continuity is the docs site's cross-page glue: every article knows its neighbors, so the reader can walk the whole tree without returning to the index.
- **Docs embed inside the marketing/product chrome, not a separate brand** — Mintlify keeps the top "Documentation · Community · Blog" links + "Support" + a "Dashboard →" CTA above the three-zone docs layout. The docs site is a *zone within* the product's site, sharing its top nav, type, and accent — not a bolted-on subdomain with a different look.

**Cross-page takeaway:** a docs site coheres through three persistent zones (tree · prose · TOC) + a persistent search + a persistent top-level switcher, with prev/next stitching articles into a walkable sequence — all wrapped in the same outer chrome as the rest of the site.

## 4. Dashboard products — overview → drill-down → settings inside one shell

Studied: **Amplitude, Asana, Productboard, Apollo/Mixpanel (from `evidence/dashboard.md`)**.

- **Overview, drill-down detail, and settings are three content states of one shell, not three sites.** Amplitude's analysis overview, a chart drill-down, and settings all live inside the same left-sidebar + top-tab frame. The user drills from a KPI/chart into a detail view and back without the chrome changing — only the content area swaps (dashboard recipe → detail recipe).
- **Drill-down preserves the breadcrumb / back path** — moving from an overview into a specific report keeps a visible way back (tabs stay, breadcrumb appears in the content header). The shell is what makes "back to overview" obvious; a drill-down that replaced the whole frame would strand the user.
- **Settings reuses the exact density and type of the rest of the app** — it is not a marketing-spaced page dropped into a compact product. (Reinforces `evidence/layout.md`: real settings pages nest a ~640px form inside the same wide shell.)

**Cross-page takeaway:** a dashboard product is a single shell whose content area cycles through overview (dashboard recipe) → drill-down (detail recipe) → settings (form recipe), with the shell + breadcrumb providing the continuous wayfinding spine. The single-screen patterns compose; the shell is what makes them one product.

---

## What this evidence does NOT support (kept out of the pattern)

- **No new per-page interior rules.** Hero shape, KPI-tile count, identity-header anatomy, docs-article internals — all already owned by `marketing.md` / `dashboard.md` / `detail.md` / gallery → SiteArchetypes (supporting-page templates). This pattern only owns how pages *relate*.
- **No new container-width numbers.** The measures are F74's / `layout.md`'s; the only addition is that they are a *site-wide* invariant, not re-chosen per page.
- **No new overlay rules.** Page-vs-overlay is `containers.md`. The cross-page point is only "which shell wraps the page," not "modal vs page."

## Synthesis — the four whole-product shells (the decision the pattern formalizes)

| Shell | Persistent chrome | Nav model | Page interior varies as | Entry/exit |
|---|---|---|---|---|
| **Marketing site** | top nav (identical) + footer sitemap | top bar, ≤6 links, moving active state | hero / features / pricing / about / blog (single-screen recipes) | links + the one CTA verb, continuous page-to-page |
| **Web-app shell** | left sidebar (grouped) + top-right global chrome + bottom account card | persistent left rail, page scope in content header | dashboard / list / detail / settings recipes | nav from rail; back via breadcrumb; deep-linkable routes |
| **Docs site** | left tree + right TOC + persistent search + section switcher, inside the outer chrome | left tree (grouped, active branch) + top-level switcher | docs-home (wayfinding) / docs-article (three-zone) | search + tree + prev/next sequence |
| **Dashboard product** | left sidebar shell (the web-app shell, data-led) | left rail + top tabs/scope | overview → drill-down → settings (dashboard/detail/form recipes) | drill from KPI; back via breadcrumb/tabs |

The single invariant across all four: **one nav model and one container axis + type rhythm, held across every page; the page interior is where variety lives.** That is the cross-page coherence rule the pattern exists to state.
