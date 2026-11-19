# Fix animated scene s234

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s234" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s234), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s233.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s234.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s233 is clean. Point 1 finishes on its words, and the cut to #kp2 at 6.24 with the badge swapping to "2 दूसरी" works. The problems are crowding and size: "Prepayment ज़रूरी" and "अग्रिम भुगतान" sit against the card's bottom edge (the gloss nearly touches it), and "— जब तक Regulations छूट न दें" renders at about 30 px. In #kp2 the subheading "भुगतान के चार तरीके" is small, and the card stays empty under the heading until s235.

1. Use the same respaced row positions as s233 (row 1 y 340, term y 470/525, "Stamp: physical या digital" y 650). Put "Prepayment ज़रूरी" at y 790 and "अग्रिम भुगतान" at y 845, so there is at least 100 px of margin above the card bottom at y 980.
2. Raise "— जब तक Regulations छूट न दें" to 44 px. If it doesn't fit beside "Prepayment ज़रूरी", put it on its own line under the gloss at y 900. Don't shrink the Hindi.
3. In #kp2, set "भुगतान के चार तरीके" to 48 px (it is about 34 px now). Keep the yellow underline under "चार" and widen it to the word's full width.

The scene lasts 10.42 s: every time in it is between 0 and 10.42.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s234.html`: one `<section class="vs-scene" id="s234" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
