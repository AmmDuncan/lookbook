# apps/site — the deployed Lookbook

Static Cloudflare Worker. The entry point is **surfaces**, not files: each hub page
pulls one surface's pattern doc, cookbooks, specimen sheets, reproductions, kit pieces
and gallery chapters into a single view, so the rules and the rendered evidence sit
together. `/all` keeps the flat A–Z list for when you know the name.

- Live: https://lookbook-specimens.ammielgyanyawson.workers.dev
- 16 surfaces over 175 artefacts.

```bash
npm run site:build     # -> apps/site/dist (gitignored)
npm run site:deploy    # build + wrangler deploy
npm run site:check     # crawl the surfaces and assert every link is 200
```

## Adding content

`taxonomy.mjs` maps files to surfaces. The build **fails** if a file under any source
dir is claimed by no surface, or if a surface claims a file that does not exist — so
adding a specimen forces the relationship decision instead of letting it fall out of
the index silently. An artefact may belong to several surfaces.

## Two gotchas the build encodes

- Gallery chapters keep their original filenames — `chrome.js` links chapters by name,
  and Cloudflare's asset lookup is case-insensitive, so a lowercase duplicate 404s both.
- `tokens.css` lives in `packages/tokens/src`, not in the gallery dir; the build copies
  it in, along with each kit's `_tokens.css` / `_icons.svg`.
