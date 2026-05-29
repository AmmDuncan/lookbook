# Evidence — Empty States & Error Pages (P-ES calibration)

Method: studied 15 real web empty/error screens across the five moments that products most often ship cheaply (first-run empty, filtered/no-results, genuine error, 404, offline). Read by **(a) craft to learn** and **(b) how the rules apply** — where reality confirms a rule, calibrates a number, or shows the rule needs *scope*. The strongest calibration here is a *scope* catch: tone (F73) is not constant across the types — jokiness is fine on a 404/offline and forbidden in a real error, and reality drew that line cleanly. 2026-05-29.

Screens, by moment:
- **First-run / onboarding**: Tally (Forms — "No forms yet"), Aboard (Onboarding — "No onboardees"), Typeform (Workspace — "Come on in, jane"), Kajabi (Assessments — "Create your first assessment").
- **Filtered / no-results**: OpenSea (Profile/Collected — "No items found for this search"), Dovetail (Insights search — "No results were found"), Mixpanel (search — "No results"), Midday (search — "No results").
- **404**: Unsplash ("Page not found", dark photo hero), Headspace ("You've found a page that doesn't exist", mascot), Sana AI ("404 / Oooops"), Google Gemini ("404. That's an error", broken-robot illo).
- **Offline / error**: Quicken (offline — "good news and bad news", draw-while-offline), Udemy (Workspaces — "Connection error / Trying to reconnect…"), Zoom ("Joining Meeting Timeout or Browser restriction" + Retry).

## Rule-application reading

| Rule | What real empty/error screens do | Verdict |
|---|---|---|
| Six-type split (P-ES intro) | first-run (Tally/Aboard/Typeform/Kajabi) reads warm + "create"; no-results (OpenSea/Mixpanel/Midday/Dovetail) reads recovery; error (Zoom/Udemy) reads factual; 404 (Unsplash/Headspace/Sana/Google) reads orienting; offline (Quicken/Udemy) reads reassuring | **CONFIRM the split is real**: copy, action, and tone differ by moment. The generic one-size "empty" component is the tell to forbid. |
| First-run is warm + one create CTA (P-ES-01) | Kajabi big "Create your first assessment" + illustration + `Get started` / ghost `Learn more`; Tally "No forms yet / Roll up your sleeves and let's get started" + `Create form`; Aboard "No onboardees" + `New onboarding`; Typeform "Come on in, jane / Grab a hot cuppa…" + `Create typeform` | **CONFIRM → P-ES-01**: all warm, all exactly one create CTA, ≤1 ghost secondary. Typeform shows warmth can go personal (uses the user's name). |
| No-results is recovery, not dead-end (P-ES-02) | Mixpanel & Midday "No results / Try another search, or adjust the filters" + `Clear filters`; OpenSea "No items found for this search" + `Back to all items`; Dovetail "No results were found. Adjust your search to try again." | **STRONGLY CONFIRM → P-ES-02**: every no-results screen offered a one-tap recovery; **none was a dead end**. Fed the forbidden "dead-end with no way forward." |
| Echo the query (P-ES-02a) | Midday/Mixpanel keep the search term visible in the field above; OpenSea says "for this search" | **CALIBRATE → P-ES-02a**: name the query that matched nothing — "No results for 'meal'" beats a bare "No results". |
| Genuine error is calm + retry (P-ES-03) | Zoom "Your network connection has timed out or your organization has disabled access… Please verify your network connection" + `Retry` primary / `Report Problem` + `Leave`; Udemy "Connection error / Trying to reconnect…" | **CONFIRM → P-ES-03**: factual cause line, retry primary, report/leave secondary. **Neither joked.** No raw codes/jargon shown to the user. |
| 404 orients + routes home, warmth OK (P-ES-04) | Headspace mascot + "You've found a page that doesn't exist / Breathe in, and on the out breath…" + `Back to Home`; Unsplash dark photo + "Page not found / Hmm… doesn't seem to exist" + `Back to Unsplash`; Sana "404 / Oooops. Nothing to see here" + `Take me home`; Google "404. That's an error" | **CONFIRM + SCOPE → P-ES-04**: 404 is where brand personality is *welcome* (Headspace's full voice, Sana's "Oooops") — but it still routes home in one tap. |
| Offline is reassuring, may be warm (P-ES-06) | Udemy auto-retries ("Trying to reconnect… Please, wait"); Quicken "there's good news and bad news… until we support working offline, you can draw a picture" | **CONFIRM → P-ES-06**: transient, not the user's fault → calm/warm is fine; auto-retry where possible. |
| Tone flexes by moment (F73) | jokiness on Sana's **404** ("Oooops") and Quicken's **offline** ("good news / bad news") — but Zoom & Udemy **genuine errors stayed flat and factual** | **SCOPE-CALIBRATE F73 → the line is the moment**: light personality on 404/offline (not the user's fault, not urgent); calm-only in a real failure. This is the single most important read of the study. |
| One primary, ≤1 ghost (P-ES-08, F16) | Kajabi `Get started` + ghost `Learn more`; Zoom one filled `Retry` + ghost `Report Problem`/`Leave`; all no-results one recovery button | **CONFIRM F16 → P-ES-08**: near-unanimous one filled primary; secondary always ghost/text, never a second filled CTA. |
| Texture earns its keep (P-ES-09, F36) | Unsplash full-bleed earth photo (dark hero), Headspace mascot, Kajabi illustration, Quicken color-palette device — **one device each**, none stacked | **CONFIRM F36/F37 → P-ES-09**: sparse surface invites *one* intentional texture/illustration that carries the whole atmosphere; no collage. Google's broken-robot illo *does a job* (signals breakage) per F49. |
| Scope: full-page vs region (P-ES-10) | no-results (OpenSea/Mixpanel/Midday) render **in the content region**, shell + filters intact; 404s (Unsplash/Sana) own the **whole viewport** | **CALIBRATE → P-ES-10**: scope tracks what failed — a list-empty keeps the app usable around it; a 404 has nothing to keep. |
| F43 image size / F48 palette | display-moment illustrations 48–96px; all in-brand neutrals + one accent (Kajabi blue, Headspace pink mascot) | CONFIRM display sizing + brand-palette-only. |
| F67 sentence case / F68 verbs | "No forms yet", "No items found for this search", `Create form`, `Clear filters`, `Try again`, `Back to Home` | CONFIRM: sentence-case headlines, verb-labelled buttons throughout. |
| F70 help adds the next move | "No results" + "Try another search, or adjust the filters" — help carries the recovery, not an echo | CONFIRM → P-ES-07: every help line did a distinct job from its headline. |

## The dynamic-generation lesson
Empty/error screens vary by **the moment, not a template**: first-run pulls toward *creating* (warm, aspirational, one create CTA); no-results pulls toward *recovering* (echo the query, clear/broaden); error pulls toward *retrying calmly* (plain cause, retry); 404 pulls toward *escaping* (orient, go home, personality welcome); offline pulls toward *waiting reassured* (auto-retry). The constant is the anatomy — optional image that does a job → sentence-case headline → one help line → one primary action; the **copy, the action verb, and especially the tone flex to which of the six moments this is.** Stamping one generic "empty" component across all six is the tell.

## Over-strict / wrong-rule catches (the strongest calibrations)
- **Tone is not constant — F73 needed *scope*, not a flat "be calm".** Reality drew the line precisely: Sana's "Oooops" 404 and Quicken's "good news / bad news" offline are *good* (the moment isn't the user's fault and isn't urgent), while Zoom's and Udemy's genuine connection errors stayed flat. A naive "never be playful in any failure state" would have wrongly flagged the 404s. → P-ES-04/06 allow warmth on 404/offline; P-ES-03 + the forbidden move keep jokiness *out of genuine errors*.
- **No-results is universally a recovery point, never a dead end.** Every one of the four no-results screens offered a one-tap way back (clear filters / back to all / adjust search). The "dead-end empty with no action" isn't just sub-optimal — it's contradicted by every real example. → hardened into P-ES-02 + a forbidden move.
- **Query-echo, not bare "No results".** Midday/Mixpanel keeping the term visible turned an abstract empty into a specific, fixable one → P-ES-02a (a calibration reality suggested that the initial anatomy didn't call out).

## Gaps / reasoned-not-observed
- **403 / permission** had no clean capture in the set. P-ES-05 is reasoned from F69/F73 + the universally-observed "recovery action, never a dead end" finding (the 403 recovery is *social* — name who can grant access), and is flagged in the pattern as reasoned, not observed.

## Calibrations applied to patterns/empty-states.md
1. The **six-type split** (different copy/action/tone per moment) is real → the spine of the pattern + the #1 forbidden move (generic one-size empty).
2. First-run → **warm, aspirational, one create CTA + ≤1 ghost** (P-ES-01).
3. No-results → **recovery point, never dead-end; echo the query** (P-ES-02, P-ES-02a).
4. Genuine error → **calm, factual cause, retry primary, no jokes/codes** (P-ES-03).
5. 404 → **orient + route home; brand personality welcome here** (P-ES-04).
6. Offline → **reassuring, auto-retry, warmth OK** (P-ES-06).
7. **Tone flexes by moment** (F73 scoped) — the headline calibration of the study.
8. **One primary + ≤1 ghost; verb labels; sentence case** (P-ES-07/08).
9. **Texture earns its keep — one device only** on the sparse surface (P-ES-09).
10. **Scope: full-page (404/403/first-load) vs region (list/widget/no-results)** (P-ES-10/11).
