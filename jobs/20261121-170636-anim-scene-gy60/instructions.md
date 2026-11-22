# Fix animated scene s052

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s052" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s052), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s051.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s052.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The bottom strip ("Envelope की आम 8 शर्तें" | "+ Window की शर्तें") sits at about y 1010–1060, below the content area and against the frame's bottom edge, and it nearly touches the envelope's bottom outline. Scale the `#win` window-envelope from 2.4 to 2.2 (keep x 240; keep its top where it is, or lift it to y 200). Then place the strip at y 900–980, with at least 24 px clear of the envelope's base.
2. Strip text is about 40 px and the left half is grey on a grey pill, so it is hard to read on a phone. Set both halves to 48 px. Give the left half ink #2b2622 on sand #f3ead6, and keep the right half on highlight #f2b705 / #fde9a6.
3. The tag "कागज़ न खिसके" (5.0 s) touches the window's bottom-right corner. Move it 40 px right and 30 px down so it sits clear of the window outline, or put it inside the envelope below the window, centred at the window's x, at y window-bottom + 40. Keep its `fade` at about 5.6 s (narration "न खिसके" at 5.9 s).
4. Make the soft nudge of the inner sheet (`move` [-14, 0] and back at 1.84 s) visible on "envelope सँभालते समय" (1.8–3.9 s). The motion strip shows almost nothing there. Use [-24, 0] over 0.5 s out and 0.5 s back, so the "doesn't shift" idea is seen before the tag lands.

The scene lasts 12.04 s: every time in it is between 0 and 12.04.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s052.html`: one `<section class="vs-scene" id="s052" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
