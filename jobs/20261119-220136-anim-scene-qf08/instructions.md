# Fix animated scene s036

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s036" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s036), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s035.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:franking-machine-photo` (and `photo:franking-machine-photo-cutout`, its subject cut out): A real desktop postage franking machine (postage meter), whole machine visible, side or three-quarter view, plain background if possible (Machine à affranchir Pitney Bowes DM400c à Lyon, France), 1920×1436. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s036.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The seam from s035 is clean, and the cut to the franking photo on "अब franking" works. The idea "no stamps needed" depends on the struck stamp in the envelope's stamp box, which is only about 60 px and barely reads on a phone.
1. Ghost stamp: enlarge the envelope's stamp box and the slate ghost postage-stamp to about 110×130 px (scale the envelope to 0.9 instead of 0.75, keeping its right edge at x 1740), and draw the strike as a slate cross 6 px wide over the full stamp on "ज़रूरी नहीं" (2.74).
2. The #counter row sits in the top half of the screen with the bottom third empty. Move the counter, receipt and envelope row down about 80 px so the labels "Payment का तरीका", "item पर सबूत" and the "अलग बातें" pill (y 860) sit evenly in the space below the header.
3. Make sure the "item पर सबूत" label under the envelope fades in on "सबूत" (about 5.6 s) at the same size as "Payment का तरीका" (at least 36 px Hindi). The "≠ अलग बातें" pill should sit between the two labels at y 860, not overlapping either one.

The scene lasts 15.16 s: every time in it is between 0 and 15.16.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s036.html`: one `<section class="vs-scene" id="s036" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
