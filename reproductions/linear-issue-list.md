# Reproduction #1 — Linear, issue list (dense app)

**Domain:** SaaS / app · **Target:** a real shipped project-management issue tracker, grouped "All issues" list (dark).
**Reference:** `_ref/linear-issue-list.png` (study reference, eyedrop only — not pixel-measured).
**Build:** `linear-issue-list.html` → render `linear-issue-list@2x.png`.
**Gate:** easel #63 (real stacked above reproduction). Status: **awaiting user eye-gate.**

---

## The decisions I extracted (not traced)

The screen's whole identity is **restraint**: there is almost no loud move. The craft is in five decisions.

1. **Hierarchy by opacity, not size.** Every row is the same type size. Only the issue *title* sits at full ink (`#eeeef0`); ID, parent breadcrumb, project, labels, dates all recede to one muted cool blue-gray (`#8a8f98`). Squint and you read a clean column of titles — nothing else competes.
2. **No row dividers.** Issue rows are separated by rhythm (36px) + hover alone. Zero hairlines between rows. The list *breathes*; lines would make it a table.
3. **State as shape, not color.** Status is an icon system — todo = open ring, in-progress = amber pie, done = filled check, backlog = dashed ring. Color reinforces but shape carries the meaning. (This is the correct answer to the AP28 "status-cosplay" tell.)
4. **Dark done right.** Surface is `#08090a`/`#0f1011` — not pure black. Neutrals tinted cool. Text is off-white, never `#fff`.
5. **Accent scarcity.** The indigo appears only on the active nav item and the in-progress/done status marks. Everywhere else is neutral. 60-30-10 held hard.

Supporting: 4px spacing scale, 13px workhorse / 12px meta, tabular-nums on IDs+dates, Geist (a grotesque with a point of view — deliberately *not* default Inter), a raised content panel meeting the sidebar at one hairline + one rounded corner.

---

## Where the base HELPED (it carried most of the screen)

- **§3 Type** — "a typeface with a point of view, set impeccably" → Geist over default Inter; tabular-nums; tight scale (13/12). Directly applicable.
- **§4 Color** — dark-not-pure-black, tinted neutrals, OKLCH-even ramp thinking, 60-30-10 accent scarcity, "don't signal with color alone." All load-bearing here.
- **§5 Space** — the 4px scale and the density dial (§5 "power dashboard: tight rows, 13–14px, still on the scale") produced the row rhythm directly.
- **§6 Depth** — "prefer hairline borders over shadows; shadows only for things that float." The whole screen has zero resting shadows.
- **§8 Components** — status-set discipline ("one icon set, one stroke"), tabular numbers, the dense row-height band (32–36px).
- **§12-A Dashboard playbook** — "very neutral; accent reserved for primary/active; status colors functional only." This *is* the screen.
- **§11 Slop avoidance** — steered away from default-Inter, everything-in-a-box, gradient soup.

The base is a genuinely good operating system for this screen. It did not need invented machinery.

## Where the base was SILENT or WRONG (the distillables)

1. **§3 hierarchy order was wrong for dense data.** The base says hierarchy is "size → weight → color/opacity, in that order — reach for size first." This screen *inverts* that: size is held constant and **opacity carries hierarchy entirely.** The base names opacity last; for dense data rows it's first. → **cookbook candidate: "hierarchy by opacity in dense rows."**
2. **§6 buried the better list move.** §6's headline is "prefer borders over shadows," with the no-divider option as a parenthetical ("space often removes the need for a divider — try that first"). Following the headline, I reached for a hairline on every row first — and it was visibly the *lesser* choice; the real screen used the parenthetical. The base permitted the worse option as its default. → **cookbook candidate: "dense lists separate by rhythm + hover, not dividers."**
3. **§8/§4 has no state-icon-system playbook.** The base says "one icon set, one stroke" and "don't signal with color alone," but gives no recipe for an *iconographic state system* where shape is primary and color secondary. That system is exactly the antidote to the AP28 status-cosplay tell that triggered this whole rebuild — and the base is silent on it. → **cookbook candidate: "state as shape (the status-cosplay antidote)."**
4. **App-shell seam unspecified.** §12-A names the left-nav-plus-canvas shell but not the seam treatment (flush sidebar → slightly-raised panel, one hairline, one rounded corner). Minor; a cookbook detail, not a base gap.

## Build misses (mine, not the base's)

- The raised content panel is *too* subtle in my render — `--surface` could lift one more step off `--bg` to make the seam read at a glance.
- Geist load not yet verified at the byte level (render looks like Geist, not the Inter fallback, but I should confirm with a webfont probe before trusting it).

---

## Score (my eye — pending the user's, which is the one that counts)

Reproduces convincingly: structure, opacity-hierarchy, density, palette, and the status/priority iconography all land close to the reference. The base supplied ~90% directly; the gaps are four distillable patterns, not missing fundamentals — which is the experiment's exit signal (the base needs *cookbooks layered on top*, not a rewrite).

**Cookbooks will be written only after the user confirms the reproduction landed** — the whole premise is that my eye runs generous, so a self-graded "it's great" doesn't earn a cookbook.
