# Fix animated scene s172

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s172" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s172), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s171.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s172.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is exact (`#a`), and the cut to `#b` at 2.09 clears the sender tiles on "Postcard पर…". The chip "कुछ नहीं जोड़ते · बस 4 चीज़ें" lands on "बस चार चीज़ें" (about 5). The stills match the planned reading holds. One real problem: tile 1's frame sits empty for over two seconds before its words come in.

Fixes:
1. Tile 1: the frame and badge pop at 6.23, but the stamp icon (7.13) and the text "Postage / postal fee के stamps" (8.55) come long after it. Bring the icon in with the frame at 6.6 ("postage", about 6.2–7.7). Fade the text at 7.0 so it lands while "postage या postal fee" is being said; keep the "stamps" highlight at 9.27.
2. Tile text: "Postage / postal fee के stamps" wraps to three cramped 32 px lines next to a 40 px icon. Set it to 36 px, and give the icon a fixed 70 px column with 16 px before the text so the lines don't crowd the icon.
3. Chip (x 820–1120): the two Hindi lines nearly touch the chip edges. Add 14 px of vertical padding, line height 1.3, and keep 30 px or more from each card border.

The scene lasts 9.75 s: every time in it is between 0 and 9.75.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s172.html`: one `<section class="vs-scene" id="s172" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
