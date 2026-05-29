# Pattern: CRUD list / index page

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-L-<nn>`.

## Surface intent
The workhorse admin surface: a **collection of records** the user scans, filters, and acts on — orders, users, vehicles, articles, tasks, invoices. The user arrives to *find* one record (then clicks into its detail page — P-DT), *triage* many (filter, sort, bulk-act), or *create* a new one. The page answers, in order: **what collection is this and how big** (title + count), **how do I narrow it** (quick-filters + search + filters), **what's in it** (the records, scannable), **what can I do to one / to many** (row affordances + selection → bulk actions), and **how do I add one** (the single primary). Unlike a dashboard (monitor aggregates) it operates on individual records; unlike a detail page (one record deep) it is breadth-first and scan-optimized. It is the hub the detail pages link back to.

## Density band
**Compact (F26) — it inherits the dashboard band.** Table row height 32–40px (F27); inner cell padding 8–12px vertical / 12–16px horizontal; toolbar height ~44–52px. This is a scan-first product surface, so AP20 does **not** bite — restraint is correct (familiarity beats novelty). Card-grid variant relaxes one notch toward medium (card padding 16–20px) since cards carry a visual. No decorative texture (F36 compact band, enforced strictly).

## Calibrations

**P-L-01. The toolbar is ONE row: search anchored left, filter/sort/column-controls grouped center-right, exactly ONE primary "New X" action far right.** Search field ~240–320px or an expand-on-click icon. The primary is the only filled button in the resting toolbar; it names the verb + entity ("Create order", "Invite users", "Add vehicle" — F68).
New. *Why:* every studied list runs this anatomy (HubSpot "Create list", Shopify "Create order", Asana "Invite users", Programa "Create New Project"). **The failure mode is action-soup:** Salesforce's "All Articles" toolbar crams New · Publish · Assign · Archive · Delete as five equal buttons — but those last four act on *selected rows* and belong in the bulk-action bar (P-L-06), not the resting toolbar. Only "New" earns toolbar residency. (List-page face of F16 / AP18.) Evidence: `evidence/list.md`.

**P-L-02. A quick-filter / saved-view tab strip sits BETWEEN the page title and the toolbar — when the collection has a small set of canonical slices.** 2–6 tabs (All · Unfulfilled · Unpaid · Closed); the active tab is the only emphasized one; a count may ride the tab ("All (128)"). These slice the *same* collection — not sub-navigation.
New. *Why:* Shopify (All/Unfulfilled/Unpaid/Open/Closed), HubSpot (All lists/Unused/Recently deleted), Time2book, Salesforce all put the coarsest filter here as tabs, above the finer search/filter row. It's the fastest "show me the subset I care about." Omit it when the collection has no obvious canonical slices — don't invent tabs to fill the band.

**P-L-03. Table vs card grid is contextual — this is the dynamic-generation branch. Pick by whether the record's identity is VISUAL:**
- **Table (default for data records).** Rows of structured facts: orders, users, articles, transactions, vehicles. The eye scans down aligned columns. Compact rows, hairline separators (HubSpot, Shopify, Salesforce, Mixpanel).
- **Card grid** when the record's identity is **visual** — a design file, a project with a cover image, a media asset, a template (Programa interior projects, Figma file thumbnails, Dovetail templates). 3–4 cards per row desktop, ≥240px each; cover/thumbnail (fixed F47 ratio) + title + 1–2 meta + a ⋯; the "New" affordance can be the first cell or a "+ Add" tile.
New. *Why:* a thumbnail-bearing record reads faster as a card (the image *is* the identity); a data row reads faster as an aligned table. Forcing media into a table wastes the thumbnail; forcing data rows into cards destroys column-scanning. Evidence: tables for 8/14 data lists, cards for the 4 visual ones (`evidence/list.md`).

**P-L-04. Columns carry hierarchy — they are NOT equal weight. One identity column (the linked, bold primary, often with avatar/icon + a secondary line beneath), 2–4 fact columns that *earn* their place, status as a pill, numerics right-aligned (F24, tabular), and a muted tail (timestamps, secondary meta).** A column earns its place only if the user filters/sorts/scans by it; the rest live on the detail page.
New. *Why:* Shopify's Order column is a bold link + date beneath while Channel/Delivery stay muted — hierarchy in a table comes from the *columns' weights*, not from showing every field. The flat all-equal-columns grid is the table face of AP8/AP20 (and Mixpanel's "undefined"-everywhere grid shows what padding the table with non-earning columns produces). Numerics right-align on the decimal (F24); status is a tinted pill that passes F55 against its own tint.

**P-L-05. Row affordances are contextual and restrained: the identity cell LINKS to the detail page (whole-row click is the implicit default); at most ONE explicit secondary action per row; everything else collapses into a per-row ⋯ overflow menu.**
New. *Why:* Shopify/Salesforce/HubSpot link the first cell; User Interviews shows one explicit "View" + a ⋯ (Rename/Edit/Duplicate/Delete); Asana/Time2book/Squarespace use a ⋯ alone. **The forbidden move is a row of inline action buttons per row** (action-soup × N rows) — it triples the table's visual noise and defeats scanning. Destructive row actions (Delete) live *inside* the ⋯ menu, never as a naked per-row button (mirrors P-DT-08). The ⋯ is a ≥44px touch target (F52).

**P-L-06. Selection reveals a bulk-action bar — actions that operate on a SET appear ONLY when rows are selected, never in the resting toolbar.** Header checkbox = select-all-on-page (+ an optional "select all N across pages"); per-row checkbox. On selection, a bar/pill (floating bottom or replacing the toolbar) shows: **the selection count**, the verbs that act on the set, and a clear-selection ✕.
New. *Why:* Asana ("2 selected | Manage invites | Change status | ✕") and Shopify ("1 selected" + Create labels/Mark fulfilled/Capture payments + ⋯) both reveal set-verbs only on selection — this is exactly where Salesforce's five toolbar buttons (P-L-01) *should* have lived. Surfacing bulk verbs only on selection keeps the resting toolbar to one primary and tells the user precisely what their selection enables. One primary action in the bulk bar too (F16); destructive bulk actions (Delete N) confirm before running (F73 calm copy).

**P-L-07. Filter placement is contextual: 1–3 common filters as inline dropdown chips; a richer filter builder behind a "Filter" popover with Apply/Clear; a left filter RAIL only when the surface is genuinely filter-heavy (faceted catalog/search) — NOT the everyday admin list.**
New. *Why:* HubSpot puts "All creators ▾ / All types ▾ / All objects ▾" as inline chips; Relevance AI and Mixpanel hide a filter *builder* ("Where status / Is not / Completed", Apply/Clear) behind a "+ Filter" popover. **None of the 14 studied admin lists used a left filter rail** — that device is borrowed from e-commerce faceted search and is wrong for a 2–4-filter admin index (a rail for two filters is the forbidden move). Server-paginated filter options use a searchable Combobox, never a `<select>` dump (P-F-10, CLAUDE.md rule 32, F18).

**P-L-08. Pagination vs infinite-scroll vs load-more is contextual: explicit pagination (page-size + prev/next + a "Showing X–Y of N" count) for navigable record sets; infinite-scroll/virtualization for continuous streams.**
New. *Why:* Squarespace ("10 per page ▾" + ‹›), HubSpot ("25 per page" + Prev 1 Next), User Interviews ("Showing 1–4 of 4") paginate because the *count is load-bearing* and the user navigates *to a page* (jump to order #, "how many total?"). Relevance AI's task queue and monday's spreadsheet just scroll because the user scans a *stream*. Pick by whether the user navigates to a page or scans a feed. Load-more (button) is the middle ground when you want stream-scanning but a controllable fetch. The total count belongs near the title regardless (P-L-09).

**P-L-09. The FULL state set, and the two empties are different (F33). Loading = skeleton rows matching the column layout (not a spinner). First-run empty (no records ever) = a warm onboarding state with the primary "Create your first X" action + one line of why. Filtered-no-match empty = "No records match these filters" + a "Clear filters" affordance — NOT the onboarding state. Error = a scoped, retryable message (F69), not a blank table.** The record count sits near the title.
Refines: F33. *Why:* a list page's empty is the most-skipped state, and conflating the two empties is the common bug — showing "Create your first order" to a user who simply over-filtered is wrong and frustrating. First-run is warm and teaches (F73); filtered-empty is factual and offers the escape (clear filters). Skeleton rows mirror the real columns so the table doesn't reflow on arrival. (Captures rarely show these → the strongest reason to mandate them; `evidence/list.md`.)

**P-L-10. Format every cell — never leak raw machine values, and never spend color as decoration.** Null/empty renders as a muted "—" or a meaningful placeholder, never "undefined"/"null"/a raw timestamp (F72/F73). Color in a cell is reserved for status pills (F19/F55); a non-status categorical value (a type, a gender, a tag) is plain text or a neutral chip — not a colored fill.
Refines: F19, F72. *Why:* Mixpanel's wall of "undefined"/"(not set)" and monday's green/orange gender cells are both real tells — the first leaks the implementation, the second burns status-color on non-status data so real status loses its signal. A list is mostly cells; getting cell formatting right *is* the craft.

## Composition defaults
- **App shell**: the same left-sidebar shell as the dashboard/detail/settings (the list lives *inside* the app and links *into* detail pages), not a bare page.
- **Header band**: breadcrumb (if nested) → page title + record count ("Orders" · "128 orders") → optional quick-filter/saved-view tab strip (P-L-02) → toolbar row (P-L-01). This band is the page's anchor and may stick on long scrolls.
- **Body**: the table or card grid (P-L-03). Table = full-width, hairline rows, sticky header on long scroll, horizontal overflow-scroll if columns exceed width (don't drop columns — F50). Card grid = responsive 3–4-up.
- **Toolbar**: search left (~240–320px), filter/sort/column-visibility/density controls center-right, one primary far right.
- **Selection layer**: header + per-row checkboxes; bulk-action bar appears on selection (P-L-06).
- **Footer**: pagination + count (P-L-08), or nothing if infinite-scroll.
- **Mobile** (F50): the table reflows — either horizontal scroll within the table region (header sticky, nothing dropped) OR each row collapses to a stacked "card" (identity + key facts + a ⋯); the toolbar collapses search into an icon and filters into a single "Filter" sheet; the primary "New X" becomes a sticky FAB or bottom bar. Quick-filter tabs become a scrollable strip. Selection + bulk bar stay (bottom sheet). Nothing reachable on desktop is hidden on mobile.

## Forbidden moves
- **Action soup in the toolbar** — more than one primary, or row-set verbs (Publish/Archive/Delete) living in the resting toolbar instead of the bulk bar (P-L-01; the Salesforce cautionary case).
- **A row of inline action buttons per row** — collapse to whole-row link + at most one explicit action + a ⋯ menu (P-L-05).
- **Every column equal weight** — a flat grid with no identity column, no muted tail, no status pill; nothing leads (P-L-04; AP8/AP20 on this surface).
- **A left filter rail for 2–4 filters** — that's a faceted-search device; use inline chips or a popover (P-L-07).
- **Bulk actions shown when nothing is selected**, or no bulk affordance at all when the workflow is obviously batch (P-L-06).
- **Only the populated state** — no skeleton rows, OR one generic empty that conflates first-run with filtered-no-match (P-L-09; AP19).
- **Raw "undefined"/"null"/unformatted timestamps in cells**, or color-as-decoration on non-status cells (P-L-10; F72/F19).
- **Forcing visual records into a table** (wasting the thumbnail) **or data records into cards** (destroying column-scanning) (P-L-03).
- **A card/table mixing densities** — compact rows next to a spacious toolbar, or a marketing-whitespace table (F26/F28; this is a compact product surface).
- **Decorative texture** behind the table (F36 compact band).
- **Dropping columns on mobile** instead of horizontal-scrolling or stacking the row (breaks F50).

## Sources
NN/g (list/index & table patterns) · Tufte / Few (tabular density, data-ink) · Refactoring UI (Wathan & Schoger — table hierarchy, muted tails) · Lookbook gallery → Organisms (data table, page header, filter bar, toolbar) + Recipes (List/Index) · DVLA driver-/vehicle-services lists, transaction-review tables, server-search comboboxes, overflow-scroll-within-region, Call-Over teller report (one-row-per-record + footer sums) — battle-tested · inherits the dashboard compact band (P-D) and links into the detail pattern (P-DT) · **Reference study of real public products (HubSpot, Salesforce, Shopify, Squarespace, Asana, Mixpanel, User Interviews, Relevance AI, monday.com, Time2book, Programa, Dovetail, Figma, Braintrust) → `evidence/list.md`** (one-row toolbar, quick-filter tabs, table-vs-card contextual, column hierarchy, row ⋯ menu, selection→bulk-bar, inline-chips-vs-popover, paginate-vs-scroll, two-empties, format-cells/no-decoration-color).
