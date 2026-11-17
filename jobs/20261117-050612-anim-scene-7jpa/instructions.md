# Fix animated scene s117

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s117" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s117), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s116.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s117.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The swap from the Speed Post lines to two value tiles reads well. "₹5 लाख" stamps on its words (2.6), and the "₹20,000" stamp lands on 10.44 as it is said. The long still from 4.2 to 10.3 s is fine: it holds the ₹5 lakh tile while the voice moves on. Two things a viewer would notice: the white "अलग limit" pill and the grey "अधिकतम" are only about 20–24 px, and the "Currency / bank notes" label appears before the voice reaches "Currency".

1. Tile 2: enlarge the "अलग limit" pill so its text is 32 px (pill about 50 px high), centred under "Currency / bank notes", with at least 12 px clearance above the "₹20,000" pill.
2. Tile 1: set "अधिकतम" to 32 px #6f6a63 (Noto Sans Devanagari, line-height 1.3), keeping the "₹5 लाख" pill below it clear by 12 px or more. Grow both tiles' height by about 40 px if needed; the card has room below them.
3. Move the tile 2 label "Currency / bank notes" from 3.92 to 4.35 so it appears with the spoken word "Currency".

The scene lasts 11.10 s: every time in it is between 0 and 11.10.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s117.html`: one `<section class="vs-scene" id="s117" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
