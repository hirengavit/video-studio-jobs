# Fix animated scene s127

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s127" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s127), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s126.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s127.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Row 3 "खतरनाक packing" fades in on "packing" (about 1.5 s) and its slate cross draws on "मना है" (about 5.6 s), so the timing is good. Sub-shot B at about 6.6 s lands on "Pins", and "क्या करें?" types on "क्या करें" (8.5 s). The problem is sub-shot B: a big white card with only a small root box (about 600×130) and a 56 px question at its top. It reads as an almost empty slide and carries over the same way into s128 for another 6 s. "staff या डाक के लिए" under row 3 is also about 26 px.

1. Row 3 sub-line "staff या डाक के लिए": raise to 34 px (#6f6a63), matching the "पत्र लिफ़ाफ़ा" fix in s126.
2. Root box "Pins वाला article": make it 760×150 (x 580–1340, y 200–350) with the English at 52 px white and "पिन वाली वस्तु" at 36 px. Use white or #fde9a6 for the Hindi, not the full yellow #f2b705, which the kit keeps for highlights.
3. "क्या करें?": raise to 64 px and place it at y 420. Draw the three branch condition boxes as faint dashed outlines (#ead9a8, 3 px) at y 470–590 with no text, so the card shows the shape of the coming decision tree instead of empty white. s128 then fills them in on their words.

The scene lasts 9.45 s: every time in it is between 0 and 9.45.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s127.html`: one `<section class="vs-scene" id="s127" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
