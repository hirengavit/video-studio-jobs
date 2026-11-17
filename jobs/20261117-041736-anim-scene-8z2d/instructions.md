# Fix animated scene s014

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s014" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s014), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s013.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `cause-chain` (Chain of stages): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: cause-chain: 3 to 4 stages; swap the icons (envelope, sorting rack, van, house) for any flat ink icon; the bottom note in English plus Hindi; which card is the outcome.

## What to change

The current file is `inputs/current/s014.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Shot A's chain builds well on its words (card 1 at 1.34 with the highlight on "कमज़ोर", India Post Parcel at 4.30, Booking at 6.02). The cut to shot B, however, comes before the verdict is heard.

1. The cut to shot B at 7.93 is too early. "booking से मना" runs from 6.7 to about 8.6, so the slate "मना" stamp shows for under a second, and the sheet at 6.6 s shows no stamp yet. Move the `stamp` "मना" + cross to 7.3 ("मना" is spoken around 7.3–7.8), and move the shot cut to B to 8.7.
2. Shot B: move the `fade` of "मज़बूत cover" from 8.51 to 9.0 (it is spoken at 9.0; it shows at 8.6 s before it is heard). Move the `pop` of badges 1–4 and the "4 शर्तें" pill from 9.29 to 9.6, on "चार शर्तें".
3. Booking card (card 3): keep it the same white/cream as cards 1–2 until the stamp lands at 7.3. Its grey slate fill at 6.6 marks it rejected before "मना" is said.

The scene lasts 10.85 s: every time in it is between 0 and 10.85.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s014.html`: one `<section class="vs-scene" id="s014" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
