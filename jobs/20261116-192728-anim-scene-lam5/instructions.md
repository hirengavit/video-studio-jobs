# Fix animated scene s109

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s109" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s109), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s108.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s109.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s108 is good. The step arrows, the "Valid" pill and the 31 March ring carry the two ideas (the fee falls by ₹50 each quarter, and the permit is valid to 31 March), and their timing is right.

1. The "− ₹50" labels under each bar value are about 30 px, grey, and squeezed between the value and the next bar. On a phone they don't read, yet they are the point of "हर तिमाही fee ₹50 घटती जाती है". Set them to font-size 40, bold, deep amber #8a5d00, and move each 10 px further right of its down-arrow so none touches the next bar's value.
2. As the "− ₹50" labels come in (about 2.2 s), faint ghost numbers show under the values (a grey "150" under ₹200 and so on), so text briefly sits on text. Bring the labels in with a plain `fade` (dur 0.4) at their final positions, with `{stagger: 0.25}`, instead of an entrance that travels through the value text.
3. The line "issue वाले financial year की 31 March तक" under the fee card is about 36 px, and its white box hangs just below the card, close to the bottom margin. Set the text to 40 px and keep the box's bottom at y ≤ 990, or move the box inside the card under the "Valid" pill.

The scene lasts 10.58 s: every time in it is between 0 and 10.58. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s109.html`: one `<section class="vs-scene" id="s109" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
