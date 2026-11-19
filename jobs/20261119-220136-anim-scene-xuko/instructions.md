# Fix animated scene s127

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s127" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s127), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s126.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s127.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s126 is clean. Card 4 builds on "Aerogramme" (4.00), cards 1–3 fade to grey as the band arrives (8.12), and "Inland letter card" lands with its strike on "नहीं बन जाता". The point reads clearly.

Fixes:
1. Card 3's meaning line 2 "अंदर letter या allowed चीज़ें" is squeezed into small type (below 32 px) on two cramped lines that touch the line above and the card's bottom edge. Set it to 34 px on two lines ("अंदर letter या" / "allowed चीज़ें") with a line height of about 44 px. Make room by moving card 3's term, Hindi and line 1 up (or scaling the envelope piece to 0.62), so the last line ends at least 24 px above y 830.
2. Card 3's Hindi term "छपे टिकट वाला लिफ़ाफ़ा" has the same problem as in s126: it runs edge to edge and is below 32 px. Match the s126 fix (two lines at 34 px) so the seam stays identical.
3. From 8.12 to 11.62, "Aerogramme ≠" sits alone off-centre in a wide empty band. Centre the full line "Aerogramme ≠ Inland letter card" at x 960 (text-anchor middle on the group), so the left part doesn't jump and the later half lands in its final place.
4. Raise the band's Hindi line "कीमत के नियम में नाम साथ, फिर भी अलग" to the planned 40 px (it reads at about 30 px), keeping it inside the band (y 850–990) with 16 px of clear space under the 56 px line.

The scene lasts 14.48 s: every time in it is between 0 and 14.48.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s127.html`: one `<section class="vs-scene" id="s127" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
