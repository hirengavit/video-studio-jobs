# Fix animated scene s069

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s069" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s069), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s068.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s069.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Timing is right. The citizen pill lands on "citizen" (1.3), the instructions line on "administrative instructions", #c2 on "Proposals की जाँच", and the Central Government pill on its words. The stills are reading holds. The problem is the bottom of card #c1. The green pill "भारत का कोई भी citizen" runs nearly edge to edge. The grey "administrative instructions / के हिसाब से" is about 28 px, under the kit's 32 px floor for Hindi. Its last line touches the card's bottom edge at y≈935.

1. In #c1, scale the document icon to 0.8 and move it up so "Proposal" sits at y≈600 and "प्रस्ताव" at y≈645. That frees about 60 px below.
2. Put the green pill at y690–750 with 24 px side padding inside the card (x124–616). Keep its text at 36 px.
3. Set the grey "administrative instructions" line to 34 px at y≈800 and "के हिसाब से" to 34 px at y≈850, so the last line clears the card bottom (940) by at least 40 px.
4. Use the same spacing in #c2: pill at y690–760, grey "के instructions से" at 34 px, y≈820.

The scene lasts 9.92 s: every time in it is between 0 and 9.92.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s069.html`: one `<section class="vs-scene" id="s069" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
