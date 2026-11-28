# Fix animated scene s073

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s073" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s073), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s072.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s073.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The idea reads (four passbooks, only 5 years gets the green tag), but the bottom row of tags is too small for a phone. The content also sits in the top 60% of the frame and leaves y 760–1000 empty. The stills at 0.25–1.74 s and 6.7–12.9 s are fine as holds: the heading holds, then the tag holds while the voice explains.

1. The "Deduction नहीं" tags (13.02 s) render at about 36 px with tiny crosses. Make each tag 300×110 at y 820–930, the same size as the green "Deduction · कटौती" tag, with text at 52 px (Hindi 48 px) and a 40 px slate cross at the tag's right end, not squeezed against the text.
2. The 8.08–9.26 s `color` to #6f6a63 barely shows on the sheet (the 1-year label and passbooks still read as ink at 8.9 s and 11.9 s). Grey all three labels and the three passbooks together (`color` the label text and set each passbook group to opacity 0.5), keeping the 8.08 / 8.22 / 9.26 stagger, so the 5-year book clearly stands alone.
3. Use the frame: raise the passbook scale from about 0.95 to 1.15 and drop the row so the base sits at y 800, with the tags at y 840–950. The row then fills the content area instead of hovering under the heading.
4. The "TD · SB-5A" lettering on the passbook labels is unreadable at this size. Either write it at 30 px or more, or drop it here (the year labels above already name each book).

The scene lasts 14.93 s: every time in it is between 0 and 14.93.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s073.html`: one `<section class="vs-scene" id="s073" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
