# Fix animated scene s148

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s148" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s148), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s147.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-table` (Compare table): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-table: two or three columns (re-space the centres), three to five rows, which row gets the outline, the source line; interest rates must name the quarter and the source.

## What to change

The current file is `inputs/current/s148.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut into the compare table works, and the header and the footer note are there from the first frame. "Bulk cash offices" and "Head of the Circle" land on their words, and so do "Packets" and the "बड़े शहर 500 · छोटे शहर 250" line with its tick. The problem is size. Five rows and three columns are packed into the card, and on a phone the second lines will not read.

1. The Hindi sublines under each term ("थोक नकद कार्यालय", "पैकेट", "सर्किल प्रमुख") are about 22–26 px. The kit's minimum is 32 px. Raise them to 32 px and the English terms to 44 px. Make the rows taller to fit by moving the table up under the title and letting it run to about 40 px above the footer note, so all five rows share the full height (about 130 px per row instead of about 110 px).
2. Narrow the first column "विषय" (about 30% of the width) and widen the third column "संख्या / शर्त" (about 40%). Later rows put two lines of conditions there (s150–s152).
3. The narration says "छोटे town 250", but the card says "छोटे शहर 250". Use the spoken wording "छोटे town 250", or at least keep "बड़े शहर 500" and "छोटे town 250" on two lines of the same size. Right now the second line looks squeezed under the first.
4. Set the section label to "KEY POINTS" to match s145–s146: it is the same recap section.

The scene lasts 8.58 s: every time in it is between 0 and 8.58. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s148.html`: one `<section class="vs-scene" id="s148" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
