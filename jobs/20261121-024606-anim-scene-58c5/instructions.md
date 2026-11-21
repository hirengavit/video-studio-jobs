# Fix animated scene s046

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s046" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s046), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s045.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `rule-number-card` (Rule number card): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: rule-number-card: the rule number and the rules' name; what it covers; the two panels (lists, conditions, or before/after); the remember card's pair or a single point. Verify the rule number and keep any quoted words exact in Georgia..

## What to change

The current file is `inputs/current/s046.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

A clear new section: the attendant badge and "attendant का काम" are there from the first frame. The Rule 116 stamp card slides in at about 3.2 s on "Rule 116", the three empty clock slots pop at about 6.4 s, and "तीन समय" comes in at about 7 s on "तीन समय". The still stretches are reading holds, which is right for this calm style.

Fixes:
1. The series pill reads "POST OFFICE RULES", but the storyboard says LETTER BOXES for every scene, and s048 shows LETTER BOXES. Set the series slot to "LETTER BOXES". It must not change mid-section, either; s047 must match.
2. Size the three clock-slot cards from the start for their final contents in s047 and s048: each holds a clock, an English label and a two-line Hindi gloss. Use about 330×460 px, with the "तीन समय" pill moved down to y≈1000 so it never touches the card bottoms. This way s047 and s048 don't have to grow the cards at the cut.

The scene lasts 8.76 s: every time in it is between 0 and 8.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s046.html`: one `<section class="vs-scene" id="s046" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
