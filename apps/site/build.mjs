#!/usr/bin/env node
// Build the static Lookbook site: gallery chapters + harvest specimens + an index.
import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const dist = join(here, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const slug = (name) =>
  name
    .replace(/\.html$/, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"');

// Many specimens ship a placeholder <title>, so the filename is the reliable label.
const GENERIC_TITLE = /^(bundled page|document|untitled|page)$/i;

const titleOf = (html, fallback) => {
  const raw = decode(html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() || '');
  return !raw || GENERIC_TITLE.test(raw) ? fallback : raw;
};

/**
 * Copy a directory of standalone HTML into dist/<outDir>, returning link entries.
 * `rename: false` keeps the original filename — required for the gallery, whose
 * chrome.js links chapters by name (and whose asset paths are case-sensitive).
 */
function collect(srcDir, outDir, { rename = true } = {}) {
  mkdirSync(join(dist, outDir), { recursive: true });
  return readdirSync(srcDir)
    .filter((f) => f.endsWith('.html'))
    .map((file) => {
      const html = readFileSync(join(srcDir, file), 'utf8');
      const name = rename ? `${slug(file)}.html` : file;
      writeFileSync(join(dist, outDir, name), html);
      return {
        // Extensionless where we own the name; Cloudflare resolves it to the .html file.
        href: `/${outDir}/${encodeURIComponent(name.replace(/\.html$/, ''))}`,
        file,
        title: titleOf(html, file.replace(/\.html$/, '')),
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

const galleryDir = join(root, 'apps', 'gallery');
const gallery = collect(galleryDir, 'gallery', { rename: false });
for (const asset of ['lookbook.css', 'components.css', 'chrome.js']) {
  cpSync(join(galleryDir, asset), join(dist, 'gallery', asset));
}
cpSync(join(root, 'packages', 'tokens', 'src', 'tokens.css'), join(dist, 'gallery', 'tokens.css'));
cpSync(join(root, 'apps', 'gallery', 'uploads'), join(dist, 'gallery', 'uploads'), {
  recursive: true,
});

const specimens = collect(join(root, 'harvest', 'specimens'), 'specimens');

const groupOf = (file) => {
  if (/^Composed Recipe/.test(file)) return 'Page recipes';
  if (/Studies\.html$/.test(file)) return 'Studies';
  if (/Variations\.html$/.test(file)) return 'Variations';
  if (/Galler(y|ies)\.html$/.test(file)) return 'Galleries';
  return 'Sheets';
};

const groups = new Map([
  ['Gallery chapters', gallery],
  ['Variations', []],
  ['Studies', []],
  ['Page recipes', []],
  ['Galleries', []],
  ['Sheets', []],
]);
for (const specimen of specimens) groups.get(groupOf(specimen.file)).push(specimen);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** Drop the prefixes and counts the group heading already carries. */
const clean = (t) =>
  t
    .replace(/^Lookbook\s*[—–-]\s*/i, '')
    .replace(/^Composed Recipe\s*[—–-]\s*/i, '')
    .replace(/\s*\(\d+\s+compositions?\)\s*$/i, '')
    .trim();

const section = ([name, items]) => `
  <section class="group" id="${slug(name)}">
    <header class="group-head">
      <h2>${esc(name)}</h2><span class="count">${items.length}</span>
    </header>
    <ul class="grid">
      ${items
        .map(
          (i) =>
            `<li><a href="${i.href}"><span class="name">${esc(clean(i.title))}</span><span class="path">${esc(i.href)}</span></a></li>`,
        )
        .join('\n      ')}
    </ul>
  </section>`;

const total = gallery.length + specimens.length;

writeFileSync(
  join(dist, 'index.html'),
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lookbook — specimen library</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{
  --paper:#EFEFEC; --surface:#FFFFFF; --border:#E2E2DE; --border-2:#D4D4CE;
  --ink:#1B1B1E; --muted:#5C5C58; --subtle:#6E6E68; --accent:#4F46E5;
  --font-ui:'Hanken Grotesk',system-ui,sans-serif;
  --font-mono:'JetBrains Mono',ui-monospace,monospace;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:var(--font-ui);background:var(--paper);color:var(--ink);font-size:15px;line-height:1.5;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2.5px solid var(--accent);outline-offset:2px;border-radius:8px}
.wrap{max-width:1120px;margin:0 auto;padding:72px 32px 96px}
header.masthead{border-bottom:1px solid var(--border-2);padding-bottom:28px}
.eyebrow{font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--subtle)}
h1{font-size:44px;line-height:1.1;font-weight:800;letter-spacing:-.02em;margin:14px 0 10px}
.lede{color:var(--muted);max-width:60ch;font-size:17px}
.meta{margin-top:18px;font-family:var(--font-mono);font-size:12px;color:var(--subtle)}
.group{margin-top:48px}
.group-head{display:flex;align-items:baseline;gap:10px;margin-bottom:16px}
.group-head h2{font-size:15px;font-weight:700;letter-spacing:-.01em}
.count{font-family:var(--font-mono);font-size:11px;color:var(--subtle)}
.grid{list-style:none;display:grid;grid-template-columns:repeat(auto-fill,minmax(268px,1fr));gap:10px}
.grid a{display:flex;flex-direction:column;gap:6px;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 16px;transition:border-color .12s ease,transform .12s ease}
.grid a:hover{border-color:var(--accent);transform:translateY(-1px)}
.name{font-weight:600;letter-spacing:-.01em}
.path{font-family:var(--font-mono);font-size:11px;color:var(--subtle)}
@media (max-width:640px){.wrap{padding:48px 20px 72px}h1{font-size:34px}}
@media (prefers-reduced-motion:reduce){.grid a{transition:none}.grid a:hover{transform:none}}
</style>
</head>
<body>
<div class="wrap">
  <header class="masthead">
    <p class="eyebrow">Lookbook</p>
    <h1>Specimen library</h1>
    <p class="lede">Rendered reference sheets: component variations, composition studies, and full page recipes. Open one and read the pixels — composition does not survive a grep.</p>
    <p class="meta">${total} sheets · ${gallery.length} gallery chapters · ${specimens.length} specimens</p>
  </header>
  ${[...groups]
    .filter(([, items]) => items.length)
    .map(section)
    .join('\n')}
</div>
</body>
</html>
`,
);

console.log(`built ${total} pages into apps/site/dist`);
