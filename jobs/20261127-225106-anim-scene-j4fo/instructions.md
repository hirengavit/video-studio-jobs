# Fix animated scene s137

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s137" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s137), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s136.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s137.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Stop 3 lands well on "postage, pickup" and the yellow highlight on "pickup पर" fits the kit. The problem is the cut at 4.31 s: an empty white card sits beside the envelope for almost 4 s (4.31–8.13 s) while the voice already says "registration की परिभाषा". The check note's still stretch from 4.44 to 8.13 s is exactly this blank card, and it isn't intended.

1. Bring the heading in with the shot: `type` #reg "Registration" at 4.40 s (the voice says "registration की" at about 4.3–4.8 s), then `fade` #reg-hi "रजिस्ट्रेशन" at 4.95 s. Remove the 8.13/8.70 entries so the heading never sits empty.
2. Add one light beat on the second "Registration" (about 8.2 s): `highlight` #reg {color:'#fde9a6'} or `pulse` #reg, so the 4.4–9.9 s stretch isn't dead and the eye is on the term when the meaning starts.
3. Move the definition lines down so the card isn't top-heavy: start #reg-rp at y 470 (not about 440), keep 46 px with a 64 px line step, so lines 1–3 fill y 470–600 and leave room for s138's lines from y 640.

The scene lasts 15.57 s: every time in it is between 0 and 15.57.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s137.html`: one `<section class="vs-scene" id="s137" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
