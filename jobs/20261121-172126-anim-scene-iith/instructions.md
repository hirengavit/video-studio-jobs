# Fix animated scene s103

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s103" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s103), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s102.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s103.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is clean: s102's tags and photo dim in place. The stamp `pulse` lands on "ऊपर right-hand corner" (2.1–4.6), and the labels arrive on their words. But the planned close-up on the corner barely happens, and the corner is crowded with three stamp-like boxes. The 50 p stamp, s102's dimmed adhesive stamp plus franking ring, and the new dotted box all sit side by side. A viewer can't easily see that the dotted box means "the stamp's place".

1. At 0.00, fade s102's `adhesive-stamp` and `franking-impression` out completely (opacity 0 over 0.4 s), not just dim them. The corner should hold only the printed 50 p stamp and, later, the dotted box.
2. Draw the dotted box at 5.52 the same size as the stamp, in ink #2b2622 dots (3 px, rounded) rather than red. Place it in the space the removed adhesive stamp leaves, directly left of the 50 p stamp, so it reads as "a stamp goes here". Shorten "lines / dots से जगह" so it sits just under it, not over the address lines.
3. Make the camera move do its job. Use {on:'#service-postcard-stamp', zoom:1.35} over 0.0–1.0 (1.5 pushes the labels off the bottom), and check that the stamp, the dotted box and both labels (y up to about 860) stay in frame. Keep the return to zoom 1 at 10.52.
4. Keep the two labels until the cut rather than clearing them with the zoom-out at 10.5. The voice is still on "stamp की जगह दिखाई जा सकती है" until about 10.9.

The scene lasts 11.12 s: every time in it is between 0 and 11.12.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s103.html`: one `<section class="vs-scene" id="s103" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
