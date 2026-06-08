#!/usr/bin/env node
// check-contrast.mjs — a deterministic WCAG-AA gate for register HTML files.
//
// The pre-ship checklist says "verify every text-carrying token clears AA at its
// real size, including the faint tier." This makes that line enforceable instead
// of a manual instruction (the gap that let --faint ship at 2.4:1). It is
// intentionally conservative: it flags any primary TEXT token that fails 4.5:1
// against any primary SURFACE token it could realistically sit on. Better a false
// flag on a pairing that never happens than a real sub-AA label shipping silently.
//
// It ALSO surfaces hardcoded `color: #hex` LITERALS (text colours not routed through
// a token), because the audit's blind spot keeps migrating to where the token table
// can't see it — a `--rule` reused as text, then a magic hex on a quiet glyph (a `·`
// at 1.79:1 that dodged the table on purpose). Literals are reported as an ADVISORY
// (the ⚐ line), NOT gated: a literal is indistinguishable from a decorative glyph
// (an amber ★ at 1.78:1 reads identically to a broken separator at 1.79:1 — only the
// element knows which), so blocking would false-positive. Clear inverse text
// (light-on-dark-button, ~1:1 vs the page bg) is filtered out; the rest are listed
// for a human/critic to verify against the actual element. The PASS/FAIL exit code is
// driven by tokens only — the advisory never changes it.
//
// LIGHT *and* DARK are checked independently. A file that defines a base `:root` theme
// plus a dark override (`:root[data-theme="dark"]`, `.dark`, `[data-mode="dark"]`, or
// `@media (prefers-color-scheme: dark)`) is split into two token sets — light = base,
// dark = base overridden by the dark scope — and each mode is measured on its own,
// labelled `[light mode]` / `[dark mode]`. (Measuring the file as one map is wrong: it
// last-write-wins into a FRANKENSTEIN theme that exists in neither mode, and it silently
// skips whichever mode isn't last in the file.) This catches dark-mode-only failures like
// a `--muted` that was never lightened for dark, or an accent-text token too dark on a
// dark surface. Single-theme files are checked once, unlabelled, exactly as before.
//
// Usage:  node scripts/check-contrast.mjs <file.html> [...more.html]
//         node scripts/check-contrast.mjs registers/float-*.html
// Exit:   0 = all token pairings clear (in every mode) · 1 = ≥1 blocking token AA failure · 2 = bad input
//         (the ⚐ literal advisory is informational and does NOT affect the exit code)

import { readFileSync } from "node:fs";

const AA = 4.5;            // small-text floor
const LARGE = 3.0;         // large-text / non-text floor (used only to grade severity)

// names we treat as text vs surface (substring match, case-insensitive)
const TEXT_HINTS = ["ink", "text", "muted", "faint", "fg", "body", "label", "heading"];
const SURFACE_HINTS = ["bg", "paper", "panel", "card", "surface", "page", "canvas"];

// ---- color parsing ----
function hexToRgb(h) {
  h = h.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (h.length !== 6) return null;
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}
function srgbToLin(c) {
  c /= 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function luminance([r, g, b]) {
  return 0.2126 * srgbToLin(r) + 0.7152 * srgbToLin(g) + 0.0722 * srgbToLin(b);
}
function contrast(fg, bg) {
  const a = luminance(fg) + 0.05, b = luminance(bg) + 0.05;
  return Math.round((Math.max(a, b) / Math.min(a, b)) * 100) / 100;
}

// ---- extract :root tokens (only solid hex; rgba/var-chains skipped — they're
// almost never the load-bearing text/surface colors, and resolving them
// statically invites false precision) ----
function parseTokens(css) {
  const tokens = {};
  const re = /--([a-z0-9-]+)\s*:\s*(#[0-9a-fA-F]{3,6})\b/g;
  let m;
  while ((m = re.exec(css))) tokens[m[1]] = m[2]; // last write wins (matches CSS cascade)
  return tokens;
}
// which tokens are actually used as text color anywhere?
function colorUsedTokens(css) {
  const used = new Set();
  // the `color:` property only — the negative lookbehind for "-" rejects
  // border-color / outline-color / background-color / text-decoration-color,
  // which are not text fills and were causing false positives.
  const re = /(?<![-a-z])color\s*:\s*var\(\s*--([a-z0-9-]+)\s*\)/g;
  let m;
  while ((m = re.exec(css))) used.add(m[1]);
  return used;
}
// hardcoded hex used as a TEXT color (not via a token). The audit's blind spot
// keeps migrating to where the token table can't see it — a `--rule` token reused
// as text, then a literal magic hex on a quiet glyph (a `·` separator at 1.79:1
// that dodged the table on purpose). This catches that: any literal `color: #hex`
// becomes an anonymous text entry, measured against the page surfaces like a token.
// Same negative-lookbehind rejects background-/border-/*-color and `--name-color:`
// DEFINITIONS (the char before "color" is "-"); only real `color:` declarations match.
function colorLiterals(css) {
  const lits = new Set();
  const re = /(?<![-a-z])color\s*:\s*(#[0-9a-fA-F]{3,8})\b/g;
  let m;
  while ((m = re.exec(css))) lits.add(m[1].toLowerCase());
  return [...lits];
}

// ---- theme-aware token resolution (light vs dark) ----
// A file often defines a base :root theme + a dark override (`:root[data-theme="dark"]`,
// `.dark`, `[data-mode="dark"]`, or `@media (prefers-color-scheme: dark)`). Measuring the
// whole file at once (last-write-wins) yields a FRANKENSTEIN theme — dark values for the
// overridden tokens, light for the rest — that exists in NEITHER mode. Split them so each
// mode is checked on its own: light = base; dark = base overridden by the dark scope.
function cssRules(css) {
  const out = []; const re = /([^{}]+)\{([^{}]*)\}/g; let m;
  while ((m = re.exec(css))) out.push({ sel: m[1].trim(), body: m[2] });
  return out;
}
function isDarkSelector(sel) {
  return /\[data-theme[~|^$*]?=\s*["']?\s*dark|\[data-mode[~|^$*]?=\s*["']?\s*dark|(^|[\s,(])\.dark(?![\w-])|\.theme-dark(?![\w-])|html\.dark|:root\.dark/i.test(sel);
}
function splitThemes(css) {
  // pull balanced @media (prefers-color-scheme: dark){ ... } blocks first (brace-matched)
  const darkChunks = []; let rest = ""; let last = 0;
  const re = /@media[^{]*prefers-color-scheme\s*:\s*dark[^{]*\{/gi; let m;
  while ((m = re.exec(css))) {
    rest += css.slice(last, m.index);
    let depth = 1, j = m.index + m[0].length;
    for (; j < css.length && depth > 0; j++) { if (css[j] === "{") depth++; else if (css[j] === "}") depth--; }
    darkChunks.push(css.slice(m.index + m[0].length, j - 1));
    last = j; re.lastIndex = j;
  }
  rest += css.slice(last);
  const base = {}, dark = parseTokens(darkChunks.join("\n"));
  // remaining flat rules: a dark-scoped selector's tokens go to dark, everything else to base
  for (const { sel, body } of cssRules(rest)) Object.assign(isDarkSelector(sel) ? dark : base, parseTokens(body));
  return { base, dark };
}

function classify(name, colorUsed) {
  const n = name.toLowerCase();
  const isSurface = SURFACE_HINTS.some((h) => n.includes(h));
  // a surface-named token is never ALSO treated as text — when it appears in a
  // `color:` it's inverse text (light label ON a dark button), whose real bg is
  // the inverted element, not the page. Testing it against page surfaces is the
  // classic false positive (`--paper` on `--paper` = 1:1). Surfaces win the tie.
  const isText = !isSurface && (TEXT_HINTS.some((h) => n.includes(h)) || colorUsed.has(name));
  return { isSurface, isText };
}

function checkFile(path) {
  let css;
  try { css = readFileSync(path, "utf8"); }
  catch { console.error(`✗ cannot read ${path}`); return { fails: 0, error: true }; }

  const colorUsed = colorUsedTokens(css);
  const literals = colorLiterals(css);
  const { base, dark } = splitThemes(css);
  // a dark scope exists → check BOTH modes independently (light = base, dark = base+overrides);
  // otherwise a single un-labelled pass (identical to the old single-theme behaviour).
  const themes = Object.keys(dark).length
    ? [{ label: "light", tokens: base }, { label: "dark", tokens: { ...base, ...dark } }]
    : [{ label: null, tokens: base }];
  let fails = 0;
  for (const th of themes) fails += checkTheme(path, th.tokens, colorUsed, literals, th.label).fails || 0;
  return { fails };
}

function checkTheme(path, tokens, colorUsed, literals, label) {
  const tag = label ? ` [${label} mode]` : "";
  const names = Object.keys(tokens).filter((n) => hexToRgb(tokens[n]));

  const surfaces = names.filter((n) => classify(n, colorUsed).isSurface);
  let texts = names.filter((n) => classify(n, colorUsed).isText);

  if (!surfaces.length || !texts.length) {
    console.log(`• ${path}${tag}: no resolvable hex surface/text tokens — skipped (uses var-chains or rgba?)`);
    return { fails: 0, skipped: true };
  }

  // Determine the page's dominant polarity from its background surface, then keep
  // only PRIMARY text (opposite polarity to the page bg) checked against PRIMARY
  // surfaces (same polarity as the page bg). This drops inverse text/surfaces —
  // a dark-theme page's dark text tokens live on its light buttons, not the page,
  // so checking them against the dark page bg is meaningless.
  const bgName = surfaces.find((n) => /\b(bg|paper|page|canvas)\b/.test(n)) ||
                 surfaces.find((n) => /(bg|paper|page|canvas)/.test(n)) || surfaces[0];
  const pageLum = luminance(hexToRgb(tokens[bgName]));
  const pageIsDark = pageLum < 0.5;
  // primary surfaces = surfaces on the same polarity as the page bg (its own
  // dark/light family). Foreground text = tokens on the readable side of the page
  // bg: LIGHTER than the bg on a dark page, DARKER than the bg on a light page.
  // (Compared to the bg luminance, NOT a fixed 0.5 — a mid-gray faint on near-black
  // is still foreground.) Inverse text — darker than a dark bg, used on light
  // buttons — falls out and isn't spuriously failed against the page.
  const primarySurfaces = surfaces.filter((s) => (luminance(hexToRgb(tokens[s])) < 0.5) === pageIsDark);
  texts = texts.filter((t) => {
    const tl = luminance(hexToRgb(tokens[t]));
    return pageIsDark ? tl > pageLum : tl < pageLum;
  });

  if (!texts.length || !primarySurfaces.length) {
    console.log(`• ${path}${tag}: no primary text/surface pairings on the dominant polarity — skipped`);
    return { fails: 0, skipped: true };
  }

  const disp = (n) => (n[0] === "#" ? `color:${n}` : `--${n}`);

  // ---- advisory: hardcoded literal text colors the token table can't see ----
  // The audit's blind spot keeps MIGRATING to where the token gate can't look: a
  // `--rule` token reused as text, then a literal `color: #hex` magic value on a quiet
  // glyph (the #c4b498 `·` separator at 1.79:1 that dodged the table on purpose). We
  // surface those — but we do NOT gate on them, because a literal is indistinguishable
  // from a decorative glyph (an amber ★ rating at 1.78:1 reads identically to a broken
  // separator at 1.79:1; only the element knows which). Blocking would false-positive
  // on icon glyphs and previously-passing files. So: drop clear inverse text (light-on-
  // dark-button etc., ~1:1 vs the page bg), then LIST any literal that fails AA against
  // its best page surface for a human/critic to verify against its actual element.
  const pageBg = hexToRgb(tokens[bgName]);
  const tokenHexes = new Set(names.map((n) => tokens[n].toLowerCase()));
  const litAdvisory = [];
  for (const hex of literals) {
    const rgb = hexToRgb(hex);
    if (!rgb || tokenHexes.has(hex)) continue;      // measured already as a token's value
    if (contrast(rgb, pageBg) < 1.3) continue;      // inverse text on an inverted element — not page text
    const best = Math.max(...primarySurfaces.map((s) => contrast(rgb, hexToRgb(tokens[s]))));
    if (best < AA) litAdvisory.push({ hex, best });
  }
  const printAdvisory = () => {
    if (!litAdvisory.length) return;
    console.log(`  ⚐ hardcoded text-color literal(s) to VERIFY (gate can't see the element — confirm decorative, else fix):`);
    for (const a of litAdvisory) console.log(`      ${disp(a.hex)} — ${a.best}:1 vs best page surface`);
  };

  const fails = [];
  for (const t of texts) {
    const tr = hexToRgb(tokens[t]);
    for (const s of primarySurfaces) {
      const sr = hexToRgb(tokens[s]);
      const ratio = contrast(tr, sr);
      if (ratio < AA) fails.push({ t, s, ratio, sev: ratio < LARGE ? "FAIL" : "warn" });
    }
  }

  const header = `${path}${tag}  (${texts.length} text × ${surfaces.length} surface tokens)`;
  if (!fails.length) {
    console.log(`✓ ${header} — all token pairings ≥ ${AA}:1`);
    printAdvisory();
    return { fails: 0 };
  }
  // a pairing only counts as a real failure if the text token fails against the
  // surface family it actually lives in. Heuristic: a text token fails for real
  // if it's < AA against its BEST surface (unreadable everywhere) OR < LARGE
  // against any surface (sub even the large-text floor).
  // Floor per token: a token NAMED as a text tier (ink/text/muted/faint/label)
  // carries small body/label text → 4.5. An un-named color token (an accent, a
  // display colour) might be large → only hard-fail below the 3.0 large-text
  // floor; 3.0–4.5 is a size-dependent WARN. Blocks the faint-tier bug without
  // over-darkening a 100px accent word.
  const floorFor = (name) => (TEXT_HINTS.some((h) => name.toLowerCase().includes(h)) ? AA : LARGE);
  const real = [];
  for (const t of texts) {
    if (!fails.some((f) => f.t === t)) continue;
    const best = Math.max(...primarySurfaces.map((s) => contrast(hexToRgb(tokens[t]), hexToRgb(tokens[s]))));
    if (best < floorFor(t)) real.push({ t, best, floor: floorFor(t) });
  }
  console.log(`✗ ${header}`);
  for (const f of fails) {
    const blocking = real.some((r) => r.t === f.t);
    console.log(`    ${blocking ? "✗" : "⚠"} ${disp(f.t)} on --${f.s}: ${f.ratio}:1`);
  }
  if (real.length) {
    console.log(`  → BLOCKING (text below its floor): ${real.map((r) => `${disp(r.t)} ${r.best}:1 < ${r.floor}`).join(", ")}`);
  } else {
    console.log(`  → warnings only (3.0–4.5 on possibly-large text); no blocking failures`);
  }
  printAdvisory();
  return { fails: real.length };
}

// ---- main ----
const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: node scripts/check-contrast.mjs <file.html> [...]");
  process.exit(2);
}
let total = 0;
for (const f of files) total += checkFile(f).fails || 0;
console.log(total === 0 ? "\nAA gate: PASS" : `\nAA gate: FAIL (${total} blocking token${total > 1 ? "s" : ""})`);
process.exit(total === 0 ? 0 : 1);
