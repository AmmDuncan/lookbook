#!/usr/bin/env node
// check-focus.mjs — a deterministic keyboard-focus gate for register/kit HTML.
//
// The spine says "Always visible focus for keyboard users... Never `outline: none`
// without a replacement" (the-design-brain.md §Focus) and "not done until every state
// exists." But focus lived only in the spine, never on the enforced pre-ship checklist
// — so a real build shipped bare controls (buttons/checkboxes with NO focus indicator)
// and nothing caught it. This makes the rule enforceable, the way check-contrast.mjs
// did for the faint tier and check-layout.mjs did for fake variety.
//
// The real failure mode is SUPPRESSION WITHOUT REPLACEMENT: `outline:none`/`0` removes
// the native browser ring and nothing replaces it. (An element with no custom focus AND
// no suppression still shows the native ring — keyboard-accessible, just unpolished — so
// that's an advisory, not a failure.) The gate is per-element: it matches each
// interactive element (by tag/class/role) to the `:focus`/`:focus-visible` rules and
// checks whether a rule that actually paints a visible indicator applies to it.
//
// Approximate by design (no DOM/CSS cascade): it matches the simple selector bearing the
// pseudo (tag / .class / *) against each element's tag + classes. Compound/descendant
// selectors degrade to the attached token or a wildcard. Better a nudge than a silent
// bare button.
//
// Usage:  node scripts/check-focus.mjs <file.html> [...more.html]
// Exit:   0 = no blocking focus failures · 1 = ≥1 suppressed-without-replacement · 2 = bad input
//         (native-ring-reliance is an advisory ⚐ and does NOT affect the exit code)

import { readFileSync } from "node:fs";

const INTERACTIVE_TAGS = new Set(["input", "button", "select", "textarea", "summary"]);
const INTERACTIVE_ROLES = new Set([
  "button", "link", "checkbox", "radio", "switch", "tab", "menuitem",
  "menuitemcheckbox", "menuitemradio", "textbox", "combobox", "option", "slider", "spinbutton",
]);

// ---- isolate <style> CSS (focus rules live here) ----
function styleCss(html) {
  let css = "";
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(html))) css += m[1] + "\n";
  return css.replace(/\/\*[\s\S]*?\*\//g, " "); // strip CSS comments
}

// does a rule body actually PAINT a focus indicator (not just kill the outline)?
function hasIndicator(body) {
  if (/(box-shadow|outline-color|background(-color)?|border-color)\s*:/.test(body)) return true;
  // outline / border with a REAL value (not none/0)
  const outline = body.match(/outline\s*:\s*([^;}]+)/);
  if (outline && !/^\s*(none|0)\b/.test(outline[1])) return true;
  const border = body.match(/border(-[a-z]+)?\s*:\s*([^;}]+)/);
  if (border && !/^\s*(none|0)\b/.test(border[2])) return true;
  return false;
}
function suppressesOutline(body) {
  return /outline\s*:\s*(none|0)\b/.test(body) && !hasIndicator(body);
}

// the simple selector token attached to a :focus / :focus-visible pseudo → coverage key.
// ".inp:focus" → {class:inp}; "button:focus-visible" → {tag:button}; ":focus" / "a :focus" → wildcard.
function focusKeys(selector) {
  const keys = [];
  const re = /(\*|[.#]?[\w-]+)?\s*:focus(-visible)?/g;
  let m;
  while ((m = re.exec(selector))) {
    const tok = m[1];
    if (!tok || tok === "*") { keys.push({ wild: true }); continue; }
    if (tok[0] === ".") keys.push({ cls: tok.slice(1) });
    else if (tok[0] === "#") keys.push({ id: tok.slice(1) });
    else keys.push({ tag: tok.toLowerCase() });
  }
  return keys;
}

// ---- parse flat CSS rules (inner rules inside @media still match; nested braces don't) ----
function rules(css) {
  const out = [];
  const re = /([^{}]+)\{([^{}]*)\}/g;
  let m;
  while ((m = re.exec(css))) out.push({ sel: m[1].trim(), body: m[2] });
  return out;
}

// ---- collect interactive elements from the markup ----
function attrsOf(tagText) {
  const a = {};
  const re = /([a-zA-Z][\w-]*)\s*=\s*"([^"]*)"/g;
  let m;
  while ((m = re.exec(tagText))) a[m[1].toLowerCase()] = m[2];
  return a;
}
function interactiveElements(html) {
  const els = [];
  const re = /<([a-zA-Z][\w-]*)\b([^>]*)>/g;
  let m;
  while ((m = re.exec(html))) {
    const tag = m[1].toLowerCase();
    const attrs = attrsOf(m[2]);
    if ("disabled" in attrs || attrs["aria-hidden"] === "true") continue;
    if (attrs.tabindex !== undefined && parseInt(attrs.tabindex, 10) < 0) continue;
    if (tag === "input" && (attrs.type === "hidden")) continue;

    let interactive = INTERACTIVE_TAGS.has(tag);
    if (tag === "a" && attrs.href !== undefined) interactive = true;
    if (attrs.tabindex !== undefined && parseInt(attrs.tabindex, 10) >= 0) interactive = true;
    if (attrs.contenteditable !== undefined && attrs.contenteditable !== "false") interactive = true;
    if (attrs.role && INTERACTIVE_ROLES.has(attrs.role)) interactive = true;
    if (!interactive) continue;

    const classes = (attrs.class || "").split(/\s+/).filter(Boolean);
    els.push({ tag, classes, role: attrs.role, sig: `${tag}${classes.length ? "." + classes.join(".") : ""}${attrs.role ? `[role=${attrs.role}]` : ""}` });
  }
  return els;
}

function matchKey(el, key) {
  if (key.wild) return true;
  if (key.tag) return el.tag === key.tag;
  if (key.cls) return el.classes.includes(key.cls);
  if (key.id) return false; // ids aren't tracked per-element here; treat as non-covering (rare for focus)
  return false;
}

function checkFile(path) {
  let html;
  try { html = readFileSync(path, "utf8"); }
  catch { console.error(`✗ cannot read ${path}`); return { fails: 0, error: true }; }

  const css = styleCss(html);
  const all = rules(css);
  const focusRules = all.filter((r) => /:focus/.test(r.sel)).map((r) => ({ keys: focusKeys(r.sel), indicator: hasIndicator(r.body) }));
  const suppressRules = all.filter((r) => suppressesOutline(r.body)).map((r) => ({ keys: r.sel.includes(":focus") ? focusKeys(r.sel) : selectorKeys(r.sel) }));

  const els = interactiveElements(html);
  if (!els.length) {
    console.log(`• ${path}: no interactive elements found — skipped`);
    return { fails: 0, skipped: true };
  }

  // dedup by signature for a compact report (50 identical buttons → one line)
  const seen = new Map();
  for (const el of els) {
    const covered = focusRules.some((fr) => fr.indicator && fr.keys.some((k) => matchKey(el, k)));
    const suppressed = suppressRules.some((sr) => sr.keys.some((k) => matchKey(el, k)));
    const status = covered ? "ok" : suppressed ? "fail" : "advisory";
    if (!seen.has(el.sig)) seen.set(el.sig, { sig: el.sig, status, n: 0 });
    const rec = seen.get(el.sig);
    rec.n++;
    // worst status wins for a signature (fail > advisory > ok)
    if (status === "fail" || (status === "advisory" && rec.status === "ok")) rec.status = status;
  }

  const recs = [...seen.values()];
  const fails = recs.filter((r) => r.status === "fail");
  const advisories = recs.filter((r) => r.status === "advisory");
  const okCount = recs.filter((r) => r.status === "ok").reduce((s, r) => s + r.n, 0);
  const advCount = advisories.reduce((s, r) => s + r.n, 0);

  if (!fails.length) {
    const detail = [okCount ? `${okCount} with a custom focus indicator` : null, advCount ? `${advCount} on the native ring` : null].filter(Boolean).join(", ");
    console.log(`✓ ${path} — no focus suppressed-without-replacement${detail ? ` (${detail})` : ""}`);
  } else {
    console.log(`✗ ${path}`);
    for (const r of fails) console.log(`    ✗ ${r.sig} ×${r.n}: focus suppressed (outline:none) with NO replacement indicator`);
  }
  if (advisories.length) {
    console.log(`  ⚐ relies on the NATIVE browser focus ring (accessible but unpolished — add an explicit :focus-visible indicator):`);
    for (const r of advisories) console.log(`      ${r.sig} ×${r.n}`);
  }
  return { fails: fails.reduce((s, r) => s + r.n, 0) };
}

// coverage keys for a NON-focus selector (used for outline:none suppression rules like `*{}` or `button{}`)
function selectorKeys(selector) {
  const keys = [];
  // take the last simple selector of each comma group
  for (const part of selector.split(",")) {
    const last = part.trim().split(/[\s>+~]+/).pop() || "";
    const tok = (last.match(/^(\*|[.#]?[\w-]+)/) || [])[1];
    if (!tok || tok === "*") keys.push({ wild: true });
    else if (tok[0] === ".") keys.push({ cls: tok.slice(1) });
    else if (tok[0] === "#") keys.push({ id: tok.slice(1) });
    else keys.push({ tag: tok.toLowerCase() });
  }
  return keys;
}

// ---- main ----
const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: node scripts/check-focus.mjs <file.html> [...]");
  process.exit(2);
}
let total = 0;
for (const f of files) total += checkFile(f).fails || 0;
console.log(total === 0 ? "\nFocus gate: PASS" : `\nFocus gate: FAIL (${total} interactive element(s) with suppressed-without-replacement focus)`);
process.exit(total === 0 ? 0 : 1);
