# Fix animated scene s101

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s101" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s101), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s100.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s101.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. From 2.5 s, "जल्दी बंद करने की न्यूनतम अवधि" runs right up to the highlighted "Maturity" label, with about 10 px between them, so on a phone they read as one line. Right-align the whole phrase at x 1380 (and keep it matching s100's end state), so there is a gap of 40 px or more before "Maturity".
2. The "5 साल ही" chip (2.98) is about 28 px tall and sits on top of the connector line from segment B. Make it a 44 px chip on soft yellow #fde9a6, placed at x 1290–1570, y 520–580, to the left of the connector line, so it touches neither the line nor the zone B card.
3. On #old, the date's month and year are only in the calendar strip, at about 26 px ("November 2023" at scale 1.0), which you can't read on a phone, and this date is the point of the line. Change the first text line from "से पहले खुले" to "9 Nov 2023 से पहले खुले", 56 px at y 230 (the same form as the s099 chip), and reveal it on its words from 5.39. Keep the calendar page as it is.
4. "9" stamps in red here, while s098 and s104 stamp "10" in ink. Use ink #2b2b2b for the "9" as well, so the dates read as the same kind of thing (red is for headings and cards, not one date).

The scene lasts 11.75 s: every time in it is between 0 and 11.75.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s101.html`: one `<section class="vs-scene" id="s101" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
