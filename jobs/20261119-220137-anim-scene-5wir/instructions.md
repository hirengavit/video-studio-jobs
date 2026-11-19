# Fix animated scene s227

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s227" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s227), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s226.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s227.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The beats land on the voice: "सिर्फ़ offence 3 का" at 0.7 s, rows 1 and 3 back to ink at 7.9 s, "Fictitious" highlighted at 8.2 s, then "सरकारी stamp", the bracket and "Trap 2" at 10.1 s. The still stretches are reading holds and fine. But both trap messages, the two points this scene exists for, are drawn at about 24–28 px in the 240 px trap column. "3 का" hangs under the Trap 1 tag and touches the card's bottom edge (y ≈ 975).

1. Trap 1: move "सिर्फ़ offence 3 का" inside the Trap 1 tag's group. Grow the tag to 220×130, centred in the trap column (x 1700) on row 3 (y 795–925). Write "Trap 1" at 30 px bold and then "सिर्फ़ offence" and "3 का" on two lines at 34 px, #8a5d00. Nothing goes below y 940.
2. Trap 2 tag: grow it the same way to 220×130, centred on row 2 (y 565–695). Write "Trap 2" at 30 px bold, and "दो अलग" / "offences" on two lines at 34 px. The words are about 22 px now, which is unreadable on a phone and under the kit's 32 px Hindi minimum.
3. Bracket: redraw it on the left edge of the trap column (x ≈ 1600) from row 1's middle (y 425) to row 3's middle (y 860), with a short tick into each row. It should clearly join rows 1 and 3 without crossing the enlarged Trap 2 tag (the tag starts at x 1610).
4. At 3.92 s, make the planned slate underline under "₹200" visible: 4 px, #4b4f58, drawn in 0.5 s. Pulse the row-1 and row-2 सज़ा cells once (scale 1.04, 0.6 s) so "हर नकली stamp वाले offence का maximum ये नहीं" has something to look at. On the sheet, nothing visible happens from 0.25 s to 7.98 s.

The scene lasts 13.02 s: every time in it is between 0 and 13.02.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s227.html`: one `<section class="vs-scene" id="s227" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
