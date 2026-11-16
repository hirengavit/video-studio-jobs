# Fix animated scene s032

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s032" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s032), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s031.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `myth-fact` (Myth vs fact): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: myth-fact: the myth (strike one word with words:, or the whole line dimmed), the Hindi wrong-reasoning line, the fact, the highlighted word, one or two reason lines (English + Hindi), the postmark word.

## What to change

The current file is `inputs/current/s032.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The #count half works: the fact card "Offices की तारीख वाली मुहरें" with its two postmarks, then the myth "चिपकाए stamps" with a slate strike on "नहीं". The still stretches there are reading holds. The #press half breaks physics and misses its beat:

1. The rubber-date-stamp hangs in the air above the envelope from 6.9 s until the scene ends. In the 10.1 s frame it still hasn't come down, so the planned fall never shows. Make it `fall` onto the envelope face at 9.2 s ("मुहर लगाने"), landing by 9.5 s, with its base anchor resting on the envelope's centre-left. Leave it resting there, pressed, to the end.
2. Until the fall, bring the stamp in no earlier than 7.8 s and keep it only about 40 px above the envelope, so it reads as about to press rather than floating. Or `place` it upright, resting on the floor line beside the envelope, and lift it into the fall at 9.0 s.
3. Make the "भ्रम" tag on the myth card at least 32 px, with "चिपकाए stamps" at 40 px (it currently renders smaller than the fact line). Myth and fact should read with equal weight.
4. Move the label "मज़बूत cover" so it lands at 7.8 s (on "Item का cover"), not 8.16 s, and add a short ink arrow from the label to the envelope edge. Without the arrow the label reads as unrelated to the envelope.

The scene lasts 10.16 s: every time in it is between 0 and 10.16. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s032.html`: one `<section class="vs-scene" id="s032" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
