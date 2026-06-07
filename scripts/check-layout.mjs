#!/usr/bin/env node
// check-layout.mjs — a deterministic "fake variety" gate for register HTML files.
//
// The cookbook's central anti-pattern is RE-SKINNING: moving the colour/type dials
// while leaving the LAYOUT identical, then calling it a new voice. Three pages with
// the same skeleton in three palettes are one design wearing hats. This gate makes
// that tell machine-detectable, the way check-contrast.mjs made the faint-tier tell
// machine-detectable.
//
// What it does NOT use: semantic-tag sequence. Across the float set every page has
// the identical heading rhythm (h1·h3·h3·h3·h2 — one headline, three features, one
// CTA) yet four of them are genuinely different COMPOSITIONS (cover vs ribbon vs
// bento vs 3-up). Tag sequence is content rhythm, not bones. The discriminating
// signal is layout GEOMETRY — the grid/flex declarations and structural density.
//
// Two signals, both content- and colour-invariant:
//   1. Layout-primitive multiset  — normalized grid-template-columns / -areas /
//      flex-direction. Pairwise multiset-Jaccard. High = same bones.
//   2. Structural density          — (display:grid count, display:flex count) per
//      file. A re-skin keeps the same container count; a recomposition doesn't.
// Combined per pair: 0.7·primitiveJaccard + 0.3·densitySimilarity.
//
// It ALSO reports recurring primitives across the whole set — e.g. repeat(3,1fr)
// showing up in N files is the §11 three-up feature-grid default recurring. That's
// an intra-set tell independent of any single pair.
//
// A flag is NOT automatically a failure. Two voices MAY deliberately hold
// composition constant for a controlled comparison (the cookbook does exactly this
// with warm- and dark-editorial). The gate's job is to force a human to confirm
// "deliberate controlled comparison" vs "lazy re-skin" — it cannot read intent.
//
// Usage:  node scripts/check-layout.mjs <file.html> [...more.html]
//         node scripts/check-layout.mjs registers/float-*.html
// Exit:   0 = every pair below the flag threshold (clean variety)
//         1 = at least one pair shares a skeleton — confirm it's deliberate
//         2 = bad input (need 2+ readable files)

import { readFileSync } from "node:fs";

const FLAG = 0.7; // combined-similarity threshold above which a pair is flagged

// strip <style> bodies? NO — the layout primitives we want live INSIDE <style>.
// We do strip <svg> bodies (icon paths) since they carry no page-layout grid.
function stripSvg(s) {
  return s.replace(/<svg[\s\S]*?<\/svg>/gi, "");
}

// normalize a CSS value: lowercase, collapse whitespace, drop spaces around commas.
function norm(v) {
  return v.toLowerCase().replace(/\s+/g, " ").replace(/\s*,\s*/g, ",").trim();
}

function extractMulti(css, prop) {
  const re = new RegExp(`${prop}\\s*:\\s*([^;}]+)`, "gi");
  const out = [];
  let m;
  while ((m = re.exec(css))) {
    const v = norm(m[1]);
    if (v && v !== "none" && v !== "initial" && v !== "unset") out.push(v);
  }
  return out;
}

function fingerprint(path) {
  let raw;
  try { raw = readFileSync(path, "utf8"); }
  catch { return null; }
  const css = stripSvg(raw);

  // layout-primitive multiset — the bones
  const primitives = [
    ...extractMulti(css, "grid-template-columns").map((v) => `cols:${v}`),
    ...extractMulti(css, "grid-template-areas").map((v) => `areas:${v}`),
    ...extractMulti(css, "flex-direction").map((v) => `flexdir:${v}`),
  ];

  // structural density — how many layout containers, regardless of their geometry
  const gridCount = (css.match(/display\s*:\s*grid/gi) || []).length;
  const flexCount = (css.match(/display\s*:\s*flex/gi) || []).length;

  return { path, primitives, gridCount, flexCount };
}

// multiset Jaccard: |A ∩ B| / |A ∪ B| counting multiplicity.
function multisetJaccard(a, b) {
  if (!a.length && !b.length) return 1; // two layout-less pages are trivially alike
  const count = (arr) => arr.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map());
  const ca = count(a), cb = count(b);
  let inter = 0, uni = 0;
  for (const k of new Set([...ca.keys(), ...cb.keys()])) {
    const x = ca.get(k) || 0, y = cb.get(k) || 0;
    inter += Math.min(x, y);
    uni += Math.max(x, y);
  }
  return uni === 0 ? 1 : inter / uni;
}

// density similarity: 1 when container counts match, decaying with relative gap.
function densitySim(a, b) {
  const da = a.gridCount + a.flexCount, db = b.gridCount + b.flexCount;
  if (da === 0 && db === 0) return 1;
  return 1 - Math.abs(da - db) / Math.max(da, db, 1);
}

function combined(a, b) {
  return 0.7 * multisetJaccard(a.primitives, b.primitives) + 0.3 * densitySim(a, b);
}

// ---- main ----
const files = process.argv.slice(2);
if (files.length < 2) {
  console.error("usage: node scripts/check-layout.mjs <file.html> <file.html> [...]  (need 2+ files to compare)");
  process.exit(2);
}

const prints = files.map(fingerprint);
const bad = files.filter((f, i) => prints[i] === null);
const fps = prints.filter(Boolean);
for (const f of bad) console.error(`✗ cannot read ${f}`);
if (fps.length < 2) {
  console.error("need 2+ readable files to compare");
  process.exit(2);
}

const short = (p) => p.replace(/^.*\//, "");

// per-file primitive summary
console.log("Layout fingerprints:");
for (const fp of fps) {
  console.log(`  ${short(fp.path)}  grid:${fp.gridCount} flex:${fp.flexCount}  [${fp.primitives.join(" · ") || "no layout primitives"}]`);
}

// recurring primitives across the set (the intra-set §11 tell)
const seen = new Map();
for (const fp of fps) {
  for (const p of new Set(fp.primitives)) seen.set(p, (seen.get(p) || 0) + 1);
}
const recurring = [...seen.entries()].filter(([, n]) => n >= Math.max(2, Math.ceil(fps.length / 2))).sort((a, b) => b[1] - a[1]);
if (recurring.length) {
  console.log("\nRecurring layout primitives (a primitive in many files = a shared body default — confirm each is deliberate):");
  for (const [p, n] of recurring) {
    const tell = p === "cols:repeat(3,1fr)" ? "  ← the §11 three-up feature grid" : "";
    console.log(`  ${n}/${fps.length}  ${p}${tell}`);
  }
}

// pairwise similarity
console.log("\nPairwise skeleton similarity (0.7·primitive-Jaccard + 0.3·density):");
const flags = [];
for (let i = 0; i < fps.length; i++) {
  for (let j = i + 1; j < fps.length; j++) {
    const sim = combined(fps[i], fps[j]);
    const pj = multisetJaccard(fps[i].primitives, fps[j].primitives);
    const ds = densitySim(fps[i], fps[j]);
    const mark = sim >= FLAG ? "⚠ SHARED" : "·";
    console.log(`  ${mark}  ${short(fps[i].path)} ↔ ${short(fps[j].path)}: ${sim.toFixed(2)}  (primitive ${pj.toFixed(2)}, density ${ds.toFixed(2)})`);
    if (sim >= FLAG) flags.push([fps[i].path, fps[j].path, sim]);
  }
}

if (!flags.length) {
  console.log("\nFake-variety gate: PASS — no two files share a layout skeleton.");
  process.exit(0);
}
console.log(`\nFake-variety gate: REVIEW (${flags.length} pair${flags.length > 1 ? "s" : ""} share a skeleton)`);
console.log("  Each flagged pair is EITHER a deliberate controlled comparison (composition held constant on purpose)");
console.log("  OR a re-skin masquerading as a new voice. The gate can't tell which — a human must confirm.");
process.exit(1);
