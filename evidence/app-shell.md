# Evidence — the app shell & the sidebar

Reference study of real, public, shipped **product app shells** — looking specifically at the *sidebar* (the persistent left rail that is the spine of almost every web-app shell, `P-SA-01`). The question for every product: **what makes this rail read as crafted and alive rather than a generic stack of links — and what is the smallest set of *dials* that explains the difference?** Source: reference study of real, public, shipped products (web apps, dev tools, communicators, admin/ops consoles, native desktop apps), 2026-06-16.

This file backs `cookbooks/app-shell.md`. It is deliberately about the *rail's* anatomy and the dial-space its variants live in — the layer `site-archetypes.md` (`P-SA-01`) names ("a left sidebar wraps the web-app shell") but explicitly punts on, and `layout.md` (`P-LY-03`) only resolves as far as "sidebar vs topbar." Neither owns *what a good sidebar looks like, how many kinds there are, or how they earn dynamism.* That gap is what this study fills. The depth rubric's running joke — "a dark sidebar is one option, not the answer" — is the thing this file makes literally true by enumerating the other eleven.

---

## 0. The frame: a sidebar is six dials, not one look

Every shipped rail studied below resolves to the **same six dials** set differently. Naming them is the whole contribution — it turns "make the sidebar nicer" into "which dial is wrong":

1. **Width model** — icon-rail (~52–64px) · standard (220–260px) · wide (280–320px) · **dual** (icon-rail + content panel) · **collapsible** (toggles standard↔icon).
2. **Surface** — dark · light · **tinted** (low-chroma brand wash) · **translucent/glass** (vibrancy over content) · **inset-floating** (detached rounded card with a margin + shadow).
3. **Active-item treatment** — filled pill · left indicator bar · tinted-bg + accent text · subtle-bg only · leading dot. *The cardinal restraint: exactly **one** carrier of "active." The generic tell is fill **and** border **and** colored text — triple-encoded state, the `state-as-shape`/AP23 failure at nav scale.*
4. **Grouping** — flat list · labeled sections (quiet overline) · collapsible groups/tree · pinned + sections.
5. **Top & bottom zones (the sandwich)** — top: wordmark · workspace/org switcher · project switcher · pinned ⌘K search. Bottom: user/account · upgrade/trial card · settings+help · connection status.
6. **Density** — comfortable (~40–44px rows) · compact (~32–36px) · dense (~28px).

A seventh axis, **dynamism**, is not a look but a *behavior* layered on top: static · collapse-toggle · hover-to-expand (peek) · pin · resize-drag · **contextual-secondary** (the rail's lower half re-scopes per section) · spaces/tab-switching. "Not dynamic enough" almost always means dynamism is set to *static* on a shell whose destination count or width pressure demanded one of the others.

---

## 1. Dark compact operator rails — the canon, and the stamp

Studied: **Linear, Vercel (dashboard), Railway, Resend, Raycast (settings), Planetscale.**

- **Linear is the reference.** ~220px, dark (near-black with a cool cast — *not* pure `#000`), compact ~32px rows, a workspace switcher pinned top, grouped clusters (**Workspace** · **Your teams**) under quiet overline labels, and an active item carried by a **single subtle fill** (a barely-lighter panel), never a loud accent bar. The accent is spent on *one* thing — the active icon tint or a "New issue" affordance — not sprayed across the list. ⌘K is the real navigation; the rail is the index.
- **The value jump *is* the composition.** What makes a dark rail an anchor (depth-rubric #1) is not the darkness — it's that the rail sits at a *decisively different value* from the content well, with a hairline seam. Vercel and Resend get the same anchor on a near-black rail against a dark-but-lighter content area. Remove the value jump and the rail stops anchoring.
- **Why it's become a tell.** It works so reliably that AI output reaches for it reflexively (the depth rubric calls this out by name). The dark rail is *a* correct answer, never *the* answer — §2–§11 below are equally crafted anchors via different dials.

## 2. Light grouped product nav — restraint at density

Studied: **Stripe, Supabase (light), Intercom, Mercury, QuickBooks, Linear (light theme).**

- **Stripe is the reference for "quiet but dense."** A light rail (off-white, never pure white), tightly grouped destinations, and active state carried by **accent text + a thin left indicator bar** on a faintly-tinted row — *not* a filled pill. The rail leans on the border seam (a single hairline) to separate from content, not on a value cliff. A persistent **mode banner** ("Test mode") and an account switcher anchor the top.
- **Light rails demand a stronger grouping discipline** because they don't get the dark rail's free value-anchor — the eye is steadied by section overlines + generous-but-not-loose row rhythm instead. The failure mode is a flat undifferentiated list of 15 links with no clusters (the AP20 even-grey at nav scale).
- **The seam carries the anchor.** Where a dark rail anchors by value, a light rail anchors by a *crisp border + a faint surface-shift* (`--surface` rail vs `--bg` content, or vice-versa). Subtle, but it's the move.

## 3. Icon-only rails + hover/click expand — width as a resource

Studied: **VS Code (activity bar), Figma, Height (collapsed), Linear/Vercel (collapsed state), GitHub (collapsed), Cron.**

- **The ~56px icon rail trades labels for screen.** VS Code's activity bar is the canon: monoline icons, one active (a left indicator bar + tint), tooltips on hover supplying the name the label dropped. The discipline is **tooltips + `aria-label` are non-negotiable** (`P-AY-01`) — an icon rail with no accessible name is unusable by keyboard/SR and a guessing-game by mouse.
- **Two expand idioms.** *Hover-to-peek* (the rail temporarily overlays content with labels, then re-collapses) vs *click-to-pin* (the rail stays expanded). The best shells offer both: hover to peek, click the chevron to pin. This is the cleanest example of dynamism earning its keep — the same destinations, two width budgets.
- **The collapsed state is a first-class design, not a CSS afterthought** — active treatment, group separators (a hairline where a label used to be), and the switcher all need a *designed* 56px form, or the collapse reads as broken.

## 4. Dual icon-rail + content panel — the communicator

Studied: **Slack, Discord, Microsoft Teams, Linear (with sub-panel), Spotify.**

- **Two rails, two jobs.** A thin (~64–72px) **icon rail** of top-level contexts (workspaces / servers / spaces) + a wider (~240–260px) **content panel** of the selected context's contents (channels / DMs / playlists). Slack's workspace-switcher rail is dark and near-black; the channel panel is a deep aubergine — *two surfaces, deliberately distinct*. Discord is the same skeleton in a darker key.
- **This is the right shell when the product has *parallel top-level containers* a user switches between** (multiple workspaces, servers, spaces, accounts) — the icon rail makes switching one click and always-visible. Forcing this onto a single-tenant app is over-engineering; *omitting* it on a genuinely multi-tenant one buries the switch in a dropdown.
- **The panel is itself a sidebar** with all six dials (Slack's channel panel: grouped Channels/DMs, unread as bold + a count pill, active as a filled row). So the communicator is a *composition of two rails*, not a new primitive.

## 5. Primary rail + contextual secondary — depth without a tree

Studied: **Supabase, Sentry, GitHub (repo/settings), Vercel (project), AWS console, Stripe (settings).**

- **The rail's lower half re-scopes to the current section.** Supabase: a slim primary rail (Table editor · SQL · Auth · Storage …) + a secondary column that shows *that section's* sub-nav (under Auth: Users · Policies · Providers …). GitHub's repo settings does the same (a settings sub-nav appears beside the global nav).
- **This is the alternative to a deep collapsible tree** for products with two real levels of hierarchy — it keeps both levels always-visible and flattens "drill in → lose your place." The secondary panel is the dynamism (it *changes* as you move through the primary rail), which is exactly the "alive" quality a static single rail lacks.
- **Seam discipline matters doubly** — primary and secondary need a clear value/border seam from each other *and* from content, or the three columns smear into one grey field.

## 6. Collapsible content tree — when the nav *is* the content

Studied: **Notion, GitBook, Craft, Linear (sub-issues), file explorers (VS Code), Obsidian.**

- **The rail holds user data, not just routes.** Notion: a workspace switcher, then **Favorites / Private / Shared / Teamspaces** sections of *pages* that expand into nested trees, with **hover-revealed controls** (the `•••`, the `+`, the disclosure chevron appear on row hover — quiet until needed). The active page is a subtle fill; depth is shown by indentation + a thin guide line.
- **Hover-to-reveal is the signature restraint** — a tree dense with per-row actions would be noise if every control showed always; revealing on hover keeps the resting state calm and the working state capable. This is `P-UX` recognition-over-recall done right.
- **Distinct from §5:** §5's secondary is *route* hierarchy (fixed sections); this is *content* hierarchy (user-created, reorderable, unbounded depth). They look similar and are different jobs.

## 7. Tinted / brand-surface rails — colour as the anchor

Studied: **Notion (coloured workspaces), Spotify, Linear (themed), Cron/Notion Calendar, consumer/fintech apps, Things.**

- **A low-chroma brand wash on the rail surface** (not a saturated block — a *tint*, `--tint-*` or a near-neutral brand-shifted surface) makes the rail the anchor by hue+value instead of pure darkness. Spotify's near-black rail with green accents, Linear's themed rails, fintech apps with a deep brand-navy rail.
- **The line not to cross:** the rail surface is *tinted*, the active/accent is still *one* element. A rail that is brand-saturated *and* has brand-colored active rows *and* brand icons is the AP25 "brand vomit" — the tint and the accent fight. Tint the surface **or** accent the state, calibrate the other down.
- **This is the on-brand-but-not-generic anchor** — it reads as "this product's rail" without a single illustration, the answer to "dark sidebar is a stamp."

## 8. Floating / inset card rail — the detached modern shell

Studied: **shadcn/ui sidebar (`floating` + `inset` variants), Vercel/v0 outputs, Supabase (newer), Linear (inset content), many 2024–25 dashboards.**

- **The rail is a detached card** — a margin around it, a radius, a soft shadow, the content well *also* inset as a rounded panel on a recessed page background. shadcn's `inset` variant is the canonical spec: the page bg is `--surface-sunken`, the rail and the content each float as `--surface` cards with `--radius-lg` + `--shadow`.
- **It reads contemporary because it abandons the edge-to-edge convention** — the rail no longer butts the viewport edge; both panes sit *on* the page like cards. The cost is horizontal space (the margins) and a slightly less "appy"/more "dashboard" feel — right for analytics/SaaS, less right for a dense operator console.
- **Depth is real here** (shadow + recess), so the value-jump anchor is *replaced* by an elevation-anchor — don't *also* darken the rail or you've double-anchored.

## 9. Keyboard-first minimal rails — the rail as index, ⌘K as nav

Studied: **Superhuman, Linear, Height, Raycast, Things, Cron.**

- **The rail is deliberately sparse** — a handful of destinations, lots of quiet — because the *real* navigation is the command palette (`cookbooks/command-palette.md`). Superhuman shows a short pinned list; Linear's rail is compact precisely because ⌘K does the heavy lifting.
- **The signature is restraint + a visible ⌘K affordance** in the rail (a "Search… ⌘K" row near the top, often the only emphasized element besides the active item). The rail's job shrinks to "show where I am + the 5 things I do most," not "expose every route."
- **This is a *density+content* choice, not a new surface** — any of §1–§8's surfaces can be keyboard-first; what changes is how *few* items the rail commits to and how prominent the palette entry is.

## 10. Translucent / glass rails — the earned exception

Studied: **macOS native (Finder, Mail, Calendar, System Settings), Things, Craft, iOS-style apps.**

- **Vibrancy: the rail is a translucent material** that picks up a blurred wash of what's behind/the desktop. It is *native-platform* signature — Apple's sidebars are the canon — and reads as "OS-integrated, premium-desktop."
- **Lookbook bans glassmorphism *by default*** (it's a generic-AI tell when used decoratively). This specimen exists to mark the **earned** exception: a real desktop-class app on a platform whose own chrome is vibrant. The discipline — translucency must keep text contrast over the *worst-case* backdrop (a `backdrop-filter` + a semi-opaque scrim floor so labels never drop below 4.5:1), or it fails the contrast gate the moment a bright photo scrolls behind it.
- **Use it on purpose or not at all** — it's the one surface that's a liability if reached for reflexively and a delight if the product genuinely is a native-feeling desktop tool.

## 11. Dense nested-section status rails — the ops/admin spine

Studied: **Grafana, Datadog, Sentry, Retool, Kubernetes dashboards, Vercel (observability), AWS.**

- **Many sections, each with a status signal.** An admin/observability rail carries far more destinations than a SaaS app and often a **status indicator per area** (a health dot beside "Workers," an incident count badge beside "Alerts"). Dense rows (~28px), grouped hard, often collapsible groups because the list is long.
- **This is the rail that pairs with `cookbooks/ops-console.md`** — same voice (cool-technical, dense, hairline depth), and the same status-as-shape discipline applies to the rail's badges (one carrier; a count pill *or* a dot, not both; reserve the pulse for genuinely-live).
- **Density is the richness, not colour** (the ops-console lesson at rail scale): pack real section names + honest status, don't brighten to add interest.

---

## What this evidence does NOT support (kept out of the cookbook)

- **No new tokens.** Every rail above is built from existing `--surface`/`--bg`/`--accent`/`--tint-*`/`--shadow`/`--radius` tokens spent differently. A tinted rail is `--tint-*` on a surface; a glass rail is `backdrop-filter` + a scrim; an inset rail is `--surface` + `--radius-lg` + `--shadow`. The dozen is a *spend* of the contract, not an extension of it (the cardinal rule).
- **No topbar/breadcrumb re-statement.** Page scope, the page's own primary action, and breadcrumbs live in the content header (`evidence/site-archetypes.md` §2, `P-LY-03`), not the rail. This file owns the rail only.
- **No mobile reflow rules.** The rail→drawer/hamburger collapse is `mobile.md`'s; the cookbook references it, doesn't restate it.

## Synthesis — the dozen, as dial settings

| # | Recipe | Width | Surface | Active carrier | Grouping | Dynamism | Reach for it when |
|---|---|---|---|---|---|---|---|
| 1 | **Dark operator rail** | standard | dark (value-anchor) | subtle fill | sections | ⌘K + collapse | dev tool / dense SaaS; want the classic anchor — but vary it |
| 2 | **Light grouped nav** | standard | light (seam-anchor) | accent text + left bar | sections | static / collapse | financial/admin SaaS; calm, dense, many destinations |
| 3 | **Icon rail + expand** | icon ↔ standard | dark or light | left bar + tint | sections (hairline) | hover-peek / pin | width-constrained; power users; focus mode |
| 4 | **Dual rail (communicator)** | icon + panel | two distinct surfaces | filled row (panel) | panel grouped | switch top-level container | multi-workspace/server/space products |
| 5 | **Primary + contextual secondary** | rail + panel | matched | rail dot + panel fill | two route levels | secondary re-scopes per section | 2-level route hierarchy (Supabase/Sentry shape) |
| 6 | **Collapsible content tree** | wide | light/tinted | subtle fill + indent guide | user content tree | hover-reveal controls + expand | the nav *is* user data (Notion shape) |
| 7 | **Tinted / brand rail** | standard | tinted brand wash | one accent element | sections | static / collapse | want an on-brand anchor that isn't a dark stamp |
| 8 | **Floating / inset card** | standard | inset card (elevation-anchor) | subtle fill | sections | static / collapse | modern analytics/SaaS; contemporary, airy |
| 9 | **Keyboard-first minimal** | standard (sparse) | any | subtle fill | few items + ⌘K | palette is the nav | speed tools; few destinations, heavy ⌘K |
| 10 | **Translucent / glass** | standard | vibrancy (scrim floor) | subtle fill | sections | static | genuinely native-desktop-feeling apps only |
| 11 | **Dense nested-section status** | standard/wide | dark/light, dense | one carrier + status badge | many collapsible groups | collapsible groups + live status | ops/observability/admin (pairs with ops-console) |
| 12 | **Standard SaaS default** | standard | light or dark | filled pill | sections + sandwich | collapse | the safe, correct baseline every other recipe varies from |

The single invariant across all twelve: **six dials + the sandwich (switcher top / account bottom), one accent, one active-carrier, a real seam to the content well.** The twelve differ by *how the dials are set and which dynamism is layered on* — never by inventing colour, spacing, or a one-off part. That is exactly converge-on-vocabulary / diverge-on-composition, applied to the most-defaulted surface in the system.
