# Fix animated scene s022

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s022" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s022), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s021.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s022.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The right panel (x 1080–1760, y 380–990) holds a tiny envelope (about 270×130) at its top and a small person icon (about 140 px tall), with most of the white panel empty. Scale the envelope icon to about 480 px wide (y 420–650) and the person-icon to about 260 px tall (y 700–900), and keep the red two-way link and "मिलान" (52 px) between them. Move "निशान ≠ पहचान" to y 960, or put it under the panel if it no longer fits.
2. When the list shifts left, its rows are re-set narrower and smaller: row 2 wraps onto two lines, and the Hindi drops to about 40 px. The kit says never to shrink Devanagari. Move the card by [-480, 0] as planned without resizing its text, and clip or keep the struck rows at 48 px or more. Or fade the struck rows to grey and let row 2 wrap at 48 px with 1.3 line height.
3. The empty panel appears at 2.31 s with only the small envelope. Have the panel arrive with the envelope (one `reveal` of the group at 2.31 s) so it is never a big blank card.
4. Give the underline under "≠" at 11.59 s full width (`words: '≠'`, width 4, colour #9e1b1b): it currently shows as a small red tick under the symbol.

The scene lasts 13.20 s: every time in it is between 0 and 13.20.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s022.html`: one `<section class="vs-scene" id="s022" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
