# Fix animated scene s132

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s132" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s132), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s131.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s132.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s131 is clean. But the gauge doesn't fill on "जमा" as the storyboard plans: it stays empty until about 11 s. The ledger's column labels are far too small, and the bottom 45% of the screen is empty. The 3.2–7.2 s "still" shows just the Delivery office strip on an empty screen, which is a gap in the build, not a reading hold.

1. Gauge: #deposit-level should reach full (1.0) on "जमा" at 1.54 s, over 1.0 s. Set the `deposit` state (or a `level` to 1) to land there, so the s133 seam starts full. It currently ends at about 0.8 while s133 opens at about 0.95, which is a visible jump.
2. Bring the `invoice-sheet` rows in with the "Delivery office" strip at 2.82 s (slide up from y+60, 0.6 s), as the storyboard says, so the 3–8 s stretch shows the ledger and not an empty half screen.
3. Ledger column chips: "Category", "तारीख", "गिनती", "Postage" render at about 28 px, and "Handling charge" at about 20 px. Scale the ledger group by 1.35 (one scale number) and set the header labels to 34 px. Let "Handling charge" sit on two lines at 30 px Inter, and widen that column, not the font.
4. After scaling, centre the ledger + header block between the header bar and y 1000, so the margins above and below are even. Keep the gauge at the same height as the ledger's top edge.
5. Set data-section="PART 7 · BUSINESS REPLY ARTICLES" to match s129/s130/s135.

The scene lasts 11.92 s: every time in it is between 0 and 11.92. Shared states (use with level/pour {state}): "deposit" (during this scene: 9.51 s: 0).

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s132.html`: one `<section class="vs-scene" id="s132" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
