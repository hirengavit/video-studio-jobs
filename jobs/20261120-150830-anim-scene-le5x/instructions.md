# Fix animated scene s107

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s107" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s107), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s106.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s107.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s106 matches. "coins · currency notes" is typed into the money chip on its words, the title swaps on "बिना insurance", and INSURED pulses. The value tag lands on "असली value" and "booking". The tag is the problem. Its second line ("booking पर बताइए") renders at about 27 px and can't be read on a phone. The tag's right edge also touches the groups panel's left edge (about x 1000). The holds (0.25–3.9 s, 5.2–7.6 s, 7.9–11 s) are fine reading time.

Fixes:
1. #value-tag: make the card 280×150 and place it at x 600–880, y 440–590, so there is at least 20 px clear of the groups panel (x 900). Keep the ink string from the case's hasp to the tag's hole.
2. Tag text: "असली value" 44 px bold ink on line 1 (baseline y +55 inside the tag), and "booking पर बताइए" 40 px on line 2 (baseline y +110). If line 2 doesn't fit 240 px at 40 px, split it into "booking पर" / "बताइए" and make the tag 280×190 (y 430–620); it still clears the INSURED card at y 760.
3. Keep the `underline` on "असली value" under line 1 only (y +68 inside the tag), so it doesn't touch line 2.

The scene lasts 11.10 s: every time in it is between 0 and 11.10.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s107.html`: one `<section class="vs-scene" id="s107" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
