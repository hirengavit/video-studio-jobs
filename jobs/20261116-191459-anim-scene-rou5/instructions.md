# Fix animated scene s070

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s070" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s070), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s069.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s070.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The beats follow the words: "Postage + registration fee", then "नकद" on 2.2–4.0 and the journals on 4.0–8.0. Two things break the kit, though. The red "≥ 50 articles" pill arrives at about 8.2 s, but the voice only says "कम से कम 50 articles" at 9.6–10.6 s (kit: nothing before the voice reaches it). And the screen now holds eight items: the tag, the postage line, नकद, journals, the 50 tile, the pill, the office row and the envelope chip. Most of the text is small ("Special registered journals" wraps in about 36 px type in a narrow box).

Fixes:
1. Move the "≥ 50 articles" pill's entry from 8.22 s to 9.6 s, and the 50-tile pulse to 10.3 s (unchanged). Leave 10 px of clear space between the pill and the tile's bottom edge so they don't touch.
2. At 0.34 s, as "Postage + registration fee" enters, fade the office row and the "Ordinary registered letter mail" chip to opacity 0.45 (supporting tone), so the new points stand out (kit: fade earlier points when busy).
3. Make the "Special registered journals" box wider (about 520 px) so the text sits on one or two lines at 44 px. Shrink the `invoice-sheet` icon to fit, rather than shrinking the text.
4. Raise "नकद" to 48 px under the `rupee-cash` icon, and scale the icon up about 1.4× so the cash reads on a phone.

The scene lasts 12.16 s: every time in it is between 0 and 12.16. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s070.html`: one `<section class="vs-scene" id="s070" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
