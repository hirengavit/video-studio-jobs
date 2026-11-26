# Fix animated scene s145

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s145" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s145), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s144.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s145.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s144 is clean (same flow, same houses). The "नहीं तो ₹6 per item" pill lands at 0.76 s, on its words (0.0–2.1 s), and sits neatly beside "Free". The cut to `#abroad` at 3.03 s and the pin at 4.55 s match "Item विदेश में … destination पर हो" (4.3 s). The still stretches the check found are reading holds and are meant. One real problem: the "envelope" on the globe reads as a plain white box, half covered by the pin. It looks like a rendering glitch, not the recurring letter.

1. In `#abroad`, replace the blank white rectangle with the real `domestic-envelope` at scale 0.22 (about 167×88). Give it its flap lines and the small red `postmark-ring` "POSTE RESTANTE" at upper right, so it is the same recurring envelope as everywhere else.
2. Fix the layering: let the pin mark the place and rest the envelope against the pin's left side, on the globe's surface (envelope base on the pin's tip line, about x−110 from the pin). Draw it above the pin so the pin no longer cuts through its middle. It `pop`s with the pin at 4.55 s as planned.
3. Push the globe in slightly (`{on: '#globe', zoom: 1.1}` over 3.03–4.5 s) so the pin and envelope, now the main point, read larger on a phone. Keep the globe's edges inside the frame.

The scene lasts 6.47 s: every time in it is between 0 and 6.47.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s145.html`: one `<section class="vs-scene" id="s145" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
