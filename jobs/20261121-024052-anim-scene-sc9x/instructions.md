# Fix animated scene s026

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s026" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s026), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s025.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s026.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The crosses at 1.8 s land on "इनमें से किसी से". The line "counter acceptance पूरी नहीं" arrives as it is said, and the trap banner with "proper booking" highlighted at 9.92 matches the voice (10.3). The still stretches are reading holds and are intended.

1. Physics: the envelope in card 3 sits over the pillar's dome, tilted, like a hat. It should go into the slot. Place it at the pillar's `mouth` anchor, half inside the slot (lower half hidden behind the box face), tilted at most 5°, and `slide` it down about 30 px into the mouth at 0.46.
2. Card 3 should arrive with its content: `pop` the card frame together with the pillar at 0.0 (this pairs with the s025 fix that leaves card 3 out of s025). The cut from s025 should never show an empty white frame.
3. The pillar in card 3 is much smaller than the envelopes in cards 1 and 2. Scale `letter-box-pillar` up about 1.3× so it fills about 75 % of the card's height, with its base resting on the same line as the envelopes' bottoms.
4. The trap banner's bottom edge almost touches the card tops. Keep at least 24 px between them: move the three cards (with their crosses) and the line beneath down 30 px, or set the banner to y 200–310.

The scene lasts 12.67 s: every time in it is between 0 and 12.67.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s026.html`: one `<section class="vs-scene" id="s026" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
