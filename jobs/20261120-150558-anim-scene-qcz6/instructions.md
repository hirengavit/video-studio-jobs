# Fix animated scene s104

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s104" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s104), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s103.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s104.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s103 holds, and the "एक ही wax / एक ही private device" card lines arrive on their words. The bullion beat at the bottom right is cramped. "Insured bullion · coins" wraps into three narrow lines beside the small case. Its Hindi "बीमित बुलियन और सिक्के" is about 28 px, under the kit's 32 px floor, and it doesn't match s097's translations (सोने-चाँदी की सिल्लियाँ / सिक्के).

1. Re-lay the bottom right: `piece:valuables-case` at scale 0.6 resting with its base at (1360, 980). The label sits to its right at x 1520–1780: "Insured" / "bullion · coins" in Inter bold 36 px on two lines, and its Hindi below in 34 px `#6f6a63`.
2. Use the same Hindi as s097: "सोने-चाँदी की सिल्लियाँ · सिक्के" (wrap after "सिल्लियाँ" if needed). Don't use "बीमित बुलियन".
3. Put the grey line "मज़बूत लकड़ी / metal case" at 36 px under the label, at y about 1000, so it doesn't touch the case. Keep its `fade` at 6.24 s, or move it to 6.9 s on "मज़बूत".
4. Shrink the two-line card to fit its text (it sits half-empty from 0 to 1.3 s). Better still, bring line 2 in at 1.0 s.

The scene lasts 9.76 s: every time in it is between 0 and 9.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s104.html`: one `<section class="vs-scene" id="s104" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
