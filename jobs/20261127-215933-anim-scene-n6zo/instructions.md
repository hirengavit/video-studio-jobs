# Fix animated scene s033

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s033" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s033), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s032.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s033.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The idea lands: heading first, Media Post card on "Media Post" (~4.0 s), postcard and wall icons on "postal stationery" and "premises". The seam from s032 (wipe from right, new card) is right. The first 4 s show only the heading, but it matches the line ("दो नाम जो Retail Post से मिलते-जुलते"), so it's acceptable. The card's empty body is what a viewer would notice.

Fixes:
1. Don't show the card's inner rules while the card is empty. The vertical divider between the two icon slots and the rule under "advertising की service" show from 4.0 s, so from 5.2 to 7.5 s a lone grey line floats in a blank white card. Hide the vertical divider until 7.46 (`fade` with the postcard, dur 0.4). Fade the horizontal rule with the meaning line at 5.20.
2. Move the `draw` of the wall icon and its "postal premises" caption from 9.22 to 9.75, on the word "premises". As it stands it arrives before the voice says it.
3. Move `highlight` "advertising" from 11.34 to about 5.9, just after the line has faded in. That way the mark sits on the word as it's said ("advertising की service", 5.2 s), not 6 s later over "media पर". The highlight then carries into s034 as it does now.

The scene lasts 12.40 s: every time in it is between 0 and 12.40.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s033.html`: one `<section class="vs-scene" id="s033" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
