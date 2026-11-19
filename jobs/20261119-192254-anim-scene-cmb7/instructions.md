# Fix animated scene s045

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s045" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s045), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s044.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s045.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The item chips can't be read on a phone. "closed covers वाले letters" and "Inland letter cards / अंतर्देशीय पत्र कार्ड" are about 24–28 px, in chips about 110 px wide. These are the items the line names, so they must be readable. Make each chip about 260×140 px along the bottom of the right card (y 640–800), and leave room for the postcard chip that s046 adds. In each chip, set the English term at 40 px bold Inter and the Hindi beneath at 34–36 px. Make the letter-card icon 70 px tall.
2. "firms या business establishments से" (0.41 s and 1.59 s) is about 34 px in a thin pill. Set it at 40 px in an 80 px-tall row. "firms" and "business establishments" go in bold Inter, and "या … से" in Noto Sans Devanagari.
3. The row "एक बार में ≥ 500 articles" is as small as the rows on the left card. Set "एक बार में" and "articles" at 40 px and the ≥ 500 chip at 48 px. The number this line is about will then be the biggest thing on the card when it counts up at 5.18 s.
4. The red header still has the small "& Higher Selection Grade post offices" and the yellow Hindi carried over from s044. Make the same header change here as in s044 (terms in the white body at 56 px and 48 px, Hindi at 40 px in ink or cream), so the two scenes match at the cut.

The scene lasts 12.27 s: every time in it is between 0 and 12.27.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s045.html`: one `<section class="vs-scene" id="s045" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
