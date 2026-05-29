# Pattern: Feed / Activity stream

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-FA-<nn>`.

## Surface intent
A **chronological stream of mixed events** the user scans top-to-bottom to answer "what's
happened (and what's new) since I last looked?" — notifications, social/project activity, an
audit/security log, a product changelog. Unlike a detail page's history timeline (P-DT-07,
which is *one record's* events inside that record's page), a feed is a **standalone surface
aggregating events across many sources/records**. The reader is in scan mode: each row must
resolve — *who did what to what, when* — in one glance, and items of different kinds must sit in
the same column without the eye losing the thread. It is read-mostly (occasionally act on a row:
dismiss, mark read, open), and its defining job is **making a heterogeneous list feel like one
coherent timeline**.

> **Relationship to P-DT-07.** The detail page's activity timeline covers *a single record's*
> history (the events of this order / this user). The feed is the **broader standalone stream**:
> many records, many event types, its own page or rail, with read/unread, filters, and load-more
> that a single-record timeline doesn't carry. When a feed is scoped to one record, defer to
> P-DT-07; this pattern governs the cross-source stream.

## Density band
**Medium-compact (F26).** Denser than a detail page, looser than a pure data table. Row height
48–64px when rows carry an avatar/icon + two text lines (notification/activity); 36–44px for a
text-only audit-log table row (F27). The **avatar/icon column sets the row height**; inner
padding 12–16px; row-to-row separation is a single hairline (F21) or gap (F12), never a card per
row. Section/date-group gap 20–28px. Texture: none — product surface (F36); the only imagery is
real preview/changelog media, which is content, not decoration.

## Calibrations

**P-FA-01. Item row = a fixed grammar: `[type icon / avatar] · actor · verb · object · timestamp`, with an optional preview (thumbnail / one-line snippet) and at most one inline action.** Actor name carries the weight (500–600), the object is the link-colored target, the timestamp is muted support pinned right or under the line (never co-equal with the actor). Avatar/icon 28–40px.
Refines: F13, F44. *Why:* the actor→verb→object→time quad is universal across all four sub-genres — Notion "You edited *Arthur Burr* · 24 min ago", Twitch "janesmith1995 changed Game/Category to *Overwatch 2* · 6 min ago", GitHub "jdoemobbin uninstalled the *BackHub* integration · 1 min ago", PlanetScale "Created *main-…* in content-mobbin" (`evidence/feed.md`). Only the **object** slot varies by type; fixing the rest is what makes a mixed list read as one stream. The preview and action hang off the row without breaking the scan line. *Check:* every row reads as a sentence; timestamp is the quietest element.

**P-FA-02. Mixed item TYPES are encoded by a consistent leading cue — an icon, a short type label, or a colored/monospace event-code — applied uniformly, never by ad-hoc per-row styling.** The cue maps type→meaning (F19 semantic, F44 icon-not-decoration): comment vs mention vs system vs failure; `Star` vs `Asset`; `Update` vs `Feature`; `branch_password.created`.
Refines: F19, F44. *Why:* a feed's whole difficulty is heterogeneity; the reader sorts types by a *single repeated channel*, not by guessing from layout. Sketch labels rows Star/Asset, Webflow tags Update/Feature, audit logs carry a **monospace event-type code** (`integration_installation.destroy`) that doubles as the machine-filterable key (`evidence/feed.md`). The failure mode is every row looking identical with no type cue — the eye can't triage (Forbidden moves). *Check:* you can tell each row's *kind* before reading its text.

**P-FA-03. Time is contextual on feed kind (F72): activity/notification feeds use relative time ("2 days ago") + date-group headers (Today / Yesterday / Earlier / a date) once the stream is long; audit/security logs use ABSOLUTE timestamps; a public changelog shows relative AND absolute together.**
Refines: F72 (scoped). *Why:* relative time aids scanning recent items (F72), but a compliance log needs the *exact instant* — PlanetScale/Unity/GitHub all show absolute "2025-08-14 10:44:13". Long streams group under date headers so the eye finds a boundary (Basecamp "Today", Airbnb "19 JUN 2023", Gemini per-date blocks). Webflow's "**3 months ago — October 15, 2022 at 02:23am**" is the gold standard for a changelog: relative for scan, absolute for the record (`evidence/feed.md`). *Check:* audit-log rows show an absolute timestamp; activity rows show relative; nothing shows a raw machine timestamp like `1660473853`.

**P-FA-04. Read/unread + dismiss is for NOTIFICATION feeds only. Unread = a left-border / dot / faint tint (one channel, not three); plus a bulk "Mark all as read" and a per-item dismiss / mark-read affordance. Audit logs and changelogs are read-only — no read state.**
New. *Why:* a notification inbox's job is "what's new for *me*" — Todoist (unread left-border + dot + "Mark all as read"), Sketch (Unread(2)/Read tabs), Zeplin (per-row "Mark as Read") all carry it (`evidence/feed.md`). An audit log is a *record*, not a to-do; a changelog is broadcast — neither has a per-user read state. Encode unread with **one** quiet channel (a left accent border or a dot), not a loud full-row tint stacked with a dot stacked with bold. *Check:* notification rows have an unread affordance + mark-all-read; audit/changelog don't pretend to.

**P-FA-05. Density is medium-compact; the avatar/icon column sets row height; rows separate by hairline or gap, not a card each.**
Refines: F26, F27, F21. *Why:* per-row cards turn a stream into a stack of boxes (AP5/AP9 on this surface) and kill the timeline feel. Real feeds use a hairline or pure gap between rows so the column reads as continuous (`evidence/feed.md`). *Check:* no per-row border-box; row height tracks the avatar.

**P-FA-06. Order is newest-first chronological. New items arriving live PREPEND behind a "N new" pill / "Show new activity" affordance — they don't silently shove the list or auto-scroll.**
New. *Why:* a feed is a timeline; reverse-chron is the contract. But yanking the list when the user is mid-read loses their place — surface new items as an opt-in pill at the top (the Twitter/Linear pattern) so the user pulls them in. *Check:* arrival of a new item doesn't move the row the user is reading.

**P-FA-07. Pagination is an explicit, bounded end: a "Show more" button or a Prev/Next pager, with a clear terminal state ("You've reached the beginning" / "That's everything"). Infinite scroll is allowed only inside a bounded popover/rail — never a bottomless page with a spinner that never resolves.**
New. *Why:* Webflow uses "Show More", PlanetScale a Prev/Next pager (`evidence/feed.md`) — real product feeds give the reader a floor. A page-level infinite loader with no end is disorienting and untestable, and the F33 "loading" state must eventually become "done", not spin forever (Forbidden moves). *Check:* the stream has a visible end or an explicit load control.

**P-FA-08. Ships all four data states (F33), and the empty/first-run state is WARM and designed, not a blank panel:** "You're all caught up" with a calm illustration/glyph, or a first-run setup nudge ("Finish your team setup") / a celebratory row — never an empty rectangle. Loading is skeleton rows matching the real row grammar; error is a scoped retry within the stream.
Refines: F33. *Why:* the empty feed is the *most-seen* state for a healthy inbox (caught up) and the *first* state for a new account — Todoist's "Finish your team setup" card + "Karma unlocked!" row show the zero state is a designed welcome, not a gap (`evidence/feed.md`). Skeletons mirror row grammar so the list doesn't reflow on arrival. *Check:* the empty state has a friendly line + (where it fits) a next action; the loading state is skeleton rows, not a centered spinner.

**P-FA-09. Compose/affordance (interactive feeds only): if the feed accepts new posts (a team/social activity stream), the composer sits ABOVE the stream (a single input that expands), and posting prepends the new item (P-FA-06). Read-only feeds (audit, changelog, system notifications) have no composer.**
New. *Why:* the composer is the "+" of a feed; placing it at the top keeps it with the newest items it produces. Most feeds in a product app are *consumed* (notifications, audit, changelog) — don't add a composer to a feed the user can't post to. *Check:* a composer exists only if users can author items.

**P-FA-10. Hierarchy per row is at most three levels (F14): actor/object (lead) > body/preview (support) > timestamp/meta (muted). No row should have five competing weights.**
Refines: F13, F14. *Why:* the failure mode is a row where actor, object, timestamp, type tag, and action all shout equally — the eye can't find the lead (AP8/AP20 on this surface). The actor + the object are the sentence; everything else is quiet. *Check:* squint — the actor/object reads first, the timestamp last.

## Composition defaults (contextual — this is the dynamic-generation branch)
The feed's column shape tracks **where it lives** (the constant is reverse-chron + the P-FA-01 row grammar; the shell flexes):
- **Centered single column (~640–760px measure)** — a *standalone / public* feed: a changelog, a release-notes page, a full-page "All activity". Date eyebrow → entry; generous measure; relative-plus-absolute time; type tags; explicit "Show more"; **no read state** (Product Hunt, Webflow, Gemini, Airbnb).
- **In-shell rail or dropdown** — an *in-app notification inbox / "What's New"*: lives in the left-sidebar app shell or a header-bell popover; unread dots + "Mark all as read" + dismiss; inline one-tap actions; All/Unread tabs; bounded scroll (Notion, Todoist, Sketch, Zeplin, Visual Electric).
- **Full-width table** — an *audit/security log*: columns (Actor · Event/Description · IP/Location · Absolute time), monospace event-type codes, date-range + actor + search filters, **Export**, a Prev/Next pager; read-only, absolute time (PlanetScale, Unity, GitHub, Grok).
- **Connector-line timeline** — a *social/project activity* stream: a vertical connector + dot/icon per event, avatars, previews, relative time under date headers (Basecamp, Airbnb) — the closest cousin to P-DT-07, but cross-source.

Other defaults:
- **Filters/scope** for any long stream: type filter (chips or a left type-rail), date range, actor. Audit logs additionally get **Export** (compliance).
- **App shell**: in-app feeds use the same left-sidebar shell as dashboard/detail; standalone changelogs are a bare centered page (marketing-adjacent).
- **Mobile** (F50): single column always; the audit-log table collapses to stacked rows (actor + event + time), never a horizontally-scrolling table that hides columns; the bell-popover becomes a full-screen sheet; nothing dropped.

## Forbidden moves
- **Every item identical with no type cue** — a wall of look-alike rows where the reader can't triage kind (breaks P-FA-02).
- **Raw machine timestamps** (`1660473853`, ISO with no humanizing) in an activity/notification feed (P-FA-03; F72).
- **Relative time on an audit/compliance log** where the exact instant is the point (P-FA-03).
- **A bottomless infinite loader with no end / no count** — a page-level spinner that never resolves (P-FA-07).
- **New items auto-scrolling or shoving the list** while the user is mid-read, with no "N new" opt-in (P-FA-06).
- **A card per row** — boxing every item turns the timeline into a stack of tiles (P-FA-05; AP5/AP9).
- **Unread encoded three ways at once** — dot *and* bold *and* full-row tint *and* a badge; pick one quiet channel (P-FA-04).
- **A read/unread or dismiss affordance on a read-only audit log or broadcast changelog** — implies a per-user state that doesn't exist (P-FA-04).
- **A composer on a feed the user can't post to** (P-FA-09).
- **Only the populated state** — no skeleton, no warm empty/first-run, no scoped error (AP19; P-FA-08).
- **Decorative texture behind the stream** (F36 medium band; product surface).
- **The timestamp as loud as the actor** — five competing weights per row (P-FA-10; AP8).

## Sources
Refactoring UI (Wathan & Schoger) · NN/g (notification & activity-feed patterns; "list of recent activity") · Tufte (small-multiple / timeline reading) · Lookbook gallery → Organisms (data list, notification) + Recipes (Feed) · DVLA activity deep-link timeline + per-section overflow-scroll + relative-time helpers (battle-tested, single-record cousin) · **Mobbin reference study (Notion, Basecamp, Airbnb, Twitch, Todoist, Sketch, Zeplin, PlanetScale, Unity, GitHub, Grok, Product Hunt, Google Gemini, Webflow, Visual Electric — 16 screens across activity / notifications / audit-log / changelog) → `evidence/feed.md`** (actor→verb→object→time grammar, consistent type cue, relative-vs-absolute-by-kind, unread-for-notifications-only, explicit-end pagination, warm first-run, contextual column shape).
