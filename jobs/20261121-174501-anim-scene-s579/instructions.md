# Fix animated scene s177

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s177" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s177), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s176.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s177.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The rate card and source line read well and the "₹5" pop sits on its word. Two problems a viewer would notice: rows 2–3 are empty boxes for the whole 10 s scene, and the "every next 20 g" chip comes about 3 s after the voice says it.

1. Rows 2 and 3 sit empty from 0.0 to the end. At 0.0, write their labels in warm grey #6f6a63: "Letter Card" / "पत्र कार्ड" and "Postcard" / "पोस्टकार्ड". The card then reads as a three-row rate card from the first frame, and only the values wait for s178.
2. Move the second Letter chip "हर अगले 20 g / या हिस्से पर" from 8.84 to 6.0 (`fade`), where the voice says "हर अगले 20 grams". Keep the "+ ₹5" on its word: `pop` at 9.2. This also breaks the 2.95–8.84 s still stretch.
3. The chip text is too small for a phone. "पहले 20 g तक" and "हर अगले 20 g / या हिस्से पर" are about 34 px; raise them to 46 px. Raise the "पत्र" sub-label from about 25 px to 32 px. The rows are about 1700 px wide and have the room.
4. Pull "+ ₹5" in next to its words in the second chip, with a 24 px gap. It now sits alone at the far right edge, about 120 px away, so it reads as a separate item.

The scene lasts 10.36 s: every time in it is between 0 and 10.36.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s177.html`: one `<section class="vs-scene" id="s177" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
