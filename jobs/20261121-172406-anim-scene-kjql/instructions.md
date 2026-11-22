# Fix animated scene s108

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s108" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s108), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s107.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s108.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Row 4 is outlined on "चार", and "पूरे चिपके" highlights at about 7 s, on its words (5.7–8.7 s). The amber "→ पीछे की side" notes on rows 2 and 3 tie this back to the address labels. Two things to fix. The notes appear at about 9.7 s, a second before the voice says "पीछे की side" (about 10.9 s): "दोनों address labels" is at 8.7 s. And the table text is still under the phone-readable size.

Fixes:
1. Row 4 text: hidden at 0.00 (matching the fixed s107 end state), then `fade` at 0.00–0.4 on "चार". Use the same bigger type as s106 and s107: main line 40px, possibly wrapping to two lines; sub-line 34px in ink. Taller rows, with the card still inside y 190–980.
2. Move the two amber "→ पीछे की side" notes from 9.34 to about 10.8 s so they land on "पीछे की side". At 9.0 s, on "दोनों address labels", give rows 2 and 3 a soft #fde9a6 outline pulse instead, so something marks the two labels when they're named.
3. Set the note pills' text to at least 32px Noto Sans Devanagari, deep amber #8a5d00 on #fde9a6, kept inside the row's right end and not touching the row text.

The scene lasts 12.02 s: every time in it is between 0 and 12.02.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s108.html`: one `<section class="vs-scene" id="s108" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
