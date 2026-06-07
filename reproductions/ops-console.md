# Reproduction #12 — ops console (a dense operational surface)

**Domain:** infra / observability monitoring · **Target:** real shipped operator consoles (Modal, Cloudflare Workers Observability, Braintrust Monitor).
**References:** `_ref/modal-ops-console.webp` (status table + metric sparkline + actions), `_ref/cloudflare-workers-logs.webp` (Live streaming log stream), `_ref/braintrust-monitor.webp` (metric-tile board) — eyedrop only.
**Build:** `ops-console.html` → render `ops-console@2x.png`. **Gate:** contrast tool PASS (clean, all pairings ≥4.5:1 after a fix); layout tool PASS (no re-skin of any existing dashboard reproduction); adversarial critic MOSTLY → KEEPER after the contrast fix; user eye-gate pending.

> The orphan the registers never covered (per `kits/COVERAGE.md`, backlog #2): `organism-infra-monitoring` / `organism-ops-console`. The existing dashboard / data-table / state-as-shape cookbooks cover KPI cards, sortable tables, and status badges *in isolation* — none teaches the **ops-console composition**: live metrics + status grid + streaming logs + actions as one continuous operational surface. Cool-technical voice (Geist/Geist Mono · dark · dense · hairline · scarce mint), grounded in the Linear/Vercel/Modal lineage. The point is the operational *furniture*, not the voice.

## The decisions I extracted (not traced)

1. **Three bands, zero card chrome.** A live-metric strip → a dense status grid → a streaming log table, stacked full-bleed and separated by hairlines and a 1px-gap grid, never by rounded cards. The whole surface is one continuous console, not a page of widgets. This is the single most important decision — it's what makes it read as an *operator's* surface rather than a marketing dashboard.
2. **Density is the richness.** 13px body, 11px mono meta, 5–8px row padding, tabular-nums everywhere. Richness comes from *considered detail at density* (real service names, real log lines with stack-trace notes and request-depth counters), never from louder color (the cool-technical lesson from `registers.md`).
3. **Status-as-shape at table scale.** Service rows carry a single 3-state pill (Healthy/Degraded/Down → mint/amber/red, tint + word, no redundant left-edge color). The state reads from shape+color at a glance across nine rows.
4. **Status-as-shape at LOG scale (the novel move).** The streaming log is a four-column mono table (ts · level-chip · service · message) where the *message* carries inline token-colored highlights — error strings in red, warning values in amber, the data-subject path/topic in mint, numbers in muted. A glance reads severity and subject from color-shape before reading a single word. This is the pattern no current cookbook holds.
5. **Live signals only where genuinely live.** The topbar Live toggle and the log-panel "Streaming" indicator get the one earned mint glow-dot — because the stream actually is live. Everywhere else the accent is state (active nav) or data (the subject highlight), never decoration. No status-cosplay.
6. **App-shell chrome, left-aligned.** A 200px nav rail (wordmark + env switcher + ⌘K search + nav list with one active item) and a 40px topbar (breadcrumb + time-range segmented chips + Live + an action). Numbers right-aligned in their columns; everything else left-started.

## Where the base / prior cookbooks HELPED

- **`registers.md` cool-technical voice** — Geist/Geist Mono, dark-not-black surfaces with lighter elevation, hairline depth, scarce-cool mint, tabular-nums — all carried straight over.
- **`data-table.md` + `state-as-shape.md`** — the dense row table and the status pill came from these; the console *composes* them, it didn't re-derive them.
- **The two gates** — `check-layout.mjs` confirmed it's a genuinely new skeleton (max 0.60 vs the linear-issue-list shell, below the flag); `check-contrast.mjs` caught the failure below.

## Where the prior library was SILENT (the distillable)

1. **No ops-console composition anywhere.** The library had the *parts* (KPI tile, table, status badge) but never the *operational surface* that stacks live metrics + status grid + streaming logs with no card chrome. → **cookbook candidate: "the ops console (dense operational surface)."** References `registers.md` for the cool-technical voice and `data-table`/`state-as-shape` for the parts; adds only the three-band composition, density-as-richness, and **status-as-shape at log-table scale**.

## The contrast fix (the gate earned its keep again)

The build self-graded contrast as passing and claimed "faint never sits on the lighter elevated surfaces." **False** — the five always-on metric-tile labels were `--faint` on `--surface-raised` at **4.33:1** (static sub-AA), and three more faint tiers (log timestamps, DEBUG chips, deploy SHAs) dropped to **4.05:1 on row hover** — and hover is constant in a console you mouse through all day. This is the *same `--faint`-sub-AA failure prior sets shipped*, and it surfaced as a contrast-gate **warning** that the adversarial critic then confirmed was a **real** failure (the faint text is 11px, not large). Fix: lighten `--faint` #787f8c → **#8a909e**, which clears 4.5:1 on *every* surface including hover (5.1) and active (4.8) while staying a clear step darker than `--muted`. One token. Gate now reads "all pairings ≥ 4.5:1" with zero warnings. Also bumped the level chips 10px → 11px (real data, was below the readable floor) and corrected a false "≤4 accent instances" self-attestation comment.

**The lesson for the gate:** a contrast-gate *warning* on a `--faint` tier against a lighter elevated surface is not noise — if any faint text actually renders on that surface (a tile label, a hovered row), it's a real failure. Verify the warning against on-page usage; don't dismiss it.

## Self-assessment

Reads as a real console an engineer stares at all day, not a mockup: the three-band stack, the dense status grid, and the color-shape log stream all land, and the density is considered (specific varied log lines), not noise. Contrast gate clean after the fix; layout gate confirms it's not a re-skin. Open notes for the cookbook (not the static artifact): the SaaS-playbook empty/loading/error states aren't shown (a static happy-path repro), and the cookbook should call for them.

**Critic verdict: MOSTLY → KEEPER (it cooked); the one static contrast blocker + hover cases + chip floor + false comment all fixed. Cookbook `cookbooks/ops-console.md` distilled. User eye-gate pending.**
