# Draw the shared pieces for an animated video

Style: `inputs/kit.json` (palette and rules) and `inputs/frames/` (the channel's look; never copy it).

## Pieces

Draw each piece in `inputs/pieces.json` (also described in `inputs/storyboard.md`, part "Shared") as its own
SVG: `out/pieces/<id>.svg`. Props: viewBox "0 0 400 400", the drawing centred on a transparent background;
places: viewBox "0 0 1920 1080"; cards, panels, pills and documents: a viewBox of their real size on the 1920×1080
frame (e.g. "0 0 1200 700" for a card), so a scene places them with translate only and never squashes them. Give any part a scene might animate its own id (e.g. the liquid inside a jug
as ONE group whose bottom sits on the jug's inner base). Add each listed anchor as
`<circle data-anchor="<name>" cx=".." cy=".." r="0"/>` at the exact point (spout: the lip where liquid
leaves; grip: the middle of the handle; base: bottom centre where it rests; mouth: centre of a container's
opening; top: the middle of a surface's top edge).
**No sample text inside a piece.** A card, a slide, a panel, a label plate or a document is drawn empty: the
scene writes its own words on top, so any words you draw would show through as a second, garbled copy. The only
text allowed in a piece is lettering that belongs to the object itself (a jar's "attention" label, a book's
title) and is named in its description. Leave clear space where the scene's text will go.

Then write `out/pieces.json`: `[{"id", "kind": "prop"|"place"|"character"|"symbol", "description", "ideas": [a few
words for what it can show], "viewBox", "anchors": [...], "parts": [ids of animatable parts]}]` for every piece
you drew (`[]` if none). Run `node check.mjs` and fix what it reports.
