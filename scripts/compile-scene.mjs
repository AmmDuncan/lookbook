#!/usr/bin/env node
// compile-scene.mjs — compile an AUTO-LAYOUT artboard scene to responsive HTML.
//
// Proves the progressive-generation core: a RELATIONAL scene (containers = flex/grid,
// children flow, gaps are TOKENS, responsive rules per container) compiles to responsive
// code by construction — no absolute x/y, no hand-tuned px. Row on desktop, stack on mobile
// comes from ONE `responsive` rule, not a second hand-built layout.
//
// Usage: node compile-scene.mjs <scene.json> > out.html

import { readFile } from 'node:fs/promises'

const scene = JSON.parse(await readFile(process.argv[2], 'utf8'))
const bp = scene.breakpoint || 640
const media = []   // collected responsive rules
const rules = []   // per-container base rules (NOT inline — so media queries can override)
let uid = 0

const dir = (layout) => layout === 'row' ? 'row' : 'column'

function node(n) {
  // leaf types
  if (n.type === 'h1') { return `<h1>${n.text}</h1>` }
  if (n.type === 'h3') { return `<h3>${n.text}</h3>` }
  if (n.type === 'p') { return `<p class="sub">${n.text}</p>` }
  if (n.type === 'label') { return `<label>${n.text}</label>` }
  if (n.type === 'input') { return `<input value="${n.value ?? ''}">` }
  if (n.type === 'select') { return `<select>${(n.options || []).map((o) => `<option>${o}</option>`).join('')}</select>` }
  if (n.type === 'button') { return `<button class="${n.variant || 'ghost'}">${n.text}</button>` }

  // container (auto-layout) — styles go to a CSS RULE, never inline, so media queries can override
  const id = `c${++uid}`
  const style = [
    'display:flex',
    `flex-direction:${dir(n.layout)}`,
    n.gap ? `gap:var(--${n.gap})` : '',
    n.justify ? `justify-content:${n.justify}` : '',
    n.align ? `align-items:${n.align}` : '',
    n.wrap ? 'flex-wrap:wrap' : '',
    n.grow ? `flex:${n.grow} 1 0` : '',
  ].filter(Boolean).join(';')
  rules.push(`.${id}{${style}}`)

  // responsive: emit a media query overriding this container's direction/gap under the breakpoint
  if (n.responsive) {
    const r = n.responsive
    const rs = [
      r.layout ? `flex-direction:${dir(r.layout)}` : '',
      r.gap ? `gap:var(--${r.gap})` : '',
    ].filter(Boolean).join(';')
    media.push(`@media(max-width:${bp}px){.${id}{${rs}}}`)
  }
  const kids = (n.children || []).map(node).join('\n')
  return `<div class="${id}">\n${kids}\n</div>`
}

const body = node(scene.root)
const t = scene.tokens
const vars = Object.entries(t).map(([k, v]) => `--${k}:${typeof v === 'number' ? v + 'px' : v}`).join(';')

process.stdout.write(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
:root{${vars}}
*{box-sizing:border-box}
body{margin:0;background:#f4f5f7;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:var(--ink)}
.board{max-width:560px;margin:40px auto;padding:32px;background:#fff;border:1px solid var(--line);border-radius:12px}
h1{font-size:22px;font-weight:600;margin:0}
h3{font-size:12px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--sub);margin:0}
.sub{font-size:14px;color:var(--sub);margin:0}
label{font-size:14px;font-weight:600}
input,select{width:100%;font-size:16px;padding:10px 12px;border:1px solid var(--line);border-radius:8px}
button{font-size:15px;font-weight:600;padding:10px 18px;border-radius:8px;cursor:pointer}
button.ghost{background:#fff;color:var(--sub);border:1px solid var(--line)}
button.primary{background:var(--accent);color:#fff;border:1px solid var(--accent)}
${rules.join('\n')}
${media.join('\n')}
</style></head><body><div class="board">\n${body}\n</div></body></html>`)
