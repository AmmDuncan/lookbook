# Archetype completeness — the "don't forget" floor

> The happy path is the demo; the rest is the product. This is the **easy-to-miss checklist by
> archetype** — the states and pieces a build ships without *unless reminded*. It's a completeness
> *floor* (did you include the piece?), **not** a layout prescription — how each piece looks is the
> recipe's and the depth rubric's job. Load it at build time, run the matching block, then forget it.
>
> Mechanics of each state live in `patterns/states.md` (loading/error/in-flight) and
> `patterns/empty-states.md` (the standing empty/404/403/no-results destinations). This file only
> tells you *which pieces the archetype must have* so none get skipped.

## The universal floor — every data-bearing surface (F33)

Four states are not optional, and **they are four different truths** — conflating them is the single most common bug (`patterns/states.md`):

- **Loading** — in flight; show a skeleton that *mirrors the final layout* (not a centered spinner standing in for a layout you know).
- **Empty (first-run)** — fetch succeeded, zero rows, *nothing created yet* → icon + title + one line + a **create** CTA.
- **No results (filtered)** — fetch succeeded, zero rows *because of the current filter/search* → **distinct** from first-run; offer **clear filters**, never "create your first…".
- **Error** — fetch *failed*; you don't know if data exists → "couldn't load" + **Retry**. Never render "Nothing here yet" for a failed load (it lies).

Plus, always: every interactive atom ships **rest / hover / focus-visible / active / disabled** with a visible focus ring; **one primary action** per region; error copy = **problem + fix**.

---

## By archetype — the pieces builds forget

**List / table (CRUD index)**
- [ ] First-run empty **and** filtered-no-results (two different states — the classic miss).
- [ ] Loading = **skeleton rows** matching the column structure (on the load-more / scroll path too).
- [ ] Row **hover + focus** state; sort affordance + **sorted-column** indicator.
- [ ] **Bulk-selection bar** (appears on first checkbox) with a count + the bulk actions.
- [ ] **Pagination or overflow** handled (`OverflowScroll` for capped strips; server-side search for growing data — SKILL.md "Lists, search & overflow").
- [ ] Row-level **error / pending** (a row mid-delete, a failed inline edit) scoped to the row.

**List / grid (card gallery)**
- [ ] Same four states; **image placeholder** = hairline-striped + mono label, never fake imagery.
- [ ] First-run vs filtered-empty distinct; grid → list **view toggle** keeps state.

**Detail / record / profile**
- [ ] **404 (not found)** and **403 (no permission)** as their own destinations, not a blank.
- [ ] Loading skeleton for the hero + each panel; **per-panel error** (one widget fails, the rest live).
- [ ] If editable: the **edit-window gate** (when can fields still change?) and the post-save state.

**Create / edit form**
- [ ] Field-level **validation** (error + helper) and a **form-level error summary** for submit failures.
- [ ] **Submitting** state (disabled + spinner on the primary), **success** confirmation, server-error path.
- [ ] **Unsaved-changes guard** (sticky save bar / navigate-away warning).
- [ ] Destructive actions **separated** from the primary; required-vs-optional legible.

**Wizard / onboarding / checkout**
- [ ] **Step chrome stays intact on error** — a content-region failure must not destroy step progress.
- [ ] Per-step validation gating "Next"; **back** without data loss; a **review** step before commit.
- [ ] Final **success / receipt** state; payment/commit **pending** and **failure** paths.
- [ ] First-run / zero-data variant if the flow can start empty.

**Dashboard / analytics**
- [ ] **Per-widget** loading + empty + error (never one boundary blanking the whole board).
- [ ] **First-run "connect data"** state (empty widgets with a populate prompt), distinct from a loaded-but-zero metric.
- [ ] Range/segment control reflects the **active** selection; data shows a **relationship**, not lone numbers (depth rubric #4).

**Search / results**
- [ ] **Pre-query** state (recent / suggestions), **loading**, **no-results** (with query echoed + a next move), error.
- [ ] Debounced/manual-submit behavior decided (SKILL.md search throttle); result count visible.

**Inbox / messaging / activity feed / notifications**
- [ ] **Read vs unread** state + a count; **mark-all-read**; **all-caught-up** empty (a win, not a blank).
- [ ] Loading skeleton for the stream; **per-item** kebab/actions; filtered-empty distinct from zero-activity.

**Kanban / board**
- [ ] **Empty column** state; drag **pending/optimistic + rollback** on a failed move; column **counts**.

**Calendar / scheduling**
- [ ] **No-events** day/week empty; loading; timezone/now-marker; conflict / overlap state.

**Settings / admin**
- [ ] Sectioned with a **sticky save bar** + unsaved guard; per-section save vs global; **permission-gated** rows hidden or disabled with reason.
- [ ] Dangerous settings (delete account, revoke) **separated + confirmed** without a roach-motel (P-EN-11).

**Pricing**
- [ ] Monthly/annual **toggle** state; current-plan indicator; **one** highlighted tier; FAQ.

**Auth**
- [ ] **Error** (bad creds, rate-limited, locked), **loading**, success/redirect; password show/hide; SSO placement.
- [ ] Forgot/reset and verification (OTP) sub-states; no deceptive retention on cancel/downgrade (P-EN floor).

**Error pages (4xx/5xx)**
- [ ] 404 / 403 / 500 each distinct, each with a **way out** (home, retry, contact) — never a dead end.

---

**How to use:** at build time, find your archetype block, confirm each line is present (or N/A for the surface), and let the recipe + depth rubric handle *how* each piece looks. A missing line is an unfinished surface (F33, AP19), not a polish item.
