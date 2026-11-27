# Fix animated scene s080

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s080" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s080), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s079.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s080.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

₹40 pops on frame one with "₹40" and holds about 2 s. The cut to the Free MBU screen (the check's "jump" at 1.99 s) is the planned sub-shot cut on "अब बच्चों का MBU", so it is intended. The term card types its text at 2.8 s. Row 1 "5–7 साल" lands on "5 से 7 साल", "पहला biometric update" fades in on its words and the green "Free" lands at 8.76 s, all well timed. The empty band below is the stamp area the storyboard keeps for s082.

The problem is the red term card. The kit wants the English term bold and large with the Hindi beneath it. Instead, "Mandatory Biometric Update" is small (about 30 px), and "अनिवार्य बायोमेट्रिक अद्यतन" wraps onto a second line with tight leading, its "अद्यतन" line sitting close to the perforated bottom edge.

Fixes:
1. Term card (x 140–620, y 200–600): put "Free MBU" at 72 px with its baseline at y 300. Put "Mandatory" and "Biometric Update" on two lines at 38 px bold white (baselines y 372 and y 418). Put the Hindi "अनिवार्य बायोमेट्रिक" / "अद्यतन" on two lines at 40 px pale yellow with a 1.3 line height (baselines y 492 and y 544), leaving at least 40 px above the stamp edge. Don't shrink the Hindi.
2. Rows card: vertically centre each row's content in its 150 px row. For row 1, put "5–7 साल" at 60 px with its baseline at row top + 66 and "पहला biometric update" at 40 px at row top + 116, and centre the "Free" pill on the row's midline. That way the text doesn't hug the top rule and the empty lower half doesn't look like a missing item.
3. If s078 changes its row-5 date layout, this scene's `#table2` opening frame (0–1.9 s) must use the same layout.

The scene lasts 9.72 s: every time in it is between 0 and 9.72.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s080.html`: one `<section class="vs-scene" id="s080" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
