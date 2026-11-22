# Fix animated scene s105

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s105" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s105), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s104.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s105.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s104 is clean (same two cards, same label). The banner lands on "Postcard पर सिर्फ" at about 6.9 s and builds word by word. That fits. The stills the check found (1.48–6.9 s and 7.39–10.1 s) are reading holds, so they're intended. The real problem is the new point of this scene: the "Sender का address" tag on the back card is only about 20 px tall in a 1920 frame, and its scribble lines are even smaller. On a phone it can't be read, so the idea "sender's address goes top left of the back" doesn't come across.

Fixes:
1. Make the "Sender का address" tag readable. Set its text to at least 34px Noto Sans Devanagari bold, amber #8a5d00 on #fde9a6, and grow its dashed box to fit, still anchored at the back card's top-left corner. If the card is too small for that, put the tag just above the card's top-left corner with a short 3 px ink arrow pointing into the highlighted corner.
2. At 1.14 s, when the highlight starts, push the camera in slowly toward the back card (`{on: '#back-card', zoom: 1.25}` over about 1.2 s). Ease back to 1.0 by about 6.3 s, before the banner arrives at 6.93, so the banner and both cards are in frame. Check that the card's edges stay inside the frame at the zoom's end.
3. Give the banner a little more room: it currently sits almost touching the "संदेश के लिए" / "छपा advertisement" pills. Move it down about 20 px, keeping its text at 40px or more.

The scene lasts 10.15 s: every time in it is between 0 and 10.15.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s105.html`: one `<section class="vs-scene" id="s105" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
