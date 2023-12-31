(function () {
  function h() {
    return function () {};
  }
  function aa(a) {
    return function (b) {
      this[a] = b;
    };
  }
  function k(a) {
    return function () {
      return this[a];
    };
  }
  function ba(a) {
    return function () {
      return a;
    };
  }
  var n,
    ca =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
          },
    da =
      "undefined" != typeof window && window === this
        ? this
        : "undefined" != typeof global && null != global
        ? global
        : this,
    ea = function () {
      ea = h();
      da.Symbol || (da.Symbol = fa);
    },
    fa = (function () {
      var a = 0;
      return function (b) {
        return "jscomp_symbol_" + (b || "") + a++;
      };
    })(),
    ia = function () {
      ea();
      var a = da.Symbol.iterator;
      a || (a = da.Symbol.iterator = da.Symbol("iterator"));
      "function" != typeof Array.prototype[a] &&
        ca(Array.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ha(this);
          },
        });
      ia = h();
    },
    ha = function (a) {
      var b = 0;
      return ja(function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      });
    },
    ja = function (a) {
      ia();
      a = { next: a };
      a[da.Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    ka = function (a) {
      ia();
      var b = a[Symbol.iterator];
      return b ? b.call(a) : ha(a);
    },
    la = function (a, b) {
      if (b) {
        for (var c = da, d = a.split("."), e = 0; e < d.length - 1; e++) {
          var f = d[e];
          f in c || (c[f] = {});
          c = c[f];
        }
        d = d[d.length - 1];
        e = c[d];
        f = b(e);
        f != e &&
          null != f &&
          ca(c, d, { configurable: !0, writable: !0, value: f });
      }
    };
  la("Promise", function (a) {
    function b() {
      this.l = null;
    }
    function c(a) {
      return a instanceof e
        ? a
        : new e(function (b) {
            b(a);
          });
    }
    if (a) return a;
    b.prototype.o = function (a) {
      null == this.l && ((this.l = []), this.A());
      this.l.push(a);
    };
    b.prototype.A = function () {
      var a = this;
      this.w(function () {
        a.F();
      });
    };
    var d = da.setTimeout;
    b.prototype.w = function (a) {
      d(a, 0);
    };
    b.prototype.F = function () {
      for (; this.l && this.l.length; ) {
        var a = this.l;
        this.l = [];
        for (var b = 0; b < a.length; ++b) {
          var c = a[b];
          a[b] = null;
          try {
            c();
          } catch (t) {
            this.B(t);
          }
        }
      }
      this.l = null;
    };
    b.prototype.B = function (a) {
      this.w(function () {
        throw a;
      });
    };
    var e = function (a) {
      this.o = 0;
      this.w = void 0;
      this.l = [];
      var b = this.A();
      try {
        a(b.resolve, b.reject);
      } catch (m) {
        b.reject(m);
      }
    };
    e.prototype.A = function () {
      function a(a) {
        return function (d) {
          c || ((c = !0), a.call(b, d));
        };
      }
      var b = this,
        c = !1;
      return { resolve: a(this.da), reject: a(this.B) };
    };
    e.prototype.da = function (a) {
      if (a === this)
        this.B(new TypeError("A Promise cannot resolve to itself"));
      else if (a instanceof e) this.U(a);
      else {
        a: switch (typeof a) {
          case "object":
            var b = null != a;
            break a;
          case "function":
            b = !0;
            break a;
          default:
            b = !1;
        }
        b ? this.S(a) : this.F(a);
      }
    };
    e.prototype.S = function (a) {
      var b = void 0;
      try {
        b = a.then;
      } catch (m) {
        this.B(m);
        return;
      }
      "function" == typeof b ? this.M(b, a) : this.F(a);
    };
    e.prototype.B = function (a) {
      this.H(2, a);
    };
    e.prototype.F = function (a) {
      this.H(1, a);
    };
    e.prototype.H = function (a, b) {
      if (0 != this.o)
        throw Error(
          "Cannot settle(" +
            a +
            ", " +
            b +
            "): Promise already settled in state" +
            this.o,
        );
      this.o = a;
      this.w = b;
      this.D();
    };
    e.prototype.D = function () {
      if (null != this.l) {
        for (var a = 0; a < this.l.length; ++a) f.o(this.l[a]);
        this.l = null;
      }
    };
    var f = new b();
    e.prototype.U = function (a) {
      var b = this.A();
      a.Qb(b.resolve, b.reject);
    };
    e.prototype.M = function (a, b) {
      var c = this.A();
      try {
        a.call(b, c.resolve, c.reject);
      } catch (t) {
        c.reject(t);
      }
    };
    e.prototype.then = function (a, b) {
      function c(a, b) {
        return "function" == typeof a
          ? function (b) {
              try {
                d(a(b));
              } catch (Fg) {
                f(Fg);
              }
            }
          : b;
      }
      var d,
        f,
        g = new e(function (a, b) {
          d = a;
          f = b;
        });
      this.Qb(c(a, d), c(b, f));
      return g;
    };
    e.prototype["catch"] = function (a) {
      return this.then(void 0, a);
    };
    e.prototype.Qb = function (a, b) {
      function c() {
        switch (d.o) {
          case 1:
            a(d.w);
            break;
          case 2:
            b(d.w);
            break;
          default:
            throw Error("Unexpected state: " + d.o);
        }
      }
      var d = this;
      null == this.l ? f.o(c) : this.l.push(c);
    };
    e.resolve = c;
    e.reject = function (a) {
      return new e(function (b, c) {
        c(a);
      });
    };
    e.race = function (a) {
      return new e(function (b, d) {
        for (var e = ka(a), f = e.next(); !f.done; f = e.next())
          c(f.value).Qb(b, d);
      });
    };
    e.all = function (a) {
      var b = ka(a),
        d = b.next();
      return d.done
        ? c([])
        : new e(function (a, e) {
            function f(b) {
              return function (c) {
                g[b] = c;
                l--;
                0 == l && a(g);
              };
            }
            var g = [],
              l = 0;
            do
              g.push(void 0),
                l++,
                c(d.value).Qb(f(g.length - 1), e),
                (d = b.next());
            while (!d.done);
          });
    };
    return e;
  });
  var ma;
  if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { ae: !0 },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.ae;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ma,
    ra = function () {
      this.A = !1;
      this.l = null;
      this.H = void 0;
      this.o = 1;
      this.F = 0;
      this.w = null;
    },
    sa = function (a) {
      if (a.A) throw new TypeError("Generator is already running");
      a.A = !0;
    };
  ra.prototype.B = aa("H");
  var ta = function (a, b) {
    a.w = { he: b, Ae: !0 };
    a.o = a.F;
  };
  ra.prototype["return"] = function (a) {
    this.w = { return: a };
    this.o = this.F;
  };
  var ua = function (a) {
      this.G = new ra();
      this.l = a;
    },
    xa = function (a, b) {
      sa(a.G);
      var c = a.G.l;
      if (c)
        return va(
          a,
          "return" in c
            ? c["return"]
            : function (a) {
                return { value: a, done: !0 };
              },
          b,
          a.G["return"],
        );
      a.G["return"](b);
      return wa(a);
    },
    va = function (a, b, c, d) {
      try {
        var e = b.call(a.G.l, c);
        if (!(e instanceof Object))
          throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return (a.G.A = !1), e;
        var f = e.value;
      } catch (g) {
        return (a.G.l = null), ta(a.G, g), wa(a);
      }
      a.G.l = null;
      d.call(a.G, f);
      return wa(a);
    },
    wa = function (a) {
      for (; a.G.o; )
        try {
          var b = a.l(a.G);
          if (b) return (a.G.A = !1), { value: b.value, done: !1 };
        } catch (c) {
          (a.G.H = void 0), ta(a.G, c);
        }
      a.G.A = !1;
      if (a.G.w) {
        b = a.G.w;
        a.G.w = null;
        if (b.Ae) throw b.he;
        return { value: b["return"], done: !0 };
      }
      return { value: void 0, done: !0 };
    },
    ya = function (a) {
      this.next = function (b) {
        sa(a.G);
        a.G.l ? (b = va(a, a.G.l.next, b, a.G.B)) : (a.G.B(b), (b = wa(a)));
        return b;
      };
      this["throw"] = function (b) {
        sa(a.G);
        a.G.l
          ? (b = va(a, a.G.l["throw"], b, a.G.B))
          : (ta(a.G, b), (b = wa(a)));
        return b;
      };
      this["return"] = function (b) {
        return xa(a, b);
      };
      ia();
      this[Symbol.iterator] = function () {
        return this;
      };
    },
    za = function (a) {
      function b(b) {
        return a.next(b);
      }
      function c(b) {
        return a["throw"](b);
      }
      return new Promise(function (d, e) {
        function f(a) {
          a.done ? d(a.value) : Promise.resolve(a.value).then(b, c).then(f, e);
        }
        f(a.next());
      });
    },
    Aa =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = h();
            b.prototype = a;
            return new b();
          },
    Ba = function (a, b) {
      a.prototype = Aa(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.I = b.prototype;
    };
  la("Array.prototype.fill", function (a) {
    return a
      ? a
      : function (a, c, d) {
          var b = this.length || 0;
          0 > c && (c = Math.max(0, b + c));
          if (null == d || d > b) d = b;
          d = Number(d);
          0 > d && (d = Math.max(0, b + d));
          for (c = Number(c || 0); c < d; c++) this[c] = a;
          return this;
        };
  });
  la("Object.values", function (a) {
    return a
      ? a
      : function (a) {
          var b = [],
            d;
          for (d in a)
            Object.prototype.hasOwnProperty.call(a, d) && b.push(a[d]);
          return b;
        };
  });
  la("Array.from", function (a) {
    return a
      ? a
      : function (a, c, d) {
          ia();
          c =
            null != c
              ? c
              : function (a) {
                  return a;
                };
          var b = [],
            f = a[Symbol.iterator];
          if ("function" == typeof f) {
            a = f.call(a);
            for (var g = 0; !(f = a.next()).done; )
              b.push(c.call(d, f.value, g++));
          } else
            for (f = a.length, g = 0; g < f; g++) b.push(c.call(d, a[g], g));
          return b;
        };
  });
  var Ca = Ca || {},
    p = this,
    q = function (a) {
      return void 0 !== a;
    },
    r = function (a) {
      return "string" == typeof a;
    },
    Da = function (a) {
      return "number" == typeof a;
    },
    Ea = /^[\w+/_-]+[=]{0,2}$/,
    Fa = null,
    Ga = function (a) {
      a = a.split(".");
      for (var b = p, c = 0; c < a.length; c++)
        if (((b = b[a[c]]), null == b)) return null;
      return b;
    },
    u = h(),
    Ha = function (a) {
      a.Sc = void 0;
      a.Ga = function () {
        return a.Sc ? a.Sc : (a.Sc = new a());
      };
    },
    Ia = function (a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if (
            "[object Array]" == c ||
            ("number" == typeof a.length &&
              "undefined" != typeof a.splice &&
              "undefined" != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable("splice"))
          )
            return "array";
          if (
            "[object Function]" == c ||
            ("undefined" != typeof a.call &&
              "undefined" != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable("call"))
          )
            return "function";
        } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b;
    },
    v = function (a) {
      return "array" == Ia(a);
    },
    Ja = function (a) {
      var b = Ia(a);
      return "array" == b || ("object" == b && "number" == typeof a.length);
    },
    w = function (a) {
      return "function" == Ia(a);
    },
    x = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    },
    Na = function (a) {
      return a[Ka] || (a[Ka] = ++Ma);
    },
    Ka = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    Ma = 0,
    Oa = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Pa = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    y = function (a, b, c) {
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? (y = Oa)
        : (y = Pa);
      return y.apply(null, arguments);
    },
    Qa = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b);
      };
    },
    z =
      Date.now ||
      function () {
        return +new Date();
      },
    Sa = function (a) {
      if (p.execScript) p.execScript(a, "JavaScript");
      else if (p.eval) {
        if (null == Ra) {
          try {
            p.eval("var _evalTest_ = 1;");
          } catch (d) {}
          if ("undefined" != typeof p._evalTest_) {
            try {
              delete p._evalTest_;
            } catch (d) {}
            Ra = !0;
          } else Ra = !1;
        }
        if (Ra) p.eval(a);
        else {
          var b = p.document,
            c = b.createElement("SCRIPT");
          c.type = "text/javascript";
          c.defer = !1;
          c.appendChild(b.createTextNode(a));
          b.head.appendChild(c);
          b.head.removeChild(c);
        }
      } else throw Error("goog.globalEval not available");
    },
    Ra = null,
    Ta = function (a, b) {
      var c = a.split("."),
        d = p;
      c[0] in d ||
        "undefined" == typeof d.execScript ||
        d.execScript("var " + c[0]);
      for (var e; c.length && (e = c.shift()); )
        !c.length && q(b)
          ? (d[e] = b)
          : d[e] && d[e] !== Object.prototype[e]
          ? (d = d[e])
          : (d = d[e] = {});
    },
    A = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.I = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.ui = function (a, c, f) {
        for (
          var d = Array(arguments.length - 2), e = 2;
          e < arguments.length;
          e++
        )
          d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d);
      };
    };
  var Ua = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Ua);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };
  A(Ua, Error);
  Ua.prototype.name = "CustomError";
  var Va;
  var Wa = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if (r(a)) return r(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    B = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a);
        },
    Xa = Array.prototype.filter
      ? function (a, b) {
          return Array.prototype.filter.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length, d = [], e = 0, f = r(a) ? a.split("") : a, g = 0;
            g < c;
            g++
          )
            if (g in f) {
              var l = f[g];
              b.call(void 0, l, g, a) && (d[e++] = l);
            }
          return d;
        },
    Ya = Array.prototype.map
      ? function (a, b) {
          return Array.prototype.map.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length, d = Array(c), e = r(a) ? a.split("") : a, f = 0;
            f < c;
            f++
          )
            f in e && (d[f] = b.call(void 0, e[f], f, a));
          return d;
        },
    Za = Array.prototype.some
      ? function (a, b, c) {
          return Array.prototype.some.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
          return !1;
        },
    $a = Array.prototype.every
      ? function (a, b) {
          return Array.prototype.every.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = r(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a)) return !1;
          return !0;
        },
    bb = function (a) {
      var b = ab("grecaptcha-badge"),
        c = 0;
      B(
        b,
        function (b, e, f) {
          a.call(void 0, b, e, f) && ++c;
        },
        void 0,
      );
      return c;
    },
    db = function (a) {
      a: {
        var b = cb;
        for (var c = a.length, d = r(a) ? a.split("") : a, e = 0; e < c; e++)
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
          }
        b = -1;
      }
      return 0 > b ? null : r(a) ? a.charAt(b) : a[b];
    },
    eb = function (a, b) {
      return 0 <= Wa(a, b);
    },
    fb = function (a) {
      if (!v(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
      a.length = 0;
    },
    gb = function (a, b) {
      var c = Wa(a, b),
        d;
      (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
      return d;
    },
    hb = function (a) {
      return Array.prototype.concat.apply([], arguments);
    },
    ib = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    },
    jb = function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (Ja(d)) {
          var e = a.length || 0,
            f = d.length || 0;
          a.length = e + f;
          for (var g = 0; g < f; g++) a[e + g] = d[g];
        } else a.push(d);
      }
    },
    lb = function (a, b, c, d) {
      Array.prototype.splice.apply(a, kb(arguments, 1));
    },
    kb = function (a, b, c) {
      return 2 >= arguments.length
        ? Array.prototype.slice.call(a, b)
        : Array.prototype.slice.call(a, b, c);
    },
    mb = function (a, b) {
      return a === b;
    },
    nb = function (a) {
      for (var b = [], c = 0; c < a; c++) b[c] = 0;
      return b;
    };
  var ob = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      return b;
    },
    pb = function (a) {
      if (8192 >= a.length) return String.fromCharCode.apply(null, a);
      for (var b = "", c = 0; c < a.length; c += 8192) {
        var d = kb(a, c, c + 8192);
        b += String.fromCharCode.apply(null, d);
      }
      return b;
    },
    qb = function (a) {
      return Ya(a, function (a) {
        a = a.toString(16);
        return 1 < a.length ? a : "0" + a;
      }).join("");
    },
    rb = function (a) {
      for (var b = [], c = 0; c < a.length; c += 2)
        b.push(parseInt(a.substring(c, c + 2), 16));
      return b;
    },
    sb = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        128 > e
          ? (b[c++] = e)
          : (2048 > e
              ? (b[c++] = (e >> 6) | 192)
              : (55296 == (e & 64512) &&
                d + 1 < a.length &&
                56320 == (a.charCodeAt(d + 1) & 64512)
                  ? ((e =
                      65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                    (b[c++] = (e >> 18) | 240),
                    (b[c++] = ((e >> 12) & 63) | 128))
                  : (b[c++] = (e >> 12) | 224),
                (b[c++] = ((e >> 6) & 63) | 128)),
            (b[c++] = (e & 63) | 128));
      }
      return b;
    },
    tb = function (a) {
      for (var b = [], c = 0, d = 0; c < a.length; ) {
        var e = a[c++];
        if (128 > e) b[d++] = String.fromCharCode(e);
        else if (191 < e && 224 > e) {
          var f = a[c++];
          b[d++] = String.fromCharCode(((e & 31) << 6) | (f & 63));
        } else if (239 < e && 365 > e) {
          f = a[c++];
          var g = a[c++],
            l = a[c++];
          e =
            (((e & 7) << 18) | ((f & 63) << 12) | ((g & 63) << 6) | (l & 63)) -
            65536;
          b[d++] = String.fromCharCode(55296 + (e >> 10));
          b[d++] = String.fromCharCode(56320 + (e & 1023));
        } else
          (f = a[c++]),
            (g = a[c++]),
            (b[d++] = String.fromCharCode(
              ((e & 15) << 12) | ((f & 63) << 6) | (g & 63),
            ));
      }
      return b.join("");
    },
    ub = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d] ^ b[d]);
      return c;
    };
  var vb = function (a, b) {
      for (
        var c = a.split("%s"),
          d = "",
          e = Array.prototype.slice.call(arguments, 1);
        e.length && 1 < c.length;

      )
        d += c.shift() + e.shift();
      return d + c.join("%s");
    },
    wb = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
    Eb = function (a) {
      if (!xb.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(yb, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(zb, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(Ab, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(Bb, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(Cb, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(Db, "&#0;"));
      return a;
    },
    yb = /&/g,
    zb = /</g,
    Ab = />/g,
    Bb = /"/g,
    Cb = /'/g,
    Db = /\x00/g,
    xb = /[\x00&<>"']/,
    Fb = String.prototype.repeat
      ? function (a, b) {
          return a.repeat(b);
        }
      : function (a, b) {
          return Array(b + 1).join(a);
        },
    Gb = function () {
      return (
        Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ z()).toString(36)
      );
    },
    Ib = function (a, b) {
      for (
        var c = 0,
          d = wb(String(a)).split("."),
          e = wb(String(b)).split("."),
          f = Math.max(d.length, e.length),
          g = 0;
        0 == c && g < f;
        g++
      ) {
        var l = d[g] || "",
          m = e[g] || "";
        do {
          l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
          m = /(\d*)(\D*)(.*)/.exec(m) || ["", "", "", ""];
          if (0 == l[0].length && 0 == m[0].length) break;
          c =
            Hb(
              0 == l[1].length ? 0 : parseInt(l[1], 10),
              0 == m[1].length ? 0 : parseInt(m[1], 10),
            ) ||
            Hb(0 == l[2].length, 0 == m[2].length) ||
            Hb(l[2], m[2]);
          l = l[3];
          m = m[3];
        } while (0 == c);
      }
      return c;
    },
    Hb = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    Jb = function (a) {
      return String(a).replace(/\-([a-z])/g, function (a, c) {
        return c.toUpperCase();
      });
    },
    Kb = function (a) {
      var b = r(void 0)
        ? "undefined"
            .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
            .replace(/\x08/g, "\\x08")
        : "\\s";
      return a.replace(
        new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"),
        function (a, b, e) {
          return b + e.toUpperCase();
        },
      );
    };
  var Mb;
  a: {
    var Nb = p.navigator;
    if (Nb) {
      var Ob = Nb.userAgent;
      if (Ob) {
        Mb = Ob;
        break a;
      }
    }
    Mb = "";
  }
  var C = function (a) {
    return -1 != Mb.indexOf(a);
  };
  var Pb = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    },
    Qb = function (a, b) {
      for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
      return !1;
    },
    Rb = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = a[d];
      return b;
    },
    Sb = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    },
    Tb = function (a) {
      for (var b in a) return !1;
      return !0;
    },
    Ub = function (a, b, c) {
      if (null !== a && b in a)
        throw Error('The object already contains the key "' + b + '"');
      a[b] = c;
    },
    Vb = function (a, b) {
      return null !== a && b in a ? a[b] : void 0;
    },
    Wb = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    },
    Xb =
      "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " ",
      ),
    Yb = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Xb.length; f++)
          (c = Xb[f]),
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    },
    Zb = function (a) {
      var b = arguments.length;
      if (1 == b && v(arguments[0])) return Zb.apply(null, arguments[0]);
      for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
      return c;
    };
  var $b = function () {
    return (C("Chrome") || C("CriOS")) && !C("Edge");
  };
  var ac = function () {
      return C("iPhone") && !C("iPod") && !C("iPad");
    },
    bc = function () {
      return ac() || C("iPad") || C("iPod");
    };
  var cc = function (a) {
    cc[" "](a);
    return a;
  };
  cc[" "] = u;
  var ec = function (a, b) {
    var c = dc;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
  };
  var fc = C("Opera"),
    D = C("Trident") || C("MSIE"),
    gc = C("Edge"),
    hc = gc || D,
    ic =
      C("Gecko") &&
      !(-1 != Mb.toLowerCase().indexOf("webkit") && !C("Edge")) &&
      !(C("Trident") || C("MSIE")) &&
      !C("Edge"),
    jc = -1 != Mb.toLowerCase().indexOf("webkit") && !C("Edge"),
    kc = jc && C("Mobile"),
    lc = C("Macintosh"),
    mc = C("Windows"),
    nc = C("Android"),
    oc = ac(),
    pc = C("iPad"),
    qc = C("iPod"),
    rc = bc(),
    sc = function () {
      var a = p.document;
      return a ? a.documentMode : void 0;
    },
    tc;
  a: {
    var uc = "",
      vc = (function () {
        var a = Mb;
        if (ic) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (gc) return /Edge\/([\d\.]+)/.exec(a);
        if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (jc) return /WebKit\/(\S+)/.exec(a);
        if (fc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    vc && (uc = vc ? vc[1] : "");
    if (D) {
      var wc = sc();
      if (null != wc && wc > parseFloat(uc)) {
        tc = String(wc);
        break a;
      }
    }
    tc = uc;
  }
  var xc = tc,
    dc = {},
    yc = function (a) {
      return ec(a, function () {
        return 0 <= Ib(xc, a);
      });
    },
    zc;
  var Ac = p.document;
  zc =
    Ac && D
      ? sc() || ("CSS1Compat" == Ac.compatMode ? parseInt(xc, 10) : 5)
      : void 0;
  var Bc = C("Firefox"),
    Cc = ac() || C("iPod"),
    Dc = C("iPad"),
    Ec = C("Android") && !($b() || C("Firefox") || C("Opera") || C("Silk")),
    Fc = $b(),
    Gc =
      C("Safari") &&
      !(
        $b() ||
        C("Coast") ||
        C("Opera") ||
        C("Edge") ||
        C("Silk") ||
        C("Android")
      ) &&
      !bc();
  var Hc = null,
    Ic = null,
    Jc = null,
    Lc = function (a, b) {
      Ja(a);
      Kc();
      for (var c = b ? Jc : Hc, d = [], e = 0; e < a.length; e += 3) {
        var f = a[e],
          g = e + 1 < a.length,
          l = g ? a[e + 1] : 0,
          m = e + 2 < a.length,
          t = m ? a[e + 2] : 0,
          E = f >> 2;
        f = ((f & 3) << 4) | (l >> 4);
        l = ((l & 15) << 2) | (t >> 6);
        t &= 63;
        m || ((t = 64), g || (l = 64));
        d.push(c[E], c[f], c[l], c[t]);
      }
      return d.join("");
    },
    Nc = function (a) {
      var b = [];
      Mc(a, function (a) {
        b.push(a);
      });
      return b;
    },
    Mc = function (a, b) {
      function c(b) {
        for (; d < a.length; ) {
          var c = a.charAt(d++),
            e = Ic[c];
          if (null != e) return e;
          if (!/^[\s\xa0]*$/.test(c))
            throw Error("Unknown base64 encoding at char: " + c);
        }
        return b;
      }
      Kc();
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          l = c(64);
        if (64 === l && -1 === e) break;
        b((e << 2) | (f >> 4));
        64 != g &&
          (b(((f << 4) & 240) | (g >> 2)), 64 != l && b(((g << 6) & 192) | l));
      }
    },
    Kc = function () {
      if (!Hc) {
        Hc = {};
        Ic = {};
        Jc = {};
        for (var a = 0; 65 > a; a++)
          (Hc[a] =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
              a,
            )),
            (Ic[Hc[a]] = a),
            (Jc[a] =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(
                a,
              )),
            62 <= a &&
              (Ic[
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(
                  a,
                )
              ] = a);
      }
    };
  var F = h(),
    Oc = "function" == typeof Uint8Array,
    G = function (a, b, c, d) {
      a.l = null;
      b || (b = c ? [c] : []);
      a.F = c ? String(c) : void 0;
      a.w = 0 === c ? -1 : 0;
      a.ka = b;
      a: {
        if ((b = a.ka.length))
          if (
            (--b,
            (c = a.ka[b]) &&
              "object" == typeof c &&
              !v(c) &&
              !(Oc && c instanceof Uint8Array))
          ) {
            a.A = b - a.w;
            a.o = c;
            break a;
          }
        a.A = Number.MAX_VALUE;
      }
      a.B = {};
      if (d)
        for (b = 0; b < d.length; b++)
          (c = d[b]),
            c < a.A
              ? ((c += a.w), (a.ka[c] = a.ka[c] || Pc))
              : (Qc(a), (a.o[c] = a.o[c] || Pc));
    },
    Pc = [],
    Qc = function (a) {
      var b = a.A + a.w;
      a.ka[b] || (a.o = a.ka[b] = {});
    },
    Rc = function (a, b, c) {
      for (var d = [], e = 0; e < a.length; e++) d[e] = b.call(a[e], c, a[e]);
      return d;
    },
    I = function (a, b) {
      if (b < a.A) {
        var c = b + a.w,
          d = a.ka[c];
        return d === Pc ? (a.ka[c] = []) : d;
      }
      if (a.o) return (d = a.o[b]), d === Pc ? (a.o[b] = []) : d;
    },
    Sc = function (a, b) {
      if (b < a.A) {
        var c = b + a.w,
          d = a.ka[c];
        return d === Pc ? (a.ka[c] = []) : d;
      }
      d = a.o[b];
      return d === Pc ? (a.o[b] = []) : d;
    },
    J = function (a, b, c) {
      b < a.A ? (a.ka[b + a.w] = c) : (Qc(a), (a.o[b] = c));
    },
    K = function (a, b, c) {
      a.l || (a.l = {});
      if (!a.l[c]) {
        var d = I(a, c);
        d && (a.l[c] = new b(d));
      }
      return a.l[c];
    },
    Tc = function (a, b, c) {
      a.l || (a.l = {});
      if (!a.l[c]) {
        for (var d = Sc(a, c), e = [], f = 0; f < d.length; f++)
          e[f] = new b(d[f]);
        a.l[c] = e;
      }
      b = a.l[c];
      b == Pc && (b = a.l[c] = []);
      return b;
    },
    Vc = function (a) {
      if (a.l)
        for (var b in a.l) {
          var c = a.l[b];
          if (v(c)) for (var d = 0; d < c.length; d++) c[d] && Uc(c[d]);
          else c && Uc(c);
        }
    },
    Uc = function (a) {
      Vc(a);
      return a.ka;
    };
  F.prototype.Fb = Oc
    ? function () {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function () {
          return Lc(this);
        };
        try {
          return JSON.stringify(this.ka && Uc(this), Wc);
        } finally {
          Uint8Array.prototype.toJSON = a;
        }
      }
    : function () {
        return JSON.stringify(this.ka && Uc(this), Wc);
      };
  var Wc = function (a, b) {
      return Da(b) && (isNaN(b) || Infinity === b || -Infinity === b)
        ? String(b)
        : b;
    },
    Yc = function (a) {
      return new Xc(a ? JSON.parse(a) : null);
    };
  F.prototype.toString = function () {
    Vc(this);
    return this.ka.toString();
  };
  var Zc;
  var $c = !D || 9 <= Number(zc),
    ad = (!ic && !D) || (D && 9 <= Number(zc)) || (ic && yc("1.9.1")),
    bd = D && !yc("9"),
    cd = D || fc || jc;
  var ed = function () {
    this.l = "";
    this.o = dd;
  };
  ed.prototype.bb = !0;
  ed.prototype.ab = k("l");
  ed.prototype.toString = function () {
    return "Const{" + this.l + "}";
  };
  var fd = function (a) {
      return a instanceof ed && a.constructor === ed && a.o === dd
        ? a.l
        : "type_error:Const";
    },
    dd = {},
    gd = function (a) {
      var b = new ed();
      b.l = a;
      return b;
    };
  gd("");
  var id = function () {
    this.o = "";
    this.w = hd;
  };
  id.prototype.bb = !0;
  id.prototype.ab = k("o");
  id.prototype.Qc = !0;
  id.prototype.l = ba(1);
  var jd = function (a) {
      if (a instanceof id && a.constructor === id && a.w === hd) return a.o;
      Ia(a);
      return "type_error:TrustedResourceUrl";
    },
    hd = {};
  var ld = function () {
    this.o = kd;
  };
  ld.prototype.bb = !0;
  ld.prototype.ab = ba("");
  ld.prototype.Qc = !0;
  ld.prototype.l = ba(1);
  var md = function (a) {
      if (a instanceof ld && a.constructor === ld && a.o === kd) return "";
      Ia(a);
      return "type_error:SafeUrl";
    },
    kd = {};
  var od = function () {
    this.l = "";
    this.o = nd;
  };
  od.prototype.bb = !0;
  var nd = {};
  od.prototype.ab = k("l");
  var qd = function () {
    this.l = "";
    this.o = pd;
  };
  qd.prototype.bb = !0;
  var pd = {},
    td = function (a) {
      a = fd(a);
      return 0 === a.length ? rd : sd(a);
    };
  qd.prototype.ab = k("l");
  var ud = function (a) {
      if (a instanceof qd && a.constructor === qd && a.o === pd) return a.l;
      Ia(a);
      return "type_error:SafeStyleSheet";
    },
    sd = function (a) {
      var b = new qd();
      b.l = a;
      return b;
    },
    rd = sd("");
  var wd = function () {
    this.o = "";
    this.A = vd;
    this.w = null;
  };
  wd.prototype.Qc = !0;
  wd.prototype.l = k("w");
  wd.prototype.bb = !0;
  wd.prototype.ab = k("o");
  var xd = function (a) {
      if (a instanceof wd && a.constructor === wd && a.A === vd) return a.o;
      Ia(a);
      return "type_error:SafeHtml";
    },
    zd = function (a) {
      if (a instanceof wd) return a;
      var b = null;
      a.Qc && (b = a.l());
      a = Eb(a.bb ? a.ab() : String(a));
      return yd(a, b);
    },
    Ad = function (a) {
      var b = 0,
        c = "",
        d = function (a) {
          v(a)
            ? B(a, d)
            : ((a = zd(a)),
              (c += xd(a)),
              (a = a.l()),
              0 == b ? (b = a) : 0 != a && b != a && (b = null));
        };
      B(arguments, d);
      return yd(c, b);
    },
    vd = {},
    yd = function (a, b) {
      var c = new wd();
      c.o = a;
      c.w = b;
      return c;
    };
  yd("<!DOCTYPE html>", 0);
  yd("", 0);
  var Bd = yd("<br>", 0);
  var Cd = function (a, b) {
    a.src = jd(b);
    var c;
    if (null === Fa) {
      a: {
        if (
          (c = p.document.querySelector("script[nonce]")) &&
          (c = c.nonce || c.getAttribute("nonce")) &&
          Ea.test(c)
        )
          break a;
        c = null;
      }
      Fa = c || "";
    }
    (c = Fa) && a.setAttribute("nonce", c);
  };
  var Dd = function (a, b) {
    this.K = q(a) ? a : 0;
    this.J = q(b) ? b : 0;
  };
  Dd.prototype.ceil = function () {
    this.K = Math.ceil(this.K);
    this.J = Math.ceil(this.J);
    return this;
  };
  Dd.prototype.floor = function () {
    this.K = Math.floor(this.K);
    this.J = Math.floor(this.J);
    return this;
  };
  Dd.prototype.round = function () {
    this.K = Math.round(this.K);
    this.J = Math.round(this.J);
    return this;
  };
  var Ed = function (a, b) {
    var c = Da(void 0) ? void 0 : b;
    a.K *= b;
    a.J *= c;
    return a;
  };
  var L = function (a, b) {
      this.width = a;
      this.height = b;
    },
    Fd = function (a) {
      return new L(a.width, a.height);
    };
  L.prototype.aspectRatio = function () {
    return this.width / this.height;
  };
  L.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  L.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  L.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var Id = function (a) {
      return a ? new Gd(Hd(a)) : Va || (Va = new Gd());
    },
    Jd = function (a, b) {
      return r(b) ? a.getElementById(b) : b;
    },
    Kd = function (a, b) {
      return (b || document).getElementsByTagName(String(a));
    },
    ab = function (a, b) {
      var c = b || document;
      return c.querySelectorAll && c.querySelector
        ? c.querySelectorAll("." + a)
        : Ld(document, "*", a, b);
    },
    M = function (a, b) {
      var c = b || document;
      if (c.getElementsByClassName) c = c.getElementsByClassName(a)[0];
      else {
        c = document;
        var d = b || c;
        c =
          d.querySelectorAll && d.querySelector && a
            ? d.querySelector(a ? "." + a : "")
            : Ld(c, "*", a, b)[0] || null;
      }
      return c || null;
    },
    Ld = function (a, b, c, d) {
      a = d || a;
      b = b && "*" != b ? String(b).toUpperCase() : "";
      if (a.querySelectorAll && a.querySelector && (b || c))
        return a.querySelectorAll(b + (c ? "." + c : ""));
      if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
          d = {};
          for (var e = 0, f = 0, g; (g = a[f]); f++)
            b == g.nodeName && (d[e++] = g);
          d.length = e;
          return d;
        }
        return a;
      }
      a = a.getElementsByTagName(b || "*");
      if (c) {
        d = {};
        for (f = e = 0; (g = a[f]); f++)
          (b = g.className),
            "function" == typeof b.split &&
              eb(b.split(/\s+/), c) &&
              (d[e++] = g);
        d.length = e;
        return d;
      }
      return a;
    },
    Nd = function (a, b) {
      Pb(b, function (b, d) {
        b && b.bb && (b = b.ab());
        "style" == d
          ? (a.style.cssText = b)
          : "class" == d
          ? (a.className = b)
          : "for" == d
          ? (a.htmlFor = b)
          : Md.hasOwnProperty(d)
          ? a.setAttribute(Md[d], b)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, b)
          : (a[d] = b);
      });
    },
    Md = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width",
    },
    Pd = function (a) {
      a = a.document;
      a = Od(a) ? a.documentElement : a.body;
      return new L(a.clientWidth, a.clientHeight);
    },
    Qd = function (a) {
      var b = a.scrollingElement
        ? a.scrollingElement
        : !jc && Od(a)
        ? a.documentElement
        : a.body || a.documentElement;
      a = a.parentWindow || a.defaultView;
      return D && yc("10") && a.pageYOffset != b.scrollTop
        ? new Dd(b.scrollLeft, b.scrollTop)
        : new Dd(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    N = function (a) {
      return a ? a.parentWindow || a.defaultView : window;
    },
    Sd = function (a, b, c) {
      return Rd(document, arguments);
    },
    Rd = function (a, b) {
      var c = String(b[0]),
        d = b[1];
      if (!$c && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', Eb(d.name), '"');
        if (d.type) {
          c.push(' type="', Eb(d.type), '"');
          var e = {};
          Yb(e, d);
          delete e.type;
          d = e;
        }
        c.push(">");
        c = c.join("");
      }
      c = a.createElement(c);
      d &&
        (r(d)
          ? (c.className = d)
          : v(d)
          ? (c.className = d.join(" "))
          : Nd(c, d));
      2 < b.length && Td(a, c, b);
      return c;
    },
    Td = function (a, b, c) {
      function d(c) {
        c && b.appendChild(r(c) ? a.createTextNode(c) : c);
      }
      for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !Ja(f) || (x(f) && 0 < f.nodeType) ? d(f) : B(Ud(f) ? ib(f) : f, d);
      }
    },
    Vd = function (a, b) {
      return a.createElement(String(b));
    },
    Od = function (a) {
      return "CSS1Compat" == a.compatMode;
    },
    Wd = function (a, b) {
      a.appendChild(b);
    },
    Xd = function (a) {
      for (var b; (b = a.firstChild); ) a.removeChild(b);
    },
    Yd = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    },
    Zd = function (a) {
      return ad && void 0 != a.children
        ? a.children
        : Xa(a.childNodes, function (a) {
            return 1 == a.nodeType;
          });
    },
    ae = function (a) {
      return q(a.firstElementChild)
        ? a.firstElementChild
        : $d(a.firstChild, !0);
    },
    be = function (a) {
      return q(a.lastElementChild) ? a.lastElementChild : $d(a.lastChild, !1);
    },
    $d = function (a, b) {
      for (; a && 1 != a.nodeType; ) a = b ? a.nextSibling : a.previousSibling;
      return a;
    },
    ce = function (a) {
      var b;
      if (
        cd &&
        !(
          D &&
          yc("9") &&
          !yc("10") &&
          p.SVGElement &&
          a instanceof p.SVGElement
        ) &&
        (b = a.parentElement)
      )
        return b;
      b = a.parentNode;
      return x(b) && 1 == b.nodeType ? b : null;
    },
    de = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b; ) b = b.parentNode;
      return b == a;
    },
    Hd = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    ee = function (a) {
      try {
        return (
          a.contentWindow || (a.contentDocument ? N(a.contentDocument) : null)
        );
      } catch (b) {}
      return null;
    },
    fe = function (a, b) {
      if ("textContent" in a) a.textContent = b;
      else if (3 == a.nodeType) a.data = String(b);
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
        a.firstChild.data = String(b);
      } else {
        Xd(a);
        var c = Hd(a);
        a.appendChild(c.createTextNode(String(b)));
      }
    },
    he = function (a, b) {
      var c = [];
      ge(a, b, c, !1);
      return c;
    },
    ge = function (a, b, c, d) {
      if (null != a)
        for (a = a.firstChild; a; ) {
          if ((b(a) && (c.push(a), d)) || ge(a, b, c, d)) return !0;
          a = a.nextSibling;
        }
      return !1;
    },
    ie = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    je = { IMG: " ", BR: "\n" },
    ke = function (a, b) {
      b ? (a.tabIndex = 0) : ((a.tabIndex = -1), a.removeAttribute("tabIndex"));
    },
    le = function (a) {
      return D && !yc("9")
        ? ((a = a.getAttributeNode("tabindex")), null != a && a.specified)
        : a.hasAttribute("tabindex");
    },
    me = function (a) {
      a = a.tabIndex;
      return Da(a) && 0 <= a && 32768 > a;
    },
    oe = function (a) {
      if (bd && null !== a && "innerText" in a)
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
      else {
        var b = [];
        ne(a, b, !0);
        a = b.join("");
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      bd || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""));
      return a;
    },
    pe = function (a) {
      var b = [];
      ne(a, b, !1);
      return b.join("");
    },
    ne = function (a, b, c) {
      if (!(a.nodeName in ie))
        if (3 == a.nodeType)
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
            : b.push(a.nodeValue);
        else if (a.nodeName in je) b.push(je[a.nodeName]);
        else for (a = a.firstChild; a; ) ne(a, b, c), (a = a.nextSibling);
    },
    Ud = function (a) {
      if (a && "number" == typeof a.length) {
        if (x(a))
          return "function" == typeof a.item || "string" == typeof a.item;
        if (w(a)) return "function" == typeof a.item;
      }
      return !1;
    },
    qe = function (a) {
      try {
        var b = a && a.activeElement;
        return b && b.nodeName ? b : null;
      } catch (c) {
        return null;
      }
    },
    Gd = function (a) {
      this.l = a || p.document || document;
    };
  Gd.prototype.C = function (a) {
    return Jd(this.l, a);
  };
  Gd.prototype.O = function (a) {
    return M(a, this.l);
  };
  Gd.prototype.W = function (a, b, c) {
    return Rd(this.l, arguments);
  };
  Gd.prototype.o = Wd;
  Zb(
    "A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(
      " ",
    ),
  );
  var re = function (a, b, c) {
    v(c) && (c = c.join(" "));
    var d = "aria-" + b;
    "" === c || void 0 == c
      ? (Zc ||
          (Zc = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false",
          }),
        (c = Zc),
        b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
      : a.setAttribute(d, c);
  };
  var O = function () {
    this.da = this.da;
    this.za = this.za;
  };
  O.prototype.da = !1;
  O.prototype.oa = function () {
    this.da || ((this.da = !0), this.L());
  };
  var te = function (a, b) {
    var c = Qa(se, b);
    a.da
      ? q(void 0)
        ? c.call(void 0)
        : c()
      : (a.za || (a.za = []), a.za.push(q(void 0) ? y(c, void 0) : c));
  };
  O.prototype.L = function () {
    if (this.za) for (; this.za.length; ) this.za.shift()();
  };
  var se = function (a) {
    a && "function" == typeof a.oa && a.oa();
  };
  var ue = [],
    ve = [],
    we = !1,
    xe = function (a) {
      ue[ue.length] = a;
      if (we) for (var b = 0; b < ve.length; b++) a(y(ve[b].l, ve[b]));
    };
  var ye = function (a) {
    var b = p.onerror,
      c = !1;
    jc && !yc("535.3") && (c = !c);
    p.onerror = function (d, e, f, g, l) {
      b && b(d, e, f, g, l);
      a({ message: d, fileName: e, line: f, lineNumber: f, vc: g, error: l });
      return c;
    };
  };
  var ze = !D || 9 <= Number(zc),
    Ae = !D || 9 <= Number(zc),
    Be = D && !yc("9"),
    Ce = (function () {
      if (!p.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
        b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
      p.addEventListener("test", u, b);
      p.removeEventListener("test", u, b);
      return a;
    })();
  var De = function (a, b) {
    this.type = a;
    this.l = this.target = b;
    this.w = !1;
    this.Vd = !0;
  };
  De.prototype.o = function () {
    this.w = !0;
  };
  De.prototype.preventDefault = function () {
    this.Vd = !1;
  };
  var Ee = function (a) {
      return jc ? "webkit" + a : fc ? "o" + a.toLowerCase() : a.toLowerCase();
    },
    Fe = {
      rf: "click",
      Ch: "rightclick",
      Cf: "dblclick",
      kd: "mousedown",
      ld: "mouseup",
      Ig: "mouseover",
      Hg: "mouseout",
      Gg: "mousemove",
      Eg: "mouseenter",
      Fg: "mouseleave",
      jd: "mousecancel",
      Hh: "selectionchange",
      Ih: "selectstart",
      ri: "wheel",
      qg: "keypress",
      pg: "keydown",
      rg: "keyup",
      lf: "blur",
      eg: "focus",
      Df: "deactivate",
      fg: "focusin",
      gg: "focusout",
      qf: "change",
      zh: "reset",
      Gh: "select",
      Uh: "submit",
      mg: "input",
      wh: "propertychange",
      Uf: "dragstart",
      Pf: "drag",
      Rf: "dragenter",
      Tf: "dragover",
      Sf: "dragleave",
      Vf: "drop",
      Qf: "dragend",
      ei: "touchstart",
      di: "touchmove",
      ci: "touchend",
      bi: "touchcancel",
      jf: "beforeunload",
      xf: "consolemessage",
      yf: "contextmenu",
      Ef: "devicechange",
      Ff: "devicemotion",
      Gf: "deviceorientation",
      Jf: "DOMContentLoaded",
      Zf: "error",
      kg: "help",
      sg: "load",
      Ag: "losecapture",
      bh: "orientationchange",
      yh: "readystatechange",
      Ah: "resize",
      Dh: "scroll",
      hi: "unload",
      nf: "canplay",
      pf: "canplaythrough",
      Wf: "durationchange",
      Xf: "emptied",
      Yf: "ended",
      vg: "loadeddata",
      wg: "loadedmetadata",
      ih: "pause",
      jh: "play",
      kh: "playing",
      xh: "ratechange",
      Eh: "seeked",
      Fh: "seeking",
      Qh: "stalled",
      Vh: "suspend",
      ai: "timeupdate",
      oi: "volumechange",
      pi: "waiting",
      Ph: "sourceopen",
      Oh: "sourceended",
      Nh: "sourceclosed",
      Ve: "abort",
      ji: "update",
      mi: "updatestart",
      ki: "updateend",
      jg: "hashchange",
      fh: "pagehide",
      gh: "pageshow",
      th: "popstate",
      Af: "copy",
      hh: "paste",
      Bf: "cut",
      cf: "beforecopy",
      df: "beforecut",
      gf: "beforepaste",
      ah: "online",
      $g: "offline",
      Cg: "message",
      wf: "connect",
      ng: "install",
      We: "activate",
      dg: "fetch",
      hg: "foreignfetch",
      Dg: "messageerror",
      Rh: "statechange",
      li: "updatefound",
      zf: "controllerchange",
      $e: Ee("AnimationStart"),
      Ye: Ee("AnimationEnd"),
      Ze: Ee("AnimationIteration"),
      fi: Ee("TransitionEnd"),
      mh: "pointerdown",
      sh: "pointerup",
      lh: "pointercancel",
      ph: "pointermove",
      rh: "pointerover",
      qh: "pointerout",
      nh: "pointerenter",
      oh: "pointerleave",
      ig: "gotpointercapture",
      Bg: "lostpointercapture",
      Jg: "MSGestureChange",
      Kg: "MSGestureEnd",
      Lg: "MSGestureHold",
      Mg: "MSGestureStart",
      Ng: "MSGestureTap",
      Og: "MSGotPointerCapture",
      Pg: "MSInertiaStart",
      Qg: "MSLostPointerCapture",
      Rg: "MSPointerCancel",
      Sg: "MSPointerDown",
      Tg: "MSPointerEnter",
      Ug: "MSPointerHover",
      Vg: "MSPointerLeave",
      Wg: "MSPointerMove",
      Xg: "MSPointerOut",
      Yg: "MSPointerOver",
      Zg: "MSPointerUp",
      Xh: "text",
      Yh: D ? "textinput" : "textInput",
      uf: "compositionstart",
      vf: "compositionupdate",
      tf: "compositionend",
      ef: "beforeinput",
      ag: "exit",
      tg: "loadabort",
      ug: "loadcommit",
      xg: "loadredirect",
      yg: "loadstart",
      zg: "loadstop",
      Bh: "responsive",
      Mh: "sizechanged",
      ii: "unresponsive",
      ni: "visibilitychange",
      Th: "storage",
      Of: "DOMSubtreeModified",
      Kf: "DOMNodeInserted",
      Mf: "DOMNodeRemoved",
      Nf: "DOMNodeRemovedFromDocument",
      Lf: "DOMNodeInsertedIntoDocument",
      Hf: "DOMAttrModified",
      If: "DOMCharacterDataModified",
      hf: "beforeprint",
      Xe: "afterprint",
      ff: "beforeinstallprompt",
      af: "appinstalled",
    };
  var He = function (a, b) {
    De.call(this, a ? a.type : "");
    this.relatedTarget = this.l = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.A = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.ta = null;
    if (a) {
      var c = (this.type = a.type),
        d = a.changedTouches ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.l = b;
      var e = a.relatedTarget;
      if (e) {
        if (ic) {
          a: {
            try {
              cc(e.nodeName);
              var f = !0;
              break a;
            } catch (g) {}
            f = !1;
          }
          f || (e = null);
        }
      } else
        "mouseover" == c
          ? (e = a.fromElement)
          : "mouseout" == c && (e = a.toElement);
      this.relatedTarget = e;
      null === d
        ? ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
          (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
          (this.screenX = a.screenX || 0),
          (this.screenY = a.screenY || 0))
        : ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
          (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
          (this.screenX = d.screenX || 0),
          (this.screenY = d.screenY || 0));
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.A = lc ? a.metaKey : a.ctrlKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = r(a.pointerType)
        ? a.pointerType
        : Ge[a.pointerType] || "";
      this.ta = a;
      a.defaultPrevented && this.preventDefault();
    }
  };
  A(He, De);
  var Ie = [1, 4, 2],
    Ge = { 2: "touch", 3: "pen", 4: "mouse" },
    Je = function (a) {
      return ze
        ? 0 == a.ta.button
        : "click" == a.type
        ? !0
        : !!(a.ta.button & Ie[0]);
    };
  He.prototype.o = function () {
    He.I.o.call(this);
    this.ta.stopPropagation
      ? this.ta.stopPropagation()
      : (this.ta.cancelBubble = !0);
  };
  He.prototype.preventDefault = function () {
    He.I.preventDefault.call(this);
    var a = this.ta;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), Be))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  var Ke = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    Le = function (a) {
      return !(!a || !a[Ke]);
    },
    Me = 0;
  var Ne = function (a, b, c, d, e) {
      this.listener = a;
      this.l = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.gc = e;
      this.key = ++Me;
      this.ob = this.Pb = !1;
    },
    Oe = function (a) {
      a.ob = !0;
      a.listener = null;
      a.l = null;
      a.src = null;
      a.gc = null;
    };
  var Pe = function (a) {
    this.src = a;
    this.l = {};
    this.o = 0;
  };
  Pe.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.l[f];
    a || ((a = this.l[f] = []), this.o++);
    var g = Qe(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.Pb = !1))
      : ((b = new Ne(b, this.src, f, !!d, e)), (b.Pb = c), a.push(b));
    return b;
  };
  var Re = function (a, b) {
      var c = b.type;
      c in a.l &&
        gb(a.l[c], b) &&
        (Oe(b), 0 == a.l[c].length && (delete a.l[c], a.o--));
    },
    Se = function (a, b, c, d, e) {
      a = a.l[b.toString()];
      b = -1;
      a && (b = Qe(a, c, d, e));
      return -1 < b ? a[b] : null;
    },
    Te = function (a, b) {
      var c = q(b),
        d = c ? b.toString() : "",
        e = q(void 0);
      return Qb(a.l, function (a) {
        for (var b = 0; b < a.length; ++b)
          if (!((c && a[b].type != d) || (e && void 0 != a[b].capture)))
            return !0;
        return !1;
      });
    },
    Qe = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.ob && f.listener == b && f.capture == !!c && f.gc == d) return e;
      }
      return -1;
    };
  var Ue = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Ve = {},
    We = 0,
    Ye = function (a, b, c, d, e) {
      if (d && d.once) return Xe(a, b, c, d, e);
      if (v(b)) {
        for (var f = 0; f < b.length; f++) Ye(a, b[f], c, d, e);
        return null;
      }
      c = Ze(c);
      Le(a)
        ? (f = a.S.add(String(b), c, !1, x(d) ? !!d.capture : !!d, e))
        : (f = $e(a, b, c, !1, d, e));
      return f;
    },
    $e = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = x(e) ? !!e.capture : !!e,
        l = af(a);
      l || (a[Ue] = l = new Pe(a));
      c = l.add(b, c, d, g, f);
      if (c.l) return c;
      d = bf();
      c.l = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        Ce || (e = g),
          void 0 === e && (e = !1),
          a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(cf(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      We++;
      return c;
    },
    bf = function () {
      var a = df,
        b = Ae
          ? function (c) {
              return a.call(b.src, b.listener, c);
            }
          : function (c) {
              c = a.call(b.src, b.listener, c);
              if (!c) return c;
            };
      return b;
    },
    Xe = function (a, b, c, d, e) {
      if (v(b)) {
        for (var f = 0; f < b.length; f++) Xe(a, b[f], c, d, e);
        return null;
      }
      c = Ze(c);
      return Le(a)
        ? a.S.add(String(b), c, !0, x(d) ? !!d.capture : !!d, e)
        : $e(a, b, c, !0, d, e);
    },
    ef = function (a, b, c, d, e) {
      if (v(b)) for (var f = 0; f < b.length; f++) ef(a, b[f], c, d, e);
      else
        (d = x(d) ? !!d.capture : !!d),
          (c = Ze(c)),
          Le(a)
            ? ((a = a.S),
              (b = String(b).toString()),
              b in a.l &&
                ((f = a.l[b]),
                (c = Qe(f, c, d, e)),
                -1 < c &&
                  (Oe(f[c]),
                  Array.prototype.splice.call(f, c, 1),
                  0 == f.length && (delete a.l[b], a.o--))))
            : a && (a = af(a)) && (c = Se(a, b, c, d, e)) && ff(c);
    },
    ff = function (a) {
      if (!Da(a) && a && !a.ob) {
        var b = a.src;
        if (Le(b)) Re(b.S, a);
        else {
          var c = a.type,
            d = a.l;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(cf(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          We--;
          (c = af(b))
            ? (Re(c, a), 0 == c.o && ((c.src = null), (b[Ue] = null)))
            : Oe(a);
        }
      }
    },
    gf = function (a) {
      if (Le(a)) return Te(a.S, q("keydown") ? "keydown" : void 0);
      a = af(a);
      return !!a && Te(a, "keydown");
    },
    cf = function (a) {
      return a in Ve ? Ve[a] : (Ve[a] = "on" + a);
    },
    jf = function (a, b, c, d) {
      var e = !0;
      if ((a = af(a)))
        if ((b = a.l[b.toString()]))
          for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f &&
              f.capture == c &&
              !f.ob &&
              ((f = hf(f, d)), (e = e && !1 !== f));
          }
      return e;
    },
    hf = function (a, b) {
      var c = a.listener,
        d = a.gc || a.src;
      a.Pb && ff(a);
      return c.call(d, b);
    },
    df = function (a, b) {
      if (a.ob) return !0;
      if (!Ae) {
        var c = b || Ga("window.event"),
          d = new He(c, this),
          e = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
          a: {
            var f = !1;
            if (0 == c.keyCode)
              try {
                c.keyCode = -1;
                break a;
              } catch (m) {
                f = !0;
              }
            if (f || void 0 == c.returnValue) c.returnValue = !0;
          }
          c = [];
          for (f = d.l; f; f = f.parentNode) c.push(f);
          f = a.type;
          for (var g = c.length - 1; !d.w && 0 <= g; g--) {
            d.l = c[g];
            var l = jf(c[g], f, !0, d);
            e = e && l;
          }
          for (g = 0; !d.w && g < c.length; g++)
            (d.l = c[g]), (l = jf(c[g], f, !1, d)), (e = e && l);
        }
        return e;
      }
      return hf(a, new He(b, this));
    },
    af = function (a) {
      a = a[Ue];
      return a instanceof Pe ? a : null;
    },
    kf = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    Ze = function (a) {
      if (w(a)) return a;
      a[kf] ||
        (a[kf] = function (b) {
          return a.handleEvent(b);
        });
      return a[kf];
    };
  xe(function (a) {
    df = a(df);
  });
  var lf = function (a) {
      return function () {
        return a;
      };
    },
    mf = lf(!0),
    nf = lf(null);
  var P = function () {
    O.call(this);
    this.S = new Pe(this);
    this.He = this;
    this.Ub = null;
  };
  A(P, O);
  P.prototype[Ke] = !0;
  P.prototype.cd = aa("Ub");
  P.prototype.removeEventListener = function (a, b, c, d) {
    ef(this, a, b, c, d);
  };
  P.prototype.dispatchEvent = function (a) {
    var b = this.Ub;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.Ub) c.push(b), ++d;
    }
    b = this.He;
    d = a.type || a;
    if (r(a)) a = new De(a, b);
    else if (a instanceof De) a.target = a.target || b;
    else {
      var e = a;
      a = new De(d, b);
      Yb(a, e);
    }
    e = !0;
    if (c)
      for (var f = c.length - 1; !a.w && 0 <= f; f--) {
        var g = (a.l = c[f]);
        e = of(g, d, !0, a) && e;
      }
    a.w ||
      ((g = a.l = b),
      (e = of(g, d, !0, a) && e),
      a.w || (e = of(g, d, !1, a) && e));
    if (c)
      for (f = 0; !a.w && f < c.length; f++)
        (g = a.l = c[f]), (e = of(g, d, !1, a) && e);
    return e;
  };
  P.prototype.L = function () {
    P.I.L.call(this);
    if (this.S) {
      var a = this.S,
        b = 0,
        c;
      for (c in a.l) {
        for (var d = a.l[c], e = 0; e < d.length; e++) ++b, Oe(d[e]);
        delete a.l[c];
        a.o--;
      }
    }
    this.Ub = null;
  };
  var of = function (a, b, c, d) {
    b = a.S.l[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.ob && g.capture == c) {
        var l = g.listener,
          m = g.gc || g.src;
        g.Pb && Re(a.S, g);
        e = !1 !== l.call(m, d) && e;
      }
    }
    return e && 0 != d.Vd;
  };
  var pf = function (a, b) {
    this.w = a;
    this.Eb = b;
    this.o = 0;
    this.l = null;
  };
  pf.prototype.get = function () {
    if (0 < this.o) {
      this.o--;
      var a = this.l;
      this.l = a.next;
      a.next = null;
    } else a = this.w();
    return a;
  };
  var qf = function (a, b) {
    a.Eb(b);
    100 > a.o && (a.o++, (b.next = a.l), (a.l = b));
  };
  var rf = function (a) {
      p.setTimeout(function () {
        throw a;
      }, 0);
    },
    vf = function (a, b) {
      var c = a;
      b && (c = y(a, b));
      c = sf(c);
      !w(p.setImmediate) ||
      (p.Window &&
        p.Window.prototype &&
        !C("Edge") &&
        p.Window.prototype.setImmediate == p.setImmediate)
        ? (tf || (tf = uf()), tf(c))
        : p.setImmediate(c);
    },
    tf,
    uf = function () {
      var a = p.MessageChannel;
      "undefined" === typeof a &&
        "undefined" !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !C("Presto") &&
        (a = function () {
          var a = document.createElement("IFRAME");
          a.style.display = "none";
          a.src = "";
          document.documentElement.appendChild(a);
          var b = a.contentWindow;
          a = b.document;
          a.open();
          a.write("");
          a.close();
          var c = "callImmediate" + Math.random(),
            d =
              "file:" == b.location.protocol
                ? "*"
                : b.location.protocol + "//" + b.location.host;
          a = y(function (a) {
            if (("*" == d || a.origin == d) && a.data == c)
              this.port1.onmessage();
          }, this);
          b.addEventListener("message", a, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              b.postMessage(c, d);
            },
          };
        });
      if ("undefined" !== typeof a && !C("Trident") && !C("MSIE")) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (q(c.next)) {
            c = c.next;
            var a = c.rd;
            c.rd = null;
            a();
          }
        };
        return function (a) {
          d.next = { rd: a };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return "undefined" !== typeof document &&
        "onreadystatechange" in document.createElement("SCRIPT")
        ? function (a) {
            var b = document.createElement("SCRIPT");
            b.onreadystatechange = function () {
              b.onreadystatechange = null;
              b.parentNode.removeChild(b);
              b = null;
              a();
              a = null;
            };
            document.documentElement.appendChild(b);
          }
        : function (a) {
            p.setTimeout(a, 0);
          };
    },
    sf = function (a) {
      return a;
    };
  xe(function (a) {
    sf = a;
  });
  var wf = function () {
      this.o = this.l = null;
    },
    yf = new pf(
      function () {
        return new xf();
      },
      function (a) {
        a.reset();
      },
    );
  wf.prototype.add = function (a, b) {
    var c = yf.get();
    c.set(a, b);
    this.o ? (this.o.next = c) : (this.l = c);
    this.o = c;
  };
  var Af = function () {
      var a = zf,
        b = null;
      a.l &&
        ((b = a.l), (a.l = a.l.next), a.l || (a.o = null), (b.next = null));
      return b;
    },
    xf = function () {
      this.next = this.o = this.l = null;
    };
  xf.prototype.set = function (a, b) {
    this.l = a;
    this.o = b;
    this.next = null;
  };
  xf.prototype.reset = function () {
    this.next = this.o = this.l = null;
  };
  var Ef = function (a, b) {
      Bf || Cf();
      Df || (Bf(), (Df = !0));
      zf.add(a, b);
    },
    Bf,
    Cf = function () {
      if (p.Promise && p.Promise.resolve) {
        var a = p.Promise.resolve(void 0);
        Bf = function () {
          a.then(Ff);
        };
      } else
        Bf = function () {
          vf(Ff);
        };
    },
    Df = !1,
    zf = new wf(),
    Ff = function () {
      for (var a; (a = Af()); ) {
        try {
          a.l.call(a.o);
        } catch (b) {
          rf(b);
        }
        qf(yf, a);
      }
      Df = !1;
    };
  var Gf = function (a) {
      a.prototype.then = a.prototype.then;
      a.prototype.$goog_Thenable = !0;
    },
    Hf = function (a) {
      if (!a) return !1;
      try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    };
  var Jf = function (a, b) {
      this.l = 0;
      this.H = void 0;
      this.A = this.o = this.w = null;
      this.B = this.F = !1;
      if (a != u)
        try {
          var c = this;
          a.call(
            b,
            function (a) {
              If(c, 2, a);
            },
            function (a) {
              If(c, 3, a);
            },
          );
        } catch (d) {
          If(this, 3, d);
        }
    },
    Kf = function () {
      this.next = this.w = this.o = this.A = this.l = null;
      this.B = !1;
    };
  Kf.prototype.reset = function () {
    this.w = this.o = this.A = this.l = null;
    this.B = !1;
  };
  var Lf = new pf(
      function () {
        return new Kf();
      },
      function (a) {
        a.reset();
      },
    ),
    Mf = function (a, b, c) {
      var d = Lf.get();
      d.A = a;
      d.o = b;
      d.w = c;
      return d;
    },
    Nf = function (a) {
      if (a instanceof Jf) return a;
      var b = new Jf(u);
      If(b, 2, a);
      return b;
    },
    Of = function () {
      return new Jf(function (a, b) {
        b(void 0);
      });
    },
    Qf = function (a, b, c) {
      Pf(a, b, c, null) || Ef(Qa(b, a));
    },
    Rf = function (a) {
      return new Jf(function (b, c) {
        var d = a.length,
          e = [];
        if (d)
          for (
            var f = function (a, c) {
                d--;
                e[a] = c;
                0 == d && b(e);
              },
              g = function (a) {
                c(a);
              },
              l = 0,
              m;
            l < a.length;
            l++
          )
            (m = a[l]), Qf(m, Qa(f, l), g);
        else b(e);
      });
    },
    Tf = function () {
      var a,
        b,
        c = new Jf(function (c, e) {
          a = c;
          b = e;
        });
      return new Sf(c, a, b);
    };
  Jf.prototype.then = function (a, b, c) {
    return Uf(this, w(a) ? a : null, w(b) ? b : null, c);
  };
  Gf(Jf);
  var Vf = function (a, b) {
    return Uf(a, null, b, void 0);
  };
  Jf.prototype.cancel = function (a) {
    0 == this.l &&
      Ef(function () {
        var b = new Wf(a);
        Xf(this, b);
      }, this);
  };
  var Xf = function (a, b) {
      if (0 == a.l)
        if (a.w) {
          var c = a.w;
          if (c.o) {
            for (
              var d = 0, e = null, f = null, g = c.o;
              g && (g.B || (d++, g.l == a && (e = g), !(e && 1 < d)));
              g = g.next
            )
              e || (f = g);
            e &&
              (0 == c.l && 1 == d
                ? Xf(c, b)
                : (f
                    ? ((d = f),
                      d.next == c.A && (c.A = d),
                      (d.next = d.next.next))
                    : Yf(c),
                  Zf(c, e, 3, b)));
          }
          a.w = null;
        } else If(a, 3, b);
    },
    ag = function (a, b) {
      a.o || (2 != a.l && 3 != a.l) || $f(a);
      a.A ? (a.A.next = b) : (a.o = b);
      a.A = b;
    },
    Uf = function (a, b, c, d) {
      var e = Mf(null, null, null);
      e.l = new Jf(function (a, g) {
        e.A = b
          ? function (c) {
              try {
                var e = b.call(d, c);
                a(e);
              } catch (t) {
                g(t);
              }
            }
          : a;
        e.o = c
          ? function (b) {
              try {
                var e = c.call(d, b);
                !q(e) && b instanceof Wf ? g(b) : a(e);
              } catch (t) {
                g(t);
              }
            }
          : g;
      });
      e.l.w = a;
      ag(a, e);
      return e.l;
    };
  Jf.prototype.S = function (a) {
    this.l = 0;
    If(this, 2, a);
  };
  Jf.prototype.da = function (a) {
    this.l = 0;
    If(this, 3, a);
  };
  var If = function (a, b, c) {
      0 == a.l &&
        (a === c &&
          ((b = 3), (c = new TypeError("Promise cannot resolve to itself"))),
        (a.l = 1),
        Pf(c, a.S, a.da, a) ||
          ((a.H = c),
          (a.l = b),
          (a.w = null),
          $f(a),
          3 != b || c instanceof Wf || bg(a, c)));
    },
    Pf = function (a, b, c, d) {
      if (a instanceof Jf) return ag(a, Mf(b || u, c || null, d)), !0;
      if (Hf(a)) return a.then(b, c, d), !0;
      if (x(a))
        try {
          var e = a.then;
          if (w(e)) return cg(a, e, b, c, d), !0;
        } catch (f) {
          return c.call(d, f), !0;
        }
      return !1;
    },
    cg = function (a, b, c, d, e) {
      var f = !1,
        g = function (a) {
          f || ((f = !0), c.call(e, a));
        },
        l = function (a) {
          f || ((f = !0), d.call(e, a));
        };
      try {
        b.call(a, g, l);
      } catch (m) {
        l(m);
      }
    },
    $f = function (a) {
      a.F || ((a.F = !0), Ef(a.D, a));
    },
    Yf = function (a) {
      var b = null;
      a.o && ((b = a.o), (a.o = b.next), (b.next = null));
      a.o || (a.A = null);
      return b;
    };
  Jf.prototype.D = function () {
    for (var a; (a = Yf(this)); ) Zf(this, a, this.l, this.H);
    this.F = !1;
  };
  var Zf = function (a, b, c, d) {
      if (3 == c && b.o && !b.B) for (; a && a.B; a = a.w) a.B = !1;
      if (b.l) (b.l.w = null), dg(b, c, d);
      else
        try {
          b.B ? b.A.call(b.w) : dg(b, c, d);
        } catch (e) {
          eg.call(null, e);
        }
      qf(Lf, b);
    },
    dg = function (a, b, c) {
      2 == b ? a.A.call(a.w, c) : a.o && a.o.call(a.w, c);
    },
    bg = function (a, b) {
      a.B = !0;
      Ef(function () {
        a.B && eg.call(null, b);
      });
    },
    eg = rf,
    Wf = function (a) {
      Ua.call(this, a);
    };
  A(Wf, Ua);
  Wf.prototype.name = "cancel";
  var Sf = function (a, b, c) {
    this.l = a;
    this.resolve = b;
    this.reject = c;
  };
  var Q = function (a, b, c) {
      if (w(a)) c && (a = y(a, c));
      else if (a && "function" == typeof a.handleEvent) a = y(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : p.setTimeout(a, b || 0);
    },
    fg = function (a) {
      p.clearTimeout(a);
    };
  var gg = function (a, b, c) {
    O.call(this);
    this.l = a;
    this.A = b || 0;
    this.o = c;
    this.w = y(this.ie, this);
  };
  A(gg, O);
  n = gg.prototype;
  n.ib = 0;
  n.L = function () {
    gg.I.L.call(this);
    this.stop();
    delete this.l;
    delete this.o;
  };
  n.start = function (a) {
    this.stop();
    this.ib = Q(this.w, q(a) ? a : this.A);
  };
  n.stop = function () {
    0 != this.ib && fg(this.ib);
    this.ib = 0;
  };
  n.ie = function () {
    this.ib = 0;
    this.l && this.l.call(this.o);
  };
  var hg = function () {
    this.o = -1;
  };
  var ig = function (a, b, c) {
    this.o = -1;
    this.l = a;
    this.o = c || a.o || 16;
    this.F = Array(this.o);
    this.B = Array(this.o);
    a = b;
    a.length > this.o && (this.l.w(a), (a = this.l.A()), this.l.reset());
    for (c = 0; c < this.o; c++)
      (b = c < a.length ? a[c] : 0), (this.F[c] = b ^ 92), (this.B[c] = b ^ 54);
    this.l.w(this.B);
  };
  A(ig, hg);
  ig.prototype.reset = function () {
    this.l.reset();
    this.l.w(this.B);
  };
  ig.prototype.w = function (a, b) {
    this.l.w(a, b);
  };
  ig.prototype.A = function () {
    var a = this.l.A();
    this.l.reset();
    this.l.w(this.F);
    this.l.w(a);
    return this.l.A();
  };
  var lg = function (a, b) {
      this.o = 64;
      this.F = p.Uint8Array ? new Uint8Array(this.o) : Array(this.o);
      this.H = this.B = 0;
      this.l = [];
      this.S = a;
      this.D = b;
      this.da = p.Int32Array ? new Int32Array(64) : Array(64);
      q(jg) || (p.Int32Array ? (jg = new Int32Array(kg)) : (jg = kg));
      this.reset();
    },
    jg;
  A(lg, hg);
  var mg = hb(128, nb(63));
  lg.prototype.reset = function () {
    this.H = this.B = 0;
    this.l = p.Int32Array ? new Int32Array(this.D) : ib(this.D);
  };
  var ng = function (a) {
    for (var b = a.F, c = a.da, d = 0, e = 0; e < b.length; )
      (c[d++] = (b[e] << 24) | (b[e + 1] << 16) | (b[e + 2] << 8) | b[e + 3]),
        (e = 4 * d);
    for (b = 16; 64 > b; b++) {
      e = c[b - 15] | 0;
      d = c[b - 2] | 0;
      var f =
          ((c[b - 16] | 0) +
            (((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3))) |
          0,
        g =
          ((c[b - 7] | 0) +
            (((d >>> 17) | (d << 15)) ^
              ((d >>> 19) | (d << 13)) ^
              (d >>> 10))) |
          0;
      c[b] = (f + g) | 0;
    }
    d = a.l[0] | 0;
    e = a.l[1] | 0;
    var l = a.l[2] | 0,
      m = a.l[3] | 0,
      t = a.l[4] | 0,
      E = a.l[5] | 0,
      H = a.l[6] | 0;
    f = a.l[7] | 0;
    for (b = 0; 64 > b; b++) {
      var Lb =
        ((((d >>> 2) | (d << 30)) ^
          ((d >>> 13) | (d << 19)) ^
          ((d >>> 22) | (d << 10))) +
          ((d & e) ^ (d & l) ^ (e & l))) |
        0;
      g = (t & E) ^ (~t & H);
      f =
        (f +
          (((t >>> 6) | (t << 26)) ^
            ((t >>> 11) | (t << 21)) ^
            ((t >>> 25) | (t << 7)))) |
        0;
      g = (g + (jg[b] | 0)) | 0;
      g = (f + ((g + (c[b] | 0)) | 0)) | 0;
      f = H;
      H = E;
      E = t;
      t = (m + g) | 0;
      m = l;
      l = e;
      e = d;
      d = (g + Lb) | 0;
    }
    a.l[0] = (a.l[0] + d) | 0;
    a.l[1] = (a.l[1] + e) | 0;
    a.l[2] = (a.l[2] + l) | 0;
    a.l[3] = (a.l[3] + m) | 0;
    a.l[4] = (a.l[4] + t) | 0;
    a.l[5] = (a.l[5] + E) | 0;
    a.l[6] = (a.l[6] + H) | 0;
    a.l[7] = (a.l[7] + f) | 0;
  };
  lg.prototype.w = function (a, b) {
    q(b) || (b = a.length);
    var c = 0,
      d = this.B;
    if (r(a))
      for (; c < b; )
        (this.F[d++] = a.charCodeAt(c++)), d == this.o && (ng(this), (d = 0));
    else if (Ja(a))
      for (; c < b; ) {
        var e = a[c++];
        if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0)))
          throw Error("message must be a byte array");
        this.F[d++] = e;
        d == this.o && (ng(this), (d = 0));
      }
    else throw Error("message must be string or array");
    this.B = d;
    this.H += b;
  };
  lg.prototype.A = function () {
    var a = [],
      b = 8 * this.H;
    56 > this.B ? this.w(mg, 56 - this.B) : this.w(mg, this.o - (this.B - 56));
    for (var c = 63; 56 <= c; c--) (this.F[c] = b & 255), (b /= 256);
    ng(this);
    for (c = b = 0; c < this.S; c++)
      for (var d = 24; 0 <= d; d -= 8) a[b++] = (this.l[c] >> d) & 255;
    return a;
  };
  var kg = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ];
  var pg = function () {
    lg.call(this, 8, og);
  };
  A(pg, lg);
  var og = [
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ];
  var qg =
      "StopIteration" in p
        ? p.StopIteration
        : { message: "StopIteration", stack: "" },
    rg = h();
  rg.prototype.next = function () {
    throw qg;
  };
  rg.prototype.yb = function () {
    return this;
  };
  var sg = function (a) {
      if (a instanceof rg) return a;
      if ("function" == typeof a.yb) return a.yb(!1);
      if (Ja(a)) {
        var b = 0,
          c = new rg();
        c.next = function () {
          for (;;) {
            if (b >= a.length) throw qg;
            if (b in a) return a[b++];
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    tg = function (a, b, c) {
      if (Ja(a))
        try {
          B(a, b, c);
        } catch (d) {
          if (d !== qg) throw d;
        }
      else {
        a = sg(a);
        try {
          for (;;) b.call(c, a.next(), void 0, a);
        } catch (d) {
          if (d !== qg) throw d;
        }
      }
    };
  var ug = function (a, b) {
    this.o = {};
    this.l = [];
    this.A = this.w = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof ug)
        for (c = a.ua(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  };
  ug.prototype.pa = function () {
    vg(this);
    for (var a = [], b = 0; b < this.l.length; b++) a.push(this.o[this.l[b]]);
    return a;
  };
  ug.prototype.ua = function () {
    vg(this);
    return this.l.concat();
  };
  var wg = function (a) {
      a.o = {};
      a.l.length = 0;
      a.w = 0;
      a.A = 0;
    },
    yg = function (a, b) {
      return xg(a.o, b)
        ? (delete a.o[b], a.w--, a.A++, a.l.length > 2 * a.w && vg(a), !0)
        : !1;
    },
    vg = function (a) {
      if (a.w != a.l.length) {
        for (var b = 0, c = 0; b < a.l.length; ) {
          var d = a.l[b];
          xg(a.o, d) && (a.l[c++] = d);
          b++;
        }
        a.l.length = c;
      }
      if (a.w != a.l.length) {
        var e = {};
        for (c = b = 0; b < a.l.length; )
          (d = a.l[b]), xg(e, d) || ((a.l[c++] = d), (e[d] = 1)), b++;
        a.l.length = c;
      }
    };
  ug.prototype.get = function (a, b) {
    return xg(this.o, a) ? this.o[a] : b;
  };
  ug.prototype.set = function (a, b) {
    xg(this.o, a) || (this.w++, this.l.push(a), this.A++);
    this.o[a] = b;
  };
  ug.prototype.forEach = function (a, b) {
    for (var c = this.ua(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  ug.prototype.yb = function (a) {
    vg(this);
    var b = 0,
      c = this.A,
      d = this,
      e = new rg();
    e.next = function () {
      if (c != d.A)
        throw Error("The map has changed since the iterator was created");
      if (b >= d.l.length) throw qg;
      var e = d.l[b++];
      return a ? e : d.o[e];
    };
    return e;
  };
  var xg = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var zg = function (a, b) {
    O.call(this);
    this.A = b;
    this.l = [];
    if (a > this.A)
      throw Error(
        "[goog.structs.SimplePool] Initial cannot be greater than max",
      );
    for (var c = 0; c < a; c++) this.l.push(this.o());
  };
  A(zg, O);
  var Ag = function (a, b) {
    a.l.length < a.A ? a.l.push(b) : a.w(b);
  };
  zg.prototype.o = function () {
    return {};
  };
  zg.prototype.w = function (a) {
    if (x(a))
      if (w(a.oa)) a.oa();
      else for (var b in a) delete a[b];
  };
  zg.prototype.L = function () {
    zg.I.L.call(this);
    for (var a = this.l; a.length; ) this.w(a.pop());
    delete this.l;
  };
  var Dg = function () {
      this.l = [];
      this.o = new ug();
      this.U = this.M = this.za = this.H = 0;
      this.w = new ug();
      this.F = this.da = 0;
      this.Y = 1;
      this.A = new zg(0, 4e3);
      this.A.o = function () {
        return new Bg();
      };
      this.D = new zg(0, 50);
      this.D.o = function () {
        return new Cg();
      };
      var a = this;
      this.B = new zg(0, 2e3);
      this.B.o = function () {
        return String(a.Y++);
      };
      this.B.w = h();
      this.S = {};
    },
    Cg = function () {
      this.gd = this.time = this.count = 0;
    };
  Cg.prototype.toString = function () {
    var a = [];
    a.push(
      this.type,
      " ",
      this.count,
      " (",
      Math.round(10 * this.time) / 10,
      " ms)",
    );
    this.gd && a.push(" [VarAlloc = ", this.gd, "]");
    return a.join("");
  };
  var Bg = h(),
    Hg = function (a, b, c, d) {
      var e = [];
      -1 == c ? e.push("    ") : e.push(Eg(a.o - c));
      e.push(" ", Gg(a.o - b));
      0 == a.l
        ? e.push(" Start        ")
        : 1 == a.l
        ? (e.push(" Done "), e.push(Eg(a.B - a.startTime), " ms "))
        : e.push(" Comment      ");
      e.push(d, a);
      0 < a.A && e.push("[VarAlloc ", a.A, "] ");
      return e.join("");
    };
  Bg.prototype.toString = function () {
    return null == this.type ? this.w : "[" + this.type + "] " + this.w;
  };
  var Ig = { $i: !0 },
    Jg = function (a) {
      a.S.stop &&
        tg(
          a.o,
          function (a) {
            this.S.stop(a.id, Ig);
          },
          a,
        );
      wg(a.o);
    };
  Dg.prototype.reset = function () {
    Jg(this);
    for (var a = 0; a < this.l.length; a++) {
      var b = this.l[a];
      b.id
        ? xg(this.o.o, b.id) || (Ag(this.B, b.id), Ag(this.A, b))
        : Ag(this.A, b);
    }
    this.l.length = 0;
    this.H = z();
    this.F = this.da = this.U = this.M = this.za = 0;
    a = this.w.ua();
    for (b = 0; b < a.length; b++) {
      var c = this.w.get(a[b]);
      c.count = 0;
      c.time = 0;
      c.gd = 0;
      Ag(this.D, c);
    }
    wg(this.w);
  };
  Dg.prototype.toString = function () {
    for (var a = [], b = -1, c = [], d = 0; d < this.l.length; d++) {
      var e = this.l[d];
      1 == e.l && c.pop();
      a.push(" ", Hg(e, this.H, b, c.join("")));
      b = e.o;
      a.push("\n");
      0 == e.l && c.push("|  ");
    }
    if (0 != this.o.w) {
      var f = z();
      a.push(" Unstopped timers:\n");
      tg(this.o, function (b) {
        a.push(
          "  ",
          b,
          " (",
          f - b.startTime,
          " ms, started at ",
          Gg(b.startTime),
          ")\n",
        );
      });
    }
    b = this.w.ua();
    for (d = 0; d < b.length; d++)
      (c = this.w.get(b[d])), 1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push(
      "Total tracers created ",
      this.da,
      "\n",
      "Total comments created ",
      this.F,
      "\n",
      "Overhead start: ",
      this.za,
      " ms\n",
      "Overhead end: ",
      this.M,
      " ms\n",
      "Overhead comment: ",
      this.U,
      " ms\n",
    );
    return a.join("");
  };
  var Eg = function (a) {
      a = Math.round(a);
      var b = "";
      1e3 > a && (b = " ");
      100 > a && (b = "  ");
      10 > a && (b = "   ");
      return b + a;
    },
    Gg = function (a) {
      a = Math.round(a);
      return (
        String(100 + ((a / 1e3) % 60)).substring(1, 3) +
        "." +
        String(1e3 + (a % 1e3)).substring(1, 4)
      );
    };
  new Dg();
  var Kg = function (a) {
    O.call(this);
    this.o = a;
  };
  A(Kg, O);
  Kg.prototype.l = function (a) {
    return Lg(this, a);
  };
  var Mg = function (a, b) {
      return (b ? "__wrapper_" : "__protected_") + Na(a) + "__";
    },
    Lg = function (a, b) {
      var c = Mg(a, !0);
      b[c] || ((b[c] = Ng(a, b))[Mg(a, !1)] = b);
      return b[c];
    },
    Ng = function (a, b) {
      var c = function () {
        if (a.da) return b.apply(this, arguments);
        try {
          return b.apply(this, arguments);
        } catch (d) {
          if (
            !(
              (d &&
                "object" === typeof d &&
                d.message &&
                0 == d.message.indexOf("Error in protected function: ")) ||
              ("string" === typeof d &&
                0 == d.indexOf("Error in protected function: "))
            )
          )
            throw (a.o(d), new Og(d));
        } finally {
        }
      };
      c[Mg(a, !1)] = b;
      return c;
    },
    Pg = function (a, b) {
      var c = Ga("window"),
        d = c[b];
      c[b] = function (b, c) {
        r(b) && (b = Qa(Sa, b));
        arguments[0] = b = Lg(a, b);
        if (d.apply) return d.apply(this, arguments);
        var e = b;
        if (2 < arguments.length) {
          var f = Array.prototype.slice.call(arguments, 2);
          e = function () {
            b.apply(this, f);
          };
        }
        return d(e, c);
      };
      c[b][Mg(a, !1)] = d;
    };
  Kg.prototype.L = function () {
    var a = Ga("window");
    var b = a.setTimeout;
    b = b[Mg(this, !1)] || b;
    a.setTimeout = b;
    b = a.setInterval;
    b = b[Mg(this, !1)] || b;
    a.setInterval = b;
    Kg.I.L.call(this);
  };
  var Og = function (a) {
    Ua.call(
      this,
      "Error in protected function: " +
        (a && a.message ? String(a.message) : String(a)),
    );
    (a = a && a.stack) && r(a) && (this.stack = a);
  };
  A(Og, Ua);
  var Qg = function (a) {
      return /^\s*$/.test(a)
        ? !1
        : /^[\],:{}\s\u2028\u2029]*$/.test(
            a
              .replace(/\\["\\\/bfnrtu]/g, "@")
              .replace(
                /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                "]",
              )
              .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""),
          );
    },
    Rg = function (a) {
      a = String(a);
      if (Qg(a))
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    Tg = function (a) {
      return new Sg().Fb(a);
    },
    Sg = h();
  Sg.prototype.Fb = function (a) {
    var b = [];
    Ug(this, a, b);
    return b.join("");
  };
  var Ug = function (a, b, c) {
      if (null == b) c.push("null");
      else {
        if ("object" == typeof b) {
          if (v(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++)
              c.push(e), Ug(a, d[f], c), (e = ",");
            c.push("]");
            return;
          }
          if (
            b instanceof String ||
            b instanceof Number ||
            b instanceof Boolean
          )
            b = b.valueOf();
          else {
            c.push("{");
            e = "";
            for (d in b)
              Object.prototype.hasOwnProperty.call(b, d) &&
                ((f = b[d]),
                "function" != typeof f &&
                  (c.push(e), Vg(d, c), c.push(":"), Ug(a, f, c), (e = ",")));
            c.push("}");
            return;
          }
        }
        switch (typeof b) {
          case "string":
            Vg(b, c);
            break;
          case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
            break;
          case "boolean":
            c.push(String(b));
            break;
          case "function":
            c.push("null");
            break;
          default:
            throw Error("Unknown type: " + typeof b);
        }
      }
    },
    Wg = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b",
    },
    Xg = /\uffff/.test("\uffff")
      ? /[\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\"\x00-\x1f\x7f-\xff]/g,
    Vg = function (a, b) {
      b.push(
        '"',
        a.replace(Xg, function (a) {
          var b = Wg[a];
          b ||
            ((b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1)),
            (Wg[a] = b));
          return b;
        }),
        '"',
      );
    };
  var Yg = h();
  Yg.prototype.l = null;
  var $g = function (a) {
    var b;
    (b = a.l) || ((b = {}), Zg(a) && ((b[0] = !0), (b[1] = !0)), (b = a.l = b));
    return b;
  };
  var ah,
    bh = h();
  A(bh, Yg);
  var ch = function (a) {
      return (a = Zg(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    Zg = function (a) {
      if (
        !a.o &&
        "undefined" == typeof XMLHttpRequest &&
        "undefined" != typeof ActiveXObject
      ) {
        for (
          var b = [
              "MSXML2.XMLHTTP.6.0",
              "MSXML2.XMLHTTP.3.0",
              "MSXML2.XMLHTTP",
              "Microsoft.XMLHTTP",
            ],
            c = 0;
          c < b.length;
          c++
        ) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.o = d);
          } catch (e) {}
        }
        throw Error(
          "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed",
        );
      }
      return a.o;
    };
  ah = new bh();
  var dh = function (a) {
      if (a.pa && "function" == typeof a.pa) return a.pa();
      if (r(a)) return a.split("");
      if (Ja(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return Rb(a);
    },
    eh = function (a, b, c) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
      else if (Ja(a) || r(a)) B(a, b, c);
      else {
        if (a.ua && "function" == typeof a.ua) var d = a.ua();
        else if (a.pa && "function" == typeof a.pa) d = void 0;
        else if (Ja(a) || r(a)) {
          d = [];
          for (var e = a.length, f = 0; f < e; f++) d.push(f);
        } else d = Sb(a);
        e = dh(a);
        f = e.length;
        for (var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
      }
    };
  var fh =
      /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    gh = function (a) {
      a = a.match(fh)[1] || null;
      !a &&
        p.self &&
        p.self.location &&
        ((a = p.self.location.protocol), (a = a.substr(0, a.length - 1)));
      return a ? a.toLowerCase() : "";
    },
    hh = function (a) {
      var b = a.indexOf("#");
      return 0 > b ? a : a.substr(0, b);
    },
    ih = function (a, b) {
      if (a)
        for (var c = a.split("&"), d = 0; d < c.length; d++) {
          var e = c[d].indexOf("="),
            f = null;
          if (0 <= e) {
            var g = c[d].substring(0, e);
            f = c[d].substring(e + 1);
          } else g = c[d];
          b(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
        }
    },
    jh = function (a, b) {
      if (!b) return a;
      var c = a.indexOf("#");
      0 > c && (c = a.length);
      var d = a.indexOf("?");
      if (0 > d || d > c) {
        d = c;
        var e = "";
      } else e = a.substring(d + 1, c);
      c = [a.substr(0, d), e, a.substr(c)];
      d = c[1];
      c[1] = b ? (d ? d + "&" + b : b) : d;
      return c[0] + (c[1] ? "?" + c[1] : "") + c[2];
    },
    kh = function (a, b, c) {
      if (v(b)) for (var d = 0; d < b.length; d++) kh(a, String(b[d]), c);
      else
        null != b &&
          c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
    },
    lh = function (a, b) {
      for (var c = [], d = b || 0; d < a.length; d += 2) kh(a[d], a[d + 1], c);
      return c.join("&");
    },
    mh = function (a) {
      var b = [],
        c;
      for (c in a) kh(c, a[c], b);
      return b.join("&");
    },
    nh = function (a, b) {
      var c = 2 == arguments.length ? lh(arguments[1], 0) : lh(arguments, 1);
      return jh(a, c);
    };
  var oh = function (a) {
    P.call(this);
    this.headers = new ug();
    this.Y = a || null;
    this.l = !1;
    this.M = this.R = null;
    this.Ja = this.sa = "";
    this.w = 0;
    this.D = "";
    this.o = this.P = this.H = this.V = !1;
    this.B = 0;
    this.U = null;
    this.A = "";
    this.ga = this.F = !1;
  };
  A(oh, P);
  var ph = /^https?$/i,
    qh = ["POST", "PUT"],
    rh = [];
  oh.prototype.qa = function () {
    this.oa();
    gb(rh, this);
  };
  oh.prototype.vd = k("A");
  oh.prototype.yd = k("F");
  var vh = function (a, b, c, d, e) {
      if (a.R)
        throw Error(
          "[goog.net.XhrIo] Object is active with another request=" +
            a.sa +
            "; newUri=" +
            b,
        );
      c = c ? c.toUpperCase() : "GET";
      a.sa = b;
      a.D = "";
      a.w = 0;
      a.Ja = c;
      a.V = !1;
      a.l = !0;
      a.R = a.Y ? ch(a.Y) : ch(ah);
      a.M = a.Y ? $g(a.Y) : $g(ah);
      a.R.onreadystatechange = y(a.ia, a);
      try {
        (a.P = !0), a.R.open(c, String(b), !0), (a.P = !1);
      } catch (g) {
        sh(a, g);
        return;
      }
      b = d || "";
      var f = new ug(a.headers);
      e &&
        eh(e, function (a, b) {
          f.set(b, a);
        });
      e = db(f.ua());
      d = p.FormData && b instanceof p.FormData;
      !eb(qh, c) ||
        e ||
        d ||
        f.set(
          "Content-Type",
          "application/x-www-form-urlencoded;charset=utf-8",
        );
      f.forEach(function (a, b) {
        this.R.setRequestHeader(b, a);
      }, a);
      a.A && (a.R.responseType = a.A);
      "withCredentials" in a.R &&
        a.R.withCredentials !== a.F &&
        (a.R.withCredentials = a.F);
      try {
        th(a),
          0 < a.B &&
            ((a.ga = uh(a.R)),
            a.ga
              ? ((a.R.timeout = a.B), (a.R.ontimeout = y(a.Za, a)))
              : (a.U = Q(a.Za, a.B, a))),
          (a.H = !0),
          a.R.send(b),
          (a.H = !1);
      } catch (g) {
        sh(a, g);
      }
    },
    uh = function (a) {
      return D && yc(9) && Da(a.timeout) && q(a.ontimeout);
    },
    cb = function (a) {
      return "content-type" == a.toLowerCase();
    };
  oh.prototype.Za = function () {
    "undefined" != typeof Ca &&
      this.R &&
      ((this.D = "Timed out after " + this.B + "ms, aborting"),
      (this.w = 8),
      this.dispatchEvent("timeout"),
      this.abort(8));
  };
  var sh = function (a, b) {
      a.l = !1;
      a.R && ((a.o = !0), a.R.abort(), (a.o = !1));
      a.D = b;
      a.w = 5;
      wh(a);
      xh(a);
    },
    wh = function (a) {
      a.V ||
        ((a.V = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
  oh.prototype.abort = function (a) {
    this.R &&
      this.l &&
      ((this.l = !1),
      (this.o = !0),
      this.R.abort(),
      (this.o = !1),
      (this.w = a || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      xh(this));
  };
  oh.prototype.L = function () {
    this.R &&
      (this.l && ((this.l = !1), (this.o = !0), this.R.abort(), (this.o = !1)),
      xh(this, !0));
    oh.I.L.call(this);
  };
  oh.prototype.ia = function () {
    this.da || (this.P || this.H || this.o ? yh(this) : this.ca());
  };
  oh.prototype.ca = function () {
    yh(this);
  };
  var yh = function (a) {
      if (
        a.l &&
        "undefined" != typeof Ca &&
        (!a.M[1] || 4 != zh(a) || 2 != Ah(a))
      )
        if (a.H && 4 == zh(a)) Q(a.ia, 0, a);
        else if ((a.dispatchEvent("readystatechange"), 4 == zh(a))) {
          a.l = !1;
          try {
            if (Bh(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
            else {
              a.w = 6;
              try {
                var b = 2 < zh(a) ? a.R.statusText : "";
              } catch (c) {
                b = "";
              }
              a.D = b + " [" + Ah(a) + "]";
              wh(a);
            }
          } finally {
            xh(a);
          }
        }
    },
    xh = function (a, b) {
      if (a.R) {
        th(a);
        var c = a.R,
          d = a.M[0] ? u : null;
        a.R = null;
        a.M = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    th = function (a) {
      a.R && a.ga && (a.R.ontimeout = null);
      a.U && (fg(a.U), (a.U = null));
    },
    Bh = function (a) {
      var b = Ah(a);
      a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
          var c = !0;
          break a;
        default:
          c = !1;
      }
      if (!c) {
        if ((b = 0 === b)) (a = gh(String(a.sa))), (b = !ph.test(a));
        c = b;
      }
      return c;
    },
    zh = function (a) {
      return a.R ? a.R.readyState : 0;
    },
    Ah = function (a) {
      try {
        return 2 < zh(a) ? a.R.status : -1;
      } catch (b) {
        return -1;
      }
    };
  oh.prototype.getResponse = function () {
    try {
      if (!this.R) return null;
      if ("response" in this.R) return this.R.response;
      switch (this.A) {
        case "":
        case "text":
          return this.R.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in this.R)
            return this.R.mozResponseArrayBuffer;
      }
      return null;
    } catch (a) {
      return null;
    }
  };
  xe(function (a) {
    oh.prototype.ca = a(oh.prototype.ca);
  });
  var Dh = function (a, b, c) {
    P.call(this);
    this.w = b || null;
    this.o = {};
    this.F = Ch;
    this.B = a;
    if (!c)
      if (((this.l = null), D && !yc("10"))) ye(y(this.A, this));
      else {
        this.l = new Kg(y(this.A, this));
        Pg(this.l, "setTimeout");
        Pg(this.l, "setInterval");
        a = this.l;
        b = Ga("window");
        c = [
          "requestAnimationFrame",
          "mozRequestAnimationFrame",
          "webkitAnimationFrame",
          "msRequestAnimationFrame",
        ];
        for (var d = 0; d < c.length; d++) {
          var e = c[d];
          c[d] in b && Pg(a, e);
        }
        a = this.l;
        we = !0;
        b = y(a.l, a);
        for (c = 0; c < ue.length; c++) ue[c](b);
        ve.push(a);
      }
  };
  A(Dh, P);
  var Eh = function (a) {
    De.call(this, "a");
    this.error = a;
  };
  A(Eh, De);
  var Fh = function () {
      new Dh("/recaptcha/api2/jserrorlogging", void 0, void 0);
    },
    Ch = function (a, b, c, d) {
      var e = new oh();
      rh.push(e);
      e.S.add("ready", e.qa, !0, void 0, void 0);
      vh(e, a, b, c, d);
    };
  Dh.prototype.A = function (a, b) {
    a = a.error || a;
    var c = b ? Wb(b) : {};
    a instanceof Error && Yb(c, a.__closure__error__context__984382 || {});
    var d = Ga("window.location.href");
    if (r(a))
      d = {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: d,
        stack: "Not available",
      };
    else {
      var e = !1;
      try {
        var f = a.lineNumber || a.line || "Not available";
      } catch (H) {
        (f = "Not available"), (e = !0);
      }
      try {
        var g =
          a.fileName || a.filename || a.sourceURL || p.$googDebugFname || d;
      } catch (H) {
        (g = "Not available"), (e = !0);
      }
      d =
        !e && a.lineNumber && a.fileName && a.stack && a.message && a.name
          ? a
          : {
              message: a.message || "Not available",
              name: a.name || "UnknownError",
              lineNumber: f,
              fileName: g,
              stack: a.stack || "Not available",
            };
    }
    if (this.w)
      try {
        this.w(d, c);
      } catch (H) {}
    g = d.message.substring(0, 1900);
    f = d.stack;
    try {
      var l = nh(
        this.B,
        "script",
        d.fileName,
        "error",
        g,
        "line",
        d.lineNumber,
      );
      if (!Tb(this.o)) {
        g = l;
        var m = mh(this.o);
        l = jh(g, m);
      }
      m = {};
      m.trace = f;
      if (c) for (var t in c) m["context." + t] = c[t];
      var E = mh(m);
      Da(null) && (E = E.substring(0, null));
      this.F(l, "POST", E, this.H);
    } catch (H) {}
    try {
      this.dispatchEvent(new Eh(d, c));
    } catch (H) {}
  };
  Dh.prototype.L = function () {
    se(this.l);
    Dh.I.L.call(this);
  };
  var Gh = function (a) {
      if (a.classList) return a.classList;
      a = a.className;
      return (r(a) && a.match(/\S+/g)) || [];
    },
    Hh = function (a, b) {
      return a.classList ? a.classList.contains(b) : eb(Gh(a), b);
    },
    Ih = function (a, b) {
      a.classList
        ? a.classList.add(b)
        : Hh(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
    },
    Jh = function (a, b) {
      if (a.classList)
        B(b, function (b) {
          Ih(a, b);
        });
      else {
        var c = {};
        B(Gh(a), function (a) {
          c[a] = !0;
        });
        B(b, function (a) {
          c[a] = !0;
        });
        a.className = "";
        for (var d in c) a.className += 0 < a.className.length ? " " + d : d;
      }
    },
    Kh = function (a, b) {
      a.classList
        ? a.classList.remove(b)
        : Hh(a, b) &&
          (a.className = Xa(Gh(a), function (a) {
            return a != b;
          }).join(" "));
    },
    Lh = function (a, b) {
      a.classList
        ? B(b, function (b) {
            Kh(a, b);
          })
        : (a.className = Xa(Gh(a), function (a) {
            return !eb(b, a);
          }).join(" "));
    },
    Mh = function (a, b, c) {
      c ? Ih(a, b) : Kh(a, b);
    };
  var Nh = function (a, b) {
    if ("FORM" == a.tagName)
      for (var c = a.elements, d = 0; (a = c[d]); d++) Nh(a, b);
    else 1 == b && a.blur(), (a.disabled = b);
  };
  var Qh = function (a, b, c, d, e, f) {
      if (!(D || gc || (jc && yc("525")))) return !0;
      if (lc && e) return Oh(a);
      if (e && !d) return !1;
      Da(b) && (b = Ph(b));
      e = 17 == b || 18 == b || (lc && 91 == b);
      if (((!c || lc) && e) || (lc && 16 == b && (d || f))) return !1;
      if ((jc || gc) && d && c)
        switch (a) {
          case 220:
          case 219:
          case 221:
          case 192:
          case 186:
          case 189:
          case 187:
          case 188:
          case 190:
          case 191:
          case 192:
          case 222:
            return !1;
        }
      if (D && d && b == a) return !1;
      switch (a) {
        case 13:
          return !0;
        case 27:
          return !(jc || gc);
      }
      return Oh(a);
    },
    Oh = function (a) {
      if (
        (48 <= a && 57 >= a) ||
        (96 <= a && 106 >= a) ||
        (65 <= a && 90 >= a) ||
        ((jc || gc) && 0 == a)
      )
        return !0;
      switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
          return !0;
        default:
          return !1;
      }
    },
    Ph = function (a) {
      if (ic) a = Rh(a);
      else if (lc && jc)
        switch (a) {
          case 93:
            a = 91;
        }
      return a;
    },
    Rh = function (a) {
      switch (a) {
        case 61:
          return 187;
        case 59:
          return 186;
        case 173:
          return 189;
        case 224:
          return 91;
        case 0:
          return 224;
        default:
          return a;
      }
    };
  var Th = function (a) {
    P.call(this);
    this.l = a;
    Ye(a, Sh, this.w, !1, this);
    Ye(a, "click", this.o, !1, this);
  };
  A(Th, P);
  var Sh = ic ? "keypress" : "keydown";
  Th.prototype.w = function (a) {
    (13 == a.keyCode || (jc && 3 == a.keyCode)) && Uh(this, a);
  };
  Th.prototype.o = function (a) {
    Uh(this, a);
  };
  var Uh = function (a, b) {
    var c = new Vh(b);
    if (a.dispatchEvent(c)) {
      c = new Wh(b);
      try {
        a.dispatchEvent(c);
      } finally {
        b.o();
      }
    }
  };
  Th.prototype.L = function () {
    Th.I.L.call(this);
    ef(this.l, Sh, this.w, !1, this);
    ef(this.l, "click", this.o, !1, this);
    delete this.l;
  };
  var Wh = function (a) {
    He.call(this, a.ta);
    this.type = "action";
  };
  A(Wh, He);
  var Vh = function (a) {
    He.call(this, a.ta);
    this.type = "beforeaction";
  };
  A(Vh, He);
  var Xh = function (a) {
    O.call(this);
    this.M = a;
    this.B = {};
  };
  A(Xh, O);
  var Yh = [],
    R = function (a, b, c, d, e) {
      return Zh(a, b, c, d, e);
    },
    Zh = function (a, b, c, d, e) {
      v(c) || (c && (Yh[0] = c.toString()), (c = Yh));
      for (var f = 0; f < c.length; f++) {
        var g = Ye(b, c[f], d || a.handleEvent, e || !1, a.M || a);
        if (!g) break;
        a.B[g.key] = g;
      }
      return a;
    },
    ai = function (a, b, c, d) {
      $h(a, b, c, d, void 0);
    },
    $h = function (a, b, c, d, e, f) {
      if (v(c)) for (var g = 0; g < c.length; g++) $h(a, b, c[g], d, e, f);
      else
        (b = Xe(b, c, d || a.handleEvent, e, f || a.M || a)) &&
          (a.B[b.key] = b);
    },
    bi = function (a, b, c, d, e, f) {
      if (v(c)) for (var g = 0; g < c.length; g++) bi(a, b, c[g], d, e, f);
      else
        (d = d || a.handleEvent),
          (e = x(e) ? !!e.capture : !!e),
          (f = f || a.M || a),
          (d = Ze(d)),
          (e = !!e),
          (c = Le(b)
            ? Se(b.S, String(c), d, e, f)
            : b
            ? (b = af(b))
              ? Se(b, c, d, e, f)
              : null
            : null),
          c && (ff(c), delete a.B[c.key]);
      return a;
    },
    ci = function (a) {
      Pb(
        a.B,
        function (a, c) {
          this.B.hasOwnProperty(c) && ff(a);
        },
        a,
      );
      a.B = {};
    };
  Xh.prototype.L = function () {
    Xh.I.L.call(this);
    ci(this);
  };
  Xh.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var ei = function (a, b) {
    P.call(this);
    a && di(this, a, b);
  };
  A(ei, P);
  n = ei.prototype;
  n.jb = null;
  n.ic = null;
  n.Wc = null;
  n.jc = null;
  n.wa = -1;
  n.Ta = -1;
  n.qc = !1;
  var fi = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45,
    },
    gi = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45,
    },
    hi = D || gc || (jc && yc("525")),
    ii = lc && ic;
  ei.prototype.l = function (a) {
    if (jc || gc)
      if (
        (17 == this.wa && !a.ctrlKey) ||
        (18 == this.wa && !a.altKey) ||
        (lc && 91 == this.wa && !a.metaKey)
      )
        this.Ta = this.wa = -1;
    -1 == this.wa &&
      (a.ctrlKey && 17 != a.keyCode
        ? (this.wa = 17)
        : a.altKey && 18 != a.keyCode
        ? (this.wa = 18)
        : a.metaKey && 91 != a.keyCode && (this.wa = 91));
    hi && !Qh(a.keyCode, this.wa, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
      ? this.handleEvent(a)
      : ((this.Ta = Ph(a.keyCode)), ii && (this.qc = a.altKey));
  };
  ei.prototype.o = function (a) {
    this.Ta = this.wa = -1;
    this.qc = a.altKey;
  };
  ei.prototype.handleEvent = function (a) {
    var b = a.ta,
      c = b.altKey;
    if (D && "keypress" == a.type) {
      var d = this.Ta;
      var e = 13 != d && 27 != d ? b.keyCode : 0;
    } else
      (jc || gc) && "keypress" == a.type
        ? ((d = this.Ta),
          (e = 0 <= b.charCode && 63232 > b.charCode && Oh(d) ? b.charCode : 0))
        : fc && !jc
        ? ((d = this.Ta), (e = Oh(d) ? b.keyCode : 0))
        : ((d = b.keyCode || this.Ta),
          (e = b.charCode || 0),
          ii && (c = this.qc),
          lc && 63 == e && 224 == d && (d = 191));
    var f = (d = Ph(d));
    d
      ? 63232 <= d && d in fi
        ? (f = fi[d])
        : 25 == d && a.shiftKey && (f = 9)
      : b.keyIdentifier && b.keyIdentifier in gi && (f = gi[b.keyIdentifier]);
    a = f == this.wa;
    this.wa = f;
    b = new ji(f, e, a, b);
    b.altKey = c;
    this.dispatchEvent(b);
  };
  ei.prototype.C = k("jb");
  var di = function (a, b, c) {
      a.jc && ki(a);
      a.jb = b;
      a.ic = Ye(a.jb, "keypress", a, c);
      a.Wc = Ye(a.jb, "keydown", a.l, c, a);
      a.jc = Ye(a.jb, "keyup", a.o, c, a);
    },
    ki = function (a) {
      a.ic &&
        (ff(a.ic),
        ff(a.Wc),
        ff(a.jc),
        (a.ic = null),
        (a.Wc = null),
        (a.jc = null));
      a.jb = null;
      a.wa = -1;
      a.Ta = -1;
    };
  ei.prototype.L = function () {
    ei.I.L.call(this);
    ki(this);
  };
  var ji = function (a, b, c, d) {
    He.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.repeat = c;
  };
  A(ji, He);
  var li = {},
    mi = null,
    ni = function (a) {
      a = Na(a);
      delete li[a];
      Tb(li) && mi && mi.stop();
    },
    pi = function () {
      mi ||
        (mi = new gg(function () {
          oi();
        }, 20));
      var a = mi;
      0 != a.ib || a.start();
    },
    oi = function () {
      var a = z();
      Pb(li, function (b) {
        qi(b, a);
      });
      Tb(li) || pi();
    };
  var ri = function () {
    P.call(this);
    this.l = 0;
    this.endTime = this.startTime = null;
  };
  A(ri, P);
  ri.prototype.H = function () {
    this.w("begin");
  };
  ri.prototype.F = function () {
    this.w("end");
  };
  ri.prototype.U = function () {
    this.w("finish");
  };
  ri.prototype.w = function (a) {
    this.dispatchEvent(a);
  };
  var si = function (a, b, c, d) {
    ri.call(this);
    if (!v(a) || !v(b)) throw Error("Start and end parameters must be arrays");
    if (a.length != b.length)
      throw Error("Start and end points must be the same length");
    this.A = a;
    this.P = b;
    this.duration = c;
    this.Y = d;
    this.coords = [];
    this.progress = 0;
    this.V = null;
  };
  A(si, ri);
  si.prototype.B = function (a) {
    if (a || 0 == this.l) (this.progress = 0), (this.coords = this.A);
    else if (1 == this.l) return;
    ni(this);
    this.startTime = a = z();
    -1 == this.l && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    this.V = this.startTime;
    this.progress || this.H();
    this.w("play");
    -1 == this.l && this.w("resume");
    this.l = 1;
    var b = Na(this);
    b in li || (li[b] = this);
    pi();
    qi(this, a);
  };
  si.prototype.stop = function (a) {
    ni(this);
    this.l = 0;
    a && (this.progress = 1);
    ti(this, this.progress);
    this.w("stop");
    this.F();
  };
  si.prototype.L = function () {
    0 == this.l || this.stop(!1);
    this.w("destroy");
    si.I.L.call(this);
  };
  var qi = function (a, b) {
      b < a.startTime &&
        ((a.endTime = b + a.endTime - a.startTime), (a.startTime = b));
      a.progress = (b - a.startTime) / (a.endTime - a.startTime);
      1 < a.progress && (a.progress = 1);
      a.V = b;
      ti(a, a.progress);
      1 == a.progress ? ((a.l = 0), ni(a), a.U(), a.F()) : 1 == a.l && a.o();
    },
    ti = function (a, b) {
      w(a.Y) && (b = a.Y(b));
      a.coords = Array(a.A.length);
      for (var c = 0; c < a.A.length; c++)
        a.coords[c] = (a.P[c] - a.A[c]) * b + a.A[c];
    };
  si.prototype.o = function () {
    this.w("animate");
  };
  si.prototype.w = function (a) {
    this.dispatchEvent(new ui(a, this));
  };
  var ui = function (a, b) {
    De.call(this, a);
    this.coords = b.coords;
    this.duration = b.duration;
    this.progress = b.progress;
  };
  A(ui, De);
  var vi = function () {
    ri.call(this);
    this.o = [];
  };
  A(vi, ri);
  vi.prototype.add = function (a) {
    eb(this.o, a) || (this.o.push(a), Ye(a, "finish", this.D, !1, this));
  };
  vi.prototype.L = function () {
    B(this.o, function (a) {
      a.oa();
    });
    this.o.length = 0;
    vi.I.L.call(this);
  };
  var wi = function () {
    vi.call(this);
    this.A = 0;
  };
  A(wi, vi);
  wi.prototype.B = function (a) {
    if (0 != this.o.length) {
      if (a || 0 == this.l)
        this.A < this.o.length &&
          0 != this.o[this.A].l &&
          this.o[this.A].stop(!1),
          (this.A = 0),
          this.H();
      else if (1 == this.l) return;
      this.w("play");
      -1 == this.l && this.w("resume");
      this.startTime = z();
      this.endTime = null;
      this.l = 1;
      this.o[this.A].B(a);
    }
  };
  wi.prototype.stop = function (a) {
    this.l = 0;
    this.endTime = z();
    if (a)
      for (a = this.A; a < this.o.length; ++a) {
        var b = this.o[a];
        0 == b.l && b.B();
        0 == b.l || b.stop(!0);
      }
    else this.A < this.o.length && this.o[this.A].stop(!1);
    this.w("stop");
    this.F();
  };
  wi.prototype.D = function () {
    1 == this.l &&
      (this.A++,
      this.A < this.o.length
        ? this.o[this.A].B()
        : ((this.endTime = z()), (this.l = 0), this.U(), this.F()));
  };
  var xi = function (a, b, c, d, e, f) {
    si.call(this, [c.left, c.top], [c.right, c.bottom], d, e);
    this.D = a;
    this.Fa = b;
    this.M = !!f;
  };
  A(xi, si);
  xi.prototype.o = function () {
    this.D.style.backgroundPosition =
      -Math.floor(this.coords[0] / this.Fa.width) * this.Fa.width +
      "px " +
      -Math.floor(this.coords[1] / this.Fa.height) * this.Fa.height +
      "px";
    xi.I.o.call(this);
  };
  xi.prototype.U = function () {
    this.M || this.B(!0);
    xi.I.U.call(this);
  };
  var yi = function (a) {
    a = a.D.style;
    a.backgroundPosition = "";
    "undefined" != typeof a.backgroundPositionX &&
      ((a.backgroundPositionX = ""), (a.backgroundPositionY = ""));
  };
  xi.prototype.L = function () {
    xi.I.L.call(this);
    this.D = null;
  };
  var zi = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  zi.prototype.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  zi.prototype.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  zi.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  var Ai = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  };
  Ai.prototype.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  Ai.prototype.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  Ai.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var Ci = function (a, b, c) {
      if (r(b)) (b = Bi(a, b)) && (a.style[b] = c);
      else
        for (var d in b) {
          c = a;
          var e = b[d],
            f = Bi(c, d);
          f && (c.style[f] = e);
        }
    },
    Di = {},
    Bi = function (a, b) {
      var c = Di[b];
      if (!c) {
        var d = Jb(b);
        c = d;
        void 0 === a.style[d] &&
          ((d =
            (jc ? "Webkit" : ic ? "Moz" : D ? "ms" : fc ? "O" : null) + Kb(d)),
          void 0 !== a.style[d] && (c = d));
        Di[b] = c;
      }
      return c;
    },
    Ei = function (a, b) {
      var c = a.style[Jb(b)];
      return "undefined" !== typeof c ? c : a.style[Bi(a, b)] || "";
    },
    Fi = function (a, b) {
      var c = Hd(a);
      return c.defaultView &&
        c.defaultView.getComputedStyle &&
        (c = c.defaultView.getComputedStyle(a, null))
        ? c[b] || c.getPropertyValue(b) || ""
        : "";
    },
    Gi = function (a, b) {
      return (
        Fi(a, b) ||
        (a.currentStyle ? a.currentStyle[b] : null) ||
        (a.style && a.style[b])
      );
    },
    Hi = function (a) {
      try {
        var b = a.getBoundingClientRect();
      } catch (c) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
      D &&
        a.ownerDocument.body &&
        ((a = a.ownerDocument),
        (b.left -= a.documentElement.clientLeft + a.body.clientLeft),
        (b.top -= a.documentElement.clientTop + a.body.clientTop));
      return b;
    },
    Ii = function (a) {
      var b = Hd(a),
        c = new Dd(0, 0);
      var d = b ? Hd(b) : document;
      d = !D || 9 <= Number(zc) || Od(Id(d).l) ? d.documentElement : d.body;
      if (a == d) return c;
      a = Hi(a);
      b = Qd(Id(b).l);
      c.K = a.left + b.K;
      c.J = a.top + b.J;
      return c;
    },
    Ji = function (a) {
      if (1 == a.nodeType) return (a = Hi(a)), new Dd(a.left, a.top);
      a = a.changedTouches ? a.changedTouches[0] : a;
      return new Dd(a.clientX, a.clientY);
    },
    Li = function (a, b, c) {
      if (b instanceof L) (c = b.height), (b = b.width);
      else if (void 0 == c) throw Error("missing height argument");
      a.style.width = Ki(b);
      a.style.height = Ki(c);
    },
    Ki = function (a) {
      "number" == typeof a && (a = Math.round(a) + "px");
      return a;
    },
    Ni = function (a) {
      var b = Mi;
      if ("none" != Gi(a, "display")) return b(a);
      var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a;
    },
    Mi = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = jc && !b && !c;
      return (q(b) && !d) || !a.getBoundingClientRect
        ? new L(b, c)
        : ((a = Hi(a)), new L(a.right - a.left, a.bottom - a.top));
    },
    Oi = function (a) {
      var b = Ii(a);
      a = Ni(a);
      return new Ai(b.K, b.J, a.width, a.height);
    },
    Pi = function (a, b) {
      var c = a.style;
      "opacity" in c
        ? (c.opacity = b)
        : "MozOpacity" in c
        ? (c.MozOpacity = b)
        : "filter" in c &&
          (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")");
    },
    Qi = function (a, b) {
      a.style.display = b ? "" : "none";
    },
    Ri = function (a) {
      return "none" != a.style.display;
    },
    Ti = function (a) {
      var b = Id(void 0),
        c = b.l;
      if (D && c.createStyleSheet) (b = c.createStyleSheet()), Si(b, a);
      else {
        c = Ld(b.l, "HEAD", void 0, void 0)[0];
        if (!c) {
          var d = Ld(b.l, "BODY", void 0, void 0)[0];
          c = b.W("HEAD");
          d.parentNode.insertBefore(c, d);
        }
        d = b.W("STYLE");
        Si(d, a);
        b.o(c, d);
      }
    },
    Si = function (a, b) {
      var c = ud(b);
      D && q(a.cssText) ? (a.cssText = c) : (a.innerHTML = c);
    },
    Ui = ic ? "MozUserSelect" : jc || gc ? "WebkitUserSelect" : null,
    Vi = function (a, b) {
      if (/^\d+px?$/.test(b)) return parseInt(b, 10);
      var c = a.style.left,
        d = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = b;
      var e = a.style.pixelLeft;
      a.style.left = c;
      a.runtimeStyle.left = d;
      return +e;
    },
    Wi = function (a, b) {
      var c = a.currentStyle ? a.currentStyle[b] : null;
      return c ? Vi(a, c) : 0;
    },
    Xi = function (a, b) {
      if (D) {
        var c = Wi(a, b + "Left"),
          d = Wi(a, b + "Right"),
          e = Wi(a, b + "Top"),
          f = Wi(a, b + "Bottom");
        return new zi(e, d, f, c);
      }
      c = Fi(a, b + "Left");
      d = Fi(a, b + "Right");
      e = Fi(a, b + "Top");
      f = Fi(a, b + "Bottom");
      return new zi(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c));
    },
    Yi = /[^\d]+$/,
    Zi = { cm: 1, in: 1, mm: 1, pc: 1, pt: 1 },
    $i = { em: 1, ex: 1 },
    aj = function (a) {
      var b = Gi(a, "fontSize");
      var c = ((c = b.match(Yi)) && c[0]) || null;
      if (b && "px" == c) return parseInt(b, 10);
      if (D) {
        if (String(c) in Zi) return Vi(a, b);
        if (a.parentNode && 1 == a.parentNode.nodeType && String(c) in $i)
          return (
            (a = a.parentNode),
            (c = Gi(a, "fontSize")),
            Vi(a, b == c ? "1em" : b)
          );
      }
      c = Sd("SPAN", {
        style:
          "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;",
      });
      a.appendChild(c);
      b = c.offsetHeight;
      Yd(c);
      return b;
    };
  var bj = (function () {
    if (mc) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(Mb)) ? a[1] : "0";
    }
    return lc
      ? ((a = /10[_.][0-9_.]+/),
        (a = a.exec(Mb)) ? a[0].replace(/_/g, ".") : "10")
      : nc
      ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(Mb)) ? a[1] : "")
      : oc || pc || qc
      ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/),
        (a = a.exec(Mb)) ? a[1].replace(/_/g, ".") : "")
      : "";
  })();
  var cj = function (a) {
      return (a = a.exec(Mb)) ? a[1] : "";
    },
    dj = (function () {
      if (Bc) return cj(/Firefox\/([0-9.]+)/);
      if (D || gc || fc) return xc;
      if (Fc) return bc() ? cj(/CriOS\/([0-9.]+)/) : cj(/Chrome\/([0-9.]+)/);
      if (Gc && !bc()) return cj(/Version\/([0-9.]+)/);
      if (Cc || Dc) {
        var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Mb);
        if (a) return a[1] + "." + a[2];
      } else if (Ec)
        return (a = cj(/Android\s+([0-9.]+)/)) ? a : cj(/Version\/([0-9.]+)/);
      return "";
    })();
  var ej = function (a, b, c, d, e) {
    si.call(this, b, c, d, e);
    this.element = a;
  };
  A(ej, si);
  ej.prototype.M = u;
  ej.prototype.o = function () {
    this.M();
    ej.I.o.call(this);
  };
  ej.prototype.F = function () {
    this.M();
    ej.I.F.call(this);
  };
  ej.prototype.H = function () {
    this.M();
    ej.I.H.call(this);
  };
  var fj = function (a, b, c, d, e) {
    Da(b) && (b = [b]);
    Da(c) && (c = [c]);
    ej.call(this, a, b, c, d, e);
    if (1 != b.length || 1 != c.length)
      throw Error("Start and end points must be 1D");
    this.D = -1;
  };
  A(fj, ej);
  var gj = 1 / 1024;
  fj.prototype.M = function () {
    var a = this.coords[0];
    Math.abs(a - this.D) >= gj && (Pi(this.element, a), (this.D = a));
  };
  fj.prototype.H = function () {
    this.D = -1;
    fj.I.H.call(this);
  };
  fj.prototype.F = function () {
    this.D = -1;
    fj.I.F.call(this);
  };
  var hj = function (a, b, c) {
    fj.call(this, a, 1, 0, b, c);
  };
  A(hj, fj);
  var jj = function (a) {
      ij();
      var b = new id();
      b.o = a;
      return b;
    },
    ij = u;
  var kj = function (a, b, c, d) {
      this.l = a;
      this.w = b;
      this.o = c;
      this.A = d;
    },
    lj = function (a, b, c) {
      b instanceof Dd && ((c = b.J), (b = b.K));
      var d = a.l,
        e = a.w,
        f = a.o - a.l,
        g = a.A - a.w;
      return (
        ((Number(b) - d) * (a.o - d) + (Number(c) - e) * (a.A - e)) /
        (f * f + g * g)
      );
    },
    mj = function (a, b) {
      var c = a.l,
        d = a.w;
      return new Dd(c + b * (a.o - c), d + b * (a.A - d));
    }; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
  var nj = function (a, b) {
    this.B = [];
    this.M = a;
    this.U = b || null;
    this.A = this.l = !1;
    this.w = void 0;
    this.S = this.za = this.H = !1;
    this.F = 0;
    this.o = null;
    this.D = 0;
  };
  nj.prototype.cancel = function (a) {
    if (this.l) this.w instanceof nj && this.w.cancel();
    else {
      if (this.o) {
        var b = this.o;
        delete this.o;
        a ? b.cancel(a) : (b.D--, 0 >= b.D && b.cancel());
      }
      this.M ? this.M.call(this.U, this) : (this.S = !0);
      this.l || ((a = new oj(this)), pj(this), qj(this, !1, a));
    }
  };
  nj.prototype.da = function (a, b) {
    this.H = !1;
    qj(this, a, b);
  };
  var qj = function (a, b, c) {
      a.l = !0;
      a.w = c;
      a.A = !b;
      rj(a);
    },
    pj = function (a) {
      if (a.l) {
        if (!a.S) throw new sj(a);
        a.S = !1;
      }
    },
    tj = function (a, b, c) {
      a.B.push([b, c, void 0]);
      a.l && rj(a);
    };
  nj.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new Jf(function (a, b) {
        d = a;
        e = b;
      });
    tj(this, d, function (a) {
      a instanceof oj ? f.cancel() : e(a);
    });
    return f.then(a, b, c);
  };
  Gf(nj);
  var uj = function (a) {
      return Za(a.B, function (a) {
        return w(a[1]);
      });
    },
    rj = function (a) {
      if (a.F && a.l && uj(a)) {
        var b = a.F,
          c = vj[b];
        c && (p.clearTimeout(c.l), delete vj[b]);
        a.F = 0;
      }
      a.o && (a.o.D--, delete a.o);
      b = a.w;
      for (var d = (c = !1); a.B.length && !a.H; ) {
        var e = a.B.shift(),
          f = e[0],
          g = e[1];
        e = e[2];
        if ((f = a.A ? g : f))
          try {
            var l = f.call(e || a.U, b);
            q(l) &&
              ((a.A = a.A && (l == b || l instanceof Error)), (a.w = b = l));
            if (
              Hf(b) ||
              ("function" === typeof p.Promise && b instanceof p.Promise)
            )
              (d = !0), (a.H = !0);
          } catch (m) {
            (b = m), (a.A = !0), uj(a) || (c = !0);
          }
      }
      a.w = b;
      d &&
        ((l = y(a.da, a, !0)),
        (d = y(a.da, a, !1)),
        b instanceof nj ? (tj(b, l, d), (b.za = !0)) : b.then(l, d));
      c && ((b = new wj(b)), (vj[b.l] = b), (a.F = b.l));
    },
    sj = function () {
      Ua.call(this);
    };
  A(sj, Ua);
  sj.prototype.message = "Deferred has already fired";
  sj.prototype.name = "AlreadyCalledError";
  var oj = function () {
    Ua.call(this);
  };
  A(oj, Ua);
  oj.prototype.message = "Deferred was canceled";
  oj.prototype.name = "CanceledError";
  var wj = function (a) {
    this.l = p.setTimeout(y(this.w, this), 0);
    this.o = a;
  };
  wj.prototype.w = function () {
    delete vj[this.l];
    throw this.o;
  };
  var vj = {};
  var Bj = function (a) {
      var b = {},
        c = b.document || document,
        d = jd(a),
        e = Vd(document, "SCRIPT"),
        f = { Xd: e, Za: void 0 },
        g = new nj(xj, f),
        l = null,
        m = null != b.timeout ? b.timeout : 5e3;
      0 < m &&
        ((l = window.setTimeout(function () {
          yj(e, !0);
          var a = new zj(1, "Timeout reached for loading script " + d);
          pj(g);
          qj(g, !1, a);
        }, m)),
        (f.Za = l));
      e.onload = e.onreadystatechange = function () {
        (e.readyState &&
          "loaded" != e.readyState &&
          "complete" != e.readyState) ||
          (yj(e, b.Ai || !1, l), pj(g), qj(g, !0, null));
      };
      e.onerror = function () {
        yj(e, !0, l);
        var a = new zj(0, "Error while loading script " + d);
        pj(g);
        qj(g, !1, a);
      };
      f = b.attributes || {};
      Yb(f, { type: "text/javascript", charset: "UTF-8" });
      Nd(e, f);
      Cd(e, a);
      Aj(c).appendChild(e);
      return g;
    },
    Aj = function (a) {
      var b = Kd("HEAD", a);
      return b && 0 != b.length ? b[0] : a.documentElement;
    },
    xj = function () {
      if (this && this.Xd) {
        var a = this.Xd;
        a && "SCRIPT" == a.tagName && yj(a, !0, this.Za);
      }
    },
    yj = function (a, b, c) {
      null != c && p.clearTimeout(c);
      a.onload = u;
      a.onerror = u;
      a.onreadystatechange = u;
      b &&
        window.setTimeout(function () {
          Yd(a);
        }, 0);
    },
    zj = function (a, b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      Ua.call(this, c);
      this.code = a;
    };
  A(zj, Ua);
  var Cj = function () {
      this.o = [];
      this.l = [];
    },
    Dj = function (a) {
      0 == a.o.length && ((a.o = a.l), a.o.reverse(), (a.l = []));
      return a.o.pop();
    },
    Ej = function (a) {
      return a.o.length + a.l.length;
    };
  Cj.prototype.pa = function () {
    for (var a = [], b = this.o.length - 1; 0 <= b; --b) a.push(this.o[b]);
    var c = this.l.length;
    for (b = 0; b < c; ++b) a.push(this.l[b]);
    return a;
  };
  var Fj = function () {
      this.l = new ug();
    },
    Gj = function (a) {
      var b = typeof a;
      return ("object" == b && a) || "function" == b
        ? "o" + Na(a)
        : b.substr(0, 1) + a;
    };
  Fj.prototype.add = function (a) {
    this.l.set(Gj(a), a);
  };
  Fj.prototype.pa = function () {
    return this.l.pa();
  };
  Fj.prototype.yb = function () {
    return this.l.yb(!1);
  };
  var Hj = function (a, b) {
    O.call(this);
    this.S = a || 0;
    this.w = b || 10;
    if (this.S > this.w)
      throw Error("[goog.structs.Pool] Min can not be greater than max");
    this.l = new Cj();
    this.o = new Fj();
    this.delay = 0;
    this.F = null;
    this.Kb();
  };
  A(Hj, O);
  Hj.prototype.Xb = function () {
    var a = z();
    if (!(null != this.F && a - this.F < this.delay)) {
      for (var b; 0 < Ej(this.l) && ((b = Dj(this.l)), !this.H(b)); ) this.Kb();
      !b && Ij(this) < this.w && (b = this.B());
      b && ((this.F = a), this.o.add(b));
      return b;
    }
  };
  var Jj = function (a, b) {
    yg(a.o.l, Gj(b)) && a.oc(b);
  };
  Hj.prototype.oc = function (a) {
    yg(this.o.l, Gj(a));
    this.H(a) && Ij(this) < this.w ? this.l.l.push(a) : Kj(a);
  };
  Hj.prototype.Kb = function () {
    for (var a = this.l; Ij(this) < this.S; ) {
      var b = this.B();
      a.l.push(b);
    }
    for (; Ij(this) > this.w && 0 < Ej(this.l); ) Kj(Dj(a));
  };
  Hj.prototype.B = function () {
    return {};
  };
  var Kj = function (a) {
    if ("function" == typeof a.oa) a.oa();
    else for (var b in a) a[b] = null;
  };
  Hj.prototype.H = function (a) {
    return "function" == typeof a.ce ? a.ce() : !0;
  };
  var Ij = function (a) {
    return Ej(a.l) + a.o.l.w;
  };
  Hj.prototype.L = function () {
    Hj.I.L.call(this);
    if (0 < this.o.l.w) throw Error("[goog.structs.Pool] Objects not released");
    delete this.o;
    for (var a = this.l; 0 != a.o.length || 0 != a.l.length; ) Kj(Dj(a));
    delete this.l;
  };
  var Lj = function (a, b) {
    this.l = a;
    this.o = b;
  };
  var Mj = function (a) {
      this.l = [];
      if (a)
        a: {
          if (a instanceof Mj) {
            var b = a.ua();
            a = a.pa();
            if (0 >= this.l.length) {
              for (var c = this.l, d = 0; d < b.length; d++)
                c.push(new Lj(b[d], a[d]));
              break a;
            }
          } else (b = Sb(a)), (a = Rb(a));
          for (d = 0; d < b.length; d++) Nj(this, b[d], a[d]);
        }
    },
    Nj = function (a, b, c) {
      var d = a.l;
      d.push(new Lj(b, c));
      b = d.length - 1;
      a = a.l;
      for (c = a[b]; 0 < b; )
        if (((d = (b - 1) >> 1), a[d].l > c.l)) (a[b] = a[d]), (b = d);
        else break;
      a[b] = c;
    };
  Mj.prototype.pa = function () {
    for (var a = this.l, b = [], c = a.length, d = 0; d < c; d++)
      b.push(a[d].o);
    return b;
  };
  Mj.prototype.ua = function () {
    for (var a = this.l, b = [], c = a.length, d = 0; d < c; d++)
      b.push(a[d].l);
    return b;
  };
  var Oj = function () {
    Mj.call(this);
  };
  A(Oj, Mj);
  var Pj = function (a, b) {
    this.D = void 0;
    this.A = new Oj();
    Hj.call(this, a, b);
  };
  A(Pj, Hj);
  n = Pj.prototype;
  n.Xb = function (a, b) {
    if (!a) {
      var c = Pj.I.Xb.call(this);
      c && this.delay && (this.D = p.setTimeout(y(this.fc, this), this.delay));
      return c;
    }
    Nj(this.A, q(b) ? b : 100, a);
    this.fc();
  };
  n.fc = function () {
    for (var a = this.A; 0 < a.l.length; ) {
      var b = this.Xb();
      if (b) {
        var c = a,
          d = c.l,
          e = d.length;
        var f = d[0];
        if (0 >= e) f = void 0;
        else {
          if (1 == e) fb(d);
          else {
            d[0] = d.pop();
            d = 0;
            c = c.l;
            e = c.length;
            for (var g = c[d]; d < e >> 1; ) {
              var l = 2 * d + 1,
                m = 2 * d + 2;
              l = m < e && c[m].l < c[l].l ? m : l;
              if (c[l].l > g.l) break;
              c[d] = c[l];
              d = l;
            }
            c[d] = g;
          }
          f = f.o;
        }
        f.apply(this, [b]);
      } else break;
    }
  };
  n.oc = function (a) {
    Pj.I.oc.call(this, a);
    this.fc();
  };
  n.Kb = function () {
    Pj.I.Kb.call(this);
    this.fc();
  };
  n.L = function () {
    Pj.I.L.call(this);
    p.clearTimeout(this.D);
    fb(this.A.l);
    this.A = null;
  };
  var Qj = function (a, b, c, d) {
    this.U = a;
    this.M = !!d;
    Pj.call(this, b, c);
  };
  A(Qj, Pj);
  Qj.prototype.B = function () {
    var a = new oh(),
      b = this.U;
    b &&
      b.forEach(function (b, d) {
        a.headers.set(d, b);
      });
    this.M && (a.F = !0);
    return a;
  };
  Qj.prototype.H = function (a) {
    return !a.da && !a.R;
  };
  var Rj = function (a, b, c, d, e, f) {
    P.call(this);
    this.A = q(a) ? a : 1;
    this.B = q(e) ? Math.max(0, e) : 0;
    this.F = !!f;
    this.o = new Qj(b, c, d, f);
    this.l = new ug();
    this.w = new Xh(this);
  };
  A(Rj, P);
  var Sj = "ready complete success error abort timeout".split(" "),
    Vj = function (a, b, c, d, e, f) {
      var g = Tj;
      if (a.l.get(b)) throw Error("[goog.net.XhrManager] ID in use");
      c = new Uj(
        c,
        y(a.H, a, b),
        d,
        e,
        g,
        f,
        q(void 0) ? void 0 : a.A,
        q(void 0) ? void 0 : a.F,
      );
      a.l.set(b, c);
      b = y(a.D, a, b);
      a.o.Xb(b, void 0);
    };
  Rj.prototype.abort = function (a, b) {
    var c = this.l.get(a);
    if (c) {
      var d = c.nc;
      c.md = !0;
      b &&
        (d &&
          (bi(this.w, d, Sj, c.hd),
          Xe(
            d,
            "ready",
            function () {
              Jj(this.o, d);
            },
            !1,
            this,
          )),
        yg(this.l, a));
      d && d.abort();
    }
  };
  Rj.prototype.D = function (a, b) {
    var c = this.l.get(a);
    c && !c.nc
      ? (Zh(this.w, b, Sj, c.hd, void 0),
        (b.B = Math.max(0, this.B)),
        (b.A = c.vd()),
        (b.F = c.yd()),
        (c.nc = b),
        this.dispatchEvent(new Wj("ready", this, a, b)),
        Xj(this, a, b),
        c.md && b.abort())
      : Jj(this.o, b);
  };
  Rj.prototype.H = function (a, b) {
    var c = b.target;
    switch (b.type) {
      case "ready":
        Xj(this, a, c);
        break;
      case "complete":
        a: {
          var d = this.l.get(a);
          if (7 == c.w || Bh(c) || d.Mb > d.Cc)
            if (
              (this.dispatchEvent(new Wj("complete", this, a, c)),
              d && ((d.td = !0), d.sd))
            ) {
              c = d.sd.call(c, b);
              break a;
            }
          c = null;
        }
        return c;
      case "success":
        this.dispatchEvent(new Wj("success", this, a, c));
        break;
      case "timeout":
      case "error":
        d = this.l.get(a);
        d.Mb > d.Cc && this.dispatchEvent(new Wj("error", this, a, c));
        break;
      case "abort":
        this.dispatchEvent(new Wj("abort", this, a, c));
    }
    return null;
  };
  var Xj = function (a, b, c) {
    var d = a.l.get(b);
    !d || d.td || d.Mb > d.Cc
      ? (d && (bi(a.w, c, Sj, d.hd), yg(a.l, b)), Jj(a.o, c))
      : (d.Mb++, vh(c, d.xd(), d.Ac(), d.Aa(), d.je));
  };
  Rj.prototype.L = function () {
    Rj.I.L.call(this);
    this.o.oa();
    this.o = null;
    this.w.oa();
    this.w = null;
    wg(this.l);
    this.l = null;
  };
  var Wj = function (a, b, c, d) {
    De.call(this, a, b);
    this.id = c;
    this.nc = d;
  };
  A(Wj, De);
  var Uj = function (a, b, c, d, e, f, g, l) {
    this.A = a;
    this.o = c || "GET";
    this.l = d;
    this.je = e || null;
    this.Cc = q(g) ? g : 1;
    this.Mb = 0;
    this.md = this.td = !1;
    this.hd = b;
    this.sd = f;
    this.w = !!l;
    this.nc = null;
  };
  n = Uj.prototype;
  n.xd = k("A");
  n.Ac = k("o");
  n.Aa = k("l");
  n.yd = k("w");
  n.vd = ba("");
  var Yj = function (a, b) {
    this.w = this.F = this.l = "";
    this.B = null;
    this.H = this.A = "";
    this.D = !1;
    var c;
    a instanceof Yj
      ? ((this.D = q(b) ? b : a.D),
        Zj(this, a.l),
        (this.F = a.F),
        (this.w = a.w),
        ak(this, a.B),
        bk(this, a.A),
        ck(this, dk(a.o)),
        (this.H = a.H))
      : a && (c = String(a).match(fh))
      ? ((this.D = !!b),
        Zj(this, c[1] || "", !0),
        (this.F = ek(c[2] || "")),
        (this.w = ek(c[3] || "", !0)),
        ak(this, c[4]),
        bk(this, c[5] || "", !0),
        ck(this, c[6] || "", !0),
        (this.H = ek(c[7] || "")))
      : ((this.D = !!b), (this.o = new fk(null, this.D)));
  };
  Yj.prototype.toString = function () {
    var a = [],
      b = this.l;
    b && a.push(gk(b, hk, !0), ":");
    var c = this.w;
    if (c || "file" == b)
      a.push("//"),
        (b = this.F) && a.push(gk(b, hk, !0), "@"),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"),
        ),
        (c = this.B),
        null != c && a.push(":", String(c));
    if ((c = this.A))
      this.w && "/" != c.charAt(0) && a.push("/"),
        a.push(gk(c, "/" == c.charAt(0) ? ik : jk, !0));
    (c = this.o.toString()) && a.push("?", c);
    (c = this.H) && a.push("#", gk(c, kk));
    return a.join("");
  };
  Yj.prototype.resolve = function (a) {
    var b = new Yj(this),
      c = !!a.l;
    c ? Zj(b, a.l) : (c = !!a.F);
    c ? (b.F = a.F) : (c = !!a.w);
    c ? (b.w = a.w) : (c = null != a.B);
    var d = a.A;
    if (c) ak(b, a.B);
    else if ((c = !!a.A)) {
      if ("/" != d.charAt(0))
        if (this.w && !this.A) d = "/" + d;
        else {
          var e = b.A.lastIndexOf("/");
          -1 != e && (d = b.A.substr(0, e + 1) + d);
        }
      e = d;
      if (".." == e || "." == e) d = "";
      else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
        d = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");
        for (var f = [], g = 0; g < e.length; ) {
          var l = e[g++];
          "." == l
            ? d && g == e.length && f.push("")
            : ".." == l
            ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(),
              d && g == e.length && f.push(""))
            : (f.push(l), (d = !0));
        }
        d = f.join("/");
      } else d = e;
    }
    c ? bk(b, d) : (c = "" !== a.o.toString());
    c ? ck(b, dk(a.o)) : (c = !!a.H);
    c && (b.H = a.H);
    return b;
  };
  var Zj = function (a, b, c) {
      a.l = c ? ek(b, !0) : b;
      a.l && (a.l = a.l.replace(/:$/, ""));
      return a;
    },
    ak = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.B = b;
      } else a.B = null;
    },
    bk = function (a, b, c) {
      a.A = c ? ek(b, !0) : b;
      return a;
    },
    ck = function (a, b, c) {
      b instanceof fk
        ? ((a.o = b), lk(a.o, a.D))
        : (c || (b = gk(b, mk)), (a.o = new fk(b, a.D)));
      return a;
    },
    ok = function (a, b, c) {
      v(c) || (c = [String(c)]);
      nk(a.o, b, c);
    },
    pk = function (a) {
      return a instanceof Yj ? new Yj(a) : new Yj(a, void 0);
    },
    ek = function (a, b) {
      return a
        ? b
          ? decodeURI(a.replace(/%25/g, "%2525"))
          : decodeURIComponent(a)
        : "";
    },
    gk = function (a, b, c) {
      return r(a)
        ? ((a = encodeURI(a).replace(b, qk)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
          a)
        : null;
    },
    qk = function (a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    hk = /[#\/\?@]/g,
    jk = /[#\?:]/g,
    ik = /[#\?]/g,
    mk = /[#\?@]/g,
    kk = /#/g,
    fk = function (a, b) {
      this.o = this.l = null;
      this.w = a || null;
      this.A = !!b;
    },
    rk = function (a) {
      a.l ||
        ((a.l = new ug()),
        (a.o = 0),
        a.w &&
          ih(a.w, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
    };
  fk.prototype.add = function (a, b) {
    rk(this);
    this.w = null;
    a = sk(this, a);
    var c = this.l.get(a);
    c || this.l.set(a, (c = []));
    c.push(b);
    this.o = this.o + 1;
    return this;
  };
  var tk = function (a, b) {
      rk(a);
      b = sk(a, b);
      xg(a.l.o, b) &&
        ((a.w = null), (a.o = a.o - a.l.get(b).length), yg(a.l, b));
    },
    uk = function (a, b) {
      rk(a);
      b = sk(a, b);
      return xg(a.l.o, b);
    };
  n = fk.prototype;
  n.forEach = function (a, b) {
    rk(this);
    this.l.forEach(function (c, d) {
      B(
        c,
        function (c) {
          a.call(b, c, d, this);
        },
        this,
      );
    }, this);
  };
  n.ua = function () {
    rk(this);
    for (var a = this.l.pa(), b = this.l.ua(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  n.pa = function (a) {
    rk(this);
    var b = [];
    if (r(a)) uk(this, a) && (b = hb(b, this.l.get(sk(this, a))));
    else {
      a = this.l.pa();
      for (var c = 0; c < a.length; c++) b = hb(b, a[c]);
    }
    return b;
  };
  n.set = function (a, b) {
    rk(this);
    this.w = null;
    a = sk(this, a);
    uk(this, a) && (this.o = this.o - this.l.get(a).length);
    this.l.set(a, [b]);
    this.o = this.o + 1;
    return this;
  };
  n.get = function (a, b) {
    if (!a) return b;
    var c = this.pa(a);
    return 0 < c.length ? String(c[0]) : b;
  };
  var nk = function (a, b, c) {
    tk(a, b);
    0 < c.length &&
      ((a.w = null), a.l.set(sk(a, b), ib(c)), (a.o = a.o + c.length));
  };
  fk.prototype.toString = function () {
    if (this.w) return this.w;
    if (!this.l) return "";
    for (var a = [], b = this.l.ua(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.pa(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return (this.w = a.join("&"));
  };
  var dk = function (a) {
      var b = new fk();
      b.w = a.w;
      a.l && ((b.l = new ug(a.l)), (b.o = a.o));
      return b;
    },
    sk = function (a, b) {
      var c = String(b);
      a.A && (c = c.toLowerCase());
      return c;
    },
    lk = function (a, b) {
      b &&
        !a.A &&
        (rk(a),
        (a.w = null),
        a.l.forEach(function (a, b) {
          var c = b.toLowerCase();
          b != c && (tk(this, b), nk(this, c, a));
        }, a));
      a.A = b;
    };
  fk.prototype.B = function (a) {
    for (var b = 0; b < arguments.length; b++)
      eh(
        arguments[b],
        function (a, b) {
          this.add(b, a);
        },
        this,
      );
  };
  var vk = {},
    wk = {},
    xk = {},
    yk = {},
    zk = {},
    Ak = {},
    Bk = function () {
      throw Error("Do not instantiate directly");
    };
  Bk.prototype.wc = null;
  Bk.prototype.Aa = k("l");
  Bk.prototype.toString = k("l");
  var Ck = function () {
    Bk.call(this);
  };
  A(Ck, Bk);
  Ck.prototype.Pa = vk;
  var Fk = function (a, b, c) {
      a.innerHTML = Dk(b(c || Ek, void 0, void 0));
    },
    Hk = function (a) {
      var b = Gk,
        c = Id();
      a = b(a || Ek, void 0, void 0);
      b = Dk(a);
      if (a instanceof Bk)
        if (a.Pa === Ak) a = zd(a.toString());
        else {
          if (a.Pa !== vk)
            throw Error("Sanitized content was not of kind TEXT or HTML.");
          b = gd(
            "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.",
          );
          var d = a.toString();
          a = a.wc;
          fd(b);
          fd(b);
          a = yd(d, a || null);
        }
      else ij(), (a = yd(b, null));
      c = c.l;
      b = a;
      a = Vd(c, "DIV");
      D
        ? ((b = Ad(Bd, b)), (a.innerHTML = xd(b)), a.removeChild(a.firstChild))
        : (a.innerHTML = xd(b));
      if (1 == a.childNodes.length) c = a.removeChild(a.firstChild);
      else
        for (c = c.createDocumentFragment(); a.firstChild; )
          c.appendChild(a.firstChild);
      return c;
    },
    Ik = function (a, b, c, d) {
      a = a(b || Ek, void 0, c);
      d = Vd((d || Id()).l, "DIV");
      a = Dk(a);
      d.innerHTML = a;
      1 == d.childNodes.length &&
        ((a = d.firstChild), 1 == a.nodeType && (d = a));
      return d;
    },
    Dk = function (a) {
      if (!x(a)) return String(a);
      if (a instanceof Bk) {
        if (a.Pa === vk) return a.Aa();
        if (a.Pa === Ak) return Eb(a.Aa());
      }
      return "zSoyz";
    },
    Ek = {};
  var Kk = function (a, b) {
      var c = Array.prototype.slice.call(arguments),
        d = c.shift();
      if ("undefined" == typeof d)
        throw Error("[goog.string.format] Template required");
      return d.replace(
        /%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,
        function (a, b, d, l, m, t, E, H) {
          if ("%" == t) return "%";
          var e = c.shift();
          if ("undefined" == typeof e)
            throw Error("[goog.string.format] Not enough arguments");
          arguments[0] = e;
          return Jk[t].apply(null, arguments);
        },
      );
    },
    Jk = {
      s: function (a, b, c) {
        return isNaN(c) || "" == c || a.length >= Number(c)
          ? a
          : (a =
              -1 < b.indexOf("-", 0)
                ? a + Fb(" ", Number(c) - a.length)
                : Fb(" ", Number(c) - a.length) + a);
      },
      f: function (a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
        var f =
          0 > Number(a)
            ? "-"
            : 0 <= b.indexOf("+")
            ? "+"
            : 0 <= b.indexOf(" ")
            ? " "
            : "";
        0 <= Number(a) && (d = f + d);
        if (isNaN(c) || d.length >= Number(c)) return d;
        d = isNaN(e)
          ? Math.abs(Number(a)).toString()
          : Math.abs(Number(a)).toFixed(e);
        a = Number(c) - d.length - f.length;
        return (d =
          0 <= b.indexOf("-", 0)
            ? f + d + Fb(" ", a)
            : f + Fb(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d);
      },
      d: function (a, b, c, d, e, f, g, l) {
        return Jk.f(parseInt(a, 10), b, c, d, 0, f, g, l);
      },
    };
  Jk.i = Jk.d;
  Jk.u = Jk.d;
  var Lk = (function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  })(function () {
    var a;
    (a = !D) || (a = 0 <= Ib(dj, 9));
    return a;
  });
  var Mk = h();
  Ha(Mk);
  Mk.prototype.l = 0;
  var Ok = function (a) {
    P.call(this);
    this.A = a || Id();
    this.Fc = Nk;
    this.sa = null;
    this.ja = !1;
    this.N = null;
    this.U = void 0;
    this.F = this.H = this.w = null;
  };
  A(Ok, P);
  Ok.prototype.Ie = Mk.Ga();
  var Nk = null,
    Pk = function (a, b) {
      switch (a) {
        case 1:
          return b ? "disable" : "enable";
        case 2:
          return b ? "highlight" : "unhighlight";
        case 4:
          return b ? "activate" : "deactivate";
        case 8:
          return b ? "select" : "unselect";
        case 16:
          return b ? "check" : "uncheck";
        case 32:
          return b ? "focus" : "blur";
        case 64:
          return b ? "open" : "close";
      }
      throw Error("Invalid component state");
    },
    Qk = function (a) {
      return a.sa || (a.sa = ":" + (a.Ie.l++).toString(36));
    },
    Rk = function (a, b) {
      if (a.w && a.w.F) {
        var c = a.w.F,
          d = a.sa;
        d in c && delete c[d];
        Ub(a.w.F, b, a);
      }
      a.sa = b;
    };
  Ok.prototype.C = k("N");
  Ok.prototype.O = function (a) {
    return this.N ? M(a, this.N || this.A.l) : null;
  };
  var S = function (a) {
      a.U || (a.U = new Xh(a));
      return a.U;
    },
    Sk = function (a, b) {
      if (a == b) throw Error("Unable to set parent component");
      var c;
      if ((c = b && a.w && a.sa)) {
        c = a.w;
        var d = a.sa;
        c = c.F && d ? Vb(c.F, d) || null : null;
      }
      if (c && a.w != b) throw Error("Unable to set parent component");
      a.w = b;
      Ok.I.cd.call(a, b);
    };
  n = Ok.prototype;
  n.cd = function (a) {
    if (this.w && this.w != a) throw Error("Method not supported");
    Ok.I.cd.call(this, a);
  };
  n.W = function () {
    this.N = Vd(this.A.l, "DIV");
  };
  n.render = function (a) {
    if (this.ja) throw Error("Component already rendered");
    this.N || this.W();
    a ? a.insertBefore(this.N, null) : this.A.l.body.appendChild(this.N);
    (this.w && !this.w.ja) || this.X();
  };
  n.$ = aa("N");
  n.X = function () {
    this.ja = !0;
    Tk(this, function (a) {
      !a.ja && a.C() && a.X();
    });
  };
  n.Ra = function () {
    Tk(this, function (a) {
      a.ja && a.Ra();
    });
    this.U && ci(this.U);
    this.ja = !1;
  };
  n.L = function () {
    this.ja && this.Ra();
    this.U && (this.U.oa(), delete this.U);
    Tk(this, function (a) {
      a.oa();
    });
    this.N && Yd(this.N);
    this.w = this.N = this.F = this.H = null;
    Ok.I.L.call(this);
  };
  var Uk = function (a, b) {
    var c = a.H ? a.H.length : 0;
    if (b.ja && !a.ja) throw Error("Component already rendered");
    if (0 > c || c > (a.H ? a.H.length : 0))
      throw Error("Child component index out of bounds");
    (a.F && a.H) || ((a.F = {}), (a.H = []));
    if (b.w == a) {
      var d = Qk(b);
      a.F[d] = b;
      gb(a.H, b);
    } else Ub(a.F, Qk(b), b);
    Sk(b, a);
    lb(a.H, c, 0, b);
    b.ja && a.ja && b.w == a
      ? ((d = a.Md()),
        (c = d.childNodes[c] || null),
        c != b.C() && d.insertBefore(b.C(), c))
      : a.ja &&
        !b.ja &&
        b.N &&
        b.N.parentNode &&
        1 == b.N.parentNode.nodeType &&
        b.X();
  };
  Ok.prototype.Md = k("N");
  var Tk = function (a, b) {
    a.H && B(a.H, b, void 0);
  };
  Ok.prototype.removeChild = function (a, b) {
    if (a) {
      var c = r(a) ? a : Qk(a);
      a = this.F && c ? Vb(this.F, c) || null : null;
      if (c && a) {
        var d = this.F;
        c in d && delete d[c];
        gb(this.H, a);
        b && (a.Ra(), a.N && Yd(a.N));
        Sk(a, null);
      }
    }
    if (!a) throw Error("Child is not in parent component");
    return a;
  };
  var Vk = h(),
    Wk;
  Ha(Vk);
  var Xk = function (a, b) {
      var c = new a();
      c.Sa = function () {
        return b;
      };
      return c;
    },
    Yk = {
      button: "pressed",
      checkbox: "checked",
      menuitem: "selected",
      menuitemcheckbox: "checked",
      menuitemradio: "checked",
      radio: "checked",
      tab: "selected",
      treeitem: "selected",
    };
  Vk.prototype.zc = h();
  Vk.prototype.W = function (a) {
    return a.A.W("DIV", Zk(this, a).join(" "), a.Aa());
  };
  var al = function (a, b, c) {
    if ((a = a.C ? a.C() : a)) {
      var d = [b];
      D && !yc("7") && ((d = $k(Gh(a), b)), d.push(b));
      (c ? Jh : Lh)(a, d);
    }
  };
  Vk.prototype.Bb = function (a, b) {
    b.id && Rk(a, b.id);
    b && b.firstChild
      ? bl(a, b.firstChild.nextSibling ? ib(b.childNodes) : b.firstChild)
      : (a.kb = null);
    var c = 0,
      d = this.Sa(),
      e = this.Sa(),
      f = !1,
      g = !1,
      l = !1,
      m = ib(Gh(b));
    B(
      m,
      function (a) {
        f || a != d
          ? g || a != e
            ? (c |= cl(this, a))
            : (g = !0)
          : ((f = !0), e == d && (g = !0));
        1 == cl(this, a) && le(b) && me(b) && ke(b, !1);
      },
      this,
    );
    a.ma = c;
    f || (m.push(d), e == d && (g = !0));
    g || m.push(e);
    var t = a.La;
    t && m.push.apply(m, t);
    if (D && !yc("7")) {
      var E = $k(m);
      0 < E.length && (m.push.apply(m, E), (l = !0));
    }
    if (!f || !g || t || l) b.className = m.join(" ");
    return b;
  };
  Vk.prototype.Ld = function (a) {
    null == a.Fc && (a.Fc = "rtl" == Gi(a.ja ? a.N : a.A.l.body, "direction"));
    a.Fc && this.Cd(a.C(), !0);
    a.isEnabled() && this.mc(a, a.$a);
  };
  var dl = function (a, b) {
    var c = a.zc();
    if (c) {
      var d = b.getAttribute("role") || null;
      c != d && (c ? b.setAttribute("role", c) : b.removeAttribute("role"));
    }
  };
  n = Vk.prototype;
  n.Dc = function (a, b) {
    var c = !b,
      d = D || fc ? a.getElementsByTagName("*") : null;
    if (Ui) {
      if (((c = c ? "none" : ""), a.style && (a.style[Ui] = c), d))
        for (var e = 0, f; (f = d[e]); e++) f.style && (f.style[Ui] = c);
    } else if (D || fc)
      if (((c = c ? "on" : ""), a.setAttribute("unselectable", c), d))
        for (e = 0; (f = d[e]); e++) f.setAttribute("unselectable", c);
  };
  n.Cd = function (a, b) {
    al(a, this.Sa() + "-rtl", b);
  };
  n.Bd = function (a) {
    var b;
    return a.na & 32 && (b = a.C()) ? le(b) && me(b) : !1;
  };
  n.mc = function (a, b) {
    var c;
    if (a.na & 32 && (c = a.C())) {
      if (!b && a.cb()) {
        try {
          c.blur();
        } catch (d) {}
        a.cb() && a.Dd(null);
      }
      (le(c) && me(c)) != b && ke(c, b);
    }
  };
  n.Ec = function (a, b, c) {
    var d = a.C();
    if (d) {
      var e = el(this, b);
      e && al(a, e, c);
      this.Ia(d, b, c);
    }
  };
  n.Ia = function (a, b, c) {
    Wk ||
      (Wk = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
    b = Wk[b];
    var d = a.getAttribute("role") || null;
    d && ((d = Yk[d] || b), (b = "checked" == b || "selected" == b ? d : b));
    b && re(a, b, c);
  };
  var fl = function (a, b) {
    if (a && (Xd(a), b))
      if (r(b)) fe(a, b);
      else {
        var c = function (b) {
          if (b) {
            var c = Hd(a);
            a.appendChild(r(b) ? c.createTextNode(b) : b);
          }
        };
        v(b) ? B(b, c) : !Ja(b) || "nodeType" in b ? c(b) : B(ib(b), c);
      }
  };
  Vk.prototype.Sa = ba("goog-control");
  var Zk = function (a, b) {
      var c = a.Sa(),
        d = [c],
        e = a.Sa();
      e != c && d.push(e);
      c = b.ma;
      for (e = []; c; ) {
        var f = c & -c;
        e.push(el(a, f));
        c &= ~f;
      }
      d.push.apply(d, e);
      (c = b.La) && d.push.apply(d, c);
      D && !yc("7") && d.push.apply(d, $k(d));
      return d;
    },
    $k = function (a, b) {
      var c = [];
      b && (a = hb(a, [b]));
      B([], function (d) {
        !$a(d, Qa(eb, a)) || (b && !eb(d, b)) || c.push(d.join("_"));
      });
      return c;
    },
    el = function (a, b) {
      a.l || gl(a);
      return a.l[b];
    },
    cl = function (a, b) {
      if (!a.o) {
        a.l || gl(a);
        var c = a.l,
          d = {},
          e;
        for (e in c) d[c[e]] = e;
        a.o = d;
      }
      c = parseInt(a.o[b], 10);
      return isNaN(c) ? 0 : c;
    },
    gl = function (a) {
      var b = a.Sa();
      b.replace(/\xa0|\s/g, " ");
      a.l = {
        1: b + "-disabled",
        2: b + "-hover",
        4: b + "-active",
        8: b + "-selected",
        16: b + "-checked",
        32: b + "-focused",
        64: b + "-open",
      };
    };
  var hl = h();
  A(hl, Vk);
  Ha(hl);
  n = hl.prototype;
  n.zc = ba("button");
  n.Ia = function (a, b, c) {
    switch (b) {
      case 8:
      case 16:
        re(a, "pressed", c);
        break;
      default:
      case 64:
      case 1:
        hl.I.Ia.call(this, a, b, c);
    }
  };
  n.W = function (a) {
    var b = hl.I.W.call(this, a),
      c = a.ga;
    b && (c ? (b.title = c) : b.removeAttribute("title"));
    (c = a.ia) && this.Ad(b, c);
    a.na & 16 && this.Ia(b, 16, a.o());
    return b;
  };
  n.Bb = function (a, b) {
    b = hl.I.Bb.call(this, a, b);
    var c = this.zd(b);
    a.ia = c;
    a.ga = b.title;
    a.na & 16 && this.Ia(b, 16, a.o());
    return b;
  };
  n.zd = u;
  n.Ad = u;
  n.Sa = ba("goog-button");
  var il = function (a, b) {
      if (!a) throw Error("Invalid class name " + a);
      if (!w(b)) throw Error("Invalid decorator function " + b);
    },
    jl = {};
  var T = function (a, b, c) {
    Ok.call(this, c);
    if (!b) {
      b = this.constructor;
      for (var d; b; ) {
        d = Na(b);
        if ((d = jl[d])) break;
        b = b.I ? b.I.constructor : null;
      }
      b = d ? (w(d.Ga) ? d.Ga() : new d()) : null;
    }
    this.B = b;
    this.kb = q(a) ? a : null;
  };
  A(T, Ok);
  n = T.prototype;
  n.kb = null;
  n.ma = 0;
  n.na = 39;
  n.zb = 255;
  n.$a = !0;
  n.La = null;
  n.cc = !0;
  var ll = function (a) {
      a.ja && 0 != a.cc && kl(a, !1);
      a.cc = !1;
    },
    ml = function (a, b) {
      b && (a.La ? eb(a.La, b) || a.La.push(b) : (a.La = [b]), al(a, b, !0));
    };
  T.prototype.W = function () {
    var a = this.B.W(this);
    this.N = a;
    dl(this.B, a);
    this.B.Dc(a, !1);
    this.$a || (Qi(a, !1), a && re(a, "hidden", !0));
  };
  T.prototype.Md = function () {
    return this.C();
  };
  T.prototype.$ = function (a) {
    this.N = a = this.B.Bb(this, a);
    dl(this.B, a);
    this.B.Dc(a, !1);
    this.$a = "none" != a.style.display;
  };
  T.prototype.X = function () {
    T.I.X.call(this);
    var a = this.B,
      b = this.N;
    this.$a || re(b, "hidden", !this.$a);
    this.isEnabled() || a.Ia(b, 1, !this.isEnabled());
    this.na & 8 && a.Ia(b, 8, !!(this.ma & 8));
    this.na & 16 && a.Ia(b, 16, this.o());
    this.na & 64 && a.Ia(b, 64, !!(this.ma & 64));
    this.B.Ld(this);
    this.na & -2 &&
      (this.cc && kl(this, !0), this.na & 32 && (a = this.C())) &&
      ((b = this.Y || (this.Y = new ei())),
      di(b, a),
      R(
        R(R(S(this), b, "key", this.re), a, "focus", this.pe),
        a,
        "blur",
        this.Dd,
      ));
  };
  var kl = function (a, b) {
    var c = S(a),
      d = a.C();
    b
      ? (R(
          R(
            R(Zh(c, d, Fe.kd, a.lb, void 0), d, [Fe.ld, Fe.jd], a.dc),
            d,
            "mouseover",
            a.Mc,
          ),
          d,
          "mouseout",
          a.Lc,
        ),
        a.ac != u && Zh(c, d, "contextmenu", a.ac, void 0),
        D &&
          (yc(9) || Zh(c, d, "dblclick", a.Fd, void 0),
          a.V || ((a.V = new nl(a)), te(a, a.V))))
      : (bi(
          bi(
            bi(bi(c, d, Fe.kd, a.lb), d, [Fe.ld, Fe.jd], a.dc),
            d,
            "mouseover",
            a.Mc,
          ),
          d,
          "mouseout",
          a.Lc,
        ),
        a.ac != u && bi(c, d, "contextmenu", a.ac),
        D && (yc(9) || bi(c, d, "dblclick", a.Fd), se(a.V), (a.V = null)));
  };
  T.prototype.Ra = function () {
    T.I.Ra.call(this);
    this.Y && ki(this.Y);
    this.$a && this.isEnabled() && this.B.mc(this, !1);
  };
  T.prototype.L = function () {
    T.I.L.call(this);
    this.Y && (this.Y.oa(), delete this.Y);
    delete this.B;
    this.V = this.La = this.kb = null;
  };
  T.prototype.Aa = k("kb");
  var bl = function (a, b) {
      a.kb = b;
    },
    ol = function (a) {
      return (a = a.Aa())
        ? (r(a) ? a : v(a) ? Ya(a, pe).join("") : oe(a))
            .replace(/[\t\r\n ]+/g, " ")
            .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        : "";
    };
  T.prototype.isEnabled = function () {
    return !(this.ma & 1);
  };
  T.prototype.va = function (a) {
    var b = this.w;
    (b && "function" == typeof b.isEnabled && !b.isEnabled()) ||
      !pl(this, 1, !a) ||
      (a || (ql(this, !1), rl(this, !1)),
      this.$a && this.B.mc(this, a),
      sl(this, 1, !a, !0));
  };
  var rl = function (a, b) {
      pl(a, 2, b) && sl(a, 2, b);
    },
    ql = function (a, b) {
      pl(a, 4, b) && sl(a, 4, b);
    };
  T.prototype.o = function () {
    return !!(this.ma & 16);
  };
  T.prototype.Wa = function (a) {
    pl(this, 16, a) && sl(this, 16, a);
  };
  T.prototype.cb = function () {
    return !!(this.ma & 32);
  };
  T.prototype.Gb = function (a) {
    pl(this, 32, a) && sl(this, 32, a);
  };
  var sl = function (a, b, c, d) {
      d || 1 != b
        ? a.na & b &&
          c != !!(a.ma & b) &&
          (a.B.Ec(a, b, c), (a.ma = c ? a.ma | b : a.ma & ~b))
        : a.va(!c);
    },
    tl = function (a, b, c) {
      if (a.ja && a.ma & b && !c) throw Error("Component already rendered");
      !c && a.ma & b && sl(a, b, !1);
      a.na = c ? a.na | b : a.na & ~b;
    },
    ul = function (a, b) {
      return !!(a.zb & b) && !!(a.na & b);
    },
    pl = function (a, b, c) {
      return (
        !!(a.na & b) &&
        !!(a.ma & b) != c &&
        (!(0 & b) || a.dispatchEvent(Pk(b, c))) &&
        !a.da
      );
    };
  n = T.prototype;
  n.Mc = function (a) {
    (!a.relatedTarget || !de(this.C(), a.relatedTarget)) &&
      this.dispatchEvent("enter") &&
      this.isEnabled() &&
      ul(this, 2) &&
      rl(this, !0);
  };
  n.Lc = function (a) {
    (a.relatedTarget && de(this.C(), a.relatedTarget)) ||
      !this.dispatchEvent("leave") ||
      (ul(this, 4) && ql(this, !1), ul(this, 2) && rl(this, !1));
  };
  n.ac = u;
  n.lb = function (a) {
    this.isEnabled() &&
      (ul(this, 2) && rl(this, !0),
      !Je(a) ||
        (jc && lc && a.ctrlKey) ||
        (ul(this, 4) && ql(this, !0),
        this.B && this.B.Bd(this) && this.C().focus()));
    !Je(a) || (jc && lc && a.ctrlKey) || a.preventDefault();
  };
  n.dc = function (a) {
    this.isEnabled() &&
      (ul(this, 2) && rl(this, !0),
      this.ma & 4 && this.nb(a) && ul(this, 4) && ql(this, !1));
  };
  n.Fd = function (a) {
    this.isEnabled() && this.nb(a);
  };
  n.nb = function (a) {
    ul(this, 16) && this.Wa(!this.o());
    ul(this, 8) && pl(this, 8, !0) && sl(this, 8, !0);
    if (ul(this, 64)) {
      var b = !(this.ma & 64);
      pl(this, 64, b) && sl(this, 64, b);
    }
    b = new De("action", this);
    a &&
      ((b.altKey = a.altKey),
      (b.ctrlKey = a.ctrlKey),
      (b.metaKey = a.metaKey),
      (b.shiftKey = a.shiftKey),
      (b.A = a.A));
    return this.dispatchEvent(b);
  };
  n.pe = function () {
    ul(this, 32) && this.Gb(!0);
  };
  n.Dd = function () {
    ul(this, 4) && ql(this, !1);
    ul(this, 32) && this.Gb(!1);
  };
  n.re = function (a) {
    return this.$a && this.isEnabled() && this.bc(a)
      ? (a.preventDefault(), a.o(), !0)
      : !1;
  };
  n.bc = function (a) {
    return 13 == a.keyCode && this.nb(a);
  };
  if (!w(T)) throw Error("Invalid component class " + T);
  if (!w(Vk)) throw Error("Invalid renderer class " + Vk);
  var vl = Na(T);
  jl[vl] = Vk;
  il("goog-control", function () {
    return new T(null);
  });
  var nl = function (a) {
    O.call(this);
    this.o = a;
    this.l = !1;
    this.w = new Xh(this);
    te(this, this.w);
    a = this.o.N;
    R(
      R(Zh(this.w, a, "mousedown", this.B, void 0), a, "mouseup", this.F),
      a,
      "click",
      this.A,
    );
  };
  A(nl, O);
  var wl = !D || 9 <= Number(zc);
  nl.prototype.B = function () {
    this.l = !1;
  };
  nl.prototype.F = function () {
    this.l = !0;
  };
  var xl = function (a, b) {
    if (!wl) return (a.button = 0), (a.type = b), a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(
      b,
      a.bubbles,
      a.cancelable,
      a.view || null,
      a.detail,
      a.screenX,
      a.screenY,
      a.clientX,
      a.clientY,
      a.ctrlKey,
      a.altKey,
      a.shiftKey,
      a.metaKey,
      0,
      a.relatedTarget || null,
    );
    return c;
  };
  nl.prototype.A = function (a) {
    if (this.l) this.l = !1;
    else {
      var b = a.ta,
        c = b.button,
        d = b.type,
        e = xl(b, "mousedown");
      this.o.lb(new He(e, a.l));
      e = xl(b, "mouseup");
      this.o.dc(new He(e, a.l));
      wl || ((b.button = c), (b.type = d));
    }
  };
  nl.prototype.L = function () {
    this.o = null;
    nl.I.L.call(this);
  };
  var yl = h();
  A(yl, hl);
  Ha(yl);
  n = yl.prototype;
  n.zc = h();
  n.W = function (a) {
    ll(a);
    a.zb &= -256;
    tl(a, 32, !1);
    return a.A.W(
      "BUTTON",
      {
        class: Zk(this, a).join(" "),
        disabled: !a.isEnabled(),
        title: a.ga || "",
        value: a.ia || "",
      },
      ol(a) || "",
    );
  };
  n.Bb = function (a, b) {
    ll(a);
    a.zb &= -256;
    tl(a, 32, !1);
    if (b.disabled) {
      var c = el(this, 1);
      Ih(b, c);
    }
    return yl.I.Bb.call(this, a, b);
  };
  n.Ld = function (a) {
    R(S(a), a.C(), "click", a.nb);
  };
  n.Dc = u;
  n.Cd = u;
  n.Bd = function (a) {
    return a.isEnabled();
  };
  n.mc = u;
  n.Ec = function (a, b, c) {
    yl.I.Ec.call(this, a, b, c);
    (a = a.C()) && 1 == b && (a.disabled = c);
  };
  n.zd = function (a) {
    return a.value;
  };
  n.Ad = function (a, b) {
    a && (a.value = b);
  };
  n.Ia = u;
  var zl = function (a, b, c) {
    T.call(this, a, b || yl.Ga(), c);
  };
  A(zl, T);
  zl.prototype.L = function () {
    zl.I.L.call(this);
    delete this.ia;
    delete this.ga;
  };
  zl.prototype.X = function () {
    zl.I.X.call(this);
    if (this.na & 32) {
      var a = this.C();
      a && R(S(this), a, "keyup", this.bc);
    }
  };
  zl.prototype.bc = function (a) {
    return (13 == a.keyCode && "key" == a.type) ||
      (32 == a.keyCode && "keyup" == a.type)
      ? this.nb(a)
      : 32 == a.keyCode;
  };
  il("goog-button", function () {
    return new zl(null);
  });
  var Al = function (a, b) {
      Ok.call(this, b);
      this.l = a || "";
    },
    Bl;
  A(Al, Ok);
  Al.prototype.B = null;
  var Cl = function () {
    null != Bl || (Bl = "placeholder" in Vd(document, "INPUT"));
    return Bl;
  };
  n = Al.prototype;
  n.Cb = !1;
  n.W = function () {
    this.N = this.A.W("INPUT", { type: "text" });
  };
  n.$ = function (a) {
    Al.I.$.call(this, a);
    this.l || (this.l = a.getAttribute("label") || "");
    qe(Hd(a)) == a && ((this.Cb = !0), Kh(this.C(), "label-input-label"));
    Cl() && (this.C().placeholder = this.l);
    re(this.C(), "label", this.l);
  };
  n.X = function () {
    Al.I.X.call(this);
    var a = new Xh(this);
    Zh(a, this.C(), "focus", this.Jc, void 0);
    Zh(a, this.C(), "blur", this.me, void 0);
    if (Cl()) this.o = a;
    else {
      ic && R(a, this.C(), ["keypress", "keydown", "keyup"], this.oe);
      var b = Hd(this.C());
      Zh(a, N(b), "load", this.xe, void 0);
      this.o = a;
      Dl(this);
    }
    El(this);
    this.C().l = this;
  };
  n.Ra = function () {
    Al.I.Ra.call(this);
    this.o && (this.o.oa(), (this.o = null));
    this.C().l = null;
  };
  var Dl = function (a) {
    !a.V &&
      a.o &&
      a.C().form &&
      (Zh(a.o, a.C().form, "submit", a.qe, void 0), (a.V = !0));
  };
  n = Al.prototype;
  n.L = function () {
    Al.I.L.call(this);
    this.o && (this.o.oa(), (this.o = null));
  };
  n.Jc = function () {
    this.Cb = !0;
    Kh(this.C(), "label-input-label");
    if (!Cl() && !Fl(this) && !this.D) {
      var a = this,
        b = function () {
          a.C() && (a.C().value = "");
        };
      D ? Q(b, 10) : b();
    }
  };
  n.me = function () {
    Cl() || (bi(this.o, this.C(), "click", this.Jc), (this.B = null));
    this.Cb = !1;
    El(this);
  };
  n.oe = function (a) {
    27 == a.keyCode &&
      ("keydown" == a.type
        ? (this.B = this.C().value)
        : "keypress" == a.type
        ? (this.C().value = this.B)
        : "keyup" == a.type && (this.B = null),
      a.preventDefault());
  };
  n.qe = function () {
    Fl(this) || ((this.C().value = ""), Q(this.ke, 10, this));
  };
  n.ke = function () {
    Fl(this) || (this.C().value = this.l);
  };
  n.xe = function () {
    El(this);
  };
  var Fl = function (a) {
      return !!a.C() && "" != a.C().value && a.C().value != a.l;
    },
    Gl = function (a) {
      a.C().value = "";
      null != a.B && (a.B = "");
    };
  Al.prototype.reset = function () {
    Fl(this) && (Gl(this), El(this));
  };
  var Hl = function (a) {
      return null != a.B ? a.B : Fl(a) ? a.C().value : "";
    },
    El = function (a) {
      var b = a.C();
      Cl() ? a.C().placeholder != a.l && (a.C().placeholder = a.l) : Dl(a);
      re(b, "label", a.l);
      Fl(a)
        ? ((b = a.C()), Kh(b, "label-input-label"))
        : (a.D || a.Cb || ((b = a.C()), Ih(b, "label-input-label")),
          Cl() || Q(a.M, 10, a));
    },
    Il = function (a) {
      var b = Fl(a);
      a.D = !0;
      a.C().focus();
      b || Cl() || (a.C().value = a.l);
      a.C().select();
      Cl() || (a.o && ai(a.o, a.C(), "click", a.Jc), Q(a.Y, 10, a));
    },
    Jl = function (a, b) {
      a.C().disabled = !b;
      Mh(a.C(), "label-input-label-disabled", !b);
    };
  Al.prototype.isEnabled = function () {
    return !this.C().disabled;
  };
  Al.prototype.Y = function () {
    this.D = !1;
  };
  Al.prototype.M = function () {
    !this.C() || Fl(this) || this.Cb || (this.C().value = this.l);
  };
  var Kl = function (a, b) {
      return null != a && a.Pa === b;
    },
    Ll = function (a) {
      if (null != a)
        switch (a.wc) {
          case 1:
            return 1;
          case -1:
            return -1;
          case 0:
            return 0;
        }
      return null;
    },
    V = function (a) {
      return null != a && a.Pa === vk
        ? a
        : a instanceof wd
        ? U(xd(a), a.l())
        : U(Eb(String(String(a))), Ll(a));
    },
    U = (function (a) {
      function b(a) {
        this.l = a;
      }
      b.prototype = a.prototype;
      return function (a, d) {
        var c = new b(String(a));
        void 0 !== d && (c.wc = d);
        return c;
      };
    })(Ck),
    Ml = function (a, b) {
      return w(a) && w(b)
        ? a.type !== b.type
          ? !1
          : a.toString() === b.toString()
        : a instanceof Bk && b instanceof Bk
        ? a.Pa != b.Pa
          ? !1
          : a.toString() == b.toString()
        : a == b;
    },
    Nl = function (a) {
      return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
    },
    W = function (a) {
      Kl(a, vk)
        ? ((a = a.Aa()),
          (a = String(a).replace(Ol, "").replace(Pl, "&lt;")),
          (a = String(a).replace(Ql, Rl)))
        : (a = Eb(String(a)));
      return a;
    },
    Wl = function (a) {
      if (Kl(a, wk) || Kl(a, xk)) return Sl(a);
      a instanceof ld
        ? (a = Sl(md(a)))
        : a instanceof id
        ? (a = Sl(jd(a)))
        : ((a = String(a)),
          (a = Tl.test(a) ? a.replace(Ul, Vl) : "about:invalid#zSoyz"));
      return a;
    },
    Yl = function (a) {
      if (Kl(a, wk) || Kl(a, xk)) return Sl(a);
      a instanceof ld
        ? (a = Sl(md(a)))
        : a instanceof id
        ? (a = Sl(jd(a)))
        : ((a = String(a)),
          (a = Xl.test(a) ? a.replace(Ul, Vl) : "about:invalid#zSoyz"));
      return a;
    },
    $l = function (a) {
      if (Kl(a, zk)) return Nl(a.Aa());
      null == a
        ? (a = "")
        : a instanceof od
        ? (a instanceof od && a.constructor === od && a.o === nd
            ? (a = a.l)
            : (Ia(a), (a = "type_error:SafeStyle")),
          (a = Nl(a)))
        : a instanceof qd
        ? (a = Nl(ud(a)))
        : ((a = String(a)), (a = Zl.test(a) ? a : "zSoyz"));
      return a;
    },
    am = {
      "\x00": "&#0;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\x0B": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "-": "&#45;",
      "/": "&#47;",
      "<": "&lt;",
      "=": "&#61;",
      ">": "&gt;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    },
    Rl = function (a) {
      return am[a];
    },
    bm = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\x0B": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    },
    Vl = function (a) {
      return bm[a];
    },
    Ql = /[\x00\x22\x27\x3c\x3e]/g,
    Ul =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Zl =
      /^(?!-*(?:expression|(?:moz-)?binding))(?!\s+)(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|\s+)*$/i,
    Tl =
      /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
    Xl =
      /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
    cm =
      /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
    Sl = function (a) {
      return String(a).replace(Ul, Vl);
    },
    Ol = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Pl = /</g;
  var dm = function (a) {
    a = a || {};
    var b = U,
      c =
        '<span class="' +
        W("recaptcha-checkbox") +
        " " +
        W("goog-inline-block") +
        (a.checked
          ? " " + W("recaptcha-checkbox-checked")
          : " " + W("recaptcha-checkbox-unchecked")) +
        (a.disabled ? " " + W("recaptcha-checkbox-disabled") : "") +
        (a.uc ? " " + W(a.uc) : "") +
        '" role="checkbox" aria-checked="' +
        (a.checked ? "true" : "false") +
        '"' +
        (a.be ? ' aria-labelledby="' + W(a.be) + '"' : "") +
        (a.id ? ' id="' + W(a.id) + '"' : "") +
        (a.disabled
          ? ' aria-disabled="true" tabindex="-1"'
          : ' tabindex="' + (a.fd ? W(a.fd) : "0") + '"');
    if (a.attributes) {
      var d = a.attributes;
      Kl(d, yk)
        ? (d = d.Aa().replace(/([^"'\s])$/, "$1 "))
        : ((d = String(d)), (d = cm.test(d) ? d : "zSoyz"));
      d = " " + d;
    } else d = "";
    c = c + d + ' dir="ltr">';
    a = a = { rc: a.rc, mb: a.mb };
    a = U(
      (a.rc
        ? '<div class="' +
          (a.mb ? W("recaptcha-checkbox-nodatauri") + " " : "") +
          W("recaptcha-checkbox-border") +
          '" role="presentation"></div><div class="' +
          (a.mb ? W("recaptcha-checkbox-nodatauri") + " " : "") +
          W("recaptcha-checkbox-borderAnimation") +
          '" role="presentation"></div><div class="' +
          (a.mb ? W("recaptcha-checkbox-nodatauri") + " " : "") +
          W("recaptcha-checkbox-spinner") +
          '" role="presentation"></div><div class="' +
          (a.mb ? W("recaptcha-checkbox-nodatauri") + " " : "") +
          W("recaptcha-checkbox-spinnerAnimation") +
          '" role="presentation"></div>'
        : '<div class="' +
          W("recaptcha-checkbox-spinner-gif") +
          '" role="presentation"></div>') +
        '<div class="' +
        W("recaptcha-checkbox-checkmark") +
        '" role="presentation"></div>',
    );
    return b(c + a + "</span>");
  };
  var fm = function (a) {
    G(this, a, "conf", em);
  };
  A(fm, F);
  var em = [5];
  fm.l = "conf";
  var hm = function () {
    var a = gm.Ga().get();
    return I(a, 2);
  };
  var gm = function () {
    this.l = null;
  };
  gm.prototype.get = k("l");
  var im = function (a, b) {
      b = void 0 === b ? new fm() : b;
      a.l = b;
    },
    jm = function (a) {
      var b = gm.Ga();
      return b.l ? eb(Sc(b.l, 5), a) : !1;
    };
  Ha(gm);
  var km = function (a, b) {
    P.call(this);
    this.o = a;
    this.A = -1;
    this.w = new Th(this.o);
    te(this, this.w);
    jm("JS_FASTCLICK") &&
      ((nc && Fc) || pc || oc) &&
      Ye(this.o, ["touchstart", "touchend"], this.B, !1, this);
    b ||
      (Ye(this.w, "action", this.l, !1, this),
      Ye(this.o, "keyup", this.F, !1, this));
  };
  A(km, P);
  km.prototype.B = function (a) {
    if ("touchstart" == a.type) (this.A = z()), a.o();
    else if ("touchend" == a.type) {
      var b = z() - this.A;
      if (0 != a.ta.cancelable && 500 > b) return this.l(a, !0);
    }
    return !0;
  };
  km.prototype.F = function (a) {
    return 32 == a.keyCode && "keyup" == a.type ? this.l(a) : !0;
  };
  km.prototype.l = function (a, b) {
    var c = z() - this.A;
    if (b || 1e3 < c)
      (a.type = "action"), this.dispatchEvent(a), a.o(), a.preventDefault();
    return !1;
  };
  km.prototype.L = function () {
    ef(this.w, "action", this.l, !1, this);
    ef(this.o, ["touchstart", "touchend"], this.B, !1, this);
    km.I.L.call(this);
  };
  var lm = function (a, b) {
    var c = Xk(Vk, "recaptcha-checkbox");
    T.call(this, null, c, b);
    this.l = 1;
    this.D = null;
    this.tabIndex = a && isFinite(a) && 0 == a % 1 && 0 < a ? a : 0;
  };
  A(lm, T);
  n = lm.prototype;
  n.W = function () {
    this.N = Ik(
      dm,
      {
        id: Qk(this),
        uc: this.La,
        checked: this.o(),
        disabled: !this.isEnabled(),
        fd: this.tabIndex,
      },
      void 0,
      this.A,
    );
  };
  n.X = function () {
    lm.I.X.call(this);
    if (this.cc) {
      var a = S(this);
      this.D &&
        R(
          R(
            R(
              R(
                R(a, new km(this.D), "action", this.Zb),
                this.D,
                "mouseover",
                this.Mc,
              ),
              this.D,
              "mouseout",
              this.Lc,
            ),
            this.D,
            "mousedown",
            this.lb,
          ),
          this.D,
          "mouseup",
          this.dc,
        );
      R(
        R(a, new km(this.C()), "action", this.Zb),
        new Th(document),
        "action",
        this.Zb,
      );
    }
    if (this.D) {
      if (!this.D.id) {
        a = this.D;
        var b = Qk(this) + ".lbl";
        a.id = b;
      }
      re(this.C(), "labelledby", this.D.id);
    }
  };
  n.va = function (a) {
    lm.I.va.call(this, a);
    a && (this.C().tabIndex = this.tabIndex);
  };
  n.bc = function (a) {
    return 32 == a.keyCode || 13 == a.keyCode ? (this.Zb(a), !0) : !1;
  };
  n.Zb = function (a) {
    a.o();
    if (this.isEnabled() && 3 != this.l && !a.target.href) {
      var b = !this.o();
      this.dispatchEvent(b ? "before_checked" : "before_unchecked") &&
        (a.preventDefault(), this.Wa(b));
    }
  };
  n.cb = function () {
    return (
      lm.I.cb.call(this) &&
      !(
        this.isEnabled() &&
        this.C() &&
        Hh(this.C(), "recaptcha-checkbox-clearOutline")
      )
    );
  };
  n.Gb = function (a) {
    lm.I.Gb.call(this, a);
    mm(this, !1);
  };
  n.lb = function (a) {
    lm.I.lb.call(this, a);
    mm(this, !0);
  };
  var mm = function (a, b) {
    a.isEnabled() && nm(a, "recaptcha-checkbox-clearOutline", b);
  };
  lm.prototype.o = function () {
    return 0 == this.l;
  };
  lm.prototype.Wa = function (a) {
    (a && this.o()) || (!a && 1 == this.l) || om(this, a ? 0 : 1);
  };
  lm.prototype.bd = function () {
    2 == this.l || om(this, 2);
  };
  lm.prototype.sb = function () {
    return 3 == this.l ? Of() : om(this, 3);
  };
  var om = function (a, b) {
      if (
        (0 == b && a.o()) ||
        (1 == b && 1 == a.l) ||
        (2 == b && 2 == a.l) ||
        (3 == b && 3 == a.l)
      )
        return Nf();
      2 == b && a.Gb(!1);
      a.l = b;
      nm(a, "recaptcha-checkbox-checked", 0 == b);
      nm(a, "recaptcha-checkbox-expired", 2 == b);
      nm(a, "recaptcha-checkbox-loading", 3 == b);
      var c = a.C();
      c && re(c, "checked", 0 == b ? "true" : "false");
      a.dispatchEvent("change");
      return Nf();
    },
    nm = function (a, b, c) {
      a.C() && Mh(a.C(), b, c);
    };
  var pm = function (a, b) {
    lm.call(this, a, b);
    this.ca = this.M = null;
    this.P = !1;
  };
  A(pm, lm);
  var qm = function (a, b, c, d, e) {
      this.w = a;
      this.size = b;
      this.o = c;
      this.time = 17 * d;
      this.l = !!e;
    },
    rm = new qm(
      "recaptcha-checkbox-borderAnimation",
      new L(28, 28),
      new zi(0, 28, 560, 0),
      20,
    ),
    sm = new qm(
      "recaptcha-checkbox-borderAnimation",
      new L(28, 28),
      new zi(560, 28, 840, 0),
      10,
    ),
    tm = new qm(
      "recaptcha-checkbox-borderAnimation",
      new L(28, 28),
      new zi(0, 56, 560, 28),
      20,
    ),
    um = new qm(
      "recaptcha-checkbox-borderAnimation",
      new L(28, 28),
      new zi(560, 56, 840, 28),
      10,
    ),
    vm = new qm(
      "recaptcha-checkbox-borderAnimation",
      new L(28, 28),
      new zi(0, 84, 560, 56),
      20,
    ),
    wm = new qm(
      "recaptcha-checkbox-borderAnimation",
      new L(28, 28),
      new zi(560, 84, 840, 56),
      10,
    ),
    xm = new qm(
      "recaptcha-checkbox-spinner",
      new L(36, 36),
      new zi(0, 36, 2844, 0),
      79,
      !0,
    ),
    ym = new qm(
      "recaptcha-checkbox-spinnerAnimation",
      new L(38, 38),
      new zi(0, 38, 3686, 0),
      97,
    ),
    zm = new qm(
      "recaptcha-checkbox-checkmark",
      new L(38, 30),
      new zi(0, 30, 600, 0),
      20,
    ),
    Am = new qm(
      "recaptcha-checkbox-checkmark",
      new L(38, 30),
      new zi(600, 30, 1200, 0),
      20,
    );
  n = pm.prototype;
  n.W = function () {
    this.N = Ik(
      dm,
      {
        id: Qk(this),
        uc: this.La,
        checked: this.o(),
        disabled: !this.isEnabled(),
        fd: this.tabIndex,
        rc: !0,
        mb: !(D ? yc("9.0") : 1),
      },
      void 0,
      this.A,
    );
  };
  n.X = function () {
    pm.I.X.call(this);
    if (!this.M) {
      var a = this.O("recaptcha-checkbox-spinner");
      this.M = Bm(this, xm);
      this.ca = new hj(a, 340);
      Lk() &&
        R(
          S(this),
          this.M,
          "finish",
          y(function () {
            Lk();
            var b = (Ei(a, "transform") || "rotate(0deg)").replace(
              /^rotate\(([-0-9]+)deg\)$/,
              "$1",
            );
            isFinite(b) && (b = String(b));
            b = r(b)
              ? /^\s*-?0x/i.test(b)
                ? parseInt(b, 16)
                : parseInt(b, 10)
              : NaN;
            isNaN(b) ||
              Ci(a, "transform", vb("rotate(%sdeg)", (b + 180) % 360));
          }, this),
        );
    }
  };
  n.Wa = function (a) {
    if (!((a && this.o()) || (!a && 1 == this.l) || this.P)) {
      var b = this.l,
        c = a ? 0 : 1,
        d = this.cb(),
        e = y(function () {
          om(this, c);
        }, this),
        f = Cm(this, !0);
      if (3 == this.l) var g = Dm(this, !1, void 0, !a);
      else (g = Nf()), f.add(this.o() ? Em(this, !1) : Fm(this, !1, b, d));
      a ? f.add(Em(this, !0, e)) : (g.then(e), f.add(Fm(this, !0, c, d)));
      g.then(function () {
        f.B();
      }, u);
    }
  };
  n.bd = function () {
    if (2 != this.l && !this.P) {
      var a = this.l,
        b = this.cb(),
        c = y(function () {
          om(this, 2);
        }, this),
        d = Cm(this, !0);
      if (3 == this.l) var e = Dm(this, !1, void 0, !0);
      else (e = Nf()), d.add(this.o() ? Em(this, !1) : Fm(this, !1, a, b));
      e.then(c);
      d.add(Fm(this, !0, 2, !1));
      e.then(function () {
        d.B();
      }, u);
    }
  };
  n.sb = function () {
    if (3 == this.l || this.P) return Of();
    var a = Tf();
    Dm(this, !0, a);
    return a.l;
  };
  var Dm = function (a, b, c, d) {
      if (b == (3 == a.l)) return Nf();
      if (b) {
        b = a.l;
        d = a.cb();
        var e = Cm(a);
        a.o() ? e.add(Em(a, !1)) : e.add(Fm(a, !1, b, d));
        e.add(Gm(a, c));
        var f = Tf();
        ai(
          S(a),
          e,
          "end",
          y(function () {
            f.resolve();
          }, a),
        );
        om(a, 3);
        e.B();
        return f.l;
      }
      Hm(a, d);
      om(a, 1);
      return Nf();
    },
    Hm = function (a, b) {
      if (0 != a.M.l && 1 != a.ca.l) {
        var c = y(function () {
          this.M.stop(!0);
          yi(this.M);
          Pi(this.O("recaptcha-checkbox-spinner"), "");
          this.va(!0);
        }, a);
        b ? (ai(S(a), a.ca, "end", c), a.ca.B(!0)) : c();
      }
    };
  pm.prototype.qa = function (a) {
    if (this.P == a) throw Error("Invalid state.");
    this.P = a;
  };
  var Fm = function (a, b, c, d) {
      c = 2 == c;
      d = Bm(a, b ? (c ? vm : d ? rm : tm) : c ? wm : d ? sm : um);
      var e = a.N ? M("recaptcha-checkbox-border", a.N || a.A.l) : null;
      ai(
        S(a),
        d,
        "play",
        y(function () {
          Qi(e, !1);
        }, a),
      );
      ai(
        S(a),
        d,
        "finish",
        y(function () {
          b && Qi(e, !0);
        }, a),
      );
      return d;
    },
    Em = function (a, b, c) {
      var d = Bm(a, b ? zm : Am);
      ai(
        S(a),
        d,
        "play",
        y(function () {
          Ci(this.C(), "overflow", "visible");
        }, a),
      );
      ai(
        S(a),
        d,
        "finish",
        y(function () {
          b || Ci(this.C(), "overflow", "");
          c && c();
        }, a),
      );
      return d;
    },
    Gm = function (a, b) {
      var c = y(function () {
          b && b.resolve();
          Q(
            y(function () {
              3 == this.l && 1 != this.M.l && (this.va(!1), this.M.B(!0));
            }, this),
            472,
          );
        }, a),
        d = Bm(a, ym);
      ai(S(a), d, "play", c);
      return d;
    },
    Cm = function (a, b) {
      var c = new wi();
      b &&
        (ai(S(a), c, "play", y(a.qa, a, !0)),
        ai(S(a), c, "end", y(a.qa, a, !1)));
      return c;
    },
    Bm = function (a, b) {
      var c = new xi(
        a.N ? M(b.w, a.N || a.A.l) : null,
        b.size,
        b.o,
        b.time,
        void 0,
        !b.l,
      );
      b.l ||
        Xe(
          c,
          "end",
          y(function () {
            yi(this);
          }, c),
        );
      return c;
    };
  var Im = function (a) {
    G(this, a, "bgdata", null);
  };
  A(Im, F);
  Im.l = "bgdata";
  var Jm = function () {
    this.o = this.l = null;
  };
  Jm.prototype.set = function (a) {
    I(a, 3);
    I(a, 1) || I(a, 2);
    this.l = a;
    this.o = null;
  };
  Jm.prototype.load = function () {
    window.botguard && (window.botguard = null);
    if (I(this.l, 3) && (I(this.l, 1) || I(this.l, 2))) {
      var a = pb(Nc(I(this.l, 3)));
      if (I(this.l, 1))
        this.o = new Jf(function (b, d) {
          var c = pb(Nc(I(this.l, 1)));
          Bj(jj(c)).then(function () {
            try {
              window.botguard && window.botguard.bg
                ? b(new window.botguard.bg(a))
                : d(null);
            } catch (f) {
              d(null);
            }
          }, d);
        }, this);
      else {
        if (I(this.l, 2)) {
          var b = pb(Nc(I(this.l, 2)));
          try {
            if ((Sa(b), window.botguard && window.botguard.bg)) {
              this.o = Nf(new window.botguard.bg(a));
              return;
            }
          } catch (c) {}
        }
        this.o = Of();
      }
    } else this.o = Of();
  };
  Jm.prototype.execute = function (a, b) {
    this.o.then(
      function (b) {
        b.invoke(function (b) {
          a(b);
        });
      },
      function () {
        b();
      },
    );
  };
  var Km = function () {
    O.call(this);
    this.l = new Rj(0, Tj, 1, 10, 5e3);
    te(this, this.l);
    this.o = 0;
  };
  A(Km, O);
  var Tj = new ug(),
    Mm = function (a, b) {
      return new Jf(function (a, d) {
        var c = String(this.o++);
        Vj(
          this.l,
          c,
          b.o.toString(),
          b.Ac(),
          b.Aa(),
          y(
            function (b, c) {
              var e = c.target;
              Bh(e) ? a((0, b.A)(e)) : d(new Lm(b, e));
            },
            this,
            b,
          ),
        );
      }, a);
    },
    Lm = function () {
      Ua.call(this);
    };
  A(Lm, Ua);
  Lm.prototype.name = "XhrError";
  var Nm = function (a, b) {
    O.call(this);
    this.w = a;
    te(this, this.w);
    this.A = b;
  };
  A(Nm, O);
  var Om = function (a) {
    G(this, a, 0, null);
  };
  A(Om, F);
  var Pm = function (a) {
    G(this, a, "hctask", null);
  };
  A(Pm, F);
  Pm.l = "hctask";
  var Xc = function (a) {
    G(this, a, "ctask", Qm);
  };
  A(Xc, F);
  var Qm = [1];
  Xc.l = "ctask";
  var Sm = function (a) {
    G(this, a, "ftask", Rm);
  };
  A(Sm, F);
  var Rm = [1];
  Sm.l = "ftask";
  var Tm = function (a) {
    G(this, a, "ainput", null);
  };
  A(Tm, F);
  Tm.l = "ainput";
  Tm.prototype.Ba = function () {
    return I(this, 8);
  };
  var Um = function (a, b, c) {
    Nm.call(this, a, c);
    this.H = K(b, Xc, 5);
    this.o = I(b, 4);
    this.F = 3 == I(K(b, Om, 6), 1);
    this.B = Sc(K(b, Sm, 9), 1);
    this.l = !!I(b, 10);
    this.D = I(b, 11) || 86400;
  };
  A(Um, Nm);
  var Wm = function (a, b) {
    Ok.call(this, b);
    this.l = Jd(document, "recaptcha-token");
    this.Ya = Vm[a] || Vm[1];
  };
  A(Wm, Ok);
  var Xm = {
      0: "An unknown error has occurred. Try reloading the page.",
      1: "Error: Invalid API parameter(s). Try reloading the page.",
      2: "Session expired. Reload the page.",
      10: 'Invalid action name, may only include "A-Za-z/_". Do not include user-specific information.',
    },
    Vm = { 2: "rc-anchor-dark", 1: "rc-anchor-light" },
    Ym = function (a) {
      return Xm[a] || Xm[0];
    };
  Wm.prototype.X = function () {
    Wm.I.X.call(this);
    this.Lb = Jd(document, "recaptcha-accessible-status");
  };
  Wm.prototype.Hb = u;
  var Zm = function (a, b) {
    a.Lb && fe(a.Lb, b);
  };
  n = Wm.prototype;
  n.Tc = function () {
    this.Hb(!0, "Verification expired. Check the checkbox again.");
    Zm(
      this,
      "Verification expired, check the checkbox again for a new challenge",
    );
  };
  n.Hd = u;
  n.Gd = u;
  n.Nc = function () {
    Zm(this, "You are verified");
  };
  n.Hc = u;
  n.sb = function () {
    return Nf();
  };
  n.handleError = u;
  n.Ic = function () {
    Zm(
      this,
      "Verification challenge expired, check the checkbox again for a new challenge",
    );
    this.Hc();
  };
  var $m = function () {
      return /^https:\/\/www.gstatic.c..?\/recaptcha\/api2\/v1528855115741\/recaptcha__.*/;
    },
    an = function (a) {
      var b = p.__recaptcha_api || "https://www.google.com/recaptcha/";
      return (pk(b).l ? "" : "//") + b + a;
    },
    bn = function (a, b) {
      b.set("cb", Gb());
      return ck(new Yj(an(a)), b).toString();
    },
    cn = function (a, b) {
      for (var c = p.recaptcha; 1 < a.length; ) (c = c[a[0]]), (a = a.slice(1));
      var d = function (a, b, c) {
        Object.defineProperty(a, b, { get: c, configurable: !0 });
      };
      d(c, a[0], function () {
        d(c, a[0], h());
        return b;
      });
    },
    dn = function (a) {
      return new Jf(function (b) {
        var c = Ld(document, "img", null, a);
        0 == c.length
          ? b()
          : Ye(c[0], "load", function () {
              b();
            });
      });
    },
    en = function (a, b) {
      var c = aj(a);
      Ci(a, "fontSize", c + "px");
      for (
        var d = Ni(a).height;
        12 < c && !(0 >= b && d <= 2 * c) && !(d <= b);

      )
        (c -= 2), Ci(a, "fontSize", c + "px"), (d = Ni(a).height);
    };
  var fn = function () {
      this.l = [];
    },
    kn = function (a) {
      var b = new fn();
      gn(b, a);
      return hn(jn(b.l));
    },
    ln = function (a) {
      var b = new fn();
      gn(b, a, !0);
      return hn(jn(b.l));
    },
    gn = function (a, b, c) {
      if ((c = void 0 === c ? !1 : c)) {
        if (b && b.attributes && (mn(a, b.tagName), "INPUT" != b.tagName))
          for (var d = 0; d < b.attributes.length; d++)
            mn(a, b.attributes[d].name + ":" + b.attributes[d].value);
      } else for (d in b) mn(a, d);
      3 == b.nodeType && b.wholeText && mn(a, b.wholeText);
      if (1 == b.nodeType)
        for (b = b.firstChild; b; ) gn(a, b, c), (b = b.nextSibling);
    },
    mn = function (a, b) {
      100 <= a.l.length && (a.l = [hn(jn(a.l)).toString()]);
      a.l.push(b);
    },
    hn = function (a) {
      var b = 0;
      if (!a) return b;
      for (var c = 0; c < a.length; c++)
        (b = (b << 5) - b + a.charCodeAt(c)), (b &= b);
      return b;
    },
    nn = function () {
      var a = [];
      try {
        for (var b = (0, p.gd_.gd_)().firstChild; b; )
          a.push(kn(b)), (b = b.nextSibling);
      } catch (c) {}
      return Tg(a);
    };
  function jn(a) {
    var b = "";
    var c = typeof a;
    if ("object" === c)
      for (var d in a) b += "[" + c + ":" + d + jn(a[d]) + "]";
    else
      b =
        "function" === c
          ? b + ("[" + c + ":" + a.toString() + "]")
          : b + ("[" + c + ":" + a + "]");
    return b.replace(/\s/g, "");
  }
  function on(a) {
    a = a.split("");
    a.splice(1, 0, ":");
    for (a.splice(1, 0, ":"); "r" != a[0]; ) a.push(a.shift());
    return a.join("");
  }
  function pn(a, b, c) {
    try {
      return qn(c).setItem(a, b), b;
    } catch (d) {
      return null;
    }
  }
  function rn(a, b) {
    try {
      return qn(b).getItem(a);
    } catch (c) {
      return null;
    }
  }
  function qn(a) {
    var b = N();
    return 1 == a ? b.sessionStorage : b.localStorage;
  }
  function sn(a) {
    var b = rn(on("car"), 0) || pn(on("car"), Gb(), 0);
    b
      ? ((b = new ig(new pg(), ob(b))),
        b.reset(),
        b.w(a),
        (a = b.A()),
        (a = qb(a).slice(0, 4)))
      : (a = "");
    return a;
  }
  function tn() {
    try {
      return N().localStorage.length;
    } catch (a) {
      return -1;
    }
  }
  var un = function (a) {
      Tc(a, Pm, 1);
      for (var b = 0; b < Tc(a, Pm, 1).length; b++) {
        var c = Tc(a, Pm, 1)[b];
        I(c, 3);
        I(c, 4);
      }
      this.o = a;
      this.l = [];
    },
    vn = function (a) {
      for (var b = I(a, 3); b <= I(a, 4); b++) {
        var c = b,
          d = a;
        c = Kk("%s_%d", I(d, 1), c);
        var e = new pg();
        e.w(c);
        if (qb(e.A()) == I(d, 2)) return b;
      }
      return -1;
    },
    wn = function (a, b, c) {
      var d = new Date().getTime();
      if (!D || yc("8"))
        for (var e = Tc(a.o, Pm, 1), f = 0; f < e.length; f++)
          a.l.push(vn(e[f])), c.call(void 0, Tg(a.l), new Date().getTime() - d);
      b.call(void 0, Tg(a.l), new Date().getTime() - d);
    };
  var xn = function (a) {
    O.call(this);
    this.o = this.w = null;
    this.l = window.Worker && a ? new Worker(a) : null;
  };
  Ba(xn, O);
  xn.prototype.isEnabled = function () {
    return !!this.l;
  };
  var yn = function (a, b) {
    a.l && ((a.o = b), (a.l.onmessage = y(a.B, a)));
  };
  xn.prototype.B = function (a) {
    fg(this.w);
    this.o && this.o(a.data);
  };
  xn.prototype.A = function () {
    this.o && this.o(zn("error"));
  };
  var An = function (a, b) {
    a.l && ((a.w = Q(a.A, 1e3, a)), a.l.postMessage(zn("start", b.Fb())));
  };
  xn.prototype.L = function () {
    this.l && this.l.terminate();
    this.l = null;
  };
  var Bn = function (a) {
    "start" == a.data.type &&
      ((a = Yc(a.data.data)),
      wn(
        new un(a),
        Qa(function (a, c) {
          a.postMessage(zn("finish", c));
        }, self),
        Qa(function (a, c) {
          a.postMessage(zn("progress", c));
        }, self),
      ));
  };
  function zn(a, b) {
    return { type: a, data: void 0 === b ? null : b };
  }
  p.document || p.window || (self.onmessage = Bn);
  var Dn = function (a) {
    G(this, a, 0, Cn);
  };
  A(Dn, F);
  var Cn = [17];
  Dn.prototype.xd = function () {
    return I(this, 1);
  };
  var En = function (a, b, c) {
      this.Sb = void 0 === a ? null : a;
      this.l = void 0 === b ? null : b;
      this.Te = void 0 === c ? null : c;
    },
    Fn = function (a, b) {
      this.response = a;
      this.timeout = b;
    },
    Gn = function (a, b, c) {
      this.o = a;
      this.l = b;
      this.w = c;
    },
    Hn = function (a, b, c, d, e) {
      this.l = a;
      this.Sb = void 0 === b ? null : b;
      this.o = void 0 === c ? null : c;
      this.A = void 0 === d ? null : d;
      this.w = void 0 === e ? null : e;
    },
    In = aa("response"),
    Jn = aa("l"),
    Kn = aa("errorCode");
  var Mn = function (a, b, c) {
      this.l = c || "GET";
      this.A = b;
      this.o = new Yj();
      bk(this.o, a);
      this.w = new fk();
      a = hm();
      ok(this.o, "k", a);
      Ln(this, "v", "v1528855115741");
    },
    Nn = function (a) {
      return function (b) {
        if (b.R)
          b: {
            if (
              ((b = b.R.responseText),
              0 == b.indexOf(")]}'\n") && (b = b.substring(5)),
              p.JSON)
            )
              try {
                var c = p.JSON.parse(b);
                break b;
              } catch (d) {}
            c = Rg(b);
          }
        else c = void 0;
        return new a(c);
      };
    };
  Mn.prototype.Ac = k("l");
  Mn.prototype.Aa = function () {
    if (eb(qh, this.l)) return this.w.toString();
  };
  var Ln = function (a, b, c) {
      eb(qh, a.l);
      tk(a.w, b);
      a.w.add(b, c);
    },
    On = function (a, b, c) {
      eb(qh, a.l);
      null != c && Ln(a, b, c);
    },
    Pn = function (a, b) {
      eb(qh, a.l);
      Pb(
        b,
        function (a, b) {
          Ln(this, b, a);
        },
        a,
      );
    };
  var Qn = function () {
    Mn.call(
      this,
      "/recaptcha/api2/anchor",
      function (a) {
        return a.R && 4 == zh(a) ? a.R.getAllResponseHeaders() || "" : "";
      },
      "HEAD",
    );
    var a = this,
      b = N().location.search;
    0 < b.length &&
      new fk(b.slice(1)).forEach(function (b, d) {
        ok(a.o, d, b);
      });
  };
  Ba(Qn, Mn);
  var Rn = function (a) {
    G(this, a, 0, null);
  };
  A(Rn, F);
  var Tn = function (a) {
    G(this, a, 0, Sn);
  };
  A(Tn, F);
  var Sn = [1],
    Vn = function (a) {
      G(this, a, 0, Un);
    };
  A(Vn, F);
  var Un = [1],
    Yn = function (a, b) {
      var c = { Zi: Rc(Wn(b), Xn, a), Vi: I(b, 2) };
      a && (c.ya = b);
      return c;
    },
    Zn = function (a) {
      G(this, a, 0, null);
    };
  A(Zn, F);
  var Xn = function (a, b) {
      var c = { text: I(b, 1), Ui: I(b, 2), vi: I(b, 3), Ti: I(b, 4) };
      a && (c.ya = b);
      return c;
    },
    Wn = function (a) {
      return Tc(a, Zn, 1);
    };
  var $n = function (a) {
    G(this, a, 0, null);
  };
  A($n, F);
  var bo = function (a) {
    G(this, a, 0, ao);
  };
  A(bo, F);
  var ao = [3];
  var co = function (a) {
    G(this, a, 0, null);
  };
  A(co, F);
  var eo = function (a, b) {
    var c = { od: I(b, 1), pd: I(b, 2) };
    a && (c.ya = b);
    return c;
  };
  var go = function (a) {
    G(this, a, 0, fo);
  };
  A(go, F);
  var fo = [8],
    ho = function (a, b) {
      var c = I(b, 1);
      var d = I(b, 2);
      null == d ||
        r(d) ||
        (Oc && d instanceof Uint8Array ? (d = Lc(d)) : (Ia(d), (d = null)));
      c = {
        label: c,
        Ji: d,
        De: I(b, 3),
        rows: I(b, 4),
        cols: I(b, 5),
        Ki: I(b, 6),
        Ab: I(b, 7),
        si: Rc(Tc(b, co, 8), eo, a),
      };
      a && (c.ya = b);
      return c;
    };
  var jo = function (a) {
    G(this, a, 0, io);
  };
  A(jo, F);
  var io = [1, 2];
  var lo = function (a) {
    G(this, a, 0, ko);
  };
  A(lo, F);
  var ko = [1];
  var oo = function (a) {
    G(this, a, 0, mo);
  };
  A(oo, F);
  var mo = [1, 2];
  var po = function (a) {
    G(this, a, 0, null);
  };
  A(po, F);
  var qo = function (a) {
    G(this, a, "pmeta", null);
  };
  A(qo, F);
  var ro = function (a, b) {
    var c,
      d = (c = K(b, go, 1)) && ho(a, c),
      e;
    if ((e = c = K(b, po, 2))) {
      e = c;
      var f = { label: I(e, 1), De: I(e, 2), rows: I(e, 3), cols: I(e, 4) };
      a && (f.ya = e);
      e = f;
    }
    if ((f = c = K(b, $n, 3))) {
      f = c;
      var g = { Ci: I(f, 1), Ei: I(f, 2) };
      a && (g.ya = f);
      f = g;
    }
    if ((g = c = K(b, bo, 4))) {
      g = c;
      var l = {
        Fi: I(g, 1),
        Zd: I(g, 2),
        zi: Sc(g, 3),
        Ni: I(g, 4),
        Mi: I(g, 5),
      };
      a && (l.ya = g);
      g = l;
    }
    if ((l = c = K(b, jo, 5))) {
      l = c;
      var m = { Ii: Rc(Tc(l, go, 1), ho, a), Ri: Sc(l, 2) };
      a && (m.ya = l);
      l = m;
    }
    if ((m = c = K(b, Tn, 6)))
      (m = c), (c = { yi: Rc(Tc(m, Vn, 1), Yn, a) }), a && (c.ya = m), (m = c);
    var t;
    if ((t = c = K(b, oo, 7)))
      (t = { Xi: Sc(c, 1), Wi: Sc(c, 2) }), a && (t.ya = c);
    var E;
    if ((E = c = K(b, Rn, 8)))
      (E = { format: I(c, 1), Qi: I(c, 2) }), a && (E.ya = c);
    var H;
    if ((H = c = K(b, lo, 9))) (H = { Li: Sc(c, 1) }), a && (H.ya = c);
    d = { Hi: d, Yi: e, Di: f, Gi: g, Oi: l, Bi: m, Si: t, ti: E, Pi: H };
    a && (d.ya = b);
    return d;
  };
  qo.l = "pmeta";
  var so = function (a) {
    G(this, a, "rresp", null);
  };
  A(so, F);
  so.l = "rresp";
  so.prototype.la = function () {
    return I(this, 1);
  };
  so.prototype.Wb = function () {
    return I(this, 3);
  };
  so.prototype.setTimeout = function (a) {
    J(this, 3, a);
  };
  so.prototype.Ba = function () {
    return I(this, 6);
  };
  var to = function (a, b, c, d, e) {
    b = void 0 === b ? null : b;
    c = void 0 === c ? null : c;
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    Mn.call(this, "/recaptcha/api2/reload", Nn(so), "POST");
    Ln(this, "reason", a);
    On(this, "c", b);
    On(this, "bg", c);
    d && Pn(this, d);
    On(this, "dg", e);
  };
  Ba(to, Mn);
  function uo(a, b) {
    var c = sb(b),
      d = a.map(function (a, b) {
        return c[b % c.length];
      });
    return ub(a, d);
  }
  function vo(a) {
    var b = Array.prototype.toJSON,
      c = Object.prototype.toJSON;
    try {
      return delete Array.prototype.toJSON, delete Object.prototype.toJSON, a();
    } finally {
      b && (Array.prototype.toJSON = b), c && (Object.prototype.toJSON = c);
    }
  }
  var wo = function (a, b, c) {
      this.message = a;
      this.messageType = b;
      this.Va = c;
    },
    xo = function (a) {
      return vo(function () {
        return JSON.stringify({
          message: qb(uo(sb(JSON.stringify(a.message)), a.messageType + a.Va)),
          messageType: a.messageType,
          Va: a.Va,
        });
      });
    },
    yo = function (a) {
      return vo(function () {
        var b = JSON.parse(a);
        return new wo(
          JSON.parse(tb(uo(rb(b.message), b.messageType + b.Va))),
          b.messageType,
          b.Va,
        );
      });
    },
    zo = function (a, b, c) {
      this.window = a;
      this.l = b;
      this.o = c;
    },
    Ao = function () {
      O.call(this);
      this.o = {};
      this.l = {};
      this.w = new Xh(this);
      te(this, this.w);
    };
  Ba(Ao, O);
  var Co = function (a, b, c, d, e) {
      e = void 0 === e ? a : e;
      var f = a.o[b];
      c = v(c) ? c : [c];
      R(a.w, N(), "message", function (a) {
        a = a.ta;
        var b;
        if (!(b = "*" == f.o)) {
          var g = Bo(f.o);
          b = Bo(a.origin);
          g = g.match(fh);
          b = b.match(fh);
          b = g[3] == b[3] && g[1] == b[1] && g[4] == b[4];
        }
        g =
          (!f.window || f.window == a.source) && (!f.l || ee(f.l) == a.source);
        if (b && g) {
          try {
            var t = yo(a.data);
          } catch (E) {
            return;
          }
          -1 != Wa(c, t.messageType) && d.call(e, t, a.source);
        }
      });
      return a;
    },
    Do = function (a, b, c, d, e) {
      e = void 0 === e ? a : e;
      return Co(a, b, c, function (c, g) {
        Promise.resolve(d.call(e, c.message, c.messageType, g)).then(
          function (d) {
            return X(a, b, "x", d, c.Va);
          },
          function (d) {
            d = d instanceof Error ? null : d;
            X(a, b, "y", d, c.Va);
          },
        );
      });
    },
    Eo = function (a, b, c) {
      c = void 0 === c ? a : c;
      Pb(b, function (b, e) {
        Do(a, "b", e, b, c);
      });
    },
    Fo = function (a, b) {
      Co(
        a,
        b,
        ["x", "y"],
        function (b) {
          var c = b.Va;
          c &&
            a.l[c] &&
            (a.l[c][b.messageType].call(a, b.message), delete a.l[c]);
        },
        a,
      );
    },
    Go = function (a, b, c, d) {
      a.o[b] = new zo(c, null, d);
      Fo(a, b);
      return a;
    },
    Ho = function (a, b) {
      var c = an("b");
      a.o.b = new zo(null, b, c);
      Fo(a, "b");
      return a;
    },
    X = function (a, b, c, d, e) {
      b = a.o[b];
      try {
        (b.window || ee(b.l)).postMessage(
          xo(new wo(void 0 === d ? null : d, c, void 0 === e ? null : e)),
          Bo(b.o),
        );
      } catch (f) {}
      return a;
    };
  Ao.prototype.get = function (a, b, c) {
    var d = this;
    c = void 0 === c ? null : c;
    return new Promise(function (e, f) {
      var g = Gb(),
        l = {};
      d.l[g] = ((l.x = e), (l.y = f), l);
      Q(function () {
        f();
        delete d.l[g];
      }, 15e3);
      X(d, a, b, c, g);
    });
  };
  function Bo(a) {
    if ("*" == a) return a;
    a = Zj(bk(new Yj(a), ""), gh(a));
    null != a.B || ("https" == a.l ? ak(a, 443) : "http" == a.l && ak(a, 80));
    return a.toString();
  }
  var Io = function (a, b, c, d) {
    Xh.call(this);
    this.T = a;
    this.G = b;
    this.H = d;
    this.o = "a";
    this.l = c;
    this.D = null;
    this.F = Gb();
    this.S = Nf();
    this.A = Tf();
    this.U = jm("JS_HD") ? Vf(Mm(this.G.w, new Qn()), ba("")) : Nf("");
    this.P = {
      a: {
        c: this.Rc,
        e: this.Xa,
        eb: this.Xa,
        ea: this.Ge,
        ee: this.ad,
        i: y(this.T.Tc, this.T),
        m: this.Y,
      },
      b: { g: this.Id, h: this.Ed, i: this.ud, d: this.$d, j: this.Gc },
      c: {
        c: this.Rc,
        ed: this.Za,
        e: this.Xa,
        eb: this.Xa,
        g: this.Kc,
        j: this.Gc,
      },
      d: { c: this.Rc, ed: this.Za, g: this.Kc, j: this.Gc },
      e: {
        e: this.Xa,
        eb: this.Xa,
        g: this.Kc,
        d: this.$d,
        h: this.Ed,
        i: this.ud,
      },
      f: { e: this.Xa, eb: this.Xa },
      g: { g: this.Id, ec: this.V },
      h: {},
    };
  };
  Ba(Io, Xh);
  Io.prototype.w = function (a, b, c) {
    if ((b = this.P[this.o][b])) return b.call(this, a || void 0, c);
  };
  var Ko = function (a) {
    var b = a.G.o;
    b
      ? ((N().location.hash = "#" + a.F),
        X(
          Do(
            Go(
              Do(
                Go(a.l, "a", N().parent, b),
                "a",
                ["g", "e", "h", "i"],
                a.w,
                a,
              ),
              "c",
              null,
              an("c"),
            ),
            "c",
            "c",
            a.w,
            a,
          ),
          "a",
          "b",
        ),
        R(a, a.T, "b", y(a.w, a, null, "eb")),
        Q(function () {
          return a.w(null, "m");
        }, 1e3 * a.G.D),
        a.G.l || (X(a.l, "a", "f", Jo(a)), a.G.F && a.w(null, "ea")))
      : a.ad();
  };
  n = Io.prototype;
  n.Rc = function (a, b) {
    this.F == a.l &&
      (b
        ? (Go(this.l, "c", b, an("c")),
          Do(this.l, "c", ["g", "d", "j", "i"], this.w, this),
          this.A.resolve())
        : this.ad());
  };
  n.ad = function () {
    this.o = "h";
    X(Go(this.l, "d", N().parent, "*"), "d", "j");
  };
  n.Ed = function (a) {
    a.l ? ((this.o = "b"), this.T.Hd()) : ((this.o = "e"), this.T.Gd());
    X(this.l, "c", "g", a);
  };
  n.Kc = function (a) {
    a.A
      ? X(this.l, "c", "g", new Hn(a.l))
      : "c" == this.o
      ? (this.o = "e")
      : a.o && 0 >= a.o.width && 0 >= a.o.height
      ? ((this.o = "b"), X(this.l, "c", "g", new Hn(a.l)))
      : ((this.o = "e"), X(this.l, "a", "e", a));
  };
  n.Id = function (a) {
    X(this.l, "a", "e", a);
  };
  n.$d = function (a) {
    var b = this;
    this.T.Nc();
    this.o = "g";
    X(this.l, "a", "d", a);
    Q(function () {
      return b.w(a.response, "ec");
    }, 1e3 * a.timeout);
  };
  n.Gc = function (a) {
    this.T.handleError(a.errorCode);
    this.o = "a";
    X(this.l, "a", "j", a);
  };
  n.ud = function () {
    this.T.Ic();
    this.o = "f";
    X(this.l, "a", "e", new Hn(!1));
  };
  n.Xa = function (a) {
    a = void 0 === a ? new Hn(!0) : a;
    var b = this,
      c;
    return za(
      new ya(
        new ua(function (d) {
          if (1 == d.o) {
            if (b.G.l) return d["return"](Lo(b, a));
            b.T.Hb(!1);
            c = b.o;
            if ("e" == b.o) {
              d.o = 3;
              return;
            }
            b.o = "d";
            var e = b.T.sb();
            d.o = 3;
            return { value: e };
          }
          "a" == c ? Mo(b) : "c" != c && X(b.l, "c", "e", a);
          d.o = 0;
        }),
      ),
    );
  };
  n.Za = function () {
    try {
      N().parent.frames[this.F].document && Mo(this);
    } catch (a) {
      this.T.Hc(),
        this.A.reject(),
        (this.A = Tf()),
        (this.o = "a"),
        X(this.l, "a", "f", Jo(this)),
        X(this.l, "a", "j");
    }
  };
  n.Ge = function () {
    this.o = "c";
    Mo(this);
  };
  var Mo = function (a) {
      var b = Rf([No(a), a.A.l]).then(function (b) {
        return X(a.l, "c", "e", new Hn(!0, a.D, null, null, Oo(a, b[0])));
      }, h());
      Q(function () {
        b.cancel();
        a.w(null, "ed");
      }, 15e3);
    },
    Po = function () {
      if (!document.hasStorageAccess) return Nf(1);
      var a = Tf();
      document.hasStorageAccess().then(
        function (b) {
          return a.resolve(b ? 2 : 3);
        },
        function () {
          return a.resolve(4);
        },
      );
      return a.l;
    },
    No = function (a) {
      var b = a.l.get("a", "a", new En(null, a.G.B));
      b = Rf([b, a.U, Po()]).then(function (b) {
        var c = ka(b),
          d = c.next().value;
        b = c.next().value;
        c = c.next().value;
        a.D = d.Sb;
        var e = tn(),
          m = sn(hm());
        e += tn();
        cn(["anchor", "gl"], "");
        cn(["anchor", "gg"], "");
        d = new Dn(d.Te.ka);
        J(d, 5, m);
        J(d, 6, e);
        J(d, 12, b);
        J(d, 18, c);
        b = Gb();
        J(d, 19, b);
        return d;
      });
      var c = Rf([b, a.G.A.o]).then(function (a) {
          a = ka(a);
          var b = a.next().value,
            c = a.next().value;
          cn(["anchor", "gs"], b.Fb());
          return new Jf(function (a) {
            return c.invoke(a);
          });
        }),
        d = new Jf(function (b) {
          a.H.isEnabled() || b("");
          yn(a.H, function (a) {
            "error" == a.type ? b("") : "finish" == a.type && b(a.data);
          });
          An(a.H, a.G.H);
        });
      return Rf([
        b.then(function (a) {
          return "" + hn(a.Fb());
        }),
        c,
        d,
        b.then(function () {
          return nn();
        }),
      ]);
    },
    Oo = function (a, b, c) {
      var d = ka(b);
      b = d.next().value;
      var e = d.next().value,
        f = d.next().value;
      d = d.next().value;
      c = (c = void 0 === c ? {} : c) || {};
      c.c = a.T.l.value;
      d && (c.bcr = d);
      f && (c.chr = f);
      b && (c.vh = b);
      e && (c.bg = e);
      (a = rn(on("cbr"), 1)) && (c.z = a);
      return c;
    },
    Jo = function (a) {
      var b = { hl: "en", v: "v1528855115741" };
      b.k = hm();
      var c = new fk();
      c.B(b);
      return new Gn(
        a.T.wd(),
        { query: c.toString(), title: "recaptcha challenge" },
        a.F,
      );
    };
  Io.prototype.V = function (a) {
    this.o = "f";
    X(this.l, "a", "i");
    X(this.l, "c", "i", new In(a));
  };
  Io.prototype.Y = function () {
    var a = this;
    N().navigator.onLine
      ? X(this.l, "a", "m")
      : ai(this, N(), "online", function () {
          return X(a.l, "a", "m");
        });
  };
  var Lo = function (a, b) {
    var c = a.S.then(
      function () {
        return No(a);
      },
      function () {
        return No(a);
      },
    )
      .then(function (c) {
        return Mm(a.G.w, new to("q", a.T.l.value, null, Oo(a, c, b.w)));
      })
      .then(function (a) {
        return a.Ba() ? Promise.reject(Ym(a.Ba())) : new Fn(a.la(), a.Wb());
      });
    return (a.S = c);
  };
  var Vo = function (a) {
      if (Ml(a.size, 1)) {
        var b = a.Ya,
          c = a.Ka,
          d = a.locale,
          e = a.errorMessage;
        a = a.errorCode;
        a = U(
          '<div class="' +
            W("rc-anchor") +
            " " +
            W("rc-anchor-normal") +
            " " +
            W(b) +
            '">' +
            Qo({ Ka: c }) +
            Ro() +
            '<div class="' +
            W("rc-anchor-content") +
            '">' +
            (e || 0 < a ? So({ errorMessage: e, errorCode: a }) : To()) +
            '</div><div class="' +
            W("rc-anchor-normal-footer") +
            '">' +
            U(
              '<div class="' +
                W("rc-anchor-logo-portrait") +
                '" aria-hidden="true" role="presentation">' +
                (D && Ml(xc, "8.0")
                  ? '<div class="' +
                    W("rc-anchor-logo-img-ie8") +
                    " " +
                    W("rc-anchor-logo-img-portrait") +
                    '"></div>'
                  : '<div class="' +
                    W("rc-anchor-logo-img") +
                    " " +
                    W("rc-anchor-logo-img-portrait") +
                    '"></div>') +
                '<div class="' +
                W("rc-anchor-logo-text") +
                '">reCAPTCHA</div></div>',
            ) +
            Uo({ locale: d }) +
            "</div></div>",
        );
      } else
        Ml(a.size, 2)
          ? ((b = a.Ya),
            (c = a.Ka),
            (d = a.locale),
            (e = a.errorMessage),
            (a = a.errorCode),
            (a = U(
              '<div class="' +
                W("rc-anchor") +
                " " +
                W("rc-anchor-compact") +
                " " +
                W(b) +
                '">' +
                Qo({ Ka: c }) +
                Ro() +
                '<div class="' +
                W("rc-anchor-content") +
                '">' +
                (e ? So({ errorMessage: e, errorCode: a }) : To()) +
                '</div><div class="' +
                W("rc-anchor-compact-footer") +
                '">' +
                U(
                  '<div class="' +
                    W("rc-anchor-logo-landscape") +
                    '" aria-hidden="true" role="presentation" dir="ltr">' +
                    (D && Ml(xc, "8.0")
                      ? '<div class="' +
                        W("rc-anchor-logo-img-ie8") +
                        " " +
                        W("rc-anchor-logo-img-landscape") +
                        '"></div>'
                      : '<div class="' +
                        W("rc-anchor-logo-img") +
                        " " +
                        W("rc-anchor-logo-img-landscape") +
                        '"></div>') +
                    '<div class="' +
                    W("rc-anchor-logo-landscape-text-holder") +
                    '"><div class="' +
                    W("rc-anchor-center-container") +
                    '"><div class="' +
                    W("rc-anchor-center-item") +
                    " " +
                    W("rc-anchor-logo-text") +
                    '">reCAPTCHA</div></div></div></div>',
                ) +
                Uo({ locale: d }) +
                "</div></div>",
            )))
          : (a = "");
      return U(a);
    },
    Yo = function (a) {
      return U(
        '<div class="' +
          W("rc-anchor") +
          " " +
          W("rc-anchor-invisible") +
          " " +
          W(a.Ya) +
          "  " +
          (Ml(a.sc, 1) || Ml(a.sc, 2)
            ? W("rc-anchor-invisible-hover")
            : W("rc-anchor-invisible-nohover")) +
          '">' +
          Qo({ Ka: a.Ka }) +
          Ro() +
          (Ml(Ml(a.sc, 1), a.Ne)
            ? Wo({ locale: a.locale }) + Xo({ locale: a.locale })
            : Xo({ locale: a.locale }) + Wo({ locale: a.locale })) +
          "</div>",
      );
    },
    Wo = function (a) {
      a =
        '<div class="rc-anchor-invisible-text"><span>protected by <strong>reCAPTCHA</strong>' +
        ("</span>" + Uo({ locale: a.locale }) + "</div>");
      return U(a);
    },
    Xo = function (a) {
      var b = U,
        c = '<div class="' + W("rc-anchor-normal-footer") + '">';
      var d = U(
        '<div class="' +
          W("rc-anchor-logo-large") +
          '" role="presentation">' +
          (D && Ml(xc, "8.0")
            ? '<div class="' +
              W("rc-anchor-logo-img-ie8") +
              " " +
              W("rc-anchor-logo-img-large") +
              '"></div>'
            : '<div class="' +
              W("rc-anchor-logo-img") +
              " " +
              W("rc-anchor-logo-img-large") +
              '"></div>') +
          "</div>",
      );
      return b(c + d + Uo({ locale: a.locale }) + "</div>");
    },
    Qo = function (a) {
      return U(
        '<div id="recaptcha-accessible-status" class="' +
          W("rc-anchor-aria-status") +
          '" aria-hidden="true">' +
          V(a.Ka) +
          ". </div>",
      );
    },
    To = function () {
      var a =
        '<div class="' +
        W("rc-inline-block") +
        '"><div class="' +
        W("rc-anchor-center-container") +
        '"><div class="' +
        W("rc-anchor-center-item") +
        " " +
        W("rc-anchor-checkbox-holder") +
        '"></div></div></div><div class="' +
        W("rc-inline-block") +
        '"><div class="' +
        W("rc-anchor-center-container") +
        '"><label class="' +
        W("rc-anchor-center-item") +
        " " +
        W("rc-anchor-checkbox-label") +
        '" aria-hidden="true" role="presentation"><span aria-live="polite" aria-labelledby="' +
        W("recaptcha-accessible-status") +
        '"></span>';
      return U(a + "I'm not a robot</label></div></div>");
    },
    Ro = function () {
      return U(
        '<div class="' +
          W("rc-anchor-error-msg-container") +
          '" style="display:none"><span class="' +
          W("rc-anchor-error-msg") +
          '" aria-hidden="true"></span></div>',
      );
    },
    So = function (a) {
      var b =
          '<div class="' +
          W("rc-inline-block") +
          '"><div class="' +
          W("rc-anchor-center-container") +
          '"><div class="' +
          W("rc-anchor-center-item") +
          " " +
          W("rc-anchor-error-message") +
          '">',
        c = a.errorCode;
      switch (x(c) ? c.toString() : c) {
        case 1:
          b += "Invalid argument.";
          break;
        case 2:
          b += "Your session has expired.";
          break;
        case 3:
          b += "This site key is not enabled for the invisible captcha.";
          break;
        case 4:
          b +=
            "Could not connect to the reCAPTCHA service. Please check your internet connection and reload.";
          break;
        case 5:
          b +=
            'Localhost is not in the list of <a href="https://developers.google.com/recaptcha/docs/faq#localhost_support">supported domains</a> for this site key.';
          break;
        case 6:
          b += "ERROR for site owner:<br>Invalid domain for site key";
          break;
        case 7:
          b += "ERROR for site owner: Invalid site key";
          break;
        case 8:
          b += "ERROR for site owner: Invalid key type";
          break;
        case 9:
          b += "ERROR for site owner: Invalid package name";
          break;
        case 10:
          b +=
            "ERROR for site owner: Action name invalid g.co/recaptcha/action";
          break;
        default:
          b = b + "ERROR for site owner:" + ("<br>" + V(a.errorMessage));
      }
      return U(b + "</div></div></div>");
    },
    Uo = function (a) {
      var b =
        '<div class="' +
        W("rc-anchor-pt") +
        '"><a href="https://www.google.com/intl/' +
        W(a.locale) +
        '/policies/privacy/" target="_blank">';
      b =
        b +
        "Privacy" +
        ('</a><span aria-hidden="true" role="presentation"> - </span><a href="https://www.google.com/intl/' +
          W(a.locale) +
          '/policies/terms/" target="_blank">');
      return U(b + "Terms</a></div>");
    };
  var Zo = function (a, b, c, d, e) {
    Ok.call(this, e);
    this.B = Vm[b] || Vm[1];
    this.Fa = a;
    this.l = c;
    this.o = d;
  };
  A(Zo, Ok);
  Zo.prototype.W = function () {
    this.N = Ik(Vo, {
      size: this.Fa,
      Ya: this.B,
      Ka: this.l,
      locale: "en",
      errorMessage: this.l,
      errorCode: this.o,
    });
    this.$(this.C());
  };
  var $o = function (a) {
    new Zo(I(K(a, Om, 6), 1), I(K(a, Om, 6), 2), I(a, 7), a.Ba() || 0).render(
      document.body,
    );
  };
  Ta("recaptcha.anchor.ErrorMain.init", function (a) {
    a = new Tm(JSON.parse(a));
    X(Go(new Ao(), "d", N().parent, "*"), "d", "j", new Kn(a.Ba()));
    new $o(a);
  });
  var ap = function (a, b, c) {
    Wm.call(this, a, c);
    this.fa = new pm();
    Rk(this.fa, "recaptcha-anchor");
    ml(this.fa, "rc-anchor-checkbox");
    Uk(this, this.fa);
    this.Lb = null;
    this.Fa = b;
  };
  A(ap, Wm);
  n = ap.prototype;
  n.W = function () {
    this.N = Ik(Vo, {
      size: this.Fa,
      Ya: this.Ya,
      Ka: "Recaptcha requires verification",
      locale: "en",
    });
    this.$(this.C());
  };
  n.$ = function (a) {
    ap.I.$.call(this, a);
    a = this.O("rc-anchor-checkbox-label");
    a.setAttribute("id", "recaptcha-anchor-label");
    var b = this.fa;
    b.ja ? (b.Ra(), (b.D = a), b.X()) : (b.D = a);
    this.fa.render(this.O("rc-anchor-checkbox-holder"));
  };
  n.X = function () {
    ap.I.X.call(this);
    R(
      R(
        S(this),
        this.fa,
        ["before_checked", "before_unchecked"],
        y(function (a) {
          "before_checked" == a.type && this.dispatchEvent("b");
          a.preventDefault();
        }, this),
      ),
      document,
      "focus",
      function (a) {
        (a.target && 0 == a.target.tabIndex) || this.fa.C().focus();
      },
      this,
    );
  };
  n.Hb = function (a, b) {
    Mh(this.C(), "rc-anchor-error", a);
    Qi(this.O("rc-anchor-error-msg-container"), a);
    if (a) {
      var c = this.O("rc-anchor-error-msg");
      Xd(c);
      fe(c, b);
    }
  };
  n.Hd = function () {
    this.fa.Wa(!1);
  };
  n.Gd = function () {
    this.fa.C().focus();
  };
  n.Ic = function () {
    ap.I.Ic.call(this);
    this.fa.bd();
    this.fa.C().focus();
  };
  n.Nc = function () {
    this.fa.Wa(!0);
    this.fa.C().focus();
    ap.I.Nc.call(this);
    this.Hb(!1);
  };
  n.wd = function () {
    return Oi(M("recaptcha-checkbox", void 0));
  };
  n.Hc = function () {
    this.fa.Wa(!1);
  };
  n.sb = function () {
    ap.I.sb.call(this);
    return this.fa.sb();
  };
  n.handleError = function (a) {
    var b = Ym(a);
    this.fa.Wa(!1);
    2 != a && (this.fa.va(!1), this.Hb(!0, b), Zm(this, b));
  };
  n.Tc = function () {
    ap.I.Tc.call(this);
    this.fa.bd();
    this.fa.C().focus();
  };
  var bp = function (a, b, c) {
    Wm.call(this, a, c);
    this.o = b;
    this.Lb = null;
  };
  A(bp, Wm);
  bp.prototype.W = function () {
    var a = Ik(Yo, {
      Ka: "Recaptcha requires verification",
      locale: "en",
      Ya: this.Ya,
      sc: this.o,
      Ne: !1,
    });
    this.N = a;
    vf(function () {
      var b = a.querySelectorAll(".rc-anchor-invisible-text .rc-anchor-pt a"),
        c = a.querySelector(".rc-anchor-invisible-text span");
      (160 < Ni(b[0]).width + Ni(b[1]).width || 160 < Ni(c).width) &&
        Ih(M("rc-anchor-invisible-text", void 0), "smalltext");
      b = a.querySelectorAll(".rc-anchor-normal-footer .rc-anchor-pt a");
      65 < Ni(b[0]).width + Ni(b[1]).width &&
        Ih(M("rc-anchor-normal-footer", void 0), "smalltext");
    }, this);
    this.$(this.C());
  };
  bp.prototype.wd = function () {
    return Oi(M("rc-anchor-invisible", void 0));
  };
  var cp = function (a) {
    im(gm.Ga(), K(a, fm, 3));
    jm("JS_THIRDEYE") && Fh();
    var b = I(K(a, Om, 6), 1),
      c;
    3 == b
      ? (c = new bp(I(K(a, Om, 6), 2), I(K(a, Om, 6), 3)))
      : (c = new ap(I(K(a, Om, 6), 2), b));
    c.render(document.body);
    b = new Km();
    var d = new Jm();
    d.set(K(a, Im, 1));
    d.load();
    a = new Um(b, a, d);
    b = pk(an("api2/webworker.js"));
    ok(b, "hl", "en");
    ok(b, "v", "v1528855115741");
    b = new xn(b.toString());
    d = new Ao();
    this.l = new Io(c, a, d, b);
  };
  Ta("recaptcha.anchor.Main.init", function (a) {
    a = new Tm(JSON.parse(a));
    Ko(new cp(a).l);
  });
  var dp = function () {
    return U(
      '<div class="' +
        W("rc-footer") +
        '"><div class="' +
        W("rc-separator") +
        '"></div><div class="' +
        W("rc-controls") +
        '"><div class="' +
        W("primary-controls") +
        '"><div class="' +
        W("rc-buttons") +
        '"><div class="' +
        W("button-holder") +
        " " +
        W("reload-button-holder") +
        '"></div><div class="' +
        W("button-holder") +
        " " +
        W("audio-button-holder") +
        '"></div><div class="' +
        W("button-holder") +
        " " +
        W("image-button-holder") +
        '"></div><div class="' +
        W("button-holder") +
        " " +
        W("help-button-holder") +
        '"></div><div class="' +
        W("button-holder") +
        " " +
        W("undo-button-holder") +
        '"></div></div><div class="' +
        W("verify-button-holder") +
        '"></div></div><div class="' +
        W("rc-challenge-help") +
        '" style="display:none" tabIndex="0"></div></div></div>',
    );
  };
  var ep = function (a) {
      return U(
        '<span class="' +
          W("rc-audiochallenge-tabloop-begin") +
          '" tabIndex="0"></span><div class="' +
          W("rc-audiochallenge-error-message") +
          '" style="display:none" tabIndex="0"></div><div class="' +
          W("rc-audiochallenge-instructions") +
          '" id="' +
          W(a.ze) +
          '" aria-hidden="true"></div><div class="' +
          W("rc-audiochallenge-control") +
          '"></div><div id="' +
          W("rc-response-label") +
          '" style="display:none"></div><div class="' +
          W("rc-audiochallenge-response-field") +
          '"></div><div class="' +
          W("rc-audiochallenge-tdownload") +
          '"></div>' +
          V(dp()) +
          '<span class="' +
          W("rc-audiochallenge-tabloop-end") +
          '" tabIndex="0"></span>',
      );
    },
    fp = function (a) {
      return U(
        '<div class="' +
          W("rc-audiochallenge-play-button") +
          '"></div><audio id="audio-source" src="' +
          W(Wl(a.$c)) +
          '" style="display: none"></audio>',
      );
    },
    gp = function () {
      return U(
        "<center>Your browser doesn't support audio. Please update or upgrade your browser.</center>",
      );
    },
    hp = function (a) {
      a =
        '<a class="' +
        W("rc-audiochallenge-tdownload-link") +
        '" target="_blank" href="' +
        W(Wl(a.$c)) +
        '" title="';
      a += "Alternatively, download audio as MP3".replace(Ql, Rl);
      return U(a + '"></a>');
    },
    ip = function (a) {
      a = a || {};
      var b = "";
      a.Be || (b += "Press R to replay the same challenge. ");
      return U(
        b +
          'Press the refresh button to get a new challenge. <a href="https://support.google.com/recaptcha/#6175971" target="_blank">Learn how to solve this challenge.</a>',
      );
    };
  var jp = function (a, b, c, d) {
    a = Xk(yl, a || "rc-button-default");
    zl.call(this, b, a, d);
    this.l = c || 0;
    ml(this, "goog-inline-block");
  };
  A(jp, zl);
  jp.prototype.X = function () {
    jp.I.X.call(this);
    this.C().setAttribute("id", Qk(this));
    this.C().tabIndex = this.l;
    R(S(this), new km(this.C(), !0), "action", function () {
      this.isEnabled() && this.nb.apply(this, arguments);
    });
  };
  jp.prototype.va = function (a) {
    jp.I.va.call(this, a);
    if (a) {
      this.l = a = this.l;
      var b = this.C();
      b && (0 <= a ? (b.tabIndex = this.l) : ke(b, !1));
    } else (a = this.C()) && ke(a, !1);
  };
  var Y = function (a, b, c, d) {
    Ok.call(this);
    this.Qe = c;
    this.B = this.Fa = new L(a, b);
    this.Y = null;
    this.Oe = d || !1;
    this.response = {};
    this.Vb = [];
    this.Yc = kp(
      this,
      "rc-button",
      void 0,
      "recaptcha-reload-button",
      "Get a new challenge",
      "rc-button-reload",
    );
    this.M = kp(
      this,
      "rc-button",
      void 0,
      "recaptcha-audio-button",
      "Get an audio challenge",
      "rc-button-audio",
    );
    this.Nb = kp(
      this,
      "rc-button",
      void 0,
      "recaptcha-image-button",
      "Get a visual challenge",
      "rc-button-image",
    );
    this.Vc = kp(
      this,
      "rc-button",
      void 0,
      "recaptcha-help-button",
      "Help",
      "rc-button-help",
      !0,
    );
    this.wb = kp(
      this,
      "rc-button",
      void 0,
      "recaptcha-undo-button",
      "Undo",
      "rc-button-undo",
      !0,
    );
    this.xb = kp(
      this,
      void 0,
      "Verify",
      "recaptcha-verify-button",
      void 0,
      void 0,
      void 0,
    );
  };
  A(Y, Ok);
  Y.prototype.$ = function (a) {
    Y.I.$.call(this, a);
    a = this.O("reload-button-holder");
    this.Yc.render(a);
    a = this.O("audio-button-holder");
    this.M.render(a);
    a = this.O("image-button-holder");
    this.Nb.render(a);
    a = this.O("help-button-holder");
    this.Vc.render(a);
    a = this.O("undo-button-holder");
    this.wb.render(a);
    Qi(this.wb.C(), !1);
    a = this.O("verify-button-holder");
    this.xb.render(a);
    this.Oe ? Qi(this.M.C(), !1) : Qi(this.Nb.C(), !1);
  };
  Y.prototype.X = function () {
    Y.I.X.call(this);
    R(S(this), this.Yc, "action", function () {
      lp(this, !1);
      Z(this, !1);
      this.dispatchEvent("g");
    });
    R(S(this), this.M, "action", function () {
      lp(this, !1);
      this.dispatchEvent("h");
    });
    R(S(this), this.Nb, "action", function () {
      lp(this, !1);
      this.dispatchEvent("i");
    });
    R(S(this), this.Vc, "action", function () {
      mp(this);
      this.dispatchEvent("j");
    });
    R(S(this), this.wb, "action", this.xc);
    R(S(this), this.C(), "keyup", function (a) {
      27 == a.keyCode && this.dispatchEvent("e");
    });
    R(S(this), this.xb, "action", this.Jb);
  };
  Y.prototype.getName = k("Qe");
  Y.prototype.Da = function () {
    return Fd(this.Fa);
  };
  var op = function (a, b, c) {
    if (a.B.width != b.width || a.B.height != b.height)
      (a.B = b), c && np(a, nf), a.dispatchEvent("d");
  };
  Y.prototype.xc = h();
  Y.prototype.Jb = function () {
    this.Ea() || (lp(this, !1), this.dispatchEvent("k"));
  };
  var pp = function (a, b, c, d) {
      a.response = {};
      lp(a, !0);
      var e = y(function () {
        this.ra(b, c, d);
      }, a);
      Fd(a.B).width != a.Da().width || Fd(a.B).height != a.Da().height
        ? (np(a, e), op(a, a.Da()))
        : e();
    },
    qp = function (a) {
      Q(
        function () {
          try {
            this.gb();
          } catch (b) {
            if (!D) throw b;
          }
        },
        D ? 300 : 100,
        a,
      );
    };
  Y.prototype.Ua = function (a, b, c) {
    c = c || "";
    c = new Yj(an("api2/payload") + c);
    c.o.set("c", a);
    a = hm();
    c.o.set("k", a);
    b && c.o.set("id", b);
    return c.toString();
  };
  Y.prototype.Ea = ba(!1);
  var np = function (a, b) {
    a.Vb.push(b);
  };
  Y.prototype.ga = function (a) {
    a &&
      (0 == this.Vb.length
        ? qp(this)
        : ((a = this.Vb.slice(0)),
          (this.Vb = []),
          B(a, function (a) {
            a();
          })));
  };
  var Z = function (a, b, c) {
    var d;
    if (b || !c || Ri(c))
      b && (d = a.xa(!0, c)),
        !c ||
          (b && !d) ||
          ((d = Fd(a.B)),
          (d.height +=
            (b ? 1 : -1) *
            (Ni(c).height + Xi(c, "margin").top + Xi(c, "margin").bottom)),
          op(a, d, !b)),
        b || a.xa(!1, c);
  };
  Y.prototype.xa = function (a, b) {
    if (Ri(b) == a) return !1;
    Qi(b, a);
    return !0;
  };
  var mp = function (a, b) {
      var c = M("rc-challenge-help", void 0),
        d = !Ri(c);
      if (null == b || b == d) {
        if (d) {
          a.Ma(c);
          if (!Zd(c)) return;
          Qi(c, !0);
          d = Ni(c).height;
          np(
            a,
            y(function () {
              (rc && yc("10")) || c.focus();
            }, a),
          );
        } else (d = -1 * Ni(c).height), Xd(c), Qi(c, !1);
        var e = Fd(a.B);
        e.height += d;
        op(a, e);
      }
    },
    kp = function (a, b, c, d, e, f, g) {
      b = new jp(b, c, void 0, a.A);
      d && Rk(b, d);
      e &&
        ((b.ga = e), (d = b.C())) &&
        (e ? (d.title = e) : d.removeAttribute("title"));
      f && ml(b, f);
      g && tl(b, 16, !0);
      Uk(a, b);
      return b;
    },
    lp = function (a, b) {
      a.Yc.va(b);
      a.M.va(b);
      a.Nb.va(b);
      a.xb.va(b);
      a.Vc.va(b);
      mp(a, !1);
    },
    rp = function (a, b, c) {
      var d = a.xb;
      b = b || "Verify";
      fl(d.C(), b);
      d.kb = b;
      Mh(a.xb.C(), "rc-button-red", !!c);
    },
    sp = function () {
      if (oc || pc) {
        var a = screen.availWidth;
        var b = screen.availHeight;
      } else
        kc || nc
          ? ((a = window.outerWidth || screen.availWidth || screen.width),
            (b = window.outerHeight || screen.availHeight || screen.height),
            Fc || (b -= 20))
          : ((a =
              window.outerWidth ||
              window.innerWidth ||
              document.body.clientWidth),
            (b =
              window.outerHeight ||
              window.innerHeight ||
              document.body.clientHeight));
      return new L(a || 0, b || 0);
    };
  Y.prototype.gb = function () {
    this.M.C().focus();
  };
  Y.prototype.Ca = h();
  var tp = function (a) {
    for (var b = a || ["rc-challenge-help"], c = 0; c < b.length; c++)
      if ((a = M(b[c])) && Ri(a) && Ri(ce(a))) {
        (b =
          "A" == a.tagName ||
          "INPUT" == a.tagName ||
          "TEXTAREA" == a.tagName ||
          "SELECT" == a.tagName ||
          "BUTTON" == a.tagName
            ? !a.disabled && (!le(a) || me(a))
            : le(a) && me(a)) &&
          D &&
          ((b = void 0),
          (c = a),
          !w(c.getBoundingClientRect) || (D && null == c.parentElement)
            ? (b = { height: c.offsetHeight, width: c.offsetWidth })
            : (b = c.getBoundingClientRect()),
          (b = null != b && 0 < b.height && 0 < b.width));
        b ? a.focus() : ae(a).focus();
        break;
      }
  };
  Y.prototype.Ma = h();
  var up = function (a, b) {
    Al.call(this, r(a) ? a : "Type the text", b);
  };
  A(up, Al);
  up.prototype.W = function () {
    up.I.W.call(this);
    this.C().setAttribute("id", Qk(this));
    this.C().setAttribute("autocomplete", "off");
    this.C().setAttribute("autocorrect", "off");
    this.C().setAttribute("autocapitalize", "off");
    this.C().setAttribute("spellcheck", "false");
    this.C().setAttribute("dir", "ltr");
    Ih(this.C(), "rc-response-input-field");
  };
  var vp = function (a, b) {
    Mh(a.C(), "rc-response-input-field-error", b);
  };
  var wp = new L(280, 275),
    xp = new L(280, 235),
    yp = function () {
      kc || nc || pc || oc
        ? Y.call(this, xp.width, xp.height, "audio", !0)
        : Y.call(this, wp.width, wp.height, "audio", !0);
      this.P = kc || nc || pc || oc;
      this.D = this.ca = null;
      this.o = new up("");
      Rk(this.o, "audio-response");
      te(this, this.o);
      this.ia = new ei();
      te(this, this.ia);
      this.V = this.l = null;
    };
  Ba(yp, Y);
  yp.prototype.W = function () {
    Y.prototype.W.call(this);
    this.N = Ik(ep, { ze: "audio-instructions" });
    this.$(this.C());
  };
  yp.prototype.X = function () {
    Y.prototype.X.call(this);
    this.ca = this.O("rc-audiochallenge-control");
    this.o.render(this.O("rc-audiochallenge-response-field"));
    var a = this.o.C();
    R(
      R(
        R(S(this), M("rc-audiochallenge-tabloop-begin"), "focus", function () {
          tp();
        }),
        M("rc-audiochallenge-tabloop-end"),
        "focus",
        function () {
          tp([
            "rc-audiochallenge-error-message",
            "rc-audiochallenge-play-button",
          ]);
        },
      ),
      a,
      "keydown",
      function (a) {
        a.ctrlKey &&
          17 == a.keyCode &&
          ((this.l.currentTime = 0),
          this.l.load(),
          1 == this.V && zp(this),
          this.l.play());
      },
    );
    this.D = this.O("rc-audiochallenge-error-message");
    di(this.ia, document);
    R(S(this), this.ia, "key", this.Ja);
  };
  yp.prototype.ga = function (a) {
    Y.prototype.ga.call(this, a);
    !a && this.l && this.l.pause();
  };
  yp.prototype.qa = function () {
    this.l &&
      (this.l.paused ||
      0 >= this.l.currentTime ||
      this.l.ended ||
      2 >= this.l.readyState
        ? (rc || (Hl(this.o) ? this.o.C().focus() : Il(this.o)),
          (this.l.currentTime = 0),
          this.l.load(),
          1 == this.V && zp(this),
          this.l.play())
        : this.l.pause());
  };
  var zp = function (a) {
    var b = gm.Ga().get();
    b = I(b, 6);
    b = +(null == b ? 1 : b);
    a.l.playbackRate = b;
    1 > b && (a.l.currentTime = 1 / b - 1);
  };
  yp.prototype.Ja = function (a) {
    if (13 == a.keyCode) this.Jb();
    else if (this.P) Ap(this) && Z(this, !1);
    else if (Oh(a.keyCode) && !a.A && 0 == this.V) {
      if (82 == a.keyCode) this.qa();
      else {
        var b;
        (b = 32 == a.keyCode) ||
          ((b = a.keyCode),
          (b = (48 <= b && 57 >= b) || (96 <= b && 105 >= b)));
        if (b) {
          Ap(this) && Z(this, !1);
          return;
        }
      }
      a.preventDefault();
    }
  };
  yp.prototype.Ea = function () {
    this.l && this.l.pause();
    return /^[\s\xa0]*$/.test(Hl(this.o))
      ? (Jd(document, "audio-instructions").focus(), !0)
      : !1;
  };
  yp.prototype.ra = function (a, b, c) {
    Z(this, !!c);
    Gl(this.o);
    Jl(this.o, !0);
    this.P ||
      Fk(this.O("rc-audiochallenge-tdownload"), hp, {
        $c: this.Ua(a, void 0, "/audio.mp3"),
      });
    if (document.createElement("audio").play) {
      b && K(b, Rn, 8) && (this.V = I(K(b, Rn, 8), 1));
      b = this.O("rc-audiochallenge-instructions");
      c = 1 == this.V;
      var d = this.o,
        e = !c;
      oc || pc
        ? e
          ? d.C().setAttribute("pattern", "[0-9]*")
          : d.C().removeAttribute("pattern")
        : (kc || nc || pc || oc) &&
          (e
            ? d.C().setAttribute("type", "number")
            : d.C().setAttribute("type", "text"));
      fe(
        b,
        c
          ? "Press PLAY and enter the words you hear"
          : "Press PLAY and enter the numbers you hear",
      );
      this.P ||
        fe(Jd(document, "rc-response-label"), "Press CTRL to play again.");
      a = this.Ua(a, "");
      Fk(this.ca, fp, { $c: a });
      this.l = Jd(document, "audio-source");
      a = this.O("rc-audiochallenge-play-button");
      b = kp(this, void 0, "PLAY", void 0, void 0, void 0, void 0);
      te(this, b);
      b.render(a);
      re(b.C(), "labelledby", ["audio-instructions", "rc-response-label"]);
      R(S(this), b, "action", this.qa);
    } else Fk(this.ca, gp);
    return Nf();
  };
  yp.prototype.xa = function (a, b) {
    if (b) {
      var c = Ap(this);
      Qi(this.D, a);
      vp(this.o, a);
      Xd(this.D);
      a &&
        fe(this.D, "Multiple correct solutions required - please solve more.");
      return a != c;
    }
    Z(this, a, this.D);
    return !1;
  };
  var Ap = function (a) {
    return !!a.D && 0 < oe(a.D).length;
  };
  yp.prototype.gb = function () {
    var a;
    !(a = !Ap(this)) && (a = rc) && (a = 0 <= Ib(bj, 10));
    a
      ? M("rc-audiochallenge-play-button", void 0).children[0].focus()
      : this.D.focus();
  };
  yp.prototype.Ca = function () {
    this.response.response = Hl(this.o);
    Jl(this.o, !1);
  };
  yp.prototype.Ma = function (a) {
    Fk(a, ip, { Be: this.P });
  };
  var Bp = function (a) {
      return U(
        '<div id="rc-canvas"><canvas class="rc-canvas-canvas"></canvas><img class="rc-canvas-image" src="' +
          W(Yl(a.hc)) +
          '"></div>',
      );
    },
    Cp = function () {
      return U(
        'Draw a box around the object by clicking on its corners as in the animation  above. If not clear, or to get a new challenge, reload the challenge.<a href="https://support.google.com/recaptcha" target="_blank">Learn more.</a>',
      );
    },
    Dp = function (a) {
      var b = '<div class="' + W("rc-imageselect-desc-no-canonical") + '">';
      a = a.label;
      switch (x(a) ? a.toString() : a) {
        case "TileSelectionStreetSign":
          b += "Tap the center of the <strong>street signs</strong>";
          break;
        case "/m/0k4j":
          b += "Tap the center of the <strong>cars</strong>";
          break;
        case "/m/04w67_":
          b += "Tap the center of the <strong>mail boxes</strong>";
      }
      return U(b + "</div>");
    },
    Ep = function () {
      return U(
        'Tap the center of the objects in the image according to the instructions above.  If not clear, or to get a new challenge, reload the challenge.<a href="https://support.google.com/recaptcha" target="_blank">Learn more.</a>',
      );
    };
  var Fp = function (a) {
    var b = "",
      c = a.label;
    switch (x(c) ? c.toString() : c) {
      case "stop_sign":
        b +=
          '<div id="rc-imageselect-candidate" class="' +
          W("rc-imageselect-candidates") +
          '"><div class="' +
          W("rc-canonical-stop-sign") +
          '"></div></div><div class="rc-imageselect-desc">';
        break;
      case "vehicle":
      case "/m/07yv9":
      case "/m/0k4j":
        b +=
          '<div id="rc-imageselect-candidate" class="' +
          W("rc-imageselect-candidates") +
          '"><div class="' +
          W("rc-canonical-car") +
          '"></div></div><div class="rc-imageselect-desc">';
        break;
      case "road":
        b +=
          '<div id="rc-imageselect-candidate" class="' +
          W("rc-imageselect-candidates") +
          '"><div class="' +
          W("rc-canonical-road") +
          '"></div></div><div class="rc-imageselect-desc">';
        break;
      case "/m/015kr":
        b +=
          '<div id="rc-imageselect-candidate" class="' +
          W("rc-imageselect-candidates") +
          '"><div class="' +
          W("rc-canonical-bridge") +
          '"></div></div><div class="rc-imageselect-desc">';
        break;
      default:
        b += '<div class="rc-imageselect-desc-no-canonical">';
    }
    c = "";
    var d = a.fb;
    switch (x(d) ? d.toString() : d) {
      case "tileselect":
      case "multicaptcha":
        d = "";
        var e = a.label;
        switch (x(e) ? e.toString() : e) {
          case "Turkeys":
            d += "Select all squares with <strong>Turkeys</strong>";
            break;
          case "GiftBoxes":
            d += "Select all squares with <strong>gift boxes</strong>";
            break;
          case "Fireworks":
            d += "Select all squares with <strong>fireworks</strong>";
            break;
          case "TileSelectionStreetSign":
          case "/m/01mqdt":
            d += "Select all squares with <strong>street signs</strong>";
            break;
          case "TileSelectionBizView":
            d += "Select all squares with <strong>business names</strong>";
            break;
          case "stop_sign":
          case "/m/02pv19":
            d += "Select all squares with <strong>stop signs</strong>";
            break;
          case "sidewalk":
          case "footpath":
            d += "Select all squares with a <strong>sidewalk</strong>";
            break;
          case "vehicle":
          case "/m/07yv9":
          case "/m/0k4j":
            d += "Select all squares with <strong>vehicles</strong>";
            break;
          case "road":
          case "/m/06gfj":
            d += "Select all squares with <strong>roads</strong>";
            break;
          case "house":
          case "/m/03jm5":
            d += "Select all squares with <strong>houses</strong>";
            break;
          case "/m/015kr":
            d += "Select all squares with <strong>bridges</strong>";
            break;
          case "apparel_and_fashion":
            d += "Select all squares with <strong>clothing</strong>";
            break;
          case "bag":
            d += "Select all squares with <strong>bags</strong>";
            break;
          case "dress":
            d += "Select all squares with <strong>dresses</strong>";
            break;
          case "eye_glasses":
            d += "Select all squares with <strong>eye glasses</strong>";
            break;
          case "hat":
            d += "Select all squares with <strong>hats</strong>";
            break;
          case "pants":
            d += "Select all squares with <strong>pants</strong>";
            break;
          case "shirt":
            d += "Select all squares with <strong>shirts</strong>";
            break;
          case "shoe":
            d += "Select all squares with <strong>shoes</strong>";
            break;
          case "/m/0cdl1":
            d += "Select all squares with <strong>palm trees</strong>";
            break;
          case "/m/014xcs":
            d += "Select all squares with <strong>crosswalks</strong>";
            break;
          case "/m/015qff":
            d += "Select all squares with <strong>traffic lights</strong>";
            break;
          case "/m/01pns0":
            d += "Select all squares with <strong>fire hydrants</strong>";
            break;
          case "/m/01bjv":
            d += "Select all squares with <strong>buses</strong>";
            break;
          case "USER_DEFINED_STRONGLABEL":
            d +=
              "Select all squares that match the label: <strong>" +
              V(a.Ab) +
              "</strong>";
            break;
          default:
            d += "Select all images below that match the one on the right";
        }
        Ml(a.fb, "multicaptcha") &&
          (d +=
            '<span class="rc-imageselect-carousel-instructions">If there are none, click skip.</span>');
        a = U(d);
        c += a;
        break;
      default:
        d = "";
        e = a.label;
        switch (x(e) ? e.toString() : e) {
          case "romantic":
            d +=
              "Select all images that feel <strong>romantic for dining</strong>.";
            break;
          case "outdoor_seating_area":
            d +=
              "Select all images with <strong>outdoor seating areas</strong>.";
            break;
          case "indoor_seating_area":
            d +=
              "Select all images with <strong>indoor seating areas</strong>.";
            break;
          case "streetname":
          case "1000E_sign_type_US_street_name":
          case "/m/04jph85":
            d += "Select all images with <strong>street names</strong>.";
            break;
          case "1000E_sign_type_US_no_left_turn":
            d += "Select all images with <strong>no-left-turn signs</strong>.";
            break;
          case "1000E_sign_type_US_no_right_turn":
            d += "Select all images with <strong>no-right-turn signs</strong>.";
            break;
          case "1000E_sign_type_US_stop":
          case "/m/02pv19":
            d += "Select all images with <strong>stop signs</strong>.";
            break;
          case "1000E_sign_type_US_speed_limit":
            d += "Select all images with <strong>speed limit signs</strong>.";
            break;
          case "signs":
          case "/m/01mqdt":
            d += "Select all images with <strong>street signs</strong>.";
            break;
          case "street_num":
            d += "Select all images with <strong>street numbers</strong>.";
            break;
          case "ImageSelectStoreFront":
          case "storefront":
          case "ImageSelectBizFront":
          case "ImageSelectStoreFront_inconsistent":
            d += "Select all images with a <strong>store front</strong>.";
            break;
          case "sidewalk":
          case "footpath":
            d += "Select all images with a <strong>sidewalk</strong>.";
            break;
          case "gcid:atm":
            d += "Select all images with an <strong>atm</strong>.";
            break;
          case "gcid:auto_parts_store":
            d += "Select all images with an <strong>auto parts store</strong>.";
            break;
          case "gcid:auto_repair_shop":
            d += "Select all images with an <strong>auto repair shop</strong>.";
            break;
          case "gcid:bakery":
            d += "Select all images with a <strong>bakery</strong>.";
            break;
          case "gcid:bank":
            d += "Select all images with a <strong>bank</strong>.";
            break;
          case "gcid:bar":
            d += "Select all images with a <strong>bar</strong>.";
            break;
          case "gcid:beauty_salon":
            d += "Select all images with a <strong>beauty salon</strong>.";
            break;
          case "gcid:cafe":
            d += "Select all images with a <strong>cafe</strong>.";
            break;
          case "gcid:car_dealer":
            d += "Select all images with a <strong>car dealer</strong>.";
            break;
          case "gcid:cell_phone_store":
            d += "Select all images with a <strong>cell phone store</strong>.";
            break;
          case "gcid:clothing_store":
            d += "Select all images with a <strong>clothing store</strong>.";
            break;
          case "gcid:convenience_store":
            d += "Select all images with a <strong>convenience store</strong>.";
            break;
          case "gcid:department_store":
            d += "Select all images with a <strong>department store</strong>.";
            break;
          case "gcid:furniture_store":
            d += "Select all images with a <strong>furniture store</strong>.";
            break;
          case "gcid:gas_station":
          case "gas_station":
            d += "Select all images with a <strong>gas station</strong>.";
            break;
          case "gcid:grocery_store":
            d += "Select all images with a <strong>grocery store</strong>.";
            break;
          case "gcid:hair_salon":
            d += "Select all images with a <strong>hair salon</strong>.";
            break;
          case "gcid:hotel":
            d += "Select all images with a <strong>hotel</strong>.";
            break;
          case "gcid:pharmacy":
            d += "Select all images with a <strong>pharmacy</strong>.";
            break;
          case "gcid:real_estate_agency":
            d +=
              "Select all images with a <strong>real estate agency</strong>.";
            break;
          case "gcid:restaurant":
            d += "Select all images with a <strong>restaurant</strong>.";
            break;
          case "gcid:shoe_store":
            d += "Select all images with a <strong>shoe store</strong>.";
            break;
          case "gcid:shopping_center":
            d += "Select all images with a <strong>shopping center</strong>.";
            break;
          case "gcid:supermarket":
            d += "Select all images with a <strong>supermarket</strong>.";
            break;
          case "gcid:tire_shop":
            d += "Select all images with a <strong>tire shop</strong>.";
            break;
          case "/m/02wbm":
          case "food":
            d += "Select all the <strong>food</strong>.";
            break;
          case "/m/0270h":
            d += "Select all the <strong>desserts</strong>.";
            break;
          case "/m/0hz4q":
            d +=
              "Select all images that contain something you would eat for breakfast.";
            break;
          case "/m/0fszt":
            d += "Select all images with <strong>cakes</strong>.";
            break;
          case "/m/03p1r4":
            d += "Select all images with <strong>cup cakes</strong>.";
            break;
          case "/m/022p83":
            d += "Select all images with <strong>wedding cakes</strong>.";
            break;
          case "/m/02czv8":
            d += "Select all images with <strong>birthday cakes</strong>.";
            break;
          case "/m/09728":
            d += "Select all images with <strong>bread</strong>.";
            break;
          case "/m/0l515":
            d += "Select all images with <strong>sandwiches</strong>.";
            break;
          case "/m/0cdn1":
            d += "Select all images with <strong>hamburgers</strong>.";
            break;
          case "/m/01j3zr":
            d += "Select all images with <strong>burritos</strong>.";
            break;
          case "/m/07pbfj":
            d += "Select all images with <strong>fish</strong>.";
            break;
          case "/m/0cxn2":
            d += "Select all images with <strong>ice cream</strong>.";
            break;
          case "/m/05z55":
            d += "Select all images with <strong>pasta or noodles</strong>.";
            break;
          case "/m/0grtl":
            d += "Select all images with <strong>steak</strong>.";
            break;
          case "/m/0663v":
          case "pizza":
            d += "Select all images with <strong>pizza</strong>.";
            break;
          case "/m/01z1m1x":
            d += "Select all images with <strong>soup</strong>.";
            break;
          case "/m/07030":
          case "sushi":
            d += "Select all images with <strong>sushi</strong>.";
            break;
          case "/m/09759":
            d += "Select all images with <strong>rice</strong>.";
            break;
          case "/m/02y6n":
            d += "Select all images with <strong>french fries</strong>.";
            break;
          case "/m/0mjqn":
            d += "Select all images with <strong>pies</strong>.";
            break;
          case "/m/0jy4k":
            d += "Select all images with <strong>doughnuts</strong>.";
            break;
          case "/m/033cnk":
            d += "Select all images with <strong>eggs</strong>.";
            break;
          case "/m/0gm28":
            d += "Select all images with <strong>candy</strong>.";
            break;
          case "/m/0grw1":
            d += "Select all images with <strong>salad</strong>.";
            break;
          case "/m/0pmbh":
            d += "Select all images with <strong>dim sum</strong>.";
            break;
          case "/m/021mn":
            d += "Select all images with <strong>cookies</strong>.";
            break;
          case "/m/01dwwc":
            d += "Select all images with <strong>pancakes</strong>.";
            break;
          case "/m/01dwsz":
            d += "Select all images with <strong>waffles</strong>.";
            break;
          case "/m/0fbw6":
            d += "Select all images with <strong>cabbage</strong>.";
            break;
          case "/m/09qck":
            d += "Select all images with <strong>bananas</strong>.";
            break;
          case "/m/047v4b":
            d += "Select all images with <strong>artichokes</strong>.";
            break;
          case "/m/01b9xk":
            d += "Select all images with <strong>hot dogs</strong>.";
            break;
          case "/m/0h0xm":
            d += "Select all images with <strong>bacon</strong>.";
            break;
          case "/m/0cyhj_":
            d += "Select all images with an <strong>Orange</strong>.";
            break;
          case "/m/0fg0m":
            d += "Select all images with <strong>peanuts</strong>.";
            break;
          case "/m/04rx8j":
            d += "Select all images with <strong>fruit salad</strong>.";
            break;
          case "/m/01hrv5":
            d += "Select all images with <strong>popcorn</strong>.";
            break;
          case "/m/05zsy":
            d += "Select all images with <strong>pumpkins</strong>.";
            break;
          case "/m/0271t":
            d += "Select all the <strong>drinks</strong>.";
            break;
          case "/m/01599":
            d += "Select all images with <strong>beer</strong>.";
            break;
          case "/m/081qc":
            d += "Select all images with <strong>wine</strong>.";
            break;
          case "/m/02vqfm":
          case "coffee":
            d += "Select all images with <strong>coffee</strong>.";
            break;
          case "/m/07clx":
          case "tea":
            d += "Select all images with <strong>tea</strong>.";
            break;
          case "/m/01z1kdw":
            d += "Select all images with <strong>juice</strong>.";
            break;
          case "/m/01k17j":
            d += "Select all images with a <strong>milkshake</strong>.";
            break;
          case "/m/05s2s":
            d += "Select all images with <strong>plants</strong>.";
            break;
          case "/m/0c9ph5":
            d += "Select all images with <strong>flowers</strong>.";
            break;
          case "/m/07j7r":
            d += "Select all images with <strong>trees</strong>.";
            break;
          case "/m/08t9c_":
            d += "Select all images with <strong>grass</strong>.";
            break;
          case "/m/0gqbt":
            d += "Select all images with <strong>shrubs</strong>.";
            break;
          case "/m/025_v":
            d += "Select all images with a <strong>cactus</strong>.";
            break;
          case "/m/0cdl1":
            d += "Select all images with <strong>palm trees</strong>";
            break;
          case "/m/05h0n":
            d += "Select all images of <strong>nature</strong>.";
            break;
          case "/m/0j2kx":
            d += "Select all images with <strong>waterfalls</strong>.";
            break;
          case "/m/09d_r":
            d += "Select all images with <strong>mountains or hills</strong>.";
            break;
          case "/m/03ktm1":
            d +=
              "Select all images of <strong>bodies of water</strong> such as lakes or oceans.";
            break;
          case "/m/06cnp":
            d += "Select all images with <strong>rivers</strong>.";
            break;
          case "/m/0b3yr":
            d += "Select all images with <strong>beaches</strong>.";
            break;
          case "/m/06m_p":
            d += "Select all images of <strong>the Sun</strong>.";
            break;
          case "/m/04wv_":
            d += "Select all images with <strong>the Moon</strong>.";
            break;
          case "/m/01bqvp":
            d += "Select all images of <strong>the sky</strong>.";
            break;
          case "/m/07yv9":
            d += "Select all images with <strong>vehicles</strong>";
            break;
          case "/m/0k4j":
            d += "Select all images with <strong>cars</strong>";
            break;
          case "/m/0199g":
            d += "Select all images with <strong>bicycles</strong>";
            break;
          case "/m/04_sv":
            d += "Select all images with <strong>motorcycles</strong>";
            break;
          case "/m/0cvq3":
            d += "Select all images with <strong>pickup trucks</strong>";
            break;
          case "/m/0fkwjg":
            d += "Select all images with <strong>commercial trucks</strong>";
            break;
          case "/m/019jd":
            d += "Select all images with <strong>boats</strong>";
            break;
          case "/m/0cmf2":
            d += "Select all images with <strong>airplanes</strong>";
            break;
          case "/m/01786t":
            d += "Select all images with a <strong>tricycle</strong>";
            break;
          case "/m/06_fw":
            d += "Select all images with a <strong>skateboard</strong>";
            break;
          case "/m/019w40":
            d += "Select all images with <strong>surfboards</strong>";
            break;
          case "/m/04fdw":
            d += "Select all images with <strong>kayaks</strong>";
            break;
          case "/m/03ylns":
            d += "Select all images with <strong>baby carriages</strong>";
            break;
          case "/m/0qmmr":
            d += "Select all images with <strong>wheelchairs</strong>";
            break;
          case "/m/09vl64":
            d += "Select all images with a <strong>bicycle trailer</strong>.";
            break;
          case "/m/01lcw4":
            d += "Select all images with <strong>limousines</strong>.";
            break;
          case "/m/0pg52":
            d += "Select all images with <strong>taxis</strong>.";
            break;
          case "/m/02yvhj":
            d += "Select all images with a <strong>school bus</strong>.";
            break;
          case "/m/01bjv":
            d += "Select all images with a <strong>bus</strong>.";
            break;
          case "/m/07jdr":
            d += "Select all images with <strong>trains</strong>.";
            break;
          case "/m/01lgkm":
            d +=
              "Select all images with a <strong>recreational vehicle (RV)</strong>.";
            break;
          case "m/0323sq":
            d += "Select all images with a <strong>golf cart</strong>.";
            break;
          case "/m/02gx17":
            d +=
              "Select all images with a <strong>construction vehicle</strong>.";
            break;
          case "/m/0b_rs":
            d += "Select all images with a <strong>swimming pool</strong>";
            break;
          case "/m/01h_1n":
            d += "Select all images with a <strong>playground</strong>";
            break;
          case "/m/010jjr":
            d += "Select all images with an <strong>amusement park</strong>";
            break;
          case "/m/01wt5r":
            d += "Select all images with a <strong>water park</strong>";
            break;
          case "pool_indoor":
            d += "Select all images with an <strong>indoor pool</strong>.";
            break;
          case "pool_outdoor":
            d += "Select all images with an <strong>outdoor pool</strong>.";
            break;
          case "/m/065h6l":
            d += "Select all images with a <strong>hot tub</strong>.";
            break;
          case "/m/0hnnb":
            d += "Select all images with a <strong>sun umbrella</strong>.";
            break;
          case "/m/056zd5":
            d += "Select all images with <strong>pool chairs</strong>.";
            break;
          case "/m/04p0xr":
            d += "Select all images with a <strong>pool table</strong>.";
            break;
          case "/m/02p8qh":
            d += "Select all images with a <strong>patio</strong>.";
            break;
          case "/m/07gcy":
            d += "Select all images with a <strong>tennis court</strong>.";
            break;
          case "/m/019cfy":
            d += "Select all images with a <strong>stadium</strong>.";
            break;
          case "/m/03d2wd":
            d += "Select all images with a <strong>dining room</strong>.";
            break;
          case "/m/039l3v":
            d += "Select all images with an <strong>auditorium</strong>.";
            break;
          case "/m/07cwnp":
            d += "Select all images with <strong>picnic tables</strong>.";
            break;
          case "/m/0c06p":
            d += "Select all images with <strong>candles</strong>.";
            break;
          case "/m/06vwgw":
            d += "Select all images with a <strong>high chair</strong>.";
            break;
          case "/m/01m3v":
            d += "Select all images with <strong>computers</strong>.";
            break;
          case "/m/07c52":
            d += "Select all images with <strong>televisions</strong>.";
            break;
          case "/m/07cx4":
            d += "Select all images with <strong>telephones</strong>.";
            break;
          case "/m/0n5v01m":
          case "bag":
            d += "Select all images with <strong>bags</strong>.";
            break;
          case "/m/0bt_c3":
            d += "Select all images with <strong>books</strong>.";
            break;
          case "/m/06rrc":
          case "shoe":
            d += "Select all images with <strong>shoes</strong>.";
            break;
          case "/m/0404d":
          case "jewelry":
            d += "Select all images with <strong>jewelry</strong>.";
            break;
          case "/m/0dv5r":
            d += "Select all images with <strong>cameras</strong>.";
            break;
          case "/m/0c_jw":
            d += "Select all images with <strong>furniture</strong>.";
            break;
          case "/m/01j51":
            d += "Select all images with <strong>balloons</strong>.";
            break;
          case "/m/05r5c":
            d += "Select all images with <strong>pianos</strong>.";
            break;
          case "/m/01n4qj":
          case "shirt":
            d += "Select all images with <strong>shirts</strong>.";
            break;
          case "/m/02crq1":
            d += "Select all images with <strong>sofas</strong>.";
            break;
          case "/m/03ssj5":
            d += "Select all images with <strong>beds</strong>.";
            break;
          case "/m/01y9k5":
            d += "Select all images with <strong>desks</strong>.";
            break;
          case "/m/01mzpv":
            d += "Select all images with <strong>chairs</strong>.";
            break;
          case "/m/01s105":
            d += "Select all images with <strong>cabinets</strong>.";
            break;
          case "/m/04bcr3":
            d += "Select all images with <strong>tables</strong>.";
            break;
          case "/m/09j2d":
          case "apparel_and_fashion":
            d += "Select all images with <strong>clothing</strong>.";
            break;
          case "/m/01xygc":
          case "coat":
            d += "Select all images with <strong>coats</strong>.";
            break;
          case "/m/07mhn":
          case "pants":
            d += "Select all images with <strong>pants</strong>.";
            break;
          case "shorts":
            d += "Select all images with <strong>shorts</strong>.";
            break;
          case "skirt":
            d += "Select all images with <strong>skirts</strong>.";
            break;
          case "sock":
            d += "Select all images with <strong>socks</strong>.";
            break;
          case "/m/01xyhv":
          case "suit":
            d += "Select all images with <strong>suits</strong>.";
            break;
          case "vest":
            d += "Select all images with <strong>vests</strong>.";
            break;
          case "dress":
            d += "Select all images with <strong>dresses</strong>.";
            break;
          case "wedding_dress":
            d += "Select all images with <strong>wedding dresses</strong>.";
            break;
          case "hat":
            d += "Select all images with <strong>hats</strong>.";
            break;
          case "watch":
            d += "Select all images with <strong>watches</strong>.";
            break;
          case "ring":
            d += "Select all images with <strong>rings</strong>.";
            break;
          case "earrings":
            d += "Select all images with <strong>earrings</strong>.";
            break;
          case "necklace":
            d += "Select all images with <strong>necklaces</strong>.";
            break;
          case "bracelet":
            d += "Select all images with <strong>bracelets</strong>.";
            break;
          case "sneakers":
            d += "Select all images with <strong>sneakers</strong>.";
            break;
          case "boot":
            d += "Select all images with <strong>boots</strong>.";
            break;
          case "sandal":
            d += "Select all images with <strong>sandals</strong>.";
            break;
          case "slipper":
            d += "Select all images with <strong>slippers</strong>.";
            break;
          case "hair_accessory":
            d += "Select all images with <strong>hair accessories</strong>.";
            break;
          case "handbag":
            d += "Select all images with <strong>handbags</strong>.";
            break;
          case "belt":
            d += "Select all images with <strong>belts</strong>.";
            break;
          case "wallet":
            d += "Select all images with <strong>wallets</strong>.";
            break;
          case "/m/0342h":
            d += "Select all images with <strong>guitars</strong>.";
            break;
          case "/m/04szw":
            d += "Select all images with <strong>musical instruments</strong>.";
            break;
          case "/m/05148p4":
            d +=
              "Select all images with <strong>keyboards</strong> (musical instrument).";
            break;
          case "/m/026t6":
            d += "Select all images with <strong>drums</strong>.";
            break;
          case "/m/0cfpc":
            d += "Select all images with <strong>music speakers</strong>.";
            break;
          case "/m/04w67_":
            d += "Select all images with a <strong>mail box</strong>.";
            break;
          case "/m/017ftj":
          case "sunglasses":
            d += "Select all images with <strong>sunglasses</strong>.";
            break;
          case "/m/0jyfg":
          case "eye_glasses":
            d += "Select all images with <strong>eye glasses</strong>.";
            break;
          case "/m/03ldnb":
            d += "Select all images with <strong>ceiling fans</strong>.";
            break;
          case "/m/013_1c":
            d += "Select all images with <strong>statues</strong>.";
            break;
          case "/m/0h8lhkg":
            d += "Select all images with <strong>fountains</strong>.";
            break;
          case "/m/015kr":
            d += "Select all images with <strong>bridges</strong>.";
            break;
          case "/m/01phq4":
            d += "Select all images with a <strong>pier</strong>.";
            break;
          case "/m/079cl":
            d += "Select all images with a <strong>skyscraper</strong>.";
            break;
          case "/m/01_m7":
            d += "Select all images with <strong>pillars or columns</strong>.";
            break;
          case "/m/011y23":
            d += "Select all images with <strong>stained glass</strong>.";
            break;
          case "/m/03jm5":
            d += "Select all images with <strong>a house</strong>.";
            break;
          case "/m/01nblt":
            d +=
              "Select all images with <strong>an apartment building</strong>.";
            break;
          case "/m/04h7h":
            d += "Select all images with <strong>a lighthouse</strong>.";
            break;
          case "/m/0py27":
            d += "Select all images with <strong>a train station</strong>.";
            break;
          case "/m/01n6fd":
            d += "Select all images with <strong>a shed</strong>.";
            break;
          case "/m/01pns0":
            d += "Select all images with <strong>a fire hydrant</strong>.";
            break;
          case "/m/01knjb":
          case "billboard":
            d += "Select all images with <strong>a billboard</strong>.";
            break;
          case "/m/06gfj":
            d += "Select all images with <strong>roads</strong>.";
            break;
          case "/m/014xcs":
            d += "Select all images with <strong>crosswalks</strong>.";
            break;
          case "/m/015qff":
            d += "Select all images with <strong>traffic lights</strong>.";
            break;
          case "/m/08l941":
            d += "Select all images with <strong>garage doors</strong>";
            break;
          case "/m/01jw_1":
            d += "Select all images with <strong>bus stops</strong>";
            break;
          case "/m/0cnd3h9":
            d += "Select all images with <strong>traffic cones</strong>";
            break;
          case "/m/03b6pr":
            d += "Select all images with <strong>mail boxes</strong>";
            break;
          default:
            (e =
              "Select all images that match the label: <strong>" +
              (V(a.Ab) + "</strong>.")),
              (d += e);
        }
        Ml(a.fb, "dynamic") &&
          (d += "<span>Click verify once there are none left.</span>");
        a = U(d);
        c += a;
    }
    a = U(c);
    return U(b + (a + "</div>"));
  };
  var Gp = function () {
      return U(
        '<div id="rc-imageselect"><div class="' +
          W("rc-imageselect-response-field") +
          '"></div><span class="' +
          W("rc-imageselect-tabloop-begin") +
          '" tabIndex="0"></span><div class="' +
          W("rc-imageselect-payload") +
          '"></div>' +
          V(dp()) +
          '<span class="' +
          W("rc-imageselect-tabloop-end") +
          '" tabIndex="0"></span></div>',
      );
    },
    Hp = function (a, b, c) {
      b = c || b;
      if (Ml(a.fb, "canvas")) {
        b =
          '<div id="rc-imageselect-candidate" class="' +
          W("rc-imageselect-candidates") +
          '"><div class="' +
          W("rc-canonical-bounding-box") +
          '"></div></div><div class="' +
          W("rc-imageselect-desc") +
          '">';
        c = a.label;
        switch (x(c) ? c.toString() : c) {
          case "TileSelectionStreetSign":
            b += "Select around the <strong>street signs</strong>";
            break;
          case "USER_DEFINED_STRONGLABEL":
            b += "Select around the <strong>" + V(a.Ab) + "s</strong>";
            break;
          default:
            b += "Select around the object";
        }
        a = U(b + "</div>");
        a = V(a);
      } else a = Ml(a.fb, "multiselect") ? V(Dp(a, b)) : V(Fp(a, b));
      a =
        '<div class="' +
        W("rc-imageselect-instructions") +
        '"><div class="' +
        W("rc-imageselect-desc-wrapper") +
        '">' +
        a +
        '</div><div class="' +
        W("rc-imageselect-progress") +
        '"></div></div><div class="' +
        W("rc-imageselect-challenge") +
        '"><div id="rc-imageselect-target" class="' +
        W("rc-imageselect-target") +
        '" dir="ltr" role="presentation" aria-hidden="true"></div></div><div class="' +
        W("rc-imageselect-incorrect-response") +
        '" style="display:none">';
      a =
        a +
        "Please try again." +
        ('</div><div class="' +
          W("rc-imageselect-error-select-more") +
          '" style="display:none">');
      a =
        a +
        "Please select all matching images." +
        ('</div><div class="' +
          W("rc-imageselect-error-dynamic-more") +
          '" style="display:none">');
      a =
        a +
        "Please also check the new images." +
        ('</div><div class="' +
          W("rc-imageselect-error-select-something") +
          '" style="display:none">');
      return U(
        a +
          "Please select around the object, or reload if there are none.</div>",
      );
    },
    Ip = function (a, b, c) {
      b = c || b;
      var d =
        '<table class="rc-imageselect-table-' +
        W(a.rowSpan) +
        W(a.colSpan) +
        '"><tbody>';
      c = Math.max(0, Math.ceil(a.rowSpan - 0));
      for (var e = 0; e < c; e++) {
        var f = 1 * e;
        d += "<tr>";
        for (var g = Math.max(0, Math.ceil(a.colSpan - 0)), l = 0; l < g; l++) {
          var m = 1 * l,
            t =
              '<td role="button" tabindex="0" class="' +
              W("rc-imageselect-tile") +
              '">',
            E = void 0;
          m = { Wd: f, vc: m };
          var H = a;
          for (E in H) E in m || (m[E] = H[E]);
          d += t + Gk(m, b) + "</td>";
        }
        d += "</tr>";
      }
      return U(d + "</tbody></table>");
    },
    Gk = function (a) {
      return U(
        '<div class="rc-image-tile-target"><div class="rc-image-tile-wrapper" style="width: ' +
          W($l(a.Tb)) +
          "; height: " +
          W($l(a.lc)) +
          '"><img class="rc-image-tile-' +
          W(a.rowSpan) +
          W(a.colSpan) +
          "\" src='" +
          W(Yl(a.hc)) +
          "' style=\"top:" +
          W($l(-100 * a.Wd)) +
          "%; left: " +
          W($l(-100 * a.vc)) +
          '%"><div class="rc-image-tile-overlay"></div></div><div class="rc-imageselect-checkbox"></div></div>',
      );
    },
    Jp = function (a) {
      var b =
        '<div class="rc-imageselect-followup-text">Select the type of the sign above.</div><table class="rc-imageselect-table-44 followup"><tbody><tr>';
      for (var c = a.ye, d = c.length, e = 0; e < d; e++) {
        var f = c[e];
        b +=
          '<td role="button" tabindex="0" class="' +
          W("rc-imageselect-tile") +
          '"><div class="rc-image-tile-target"><div class="rc-image-tile-wrapper" style="width: ' +
          W($l(a.Tb)) +
          "; height: " +
          W($l(a.lc)) +
          '"><img class="rc-image-followup-tile ' +
          W(f) +
          '" style="width: ' +
          W($l(a.Tb)) +
          "; height: " +
          W($l(a.lc)) +
          "; background-size: " +
          W($l(a.Tb)) +
          " " +
          W($l(a.lc)) +
          ';"><div class="rc-image-tile-overlay"></div></div><div class="rc-imageselect-checkbox"></div></div></td>';
      }
      return U(b + "</tr></tbody></table>");
    },
    Kp = function (a) {
      var b = "";
      if (0 < a.nd.length) {
        b += '<div class="' + W("rc-imageselect-attribution") + '">';
        b += "Images from ";
        for (var c = a.nd, d = c.length, e = 0; e < d; e++) {
          var f = c[e];
          b +=
            '<a target="_blank" href="' +
            W(Wl(f.pd)) +
            '"> ' +
            V(f.od) +
            "</a>" +
            (e != d - 1 ? "," : "") +
            " ";
        }
        b += "(CC BY)</div>";
      }
      b = Ml(a.Fe, "imageselect")
        ? b +
          'Select each image that contains the object described in the text or in the image at the top of the UI. Then click Verify. To get a new challenge, click the reload icon. <a href="https://support.google.com/recaptcha" target="_blank">Learn more.</a>'
        : b +
          "Tap on any tiles you see with the object described in the text. If new images appear with the same object, tap those as well. When there are none left, click Verify. ";
      return U(b);
    };
  var Lp = function (a) {
    var b = this.Da();
    Y.call(this, b.width, b.height, a || "imageselect");
    this.D = null;
    this.o = { Z: { ba: null, element: null } };
    this.Nd = 1;
    this.Xc = null;
    this.yc = [];
    this.tb = null;
  };
  A(Lp, Y);
  Lp.prototype.W = function () {
    Lp.I.W.call(this);
    this.N = Ik(Gp);
    this.$(this.C());
  };
  Lp.prototype.$ = function (a) {
    Lp.I.$.call(this, a);
    this.D = this.O("rc-imageselect-payload");
  };
  Lp.prototype.X = function () {
    Lp.I.X.call(this);
    R(S(this), M("rc-imageselect-tabloop-end", void 0), "focus", function () {
      tp(["rc-imageselect-tile"]);
    });
    R(S(this), M("rc-imageselect-tabloop-begin", void 0), "focus", function () {
      tp(["verify-button-holder"]);
    });
  };
  Lp.prototype.ra = function (a, b, c) {
    this.tb = b;
    b = K(this.tb, go, 1);
    this.yc = [];
    for (var d = 0; d < Tc(b, co, 8).length; d++) {
      var e = Tc(b, co, 8)[d];
      this.yc.push({ od: I(e, 1), pd: I(e, 2) });
    }
    this.Xc = I(b, 1);
    this.Nd = I(b, 3) || 1;
    d = "image/png";
    1 == I(b, 6) && (d = "image/jpeg");
    e = I(b, 7);
    null != e && (e = e.toLowerCase());
    Fk(this.D, Hp, {
      label: this.Xc,
      wi: I(b, 2),
      xi: d,
      fb: this.getName(),
      Ab: e,
    });
    this.D.innerHTML = this.D.innerHTML.replace(".", "");
    this.o.Z.element = document.getElementById("rc-imageselect-target");
    op(this, this.Da(), !0);
    Mp(this);
    return dn(this.ub(this.Ua(a))).then(
      y(function () {
        c && Z(this, !0, M("rc-imageselect-incorrect-response", void 0));
      }, this),
    );
  };
  var Mp = function (a) {
    var b = M("rc-imageselect-desc", a.D),
      c = M("rc-imageselect-desc-no-canonical", a.D);
    if ((c = b ? b : c)) {
      var d = Kd("STRONG", c),
        e = Kd("SPAN", c),
        f = M("rc-imageselect-desc-wrapper", a.D),
        g = Fd(a.B).width - 2 * Xi(f, "padding").left;
      b && ((a = M("rc-imageselect-candidates", a.D)), (g -= Ni(a).width));
      a = Ni(f).height - 2 * Xi(f, "padding").top + 2 * Xi(c, "padding").top;
      c.style.width = Ki(g);
      for (g = 0; g < d.length; g++) en(d[g], -1);
      for (g = 0; g < e.length; g++) en(e[g], -1);
      en(c, a);
    }
  };
  Lp.prototype.ub = function (a) {
    var b = I(K(this.tb, go, 1), 4),
      c = I(K(this.tb, go, 1), 5);
    Kh(this.o.Z.element, "rc-imageselect-table-shrink");
    var d = Np(this, b, c);
    d.hc = a;
    a = Ik(Ip, d);
    Wd(this.O("rc-imageselect-target"), a);
    var e = [];
    B(
      Ld(document, "td", null, a),
      function (a) {
        var b = { selected: !1, element: a, tc: !1 };
        e.push(b);
        R(S(this), new km(a), "action", y(this.V, this, b));
      },
      this,
    );
    var f = Ld(document, "td", "rc-imageselect-tile", void 0);
    B(
      f,
      function (a) {
        R(S(this), a, ["focus", "blur"], y(this.Qd, this));
      },
      this,
    );
    B(
      f,
      function (a) {
        R(S(this), a, "keydown", y(this.Uc, this, c));
      },
      this,
    );
    f = Jd(document, "rc-imageselect");
    gf(f) || Ye(f, "keydown", y(this.Uc, this, c));
    var g = [];
    "tileselect" == this.getName() &&
      "TileSelectionStreetSign" == this.Xc &&
      jm("JS_TILESELECT_CLASS") &&
      ((d.ye = [
        "rc-canonical-stop-sign",
        "rc-canonical-speed-limit",
        "rc-canonical-street-name",
        "rc-canonical-other",
      ]),
      (d = Ik(Jp, d)),
      Wd(this.O("rc-imageselect-target"), d),
      B(
        Ld(document, "td", null, d),
        function (a) {
          var b = { selected: !1, element: a, tc: !0 };
          g.push(b);
          R(S(this), new km(a), "action", y(this.V, this, b));
          R(S(this), a, "keydown", y(this.Uc, this, c));
          R(S(this), a, ["focus", "blur"], y(this.Qd, this));
        },
        this,
      ));
    this.o.Z.ba = { rowSpan: b, colSpan: c, Na: e, rb: 0, Rb: g };
    return a;
  };
  Lp.prototype.Qd = function () {
    this.Se &&
      ((this.Ib = void 0),
      B(
        ab("rc-imageselect-tile"),
        function (a, b) {
          a != qe(document)
            ? Kh(a, "rc-imageselect-keyboard")
            : ((this.Ib = b), Ih(a, "rc-imageselect-keyboard"));
        },
        this,
      ));
  };
  Lp.prototype.Uc = function (a, b) {
    if (
      37 == b.keyCode ||
      39 == b.keyCode ||
      38 == b.keyCode ||
      40 == b.keyCode ||
      9 == b.keyCode
    )
      if (((this.Se = !0), 9 != b.keyCode)) {
        var c = [];
        B(Kd("TABLE"), function (a) {
          "none" !== Fi(a, "display") &&
            B(ab("rc-imageselect-tile", a), function (a) {
              c.push(a);
            });
        });
        var d = c.length - 1;
        if (0 <= this.Ib && c[this.Ib] == qe(document))
          switch (((d = this.Ib), b.keyCode)) {
            case 37:
              d--;
              break;
            case 38:
              d -= a;
              break;
            case 39:
              d++;
              break;
            case 40:
              d += a;
              break;
            default:
              return;
          }
        0 <= d && d < c.length
          ? c[d].focus()
          : d >= c.length && Jd(document, "recaptcha-verify-button").focus();
        b.preventDefault();
        b.o();
      }
  };
  var Np = function (a, b, c) {
    a = Fd(a.B).width - 14;
    var d = 4 == b && 4 == c ? 1 : 2;
    d = new L((c - 1) * d * 2, (b - 1) * d * 2);
    a = new L(a - d.width, a - d.height);
    d = 1 / c;
    var e = 1 / b;
    e = Da(e) ? e : d;
    a.width *= d;
    a.height *= e;
    a.floor();
    return { lc: a.height + "px", Tb: a.width + "px", rowSpan: b, colSpan: c };
  };
  Lp.prototype.V = function (a) {
    Z(this, !1);
    var b = !a.selected;
    if (a.tc) {
      a.selected = !1;
      for (var c = Op(this), d = 0; d < c.length; d++)
        this.V(this.o.Z.ba.Rb[c[d]]);
    }
    b
      ? Ih(a.element, "rc-imageselect-tileselected")
      : Kh(a.element, "rc-imageselect-tileselected");
    a.selected = b;
    a.tc || (this.o.Z.ba.rb += b ? 1 : -1);
    a = M("rc-imageselect-checkbox", a.element);
    Qi(a, b);
  };
  Lp.prototype.Ca = function () {
    this.response.response = Pp(this);
    var a = Op(this);
    a.length
      ? (this.response.plugin = "class" + a[0])
      : 0 < this.o.Z.ba.Rb.length && (this.response.plugin = "class");
  };
  var Pp = function (a) {
      var b = [];
      B(a.o.Z.ba.Na, function (a, d) {
        a.selected && b.push(d);
      });
      return b;
    },
    Op = function (a) {
      var b = [];
      B(a.o.Z.ba.Rb, function (a, d) {
        a.selected && b.push(d);
      });
      return b;
    };
  n = Lp.prototype;
  n.Ma = function (a) {
    Fk(a, Kp, { Fe: this.getName(), nd: this.yc });
  };
  n.Ea = function () {
    var a = this.o.Z.ba.rb;
    if (0 == a || a < this.Nd)
      return Z(this, !0, M("rc-imageselect-error-select-more", void 0)), !0;
    if (this.o.Z.ba.Rb.length) {
      if (Hh(this.o.Z.element, "rc-imageselect-table-shrink")) return !1;
      Ih(this.o.Z.element, "rc-imageselect-table-shrink");
      return !0;
    }
    return !1;
  };
  n.xa = function (a, b) {
    var c = [
      "rc-imageselect-error-select-more",
      "rc-imageselect-incorrect-response",
      "rc-imageselect-error-dynamic-more",
    ];
    (!a && b) ||
      B(
        c,
        function (a) {
          a = M(a, void 0);
          a != b && Z(this, !1, a);
        },
        this,
      );
    return b ? Lp.I.xa.call(this, a, b) : !1;
  };
  n.Da = function () {
    var a = this.Y || sp();
    a = Math.max(Math.min(a.height - 194, 400, a.width), 300);
    return new L(a, 180 + a);
  };
  n.gb = function () {
    this.M.C() && this.M.C().focus();
  };
  var Qp = function (a, b) {
    Ci(
      M("rc-imageselect-progress", void 0),
      "width",
      100 - (a / b) * 100 + "%",
    );
  };
  var Rp = function (a) {
    Lp.call(this, a);
    this.l = [[]];
    this.P = 1;
  };
  Ba(Rp, Lp);
  Rp.prototype.ub = function (a) {
    this.l = [[]];
    a = Ik(Bp, { hc: a });
    Wd(M("rc-imageselect-target", void 0), a);
    var b = M("rc-canvas-canvas", void 0);
    b.width = Fd(this.B).width - 14;
    b.height = b.width;
    a.style.height = Ki(b.height);
    this.P = b.width / 386;
    var c = b.getContext("2d"),
      d = M("rc-canvas-image", void 0);
    Ye(d, "load", function () {
      c.drawImage(d, 0, 0, b.width, b.height);
    });
    R(
      S(this),
      new km(b),
      "action",
      y(function (a) {
        this.Db(a);
      }, this),
    );
    return a;
  };
  Rp.prototype.Db = function () {
    Z(this, !1);
    Qi(this.wb.C(), !0);
  };
  Rp.prototype.Ca = function () {
    for (var a = [], b = 0; b < this.l.length; b++) {
      for (var c = [], d = 0; d < this.l[b].length; d++) {
        var e = this.l[b][d];
        e = Ed(new Dd(e.K, e.J), 1 / this.P).round();
        c.push({ x: e.K, y: e.J });
      }
      a.push(c);
    }
    this.response.response = a;
  };
  function Sp(a, b) {
    var c = b.J - a.J,
      d = a.K - b.K;
    return [c, d, c * a.K + d * a.J];
  }
  function Tp(a, b) {
    return 1e-5 >= Math.abs(a.K - b.K) && 1e-5 >= Math.abs(a.J - b.J);
  }
  var Up = function () {
    Rp.call(this, "canvas");
  };
  Ba(Up, Rp);
  n = Up.prototype;
  n.Db = function (a) {
    Rp.prototype.Db.call(this, a);
    var b = M("rc-canvas-canvas", void 0);
    b = Ji(b);
    a = new Dd(a.clientX - b.K, a.clientY - b.J);
    b = this.l[this.l.length - 1];
    var c;
    if ((c = 3 <= b.length)) {
      var d = b[0];
      c = a.K - d.K;
      d = a.J - d.J;
      c = 15 > Math.sqrt(c * c + d * d);
    }
    a: {
      if (2 <= b.length)
        for (d = b.length - 1; 0 < d; d--) {
          var e = b[d - 1];
          var f = b[d],
            g = b[b.length - 1],
            l = a,
            m = Sp(e, f),
            t = Sp(g, l);
          if (m == t) e = !0;
          else {
            var E = m[0] * t[1] - t[0] * m[1];
            1e-5 >= Math.abs(E - 0)
              ? (e = !1)
              : ((m = Ed(
                  new Dd(t[1] * m[2] - m[1] * t[2], m[0] * t[2] - t[0] * m[2]),
                  1 / E,
                )),
                Tp(m, e) || Tp(m, f) || Tp(m, g) || Tp(m, l)
                  ? (e = !1)
                  : ((g = new kj(g.K, g.J, l.K, l.J)),
                    (g = mj(g, Math.min(Math.max(lj(g, m.K, m.J), 0), 1))),
                    (e = new kj(e.K, e.J, f.K, f.J)),
                    (e =
                      Tp(m, mj(e, Math.min(Math.max(lj(e, m.K, m.J), 0), 1))) &&
                      Tp(m, g))));
          }
          if (e) {
            d = c && 1 == d;
            break a;
          }
        }
      d = !0;
    }
    d
      ? (c ? (b.push(b[0]), this.l.push([])) : b.push(a), this.Qa())
      : (this.Qa(a), Q(this.Qa, 250, this));
  };
  n.xc = function () {
    var a = this.l.length - 1;
    0 == this.l[a].length && 0 != a && this.l.pop();
    a = this.l.length - 1;
    0 != this.l[a].length && this.l[a].pop();
    this.Qa();
  };
  n.Qa = function (a) {
    var b = M("rc-canvas-canvas", void 0),
      c = b.getContext("2d"),
      d = M("rc-canvas-image", void 0);
    c.drawImage(d, 0, 0, b.width, b.height);
    c.strokeStyle = "rgba(100, 200, 100, 1)";
    c.lineWidth = 2;
    D && (c.setLineDash = h());
    for (b = 0; b < this.l.length; b++)
      if (((d = this.l[b].length), 0 != d)) {
        b == this.l.length - 1 &&
          (a &&
            (c.beginPath(),
            (c.strokeStyle = "rgba(255, 50, 50, 1)"),
            c.moveTo(this.l[b][d - 1].K, this.l[b][d - 1].J),
            c.lineTo(a.K, a.J),
            c.setLineDash([0]),
            c.stroke(),
            c.closePath()),
          (c.strokeStyle = "rgba(255, 255, 255, 1)"),
          c.beginPath(),
          (c.fillStyle = "rgba(255, 255, 255, 1)"),
          c.arc(this.l[b][d - 1].K, this.l[b][d - 1].J, 3, 0, 2 * Math.PI),
          c.fill(),
          c.closePath());
        c.beginPath();
        c.moveTo(this.l[b][0].K, this.l[b][0].J);
        for (var e = 1; e < d; e++) c.lineTo(this.l[b][e].K, this.l[b][e].J);
        c.fillStyle = "rgba(255, 255, 255, 0.4)";
        c.fill();
        c.setLineDash([0]);
        c.stroke();
        c.lineTo(this.l[b][0].K, this.l[b][0].J);
        c.setLineDash([10]);
        c.stroke();
        c.closePath();
      }
  };
  n.Ea = function () {
    var a;
    if (!(a = 2 >= this.l[0].length)) {
      for (var b = (a = 0); b < this.l.length; b++)
        for (var c = this.l[b], d = c.length - 1, e = 0; e < c.length; e++)
          (a += (c[d].K + c[e].K) * (c[d].J - c[e].J)), (d = e);
      a = 500 > Math.abs(0.5 * a);
    }
    return a
      ? (Z(this, !0, M("rc-imageselect-error-select-something", void 0)), !0)
      : !1;
  };
  n.Ma = function (a) {
    Fk(a, Cp);
  };
  var Vp = function () {
    Rp.call(this, "multiselect");
  };
  Ba(Vp, Rp);
  Vp.prototype.Db = function (a) {
    Rp.prototype.Db.call(this, a);
    var b = M("rc-canvas-canvas", void 0);
    b = Ji(b);
    this.l[this.l.length - 1].push(new Dd(a.clientX - b.K, a.clientY - b.J));
    rp(this, "Next");
    this.Qa();
  };
  Vp.prototype.xc = function () {
    var a = this.l.length - 1;
    0 != this.l[a].length && this.l[a].pop();
    0 == this.l[a].length && rp(this, "None Found", !0);
    this.Qa();
  };
  Vp.prototype.ub = function (a) {
    a = Rp.prototype.ub.call(this, a);
    Wp(this);
    Qp(0, 1);
    rp(this, "None Found", !0);
    return a;
  };
  Vp.prototype.Qa = function () {
    0 == this.l.length ? Qp(0, 1) : Qp(this.l.length - 1, 3);
    var a = M("rc-canvas-canvas", void 0),
      b = a.getContext("2d"),
      c = M("rc-canvas-image", void 0);
    b.drawImage(c, 0, 0, a.width, a.height);
    c = document.createElement("canvas");
    c.width = a.width;
    c.height = a.height;
    a = c.getContext("2d");
    a.fillStyle = "rgba(100, 200, 100, 1)";
    for (var d = 0; d < this.l.length; d++) {
      d == this.l.length - 1 && (a.fillStyle = "rgba(255, 255, 255, 1)");
      for (var e = 0; e < this.l[d].length; e++)
        a.beginPath(),
          a.arc(this.l[d][e].K, this.l[d][e].J, 20, 0, 2 * Math.PI),
          a.fill(),
          a.closePath();
    }
    b.globalAlpha = 0.5;
    b.drawImage(c, 0, 0);
    b.globalAlpha = 1;
  };
  var Wp = function (a) {
    var b = ["/m/0k4j", "/m/04w67_", "TileSelectionStreetSign"],
      c = ["TileSelectionStreetSign", "/m/0k4j", "/m/04w67_"];
    "/m/0k4j" == I(K(a.tb, go, 1), 1) && (c = b);
    b = M("rc-imageselect-desc-wrapper", void 0);
    Xd(b);
    Fk(b, Dp, { label: c[a.l.length - 1], fb: "multiselect" });
    Mp(a);
  };
  Vp.prototype.Ea = function () {
    this.l.push([]);
    this.Qa();
    if (3 < this.l.length) return !1;
    lp(this, !1);
    Q(
      function () {
        lp(this, !0);
      },
      500,
      this,
    );
    Wp(this);
    Qi(this.wb.C(), !1);
    rp(this, "None Found", !0);
    return !0;
  };
  Vp.prototype.Ma = function (a) {
    Fk(a, Ep);
  };
  var Xp = function () {
      var a =
        '<div tabindex="0"></div><div class="' +
        W("rc-defaultchallenge-response-field") +
        '"></div><div class="' +
        W("rc-defaultchallenge-payload") +
        '"></div><div class="' +
        W("rc-defaultchallenge-incorrect-response") +
        '" style="display:none">';
      a =
        a +
        "Multiple correct solutions required - please solve more." +
        ("</div>" + V(dp()));
      return U(a);
    },
    Yp = function (a) {
      a = '<img src="' + W(Yl(a.Ua)) + '" alt="';
      a += "reCAPTCHA challenge image".replace(Ql, Rl);
      return U(a + '"/>');
    },
    Zp = function () {
      return U(
        'Type your best guess of the text shown. To get a new challenge, click the reload icon. <a href="https://support.google.com/recaptcha" target="_blank">Learn more.</a>',
      );
    };
  var aq = function () {
    Y.call(this, $p.width, $p.height, "default");
    this.D = null;
    var a = (this.l = new up()),
      b = a.C();
    Cl()
      ? (b && (b.placeholder = "Type the text"), (a.l = "Type the text"))
      : Fl(a) || (b && (b.value = ""), (a.l = "Type the text"), a.M());
    b && re(b, "label", a.l);
    te(this, this.l);
    this.o = new ei();
    te(this, this.o);
  };
  A(aq, Y);
  var $p = new L(300, 185);
  n = aq.prototype;
  n.W = function () {
    aq.I.W.call(this);
    this.N = Ik(Xp);
    this.$(this.C());
  };
  n.X = function () {
    aq.I.X.call(this);
    this.D = this.O("rc-defaultchallenge-payload");
    this.l.render(this.O("rc-defaultchallenge-response-field"));
    this.l.C().setAttribute("id", "default-response");
    di(this.o, this.l.C());
    R(S(this), this.o, "key", this.Je);
    R(S(this), this.l.C(), "keyup", this.Ue);
  };
  n.Je = function (a) {
    13 == a.keyCode && this.Jb();
  };
  n.Ue = function () {
    0 < Hl(this.l).length && Z(this, !1);
  };
  n.Ea = function () {
    return /^[\s\xa0]*$/.test(Hl(this.l));
  };
  n.ra = function (a, b, c) {
    Z(this, !!c);
    Gl(this.l);
    Fk(this.D, Yp, { Ua: this.Ua(a) });
    return Nf();
  };
  n.xa = function (a, b) {
    if (b) return vp(this.l, a), aq.I.xa.call(this, a, b);
    Z(this, a, M("rc-defaultchallenge-incorrect-response", void 0));
    return !1;
  };
  n.gb = function () {
    oc || pc || nc || (Hl(this.l) ? this.l.C().focus() : Il(this.l));
  };
  n.Ca = function () {
    this.response.response = Hl(this.l);
    Gl(this.l);
  };
  n.Ma = function (a) {
    Fk(a, Zp);
  };
  var bq = function () {
    var a =
      '<div><div class="' +
      W("rc-doscaptcha-header") +
      '"><div class="' +
      W("rc-doscaptcha-header-text") +
      '">';
    a =
      a +
      "Try again later" +
      ('</div></div><div class="' +
        W("rc-doscaptcha-body") +
        '"><div class="' +
        W("rc-doscaptcha-body-text") +
        '" tabIndex="0">');
    a =
      a +
      'Your computer or network may be sending automated queries. To protect our users, we can\'t process your request right now. For more details visit <a href="https://developers.google.com/recaptcha/docs/faq#my-computer-or-network-may-be-sending-automated-queries" target="_blank">our help page</a>' +
      ('</div></div></div><div class="' +
        W("rc-doscaptcha-footer") +
        '">' +
        V(dp()) +
        "</div>");
    return U(a);
  };
  var cq = new L(300, 250),
    dq = function () {
      Y.call(this, cq.width, cq.height, "doscaptcha");
    };
  Ba(dq, Y);
  dq.prototype.W = function () {
    Y.prototype.W.call(this);
    this.N = Ik(bq);
    this.$(this.C());
  };
  dq.prototype.ra = function () {
    lp(this, !1);
    var a = this.O("rc-doscaptcha-header-text"),
      b = this.O("rc-doscaptcha-body"),
      c = this.O("rc-doscaptcha-body-text");
    a && en(a, -1);
    b && c && ((a = Ni(b).height), en(c, a));
    return Nf();
  };
  dq.prototype.ga = function (a) {
    a && this.O("rc-doscaptcha-body-text").focus();
  };
  dq.prototype.Ca = function () {
    this.response.response = "";
  };
  var eq = function (a) {
    Lp.call(this, a);
    this.ia = [];
    this.qa = [];
    this.vb = !1;
  };
  Ba(eq, Lp);
  eq.prototype.reset = function () {
    this.ia = [];
    this.qa = [];
    this.vb = !1;
  };
  eq.prototype.ra = function (a, b, c) {
    this.reset();
    return Lp.prototype.ra.call(this, a, b, c);
  };
  var fq = function (a) {
      a.qa.length && !a.vb && ((a.vb = !0), a.dispatchEvent("f"));
    },
    gq = function (a) {
      var b = a.qa;
      a.qa = [];
      return b;
    };
  var hq = function () {
    eq.call(this, "multicaptcha");
    this.ca = 0;
    this.l = [];
    this.Ja = !1;
    this.P = [];
    this.Ob = [];
  };
  Ba(hq, eq);
  hq.prototype.reset = function () {
    eq.prototype.reset.call(this);
    this.ca = 0;
    this.l = [];
    this.Ja = !1;
    this.P = [];
    this.Ob = [];
  };
  hq.prototype.Ca = function () {
    this.response.response = this.P;
  };
  hq.prototype.ra = function (a, b, c) {
    var d = Tc(K(b, jo, 5), go, 1)[0];
    b.l || (b.l = {});
    var e = d ? Uc(d) : d;
    b.l[1] = d;
    J(b, 1, e);
    c = eq.prototype.ra.call(this, a, b, c);
    this.Ob = Tc(K(b, jo, 5), go, 1);
    this.l.push(this.Ua(a, "2"));
    jb(this.l, Sc(K(b, jo, 5), 2));
    rp(this, "Skip");
    return c;
  };
  hq.prototype.Oc = function (a, b) {
    0 == a.length && (this.Ja = !0);
    jb(this.l, a);
    jb(this.Ob, b);
    this.P.length == this.l.length + 1 - a.length &&
      (this.Ja ? this.dispatchEvent("k") : iq(this));
  };
  var iq = function (a) {
      Ih(
        be(a.O("rc-imageselect-target")),
        "rc-imageselect-carousel-leaving-left",
      );
      if (!(a.ca >= a.l.length)) {
        var b = a.ub(a.l[a.ca]);
        a.ca += 1;
        var c = a.Ob[a.ca];
        jq(a, b).then(
          y(function () {
            var a = M("rc-imageselect-desc-wrapper", void 0);
            Xd(a);
            Fk(a, Fp, { label: I(c, 1), fb: "multicaptcha", Ab: I(c, 7) });
            a.innerHTML = a.innerHTML.replace(".", "");
            Mp(this);
          }, a),
        );
        rp(a, "Skip");
        Kh(
          M("rc-imageselect-carousel-instructions", void 0),
          "rc-imageselect-carousel-instructions-hidden",
        );
      }
    },
    jq = function (a, b) {
      var c = qe(document);
      lp(a, !1);
      var d = q(b.previousElementSibling)
        ? b.previousElementSibling
        : $d(b.previousSibling, !1);
      Ih(b, "rc-imageselect-carousel-offscreen-right");
      Ih(d, "rc-imageselect-carousel-leaving-left");
      Ih(
        b,
        4 == a.o.Z.ba.rowSpan && 4 == a.o.Z.ba.colSpan
          ? "rc-imageselect-carousel-mock-margin-1"
          : "rc-imageselect-carousel-mock-margin-2",
      );
      return dn(b).then(
        y(function () {
          Q(
            function () {
              Kh(b, "rc-imageselect-carousel-offscreen-right");
              Kh(d, "rc-imageselect-carousel-leaving-left");
              Ih(b, "rc-imageselect-carousel-entering-right");
              Ih(d, "rc-imageselect-carousel-offscreen-left");
              Q(
                function () {
                  Kh(b, "rc-imageselect-carousel-entering-right");
                  Kh(
                    b,
                    4 == this.o.Z.ba.rowSpan && 4 == this.o.Z.ba.colSpan
                      ? "rc-imageselect-carousel-mock-margin-1"
                      : "rc-imageselect-carousel-mock-margin-2",
                  );
                  Yd(d);
                  lp(this, !0);
                  c && c.focus();
                  var a = this.o.Z.ba;
                  a.rb = 0;
                  a = a.Na;
                  for (var f = 0; f < a.length; f++)
                    (a[f].selected = !1),
                      Kh(a[f].element, "rc-imageselect-tileselected");
                },
                600,
                this,
              );
            },
            100,
            this,
          );
        }, a),
      );
    };
  hq.prototype.V = function (a) {
    eq.prototype.V.call(this, a);
    0 < this.o.Z.ba.rb
      ? (Ih(
          M("rc-imageselect-carousel-instructions", void 0),
          "rc-imageselect-carousel-instructions-hidden",
        ),
        this.Ja ? rp(this) : rp(this, "Next"))
      : (Kh(
          M("rc-imageselect-carousel-instructions", void 0),
          "rc-imageselect-carousel-instructions-hidden",
        ),
        rp(this, "Skip"));
  };
  hq.prototype.Ea = function () {
    Z(this, !1);
    this.P.push([]);
    B(
      this.o.Z.ba.Na,
      function (a, b) {
        a.selected && this.P[this.P.length - 1].push(b);
      },
      this,
    );
    if (this.Ja) return !1;
    jm("JS_MC_FETCH") ? ((this.qa = ib(this.P)), fq(this)) : this.Oc([], []);
    iq(this);
    return !0;
  };
  var kq = function () {
    eq.call(this, "dynamic");
    this.P = {};
    this.l = 0;
  };
  Ba(kq, eq);
  kq.prototype.reset = function () {
    eq.prototype.reset.call(this);
    this.P = {};
    this.l = 0;
  };
  kq.prototype.ra = function (a, b, c) {
    a = eq.prototype.ra.call(this, a, b, c);
    this.l = I(K(b, $n, 3), 2) || 0;
    return a;
  };
  kq.prototype.Oc = function (a) {
    for (
      var b = {}, c = ka(lq(this)), d = c.next();
      !d.done;
      b = { Yb: b.Yb, Ha: b.Ha, Pc: b.Pc }, d = c.next()
    ) {
      d = d.value;
      if (0 == a.length) break;
      this.ia.push(d);
      var e = Np(this, this.o.Z.ba.rowSpan, this.o.Z.ba.colSpan);
      Yb(e, { Wd: 0, vc: 0, rowSpan: 1, colSpan: 1, hc: a.shift() });
      b.Pc = Hk(e);
      b.Yb = this.P[d] || d;
      b.Ha = { selected: !0, element: this.o.Z.ba.Na[b.Yb].element };
      d = this.o.Z.ba.Na.length;
      this.o.Z.ba.Na.push(b.Ha);
      Q(
        y(
          (function (a) {
            return function (b) {
              this.P[b] = a.Yb;
              Xd(a.Ha.element);
              a.Ha.element.appendChild(a.Pc);
              mq(a.Ha);
              a.Ha.selected = !1;
              Kh(a.Ha.element, "rc-imageselect-dynamic-selected");
              R(S(this), new km(a.Ha.element), "action", Qa(this.V, a.Ha));
            };
          })(b),
          this,
          d,
        ),
        this.l + 1e3,
      );
    }
  };
  var mq = function (a) {
    Ci(M("rc-image-tile-overlay", a.element), {
      opacity: "0.5",
      display: "block",
      top: "0px",
    });
    Q(function () {
      Ci(M("rc-image-tile-overlay", a.element), "opacity", "0");
    }, 100);
  };
  kq.prototype.Ca = function () {
    this.response.response = this.ia;
  };
  kq.prototype.Ea = function () {
    if (!eq.prototype.Ea.call(this)) {
      if (!this.vb)
        for (var a = ka(this.ia), b = a.next(); !b.done; b = a.next()) {
          var c = this.P;
          if (null !== c && b.value in c) return !1;
        }
      Z(this, !0, M("rc-imageselect-error-dynamic-more", void 0));
    }
    return !0;
  };
  kq.prototype.V = function (a) {
    var b = Wa(this.o.Z.ba.Na, a);
    -1 == Wa(this.ia, b) &&
      (Z(this, !1),
      a.selected ||
        (++this.o.Z.ba.rb,
        (a.selected = !0),
        this.l &&
          Ci(
            a.element,
            "transition",
            "opacity " + (this.l + 1e3) / 1e3 + "s ease",
          ),
        Ih(a.element, "rc-imageselect-dynamic-selected"),
        (a = Wa(this.o.Z.ba.Na, a)),
        jb(this.qa, a),
        fq(this)));
  };
  var lq = function (a) {
    var b = [];
    B(
      a.o.Z.ba.Na,
      function (a, d) {
        a.selected && -1 == Wa(this.ia, d) && b.push(d);
      },
      a,
    );
    return b;
  };
  var nq = function () {
      var a =
        '<div id="rc-coref"><span class="' +
        W("rc-coref-tabloop-begin") +
        '" tabIndex="0"></span><div class="' +
        W("rc-coref-select-more") +
        '" style="display:none" tabindex="0">';
      a =
        a +
        "Please fill in the answers to proceed" +
        ('</div><div class="' +
          W("rc-coref-verify-failed") +
          '" style="display:none" tabindex="0">');
      a =
        a +
        "Please try again" +
        ('</div><div class="' +
          W("rc-coref-payload") +
          '"></div>' +
          V(dp()) +
          '<span class="' +
          W("rc-coref-tabloop-end") +
          '" tabIndex="0"></span></div>');
      return U(a);
    },
    oq = function (a) {
      var b = a.dd,
        c =
          '<div class="' +
          W("rc-coref-challenge") +
          '"><div id="rc-coref-target" class="' +
          W("rc-coref-target") +
          '" dir="ltr">';
      var d = a.de;
      a = a.Re;
      for (
        var e = "", f = Math.max(0, Math.ceil(d.length - 0)), g = 0;
        g < f;
        g++
      ) {
        var l = 1 * g;
        e += '<div tabIndex="0" class="' + W("rc-coref-first") + '">';
        var m =
          "Listen to the text and select everything that refers to: " + V(a[l]);
        e += m;
        e +=
          '</div><div class="' +
          W("rc-coref-sentence") +
          '"><div tabindex="0">...';
        m = d[l];
        for (var t = m.length, E = 0; E < t; E++) {
          var H = m[E];
          e += V(H[0]);
          H[1] &&
            ((e +=
              "</div><input" +
              (-1 != ("" + a[l]).indexOf("" + H[0])
                ? " checked disabled"
                : "") +
              ' class="' +
              W("rc-coref-checkbox") +
              '" type="checkbox" aria-label=\''),
            (H =
              'Check the box if "' +
              (W(H[0]) + ('" refers to "' + (W(a[l]) + '"')))),
            (e += String(H).replace(Ql, Rl)),
            (e += '\'><div tabindex="0">'));
        }
        e += "...</div></div>";
      }
      d = U(e);
      c = c + d + '</div></div><div class="' + W("rc-coref-attribution") + '">';
      d = b.length;
      for (a = 0; a < d; a++)
        c += '<a target="_blank" href="' + W(Wl(b[a])) + '">source</a> ';
      return U(c + "(CC BY-SA)</div>");
    },
    pq = function () {
      return U(
        'Some of the words in the sentences refer to a person or persons elsewhere. Select the ones that match the prompt.  <a href="https://support.google.com/recaptcha" target="_blank">Learn more.</a>',
      );
    };
  var qq = new L(350, 410),
    rq = function () {
      Y.call(this, qq.width, qq.height, "coref", !0);
      this.o = this.l = null;
    };
  Ba(rq, Y);
  n = rq.prototype;
  n.W = function () {
    Y.prototype.W.call(this);
    this.N = Ik(nq);
    this.$(this.C());
  };
  n.$ = function (a) {
    Y.prototype.$.call(this, a);
    this.o = this.O("rc-coref-payload");
  };
  n.X = function () {
    Y.prototype.X.call(this);
    R(
      R(S(this), this.O("rc-coref-tabloop-begin"), "focus", function () {
        tp();
      }),
      this.O("rc-coref-tabloop-end"),
      "focus",
      function () {
        tp([
          "rc-coref-select-more",
          "rc-coref-verify-failed",
          "rc-coref-instructions",
        ]);
      },
    );
  };
  n.gb = function () {
    (this.N ? ab("rc-coref-first", this.N || this.A.l) : [])[0].focus();
  };
  n.ra = function (a, b, c) {
    this.l = K(b, Tn, 6);
    Fk(this.o, oq, {
      de: sq(Tc(this.l, Vn, 1)),
      Re: tq(Tc(this.l, Vn, 1)),
      dd: uq(Tc(this.l, Vn, 1)),
    });
    Z(this, !1);
    np(
      this,
      y(function () {
        op(this, this.Da());
        c && Z(this, !0, this.O("rc-coref-verify-failed"));
      }, this),
    );
    return Nf();
  };
  var sq = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = !1,
          e = 0,
          f = Wn(a[c]).length;
        b.push([]);
        for (var g = 0; g < Wn(a[c]).length; g++) {
          var l =
            0 != I(Wn(a[c])[g], 4) &&
            (g == Wn(a[c]).length - 1 || 0 == I(Wn(a[c])[g + 1], 4));
          d = d || l;
          var m = I(Wn(a[c])[g], 1);
          0 != I(Wn(a[c])[g], 3) && (m = " " + m);
          b[b.length - 1].push([m, l]);
          l && (f = Wn(a[c]).length);
          "." == I(Wn(a[c])[g], 1) &&
            (d ? ((f = g), (d = !1)) : 0 == e && (e = g + 1));
        }
        b[b.length - 1] = b[b.length - 1].slice(e, f);
      }
      return b;
    },
    tq = function (a) {
      for (var b = [], c = 0; c < a.length; c++)
        for (var d = !1, e = 0; e < Wn(a[c]).length; e++)
          if (2 == I(Wn(a[c])[e], 4)) {
            var f = " " + I(Wn(a[c])[e], 1);
            d ? (b[b.length - 1] += f) : (b.push(f), (d = !0));
          } else if (d) break;
      return b;
    },
    uq = function (a) {
      return a.map(function (a) {
        return I(a, 2);
      });
    };
  n = rq.prototype;
  n.Da = function () {
    var a = this.Y || sp(),
      b = Ni(this.o);
    return new L(
      Math.max(Math.min(a.width - 10, qq.width), 280),
      b.height + 60,
    );
  };
  n.xa = function (a, b) {
    var c = ["rc-coref-select-more", "rc-coref-verify-failed"];
    (!a && b) ||
      B(
        c,
        function (a) {
          a = this.O(a);
          a != b && Z(this, !1, a);
        },
        this,
      );
    return b ? Y.prototype.xa.call(this, a, b) : !1;
  };
  n.Ca = function () {
    var a = [];
    B(
      this.N ? ab("rc-coref-checkbox", this.N || this.A.l) : [],
      function (b, c) {
        b.checked && a.push(c);
      },
    );
    this.response.response = a;
  };
  n.Ea = ba(!1);
  n.Ma = function (a) {
    Fk(a, pq);
  };
  var vq = function () {
      var a =
        '<div id="rc-prepositional"><span class="' +
        W("rc-prepositional-tabloop-begin") +
        '" tabIndex="0"></span><div class="' +
        W("rc-prepositional-select-more") +
        '" style="display:none" tabindex="0">';
      a =
        a +
        "Please fill in the answers to proceed" +
        ('</div><div class="' +
          W("rc-prepositional-verify-failed") +
          '" style="display:none" tabindex="0">');
      a =
        a +
        "Please try again" +
        ('</div><div class="' +
          W("rc-prepositional-payload") +
          '"></div>' +
          V(dp()) +
          '<span class="' +
          W("rc-prepositional-tabloop-end") +
          '" tabIndex="0"></span></div>');
      return U(a);
    },
    wq = function (a) {
      for (
        var b =
            '<div class="' +
            W("rc-prepositional-challenge") +
            '"><div id="rc-prepositional-target" class="' +
            W("rc-prepositional-target") +
            '" dir="ltr"><div tabIndex="0" class="' +
            W("rc-prepositional-instructions") +
            '"></div><table class="' +
            W("rc-prepositional-table") +
            '" role="region">',
          c = Math.max(0, Math.ceil(a.text.length - 0)),
          d = 0;
        d < c;
        d++
      )
        b +=
          '<tr role="presentation"><td role="checkbox" tabIndex="0">' +
          V(a.text[1 * d]) +
          "</td></tr>";
      return U(b + "</table></div></div>");
    },
    xq = function (a) {
      var b = '<div class="' + W("rc-prepositional-attribution") + '">';
      b += "Sources: ";
      a = a.dd;
      for (var c = a.length, d = 0; d < c; d++)
        b +=
          '<a target="_blank" href="' +
          W(Wl(a[d])) +
          '">' +
          V(d + 1) +
          "</a>" +
          (d != c - 1 ? "," : "") +
          " ";
      return U(
        b +
          '(CC BY-SA)</div>For each phrase above, select it if it sounds somehow incorrect. Do not select phrases that have grammatical problems or seem nonsensical without other context. <a href="https://support.google.com/recaptcha" target="_blank">Learn more.</a>',
      );
    };
  var yq = new L(350, 410),
    zq = function () {
      Y.call(this, yq.width, yq.height, "prepositional", !0);
      this.D = this.o = null;
      this.l = [];
      this.V = null;
      this.P = 0;
    };
  Ba(zq, Y);
  n = zq.prototype;
  n.W = function () {
    Y.prototype.W.call(this);
    this.N = Ik(vq);
    this.$(this.C());
  };
  n.$ = function (a) {
    Y.prototype.$.call(this, a);
    this.D = this.O("rc-prepositional-payload");
  };
  n.X = function () {
    Y.prototype.X.call(this);
    R(
      R(
        S(this),
        this.O("rc-prepositional-tabloop-begin"),
        "focus",
        function () {
          tp();
        },
      ),
      this.O("rc-prepositional-tabloop-end"),
      "focus",
      function () {
        tp([
          "rc-prepositional-select-more",
          "rc-prepositional-verify-failed",
          "rc-prepositional-instructions",
        ]);
      },
    );
  };
  n.gb = function () {
    this.O("rc-prepositional-instructions").focus();
  };
  n.ra = function (a, b, c) {
    this.l = [];
    this.o = K(b, oo, 7);
    (a = K(b, go, 1)) && I(a, 3) && (this.P = I(a, 3));
    Fk(this.D, wq, { text: Sc(this.o, 1) });
    a = M("rc-prepositional-instructions", void 0);
    this.V = 0.5 > Math.random();
    fe(
      a,
      this.V
        ? "Select the phrases that are improperly formed:"
        : "Select the phrases that sound incorrect:",
    );
    Z(this, !1);
    np(
      this,
      y(function () {
        op(this, this.Da());
        Aq(this);
        c && Z(this, !0, this.O("rc-prepositional-verify-failed"));
      }, this),
    );
    return Nf();
  };
  var Aq = function (a) {
    var b = M("rc-prepositional-target", void 0),
      c = [];
    B(
      Ld(document, "td", null, b),
      function (a, b) {
        this.l.push(b);
        var d = { selected: !1, element: a, index: b };
        c.push(d);
        R(S(this), new km(a), "action", y(this.Ee, this, d));
        re(a, "checked", "false");
      },
      a,
    );
  };
  n = zq.prototype;
  n.Ee = function (a) {
    Z(this, !1);
    var b = !a.selected;
    b
      ? (Ih(a.element, "rc-prepositional-selected"), gb(this.l, a.index))
      : (Kh(a.element, "rc-prepositional-selected"), this.l.push(a.index));
    a.selected = b;
    re(a.element, "checked", a.selected ? "true" : "false");
  };
  n.Da = function () {
    var a = this.Y || sp(),
      b = Ni(this.D);
    return new L(
      Math.max(Math.min(a.width - 10, yq.width), 280),
      b.height + 60,
    );
  };
  n.xa = function (a, b) {
    var c = ["rc-prepositional-select-more", "rc-prepositional-verify-failed"];
    (!a && b) ||
      B(
        c,
        function (a) {
          a = this.O(a);
          a != b && Z(this, !1, a);
        },
        this,
      );
    return b ? Y.prototype.xa.call(this, a, b) : !1;
  };
  n.Ca = function () {
    this.response.response = this.l;
    this.response.plugin = this.V ? "if" : "si";
  };
  n.Ea = function () {
    return Sc(this.o, 1).length - this.l.length < this.P
      ? (Z(this, !0, this.O("rc-prepositional-select-more")), !0)
      : !1;
  };
  n.Ma = function (a) {
    Fk(a, xq, { dd: Sc(this.o, 2) });
  };
  var Bq = function () {
    return U(V(dp()));
  };
  var Cq = function () {
    Y.call(this, 0, 0, "nocaptcha");
  };
  A(Cq, Y);
  Cq.prototype.W = function () {
    Cq.I.W.call(this);
    this.N = Ik(Bq);
    this.$(this.C());
  };
  Cq.prototype.ga = function (a) {
    a && this.Jb();
  };
  Cq.prototype.ra = function () {
    return Nf();
  };
  Cq.prototype.Ca = function () {
    this.response.response = "";
    var a = this.Y;
    a && (this.response.s = sn("" + a.width + a.height));
  };
  var Dq = function () {
      var a =
        '<div id="rc-text"><span class="' +
        W("rc-text-tabloop-begin") +
        '" tabIndex="0"></span><div class="' +
        W("rc-text-select-more") +
        '" style="display:none" tabindex="0">';
      a =
        a +
        "Please select all matching options." +
        ('</div><div class="' +
          W("rc-text-select-fewer") +
          '" style="display:none" tabindex="0">');
      a =
        a +
        "Please select only matching options. If not clear, please select the reload button below the challenge." +
        ('</div><div class="' +
          W("rc-text-verify-failed") +
          '" style="display:none" tabindex="0">');
      a =
        a +
        "Multiple correct solutions required - please solve more." +
        ('</div><div class="' +
          W("rc-text-payload") +
          '"></div>' +
          V(dp()) +
          '<span class="' +
          W("rc-text-tabloop-end") +
          '" tabIndex="0"></span></div>');
      return U(a);
    },
    Eq = function (a) {
      var b = a.Zd,
        c =
          '<div class="' +
          W("rc-text-instructions") +
          '"><div class="' +
          W("rc-text-desc-wrapper") +
          '" tabIndex="0">';
      c += "Please select the phrases which best match the category:";
      b =
        "<span>" +
        V(b) +
        '</span><div class="' +
        W("rc-text-clear") +
        '"></div></div></div><div class="' +
        W("rc-text-challenge") +
        '"><div id="rc-text-target" class="' +
        W("rc-text-target") +
        '" dir="ltr">';
      a = a.fe;
      var d = 10 > a.length ? 1 : 2,
        e = a.length / d;
      var f = '<table class="' + W("rc-text-choices") + '" role="region">';
      e = Math.max(0, Math.ceil(e - 0));
      for (var g = 0; g < e; g++) {
        var l = 1 * g;
        f += '<tr role="presentation">';
        for (var m = Math.max(0, Math.ceil(d - 0)), t = 0; t < m; t++)
          f +=
            '<td role="checkbox" tabIndex="0">' + V(a[1 * t + l * d]) + "</td>";
        f += "</tr>";
      }
      a = U(f + "</table>");
      return U(c + (b + a + "</div></div>"));
    },
    Fq = function () {
      return U(
        'Select each option that is related to the given category. Then verify.  If not clear, or to get a new challenge, reload the challenge.<a href="https://support.google.com/recaptcha" target="_blank">Learn more.</a>',
      );
    };
  var Hq = function () {
    Y.call(this, Gq.width, Gq.height, "text", !0);
    this.l = null;
    this.o = [];
    this.D = null;
  };
  A(Hq, Y);
  var Gq = new L(350, 410);
  Hq.prototype.W = function () {
    Hq.I.W.call(this);
    this.N = Ik(Dq);
    this.$(this.C());
  };
  Hq.prototype.$ = function (a) {
    Hq.I.$.call(this, a);
    this.D = this.O("rc-text-payload");
  };
  Hq.prototype.X = function () {
    Hq.I.X.call(this);
    R(
      R(S(this), M("rc-text-tabloop-begin"), "focus", function () {
        tp();
      }),
      M("rc-text-tabloop-end"),
      "focus",
      function () {
        tp([
          "rc-text-select-more",
          "rc-text-select-fewer",
          "rc-text-verify-failed",
          "rc-text-instructions",
        ]);
      },
    );
  };
  Hq.prototype.ra = function (a, b, c) {
    this.o = [];
    this.l = K(b, bo, 4);
    Fk(this.D, Eq, { Zd: I(this.l, 2), fe: Sc(this.l, 3) });
    Z(this, !1);
    np(
      this,
      y(function () {
        op(this, this.Da());
        Iq(this);
        c && Z(this, !0, M("rc-text-verify-failed", void 0));
      }, this),
    );
    return Nf();
  };
  var Iq = function (a) {
    var b = M("rc-text-target", void 0),
      c = [];
    B(
      Ld(document, "td", null, b),
      function (a, b) {
        var d = { selected: !1, element: a, index: b };
        c.push(d);
        R(S(this), new km(a), "action", y(this.Ke, this, d));
        re(a, "checked", "false");
      },
      a,
    );
  };
  n = Hq.prototype;
  n.Da = function () {
    var a = this.Y || sp(),
      b = Ni(this.D);
    return new L(
      Math.max(Math.min(a.width - 10, Gq.width), 280),
      b.height + 60,
    );
  };
  n.Ke = function (a) {
    Z(this, !1);
    var b = !a.selected;
    b
      ? (Ih(a.element, "rc-text-choice-selected"), this.o.push(a.index))
      : (Kh(a.element, "rc-text-choice-selected"), gb(this.o, a.index));
    a.selected = b;
    re(a.element, "checked", a.selected ? "true" : "false");
  };
  n.Ea = function () {
    return this.o.length < I(this.l, 4)
      ? (Z(this, !0, M("rc-text-select-more", void 0)), !0)
      : I(this.l, 5) && this.o.length > I(this.l, 5)
      ? (Z(this, !0, M("rc-text-select-fewer", void 0)), !0)
      : !1;
  };
  n.xa = function (a, b) {
    var c = [
      "rc-text-select-more",
      "rc-text-select-fewer",
      "rc-text-verify-failed",
    ];
    (!a && b) ||
      B(
        c,
        function (a) {
          a = M(a, void 0);
          a != b && Z(this, !1, a);
        },
        this,
      );
    return b ? Hq.I.xa.call(this, a, b) : !1;
  };
  n.gb = function () {
    Za(
      ["rc-text-select-more", "rc-text-select-fewer", "rc-text-verify-failed"],
      function (a) {
        return Ri(M(a, void 0)) ? (M(a, void 0).focus(), !0) : !1;
      },
      this,
    ) || ae(M("rc-text-instructions", void 0)).focus();
  };
  n.Ca = function () {
    this.response.response = this.o;
  };
  n.Ma = function (a) {
    Fk(a, Fq);
  };
  var Jq = function (a) {
    switch (a) {
      case "default":
        return new aq();
      case "nocaptcha":
        return new Cq();
      case "doscaptcha":
        return new dq();
      case "imageselect":
        return new Lp();
      case "tileselect":
        return new Lp("tileselect");
      case "dynamic":
        return new kq();
      case "audio":
        return new yp();
      case "text":
        return new Hq();
      case "multicaptcha":
        return new hq();
      case "canvas":
        return new Up();
      case "multiselect":
        return new Vp();
      case "coref":
        return new rq();
      case "prepositional":
        return new zq();
    }
  };
  var Kq = function (a) {
      return U(
        '<textarea id="' +
          W(a.id) +
          '" name="' +
          W(a.name) +
          '" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none; ' +
          (a.display ? "" : " display: none; ") +
          '"></textarea>',
      );
    },
    Lq = function (a) {
      return U(
        '<div style="background-color: #fff; border: 1px solid #ccc; box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2); position: absolute; left: ' +
          W($l(a.left)) +
          "px; top: " +
          W($l(a.top)) +
          'px; transition: visibility 0s linear 0.3s, opacity 0.3s linear; opacity: 0; visibility: hidden; z-index: 2000000000;"><div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: #fff; opacity: 0.05;  filter: alpha(opacity=5)"></div><div class="g-recaptcha-bubble-arrow" style="border: 11px solid transparent; width: 0; height: 0; position: absolute; pointer-events: none; margin-top: -11px; z-index: 2000000000;"></div><div class="g-recaptcha-bubble-arrow" style="border: 10px solid transparent; width: 0; height: 0; position: absolute; pointer-events: none; margin-top: -10px; z-index: 2000000000;"></div><div style="z-index: 2000000000; position: relative;"></div></div>',
      );
    },
    Mq = function (a) {
      return U(
        '<div style="visibility: hidden; position: absolute; width:100%; top: ' +
          W($l(a.top)) +
          'px; left: 0px; right: 0px; transition: visibility 0s linear 0.3s, opacity 0.3s linear; opacity: 0;"><div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: #fff; opacity: 0.5;  filter: alpha(opacity=50)"></div><div style="margin: 0 auto; top: 0px; left: 0px; right: 0px; position: absolute; border: 1px solid #ccc; z-index: 2000000000; background-color: #fff; overflow: hidden;"></div></div>',
      );
    };
  var Nq = function (a) {
      return U(
        "<div><div></div>" +
          V(Kq({ id: a.pb, name: a.qb, display: !1 })) +
          "</div>",
      );
    },
    Oq = function (a) {
      return U(
        '<div style="width: ' +
          W($l(a.width)) +
          "; height: " +
          W($l(a.height)) +
          '; position: relative;"><div style="width: ' +
          W($l(a.width)) +
          "; height: " +
          W($l(a.height)) +
          '; position: absolute;"><iframe src="' +
          W(a.Rd) +
          '" frameborder="0" scrolling="no" style="width: ' +
          W($l(a.width)) +
          "; height: " +
          W($l(a.height)) +
          '; border-style: none;"></iframe></div></div><div style="border-style: none; bottom: 12px; left: 25px; margin: 0px; padding: 0px; right: 25px; background: #f9f9f9; border: 1px solid #c1c1c1; border-radius: 3px; height: 60px; width: 300px;">' +
          V(Kq({ id: a.pb, name: a.qb, display: !0 })) +
          "</div>",
      );
    };
  var Pq = function (a) {
      var b = a.pb,
        c = a.qb;
      return U(
        '<div class="grecaptcha-badge" data-style="' +
          W(a.style) +
          '"><div class="grecaptcha-logo"></div><div class="grecaptcha-error"></div>' +
          V(Kq({ id: b, name: c, display: !1 })) +
          "</div>",
      );
    },
    Qq = function () {
      return U(
        '<noscript>Please enable JavaScript to get a reCAPTCHA challenge.<br></noscript><div class="if-js-enabled">Please upgrade to a <a href="https://support.google.com/recaptcha/?hl=en#6223828">supported browser</a> to get a reCAPTCHA challenge.</div><br>Alternatively if you think you are getting this page in error, please check your internet connection and reload.<br><br><a href="https://support.google.com/recaptcha#6262736" target="_blank">Why is this happening to me?</a>',
      );
    };
  var Rq = {
      normal: new L(304, 78),
      compact: new L(164, 144),
      invisible: new L(256, 60),
    },
    Sq = function (a) {
      Xh.call(this);
      this.D = a;
      this.A = this.w = this.l = this.H = this.o = null;
      this.Y = z();
      this.sa = this.U = null;
    };
  Ba(Sq, Xh);
  var Tq = function (a, b) {
      var c = b ? a.w.left - 10 : a.w.left + a.w.width + 10,
        d = Ii(a.V()),
        e = a.w.top + 0.5 * a.w.height;
      c instanceof Dd
        ? ((d.K += c.K), (d.J += c.J))
        : ((d.K += Number(c)), Da(e) && (d.J += e));
      return d;
    },
    Uq = function () {
      var a = Pd(window).width,
        b = N().innerWidth;
      b && b < a && (a = b);
      return new L(a, Math.max(Pd(window).height, N().innerHeight || 0));
    },
    Vq = function (a, b) {
      Yb(a, {
        frameborder: "0",
        scrolling: "no",
        sandbox:
          "allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation",
      });
      b && (a.name = b);
      for (
        var c = Sd("IFRAME", a),
          d = [
            "allow-modals",
            "allow-popups-to-escape-sandbox",
            "allow-storage-access-by-user-activation",
          ],
          e = 0;
        e < d.length;
        e++
      )
        c.sandbox &&
          c.sandbox.supports &&
          c.sandbox.add &&
          c.sandbox.supports(d[e]) &&
          c.sandbox.add(d[e]);
      return c;
    },
    Wq = function (a, b, c, d, e) {
      a.o = Vq({
        src: c,
        tabindex: d,
        width: "" + e.width,
        height: "" + e.height,
        role: "presentation",
      });
      b.appendChild(a.o);
    };
  Sq.prototype.S = function (a) {
    this.A = a = void 0 === a ? "fullscreen" : a;
    this.l = Ik("fullscreen" == a ? Mq : Lq, { left: 0, top: -1e4 });
    document.body.appendChild(this.l);
  };
  var Xq = function (a, b, c, d) {
      d = void 0 === d ? new Ai(0, 0, 0, 0) : d;
      a.w = d;
      b.style = "width: 100%; height: 100%;";
      b.src = hh(b.src) + (c ? "#" + c : "");
      var e = Vq(b, c);
      hc &&
        ai(a, e, "load", function () {
          e.src = b.src;
        });
      a.l || a.S();
      a.H = e;
      be(a.l).appendChild(e);
      "bubble" == a.A &&
        R(
          a,
          N(),
          ["scroll", "resize"],
          y(function () {
            this.ga();
          }, a),
        );
    },
    $q = function (a, b, c) {
      Yq(a, b, c);
      b ? (Zq(a), a.H.focus()) : a.o.focus();
      a.Y = z();
    },
    Yq = function (a, b, c) {
      var d = "visible" == Ei(a.l, "visibility");
      Ci(a.l, {
        visibility: b ? "visible" : "hidden",
        opacity: b ? "1" : "0",
        transition: b
          ? "visibility 0s linear 0s, opacity 0.3s linear"
          : "visibility 0s linear 0.3s, opacity 0.3s linear",
      });
      d && !b
        ? (a.sa = Q(
            function () {
              Ci(this.l, "top", "-10000px");
            },
            500,
            a,
          ))
        : b && (fg(a.sa), Ci(a.l, "top", "0px"));
      c && (Li(be(a.l), c.width, c.height), Li(ae(be(a.l)), c.width, c.height));
    };
  Sq.prototype.ga = function () {
    25 < z() - this.Y
      ? (Zq(this), (this.Y = z()))
      : (fg(this.U), (this.U = Q(this.ga, 25, this)));
  };
  var Zq = function (a) {
      if ("visible" == Ei(a.l, "visibility")) {
        var b = Ni(be(a.l));
        var c = window,
          d = c.document;
        var e = 0;
        if (d) {
          e = d.body;
          var f = d.documentElement;
          if (f && e)
            if (((c = Pd(c).height), Od(d) && f.scrollHeight))
              e = f.scrollHeight != c ? f.scrollHeight : f.offsetHeight;
            else {
              d = f.scrollHeight;
              var g = f.offsetHeight;
              f.clientHeight != g &&
                ((d = e.scrollHeight), (g = e.offsetHeight));
              e = d > c ? (d > g ? d : g) : d < g ? d : g;
            }
          else e = 0;
        }
        f = Math.max(e, Uq().height);
        e = Tq(a);
        f = Math.min(
          Math.max(
            Math.min(
              Math.max(
                Math.min(
                  Math.max(e.J - 0.5 * b.height, Qd(document).J + 10),
                  Qd(document).J + Uq().height - b.height - 10,
                ),
                e.J - 0.9 * b.height,
              ),
              e.J - 0.1 * b.height,
            ),
            10,
          ),
          Math.max(10, f - b.height - 10),
        );
        "bubble" == a.A
          ? ((e = e.K > 0.5 * Uq().width),
            Ci(a.l, {
              left: Tq(a, e).K + (e ? -b.width : 0) + "px",
              top: f + "px",
            }),
            ar(a, f, e))
          : Ci(a.l, {
              left: Qd(document).K + "px",
              top: f + "px",
              width: Uq().width + "px",
            });
      }
    },
    ar = function (a, b, c) {
      B(
        ab("g-recaptcha-bubble-arrow", a.l),
        function (a, e) {
          Ci(a, "top", Tq(this).J - b + "px");
          var d = 0 == e ? "#ccc" : "#fff";
          Ci(
            a,
            c
              ? {
                  left: "100%",
                  right: "",
                  "border-left-color": d,
                  "border-right-color": "transparent",
                }
              : {
                  left: "",
                  right: "100%",
                  "border-right-color": d,
                  "border-left-color": "transparent",
                },
          );
        },
        a,
      );
    },
    br = function (a) {
      a.H && (Yd(a.H), (a.H = null));
      a.l &&
        ((a.A = null), fg(a.U), (a.U = null), ci(a), Yd(a.l), (a.l = null));
    };
  Sq.prototype.L = function () {
    br(this);
    this.o && (Yd(this.o), (this.o = null));
    Xh.prototype.L.call(this);
  };
  var cr = function (a, b, c, d) {
    this.o = a;
    this.l = void 0 === b ? null : b;
    this.Yd = void 0 === c ? null : c;
    this.Me = void 0 === d ? !1 : d;
  };
  cr.prototype.getName = k("o");
  var dr = new cr("sitekey", null, "k", !0),
    er;
  if (p.window) {
    var fr = new Yj(window.location);
    fr.F = "";
    null != fr.B ||
      ("https" == fr.l ? ak(fr, 443) : "http" == fr.l && ak(fr, 80));
    var gr = fr.toString().match(fh),
      hr = gr[1],
      ir = gr[2],
      jr = gr[3],
      kr = gr[4],
      lr = "";
    hr && (lr += hr + ":");
    jr &&
      ((lr += "//"),
      ir && (lr += ir + "@"),
      (lr += jr),
      kr && (lr += ":" + kr));
    er = Lc(ob(lr), !0);
  } else er = null;
  var nr = new cr(
      "size",
      function (a) {
        return a.has(mr) ? "invisible" : "normal";
      },
      "size",
    ),
    or = new cr("stoken", null, "stoken"),
    pr = new cr("badge", null, "badge"),
    qr = new cr("action", null, "sa"),
    rr = new cr("callback"),
    sr = new cr("expired-callback"),
    tr = new cr("error-callback"),
    ur = new cr("tabindex", "0"),
    mr = new cr("bind"),
    vr = new cr("isolated", null),
    xr = {
      Jh: dr,
      dh: new cr("origin", er, "co"),
      lg: new cr("hl", "en", "hl"),
      gi: new cr("type", null, "type"),
      VERSION: new cr("version", "v1528855115741", "v"),
      Zh: new cr("theme", null, "theme"),
      Lh: nr,
      Sh: or,
      bf: pr,
      sf: new cr("s", null, "s"),
      eh: new cr("pool", null, "pool"),
      $h: new cr("content-binding", null, "tpb"),
      Kh: qr,
      mf: rr,
      cg: sr,
      $f: tr,
      Wh: ur,
      kf: mr,
      uh: new cr("preload", function (a) {
        return wr(a);
      }),
      og: vr,
    },
    zr = function (a) {
      a = Wb(a);
      var b = nr.getName();
      Rq.hasOwnProperty(a[b]) || (a[b] = null);
      this.l = a;
      a = yr(this);
      if (0 < a.length) throw Error("Missing required parameters: " + a.join());
    },
    yr = function (a) {
      var b = [];
      B(
        Sb(xr),
        function (a) {
          xr[a].Me && !this.has(xr[a]) && b.push(xr[a].getName());
        },
        a,
      );
      return b;
    };
  zr.prototype.get = function (a) {
    var b;
    (b = this.l[a.getName()]) || (b = a.l ? (w(a.l) ? a.l(this) : a.l) : null);
    return b;
  };
  zr.prototype.has = function (a) {
    return !!this.get(a);
  };
  var Ar = function (a, b) {
      var c = a.get(b);
      return c ? c.toString() : null;
    },
    Br = function (a) {
      a = a.get(ur);
      return parseInt(a, 10);
    },
    Cr = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      if ((a = a.get(b))) {
        if (w(a)) return a;
        if (w(window[a])) return window[a];
        c &&
          console.log("ReCAPTCHA couldn't find user-provided function: " + a);
      }
      return u;
    },
    wr = function (a) {
      return "invisible" == a.get(nr);
    },
    Dr = function (a, b) {
      b = void 0 === b ? {} : b;
      var c = {};
      B(
        Sb(xr),
        function (a) {
          a = xr[a];
          if (a.Yd) {
            var d = b[a.getName()] || this.get(a);
            d && (c[a.Yd] = d);
          }
        },
        a,
      );
      return c;
    };
  var Er = new L(302, 422),
    Fr = function (a) {
      Sq.call(this, a);
    };
  Ba(Fr, Sq);
  Fr.prototype.render = function (a, b, c, d) {
    b = Ik(Nq, { pb: b, qb: "g-recaptcha-response" });
    d = Rq[d];
    Li(b, d);
    this.D.appendChild(b);
    Wq(this, ae(b), a, c, d);
  };
  Fr.prototype.ca = function (a, b) {
    this.A = "fallback";
    var c = Ik(Oq, {
      Rd: a,
      height: Er.height + "px",
      width: Er.width + "px",
      pb: b,
      qb: "g-recaptcha-response",
    });
    this.D.appendChild(c);
  };
  Fr.prototype.S = function (a) {
    var b = Math.max(Uq().width - Tq(this).K, Tq(this).K);
    a
      ? Sq.prototype.S.call(this, a)
      : b > 1.5 * Rq.normal.width
      ? Sq.prototype.S.call(this, "bubble")
      : Sq.prototype.S.call(this);
  };
  Fr.prototype.V = k("o");
  var Gr = new L(302, 422),
    Hr = {},
    Ir =
      ((Hr.bottomright = {
        transition: "right 0.3s ease",
        position: "fixed",
        bottom: "14px",
        right: "-186px",
        "box-shadow": "0px 0px 5px gray",
      }),
      (Hr.bottomleft = {
        transition: "left 0.3s ease",
        position: "fixed",
        bottom: "14px",
        left: "-186px",
        "box-shadow": "0px 0px 5px gray",
      }),
      (Hr.inline = { "box-shadow": "0px 0px 5px gray" }),
      (Hr.none = { display: "none" }),
      Hr),
    Jr = ["bottomleft", "bottomright"],
    Kr = gd(".grecaptcha-badge:hover { right: 4px !important }"),
    Lr = gd(".grecaptcha-badge:hover { left: 4px !important }"),
    Mr = function (a, b) {
      Sq.call(this, a);
      this.F = null;
      this.P = b;
    };
  Ba(Mr, Sq);
  Mr.prototype.render = function (a, b, c, d) {
    var e = Ir.hasOwnProperty(this.P) ? this.P : "bottomright";
    eb(Jr, e) && Nr() && (e = "none");
    this.F = Ik(Pq, { pb: b, qb: "g-recaptcha-response", style: e });
    b = Rq[d];
    Li(this.F, b);
    this.D.appendChild(this.F);
    Wq(this, ae(this.F), a, c, b);
    "bottomright" == e ? Ti(td(Kr)) : "bottomleft" == e && Ti(td(Lr));
    Ci(this.F, Ir[e]);
  };
  Mr.prototype.ca = function (a, b) {
    this.A = "fallback";
    var c = Ik(Qq, {
      Rd: a,
      height: Gr.height + "px",
      width: Gr.width + "px",
      pb: b,
      qb: "g-recaptcha-response",
    });
    this.D.appendChild(c);
  };
  Mr.prototype.V = k("D");
  function Nr() {
    return (
      0 <
      bb(function (a) {
        return eb(Jr, a.getAttribute("data-style"));
      })
    );
  }
  var Or = [
      112, 55, 114, 109, 52, 121, 112, 115, 114, 120, 51, 52, 117, 118, 103, 61,
      66,
    ],
    Pr = function (a, b) {
      this.l = a;
      this.w = Math.floor(this.l / 6);
      this.A = b;
      this.o = [];
      for (var c = 0; c < this.w; c++) this.o.push(nb(6));
    };
  Pr.prototype.add = function (a) {
    for (var b = !1, c = 0; c < this.A; c++) {
      a = hn(a);
      var d = ((a % this.l) + this.l) % this.l;
      0 == this.o[Math.floor(d / 6)][d % 6] &&
        ((this.o[Math.floor(d / 6)][d % 6] = 1), (b = !0));
      a = "" + a;
    }
    return b;
  };
  Pr.prototype.toString = function () {
    for (var a = [], b = 0; b < this.w; b++) {
      var c = ib(this.o[b]).reverse();
      a.push(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
          parseInt(Array.prototype.join.call(c, ""), 2),
        ),
      );
    }
    return Array.prototype.join.call(a, "");
  };
  var Qr = ["uib-"];
  function Rr(a) {
    if (3 == a.nodeType) return !1;
    if (a.innerHTML)
      for (var b = ka(Qr), c = b.next(); !c.done; c = b.next())
        if (-1 != a.innerHTML.indexOf(c.value)) return !1;
    return 1 == a.nodeType && a.src && $m().test(a.src) ? !1 : !0;
  }
  var Sr = /[^\{]*\{([\s\S]*)\}$/;
  function Tr(a) {
    var b = new pg();
    b.w(a);
    return qb(b.A()).slice(0, 8);
  }
  function Ur(a) {
    if (a && a instanceof Element) {
      var b = Tr(a.tagName + a.id + a.className);
      return a.tagName + "," + b;
    }
    return Vr(a);
  }
  var Wr = function () {
      try {
        if (N().parent != N() || null != N().frameElement) return !0;
      } catch (a) {
        return !0;
      }
      return !1;
    },
    Xr = function () {
      for (
        var a = new Pr(60, 2),
          b = he(document, function (a) {
            return (
              ("INPUT" == a.tagName || "TEXTAREA" == a.tagName) && "" != a.value
            );
          }),
          c = 0,
          d = 0;
        d < b.length && 20 > c;
        d++
      )
        a.add(b[d].name) && c++;
      return a.toString();
    };
  function Yr(a, b) {
    try {
      return a[Zr(b)];
    } catch (c) {
      return null;
    }
  }
  function $r(a) {
    try {
      return a[Zr("175206285a0d021a170b714d210f1758")].bind(a);
    } catch (b) {
      return null;
    }
  }
  function Zr(a) {
    return tb(ub(rb(a), Or.slice(0, rb(a).length)));
  }
  function Vr(a) {
    try {
      return a.toString().slice(0, 100);
    } catch (b) {
      return "null";
    }
  }
  var as = function () {
      return (
        "complete" == document.readyState ||
        ("interactive" == document.readyState && !D)
      );
    },
    cs = function () {
      var a = bs;
      if (as()) a();
      else {
        var b = !1,
          c = function () {
            b || ((b = !0), a());
          };
        window.addEventListener
          ? (window.addEventListener("load", c, !1),
            window.addEventListener("DOMContentLoaded", c, !1))
          : window.attachEvent &&
            (window.attachEvent("onreadystatechange", function () {
              as() && c();
            }),
            window.attachEvent("onload", c));
      }
    };
  var es = function (a, b) {
      this.aa = new zr(b);
      var c = window.___grecaptcha_cfg;
      this.id = this.aa.get(vr) ? 1e5 + c.Ce++ : c.count++;
      this.hb = this.Oa = a;
      if (this.aa.has(mr)) {
        c = ds(this.aa.get(mr));
        if (!c) throw Error("The bind parameter must be an element or id");
        this.hb = c;
      }
      this.l = null;
      this.A = !1;
      this.F = 0;
      this.w = null;
      this.H = 0;
      this.o = null;
      this.B = Tf();
    },
    fs = function (a) {
      return a.aa.has(ur) ? Math.max(0, Br(a.aa)) : 0;
    },
    hs = function (a) {
      var b = new fk();
      b.add("k", Ar(a.aa, dr));
      a.aa.has(or) && b.add("stoken", Ar(a.aa, or));
      b.add("hl", "en");
      b.add("v", "v1528855115741");
      b.add("t", z() - a.H);
      gs() && b.add("ff", !0);
      return an("api/fallback") + "?" + b.toString();
    },
    is = function (a, b) {
      var c = new fk();
      c.add("ar", b.toString());
      c.B(Dr(a.aa));
      return bn("api2/anchor", c);
    },
    ks = function (a) {
      a.A || (Xd(a.Oa), a.l.ca(hs(a), js(a.id)), (a.A = !0));
    },
    ms = function (a) {
      ae(a.Oa) && a.Eb();
      a.l.render(is(a, 1), js(a.id), String(fs(a)), Ar(a.aa, nr));
      Eo(
        Ho(a.o, a.l.o),
        {
          b: a.te,
          j: a.ne,
          e: a.Jd,
          d: a.Kd,
          i: a.we,
          m: a.le,
          a: a.ue,
          f: a.se,
        },
        a,
      );
      if (wr(a.aa) && a.hb != a.Oa) {
        var b = function () {
          Nh(a.hb, !1);
        };
        Ye(
          a.hb,
          ["click", "submit"],
          function (a) {
            a.preventDefault();
            Nh(this.hb, !0);
            ls(this).then(b, b);
          },
          !1,
          a,
        );
        b();
      }
      a.w = Q(y(a.D, a), 2e4);
    };
  es.prototype.D = function () {
    this.A || (this.F++, 2 <= this.F ? ks(this) : ms(this));
  };
  var ns = function (a, b) {
    b.l.tabindex = String(fs(a));
    b.l.src = bn("api2/bframe", new fk(b.l.query));
    Xq(a.l, b.l, b.w, b.o);
    Ye(
      ae(a.l.l),
      "click",
      function () {
        this.Jd(new Hn(!1));
      },
      !1,
      a,
    );
  };
  n = es.prototype;
  n.te = function () {
    this.A = !0;
    fg(this.w);
    this.w = null;
    br(this.l);
    Ho(this.o, this.l.o);
    this.B.resolve();
  };
  n.ne = function (a) {
    this.A = !0;
    fg(this.w);
    this.w = null;
    a = a && 2 == a.errorCode;
    this.aa.has(tr)
      ? Cr(this.aa, tr, !0)()
      : a &&
        alert("Cannot contact reCAPTCHA. Check your connection and try again.");
    a && $q(this.l, !1);
  };
  n.Kd = function (a) {
    (os(this.id).value = a.response) &&
      this.aa.has(rr) &&
      Cr(this.aa, rr, !0)(a.response);
  };
  n.we = function () {
    var a = this;
    os(this.id).value = "";
    this.aa.has(sr) && Cr(this.aa, sr, !0)();
    this.Eb();
    ps(this);
    qs(this);
    this.B.l.then(function () {
      return X(a.o, "b", "i");
    });
  };
  n.le = function () {
    this.l.o.src = is(this, 2);
  };
  n.Jd = function (a) {
    $q(this.l, a.l, a.o);
    var b = Uq();
    b.width -= 20;
    X(this.o, "b", "h", new Hn(a.l, b));
  };
  n.se = function (a) {
    br(this.l);
    ns(this, a);
  };
  n.ue = function (a) {
    var b = document.querySelectorAll(Zr("4a5f1d1b510b"));
    var c = Ur(b[b.length - 1]);
    b = Uq();
    b.width -= 20;
    var d = a.l,
      e = [Kd("HEAD")[0], Kd("BODY")[0]];
    a = he(e[1], mf);
    for (var f = 0; f < d.length; f++) e.push(a[d[f]]);
    a = [];
    for (f = 0; f < e.length; f++) {
      var g = he(e[f], Rr),
        l = new Pr(240, 7);
      a: {
        var m = d;
        var t = [0, 0];
        if (Ja(m) && Ja(t) && m.length == t.length) {
          for (var E = m.length, H = mb, Lb = 0; Lb < E; Lb++)
            if (!H(m[Lb], t[Lb])) {
              m = !1;
              break a;
            }
          m = !0;
        } else m = !1;
      }
      m || l.add(Array.prototype.join.call(d, ""));
      for (t = m = 0; t < g.length && 25 > m; t++) l.add("" + ln(g[t])) && m++;
      a.push(l.toString());
    }
    d = new Dn();
    e = Vr(Yr(document, "1c58110c40101f1d"));
    J(d, 1, e);
    J(d, 21, c);
    J(d, 2, Wr());
    c = (c = (Cr(this.aa, rr) + "").match(Sr))
      ? Tr(c[1].replace(/\s/g, ""))
      : "";
    J(d, 3, c);
    a: {
      c = he(document, mf);
      for (e = 0; e < c.length; e++)
        if (c[e].src && $m().test(c[e].src)) {
          c = e;
          break a;
        }
      c = -1;
    }
    J(d, 4, c);
    c = new Pr(60, 2);
    e = document.cookie.split(";");
    for (g = f = 0; g < e.length && 20 > f; g++)
      c.add(e[g].split("=")[0].trim()) && f++;
    J(d, 7, c.toString());
    c = Vr(Yr(document, "02521408460b1501"));
    J(d, 8, c);
    c = this.Oa;
    for (e = 0; (c = ce(c)); ) e++;
    J(d, 9, e);
    c = Xr();
    J(d, 10, c);
    c = Ur(Yr(document, "11540604421c351f1715565a01"));
    J(d, 11, c);
    c = Yr(N(), "0052000b5b0b1d121c1b56");
    var La;
    $r(c) &&
      (c = $r(c)(Zr("1e5604045318041a1d16"))) &&
      c[0] &&
      (La = Yr(c[0], "1e520a197c1600230017475b16190b"));
    J(d, 13, Vr(La));
    c = Yr(Yr(N(), "0052000b5b0b1d121c1b56"), "045e1f045a1e");
    La = Yr(c, "05591e02551d35051716476701171549");
    c = Yr(c, "05591e02551d3505171647711b12");
    J(d, 14, 0 < La ? c - La : -1);
    c = Yr(Yr(N(), "0052000b5b0b1d121c1b56"), "045e1f045a1e");
    La = Yr(c, "14581f0c5d173c1c1d1346442602064f36");
    c = Yr(c, "14581f0c5d173c1c1d134644301803");
    J(d, 15, 0 < La ? c - La : -1);
    La = Yr(Yr(N(), "0052000b5b0b1d121c1b56"), "1e5604045318041a1d16");
    J(d, 16, La ? La.type : -1);
    J(d, 20, Qd(document).J);
    J(d, 17, a || []);
    return new En(b, null, d);
  };
  var qs = function (a) {
      a.H = z();
      a.o = new Ao();
      a.l = wr(a.aa) ? new Mr(a.Oa, Ar(a.aa, pr)) : new Fr(a.Oa);
      a.l.w = Oi(a.hb);
      gs() ? ks(a) : ms(a);
    },
    ss = function (a, b, c) {
      b = void 0 === b ? {} : b;
      c = void 0 === c ? !0 : c;
      (x(a) && 1 == a.nodeType) ||
        !x(a) ||
        ((b = a),
        (a = Vd(document, "DIV")),
        document.body.appendChild(a),
        (b[nr.getName()] = "invisible"));
      a = ds(a);
      if (!a)
        throw Error("reCAPTCHA placeholder element must be an element or id");
      if (c) {
        c = a;
        var d = c.getAttribute("data-sitekey"),
          e = c.getAttribute("data-type"),
          f = c.getAttribute("data-theme"),
          g = c.getAttribute("data-size"),
          l = c.getAttribute("data-tabindex"),
          m = c.getAttribute("data-stoken"),
          t = c.getAttribute("data-bind"),
          E = c.getAttribute("data-preload"),
          H = c.getAttribute("data-badge"),
          Lb = c.getAttribute("data-s"),
          La = c.getAttribute("data-pool"),
          no = c.getAttribute("data-content-binding"),
          Fg = c.getAttribute("data-action");
        d = {
          sitekey: d,
          type: e,
          theme: f,
          size: g,
          tabindex: l,
          stoken: m,
          bind: t,
          preload: E,
          badge: H,
          s: Lb,
          pool: La,
          "content-binding": no,
          action: Fg,
        };
        (e = c.getAttribute("data-callback")) && (d.callback = e);
        (e = c.getAttribute("data-expired-callback")) &&
          (d["expired-callback"] = e);
        (c = c.getAttribute("data-error-callback")) &&
          (d["error-callback"] = c);
        c = d;
        b && Yb(c, b);
      } else c = b;
      if (rs(a))
        throw Error("reCAPTCHA has already been rendered in this element");
      if (
        "BUTTON" == a.tagName ||
        ("INPUT" == a.tagName && ("submit" == a.type || "button" == a.type))
      )
        (c[mr.getName()] = a),
          (b = Vd(document, "DIV")),
          a.parentNode.insertBefore(b, a),
          (a = b);
      if (0 != Zd(a).length)
        throw Error("reCAPTCHA placeholder element must be empty");
      if (!c || !x(c)) throw Error("Widget parameters should be an object");
      b = new es(a, c);
      qs(b);
      window.___grecaptcha_cfg.clients[b.id] = b;
      return b.id;
    },
    rs = function (a) {
      return Object.values(window.___grecaptcha_cfg.clients).some(function (b) {
        return b.hb == a;
      });
    },
    ds = function (a) {
      var b = null;
      "string" === typeof a
        ? (b = Jd(document, a))
        : x(a) && 1 == a.nodeType && (b = a);
      return b;
    },
    ts = function () {
      Array.from(ab("g-recaptcha"))
        .filter(function (a) {
          return !rs(a);
        })
        .forEach(function (a) {
          return ss(a, {}, !0);
        });
    },
    ws = function (a, b) {
      a = void 0 === a ? us() : a;
      b = void 0 === b ? {} : b;
      if (x(a)) {
        b = a;
        var c = us();
      } else if (r(a) && /[^0-9]/.test(a)) {
        if (((c = window.___grecaptcha_cfg.qd[a]), null == c))
          throw Error("Invalid site key or not loaded in api.js: " + a);
      } else c = a;
      var d = window.___grecaptcha_cfg.clients[c];
      if (!d) throw Error("Invalid reCAPTCHA client id: " + c);
      if (!wr(d.aa))
        throw Error("grecaptcha.execute only works with invisible reCAPTCHA.");
      c = ka(Object.keys(b));
      for (var e = c.next(); !e.done; e = c.next())
        if (e.value != qr.getName())
          throw Error("grecaptcha.execute only takes the 'action' parameter.");
      return vs(ls(d, b));
    },
    ls = function (a, b) {
      b = void 0 === b ? {} : b;
      var c = a.B.l
        .then(function () {
          return a.o.get("b", "e", new Hn(!0, null, null, null, Dr(a.aa, b)));
        })
        .then(function (b) {
          return b ? (a.Kd(b), b.response) : null;
        });
      Vf(c, function (b) {
        r(b) || (b = void 0);
        a.aa.has(tr) ? Cr(a.aa, tr, !0)(b) : b && console.error(b);
      });
      return c;
    },
    xs = function (a, b) {
      a = void 0 === a ? us() : a;
      var c = window.___grecaptcha_cfg.clients[a];
      if (!c) throw Error("Invalid reCAPTCHA client id: " + a);
      b && (c.aa = new zr(b));
      c.Eb();
      ps(c);
      qs(c);
    },
    ps = function (a) {
      a.F = 0;
      a.A = !1;
      se(a.o);
      a.o = null;
      se(a.l);
      a.l = null;
    };
  es.prototype.Eb = function () {
    fg(this.w);
    this.w = null;
    Xd(this.Oa);
    this.B = Tf();
  };
  var ys = function (a) {
      a = void 0 === a ? us() : a;
      var b = window.___grecaptcha_cfg.clients[a];
      if (!b) throw Error("Invalid reCAPTCHA client id: " + a);
      return os(b.id).value;
    },
    os = function (a) {
      var b = Jd(document, js(a));
      if (!b) throw Error("reCAPTCHA client has been deleted: " + a);
      return b;
    },
    us = function () {
      for (var a = 0; a < window.___grecaptcha_cfg.count; a++)
        if (document.body.contains(window.___grecaptcha_cfg.clients[a].Oa))
          return a;
      throw Error("No reCAPTCHA clients exist.");
    },
    gs = function () {
      return !!window.___grecaptcha_cfg.fallback;
    },
    bs = function () {
      Ta("grecaptcha.ready", function (a) {
        Q(a, 0);
      });
      var a = window.___grecaptcha_cfg.render;
      window.___grecaptcha_cfg.render = [];
      v(a) || (a = [a]);
      a = ka(a);
      for (var b = a.next(); !b.done; b = a.next())
        if (((b = b.value), "onload" == b)) ts();
        else if ("explicit" != b) {
          var c = ss({ sitekey: b, isolated: !0 });
          p.window.___grecaptcha_cfg.qd[b] = c;
        }
      a = window.___grecaptcha_cfg.onload;
      window.___grecaptcha_cfg.onload = [];
      v(a) || (a = [a]);
      b = window.___grecaptcha_cfg.fns;
      window.___grecaptcha_cfg.fns = [];
      b && v(b) && (a = a.concat(b));
      a = ka(a);
      for (b = a.next(); !b.done; b = a.next())
        if (((b = b.value), w(window[b]))) window[b]();
        else
          w(b)
            ? b()
            : b &&
              console.log(
                "reCAPTCHA couldn't find user-provided function: " + b,
              );
    };
  function js(a) {
    return "g-recaptcha-response" + (a ? "-" + a : "");
  }
  function vs(a) {
    return {
      then: function (b, c) {
        return vs(a.then(b, c));
      },
    };
  }
  p.window &&
    p.window.__google_recaptcha_client &&
    (p.window.___grecaptcha_cfg || Ta("___grecaptcha_cfg", {}),
    p.window.___grecaptcha_cfg.clients ||
      ((p.window.___grecaptcha_cfg.count = 0),
      (p.window.___grecaptcha_cfg.Ce = 0),
      (p.window.___grecaptcha_cfg.clients = {}),
      (p.window.___grecaptcha_cfg.qd = {})),
    Ta("grecaptcha.render", ss),
    Ta("grecaptcha.reset", xs),
    Ta("grecaptcha.getResponse", ys),
    Ta("grecaptcha.execute", ws),
    cs());
  if (p.window && p.window.test_signature) {
    var zs = p.window.document.getElementById("recaptcha-widget-signature");
    if (zs) {
      var As = p.window.document,
        Bs = As.createElement("div");
      Bs.setAttribute("id", "result-holder");
      var Cs = As.createTextNode(nn());
      zs.appendChild(Bs);
      Bs.appendChild(Cs);
    }
  }
  var Ds = function () {
    var a = N().location.hash.slice(1);
    this.l = null;
    this.w = a;
    this.o = null;
  };
  n = Ds.prototype;
  n.Od = function (a, b, c) {
    this.l = new Ao();
    Eo(Go(this.l, "b", null, an("b")), { e: y(this.ve, this, a), g: b, i: c });
    for (a = 0; a < N().parent.frames.length; a++)
      X(
        Go(this.l, "b_" + a, N().parent.frames[a], "*"),
        "b_" + a,
        "c",
        new Jn(this.w),
      );
  };
  n.ve = function (a, b, c, d) {
    this.o || ((this.o = d), Go(this.l, "b", d, an("b")));
    a(b);
  };
  n.Ud = function (a, b) {
    return this.l.get("b", "g", new Hn(a, null, b));
  };
  n.Td = function (a) {
    this.l.get("b", "g", new Hn(!0, null, a, !0));
  };
  n.Pd = function (a, b) {
    X(this.l, "b", "d", new Fn(a, b));
  };
  n.Sd = function () {
    X(this.l, "b", "i");
  };
  n.kc = function (a) {
    X(this.l, "b", "j", new Kn(a));
  };
  n.Zc = h();
  n.Bc = ba("anchor");
  var Es = function (a, b, c, d) {
    Nm.call(this, a, c);
    this.l = d;
    this.B = null;
    this.o = "uninitialized";
    this.H = this.D = 0;
    this.F = K(b, so, 5);
  };
  A(Es, Nm);
  Es.prototype.la = k("B");
  var Gs = function (a) {
    G(this, a, "dresp", Fs);
  };
  A(Gs, F);
  var Fs = [2, 4];
  Gs.l = "dresp";
  Gs.prototype.la = function () {
    return I(this, 1);
  };
  Gs.prototype.Ba = function () {
    return I(this, 3);
  };
  var Hs = function (a, b) {
    Mn.call(this, "/recaptcha/api2/replaceimage", Nn(Gs), "POST");
    Ln(this, "c", a);
    Ln(this, "ds", Tg(b));
  };
  A(Hs, Mn);
  var Is = function (a) {
    G(this, a, "uvresp", null);
  };
  A(Is, F);
  Is.l = "uvresp";
  Is.prototype.Wb = function () {
    return I(this, 3);
  };
  Is.prototype.setTimeout = function (a) {
    J(this, 3, a);
  };
  Is.prototype.Ba = function () {
    return I(this, 4);
  };
  var Js = function (a, b, c, d, e, f, g) {
    Mn.call(this, "/recaptcha/api2/userverify", Nn(Is), "POST");
    Ln(this, "c", a);
    Ln(this, "response", b);
    On(this, "t", c);
    On(this, "ct", d);
    On(this, "bg", e);
    On(this, "dg", f);
    On(this, "mp", g);
  };
  A(Js, Mn);
  var Ls = function (a, b) {
    Xh.call(this);
    this.T = a;
    te(this, this.T);
    this.G = b;
    te(this, this.G);
    this.o = this.l = null;
    Ks(this);
  };
  A(Ls, Xh);
  var Ks = function (a) {
      R(a, a.T, "c", function () {
        Ms(this, !0);
      });
      R(a, a.T, "d", function () {
        var a = Ns(this.T);
        0 >= a.width && 0 >= a.height ? Ms(this, !1) : this.G.l.Td(a);
      });
      R(a, a.T, "e", function () {
        Ms(this, !1);
      });
      R(a, a.T, "g", function () {
        Os(this, "r");
      });
      R(a, a.T, "i", function () {
        Os(this, "i");
      });
      R(a, a.T, "h", function () {
        Os(this, "a");
      });
      R(a, a.T, "f", function () {
        Ps(
          this,
          new Hs(this.G.la(), gq(this.T.ha)),
          y(function (a) {
            if (null != a.Ba()) this.$b();
            else {
              a.la() && Qs(this, a.la());
              var b = this.T.ha;
              b.vb = !1;
              var d = [];
              I(a, 1);
              var e = Sc(a, 2);
              I(a, 3);
              Rc(Tc(a, qo, 4), ro, void 0);
              e = ka(e);
              for (var f = e.next(); !f.done; f = e.next())
                (f = f.value), d.push(b.Ua(a.la(), f));
              b.Oc(d, Tc(a, qo, 4));
              fq(b);
            }
          }, this),
        );
      });
      Zh(a, a.T, "k", a.U, void 0);
    },
    Rs = function (a, b) {
      b && Qs(a, b);
      a.G.l.Od(y(a.H, a), y(a.D, a), y(a.S, a));
    };
  Ls.prototype.H = function (a) {
    a.Sb && (this.l = a.Sb);
    switch (this.G.o) {
      case "uninitialized":
        Os(this, "fi", a.w);
        break;
      case "timed-out":
        Os(this, "t");
        break;
      default:
        Ms(this, a.l);
    }
  };
  Ls.prototype.D = function (a) {
    a && (this.T.ha.ga(a.l), (document.body.style.height = "100%"));
  };
  Ls.prototype.S = function (a) {
    this.G.la() == a.response && Ss(this);
  };
  var Ss = function (a) {
      a.G.o = "timed-out";
    },
    Ms = function (a, b) {
      a.G.l.Ud(b, Ns(a.T)).then(function () {
        a.T.ha && (a.T.ha.Y = a.l);
      });
    },
    Os = function (a, b, c) {
      if ("fi" == b || "t" == b) a.G.D = z();
      a.G.H = z();
      fg(a.o);
      if ("uninitialized" == a.G.o && null != a.G.F) Ts(a, a.G.F);
      else {
        var d = y(function (a) {
          Mm(this.G.w, a).then(
            function (a) {
              Ts(this, a, !1);
            },
            this.$b,
            this,
          );
        }, a);
        c
          ? d(new to(b, null, null, c))
          : "embeddable" == a.G.l.Bc()
          ? a.G.l.Zc(
              y(function (a, c) {
                d(new to(b, this.G.la(), null, { mp: c }, a));
              }, a),
              a.G.la(),
              !1,
            )
          : ((c = y(function (a) {
              d(new to(b, this.G.la(), a));
            }, a)),
            a.G.A.execute(c, c));
      }
    },
    Ts = function (a, b, c) {
      if (null != b.Ba()) a.G.l.kc(b.Ba());
      else {
        Qs(a, b.la());
        a.G.o = "active";
        if (I(b, 8)) {
          var d = I(b, 8);
          pn(on("cbr"), d, 1);
        }
        Us(a.T, I(b, 5));
        a.T.ha.Y = a.l;
        pp(a.T.ha, a.G.la(), K(b, qo, 4), !!c);
        c = K(b, Im, 7);
        a.G.A.set(c);
        a.G.A.load();
        a.o = Q(a.w, 1e3 * b.Wb(), a);
      }
    },
    Ps = function (a, b, c) {
      Mm(a.G.w, b).then(c, a.$b, a);
    };
  Ls.prototype.w = function () {
    "active" == this.G.o && (Ss(this), this.G.l.Sd(), this.T.ha.ga(!1));
  };
  Ls.prototype.U = function () {
    fg(this.o);
    var a = y(this.F, this);
    "embeddable" == this.G.l.Bc()
      ? this.G.l.Zc(y(Qa(a, null), this), this.G.la(), !0)
      : this.G.A.execute(a, a);
  };
  Ls.prototype.F = function (a, b, c) {
    var d = this.G.la();
    var e = this.T.ha;
    e.Ca();
    e = e.response;
    Tb(e) ? (e = "") : ((e = Tg(e)), (e = Lc(ob(e), !0)));
    var f = this.G;
    f = z() - f.D;
    var g = this.G;
    g = z() - g.H;
    a = new Js(d, e, f, g, a, b, c);
    Mm(this.G.w, a).then(this.A, this.$b, this);
  };
  Ls.prototype.A = function (a) {
    if (null != a.Ba()) Ss(this), this.G.l.kc(a.Ba());
    else {
      var b = I(a, 1);
      Qs(this, b);
      I(a, 2)
        ? ((a = a.Wb()), this.G.l.Pd(b, a), Ms(this, !1))
        : Ts(this, K(a, so, 7), "nocaptcha" != this.T.ha.getName());
    }
  };
  var Qs = function (a, b) {
    a.G.B = b;
    a.T.l.value = b;
  };
  Ls.prototype.$b = function () {
    this.G.o = "uninitialized";
    this.G.l.kc(2);
  };
  Ta("recaptcha.frame.embeddable.ErrorRender.errorRender", function (a, b) {
    if (window.RecaptchaEmbedder) RecaptchaEmbedder.onError(a, b);
  });
  var Vs = function () {
    this.l = this.w = this.o = null;
    Ta("RecaptchaMFrame.show", y(this.Le, this));
    Ta("RecaptchaMFrame.shown", y(this.Pe, this));
    Ta("RecaptchaMFrame.token", y(this.ge, this));
  };
  n = Vs.prototype;
  n.Le = function (a, b) {
    this.o(new Hn(!0, new L(a - 20, b)));
  };
  n.Pe = function (a, b, c) {
    this.w(new Hn(q(c) ? c : !0, new L(a, b)));
  };
  n.ge = function (a, b) {
    this.l(a, b);
  };
  n.Od = function (a, b) {
    this.o = a;
    this.w = b;
    window.RecaptchaEmbedder &&
      RecaptchaEmbedder.challengeReady &&
      RecaptchaEmbedder.challengeReady();
  };
  n.Ud = function (a, b) {
    if (window.RecaptchaEmbedder && RecaptchaEmbedder.onShow)
      RecaptchaEmbedder.onShow(a, b.width, b.height);
    return Promise.resolve(new Hn(a, null, b));
  };
  n.Td = function (a) {
    if (window.RecaptchaEmbedder && RecaptchaEmbedder.onResize)
      RecaptchaEmbedder.onResize(a.width, a.height);
    Promise.resolve(new Hn(!0, null, a));
  };
  n.Pd = function (a) {
    window.RecaptchaEmbedder &&
      RecaptchaEmbedder.verifyCallback &&
      RecaptchaEmbedder.verifyCallback(a);
  };
  n.Sd = function () {
    if (window.RecaptchaEmbedder && RecaptchaEmbedder.onChallengeExpired)
      RecaptchaEmbedder.onChallengeExpired();
  };
  n.kc = function (a) {
    if (window.RecaptchaEmbedder && RecaptchaEmbedder.onError)
      RecaptchaEmbedder.onError(a, !0);
  };
  n.Zc = function (a, b, c) {
    this.l = a;
    window.RecaptchaEmbedder &&
      RecaptchaEmbedder.requestToken &&
      RecaptchaEmbedder.requestToken(b, c);
  };
  n.Bc = ba("embeddable");
  var Ws = function (a) {
    Ok.call(this, a);
    this.ha = null;
    this.l = Jd(document, "recaptcha-token");
  };
  A(Ws, Ok);
  Ws.prototype.la = function () {
    return this.l.value;
  };
  var Ns = function (a) {
      return a.ha ? Fd(a.ha.B) : new L(0, 0);
    },
    Us = function (a, b) {
      a.ha && (a.removeChild(a.ha, !0), se(a.ha));
      a.ha = Jq(b);
      Uk(a, a.ha);
      a.ha.render(a.C());
      Pi(a.C(), 0);
      dn(a.C()).then(
        y(function () {
          Pi(this.C(), "");
          this.dispatchEvent("c");
        }, a),
      );
    };
  var Xs = function (a) {
    G(this, a, "finput", null);
  };
  A(Xs, F);
  Xs.l = "finput";
  var Ys = function (a) {
    im(gm.Ga(), K(a, fm, 2));
    var b = new Ws();
    b.render(document.body);
    var c = new Km();
    c = new Es(c, a, new Jm(), new Vs());
    this.l = new Ls(b, c);
    Rs(this.l, I(a, 1));
  };
  Ta("recaptcha.frame.embeddable.Main.init", function (a) {
    a = new Xs(JSON.parse(a));
    new Ys(a);
  });
  var Zs = function (a) {
    im(gm.Ga(), K(a, fm, 2));
    jm("JS_THIRDEYE") && Fh();
    var b = new Ws();
    b.render(document.body);
    var c = new Km();
    a = new Es(c, a, new Jm(), new Ds());
    this.l = new Ls(b, a);
  };
  Ta("recaptcha.frame.Main.init", function (a) {
    a = new Xs(JSON.parse(a));
    Rs(new Zs(a).l, I(a, 1));
  });
}).call(this);
