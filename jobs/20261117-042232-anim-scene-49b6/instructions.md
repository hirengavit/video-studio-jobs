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
The seam matches s025. 1933, the date stamp, the Rules label and "लागू" each land on their words. But "Post Office Regulations" exists only as the tiny lettering on the book cover (about 28 px). That makes half of the "Rules 2024 और Regulations 2024" line hard to read on a phone.

1. Book cover #regulations-book title panel: set "Post Office" and "Regulations" to Inter 700 at 36 px, with "2024" at 64 px. Widen the white title panel inside the scene drawing so "Regulations" fits with about 12 px margin each side, or scale the whole regulations-book to 1.15 (one scale number) and keep its base on the same spot. The goal is cover text of at least 36 px, typed at 9.14 as now.
2. Date-stamp ring at the track midpoint (960, 880): its "16 DEC 2024" lettering is about 20 px and unreadable. Scale the postal-date-stamp up (about 1.4) so the ring text is at least 32 px, or leave the ring blank and let "16 दिसंबर 2024" below carry the date. Keep the ring clear of "1933" and of the Rules label.

The scene lasts 12.48 s: every time in it is between 0 and 12.48.

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
