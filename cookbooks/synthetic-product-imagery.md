# Cookbook — synthetic product imagery

> How to make a fake "product screenshot" that reads as real shipped UI — for hero collages, feature sections, app mockups, and easel pushes — when you don't have (or shouldn't fake) the real screenshot.
>
> **Earned by:** reproduction #2 (`reproductions/fibery-landing-hero.md`). §12-B is purist — "use real product UI; request real assets rather than faking it." Correct for production, useless when prototyping or reproducing. This is the honest middle path the base is silent on.

## The honesty line (why this isn't "faking it")

§12-B's warning is about **fake data that lies** — a screenshot implying a real metric, a real customer, a feature that doesn't exist. That's a tell *and* a lie.

A **stylized product card** is different: it's clearly a *representation* of a UI, not a screenshot of a specific claim. Bars and dots instead of legible fake numbers; "Feature board" instead of a fabricated dashboard with invented revenue. It evokes "this is a product" without asserting anything false. Keep it abstract enough that no one reads it as a real data claim — that's the line.

## The technique: browser-frame card with miniature UI

Each card = window chrome + a body of *abstracted* UI primitives.

```html
<div class="pcard">
  <div class="bar"><i></i><i></i><i></i><b>Feature board</b></div>  <!-- 3 dots + a quiet label -->
  <div class="body">
    <div class="row-mini"><span class="dotm" style="background:#34a853"></span><div class="ln"></div></div>
    <div class="row-mini"><span class="dotm" style="background:#fbbc05"></span><div class="ln"></div></div>
    <!-- rows of: status dot + a grey "text" bar of varied width -->
  </div>
</div>
```

**The primitive kit** (this is the whole vocabulary):
- **`.ln`** — a rounded grey bar standing in for a line of text. Vary the widths (45–88%) so it reads as real content, not a placeholder grid. One or two bars in a faint accent tint for "links/labels".
- **`.dotm` / status dots** — small colored circles for status/owner/category.
- **`.pill`** — tiny rounded label (a tag, a quarter, a stage).
- **mini chart** — flex row of `<span>` bars with varied heights, a single-hue gradient fill. Or a sparkline.
- **stickies / tiles** — small tinted rounded rectangles with 1–2 `.ln` bars inside (a board, an idea wall).
- **window chrome** — a 26px bar, three grey dots, one faint label naming the surface ("Roadmap", "Analytics").

**Make it read as product, not wireframe:**
- Realistic, varied widths and a *little* color (status dots, one tinted bar) — a uniform grey skeleton reads as "loading", not "product".
- Soft layered shadow (§6: `0 18px 40px -12px rgba(...)`) so cards float above the wash.
- Name the surfaces with real-sounding labels ("Feature board", "Roadmap"), never "Card title" / "Item 1".

## Composing a collage (the hero case)

- **3–4 cards, angled and overlapping.** Slight rotations (`±1.5–2.5deg`), staggered `top`/`left`, varied `z-index` so they interleave. Uniform, un-rotated cards read as a template.
- **Bleed off the edge** (see `marketing-hero.md`) — the collage is more convincing half-cropped than fully contained; a full screenshot sitting in a box looks staged.
- **Vary the card *types*** — a list board, a kanban, a sticky wall, a chart. Four of the same card is the three-identical-cards tell in disguise.

## Don't

- ❌ Legible fake numbers/names that imply a real claim ("$48,210 MRP", "Acme Corp") — that crosses from representation into lying (§11 fake-data tell).
- ❌ A flat grey wireframe with no color — reads as a skeleton loader, not a product.
- ❌ Four identical cards — vary type, angle, and depth.
- ❌ Emoji as the product content — use abstracted UI primitives, not 🚀📊.
- ❌ Shipping synthetic imagery as *final* when the real asset exists — this is for prototyping/reproduction/placeholder; flag it for swap (§12-B still wins at ship time).
