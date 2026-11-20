# Fix animated scene s197

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s197" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s197), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s196.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `cause-chain` (Chain of stages): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: cause-chain: 3 to 4 stages; swap the icons (envelope, sorting rack, van, house) for any flat ink icon; the bottom note in English plus Hindi; which card is the outcome.

## What to change

The current file is `inputs/current/s197.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The chain builds on its words: card 1 at 0, card 2 near "बचाइए" at 2.0 s, card 3 near "बंद" at 3.6 s, and the yellow card 4 by 7.2 s. The cut to #letters lands on "For letters only" at 7.8 s, the envelope gets its tick on "letters", and the postcard gets its tick on "postcards" by 11.9 s. Physics and continuity are fine, and the box matches s173. Two things a phone viewer will notice:

1. Card 3's icon (`piece:wax-seal` at scale 0.6) shows up as a tiny red dot, so "ठीक से बंद कीजिए" has no clear picture. Raise it to scale 1.1, centred in the icon tile like the magnifier and the parcel, so it fills about the same 110 px tile.
2. The red arrows between the cards are only about 30 px long with a thin stroke and are hard to see. Draw them 40 px long with a 5 px stroke and a bigger head (12 px), centred in the 40 px gaps at the icon height (y about 450). Keep the `draw` on each one before its card pops.

The scene lasts 11.91 s: every time in it is between 0 and 11.91.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s197.html`: one `<section class="vs-scene" id="s197" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
