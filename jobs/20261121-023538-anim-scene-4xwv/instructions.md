# Fix animated scene s012

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s012" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s012), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s011.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s012.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The five-row card builds on its words (letters/letter cards ~2.1 s, aerogrammes, postcards, printed mail ~8.2 s, literature for the blind ~10.5 s), and the icons are clear. But the series pill has changed, and the Hindi glosses are too small.

1. Series pill: change "POST OFFICE RULES" back to "LETTER BOXES". The storyboard fixes the series tag for every scene, and s011 and s013 both show LETTER BOXES, so the pill visibly flips at both seams.
2. Raise the Hindi glosses under each row ("पत्र और पत्र कार्ड", "एयरोग्राम", "पोस्टकार्ड", "मुद्रित डाक", "दृष्टिबाधितों के लिए साहित्य") from ~28 px to 40–44 px (storyboard: Hindi 48–56, kit minimum 32). The rows are 140 px tall: set the English term at ~48 px with the gloss directly under it, and keep at least 1.3× line spacing.
3. Make the icons and English terms larger to use the card's empty right half. Icon tiles go from ~80 to ~100 px, and the term text starts about 30 px further right. Keep all five rows inside y 260–990.

The scene lasts 11.79 s: every time in it is between 0 and 11.79.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s012.html`: one `<section class="vs-scene" id="s012" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
