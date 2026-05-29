# Evidence — Detail / Record / Profile (P-DT calibration)

Method: studied 11 real web detail/record/profile pages on Mobbin across five domains (CRM contact, auth user, product analytics user, e-commerce order, issue/ticket), read by **(a) craft to learn** and **(b) how the rules are applied** — where reality confirms a rule, calibrates a number, or breaks a rule (→ rule is wrong/too strict/needs scope). Reading reality is what catches the over-strict guess; the strongest calibrations below are rules that real screens *bent*.

Screens: Customer.io (Person/Activity), WorkOS (User profile), HubSpot (Contact — Overview + Activities), Amplitude (User profile/Activity), Apollo (Contact/Company insights), Salesforce (Contact), folk (Person/Notes), Shopify (Order — 3 views: timeline, summary, full record), Linear (Issue), Intercom (Help Desk ticket), Gorgias (ticket). 2026-05-29.

## Rule-application reading

| Rule | What real detail pages do | Verdict |
|---|---|---|
| Identity header (P-DT-01) | avatar/icon + title + **status pill immediately beside title** (Shopify `#1001` + "Payment pending"; WorkOS "Sam Lee" + id chip; HubSpot/Salesforce name + actions); breadcrumb above; primary action top-right | **CALIBRATE → P-DT-01**: status sits *next to* the title as one identity unit, not as a far-corner chip. Universal across all 5 domains. |
| Column count (P-DT-03) | **3-col** CRM hubs: HubSpot (left fields / center activity / right related), Salesforce (same), Apollo (left contact / center insights). **2-col**: Shopify (content + right summary rail), Linear & Intercom (content + right properties). **~single**: sparse Linear issue | **CALIBRATE → P-DT-03 (contextual)**: column count tracks information mass, not a template. This variation IS the dynamic-generation branch — same shape as the form entry-vs-settings split. |
| Right rail width (P-DT-04) | Shopify summary/shipping/fraud rail, Linear/Intercom properties rail, HubSpot related rail — all ~280–360px, multiple titled blocks, gap-separated | **CALIBRATE → P-DT-04**: ~280–360px, 2–4 titled blocks; the single most-reused detail device. Reflows below on mobile. |
| Key-facts strip (P-DT-02) | WorkOS & Customer.io header: STATUS / LAST VISITED / SIGNED UP as label-over-value; Shopify Subtotal/Discount/Shipping/Total **right-aligned with decimals** | **CONFIRM F24 + CALIBRATE → P-DT-02**: facts as a scannable label/value strip, numerics right-aligned/tabular. Prose facts would be unreadable here. |
| Tabs vs stacked (P-DT-05) | Tabs: Customer.io (**8 tabs**), Amplitude (6), WorkOS (3), HubSpot (2). Stacked: Linear, Shopify, Salesforce, Gorgias | **CALIBRATE → P-DT-05 (contextual on volume)**: tabs when sub-content is voluminous & categorically distinct; stack when ≤3 short sections. **Customer.io's 8 tabs = the cautionary over-tabbing case** → fed the forbidden move "6+ tab strip when 3 sections would do." |
| Related records (P-DT-06) | Salesforce: "Opportunities (2)", "Cases (1)", "Files (1)" cards w/ View All; HubSpot: "Companies (1)", "Deals (1)", "**Tickets (0)**", "Payments (0) — Set up payments" | **CALIBRATE → P-DT-06**: linked-entity blocks carry a **count in the heading** + add/view-all; **`(0)` blocks still render with a populated empty state** (HubSpot) — confirms F33 reaches sub-sections. |
| Activity timeline (P-DT-07) | Vertical connector + dot/icon per event + actor/action/relative-time, date-grouped: HubSpot, Salesforce, Shopify (dotted line), folk, Linear, Customer.io | **CONFIRM + CALIBRATE → P-DT-07**: canonical history device across every domain. None used a raw table → fed the forbidden move. |
| Action hierarchy (P-DT-08) | Shopify: one primary `Collect payment` **near the summary it acts on**; `Restock/Return/Delete` tucked in **"More actions"**. Salesforce: `New Opportunity` + ghost `Edit`. Linear: inline icon affordances | **CONFIRM F16 + CALIBRATE → P-DT-08**: one primary near its section; destructive isolated in an overflow menu (mirrors P-F destructive separation). No screen showed an equal-weight button row → that's the action-soup tell to forbid. |
| Inline edit (P-DT-09) | HubSpot/Salesforce/folk: **per-field pencil / click-to-edit** in place; full "Edit" reserved for multi-field | **CALIBRATE → P-DT-09**: single-field edits happen in place; bouncing to a form page for one field is friction. Detail page = read-mostly with *targeted* edits. |
| Data states (P-DT-10 / F33) | WorkOS/Amplitude: empty event-detail panel; HubSpot `(0)` related blocks; async activity loads separately from the record | **CALIBRATE → P-DT-10**: a detail page is **many async regions**, each needing its own loading/empty/error — not one page-level state. |
| F26/F27 density | medium rows (36–44px), generous section gaps, hairline separators | CONFIRM medium band. Denser than marketing, calmer than the dashboard's 32–36px rows. |
| F21 borders / F13 hierarchy | rail blocks separated by **gap + headings**, hairlines for table rows only | CONFIRM (gap over boxes; borders only where a list genuinely needs row separation). |
| F36 texture | **zero decorative texture** on any of the 11 screens | CONFIRM medium-band restraint — product surface, no grain/gradient. |
| F50 mobile | (desktop captures) rail content is metadata that must stack below, not vanish | **APPLY → P-DT-04/03**: rail reflows below main content on mobile; nothing dropped. |

## The dynamic-generation lesson
Detail pages vary by **how much the record carries**: a CRM contact (HubSpot, Salesforce) is a hub of linked entities + a heavy activity stream → three columns; an order (Shopify) is a body (line items) + stable summary → two columns; a sparse issue (Linear) is a description + one timeline → near single column. The constant is the *reading order* — identity → facts → related → actions → history; the **column count and tabs-vs-stacked flex to the record's information mass.** A thin record in a three-column shell reads as broken (empty rails); a hub in one column buries its value. Getting this right is the proof the layout was reasoned from the content, not stamped from a template.

## Over-strict / wrong-rule catches (the strongest calibrations)
- **Customer.io's 8-tab strip** showed that "tabs are fine" needs a ceiling — tabs hiding a thin record is a tell. Fed P-DT-05's "tabs only when voluminous AND categorically distinct" + the forbidden 6+-tab move. (Mirrors the dashboard study catching "no tabs" as *too strict* — here the catch is the opposite: tabs need a *cap*.)
- **HubSpot `Tickets (0)` / `Payments (0)` blocks** proved related-record empties are *designed populated states with an add action*, not gaps to hide — extended F33 into sub-sections (P-DT-10).
- **Shopify's `Collect payment` next to the summary** (not in the header) showed the primary action belongs **near the thing it acts on**, not reflexively top-right — softened a naive "primary always top-right" into P-DT-08's contextual placement.

## Calibrations applied to patterns/detail.md
1. Identity header → **status pill adjacent to the title**, breadcrumb above, primary top-right (P-DT-01).
2. Layout → **contextual column count** (2-col content+rail default / 3-col CRM hub / single thin+mobile) — the dynamic branch (P-DT-03).
3. Summary/properties rail → **280–360px, 2–4 titled blocks, reflows below on mobile** (P-DT-04).
4. Sub-content → **tabs only when voluminous & distinct; stack ≤3 sections; cap tabs** (P-DT-05).
5. Related records → **count in heading + add/view-all; `(0)` renders a populated empty** (P-DT-06).
6. History → **vertical date-grouped timeline, never a raw table** (P-DT-07).
7. Actions → **one primary near its section; destructive in overflow menu** (P-DT-08).
8. Editing → **inline single-field edit, not a jump to a form page** (P-DT-09).
9. States → **per-region loading/empty/error, skeletons mirror layout** (P-DT-10).
