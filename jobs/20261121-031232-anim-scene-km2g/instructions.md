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

The seam matches s131. Timing is good: the key at 0.2 s ("चाबी"), the plate at "plates", "Postmaster" around 2 s, "custody:" by 4.3 s, "+ round के लिए bag" around 7 s, "आखिरी box" 9.3 s and "→ बिना देर लौटना" by 11.5 s. The problems are crowding and tiny icons in row 3.

1. Row 3's "+ round / के लिए bag" pill sits only a few px from the end of "/ responsible Assistant" (around x 1330–1345 in the frame), so the two nearly touch. Move the pill right so there are at least 24 px between them, keeping it left of the tick. If it doesn't fit, wrap the custody text earlier ("custody:" on line 1, "Postmaster / responsible Assistant" on line 2) rather than shrinking the type.
2. Row 3's icons (the `box-key` with the mini plate under it) are about 40 px tall and read as yellow and red specks. Scale the `box-key` to about 0.5 (80×30 px) and the mini `hour-plate` under it to match the row 2 plate. Use the same 10:00 lettering as s131's fix so it reads as "the plates".
3. Row 4 "आखिरी box / → बिना देर लौटना" sits right on the card's bottom edge, with no breathing room before s133 adds row 5. Move row 4 up so it sits on the same pitch as rows 1–3 (about 12 px higher). Keep this exact position in s133 so nothing moves there.

The scene lasts 11.56 s: every time in it is between 0 and 11.56.

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
