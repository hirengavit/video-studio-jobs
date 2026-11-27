# Fix animated scene s192

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s192" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s192), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s191.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s192.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The first screen of three groups is never readable: the three cards sit empty for 2.5 s, and "बुनकर" and "छोटे व्यापारी" pop at 3.34 and 3.98, only about 0.6 s before the cut to #groupsB at 4.58. None of the frames shows all three. Screen notes say the full list of six (two screens of three) must be readable. The kit asks for a hold of at least 3 s.
1. Fill #groupsA early. Pop "छोटे व्यापारी" (not named by the voice, so it can't come too early) at 0.60 under "खासकर छोटे producers", "कारीगर" at 2.30 on its word, and "बुनकर" at 3.10. That way the first screen is complete from 3.1 s.
2. Move shot #groupsB from 4.58 to 5.00, on "MSMEs" (said ~4.6–5.3). Pop "MSMEs" at 5.00, its Hindi at 5.40, and "महिला उद्यमी" and "Self-Help Groups" with `{stagger: 0.4}` from 5.80. #groupsA then holds complete for about 1.9 s, and its first card for 2.7 s.
3. Move shot #partner from 8.82 to 9.40 ("इसमें Department of Posts" is said ~8.6–10.5), so that #groupsB with its footer "पूरी list: 6 समूह" (keep at 7.24) holds about 4.4 s. Pop the left card at 9.60.
4. Keep "CBIC" at 11.72, on its word.

The scene lasts 13.18 s: every time in it is between 0 and 13.18.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s192.html`: one `<section class="vs-scene" id="s192" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
