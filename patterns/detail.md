# Pattern: Detail / Record / Profile

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-DT-<nn>`.

## Surface intent
A page to **understand and act on one record** — a person, an order, an issue, a vehicle, an account. The user arrives knowing *which* record (they clicked it from a list); the page's job is to answer, in order: **who/what is this** (identity), **what are its facts** (key-value data), **what's related to it** (linked entities, sub-records), **what can I do to it** (actions), and **what has happened to it** (history). It is the most common product surface and the hub the rest of the app links into. Unlike a dashboard (monitor many things fast) or a form (give the system data), the detail page is *read-mostly with targeted edits* — the user scans to comprehend, then acts on one or two things.

## Density band
**Medium (F26).** Denser than marketing, calmer than a dashboard. Key-facts rows 36–44px; section gap 24–32px; rail/card inner padding 16–24px (F27). The page holds a lot of information but is read by a human deciding *one thing*, not scanned for anomalies — so it gets more breathing room than a data table and far less than a landing page. Texture: atmospheric only, at most one, and usually none (F36 medium band).

## Calibrations

**P-DT-01. Identity header: avatar/icon (40–64px) + title + status pill(s) on one line, key meta beneath or inline, breadcrumb above, primary action top-right.** Title 24–32px weight 600 (F4). The status pill sits immediately beside the title, not in a far corner. When the record carries genuinely *orthogonal* states (e.g. payment vs fulfilment vs lifecycle), a small row of **2–3 status pills** beside the title is correct — still adjacent, still not action-soup (live-UI calibration: Shopify leads with `Paid · Fulfilled · Archived`).
Refines: F13, F4. *Why:* the record's identity must resolve in one glance — name, what state it's in, how to get back. Evidence: every reference screen leads with avatar/icon + title + adjacent status (Shopify `#1001` + "Payment pending" pill; WorkOS "Sam Lee" + id chip; Salesforce contact name + actions) — the status *next to* the title, not floating right (`evidence/detail.md`).

**P-DT-02. Key meta is a label-over-value (or label-left-value) strip of 3–6 facts, not prose.** Label 12–13px uppercase-tracked or muted (F7), value 14–16px. Mutually scannable; the eye reads down the values.
Refines: F13, F24. *Why:* "Status / Last visited / Signed up" as a meta strip (WorkOS, Customer.io) reads in a glance; the same facts in a sentence don't. Numeric/currency/date values right-align or use tabular-nums (F24) when they sit in a column.

**P-DT-03. Layout is contextual — this is the dynamic-generation branch. Pick by how much the record carries (and where identity sits depends on the column count — header band in 2-col, left-rail head in 3-col):**
- **Two-column, content + right rail (default).** Main column = the record's primary content (description, line items, the thing itself); right rail (~280–360px) = properties / summary / quick facts that stay visible. Right rail may be sticky. *Use when* the record has a clear "body" plus stable metadata (orders → items + summary rail; issues → description + properties rail; Shopify, Linear, Intercom).
- **Three-column (CRM-rich records).** The canonical arrangement is a **left identity rail** (avatar/title/core fields head the LEFT column, *not* a full-width header band), center = activity/notes, right rail = related records (deals, tickets, companies). *Use when* the record is a hub with many linked entities and a heavy activity stream (HubSpot, Salesforce, Attio, Apollo — live-UI calibration: 3-col CRM hubs head the left rail with identity).
- **Single-column stacked.** No rail; identity header, then stacked sections. *Use when* the record is thin (few facts, one timeline) or the viewport is narrow — and on mobile **always** (F50). Linear collapses to near-single-column when the issue is small.
Refines: P-F two-context split (same dynamic-branch shape). *Why:* the column count tracks the record's information mass, not a fixed template. A thin record in a three-column shell reads as empty; a CRM hub in one column buries the related data. Evidence: 3-col for HubSpot/Salesforce hubs, 2-col for Shopify/Linear, single for a sparse Linear issue (`evidence/detail.md`).

**P-DT-04. The summary/properties rail is ~280–360px, sits right (LTR), groups facts into 2–4 titled blocks, and reflows BELOW the main content on mobile — never hidden (F50).** Each block: a short heading + a key-value list, separated by gap not borders (F12).
New. *Why:* a fixed-width rail of stable metadata is the most reused detail-page device (Shopify summary/shipping/fraud blocks; Linear/Intercom properties; HubSpot related-records). On mobile it stacks under the body; its content is never dropped (F50). 360px is the ceiling before it competes with the main column for the eye.

**P-DT-05. Sub-content is tabs OR stacked sections — contextual on volume and category-distinctness:**
- **Stacked sections** when there are **≤3** sub-areas and each is short (a description + a key-facts block + one timeline). Stacking keeps everything scannable in one scroll — no click to discover.
- **Tabs** when sub-content is **voluminous AND categorically distinct** (Overview · Activity · Sessions · Devices · Files) and showing it all at once would bury the lead. 3–6 tabs.
New. *Why:* tabs hide content behind a click — justified only when there's too much to stack honestly. WorkOS (Details/Sessions/Events) and HubSpot (Overview/Activities) use a tight tab set; a sparse Linear issue stacks. Forbidden: an 8-tab strip (Customer.io) where 3 grouped sections would do — that's tab-soup hiding a thin record (see Forbidden moves).

**P-DT-06. Related records / linked entities are compact list blocks (title + 1–2 meta lines + count in the heading), each with its own "Add" / "View all" affordance.** "Opportunities (2)", "Deals (1)", "Tickets (0)". Empty related-blocks still render with a one-line empty state + an add action (F33).
New. *Why:* the detail page is a hub; the linked entities ARE the value (Salesforce Opportunities/Cases/Files cards; HubSpot Companies/Deals/Tickets). The count in the heading lets the user assess the record before expanding. A `(0)` block with "Set up payments" (HubSpot) is a populated empty state, not a gap.

**P-DT-07. History is a vertical activity timeline by default: a connector line, one dot/icon per event, actor + action + relative timestamp per row, newest grouped under a date header.** Timestamps relative ("2 days ago") with absolute on hover/aside (F72). Icon encodes event type, not decoration (F44). Two fit-appropriate alternatives are permitted (live-UI calibration): a clean **actor/action/time list** for a short audit log (Harvest), and a **horizontal stepper** for a fixed *linear lifecycle* (order fulfilment / shipment: Placed → Shipped → Delivered, Walmart). What stays forbidden is a **raw data table of events** — a story rendered as a spreadsheet.
New. *Why:* the vertical timeline is the canonical "what happened to this record" device (HubSpot, Salesforce, Shopify, folk, Linear, Customer.io); but a *linear* lifecycle reads better as a stepper and a terse audit trail reads fine as a list — the device tracks the history's *shape*, not a fixed template. Long timelines scroll within their region (overflow-scroll), not the page.

**P-DT-08. Action hierarchy: one primary action (top-right of the header OR adjacent to the section it acts on), secondary actions ghost/text, destructive actions isolated in a "More actions" menu or a separated zone — never an equal-weight header button.**
Refines: F16, P-F-04. *Why:* a header full of equal buttons is action-soup (the detail-page version of AP18). Shopify puts `Collect payment` as the one primary near the summary it affects and tucks `Restock/Return/Delete` into "More actions"; the destructive option is one menu-step away, mirroring P-F's separated destructive section. Two-party records (e.g. "act on the owner vs the customer") still get **one** primary.

**P-DT-09. Editable fields edit in place — not a jump to a separate edit page — for single-field changes.** Two valid in-place affordances (live-UI calibration): a **per-field pencil / click-to-edit** (record/CRM rails — HubSpot/Salesforce/folk), and a **section-level "Edit" toggle** that reveals the section's fields with Save/Cancel (settings-style profiles — Apollo, Dovetail, Acctual). A full "Edit" mode/page is for multi-field restructuring. Inline edits validate on blur (P-F-07) and show field-level errors under the field (P-F-06).
New. *Why:* the detail page is read-mostly with *targeted* edits; both the pencil and the section-edit-reveal change one fact without bouncing to a form page (which is the friction to avoid) — the affordance fits the surface (dense rail → pencil; sectioned profile → section toggle).

**P-DT-10. Every region ships its four data states independently (F33): the record itself (loading skeleton matching the final layout / not-found / error-with-retry / populated) AND each sub-section (a related-records block, the timeline, a tab body each load and empty separately).**
Refines: F33. *Why:* a detail page is many async regions, not one. The record can load while its activity is still fetching and its deals are empty — each needs its own state. Skeletons mirror the real layout (header bar, rail blocks, timeline rows) so the page doesn't reflow on arrival. A 404 for the record is a full-page state; a failed sub-section is a scoped retry within its block.

**P-DT-11. Hierarchy is not flat: identity > primary content > rail/secondary facts. No more than three weight/size levels per region (F14).** The title dominates; section headings are one step down; field labels are muted support. Resist giving every field equal visual weight.
Refines: F13, F14. *Why:* the failure mode is a wall of equal-weight key-value rows where nothing leads (the detail-page face of AP8/AP20). The identity and the one fact that matters most (status, balance due, assignee) must out-rank the long tail of fields.

## Container — page vs overlay (defer to `patterns/containers.md`, P-CN)
A record opened from a list can be its **own page/route** (deep-linkable, refresh-safe — the default for a record the user focuses on, P-CN-05/06) or a **slideover** for a quick peek/edit while the list stays visible, esp. rapid triage down rows (P-CN-03/04). When a peek must also be shareable, use a **routable overlay** — `?item=<id>` on the list route renders the record as a slideover (P-CN-07). Inline single-field edits (P-DT-09) need no container at all.

## Composition defaults
- **App shell**: the same left-sidebar shell as the dashboard/settings (the detail page is reached *from* a list inside the app), not a bare page. Breadcrumb (`People / Sam Lee`) sits at the top of the content area.
- **Header band**: breadcrumb → identity row (avatar + title + status pill + top-right primary/overflow) → key-meta strip → tab bar (if tabbed). This band is the page's anchor; it may stick on long scrolls.
- **Body**: the contextual layout from P-DT-03. Main column ~640–820px content measure; right rail 280–360px. Three-column packs left rail ~280px + fluid center + right rail ~300px.
- **Rail blocks**: 2–4 titled key-value blocks, gap-separated, optionally sticky. Related-records blocks carry counts + add/view-all.
- **Timeline**: vertical, date-grouped, scrolls within its region if long.
- **Mobile** (F50): single column — identity header, then key-meta, then main content, then rail blocks stacked, then timeline. Tabs become a scrollable tab strip or a select; nothing is dropped. Primary action can become a sticky bottom bar.

## Forbidden moves
- **Action soup in the header** — five equal-weight buttons across the top. One primary; the rest go ghost or into "More actions" (P-DT-08).
- **Every field equal weight** — a flat grid of identical key-value rows with no lead fact, no grouping, no hierarchy (P-DT-11; AP8/AP20 on this surface).
- **A 6-or-more-tab strip when 3 stacked sections would do** — tabs hiding a thin record (Customer.io's 8 tabs is the cautionary case; P-DT-05).
- **A right rail that disappears on mobile** instead of reflowing below (breaks F50; P-DT-04).
- **History rendered as a raw data table of events** instead of a timeline / audit list / lifecycle stepper (P-DT-07).
- **Bouncing to a separate edit page for a single-field change** (P-DT-09).
- **Only the populated state** — no skeleton, no not-found, no empty related-blocks, no scoped sub-section error (AP19; P-DT-10).
- **A three-column CRM shell wrapped around a thin record** — empty rails reading as broken (P-DT-03).
- **Status as a far-corner chip divorced from the title** — identity should resolve as one unit (P-DT-01).
- **Decorative texture in the rails or behind the timeline** (F36 medium band; product surface).

## Sources
Refactoring UI (Wathan & Schoger) · NN/g (record/profile page patterns) · Lookbook gallery → Recipes (Detail) + Organisms (page header, data list) · DVLA vehicle-detail / driver-detail / service-detail pages — multi-owner rail, billed-party header, activity deep-link timeline, per-section overflow-scroll (battle-tested) · **Reference study of real public products (Customer.io, WorkOS, HubSpot, Amplitude, Apollo, Salesforce, folk, Shopify, Linear, Intercom, Gorgias) → `evidence/detail.md`** (identity+adjacent-status, contextual column count, summary-rail width, tabs-vs-stacked-on-volume, related-records-with-counts, vertical timeline, inline-edit, primary-near-its-section).
