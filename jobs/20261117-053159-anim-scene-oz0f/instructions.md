# Fix animated scene s168

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s168" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s168), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s167.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `myth-fact` (Myth vs fact): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: myth-fact: the myth (strike one word with words:, or the whole line dimmed), the Hindi wrong-reasoning line, the fact, the highlighted word, one or two reason lines (English + Hindi), the postmark word.

## What to change

The current file is `inputs/current/s168.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Shot A continues the old/new screen, and the strike on "charge" lands on its word. The "आज मत लगाइए" stamp, though, is small (~32 px) and jammed at the bottom edge (y ~955–1015), and it holds only ~1.5 s before the cut. Shot B's MYTH card is mostly empty. The envelope piece is drawn small at the top, joined by a line to a separate cream panel, and the words "Registered / Insured / Speed Post" go on that panel in bold red sans. The storyboard wanted Caveat handwriting on the envelope itself, so it doesn't read as "writing on the cover".
1. Make the "आज मत लगाइए" stamp bigger and bring it in earlier. Use slate #4b4f58 fill, white 44 px text, rotated -3°, centred under the old card at y ~900 (move the old card's group up/scale it 0.95 if needed). Bring it in at 3.0 s on "आज अपने आप मत" instead of 4.28 s, so it holds ~2.7 s before shot B.
2. In shot B, scale the `envelope-article` up from 0.6 to about 1.0, centred at x 1400, y ~620, so the envelope fills the right half of the MYTH card. Drop the separate connector panel if the piece allows; otherwise write on the envelope's front face.
3. Write "Registered", "Insured" and "Speed Post" (the `write` beats at 7.89 / 9.21 / 9.99 s) on the envelope's face in Caveat, 56 px, ink #2b2622, as handwriting on the cover. Use ink rather than heading red, since red is for cards and headings.
4. Grow the MYTH card to the frame's even margins (y 240–960) so it isn't a short strip with ~300 px of empty canvas below it.

The scene lasts 11.79 s: every time in it is between 0 and 11.79.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s168.html`: one `<section class="vs-scene" id="s168" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
