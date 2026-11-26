# Fix animated scene s179

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s179" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s179), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s178.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s179.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s178 matches, and "उसी दिन" completes row 4 on its word. Row 5 is broken, though. "Request पूरी न हो: सिर्फ request fee वापस" lands at 0.84 s on the card's bottom edge and runs into the source line "Regs. 55, 57 · Schedule I, Table VI · 2024" (frames at 2.5 s and 4.7 s). It sits right under row 4's second line with no gap. A viewer sees text overlapping text for about 4 s. Then list 4 (shot `#d`) arrives with fees and limits (free / ₹6, 3 months, 7 days, demurrage) but no source anywhere, which the kit requires for fees and limits.

1. List 3 (shot `#c`): make the card about 70 px taller, or tighten rows 2–4 by about 14 px each, so row 5 gets the same row height and divider as the rows above it. Move the source line below row 5 with at least 20 px clear. Nothing may share a spot with it.
2. Row 4: give its second line ("counter booking: उसी दिन") the same bottom padding the other two-line row (row 1) has. Row 5's bar must not start right under that line.
3. List 4 (shot `#d`, 5.10 s): put a source line at the card's bottom, in the same grey and size as list 3's: "Regs. 55–58, 69, 119A, 126–127 · Schedule III, Table XI · 2024". Size the card now for all five rows it will hold through s182, so the source never collides later.
4. Row 1 of list 4: bring in "same delivery area: free" at about 8.3 s (on "same post office") rather than 7.90 s, so it doesn't run ahead of the voice.

The scene lasts 11.24 s: every time in it is between 0 and 11.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s179.html`: one `<section class="vs-scene" id="s179" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
