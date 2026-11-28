# Fix animated scene s007

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s007" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s007), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s006.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s007.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The jumps at 2.99 s and 10.21 s are the planned cuts to #fullname and #tenure.
1. In #twolines, the MIS row 2 "ब्याज: हर महीने" and its three coins never appear: at 0.2 s and up to the 2.86 s cut, the MIS card's second row is empty, while the voice says "ब्याज हर महीने देता है" (0.0–1.6 s). Add the row at 0.30 s with `words` (52–56 px, same style and y as the TD row 2), with the ₹ row icon and three piece:rupee-coin at scale 0.4 popping with a 0.15 s stagger at 1.24 s. Then hold it until the cut.
2. In #fullname, the Hindi "मासिक आय योजना" is never seen on the sheet (it is planned at 9.22 s, less than a second before the cut). Fade it in at 8.70 s, at the end of the name, in pale yellow #fde9a6 at 56 px under line 2, so it holds about 1.5 s.
3. In #fullname, "National Savings" types left-aligned (5.7 s) and then the whole name re-lays out centred on two lines (8.5 s), which is a visible jump. Place both lines centred from the start ("National Savings (Monthly Income" on line 1, "Account) Scheme" on line 2, Inter bold 72–80 px). Write line 1 at 4.86 s and line 2 at 7.32 s in their final positions so nothing moves.
4. The stamp card sits empty from 2.86 s to 4.86 s. Start line 1's `words` at 3.50 s on "National" (the voice says "MIS का पूरा नाम है" from 1.6 to 3.5 s), so the card fills sooner.
5. In #tenure, the "TD · SB-5A" label on the passbook is too small to read on a phone. Write it as two lines "TD" / "SB-5A" (Inter bold 40/30 px), the same as the fix in s002.

The scene lasts 14.00 s: every time in it is between 0 and 14.00.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s007.html`: one `<section class="vs-scene" id="s007" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
