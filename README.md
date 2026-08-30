# Lookbook

> **Looking for a specific file? `CATALOG.md` is the single source of truth** — every live
> file in this library is listed there, along with what was removed and why.

**Lookbook is a design brain with a render-and-look loop at its core — and a compose-then-skin catalog as the fastest way in.**

An agent-facing reasoning layer (timeless fundamentals, per-surface patterns, a composition grammar, an anti-generic-AI sweep) wired to a perception loop: it builds the screen, renders the real pixels, *looks*, and iterates — against what it sees and your eye — instead of emitting code it never views. Design **intelligence + a way of seeing**, on whatever stack you already use. It is not a component library; bring your own components.

It also **asks before it designs and after it presents**: a *Frame-it intake* pulls your direction (personality, accent, density, platform) up front, and a *Review intake* pulls your reaction afterward and revises on it — so the result converges on your eye, not the model's.

---

## Ways to use it

Pick the entry point that fits the task — they all share one token system, so output stays consistent across them.

| You want to… | Reach for | How |
|---|---|---|
| **Build a full screen, fast** | compose-then-skin | "build me a `<archetype>`" / `reskin` / `relayout` — pull a composition from the 40-recipe catalog, drop one skin |
| **Design inside an existing app** | Mode B (design guide) | borrow Lookbook's tokens/recipes/styling, build on the app's *own* components — nothing imported |
| **Adopt the system directly** | Mode A | install `@lookbook/tokens`, build primitives to the gallery specs |
| **Explore options** | N directions | "show me 3 directions" — genuinely distinct (composition / visual / shell), one token set |
| **Judge & verify any UI** | the gates | render-and-look loop + `depth-rubric.md` · `archetype-completeness.md` · `CHECKLIST.md` · `scripts/*.mjs` |
| **Review a skill's wording** | the Mira persona | point `PERSONA-skill-design-advisor.md` at any skill's description/usage |

It also **auto-triggers** in Claude Code on any UI/design/exploration request — and deliberately *won't* fire on pure logic/backend work or faithful reproduction of an off-system external design.

---

## Compose-then-skin — the fastest correct start

> **A screen = COMPOSITION × SKIN.** Composition is the skeleton (shell · where filters/actions/nav live · table-vs-cards · what's pinned · how it reads). Skin is the paint (color · type · radius · elevation · density · accent tokens). They're **orthogonal** — pick a composition, drop a skin on it, change either without disturbing the other. **Variety lives in composition; consistency lives in skin.** Five palette reskins of one layout = one design, not five.

**The flow** (`RESKIN.md` drives it; catalog in `harvest/HARVEST.md`, worked HTML in `harvest/specimens/`):

1. **Identify** the archetype + job (view- vs edit-oriented). One of 20: analytics · list-table · list-grid · **detail** · dashboard-home · search · reports · kanban · inbox · calendar · activity-feed · admin · settings · create/edit · checkout · auth · pricing · profile · empty-states · error-pages.
2. **Pull** the matching composition from the catalog (each archetype ships 5 composition-distinct variations + *why the pieces team up*). Open its specimen as the reference skeleton.
3. **Lock it in a neutral skin** so structure is judged on its own.
4. **Apply ONE skin** uniformly (your brand tokens — discover them from the project theme, don't invent).
5. **Render + run the gates**, then iterate on two independent levers: **`reskin`** (swap the paint, layout fixed) · **`relayout`** (swap the structure, skin carried).

> **Adapt, don't transplant.** Specimens teach the *bones*, not the bytes — learn the composition and rebuild it on your tokens/components. A raw specimen dropped into a real app un-remapped is an off-system tell.

<details>
<summary><b>Worked example — a DVLA vehicle service-detail page</b></summary>

1. **Identify** → *record-detail*, mostly view-oriented (you read a service record; some inline edits). Archetype: `detail`.
2. **Pull** → `harvest/specimens/Composed Recipe - Detail Record Page.html` — 5 compositions. For a service record with a status hero, key facts, tabs (overview / invoice / history) and a side rail, the **"hero + summary rail"** composition fits: status hero owns the top, a `1fr / 320px` rail pins the invoice/payment summary, tabs section the body.
3. **Neutral skin** → render the skeleton grey first; confirm the hierarchy reads (status pill loudest, key facts scannable, rail clearly secondary).
4. **DVLA skin** → one accent from the project theme (`assets/css/tailwind.css` / `config/theme.ts`), status tokens for the service-state pill, system-sans + tabular figures for the reg/VIN/amounts. Apply across hero, rail, tabs uniformly.
5. **Verify** → contrast gate on the status pill + amounts; `archetype-completeness.md` *detail* block (404/403 as their own states, per-panel error, the edit-window gate); render at 1280/768/390 and look.

Result: the same record renders coherently, and a driver-detail or vehicle-detail page can pick a *different* composition (e.g. "tabbed master-detail") while sharing the exact same pill, tabs, and tokens. Run `reskin` to rebrand it, `relayout` to switch the rail to a stacked layout — each a one-lever move, not a rebuild.

</details>

---

## Getting started

Plain markdown — any agent that can read files can use it. Clone once, then point your tool at it.

```bash
git clone https://github.com/AmmDuncan/lookbook.git ~/work/tools/lookbook   # or anywhere
```

**Claude Code** (auto-triggers as a skill):
```bash
ln -s ~/work/tools/lookbook ~/.claude/skills/lookbook
```
Restart Claude Code. Any UI request ("build me a detail page", "reskin this", "show me 3 directions") loads the brain automatically. Confirm with `/skills` (you should see **lookbook**).

**Codex** (and other agent CLIs that read `AGENTS.md`): work from inside the repo — `AGENTS.md` at the root onboards the agent (it reads `SKILL.md` before any UI work). If your tool doesn't auto-read it: *"Read `SKILL.md` in this repo and follow it for the UI work below."*

**Any other agent / model:** one instruction — *"Read `SKILL.md`, then for a full screen `harvest/HARVEST.md` + `RESKIN.md`; pull the matching composition from `harvest/specimens/`, skin it, build it as an HTML file, render it (headless Chrome) and look at the pixels, iterate to genuinely-good, then verify with `CHECKLIST.md` and `scripts/check-contrast.mjs`."*

**Smoke test** (paste into any of the above):
> Using Lookbook, build me a record-detail page for a SaaS invoice. Pull the composition from the catalog, skin it, render and look, then verify.

You should get a composition pulled from the catalog, a rendered mockup citing `F`/`P-` rule IDs, and a passing contrast gate.

---

## The layers — pull each on demand

From fastest-start to deepest:

- **`harvest/HARVEST.md` + `RESKIN.md` + `harvest/specimens/`** — compose-then-skin. The 20-archetype catalog, the build command, and 40 worked specimens (self-contained — a recipe pull resolves locally). **Start here for a full screen.**
- **`the-design-brain.md`** — the principles spine (the *why*): 5 laws, the Job→Hierarchy→Grid→Tokens→Components→States→Polish process, the type/space/color/depth/motion scales, anti-slop. `fundamentals.md` is the cited-rule floor (`F`-IDs) it distills.
- **`cookbooks/`** — per-surface recipes earned by reproducing a real screen. When your surface matches one, it beats `patterns/*` for that surface.
- **`depth-rubric.md` + `verification.md` + `archetype-completeness.md` + `CHECKLIST.md`** — judge & verify: the depth floor, the gates + receipt, the per-archetype "don't forget" floor, and the runnable pass.
- **`PERSONA-skill-design-advisor.md`** — "Mira", a senior-DS + skills-author lens for reviewing a *skill's* description/usage (meta, not screen design).

---

## What's in it

```
lookbook/
├── SKILL.md                      # ⭐ the entry point — how an agent USES the brain (read first)
├── RESKIN.md                     # the compose-then-skin command (reskin / relayout)
├── AGENTS.md                     # auto-onboarding for Codex & agent CLIs → points at SKILL.md
├── harvest/
│   ├── HARVEST.md                # the 20-archetype composed-recipe catalog + component dictionary
│   └── specimens/                # 40 worked HTML specimens (recipes + atom/molecule galleries)
├── the-design-brain.md           # the principles spine (the why)
├── fundamentals.md               # F-rules — timeless design fundamentals, cited by ID
├── cookbooks/                    # per-surface recipes earned by reproducing real screens
├── patterns/                     # per-surface + cross-cutting calibrations (dashboard · form · detail ·
│                                 #   states · motion · mobile · a11y · identity · approach · …)
├── depth-rubric.md               # the depth floor (is it flat?)
├── archetype-completeness.md     # per-archetype "don't forget" states/pieces
├── verification.md               # the gates + the verification receipt
├── anti-patterns.md              # the generic-AI "tells" sweep
├── CHECKLIST.md                  # the runnable verification pass
├── PERSONA-skill-design-advisor.md  # "Mira" — review a skill's wording at the right altitude
├── scripts/                      # check-contrast · check-focus · check-layout · contrast (zero-dep gates)
├── apps/gallery/                 # the canonical VISUAL spec (human reference)
├── kits/                         # runnable token+atom registers (untrusted until re-earned)
└── packages/tokens/              # the token contract to copy/reference
```

**Bring your own components.** Lookbook guides the *design*; you keep your own primitives (it never gets imported as a dependency). It makes whatever component layer you already have produce good UI.

---

## How it works

An agent loads **`SKILL.md`** and, for a full screen, runs compose-then-skin; for everything it then applies the loop:

1. **Frame-it intake** — for a new surface or redesign, it asks the framing inputs first (personality · accent · theme · platform · scope). Never guesses the dials.
2. **Compose, then skin** — pulls the archetype's composition from the catalog, locks it neutral, applies one skin; or generates 2–3 directions of one clean system (*converge on vocabulary, diverge on composition*).
3. **Render and look** — builds an HTML mockup and **renders it**, because rules can't see flatness — only looking at the pixels can.
4. **Verify** — the depth rubric, the per-archetype completeness floor, the `fundamentals.md` `Check:` lines, the anti-pattern count, and the `check-contrast.mjs` gate (hard, blocking).
5. **Review intake** — presents the result and asks what you'd change (incl. "does any part feel flat?" and, for editable surfaces, "would it be tiresome to use repeatedly?"), then revises — so the design lands on *your* eye, not the model's.

---

## Refreshing the gallery & specimens

When Claude Design adds/updates a chapter, re-export and:

```bash
bash scripts/sync-gallery.sh ~/Downloads/Lookbook.zip
```

This syncs the section HTML/CSS into `apps/gallery` and the shared `tokens.css` into `packages/tokens`. To refresh the **specimens**, export the Lookbook Specimens design project as a zip and drop the top-level `*.html` into `harvest/specimens/` (byte-exact — far more reliable than transcription).

## View the gallery

```bash
npm run gallery   # serves apps/gallery at http://localhost:4444 (static HTML, no build)
```
