# Fix animated scene s033

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s033" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s033), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s032.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s033.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The verdict lands on the wrong side. The slate "FAIL · फ़ेल" postmark (5.7 s on) sits on the left, over the "= 750 + 250 / = 1,000 mm" working, which was the case that PASSED in s032. The failing sum (1,010 mm with the slate cross) is in the right-hand panel. A viewer reads "1,000 = fail". The stamp is also tiny, and its tag touches the line below.

Fixes:
1. Move the FAIL postmark into the right panel, beside "= 1,010 mm ✕" (centre about x 1500, y 600 in the 1920 frame, inside that panel's group). Scale it up so "FAIL · फ़ेल" is at least 36 px (about 1.6× its current size). Keep `stamp` at 5.26.
2. Move the slate "जोड़ > 1000" chip so it sits directly above the right panel (over "जोड़ = 750 + 260"), not above the left working, so the chip, the cross, the underline and the stamp all point to the 1,010 case.
3. Lift the green "लंबाई < 800 ✓" tag about 16 px (or move it beside the "750 mm" label on the roll's length arrow, which is what it is about), so it no longer touches the "जोड़ = 750 …" line under it.
4. Grey the left working (the 1,000 lines) to the supporting colour #6f6a63 at 4.28, when the cross pops, so the eye goes to the 1,010 case. The long still from 0.25 to 5.17 s is fine: it is a reading hold.

The scene lasts 9.40 s: every time in it is between 0 and 9.40.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s033.html`: one `<section class="vs-scene" id="s033" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
