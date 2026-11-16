# Fix animated scene s133

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s133" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s133), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s132.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s133.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The gauge does the opposite of the words. It rises at the start (about 0.8 → 0.95), where "बची रकम" should make it drop, and it falls at about 8.6 s, right on "पखवाड़े से पहले", where the storyboard has it refill. A viewer sees "refill" while the gauge empties. The bottom row is also small and crowded.

1. Gauge: hold it at full from 0 s, matching the fixed s132 end. On "बची रकम" (1.7 s) drop #deposit-level to 0.45 over 1.0 s. Then refill to 1.0 on "पखवाड़े" (9.3 s) over 1.0 s. Remove the current rise at 0–0.5 s and the drop at about 8.6 s.
2. "Handling charge" and "बची रकम" column chips: give them the same 34 px / two-line 30 px sizes as the fixed s132 ledger, and keep them inside the scaled ledger group.
3. Bottom row: the "या" between the "1" and "16" chips is about 20 px. Set it to 34 px, and the "1"/"16" calendar chips to 44 px numerals. Set "तारीख वाले पखवाड़े से पहले" to 32 px on two lines with line-height 1.3, inside a pill tall enough not to touch its edge.
4. Move the bottom row down to about y 930 (centre) so it doesn't crowd the ledger's bottom edge. Keep a 40 px gap.
5. Set data-section="PART 7 · BUSINESS REPLY ARTICLES".

The scene lasts 10.92 s: every time in it is between 0 and 10.92. Shared states (use with level/pour {state}): "deposit" (during this scene: 1.54 s: 1).

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s133.html`: one `<section class="vs-scene" id="s133" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
