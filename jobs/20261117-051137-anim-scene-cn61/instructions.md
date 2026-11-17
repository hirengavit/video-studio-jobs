# Fix animated scene s129

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s129" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s129), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s128.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s129.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s128 is clean and the beats land on their words ("pins निकालिए" at 1.98 s on "pins" at 1.5 s, the "RLO" pill on "RLO" at 9.5 s). The long stills the check found are the reading holds the kit asks for, so they're fine. The problem is action box 2. At 1920×1080 the grey Hindi line "वापसी पत्र कार्यालय" is about 28 px, below the kit's 32 px minimum. The box is already full with four lines and the RLO pill, and s130 then has to fit an "→ addressee" row under it, which spills onto the box's bottom edge.

1. In action box 2, raise the Hindi line "वापसी पत्र कार्यालय" to 34 px, in #6f6a63 with 'Noto Sans Devanagari', line height 1.3. Keep it directly under "Returned Letter Office".
2. Grow action box 2 downward from y 680–900 to y 680–960 so it holds both numbered lines, the Hindi line and the RLO pill, with at least 16 px of padding. That also leaves room for s130's "→ addressee" row. Grow action boxes 1 and 3 to the same height so the row stays even. Check that the card's bottom edge (y 980) still clears it, and lift the card to y 1000 if it doesn't.
3. Put "से वापस" on the same line as the end of "2. Returned Letter Office" if it fits at 1920 width. If it doesn't, keep it on its own line at the same 36 px weight as line 1, so it isn't read as part of the grey translation.

The scene lasts 10.82 s: every time in it is between 0 and 10.82.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s129.html`: one `<section class="vs-scene" id="s129" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
