var h = this,
  q = function (a, c) {
    a = a.split(".");
    var b = h;
    a[0] in b ||
      "undefined" == typeof b.execScript ||
      b.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === c
        ? (b = b[d] && b[d] !== Object.prototype[d] ? b[d] : (b[d] = {}))
        : (b[d] = c);
  },
  r = function (a, c) {
    function b() {}
    b.prototype = c.prototype;
    a.o = c.prototype;
    a.prototype = new b();
    a.prototype.constructor = a;
    a.m = function (a, b, f) {
      for (
        var e = Array(arguments.length - 2), d = 2;
        d < arguments.length;
        d++
      )
        e[d - 2] = arguments[d];
      return c.prototype[b].apply(a, e);
    };
  };
var t = function (a) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, t);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
r(t, Error);
t.prototype.name = "CustomError";
var u = function (a, c) {
  a = a.split("%s");
  for (var b = "", d = a.length - 1, e = 0; e < d; e++)
    b += a[e] + (e < c.length ? c[e] : "%s");
  t.call(this, b + a[d]);
};
r(u, t);
u.prototype.name = "AssertionError";
var v = function (a, c, b) {
  if (!a) {
    var d = "Assertion failed";
    if (c) {
      d += ": " + c;
      var e = Array.prototype.slice.call(arguments, 2);
    }
    throw new u("" + d, e || []);
  }
};
var w = Array.prototype.forEach
  ? function (a, c) {
      v(null != a.length);
      Array.prototype.forEach.call(a, c, void 0);
    }
  : function (a, c) {
      for (
        var b = a.length, d = "string" == typeof a ? a.split("") : a, e = 0;
        e < b;
        e++
      )
        e in d && c.call(void 0, d[e], e, a);
    };
var x;
a: {
  var y = h.navigator;
  if (y) {
    var z = y.userAgent;
    if (z) {
      x = z;
      break a;
    }
  }
  x = "";
}
var A = function (a) {
  return -1 != x.indexOf(a);
};
var C = -1 != x.toLowerCase().indexOf("webkit") && !A("Edge") && A("Mobile");
var D =
  A("Safari") &&
  !(
    ((A("Chrome") || A("CriOS")) && !A("Edge")) ||
    A("Coast") ||
    A("Opera") ||
    A("Edge") ||
    A("Silk") ||
    A("Android")
  ) &&
  !((A("iPhone") && !A("iPod") && !A("iPad")) || A("iPad") || A("iPod"));
var F = function (a) {
    var c = window;
    if (C && D && c) {
      c.focus();
      var b = 0,
        d = null;
      d = c.setInterval(function () {
        a.closed || 5 == b ? (c.clearInterval(d), E(a)) : (a.close(), b++);
      }, 150);
    } else a.close(), E(a);
  },
  E = function (a) {
    if (!a.closed && a.document && a.document.body)
      if (
        ((a = a.document.body),
        v(
          null != a,
          "goog.dom.setTextContent expects a non-null value for node",
        ),
        "textContent" in a)
      )
        a.textContent = "Please close this window.";
      else if (3 == a.nodeType) a.data = "Please close this window.";
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
        a.firstChild.data = "Please close this window.";
      } else {
        for (var c; (c = a.firstChild); ) a.removeChild(c);
        v(a, "Node cannot be null or undefined.");
        a.appendChild(
          (9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(
            "Please close this window.",
          ),
        );
      }
  };
var G = function (a) {
  if (!a) return "";
  a = a.split("#")[0].split("?")[0];
  a = a.toLowerCase();
  0 == a.indexOf("//") && (a = window.location.protocol + a);
  /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
  var c = a.substring(a.indexOf("://") + 3),
    b = c.indexOf("/");
  -1 != b && (c = c.substring(0, b));
  a = a.substring(0, a.indexOf("://"));
  if (
    "http" !== a &&
    "https" !== a &&
    "chrome-extension" !== a &&
    "file" !== a &&
    "android-app" !== a &&
    "chrome-search" !== a &&
    "app" !== a
  )
    throw Error("Invalid URI scheme in origin: " + a);
  b = "";
  var d = c.indexOf(":");
  if (-1 != d) {
    var e = c.substring(d + 1);
    c = c.substring(0, d);
    if (("http" === a && "80" !== e) || ("https" === a && "443" !== e))
      b = ":" + e;
  }
  return a + "://" + c + b;
};
var H = function () {
  function a() {
    e[0] = 1732584193;
    e[1] = 4023233417;
    e[2] = 2562383102;
    e[3] = 271733878;
    e[4] = 3285377520;
    k = g = 0;
  }
  function c(a) {
    for (var c = m, b = 0; 64 > b; b += 4)
      c[b / 4] = (a[b] << 24) | (a[b + 1] << 16) | (a[b + 2] << 8) | a[b + 3];
    for (b = 16; 80 > b; b++)
      (a = c[b - 3] ^ c[b - 8] ^ c[b - 14] ^ c[b - 16]),
        (c[b] = ((a << 1) | (a >>> 31)) & 4294967295);
    a = e[0];
    var d = e[1],
      f = e[2],
      l = e[3],
      g = e[4];
    for (b = 0; 80 > b; b++) {
      if (40 > b)
        if (20 > b) {
          var k = l ^ (d & (f ^ l));
          var n = 1518500249;
        } else (k = d ^ f ^ l), (n = 1859775393);
      else
        60 > b
          ? ((k = (d & f) | (l & (d | f))), (n = 2400959708))
          : ((k = d ^ f ^ l), (n = 3395469782));
      k =
        ((((a << 5) | (a >>> 27)) & 4294967295) + k + g + n + c[b]) &
        4294967295;
      g = l;
      l = f;
      f = ((d << 30) | (d >>> 2)) & 4294967295;
      d = a;
      a = k;
    }
    e[0] = (e[0] + a) & 4294967295;
    e[1] = (e[1] + d) & 4294967295;
    e[2] = (e[2] + f) & 4294967295;
    e[3] = (e[3] + l) & 4294967295;
    e[4] = (e[4] + g) & 4294967295;
  }
  function b(a, b) {
    if ("string" === typeof a) {
      a = unescape(encodeURIComponent(a));
      for (var e = [], d = 0, l = a.length; d < l; ++d) e.push(a.charCodeAt(d));
      a = e;
    }
    b || (b = a.length);
    e = 0;
    if (0 == g)
      for (; e + 64 < b; ) c(a.slice(e, e + 64)), (e += 64), (k += 64);
    for (; e < b; )
      if (((f[g++] = a[e++]), k++, 64 == g))
        for (g = 0, c(f); e + 64 < b; )
          c(a.slice(e, e + 64)), (e += 64), (k += 64);
  }
  function d() {
    var a = [],
      d = 8 * k;
    56 > g ? b(n, 56 - g) : b(n, 64 - (g - 56));
    for (var p = 63; 56 <= p; p--) (f[p] = d & 255), (d >>>= 8);
    c(f);
    for (p = d = 0; 5 > p; p++)
      for (var m = 24; 0 <= m; m -= 8) a[d++] = (e[p] >> m) & 255;
    return a;
  }
  for (var e = [], f = [], m = [], n = [128], B = 1; 64 > B; ++B) n[B] = 0;
  var g, k;
  a();
  return {
    reset: a,
    update: b,
    digest: d,
    digestString: function () {
      for (var a = d(), b = "", c = 0; c < a.length; c++)
        b +=
          "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) +
          "0123456789ABCDEF".charAt(a[c] % 16);
      return b;
    },
  };
};
var aa = function (a, c, b) {
    var d = [];
    d = [c, a];
    w(b, function (a) {
      d.push(a);
    });
    return I(d.join(" "));
  },
  I = function (a) {
    var c = H();
    c.update(a);
    return c.digestString().toLowerCase();
  };
var J = function (a) {
    var c = a || [];
    a = [];
    for (var b = 0, d = c.length; b < d; ++b) {
      var e = String(c[b] || "");
      e && a.push(e);
    }
    if (2 > a.length) return null;
    c = a[0];
    b = gadgets.rpc.getOrigin(a[1]);
    if (b !== a[1]) return null;
    a = a.slice(2);
    return (
      ((a =
        (b && c ? ["session_state", aa(G(b), c, a || [])].join(" ") : null) ||
        "") &&
        a.substr(14)) ||
      null
    );
  },
  K = function (a, c, b) {
    this.i = String(a || "");
    this.f = String(c || "");
    this.a = String(b || "");
    this.b = {};
    this.j = this.l = this.g = this.h = "";
    this.c = null;
  };
K.prototype.evaluate = function () {
  var a = {},
    c = "";
  try {
    c = String(document.cookie || "");
  } catch (m) {}
  c = c.split("; ").join(";").split(";");
  for (var b = 0, d = c.length; b < d; ++b) {
    var e = c[b],
      f = e.indexOf("=");
    -1 != f ? (a[e.substr(0, f)] = e.substr(f + 1)) : (a[e] = null);
  }
  this.b = a;
  if (this.b.SID)
    if (
      ((this.f = this.f.split(".")[0].split("@")[0]),
      (this.g = String(
        this.b[0 == this.i.indexOf("https://") ? "SAPISID" : "APISID"] || "",
      )))
    )
      if (
        ((a =
          0 ==
          gadgets.rpc
            .getOrigin(String(window.location.href))
            .indexOf("https://")
            ? "SAPISID"
            : "APISID"),
        (this.h = String(this.b[a] || "")))
      ) {
        c = String(this.b.LSOLH || "").split(":");
        b = c.length;
        if (1 == b || 4 == b) this.l = c[0];
        if (3 == b || 4 == b)
          (a = String(c[b - 3] || "")),
            (c = String(c[b - 1] || "")),
            (b = this.h),
            a
              ? ((d = [a]), b && d.push(b), (b = I(d.join(" ")).substr(0, 4)))
              : (b = null),
            b === c && (this.j = a);
        this.a &&
          ((a = this.a.indexOf(".")),
          -1 != a &&
            ((a = this.a.substr(0, a) || ""),
            (this.a =
              a +
              "." +
              J([this.g, this.i, this.f, this.l, this.j, a]).substr(0, 4))));
        a = J([this.g, this.i, this.f, this.a]);
        this.a && (a = a + "." + this.a);
        this.c = a;
      } else this.c = "";
    else this.c = "";
};
var L = function (a, c, b) {
    a = new K(a, c, b);
    a.evaluate();
    return a;
  },
  N = function (a, c, b) {
    b = b || M(this);
    var d = null;
    if (a) {
      a = String(a);
      var e = a.indexOf(".");
      -1 != e && (d = a.substr(e + 1));
    }
    c = L(b, c, d).c;
    if (null == a || "" == a) a = c == a;
    else if (null == c || c.length != a.length) a = !1;
    else {
      d = b = 0;
      for (e = a.length; d < e; ++d) b |= a.charCodeAt(d) ^ c.charCodeAt(d);
      a = 0 == b;
    }
    return a;
  },
  O = function (a, c, b) {
    b = b || M(this);
    b = L(b);
    if (String(a) != b.c) throw Error("Unauthorized request");
    c = String(c);
    a = parseInt(c, 10);
    String(a) == c && 0 <= a
      ? (c = b.j)
        ? ((c = c.split("|")), (a = c.length <= a ? null : c[a] || null))
        : (a = null)
      : (a = null);
    return a;
  },
  M = function (a) {
    a = String(a.origin || "");
    if (!a) throw Error("RPC has no origin.");
    return a;
  };
q("checkSessionState", N);
q("getVersionInfo", O);
var P,
  Q,
  R,
  S,
  T,
  U,
  ba = window,
  V =
    (window.location.href || ba.location.href).match(
      /.*(\?|#|&)usegapi=([^&#]+)/,
    ) || [];
"1" === decodeURIComponent(V[V.length - 1] || "")
  ? ((R = function (a, c, b, d, e, f) {
      P.send(c, e, d, f || gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    }),
    (S = function (a, c) {
      P.register(a, c, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    }),
    (T = function (a) {
      var c = /^(?:https?:\/\/)?[0-9.\-A-Za-z]+(?::\d+)?/.exec(a);
      c = gapi.iframes.makeWhiteListIframesFilter([c ? c[0] : null]);
      R("..", "oauth2callback", gadgets.rpc.getAuthToken(".."), void 0, a, c);
    }),
    (Q = function () {
      ca();
    }),
    (U = function () {
      R("..", "oauth2relayReady", gadgets.rpc.getAuthToken(".."));
      S("check_session_state", da);
      S("get_versioninfo", ea);
    }))
  : ((R = function (a, c, b, d, e) {
      gadgets.rpc.call(a, c + ":" + b, d, e);
    }),
    (S = function (a, c) {
      gadgets.rpc.register(a, c);
    }),
    (T = function (a) {
      gadgets.rpc.getTargetOrigin("..") == gadgets.rpc.getOrigin(a) &&
        R("..", "oauth2callback", gadgets.rpc.getAuthToken(".."), void 0, a);
    }),
    (Q = function () {
      U();
    }),
    (U = function () {
      R("..", "oauth2relayReady", gadgets.rpc.getAuthToken(".."));
      S("check_session_state", N);
      S("get_versioninfo", O);
    }));
var ca = function () {
    var a = U;
    window.gapi.load("gapi.iframes", function () {
      P = gapi.iframes.getContext().getParentIframe();
      a();
    });
  },
  W = function (a) {
    window.setTimeout(function () {
      T(a);
    }, 1);
  },
  da = function (a) {
    if (a) {
      var c = a.session_state;
      var b = a.client_id;
    }
    return N(c, b, P.getOrigin());
  },
  ea = function (a) {
    return O(a.xapisidHash, a.sessionIndex, P.getOrigin());
  },
  X = !1,
  Y = !1,
  Z = function () {
    Y = !0;
    X && Q();
  };
q("oauth2callback", W);
q("oauth2verify", function (a, c) {
  var b = window.open("about:blank", a),
    d;
  if (b && !b.closed && (d = b.oauth2callbackUrl))
    return (
      (window.timeoutMap = window.timeoutMap || {}),
      (window.realSetTimeout = window.realSetTimeout || window.setTimeout),
      (window.setTimeout = function (a, c) {
        try {
          var e = a,
            d = !1;
          a = function () {
            if (!d) {
              d = !0;
              try {
                (window.timeoutMap[String(g)] = void 0),
                  delete window.timeoutMap[String(g)];
              } catch (k) {}
              return e.call(this);
            }
          };
          var f = b.setTimeout(a, c);
          var g = window.realSetTimeout(a, c);
          window.timeoutMap[String(g)] = f;
          return g;
        } catch (k) {}
        return window.realSetTimeout(a, c);
      }),
      (window.realClearTimeout =
        window.realClearTimeout || window.clearTimeout),
      (window.clearTimeout = function (a) {
        try {
          var c = window.timeoutMap[String(a)];
          c && b.clearTimeout(c);
        } catch (m) {}
        try {
          (window.timeoutMap[String(a)] = void 0),
            delete window.timeoutMap[String(a)];
        } catch (m) {}
        window.realClearTimeout(a);
      }),
      W(String(d)),
      "keep_open" != c && F(b),
      !0
    );
  b && !b.closed && F(b);
  return !1;
});
q("init", function () {
  X = !0;
  Y && Q();
});
window.addEventListener
  ? window.addEventListener("load", Z, !1)
  : window.attachEvent("onload", Z);
