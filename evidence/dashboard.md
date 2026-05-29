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
