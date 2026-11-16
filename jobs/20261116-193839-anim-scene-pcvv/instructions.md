# Fix animated scene s153

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s153" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s153), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s152.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s153.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The idea lands: the envelope is there from the first frame, the camera pushes into the stamp corner on "ऊपरी दायाँ कोना", the corner is circled and the scene holds there to end the video. The fade in from the recap table is right for the last scene. The still stretch from 1.22 s to 3.16 s is intended: the line "कोई envelope हाथ में आए" has just arrived and needs that time to be read, and the zoom starts at 3.38 s. Physics and continuity are fine. The problems are in the closing frame, which is the one the viewer is left with:

1. The two pills at the end almost touch. At 7.0 s "ध्यान से देख लीजिए" sits about 4 px under "ऊपरी दायाँ कोना", so they read as one crowded block. Move the second pill down so there is a gap of at least 24 px (about 30 px in scene units at the 1.8 zoom), or put both in one group with `gap: 24`. Keep both inside the frame at the end of the zoom, and leave the yellow underline inside its own pill.
2. The ink circle cuts across the postmark. At 5.6 s the left side of the circle runs through the round postmark, so the postmark looks half-ringed. Widen the circle so it goes around both the postmark and the stamp: centre it on `#stamp-box` with roughly 40 px more width to the left, so the stroke clears the postmark by at least 12 px.
3. The pills cover the envelope's right border and address lines. At 5.6–7.0 s the pills sit over the envelope edge, and the border line shows on both sides of them. Move the pills fully onto the canvas left of or below the envelope edge (for example, shift them about 60 px left and down, below the top band), or give them an opaque `#fbf7ee` fill and a 16 px margin past the envelope border. The edge should then meet the pills cleanly instead of running into them.
4. The wide opening is a little small for a phone. In the 0.2–2.9 s frames the envelope fills only about half the width, and the stamp corner (the point of the scene) is tiny until the zoom. Raise `envelope-face-large` from 0.85 to about 1.0 (still centred, with even margins under the header). The first second then shows the stamp corner clearly, and the zoom target keeps the same shape.

The scene lasts 7.08 s: every time in it is between 0 and 7.08. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s153.html`: one `<section class="vs-scene" id="s153" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
