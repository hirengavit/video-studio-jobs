# Fix animated scene s175

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s175" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s175), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s174.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s175.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The storyboard says list B uses the "same card layout" as list A (s173–s174): a white list card (x 140–1780, y 180–990, #ead9a8 border) with a red header strip "याद रखिए · 2" at 44 px, and rows 150 px apart with yellow bullets and 52 px ink lines. Instead it renders as the red stamp-edged Exam angle card with white row pills, so the "याद रखिए" series switches look between 1 and 2. Rebuild the card as s173's list card, with the header "याद रखिए · 2", and keep the same layout in s176.
2. Row 1's second line "initials, बनावटी नाम, निशान: नहीं" is about 36 px grey, too small for a phone and below the kit's floor. Set it to 44 px #6f6a63 (as the storyboard says), on its own line 56 px under row 1.
3. That line `fade`s in after 2.2 s and is fully on only by about 3.9 s, while the voice says "initials, बनावटी नाम या निशान नहीं" from 2.2 to 6.8 s. Start the fade at 2.22 s with duration 0.4 s, so it is on as "initials" is said.
4. The "3 साल valid" addition to row 2 sits as a small grey second line. The storyboard has it joining row 2 ("row 2 adds"). Append it at 52 px inline after "Head Post Office से," (or put it on line 2 at 48 px ink) at 8.10 s, on "3 साल valid" (8.1 s).

The scene lasts 9.66 s: every time in it is between 0 and 9.66.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s175.html`: one `<section class="vs-scene" id="s175" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
