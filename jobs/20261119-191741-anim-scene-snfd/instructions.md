# Fix animated scene s031

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s031" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s031), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s030.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s031.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The card carries over from s030 with a clean seam. But the exemption line, which is this scene's whole point, can't be read, and the last tick doesn't finish before the wipe.

1. The grey line "जब तक छूट लागू न हो" is about 28 px (below the 32 px Hindi floor) and nearly touches the card's bottom edge. Make it 36 px Noto Sans Devanagari, grey #6f6a63, with line height 1.3. Raise row 3 so the line sits at least 30 px above the card bottom (for example move the Prepayment term up about 25 px, or put the line under the "ज़रूरी" pill at x ~1240–1700). Keep the soft yellow band on "छूट".
2. The green tick for row 3 is still half-drawn in the last frame (3.5 s), so the scene ends before the wipe with it unfinished. Start the tick at 2.6 s with a 0.4 s draw, so it is complete and held for a beat before 3.1 s.
3. The "ज़रूरी" pill is already on screen at 0.2 s, before the word is said (about 0.9 s). Pop it at 0.9 s.

The scene lasts 4.12 s: every time in it is between 0 and 4.12.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s031.html`: one `<section class="vs-scene" id="s031" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
