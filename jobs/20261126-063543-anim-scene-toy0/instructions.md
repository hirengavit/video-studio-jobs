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
A clean cut into the "two words" layout. The label arrives at 2.28 s and "postman न जानता हो" at 4.94 s. "may seek identification" types from 7.7 s on "पहचान माँग सकता", and the yellow `highlight` on "may" lands on "शब्द है may" (10.5 s). Georgia on white document cards with the #ead9a8 border and the Reg. 54 postmark follow the kit. The long still (2.5–10.4 s) contains only small text fades, which is acceptable. Problems:
1. The right card frame sits empty for the whole scene (about 12 s, then 2.6 s more in s053): a big white box with nothing in it. Don't show it in s052. Start `#card-right` hidden and let s053 bring it in (`fade` 0.4 s at s053 2.40, just before its label at 2.58).
2. The left card is also empty for the first 2.3 s. Either bring its label "Addressee / authorised person" in at 0.3 s (it is the card's first item), or bring the card itself in on "Addressee" (≈2.3 s) with the label, so the card never waits empty.
3. Don't put the postmark `stamp` on the same moment as the "may" highlight (10.62 s); move the `stamp` to ≈11.3 s, after the highlight lands. Better still, place the postmark-ring at scale 0.6 to the right of the heading (x ≈1300–1720, y 150–270). That keeps the bottom row free for the two gist strips and the s055 summary band (see s053–s055).

The scene lasts 11.46 s: every time in it is between 0 and 11.46.

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
