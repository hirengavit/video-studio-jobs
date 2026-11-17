# Fix animated scene s056

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s056" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s056), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s055.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `key-term` (Key term): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: key-term: the term, its translation and abbreviation; the meaning line; the chips; replace the chain with an example or a rule line; drop the exam pill.

## What to change

The current file is `inputs/current/s056.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The scene shows the idea literally: the term card, then the bottle, the protective box, and the bottle placed into the box's mouth on "के अंदर रखा हो" (10.96). The placement physics are right: the bottle stands on the ground, then sits inside the cavity.
Two clarity problems:
(a) From 7.0 to 11.0 the "अंदर का पात्र" callout's leader line points to empty space to the right of the bottle (where the bottle will end up), not at the bottle the voice is naming.
(b) From 0 to 7 s the right half shows only a bare ground line while the term is introduced.
The callout labels are also small (about 34 px) for a phone.

Fixes:
1. Callout "अंदर का पात्र": put the label directly above the standing bottle (x 1100, y 600) with a short vertical leader down to its cap. Put the label and leader in the same group as #bottle, so `place` at 10.96 carries them with it. If the leader would cross the box once placed, `out` the leader at 10.9 and keep the label above the box's left rim.
2. Callout "बचाव वाला box": set its leader to end on the box's outer wall (x 1640, y 760). Set both callout labels to 40 px with bold Devanagari.
3. Early empty frame: `draw` the bottle (and `fade` its callout) on "दोहरा पात्र" at 2.4 instead of 6.96. The voice is defining the term then, and the bottle gives the right half something to show. Keep the box draw at 9.46 on "बचाव".
4. Key-term card: scale it to fill the left column (x 120–880, about 760 px wide), with "Double receptacle" at 64 px and "दोहरा पात्र" at 44 px. It currently uses about half the column.

The scene lasts 12.58 s: every time in it is between 0 and 12.58.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s056.html`: one `<section class="vs-scene" id="s056" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
