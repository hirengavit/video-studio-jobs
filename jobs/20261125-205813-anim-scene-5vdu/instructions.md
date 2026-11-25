# Fix animated scene s190

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s190" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s190), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s189.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s190.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The scene tells its idea: the upper part is destroyed and the lower part is filed with the certificate. The beats land on "ऊपरी हिस्सा … नष्ट" and "निचला हिस्सा". But card 2 is cramped, and the two new labels are too small to read on a phone.

Fixes:
1. Labels in card 2: "ऊपरी हिस्सा: नष्ट" is about 30 px and "निचला हिस्सा + sender का certificate" about 34 px. Set both to 44 px, Noto Sans Devanagari 600, line height 1.3. Lay out the card with the title line at y 730, "ऊपरी हिस्सा: नष्ट" (slate #4b4f58) at y 810 and "निचला हिस्सा + sender का certificate" (ink) at y 880. Left-align all three at x 260, with at least 30 px clear of the card's bottom edge.
2. Put "ऊपरी हिस्सा: नष्ट" beside the form's upper half, as the storyboard says: right-aligned just left of the mo-form, level with #upper. If that doesn't fit, at least give it a slate `strike` when #upper goes `out`, so the word "नष्ट" and the disappearing half read as one event.
3. Make the form readable: raise the mo-form to scale 0.7 (about 420×280), base at (1560, 990) inside card 2. Before #upper goes `out`, `highlight` it (yellow #f2b705 at 0.4) for a full 0.8 s so the viewer sees which half goes. After it leaves, briefly `highlight` #lower on "निचला हिस्सा" (about 4.9 s).

The scene lasts 8.56 s: every time in it is between 0 and 8.56.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s190.html`: one `<section class="vs-scene" id="s190" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
