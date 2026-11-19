# Fix animated scene s002

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s002" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s002), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s001.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s002.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The fade from s001 suits a new idea. The books are well spaced, the Rules and Regulations books arrive on their words, and the yellow outline and the postmark land on "16 December 2024 से लागू". The still stretches are reading holds and are fine. The one real problem is the postmark: its lettering is too small and cramped for a phone. "16 December" runs into the ring on the left, and "से लागू" is below the kit's 32 px Hindi minimum.

Fixes:
1. Postmark (the 9.52 s stamp): raise the ring radius from 130 to 160. Move its centre so the whole ring sits clear of the yellow outline's top edge and inside the frame, at about x 1690, y 300; the ring's right edge must stay at or before x 1850. Keep the stamp action at 9.52.
2. Postmark lettering: three straight centred lines, not text along the arc. "16 December" in Inter bold 34 px, then "2024" in 52 px, then "से लागू" in Noto Sans Devanagari 36 px with line-height 1.3. Leave at least 16 px between every line and the ring's inner edge, so nothing touches or clips the ring.
3. Book title panel: the postmark must not cover the third book's "2024" panel. If the bigger ring still overlaps the panel, nudge the ring up and right (y ≥ 280, x ≤ 1700) rather than shrinking the type.

The scene lasts 12.64 s: every time in it is between 0 and 12.64.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s002.html`: one `<section class="vs-scene" id="s002" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
