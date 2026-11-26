# Fix animated scene s144

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s144" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s144), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s143.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s144.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The story reads. "Accountable inward item · addressee" is on as the voice starts. "Office of delivery" is highlighted at about 3.7 s. The forked arrow and "Redirection" land at about 5.4 s ("redirection माँग", 4.2–6.6). The soft yellow area holds both houses at about 7.8 s ("दोनों पते उसी post office के delivery area", 6.6–11.1), and "Free" stamps at about 11.6 s on "तो free". The problem is that the whole diagram shrinks at about 5 s to make room for the houses, and its labels shrink with it.

1. "Office of delivery" label: after the shrink it is about 26 px, too small to read on a phone, and the voice has just named it. Keep the label outside the scaled group at 40–44 px under the office, and keep its highlight band.
2. "same delivery area": it is about 28 px at the top of the yellow area. Set it to 44 px as the storyboard says, and centre it above the two houses inside the area. Make the area about 40 px taller if needed, rather than shrinking the text.
3. The re-layout at about 5 s: the globe, arrow, plane and office all scale down by about 35 % in one move, right after the highlight. Make it smaller: keep the office at scale 1.0 and only move it left (to about x 960–1280). Shrink only the globe (scale 0.75, x 140–420) and the arrow between them. Then draw the fork to the houses at x 1440–1720. Start the move at 4.4 s and finish by 5.2 s, before "Redirection" stamps, so the move and the stamp don't stack.
4. The bottom label "Accountable inward item · addressee" shifts left and down during the re-layout, from y about 935 to about 1000. Keep it fixed at its first position for the whole scene.

The scene lasts 12.46 s: every time in it is between 0 and 12.46.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s144.html`: one `<section class="vs-scene" id="s144" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
