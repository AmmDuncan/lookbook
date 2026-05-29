# Evidence — Feed / Activity stream (P-FA calibration)

Method: studied 16 real web feed/stream screens on Mobbin across the four sub-genres the
pattern must cover — **social/project activity**, **notifications inbox**, **audit/security
log**, **changelog/release notes** — read by **(a) craft to learn** and **(b) how the rules
are applied**: where reality confirms a rule, calibrates a number, or breaks it (→ rule is
wrong / too strict / needs scope). The strongest calibrations are the rules real screens *bent*.

Screens (2026-05-29):
- **Activity / social**: Notion (Updates inbox, avatar + verb + object + image preview), Basecamp (Project Activity — date header "Today", per-event nested sub-lists + file thumbnails), Airbnb (All activity — left connector line, dot per event, type label + relative-then-absolute time, filter chips), Twitch (Creator activity — in-shell, actor + verb + object, "6 minutes ago").
- **Notifications**: Todoist (Notifications — All/Unread tabs, unread left-border + dot, inline "Update" action button, "Mark all as read", a failed-payment row tinted), Sketch (Updates — Unread(2)/Read tabs, type label Star/Asset, inline download link, "Mark all as read"), Zeplin (Notifications — left filter rail by type, selected-row outline, per-row "Mark as Read", right preview pane), Todoist #2 (warm first-run: a pinned "Finish your team setup" onboarding card + a celebratory "Karma unlocked!" row with an "Explore Productivity" action).
- **Audit / security log**: PlanetScale (Audit log — table, actor email + human sentence + **monospace `branch_password.created` event-type code** + IP + country + absolute timestamp + Prev/Next pager), Unity (Security history — table, Event / Description-with-status-pill / Location / City / Occurrence-date + "Filter logs"), GitHub (Security log — hybrid: colored **`integration_installation.destroy`** event-type link + actor + human sentence + IP + relative time + "…" overflow + Filters + Export), Grok (Audit Log — table + a frequency bar chart over the range + Event ID (mono) / Event Time / Description / User + 30d/search/user filters).
- **Changelog / release notes**: Product Hunt (Changelog — centered single column, date eyebrow → "Release Notes" title → device-mockup media), Google Gemini (dated entries `2023.04.21`, each with What/Why sub-points), Webflow (release cards each with a **type tag Update/Feature**, relative-then-absolute time "3 months ago — October 15, 2022", "Learn more…" link, "Show More" button — explicit end, not infinite), Visual Electric (in-shell "What's New" rail, date eyebrow + title + deck + product screenshot per entry).

## Rule-application reading

| Rule | What real feeds do | Verdict |
|---|---|---|
| Item-row anatomy (P-FA-01) | every screen = **actor/avatar + verb + object + timestamp**, optional preview/action: Notion "You edited Arthur Burr · 24 min ago" + image; Twitch "janesmith1995 changed Game/Category to Overwatch 2 · 6 min ago"; GitHub "jdoemobbin uninstalled the BackHub integration · 1 min ago"; PlanetScale "samlee… Created main-… in content-mobbin" | **CONFIRM + CALIBRATE → P-FA-01**: the actor→verb→object→time quad is universal across all 4 sub-genres. The object is the only varying slot; everything else is fixed grammar. |
| Type cue, not decoration (P-FA-02) | Sketch labels each row **Star / Asset**; Webflow tags **Update / Feature**; PlanetScale/GitHub carry **monospace event-type codes** (`branch_password.created`, `integration_installation.destroy`); Airbnb prefixes "Listing Activity / Task" | **CALIBRATE → P-FA-02 (F19/F44)**: mixed item types are encoded by a **consistent leading icon/label/colored code**, never by ad-hoc per-row styling. Audit logs lean on the mono event-type string as the canonical machine-readable type. |
| Date grouping vs relative time (P-FA-03) | **Grouped**: Basecamp "Today" header, Airbnb "19 JUN 2023" header, Gemini per-date blocks. **Relative**: Notion/Twitch/Todoist "X ago", GitHub "1 minute ago". **Both**: Webflow "3 months ago — October 15, 2022 at 02:23am"; Airbnb relative-feel + 6:39 PM column | **CALIBRATE → P-FA-03 (F72)**: recent streams use relative time; long/grouped streams add **date-group headers** (Today / Yesterday / earlier). Audit logs use **absolute** timestamps (compliance needs the exact instant). Webflow's relative-plus-absolute is the gold standard for a public changelog. |
| Read/unread + dismiss (P-FA-04) | Todoist: **unread left-border + dot**, hover "×"/dismiss target, **"Mark all as read"**; Sketch: **Unread(2)/Read tabs** + "Mark all as read"; Zeplin: per-row "Mark as Read" + selected outline | **CALIBRATE → P-FA-04**: notification feeds get an unread affordance (dot/left-border/tint) + a bulk "mark all read" + per-item dismiss/mark-read. Audit logs and changelogs are read-only — **no** read/unread (calibrates the rule's scope). |
| Density (band) | Notification/activity rows ~48–64px (avatar 28–36px); audit-log table rows ~36–44px, hairline separators | **CONFIRM medium-compact**: denser than detail-page rows, looser than a pure dashboard table. Avatar/icon column sets the row height. |
| Load-more vs infinite (P-FA-07) | **Explicit**: Webflow "Show More" button, PlanetScale **"Previous / Next" pager**. Infinite scroll within a popover (Notion/Todoist) but bounded by the popover height | **CALIBRATE → P-FA-07**: real product feeds favor an **explicit "Show more" / pager** with a visible end over a bottomless infinite loader. Fed the forbidden "infinite loader with no end". |
| Single-column centered vs in-shell vs full-width (composition) | **Centered single column**: Product Hunt, Gemini, Airbnb, Webflow (public/standalone). **In-shell rail/popover**: Notion, Todoist, Sketch, Zeplin, Twitch, Visual Electric (notifications/what's-new inside an app). **Full-width table**: PlanetScale, Unity, GitHub, Grok (audit logs) | **CALIBRATE → composition (contextual)**: the column shape tracks *where the feed lives* — standalone changelog = centered measure; in-app notifications = shell rail/dropdown; audit log = full-width table. This is the dynamic-generation branch (mirrors detail-page column count). |
| Empty / first-run (P-FA-08 / F33) | Todoist #2: a **pinned "Finish your team setup" onboarding card** + a celebratory **"Karma unlocked!"** row — the empty/first-run feed is a *warm designed state*, not a blank panel | **CALIBRATE → P-FA-08**: first-run gets a warm empty state ("You're all caught up" / a setup nudge), not an empty box. Confirms F33 reaches the feed's zero state. |
| Inline preview/action (P-FA-01/05) | Notion image preview, Basecamp file thumbnail + nested sub-list, Sketch "download (ZIP)" link, Todoist "Update" button, GitHub "…" overflow, Webflow "Learn more…" | **CONFIRM → P-FA-01**: the optional preview (thumbnail/snippet) and the optional inline action (one verb) hang off the row without breaking the scan line. |
| F21 borders / F13 hierarchy | rows separated by **gap or a single hairline**, not boxes; actor name = the weight, object = link color, timestamp = muted/right | CONFIRM (hairline/gap over card-per-row; the timestamp is muted support, never co-equal with the actor). |
| F36 texture | **zero decorative texture** on all 16; changelog media is *product screenshots*, which is content not texture | CONFIRM medium-band restraint. The only "imagery" is real product/preview media. |
| Filters / scope | Airbnb chips (Dates/Listings/Users), Zeplin left type-rail, audit logs all have date-range + actor + search + GitHub/Grok Export | **APPLY**: a long stream gets type/date/actor filters; an audit log additionally gets **export** (compliance). |

## The dynamic-generation lesson
A feed is one grammar — **actor → verb → object → timestamp**, plus optional preview and one
action — rendered across four very different homes. The constant is the row grammar and the
chronological order; what flexes is **where it lives and what it owes the reader**:
- a **public changelog** (Product Hunt, Webflow, Gemini) → centered single column, type-tagged,
  relative-plus-absolute time, explicit "Show more", *no* read state — it's marketing-adjacent;
- an **in-app notification inbox** (Todoist, Sketch, Zeplin) → shell rail or dropdown, unread
  dots + "mark all read" + dismiss, inline actions, a warm "all caught up" empty;
- an **audit/security log** (PlanetScale, Unity, GitHub, Grok) → full-width table, monospace
  event-type codes, machine identity (IP/location), *absolute* timestamps, export, pager — it's
  a record, not a notification, so it's read-only and exact;
- a **social/project activity stream** (Basecamp, Notion, Airbnb, Twitch) → connector-line
  timeline or grouped rows, avatars, previews, relative time under date headers.
Getting the column shape, the time format, and the read/unread scope to track *which* feed this
is — instead of stamping one notifications list everywhere — is the proof the layout was reasoned
from the feed's purpose.

## Over-strict / wrong-rule catches (the strongest calibrations)
- **Audit logs broke the "every feed has unread + dismiss" assumption** — PlanetScale/Unity/GitHub
  are read-only records with *absolute* timestamps and no read state. Scoped P-FA-04 (read/unread)
  and P-FA-03 (relative time) to *notification/activity* feeds, and added the audit-log exceptions
  (absolute time, export, no read state). A naive "relative time everywhere (F72)" would have been
  *wrong* for compliance logs.
- **Webflow's "Show More" + PlanetScale's pager** showed that real product feeds prefer an
  **explicit, bounded end** over infinite scroll — fed the forbidden "infinite loader with no end".
- **Webflow's "3 months ago — October 15, 2022 at 02:23am"** proved relative and absolute time are
  *complementary*, not either/or — relative for scan, absolute on the same row for the record.
- **Todoist's "Finish your team setup" + "Karma unlocked!"** proved the first-run feed is a
  *designed warm state* (setup nudge / celebration), not an empty rectangle — extended F33 into the
  feed's zero state (P-FA-08).
- **The audit-log monospace event-type code** (`branch_password.created`) is the type cue *as data* —
  a stronger form of P-FA-02 than an icon, because it's also the machine-filterable key.

## Calibrations applied to patterns/feed.md
1. P-FA-01 → universal **actor → verb → object → timestamp** row grammar + optional preview + one action.
2. P-FA-02 → mixed types encoded by a **consistent leading icon/label/colored event-code** (F19/F44), never per-row decoration.
3. P-FA-03 → **relative time + date-group headers** for activity/notifications; **absolute** for audit logs (F72 scoped).
4. P-FA-04 → unread (dot/left-border/tint) + "mark all read" + per-item dismiss **for notification feeds only**; audit/changelog are read-only.
5. P-FA-05 → density **medium-compact**; avatar/icon column sets row height.
6. P-FA-06 → **newest-first chronological**; new items prepend with a "N new" pill, not a silent jump.
7. P-FA-07 → **explicit "Show more" / pager** with a visible end over a bottomless infinite loader.
8. P-FA-08 → the four data states, with a **warm first-run empty** ("all caught up" / setup nudge), not a blank panel (F33).
9. Composition → **contextual column shape**: centered changelog / in-shell notification rail / full-width audit table — the dynamic branch.
