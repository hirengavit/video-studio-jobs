# Fix animated scene s117

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s117" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s117), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s116.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s117.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The push-in on the bars (0–1.5 s), "दो मोटी खड़ी lines" and "पहचान" on their words, and the move back to wide by 6.2 s all work. The problem is the payment lines:

1. "भुगतान वाली lines" highlights the single bottom-left line, the #permit-line that s116 just labelled "Permit की पहचान", so the same line now means two things, and the voice says "दोनों lines" while the screen shows one. Highlight the two short payment rules next to where dot 1 stood (upper left of the address side, the spot s118's "Postage: addressee चुकाएगा" chip later uses) with a soft #fde9a6 band behind both. Keep the "भुगतान वाली lines" label beside them, and leave #permit-line plain. If s116 doesn't add those rules, draw them in this scene before 6.0 s (3 px, #6f6a63, about 260 and 200 px).
2. The note "भारत में stamp बिना reply post" (8.46 s) straddles the card's bottom border, with the border line running behind the pill. Either put it inside the card above the border (y −40 px), or below it with 24 px of clear space.
3. In the zoomed frame (2–5 s), the "दो मोटी खड़ी lines" chip sits on top of the address rules. Move it into the clear band just above the rules (about 60 px up) so no rule passes behind it.

The scene lasts 11.64 s: every time in it is between 0 and 11.64. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s117.html`: one `<section class="vs-scene" id="s117" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
