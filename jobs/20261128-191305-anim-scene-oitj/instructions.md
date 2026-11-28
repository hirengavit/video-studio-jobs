# Fix animated scene s112

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s112" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s112), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s111.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s112.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The scene's key term barely shows. "Pledgee" tracks in at 4.56, and the cut to #form5 at 6.18 removes it after ~1.6 s, while the voice says "उसे pledgee कहते हैं" from 5.1 to 7.3. The first 4.5 s also show only the passbook, arrow and building, with no words.

1. Move the #form5 cut from 6.18 to 7.20 (on "Depositor", 7.3) and shift its beats: "Depositor" pop 7.30, "जमाकर्ता" fade 7.70, type "TD Form-5" in the header at 8.20 + highlight, field lines 1–3 at 9.90 (stagger 0.15) with "आवेदन" fading at 10.0. "Pledgee" then stays on screen for the whole spoken definition.
2. Bring "Pledgee" (Inter bold 96, x 1380, y 300) in at 4.90 and "गिरवीदार" at 5.30. Before that, at 0.26 with the institution pulse, fade a grey 52 px "संस्था" label above the building (y 380) so the screen names what the voice says ("जो संस्था") from the first second.
3. The passbook label reads "TD" here but "TD · SB-5A" in s111. Write "TD · SB-5A" (32 px) so the recurring icon matches across the cut.
4. On #form5, "Depositor" stays pale grey for a long time after the cut (still pale in the 6.2 s frame). Use a plain ~0.3 s `pop` so it is full ink when the voice says it.

The scene lasts 10.28 s: every time in it is between 0 and 10.28.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s112.html`: one `<section class="vs-scene" id="s112" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
