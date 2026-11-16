# Fix animated scene s007

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s007" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s007), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s006.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s007.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. When a new part comes in, the detail card collapses to a short strip, which shows at 2.7 s ("Part 4") and 7.9 s ("Part 5"). It then jumps back to full height when the rule name arrives, so the layout visibly changes size on every part. Keep the detail card at its fixed size (x 160–1760, y 340–940, the same as in s005–s006) for every part, and swap only its contents.
2. "Bulk cash prepayment" has no Hindi line. Add "थोक नकद अग्रिम भुगतान" under it 0.5 s after it appears (about 5.9 s), in Noto Sans Devanagari at 44 px in supporting grey #6f6a63, as on cards 1–3 and in s001.
3. The gist "Newspapers: posting without prepayment" is a full English line, and the kit wants everything except postal terms in Hindi. Write it as the narration says it, "Newspapers की posting without prepayment", or keep the term and add the Hindi gist beneath it, e.g. "बिना अग्रिम भुगतान posting". Keep it at 44 px or more.
4. The "पुराना Guide" tag on card 4 is tiny (about 24 px). Make it at least 36 px, on an envelope #f3ead6 pill, with the `old-book-stack` at about scale 1.3 beside it, so the "old Guide" point reads on a phone.

The scene lasts 13.10 s: every time in it is between 0 and 13.10. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s007.html`: one `<section class="vs-scene" id="s007" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
