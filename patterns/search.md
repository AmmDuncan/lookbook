# Pattern: Search & Results

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-S-<nn>`.

## Surface intent
A surface where the user has an **information goal in their head and is hunting for the matching records** — they type a query, narrow with filters, scan a result list, and click through. Unlike a dashboard (monitor known metrics) or a detail page (understand one known record), the user arrives **not knowing which record exists** — the page's whole job is to close the gap between intent and result. It answers, in order: **did the system understand me** (echo the query + a count), **how do I narrow this** (facets + sort), **what matched** (the result list), and — the make-or-break state — **what do I do when nothing matched** (recovery, not a dead end). It is read-fast, acted-on-immediately, and judged almost entirely on how gracefully it handles the *partial* and *zero* cases, not the happy path.

## Density band
**Compact-to-medium (F26).** The result list itself is **compact** (rows 36–48px, 12–16px inner padding — F27) because it's scanned like a table; the search header and facet rail are **medium** (the input is a 44–48px touch target, facet groups get 16–24px breathing room). Texture: none on the populated list (F36 compact); the **no-results empty state** is the one zone that earns a single atmospheric/illustrative device (F36 — empty states are sparse surfaces).

## Calibrations

**P-S-01. The search input is the page's anchor: ≥44px tall (F52), a leading magnifier icon, a trailing clear (✕) once non-empty, placeholder naming the scope ("Search products or brands", not "Search").** On a dedicated results page it spans the content width or sits in a prominent top band; in an app it's the top-bar field or a command-palette modal.
Refines: F52, F70. *Why:* the input is where intent enters; a thin, scope-less box reads as an afterthought. Evidence: Faire ("Search products or brands", full-width, magnifier + ✕), Amplitude command-palette (centered modal field), Databricks/Jira top-bar fields (`evidence/search.md`). A bare "Search" placeholder fails F70's scope test — name *what* is searched.

**P-S-02. Typeahead and recent/suggested live in the input's dropdown, not a separate page — and the dropdown can itself carry quick facets.** Show recent queries / suggested searches when the field is focused-empty; show ranked typeahead matches (grouped by type) as the user types.
New. *Why:* Jira's search dropdown shows work-item matches **plus** "Filter by project / assignee / reporter / status" *inside the dropdown* — the user refines before ever landing on a results page (`evidence/search.md`). Recent/suggested on focus-empty (suggested-search chips) removes the cold-start blank. The dropdown is the fastest path; the full results page is the fallback for "none of these, search everything."

**P-S-03. The results header always states the count and echoes the query: "228 results for 'simple'" (or a bare count like "22,184 participating brands" when there's no text query).** Count first, query quoted. A timing/freshness aside ("found in 14ms", "updated 2s ago") is optional polish.
Refines: F63 (scope/units generalized to results), F72. *Why:* the count + echo is the system saying "I understood you and here's how much matched" — the first thing the eye needs. Evidence: Databricks "Search results for 'simple'", Amplitude "3,639 results found in 14ms", Faire "22,184 participating brands" (`evidence/search.md`). A result list with **no count and no query echo** is the single most common search tell — the user can't tell if the list is *the* results or just everything (Forbidden moves).

**P-S-04. Active filters render as removable chips on one line below the header, with a "Clear all" when ≥2 are active.** Each chip names the facet value ("American brands", "Under GH₵ 50", "Updated this week") and carries an inline ✕. The chip row is the user's model of "why am I seeing this subset."
New. *Why:* facets buried in a rail are invisible state; the chip row makes the active narrowing legible and one-tap-reversible. Evidence: Faire "2 filters applied · Clear all" + value chips; Databricks Type/Owner/Location chips (`evidence/search.md`). Without it, a user who narrowed three facets and got two results thinks the catalog is empty (feeds the no-results recovery, P-S-09).

**P-S-05. Sort control is a single select, top-right of the results region, defaulting to "Relevance" for a text query (or "Featured"/"Recommended" for a browse).** Never a row of sort buttons; never sort *and* the primary facet competing for the same corner.
Refines: F16. *Why:* sort is one decision with one default; a select holds the option set without spending chrome. Evidence: Faire "Sort by Featured", Amplitude/Mixpanel "Relevance ▾" top-right of the list (`evidence/search.md`). Relevance is the honest default the moment there's a query — alphabetical-by-default on a query result is a tell (the system ignored the match score).

**P-S-06. Facet placement is contextual — this is the dynamic-generation branch. Pick by facet count and result-content type:**
- **Left rail (~220–280px), checkboxes + nested per-facet search.** *Use when* there are **many facets with many values each** and filtering is the primary interaction (marketplace, catalog, doc search). The classic e-commerce filter rail. Faire: Holidays / Brand values / Location, with a search-within-Location box and "Show more".
- **Right rail (~260–320px), grouped facet blocks.** *Use when* facets are **secondary refinement** over a text query in an app context — the results lead, the rail supports. Amplitude (Type / Content / Last edited / Space / Editor / Project), Databricks (category list), Jira/Mixpanel. A right rail reads as "narrow if you want"; a left rail reads as "filtering is the job."
- **Top filter bar (chips or 2–5 dropdowns).** *Use when* there are **few facets (≤5)** and the result area should stay wide. Databricks Type/Owner/Location chips; 7shifts Location/Category/Posted-by/Date-range; Faire's top "Values / Minimum / Location" pills.
- **Filters-in-a-popover/drawer (mobile, or facet-heavy + narrow viewport).** A "Filters (3)" button opening a sheet; the count badge shows active facets. **Always the mobile form** of the left/right rail (F50 — the rail reflows into a drawer, never vanishes).
Refines: P-DT-03 / P-F two-context split (same dynamic-branch shape). *Why:* the placement tracks how central filtering is and how many facets exist — not a fixed template. Evidence: left (Faire), right (Amplitude/Databricks/Jira/Mixpanel), top (Databricks/7shifts), all real (`evidence/search.md`). **A facet rail with one or two facets is the failure mode** — that's a top bar wearing a rail's clothes (Forbidden moves).

**P-S-07. Result-item design is contextual by content type — list row vs card vs media tile:**
- **List row (compact, 36–48px).** Icon/type-glyph + title + a meta line (path · owner · "updated 2 days ago" · type). *Use for* text/document/record search where the **title carries the match** and the user scans titles fast. Highlight the matched substring in the title (bold or accent-tint). Amplitude, Databricks, Gemini, Jira.
- **Media card grid (3–5 up).** Image/thumbnail + title + 1–2 facts (rating, price, min) + a quick action (♥ save, "+ Add to list"). *Use for* visual/marketplace results where **the image is the decision** (Faire products, Relevance AI agents). Uniform aspect ratio per role (F47); image-first.
- **Rich row (media + meta + snippet).** A thumbnail-left row with title + a snippet/description excerpt. *Use for* mixed content where a text preview aids the click decision (search-engine-style, Firecrawl's web/news results).
Refines: F47, F72. *Why:* the item shape follows what the user decides on — a title (row), an image (card), or a snippet (rich row). Evidence in `evidence/search.md`. **A result row that doesn't echo the query** — no matched-term highlight, generic title — makes the list look like an unfiltered dump (Forbidden moves).

**P-S-08. Pagination vs infinite scroll is contextual: infinite/load-more for *browse-and-discover* (media grids, feeds); explicit pagination (or "load more") for *find-a-specific-thing* lists where position matters and the user may want to go back.** Either way, keep the result **count** (P-S-03) and the active **filters** (P-S-04) pinned/visible as the list grows.
New. *Why:* infinite scroll suits visual browsing (Faire's endless product grid) but destroys "I was on result 40" for record-finding, and hides the footer. A doc/record search paginates or "load-more"s so the user keeps their place. Never silently truncate at 10 with no affordance to see more (Firecrawl's "only show 10 results" is honest *because it says so*).

**P-S-09. The state set is the deliverable — ship all of it, and the no-results state is the one that proves the design (F33):**
- **First-run / empty-query.** Field focused, no query yet: show **recent searches + suggested/popular queries** (chips or a short list), not a blank void. The "Try these popular searches" chip pattern; Jira's "recently viewed". This is *distinct* from no-results — the user hasn't asked yet.
- **Loading.** A **skeleton matching the result-item shape** (rows of bars for a list; gray image-blocks + text bars for a grid) — not a centered spinner. The skeleton tells the user the layout that's coming so the page doesn't reflow on arrival.
- **No-results (the critical case).** Distinct from first-run. **Echo the query** ("No results for 'audio'"), say it plainly, and give a **recovery path** (F69): *broaden* — "Try fewer or different words"; *clear filters* — when facets are active, a one-tap "Clear all filters" (the most common cause of zero results is over-narrowing, P-S-04); *suggest* — popular/related queries as chips. One illustrative/atmospheric device is allowed here (F36 empty-state). Evidence: Dovetail "No results found. Try adjusting your search filters to include more results" + Learn more; a screen-library tool's "No screens found · Try these popular searches" + chips; Twist "No matches for '' · Try filtering to refine your search". **The dead end to forbid:** Digg's "Hmm, your search didn't turn up anything" — echoes the query but offers *no* action (no broaden, no clear, no suggestion) = a polite cul-de-sac.
- **Error.** Distinct from no-results: "Couldn't run your search. Try again." with a **retry** action (F33, F69) — the search *failed*, vs ran-and-matched-nothing. Never show no-results copy for a fetch error (the user will keep editing a query that was never run).
Refines: F33, F69. *Why:* search is judged on its empty and partial cases; a beautiful populated list with a blank or dead-end zero state is the canonical AP19 on this surface. The four states are genuinely different messages — conflating them strands the user.

**P-S-10. No-results and first-run distinguish themselves; never reuse one for the other.** First-run = "you haven't searched yet, here's where to start" (warm, suggestive — F73). No-results = "your *specific* query matched nothing, here's how to recover" (factual + actionable — F69, F73). The query echo is the tell: first-run has none; no-results quotes it back.
New. *Why:* a first-run prompt shown after a failed search reads as the system ignoring what the user typed; a "no results for X" shown before they've typed is nonsense. Evidence: the studied empties clearly separate the two; the strongest of them put *suggested queries* in both but change the framing copy.

**P-S-11. The matched term is visible in the result.** Bold or accent-tint the query substring in result titles/snippets; keep the user's exact query in the header echo (P-S-03). For faceted-only browse (no text query), the active facet chips (P-S-04) play this role.
New. *Why:* highlighting closes the "did it actually match?" loop and lets the user judge relevance at a glance. A list with zero visible connection to what was typed reads as unfiltered data (the search-surface face of "tells instead of shows").

## Composition defaults
- **App shell**: the same left-sidebar shell as dashboard/detail when search lives *inside* a product (Amplitude, Databricks, Mixpanel, Jira); a dedicated **full-width results page** with a prominent top search band for a public/marketplace search (Faire). Command-palette search (Amplitude modal) is a third real form for in-app global search.
- **Header band**: search input → results header (`count + "results for X"`) → active-filter chip row → sort select (top-right of the results region). This band stays visible (sticky) as the list scrolls so the count and filters don't scroll away (P-S-08).
- **Body**: the contextual facet placement (P-S-06) + the contextual result-item shape (P-S-07). Left/right rail ~220–320px; result list/grid fills the rest. Grids span the 12-col grid at 3, 4, or 5 columns (media tiles), collapsing to 2 then 1 on narrow widths.
- **Facet rail blocks**: a short heading + checkbox/range/select group, gap-separated (F12, F13 — not boxed). Long value lists get a "Show more" and a search-within-facet box (Faire).
- **States**: skeleton mirrors the item shape; first-run shows recents+suggestions; no-results echoes query + recovery; error offers retry — each its own zone (P-S-09).
- **Mobile** (F50): single column — input full-width, sort + a "Filters (n)" button on one row, the facet rail becomes a drawer/sheet, results stack to one column. Nothing in the rail is dropped; the active-filter chips stay visible above the list.

## Forbidden moves
- **A result list with no count and no query echo** — the user can't tell results from the full catalog (P-S-03).
- **A facet rail holding one or two facets** — that's a top bar cosplaying as a rail; collapse it (P-S-06).
- **Results that don't echo the query** — no matched-term highlight, no header echo; reads as an unfiltered dump (P-S-11).
- **A dead-end no-results state** — "Nothing found" with no broaden / no clear-filters / no suggestion (Digg's polite cul-de-sac; P-S-09).
- **Reusing the first-run prompt as the no-results state** (or vice versa) — they're different messages (P-S-10).
- **Showing no-results copy for a fetch error** — the search never ran; the user edits a query that wasn't the problem (P-S-09).
- **Alphabetical-by-default sort on a text-query result** — ignores the relevance score the query produced (P-S-05).
- **Two sort/filter controls fighting for the same corner**, or a row of sort *buttons* instead of one select (P-S-05).
- **A centered spinner instead of a shape-matching skeleton** — the page reflows on arrival (P-S-09).
- **Infinite scroll on a find-a-specific-record list** where position and back-navigation matter (P-S-08).
- **Active filters with no removable chips and no "Clear all"** — invisible state; the user can't tell why the subset is small (P-S-04).
- **Decorative texture on the populated result list** (F36 compact band); texture belongs only in the empty/no-results zone.

## Sources
NN/g (search & faceted navigation, no-results recovery) · Hearst/Tunkelang (*Search User Interfaces*, faceted search) · Refactoring UI (Wathan & Schoger) · Lookbook gallery → Organisms (filter bar, data list, command palette) + Atoms (Combobox, Field, Chip) · DVLA server-side-search composables + `<select>` ban (P-F-10 / CLAUDE.md rule 32 — paginated option sources do debounced server search, never a client-side `page_size:100` dump; the search input on this surface follows the same rule) · **Reference study of real public products (Faire, Amplitude, Databricks, Jira, Mixpanel, Relevance AI, Firecrawl, Dovetail, Twist, Digg, 7shifts, Gemini) → `evidence/search.md`** (count+echo header, active-filter chips, contextual facet placement, contextual item shape, four-state set with the distinct no-results recovery).
