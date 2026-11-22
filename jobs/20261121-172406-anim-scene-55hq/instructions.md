# Fix animated scene s112

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s112" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s112), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s111.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s112.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s111 is continuous. Card 2 (yellow border, "0" stamp) slides in on "domestic postcard". "छूट नहीं" is underlined. The "size बिना छूट के तय: 140 × 90 mm" line follows "Domestic postcard का size". The remember bar "2 mm की छूट: International postcard पर" arrives on "2 mm की छूट", and "International" is highlighted on its word. The order and timing are good. But the cards are as small as in s111: "छूट नहीं" and the size line are about 24–26 px Hindi, the 140 × 90 mm figure is hard to read on a phone, and the bottom third stays empty. The size line is also first drawn in light grey at about 2.5 s, then turns to ink, which looks like a flicker rather than a build.

Fixes:
1. Use the same larger trap layout as the fixed s111: cards about 800 × 400 px, at x 140–940 and x 980–1780, y about 240–640, with one `scale` on the group. Put the remember bar at y about 700–800, full width (x 140–1780), with 42px text.
2. Card 2 text: "Domestic postcard" at 48px bold. "छूट नहीं" at 40px Noto Sans Devanagari, keeping the `underline` at 1.52 under it. The size line at 34px or more in ink #2b2622, broken into two lines if needed ("size बिना छूट के तय:" / "140 × 90 mm" in bold Inter 40px).
3. Make the size line a single `fade` from 0 to full ink at 2.36 s (about 0.4 s), with no intermediate grey state.
4. Keep the "International" highlight on its word, at about 9.6 s.

The scene lasts 11.32 s: every time in it is between 0 and 11.32.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s112.html`: one `<section class="vs-scene" id="s112" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
