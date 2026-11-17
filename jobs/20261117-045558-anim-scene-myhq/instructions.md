# Fix animated scene s085

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s085" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s085), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s084.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Not found:** wax-seal-letter (A real red sealing-wax seal pressed on an old paper envelope or letter, close view, the seal clearly visible). Show these another way (drawn, or with words), never with a made-up photo.

## What to change

The current file is `inputs/current/s085.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. Shot C's rule card is empty (only the book and a rule) from 4.5 s to 7.46 s while the voice says "पुराना Guide public को सलाह देता है". Type a heading "public को सलाह" (44 px, ink) at 6.1 s in the card's first row, and move the "Unregistered letters & packets" block down one row.
2. "Unregistered letters & packets" is typed at 7.46 s, before the voice reaches "Unregistered" at 8.3 s. Move the `type` to 8.3 s and the Hindi `fade` to 8.8 s.
3. The carry-over words "खोला ही न जा सके" (0.0 s) sit under the right card at about 30 px in grey, and are cut off at 1.76 s before they finish. Put them inside the right card under the envelope at 44 px in ink, typed over 0.8 s, and start shot B at 1.9 s so they are read in full.
4. In shot B, "मुहर वाली लाख" (3.18 s) gets only about 1.3 s before shot C. Fade it at 2.9 s (on "यानी") at 44 px directly under "Sealing wax", and move shot C to 4.6 s. Centre the term card's content vertically so the card isn't mostly empty.
5. The final row is small against the card ("बाहर sealing wax" about 36 px, "मत लगाइए" stamp about 30 px). Scale that row 1.3x, and make the cross over the seal clearly slate (#4b4f58, 5 px) so it doesn't read as red.

The scene lasts 12.04 s: every time in it is between 0 and 12.04.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s085.html`: one `<section class="vs-scene" id="s085" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
