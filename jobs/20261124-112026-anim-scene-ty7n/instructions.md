# Fix animated scene s057

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s057" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s057), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s056.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s057.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s056 is exact and the five chips land on their words (सामान, packing, वज़न, size, details). The outline goes round all five at "सब नियम के हिसाब से" and the cut to #foreign comes on "अब विदेश डाक". The still stretches are the planned holds. The problem is the bottom of the card: the scene's point ("the label alone isn't enough") is the smallest and greyest thing on screen.

1. "काफ़ी नहीं" (right under the note box, about x 1000–1180, y 790) is small warm-grey supporting text, yet the voice opens on it. Make it 44 px bold ink (#2b2622) and put it next to the struck tag, not tucked under the note box. Keep the `write` at 0.00.
2. The slate strike on the packet tag's "Literature for the Blind" is drawn over about 20 px lettering and can't be seen on a phone. Grow the `packet-with-tag` to scale 1.0 (from about 0.8) so the tag words are at least 32 px, then strike them. Or add a slate cross (40 px) beside the tag at 0.00.
3. The five chips sit on the card's bottom edge (y about 895–925; the card ends at about 960), and the red "सब नियम के हिसाब से" label squeezes in between "काफ़ी नहीं" and the chips. Move the chip row up 40 px (or grow the card 60 px down to y 1000). Then put the label in a clear 50 px band above the outline, so nothing touches.
4. The chip labels are about 32 px. Raise them to 38–40 px (Hindi rule ≥ 36 px in the storyboard), keeping the five even widths.

The scene lasts 10.91 s: every time in it is between 0 and 10.91.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s057.html`: one `<section class="vs-scene" id="s057" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
