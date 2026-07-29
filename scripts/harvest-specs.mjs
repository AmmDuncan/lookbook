#!/usr/bin/env node
/**
 * Corpus harvester — grows the measured reference set that craft-brief derives
 * its build targets from.
 *
 * Why this exists: canon (~90 written rules distilled from NN/g, Baymard,
 * GOV.UK, Refactoring UI) produced ZERO findings on a real review, while the
 * measured/comparative references produced all of them. Written design advice is
 * the thing we already have most of. What moves a verdict is "shipped products
 * land here and you don't" — which needs samples, not prose.
 *
 * craft-brief.mjs reads references/specs/ at run time, so every card harvested
 * here tightens the targets automatically. No code change downstream.
 *
 * Usage:
 *   node harvest-specs.mjs --urls urls.txt [--width 1440] [--force]
 *   node harvest-specs.mjs --urls urls.txt --dry-run
 *
 * urls.txt: one per line, `slug<TAB>url` or just `url` (slug derived from host).
 * Lines starting with # are ignored.
 *
 * Already-present slugs are SKIPPED unless --force. Failures are reported
 * loudly and never written as a partial card — a corpus quietly seeded with
 * half-measured pages is worse than a smaller honest one.
 */
import { readFile, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const run = promisify(execFile)
const HERE = dirname(fileURLToPath(import.meta.url))
const SPECS = join(HERE, '..', 'references', 'specs')
const EXTRACT = join(HERE, 'extract-spec.mjs')

function parseArgs(argv) {
  const args = { width: '1440' }
  for (let i = 2; i < argv.length; i += 1) {
    const a = argv[i]
    if (a === '--dry-run' || a === '--force') {
      args[a.replace(/^--/, '')] = true
    } else if (a.startsWith('--')) {
      args[a.replace(/^--/, '')] = argv[i + 1]
      i += 1
    }
  }
  return args
}

function slugFor(url) {
  const { hostname, pathname } = new URL(url)
  const host = hostname.replace(/^www\./, '').replace(/\.(com|dev|app|io|design|net|org|co)$/, '')
  const tail = pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean).slice(0, 2).join('-')
  return [host, tail].filter(Boolean).join('-').replace(/[^a-z0-9-]+/gi, '-').toLowerCase()
}

async function main() {
  const args = parseArgs(process.argv)
  if (!args.urls) {
    console.error('Usage: node harvest-specs.mjs --urls urls.txt [--width 1440] [--force] [--dry-run]')
    process.exit(2)
  }

  const existing = new Set(
    (await readdir(SPECS)).filter((f) => f.endsWith('.spec.json')).map((f) => f.replace('.spec.json', '')),
  )

  const targets = []
  for (const raw of (await readFile(args.urls, 'utf8')).split('\n')) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) {
      continue
    }
    const [a, b] = line.split(/\t+|\s{2,}/)
    const url = (b ?? a).trim()
    const slug = b ? a.trim() : slugFor(url)
    targets.push({ slug, url })
  }

  const skipped = targets.filter((t) => existing.has(t.slug) && !args.force)
  const todo = targets.filter((t) => !existing.has(t.slug) || args.force)

  console.log(`corpus: ${existing.size} card(s) present`)
  console.log(`targets: ${targets.length} — ${todo.length} to harvest, ${skipped.length} already present`)
  for (const s of skipped) {
    console.log(`  skip ${s.slug} (already in corpus)`)
  }
  if (args['dry-run']) {
    for (const t of todo) {
      console.log(`  would harvest ${t.slug} <- ${t.url}`)
    }
    return
  }

  const ok = []
  const failed = []
  for (const t of todo) {
    try {
      // extract-spec defaults --out to reproductions/specs (specs OF the
      // reproductions — a different corpus). Pass it explicitly or the harvest
      // lands somewhere craft-brief never reads.
      await run('node', [EXTRACT, t.url, '--name', t.slug, '--width', String(args.width), '--out', SPECS], {
        timeout: 120000,
        maxBuffer: 32 * 1024 * 1024,
      })
      // Verify the card LANDED. A zero exit code is not evidence of a written
      // file: the first version of this script trusted the exit code and
      // reported "CORPUS NOW: 56" while writing nothing to the corpus at all.
      const card = join(SPECS, `${t.slug}.spec.json`)
      if (!existsSync(card)) {
        throw new Error(`extractor exited 0 but wrote no card at ${card}`)
      }
      ok.push(t)
      console.log(`  ok   ${t.slug}`)
    } catch (err) {
      const reason = (err.stderr || err.message || '').split('\n')[0].slice(0, 120)
      failed.push({ ...t, reason })
      console.log(`  FAIL ${t.slug} — ${reason}`)
    }
  }

  console.log('\n--- HARVEST REPORT ---')
  console.log(`HARVESTED: ${ok.length}`)
  console.log(`FAILED: ${failed.length}`)
  for (const f of failed) {
    console.log(`  ${f.slug} <- ${f.url} — ${f.reason}`)
  }
  console.log(`CORPUS NOW: ${existing.size + ok.length} card(s)`)
  console.log(
    'NOTE: craft-brief.mjs derives its bands from this directory at run time, so the targets have already moved. Re-run craft-brief and re-verify that Linear still passes and the flat-admin-table fixture still fails before trusting the new bands.',
  )
}

main().catch((err) => {
  console.error(`harvest failed: ${err.message}`)
  process.exit(1)
})
