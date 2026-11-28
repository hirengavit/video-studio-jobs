# Writing a scene

A video is a row of scenes. You write **one file per scene**: a drawing (SVG) and a short list of what happens
when. The engine (`scene.js`) does all the motion: springs, camera, draw-on, character poses, physics, texture
and the transition from the previous scene. Every frame is a pure function of time, so never use CSS
animations, transitions, SMIL `<animate>`, timers, `requestAnimationFrame`, `Date.now` or `Math.random` (use
`S.rand(seed)` at build time if you need variety).

## The file

`scenes/s012.html`:

```html
<section class="vs-scene" id="s012" data-in="cut">
  <svg viewBox="0 0 1920 1080">
    <rect width="1920" height="1080" fill="#ffffff"/>            <!-- background first -->
    <use id="desk" href="piece:desk" transform="translate(1100 620) scale(1.2)"/>   <!-- a library piece -->
    <g id="host" data-rig="host"/>                                <!-- the kit's character, filled in by the app -->
    <text id="t1" x="960" y="180" font-size="72" text-anchor="middle">Your brain is lazy</text>
    <path id="arrow" d="M700 560 C 820 480, 1000 480, 1120 560" class="ink"/>
    <g id="bulb"> … </g>
  </svg>
  <script type="text/scene">
  {
    camera: [[0, {zoom: 1}], [5, {zoom: 1.08, x: 40}]],
    on: [
      [0.2, 'type',  '#t1'],
      [0.9, 'draw',  '#arrow', {dur: 0.8}],
      [1.6, 'pop',   '#bulb'],
    ],
    rigs: {
      host: {at: [[0, [450, 900]]], scale: 1.3,
             pose: [[0, 'stand'], [1.0, 'point']],
             face: [[0, 'neutral'], [2.6, 'worried']]},
    },
  }
  </script>
</section>
```

- Times are **seconds from the start of this scene** (0 to its length). Put each change on the spoken word it
  belongs to (you are given the word times).
- `id` of the section is the scene id you were given. The app sets `data-at` and `data-dur`.
- `data-in`: how this scene arrives, from the kit's allowed transitions (`cut`, `fade`, `iris`, `wipe`, `push`,
  `zoom`, `scroll`, `paper`, `flash` (a bright flash on the cut), `blur` (a soft blur crossfade)). `data-in-dur` in seconds, a number (0.3 to 0.8). Same place as the scene before:
  use `cut`. `data-in-opts='{"x": 30, "y": 60}'` sets an iris's centre (percent) or `{"from": "right"}` a wipe's side.
- Keep the drawing inside the 1920×1080 frame, with a margin of about 80 px for anything important.
- If the channel's kit has a fixed `frame` (a header drawn by the app above every scene), don't draw it: put its
  words on your section instead, e.g. `data-section="The exact words"`.
- Text: `font-family="Caveat"` is hand lettering, `font-family="Inter"` is clean; both are always available
  (the kit may set another default).

## What a scene can and can't do

It can: stand a character and props on a set's spots, draw things on, make them appear, move, grow, fade or leave; type and count text; move the camera; cut
between sub-shots at set times; have characters take poses and faces, walk, lean, and pick up, carry, pour, set
down and drop props; keep a level going across scenes.

It can't (so don't plan or write it): morph one drawing into another shape, deform a drawing, lip-sync, play
video or sound, draw particles by the hundred, or bring back an element after `out` (use a new element).

## Action words (`on`)

Each line is `[time, word, selector, options?]`. A selector matching several elements acts on each, and
`{stagger: 0.12}` spaces them out. Elements with an entrance word stay hidden until their time. Options not in
this table are reported by the checks (they would do nothing).

| Word | What it does | Options |
|---|---|---|
| `draw` | Draws the lines on like a pen, then fills fade in | `dur` (0.9), `ease` |
| `write` | Same as `draw`, for handwritten words drawn as paths | `dur`, `ease` |
| `pop` | Springs in from nothing | `spring` (`snap`), `from` (0) |
| `fade` | Fades in | `dur` (0.5) |
| `slide` | Slides in from a side | `from` (`left`/`right`/`up`/`down`), `dist` (240), `spring` |
| `type` | Types a `<text>` letter by letter (plain text, no `<tspan>`) | `cps` (22 characters a second) |
| `count` | Counts a number up (the text's own number is the target) | `to`, `from` (0), `dur` (1.2), `prefix`, `suffix`, `decimals`, `locale` (digit grouping: `'en-IN'` writes 1,64,999; default from the kit's `numbers.locale`, else US style) |
| `grow` | Grows a bar or line | `axis` (`x`/`y`), `origin` (`left`/`bottom`/…), `spring` |
| `move` | Moves by an offset | `by: [dx, dy]`, `spring` (`soft`) |
| `pulse` | A quick bump in size | `amount` (0.14) |
| `shake` | A short shake | `dur` (0.5), `amount` (10) |
| `wiggle` | Keeps rocking gently | `amount` (3°), `speed`, `phase` |
| `float` | Keeps bobbing up and down | `amount` (8), `speed`, `phase` |
| `spin` | Keeps turning | `speed` (90°/s) |
| `color` | Changes fill (or `prop: 'stroke'`) to a colour | `to`, `dur`, `prop` |
| `out` | Leaves: fades and shrinks (it can't come back) | `dur` (0.35), `scale` |

**Type in motion** (entrances for text):

| Word | What it does | Options |
|---|---|---|
| `words` | The words of a `<text>` arrive one by one, each rising in on a beat | `gap` (0.12 s between words), `dist` (24), `from` (`up`/`down`/`none`), `spring` |
| `letters` | The letters arrive one by one, fast: a ripple | `gap` (0.035), `dist` (14), `from`, `spring` |
| `tracking` | Letter-spacing tightens from wide to normal as it fades in | `from` (30 px), `dur` (0.8), `ease` |
| `smear` | Slides in fast with a motion-blur smear that clears as it lands | `from`, `dist` (320), `spring` (`fast`), `blur` (1) |
| `reveal` | Wiped in behind an invisible edge | `from` (`left`/`right`/`up`/`down`), `dur` (0.6), `ease` |
| `stamp` | Slams down like a rubber stamp, with a twist that settles | `from` (2.4), `spring`, `rot` (-6°) |
| `bounce` | Drops in from above and bounces to rest | `dist` (260), `dur` (0.9), `from` |
| `flip` | Turns in like a card flipping to face us | `dur` (0.6), `from` (`left`/`right`), `ease` |
| `scatter` | A group's pieces fly in from scattered places and settle into the drawing (dots forming a shape, cards stacking) | `spread` (320), `rot` (60°), `stagger` (0.03), `spring`, `seed` |

**Marks and changes** (the element stays; something happens to it):

| Word | What it does | Options |
|---|---|---|
| `highlight` | A marker sweep behind it, left to right (the phrase being explained); `words: 'THE PEOPLE'` highlights just that phrase inside one `<text>` | `color` (`#ffd54a`), `opacity` (0.35), `dur` (0.45), `pad`, `words` |
| `underline` | Draws a hand-drawn underline beneath it; `words: 'NOT'` underlines just that word inside one `<text>` | `color`, `width`, `dur` (0.5), `gap`, `words` |
| `strike` | Draws a line through it and dims it (an idea rejected); `words` strikes just that phrase | `color`, `width`, `dur` (0.35), `dim` (0.45), `words` |
| `swap` | This word lifts out while another rises into its place: `{to: '#next'}` (the other must have no actions of its own) | `to`, `dur` (0.45), `dist`, `ease` |
| `morph` | A `<path>` reshapes into another `<path>` (bars into a line, a circle into a square); both written with the same commands in the same order | `to`, `dur` (0.8), `ease` |
| `ticker` | Scrolls sideways for ever, like a news ticker (write the content twice for a seamless loop) | `speed` (120 px/s), `gap` (60), `dir` |

`grow` also takes `to` (a fraction, e.g. `0.7` for a progress bar at 70%). Never animate a `<tspan>` on its own (it would break the sentence): mark a phrase with `words`, or write it as its own `<text>`. Use these only where they explain
something: a highlight on the phrase being discussed, a strike on the wrong idea, a stamp on a verdict, a
counter on a real number. The channel's kit may keep some moves out (`moves.deny`); the checks tell you.

Springs: `snap`, `soft`, `bouncy`, `slow`, `fast`, `none` (the channel's kit may retune them).

## Sub-shots: hard cuts inside a scene

Channels that cut every second or two show several compositions within one sentence. Put each composition in
its own group and list when each is on screen:

```js
shots: [[0, '#wide'], [2.74, '#phone'], [3.94, '#reading']],
```

Only the current shot shows; the others are hidden. Everything outside the listed groups (a background) shows
throughout. Actions inside a shot use times from the start of the scene, like everything else.

## Sets: a place with fixed spots

A set is a place from the library (a desk, a kitchen) with named **spots** (where the character stands or sits,
where things rest) and **framings** (wide, medium, close). Build the scene on it so nothing floats and the place
looks the same in every scene:

```html
<use href="set:study-desk" layer="back"/>     <!-- the set's pieces behind the character -->
<g id="host" data-rig="host"/>
<use id="book" href="piece:book" transform="scale(0.45)"/>
<use href="set:study-desk" layer="front"/>    <!-- its pieces in front of him (e.g. a table edge) -->
```

```js
set: 'study-desk',
camera: [[0, 'wide'], [2.0, 'medium', 'inOut']],       // framing names instead of {zoom, x, y}
on: [[0, 'place', '#book', {spot: 'desk-left'}],       // rests with its base on the spot
     [2.4, 'place', '#book', {spot: 'desk-right'}]],   // set down there later (after a hold)
rigs: { host: { pose: [[0, 'sit']] } },               // stands on the set's character spot, at its scale
```

- `at` can name spots too: `at: [[0, 'seat'], [3, 'stand-left']]` (moving between them walks him).
- `{spot, dx, dy}` nudges a prop from its spot (e.g. two things on one desk).
- Only the set's own spot and framing names work (you're told them); the checks report any other name.

## Camera

`camera: [[t, {zoom, x, y, rot}, ease?], …]` (or a set's framing name in place of `{…}`): zoom around the centre, `x`/`y` move the view (world pixels),
`rot` in degrees. `{on: '#id', zoom: 2}` centres the camera on that element (a "dashboard zoom" onto one card or number; `x`/`y` nudge it). Keep moves slow and purposeful (a push-in of 5–15% over a scene is plenty).
`shake: [[t, amount, dur]]` shakes the camera once (an impact, a thud).

## Characters (`rigs`)

The kit's character is called `host`. Place `<g id="host" data-rig="host"/>` (empty) where it stands in the
layering and the app fills in the drawing. In `rigs`, give:
- `at`: `[[t, [x, y]], …]` its feet position over time (moving across the scene walks it, with a walk cycle).
- `scale` (a number, or keys like `[[0, 1.2], [4.0, 1.8]]` to change size with a sub-shot), and
  `flip: [[t, true]]` to face left.
- `pose`: `[[t, 'poseName'], …]`: only pose names listed in the kit. Poses spring into each other.
- `face`: `[[t, 'faceName'], …]`: only face names listed in the kit.

Blinking, breathing and subtle acting happen by themselves: a small anticipation before each pose change,
lower arms and hands following a moment later, a slight settle as a pose lands, a very small idle sway, a
walk cycle when it moves, and a squash as the head turns.

Decide how much this moment should move. Most lines want one clear pose that holds while the words land,
with a single gesture where the words carry energy or a turn; a quiet or heavy line may want almost no
movement at all. Stillness is a choice. Let the camera, props and light carry the rest. Don't change pose on
every phrase.

Kit poses can also move the whole body: `$lean` (degrees; the upper body tilts at the hips, the legs stay
planted), `$x` (shifting weight sideways) and `$y` (crouching, positive is down).

## Physical actions

Don't hand-build these in `update()`; the engine gets the physics right. They go in `on` like other lines.
Each prop has one timeline: it rests, may be picked up (`hold`), let go (`until`), and put down (`place` at a
later time). Only these physical lines may move a prop; don't also `move`/`slide` it.

| Line | What it does |
|---|---|
| `[0, 'place', '#cup', {on: '#table'}]` | At time 0: it rests on the surface (its `base` on the target's `top`, keeping its x; `x` sets it). |
| `[0, 'place', '#cup', {spot: 'desk-left'}]` | In a set: it rests with its `base` on the set's spot. |
| `[t, 'hold', '#book', {rig: 'host', hand: 'handR', until: 4.5, lift: [0, -40]}]` | From `t` the prop sits in the hand by its `grip` and moves and turns with the arm. Pose the arm first (e.g. `reach`, `holdUp`, `sitHold`). At `until` he lets go: it stays where it was. `lift` raises it off the hand. |
| `[t, 'place', '#book', {on: '#table'}]` | Later than 0: he sets it down: its base lands on the target's top, centred (or at `x`). Use after a `hold` whose `until` is `t`. |
| `[t, 'pour', '#pitcher', {into: '#cup', dur: 1.4, tilt: 45, level: '#pitcher-liquid', to: 0.4}]` | Tilts the container (in the hand if held, else around its base), a stream arcs from its `spout` down into the target's `mouth`, and the level drains to `to` (or follows `state`). The spout must be above the mouth. A short `dur` gives a trickle. |
| `[t, 'fall', '#book', {onto: '#table', bounce: 0.25}]` | Falls under gravity until its `base` meets the target's `top`, with a small bounce. `{by: 300}` falls a distance instead. |
| `[0, 'level', '#pitcher-liquid', {state: 'pitcher'}]` | A level (liquid, charge, progress) that follows a value shared across scenes (you're told the state names), so it carries on from the last scene. |

Anchors come from the library piece: `<circle data-anchor="spout|grip|base|mouth|top" cx=".." cy=".." r="0"/>`.
If a piece has none, the engine uses its box (base = bottom centre, top/mouth = top centre, grip = centre).
A held prop must come after the character in the SVG so it's drawn in front of the hand.

## Real photos and clips

When the scene's inputs list real materials, place them by name. They are real pictures of real things, with a credit
the app adds to the video's description; never redraw them, never fake one.

- A photo: `<image href="photo:ID" x="…" y="…" width="…" height="…" preserveAspectRatio="xMidYMid meet"/>`
  (`slice` to fill the box and crop). A photo with a clear subject also has `photo:ID-cutout`: the subject alone
  on a transparent background, to stand on the scene like an object.
- A clip: inside a `<foreignObject x y width height>`, `<video src="clip:ID" data-at="1.2" data-trim="0"/>`:
  it plays from 1.2 s into the scene (`data-at`, scene seconds), starting `data-trim` seconds into the clip, until
  the scene ends or the clip does (`data-duration` to stop sooner). Clips are silent; the voice carries the sound.
- Animate them like anything else: put the `<image>` or the `<foreignObject>` in a group and use the action words
  (slide, pop, reveal, grow, the camera's focus). Frame them, label them, point at a detail, highlight part of
  them with a shape on top.
- How they look is your choice, from the channel's style and the moment: a framed photo, full-bleed with a slow
  push-in, a cut-out standing on the page (`filter="url(#vs-cutout)"` on the cut-out gives a paper edge and
  shadow), rounded corners (a `clipPath`), a colour treatment (your own filter). A document or a landscape usually
  stays rectangular.
- Keep them inside the frame, big enough to see, and never stretch one: keep its proportions (its size is listed).

## Look and texture

Use the channel's kit: its palette, line classes and textures. Classes the engine understands:
- `boil` on a group: it wobbles slightly a few times a second (hand-made feel), when the kit turns boil on.
- `filter="url(#vs-pencil)"` pencil-rough lines, `url(#vs-crayon)` crayon-textured fill,
  `url(#vs-cutout)` paper cut-out with a white torn edge and a drop shadow, `url(#vs-shadow)` a soft shadow,
  `url(#vs-glow)` a glow (only if the kit allows glows).

## Rules

- One idea per scene. Say it with the fewest elements that make it clear.
- Never invent numbers, quotes, prices or results. Use a number only if it is in the script; otherwise use
  relative bars, placeholder lines or labels from the script.
- Text must be readable: at least 44 px, inside the frame, never on top of other text.
- Use the library's sets (`set:<id>`) and pieces (`piece:<id>`) when one fits; draw new things when nothing fits.
- Follow the channel kit's do/don't list.
- `update(t, section, $)` is available for anything the words above can't do; keep it a pure function of `t`. Inside it,
  find elements with `$('#id')` (a list, by the ids you wrote) or by class; `section.querySelector('#id')` finds nothing,
  because ids are renamed when the video is built.
