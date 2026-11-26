// Video Studio scene engine. Every animated video is a row of scenes; each scene is a small file the AI
// writes (an SVG plus a few lines saying what happens when). This engine does the rest: springs, camera,
// action words ("draw", "pop", "type", "count" …), character rigs with poses and faces, hand-made texture
// and "boil", and transitions between scenes.
//
// Everything is a pure function of time: render(T) sets every attribute from T alone, so the renderer
// can jump to any frame. There are no CSS animations, no timers and no randomness at render time.
(function () {
  "use strict";
  const S = (window.S = {});
  /** The frame: 1920×1080 unless the page's #root says otherwise (a vertical Short is 1080×1920). */
  const FRAME = () => {
    const r = document.getElementById("root");
    return { W: Number(r?.dataset.width) || 1920, H: Number(r?.dataset.height) || 1080 };
  };
  const NS = "http://www.w3.org/2000/svg";

  // ------------------------------------------------------------------ maths
  S.clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  S.lerp = (a, b, k) => a + (b - a) * k;
  const EASE = {
    linear: (k) => k,
    in: (k) => k * k * k,
    out: (k) => 1 - Math.pow(1 - k, 3),
    inOut: (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2),
    back: (k) => 1 + 2.2 * Math.pow(k - 1, 3) + 1.2 * Math.pow(k - 1, 2),
    sine: (k) => 0.5 - Math.cos(Math.PI * k) / 2,
    bounce: (k) => {
      const n = 7.5625, d = 2.75;
      if (k < 1 / d) return n * k * k;
      if (k < 2 / d) return n * (k -= 1.5 / d) * k + 0.75;
      if (k < 2.5 / d) return n * (k -= 2.25 / d) * k + 0.9375;
      return n * (k -= 2.625 / d) * k + 0.984375;
    },
    elastic: (k) => (k <= 0 ? 0 : k >= 1 ? 1 : Math.pow(2, -10 * k) * Math.sin((10 * k - 0.75) * ((2 * Math.PI) / 3)) + 1),
  };
  S.EASE = EASE;
  const ease = (name, k) => (EASE[name] || EASE.inOut)(S.clamp(k));

  /** Spring presets [stiffness ω, damping ζ]. A channel's kit can replace these to change the feel. */
  S.SPRING = { snap: [18, 0.72], soft: [9, 0.9], bouncy: [14, 0.42], slow: [5, 1], fast: [28, 0.85], none: [60, 1] };
  /** Closed-form step response of a damped spring: 0 at t<=0, settles to 1. */
  S.spring = function (t, sp) {
    if (t <= 0) return 0;
    const [w, z] = Array.isArray(sp) ? sp : S.SPRING[sp] || S.SPRING.snap;
    if (z >= 1) return 1 - Math.exp(-w * t) * (1 + w * t);
    const wd = w * Math.sqrt(1 - z * z);
    return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + ((z * w) / wd) * Math.sin(wd * t));
  };
  /** A value that changes target many times: the sum of one spring per change. keys: [[t, value, spring?]]. */
  S.track = function (v0, keys, sp) {
    return (t) => {
      let v = v0, prev = v0;
      for (const [tk, val, s] of keys) {
        v += (val - prev) * S.spring(t - tk, s || sp);
        prev = val;
      }
      return v;
    };
  };
  /** Keyframes with easing: [[t, value (number or array), ease?]]; the ease belongs to the segment ending at that key. */
  S.kf = function (t, keys) {
    if (!keys.length) return undefined;
    if (t <= keys[0][0]) return keys[0][1];
    for (let i = 1; i < keys.length; i++) {
      const [t1, v1, e] = keys[i];
      const [t0, v0] = keys[i - 1];
      if (t <= t1) {
        const k = ease(e || "inOut", (t - t0) / Math.max(1e-6, t1 - t0));
        return Array.isArray(v0) ? v0.map((a, j) => S.lerp(a, v1[j], k)) : typeof v0 === "number" ? S.lerp(v0, v1, k) : k < 1 ? v0 : v1;
      }
    }
    return keys[keys.length - 1][1];
  };
  /** Deterministic pseudo-random numbers from a seed (use at build time or keyed by frame). */
  S.rand = function (seed) {
    let a = (seed * 2654435761) >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  // ------------------------------------------------------------------ kit (set by the page from the channel's kit.json)
  S.kit = { boil: { fps: 8, amount: 0 }, texture: {}, springs: {}, rigs: {}, fonts: {} };
  S.useKit = function (kit) {
    Object.assign(S.kit, kit || {});
    Object.assign(S.SPRING, S.kit.springs || {});
  };

  // ------------------------------------------------------------------ texture filters (shared <defs>)
  function defs() {
    if (document.getElementById("vs-defs")) return;
    const b = S.kit.boil || {};
    const amt = b.amount ?? 0;
    const boils = [0, 1, 2]
      .map((i) => `<filter id="vs-boil-${i}" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="${b.frequency ?? 0.03}" numOctaves="2" seed="${7 + i * 13}"/><feDisplacementMap in="SourceGraphic" scale="${amt}" xChannelSelector="R" yChannelSelector="G"/></filter>`)
      .join("");
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("id", "vs-defs");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.position = "absolute";
    svg.innerHTML = `<defs>${boils}
      <filter id="vs-pencil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1.6"/></filter>
      <filter id="vs-crayon" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="11" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 1.7" result="m"/><feComposite in="SourceGraphic" in2="m" operator="in"/></filter>
      <filter id="vs-cutout" x="-10%" y="-10%" width="120%" height="125%"><feMorphology in="SourceAlpha" operator="dilate" radius="5" result="d"/><feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" seed="5" result="n"/><feDisplacementMap in="d" in2="n" scale="6" result="edge"/><feFlood flood-color="#fffaf0"/><feComposite in2="edge" operator="in" result="white"/><feGaussianBlur in="edge" stdDeviation="4" result="b"/><feOffset in="b" dx="3" dy="6" result="o"/><feFlood flood-color="#000" flood-opacity="0.28"/><feComposite in2="o" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="white"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="vs-shadow" x="-10%" y="-10%" width="120%" height="130%"><feGaussianBlur in="SourceAlpha" stdDeviation="6"/><feOffset dx="0" dy="8" result="o"/><feFlood flood-color="#000" flood-opacity="0.22"/><feComposite in2="o" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="vs-glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="14" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="vs-paper" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" seed="2" result="n"/><feColorMatrix in="n" type="saturate" values="0" result="g"/><feComponentTransfer in="g"><feFuncA type="linear" slope="0" intercept="${S.kit.texture?.paper ?? 0}"/></feComponentTransfer></filter>
    </defs>`;
    document.body.prepend(svg);
  }

  // ------------------------------------------------------------------ elements the engine moves
  // Each animated element is wrapped once in a <g>, and the wrapper gets the motion as a CSS transform
  // (transform-box: fill-box, so scale and rotate happen around the element's own centre).
  const wraps = new Map();
  function wrap(el) {
    if (wraps.has(el)) return wraps.get(el);
    const g = document.createElementNS(NS, "g");
    g.setAttribute("class", "vs-w");
    el.parentNode.insertBefore(g, el);
    g.appendChild(el);
    g.style.transformBox = "fill-box";
    g.style.transformOrigin = "center";
    const w = { g, el };
    wraps.set(el, w);
    return w;
  }
  function strokeParts(el) {
    const parts = [el, ...el.querySelectorAll("*")].filter((n) => typeof n.getTotalLength === "function" && n.tagName !== "text");
    return parts.map((p) => {
      let len = 0;
      try {
        len = p.getTotalLength();
      } catch {}
      return { p, len: len || 1, fill: getComputedStyle(p).fillOpacity, hasFill: getComputedStyle(p).fill !== "none" };
    });
  }

  // ------------------------------------------------------------------ action words
  // A verb turns one [t, verb, selector, options] line into a function of local time. "Entrance" verbs
  // keep the element hidden before t.
  const ENTRANCE = new Set(["draw", "pop", "fade", "slide", "type", "grow", "count", "write", "words", "letters", "tracking", "smear", "reveal", "stamp", "bounce", "flip", "scatter"]);
  const VERBS = {
    draw(w, t0, o) {
      const parts = strokeParts(w.el);
      const dur = o.dur ?? 0.9;
      const total = parts.reduce((a, b) => a + b.len, 0);
      return (t, st) => {
        const k = ease(o.ease || "inOut", (t - t0) / dur);
        let done = k * total;
        for (const q of parts) {
          const kk = S.clamp(done / q.len);
          done -= q.len;
          q.p.style.strokeDasharray = `${q.len} ${q.len}`;
          q.p.style.strokeDashoffset = `${q.len * (1 - kk)}`;
          if (q.hasFill) q.p.style.fillOpacity = String(Number(q.fill || 1) * S.clamp((k - 0.55) / 0.45));
        }
        st.opacity *= t >= t0 ? 1 : 0;
      };
    },
    pop(w, t0, o) {
      const sp = o.spring || "snap";
      return (t, st) => {
        const k = S.spring(t - t0, sp);
        st.scale *= Math.max(0, S.lerp(o.from ?? 0, 1, k));
        st.opacity *= S.clamp((t - t0) / 0.12);
      };
    },
    fade(w, t0, o) {
      const dur = o.dur ?? 0.5;
      return (t, st) => (st.opacity *= ease("out", (t - t0) / dur));
    },
    out(w, t0, o) {
      const dur = o.dur ?? 0.35;
      return (t, st) => {
        const k = ease("in", (t - t0) / dur);
        st.opacity *= 1 - k;
        if (o.scale !== false) st.scale *= 1 - 0.15 * k;
      };
    },
    slide(w, t0, o) {
      const d = o.dist ?? 240;
      const from = { left: [-d, 0], right: [d, 0], up: [0, -d], down: [0, d] }[o.from || "left"] || [-d, 0];
      const sp = o.spring || "snap";
      return (t, st) => {
        const k = S.spring(t - t0, sp);
        st.x += from[0] * (1 - k);
        st.y += from[1] * (1 - k);
        st.opacity *= S.clamp((t - t0) / 0.15);
      };
    },
    move(w, t0, o) {
      const [dx, dy] = o.by || [0, 0];
      const sp = o.spring || "soft";
      return (t, st) => {
        const k = S.spring(t - t0, sp);
        st.x += dx * k;
        st.y += dy * k;
      };
    },
    grow(w, t0, o) {
      const sp = o.spring || "snap";
      const to = o.to ?? 1;
      return (t, st) => {
        const k = Math.max(0, S.spring(t - t0, sp)) * to;
        if (o.axis === "y") st.sy *= k;
        else st.sx *= k;
        st.origin = o.origin || (o.axis === "y" ? "bottom" : "left");
      };
    },
    pulse(w, t0, o) {
      const amt = o.amount ?? 0.14;
      return (t, st) => {
        const x = t - t0;
        if (x > 0 && x < 0.6) st.scale *= 1 + amt * Math.sin((Math.PI * x) / 0.6);
      };
    },
    shake(w, t0, o) {
      const dur = o.dur ?? 0.5, amt = o.amount ?? 10;
      return (t, st) => {
        const x = t - t0;
        if (x > 0 && x < dur) st.x += amt * (1 - x / dur) * Math.sin(x * 70);
      };
    },
    wiggle(w, t0, o) {
      const amt = o.amount ?? 3, speed = o.speed ?? 2.2, ph = o.phase ?? 0;
      return (t, st) => {
        if (t > t0) st.rot += amt * Math.sin((t - t0) * speed * Math.PI * 2 + ph);
      };
    },
    float(w, t0, o) {
      const amt = o.amount ?? 8, speed = o.speed ?? 0.6, ph = o.phase ?? 0;
      return (t, st) => {
        if (t > t0) st.y += amt * Math.sin((t - t0) * speed * Math.PI * 2 + ph);
      };
    },
    spin(w, t0, o) {
      const speed = o.speed ?? 90;
      return (t, st) => {
        if (t > t0) st.rot += (t - t0) * speed;
      };
    },
    type(w, t0, o) {
      // Whole letters (grapheme clusters), so Hindi conjuncts and matras never show half-built.
      const text = w.el.textContent;
      const letters = typeof Intl !== "undefined" && Intl.Segmenter ? [...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(text)].map((x) => x.segment) : [...text];
      const cps = o.cps ?? 22;
      return (t, st) => {
        const n = Math.max(0, Math.floor((t - t0) * cps));
        const s = letters.slice(0, n).join("");
        if (w.el.textContent !== s) w.el.textContent = s;
        st.opacity *= t >= t0 ? 1 : 0;
      };
    },
    count(w, t0, o) {
      const written = Number(String(w.el.textContent).replace(/[^\d.-]/g, ""));
      const dur = o.dur ?? 1.2, from = o.from ?? 0, to = o.to ?? (Number.isFinite(written) ? written : 0);
      // Digit grouping follows the move's locale, else the kit's numbers.locale ("en-IN" writes 1,64,999), else US style.
      const locale = o.locale || S.kit.numbers?.locale || "en-US";
      const fmt = (v) => (o.prefix || "") + (o.decimals ? v.toLocaleString(locale, { minimumFractionDigits: o.decimals, maximumFractionDigits: o.decimals }) : Math.round(v).toLocaleString(locale)) + (o.suffix || "");
      return (t, st) => {
        const s = fmt(S.lerp(from, to, ease("out", (t - t0) / dur)));
        if (w.el.textContent !== s) w.el.textContent = s;
        st.opacity *= t >= t0 ? 1 : 0;
      };
    },
    color(w, t0, o) {
      const dur = o.dur ?? 0.4;
      const prop = o.prop || "fill";
      const target = rgbOf(o.to);
      const els = [w.el, ...w.el.querySelectorAll("*")];
      // Keep each element's own inline colour until the change starts.
      const was = els.map((e) => ({ inline: e.style[prop], computed: getComputedStyle(e)[prop] }));
      return (t) => {
        const k = ease("out", (t - t0) / dur);
        els.forEach((e, i) => {
          const c = was[i].computed;
          if (!c || c === "none") return;
          e.style[prop] = k <= 0 ? was[i].inline : k >= 1 ? target : mixColor(c, target, k);
        });
      };
    },
    // ---- type in motion
    /** Words arrive one by one (each rises and fades in), on a beat. For one <text> (no <tspan>s inside). */
    words(w, t0, o, ctx) {
      const parts = splitText(w.el, "word", ctx);
      const gap = o.gap ?? 0.12, dist = o.dist ?? 24, sp = o.spring || "snap";
      const dir = o.from === "down" ? -1 : o.from === "none" ? 0 : 1;
      return (t, st) => {
        let prev = 0;
        parts.forEach((p, i) => {
          const k = S.spring(t - (t0 + i * gap), sp);
          const off = dir * dist * (1 - Math.min(1, k));
          p.setAttribute("dy", (off - prev).toFixed(2));
          p.style.fillOpacity = String(S.clamp((t - (t0 + i * gap)) / 0.15));
          prev = off;
        });
        st.opacity *= t >= t0 ? 1 : 0;
      };
    },
    /** Letters arrive one by one, fast: a typographic ripple. */
    letters(w, t0, o, ctx) {
      const parts = splitText(w.el, "letter", ctx);
      const gap = o.gap ?? 0.035, dist = o.dist ?? 14, sp = o.spring || "snap";
      const dir = o.from === "down" ? -1 : o.from === "none" ? 0 : 1;
      return (t, st) => {
        let prev = 0;
        parts.forEach((p, i) => {
          const k = S.spring(t - (t0 + i * gap), sp);
          const off = dir * dist * (1 - Math.min(1, k));
          p.setAttribute("dy", (off - prev).toFixed(2));
          p.style.fillOpacity = String(S.clamp((t - (t0 + i * gap)) / 0.1));
          prev = off;
        });
        st.opacity *= t >= t0 ? 1 : 0;
      };
    },
    /** Letter-spacing tightens from wide to normal while the text fades in. */
    tracking(w, t0, o) {
      const from = o.from ?? 30, dur = o.dur ?? 0.8;
      return (t, st) => {
        const k = ease(o.ease || "out", (t - t0) / dur);
        w.el.style.letterSpacing = `${(from * (1 - k)).toFixed(2)}px`;
        st.opacity *= S.clamp((t - t0) / 0.3);
      };
    },
    /** Slides in fast with a motion-blur smear that clears as it lands. */
    smear(w, t0, o) {
      const d = o.dist ?? 320, sp = o.spring || "fast", amount = o.blur ?? 1;
      const from = { left: [-d, 0], right: [d, 0], up: [0, -d], down: [0, d] }[o.from || "left"] || [-d, 0];
      const filter = smearFilter(w);
      const horizontal = from[0] !== 0;
      return (t, st) => {
        const k = S.spring(t - t0, sp), k1 = S.spring(t - t0 - 1 / 60, sp);
        st.x += from[0] * (1 - k);
        st.y += from[1] * (1 - k);
        st.opacity *= S.clamp((t - t0) / 0.1);
        const speed = Math.abs(k - k1) * d * 60; // px per second
        const blur = t > t0 ? Math.min(36, (speed / 90) * amount) : 0;
        filter.setAttribute("stdDeviation", horizontal ? `${blur.toFixed(2)} 0` : `0 ${blur.toFixed(2)}`);
        w.g.style.filter = blur > 0.4 ? `url(#${filter.parentNode.id})` : "";
      };
    },
    /** Revealed behind an invisible edge that wipes across it. */
    reveal(w, t0, o) {
      const dur = o.dur ?? 0.6;
      return (t, st) => {
        const p = (100 * (1 - ease(o.ease || "inOut", (t - t0) / dur))).toFixed(2);
        const from = o.from || "left";
        w.g.style.clipPath = from === "right" ? `inset(0 0 0 ${p}%)` : from === "up" ? `inset(0 0 ${p}% 0)` : from === "down" ? `inset(${p}% 0 0 0)` : `inset(0 ${p}% 0 0)`;
        st.opacity *= t >= t0 ? 1 : 0;
      };
    },
    /** Slams down like a rubber stamp: from big to its size, with a little twist that settles. */
    stamp(w, t0, o) {
      const sp = o.spring || "snap", from = o.from ?? 2.4, rot = o.rot ?? -6;
      return (t, st) => {
        const k = S.spring(t - t0, sp);
        st.scale *= Math.max(0.001, S.lerp(from, 1, k));
        st.rot += rot * (1 - k);
        st.opacity *= S.clamp((t - t0) / 0.06);
      };
    },
    /** Drops in from above and bounces to rest. */
    bounce(w, t0, o) {
      const dist = o.dist ?? 260, dur = o.dur ?? 0.9;
      const dir = o.from === "down" ? 1 : -1;
      return (t, st) => {
        const k = ease("bounce", (t - t0) / dur);
        st.y += dir * dist * (1 - k);
        st.opacity *= S.clamp((t - t0) / 0.08);
      };
    },
    /** Turns in like a card flipping to face us (a faked 3D flip). */
    flip(w, t0, o) {
      const dur = o.dur ?? 0.6, sign = o.from === "right" ? 1 : -1;
      return (t, st) => {
        const k = ease(o.ease || "out", (t - t0) / dur);
        const a = (Math.PI / 2) * (1 - k);
        st.sx *= Math.max(0.02, Math.cos(a));
        st.skew += sign * 14 * (1 - k);
        st.opacity *= S.clamp((t - t0) / 0.12);
      };
    },
    /** A group's pieces fly in from scattered places and settle into the drawing (dots forming a shape, cards stacking). */
    scatter(w, t0, o) {
      const kids = [...w.el.children].filter((c) => c.tagName !== "defs").map((c) => wrap(c));
      const rnd = S.rand(o.seed ?? 7);
      const spread = o.spread ?? 320, rotAmt = o.rot ?? 60, gap = o.stagger ?? 0.03, sp = o.spring || "soft";
      const starts = kids.map(() => [(rnd() - 0.5) * 2 * spread, (rnd() - 0.5) * 2 * spread, (rnd() - 0.5) * 2 * rotAmt]);
      for (const k of kids) k.g.setAttribute("data-layout-allow-overflow", "");
      return (t, st) => {
        kids.forEach((kid, i) => {
          const k = S.spring(t - (t0 + i * gap), sp);
          const [sx, sy, sr] = starts[i];
          kid.g.style.transform = `translate(${(sx * (1 - k)).toFixed(2)}px, ${(sy * (1 - k)).toFixed(2)}px) rotate(${(sr * (1 - k)).toFixed(2)}deg)`;
          kid.g.style.opacity = String(S.clamp((t - (t0 + i * gap)) / 0.15));
        });
        st.opacity *= t >= t0 ? 1 : 0;
      };
    },
    // ---- marks on text
    /** Draws a line through it (an idea rejected), then dims it. */
    strike(w, t0, o, ctx) {
      const box = markBox(w.el, o.words, ctx);
      const shape = (b) => {
        const y = b.y + b.height * 0.55, wob = b.height * 0.06;
        return `M${b.x - 6} ${y} Q${b.x + b.width / 2} ${y + wob} ${b.x + b.width + 6} ${y - wob * 0.5}`;
      };
      const line = markPath(w, shape(box()), o.color, o.width ?? Math.max(4, box().height * 0.09), "after");
      let len = line.getTotalLength(), seen = box();
      const dur = o.dur ?? 0.35, dim = o.words ? 1 : o.dim ?? 0.45;
      return (t) => {
        if (box() !== seen) {
          seen = box();
          line.setAttribute("d", shape(seen));
          len = line.getTotalLength();
        }
        const k = ease("out", (t - t0) / dur);
        line.style.strokeDasharray = `${len} ${len}`;
        line.style.strokeDashoffset = `${len * (1 - k)}`;
        line.style.opacity = t > t0 ? "1" : "0";
        if (dim < 1) w.el.style.opacity = t > t0 ? String(S.lerp(1, dim, k)) : "";
      };
    },
    /** Draws a hand-drawn underline beneath it. */
    underline(w, t0, o, ctx) {
      const box = markBox(w.el, o.words, ctx);
      const shape = (b) => {
        const y = b.y + b.height + (o.gap ?? 6), wob = b.height * 0.05;
        return `M${b.x} ${y} Q${b.x + b.width * 0.5} ${y + wob} ${b.x + b.width} ${y - wob * 0.4}`;
      };
      const line = markPath(w, shape(box()), o.color, o.width ?? Math.max(4, box().height * 0.08), "after");
      let len = line.getTotalLength(), seen = box();
      const dur = o.dur ?? 0.5;
      return (t) => {
        if (box() !== seen) {
          seen = box();
          line.setAttribute("d", shape(seen));
          len = line.getTotalLength();
        }
        const k = ease("out", (t - t0) / dur);
        line.style.strokeDasharray = `${len} ${len}`;
        line.style.strokeDashoffset = `${len * (1 - k)}`;
        line.style.opacity = t > t0 ? "1" : "0";
      };
    },
    /** A marker sweep behind it, left to right. */
    highlight(w, t0, o, ctx) {
      const box = markBox(w.el, o.words, ctx), pad = o.pad ?? 6, dur = o.dur ?? 0.45;
      let b = null;
      const r = document.createElementNS(NS, "rect");
      const place = () => {
        b = box();
        r.setAttribute("x", b.x - pad);
        r.setAttribute("y", b.y - pad * 0.5);
        r.setAttribute("height", b.height + pad);
      };
      place();
      r.setAttribute("rx", 4);
      r.setAttribute("fill", o.color || "#ffd54a");
      r.setAttribute("fill-opacity", o.opacity ?? 0.35);
      r.setAttribute("data-vs-mark", "");
      w.g.insertBefore(r, w.el);
      return (t) => {
        if (box() !== b) place();
        const k = ease("out", (t - t0) / dur);
        r.setAttribute("width", ((b.width + pad * 2) * k).toFixed(2));
        r.style.opacity = t > t0 ? "1" : "0";
      };
    },
    // ---- change
    /** One word gives way to the next: this one lifts out while the other rises into its place. */
    swap(w, t0, o, ctx) {
      const target = ctx ? find(ctx.section, o.to, ctx.prefix)[0] : null;
      if (!target) {
        ctx?.warn(`swap: nothing found for "${o.to}"`);
        return () => {};
      }
      const tw = wrap(target);
      tw.g.setAttribute("data-layout-allow-overflow", "");
      const h = (o.dist ?? Math.max(30, bboxOf(w.el).height)) * 1.1, dur = o.dur ?? 0.45;
      return (t, st) => {
        const k = ease(o.ease || "inOut", (t - t0) / dur);
        st.y -= h * k;
        st.opacity *= 1 - k;
        tw.g.style.transform = `translateY(${(h * (1 - k)).toFixed(2)}px)`;
        tw.g.style.opacity = t < t0 ? "0" : String(k);
      };
    },
    /** A path reshapes into another path (a bar chart into a line, a circle into a square). Both paths must be written with the same commands. */
    morph(w, t0, o, ctx) {
      const target = ctx ? find(ctx.section, o.to, ctx.prefix)[0] : null;
      const tok = (d) => (d || "").match(/[a-zA-Z]|-?\d*\.?\d+(?:e-?\d+)?/g) || [];
      const a = tok(w.el.getAttribute("d")), b = tok(target?.getAttribute("d"));
      const shape = (x) => x.map((v) => (/[a-zA-Z]/.test(v) ? v : "#")).join("");
      if (!target || w.el.tagName !== "path" || target.tagName !== "path" || !a.length || shape(a) !== shape(b)) {
        ctx?.warn(`morph ${o.to}: both must be <path>s with the same commands in the same order (${a.length} vs ${b.length} tokens)`);
        return () => {};
      }
      target.style.display = "none";
      const dur = o.dur ?? 0.8;
      return (t) => {
        const k = ease(o.ease || "inOut", (t - t0) / dur);
        w.el.setAttribute("d", a.map((v, i) => (/[a-zA-Z]/.test(v) ? v : S.lerp(Number(v), Number(b[i]), k).toFixed(2))).join(" "));
      };
    },
    /** Scrolls sideways for ever, like a news ticker (repeat the content twice for a seamless loop). */
    ticker(w, t0, o) {
      const b = bboxOf(w.el), speed = o.speed ?? 120, gap = o.gap ?? 60, dir = o.dir === "right" ? 1 : -1;
      const period = b.width + gap;
      w.g.setAttribute("data-layout-allow-overflow", "");
      return (t, st) => {
        if (t > t0) st.x += dir * (((t - t0) * speed) % period);
      };
    },
  };
  /** The box a mark (highlight, underline, strike) sits on, as a getter. Scenes are set up before the web fonts
   * are in use (the browser even reports them "loaded" before a text has asked for them), so a box measured then
   * has the fallback font's widths and a phrase far along a line comes out well to the left of where it ends up.
   * The getter measures again whenever the text's own length changes (a font arriving), and returns the same
   * object until then so callers can tell when it moved. */
  function markBox(el, words, ctx) {
    const size = () => {
      try {
        return el.getComputedTextLength ? el.getComputedTextLength() : el.getBBox().width;
      } catch {
        return 0;
      }
    };
    const measure = () => (words ? phraseBox(el, words, ctx) : bboxOf(el));
    let b = measure(), at = size();
    return () => {
      const now = size();
      if (Math.abs(now - at) > 0.5) {
        at = now;
        b = measure();
      }
      return b;
    };
  }
  /** The box around a phrase inside one <text> (so a sentence stays one piece of type). Falls back to the whole text. */
  function phraseBox(el, words, ctx) {
    const text = el.textContent, i = text.indexOf(words);
    if (el.tagName !== "text" || i < 0 || typeof el.getExtentOfChar !== "function") {
      ctx?.warn(`highlight: "${words}" isn't in that <text> (it says "${text.slice(0, 40)}")`);
      return bboxOf(el);
    }
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (let k = i; k < i + words.length; k++) {
      try {
        const e = el.getExtentOfChar(k);
        x0 = Math.min(x0, e.x); y0 = Math.min(y0, e.y); x1 = Math.max(x1, e.x + e.width); y1 = Math.max(y1, e.y + e.height);
      } catch {}
    }
    return Number.isFinite(x0) ? { x: x0, y: y0, width: x1 - x0, height: y1 - y0 } : bboxOf(el);
  }
  /** The bounding box of an element in its own coordinates (0 size if it can't be measured). */
  function bboxOf(el) {
    try {
      return el.getBBox();
    } catch {
      return { x: 0, y: 0, width: 0, height: 0 };
    }
  }
  /** A drawn mark (a strike, an underline) added next to the element, in the element's colour by default. */
  function markPath(w, d, color, width, where) {
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", d);
    p.setAttribute("fill", "none");
    p.setAttribute("stroke", color || (getComputedStyle(w.el).fill !== "none" && getComputedStyle(w.el).fill) || "#d93a3a");
    p.setAttribute("stroke-width", width);
    p.setAttribute("stroke-linecap", "round");
    p.setAttribute("data-vs-mark", "");
    if (where === "after") w.g.appendChild(p);
    else w.g.insertBefore(p, w.el);
    return p;
  }
  /** Splits a <text> into <tspan>s per word or per letter (grapheme), once. */
  function splitText(el, unit, ctx) {
    if (el.tagName !== "text") {
      ctx?.warn(`${unit === "word" ? "words" : "letters"}: works on a <text> (got <${el.tagName}>)`);
      return [];
    }
    if (el.dataset.vsSplit === unit) return [...el.querySelectorAll("tspan")];
    const text = el.textContent;
    let parts;
    if (unit === "word") parts = text.split(/(?<=\s)(?=\S)/);
    else parts = typeof Intl !== "undefined" && Intl.Segmenter ? [...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(text)].map((x) => x.segment) : [...text];
    el.textContent = "";
    const spans = parts.map((p) => {
      const ts = document.createElementNS(NS, "tspan");
      ts.textContent = p;
      el.appendChild(ts);
      return ts;
    });
    el.dataset.vsSplit = unit;
    return spans;
  }
  /** A blur filter of this element's own, for smears. */
  let smearN = 0;
  function smearFilter(w) {
    defs();
    const id = `vs-smear-${++smearN}`;
    const f = document.createElementNS(NS, "filter");
    f.setAttribute("id", id);
    f.setAttribute("x", "-40%");
    f.setAttribute("y", "-40%");
    f.setAttribute("width", "180%");
    f.setAttribute("height", "180%");
    const b = document.createElementNS(NS, "feGaussianBlur");
    b.setAttribute("stdDeviation", "0 0");
    f.appendChild(b);
    document.querySelector("#vs-defs defs").appendChild(f);
    return b;
  }
  /** Any CSS colour (#hex, rgb(), a name like "red") as rgb(r, g, b). */
  const rgbCache = new Map();
  function rgbOf(c) {
    if (!c) return "rgb(0,0,0)";
    if (rgbCache.has(c)) return rgbCache.get(c);
    const probe = document.createElement("span");
    probe.style.color = c;
    document.body.appendChild(probe);
    const v = getComputedStyle(probe).color;
    probe.remove();
    rgbCache.set(c, v);
    return v;
  }
  function mixColor(a, b, k) {
    const p = (c) => (rgbOf(c).match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number);
    const x = p(a), y = p(b);
    return `rgb(${x.map((v, i) => Math.round(S.lerp(v, y[i], k))).join(",")})`;
  }
  VERBS.write = VERBS.draw;
  const PHYS = new Set(["hold", "pour", "fall", "place", "level"]);
  S.verbs = VERBS;

  /** Finds elements inside a scene by the names the scene file used (the app prefixes ids with the scene id). */
  function find(scope, sel, prefix) {
    let els = [...scope.querySelectorAll(sel)];
    if (!els.length && prefix && sel.includes("#")) els = [...scope.querySelectorAll(sel.replace(/#([\w-]+)/g, `[id="${prefix}-$1"]`))];
    return els;
  }
  S.find = find;

  // ------------------------------------------------------------------ character rigs
  // A rig is a kit character (an SVG piece) with named joint groups and a pose table. Joints rotate
  // around their pivots; faces swap named variants. The engine adds the acting a person would animate:
  //   anticipation  a small move the other way just before a pose change
  //   overlap       child joints (lower arm, hand) follow their parent a moment later
  //   overshoot     poses settle with a little spring
  //   squash        the body dips and settles when a pose changes
  //   idle          a very small sway so a held pose never looks frozen (holds should read as still)
  //   walk          moving across the scene cycles the kit's walk poses, with a bob
  //   turn          the head squashes as it turns (front view <-> back view)
  // plus blinking and breathing. A kit can tune any of these under "acting".
  const bump = (u) => (u > 0 && u < 1 ? Math.sin(Math.PI * u) : 0);
  /** Acting settings a kit may have written under other names. */
  const ACTING_ALIASES = { idleSway: "idle", followThrough: "lag", settle: "squash", overshoot: "squash", headTurn: "turn" };
  function makeRig(root, spec, def, warn) {
    const kit = S.kit.rigs[spec.rig || root.dataset.rig];
    if (!kit) throw new Error(`No character "${spec.rig || root.dataset.rig}" in the kit`);
    const kitActing = {};
    for (const [k, v] of Object.entries(kit.acting || {})) kitActing[ACTING_ALIASES[k] || k] = v;
    const act = Object.assign({ anticipation: 0.08, antTime: 0.2, lag: 0.05, spring: [9, 0.75], squash: 0.012, idle: 0.45, walkStride: 130, turn: 0.4 }, kitActing, def.acting || {});
    const breatheAmt = kitActing.breathing ?? kit.breathe ?? 0.012;
    const q = (sel) => find(root, sel, spec.prefix)[0] || null;
    const joints = Object.entries(kit.joints).map(([name, j]) => ({ name, el: q(j.el), pivot: j.pivot }));
    for (const j of joints) if (!j.el) warn(`character: its joint "${j.name}" (${kit.joints[j.name].el}) isn't in the drawing`);
    // Depth of each joint in the chain (upper arm 0, lower arm 1, hand 2): deeper joints lag more.
    for (const j of joints) {
      j.depth = 0;
      if (j.el) for (let p = j.el.parentElement; p && p !== root; p = p.parentElement) if (joints.some((o) => o.el === p)) j.depth++;
    }
    // A lean tilts the upper body around the hips; the legs stay planted.
    const hip = kit.hip || kit.joints.torso?.pivot || [0, -200];
    const isLeg = (j) => /^(leg|foot|knee|shin|thigh)/i.test(j.name);
    for (const j of joints) j.leans = j.depth === 0 && !isLeg(j);
    const canLean = joints.some((j) => j.leans && j.el);
    // Unknown poses and faces don't stop the scene: they fall back and are reported to the checks.
    const knownPose = (p) => {
      if (kit.poses[p]) return p;
      warn(`character: no pose "${p}" in the kit (poses: ${Object.keys(kit.poses).join(", ")})`);
      return kit.defaultPose || Object.keys(kit.poses)[0];
    };
    const knownFace = (f) => {
      if (!kit.faceMap || kit.faceMap[f]) return f;
      warn(`character: no face "${f}" in the kit (faces: ${Object.keys(kit.faceMap).join(", ")})`);
      return kit.defaultFace || "neutral";
    };
    const poseKeys = (def.pose || [[0, kit.defaultPose || Object.keys(kit.poses)[0]]]).map(([t, p, s]) => [t, knownPose(p), s]);
    const faceKeys = (def.face || [[0, kit.defaultFace || "neutral"]]).map(([t, f]) => [t, knownFace(f)]);
    const sp = def.spring || kit.spring || act.spring;
    const angleOf = (pose, j) => kit.poses[pose][j] ?? 0;
    // One track per joint: the sum of springs between successive poses, each child a little later.
    const tracks = {};
    const changes = {};
    for (const j of joints) {
      const lag = j.depth * act.lag;
      tracks[j.name] = S.track(angleOf(poseKeys[0][1], j.name), poseKeys.slice(1).map(([t, pose, s]) => [t + lag, angleOf(pose, j.name), s || sp]));
      // Anticipation: before each change, a little move the other way.
      let prev = angleOf(poseKeys[0][1], j.name);
      changes[j.name] = poseKeys.slice(1).map(([t, pose]) => {
        const to = angleOf(pose, j.name);
        const d = to - prev;
        prev = to;
        return [t + lag, d];
      });
    }
    const poseTimes = poseKeys.slice(1).map(([t]) => t);
    // Whole-body parts of a pose: $lean (degrees, upper body around the hips), $x (weight shift), $y (crouch +).
    const rootTrack = (key) => S.track(kit.poses[poseKeys[0][1]][key] ?? 0, poseKeys.slice(1).map(([t, pose, s]) => [t, kit.poses[pose][key] ?? 0, s || sp]));
    const rootChanges = (key) => {
      let prev = kit.poses[poseKeys[0][1]][key] ?? 0;
      return poseKeys.slice(1).map(([t, pose]) => {
        const to = kit.poses[pose][key] ?? 0;
        const d = to - prev;
        prev = to;
        return [t, d];
      });
    };
    const lean = rootTrack("$lean"), shiftX = rootTrack("$x"), crouch = rootTrack("$y");
    const leanChanges = rootChanges("$lean");
    const at = (def.at || [[0, [0, 0]]]).map(([tk, p, e]) => [tk, p, e || "inOut"]);
    // Size: one number, or keys over time (e.g. bigger in a close sub-shot): [[t, 1.2], [4.0, 1.8]].
    const scaleKeys = Array.isArray(def.scale) ? def.scale.map(([tk, v, e]) => [tk, v, e || "linear"]) : null;
    const scaleAt = (t) => (scaleKeys ? S.kf(t, scaleKeys) : def.scale ?? 1);
    const blinkEvery = kit.blink ?? 3.2;
    const viewOf = (face) => kit.faceMap?.[face]?.view ?? "front";
    const turns = faceKeys.slice(1).filter(([, f], i) => viewOf(f) !== viewOf(faceKeys[i][1])).map(([t]) => t);
    const walk = kit.poses.walk1 && kit.poses.walk2 && def.walk !== false;
    const posAt = (t) => S.kf(t, at);
    // Distance walked by time t, exactly: whole segments already crossed, plus the current one so far.
    const walked = (t) => {
      let d = 0;
      for (let i = 1; i < at.length; i++) {
        const [t1, p1] = at[i], [, p0] = at[i - 1];
        if (t >= t1) d += Math.abs(p1[0] - p0[0]);
        else {
          if (t > at[i - 1][0]) d += Math.abs(posAt(t)[0] - p0[0]);
          break;
        }
      }
      return d;
    };
    // Face parts, found once.
    const faceSlots = Object.entries(kit.faces || {}).map(([slot, variants]) => ({
      slot,
      fallback: variants.neutral ? "neutral" : Object.keys(variants)[0],
      closed: !!variants.closed,
      parts: Object.entries(variants).map(([name, sel]) => ({ name, el: q(sel) })),
      has: (n) => !!variants[n],
    }));
    const render = (t) => {
      const scale = scaleAt(t);
      const [x0] = posAt(t - 0.05);
      const [x1] = posAt(t + 0.05);
      const speed = Math.abs(x1 - x0) / 0.1;
      const walkW = walk ? S.clamp((speed - 15) / 120) : 0;
      const phase = walkW ? (walked(t) / act.walkStride) * Math.PI : 0;
      let ln = lean(t);
      for (const [tk, d] of leanChanges) if (Math.abs(d) > 2) ln -= act.anticipation * d * bump((t - (tk - act.antTime)) / act.antTime);
      joints.forEach((j, i) => {
        if (!j.el) return;
        let a = tracks[j.name](t);
        for (const [tk, d] of changes[j.name]) if (Math.abs(d) > 4) a -= act.anticipation * d * bump((t - (tk - act.antTime)) / act.antTime);
        if (walkW) {
          const k = 0.5 + 0.5 * Math.sin(phase);
          const w = (kit.poses.walk1[j.name] ?? 0) * k + (kit.poses.walk2[j.name] ?? 0) * (1 - k);
          a = S.lerp(a, w, walkW);
        }
        a += act.idle * (j.name === "head" ? 1.4 : 1) * Math.sin(t * (1.7 + 0.37 * i) + i * 1.3) * (1 - walkW);
        let tf = j.leans && canLean && ln ? `rotate(${ln.toFixed(3)} ${hip[0]} ${hip[1]}) ` : "";
        tf += `rotate(${a.toFixed(3)} ${j.pivot[0]} ${j.pivot[1]})`;
        if (j.name === "head" && turns.length) {
          let sx = 1;
          for (const tk of turns) sx -= act.turn * bump((t - (tk - 0.09)) / 0.18);
          if (sx !== 1) tf += ` translate(${j.pivot[0]} ${j.pivot[1]}) scale(${sx.toFixed(3)} 1) translate(${-j.pivot[0]} ${-j.pivot[1]})`;
        }
        j.el.setAttribute("transform", tf);
      });
      // Faces: every slot (mouth, brows, eyes …) shows the variant named by the current face.
      const face = S.kf(t, faceKeys.map(([tk, f]) => [tk, f, "linear"])) || faceKeys[0][1];
      const blinking = blinkEvery && t % blinkEvery > blinkEvery - 0.12;
      for (const fs of faceSlots) {
        const want = fs.slot === "eyes" && blinking && fs.closed ? "closed" : (kit.faceMap?.[face]?.[fs.slot] ?? face);
        const show = fs.has(want) ? want : fs.fallback;
        for (const p of fs.parts) if (p.el) p.el.style.display = p.name === show ? "" : "none";
      }
      // Position, squash on pose changes, walk bob, breathing and facing direction on the rig's root.
      let [x, y] = posAt(t);
      let sq = 0;
      for (const tk of poseTimes) sq += bump((t - (tk - 0.05)) / 0.3) - 0.6 * bump((t - (tk + 0.25)) / 0.3);
      y += 8 * (act.squash / 0.03) * Math.max(0, sq); // the body dips as the pose lands
      if (walkW) y -= 7 * walkW * Math.abs(Math.sin(phase));
      const breathe = 1 + breatheAmt * Math.sin(t * 2 * Math.PI * 0.28);
      const sy = breathe * (1 - act.squash * sq);
      const flip = S.kf(t, (def.flip || [[0, false]]).map(([tk, f]) => [tk, f])) ? -1 : 1;
      x += shiftX(t) * scale * flip;
      y += crouch(t) * scale;
      // Kits without separate upper-body parts lean as a whole (from the feet).
      const wholeLean = canLean ? 0 : ln;
      root.setAttribute("transform", `translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${(wholeLean * flip).toFixed(3)}) scale(${(scale * flip * (1 + 0.5 * act.squash * sq)).toFixed(4)} ${(scale * sy).toFixed(4)})`);
    };
    render.root = root;
    return render;
  }

  // ------------------------------------------------------------------ physical actions
  // Things a scene shouldn't hand-build, because it gets the physics wrong: holding a prop in a hand, pouring
  // from a spout into a container, falling under gravity onto a surface, resting on a surface, and a level
  // (liquid, charge) that carries on across scenes. They use anchors on library pieces:
  //   <circle data-anchor="spout" cx=".." cy=".." r="0"/>  (also "grip", "base", "mouth", "top")
  // Missing anchors fall back to the drawing's box: base = bottom centre, top/mouth = top centre, grip = centre.
  S.state = {};
  S.useState = (st) => Object.assign(S.state, st || {});
  /** A shared value at video time T: [[T, value, ease?], …] from the video plan. */
  S.stateAt = (name, T) => {
    const keys = S.state[name];
    if (!keys) throw new Error(`No shared state "${name}"`);
    return S.kf(T, keys.map(([tk, v, e]) => [tk, v, e || "inOut"]));
  };
  const toParent = (el, ancestor) => ancestor.getCTM().inverse().multiply(el.getCTM());
  const apply = (m, [x, y]) => [m.a * x + m.c * y + m.e, m.b * x + m.d * y + m.f];
  function anchorOf(el, name) {
    const a = el.querySelector(`[data-anchor="${name}"]`);
    if (a) {
      const m = toParent(a, el);
      return apply(m, [Number(a.getAttribute("cx") || 0), Number(a.getAttribute("cy") || 0)]);
    }
    const b = el.getBBox();
    if (name === "base") return [b.x + b.width / 2, b.y + b.height];
    if (name === "top" || name === "mouth") return [b.x + b.width / 2, b.y];
    if (name === "spout") return [b.x, b.y + b.height * 0.08];
    return [b.x + b.width / 2, b.y + b.height / 2];
  }
  /** A group around el whose transform attribute the physics owns (set fresh every frame). */
  function physWrap(el) {
    if (el.__phys) return el.__phys;
    const g = document.createElementNS(NS, "g");
    g.setAttribute("class", "vs-p");
    el.parentNode.insertBefore(g, el);
    g.appendChild(el);
    el.__phys = g;
    return g;
  }
  function one(section, sel, what) {
    if (typeof sel !== "string" || !sel) throw new Error(`${what}: needs a selector`);
    const el = find(section, sel, section.id)[0];
    if (!el) throw new Error(`${what}: nothing found for "${sel}"`);
    if (el.closest("defs")) throw new Error(`${what}: "${sel}" is a definition (gradient, filter …), not a drawn shape`);
    return el;
  }
  /** Where `anchor` of el is, in g's coordinates as if g had no transform of its own. */
  const anchorInWrap = (el, g, name) => apply(toParent(el, g), anchorOf(el, name));
  /** Where `anchor` of any element is, in the given coordinate space (with everything as currently drawn). */
  const anchorIn = (el, space, name) => apply(toParent(el, space), anchorOf(el, name));

  function buildPhysics(sc, warn) {
    const { section, def } = sc;
    const lines = (def.on || []).filter(([, verb]) => PHYS.has(verb));
    // One record per physical prop: where it rests, and its timeline of holds and put-downs.
    const props = new Map();
    const propOf = (el) => {
      const g = physWrap(el);
      if (!props.has(g)) props.set(g, { g, el, rest: "", events: [], extra: [] });
      return props.get(g);
    };
    // Resting at the start: [0, 'place', '#cup', {on: '#table'}] snaps it onto the surface (keeping its x).
    for (const [t0, , sel, o = {}] of lines.filter((l) => l[1] === "place")) {
      try {
        const pr = propOf(one(section, sel, "place"));
        const [bx, by] = anchorInWrap(pr.el, pr.g, "base");
        let tx, ty;
        // A set's spot is in frame coordinates: bring it into the prop's own space. It sets x too.
        if (o.spot) [tx, ty] = apply(toParent(pr.g.parentNode, sc.cam).inverse(), sc.spot(o.spot));
        else [tx, ty] = anchorIn(one(section, o.on, "place on"), pr.g.parentNode, "top");
        if (!(t0 > 0)) {
          const x0 = o.x !== undefined ? o.x - bx : o.spot ? tx - bx + (o.dx ?? 0) : (o.dx ?? 0);
          pr.rest = `translate(${x0.toFixed ? x0.toFixed(2) : x0} ${(ty - by + (o.dy ?? 0)).toFixed(2)})`;
        } else {
          // A put-down later in the scene: its base goes onto the surface, centred on it unless x is given.
          const x = o.x !== undefined ? o.x : tx + (o.dx ?? 0);
          pr.events.push({ t0, kind: "place", tf: `translate(${(x - bx).toFixed(2)} ${(ty - by + (o.dy ?? 0)).toFixed(2)})` });
        }
    
      } catch (e) {
        warn(String((e && e.message) || e));
      }
    }
    // Holding: [t, 'hold', '#prop', {rig: 'host', hand: 'handR', until: 4.2, rot: 0, lift: [0, -40]}]
    for (const [t0, , sel, o = {}] of lines.filter((l) => l[1] === "hold")) {
      try {
        const pr = propOf(one(section, sel, "hold"));
        const rigRoot = one(section, `#${o.rig || "host"}`, "hold: the character");
        const rig = sc.rigByRoot.get(rigRoot);
        if (!rig) throw new Error(`hold: "#${o.rig || "host"}" isn't a character with a line in rigs`);
        const kit = S.kit.rigs[rigRoot.dataset.rig];
        const j = kit?.joints?.[o.hand || "handR"];
        if (!j) throw new Error(`hold: the character has no joint "${o.hand || "handR"}"`);
        const hand = find(rigRoot, j.el, section.id)[0];
        if (!hand) throw new Error(`hold: the character's ${o.hand || "handR"} isn't in its drawing`);
        pr.events.push({ t0, kind: "hold", until: o.until ?? Infinity, hand, rig, pivot: j.pivot, grip: anchorInWrap(pr.el, pr.g, "grip"), rot: o.rot ?? 0, lift: o.lift ?? [0, 0], tilt: () => 0 });
    
      } catch (e) {
        warn(String((e && e.message) || e));
      }
    }
    for (const pr of props.values()) pr.events.sort((a, b) => a.t0 - b.t0);

    // Pouring: [t, 'pour', '#pitcher', {into: '#cup', dur: 1.4, tilt: 40, color, level: '#liquid', to: 0.4, state}]
    const after = [];
    for (const [t0, , sel, o = {}] of lines.filter((l) => l[1] === "pour")) {
      try {
        const el = one(section, sel, "pour");
        const into = one(section, o.into, "pour into");
        const pr = propOf(el);
        const dur = o.dur ?? 1.4, tilt = o.tilt ?? 40;
        const tiltAt = (t) => tilt * (S.spring(t - t0, [10, 0.8]) - S.spring(t - (t0 + dur - 0.3), [10, 0.9]));
        // Held: the tilt turns it in the hand. Resting: it tips around its base.
        for (const ev of pr.events) if (ev.kind === "hold" && ev.t0 <= t0 + dur && ev.until >= t0) ev.tilt = tiltAt;
        const base = anchorInWrap(el, pr.g, "base");
        pr.extra.push((t, heldNow) => (heldNow ? "" : ` rotate(${(-tiltAt(t)).toFixed(2)} ${base[0].toFixed(1)} ${base[1].toFixed(1)})`));
        const stream = document.createElementNS(NS, "path");
        stream.setAttribute("fill", "none");
        stream.setAttribute("stroke", o.color || "#e5aa47");
        stream.setAttribute("stroke-width", String(o.width ?? 9));
        stream.setAttribute("stroke-linecap", "round");
        stream.setAttribute("opacity", "0.9");
        sc.cam.appendChild(stream);
        let level = null;
        if (o.level) {
          const g = physWrap(one(section, o.level, "pour level"));
          const box = g.getBBox();
          level = { g, by: box.y + box.height };
        }
        if (o.state && !S.state[o.state]) warn(`pour: there is no shared state "${o.state}" (states: ${Object.keys(S.state).join(", ") || "none"})`);
        after.push((t) => {
          // The stream: from the spout, falling in an arc into the container's mouth.
          const flowing = t > t0 + 0.28 && t < t0 + dur - 0.15 && shown(el, section) && shown(into, section);
          if (!flowing) stream.setAttribute("d", "");
          else {
            const [sx, sy] = apply(toParent(el, sc.cam), anchorOf(el, "spout"));
            const [ex, ey] = apply(toParent(into, sc.cam), anchorOf(into, "mouth"));
            if (sy > ey - 4) warn(`pour: the spout of ${sel} is below the mouth of ${o.into}, so the liquid would have to flow upward; raise the container (hold with lift) or lower the target`);
            const cx = sx + (ex - sx) * 0.85, cy = sy - 6;
            stream.setAttribute("d", `M${sx.toFixed(1)} ${sy.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`);
            const len = stream.getTotalLength() || 1;
            const grow = S.clamp((t - (t0 + 0.28)) / 0.18), shrink = S.clamp((t - (t0 + dur - 0.35)) / 0.2);
            stream.style.strokeDasharray = `${len} ${len}`;
            stream.style.strokeDashoffset = String(len * (1 - grow) - len * shrink);
          }
          if (level) {
            const k = o.state && S.state[o.state] ? S.stateAt(o.state, sc.at + t) : S.lerp(o.from ?? 1, o.to ?? 0.5, S.clamp((t - (t0 + 0.28)) / Math.max(0.1, dur - 0.45)));
            level.g.setAttribute("transform", `translate(0 ${level.by}) scale(1 ${k.toFixed(4)}) translate(0 ${-level.by})`);
          }
        });
    
      } catch (e) {
        warn(String((e && e.message) || e));
      }
    }
    // A level that follows the shared state all scene long: [0, 'level', '#liquid', {state: 'pitcher'}]
    for (const [, , sel, o = {}] of lines.filter((l) => l[1] === "level")) {
      try {
        const g = physWrap(one(section, sel, "level"));
        const box = g.getBBox();
        const by = box.y + box.height;
        if (!S.state[o.state]) {
          warn(`level: there is no shared state "${o.state}" (states: ${Object.keys(S.state).join(", ") || "none"})`);
          continue;
        }
        after.push((t) => g.setAttribute("transform", `translate(0 ${by}) scale(1 ${S.stateAt(o.state, sc.at + t).toFixed(4)}) translate(0 ${-by})`));
    
      } catch (e) {
        warn(String((e && e.message) || e));
      }
    }
    // Falling under gravity onto a surface (or by a distance), with a small bounce:
    // [t, 'fall', '#cup', {onto: '#table', bounce: 0.25}] or {by: 300}
    for (const [t0, , sel, o = {}] of lines.filter((l) => l[1] === "fall")) {
      try {
        const pr = propOf(one(section, sel, "fall"));
        let dist = o.by;
        if (dist === undefined) {
          const onto = one(section, o.onto, "fall onto");
          pr.g.setAttribute("transform", pr.rest); // measure from where it rests
          const [, by] = anchorIn(pr.el, pr.g.parentNode, "base");
          pr.g.removeAttribute("transform");
          const [, ty] = anchorIn(onto, pr.g.parentNode, "top");
          dist = ty - by;
        }
        const gAcc = o.gravity ?? 2600, e = o.bounce ?? 0.25;
        pr.extra.push((t) => {
          let x = t - t0, y = 0;
          if (x > 0) {
            const tHit = Math.sqrt((2 * Math.abs(dist)) / gAcc);
            if (x < tHit) y = 0.5 * gAcc * x * x;
            else {
              y = Math.abs(dist);
              let v = gAcc * tHit * e, tt = x - tHit;
              while (v > 30) {
                const up = (2 * v) / gAcc;
                if (tt < up) {
                  y -= v * tt - 0.5 * gAcc * tt * tt;
                  break;
                }
                tt -= up;
                v *= e;
              }
            }
          }
          return y ? ` translate(0 ${(Math.sign(dist) * y).toFixed(2)})` : "";
        });
    
      } catch (e) {
        warn(String((e && e.message) || e));
      }
    }
    sc.props = [...props.values()];
    sc.after = after;
  }

  /** Where a held prop is at time t: its grip in the hand, turned with the hand (and any pour tilt). */
  function inHand(sc, pr, ev, t) {
    const m = toParent(ev.hand, pr.g.parentNode);
    const [px, py] = apply(m, ev.pivot);
    const ang = (Math.atan2(m.b, m.a) * 180) / Math.PI;
    return `translate(${(px + ev.lift[0]).toFixed(2)} ${(py + ev.lift[1]).toFixed(2)}) rotate(${(ang + ev.rot - ev.tilt(t)).toFixed(2)}) translate(${(-ev.grip[0]).toFixed(2)} ${(-ev.grip[1]).toFixed(2)})`;
  }

  /** Whether an element is on screen now (a sub-shot that isn't current is hidden, and has no position). */
  function shown(el, section) {
    for (let p = el; p && p !== section; p = p.parentElement) if (p.style && p.style.display === "none") return false;
    return true;
  }
  function renderPhysics(sc, t) {
    for (const pr of sc.props) {
      // A prop in a hidden sub-shot (or held by a hand in one) isn't drawn: leave it at rest.
      const hand = pr.events.find((e) => e.kind === "hold")?.hand;
      if (!shown(pr.g, sc.section) || (hand && !shown(hand, sc.section))) {
        pr.g.setAttribute("transform", pr.rest);
        continue;
      }
      // The latest event that has started decides where the prop is; before any, it rests.
      let tf = pr.rest;
      let held = false;
      const ev = pr.events.filter((e) => e.t0 <= t).pop();
      if (ev?.kind === "place") tf = ev.tf;
      else if (ev?.kind === "hold") {
        if (t <= ev.until) {
          tf = inHand(sc, pr, ev, t);
          held = true;
        } else {
          // Let go: it stays where the hand was at that moment (pose the character then, read, restore).
          ev.rig(ev.until);
          tf = inHand(sc, pr, ev, ev.until);
          ev.rig(t);
        }
      }
      for (const f of pr.extra) tf += f(t, held);
      pr.g.setAttribute("transform", tf);
    }
    for (const f of sc.after) f(t);
  }

  // ------------------------------------------------------------------ scenes
  const scenes = [];
  /**
   * Called by each scene file's script with its section's id. The section says when it plays:
   * <section class="vs-scene" data-at="12.30" data-dur="5.20" data-in="iris" data-in-dur="0.5">
   */
  S.scene = function (id, def) {
    const section = document.getElementById(id);
    if (!section) throw new Error(`No scene section "${id}"`);
    scenes.push({ section, def: def || {} });
  };
  /** Compiles each scene's code (carried as data in the page) on its own, so one mistake stays in its scene. */
  S.loadScenes = function () {
    for (const tag of document.querySelectorAll('script.vs-src[type="application/json"]')) {
      const id = tag.dataset.scene;
      try {
        const src = JSON.parse(tag.textContent);
        S.scene(id, new Function("S", `"use strict"; return (${src});`)(S));
      } catch (e) {
        S.fail(id, e);
      }
    }
  };
  /** A scene whose own script couldn't even run (e.g. a syntax error): it still gets a slot and a report. */
  S.fail = function (id, e) {
    const section = document.getElementById(id);
    if (section) scenes.push({ section, def: {}, broken: `the scene's script didn't run: ${String((e && e.message) || e)}` });
  };

  /** The options each action word understands; anything else is reported (it would be silently ignored). */
  const OPTIONS = {
    draw: ["dur", "ease"], write: ["dur", "ease"], pop: ["spring", "from"], fade: ["dur"], out: ["dur", "scale"],
    slide: ["from", "dist", "spring"], move: ["by", "spring"], grow: ["axis", "origin", "spring", "to"], pulse: ["amount"],
    shake: ["dur", "amount"], wiggle: ["amount", "speed", "phase"], float: ["amount", "speed", "phase"], spin: ["speed"],
    type: ["cps"], count: ["to", "from", "dur", "prefix", "suffix", "decimals", "locale"], color: ["to", "dur", "prop"],
    words: ["gap", "dist", "from", "spring"], letters: ["gap", "dist", "from", "spring"], tracking: ["from", "dur", "ease"],
    smear: ["from", "dist", "spring", "blur"], reveal: ["from", "dur", "ease"], stamp: ["from", "spring", "rot"], bounce: ["dist", "dur", "from"],
    flip: ["dur", "from", "ease"], scatter: ["spread", "rot", "stagger", "spring", "seed"], strike: ["dur", "color", "width", "dim", "words"],
    underline: ["dur", "color", "width", "gap", "words"], highlight: ["dur", "color", "opacity", "pad", "words"], swap: ["to", "dur", "dist", "ease"],
    morph: ["to", "dur", "ease"], ticker: ["speed", "gap", "dir"],
    hold: ["rig", "hand", "until", "rot", "lift"], pour: ["into", "dur", "tilt", "color", "width", "level", "to", "from", "state"],
    fall: ["onto", "by", "bounce", "gravity"], place: ["on", "spot", "dx", "dy", "x"], level: ["state"],
  };

  function build(sc) {
    const { section, def } = sc;
    const warn = (m) => (sc.warnings ??= new Set()).add(m);
    sc.at = Number(section.dataset.at || 0);
    sc.dur = Number(section.dataset.dur || 5);
    sc.tin = section.dataset.in || "cut";
    if (!TRANSITIONS[sc.tin]) {
      warn(`data-in="${sc.tin}" isn't a transition (use one of: ${Object.keys(TRANSITIONS).join(", ")})`);
      sc.tin = "cut";
    }
    const d = Number(section.dataset.inDur);
    sc.tinDur = sc.tin === "cut" ? 0 : Number.isFinite(d) ? S.clamp(d, 0.1, 2) : 0.5;
    if (section.dataset.inDur !== undefined && !Number.isFinite(d)) warn(`data-in-dur="${section.dataset.inDur}" must be a number of seconds, e.g. 0.5`);
    try {
      sc.inOpts = JSON.parse(section.dataset.inOpts || "{}");
    } catch {
      sc.inOpts = {};
      warn("data-in-opts isn't valid JSON");
    }
    const svg = section.querySelector("svg");
    if (!svg) throw new Error("the scene has no <svg>");
    // Camera: wrap the scene's drawing in one group.
    // A full-frame background is stretched past the edges, so camera moves and boil never show its border.
    const { W, H } = FRAME();
    const bg = [...svg.children].find((n) => n.tagName === "rect" && Number(n.getAttribute("width")) >= W && Number(n.getAttribute("height")) >= H);
    if (bg) {
      bg.setAttribute("x", "-400");
      bg.setAttribute("y", "-300");
      bg.setAttribute("width", "2720");
      bg.setAttribute("height", "1680");
      bg.setAttribute("data-layout-allow-overflow", "");
    }
    const cam = document.createElementNS(NS, "g");
    cam.setAttribute("class", "vs-cam");
    cam.setAttribute("data-layout-allow-overflow", "");
    [...svg.childNodes].filter((n) => !(n.tagName && n.tagName.toLowerCase() === "defs")).forEach((n) => cam.appendChild(n));
    svg.appendChild(cam);
    sc.cam = cam;
    // The set this scene is on (named, or the first one drawn in it): its spots and framings can be used by name.
    sc.setId = def.set || section.querySelector("[data-set]")?.dataset.set || null;
    sc.setDef = sc.setId ? S.kit.sets?.[sc.setId] : null;
    if (def.set && !sc.setDef) warn(`set "${def.set}" isn't in the library`);
    sc.spot = (name) => {
      const p = sc.setDef?.spots?.[name];
      if (!p) warn(`spot "${name}" isn't in ${sc.setId ? `set "${sc.setId}" (spots: ${Object.keys(sc.setDef?.spots ?? {}).join(", ")})` : "any set (this scene has no set)"}`);
      return p || [FRAME().W / 2, FRAME().H - 180];
    };
    const framing = (c) => {
      if (c && typeof c === "object" && c.on) {
        // {on: '#id', zoom}: the camera centres on that element (measured before any motion).
        const el = find(section, c.on, section.id)[0];
        if (!el) {
          warn(`camera: nothing found for "${c.on}"`);
          return { zoom: c.zoom ?? 1 };
        }
        const r = el.getBoundingClientRect(), p = svg.getBoundingClientRect();
        const { W, H } = FRAME();
        const kx = W / (p.width || W), ky = H / (p.height || H);
        return { zoom: c.zoom ?? 1.6, x: (r.left - p.left + r.width / 2) * kx - W / 2 + (c.x ?? 0), y: (r.top - p.top + r.height / 2) * ky - H / 2 + (c.y ?? 0), rot: c.rot ?? 0 };
      }
      if (typeof c !== "string") return c || {};
      const f = sc.setDef?.framings?.[c];
      if (!f) warn(`framing "${c}" isn't in ${sc.setId ? `set "${sc.setId}" (framings: ${Object.keys(sc.setDef?.framings ?? {}).join(", ")})` : "any set"}`);
      return f || {};
    };
    sc.camKeys = (def.camera || []).map(([t, c0, e]) => {
      const c = framing(c0);
      return [t, [c.zoom ?? 1, c.x ?? 0, c.y ?? 0, c.rot ?? 0], e || "inOut"];
    });
    sc.shakes = def.shake || []; // [[t, amount, dur]]
    // Shots inside the scene: hard cuts to another composition on a word. [[t, '#shotA'], [t2, '#shotB']]
    sc.shots = (def.shots || []).map(([t, sel]) => {
      const el = find(section, sel, section.id)[0];
      if (!el) warn(`shots: nothing found for "${sel}"`);
      return { t, el };
    }).filter((x) => x.el).sort((a, b) => a.t - b.t);
    // Boil on everything marked .boil (or the whole scene when the kit says so).
    sc.boil = S.kit.boil?.amount ? (S.kit.boil.all ? [cam] : [...svg.querySelectorAll(".boil")]) : [];
    for (const line of def.on || []) {
      const [t0, verb, sel, o = {}] = line;
      if (typeof t0 !== "number" || !Number.isFinite(t0)) warn(`action ${JSON.stringify(line).slice(0, 80)}: its time must be a number of seconds`);
      if (t0 > sc.dur + 0.05) warn(`${verb} ${sel} at ${t0} s: after the scene ends (${sc.dur.toFixed(2)} s)`);
      const allowed = OPTIONS[verb];
      if (allowed) for (const k of Object.keys(o)) if (k !== "stagger" && !allowed.includes(k)) warn(`${verb}: option "${k}" isn't used (it takes: ${allowed.join(", ") || "no options"})`);
      // A channel's kit can limit the moves its scenes use (moves: {allow: [...]} or {deny: [...]}).
      const mv = S.kit.moves || {};
      if ((mv.allow && !mv.allow.includes(verb) && !PHYS.has(verb)) || (mv.deny && mv.deny.includes(verb))) warn(`${verb}: this channel's kit doesn't allow it (moves: ${mv.allow ? mv.allow.join(", ") : `all but ${mv.deny.join(", ")}`})`);
    }
    // Characters first: holds need their hands.
    sc.rigByRoot = new Map();
    sc.rigs = Object.entries(def.rigs || {}).flatMap(([sel, rd]) => {
      const root = find(section, /^[#.\[]/.test(sel) ? sel : `#${sel}`, section.id)[0];
      if (!root) {
        warn(`rigs: no character "${sel}" in the drawing (put <g id="${sel.replace(/^#/, "")}" data-rig="host"/> where it stands)`);
        return [];
      }
      // On a set: feet positions may be spot names, and size/position default to the set's.
      const ch = sc.setDef?.character || {};
      const rd2 = { ...rd };
      if (rd2.scale === undefined && ch.scale) rd2.scale = ch.scale;
      if (!rd2.at && ch.spot) rd2.at = [[0, ch.spot]];
      if (rd2.at) rd2.at = rd2.at.map(([t, p, e]) => [t, typeof p === "string" ? sc.spot(p) : p, e]);
      const r = makeRig(root, { rig: rd2.rig || root.dataset.rig, prefix: section.id }, rd2, warn);
      sc.rigByRoot.set(root, r);
      return [r];
    });
    // Action lines.
    const byEl = new Map();
    for (const line of def.on || []) {
      const [t0, verb, sel, o = {}] = line;
      if (PHYS.has(verb)) continue;
      const fn = VERBS[verb];
      if (!fn) {
        warn(`unknown action "${verb}" (actions: ${Object.keys(VERBS).join(", ")}, ${[...PHYS].join(", ")})`);
        continue;
      }
      const els = sel instanceof Element ? [sel] : typeof sel === "string" ? find(section, sel, section.id) : [];
      if (!els.length) {
        warn(`${verb}: nothing found for "${sel}"`);
        continue;
      }
      els.forEach((el, i) => {
        if (el.parentNode && el.parentNode.tagName === "text") {
          // A word inside a sentence can't be wrapped (that would break the text). Marks work on the phrase;
          // anything else must animate the whole <text> or use separate texts.
          if (["highlight", "underline", "strike"].includes(verb)) {
            const whole = el.parentNode, w2 = wrap(whole), tt2 = t0 + (o.stagger ?? 0) * i;
            if (!byEl.has(w2)) byEl.set(w2, { fns: [], hiddenUntil: -Infinity, entrance: false });
            byEl.get(w2).fns.push(fn(w2, tt2, { ...o, words: o.words ?? el.textContent }, { section, prefix: section.id, warn }));
          } else warn(`${verb} ${sel}: that's a word inside a <text>; animate the whole <text>, or write the word as its own <text> (marks like highlight, underline and strike can take {words: '…'})`);
          return;
        }
        const w = wrap(el);
        if (["slide", "move", "shake", "smear", "bounce", "words", "letters"].includes(verb)) w.g.setAttribute("data-layout-allow-overflow", "");
        const tt = t0 + (o.stagger ?? 0) * i;
        if (!byEl.has(w)) byEl.set(w, { fns: [], hiddenUntil: -Infinity, entrance: false });
        const rec = byEl.get(w);
        rec.fns.push(fn(w, tt, o, { section, prefix: section.id, warn }));
        if (ENTRANCE.has(verb)) {
          rec.hiddenUntil = rec.entrance ? Math.min(rec.hiddenUntil, tt) : tt;
          rec.entrance = true;
        }
      });
    }
    sc.actors = [...byEl.entries()];
    sc.update = typeof def.update === "function" ? def.update : null;
    // Blinks: a drawing with a blink twin (the same picture, eyes closed) gets it laid right over it; the twin follows
    // the drawing (wrappers, attributes, visibility) and shows for a moment every few seconds.
    sc.blinks = [];
    for (const twin of section.querySelectorAll("image[data-blink]")) {
      const orig = section.querySelector(`image[data-blink-src="${twin.getAttribute("data-blink")}"]`);
      if (!orig) continue;
      orig.after(twin);
      sc.blinks.push({ orig, twin, seed: Number(twin.getAttribute("data-blink")) || 1 });
    }
    buildPhysics(sc, warn);
    sc.warn = warn;
  }

  const ORIGIN = { center: "center", left: "left center", right: "right center", top: "center top", bottom: "center bottom" };
  /** Is a blink on at time t? Rare and uneven, like a person: none in a scene's first 1.6 s, then one every 4.5–9 s,
   * sometimes a quick double, each 0.12–0.18 s long (a fixed pattern per drawing, so every render is the same). */
  function blinkOn(t, seed) {
    const hash = (k) => { const x = Math.sin(seed * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
    let at = 1.6 + hash(0) * 2.5;
    for (let k = 1; at <= t && k < 400; k++) {
      const len = 0.12 + 0.06 * hash(k + 500);
      if (t < at + len) return true;
      if (hash(k + 900) < 0.15 && t >= at + len + 0.18 && t < at + 2 * len + 0.18) return true;
      at += 4.5 + 4.5 * hash(k);
    }
    return false;
  }

  function renderBlinks(sc, t) {
    for (const { orig, twin, seed } of sc.blinks || []) {
      for (const a of orig.attributes) if (!["id", "href", "xlink:href", "data-blink-src"].includes(a.name)) twin.setAttribute(a.name, a.value);
      twin.style.cssText = orig.style.cssText;
      // Only over a drawing that's fully showing (not mid-swap or fading).
      const shown = orig.style.display !== "none" && Number(orig.getAttribute("opacity") ?? 1) >= 0.99 && Number(orig.style.opacity || 1) >= 0.99;
      twin.style.opacity = shown && blinkOn(t, seed) ? "1" : "0";
    }
  }

  function renderScene(sc, t) {
    // Camera.
    const [z, cx, cy, r] = sc.camKeys.length ? S.kf(t, sc.camKeys) : [1, 0, 0, 0];
    let sx = 0, sy = 0;
    for (const [ts, amt, dur = 0.4] of sc.shakes) {
      const x = t - ts;
      if (x > 0 && x < dur) {
        const d = amt * (1 - x / dur);
        sx += d * Math.sin(x * 83);
        sy += d * Math.cos(x * 61);
      }
    }
    const { W, H } = FRAME();
    sc.cam.setAttribute("transform", `translate(${W / 2 + sx} ${H / 2 + sy}) rotate(${r}) scale(${z}) translate(${-W / 2 - cx} ${-H / 2 - cy})`);
    // Shots: only the current one shows.
    if (sc.shots.length) {
      // The latest shot that has started shows; every other group is hidden (a shot may come back later).
      let cur = sc.shots[0].el;
      for (const sh of sc.shots) if (t >= sh.t) cur = sh.el;
      for (const el of new Set(sc.shots.map((sh) => sh.el))) el.style.display = el === cur ? "" : "none";
    }
    // Actors.
    for (const [w, rec] of sc.actors) {
      const st = { x: 0, y: 0, scale: 1, sx: 1, sy: 1, rot: 0, skew: 0, opacity: 1, origin: "center" };
      for (const f of rec.fns) f(t, st);
      if (t < rec.hiddenUntil) st.opacity = 0;
      w.g.style.opacity = st.opacity.toFixed(4);
      w.g.style.transformOrigin = ORIGIN[st.origin] || st.origin;
      w.g.style.transform = `translate(${st.x.toFixed(2)}px, ${st.y.toFixed(2)}px) rotate(${st.rot.toFixed(3)}deg)${st.skew ? ` skewY(${st.skew.toFixed(3)}deg)` : ""} scale(${(st.scale * st.sx).toFixed(4)}, ${(st.scale * st.sy).toFixed(4)})`;
    }
    for (const rig of sc.rigs) rig(t);
    renderPhysics(sc, t);
    renderBlinks(sc, t);
    // Boil: swap between three slightly different wobbles a few times a second.
    if (sc.boil.length) {
      const k = Math.floor(t * (S.kit.boil.fps || 8)) % 3;
      for (const el of sc.boil) el.setAttribute("filter", `url(#vs-boil-${k})`);
    }
    if (sc.update) {
      // A mistake in one scene's own code must not break the frame: skip that part and note it for checks.
      try {
        // The third argument finds elements by the names the scene file used (ids are renamed when a video is built).
        sc.update(t, sc.section, (sel) => find(sc.section, sel, sc.section.id));
      } catch (e) {
        (sc.errors ??= new Set()).add(`update(): ${String(e && e.message)}`);
      }
    }
  }

  // Transitions: the incoming scene is revealed over [at - d, at]; the outgoing one keeps playing under it.
  const TRANSITIONS = {
    cut: () => ({}),
    fade: (k) => ({ inStyle: { opacity: k } }),
    iris: (k, o) => ({ inStyle: { clipPath: `circle(${(ease("inOut", k) * 120).toFixed(2)}% at ${o.x ?? 50}% ${o.y ?? 50}%)` } }),
    wipe: (k, o) => ({ inStyle: { clipPath: o.from === "right" ? `inset(0 0 0 ${(100 - 100 * ease("inOut", k)).toFixed(2)}%)` : `inset(0 ${(100 - 100 * ease("inOut", k)).toFixed(2)}% 0 0)` } }),
    push: (k) => ({ inStyle: { transform: `translateX(${(100 - 100 * ease("inOut", k)).toFixed(2)}%)` }, outStyle: { transform: `translateX(${(-100 * ease("inOut", k)).toFixed(2)}%)` } }),
    zoom: (k) => ({ inStyle: { opacity: ease("out", k), transform: `scale(${(0.92 + 0.08 * ease("out", k)).toFixed(4)})` }, outStyle: { transform: `scale(${(1 + 0.25 * ease("in", k)).toFixed(4)})`, opacity: 1 - ease("in", k) } }),
    scroll: (k) => ({ inStyle: { transform: `translateY(${(100 - 100 * ease("inOut", k)).toFixed(2)}%)` }, outStyle: { transform: `translateY(${(-100 * ease("inOut", k)).toFixed(2)}%)` } }),
    flash: (k) => ({ inStyle: { opacity: ease("out", k), filter: `brightness(${(1 + 4 * Math.pow(1 - k, 2)).toFixed(3)})` }, outStyle: { filter: `brightness(${(1 + 4 * Math.pow(k, 2)).toFixed(3)})` } }),
    blur: (k) => ({ inStyle: { opacity: ease("out", k), filter: `blur(${(16 * (1 - k)).toFixed(2)}px)` }, outStyle: { opacity: 1 - ease("in", k), filter: `blur(${(16 * k).toFixed(2)}px)` } }),
    paper: (k) => ({ inStyle: { transform: `translate(${(110 - 110 * ease("out", k)).toFixed(2)}%, ${(8 - 8 * ease("out", k)).toFixed(2)}%) rotate(${(6 - 6 * ease("out", k)).toFixed(3)}deg)`, filter: "drop-shadow(0 12px 24px rgba(0,0,0,.25))" } }),
  };
  S.transitions = TRANSITIONS;

  function setStyle(el, st) {
    el.style.opacity = st.opacity ?? "";
    el.style.clipPath = st.clipPath ?? "";
    el.style.transform = st.transform ?? "";
    el.style.filter = st.filter ?? "";
  }

  let built = false;
  function buildAll() {
    built = true;
    defs();
    // Sections whose script never registered them (a syntax error in their scene block) still get a slot.
    const known = new Set(scenes.map((sc) => sc.section));
    for (const section of document.querySelectorAll("section.vs-scene")) if (!known.has(section)) scenes.push({ section, def: {}, broken: "the scene's script didn't run (a syntax error in its scene block?)" });
    for (const sc of scenes) {
      if (sc.broken) {
        (sc.errors ??= new Set()).add(sc.broken);
        sc.at = Number(sc.section.dataset.at || 0);
        sc.dur = Number(sc.section.dataset.dur || 5);
        sc.tin = "cut";
        sc.tinDur = 0;
        continue;
      }
      try {
        build(sc);
      } catch (e) {
        // One bad scene can't stop the others: it shows as drawn, without motion, and is reported.
        sc.broken = String((e && e.message) || e);
        (sc.errors ??= new Set()).add(sc.broken);
        sc.at = Number(sc.section.dataset.at || 0);
        sc.dur = Number(sc.section.dataset.dur || 5);
        sc.tin = sc.tin && TRANSITIONS[sc.tin] ? sc.tin : "cut";
        sc.tinDur = sc.tinDur || 0;
      }
    }
    scenes.sort((a, b) => a.at - b.at);
  }
  S.render = function (T) {
    if (!built) buildAll();
    for (let i = 0; i < scenes.length; i++) {
      const sc = scenes[i];
      const next = scenes[i + 1];
      const end = sc.at + sc.dur;
      const start = sc.at - sc.tinDur;
      const on = T >= start && T < end + (next ? 0 : 1e9);
      sc.section.style.display = on ? "" : "none";
      if (!on) continue;
      if (!sc.broken) {
        try {
          renderScene(sc, T - sc.at);
        } catch (e) {
          (sc.errors ??= new Set()).add(String((e && e.message) || e));
        }
      }
      let style = {};
      if (T < sc.at && sc.tinDur > 0) style = TRANSITIONS[sc.tin]((T - start) / sc.tinDur, sc.inOpts || {}).inStyle || {};
      if (next && next.tinDur > 0 && T >= next.at - next.tinDur && T < next.at) {
        style = TRANSITIONS[next.tin]((T - (next.at - next.tinDur)) / next.tinDur, next.inOpts || {}).outStyle || style;
      }
      setStyle(sc.section, style);
      sc.section.style.zIndex = String(i);
    }
    S.now = T;
    // Clips live at the end of the page (the render needs that); each is laid over its placeholder box in its scene:
    // same place and size (camera and moves included), same fades, hidden when its scene is. Outside the final
    // render (the writer's look, the checks) the clip is also moved to the frame for this moment.
    for (const v of document.querySelectorAll("video[data-for]")) {
      const ph = document.querySelector(`[data-clip="${v.dataset.for}"]`);
      const sec = ph && ph.closest(".vs-scene");
      let op = 1;
      for (let p = ph; p && p !== sec; p = p.parentElement) op *= p.style?.display === "none" ? 0 : Number(p.style?.opacity || getComputedStyle(p).opacity || 1);
      op *= sec ? Number(sec.style.opacity || 1) : 0;
      const t0 = Number(v.dataset.start), t1 = t0 + Number(v.dataset.duration || 0);
      const on = !!sec && sec.style.display !== "none" && T >= t0 && T < t1 && op > 0.01;
      v.style.display = on ? "" : "none";
      if (!on) continue;
      const r = ph.getBoundingClientRect();
      Object.assign(v.style, { left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px`, opacity: String(op), zIndex: sec.style.zIndex || "0", borderRadius: `${Number(v.dataset.radius || 0) * (r.width / (Number(ph.getAttribute("width")) || r.width))}px` });
      const at = T - t0 + Number(v.dataset.mediaStart || 0);
      if (Math.abs((v.currentTime || 0) - at) > 0.02) try { v.currentTime = at; } catch {}
    }
    // The app's fixed frame (header, tag) sits above every scene; its slots take the current scene's words.
    const frame = document.getElementById("vs-frame");
    if (frame) {
      let cur = null;
      for (const sc of scenes) if (T >= sc.at - (sc.tinDur || 0)) cur = sc;
      // A scene with data-frame="off" (an outro, a title card) shows no header.
      frame.style.display = cur?.section.dataset.frame === "off" ? "none" : "";
      for (const slot of frame.querySelectorAll("[data-slot]")) {
        const v = cur?.section.dataset[slot.dataset.slot] ?? slot.dataset.default ?? "";
        if (slot.textContent !== v) slot.textContent = v;
        fitPill(slot);
      }
    }
  };

  /** A slot centred on a pill (a rect behind it, e.g. the series tag) widens the pill to fit longer words, never
   * narrower than drawn. The pill grows away from the nearer frame edge, so a top-right tag keeps its right margin;
   * a pill centred in the frame grows evenly both ways. */
  function fitPill(slot) {
    if (slot.getAttribute("text-anchor") !== "middle") return;
    const pill = [...(slot.parentNode?.children ?? [])].find((el) => {
      if (el.tagName !== "rect") return false;
      const x = Number(el.getAttribute("x")), w = Number(el.getAttribute("width"));
      return Math.abs(x + w / 2 - Number(slot.getAttribute("x"))) < 2;
    });
    if (!pill) return;
    pill.dataset.x ??= pill.getAttribute("x");
    pill.dataset.w ??= pill.getAttribute("width");
    slot.dataset.x ??= slot.getAttribute("x");
    const x0 = Number(pill.dataset.x), w0 = Number(pill.dataset.w);
    let tw = 0;
    try { tw = slot.getComputedTextLength(); } catch {}
    const pad = Math.max(24, Number(pill.getAttribute("height")) * 0.45 || 0);
    const w = Math.max(w0, tw + 2 * pad);
    const mid = x0 + w0 / 2, half = FRAME().W / 2;
    const x = Math.abs(mid - half) < 4 ? mid - w / 2 : mid > half ? x0 + w0 - w : x0;
    pill.setAttribute("x", String(x));
    pill.setAttribute("width", String(w));
    slot.setAttribute("x", String(x + w / 2));
  }

  /**
   * The clock the page's timeline tweens. The page registers it itself (HyperFrames checks for that):
   *   const tl = gsap.timeline({ paused: true });
   *   tl.to(S.clock(), { t: 8, duration: 8, ease: "none" }, 0);
   *   window.__timelines = window.__timelines || {}; window.__timelines["main"] = tl; S.start();
   */
  S.clock = function () {
    let T = 0;
    return {
      t(v) {
        if (v === undefined) return T;
        T = v;
        S.render(T);
      },
    };
  };
  /** First frame, or for checks: ?t=2.5,7,11.2 renders those moments and writes an audit of problems into the page. */
  S.start = function () {
    const q = new URLSearchParams(location.search);
    const times = q.has("t") ? q.get("t").split(",").map(Number).filter(Number.isFinite) : [0];
    // Fonts arrive after the first draw; draw the last moment again then, so marks measured on the
    // fallback font (a highlight, an underline) move onto the real words.
    document.fonts?.ready.then(() => S.render(times[times.length - 1] ?? 0));
    if (!q.has("t")) return S.render(0);
    const issues = [];
    for (const t of times) {
      try {
        S.render(t);
        for (const i of S.audit()) issues.push({ ...i, t });
      } catch (e) {
        issues.push({ kind: "error", message: String(e && e.message), t });
      }
    }
    S.report(issues);
  };

  // ------------------------------------------------------------------ audit (for the automatic checks)
  S.report = function (issues) {
    let pre = document.getElementById("vs-audit");
    if (!pre) {
      pre = document.createElement("pre");
      pre.id = "vs-audit";
      pre.style.display = "none";
      document.body.appendChild(pre);
    }
    pre.textContent = JSON.stringify(issues);
  };
  /** Problems in the scenes on screen now (plus every scene's build problems, whenever it's seen). */
  S.audit = function () {
    const { W: FW, H: FH } = FRAME();
    const issues = [];
    for (let i = 0; i < scenes.length; i++) {
      const sc = scenes[i];
      const next = scenes[i + 1];
      if (sc.section.style.display === "none") continue;
      const id = sc.section.id;
      for (const m of sc.errors || []) issues.push({ kind: "error", scene: id, message: m });
      for (const m of sc.warnings || []) issues.push({ kind: "misuse", scene: id, message: m });
      // Mid-transition, a scene is arriving under its entrance or leaving under the next one's: what's measured
      // there (covered text, half-wiped panels) isn't its layout, so only its build problems count.
      const arriving = sc.tinDur > 0 && S.now < sc.at;
      const leaving = next && next.tinDur > 0 && S.now >= next.at - next.tinDur && S.now < next.at;
      if (arriving || leaving) continue;
      const texts = [...sc.section.querySelectorAll("text")].filter((el) => el.textContent.trim() && Number(getComputedStyle(el).opacity) > 0.05);
      const boxes = [];
      for (const el of texts) {
        const r = el.getBoundingClientRect();
        let hidden = false;
        for (let p = el; p && p !== sc.section; p = p.parentElement) if (Number(p.style?.opacity || 1) < 0.05 || p.style?.display === "none") hidden = true;
        if (hidden || !r.width) continue;
        if (r.left < -2 || r.top < -2 || r.right > FW + 2 || r.bottom > FH + 2) issues.push({ kind: "text-off-frame", scene: id, text: el.textContent.slice(0, 40) });
        boxes.push({ r, el, text: el.textContent.slice(0, 40) });
      }
      for (let i = 0; i < boxes.length; i++)
        for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i].r, b = boxes[j].r;
          const ov = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)) * Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
          if (ov > 0.15 * Math.min(a.width * a.height, b.width * b.height)) issues.push({ kind: "text-overlap", scene: id, text: `${boxes[i].text} / ${boxes[j].text}` });
        }
      const bad = [...sc.section.querySelectorAll("[transform]")].filter((el) => /NaN|Infinity/.test(el.getAttribute("transform")));
      if (bad.length) issues.push({ kind: "bad-transform", scene: id, count: bad.length });
      // Information for the writer's own look (never enforced): text too close in colour to what's behind it, and an empty start.
      const low = [];
      for (const b of boxes) {
        const c = contrastAt(b.el);
        if (c !== null && c < 3) low.push(`${b.text} (${c.toFixed(1)}:1)`);
      }
      if (low.length) issues.push({ kind: "low-contrast", scene: id, text: low.slice(0, 3).join(" / "), message: "text too close in colour to what's behind it" });
      // An empty start: the voice has begun, the scene shows nothing but its background.
      const local = S.now - sc.at;
      if (local >= 0 && local <= 0.6) {
        const shown = [...sc.section.querySelectorAll("text, path, rect, circle, ellipse, polygon, line, polyline, image")].filter((el) => {
          if (el.tagName === "rect" && Number(el.getAttribute("width")) >= FW) return false;
          const r = el.getBoundingClientRect();
          if (!r.width || !r.height) return false;
          for (let p = el; p && p !== sc.section; p = p.parentElement) if (Number(p.style?.opacity || 1) < 0.05 || p.style?.display === "none") return false;
          return Number(getComputedStyle(el).opacity) > 0.05;
        });
        if (!shown.length) issues.push({ kind: "empty-start", scene: id, message: `nothing on screen at ${local.toFixed(1)} s: the first thing should land within about 0.4 s of the scene's start` });
      }
      // Cards, panels and pictures (not full-frame backgrounds) cut by the frame edge while they're settled, e.g.
      // after a camera zoom. Entrances and exits early or late in a scene are left alone.
      const visible = (el) => {
        for (let p = el; p && p !== sc.section; p = p.parentElement) if (Number(p.style?.opacity || 1) < 0.05 || p.style?.display === "none") return false;
        return Number(getComputedStyle(el).opacity) > 0.05;
      };
      const panels = [...sc.section.querySelectorAll("rect, image, foreignObject")].filter((el) => {
        const w = Number(el.getAttribute("width")) || 0, h = Number(el.getAttribute("height")) || 0;
        return w >= 160 && h >= 100 && w < FW - 120 && h < FH - 80 && visible(el);
      });
      if (local >= 0.35 * sc.dur && local <= sc.dur - 0.3)
        for (const el of panels) {
          const r = el.getBoundingClientRect();
          if (!r.width || r.width >= FW - 40) continue;
          const cut = Math.max(-r.left, -r.top, r.right - FW, r.bottom - FH);
          if (cut > 24) {
            issues.push({ kind: "off-frame", scene: id, message: `a ${el.tagName === "rect" ? "card or panel" : el.tagName === "image" ? "picture" : "clip"}${el.id ? ` (#${el.id})` : ""} runs ${Math.round(cut)} px past the frame edge at ${local.toFixed(1)} s (check the camera zoom and the layout)` });
            break;
          }
        }
      // A drawing's face (data-faces: boxes in the 1920×1080 frame the picture fills) pushed out of the frame by the
      // camera, while the scene is settled.
      if (local >= 0.35 * sc.dur && local <= sc.dur - 0.3)
        for (const el of sc.section.querySelectorAll("image[data-faces]")) {
          if (!visible(el)) continue;
          const m = el.getScreenCTM();
          if (!m) continue;
          const ix = Number(el.getAttribute("x")) || 0, iy = Number(el.getAttribute("y")) || 0, k = (Number(el.getAttribute("width")) || FW) / FW;
          const svg = el.ownerSVGElement?.getBoundingClientRect() ?? { left: 0, top: 0, width: FW };
          const s = FW / (svg.width || FW);
          for (const f of el.getAttribute("data-faces").split(";").map((b) => b.split(",").map(Number))) {
            // The whole head: the face box grown upward for the hair and a little to the sides.
            const pt = (x, y) => new DOMPoint(ix + x * k, iy + y * k).matrixTransform(m);
            const a = pt(f[0] - 0.1 * f[2], f[1] - 0.5 * f[3]), b = pt(f[0] + 1.1 * f[2], f[1] + f[3]);
            const l = (Math.min(a.x, b.x) - svg.left) * s, r = (Math.max(a.x, b.x) - svg.left) * s, t = (Math.min(a.y, b.y) - svg.top) * s, btm = (Math.max(a.y, b.y) - svg.top) * s;
            const cut = Math.max(-l, -t, r - FW, btm - FH);
            if (cut > 0.12 * Math.min(r - l, btm - t)) {
              issues.push({ kind: "face-cropped", scene: id, message: `a head in the drawing is cut by the frame edge at ${local.toFixed(1)} s (${Math.round(cut)} px out): aim the camera so the whole head, hair included, stays inside with a margin` });
              break;
            }
          }
        }
      // Information only: a card that has been on screen for a while but is still mostly empty (its items arrive late).
      if (local >= 1.5)
        for (const el of panels) {
          // Outlines and dashed placeholders ("?" slots waiting on purpose) aren't cards.
          if (el.tagName !== "rect" || el.getAttribute("stroke-dasharray") || /^(none|transparent)$/.test(el.getAttribute("fill") || "") || Number(el.getAttribute("fill-opacity") ?? 1) < 0.5) continue;
          const r = el.getBoundingClientRect();
          if (r.width * r.height < 150000) continue;
          // What a card holds: words, pictures, clips, and shapes drawn on it (bars, icons, chips), not the card itself.
          const inside = [...sc.section.querySelectorAll("text, image, use, foreignObject, rect, circle, ellipse, path, polygon")].filter((x) => {
            if (x === el || !visible(x)) return false;
            const q = x.getBoundingClientRect();
            const cx = q.left + q.width / 2, cy = q.top + q.height / 2;
            return q.width && cx > r.left && cx < r.right && cy > r.top && cy < r.bottom && q.width * q.height < r.width * r.height * 0.9;
          });
          const filled = inside.reduce((a, x) => { const q = x.getBoundingClientRect(); return a + q.width * q.height; }, 0) / (r.width * r.height);
          if (filled < 0.06) {
            issues.push({ kind: "mostly-empty", scene: id, message: `a card${el.id ? ` (#${el.id})` : ""} is mostly empty at ${local.toFixed(1)} s: bring its items in sooner, or size it for what it holds now` });
            break;
          }
        }
    }
    return issues;
  };
  /** Contrast ratio between a text's colour and the first opaque thing behind its centre (null if unknown). */
  function contrastAt(el) {
    try {
      const r = el.getBoundingClientRect();
      const fg = rgbOf(getComputedStyle(el).fill);
      const stack = document.elementsFromPoint(r.left + r.width / 2, r.top + r.height / 2);
      let bg = null;
      for (const e of stack) {
        if (e === el || e.contains(el) || el.contains(e)) continue;
        if (e.tagName === "tspan" || e.tagName === "text") continue;
        const cs = getComputedStyle(e);
        if (e instanceof SVGElement && !(e instanceof SVGSVGElement)) {
          const fill = cs.fill;
          if (!fill || fill === "none" || Number(cs.fillOpacity) < 0.6 || Number(cs.opacity) < 0.6) continue;
          bg = rgbOf(fill);
          break;
        }
        const bc = cs.backgroundColor;
        if (bc && !/rgba\(0, 0, 0, 0\)|transparent/.test(bc)) { bg = rgbOf(bc); break; }
      }
      if (!bg) return null;
      const lum = (c) => { const [R, G, B] = (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map((v) => { v = Number(v) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * R + 0.7152 * G + 0.0722 * B; };
      const a = lum(fg), b = lum(bg);
      return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    } catch {
      return null;
    }
  }
  // A script error outside any scene (e.g. while the page loads) is still reported to the checks.
  window.addEventListener("error", (e) => {
    const pre = document.getElementById("vs-audit");
    const prior = pre ? JSON.parse(pre.textContent || "[]") : [];
    S.report([...prior, { kind: "error", message: e.message }]);
  });
})();
