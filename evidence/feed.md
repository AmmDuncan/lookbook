# Evidence — Feed / Activity stream (P-FA calibration)

Method: studied 16 real web feed/stream screens across the four sub-genres the
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
| Item-row anatomy (P-FA-01) | every screen = **actor/avatar + verb + object + timestamp**, optional preview/action: Notion "You edited Arthur Burr · 24 min ago" + image; Twitch "janesmith1995 changed Game/Category to Overwatch 2 · 6 min ago"; GitHub "jdoe uninstalled the BackHub integration · 1 min ago"; PlanetScale "samlee… Created main-… in content-main" | **CONFIRM + CALIBRATE → P-FA-01**: the actor→verb→object→time quad is universal across all 4 sub-genres. The object is the only varying slot; everything else is fixed grammar. |
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

---

## Run 2026-05-29 — feed (calibration)
Source: reference study of real, public, shipped products (a screen-reference study + current shipped product behavior + product documentation). New screens read this run; nothing invented — claims restricted to behavior these products demonstrably ship.

### References studied (this run)
- 7shifts — Activity — avatar + bold actor + colored TYPE PILL (Deleted/Declined/Added/Published) + object; absolute timestamp ("Fri Apr 04, 2025 @ 9:32 AM") trailing under the line; "Show Details" inline action right; Prev/Next pager. Notable: absolute time on an *activity* feed (not just audit).
- Basecamp — Project Activity — avatar + "actor + verb + linked object" sentence; relative time right ("1:19pm"); inline snippet preview + file thumbnail chip; grouped under date; right rail "Getting Started" mini-feed echo.
- Airbnb — All activity — left connector-line timeline, dot per event, type label ("Listing Activity"/"Task") + bold change + "By <actor>"; date header "19 JUN 2023"; absolute time column (6:39 PM); filter chips (Dates/Listings/Users).
- Todoist — Activity — avatar + "You added a task: <object>" sentence; date+day header "14 Sep · Today · Wednesday"; project tag chip ("Inbox"/"Work") trailing; "All actions" filter dropdown; project scope dropdown.
- ClickUp — Notifications (New/Cleared tabs) — per-item CARD with breadcrumb context (Space · List), bold object, actor + change pills (status transition TO DO→IN PROGRESS), nested comment preview, per-row resolve check + hover "Clear notification"; terminal state "You've seen it all."; All/Assigned-to-me/@mentions filters.
- HubSpot — Activity Feed — avatar + actor + role + verb + linked object ("clicked link …"); time under; per-row type pill (Click/Open/Visit); per-row dismiss; expandable "▸ Other activity"; search activities; onboarding nudge card pinned above the stream.
- Sketch — Updates (Unread/Read tabs) — actor + breadcrumb + bold change; TYPE label column (Mention/Star/Asset); relative time right; inline "download (ZIP …)" link.
- Better Stack (Uptime) — Incident Timeline — composer at TOP ("Leave a comment or post-mortem… @mention"); mixed human-comment blocks + system event lines (icon + "Sent an email to…", "escalated this incident to…"); absolute time right (Jul 17 at 1:24 PDT); newest at top under composer.
- Vimeo — Activity — avatar/app-icon + "Your video <name> is now ready" + relative time under; trailing media THUMBNAIL of the asset acted on; "View message" inline action on a message row; no read state.
- Asana — Inbox (Activity/Archive/Sent tabs) — date buckets Today/Yesterday; project context line + bold object + unread DOT (right); actor + verb + relative time; right-pane contextual CTA ("Invite accepted! …"); onboarding row "Teamwork makes work happen!"; Filter + Sort:Newest + Manage notifications.
- Deel — Activity Feed — leading TYPE ICON (not avatar) per row; bold title + descriptive sentence body; absolute time + date ("14:18, Dec 8th 2025"); "Mark all as read"; Date + Categories filters; security row "New log in on your account … Change your password immediately".
- Notion — Inbox — grouped by page; actor + verb + page object; threaded comment preview with inline Reply; unread DOT; relative time ("Feb 21"); mixed comment + system ("Your workspace export is ready" + Download).
- Wrike — Inbox — bot/actor avatar + @mention sentence; date bucket Today + relative ("1 h"); "Mark all as read"/"Archive all" overflow; dismissible onboarding/help cards interleaved.
- Patreon — Notifications (New/Earlier groups) — leading type glyph or avatar; actor + verb + object; relative time ("3d"/"20h"); trailing post THUMBNAIL on content rows; per-row ⋯; aggregation copy ("Jon and one other commented on…", "Jane and 2 others became free members"); a failure row ("Your video took longer than usual to process. See details").
- Plane — Inbox (All/Mentions) — two-pane: list left (issue key + bold title + relative time + unread dot) / thread right (actor + comment + "added assignee" system line); empty detail "Select to view details".
- GitHub — Notifications — All/Unread tabs; Group by: Date; reason rail (Assigned/Participating/Mentioned/Team mentioned/Review requested); per-row checkbox → bulk Done/Unsubscribe bar with "N selected"; type chip ("ci activity"); relative time; Prev/Next + "1–3 of 3" count; onboarding "Clear out the clutter" banner.
- Linear (docs) — consequence-tiered routing: Interrupt (assigned/@mention/blocker) vs Ambient (comments/status) vs Digest-only (reactions/watching); actor-filtered inbox; snooze + show-read display options.

### Rule-by-rule
- P-FA-01 (row grammar actor·verb·object·time) — VALIDATE. Universal again across 7shifts/Basecamp/Todoist/HubSpot/Vimeo/Patreon/Asana. Aggregation ("Jon and one other …", "Jane and 2 others …" — Patreon) compresses the *actor* slot for batched same-object events; the grammar survives. Strengthens, doesn't bend, the rule.
- P-FA-02 (consistent leading type cue: icon / label / event-code) — VALIDATE, and the cue-form is even broader than recorded: 7shifts/HubSpot/Patreon use a **colored type PILL** at the object, Sketch a **type-label column** (Mention/Star/Asset), Deel a **leading type ICON instead of an avatar**, ClickUp **status-transition pills** (TO DO→IN PROGRESS). All are "one repeated channel," confirming the rule's permissiveness. No change needed; the rule already says "icon, a short type label, or a colored/monospace event-code."
- P-FA-03 (time contextual by kind: relative for activity, absolute for audit, both for changelog) — CALIBRATE (soften scope wording). NEW counter-evidence: 7shifts (activity), Airbnb (activity), Deel (notifications), Better Stack (incident timeline) all show **absolute timestamps on non-audit feeds**. So "absolute = audit only" is too tight. Reality: relative dominates *recent in-app* streams; **absolute is a legitimate choice on any activity/notification feed whose items are referenced later or are time-of-record** (shift logs, incident post-mortems, security/account events). Recommend rewording from "audit/security logs use ABSOLUTE" to "audit/security logs MUST use absolute; activity/notification feeds MAY use absolute when the exact instant matters (shift/incident/security logs), else relative." The forbidden raw-machine-timestamp rule is untouched.
- P-FA-04 (unread/dismiss for notification feeds only; one quiet channel) — VALIDATE. Asana/Notion/Plane = unread DOT; Deel/Wrike = "Mark all as read"; HubSpot/Patreon = per-row dismiss/⋯; ClickUp = per-row resolve-check + "You've seen it all." One channel each (dot OR border, not stacked). GitHub adds bulk Done/Unsubscribe via row checkboxes — a heavier triage layer (see candidate). Audit/changelog still carry none.
- P-FA-05 (medium-compact; avatar sets row height; hairline/gap not card-per-row) — CALIBRATE (acknowledge a legit card-per-item exception). ClickUp and Patreon ship **a card per notification** and read well — because each item is a rich multi-part object (breadcrumb + status pills + nested comment + actions), not a one-line event. So "card per row" is forbidden for *scannable one-line* streams but acceptable when each item is a **self-contained rich unit with its own internal structure + actions**. Recommend adding that exception clause; the hairline/gap default stands for ordinary rows.
- P-FA-06 (newest-first; new items via "N new" pill, no silent shove) — VALIDATE (no new counter-evidence; Better Stack composer-at-top + newest-below is consistent).
- P-FA-07 (explicit bounded end / pager; infinite only inside bounded rail) — VALIDATE. 7shifts Prev/Next, GitHub Prev/Next + "1–3 of 3" count, ClickUp "You've seen it all." terminal state. Reinforced.
- P-FA-08 (four states; warm first-run; skeletons; scoped error) — VALIDATE + reinforce. Warm/onboarding states everywhere: Asana "Teamwork makes work happen!", HubSpot setup nudge, Wrike help cards, GitHub "Clear out the clutter", ClickUp "You've seen it all." Failure rows are *scoped inline*: Patreon "Your video took longer than usual… See details", Deel "New log in… Change your password immediately" — confirms error lives in-stream, not as a blanking panel.
- P-FA-09 (composer only on postable feeds, at top) — VALIDATE. Better Stack incident timeline puts the composer at the very top ("Leave a comment or post-mortem…"); consumed feeds (Vimeo/Deel/Patreon) have none. Textbook.
- P-FA-10 (≤3 weights per row; actor/object lead, timestamp muted) — VALIDATE. Holds even on the busiest rows (ClickUp card, HubSpot row): the bold object leads, time stays muted. Aggregation rows keep one lead.
- Composition (centered / in-shell rail / full-width table / connector timeline) — VALIDATE + extend with a **two-pane list+detail** variant (Plane, Zeplin prior run, ClickUp's right-pane echo): a master list rail + a reading pane. Worth noting under composition defaults as a fourth in-app shape (not a new rule).
- Filters/scope — VALIDATE. GitHub reason-rail (Assigned/Mentioned/Review-requested), Linear actor-filter + consequence tiers, Deel Date+Categories, Asana Filter+Sort, Todoist project+action scopes. The "long stream gets type/date/actor filters" default is well-corroborated.

### New-rule candidates (NOT added — flagged for battle-test)
- **Reason / context chip** ("why is this in my feed" — review-requested / assigned-to-you / mentioned) — now motivated by GitHub reason-rail + Linear consequence tiers + Asana/Notion project-context lines. Standing candidate across two runs; battle-test before adding. Likely the single most-supported addition.
- **Aggregation / roll-up of similar events** ("Jane and 2 others liked…", "N new") — Patreon + GitHub counts. Compresses the actor/object slot. Probably a sub-clause of P-FA-01, not a new rule.
- **Bulk-triage layer for heavy inboxes** (row checkboxes → Done/Unsubscribe bar, à la GitHub; mirrors the list pattern P-L-06) — when a notification feed is a real work queue. Battle-test; may belong as a P-FA-04 extension rather than its own rule.
- **Consecutive-actor collapse** (suppress repeated avatar/name on adjacent same-actor events — Discord/Slack) — carried from prior reading; weakest; refinement of P-FA-02/05.
