# Pattern: Empty States & Error Pages

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-ES-<nn>`.

> **Canonical cross-cutting spec.** Every other pattern owns its *populated* surface and merely gestures at its empties (P-DT-10 "each sub-section loads and empties separately"; P-D, P-F, P-A all invoke F33). This file is the one place the *six kinds of empty/error moment* are specified in full — copy, action, tone, texture. Other patterns point here for the moment; they keep owning the *layout* the moment renders inside.

## Surface intent
The states most products ship cheaply — the screen with **nothing on it yet**, **nothing matching**, or **something broken**. They are not edge cases; they are the first thing a new user sees, the thing a power user hits ten times a day filtering a list, and the thing that decides whether a failure reads as "this product is solid" or "this product is flaky." A polished empty state is worth ten polished happy paths (F33). The job is never "fill the void" — it is to **tell the user exactly where they are and hand them the one next move.** A sparse surface with one clear action beats a busy surface with a shrug.

## The six types — each is a different moment, with different copy + action + tone
The single most common failure is treating all of these as one generic "empty" component. They are not. The *moment* dictates everything:

| Type | The moment | Tone (F73) | Headline says | Primary action |
|---|---|---|---|---|
| **First-run / onboarding empty** | New user, nothing created yet | **Warm, aspirational** | what they could make | **one "create"** verb (F68) |
| **Filtered / no-results empty** | Their query/filter matched nothing | **Helpful, recovery-first** | nothing matched *this* | **clear / broaden** the query |
| **Genuine error** | The system failed (500, fetch failed) | **Calm, factual** (F69) | what went wrong, plainly | **retry** |
| **404 not found** | The route/record doesn't exist | **Orienting, lightly warm** | this page isn't here | **go home / search** |
| **403 / permission** | They're authed but not allowed | **Respectful, not a wall** | who can grant access | **request access / contact** |
| **Offline / load-failed** | Connection dropped | **Calm, reassuring** | you're offline, we'll retry | **retry** (often auto) |

Reading reality (`evidence/empty-states.md`) confirmed the split is real and that **tone is the variable that flexes most**: jokiness (`Oooops`, "good news / bad news") showed up on a 404 (Sana) and an offline screen (Quicken) — moments that aren't the user's fault and aren't urgent — but **never** on a genuine connection/timeout error (Zoom, Udemy stayed flat and factual). That is exactly F73, observed in the wild.

## Density band
**Sparse (F26).** A single centered (or hero-left) content cluster floating in a large empty surface — that emptiness is *the design*, not a layout to fill. Cluster max-width 360–480px for the centered form; the surrounding canvas stays open. Vertical rhythm inside the cluster is generous: icon/illustration → ~16–24px → headline → ~8–12px → help line → ~20–28px → action. Because the surface is sparse, **texture earns its keep here** (F36) — see P-ES-09.

## Shared anatomy (every type, top to bottom)
1. **Optional icon or illustration** — sized for a display moment (32–48px icon, or up to 64–96px illustration; F43), brand palette only (F48), and **doing a job** (F49): orienting glyph for 404, a "no matches" magnifier for no-results, a warm scene for first-run. Never decorative filler. A state with *no* image beats one with a meaningless one.
2. **Headline** — sentence case (F67), one line, says where the user is. "No forms yet", not "Empty State" and not "OH NO!".
3. **One line of help** — adds what the headline can't (F70); no filler, no restating. For no-results it names the recovery ("Try another search, or adjust the filters"); for error it says what to do next.
4. **ONE primary action** (F16), labelled with its verb (F68) — "Create form", "Clear filters", "Try again", "Back to home". At most **one ghost/text secondary** beside it ("Learn more", "Report problem"). Never two equal CTAs (AP18).

## Calibrations

**P-ES-01. First-run empty is warm and aspirational, sells the *first creation*, and carries exactly one primary "create" CTA.** Headline names the outcome ("Create your first assessment", "No forms yet" + "let's get started"); help is one encouraging line; primary is the create verb; a ghost "Learn more" / "How it works" is the only allowed second action.
Refines: F33, F73, F16, F68. *Why:* this is the new user's first real screen — it must pull them into the one action that makes the product valuable, not present an empty grid. Evidence: Kajabi (big "Create your first assessment" headline + illustration + `Get started` primary / `Learn more` ghost), Tally ("No forms yet" / "Roll up your sleeves and let's get started" / `Create form`), Aboard ("No onboardees" / `New onboarding`), Typeform ("Come on in, jane" / `Create typeform` — warmth can go personal) — all warm, all exactly one create CTA (`evidence/empty-states.md`).

**P-ES-02. Filtered / no-results empty is a recovery point, not a dead end: it echoes the query, explains nothing matched, and offers a one-tap way back (clear filters / broaden / back to all).**
Refines: F33, F69. *Why:* the user got here by *doing* something (searching, filtering); the screen's job is to undo it cheaply, never to strand them. Evidence: Mixpanel & Midday ("No results" / "Try another search, or adjust the filters" + `Clear filters`), OpenSea ("No items found for this search" + `Back to all items`), Dovetail ("No results were found. Adjust your search to try again."). Every real no-results screen offered a recovery action — none was a dead end (`evidence/empty-states.md`).

**P-ES-02a. Show the query that returned nothing** when the surface searched for it — "No results for 'meal'" reads far better than a bare "No results". Echo the term (and active filters) so the user sees *what* matched nothing.
New. *Why:* confirms the user the system understood them, and makes "clear it" obvious. Midday/Mixpanel keep the search term visible in the field above the empty; the strongest no-results states name the query inline.

**P-ES-03. Genuine error is calm and factual: a one-line plain-language "what happened" (no codes, no blame, no jargon), then a retry as the primary, with "report / contact" as the only secondary.**
Refines: F69, F73. *Why:* a failure is the moment trust is won or lost; a quip reads as the product not taking the user's problem seriously. Evidence: Zoom ("Your network connection has timed out or your organization has disabled access… Please verify your network connection" + `Retry` primary, `Report Problem` + `Leave` secondary) and Udemy ("Connection error / Trying to reconnect…") both stayed flat and factual — **neither joked** (`evidence/empty-states.md`). Surface a support/error reference only as fine print, never as the headline (contrast Google's "404. That's an error" — fine for a 404, wrong for a real failure).

**P-ES-04. 404 orients and routes home: name that the page isn't here in plain words, then one primary "back home" (or a search box).** Light warmth/personality is allowed here (a 404 is not the user's fault and not urgent) but stays brief.
Refines: F73, F16. *Why:* the user is lost, not failed; the job is a fast way back, not an apology. Evidence: Headspace (mascot + "You've found a page that doesn't exist" / "Breathe in, and on the out breath, go back and try again" / `Back to Home` — full brand voice), Unsplash (dark photo hero + "Page not found" / "Hmm, the page you were looking for doesn't seem to exist" / `Back to Unsplash`), Sana ("404 / Oooops. Nothing to see here" / `Take me home`), Google ("404. That's an error" + broken-robot illo). The 404 is where the brand's personality is *welcome* — but it still routes home in one tap.

**P-ES-05. 403 / permission is a doorway, not a wall: state plainly that they don't have access, name *who can grant it* (admin / owner), and offer "request access" or "contact owner" — never a bare "Access denied".**
New. *Why:* the user is legitimate (they're signed in); stranding them with "Forbidden" wastes the relationship. The recovery is social — point them at the human who can unblock them. Mirrors P-ES-02's recovery-first stance for the permission moment. (No 403 in the captured set — the rule is reasoned from F69/F73 + the universal recovery-action finding; flagged as such, not claimed as observed.)

**P-ES-06. Offline / load-failed is calm and reassuring, names the connection as the cause, and retries — automatically where possible, or with a manual "try again".** May carry light warmth since it's transient and not the user's fault.
Refines: F73, F69. *Why:* connection drops are temporary; the tone is "we've got it, hang on", not alarm. Evidence: Udemy auto-retries ("Trying to reconnect… Please, wait"), Quicken turns the wait into a *draw-while-offline* activity with a light "there's good news and bad news" framing — warmth is fine here precisely because it's offline, not a hard failure (`evidence/empty-states.md`).

**P-ES-07. Headline ≤ ~6 words, sentence case (F67); help text ≤ ~2 lines and adds the next move, never restates the headline (F70).** "No results" + "Try another search, or adjust the filters" — the help carries the *recovery*, the headline carries the *state*.
Refines: F67, F70. *Why:* the empty surface is read in a glance; padded copy is skipped. Every reference screen's help line did a distinct job from its headline (`evidence/empty-states.md`).

**P-ES-08. Exactly one primary action; at most one ghost/text secondary (F16). Verb labels (F68).** "Create form" / "Clear filters" / "Try again" / "Back to home" — never "OK", "Submit", or two filled buttons side by side.
Refines: F16, F68, P-F-04. *Why:* the whole point of the state is to hand over *one* next move; two equal CTAs reintroduce the decision the empty screen exists to remove (AP18). Reference screens were near-unanimous: one filled primary, optional ghost (`evidence/empty-states.md`).

**P-ES-09. Texture earns its keep here (sparse surface, F36) — but at most one device (F37): an atmospheric background OR a single illustration/device, never both, never a grid of decoration.** A 404 may use a full-bleed photo or dark hero (Unsplash); a first-run may use one warm illustration (Kajabi, Tally). The illustration must do a job (F49) — orient, set tone, or show the thing-to-be-created — not fill space.
Refines: F36, F37, F49. *Why:* this is one of the few product moments F36 *invites* texture (sparse band) — but the invitation is for one intentional device, not a busy collage. Evidence: Unsplash's earth photo, Headspace's mascot, Kajabi's illustration — each carries the whole atmosphere alone (`evidence/empty-states.md`).

**P-ES-10. The empty/no-results/error state renders *inside the surface it belongs to*, at the right scope — full-page for 404 / 403 / first-app-load; region-scoped for an empty list, a failed widget, a no-results table.** A failed dashboard card retries *itself*; a 404 takes the whole viewport. Don't blow a region-empty up to a full page, and don't bury a route-level 404 inside a card.
Refines: F33, P-DT-10. *Why:* scope is the tell that the state was reasoned, not stamped. A scoped empty keeps the rest of the app usable (the sidebar, the other widgets); a full-page 404 means there's nothing else to keep. Evidence: OpenSea/Mixpanel/Midday no-results render *in the content region* with the shell intact; Unsplash/Sana 404s own the whole viewport (`evidence/empty-states.md`).

**P-ES-11. The empty state's geometry matches the populated state it replaces (F33 skeleton spirit): a list's empty sits where the list would; a centered hero-empty (404/first-run) centers in the content area.** Don't shove a region-empty to the top-left corner of an otherwise-empty card.
New. *Why:* an empty placed where the content *will* be reads as "ready and waiting"; an empty floating in a random corner reads as broken. Optical-centering applies — center in the *visible content area*, not the literal viewport (account for the sidebar).

## Composition defaults
- **Region-scoped empty** (empty list, no-results table, failed widget): centered cluster within the region's bounds — icon (32–48px) → headline → help → one action. The app shell, filters, and sibling content stay live around it.
- **Full-page state** (404 / 403 / first-app-load / total-failure): centered cluster (or hero-left with illustration right, à la Kajabi) in the content viewport; may carry one texture device (P-ES-09). Keep the global nav/logo so the user can escape even if the primary action is ignored.
- **First-run**: warmest of the set — aspirational headline, one create CTA, one encouraging help line, optional ghost "Learn more"; illustration optional but on-brand (F48).
- **No-results**: echo the query (P-ES-02a), recovery action primary; if a "broaden" and a "clear" both make sense, the broader/safer one is primary, the other ghost.
- **Error / offline**: plain cause line, retry primary, report/contact ghost; offline may auto-retry with a quiet spinner instead of a button.
- **Mobile** (F50): the cluster stays centered and shrinks; illustration scales down first, then drops below ~48px; the one action becomes full-width; touch target ≥44px (F52). Nothing is dropped.

## Forbidden moves
- **One generic "empty" component for all six moments** — same icon + "Nothing here" + no action, reused for first-run, no-results, and a 500. The types need different copy, action, and tone (the whole point of this pattern).
- **A sad-face emoji or "Oops!" jokiness in a *genuine* error.** Calm and factual in failure (F73; Zoom/Udemy stayed flat). Light personality is allowed on 404/offline — *not* on a real system failure.
- **A dead-end with no way forward** — "No results" / "Access denied" / "Something went wrong" with no action. Every state hands over the next move (P-ES-02/03/05/08).
- **Decorative illustration with no job** — a generic spot illustration that orients nothing, sets no tone, shows nothing to be created (violates F49; the empty-surface face of decorative filler).
- **Error copy that exposes the system** — "Error 422", "null pointer", "fetch failed", a stack trace, a DB field name (F69, F73). Plain language only; a reference code goes in fine print at most.
- **Help text that restates the headline** — "No results" / "There are no results" (F70). The help carries the recovery, not an echo.
- **Two equal-weight CTAs** in an empty state (AP18; P-ES-08).
- **Blowing a region-empty up to full-page** (or burying a route-404 in a card) — wrong scope (P-ES-10).
- **A 403 rendered as a bare wall** ("Forbidden") with no path to request access or contact the owner (P-ES-05).
- **Texture collage** — illustration + atmospheric bg + grain all at once on the sparse surface (F37; one device only, P-ES-09).

## Sources
Refactoring UI (Wathan & Schoger) · NN/g (empty states, error message guidelines) · F33 (four data states), F69 (error copy = problem + fix), F70 (no filler), F73 (tone matches the moment), F36/F37/F43/F48/F49 (texture & imagery on sparse surfaces), F16/F68 (one primary, verb labels) · cross-refs P-DT-10 (per-region states), P-F-04 (primary placement), AP18/AP19 · **Mobbin reference study (Tally, Aboard, Typeform, Kajabi · OpenSea, Dovetail, Mixpanel, Midday · Unsplash, Headspace, Sana AI, Google · Quicken, Udemy, Zoom) → `evidence/empty-states.md`** (six-type split, recovery-not-dead-end, tone-flexes-by-moment, one-primary-CTA, query-echo, scope, texture-earns-its-keep).
