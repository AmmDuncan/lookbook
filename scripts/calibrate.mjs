#!/usr/bin/env node
/**
 * lookbook:calibrate — maintainer scaffolder for a calibration run.
 *
 * Calibration refines existing rules against real shipped products (it does NOT bulk-add rules —
 * more rules ≠ better). This is MAINTAINER tooling, not part of the consumer skill. The full
 * protocol is scripts/calibrate.md; this script just sets up a run: it prints the loop, lists a
 * pattern's current calibrations, reports its evidence file's age, and emits a dated run-log
 * template to fill in. Zero dependencies (Node only). It reads, never writes.
 *
 * Usage:
 *   node scripts/calibrate.mjs              # overview: every pattern, rule count, evidence age
 *   node scripts/calibrate.mjs --list       # same overview, table only
 *   node scripts/calibrate.mjs dashboard    # scaffold a run for patterns/dashboard.md
 *   node scripts/calibrate.mjs states       # ... for any pattern name (no .md)
 */

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PATTERNS_DIR = join(ROOT, "patterns");
const EVIDENCE_DIR = join(ROOT, "evidence");
const DATE_RE = /\b(20\d\d-\d\d-\d\d)\b/g;
const RULE_RE = /^\*\*(P-[A-Z]+-\d+)\.\s*(.+?)\*\*/;

/** Pattern file basenames (no extension), excluding READMEs. */
function patternNames() {
  return readdirSync(PATTERNS_DIR)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md")
    .map((f) => f.replace(/\.md$/, ""))
    .sort();
}

/** Extract [{ id, title }] calibration rules from a pattern file's body. */
function rulesOf(name) {
  const path = join(PATTERNS_DIR, `${name}.md`);
  if (!existsSync(path)) {
    return null;
  }
  const rules = [];
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const m = RULE_RE.exec(line.trim());
    if (m) {
      rules.push({ id: m[1], title: m[2].trim().replace(/\s+/g, " ").slice(0, 72) });
    }
  }
  return rules;
}

/** Latest YYYY-MM-DD found in evidence/<name>.md, or null if no file / no date. */
function evidenceDate(name) {
  const path = join(EVIDENCE_DIR, `${name}.md`);
  if (!existsSync(path)) {
    return { exists: false, date: null };
  }
  const dates = [...readFileSync(path, "utf8").matchAll(DATE_RE)].map((m) => m[1]).sort();
  return { exists: true, date: dates.length ? dates[dates.length - 1] : null };
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

/** Human label for an evidence-file status: missing, dated, or present-but-undated. */
function evLabel(ev) {
  if (!ev.exists) {
    return "— none —";
  }
  return ev.date || "(undated)";
}

function overview() {
  const names = patternNames();
  const rows = names.map((n) => {
    const rules = rulesOf(n) || [];
    const ev = evidenceDate(n);
    return { n, count: rules.length, ev };
  });
  const w = Math.max(...rows.map((r) => r.n.length), 7);
  console.log(`\n${"PATTERN".padEnd(w)}  RULES  EVIDENCE`);
  for (const r of rows) {
    console.log(`${r.n.padEnd(w)}  ${String(r.count).padStart(5)}  ${evLabel(r.ev)}`);
  }
  console.log(`\n${rows.length} patterns. Run \`node scripts/calibrate.mjs <pattern>\` to scaffold a calibration run.`);
  console.log(`Protocol: scripts/calibrate.md. Remember: calibrate to refine, not to add — more rules ≠ better.`);
}

const LOOP = [
  "1. Read the pattern's current calibrations (below) so you know what you're testing.",
  "2. Gather ~4–16 reference screens of this archetype from a real-shipped-product source you supply",
  "   (screen-search tool / screenshot folder / product URLs — never name the aggregator in committed files).",
  "3. Read each screen by HOW THE RULES ARE APPLIED, classifying each rule:",
  "   VALIDATE (screens confirm it) · CALIBRATE (screens cluster on a different number → adjust) ·",
  "   TOO-STRICT (excellent screens break it with no harm → make contextual or drop — the best finding).",
  "4. Write receipts in evidence/<pattern>.md (per-screen, mapped to rule IDs; source phrased generically; stamp the date).",
  "5. Apply calibrations to patterns/<pattern>.md (adjust numbers, contextualize rigid rules, delete dead ones; keep house format).",
  "6. GATE: generate a mockup → render at 3 widths (1280/768/390) + run contrast.mjs → eyeball vs north star. Re-render until it holds.",
  "7. If you ADDED/changed a rule, BATTLE-TEST it (blind baseline-vs-deepened, human eye-gate) before shipping.",
  "8. Commit pattern + evidence together; update STATUS.md.",
];

function scaffold(name) {
  const rules = rulesOf(name);
  if (rules === null) {
    console.error(`No pattern file at patterns/${name}.md.`);
    console.error(`Known patterns: ${patternNames().join(", ")}`);
    process.exit(2);
  }
  const ev = evidenceDate(name);
  console.log(`\n═══ calibrate: ${name} ═══`);
  console.log(`\nThe loop (full protocol in scripts/calibrate.md):`);
  console.log(LOOP.join("\n"));

  console.log(`\n── current calibrations in patterns/${name}.md (${rules.length}) ──`);
  if (rules.length === 0) {
    console.log("  (none parsed — check the file uses the **P-XX-NN. …** rule format)");
  }
  for (const r of rules) {
    console.log(`  ${r.id.padEnd(9)}  ${r.title}`);
  }

  console.log(`\n── evidence/${name}.md ──`);
  if (!ev.exists) {
    console.log("  no evidence file yet — create one this run.");
  } else {
    console.log(`  exists; latest date found: ${ev.date || "(none)"}`);
  }

  console.log(`\n── run-log template (paste into the run / commit notes) ──`);
  console.log(`calibrate ${name} — ${today()}`);
  console.log(`source: <generic — e.g. reference study of N real shipped products>`);
  console.log(`screens read: <N>`);
  console.log(`VALIDATE:  <rule ids confirmed>`);
  console.log(`CALIBRATE: <rule id → old → new number/treatment>`);
  console.log(`TOO-STRICT:<rule id → made contextual / dropped>`);
  console.log(`new rules: <none preferred — if any, battle-test before ship>`);
  console.log(`gate: render 3-width + contrast.mjs + eye = <pass/fixes>`);
  console.log(`outcome: <shipped / no-change (counts toward convergence)>`);
  console.log("");
}

function main() {
  const args = process.argv.slice(2);
  const pattern = args.find((a) => !a.startsWith("--"));
  if (pattern) {
    scaffold(pattern);
  } else {
    overview();
  }
}

main();
