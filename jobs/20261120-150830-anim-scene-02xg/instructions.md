# Fix animated scene s109

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s109" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s109), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s108.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s109.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam matches s108. Slot 1 is named as the voice says "articles of gold or silver", and the "बाहर" chips pop and strike on "Coins", "plated" and "electro-plated", which is good timing. ("Frozen" in the notes is only because the changes are small; things do change.) The problem is framing. The chip row runs edge to edge in the panel: the "बाहर" label and the "Coins" chip sit on the panel's left border, and the third chip touches the right border. "electro-plated सामान" wraps into two tiny lines, and the strike cuts through them, so they can't be read. The slot-1 highlight shows only as a thin yellow line along the card's top edge, running through the top of "ARTICLES OF", and the name block is jammed against the card's top.

Fixes:
1. Chip row in #d1: keep a 50 px margin inside the panel (x 870–1750): chip widths 230 / 280 / 330 with 30 px gaps; write "electro-plated सामान" on one line at 32 px (or make that chip 330×110 with two lines at 32 px). Put the "बाहर" label at x 870, y 730, 44 px.
2. Strike on the chips: `strike` with `width` 4 and `dim` 0.55, so the struck words stay readable; on a two-line chip, strike with `words: 'electro-plated'` only.
3. Slot 1 name: centre the text block vertically in the 140 px card (English 34 px on two lines at y +38 and +74, Hindi 32 px at y +112), so nothing touches the card's top edge.
4. Replace the `highlight` on the whole slot-1 card with a `highlight` on the slot's English name `<text>`, so the yellow band sits behind the words instead of a line drawn through them.

The scene lasts 8.93 s: every time in it is between 0 and 8.93.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s109.html`: one `<section class="vs-scene" id="s109" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
