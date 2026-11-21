# Fix animated scene s010

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s010" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s010), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s009.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s010.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s009 is exact and cards 6 and 7 fill in order. Card 7 has two problems. It starts early, and it is cramped. The camera push and the card-1 highlight also arrive at the same moment as card 7's last line.

1. Card 7: start "Postmaster" when the voice says it (~4.5 s, after "आखिर में"), not at ~3.7 s. The kit says nothing shows before the voice reaches it. Keep "की जाँच" on ~5.6 s ("जाँच" at ~5.6–5.9 s).
2. Card 7 text: use the same font size as cards 5 and 6 (it now looks smaller), and keep a bottom margin of at least 16 px. Right now "+ extra काम" nearly touches the card's bottom edge. If three lines don't fit at that size, set "Postmaster की जाँच" on two lines at the shared size and put "+ extra काम" in a small amber #8a5d00 chip that overlaps the card's bottom edge, inside card 7's group. Don't shrink the Hindi.
3. Move the card-1 highlight border from 8.2 s to about 8.9 s, after "+ extra काम" has landed (narration "extra काम" at ~8.2 s), so two things don't land on one word. It can then hold to the fade into Part 1.
4. Aim the 4% push at card 1 with `{on: '#card-1', zoom: 1.04}` (it now drifts toward the frame centre), starting after card 7's line has settled (~7.0 s is fine). Check that card 4 and the header stay inside the frame.

The scene lasts 9.19 s: every time in it is between 0 and 9.19.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s010.html`: one `<section class="vs-scene" id="s010" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
