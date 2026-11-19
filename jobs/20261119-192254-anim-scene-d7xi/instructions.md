# Fix animated scene s046

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s046" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s046), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s045.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s046.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The "Postcards / पोस्टकार्ड" chip that pops at 0.0 s is about 26 px. Size it like the other item chips (see s045): about 260×140 px, the term at 40 px bold, "पोस्टकार्ड" at 34–36 px and the postcard-blank icon 70 px tall.
2. The slate cross is drawn at the far right of the band (x ≈ 1780), away from the words. The storyboard puts it on "शर्त" so the viewer sees which condition is ruled out. At 10.22 s, draw a 60 px slate (#4b4f58) cross centred on "शर्त" in "ये शर्त नहीं", or a slate strike through "शर्त".
3. The bottom band squeezes two lines each into its halves, at about 36–40 px in a 120 px strip. Make the band 150 px tall (y 850–1000). Set "ये minimum सिर्फ तय bulk facilities के लिए" as one 40 px line in its half and "आम counter payment: ये शर्त नहीं" as one 40 px line in the other, with 1.3× line height. This is the exam trap, so it has to read at a glance.
4. The planned underline on "सिर्फ" at 4.64 s isn't visible in any frame. Draw it under "सिर्फ" (3 px ink, rounded ends) when the band arrives. It is the screen's one hand-drawn note, so the slate cross from item 2 should read as a mark on the content, not a second annotation.

The scene lasts 11.53 s: every time in it is between 0 and 11.53.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s046.html`: one `<section class="vs-scene" id="s046" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
