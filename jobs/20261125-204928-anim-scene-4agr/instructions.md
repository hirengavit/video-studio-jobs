# Fix animated scene s158

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s158" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s158), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s157.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s158.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. The village card's text is made up: it says "पहली पेशी या सूचना देने के बाद डाकघर लौटने के अगले दिन से", but the voice (and the storyboard) say only "गिनती intimation मिलने से". Replace the card's lines with "Village postman" (Inter 700, 48 px, red) and under it "गिनती: intimation मिलने से" (Noto Sans Devanagari, 48 px, ink), then `highlight` "intimation" at 2.9 s.
2. The white village card stands empty except for its icon from 0.0 to 2.9 s. Bring in the "Village postman" line with the card at 0.0, and fade the "गिनती: intimation मिलने से" line in at 2.9 s on "गिनती intimation".
3. Make the card readable on a phone: grow it to about x 100–960, y 830–990, set the icon to scale ≈ 0.9 at its left, and make no Hindi line smaller than 44 px (it is about 34 px now).
4. The "Sunday / holiday" marker (8.26 s) sits right on top of the "रखना · 7 दिन" label and its leader runs into the start of the "extension:" label. Raise the marker so its centre is at y ≈ 410 (its bottom clear of the label by at least 16 px), and keep the leader on the day-7 tick at x 852, ending above the band at y 565.
5. Seam: start with the flag's "या intimation" exactly as s157 ends it (same size and highlight), so nothing changes at the cut.

The scene lasts 11.16 s: every time in it is between 0 and 11.16.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s158.html`: one `<section class="vs-scene" id="s158" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
