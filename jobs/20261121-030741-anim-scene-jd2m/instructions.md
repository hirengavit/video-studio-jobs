# Fix animated scene s115

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s115" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s115), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s114.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s115.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut to the Packer card on "packer" and the stamping row on "stamping" (10.2 s) are well timed. Two things go wrong. First, the series pill again reads "POST OFFICE RULES" instead of "LETTER BOXES". Second, the special-mail-bag that carries mails to the sub office and back (0–5 s) is a tiny white smudge, about 40 px, so on a phone it's invisible. The automatic check even reads 0.25–5.2 s as still. That leaves the voice's "mails ले जाने और लाने" with nothing visible happening.

1. Set the series slot to "LETTER BOXES".
2. Scale the special-mail-bag by about 3, so it's around 120 px tall, and keep its base on the line path so it doesn't drift off it.
3. Make the move happen on the words: `move` it to the Town SO at 2.0 s ("ले जाने") and back at 3.6 s ("लाने"), each with spring 'soft', instead of 1.5 s and 3.2 s.
4. The empty row bar appears at about 9.2 s, a second before its words. Bring the row bar and "Articles पर stamping" in together at 9.9 s, the bar popping and the text sliding in 0.1 s later, so an empty bar never sits alone.

The scene lasts 11.46 s: every time in it is between 0 and 11.46.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s115.html`: one `<section class="vs-scene" id="s115" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
