import { P as Ze, c as Je } from "./index.01827639.js";
var y = typeof window < "u" ? window : null,
  de = y === null,
  mt = de ? void 0 : y.document,
  N = "addEventListener",
  O = "removeEventListener",
  Gt = "getBoundingClientRect",
  _t = "_a",
  w = "_b",
  P = "_c",
  Nt = "horizontal",
  D = function () {
    return !1;
  },
  Ws = de
    ? "calc"
    : ["", "-webkit-", "-moz-", "-o-"]
        .filter(function (s) {
          var t = mt.createElement("div");
          return (
            (t.style.cssText = "width:" + s + "calc(9px)"), !!t.style.length
          );
        })
        .shift() + "calc",
  ts = function (s) {
    return typeof s == "string" || s instanceof String;
  },
  Se = function (s) {
    if (ts(s)) {
      var t = mt.querySelector(s);
      if (!t) throw new Error("Selector " + s + " did not match a DOM element");
      return t;
    }
    return s;
  },
  E = function (s, t, e) {
    var n = s[t];
    return n !== void 0 ? n : e;
  },
  Ot = function (s, t, e, n) {
    if (t) {
      if (n === "end") return 0;
      if (n === "center") return s / 2;
    } else if (e) {
      if (n === "start") return 0;
      if (n === "center") return s / 2;
    }
    return s;
  },
  Fs = function (s, t) {
    var e = mt.createElement("div");
    return (e.className = "gutter gutter-" + t), e;
  },
  Ys = function (s, t, e) {
    var n = {};
    return ts(t) ? (n[s] = t) : (n[s] = Ws + "(" + t + "% - " + e + "px)"), n;
  },
  Bs = function (s, t) {
    var e;
    return (e = {}), (e[s] = t + "px"), e;
  },
  Us = function (s, t) {
    if ((t === void 0 && (t = {}), de)) return {};
    var e = s,
      n,
      i,
      l,
      a,
      d,
      f;
    Array.from && (e = Array.from(e));
    var A = Se(e[0]),
      p = A.parentNode,
      b = getComputedStyle ? getComputedStyle(p) : null,
      T = b ? b.flexDirection : null,
      R =
        E(t, "sizes") ||
        e.map(function () {
          return 100 / e.length;
        }),
      ut = E(t, "minSize", 100),
      I = Array.isArray(ut)
        ? ut
        : e.map(function () {
            return ut;
          }),
      Yt = E(t, "maxSize", 1 / 0),
      Ls = Array.isArray(Yt)
        ? Yt
        : e.map(function () {
            return Yt;
          }),
      $s = E(t, "expandToMin", !1),
      ht = E(t, "gutterSize", 10),
      vt = E(t, "gutterAlign", "center"),
      Bt = E(t, "snapOffset", 30),
      Is = Array.isArray(Bt)
        ? Bt
        : e.map(function () {
            return Bt;
          }),
      Ut = E(t, "dragInterval", 1),
      J = E(t, "direction", Nt),
      jt = E(t, "cursor", J === Nt ? "col-resize" : "row-resize"),
      Ms = E(t, "gutter", Fs),
      Ee = E(t, "elementStyle", Ys),
      Rs = E(t, "gutterStyle", Bs);
    J === Nt
      ? ((n = "width"),
        (i = "clientX"),
        (l = "left"),
        (a = "right"),
        (d = "clientWidth"))
      : J === "vertical" &&
        ((n = "height"),
        (i = "clientY"),
        (l = "top"),
        (a = "bottom"),
        (d = "clientHeight"));
    function dt(u, o, c, h) {
      var g = Ee(n, o, c, h);
      Object.keys(g).forEach(function (m) {
        u.style[m] = g[m];
      });
    }
    function Ps(u, o, c) {
      var h = Rs(n, o, c);
      Object.keys(h).forEach(function (g) {
        u.style[g] = h[g];
      });
    }
    function yt() {
      return f.map(function (u) {
        return u.size;
      });
    }
    function Ae(u) {
      return "touches" in u ? u.touches[0][i] : u[i];
    }
    function be(u) {
      var o = f[this.a],
        c = f[this.b],
        h = o.size + c.size;
      (o.size = (u / this.size) * h),
        (c.size = h - (u / this.size) * h),
        dt(o.element, o.size, this[w], o.i),
        dt(c.element, c.size, this[P], c.i);
    }
    function ks(u) {
      var o,
        c = f[this.a],
        h = f[this.b];
      !this.dragging ||
        ((o = Ae(u) - this.start + (this[w] - this.dragOffset)),
        Ut > 1 && (o = Math.round(o / Ut) * Ut),
        o <= c.minSize + c.snapOffset + this[w]
          ? (o = c.minSize + this[w])
          : o >= this.size - (h.minSize + h.snapOffset + this[P]) &&
            (o = this.size - (h.minSize + this[P])),
        o >= c.maxSize - c.snapOffset + this[w]
          ? (o = c.maxSize + this[w])
          : o <= this.size - (h.maxSize - h.snapOffset + this[P]) &&
            (o = this.size - (h.maxSize + this[P])),
        be.call(this, o),
        E(t, "onDrag", D)(yt()));
    }
    function Te() {
      var u = f[this.a].element,
        o = f[this.b].element,
        c = u[Gt](),
        h = o[Gt]();
      (this.size = c[n] + h[n] + this[w] + this[P]),
        (this.start = c[l]),
        (this.end = c[a]);
    }
    function Vs(u) {
      if (!getComputedStyle) return null;
      var o = getComputedStyle(u);
      if (!o) return null;
      var c = u[d];
      return c === 0
        ? null
        : (J === Nt
            ? (c -= parseFloat(o.paddingLeft) + parseFloat(o.paddingRight))
            : (c -= parseFloat(o.paddingTop) + parseFloat(o.paddingBottom)),
          c);
    }
    function ve(u) {
      var o = Vs(p);
      if (
        o === null ||
        I.reduce(function (m, v) {
          return m + v;
        }, 0) > o
      )
        return u;
      var c = 0,
        h = [],
        g = u.map(function (m, v) {
          var G = (o * m) / 100,
            St = Ot(ht, v === 0, v === u.length - 1, vt),
            Ct = I[v] + St;
          return G < Ct ? ((c += Ct - G), h.push(0), Ct) : (h.push(G - Ct), G);
        });
      return c === 0
        ? u
        : g.map(function (m, v) {
            var G = m;
            if (c > 0 && h[v] - c > 0) {
              var St = Math.min(c, h[v] - c);
              (c -= St), (G = m - St);
            }
            return (G / o) * 100;
          });
    }
    function xs() {
      var u = this,
        o = f[u.a].element,
        c = f[u.b].element;
      u.dragging && E(t, "onDragEnd", D)(yt()),
        (u.dragging = !1),
        y[O]("mouseup", u.stop),
        y[O]("touchend", u.stop),
        y[O]("touchcancel", u.stop),
        y[O]("mousemove", u.move),
        y[O]("touchmove", u.move),
        (u.stop = null),
        (u.move = null),
        o[O]("selectstart", D),
        o[O]("dragstart", D),
        c[O]("selectstart", D),
        c[O]("dragstart", D),
        (o.style.userSelect = ""),
        (o.style.webkitUserSelect = ""),
        (o.style.MozUserSelect = ""),
        (o.style.pointerEvents = ""),
        (c.style.userSelect = ""),
        (c.style.webkitUserSelect = ""),
        (c.style.MozUserSelect = ""),
        (c.style.pointerEvents = ""),
        (u.gutter.style.cursor = ""),
        (u.parent.style.cursor = ""),
        (mt.body.style.cursor = "");
    }
    function Hs(u) {
      if (!("button" in u && u.button !== 0)) {
        var o = this,
          c = f[o.a].element,
          h = f[o.b].element;
        o.dragging || E(t, "onDragStart", D)(yt()),
          u.preventDefault(),
          (o.dragging = !0),
          (o.move = ks.bind(o)),
          (o.stop = xs.bind(o)),
          y[N]("mouseup", o.stop),
          y[N]("touchend", o.stop),
          y[N]("touchcancel", o.stop),
          y[N]("mousemove", o.move),
          y[N]("touchmove", o.move),
          c[N]("selectstart", D),
          c[N]("dragstart", D),
          h[N]("selectstart", D),
          h[N]("dragstart", D),
          (c.style.userSelect = "none"),
          (c.style.webkitUserSelect = "none"),
          (c.style.MozUserSelect = "none"),
          (c.style.pointerEvents = "none"),
          (h.style.userSelect = "none"),
          (h.style.webkitUserSelect = "none"),
          (h.style.MozUserSelect = "none"),
          (h.style.pointerEvents = "none"),
          (o.gutter.style.cursor = jt),
          (o.parent.style.cursor = jt),
          (mt.body.style.cursor = jt),
          Te.call(o),
          (o.dragOffset = Ae(u) - o.end);
      }
    }
    R = ve(R);
    var j = [];
    f = e.map(function (u, o) {
      var c = {
          element: Se(u),
          size: R[o],
          minSize: I[o],
          maxSize: Ls[o],
          snapOffset: Is[o],
          i: o,
        },
        h;
      if (
        o > 0 &&
        ((h = { a: o - 1, b: o, dragging: !1, direction: J, parent: p }),
        (h[w] = Ot(ht, o - 1 === 0, !1, vt)),
        (h[P] = Ot(ht, !1, o === e.length - 1, vt)),
        T === "row-reverse" || T === "column-reverse")
      ) {
        var g = h.a;
        (h.a = h.b), (h.b = g);
      }
      if (o > 0) {
        var m = Ms(o, J, c.element);
        Ps(m, ht, o),
          (h[_t] = Hs.bind(h)),
          m[N]("mousedown", h[_t]),
          m[N]("touchstart", h[_t]),
          p.insertBefore(m, c.element),
          (h.gutter = m);
      }
      return (
        dt(c.element, c.size, Ot(ht, o === 0, o === e.length - 1, vt), o),
        o > 0 && j.push(h),
        c
      );
    });
    function ye(u) {
      var o = u.i === j.length,
        c = o ? j[u.i - 1] : j[u.i];
      Te.call(c);
      var h = o ? c.size - u.minSize - c[P] : u.minSize + c[w];
      be.call(c, h);
    }
    f.forEach(function (u) {
      var o = u.element[Gt]()[n];
      o < u.minSize && ($s ? ye(u) : (u.minSize = o));
    });
    function zs(u) {
      var o = ve(u);
      o.forEach(function (c, h) {
        if (h > 0) {
          var g = j[h - 1],
            m = f[g.a],
            v = f[g.b];
          (m.size = o[h - 1]),
            (v.size = c),
            dt(m.element, m.size, g[w], m.i),
            dt(v.element, v.size, g[P], v.i);
        }
      });
    }
    function Ks(u, o) {
      j.forEach(function (c) {
        if (
          (o !== !0
            ? c.parent.removeChild(c.gutter)
            : (c.gutter[O]("mousedown", c[_t]),
              c.gutter[O]("touchstart", c[_t])),
          u !== !0)
        ) {
          var h = Ee(n, c.a.size, c[w]);
          Object.keys(h).forEach(function (g) {
            (f[c.a].element.style[g] = ""), (f[c.b].element.style[g] = "");
          });
        }
      });
    }
    return {
      setSizes: zs,
      getSizes: yt,
      collapse: function (o) {
        ye(f[o]);
      },
      destroy: Ks,
      parent: p,
      pairs: j,
    };
  };
/*!
 * Bootstrap v5.2.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const js = 1e6,
  Gs = 1e3,
  le = "transitionend",
  qs = (s) =>
    s == null
      ? `${s}`
      : Object.prototype.toString
          .call(s)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  Xs = (s) => {
    do s += Math.floor(Math.random() * js);
    while (document.getElementById(s));
    return s;
  },
  es = (s) => {
    let t = s.getAttribute("data-bs-target");
    if (!t || t === "#") {
      let e = s.getAttribute("href");
      if (!e || (!e.includes("#") && !e.startsWith("."))) return null;
      e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`),
        (t = e && e !== "#" ? e.trim() : null);
    }
    return t;
  },
  ss = (s) => {
    const t = es(s);
    return t && document.querySelector(t) ? t : null;
  },
  V = (s) => {
    const t = es(s);
    return t ? document.querySelector(t) : null;
  },
  Qs = (s) => {
    if (!s) return 0;
    let { transitionDuration: t, transitionDelay: e } =
      window.getComputedStyle(s);
    const n = Number.parseFloat(t),
      i = Number.parseFloat(e);
    return !n && !i
      ? 0
      : ((t = t.split(",")[0]),
        (e = e.split(",")[0]),
        (Number.parseFloat(t) + Number.parseFloat(e)) * Gs);
  },
  ns = (s) => {
    s.dispatchEvent(new Event(le));
  },
  x = (s) =>
    !s || typeof s != "object"
      ? !1
      : (typeof s.jquery < "u" && (s = s[0]), typeof s.nodeType < "u"),
  W = (s) =>
    x(s)
      ? s.jquery
        ? s[0]
        : s
      : typeof s == "string" && s.length > 0
      ? document.querySelector(s)
      : null,
  at = (s) => {
    if (!x(s) || s.getClientRects().length === 0) return !1;
    const t = getComputedStyle(s).getPropertyValue("visibility") === "visible",
      e = s.closest("details:not([open])");
    if (!e) return t;
    if (e !== s) {
      const n = s.closest("summary");
      if ((n && n.parentNode !== e) || n === null) return !1;
    }
    return t;
  },
  F = (s) =>
    !s || s.nodeType !== Node.ELEMENT_NODE || s.classList.contains("disabled")
      ? !0
      : typeof s.disabled < "u"
      ? s.disabled
      : s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false",
  is = (s) => {
    if (!document.documentElement.attachShadow) return null;
    if (typeof s.getRootNode == "function") {
      const t = s.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    }
    return s instanceof ShadowRoot ? s : s.parentNode ? is(s.parentNode) : null;
  },
  kt = () => {},
  Et = (s) => {
    s.offsetHeight;
  },
  rs = () =>
    window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
  qt = [],
  Zs = (s) => {
    document.readyState === "loading"
      ? (qt.length ||
          document.addEventListener("DOMContentLoaded", () => {
            for (const t of qt) t();
          }),
        qt.push(s))
      : s();
  },
  S = () => document.documentElement.dir === "rtl",
  C = (s) => {
    Zs(() => {
      const t = rs();
      if (t) {
        const e = s.NAME,
          n = t.fn[e];
        (t.fn[e] = s.jQueryInterface),
          (t.fn[e].Constructor = s),
          (t.fn[e].noConflict = () => ((t.fn[e] = n), s.jQueryInterface));
      }
    });
  },
  k = (s) => {
    typeof s == "function" && s();
  },
  os = (s, t, e = !0) => {
    if (!e) {
      k(s);
      return;
    }
    const n = 5,
      i = Qs(t) + n;
    let l = !1;
    const a = ({ target: d }) => {
      d === t && ((l = !0), t.removeEventListener(le, a), k(s));
    };
    t.addEventListener(le, a),
      setTimeout(() => {
        l || ns(t);
      }, i);
  },
  _e = (s, t, e, n) => {
    const i = s.length;
    let l = s.indexOf(t);
    return l === -1
      ? !e && n
        ? s[i - 1]
        : s[0]
      : ((l += e ? 1 : -1),
        n && (l = (l + i) % i),
        s[Math.max(0, Math.min(l, i - 1))]);
  },
  Js = /[^.]*(?=\..*)\.|.*/,
  tn = /\..*/,
  en = /::\d+$/,
  Xt = {};
let Ce = 1;
const as = { mouseenter: "mouseover", mouseleave: "mouseout" },
  sn = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll",
  ]);
function ls(s, t) {
  return (t && `${t}::${Ce++}`) || s.uidEvent || Ce++;
}
function cs(s) {
  const t = ls(s);
  return (s.uidEvent = t), (Xt[t] = Xt[t] || {}), Xt[t];
}
function nn(s, t) {
  return function e(n) {
    return (
      fe(n, { delegateTarget: s }),
      e.oneOff && r.off(s, n.type, t),
      t.apply(s, [n])
    );
  };
}
function rn(s, t, e) {
  return function n(i) {
    const l = s.querySelectorAll(t);
    for (let { target: a } = i; a && a !== this; a = a.parentNode)
      for (const d of l)
        if (d === a)
          return (
            fe(i, { delegateTarget: a }),
            n.oneOff && r.off(s, i.type, t, e),
            e.apply(a, [i])
          );
  };
}
function us(s, t, e = null) {
  return Object.values(s).find(
    (n) => n.callable === t && n.delegationSelector === e
  );
}
function hs(s, t, e) {
  const n = typeof t == "string",
    i = n ? e : t || e;
  let l = ds(s);
  return sn.has(l) || (l = s), [n, i, l];
}
function Ne(s, t, e, n, i) {
  if (typeof t != "string" || !s) return;
  let [l, a, d] = hs(t, e, n);
  t in as &&
    (a = ((ut) =>
      function (I) {
        if (
          !I.relatedTarget ||
          (I.relatedTarget !== I.delegateTarget &&
            !I.delegateTarget.contains(I.relatedTarget))
        )
          return ut.call(this, I);
      })(a));
  const f = cs(s),
    A = f[d] || (f[d] = {}),
    p = us(A, a, l ? e : null);
  if (p) {
    p.oneOff = p.oneOff && i;
    return;
  }
  const b = ls(a, t.replace(Js, "")),
    T = l ? rn(s, e, a) : nn(s, a);
  (T.delegationSelector = l ? e : null),
    (T.callable = a),
    (T.oneOff = i),
    (T.uidEvent = b),
    (A[b] = T),
    s.addEventListener(d, T, l);
}
function ce(s, t, e, n, i) {
  const l = us(t[e], n, i);
  !l || (s.removeEventListener(e, l, Boolean(i)), delete t[e][l.uidEvent]);
}
function on(s, t, e, n) {
  const i = t[e] || {};
  for (const l of Object.keys(i))
    if (l.includes(n)) {
      const a = i[l];
      ce(s, t, e, a.callable, a.delegationSelector);
    }
}
function ds(s) {
  return (s = s.replace(tn, "")), as[s] || s;
}
const r = {
  on(s, t, e, n) {
    Ne(s, t, e, n, !1);
  },
  one(s, t, e, n) {
    Ne(s, t, e, n, !0);
  },
  off(s, t, e, n) {
    if (typeof t != "string" || !s) return;
    const [i, l, a] = hs(t, e, n),
      d = a !== t,
      f = cs(s),
      A = f[a] || {},
      p = t.startsWith(".");
    if (typeof l < "u") {
      if (!Object.keys(A).length) return;
      ce(s, f, a, l, i ? e : null);
      return;
    }
    if (p) for (const b of Object.keys(f)) on(s, f, b, t.slice(1));
    for (const b of Object.keys(A)) {
      const T = b.replace(en, "");
      if (!d || t.includes(T)) {
        const R = A[b];
        ce(s, f, a, R.callable, R.delegationSelector);
      }
    }
  },
  trigger(s, t, e) {
    if (typeof t != "string" || !s) return null;
    const n = rs(),
      i = ds(t),
      l = t !== i;
    let a = null,
      d = !0,
      f = !0,
      A = !1;
    l &&
      n &&
      ((a = n.Event(t, e)),
      n(s).trigger(a),
      (d = !a.isPropagationStopped()),
      (f = !a.isImmediatePropagationStopped()),
      (A = a.isDefaultPrevented()));
    let p = new Event(t, { bubbles: d, cancelable: !0 });
    return (
      (p = fe(p, e)),
      A && p.preventDefault(),
      f && s.dispatchEvent(p),
      p.defaultPrevented && a && a.preventDefault(),
      p
    );
  },
};
function fe(s, t) {
  for (const [e, n] of Object.entries(t || {}))
    try {
      s[e] = n;
    } catch {
      Object.defineProperty(s, e, {
        configurable: !0,
        get() {
          return n;
        },
      });
    }
  return s;
}
const K = new Map(),
  Qt = {
    set(s, t, e) {
      K.has(s) || K.set(s, new Map());
      const n = K.get(s);
      if (!n.has(t) && n.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
            Array.from(n.keys())[0]
          }.`
        );
        return;
      }
      n.set(t, e);
    },
    get(s, t) {
      return (K.has(s) && K.get(s).get(t)) || null;
    },
    remove(s, t) {
      if (!K.has(s)) return;
      const e = K.get(s);
      e.delete(t), e.size === 0 && K.delete(s);
    },
  };
function Oe(s) {
  if (s === "true") return !0;
  if (s === "false") return !1;
  if (s === Number(s).toString()) return Number(s);
  if (s === "" || s === "null") return null;
  if (typeof s != "string") return s;
  try {
    return JSON.parse(decodeURIComponent(s));
  } catch {
    return s;
  }
}
function Zt(s) {
  return s.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const H = {
  setDataAttribute(s, t, e) {
    s.setAttribute(`data-bs-${Zt(t)}`, e);
  },
  removeDataAttribute(s, t) {
    s.removeAttribute(`data-bs-${Zt(t)}`);
  },
  getDataAttributes(s) {
    if (!s) return {};
    const t = {},
      e = Object.keys(s.dataset).filter(
        (n) => n.startsWith("bs") && !n.startsWith("bsConfig")
      );
    for (const n of e) {
      let i = n.replace(/^bs/, "");
      (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
        (t[i] = Oe(s.dataset[n]));
    }
    return t;
  },
  getDataAttribute(s, t) {
    return Oe(s.getAttribute(`data-bs-${Zt(t)}`));
  },
};
class At {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  _configAfterMerge(t) {
    return t;
  }
  _mergeConfigObj(t, e) {
    const n = x(e) ? H.getDataAttribute(e, "config") : {};
    return {
      ...this.constructor.Default,
      ...(typeof n == "object" ? n : {}),
      ...(x(e) ? H.getDataAttributes(e) : {}),
      ...(typeof t == "object" ? t : {}),
    };
  }
  _typeCheckConfig(t, e = this.constructor.DefaultType) {
    for (const n of Object.keys(e)) {
      const i = e[n],
        l = t[n],
        a = x(l) ? "element" : qs(l);
      if (!new RegExp(i).test(a))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${i}".`
        );
    }
  }
}
const an = "5.2.2";
class L extends At {
  constructor(t, e) {
    super(),
      (t = W(t)),
      t &&
        ((this._element = t),
        (this._config = this._getConfig(e)),
        Qt.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Qt.remove(this._element, this.constructor.DATA_KEY),
      r.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
  }
  _queueCallback(t, e, n = !0) {
    os(t, e, n);
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t, this._element)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  static getInstance(t) {
    return Qt.get(W(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return an;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`;
  }
}
const Ht = (s, t = "hide") => {
    const e = `click.dismiss${s.EVENT_KEY}`,
      n = s.NAME;
    r.on(document, e, `[data-bs-dismiss="${n}"]`, function (i) {
      if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), F(this)))
        return;
      const l = V(this) || this.closest(`.${n}`);
      s.getOrCreateInstance(l)[t]();
    });
  },
  ln = "alert",
  cn = "bs.alert",
  _s = `.${cn}`,
  un = `close${_s}`,
  hn = `closed${_s}`,
  dn = "fade",
  _n = "show";
class zt extends L {
  static get NAME() {
    return ln;
  }
  close() {
    if (r.trigger(this._element, un).defaultPrevented) return;
    this._element.classList.remove(_n);
    const e = this._element.classList.contains(dn);
    this._queueCallback(() => this._destroyElement(), this._element, e);
  }
  _destroyElement() {
    this._element.remove(), r.trigger(this._element, hn), this.dispose();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const e = zt.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
Ht(zt, "close");
C(zt);
const fn = "button",
  pn = "bs.button",
  mn = `.${pn}`,
  gn = ".data-api",
  En = "active",
  we = '[data-bs-toggle="button"]',
  An = `click${mn}${gn}`;
class Kt extends L {
  static get NAME() {
    return fn;
  }
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(En)
    );
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const e = Kt.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
}
r.on(document, An, we, (s) => {
  s.preventDefault();
  const t = s.target.closest(we);
  Kt.getOrCreateInstance(t).toggle();
});
C(Kt);
const _ = {
    find(s, t = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(t, s));
    },
    findOne(s, t = document.documentElement) {
      return Element.prototype.querySelector.call(t, s);
    },
    children(s, t) {
      return [].concat(...s.children).filter((e) => e.matches(t));
    },
    parents(s, t) {
      const e = [];
      let n = s.parentNode.closest(t);
      for (; n; ) e.push(n), (n = n.parentNode.closest(t));
      return e;
    },
    prev(s, t) {
      let e = s.previousElementSibling;
      for (; e; ) {
        if (e.matches(t)) return [e];
        e = e.previousElementSibling;
      }
      return [];
    },
    next(s, t) {
      let e = s.nextElementSibling;
      for (; e; ) {
        if (e.matches(t)) return [e];
        e = e.nextElementSibling;
      }
      return [];
    },
    focusableChildren(s) {
      const t = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]',
      ]
        .map((e) => `${e}:not([tabindex^="-"])`)
        .join(",");
      return this.find(t, s).filter((e) => !F(e) && at(e));
    },
  },
  bn = "swipe",
  lt = ".bs.swipe",
  Tn = `touchstart${lt}`,
  vn = `touchmove${lt}`,
  yn = `touchend${lt}`,
  Sn = `pointerdown${lt}`,
  Cn = `pointerup${lt}`,
  Nn = "touch",
  On = "pen",
  wn = "pointer-event",
  Dn = 40,
  Ln = { endCallback: null, leftCallback: null, rightCallback: null },
  $n = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)",
  };
class Vt extends At {
  constructor(t, e) {
    super(),
      (this._element = t),
      !(!t || !Vt.isSupported()) &&
        ((this._config = this._getConfig(e)),
        (this._deltaX = 0),
        (this._supportPointerEvents = Boolean(window.PointerEvent)),
        this._initEvents());
  }
  static get Default() {
    return Ln;
  }
  static get DefaultType() {
    return $n;
  }
  static get NAME() {
    return bn;
  }
  dispose() {
    r.off(this._element, lt);
  }
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) &&
      (this._deltaX = t.clientX - this._deltaX),
      this._handleSwipe(),
      k(this._config.endCallback);
  }
  _move(t) {
    this._deltaX =
      t.touches && t.touches.length > 1
        ? 0
        : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= Dn) return;
    const e = t / this._deltaX;
    (this._deltaX = 0),
      e && k(e > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents
      ? (r.on(this._element, Sn, (t) => this._start(t)),
        r.on(this._element, Cn, (t) => this._end(t)),
        this._element.classList.add(wn))
      : (r.on(this._element, Tn, (t) => this._start(t)),
        r.on(this._element, vn, (t) => this._move(t)),
        r.on(this._element, yn, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return (
      this._supportPointerEvents &&
      (t.pointerType === On || t.pointerType === Nn)
    );
  }
  static isSupported() {
    return (
      "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    );
  }
}
const In = "carousel",
  Mn = "bs.carousel",
  B = `.${Mn}`,
  fs = ".data-api",
  Rn = "ArrowLeft",
  Pn = "ArrowRight",
  kn = 500,
  ft = "next",
  tt = "prev",
  st = "left",
  Rt = "right",
  Vn = `slide${B}`,
  Jt = `slid${B}`,
  xn = `keydown${B}`,
  Hn = `mouseenter${B}`,
  zn = `mouseleave${B}`,
  Kn = `dragstart${B}`,
  Wn = `load${B}${fs}`,
  Fn = `click${B}${fs}`,
  ps = "carousel",
  wt = "active",
  Yn = "slide",
  Bn = "carousel-item-end",
  Un = "carousel-item-start",
  jn = "carousel-item-next",
  Gn = "carousel-item-prev",
  ms = ".active",
  gs = ".carousel-item",
  qn = ms + gs,
  Xn = ".carousel-item img",
  Qn = ".carousel-indicators",
  Zn = "[data-bs-slide], [data-bs-slide-to]",
  Jn = '[data-bs-ride="carousel"]',
  ti = { [Rn]: Rt, [Pn]: st },
  ei = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0,
  },
  si = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean",
  };
class bt extends L {
  constructor(t, e) {
    super(t, e),
      (this._interval = null),
      (this._activeElement = null),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this._swipeHelper = null),
      (this._indicatorsElement = _.findOne(Qn, this._element)),
      this._addEventListeners(),
      this._config.ride === ps && this.cycle();
  }
  static get Default() {
    return ei;
  }
  static get DefaultType() {
    return si;
  }
  static get NAME() {
    return In;
  }
  next() {
    this._slide(ft);
  }
  nextWhenVisible() {
    !document.hidden && at(this._element) && this.next();
  }
  prev() {
    this._slide(tt);
  }
  pause() {
    this._isSliding && ns(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(),
      this._updateInterval(),
      (this._interval = setInterval(
        () => this.nextWhenVisible(),
        this._config.interval
      ));
  }
  _maybeEnableCycle() {
    if (!!this._config.ride) {
      if (this._isSliding) {
        r.one(this._element, Jt, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const e = this._getItems();
    if (t > e.length - 1 || t < 0) return;
    if (this._isSliding) {
      r.one(this._element, Jt, () => this.to(t));
      return;
    }
    const n = this._getItemIndex(this._getActive());
    if (n === t) return;
    const i = t > n ? ft : tt;
    this._slide(i, e[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(t) {
    return (t.defaultInterval = t.interval), t;
  }
  _addEventListeners() {
    this._config.keyboard && r.on(this._element, xn, (t) => this._keydown(t)),
      this._config.pause === "hover" &&
        (r.on(this._element, Hn, () => this.pause()),
        r.on(this._element, zn, () => this._maybeEnableCycle())),
      this._config.touch && Vt.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const n of _.find(Xn, this._element))
      r.on(n, Kn, (i) => i.preventDefault());
    const e = {
      leftCallback: () => this._slide(this._directionToOrder(st)),
      rightCallback: () => this._slide(this._directionToOrder(Rt)),
      endCallback: () => {
        this._config.pause === "hover" &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            kn + this._config.interval
          )));
      },
    };
    this._swipeHelper = new Vt(this._element, e);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName)) return;
    const e = ti[t.key];
    e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement) return;
    const e = _.findOne(ms, this._indicatorsElement);
    e.classList.remove(wt), e.removeAttribute("aria-current");
    const n = _.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    n && (n.classList.add(wt), n.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive();
    if (!t) return;
    const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    this._config.interval = e || this._config.defaultInterval;
  }
  _slide(t, e = null) {
    if (this._isSliding) return;
    const n = this._getActive(),
      i = t === ft,
      l = e || _e(this._getItems(), n, i, this._config.wrap);
    if (l === n) return;
    const a = this._getItemIndex(l),
      d = (R) =>
        r.trigger(this._element, R, {
          relatedTarget: l,
          direction: this._orderToDirection(t),
          from: this._getItemIndex(n),
          to: a,
        });
    if (d(Vn).defaultPrevented || !n || !l) return;
    const A = Boolean(this._interval);
    this.pause(),
      (this._isSliding = !0),
      this._setActiveIndicatorElement(a),
      (this._activeElement = l);
    const p = i ? Un : Bn,
      b = i ? jn : Gn;
    l.classList.add(b), Et(l), n.classList.add(p), l.classList.add(p);
    const T = () => {
      l.classList.remove(p, b),
        l.classList.add(wt),
        n.classList.remove(wt, b, p),
        (this._isSliding = !1),
        d(Jt);
    };
    this._queueCallback(T, n, this._isAnimated()), A && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(Yn);
  }
  _getActive() {
    return _.findOne(qn, this._element);
  }
  _getItems() {
    return _.find(gs, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), (this._interval = null));
  }
  _directionToOrder(t) {
    return S() ? (t === st ? tt : ft) : t === st ? ft : tt;
  }
  _orderToDirection(t) {
    return S() ? (t === tt ? st : Rt) : t === tt ? Rt : st;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const e = bt.getOrCreateInstance(this, t);
      if (typeof t == "number") {
        e.to(t);
        return;
      }
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
r.on(document, Fn, Zn, function (s) {
  const t = V(this);
  if (!t || !t.classList.contains(ps)) return;
  s.preventDefault();
  const e = bt.getOrCreateInstance(t),
    n = this.getAttribute("data-bs-slide-to");
  if (n) {
    e.to(n), e._maybeEnableCycle();
    return;
  }
  if (H.getDataAttribute(this, "slide") === "next") {
    e.next(), e._maybeEnableCycle();
    return;
  }
  e.prev(), e._maybeEnableCycle();
});
r.on(window, Wn, () => {
  const s = _.find(Jn);
  for (const t of s) bt.getOrCreateInstance(t);
});
C(bt);
const ni = "collapse",
  ii = "bs.collapse",
  Tt = `.${ii}`,
  ri = ".data-api",
  oi = `show${Tt}`,
  ai = `shown${Tt}`,
  li = `hide${Tt}`,
  ci = `hidden${Tt}`,
  ui = `click${Tt}${ri}`,
  te = "show",
  it = "collapse",
  Dt = "collapsing",
  hi = "collapsed",
  di = `:scope .${it} .${it}`,
  _i = "collapse-horizontal",
  fi = "width",
  pi = "height",
  mi = ".collapse.show, .collapse.collapsing",
  ue = '[data-bs-toggle="collapse"]',
  gi = { parent: null, toggle: !0 },
  Ei = { parent: "(null|element)", toggle: "boolean" };
class gt extends L {
  constructor(t, e) {
    super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
    const n = _.find(ue);
    for (const i of n) {
      const l = ss(i),
        a = _.find(l).filter((d) => d === this._element);
      l !== null && a.length && this._triggerArray.push(i);
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle();
  }
  static get Default() {
    return gi;
  }
  static get DefaultType() {
    return Ei;
  }
  static get NAME() {
    return ni;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown()) return;
    let t = [];
    if (
      (this._config.parent &&
        (t = this._getFirstLevelChildren(mi)
          .filter((d) => d !== this._element)
          .map((d) => gt.getOrCreateInstance(d, { toggle: !1 }))),
      (t.length && t[0]._isTransitioning) ||
        r.trigger(this._element, oi).defaultPrevented)
    )
      return;
    for (const d of t) d.hide();
    const n = this._getDimension();
    this._element.classList.remove(it),
      this._element.classList.add(Dt),
      (this._element.style[n] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0);
    const i = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(Dt),
          this._element.classList.add(it, te),
          (this._element.style[n] = ""),
          r.trigger(this._element, ai);
      },
      a = `scroll${n[0].toUpperCase() + n.slice(1)}`;
    this._queueCallback(i, this._element, !0),
      (this._element.style[n] = `${this._element[a]}px`);
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      r.trigger(this._element, li).defaultPrevented
    )
      return;
    const e = this._getDimension();
    (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`),
      Et(this._element),
      this._element.classList.add(Dt),
      this._element.classList.remove(it, te);
    for (const i of this._triggerArray) {
      const l = V(i);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const n = () => {
      (this._isTransitioning = !1),
        this._element.classList.remove(Dt),
        this._element.classList.add(it),
        r.trigger(this._element, ci);
    };
    (this._element.style[e] = ""), this._queueCallback(n, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(te);
  }
  _configAfterMerge(t) {
    return (t.toggle = Boolean(t.toggle)), (t.parent = W(t.parent)), t;
  }
  _getDimension() {
    return this._element.classList.contains(_i) ? fi : pi;
  }
  _initializeChildren() {
    if (!this._config.parent) return;
    const t = this._getFirstLevelChildren(ue);
    for (const e of t) {
      const n = V(e);
      n && this._addAriaAndCollapsedClass([e], this._isShown(n));
    }
  }
  _getFirstLevelChildren(t) {
    const e = _.find(di, this._config.parent);
    return _.find(t, this._config.parent).filter((n) => !e.includes(n));
  }
  _addAriaAndCollapsedClass(t, e) {
    if (!!t.length)
      for (const n of t)
        n.classList.toggle(hi, !e), n.setAttribute("aria-expanded", e);
  }
  static jQueryInterface(t) {
    const e = {};
    return (
      typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1),
      this.each(function () {
        const n = gt.getOrCreateInstance(this, e);
        if (typeof t == "string") {
          if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
          n[t]();
        }
      })
    );
  }
}
r.on(document, ui, ue, function (s) {
  (s.target.tagName === "A" ||
    (s.delegateTarget && s.delegateTarget.tagName === "A")) &&
    s.preventDefault();
  const t = ss(this),
    e = _.find(t);
  for (const n of e) gt.getOrCreateInstance(n, { toggle: !1 }).toggle();
});
C(gt);
const De = "dropdown",
  Ai = "bs.dropdown",
  Q = `.${Ai}`,
  pe = ".data-api",
  bi = "Escape",
  Le = "Tab",
  Ti = "ArrowUp",
  $e = "ArrowDown",
  vi = 2,
  yi = `hide${Q}`,
  Si = `hidden${Q}`,
  Ci = `show${Q}`,
  Ni = `shown${Q}`,
  Es = `click${Q}${pe}`,
  As = `keydown${Q}${pe}`,
  Oi = `keyup${Q}${pe}`,
  nt = "show",
  wi = "dropup",
  Di = "dropend",
  Li = "dropstart",
  $i = "dropup-center",
  Ii = "dropdown-center",
  q = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  Mi = `${q}.${nt}`,
  Pt = ".dropdown-menu",
  Ri = ".navbar",
  Pi = ".navbar-nav",
  ki = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
  Vi = S() ? "top-end" : "top-start",
  xi = S() ? "top-start" : "top-end",
  Hi = S() ? "bottom-end" : "bottom-start",
  zi = S() ? "bottom-start" : "bottom-end",
  Ki = S() ? "left-start" : "right-start",
  Wi = S() ? "right-start" : "left-start",
  Fi = "top",
  Yi = "bottom",
  Bi = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle",
  },
  Ui = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)",
  };
class M extends L {
  constructor(t, e) {
    super(t, e),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        _.next(this._element, Pt)[0] ||
        _.prev(this._element, Pt)[0] ||
        _.findOne(Pt, this._parent)),
      (this._inNavbar = this._detectNavbar());
  }
  static get Default() {
    return Bi;
  }
  static get DefaultType() {
    return Ui;
  }
  static get NAME() {
    return De;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (F(this._element) || this._isShown()) return;
    const t = { relatedTarget: this._element };
    if (!r.trigger(this._element, Ci, t).defaultPrevented) {
      if (
        (this._createPopper(),
        "ontouchstart" in document.documentElement && !this._parent.closest(Pi))
      )
        for (const n of [].concat(...document.body.children))
          r.on(n, "mouseover", kt);
      this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(nt),
        this._element.classList.add(nt),
        r.trigger(this._element, Ni, t);
    }
  }
  hide() {
    if (F(this._element) || !this._isShown()) return;
    const t = { relatedTarget: this._element };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    (this._inNavbar = this._detectNavbar()),
      this._popper && this._popper.update();
  }
  _completeHide(t) {
    if (!r.trigger(this._element, yi, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const n of [].concat(...document.body.children))
          r.off(n, "mouseover", kt);
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(nt),
        this._element.classList.remove(nt),
        this._element.setAttribute("aria-expanded", "false"),
        H.removeDataAttribute(this._menu, "popper"),
        r.trigger(this._element, Si, t);
    }
  }
  _getConfig(t) {
    if (
      ((t = super._getConfig(t)),
      typeof t.reference == "object" &&
        !x(t.reference) &&
        typeof t.reference.getBoundingClientRect != "function")
    )
      throw new TypeError(
        `${De.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper() {
    if (typeof Ze > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let t = this._element;
    this._config.reference === "parent"
      ? (t = this._parent)
      : x(this._config.reference)
      ? (t = W(this._config.reference))
      : typeof this._config.reference == "object" &&
        (t = this._config.reference);
    const e = this._getPopperConfig();
    this._popper = Je(t, this._menu, e);
  }
  _isShown() {
    return this._menu.classList.contains(nt);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(Di)) return Ki;
    if (t.classList.contains(Li)) return Wi;
    if (t.classList.contains($i)) return Fi;
    if (t.classList.contains(Ii)) return Yi;
    const e =
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() ===
      "end";
    return t.classList.contains(wi) ? (e ? xi : Vi) : e ? zi : Hi;
  }
  _detectNavbar() {
    return this._element.closest(Ri) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((e) => Number.parseInt(e, 10))
      : typeof t == "function"
      ? (e) => t(e, this._element)
      : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        { name: "offset", options: { offset: this._getOffset() } },
      ],
    };
    return (
      (this._inNavbar || this._config.display === "static") &&
        (H.setDataAttribute(this._menu, "popper", "static"),
        (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
      {
        ...t,
        ...(typeof this._config.popperConfig == "function"
          ? this._config.popperConfig(t)
          : this._config.popperConfig),
      }
    );
  }
  _selectMenuItem({ key: t, target: e }) {
    const n = _.find(ki, this._menu).filter((i) => at(i));
    !n.length || _e(n, e, t === $e, !n.includes(e)).focus();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const e = M.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === vi || (t.type === "keyup" && t.key !== Le)) return;
    const e = _.find(Mi);
    for (const n of e) {
      const i = M.getInstance(n);
      if (!i || i._config.autoClose === !1) continue;
      const l = t.composedPath(),
        a = l.includes(i._menu);
      if (
        l.includes(i._element) ||
        (i._config.autoClose === "inside" && !a) ||
        (i._config.autoClose === "outside" && a) ||
        (i._menu.contains(t.target) &&
          ((t.type === "keyup" && t.key === Le) ||
            /input|select|option|textarea|form/i.test(t.target.tagName)))
      )
        continue;
      const d = { relatedTarget: i._element };
      t.type === "click" && (d.clickEvent = t), i._completeHide(d);
    }
  }
  static dataApiKeydownHandler(t) {
    const e = /input|textarea/i.test(t.target.tagName),
      n = t.key === bi,
      i = [Ti, $e].includes(t.key);
    if ((!i && !n) || (e && !n)) return;
    t.preventDefault();
    const l = this.matches(q)
        ? this
        : _.prev(this, q)[0] ||
          _.next(this, q)[0] ||
          _.findOne(q, t.delegateTarget.parentNode),
      a = M.getOrCreateInstance(l);
    if (i) {
      t.stopPropagation(), a.show(), a._selectMenuItem(t);
      return;
    }
    a._isShown() && (t.stopPropagation(), a.hide(), l.focus());
  }
}
r.on(document, As, q, M.dataApiKeydownHandler);
r.on(document, As, Pt, M.dataApiKeydownHandler);
r.on(document, Es, M.clearMenus);
r.on(document, Oi, M.clearMenus);
r.on(document, Es, q, function (s) {
  s.preventDefault(), M.getOrCreateInstance(this).toggle();
});
C(M);
const Ie = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  Me = ".sticky-top",
  Lt = "padding-right",
  Re = "margin-right";
class he {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(),
      this._setElementAttributes(this._element, Lt, (e) => e + t),
      this._setElementAttributes(Ie, Lt, (e) => e + t),
      this._setElementAttributes(Me, Re, (e) => e - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, Lt),
      this._resetElementAttributes(Ie, Lt),
      this._resetElementAttributes(Me, Re);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden");
  }
  _setElementAttributes(t, e, n) {
    const i = this.getWidth(),
      l = (a) => {
        if (a !== this._element && window.innerWidth > a.clientWidth + i)
          return;
        this._saveInitialAttribute(a, e);
        const d = window.getComputedStyle(a).getPropertyValue(e);
        a.style.setProperty(e, `${n(Number.parseFloat(d))}px`);
      };
    this._applyManipulationCallback(t, l);
  }
  _saveInitialAttribute(t, e) {
    const n = t.style.getPropertyValue(e);
    n && H.setDataAttribute(t, e, n);
  }
  _resetElementAttributes(t, e) {
    const n = (i) => {
      const l = H.getDataAttribute(i, e);
      if (l === null) {
        i.style.removeProperty(e);
        return;
      }
      H.removeDataAttribute(i, e), i.style.setProperty(e, l);
    };
    this._applyManipulationCallback(t, n);
  }
  _applyManipulationCallback(t, e) {
    if (x(t)) {
      e(t);
      return;
    }
    for (const n of _.find(t, this._element)) e(n);
  }
}
const bs = "backdrop",
  ji = "fade",
  Pe = "show",
  ke = `mousedown.bs.${bs}`,
  Gi = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body",
  },
  qi = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)",
  };
class Ts extends At {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isAppended = !1),
      (this._element = null);
  }
  static get Default() {
    return Gi;
  }
  static get DefaultType() {
    return qi;
  }
  static get NAME() {
    return bs;
  }
  show(t) {
    if (!this._config.isVisible) {
      k(t);
      return;
    }
    this._append();
    const e = this._getElement();
    this._config.isAnimated && Et(e),
      e.classList.add(Pe),
      this._emulateAnimation(() => {
        k(t);
      });
  }
  hide(t) {
    if (!this._config.isVisible) {
      k(t);
      return;
    }
    this._getElement().classList.remove(Pe),
      this._emulateAnimation(() => {
        this.dispose(), k(t);
      });
  }
  dispose() {
    !this._isAppended ||
      (r.off(this._element, ke),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      (t.className = this._config.className),
        this._config.isAnimated && t.classList.add(ji),
        (this._element = t);
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return (t.rootElement = W(t.rootElement)), t;
  }
  _append() {
    if (this._isAppended) return;
    const t = this._getElement();
    this._config.rootElement.append(t),
      r.on(t, ke, () => {
        k(this._config.clickCallback);
      }),
      (this._isAppended = !0);
  }
  _emulateAnimation(t) {
    os(t, this._getElement(), this._config.isAnimated);
  }
}
const Xi = "focustrap",
  Qi = "bs.focustrap",
  xt = `.${Qi}`,
  Zi = `focusin${xt}`,
  Ji = `keydown.tab${xt}`,
  tr = "Tab",
  er = "forward",
  Ve = "backward",
  sr = { autofocus: !0, trapElement: null },
  nr = { autofocus: "boolean", trapElement: "element" };
class vs extends At {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  static get Default() {
    return sr;
  }
  static get DefaultType() {
    return nr;
  }
  static get NAME() {
    return Xi;
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      r.off(document, xt),
      r.on(document, Zi, (t) => this._handleFocusin(t)),
      r.on(document, Ji, (t) => this._handleKeydown(t)),
      (this._isActive = !0));
  }
  deactivate() {
    !this._isActive || ((this._isActive = !1), r.off(document, xt));
  }
  _handleFocusin(t) {
    const { trapElement: e } = this._config;
    if (t.target === document || t.target === e || e.contains(t.target)) return;
    const n = _.focusableChildren(e);
    n.length === 0
      ? e.focus()
      : this._lastTabNavDirection === Ve
      ? n[n.length - 1].focus()
      : n[0].focus();
  }
  _handleKeydown(t) {
    t.key === tr && (this._lastTabNavDirection = t.shiftKey ? Ve : er);
  }
}
const ir = "modal",
  rr = "bs.modal",
  $ = `.${rr}`,
  or = ".data-api",
  ar = "Escape",
  lr = `hide${$}`,
  cr = `hidePrevented${$}`,
  ys = `hidden${$}`,
  Ss = `show${$}`,
  ur = `shown${$}`,
  hr = `resize${$}`,
  dr = `click.dismiss${$}`,
  _r = `mousedown.dismiss${$}`,
  fr = `keydown.dismiss${$}`,
  pr = `click${$}${or}`,
  xe = "modal-open",
  mr = "fade",
  He = "show",
  ee = "modal-static",
  gr = ".modal.show",
  Er = ".modal-dialog",
  Ar = ".modal-body",
  br = '[data-bs-toggle="modal"]',
  Tr = { backdrop: !0, focus: !0, keyboard: !0 },
  vr = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
class rt extends L {
  constructor(t, e) {
    super(t, e),
      (this._dialog = _.findOne(Er, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new he()),
      this._addEventListeners();
  }
  static get Default() {
    return Tr;
  }
  static get DefaultType() {
    return vr;
  }
  static get NAME() {
    return ir;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown ||
      this._isTransitioning ||
      r.trigger(this._element, Ss, { relatedTarget: t }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(xe),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      r.trigger(this._element, lr).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(He),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated()
      ));
  }
  dispose() {
    for (const t of [window, this._dialog]) r.off(t, $);
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new Ts({
      isVisible: Boolean(this._config.backdrop),
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new vs({ trapElement: this._element });
  }
  _showElement(t) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0);
    const e = _.findOne(Ar, this._dialog);
    e && (e.scrollTop = 0), Et(this._element), this._element.classList.add(He);
    const n = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        r.trigger(this._element, ur, { relatedTarget: t });
    };
    this._queueCallback(n, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    r.on(this._element, fr, (t) => {
      if (t.key === ar) {
        if (this._config.keyboard) {
          t.preventDefault(), this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }),
      r.on(window, hr, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      r.on(this._element, _r, (t) => {
        r.one(this._element, dr, (e) => {
          if (!(this._element !== t.target || this._element !== e.target)) {
            if (this._config.backdrop === "static") {
              this._triggerBackdropTransition();
              return;
            }
            this._config.backdrop && this.hide();
          }
        });
      });
  }
  _hideModal() {
    (this._element.style.display = "none"),
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(xe),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          r.trigger(this._element, ys);
      });
  }
  _isAnimated() {
    return this._element.classList.contains(mr);
  }
  _triggerBackdropTransition() {
    if (r.trigger(this._element, cr).defaultPrevented) return;
    const e =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._element.style.overflowY;
    n === "hidden" ||
      this._element.classList.contains(ee) ||
      (e || (this._element.style.overflowY = "hidden"),
      this._element.classList.add(ee),
      this._queueCallback(() => {
        this._element.classList.remove(ee),
          this._queueCallback(() => {
            this._element.style.overflowY = n;
          }, this._dialog);
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const t =
        this._element.scrollHeight > document.documentElement.clientHeight,
      e = this._scrollBar.getWidth(),
      n = e > 0;
    if (n && !t) {
      const i = S() ? "paddingLeft" : "paddingRight";
      this._element.style[i] = `${e}px`;
    }
    if (!n && t) {
      const i = S() ? "paddingRight" : "paddingLeft";
      this._element.style[i] = `${e}px`;
    }
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = "");
  }
  static jQueryInterface(t, e) {
    return this.each(function () {
      const n = rt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t](e);
      }
    });
  }
}
r.on(document, pr, br, function (s) {
  const t = V(this);
  ["A", "AREA"].includes(this.tagName) && s.preventDefault(),
    r.one(t, Ss, (i) => {
      i.defaultPrevented ||
        r.one(t, ys, () => {
          at(this) && this.focus();
        });
    });
  const e = _.findOne(gr);
  e && rt.getInstance(e).hide(), rt.getOrCreateInstance(t).toggle(this);
});
Ht(rt);
C(rt);
const yr = "offcanvas",
  Sr = "bs.offcanvas",
  z = `.${Sr}`,
  Cs = ".data-api",
  Cr = `load${z}${Cs}`,
  Nr = "Escape",
  ze = "show",
  Ke = "showing",
  We = "hiding",
  Or = "offcanvas-backdrop",
  Ns = ".offcanvas.show",
  wr = `show${z}`,
  Dr = `shown${z}`,
  Lr = `hide${z}`,
  Fe = `hidePrevented${z}`,
  Os = `hidden${z}`,
  $r = `resize${z}`,
  Ir = `click${z}${Cs}`,
  Mr = `keydown.dismiss${z}`,
  Rr = '[data-bs-toggle="offcanvas"]',
  Pr = { backdrop: !0, keyboard: !0, scroll: !1 },
  kr = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
class Y extends L {
  constructor(t, e) {
    super(t, e),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners();
  }
  static get Default() {
    return Pr;
  }
  static get DefaultType() {
    return kr;
  }
  static get NAME() {
    return yr;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (
      this._isShown ||
      r.trigger(this._element, wr, { relatedTarget: t }).defaultPrevented
    )
      return;
    (this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new he().hide(),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      this._element.classList.add(Ke);
    const n = () => {
      (!this._config.scroll || this._config.backdrop) &&
        this._focustrap.activate(),
        this._element.classList.add(ze),
        this._element.classList.remove(Ke),
        r.trigger(this._element, Dr, { relatedTarget: t });
    };
    this._queueCallback(n, this._element, !0);
  }
  hide() {
    if (!this._isShown || r.trigger(this._element, Lr).defaultPrevented) return;
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(We),
      this._backdrop.hide();
    const e = () => {
      this._element.classList.remove(ze, We),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        this._config.scroll || new he().reset(),
        r.trigger(this._element, Os);
    };
    this._queueCallback(e, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const t = () => {
        if (this._config.backdrop === "static") {
          r.trigger(this._element, Fe);
          return;
        }
        this.hide();
      },
      e = Boolean(this._config.backdrop);
    return new Ts({
      className: Or,
      isVisible: e,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: e ? t : null,
    });
  }
  _initializeFocusTrap() {
    return new vs({ trapElement: this._element });
  }
  _addEventListeners() {
    r.on(this._element, Mr, (t) => {
      if (t.key === Nr) {
        if (!this._config.keyboard) {
          r.trigger(this._element, Fe);
          return;
        }
        this.hide();
      }
    });
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const e = Y.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
r.on(document, Ir, Rr, function (s) {
  const t = V(this);
  if ((["A", "AREA"].includes(this.tagName) && s.preventDefault(), F(this)))
    return;
  r.one(t, Os, () => {
    at(this) && this.focus();
  });
  const e = _.findOne(Ns);
  e && e !== t && Y.getInstance(e).hide(),
    Y.getOrCreateInstance(t).toggle(this);
});
r.on(window, Cr, () => {
  for (const s of _.find(Ns)) Y.getOrCreateInstance(s).show();
});
r.on(window, $r, () => {
  for (const s of _.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(s).position !== "fixed" && Y.getOrCreateInstance(s).hide();
});
Ht(Y);
C(Y);
const Vr = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  xr = /^aria-[\w-]*$/i,
  Hr = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
  zr =
    /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
  Kr = (s, t) => {
    const e = s.nodeName.toLowerCase();
    return t.includes(e)
      ? Vr.has(e)
        ? Boolean(Hr.test(s.nodeValue) || zr.test(s.nodeValue))
        : !0
      : t.filter((n) => n instanceof RegExp).some((n) => n.test(e));
  },
  ws = {
    "*": ["class", "dir", "id", "lang", "role", xr],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: [],
  };
function Wr(s, t, e) {
  if (!s.length) return s;
  if (e && typeof e == "function") return e(s);
  const i = new window.DOMParser().parseFromString(s, "text/html"),
    l = [].concat(...i.body.querySelectorAll("*"));
  for (const a of l) {
    const d = a.nodeName.toLowerCase();
    if (!Object.keys(t).includes(d)) {
      a.remove();
      continue;
    }
    const f = [].concat(...a.attributes),
      A = [].concat(t["*"] || [], t[d] || []);
    for (const p of f) Kr(p, A) || a.removeAttribute(p.nodeName);
  }
  return i.body.innerHTML;
}
const Fr = "TemplateFactory",
  Yr = {
    allowList: ws,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>",
  },
  Br = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string",
  },
  Ur = {
    entry: "(string|element|function|null)",
    selector: "(string|element)",
  };
class jr extends At {
  constructor(t) {
    super(), (this._config = this._getConfig(t));
  }
  static get Default() {
    return Yr;
  }
  static get DefaultType() {
    return Br;
  }
  static get NAME() {
    return Fr;
  }
  getContent() {
    return Object.values(this._config.content)
      .map((t) => this._resolvePossibleFunction(t))
      .filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(t) {
    return (
      this._checkContent(t),
      (this._config.content = { ...this._config.content, ...t }),
      this
    );
  }
  toHtml() {
    const t = document.createElement("div");
    t.innerHTML = this._maybeSanitize(this._config.template);
    for (const [i, l] of Object.entries(this._config.content))
      this._setContent(t, l, i);
    const e = t.children[0],
      n = this._resolvePossibleFunction(this._config.extraClass);
    return n && e.classList.add(...n.split(" ")), e;
  }
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [e, n] of Object.entries(t))
      super._typeCheckConfig({ selector: e, entry: n }, Ur);
  }
  _setContent(t, e, n) {
    const i = _.findOne(n, t);
    if (!!i) {
      if (((e = this._resolvePossibleFunction(e)), !e)) {
        i.remove();
        return;
      }
      if (x(e)) {
        this._putElementInTemplate(W(e), i);
        return;
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(e);
        return;
      }
      i.textContent = e;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize
      ? Wr(t, this._config.allowList, this._config.sanitizeFn)
      : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t(this) : t;
  }
  _putElementInTemplate(t, e) {
    if (this._config.html) {
      (e.innerHTML = ""), e.append(t);
      return;
    }
    e.textContent = t.textContent;
  }
}
const Gr = "tooltip",
  qr = new Set(["sanitize", "allowList", "sanitizeFn"]),
  se = "fade",
  Xr = "modal",
  $t = "show",
  Qr = ".tooltip-inner",
  Ye = `.${Xr}`,
  Be = "hide.bs.modal",
  pt = "hover",
  ne = "focus",
  Zr = "click",
  Jr = "manual",
  to = "hide",
  eo = "hidden",
  so = "show",
  no = "shown",
  io = "inserted",
  ro = "click",
  oo = "focusin",
  ao = "focusout",
  lo = "mouseenter",
  co = "mouseleave",
  uo = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: S() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: S() ? "right" : "left",
  },
  ho = {
    allowList: ws,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 0],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus",
  },
  _o = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
  };
class ct extends L {
  constructor(t, e) {
    if (typeof Ze > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      );
    super(t, e),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._isHovered = null),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._templateFactory = null),
      (this._newContent = null),
      (this.tip = null),
      this._setListeners(),
      this._config.selector || this._fixTitle();
  }
  static get Default() {
    return ho;
  }
  static get DefaultType() {
    return _o;
  }
  static get NAME() {
    return Gr;
  }
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (!!this._isEnabled) {
      if (
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown())
      ) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout),
      r.off(this._element.closest(Ye), Be, this._hideModalHandler),
      this.tip && this.tip.remove(),
      this._element.getAttribute("data-bs-original-title") &&
        this._element.setAttribute(
          "title",
          this._element.getAttribute("data-bs-original-title")
        ),
      this._disposePopper(),
      super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled)) return;
    const t = r.trigger(this._element, this.constructor.eventName(so)),
      n = (
        is(this._element) || this._element.ownerDocument.documentElement
      ).contains(this._element);
    if (t.defaultPrevented || !n) return;
    this.tip && (this.tip.remove(), (this.tip = null));
    const i = this._getTipElement();
    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
    const { container: l } = this._config;
    if (
      (this._element.ownerDocument.documentElement.contains(this.tip) ||
        (l.append(i), r.trigger(this._element, this.constructor.eventName(io))),
      this._popper
        ? this._popper.update()
        : (this._popper = this._createPopper(i)),
      i.classList.add($t),
      "ontouchstart" in document.documentElement)
    )
      for (const d of [].concat(...document.body.children))
        r.on(d, "mouseover", kt);
    const a = () => {
      r.trigger(this._element, this.constructor.eventName(no)),
        this._isHovered === !1 && this._leave(),
        (this._isHovered = !1);
    };
    this._queueCallback(a, this.tip, this._isAnimated());
  }
  hide() {
    if (
      !this._isShown() ||
      r.trigger(this._element, this.constructor.eventName(to)).defaultPrevented
    )
      return;
    const e = this._getTipElement();
    if ((e.classList.remove($t), "ontouchstart" in document.documentElement))
      for (const i of [].concat(...document.body.children))
        r.off(i, "mouseover", kt);
    (this._activeTrigger[Zr] = !1),
      (this._activeTrigger[ne] = !1),
      (this._activeTrigger[pt] = !1),
      (this._isHovered = null);
    const n = () => {
      this._isWithActiveTrigger() ||
        (this._isHovered || e.remove(),
        this._element.removeAttribute("aria-describedby"),
        r.trigger(this._element, this.constructor.eventName(eo)),
        this._disposePopper());
    };
    this._queueCallback(n, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  _isWithContent() {
    return Boolean(this._getTitle());
  }
  _getTipElement() {
    return (
      this.tip ||
        (this.tip = this._createTipElement(
          this._newContent || this._getContentForTemplate()
        )),
      this.tip
    );
  }
  _createTipElement(t) {
    const e = this._getTemplateFactory(t).toHtml();
    if (!e) return null;
    e.classList.remove(se, $t),
      e.classList.add(`bs-${this.constructor.NAME}-auto`);
    const n = Xs(this.constructor.NAME).toString();
    return (
      e.setAttribute("id", n), this._isAnimated() && e.classList.add(se), e
    );
  }
  setContent(t) {
    (this._newContent = t),
      this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return (
      this._templateFactory
        ? this._templateFactory.changeContent(t)
        : (this._templateFactory = new jr({
            ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass),
          })),
      this._templateFactory
    );
  }
  _getContentForTemplate() {
    return { [Qr]: this._getTitle() };
  }
  _getTitle() {
    return (
      this._resolvePossibleFunction(this._config.title) ||
      this._element.getAttribute("data-bs-original-title")
    );
  }
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig()
    );
  }
  _isAnimated() {
    return (
      this._config.animation || (this.tip && this.tip.classList.contains(se))
    );
  }
  _isShown() {
    return this.tip && this.tip.classList.contains($t);
  }
  _createPopper(t) {
    const e =
        typeof this._config.placement == "function"
          ? this._config.placement.call(this, t, this._element)
          : this._config.placement,
      n = uo[e.toUpperCase()];
    return Je(this._element, t, this._getPopperConfig(n));
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((e) => Number.parseInt(e, 10))
      : typeof t == "function"
      ? (e) => t(e, this._element)
      : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t.call(this._element) : t;
  }
  _getPopperConfig(t) {
    const e = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: { fallbackPlacements: this._config.fallbackPlacements },
        },
        { name: "offset", options: { offset: this._getOffset() } },
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        {
          name: "arrow",
          options: { element: `.${this.constructor.NAME}-arrow` },
        },
        {
          name: "preSetPlacement",
          enabled: !0,
          phase: "beforeMain",
          fn: (n) => {
            this._getTipElement().setAttribute(
              "data-popper-placement",
              n.state.placement
            );
          },
        },
      ],
    };
    return {
      ...e,
      ...(typeof this._config.popperConfig == "function"
        ? this._config.popperConfig(e)
        : this._config.popperConfig),
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const e of t)
      if (e === "click")
        r.on(
          this._element,
          this.constructor.eventName(ro),
          this._config.selector,
          (n) => {
            this._initializeOnDelegatedTarget(n).toggle();
          }
        );
      else if (e !== Jr) {
        const n =
            e === pt
              ? this.constructor.eventName(lo)
              : this.constructor.eventName(oo),
          i =
            e === pt
              ? this.constructor.eventName(co)
              : this.constructor.eventName(ao);
        r.on(this._element, n, this._config.selector, (l) => {
          const a = this._initializeOnDelegatedTarget(l);
          (a._activeTrigger[l.type === "focusin" ? ne : pt] = !0), a._enter();
        }),
          r.on(this._element, i, this._config.selector, (l) => {
            const a = this._initializeOnDelegatedTarget(l);
            (a._activeTrigger[l.type === "focusout" ? ne : pt] =
              a._element.contains(l.relatedTarget)),
              a._leave();
          });
      }
    (this._hideModalHandler = () => {
      this._element && this.hide();
    }),
      r.on(this._element.closest(Ye), Be, this._hideModalHandler);
  }
  _fixTitle() {
    const t = this._element.getAttribute("title");
    !t ||
      (!this._element.getAttribute("aria-label") &&
        !this._element.textContent.trim() &&
        this._element.setAttribute("aria-label", t),
      this._element.setAttribute("data-bs-original-title", t),
      this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    (this._isHovered = !0),
      this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() ||
      ((this._isHovered = !1),
      this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
  }
  _setTimeout(t, e) {
    clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(t) {
    const e = H.getDataAttributes(this._element);
    for (const n of Object.keys(e)) qr.has(n) && delete e[n];
    return (
      (t = { ...e, ...(typeof t == "object" && t ? t : {}) }),
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  _configAfterMerge(t) {
    return (
      (t.container = t.container === !1 ? document.body : W(t.container)),
      typeof t.delay == "number" &&
        (t.delay = { show: t.delay, hide: t.delay }),
      typeof t.title == "number" && (t.title = t.title.toString()),
      typeof t.content == "number" && (t.content = t.content.toString()),
      t
    );
  }
  _getDelegateConfig() {
    const t = {};
    for (const e in this._config)
      this.constructor.Default[e] !== this._config[e] &&
        (t[e] = this._config[e]);
    return (t.selector = !1), (t.trigger = "manual"), t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null));
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const e = ct.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
C(ct);
const fo = "popover",
  po = ".popover-header",
  mo = ".popover-body",
  go = {
    ...ct.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click",
  },
  Eo = { ...ct.DefaultType, content: "(null|string|element|function)" };
class me extends ct {
  static get Default() {
    return go;
  }
  static get DefaultType() {
    return Eo;
  }
  static get NAME() {
    return fo;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return { [po]: this._getTitle(), [mo]: this._getContent() };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const e = me.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
C(me);
const Ao = "scrollspy",
  bo = "bs.scrollspy",
  ge = `.${bo}`,
  To = ".data-api",
  vo = `activate${ge}`,
  Ue = `click${ge}`,
  yo = `load${ge}${To}`,
  So = "dropdown-item",
  et = "active",
  Co = '[data-bs-spy="scroll"]',
  ie = "[href]",
  No = ".nav, .list-group",
  je = ".nav-link",
  Oo = ".nav-item",
  wo = ".list-group-item",
  Do = `${je}, ${Oo} > ${je}, ${wo}`,
  Lo = ".dropdown",
  $o = ".dropdown-toggle",
  Io = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1],
  },
  Mo = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array",
  };
class Wt extends L {
  constructor(t, e) {
    super(t, e),
      (this._targetLinks = new Map()),
      (this._observableSections = new Map()),
      (this._rootElement =
        getComputedStyle(this._element).overflowY === "visible"
          ? null
          : this._element),
      (this._activeTarget = null),
      (this._observer = null),
      (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
      this.refresh();
  }
  static get Default() {
    return Io;
  }
  static get DefaultType() {
    return Mo;
  }
  static get NAME() {
    return Ao;
  }
  refresh() {
    this._initializeTargetsAndObservables(),
      this._maybeEnableSmoothScroll(),
      this._observer
        ? this._observer.disconnect()
        : (this._observer = this._getNewObserver());
    for (const t of this._observableSections.values())
      this._observer.observe(t);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  _configAfterMerge(t) {
    return (
      (t.target = W(t.target) || document.body),
      (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
      typeof t.threshold == "string" &&
        (t.threshold = t.threshold.split(",").map((e) => Number.parseFloat(e))),
      t
    );
  }
  _maybeEnableSmoothScroll() {
    !this._config.smoothScroll ||
      (r.off(this._config.target, Ue),
      r.on(this._config.target, Ue, ie, (t) => {
        const e = this._observableSections.get(t.target.hash);
        if (e) {
          t.preventDefault();
          const n = this._rootElement || window,
            i = e.offsetTop - this._element.offsetTop;
          if (n.scrollTo) {
            n.scrollTo({ top: i, behavior: "smooth" });
            return;
          }
          n.scrollTop = i;
        }
      }));
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin,
    };
    return new IntersectionObserver((e) => this._observerCallback(e), t);
  }
  _observerCallback(t) {
    const e = (a) => this._targetLinks.get(`#${a.target.id}`),
      n = (a) => {
        (this._previousScrollData.visibleEntryTop = a.target.offsetTop),
          this._process(e(a));
      },
      i = (this._rootElement || document.documentElement).scrollTop,
      l = i >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = i;
    for (const a of t) {
      if (!a.isIntersecting) {
        (this._activeTarget = null), this._clearActiveClass(e(a));
        continue;
      }
      const d = a.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (l && d) {
        if ((n(a), !i)) return;
        continue;
      }
      !l && !d && n(a);
    }
  }
  _initializeTargetsAndObservables() {
    (this._targetLinks = new Map()), (this._observableSections = new Map());
    const t = _.find(ie, this._config.target);
    for (const e of t) {
      if (!e.hash || F(e)) continue;
      const n = _.findOne(e.hash, this._element);
      at(n) &&
        (this._targetLinks.set(e.hash, e),
        this._observableSections.set(e.hash, n));
    }
  }
  _process(t) {
    this._activeTarget !== t &&
      (this._clearActiveClass(this._config.target),
      (this._activeTarget = t),
      t.classList.add(et),
      this._activateParents(t),
      r.trigger(this._element, vo, { relatedTarget: t }));
  }
  _activateParents(t) {
    if (t.classList.contains(So)) {
      _.findOne($o, t.closest(Lo)).classList.add(et);
      return;
    }
    for (const e of _.parents(t, No))
      for (const n of _.prev(e, Do)) n.classList.add(et);
  }
  _clearActiveClass(t) {
    t.classList.remove(et);
    const e = _.find(`${ie}.${et}`, t);
    for (const n of e) n.classList.remove(et);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const e = Wt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
r.on(window, yo, () => {
  for (const s of _.find(Co)) Wt.getOrCreateInstance(s);
});
C(Wt);
const Ro = "tab",
  Po = "bs.tab",
  Z = `.${Po}`,
  ko = `hide${Z}`,
  Vo = `hidden${Z}`,
  xo = `show${Z}`,
  Ho = `shown${Z}`,
  zo = `click${Z}`,
  Ko = `keydown${Z}`,
  Wo = `load${Z}`,
  Fo = "ArrowLeft",
  Ge = "ArrowRight",
  Yo = "ArrowUp",
  qe = "ArrowDown",
  X = "active",
  Xe = "fade",
  re = "show",
  Bo = "dropdown",
  Uo = ".dropdown-toggle",
  jo = ".dropdown-menu",
  oe = ":not(.dropdown-toggle)",
  Go = '.list-group, .nav, [role="tablist"]',
  qo = ".nav-item, .list-group-item",
  Xo = `.nav-link${oe}, .list-group-item${oe}, [role="tab"]${oe}`,
  Ds =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  ae = `${Xo}, ${Ds}`,
  Qo = `.${X}[data-bs-toggle="tab"], .${X}[data-bs-toggle="pill"], .${X}[data-bs-toggle="list"]`;
class ot extends L {
  constructor(t) {
    super(t),
      (this._parent = this._element.closest(Go)),
      this._parent &&
        (this._setInitialAttributes(this._parent, this._getChildren()),
        r.on(this._element, Ko, (e) => this._keydown(e)));
  }
  static get NAME() {
    return Ro;
  }
  show() {
    const t = this._element;
    if (this._elemIsActive(t)) return;
    const e = this._getActiveElem(),
      n = e ? r.trigger(e, ko, { relatedTarget: t }) : null;
    r.trigger(t, xo, { relatedTarget: e }).defaultPrevented ||
      (n && n.defaultPrevented) ||
      (this._deactivate(e, t), this._activate(t, e));
  }
  _activate(t, e) {
    if (!t) return;
    t.classList.add(X), this._activate(V(t));
    const n = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(re);
        return;
      }
      t.removeAttribute("tabindex"),
        t.setAttribute("aria-selected", !0),
        this._toggleDropDown(t, !0),
        r.trigger(t, Ho, { relatedTarget: e });
    };
    this._queueCallback(n, t, t.classList.contains(Xe));
  }
  _deactivate(t, e) {
    if (!t) return;
    t.classList.remove(X), t.blur(), this._deactivate(V(t));
    const n = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(re);
        return;
      }
      t.setAttribute("aria-selected", !1),
        t.setAttribute("tabindex", "-1"),
        this._toggleDropDown(t, !1),
        r.trigger(t, Vo, { relatedTarget: e });
    };
    this._queueCallback(n, t, t.classList.contains(Xe));
  }
  _keydown(t) {
    if (![Fo, Ge, Yo, qe].includes(t.key)) return;
    t.stopPropagation(), t.preventDefault();
    const e = [Ge, qe].includes(t.key),
      n = _e(
        this._getChildren().filter((i) => !F(i)),
        t.target,
        e,
        !0
      );
    n && (n.focus({ preventScroll: !0 }), ot.getOrCreateInstance(n).show());
  }
  _getChildren() {
    return _.find(ae, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, e) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const n of e) this._setInitialAttributesOnChild(n);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const e = this._elemIsActive(t),
      n = this._getOuterElement(t);
    t.setAttribute("aria-selected", e),
      n !== t && this._setAttributeIfNotExists(n, "role", "presentation"),
      e || t.setAttribute("tabindex", "-1"),
      this._setAttributeIfNotExists(t, "role", "tab"),
      this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const e = V(t);
    !e ||
      (this._setAttributeIfNotExists(e, "role", "tabpanel"),
      t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
  }
  _toggleDropDown(t, e) {
    const n = this._getOuterElement(t);
    if (!n.classList.contains(Bo)) return;
    const i = (l, a) => {
      const d = _.findOne(l, n);
      d && d.classList.toggle(a, e);
    };
    i(Uo, X), i(jo, re), n.setAttribute("aria-expanded", e);
  }
  _setAttributeIfNotExists(t, e, n) {
    t.hasAttribute(e) || t.setAttribute(e, n);
  }
  _elemIsActive(t) {
    return t.classList.contains(X);
  }
  _getInnerElement(t) {
    return t.matches(ae) ? t : _.findOne(ae, t);
  }
  _getOuterElement(t) {
    return t.closest(qo) || t;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const e = ot.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
r.on(document, zo, Ds, function (s) {
  ["A", "AREA"].includes(this.tagName) && s.preventDefault(),
    !F(this) && ot.getOrCreateInstance(this).show();
});
r.on(window, Wo, () => {
  for (const s of _.find(Qo)) ot.getOrCreateInstance(s);
});
C(ot);
const Zo = "toast",
  Jo = "bs.toast",
  U = `.${Jo}`,
  ta = `mouseover${U}`,
  ea = `mouseout${U}`,
  sa = `focusin${U}`,
  na = `focusout${U}`,
  ia = `hide${U}`,
  ra = `hidden${U}`,
  oa = `show${U}`,
  aa = `shown${U}`,
  la = "fade",
  Qe = "hide",
  It = "show",
  Mt = "showing",
  ca = { animation: "boolean", autohide: "boolean", delay: "number" },
  ua = { animation: !0, autohide: !0, delay: 5e3 };
class Ft extends L {
  constructor(t, e) {
    super(t, e),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners();
  }
  static get Default() {
    return ua;
  }
  static get DefaultType() {
    return ca;
  }
  static get NAME() {
    return Zo;
  }
  show() {
    if (r.trigger(this._element, oa).defaultPrevented) return;
    this._clearTimeout(),
      this._config.animation && this._element.classList.add(la);
    const e = () => {
      this._element.classList.remove(Mt),
        r.trigger(this._element, aa),
        this._maybeScheduleHide();
    };
    this._element.classList.remove(Qe),
      Et(this._element),
      this._element.classList.add(It, Mt),
      this._queueCallback(e, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || r.trigger(this._element, ia).defaultPrevented)
      return;
    const e = () => {
      this._element.classList.add(Qe),
        this._element.classList.remove(Mt, It),
        r.trigger(this._element, ra);
    };
    this._element.classList.add(Mt),
      this._queueCallback(e, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(),
      this.isShown() && this._element.classList.remove(It),
      super.dispose();
  }
  isShown() {
    return this._element.classList.contains(It);
  }
  _maybeScheduleHide() {
    !this._config.autohide ||
      this._hasMouseInteraction ||
      this._hasKeyboardInteraction ||
      (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay));
  }
  _onInteraction(t, e) {
    switch (t.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = e;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = e;
        break;
      }
    }
    if (e) {
      this._clearTimeout();
      return;
    }
    const n = t.relatedTarget;
    this._element === n ||
      this._element.contains(n) ||
      this._maybeScheduleHide();
  }
  _setListeners() {
    r.on(this._element, ta, (t) => this._onInteraction(t, !0)),
      r.on(this._element, ea, (t) => this._onInteraction(t, !1)),
      r.on(this._element, sa, (t) => this._onInteraction(t, !0)),
      r.on(this._element, na, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), (this._timeout = null);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const e = Ft.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
Ht(Ft);
C(Ft);
Us(["#editor", "#output"], { direction: "vertical", sizes: [75, 25] });
document.querySelector("#playBtn").addEventListener("click", () => {
  const s = codeEditor.getValue(),
    t = document.querySelector("#output--body");
  let e = new FormData();
  const k = document.getElementById("editor-lang").value;
  const i = document.getElementById("project-id").value;
  e.append("type", k);
  e.append("code", s);
  e.append("id", i);

  let n = new XMLHttpRequest();
  n.open("POST", "http://localhost/editor-project/php/server/api/execute.php"),
    n.send(e),
    (n.onload = function () {
      t.innerHTML = JSON.parse(this.responseText).data.replace(
        /(?:\r\n|\r|\n)/g,
        "<br>"
      );
    });
});
