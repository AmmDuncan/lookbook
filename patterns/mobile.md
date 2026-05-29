# Pattern: Mobile (reflow grammar + mobile-native compositions)

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-MO-<nn>`.

> **This is the canonical cross-cutting mobile spec.** Every other pattern (detail, list, dashboard, form, checkout, pricing, search, feed, auth, marketing, empty-states) carries a one-line "Mobile" entry in its composition defaults that points *here*. The other patterns own *what their surface is*; this pattern owns *how any surface becomes a phone screen* — both the **reflow grammar** (how a desktop composition collapses) and the **mobile-native compositions** (the components that only exist on touch: bottom tabs, drawers, filter sheets, bottom-sheet modals, sticky thumb bars).

## Surface intent
Not a surface of its own — a **transform applied to every surface** when the viewport is a phone (and, more precisely, when the pointer is coarse and the width is narrow — F51, not "iPhone pixels"). The user is one-handed, thumb-driven, glancing in motion, on a viewport that shows one column of content at a time. Mobile's job is to answer the *same* questions each archetype answers, in the *same reading order*, but recomposed so the **content is one honest column, the primary action is in thumb reach, navigation and filtering live in touch-native containers (tabs / drawer / sheet), and nothing reachable on desktop is hidden** (F50). The constant across every archetype: mobile is the *starting* design (mobile-first), and the desktop layout is what you get by *adding* columns and breathing room — never the reverse.

## Density band
**Inherit the surface's band, then relax spacing one notch and grow every touch target to ≥44px (F52).** A compact list stays compact in *information* (it's still scan-first) but its rows grow to ≥44px tall and its inline actions become a `⋯` sheet trigger; a medium form keeps medium rhythm with full-width fields. Section padding drops to the mobile end of each band's range (F11: 32–64px between major regions; sheet/​bar inner padding ~16–20px). Texture follows the surface's band unchanged (F36) — a marketing hero still earns it, a list still doesn't. The one universal: **target size and inter-target spacing are not negotiable by density** (F52 wins over F27 when they conflict).

## Calibrations

### A · Reflow grammar (how a desktop composition collapses)

**P-MO-01. Mobile-first, content parity absolute: design the single narrow column first; wider viewports *add* columns and air. Nothing carrying content is `display:none` below a breakpoint without an equivalent affordance at that width (F50).** Desktop affordances are **relocated**, not dropped — a right rail becomes a stacked block or a sheet, a top toolbar primary becomes a sticky bottom bar, a 6th nav destination folds into a `⋯` (it is never deleted).
Refines: F50. *Why:* across 21 real mobile screens, *nothing essential was hidden* — rail→sheet, top-primary→bottom-bar, tab-overflow→`⋯` (`evidence/mobile.md`). `display:none` below a breakpoint means either the content was never essential (cut it everywhere) or the layout failed (fix it) — never "mobile users don't need this."

**P-MO-02. Breakpoints are content-driven, type/space fluid (F51, F53).** Add a breakpoint where a *rule* breaks — prose leaves the 45–75ch band, a grid cell drops below its legible minimum, a row's columns collide — never at a device pixel width. Type and spacing scale with `clamp()` anchored to the modular scale at each end; the mobile end is the design's *start*.
Refines: F51, F53. *Why:* devices change yearly, reading ergonomics don't. A layout pinned to 768px breaks on the next form factor; one pinned to "where the columns collide" never does.

**P-MO-03. Per-archetype collapse — these are the canonical recipes (the dynamic-generation branch; the recipe is picked by *which archetype* is collapsing):**
- **Two-column detail → stacked single column** with the right rail's *primary* fact (price, balance due, status) **promoted into a sticky bottom bar**, the rest of the rail dropped into a top key-facts strip; sub-content tabs become a scrollable tab strip or a select; the activity timeline stays, scrolling in-region (collapses P-DT-03/04).
- **List toolbar → condensed**: search stays (or an expand-on-tap icon), filter/sort collapse into a scrollable chip strip and/or a single "Filter" sheet trigger; the table either **horizontal-scrolls within its region** (sticky header, nothing dropped) **or each row stacks into a card** (identity + key facts + a `⋯`); the "New X" primary becomes a sticky FAB/bottom bar (collapses P-L-03/53).
- **Dashboard table / wide grid → cards or horizontal-scroll**, KPI tiles stack 1-up or 2-up, charts go full-bleed-width; never a 6-column table crushed into 390px.
- **Pricing tiers → vertically stacked, the recommended tier first** (not middle), each tier full-width; the comparison matrix becomes per-tier feature lists or a horizontal-scroll table.
- **Checkout summary → a collapsible sticky total** (a thin always-visible "Total $X · Place order" bar that expands to the line-item breakdown on tap), so the order summary doesn't push the form below the fold.
- **List/detail toolbar actions → a sticky bottom action bar or a `⋯` sheet** (P-MO-10).
New. *Why:* each desktop composition has *one* correct phone collapse, and the wrong collapse is the tell — a two-column detail that keeps its rail at 390px reads as broken; a pricing grid that keeps the recommended tier in the middle buries it below the fold. Evidence: Viator/Alma/Keeta detail = stacked + sticky bar; Todoist/Notion list = condensed + filter sheet (`evidence/mobile.md`).

**P-MO-04. The list collapse keeps scanning intact: rows grow to ≥44px, the identity stays the bold linked primary, 2–3 facts ride beneath or right, the rest move to the detail page; horizontal-scroll OR row-stack — never drop columns (F50).**
Refines: P-L-04, F50. *Why:* a mobile list is still scan-first; the failure is dropping the columns that *earn* their place (status, amount) to fit, which breaks triage. Horizontal-scroll preserves all columns with a sticky identity column; row-stack preserves them as a labelled mini-record.

**P-MO-05. The detail collapse promotes the one load-bearing fact to the thumb bar, stacks the rest, and keeps every sub-region's data states (F33).** Price/total/status → sticky bar; the rest of the summary rail → a top key-facts strip; related-record blocks and the timeline stack below, each loading/empty/error independently (P-DT-10 survives the collapse).
Refines: P-DT-03/04/10. *Why:* the desktop rail's value is *one* fact the user acts on (the price they'll pay, the balance due) plus a tail of metadata; mobile promotes the actionable fact into reach and stacks the tail. Evidence: Viator promotes price into the sticky bar; the rest becomes a strip.

**P-MO-12. The MEDIUM / tablet band (~600–1024px) is its own design, not a way-station — never jump N-column → 1-column directly; pass through the sensible middle state, and give the tablet band its OWN content-driven breakpoint (F51).** The canonical intermediate steps:
- **3-col → 2-col → 1-col.** A three-column CRM-hub detail (left fields / center activity / right related) goes to **two columns at tablet** (e.g. content + a single merged rail, or fields-over-content + related-rail) *before* the phone's single stack. Never 3→1.
- **Side rail collapses to the TOP of content at tablet, BEFORE it becomes a drawer/sheet at phone.** A desktop left filter rail or a right summary rail moves *above* the content as a horizontal band / collapsible panel at tablet; only at phone width does it become the bottom sheet (P-MO-08) or the stacked block (P-MO-04). Two distinct breakpoints, two distinct treatments.
- **Desktop nav condenses at tablet, becomes hamburger/bottom-tab at phone.** A full horizontal top nav (or a persistent left sidebar) goes to **icon-only / labels-collapsed / a condensed sidebar at tablet**, and only drops to a hamburger drawer or bottom-tab bar (P-MO-06) at phone. Don't hamburger-ify a layout that still has room for a condensed bar.
- **Grids step down, they don't snap:** 4-up → 3-up → 2-up → 1-up; a 6-col data table → fewer-but-still-multi columns or horizontal-scroll at tablet → row-stack at phone.
New. *Why:* the tablet band is **the most commonly-broken width precisely because it's never tested** — teams design desktop and phone, then let ~768–1024px fall through to one or the other, producing "desktop squeezed" (columns collide, prose blows past 75ch, targets stay mouse-sized) or "phone stretched" (one 320px column marooned in a 900px sea of whitespace). F51 is the fix: a breakpoint lands **where a layout rule actually breaks** — and a layout that breaks at phone width almost always breaks *differently* (and earlier) at tablet, so the tablet band earns its own breakpoint and its own intermediate composition. The proof you reasoned about tablet is that 768px reads as *designed for 768px*, not as either neighbor mis-fit.

### B · Mobile-native compositions (components desktop doesn't have)

**P-MO-06. Navigation is contextual — bottom tab bar vs drawer vs top-back-stack — this is the primary dynamic branch:**
- **Bottom tab bar** when there are **3–5 flat, frequently-visited destinations** (Home / Search / Tasks / Notifications). Pinned to the bottom edge (thumb zone), icon **+ label** preferred (icon-only only when the glyphs are unambiguous), the active tab is the only emphasized one. A **5th-plus destination folds into a `⋯`/More tab** — never shrink five into a sixth slot. A **create/compose action is NOT a destination** — it sits *apart* (a center FAB or a separated `+`), not as a peer tab.
- **Hamburger drawer** when destinations are **many (>5) or deep/infrequent** (Settings, Earnings, Promos, Help, account management). Slide-in over a **scrim**, icon + label rows ≥44px, opened from a hamburger in the top bar.
- **Top-back-stack** for **linear/drill-in flows** (a wizard, a settings sub-page, a record opened from a list) — a back chevron + title, no persistent nav.
New (calibrates F50 onto touch nav). *Why:* tabs = flat & frequent (thumb-reachable, always visible); drawer = deep & many (a tab bar would drop them or shrink below 44px); back-stack = transient. Evidence: Attio/Airbuds/Duolingo (tabs, Duolingo overflows to `⋯`), DoorDash/GCOO/Forest (8–12-item drawers), Glass (separated `+` create) (`evidence/mobile.md`). **The count + frequency picks the device — there is no single "mobile nav."**

**P-MO-07. Touch targets ≥44×44px (48 preferred), ≥8px clear space, at EVERY width under a coarse pointer (F52). Remove destinations (overflow to `⋯`) before you shrink them.**
Refines: F52. *Why:* the adult fingerpad is ~45–57px; Apple HIG (44pt) and Material (48dp) converged on the same measured number. Real apps grow the row to the finger and overflow extras (Duolingo's `⋯`) rather than cram — the failure mode (five tabs squeezed to fit a sixth) is exactly what shipped apps refuse to do.

**P-MO-08. Filtering on mobile is a BOTTOM SHEET, never a desktop rail crammed in: a "Filter" trigger (button/chip, often with an active-count badge) opens a sheet with a drag handle, collapsible facet rows, and a STICKY footer pair — `Clear all` (text/ghost, left) + `Apply (N)` / `Show results` (filled, right, carrying the result or selection count).**
New. *Why:* all four studied filter screens (Beli, Instagram, Mercury, eBay) use a sheet with exactly this anatomy; **none used a rail.** The count on the primary ("Apply (3)", "View 26 products", "See Results") tells the user what applying will do before they commit. Multi-select state shows as chips inside the sheet (eBay `Selected (1)`). For server-paginated filter options, the in-sheet picker still does server-side search (P-F-10 / P-L-07 / CLAUDE.md rule 32), not a `page_size:100` dump.

**P-MO-09. A dialog becomes a bottom sheet, sized by content — contextual: partial sheet for short/bounded content, near-full-height sheet for tall/search/scroll content, centered dialog only for a true blocking decision. Every sheet has a drag handle, a scrim, and a visible dismiss (X / Cancel / swipe-down) — never a trap.**
New. *Why:* short pickers anchor a partial sheet (Skip's Menu Categories + `Cancel`, Revolut's reason picker); a search or long-content task takes a near-full-height sheet (Tinder "Add birth place", eBay "About this item") — still a sheet, still with a handle and a dismiss; the page behind dims. Snap points (peek → expanded) are optional and only for sheets that benefit from two heights. A confirm/destroy decision that must block can stay a small centered dialog (F73 calm copy). Evidence: every studied sheet had handle + scrim + dismiss.

**P-MO-10. The primary action lives in a STICKY bottom bar (or a FAB) within thumb reach — context on the left, the one filled verb on the right; one filled action only (F16); destructive actions are NOT in the thumb bar (they live behind a `⋯` / overflow, away from the bottom).**
New. *Why:* the mobile primary scrolled away at the top is unreachable one-handed; real detail screens pin it (Viator `From $25.65 | Check availability`, Keeta `– 1 + | Add to cart ₿48.00`, Me+ single `+ Add to my routine` pill). Two-action bars keep exactly one filled (Alma: ghost `Share` + filled `Track`) — F16 holds. None of the screens put a destructive action in the thumb bar; Alma's Rename/Delete sit in a top `⋯` popover, deliberately away from the high-traffic thumb zone, so a mis-tap can't destroy.

**P-MO-11. Every data view ships its four states on mobile too (F33), and the sticky chrome (tab bar, bottom action bar) renders over the loading/empty/error states — not only the populated one.** A skeleton list still shows the bottom tab bar; an empty detail still shows the sticky action bar (disabled if the action needs data).
Refines: F33. *Why:* the bottom chrome is the user's only way out of a stuck state; hiding it during loading/error strands them. (The most-skipped mobile detail — the empty/error state *with* its navigation intact.)

## Composition defaults
- **Frame**: one column, full-bleed to the safe-area insets; respect the notch/home-indicator (bottom sticky bars sit above the home indicator, ~`env(safe-area-inset-bottom)`).
- **Top bar**: a back chevron + title (drill-in) OR a hamburger + title + one trailing action (drawer-nav app) OR a large title that collapses on scroll. One trailing action max; extras in a `⋯`.
- **Navigation**: the contextual choice from P-MO-06 — bottom tabs (flat/frequent), drawer (deep/many), or back-stack (linear). A create action sits apart from tabs.
- **Body**: the archetype's content as one column via the P-MO-03 collapse recipe. Rows/cards ≥44px targets; key facts as a top strip; timeline/related blocks stacked, each with its own states.
- **Filtering**: a "Filter" trigger → bottom sheet with collapsible facets + sticky `Clear all` / `Apply (N)` (P-MO-08).
- **Modals**: bottom sheet sized to content (partial vs near-full-height), drag handle + scrim + dismiss (P-MO-09).
- **Primary action**: sticky bottom bar / FAB in thumb reach, context-left + one filled verb-right; destructive behind `⋯` (P-MO-10).
- **States**: all four, with the sticky chrome rendered over each (P-MO-11).
- **Tablet band (~600–1024px)**: its own composition between desktop and phone — intermediate column count (3→2→1), rails to the top-of-content before they become drawers/sheets, nav condensed before it hamburgers, grids stepped not snapped (P-MO-12). Touch targets still ≥44px if the device is touch-capable (most tablets are — F52).

## Forbidden moves
- **A desktop layout shrunk to 375px** — a two-column detail keeping its rail, a 6-column table un-reflowed, a left filter rail crammed in (P-MO-01/03/08).
- **Skipping the tablet band** — jumping N-col → 1-col with no intermediate, so ~768px renders as "desktop squeezed" (colliding columns, prose past 75ch, mouse-sized targets) or "phone stretched" (a lone narrow column in a sea of whitespace). The tablet band gets its own breakpoint and its own composition (P-MO-12/F51).
- **Hamburger-ing a layout that still has room** — collapsing a full nav straight to a hamburger at tablet width where a condensed/icon-only bar would fit (P-MO-12).
- **A left filter rail on mobile** instead of a filter sheet (P-MO-08; none of the studied screens did this).
- **Touch targets <44px**, or shrinking five tabs to fit a sixth instead of overflowing to `⋯` (P-MO-07/F52).
- **A hamburger hiding the *only* primary action** — the create/compose/primary verb must be reachable without opening the drawer (it belongs in a tab-adjacent FAB or the sticky bottom bar, not buried in nav) (P-MO-06/10).
- **A bottom sheet with no dismiss** — no handle, no X/Cancel, no swipe-down (a trap) (P-MO-09).
- **The destructive action in the thumb bar** where a mis-tap destroys (P-MO-10).
- **`display:none` on content below a breakpoint** without an equivalent affordance — dropped columns, a hidden rail, a vanished action (breaks F50/P-MO-01).
- **The primary action scrolled away at the top** on a long mobile page, out of thumb reach (P-MO-10).
- **A 6+ tab bar**, or icon-only tabs whose glyphs are ambiguous (P-MO-06).
- **Pricing tiers stacked with the recommended tier in the middle** (buried below the fold) instead of first (P-MO-03).
- **Only the populated state**, or sticky chrome hidden during loading/error (P-MO-11; AP19).
- **Mixing the surface's density wrong** — but note F52 *overrides* F27: growing targets to 44px on a compact list is correct, not a density violation.

## Sources
Apple HIG (tab bars, sheets, 44pt targets) · Material Design (navigation drawer, bottom sheets, 48dp) · NN/g (mobile navigation, thumb zone, sheets) · Refactoring UI (Wathan & Schoger — hierarchy survives the reflow) · Lookbook gallery → Organisms (app shell, nav) + Recipes (responsive collapse) · DVLA self-service mobile shell, mobile nav backdrop-over-topbar fix, SingleSelectChip mobile inline branch, services-list viewport-relative height, mobile primary-as-bottom-bar (battle-tested) · the canonical cross-cutting spec the other patterns' "Mobile" lines point to (P-DT-03/04, P-L-03/53, P-F, P-CO checkout, P-PR pricing) · **Mobile reference study of real public products (Glass, Airbuds Widget, Attio, Duolingo, DoorDash Dasher, GCOO, Forest, Beli, Instagram, Mercury, eBay, Skip, Tinder, Revolut Business, Viator, Me+, Alma, Keeta, Todoist, Target, Notion) → `evidence/mobile.md`** (bottom-tabs-3-to-5-flat-frequent + overflow-to-⋯ + create-sits-apart, drawer-for-many-or-deep, filter-as-sheet-not-rail with sticky Clear/Apply(N), modal→partial-vs-full-height-sheet with handle+scrim+dismiss, sticky-thumb-bar-primary with context-left + destructive-away, ≥44px-at-every-width, content-parity-relocate-never-drop).
