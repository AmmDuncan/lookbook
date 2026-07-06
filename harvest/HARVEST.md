# Harvest — atom & molecule look library (Claude Design bounce)

**Goal:** accumulate enough *atom + molecule looks* (across many styles, not just our 6 voices) that even a weak model can assemble good UI by picking from here. Quality floor: contrast (WCAG AA) still applies; everything else is open.

**How this works**
- **Source of looks:** drive Claude Design (project `Lookbook Specimens`, ec6f9299) to generate varied UI → it persists *verbatim* in that project (the rendered library).
- **This catalog:** the navigable index + distilled reusable snippets. For each generation: log it, screenshot, and catalog the standout atom/molecule looks (style + where to find the verbatim source). Selectively pull the best small atoms verbatim into `harvest/<name>.html`.
- **For a dumb model:** read the component tables below → pick a look → copy its snippet (or pull the named source file from the CD project / `kits/` / `registers/`).

---

## CD generation log

| File (in CD project) | Style | Notable looks it contributes |
|---|---|---|
| `Component Gallery.html` ⭐ | **Warm Studio** (cream dotted-paper, warm ink, clay/terracotta accent, Bricolage Grotesque display + Geist UI + Geist Mono) | **FLAGSHIP ATOM SET** — buttons(primary/secondary/ghost/destructive × default/hover/disabled) · form fields(text/select/search/textarea × default/focus/error/disabled + error msgs) · controls(checkbox/radio/toggle/segmented/tabs) · indicators(6 status badges, avatar sizes + stacked group, tooltip) · cards(metric/profile/feature-striped-image/bordered-pricing). Near-complete atom inventory in one style; numbered specimen-sheet layout. |
| `Data Display Gallery.html` ⭐ | **Atelier / Grid** (cobalt accent, Swiss, Space Grotesk+Archivo+Plex Mono — fonts fall back, not uploaded) | **FLAGSHIP VIZ SET** — tables ×3(striped / compact-bordered-gridlines / separated card-rows w/ badges) · charts(area-line trend · vertical bar w/ one highlighted · stacked bar + legend · donut + center label + legend · 5-up sparkline row: line/area/bar/flat) · stat tiles ×3(accent-topped / sparkline-floor / inverse-cobalt) · progress(4 labeled horizontal bars + radial ring w/ legend) · metric·delta·trend composite(big figure + delta pill + trend area vs dashed target). All inline SVG, :root-driven. |
| `Overlays & Navigation Gallery.html` ⭐ | **Midnight** (dark plum-charcoal, amber/gold accent, aurora glow, Sora+Hanken+JetBrains — fonts fall back) | **FLAGSHIP OVERLAY/NAV SET** — modal dialog + destructive dialog · slide-over drawer (edit form) · command palette ⌘K (search + grouped results + footer hints) · toasts (success+error) · dropdown menu (shortcuts + destructive item) · context menu (checkmark + submenu chevron) · profile popover (arrow) · tabs (underline + pill, live) · breadcrumbs · pagination (ellipsis). Gold focus ring on every interactive el; overlays shown in-context over dimmed/blurred backdrops. |

| `Button Variations.html` | neutral light, 18 button treatments | **MULTI-VARIANT BUTTON SHEET** — soft-tint · ghost · pill · sharp/squared · brutalist (yellow) · mono/terminal ($deploy) · icon+label · split-button · link/underline · FAB (✅ KEEPERS). ⚠️ DROP the AI-tell ones: 05 gradient · 06 neon/glow · 07 neumorphic · 11 glassy · 18 gradient-border (Ammiel: cut AI-looking + skeuomorphic). |

| `Card variations.html` | neutral warm-gray, forest-green accent, anti-slop | **MULTI-VARIANT CARD SHEET (tasteful)** — stat/KPI · profile · product-w-image · pricing · feature-w-icon · alert/notification · media · list-row · dark · flat-bordered · subtly-elevated · bento cluster. Radius + border-vs-shadow vary intentionally. (visual spot-check pending) |

| `App Shell Variations.html` ⭐ | slate-blue, browser-chrome frames, tasteful | **SHELL/ORGANISM SET (by composition)** — 01 classic sidebar+topbar · 02 icon-only rail · 03 top navbar + section tabs (no sidebar) · 04 split master-detail (list+detail) · 05 dual sidebar (nav + contextual right panel) · 06 dense command-center (top metric ticker + table+mini-charts). Each a complete app window (nav+toolbar+widgets), structures genuinely distinct, focus rings. |

| `Input Pattern Variations.html` ⭐ | neutral, calm blue accent | **PATTERN-AXIS SET (14 conventions of one field)** — top-label · inline left-label · floating-label (outlined) · Material underline · placeholder-only · boxed+helper · search w/ leading icon · leading addon ($) · trailing unit (kg) · textarea + live char counter · OTP 6-box code · number stepper · password+reveal · native-select vs combobox vs multi-select-chips. Focus + error states; visible focus ring (incl. borderless Material). |

| `Sidebar Variations.html` ⭐ | slate-blue, light+dark | **SHELL-COMPONENT DEPTH: 8 sidebar structures** — labeled w/ section headers · collapsed icon-rail 60px + tooltips · search pinned top (⌘K) · nested expandable groups (live carets) · workspace switcher top + user bottom · dark · compact dense + per-item count badges · primary action button above nav. Structural not cosmetic; focus ring; light & dark. |

| `Header / Topbar Variations.html` ⭐ | slate-blue, light+dark | **SHELL-COMPONENT DEPTH: 8 header/toolbar structures** — page-title + search + actions · breadcrumb + actions · tabbed header (title + section tabs) · search-centric (centered) · minimal (title + avatar) · view-switcher + filter chips · contextual selection ("3 selected" + bulk) · dark header. Structural; focus rings; live tabs/segments. |

| `Usage Examples — Molecules & Organisms.html` ⭐ | slate-blue, tasteful | **ORGANISM USAGE SET** — user profile header (cover band + overlap avatar + tabs) · settings panel (sectioned form + sticky "Unsaved changes" save bar) · comment thread (nested reply guide line + composer) · checkout/order summary (line items + totals + Pay + secure note) · notification list (Today/Earlier groups, unread tinted+dot vs read muted) · file uploader (dashed dropzone + 68% progress) · filter/toolbar (count + search + chips + sort + list/grid toggle) · empty/loading-skeleton/error trio. Restrained skeleton shimmer (no gradients). |

| `Adding personality to UI.html` ⭐📖 | Warm Studio (clay) — GUIDE, self-demonstrating | **PERSONALITY GUIDE (8 before/after pairs + "use when")** — subtle texture/fine grain · dot-grid background pattern · expressive display face · confident accent + color story (clay+sage+gold) · signature edge (square inked border + hard offset shadow) · distinctive geometric mark + display wordmark · editorial whitespace + asymmetry · micro-detail (accent dot / underlined display heading / mono metadata). Plain-vs-With-personality snippets; texture/grain kept subtle, no slop. This is the "adding personality" deliverable (g). |

| `Marketing sections.html` ⭐ | emerald accent, Bricolage+Hanken | **MARKETING/LANDING SET** — hero (headline+subcopy+dual CTA+product mock) · logo/social-proof strip · 3-up feature grid w/ icons · feature spotlight (text beside framed UI) · 3-tier pricing (one highlighted) · testimonial/quote block · FAQ accordion · closing CTA band. One accent, real type pairing. |

| `Tabs & segmented variations.html` ⭐ | slate-blue | **PATTERN-AXIS: 9 tab/segmented patterns** — underline · filled/pill · boxed folder · segmented (iOS) · vertical · with leading icons · with count badges · enclosed card tabs · scrollable strip + overflow fade. Active+hover via states legend, live. |

| `Editorial component gallery.html` ⭐ | **Editorial/print** (warm ivory, high-contrast ink, burgundy accent, Newsreader serif display + Hanken Grotesk, hairline rules, generous margins) | **7TH-AESTHETIC ATOM SET** — buttons(primary/secondary/ghost) · fields(text/select/search × default/focus/error) · checkbox/radio/toggle · status badges · tabs · 3 card treatments. Serif-display editorial voice. |

**Aesthetics banked (7):** cool-technical (light) · Warm Studio (cream/clay) · Atelier/Grid (cobalt Swiss) · Midnight (dark plum/gold) · slate-blue (shells) · forest-green (cards) · Editorial (ivory/ink/burgundy serif). Plus marketing emerald. Each contributes looks per atom → atoms accumulate many looks across rounds. Multi-variant single-atom sheets + pattern sheets + usage organisms add more.

> **STYLE EXCLUSION (Ammiel, every prompt):** NO AI-cliché aesthetics — no glassmorphism, no neon/glow, no heavy purple→blue gradients, no neumorphism, no skeuomorphism. Aim for looks a strong product designer would actually ship. Contrast floor still applies.
> **Requested:** good **app-shell** variants (distinct nav/frame layouts) — queued.

---

## DICTIONARY — by component family (the pick-from index for weak models)

> How to use: find your component family → pick a *look* → open its **src** page in the CD project `Lookbook Specimens` (or the local `registers/`/`kits/` file) and copy that component's markup + the page's `:root` skin. All looks clear WCAG-AA contrast; none use the banned AI-tells (no glass/neon/neumorphism/heavy-gradients/skeuomorphism).

### Buttons
| Looks | src |
|---|---|
| primary · secondary · ghost · destructive, each default/hover/disabled (Warm-Studio clay) | `Component Gallery.html` |
| soft-tint · ghost · pill · sharp/squared · brutalist(yellow) · mono/terminal · icon+label · split-button · link/underline · FAB | `Button Variations.html` (skip the 5 AI-tell ones: gradient/neon/neumorphic/glassy/gradient-border) |
| primary · secondary · ghost (editorial serif) | `Editorial component gallery.html` |
| accent + outline buttons rendered across different skins/voices | each `registers/float-*.html` |

### Inputs & fields
| Looks | src |
|---|---|
| 14 PATTERNS of one field: top-label · inline-left · floating · Material-underline · placeholder-only · boxed+helper · search-icon · leading-addon($) · trailing-unit · textarea+counter · OTP 6-box · stepper · password-reveal · select vs combobox vs multi-chip — all with focus+error | `Input Pattern Variations.html` |
| text/select/search/textarea × default/focus/error/disabled + error msgs (Warm-Studio) | `Component Gallery.html` |
| fields × default/focus/error (editorial serif) | `Editorial component gallery.html` |

### Controls (checkbox / radio / toggle / segmented)
| Looks | src |
|---|---|
| checkbox · radio · toggle · segmented · tabs (Warm-Studio) | `Component Gallery.html` |
| checkbox · radio · toggle (editorial) | `Editorial component gallery.html` |
| segmented pill toggle (7d/30d/90d) | `Tabs & Segmented Variations.html` |

### Tabs & segmented
| Looks | src |
|---|---|
| 9 PATTERNS: underline · filled/pill · boxed-folder · segmented(iOS) · vertical · with-icons · with-count-badges · enclosed-card · scrollable-overflow (active+hover) | `Tabs & segmented variations.html` |
| underline + pill (live, dark) | `Overlays & Navigation Gallery.html` |

### Status badges / chips
| Looks | src |
|---|---|
| 6 badges: dot + tinted pill (Active/Pending/Failed/Review/Draft/New ★) | `Component Gallery.html` |
| dot + tinted pill (status) | `Component Gallery.html`, `Badge, Chip & Tag Variations.html` |
| editorial badges | `Editorial component gallery.html` |
| **full sheet by purpose** — status(dot+tinted pill) · solid · outline · count/number · notification dot · removable filter chip(×) · selectable toggle chip · input token/tag in field · avatar+label chip · icon-leading · new/beta label · small-vs-large sizes | `Badge, chip & tag variations.html` |
| **status by SHAPE+WEIGHT, not hue** (a11y/colorblind-safe): filled=Live · dot=Active · hollow-ring=Pending · square=Queued · cross=Failed · dashed=Draft | `Monochrome Component Gallery.html` |

### Avatars
| Looks | src |
|---|---|
| sizes + stacked group (+N) | `Component Gallery.html` · `Usage Examples — Molecules & Organisms.html` |

### Cards / tiles
| Looks | src |
|---|---|
| 12 tasteful: stat/KPI · profile · product-w-image · pricing · feature-w-icon · alert/notification · media · list-row · dark · flat-bordered · subtly-elevated · bento cluster | `Card variations.html` |
| metric · profile · feature-striped-image · bordered-pricing(Popular) (Warm-Studio) | `Component Gallery.html` |
| 3 card treatments (editorial serif) | `Editorial component gallery.html` |

### Stat / KPI tiles
| Looks | src |
|---|---|
| 3 styles: accent-topped · sparkline-floor · inverse-cobalt | `Data Display Gallery.html` |
| label+value+delta+inline sparkline · hero stat + dimmed decimals + delta chip · metric·delta·trend composite | `Data Display Gallery.html` |
| accent-topped KPI tile + delta chip (worked) | `worked-examples/console-pulled.html` |

### Tables
| Looks | src |
|---|---|
| 3 treatments: striped · compact-bordered-gridlines · separated card-rows w/ badges | `Data Display Gallery.html` |
| avatar + name/email + status badge + right amount | `Data Display Gallery.html` · `List, Avatar & Timeline Molecules.html` |
| gridlined table + status-by-shape badges (worked) | `worked-examples/console-pulled.html` |

### Charts / data viz
| Looks | src |
|---|---|
| area-line trend · vertical bar (one highlighted) · stacked bar+legend · donut+center-label+legend · 5-up sparkline row · organic area chart + avg-baseline | `Data Display Gallery.html` |
| progress: 4 labeled horizontal bars + radial ring + legend | `Data Display Gallery.html` |
| metric·delta·trend composite (figure + delta pill + trend area vs dashed target) | `Data Display Gallery.html` |

### App shells (frames)
| Looks | src |
|---|---|
| 6 by composition: classic sidebar+topbar · icon-rail · top-navbar+section-tabs · split master-detail · dual-sidebar · dense command-center | `App Shell Variations.html` |
| rail-as-layout AXIS on one live dashboard (none / icon-rail / open / collapsible-mid-collapse) — see the drill-down study | `Dashboard Shell & Widget Studies.html` (DRILL-DOWN AXIS STUDIES) |

### Sidebars (shell component)
| Looks | src |
|---|---|
| 8 structures: labeled-sections · collapsed-icon+tooltips · search-pinned(⌘K) · nested-expandable · workspace-switcher+profile · dark · compact-dense+badges · primary-action-above-nav | `Sidebar Variations.html` |
| the rail shown as a layout AXIS in-context (none / icon-rail / open / collapsible) against an unchanged dashboard body | `Dashboard Shell & Widget Studies.html` (DRILL-DOWN AXIS STUDIES) |

### Headers / topbars (shell component)
| Looks | src |
|---|---|
| 8 structures: title+search+actions · breadcrumb+actions · tabbed · search-centric · minimal · view-switcher+filters · contextual-selection(3 selected+bulk) · dark | `Header / Topbar Variations.html` |

### Overlays (modal / drawer / palette / toast / menu / popover)
| Looks | src |
|---|---|
| modal + destructive dialog · slide-over drawer · command palette ⌘K · success/error toasts · dropdown(shortcuts+destructive) · context menu(checkmark+submenu) · profile popover(arrow) | `Overlays & Navigation Gallery.html` (Midnight) |
| **8 COMPOSITIONS of one dialog** — centered modal · bottom sheet · right drawer · left drawer · full-screen takeover · inline-expand(no overlay) · anchored popover · compact alert/confirm | `Overlay compositions.html` |

### Nav molecules
| Looks | src |
|---|---|
| breadcrumbs · pagination (ellipsis) | `Overlays & Navigation Gallery.html` |

### Lists / feeds / timelines
| Looks | src |
|---|---|
| simple list row (icon+title+meta+action) · two-line w/ avatar+status · selectable/checkable rows · key-value/description list · activity feed (avatar+action+time) · vertical timeline (dots+line) · horizontal step/wizard progress (done/current/upcoming) · avatar set (sizes/status-dot/stacked+N/group) | `List, avatar & timeline molecules.html` |

### States (empty / loading / error)
| Looks | src |
|---|---|
| empty(icon+title+line+CTA) · loading skeleton (restrained shimmer) · error+Retry — trio | `Usage Examples — Molecules & Organisms.html` |
| empty-state (icon+title+line) | `Usage Examples - Molecules & Organisms.html` |

### Organisms (real-use)
| Looks | src |
|---|---|
| profile header · settings panel + sticky save bar · comment thread + composer · checkout/order summary · notification list(read/unread groups) · file uploader(progress) · filter/toolbar bar | `Usage Examples — Molecules & Organisms.html` |
| full dashboards (worked) | `worked-examples/console-pulled.html` · composed recipe `Composed Recipe - Dashboard Home.html` · shell-axis study `Dashboard Shell & Widget Studies.html` |
| same product in many voices (skin = dial space, not a preset list) | `registers/float-*.html` + `cookbooks/registers.md` |

### Marketing sections
| Looks | src |
|---|---|
| hero+product-mock · logo/social-proof strip · 3-up feature grid · feature spotlight · 3-tier pricing · testimonial/quote · FAQ accordion · CTA band | `Marketing sections.html` |

### Auth screens
| Looks | src |
|---|---|
| centered-card login (social + or-divider + remember/forgot) · split-screen (form + brand panel) · sign-up + password-strength meter · forgot/reset · check-your-inbox verification · 2FA segmented OTP | `Auth Screens.html` |
| **INTERNAL / NON-MARKETING auth** (the default for any targeted/back-office app — no value-props, stats, testimonials, hero pitch): centered-card + audit microcopy · split w/ wordless brand panel · split w/ masked product preview · split w/ system/security context (org · environment · SSO · last-sign-in · status) · full-bleed minimal | `Internal Auth Studies.html` |

### Skins / aesthetics — an OPEN set, NOT a menu

> **Skins are not limited to the ones below — or to Lookbook at all.** A skin is a *point in a dial space* (color · type · radius · elevation · density · border · accent-discipline), and the named ones here are just **example starting points**, not a closed list. Bring any skin you like — a brand's own palette + type, a skin from another system, one you compose from scratch — and apply it to ANY variation/composition. The forward model: **the variations (the `* Variations` sheets + the `* Studies` drill-downs + the composed recipes) are the SOURCE/inspo; the skin is whatever paint you choose.** The point of the examples is to show the dials moving, not to be picked from. (Dial space + how to compose a voice for any brief: `cookbooks/registers.md`; the same product rendered across voices: `registers/float-*.html`.)

**Example skins** (copy a `:root` token block as a *starting point*, then change any dial):
| Aesthetic (example) | src |
|---|---|
| cool-technical (light, Geist/indigo) | `kits/cool-technical/` skin · `registers/float-cool-technical.html` · `worked-examples/console-pulled.html` |
| Warm Studio (cream/clay, Bricolage) | `Component Gallery.html` |
| Atelier/Grid (cobalt Swiss) | `Data Display Gallery.html` |
| Midnight (dark plum/gold) | `Overlays & Navigation Gallery.html` |
| slate-blue (neutral pro) | `App Shell Variations.html` |
| forest-green (warm-gray) | `Card variations.html` |
| Editorial (ivory/ink/burgundy serif) | `Editorial component gallery.html` · `registers/float-{warm,dark,cold}-editorial.html` |
| Monochrome (warm B/W + 1 blue, Public Sans; status-by-shape) | `Monochrome Component Gallery.html` |
| emerald (marketing) | `Marketing sections.html` |
| …or any skin you bring | not in Lookbook — that's the point |

### Adding personality (techniques + examples)
| Technique (Plain → With-personality) | src |
|---|---|
| subtle texture/grain · dot-grid pattern · expressive display face · accent+color story · signature edge(inked border+offset shadow) · distinctive mark · editorial whitespace+asymmetry · micro-detail(dot/underline/mono-meta) | `Adding personality to UI.html` 📖 |

---

## DRILL-DOWN AXIS STUDIES (one surface · one axis · N labeled variants)

A third index alongside the DICTIONARY (component families) and COMPOSED RECIPES (worked pages). A **drill-down study** holds ONE dataset constant and varies ONE structural axis across several **numbered, captioned** variants on a single liftable sheet — so a builder picking a treatment for that axis sees the full option space, not one default. All on the **cool-technical** skin (Geist, indigo accent, hairline borders), DVLA vehicle-registration domain, anti-tell-clean (no rounded-card + single-side accent border; see `anti-patterns.md` AP25/AP29). Generated in Claude Design (`Lookbook Specimens`), 2026-06-27. **Keep every variant — the value is the full set.** Open the sheet, read the captions, copy the variant whose job matches.

**Cross-cutting axes** (each transfers across many surfaces):
| Axis · variants | src |
|---|---|
| **Master–detail reveal** — full-navigate · side-panel drawer · inline-expand · modal-detail | `Master-Detail Reveal Studies.html` |
| **Filter / facet placement** — top-bar chips · left rail · right flyout-drawer · collapsible rail · bottom sheet | `Filter Placement Studies.html` |
| **Action / commit placement** — hero-header · sticky-footer bar · sticky-top · floating button · per-section | `Action & Commit Placement Studies.html` |
| **Stepper / progress orientation** — horizontal · vertical · sidebar-rail · progress-bar · breadcrumb (active-step marked by fill/number, not a rounded-card+side-border tell) | `Stepper & Progress Orientation Studies.html` |
| **Containment / chrome context** — full-page · in-shell · inline-panel · modal/sheet | `Containment & Chrome Context Studies.html` |
| **View-mode & density** — card · list-rows · compact-rows · table × comfortable / compact / dense | `View-Mode & Density Studies.html` |
| **Bulk-select & multi-select action bar** — checkbox-col + floating pill · checkbox-col + sticky-footer toolbar · checkbox-col + inline header banner · hover-reveal checkbox + swap-in top toolbar · select-all master + summary chip w/ kebab · whole-row-select + right contextual side panel (selected rows = bg-tint only, no accent-border tell) | `Bulk-Select Action Bar Studies.html` |
| **Responsive reflow** — ONE admin screen resolved across 3 breakpoints (Desktop 1280 · Tablet 768 · Mobile 375) as labeled device frames, with numbered pins → a reflow-notes legend per frame + between-frame transition captions. Decisions shown: nav rail → icon-rail → hamburger drawer · inline filter chips → Filters button → bottom sheet · full multi-col table → dropped columns → stacked touch cards · KPI row → tight row → scroll strip. (Sheet is ~1760px wide — view at ≥1800 to see frames + notes.) | `Responsive Reflow Studies.html` |
| **Per-row action affordance** — how each ROW exposes its actions (same action set everywhere): none / display-only (whole-row click + trailing chevron) · hover-reveal icons · persistent trailing icon column · swipe-to-reveal (mobile; colour-coded tiles) · kebab overflow menu · inline labelled quick-actions bar. Overdue rows tinted; destructive (Archive) red only on the actual control; hover/active = bg-tint not accent-border. | `Per-Row Action Affordance Studies.html` |
| **Long-form organization** — how one long form (4 sections) is organized: single-scroll (+ sticky Save) · tabbed (section per tab) · sidebar TOC + scroll-spy · wizard/stepper (Step N of 4) · accordion (collapsible sections). Closes with a **field-label position** mini-study: top-aligned vs inline-left vs floating labels. Active tab/step/TOC item = underline or bg-tint, never accent-border card. | `Long-Form Organization Studies.html` |
| **Pagination / load-more / infinite-scroll** — how one list pages through 1,284 records (only the footer control changes): numbered pagination (‹ 1 2 3 … 64 ›) · load-more button · infinite scroll (spinner + auto-load) · cursor prev/next (Newer/Older, keyset) · page-size selector + jump-to-page · virtualized/windowed (floating position pill, only visible rows mounted). Current page / active control = bg-fill, never accent-border card. | `Pagination & Load-More Studies.html` |
| **Tenant / white-label accent theming** — the SKIN-LAYER study (accent is the *variable*, not fixed): how an arbitrary tenant brand hex derives an AA-safe accent system. 4 tenant hexes spanning the whole decision matrix (Indigo `#5B5BD6` passes clean · Lime `#A3C614` fails white-on-fill → flip to ink + darken link to 700 · Teal `#0E9E8E` borderline → darken fill to 600 · Crimson `#D6455B` mid). Sections: (1) derivation ramp — one hex → 50–900 tonal scale, roles bind to derived *steps* not the raw hex; (2) AA contrast gate — 4 tenants × {white-on-fill · ink-on-fill · brand-as-link-on-white · ink-on-tint} matrix, each cell baked ratio + PASS/FAIL + resolved decision; (3) one identical admin surface under all 4 resolved accents (active-nav bg-tint, KPI, primary button, chip, chart bar, link); (4) the on-fill text flip (raw white-on-fill FAIL vs resolved ink-on-fill PASS). Generic multi-tenant SaaS admin ("Acme Admin"), sheet chrome accent-neutral grayscale so tenant colors are the only page color; all values baked static (no live color math). Serves white-label products (per-tenant/per-seller/per-merchant brand accents). | `Tenant Accent Theming Studies.html` |
| **Case review & action-center placement** — the enforcement/approval decision surface: ONE case (`#NC-2481` non-compliance, held constant) rendered 6 ways, varying only WHERE the verdict/action-center lives and how the reviewer commits. Variants: (1) right action rail (2-col, decision always in view) · (2) sticky footer decision bar (long-evidence read, Dismiss expands inline reason) · (3) top verdict header (fast-triage) · (4) master-detail decide-in-place (queue → case → auto-advance; active queue row = bg-tint, not side-border) · (5) focused overlay review (dimmed queue scrim + right slideover, actions in overlay footer) · (6) dismiss-with-reason molecule 3 ways (inline expanding field disabled-until-filled · required-reason modal w/ category+detail · reason + mandatory-evidence). Action-center = Assign officer / Escalate / Dismiss-with-reason / Issue invoice (primary). Evidence = offline-safe hatch-tile placeholders; status colors map (Pending=amber, High/overdue/Dismiss=red, primary=indigo). Serves DVLA deposit-verify + non-compliance, RHC enforcement console, gra-insight risk-queue/case-mgmt. | `Case Review & Action-Center Studies.html` |
| **Printable financial documents** — the whole-class print hole: ONE transaction's figures (`DVLA-INV-2026-04821`, total GH₵ 268.18, held constant + reconciling) rendered as 4 printable document FORMATS, varying only format + print-media density. Variants: (1) thermal 80mm receipt (narrow mono column, dotted leaders, ruled TOTAL, inline-SVG QR, torn/perforated edge) · (2) A4 invoice (letterhead + meta, Bill-To, line-items grid, right-aligned totals stack, MoMo/bank terms, QR + authorised-signature, green PAID stamp) · (3) statement/collections ledger (landscape, running-total column, our txn as bg-tint highlighted row, opening 0.00 → closing 1,323.68, Prepared-by/Reviewed-by dual signatures) · (4) tax-computation breakdown (Ghana levy+VAT chain as step/rate/base/amount rows + a stacked proportion bar showing VAT is charged on base+levies 233.20, not the 220.00 base). Geist Mono tabular figures throughout; each doc on white "paper" w/ shadow; indigo restrained (mark/TOTAL); QR + DVLA mark = inline SVG (offline-safe). Serves DVLA receipts/invoices/statements/analysis-sheets + harmony bills/settlement receipts. NOTE: fonts load from Google Fonts CDN (render w/ network; system fallback if truly offline — content/layout/SVG stay intact); this is library-wide behavior, not doc-specific. | `Printable Financial Document Studies.html` |

**Surface-unique axes** (the gap a single component family doesn't cover):
| Surface · axis · variants | src |
|---|---|
| **Calendar event-creation** — quick-add popover · drag-select range · create-slideover · inline-cell; + multi-calendar coloured lanes + single-day view | `Calendar Event-Creation Studies.html` |
| **Kanban** — column-count (2 / 4 / 6–8) · card-anatomy depth (minimal / standard / rich) · swimlane grouping (priority / assignee / epic) | `Kanban Board Studies.html` |
| **Pricing** — tier count & enterprise shape (2/3/4-tier + Contact-Sales) · billing-toggle placement (above / in-card / sticky) · spatial relation (parallel / carousel / accordion / stepped) | `Pricing Plan Studies.html` |
| **Dashboard shell & widget** — sidebar-as-layout axis (none / icon-rail / open / collapsible) · widget interaction depth (static / drill-down / expandable / in-widget-edit) | `Dashboard Shell & Widget Studies.html` |
| **Auth** — multi-step wizard · SSO-first · magic-link (entry + sent states) · password-recovery (request / sent / set-new) | `Authentication Flow Studies.html` |
| **Inbox & thread** — thread model (flat / grouped / nested-quote / doc-comment) · compose surface (inline / slide-in / full-screen / quick-chip) · list-preview depth (minimal / standard / rich) | `Inbox & Thread Studies.html` |

> Shell-surface tie-in: when manifesting an app screen's shell surfaces (SKILL.md step 4), the **Dashboard Shell & Widget** study is the rail-as-layout-axis reference, **Containment & Chrome Context** the in-shell-vs-inline reference — alongside the component-level `Sidebar Variations.html` / `App Shell Variations.html`.

---

## WORKED EXAMPLES — hand-built via the skill protocol (`harvest/worked-examples/`)

Unlike every other specimen here (Claude Design exports), these were **hand-built by following the hardened SKILL.md protocol directly** — manifesting each shell surface from a named variant, locking the type/spacing ramps — as the 2026-06-28 validation that the protocol *forces* deliberate output. They double as reference for what "pulling from the dictionary" produces. Skinned in cool-technical **as ONE example skin — the same compositions take any skin** (Geist · indigo `#5B5BD6` · hairline, light); DVLA vehicle-registry domain; type `13·16·20·25·31·39` (1.25), spacing `4·8·12·16·24·32·48·64·96`. Open `index.html` for the labeled gateway.

| File | What it demonstrates | Shell surfaces pulled |
|---|---|---|
| `console-pulled.html` | **Operator console — deliberate pulls.** The reference for a fully-manifested app screen. | rail → Sidebar Variations *dark + labeled-sections + count-badges*; topbar → Header Topbar *title+search+filter-chips*; table → Data Display *gridlines* + Monochrome *status-by-shape*; KPI → *accent-topped tiles*; active-nav → **bg-tint only** (Wren rule); states → Usage Examples *empty/loading/error* |
| `console-baseline.html` | **The AP29 foil.** Identical KPIs/chart, shell left at generic defaults (bare white 240px rail, plain topbar, default `<table>`). Side-by-side with `console-pulled` it proves the manifest is load-bearing — the *only* difference is whether the shell was pulled. | none (deliberately generic) |
| `detail-inspo.html` | **Inspo-not-clone.** Same vocabulary, *divergent* shell; blends two recipe compositions rather than cloning one. | rail → Sidebar Variations *collapsed icon-rail + tooltips*; topbar → Header Topbar *breadcrumb + actions*; body → Detail recipe *two-col + side-rail* BLENDED with *activity-timeline* |

> Findings fed back from this test: `verification.md` gained a caveat that `check-contrast.mjs` over-reports on multi-surface (dark-rail + light-body) screens (cartesian token pairing → confirm real pairs with the pair-form); `fundamentals.md` F2 gained the concrete worked type ramp. Approved by Ammiel with zero design touches → the hardening works.

---

## COMPOSED RECIPES (phase 2 — worked full pages; pull-from index)

**MODEL (corrected 2026-06-19 per Ammiel — decouple COMPOSITION from SKIN):**
- **Composition** = structural + interaction bones (shell, where filters/actions/nav live, table vs cards, pagination style, what's pinned). This is the ONLY variation axis. The 5 variations of an archetype differ ONLY in composition + interaction pattern.
- **Skin** = color palette + font-family token set (any skin — the listed aesthetics are examples, not a closed set; bring your own). Paint, applied **uniformly** — NOT a variation. Each recipe page renders all 5 compositions in ONE uniform neutral skin so the composition difference is pure.
- Label variations by **composition** (plain structural names — "classic console", "filter-rail", "command/dense", "master-detail", "report/ledger"), NOT aesthetic codenames.
- A **"Skins & how to apply"** section pairs the token blocks with the rule: composition = skeleton, skin = paint; pick ONE skin per product, apply across whichever compositions. (See `### Skins / aesthetics` below for the token sources.)
- **Chart standard:** 1px muted gridlines or none · single accent stroke · smooth realistic data · donut = thin even ring no 3D · bars = consistent width shared baseline · tabular-numeral axis labels w/ padding · designer-drawn, not script-drawn.

Archetype catalog = 20 (analytics, list-table, list-grid, detail, dashboard-home, search, reports, kanban, inbox, calendar, activity-feed, admin, settings, create/edit, checkout-wizard, auth/onboarding, pricing, profile, empty-states, error-pages); 5 compositions each.

### 1. Analytics / overview — `Composed Recipe — Analytics Overview.html` ✅ CORRECTED 2026-06-19
Regenerated to corrected model: 5 compositions, ONE uniform neutral skin, composition labels, charts redrawn to standard (Catmull-Rom smoothing, 1px muted gridlines, single accent stroke, thin even donut ring no-3D, consistent-width bars shared baseline, tabular labels, no fake legends), + closing "Skins & how to apply them" section (4 token rows Neutral/Warm/Dark/Editorial-serif). CD self-verifier ran. _Human spot-check of chart rendering still advisable._ Compositions:
1. **Classic console** — sidebar shell + top filter bar · 4-up KPI strip w/ delta chips · wide line chart + compact donut · transactions table w/ status-by-shape badges · date-range **segmented control**. *Canonical scan-top-drill-below; range control in the filter bar so it doesn't move the eye.*
2. **Filter-rail** — left faceted filter rail + top-nav · fewer-bigger **sparkline stat cards** · applied-filter chips · load-more. *Faceted rail suits many-dimension exploration; chips make active filters legible.*
3. **Command / dense** — keyboard-first command bar ("/") · 6 tight KPIs · **small-multiples** grid over one main chart · dense log table · metric-group tabs + density toggle. *Small multiples = status at a glance for power users.*
4. **Master-detail** — list/table left + detail/preview panel right that updates on row-select. *Keeps context while drilling; no full-page nav per record.*
5. **Report / ledger** — content-first single column · big **lede number** + measured metric column · elegant area chart · prose-flanked table · anchored scroll tabs. *Reads like a written analysis.*

_Recurring team-ups (promote as they accrue): **analytics spine** = sidebar-shell + KPI-strip + single hero chart + status table · **filter-rail** = faceted rail + applied-filter chips · **ops/dense** = command bar + small-multiples + dense table · **master-detail** = list + live preview panel._

### 2. List / index — table-driven — `Composed Recipe - List Index View.html` ✅ CORRECTED 2026-06-19
"Same skin. Five ways to index." — one uniform neutral skin, 5 compositions, loading + empty states covered, + Skins section. Compositions:
1. **Toolbar-classic** — sidebar shell + top toolbar (search + filter dropdowns + primary New) · dense sortable table + status-by-shape badges · row checkboxes → bulk-action bar on selection · numbered pagination. *Canonical CRUD index; sortable columns + multi-select are what power users reach for first; bulk bar appears only on selection.*
2. **Filter-rail** — top-nav + left faceted filter rail · saved-view tabs · airy table · removable applied-filter chips · **load-more reveals skeleton rows** (the loading state). *Faceted rail for many-dimension data; chips keep active filters legible.*
3. **Command / dense** — command bar ("/") · 13px zebra-free table + sticky header · inline row expansion · column-settings popover · density toggle. *Keyboard-first for high-volume scanning.*
4. **Card-rows** — roomy card-rows (avatar + meta + status pill + kebab) instead of a grid table · segmented All/Active/Archived · inline-editable status pill · friendly **empty state** (Archived). *Cards suit human-readable records over dense tabular data.*
5. **Ledger** — single column · ruled rows grouped by section with subtotal rows · minimal toolbar (search + quiet sort) · classic prev/next. *Document-like; subtotals read as a printed register.*

_Recurring team-ups: **CRUD index spine** = sidebar + toolbar + sortable table + selection-triggered bulk bar · loading state belongs on the load-more/scroll path; empty state belongs on a filtered/archived view._

### 3. List / index — card & gallery grid — `Composed Recipe - Card ... grid.html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, image placeholders = subtle hairline-striped w/ mono labels (no fake imagery), loading + empty covered, + Skins section. Compositions:
1. **Gallery grid** — top toolbar (search + sort + grid/list view toggle) · responsive 3-4 col card grid (thumb + title + meta + tag) · numbered pagination · hover reveals quick-action row. *Default browse; view toggle bridges to the table recipe.*
2. **Filter-rail gallery** — left faceted rail (category, price/size) · even grid · removable applied chips · **load-more → skeleton cards** (loading). *Faceted browse for large catalogs.*
3. **Cover-first / catalog** — large cover cards (image + title + price + secondary CTA + rating) · category tabs · subtle hover lift. *Product/catalog browse; image-forward.*
4. **Compact tiles / dense** — many small tiles (logo + label + one stat) · segmented quick filters · **hover-checkbox multi-select → bulk-action bar**. *Scan a large set fast.*
5. **Spotlight + grid (+ empty state)** — full-width featured hero card over a normal grid · plus the **empty / first-run** panel (icon, message, primary Add CTA, hint). *Editorial/featured surface; carries the zero-data state.*

_Recurring team-ups: **gallery spine** = toolbar + responsive card grid + pagination · grid/list view-toggle links card-grid ↔ table recipes · empty/first-run rides the spotlight composition · image placeholder = hairline-stripe + mono label (never fake imagery)._

### 4. Detail / record page — `Composed Recipe - Detail ... .html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions; required elements spread across: related-lists, kebab menus, inline-editable field. Compositions:
1. **Hero + tabs** — full-width record hero (icon + title + meta chips + status badge + primary/secondary actions) · horizontal tab nav (Overview/Activity/Files/Notes) · Overview body w/ info cards. *Tabs suit a record with several equal-weight sections.*
2. **Two-column + side rail** — main field-sections left + sticky RIGHT side rail (status, owner, metadata definition list, quick actions, related links). *The classic record layout; rail keeps status/actions always in view.*
3. **Master-detail inline** — sibling list left + selected record detail right (swaps on select) · inline-editable Priority field · kebab action menu. *Triage many sibling records without leaving the page.*
4. **Document / anchored** — centered long-form record · sticky left outline w/ **scroll-spy** (highlights active section, click scrolls). *Long structured records read as a document.*
5. **Summary + activity timeline** — compact summary header over a prominent vertical **audit timeline** (actor + time + change) + related-items panel. *Audit-heavy records lead with history.*

_Recurring team-ups: **record spine** = hero/summary header + (tabs OR side-rail) + sections + related-list · side-rail = status+owner+metadata+quick-actions (definition-list) · master-detail = sibling list + live detail + inline-edit · activity timeline = actor+time+change rows · scroll-spy pairs with the document composition._

### 5. Dashboard home / landing — `Composed Recipe - Dashboard ... .html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, smooth charts, first-run state covered. Compositions:
1. **Greeting + widget grid** — personalized greeting + quick-action row · uniform grid of widget cards (KPI tile, mini line chart, recent-activity list, tasks-due list). *Familiar home; uniform grid is the safe default.*
2. **Bento grid** — varied-size tiles (2-wide hero metric, 2×2 chart tile w/ 30D/90D toggle, KPI, donut, list, accent CTA tile) — asymmetric but grid-aligned. *Bento gives hierarchy without a rigid grid; the big tile sets focus.*
3. **Focus / today** — prominent left "Today" column (agenda + tasks w/ checkboxes → **live remaining count**) + secondary right column of smaller widgets. *Task-first home for daily drivers.*
4. **Feed-centric** — sidebar nav + central "What's new" activity feed + right rail of compact widgets (quick stats, upcoming, suggestion CTA). *Feed-first home for collaborative/social apps.*
5. **Onboarding home (empty/first-run)** — setup-checklist hero w/ **live progress ring** (check step → ring + % update) + connect-data card + empty widget cards w/ "connect data to populate" prompts. *Carries the first-run/zero-data state.*

_Recurring team-ups: **home spine** = greeting/quick-actions + widget grid · bento for hierarchy, uniform grid for parity · first-run = checklist + progress ring + empty widgets w/ connect prompts · widgets reuse KPI-tile / mini-chart / list molecules from analytics._

### 6. Search / results page — `Composed Recipe - Search ... .html` ✅ 2026-06-19 (first w/ enriched skin token table)
One uniform neutral skin, 5 compositions, zero-results covered, closes with the enriched skin token table. Compositions:
1. **Results list + facets** — search bar (active query + result count) + left facet rail (type/date/tags) + result rows (title + snippet + meta + source) + numbered pagination. *Canonical web-search; facets narrow, rows scan.*
2. **Federated / grouped** — unified bar + results grouped by type (People/Files/Projects) each a labeled section + "See all (N)". *Multi-entity search; grouping beats one ranked list.*
3. **Search + preview pane** — results list left + **live preview pane** right (swaps on select). *Email/file search; preview avoids round-trips.*
4. **Command palette** — centered ⌘K palette over dimmed page · grouped Recent/Suggested/Actions · one row highlighted + ↵ · keyboard-hint footer. *Power-user instant nav/actions.*
5. **Zero-results** — query echoed + "no matches" + **did-you-mean** + popular/recent searches as chips. *Carries the no-match state with recovery paths.*

_Recurring team-ups: **search spine** = query bar + (facets OR groups) + result rows · preview-pane links to the detail recipe · command-palette = grouped instant results + keyboard hints · zero-results = did-you-mean + popular-search chips._

### 7. Reports / export builder — `Composed Recipe - Reports ... .html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, empty state covered, enriched skins table. Compositions:
1. **Builder + live preview** — left config form (date range, dimensions, metrics, group-by) + right live-preview report table. *Immediate feedback while configuring.*
2. **Pivot + grouped totals** — table grouped by dimension w/ subtotal rows + grand-total row · toolbar group-by + export (CSV/PDF/XLSX) · right-aligned tabular numerals w/ deltas. *The report output itself; subtotals are the payload.*
3. **Stepped builder (wizard)** — horizontal stepper (Source→Filters→Columns→Format) · current panel + running summary side card. *Guides infrequent/complex report setup.*
4. **Saved reports library** — table of saved defs (name + owner + last-run + schedule badge) · Run action + kebab + New report CTA. *Reuse > rebuild; library is the hub.*
5. **Scheduled exports (+ empty)** — schedule config card (frequency, recipients, format) + upcoming-exports list + empty state (no schedules → prompt + CTA). *Automation surface; carries its own empty state.*

_Recurring team-ups: **report spine** = config (form OR wizard OR saved-def) → output (pivot table w/ subtotals + grand-total) → export actions · scheduled-exports = config card + upcoming list + empty state · pivot reuses the table family w/ subtotal/total rows._

### 8. Kanban / board view — `Composed Recipe - Kanban ... .html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, empty board covered. Compositions:
1. **Classic board** — columns (To do/In progress/Review/Done) w/ WIP counts + cards (title, tag, avatar, due) + add-card · one card mid-drag (rotated/lifted) w/ drop-placeholder gap. *The canonical board; WIP counts + drag are the core interaction.*
2. **Swimlanes** — same columns split into horizontal lanes (priority/assignee); cards at lane×column intersections under a shared header row. *Adds a second grouping axis without a second board.*
3. **Compact + collapsed columns** — dense board; some columns collapsed to vertical strips (title + count). *Reclaims space when only a few columns are active.*
4. **Board + detail drawer** — right detail drawer on selected card (description, checklist, comments); card ringed, board stays behind. *Edit without leaving the board.*
5. **Empty board (first-run)** — columns present but empty w/ dashed add-card prompts + overall first-run hint + CTA. *Carries the new-board state.*

_Recurring team-ups: **board spine** = columns + WIP counts + draggable cards + add-affordance · swimlanes add a row axis · detail-drawer mirrors the master-detail/preview pattern · drop-placeholder gap = the drag feedback._

### 9. Inbox / messaging / thread — `Composed Recipe - Inbox ... .html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, inbox-zero covered, badges hug content (guardrail applied). Compositions:
1. **Three-pane email** — folder rail + message list (sender, subject, preview, time, unread dot) + reading pane w/ reply bar. *Classic email; list+preview avoids navigation.*
2. **Two-pane chat/DM** — conversation list + open thread (bubbles L/R, day divider) + bottom composer. *Real-time messaging shape.*
3. **Unified inbox + filters** — single list + segmented tabs (All/Unread/Mentions) + row checkboxes → bulk-action bar (Archive/Mark read/Delete). *One stream + triage.*
4. **Focused conversation** — one centered thread + header actions (reply/forward/resolve) + inline quick-reply. *Single-thread focus.*
5. **Inbox zero (empty)** — friendly all-caught-up state + compose CTA. *Carries the empty state.*

_Recurring team-ups: **inbox spine** = list pane + (reading pane OR thread) + composer/reply · unified-inbox reuses the list+tabs+bulk-bar pattern from list-table · empty = inbox-zero + compose CTA._

### 10. Calendar / scheduling — `Composed Recipe - Calendar ... .html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, empty covered, event chips hug content. Compositions:
1. **Month grid** — month grid w/ event chips in day cells + header (prev/next/Today + Month/Week/Day switcher). *The default overview.*
2. **Week timeline** — day columns × hour rows, time-spanning event blocks, current-time line. *Time-precise day/week planning.*
3. **Calendar + side agenda** — month grid + right agenda of selected day (click day → moves selection). *Overview + detail in one view.*
4. **Scheduling / availability** — booking grid of time slots (available/booked/selected) + confirm panel on pick. *Booking flow; slot states are the payload.*
5. **Empty calendar** — clear month frame + centered no-events card + add-event CTA. *Carries the empty state.*

_Recurring team-ups: **calendar spine** = period header (nav + view-switcher) + grid (month cells OR time rows) · side-agenda mirrors master-detail · scheduling = slot grid + state styling + confirm panel · event chip = content-hugging chip in a cell._

### 11. Activity feed / notifications — `Composed Recipe - Activity ... .html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, empty covered. Compositions:
1. **Grouped timeline** — vertical timeline grouped by date (Today/Yesterday/Earlier); rows = actor avatar + action + target + relative time + connecting rail. *Chronological story of activity.*
2. **Notifications center** — list w/ read/unread (dot + tint) + filter tabs (All/Mentions/Following) + Mark-all-read. *Triage-oriented notifications.*
3. **Feed + filters** — central feed column + left filter rail (type/actor) + right summary card. *Filterable high-volume feed.*
4. **Compact audit log** — dense rows (timestamp, actor, action, target) in mono-numeral table style. *Scan many events fast (compliance/audit).*
5. **All caught up (empty)** — friendly empty notifications state. *Carries the zero state.*

_Recurring team-ups: **feed spine** = grouped/timeline rows (actor + action + target + time) · notifications = read/unread + filter tabs + mark-all-read · audit-log reuses the dense mono table · timeline rail = the grouping visual._

### 12. Admin / user management — `Composed Recipe - Admin ... .html` ✅ 2026-06-19 (toggle-thumb guardrail confirmed)
One uniform neutral skin, 5 compositions, empty covered, working toggle thumbs + content-hugging pills. Compositions:
1. **Members table + roles** — table (avatar, name, email, role dropdown, status badge, last active) + search + Invite. *Roster management spine.*
2. **Roles & permissions matrix** — roles as columns × capability rows w/ **toggles (visible sliding thumb)**; Owner column locked. *Permissions at a glance; toggle = the grant control.*
3. **Invite flow + pending** — invite form (email + role) + pending-invites list w/ Resend/Revoke. *Onboarding new members.*
4. **Member detail drawer** — members list + right drawer (role, teams, activity, danger-zone Remove); row-select. *Manage one member without leaving the list.*
5. **Seats / empty** — seat-usage summary card (1/10) + "just you so far" empty state + invite CTA. *Carries seats + zero state.*

_Recurring team-ups: **admin spine** = members table + role control + invite · permissions matrix = roles×caps + toggles · member-detail = list + drawer (mirrors detail recipe) · seats card + empty for first-run._

### 13. Settings — `Composed Recipe - Settings.html` ✅ 2026-06-19 (toggle thumbs perfected)
One uniform neutral skin, 5 compositions; toggle = white circle on gray track, slides right onto blue when on (mix of on/off shown). Compositions:
1. **Section nav + form** — left settings nav (Profile/Account/Notifications/Billing/Security) + grouped field sections + sticky Save bar. *The default settings layout.*
2. **Tabbed settings** — horizontal tabs + grouped setting cards. *Flatter IA for fewer sections.*
3. **Single scroll + anchored nav** — long single page + sticky anchored sub-nav (scroll-spy). *Everything on one scroll for power users.*
4. **Preferences toggles** — categorized rows (label + description + toggle), mixed on/off. *Toggle-dense preferences surface.*
5. **Danger zone** — account section + red-bordered danger card (Export data, Delete account) + typed-DELETE confirm. *Irreversible actions, gated.*

_Recurring team-ups: **settings spine** = (section-nav OR tabs OR anchored-scroll) + grouped field sections + save bar · preferences = toggle rows (label+desc+thumb) · danger-zone = bordered card + typed confirm · save bar mirrors the form-flow sticky actions._

### 14. Create / edit form flow — `Composed Recipe - Create ... form .html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, validation state covered. Compositions:
1. **Single-column form** — vertical sectioned form (top labels, helper text, mixed fields incl select + toggle) + sticky action bar. *The default form; one decision per line.*
2. **Two-column + live summary** — fields left + right live summary/preview reflecting values. *Confirms intent as you type.*
3. **Multi-step wizard** — stepper (Details→Options→Review) + per-step fields + Back/Next. *Chunks a long form.*
4. **Inline-edit record** — record view w/ inline-editable fields (pencil, edit-in-place, per-field/save bar). *Edit existing data in context.*
5. **Validation errors state** — error-styled fields + messages + top error summary (one valid field for contrast). *Shows the failure path explicitly.*

_Recurring team-ups: **form spine** = sectioned fields + sticky action bar · wizard = stepper + per-step panels (shared w/ checkout) · live-summary mirrors builder+preview (reports) · validation = field error + message + summary · inline-edit shared w/ detail recipe._

### 15. Checkout / multi-step wizard — `Composed Recipe - Checkout ... .html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, success state covered, placeholder labels only (no real payment data). Compositions:
1. **Stepper + summary rail** — stepper (Cart→Shipping→Payment→Review) + current panel + sticky order-summary rail (items, subtotal, tax, total). *The canonical guided checkout.*
2. **Accordion checkout** — collapsible Contact/Shipping/Payment/Review; completed sections collapse to summary lines; side summary. *One page, progressive disclosure.*
3. **Two-column classic** — all sections stacked left + persistent summary card (promo + pay) right. *Everything visible, fewest clicks.*
4. **Express / minimal** — compact card (saved address/card/delivery + edit links) + one pay button. *Returning-user fast path.*
5. **Order confirmed** — success state: order number, item summary, total paid, track/receipt actions. *The post-purchase state.*

_Recurring team-ups: **checkout spine** = (stepper OR accordion OR two-col) + per-step fields + order-summary (rail or card) · stepper shared w/ form-wizard · success state = confirmation + summary + next-steps · summary rail = line items + totals (tabular)._

### 16. Auth & onboarding — `Composed Recipe - Auth Onboarding.html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, placeholder labels only, chips hug content. Compositions:
1. **Centered card login** — centered card: email + password (reveal toggle), remember-me, Sign in, Google/SSO social buttons, forgot/create links. *The default sign-in.*
2. **Split-screen auth** — form left + hairline-striped brand panel w/ testimonial right. *Brand-forward marketing-adjacent auth.*
3. **Signup + password strength** — name/email/password + live 4-bar strength meter + terms checkbox. *Account creation w/ inline validation.*
4. **2FA verify code** — six auto-advancing OTP boxes + live resend countdown → resend link. *Step-up verification.*
5. **Welcome / onboarding** — post-signup welcome + 3-step setup checklist (progress bar, 1/3 done) + Get-started CTA. *First-run activation.*

_Recurring team-ups: **auth spine** = centered card + fields + primary + social + links · split-screen = form + brand panel · OTP = auto-advance boxes + resend countdown · onboarding = checklist + progress (shared w/ dashboard first-run)._

### 17. Pricing / plans — `Composed Recipe - Pricing Plans.html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, visible toggle thumbs. (CD self-verify caught+fixed a real cross-frame bug: a page-global monthly/annual toggle was wiping another composition's price → scoped per-frame.) Compositions:
1. **Tier cards** — 3 cards (Starter/Pro/Scale), Pro ringed + "Most popular", monthly/annual toggle that live-swaps prices. *Canonical SaaS pricing; the middle-highlight steers choice.*
2. **Comparison table** — feature rows × plan columns (check/dash) + sticky plan header + per-column CTA. *For feature-driven buyers.*
3. **Single featured + add-ons** — one hero plan + add-on rows w/ toggles + price deltas → live running total. *Configure-your-plan.*
4. **Usage calculator** — slider + inputs → live monthly estimate + recommended tier. *Usage-based pricing clarity.*
5. **FAQ-led / minimal** — compact single price + prominent expand/collapse FAQ accordion. *Low-SKU / trust-building.*

_Recurring team-ups: **pricing spine** = tier cards + billing toggle + highlighted plan · comparison-table reuses matrix (shared w/ admin permissions) · add-ons/calculator = toggle/slider → live total · FAQ accordion shared w/ marketing. WARNING: scope interactive controls to their own composition frame on multi-composition specimen pages (page-global selectors collide)._

### 18. Profile / public page — `Composed Recipe - Profile Public.html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, hairline-striped avatar/cover placeholders. Compositions:
1. **Header + stats** — cover band + overlapping avatar + name/handle/bio + tabular stat row (followers/following/posts) + Follow/Message + content cards. *The canonical public profile.*
2. **Tabbed content** — header + tabs (Overview/Posts/About/Activity) + content swap. *Multi-facet profile.*
3. **Sidebar bio + main** — left identity sidebar (avatar, bio, details list) + right "recent work" feed. *Bio-anchored, content-heavy.*
4. **Activity grid** — header + GitHub-style contribution heat-grid + recent-activity list. *Activity-as-identity (dev/creator).*
5. **Edit-mode profile** — inline-editable name/handle/bio (live char counter), avatar/cover upload, visibility toggle (visible thumb), sticky Save bar. *The owner's edit view.*

_Recurring team-ups: **profile spine** = cover + avatar + identity + stats + (tabs OR sidebar) + content · activity-grid = heat-grid + recent list (shared w/ feed) · edit-mode reuses inline-edit + save bar (form/detail recipes) · avatar/cover = hairline-stripe placeholder._

### 19. Empty / first-run states — `Composed Recipe - Empty First-Run States.html` ✅ 2026-06-19
One uniform neutral skin, 5 compositions, glyphs = minimal line marks on soft discs (no fake imagery). Compositions:
1. **First-run welcome** — full-surface welcome (headline + supporting line + primary CTA + quiet "take a tour"). *Brand-new account, zero context.*
2. **Empty collection** — real toolbar + zero rows + centered empty card (glyph, message, Create CTA) + "start from template" chips. *No data yet, guided creation.*
3. **Filtered to zero** — list w/ active filter chips matching nothing + "no matches" (data exists) + Clear-all-filters; chips removable. *Distinct from true no-data; recovery = clear filters.*
4. **Connect a source** — empty dashboard + 3 connect-cards (data source/integration/import) each w/ Connect + skip link. *Setup-gated empty.*
5. **All done (positive empty)** — restrained cleared state (check glyph, "all caught up", subtle View-archived). *Success empty, not a void.*

_Recurring team-ups: **empty spine** = glyph + message + primary action (+ secondary/skip) · empty-collection = toolbar-present + zero-rows + create · filtered-to-zero = filter chips + clear (≠ no-data) · connect-source = connect-cards · all-done = positive cleared state. Glyph = minimal line mark on soft disc, never a fake illustration._

### 20. Error pages — `Composed Recipe - Error Pages.html` ✅ 2026-06-19 (FINAL — 20/20)
One uniform neutral skin, 5 compositions, restrained visuals (large status number or line glyph, no imagery), status color only where state maps. Compositions:
1. **404 Not found** — big quiet "404" + message + search box + Back-home + helpful links. *Wrong URL; offer ways forward.*
2. **403 Forbidden** — lock glyph + "you don't have access" + Request-access + Switch-account; calm not alarming. *Permission, not failure.*
3. **500 Server error** — "something went wrong" + collapsible technical detail (error id/timestamp, mono) + Retry/Report. *Failure w/ recovery + diagnostics.*
4. **Maintenance** — status message + estimated-back-by + status pill (chip hugs content) + status-page link. *Planned downtime.*
5. **Offline** — offline glyph + "you're offline" + auto-retry spinner + countdown + manual Retry. *Connection lost; self-heals.*

_Recurring team-ups: **error spine** = large status number/glyph + message + primary recovery action · 404=search+links · 403=request-access · 500=collapsible detail + retry/report · maintenance=status pill + back-by · offline=auto-retry. Status color restrained, only where state maps (amber maintenance, red 500)._

---

## SKINS & how to apply (the layer that stays uniform)
A skin = the full set of **visual-style tokens** that swap uniformly WITHOUT changing layout/structure. It is **not** a variation — pick ONE skin per product and apply it across whichever compositions you choose. Composition = skeleton, skin = paint; any composition renders coherently in any skin.

> **Skins are an OPEN set — bring your own.** The named example skins (`### Skins / aesthetics`) and the dial space (`cookbooks/registers.md`) exist to show the dials moving, NOT to be picked from a fixed menu. Lookbook's source layer is the **variations** (`* Variations` sheets + `* Studies` drill-downs + composed recipes); the skin applied to them can be any palette/type/dial-set you like — a brand's own, another system's, or one composed from scratch. "Use a skin Lookbook doesn't list" is the normal case, not an exception.

**Skin token dimensions (the complete set — enriched 2026-06-19 per Ammiel):**
- **Color** — bg · surface · ink (text) · muted/faint · accent · status (success/warn/danger) · border
- **Type** — font-family (sans / serif / mono pairing) · scale · weight
- **Radius** — sharp (0) / slightly-rounded / rounded / pill  ← corner roundedness is skin-level
- **Elevation** — flat / hairline-border / soft-shadow
- **Border** — hairline 1px / bold / none
- **Density** — compact / comfortable / spacious (spacing scale)
- **Accent discipline** — how loud, how often (instances per screen)

Each composed-recipe page closes with a "Skins & how to apply them" section. (Pages 1-5 show a lighter color+font row; from #6 on it's a token table with Color/Type/Radius/Elevation/Density rows × 3 example skin columns.) Copy-ready example token blocks live in `### Skins / aesthetics` above — **example starting points, not a closed list** (skins are open; see the note in that section).

**PLANNED — `reskin` / `relayout` command (build after the 20 recipes are banked):** an interview-driven Lookbook command that operationalizes the compose-vs-skin split. Flow: (1) decide/build COMPOSITION first (pick archetype + composition from the recipe catalog, or assemble from families); (2) apply a SKIN (pick/answer-build from the token dimensions above); (3) user can then **re-skin** (swap the token set, layout untouched) OR **re-layout** (swap composition, skin carried over) independently. Asks questions about what you're going for (product type, voice, density, brand color) and resolves to a composition + skin pairing. This is the payoff of the whole phase-2 catalog: recipes = the composition library it draws from, SKINS = the paint library.

---

## Remaining queue
**Phase 2 (composed recipes) — ✅ COMPLETE 20/20 (corrected composition-only model):** ✅1 analytics · ✅2 list-table · ✅3 list-grid · ✅4 detail · ✅5 dashboard-home · ✅6 search · ✅7 reports · ✅8 kanban · ✅9 inbox · ✅10 calendar · ✅11 activity-feed · ✅12 admin · ✅13 settings · ✅14 create/edit · ✅15 checkout-wizard · ✅16 auth/onboarding · ✅17 pricing · ✅18 profile · ✅19 empty-states · ✅20 error-pages. (CD project = 41 pages.)
**Phase 3 follow-ups (not started):** (a) CD page triage — KEEP/CUT list across the ~21 phase-1 atom/gallery pages + exploratory voice dashboards vs the 20 recipes + skin sources (Ammiel decides, don't delete unilaterally). (b) Build the `reskin`/`relayout` Lookbook command (interview-driven: compose first → skin second → re-skin/re-layout independently). · 17 pricing · 18 profile · 19 empty-states · 20 error-pages (5 variations each).
_Phase 1 (atoms/molecules) = saturated: 22 CD pages, 8 aesthetics + 7 voices, every component family._

_Campaign log: started 2026-06-19. Phase 1 banked 21 atom/molecule pages. Phase 2 (worked composed recipes) started 2026-06-19 — Round 1 (analytics) done → 22 CD pages. Bounce CD → harvest → catalog, until CD limit or 20×5 coverage. Flush state to memory; survive compaction._
