# Fix animated scene s123

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s123" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s123), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s122.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s123.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Rows 3 and 4 and their ticks follow the voice: "Packing ≠ अनुमति" at 0 s with a tick, "हींग जैसी गंध" at about 3.6 s, and the airtight-tin pill on "airtight tin" at 4.9 s. Card B arrives on "Insurance seal" (about 8.1 s for 9.6 s in the voice, close enough), and the flap pill on "हर flap" (11.2 s). The still stretches are reading holds, which is intended. The text is still small: "छेड़छाड़ दिखाता है" sits at about 24 px, and the "airtight tin / metal case" pill is small.

1. Card B row 1 sub-line "छेड़छाड़ दिखाता है": raise to 34 px ('Noto Sans Devanagari', #6f6a63), about 44 px below "Insurance seal".
2. Row 4 pill "airtight tin / metal case" and card B pill "flap · जोड़ · डोरी के सिरे": set both texts to 34 px and size the pills to fit with 24 px padding. Make the flap pill about 96 px tall now, because s124 adds a second line to it.
3. Use the same row heights (about 150 px) as in s121–s122 for card A and card B, so the swap at 8.1 s keeps the same layout.

The scene lasts 13.94 s: every time in it is between 0 and 13.94.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s123.html`: one `<section class="vs-scene" id="s123" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
