# Fix animated scene s072

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s072" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s072), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s071.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s072.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s071 is exact. The stamp lands on "item नहीं लिया जाता", the tag slides up and ties to the parcel's string on "address label, जो item से बँधा हो", and a green tick and caption close it. Physics is fine: the tag hangs from the string. The text is the weak spot:
1. The round slate stamp's words "नहीं लिया जाता" are about 30 px inside a ~200 px circle. That is the verdict of the scene and is hard to read on a phone. Make the stamp Ø 260 (as boarded, ~240+) and the lettering 48 px bold slate on two lines, still over the parcel's upper right.
2. "हल:" sits alone and small (~40 px) at the top right from 2.64 s to 7.0 s, jammed just under the series pill. Raise it to 52 px (as boarded) and move it down to y 300, so it clears the PRODUCTS pill. Move the right column rows down 40 px to keep the gap.
3. The caption "बड़ा, साफ़, बँधा हुआ" (7.00 s) is green, but in this kit green means a correct answer. Draw it in ink (#2b2622) at 52 px and keep the green only on the tick on the label.
4. The address-label-tag partly covers the parcel's own address zone and hangs past the parcel's bottom edge. Move it to (980, 940) at scale 1.2, so its top half rests on the parcel's lower right and it clearly reads as tied on, with only its tail below the edge.

The scene lasts 9.36 s: every time in it is between 0 and 9.36.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s072.html`: one `<section class="vs-scene" id="s072" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
