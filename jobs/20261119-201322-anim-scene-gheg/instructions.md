# Fix animated scene s207

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s207" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s207), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s206.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `mail-flow` (Mail flow): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: mail-flow: 3 to 5 stops with their icons, English and Hindi labels; which stop is highlighted; the bottom note or drop it..

## What to change

The current file is `inputs/current/s207.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. Continuity: s206's envelope had a `postage-stamp` in its box and a `postage-due-mark` upper-left, but the big `#refused` envelope (from 0.25 s) shows an empty dashed stamp box and no due mark. It is the same item, so place `postage-stamp` in the stamp box and a `postage-due-mark` upper-left on `#refused` (both scaled with the envelope's 1.6, no entrance, so they're there from the cut).
2. In `#refused`, make sure the Caveat "Refused" (180 px, ink #2b2622) is `reveal`ed from the left at 2.72 s across the envelope's width, under the double arrow and clear of the address lines. It must hold on screen until the cut at 4.30 s. Without it, "चौड़ाई में Refused लिखता है" has no picture.
3. `#flow` stop 1: "REFUSED" pops at 4.36 s, but the voice says "Refused" at about 3.8 s and "unclaimed" at about 5.4 s. Keep "UNCLAIMED" on its word at 5.38 s and the "domestic · घरेलू" pill at 6.02 s, but fade them to ink at full size, not grey: they are part of the rule.

The scene lasts 11.09 s: every time in it is between 0 and 11.09.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s207.html`: one `<section class="vs-scene" id="s207" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
