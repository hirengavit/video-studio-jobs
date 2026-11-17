# Fix animated scene s048

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s048" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s048), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s047.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s048.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

DOUBLE POSTAGE stamps in on "दोगुना postage", and the paid-note lands on "पहले से चुकाया". The shot cut to the example card at 6.72 s (the "jump" the check found) is intended and lands on "मान लीजिए". The rows ₹10 / ₹10 arrive on their words. The card's empty lower half is filled by s049 straight after.

1. The `#stamp` outside the card reads as a blank red square with a dot, so a viewer can't tell it is ₹10 of stamps. Put a "₹10" text (Inter 40, bold, #9e1b1b) in the stamp's blank centre inside the `#stamp` group, and scale the stamp to about 1.2 so the value fits.
2. Pop `#stamp` on "stamps" (about 10.2 s, just after `#v2`) instead of 11.0, so it lands with its row rather than after the line ends.
3. `#paid-note` hangs below the white card in a smaller box with the text pushed to its top-left. Centre its text in the box (text-anchor middle, x at the box centre) and make the box the same width as the card above it (x 1180–1760), so the two read as one block.

The scene lasts 12.92 s: every time in it is between 0 and 12.92.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s048.html`: one `<section class="vs-scene" id="s048" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
