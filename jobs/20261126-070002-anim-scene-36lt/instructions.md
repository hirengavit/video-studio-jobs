# Fix animated scene s143

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s143" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s143), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s142.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s143.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The timing is right. "कोई fee नहीं" stamps at about 3.5 s ("कोई fee नहीं", 3.0–5.2). The scene then cuts to the `#in` mirror at 5.18 s on "अब inward item": globe at the left, "Office of delivery" at the right and "Inward" on top. Its Hindi "बाहर से भारत आया" lands on its words (7.2–8.9 s). Mirroring the outward layout is a clear choice. Two placement problems remain, and the `#out` part still carries s142's clutter (fix that there).

1. Green pill "कोई fee नहीं": it lands on the return-arrow curve, with the arrowhead pointing into it, and touches the "Recall" pill. Put the words on the `written-request` piece's blank `#chip` (bottom left of the sheet), which is drawn for a fee. Or place the pill at least 24 px left of "Recall" and above the curve, at about x 1160–1400, y 870, at 48 px. Don't place it on the arrow.
2. `#in` arrow and plane: at 7.9 s only a short stub of the arrow is drawn, while the plane already floats mid-frame with no line under it. Start the plane's `slide` once the arrow `draw` has passed it (about 0.4 s later), or tie the plane to the arrow's tip, so it travels along the drawn line from the globe to the office.
3. `#in` hold: from 5.4 to 7.6 s the screen is only the globe, the office and the word "Inward", which is fine. But the Hindi "बाहर से भारत आया" fades in with the arrow. `fade` the Hindi at 7.2 s, on "बाहर से", as its own beat just before the arrow draws at 7.76 s, so they don't land together.

The scene lasts 9.90 s: every time in it is between 0 and 9.90.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s143.html`: one `<section class="vs-scene" id="s143" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
