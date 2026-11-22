# Fix animated scene s098

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s098" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s098), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s097.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s098.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s097 is clean, "English या Hindi" lands on its words (0.0) and the private-postcard pill comes in on "Private" (about 8.0). Two things a viewer would notice:

1. Row 5's Reg. 91 quote is too small to read on a phone: "neither thinner nor more flexible" is about 36 px Georgia and "Reg. 91" about 24 px. The screen notes and the kit want the exact words on a white document card with the source beneath and a Hindi gist. Use the empty space under the postcard on the left (about x 100–820, y 600–820) for a white document card with a #ead9a8 border. Put the quote in Georgia at 44 px or more, "Reg. 91 · Post Office Regulations 2024" beneath it in #6f6a63 at 30 px, and "सार (gist): Post Office के postcard से पतला या ज़्यादा लचीला नहीं" in Noto Sans Devanagari at 34 px. `fade` it in at 2.80. Keep row 5 in the checklist as a short label ("Reg. 91: मोटाई/लचीलापन", 40 px), and run the 5.64 `highlight` on the card's quote.
2. Move the "Private postcard: यही शर्तें" pill under the new document card (y about 900, same x span) so the two don't share a spot. Keep its `fade` at 8.42.
3. The "पोस्टकार्ड" added under "POST CARD" on the postcard at 1.38 is about 24 px, below the kit's 32 px minimum for Hindi. Set both lines on the postcard to at least 34 px (scale the postcard group up from 1.2 to about 1.4 if it needs room), or drop the lettering on the card and rely on row 4.

The scene lasts 10.72 s: every time in it is between 0 and 10.72.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s098.html`: one `<section class="vs-scene" id="s098" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
