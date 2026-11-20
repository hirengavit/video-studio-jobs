# Fix animated scene s203

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s203" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s203), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s202.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s203.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The still stretches are reading holds and are fine. The badge turns green on "दूसरी", followed by the cut to the empty point-2 card. This clearly closes point 1 and opens point 2, and the seam with s202 matches.

1. Point 2 row 1 pill ("चारों तरफ़ लगातार बंद · U shape में मोड़"): the text wraps onto two lines inside a one-line pill and is shrunk to fit, with the lines touching the pill's top and bottom edges. That breaks the kit's "never shrink Hindi; never touching a card edge" rule. Keep the Hindi at 40 px: grow this pill to 2 lines (height ≈ 104, line height 1.3) centred in the 130 px row. Put "चारों तरफ़ लगातार बंद" on line 1 and "· U shape में मोड़" on line 2, with the tick centred on the pill.
2. The "Packing ठीक नहीं → India Post Parcel booking" band (3.94 s) is a light-grey panel with dark text, but the matching "can't be sent" band in s207 is solid slate #4b4f58 with white text. Make this one the same: fill #4b4f58, text #ffffff, at the same 42 px. That way the "not allowed" message looks the same both times.
3. Make sure the slate cross at 7.14 s sits clearly on "India Post Parcel booking" (cross 36 px, stroke 4, white on the slate band, just left of the phrase). Without it the band reads "Packing not OK → booking" with no "no", and the cut comes at 8.17 s. If the cross can't be fitted, write "booking नहीं" at 6.02 instead.

The scene lasts 15.96 s: every time in it is between 0 and 15.96.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s203.html`: one `<section class="vs-scene" id="s203" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
