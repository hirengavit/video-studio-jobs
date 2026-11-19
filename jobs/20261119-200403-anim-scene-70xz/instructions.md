# Fix animated scene s173

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s173" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s173), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s172.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s173.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is exact. "सिर्फ address side पर" and the small stamp landing on the front card's right half (1.34) show the rule literally and on time. Tiles 2 and 3 have the same problem as tile 1 in s172: their frames sit empty while the words they belong to are being said.

Fixes:
1. Tile 2: the frame and badge come at 2.36, but the icon and "gummed label" text don't arrive until 5.46. That leaves an empty tile for 3 s while "पाने वाले के नाम और पते का" is said. Bring the label icon in with the frame at 2.5, and fade "पाने वाले का gummed label" at 3.9 (the voice reaches "नाम और पते का gummed label" between 3.9 and 5.5). Keep "पूरा चिपका" on its word (about 6.5).
2. Tile 3: the frame comes at 8.06 and the text at 9.52. Bring the frame, icon and "Sender-address label" in together at 9.5 ("ऐसा ही sender-address label").
3. Tile text (all tiles): 32 px Hindi with three lines in a 210 px tall tile touches the tile edge ("सिर्फ address side पर", "पूरा चिपका"). Set the tile padding to 16 px, the Hindi line height to 1.3, and the Hindi text to 34 px. Shorten line 1 of tile 1 to "Postal fee के stamps" if it would wrap to three lines.
4. The new adhesive stamp (1.34) sits right against badge 2. Place it 24 px left of the badge so the two don't touch.

The scene lasts 10.98 s: every time in it is between 0 and 10.98.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s173.html`: one `<section class="vs-scene" id="s173" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
