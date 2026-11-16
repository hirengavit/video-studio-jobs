# Fix animated scene s084

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s084" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s084), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s083.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s084.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. Stop 2: the "Original" invoice-sheet overlaps the "अधिकृत डाकघर" subtitle from about 1.5 s to the end. Place the sheet lower so its top sits at least 16 px below the subtitle (move it down about 40 px, or scale it to about 0.85 of its current size). Text must never be covered.
2. The signature and the postmark on the Duplicate are too small to read on a phone (the sheet is about 120 px wide and the stamp is a dot). In stop 3, scale the Duplicate invoice-sheet to about 1.5× (about 180×240 px). Draw the signature across its signature line at 4.4. At 5.6 ("date stamp"), press postal-date-stamp at about 140 px across, overlapping the sheet's lower-right corner.
3. At the end, the returned Duplicate covers the right half of the newspaper-bundle in stop 1. Shift the bundle left about 60 px and land the Duplicate beside it (a few px of overlap at most), so both stay readable.
4. At 0.2 s the moving invoice passes in front of the post-office-front. Bring the "Original" sheet in on the card's front layer only after the building fades (or fade the building out over 0.0–0.4 first), so nothing visibly passes through it.

The scene lasts 8.81 s: every time in it is between 0 and 8.81. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s084.html`: one `<section class="vs-scene" id="s084" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
