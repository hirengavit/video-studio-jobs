# Fix animated scene s061

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s061" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s061), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s060.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s061.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s060 is clean, the sand fills the gap between the bottle and the outline on "सोखने", and the jump at 5.74 s is the planned change to the two term cards ("अब fragile और perishable"), so it is intended.

1. The empty Perishable card: at 5.5 s both stamp cards appear, but the right card stays a blank red card until "Perishable" pops at 7.12 s. Put the right card, its "Perishable" term and its Hindi line in one group and bring the group in together at 7.12 s with `pop`. Only the Fragile card (with "Fragile" at 5.70 s) comes in at 5.5 s.
2. The label "सारा liquid सोख ले" sits under "बाहर का box" at about y 1016, nearly on the bottom edge of the frame and smaller than the other lines. Move it to the right column under the slate chip, at x 1000, y 860, in Hindi 44 px ink. Keep the `highlight` on "सारा" at 3.60 s.
3. After 5.5 s the lower half of the screen (y 560–1080) is empty except for one line at 10.4 s. Move both term cards down so they sit at y 260–580 and the meaning lines at y 660–820. That keeps s062's bottom band (y 840–980) clear and balances the frame.

The scene lasts 11.28 s: every time in it is between 0 and 11.28.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s061.html`: one `<section class="vs-scene" id="s061" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
