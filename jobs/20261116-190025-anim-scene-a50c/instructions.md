# Fix animated scene s019

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s019" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s019), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s018.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s019.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

#nocancel builds on its words: the revenue stamp, the charity label, the postage stamp, then the postmark cancels only the postage stamp, with "Cancel नहीं" on the labels. #mislead is the weak half. The stamp-like mark is about 80 px on a 1920 frame, so on a phone you can't tell it's a fake stamp.

1. #mislead: draw the stamp-like mark at about 130×130 px (perforated square, ink 3 px) at the envelope's lower left. Scale the circle and slate cross at 8.20 s and 9.18 s to match, so the mark clearly reads as an imitation stamp.
2. #mislead: the "न लगाइए" pill sits far to the right under the envelope, away from what it refers to. Put it right under "भ्रामक निशान" (same x, about 60 px lower) so the label and the verdict read as one note.
3. #nocancel: "Revenue stamp" and "Charity label" have no Hindi under them while "Postage stamp" does. Add "राजस्व टिकट" and "चैरिटी लेबल" beneath, at 36–40 px in supporting grey, 0.5 s after each term, to match the kit's term pairs.

The scene lasts 10.18 s: every time in it is between 0 and 10.18. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s019.html`: one `<section class="vs-scene" id="s019" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
