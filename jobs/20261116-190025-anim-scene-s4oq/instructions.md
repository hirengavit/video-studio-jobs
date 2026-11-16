# Fix animated scene s024

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s024" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s024), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s023.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s024.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The dashed 10 mm zone draws on "चारों ओर" and the stamp pulses with the frank alternative, both on time. The legend rows move up as the "Domestic envelope" card leaves at the start, which is smooth. But the new rows' text is below the kit's minimum, and the frank sits outside the top zone it is meant to share with the stamp.

1. Row 3's second line "कुछ छपा या लिखा नहीं" is about 28 px, and row 4's "ऊपर दाएँ" is the same. Raise both to at least 34 px Devanagari (kit: never under 32 px), with 1.3 line height. If the row can't fit two lines at that size, grow the row box to about 110 px tall; the legend has room below row 4 down to y 1000.
2. The `franking-impression` (with its "frank" label at about 28 px) sits below the stamp box, under the yellow top band and just above the 10 mm zone, so it seems to break the rules being taught. Place it inside the top band, just left of #stamp-box (for example, swap places with the "labels" icon or sit over it, dimming that icon), at scale ≥ 0.5. Set "frank" at 36 px or more.
3. Row 4 is an empty box from 8.18 s to 12.16 s. Write "Stamp / frank" at 10.3 s (on "stamp या frank impression"), then add "ऊपर दाएँ" at 13.2 s.
4. Row 3: write "पते के चारों ओर 10 mm" at 3.46 s as planned, but bring "कुछ छपा या लिखा नहीं" in at 6.4 s on its own words. Don't show it before the voice says it.

The scene lasts 14.18 s: every time in it is between 0 and 14.18. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s024.html`: one `<section class="vs-scene" id="s024" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
