# Fix animated scene s147

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s147" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s147), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s146.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s147.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The "किसे नहीं मिलती?" sub-shot lands on time: the question at 5.4 s, the remarried row at 6.6 s and the re-employed row at 8.3 s, with slate crosses as the kit asks. The first half is weak. The note "पिछले DLC से भर सकती हैं · सही होना ज़रूरी" is set about 30 px grey, jammed under the PRODUCTS pill. It wraps onto a second line ("· सही होना ज़रूरी") that nearly touches the card top, and the underline on "सही" is barely visible. On a phone it is unreadable, and it is the only thing that changes for 5 s.

Fixes:
1. Move the note to a band below the list card instead of beside the title: a #f3ead6 panel x 160–1760, y 1000–1060 (or push the card's bottom up 60 px). Put "पिछले DLC से भर सकती हैं · सही होना ज़रूरी" on one line, Noto Sans Devanagari 40 px #2b2622, so nothing touches the series pill or wraps.
2. Do the `underline` on "सही" at 3.48 s in #f2b705, 4 px, under the word in its new place, so it can be seen.
3. Size the notelig rows to the storyboard's 60 px: "Remarried pensioners" and "Re-employed pensioners" currently look about 48 px. Use 60 px bold and give the slate cross icons 64 px.

The scene lasts 10.09 s: every time in it is between 0 and 10.09.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s147.html`: one `<section class="vs-scene" id="s147" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
