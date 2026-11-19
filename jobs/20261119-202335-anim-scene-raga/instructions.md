# Fix animated scene s238

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s238" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s238), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s237.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s238.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Row 4 "Service stamp / authorised सरकारी डाक के लिए" finishes point 3 on its words. The cut to #kp4 on "चौथी" with the envelope is clear: the yellow circle on the stamp box and "Top right-hand corner / ऊपर दायाँ कोना" land on "top right-hand corner", and the stamp settles into the box. Problems: the badge and dots don't match s233–s235, and the four rows still sit in the top of the card, as in s237. The postage-stamp at scale 0.22 is a bare outlined square that looks like a checkbox while it waits above the envelope.

1. Badge continuity: in #kp3 and #kp4, replace the squat "3 · तीसरी" / "4 · चौथी" pill badge with the storyboard's tall red perforated stamp card at x100–460, y200–620, with the white numeral (about 200 px) above the Hindi ordinal (44 px), as in s233–s235.
2. Progress dots: put the seven dots at y 700, x 140–420. Only the current dot is yellow #f2b705 (dot 3, then dot 4); the others use s233–s235's pale grey (no red finished dots).
3. In #kp3, use the same spread row positions as the fixed s237 (row pitch about 170 px, row 4 at about y 860), so the cut from s237 is seamless.
4. Raise the `postage-stamp` from scale 0.22 to 0.32 so its perforations show, and size the envelope's stamp box to fit it.

The scene lasts 10.07 s: every time in it is between 0 and 10.07.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s238.html`: one `<section class="vs-scene" id="s238" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
