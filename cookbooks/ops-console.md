# Cookbook — the ops console (dense operational surface)

> A surface an operator *lives in*: live metrics, the state of many things at once, and a stream of what's happening right now. Observability dashboards, infra monitoring, deploy/queue consoles, incident rooms. The library already had the *parts* — KPI tiles (`dashboard-kpi`), dense tables (`data-table`), status badges (`state-as-shape`) — but never the surface that *composes* them into one continuous operational view. That composition is the job here.
>
> **Earned by:** reproduction #12 (`reproductions/ops-console.md`), grounded in real operator consoles (Modal, Cloudflare Workers Observability, Braintrust Monitor). It applies the cool-technical register *voice* to a new *archetype* — so this cookbook is the console composition, not the voice.

## When to reach for this

The user is *watching* something live and acting on it: services, instances, jobs, requests, a log/event stream. Many entities, each with state, plus numbers that move and a feed that scrolls. If the surface is a few summary cards for an exec glance, that's `dashboard-kpi`. Reach here when it's *operational* — dense, real-time-ish, and the user mouses through it all day.

## The voice comes from elsewhere; this is the composition

Pick the voice from `registers.md`. Consoles are almost always **cool-technical** (Geist/Geist Mono · dark-not-black · dense · hairline depth · scarce-cool accent · sharp radii · tabular-nums) — but the composition below holds in any voice. This cookbook adds only what an *operational* surface needs on top.

## The non-negotiable: three bands, zero card chrome

An ops console stacks, full-bleed and continuous:

```
┌───────┬─────────────────────────────────────────────────────────┐
│ nav   │ breadcrumb · env        [15m 1h 24h 7d]   ● Live   [Ack] │ ← topbar: context + time-range + live + action
│ rail  ├─────────────────────────────────────────────────────────┤
│       │ P99 142ms▲ │ REQ/S 2,847▲ │ ERR 0.83%▲ │ CPU 61%▼ │ …   │ ← BAND 1 live-metric strip (tiles, 1px gap)
│ ▸Logs ├─────────────────────────────────────────────────────────┤
│       │ service        region   status     p99    err%  deploy   │ ← BAND 2 status grid (dense table)
│       │ auth-service   us-east  ●Healthy   38ms   0.02%  2h ago   │
│       │ queue-consumer us-east  ●Down       —     100%   1d ago   │
│       ├─────────────────────────────────────────────────────────┤
│       │ ● Streaming  ‖Pause   filter:____        4,812 events     │ ← BAND 3 streaming log panel header
│       │ 14:02:31.814  ERROR  queue-consumer  connection refused…  │   (ts · level-chip · svc · message)
│       │ 14:02:31.802  INFO   api-gateway     GET /v1/health 200…  │
└───────┴─────────────────────────────────────────────────────────┘
```

- **Bands separated by hairlines and a 1px-gap grid — NEVER by rounded cards.** This is the single decision that makes it read as an operator's console rather than a marketing dashboard of widgets. A `gap: 1px; background: var(--border)` grid draws the dividers *between* tiles; the surface stays one continuous plane.
- **App-shell chrome:** a fixed nav rail (~200px: wordmark + env/project switcher + ⌘K search + nav list, one item active) and a tight topbar (~40px: breadcrumb + segmented time-range chips + a Live control + one primary action). Left-aligned throughout; numbers right-aligned in their columns.

## Density is the richness (not color)

- 13px body, **11px mono** meta/labels, 5–8px row padding. Pack it — an operator wants more on screen, not more whitespace.
- **Richness = considered detail at density.** Real service names, real log lines (a redis connection-refused with a retry count, a goroutine panic with a stack-trace note, GPU memory pressure shedding queued requests). Lorem or repeated filler reads as fake density instantly. If you turn up *color* to add interest, you've already lost — restraint is the voice.
- **`tabular-nums` on every number** — metrics, p99/err columns, timestamps. Set it globally and the columns lock into alignment.

## Status-as-shape, at two scales

1. **Row scale (the status grid):** one 3-state pill per row (Healthy/Degraded/Down → mint/amber/red, tint + word). **One carrier of state per row** — don't *also* color the row's left edge or text; redundant encoding is noise. The eye reads nine rows of state at a glance from the pill column alone.
2. **Log scale (the novel move):** the streaming log is `ts · level-chip · service · message`, and the **message carries inline token-colored highlights** — error strings red, warning values amber, the data-subject (path/topic/id) in the accent, bare numbers muted. A glance reads *severity and subject from color-shape before reading a word*. This is the pattern the parts-cookbooks don't hold; it's why the log stream is the signature of the archetype, not a dumb `<pre>`.

## Live signals only where genuinely live

The ONE place a glowing/pulsing dot is earned: a channel that is actually live — the topbar **Live** toggle and the log panel's **Streaming** indicator. Gate the pulse animation on `prefers-reduced-motion`. Everywhere else the accent is *state* (active nav) or *data* (the message subject), never decoration. A colored dot on a static count is the §11 status-cosplay tell — don't.

## Contrast: the faint tier is DATA here, and it sits on lighter surfaces

Consoles lean hard on the faint tier — timestamps, tile labels, SHAs, column headers are all "quiet," and they're all **data a user reads**. Two traps specific to this archetype, both of which a generous eye ships and the gate catches:

- **Faint text on an elevated surface.** Metric-tile labels sit on the *raised* tile background, not the page bg — so a `--faint` that clears 4.5:1 on `--bg` can still fail on `--surface-raised`. **A `--faint`-on-elevated-surface contrast-gate *warning* is a real failure if any faint text renders there** (a tile label, a hovered row). Set `--faint` to clear 4.5:1 on the *lightest* surface it ever sits on — including `--surface-hover`/`--surface-active`, because hover is constant in a console.
- Run `node scripts/check-contrast.mjs <file>` and don't ship until it's clean *including warnings you've verified*. (Earned: repro #12 shipped tile labels at 4.33:1 and hover states at 4.05:1 until `--faint` was lightened one step.)

## Readable floors hold at density

Dense ≠ tiny. Level chips, SHAs, anything carrying real text stays **≥11px** (the ALL-CAPS short-token chips can live at 11px, but not 10px). Tabular alignment and a tight grid buy you density; shrinking real text below the floor just makes it unreadable.

## States (the SaaS playbook still applies)

A real console has **empty** (no logs in range / no degraded services — say so, don't show a blank table), **loading** (skeleton rows, not a spinner over the whole grid), and **error** (the stream dropped / the query failed — with a retry). A happy-path-only console is a mockup; the states are part of "done."

## Don't

- ❌ Wrap each band in a rounded card — that's a widget dashboard, not a console. Hairlines + 1px-gap grid.
- ❌ Add interest with color — density of considered detail is the richness; one scarce accent.
- ❌ Redundantly encode row state (pill *and* left-edge *and* text color) — one carrier.
- ❌ A `<pre>` log dump — the log is a status-as-shape surface: level chips + inline color-coded message tokens.
- ❌ A live/pulsing dot on anything not genuinely live (a static count badge) — status-cosplay.
- ❌ Ship `--faint` data text at <4.5:1 on the surface it actually sits on (tiles, hovered rows) — verify the gate warning, don't dismiss it.
- ❌ Real text below ~11px to chase density.
- ❌ Happy-path only — empty/loading/error are part of the archetype.
