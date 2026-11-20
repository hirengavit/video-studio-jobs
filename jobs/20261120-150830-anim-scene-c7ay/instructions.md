# Fix animated scene s111

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s111" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s111), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s110.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s111.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam matches: the coin panel leaves and the note fades in with the CANCELLED stamp. The CURRENCY DEPARTMENT chip, the slot-3 name and "यहाँ currency note नहीं" land on their words, and slot 4 is highlighted on "घड़ी का case" as a lead-in. The scene's key idea is "its signature was cut", and that doesn't read. The strike is a thin line along the squiggle's own baseline, so it looks like part of the signature, not a cut. The signature is also small (about 60 px wide) in the note's corner. The 3.2–7.4 s hold is long but fine while the voice explains.

Fixes:
1. Make the signature squiggle bigger: about 200×60 px at the note's bottom right (x ≈ note right − 240, y ≈ note bottom − 80), ink 3 px.
2. Replace the thin strike with a clear cut: `strike` on the signature with `width` 6, `color` #4b4f58, crossing it at about −12° and running 20 px past each end, `dur` 0.35, timed to "काट" (1.8 s instead of 1.24 s).
3. Use `dim` 0.45 on the strike, so the cut signature visibly reads as cancelled while the voice says "काट दिया गया".

The scene lasts 12.06 s: every time in it is between 0 and 12.06.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s111.html`: one `<section class="vs-scene" id="s111" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
