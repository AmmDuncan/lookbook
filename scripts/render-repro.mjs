#!/usr/bin/env node
// render-repro.mjs — re-render a reproduction's @2x PNG from its HTML.
//
// The reproductions ship an HTML source and a rendered PNG side by side, and the
// PNG is what gets eye-gated. Any edit to the source silently invalidates the PNG
// until it is rebuilt, so this exists to keep the pair honest.
//
// Viewport and scale match the existing artifacts (1280x800 @2x = 2560x1600)
// rather than the retina evidence default — these are a fixed set that must stay
// comparable to the renders already gated.
//
// Usage: node render-repro.mjs <files...> [--width 1280] [--height 800] [--scale 2]

import { createRequire } from 'node:module'
import { homedir } from 'node:os'
import { join, dirname, basename, extname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const require = createRequire(join(homedir(), '.claude/lib/wren/node_modules/noop.js'))
const { chromium } = require('playwright')

const args = process.argv.slice(2)
const files = args.filter((a) => !a.startsWith('--') && /\.html?$/.test(a))
const flag = (name, dflt) => {
  const i = args.indexOf(`--${name}`)
  return i === -1 ? dflt : Number(args[i + 1])
}
const width = flag('width', 1280)
const height = flag('height', 800)
const scale = flag('scale', 2)

if (!files.length) {
  console.error('usage: render-repro.mjs <files...> [--width 1280] [--height 800] [--scale 2]')
  process.exit(1)
}

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: scale })
const page = await ctx.newPage()

for (const f of files) {
  const abs = resolve(f)
  const out = join(dirname(abs), `${basename(abs, extname(abs))}@${scale}x.png`)
  await page.goto(pathToFileURL(abs).href, { waitUntil: 'networkidle' }).catch(() => {})
  // Webfonts load from a CDN in several reproductions; screenshotting before they
  // settle bakes a fallback-font render into the gated artifact.
  await page.evaluate(() => document.fonts?.ready)
  await page.waitForTimeout(400)
  await page.screenshot({ path: out })
  console.log(`rendered ${basename(out)}`)
}

await browser.close()
