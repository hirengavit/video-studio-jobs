# Fix animated scene s111

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s111" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s111), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s110.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `exam-trap` (Exam trap): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: exam-trap: the banner sentence, the two cards' labels, names, Hindi lines and stamp numbers or short codes (up to about 4 characters), which card is the trap, the underlined words, the remember bar.

## What to change

The current file is `inputs/current/s111.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The folded-card beat works. "POST CARD" is typed on at about 2 s, then struck through with a slate strike and a slate cross. "postcard नहीं बनता" lands on its words, about 3.2–4.6 s. The #trap banner arrives with "Size पर एक trap". Card 1 slides in, and the "±2" stamp lands on "2 mm की छूट" (about 8.9 s). The problem is the size of the trap cards. Card 1 is about a fifth of the frame, the sub-line "± 2 mm छूट" is about 26 px (under the kit's 32 px for Hindi), and the bottom half of the frame stays empty from about 6.4 s to the end. On a phone, the size difference the scene is about is too small to read.

Fixes:
1. Scale the trap layout up so the two card slots fill the space under the banner. Each card about 800 × 400 px: card 1 at x 140–940 and card 2's reserved slot at x 980–1780, at y about 240–640. Use one `scale` number on the component group, not separate x and y scales. The s112 remember bar then fits at about y 700–800.
2. Card 1 text: "Envelope" at 48px bold Inter. "± 2 mm छूट" at 38px Noto Sans Devanagari in ink #2b2622 (not light grey). Enlarge the "±2" stamp to match (about 130 px square).
3. Bring card 1's `slide` forward from 7.46 to about 6.9 s, on "Envelope", so the banner doesn't sit alone over an empty cream field for a full second.

The scene lasts 10.38 s: every time in it is between 0 and 10.38.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s111.html`: one `<section class="vs-scene" id="s111" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
