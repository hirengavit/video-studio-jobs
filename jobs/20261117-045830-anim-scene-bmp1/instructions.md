# Fix animated scene s091

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s091" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s091), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s090.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s091.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s090 matches. The seals sit on the flaps, joints and string ends, and they pop on "तीसरा… चौथा…" (7.4–8.7 s), which reads well. The amber note "खुले, तो पता चले" lands on its words. There are two problems. The "वही private mark · निजी निशान" line, the key point of the first 4 s, is about 20 px and can't be read. And the camera snaps back from zoom 1.06 to 1.0 in the last 0.4 s, a jump that shows as the large spike at the end of the motion strip.

1. Write "वही private mark · निजी निशान" in step row 2 at 34 px ("private mark" in Inter 700, "निजी निशान" lighter at 32 px), on its own line under the main text. Grow row 2 to fit (about 170 px). Keep the `highlight` sweep behind it at 1.20 s.
2. Remove the return of the zoom: hold `{on: '#diagram', zoom: 1.06}` from 9.0 s to the end of the scene (s092 can start at 1.0 on its cut). Or start the return at 14.3 s and ease it over 1.7 s to end at 16.0, so the move is slow and not a snap.
3. Use the same 32 px sizes and row heights as the s090 fix for "अच्छी तरह बंद" and "सब एक जैसी", so the carried-over rows don't change size at the cut.

The scene lasts 16.60 s: every time in it is between 0 and 16.60.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s091.html`: one `<section class="vs-scene" id="s091" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
