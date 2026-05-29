# Evidence — Dashboard (P-D calibration)

Method: studied 4 real web analytics dashboards, read by **(a) craft to learn** and **(b) how the rules are applied** — where reality confirms a rule, calibrates a number, or breaks a rule (→ rule is wrong/too strict/needs scope).

Screens: TheyDo (Metrics), Mixpanel, Apollo (Analytics/Goals), Gumroad (Analytics). 2026-05-28.

## Rule-application reading

| Rule | TheyDo | Mixpanel | Apollo | Gumroad | Verdict |
|---|---|---|---|---|---|
| App shell | left sidebar, grouped | left sidebar + right config rail | left sidebar + left filter rail | left sidebar (black) | **CALIBRATE**: left-sidebar shell is the default (4/4); my Mason Console used top-nav — wrong. |
| F17 / P-D-06 accent | accent ~absent; 1 dark primary + status pills | near-mono + 2 data hues | yellow primary + status colors only | **zero accent**, black/white/cream | **CALIBRATE**: real dashboards are near-monochrome; accent in ~1–3 places (often just the primary action), not 5. Strengthen P-D-06. |
| Layout | table-led | chart + table stacked | table-led | section'd tables | **CALIBRATE**: table-led / chart+table is first-class; KPI-tile hero is one option, not the default. |
| Filter placement | top scope bar | right config rail | **left** filter rail | inline scope dropdown | **CALIBRATE**: filter rail can be left (Apollo), not only right. |
| Tabs in dashboard | — | — | **tabs**: Overview/Dashboards/Reports/Goals | — | **RULE TOO STRICT**: P-D "no tabs in a dashboard" is wrong. Tabs to switch report *views/categories* are good; the real tell is cramming unrelated KPIs into one hero. |
| F26/F27 density | 36px rows, 13px type | dense | 36–40px rows | generous rows + hairlines | CONFIRM bands. |
| F24 tabular/right-align | numeric cols aligned | table numerics | progress/actuals aligned | Views/Sales/Conv/Total right-aligned | CONFIRM. |
| F21 borders | hairline row separators | hairlines | hairlines | hairlines | CONFIRM (hairlines over boxes). |
| F13 hierarchy | weight + space | weight + space | weight + space | section headings + space | CONFIRM. |
| F16 one primary | "Import Metrics" dark | "Save" | "Create goal" yellow | — | CONFIRM. |
| F62 legend vs direct-label | — | **legend** chips above (2 series) | — | — | NUANCE: analytic multi-series charts use a legend even at 2 series; my ≤4-direct-label holds but legend is normal for analytics. |

## Craft to copy
- Pinned trial/upgrade card at sidebar bottom (TheyDo, Mixpanel, Apollo) — real SaaS pattern.
- Calm comes from *restraint + generous content margins*, not floating cards in space.
- Status = small colored pills (TheyDo type pills; Apollo Goal met/Off track/On track) + tiny change arrows.
- Gumroad proves a great dashboard can be ~monochrome — craft is spacing + type, not color.

## Calibrations applied to patterns/dashboard.md
1. Composition default → **left-sidebar app shell** (was top-nav).
2. **Table-led / chart+table is first-class**, alongside KPI-hero.
3. Filter rail → **left or right** (was right-only).
4. **Tabs allowed** to switch report views; forbid only unrelated-KPIs-in-one-hero (was blanket "no tabs").
5. P-D-06 → **near-monochrome norm; accent ~1–3 places**.

---

## Run 2 — 2026-05-29 (P-D number + density calibration)

Method: rule-application reading of a fresh, broader sample plus web corroboration of real shipped products' published conventions. Goal this run: pressure-test the **numbers** (KPI count/size/dims, density bands, accent budget, section padding, type scale) — not the composition defaults (settled in Run 1).

Source: reference study of real, public, shipped products. Screens read this run (12 distinct products): Google Workspace Admin (Reporting/Overview), Charma (Admin Console / Analytics), Teachable (Dashboard), Mixpanel (Boards intro + Board small-multiples), Squarespace (Home/performance), 7shifts (Here's-what's-happening + View Logs), Whop (Milestones/MRR dashboard), Fresha (Reports + Home), Outseta (Home + Engagement). Web corroboration on Stripe / Linear / Vercel / Notion published dashboard conventions.

### Rule-application reading — numbers

| Rule | Current | What the screens showed | Verdict |
|---|---|---|---|
| **P-D-04** max 4 KPI tiles (hero), 2/row mobile | 4 max | **Whop = 6 tiles** (3×2 grid: MRR/ARR/Payments-breakdown/Gross-rev/New-users/Users-breakdown), **Fresha Reports = 5 metric blocks** (Sales/Appointments/Occupancy/Returning + more), **7shifts View Logs = 5-metric strip** (Total Sales/Labor/Labor%/Weather/Shift Score), Teachable=4, Outseta=3, Squarespace=4 (2×2). Web corroboration: Stripe/Linear/Vercel "**4–6 KPIs max**". | **CALIBRATE → 4–6** (was hard 4). Cluster sits at 4–6; 4 is a clean target, 6 the ceiling. ≥7 is the real "compact to a list" trigger. |
| **P-D-02** KPI value 28–40px desktop, weight 500–600, lh 1.1 | 28–40px | Whop MRR/ARR/Gross-rev are big bold figures; **Outseta "1 / 2 / 1" run ~48px+**; Fresha "$1,285.00 / 26" large; Squarespace "Direct / 90 / United States" oversized hero values. Cluster 28–44px, some hero figures push 48px+. | **VALIDATE** (floor holds; real heroes sometimes exceed 40px — note "may go larger for a single hero figure" but don't widen the band). |
| **P-D-01** tile pad 16–24px; h 96–128px desktop | 16–24 / 96–128 | Whop/Fresha/Outseta tiles read ~20–24px pad; heights vary with sparkline inclusion (taller when a mini-chart sits in the tile). | **VALIDATE** (taller tiles are chart-bearing, not a violation). |
| **P-D-09** small multiples first-class | — | **Mixpanel Board = textbook 3-up small-multiples** (uniform line charts, shared treatment). Whop pairs breakdown bars beside KPI tiles. | **VALIDATE** (Mixpanel is the canonical corroboration). |
| **P-D-10** one-line scope above every chart | — | Google Workspace "**What's the 30-day unique login count?**", Charma "The total number of activities users in your organization have done", Mixpanel every card has linear/total/last-30-days scope line, Fresha "Last 7 days / Next 7 days". 5/5 of the chart-led screens do this. | **VALIDATE — strongly.** Tighten Check: scope line present and states timeframe/segment. |
| **F26/F27** density: compact, 32–40px rows, 12–16 pad | 32–40 | Fresha breakdown lists ~32px rows; Mixpanel dense; Google Workspace nav 36px. 7shifts/Whop tiles sit in the compact-to-medium seam. | **VALIDATE** bands. |
| **F17 / P-D-06** accent ~1–3, near-mono | ~1–3 | Whop near-mono chrome, single purple chart hue + green/red status only; Mixpanel multi-hue *charts* but mono chrome + 1 purple primary; Outseta 1 yellow primary + status; Squarespace ~mono + 1 green trend. Charts legitimately carry many hues; **chrome stays near-mono**. | **VALIDATE.** Reinforces: data/chart color is exempt from the chrome accent budget (already implied — keep). |
| **F2** modular type scale | one ratio | Values (label ~13px / metric ~28–48px / body ~14–15px) read as a consistent scale per product. | **VALIDATE** (no off-scale noise observed). |
| **F3** body 15–17 desktop | 15–17 | Dashboards skew **13–15px body/label** — Google Workspace, Charma, Mixpanel labels ~13px; Fresha breakdown rows ~13–14px. Dashboards run *below* the general 15–17 floor on dense surfaces. | **VALIDATE-with-note**: dashboards legitimately use 13–14px for dense table/label text (already covered by F26 compact density + F27 12–16px; not a body-paragraph context). No change to F3 — the dense text isn't "body". |
| **F11** section padding 64–128 desktop | 64–128 | Dashboards use **far less** between regions — Whop/Fresha section gaps read ~24–32px, not 64px+. Dashboards are dense; marketing section-padding does not apply. | **CONTEXTUAL NOTE** (already governed by density band; F11 is a marketing/page-region rule, dashboards override via compact density). Flag for pattern: state explicitly that F11's section padding is *not* the dashboard inter-region gap. |
| **F24** tabular/right-align numerics | — | Fresha breakdown amounts right-aligned; Whop breakdown %ages aligned; Mixpanel axis numerics consistent. | **VALIDATE.** |
| Tabs in dashboard | OK (Run 1) | Charma (Members/Billing/Analytics + left sub-nav), Mixpanel (Boards/Reports/Users/Events), 7shifts (Sales-vs-Labor / Who's-working tabs), Outseta (Engagement/Billing). 4/4 reconfirm. | **VALIDATE** (Run-1 loosening holds). |
| Left-sidebar shell | default (Run 1) | **12/12** screens use a left sidebar. | **VALIDATE** (Run-1 calibration holds, now 12/12). |

### Craft to copy (Run 2)
- **Pinned breakdown panel beside the KPI** (Whop: MRR tile next to a Payments-breakdown stacked-bar with Paid/Refunded/Failed rows) — pairs a headline number with its decomposition without a second chart.
- **Trial/upgrade pill in the top bar** (7shifts "10 days left on The Works trial", Fresha "Complete Setup", Vercel "Pro Trial") — monetization chrome lives in the top-right, never competes with data.
- **Question-as-chart-title** (Google Workspace "What's the 30-day unique login count?") — scope line doubled as a plain-language question; very scannable.
- Whop proves a **6-up KPI grid** reads fine when tiles are peers with equal gap (P-D-03 holds) — the cap is about parallel-scan load, and 3×2 is still scannable.

### Net for this run
One genuine number calibration (**P-D-04 → 4–6**). Everything else VALIDATED at current numbers — a healthy refine-don't-add result. No new rules proposed.
