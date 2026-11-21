# Fix animated scene s040

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s040" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s040), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s039.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s040.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The continuity from s039 is right. Card 1 dims at 0.4, and the kiosk, "तय post offices में", ✓ Regional Head and ✗ Circle Head build in order on their words. The colours are right: green for the allowed one, slate with a strike for the rejected one. The stills are reading holds and are intended. Everything in card 2 is too small for a phone, though, and the card's lower third stays empty.

1. Scale the `booking-kiosk` so it is about 240 px tall (now about 200 px), centred in card 2 at about (960, 470).
2. Set "Self-booking kiosk" to 48 px and "तय post offices में" to 44 px Noto Sans Devanagari, and space them 64 px apart under the kiosk.
3. Make the two pills 440 px wide × 72 px with 44 px text. Put "✓ Regional Head" at y ≈ 790 and "✗ Circle Head" at y ≈ 880, inside the card (bottom 960). On the Circle Head strike, use `dim` 0.6 so the name stays readable under the slate line.
4. Pop the Circle Head pill at 8.8 (on "Circle Head") and strike it at 9.3 (on "नहीं"), rather than letting the strike land after the scene's last word.
5. Under "Self-booking kiosk", add its Hindi translation in a smaller, lighter line (32–36 px, supporting colour), per the kit's rule for postal terms.

The scene lasts 10.04 s: every time in it is between 0 and 10.04.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s040.html`: one `<section class="vs-scene" id="s040" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
