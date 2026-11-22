# Fix animated scene s100

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s100" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s100), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s099.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s100.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s099 is clean, and the slate cross with "postcard नहीं" lands on "तो वो postcard नहीं" (0.0) in the right slate colour. The problem is timing in the bottom band. The wrong idea is on screen before the voice says it, and it is struck before the voice denies it, so for about 3 s a viewer reads "बराबर मोटाई ज़रूरी" as if it were the rule.

1. Move the `fade` of the line "बराबर मोटाई ज़रूरी" from 2.00 to 5.00, just after "मतलब" (4.8), so it appears with "बिल्कुल बराबर मोटाई".
2. Move the slate `strike` from 5.42 to 7.30, on "नहीं है".
3. Move "बस minimum मज़बूती" from 8.28 to 8.80 ("ये बस"), and the `highlight` on "minimum" from 9.08 to about 9.50, when "minimum" is spoken.
4. Between 0.0 and 5.0 the bottom band would now sit empty. Bring the band itself in at 4.6 (`fade`) instead of having it waiting, so no empty container sits on screen. Also centre the two lines in the band (struck line at the band's centre minus 26 px, new line plus 26 px) so the struck line no longer touches the band's top edge.

The scene lasts 11.54 s: every time in it is between 0 and 11.54.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s100.html`: one `<section class="vs-scene" id="s100" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
