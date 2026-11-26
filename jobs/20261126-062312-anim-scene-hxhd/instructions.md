# Fix animated scene s011

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s011" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s011), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s010.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s011.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s010 is clean, and the switch to the example at about 8.1 s lands on "जैसे कोई व्यक्ति". The problems are inside the cards.

1. The dashed "passing through" path in the Travellers card runs at the person's feet and touches the top of "Travellers" and the suitcase. Move the path to about 40 px below the "यात्री" line (or behind the figure at waist height with the figure on top), so it crosses no text or icon.
2. In the Strangers card the new line "पक्का delivery पता नहीं" sits on the card's bottom border, with a tiny crossed house about 30 px wide. Shift the whole card stack (icon, term, Hindi, two lines) up about 50 px so there are 30 px or more below the last line. Draw the `house-icon` at 60–70 px with its slate cross, left of the text.
3. "गुज़रते हुए डाक ले सकता है" also sits close to the card bottom. Give it the same 30 px bottom margin.
4. The `#example` card (x 260–1660, y 220–960) holds a small person and skyline in a thin band around y 420–560. Scale the person, suitcase and skyline group by about 1.5 and centre it at y 520, so the example fills the card. Keep the caption at y 860.
5. The caption arrives at 11.7 s, only about 0.8 s before the cut. Bring the arrow `draw` and caption `fade` forward to 10.2 s ("के काम से किसी नए शहर") so the caption holds for 2 s or more.

The scene lasts 12.32 s: every time in it is between 0 and 12.32.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s011.html`: one `<section class="vs-scene" id="s011" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
