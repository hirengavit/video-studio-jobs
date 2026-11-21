# Fix animated scene s111

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s111" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s111), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s110.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s111.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The new layout (pillar box on the left, heading, envelope on the right) and the closing card "खुद Postmaster के नाम" with "Postmaster" highlighted work well. The drop into the box breaks physics. At about 6.5 s the envelope, still at its display size (about 680 px wide, five times the slot), moves onto the top of the pillar and covers it, drawn in front of the box, instead of going into the mouth. The "Test letter" chip is then left alone in the middle of the screen.

1. Don't move the big display envelope. At 6.30 s `out` the big envelope (dur 0.3). At 6.32 s `pop` a second, small copy (#env-drop: the same domestic-envelope piece at scale 0.2, about 150 px wide, slightly narrower than the slot) placed just above the pillar's mouth anchor. Then at 6.55 s `fall` #env-drop `{by: 90}` so it drops into the slot by 6.9 s. The letter stays the size a real letter would be next to the box.
2. Make it go into the box, not across its front: wrap #env-drop in a group with a clipPath whose bottom edge is the slot line (the mouth anchor's y). The letter then disappears into the slot as it falls, instead of sliding over the red front.
3. Keep the "Test letter" chip with its letter: put it right of the pillar at about (760, 470), next to the slot, so the label and the drop read as one beat. At 7.5 s `out` it (dur 0.3), before the "खुद Postmaster के नाम" card lands.
4. Hold the box still during the drop (no pulse, no camera move). One clear action on "box में एक test letter डालते हैं" (4.4 to 7.8 s) is enough.

The scene lasts 10.72 s: every time in it is between 0 and 10.72.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s111.html`: one `<section class="vs-scene" id="s111" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
