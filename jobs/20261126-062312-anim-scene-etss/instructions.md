# Fix animated scene s013

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s013" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s013), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s012.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s013.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The rule card stamps in on time ("3 महीने से ज़्यादा नहीं", 5.2–6.8 s), with the Hindi line and an underline on "3 महीने". The 1.25–5.5 s stretch shows only the heading and a small caption, which is a lot of empty space, and the card itself is top-heavy.

1. The stamp card (x 360–1560, y 260–760) has its text in the upper half and empty red below. Centre the two lines vertically: "Person: 3 months max" baseline about y 470, "व्यक्ति: 3 महीने तक" about y 580.
2. The two `person-icon`s under the card are about 40 px tall and the caption is about 40 px. Scale the icons to about 110 px and the caption "Stranger हो या traveller" to 52 px, centred on y 890.
3. While the screen waits for the card (1–5.7 s), the caption row is the only content. Place it at the card's centre (about y 520) when it pops at 1.04 s, then `move` it to y 890 at 5.5 s, just before the card stamps. The empty middle disappears, and the reveal still waits for "3 महीने".
4. The heading "अब एक सीमा" is centred, while s009–s012 put the heading at top left. Align it left at x 140, as in s009.

The scene lasts 9.78 s: every time in it is between 0 and 9.78.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s013.html`: one `<section class="vs-scene" id="s013" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
