# Fix animated scene s237

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s237" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s237), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s236.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s237.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The rows build on "Definitive", "commemorative" and "Private mail" in time with the voice. Three problems. The small adhesive-stamp icons at scale 0.35 show as plain red outlined squares, which look like empty checkboxes and suggest a to-do list. The first frame shows four empty ruled rows. The four rows are packed into y 240–700, which leaves the lower third of the card empty. The badge and dots also differ from s233–s235.

1. Badge continuity: replace the squat "3 · तीसरी" pill badge with the storyboard's tall red perforated stamp card at x100–460, y200–620, with a white numeral "3" (about 200 px) above "तीसरी" (44 px, white), as in s233–s235.
2. Progress dots: put the seven dots at y 700, x 140–420. Only dot 3 is yellow #f2b705; the others use s233–s235's pale grey (no red finished dots).
3. Raise each row's `adhesive-stamp` from scale 0.35 to 0.6, so its perforated edge and stamp face read as a stamp and not a checkbox.
4. Spread the four rows evenly across y 260–940 (row pitch about 170 px; term 56 px, Hindi 40 px). Draw each divider rule with its row's term (fade at 0.78, 3.96 and 8.04; row 4's rule at s238 0.00), not all at 0.00.

The scene lasts 11.24 s: every time in it is between 0 and 11.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s237.html`: one `<section class="vs-scene" id="s237" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
