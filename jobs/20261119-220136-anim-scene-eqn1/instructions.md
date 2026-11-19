# Fix animated scene s072

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s072" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s072), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s071.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s072.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s071 holds. The sand panel and "असाधारण और योग्य cases में" come with the words, the green Central Government line lands on its words, and the highlight lands on "ढीली कर सकती". The jump at 6.15 is the cut to the Committee card on its name. The list items arrive on "commemorative stamps", "special stamps" and "जुड़े मामलों". "सलाह देती है:" at 12.42 matches where Hindi puts the verb. The stills are reading holds.

1. The two right sand panels (#chair, #members) appear at 6.06 and stay empty for about 7.7 s, the biggest thing on screen with nothing in it. Remove their fade from this scene so s073 brings them in with their content. If the s073 seam needs them, fade them in at 13.60 instead.
2. "Commemorative stamps" in the red card runs to the card's right edge (about 8 px clearance). Set the list items to 42 px with a 40 px inner margin on both sides (text x140–720), or widen the card to x100–800.
3. The list sits in the lower half below a gap where "सलाह देती है:" will appear. Put that line in place at 6.56, faded to the supporting tone (opacity 0.35). At 12.42, bring it to full white and run the underline, so the layout doesn't change during the reading hold.

The scene lasts 13.82 s: every time in it is between 0 and 13.82.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s072.html`: one `<section class="vs-scene" id="s072" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
