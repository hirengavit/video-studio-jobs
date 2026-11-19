# Fix animated scene s215

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s215" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s215), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s214.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `chapter-title` (Chapter title stamp): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: chapter-title: part number and total; English and Hindi title; subtitle; the icon in the stamp (post box, envelope, parcel, scales, building) and the small word beside the value.

## What to change

The current file is `inputs/current/s215.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The wipe into Part 10 and the chapter-title stamp work well as a part opener: the cancelled-stamp icon draws into the big stamp's window, and the kicker and dots fade at 1.42. In `#rule`, row 1 and its slate "मना" pill (5.28), then row 2 and its pill (10.24), land on their words, and slate (not red) is used correctly for forbidden.

1. `#rule` left card: the `cancelled-stamp` renders at about 240 px inside a card about 660 px wide and 640 px tall, so the main subject of the rule is small and the card is mostly empty. Set it to scale 1.0 as planned (about 400 px), centred in the card at about (470,520), and keep the caption "पहले इस्तेमाल हो चुका stamp" under it at y≈820, so the postmark ring and the wavy cancel lines read on a phone.
2. `#rule` row 2 (y 660): its card appears faded-in at about 6.3 with a grey "सरकार" placeholder. Fade the empty card in at 5.70 (on "सरकार को नुकसान") with the word reveal starting at the same time, so an empty row doesn't wait.

The scene lasts 11.24 s: every time in it is between 0 and 11.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s215.html`: one `<section class="vs-scene" id="s215" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
