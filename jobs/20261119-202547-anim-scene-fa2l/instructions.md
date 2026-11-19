# Fix animated scene s243

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s243" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s243), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s242.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s243.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Row 4 ("Letter card / Postcard शर्त टूटी → Letter, कमी") is in bold Inter, but rows 1–3 above it are Georgia. On one card this looks like a different template. Give row 4 the same class and font as rows 1–3 (Georgia sum style, same size and weight, with the Devanagari fallback). Keep only the "× 2" pill yellow.
2. Row 4 wraps onto a second line ("→ Letter, कमी"), and that line sits close to the bottom edge of the card. Make it one line: set the row's text width so it runs from x≈560 to just left of the pill (about x≈1600); Georgia at the rows' size fits in about 1000 px. Its baseline should match the rows' spacing, about y≈880, so it keeps at least 40 px of clearance above the card's bottom.
3. In #kp7, reveal "इस्तेमाल हुआ stamp धोखे से दोबारा" in the left panel as two whole lines (line 1 at 7.44, line 2 "धोखे से दोबारा" at 9.2 on its word). Revealing it word by word makes the centred second line jump sideways as each word is added (at 9.4 s, "धोखे" sits off-centre).

What already works: the cut to #kp7 lands on "सातवीं"; the left panel lands on "इस्तेमाल" and the right on "fictitious"; the yellow "≠" and the red "अलग अपराध" land at 13.9 on "अलग अपराध". The empty lower half of the #kp7 card is planned for s244.

The scene lasts 15.68 s: every time in it is between 0 and 15.68.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s243.html`: one `<section class="vs-scene" id="s243" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
