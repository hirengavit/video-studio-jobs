# Fix animated scene s112

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s112" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s112), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s111.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s112.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The exam point "only the request fee comes back, not the original postage or the value of the contents" is shown in the smallest text on the screen. "original postage" and "सामान की कीमत" appear about 36–40 px under the green pill, and once the slate strike crosses them they are faint. "सामान की कीमत" sits on the card's bottom edge. The second card now holds seven items, and the kit's limit is five.

1. Raise "original postage" and "सामान की कीमत" to 48 px ink. Stack them on the right of the second card under the green pill, about y 860 and y 930, with at least 24 px from the card's bottom edge. Keep the slate `strike` on each word (0.0 and 2.36).
2. At 0.0, fade the bullet rows, the "पर एक अलग नियम" label and the grey note to the supporting colour (#6f6a63), or `fade` them out, so the screen keeps at most about five items that stand out.
3. In shot `#exam`, line 1 "Self-booked item: स्वीकार होने से पहले cancellation" is about 44 px on a huge red card that is otherwise empty until s113. Raise the line to 52–56 px, keep 1.3× line height, and start the list at about y 360 so the card's lines fill it evenly as they arrive.

The jump at 5.43 is the planned cut to sub-shot `#exam`, so it is intended. The still from 7.16 to 11.36 s is the reading hold for line 1.

The scene lasts 11.41 s: every time in it is between 0 and 11.41.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s112.html`: one `<section class="vs-scene" id="s112" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
