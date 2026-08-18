# apps/site — the deployed specimen library

Static Cloudflare Worker serving the rendered sheets so a specimen can be *looked at*,
not grepped.

- Live: https://lookbook-specimens.ammielgyanyawson.workers.dev
- Contents: `apps/gallery` chapters (18) + `harvest/specimens` sheets (62), plus a generated index.

```bash
npm run site:build     # -> apps/site/dist (gitignored)
npm run site:deploy    # build + wrangler deploy
npm run site:check     # every index link must return 200
```

Two gotchas the build encodes:

- Gallery chapters keep their original filenames — `chrome.js` links chapters by name, and
  Cloudflare's asset lookup is case-insensitive, so a lowercase duplicate makes both 404.
- `tokens.css` lives in `packages/tokens/src`, not in the gallery dir; the build copies it in.
