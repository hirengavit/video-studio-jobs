# Fix animated scene s088

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s088" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s088), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s087.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s088.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The `attendant-badge` row appears at 2.5 s as an empty white strip with a tiny red dot (the badge at about 40 px) and stays empty until about 6.3 s. Bring the row in at 4.9 s ("वो गिनती attendant") with the badge at scale ≥ 0.5 (about 100 px), and write "Attendant गिनती खुद दर्ज करता है" with `words` from 4.9 to 7.3 s.
2. Make the green tick on that row (7.34 s) a clear 56 px badge at the row's right end, the same size as the slate cross on the row above, and hold it until the cut.
3. The cut to #three comes at 8.38 s, a second before "तीन शब्द" (9.5 s). Move the cut and the card pops to 9.45 s (stagger 0.3), so the cards don't appear before the voice reaches them.
4. The right column now stacks four boxes (question, Barcode card, "अपने आप नहीं गिनता", attendant row). At 0.0 s, fade the question card and the Barcode card to the supporting grey (#6f6a63) so the two new rows lead.

The scene lasts 11.10 s: every time in it is between 0 and 11.10.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s088.html`: one `<section class="vs-scene" id="s088" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
