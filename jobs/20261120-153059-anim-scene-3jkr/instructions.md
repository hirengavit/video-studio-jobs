# Fix animated scene s184

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s184" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s184), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s183.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s184.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The beats land on their words: the blank's highlight + "रकम" on "रकम", the green "booking में मदद ✓" on "मदद", the slate "booking की जगह" + cross on "जगह नहीं लेते", the Cash on delivery term on "Cash", the authority line on "संबंधित postal authority" and "Agreement" on "agreement" (10.8). The stills are reading holds. The empty right half of #cod is kept for s185. What's needed is the seam fix, plus a slightly short hold on the slate card.

Fixes:
1. Carry over the envelope with s183's corrected band and marks (band local x 170–490, y 140–210; marks at local x 185). The first frame must match s183's last frame. Move the `highlight` on the blank and the "रकम" chip (1.02) with it: the chip goes just right of the blank, still clear of the stamp box.
2. Move the cut to #cod from 6.88 to 7.20 (just before "Cash" at 7.3). Shift the term reveal to 7.20 (Hindi 7.70) so the slate card and its cross hold about 2.1 s rather than 1.8 s.

The scene lasts 12.26 s: every time in it is between 0 and 12.26.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s184.html`: one `<section class="vs-scene" id="s184" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
