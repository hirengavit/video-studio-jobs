# Fix animated scene s147

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s147" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s147), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s146.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `glossary-list` (Glossary list): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: glossary-list: the four terms, their Hindi and meanings (about 4 words; Hindi line under the English); the icons (envelope, rupee note, seal, parcel; draw new simple ink icons for other terms); 3 terms in a row or 4 in the grid..

## What to change

The current file is `inputs/current/s147.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s146 is exact, the CBPO focus (others greyed) is clear, and both network boxes pop on their words.

1. The CBPO link `draw` at 5.08 is greyed with the whole band at 6.22, so the key idea of the scene ("CBPO … जोड़ते हैं") is shown in full colour for only about 1 s and is already pale in every later frame. Keep the band in full colour at 6.22 (switch only the FPO card back to ink and `pulse` it there), and move the band `color` grey to 8.10, just before the FPO meaning line starts. That gives the link about 3 s to read.
2. The FPO meaning line ("सैन्य इकाइयों या प्रतिष्ठानों की सेवा") is bold Hindi at about 32 px pressed into the card's lower area. Set it to 36 px with 1.3 line height, and allow it to wrap to two centred lines inside the card's 540 px width, with at least 24 px clear above the card's bottom edge (the line "जिनके साथ वो लगे हैं" is added under it in s148).

The scene lasts 11.74 s: every time in it is between 0 and 11.74.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s147.html`: one `<section class="vs-scene" id="s147" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
