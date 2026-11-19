# Fix animated scene s142

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s142" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s142), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s141.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s142.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s141 is clean, rows 1–2 grey as planned, and row 4's "₹22" highlight and green tick land on their words. Row 3 says the opposite of what it means. "दूसरे item पर" is struck through, so it dims to near-unreadable, and then come "नहीं" and a slate ×. A viewer sees "on another item" crossed out, then "not", then ✗: a triple negative, when the rule is simply "not valid on another item". It also stacks three marks on one line when the kit allows one annotation per screen.

1. Row 3: remove the `strike` on `words: 'दूसरे item पर'` at 4.04. Keep "दूसरे item पर नहीं" fully readable in ink, and let the slate × at 4.04 be the only mark. Move "नहीं" next to "पर" with normal word spacing (it is currently pushed about 60 px right).
2. Row 3 icon: at 0.2 s the icon's first strokes show as a stray empty square with a red tick. Start its `draw` with the round stamp outline first (or `pop` the whole icon group at 0.0, dur 0.4) so no broken fragment shows on the cut.
3. Row 4 "Registration envelope का ₹22 = Prepaid postage": close the gap of about 100 px between "का" and the ₹22 pill to about 16 px, so it reads as one line. Keep "= Prepaid postage" arriving on "prepaid postage" at about 8.8 s.

The scene lasts 10.76 s: every time in it is between 0 and 10.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s142.html`: one `<section class="vs-scene" id="s142" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
