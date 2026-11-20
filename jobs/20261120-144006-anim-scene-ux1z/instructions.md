# Fix animated scene s019

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s019" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s019), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s018.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s019.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut-away box is a good, literal picture: inner item, wax-cloth layer drawn on "Wax-cloth हमेशा अंदर", kraft layer drawn on "बाहर मज़बूत कागज़", labels with leader lines on the right. The long still 5.5–13.0 s is mostly fine (the narration is still on the outer paper), but the payoff of the scene, "stamps चिपकते हैं, और date stamps की साफ़ छाप", is the weakest thing on screen: the two stamps are tiny slivers at the back edge of the top face, and the date-stamp impression over them is a faint thin ring you can barely see on a phone. "साफ़ छाप" (clear impression) is shown as an unclear mark.

Fixes:
1. Move the two stamps from the far edge of the top face to the front-right face of the kraft box (the side facing us, roughly x 880–1060, y 470–560) and make each about 90×110 px (about 2.5× now), so they are clearly stuck on the outer paper; keep the `pop` at ≈9.9 s (on "stamps चिपकते").
2. Make the date-stamp impression readable: postal-date-stamp at scale 0.8 (not 0.5) centred over the stamps, stroke in ink #2b2622 at full opacity (no low alpha), `stamp` at ≈12.7 s on "date stamps" instead of 11.76 s.
3. End the "साफ़ छाप" leader line on the ring's edge, so the label clearly names the mark; keep the `underline` at 13.66 s.

The scene lasts 14.76 s: every time in it is between 0 and 14.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s019.html`: one `<section class="vs-scene" id="s019" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
