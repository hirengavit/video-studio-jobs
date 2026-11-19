# Fix animated scene s055

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s055" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s055), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s054.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `step-list` (Step list): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: step-list: 3 to 4 steps (bilingual screens hold fewer); the closing chip (a rate with its quarter, a fee, a time limit) or drop it; move the highlight to the key word, written as its own text so the band fits.

## What to change

The current file is `inputs/current/s055.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The three step cards pop on their names (1.98, 4.22, 5.62) and the cut to the compare cards at 8.24 is a fitting new beat. The shared "Director General" highlight on "नाम मिलता-जुलता" and the "≠" disc with "अलग posts" make the point well. Fixes:
1. The heading block is crammed. "Headquarters", "मुख्यालय" and "functional support · कार्यात्मक सहायता" are stacked with the Hindi lines touching the line above, and the grey line nearly touches the first card's top edge. Re-space it: "Headquarters" at y 140 (52 px), "मुख्यालय" at y 196 (34 px, line height 1.3), the grey "functional support · कार्यात्मक सहायता" at y 250 (32 px). Move the three cards down to y 300–460, 490–650, 680–840 so there is at least 30 px of clear space under the grey line.
2. The Hindi lines under each step card ("उप महानिदेशक", "निदेशक", "सहायक महानिदेशक") read at about 26 px. Set them to 32 px Noto Sans Devanagari, line height 1.3, keeping them clear of the card's bottom edge.
3. Shot 2 holds still from 9.5 s to 14.2 s while the voice names each post. Add a calm `pulse` (scale 1.04) to the left card at 10.0 ("Deputy Director General") and to the right card at 12.0 ("Director General Postal Services") so the eye follows the words. No other motion.

The scene lasts 16.02 s: every time in it is between 0 and 16.02.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s055.html`: one `<section class="vs-scene" id="s055" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
