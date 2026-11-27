# Fix animated scene s159

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s159" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s159), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s158.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s159.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The booking counter and its two cards land on "असली office connection" and "route के निर्देश". The cut to the exam card lands on "Exam angle", and "Local 1–2 दिन" and "Metro to metro 1–3 दिन" arrive on their words. The exam rows are cramped, though: each row's English term touches the line or card edge above it, and the Hindi translations are tiny.

1. #exam rows: move each row's English term down from its row's top divider. Row 1's "Local" now touches the card's top edge at y 250. Put the English baseline at row top + 48 and the Hindi baseline at row top + 96, keeping the 120 px row height.
2. #exam Hindi translations (स्थानीय, मेट्रो से मेट्रो): they render at about 24 px. Set them to 36 px, class hi, fill #6f6a63; the kit's minimum for Hindi is 32 px. Centre each value chip (240×90) vertically on its row (chip centre = row top + 60).
3. #counter title "Item लेते समय यह भी देखा जाता है" is in ink. Fill it with heading red #9e1b1b, like every other scene title in this part.
4. #counter right cards: enlarge the icons (the two linked buildings and the route arrow) to about 80 px tall and place each one left of its text. Keep the text at 44 px, so the cards read on a phone.

The scene lasts 13.99 s: every time in it is between 0 and 13.99.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s159.html`: one `<section class="vs-scene" id="s159" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
