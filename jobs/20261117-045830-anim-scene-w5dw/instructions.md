# Fix animated scene s096

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s096" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s096), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s095.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s096.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The green "अलग बात" stamp closes the labels point on its words (0–1.3 s). Shot B brings the insured parcel with a list frame on "अब insured parcel का पुराना तरीका", and row 1 is written on "सावधानी से और मज़बूती से pack" (5.4–7.9 s). The problems: the parcel floats about 90 px above the panel's ground line; row 1's text is small for the main point; and an unplanned "पुराना Guide" tag sits in the panel.

1. Physics: move `parcel-with-tag` down so its bottom edge rests on the panel's baseline (set it on the line at about y 940), or move the line up to the parcel's bottom. Nothing should sit in the air.
2. Set row 1's text "सावधानी से और मज़बूती से pack" to 36 px at weight 700 (about 26 px now) and grow the row to 80 px. If it doesn't fit on one line, wrap it to two lines; don't shrink it.
3. Scale the parcel 1.3 → 1.6 so it fills its panel (x 160–900) with even margins, since it is the anchor of this part.
4. Keep the shot B cut at 2.06 s as planned (it lands at about 3 s now), so "Insured parcel" is typed when the voice says it (1.3–3.2 s).

The scene lasts 8.80 s: every time in it is between 0 and 8.80.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s096.html`: one `<section class="vs-scene" id="s096" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
