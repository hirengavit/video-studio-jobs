# Fix animated scene s128

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s128" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s128), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s127.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s128.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s127's minor cards is clean, and the "बंद करना" / "TD चलाना" choice with the stamp-edged "3" card fits the kit. Problems:
1. The punch line "minor nominee के guardian को" is on screen only about 1.2 s (2.94 → 4.13 s cut), below the kit's 3 s hold. Fade it in at 1.8 s (the voice says "minor nominee के guardian" at 1.7 s), draw the arrow at 1.4 s, and move the cut to #continue to 4.9 s (just before "बंद करने की" at 5.1 s).
2. Shift the #continue beats with it: pop "बंद करना" at 5.1 s, pop "TD चलाना" at 5.9 s ("जगह TD चलाया" at 5.1–6.8 s) and highlight it at 6.8 s. Keep the stamp card at 7.9 s and "3" at 9.6 s ("ज़्यादा से ज़्यादा 3", around 9.5 s).
3. "बचे हुए nominees या legal heirs" on the stamp card is about 40 px and squeezed under the "3". Scale the stamp card to ×1.0 (760×380, x 600–1360, y 580–960) with "3" at 130 px. Set the two #fde9a6 lines at 48 px, 60 px apart, kept 30 px or more inside the inner line.
4. The passbook label here is "TD" with "SB-5A" below it, but s120 and s122 use "TD · SB-5A". Use the same label as there.

The scene lasts 12.53 s: every time in it is between 0 and 12.53.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s128.html`: one `<section class="vs-scene" id="s128" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
