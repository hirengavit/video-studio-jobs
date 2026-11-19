# Fix animated scene s159

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s159" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s159), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s158.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `exam-trap` (Exam trap): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: exam-trap: the banner sentence, the two cards' labels, names, Hindi lines and stamp numbers or short codes (up to about 4 characters), which card is the trap, the underlined words, the remember bar.

## What to change

The current file is `inputs/current/s159.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s158 is exact. The header goes grey, "New Delhi · Chanakyapuri" is highlighted, the chips give way to the sand "Director, PLI, Kolkata" card, and the slate strike and cross land at 11.7 with the green tick at 12.1. The order is right. Fixes:

1. The narration's first line says "स्थापना के साल और जगह screen की table पर हैं", but the scene shows no table (the storyboard leaves out the years because they aren't in the narration). The scene can't fix this without inventing numbers, so the script line should be cut or reworded. Don't add a table in the scene.
2. The "अलग office" tag is about 28 px and hard to read. Stamp it at 40 px on a slate-grey pill about 240×64, at the sand card's top right.
3. Set the sand card's Hindi "निदेशक, PLI, कोलकाता" to 36 px (now about 30) and the English "Director, PLI, Kolkata" to 48 px. Grow the sand card to y 640–860 to hold them.
4. Set the slate "PLI Directorate → Kolkata" line to 44 px with its own row at y 880–960. Put the slate cross (60 px) just right of the struck line, inside the white card's 40 px margin. It now sits against the card edge.

The scene lasts 13.02 s: every time in it is between 0 and 13.02.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s159.html`: one `<section class="vs-scene" id="s159" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
