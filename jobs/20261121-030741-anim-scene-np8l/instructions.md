# Fix animated scene s114

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s114" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s114), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s113.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s114.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The build is right: the heading, then the main office on "offices", then the Town SO on "town sub offices" and the BO on "branch offices". Each one holds still to be read. The series pill is wrong for this video: it reads "POST OFFICE RULES", but s113, s116, s117 and the storyboard header use "LETTER BOXES". The pill flips back and forth across the cuts inside the same section.

1. Set the series slot (the section's series attribute) to "LETTER BOXES" so it matches the storyboard and the scenes on either side.
2. Make the labels "Town sub office" and "Branch office" at least 48 px. The small office tiles are about 340 px wide, so scale each one by about 1.25 and keep them at x≈1500, centred on y 380 and 760, and let the lines follow.
3. The attendant badge that pops at 8.42 s is a small red dot on the office's corner that a viewer can't name. Make it 1.6× bigger and put a small "Attendant" label (44 px+) under it, so the word the voice says (7.3–9.0 s) shows on screen.

The scene lasts 10.94 s: every time in it is between 0 and 10.94.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s114.html`: one `<section class="vs-scene" id="s114" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
