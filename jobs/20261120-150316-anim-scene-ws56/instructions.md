# Fix animated scene s091

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s091" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s091), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s090.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s091.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Continuity: once s090 draws the string and knot, this scene opens on "sealed cover, string, all seals". Show #string and #knot from frame 0 exactly as they are at s090's last frame, and keep the two string-end seals on the string ends.
2. "जहाँ सामान इजाज़त दे" is squeezed inside the chip at about 28 px, below the kit's 32 px minimum for Hindi. Give it its own grey line, 38 px, about 16 px under the chip (`fade` at 3.04 s). Make the chip just tall enough for "extra सावधानी" (44 px).
3. The thread is drawn pale yellow and becomes a thin ink dash only at the end, so for most of its draw it reads as a highlight, not a thread. `draw` it from 6.68 s as an ink #2b2622 dashed line, stroke 4 px, round caps, dash 14/10. Add two small ink circles (r 7) where it enters and leaves the cover so "आर-पार" reads as going through.
4. The `pulse` on #knot at 8.0 s ("बाँधें") is invisible, because no knot shows. Once #knot is visible (fix 1), pulse it at 8.0 s with scale 1.25, or draw a small ink knot at the thread's end and pulse that.

The scene lasts 8.58 s: every time in it is between 0 and 8.58.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s091.html`: one `<section class="vs-scene" id="s091" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
