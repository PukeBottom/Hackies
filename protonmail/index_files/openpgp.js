/*! OpenPGP.js v2.6.2 - 2018-01-21 - this is LGPL licensed code, see LICENSE/our website http://openpgpjs.org/ for more information. */
!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).openpgp = e();
  }
})(function () {
  return (function e(t, r, n) {
    function i(a, o) {
      if (!r[a]) {
        if (!t[a]) {
          var u = "function" == typeof require && require;
          if (!o && u) return u(a, !0);
          if (s) return s(a, !0);
          var f = new Error("Cannot find module '" + a + "'");
          throw ((f.code = "MODULE_NOT_FOUND"), f);
        }
        var h = (r[a] = { exports: {} });
        t[a][0].call(
          h.exports,
          function (e) {
            var r = t[a][1][e];
            return i(r || e);
          },
          h,
          h.exports,
          e,
          t,
          r,
          n,
        );
      }
      return r[a].exports;
    }
    for (
      var s = "function" == typeof require && require, a = 0;
      a < n.length;
      a++
    )
      i(n[a]);
    return i;
  })(
    {
      1: [
        function (e, t, r) {
          !(function (e, r) {
            function n() {
              var e = Error.apply(this, arguments);
              (this.message = e.message), (this.stack = e.stack);
            }
            function i() {
              var e = Error.apply(this, arguments);
              (this.message = e.message), (this.stack = e.stack);
            }
            function s() {
              var e = Error.apply(this, arguments);
              (this.message = e.message), (this.stack = e.stack);
            }
            function a(e, t) {
              t = !!t;
              for (
                var r = e.length,
                  n = new Uint8Array(t ? 4 * r : r),
                  i = 0,
                  s = 0;
                i < r;
                i++
              ) {
                var a = e.charCodeAt(i);
                if (t && 55296 <= a && a <= 56319) {
                  if (++i >= r)
                    throw new Error(
                      "Malformed string, low surrogate expected at position " +
                        i,
                    );
                  a = ((55296 ^ a) << 10) | 65536 | (56320 ^ e.charCodeAt(i));
                } else if (!t && a >>> 8)
                  throw new Error("Wide characters are not allowed.");
                !t || a <= 127
                  ? (n[s++] = a)
                  : a <= 2047
                  ? ((n[s++] = 192 | (a >> 6)), (n[s++] = 128 | (63 & a)))
                  : a <= 65535
                  ? ((n[s++] = 224 | (a >> 12)),
                    (n[s++] = 128 | ((a >> 6) & 63)),
                    (n[s++] = 128 | (63 & a)))
                  : ((n[s++] = 240 | (a >> 18)),
                    (n[s++] = 128 | ((a >> 12) & 63)),
                    (n[s++] = 128 | ((a >> 6) & 63)),
                    (n[s++] = 128 | (63 & a)));
              }
              return n.subarray(0, s);
            }
            function o(e) {
              return btoa(
                (function (e, t) {
                  t = !!t;
                  for (
                    var r = e.length, n = new Array(r), i = 0, s = 0;
                    i < r;
                    i++
                  ) {
                    var a = e[i];
                    if (!t || a < 128) n[s++] = a;
                    else if (a >= 192 && a < 224 && i + 1 < r)
                      n[s++] = ((31 & a) << 6) | (63 & e[++i]);
                    else if (a >= 224 && a < 240 && i + 2 < r)
                      n[s++] =
                        ((15 & a) << 12) | ((63 & e[++i]) << 6) | (63 & e[++i]);
                    else {
                      if (!(a >= 240 && a < 248 && i + 3 < r))
                        throw new Error(
                          "Malformed UTF8 character at byte offset " + i,
                        );
                      var o =
                        ((7 & a) << 18) |
                        ((63 & e[++i]) << 12) |
                        ((63 & e[++i]) << 6) |
                        (63 & e[++i]);
                      o <= 65535
                        ? (n[s++] = o)
                        : ((o ^= 65536),
                          (n[s++] = 55296 | (o >> 10)),
                          (n[s++] = 56320 | (1023 & o)));
                    }
                  }
                  for (var u = "", i = 0; i < s; i += 16384)
                    u += String.fromCharCode.apply(
                      String,
                      n.slice(i, i + 16384 <= s ? i + 16384 : s),
                    );
                  return u;
                })(e),
              );
            }
            function u(e) {
              return "number" == typeof e;
            }
            function f(e) {
              return "string" == typeof e;
            }
            function h(e) {
              return e instanceof ArrayBuffer;
            }
            function l(e) {
              return e instanceof Uint8Array;
            }
            function c(e, t) {
              var r = t.heap,
                n = r ? r.byteLength : t.heapSize || 65536;
              if (4095 & n || n <= 0)
                throw new Error(
                  "heap size must be a positive integer and a multiple of 4096",
                );
              return (r = r || new e(new ArrayBuffer(n)));
            }
            function d(e, t, r, n, i) {
              var s = e.length - t,
                a = s < i ? s : i;
              return e.set(r.subarray(n, n + a), t), a;
            }
            function p(e) {
              (e = e || {}),
                (this.heap = c(Uint8Array, e).subarray(D.HEAP_DATA)),
                (this.asm = e.asm || D(r, null, this.heap.buffer)),
                (this.mode = null),
                (this.key = null),
                this.reset(e);
            }
            function y(e) {
              if (void 0 !== e) {
                if (h(e) || l(e)) e = new Uint8Array(e);
                else {
                  if (!f(e)) throw new TypeError("unexpected iv type");
                  e = a(e);
                }
                if (16 !== e.length) throw new i("illegal iv size");
                var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                (this.iv = e),
                  this.asm.set_iv(
                    t.getUint32(0),
                    t.getUint32(4),
                    t.getUint32(8),
                    t.getUint32(12),
                  );
              } else (this.iv = null), this.asm.set_iv(0, 0, 0, 0);
            }
            function g(e) {
              return (
                (e = e || {}),
                (this.result = null),
                (this.pos = 0),
                (this.len = 0),
                function (e) {
                  if (void 0 !== e) {
                    if (h(e) || l(e)) e = new Uint8Array(e);
                    else {
                      if (!f(e)) throw new TypeError("unexpected key type");
                      e = a(e);
                    }
                    var t = e.length;
                    if (16 !== t && 24 !== t && 32 !== t)
                      throw new i("illegal key size");
                    var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
                    this.asm.set_key(
                      t >> 2,
                      r.getUint32(0),
                      r.getUint32(4),
                      r.getUint32(8),
                      r.getUint32(12),
                      t > 16 ? r.getUint32(16) : 0,
                      t > 16 ? r.getUint32(20) : 0,
                      t > 24 ? r.getUint32(24) : 0,
                      t > 24 ? r.getUint32(28) : 0,
                    ),
                      (this.key = e);
                  } else if (!this.key) throw new Error("key is required");
                }.call(this, e.key),
                this.hasOwnProperty("iv") && y.call(this, e.iv),
                this.hasOwnProperty("padding") &&
                  function (e) {
                    this.padding = void 0 === e || !!e;
                  }.call(this, e.padding),
                this
              );
            }
            function m(e) {
              if ((f(e) && (e = a(e)), h(e) && (e = new Uint8Array(e)), !l(e)))
                throw new TypeError("data isn't of expected type");
              for (
                var t = this.asm,
                  r = this.heap,
                  n = D.ENC[this.mode],
                  i = D.HEAP_DATA,
                  s = this.pos,
                  o = this.len,
                  u = 0,
                  c = e.length || 0,
                  p = 0,
                  y = (o + c) & -16,
                  g = 0,
                  m = new Uint8Array(y);
                c > 0;

              )
                (o += g = d(r, s + o, e, u, c)),
                  (u += g),
                  (c -= g),
                  (g = t.cipher(n, i + s, o)) && m.set(r.subarray(s, s + g), p),
                  (p += g),
                  g < o ? ((s += g), (o -= g)) : ((s = 0), (o = 0));
              return (this.result = m), (this.pos = s), (this.len = o), this;
            }
            function v(e) {
              var t = null,
                r = 0;
              void 0 !== e && (r = (t = m.call(this, e).result).length);
              var n = this.asm,
                s = this.heap,
                a = D.ENC[this.mode],
                o = D.HEAP_DATA,
                u = this.pos,
                f = this.len,
                h = 16 - (f % 16),
                l = f;
              if (this.hasOwnProperty("padding")) {
                if (this.padding) {
                  for (var c = 0; c < h; ++c) s[u + f + c] = h;
                  l = f += h;
                } else if (f % 16)
                  throw new i(
                    "data length must be a multiple of the block size",
                  );
              } else f += h;
              var d = new Uint8Array(r + l);
              return (
                r && d.set(t),
                f && n.cipher(a, o + u, f),
                l && d.set(s.subarray(u, u + l), r),
                (this.result = d),
                (this.pos = 0),
                (this.len = 0),
                this
              );
            }
            function w(e) {
              if ((f(e) && (e = a(e)), h(e) && (e = new Uint8Array(e)), !l(e)))
                throw new TypeError("data isn't of expected type");
              var t = this.asm,
                r = this.heap,
                n = D.DEC[this.mode],
                i = D.HEAP_DATA,
                s = this.pos,
                o = this.len,
                u = 0,
                c = e.length || 0,
                p = 0,
                y = (o + c) & -16,
                g = 0,
                m = 0;
              this.hasOwnProperty("padding") &&
                this.padding &&
                (y -= g = o + c - y || 16);
              for (var v = new Uint8Array(y); c > 0; )
                (o += m = d(r, s + o, e, u, c)),
                  (u += m),
                  (c -= m),
                  (m = t.cipher(n, i + s, o - (c ? 0 : g))) &&
                    v.set(r.subarray(s, s + m), p),
                  (p += m),
                  m < o ? ((s += m), (o -= m)) : ((s = 0), (o = 0));
              return (this.result = v), (this.pos = s), (this.len = o), this;
            }
            function b(e) {
              var t = null,
                r = 0;
              void 0 !== e && (r = (t = w.call(this, e).result).length);
              var n = this.asm,
                a = this.heap,
                o = D.DEC[this.mode],
                u = D.HEAP_DATA,
                f = this.pos,
                h = this.len,
                l = h;
              if (h > 0) {
                if (h % 16) {
                  if (this.hasOwnProperty("padding"))
                    throw new i(
                      "data length must be a multiple of the block size",
                    );
                  h += 16 - (h % 16);
                }
                if (
                  (n.cipher(o, u + f, h),
                  this.hasOwnProperty("padding") && this.padding)
                ) {
                  var c = a[f + l - 1];
                  if (c < 1 || c > 16 || c > l) throw new s("bad padding");
                  for (var d = 0, p = c; p > 1; p--) d |= c ^ a[f + l - p];
                  if (d) throw new s("bad padding");
                  l -= c;
                }
              }
              var y = new Uint8Array(r + l);
              return (
                r > 0 && y.set(t),
                l > 0 && y.set(a.subarray(f, f + l), r),
                (this.result = y),
                (this.pos = 0),
                (this.len = 0),
                this
              );
            }
            function k(e) {
              (this.iv = null), p.call(this, e), (this.mode = "CFB");
            }
            function A(e) {
              k.call(this, e);
            }
            function _(e) {
              k.call(this, e);
            }
            function E(e) {
              (this.nonce = null),
                (this.counter = 0),
                (this.counterSize = 0),
                p.call(this, e),
                (this.mode = "CTR");
            }
            function S(e) {
              return (
                (e = e || {}),
                g.call(this, e),
                function (e, t, r) {
                  if (void 0 !== r) {
                    if (r < 8 || r > 48) throw new i("illegal counter size");
                    this.counterSize = r;
                    var n = Math.pow(2, r) - 1;
                    this.asm.set_mask(0, 0, (n / 4294967296) | 0, 0 | n);
                  } else
                    (this.counterSize = r = 48),
                      this.asm.set_mask(0, 0, 65535, 4294967295);
                  if (void 0 === e) throw new Error("nonce is required");
                  if (h(e) || l(e)) e = new Uint8Array(e);
                  else {
                    if (!f(e)) throw new TypeError("unexpected nonce type");
                    e = a(e);
                  }
                  var s = e.length;
                  if (!s || s > 16) throw new i("illegal nonce size");
                  this.nonce = e;
                  var o = new DataView(new ArrayBuffer(16));
                  if (
                    (new Uint8Array(o.buffer).set(e),
                    this.asm.set_nonce(
                      o.getUint32(0),
                      o.getUint32(4),
                      o.getUint32(8),
                      o.getUint32(12),
                    ),
                    void 0 !== t)
                  ) {
                    if (!u(t)) throw new TypeError("unexpected counter type");
                    if (t < 0 || t >= Math.pow(2, r))
                      throw new i("illegal counter value");
                    (this.counter = t),
                      this.asm.set_counter(0, 0, (t / 4294967296) | 0, 0 | t);
                  } else this.counter = t = 0;
                }.call(this, e.nonce, e.counter, e.counterSize),
                this
              );
            }
            function U(e) {
              for (
                var t = this.heap,
                  r = this.asm,
                  n = 0,
                  i = e.length || 0,
                  s = 0;
                i > 0;

              ) {
                for (n += s = d(t, 0, e, n, i), i -= s; 15 & s; ) t[s++] = 0;
                r.mac(D.MAC.GCM, D.HEAP_DATA, s);
              }
            }
            function K(e) {
              (this.nonce = null),
                (this.adata = null),
                (this.iv = null),
                (this.counter = 1),
                (this.tagSize = 16),
                p.call(this, e),
                (this.mode = "GCM");
            }
            function P(e) {
              K.call(this, e);
            }
            function j(e) {
              K.call(this, e);
            }
            function x(e) {
              g.call(this, (e = e || {}));
              var t = this.asm,
                r = this.heap;
              t.gcm_init();
              var n = e.tagSize;
              if (void 0 !== n) {
                if (!u(n)) throw new TypeError("tagSize must be a number");
                if (n < 4 || n > 16) throw new i("illegal tagSize value");
                this.tagSize = n;
              } else this.tagSize = 16;
              var s = e.nonce;
              if (void 0 === s) throw new Error("nonce is required");
              if (l(s) || h(s)) s = new Uint8Array(s);
              else {
                if (!f(s)) throw new TypeError("unexpected nonce type");
                s = a(s);
              }
              this.nonce = s;
              var o = s.length || 0,
                c = new Uint8Array(16);
              12 !== o
                ? (U.call(this, s),
                  (r[0] =
                    r[1] =
                    r[2] =
                    r[3] =
                    r[4] =
                    r[5] =
                    r[6] =
                    r[7] =
                    r[8] =
                    r[9] =
                    r[10] =
                      0),
                  (r[11] = o >>> 29),
                  (r[12] = (o >>> 21) & 255),
                  (r[13] = (o >>> 13) & 255),
                  (r[14] = (o >>> 5) & 255),
                  (r[15] = (o << 3) & 255),
                  t.mac(D.MAC.GCM, D.HEAP_DATA, 16),
                  t.get_iv(D.HEAP_DATA),
                  t.set_iv(),
                  c.set(r.subarray(0, 16)))
                : (c.set(s), (c[15] = 1));
              var d = new DataView(c.buffer);
              (this.gamma0 = d.getUint32(12)),
                t.set_nonce(d.getUint32(0), d.getUint32(4), d.getUint32(8), 0),
                t.set_mask(0, 0, 0, 4294967295);
              var p = e.adata;
              if (void 0 !== p && null !== p) {
                if (l(p) || h(p)) p = new Uint8Array(p);
                else {
                  if (!f(p)) throw new TypeError("unexpected adata type");
                  p = a(p);
                }
                if (p.length > z) throw new i("illegal adata length");
                p.length
                  ? ((this.adata = p), U.call(this, p))
                  : (this.adata = null);
              } else this.adata = null;
              var m = e.counter;
              if (void 0 !== m) {
                if (!u(m)) throw new TypeError("counter must be a number");
                if (m < 1 || m > 4294967295)
                  throw new RangeError(
                    "counter must be a positive 32-bit integer",
                  );
                (this.counter = m),
                  t.set_counter(0, 0, 0, (this.gamma0 + m) | 0);
              } else
                (this.counter = 1),
                  t.set_counter(0, 0, 0, (this.gamma0 + 1) | 0);
              var v = e.iv;
              if (void 0 !== v) {
                if (!u(m)) throw new TypeError("counter must be a number");
                (this.iv = v), y.call(this, v);
              }
              return this;
            }
            function T(e) {
              if ((f(e) && (e = a(e)), h(e) && (e = new Uint8Array(e)), !l(e)))
                throw new TypeError("data isn't of expected type");
              var t = 0,
                r = e.length || 0,
                n = this.asm,
                i = this.heap,
                s = this.counter,
                o = this.pos,
                u = this.len,
                c = 0,
                p = (u + r) & -16,
                y = 0;
              if (((s - 1) << 4) + u + r > z)
                throw new RangeError("counter overflow");
              for (var g = new Uint8Array(p); r > 0; )
                (u += y = d(i, o + u, e, t, r)),
                  (t += y),
                  (r -= y),
                  (y = n.cipher(D.ENC.CTR, D.HEAP_DATA + o, u)),
                  (y = n.mac(D.MAC.GCM, D.HEAP_DATA + o, y)) &&
                    g.set(i.subarray(o, o + y), c),
                  (s += y >>> 4),
                  (c += y),
                  y < u ? ((o += y), (u -= y)) : ((o = 0), (u = 0));
              return (
                (this.result = g),
                (this.counter = s),
                (this.pos = o),
                (this.len = u),
                this
              );
            }
            function O() {
              var e = this.asm,
                t = this.heap,
                r = this.counter,
                n = this.tagSize,
                i = this.adata,
                s = this.pos,
                a = this.len,
                o = new Uint8Array(a + n);
              e.cipher(D.ENC.CTR, D.HEAP_DATA + s, (a + 15) & -16),
                a && o.set(t.subarray(s, s + a));
              for (var u = a; 15 & u; u++) t[s + u] = 0;
              e.mac(D.MAC.GCM, D.HEAP_DATA + s, u);
              var f = null !== i ? i.length : 0,
                h = ((r - 1) << 4) + a;
              return (
                (t[0] = t[1] = t[2] = 0),
                (t[3] = f >>> 29),
                (t[4] = f >>> 21),
                (t[5] = (f >>> 13) & 255),
                (t[6] = (f >>> 5) & 255),
                (t[7] = (f << 3) & 255),
                (t[8] = t[9] = t[10] = 0),
                (t[11] = h >>> 29),
                (t[12] = (h >>> 21) & 255),
                (t[13] = (h >>> 13) & 255),
                (t[14] = (h >>> 5) & 255),
                (t[15] = (h << 3) & 255),
                e.mac(D.MAC.GCM, D.HEAP_DATA, 16),
                e.get_iv(D.HEAP_DATA),
                e.set_counter(0, 0, 0, this.gamma0),
                e.cipher(D.ENC.CTR, D.HEAP_DATA, 16),
                o.set(t.subarray(0, n), a),
                (this.result = o),
                (this.counter = 1),
                (this.pos = 0),
                (this.len = 0),
                this
              );
            }
            function C(e) {
              if ((f(e) && (e = a(e)), h(e) && (e = new Uint8Array(e)), !l(e)))
                throw new TypeError("data isn't of expected type");
              var t = 0,
                r = e.length || 0,
                n = this.asm,
                i = this.heap,
                s = this.counter,
                o = this.tagSize,
                u = this.pos,
                c = this.len,
                p = 0,
                y = c + r > o ? (c + r - o) & -16 : 0,
                g = c + r - y,
                m = 0;
              if (((s - 1) << 4) + c + r > z)
                throw new RangeError("counter overflow");
              for (var v = new Uint8Array(y); r > g; )
                (c += m = d(i, u + c, e, t, r - g)),
                  (t += m),
                  (r -= m),
                  (m = n.mac(D.MAC.GCM, D.HEAP_DATA + u, m)),
                  (m = n.cipher(D.DEC.CTR, D.HEAP_DATA + u, m)) &&
                    v.set(i.subarray(u, u + m), p),
                  (s += m >>> 4),
                  (p += m),
                  (u = 0),
                  (c = 0);
              return (
                r > 0 && (c += d(i, 0, e, t, r)),
                (this.result = v),
                (this.counter = s),
                (this.pos = u),
                (this.len = c),
                this
              );
            }
            function I() {
              var e = this.asm,
                t = this.heap,
                r = this.tagSize,
                i = this.adata,
                a = this.counter,
                o = this.pos,
                u = this.len,
                f = u - r;
              if (u < r) throw new n("authentication tag not found");
              for (
                var h = new Uint8Array(f),
                  l = new Uint8Array(t.subarray(o + f, o + u)),
                  c = f;
                15 & c;
                c++
              )
                t[o + c] = 0;
              e.mac(D.MAC.GCM, D.HEAP_DATA + o, c),
                e.cipher(D.DEC.CTR, D.HEAP_DATA + o, c),
                f && h.set(t.subarray(o, o + f));
              var d = null !== i ? i.length : 0,
                p = ((a - 1) << 4) + u - r;
              (t[0] = t[1] = t[2] = 0),
                (t[3] = d >>> 29),
                (t[4] = d >>> 21),
                (t[5] = (d >>> 13) & 255),
                (t[6] = (d >>> 5) & 255),
                (t[7] = (d << 3) & 255),
                (t[8] = t[9] = t[10] = 0),
                (t[11] = p >>> 29),
                (t[12] = (p >>> 21) & 255),
                (t[13] = (p >>> 13) & 255),
                (t[14] = (p >>> 5) & 255),
                (t[15] = (p << 3) & 255),
                e.mac(D.MAC.GCM, D.HEAP_DATA, 16),
                e.get_iv(D.HEAP_DATA),
                e.set_counter(0, 0, 0, this.gamma0),
                e.cipher(D.ENC.CTR, D.HEAP_DATA, 16);
              for (var y = 0, c = 0; c < r; ++c) y |= l[c] ^ t[c];
              if (y) throw new s("data integrity check failed");
              return (
                (this.result = h),
                (this.counter = 1),
                (this.pos = 0),
                (this.len = 0),
                this
              );
            }
            function M(e) {
              (e = e || {}),
                (this.heap = c(Uint8Array, e)),
                (this.asm =
                  e.asm ||
                  (function (e, t, r) {
                    "use asm";
                    var n = 0,
                      i = 0,
                      s = 0,
                      a = 0,
                      o = 0,
                      u = 0,
                      f = 0,
                      h = 0,
                      l = 0,
                      c = 0,
                      d = 0,
                      p = 0,
                      y = 0,
                      g = 0,
                      m = 0,
                      v = 0,
                      w = 0,
                      b = 0,
                      k = 0,
                      A = 0,
                      _ = 0,
                      E = 0,
                      S = 0,
                      U = 0,
                      K = 0,
                      P = 0,
                      j = new e.Uint8Array(r);
                    function x(e, t, r, l, c, d, p, y, g, m, v, w, b, k, A, _) {
                      e = e | 0;
                      t = t | 0;
                      r = r | 0;
                      l = l | 0;
                      c = c | 0;
                      d = d | 0;
                      p = p | 0;
                      y = y | 0;
                      g = g | 0;
                      m = m | 0;
                      v = v | 0;
                      w = w | 0;
                      b = b | 0;
                      k = k | 0;
                      A = A | 0;
                      _ = _ | 0;
                      var E = 0,
                        S = 0,
                        U = 0,
                        K = 0,
                        P = 0,
                        j = 0,
                        x = 0,
                        T = 0,
                        O = 0;
                      E = n;
                      S = i;
                      U = s;
                      K = a;
                      P = o;
                      j = u;
                      x = f;
                      T = h;
                      O =
                        (e +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x428a2f98) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (t +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x71374491) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (r +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xb5c0fbcf) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (l +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xe9b5dba5) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (c +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x3956c25b) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (d +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x59f111f1) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (p +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x923f82a4) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (y +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xab1c5ed5) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (g +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xd807aa98) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (m +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x12835b01) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (v +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x243185be) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (w +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x550c7dc3) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (b +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x72be5d74) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (k +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x80deb1fe) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (A +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x9bdc06a7) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      O =
                        (_ +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xc19bf174) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      e = O =
                        (((t >>> 7) ^
                          (t >>> 18) ^
                          (t >>> 3) ^
                          (t << 25) ^
                          (t << 14)) +
                          ((A >>> 17) ^
                            (A >>> 19) ^
                            (A >>> 10) ^
                            (A << 15) ^
                            (A << 13)) +
                          e +
                          m) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xe49b69c1) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      t = O =
                        (((r >>> 7) ^
                          (r >>> 18) ^
                          (r >>> 3) ^
                          (r << 25) ^
                          (r << 14)) +
                          ((_ >>> 17) ^
                            (_ >>> 19) ^
                            (_ >>> 10) ^
                            (_ << 15) ^
                            (_ << 13)) +
                          t +
                          v) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xefbe4786) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      r = O =
                        (((l >>> 7) ^
                          (l >>> 18) ^
                          (l >>> 3) ^
                          (l << 25) ^
                          (l << 14)) +
                          ((e >>> 17) ^
                            (e >>> 19) ^
                            (e >>> 10) ^
                            (e << 15) ^
                            (e << 13)) +
                          r +
                          w) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x0fc19dc6) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      l = O =
                        (((c >>> 7) ^
                          (c >>> 18) ^
                          (c >>> 3) ^
                          (c << 25) ^
                          (c << 14)) +
                          ((t >>> 17) ^
                            (t >>> 19) ^
                            (t >>> 10) ^
                            (t << 15) ^
                            (t << 13)) +
                          l +
                          b) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x240ca1cc) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      c = O =
                        (((d >>> 7) ^
                          (d >>> 18) ^
                          (d >>> 3) ^
                          (d << 25) ^
                          (d << 14)) +
                          ((r >>> 17) ^
                            (r >>> 19) ^
                            (r >>> 10) ^
                            (r << 15) ^
                            (r << 13)) +
                          c +
                          k) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x2de92c6f) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      d = O =
                        (((p >>> 7) ^
                          (p >>> 18) ^
                          (p >>> 3) ^
                          (p << 25) ^
                          (p << 14)) +
                          ((l >>> 17) ^
                            (l >>> 19) ^
                            (l >>> 10) ^
                            (l << 15) ^
                            (l << 13)) +
                          d +
                          A) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x4a7484aa) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      p = O =
                        (((y >>> 7) ^
                          (y >>> 18) ^
                          (y >>> 3) ^
                          (y << 25) ^
                          (y << 14)) +
                          ((c >>> 17) ^
                            (c >>> 19) ^
                            (c >>> 10) ^
                            (c << 15) ^
                            (c << 13)) +
                          p +
                          _) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x5cb0a9dc) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      y = O =
                        (((g >>> 7) ^
                          (g >>> 18) ^
                          (g >>> 3) ^
                          (g << 25) ^
                          (g << 14)) +
                          ((d >>> 17) ^
                            (d >>> 19) ^
                            (d >>> 10) ^
                            (d << 15) ^
                            (d << 13)) +
                          y +
                          e) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x76f988da) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      g = O =
                        (((m >>> 7) ^
                          (m >>> 18) ^
                          (m >>> 3) ^
                          (m << 25) ^
                          (m << 14)) +
                          ((p >>> 17) ^
                            (p >>> 19) ^
                            (p >>> 10) ^
                            (p << 15) ^
                            (p << 13)) +
                          g +
                          t) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x983e5152) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      m = O =
                        (((v >>> 7) ^
                          (v >>> 18) ^
                          (v >>> 3) ^
                          (v << 25) ^
                          (v << 14)) +
                          ((y >>> 17) ^
                            (y >>> 19) ^
                            (y >>> 10) ^
                            (y << 15) ^
                            (y << 13)) +
                          m +
                          r) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xa831c66d) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      v = O =
                        (((w >>> 7) ^
                          (w >>> 18) ^
                          (w >>> 3) ^
                          (w << 25) ^
                          (w << 14)) +
                          ((g >>> 17) ^
                            (g >>> 19) ^
                            (g >>> 10) ^
                            (g << 15) ^
                            (g << 13)) +
                          v +
                          l) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xb00327c8) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      w = O =
                        (((b >>> 7) ^
                          (b >>> 18) ^
                          (b >>> 3) ^
                          (b << 25) ^
                          (b << 14)) +
                          ((m >>> 17) ^
                            (m >>> 19) ^
                            (m >>> 10) ^
                            (m << 15) ^
                            (m << 13)) +
                          w +
                          c) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xbf597fc7) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      b = O =
                        (((k >>> 7) ^
                          (k >>> 18) ^
                          (k >>> 3) ^
                          (k << 25) ^
                          (k << 14)) +
                          ((v >>> 17) ^
                            (v >>> 19) ^
                            (v >>> 10) ^
                            (v << 15) ^
                            (v << 13)) +
                          b +
                          d) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xc6e00bf3) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      k = O =
                        (((A >>> 7) ^
                          (A >>> 18) ^
                          (A >>> 3) ^
                          (A << 25) ^
                          (A << 14)) +
                          ((w >>> 17) ^
                            (w >>> 19) ^
                            (w >>> 10) ^
                            (w << 15) ^
                            (w << 13)) +
                          k +
                          p) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xd5a79147) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      A = O =
                        (((_ >>> 7) ^
                          (_ >>> 18) ^
                          (_ >>> 3) ^
                          (_ << 25) ^
                          (_ << 14)) +
                          ((b >>> 17) ^
                            (b >>> 19) ^
                            (b >>> 10) ^
                            (b << 15) ^
                            (b << 13)) +
                          A +
                          y) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x06ca6351) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      _ = O =
                        (((e >>> 7) ^
                          (e >>> 18) ^
                          (e >>> 3) ^
                          (e << 25) ^
                          (e << 14)) +
                          ((k >>> 17) ^
                            (k >>> 19) ^
                            (k >>> 10) ^
                            (k << 15) ^
                            (k << 13)) +
                          _ +
                          g) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x14292967) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      e = O =
                        (((t >>> 7) ^
                          (t >>> 18) ^
                          (t >>> 3) ^
                          (t << 25) ^
                          (t << 14)) +
                          ((A >>> 17) ^
                            (A >>> 19) ^
                            (A >>> 10) ^
                            (A << 15) ^
                            (A << 13)) +
                          e +
                          m) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x27b70a85) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      t = O =
                        (((r >>> 7) ^
                          (r >>> 18) ^
                          (r >>> 3) ^
                          (r << 25) ^
                          (r << 14)) +
                          ((_ >>> 17) ^
                            (_ >>> 19) ^
                            (_ >>> 10) ^
                            (_ << 15) ^
                            (_ << 13)) +
                          t +
                          v) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x2e1b2138) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      r = O =
                        (((l >>> 7) ^
                          (l >>> 18) ^
                          (l >>> 3) ^
                          (l << 25) ^
                          (l << 14)) +
                          ((e >>> 17) ^
                            (e >>> 19) ^
                            (e >>> 10) ^
                            (e << 15) ^
                            (e << 13)) +
                          r +
                          w) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x4d2c6dfc) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      l = O =
                        (((c >>> 7) ^
                          (c >>> 18) ^
                          (c >>> 3) ^
                          (c << 25) ^
                          (c << 14)) +
                          ((t >>> 17) ^
                            (t >>> 19) ^
                            (t >>> 10) ^
                            (t << 15) ^
                            (t << 13)) +
                          l +
                          b) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x53380d13) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      c = O =
                        (((d >>> 7) ^
                          (d >>> 18) ^
                          (d >>> 3) ^
                          (d << 25) ^
                          (d << 14)) +
                          ((r >>> 17) ^
                            (r >>> 19) ^
                            (r >>> 10) ^
                            (r << 15) ^
                            (r << 13)) +
                          c +
                          k) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x650a7354) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      d = O =
                        (((p >>> 7) ^
                          (p >>> 18) ^
                          (p >>> 3) ^
                          (p << 25) ^
                          (p << 14)) +
                          ((l >>> 17) ^
                            (l >>> 19) ^
                            (l >>> 10) ^
                            (l << 15) ^
                            (l << 13)) +
                          d +
                          A) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x766a0abb) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      p = O =
                        (((y >>> 7) ^
                          (y >>> 18) ^
                          (y >>> 3) ^
                          (y << 25) ^
                          (y << 14)) +
                          ((c >>> 17) ^
                            (c >>> 19) ^
                            (c >>> 10) ^
                            (c << 15) ^
                            (c << 13)) +
                          p +
                          _) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x81c2c92e) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      y = O =
                        (((g >>> 7) ^
                          (g >>> 18) ^
                          (g >>> 3) ^
                          (g << 25) ^
                          (g << 14)) +
                          ((d >>> 17) ^
                            (d >>> 19) ^
                            (d >>> 10) ^
                            (d << 15) ^
                            (d << 13)) +
                          y +
                          e) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x92722c85) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      g = O =
                        (((m >>> 7) ^
                          (m >>> 18) ^
                          (m >>> 3) ^
                          (m << 25) ^
                          (m << 14)) +
                          ((p >>> 17) ^
                            (p >>> 19) ^
                            (p >>> 10) ^
                            (p << 15) ^
                            (p << 13)) +
                          g +
                          t) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xa2bfe8a1) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      m = O =
                        (((v >>> 7) ^
                          (v >>> 18) ^
                          (v >>> 3) ^
                          (v << 25) ^
                          (v << 14)) +
                          ((y >>> 17) ^
                            (y >>> 19) ^
                            (y >>> 10) ^
                            (y << 15) ^
                            (y << 13)) +
                          m +
                          r) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xa81a664b) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      v = O =
                        (((w >>> 7) ^
                          (w >>> 18) ^
                          (w >>> 3) ^
                          (w << 25) ^
                          (w << 14)) +
                          ((g >>> 17) ^
                            (g >>> 19) ^
                            (g >>> 10) ^
                            (g << 15) ^
                            (g << 13)) +
                          v +
                          l) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xc24b8b70) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      w = O =
                        (((b >>> 7) ^
                          (b >>> 18) ^
                          (b >>> 3) ^
                          (b << 25) ^
                          (b << 14)) +
                          ((m >>> 17) ^
                            (m >>> 19) ^
                            (m >>> 10) ^
                            (m << 15) ^
                            (m << 13)) +
                          w +
                          c) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xc76c51a3) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      b = O =
                        (((k >>> 7) ^
                          (k >>> 18) ^
                          (k >>> 3) ^
                          (k << 25) ^
                          (k << 14)) +
                          ((v >>> 17) ^
                            (v >>> 19) ^
                            (v >>> 10) ^
                            (v << 15) ^
                            (v << 13)) +
                          b +
                          d) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xd192e819) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      k = O =
                        (((A >>> 7) ^
                          (A >>> 18) ^
                          (A >>> 3) ^
                          (A << 25) ^
                          (A << 14)) +
                          ((w >>> 17) ^
                            (w >>> 19) ^
                            (w >>> 10) ^
                            (w << 15) ^
                            (w << 13)) +
                          k +
                          p) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xd6990624) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      A = O =
                        (((_ >>> 7) ^
                          (_ >>> 18) ^
                          (_ >>> 3) ^
                          (_ << 25) ^
                          (_ << 14)) +
                          ((b >>> 17) ^
                            (b >>> 19) ^
                            (b >>> 10) ^
                            (b << 15) ^
                            (b << 13)) +
                          A +
                          y) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xf40e3585) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      _ = O =
                        (((e >>> 7) ^
                          (e >>> 18) ^
                          (e >>> 3) ^
                          (e << 25) ^
                          (e << 14)) +
                          ((k >>> 17) ^
                            (k >>> 19) ^
                            (k >>> 10) ^
                            (k << 15) ^
                            (k << 13)) +
                          _ +
                          g) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x106aa070) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      e = O =
                        (((t >>> 7) ^
                          (t >>> 18) ^
                          (t >>> 3) ^
                          (t << 25) ^
                          (t << 14)) +
                          ((A >>> 17) ^
                            (A >>> 19) ^
                            (A >>> 10) ^
                            (A << 15) ^
                            (A << 13)) +
                          e +
                          m) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x19a4c116) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      t = O =
                        (((r >>> 7) ^
                          (r >>> 18) ^
                          (r >>> 3) ^
                          (r << 25) ^
                          (r << 14)) +
                          ((_ >>> 17) ^
                            (_ >>> 19) ^
                            (_ >>> 10) ^
                            (_ << 15) ^
                            (_ << 13)) +
                          t +
                          v) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x1e376c08) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      r = O =
                        (((l >>> 7) ^
                          (l >>> 18) ^
                          (l >>> 3) ^
                          (l << 25) ^
                          (l << 14)) +
                          ((e >>> 17) ^
                            (e >>> 19) ^
                            (e >>> 10) ^
                            (e << 15) ^
                            (e << 13)) +
                          r +
                          w) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x2748774c) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      l = O =
                        (((c >>> 7) ^
                          (c >>> 18) ^
                          (c >>> 3) ^
                          (c << 25) ^
                          (c << 14)) +
                          ((t >>> 17) ^
                            (t >>> 19) ^
                            (t >>> 10) ^
                            (t << 15) ^
                            (t << 13)) +
                          l +
                          b) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x34b0bcb5) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      c = O =
                        (((d >>> 7) ^
                          (d >>> 18) ^
                          (d >>> 3) ^
                          (d << 25) ^
                          (d << 14)) +
                          ((r >>> 17) ^
                            (r >>> 19) ^
                            (r >>> 10) ^
                            (r << 15) ^
                            (r << 13)) +
                          c +
                          k) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x391c0cb3) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      d = O =
                        (((p >>> 7) ^
                          (p >>> 18) ^
                          (p >>> 3) ^
                          (p << 25) ^
                          (p << 14)) +
                          ((l >>> 17) ^
                            (l >>> 19) ^
                            (l >>> 10) ^
                            (l << 15) ^
                            (l << 13)) +
                          d +
                          A) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x4ed8aa4a) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      p = O =
                        (((y >>> 7) ^
                          (y >>> 18) ^
                          (y >>> 3) ^
                          (y << 25) ^
                          (y << 14)) +
                          ((c >>> 17) ^
                            (c >>> 19) ^
                            (c >>> 10) ^
                            (c << 15) ^
                            (c << 13)) +
                          p +
                          _) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x5b9cca4f) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      y = O =
                        (((g >>> 7) ^
                          (g >>> 18) ^
                          (g >>> 3) ^
                          (g << 25) ^
                          (g << 14)) +
                          ((d >>> 17) ^
                            (d >>> 19) ^
                            (d >>> 10) ^
                            (d << 15) ^
                            (d << 13)) +
                          y +
                          e) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x682e6ff3) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      g = O =
                        (((m >>> 7) ^
                          (m >>> 18) ^
                          (m >>> 3) ^
                          (m << 25) ^
                          (m << 14)) +
                          ((p >>> 17) ^
                            (p >>> 19) ^
                            (p >>> 10) ^
                            (p << 15) ^
                            (p << 13)) +
                          g +
                          t) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x748f82ee) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      m = O =
                        (((v >>> 7) ^
                          (v >>> 18) ^
                          (v >>> 3) ^
                          (v << 25) ^
                          (v << 14)) +
                          ((y >>> 17) ^
                            (y >>> 19) ^
                            (y >>> 10) ^
                            (y << 15) ^
                            (y << 13)) +
                          m +
                          r) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x78a5636f) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      v = O =
                        (((w >>> 7) ^
                          (w >>> 18) ^
                          (w >>> 3) ^
                          (w << 25) ^
                          (w << 14)) +
                          ((g >>> 17) ^
                            (g >>> 19) ^
                            (g >>> 10) ^
                            (g << 15) ^
                            (g << 13)) +
                          v +
                          l) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x84c87814) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      w = O =
                        (((b >>> 7) ^
                          (b >>> 18) ^
                          (b >>> 3) ^
                          (b << 25) ^
                          (b << 14)) +
                          ((m >>> 17) ^
                            (m >>> 19) ^
                            (m >>> 10) ^
                            (m << 15) ^
                            (m << 13)) +
                          w +
                          c) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x8cc70208) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      b = O =
                        (((k >>> 7) ^
                          (k >>> 18) ^
                          (k >>> 3) ^
                          (k << 25) ^
                          (k << 14)) +
                          ((v >>> 17) ^
                            (v >>> 19) ^
                            (v >>> 10) ^
                            (v << 15) ^
                            (v << 13)) +
                          b +
                          d) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0x90befffa) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      k = O =
                        (((A >>> 7) ^
                          (A >>> 18) ^
                          (A >>> 3) ^
                          (A << 25) ^
                          (A << 14)) +
                          ((w >>> 17) ^
                            (w >>> 19) ^
                            (w >>> 10) ^
                            (w << 15) ^
                            (w << 13)) +
                          k +
                          p) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xa4506ceb) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      A = O =
                        (((_ >>> 7) ^
                          (_ >>> 18) ^
                          (_ >>> 3) ^
                          (_ << 25) ^
                          (_ << 14)) +
                          ((b >>> 17) ^
                            (b >>> 19) ^
                            (b >>> 10) ^
                            (b << 15) ^
                            (b << 13)) +
                          A +
                          y) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xbef9a3f7) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      _ = O =
                        (((e >>> 7) ^
                          (e >>> 18) ^
                          (e >>> 3) ^
                          (e << 25) ^
                          (e << 14)) +
                          ((k >>> 17) ^
                            (k >>> 19) ^
                            (k >>> 10) ^
                            (k << 15) ^
                            (k << 13)) +
                          _ +
                          g) |
                        0;
                      O =
                        (O +
                          T +
                          ((P >>> 6) ^
                            (P >>> 11) ^
                            (P >>> 25) ^
                            (P << 26) ^
                            (P << 21) ^
                            (P << 7)) +
                          (x ^ (P & (j ^ x))) +
                          0xc67178f2) |
                        0;
                      T = x;
                      x = j;
                      j = P;
                      P = (K + O) | 0;
                      K = U;
                      U = S;
                      S = E;
                      E =
                        (O +
                          ((S & U) ^ (K & (S ^ U))) +
                          ((S >>> 2) ^
                            (S >>> 13) ^
                            (S >>> 22) ^
                            (S << 30) ^
                            (S << 19) ^
                            (S << 10))) |
                        0;
                      n = (n + E) | 0;
                      i = (i + S) | 0;
                      s = (s + U) | 0;
                      a = (a + K) | 0;
                      o = (o + P) | 0;
                      u = (u + j) | 0;
                      f = (f + x) | 0;
                      h = (h + T) | 0;
                    }
                    function T(e) {
                      e = e | 0;
                      x(
                        (j[e | 0] << 24) |
                          (j[e | 1] << 16) |
                          (j[e | 2] << 8) |
                          j[e | 3],
                        (j[e | 4] << 24) |
                          (j[e | 5] << 16) |
                          (j[e | 6] << 8) |
                          j[e | 7],
                        (j[e | 8] << 24) |
                          (j[e | 9] << 16) |
                          (j[e | 10] << 8) |
                          j[e | 11],
                        (j[e | 12] << 24) |
                          (j[e | 13] << 16) |
                          (j[e | 14] << 8) |
                          j[e | 15],
                        (j[e | 16] << 24) |
                          (j[e | 17] << 16) |
                          (j[e | 18] << 8) |
                          j[e | 19],
                        (j[e | 20] << 24) |
                          (j[e | 21] << 16) |
                          (j[e | 22] << 8) |
                          j[e | 23],
                        (j[e | 24] << 24) |
                          (j[e | 25] << 16) |
                          (j[e | 26] << 8) |
                          j[e | 27],
                        (j[e | 28] << 24) |
                          (j[e | 29] << 16) |
                          (j[e | 30] << 8) |
                          j[e | 31],
                        (j[e | 32] << 24) |
                          (j[e | 33] << 16) |
                          (j[e | 34] << 8) |
                          j[e | 35],
                        (j[e | 36] << 24) |
                          (j[e | 37] << 16) |
                          (j[e | 38] << 8) |
                          j[e | 39],
                        (j[e | 40] << 24) |
                          (j[e | 41] << 16) |
                          (j[e | 42] << 8) |
                          j[e | 43],
                        (j[e | 44] << 24) |
                          (j[e | 45] << 16) |
                          (j[e | 46] << 8) |
                          j[e | 47],
                        (j[e | 48] << 24) |
                          (j[e | 49] << 16) |
                          (j[e | 50] << 8) |
                          j[e | 51],
                        (j[e | 52] << 24) |
                          (j[e | 53] << 16) |
                          (j[e | 54] << 8) |
                          j[e | 55],
                        (j[e | 56] << 24) |
                          (j[e | 57] << 16) |
                          (j[e | 58] << 8) |
                          j[e | 59],
                        (j[e | 60] << 24) |
                          (j[e | 61] << 16) |
                          (j[e | 62] << 8) |
                          j[e | 63],
                      );
                    }
                    function O(e) {
                      e = e | 0;
                      j[e | 0] = n >>> 24;
                      j[e | 1] = (n >>> 16) & 255;
                      j[e | 2] = (n >>> 8) & 255;
                      j[e | 3] = n & 255;
                      j[e | 4] = i >>> 24;
                      j[e | 5] = (i >>> 16) & 255;
                      j[e | 6] = (i >>> 8) & 255;
                      j[e | 7] = i & 255;
                      j[e | 8] = s >>> 24;
                      j[e | 9] = (s >>> 16) & 255;
                      j[e | 10] = (s >>> 8) & 255;
                      j[e | 11] = s & 255;
                      j[e | 12] = a >>> 24;
                      j[e | 13] = (a >>> 16) & 255;
                      j[e | 14] = (a >>> 8) & 255;
                      j[e | 15] = a & 255;
                      j[e | 16] = o >>> 24;
                      j[e | 17] = (o >>> 16) & 255;
                      j[e | 18] = (o >>> 8) & 255;
                      j[e | 19] = o & 255;
                      j[e | 20] = u >>> 24;
                      j[e | 21] = (u >>> 16) & 255;
                      j[e | 22] = (u >>> 8) & 255;
                      j[e | 23] = u & 255;
                      j[e | 24] = f >>> 24;
                      j[e | 25] = (f >>> 16) & 255;
                      j[e | 26] = (f >>> 8) & 255;
                      j[e | 27] = f & 255;
                      j[e | 28] = h >>> 24;
                      j[e | 29] = (h >>> 16) & 255;
                      j[e | 30] = (h >>> 8) & 255;
                      j[e | 31] = h & 255;
                    }
                    function C() {
                      n = 0x6a09e667;
                      i = 0xbb67ae85;
                      s = 0x3c6ef372;
                      a = 0xa54ff53a;
                      o = 0x510e527f;
                      u = 0x9b05688c;
                      f = 0x1f83d9ab;
                      h = 0x5be0cd19;
                      l = c = 0;
                    }
                    function I(e, t, r, d, p, y, g, m, v, w) {
                      e = e | 0;
                      t = t | 0;
                      r = r | 0;
                      d = d | 0;
                      p = p | 0;
                      y = y | 0;
                      g = g | 0;
                      m = m | 0;
                      v = v | 0;
                      w = w | 0;
                      n = e;
                      i = t;
                      s = r;
                      a = d;
                      o = p;
                      u = y;
                      f = g;
                      h = m;
                      l = v;
                      c = w;
                    }
                    function M(e, t) {
                      e = e | 0;
                      t = t | 0;
                      var r = 0;
                      if (e & 63) return -1;
                      while ((t | 0) >= 64) {
                        T(e);
                        e = (e + 64) | 0;
                        t = (t - 64) | 0;
                        r = (r + 64) | 0;
                      }
                      l = (l + r) | 0;
                      if (l >>> 0 < r >>> 0) c = (c + 1) | 0;
                      return r | 0;
                    }
                    function B(e, t, r) {
                      e = e | 0;
                      t = t | 0;
                      r = r | 0;
                      var n = 0,
                        i = 0;
                      if (e & 63) return -1;
                      if (~r) if (r & 31) return -1;
                      if ((t | 0) >= 64) {
                        n = M(e, t) | 0;
                        if ((n | 0) == -1) return -1;
                        e = (e + n) | 0;
                        t = (t - n) | 0;
                      }
                      n = (n + t) | 0;
                      l = (l + t) | 0;
                      if (l >>> 0 < t >>> 0) c = (c + 1) | 0;
                      j[e | t] = 0x80;
                      if ((t | 0) >= 56) {
                        for (i = (t + 1) | 0; (i | 0) < 64; i = (i + 1) | 0)
                          j[e | i] = 0x00;
                        T(e);
                        t = 0;
                        j[e | 0] = 0;
                      }
                      for (i = (t + 1) | 0; (i | 0) < 59; i = (i + 1) | 0)
                        j[e | i] = 0;
                      j[e | 56] = (c >>> 21) & 255;
                      j[e | 57] = (c >>> 13) & 255;
                      j[e | 58] = (c >>> 5) & 255;
                      j[e | 59] = ((c << 3) & 255) | (l >>> 29);
                      j[e | 60] = (l >>> 21) & 255;
                      j[e | 61] = (l >>> 13) & 255;
                      j[e | 62] = (l >>> 5) & 255;
                      j[e | 63] = (l << 3) & 255;
                      T(e);
                      if (~r) O(r);
                      return n | 0;
                    }
                    function D() {
                      n = d;
                      i = p;
                      s = y;
                      a = g;
                      o = m;
                      u = v;
                      f = w;
                      h = b;
                      l = 64;
                      c = 0;
                    }
                    function N() {
                      n = k;
                      i = A;
                      s = _;
                      a = E;
                      o = S;
                      u = U;
                      f = K;
                      h = P;
                      l = 64;
                      c = 0;
                    }
                    function L(e, t, r, j, T, O, I, M, B, D, N, L, R, H, F, z) {
                      e = e | 0;
                      t = t | 0;
                      r = r | 0;
                      j = j | 0;
                      T = T | 0;
                      O = O | 0;
                      I = I | 0;
                      M = M | 0;
                      B = B | 0;
                      D = D | 0;
                      N = N | 0;
                      L = L | 0;
                      R = R | 0;
                      H = H | 0;
                      F = F | 0;
                      z = z | 0;
                      C();
                      x(
                        e ^ 0x5c5c5c5c,
                        t ^ 0x5c5c5c5c,
                        r ^ 0x5c5c5c5c,
                        j ^ 0x5c5c5c5c,
                        T ^ 0x5c5c5c5c,
                        O ^ 0x5c5c5c5c,
                        I ^ 0x5c5c5c5c,
                        M ^ 0x5c5c5c5c,
                        B ^ 0x5c5c5c5c,
                        D ^ 0x5c5c5c5c,
                        N ^ 0x5c5c5c5c,
                        L ^ 0x5c5c5c5c,
                        R ^ 0x5c5c5c5c,
                        H ^ 0x5c5c5c5c,
                        F ^ 0x5c5c5c5c,
                        z ^ 0x5c5c5c5c,
                      );
                      k = n;
                      A = i;
                      _ = s;
                      E = a;
                      S = o;
                      U = u;
                      K = f;
                      P = h;
                      C();
                      x(
                        e ^ 0x36363636,
                        t ^ 0x36363636,
                        r ^ 0x36363636,
                        j ^ 0x36363636,
                        T ^ 0x36363636,
                        O ^ 0x36363636,
                        I ^ 0x36363636,
                        M ^ 0x36363636,
                        B ^ 0x36363636,
                        D ^ 0x36363636,
                        N ^ 0x36363636,
                        L ^ 0x36363636,
                        R ^ 0x36363636,
                        H ^ 0x36363636,
                        F ^ 0x36363636,
                        z ^ 0x36363636,
                      );
                      d = n;
                      p = i;
                      y = s;
                      g = a;
                      m = o;
                      v = u;
                      w = f;
                      b = h;
                      l = 64;
                      c = 0;
                    }
                    function R(e, t, r) {
                      e = e | 0;
                      t = t | 0;
                      r = r | 0;
                      var l = 0,
                        c = 0,
                        d = 0,
                        p = 0,
                        y = 0,
                        g = 0,
                        m = 0,
                        v = 0,
                        w = 0;
                      if (e & 63) return -1;
                      if (~r) if (r & 31) return -1;
                      w = B(e, t, -1) | 0;
                      (l = n),
                        (c = i),
                        (d = s),
                        (p = a),
                        (y = o),
                        (g = u),
                        (m = f),
                        (v = h);
                      N();
                      x(
                        l,
                        c,
                        d,
                        p,
                        y,
                        g,
                        m,
                        v,
                        0x80000000,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        768,
                      );
                      if (~r) O(r);
                      return w | 0;
                    }
                    function H(e, t, r, l, c) {
                      e = e | 0;
                      t = t | 0;
                      r = r | 0;
                      l = l | 0;
                      c = c | 0;
                      var d = 0,
                        p = 0,
                        y = 0,
                        g = 0,
                        m = 0,
                        v = 0,
                        w = 0,
                        b = 0,
                        k = 0,
                        A = 0,
                        _ = 0,
                        E = 0,
                        S = 0,
                        U = 0,
                        K = 0,
                        P = 0;
                      if (e & 63) return -1;
                      if (~c) if (c & 31) return -1;
                      j[(e + t) | 0] = r >>> 24;
                      j[(e + t + 1) | 0] = (r >>> 16) & 255;
                      j[(e + t + 2) | 0] = (r >>> 8) & 255;
                      j[(e + t + 3) | 0] = r & 255;
                      R(e, (t + 4) | 0, -1) | 0;
                      (d = k = n),
                        (p = A = i),
                        (y = _ = s),
                        (g = E = a),
                        (m = S = o),
                        (v = U = u),
                        (w = K = f),
                        (b = P = h);
                      l = (l - 1) | 0;
                      while ((l | 0) > 0) {
                        D();
                        x(
                          k,
                          A,
                          _,
                          E,
                          S,
                          U,
                          K,
                          P,
                          0x80000000,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          768,
                        );
                        (k = n),
                          (A = i),
                          (_ = s),
                          (E = a),
                          (S = o),
                          (U = u),
                          (K = f),
                          (P = h);
                        N();
                        x(
                          k,
                          A,
                          _,
                          E,
                          S,
                          U,
                          K,
                          P,
                          0x80000000,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          768,
                        );
                        (k = n),
                          (A = i),
                          (_ = s),
                          (E = a),
                          (S = o),
                          (U = u),
                          (K = f),
                          (P = h);
                        d = d ^ n;
                        p = p ^ i;
                        y = y ^ s;
                        g = g ^ a;
                        m = m ^ o;
                        v = v ^ u;
                        w = w ^ f;
                        b = b ^ h;
                        l = (l - 1) | 0;
                      }
                      n = d;
                      i = p;
                      s = y;
                      a = g;
                      o = m;
                      u = v;
                      f = w;
                      h = b;
                      if (~c) O(c);
                      return 0;
                    }
                    return {
                      reset: C,
                      init: I,
                      process: M,
                      finish: B,
                      hmac_reset: D,
                      hmac_init: L,
                      hmac_finish: R,
                      pbkdf2_generate_block: H,
                    };
                  })(r, null, this.heap.buffer)),
                (this.BLOCK_SIZE = X),
                (this.HASH_SIZE = W),
                this.reset();
            }
            function B(e) {
              if (void 0 === e) throw new SyntaxError("data required");
              return (null === J && (J = new M({ heapSize: 1048576 })), J)
                .reset()
                .process(e)
                .finish().result;
            }
            (n.prototype = Object.create(Error.prototype, {
              name: { value: "IllegalStateError" },
            })),
              (i.prototype = Object.create(Error.prototype, {
                name: { value: "IllegalArgumentError" },
              })),
              (s.prototype = Object.create(Error.prototype, {
                name: { value: "SecurityError" },
              }));
            r.Float64Array || r.Float32Array;
            (r.IllegalStateError = n),
              (r.IllegalArgumentError = i),
              (r.SecurityError = s);
            var D = (function () {
                "use strict";
                function e(e, t) {
                  var i = r[(n[e] + n[t]) % 255];
                  return (0 !== e && 0 !== t) || (i = 0), i;
                }
                function t() {
                  function t(e) {
                    var t, i, s;
                    for (
                      i = s =
                        (function (e) {
                          var t = r[255 - n[e]];
                          return 0 === e && (t = 0), t;
                        })(e),
                        t = 0;
                      t < 4;
                      t++
                    )
                      s ^= i = 255 & ((i << 1) | (i >>> 7));
                    return (s ^= 99);
                  }
                  u ||
                    (function () {
                      (r = []), (n = []);
                      var e,
                        t,
                        i = 1;
                      for (e = 0; e < 255; e++)
                        (r[e] = i),
                          (t = 128 & i),
                          (i <<= 1),
                          (i &= 255),
                          128 === t && (i ^= 27),
                          (i ^= r[e]),
                          (n[r[e]] = e);
                      (r[255] = r[0]), (n[0] = 0), (u = !0);
                    })(),
                    (i = []),
                    (s = []),
                    (a = [[], [], [], []]),
                    (o = [[], [], [], []]);
                  for (var f = 0; f < 256; f++) {
                    var h = t(f);
                    (i[f] = h),
                      (s[h] = f),
                      (a[0][f] =
                        (e(2, h) << 24) | (h << 16) | (h << 8) | e(3, h)),
                      (o[0][h] =
                        (e(14, f) << 24) |
                        (e(9, f) << 16) |
                        (e(13, f) << 8) |
                        e(11, f));
                    for (var l = 1; l < 4; l++)
                      (a[l][f] = (a[l - 1][f] >>> 8) | (a[l - 1][f] << 24)),
                        (o[l][h] = (o[l - 1][h] >>> 8) | (o[l - 1][h] << 24));
                  }
                }
                var r,
                  n,
                  i,
                  s,
                  a,
                  o,
                  u = !1,
                  f = function (e, r, n) {
                    t();
                    var u = new Uint32Array(n);
                    u.set(i, 512), u.set(s, 768);
                    for (var f = 0; f < 4; f++)
                      u.set(a[f], (4096 + 1024 * f) >> 2),
                        u.set(o[f], (8192 + 1024 * f) >> 2);
                    var h = (function (e, t, r) {
                      "use asm";
                      var n = 0,
                        i = 0,
                        s = 0,
                        a = 0,
                        o = 0,
                        u = 0,
                        f = 0,
                        h = 0,
                        l = 0,
                        c = 0,
                        d = 0,
                        p = 0,
                        y = 0,
                        g = 0,
                        m = 0,
                        v = 0,
                        w = 0,
                        b = 0,
                        k = 0,
                        A = 0,
                        _ = 0;
                      var E = new e.Uint32Array(r),
                        S = new e.Uint8Array(r);
                      function U(e, t, r, o, u, f, h, l) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        o = o | 0;
                        u = u | 0;
                        f = f | 0;
                        h = h | 0;
                        l = l | 0;
                        var c = 0,
                          d = 0,
                          p = 0,
                          y = 0,
                          g = 0,
                          m = 0,
                          v = 0,
                          w = 0;
                        (c = r | 0x400), (d = r | 0x800), (p = r | 0xc00);
                        (u = u ^ E[(e | 0) >> 2]),
                          (f = f ^ E[(e | 4) >> 2]),
                          (h = h ^ E[(e | 8) >> 2]),
                          (l = l ^ E[(e | 12) >> 2]);
                        for (w = 16; (w | 0) <= o << 4; w = (w + 16) | 0) {
                          (y =
                            E[(r | ((u >> 22) & 1020)) >> 2] ^
                            E[(c | ((f >> 14) & 1020)) >> 2] ^
                            E[(d | ((h >> 6) & 1020)) >> 2] ^
                            E[(p | ((l << 2) & 1020)) >> 2] ^
                            E[(e | w | 0) >> 2]),
                            (g =
                              E[(r | ((f >> 22) & 1020)) >> 2] ^
                              E[(c | ((h >> 14) & 1020)) >> 2] ^
                              E[(d | ((l >> 6) & 1020)) >> 2] ^
                              E[(p | ((u << 2) & 1020)) >> 2] ^
                              E[(e | w | 4) >> 2]),
                            (m =
                              E[(r | ((h >> 22) & 1020)) >> 2] ^
                              E[(c | ((l >> 14) & 1020)) >> 2] ^
                              E[(d | ((u >> 6) & 1020)) >> 2] ^
                              E[(p | ((f << 2) & 1020)) >> 2] ^
                              E[(e | w | 8) >> 2]),
                            (v =
                              E[(r | ((l >> 22) & 1020)) >> 2] ^
                              E[(c | ((u >> 14) & 1020)) >> 2] ^
                              E[(d | ((f >> 6) & 1020)) >> 2] ^
                              E[(p | ((h << 2) & 1020)) >> 2] ^
                              E[(e | w | 12) >> 2]);
                          (u = y), (f = g), (h = m), (l = v);
                        }
                        (n =
                          (E[(t | ((u >> 22) & 1020)) >> 2] << 24) ^
                          (E[(t | ((f >> 14) & 1020)) >> 2] << 16) ^
                          (E[(t | ((h >> 6) & 1020)) >> 2] << 8) ^
                          E[(t | ((l << 2) & 1020)) >> 2] ^
                          E[(e | w | 0) >> 2]),
                          (i =
                            (E[(t | ((f >> 22) & 1020)) >> 2] << 24) ^
                            (E[(t | ((h >> 14) & 1020)) >> 2] << 16) ^
                            (E[(t | ((l >> 6) & 1020)) >> 2] << 8) ^
                            E[(t | ((u << 2) & 1020)) >> 2] ^
                            E[(e | w | 4) >> 2]),
                          (s =
                            (E[(t | ((h >> 22) & 1020)) >> 2] << 24) ^
                            (E[(t | ((l >> 14) & 1020)) >> 2] << 16) ^
                            (E[(t | ((u >> 6) & 1020)) >> 2] << 8) ^
                            E[(t | ((f << 2) & 1020)) >> 2] ^
                            E[(e | w | 8) >> 2]),
                          (a =
                            (E[(t | ((l >> 22) & 1020)) >> 2] << 24) ^
                            (E[(t | ((u >> 14) & 1020)) >> 2] << 16) ^
                            (E[(t | ((f >> 6) & 1020)) >> 2] << 8) ^
                            E[(t | ((h << 2) & 1020)) >> 2] ^
                            E[(e | w | 12) >> 2]);
                      }
                      function K(e, t, r, n) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        n = n | 0;
                        U(0x0000, 0x0800, 0x1000, _, e, t, r, n);
                      }
                      function P(e, t, r, n) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        n = n | 0;
                        var s = 0;
                        U(0x0400, 0x0c00, 0x2000, _, e, n, r, t);
                        (s = i), (i = a), (a = s);
                      }
                      function j(e, t, r, l) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        l = l | 0;
                        U(
                          0x0000,
                          0x0800,
                          0x1000,
                          _,
                          o ^ e,
                          u ^ t,
                          f ^ r,
                          h ^ l,
                        );
                        (o = n), (u = i), (f = s), (h = a);
                      }
                      function x(e, t, r, l) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        l = l | 0;
                        var c = 0;
                        U(0x0400, 0x0c00, 0x2000, _, e, l, r, t);
                        (c = i), (i = a), (a = c);
                        (n = n ^ o), (i = i ^ u), (s = s ^ f), (a = a ^ h);
                        (o = e), (u = t), (f = r), (h = l);
                      }
                      function T(e, t, r, l) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        l = l | 0;
                        U(0x0000, 0x0800, 0x1000, _, o, u, f, h);
                        (o = n = n ^ e),
                          (u = i = i ^ t),
                          (f = s = s ^ r),
                          (h = a = a ^ l);
                      }
                      function O(e, t, r, l) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        l = l | 0;
                        U(0x0000, 0x0800, 0x1000, _, o, u, f, h);
                        (n = n ^ e), (i = i ^ t), (s = s ^ r), (a = a ^ l);
                        (o = e), (u = t), (f = r), (h = l);
                      }
                      function C(e, t, r, l) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        l = l | 0;
                        U(0x0000, 0x0800, 0x1000, _, o, u, f, h);
                        (o = n), (u = i), (f = s), (h = a);
                        (n = n ^ e), (i = i ^ t), (s = s ^ r), (a = a ^ l);
                      }
                      function I(e, t, r, o) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        o = o | 0;
                        U(0x0000, 0x0800, 0x1000, _, l, c, d, p);
                        (p = (~v & p) | (v & (p + 1))),
                          (d = (~m & d) | (m & (d + ((p | 0) == 0)))),
                          (c = (~g & c) | (g & (c + ((d | 0) == 0)))),
                          (l = (~y & l) | (y & (l + ((c | 0) == 0))));
                        (n = n ^ e), (i = i ^ t), (s = s ^ r), (a = a ^ o);
                      }
                      function M(e, t, r, n) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        n = n | 0;
                        var i = 0,
                          s = 0,
                          a = 0,
                          l = 0,
                          c = 0,
                          d = 0,
                          p = 0,
                          y = 0,
                          g = 0,
                          m = 0;
                        (e = e ^ o), (t = t ^ u), (r = r ^ f), (n = n ^ h);
                        (i = w | 0), (s = b | 0), (a = k | 0), (l = A | 0);
                        for (; (g | 0) < 128; g = (g + 1) | 0) {
                          if (i >>> 31) {
                            (c = c ^ e), (d = d ^ t), (p = p ^ r), (y = y ^ n);
                          }
                          (i = (i << 1) | (s >>> 31)),
                            (s = (s << 1) | (a >>> 31)),
                            (a = (a << 1) | (l >>> 31)),
                            (l = l << 1);
                          m = n & 1;
                          (n = (n >>> 1) | (r << 31)),
                            (r = (r >>> 1) | (t << 31)),
                            (t = (t >>> 1) | (e << 31)),
                            (e = e >>> 1);
                          if (m) e = e ^ 0xe1000000;
                        }
                        (o = c), (u = d), (f = p), (h = y);
                      }
                      function B(e) {
                        e = e | 0;
                        _ = e;
                      }
                      function D(e, t, r, o) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        o = o | 0;
                        (n = e), (i = t), (s = r), (a = o);
                      }
                      function N(e, t, r, n) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        n = n | 0;
                        (o = e), (u = t), (f = r), (h = n);
                      }
                      function L(e, t, r, n) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        n = n | 0;
                        (l = e), (c = t), (d = r), (p = n);
                      }
                      function R(e, t, r, n) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        n = n | 0;
                        (y = e), (g = t), (m = r), (v = n);
                      }
                      function H(e, t, r, n) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        n = n | 0;
                        (p = (~v & p) | (v & n)),
                          (d = (~m & d) | (m & r)),
                          (c = (~g & c) | (g & t)),
                          (l = (~y & l) | (y & e));
                      }
                      function F(e) {
                        e = e | 0;
                        if (e & 15) return -1;
                        (S[e | 0] = n >>> 24),
                          (S[e | 1] = (n >>> 16) & 255),
                          (S[e | 2] = (n >>> 8) & 255),
                          (S[e | 3] = n & 255),
                          (S[e | 4] = i >>> 24),
                          (S[e | 5] = (i >>> 16) & 255),
                          (S[e | 6] = (i >>> 8) & 255),
                          (S[e | 7] = i & 255),
                          (S[e | 8] = s >>> 24),
                          (S[e | 9] = (s >>> 16) & 255),
                          (S[e | 10] = (s >>> 8) & 255),
                          (S[e | 11] = s & 255),
                          (S[e | 12] = a >>> 24),
                          (S[e | 13] = (a >>> 16) & 255),
                          (S[e | 14] = (a >>> 8) & 255),
                          (S[e | 15] = a & 255);
                        return 16;
                      }
                      function z(e) {
                        e = e | 0;
                        if (e & 15) return -1;
                        (S[e | 0] = o >>> 24),
                          (S[e | 1] = (o >>> 16) & 255),
                          (S[e | 2] = (o >>> 8) & 255),
                          (S[e | 3] = o & 255),
                          (S[e | 4] = u >>> 24),
                          (S[e | 5] = (u >>> 16) & 255),
                          (S[e | 6] = (u >>> 8) & 255),
                          (S[e | 7] = u & 255),
                          (S[e | 8] = f >>> 24),
                          (S[e | 9] = (f >>> 16) & 255),
                          (S[e | 10] = (f >>> 8) & 255),
                          (S[e | 11] = f & 255),
                          (S[e | 12] = h >>> 24),
                          (S[e | 13] = (h >>> 16) & 255),
                          (S[e | 14] = (h >>> 8) & 255),
                          (S[e | 15] = h & 255);
                        return 16;
                      }
                      function q() {
                        K(0, 0, 0, 0);
                        (w = n), (b = i), (k = s), (A = a);
                      }
                      function G(e, t, r) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        var o = 0;
                        if (t & 15) return -1;
                        while ((r | 0) >= 16) {
                          Z[e & 7](
                            (S[t | 0] << 24) |
                              (S[t | 1] << 16) |
                              (S[t | 2] << 8) |
                              S[t | 3],
                            (S[t | 4] << 24) |
                              (S[t | 5] << 16) |
                              (S[t | 6] << 8) |
                              S[t | 7],
                            (S[t | 8] << 24) |
                              (S[t | 9] << 16) |
                              (S[t | 10] << 8) |
                              S[t | 11],
                            (S[t | 12] << 24) |
                              (S[t | 13] << 16) |
                              (S[t | 14] << 8) |
                              S[t | 15],
                          );
                          (S[t | 0] = n >>> 24),
                            (S[t | 1] = (n >>> 16) & 255),
                            (S[t | 2] = (n >>> 8) & 255),
                            (S[t | 3] = n & 255),
                            (S[t | 4] = i >>> 24),
                            (S[t | 5] = (i >>> 16) & 255),
                            (S[t | 6] = (i >>> 8) & 255),
                            (S[t | 7] = i & 255),
                            (S[t | 8] = s >>> 24),
                            (S[t | 9] = (s >>> 16) & 255),
                            (S[t | 10] = (s >>> 8) & 255),
                            (S[t | 11] = s & 255),
                            (S[t | 12] = a >>> 24),
                            (S[t | 13] = (a >>> 16) & 255),
                            (S[t | 14] = (a >>> 8) & 255),
                            (S[t | 15] = a & 255);
                          (o = (o + 16) | 0),
                            (t = (t + 16) | 0),
                            (r = (r - 16) | 0);
                        }
                        return o | 0;
                      }
                      function V(e, t, r) {
                        e = e | 0;
                        t = t | 0;
                        r = r | 0;
                        var n = 0;
                        if (t & 15) return -1;
                        while ((r | 0) >= 16) {
                          Y[e & 1](
                            (S[t | 0] << 24) |
                              (S[t | 1] << 16) |
                              (S[t | 2] << 8) |
                              S[t | 3],
                            (S[t | 4] << 24) |
                              (S[t | 5] << 16) |
                              (S[t | 6] << 8) |
                              S[t | 7],
                            (S[t | 8] << 24) |
                              (S[t | 9] << 16) |
                              (S[t | 10] << 8) |
                              S[t | 11],
                            (S[t | 12] << 24) |
                              (S[t | 13] << 16) |
                              (S[t | 14] << 8) |
                              S[t | 15],
                          );
                          (n = (n + 16) | 0),
                            (t = (t + 16) | 0),
                            (r = (r - 16) | 0);
                        }
                        return n | 0;
                      }
                      var Z = [K, P, j, x, T, O, C, I];
                      var Y = [j, M];
                      return {
                        set_rounds: B,
                        set_state: D,
                        set_iv: N,
                        set_nonce: L,
                        set_mask: R,
                        set_counter: H,
                        get_state: F,
                        get_iv: z,
                        gcm_init: q,
                        cipher: G,
                        mac: V,
                      };
                    })(e, r, n);
                    return (
                      (h.set_key = function (e, t, r, n, s, a, f, l, c) {
                        var d = u.subarray(0, 60),
                          p = u.subarray(256, 316);
                        d.set([t, r, n, s, a, f, l, c]);
                        for (var y = e, g = 1; y < 4 * e + 28; y++)
                          (w = d[y - 1]),
                            (y % e == 0 || (8 === e && y % e == 4)) &&
                              (w =
                                (i[w >>> 24] << 24) ^
                                (i[(w >>> 16) & 255] << 16) ^
                                (i[(w >>> 8) & 255] << 8) ^
                                i[255 & w]),
                            y % e == 0 &&
                              ((w = (w << 8) ^ (w >>> 24) ^ (g << 24)),
                              (g = (g << 1) ^ (128 & g ? 27 : 0))),
                            (d[y] = d[y - e] ^ w);
                        for (var m = 0; m < y; m += 4)
                          for (var v = 0; v < 4; v++) {
                            var w = d[y - (4 + m) + ((4 - v) % 4)];
                            p[m + v] =
                              m < 4 || m >= y - 4
                                ? w
                                : o[0][i[w >>> 24]] ^
                                  o[1][i[(w >>> 16) & 255]] ^
                                  o[2][i[(w >>> 8) & 255]] ^
                                  o[3][i[255 & w]];
                          }
                        h.set_rounds(e + 5);
                      }),
                      h
                    );
                  };
                return (
                  (f.ENC = { ECB: 0, CBC: 2, CFB: 4, OFB: 6, CTR: 7 }),
                  (f.DEC = { ECB: 1, CBC: 3, CFB: 5, OFB: 6, CTR: 7 }),
                  (f.MAC = { CBC: 0, GCM: 1 }),
                  (f.HEAP_DATA = 16384),
                  f
                );
              })(),
              N = k.prototype;
            (N.BLOCK_SIZE = 16),
              (N.reset = g),
              (N.encrypt = v),
              (N.decrypt = b);
            var L = A.prototype;
            (L.BLOCK_SIZE = 16), (L.reset = g), (L.process = m), (L.finish = v);
            var R = _.prototype;
            (R.BLOCK_SIZE = 16), (R.reset = g), (R.process = w), (R.finish = b);
            var H = E.prototype;
            (H.BLOCK_SIZE = 16),
              (H.reset = S),
              (H.encrypt = v),
              (H.decrypt = v);
            var F = function (e) {
              E.call(this, e);
            }.prototype;
            (F.BLOCK_SIZE = 16), (F.reset = S), (F.process = m), (F.finish = v);
            var z = 68719476704,
              q = K.prototype;
            (q.BLOCK_SIZE = 16),
              (q.reset = x),
              (q.encrypt = function (e) {
                var t = T.call(this, e).result,
                  r = O.call(this).result,
                  n = new Uint8Array(t.length + r.length);
                return (
                  t.length && n.set(t),
                  r.length && n.set(r, t.length),
                  (this.result = n),
                  this
                );
              }),
              (q.decrypt = function (e) {
                var t = C.call(this, e).result,
                  r = I.call(this).result,
                  n = new Uint8Array(t.length + r.length);
                return (
                  t.length && n.set(t),
                  r.length && n.set(r, t.length),
                  (this.result = n),
                  this
                );
              });
            var G = P.prototype;
            (G.BLOCK_SIZE = 16), (G.reset = x), (G.process = T), (G.finish = O);
            var V = j.prototype;
            (V.BLOCK_SIZE = 16), (V.reset = x), (V.process = C), (V.finish = I);
            var Z = new Uint8Array(1048576),
              Y = D(r, null, Z.buffer);
            (e.AES_CFB = k),
              (e.AES_CFB.encrypt = function (e, t, r) {
                if (void 0 === e) throw new SyntaxError("data required");
                if (void 0 === t) throw new SyntaxError("key required");
                return new k({ heap: Z, asm: Y, key: t, iv: r }).encrypt(e)
                  .result;
              }),
              (e.AES_CFB.decrypt = function (e, t, r) {
                if (void 0 === e) throw new SyntaxError("data required");
                if (void 0 === t) throw new SyntaxError("key required");
                return new k({ heap: Z, asm: Y, key: t, iv: r }).decrypt(e)
                  .result;
              }),
              (e.AES_CFB.Encrypt = A),
              (e.AES_CFB.Decrypt = _),
              (e.AES_GCM = K),
              (e.AES_GCM.encrypt = function (e, t, r, n, i) {
                if (void 0 === e) throw new SyntaxError("data required");
                if (void 0 === t) throw new SyntaxError("key required");
                if (void 0 === r) throw new SyntaxError("nonce required");
                return new K({
                  heap: Z,
                  asm: Y,
                  key: t,
                  nonce: r,
                  adata: n,
                  tagSize: i,
                }).encrypt(e).result;
              }),
              (e.AES_GCM.decrypt = function (e, t, r, n, i) {
                if (void 0 === e) throw new SyntaxError("data required");
                if (void 0 === t) throw new SyntaxError("key required");
                if (void 0 === r) throw new SyntaxError("nonce required");
                return new K({
                  heap: Z,
                  asm: Y,
                  key: t,
                  nonce: r,
                  adata: n,
                  tagSize: i,
                }).decrypt(e).result;
              }),
              (e.AES_GCM.Encrypt = P),
              (e.AES_GCM.Decrypt = j);
            var X = 64,
              W = 32;
            (M.BLOCK_SIZE = X), (M.HASH_SIZE = W);
            var $ = M.prototype;
            ($.reset = function () {
              return (
                (this.result = null),
                (this.pos = 0),
                (this.len = 0),
                this.asm.reset(),
                this
              );
            }),
              ($.process = function (e) {
                if (null !== this.result)
                  throw new n("state must be reset before processing new data");
                if (
                  (f(e) && (e = a(e)), h(e) && (e = new Uint8Array(e)), !l(e))
                )
                  throw new TypeError("data isn't of expected type");
                for (
                  var t = this.asm,
                    r = this.heap,
                    i = this.pos,
                    s = this.len,
                    o = 0,
                    u = e.length,
                    c = 0;
                  u > 0;

                )
                  (s += c = d(r, i + s, e, o, u)),
                    (o += c),
                    (u -= c),
                    (i += c = t.process(i, s)),
                    (s -= c) || (i = 0);
                return (this.pos = i), (this.len = s), this;
              }),
              ($.finish = function () {
                if (null !== this.result)
                  throw new n("state must be reset before processing new data");
                return (
                  this.asm.finish(this.pos, this.len, 0),
                  (this.result = new Uint8Array(this.HASH_SIZE)),
                  this.result.set(this.heap.subarray(0, this.HASH_SIZE)),
                  (this.pos = 0),
                  (this.len = 0),
                  this
                );
              });
            var J = null;
            (M.bytes = B),
              (M.hex = function (e) {
                return (function (e) {
                  for (var t = "", r = 0; r < e.length; r++) {
                    var n = (255 & e[r]).toString(16);
                    n.length < 2 && (t += "0"), (t += n);
                  }
                  return t;
                })(B(e));
              }),
              (M.base64 = function (e) {
                return o(B(e));
              }),
              (e.SHA256 = M),
              "object" == typeof t && t.exports
                ? (t.exports = e)
                : (r.asmCrypto = e);
          })(
            {},
            (function () {
              return this;
            })(),
          );
        },
        {},
      ],
      2: [
        function (e, t, r) {
          (function (n, i) {
            !(function (e, n) {
              "object" == typeof r && void 0 !== t
                ? (t.exports = n())
                : (e.ES6Promise = n());
            })(this, function () {
              "use strict";
              function t(e) {
                return "function" == typeof e;
              }
              function r() {
                var e = setTimeout;
                return function () {
                  return e(s, 1);
                };
              }
              function s() {
                for (var e = 0; e < E; e += 2) {
                  (0, C[e])(C[e + 1]), (C[e] = void 0), (C[e + 1] = void 0);
                }
                E = 0;
              }
              function a(e, t) {
                var r = arguments,
                  n = this,
                  i = new this.constructor(u);
                void 0 === i[M] && w(i);
                var s = n._state;
                return (
                  s
                    ? (function () {
                        var e = r[s - 1];
                        K(function () {
                          return v(s, i, e, n._result);
                        });
                      })()
                    : y(n, i, e, t),
                  i
                );
              }
              function o(e) {
                if (e && "object" == typeof e && e.constructor === this)
                  return e;
                var t = new this(u);
                return l(t, e), t;
              }
              function u() {}
              function f(e) {
                try {
                  return e.then;
                } catch (e) {
                  return (L.error = e), L;
                }
              }
              function h(e, r, n) {
                r.constructor === e.constructor &&
                n === a &&
                r.constructor.resolve === o
                  ? (function (e, t) {
                      t._state === D
                        ? d(e, t._result)
                        : t._state === N
                        ? p(e, t._result)
                        : y(
                            t,
                            void 0,
                            function (t) {
                              return l(e, t);
                            },
                            function (t) {
                              return p(e, t);
                            },
                          );
                    })(e, r)
                  : n === L
                  ? (p(e, L.error), (L.error = null))
                  : void 0 === n
                  ? d(e, r)
                  : t(n)
                  ? (function (e, t, r) {
                      K(function (e) {
                        var n = !1,
                          i = (function (e, t, r, n) {
                            try {
                              e.call(t, r, n);
                            } catch (e) {
                              return e;
                            }
                          })(
                            r,
                            t,
                            function (r) {
                              n || ((n = !0), t !== r ? l(e, r) : d(e, r));
                            },
                            function (t) {
                              n || ((n = !0), p(e, t));
                            },
                            e._label,
                          );
                        !n && i && ((n = !0), p(e, i));
                      }, e);
                    })(e, r, n)
                  : d(e, r);
              }
              function l(e, t) {
                e === t
                  ? p(
                      e,
                      new TypeError("You cannot resolve a promise with itself"),
                    )
                  : !(function (e) {
                      var t = typeof e;
                      return null !== e && ("object" === t || "function" === t);
                    })(t)
                  ? d(e, t)
                  : h(e, t, f(t));
              }
              function c(e) {
                e._onerror && e._onerror(e._result), g(e);
              }
              function d(e, t) {
                e._state === B &&
                  ((e._result = t),
                  (e._state = D),
                  0 !== e._subscribers.length && K(g, e));
              }
              function p(e, t) {
                e._state === B && ((e._state = N), (e._result = t), K(c, e));
              }
              function y(e, t, r, n) {
                var i = e._subscribers,
                  s = i.length;
                (e._onerror = null),
                  (i[s] = t),
                  (i[s + D] = r),
                  (i[s + N] = n),
                  0 === s && e._state && K(g, e);
              }
              function g(e) {
                var t = e._subscribers,
                  r = e._state;
                if (0 !== t.length) {
                  for (
                    var n = void 0, i = void 0, s = e._result, a = 0;
                    a < t.length;
                    a += 3
                  )
                    (n = t[a]), (i = t[a + r]), n ? v(r, n, i, s) : i(s);
                  e._subscribers.length = 0;
                }
              }
              function m() {
                this.error = null;
              }
              function v(e, r, n, i) {
                var s = t(n),
                  a = void 0,
                  o = void 0,
                  u = void 0,
                  f = void 0;
                if (s) {
                  if (
                    ((a = (function (e, t) {
                      try {
                        return e(t);
                      } catch (e) {
                        return (R.error = e), R;
                      }
                    })(n, i)) === R
                      ? ((f = !0), (o = a.error), (a.error = null))
                      : (u = !0),
                    r === a)
                  )
                    return void p(
                      r,
                      new TypeError(
                        "A promises callback cannot return that same promise.",
                      ),
                    );
                } else (a = i), (u = !0);
                r._state !== B ||
                  (s && u
                    ? l(r, a)
                    : f
                    ? p(r, o)
                    : e === D
                    ? d(r, a)
                    : e === N && p(r, a));
              }
              function w(e) {
                (e[M] = H++),
                  (e._state = void 0),
                  (e._result = void 0),
                  (e._subscribers = []);
              }
              function b(e, t) {
                (this._instanceConstructor = e),
                  (this.promise = new e(u)),
                  this.promise[M] || w(this.promise),
                  _(t)
                    ? ((this.length = t.length),
                      (this._remaining = t.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? d(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(t),
                          0 === this._remaining &&
                            d(this.promise, this._result)))
                    : p(
                        this.promise,
                        new Error("Array Methods must be provided an Array"),
                      );
              }
              function k(e) {
                (this[M] = H++),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  u !== e &&
                    ("function" != typeof e &&
                      (function () {
                        throw new TypeError(
                          "You must pass a resolver function as the first argument to the promise constructor",
                        );
                      })(),
                    this instanceof k
                      ? (function (e, t) {
                          try {
                            t(
                              function (t) {
                                l(e, t);
                              },
                              function (t) {
                                p(e, t);
                              },
                            );
                          } catch (t) {
                            p(e, t);
                          }
                        })(this, e)
                      : (function () {
                          throw new TypeError(
                            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
                          );
                        })());
              }
              var A = void 0,
                _ = (A = Array.isArray
                  ? Array.isArray
                  : function (e) {
                      return (
                        "[object Array]" === Object.prototype.toString.call(e)
                      );
                    }),
                E = 0,
                S = void 0,
                U = void 0,
                K = function (e, t) {
                  (C[E] = e),
                    (C[E + 1] = t),
                    2 === (E += 2) && (U ? U(s) : I());
                },
                P = "undefined" != typeof window ? window : void 0,
                j = P || {},
                x = j.MutationObserver || j.WebKitMutationObserver,
                T =
                  "undefined" == typeof self &&
                  void 0 !== n &&
                  "[object process]" === {}.toString.call(n),
                O =
                  "undefined" != typeof Uint8ClampedArray &&
                  "undefined" != typeof importScripts &&
                  "undefined" != typeof MessageChannel,
                C = new Array(1e3),
                I = void 0;
              I = T
                ? function () {
                    return n.nextTick(s);
                  }
                : x
                ? (function () {
                    var e = 0,
                      t = new x(s),
                      r = document.createTextNode("");
                    return (
                      t.observe(r, { characterData: !0 }),
                      function () {
                        r.data = e = ++e % 2;
                      }
                    );
                  })()
                : O
                ? (function () {
                    var e = new MessageChannel();
                    return (
                      (e.port1.onmessage = s),
                      function () {
                        return e.port2.postMessage(0);
                      }
                    );
                  })()
                : void 0 === P && "function" == typeof e
                ? (function () {
                    try {
                      var t = e("vertx");
                      return void 0 !== (S = t.runOnLoop || t.runOnContext)
                        ? function () {
                            S(s);
                          }
                        : r();
                    } catch (e) {
                      return r();
                    }
                  })()
                : r();
              var M = Math.random().toString(36).substring(16),
                B = void 0,
                D = 1,
                N = 2,
                L = new m(),
                R = new m(),
                H = 0;
              return (
                (b.prototype._enumerate = function (e) {
                  for (var t = 0; this._state === B && t < e.length; t++)
                    this._eachEntry(e[t], t);
                }),
                (b.prototype._eachEntry = function (e, t) {
                  var r = this._instanceConstructor,
                    n = r.resolve;
                  if (n === o) {
                    var i = f(e);
                    if (i === a && e._state !== B)
                      this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof i)
                      this._remaining--, (this._result[t] = e);
                    else if (r === k) {
                      var s = new r(u);
                      h(s, e, i), this._willSettleAt(s, t);
                    } else
                      this._willSettleAt(
                        new r(function (t) {
                          return t(e);
                        }),
                        t,
                      );
                  } else this._willSettleAt(n(e), t);
                }),
                (b.prototype._settledAt = function (e, t, r) {
                  var n = this.promise;
                  n._state === B &&
                    (this._remaining--,
                    e === N ? p(n, r) : (this._result[t] = r)),
                    0 === this._remaining && d(n, this._result);
                }),
                (b.prototype._willSettleAt = function (e, t) {
                  var r = this;
                  y(
                    e,
                    void 0,
                    function (e) {
                      return r._settledAt(D, t, e);
                    },
                    function (e) {
                      return r._settledAt(N, t, e);
                    },
                  );
                }),
                (k.all = function (e) {
                  return new b(this, e).promise;
                }),
                (k.race = function (e) {
                  var t = this;
                  return new t(
                    _(e)
                      ? function (r, n) {
                          for (var i = e.length, s = 0; s < i; s++)
                            t.resolve(e[s]).then(r, n);
                        }
                      : function (e, t) {
                          return t(
                            new TypeError("You must pass an array to race."),
                          );
                        },
                  );
                }),
                (k.resolve = o),
                (k.reject = function (e) {
                  var t = new this(u);
                  return p(t, e), t;
                }),
                (k._setScheduler = function (e) {
                  U = e;
                }),
                (k._setAsap = function (e) {
                  K = e;
                }),
                (k._asap = K),
                (k.prototype = {
                  constructor: k,
                  then: a,
                  catch: function (e) {
                    return this.then(null, e);
                  },
                }),
                (k.polyfill = function () {
                  var e = void 0;
                  if (void 0 !== i) e = i;
                  else if ("undefined" != typeof self) e = self;
                  else
                    try {
                      e = Function("return this")();
                    } catch (e) {
                      throw new Error(
                        "polyfill failed because global object is unavailable in this environment",
                      );
                    }
                  var t = e.Promise;
                  if (t) {
                    var r = null;
                    try {
                      r = Object.prototype.toString.call(t.resolve());
                    } catch (e) {}
                    if ("[object Promise]" === r && !t.cast) return;
                  }
                  e.Promise = k;
                }),
                (k.Promise = k),
                k
              );
            });
          }).call(
            this,
            e("_process"),
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {},
          );
        },
        { _process: 3 },
      ],
      3: [
        function (e, t, r) {
          function n() {
            throw new Error("setTimeout has not been defined");
          }
          function i() {
            throw new Error("clearTimeout has not been defined");
          }
          function s(e) {
            if (h === setTimeout) return setTimeout(e, 0);
            if ((h === n || !h) && setTimeout)
              return (h = setTimeout), setTimeout(e, 0);
            try {
              return h(e, 0);
            } catch (t) {
              try {
                return h.call(null, e, 0);
              } catch (t) {
                return h.call(this, e, 0);
              }
            }
          }
          function a() {
            y &&
              d &&
              ((y = !1),
              d.length ? (p = d.concat(p)) : (g = -1),
              p.length && o());
          }
          function o() {
            if (!y) {
              var e = s(a);
              y = !0;
              for (var t = p.length; t; ) {
                for (d = p, p = []; ++g < t; ) d && d[g].run();
                (g = -1), (t = p.length);
              }
              (d = null),
                (y = !1),
                (function (e) {
                  if (l === clearTimeout) return clearTimeout(e);
                  if ((l === i || !l) && clearTimeout)
                    return (l = clearTimeout), clearTimeout(e);
                  try {
                    l(e);
                  } catch (t) {
                    try {
                      return l.call(null, e);
                    } catch (t) {
                      return l.call(this, e);
                    }
                  }
                })(e);
            }
          }
          function u(e, t) {
            (this.fun = e), (this.array = t);
          }
          function f() {}
          var h,
            l,
            c = (t.exports = {});
          !(function () {
            try {
              h = "function" == typeof setTimeout ? setTimeout : n;
            } catch (e) {
              h = n;
            }
            try {
              l = "function" == typeof clearTimeout ? clearTimeout : i;
            } catch (e) {
              l = i;
            }
          })();
          var d,
            p = [],
            y = !1,
            g = -1;
          (c.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            p.push(new u(e, t)), 1 !== p.length || y || s(o);
          }),
            (u.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (c.title = "browser"),
            (c.browser = !0),
            (c.env = {}),
            (c.argv = []),
            (c.version = ""),
            (c.versions = {}),
            (c.on = f),
            (c.addListener = f),
            (c.once = f),
            (c.off = f),
            (c.removeListener = f),
            (c.removeAllListeners = f),
            (c.emit = f),
            (c.prependListener = f),
            (c.prependOnceListener = f),
            (c.listeners = function (e) {
              return [];
            }),
            (c.binding = function (e) {
              throw new Error("process.binding is not supported");
            }),
            (c.cwd = function () {
              return "/";
            }),
            (c.chdir = function (e) {
              throw new Error("process.chdir is not supported");
            }),
            (c.umask = function () {
              return 0;
            });
        },
        {},
      ],
      4: [
        function (e, t, r) {
          (function (e) {
            !(function () {
              function r(t) {
                "use strict";
                for (
                  var i = function (t) {
                      if ("string" == typeof t) return "string";
                      if (t instanceof Array) return "array";
                      if (void 0 !== e && e.Buffer && e.Buffer.isBuffer(t))
                        return "buffer";
                      if (t instanceof ArrayBuffer) return "arraybuffer";
                      if (t.buffer instanceof ArrayBuffer) return "view";
                      if (t instanceof Blob) return "blob";
                      throw new Error("Unsupported data type.");
                    },
                    s = { fill: 0 },
                    a = function (e) {
                      for (e += 9; e % 64 > 0; e += 1);
                      return e;
                    },
                    o = function (e, t, r, n, i) {
                      var s,
                        a = i % 4,
                        o = (n + a) % 4,
                        u = n - o;
                      switch (a) {
                        case 0:
                          e[i] = this[r + 3];
                        case 1:
                          e[(i + 1 - (a << 1)) | 0] = this[r + 2];
                        case 2:
                          e[(i + 2 - (a << 1)) | 0] = this[r + 1];
                        case 3:
                          e[(i + 3 - (a << 1)) | 0] = this[r];
                      }
                      if (!(n < o + a)) {
                        for (s = 4 - a; s < u; s = (s + 4) | 0)
                          t[((i + s) >> 2) | 0] =
                            (this[r + s] << 24) |
                            (this[r + s + 1] << 16) |
                            (this[r + s + 2] << 8) |
                            this[r + s + 3];
                        switch (o) {
                          case 3:
                            e[(i + u + 1) | 0] = this[r + u + 2];
                          case 2:
                            e[(i + u + 2) | 0] = this[r + u + 1];
                          case 1:
                            e[(i + u + 3) | 0] = this[r + u];
                        }
                      }
                    },
                    u = function (e) {
                      switch (i(e)) {
                        case "string":
                          return function (e, t, r, n, i) {
                            var s,
                              a = i % 4,
                              o = (n + a) % 4,
                              u = n - o;
                            switch (a) {
                              case 0:
                                e[i] = this.charCodeAt(r + 3);
                              case 1:
                                e[(i + 1 - (a << 1)) | 0] = this.charCodeAt(
                                  r + 2,
                                );
                              case 2:
                                e[(i + 2 - (a << 1)) | 0] = this.charCodeAt(
                                  r + 1,
                                );
                              case 3:
                                e[(i + 3 - (a << 1)) | 0] = this.charCodeAt(r);
                            }
                            if (!(n < o + a)) {
                              for (s = 4 - a; s < u; s = (s + 4) | 0)
                                t[(i + s) >> 2] =
                                  (this.charCodeAt(r + s) << 24) |
                                  (this.charCodeAt(r + s + 1) << 16) |
                                  (this.charCodeAt(r + s + 2) << 8) |
                                  this.charCodeAt(r + s + 3);
                              switch (o) {
                                case 3:
                                  e[(i + u + 1) | 0] = this.charCodeAt(
                                    r + u + 2,
                                  );
                                case 2:
                                  e[(i + u + 2) | 0] = this.charCodeAt(
                                    r + u + 1,
                                  );
                                case 1:
                                  e[(i + u + 3) | 0] = this.charCodeAt(r + u);
                              }
                            }
                          }.bind(e);
                        case "array":
                        case "buffer":
                          return o.bind(e);
                        case "arraybuffer":
                          return o.bind(new Uint8Array(e));
                        case "view":
                          return o.bind(
                            new Uint8Array(
                              e.buffer,
                              e.byteOffset,
                              e.byteLength,
                            ),
                          );
                        case "blob":
                          return function (e, t, r, i, s) {
                            var a,
                              o = s % 4,
                              u = (i + o) % 4,
                              f = i - u,
                              h = new Uint8Array(
                                n.readAsArrayBuffer(this.slice(r, r + i)),
                              );
                            switch (o) {
                              case 0:
                                e[s] = h[3];
                              case 1:
                                e[(s + 1 - (o << 1)) | 0] = h[2];
                              case 2:
                                e[(s + 2 - (o << 1)) | 0] = h[1];
                              case 3:
                                e[(s + 3 - (o << 1)) | 0] = h[0];
                            }
                            if (!(i < u + o)) {
                              for (a = 4 - o; a < f; a = (a + 4) | 0)
                                t[((s + a) >> 2) | 0] =
                                  (h[a] << 24) |
                                  (h[a + 1] << 16) |
                                  (h[a + 2] << 8) |
                                  h[a + 3];
                              switch (u) {
                                case 3:
                                  e[(s + f + 1) | 0] = h[f + 2];
                                case 2:
                                  e[(s + f + 2) | 0] = h[f + 1];
                                case 1:
                                  e[(s + f + 3) | 0] = h[f];
                              }
                            }
                          }.bind(e);
                      }
                    },
                    f = new Array(256),
                    h = 0;
                  h < 256;
                  h++
                )
                  f[h] = (h < 16 ? "0" : "") + h.toString(16);
                var l = function (e) {
                  for (
                    var t = new Uint8Array(e),
                      r = new Array(e.byteLength),
                      n = 0;
                    n < r.length;
                    n++
                  )
                    r[n] = f[t[n]];
                  return r.join("");
                };
                !(function (e) {
                  if (e % 64 > 0)
                    throw new Error("Chunk size must be a multiple of 128 bit");
                  (s.offset = 0),
                    (s.maxChunkLen = e),
                    (s.padMaxChunkLen = a(e)),
                    (s.heap = new ArrayBuffer(
                      (function (e) {
                        var t;
                        if (e <= 65536) return 65536;
                        if (e < 16777216) for (t = 1; t < e; t <<= 1);
                        else for (t = 16777216; t < e; t += 16777216);
                        return t;
                      })(s.padMaxChunkLen + 320 + 20),
                    )),
                    (s.h32 = new Int32Array(s.heap)),
                    (s.h8 = new Int8Array(s.heap)),
                    (s.core = new r._core(
                      { Int32Array: Int32Array, DataView: DataView },
                      {},
                      s.heap,
                    )),
                    (s.buffer = null);
                })(t || 65536);
                var c = function (e, t) {
                    s.offset = 0;
                    var r = new Int32Array(e, t + 320, 5);
                    (r[0] = 1732584193),
                      (r[1] = -271733879),
                      (r[2] = -1732584194),
                      (r[3] = 271733878),
                      (r[4] = -1009589776);
                  },
                  d = function (e, t) {
                    var r = a(e),
                      n = new Int32Array(s.heap, 0, r >> 2);
                    return (
                      (function (e, t) {
                        var r = new Uint8Array(e.buffer),
                          n = t % 4,
                          i = t - n;
                        switch (n) {
                          case 0:
                            r[i + 3] = 0;
                          case 1:
                            r[i + 2] = 0;
                          case 2:
                            r[i + 1] = 0;
                          case 3:
                            r[i + 0] = 0;
                        }
                        for (var s = 1 + (t >> 2); s < e.length; s++) e[s] = 0;
                      })(n, e),
                      (function (e, t, r) {
                        (e[t >> 2] |= 128 << (24 - (t % 4 << 3))),
                          (e[14 + ((2 + (t >> 2)) & -16)] =
                            (r / (1 << 29)) | 0),
                          (e[15 + ((2 + (t >> 2)) & -16)] = r << 3);
                      })(n, e, t),
                      r
                    );
                  },
                  p = function (e, t, r, n) {
                    u(e)(s.h8, s.h32, t, r, n || 0);
                  },
                  y = function (e, t, r, n, i) {
                    var a = r;
                    p(e, t, r),
                      i && (a = d(r, n)),
                      s.core.hash(a, s.padMaxChunkLen);
                  },
                  g = function (e, t) {
                    var r = new Int32Array(e, t + 320, 5),
                      n = new Int32Array(5),
                      i = new DataView(n.buffer);
                    return (
                      i.setInt32(0, r[0], !1),
                      i.setInt32(4, r[1], !1),
                      i.setInt32(8, r[2], !1),
                      i.setInt32(12, r[3], !1),
                      i.setInt32(16, r[4], !1),
                      n
                    );
                  },
                  m = (this.rawDigest = function (e) {
                    var t = e.byteLength || e.length || e.size || 0;
                    c(s.heap, s.padMaxChunkLen);
                    var r = 0,
                      n = s.maxChunkLen;
                    for (r = 0; t > r + n; r += n) y(e, r, n, t, !1);
                    return y(e, r, t - r, t, !0), g(s.heap, s.padMaxChunkLen);
                  });
                (this.digest =
                  this.digestFromString =
                  this.digestFromBuffer =
                  this.digestFromArrayBuffer =
                    function (e) {
                      return l(m(e).buffer);
                    }),
                  (this.resetState = function () {
                    return c(s.heap, s.padMaxChunkLen), this;
                  }),
                  (this.append = function (e) {
                    var t,
                      r = 0,
                      n = e.byteLength || e.length || e.size || 0,
                      i = s.offset % s.maxChunkLen;
                    for (s.offset += n; r < n; )
                      (t = Math.min(n - r, s.maxChunkLen - i)),
                        p(e, r, t, i),
                        (r += t),
                        (i += t) === s.maxChunkLen &&
                          (s.core.hash(s.maxChunkLen, s.padMaxChunkLen),
                          (i = 0));
                    return this;
                  }),
                  (this.getState = function () {
                    var e;
                    if (s.offset % s.maxChunkLen) e = s.heap.slice(0);
                    else {
                      var t = new Int32Array(s.heap, s.padMaxChunkLen + 320, 5);
                      e = t.buffer.slice(
                        t.byteOffset,
                        t.byteOffset + t.byteLength,
                      );
                    }
                    return { offset: s.offset, heap: e };
                  }),
                  (this.setState = function (e) {
                    if (((s.offset = e.offset), 20 === e.heap.byteLength)) {
                      new Int32Array(s.heap, s.padMaxChunkLen + 320, 5).set(
                        new Int32Array(e.heap),
                      );
                    } else s.h32.set(new Int32Array(e.heap));
                    return this;
                  });
                var v = (this.rawEnd = function () {
                  var e = s.offset,
                    t = e % s.maxChunkLen,
                    r = d(t, e);
                  s.core.hash(r, s.padMaxChunkLen);
                  var n = g(s.heap, s.padMaxChunkLen);
                  return c(s.heap, s.padMaxChunkLen), n;
                });
                this.end = function () {
                  return l(v().buffer);
                };
              }
              if (
                ((r._core = function (e, t, r) {
                  "use asm";
                  var n = new e.Int32Array(r);
                  function i(e, t) {
                    e = e | 0;
                    t = t | 0;
                    var r = 0,
                      i = 0,
                      s = 0,
                      a = 0,
                      o = 0,
                      u = 0,
                      f = 0,
                      h = 0,
                      l = 0,
                      c = 0,
                      d = 0,
                      p = 0,
                      y = 0,
                      g = 0;
                    s = n[(t + 320) >> 2] | 0;
                    o = n[(t + 324) >> 2] | 0;
                    f = n[(t + 328) >> 2] | 0;
                    l = n[(t + 332) >> 2] | 0;
                    d = n[(t + 336) >> 2] | 0;
                    for (r = 0; (r | 0) < (e | 0); r = (r + 64) | 0) {
                      a = s;
                      u = o;
                      h = f;
                      c = l;
                      p = d;
                      for (i = 0; (i | 0) < 64; i = (i + 4) | 0) {
                        g = n[(r + i) >> 2] | 0;
                        y =
                          (((((s << 5) | (s >>> 27)) + ((o & f) | (~o & l))) |
                            0) +
                            ((((g + d) | 0) + 1518500249) | 0)) |
                          0;
                        d = l;
                        l = f;
                        f = (o << 30) | (o >>> 2);
                        o = s;
                        s = y;
                        n[(e + i) >> 2] = g;
                      }
                      for (
                        i = (e + 64) | 0;
                        (i | 0) < ((e + 80) | 0);
                        i = (i + 4) | 0
                      ) {
                        g =
                          ((n[(i - 12) >> 2] ^
                            n[(i - 32) >> 2] ^
                            n[(i - 56) >> 2] ^
                            n[(i - 64) >> 2]) <<
                            1) |
                          ((n[(i - 12) >> 2] ^
                            n[(i - 32) >> 2] ^
                            n[(i - 56) >> 2] ^
                            n[(i - 64) >> 2]) >>>
                            31);
                        y =
                          (((((s << 5) | (s >>> 27)) + ((o & f) | (~o & l))) |
                            0) +
                            ((((g + d) | 0) + 1518500249) | 0)) |
                          0;
                        d = l;
                        l = f;
                        f = (o << 30) | (o >>> 2);
                        o = s;
                        s = y;
                        n[i >> 2] = g;
                      }
                      for (
                        i = (e + 80) | 0;
                        (i | 0) < ((e + 160) | 0);
                        i = (i + 4) | 0
                      ) {
                        g =
                          ((n[(i - 12) >> 2] ^
                            n[(i - 32) >> 2] ^
                            n[(i - 56) >> 2] ^
                            n[(i - 64) >> 2]) <<
                            1) |
                          ((n[(i - 12) >> 2] ^
                            n[(i - 32) >> 2] ^
                            n[(i - 56) >> 2] ^
                            n[(i - 64) >> 2]) >>>
                            31);
                        y =
                          (((((s << 5) | (s >>> 27)) + (o ^ f ^ l)) | 0) +
                            ((((g + d) | 0) + 1859775393) | 0)) |
                          0;
                        d = l;
                        l = f;
                        f = (o << 30) | (o >>> 2);
                        o = s;
                        s = y;
                        n[i >> 2] = g;
                      }
                      for (
                        i = (e + 160) | 0;
                        (i | 0) < ((e + 240) | 0);
                        i = (i + 4) | 0
                      ) {
                        g =
                          ((n[(i - 12) >> 2] ^
                            n[(i - 32) >> 2] ^
                            n[(i - 56) >> 2] ^
                            n[(i - 64) >> 2]) <<
                            1) |
                          ((n[(i - 12) >> 2] ^
                            n[(i - 32) >> 2] ^
                            n[(i - 56) >> 2] ^
                            n[(i - 64) >> 2]) >>>
                            31);
                        y =
                          (((((s << 5) | (s >>> 27)) +
                            ((o & f) | (o & l) | (f & l))) |
                            0) +
                            ((((g + d) | 0) - 1894007588) | 0)) |
                          0;
                        d = l;
                        l = f;
                        f = (o << 30) | (o >>> 2);
                        o = s;
                        s = y;
                        n[i >> 2] = g;
                      }
                      for (
                        i = (e + 240) | 0;
                        (i | 0) < ((e + 320) | 0);
                        i = (i + 4) | 0
                      ) {
                        g =
                          ((n[(i - 12) >> 2] ^
                            n[(i - 32) >> 2] ^
                            n[(i - 56) >> 2] ^
                            n[(i - 64) >> 2]) <<
                            1) |
                          ((n[(i - 12) >> 2] ^
                            n[(i - 32) >> 2] ^
                            n[(i - 56) >> 2] ^
                            n[(i - 64) >> 2]) >>>
                            31);
                        y =
                          (((((s << 5) | (s >>> 27)) + (o ^ f ^ l)) | 0) +
                            ((((g + d) | 0) - 899497514) | 0)) |
                          0;
                        d = l;
                        l = f;
                        f = (o << 30) | (o >>> 2);
                        o = s;
                        s = y;
                        n[i >> 2] = g;
                      }
                      s = (s + a) | 0;
                      o = (o + u) | 0;
                      f = (f + h) | 0;
                      l = (l + c) | 0;
                      d = (d + p) | 0;
                    }
                    n[(t + 320) >> 2] = s;
                    n[(t + 324) >> 2] = o;
                    n[(t + 328) >> 2] = f;
                    n[(t + 332) >> 2] = l;
                    n[(t + 336) >> 2] = d;
                  }
                  return { hash: i };
                }),
                void 0 !== t
                  ? (t.exports = r)
                  : "undefined" != typeof window && (window.Rusha = r),
                "undefined" != typeof FileReaderSync)
              ) {
                var n = new FileReaderSync(),
                  i = function (e, t, r, n, s) {
                    var a = new self.FileReader();
                    (a.onloadend = function () {
                      var o = a.result;
                      t += a.result.byteLength;
                      try {
                        e.append(o);
                      } catch (e) {
                        return void s(e);
                      }
                      t < n.size ? i(e, t, r, n, s) : s(null, e.end());
                    }),
                      a.readAsArrayBuffer(n.slice(t, t + r));
                  };
                self.onmessage = function (e) {
                  var t = e.data.data,
                    n = e.data.file,
                    s = e.data.id;
                  if (void 0 !== s && (n || t)) {
                    var a = e.data.blockSize || 4194304,
                      o = new r(a);
                    o.resetState();
                    var u = function (e, t) {
                      e
                        ? self.postMessage({ id: s, error: e.name })
                        : self.postMessage({ id: s, hash: t });
                    };
                    t &&
                      (function (e, t, r) {
                        try {
                          r(null, e.digest(t));
                        } catch (e) {
                          return r(e);
                        }
                      })(o, t, u),
                      n && i(o, 0, a, n, u);
                  }
                };
              }
            })();
          }).call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {},
          );
        },
        {},
      ],
      5: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i(e, t) {
            if (!(this instanceof i)) return new i(e, t);
            if (
              ((this.text = e
                .replace(/\r/g, "")
                .replace(/[\t ]+\n/g, "\n")
                .replace(/\n/g, "\r\n")),
              t && !(t instanceof f.Signature))
            )
              throw new Error("Invalid signature input");
            this.signature = t || new f.Signature(new a.default.List());
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.CleartextMessage = i),
            (r.readArmored = function (e) {
              var t = u.default.decode(e);
              if (t.type !== o.default.armor.signed)
                throw new Error("No cleartext signed message.");
              var r = new a.default.List();
              r.read(t.data),
                (function (e, t) {
                  var r = function (e) {
                      function r(e) {
                        return t[n].hashAlgorithm === e;
                      }
                      for (var n = 0; n < t.length; n++)
                        if (
                          t[n].tag === o.default.packet.signature &&
                          !e.some(r)
                        )
                          return !1;
                      return !0;
                    },
                    n = null,
                    i = [];
                  if (
                    (e.forEach(function (e) {
                      if (!(n = e.match(/Hash: (.+)/)))
                        throw new Error(
                          'Only "Hash" header allowed in cleartext signed message',
                        );
                      (n = (n = (n = n[1].replace(/\s/g, "")).split(",")).map(
                        function (e) {
                          e = e.toLowerCase();
                          try {
                            return o.default.write(o.default.hash, e);
                          } catch (t) {
                            throw new Error(
                              "Unknown hash algorithm in armor header: " + e,
                            );
                          }
                        },
                      )),
                        (i = i.concat(n));
                    }),
                    !i.length && !r([o.default.hash.md5]))
                  )
                    throw new Error(
                      'If no "Hash" header in cleartext signed message, then only MD5 signatures allowed',
                    );
                  if (!r(i))
                    throw new Error(
                      "Hash algorithm mismatch in armor header and signature",
                    );
                })(t.headers, r);
              var n = new f.Signature(r);
              return new i(t.text, n);
            });
          var s = n(e("./config")),
            a = n(e("./packet")),
            o = n(e("./enums.js")),
            u = n(e("./encoding/armor.js")),
            f = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("./signature.js"));
          (i.prototype.getSigningKeyIds = function () {
            var e = [];
            return (
              this.signature.packets.forEach(function (t) {
                e.push(t.issuerKeyId);
              }),
              e
            );
          }),
            (i.prototype.sign = function (e) {
              return new i(this.text, this.signDetached(e));
            }),
            (i.prototype.signDetached = function (e) {
              var t = new a.default.List(),
                r = new a.default.Literal();
              r.setText(this.text);
              for (var n = 0; n < e.length; n++) {
                if (e[n].isPublic())
                  throw new Error("Need private key for signing");
                var i = new a.default.Signature();
                (i.signatureType = o.default.signature.text),
                  (i.hashAlgorithm = s.default.prefer_hash_algorithm);
                var u = e[n].getSigningKeyPacket();
                if (((i.publicKeyAlgorithm = u.algorithm), !u.isDecrypted))
                  throw new Error("Private key is not decrypted.");
                i.sign(u, r), t.push(i);
              }
              return new f.Signature(t);
            }),
            (i.prototype.verify = function (e) {
              return this.verifyDetached(this.signature, e);
            }),
            (i.prototype.verifyDetached = function (e, t) {
              var r = [],
                n = e.packets,
                i = new a.default.Literal();
              i.setText(this.text);
              for (var s = 0; s < n.length; s++) {
                for (
                  var o = null, u = 0;
                  u < t.length &&
                  !(o = t[u].getSigningKeyPacket(n[s].issuerKeyId));
                  u++
                );
                var h = {};
                o
                  ? ((h.keyid = n[s].issuerKeyId),
                    (h.valid = n[s].verify(o, i)))
                  : ((h.keyid = n[s].issuerKeyId), (h.valid = null));
                var l = new a.default.List();
                l.push(n[s]), (h.signature = new f.Signature(l)), r.push(h);
              }
              return r;
            }),
            (i.prototype.getText = function () {
              return this.text.replace(/\r\n/g, "\n");
            }),
            (i.prototype.armor = function () {
              var e = {
                hash: o.default
                  .read(o.default.hash, s.default.prefer_hash_algorithm)
                  .toUpperCase(),
                text: this.text,
                data: this.signature.packets.write(),
              };
              return u.default.encode(o.default.armor.signed, e);
            });
        },
        {
          "./config": 10,
          "./encoding/armor.js": 33,
          "./enums.js": 35,
          "./packet": 47,
          "./signature.js": 66,
        },
      ],
      6: [
        function (e, t, r) {
          (function () {
            "use strict";
            function e(e, t) {
              var r = e.split("."),
                n = h;
              !(r[0] in n) && n.execScript && n.execScript("var " + r[0]);
              for (var i; r.length && (i = r.shift()); )
                r.length || t === u
                  ? (n = n[i] ? n[i] : (n[i] = {}))
                  : (n[i] = t);
            }
            function t(e, t) {
              if (
                ((this.index = "number" == typeof t ? t : 0),
                (this.d = 0),
                (this.buffer =
                  e instanceof (l ? Uint8Array : Array)
                    ? e
                    : new (l ? Uint8Array : Array)(32768)),
                2 * this.buffer.length <= this.index)
              )
                throw Error("invalid index");
              this.buffer.length <= this.index && r(this);
            }
            function r(e) {
              var t,
                r = e.buffer,
                n = r.length,
                i = new (l ? Uint8Array : Array)(n << 1);
              if (l) i.set(r);
              else for (t = 0; t < n; ++t) i[t] = r[t];
              return (e.buffer = i);
            }
            function n(e) {
              (this.buffer = new (l ? Uint16Array : Array)(2 * e)),
                (this.length = 0);
            }
            function i(e, t) {
              (this.e = w),
                (this.f = 0),
                (this.input = l && e instanceof Array ? new Uint8Array(e) : e),
                (this.c = 0),
                t &&
                  (t.lazy && (this.f = t.lazy),
                  "number" == typeof t.compressionType &&
                    (this.e = t.compressionType),
                  t.outputBuffer &&
                    (this.b =
                      l && t.outputBuffer instanceof Array
                        ? new Uint8Array(t.outputBuffer)
                        : t.outputBuffer),
                  "number" == typeof t.outputIndex && (this.c = t.outputIndex)),
                this.b || (this.b = new (l ? Uint8Array : Array)(32768));
            }
            function s(e, t) {
              function r(e, t) {
                var r,
                  n = e.g,
                  i = [],
                  s = 0;
                (r = A[e.length]),
                  (i[s++] = 65535 & r),
                  (i[s++] = (r >> 16) & 255),
                  (i[s++] = r >> 24);
                var a;
                switch (f) {
                  case 1 === n:
                    a = [0, n - 1, 0];
                    break;
                  case 2 === n:
                    a = [1, n - 2, 0];
                    break;
                  case 3 === n:
                    a = [2, n - 3, 0];
                    break;
                  case 4 === n:
                    a = [3, n - 4, 0];
                    break;
                  case 6 >= n:
                    a = [4, n - 5, 1];
                    break;
                  case 8 >= n:
                    a = [5, n - 7, 1];
                    break;
                  case 12 >= n:
                    a = [6, n - 9, 2];
                    break;
                  case 16 >= n:
                    a = [7, n - 13, 2];
                    break;
                  case 24 >= n:
                    a = [8, n - 17, 3];
                    break;
                  case 32 >= n:
                    a = [9, n - 25, 3];
                    break;
                  case 48 >= n:
                    a = [10, n - 33, 4];
                    break;
                  case 64 >= n:
                    a = [11, n - 49, 4];
                    break;
                  case 96 >= n:
                    a = [12, n - 65, 5];
                    break;
                  case 128 >= n:
                    a = [13, n - 97, 5];
                    break;
                  case 192 >= n:
                    a = [14, n - 129, 6];
                    break;
                  case 256 >= n:
                    a = [15, n - 193, 6];
                    break;
                  case 384 >= n:
                    a = [16, n - 257, 7];
                    break;
                  case 512 >= n:
                    a = [17, n - 385, 7];
                    break;
                  case 768 >= n:
                    a = [18, n - 513, 8];
                    break;
                  case 1024 >= n:
                    a = [19, n - 769, 8];
                    break;
                  case 1536 >= n:
                    a = [20, n - 1025, 9];
                    break;
                  case 2048 >= n:
                    a = [21, n - 1537, 9];
                    break;
                  case 3072 >= n:
                    a = [22, n - 2049, 10];
                    break;
                  case 4096 >= n:
                    a = [23, n - 3073, 10];
                    break;
                  case 6144 >= n:
                    a = [24, n - 4097, 11];
                    break;
                  case 8192 >= n:
                    a = [25, n - 6145, 11];
                    break;
                  case 12288 >= n:
                    a = [26, n - 8193, 12];
                    break;
                  case 16384 >= n:
                    a = [27, n - 12289, 12];
                    break;
                  case 24576 >= n:
                    a = [28, n - 16385, 13];
                    break;
                  case 32768 >= n:
                    a = [29, n - 24577, 13];
                    break;
                  default:
                    throw "invalid distance";
                }
                (r = a), (i[s++] = r[0]), (i[s++] = r[1]), (i[s++] = r[2]);
                var o, u;
                for (o = 0, u = i.length; o < u; ++o) g[m++] = i[o];
                w[i[0]]++, b[i[3]]++, (v = e.length + t - 1), (d = null);
              }
              var n,
                i,
                s,
                a,
                o,
                h,
                c,
                d,
                p,
                y = {},
                g = l ? new Uint16Array(2 * t.length) : [],
                m = 0,
                v = 0,
                w = new (l ? Uint32Array : Array)(286),
                b = new (l ? Uint32Array : Array)(30),
                k = e.f;
              if (!l) {
                for (s = 0; 285 >= s; ) w[s++] = 0;
                for (s = 0; 29 >= s; ) b[s++] = 0;
              }
              for (w[256] = 1, n = 0, i = t.length; n < i; ++n) {
                for (s = o = 0, a = 3; s < a && n + s !== i; ++s)
                  o = (o << 8) | t[n + s];
                if ((y[o] === u && (y[o] = []), (h = y[o]), !(0 < v--))) {
                  for (; 0 < h.length && 32768 < n - h[0]; ) h.shift();
                  if (n + 3 >= i) {
                    for (d && r(d, -1), s = 0, a = i - n; s < a; ++s)
                      (p = t[n + s]), (g[m++] = p), ++w[p];
                    break;
                  }
                  0 < h.length
                    ? ((c = (function (e, t, r) {
                        var n,
                          i,
                          s,
                          a,
                          o,
                          u,
                          f = 0,
                          h = e.length;
                        (a = 0), (u = r.length);
                        e: for (; a < u; a++) {
                          if (((n = r[u - a - 1]), (s = 3), 3 < f)) {
                            for (o = f; 3 < o; o--)
                              if (e[n + o - 1] !== e[t + o - 1]) continue e;
                            s = f;
                          }
                          for (
                            ;
                            258 > s && t + s < h && e[n + s] === e[t + s];

                          )
                            ++s;
                          if ((s > f && ((i = n), (f = s)), 258 === s)) break;
                        }
                        return new (function (e, t) {
                          (this.length = e), (this.g = t);
                        })(f, t - i);
                      })(t, n, h)),
                      d
                        ? d.length < c.length
                          ? ((p = t[n - 1]), (g[m++] = p), ++w[p], r(c, 0))
                          : r(d, -1)
                        : c.length < k
                        ? (d = c)
                        : r(c, 0))
                    : d
                    ? r(d, -1)
                    : ((p = t[n]), (g[m++] = p), ++w[p]);
                }
                h.push(n);
              }
              return (
                (g[m++] = 256),
                w[256]++,
                (e.j = w),
                (e.i = b),
                l ? g.subarray(0, m) : g
              );
            }
            function a(e, t) {
              var r,
                i,
                s,
                a,
                o,
                u = e.length,
                f = new n(572),
                h = new (l ? Uint8Array : Array)(u);
              if (!l) for (a = 0; a < u; a++) h[a] = 0;
              for (a = 0; a < u; ++a) 0 < e[a] && f.push(a, e[a]);
              if (
                ((r = Array(f.length / 2)),
                (i = new (l ? Uint32Array : Array)(f.length / 2)),
                1 === r.length)
              )
                return (h[f.pop().index] = 1), h;
              for (a = 0, o = f.length / 2; a < o; ++a)
                (r[a] = f.pop()), (i[a] = r[a].value);
              for (
                s = (function (e, t, r) {
                  function n(e) {
                    var r = p[e][y[e]];
                    r === t ? (n(e + 1), n(e + 1)) : --c[r], ++y[e];
                  }
                  var i,
                    s,
                    a,
                    o,
                    u,
                    f = new (l ? Uint16Array : Array)(r),
                    h = new (l ? Uint8Array : Array)(r),
                    c = new (l ? Uint8Array : Array)(t),
                    d = Array(r),
                    p = Array(r),
                    y = Array(r),
                    g = (1 << r) - t,
                    m = 1 << (r - 1);
                  for (f[r - 1] = t, s = 0; s < r; ++s)
                    g < m ? (h[s] = 0) : ((h[s] = 1), (g -= m)),
                      (g <<= 1),
                      (f[r - 2 - s] = ((f[r - 1 - s] / 2) | 0) + t);
                  for (
                    f[0] = h[0], d[0] = Array(f[0]), p[0] = Array(f[0]), s = 1;
                    s < r;
                    ++s
                  )
                    f[s] > 2 * f[s - 1] + h[s] && (f[s] = 2 * f[s - 1] + h[s]),
                      (d[s] = Array(f[s])),
                      (p[s] = Array(f[s]));
                  for (i = 0; i < t; ++i) c[i] = r;
                  for (a = 0; a < f[r - 1]; ++a)
                    (d[r - 1][a] = e[a]), (p[r - 1][a] = a);
                  for (i = 0; i < r; ++i) y[i] = 0;
                  for (
                    1 === h[r - 1] && (--c[0], ++y[r - 1]), s = r - 2;
                    0 <= s;
                    --s
                  ) {
                    for (o = i = 0, u = y[s + 1], a = 0; a < f[s]; a++)
                      (o = d[s + 1][u] + d[s + 1][u + 1]) > e[i]
                        ? ((d[s][a] = o), (p[s][a] = t), (u += 2))
                        : ((d[s][a] = e[i]), (p[s][a] = i), ++i);
                    (y[s] = 0), 1 === h[s] && n(s);
                  }
                  return c;
                })(i, i.length, t),
                  a = 0,
                  o = r.length;
                a < o;
                ++a
              )
                h[r[a].index] = s[a];
              return h;
            }
            function o(e) {
              var t,
                r,
                n,
                i,
                s = new (l ? Uint16Array : Array)(e.length),
                a = [],
                o = [],
                u = 0;
              for (t = 0, r = e.length; t < r; t++) a[e[t]] = 1 + (0 | a[e[t]]);
              for (t = 1, r = 16; t <= r; t++)
                (o[t] = u), (u += 0 | a[t]), (u <<= 1);
              for (t = 0, r = e.length; t < r; t++)
                for (
                  u = o[e[t]], o[e[t]] += 1, n = s[t] = 0, i = e[t];
                  n < i;
                  n++
                )
                  (s[t] = (s[t] << 1) | (1 & u)), (u >>>= 1);
              return s;
            }
            var u = void 0,
              f = !0,
              h = this,
              l =
                "undefined" != typeof Uint8Array &&
                "undefined" != typeof Uint16Array &&
                "undefined" != typeof Uint32Array &&
                "undefined" != typeof DataView;
            (t.prototype.a = function (e, t, n) {
              var i,
                s = this.buffer,
                a = this.index,
                o = this.d,
                u = s[a];
              if (
                (n &&
                  1 < t &&
                  (e =
                    8 < t
                      ? ((m[255 & e] << 24) |
                          (m[(e >>> 8) & 255] << 16) |
                          (m[(e >>> 16) & 255] << 8) |
                          m[(e >>> 24) & 255]) >>
                        (32 - t)
                      : m[e] >> (8 - t)),
                8 > t + o)
              )
                (u = (u << t) | e), (o += t);
              else
                for (i = 0; i < t; ++i)
                  (u = (u << 1) | ((e >> (t - i - 1)) & 1)),
                    8 == ++o &&
                      ((o = 0),
                      (s[a++] = m[u]),
                      (u = 0),
                      a === s.length && (s = r(this)));
              (s[a] = u), (this.buffer = s), (this.d = o), (this.index = a);
            }),
              (t.prototype.finish = function () {
                var e,
                  t = this.buffer,
                  r = this.index;
                return (
                  0 < this.d && ((t[r] <<= 8 - this.d), (t[r] = m[t[r]]), r++),
                  l ? (e = t.subarray(0, r)) : ((t.length = r), (e = t)),
                  e
                );
              });
            var c,
              d = new (l ? Uint8Array : Array)(256);
            for (c = 0; 256 > c; ++c) {
              for (var p = (g = c), y = 7, g = g >>> 1; g; g >>>= 1)
                (p <<= 1), (p |= 1 & g), --y;
              d[c] = ((p << y) & 255) >>> 0;
            }
            var m = d;
            (n.prototype.getParent = function (e) {
              return 2 * (((e - 2) / 4) | 0);
            }),
              (n.prototype.push = function (e, t) {
                var r,
                  n,
                  i,
                  s = this.buffer;
                for (
                  r = this.length, s[this.length++] = t, s[this.length++] = e;
                  0 < r && ((n = this.getParent(r)), s[r] > s[n]);

                )
                  (i = s[r]),
                    (s[r] = s[n]),
                    (s[n] = i),
                    (i = s[r + 1]),
                    (s[r + 1] = s[n + 1]),
                    (s[n + 1] = i),
                    (r = n);
                return this.length;
              }),
              (n.prototype.pop = function () {
                var e,
                  t,
                  r,
                  n,
                  i,
                  s = this.buffer;
                for (
                  t = s[0],
                    e = s[1],
                    this.length -= 2,
                    s[0] = s[this.length],
                    s[1] = s[this.length + 1],
                    i = 0;
                  !((n = 2 * i + 2) >= this.length) &&
                  (n + 2 < this.length && s[n + 2] > s[n] && (n += 2),
                  s[n] > s[i]);

                )
                  (r = s[i]),
                    (s[i] = s[n]),
                    (s[n] = r),
                    (r = s[i + 1]),
                    (s[i + 1] = s[n + 1]),
                    (s[n + 1] = r),
                    (i = n);
                return { index: e, value: t, length: this.length };
              });
            var v,
              w = 2,
              b = [];
            for (v = 0; 288 > v; v++)
              switch (f) {
                case 143 >= v:
                  b.push([v + 48, 8]);
                  break;
                case 255 >= v:
                  b.push([v - 144 + 400, 9]);
                  break;
                case 279 >= v:
                  b.push([v - 256 + 0, 7]);
                  break;
                case 287 >= v:
                  b.push([v - 280 + 192, 8]);
                  break;
                default:
                  throw "invalid literal: " + v;
              }
            i.prototype.h = function () {
              var e,
                r,
                n,
                i,
                h = this.input;
              switch (this.e) {
                case 0:
                  for (n = 0, i = h.length; n < i; ) {
                    var c = (r = l
                        ? h.subarray(n, n + 65535)
                        : h.slice(n, n + 65535)),
                      d = (n += r.length) === i,
                      p = u,
                      y = u,
                      g = u,
                      m = u,
                      v = u,
                      k = this.b,
                      A = this.c;
                    if (l) {
                      for (
                        k = new Uint8Array(this.b.buffer);
                        k.length <= A + c.length + 5;

                      )
                        k = new Uint8Array(k.length << 1);
                      k.set(this.b);
                    }
                    if (
                      ((p = d ? 1 : 0),
                      (k[A++] = 0 | p),
                      (y = c.length),
                      (g = (65536 + ~y) & 65535),
                      (k[A++] = 255 & y),
                      (k[A++] = (y >>> 8) & 255),
                      (k[A++] = 255 & g),
                      (k[A++] = (g >>> 8) & 255),
                      l)
                    )
                      k.set(c, A), (A += c.length), (k = k.subarray(0, A));
                    else {
                      for (m = 0, v = c.length; m < v; ++m) k[A++] = c[m];
                      k.length = A;
                    }
                    (this.c = A), (this.b = k);
                  }
                  break;
                case 1:
                  var _ = new t(
                    l ? new Uint8Array(this.b.buffer) : this.b,
                    this.c,
                  );
                  _.a(1, 1, f), _.a(1, 2, f);
                  var E,
                    S,
                    U,
                    K = s(this, h);
                  for (E = 0, S = K.length; E < S; E++)
                    if (((U = K[E]), t.prototype.a.apply(_, b[U]), 256 < U))
                      _.a(K[++E], K[++E], f),
                        _.a(K[++E], 5),
                        _.a(K[++E], K[++E], f);
                    else if (256 === U) break;
                  (this.b = _.finish()), (this.c = this.b.length);
                  break;
                case w:
                  var P,
                    j,
                    x,
                    T,
                    O,
                    C,
                    I,
                    M,
                    B,
                    D,
                    N,
                    L,
                    R,
                    H,
                    F,
                    z = new t(
                      l ? new Uint8Array(this.b.buffer) : this.b,
                      this.c,
                    ),
                    q = [
                      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                      1, 15,
                    ],
                    G = Array(19);
                  for (
                    P = w,
                      z.a(1, 1, f),
                      z.a(P, 2, f),
                      j = s(this, h),
                      I = o((C = a(this.j, 15))),
                      B = o((M = a(this.i, 7))),
                      x = 286;
                    257 < x && 0 === C[x - 1];
                    x--
                  );
                  for (T = 30; 1 < T && 0 === M[T - 1]; T--);
                  var V,
                    Z,
                    Y,
                    X,
                    W,
                    $,
                    J = x,
                    Q = T,
                    ee = new (l ? Uint32Array : Array)(J + Q),
                    te = new (l ? Uint32Array : Array)(316),
                    re = new (l ? Uint8Array : Array)(19);
                  for (V = Z = 0; V < J; V++) ee[Z++] = C[V];
                  for (V = 0; V < Q; V++) ee[Z++] = M[V];
                  if (!l) for (V = 0, X = re.length; V < X; ++V) re[V] = 0;
                  for (V = W = 0, X = ee.length; V < X; V += Z) {
                    for (Z = 1; V + Z < X && ee[V + Z] === ee[V]; ++Z);
                    if (((Y = Z), 0 === ee[V]))
                      if (3 > Y) for (; 0 < Y--; ) (te[W++] = 0), re[0]++;
                      else
                        for (; 0 < Y; )
                          ($ = 138 > Y ? Y : 138) > Y - 3 &&
                            $ < Y &&
                            ($ = Y - 3),
                            10 >= $
                              ? ((te[W++] = 17), (te[W++] = $ - 3), re[17]++)
                              : ((te[W++] = 18), (te[W++] = $ - 11), re[18]++),
                            (Y -= $);
                    else if (((te[W++] = ee[V]), re[ee[V]]++, 3 > --Y))
                      for (; 0 < Y--; ) (te[W++] = ee[V]), re[ee[V]]++;
                    else
                      for (; 0 < Y; )
                        ($ = 6 > Y ? Y : 6) > Y - 3 && $ < Y && ($ = Y - 3),
                          (te[W++] = 16),
                          (te[W++] = $ - 3),
                          re[16]++,
                          (Y -= $);
                  }
                  for (
                    e = l ? te.subarray(0, W) : te.slice(0, W),
                      D = a(re, 7),
                      H = 0;
                    19 > H;
                    H++
                  )
                    G[H] = D[q[H]];
                  for (O = 19; 4 < O && 0 === G[O - 1]; O--);
                  for (
                    N = o(D),
                      z.a(x - 257, 5, f),
                      z.a(T - 1, 5, f),
                      z.a(O - 4, 4, f),
                      H = 0;
                    H < O;
                    H++
                  )
                    z.a(G[H], 3, f);
                  for (H = 0, F = e.length; H < F; H++)
                    if (((L = e[H]), z.a(N[L], D[L], f), 16 <= L)) {
                      switch ((H++, L)) {
                        case 16:
                          R = 2;
                          break;
                        case 17:
                          R = 3;
                          break;
                        case 18:
                          R = 7;
                          break;
                        default:
                          throw "invalid code: " + L;
                      }
                      z.a(e[H], R, f);
                    }
                  var ne,
                    ie,
                    se,
                    ae,
                    oe,
                    ue,
                    fe,
                    he,
                    le = [I, C],
                    ce = [B, M];
                  for (
                    oe = le[0],
                      ue = le[1],
                      fe = ce[0],
                      he = ce[1],
                      ne = 0,
                      ie = j.length;
                    ne < ie;
                    ++ne
                  )
                    if (((se = j[ne]), z.a(oe[se], ue[se], f), 256 < se))
                      z.a(j[++ne], j[++ne], f),
                        (ae = j[++ne]),
                        z.a(fe[ae], he[ae], f),
                        z.a(j[++ne], j[++ne], f);
                    else if (256 === se) break;
                  (this.b = z.finish()), (this.c = this.b.length);
                  break;
                default:
                  throw "invalid compression type";
              }
              return this.b;
            };
            var k = (function () {
                function e(e) {
                  switch (f) {
                    case 3 === e:
                      return [257, e - 3, 0];
                    case 4 === e:
                      return [258, e - 4, 0];
                    case 5 === e:
                      return [259, e - 5, 0];
                    case 6 === e:
                      return [260, e - 6, 0];
                    case 7 === e:
                      return [261, e - 7, 0];
                    case 8 === e:
                      return [262, e - 8, 0];
                    case 9 === e:
                      return [263, e - 9, 0];
                    case 10 === e:
                      return [264, e - 10, 0];
                    case 12 >= e:
                      return [265, e - 11, 1];
                    case 14 >= e:
                      return [266, e - 13, 1];
                    case 16 >= e:
                      return [267, e - 15, 1];
                    case 18 >= e:
                      return [268, e - 17, 1];
                    case 22 >= e:
                      return [269, e - 19, 2];
                    case 26 >= e:
                      return [270, e - 23, 2];
                    case 30 >= e:
                      return [271, e - 27, 2];
                    case 34 >= e:
                      return [272, e - 31, 2];
                    case 42 >= e:
                      return [273, e - 35, 3];
                    case 50 >= e:
                      return [274, e - 43, 3];
                    case 58 >= e:
                      return [275, e - 51, 3];
                    case 66 >= e:
                      return [276, e - 59, 3];
                    case 82 >= e:
                      return [277, e - 67, 4];
                    case 98 >= e:
                      return [278, e - 83, 4];
                    case 114 >= e:
                      return [279, e - 99, 4];
                    case 130 >= e:
                      return [280, e - 115, 4];
                    case 162 >= e:
                      return [281, e - 131, 5];
                    case 194 >= e:
                      return [282, e - 163, 5];
                    case 226 >= e:
                      return [283, e - 195, 5];
                    case 257 >= e:
                      return [284, e - 227, 5];
                    case 258 === e:
                      return [285, e - 258, 0];
                    default:
                      throw "invalid length: " + e;
                  }
                }
                var t,
                  r,
                  n = [];
                for (t = 3; 258 >= t; t++)
                  (r = e(t)), (n[t] = (r[2] << 24) | (r[1] << 16) | r[0]);
                return n;
              })(),
              A = l ? new Uint32Array(k) : k;
            e("Zlib.RawDeflate", i),
              e("Zlib.RawDeflate.prototype.compress", i.prototype.h);
            var _,
              E,
              S,
              U,
              K = { NONE: 0, FIXED: 1, DYNAMIC: w };
            if (Object.keys) _ = Object.keys(K);
            else for (E in ((_ = []), (S = 0), K)) _[S++] = E;
            for (S = 0, U = _.length; S < U; ++S)
              (E = _[S]), e("Zlib.RawDeflate.CompressionType." + E, K[E]);
          }).call(this);
        },
        {},
      ],
      7: [
        function (e, t, r) {
          (function () {
            "use strict";
            function e(e, t) {
              var r = e.split("."),
                n = a;
              !(r[0] in n) && n.execScript && n.execScript("var " + r[0]);
              for (var i; r.length && (i = r.shift()); )
                r.length || t === s
                  ? (n = n[i] ? n[i] : (n[i] = {}))
                  : (n[i] = t);
            }
            function t(e) {
              var t,
                r,
                n,
                i,
                s,
                a,
                u,
                f,
                h,
                l,
                c = e.length,
                d = 0,
                p = Number.POSITIVE_INFINITY;
              for (f = 0; f < c; ++f)
                e[f] > d && (d = e[f]), e[f] < p && (p = e[f]);
              for (
                t = 1 << d,
                  r = new (o ? Uint32Array : Array)(t),
                  n = 1,
                  i = 0,
                  s = 2;
                n <= d;

              ) {
                for (f = 0; f < c; ++f)
                  if (e[f] === n) {
                    for (a = 0, u = i, h = 0; h < n; ++h)
                      (a = (a << 1) | (1 & u)), (u >>= 1);
                    for (l = (n << 16) | f, h = a; h < t; h += s) r[h] = l;
                    ++i;
                  }
                ++n, (i <<= 1), (s <<= 1);
              }
              return [r, d, p];
            }
            function r(e, t) {
              switch (
                ((this.g = []),
                (this.h = 32768),
                (this.c = this.f = this.d = this.k = 0),
                (this.input = o ? new Uint8Array(e) : e),
                (this.l = !1),
                (this.i = f),
                (this.p = !1),
                (!t && (t = {})) ||
                  (t.index && (this.d = t.index),
                  t.bufferSize && (this.h = t.bufferSize),
                  t.bufferType && (this.i = t.bufferType),
                  t.resize && (this.p = t.resize)),
                this.i)
              ) {
                case u:
                  (this.a = 32768),
                    (this.b = new (o ? Uint8Array : Array)(
                      32768 + this.h + 258,
                    ));
                  break;
                case f:
                  (this.a = 0),
                    (this.b = new (o ? Uint8Array : Array)(this.h)),
                    (this.e = this.u),
                    (this.m = this.r),
                    (this.j = this.s);
                  break;
                default:
                  throw Error("invalid inflate mode");
              }
            }
            function n(e, t) {
              for (
                var r, n = e.f, i = e.c, s = e.input, a = e.d, o = s.length;
                i < t;

              ) {
                if (a >= o) throw Error("input buffer is broken");
                (n |= s[a++] << i), (i += 8);
              }
              return (
                (r = n & ((1 << t) - 1)),
                (e.f = n >>> t),
                (e.c = i - t),
                (e.d = a),
                r
              );
            }
            function i(e, t) {
              for (
                var r,
                  n,
                  i = e.f,
                  s = e.c,
                  a = e.input,
                  o = e.d,
                  u = a.length,
                  f = t[0],
                  h = t[1];
                s < h && !(o >= u);

              )
                (i |= a[o++] << s), (s += 8);
              if (((r = f[i & ((1 << h) - 1)]), (n = r >>> 16) > s))
                throw Error("invalid code length: " + n);
              return (e.f = i >> n), (e.c = s - n), (e.d = o), 65535 & r;
            }
            var s = void 0,
              a = this,
              o =
                "undefined" != typeof Uint8Array &&
                "undefined" != typeof Uint16Array &&
                "undefined" != typeof Uint32Array &&
                "undefined" != typeof DataView,
              u = 0,
              f = 1;
            r.prototype.t = function () {
              for (; !this.l; ) {
                var e = n(this, 3);
                switch ((1 & e && (this.l = !0), (e >>>= 1))) {
                  case 0:
                    var r = this.input,
                      a = this.d,
                      h = this.b,
                      l = this.a,
                      c = r.length,
                      p = s,
                      y = s,
                      g = h.length,
                      m = s;
                    if (((this.c = this.f = 0), a + 1 >= c))
                      throw Error("invalid uncompressed block header: LEN");
                    if (((p = r[a++] | (r[a++] << 8)), a + 1 >= c))
                      throw Error("invalid uncompressed block header: NLEN");
                    if (((y = r[a++] | (r[a++] << 8)), p === ~y))
                      throw Error(
                        "invalid uncompressed block header: length verify",
                      );
                    if (a + p > r.length) throw Error("input buffer is broken");
                    switch (this.i) {
                      case u:
                        for (; l + p > h.length; ) {
                          if (((m = g - l), (p -= m), o))
                            h.set(r.subarray(a, a + m), l), (l += m), (a += m);
                          else for (; m--; ) h[l++] = r[a++];
                          (this.a = l), (h = this.e()), (l = this.a);
                        }
                        break;
                      case f:
                        for (; l + p > h.length; ) h = this.e({ o: 2 });
                        break;
                      default:
                        throw Error("invalid inflate mode");
                    }
                    if (o) h.set(r.subarray(a, a + p), l), (l += p), (a += p);
                    else for (; p--; ) h[l++] = r[a++];
                    (this.d = a), (this.a = l), (this.b = h);
                    break;
                  case 1:
                    this.j(S, K);
                    break;
                  case 2:
                    for (
                      var v = n(this, 5) + 257,
                        w = n(this, 5) + 1,
                        b = n(this, 4) + 4,
                        k = new (o ? Uint8Array : Array)(d.length),
                        A = s,
                        _ = s,
                        E = s,
                        U = s,
                        P = s,
                        j = s,
                        x = s,
                        T = s,
                        O = s,
                        T = 0;
                      T < b;
                      ++T
                    )
                      k[d[T]] = n(this, 3);
                    if (!o) for (T = b, b = k.length; T < b; ++T) k[d[T]] = 0;
                    for (
                      A = t(k),
                        U = new (o ? Uint8Array : Array)(v + w),
                        T = 0,
                        O = v + w;
                      T < O;

                    )
                      switch ((P = i(this, A))) {
                        case 16:
                          for (x = 3 + n(this, 2); x--; ) U[T++] = j;
                          break;
                        case 17:
                          for (x = 3 + n(this, 3); x--; ) U[T++] = 0;
                          j = 0;
                          break;
                        case 18:
                          for (x = 11 + n(this, 7); x--; ) U[T++] = 0;
                          j = 0;
                          break;
                        default:
                          j = U[T++] = P;
                      }
                    (_ = t(o ? U.subarray(0, v) : U.slice(0, v))),
                      (E = t(o ? U.subarray(v) : U.slice(v))),
                      this.j(_, E);
                    break;
                  default:
                    throw Error("unknown BTYPE: " + e);
                }
              }
              return this.m();
            };
            var h,
              l,
              c = [
                16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                15,
              ],
              d = o ? new Uint16Array(c) : c,
              p = [
                3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43,
                51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258,
              ],
              y = o ? new Uint16Array(p) : p,
              g = [
                0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                4, 4, 4, 5, 5, 5, 5, 0, 0, 0,
              ],
              m = o ? new Uint8Array(g) : g,
              v = [
                1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257,
                385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289,
                16385, 24577,
              ],
              w = o ? new Uint16Array(v) : v,
              b = [
                0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                9, 10, 10, 11, 11, 12, 12, 13, 13,
              ],
              k = o ? new Uint8Array(b) : b,
              A = new (o ? Uint8Array : Array)(288);
            for (h = 0, l = A.length; h < l; ++h)
              A[h] = 143 >= h ? 8 : 255 >= h ? 9 : 279 >= h ? 7 : 8;
            var _,
              E,
              S = t(A),
              U = new (o ? Uint8Array : Array)(30);
            for (_ = 0, E = U.length; _ < E; ++_) U[_] = 5;
            var K = t(U);
            (r.prototype.j = function (e, t) {
              var r = this.b,
                s = this.a;
              this.n = e;
              for (
                var a, o, u, f, h = r.length - 258;
                256 !== (a = i(this, e));

              )
                if (256 > a)
                  s >= h && ((this.a = s), (r = this.e()), (s = this.a)),
                    (r[s++] = a);
                else
                  for (
                    f = y[(o = a - 257)],
                      0 < m[o] && (f += n(this, m[o])),
                      a = i(this, t),
                      u = w[a],
                      0 < k[a] && (u += n(this, k[a])),
                      s >= h && ((this.a = s), (r = this.e()), (s = this.a));
                    f--;

                  )
                    r[s] = r[s++ - u];
              for (; 8 <= this.c; ) (this.c -= 8), this.d--;
              this.a = s;
            }),
              (r.prototype.s = function (e, t) {
                var r = this.b,
                  s = this.a;
                this.n = e;
                for (var a, o, u, f, h = r.length; 256 !== (a = i(this, e)); )
                  if (256 > a)
                    s >= h && ((r = this.e()), (h = r.length)), (r[s++] = a);
                  else
                    for (
                      f = y[(o = a - 257)],
                        0 < m[o] && (f += n(this, m[o])),
                        a = i(this, t),
                        u = w[a],
                        0 < k[a] && (u += n(this, k[a])),
                        s + f > h && ((r = this.e()), (h = r.length));
                      f--;

                    )
                      r[s] = r[s++ - u];
                for (; 8 <= this.c; ) (this.c -= 8), this.d--;
                this.a = s;
              }),
              (r.prototype.e = function () {
                var e,
                  t,
                  r = new (o ? Uint8Array : Array)(this.a - 32768),
                  n = this.a - 32768,
                  i = this.b;
                if (o) r.set(i.subarray(32768, r.length));
                else for (e = 0, t = r.length; e < t; ++e) r[e] = i[e + 32768];
                if ((this.g.push(r), (this.k += r.length), o))
                  i.set(i.subarray(n, n + 32768));
                else for (e = 0; 32768 > e; ++e) i[e] = i[n + e];
                return (this.a = 32768), i;
              }),
              (r.prototype.u = function (e) {
                var t,
                  r,
                  n,
                  i,
                  s = (this.input.length / this.d + 1) | 0,
                  a = this.input,
                  u = this.b;
                return (
                  e &&
                    ("number" == typeof e.o && (s = e.o),
                    "number" == typeof e.q && (s += e.q)),
                  2 > s
                    ? ((r = (a.length - this.d) / this.n[2]),
                      (i = ((r / 2) * 258) | 0),
                      (n = i < u.length ? u.length + i : u.length << 1))
                    : (n = u.length * s),
                  o ? (t = new Uint8Array(n)).set(u) : (t = u),
                  (this.b = t)
                );
              }),
              (r.prototype.m = function () {
                var e,
                  t,
                  r,
                  n,
                  i,
                  s = 0,
                  a = this.b,
                  u = this.g,
                  f = new (o ? Uint8Array : Array)(this.k + (this.a - 32768));
                if (0 === u.length)
                  return o
                    ? this.b.subarray(32768, this.a)
                    : this.b.slice(32768, this.a);
                for (t = 0, r = u.length; t < r; ++t)
                  for (n = 0, i = (e = u[t]).length; n < i; ++n) f[s++] = e[n];
                for (t = 32768, r = this.a; t < r; ++t) f[s++] = a[t];
                return (this.g = []), (this.buffer = f);
              }),
              (r.prototype.r = function () {
                var e,
                  t = this.a;
                return (
                  o
                    ? this.p
                      ? (e = new Uint8Array(t)).set(this.b.subarray(0, t))
                      : (e = this.b.subarray(0, t))
                    : (this.b.length > t && (this.b.length = t), (e = this.b)),
                  (this.buffer = e)
                );
              }),
              e("Zlib.RawInflate", r),
              e("Zlib.RawInflate.prototype.decompress", r.prototype.t);
            var P,
              j,
              x,
              T,
              O = { ADAPTIVE: f, BLOCK: u };
            if (Object.keys) P = Object.keys(O);
            else for (j in ((P = []), (x = 0), O)) P[x++] = j;
            for (x = 0, T = P.length; x < T; ++x)
              (j = P[x]), e("Zlib.RawInflate.BufferType." + j, O[j]);
          }).call(this);
        },
        {},
      ],
      8: [
        function (e, t, r) {
          (function () {
            "use strict";
            function e(e) {
              throw e;
            }
            function t(e, t) {
              var r = e.split("."),
                n = v;
              !(r[0] in n) && n.execScript && n.execScript("var " + r[0]);
              for (var i; r.length && (i = r.shift()); )
                r.length || t === g
                  ? (n = n[i] ? n[i] : (n[i] = {}))
                  : (n[i] = t);
            }
            function r(t, r) {
              (this.index = "number" == typeof r ? r : 0),
                (this.i = 0),
                (this.buffer =
                  t instanceof (w ? Uint8Array : Array)
                    ? t
                    : new (w ? Uint8Array : Array)(32768)),
                2 * this.buffer.length <= this.index &&
                  e(Error("invalid index")),
                this.buffer.length <= this.index && this.f();
            }
            function n(e) {
              (this.buffer = new (w ? Uint16Array : Array)(2 * e)),
                (this.length = 0);
            }
            function i(e) {
              var t,
                r,
                n,
                i,
                s,
                a,
                o,
                u,
                f,
                h,
                l = e.length,
                c = 0,
                d = Number.POSITIVE_INFINITY;
              for (u = 0; u < l; ++u)
                e[u] > c && (c = e[u]), e[u] < d && (d = e[u]);
              for (
                t = 1 << c,
                  r = new (w ? Uint32Array : Array)(t),
                  n = 1,
                  i = 0,
                  s = 2;
                n <= c;

              ) {
                for (u = 0; u < l; ++u)
                  if (e[u] === n) {
                    for (a = 0, o = i, f = 0; f < n; ++f)
                      (a = (a << 1) | (1 & o)), (o >>= 1);
                    for (h = (n << 16) | u, f = a; f < t; f += s) r[f] = h;
                    ++i;
                  }
                ++n, (i <<= 1), (s <<= 1);
              }
              return [r, c, d];
            }
            function s(e, t) {
              (this.h = K),
                (this.w = 0),
                (this.input = w && e instanceof Array ? new Uint8Array(e) : e),
                (this.b = 0),
                t &&
                  (t.lazy && (this.w = t.lazy),
                  "number" == typeof t.compressionType &&
                    (this.h = t.compressionType),
                  t.outputBuffer &&
                    (this.a =
                      w && t.outputBuffer instanceof Array
                        ? new Uint8Array(t.outputBuffer)
                        : t.outputBuffer),
                  "number" == typeof t.outputIndex && (this.b = t.outputIndex)),
                this.a || (this.a = new (w ? Uint8Array : Array)(32768));
            }
            function a(t, r) {
              function n(t, r) {
                var n,
                  i = t.G,
                  s = [],
                  a = 0;
                (n = T[t.length]),
                  (s[a++] = 65535 & n),
                  (s[a++] = (n >> 16) & 255),
                  (s[a++] = n >> 24);
                var o;
                switch (m) {
                  case 1 === i:
                    o = [0, i - 1, 0];
                    break;
                  case 2 === i:
                    o = [1, i - 2, 0];
                    break;
                  case 3 === i:
                    o = [2, i - 3, 0];
                    break;
                  case 4 === i:
                    o = [3, i - 4, 0];
                    break;
                  case 6 >= i:
                    o = [4, i - 5, 1];
                    break;
                  case 8 >= i:
                    o = [5, i - 7, 1];
                    break;
                  case 12 >= i:
                    o = [6, i - 9, 2];
                    break;
                  case 16 >= i:
                    o = [7, i - 13, 2];
                    break;
                  case 24 >= i:
                    o = [8, i - 17, 3];
                    break;
                  case 32 >= i:
                    o = [9, i - 25, 3];
                    break;
                  case 48 >= i:
                    o = [10, i - 33, 4];
                    break;
                  case 64 >= i:
                    o = [11, i - 49, 4];
                    break;
                  case 96 >= i:
                    o = [12, i - 65, 5];
                    break;
                  case 128 >= i:
                    o = [13, i - 97, 5];
                    break;
                  case 192 >= i:
                    o = [14, i - 129, 6];
                    break;
                  case 256 >= i:
                    o = [15, i - 193, 6];
                    break;
                  case 384 >= i:
                    o = [16, i - 257, 7];
                    break;
                  case 512 >= i:
                    o = [17, i - 385, 7];
                    break;
                  case 768 >= i:
                    o = [18, i - 513, 8];
                    break;
                  case 1024 >= i:
                    o = [19, i - 769, 8];
                    break;
                  case 1536 >= i:
                    o = [20, i - 1025, 9];
                    break;
                  case 2048 >= i:
                    o = [21, i - 1537, 9];
                    break;
                  case 3072 >= i:
                    o = [22, i - 2049, 10];
                    break;
                  case 4096 >= i:
                    o = [23, i - 3073, 10];
                    break;
                  case 6144 >= i:
                    o = [24, i - 4097, 11];
                    break;
                  case 8192 >= i:
                    o = [25, i - 6145, 11];
                    break;
                  case 12288 >= i:
                    o = [26, i - 8193, 12];
                    break;
                  case 16384 >= i:
                    o = [27, i - 12289, 12];
                    break;
                  case 24576 >= i:
                    o = [28, i - 16385, 13];
                    break;
                  case 32768 >= i:
                    o = [29, i - 24577, 13];
                    break;
                  default:
                    e("invalid distance");
                }
                (n = o), (s[a++] = n[0]), (s[a++] = n[1]), (s[a++] = n[2]);
                var u, f;
                for (u = 0, f = s.length; u < f; ++u) p[y++] = s[u];
                b[s[0]]++, k[s[3]]++, (v = t.length + r - 1), (l = null);
              }
              var i,
                s,
                a,
                o,
                u,
                f,
                h,
                l,
                c,
                d = {},
                p = w ? new Uint16Array(2 * r.length) : [],
                y = 0,
                v = 0,
                b = new (w ? Uint32Array : Array)(286),
                k = new (w ? Uint32Array : Array)(30),
                A = t.w;
              if (!w) {
                for (a = 0; 285 >= a; ) b[a++] = 0;
                for (a = 0; 29 >= a; ) k[a++] = 0;
              }
              for (b[256] = 1, i = 0, s = r.length; i < s; ++i) {
                for (a = u = 0, o = 3; a < o && i + a !== s; ++a)
                  u = (u << 8) | r[i + a];
                if ((d[u] === g && (d[u] = []), (f = d[u]), !(0 < v--))) {
                  for (; 0 < f.length && 32768 < i - f[0]; ) f.shift();
                  if (i + 3 >= s) {
                    for (l && n(l, -1), a = 0, o = s - i; a < o; ++a)
                      (c = r[i + a]), (p[y++] = c), ++b[c];
                    break;
                  }
                  0 < f.length
                    ? ((h = (function (e, t, r) {
                        var n,
                          i,
                          s,
                          a,
                          o,
                          u,
                          f = 0,
                          h = e.length;
                        (a = 0), (u = r.length);
                        e: for (; a < u; a++) {
                          if (((n = r[u - a - 1]), (s = 3), 3 < f)) {
                            for (o = f; 3 < o; o--)
                              if (e[n + o - 1] !== e[t + o - 1]) continue e;
                            s = f;
                          }
                          for (
                            ;
                            258 > s && t + s < h && e[n + s] === e[t + s];

                          )
                            ++s;
                          if ((s > f && ((i = n), (f = s)), 258 === s)) break;
                        }
                        return new (function (e, t) {
                          (this.length = e), (this.G = t);
                        })(f, t - i);
                      })(r, i, f)),
                      l
                        ? l.length < h.length
                          ? ((c = r[i - 1]), (p[y++] = c), ++b[c], n(h, 0))
                          : n(l, -1)
                        : h.length < A
                        ? (l = h)
                        : n(h, 0))
                    : l
                    ? n(l, -1)
                    : ((c = r[i]), (p[y++] = c), ++b[c]);
                }
                f.push(i);
              }
              return (
                (p[y++] = 256),
                b[256]++,
                (t.L = b),
                (t.K = k),
                w ? p.subarray(0, y) : p
              );
            }
            function o(e, t) {
              var r,
                i,
                s,
                a,
                o,
                u = e.length,
                f = new n(572),
                h = new (w ? Uint8Array : Array)(u);
              if (!w) for (a = 0; a < u; a++) h[a] = 0;
              for (a = 0; a < u; ++a) 0 < e[a] && f.push(a, e[a]);
              if (
                ((r = Array(f.length / 2)),
                (i = new (w ? Uint32Array : Array)(f.length / 2)),
                1 === r.length)
              )
                return (h[f.pop().index] = 1), h;
              for (a = 0, o = f.length / 2; a < o; ++a)
                (r[a] = f.pop()), (i[a] = r[a].value);
              for (
                s = (function (e, t, r) {
                  function n(e) {
                    var r = d[e][p[e]];
                    r === t ? (n(e + 1), n(e + 1)) : --l[r], ++p[e];
                  }
                  var i,
                    s,
                    a,
                    o,
                    u,
                    f = new (w ? Uint16Array : Array)(r),
                    h = new (w ? Uint8Array : Array)(r),
                    l = new (w ? Uint8Array : Array)(t),
                    c = Array(r),
                    d = Array(r),
                    p = Array(r),
                    y = (1 << r) - t,
                    g = 1 << (r - 1);
                  for (f[r - 1] = t, s = 0; s < r; ++s)
                    y < g ? (h[s] = 0) : ((h[s] = 1), (y -= g)),
                      (y <<= 1),
                      (f[r - 2 - s] = ((f[r - 1 - s] / 2) | 0) + t);
                  for (
                    f[0] = h[0], c[0] = Array(f[0]), d[0] = Array(f[0]), s = 1;
                    s < r;
                    ++s
                  )
                    f[s] > 2 * f[s - 1] + h[s] && (f[s] = 2 * f[s - 1] + h[s]),
                      (c[s] = Array(f[s])),
                      (d[s] = Array(f[s]));
                  for (i = 0; i < t; ++i) l[i] = r;
                  for (a = 0; a < f[r - 1]; ++a)
                    (c[r - 1][a] = e[a]), (d[r - 1][a] = a);
                  for (i = 0; i < r; ++i) p[i] = 0;
                  for (
                    1 === h[r - 1] && (--l[0], ++p[r - 1]), s = r - 2;
                    0 <= s;
                    --s
                  ) {
                    for (o = i = 0, u = p[s + 1], a = 0; a < f[s]; a++)
                      (o = c[s + 1][u] + c[s + 1][u + 1]) > e[i]
                        ? ((c[s][a] = o), (d[s][a] = t), (u += 2))
                        : ((c[s][a] = e[i]), (d[s][a] = i), ++i);
                    (p[s] = 0), 1 === h[s] && n(s);
                  }
                  return l;
                })(i, i.length, t),
                  a = 0,
                  o = r.length;
                a < o;
                ++a
              )
                h[r[a].index] = s[a];
              return h;
            }
            function u(e) {
              var t,
                r,
                n,
                i,
                s = new (w ? Uint16Array : Array)(e.length),
                a = [],
                o = [],
                u = 0;
              for (t = 0, r = e.length; t < r; t++) a[e[t]] = 1 + (0 | a[e[t]]);
              for (t = 1, r = 16; t <= r; t++)
                (o[t] = u), (u += 0 | a[t]), (u <<= 1);
              for (t = 0, r = e.length; t < r; t++)
                for (
                  u = o[e[t]], o[e[t]] += 1, n = s[t] = 0, i = e[t];
                  n < i;
                  n++
                )
                  (s[t] = (s[t] << 1) | (1 & u)), (u >>>= 1);
              return s;
            }
            function f(t, r) {
              switch (
                ((this.l = []),
                (this.m = 32768),
                (this.e = this.g = this.c = this.q = 0),
                (this.input = w ? new Uint8Array(t) : t),
                (this.s = !1),
                (this.n = C),
                (this.B = !1),
                (!r && (r = {})) ||
                  (r.index && (this.c = r.index),
                  r.bufferSize && (this.m = r.bufferSize),
                  r.bufferType && (this.n = r.bufferType),
                  r.resize && (this.B = r.resize)),
                this.n)
              ) {
                case O:
                  (this.b = 32768),
                    (this.a = new (w ? Uint8Array : Array)(
                      32768 + this.m + 258,
                    ));
                  break;
                case C:
                  (this.b = 0),
                    (this.a = new (w ? Uint8Array : Array)(this.m)),
                    (this.f = this.J),
                    (this.t = this.H),
                    (this.o = this.I);
                  break;
                default:
                  e(Error("invalid inflate mode"));
              }
            }
            function h(t, r) {
              for (
                var n, i = t.g, s = t.e, a = t.input, o = t.c, u = a.length;
                s < r;

              )
                o >= u && e(Error("input buffer is broken")),
                  (i |= a[o++] << s),
                  (s += 8);
              return (
                (n = i & ((1 << r) - 1)),
                (t.g = i >>> r),
                (t.e = s - r),
                (t.c = o),
                n
              );
            }
            function l(t, r) {
              for (
                var n,
                  i,
                  s = t.g,
                  a = t.e,
                  o = t.input,
                  u = t.c,
                  f = o.length,
                  h = r[0],
                  l = r[1];
                a < l && !(u >= f);

              )
                (s |= o[u++] << a), (a += 8);
              return (
                (n = h[s & ((1 << l) - 1)]),
                (i = n >>> 16) > a && e(Error("invalid code length: " + i)),
                (t.g = s >> i),
                (t.e = a - i),
                (t.c = u),
                65535 & n
              );
            }
            function c(e) {
              if ("string" == typeof e) {
                var t,
                  r,
                  n = e.split("");
                for (t = 0, r = n.length; t < r; t++)
                  n[t] = (255 & n[t].charCodeAt(0)) >>> 0;
                e = n;
              }
              for (var i, s = 1, a = 0, o = e.length, u = 0; 0 < o; ) {
                o -= i = 1024 < o ? 1024 : o;
                do {
                  (s += e[u++]), (a += s);
                } while (--i);
                (s %= 65521), (a %= 65521);
              }
              return ((a << 16) | s) >>> 0;
            }
            function d(t, r) {
              var n, i;
              switch (
                ((this.input = t),
                (this.c = 0),
                (!r && (r = {})) ||
                  (r.index && (this.c = r.index),
                  r.verify && (this.M = r.verify)),
                (n = t[this.c++]),
                (i = t[this.c++]),
                15 & n)
              ) {
                case Q:
                  this.method = Q;
                  break;
                default:
                  e(Error("unsupported compression method"));
              }
              0 != ((n << 8) + i) % 31 &&
                e(Error("invalid fcheck flag:" + (((n << 8) + i) % 31))),
                32 & i && e(Error("fdict flag is not supported")),
                (this.A = new f(t, {
                  index: this.c,
                  bufferSize: r.bufferSize,
                  bufferType: r.bufferType,
                  resize: r.resize,
                }));
            }
            function p(e, t) {
              (this.input = e),
                (this.a = new (w ? Uint8Array : Array)(32768)),
                (this.h = ee.k);
              var r,
                n = {};
              (!t && (t = {})) ||
                "number" != typeof t.compressionType ||
                (this.h = t.compressionType);
              for (r in t) n[r] = t[r];
              (n.outputBuffer = this.a), (this.z = new s(this.input, n));
            }
            function y(e, r) {
              var n, i, s, a;
              if (Object.keys) n = Object.keys(r);
              else for (i in ((n = []), (s = 0), r)) n[s++] = i;
              for (s = 0, a = n.length; s < a; ++s)
                (i = n[s]), t(e + "." + i, r[i]);
            }
            var g = void 0,
              m = !0,
              v = this,
              w =
                "undefined" != typeof Uint8Array &&
                "undefined" != typeof Uint16Array &&
                "undefined" != typeof Uint32Array &&
                "undefined" != typeof DataView;
            (r.prototype.f = function () {
              var e,
                t = this.buffer,
                r = t.length,
                n = new (w ? Uint8Array : Array)(r << 1);
              if (w) n.set(t);
              else for (e = 0; e < r; ++e) n[e] = t[e];
              return (this.buffer = n);
            }),
              (r.prototype.d = function (e, t, r) {
                var n,
                  i = this.buffer,
                  s = this.index,
                  a = this.i,
                  o = i[s];
                if (
                  (r &&
                    1 < t &&
                    (e =
                      8 < t
                        ? ((S[255 & e] << 24) |
                            (S[(e >>> 8) & 255] << 16) |
                            (S[(e >>> 16) & 255] << 8) |
                            S[(e >>> 24) & 255]) >>
                          (32 - t)
                        : S[e] >> (8 - t)),
                  8 > t + a)
                )
                  (o = (o << t) | e), (a += t);
                else
                  for (n = 0; n < t; ++n)
                    (o = (o << 1) | ((e >> (t - n - 1)) & 1)),
                      8 == ++a &&
                        ((a = 0),
                        (i[s++] = S[o]),
                        (o = 0),
                        s === i.length && (i = this.f()));
                (i[s] = o), (this.buffer = i), (this.i = a), (this.index = s);
              }),
              (r.prototype.finish = function () {
                var e,
                  t = this.buffer,
                  r = this.index;
                return (
                  0 < this.i && ((t[r] <<= 8 - this.i), (t[r] = S[t[r]]), r++),
                  w ? (e = t.subarray(0, r)) : ((t.length = r), (e = t)),
                  e
                );
              });
            var b,
              k = new (w ? Uint8Array : Array)(256);
            for (b = 0; 256 > b; ++b) {
              for (var A = (E = b), _ = 7, E = E >>> 1; E; E >>>= 1)
                (A <<= 1), (A |= 1 & E), --_;
              k[b] = ((A << _) & 255) >>> 0;
            }
            var S = k;
            (n.prototype.getParent = function (e) {
              return 2 * (((e - 2) / 4) | 0);
            }),
              (n.prototype.push = function (e, t) {
                var r,
                  n,
                  i,
                  s = this.buffer;
                for (
                  r = this.length, s[this.length++] = t, s[this.length++] = e;
                  0 < r && ((n = this.getParent(r)), s[r] > s[n]);

                )
                  (i = s[r]),
                    (s[r] = s[n]),
                    (s[n] = i),
                    (i = s[r + 1]),
                    (s[r + 1] = s[n + 1]),
                    (s[n + 1] = i),
                    (r = n);
                return this.length;
              }),
              (n.prototype.pop = function () {
                var e,
                  t,
                  r,
                  n,
                  i,
                  s = this.buffer;
                for (
                  t = s[0],
                    e = s[1],
                    this.length -= 2,
                    s[0] = s[this.length],
                    s[1] = s[this.length + 1],
                    i = 0;
                  !((n = 2 * i + 2) >= this.length) &&
                  (n + 2 < this.length && s[n + 2] > s[n] && (n += 2),
                  s[n] > s[i]);

                )
                  (r = s[i]),
                    (s[i] = s[n]),
                    (s[n] = r),
                    (r = s[i + 1]),
                    (s[i + 1] = s[n + 1]),
                    (s[n + 1] = r),
                    (i = n);
                return { index: e, value: t, length: this.length };
              });
            var U,
              K = 2,
              P = { NONE: 0, r: 1, k: K, N: 3 },
              j = [];
            for (U = 0; 288 > U; U++)
              switch (m) {
                case 143 >= U:
                  j.push([U + 48, 8]);
                  break;
                case 255 >= U:
                  j.push([U - 144 + 400, 9]);
                  break;
                case 279 >= U:
                  j.push([U - 256 + 0, 7]);
                  break;
                case 287 >= U:
                  j.push([U - 280 + 192, 8]);
                  break;
                default:
                  e("invalid literal: " + U);
              }
            s.prototype.j = function () {
              var t,
                n,
                i,
                s,
                f = this.input;
              switch (this.h) {
                case 0:
                  for (i = 0, s = f.length; i < s; ) {
                    var h = (n = w
                        ? f.subarray(i, i + 65535)
                        : f.slice(i, i + 65535)),
                      l = (i += n.length) === s,
                      c = g,
                      d = g,
                      p = g,
                      y = g,
                      v = g,
                      b = this.a,
                      k = this.b;
                    if (w) {
                      for (
                        b = new Uint8Array(this.a.buffer);
                        b.length <= k + h.length + 5;

                      )
                        b = new Uint8Array(b.length << 1);
                      b.set(this.a);
                    }
                    if (
                      ((c = l ? 1 : 0),
                      (b[k++] = 0 | c),
                      (d = h.length),
                      (p = (65536 + ~d) & 65535),
                      (b[k++] = 255 & d),
                      (b[k++] = (d >>> 8) & 255),
                      (b[k++] = 255 & p),
                      (b[k++] = (p >>> 8) & 255),
                      w)
                    )
                      b.set(h, k), (k += h.length), (b = b.subarray(0, k));
                    else {
                      for (y = 0, v = h.length; y < v; ++y) b[k++] = h[y];
                      b.length = k;
                    }
                    (this.b = k), (this.a = b);
                  }
                  break;
                case 1:
                  var A = new r(
                    w ? new Uint8Array(this.a.buffer) : this.a,
                    this.b,
                  );
                  A.d(1, 1, m), A.d(1, 2, m);
                  var _,
                    E,
                    S,
                    U = a(this, f);
                  for (_ = 0, E = U.length; _ < E; _++)
                    if (((S = U[_]), r.prototype.d.apply(A, j[S]), 256 < S))
                      A.d(U[++_], U[++_], m),
                        A.d(U[++_], 5),
                        A.d(U[++_], U[++_], m);
                    else if (256 === S) break;
                  (this.a = A.finish()), (this.b = this.a.length);
                  break;
                case K:
                  var P,
                    x,
                    T,
                    O,
                    C,
                    I,
                    M,
                    B,
                    D,
                    N,
                    L,
                    R,
                    H,
                    F,
                    z,
                    q = new r(
                      w ? new Uint8Array(this.a.buffer) : this.a,
                      this.b,
                    ),
                    G = [
                      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                      1, 15,
                    ],
                    V = Array(19);
                  for (
                    P = K,
                      q.d(1, 1, m),
                      q.d(P, 2, m),
                      x = a(this, f),
                      M = u((I = o(this.L, 15))),
                      D = u((B = o(this.K, 7))),
                      T = 286;
                    257 < T && 0 === I[T - 1];
                    T--
                  );
                  for (O = 30; 1 < O && 0 === B[O - 1]; O--);
                  var Z,
                    Y,
                    X,
                    W,
                    $,
                    J,
                    Q = T,
                    ee = O,
                    te = new (w ? Uint32Array : Array)(Q + ee),
                    re = new (w ? Uint32Array : Array)(316),
                    ne = new (w ? Uint8Array : Array)(19);
                  for (Z = Y = 0; Z < Q; Z++) te[Y++] = I[Z];
                  for (Z = 0; Z < ee; Z++) te[Y++] = B[Z];
                  if (!w) for (Z = 0, W = ne.length; Z < W; ++Z) ne[Z] = 0;
                  for (Z = $ = 0, W = te.length; Z < W; Z += Y) {
                    for (Y = 1; Z + Y < W && te[Z + Y] === te[Z]; ++Y);
                    if (((X = Y), 0 === te[Z]))
                      if (3 > X) for (; 0 < X--; ) (re[$++] = 0), ne[0]++;
                      else
                        for (; 0 < X; )
                          (J = 138 > X ? X : 138) > X - 3 &&
                            J < X &&
                            (J = X - 3),
                            10 >= J
                              ? ((re[$++] = 17), (re[$++] = J - 3), ne[17]++)
                              : ((re[$++] = 18), (re[$++] = J - 11), ne[18]++),
                            (X -= J);
                    else if (((re[$++] = te[Z]), ne[te[Z]]++, 3 > --X))
                      for (; 0 < X--; ) (re[$++] = te[Z]), ne[te[Z]]++;
                    else
                      for (; 0 < X; )
                        (J = 6 > X ? X : 6) > X - 3 && J < X && (J = X - 3),
                          (re[$++] = 16),
                          (re[$++] = J - 3),
                          ne[16]++,
                          (X -= J);
                  }
                  for (
                    t = w ? re.subarray(0, $) : re.slice(0, $),
                      N = o(ne, 7),
                      F = 0;
                    19 > F;
                    F++
                  )
                    V[F] = N[G[F]];
                  for (C = 19; 4 < C && 0 === V[C - 1]; C--);
                  for (
                    L = u(N),
                      q.d(T - 257, 5, m),
                      q.d(O - 1, 5, m),
                      q.d(C - 4, 4, m),
                      F = 0;
                    F < C;
                    F++
                  )
                    q.d(V[F], 3, m);
                  for (F = 0, z = t.length; F < z; F++)
                    if (((R = t[F]), q.d(L[R], N[R], m), 16 <= R)) {
                      switch ((F++, R)) {
                        case 16:
                          H = 2;
                          break;
                        case 17:
                          H = 3;
                          break;
                        case 18:
                          H = 7;
                          break;
                        default:
                          e("invalid code: " + R);
                      }
                      q.d(t[F], H, m);
                    }
                  var ie,
                    se,
                    ae,
                    oe,
                    ue,
                    fe,
                    he,
                    le,
                    ce = [M, I],
                    de = [D, B];
                  for (
                    ue = ce[0],
                      fe = ce[1],
                      he = de[0],
                      le = de[1],
                      ie = 0,
                      se = x.length;
                    ie < se;
                    ++ie
                  )
                    if (((ae = x[ie]), q.d(ue[ae], fe[ae], m), 256 < ae))
                      q.d(x[++ie], x[++ie], m),
                        (oe = x[++ie]),
                        q.d(he[oe], le[oe], m),
                        q.d(x[++ie], x[++ie], m);
                    else if (256 === ae) break;
                  (this.a = q.finish()), (this.b = this.a.length);
                  break;
                default:
                  e("invalid compression type");
              }
              return this.a;
            };
            var x = (function () {
                function t(t) {
                  switch (m) {
                    case 3 === t:
                      return [257, t - 3, 0];
                    case 4 === t:
                      return [258, t - 4, 0];
                    case 5 === t:
                      return [259, t - 5, 0];
                    case 6 === t:
                      return [260, t - 6, 0];
                    case 7 === t:
                      return [261, t - 7, 0];
                    case 8 === t:
                      return [262, t - 8, 0];
                    case 9 === t:
                      return [263, t - 9, 0];
                    case 10 === t:
                      return [264, t - 10, 0];
                    case 12 >= t:
                      return [265, t - 11, 1];
                    case 14 >= t:
                      return [266, t - 13, 1];
                    case 16 >= t:
                      return [267, t - 15, 1];
                    case 18 >= t:
                      return [268, t - 17, 1];
                    case 22 >= t:
                      return [269, t - 19, 2];
                    case 26 >= t:
                      return [270, t - 23, 2];
                    case 30 >= t:
                      return [271, t - 27, 2];
                    case 34 >= t:
                      return [272, t - 31, 2];
                    case 42 >= t:
                      return [273, t - 35, 3];
                    case 50 >= t:
                      return [274, t - 43, 3];
                    case 58 >= t:
                      return [275, t - 51, 3];
                    case 66 >= t:
                      return [276, t - 59, 3];
                    case 82 >= t:
                      return [277, t - 67, 4];
                    case 98 >= t:
                      return [278, t - 83, 4];
                    case 114 >= t:
                      return [279, t - 99, 4];
                    case 130 >= t:
                      return [280, t - 115, 4];
                    case 162 >= t:
                      return [281, t - 131, 5];
                    case 194 >= t:
                      return [282, t - 163, 5];
                    case 226 >= t:
                      return [283, t - 195, 5];
                    case 257 >= t:
                      return [284, t - 227, 5];
                    case 258 === t:
                      return [285, t - 258, 0];
                    default:
                      e("invalid length: " + t);
                  }
                }
                var r,
                  n,
                  i = [];
                for (r = 3; 258 >= r; r++)
                  (n = t(r)), (i[r] = (n[2] << 24) | (n[1] << 16) | n[0]);
                return i;
              })(),
              T = w ? new Uint32Array(x) : x,
              O = 0,
              C = 1,
              I = { D: O, C: C };
            f.prototype.p = function () {
              for (; !this.s; ) {
                var t = h(this, 3);
                switch ((1 & t && (this.s = m), (t >>>= 1))) {
                  case 0:
                    var r = this.input,
                      n = this.c,
                      s = this.a,
                      a = this.b,
                      o = r.length,
                      u = g,
                      f = g,
                      c = s.length,
                      d = g;
                    switch (
                      ((this.e = this.g = 0),
                      n + 1 >= o &&
                        e(Error("invalid uncompressed block header: LEN")),
                      (u = r[n++] | (r[n++] << 8)),
                      n + 1 >= o &&
                        e(Error("invalid uncompressed block header: NLEN")),
                      (f = r[n++] | (r[n++] << 8)),
                      u === ~f &&
                        e(
                          Error(
                            "invalid uncompressed block header: length verify",
                          ),
                        ),
                      n + u > r.length && e(Error("input buffer is broken")),
                      this.n)
                    ) {
                      case O:
                        for (; a + u > s.length; ) {
                          if (((d = c - a), (u -= d), w))
                            s.set(r.subarray(n, n + d), a), (a += d), (n += d);
                          else for (; d--; ) s[a++] = r[n++];
                          (this.b = a), (s = this.f()), (a = this.b);
                        }
                        break;
                      case C:
                        for (; a + u > s.length; ) s = this.f({ v: 2 });
                        break;
                      default:
                        e(Error("invalid inflate mode"));
                    }
                    if (w) s.set(r.subarray(n, n + u), a), (a += u), (n += u);
                    else for (; u--; ) s[a++] = r[n++];
                    (this.c = n), (this.b = a), (this.a = s);
                    break;
                  case 1:
                    this.o(W, J);
                    break;
                  case 2:
                    for (
                      var p = h(this, 5) + 257,
                        y = h(this, 5) + 1,
                        v = h(this, 4) + 4,
                        b = new (w ? Uint8Array : Array)(N.length),
                        k = g,
                        A = g,
                        _ = g,
                        E = g,
                        S = g,
                        U = g,
                        K = g,
                        P = g,
                        j = g,
                        P = 0;
                      P < v;
                      ++P
                    )
                      b[N[P]] = h(this, 3);
                    if (!w) for (P = v, v = b.length; P < v; ++P) b[N[P]] = 0;
                    for (
                      k = i(b),
                        E = new (w ? Uint8Array : Array)(p + y),
                        P = 0,
                        j = p + y;
                      P < j;

                    )
                      switch ((S = l(this, k))) {
                        case 16:
                          for (K = 3 + h(this, 2); K--; ) E[P++] = U;
                          break;
                        case 17:
                          for (K = 3 + h(this, 3); K--; ) E[P++] = 0;
                          U = 0;
                          break;
                        case 18:
                          for (K = 11 + h(this, 7); K--; ) E[P++] = 0;
                          U = 0;
                          break;
                        default:
                          U = E[P++] = S;
                      }
                    (A = i(w ? E.subarray(0, p) : E.slice(0, p))),
                      (_ = i(w ? E.subarray(p) : E.slice(p))),
                      this.o(A, _);
                    break;
                  default:
                    e(Error("unknown BTYPE: " + t));
                }
              }
              return this.t();
            };
            var M,
              B,
              D = [
                16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                15,
              ],
              N = w ? new Uint16Array(D) : D,
              L = [
                3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43,
                51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258,
              ],
              R = w ? new Uint16Array(L) : L,
              H = [
                0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                4, 4, 4, 5, 5, 5, 5, 0, 0, 0,
              ],
              F = w ? new Uint8Array(H) : H,
              z = [
                1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257,
                385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289,
                16385, 24577,
              ],
              q = w ? new Uint16Array(z) : z,
              G = [
                0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                9, 10, 10, 11, 11, 12, 12, 13, 13,
              ],
              V = w ? new Uint8Array(G) : G,
              Z = new (w ? Uint8Array : Array)(288);
            for (M = 0, B = Z.length; M < B; ++M)
              Z[M] = 143 >= M ? 8 : 255 >= M ? 9 : 279 >= M ? 7 : 8;
            var Y,
              X,
              W = i(Z),
              $ = new (w ? Uint8Array : Array)(30);
            for (Y = 0, X = $.length; Y < X; ++Y) $[Y] = 5;
            var J = i($);
            (f.prototype.o = function (e, t) {
              var r = this.a,
                n = this.b;
              this.u = e;
              for (
                var i, s, a, o, u = r.length - 258;
                256 !== (i = l(this, e));

              )
                if (256 > i)
                  n >= u && ((this.b = n), (r = this.f()), (n = this.b)),
                    (r[n++] = i);
                else
                  for (
                    o = R[(s = i - 257)],
                      0 < F[s] && (o += h(this, F[s])),
                      i = l(this, t),
                      a = q[i],
                      0 < V[i] && (a += h(this, V[i])),
                      n >= u && ((this.b = n), (r = this.f()), (n = this.b));
                    o--;

                  )
                    r[n] = r[n++ - a];
              for (; 8 <= this.e; ) (this.e -= 8), this.c--;
              this.b = n;
            }),
              (f.prototype.I = function (e, t) {
                var r = this.a,
                  n = this.b;
                this.u = e;
                for (var i, s, a, o, u = r.length; 256 !== (i = l(this, e)); )
                  if (256 > i)
                    n >= u && ((r = this.f()), (u = r.length)), (r[n++] = i);
                  else
                    for (
                      o = R[(s = i - 257)],
                        0 < F[s] && (o += h(this, F[s])),
                        i = l(this, t),
                        a = q[i],
                        0 < V[i] && (a += h(this, V[i])),
                        n + o > u && ((r = this.f()), (u = r.length));
                      o--;

                    )
                      r[n] = r[n++ - a];
                for (; 8 <= this.e; ) (this.e -= 8), this.c--;
                this.b = n;
              }),
              (f.prototype.f = function () {
                var e,
                  t,
                  r = new (w ? Uint8Array : Array)(this.b - 32768),
                  n = this.b - 32768,
                  i = this.a;
                if (w) r.set(i.subarray(32768, r.length));
                else for (e = 0, t = r.length; e < t; ++e) r[e] = i[e + 32768];
                if ((this.l.push(r), (this.q += r.length), w))
                  i.set(i.subarray(n, n + 32768));
                else for (e = 0; 32768 > e; ++e) i[e] = i[n + e];
                return (this.b = 32768), i;
              }),
              (f.prototype.J = function (e) {
                var t,
                  r,
                  n,
                  i,
                  s = (this.input.length / this.c + 1) | 0,
                  a = this.input,
                  o = this.a;
                return (
                  e &&
                    ("number" == typeof e.v && (s = e.v),
                    "number" == typeof e.F && (s += e.F)),
                  2 > s
                    ? ((r = (a.length - this.c) / this.u[2]),
                      (i = ((r / 2) * 258) | 0),
                      (n = i < o.length ? o.length + i : o.length << 1))
                    : (n = o.length * s),
                  w ? (t = new Uint8Array(n)).set(o) : (t = o),
                  (this.a = t)
                );
              }),
              (f.prototype.t = function () {
                var e,
                  t,
                  r,
                  n,
                  i,
                  s = 0,
                  a = this.a,
                  o = this.l,
                  u = new (w ? Uint8Array : Array)(this.q + (this.b - 32768));
                if (0 === o.length)
                  return w
                    ? this.a.subarray(32768, this.b)
                    : this.a.slice(32768, this.b);
                for (t = 0, r = o.length; t < r; ++t)
                  for (n = 0, i = (e = o[t]).length; n < i; ++n) u[s++] = e[n];
                for (t = 32768, r = this.b; t < r; ++t) u[s++] = a[t];
                return (this.l = []), (this.buffer = u);
              }),
              (f.prototype.H = function () {
                var e,
                  t = this.b;
                return (
                  w
                    ? this.B
                      ? (e = new Uint8Array(t)).set(this.a.subarray(0, t))
                      : (e = this.a.subarray(0, t))
                    : (this.a.length > t && (this.a.length = t), (e = this.a)),
                  (this.buffer = e)
                );
              }),
              (d.prototype.p = function () {
                var t,
                  r = this.input;
                return (
                  (t = this.A.p()),
                  (this.c = this.A.c),
                  this.M &&
                    ((r[this.c++] << 24) |
                      (r[this.c++] << 16) |
                      (r[this.c++] << 8) |
                      r[this.c++]) >>>
                      0 !==
                      c(t) &&
                    e(Error("invalid adler-32 checksum")),
                  t
                );
              });
            var Q = 8,
              ee = P;
            (p.prototype.j = function () {
              var t,
                r,
                n,
                i,
                s,
                a,
                o,
                u = 0;
              switch (((o = this.a), (t = Q))) {
                case Q:
                  r = Math.LOG2E * Math.log(32768) - 8;
                  break;
                default:
                  e(Error("invalid compression method"));
              }
              switch (((n = (r << 4) | t), (o[u++] = n), t)) {
                case Q:
                  switch (this.h) {
                    case ee.NONE:
                      s = 0;
                      break;
                    case ee.r:
                      s = 1;
                      break;
                    case ee.k:
                      s = 2;
                      break;
                    default:
                      e(Error("unsupported compression type"));
                  }
                  break;
                default:
                  e(Error("invalid compression method"));
              }
              return (
                (i = (s << 6) | 0),
                (o[u++] = i | (31 - ((256 * n + i) % 31))),
                (a = c(this.input)),
                (this.z.b = u),
                (o = this.z.j()),
                (u = o.length),
                w &&
                  ((o = new Uint8Array(o.buffer)).length <= u + 4 &&
                    ((this.a = new Uint8Array(o.length + 4)),
                    this.a.set(o),
                    (o = this.a)),
                  (o = o.subarray(0, u + 4))),
                (o[u++] = (a >> 24) & 255),
                (o[u++] = (a >> 16) & 255),
                (o[u++] = (a >> 8) & 255),
                (o[u++] = 255 & a),
                o
              );
            }),
              t("Zlib.Inflate", d),
              t("Zlib.Inflate.prototype.decompress", d.prototype.p),
              y("Zlib.Inflate.BufferType", { ADAPTIVE: I.C, BLOCK: I.D }),
              t("Zlib.Deflate", p),
              t("Zlib.Deflate.compress", function (e, t) {
                return new p(e, t).j();
              }),
              t("Zlib.Deflate.prototype.compress", p.prototype.j),
              y("Zlib.Deflate.CompressionType", {
                NONE: ee.NONE,
                FIXED: ee.r,
                DYNAMIC: ee.k,
              });
          }).call(this);
        },
        {},
      ],
      9: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(e("../enums.js"));
          r.default = {
            prefer_hash_algorithm: n.default.hash.sha256,
            encryption_cipher: n.default.symmetric.aes256,
            compression: n.default.compression.zip,
            aead_protect: !1,
            integrity_protect: !0,
            ignore_mdc_error: !1,
            checksum_required: !1,
            verify_expired_keys: !0,
            rsa_blinding: !0,
            use_native: !0,
            zero_copy: !1,
            debug: !1,
            tolerant: !0,
            show_version: !0,
            show_comment: !0,
            versionstring: "OpenPGP.js v2.6.2",
            commentstring: "https://openpgpjs.org",
            keyserver: "https://keyserver.ubuntu.com",
            node_store: "./openpgp.store",
          };
        },
        { "../enums.js": 35 },
      ],
      10: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n = e("./config.js");
          Object.defineProperty(r, "default", {
            enumerable: !0,
            get: function () {
              return (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(n).default;
            },
          });
        },
        { "./config.js": 9 },
      ],
      11: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(e("./cipher"));
          r.default = {
            encrypt: function (e, t, r, i, s) {
              var a = (t = new n.default[t](i)).blockSize,
                o = new Uint8Array(a),
                u = new Uint8Array(a),
                f = new Uint8Array(e.length + 2);
              f.set(e),
                (f[e.length] = e[a - 2]),
                (f[e.length + 1] = e[a - 1]),
                (e = f);
              var h,
                l,
                c,
                d = new Uint8Array(r.length + 2 + 2 * a),
                p = s ? 0 : 2;
              for (h = 0; h < a; h++) o[h] = 0;
              for (u = t.encrypt(o), h = 0; h < a; h++) d[h] = u[h] ^ e[h];
              for (
                o.set(d.subarray(0, a)),
                  u = t.encrypt(o),
                  d[a] = u[0] ^ e[a],
                  d[a + 1] = u[1] ^ e[a + 1],
                  s ? o.set(d.subarray(2, a + 2)) : o.set(d.subarray(0, a)),
                  u = t.encrypt(o),
                  h = 0;
                h < a;
                h++
              )
                d[a + 2 + h] = u[h + p] ^ r[h];
              for (l = a; l < r.length + p; l += a)
                for (
                  c = l + 2 - p,
                    o.set(d.subarray(c, c + a)),
                    u = t.encrypt(o),
                    h = 0;
                  h < a;
                  h++
                )
                  d[a + c + h] = u[h] ^ r[l + h - p];
              return (d = d.subarray(0, r.length + 2 + a));
            },
            mdc: function (e, t, r) {
              var i,
                s = (e = new n.default[e](t)).blockSize,
                a = new Uint8Array(s),
                o = new Uint8Array(s);
              for (i = 0; i < s; i++) a[i] = 0;
              for (a = e.encrypt(a), i = 0; i < s; i++)
                (o[i] = r[i]), (a[i] ^= o[i]);
              o = e.encrypt(o);
              var u = new Uint8Array(a.length + 2);
              return (
                u.set(a),
                (u[a.length] = o[0] ^ r[s]),
                (u[a.length + 1] = o[1] ^ r[s + 1]),
                u
              );
            },
            decrypt: function (e, t, r, i) {
              var s,
                a,
                o,
                u = (e = new n.default[e](t)).blockSize,
                f = new Uint8Array(u),
                h = new Uint8Array(u),
                l = new Uint8Array(r.length - u);
              for (s = 0; s < u; s++) f[s] = 0;
              for (f = e.encrypt(f), s = 0; s < u; s++)
                (h[s] = r[s]), (f[s] ^= h[s]);
              if (
                ((h = e.encrypt(h)),
                f[u - 2] !== (h[0] ^ r[u]) || f[u - 1] !== (h[1] ^ r[u + 1]))
              )
                throw new Error("CFB decrypt: invalid key");
              if (((a = 0), i)) {
                for (s = 0; s < u; s++) f[s] = r[s + 2];
                for (o = u + 2; o < r.length; o += u)
                  for (h = e.encrypt(f), s = 0; s < u && s + o < r.length; s++)
                    (f[s] = r[o + s]),
                      a < l.length && ((l[a] = h[s] ^ f[s]), a++);
              } else {
                for (s = 0; s < u; s++) f[s] = r[s];
                for (o = u; o < r.length; o += u)
                  for (h = e.encrypt(f), s = 0; s < u && s + o < r.length; s++)
                    (f[s] = r[o + s]),
                      a < l.length && ((l[a] = h[s] ^ f[s]), a++);
              }
              return (o = i ? 0 : 2), (l = l.subarray(o, r.length - u - 2 + o));
            },
            normalEncrypt: function (e, t, r, i) {
              var s,
                a = (e = new n.default[e](t)).blockSize,
                o = new Uint8Array(a),
                u = new Uint8Array(a),
                f = 0,
                h = new Uint8Array(r.length),
                l = 0;
              if (null === i) for (s = 0; s < a; s++) u[s] = 0;
              else for (s = 0; s < a; s++) u[s] = i[s];
              for (; r.length > a * f; ) {
                var c = e.encrypt(u);
                for (o = r.subarray(f * a, f * a + a), s = 0; s < o.length; s++)
                  (u[s] = o[s] ^ c[s]), (h[l++] = u[s]);
                f++;
              }
              return h;
            },
            normalDecrypt: function (e, t, r, i) {
              var s,
                a,
                o = (e = new n.default[e](t)).blockSize,
                u = 0,
                f = new Uint8Array(r.length),
                h = 0;
              if (null === i)
                for (s = new Uint8Array(o), a = 0; a < o; a++) s[a] = 0;
              else s = i.subarray(0, o);
              for (; r.length > o * u; ) {
                var l = e.encrypt(s);
                for (
                  s = r.subarray(u * o + 0, u * o + o + 0), a = 0;
                  a < s.length;
                  a++
                )
                  f[h++] = s[a] ^ l[a];
                u++;
              }
              return f;
            },
          };
        },
        { "./cipher": 16 },
      ],
      12: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return 255 & e;
          }
          function i(e) {
            return (e >> 8) & 255;
          }
          function s(e) {
            return (e >> 16) & 255;
          }
          function a(e) {
            return (e >> 24) & 255;
          }
          function o(e, t, r, n) {
            return (
              i(c[255 & e]) |
              (i(c[(t >> 8) & 255]) << 8) |
              (i(c[(r >> 16) & 255]) << 16) |
              (i(c[n >>> 24]) << 24)
            );
          }
          function u(e, t, r) {
            var u, f, h;
            for (
              h = (function (e) {
                var t,
                  r,
                  n = e.length,
                  i = new Array(n / 4);
                if (e && !(n % 4)) {
                  for (t = 0, r = 0; r < n; r += 4)
                    i[t++] =
                      e[r] |
                      (e[r + 1] << 8) |
                      (e[r + 2] << 16) |
                      (e[r + 3] << 24);
                  return i;
                }
              })(e),
                f = t.rounds,
                u = 0;
              u < f - 1;
              u++
            )
              (r[0] = h[0] ^ t.rk[u][0]),
                (r[1] = h[1] ^ t.rk[u][1]),
                (r[2] = h[2] ^ t.rk[u][2]),
                (r[3] = h[3] ^ t.rk[u][3]),
                (h[0] =
                  c[255 & r[0]] ^
                  d[(r[1] >> 8) & 255] ^
                  p[(r[2] >> 16) & 255] ^
                  y[r[3] >>> 24]),
                (h[1] =
                  c[255 & r[1]] ^
                  d[(r[2] >> 8) & 255] ^
                  p[(r[3] >> 16) & 255] ^
                  y[r[0] >>> 24]),
                (h[2] =
                  c[255 & r[2]] ^
                  d[(r[3] >> 8) & 255] ^
                  p[(r[0] >> 16) & 255] ^
                  y[r[1] >>> 24]),
                (h[3] =
                  c[255 & r[3]] ^
                  d[(r[0] >> 8) & 255] ^
                  p[(r[1] >> 16) & 255] ^
                  y[r[2] >>> 24]);
            return (
              (u = f - 1),
              (r[0] = h[0] ^ t.rk[u][0]),
              (r[1] = h[1] ^ t.rk[u][1]),
              (r[2] = h[2] ^ t.rk[u][2]),
              (r[3] = h[3] ^ t.rk[u][3]),
              (h[0] = o(r[0], r[1], r[2], r[3]) ^ t.rk[f][0]),
              (h[1] = o(r[1], r[2], r[3], r[0]) ^ t.rk[f][1]),
              (h[2] = o(r[2], r[3], r[0], r[1]) ^ t.rk[f][2]),
              (h[3] = o(r[3], r[0], r[1], r[2]) ^ t.rk[f][3]),
              (function (e) {
                var t,
                  r = 0,
                  o = e.length,
                  u = new Array(4 * o);
                for (t = 0; t < o; t++)
                  (u[r++] = n(e[t])),
                    (u[r++] = i(e[t])),
                    (u[r++] = s(e[t])),
                    (u[r++] = a(e[t]));
                return u;
              })(h)
            );
          }
          function f(e) {
            var t = function (e) {
              (this.key = (function (e) {
                var t,
                  r,
                  o,
                  u,
                  f,
                  c,
                  d = new Array(m + 1),
                  p = e.length,
                  y = new Array(g),
                  v = new Array(g),
                  w = 0;
                if (16 === p) (c = 10), (t = 4);
                else if (24 === p) (c = 12), (t = 6);
                else {
                  if (32 !== p)
                    throw new Error("Invalid key-length for AES key:" + p);
                  (c = 14), (t = 8);
                }
                for (r = 0; r < m + 1; r++) d[r] = new Uint32Array(4);
                for (r = 0, o = 0; o < p; o++, r += 4)
                  y[o] =
                    e[r] |
                    (e[r + 1] << 8) |
                    (e[r + 2] << 16) |
                    (e[r + 3] << 24);
                for (o = t - 1; o >= 0; o--) v[o] = y[o];
                for (u = 0, f = 0, o = 0; o < t && u < c + 1; ) {
                  for (; o < t && f < 4; o++, f++) d[u][f] = v[o];
                  4 === f && (u++, (f = 0));
                }
                for (; u < c + 1; ) {
                  var b = v[t - 1];
                  if (
                    ((v[0] ^=
                      l[i(b)] |
                      (l[s(b)] << 8) |
                      (l[a(b)] << 16) |
                      (l[n(b)] << 24)),
                    (v[0] ^= h[w++]),
                    8 !== t)
                  )
                    for (o = 1; o < t; o++) v[o] ^= v[o - 1];
                  else {
                    for (o = 1; o < t / 2; o++) v[o] ^= v[o - 1];
                    for (
                      b = v[t / 2 - 1],
                        v[t / 2] ^=
                          l[n(b)] |
                          (l[i(b)] << 8) |
                          (l[s(b)] << 16) |
                          (l[a(b)] << 24),
                        o = t / 2 + 1;
                      o < t;
                      o++
                    )
                      v[o] ^= v[o - 1];
                  }
                  for (o = 0; o < t && u < c + 1; ) {
                    for (; o < t && f < 4; o++, f++) d[u][f] = v[o];
                    4 === f && (u++, (f = 0));
                  }
                }
                return { rounds: c, rk: d };
              })(e)),
                (this._temp = new Uint32Array(this.blockSize / 4)),
                (this.encrypt = function (e) {
                  return u(e, this.key, this._temp);
                });
            };
            return (
              (t.blockSize = t.prototype.blockSize = 16),
              (t.keySize = t.prototype.keySize = e / 8),
              t
            );
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var h = new Uint8Array([
              1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47,
              94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145,
            ]),
            l = new Uint8Array([
              99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215,
              171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162,
              175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52,
              165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154,
              7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90,
              160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252,
              177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251,
              67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64,
              143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205,
              12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115,
              96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11,
              219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149,
              228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234,
              101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221,
              116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97,
              53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142,
              148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191,
              230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22,
            ]),
            c = new Uint32Array([
              2774754246, 2222750968, 2574743534, 2373680118, 234025727,
              3177933782, 2976870366, 1422247313, 1345335392, 50397442,
              2842126286, 2099981142, 436141799, 1658312629, 3870010189,
              2591454956, 1170918031, 2642575903, 1086966153, 2273148410,
              368769775, 3948501426, 3376891790, 200339707, 3970805057,
              1742001331, 4255294047, 3937382213, 3214711843, 4154762323,
              2524082916, 1539358875, 3266819957, 486407649, 2928907069,
              1780885068, 1513502316, 1094664062, 49805301, 1338821763,
              1546925160, 4104496465, 887481809, 150073849, 2473685474,
              1943591083, 1395732834, 1058346282, 201589768, 1388824469,
              1696801606, 1589887901, 672667696, 2711000631, 251987210,
              3046808111, 151455502, 907153956, 2608889883, 1038279391,
              652995533, 1764173646, 3451040383, 2675275242, 453576978,
              2659418909, 1949051992, 773462580, 756751158, 2993581788,
              3998898868, 4221608027, 4132590244, 1295727478, 1641469623,
              3467883389, 2066295122, 1055122397, 1898917726, 2542044179,
              4115878822, 1758581177, 0, 753790401, 1612718144, 536673507,
              3367088505, 3982187446, 3194645204, 1187761037, 3653156455,
              1262041458, 3729410708, 3561770136, 3898103984, 1255133061,
              1808847035, 720367557, 3853167183, 385612781, 3309519750,
              3612167578, 1429418854, 2491778321, 3477423498, 284817897,
              100794884, 2172616702, 4031795360, 1144798328, 3131023141,
              3819481163, 4082192802, 4272137053, 3225436288, 2324664069,
              2912064063, 3164445985, 1211644016, 83228145, 3753688163,
              3249976951, 1977277103, 1663115586, 806359072, 452984805,
              250868733, 1842533055, 1288555905, 336333848, 890442534,
              804056259, 3781124030, 2727843637, 3427026056, 957814574,
              1472513171, 4071073621, 2189328124, 1195195770, 2892260552,
              3881655738, 723065138, 2507371494, 2690670784, 2558624025,
              3511635870, 2145180835, 1713513028, 2116692564, 2878378043,
              2206763019, 3393603212, 703524551, 3552098411, 1007948840,
              2044649127, 3797835452, 487262998, 1994120109, 1004593371,
              1446130276, 1312438900, 503974420, 3679013266, 168166924,
              1814307912, 3831258296, 1573044895, 1859376061, 4021070915,
              2791465668, 2828112185, 2761266481, 937747667, 2339994098,
              854058965, 1137232011, 1496790894, 3077402074, 2358086913,
              1691735473, 3528347292, 3769215305, 3027004632, 4199962284,
              133494003, 636152527, 2942657994, 2390391540, 3920539207,
              403179536, 3585784431, 2289596656, 1864705354, 1915629148,
              605822008, 4054230615, 3350508659, 1371981463, 602466507,
              2094914977, 2624877800, 555687742, 3712699286, 3703422305,
              2257292045, 2240449039, 2423288032, 1111375484, 3300242801,
              2858837708, 3628615824, 84083462, 32962295, 302911004, 2741068226,
              1597322602, 4183250862, 3501832553, 2441512471, 1489093017,
              656219450, 3114180135, 954327513, 335083755, 3013122091,
              856756514, 3144247762, 1893325225, 2307821063, 2811532339,
              3063651117, 572399164, 2458355477, 552200649, 1238290055,
              4283782570, 2015897680, 2061492133, 2408352771, 4171342169,
              2156497161, 386731290, 3669999461, 837215959, 3326231172,
              3093850320, 3275833730, 2962856233, 1999449434, 286199582,
              3417354363, 4233385128, 3602627437, 974525996,
            ]),
            d = new Uint32Array([
              1667483301, 2088564868, 2004348569, 2071721613, 4076011277,
              1802229437, 1869602481, 3318059348, 808476752, 16843267,
              1734856361, 724260477, 4278118169, 3621238114, 2880130534,
              1987505306, 3402272581, 2189565853, 3385428288, 2105408135,
              4210749205, 1499050731, 1195871945, 4042324747, 2913812972,
              3570709351, 2728550397, 2947499498, 2627478463, 2762232823,
              1920132246, 3233848155, 3082253762, 4261273884, 2475900334,
              640044138, 909536346, 1061125697, 4160222466, 3435955023,
              875849820, 2779075060, 3857043764, 4059166984, 1903288979,
              3638078323, 825320019, 353708607, 67373068, 3351745874, 589514341,
              3284376926, 404238376, 2526427041, 84216335, 2593796021,
              117902857, 303178806, 2155879323, 3806519101, 3958099238,
              656887401, 2998042573, 1970662047, 151589403, 2206408094,
              741103732, 437924910, 454768173, 1852759218, 1515893998,
              2694863867, 1381147894, 993752653, 3604395873, 3014884814,
              690573947, 3823361342, 791633521, 2223248279, 1397991157,
              3520182632, 0, 3991781676, 538984544, 4244431647, 2981198280,
              1532737261, 1785386174, 3419114822, 3200149465, 960066123,
              1246401758, 1280088276, 1482207464, 3486483786, 3503340395,
              4025468202, 2863288293, 4227591446, 1128498885, 1296931543,
              859006549, 2240090516, 1162185423, 4193904912, 33686534,
              2139094657, 1347461360, 1010595908, 2678007226, 2829601763,
              1364304627, 2745392638, 1077969088, 2408514954, 2459058093,
              2644320700, 943222856, 4126535940, 3166462943, 3065411521,
              3671764853, 555827811, 269492272, 4294960410, 4092853518,
              3537026925, 3452797260, 202119188, 320022069, 3974939439,
              1600110305, 2543269282, 1145342156, 387395129, 3301217111,
              2812761586, 2122251394, 1027439175, 1684326572, 1566423783,
              421081643, 1936975509, 1616953504, 2172721560, 1330618065,
              3705447295, 572671078, 707417214, 2425371563, 2290617219,
              1179028682, 4008625961, 3099093971, 336865340, 3739133817,
              1583267042, 185275933, 3688607094, 3772832571, 842163286,
              976909390, 168432670, 1229558491, 101059594, 606357612,
              1549580516, 3267534685, 3553869166, 2896970735, 1650640038,
              2442213800, 2509582756, 3840201527, 2038035083, 3890730290,
              3368586051, 926379609, 1835915959, 2374828428, 3587551588,
              1313774802, 2846444e3, 1819072692, 1448520954, 4109693703,
              3941256997, 1701169839, 2054878350, 2930657257, 134746136,
              3132780501, 2021191816, 623200879, 774790258, 471611428,
              2795919345, 3031724999, 3334903633, 3907570467, 3722289532,
              1953818780, 522141217, 1263245021, 3183305180, 2341145990,
              2324303749, 1886445712, 1044282434, 3048567236, 1718013098,
              1212715224, 50529797, 4143380225, 235805714, 1633796771,
              892693087, 1465364217, 3115936208, 2256934801, 3250690392,
              488454695, 2661164985, 3789674808, 4177062675, 2560109491,
              286335539, 1768542907, 3654920560, 2391672713, 2492740519,
              2610638262, 505297954, 2273777042, 3924412704, 3469641545,
              1431677695, 673730680, 3755976058, 2357986191, 2711706104,
              2307459456, 218962455, 3216991706, 3873888049, 1111655622,
              1751699640, 1094812355, 2576951728, 757946999, 252648977,
              2964356043, 1414834428, 3149622742, 370551866,
            ]),
            p = new Uint32Array([
              1673962851, 2096661628, 2012125559, 2079755643, 4076801522,
              1809235307, 1876865391, 3314635973, 811618352, 16909057,
              1741597031, 727088427, 4276558334, 3618988759, 2874009259,
              1995217526, 3398387146, 2183110018, 3381215433, 2113570685,
              4209972730, 1504897881, 1200539975, 4042984432, 2906778797,
              3568527316, 2724199842, 2940594863, 2619588508, 2756966308,
              1927583346, 3231407040, 3077948087, 4259388669, 2470293139,
              642542118, 913070646, 1065238847, 4160029431, 3431157708,
              879254580, 2773611685, 3855693029, 4059629809, 1910674289,
              3635114968, 828527409, 355090197, 67636228, 3348452039, 591815971,
              3281870531, 405809176, 2520228246, 84545285, 2586817946,
              118360327, 304363026, 2149292928, 3806281186, 3956090603,
              659450151, 2994720178, 1978310517, 152181513, 2199756419,
              743994412, 439627290, 456535323, 1859957358, 1521806938,
              2690382752, 1386542674, 997608763, 3602342358, 3011366579,
              693271337, 3822927587, 794718511, 2215876484, 1403450707,
              3518589137, 0, 3988860141, 541089824, 4242743292, 2977548465,
              1538714971, 1792327274, 3415033547, 3194476990, 963791673,
              1251270218, 1285084236, 1487988824, 3481619151, 3501943760,
              4022676207, 2857362858, 4226619131, 1132905795, 1301993293,
              862344499, 2232521861, 1166724933, 4192801017, 33818114,
              2147385727, 1352724560, 1014514748, 2670049951, 2823545768,
              1369633617, 2740846243, 1082179648, 2399505039, 2453646738,
              2636233885, 946882616, 4126213365, 3160661948, 3061301686,
              3668932058, 557998881, 270544912, 4293204735, 4093447923,
              3535760850, 3447803085, 202904588, 321271059, 3972214764,
              1606345055, 2536874647, 1149815876, 388905239, 3297990596,
              2807427751, 2130477694, 1031423805, 1690872932, 1572530013,
              422718233, 1944491379, 1623236704, 2165938305, 1335808335,
              3701702620, 574907938, 710180394, 2419829648, 2282455944,
              1183631942, 4006029806, 3094074296, 338181140, 3735517662,
              1589437022, 185998603, 3685578459, 3772464096, 845436466,
              980700730, 169090570, 1234361161, 101452294, 608726052,
              1555620956, 3265224130, 3552407251, 2890133420, 1657054818,
              2436475025, 2503058581, 3839047652, 2045938553, 3889509095,
              3364570056, 929978679, 1843050349, 2365688973, 3585172693,
              1318900302, 2840191145, 1826141292, 1454176854, 4109567988,
              3939444202, 1707781989, 2062847610, 2923948462, 135272456,
              3127891386, 2029029496, 625635109, 777810478, 473441308,
              2790781350, 3027486644, 3331805638, 3905627112, 3718347997,
              1961401460, 524165407, 1268178251, 3177307325, 2332919435,
              2316273034, 1893765232, 1048330814, 3044132021, 1724688998,
              1217452104, 50726147, 4143383030, 236720654, 1640145761,
              896163637, 1471084887, 3110719673, 2249691526, 3248052417,
              490350365, 2653403550, 3789109473, 4176155640, 2553000856,
              287453969, 1775418217, 3651760345, 2382858638, 2486413204,
              2603464347, 507257374, 2266337927, 3922272489, 3464972750,
              1437269845, 676362280, 3752164063, 2349043596, 2707028129,
              2299101321, 219813645, 3211123391, 3872862694, 1115997762,
              1758509160, 1099088705, 2569646233, 760903469, 253628687,
              2960903088, 1420360788, 3144537787, 371997206,
            ]),
            y = new Uint32Array([
              3332727651, 4169432188, 4003034999, 4136467323, 4279104242,
              3602738027, 3736170351, 2438251973, 1615867952, 33751297,
              3467208551, 1451043627, 3877240574, 3043153879, 1306962859,
              3969545846, 2403715786, 530416258, 2302724553, 4203183485,
              4011195130, 3001768281, 2395555655, 4211863792, 1106029997,
              3009926356, 1610457762, 1173008303, 599760028, 1408738468,
              3835064946, 2606481600, 1975695287, 3776773629, 1034851219,
              1282024998, 1817851446, 2118205247, 4110612471, 2203045068,
              1750873140, 1374987685, 3509904869, 4178113009, 3801313649,
              2876496088, 1649619249, 708777237, 135005188, 2505230279,
              1181033251, 2640233411, 807933976, 933336726, 168756485,
              800430746, 235472647, 607523346, 463175808, 3745374946,
              3441880043, 1315514151, 2144187058, 3936318837, 303761673,
              496927619, 1484008492, 875436570, 908925723, 3702681198,
              3035519578, 1543217312, 2767606354, 1984772923, 3076642518,
              2110698419, 1383803177, 3711886307, 1584475951, 328696964,
              2801095507, 3110654417, 0, 3240947181, 1080041504, 3810524412,
              2043195825, 3069008731, 3569248874, 2370227147, 1742323390,
              1917532473, 2497595978, 2564049996, 2968016984, 2236272591,
              3144405200, 3307925487, 1340451498, 3977706491, 2261074755,
              2597801293, 1716859699, 294946181, 2328839493, 3910203897,
              67502594, 4269899647, 2700103760, 2017737788, 632987551,
              1273211048, 2733855057, 1576969123, 2160083008, 92966799,
              1068339858, 566009245, 1883781176, 4043634165, 1675607228,
              2009183926, 2943736538, 1113792801, 540020752, 3843751935,
              4245615603, 3211645650, 2169294285, 403966988, 641012499,
              3274697964, 3202441055, 899848087, 2295088196, 775493399,
              2472002756, 1441965991, 4236410494, 2051489085, 3366741092,
              3135724893, 841685273, 3868554099, 3231735904, 429425025,
              2664517455, 2743065820, 1147544098, 1417554474, 1001099408,
              193169544, 2362066502, 3341414126, 1809037496, 675025940,
              2809781982, 3168951902, 371002123, 2910247899, 3678134496,
              1683370546, 1951283770, 337512970, 2463844681, 201983494,
              1215046692, 3101973596, 2673722050, 3178157011, 1139780780,
              3299238498, 967348625, 832869781, 3543655652, 4069226873,
              3576883175, 2336475336, 1851340599, 3669454189, 25988493,
              2976175573, 2631028302, 1239460265, 3635702892, 2902087254,
              4077384948, 3475368682, 3400492389, 4102978170, 1206496942,
              270010376, 1876277946, 4035475576, 1248797989, 1550986798,
              941890588, 1475454630, 1942467764, 2538718918, 3408128232,
              2709315037, 3902567540, 1042358047, 2531085131, 1641856445,
              226921355, 260409994, 3767562352, 2084716094, 1908716981,
              3433719398, 2430093384, 100991747, 4144101110, 470945294,
              3265487201, 1784624437, 2935576407, 1775286713, 395413126,
              2572730817, 975641885, 666476190, 3644383713, 3943954680,
              733190296, 573772049, 3535497577, 2842745305, 126455438,
              866620564, 766942107, 1008868894, 361924487, 3374377449,
              2269761230, 2868860245, 1350051880, 2776293343, 59739276,
              1509466529, 159418761, 437718285, 1708834751, 3610371814,
              2227585602, 3501746280, 2193834305, 699439513, 1517759789,
              504434447, 2076946608, 2835108948, 1842789307, 742004246,
            ]),
            g = 8,
            m = 14;
          r.default = { 128: f(128), 192: f(192), 256: f(256) };
        },
        {},
      ],
      13: [
        function (e, t, r) {
          "use strict";
          function n() {}
          function i(e) {
            (this.bf = new n()),
              this.bf.init(e),
              (this.encrypt = function (e) {
                return this.bf.encrypt_block(e);
              });
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i),
            (n.prototype.BLOCKSIZE = 8),
            (n.prototype.SBOXES = [
              [
                3509652390, 2564797868, 805139163, 3491422135, 3101798381,
                1780907670, 3128725573, 4046225305, 614570311, 3012652279,
                134345442, 2240740374, 1667834072, 1901547113, 2757295779,
                4103290238, 227898511, 1921955416, 1904987480, 2182433518,
                2069144605, 3260701109, 2620446009, 720527379, 3318853667,
                677414384, 3393288472, 3101374703, 2390351024, 1614419982,
                1822297739, 2954791486, 3608508353, 3174124327, 2024746970,
                1432378464, 3864339955, 2857741204, 1464375394, 1676153920,
                1439316330, 715854006, 3033291828, 289532110, 2706671279,
                2087905683, 3018724369, 1668267050, 732546397, 1947742710,
                3462151702, 2609353502, 2950085171, 1814351708, 2050118529,
                680887927, 999245976, 1800124847, 3300911131, 1713906067,
                1641548236, 4213287313, 1216130144, 1575780402, 4018429277,
                3917837745, 3693486850, 3949271944, 596196993, 3549867205,
                258830323, 2213823033, 772490370, 2760122372, 1774776394,
                2652871518, 566650946, 4142492826, 1728879713, 2882767088,
                1783734482, 3629395816, 2517608232, 2874225571, 1861159788,
                326777828, 3124490320, 2130389656, 2716951837, 967770486,
                1724537150, 2185432712, 2364442137, 1164943284, 2105845187,
                998989502, 3765401048, 2244026483, 1075463327, 1455516326,
                1322494562, 910128902, 469688178, 1117454909, 936433444,
                3490320968, 3675253459, 1240580251, 122909385, 2157517691,
                634681816, 4142456567, 3825094682, 3061402683, 2540495037,
                79693498, 3249098678, 1084186820, 1583128258, 426386531,
                1761308591, 1047286709, 322548459, 995290223, 1845252383,
                2603652396, 3431023940, 2942221577, 3202600964, 3727903485,
                1712269319, 422464435, 3234572375, 1170764815, 3523960633,
                3117677531, 1434042557, 442511882, 3600875718, 1076654713,
                1738483198, 4213154764, 2393238008, 3677496056, 1014306527,
                4251020053, 793779912, 2902807211, 842905082, 4246964064,
                1395751752, 1040244610, 2656851899, 3396308128, 445077038,
                3742853595, 3577915638, 679411651, 2892444358, 2354009459,
                1767581616, 3150600392, 3791627101, 3102740896, 284835224,
                4246832056, 1258075500, 768725851, 2589189241, 3069724005,
                3532540348, 1274779536, 3789419226, 2764799539, 1660621633,
                3471099624, 4011903706, 913787905, 3497959166, 737222580,
                2514213453, 2928710040, 3937242737, 1804850592, 3499020752,
                2949064160, 2386320175, 2390070455, 2415321851, 4061277028,
                2290661394, 2416832540, 1336762016, 1754252060, 3520065937,
                3014181293, 791618072, 3188594551, 3933548030, 2332172193,
                3852520463, 3043980520, 413987798, 3465142937, 3030929376,
                4245938359, 2093235073, 3534596313, 375366246, 2157278981,
                2479649556, 555357303, 3870105701, 2008414854, 3344188149,
                4221384143, 3956125452, 2067696032, 3594591187, 2921233993,
                2428461, 544322398, 577241275, 1471733935, 610547355,
                4027169054, 1432588573, 1507829418, 2025931657, 3646575487,
                545086370, 48609733, 2200306550, 1653985193, 298326376,
                1316178497, 3007786442, 2064951626, 458293330, 2589141269,
                3591329599, 3164325604, 727753846, 2179363840, 146436021,
                1461446943, 4069977195, 705550613, 3059967265, 3887724982,
                4281599278, 3313849956, 1404054877, 2845806497, 146425753,
                1854211946,
              ],
              [
                1266315497, 3048417604, 3681880366, 3289982499, 290971e4,
                1235738493, 2632868024, 2414719590, 3970600049, 1771706367,
                1449415276, 3266420449, 422970021, 1963543593, 2690192192,
                3826793022, 1062508698, 1531092325, 1804592342, 2583117782,
                2714934279, 4024971509, 1294809318, 4028980673, 1289560198,
                2221992742, 1669523910, 35572830, 157838143, 1052438473,
                1016535060, 1802137761, 1753167236, 1386275462, 3080475397,
                2857371447, 1040679964, 2145300060, 2390574316, 1461121720,
                2956646967, 4031777805, 4028374788, 33600511, 2920084762,
                1018524850, 629373528, 3691585981, 3515945977, 2091462646,
                2486323059, 586499841, 988145025, 935516892, 3367335476,
                2599673255, 2839830854, 265290510, 3972581182, 2759138881,
                3795373465, 1005194799, 847297441, 406762289, 1314163512,
                1332590856, 1866599683, 4127851711, 750260880, 613907577,
                1450815602, 3165620655, 3734664991, 3650291728, 3012275730,
                3704569646, 1427272223, 778793252, 1343938022, 2676280711,
                2052605720, 1946737175, 3164576444, 3914038668, 3967478842,
                3682934266, 1661551462, 3294938066, 4011595847, 840292616,
                3712170807, 616741398, 312560963, 711312465, 1351876610,
                322626781, 1910503582, 271666773, 2175563734, 1594956187,
                70604529, 3617834859, 1007753275, 1495573769, 4069517037,
                2549218298, 2663038764, 504708206, 2263041392, 3941167025,
                2249088522, 1514023603, 1998579484, 1312622330, 694541497,
                2582060303, 2151582166, 1382467621, 776784248, 2618340202,
                3323268794, 2497899128, 2784771155, 503983604, 4076293799,
                907881277, 423175695, 432175456, 1378068232, 4145222326,
                3954048622, 3938656102, 3820766613, 2793130115, 2977904593,
                26017576, 3274890735, 3194772133, 1700274565, 1756076034,
                4006520079, 3677328699, 720338349, 1533947780, 354530856,
                688349552, 3973924725, 1637815568, 332179504, 3949051286,
                53804574, 2852348879, 3044236432, 1282449977, 3583942155,
                3416972820, 4006381244, 1617046695, 2628476075, 3002303598,
                1686838959, 431878346, 2686675385, 1700445008, 1080580658,
                1009431731, 832498133, 3223435511, 2605976345, 2271191193,
                2516031870, 1648197032, 4164389018, 2548247927, 300782431,
                375919233, 238389289, 3353747414, 2531188641, 2019080857,
                1475708069, 455242339, 2609103871, 448939670, 3451063019,
                1395535956, 2413381860, 1841049896, 1491858159, 885456874,
                4264095073, 4001119347, 1565136089, 3898914787, 1108368660,
                540939232, 1173283510, 2745871338, 3681308437, 4207628240,
                3343053890, 4016749493, 1699691293, 1103962373, 3625875870,
                2256883143, 3830138730, 1031889488, 3479347698, 1535977030,
                4236805024, 3251091107, 2132092099, 1774941330, 1199868427,
                1452454533, 157007616, 2904115357, 342012276, 595725824,
                1480756522, 206960106, 497939518, 591360097, 863170706,
                2375253569, 3596610801, 1814182875, 2094937945, 3421402208,
                1082520231, 3463918190, 2785509508, 435703966, 3908032597,
                1641649973, 2842273706, 3305899714, 1510255612, 2148256476,
                2655287854, 3276092548, 4258621189, 236887753, 3681803219,
                274041037, 1734335097, 3815195456, 3317970021, 1899903192,
                1026095262, 4050517792, 356393447, 2410691914, 3873677099,
                3682840055,
              ],
              [
                3913112168, 2491498743, 4132185628, 2489919796, 1091903735,
                1979897079, 3170134830, 3567386728, 3557303409, 857797738,
                1136121015, 1342202287, 507115054, 2535736646, 337727348,
                3213592640, 1301675037, 2528481711, 1895095763, 1721773893,
                3216771564, 62756741, 2142006736, 835421444, 2531993523,
                1442658625, 3659876326, 2882144922, 676362277, 1392781812,
                170690266, 3921047035, 1759253602, 3611846912, 1745797284,
                664899054, 1329594018, 3901205900, 3045908486, 2062866102,
                2865634940, 3543621612, 3464012697, 1080764994, 553557557,
                3656615353, 3996768171, 991055499, 499776247, 1265440854,
                648242737, 3940784050, 980351604, 3713745714, 1749149687,
                3396870395, 4211799374, 3640570775, 1161844396, 3125318951,
                1431517754, 545492359, 4268468663, 3499529547, 1437099964,
                2702547544, 3433638243, 2581715763, 2787789398, 1060185593,
                1593081372, 2418618748, 4260947970, 69676912, 2159744348,
                86519011, 2512459080, 3838209314, 1220612927, 3339683548,
                133810670, 1090789135, 1078426020, 1569222167, 845107691,
                3583754449, 4072456591, 1091646820, 628848692, 1613405280,
                3757631651, 526609435, 236106946, 48312990, 2942717905,
                3402727701, 1797494240, 859738849, 992217954, 4005476642,
                2243076622, 3870952857, 3732016268, 765654824, 3490871365,
                2511836413, 1685915746, 3888969200, 1414112111, 2273134842,
                3281911079, 4080962846, 172450625, 2569994100, 980381355,
                4109958455, 2819808352, 2716589560, 2568741196, 3681446669,
                3329971472, 1835478071, 660984891, 3704678404, 4045999559,
                3422617507, 3040415634, 1762651403, 1719377915, 3470491036,
                2693910283, 3642056355, 3138596744, 1364962596, 2073328063,
                1983633131, 926494387, 3423689081, 2150032023, 4096667949,
                1749200295, 3328846651, 309677260, 2016342300, 1779581495,
                3079819751, 111262694, 1274766160, 443224088, 298511866,
                1025883608, 3806446537, 1145181785, 168956806, 3641502830,
                3584813610, 1689216846, 3666258015, 3200248200, 1692713982,
                2646376535, 4042768518, 1618508792, 1610833997, 3523052358,
                4130873264, 2001055236, 3610705100, 2202168115, 4028541809,
                2961195399, 1006657119, 2006996926, 3186142756, 1430667929,
                3210227297, 1314452623, 4074634658, 4101304120, 2273951170,
                1399257539, 3367210612, 3027628629, 1190975929, 2062231137,
                2333990788, 2221543033, 2438960610, 1181637006, 548689776,
                2362791313, 3372408396, 3104550113, 3145860560, 296247880,
                1970579870, 3078560182, 3769228297, 1714227617, 3291629107,
                3898220290, 166772364, 1251581989, 493813264, 448347421,
                195405023, 2709975567, 677966185, 3703036547, 1463355134,
                2715995803, 1338867538, 1343315457, 2802222074, 2684532164,
                233230375, 2599980071, 2000651841, 3277868038, 1638401717,
                4028070440, 3237316320, 6314154, 819756386, 300326615,
                590932579, 1405279636, 3267499572, 3150704214, 2428286686,
                3959192993, 3461946742, 1862657033, 1266418056, 963775037,
                2089974820, 2263052895, 1917689273, 448879540, 3550394620,
                3981727096, 150775221, 3627908307, 1303187396, 508620638,
                2975983352, 2726630617, 1817252668, 1876281319, 1457606340,
                908771278, 3720792119, 3617206836, 2455994898, 1729034894,
                1080033504,
              ],
              [
                976866871, 3556439503, 2881648439, 1522871579, 1555064734,
                1336096578, 3548522304, 2579274686, 3574697629, 3205460757,
                3593280638, 3338716283, 3079412587, 564236357, 2993598910,
                1781952180, 1464380207, 3163844217, 3332601554, 1699332808,
                1393555694, 1183702653, 3581086237, 1288719814, 691649499,
                2847557200, 2895455976, 3193889540, 2717570544, 1781354906,
                1676643554, 2592534050, 3230253752, 1126444790, 2770207658,
                2633158820, 2210423226, 2615765581, 2414155088, 3127139286,
                673620729, 2805611233, 1269405062, 4015350505, 3341807571,
                4149409754, 1057255273, 2012875353, 2162469141, 2276492801,
                2601117357, 993977747, 3918593370, 2654263191, 753973209,
                36408145, 2530585658, 25011837, 3520020182, 2088578344,
                530523599, 2918365339, 1524020338, 1518925132, 3760827505,
                3759777254, 1202760957, 3985898139, 3906192525, 674977740,
                4174734889, 2031300136, 2019492241, 3983892565, 4153806404,
                3822280332, 352677332, 2297720250, 60907813, 90501309,
                3286998549, 1016092578, 2535922412, 2839152426, 457141659,
                509813237, 4120667899, 652014361, 1966332200, 2975202805,
                55981186, 2327461051, 676427537, 3255491064, 2882294119,
                3433927263, 1307055953, 942726286, 933058658, 2468411793,
                3933900994, 4215176142, 1361170020, 2001714738, 2830558078,
                3274259782, 1222529897, 1679025792, 2729314320, 3714953764,
                1770335741, 151462246, 3013232138, 1682292957, 1483529935,
                471910574, 1539241949, 458788160, 3436315007, 1807016891,
                3718408830, 978976581, 1043663428, 3165965781, 1927990952,
                4200891579, 2372276910, 3208408903, 3533431907, 1412390302,
                2931980059, 4132332400, 1947078029, 3881505623, 4168226417,
                2941484381, 1077988104, 1320477388, 886195818, 18198404,
                3786409e3, 2509781533, 112762804, 3463356488, 1866414978,
                891333506, 18488651, 661792760, 1628790961, 3885187036,
                3141171499, 876946877, 2693282273, 1372485963, 791857591,
                2686433993, 3759982718, 3167212022, 3472953795, 2716379847,
                445679433, 3561995674, 3504004811, 3574258232, 54117162,
                3331405415, 2381918588, 3769707343, 4154350007, 1140177722,
                4074052095, 668550556, 3214352940, 367459370, 261225585,
                2610173221, 4209349473, 3468074219, 3265815641, 314222801,
                3066103646, 3808782860, 282218597, 3406013506, 3773591054,
                379116347, 1285071038, 846784868, 2669647154, 3771962079,
                3550491691, 2305946142, 453669953, 1268987020, 3317592352,
                3279303384, 3744833421, 2610507566, 3859509063, 266596637,
                3847019092, 517658769, 3462560207, 3443424879, 370717030,
                4247526661, 2224018117, 4143653529, 4112773975, 2788324899,
                2477274417, 1456262402, 2901442914, 1517677493, 1846949527,
                2295493580, 3734397586, 2176403920, 1280348187, 1908823572,
                3871786941, 846861322, 1172426758, 3287448474, 3383383037,
                1655181056, 3139813346, 901632758, 1897031941, 2986607138,
                3066810236, 3447102507, 1393639104, 373351379, 950779232,
                625454576, 3124240540, 4148612726, 2007998917, 544563296,
                2244738638, 2330496472, 2058025392, 1291430526, 424198748,
                50039436, 29584100, 3605783033, 2429876329, 2791104160,
                1057563949, 3255363231, 3075367218, 3463963227, 1469046755,
                985887462,
              ],
            ]),
            (n.prototype.PARRAY = [
              608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832,
              137296536, 3964562569, 1160258022, 953160567, 3193202383,
              887688300, 3232508343, 3380367581, 1065670069, 3041331479,
              2450970073, 2306472731,
            ]),
            (n.prototype.NN = 16),
            (n.prototype._clean = function (e) {
              if (e < 0) {
                e = (2147483647 & e) + 2147483648;
              }
              return e;
            }),
            (n.prototype._F = function (e) {
              var t, r, n, i, s;
              return (
                (i = 255 & e),
                (e >>>= 8),
                (n = 255 & e),
                (e >>>= 8),
                (r = 255 & e),
                (e >>>= 8),
                (t = 255 & e),
                (s = this.sboxes[0][t] + this.sboxes[1][r]),
                (s ^= this.sboxes[2][n]),
                (s += this.sboxes[3][i])
              );
            }),
            (n.prototype._encrypt_block = function (e) {
              var t,
                r = e[0],
                n = e[1];
              for (t = 0; t < this.NN; ++t) {
                var i = (r ^= this.parray[t]);
                (r = n = this._F(r) ^ n), (n = i);
              }
              (r ^= this.parray[this.NN + 0]),
                (n ^= this.parray[this.NN + 1]),
                (e[0] = this._clean(n)),
                (e[1] = this._clean(r));
            }),
            (n.prototype.encrypt_block = function (e) {
              var t,
                r = [0, 0],
                n = this.BLOCKSIZE / 2;
              for (t = 0; t < this.BLOCKSIZE / 2; ++t)
                (r[0] = (r[0] << 8) | (255 & e[t + 0])),
                  (r[1] = (r[1] << 8) | (255 & e[t + n]));
              this._encrypt_block(r);
              var i = [];
              for (t = 0; t < this.BLOCKSIZE / 2; ++t)
                (i[t + 0] = (r[0] >>> (24 - 8 * t)) & 255),
                  (i[t + n] = (r[1] >>> (24 - 8 * t)) & 255);
              return i;
            }),
            (n.prototype._decrypt_block = function (e) {
              var t,
                r = e[0],
                n = e[1];
              for (t = this.NN + 1; t > 1; --t) {
                var i = (r ^= this.parray[t]);
                (r = n = this._F(r) ^ n), (n = i);
              }
              (r ^= this.parray[1]),
                (n ^= this.parray[0]),
                (e[0] = this._clean(n)),
                (e[1] = this._clean(r));
            }),
            (n.prototype.init = function (e) {
              var t,
                r = 0;
              for (this.parray = [], t = 0; t < this.NN + 2; ++t) {
                var n,
                  i = 0;
                for (n = 0; n < 4; ++n)
                  (i = (i << 8) | (255 & e[r])), ++r >= e.length && (r = 0);
                this.parray[t] = this.PARRAY[t] ^ i;
              }
              for (this.sboxes = [], t = 0; t < 4; ++t)
                for (this.sboxes[t] = [], r = 0; r < 256; ++r)
                  this.sboxes[t][r] = this.SBOXES[t][r];
              var s = [0, 0];
              for (t = 0; t < this.NN + 2; t += 2)
                this._encrypt_block(s),
                  (this.parray[t + 0] = s[0]),
                  (this.parray[t + 1] = s[1]);
              for (t = 0; t < 4; ++t)
                for (r = 0; r < 256; r += 2)
                  this._encrypt_block(s),
                    (this.sboxes[t][r + 0] = s[0]),
                    (this.sboxes[t][r + 1] = s[1]);
            }),
            (i.keySize = i.prototype.keySize = 16),
            (i.blockSize = i.prototype.blockSize = 16);
        },
        {},
      ],
      14: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            (this.cast5 = new (function () {
              function e(e, t, r) {
                var n = t + e,
                  i = (n << r) | (n >>> (32 - r));
                return (
                  (s[0][i >>> 24] ^ s[1][(i >>> 16) & 255]) -
                  s[2][(i >>> 8) & 255] +
                  s[3][255 & i]
                );
              }
              function t(e, t, r) {
                var n = t ^ e,
                  i = (n << r) | (n >>> (32 - r));
                return (
                  (s[0][i >>> 24] -
                    s[1][(i >>> 16) & 255] +
                    s[2][(i >>> 8) & 255]) ^
                  s[3][255 & i]
                );
              }
              function r(e, t, r) {
                var n = t - e,
                  i = (n << r) | (n >>> (32 - r));
                return (
                  ((s[0][i >>> 24] + s[1][(i >>> 16) & 255]) ^
                    s[2][(i >>> 8) & 255]) -
                  s[3][255 & i]
                );
              }
              (this.BlockSize = 8),
                (this.KeySize = 16),
                (this.setKey = function (e) {
                  if (
                    ((this.masking = new Array(16)),
                    (this.rotate = new Array(16)),
                    this.reset(),
                    e.length !== this.KeySize)
                  )
                    throw new Error("CAST-128: keys must be 16 bytes");
                  return this.keySchedule(e), !0;
                }),
                (this.reset = function () {
                  for (var e = 0; e < 16; e++)
                    (this.masking[e] = 0), (this.rotate[e] = 0);
                }),
                (this.getBlockSize = function () {
                  return this.BlockSize;
                }),
                (this.encrypt = function (n) {
                  for (
                    var i = new Array(n.length), s = 0;
                    s < n.length;
                    s += 8
                  ) {
                    var a,
                      o =
                        (n[s] << 24) |
                        (n[s + 1] << 16) |
                        (n[s + 2] << 8) |
                        n[s + 3],
                      u =
                        (n[s + 4] << 24) |
                        (n[s + 5] << 16) |
                        (n[s + 6] << 8) |
                        n[s + 7];
                    (a = u),
                      (u = o ^ e(u, this.masking[0], this.rotate[0])),
                      (o = a),
                      (a = u),
                      (u = o ^ t(u, this.masking[1], this.rotate[1])),
                      (o = a),
                      (a = u),
                      (u = o ^ r(u, this.masking[2], this.rotate[2])),
                      (o = a),
                      (a = u),
                      (u = o ^ e(u, this.masking[3], this.rotate[3])),
                      (o = a),
                      (a = u),
                      (u = o ^ t(u, this.masking[4], this.rotate[4])),
                      (o = a),
                      (a = u),
                      (u = o ^ r(u, this.masking[5], this.rotate[5])),
                      (o = a),
                      (a = u),
                      (u = o ^ e(u, this.masking[6], this.rotate[6])),
                      (o = a),
                      (a = u),
                      (u = o ^ t(u, this.masking[7], this.rotate[7])),
                      (o = a),
                      (a = u),
                      (u = o ^ r(u, this.masking[8], this.rotate[8])),
                      (o = a),
                      (a = u),
                      (u = o ^ e(u, this.masking[9], this.rotate[9])),
                      (o = a),
                      (a = u),
                      (u = o ^ t(u, this.masking[10], this.rotate[10])),
                      (o = a),
                      (a = u),
                      (u = o ^ r(u, this.masking[11], this.rotate[11])),
                      (o = a),
                      (a = u),
                      (u = o ^ e(u, this.masking[12], this.rotate[12])),
                      (o = a),
                      (a = u),
                      (u = o ^ t(u, this.masking[13], this.rotate[13])),
                      (o = a),
                      (a = u),
                      (u = o ^ r(u, this.masking[14], this.rotate[14])),
                      (o = a),
                      (a = u),
                      (u = o ^ e(u, this.masking[15], this.rotate[15])),
                      (o = a),
                      (i[s] = (u >>> 24) & 255),
                      (i[s + 1] = (u >>> 16) & 255),
                      (i[s + 2] = (u >>> 8) & 255),
                      (i[s + 3] = 255 & u),
                      (i[s + 4] = (o >>> 24) & 255),
                      (i[s + 5] = (o >>> 16) & 255),
                      (i[s + 6] = (o >>> 8) & 255),
                      (i[s + 7] = 255 & o);
                  }
                  return i;
                }),
                (this.decrypt = function (n) {
                  for (
                    var i = new Array(n.length), s = 0;
                    s < n.length;
                    s += 8
                  ) {
                    var a,
                      o =
                        (n[s] << 24) |
                        (n[s + 1] << 16) |
                        (n[s + 2] << 8) |
                        n[s + 3],
                      u =
                        (n[s + 4] << 24) |
                        (n[s + 5] << 16) |
                        (n[s + 6] << 8) |
                        n[s + 7];
                    (a = u),
                      (u = o ^ e(u, this.masking[15], this.rotate[15])),
                      (o = a),
                      (a = u),
                      (u = o ^ r(u, this.masking[14], this.rotate[14])),
                      (o = a),
                      (a = u),
                      (u = o ^ t(u, this.masking[13], this.rotate[13])),
                      (o = a),
                      (a = u),
                      (u = o ^ e(u, this.masking[12], this.rotate[12])),
                      (o = a),
                      (a = u),
                      (u = o ^ r(u, this.masking[11], this.rotate[11])),
                      (o = a),
                      (a = u),
                      (u = o ^ t(u, this.masking[10], this.rotate[10])),
                      (o = a),
                      (a = u),
                      (u = o ^ e(u, this.masking[9], this.rotate[9])),
                      (o = a),
                      (a = u),
                      (u = o ^ r(u, this.masking[8], this.rotate[8])),
                      (o = a),
                      (a = u),
                      (u = o ^ t(u, this.masking[7], this.rotate[7])),
                      (o = a),
                      (a = u),
                      (u = o ^ e(u, this.masking[6], this.rotate[6])),
                      (o = a),
                      (a = u),
                      (u = o ^ r(u, this.masking[5], this.rotate[5])),
                      (o = a),
                      (a = u),
                      (u = o ^ t(u, this.masking[4], this.rotate[4])),
                      (o = a),
                      (a = u),
                      (u = o ^ e(u, this.masking[3], this.rotate[3])),
                      (o = a),
                      (a = u),
                      (u = o ^ r(u, this.masking[2], this.rotate[2])),
                      (o = a),
                      (a = u),
                      (u = o ^ t(u, this.masking[1], this.rotate[1])),
                      (o = a),
                      (a = u),
                      (u = o ^ e(u, this.masking[0], this.rotate[0])),
                      (o = a),
                      (i[s] = (u >>> 24) & 255),
                      (i[s + 1] = (u >>> 16) & 255),
                      (i[s + 2] = (u >>> 8) & 255),
                      (i[s + 3] = 255 & u),
                      (i[s + 4] = (o >>> 24) & 255),
                      (i[s + 5] = (o >> 16) & 255),
                      (i[s + 6] = (o >> 8) & 255),
                      (i[s + 7] = 255 & o);
                  }
                  return i;
                });
              var n = new Array(4);
              (n[0] = new Array(4)),
                (n[0][0] = new Array(4, 0, 13, 15, 12, 14, 8)),
                (n[0][1] = new Array(5, 2, 16, 18, 17, 19, 10)),
                (n[0][2] = new Array(6, 3, 23, 22, 21, 20, 9)),
                (n[0][3] = new Array(7, 1, 26, 25, 27, 24, 11)),
                (n[1] = new Array(4)),
                (n[1][0] = new Array(0, 6, 21, 23, 20, 22, 16)),
                (n[1][1] = new Array(1, 4, 0, 2, 1, 3, 18)),
                (n[1][2] = new Array(2, 5, 7, 6, 5, 4, 17)),
                (n[1][3] = new Array(3, 7, 10, 9, 11, 8, 19)),
                (n[2] = new Array(4)),
                (n[2][0] = new Array(4, 0, 13, 15, 12, 14, 8)),
                (n[2][1] = new Array(5, 2, 16, 18, 17, 19, 10)),
                (n[2][2] = new Array(6, 3, 23, 22, 21, 20, 9)),
                (n[2][3] = new Array(7, 1, 26, 25, 27, 24, 11)),
                (n[3] = new Array(4)),
                (n[3][0] = new Array(0, 6, 21, 23, 20, 22, 16)),
                (n[3][1] = new Array(1, 4, 0, 2, 1, 3, 18)),
                (n[3][2] = new Array(2, 5, 7, 6, 5, 4, 17)),
                (n[3][3] = new Array(3, 7, 10, 9, 11, 8, 19));
              var i = new Array(4);
              (i[0] = new Array(4)),
                (i[0][0] = new Array(24, 25, 23, 22, 18)),
                (i[0][1] = new Array(26, 27, 21, 20, 22)),
                (i[0][2] = new Array(28, 29, 19, 18, 25)),
                (i[0][3] = new Array(30, 31, 17, 16, 28)),
                (i[1] = new Array(4)),
                (i[1][0] = new Array(3, 2, 12, 13, 8)),
                (i[1][1] = new Array(1, 0, 14, 15, 13)),
                (i[1][2] = new Array(7, 6, 8, 9, 3)),
                (i[1][3] = new Array(5, 4, 10, 11, 7)),
                (i[2] = new Array(4)),
                (i[2][0] = new Array(19, 18, 28, 29, 25)),
                (i[2][1] = new Array(17, 16, 30, 31, 28)),
                (i[2][2] = new Array(23, 22, 24, 25, 18)),
                (i[2][3] = new Array(21, 20, 26, 27, 22)),
                (i[3] = new Array(4)),
                (i[3][0] = new Array(8, 9, 7, 6, 3)),
                (i[3][1] = new Array(10, 11, 5, 4, 7)),
                (i[3][2] = new Array(12, 13, 3, 2, 8)),
                (i[3][3] = new Array(14, 15, 1, 0, 13)),
                (this.keySchedule = function (e) {
                  var t,
                    r,
                    a = new Array(8),
                    o = new Array(32);
                  for (t = 0; t < 4; t++)
                    (r = 4 * t),
                      (a[t] =
                        (e[r] << 24) |
                        (e[r + 1] << 16) |
                        (e[r + 2] << 8) |
                        e[r + 3]);
                  for (var u, f = [6, 7, 4, 5], h = 0, l = 0; l < 2; l++)
                    for (var c = 0; c < 4; c++) {
                      for (r = 0; r < 4; r++) {
                        var d = n[c][r];
                        (u = a[d[1]]),
                          (u ^=
                            s[4][
                              (a[d[2] >>> 2] >>> (24 - 8 * (3 & d[2]))) & 255
                            ]),
                          (u ^=
                            s[5][
                              (a[d[3] >>> 2] >>> (24 - 8 * (3 & d[3]))) & 255
                            ]),
                          (u ^=
                            s[6][
                              (a[d[4] >>> 2] >>> (24 - 8 * (3 & d[4]))) & 255
                            ]),
                          (u ^=
                            s[7][
                              (a[d[5] >>> 2] >>> (24 - 8 * (3 & d[5]))) & 255
                            ]),
                          (u ^=
                            s[f[r]][
                              (a[d[6] >>> 2] >>> (24 - 8 * (3 & d[6]))) & 255
                            ]),
                          (a[d[0]] = u);
                      }
                      for (r = 0; r < 4; r++) {
                        var p = i[c][r];
                        (u =
                          s[4][
                            (a[p[0] >>> 2] >>> (24 - 8 * (3 & p[0]))) & 255
                          ]),
                          (u ^=
                            s[5][
                              (a[p[1] >>> 2] >>> (24 - 8 * (3 & p[1]))) & 255
                            ]),
                          (u ^=
                            s[6][
                              (a[p[2] >>> 2] >>> (24 - 8 * (3 & p[2]))) & 255
                            ]),
                          (u ^=
                            s[7][
                              (a[p[3] >>> 2] >>> (24 - 8 * (3 & p[3]))) & 255
                            ]),
                          (u ^=
                            s[4 + r][
                              (a[p[4] >>> 2] >>> (24 - 8 * (3 & p[4]))) & 255
                            ]),
                          (o[h] = u),
                          h++;
                      }
                    }
                  for (t = 0; t < 16; t++)
                    (this.masking[t] = o[t]), (this.rotate[t] = 31 & o[16 + t]);
                });
              var s = new Array(8);
              (s[0] = new Array(
                821772500,
                2678128395,
                1810681135,
                1059425402,
                505495343,
                2617265619,
                1610868032,
                3483355465,
                3218386727,
                2294005173,
                3791863952,
                2563806837,
                1852023008,
                365126098,
                3269944861,
                584384398,
                677919599,
                3229601881,
                4280515016,
                2002735330,
                1136869587,
                3744433750,
                2289869850,
                2731719981,
                2714362070,
                879511577,
                1639411079,
                575934255,
                717107937,
                2857637483,
                576097850,
                2731753936,
                1725645e3,
                2810460463,
                5111599,
                767152862,
                2543075244,
                1251459544,
                1383482551,
                3052681127,
                3089939183,
                3612463449,
                1878520045,
                1510570527,
                2189125840,
                2431448366,
                582008916,
                3163445557,
                1265446783,
                1354458274,
                3529918736,
                3202711853,
                3073581712,
                3912963487,
                3029263377,
                1275016285,
                4249207360,
                2905708351,
                3304509486,
                1442611557,
                3585198765,
                2712415662,
                2731849581,
                3248163920,
                2283946226,
                208555832,
                2766454743,
                1331405426,
                1447828783,
                3315356441,
                3108627284,
                2957404670,
                2981538698,
                3339933917,
                1669711173,
                286233437,
                1465092821,
                1782121619,
                3862771680,
                710211251,
                980974943,
                1651941557,
                430374111,
                2051154026,
                704238805,
                4128970897,
                3144820574,
                2857402727,
                948965521,
                3333752299,
                2227686284,
                718756367,
                2269778983,
                2731643755,
                718440111,
                2857816721,
                3616097120,
                1113355533,
                2478022182,
                410092745,
                1811985197,
                1944238868,
                2696854588,
                1415722873,
                1682284203,
                1060277122,
                1998114690,
                1503841958,
                82706478,
                2315155686,
                1068173648,
                845149890,
                2167947013,
                1768146376,
                1993038550,
                3566826697,
                3390574031,
                940016341,
                3355073782,
                2328040721,
                904371731,
                1205506512,
                4094660742,
                2816623006,
                825647681,
                85914773,
                2857843460,
                1249926541,
                1417871568,
                3287612,
                3211054559,
                3126306446,
                1975924523,
                1353700161,
                2814456437,
                2438597621,
                1800716203,
                722146342,
                2873936343,
                1151126914,
                4160483941,
                2877670899,
                458611604,
                2866078500,
                3483680063,
                770352098,
                2652916994,
                3367839148,
                3940505011,
                3585973912,
                3809620402,
                718646636,
                2504206814,
                2914927912,
                3631288169,
                2857486607,
                2860018678,
                575749918,
                2857478043,
                718488780,
                2069512688,
                3548183469,
                453416197,
                1106044049,
                3032691430,
                52586708,
                3378514636,
                3459808877,
                3211506028,
                1785789304,
                218356169,
                3571399134,
                3759170522,
                1194783844,
                1523787992,
                3007827094,
                1975193539,
                2555452411,
                1341901877,
                3045838698,
                3776907964,
                3217423946,
                2802510864,
                2889438986,
                1057244207,
                1636348243,
                3761863214,
                1462225785,
                2632663439,
                481089165,
                718503062,
                24497053,
                3332243209,
                3344655856,
                3655024856,
                3960371065,
                1195698900,
                2971415156,
                3710176158,
                2115785917,
                4027663609,
                3525578417,
                2524296189,
                2745972565,
                3564906415,
                1372086093,
                1452307862,
                2780501478,
                1476592880,
                3389271281,
                18495466,
                2378148571,
                901398090,
                891748256,
                3279637769,
                3157290713,
                2560960102,
                1447622437,
                4284372637,
                216884176,
                2086908623,
                1879786977,
                3588903153,
                2242455666,
                2938092967,
                3559082096,
                2810645491,
                758861177,
                1121993112,
                215018983,
                642190776,
                4169236812,
                1196255959,
                2081185372,
                3508738393,
                941322904,
                4124243163,
                2877523539,
                1848581667,
                2205260958,
                3180453958,
                2589345134,
                3694731276,
                550028657,
                2519456284,
                3789985535,
                2973870856,
                2093648313,
                443148163,
                46942275,
                2734146937,
                1117713533,
                1115362972,
                1523183689,
                3717140224,
                1551984063,
              )),
                (s[1] = new Array(
                  522195092,
                  4010518363,
                  1776537470,
                  960447360,
                  4267822970,
                  4005896314,
                  1435016340,
                  1929119313,
                  2913464185,
                  1310552629,
                  3579470798,
                  3724818106,
                  2579771631,
                  1594623892,
                  417127293,
                  2715217907,
                  2696228731,
                  1508390405,
                  3994398868,
                  3925858569,
                  3695444102,
                  4019471449,
                  3129199795,
                  3770928635,
                  3520741761,
                  990456497,
                  4187484609,
                  2783367035,
                  21106139,
                  3840405339,
                  631373633,
                  3783325702,
                  532942976,
                  396095098,
                  3548038825,
                  4267192484,
                  2564721535,
                  2011709262,
                  2039648873,
                  620404603,
                  3776170075,
                  2898526339,
                  3612357925,
                  4159332703,
                  1645490516,
                  223693667,
                  1567101217,
                  3362177881,
                  1029951347,
                  3470931136,
                  3570957959,
                  1550265121,
                  119497089,
                  972513919,
                  907948164,
                  3840628539,
                  1613718692,
                  3594177948,
                  465323573,
                  2659255085,
                  654439692,
                  2575596212,
                  2699288441,
                  3127702412,
                  277098644,
                  624404830,
                  4100943870,
                  2717858591,
                  546110314,
                  2403699828,
                  3655377447,
                  1321679412,
                  4236791657,
                  1045293279,
                  4010672264,
                  895050893,
                  2319792268,
                  494945126,
                  1914543101,
                  2777056443,
                  3894764339,
                  2219737618,
                  311263384,
                  4275257268,
                  3458730721,
                  669096869,
                  3584475730,
                  3835122877,
                  3319158237,
                  3949359204,
                  2005142349,
                  2713102337,
                  2228954793,
                  3769984788,
                  569394103,
                  3855636576,
                  1425027204,
                  108000370,
                  2736431443,
                  3671869269,
                  3043122623,
                  1750473702,
                  2211081108,
                  762237499,
                  3972989403,
                  2798899386,
                  3061857628,
                  2943854345,
                  867476300,
                  964413654,
                  1591880597,
                  1594774276,
                  2179821409,
                  552026980,
                  3026064248,
                  3726140315,
                  2283577634,
                  3110545105,
                  2152310760,
                  582474363,
                  1582640421,
                  1383256631,
                  2043843868,
                  3322775884,
                  1217180674,
                  463797851,
                  2763038571,
                  480777679,
                  2718707717,
                  2289164131,
                  3118346187,
                  214354409,
                  200212307,
                  3810608407,
                  3025414197,
                  2674075964,
                  3997296425,
                  1847405948,
                  1342460550,
                  510035443,
                  4080271814,
                  815934613,
                  833030224,
                  1620250387,
                  1945732119,
                  2703661145,
                  3966000196,
                  1388869545,
                  3456054182,
                  2687178561,
                  2092620194,
                  562037615,
                  1356438536,
                  3409922145,
                  3261847397,
                  1688467115,
                  2150901366,
                  631725691,
                  3840332284,
                  549916902,
                  3455104640,
                  394546491,
                  837744717,
                  2114462948,
                  751520235,
                  2221554606,
                  2415360136,
                  3999097078,
                  2063029875,
                  803036379,
                  2702586305,
                  821456707,
                  3019566164,
                  360699898,
                  4018502092,
                  3511869016,
                  3677355358,
                  2402471449,
                  812317050,
                  49299192,
                  2570164949,
                  3259169295,
                  2816732080,
                  3331213574,
                  3101303564,
                  2156015656,
                  3705598920,
                  3546263921,
                  143268808,
                  3200304480,
                  1638124008,
                  3165189453,
                  3341807610,
                  578956953,
                  2193977524,
                  3638120073,
                  2333881532,
                  807278310,
                  658237817,
                  2969561766,
                  1641658566,
                  11683945,
                  3086995007,
                  148645947,
                  1138423386,
                  4158756760,
                  1981396783,
                  2401016740,
                  3699783584,
                  380097457,
                  2680394679,
                  2803068651,
                  3334260286,
                  441530178,
                  4016580796,
                  1375954390,
                  761952171,
                  891809099,
                  2183123478,
                  157052462,
                  3683840763,
                  1592404427,
                  341349109,
                  2438483839,
                  1417898363,
                  644327628,
                  2233032776,
                  2353769706,
                  2201510100,
                  220455161,
                  1815641738,
                  182899273,
                  2995019788,
                  3627381533,
                  3702638151,
                  2890684138,
                  1052606899,
                  588164016,
                  1681439879,
                  4038439418,
                  2405343923,
                  4229449282,
                  167996282,
                  1336969661,
                  1688053129,
                  2739224926,
                  1543734051,
                  1046297529,
                  1138201970,
                  2121126012,
                  115334942,
                  1819067631,
                  1902159161,
                  1941945968,
                  2206692869,
                  1159982321,
                )),
                (s[2] = new Array(
                  2381300288,
                  637164959,
                  3952098751,
                  3893414151,
                  1197506559,
                  916448331,
                  2350892612,
                  2932787856,
                  3199334847,
                  4009478890,
                  3905886544,
                  1373570990,
                  2450425862,
                  4037870920,
                  3778841987,
                  2456817877,
                  286293407,
                  124026297,
                  3001279700,
                  1028597854,
                  3115296800,
                  4208886496,
                  2691114635,
                  2188540206,
                  1430237888,
                  1218109995,
                  3572471700,
                  308166588,
                  570424558,
                  2187009021,
                  2455094765,
                  307733056,
                  1310360322,
                  3135275007,
                  1384269543,
                  2388071438,
                  863238079,
                  2359263624,
                  2801553128,
                  3380786597,
                  2831162807,
                  1470087780,
                  1728663345,
                  4072488799,
                  1090516929,
                  532123132,
                  2389430977,
                  1132193179,
                  2578464191,
                  3051079243,
                  1670234342,
                  1434557849,
                  2711078940,
                  1241591150,
                  3314043432,
                  3435360113,
                  3091448339,
                  1812415473,
                  2198440252,
                  267246943,
                  796911696,
                  3619716990,
                  38830015,
                  1526438404,
                  2806502096,
                  374413614,
                  2943401790,
                  1489179520,
                  1603809326,
                  1920779204,
                  168801282,
                  260042626,
                  2358705581,
                  1563175598,
                  2397674057,
                  1356499128,
                  2217211040,
                  514611088,
                  2037363785,
                  2186468373,
                  4022173083,
                  2792511869,
                  2913485016,
                  1173701892,
                  4200428547,
                  3896427269,
                  1334932762,
                  2455136706,
                  602925377,
                  2835607854,
                  1613172210,
                  41346230,
                  2499634548,
                  2457437618,
                  2188827595,
                  41386358,
                  4172255629,
                  1313404830,
                  2405527007,
                  3801973774,
                  2217704835,
                  873260488,
                  2528884354,
                  2478092616,
                  4012915883,
                  2555359016,
                  2006953883,
                  2463913485,
                  575479328,
                  2218240648,
                  2099895446,
                  660001756,
                  2341502190,
                  3038761536,
                  3888151779,
                  3848713377,
                  3286851934,
                  1022894237,
                  1620365795,
                  3449594689,
                  1551255054,
                  15374395,
                  3570825345,
                  4249311020,
                  4151111129,
                  3181912732,
                  310226346,
                  1133119310,
                  530038928,
                  136043402,
                  2476768958,
                  3107506709,
                  2544909567,
                  1036173560,
                  2367337196,
                  1681395281,
                  1758231547,
                  3641649032,
                  306774401,
                  1575354324,
                  3716085866,
                  1990386196,
                  3114533736,
                  2455606671,
                  1262092282,
                  3124342505,
                  2768229131,
                  4210529083,
                  1833535011,
                  423410938,
                  660763973,
                  2187129978,
                  1639812e3,
                  3508421329,
                  3467445492,
                  310289298,
                  272797111,
                  2188552562,
                  2456863912,
                  310240523,
                  677093832,
                  1013118031,
                  901835429,
                  3892695601,
                  1116285435,
                  3036471170,
                  1337354835,
                  243122523,
                  520626091,
                  277223598,
                  4244441197,
                  4194248841,
                  1766575121,
                  594173102,
                  316590669,
                  742362309,
                  3536858622,
                  4176435350,
                  3838792410,
                  2501204839,
                  1229605004,
                  3115755532,
                  1552908988,
                  2312334149,
                  979407927,
                  3959474601,
                  1148277331,
                  176638793,
                  3614686272,
                  2083809052,
                  40992502,
                  1340822838,
                  2731552767,
                  3535757508,
                  3560899520,
                  1354035053,
                  122129617,
                  7215240,
                  2732932949,
                  3118912700,
                  2718203926,
                  2539075635,
                  3609230695,
                  3725561661,
                  1928887091,
                  2882293555,
                  1988674909,
                  2063640240,
                  2491088897,
                  1459647954,
                  4189817080,
                  2302804382,
                  1113892351,
                  2237858528,
                  1927010603,
                  4002880361,
                  1856122846,
                  1594404395,
                  2944033133,
                  3855189863,
                  3474975698,
                  1643104450,
                  4054590833,
                  3431086530,
                  1730235576,
                  2984608721,
                  3084664418,
                  2131803598,
                  4178205752,
                  267404349,
                  1617849798,
                  1616132681,
                  1462223176,
                  736725533,
                  2327058232,
                  551665188,
                  2945899023,
                  1749386277,
                  2575514597,
                  1611482493,
                  674206544,
                  2201269090,
                  3642560800,
                  728599968,
                  1680547377,
                  2620414464,
                  1388111496,
                  453204106,
                  4156223445,
                  1094905244,
                  2754698257,
                  2201108165,
                  3757000246,
                  2704524545,
                  3922940700,
                  3996465027,
                )),
                (s[3] = new Array(
                  2645754912,
                  532081118,
                  2814278639,
                  3530793624,
                  1246723035,
                  1689095255,
                  2236679235,
                  4194438865,
                  2116582143,
                  3859789411,
                  157234593,
                  2045505824,
                  4245003587,
                  1687664561,
                  4083425123,
                  605965023,
                  672431967,
                  1336064205,
                  3376611392,
                  214114848,
                  4258466608,
                  3232053071,
                  489488601,
                  605322005,
                  3998028058,
                  264917351,
                  1912574028,
                  756637694,
                  436560991,
                  202637054,
                  135989450,
                  85393697,
                  2152923392,
                  3896401662,
                  2895836408,
                  2145855233,
                  3535335007,
                  115294817,
                  3147733898,
                  1922296357,
                  3464822751,
                  4117858305,
                  1037454084,
                  2725193275,
                  2127856640,
                  1417604070,
                  1148013728,
                  1827919605,
                  642362335,
                  2929772533,
                  909348033,
                  1346338451,
                  3547799649,
                  297154785,
                  1917849091,
                  4161712827,
                  2883604526,
                  3968694238,
                  1469521537,
                  3780077382,
                  3375584256,
                  1763717519,
                  136166297,
                  4290970789,
                  1295325189,
                  2134727907,
                  2798151366,
                  1566297257,
                  3672928234,
                  2677174161,
                  2672173615,
                  965822077,
                  2780786062,
                  289653839,
                  1133871874,
                  3491843819,
                  35685304,
                  1068898316,
                  418943774,
                  672553190,
                  642281022,
                  2346158704,
                  1954014401,
                  3037126780,
                  4079815205,
                  2030668546,
                  3840588673,
                  672283427,
                  1776201016,
                  359975446,
                  3750173538,
                  555499703,
                  2769985273,
                  1324923,
                  69110472,
                  152125443,
                  3176785106,
                  3822147285,
                  1340634837,
                  798073664,
                  1434183902,
                  15393959,
                  216384236,
                  1303690150,
                  3881221631,
                  3711134124,
                  3960975413,
                  106373927,
                  2578434224,
                  1455997841,
                  1801814300,
                  1578393881,
                  1854262133,
                  3188178946,
                  3258078583,
                  2302670060,
                  1539295533,
                  3505142565,
                  3078625975,
                  2372746020,
                  549938159,
                  3278284284,
                  2620926080,
                  181285381,
                  2865321098,
                  3970029511,
                  68876850,
                  488006234,
                  1728155692,
                  2608167508,
                  836007927,
                  2435231793,
                  919367643,
                  3339422534,
                  3655756360,
                  1457871481,
                  40520939,
                  1380155135,
                  797931188,
                  234455205,
                  2255801827,
                  3990488299,
                  397000196,
                  739833055,
                  3077865373,
                  2871719860,
                  4022553888,
                  772369276,
                  390177364,
                  3853951029,
                  557662966,
                  740064294,
                  1640166671,
                  1699928825,
                  3535942136,
                  622006121,
                  3625353122,
                  68743880,
                  1742502,
                  219489963,
                  1664179233,
                  1577743084,
                  1236991741,
                  410585305,
                  2366487942,
                  823226535,
                  1050371084,
                  3426619607,
                  3586839478,
                  212779912,
                  4147118561,
                  1819446015,
                  1911218849,
                  530248558,
                  3486241071,
                  3252585495,
                  2886188651,
                  3410272728,
                  2342195030,
                  20547779,
                  2982490058,
                  3032363469,
                  3631753222,
                  312714466,
                  1870521650,
                  1493008054,
                  3491686656,
                  615382978,
                  4103671749,
                  2534517445,
                  1932181,
                  2196105170,
                  278426614,
                  6369430,
                  3274544417,
                  2913018367,
                  697336853,
                  2143000447,
                  2946413531,
                  701099306,
                  1558357093,
                  2805003052,
                  3500818408,
                  2321334417,
                  3567135975,
                  216290473,
                  3591032198,
                  23009561,
                  1996984579,
                  3735042806,
                  2024298078,
                  3739440863,
                  569400510,
                  2339758983,
                  3016033873,
                  3097871343,
                  3639523026,
                  3844324983,
                  3256173865,
                  795471839,
                  2951117563,
                  4101031090,
                  4091603803,
                  3603732598,
                  971261452,
                  534414648,
                  428311343,
                  3389027175,
                  2844869880,
                  694888862,
                  1227866773,
                  2456207019,
                  3043454569,
                  2614353370,
                  3749578031,
                  3676663836,
                  459166190,
                  4132644070,
                  1794958188,
                  51825668,
                  2252611902,
                  3084671440,
                  2036672799,
                  3436641603,
                  1099053433,
                  2469121526,
                  3059204941,
                  1323291266,
                  2061838604,
                  1018778475,
                  2233344254,
                  2553501054,
                  334295216,
                  3556750194,
                  1065731521,
                  183467730,
                )),
                (s[4] = new Array(
                  2127105028,
                  745436345,
                  2601412319,
                  2788391185,
                  3093987327,
                  500390133,
                  1155374404,
                  389092991,
                  150729210,
                  3891597772,
                  3523549952,
                  1935325696,
                  716645080,
                  946045387,
                  2901812282,
                  1774124410,
                  3869435775,
                  4039581901,
                  3293136918,
                  3438657920,
                  948246080,
                  363898952,
                  3867875531,
                  1286266623,
                  1598556673,
                  68334250,
                  630723836,
                  1104211938,
                  1312863373,
                  613332731,
                  2377784574,
                  1101634306,
                  441780740,
                  3129959883,
                  1917973735,
                  2510624549,
                  3238456535,
                  2544211978,
                  3308894634,
                  1299840618,
                  4076074851,
                  1756332096,
                  3977027158,
                  297047435,
                  3790297736,
                  2265573040,
                  3621810518,
                  1311375015,
                  1667687725,
                  47300608,
                  3299642885,
                  2474112369,
                  201668394,
                  1468347890,
                  576830978,
                  3594690761,
                  3742605952,
                  1958042578,
                  1747032512,
                  3558991340,
                  1408974056,
                  3366841779,
                  682131401,
                  1033214337,
                  1545599232,
                  4265137049,
                  206503691,
                  103024618,
                  2855227313,
                  1337551222,
                  2428998917,
                  2963842932,
                  4015366655,
                  3852247746,
                  2796956967,
                  3865723491,
                  3747938335,
                  247794022,
                  3755824572,
                  702416469,
                  2434691994,
                  397379957,
                  851939612,
                  2314769512,
                  218229120,
                  1380406772,
                  62274761,
                  214451378,
                  3170103466,
                  2276210409,
                  3845813286,
                  28563499,
                  446592073,
                  1693330814,
                  3453727194,
                  29968656,
                  3093872512,
                  220656637,
                  2470637031,
                  77972100,
                  1667708854,
                  1358280214,
                  4064765667,
                  2395616961,
                  325977563,
                  4277240721,
                  4220025399,
                  3605526484,
                  3355147721,
                  811859167,
                  3069544926,
                  3962126810,
                  652502677,
                  3075892249,
                  4132761541,
                  3498924215,
                  1217549313,
                  3250244479,
                  3858715919,
                  3053989961,
                  1538642152,
                  2279026266,
                  2875879137,
                  574252750,
                  3324769229,
                  2651358713,
                  1758150215,
                  141295887,
                  2719868960,
                  3515574750,
                  4093007735,
                  4194485238,
                  1082055363,
                  3417560400,
                  395511885,
                  2966884026,
                  179534037,
                  3646028556,
                  3738688086,
                  1092926436,
                  2496269142,
                  257381841,
                  3772900718,
                  1636087230,
                  1477059743,
                  2499234752,
                  3811018894,
                  2675660129,
                  3285975680,
                  90732309,
                  1684827095,
                  1150307763,
                  1723134115,
                  3237045386,
                  1769919919,
                  1240018934,
                  815675215,
                  750138730,
                  2239792499,
                  1234303040,
                  1995484674,
                  138143821,
                  675421338,
                  1145607174,
                  1936608440,
                  3238603024,
                  2345230278,
                  2105974004,
                  323969391,
                  779555213,
                  3004902369,
                  2861610098,
                  1017501463,
                  2098600890,
                  2628620304,
                  2940611490,
                  2682542546,
                  1171473753,
                  3656571411,
                  3687208071,
                  4091869518,
                  393037935,
                  159126506,
                  1662887367,
                  1147106178,
                  391545844,
                  3452332695,
                  1891500680,
                  3016609650,
                  1851642611,
                  546529401,
                  1167818917,
                  3194020571,
                  2848076033,
                  3953471836,
                  575554290,
                  475796850,
                  4134673196,
                  450035699,
                  2351251534,
                  844027695,
                  1080539133,
                  86184846,
                  1554234488,
                  3692025454,
                  1972511363,
                  2018339607,
                  1491841390,
                  1141460869,
                  1061690759,
                  4244549243,
                  2008416118,
                  2351104703,
                  2868147542,
                  1598468138,
                  722020353,
                  1027143159,
                  212344630,
                  1387219594,
                  1725294528,
                  3745187956,
                  2500153616,
                  458938280,
                  4129215917,
                  1828119673,
                  544571780,
                  3503225445,
                  2297937496,
                  1241802790,
                  267843827,
                  2694610800,
                  1397140384,
                  1558801448,
                  3782667683,
                  1806446719,
                  929573330,
                  2234912681,
                  400817706,
                  616011623,
                  4121520928,
                  3603768725,
                  1761550015,
                  1968522284,
                  4053731006,
                  4192232858,
                  4005120285,
                  872482584,
                  3140537016,
                  3894607381,
                  2287405443,
                  1963876937,
                  3663887957,
                  1584857e3,
                  2975024454,
                  1833426440,
                  4025083860,
                )),
                (s[5] = new Array(
                  4143615901,
                  749497569,
                  1285769319,
                  3795025788,
                  2514159847,
                  23610292,
                  3974978748,
                  844452780,
                  3214870880,
                  3751928557,
                  2213566365,
                  1676510905,
                  448177848,
                  3730751033,
                  4086298418,
                  2307502392,
                  871450977,
                  3222878141,
                  4110862042,
                  3831651966,
                  2735270553,
                  1310974780,
                  2043402188,
                  1218528103,
                  2736035353,
                  4274605013,
                  2702448458,
                  3936360550,
                  2693061421,
                  162023535,
                  2827510090,
                  687910808,
                  23484817,
                  3784910947,
                  3371371616,
                  779677500,
                  3503626546,
                  3473927188,
                  4157212626,
                  3500679282,
                  4248902014,
                  2466621104,
                  3899384794,
                  1958663117,
                  925738300,
                  1283408968,
                  3669349440,
                  1840910019,
                  137959847,
                  2679828185,
                  1239142320,
                  1315376211,
                  1547541505,
                  1690155329,
                  739140458,
                  3128809933,
                  3933172616,
                  3876308834,
                  905091803,
                  1548541325,
                  4040461708,
                  3095483362,
                  144808038,
                  451078856,
                  676114313,
                  2861728291,
                  2469707347,
                  993665471,
                  373509091,
                  2599041286,
                  4025009006,
                  4170239449,
                  2149739950,
                  3275793571,
                  3749616649,
                  2794760199,
                  1534877388,
                  572371878,
                  2590613551,
                  1753320020,
                  3467782511,
                  1405125690,
                  4270405205,
                  633333386,
                  3026356924,
                  3475123903,
                  632057672,
                  2846462855,
                  1404951397,
                  3882875879,
                  3915906424,
                  195638627,
                  2385783745,
                  3902872553,
                  1233155085,
                  3355999740,
                  2380578713,
                  2702246304,
                  2144565621,
                  3663341248,
                  3894384975,
                  2502479241,
                  4248018925,
                  3094885567,
                  1594115437,
                  572884632,
                  3385116731,
                  767645374,
                  1331858858,
                  1475698373,
                  3793881790,
                  3532746431,
                  1321687957,
                  619889600,
                  1121017241,
                  3440213920,
                  2070816767,
                  2833025776,
                  1933951238,
                  4095615791,
                  890643334,
                  3874130214,
                  859025556,
                  360630002,
                  925594799,
                  1764062180,
                  3920222280,
                  4078305929,
                  979562269,
                  2810700344,
                  4087740022,
                  1949714515,
                  546639971,
                  1165388173,
                  3069891591,
                  1495988560,
                  922170659,
                  1291546247,
                  2107952832,
                  1813327274,
                  3406010024,
                  3306028637,
                  4241950635,
                  153207855,
                  2313154747,
                  1608695416,
                  1150242611,
                  1967526857,
                  721801357,
                  1220138373,
                  3691287617,
                  3356069787,
                  2112743302,
                  3281662835,
                  1111556101,
                  1778980689,
                  250857638,
                  2298507990,
                  673216130,
                  2846488510,
                  3207751581,
                  3562756981,
                  3008625920,
                  3417367384,
                  2198807050,
                  529510932,
                  3547516680,
                  3426503187,
                  2364944742,
                  102533054,
                  2294910856,
                  1617093527,
                  1204784762,
                  3066581635,
                  1019391227,
                  1069574518,
                  1317995090,
                  1691889997,
                  3661132003,
                  510022745,
                  3238594800,
                  1362108837,
                  1817929911,
                  2184153760,
                  805817662,
                  1953603311,
                  3699844737,
                  120799444,
                  2118332377,
                  207536705,
                  2282301548,
                  4120041617,
                  145305846,
                  2508124933,
                  3086745533,
                  3261524335,
                  1877257368,
                  2977164480,
                  3160454186,
                  2503252186,
                  4221677074,
                  759945014,
                  254147243,
                  2767453419,
                  3801518371,
                  629083197,
                  2471014217,
                  907280572,
                  3900796746,
                  940896768,
                  2751021123,
                  2625262786,
                  3161476951,
                  3661752313,
                  3260732218,
                  1425318020,
                  2977912069,
                  1496677566,
                  3988592072,
                  2140652971,
                  3126511541,
                  3069632175,
                  977771578,
                  1392695845,
                  1698528874,
                  1411812681,
                  1369733098,
                  1343739227,
                  3620887944,
                  1142123638,
                  67414216,
                  3102056737,
                  3088749194,
                  1626167401,
                  2546293654,
                  3941374235,
                  697522451,
                  33404913,
                  143560186,
                  2595682037,
                  994885535,
                  1247667115,
                  3859094837,
                  2699155541,
                  3547024625,
                  4114935275,
                  2968073508,
                  3199963069,
                  2732024527,
                  1237921620,
                  951448369,
                  1898488916,
                  1211705605,
                  2790989240,
                  2233243581,
                  3598044975,
                )),
                (s[6] = new Array(
                  2246066201,
                  858518887,
                  1714274303,
                  3485882003,
                  713916271,
                  2879113490,
                  3730835617,
                  539548191,
                  36158695,
                  1298409750,
                  419087104,
                  1358007170,
                  749914897,
                  2989680476,
                  1261868530,
                  2995193822,
                  2690628854,
                  3443622377,
                  3780124940,
                  3796824509,
                  2976433025,
                  4259637129,
                  1551479e3,
                  512490819,
                  1296650241,
                  951993153,
                  2436689437,
                  2460458047,
                  144139966,
                  3136204276,
                  310820559,
                  3068840729,
                  643875328,
                  1969602020,
                  1680088954,
                  2185813161,
                  3283332454,
                  672358534,
                  198762408,
                  896343282,
                  276269502,
                  3014846926,
                  84060815,
                  197145886,
                  376173866,
                  3943890818,
                  3813173521,
                  3545068822,
                  1316698879,
                  1598252827,
                  2633424951,
                  1233235075,
                  859989710,
                  2358460855,
                  3503838400,
                  3409603720,
                  1203513385,
                  1193654839,
                  2792018475,
                  2060853022,
                  207403770,
                  1144516871,
                  3068631394,
                  1121114134,
                  177607304,
                  3785736302,
                  326409831,
                  1929119770,
                  2983279095,
                  4183308101,
                  3474579288,
                  3200513878,
                  3228482096,
                  119610148,
                  1170376745,
                  3378393471,
                  3163473169,
                  951863017,
                  3337026068,
                  3135789130,
                  2907618374,
                  1183797387,
                  2015970143,
                  4045674555,
                  2182986399,
                  2952138740,
                  3928772205,
                  384012900,
                  2454997643,
                  10178499,
                  2879818989,
                  2596892536,
                  111523738,
                  2995089006,
                  451689641,
                  3196290696,
                  235406569,
                  1441906262,
                  3890558523,
                  3013735005,
                  4158569349,
                  1644036924,
                  376726067,
                  1006849064,
                  3664579700,
                  2041234796,
                  1021632941,
                  1374734338,
                  2566452058,
                  371631263,
                  4007144233,
                  490221539,
                  206551450,
                  3140638584,
                  1053219195,
                  1853335209,
                  3412429660,
                  3562156231,
                  735133835,
                  1623211703,
                  3104214392,
                  2738312436,
                  4096837757,
                  3366392578,
                  3110964274,
                  3956598718,
                  3196820781,
                  2038037254,
                  3877786376,
                  2339753847,
                  300912036,
                  3766732888,
                  2372630639,
                  1516443558,
                  4200396704,
                  1574567987,
                  4069441456,
                  4122592016,
                  2699739776,
                  146372218,
                  2748961456,
                  2043888151,
                  35287437,
                  2596680554,
                  655490400,
                  1132482787,
                  110692520,
                  1031794116,
                  2188192751,
                  1324057718,
                  1217253157,
                  919197030,
                  686247489,
                  3261139658,
                  1028237775,
                  3135486431,
                  3059715558,
                  2460921700,
                  986174950,
                  2661811465,
                  4062904701,
                  2752986992,
                  3709736643,
                  367056889,
                  1353824391,
                  731860949,
                  1650113154,
                  1778481506,
                  784341916,
                  357075625,
                  3608602432,
                  1074092588,
                  2480052770,
                  3811426202,
                  92751289,
                  877911070,
                  3600361838,
                  1231880047,
                  480201094,
                  3756190983,
                  3094495953,
                  434011822,
                  87971354,
                  363687820,
                  1717726236,
                  1901380172,
                  3926403882,
                  2481662265,
                  400339184,
                  1490350766,
                  2661455099,
                  1389319756,
                  2558787174,
                  784598401,
                  1983468483,
                  30828846,
                  3550527752,
                  2716276238,
                  3841122214,
                  1765724805,
                  1955612312,
                  1277890269,
                  1333098070,
                  1564029816,
                  2704417615,
                  1026694237,
                  3287671188,
                  1260819201,
                  3349086767,
                  1016692350,
                  1582273796,
                  1073413053,
                  1995943182,
                  694588404,
                  1025494639,
                  3323872702,
                  3551898420,
                  4146854327,
                  453260480,
                  1316140391,
                  1435673405,
                  3038941953,
                  3486689407,
                  1622062951,
                  403978347,
                  817677117,
                  950059133,
                  4246079218,
                  3278066075,
                  1486738320,
                  1417279718,
                  481875527,
                  2549965225,
                  3933690356,
                  760697757,
                  1452955855,
                  3897451437,
                  1177426808,
                  1702951038,
                  4085348628,
                  2447005172,
                  1084371187,
                  3516436277,
                  3068336338,
                  1073369276,
                  1027665953,
                  3284188590,
                  1230553676,
                  1368340146,
                  2226246512,
                  267243139,
                  2274220762,
                  4070734279,
                  2497715176,
                  2423353163,
                  2504755875,
                )),
                (s[7] = new Array(
                  3793104909,
                  3151888380,
                  2817252029,
                  895778965,
                  2005530807,
                  3871412763,
                  237245952,
                  86829237,
                  296341424,
                  3851759377,
                  3974600970,
                  2475086196,
                  709006108,
                  1994621201,
                  2972577594,
                  937287164,
                  3734691505,
                  168608556,
                  3189338153,
                  2225080640,
                  3139713551,
                  3033610191,
                  3025041904,
                  77524477,
                  185966941,
                  1208824168,
                  2344345178,
                  1721625922,
                  3354191921,
                  1066374631,
                  1927223579,
                  1971335949,
                  2483503697,
                  1551748602,
                  2881383779,
                  2856329572,
                  3003241482,
                  48746954,
                  1398218158,
                  2050065058,
                  313056748,
                  4255789917,
                  393167848,
                  1912293076,
                  940740642,
                  3465845460,
                  3091687853,
                  2522601570,
                  2197016661,
                  1727764327,
                  364383054,
                  492521376,
                  1291706479,
                  3264136376,
                  1474851438,
                  1685747964,
                  2575719748,
                  1619776915,
                  1814040067,
                  970743798,
                  1561002147,
                  2925768690,
                  2123093554,
                  1880132620,
                  3151188041,
                  697884420,
                  2550985770,
                  2607674513,
                  2659114323,
                  110200136,
                  1489731079,
                  997519150,
                  1378877361,
                  3527870668,
                  478029773,
                  2766872923,
                  1022481122,
                  431258168,
                  1112503832,
                  897933369,
                  2635587303,
                  669726182,
                  3383752315,
                  918222264,
                  163866573,
                  3246985393,
                  3776823163,
                  114105080,
                  1903216136,
                  761148244,
                  3571337562,
                  1690750982,
                  3166750252,
                  1037045171,
                  1888456500,
                  2010454850,
                  642736655,
                  616092351,
                  365016990,
                  1185228132,
                  4174898510,
                  1043824992,
                  2023083429,
                  2241598885,
                  3863320456,
                  3279669087,
                  3674716684,
                  108438443,
                  2132974366,
                  830746235,
                  606445527,
                  4173263986,
                  2204105912,
                  1844756978,
                  2532684181,
                  4245352700,
                  2969441100,
                  3796921661,
                  1335562986,
                  4061524517,
                  2720232303,
                  2679424040,
                  634407289,
                  885462008,
                  3294724487,
                  3933892248,
                  2094100220,
                  339117932,
                  4048830727,
                  3202280980,
                  1458155303,
                  2689246273,
                  1022871705,
                  2464987878,
                  3714515309,
                  353796843,
                  2822958815,
                  4256850100,
                  4052777845,
                  551748367,
                  618185374,
                  3778635579,
                  4020649912,
                  1904685140,
                  3069366075,
                  2670879810,
                  3407193292,
                  2954511620,
                  4058283405,
                  2219449317,
                  3135758300,
                  1120655984,
                  3447565834,
                  1474845562,
                  3577699062,
                  550456716,
                  3466908712,
                  2043752612,
                  881257467,
                  869518812,
                  2005220179,
                  938474677,
                  3305539448,
                  3850417126,
                  1315485940,
                  3318264702,
                  226533026,
                  965733244,
                  321539988,
                  1136104718,
                  804158748,
                  573969341,
                  3708209826,
                  937399083,
                  3290727049,
                  2901666755,
                  1461057207,
                  4013193437,
                  4066861423,
                  3242773476,
                  2421326174,
                  1581322155,
                  3028952165,
                  786071460,
                  3900391652,
                  3918438532,
                  1485433313,
                  4023619836,
                  3708277595,
                  3678951060,
                  953673138,
                  1467089153,
                  1930354364,
                  1533292819,
                  2492563023,
                  1346121658,
                  1685000834,
                  1965281866,
                  3765933717,
                  4190206607,
                  2052792609,
                  3515332758,
                  690371149,
                  3125873887,
                  2180283551,
                  2903598061,
                  3933952357,
                  436236910,
                  289419410,
                  14314871,
                  1242357089,
                  2904507907,
                  1616633776,
                  2666382180,
                  585885352,
                  3471299210,
                  2699507360,
                  1432659641,
                  277164553,
                  3354103607,
                  770115018,
                  2303809295,
                  3741942315,
                  3177781868,
                  2853364978,
                  2269453327,
                  3774259834,
                  987383833,
                  1290892879,
                  225909803,
                  1741533526,
                  890078084,
                  1496906255,
                  1111072499,
                  916028167,
                  243534141,
                  1252605537,
                  2204162171,
                  531204876,
                  290011180,
                  3916834213,
                  102027703,
                  237315147,
                  209093447,
                  1486785922,
                  220223953,
                  2758195998,
                  4175039106,
                  82940208,
                  3127791296,
                  2569425252,
                  518464269,
                  1353887104,
                  3941492737,
                  2377294467,
                  3935040926,
                ));
            })()),
              this.cast5.setKey(e),
              (this.encrypt = function (e) {
                return this.cast5.encrypt(e);
              });
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = n),
            (n.blockSize = n.prototype.blockSize = 8),
            (n.keySize = n.prototype.keySize = 16);
        },
        {},
      ],
      15: [
        function (e, t, r) {
          "use strict";
          function n(e, t, r, n, i, s) {
            var a,
              o,
              u,
              f,
              h,
              l,
              c,
              d,
              p,
              y,
              g,
              m,
              v,
              w,
              b = new Array(
                16843776,
                0,
                65536,
                16843780,
                16842756,
                66564,
                4,
                65536,
                1024,
                16843776,
                16843780,
                1024,
                16778244,
                16842756,
                16777216,
                4,
                1028,
                16778240,
                16778240,
                66560,
                66560,
                16842752,
                16842752,
                16778244,
                65540,
                16777220,
                16777220,
                65540,
                0,
                1028,
                66564,
                16777216,
                65536,
                16843780,
                4,
                16842752,
                16843776,
                16777216,
                16777216,
                1024,
                16842756,
                65536,
                66560,
                16777220,
                1024,
                4,
                16778244,
                66564,
                16843780,
                65540,
                16842752,
                16778244,
                16777220,
                1028,
                66564,
                16843776,
                1028,
                16778240,
                16778240,
                0,
                65540,
                66560,
                0,
                16842756,
              ),
              k = new Array(
                -2146402272,
                -2147450880,
                32768,
                1081376,
                1048576,
                32,
                -2146435040,
                -2147450848,
                -2147483616,
                -2146402272,
                -2146402304,
                -2147483648,
                -2147450880,
                1048576,
                32,
                -2146435040,
                1081344,
                1048608,
                -2147450848,
                0,
                -2147483648,
                32768,
                1081376,
                -2146435072,
                1048608,
                -2147483616,
                0,
                1081344,
                32800,
                -2146402304,
                -2146435072,
                32800,
                0,
                1081376,
                -2146435040,
                1048576,
                -2147450848,
                -2146435072,
                -2146402304,
                32768,
                -2146435072,
                -2147450880,
                32,
                -2146402272,
                1081376,
                32,
                32768,
                -2147483648,
                32800,
                -2146402304,
                1048576,
                -2147483616,
                1048608,
                -2147450848,
                -2147483616,
                1048608,
                1081344,
                0,
                -2147450880,
                32800,
                -2147483648,
                -2146435040,
                -2146402272,
                1081344,
              ),
              A = new Array(
                520,
                134349312,
                0,
                134348808,
                134218240,
                0,
                131592,
                134218240,
                131080,
                134217736,
                134217736,
                131072,
                134349320,
                131080,
                134348800,
                520,
                134217728,
                8,
                134349312,
                512,
                131584,
                134348800,
                134348808,
                131592,
                134218248,
                131584,
                131072,
                134218248,
                8,
                134349320,
                512,
                134217728,
                134349312,
                134217728,
                131080,
                520,
                131072,
                134349312,
                134218240,
                0,
                512,
                131080,
                134349320,
                134218240,
                134217736,
                512,
                0,
                134348808,
                134218248,
                131072,
                134217728,
                134349320,
                8,
                131592,
                131584,
                134217736,
                134348800,
                134218248,
                520,
                134348800,
                131592,
                8,
                134348808,
                131584,
              ),
              _ = new Array(
                8396801,
                8321,
                8321,
                128,
                8396928,
                8388737,
                8388609,
                8193,
                0,
                8396800,
                8396800,
                8396929,
                129,
                0,
                8388736,
                8388609,
                1,
                8192,
                8388608,
                8396801,
                128,
                8388608,
                8193,
                8320,
                8388737,
                1,
                8320,
                8388736,
                8192,
                8396928,
                8396929,
                129,
                8388736,
                8388609,
                8396800,
                8396929,
                129,
                0,
                0,
                8396800,
                8320,
                8388736,
                8388737,
                1,
                8396801,
                8321,
                8321,
                128,
                8396929,
                129,
                1,
                8192,
                8388609,
                8193,
                8396928,
                8388737,
                8193,
                8320,
                8388608,
                8396801,
                128,
                8388608,
                8192,
                8396928,
              ),
              E = new Array(
                256,
                34078976,
                34078720,
                1107296512,
                524288,
                256,
                1073741824,
                34078720,
                1074266368,
                524288,
                33554688,
                1074266368,
                1107296512,
                1107820544,
                524544,
                1073741824,
                33554432,
                1074266112,
                1074266112,
                0,
                1073742080,
                1107820800,
                1107820800,
                33554688,
                1107820544,
                1073742080,
                0,
                1107296256,
                34078976,
                33554432,
                1107296256,
                524544,
                524288,
                1107296512,
                256,
                33554432,
                1073741824,
                34078720,
                1107296512,
                1074266368,
                33554688,
                1073741824,
                1107820544,
                34078976,
                1074266368,
                256,
                33554432,
                1107820544,
                1107820800,
                524544,
                1107296256,
                1107820800,
                34078720,
                0,
                1074266112,
                1107296256,
                524544,
                33554688,
                1073742080,
                524288,
                0,
                1074266112,
                34078976,
                1073742080,
              ),
              S = new Array(
                536870928,
                541065216,
                16384,
                541081616,
                541065216,
                16,
                541081616,
                4194304,
                536887296,
                4210704,
                4194304,
                536870928,
                4194320,
                536887296,
                536870912,
                16400,
                0,
                4194320,
                536887312,
                16384,
                4210688,
                536887312,
                16,
                541065232,
                541065232,
                0,
                4210704,
                541081600,
                16400,
                4210688,
                541081600,
                536870912,
                536887296,
                16,
                541065232,
                4210688,
                541081616,
                4194304,
                16400,
                536870928,
                4194304,
                536887296,
                536870912,
                16400,
                536870928,
                541081616,
                4210688,
                541065216,
                4210704,
                541081600,
                0,
                541065232,
                16,
                16384,
                541065216,
                4210704,
                16384,
                4194320,
                536887312,
                0,
                541081600,
                536870912,
                4194320,
                536887312,
              ),
              U = new Array(
                2097152,
                69206018,
                67110914,
                0,
                2048,
                67110914,
                2099202,
                69208064,
                69208066,
                2097152,
                0,
                67108866,
                2,
                67108864,
                69206018,
                2050,
                67110912,
                2099202,
                2097154,
                67110912,
                67108866,
                69206016,
                69208064,
                2097154,
                69206016,
                2048,
                2050,
                69208066,
                2099200,
                2,
                67108864,
                2099200,
                67108864,
                2099200,
                2097152,
                67110914,
                67110914,
                69206018,
                69206018,
                2,
                2097154,
                67108864,
                67110912,
                2097152,
                69208064,
                2050,
                2099202,
                69208064,
                2050,
                67108866,
                69208066,
                69206016,
                2099200,
                0,
                2,
                69208066,
                0,
                2099202,
                69206016,
                2048,
                67108866,
                67110912,
                2048,
                2097154,
              ),
              K = new Array(
                268439616,
                4096,
                262144,
                268701760,
                268435456,
                268439616,
                64,
                268435456,
                262208,
                268697600,
                268701760,
                266240,
                268701696,
                266304,
                4096,
                64,
                268697600,
                268435520,
                268439552,
                4160,
                266240,
                262208,
                268697664,
                268701696,
                4160,
                0,
                0,
                268697664,
                268435520,
                268439552,
                266304,
                262144,
                266304,
                262144,
                268701696,
                4096,
                64,
                268697664,
                4096,
                266304,
                268439552,
                64,
                268435520,
                268697600,
                268697664,
                268435456,
                262144,
                268439616,
                0,
                268701760,
                262208,
                268435520,
                268697600,
                268439552,
                268439616,
                0,
                268701760,
                266240,
                266240,
                4160,
                4160,
                262208,
                268435456,
                268701696,
              ),
              P = 0,
              j = t.length,
              x = 32 === e.length ? 3 : 9;
            (d =
              3 === x
                ? r
                  ? new Array(0, 32, 2)
                  : new Array(30, -2, -2)
                : r
                ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2)
                : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2)),
              r &&
                (j = (t = (function (e, t) {
                  var r,
                    n = 8 - (e.length % 8);
                  if (2 === t && n < 8) r = " ".charCodeAt(0);
                  else if (1 === t) r = n;
                  else {
                    if (t || !(n < 8)) {
                      if (8 === n) return e;
                      throw new Error("des: invalid padding");
                    }
                    r = 0;
                  }
                  for (
                    var i = new Uint8Array(e.length + n), s = 0;
                    s < e.length;
                    s++
                  )
                    i[s] = e[s];
                  for (var a = 0; a < n; a++) i[e.length + a] = r;
                  return i;
                })(t, s)).length);
            var T = new Uint8Array(j),
              O = 0;
            for (
              1 === n &&
              ((p = (i[P++] << 24) | (i[P++] << 16) | (i[P++] << 8) | i[P++]),
              (g = (i[P++] << 24) | (i[P++] << 16) | (i[P++] << 8) | i[P++]),
              (P = 0));
              P < j;

            ) {
              for (
                l = (t[P++] << 24) | (t[P++] << 16) | (t[P++] << 8) | t[P++],
                  c = (t[P++] << 24) | (t[P++] << 16) | (t[P++] << 8) | t[P++],
                  1 === n &&
                    (r
                      ? ((l ^= p), (c ^= g))
                      : ((y = p), (m = g), (p = l), (g = c))),
                  l ^= (u = 252645135 & ((l >>> 4) ^ c)) << 4,
                  l ^= (u = 65535 & ((l >>> 16) ^ (c ^= u))) << 16,
                  l ^= u = 858993459 & (((c ^= u) >>> 2) ^ l),
                  l ^= u = 16711935 & (((c ^= u << 2) >>> 8) ^ l),
                  l =
                    ((l ^=
                      (u = 1431655765 & ((l >>> 1) ^ (c ^= u << 8))) << 1) <<
                      1) |
                    (l >>> 31),
                  c = ((c ^= u) << 1) | (c >>> 31),
                  o = 0;
                o < x;
                o += 3
              ) {
                for (v = d[o + 1], w = d[o + 2], a = d[o]; a !== v; a += w)
                  (f = c ^ e[a]),
                    (h = ((c >>> 4) | (c << 28)) ^ e[a + 1]),
                    (u = l),
                    (l = c),
                    (c =
                      u ^
                      (k[(f >>> 24) & 63] |
                        _[(f >>> 16) & 63] |
                        S[(f >>> 8) & 63] |
                        K[63 & f] |
                        b[(h >>> 24) & 63] |
                        A[(h >>> 16) & 63] |
                        E[(h >>> 8) & 63] |
                        U[63 & h]));
                (u = l), (l = c), (c = u);
              }
              (c = (c >>> 1) | (c << 31)),
                (c ^= u =
                  1431655765 & (((l = (l >>> 1) | (l << 31)) >>> 1) ^ c)),
                (c ^= (u = 16711935 & ((c >>> 8) ^ (l ^= u << 1))) << 8),
                (c ^= (u = 858993459 & ((c >>> 2) ^ (l ^= u))) << 2),
                (c ^= u = 65535 & (((l ^= u) >>> 16) ^ c)),
                (c ^= u = 252645135 & (((l ^= u << 16) >>> 4) ^ c)),
                (l ^= u << 4),
                1 === n && (r ? ((p = l), (g = c)) : ((l ^= y), (c ^= m))),
                (T[O++] = l >>> 24),
                (T[O++] = (l >>> 16) & 255),
                (T[O++] = (l >>> 8) & 255),
                (T[O++] = 255 & l),
                (T[O++] = c >>> 24),
                (T[O++] = (c >>> 16) & 255),
                (T[O++] = (c >>> 8) & 255),
                (T[O++] = 255 & c);
            }
            return (
              r ||
                (T = (function (e, t) {
                  var r,
                    n = null;
                  if (2 === t) r = " ".charCodeAt(0);
                  else if (1 === t) n = e[e.length - 1];
                  else {
                    if (t) throw new Error("des: invalid padding");
                    r = 0;
                  }
                  if (!n) {
                    for (n = 1; e[e.length - n] === r; ) n++;
                    n--;
                  }
                  return e.subarray(0, e.length - n);
                })(T, s)),
              T
            );
          }
          function i(e) {
            for (
              var t,
                r,
                n,
                i = new Array(
                  0,
                  4,
                  536870912,
                  536870916,
                  65536,
                  65540,
                  536936448,
                  536936452,
                  512,
                  516,
                  536871424,
                  536871428,
                  66048,
                  66052,
                  536936960,
                  536936964,
                ),
                s = new Array(
                  0,
                  1,
                  1048576,
                  1048577,
                  67108864,
                  67108865,
                  68157440,
                  68157441,
                  256,
                  257,
                  1048832,
                  1048833,
                  67109120,
                  67109121,
                  68157696,
                  68157697,
                ),
                a = new Array(
                  0,
                  8,
                  2048,
                  2056,
                  16777216,
                  16777224,
                  16779264,
                  16779272,
                  0,
                  8,
                  2048,
                  2056,
                  16777216,
                  16777224,
                  16779264,
                  16779272,
                ),
                o = new Array(
                  0,
                  2097152,
                  134217728,
                  136314880,
                  8192,
                  2105344,
                  134225920,
                  136323072,
                  131072,
                  2228224,
                  134348800,
                  136445952,
                  139264,
                  2236416,
                  134356992,
                  136454144,
                ),
                u = new Array(
                  0,
                  262144,
                  16,
                  262160,
                  0,
                  262144,
                  16,
                  262160,
                  4096,
                  266240,
                  4112,
                  266256,
                  4096,
                  266240,
                  4112,
                  266256,
                ),
                f = new Array(
                  0,
                  1024,
                  32,
                  1056,
                  0,
                  1024,
                  32,
                  1056,
                  33554432,
                  33555456,
                  33554464,
                  33555488,
                  33554432,
                  33555456,
                  33554464,
                  33555488,
                ),
                h = new Array(
                  0,
                  268435456,
                  524288,
                  268959744,
                  2,
                  268435458,
                  524290,
                  268959746,
                  0,
                  268435456,
                  524288,
                  268959744,
                  2,
                  268435458,
                  524290,
                  268959746,
                ),
                l = new Array(
                  0,
                  65536,
                  2048,
                  67584,
                  536870912,
                  536936448,
                  536872960,
                  536938496,
                  131072,
                  196608,
                  133120,
                  198656,
                  537001984,
                  537067520,
                  537004032,
                  537069568,
                ),
                c = new Array(
                  0,
                  262144,
                  0,
                  262144,
                  2,
                  262146,
                  2,
                  262146,
                  33554432,
                  33816576,
                  33554432,
                  33816576,
                  33554434,
                  33816578,
                  33554434,
                  33816578,
                ),
                d = new Array(
                  0,
                  268435456,
                  8,
                  268435464,
                  0,
                  268435456,
                  8,
                  268435464,
                  1024,
                  268436480,
                  1032,
                  268436488,
                  1024,
                  268436480,
                  1032,
                  268436488,
                ),
                p = new Array(
                  0,
                  32,
                  0,
                  32,
                  1048576,
                  1048608,
                  1048576,
                  1048608,
                  8192,
                  8224,
                  8192,
                  8224,
                  1056768,
                  1056800,
                  1056768,
                  1056800,
                ),
                y = new Array(
                  0,
                  16777216,
                  512,
                  16777728,
                  2097152,
                  18874368,
                  2097664,
                  18874880,
                  67108864,
                  83886080,
                  67109376,
                  83886592,
                  69206016,
                  85983232,
                  69206528,
                  85983744,
                ),
                g = new Array(
                  0,
                  4096,
                  134217728,
                  134221824,
                  524288,
                  528384,
                  134742016,
                  134746112,
                  16,
                  4112,
                  134217744,
                  134221840,
                  524304,
                  528400,
                  134742032,
                  134746128,
                ),
                m = new Array(
                  0,
                  4,
                  256,
                  260,
                  0,
                  4,
                  256,
                  260,
                  1,
                  5,
                  257,
                  261,
                  1,
                  5,
                  257,
                  261,
                ),
                v = e.length > 8 ? 3 : 1,
                w = new Array(32 * v),
                b = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0),
                k = 0,
                A = 0,
                _ = 0;
              _ < v;
              _++
            ) {
              var E = (e[k++] << 24) | (e[k++] << 16) | (e[k++] << 8) | e[k++],
                S = (e[k++] << 24) | (e[k++] << 16) | (e[k++] << 8) | e[k++];
              (E ^= (n = 252645135 & ((E >>> 4) ^ S)) << 4),
                (E ^= n = 65535 & (((S ^= n) >>> -16) ^ E)),
                (E ^= (n = 858993459 & ((E >>> 2) ^ (S ^= n << -16))) << 2),
                (E ^= n = 65535 & (((S ^= n) >>> -16) ^ E)),
                (E ^= (n = 1431655765 & ((E >>> 1) ^ (S ^= n << -16))) << 1),
                (E ^= n = 16711935 & (((S ^= n) >>> 8) ^ E)),
                (n =
                  ((E ^= (n = 1431655765 & ((E >>> 1) ^ (S ^= n << 8))) << 1) <<
                    8) |
                  (((S ^= n) >>> 20) & 240)),
                (E =
                  (S << 24) |
                  ((S << 8) & 16711680) |
                  ((S >>> 8) & 65280) |
                  ((S >>> 24) & 240)),
                (S = n);
              for (var U = 0; U < b.length; U++)
                b[U]
                  ? ((E = (E << 2) | (E >>> 26)), (S = (S << 2) | (S >>> 26)))
                  : ((E = (E << 1) | (E >>> 27)), (S = (S << 1) | (S >>> 27))),
                  (S &= -15),
                  (t =
                    i[(E &= -15) >>> 28] |
                    s[(E >>> 24) & 15] |
                    a[(E >>> 20) & 15] |
                    o[(E >>> 16) & 15] |
                    u[(E >>> 12) & 15] |
                    f[(E >>> 8) & 15] |
                    h[(E >>> 4) & 15]),
                  (n =
                    65535 &
                    (((r =
                      l[S >>> 28] |
                      c[(S >>> 24) & 15] |
                      d[(S >>> 20) & 15] |
                      p[(S >>> 16) & 15] |
                      y[(S >>> 12) & 15] |
                      g[(S >>> 8) & 15] |
                      m[(S >>> 4) & 15]) >>>
                      16) ^
                      t)),
                  (w[A++] = t ^ n),
                  (w[A++] = r ^ (n << 16));
            }
            return w;
          }
          function s(e) {
            this.key = [];
            for (var t = 0; t < 3; t++)
              this.key.push(new Uint8Array(e.subarray(8 * t, 8 * t + 8)));
            this.encrypt = function (e) {
              return n(
                i(this.key[2]),
                n(
                  i(this.key[1]),
                  n(i(this.key[0]), e, !0, 0, null, null),
                  !1,
                  0,
                  null,
                  null,
                ),
                !0,
                0,
                null,
                null,
              );
            };
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (s.keySize = s.prototype.keySize = 24),
            (s.blockSize = s.prototype.blockSize = 8),
            (r.default = {
              des: s,
              originalDes: function (e) {
                (this.key = e),
                  (this.encrypt = function (e, t) {
                    return n(i(this.key), e, !0, 0, null, t);
                  }),
                  (this.decrypt = function (e, t) {
                    return n(i(this.key), e, !1, 0, null, t);
                  });
              },
            });
        },
        {},
      ],
      16: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var i = n(e("./aes.js")),
            s = n(e("./des.js")),
            a = n(e("./cast5.js")),
            o = n(e("./twofish.js")),
            u = n(e("./blowfish.js"));
          r.default = {
            aes128: i.default[128],
            aes192: i.default[192],
            aes256: i.default[256],
            des: s.default.originalDes,
            tripledes: s.default.des,
            cast5: a.default,
            twofish: o.default,
            blowfish: u.default,
            idea: function () {
              throw new Error("IDEA symmetric-key algorithm not implemented");
            },
          };
        },
        {
          "./aes.js": 12,
          "./blowfish.js": 13,
          "./cast5.js": 14,
          "./des.js": 15,
          "./twofish.js": 17,
        },
      ],
      17: [
        function (e, t, r) {
          "use strict";
          function n(e, t) {
            return ((e << t) | (e >>> (32 - t))) & f;
          }
          function i(e, t) {
            return e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24);
          }
          function s(e, t, r) {
            e.splice(
              t,
              4,
              255 & r,
              (r >>> 8) & 255,
              (r >>> 16) & 255,
              (r >>> 24) & 255,
            );
          }
          function a(e, t) {
            return (e >>> (8 * t)) & 255;
          }
          function o(e) {
            (this.tf = (function () {
              function e(e) {
                return (
                  d[0][a(e, 0)] ^ d[1][a(e, 1)] ^ d[2][a(e, 2)] ^ d[3][a(e, 3)]
                );
              }
              function t(e) {
                return (
                  d[0][a(e, 3)] ^ d[1][a(e, 0)] ^ d[2][a(e, 1)] ^ d[3][a(e, 2)]
                );
              }
              function r(r, i) {
                var s = e(i[0]),
                  a = t(i[1]);
                (i[2] = n(i[2] ^ ((s + a + c[4 * r + 8]) & f), 31)),
                  (i[3] = n(i[3], 1) ^ ((s + 2 * a + c[4 * r + 9]) & f)),
                  (s = e(i[2])),
                  (a = t(i[3])),
                  (i[0] = n(i[0] ^ ((s + a + c[4 * r + 10]) & f), 31)),
                  (i[1] = n(i[1], 1) ^ ((s + 2 * a + c[4 * r + 11]) & f));
              }
              function o(r, i) {
                var s = e(i[0]),
                  a = t(i[1]);
                (i[2] = n(i[2], 1) ^ ((s + a + c[4 * r + 10]) & f)),
                  (i[3] = n(i[3] ^ ((s + 2 * a + c[4 * r + 11]) & f), 31)),
                  (s = e(i[2])),
                  (a = t(i[3])),
                  (i[0] = n(i[0], 1) ^ ((s + a + c[4 * r + 8]) & f)),
                  (i[1] = n(i[1] ^ ((s + 2 * a + c[4 * r + 9]) & f), 31));
              }
              var u = null,
                h = null,
                l = -1,
                c = [],
                d = [[], [], [], []];
              return {
                name: "twofish",
                blocksize: 16,
                open: function (e) {
                  function t(e) {
                    return e ^ (e >> 2) ^ [0, 90, 180, 238][3 & e];
                  }
                  function r(e) {
                    return e ^ (e >> 1) ^ (e >> 2) ^ [0, 238, 180, 90][3 & e];
                  }
                  function s(e, t) {
                    var r, n, i;
                    for (r = 0; r < 8; r++)
                      (n = t >>> 24),
                        (t = ((t << 8) & f) | (e >>> 24)),
                        (e = (e << 8) & f),
                        (i = n << 1),
                        128 & n && (i ^= 333),
                        (t ^= n ^ (i << 16)),
                        (i ^= n >>> 1),
                        1 & n && (i ^= 166),
                        (t ^= (i << 24) | (i << 8));
                    return t;
                  }
                  function o(e, t) {
                    var r, n, i, s;
                    return (
                      (r = t >> 4),
                      (n = 15 & t),
                      (i = U[e][r ^ n]),
                      (s = K[e][x[n] ^ T[r]]),
                      (j[e][x[s] ^ T[i]] << 4) | P[e][i ^ s]
                    );
                  }
                  function h(e, t) {
                    var r = a(e, 0),
                      n = a(e, 1),
                      i = a(e, 2),
                      s = a(e, 3);
                    switch (v) {
                      case 4:
                        (r = O[1][r] ^ a(t[3], 0)),
                          (n = O[0][n] ^ a(t[3], 1)),
                          (i = O[0][i] ^ a(t[3], 2)),
                          (s = O[1][s] ^ a(t[3], 3));
                      case 3:
                        (r = O[1][r] ^ a(t[2], 0)),
                          (n = O[1][n] ^ a(t[2], 1)),
                          (i = O[0][i] ^ a(t[2], 2)),
                          (s = O[0][s] ^ a(t[2], 3));
                      case 2:
                        (r = O[0][O[0][r] ^ a(t[1], 0)] ^ a(t[0], 0)),
                          (n = O[0][O[1][n] ^ a(t[1], 1)] ^ a(t[0], 1)),
                          (i = O[1][O[0][i] ^ a(t[1], 2)] ^ a(t[0], 2)),
                          (s = O[1][O[1][s] ^ a(t[1], 3)] ^ a(t[0], 3));
                    }
                    return C[0][r] ^ C[1][n] ^ C[2][i] ^ C[3][s];
                  }
                  var l,
                    p,
                    y,
                    g,
                    m,
                    v,
                    w,
                    b,
                    k,
                    A = [],
                    _ = [],
                    E = [],
                    S = [],
                    U = [
                      [8, 1, 7, 13, 6, 15, 3, 2, 0, 11, 5, 9, 14, 12, 10, 4],
                      [2, 8, 11, 13, 15, 7, 6, 14, 3, 1, 9, 4, 0, 10, 12, 5],
                    ],
                    K = [
                      [14, 12, 11, 8, 1, 2, 3, 5, 15, 4, 10, 6, 7, 0, 9, 13],
                      [1, 14, 2, 11, 4, 12, 3, 7, 6, 13, 10, 5, 15, 9, 0, 8],
                    ],
                    P = [
                      [11, 10, 5, 14, 6, 13, 9, 0, 12, 8, 15, 3, 2, 4, 7, 1],
                      [4, 12, 7, 5, 1, 6, 9, 10, 0, 14, 13, 8, 2, 11, 3, 15],
                    ],
                    j = [
                      [13, 7, 15, 4, 1, 2, 6, 14, 9, 11, 3, 0, 8, 5, 12, 10],
                      [11, 9, 5, 1, 12, 3, 13, 14, 6, 4, 7, 15, 2, 0, 8, 10],
                    ],
                    x = [0, 8, 1, 9, 2, 10, 3, 11, 4, 12, 5, 13, 6, 14, 7, 15],
                    T = [0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 5, 14, 7],
                    O = [[], []],
                    C = [[], [], [], []];
                  for (
                    l = (u = (u = e).slice(0, 32)).length;
                    16 !== l && 24 !== l && 32 !== l;

                  )
                    u[l++] = 0;
                  for (l = 0; l < u.length; l += 4) E[l >> 2] = i(u, l);
                  for (l = 0; l < 256; l++)
                    (O[0][l] = o(0, l)), (O[1][l] = o(1, l));
                  for (l = 0; l < 256; l++)
                    (b = t((w = O[1][l]))),
                      (k = r(w)),
                      (C[0][l] = w + (b << 8) + (k << 16) + (k << 24)),
                      (C[2][l] = b + (k << 8) + (w << 16) + (k << 24)),
                      (b = t((w = O[0][l]))),
                      (k = r(w)),
                      (C[1][l] = k + (k << 8) + (b << 16) + (w << 24)),
                      (C[3][l] = b + (w << 8) + (k << 16) + (b << 24));
                  for (v = E.length / 2, l = 0; l < v; l++)
                    (p = E[l + l]),
                      (A[l] = p),
                      (y = E[l + l + 1]),
                      (_[l] = y),
                      (S[v - l - 1] = s(p, y));
                  for (l = 0; l < 40; l += 2)
                    (y = 16843009 + (p = 16843009 * l)),
                      (p = h(p, A)),
                      (y = n(h(y, _), 8)),
                      (c[l] = (p + y) & f),
                      (c[l + 1] = n(p + 2 * y, 9));
                  for (l = 0; l < 256; l++)
                    switch (((p = y = g = m = l), v)) {
                      case 4:
                        (p = O[1][p] ^ a(S[3], 0)),
                          (y = O[0][y] ^ a(S[3], 1)),
                          (g = O[0][g] ^ a(S[3], 2)),
                          (m = O[1][m] ^ a(S[3], 3));
                      case 3:
                        (p = O[1][p] ^ a(S[2], 0)),
                          (y = O[1][y] ^ a(S[2], 1)),
                          (g = O[0][g] ^ a(S[2], 2)),
                          (m = O[0][m] ^ a(S[2], 3));
                      case 2:
                        (d[0][l] =
                          C[0][O[0][O[0][p] ^ a(S[1], 0)] ^ a(S[0], 0)]),
                          (d[1][l] =
                            C[1][O[0][O[1][y] ^ a(S[1], 1)] ^ a(S[0], 1)]),
                          (d[2][l] =
                            C[2][O[1][O[0][g] ^ a(S[1], 2)] ^ a(S[0], 2)]),
                          (d[3][l] =
                            C[3][O[1][O[1][m] ^ a(S[1], 3)] ^ a(S[0], 3)]);
                    }
                },
                close: function () {
                  (c = []), (d = [[], [], [], []]);
                },
                encrypt: function (e, t) {
                  for (
                    var n = [
                        i((h = e), (l = t)) ^ c[0],
                        i(h, l + 4) ^ c[1],
                        i(h, l + 8) ^ c[2],
                        i(h, l + 12) ^ c[3],
                      ],
                      a = 0;
                    a < 8;
                    a++
                  )
                    r(a, n);
                  return (
                    s(h, l, n[2] ^ c[4]),
                    s(h, l + 4, n[3] ^ c[5]),
                    s(h, l + 8, n[0] ^ c[6]),
                    s(h, l + 12, n[1] ^ c[7]),
                    (l += 16),
                    h
                  );
                },
                decrypt: function (e, t) {
                  for (
                    var r = [
                        i((h = e), (l = t)) ^ c[4],
                        i(h, l + 4) ^ c[5],
                        i(h, l + 8) ^ c[6],
                        i(h, l + 12) ^ c[7],
                      ],
                      n = 7;
                    n >= 0;
                    n--
                  )
                    o(n, r);
                  s(h, l, r[2] ^ c[0]),
                    s(h, l + 4, r[3] ^ c[1]),
                    s(h, l + 8, r[0] ^ c[2]),
                    s(h, l + 12, r[1] ^ c[3]),
                    (l += 16);
                },
                finalize: function () {
                  return h;
                },
              };
            })()),
              this.tf.open(u(e), 0),
              (this.encrypt = function (e) {
                return this.tf.encrypt(u(e), 0);
              });
          }
          function u(e) {
            for (var t = [], r = 0; r < e.length; r++) t[r] = e[r];
            return t;
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = o);
          var f = 4294967295;
          (o.keySize = o.prototype.keySize = 32),
            (o.blockSize = o.prototype.blockSize = 16);
        },
        {},
      ],
      18: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var i = n(e("./random.js")),
            s = n(e("./cipher")),
            a = n(e("./public_key")),
            o = n(e("../type/mpi.js"));
          r.default = {
            publicKeyEncrypt: function (e, t, r) {
              return (function () {
                var n;
                switch (e) {
                  case "rsa_encrypt":
                  case "rsa_encrypt_sign":
                    var i = new a.default.rsa(),
                      s = t[0].toBigInteger(),
                      o = t[1].toBigInteger();
                    return (n = r.toBigInteger()), [i.encrypt(n, o, s)];
                  case "elgamal":
                    var u = new a.default.elgamal(),
                      f = t[0].toBigInteger(),
                      h = t[1].toBigInteger(),
                      l = t[2].toBigInteger();
                    return (n = r.toBigInteger()), u.encrypt(n, h, f, l);
                  default:
                    return [];
                }
              })().map(function (e) {
                var t = new o.default();
                return t.fromBigInteger(e), t;
              });
            },
            publicKeyDecrypt: function (e, t, r) {
              var n,
                i = (function () {
                  switch (e) {
                    case "rsa_encrypt_sign":
                    case "rsa_encrypt":
                      var i = new a.default.rsa(),
                        s = t[0].toBigInteger(),
                        o = t[1].toBigInteger(),
                        u = t[2].toBigInteger();
                      n = t[3].toBigInteger();
                      var f = t[4].toBigInteger(),
                        h = t[5].toBigInteger(),
                        l = r[0].toBigInteger();
                      return i.decrypt(l, s, o, u, n, f, h);
                    case "elgamal":
                      var c = new a.default.elgamal(),
                        d = t[3].toBigInteger(),
                        p = r[0].toBigInteger(),
                        y = r[1].toBigInteger();
                      return (n = t[0].toBigInteger()), c.decrypt(p, y, n, d);
                    default:
                      return null;
                  }
                })(),
                s = new o.default();
              return s.fromBigInteger(i), s;
            },
            getPrivateMpiCount: function (e) {
              switch (e) {
                case "rsa_encrypt":
                case "rsa_encrypt_sign":
                case "rsa_sign":
                  return 4;
                case "elgamal":
                case "dsa":
                  return 1;
                default:
                  throw new Error("Unknown algorithm");
              }
            },
            getPublicMpiCount: function (e) {
              switch (e) {
                case "rsa_encrypt":
                case "rsa_encrypt_sign":
                case "rsa_sign":
                  return 2;
                case "elgamal":
                  return 3;
                case "dsa":
                  return 4;
                default:
                  throw new Error("Unknown algorithm.");
              }
            },
            generateMpi: function (e, t) {
              switch (e) {
                case "rsa_encrypt":
                case "rsa_encrypt_sign":
                case "rsa_sign":
                  return new a.default.rsa()
                    .generate(t, "10001")
                    .then(function (e) {
                      var t = [];
                      return (
                        t.push(e.n),
                        t.push(e.ee),
                        t.push(e.d),
                        t.push(e.p),
                        t.push(e.q),
                        t.push(e.u),
                        (function (e) {
                          return e.map(function (e) {
                            var t = new o.default();
                            return t.fromBigInteger(e), t;
                          });
                        })(t)
                      );
                    });
                default:
                  throw new Error("Unsupported algorithm for key generation.");
              }
            },
            getPrefixRandom: function (e) {
              return i.default.getRandomBytes(s.default[e].blockSize);
            },
            generateSessionKey: function (e) {
              return i.default.getRandomBytes(s.default[e].keySize);
            },
          };
        },
        {
          "../type/mpi.js": 68,
          "./cipher": 16,
          "./public_key": 28,
          "./random.js": 31,
        },
      ],
      19: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.ivLength = void 0),
            (r.encrypt = function (e, t, r, n) {
              return "aes" !== e.substr(0, 3)
                ? Promise.reject(new Error("GCM mode supports only AES cipher"))
                : o && s.default.use_native && 24 !== r.length
                ? (function (e, t, r) {
                    return o
                      .importKey("raw", t, { name: l }, !1, ["encrypt"])
                      .then(function (t) {
                        return o.encrypt({ name: l, iv: r }, t, e);
                      })
                      .then(function (e) {
                        return new Uint8Array(e);
                      });
                  })(t, r, n)
                : u && s.default.use_native
                ? (function (e, t, r) {
                    (e = new f(e)), (t = new f(t)), (r = new f(r));
                    var n = new u.createCipheriv(
                        "aes-" + 8 * t.length + "-gcm",
                        t,
                        r,
                      ),
                      i = f.concat([n.update(e), n.final(), n.getAuthTag()]);
                    return Promise.resolve(new Uint8Array(i));
                  })(t, r, n)
                : Promise.resolve(a.default.AES_GCM.encrypt(t, r, n));
            }),
            (r.decrypt = function (e, t, r, n) {
              return "aes" !== e.substr(0, 3)
                ? Promise.reject(new Error("GCM mode supports only AES cipher"))
                : o && s.default.use_native && 24 !== r.length
                ? (function (e, t, r) {
                    return o
                      .importKey("raw", t, { name: l }, !1, ["decrypt"])
                      .then(function (t) {
                        return o.decrypt({ name: l, iv: r }, t, e);
                      })
                      .then(function (e) {
                        return new Uint8Array(e);
                      });
                  })(t, r, n)
                : u && s.default.use_native
                ? (function (e, t, r) {
                    (e = new f(e)), (t = new f(t)), (r = new f(r));
                    var n = new u.createDecipheriv(
                      "aes-" + 8 * t.length + "-gcm",
                      t,
                      r,
                    );
                    n.setAuthTag(e.slice(e.length - h, e.length));
                    var i = f.concat([
                      n.update(e.slice(0, e.length - h)),
                      n.final(),
                    ]);
                    return Promise.resolve(new Uint8Array(i));
                  })(t, r, n)
                : Promise.resolve(a.default.AES_GCM.decrypt(t, r, n));
            });
          var i = n(e("../util.js")),
            s = n(e("../config")),
            a = n(e("asmcrypto-lite")),
            o = i.default.getWebCrypto(),
            u = i.default.getNodeCrypto(),
            f = i.default.getNodeBuffer(),
            h = ((r.ivLength = 12), 16),
            l = "AES-GCM";
        },
        { "../config": 10, "../util.js": 70, "asmcrypto-lite": 1 },
      ],
      20: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i(e) {
            return function (t) {
              var r = d.createHash(e);
              return r.update(new p(t)), new Uint8Array(r.digest());
            };
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var s,
            a = n(e("./sha.js")),
            o = n(e("asmcrypto-lite")),
            u = n(e("rusha")),
            f = n(e("./md5.js")),
            h = n(e("./ripe-md.js")),
            l = n(e("../../util.js")),
            c = new u.default(),
            d = l.default.getNodeCrypto(),
            p = l.default.getNodeBuffer();
          (s = d
            ? {
                md5: i("md5"),
                sha1: i("sha1"),
                sha224: i("sha224"),
                sha256: i("sha256"),
                sha384: i("sha384"),
                sha512: i("sha512"),
                ripemd: i("ripemd160"),
              }
            : {
                md5: f.default,
                sha1: function (e) {
                  return l.default.str2Uint8Array(
                    l.default.hex2bin(c.digest(e)),
                  );
                },
                sha224: a.default.sha224,
                sha256: o.default.SHA256.bytes,
                sha384: a.default.sha384,
                sha512: a.default.sha512,
                ripemd: h.default,
              }),
            (r.default = {
              md5: s.md5,
              sha1: s.sha1,
              sha224: s.sha224,
              sha256: s.sha256,
              sha384: s.sha384,
              sha512: s.sha512,
              ripemd: s.ripemd,
              digest: function (e, t) {
                switch (e) {
                  case 1:
                    return this.md5(t);
                  case 2:
                    return this.sha1(t);
                  case 3:
                    return this.ripemd(t);
                  case 8:
                    return this.sha256(t);
                  case 9:
                    return this.sha384(t);
                  case 10:
                    return this.sha512(t);
                  case 11:
                    return this.sha224(t);
                  default:
                    throw new Error("Invalid hash function.");
                }
              },
              getHashByteLength: function (e) {
                switch (e) {
                  case 1:
                    return 16;
                  case 2:
                  case 3:
                    return 20;
                  case 8:
                    return 32;
                  case 9:
                    return 48;
                  case 10:
                    return 64;
                  case 11:
                    return 28;
                  default:
                    throw new Error("Invalid hash algorithm.");
                }
              },
            });
        },
        {
          "../../util.js": 70,
          "./md5.js": 21,
          "./ripe-md.js": 22,
          "./sha.js": 23,
          "asmcrypto-lite": 1,
          rusha: 4,
        },
      ],
      21: [
        function (e, t, r) {
          "use strict";
          function n(e, t) {
            var r = e[0],
              n = e[1],
              i = e[2],
              f = e[3];
            (n = u(
              (n = u(
                (n = u(
                  (n = u(
                    (n = o(
                      (n = o(
                        (n = o(
                          (n = o(
                            (n = a(
                              (n = a(
                                (n = a(
                                  (n = a(
                                    (n = s(
                                      (n = s(
                                        (n = s(
                                          (n = s(
                                            n,
                                            (i = s(
                                              i,
                                              (f = s(
                                                f,
                                                (r = s(
                                                  r,
                                                  n,
                                                  i,
                                                  f,
                                                  t[0],
                                                  7,
                                                  -680876936,
                                                )),
                                                n,
                                                i,
                                                t[1],
                                                12,
                                                -389564586,
                                              )),
                                              r,
                                              n,
                                              t[2],
                                              17,
                                              606105819,
                                            )),
                                            f,
                                            r,
                                            t[3],
                                            22,
                                            -1044525330,
                                          )),
                                          (i = s(
                                            i,
                                            (f = s(
                                              f,
                                              (r = s(
                                                r,
                                                n,
                                                i,
                                                f,
                                                t[4],
                                                7,
                                                -176418897,
                                              )),
                                              n,
                                              i,
                                              t[5],
                                              12,
                                              1200080426,
                                            )),
                                            r,
                                            n,
                                            t[6],
                                            17,
                                            -1473231341,
                                          )),
                                          f,
                                          r,
                                          t[7],
                                          22,
                                          -45705983,
                                        )),
                                        (i = s(
                                          i,
                                          (f = s(
                                            f,
                                            (r = s(
                                              r,
                                              n,
                                              i,
                                              f,
                                              t[8],
                                              7,
                                              1770035416,
                                            )),
                                            n,
                                            i,
                                            t[9],
                                            12,
                                            -1958414417,
                                          )),
                                          r,
                                          n,
                                          t[10],
                                          17,
                                          -42063,
                                        )),
                                        f,
                                        r,
                                        t[11],
                                        22,
                                        -1990404162,
                                      )),
                                      (i = s(
                                        i,
                                        (f = s(
                                          f,
                                          (r = s(
                                            r,
                                            n,
                                            i,
                                            f,
                                            t[12],
                                            7,
                                            1804603682,
                                          )),
                                          n,
                                          i,
                                          t[13],
                                          12,
                                          -40341101,
                                        )),
                                        r,
                                        n,
                                        t[14],
                                        17,
                                        -1502002290,
                                      )),
                                      f,
                                      r,
                                      t[15],
                                      22,
                                      1236535329,
                                    )),
                                    (i = a(
                                      i,
                                      (f = a(
                                        f,
                                        (r = a(
                                          r,
                                          n,
                                          i,
                                          f,
                                          t[1],
                                          5,
                                          -165796510,
                                        )),
                                        n,
                                        i,
                                        t[6],
                                        9,
                                        -1069501632,
                                      )),
                                      r,
                                      n,
                                      t[11],
                                      14,
                                      643717713,
                                    )),
                                    f,
                                    r,
                                    t[0],
                                    20,
                                    -373897302,
                                  )),
                                  (i = a(
                                    i,
                                    (f = a(
                                      f,
                                      (r = a(r, n, i, f, t[5], 5, -701558691)),
                                      n,
                                      i,
                                      t[10],
                                      9,
                                      38016083,
                                    )),
                                    r,
                                    n,
                                    t[15],
                                    14,
                                    -660478335,
                                  )),
                                  f,
                                  r,
                                  t[4],
                                  20,
                                  -405537848,
                                )),
                                (i = a(
                                  i,
                                  (f = a(
                                    f,
                                    (r = a(r, n, i, f, t[9], 5, 568446438)),
                                    n,
                                    i,
                                    t[14],
                                    9,
                                    -1019803690,
                                  )),
                                  r,
                                  n,
                                  t[3],
                                  14,
                                  -187363961,
                                )),
                                f,
                                r,
                                t[8],
                                20,
                                1163531501,
                              )),
                              (i = a(
                                i,
                                (f = a(
                                  f,
                                  (r = a(r, n, i, f, t[13], 5, -1444681467)),
                                  n,
                                  i,
                                  t[2],
                                  9,
                                  -51403784,
                                )),
                                r,
                                n,
                                t[7],
                                14,
                                1735328473,
                              )),
                              f,
                              r,
                              t[12],
                              20,
                              -1926607734,
                            )),
                            (i = o(
                              i,
                              (f = o(
                                f,
                                (r = o(r, n, i, f, t[5], 4, -378558)),
                                n,
                                i,
                                t[8],
                                11,
                                -2022574463,
                              )),
                              r,
                              n,
                              t[11],
                              16,
                              1839030562,
                            )),
                            f,
                            r,
                            t[14],
                            23,
                            -35309556,
                          )),
                          (i = o(
                            i,
                            (f = o(
                              f,
                              (r = o(r, n, i, f, t[1], 4, -1530992060)),
                              n,
                              i,
                              t[4],
                              11,
                              1272893353,
                            )),
                            r,
                            n,
                            t[7],
                            16,
                            -155497632,
                          )),
                          f,
                          r,
                          t[10],
                          23,
                          -1094730640,
                        )),
                        (i = o(
                          i,
                          (f = o(
                            f,
                            (r = o(r, n, i, f, t[13], 4, 681279174)),
                            n,
                            i,
                            t[0],
                            11,
                            -358537222,
                          )),
                          r,
                          n,
                          t[3],
                          16,
                          -722521979,
                        )),
                        f,
                        r,
                        t[6],
                        23,
                        76029189,
                      )),
                      (i = o(
                        i,
                        (f = o(
                          f,
                          (r = o(r, n, i, f, t[9], 4, -640364487)),
                          n,
                          i,
                          t[12],
                          11,
                          -421815835,
                        )),
                        r,
                        n,
                        t[15],
                        16,
                        530742520,
                      )),
                      f,
                      r,
                      t[2],
                      23,
                      -995338651,
                    )),
                    (i = u(
                      i,
                      (f = u(
                        f,
                        (r = u(r, n, i, f, t[0], 6, -198630844)),
                        n,
                        i,
                        t[7],
                        10,
                        1126891415,
                      )),
                      r,
                      n,
                      t[14],
                      15,
                      -1416354905,
                    )),
                    f,
                    r,
                    t[5],
                    21,
                    -57434055,
                  )),
                  (i = u(
                    i,
                    (f = u(
                      f,
                      (r = u(r, n, i, f, t[12], 6, 1700485571)),
                      n,
                      i,
                      t[3],
                      10,
                      -1894986606,
                    )),
                    r,
                    n,
                    t[10],
                    15,
                    -1051523,
                  )),
                  f,
                  r,
                  t[1],
                  21,
                  -2054922799,
                )),
                (i = u(
                  i,
                  (f = u(
                    f,
                    (r = u(r, n, i, f, t[8], 6, 1873313359)),
                    n,
                    i,
                    t[15],
                    10,
                    -30611744,
                  )),
                  r,
                  n,
                  t[6],
                  15,
                  -1560198380,
                )),
                f,
                r,
                t[13],
                21,
                1309151649,
              )),
              (i = u(
                i,
                (f = u(
                  f,
                  (r = u(r, n, i, f, t[4], 6, -145523070)),
                  n,
                  i,
                  t[11],
                  10,
                  -1120210379,
                )),
                r,
                n,
                t[2],
                15,
                718787259,
              )),
              f,
              r,
              t[9],
              21,
              -343485551,
            )),
              (e[0] = l(r, e[0])),
              (e[1] = l(n, e[1])),
              (e[2] = l(i, e[2])),
              (e[3] = l(f, e[3]));
          }
          function i(e, t, r, n, i, s) {
            return (t = l(l(t, e), l(n, s))), l((t << i) | (t >>> (32 - i)), r);
          }
          function s(e, t, r, n, s, a, o) {
            return i((t & r) | (~t & n), e, t, s, a, o);
          }
          function a(e, t, r, n, s, a, o) {
            return i((t & n) | (r & ~n), e, t, s, a, o);
          }
          function o(e, t, r, n, s, a, o) {
            return i(t ^ r ^ n, e, t, s, a, o);
          }
          function u(e, t, r, n, s, a, o) {
            return i(r ^ (t | ~n), e, t, s, a, o);
          }
          function f(e) {
            for (var t = "", r = 0; r < 4; r++)
              t += d[(e >> (8 * r + 4)) & 15] + d[(e >> (8 * r)) & 15];
            return t;
          }
          function h(e) {
            return (function (e) {
              for (var t = 0; t < e.length; t++) e[t] = f(e[t]);
              return e.join("");
            })(
              (function (e) {
                var t,
                  r = e.length,
                  i = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; t <= e.length; t += 64)
                  n(
                    i,
                    (function (e) {
                      var t,
                        r = [];
                      for (t = 0; t < 64; t += 4)
                        r[t >> 2] =
                          e.charCodeAt(t) +
                          (e.charCodeAt(t + 1) << 8) +
                          (e.charCodeAt(t + 2) << 16) +
                          (e.charCodeAt(t + 3) << 24);
                      return r;
                    })(e.substring(t - 64, t)),
                  );
                e = e.substring(t - 64);
                var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < e.length; t++)
                  s[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
                if (((s[t >> 2] |= 128 << (t % 4 << 3)), t > 55))
                  for (n(i, s), t = 0; t < 16; t++) s[t] = 0;
                return (s[14] = 8 * r), n(i, s), i;
              })(e),
            );
          }
          function l(e, t) {
            return (e + t) & 4294967295;
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = function (e) {
              var t = h(c.default.Uint8Array2str(e));
              return c.default.str2Uint8Array(c.default.hex2bin(t));
            });
          var c = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(e("../../util.js")),
            d = "0123456789abcdef".split("");
        },
        { "../../util.js": 70 },
      ],
      22: [
        function (e, t, r) {
          "use strict";
          function n(e, t) {
            return new Number((e << t) | (e >>> (32 - t)));
          }
          function i(e, t, r) {
            return new Number(e ^ t ^ r);
          }
          function s(e, t, r) {
            return new Number((e & t) | (~e & r));
          }
          function a(e, t, r) {
            return new Number((e | ~t) ^ r);
          }
          function o(e, t, r) {
            return new Number((e & r) | (t & ~r));
          }
          function u(e, t, r) {
            return new Number(e ^ (t | ~r));
          }
          function f(e, t, r, f, h, l, c, d) {
            switch (d) {
              case 0:
                e += i(t, r, f) + l + 0;
                break;
              case 1:
                e += s(t, r, f) + l + 1518500249;
                break;
              case 2:
                e += a(t, r, f) + l + 1859775393;
                break;
              case 3:
                e += o(t, r, f) + l + 2400959708;
                break;
              case 4:
                e += u(t, r, f) + l + 2840853838;
                break;
              case 5:
                e += u(t, r, f) + l + 1352829926;
                break;
              case 6:
                e += o(t, r, f) + l + 1548603684;
                break;
              case 7:
                e += a(t, r, f) + l + 1836072691;
                break;
              case 8:
                e += s(t, r, f) + l + 2053994217;
                break;
              case 9:
                e += i(t, r, f) + l + 0;
                break;
              default:
                throw new Error("Bogus round number");
            }
            (e = n(e, c) + h),
              (r = n(r, 10)),
              (e &= 4294967295),
              (t &= 4294967295),
              (r &= 4294967295),
              (f &= 4294967295),
              (h &= 4294967295);
            var p = [];
            return (
              (p[0] = e),
              (p[1] = t),
              (p[2] = r),
              (p[3] = f),
              (p[4] = h),
              (p[5] = l),
              (p[6] = c),
              p
            );
          }
          function h(e, t) {
            var r,
              n,
              i,
              s = [],
              a = [];
            for (n = 0; n < 5; n++)
              (s[n] = new Number(e[n])), (a[n] = new Number(e[n]));
            var o = 0;
            for (i = 0; i < 5; i++)
              for (n = 0; n < 16; n++)
                (r = f(
                  s[(o + 0) % 5],
                  s[(o + 1) % 5],
                  s[(o + 2) % 5],
                  s[(o + 3) % 5],
                  s[(o + 4) % 5],
                  t[m[i][n]],
                  g[i][n],
                  i,
                )),
                  (s[(o + 0) % 5] = r[0]),
                  (s[(o + 1) % 5] = r[1]),
                  (s[(o + 2) % 5] = r[2]),
                  (s[(o + 3) % 5] = r[3]),
                  (s[(o + 4) % 5] = r[4]),
                  (o += 4);
            for (o = 0, i = 5; i < 10; i++)
              for (n = 0; n < 16; n++)
                (r = f(
                  a[(o + 0) % 5],
                  a[(o + 1) % 5],
                  a[(o + 2) % 5],
                  a[(o + 3) % 5],
                  a[(o + 4) % 5],
                  t[m[i][n]],
                  g[i][n],
                  i,
                )),
                  (a[(o + 0) % 5] = r[0]),
                  (a[(o + 1) % 5] = r[1]),
                  (a[(o + 2) % 5] = r[2]),
                  (a[(o + 3) % 5] = r[3]),
                  (a[(o + 4) % 5] = r[4]),
                  (o += 4);
            (a[3] += s[2] + e[1]),
              (e[1] = e[2] + s[3] + a[4]),
              (e[2] = e[3] + s[4] + a[0]),
              (e[3] = e[4] + s[0] + a[1]),
              (e[4] = e[0] + s[1] + a[2]),
              (e[0] = a[3]);
          }
          function l(e) {
            for (var t = 0; t < 16; t++) e[t] = 0;
          }
          function c(e) {
            var t = (255 & e.charCodeAt(3)) << 24;
            return (
              (t |= (255 & e.charCodeAt(2)) << 16),
              (t |= (255 & e.charCodeAt(1)) << 8),
              (t |= 255 & e.charCodeAt(0))
            );
          }
          function d(e) {
            var t,
              r,
              n = new Array(y / 32),
              i = new Array(y / 8);
            !(function (e) {
              (e[0] = 1732584193),
                (e[1] = 4023233417),
                (e[2] = 2562383102),
                (e[3] = 271733878),
                (e[4] = 3285377520);
            })(n),
              (t = e.length);
            var s = new Array(16);
            l(s);
            var a,
              o = 0;
            for (r = t; r > 63; r -= 64) {
              for (a = 0; a < 16; a++) (s[a] = c(e.substr(o, 4))), (o += 4);
              h(n, s);
            }
            for (
              (function (e, t, r, n) {
                var i = new Array(16);
                l(i);
                for (var s = 0, a = 0; a < (63 & r); a++)
                  i[a >>> 2] ^= (255 & t.charCodeAt(s++)) << (8 * (3 & a));
                (i[(r >>> 2) & 15] ^= 1 << (8 * (3 & r) + 7)),
                  (63 & r) > 55 && (h(e, i), l((i = new Array(16)))),
                  (i[14] = r << 3),
                  (i[15] = (r >>> 29) | (n << 3)),
                  h(e, i);
              })(n, e.substr(o), t, 0),
                a = 0;
              a < y / 8;
              a += 4
            )
              (i[a] = 255 & n[a >>> 2]),
                (i[a + 1] = (n[a >>> 2] >>> 8) & 255),
                (i[a + 2] = (n[a >>> 2] >>> 16) & 255),
                (i[a + 3] = (n[a >>> 2] >>> 24) & 255);
            return i;
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = function (e) {
              for (
                var t = d(p.default.Uint8Array2str(e)), r = "", n = 0;
                n < y / 8;
                n++
              )
                r += String.fromCharCode(t[n]);
              return p.default.str2Uint8Array(r);
            });
          var p = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(e("../../util.js")),
            y = 160,
            g = [
              [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
              [7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12],
              [11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5],
              [11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12],
              [9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
              [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6],
              [9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11],
              [9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5],
              [15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8],
              [8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
            ],
            m = [
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
              [7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8],
              [3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12],
              [1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2],
              [4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
              [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12],
              [6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2],
              [15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13],
              [8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14],
              [12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            ];
        },
        { "../../util.js": 70 },
      ],
      23: [
        function (e, t, r) {
          "use strict";
          function n(e, t) {
            (this.highOrder = e), (this.lowOrder = t);
          }
          function i(e, t) {
            var r,
              n,
              i,
              s,
              a = [],
              o = [],
              u = 0;
            if ("UTF8" === t)
              for (n = 0; n < e.length; n += 1)
                for (
                  o = [],
                    128 > (r = e.charCodeAt(n))
                      ? o.push(r)
                      : 2048 > r
                      ? (o.push(192 | (r >>> 6)), o.push(128 | (63 & r)))
                      : 55296 > r || 57344 <= r
                      ? o.push(
                          224 | (r >>> 12),
                          128 | ((r >>> 6) & 63),
                          128 | (63 & r),
                        )
                      : ((n += 1),
                        (r =
                          65536 +
                          (((1023 & r) << 10) | (1023 & e.charCodeAt(n)))),
                        o.push(
                          240 | (r >>> 18),
                          128 | ((r >>> 12) & 63),
                          128 | ((r >>> 6) & 63),
                          128 | (63 & r),
                        )),
                    i = 0;
                  i < o.length;
                  i += 1
                ) {
                  for (s = u >>> 2; a.length <= s; ) a.push(0);
                  (a[s] |= o[i] << (24 - (u % 4) * 8)), (u += 1);
                }
            else if ("UTF16BE" === t || "UTF16LE" === t)
              for (n = 0; n < e.length; n += 1) {
                for (
                  r = e.charCodeAt(n),
                    "UTF16LE" === t && (r = ((i = 255 & r) << 8) | (r >> 8)),
                    s = u >>> 2;
                  a.length <= s;

                )
                  a.push(0);
                (a[s] |= r << (16 - (u % 4) * 8)), (u += 2);
              }
            return { value: a, binLen: 8 * u };
          }
          function s(e) {
            var t,
              r,
              n,
              i = [],
              s = e.length;
            if (0 != s % 2)
              throw "String of HEX type must be in byte increments";
            for (t = 0; t < s; t += 2) {
              if (((r = parseInt(e.substr(t, 2), 16)), isNaN(r)))
                throw "String of HEX type contains invalid characters";
              for (n = t >>> 3; i.length <= n; ) i.push(0);
              i[t >>> 3] |= r << (24 - (t % 8) * 4);
            }
            return { value: i, binLen: 4 * s };
          }
          function a(e) {
            var t,
              r,
              n,
              i = [];
            for (r = 0; r < e.length; r += 1)
              (t = e.charCodeAt(r)),
                (n = r >>> 2),
                i.length <= n && i.push(0),
                (i[n] |= t << (24 - (r % 4) * 8));
            return { value: i, binLen: 8 * e.length };
          }
          function o(e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              o = [],
              u = 0;
            if (-1 === e.search(/^[a-zA-Z0-9=+\/]+$/))
              throw "Invalid character in base-64 string";
            if (
              ((s = e.indexOf("=")),
              (e = e.replace(/\=/g, "")),
              -1 !== s && s < e.length)
            )
              throw "Invalid '=' found in base-64 string";
            for (t = 0; t < e.length; t += 4) {
              for (i = e.substr(t, 4), n = 0, r = 0; r < i.length; r += 1)
                n |=
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                    i[r],
                  ) <<
                  (18 - 6 * r);
              for (r = 0; r < i.length - 1; r += 1) {
                for (a = u >>> 2; o.length <= a; ) o.push(0);
                (o[a] |= ((n >>> (16 - 8 * r)) & 255) << (24 - (u % 4) * 8)),
                  (u += 1);
              }
            }
            return { value: o, binLen: 8 * u };
          }
          function u(e, t) {
            var r,
              n,
              i = "0123456789abcdef",
              s = "",
              a = 4 * e.length;
            for (r = 0; r < a; r += 1)
              (n = e[r >>> 2] >>> (8 * (3 - (r % 4)))),
                (s += i.charAt((n >>> 4) & 15) + i.charAt(15 & n));
            return t.outputUpper ? s.toUpperCase() : s;
          }
          function f(e, t) {
            var r,
              n,
              i,
              s,
              a,
              o,
              u = "",
              f = 4 * e.length;
            for (r = 0; r < f; r += 3)
              for (
                s = (r + 1) >>> 2,
                  a = e.length <= s ? 0 : e[s],
                  s = (r + 2) >>> 2,
                  o = e.length <= s ? 0 : e[s],
                  i =
                    (((e[r >>> 2] >>> (8 * (3 - (r % 4)))) & 255) << 16) |
                    (((a >>> (8 * (3 - ((r + 1) % 4)))) & 255) << 8) |
                    ((o >>> (8 * (3 - ((r + 2) % 4)))) & 255),
                  n = 0;
                n < 4;
                n += 1
              )
                8 * r + 6 * n <= 32 * e.length
                  ? (u +=
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                        (i >>> (6 * (3 - n))) & 63,
                      ))
                  : (u += t.b64Pad);
            return u;
          }
          function h(e, t) {
            var r,
              n,
              i = "",
              s = 4 * e.length;
            for (r = 0; r < s; r += 1)
              (n = (e[r >>> 2] >>> (8 * (3 - (r % 4)))) & 255),
                (i += String.fromCharCode(n));
            return i;
          }
          function l(e, t) {
            var r,
              n = 4 * e.length,
              i = new Uint8Array(n);
            for (r = 0; r < n; r += 1)
              i[r] = (e[r >>> 2] >>> (8 * (3 - (r % 4)))) & 255;
            return i;
          }
          function c(e) {
            var t = { outputUpper: !1, b64Pad: "=" };
            try {
              e.hasOwnProperty("outputUpper") &&
                (t.outputUpper = e.outputUpper),
                e.hasOwnProperty("b64Pad") && (t.b64Pad = e.b64Pad);
            } catch (e) {}
            if ("boolean" != typeof t.outputUpper)
              throw "Invalid outputUpper formatting option";
            if ("string" != typeof t.b64Pad)
              throw "Invalid b64Pad formatting option";
            return t;
          }
          function d(e, t) {
            return (e << t) | (e >>> (32 - t));
          }
          function p(e, t) {
            return (e >>> t) | (e << (32 - t));
          }
          function y(e, t) {
            var r = new n(e.highOrder, e.lowOrder);
            return 32 >= t
              ? new n(
                  (r.highOrder >>> t) | ((r.lowOrder << (32 - t)) & 4294967295),
                  (r.lowOrder >>> t) | ((r.highOrder << (32 - t)) & 4294967295),
                )
              : new n(
                  (r.lowOrder >>> (t - 32)) |
                    ((r.highOrder << (64 - t)) & 4294967295),
                  (r.highOrder >>> (t - 32)) |
                    ((r.lowOrder << (64 - t)) & 4294967295),
                );
          }
          function g(e, t) {
            return e >>> t;
          }
          function m(e, t) {
            return 32 >= t
              ? new n(
                  e.highOrder >>> t,
                  (e.lowOrder >>> t) | ((e.highOrder << (32 - t)) & 4294967295),
                )
              : new n(0, e.highOrder >>> (t - 32));
          }
          function v(e, t, r) {
            return e ^ t ^ r;
          }
          function w(e, t, r) {
            return (e & t) ^ (~e & r);
          }
          function b(e, t, r) {
            return new n(
              (e.highOrder & t.highOrder) ^ (~e.highOrder & r.highOrder),
              (e.lowOrder & t.lowOrder) ^ (~e.lowOrder & r.lowOrder),
            );
          }
          function k(e, t, r) {
            return (e & t) ^ (e & r) ^ (t & r);
          }
          function A(e, t, r) {
            return new n(
              (e.highOrder & t.highOrder) ^
                (e.highOrder & r.highOrder) ^
                (t.highOrder & r.highOrder),
              (e.lowOrder & t.lowOrder) ^
                (e.lowOrder & r.lowOrder) ^
                (t.lowOrder & r.lowOrder),
            );
          }
          function _(e) {
            return p(e, 2) ^ p(e, 13) ^ p(e, 22);
          }
          function E(e) {
            var t = y(e, 28),
              r = y(e, 34),
              i = y(e, 39);
            return new n(
              t.highOrder ^ r.highOrder ^ i.highOrder,
              t.lowOrder ^ r.lowOrder ^ i.lowOrder,
            );
          }
          function S(e) {
            return p(e, 6) ^ p(e, 11) ^ p(e, 25);
          }
          function U(e) {
            var t = y(e, 14),
              r = y(e, 18),
              i = y(e, 41);
            return new n(
              t.highOrder ^ r.highOrder ^ i.highOrder,
              t.lowOrder ^ r.lowOrder ^ i.lowOrder,
            );
          }
          function K(e) {
            return p(e, 7) ^ p(e, 18) ^ g(e, 3);
          }
          function P(e) {
            var t = y(e, 1),
              r = y(e, 8),
              i = m(e, 7);
            return new n(
              t.highOrder ^ r.highOrder ^ i.highOrder,
              t.lowOrder ^ r.lowOrder ^ i.lowOrder,
            );
          }
          function j(e) {
            return p(e, 17) ^ p(e, 19) ^ g(e, 10);
          }
          function x(e) {
            var t = y(e, 19),
              r = y(e, 61),
              i = m(e, 6);
            return new n(
              t.highOrder ^ r.highOrder ^ i.highOrder,
              t.lowOrder ^ r.lowOrder ^ i.lowOrder,
            );
          }
          function T(e, t) {
            var r = (65535 & e) + (65535 & t);
            return (
              ((65535 & ((e >>> 16) + (t >>> 16) + (r >>> 16))) << 16) |
              (65535 & r)
            );
          }
          function O(e, t, r, n) {
            var i = (65535 & e) + (65535 & t) + (65535 & r) + (65535 & n);
            return (
              ((65535 &
                ((e >>> 16) +
                  (t >>> 16) +
                  (r >>> 16) +
                  (n >>> 16) +
                  (i >>> 16))) <<
                16) |
              (65535 & i)
            );
          }
          function C(e, t, r, n, i) {
            var s =
              (65535 & e) +
              (65535 & t) +
              (65535 & r) +
              (65535 & n) +
              (65535 & i);
            return (
              ((65535 &
                ((e >>> 16) +
                  (t >>> 16) +
                  (r >>> 16) +
                  (n >>> 16) +
                  (i >>> 16) +
                  (s >>> 16))) <<
                16) |
              (65535 & s)
            );
          }
          function I(e, t) {
            var r, i, s, a;
            return (
              (r = (65535 & e.lowOrder) + (65535 & t.lowOrder)),
              (i = (e.lowOrder >>> 16) + (t.lowOrder >>> 16) + (r >>> 16)),
              (s = ((65535 & i) << 16) | (65535 & r)),
              (r = (65535 & e.highOrder) + (65535 & t.highOrder) + (i >>> 16)),
              (i = (e.highOrder >>> 16) + (t.highOrder >>> 16) + (r >>> 16)),
              (a = ((65535 & i) << 16) | (65535 & r)),
              new n(a, s)
            );
          }
          function M(e, t, r, i) {
            var s, a, o, u;
            return (
              (s =
                (65535 & e.lowOrder) +
                (65535 & t.lowOrder) +
                (65535 & r.lowOrder) +
                (65535 & i.lowOrder)),
              (a =
                (e.lowOrder >>> 16) +
                (t.lowOrder >>> 16) +
                (r.lowOrder >>> 16) +
                (i.lowOrder >>> 16) +
                (s >>> 16)),
              (o = ((65535 & a) << 16) | (65535 & s)),
              (s =
                (65535 & e.highOrder) +
                (65535 & t.highOrder) +
                (65535 & r.highOrder) +
                (65535 & i.highOrder) +
                (a >>> 16)),
              (a =
                (e.highOrder >>> 16) +
                (t.highOrder >>> 16) +
                (r.highOrder >>> 16) +
                (i.highOrder >>> 16) +
                (s >>> 16)),
              (u = ((65535 & a) << 16) | (65535 & s)),
              new n(u, o)
            );
          }
          function B(e, t, r, i, s) {
            var a, o, u, f;
            return (
              (a =
                (65535 & e.lowOrder) +
                (65535 & t.lowOrder) +
                (65535 & r.lowOrder) +
                (65535 & i.lowOrder) +
                (65535 & s.lowOrder)),
              (o =
                (e.lowOrder >>> 16) +
                (t.lowOrder >>> 16) +
                (r.lowOrder >>> 16) +
                (i.lowOrder >>> 16) +
                (s.lowOrder >>> 16) +
                (a >>> 16)),
              (u = ((65535 & o) << 16) | (65535 & a)),
              (a =
                (65535 & e.highOrder) +
                (65535 & t.highOrder) +
                (65535 & r.highOrder) +
                (65535 & i.highOrder) +
                (65535 & s.highOrder) +
                (o >>> 16)),
              (o =
                (e.highOrder >>> 16) +
                (t.highOrder >>> 16) +
                (r.highOrder >>> 16) +
                (i.highOrder >>> 16) +
                (s.highOrder >>> 16) +
                (a >>> 16)),
              (f = ((65535 & o) << 16) | (65535 & a)),
              new n(f, u)
            );
          }
          function D(e, t) {
            var r,
              n,
              i,
              s,
              a,
              o,
              u,
              f,
              h,
              l,
              c = [],
              p = w,
              y = v,
              g = k,
              m = d,
              b = T,
              A = C,
              _ = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            for (l = 15 + (((t + 65) >>> 9) << 4); e.length <= l; ) e.push(0);
            for (
              e[t >>> 5] |= 128 << (24 - (t % 32)),
                e[l] = t,
                h = e.length,
                u = 0;
              u < h;
              u += 16
            ) {
              for (
                r = _[0], n = _[1], i = _[2], s = _[3], a = _[4], f = 0;
                f < 80;
                f += 1
              )
                (c[f] =
                  f < 16
                    ? e[f + u]
                    : m(c[f - 3] ^ c[f - 8] ^ c[f - 14] ^ c[f - 16], 1)),
                  (o =
                    f < 20
                      ? A(m(r, 5), p(n, i, s), a, 1518500249, c[f])
                      : f < 40
                      ? A(m(r, 5), y(n, i, s), a, 1859775393, c[f])
                      : f < 60
                      ? A(m(r, 5), g(n, i, s), a, 2400959708, c[f])
                      : A(m(r, 5), y(n, i, s), a, 3395469782, c[f])),
                  (a = s),
                  (s = i),
                  (i = m(n, 30)),
                  (n = r),
                  (r = o);
              (_[0] = b(r, _[0])),
                (_[1] = b(n, _[1])),
                (_[2] = b(i, _[2])),
                (_[3] = b(s, _[3])),
                (_[4] = b(a, _[4]));
            }
            return _;
          }
          function N(e, t, r) {
            var i,
              s,
              a,
              o,
              u,
              f,
              h,
              l,
              c,
              d,
              p,
              y,
              g,
              m,
              v,
              D,
              N,
              R,
              H,
              F,
              z,
              q,
              G,
              V,
              Z,
              Y,
              X,
              W,
              $,
              J,
              Q,
              ee,
              te = [],
              re = [
                1116352408, 1899447441, 3049323471, 3921009573, 961987163,
                1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                607225278, 1426881987, 1925078388, 2162078206, 2614888103,
                3248222580, 3835390401, 4022224774, 264347078, 604807628,
                770255983, 1249150122, 1555081692, 1996064986, 2554220882,
                2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
                113926993, 338241895, 666307205, 773529912, 1294757372,
                1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
                3600352804, 4094571909, 275423344, 430227734, 506948616,
                659060556, 883997877, 958139571, 1322822218, 1537002063,
                1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
                2428436474, 2756734187, 3204031479, 3329325298,
              ],
              ne = [
                3238371032, 914150663, 812702999, 4144912697, 4290775857,
                1750603025, 1694076839, 3204075428,
              ],
              ie = [
                1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
                2600822924, 528734635, 1541459225,
              ];
            if (("SHA-224" === r || "SHA-256" === r) && 2 & L)
              (y = 64),
                (g = 15 + (((t + 65) >>> 9) << 4)),
                (D = 16),
                (N = 1),
                (X = Number),
                (R = T),
                (H = O),
                (F = C),
                (z = K),
                (q = j),
                (G = _),
                (V = S),
                (Y = k),
                (Z = w),
                (p = "SHA-224" === r ? ne : ie);
            else {
              if (("SHA-384" !== r && "SHA-512" !== r) || !(4 & L))
                throw "Unexpected error in SHA-2 implementation";
              (y = 80),
                (g = 31 + (((t + 128) >>> 10) << 5)),
                (D = 32),
                (N = 2),
                (R = I),
                (H = M),
                (F = B),
                (z = P),
                (q = x),
                (G = E),
                (V = U),
                (Y = A),
                (Z = b),
                (re = [
                  new (X = n)(re[0], 3609767458),
                  new X(re[1], 602891725),
                  new X(re[2], 3964484399),
                  new X(re[3], 2173295548),
                  new X(re[4], 4081628472),
                  new X(re[5], 3053834265),
                  new X(re[6], 2937671579),
                  new X(re[7], 3664609560),
                  new X(re[8], 2734883394),
                  new X(re[9], 1164996542),
                  new X(re[10], 1323610764),
                  new X(re[11], 3590304994),
                  new X(re[12], 4068182383),
                  new X(re[13], 991336113),
                  new X(re[14], 633803317),
                  new X(re[15], 3479774868),
                  new X(re[16], 2666613458),
                  new X(re[17], 944711139),
                  new X(re[18], 2341262773),
                  new X(re[19], 2007800933),
                  new X(re[20], 1495990901),
                  new X(re[21], 1856431235),
                  new X(re[22], 3175218132),
                  new X(re[23], 2198950837),
                  new X(re[24], 3999719339),
                  new X(re[25], 766784016),
                  new X(re[26], 2566594879),
                  new X(re[27], 3203337956),
                  new X(re[28], 1034457026),
                  new X(re[29], 2466948901),
                  new X(re[30], 3758326383),
                  new X(re[31], 168717936),
                  new X(re[32], 1188179964),
                  new X(re[33], 1546045734),
                  new X(re[34], 1522805485),
                  new X(re[35], 2643833823),
                  new X(re[36], 2343527390),
                  new X(re[37], 1014477480),
                  new X(re[38], 1206759142),
                  new X(re[39], 344077627),
                  new X(re[40], 1290863460),
                  new X(re[41], 3158454273),
                  new X(re[42], 3505952657),
                  new X(re[43], 106217008),
                  new X(re[44], 3606008344),
                  new X(re[45], 1432725776),
                  new X(re[46], 1467031594),
                  new X(re[47], 851169720),
                  new X(re[48], 3100823752),
                  new X(re[49], 1363258195),
                  new X(re[50], 3750685593),
                  new X(re[51], 3785050280),
                  new X(re[52], 3318307427),
                  new X(re[53], 3812723403),
                  new X(re[54], 2003034995),
                  new X(re[55], 3602036899),
                  new X(re[56], 1575990012),
                  new X(re[57], 1125592928),
                  new X(re[58], 2716904306),
                  new X(re[59], 442776044),
                  new X(re[60], 593698344),
                  new X(re[61], 3733110249),
                  new X(re[62], 2999351573),
                  new X(re[63], 3815920427),
                  new X(3391569614, 3928383900),
                  new X(3515267271, 566280711),
                  new X(3940187606, 3454069534),
                  new X(4118630271, 4000239992),
                  new X(116418474, 1914138554),
                  new X(174292421, 2731055270),
                  new X(289380356, 3203993006),
                  new X(460393269, 320620315),
                  new X(685471733, 587496836),
                  new X(852142971, 1086792851),
                  new X(1017036298, 365543100),
                  new X(1126000580, 2618297676),
                  new X(1288033470, 3409855158),
                  new X(1501505948, 4234509866),
                  new X(1607167915, 987167468),
                  new X(1816402316, 1246189591),
                ]),
                (p =
                  "SHA-384" === r
                    ? [
                        new X(3418070365, ne[0]),
                        new X(1654270250, ne[1]),
                        new X(2438529370, ne[2]),
                        new X(355462360, ne[3]),
                        new X(1731405415, ne[4]),
                        new X(41048885895, ne[5]),
                        new X(3675008525, ne[6]),
                        new X(1203062813, ne[7]),
                      ]
                    : [
                        new X(ie[0], 4089235720),
                        new X(ie[1], 2227873595),
                        new X(ie[2], 4271175723),
                        new X(ie[3], 1595750129),
                        new X(ie[4], 2917565137),
                        new X(ie[5], 725511199),
                        new X(ie[6], 4215389547),
                        new X(ie[7], 327033209),
                      ]);
            }
            for (; e.length <= g; ) e.push(0);
            for (
              e[t >>> 5] |= 128 << (24 - (t % 32)),
                e[g] = t,
                Q = e.length,
                m = 0;
              m < Q;
              m += D
            ) {
              for (
                i = p[0],
                  s = p[1],
                  a = p[2],
                  o = p[3],
                  u = p[4],
                  f = p[5],
                  h = p[6],
                  l = p[7],
                  v = 0;
                v < y;
                v += 1
              )
                v < 16
                  ? ((J = v * N + m),
                    (W = e.length <= J ? 0 : e[J]),
                    ($ = e.length <= J + 1 ? 0 : e[J + 1]),
                    (te[v] = new X(W, $)))
                  : (te[v] = H(
                      q(te[v - 2]),
                      te[v - 7],
                      z(te[v - 15]),
                      te[v - 16],
                    )),
                  (c = F(l, V(u), Z(u, f, h), re[v], te[v])),
                  (d = R(G(i), Y(i, s, a))),
                  (l = h),
                  (h = f),
                  (f = u),
                  (u = R(o, c)),
                  (o = a),
                  (a = s),
                  (s = i),
                  (i = R(c, d));
              (p[0] = R(i, p[0])),
                (p[1] = R(s, p[1])),
                (p[2] = R(a, p[2])),
                (p[3] = R(o, p[3])),
                (p[4] = R(u, p[4])),
                (p[5] = R(f, p[5])),
                (p[6] = R(h, p[6])),
                (p[7] = R(l, p[7]));
            }
            if ("SHA-224" === r && 2 & L)
              ee = [p[0], p[1], p[2], p[3], p[4], p[5], p[6]];
            else if ("SHA-256" === r && 2 & L) ee = p;
            else if ("SHA-384" === r && 4 & L)
              ee = [
                p[0].highOrder,
                p[0].lowOrder,
                p[1].highOrder,
                p[1].lowOrder,
                p[2].highOrder,
                p[2].lowOrder,
                p[3].highOrder,
                p[3].lowOrder,
                p[4].highOrder,
                p[4].lowOrder,
                p[5].highOrder,
                p[5].lowOrder,
              ];
            else {
              if (!("SHA-512" === r && 4 & L))
                throw "Unexpected error in SHA-2 implementation";
              ee = [
                p[0].highOrder,
                p[0].lowOrder,
                p[1].highOrder,
                p[1].lowOrder,
                p[2].highOrder,
                p[2].lowOrder,
                p[3].highOrder,
                p[3].lowOrder,
                p[4].highOrder,
                p[4].lowOrder,
                p[5].highOrder,
                p[5].lowOrder,
                p[6].highOrder,
                p[6].lowOrder,
                p[7].highOrder,
                p[7].lowOrder,
              ];
            }
            return ee;
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var L = 7,
            R = function (e, t, r) {
              var n = 0,
                d = [0],
                p = "",
                y = null;
              if (
                "UTF8" !== (p = r || "UTF8") &&
                "UTF16BE" !== p &&
                "UTF16LE" !== p
              )
                throw "encoding must be UTF8, UTF16BE, or UTF16LE";
              if ("HEX" === t) {
                if (0 != e.length % 2)
                  throw "srcString of HEX type must be in byte increments";
                (y = s(e)), (n = y.binLen), (d = y.value);
              } else if ("TEXT" === t || "ASCII" === t)
                (y = i(e, p)), (n = y.binLen), (d = y.value);
              else if ("B64" === t) (y = o(e)), (n = y.binLen), (d = y.value);
              else if ("BYTES" === t) (y = a(e)), (n = y.binLen), (d = y.value);
              else {
                if ("TYPED" !== t)
                  throw "inputFormat must be HEX, TEXT, ASCII, B64, BYTES, or TYPED";
                (y = (function (e) {
                  var t,
                    r,
                    n,
                    i = [];
                  for (r = 0; r < e.length; r += 1)
                    (t = e[r]),
                      (n = r >>> 2),
                      i.length <= n && i.push(0),
                      (i[n] |= t << (24 - (r % 4) * 8));
                  return { value: i, binLen: 8 * e.length };
                })(e)),
                  (n = y.binLen),
                  (d = y.value);
              }
              (this.getHash = function (e, t, r, i) {
                var s,
                  a = null,
                  o = d.slice(),
                  p = n;
                if (
                  (3 === arguments.length
                    ? "number" != typeof r && ((i = r), (r = 1))
                    : 2 === arguments.length && (r = 1),
                  r !== parseInt(r, 10) || 1 > r)
                )
                  throw "numRounds must a integer >= 1";
                switch (t) {
                  case "HEX":
                    a = u;
                    break;
                  case "B64":
                    a = f;
                    break;
                  case "BYTES":
                    a = h;
                    break;
                  case "TYPED":
                    a = l;
                    break;
                  default:
                    throw "format must be HEX, B64, or BYTES";
                }
                if ("SHA-1" === e && 1 & L)
                  for (s = 0; s < r; s += 1) (o = D(o, p)), (p = 160);
                else if ("SHA-224" === e && 2 & L)
                  for (s = 0; s < r; s += 1) (o = N(o, p, e)), (p = 224);
                else if ("SHA-256" === e && 2 & L)
                  for (s = 0; s < r; s += 1) (o = N(o, p, e)), (p = 256);
                else if ("SHA-384" === e && 4 & L)
                  for (s = 0; s < r; s += 1) (o = N(o, p, e)), (p = 384);
                else {
                  if (!("SHA-512" === e && 4 & L))
                    throw "Chosen SHA variant is not supported";
                  for (s = 0; s < r; s += 1) (o = N(o, p, e)), (p = 512);
                }
                return a(o, c(i));
              }),
                (this.getHMAC = function (e, t, r, l, y) {
                  var g,
                    m,
                    v,
                    w,
                    b,
                    k,
                    A,
                    _,
                    E,
                    S = [],
                    U = [],
                    K = null;
                  switch (l) {
                    case "HEX":
                      g = u;
                      break;
                    case "B64":
                      g = f;
                      break;
                    case "BYTES":
                      g = h;
                      break;
                    default:
                      throw "outputFormat must be HEX, B64, or BYTES";
                  }
                  if ("SHA-1" === r && 1 & L) (v = 64), (E = 160);
                  else if ("SHA-224" === r && 2 & L) (v = 64), (E = 224);
                  else if ("SHA-256" === r && 2 & L) (v = 64), (E = 256);
                  else if ("SHA-384" === r && 4 & L) (v = 128), (E = 384);
                  else {
                    if (!("SHA-512" === r && 4 & L))
                      throw "Chosen SHA variant is not supported";
                    (v = 128), (E = 512);
                  }
                  if ("HEX" === t) (_ = (K = s(e)).binLen), (m = K.value);
                  else if ("TEXT" === t || "ASCII" === t)
                    (_ = (K = i(e, p)).binLen), (m = K.value);
                  else if ("B64" === t) (_ = (K = o(e)).binLen), (m = K.value);
                  else {
                    if ("BYTES" !== t)
                      throw "inputFormat must be HEX, TEXT, ASCII, B64, or BYTES";
                    (_ = (K = a(e)).binLen), (m = K.value);
                  }
                  if (((w = 8 * v), (A = v / 4 - 1), v < _ / 8)) {
                    if ("SHA-1" === r && 1 & L) m = D(m, _);
                    else {
                      if (!(6 & L))
                        throw "Unexpected error in HMAC implementation";
                      m = N(m, _, r);
                    }
                    for (; m.length <= A; ) m.push(0);
                    m[A] &= 4294967040;
                  } else if (v > _ / 8) {
                    for (; m.length <= A; ) m.push(0);
                    m[A] &= 4294967040;
                  }
                  for (b = 0; b <= A; b += 1)
                    (S[b] = 909522486 ^ m[b]), (U[b] = 1549556828 ^ m[b]);
                  if ("SHA-1" === r && 1 & L)
                    k = D(U.concat(D(S.concat(d), w + n)), w + E);
                  else {
                    if (!(6 & L))
                      throw "Unexpected error in HMAC implementation";
                    k = N(U.concat(N(S.concat(d), w + n, r)), w + E, r);
                  }
                  return g(k, c(y));
                });
            };
          r.default = {
            sha1: function (e) {
              return new R(e, "TYPED", "UTF8").getHash("SHA-1", "TYPED");
            },
            sha224: function (e) {
              return new R(e, "TYPED", "UTF8").getHash("SHA-224", "TYPED");
            },
            sha256: function (e) {
              return new R(e, "TYPED", "UTF8").getHash("SHA-256", "TYPED");
            },
            sha384: function (e) {
              return new R(e, "TYPED", "UTF8").getHash("SHA-384", "TYPED");
            },
            sha512: function (e) {
              return new R(e, "TYPED", "UTF8").getHash("SHA-512", "TYPED");
            },
          };
        },
        {},
      ],
      24: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var i = n(e("./cipher")),
            s = n(e("./hash")),
            a = n(e("./cfb")),
            o = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("./gcm")),
            u = n(e("./public_key")),
            f = n(e("./signature")),
            h = n(e("./random")),
            l = n(e("./pkcs1")),
            c = n(e("./crypto.js")),
            d = {
              cipher: i.default,
              hash: s.default,
              cfb: a.default,
              gcm: o,
              publicKey: u.default,
              signature: f.default,
              random: h.default,
              pkcs1: l.default,
            };
          for (var p in c.default) d[p] = c.default[p];
          r.default = d;
        },
        {
          "./cfb": 11,
          "./cipher": 16,
          "./crypto.js": 18,
          "./gcm": 19,
          "./hash": 20,
          "./pkcs1": 25,
          "./public_key": 28,
          "./random": 31,
          "./signature": 32,
        },
      ],
      25: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var i = n(e("./random.js")),
            s = n(e("../util.js")),
            a = n(e("./public_key/jsbn.js")),
            o = n(e("./hash")),
            u = [];
          (u[1] = [
            48, 32, 48, 12, 6, 8, 42, 134, 72, 134, 247, 13, 2, 5, 5, 0, 4, 16,
          ]),
            (u[2] = [48, 33, 48, 9, 6, 5, 43, 14, 3, 2, 26, 5, 0, 4, 20]),
            (u[3] = [48, 33, 48, 9, 6, 5, 43, 36, 3, 2, 1, 5, 0, 4, 20]),
            (u[8] = [
              48, 49, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 1, 5, 0, 4,
              32,
            ]),
            (u[9] = [
              48, 65, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 2, 5, 0, 4,
              48,
            ]),
            (u[10] = [
              48, 81, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 3, 5, 0, 4,
              64,
            ]),
            (u[11] = [
              48, 45, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 4, 5, 0, 4,
              28,
            ]),
            (r.default = {
              eme: {
                encode: function (e, t) {
                  var r = e.length;
                  if (r > t - 11) throw new Error("Message too long");
                  var n = (function (e) {
                    for (var t, r = ""; r.length < e; )
                      0 !== (t = i.default.getSecureRandomOctet()) &&
                        (r += String.fromCharCode(t));
                    return r;
                  })(t - r - 3);
                  return (
                    String.fromCharCode(0) +
                    String.fromCharCode(2) +
                    n +
                    String.fromCharCode(0) +
                    e
                  );
                },
                decode: function (e) {
                  0 !== e.charCodeAt(0) && (e = String.fromCharCode(0) + e);
                  for (
                    var t = e.charCodeAt(0), r = e.charCodeAt(1), n = 2;
                    0 !== e.charCodeAt(n) && n < e.length;

                  )
                    n++;
                  var i = n - 2,
                    s = e.charCodeAt(n++);
                  if (0 === t && 2 === r && i >= 8 && 0 === s)
                    return e.substr(n);
                  throw new Error("Decryption error");
                },
              },
              emsa: {
                encode: function (e, t, r) {
                  var n,
                    i = s.default.Uint8Array2str(
                      o.default.digest(e, s.default.str2Uint8Array(t)),
                    );
                  if (i.length !== o.default.getHashByteLength(e))
                    throw new Error("Invalid hash length");
                  var f = "";
                  for (n = 0; n < u[e].length; n++)
                    f += String.fromCharCode(u[e][n]);
                  var h = (f += i).length;
                  if (r < h + 11)
                    throw new Error(
                      "Intended encoded message length too short",
                    );
                  var l = "";
                  for (n = 0; n < r - h - 3; n++) l += String.fromCharCode(255);
                  var c =
                    String.fromCharCode(0) +
                    String.fromCharCode(1) +
                    l +
                    String.fromCharCode(0) +
                    f;
                  return new a.default(s.default.hexstrdump(c), 16);
                },
              },
            });
        },
        {
          "../util.js": 70,
          "./hash": 20,
          "./public_key/jsbn.js": 29,
          "./random.js": 31,
        },
      ],
      26: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = function () {
              (this.select_hash_algorithm = function (e) {
                var t = u.default.prefer_hash_algorithm;
                switch (Math.round(e.bitLength() / 8)) {
                  case 20:
                    return 2 !== t && t > 11 && 10 !== t && t < 8 ? 2 : t;
                  case 28:
                    return t > 11 && t < 8 ? 11 : t;
                  case 32:
                    return t > 10 && t < 8 ? 8 : t;
                  default:
                    return (
                      o.default.print_debug(
                        "DSA select hash algorithm: returning null for an unknown length of q",
                      ),
                      null
                    );
                }
              }),
                (this.sign = function (e, t, r, n, u, f) {
                  for (
                    var h,
                      l,
                      c,
                      d = o.default.getLeftNBits(
                        o.default.Uint8Array2str(
                          a.default.digest(e, o.default.str2Uint8Array(t)),
                        ),
                        u.bitLength(),
                      ),
                      p = new i.default(o.default.hexstrdump(d), 16);
                    (h = s.default.getRandomBigIntegerInRange(
                      i.default.ONE,
                      u.subtract(i.default.ONE),
                    )),
                      (l = r.modPow(h, n).mod(u)),
                      (c = h
                        .modInverse(u)
                        .multiply(p.add(f.multiply(l)))
                        .mod(u)),
                      0 === l || 0 === c;

                  );
                  var y = [];
                  return (y[0] = l.toMPI()), (y[1] = c.toMPI()), y;
                }),
                (this.verify = function (e, t, r, n, s, u, f, h) {
                  var l = o.default.getLeftNBits(
                      o.default.Uint8Array2str(
                        a.default.digest(e, o.default.str2Uint8Array(n)),
                      ),
                      u.bitLength(),
                    ),
                    c = new i.default(o.default.hexstrdump(l), 16);
                  if (
                    i.default.ZERO.compareTo(t) >= 0 ||
                    t.compareTo(u) >= 0 ||
                    i.default.ZERO.compareTo(r) >= 0 ||
                    r.compareTo(u) >= 0
                  )
                    return o.default.print_debug("invalid DSA Signature"), null;
                  var d = r.modInverse(u);
                  if (0 === i.default.ZERO.compareTo(d))
                    return o.default.print_debug("invalid DSA Signature"), null;
                  var p = c.multiply(d).mod(u),
                    y = t.multiply(d).mod(u);
                  return f.modPow(p, s).multiply(h.modPow(y, s)).mod(s).mod(u);
                });
            });
          var i = n(e("./jsbn.js")),
            s = n(e("../random.js")),
            a = n(e("../hash")),
            o = n(e("../../util.js")),
            u = n(e("../../config"));
        },
        {
          "../../config": 10,
          "../../util.js": 70,
          "../hash": 20,
          "../random.js": 31,
          "./jsbn.js": 29,
        },
      ],
      27: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = function () {
              (this.encrypt = function (e, t, r, n) {
                var a = r.subtract(i.default.TWO),
                  o = s.default.getRandomBigIntegerInRange(i.default.ONE, a);
                o = o.mod(a).add(i.default.ONE);
                var u = [];
                return (
                  (u[0] = t.modPow(o, r)),
                  (u[1] = n.modPow(o, r).multiply(e).mod(r)),
                  u
                );
              }),
                (this.decrypt = function (e, t, r, n) {
                  return (
                    a.default.print_debug(
                      "Elgamal Decrypt:\nc1:" +
                        a.default.hexstrdump(e.toMPI()) +
                        "\nc2:" +
                        a.default.hexstrdump(t.toMPI()) +
                        "\np:" +
                        a.default.hexstrdump(r.toMPI()) +
                        "\nx:" +
                        a.default.hexstrdump(n.toMPI()),
                    ),
                    e.modPow(n, r).modInverse(r).multiply(t).mod(r)
                  );
                });
            });
          var i = n(e("./jsbn.js")),
            s = n(e("../random.js")),
            a = n(e("../../util.js"));
        },
        { "../../util.js": 70, "../random.js": 31, "./jsbn.js": 29 },
      ],
      28: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var i = n(e("./rsa.js")),
            s = n(e("./elgamal.js")),
            a = n(e("./dsa.js"));
          r.default = { rsa: i.default, elgamal: s.default, dsa: a.default };
        },
        { "./dsa.js": 26, "./elgamal.js": 27, "./rsa.js": 30 },
      ],
      29: [
        function (e, t, r) {
          "use strict";
          function n(e, t, r) {
            null != e &&
              ("number" == typeof e
                ? this.fromNumber(e, t, r)
                : null == t && "string" != typeof e
                ? this.fromString(e, 256)
                : this.fromString(e, t));
          }
          function i() {
            return new n(null);
          }
          function s(e) {
            return _.charAt(e);
          }
          function a(e, t) {
            var r = E[e.charCodeAt(t)];
            return null == r ? -1 : r;
          }
          function o(e) {
            var t = i();
            return t.fromInt(e), t;
          }
          function u(e) {
            var t,
              r = 1;
            return (
              0 != (t = e >>> 16) && ((e = t), (r += 16)),
              0 != (t = e >> 8) && ((e = t), (r += 8)),
              0 != (t = e >> 4) && ((e = t), (r += 4)),
              0 != (t = e >> 2) && ((e = t), (r += 2)),
              0 != (t = e >> 1) && ((e = t), (r += 1)),
              r
            );
          }
          function f(e) {
            this.m = e;
          }
          function h(e) {
            (this.m = e),
              (this.mp = e.invDigit()),
              (this.mpl = 32767 & this.mp),
              (this.mph = this.mp >> 15),
              (this.um = (1 << (e.DB - 15)) - 1),
              (this.mt2 = 2 * e.t);
          }
          function l(e, t) {
            return e & t;
          }
          function c(e, t) {
            return e | t;
          }
          function d(e, t) {
            return e ^ t;
          }
          function p(e, t) {
            return e & ~t;
          }
          function y(e) {
            if (0 == e) return -1;
            var t = 0;
            return (
              0 == (65535 & e) && ((e >>= 16), (t += 16)),
              0 == (255 & e) && ((e >>= 8), (t += 8)),
              0 == (15 & e) && ((e >>= 4), (t += 4)),
              0 == (3 & e) && ((e >>= 2), (t += 2)),
              0 == (1 & e) && ++t,
              t
            );
          }
          function g(e) {
            for (var t = 0; 0 != e; ) (e &= e - 1), ++t;
            return t;
          }
          function m() {}
          function v(e) {
            return e;
          }
          function w(e) {
            (this.r2 = i()),
              (this.q3 = i()),
              n.ONE.dlShiftTo(2 * e.t, this.r2),
              (this.mu = this.r2.divide(e)),
              (this.m = e);
          }
          function u(e) {
            var t,
              r = 1;
            return (
              0 != (t = e >>> 16) && ((e = t), (r += 16)),
              0 != (t = e >> 8) && ((e = t), (r += 8)),
              0 != (t = e >> 4) && ((e = t), (r += 4)),
              0 != (t = e >> 2) && ((e = t), (r += 2)),
              0 != (t = e >> 1) && ((e = t), (r += 1)),
              r
            );
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = n);
          var b = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(e("../../util.js"));
          (n.prototype.am = function (e, t, r, n, i, s) {
            for (; --s >= 0; ) {
              var a = t * this[e++] + r[n] + i;
              (i = Math.floor(a / 67108864)), (r[n++] = 67108863 & a);
            }
            return i;
          }),
            (n.prototype.DB = 26),
            (n.prototype.DM = 67108863),
            (n.prototype.DV = 1 << 26);
          (n.prototype.FV = Math.pow(2, 52)),
            (n.prototype.F1 = 26),
            (n.prototype.F2 = 0);
          var k,
            A,
            _ = "0123456789abcdefghijklmnopqrstuvwxyz",
            E = new Array();
          for (k = "0".charCodeAt(0), A = 0; A <= 9; ++A) E[k++] = A;
          for (k = "a".charCodeAt(0), A = 10; A < 36; ++A) E[k++] = A;
          for (k = "A".charCodeAt(0), A = 10; A < 36; ++A) E[k++] = A;
          (f.prototype.convert = function (e) {
            return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
          }),
            (f.prototype.revert = function (e) {
              return e;
            }),
            (f.prototype.reduce = function (e) {
              e.divRemTo(this.m, null, e);
            }),
            (f.prototype.mulTo = function (e, t, r) {
              e.multiplyTo(t, r), this.reduce(r);
            }),
            (f.prototype.sqrTo = function (e, t) {
              e.squareTo(t), this.reduce(t);
            }),
            (h.prototype.convert = function (e) {
              var t = i();
              return (
                e.abs().dlShiftTo(this.m.t, t),
                t.divRemTo(this.m, null, t),
                e.s < 0 && t.compareTo(n.ZERO) > 0 && this.m.subTo(t, t),
                t
              );
            }),
            (h.prototype.revert = function (e) {
              var t = i();
              return e.copyTo(t), this.reduce(t), t;
            }),
            (h.prototype.reduce = function (e) {
              for (; e.t <= this.mt2; ) e[e.t++] = 0;
              for (var t = 0; t < this.m.t; ++t) {
                var r = 32767 & e[t],
                  n =
                    (r * this.mpl +
                      (((r * this.mph + (e[t] >> 15) * this.mpl) & this.um) <<
                        15)) &
                    e.DM;
                for (
                  e[(r = t + this.m.t)] += this.m.am(0, n, e, t, 0, this.m.t);
                  e[r] >= e.DV;

                )
                  (e[r] -= e.DV), e[++r]++;
              }
              e.clamp(),
                e.drShiftTo(this.m.t, e),
                e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
            }),
            (h.prototype.mulTo = function (e, t, r) {
              e.multiplyTo(t, r), this.reduce(r);
            }),
            (h.prototype.sqrTo = function (e, t) {
              e.squareTo(t), this.reduce(t);
            }),
            (n.prototype.copyTo = function (e) {
              for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
              (e.t = this.t), (e.s = this.s);
            }),
            (n.prototype.fromInt = function (e) {
              (this.t = 1),
                (this.s = e < 0 ? -1 : 0),
                e > 0
                  ? (this[0] = e)
                  : e < -1
                  ? (this[0] = e + this.DV)
                  : (this.t = 0);
            }),
            (n.prototype.fromString = function (e, t) {
              var r;
              if (16 == t) r = 4;
              else if (8 == t) r = 3;
              else if (256 == t) r = 8;
              else if (2 == t) r = 1;
              else if (32 == t) r = 5;
              else {
                if (4 != t) return void this.fromRadix(e, t);
                r = 2;
              }
              (this.t = 0), (this.s = 0);
              for (var i = e.length, s = !1, o = 0; --i >= 0; ) {
                var u = 8 == r ? 255 & e[i] : a(e, i);
                u < 0
                  ? "-" == e.charAt(i) && (s = !0)
                  : ((s = !1),
                    0 == o
                      ? (this[this.t++] = u)
                      : o + r > this.DB
                      ? ((this[this.t - 1] |=
                          (u & ((1 << (this.DB - o)) - 1)) << o),
                        (this[this.t++] = u >> (this.DB - o)))
                      : (this[this.t - 1] |= u << o),
                    (o += r) >= this.DB && (o -= this.DB));
              }
              8 == r &&
                0 != (128 & e[0]) &&
                ((this.s = -1),
                o > 0 && (this[this.t - 1] |= ((1 << (this.DB - o)) - 1) << o)),
                this.clamp(),
                s && n.ZERO.subTo(this, this);
            }),
            (n.prototype.clamp = function () {
              for (
                var e = this.s & this.DM;
                this.t > 0 && this[this.t - 1] == e;

              )
                --this.t;
            }),
            (n.prototype.dlShiftTo = function (e, t) {
              var r;
              for (r = this.t - 1; r >= 0; --r) t[r + e] = this[r];
              for (r = e - 1; r >= 0; --r) t[r] = 0;
              (t.t = this.t + e), (t.s = this.s);
            }),
            (n.prototype.drShiftTo = function (e, t) {
              for (var r = e; r < this.t; ++r) t[r - e] = this[r];
              (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
            }),
            (n.prototype.lShiftTo = function (e, t) {
              var r,
                n = e % this.DB,
                i = this.DB - n,
                s = (1 << i) - 1,
                a = Math.floor(e / this.DB),
                o = (this.s << n) & this.DM;
              for (r = this.t - 1; r >= 0; --r)
                (t[r + a + 1] = (this[r] >> i) | o), (o = (this[r] & s) << n);
              for (r = a - 1; r >= 0; --r) t[r] = 0;
              (t[a] = o), (t.t = this.t + a + 1), (t.s = this.s), t.clamp();
            }),
            (n.prototype.rShiftTo = function (e, t) {
              t.s = this.s;
              var r = Math.floor(e / this.DB);
              if (r >= this.t) t.t = 0;
              else {
                var n = e % this.DB,
                  i = this.DB - n,
                  s = (1 << n) - 1;
                t[0] = this[r] >> n;
                for (var a = r + 1; a < this.t; ++a)
                  (t[a - r - 1] |= (this[a] & s) << i),
                    (t[a - r] = this[a] >> n);
                n > 0 && (t[this.t - r - 1] |= (this.s & s) << i),
                  (t.t = this.t - r),
                  t.clamp();
              }
            }),
            (n.prototype.subTo = function (e, t) {
              for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; )
                (n += this[r] - e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
              if (e.t < this.t) {
                for (n -= e.s; r < this.t; )
                  (n += this[r]), (t[r++] = n & this.DM), (n >>= this.DB);
                n += this.s;
              } else {
                for (n += this.s; r < e.t; )
                  (n -= e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
                n -= e.s;
              }
              (t.s = n < 0 ? -1 : 0),
                n < -1 ? (t[r++] = this.DV + n) : n > 0 && (t[r++] = n),
                (t.t = r),
                t.clamp();
            }),
            (n.prototype.multiplyTo = function (e, t) {
              var r = this.abs(),
                i = e.abs(),
                s = r.t;
              for (t.t = s + i.t; --s >= 0; ) t[s] = 0;
              for (s = 0; s < i.t; ++s)
                t[s + r.t] = r.am(0, i[s], t, s, 0, r.t);
              (t.s = 0), t.clamp(), this.s != e.s && n.ZERO.subTo(t, t);
            }),
            (n.prototype.squareTo = function (e) {
              for (var t = this.abs(), r = (e.t = 2 * t.t); --r >= 0; )
                e[r] = 0;
              for (r = 0; r < t.t - 1; ++r) {
                var n = t.am(r, t[r], e, 2 * r, 0, 1);
                (e[r + t.t] += t.am(
                  r + 1,
                  2 * t[r],
                  e,
                  2 * r + 1,
                  n,
                  t.t - r - 1,
                )) >= t.DV && ((e[r + t.t] -= t.DV), (e[r + t.t + 1] = 1));
              }
              e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)),
                (e.s = 0),
                e.clamp();
            }),
            (n.prototype.divRemTo = function (e, t, r) {
              var s = e.abs();
              if (!(s.t <= 0)) {
                var a = this.abs();
                if (a.t < s.t)
                  return (
                    null != t && t.fromInt(0),
                    void (null != r && this.copyTo(r))
                  );
                null == r && (r = i());
                var o = i(),
                  f = this.s,
                  h = e.s,
                  l = this.DB - u(s[s.t - 1]);
                l > 0
                  ? (s.lShiftTo(l, o), a.lShiftTo(l, r))
                  : (s.copyTo(o), a.copyTo(r));
                var c = o.t,
                  d = o[c - 1];
                if (0 != d) {
                  var p =
                      d * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0),
                    y = this.FV / p,
                    g = (1 << this.F1) / p,
                    m = 1 << this.F2,
                    v = r.t,
                    w = v - c,
                    b = null == t ? i() : t;
                  for (
                    o.dlShiftTo(w, b),
                      r.compareTo(b) >= 0 && ((r[r.t++] = 1), r.subTo(b, r)),
                      n.ONE.dlShiftTo(c, b),
                      b.subTo(o, o);
                    o.t < c;

                  )
                    o[o.t++] = 0;
                  for (; --w >= 0; ) {
                    var k =
                      r[--v] == d
                        ? this.DM
                        : Math.floor(r[v] * y + (r[v - 1] + m) * g);
                    if ((r[v] += o.am(0, k, r, w, 0, c)) < k)
                      for (o.dlShiftTo(w, b), r.subTo(b, r); r[v] < --k; )
                        r.subTo(b, r);
                  }
                  null != t &&
                    (r.drShiftTo(c, t), f != h && n.ZERO.subTo(t, t)),
                    (r.t = c),
                    r.clamp(),
                    l > 0 && r.rShiftTo(l, r),
                    f < 0 && n.ZERO.subTo(r, r);
                }
              }
            }),
            (n.prototype.invDigit = function () {
              if (this.t < 1) return 0;
              var e = this[0];
              if (0 == (1 & e)) return 0;
              var t = 3 & e;
              return (
                (t = (t * (2 - (15 & e) * t)) & 15),
                (t = (t * (2 - (255 & e) * t)) & 255),
                (t = (t * (2 - (((65535 & e) * t) & 65535))) & 65535),
                (t = (t * (2 - ((e * t) % this.DV))) % this.DV) > 0
                  ? this.DV - t
                  : -t
              );
            }),
            (n.prototype.isEven = function () {
              return 0 == (this.t > 0 ? 1 & this[0] : this.s);
            }),
            (n.prototype.exp = function (e, t) {
              if (e > 4294967295 || e < 1) return n.ONE;
              var r = i(),
                s = i(),
                a = t.convert(this),
                o = u(e) - 1;
              for (a.copyTo(r); --o >= 0; )
                if ((t.sqrTo(r, s), (e & (1 << o)) > 0)) t.mulTo(s, a, r);
                else {
                  var f = r;
                  (r = s), (s = f);
                }
              return t.revert(r);
            }),
            (n.prototype.toString = function (e) {
              if (this.s < 0) return "-" + this.negate().toString(e);
              var t;
              if (16 == e) t = 4;
              else if (8 == e) t = 3;
              else if (2 == e) t = 1;
              else if (32 == e) t = 5;
              else {
                if (4 != e) return this.toRadix(e);
                t = 2;
              }
              var r,
                n = (1 << t) - 1,
                i = !1,
                a = "",
                o = this.t,
                u = this.DB - ((o * this.DB) % t);
              if (o-- > 0)
                for (
                  u < this.DB &&
                  (r = this[o] >> u) > 0 &&
                  ((i = !0), (a = s(r)));
                  o >= 0;

                )
                  u < t
                    ? ((r = (this[o] & ((1 << u) - 1)) << (t - u)),
                      (r |= this[--o] >> (u += this.DB - t)))
                    : ((r = (this[o] >> (u -= t)) & n),
                      u <= 0 && ((u += this.DB), --o)),
                    r > 0 && (i = !0),
                    i && (a += s(r));
              return i ? a : "0";
            }),
            (n.prototype.negate = function () {
              var e = i();
              return n.ZERO.subTo(this, e), e;
            }),
            (n.prototype.abs = function () {
              return this.s < 0 ? this.negate() : this;
            }),
            (n.prototype.compareTo = function (e) {
              var t = this.s - e.s;
              if (0 != t) return t;
              var r = this.t;
              if (0 != (t = r - e.t)) return this.s < 0 ? -t : t;
              for (; --r >= 0; ) if (0 != (t = this[r] - e[r])) return t;
              return 0;
            }),
            (n.prototype.bitLength = function () {
              return this.t <= 0
                ? 0
                : this.DB * (this.t - 1) +
                    u(this[this.t - 1] ^ (this.s & this.DM));
            }),
            (n.prototype.mod = function (e) {
              var t = i();
              return (
                this.abs().divRemTo(e, null, t),
                this.s < 0 && t.compareTo(n.ZERO) > 0 && e.subTo(t, t),
                t
              );
            }),
            (n.prototype.modPowInt = function (e, t) {
              var r;
              return (
                (r = e < 256 || t.isEven() ? new f(t) : new h(t)),
                this.exp(e, r)
              );
            }),
            (n.ZERO = o(0)),
            (n.ONE = o(1)),
            (n.TWO = o(2)),
            (m.prototype.convert = v),
            (m.prototype.revert = v),
            (m.prototype.mulTo = function (e, t, r) {
              e.multiplyTo(t, r);
            }),
            (m.prototype.sqrTo = function (e, t) {
              e.squareTo(t);
            }),
            (w.prototype.convert = function (e) {
              if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
              if (e.compareTo(this.m) < 0) return e;
              var t = i();
              return e.copyTo(t), this.reduce(t), t;
            }),
            (w.prototype.revert = function (e) {
              return e;
            }),
            (w.prototype.reduce = function (e) {
              for (
                e.drShiftTo(this.m.t - 1, this.r2),
                  e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
                  this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                  this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
                e.compareTo(this.r2) < 0;

              )
                e.dAddOffset(1, this.m.t + 1);
              for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; )
                e.subTo(this.m, e);
            }),
            (w.prototype.mulTo = function (e, t, r) {
              e.multiplyTo(t, r), this.reduce(r);
            }),
            (w.prototype.sqrTo = function (e, t) {
              e.squareTo(t), this.reduce(t);
            });
          var S = [
              2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
              61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
              137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197,
              199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271,
              277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353,
              359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433,
              439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
              521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601,
              607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677,
              683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769,
              773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859,
              863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953,
              967, 971, 977, 983, 991, 997,
            ],
            U = (1 << 26) / S[S.length - 1];
          (n.prototype.chunkSize = function (e) {
            return Math.floor((Math.LN2 * this.DB) / Math.log(e));
          }),
            (n.prototype.toRadix = function (e) {
              if (
                (null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36)
              )
                return "0";
              var t = this.chunkSize(e),
                r = Math.pow(e, t),
                n = o(r),
                s = i(),
                a = i(),
                u = "";
              for (this.divRemTo(n, s, a); s.signum() > 0; )
                (u = (r + a.intValue()).toString(e).substr(1) + u),
                  s.divRemTo(n, s, a);
              return a.intValue().toString(e) + u;
            }),
            (n.prototype.fromRadix = function (e, t) {
              this.fromInt(0), null == t && (t = 10);
              for (
                var r = this.chunkSize(t),
                  i = Math.pow(t, r),
                  s = !1,
                  o = 0,
                  u = 0,
                  f = 0;
                f < e.length;
                ++f
              ) {
                var h = a(e, f);
                h < 0
                  ? "-" == e.charAt(f) && 0 == this.signum() && (s = !0)
                  : ((u = t * u + h),
                    ++o >= r &&
                      (this.dMultiply(i),
                      this.dAddOffset(u, 0),
                      (o = 0),
                      (u = 0)));
              }
              o > 0 && (this.dMultiply(Math.pow(t, o)), this.dAddOffset(u, 0)),
                s && n.ZERO.subTo(this, this);
            }),
            (n.prototype.fromNumber = function (e, t, r) {
              if ("number" == typeof t)
                if (e < 2) this.fromInt(1);
                else
                  for (
                    this.fromNumber(e, r),
                      this.testBit(e - 1) ||
                        this.bitwiseTo(n.ONE.shiftLeft(e - 1), c, this),
                      this.isEven() && this.dAddOffset(1, 0);
                    !this.isProbablePrime(t);

                  )
                    this.dAddOffset(2, 0),
                      this.bitLength() > e &&
                        this.subTo(n.ONE.shiftLeft(e - 1), this);
              else {
                var i = new Array(),
                  s = 7 & e;
                (i.length = 1 + (e >> 3)),
                  t.nextBytes(i),
                  s > 0 ? (i[0] &= (1 << s) - 1) : (i[0] = 0),
                  this.fromString(i, 256);
              }
            }),
            (n.prototype.bitwiseTo = function (e, t, r) {
              var n,
                i,
                s = Math.min(e.t, this.t);
              for (n = 0; n < s; ++n) r[n] = t(this[n], e[n]);
              if (e.t < this.t) {
                for (i = e.s & this.DM, n = s; n < this.t; ++n)
                  r[n] = t(this[n], i);
                r.t = this.t;
              } else {
                for (i = this.s & this.DM, n = s; n < e.t; ++n)
                  r[n] = t(i, e[n]);
                r.t = e.t;
              }
              (r.s = t(this.s, e.s)), r.clamp();
            }),
            (n.prototype.changeBit = function (e, t) {
              var r = n.ONE.shiftLeft(e);
              return this.bitwiseTo(r, t, r), r;
            }),
            (n.prototype.addTo = function (e, t) {
              for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; )
                (n += this[r] + e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
              if (e.t < this.t) {
                for (n += e.s; r < this.t; )
                  (n += this[r]), (t[r++] = n & this.DM), (n >>= this.DB);
                n += this.s;
              } else {
                for (n += this.s; r < e.t; )
                  (n += e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
                n += e.s;
              }
              (t.s = n < 0 ? -1 : 0),
                n > 0 ? (t[r++] = n) : n < -1 && (t[r++] = this.DV + n),
                (t.t = r),
                t.clamp();
            }),
            (n.prototype.dMultiply = function (e) {
              (this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
                ++this.t,
                this.clamp();
            }),
            (n.prototype.dAddOffset = function (e, t) {
              if (0 != e) {
                for (; this.t <= t; ) this[this.t++] = 0;
                for (this[t] += e; this[t] >= this.DV; )
                  (this[t] -= this.DV),
                    ++t >= this.t && (this[this.t++] = 0),
                    ++this[t];
              }
            }),
            (n.prototype.multiplyLowerTo = function (e, t, r) {
              var n = Math.min(this.t + e.t, t);
              for (r.s = 0, r.t = n; n > 0; ) r[--n] = 0;
              var i;
              for (i = r.t - this.t; n < i; ++n)
                r[n + this.t] = this.am(0, e[n], r, n, 0, this.t);
              for (i = Math.min(e.t, t); n < i; ++n)
                this.am(0, e[n], r, n, 0, t - n);
              r.clamp();
            }),
            (n.prototype.multiplyUpperTo = function (e, t, r) {
              --t;
              var n = (r.t = this.t + e.t - t);
              for (r.s = 0; --n >= 0; ) r[n] = 0;
              for (n = Math.max(t - this.t, 0); n < e.t; ++n)
                r[this.t + n - t] = this.am(
                  t - n,
                  e[n],
                  r,
                  0,
                  0,
                  this.t + n - t,
                );
              r.clamp(), r.drShiftTo(1, r);
            }),
            (n.prototype.modInt = function (e) {
              if (e <= 0) return 0;
              var t = this.DV % e,
                r = this.s < 0 ? e - 1 : 0;
              if (this.t > 0)
                if (0 == t) r = this[0] % e;
                else
                  for (var n = this.t - 1; n >= 0; --n)
                    r = (t * r + this[n]) % e;
              return r;
            }),
            (n.prototype.millerRabin = function (e) {
              var t = this.subtract(n.ONE),
                r = t.getLowestSetBit();
              if (r <= 0) return !1;
              var s = t.shiftRight(r);
              (e = (e + 1) >> 1) > S.length && (e = S.length);
              for (var a = i(), o = [], u = 0; u < e; ++u) {
                for (
                  ;
                  (h = S[Math.floor(Math.random() * S.length)]),
                    -1 != o.indexOf(h);

                );
                o.push(h), a.fromInt(h);
                var f = a.modPow(s, this);
                if (0 != f.compareTo(n.ONE) && 0 != f.compareTo(t)) {
                  for (var h = 1; h++ < r && 0 != f.compareTo(t); )
                    if (0 == (f = f.modPowInt(2, this)).compareTo(n.ONE))
                      return !1;
                  if (0 != f.compareTo(t)) return !1;
                }
              }
              return !0;
            }),
            (n.prototype.clone = function () {
              var e = i();
              return this.copyTo(e), e;
            }),
            (n.prototype.intValue = function () {
              if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return -1;
              } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0;
              }
              return (
                ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0]
              );
            }),
            (n.prototype.byteValue = function () {
              return 0 == this.t ? this.s : (this[0] << 24) >> 24;
            }),
            (n.prototype.shortValue = function () {
              return 0 == this.t ? this.s : (this[0] << 16) >> 16;
            }),
            (n.prototype.signum = function () {
              return this.s < 0
                ? -1
                : this.t <= 0 || (1 == this.t && this[0] <= 0)
                ? 0
                : 1;
            }),
            (n.prototype.toByteArray = function () {
              var e = this.t,
                t = new Array();
              t[0] = this.s;
              var r,
                n = this.DB - ((e * this.DB) % 8),
                i = 0;
              if (e-- > 0)
                for (
                  n < this.DB &&
                  (r = this[e] >> n) != (this.s & this.DM) >> n &&
                  (t[i++] = r | (this.s << (this.DB - n)));
                  e >= 0;

                )
                  n < 8
                    ? ((r = (this[e] & ((1 << n) - 1)) << (8 - n)),
                      (r |= this[--e] >> (n += this.DB - 8)))
                    : ((r = (this[e] >> (n -= 8)) & 255),
                      n <= 0 && ((n += this.DB), --e)),
                    (i > 0 || r != this.s) && (t[i++] = r);
              return t;
            }),
            (n.prototype.equals = function (e) {
              return 0 == this.compareTo(e);
            }),
            (n.prototype.min = function (e) {
              return this.compareTo(e) < 0 ? this : e;
            }),
            (n.prototype.max = function (e) {
              return this.compareTo(e) > 0 ? this : e;
            }),
            (n.prototype.and = function (e) {
              var t = i();
              return this.bitwiseTo(e, l, t), t;
            }),
            (n.prototype.or = function (e) {
              var t = i();
              return this.bitwiseTo(e, c, t), t;
            }),
            (n.prototype.xor = function (e) {
              var t = i();
              return this.bitwiseTo(e, d, t), t;
            }),
            (n.prototype.andNot = function (e) {
              var t = i();
              return this.bitwiseTo(e, p, t), t;
            }),
            (n.prototype.not = function () {
              for (var e = i(), t = 0; t < this.t; ++t)
                e[t] = this.DM & ~this[t];
              return (e.t = this.t), (e.s = ~this.s), e;
            }),
            (n.prototype.shiftLeft = function (e) {
              var t = i();
              return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
            }),
            (n.prototype.shiftRight = function (e) {
              var t = i();
              return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
            }),
            (n.prototype.getLowestSetBit = function () {
              for (var e = 0; e < this.t; ++e)
                if (0 != this[e]) return e * this.DB + y(this[e]);
              return this.s < 0 ? this.t * this.DB : -1;
            }),
            (n.prototype.bitCount = function () {
              for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r)
                e += g(this[r] ^ t);
              return e;
            }),
            (n.prototype.testBit = function (e) {
              var t = Math.floor(e / this.DB);
              return t >= this.t
                ? 0 != this.s
                : 0 != (this[t] & (1 << e % this.DB));
            }),
            (n.prototype.setBit = function (e) {
              return this.changeBit(e, c);
            }),
            (n.prototype.clearBit = function (e) {
              return this.changeBit(e, p);
            }),
            (n.prototype.flipBit = function (e) {
              return this.changeBit(e, d);
            }),
            (n.prototype.add = function (e) {
              var t = i();
              return this.addTo(e, t), t;
            }),
            (n.prototype.subtract = function (e) {
              var t = i();
              return this.subTo(e, t), t;
            }),
            (n.prototype.multiply = function (e) {
              var t = i();
              return this.multiplyTo(e, t), t;
            }),
            (n.prototype.divide = function (e) {
              var t = i();
              return this.divRemTo(e, t, null), t;
            }),
            (n.prototype.remainder = function (e) {
              var t = i();
              return this.divRemTo(e, null, t), t;
            }),
            (n.prototype.divideAndRemainder = function (e) {
              var t = i(),
                r = i();
              return this.divRemTo(e, t, r), new Array(t, r);
            }),
            (n.prototype.modPow = function (e, t) {
              var r,
                n,
                s = e.bitLength(),
                a = o(1);
              if (s <= 0) return a;
              (r = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6),
                (n = s < 8 ? new f(t) : t.isEven() ? new w(t) : new h(t));
              var l = new Array(),
                c = 3,
                d = r - 1,
                p = (1 << r) - 1;
              if (((l[1] = n.convert(this)), r > 1)) {
                var y = i();
                for (n.sqrTo(l[1], y); c <= p; )
                  (l[c] = i()), n.mulTo(y, l[c - 2], l[c]), (c += 2);
              }
              var g,
                m,
                v = e.t - 1,
                b = !0,
                k = i();
              for (s = u(e[v]) - 1; v >= 0; ) {
                for (
                  s >= d
                    ? (g = (e[v] >> (s - d)) & p)
                    : ((g = (e[v] & ((1 << (s + 1)) - 1)) << (d - s)),
                      v > 0 && (g |= e[v - 1] >> (this.DB + s - d))),
                    c = r;
                  0 == (1 & g);

                )
                  (g >>= 1), --c;
                if (((s -= c) < 0 && ((s += this.DB), --v), b))
                  l[g].copyTo(a), (b = !1);
                else {
                  for (; c > 1; ) n.sqrTo(a, k), n.sqrTo(k, a), (c -= 2);
                  c > 0 ? n.sqrTo(a, k) : ((m = a), (a = k), (k = m)),
                    n.mulTo(k, l[g], a);
                }
                for (; v >= 0 && 0 == (e[v] & (1 << s)); )
                  n.sqrTo(a, k),
                    (m = a),
                    (a = k),
                    (k = m),
                    --s < 0 && ((s = this.DB - 1), --v);
              }
              return n.revert(a);
            }),
            (n.prototype.modInverse = function (e) {
              var t = e.isEven();
              if ((this.isEven() && t) || 0 == e.signum()) return n.ZERO;
              for (
                var r = e.clone(),
                  i = this.clone(),
                  s = o(1),
                  a = o(0),
                  u = o(0),
                  f = o(1);
                0 != r.signum();

              ) {
                for (; r.isEven(); )
                  r.rShiftTo(1, r),
                    t
                      ? ((s.isEven() && a.isEven()) ||
                          (s.addTo(this, s), a.subTo(e, a)),
                        s.rShiftTo(1, s))
                      : a.isEven() || a.subTo(e, a),
                    a.rShiftTo(1, a);
                for (; i.isEven(); )
                  i.rShiftTo(1, i),
                    t
                      ? ((u.isEven() && f.isEven()) ||
                          (u.addTo(this, u), f.subTo(e, f)),
                        u.rShiftTo(1, u))
                      : f.isEven() || f.subTo(e, f),
                    f.rShiftTo(1, f);
                r.compareTo(i) >= 0
                  ? (r.subTo(i, r), t && s.subTo(u, s), a.subTo(f, a))
                  : (i.subTo(r, i), t && u.subTo(s, u), f.subTo(a, f));
              }
              return 0 != i.compareTo(n.ONE)
                ? n.ZERO
                : f.compareTo(e) >= 0
                ? f.subtract(e)
                : f.signum() < 0
                ? (f.addTo(e, f), f.signum() < 0 ? f.add(e) : f)
                : f;
            }),
            (n.prototype.pow = function (e) {
              return this.exp(e, new m());
            }),
            (n.prototype.gcd = function (e) {
              var t = this.s < 0 ? this.negate() : this.clone(),
                r = e.s < 0 ? e.negate() : e.clone();
              if (t.compareTo(r) < 0) {
                var n = t;
                (t = r), (r = n);
              }
              var i = t.getLowestSetBit(),
                s = r.getLowestSetBit();
              if (s < 0) return t;
              for (
                i < s && (s = i), s > 0 && (t.rShiftTo(s, t), r.rShiftTo(s, r));
                t.signum() > 0;

              )
                (i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t),
                  (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
                  t.compareTo(r) >= 0
                    ? (t.subTo(r, t), t.rShiftTo(1, t))
                    : (r.subTo(t, r), r.rShiftTo(1, r));
              return s > 0 && r.lShiftTo(s, r), r;
            }),
            (n.prototype.isProbablePrime = function (e) {
              var t,
                r = this.abs();
              if (1 == r.t && r[0] <= S[S.length - 1]) {
                for (t = 0; t < S.length; ++t) if (r[0] == S[t]) return !0;
                return !1;
              }
              if (r.isEven()) return !1;
              for (t = 1; t < S.length; ) {
                for (var n = S[t], i = t + 1; i < S.length && n < U; )
                  n *= S[i++];
                for (n = r.modInt(n); t < i; ) if (n % S[t++] == 0) return !1;
              }
              return r.millerRabin(e);
            }),
            (n.prototype.toMPI = function () {
              var e = this.toByteArray(),
                t = 8 * (e.length - 1) + u(e[0]),
                r = "";
              return (
                (r += String.fromCharCode((65280 & t) >> 8)),
                (r += String.fromCharCode(255 & t)),
                (r += b.default.bin2str(e))
              );
            }),
            (n.prototype.square = function () {
              var e = i();
              return this.squareTo(e), e;
            });
        },
        { "../../util.js": 70 },
      ],
      30: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = function () {
              function e() {
                (this.n = null),
                  (this.e = 0),
                  (this.ee = null),
                  (this.d = null),
                  (this.p = null),
                  (this.q = null),
                  (this.dmp1 = null),
                  (this.dmq1 = null),
                  (this.u = null);
              }
              (this.encrypt = function (e, t, r) {
                return e.modPowInt(t, r);
              }),
                (this.decrypt = function (e, t, r, n, h, l, c) {
                  o.default.rsa_blinding &&
                    (e = (function (e, t, r) {
                      return (
                        (f =
                          f.bitLength() === t.bitLength()
                            ? f.square().mod(t)
                            : a.default.getRandomBigIntegerInRange(
                                i.default.TWO,
                                t,
                              )),
                        (u = f.modInverse(t).modPow(r, t)),
                        e.multiply(u).mod(t)
                      );
                    })(e, t, r));
                  var d = e.mod(h).modPow(n.mod(h.subtract(i.default.ONE)), h),
                    p = e.mod(l).modPow(n.mod(l.subtract(i.default.ONE)), l);
                  s.default.print_debug(
                    "rsa.js decrypt\nxpn:" +
                      s.default.hexstrdump(d.toMPI()) +
                      "\nxqn:" +
                      s.default.hexstrdump(p.toMPI()),
                  );
                  var y = p.subtract(d);
                  return (
                    0 === y[0]
                      ? ((y = (y = d.subtract(p)).multiply(c).mod(l)),
                        (y = l.subtract(y)))
                      : (y = y.multiply(c).mod(l)),
                    (y = y.multiply(h).add(d)),
                    o.default.rsa_blinding &&
                      (y = (function (e, t) {
                        return y.multiply(f).mod(t);
                      })(0, t)),
                    y
                  );
                }),
                (this.verify = function (e, t, r) {
                  return e.modPowInt(t, r);
                }),
                (this.sign = function (e, t, r) {
                  return e.modPow(t, r);
                }),
                (this.generate = function (t, r) {
                  function n(t) {
                    function n(e) {
                      var t = e.replace(/\-/g, "+").replace(/_/g, "/"),
                        r = s.default.hexstrdump(atob(t));
                      return new i.default(r, 16);
                    }
                    var a = new e();
                    return (
                      (a.n = n(t.n)),
                      (a.ee = new i.default(r, 16)),
                      (a.d = n(t.d)),
                      (a.p = n(t.p)),
                      (a.q = n(t.q)),
                      (a.u = a.p.modInverse(a.q)),
                      a
                    );
                  }
                  var o = s.default.getWebCryptoAll();
                  if (o) {
                    var u,
                      f,
                      h = new Uint32Array([parseInt(r, 16)]),
                      l = new Uint8Array(h.buffer);
                    return (
                      window.crypto && window.crypto.webkitSubtle
                        ? ((u = {
                            name: "RSA-OAEP",
                            modulusLength: t,
                            publicExponent: l.subarray(0, 3),
                            hash: { name: "SHA-1" },
                          }),
                          (f = o.generateKey(u, !0, ["encrypt", "decrypt"])))
                        : ((u = {
                            name: "RSASSA-PKCS1-v1_5",
                            modulusLength: t,
                            publicExponent: l.subarray(0, 3),
                            hash: { name: "SHA-1" },
                          }),
                          "function" !=
                            typeof (f = o.generateKey(u, !0, [
                              "sign",
                              "verify",
                            ])).then &&
                            (f = s.default.promisifyIE11Op(
                              f,
                              "Error generating RSA key pair.",
                            ))),
                      f
                        .then(function (e) {
                          var t = o.exportKey("jwk", e.privateKey);
                          return (
                            "function" != typeof t.then &&
                              (t = s.default.promisifyIE11Op(
                                t,
                                "Error exporting RSA key pair.",
                              )),
                            t
                          );
                        })
                        .then(function (e) {
                          return n(
                            e instanceof ArrayBuffer
                              ? JSON.parse(
                                  String.fromCharCode.apply(
                                    null,
                                    new Uint8Array(e),
                                  ),
                                )
                              : e,
                          );
                        })
                    );
                  }
                  return new Promise(function (n) {
                    var s = new e(),
                      o = new (function () {
                        this.nextBytes = function (e) {
                          for (var t = 0; t < e.length; t++)
                            e[t] = a.default.getSecureRandomOctet();
                        };
                      })(),
                      u = t >> 1;
                    for (
                      s.e = parseInt(r, 16), s.ee = new i.default(r, 16);
                      ;

                    ) {
                      for (
                        ;
                        (s.p = new i.default(t - u, 1, o)),
                          0 !==
                            s.p
                              .subtract(i.default.ONE)
                              .gcd(s.ee)
                              .compareTo(i.default.ONE) ||
                            !s.p.isProbablePrime(10);

                      );
                      for (
                        ;
                        (s.q = new i.default(u, 1, o)),
                          0 !==
                            s.q
                              .subtract(i.default.ONE)
                              .gcd(s.ee)
                              .compareTo(i.default.ONE) ||
                            !s.q.isProbablePrime(10);

                      );
                      if (s.p.compareTo(s.q) <= 0) {
                        var f = s.p;
                        (s.p = s.q), (s.q = f);
                      }
                      var h = s.p.subtract(i.default.ONE),
                        l = s.q.subtract(i.default.ONE),
                        c = h.multiply(l);
                      if (0 === c.gcd(s.ee).compareTo(i.default.ONE)) {
                        (s.n = s.p.multiply(s.q)),
                          (s.d = s.ee.modInverse(c)),
                          (s.dmp1 = s.d.mod(h)),
                          (s.dmq1 = s.d.mod(l)),
                          (s.u = s.p.modInverse(s.q));
                        break;
                      }
                    }
                    n(s);
                  });
                }),
                (this.keyObject = e);
            });
          var i = n(e("./jsbn.js")),
            s = n(e("../../util.js")),
            a = n(e("../random.js")),
            o = n(e("../../config")),
            u = i.default.ZERO,
            f = i.default.ZERO;
        },
        {
          "../../config": 10,
          "../../util.js": 70,
          "../random.js": 31,
          "./jsbn.js": 29,
        },
      ],
      31: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.buffer = null), (this.size = null);
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            a = n(e("../type/mpi.js")),
            o = n(e("../util.js")),
            u = o.default.detectNode() && e("crypto");
          (r.default = {
            getRandomBytes: function (e) {
              for (var t = new Uint8Array(e), r = 0; r < e; r++)
                t[r] = this.getSecureRandomOctet();
              return t;
            },
            getSecureRandom: function (e, t) {
              for (
                var r = this.getSecureRandomUint(),
                  n = (t - e).toString(2).length;
                (r & (Math.pow(2, n) - 1)) > t - e;

              )
                r = this.getSecureRandomUint();
              return e + Math.abs(r & (Math.pow(2, n) - 1));
            },
            getSecureRandomOctet: function () {
              var e = new Uint8Array(1);
              return this.getRandomValues(e), e[0];
            },
            getSecureRandomUint: function () {
              var e = new Uint8Array(4),
                t = new DataView(e.buffer);
              return this.getRandomValues(e), t.getUint32(0);
            },
            getRandomValues: function (e) {
              if (!(e instanceof Uint8Array))
                throw new Error("Invalid type: buf not an Uint8Array");
              if (
                "undefined" != typeof window &&
                window.crypto &&
                window.crypto.getRandomValues
              )
                window.crypto.getRandomValues(e);
              else if (
                "undefined" != typeof window &&
                "object" === s(window.msCrypto) &&
                "function" == typeof window.msCrypto.getRandomValues
              )
                window.msCrypto.getRandomValues(e);
              else if (u) {
                var t = u.randomBytes(e.length);
                e.set(t);
              } else {
                if (!this.randomBuffer.buffer)
                  throw new Error(
                    "No secure random number generator available.",
                  );
                this.randomBuffer.get(e);
              }
              return e;
            },
            getRandomBigInteger: function (e) {
              if (e < 1) throw new Error("Illegal parameter value: bits < 1");
              var t = Math.floor((e + 7) / 8),
                r = o.default.Uint8Array2str(this.getRandomBytes(t));
              e % 8 > 0 &&
                (r =
                  String.fromCharCode(
                    (Math.pow(2, e % 8) - 1) & r.charCodeAt(0),
                  ) + r.substring(1));
              var n = new a.default();
              return n.fromBytes(r), n.toBigInteger();
            },
            getRandomBigIntegerInRange: function (e, t) {
              if (t.compareTo(e) <= 0)
                throw new Error("Illegal parameter value: max <= min");
              for (
                var r = t.subtract(e),
                  n = this.getRandomBigInteger(r.bitLength());
                n.compareTo(r) > 0;

              )
                n = this.getRandomBigInteger(r.bitLength());
              return e.add(n);
            },
            randomBuffer: new i(),
          }),
            (i.prototype.init = function (e) {
              (this.buffer = new Uint8Array(e)), (this.size = 0);
            }),
            (i.prototype.set = function (e) {
              if (!this.buffer)
                throw new Error("RandomBuffer is not initialized");
              if (!(e instanceof Uint8Array))
                throw new Error("Invalid type: buf not an Uint8Array");
              var t = this.buffer.length - this.size;
              e.length > t && (e = e.subarray(0, t)),
                this.buffer.set(e, this.size),
                (this.size += e.length);
            }),
            (i.prototype.get = function (e) {
              if (!this.buffer)
                throw new Error("RandomBuffer is not initialized");
              if (!(e instanceof Uint8Array))
                throw new Error("Invalid type: buf not an Uint8Array");
              if (this.size < e.length)
                throw new Error("Random number buffer depleted");
              for (var t = 0; t < e.length; t++)
                (e[t] = this.buffer[--this.size]), (this.buffer[this.size] = 0);
            });
        },
        { "../type/mpi.js": 68, "../util.js": 70, crypto: "crypto" },
      ],
      32: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var i = n(e("../util")),
            s = n(e("./public_key")),
            a = n(e("./pkcs1.js"));
          r.default = {
            verify: function (e, t, r, n, o) {
              var u;
              switch (((o = i.default.Uint8Array2str(o)), e)) {
                case 1:
                case 2:
                case 3:
                  var f = new s.default.rsa(),
                    h = n[0].toBigInteger(),
                    l = n[0].byteLength(),
                    c = n[1].toBigInteger();
                  u = r[0].toBigInteger();
                  var d = f.verify(u, c, h),
                    p = a.default.emsa.encode(t, o, l);
                  return 0 === d.compareTo(p);
                case 16:
                  throw new Error(
                    "signing with Elgamal is not defined in the OpenPGP standard.",
                  );
                case 17:
                  var y = new s.default.dsa(),
                    g = r[0].toBigInteger(),
                    m = r[1].toBigInteger(),
                    v = n[0].toBigInteger(),
                    w = n[1].toBigInteger(),
                    b = n[2].toBigInteger(),
                    k = n[3].toBigInteger();
                  u = o;
                  return 0 === y.verify(t, g, m, u, v, w, b, k).compareTo(g);
                default:
                  throw new Error("Invalid signature algorithm.");
              }
            },
            sign: function (e, t, r, n) {
              n = i.default.Uint8Array2str(n);
              var o;
              switch (t) {
                case 1:
                case 2:
                case 3:
                  var u = new s.default.rsa(),
                    f = r[2].toBigInteger(),
                    h = r[0].toBigInteger();
                  return (
                    (o = a.default.emsa.encode(e, n, r[0].byteLength())),
                    i.default.str2Uint8Array(u.sign(o, f, h).toMPI())
                  );
                case 17:
                  var l = new s.default.dsa(),
                    c = r[0].toBigInteger(),
                    d = r[1].toBigInteger(),
                    p = r[2].toBigInteger(),
                    y = r[4].toBigInteger();
                  o = n;
                  var g = l.sign(e, o, p, c, d, y);
                  return i.default.str2Uint8Array(
                    g[0].toString() + g[1].toString(),
                  );
                case 16:
                  throw new Error(
                    "Signing with Elgamal is not defined in the OpenPGP standard.",
                  );
                default:
                  throw new Error("Invalid signature algorithm.");
              }
            },
          };
        },
        { "../util": 70, "./pkcs1.js": 25, "./public_key": 28 },
      ],
      33: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            var e = "";
            return (
              l.default.show_version &&
                (e += "Version: " + l.default.versionstring + "\r\n"),
              l.default.show_comment &&
                (e += "Comment: " + l.default.commentstring + "\r\n"),
              (e += "\r\n")
            );
          }
          function s(e) {
            var t = (function (e) {
                for (var t = 11994318, r = 0; r < e.length; r++)
                  t = (t << 8) ^ c[255 & ((t >> 16) ^ e[r])];
                return 16777215 & t;
              })(e),
              r = new Uint8Array([t >> 16, (t >> 8) & 255, 255 & t]);
            return f.default.encode(r);
          }
          function a(e) {
            var t = "",
              r = e,
              n = /^[ \f\r\t\u00a0\u2000-\u200a\u202f\u205f\u3000]*\n/m.exec(e);
            if (null === n)
              throw new Error(
                "Mandatory blank line missing between armor headers and armor data",
              );
            return (
              (t = e.slice(0, n.index)),
              (r = e.slice(n.index + n[0].length)),
              (t = t.split("\n")).pop(),
              { headers: t, body: r }
            );
          }
          function o(e) {
            for (var t = 0; t < e.length; t++) {
              if (!/^([^\s:]|[^\s:][^:]*[^\s:]): .+$/.test(e[t]))
                throw new Error("Improperly formatted armor header: " + e[t]);
              l.default.debug &&
                !/^(Version|Comment|MessageID|Hash|Charset): .+$/.test(e[t]) &&
                console.log("Unknown header: " + e[t]);
            }
          }
          function u(e) {
            var t = (e = e.trim()),
              r = "",
              n = e.lastIndexOf("=");
            return (
              n >= 0 &&
                n !== e.length - 1 &&
                ((t = e.slice(0, n)), (r = e.slice(n + 1).substr(0, 4))),
              { body: t, checksum: r }
            );
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var f = n(e("./base64.js")),
            h = n(e("../enums.js")),
            l = n(e("../config")),
            c = [
              0, 8801531, 25875725, 17603062, 60024545, 51751450, 35206124,
              44007191, 128024889, 120049090, 103502900, 112007375, 70412248,
              78916387, 95990485, 88014382, 264588937, 256049778, 240098180,
              248108927, 207005800, 215016595, 232553829, 224014750, 140824496,
              149062475, 166599357, 157832774, 200747345, 191980970, 176028764,
              184266919, 520933865, 529177874, 512099556, 503334943, 480196360,
              471432179, 487973381, 496217854, 414011600, 405478443, 422020573,
              430033190, 457094705, 465107658, 448029500, 439496647, 281648992,
              273666971, 289622637, 298124950, 324696449, 333198714, 315665548,
              307683447, 392699481, 401494690, 383961940, 375687087, 352057528,
              343782467, 359738805, 368533838, 1041867730, 1050668841,
              1066628831, 1058355748, 1032471859, 1024199112, 1006669886,
              1015471301, 968368875, 960392720, 942864358, 951368477, 975946762,
              984451313, 1000411399, 992435708, 836562267, 828023200, 810956886,
              818967725, 844041146, 852051777, 868605623, 860066380, 914189410,
              922427545, 938981743, 930215316, 904825475, 896059e3, 878993294,
              887231349, 555053627, 563297984, 547333942, 538569677, 579245274,
              570480673, 588005847, 596249900, 649392898, 640860153, 658384399,
              666397428, 623318499, 631331096, 615366894, 606833685, 785398962,
              777416777, 794487231, 802989380, 759421523, 767923880, 751374174,
              743392165, 695319947, 704115056, 687564934, 679289981, 719477610,
              711202705, 728272487, 737067676, 2083735460, 2092239711,
              2109313705, 2101337682, 2141233477, 2133257662, 2116711496,
              2125215923, 2073216669, 2064943718, 2048398224, 2057199467,
              2013339772, 2022141063, 2039215473, 2030942602, 1945504045,
              1936737750, 1920785440, 1929023707, 1885728716, 1893966647,
              1911503553, 1902736954, 1951893524, 1959904495, 1977441561,
              1968902626, 2009362165, 2000822798, 1984871416, 1992881923,
              1665111629, 1673124534, 1656046400, 1647513531, 1621913772,
              1613380695, 1629922721, 1637935450, 1688082292, 1679317903,
              1695859321, 1704103554, 1728967061, 1737211246, 1720132760,
              1711368291, 1828378820, 1820103743, 1836060105, 1844855090,
              1869168165, 1877963486, 1860430632, 1852155859, 1801148925,
              1809650950, 1792118e3, 1784135691, 1757986588, 1750004711,
              1765960209, 1774462698, 1110107254, 1118611597, 1134571899,
              1126595968, 1102643863, 1094667884, 1077139354, 1085643617,
              1166763343, 1158490548, 1140961346, 1149762745, 1176011694,
              1184812885, 1200772771, 1192499800, 1307552511, 1298785796,
              1281720306, 1289958153, 1316768798, 1325007077, 1341561107,
              1332794856, 1246636998, 1254647613, 1271201483, 1262662192,
              1239272743, 1230733788, 1213667370, 1221678289, 1562785183,
              1570797924, 1554833554, 1546300521, 1588974462, 1580441477,
              1597965939, 1605978760, 1518843046, 1510078557, 1527603627,
              1535847760, 1494504007, 1502748348, 1486784330, 1478020017,
              1390639894, 1382365165, 1399434779, 1408230112, 1366334967,
              1375129868, 1358579962, 1350304769, 1430452783, 1438955220,
              1422405410, 1414423513, 1456544974, 1448562741, 1465633219,
              1474135352,
            ];
          r.default = {
            encode: function (e, t, r, n) {
              var a = [];
              switch (e) {
                case h.default.armor.multipart_section:
                  a.push(
                    "-----BEGIN PGP MESSAGE, PART " + r + "/" + n + "-----\r\n",
                  ),
                    a.push(i()),
                    a.push(f.default.encode(t)),
                    a.push("\r\n=" + s(t) + "\r\n"),
                    a.push(
                      "-----END PGP MESSAGE, PART " + r + "/" + n + "-----\r\n",
                    );
                  break;
                case h.default.armor.multipart_last:
                  a.push("-----BEGIN PGP MESSAGE, PART " + r + "-----\r\n"),
                    a.push(i()),
                    a.push(f.default.encode(t)),
                    a.push("\r\n=" + s(t) + "\r\n"),
                    a.push("-----END PGP MESSAGE, PART " + r + "-----\r\n");
                  break;
                case h.default.armor.signed:
                  a.push("\r\n-----BEGIN PGP SIGNED MESSAGE-----\r\n"),
                    a.push("Hash: " + t.hash + "\r\n\r\n"),
                    a.push(t.text.replace(/\n-/g, "\n- -")),
                    a.push("\r\n-----BEGIN PGP SIGNATURE-----\r\n"),
                    a.push(i()),
                    a.push(f.default.encode(t.data)),
                    a.push("\r\n=" + s(t.data) + "\r\n"),
                    a.push("-----END PGP SIGNATURE-----\r\n");
                  break;
                case h.default.armor.message:
                  a.push("-----BEGIN PGP MESSAGE-----\r\n"),
                    a.push(i()),
                    a.push(f.default.encode(t)),
                    a.push("\r\n=" + s(t) + "\r\n"),
                    a.push("-----END PGP MESSAGE-----\r\n");
                  break;
                case h.default.armor.public_key:
                  a.push("-----BEGIN PGP PUBLIC KEY BLOCK-----\r\n"),
                    a.push(i()),
                    a.push(f.default.encode(t)),
                    a.push("\r\n=" + s(t) + "\r\n"),
                    a.push("-----END PGP PUBLIC KEY BLOCK-----\r\n\r\n");
                  break;
                case h.default.armor.private_key:
                  a.push("-----BEGIN PGP PRIVATE KEY BLOCK-----\r\n"),
                    a.push(i()),
                    a.push(f.default.encode(t)),
                    a.push("\r\n=" + s(t) + "\r\n"),
                    a.push("-----END PGP PRIVATE KEY BLOCK-----\r\n");
                  break;
                case h.default.armor.signature:
                  a.push("-----BEGIN PGP SIGNATURE-----\r\n"),
                    a.push(i()),
                    a.push(f.default.encode(t)),
                    a.push("\r\n=" + s(t) + "\r\n"),
                    a.push("-----END PGP SIGNATURE-----\r\n");
              }
              return a.join("");
            },
            decode: function (e) {
              var t,
                r,
                n,
                i = /^-----[^-]+-----$\n/m,
                c = (function (t) {
                  var r = (e = e.replace(/[\t\r ]+\n/g, "\n")).match(
                    /^-----BEGIN PGP (MESSAGE, PART \d+\/\d+|MESSAGE, PART \d+|SIGNED MESSAGE|MESSAGE|PUBLIC KEY BLOCK|PRIVATE KEY BLOCK|SIGNATURE)-----$\n/m,
                  );
                  if (!r) throw new Error("Unknown ASCII armor type");
                  return /MESSAGE, PART \d+\/\d+/.test(r[1])
                    ? h.default.armor.multipart_section
                    : /MESSAGE, PART \d+/.test(r[1])
                    ? h.default.armor.multipart_last
                    : /SIGNED MESSAGE/.test(r[1])
                    ? h.default.armor.signed
                    : /MESSAGE/.test(r[1])
                    ? h.default.armor.message
                    : /PUBLIC KEY BLOCK/.test(r[1])
                    ? h.default.armor.public_key
                    : /PRIVATE KEY BLOCK/.test(r[1])
                    ? h.default.armor.private_key
                    : /SIGNATURE/.test(r[1])
                    ? h.default.armor.signature
                    : void 0;
                })(),
                d = (e = e.trim() + "\n").split(i),
                p = 1;
              if ((e.search(i) !== d[0].length && (p = 0), 2 !== c)) {
                var y = u((n = a(d[p])).body);
                (t = {
                  data: f.default.decode(y.body),
                  headers: n.headers,
                  type: c,
                }),
                  (r = y.checksum);
              } else {
                n = a(d[p].replace(/^- /gm, ""));
                var g = a(d[p + 1].replace(/^- /gm, ""));
                o(g.headers);
                var m = u(g.body);
                (t = {
                  text: n.body.replace(/\n$/, "").replace(/\n/g, "\r\n"),
                  data: f.default.decode(m.body),
                  headers: n.headers,
                  type: c,
                }),
                  (r = m.checksum);
              }
              if (
                !(function (e, t) {
                  var r = s(e),
                    n = t;
                  return (
                    r[0] === n[0] &&
                    r[1] === n[1] &&
                    r[2] === n[2] &&
                    r[3] === n[3]
                  );
                })(t.data, r) &&
                (r || l.default.checksum_required)
              )
                throw new Error(
                  "Ascii armor integrity check on message failed: '" +
                    r +
                    "' should be '" +
                    s(t.data) +
                    "'",
                );
              return o(t.headers), t;
            },
          };
        },
        { "../config": 10, "../enums.js": 35, "./base64.js": 34 },
      ],
      34: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          r.default = {
            encode: function (e, t) {
              var r,
                i,
                s,
                a = t || [],
                o = 0,
                u = 0,
                f = e.length;
              for (s = 0; s < f; s++)
                (i = e[s]),
                  0 === u
                    ? (a.push(n.charAt((i >> 2) & 63)), (r = (3 & i) << 4))
                    : 1 === u
                    ? (a.push(n.charAt(r | ((i >> 4) & 15))),
                      (r = (15 & i) << 2))
                    : 2 === u &&
                      (a.push(n.charAt(r | ((i >> 6) & 3))),
                      (o += 1) % 60 == 0 && a.push("\n"),
                      a.push(n.charAt(63 & i))),
                  (o += 1) % 60 == 0 && a.push("\n"),
                  3 === (u += 1) && (u = 0);
              if (
                (u > 0 &&
                  (a.push(n.charAt(r)),
                  (o += 1) % 60 == 0 && a.push("\n"),
                  a.push("="),
                  (o += 1)),
                1 === u && (o % 60 == 0 && a.push("\n"), a.push("=")),
                !t)
              )
                return a.join("");
            },
            decode: function (e) {
              var t,
                r,
                i = [],
                s = 0,
                a = 0,
                o = e.length;
              for (r = 0; r < o; r++)
                (t = n.indexOf(e.charAt(r))) >= 0 &&
                  (s && i.push(a | ((t >> (6 - s)) & 255)),
                  (a = (t << (s = (s + 2) & 7)) & 255));
              return new Uint8Array(i);
            },
          };
        },
        {},
      ],
      35: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = {
              s2k: { simple: 0, salted: 1, iterated: 3, gnu: 101 },
              publicKey: {
                rsa_encrypt_sign: 1,
                rsa_encrypt: 2,
                rsa_sign: 3,
                elgamal: 16,
                dsa: 17,
              },
              symmetric: {
                plaintext: 0,
                idea: 1,
                tripledes: 2,
                cast5: 3,
                blowfish: 4,
                aes128: 7,
                aes192: 8,
                aes256: 9,
                twofish: 10,
              },
              compression: { uncompressed: 0, zip: 1, zlib: 2, bzip2: 3 },
              hash: {
                md5: 1,
                sha1: 2,
                ripemd: 3,
                sha256: 8,
                sha384: 9,
                sha512: 10,
                sha224: 11,
              },
              packet: {
                publicKeyEncryptedSessionKey: 1,
                signature: 2,
                symEncryptedSessionKey: 3,
                onePassSignature: 4,
                secretKey: 5,
                publicKey: 6,
                secretSubkey: 7,
                compressed: 8,
                symmetricallyEncrypted: 9,
                marker: 10,
                literal: 11,
                trust: 12,
                userid: 13,
                publicSubkey: 14,
                userAttribute: 17,
                symEncryptedIntegrityProtected: 18,
                modificationDetectionCode: 19,
                symEncryptedAEADProtected: 20,
              },
              literal: {
                binary: "b".charCodeAt(),
                text: "t".charCodeAt(),
                utf8: "u".charCodeAt(),
              },
              signature: {
                binary: 0,
                text: 1,
                standalone: 2,
                cert_generic: 16,
                cert_persona: 17,
                cert_casual: 18,
                cert_positive: 19,
                cert_revocation: 48,
                subkey_binding: 24,
                key_binding: 25,
                key: 31,
                key_revocation: 32,
                subkey_revocation: 40,
                timestamp: 64,
                third_party: 80,
              },
              signatureSubpacket: {
                signature_creation_time: 2,
                signature_expiration_time: 3,
                exportable_certification: 4,
                trust_signature: 5,
                regular_expression: 6,
                revocable: 7,
                key_expiration_time: 9,
                placeholder_backwards_compatibility: 10,
                preferred_symmetric_algorithms: 11,
                revocation_key: 12,
                issuer: 16,
                notation_data: 20,
                preferred_hash_algorithms: 21,
                preferred_compression_algorithms: 22,
                key_server_preferences: 23,
                preferred_key_server: 24,
                primary_user_id: 25,
                policy_uri: 26,
                key_flags: 27,
                signers_user_id: 28,
                reason_for_revocation: 29,
                features: 30,
                signature_target: 31,
                embedded_signature: 32,
              },
              keyFlags: {
                certify_keys: 1,
                sign_data: 2,
                encrypt_communication: 4,
                encrypt_storage: 8,
                split_private_key: 16,
                authentication: 32,
                shared_private_key: 128,
              },
              keyStatus: {
                invalid: 0,
                expired: 1,
                revoked: 2,
                valid: 3,
                no_self_cert: 4,
              },
              armor: {
                multipart_section: 0,
                multipart_last: 1,
                signed: 2,
                message: 3,
                public_key: 4,
                private_key: 5,
                signature: 6,
              },
              write: function (e, t) {
                if (
                  ("number" == typeof t && (t = this.read(e, t)),
                  void 0 !== e[t])
                )
                  return e[t];
                throw new Error("Invalid enum value.");
              },
              read: function (e, t) {
                for (var r in e) if (e[r] === parseInt(t)) return r;
                throw new Error("Invalid enum value.");
              },
            });
        },
        {},
      ],
      36: [
        function (e, t, r) {
          "use strict";
          function n(t) {
            (this._baseUrl = t || i.default.keyserver),
              (this._fetch =
                "undefined" != typeof window ? window.fetch : e("node-fetch"));
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = n);
          var i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(e("./config"));
          (n.prototype.lookup = function (e) {
            var t = this._baseUrl + "/pks/lookup?op=get&options=mr&search=",
              r = this._fetch;
            if (e.keyId) t += "0x" + encodeURIComponent(e.keyId);
            else {
              if (!e.query)
                throw new Error("You must provide a query parameter!");
              t += encodeURIComponent(e.query);
            }
            return r(t)
              .then(function (e) {
                if (200 === e.status) return e.text();
              })
              .then(function (e) {
                if (e && !(e.indexOf("-----END PGP PUBLIC KEY BLOCK-----") < 0))
                  return e.trim();
              });
          }),
            (n.prototype.upload = function (e) {
              var t = this._baseUrl + "/pks/add";
              return (0, this._fetch)(t, {
                method: "post",
                headers: {
                  "Content-Type":
                    "application/x-www-form-urlencoded; charset=UTF-8",
                },
                body: "keytext=" + encodeURIComponent(e),
              });
            });
        },
        { "./config": 10, "node-fetch": "node-fetch" },
      ],
      37: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          }
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.HKP =
              r.AsyncProxy =
              r.Keyring =
              r.crypto =
              r.config =
              r.enums =
              r.armor =
              r.Keyid =
              r.S2K =
              r.MPI =
              r.packet =
              r.util =
              r.cleartext =
              r.message =
              r.signature =
              r.key =
                void 0);
          var s = e("./openpgp");
          Object.keys(s).forEach(function (e) {
            "default" !== e &&
              "__esModule" !== e &&
              Object.defineProperty(r, e, {
                enumerable: !0,
                get: function () {
                  return s[e];
                },
              });
          });
          var a = e("./util");
          Object.defineProperty(r, "util", {
            enumerable: !0,
            get: function () {
              return i(a).default;
            },
          });
          var o = e("./packet");
          Object.defineProperty(r, "packet", {
            enumerable: !0,
            get: function () {
              return i(o).default;
            },
          });
          var u = e("./type/mpi");
          Object.defineProperty(r, "MPI", {
            enumerable: !0,
            get: function () {
              return i(u).default;
            },
          });
          var f = e("./type/s2k");
          Object.defineProperty(r, "S2K", {
            enumerable: !0,
            get: function () {
              return i(f).default;
            },
          });
          var h = e("./type/keyid");
          Object.defineProperty(r, "Keyid", {
            enumerable: !0,
            get: function () {
              return i(h).default;
            },
          });
          var l = e("./encoding/armor");
          Object.defineProperty(r, "armor", {
            enumerable: !0,
            get: function () {
              return i(l).default;
            },
          });
          var c = e("./enums");
          Object.defineProperty(r, "enums", {
            enumerable: !0,
            get: function () {
              return i(c).default;
            },
          });
          var d = e("./config/config");
          Object.defineProperty(r, "config", {
            enumerable: !0,
            get: function () {
              return i(d).default;
            },
          });
          var p = e("./crypto");
          Object.defineProperty(r, "crypto", {
            enumerable: !0,
            get: function () {
              return i(p).default;
            },
          });
          var y = e("./keyring");
          Object.defineProperty(r, "Keyring", {
            enumerable: !0,
            get: function () {
              return i(y).default;
            },
          });
          var g = e("./worker/async_proxy");
          Object.defineProperty(r, "AsyncProxy", {
            enumerable: !0,
            get: function () {
              return i(g).default;
            },
          });
          var m = e("./hkp");
          Object.defineProperty(r, "HKP", {
            enumerable: !0,
            get: function () {
              return i(m).default;
            },
          });
          var v = n(s),
            w = n(e("./key")),
            b = n(e("./signature")),
            k = n(e("./message")),
            A = n(e("./cleartext"));
          r.default = v;
          (r.key = w), (r.signature = b), (r.message = k), (r.cleartext = A);
        },
        {
          "./cleartext": 5,
          "./config/config": 9,
          "./crypto": 24,
          "./encoding/armor": 33,
          "./enums": 35,
          "./hkp": 36,
          "./key": 38,
          "./keyring": 39,
          "./message": 42,
          "./openpgp": 43,
          "./packet": 47,
          "./signature": 66,
          "./type/keyid": 67,
          "./type/mpi": 68,
          "./type/s2k": 69,
          "./util": 70,
          "./worker/async_proxy": 71,
        },
      ],
      38: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i(e) {
            if (!(this instanceof i)) return new i(e);
            if (
              ((this.primaryKey = null),
              (this.revocationSignature = null),
              (this.directSignatures = null),
              (this.users = null),
              (this.subKeys = null),
              this.packetlist2structure(e),
              !this.primaryKey || !this.users)
            )
              throw new Error(
                "Invalid key: need at least key and user ID packet",
              );
          }
          function s(e, t) {
            return (
              e.algorithm !==
                p.default.read(p.default.publicKey, p.default.publicKey.dsa) &&
              e.algorithm !==
                p.default.read(
                  p.default.publicKey,
                  p.default.publicKey.rsa_sign,
                ) &&
              (!t.keyFlags ||
                0 !=
                  (t.keyFlags[0] & p.default.keyFlags.encrypt_communication) ||
                0 != (t.keyFlags[0] & p.default.keyFlags.encrypt_storage))
            );
          }
          function a(e, t) {
            return !(
              (e.algorithm !==
                p.default.read(p.default.publicKey, p.default.publicKey.dsa) &&
                e.algorithm !==
                  p.default.read(
                    p.default.publicKey,
                    p.default.publicKey.rsa_sign,
                  ) &&
                e.algorithm !==
                  p.default.read(
                    p.default.publicKey,
                    p.default.publicKey.rsa_encrypt_sign,
                  )) ||
              (t.keyFlags &&
                0 == (t.keyFlags[0] & p.default.keyFlags.sign_data))
            );
          }
          function o(e, t) {
            return 3 === e.version && 0 !== e.expirationTimeV3
              ? new Date(
                  e.created.getTime() + 24 * e.expirationTimeV3 * 3600 * 1e3,
                )
              : 4 === e.version && !1 === t.keyNeverExpires
              ? new Date(e.created.getTime() + 1e3 * t.keyExpirationTime)
              : null;
          }
          function u(e, t, r, n) {
            (e = e[r]) &&
              (t[r]
                ? e.forEach(function (e) {
                    e.isExpired() ||
                      (n && !n(e)) ||
                      t[r].some(function (t) {
                        return m.default.equalsUint8Array(
                          t.signature,
                          e.signature,
                        );
                      }) ||
                      t[r].push(e);
                  })
                : (t[r] = e));
          }
          function f(e) {
            if (!(this instanceof f)) return new f(e);
            (this.userId = e.tag === p.default.packet.userid ? e : null),
              (this.userAttribute =
                e.tag === p.default.packet.userAttribute ? e : null),
              (this.selfCertifications = null),
              (this.otherCertifications = null),
              (this.revocationCertifications = null);
          }
          function h(e) {
            if (!(this instanceof h)) return new h(e);
            (this.subKey = e),
              (this.bindingSignatures = []),
              (this.revocationSignature = null);
          }
          function l(e) {
            var t = {};
            t.keys = [];
            try {
              var r = new d.default.List();
              r.read(e);
              var n = r.indexOfTag(
                p.default.packet.publicKey,
                p.default.packet.secretKey,
              );
              if (0 === n.length) throw new Error("No key packet found");
              for (var s = 0; s < n.length; s++) {
                var a = r.slice(n[s], n[s + 1]);
                try {
                  var o = new i(a);
                  t.keys.push(o);
                } catch (e) {
                  (t.err = t.err || []), t.err.push(e);
                }
              }
            } catch (e) {
              (t.err = t.err || []), t.err.push(e);
            }
            return t;
          }
          function c(e, t, r) {
            r.passphrase && (e.encrypt(r.passphrase), t.encrypt(r.passphrase));
            var n = new d.default.List();
            n.push(e),
              r.userIds.forEach(function (t, i) {
                var s = new d.default.Userid();
                s.read(m.default.str2Uint8Array(t));
                var a = {};
                (a.userid = s), (a.key = e);
                var o = new d.default.Signature();
                (o.signatureType = p.default.signature.cert_generic),
                  (o.publicKeyAlgorithm = r.keyType),
                  (o.hashAlgorithm = g.default.prefer_hash_algorithm),
                  (o.keyFlags = [
                    p.default.keyFlags.certify_keys |
                      p.default.keyFlags.sign_data,
                  ]),
                  (o.preferredSymmetricAlgorithms = []),
                  o.preferredSymmetricAlgorithms.push(
                    p.default.symmetric.aes256,
                  ),
                  o.preferredSymmetricAlgorithms.push(
                    p.default.symmetric.aes128,
                  ),
                  o.preferredSymmetricAlgorithms.push(
                    p.default.symmetric.aes192,
                  ),
                  o.preferredSymmetricAlgorithms.push(
                    p.default.symmetric.cast5,
                  ),
                  o.preferredSymmetricAlgorithms.push(
                    p.default.symmetric.tripledes,
                  ),
                  (o.preferredHashAlgorithms = []),
                  o.preferredHashAlgorithms.push(p.default.hash.sha256),
                  o.preferredHashAlgorithms.push(p.default.hash.sha512),
                  o.preferredHashAlgorithms.push(p.default.hash.sha1),
                  (o.preferredCompressionAlgorithms = []),
                  o.preferredCompressionAlgorithms.push(
                    p.default.compression.zlib,
                  ),
                  o.preferredCompressionAlgorithms.push(
                    p.default.compression.zip,
                  ),
                  0 === i && (o.isPrimaryUserID = !0),
                  g.default.integrity_protect &&
                    ((o.features = []), o.features.push(1)),
                  r.keyExpirationTime > 0 &&
                    ((o.keyExpirationTime = r.keyExpirationTime),
                    (o.keyNeverExpires = !1)),
                  o.sign(e, a),
                  n.push(s),
                  n.push(o);
              });
            var s = {};
            (s.key = e), (s.bind = t);
            var a = new d.default.Signature();
            return (
              (a.signatureType = p.default.signature.subkey_binding),
              (a.publicKeyAlgorithm = r.keyType),
              (a.hashAlgorithm = g.default.prefer_hash_algorithm),
              (a.keyFlags = [
                p.default.keyFlags.encrypt_communication |
                  p.default.keyFlags.encrypt_storage,
              ]),
              r.keyExpirationTime > 0 &&
                ((a.keyExpirationTime = r.keyExpirationTime),
                (a.keyNeverExpires = !1)),
              a.sign(e, s),
              n.push(t),
              n.push(a),
              r.unlocked || (e.clearPrivateMPIs(), t.clearPrivateMPIs()),
              new i(n)
            );
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.Key = i),
            (r.read = l),
            (r.readArmored = function (e) {
              try {
                var t = y.default.decode(e);
                if (
                  t.type !== p.default.armor.public_key &&
                  t.type !== p.default.armor.private_key
                )
                  throw new Error("Armored text not of type key");
                return l(t.data);
              } catch (e) {
                var r = { keys: [], err: [] };
                return r.err.push(e), r;
              }
            }),
            (r.generate = function (e) {
              var t, r;
              return Promise.resolve().then(function () {
                if (
                  ((e.keyType =
                    e.keyType || p.default.publicKey.rsa_encrypt_sign),
                  e.keyType !== p.default.publicKey.rsa_encrypt_sign)
                )
                  throw new Error("Only RSA Encrypt or Sign supported");
                return (
                  e.passphrase || (e.unlocked = !0),
                  (String.prototype.isPrototypeOf(e.userIds) ||
                    "string" == typeof e.userIds) &&
                    (e.userIds = [e.userIds]),
                  Promise.all([
                    ((t = new d.default.SecretKey()),
                    (t.algorithm = p.default.read(
                      p.default.publicKey,
                      e.keyType,
                    )),
                    t.generate(e.numBits)),
                    ((r = new d.default.SecretSubkey()),
                    (r.algorithm = p.default.read(
                      p.default.publicKey,
                      e.keyType,
                    )),
                    r.generate(e.numBits)),
                  ]).then(function () {
                    return c(t, r, e);
                  })
                );
              });
            }),
            (r.reformat = function (e) {
              var t, r;
              return Promise.resolve().then(function () {
                if (
                  ((e.keyType =
                    e.keyType || p.default.publicKey.rsa_encrypt_sign),
                  e.keyType !== p.default.publicKey.rsa_encrypt_sign)
                )
                  throw new Error("Only RSA Encrypt or Sign supported");
                if (!e.privateKey.decrypt())
                  throw new Error("Key not decrypted");
                e.passphrase || (e.unlocked = !0),
                  (String.prototype.isPrototypeOf(e.userIds) ||
                    "string" == typeof e.userIds) &&
                    (e.userIds = [e.userIds]);
                for (
                  var n = e.privateKey.toPacketlist(), i = 0;
                  i < n.length;
                  i++
                )
                  n[i].tag === p.default.packet.secretKey
                    ? (t = n[i])
                    : n[i].tag === p.default.packet.secretSubkey && (r = n[i]);
                return c(t, r, e);
              });
            }),
            (r.getPreferredSymAlgo = function (e) {
              var t = {};
              e.forEach(function (e) {
                var r = e.getPrimaryUser();
                if (!r || !r.selfCertificate.preferredSymmetricAlgorithms)
                  return g.default.encryption_cipher;
                r.selfCertificate.preferredSymmetricAlgorithms.forEach(
                  function (e, r) {
                    var n = t[e] || (t[e] = { prio: 0, count: 0, algo: e });
                    (n.prio += 64 >> r), n.count++;
                  },
                );
              });
              var r = { prio: 0, algo: g.default.encryption_cipher };
              for (var n in t)
                try {
                  n !== p.default.symmetric.plaintext &&
                    n !== p.default.symmetric.idea &&
                    p.default.read(p.default.symmetric, n) &&
                    t[n].count === e.length &&
                    t[n].prio > r.prio &&
                    (r = t[n]);
                } catch (e) {}
              return r.algo;
            });
          var d = n(e("./packet")),
            p = n(e("./enums.js")),
            y = n(e("./encoding/armor.js")),
            g = n(e("./config")),
            m = n(e("./util"));
          (i.prototype.packetlist2structure = function (e) {
            for (var t, r, n, i = 0; i < e.length; i++)
              switch (e[i].tag) {
                case p.default.packet.publicKey:
                case p.default.packet.secretKey:
                  (this.primaryKey = e[i]), (r = this.primaryKey.getKeyId());
                  break;
                case p.default.packet.userid:
                case p.default.packet.userAttribute:
                  (t = new f(e[i])),
                    this.users || (this.users = []),
                    this.users.push(t);
                  break;
                case p.default.packet.publicSubkey:
                case p.default.packet.secretSubkey:
                  (t = null),
                    this.subKeys || (this.subKeys = []),
                    (n = new h(e[i])),
                    this.subKeys.push(n);
                  break;
                case p.default.packet.signature:
                  switch (e[i].signatureType) {
                    case p.default.signature.cert_generic:
                    case p.default.signature.cert_persona:
                    case p.default.signature.cert_casual:
                    case p.default.signature.cert_positive:
                      if (!t) {
                        m.default.print_debug(
                          "Dropping certification signatures without preceding user packet",
                        );
                        continue;
                      }
                      e[i].issuerKeyId.equals(r)
                        ? (t.selfCertifications || (t.selfCertifications = []),
                          t.selfCertifications.push(e[i]))
                        : (t.otherCertifications ||
                            (t.otherCertifications = []),
                          t.otherCertifications.push(e[i]));
                      break;
                    case p.default.signature.cert_revocation:
                      t
                        ? (t.revocationCertifications ||
                            (t.revocationCertifications = []),
                          t.revocationCertifications.push(e[i]))
                        : (this.directSignatures ||
                            (this.directSignatures = []),
                          this.directSignatures.push(e[i]));
                      break;
                    case p.default.signature.key:
                      this.directSignatures || (this.directSignatures = []),
                        this.directSignatures.push(e[i]);
                      break;
                    case p.default.signature.subkey_binding:
                      if (!n) {
                        m.default.print_debug(
                          "Dropping subkey binding signature without preceding subkey packet",
                        );
                        continue;
                      }
                      n.bindingSignatures.push(e[i]);
                      break;
                    case p.default.signature.key_revocation:
                      this.revocationSignature = e[i];
                      break;
                    case p.default.signature.subkey_revocation:
                      if (!n) {
                        m.default.print_debug(
                          "Dropping subkey revocation signature without preceding subkey packet",
                        );
                        continue;
                      }
                      n.revocationSignature = e[i];
                  }
              }
          }),
            (i.prototype.toPacketlist = function () {
              var e = new d.default.List();
              e.push(this.primaryKey),
                e.push(this.revocationSignature),
                e.concat(this.directSignatures);
              var t;
              for (t = 0; t < this.users.length; t++)
                e.concat(this.users[t].toPacketlist());
              if (this.subKeys)
                for (t = 0; t < this.subKeys.length; t++)
                  e.concat(this.subKeys[t].toPacketlist());
              return e;
            }),
            (i.prototype.getSubkeyPackets = function () {
              var e = [];
              if (this.subKeys)
                for (var t = 0; t < this.subKeys.length; t++)
                  e.push(this.subKeys[t].subKey);
              return e;
            }),
            (i.prototype.getAllKeyPackets = function () {
              return [this.primaryKey].concat(this.getSubkeyPackets());
            }),
            (i.prototype.getKeyIds = function () {
              for (
                var e = [], t = this.getAllKeyPackets(), r = 0;
                r < t.length;
                r++
              )
                e.push(t[r].getKeyId());
              return e;
            }),
            (i.prototype.getKeyPacket = function (e) {
              for (var t = this.getAllKeyPackets(), r = 0; r < t.length; r++)
                for (var n = t[r].getKeyId(), i = 0; i < e.length; i++)
                  if (n.equals(e[i])) return t[r];
              return null;
            }),
            (i.prototype.getUserIds = function () {
              for (var e = [], t = 0; t < this.users.length; t++)
                this.users[t].userId &&
                  e.push(
                    m.default.Uint8Array2str(this.users[t].userId.write()),
                  );
              return e;
            }),
            (i.prototype.isPublic = function () {
              return this.primaryKey.tag === p.default.packet.publicKey;
            }),
            (i.prototype.isPrivate = function () {
              return this.primaryKey.tag === p.default.packet.secretKey;
            }),
            (i.prototype.toPublic = function () {
              for (
                var e, t = new d.default.List(), r = this.toPacketlist(), n = 0;
                n < r.length;
                n++
              )
                switch (r[n].tag) {
                  case p.default.packet.secretKey:
                    e = r[n].writePublicKey();
                    var s = new d.default.PublicKey();
                    s.read(e), t.push(s);
                    break;
                  case p.default.packet.secretSubkey:
                    e = r[n].writePublicKey();
                    var a = new d.default.PublicSubkey();
                    a.read(e), t.push(a);
                    break;
                  default:
                    t.push(r[n]);
                }
              return new i(t);
            }),
            (i.prototype.armor = function () {
              var e = this.isPublic()
                ? p.default.armor.public_key
                : p.default.armor.private_key;
              return y.default.encode(e, this.toPacketlist().write());
            }),
            (i.prototype.getSigningKeyPacket = function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r = this.getPrimaryUser(t);
              if (
                r &&
                a(this.primaryKey, r.selfCertificate) &&
                (!e || this.primaryKey.getKeyId().equals(e)) &&
                this.verifyPrimaryKey(t) === p.default.keyStatus.valid
              )
                return this.primaryKey;
              if (this.subKeys)
                for (var n = 0; n < this.subKeys.length; n++)
                  if (
                    this.subKeys[n].isValidSigningKey(this.primaryKey, t) &&
                    (!e || this.subKeys[n].subKey.getKeyId().equals(e))
                  )
                    return this.subKeys[n].subKey;
              return null;
            }),
            (i.prototype.getPreferredHashAlgorithm = function () {
              var e = this.getPrimaryUser();
              return e && e.selfCertificate.preferredHashAlgorithms
                ? e.selfCertificate.preferredHashAlgorithms[0]
                : g.default.prefer_hash_algorithm;
            }),
            (i.prototype.getEncryptionKeyPacket = function () {
              if (this.subKeys)
                for (var e = 0; e < this.subKeys.length; e++)
                  if (this.subKeys[e].isValidEncryptionKey(this.primaryKey))
                    return this.subKeys[e].subKey;
              var t = this.getPrimaryUser();
              return t &&
                t.selfCertificate &&
                !t.selfCertificate.isExpired() &&
                s(this.primaryKey, t.selfCertificate)
                ? this.primaryKey
                : null;
            }),
            (i.prototype.encrypt = function (e) {
              if (!this.isPrivate())
                throw new Error("Nothing to encrypt in a public key");
              for (var t = this.getAllKeyPackets(), r = 0; r < t.length; r++)
                t[r].encrypt(e), t[r].clearPrivateMPIs();
            }),
            (i.prototype.decrypt = function (e) {
              if (!this.isPrivate())
                throw new Error("Nothing to decrypt in a public key");
              for (var t = this.getAllKeyPackets(), r = 0; r < t.length; r++) {
                if (!t[r].decrypt(e)) return !1;
              }
              return !0;
            }),
            (i.prototype.decryptKeyPacket = function (e, t) {
              if (!this.isPrivate())
                throw new Error("Nothing to decrypt in a public key");
              for (var r = this.getAllKeyPackets(), n = 0; n < r.length; n++)
                for (var i = r[n].getKeyId(), s = 0; s < e.length; s++)
                  if (i.equals(e[s])) {
                    if (!r[n].decrypt(t)) return !1;
                  }
              return !0;
            }),
            (i.prototype.verifyPrimaryKey = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (
                this.revocationSignature &&
                !this.revocationSignature.isExpired() &&
                (this.revocationSignature.verified ||
                  this.revocationSignature.verify(this.primaryKey, {
                    key: this.primaryKey,
                  }))
              )
                return p.default.keyStatus.revoked;
              if (
                !e &&
                3 === this.primaryKey.version &&
                0 !== this.primaryKey.expirationTimeV3 &&
                Date.now() >
                  this.primaryKey.created.getTime() +
                    24 * this.primaryKey.expirationTimeV3 * 3600 * 1e3
              )
                return p.default.keyStatus.expired;
              for (var t = !1, r = 0; r < this.users.length; r++)
                this.users[r].userId &&
                  this.users[r].selfCertifications &&
                  (t = !0);
              if (!t) return p.default.keyStatus.no_self_cert;
              var n = this.getPrimaryUser();
              return n
                ? !e &&
                  4 === this.primaryKey.version &&
                  !1 === n.selfCertificate.keyNeverExpires &&
                  Date.now() >
                    this.primaryKey.created.getTime() +
                      1e3 * n.selfCertificate.keyExpirationTime
                  ? p.default.keyStatus.expired
                  : p.default.keyStatus.valid
                : p.default.keyStatus.invalid;
            }),
            (i.prototype.getExpirationTime = function () {
              if (3 === this.primaryKey.version) return o(this.primaryKey);
              if (4 === this.primaryKey.version) {
                var e = this.getPrimaryUser();
                return e ? o(this.primaryKey, e.selfCertificate) : null;
              }
            }),
            (i.prototype.getPrimaryUser = function () {
              for (
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = [],
                  r = 0;
                r < this.users.length;
                r++
              )
                if (this.users[r].userId && this.users[r].selfCertifications)
                  for (
                    var n = 0;
                    n < this.users[r].selfCertifications.length;
                    n++
                  )
                    t.push({
                      index: r,
                      user: this.users[r],
                      selfCertificate: this.users[r].selfCertifications[n],
                    });
              t = t.sort(function (e, t) {
                return e.selfCertificate.isPrimaryUserID >
                  t.selfCertificate.isPrimaryUserID
                  ? -1
                  : e.selfCertificate.isPrimaryUserID <
                    t.selfCertificate.isPrimaryUserID
                  ? 1
                  : e.selfCertificate.created > t.selfCertificate.created
                  ? -1
                  : e.selfCertificate.created < t.selfCertificate.created
                  ? 1
                  : 0;
              });
              for (var i = 0; i < t.length; i++)
                if (
                  t[i].user.isValidSelfCertificate(
                    this.primaryKey,
                    t[i].selfCertificate,
                    e,
                  )
                )
                  return t[i];
              return null;
            }),
            (i.prototype.update = function (e) {
              var t = this;
              if (e.verifyPrimaryKey() !== p.default.keyStatus.invalid) {
                if (
                  this.primaryKey.getFingerprint() !==
                  e.primaryKey.getFingerprint()
                )
                  throw new Error(
                    "Key update method: fingerprints of keys not equal",
                  );
                if (this.isPublic() && e.isPrivate()) {
                  if (
                    !(
                      (this.subKeys && this.subKeys.length) ===
                        (e.subKeys && e.subKeys.length) &&
                      (!this.subKeys ||
                        this.subKeys.every(function (t) {
                          return e.subKeys.some(function (e) {
                            return (
                              t.subKey.getFingerprint() ===
                              e.subKey.getFingerprint()
                            );
                          });
                        }))
                    )
                  )
                    throw new Error(
                      "Cannot update public key with private key if subkey mismatch",
                    );
                  this.primaryKey = e.primaryKey;
                }
                this.revocationSignature ||
                  !e.revocationSignature ||
                  e.revocationSignature.isExpired() ||
                  (!e.revocationSignature.verified &&
                    !e.revocationSignature.verify(e.primaryKey, {
                      key: e.primaryKey,
                    })) ||
                  (this.revocationSignature = e.revocationSignature),
                  u(e, this, "directSignatures"),
                  e.users.forEach(function (e) {
                    for (var r = !1, n = 0; n < t.users.length; n++)
                      if (
                        (e.userId &&
                          e.userId.userid === t.users[n].userId.userid) ||
                        (e.userAttribute &&
                          e.userAttribute.equals(t.users[n].userAttribute))
                      ) {
                        t.users[n].update(e, t.primaryKey), (r = !0);
                        break;
                      }
                    r || t.users.push(e);
                  }),
                  e.subKeys &&
                    e.subKeys.forEach(function (e) {
                      for (var r = !1, n = 0; n < t.subKeys.length; n++)
                        if (
                          e.subKey.getFingerprint() ===
                          t.subKeys[n].subKey.getFingerprint()
                        ) {
                          t.subKeys[n].update(e, t.primaryKey), (r = !0);
                          break;
                        }
                      r || t.subKeys.push(e);
                    });
              }
            }),
            (i.prototype.revoke = function () {}),
            (i.prototype.signPrimaryUser = function (e) {
              var t = this.getPrimaryUser() || {},
                r = t.index,
                n = t.user;
              if (!n) throw new Error("Could not find primary user");
              n = n.sign(this.primaryKey, e);
              var s = new i(this.toPacketlist());
              return (s.users[r] = n), s;
            }),
            (i.prototype.signAllUsers = function (e) {
              var t = this,
                r = this.users.map(function (r) {
                  return r.sign(t.primaryKey, e);
                }),
                n = new i(this.toPacketlist());
              return (n.users = r), n;
            }),
            (i.prototype.verifyPrimaryUser = function (e) {
              var t = (this.getPrimaryUser() || {}).user;
              if (!t) throw new Error("Could not find primary user");
              return t.verifyAllSignatures(this.primaryKey, e);
            }),
            (i.prototype.verifyAllUsers = function (e) {
              var t = this;
              return this.users.reduce(function (r, n) {
                return r.concat(
                  n.verifyAllSignatures(t.primaryKey, e).map(function (e) {
                    return {
                      userid: n.userId.userid,
                      keyid: e.keyid,
                      valid: e.valid,
                    };
                  }),
                );
              }, []);
            }),
            (f.prototype.toPacketlist = function () {
              var e = new d.default.List();
              return (
                e.push(this.userId || this.userAttribute),
                e.concat(this.revocationCertifications),
                e.concat(this.selfCertifications),
                e.concat(this.otherCertifications),
                e
              );
            }),
            (f.prototype.isRevoked = function (e, t) {
              if (this.revocationCertifications) {
                var r = this;
                return this.revocationCertifications.some(function (n) {
                  return (
                    n.issuerKeyId.equals(e.issuerKeyId) &&
                    !n.isExpired() &&
                    (n.verified ||
                      n.verify(t, {
                        userid: r.userId || r.userAttribute,
                        key: t,
                      }))
                  );
                });
              }
              return !1;
            }),
            (f.prototype.isValidSelfCertificate = function (e, t) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return (
                !this.isRevoked(t, e) &&
                !(
                  (t.isExpired() && !r) ||
                  (!t.verified &&
                    !t.verify(e, {
                      userid: this.userId || this.userAttribute,
                      key: e,
                    }))
                )
              );
            }),
            (f.prototype.sign = function (e, t) {
              var r, n, i, s;
              return (
                (n = {}),
                (n.key = e),
                (n.userid = this.userId || this.userAttribute),
                (r = new f(this.userId || this.userAttribute)),
                (r.otherCertifications = []),
                t.forEach(function (t) {
                  if (t.isPublic())
                    throw new Error("Need private key for signing");
                  if (t.primaryKey.getFingerprint() === e.getFingerprint())
                    throw new Error("Not implemented for self signing");
                  if (!(i = t.getSigningKeyPacket()))
                    throw new Error("Could not find valid signing key packet");
                  if (!i.isDecrypted)
                    throw new Error("Private key is not decrypted.");
                  ((s = new d.default.Signature()).signatureType =
                    p.default.write(
                      p.default.signature,
                      p.default.signature.cert_generic,
                    )),
                    (s.keyFlags = [
                      p.default.keyFlags.certify_keys |
                        p.default.keyFlags.sign_data,
                    ]),
                    (s.hashAlgorithm = t.getPreferredHashAlgorithm()),
                    (s.publicKeyAlgorithm = i.algorithm),
                    (s.signingKeyId = i.getKeyId()),
                    s.sign(i, n),
                    r.otherCertifications.push(s);
                }),
                r.update(this, e),
                r
              );
            }),
            (f.prototype.verifyAllSignatures = function (e, t) {
              var r = { userid: this.userId || this.userAttribute, key: e };
              return this.selfCertifications
                .concat(this.otherCertifications || [])
                .map(function (e) {
                  var n = t.filter(function (t) {
                      return t.getSigningKeyPacket(e.issuerKeyId);
                    }),
                    i = null;
                  return (
                    n.length > 0 &&
                      (i = n.some(function (t) {
                        return e.verify(t.primaryKey, r);
                      })),
                    { keyid: e.issuerKeyId, valid: i }
                  );
                });
            }),
            (f.prototype.verify = function (e) {
              if (!this.selfCertifications)
                return p.default.keyStatus.no_self_cert;
              for (var t, r = 0; r < this.selfCertifications.length; r++)
                if (this.isRevoked(this.selfCertifications[r], e))
                  t = p.default.keyStatus.revoked;
                else if (
                  this.selfCertifications[r].verified ||
                  this.selfCertifications[r].verify(e, {
                    userid: this.userId || this.userAttribute,
                    key: e,
                  })
                ) {
                  if (!this.selfCertifications[r].isExpired()) {
                    t = p.default.keyStatus.valid;
                    break;
                  }
                  t = p.default.keyStatus.expired;
                } else t = p.default.keyStatus.invalid;
              return t;
            }),
            (f.prototype.update = function (e, t) {
              var r = this;
              u(e, this, "selfCertifications", function (e) {
                return (
                  e.verified ||
                  e.verify(t, { userid: r.userId || r.userAttribute, key: t })
                );
              }),
                u(e, this, "otherCertifications"),
                u(e, this, "revocationCertifications");
            }),
            (h.prototype.toPacketlist = function () {
              var e = new d.default.List();
              e.push(this.subKey), e.push(this.revocationSignature);
              for (var t = 0; t < this.bindingSignatures.length; t++)
                e.push(this.bindingSignatures[t]);
              return e;
            }),
            (h.prototype.isValidEncryptionKey = function (e) {
              if (this.verify(e) !== p.default.keyStatus.valid) return !1;
              for (var t = 0; t < this.bindingSignatures.length; t++)
                if (s(this.subKey, this.bindingSignatures[t])) return !0;
              return !1;
            }),
            (h.prototype.isValidSigningKey = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (this.verify(e, t) !== p.default.keyStatus.valid) return !1;
              for (var r = 0; r < this.bindingSignatures.length; r++)
                if (a(this.subKey, this.bindingSignatures[r])) return !0;
              return !1;
            }),
            (h.prototype.verify = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (
                this.revocationSignature &&
                !this.revocationSignature.isExpired() &&
                (this.revocationSignature.verified ||
                  this.revocationSignature.verify(e, {
                    key: e,
                    bind: this.subKey,
                  }))
              )
                return p.default.keyStatus.revoked;
              if (
                !t &&
                3 === this.subKey.version &&
                0 !== this.subKey.expirationTimeV3 &&
                Date.now() >
                  this.subKey.created.getTime() +
                    24 * this.subKey.expirationTimeV3 * 3600 * 1e3
              )
                return p.default.keyStatus.expired;
              for (var r = 0; r < this.bindingSignatures.length; r++) {
                var n = r === this.bindingSignatures.length - 1,
                  i = this.bindingSignatures[r];
                if (t || !i.isExpired()) {
                  if (
                    i.verified ||
                    i.verify(e, { key: e, bind: this.subKey })
                  ) {
                    if (
                      4 !== this.subKey.version ||
                      t ||
                      !1 !== i.keyNeverExpires ||
                      !(
                        Date.now() >
                        this.subKey.created.getTime() +
                          1e3 * i.keyExpirationTime
                      )
                    )
                      return p.default.keyStatus.valid;
                    if (n) return p.default.keyStatus.expired;
                  } else if (n) return p.default.keyStatus.invalid;
                } else if (n) return p.default.keyStatus.expired;
              }
              return p.default.keyStatus.invalid;
            }),
            (h.prototype.getExpirationTime = function () {
              for (var e, t = 0; t < this.bindingSignatures.length; t++) {
                var r = o(this.subKey, this.bindingSignatures[t]);
                if (null === r) return null;
                (!e || r > e) && (e = r);
              }
              return e;
            }),
            (h.prototype.update = function (e, t) {
              if (e.verify(t) !== p.default.keyStatus.invalid) {
                if (this.subKey.getFingerprint() !== e.subKey.getFingerprint())
                  throw new Error(
                    "SubKey update method: fingerprints of subkeys not equal",
                  );
                if (
                  (this.subKey.tag === p.default.packet.publicSubkey &&
                    e.subKey.tag === p.default.packet.secretSubkey &&
                    (this.subKey = e.subKey),
                  this.bindingSignatures.length < e.bindingSignatures.length)
                )
                  for (
                    var r = this.bindingSignatures.length;
                    r < e.bindingSignatures.length;
                    r++
                  ) {
                    var n = e.bindingSignatures[r];
                    (n.verified ||
                      n.verify(t, { key: t, bind: this.subKey })) &&
                      this.bindingSignatures.push(n);
                  }
                this.revocationSignature ||
                  !e.revocationSignature ||
                  e.revocationSignature.isExpired() ||
                  (!e.revocationSignature.verified &&
                    !e.revocationSignature.verify(t, {
                      key: t,
                      bind: this.subKey,
                    })) ||
                  (this.revocationSignature = e.revocationSignature);
              }
            });
        },
        {
          "./config": 10,
          "./encoding/armor.js": 33,
          "./enums.js": 35,
          "./packet": 47,
          "./util": 70,
        },
      ],
      39: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var i = n(e("./keyring.js")),
            s = n(e("./localstore.js"));
          (i.default.localstore = s.default), (r.default = i.default);
        },
        { "./keyring.js": 40, "./localstore.js": 41 },
      ],
      40: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            (this.storeHandler = e || new o.default()),
              (this.publicKeys = new i(this.storeHandler.loadPublic())),
              (this.privateKeys = new i(this.storeHandler.loadPrivate()));
          }
          function i(e) {
            this.keys = e;
          }
          function s(e, t) {
            return 16 === e.length
              ? e === t.getKeyId().toHex()
              : e === t.getFingerprint();
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = n);
          var a = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("../key.js")),
            o = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(e("./localstore.js"));
          (n.prototype.store = function () {
            this.storeHandler.storePublic(this.publicKeys.keys),
              this.storeHandler.storePrivate(this.privateKeys.keys);
          }),
            (n.prototype.clear = function () {
              (this.publicKeys.keys = []), (this.privateKeys.keys = []);
            }),
            (n.prototype.getKeysForId = function (e, t) {
              var r = [];
              return (
                (r = r.concat(this.publicKeys.getForId(e, t) || [])),
                (r = r.concat(this.privateKeys.getForId(e, t) || [])).length
                  ? r
                  : null
              );
            }),
            (n.prototype.removeKeysForId = function (e) {
              var t = [];
              return (
                (t = t.concat(this.publicKeys.removeForId(e) || [])),
                (t = t.concat(this.privateKeys.removeForId(e) || [])).length
                  ? t
                  : null
              );
            }),
            (n.prototype.getAllKeys = function () {
              return this.publicKeys.keys.concat(this.privateKeys.keys);
            }),
            (i.prototype.getForAddress = function (e) {
              for (var t = [], r = 0; r < this.keys.length; r++)
                (function (e, t) {
                  for (
                    var r = (e = e.toLowerCase()).replace(
                        /[.*+?^${}()|[\]\\]/g,
                        "\\$&",
                      ),
                      n = new RegExp("<" + r + ">"),
                      i = t.getUserIds(),
                      s = 0;
                    s < i.length;
                    s++
                  ) {
                    var a = i[s].toLowerCase();
                    if (e === a || n.test(a)) return !0;
                  }
                  return !1;
                })(e, this.keys[r]) && t.push(this.keys[r]);
              return t;
            }),
            (i.prototype.getForId = function (e, t) {
              for (var r = 0; r < this.keys.length; r++) {
                if (s(e, this.keys[r].primaryKey)) return this.keys[r];
                if (t && this.keys[r].subKeys)
                  for (var n = 0; n < this.keys[r].subKeys.length; n++)
                    if (s(e, this.keys[r].subKeys[n].subKey))
                      return this.keys[r];
              }
              return null;
            }),
            (i.prototype.importKey = function (e) {
              var t = a.readArmored(e),
                r = this;
              return (
                t.keys.forEach(function (e) {
                  var t = e.primaryKey.getKeyId().toHex(),
                    n = r.getForId(t);
                  n ? n.update(e) : r.push(e);
                }),
                t.err ? t.err : null
              );
            }),
            (i.prototype.push = function (e) {
              return this.keys.push(e);
            }),
            (i.prototype.removeForId = function (e) {
              for (var t = 0; t < this.keys.length; t++)
                if (s(e, this.keys[t].primaryKey))
                  return this.keys.splice(t, 1)[0];
              return null;
            });
        },
        { "../key.js": 38, "./localstore.js": 41 },
      ],
      41: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i(t) {
            (t = t || "openpgp-"),
              (this.publicKeysItem = t + this.publicKeysItem),
              (this.privateKeysItem = t + this.privateKeysItem),
              "undefined" != typeof window && window.localStorage
                ? (this.storage = window.localStorage)
                : (this.storage = new (e("node-localstorage").LocalStorage)(
                    o.default.node_store,
                  ));
          }
          function s(e, t) {
            var r = JSON.parse(e.getItem(t)),
              n = [];
            if (null !== r && 0 !== r.length)
              for (var i, s = 0; s < r.length; s++)
                (i = u.readArmored(r[s])).err
                  ? f.default.print_debug(
                      "Error reading armored key from keyring index: " + s,
                    )
                  : n.push(i.keys[0]);
            return n;
          }
          function a(e, t, r) {
            var n = [];
            if (r.length) {
              for (var i = 0; i < r.length; i++) n.push(r[i].armor());
              e.setItem(t, JSON.stringify(n));
            } else e.removeItem(t);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var o = n(e("../config")),
            u = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("../key.js")),
            f = n(e("../util.js"));
          (i.prototype.publicKeysItem = "public-keys"),
            (i.prototype.privateKeysItem = "private-keys"),
            (i.prototype.loadPublic = function () {
              return s(this.storage, this.publicKeysItem);
            }),
            (i.prototype.loadPrivate = function () {
              return s(this.storage, this.privateKeysItem);
            }),
            (i.prototype.storePublic = function (e) {
              a(this.storage, this.publicKeysItem, e);
            }),
            (i.prototype.storePrivate = function (e) {
              a(this.storage, this.privateKeysItem, e);
            });
        },
        {
          "../config": 10,
          "../key.js": 38,
          "../util.js": 70,
          "node-localstorage": "node-localstorage",
        },
      ],
      42: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          }
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function s(e) {
            if (!(this instanceof s)) return new s(e);
            this.packets = e || new h.default.List();
          }
          function a(e, t, r, n) {
            var i = new h.default.List();
            return (
              r &&
                r.forEach(function (r) {
                  var n = r.getEncryptionKeyPacket();
                  if (!n)
                    throw new Error(
                      "Could not find valid key packet for encryption in key " +
                        r.primaryKey.getKeyId().toHex(),
                    );
                  var s = new h.default.PublicKeyEncryptedSessionKey();
                  (s.publicKeyId = n.getKeyId()),
                    (s.publicKeyAlgorithm = n.algorithm),
                    (s.sessionKey = e),
                    (s.sessionKeyAlgorithm = t),
                    s.encrypt(n),
                    delete s.sessionKey,
                    i.push(s);
                }),
              n &&
                n.forEach(function (r) {
                  var n = new h.default.SymEncryptedSessionKey();
                  (n.sessionKey = e),
                    (n.sessionKeyAlgorithm = t),
                    n.encrypt(r),
                    delete n.sessionKey,
                    i.push(n);
                }),
              new s(i)
            );
          }
          function o(e, t, r) {
            for (var n = [], i = 0; i < e.length; i++) {
              for (
                var s = null, a = 0;
                a < r.length &&
                !(s = r[a].getSigningKeyPacket(
                  e[i].issuerKeyId,
                  d.default.verify_expired_keys,
                ));
                a++
              );
              var o = {};
              s
                ? ((o.keyid = e[i].issuerKeyId),
                  (o.valid = e[i].verify(s, t[0])))
                : ((o.keyid = e[i].issuerKeyId), (o.valid = null));
              var u = new h.default.List();
              u.push(e[i]), (o.signature = new y.Signature(u)), n.push(o);
            }
            return n;
          }
          function u(e) {
            var t = new h.default.List();
            return t.read(e), new s(t);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.Message = s),
            (r.encryptSessionKey = a),
            (r.readArmored = function (e) {
              return u(c.default.decode(e).data);
            }),
            (r.read = u),
            (r.readSignedContent = function (e, t) {
              var r = new h.default.Literal();
              r.setBytes(
                f.default.str2Uint8Array(e),
                l.default.read(l.default.literal, l.default.literal.binary),
              );
              var n = new h.default.List();
              n.push(r);
              var i = c.default.decode(t).data;
              return n.read(i), new s(n);
            }),
            (r.fromText = function (e, t) {
              var r = new h.default.Literal();
              r.setText(e), void 0 !== t && r.setFilename(t);
              var n = new h.default.List();
              return n.push(r), new s(n);
            }),
            (r.fromBinary = function (e, t) {
              if (!f.default.isUint8Array(e))
                throw new Error("Data must be in the form of a Uint8Array");
              var r = new h.default.Literal();
              t && r.setFilename(t),
                r.setBytes(
                  e,
                  l.default.read(l.default.literal, l.default.literal.binary),
                ),
                void 0 !== t && r.setFilename(t);
              var n = new h.default.List();
              return n.push(r), new s(n);
            });
          var f = i(e("./util.js")),
            h = i(e("./packet")),
            l = i(e("./enums.js")),
            c = i(e("./encoding/armor.js")),
            d = i(e("./config")),
            p = i(e("./crypto")),
            y = n(e("./signature.js")),
            g = n(e("./key.js"));
          (s.prototype.getEncryptionKeyIds = function () {
            var e = [];
            return (
              this.packets
                .filterByTag(l.default.packet.publicKeyEncryptedSessionKey)
                .forEach(function (t) {
                  e.push(t.publicKeyId);
                }),
              e
            );
          }),
            (s.prototype.getSigningKeyIds = function () {
              var e = [],
                t = this.unwrapCompressed();
              if (
                (t.packets
                  .filterByTag(l.default.packet.onePassSignature)
                  .forEach(function (t) {
                    e.push(t.signingKeyId);
                  }),
                !e.length)
              ) {
                t.packets
                  .filterByTag(l.default.packet.signature)
                  .forEach(function (t) {
                    e.push(t.issuerKeyId);
                  });
              }
              return e;
            }),
            (s.prototype.decrypt = function (e, t, r) {
              var n = this;
              return Promise.resolve().then(function () {
                var i = t || n.decryptSessionKey(e, r);
                if (
                  !i ||
                  !f.default.isUint8Array(i.data) ||
                  !f.default.isString(i.algorithm)
                )
                  throw new Error("Invalid session key for decryption.");
                var a = n.packets.filterByTag(
                  l.default.packet.symmetricallyEncrypted,
                  l.default.packet.symEncryptedIntegrityProtected,
                  l.default.packet.symEncryptedAEADProtected,
                );
                if (0 !== a.length) {
                  var o = a[0];
                  return o.decrypt(i.algorithm, i.data).then(function () {
                    var e = new s(o.packets);
                    return (o.packets = new h.default.List()), e;
                  });
                }
              });
            }),
            (s.prototype.decryptSessionKey = function (e, t) {
              var r;
              if (t) {
                for (
                  var n = this.packets.filterByTag(
                      l.default.packet.symEncryptedSessionKey,
                    ),
                    i = n.length,
                    s = 0;
                  s < i;
                  s++
                ) {
                  r = n[s];
                  try {
                    r.decrypt(t);
                    break;
                  } catch (e) {
                    if (s === i - 1) throw e;
                  }
                }
                if (!r)
                  throw new Error(
                    "No symmetrically encrypted session key packet found.",
                  );
              } else {
                if (!e) throw new Error("No key or password specified.");
                var a = this.getEncryptionKeyIds();
                if (!a.length) return;
                var o = e.getKeyPacket(a);
                if (!o.isDecrypted)
                  throw new Error("Private key is not decrypted.");
                for (
                  var u = this.packets.filterByTag(
                      l.default.packet.publicKeyEncryptedSessionKey,
                    ),
                    f = 0;
                  f < u.length;
                  f++
                )
                  if (u[f].publicKeyId.equals(o.getKeyId())) {
                    (r = u[f]).decrypt(o);
                    break;
                  }
              }
              if (r)
                return { data: r.sessionKey, algorithm: r.sessionKeyAlgorithm };
            }),
            (s.prototype.getLiteralData = function () {
              var e = this.packets.findPacket(l.default.packet.literal);
              return (e && e.data) || null;
            }),
            (s.prototype.getFilename = function () {
              var e = this.packets.findPacket(l.default.packet.literal);
              return (e && e.getFilename()) || null;
            }),
            (s.prototype.getText = function () {
              var e = this.packets.findPacket(l.default.packet.literal);
              return e ? e.getText() : null;
            }),
            (s.prototype.encrypt = function (e, t, r) {
              var n = this,
                i = void 0,
                s = void 0,
                o = void 0;
              return Promise.resolve()
                .then(function () {
                  if (r) {
                    if (
                      !f.default.isUint8Array(r.data) ||
                      !f.default.isString(r.algorithm)
                    )
                      throw new Error("Invalid session key for encryption.");
                    (i = r.algorithm), (r = r.data);
                  } else if (e && e.length)
                    i = l.default.read(
                      l.default.symmetric,
                      g.getPreferredSymAlgo(e),
                    );
                  else {
                    if (!t || !t.length)
                      throw new Error(
                        "No keys, passwords, or session key provided.",
                      );
                    i = l.default.read(
                      l.default.symmetric,
                      d.default.encryption_cipher,
                    );
                  }
                  return (
                    r || (r = p.default.generateSessionKey(i)),
                    (s = a(r, i, e, t)),
                    (o = d.default.aead_protect
                      ? new h.default.SymEncryptedAEADProtected()
                      : d.default.integrity_protect
                      ? new h.default.SymEncryptedIntegrityProtected()
                      : new h.default.SymmetricallyEncrypted()),
                    (o.packets = n.packets),
                    o.encrypt(i, r)
                  );
                })
                .then(function () {
                  return (
                    s.packets.push(o),
                    (o.packets = new h.default.List()),
                    { message: s, sessionKey: { data: r, algorithm: i } }
                  );
                });
            }),
            (s.prototype.sign = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                r = new h.default.List(),
                n = this.packets.findPacket(l.default.packet.literal);
              if (!n) throw new Error("No literal data packet to sign.");
              var i,
                a,
                o,
                u,
                f =
                  l.default.write(l.default.literal, n.format) ===
                  l.default.literal.binary
                    ? l.default.signature.binary
                    : l.default.signature.text;
              if (
                t &&
                (o = t.packets.filterByTag(l.default.packet.signature)).length
              )
                for (i = o.length - 1; i >= 0; i--) {
                  var c = o[i];
                  ((u = new h.default.OnePassSignature()).type = f),
                    (u.hashAlgorithm = d.default.prefer_hash_algorithm),
                    (u.publicKeyAlgorithm = c.publicKeyAlgorithm),
                    (u.signingKeyId = c.issuerKeyId),
                    e.length || 0 !== i || (u.flags = 1),
                    r.push(u);
                }
              for (i = 0; i < e.length; i++) {
                if (e[i].isPublic())
                  throw new Error("Need private key for signing");
                if (
                  ((u = new h.default.OnePassSignature()),
                  (u.type = f),
                  (u.hashAlgorithm = d.default.prefer_hash_algorithm),
                  !(a = e[i].getSigningKeyPacket()))
                )
                  throw new Error(
                    "Could not find valid key packet for signing in key " +
                      e[i].primaryKey.getKeyId().toHex(),
                  );
                (u.publicKeyAlgorithm = a.algorithm),
                  (u.signingKeyId = a.getKeyId()),
                  i === e.length - 1 && (u.flags = 1),
                  r.push(u);
              }
              for (r.push(n), i = e.length - 1; i >= 0; i--) {
                var p = new h.default.Signature();
                if (
                  ((p.signatureType = f),
                  (p.hashAlgorithm = d.default.prefer_hash_algorithm),
                  (p.publicKeyAlgorithm = a.algorithm),
                  !a.isDecrypted)
                )
                  throw new Error("Private key is not decrypted.");
                p.sign(a, n), r.push(p);
              }
              return t && r.concat(o), new s(r);
            }),
            (s.prototype.signDetached = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                r = new h.default.List(),
                n = this.packets.findPacket(l.default.packet.literal);
              if (!n) throw new Error("No literal data packet to sign.");
              for (
                var i =
                    l.default.write(l.default.literal, n.format) ===
                    l.default.literal.binary
                      ? l.default.signature.binary
                      : l.default.signature.text,
                  s = 0;
                s < e.length;
                s++
              ) {
                var a = e[s].getSigningKeyPacket(),
                  o = new h.default.Signature();
                if (
                  ((o.signatureType = i),
                  (o.hashAlgorithm = d.default.prefer_hash_algorithm),
                  (o.publicKeyAlgorithm = a.algorithm),
                  !a.isDecrypted)
                )
                  throw new Error("Private key is not decrypted.");
                o.sign(a, n), r.push(o);
              }
              if (t) {
                var u = t.packets.filterByTag(l.default.packet.signature);
                r.concat(u);
              }
              return new y.Signature(r);
            }),
            (s.prototype.verify = function (e) {
              var t = this.unwrapCompressed(),
                r = t.packets.filterByTag(l.default.packet.literal);
              if (1 !== r.length)
                throw new Error(
                  "Can only verify message with one literal data packet.",
                );
              return o(t.packets.filterByTag(l.default.packet.signature), r, e);
            }),
            (s.prototype.verifyDetached = function (e, t) {
              var r = this.unwrapCompressed().packets.filterByTag(
                l.default.packet.literal,
              );
              if (1 !== r.length)
                throw new Error(
                  "Can only verify message with one literal data packet.",
                );
              return o(e.packets, r, t);
            }),
            (s.prototype.unwrapCompressed = function () {
              var e = this.packets.filterByTag(l.default.packet.compressed);
              return e.length ? new s(e[0].packets) : this;
            }),
            (s.prototype.armor = function () {
              return c.default.encode(
                l.default.armor.message,
                this.packets.write(),
              );
            });
        },
        {
          "./config": 10,
          "./crypto": 24,
          "./encoding/armor.js": 33,
          "./enums.js": 35,
          "./key.js": 38,
          "./packet": 47,
          "./signature.js": 66,
          "./util.js": 70,
        },
      ],
      43: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          }
          function s(e, t) {
            if (!g.default.isUint8Array(e) && !g.default.isString(e))
              throw new Error(
                "Parameter [" +
                  (t || "data") +
                  "] must be of type String or Uint8Array",
              );
          }
          function a(e) {
            if (!c.Message.prototype.isPrototypeOf(e))
              throw new Error(
                "Parameter [message] needs to be of type Message",
              );
          }
          function o(e) {
            return e.userIds
              ? ((e.userIds = u(e.userIds)),
                (e.userIds = e.userIds.map(function (e) {
                  if (g.default.isString(e) && !g.default.isUserId(e))
                    throw new Error("Invalid user id format");
                  if (g.default.isUserId(e)) return e;
                  if (
                    ((e.name = e.name || ""),
                    (e.email = e.email || ""),
                    !g.default.isString(e.name) ||
                      (e.email && !g.default.isEmailAddress(e.email)))
                  )
                    throw new Error("Invalid user id format");
                  return (
                    (e.name = e.name.trim()),
                    e.name.length > 0 && (e.name += " "),
                    e.name + "<" + e.email + ">"
                  );
                })),
                e)
              : e;
          }
          function u(e) {
            return e && !g.default.isArray(e) && (e = [e]), e;
          }
          function f(e, t) {
            return new Promise(function (t) {
              return t(e());
            }).catch(h.bind(null, t));
          }
          function h(e, t) {
            throw (
              (y.default.debug && console.error(t.stack),
              (t.message = e + ": " + t.message),
              t)
            );
          }
          function l() {
            return g.default.getWebCrypto() && y.default.aead_protect;
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.initWorker = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.path,
                r = void 0 === t ? "openpgp.worker.min.js" : t,
                n = e.worker;
              if (n || ("undefined" != typeof window && window.Worker))
                return (
                  (v = new m.default({
                    path: r,
                    worker: n,
                    config: y.default,
                  })),
                  !0
                );
            }),
            (r.getWorker = function () {
              return v;
            }),
            (r.destroyWorker = function () {
              v = void 0;
            }),
            (r.generateKey = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.userIds,
                r = void 0 === t ? [] : t,
                n = e.passphrase,
                i = e.numBits,
                s = void 0 === i ? 2048 : i,
                a = e.unlocked,
                u = void 0 !== a && a,
                f = e.keyExpirationTime,
                l = o({
                  userIds: r,
                  passphrase: n,
                  numBits: s,
                  unlocked: u,
                  keyExpirationTime: void 0 === f ? 0 : f,
                });
              return !g.default.getWebCryptoAll() && v
                ? v.delegate("generateKey", l)
                : p
                    .generate(l)
                    .then(function (e) {
                      return {
                        key: e,
                        privateKeyArmored: e.armor(),
                        publicKeyArmored: e.toPublic().armor(),
                      };
                    })
                    .catch(h.bind(null, "Error generating keypair"));
            }),
            (r.reformatKey = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.privateKey,
                r = e.userIds,
                n = void 0 === r ? [] : r,
                i = e.passphrase,
                s = void 0 === i ? "" : i,
                a = e.unlocked,
                u = void 0 !== a && a,
                f = e.keyExpirationTime,
                l = o({
                  privateKey: t,
                  userIds: n,
                  passphrase: s,
                  unlocked: u,
                  keyExpirationTime: void 0 === f ? 0 : f,
                });
              return v
                ? v.delegate("reformatKey", l)
                : p
                    .reformat(l)
                    .then(function (e) {
                      return {
                        key: e,
                        privateKeyArmored: e.armor(),
                        publicKeyArmored: e.toPublic().armor(),
                      };
                    })
                    .catch(h.bind(null, "Error reformatting keypair"));
            }),
            (r.decryptKey = function (e) {
              var t = e.privateKey,
                r = e.passphrase;
              return v
                ? v.delegate("decryptKey", { privateKey: t, passphrase: r })
                : f(function () {
                    if (!t.decrypt(r)) throw new Error("Invalid passphrase");
                    return { key: t };
                  }, "Error decrypting private key");
            }),
            (r.encrypt = function (e) {
              var t = e.data,
                r = e.publicKeys,
                n = e.privateKeys,
                i = e.passwords,
                a = e.sessionKey,
                o = e.filename,
                f = e.armor,
                d = void 0 === f || f,
                p = e.detached,
                y = void 0 !== p && p,
                m = e.signature,
                w = void 0 === m ? null : m,
                b = e.returnSessionKey,
                k = void 0 !== b && b;
              if ((s(t), (r = u(r)), (n = u(n)), (i = u(i)), !l() && v))
                return v.delegate("encrypt", {
                  data: t,
                  publicKeys: r,
                  privateKeys: n,
                  passwords: i,
                  sessionKey: a,
                  filename: o,
                  armor: d,
                  detached: y,
                  signature: w,
                  returnSessionKey: k,
                });
              var A = {};
              return Promise.resolve()
                .then(function () {
                  var e = (function (e, t) {
                    var r = void 0;
                    if (g.default.isUint8Array(e)) r = c.fromBinary(e, t);
                    else {
                      if (!g.default.isString(e))
                        throw new Error(
                          "Data must be of type String or Uint8Array",
                        );
                      r = c.fromText(e, t);
                    }
                    return r;
                  })(t, o);
                  if ((n || (n = []), n.length || w))
                    if (y) {
                      var s = e.signDetached(n, w);
                      A.signature = d ? s.armor() : s;
                    } else e = e.sign(n, w);
                  return e.encrypt(r, i, a);
                })
                .then(function (e) {
                  return (
                    d ? (A.data = e.message.armor()) : (A.message = e.message),
                    k && (A.sessionKey = e.sessionKey),
                    A
                  );
                })
                .catch(h.bind(null, "Error encrypting message"));
            }),
            (r.decrypt = function (e) {
              var t = e.message,
                r = e.privateKey,
                n = e.publicKeys,
                i = e.sessionKey,
                s = e.password,
                o = e.format,
                f = void 0 === o ? "utf8" : o,
                c = e.signature,
                d = void 0 === c ? null : c;
              return (
                a(t),
                (n = u(n)),
                !l() && v
                  ? v.delegate("decrypt", {
                      message: t,
                      privateKey: r,
                      publicKeys: n,
                      sessionKey: i,
                      password: s,
                      format: f,
                      signature: d,
                    })
                  : t
                      .decrypt(r, i, s)
                      .then(function (e) {
                        var t = (function (e, t) {
                          if ("binary" === t)
                            return {
                              data: e.getLiteralData(),
                              filename: e.getFilename(),
                            };
                          if ("utf8" === t)
                            return {
                              data: e.getText(),
                              filename: e.getFilename(),
                            };
                          throw new Error("Invalid format");
                        })(e, f);
                        return (
                          n || (n = []),
                          (t.signatures = d
                            ? e.verifyDetached(d, n)
                            : e.verify(n)),
                          t
                        );
                      })
                      .catch(h.bind(null, "Error decrypting message"))
              );
            }),
            (r.sign = function (e) {
              var t = e.data,
                r = e.privateKeys,
                n = e.armor,
                i = void 0 === n || n,
                a = e.detached,
                o = void 0 !== a && a;
              if ((s(t), (r = u(r)), v))
                return v.delegate("sign", {
                  data: t,
                  privateKeys: r,
                  armor: i,
                  detached: o,
                });
              var h = {};
              return f(function () {
                var e;
                if (
                  ((e = g.default.isString(t)
                    ? new d.CleartextMessage(t)
                    : c.fromBinary(t)),
                  o)
                ) {
                  var n = e.signDetached(r);
                  h.signature = i ? n.armor() : n;
                } else
                  (e = e.sign(r)), i ? (h.data = e.armor()) : (h.message = e);
                return h;
              }, "Error signing cleartext message");
            }),
            (r.verify = function (e) {
              var t = e.message,
                r = e.publicKeys,
                n = e.signature,
                i = void 0 === n ? null : n;
              if (
                ((function (e) {
                  if (
                    !d.CleartextMessage.prototype.isPrototypeOf(e) &&
                    !c.Message.prototype.isPrototypeOf(e)
                  )
                    throw new Error(
                      "Parameter [message] needs to be of type Message or CleartextMessage",
                    );
                })(t),
                (r = u(r)),
                v)
              )
                return v.delegate("verify", {
                  message: t,
                  publicKeys: r,
                  signature: i,
                });
              var s = {};
              return f(function () {
                return (
                  d.CleartextMessage.prototype.isPrototypeOf(t)
                    ? (s.data = t.getText())
                    : (s.data = t.getLiteralData()),
                  (s.signatures = i ? t.verifyDetached(i, r) : t.verify(r)),
                  s
                );
              }, "Error verifying cleartext signed message");
            }),
            (r.encryptSessionKey = function (e) {
              var t = e.data,
                r = e.algorithm,
                n = e.publicKeys,
                i = e.passwords;
              return (
                (function (e, t) {
                  if (!g.default.isUint8Array(e))
                    throw new Error(
                      "Parameter [" +
                        (t || "data") +
                        "] must be of type Uint8Array",
                    );
                })(t),
                (function (e, t) {
                  if (!g.default.isString(e))
                    throw new Error(
                      "Parameter [" +
                        (t || "data") +
                        "] must be of type String",
                    );
                })(r, "algorithm"),
                (n = u(n)),
                (i = u(i)),
                v
                  ? v.delegate("encryptSessionKey", {
                      data: t,
                      algorithm: r,
                      publicKeys: n,
                      passwords: i,
                    })
                  : f(function () {
                      return { message: c.encryptSessionKey(t, r, n, i) };
                    }, "Error encrypting session key")
              );
            }),
            (r.decryptSessionKey = function (e) {
              var t = e.message,
                r = e.privateKey,
                n = e.password;
              return (
                a(t),
                v
                  ? v.delegate("decryptSessionKey", {
                      message: t,
                      privateKey: r,
                      password: n,
                    })
                  : f(function () {
                      return t.decryptSessionKey(r, n);
                    }, "Error decrypting session key")
              );
            });
          var c = i(e("./message.js")),
            d = i(e("./cleartext.js")),
            p = i(e("./key.js")),
            y = n(e("./config/config.js")),
            g = n(e("./util")),
            m = n(e("./worker/async_proxy.js"));
          n(e("es6-promise")).default.polyfill();
          var v = void 0;
        },
        {
          "./cleartext.js": 5,
          "./config/config.js": 9,
          "./key.js": 38,
          "./message.js": 42,
          "./util": 70,
          "./worker/async_proxy.js": 71,
          "es6-promise": 2,
        },
      ],
      44: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i(e) {
            return new _[
              (function (e) {
                return e.substr(0, 1).toUpperCase() + e.substr(1);
              })(e)
            ]();
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.Trust =
              r.Signature =
              r.SecretSubkey =
              r.Userid =
              r.SecretKey =
              r.OnePassSignature =
              r.UserAttribute =
              r.PublicSubkey =
              r.Marker =
              r.SymmetricallyEncrypted =
              r.PublicKey =
              r.Literal =
              r.SymEncryptedSessionKey =
              r.PublicKeyEncryptedSessionKey =
              r.SymEncryptedAEADProtected =
              r.SymEncryptedIntegrityProtected =
              r.Compressed =
                void 0);
          var s = e("./compressed.js");
          Object.defineProperty(r, "Compressed", {
            enumerable: !0,
            get: function () {
              return n(s).default;
            },
          });
          var a = e("./sym_encrypted_integrity_protected.js");
          Object.defineProperty(r, "SymEncryptedIntegrityProtected", {
            enumerable: !0,
            get: function () {
              return n(a).default;
            },
          });
          var o = e("./sym_encrypted_aead_protected.js");
          Object.defineProperty(r, "SymEncryptedAEADProtected", {
            enumerable: !0,
            get: function () {
              return n(o).default;
            },
          });
          var u = e("./public_key_encrypted_session_key.js");
          Object.defineProperty(r, "PublicKeyEncryptedSessionKey", {
            enumerable: !0,
            get: function () {
              return n(u).default;
            },
          });
          var f = e("./sym_encrypted_session_key.js");
          Object.defineProperty(r, "SymEncryptedSessionKey", {
            enumerable: !0,
            get: function () {
              return n(f).default;
            },
          });
          var h = e("./literal.js");
          Object.defineProperty(r, "Literal", {
            enumerable: !0,
            get: function () {
              return n(h).default;
            },
          });
          var l = e("./public_key.js");
          Object.defineProperty(r, "PublicKey", {
            enumerable: !0,
            get: function () {
              return n(l).default;
            },
          });
          var c = e("./symmetrically_encrypted.js");
          Object.defineProperty(r, "SymmetricallyEncrypted", {
            enumerable: !0,
            get: function () {
              return n(c).default;
            },
          });
          var d = e("./marker.js");
          Object.defineProperty(r, "Marker", {
            enumerable: !0,
            get: function () {
              return n(d).default;
            },
          });
          var p = e("./public_subkey.js");
          Object.defineProperty(r, "PublicSubkey", {
            enumerable: !0,
            get: function () {
              return n(p).default;
            },
          });
          var y = e("./user_attribute.js");
          Object.defineProperty(r, "UserAttribute", {
            enumerable: !0,
            get: function () {
              return n(y).default;
            },
          });
          var g = e("./one_pass_signature.js");
          Object.defineProperty(r, "OnePassSignature", {
            enumerable: !0,
            get: function () {
              return n(g).default;
            },
          });
          var m = e("./secret_key.js");
          Object.defineProperty(r, "SecretKey", {
            enumerable: !0,
            get: function () {
              return n(m).default;
            },
          });
          var v = e("./userid.js");
          Object.defineProperty(r, "Userid", {
            enumerable: !0,
            get: function () {
              return n(v).default;
            },
          });
          var w = e("./secret_subkey.js");
          Object.defineProperty(r, "SecretSubkey", {
            enumerable: !0,
            get: function () {
              return n(w).default;
            },
          });
          var b = e("./signature.js");
          Object.defineProperty(r, "Signature", {
            enumerable: !0,
            get: function () {
              return n(b).default;
            },
          });
          var k = e("./trust.js");
          Object.defineProperty(r, "Trust", {
            enumerable: !0,
            get: function () {
              return n(k).default;
            },
          }),
            (r.newPacketFromTag = i),
            (r.fromStructuredClone = function (e) {
              var t = i(A.default.read(A.default.packet, e.tag));
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              return t.postCloneTypeFix && t.postCloneTypeFix(), t;
            });
          var A = n(e("../enums.js")),
            _ = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("./all_packets.js"));
        },
        {
          "../enums.js": 35,
          "./all_packets.js": 44,
          "./compressed.js": 46,
          "./literal.js": 48,
          "./marker.js": 49,
          "./one_pass_signature.js": 50,
          "./public_key.js": 53,
          "./public_key_encrypted_session_key.js": 54,
          "./public_subkey.js": 55,
          "./secret_key.js": 56,
          "./secret_subkey.js": 57,
          "./signature.js": 58,
          "./sym_encrypted_aead_protected.js": 59,
          "./sym_encrypted_integrity_protected.js": 60,
          "./sym_encrypted_session_key.js": 61,
          "./symmetrically_encrypted.js": 62,
          "./trust.js": 63,
          "./user_attribute.js": 64,
          "./userid.js": 65,
        },
      ],
      45: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          }
          function s(e) {
            var t = l.default.fromStructuredClone(e);
            return new o.Key(t);
          }
          function a(e) {
            return (
              (e.keyid = c.default.fromClone(e.keyid)),
              (e.signature = new h.Signature(e.signature)),
              e
            );
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.clonePackets = function (e) {
              return (
                e.publicKeys &&
                  (e.publicKeys = e.publicKeys.map(function (e) {
                    return e.toPacketlist();
                  })),
                e.privateKeys &&
                  (e.privateKeys = e.privateKeys.map(function (e) {
                    return e.toPacketlist();
                  })),
                e.privateKey && (e.privateKey = e.privateKey.toPacketlist()),
                e.key && (e.key = e.key.toPacketlist()),
                e.message &&
                  (e.message instanceof u.Message
                    ? (e.message = e.message.packets)
                    : e.message instanceof f.CleartextMessage &&
                      (e.message.signature = e.message.signature.packets)),
                e.signature &&
                  e.signature instanceof h.Signature &&
                  (e.signature = e.signature.packets),
                e.signatures &&
                  (e.signatures = e.signatures.map(function (e) {
                    return (function (e) {
                      return (e.signature = e.signature.packets), e;
                    })(e);
                  })),
                e
              );
            }),
            (r.parseClonedPackets = function (e, t) {
              return (
                e.publicKeys && (e.publicKeys = e.publicKeys.map(s)),
                e.privateKeys && (e.privateKeys = e.privateKeys.map(s)),
                e.privateKey && (e.privateKey = s(e.privateKey)),
                e.key && (e.key = s(e.key)),
                e.message && e.message.signature
                  ? (e.message = (function (e) {
                      var t = l.default.fromStructuredClone(e.signature);
                      return new f.CleartextMessage(e.text, new h.Signature(t));
                    })(e.message))
                  : e.message &&
                    (e.message = (function (e) {
                      var t = l.default.fromStructuredClone(e);
                      return new u.Message(t);
                    })(e.message)),
                e.signatures && (e.signatures = e.signatures.map(a)),
                e.signature &&
                  (e.signature = (function (e) {
                    if ("string" == typeof e) return e;
                    var t = l.default.fromStructuredClone(e);
                    return new h.Signature(t);
                  })(e.signature)),
                e
              );
            });
          var o = i(e("../key.js")),
            u = i(e("../message.js")),
            f = i(e("../cleartext.js")),
            h = i(e("../signature.js")),
            l = n(e("./packetlist.js")),
            c = n(e("../type/keyid.js"));
        },
        {
          "../cleartext.js": 5,
          "../key.js": 38,
          "../message.js": 42,
          "../signature.js": 66,
          "../type/keyid.js": 67,
          "./packetlist.js": 52,
        },
      ],
      46: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = s.default.packet.compressed),
              (this.packets = null),
              (this.algorithm = "zip"),
              (this.compressed = null);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../enums.js")),
            a = n(e("../util.js")),
            o = n(e("../compression/zlib.min.js")),
            u = n(e("../compression/rawinflate.min.js")),
            f = n(e("../compression/rawdeflate.min.js"));
          (i.prototype.read = function (e) {
            (this.algorithm = s.default.read(s.default.compression, e[0])),
              (this.compressed = e.subarray(1, e.length)),
              this.decompress();
          }),
            (i.prototype.write = function () {
              return (
                null === this.compressed && this.compress(),
                a.default.concatUint8Array(
                  new Uint8Array([
                    s.default.write(s.default.compression, this.algorithm),
                  ]),
                  this.compressed,
                )
              );
            }),
            (i.prototype.decompress = function () {
              var e;
              switch (this.algorithm) {
                case "uncompressed":
                  e = this.compressed;
                  break;
                case "zip":
                  e = new u.default.Zlib.RawInflate(
                    this.compressed,
                  ).decompress();
                  break;
                case "zlib":
                  e = new o.default.Zlib.Inflate(this.compressed).decompress();
                  break;
                case "bzip2":
                  throw new Error(
                    "Compression algorithm BZip2 [BZ2] is not implemented.",
                  );
                default:
                  throw new Error(
                    "Compression algorithm unknown :" + this.algorithm,
                  );
              }
              this.packets.read(e);
            }),
            (i.prototype.compress = function () {
              var e, t;
              switch (((e = this.packets.write()), this.algorithm)) {
                case "uncompressed":
                  this.compressed = e;
                  break;
                case "zip":
                  (t = new f.default.Zlib.RawDeflate(e)),
                    (this.compressed = t.compress());
                  break;
                case "zlib":
                  (t = new o.default.Zlib.Deflate(e)),
                    (this.compressed = t.compress());
                  break;
                case "bzip2":
                  throw new Error(
                    "Compression algorithm BZip2 [BZ2] is not implemented.",
                  );
                default:
                  throw new Error(
                    "Compression algorithm unknown :" + this.type,
                  );
              }
            });
        },
        {
          "../compression/rawdeflate.min.js": 6,
          "../compression/rawinflate.min.js": 7,
          "../compression/zlib.min.js": 8,
          "../enums.js": 35,
          "../util.js": 70,
        },
      ],
      47: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          }
          Object.defineProperty(r, "__esModule", { value: !0 });
          var i = n(e("./all_packets.js")),
            s = n(e("./clone.js")),
            a = {
              List: (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(e("./packetlist.js")).default,
              clone: s,
            };
          for (var o in i) a[o] = i[o];
          r.default = a;
        },
        { "./all_packets.js": 44, "./clone.js": 45, "./packetlist.js": 52 },
      ],
      48: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = a.default.packet.literal),
              (this.format = "utf8"),
              (this.date = new Date()),
              (this.data = new Uint8Array(0)),
              (this.filename = "msg.txt");
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../util.js")),
            a = n(e("../enums.js"));
          (i.prototype.setText = function (e) {
            (e = e
              .replace(/\r\n/g, "\n")
              .replace(/\r/g, "\n")
              .replace(/\n/g, "\r\n")),
              (this.data =
                "utf8" === this.format
                  ? s.default.str2Uint8Array(s.default.encode_utf8(e))
                  : s.default.str2Uint8Array(e));
          }),
            (i.prototype.getText = function () {
              return s.default
                .decode_utf8(s.default.Uint8Array2str(this.data))
                .replace(/\r\n/g, "\n");
            }),
            (i.prototype.setBytes = function (e, t) {
              (this.format = t), (this.data = e);
            }),
            (i.prototype.getBytes = function () {
              return this.data;
            }),
            (i.prototype.setFilename = function (e) {
              this.filename = e;
            }),
            (i.prototype.getFilename = function () {
              return this.filename;
            }),
            (i.prototype.read = function (e) {
              var t = a.default.read(a.default.literal, e[0]),
                r = e[1];
              (this.filename = s.default.decode_utf8(
                s.default.Uint8Array2str(e.subarray(2, 2 + r)),
              )),
                (this.date = s.default.readDate(e.subarray(2 + r, 2 + r + 4)));
              var n = e.subarray(6 + r, e.length);
              this.setBytes(n, t);
            }),
            (i.prototype.write = function () {
              var e = s.default.str2Uint8Array(
                  s.default.encode_utf8(this.filename),
                ),
                t = new Uint8Array([e.length]),
                r = new Uint8Array([
                  a.default.write(a.default.literal, this.format),
                ]),
                n = s.default.writeDate(this.date),
                i = this.getBytes();
              return s.default.concatUint8Array([r, t, e, n, i]);
            });
        },
        { "../enums.js": 35, "../util.js": 70 },
      ],
      49: [
        function (e, t, r) {
          "use strict";
          function n() {
            this.tag = i.default.packet.marker;
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = n);
          var i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(e("../enums.js"));
          n.prototype.read = function (e) {
            return 80 === e[0] && 71 === e[1] && 80 === e[2];
          };
        },
        { "../enums.js": 35 },
      ],
      50: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = a.default.packet.onePassSignature),
              (this.version = null),
              (this.type = null),
              (this.hashAlgorithm = null),
              (this.publicKeyAlgorithm = null),
              (this.signingKeyId = null),
              (this.flags = null);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../util.js")),
            a = n(e("../enums.js")),
            o = n(e("../type/keyid.js"));
          (i.prototype.read = function (e) {
            var t = 0;
            return (
              (this.version = e[t++]),
              (this.type = a.default.read(a.default.signature, e[t++])),
              (this.hashAlgorithm = a.default.read(a.default.hash, e[t++])),
              (this.publicKeyAlgorithm = a.default.read(
                a.default.publicKey,
                e[t++],
              )),
              (this.signingKeyId = new o.default()),
              this.signingKeyId.read(e.subarray(t, t + 8)),
              (t += 8),
              (this.flags = e[t++]),
              this
            );
          }),
            (i.prototype.write = function () {
              var e = new Uint8Array([
                  3,
                  a.default.write(a.default.signature, this.type),
                  a.default.write(a.default.hash, this.hashAlgorithm),
                  a.default.write(a.default.publicKey, this.publicKeyAlgorithm),
                ]),
                t = new Uint8Array([this.flags]);
              return s.default.concatUint8Array([
                e,
                this.signingKeyId.write(),
                t,
              ]);
            }),
            (i.prototype.postCloneTypeFix = function () {
              this.signingKeyId = o.default.fromClone(this.signingKeyId);
            });
        },
        { "../enums.js": 35, "../type/keyid.js": 67, "../util.js": 70 },
      ],
      51: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(e("../util.js"));
          r.default = {
            readSimpleLength: function (e) {
              var t,
                r = 0,
                i = e[0];
              return (
                i < 192
                  ? ((r = e[0]), (t = 1))
                  : i < 255
                  ? ((r = ((e[0] - 192) << 8) + e[1] + 192), (t = 2))
                  : 255 === i &&
                    ((r = n.default.readNumber(e.subarray(1, 5))), (t = 5)),
                { len: r, offset: t }
              );
            },
            writeSimpleLength: function (e) {
              return e < 192
                ? new Uint8Array([e])
                : e > 191 && e < 8384
                ? new Uint8Array([192 + ((e - 192) >> 8), (e - 192) & 255])
                : n.default.concatUint8Array([
                    new Uint8Array([255]),
                    n.default.writeNumber(e, 4),
                  ]);
            },
            writeHeader: function (e, t) {
              return n.default.concatUint8Array([
                new Uint8Array([192 | e]),
                this.writeSimpleLength(t),
              ]);
            },
            writeOldHeader: function (e, t) {
              return t < 256
                ? new Uint8Array([128 | (e << 2), t])
                : t < 65536
                ? n.default.concatUint8Array([
                    new Uint8Array([129 | (e << 2)]),
                    n.default.writeNumber(t, 2),
                  ])
                : n.default.concatUint8Array([
                    new Uint8Array([130 | (e << 2)]),
                    n.default.writeNumber(t, 4),
                  ]);
            },
            read: function (e, t, r) {
              if (
                null === e ||
                e.length <= t ||
                e.subarray(t, e.length).length < 2 ||
                0 == (128 & e[t])
              )
                throw new Error(
                  "Error during parsing. This message / key probably does not conform to a valid OpenPGP format.",
                );
              var i,
                s = t,
                a = -1,
                o = -1;
              (o = 0), 0 != (64 & e[s]) && (o = 1);
              var u;
              o ? (a = 63 & e[s]) : ((a = (63 & e[s]) >> 2), (u = 3 & e[s])),
                s++;
              var f = null,
                h = -1;
              if (o)
                if (e[s] < 192)
                  (i = e[s++]), n.default.print_debug("1 byte length:" + i);
                else if (e[s] >= 192 && e[s] < 224)
                  (i = ((e[s++] - 192) << 8) + e[s++] + 192),
                    n.default.print_debug("2 byte length:" + i);
                else if (e[s] > 223 && e[s] < 255) {
                  (i = 1 << (31 & e[s++])),
                    n.default.print_debug("4 byte length:" + i);
                  var l = s + i;
                  f = [e.subarray(s, s + i)];
                  for (var c; ; ) {
                    if (e[l] < 192) {
                      (i += c = e[l++]), f.push(e.subarray(l, l + c)), (l += c);
                      break;
                    }
                    if (e[l] >= 192 && e[l] < 224) {
                      (i += c = ((e[l++] - 192) << 8) + e[l++] + 192),
                        f.push(e.subarray(l, l + c)),
                        (l += c);
                      break;
                    }
                    if (!(e[l] > 223 && e[l] < 255)) {
                      l++,
                        (c =
                          (e[l++] << 24) |
                          (e[l++] << 16) |
                          (e[l++] << 8) |
                          e[l++]),
                        f.push(e.subarray(l, l + c)),
                        (i += c),
                        (l += c);
                      break;
                    }
                    (i += c = 1 << (31 & e[l++])),
                      f.push(e.subarray(l, l + c)),
                      (l += c);
                  }
                  h = l - s;
                } else
                  s++,
                    (i =
                      (e[s++] << 24) | (e[s++] << 16) | (e[s++] << 8) | e[s++]);
              else
                switch (u) {
                  case 0:
                    i = e[s++];
                    break;
                  case 1:
                    i = (e[s++] << 8) | e[s++];
                    break;
                  case 2:
                    i =
                      (e[s++] << 24) | (e[s++] << 16) | (e[s++] << 8) | e[s++];
                    break;
                  default:
                    i = r;
                }
              return (
                -1 === h && (h = i),
                null === f
                  ? (f = e.subarray(s, s + h))
                  : f instanceof Array && (f = n.default.concatUint8Array(f)),
                { tag: a, packet: f, offset: s + h }
              );
            },
          };
        },
        { "../util.js": 70 },
      ],
      52: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            this.length = 0;
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../util")),
            a = n(e("./packet.js")),
            o = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("./all_packets.js")),
            u = n(e("../enums.js")),
            f = n(e("../config"));
          (i.prototype.read = function (e) {
            for (var t = 0; t < e.length; ) {
              var r = a.default.read(e, t, e.length - t);
              t = r.offset;
              var n = !1;
              try {
                var i = u.default.read(u.default.packet, r.tag),
                  s = o.newPacketFromTag(i);
                this.push(s), (n = !0), s.read(r.packet);
              } catch (e) {
                if (
                  !f.default.tolerant ||
                  r.tag == u.default.packet.symmetricallyEncrypted ||
                  r.tag == u.default.packet.literal ||
                  r.tag == u.default.packet.compressed
                )
                  throw e;
                n && this.pop();
              }
            }
          }),
            (i.prototype.write = function () {
              for (var e = [], t = 0; t < this.length; t++) {
                var r = this[t].write();
                e.push(a.default.writeHeader(this[t].tag, r.length)), e.push(r);
              }
              return s.default.concatUint8Array(e);
            }),
            (i.prototype.push = function (e) {
              e &&
                ((e.packets = e.packets || new i()),
                (this[this.length] = e),
                this.length++);
            }),
            (i.prototype.pop = function () {
              if (0 !== this.length) {
                var e = this[this.length - 1];
                return delete this[this.length - 1], this.length--, e;
              }
            }),
            (i.prototype.filter = function (e) {
              for (var t = new i(), r = 0; r < this.length; r++)
                e(this[r], r, this) && t.push(this[r]);
              return t;
            }),
            (i.prototype.filterByTag = function () {
              function e(e) {
                return n[s].tag === e;
              }
              for (
                var t = Array.prototype.slice.call(arguments),
                  r = new i(),
                  n = this,
                  s = 0;
                s < this.length;
                s++
              )
                t.some(e) && r.push(this[s]);
              return r;
            }),
            (i.prototype.forEach = function (e) {
              for (var t = 0; t < this.length; t++) e(this[t]);
            }),
            (i.prototype.findPacket = function (e) {
              var t = this.filterByTag(e);
              if (t.length) return t[0];
              for (var r = null, n = 0; n < this.length; n++)
                if (
                  this[n].packets.length &&
                  (r = this[n].packets.findPacket(e))
                )
                  return r;
              return null;
            }),
            (i.prototype.indexOfTag = function () {
              function e(e) {
                return n[i].tag === e;
              }
              for (
                var t = Array.prototype.slice.call(arguments),
                  r = [],
                  n = this,
                  i = 0;
                i < this.length;
                i++
              )
                t.some(e) && r.push(i);
              return r;
            }),
            (i.prototype.slice = function (e, t) {
              t || (t = this.length);
              for (var r = new i(), n = e; n < t; n++) r.push(this[n]);
              return r;
            }),
            (i.prototype.concat = function (e) {
              if (e) for (var t = 0; t < e.length; t++) this.push(e[t]);
            }),
            (i.fromStructuredClone = function (e) {
              for (var t = new i(), r = 0; r < e.length; r++)
                t.push(o.fromStructuredClone(e[r])),
                  0 !== t[r].packets.length
                    ? (t[r].packets = this.fromStructuredClone(t[r].packets))
                    : (t[r].packets = new i());
              return t;
            });
        },
        {
          "../config": 10,
          "../enums.js": 35,
          "../util": 70,
          "./all_packets.js": 44,
          "./packet.js": 51,
        },
      ],
      53: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = u.default.packet.publicKey),
              (this.version = 4),
              (this.created = new Date()),
              (this.mpi = []),
              (this.algorithm = "rsa_sign"),
              (this.expirationTimeV3 = 0),
              (this.fingerprint = null),
              (this.keyid = null);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../util.js")),
            a = n(e("../type/mpi.js")),
            o = n(e("../type/keyid.js")),
            u = n(e("../enums.js")),
            f = n(e("../crypto"));
          (i.prototype.read = function (e) {
            var t = 0;
            if (
              ((this.version = e[t++]),
              3 === this.version || 4 === this.version)
            ) {
              (this.created = s.default.readDate(e.subarray(t, t + 4))),
                (t += 4),
                3 === this.version &&
                  ((this.expirationTimeV3 = s.default.readNumber(
                    e.subarray(t, t + 2),
                  )),
                  (t += 2)),
                (this.algorithm = u.default.read(u.default.publicKey, e[t++]));
              var r = f.default.getPublicMpiCount(this.algorithm);
              this.mpi = [];
              for (
                var n = e.subarray(t, e.length), i = 0, o = 0;
                o < r && i < n.length;
                o++
              )
                if (
                  ((this.mpi[o] = new a.default()),
                  (i += this.mpi[o].read(n.subarray(i, n.length))) > n.length)
                )
                  throw new Error("Error reading MPI @:" + i);
              return i + 6;
            }
            throw new Error(
              "Version " + this.version + " of the key packet is unsupported.",
            );
          }),
            (i.prototype.readPublicKey = i.prototype.read),
            (i.prototype.write = function () {
              var e = [];
              e.push(new Uint8Array([this.version])),
                e.push(s.default.writeDate(this.created)),
                3 === this.version &&
                  e.push(s.default.writeNumber(this.expirationTimeV3, 2)),
                e.push(
                  new Uint8Array([
                    u.default.write(u.default.publicKey, this.algorithm),
                  ]),
                );
              for (
                var t = f.default.getPublicMpiCount(this.algorithm), r = 0;
                r < t;
                r++
              )
                e.push(this.mpi[r].write());
              return s.default.concatUint8Array(e);
            }),
            (i.prototype.writePublicKey = i.prototype.write),
            (i.prototype.writeOld = function () {
              var e = this.writePublicKey();
              return s.default.concatUint8Array([
                new Uint8Array([153]),
                s.default.writeNumber(e.length, 2),
                e,
              ]);
            }),
            (i.prototype.getKeyId = function () {
              if (this.keyid) return this.keyid;
              if (((this.keyid = new o.default()), 4 === this.version))
                this.keyid.read(
                  s.default.str2Uint8Array(
                    s.default.hex2bin(this.getFingerprint()).substr(12, 8),
                  ),
                );
              else if (3 === this.version) {
                var e = this.mpi[0].write();
                this.keyid.read(e.subarray(e.length - 8, e.length));
              }
              return this.keyid;
            }),
            (i.prototype.getFingerprint = function () {
              if (this.fingerprint) return this.fingerprint;
              var e = "";
              if (4 === this.version)
                (e = this.writeOld()),
                  (this.fingerprint = s.default.Uint8Array2str(
                    f.default.hash.sha1(e),
                  ));
              else if (3 === this.version) {
                for (
                  var t = f.default.getPublicMpiCount(this.algorithm), r = 0;
                  r < t;
                  r++
                )
                  e += this.mpi[r].toBytes();
                this.fingerprint = s.default.Uint8Array2str(
                  f.default.hash.md5(s.default.str2Uint8Array(e)),
                );
              }
              return (
                (this.fingerprint = s.default.hexstrdump(this.fingerprint)),
                this.fingerprint
              );
            }),
            (i.prototype.getBitSize = function () {
              return 8 * this.mpi[0].byteLength();
            }),
            (i.prototype.postCloneTypeFix = function () {
              for (var e = 0; e < this.mpi.length; e++)
                this.mpi[e] = a.default.fromClone(this.mpi[e]);
              this.keyid && (this.keyid = o.default.fromClone(this.keyid));
            });
        },
        {
          "../crypto": 24,
          "../enums.js": 35,
          "../type/keyid.js": 67,
          "../type/mpi.js": 68,
          "../util.js": 70,
        },
      ],
      54: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = u.default.packet.publicKeyEncryptedSessionKey),
              (this.version = 3),
              (this.publicKeyId = new s.default()),
              (this.publicKeyAlgorithm = "rsa_encrypt"),
              (this.sessionKey = null),
              (this.sessionKeyAlgorithm = "aes256"),
              (this.encrypted = []);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../type/keyid.js")),
            a = n(e("../util.js")),
            o = n(e("../type/mpi.js")),
            u = n(e("../enums.js")),
            f = n(e("../crypto"));
          (i.prototype.read = function (e) {
            (this.version = e[0]),
              this.publicKeyId.read(e.subarray(1, e.length)),
              (this.publicKeyAlgorithm = u.default.read(
                u.default.publicKey,
                e[9],
              ));
            var t = 10,
              r = (function (e) {
                switch (e) {
                  case "rsa_encrypt":
                  case "rsa_encrypt_sign":
                    return 1;
                  case "elgamal":
                    return 2;
                  default:
                    throw new Error("Invalid algorithm.");
                }
              })(this.publicKeyAlgorithm);
            this.encrypted = [];
            for (var n = 0; n < r; n++) {
              var i = new o.default();
              (t += i.read(e.subarray(t, e.length))), this.encrypted.push(i);
            }
          }),
            (i.prototype.write = function () {
              for (
                var e = [
                    new Uint8Array([this.version]),
                    this.publicKeyId.write(),
                    new Uint8Array([
                      u.default.write(
                        u.default.publicKey,
                        this.publicKeyAlgorithm,
                      ),
                    ]),
                  ],
                  t = 0;
                t < this.encrypted.length;
                t++
              )
                e.push(this.encrypted[t].write());
              return a.default.concatUint8Array(e);
            }),
            (i.prototype.encrypt = function (e) {
              var t = String.fromCharCode(
                u.default.write(u.default.symmetric, this.sessionKeyAlgorithm),
              );
              t += a.default.Uint8Array2str(this.sessionKey);
              var r = a.default.calc_checksum(this.sessionKey);
              t += a.default.Uint8Array2str(a.default.writeNumber(r, 2));
              var n = new o.default();
              n.fromBytes(f.default.pkcs1.eme.encode(t, e.mpi[0].byteLength())),
                (this.encrypted = f.default.publicKeyEncrypt(
                  this.publicKeyAlgorithm,
                  e.mpi,
                  n,
                ));
            }),
            (i.prototype.decrypt = function (e) {
              var t = f.default
                  .publicKeyDecrypt(
                    this.publicKeyAlgorithm,
                    e.mpi,
                    this.encrypted,
                  )
                  .toBytes(),
                r = a.default.readNumber(
                  a.default.str2Uint8Array(t.substr(t.length - 2)),
                ),
                n = f.default.pkcs1.eme.decode(t);
              if (
                ((e = a.default.str2Uint8Array(n.substring(1, n.length - 2))),
                r !== a.default.calc_checksum(e))
              )
                throw new Error("Checksum mismatch");
              (this.sessionKey = e),
                (this.sessionKeyAlgorithm = u.default.read(
                  u.default.symmetric,
                  n.charCodeAt(0),
                ));
            }),
            (i.prototype.postCloneTypeFix = function () {
              this.publicKeyId = s.default.fromClone(this.publicKeyId);
              for (var e = 0; e < this.encrypted.length; e++)
                this.encrypted[e] = o.default.fromClone(this.encrypted[e]);
            });
        },
        {
          "../crypto": 24,
          "../enums.js": 35,
          "../type/keyid.js": 67,
          "../type/mpi.js": 68,
          "../util.js": 70,
        },
      ],
      55: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            s.default.call(this), (this.tag = a.default.packet.publicSubkey);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("./public_key.js")),
            a = n(e("../enums.js"));
          (i.prototype = new s.default()).constructor = i;
        },
        { "../enums.js": 35, "./public_key.js": 53 },
      ],
      56: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            f.default.call(this),
              (this.tag = h.default.packet.secretKey),
              (this.encrypted = null),
              (this.isDecrypted = !1);
          }
          function s(e) {
            return "sha1" === e
              ? c.default.hash.sha1
              : function (e) {
                  return l.default.writeNumber(l.default.calc_checksum(e), 2);
                };
          }
          function a(e, t, r) {
            var n = (function (e) {
                return "sha1" === e ? 20 : 2;
              })(e),
              i = s(e),
              a = l.default.Uint8Array2str(t.subarray(t.length - n, t.length));
            t = t.subarray(0, t.length - n);
            if (l.default.Uint8Array2str(i(t)) !== a)
              return new Error("Hash mismatch.");
            for (
              var o = c.default.getPrivateMpiCount(r), u = 0, f = [], h = 0;
              h < o && u < t.length;
              h++
            )
              (f[h] = new d.default()),
                (u += f[h].read(t.subarray(u, t.length)));
            return f;
          }
          function o(e, t, r) {
            for (
              var n = [], i = c.default.getPublicMpiCount(t);
              i < r.length;
              i++
            )
              n.push(r[i].write());
            var a = l.default.concatUint8Array(n),
              o = s(e)(a);
            return l.default.concatUint8Array([a, o]);
          }
          function u(e, t, r) {
            return e.produce_key(t, c.default.cipher[r].keySize);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var f = n(e("./public_key.js")),
            h = n(e("../enums.js")),
            l = n(e("../util.js")),
            c = n(e("../crypto")),
            d = n(e("../type/mpi.js")),
            p = n(e("../type/s2k.js"));
          ((i.prototype = new f.default()).constructor = i),
            (i.prototype.read = function (e) {
              var t = this.readPublicKey(e);
              if ((e = e.subarray(t, e.length))[0]) this.encrypted = e;
              else {
                var r = a("mod", e.subarray(1, e.length), this.algorithm);
                if (r instanceof Error) throw r;
                (this.mpi = this.mpi.concat(r)), (this.isDecrypted = !0);
              }
            }),
            (i.prototype.write = function () {
              var e = [this.writePublicKey()];
              return (
                this.encrypted
                  ? e.push(this.encrypted)
                  : (e.push(new Uint8Array([0])),
                    e.push(o("mod", this.algorithm, this.mpi))),
                l.default.concatUint8Array(e)
              );
            }),
            (i.prototype.encrypt = function (e) {
              if (!this.isDecrypted || e) {
                if (!e)
                  throw new Error(
                    "The key must be decrypted before removing passphrase protection.",
                  );
                var t = new p.default(),
                  r = o("sha1", this.algorithm, this.mpi),
                  n = u(t, e, "aes256"),
                  i = c.default.cipher.aes256.blockSize,
                  s = c.default.random.getRandomBytes(i),
                  a = [
                    new Uint8Array([
                      254,
                      h.default.write(h.default.symmetric, "aes256"),
                    ]),
                  ];
                a.push(t.write()),
                  a.push(s),
                  a.push(c.default.cfb.normalEncrypt("aes256", n, r, s)),
                  (this.encrypted = l.default.concatUint8Array(a));
              } else this.encrypted = null;
            }),
            (i.prototype.decrypt = function (e) {
              if (this.isDecrypted) return !0;
              var t,
                r,
                n = 0,
                i = this.encrypted[n++];
              if (255 === i || 254 === i) {
                (t = this.encrypted[n++]),
                  (t = h.default.read(h.default.symmetric, t));
                var s = new p.default();
                (n += s.read(
                  this.encrypted.subarray(n, this.encrypted.length),
                )),
                  (r = u(s, e, t));
              } else
                (t = i),
                  (t = h.default.read(h.default.symmetric, t)),
                  (r = c.default.hash.md5(e));
              var o = this.encrypted.subarray(
                n,
                n + c.default.cipher[t].blockSize,
              );
              n += o.length;
              var f,
                l = this.encrypted.subarray(n, this.encrypted.length);
              f = c.default.cfb.normalDecrypt(t, r, l, o);
              var d = a(254 === i ? "sha1" : "mod", f, this.algorithm);
              return (
                !(d instanceof Error) &&
                ((this.mpi = this.mpi.concat(d)),
                (this.isDecrypted = !0),
                (this.encrypted = null),
                !0)
              );
            }),
            (i.prototype.generate = function (e) {
              var t = this;
              return c.default.generateMpi(t.algorithm, e).then(function (e) {
                (t.mpi = e), (t.isDecrypted = !0);
              });
            }),
            (i.prototype.clearPrivateMPIs = function () {
              if (!this.encrypted)
                throw new Error(
                  "If secret key is not encrypted, clearing private MPIs is irreversible.",
                );
              (this.mpi = this.mpi.slice(
                0,
                c.default.getPublicMpiCount(this.algorithm),
              )),
                (this.isDecrypted = !1);
            });
        },
        {
          "../crypto": 24,
          "../enums.js": 35,
          "../type/mpi.js": 68,
          "../type/s2k.js": 69,
          "../util.js": 70,
          "./public_key.js": 53,
        },
      ],
      57: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            s.default.call(this), (this.tag = a.default.packet.secretSubkey);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("./secret_key.js")),
            a = n(e("../enums.js"));
          (i.prototype = new s.default()).constructor = i;
        },
        { "../enums.js": 35, "./secret_key.js": 56 },
      ],
      58: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = u.default.packet.signature),
              (this.version = 4),
              (this.signatureType = null),
              (this.hashAlgorithm = null),
              (this.publicKeyAlgorithm = null),
              (this.signatureData = null),
              (this.unhashedSubpackets = null),
              (this.signedHashValue = null),
              (this.created = new Date()),
              (this.signatureExpirationTime = null),
              (this.signatureNeverExpires = !0),
              (this.exportable = null),
              (this.trustLevel = null),
              (this.trustAmount = null),
              (this.regularExpression = null),
              (this.revocable = null),
              (this.keyExpirationTime = null),
              (this.keyNeverExpires = null),
              (this.preferredSymmetricAlgorithms = null),
              (this.revocationKeyClass = null),
              (this.revocationKeyAlgorithm = null),
              (this.revocationKeyFingerprint = null),
              (this.issuerKeyId = new l.default()),
              (this.notation = null),
              (this.preferredHashAlgorithms = null),
              (this.preferredCompressionAlgorithms = null),
              (this.keyServerPreferences = null),
              (this.preferredKeyServer = null),
              (this.isPrimaryUserID = null),
              (this.policyURI = null),
              (this.keyFlags = null),
              (this.signersUserId = null),
              (this.reasonForRevocationFlag = null),
              (this.reasonForRevocationString = null),
              (this.features = null),
              (this.signatureTargetPublicKeyAlgorithm = null),
              (this.signatureTargetHashAlgorithm = null),
              (this.signatureTargetHash = null),
              (this.embeddedSignature = null),
              (this.verified = !1);
          }
          function s(e, t) {
            var r = [];
            return (
              r.push(o.default.writeSimpleLength(t.length + 1)),
              r.push(new Uint8Array([e])),
              r.push(t),
              a.default.concatUint8Array(r)
            );
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var a = n(e("../util.js")),
            o = n(e("./packet.js")),
            u = n(e("../enums.js")),
            f = n(e("../crypto")),
            h = n(e("../type/mpi.js")),
            l = n(e("../type/keyid.js"));
          (i.prototype.read = function (e) {
            var t = 0;
            switch (((this.version = e[t++]), this.version)) {
              case 3:
                5 !== e[t++] &&
                  a.default.print_debug(
                    "packet/signature.js\ninvalid One-octet length of following hashed material.MUST be 5. @:" +
                      (t - 1),
                  );
                var r = t;
                (this.signatureType = e[t++]),
                  (this.created = a.default.readDate(e.subarray(t, t + 4))),
                  (t += 4),
                  (this.signatureData = e.subarray(r, t)),
                  this.issuerKeyId.read(e.subarray(t, t + 8)),
                  (t += 8),
                  (this.publicKeyAlgorithm = e[t++]),
                  (this.hashAlgorithm = e[t++]);
                break;
              case 4:
                (this.signatureType = e[t++]),
                  (this.publicKeyAlgorithm = e[t++]),
                  (this.hashAlgorithm = e[t++]);
                var n = function (e) {
                  for (
                    var t = a.default.readNumber(e.subarray(0, 2)), r = 2;
                    r < 2 + t;

                  ) {
                    var n = o.default.readSimpleLength(e.subarray(r, e.length));
                    (r += n.offset),
                      this.read_sub_packet(e.subarray(r, r + n.len)),
                      (r += n.len);
                  }
                  return r;
                };
                (t += n.call(this, e.subarray(t, e.length), !0)),
                  (this.signatureData = e.subarray(0, t));
                var i = t;
                (t += n.call(this, e.subarray(t, e.length), !1)),
                  (this.unhashedSubpackets = e.subarray(i, t));
                break;
              default:
                throw new Error(
                  "Version " +
                    this.version +
                    " of the signature is unsupported.",
                );
            }
            (this.signedHashValue = e.subarray(t, t + 2)),
              (t += 2),
              (this.signature = e.subarray(t, e.length));
          }),
            (i.prototype.write = function () {
              var e = [];
              switch (this.version) {
                case 3:
                  e.push(new Uint8Array([3, 5])),
                    e.push(new Uint8Array([this.signatureType])),
                    e.push(a.default.writeDate(this.created)),
                    e.push(this.issuerKeyId.write()),
                    e.push(
                      new Uint8Array([
                        u.default.write(
                          u.default.publicKey,
                          this.publicKeyAlgorithm,
                        ),
                        u.default.write(u.default.hash, this.hashAlgorithm),
                      ]),
                    );
                  break;
                case 4:
                  e.push(this.signatureData),
                    e.push(
                      this.unhashedSubpackets
                        ? this.unhashedSubpackets
                        : a.default.writeNumber(0, 2),
                    );
              }
              return (
                e.push(this.signedHashValue),
                e.push(this.signature),
                a.default.concatUint8Array(e)
              );
            }),
            (i.prototype.sign = function (e, t) {
              var r = u.default.write(u.default.signature, this.signatureType),
                n = u.default.write(
                  u.default.publicKey,
                  this.publicKeyAlgorithm,
                ),
                i = u.default.write(u.default.hash, this.hashAlgorithm),
                s = [new Uint8Array([4, r, n, i])];
              (this.issuerKeyId = e.getKeyId()),
                s.push(this.write_all_sub_packets()),
                (this.signatureData = a.default.concatUint8Array(s));
              var o = this.calculateTrailer(),
                h = null;
              switch (this.version) {
                case 3:
                  h = a.default.concatUint8Array([
                    this.toSign(r, t),
                    new Uint8Array([r]),
                    a.default.writeDate(this.created),
                  ]);
                  break;
                case 4:
                  h = a.default.concatUint8Array([
                    this.toSign(r, t),
                    this.signatureData,
                    o,
                  ]);
                  break;
                default:
                  throw new Error(
                    "Version " +
                      this.version +
                      " of the signature is unsupported.",
                  );
              }
              var l = f.default.hash.digest(i, h);
              (this.signedHashValue = l.subarray(0, 2)),
                (this.signature = f.default.signature.sign(i, n, e.mpi, h));
            }),
            (i.prototype.write_all_sub_packets = function () {
              var e,
                t = u.default.signatureSubpacket,
                r = [];
              if (
                (null !== this.created &&
                  r.push(
                    s(
                      t.signature_creation_time,
                      a.default.writeDate(this.created),
                    ),
                  ),
                null !== this.signatureExpirationTime &&
                  r.push(
                    s(
                      t.signature_expiration_time,
                      a.default.writeNumber(this.signatureExpirationTime, 4),
                    ),
                  ),
                null !== this.exportable &&
                  r.push(
                    s(
                      t.exportable_certification,
                      new Uint8Array([this.exportable ? 1 : 0]),
                    ),
                  ),
                null !== this.trustLevel &&
                  ((e = new Uint8Array([this.trustLevel, this.trustAmount])),
                  r.push(s(t.trust_signature, e))),
                null !== this.regularExpression &&
                  r.push(s(t.regular_expression, this.regularExpression)),
                null !== this.revocable &&
                  r.push(
                    s(t.revocable, new Uint8Array([this.revocable ? 1 : 0])),
                  ),
                null !== this.keyExpirationTime &&
                  r.push(
                    s(
                      t.key_expiration_time,
                      a.default.writeNumber(this.keyExpirationTime, 4),
                    ),
                  ),
                null !== this.preferredSymmetricAlgorithms &&
                  ((e = a.default.str2Uint8Array(
                    a.default.bin2str(this.preferredSymmetricAlgorithms),
                  )),
                  r.push(s(t.preferred_symmetric_algorithms, e))),
                null !== this.revocationKeyClass &&
                  ((e = new Uint8Array([
                    this.revocationKeyClass,
                    this.revocationKeyAlgorithm,
                  ])),
                  (e = a.default.concatUint8Array([
                    e,
                    this.revocationKeyFingerprint,
                  ])),
                  r.push(s(t.revocation_key, e))),
                this.issuerKeyId.isNull() ||
                  r.push(s(t.issuer, this.issuerKeyId.write())),
                null !== this.notation)
              )
                for (var n in this.notation)
                  if (this.notation.hasOwnProperty(n)) {
                    var i = this.notation[n];
                    (e = [new Uint8Array([128, 0, 0, 0])]).push(
                      a.default.writeNumber(n.length, 2),
                    ),
                      e.push(a.default.writeNumber(i.length, 2)),
                      e.push(a.default.str2Uint8Array(n + i)),
                      (e = a.default.concatUint8Array(e)),
                      r.push(s(t.notation_data, e));
                  }
              null !== this.preferredHashAlgorithms &&
                ((e = a.default.str2Uint8Array(
                  a.default.bin2str(this.preferredHashAlgorithms),
                )),
                r.push(s(t.preferred_hash_algorithms, e))),
                null !== this.preferredCompressionAlgorithms &&
                  ((e = a.default.str2Uint8Array(
                    a.default.bin2str(this.preferredCompressionAlgorithms),
                  )),
                  r.push(s(t.preferred_compression_algorithms, e))),
                null !== this.keyServerPreferences &&
                  ((e = a.default.str2Uint8Array(
                    a.default.bin2str(this.keyServerPreferences),
                  )),
                  r.push(s(t.key_server_preferences, e))),
                null !== this.preferredKeyServer &&
                  r.push(
                    s(
                      t.preferred_key_server,
                      a.default.str2Uint8Array(this.preferredKeyServer),
                    ),
                  ),
                null !== this.isPrimaryUserID &&
                  r.push(
                    s(
                      t.primary_user_id,
                      new Uint8Array([this.isPrimaryUserID ? 1 : 0]),
                    ),
                  ),
                null !== this.policyURI &&
                  r.push(
                    s(t.policy_uri, a.default.str2Uint8Array(this.policyURI)),
                  ),
                null !== this.keyFlags &&
                  ((e = a.default.str2Uint8Array(
                    a.default.bin2str(this.keyFlags),
                  )),
                  r.push(s(t.key_flags, e))),
                null !== this.signersUserId &&
                  r.push(
                    s(
                      t.signers_user_id,
                      a.default.str2Uint8Array(this.signersUserId),
                    ),
                  ),
                null !== this.reasonForRevocationFlag &&
                  ((e = a.default.str2Uint8Array(
                    String.fromCharCode(this.reasonForRevocationFlag) +
                      this.reasonForRevocationString,
                  )),
                  r.push(s(t.reason_for_revocation, e))),
                null !== this.features &&
                  ((e = a.default.str2Uint8Array(
                    a.default.bin2str(this.features),
                  )),
                  r.push(s(t.features, e))),
                null !== this.signatureTargetPublicKeyAlgorithm &&
                  ((e = [
                    new Uint8Array([
                      this.signatureTargetPublicKeyAlgorithm,
                      this.signatureTargetHashAlgorithm,
                    ]),
                  ]).push(a.default.str2Uint8Array(this.signatureTargetHash)),
                  (e = a.default.concatUint8Array(e)),
                  r.push(s(t.signature_target, e))),
                null !== this.embeddedSignature &&
                  r.push(
                    s(t.embedded_signature, this.embeddedSignature.write()),
                  );
              var o = a.default.concatUint8Array(r),
                f = a.default.writeNumber(o.length, 2);
              return a.default.concatUint8Array([f, o]);
            }),
            (i.prototype.read_sub_packet = function (e) {
              function t(e, t) {
                this[e] = [];
                for (var r = 0; r < t.length; r++) this[e].push(t[r]);
              }
              var r,
                n = 0,
                s = 127 & e[n++];
              switch (s) {
                case 2:
                  this.created = a.default.readDate(e.subarray(n, e.length));
                  break;
                case 3:
                  (r = a.default.readNumber(e.subarray(n, e.length))),
                    (this.signatureNeverExpires = 0 === r),
                    (this.signatureExpirationTime = r);
                  break;
                case 4:
                  this.exportable = 1 === e[n++];
                  break;
                case 5:
                  (this.trustLevel = e[n++]), (this.trustAmount = e[n++]);
                  break;
                case 6:
                  this.regularExpression = e[n];
                  break;
                case 7:
                  this.revocable = 1 === e[n++];
                  break;
                case 9:
                  (r = a.default.readNumber(e.subarray(n, e.length))),
                    (this.keyExpirationTime = r),
                    (this.keyNeverExpires = 0 === r);
                  break;
                case 11:
                  t.call(
                    this,
                    "preferredSymmetricAlgorithms",
                    e.subarray(n, e.length),
                  );
                  break;
                case 12:
                  (this.revocationKeyClass = e[n++]),
                    (this.revocationKeyAlgorithm = e[n++]),
                    (this.revocationKeyFingerprint = e.subarray(n, 20));
                  break;
                case 16:
                  this.issuerKeyId.read(e.subarray(n, e.length));
                  break;
                case 20:
                  if (128 === e[n]) {
                    n += 4;
                    var o = a.default.readNumber(e.subarray(n, n + 2));
                    n += 2;
                    var u = a.default.readNumber(e.subarray(n, n + 2));
                    n += 2;
                    var h = a.default.Uint8Array2str(e.subarray(n, n + o)),
                      l = a.default.Uint8Array2str(
                        e.subarray(n + o, n + o + u),
                      );
                    (this.notation = this.notation || {}),
                      (this.notation[h] = l);
                  } else
                    a.default.print_debug("Unsupported notation flag " + e[n]);
                  break;
                case 21:
                  t.call(
                    this,
                    "preferredHashAlgorithms",
                    e.subarray(n, e.length),
                  );
                  break;
                case 22:
                  t.call(
                    this,
                    "preferredCompressionAlgorithms",
                    e.subarray(n, e.length),
                  );
                  break;
                case 23:
                  t.call(
                    this,
                    "keyServerPreferencess",
                    e.subarray(n, e.length),
                  );
                  break;
                case 24:
                  this.preferredKeyServer = a.default.Uint8Array2str(
                    e.subarray(n, e.length),
                  );
                  break;
                case 25:
                  this.isPrimaryUserID = 0 !== e[n++];
                  break;
                case 26:
                  this.policyURI = a.default.Uint8Array2str(
                    e.subarray(n, e.length),
                  );
                  break;
                case 27:
                  t.call(this, "keyFlags", e.subarray(n, e.length));
                  break;
                case 28:
                  this.signersUserId += a.default.Uint8Array2str(
                    e.subarray(n, e.length),
                  );
                  break;
                case 29:
                  (this.reasonForRevocationFlag = e[n++]),
                    (this.reasonForRevocationString = a.default.Uint8Array2str(
                      e.subarray(n, e.length),
                    ));
                  break;
                case 30:
                  t.call(this, "features", e.subarray(n, e.length));
                  break;
                case 31:
                  (this.signatureTargetPublicKeyAlgorithm = e[n++]),
                    (this.signatureTargetHashAlgorithm = e[n++]);
                  var c = f.default.getHashByteLength(
                    this.signatureTargetHashAlgorithm,
                  );
                  this.signatureTargetHash = a.default.Uint8Array2str(
                    e.subarray(n, n + c),
                  );
                  break;
                case 32:
                  (this.embeddedSignature = new i()),
                    this.embeddedSignature.read(e.subarray(n, e.length));
                  break;
                default:
                  a.default.print_debug(
                    "Unknown signature subpacket type " + s + " @:" + n,
                  );
              }
            }),
            (i.prototype.toSign = function (e, t) {
              var r = u.default.signature;
              switch (e) {
                case r.binary:
                case r.text:
                  return t.getBytes();
                case r.standalone:
                  return new Uint8Array(0);
                case r.cert_generic:
                case r.cert_persona:
                case r.cert_casual:
                case r.cert_positive:
                case r.cert_revocation:
                  var n, i;
                  if (void 0 !== t.userid) (i = 180), (n = t.userid);
                  else {
                    if (void 0 === t.userattribute)
                      throw new Error(
                        "Either a userid or userattribute packet needs to be supplied for certification.",
                      );
                    (i = 209), (n = t.userattribute);
                  }
                  var s = n.write();
                  if (4 === this.version)
                    return a.default.concatUint8Array([
                      this.toSign(r.key, t),
                      new Uint8Array([i]),
                      a.default.writeNumber(s.length, 4),
                      s,
                    ]);
                  if (3 === this.version)
                    return a.default.concatUint8Array([
                      this.toSign(r.key, t),
                      s,
                    ]);
                  break;
                case r.subkey_binding:
                case r.subkey_revocation:
                case r.key_binding:
                  return a.default.concatUint8Array([
                    this.toSign(r.key, t),
                    this.toSign(r.key, { key: t.bind }),
                  ]);
                case r.key:
                  if (void 0 === t.key)
                    throw new Error(
                      "Key packet is required for this signature.",
                    );
                  return t.key.writeOld();
                case r.key_revocation:
                  return this.toSign(r.key, t);
                case r.timestamp:
                  return new Uint8Array(0);
                case r.third_party:
                  throw new Error("Not implemented");
                default:
                  throw new Error("Unknown signature type.");
              }
            }),
            (i.prototype.calculateTrailer = function () {
              if (3 === this.version) return new Uint8Array(0);
              var e = new Uint8Array([4, 255]);
              return a.default.concatUint8Array([
                e,
                a.default.writeNumber(this.signatureData.length, 4),
              ]);
            }),
            (i.prototype.verify = function (e, t) {
              var r = u.default.write(u.default.signature, this.signatureType),
                n = u.default.write(
                  u.default.publicKey,
                  this.publicKeyAlgorithm,
                ),
                i = u.default.write(u.default.hash, this.hashAlgorithm),
                s = this.toSign(r, t),
                o = this.calculateTrailer(),
                l = 0;
              n > 0 && n < 4 ? (l = 1) : 17 === n && (l = 2);
              for (var c = [], d = 0, p = 0; p < l; p++)
                (c[p] = new h.default()),
                  (d += c[p].read(
                    this.signature.subarray(d, this.signature.length),
                  ));
              return (
                (this.verified = f.default.signature.verify(
                  n,
                  i,
                  c,
                  e.mpi,
                  a.default.concatUint8Array([s, this.signatureData, o]),
                )),
                this.verified
              );
            }),
            (i.prototype.isExpired = function () {
              return (
                !this.signatureNeverExpires &&
                Date.now() >
                  this.created.getTime() + 1e3 * this.signatureExpirationTime
              );
            }),
            (i.prototype.postCloneTypeFix = function () {
              this.issuerKeyId = l.default.fromClone(this.issuerKeyId);
            });
        },
        {
          "../crypto": 24,
          "../enums.js": 35,
          "../type/keyid.js": 67,
          "../type/mpi.js": 68,
          "../util.js": 70,
          "./packet.js": 51,
        },
      ],
      59: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = o.default.packet.symEncryptedAEADProtected),
              (this.version = u),
              (this.iv = null),
              (this.encrypted = null),
              (this.packets = null);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../util.js")),
            a = n(e("../crypto")),
            o = n(e("../enums.js")),
            u = 1,
            f = a.default.gcm.ivLength;
          (i.prototype.read = function (e) {
            var t = 0;
            if (e[t] !== u) throw new Error("Invalid packet version.");
            t++,
              (this.iv = e.subarray(t, f + t)),
              (t += f),
              (this.encrypted = e.subarray(t, e.length));
          }),
            (i.prototype.write = function () {
              return s.default.concatUint8Array([
                new Uint8Array([this.version]),
                this.iv,
                this.encrypted,
              ]);
            }),
            (i.prototype.decrypt = function (e, t) {
              var r = this;
              return a.default.gcm
                .decrypt(e, this.encrypted, t, this.iv)
                .then(function (e) {
                  r.packets.read(e);
                });
            }),
            (i.prototype.encrypt = function (e, t) {
              var r = this;
              return (
                (this.iv = a.default.random.getRandomValues(new Uint8Array(f))),
                a.default.gcm
                  .encrypt(e, this.packets.write(), t, this.iv)
                  .then(function (e) {
                    r.encrypted = e;
                  })
              );
            });
        },
        { "../crypto": 24, "../enums.js": 35, "../util.js": 70 },
      ],
      60: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = f.default.packet.symEncryptedIntegrityProtected),
              (this.version = d),
              (this.encrypted = null),
              (this.modification = !1),
              (this.packets = null);
          }
          function s(e, t, r, n) {
            return l
              ? (function (e, t, r, n) {
                  n = new c(n);
                  var i = new c(new Uint8Array(u.default.cipher[e].blockSize)),
                    s = new l.createCipheriv(
                      "aes-" + e.substr(3, 3) + "-cfb",
                      n,
                      i,
                    ).update(new c(o.default.concatUint8Array([t, r])));
                  return new Uint8Array(s);
                })(e, t, r, n)
              : h.default.AES_CFB.encrypt(
                  o.default.concatUint8Array([t, r]),
                  n,
                );
          }
          function a(e, t, r) {
            var n = void 0;
            return (n = l
              ? (function (e, t, r) {
                  (t = new c(t)), (r = new c(r));
                  var n = new c(new Uint8Array(u.default.cipher[e].blockSize)),
                    i = new l.createDecipheriv(
                      "aes-" + e.substr(3, 3) + "-cfb",
                      r,
                      n,
                    ).update(t);
                  return new Uint8Array(i);
                })(e, t, r)
              : h.default.AES_CFB.decrypt(t, r)).subarray(
              u.default.cipher[e].blockSize + 2,
              n.length,
            );
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var o = n(e("../util.js")),
            u = n(e("../crypto")),
            f = n(e("../enums.js")),
            h = n(e("asmcrypto-lite")),
            l = o.default.getNodeCrypto(),
            c = o.default.getNodeBuffer(),
            d = 1;
          (i.prototype.read = function (e) {
            if (e[0] !== d) throw new Error("Invalid packet version.");
            this.encrypted = e.subarray(1, e.length);
          }),
            (i.prototype.write = function () {
              return o.default.concatUint8Array([
                new Uint8Array([d]),
                this.encrypted,
              ]);
            }),
            (i.prototype.encrypt = function (e, t) {
              var r = this.packets.write(),
                n = u.default.getPrefixRandom(e),
                i = new Uint8Array([n[n.length - 2], n[n.length - 1]]),
                a = o.default.concatUint8Array([n, i]),
                f = new Uint8Array([211, 20]),
                h = o.default.concatUint8Array([r, f]),
                l = u.default.hash.sha1(o.default.concatUint8Array([a, h]));
              return (
                (h = o.default.concatUint8Array([h, l])),
                "aes" === e.substr(0, 3)
                  ? (this.encrypted = s(e, a, h, t))
                  : ((this.encrypted = u.default.cfb.encrypt(n, e, h, t, !1)),
                    (this.encrypted = this.encrypted.subarray(
                      0,
                      a.length + h.length,
                    ))),
                Promise.resolve()
              );
            }),
            (i.prototype.decrypt = function (e, t) {
              var r = void 0;
              r =
                "aes" === e.substr(0, 3)
                  ? a(e, this.encrypted, t)
                  : u.default.cfb.decrypt(e, t, this.encrypted, !1);
              var n = u.default.cfb.mdc(e, t, this.encrypted),
                i = r.subarray(0, r.length - 20),
                s = o.default.concatUint8Array([n, i]);
              this.hash = o.default.Uint8Array2str(u.default.hash.sha1(s));
              var f = o.default.Uint8Array2str(
                r.subarray(r.length - 20, r.length),
              );
              if (this.hash !== f) throw new Error("Modification detected.");
              return (
                this.packets.read(r.subarray(0, r.length - 22)),
                Promise.resolve()
              );
            });
        },
        {
          "../crypto": 24,
          "../enums.js": 35,
          "../util.js": 70,
          "asmcrypto-lite": 1,
        },
      ],
      61: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = o.default.packet.symEncryptedSessionKey),
              (this.version = 4),
              (this.sessionKey = null),
              (this.sessionKeyEncryptionAlgorithm = null),
              (this.sessionKeyAlgorithm = "aes256"),
              (this.encrypted = null),
              (this.s2k = new a.default());
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../util.js")),
            a = n(e("../type/s2k.js")),
            o = n(e("../enums.js")),
            u = n(e("../crypto"));
          (i.prototype.read = function (e) {
            this.version = e[0];
            var t = o.default.read(o.default.symmetric, e[1]),
              r = this.s2k.read(e.subarray(2, e.length)) + 2;
            r < e.length
              ? ((this.encrypted = e.subarray(r, e.length)),
                (this.sessionKeyEncryptionAlgorithm = t))
              : (this.sessionKeyAlgorithm = t);
          }),
            (i.prototype.write = function () {
              var e =
                  null === this.encrypted
                    ? this.sessionKeyAlgorithm
                    : this.sessionKeyEncryptionAlgorithm,
                t = s.default.concatUint8Array([
                  new Uint8Array([
                    this.version,
                    o.default.write(o.default.symmetric, e),
                  ]),
                  this.s2k.write(),
                ]);
              return (
                null !== this.encrypted &&
                  (t = s.default.concatUint8Array([t, this.encrypted])),
                t
              );
            }),
            (i.prototype.decrypt = function (e) {
              var t =
                  null !== this.sessionKeyEncryptionAlgorithm
                    ? this.sessionKeyEncryptionAlgorithm
                    : this.sessionKeyAlgorithm,
                r = u.default.cipher[t].keySize,
                n = this.s2k.produce_key(e, r);
              if (null === this.encrypted) this.sessionKey = n;
              else {
                var i = u.default.cfb.normalDecrypt(t, n, this.encrypted, null);
                (this.sessionKeyAlgorithm = o.default.read(
                  o.default.symmetric,
                  i[0],
                )),
                  (this.sessionKey = i.subarray(1, i.length));
              }
            }),
            (i.prototype.encrypt = function (e) {
              var t =
                null !== this.sessionKeyEncryptionAlgorithm
                  ? this.sessionKeyEncryptionAlgorithm
                  : this.sessionKeyAlgorithm;
              this.sessionKeyEncryptionAlgorithm = t;
              var r,
                n = u.default.cipher[t].keySize,
                i = this.s2k.produce_key(e, n),
                a = new Uint8Array([
                  o.default.write(
                    o.default.symmetric,
                    this.sessionKeyAlgorithm,
                  ),
                ]);
              null === this.sessionKey &&
                (this.sessionKey = u.default.getRandomBytes(
                  u.default.cipher[this.sessionKeyAlgorithm].keySize,
                )),
                (r = s.default.concatUint8Array([a, this.sessionKey])),
                (this.encrypted = u.default.cfb.normalEncrypt(t, i, r, null));
            }),
            (i.prototype.postCloneTypeFix = function () {
              this.s2k = a.default.fromClone(this.s2k);
            });
        },
        {
          "../crypto": 24,
          "../enums.js": 35,
          "../type/s2k.js": 69,
          "../util.js": 70,
        },
      ],
      62: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = a.default.packet.symmetricallyEncrypted),
              (this.encrypted = null),
              (this.packets = null),
              (this.ignore_mdc_error = o.default.ignore_mdc_error);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../crypto")),
            a = n(e("../enums.js")),
            o = n(e("../config"));
          (i.prototype.read = function (e) {
            this.encrypted = e;
          }),
            (i.prototype.write = function () {
              return this.encrypted;
            }),
            (i.prototype.decrypt = function (e, t) {
              var r = s.default.cfb.decrypt(e, t, this.encrypted, !0);
              if (
                !this.ignore_mdc_error &&
                ("aes128" === e || "aes192" === e || "aes256" === e)
              )
                throw new Error(
                  "Decryption failed due to missing MDC in combination with modern cipher.",
                );
              return this.packets.read(r), Promise.resolve();
            }),
            (i.prototype.encrypt = function (e, t) {
              var r = this.packets.write();
              return (
                (this.encrypted = s.default.cfb.encrypt(
                  s.default.getPrefixRandom(e),
                  e,
                  r,
                  t,
                  !0,
                )),
                Promise.resolve()
              );
            });
        },
        { "../config": 10, "../crypto": 24, "../enums.js": 35 },
      ],
      63: [
        function (e, t, r) {
          "use strict";
          function n() {
            this.tag = i.default.packet.trust;
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = n);
          var i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(e("../enums.js"));
          n.prototype.read = function () {};
        },
        { "../enums.js": 35 },
      ],
      64: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = o.default.packet.userAttribute), (this.attributes = []);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../util.js")),
            a = n(e("./packet.js")),
            o = n(e("../enums.js"));
          (i.prototype.read = function (e) {
            for (var t = 0; t < e.length; ) {
              var r = a.default.readSimpleLength(e.subarray(t, e.length));
              (t += r.offset),
                this.attributes.push(
                  s.default.Uint8Array2str(e.subarray(t, t + r.len)),
                ),
                (t += r.len);
            }
          }),
            (i.prototype.write = function () {
              for (var e = [], t = 0; t < this.attributes.length; t++)
                e.push(a.default.writeSimpleLength(this.attributes[t].length)),
                  e.push(s.default.str2Uint8Array(this.attributes[t]));
              return s.default.concatUint8Array(e);
            }),
            (i.prototype.equals = function (e) {
              return (
                !!(e && e instanceof i) &&
                this.attributes.every(function (t, r) {
                  return t === e.attributes[r];
                })
              );
            });
        },
        { "../enums.js": 35, "../util.js": 70, "./packet.js": 51 },
      ],
      65: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.tag = a.default.packet.userid), (this.userid = "");
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../util.js")),
            a = n(e("../enums.js"));
          (i.prototype.read = function (e) {
            this.userid = s.default.decode_utf8(s.default.Uint8Array2str(e));
          }),
            (i.prototype.write = function () {
              return s.default.str2Uint8Array(
                s.default.encode_utf8(this.userid),
              );
            });
        },
        { "../enums.js": 35, "../util.js": 70 },
      ],
      66: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i(e) {
            if (!(this instanceof i)) return new i(e);
            this.packets = e || new a.default.List();
          }
          function s(e) {
            var t = new a.default.List();
            return t.read(e), new i(t);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.Signature = i),
            (r.readArmored = function (e) {
              return s(u.default.decode(e).data);
            }),
            (r.read = s);
          var a = n(e("./packet")),
            o = n(e("./enums.js")),
            u = n(e("./encoding/armor.js"));
          i.prototype.armor = function () {
            return u.default.encode(
              o.default.armor.signature,
              this.packets.write(),
            );
          };
        },
        { "./encoding/armor.js": 33, "./enums.js": 35, "./packet": 47 },
      ],
      67: [
        function (e, t, r) {
          "use strict";
          function n() {
            this.bytes = "";
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = n);
          var i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(e("../util.js"));
          (n.prototype.read = function (e) {
            this.bytes = i.default.Uint8Array2str(e.subarray(0, 8));
          }),
            (n.prototype.write = function () {
              return i.default.str2Uint8Array(this.bytes);
            }),
            (n.prototype.toHex = function () {
              return i.default.hexstrdump(this.bytes);
            }),
            (n.prototype.equals = function (e) {
              return this.bytes === e.bytes;
            }),
            (n.prototype.isNull = function () {
              return "" === this.bytes;
            }),
            (n.mapToHex = function (e) {
              return e.toHex();
            }),
            (n.fromClone = function (e) {
              var t = new n();
              return (t.bytes = e.bytes), t;
            }),
            (n.fromId = function (e) {
              var t = new n();
              return t.read(i.default.str2Uint8Array(i.default.hex2bin(e))), t;
            });
        },
        { "../util.js": 70 },
      ],
      68: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            this.data = null;
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../crypto/public_key/jsbn.js")),
            a = n(e("../util.js"));
          (i.prototype.read = function (e) {
            ("string" == typeof e || String.prototype.isPrototypeOf(e)) &&
              (e = a.default.str2Uint8Array(e));
            var t = (e[0] << 8) | e[1],
              r = Math.ceil(t / 8),
              n = a.default.Uint8Array2str(e.subarray(2, 2 + r));
            return this.fromBytes(n), 2 + r;
          }),
            (i.prototype.fromBytes = function (e) {
              this.data = new s.default(a.default.hexstrdump(e), 16);
            }),
            (i.prototype.toBytes = function () {
              return a.default.Uint8Array2str(this.write()).substr(2);
            }),
            (i.prototype.byteLength = function () {
              return this.toBytes().length;
            }),
            (i.prototype.write = function () {
              return a.default.str2Uint8Array(this.data.toMPI());
            }),
            (i.prototype.toBigInteger = function () {
              return this.data.clone();
            }),
            (i.prototype.fromBigInteger = function (e) {
              this.data = e.clone();
            }),
            (i.fromClone = function (e) {
              e.data.copyTo = s.default.prototype.copyTo;
              var t = new s.default();
              e.data.copyTo(t);
              var r = new i();
              return (r.data = t), r;
            });
        },
        { "../crypto/public_key/jsbn.js": 29, "../util.js": 70 },
      ],
      69: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            (this.algorithm = "sha256"),
              (this.type = "iterated"),
              (this.c = 96),
              (this.salt = o.default.random.getRandomBytes(8));
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../enums.js")),
            a = n(e("../util.js")),
            o = n(e("../crypto"));
          (i.prototype.get_count = function () {
            return (16 + (15 & this.c)) << (6 + (this.c >> 4));
          }),
            (i.prototype.read = function (e) {
              var t = 0;
              switch (
                ((this.type = s.default.read(s.default.s2k, e[t++])),
                (this.algorithm = s.default.read(s.default.hash, e[t++])),
                this.type)
              ) {
                case "simple":
                  break;
                case "salted":
                  (this.salt = e.subarray(t, t + 8)), (t += 8);
                  break;
                case "iterated":
                  (this.salt = e.subarray(t, t + 8)),
                    (t += 8),
                    (this.c = e[t++]);
                  break;
                case "gnu":
                  if ("GNU" !== a.default.Uint8Array2str(e.subarray(t, 3)))
                    throw new Error("Unknown s2k type.");
                  t += 3;
                  var r = 1e3 + e[t++];
                  if (1001 !== r)
                    throw new Error("Unknown s2k gnu protection mode.");
                  this.type = r;
                  break;
                default:
                  throw new Error("Unknown s2k type.");
              }
              return t;
            }),
            (i.prototype.write = function () {
              var e = [
                new Uint8Array([
                  s.default.write(s.default.s2k, this.type),
                  s.default.write(s.default.hash, this.algorithm),
                ]),
              ];
              switch (this.type) {
                case "simple":
                  break;
                case "salted":
                  e.push(this.salt);
                  break;
                case "iterated":
                  e.push(this.salt), e.push(new Uint8Array([this.c]));
                  break;
                case "gnu":
                  throw new Error("GNU s2k type not supported.");
                default:
                  throw new Error("Unknown s2k type.");
              }
              return a.default.concatUint8Array(e);
            }),
            (i.prototype.produce_key = function (e, t) {
              function r(t, r) {
                var n = s.default.write(s.default.hash, r.algorithm);
                switch (r.type) {
                  case "simple":
                    return o.default.hash.digest(
                      n,
                      a.default.concatUint8Array([t, e]),
                    );
                  case "salted":
                    return o.default.hash.digest(
                      n,
                      a.default.concatUint8Array([t, r.salt, e]),
                    );
                  case "iterated":
                    for (
                      var i = [],
                        u = r.get_count(),
                        f = a.default.concatUint8Array([r.salt, e]);
                      i.length * f.length < u;

                    )
                      i.push(f);
                    return (
                      (i = a.default.concatUint8Array(i)).length > u &&
                        (i = i.subarray(0, u)),
                      o.default.hash.digest(
                        n,
                        a.default.concatUint8Array([t, i]),
                      )
                    );
                  case "gnu":
                    throw new Error("GNU s2k type not supported.");
                  default:
                    throw new Error("Unknown s2k type.");
                }
              }
              e = a.default.str2Uint8Array(a.default.encode_utf8(e));
              for (var n = [], i = 0, u = new Uint8Array(t), f = 0; f < t; f++)
                u[f] = 0;
              for (f = 0; i < t; ) {
                var h = r(u.subarray(0, f), this);
                n.push(h), (i += h.length), f++;
              }
              return a.default.concatUint8Array(n).subarray(0, t);
            }),
            (i.fromClone = function (e) {
              var t = new i();
              return (
                (t.algorithm = e.algorithm),
                (t.type = e.type),
                (t.c = e.c),
                (t.salt = e.salt),
                t
              );
            });
        },
        { "../crypto": 24, "../enums.js": 35, "../util.js": 70 },
      ],
      70: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(e("./config"));
          r.default = {
            isString: function (e) {
              return "string" == typeof e || String.prototype.isPrototypeOf(e);
            },
            isArray: function (e) {
              return Array.prototype.isPrototypeOf(e);
            },
            isUint8Array: function (e) {
              return Uint8Array.prototype.isPrototypeOf(e);
            },
            isEmailAddress: function (e) {
              if (!this.isString(e)) return !1;
              return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                e,
              );
            },
            isUserId: function (e) {
              return !!this.isString(e) && /</.test(e) && />$/.test(e);
            },
            getTransferables: function (e) {
              if (n.default.zero_copy && Object.prototype.isPrototypeOf(e)) {
                var t = [];
                return this.collectBuffers(e, t), t.length ? t : void 0;
              }
            },
            collectBuffers: function (e, t) {
              if (e)
                if (this.isUint8Array(e) && -1 === t.indexOf(e.buffer))
                  t.push(e.buffer);
                else if (Object.prototype.isPrototypeOf(e))
                  for (var r in e) this.collectBuffers(e[r], t);
            },
            readNumber: function (e) {
              for (var t = 0, r = 0; r < e.length; r++)
                t += Math.pow(256, r) * e[e.length - 1 - r];
              return t;
            },
            writeNumber: function (e, t) {
              for (var r = new Uint8Array(t), n = 0; n < t; n++)
                r[n] = (e >> (8 * (t - n - 1))) & 255;
              return r;
            },
            readDate: function (e) {
              var t = this.readNumber(e),
                r = new Date();
              return r.setTime(1e3 * t), r;
            },
            writeDate: function (e) {
              var t = Math.round(e.getTime() / 1e3);
              return this.writeNumber(t, 4);
            },
            hexdump: function (e) {
              for (var t, r = [], n = e.length, i = 0, s = 0; i < n; ) {
                for (t = e.charCodeAt(i++).toString(16); t.length < 2; )
                  t = "0" + t;
                r.push(" " + t), ++s % 32 == 0 && r.push("\n           ");
              }
              return r.join("");
            },
            hexstrdump: function (e) {
              if (null === e) return "";
              for (var t, r = [], n = e.length, i = 0; i < n; ) {
                for (t = e.charCodeAt(i++).toString(16); t.length < 2; )
                  t = "0" + t;
                r.push("" + t);
              }
              return r.join("");
            },
            hex2bin: function (e) {
              for (var t = "", r = 0; r < e.length; r += 2)
                t += String.fromCharCode(parseInt(e.substr(r, 2), 16));
              return t;
            },
            hexidump: function (e) {
              for (var t, r = [], n = e.length, i = 0; i < n; ) {
                for (t = e[i++].toString(16); t.length < 2; ) t = "0" + t;
                r.push("" + t);
              }
              return r.join("");
            },
            encode_utf8: function (e) {
              return unescape(encodeURIComponent(e));
            },
            decode_utf8: function (e) {
              if ("string" != typeof e)
                throw new Error('Parameter "utf8" is not of type string');
              try {
                return decodeURIComponent(escape(e));
              } catch (t) {
                return e;
              }
            },
            bin2str: function (e) {
              for (var t = [], r = 0; r < e.length; r++)
                t[r] = String.fromCharCode(e[r]);
              return t.join("");
            },
            str2bin: function (e) {
              for (var t = [], r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
              return t;
            },
            str2Uint8Array: function (e) {
              if ("string" != typeof e && !String.prototype.isPrototypeOf(e))
                throw new Error(
                  "str2Uint8Array: Data must be in the form of a string",
                );
              for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++)
                t[r] = e.charCodeAt(r);
              return t;
            },
            Uint8Array2str: function (e) {
              if (!Uint8Array.prototype.isPrototypeOf(e))
                throw new Error(
                  "Uint8Array2str: Data must be in the form of a Uint8Array",
                );
              for (var t = [], r = e.length, n = 0; n < r; n += 16384)
                t.push(
                  String.fromCharCode.apply(
                    String,
                    e.subarray(n, n + 16384 < r ? n + 16384 : r),
                  ),
                );
              return t.join("");
            },
            concatUint8Array: function (e) {
              var t = 0;
              e.forEach(function (e) {
                if (!Uint8Array.prototype.isPrototypeOf(e))
                  throw new Error(
                    "concatUint8Array: Data must be in the form of a Uint8Array",
                  );
                t += e.length;
              });
              var r = new Uint8Array(t),
                n = 0;
              return (
                e.forEach(function (e) {
                  r.set(e, n), (n += e.length);
                }),
                r
              );
            },
            copyUint8Array: function (e) {
              if (!Uint8Array.prototype.isPrototypeOf(e))
                throw new Error("Data must be in the form of a Uint8Array");
              var t = new Uint8Array(e.length);
              return t.set(e), t;
            },
            equalsUint8Array: function (e, t) {
              if (
                !Uint8Array.prototype.isPrototypeOf(e) ||
                !Uint8Array.prototype.isPrototypeOf(t)
              )
                throw new Error("Data must be in the form of a Uint8Array");
              if (e.length !== t.length) return !1;
              for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
              return !0;
            },
            calc_checksum: function (e) {
              for (
                var t = {
                    s: 0,
                    add: function (e) {
                      this.s = (this.s + e) % 65536;
                    },
                  },
                  r = 0;
                r < e.length;
                r++
              )
                t.add(e[r]);
              return t.s;
            },
            print_debug: function (e) {
              n.default.debug && console.log(e);
            },
            print_debug_hexstr_dump: function (e, t) {
              n.default.debug && ((e += this.hexstrdump(t)), console.log(e));
            },
            getLeftNBits: function (e, t) {
              var r = t % 8;
              if (0 === r) return e.substring(0, t / 8);
              var n = (t - r) / 8 + 1,
                i = e.substring(0, n);
              return this.shiftRight(i, 8 - r);
            },
            shiftRight: function (e, t) {
              var r = this.str2bin(e);
              if (t % 8 == 0) return e;
              for (var n = r.length - 1; n >= 0; n--)
                (r[n] >>= t % 8),
                  n > 0 && (r[n] |= (r[n - 1] << (8 - (t % 8))) & 255);
              return this.bin2str(r);
            },
            get_hashAlgorithmString: function (e) {
              switch (e) {
                case 1:
                  return "MD5";
                case 2:
                  return "SHA1";
                case 3:
                  return "RIPEMD160";
                case 8:
                  return "SHA256";
                case 9:
                  return "SHA384";
                case 10:
                  return "SHA512";
                case 11:
                  return "SHA224";
              }
              return "unknown";
            },
            getWebCrypto: function () {
              if (n.default.use_native)
                return (
                  "undefined" != typeof window &&
                  window.crypto &&
                  window.crypto.subtle
                );
            },
            getWebCryptoAll: function () {
              if (n.default.use_native && "undefined" != typeof window) {
                if (window.crypto)
                  return window.crypto.subtle || window.crypto.webkitSubtle;
                if (window.msCrypto) return window.msCrypto.subtle;
              }
            },
            promisify: function (e) {
              return function () {
                var t = arguments;
                return new Promise(function (r) {
                  r(e.apply(null, t));
                });
              };
            },
            promisifyIE11Op: function (e, t) {
              return new Promise(function (r, n) {
                (e.onerror = function () {
                  n(new Error(t));
                }),
                  (e.oncomplete = function (e) {
                    r(e.target.result);
                  });
              });
            },
            detectNode: function () {
              return "undefined" == typeof window;
            },
            getNodeCrypto: function () {
              if (this.detectNode() && n.default.use_native) return e("crypto");
            },
            getNodeBuffer: function () {
              if (this.detectNode()) return e("buffer").Buffer;
            },
          };
        },
        { "./config": 10, buffer: "buffer", crypto: "crypto" },
      ],
      71: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.path,
              r = void 0 === t ? "openpgp.worker.min.js" : t,
              n = e.worker,
              i = e.config;
            (this.worker = n || new Worker(r)),
              (this.worker.onmessage = this.onMessage.bind(this)),
              (this.worker.onerror = function (e) {
                throw new Error(
                  "Unhandled error in openpgp worker: " +
                    e.message +
                    " (" +
                    e.filename +
                    ":" +
                    e.lineno +
                    ")",
                );
              }),
              this.seedRandom(u),
              i && this.worker.postMessage({ event: "configure", config: i }),
              (this.tasks = {}),
              (this.currentID = 0);
          }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = i);
          var s = n(e("../util.js")),
            a = n(e("../crypto")),
            o = n(e("../packet")),
            u = 5e4;
          (i.prototype.getID = function () {
            return this.currentID++;
          }),
            (i.prototype.onMessage = function (e) {
              var t = e.data;
              switch (t.event) {
                case "method-return":
                  if (t.err) {
                    var r = new Error(t.err);
                    (r.workerStack = t.stack), this.tasks[t.id].reject(r);
                  } else this.tasks[t.id].resolve(t.data);
                  delete this.tasks[t.id];
                  break;
                case "request-seed":
                  this.seedRandom(2e4);
                  break;
                default:
                  throw new Error("Unknown Worker Event.");
              }
            }),
            (i.prototype.seedRandom = function (e) {
              var t = this.getRandomBuffer(e);
              this.worker.postMessage(
                { event: "seed-random", buf: t },
                s.default.getTransferables.call(s.default, t),
              );
            }),
            (i.prototype.getRandomBuffer = function (e) {
              if (!e) return null;
              var t = new Uint8Array(e);
              return a.default.random.getRandomValues(t), t;
            }),
            (i.prototype.terminate = function () {
              this.worker.terminate();
            }),
            (i.prototype.delegate = function (e, t) {
              var r = this,
                n = this.getID();
              return new Promise(function (i, a) {
                r.worker.postMessage(
                  { id: n, event: e, options: o.default.clone.clonePackets(t) },
                  s.default.getTransferables.call(s.default, t),
                ),
                  (r.tasks[n] = {
                    resolve: function (t) {
                      return i(o.default.clone.parseClonedPackets(t, e));
                    },
                    reject: a,
                  });
              });
            });
        },
        { "../crypto": 24, "../packet": 47, "../util.js": 70 },
      ],
    },
    {},
    [37],
  )(37);
});
