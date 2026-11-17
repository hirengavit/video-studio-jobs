# Fix animated scene s030

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s030" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s030), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s029.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s030.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The seam matches s029, and each fault lands on its words: the gap on "खुला हिस्सा" (0.8–1.6), the gum on "gum के धब्बे" (3.4), the clip and staples on "metal clips और staples" (6.2–8.2). But on the small envelope the gap mark, gum blots, staples and the slate crosses are tiny. At 10.1 s the crosses pile into an unreadable "XX XX" on the top edge.

1. Envelope and everything on it: match the new s029 envelope (scale about 2.6 at (700, 590)). Scale and reposition #gap, #gum, #clip and #staple with it, so the clip sits on the flap edge at the right end and the two staples sit on the flap edge, spaced at least 120 px apart.
2. Slate crosses at 8.74: make one cross per item, each about 70 px with a 6 px slate #4b4f58 stroke. Centre each beside its item rather than over it (for example, 50 px above the clip and above the staple pair), so the clip and staples stay visible and the crosses don't touch each other.
3. #i3: write it as two clean lines, "METAL CLIPS" / "STAPLES" (Inter 700, 48 px), or one line "CLIPS · STAPLES". The middle dot must not start the second line.
4. #mana pill "NOT ALLOWED · मना": set its text to 40 px (Hindi part in Noto Sans Devanagari), with the pill grown to fit and 24 px padding. Keep `stamp` at 8.74.

The scene lasts 10.14 s: every time in it is between 0 and 10.14.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s030.html`: one `<section class="vs-scene" id="s030" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
