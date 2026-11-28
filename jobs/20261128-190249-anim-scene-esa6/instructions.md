# Fix animated scene s076

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s076" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s076), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s075.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s076.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The "not a separate ₹1,50,000 per scheme" beat (0–5.36 s) is too small to see on a phone. The "jump" at 5.41 s is the planned cut to #doc and is fine.

1. Shot #limit: "हर scheme?" (about 30 px, far left) and the three ghost chips (about 30 px) are unreadable and sit on top of the source line. Remove the source line during this shot or move it to y 990. Draw the chips at 340×110 with "₹1,50,000" at 56 px slate, at x 340/860/1380, y 860. Put "हर scheme?" at 56 px #6f6a63 centred above the chips at y 800.
2. The plan calls for a `strike` on every chip plus a slate cross on each (3.88 / 4.18 s), but only one cross appears, off the chips at the far right. Strike all three chips and put a 44 px slate cross on each one, staggered 0.12 s.
3. Shot #doc: the chip "नई concessional regime: नहीं" is about 26 px and its cross covers "नहीं". Make it 620×100 at x 1100–1720, y 760–860 with text at 48 px and the slate cross outside the text at the right end (x ~1690). It must not touch the gist panel, so drop the gist to y 840–960 if needed.
4. Continuity with s074: the rebuilt card loses the yellow bands on "section 123" and "Schedule XV". Keep them static from the first frame of #doc, so the card really is "rebuilt identically".

The scene lasts 11.11 s: every time in it is between 0 and 11.11.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s076.html`: one `<section class="vs-scene" id="s076" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
