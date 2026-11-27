# Fix animated scene s122

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s122" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s122), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s121.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `timeline` (Timeline): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: timeline: the number of events (3 to 4 on a bilingual screen) and their spacing; which event is the key one; the caption band (English line with Hindi under it) or drop it.

## What to change

The current file is `inputs/current/s122.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Digital Sewa node (#nodeC): the label "Digital Sewa portal" / "डिजिटल सेवा portal" fades at 5.36 s and the scene cuts to #timeline at 6.30 s, so it's on screen for under 1 s, and the 5.2 s frame shows only a small screen icon. Move `pop` #nodeC to 2.95 s (on "platform"), `type` #ds-screen to 4.2 s, and `fade` #nodeC-label and its Hindi to 4.7 s (on "Sewa portal"). Move the #timeline sub-shot to 6.8 s and #two-dates to 7.2 s, so the label holds for about 2 s.
2. #nodeC is too small to read on a phone: raise `system-screen-icon` from scale 0.7 to 0.9 (it still fits inside x 1360–1780). Set the on-screen "Digital Sewa" text to at least 40 px, and make the small arrow from node B to node C the same size and red as the "साथी" arrow.
3. #ev1-card arrives at 9.44 s holding only "Pilot / पायलट" and stays two-thirds empty until s123. Draw it at y 520–660 (sized for its two lines) and let s123 `grow` it to y 800 {axis:y, origin:top} as "11 Circles" types. Or fade the card in at 9.78 s with the date, so it never sits empty.

The scene lasts 12.74 s: every time in it is between 0 and 12.74.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s122.html`: one `<section class="vs-scene" id="s122" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
