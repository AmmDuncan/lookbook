# Pattern: Motion

**Inherits:** all of `fundamentals.md` unless overridden below — especially F29 (durations), F30 (easing), F31 (reduced-motion), F32 (interactive states), F40 (animated texture).
**Cite as:** `P-MT-<nn>`.

> **Cross-cutting pattern.** Motion is not a page archetype like detail/marketing — it's a layer that applies to *every* surface. Load it whenever a surface ships transitions, state feedback, loading, or reveals. It **refines the F29–F31 floor with concrete per-element recipes** and gates expressiveness by density the way texture is gated by F36.

## Surface intent
Motion's job is to **explain change**, not to decorate. Good UI motion answers three questions the user would otherwise have to guess: *where did this come from* (an element that slides in from the edge it's anchored to), *what just happened* (a press that dips, a row that settles into place), and *what is the system doing* (a skeleton that breathes while data loads). When motion answers none of those — a heading that fades up because every heading fades up — it is texture-in-time: cost with no signal (F35's logic applied to the time axis). The reference frame is the established motion canon: Material Design's duration/easing tokens, Apple HIG's "motion communicates", Disney's principles (anticipation/follow-through) used *sparingly* in UI, and the WCAG `prefers-reduced-motion` requirement as a hard floor.

## Density band (gating, like texture / F36)
Motion expressiveness is **gated by surface density**, exactly as texture is:
- **Data-dense (dashboards, tables, forms, settings):** *functional motion only.* Enter/exit of overlays, state feedback, loading states, list-reorder. No scroll reveals, no signature flourishes, no staggers longer than ~4 items. The user is scanning; motion that isn't explaining change is noise (mirrors F36 "no decorative texture" on dense surfaces).
- **Medium (detail, list, feed, search, checkout):** functional motion + at most one restrained signature moment, used once per view.
- **Spacious (marketing, auth, onboarding, empty/404):** expressive motion earns its keep — scroll reveals (once, sectioned), a signature entrance, richer staggers. Still bounded by the duration band and reduced-motion floor.

## Motion tokens (the calibrated floor)
Calibrated from Material 3 motion + Apple HIG. Define once, reuse everywhere:
- **`--ease-out` (enter):** `cubic-bezier(0.2, 0, 0, 1)` — emphasized-decelerate. Element arrives fast, settles soft. (F30 ease-out for enter.)
- **`--ease-in` (exit):** `cubic-bezier(0.3, 0, 1, 1)` — accelerate away. (F30 ease-in for exit.)
- **`--ease-std` (in-place):** `cubic-bezier(0.4, 0, 0.2, 1)` — standard, for hover/move/resize where the element stays. (F30 ease-in-out for in-place.)
- **Durations:** state feedback 100–150ms · enter 200–300ms · exit 150–200ms · in-place 150–250ms (F29). **Never `linear`. Never < 100ms (reads instant — no feedback) or > 300ms (reads slow) for *UI* transitions.** Marketing scroll reveals may run to ~400–600ms because they are atmospheric, not interactive.

## Calibrations

**P-MT-01. Modal / dialog / sheet — enter 220–260ms ease-out, exit 150–200ms ease-in; transform = translateY 8–16px (bottom sheet larger, up to 24px) + opacity 0→1; backdrop fades 150–200ms in parallel. Mobile bottom sheets slide from the bottom edge.**
Refines: F29, F30. *Why:* the element should arrive *from where it lives* — a sheet from the bottom, a centered dialog with a small rise + fade so it reads as "surfacing", not teleporting. Exit is faster and accelerating (F30 ease-in) so dismissal feels decisive, not draggy. The backdrop and panel are one gesture, timed together.

**P-MT-02. Toast / snackbar — enter 200–240ms ease-out (slide 24–32px from its anchored edge + fade); auto-dismiss exit 150–200ms ease-in; if stacked, siblings reflow with a 150–200ms ease-std move.** Position dictates direction: bottom toast rises, top-right toast slides in from the right.
Refines: F29, F30. *Why:* a toast appearing from the edge it's docked to reads as "the system is telling me something from over there"; a toast that fades in place is ambiguous with a modal. The reflow when one dismisses keeps the stack legible.

**P-MT-03. Dropdown / popover / menu — enter 120–180ms ease-out (opacity + scale 0.96→1 *and/or* translateY 4–8px), transform-origin at the trigger edge; exit 100–150ms ease-in.** Tooltips: enter 100–150ms fade (optional 2–4px rise), exit ~100ms; honor the open-delay (~300–500ms hover intent) but animate fast once shown.
Refines: F29, F30. *Why:* attached overlays are small and frequent — they must feel *instant-ish* (bottom of the band) and grow *from the trigger* (transform-origin), so the eye keeps its anchor. Scaling from center looks like a bubble appearing from nowhere; scaling from the trigger edge looks attached.

**P-MT-04. Page / route transition — keep it minimal: a 150–200ms opacity cross-fade (optionally a 4–8px content rise on enter) is plenty; ≤250ms total.** SPA route changes should not feel like slide-show panels. Shared-element/hero transitions are a *spacious-surface* indulgence, not a default.
Refines: F29. *Why:* route transitions repeat constantly; anything elaborate becomes friction by the tenth navigation. A brief fade signals "new context" without making the user wait. Heavy page-slide transitions are the SPA version of over-animation.

**P-MT-05. List / grid stagger — per-item 180–220ms ease-out (translateY 8px + fade), step delay 30–50ms, cap the cascade at ~5–6 items then snap the rest in together; total cascade ≤ ~300–350ms.** Re-runs only on first load or a genuine dataset change, never on every re-render or scroll.
Refines: F29, F30. *Why:* a short stagger shows the list *assembling* and reads as craft; an un-capped stagger on a 40-row table makes the user wait for the data they came to scan (forbidden on dense surfaces — see density gating). The cap keeps even long lists under the slow threshold.

**P-MT-06. State feedback — hover 100–150ms ease-std (color/elevation/translateY ≤2px); press/active is faster and *immediate* (≤100ms, often a scale 0.97 dip or a brightness drop) — press must feel instant or it reads as lag; focus-visible ring appears with no delay (F34) or a ≤100ms fade.** Disabled has no motion.
Refines: F32, F29, F30. *Why:* F32 demands every interactive atom ship hover/press/focus — this calibrates their *timing*. Press is the one place sub-100ms is correct: tactile feedback must track the finger/click with zero perceived latency. Hover can afford the 100–150ms ease to feel smooth rather than twitchy.

**P-MT-07. Loading — pick by expected wait, and animate accordingly:**
- **< ~100ms:** no indicator at all (would flash). Often: be *optimistic* — apply the change immediately, reconcile on response, roll back on error.
- **~100ms–1s:** **skeleton** that mirrors the final layout (P-DT-10 / F33), with a shimmer sweep 1000–1400ms ease-std looping — the breathing motion signals "working", and the skeleton prevents the reflow a spinner-then-content causes.
- **> ~1s, or unknown/indeterminate:** **spinner** (rotation a steady ~700–1000ms loop — the one acceptable `linear`/steady-rotation exception, since a spinner *is* a mechanical indicator) or a determinate progress bar when progress is known.
Refines: F29, F33. *Why:* the spinner-vs-skeleton-vs-optimistic choice is a motion decision. A spinner for a 200ms fetch flashes annoyingly; a skeleton for an instant action is overkill; an optimistic update for a sub-100ms toggle feels native. Skeletons also double as the F33 loading state and stop layout shift.

**P-MT-08. Scroll reveal — *spacious surfaces only*, fire **once** per element (never re-trigger on scroll-up), reveal **sections/groups** not every heading, 300–500ms ease-out (translateY 12–24px + fade), threshold ~10–20% in view.** Respect reduced-motion by showing everything immediately. Never on product/data surfaces.
Refines: F29; ties the marketing forbidden move "animated text reveals on every section heading". *Why:* a single, sectioned reveal as the reader scrolls into a marketing block reads as intentional pacing; a fade-up on *every* heading, sub-head, and paragraph is the #1 over-animated-marketing tell — it makes the page feel like it's buffering. "Once, grouped, spacious-only" is the boundary between craft and tell.

**P-MT-09. The ONE signature motion — pick a single distinctive motion idea per product, use it sparingly (one moment per view, on a spacious/medium surface), and make it removable.** Examples: a logo mark that settles on first load (scale + rise 280ms ease-out, once), a success checkmark that draws, a hero element with a single restrained spring. It must reinforce brand/feel, not gate usability.
New (parallels the visual "signature move"). *Why:* one memorable motion gives the product a fingerprint; ten "signature" motions give it a seizure. Like the visual signature, it's the deliberate exception to the functional-motion default — removable means the app still works perfectly with it off (and reduced-motion *will* turn it off). Forbidden: making it the loading gate or repeating it on every interaction.

**P-MT-10. Reduced-motion fallback is mandatory on every recipe (F31/F40, Tier-1 accessibility — never yields).** Under `@media (prefers-reduced-motion: reduce)`: replace transform-based motion with an **instant cut or a single ≤1-frame opacity fade**; **kill all looping/animated texture** (shimmer, spinner spin → static or a non-spinning indicator, drifting backgrounds — F40); cancel **all** staggers, scroll reveals, and the signature moment. The information (the modal is open, the toast appeared, the list loaded) must still be fully conveyed without movement.
Refines: F31, F40. *Why:* motion-sensitive users get vertigo from transform/parallax motion; this is accessibility, not preference, and sits in Tier 1 of the precedence ladder — it cannot be declared away. A recipe without a stated reduced-motion fallback is unfinished, the same way a data view without an empty state is unfinished (F33).

## Composition defaults
- **Tokens first:** define `--ease-out / --ease-in / --ease-std` + a small duration scale once; every component references them. No per-component bespoke beziers.
- **Direction follows anchor:** elements enter from where they live (sheet from bottom, popover from trigger, docked toast from its edge). In-place changes use ease-std and stay put.
- **Enter slow-ish, exit fast:** enter 200–300ms ease-out; exit 150–200ms ease-in (F30) — arrivals are noticed, dismissals should feel decisive.
- **One reduced-motion block** at the root that neutralizes transforms, loops, staggers, reveals, and the signature in one place — so no recipe can forget it.
- **Density gate up front:** decide the surface's band before adding any non-functional motion; dense surfaces get the functional set only.

## Forbidden moves
- **`linear` easing on UI motion** (mechanical; F30). The only steady-rate exception is a spinner's rotation (P-MT-07).
- **UI transitions > 300ms** (reads slow; F29). Scroll reveals on spacious surfaces are the only ones allowed to 400–600ms.
- **UI transitions < 100ms for enter/exit** (reads instant, no feedback) — except press/active, which *should* be ≤100ms (P-MT-06).
- **Animated text reveals on every section heading** (the over-animated-marketing tell; P-MT-08 — once, grouped, spacious-only).
- **Any recipe with no `prefers-reduced-motion` fallback** (Tier-1 violation; P-MT-10/F31).
- **Parallax-everything / scroll-jacking** — hijacking native scroll, or parallax on every layer; one restrained parallax atmospheric at most, spacious-only, reduced-motion off.
- **Un-capped staggers on dense data** (the user waits to scan; P-MT-05 + density gate).
- **Decorative motion on data-dense surfaces** — pulsing tiles, animated chart entrances that re-run, hover bounces in a table (density gating; F36's logic on the time axis).
- **Looping/animated texture that ignores reduced-motion** (F40).
- **A "signature" motion repeated on every interaction** (it stops being a signature; P-MT-09).
- **Centered-origin popover scale** (bubble-from-nowhere) instead of scaling from the trigger edge (P-MT-03).

## Sources
Material Design 3 motion (duration tokens, emphasized vs standard easing, transform-origin guidance) · Apple Human Interface Guidelines — Motion ("motion communicates", reduce-motion) · Disney's 12 principles as applied to UI (anticipation, follow-through, slow-in/slow-out → ease) used sparingly · WCAG 2.x `prefers-reduced-motion` (SC 2.3.3 Animation from Interactions) · Refactoring UI (state feedback, restraint) · Lookbook fundamentals F29–F32, F40 · DVLA v2 battle-tested motion — activity deep-link one-shot highlight (fade-once, not looping; reduced-motion static), vehicle-record icon 7s bump-shake gated on `prefers-reduced-motion`, idle-timeout/toast transitions · **Calibration note:** unlike the other patterns, motion is **not Mobbin-calibratable from still screenshots** — see `evidence/motion.md` for why and what the calibration source is instead.
