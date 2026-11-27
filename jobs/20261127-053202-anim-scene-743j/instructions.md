# Fix animated scene s154

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s154" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s154), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s153.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s154.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s153 is exact, and the highlight moves to row 2 on "रविवार" (5.4 s). The calendar icon with its cross lands during "नहीं गिनी जातीं". The problem is the new row 1 sub-line, which is too small to read on a phone.

1. Row 1 grey sub-line "Counter खुला है, इसका मतलब उस दिन का dispatch बाकी है, ऐसा नहीं": it renders at about 28 px. Set font-size to 36 (class hi, fill #6f6a63) as the storyboard says; the kit's minimum for Hindi is 32 px. Keep it at x 260, y 338, and keep it clear of row 2's highlight band (band top about y 395). If it runs past x 1760 at 36 px, tighten the text, but never go below 36.
2. Make sure "ऐसा नहीं" turns slate #4b4f58 at 4.16 s (on "नहीं है", voice 3.8–5.0). On the sheet it's hard to tell it apart from the grey line, so make it bold as well, so the colour change can be seen.
3. Slate calendar icon on row 2: enlarge it to about 72 px tall (it's about 50 px now) and centre it on the row-2 band at x 1640, so it reads as a calendar with a cross on a phone.

The scene lasts 8.86 s: every time in it is between 0 and 8.86.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s154.html`: one `<section class="vs-scene" id="s154" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
