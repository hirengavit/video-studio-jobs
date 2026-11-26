# Fix animated scene s014

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s014" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s014), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s013.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s014.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The point lands: the card for the person's limit moves left, the sand card asks "Article: कितने दिन?", "अलग नियम" is highlighted on its words and "→ Part 2" pops on "अगले हिस्से में". But the change at 0.5 s is a jump.

1. At 0.3–0.5 s the stamp card does not move. It snaps to a narrower card, and "Person: 3 months max" re-wraps onto two lines (the "jump at 0.5 s"). Do as the storyboard says. `move` the whole stamp-card group (card, both lines, underline, people row) by [-560, 0] over about 0.8 s with one uniform `scale` about 0.62 around its centre if it must fit x 140–900. Do not re-letter or re-wrap the text.
2. The envelope icon on the sand card touches the card's top edge and is small (about 80 px wide). Move it down so its top is 40 px inside the card, and scale it to about 220 px wide, centred above "Article: कितने दिन?".
3. The sand card's lower third is empty until 6–7 s. Move "Article: कितने दिन?", "अलग नियम" and the "→ Part 2" pill to sit about 40 px lower and evenly spaced, so the card does not look half-filled while it waits.

The scene lasts 8.68 s: every time in it is between 0 and 8.68.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s014.html`: one `<section class="vs-scene" id="s014" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
