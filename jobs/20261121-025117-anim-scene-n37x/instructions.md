# Fix animated scene s057

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s057" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s057), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s056.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s057.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Continues s056 cleanly: same card, and the slots fill on their words (key 0.2 s, plate ~1.9 s, note ~3.3 s, bag ~6.0 s). The problem is the lettering under each slot. On a phone the small lines can't be read, and "Keys · चाबियाँ" breaks the kit's rule that the English term comes first with its translation directly beneath.
1. Slot 1: split "Keys · चाबियाँ" into "Keys" (Inter bold 44 px, ink) with "चाबियाँ" directly beneath (Noto Sans Devanagari 34 px, #6f6a63), centred under the key. Make the key icon about 15% smaller so both lines fit with at least 16 px to the slot edge.
2. Slot 2: set "Changeable hour plates" in Inter bold 36 px on two lines. Raise the note "जहाँ लगती हैं" from ~24 px to 34 px with line height 1.3, still on its word (~3.3 s). Make the hour-plate icon about 15% smaller to make room.
3. Slot 3: set "Bag" in Inter bold 44 px and raise "मिले articles के लिए" from ~28 px to 34 px (two lines if needed), still shown on "articles" (~7.0 s).
4. If the slots still can't hold this, extend the slot row down to y ≈ 980, and the RULE card's bottom with it so both bottoms line up. Don't shrink the Hindi.

The scene lasts 10.08 s: every time in it is between 0 and 10.08.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s057.html`: one `<section class="vs-scene" id="s057" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
