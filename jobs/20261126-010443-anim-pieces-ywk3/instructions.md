# Draw the shared pieces and build the sets for an animated video

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

## Sets

A set is a place built once: its pieces laid out in the 1920×1080 frame, with named spots and camera framings,
so every scene in it puts the character and props in the same places and nothing floats. Build each set in
`inputs/sets.json` (see the storyboard) as `out/sets/<id>.json`:

```json
{"id": "study-desk", "description": "…", "ideas": ["study", "focus", …],
 "back":  [{"piece": "study-chair", "transform": "translate(490 541) scale(1.05)"}, …],
 "front": [],
 "spots": {"seat": [700, 940], "desk-left": [1000, 645], …},
 "framings": {"wide": {"zoom": 1}, "medium": {"zoom": 1.35, "x": 80, "y": 60}, "close": {"zoom": 2, "x": -200, "y": 80}},
 "character": {"spot": "seat", "pose": "sit", "scale": 1}}
```

- Pieces: reuse the library's (`inputs/library.md`, drawings in `inputs/library/`) or draw new ones in
  `out/pieces/` (list them in out/pieces.json too). `back` is drawn behind the character, `front` in front
  of him (a table edge that hides his legs). A transform places a piece: translate, then scale (a 400×400
  piece at scale 1 is 400 px).
- The character "host" (`inputs/character-sheet.jpg`) has his feet at (0, 0) and stands about 520 px tall at
  scale 1; seated poses put his seat about 190 px above his feet. Size and place the furniture for him: a
  chair's seat where he sits, a table top at his hands.
- Spots are [x, y] in the frame: where his feet go (standing or sitting) and where props rest (a prop's base
  lands on the spot, so a spot on a table is on its top edge). Name them for what they are.
- Framings are camera settings {zoom, x, y}: x/y move the view in world pixels. Keep what matters in each
  framing inside the frame. Give at least wide, medium and close.
- `ideas`: a few words for what the place can show, for finding it later.

Then write `out/pieces.json`: `[{"id", "kind": "prop"|"place"|"character"|"symbol", "description", "ideas": [a few
words for what it can show], "viewBox", "anchors": [...], "parts": [ids of animatable parts]}]` for every piece
you drew (`[]` if none). Run `node check.mjs` and fix what it reports.
