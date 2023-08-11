/*!
 * ------------------------------------------- START OF THIRD PARTY NOTICE -----------------------------------------
 *
 * This file is based on or incorporates material from the projects listed below (Third Party IP). The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.
 *
 *   json2.js (2016-05-01)
 *   https://github.com/douglascrockford/JSON-js
 *   License: Public Domain
 *
 * Provided for Informational Purposes Only
 *
 * ----------------------------------------------- END OF THIRD PARTY NOTICE ------------------------------------------
 */
!(function (e) {
  function t(n) {
    if (i[n]) return i[n].exports;
    var a = (i[n] = { exports: {}, id: n, loaded: !1 });
    return e[n].call(a.exports, a, a.exports, t), (a.loaded = !0), a.exports;
  }
  var n = window.webpackJsonp;
  window.webpackJsonp = function (i, r) {
    for (var o, s, l = 0, c = []; l < i.length; l++)
      (s = i[l]), a[s] && c.push.apply(c, a[s]), (a[s] = 0);
    for (o in r) e[o] = r[o];
    for (n && n(i, r); c.length; ) c.shift().call(null, t);
  };
  var i = {},
    a = { 0: 0 };
  return (
    (a[1] = []),
    (a[2] = []),
    (a[3] = []),
    (t.e = function (e, n) {
      if (0 === a[e]) return n.call(null, t);
      if (void 0 !== a[e]) a[e].push(n);
      else {
        a[e] = [n];
        var i = document.getElementsByTagName("head")[0],
          r = document.createElement("script");
        (r.type = "text/javascript"),
          (r.charset = "utf-8"),
          (r.async = !0),
          (r.src =
            t.p +
            "ConvergedLogin_P" +
            ({ 1: "Wizard", 2: "Alt", 3: "ESTSLogin" }[e] || e) +
            ".js"),
          i.appendChild(r);
      }
    }),
    (t.m = e),
    (t.c = i),
    (t.p = ""),
    t(0)
  );
})([
  function (e, t, n) {
    function i(e) {
      s(e.Aj), o(e);
    }
    function a(e) {
      try {
        if (
          (top !== self && top.location.replace(self.location.href),
          2 === e.AB && e.urlFed)
        )
          return (
            r(e.urlFed, e.q, decodeURIComponent(b.extract("username")), e), !0
          );
        if (!_.enabled()) return (document.location = e.i), !0;
      } catch (t) {
        e.B = v.GenericError;
      }
      return !1;
    }
    function r(e, t, n, i) {
      var a = i.sFedQS;
      return (
        t === S.NothingChecked &&
          (a = b
            .appendOrReplace(
              "?" + a,
              "wctx",
              "LoginOptions%3D3%26" + b.extract("wctx", "?" + a),
            )
            .substr(1)),
        (e = b.appendOrReplace(
          e,
          "cbcxt",
          encodeURIComponent(decodeURIComponent(b.extract("cbcxt"))),
        )),
        (e = b.appendOrReplace(
          e,
          "vv",
          encodeURIComponent(decodeURIComponent(b.extract("cbcxt"))),
        )),
        (e = b.appendOrReplace(e, "username", encodeURIComponent(n))),
        (e = b.appendOrReplace(
          e,
          "mkt",
          encodeURIComponent(decodeURIComponent(b.extract("mkt"))),
        )),
        (e = b.appendOrReplace(
          e,
          "lc",
          encodeURIComponent(decodeURIComponent(b.extract("lc"))),
        )),
        document.location.replace(b.append(e, a)),
        !0
      );
    }
    function o(e) {
      if (
        e.z &&
        null !==
          new RegExp("Windows NT ([0-9]{1,}[.0-9]{0,})").exec(
            navigator.userAgent,
          ) &&
        parseFloat(RegExp.$1) < 6 &&
        h.getIEVersion() >= 7
      )
        try {
          var t = document.getElementById("ev");
          t.src = e.AH;
        } catch (n) {}
    }
    function s(e) {
      if (e) {
        var t = new Image();
        t.src = e;
      }
    }
    var l = window;
    (n.p = l.ServerData.a),
      (l.ServerData.urlImagePath = l.ServerData.a + "images/");
    var c = n(1),
      d = n(3),
      u = n(4),
      p = n(7),
      f = n(10),
      g = n(11),
      m = n(12),
      v = u.LoginMode,
      h = p.Helper,
      b = p.QueryString,
      _ = p.Cookies,
      S = g.LoginOption,
      y = !1;
    d.applyExtensions(c),
      c.utils.registerEventHandler(l, "load", function () {
        var e = l.ServerData;
        if (
          ((e.str = f.getStrings("str", e)),
          (e.html = f.getStrings("html", e)),
          !y && !a(e))
        )
          switch (((y = !0), e.B)) {
            case v.GenericError:
            case v.GenericErrorMobile:
            case v.GenericErrorHost:
            case v.SwitchUser:
            case v.SwitchUserMobile:
            case v.SwitchUserHost:
            case v.InviteBlocked:
            case v.ServiceBlocked:
            case v.IDPFailed:
            case v.HIP_Lockout:
            case v.HIP_LockoutMobile:
            case v.HIP_LockoutHost:
              n.e(2, function () {
                var t = n(361);
                (document.body.appendChild(
                  document.createElement("div"),
                ).innerHTML = n(362)),
                  c.applyBindings(new t(e)),
                  i(e);
              });
              break;
            default:
              (document.body.appendChild(
                document.createElement("div"),
              ).innerHTML = n(90)),
                c.applyBindings(new m(e)),
                i(e);
          }
      });
  },
  function (e, t, n) {
    (function (t) {
      e.exports = t.ko = n(2);
    }).call(
      t,
      (function () {
        return this;
      })(),
    );
  },
  function (e, t, n) {
    var i, a, r; /*!
     * Knockout JavaScript library v3.3.0
     * (c) Steven Sanderson - http://knockoutjs.com/
     * License: MIT (http://www.opensource.org/licenses/mit-license.php)
     */
    !(function () {
      !(function (o) {
        var s = this || (0, eval)("this"),
          l = s.document,
          c = s.navigator,
          d = s.jQuery,
          u = s.JSON;
        !(function (o) {
          (a = [t, n]),
            (i = o),
            (r = "function" == typeof i ? i.apply(t, a) : i),
            !(void 0 !== r && (e.exports = r));
        })(function (e, t) {
          function n(e, t) {
            return (null === e || typeof e in f) && e === t;
          }
          function i(e, t) {
            var n;
            return function () {
              n ||
                (n = setTimeout(function () {
                  (n = o), e();
                }, t));
            };
          }
          function a(e, t) {
            var n;
            return function () {
              clearTimeout(n), (n = setTimeout(e, t));
            };
          }
          function r(e, t, n, i) {
            (p.d[e] = {
              init: function (e, a, r, o, s) {
                var l, c;
                return (
                  p.w(
                    function () {
                      var r = p.a.c(a()),
                        o = !n != !r,
                        d = !c;
                      (d || t || o !== l) &&
                        (d && p.Z.oa() && (c = p.a.la(p.e.childNodes(e), !0)),
                        o
                          ? (d || p.e.T(e, p.a.la(c)), p.Ja(i ? i(s, r) : s, e))
                          : p.e.ma(e),
                        (l = o));
                    },
                    null,
                    { q: e },
                  ),
                  { controlsDescendantBindings: !0 }
                );
              },
            }),
              (p.h.ka[e] = !1),
              (p.e.R[e] = !0);
          }
          var p = "undefined" != typeof e ? e : {};
          (p.b = function (e, t) {
            for (var n = e.split("."), i = p, a = 0; a < n.length - 1; a++)
              i = i[n[a]];
            i[n[n.length - 1]] = t;
          }),
            (p.D = function (e, t, n) {
              e[t] = n;
            }),
            (p.version = "3.3.0"),
            p.b("version", p.version),
            (p.a = (function () {
              function e(e, t) {
                for (var n in e) e.hasOwnProperty(n) && t(n, e[n]);
              }
              function t(e, t) {
                if (t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e;
              }
              function n(e, t) {
                return (e.__proto__ = t), e;
              }
              function i(e, t, n, i) {
                var a = e[t].match(v) || [];
                p.a.o(n.match(v), function (e) {
                  p.a.ga(a, e, i);
                }),
                  (e[t] = a.join(" "));
              }
              var a = { __proto__: [] } instanceof Array,
                r = {},
                f = {};
              (r[
                c && /Firefox\/2/i.test(c.userAgent)
                  ? "KeyboardEvent"
                  : "UIEvents"
              ] = ["keyup", "keydown", "keypress"]),
                (r.MouseEvents =
                  "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(
                    " ",
                  )),
                e(r, function (e, t) {
                  if (t.length)
                    for (var n = 0, i = t.length; n < i; n++) f[t[n]] = e;
                });
              var g = { propertychange: !0 },
                m =
                  l &&
                  (function () {
                    for (
                      var e = 3,
                        t = l.createElement("div"),
                        n = t.getElementsByTagName("i");
                      (t.innerHTML =
                        "<!--[if gt IE " + ++e + "]><i></i><![endif]-->"),
                        n[0];

                    );
                    return 4 < e ? e : o;
                  })(),
                v = /\S+/g;
              return {
                Bb: [
                  "authenticity_token",
                  /^__RequestVerificationToken(_.*)?$/,
                ],
                o: function (e, t) {
                  for (var n = 0, i = e.length; n < i; n++) t(e[n], n);
                },
                m: function (e, t) {
                  if ("function" == typeof Array.prototype.indexOf)
                    return Array.prototype.indexOf.call(e, t);
                  for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                  return -1;
                },
                vb: function (e, t, n) {
                  for (var i = 0, a = e.length; i < a; i++)
                    if (t.call(n, e[i], i)) return e[i];
                  return null;
                },
                ya: function (e, t) {
                  var n = p.a.m(e, t);
                  0 < n ? e.splice(n, 1) : 0 === n && e.shift();
                },
                wb: function (e) {
                  e = e || [];
                  for (var t = [], n = 0, i = e.length; n < i; n++)
                    0 > p.a.m(t, e[n]) && t.push(e[n]);
                  return t;
                },
                Ka: function (e, t) {
                  e = e || [];
                  for (var n = [], i = 0, a = e.length; i < a; i++)
                    n.push(t(e[i], i));
                  return n;
                },
                xa: function (e, t) {
                  e = e || [];
                  for (var n = [], i = 0, a = e.length; i < a; i++)
                    t(e[i], i) && n.push(e[i]);
                  return n;
                },
                ia: function (e, t) {
                  if (t instanceof Array) e.push.apply(e, t);
                  else for (var n = 0, i = t.length; n < i; n++) e.push(t[n]);
                  return e;
                },
                ga: function (e, t, n) {
                  var i = p.a.m(p.a.cb(e), t);
                  0 > i ? n && e.push(t) : n || e.splice(i, 1);
                },
                za: a,
                extend: t,
                Fa: n,
                Ga: a ? n : t,
                A: e,
                pa: function (e, t) {
                  if (!e) return e;
                  var n,
                    i = {};
                  for (n in e) e.hasOwnProperty(n) && (i[n] = t(e[n], n, e));
                  return i;
                },
                Ra: function (e) {
                  for (; e.firstChild; ) p.removeNode(e.firstChild);
                },
                Jb: function (e) {
                  e = p.a.O(e);
                  for (
                    var t = ((e[0] && e[0].ownerDocument) || l).createElement(
                        "div",
                      ),
                      n = 0,
                      i = e.length;
                    n < i;
                    n++
                  )
                    t.appendChild(p.S(e[n]));
                  return t;
                },
                la: function (e, t) {
                  for (var n = 0, i = e.length, a = []; n < i; n++) {
                    var r = e[n].cloneNode(!0);
                    a.push(t ? p.S(r) : r);
                  }
                  return a;
                },
                T: function (e, t) {
                  if ((p.a.Ra(e), t))
                    for (var n = 0, i = t.length; n < i; n++)
                      e.appendChild(t[n]);
                },
                Qb: function (e, t) {
                  var n = e.nodeType ? [e] : e;
                  if (0 < n.length) {
                    for (
                      var i = n[0], a = i.parentNode, r = 0, o = t.length;
                      r < o;
                      r++
                    )
                      a.insertBefore(t[r], i);
                    for (r = 0, o = n.length; r < o; r++) p.removeNode(n[r]);
                  }
                },
                na: function (e, t) {
                  if (e.length) {
                    for (
                      t = (8 === t.nodeType && t.parentNode) || t;
                      e.length && e[0].parentNode !== t;

                    )
                      e.splice(0, 1);
                    if (1 < e.length) {
                      var n = e[0],
                        i = e[e.length - 1];
                      for (e.length = 0; n !== i; )
                        if ((e.push(n), (n = n.nextSibling), !n)) return;
                      e.push(i);
                    }
                  }
                  return e;
                },
                Sb: function (e, t) {
                  7 > m ? e.setAttribute("selected", t) : (e.selected = t);
                },
                ib: function (e) {
                  return null === e || e === o
                    ? ""
                    : e.trim
                    ? e.trim()
                    : e.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                },
                Dc: function (e, t) {
                  return (
                    (e = e || ""),
                    !(t.length > e.length) && e.substring(0, t.length) === t
                  );
                },
                jc: function (e, t) {
                  if (e === t) return !0;
                  if (11 === e.nodeType) return !1;
                  if (t.contains)
                    return t.contains(3 === e.nodeType ? e.parentNode : e);
                  if (t.compareDocumentPosition)
                    return 16 == (16 & t.compareDocumentPosition(e));
                  for (; e && e != t; ) e = e.parentNode;
                  return !!e;
                },
                Qa: function (e) {
                  return p.a.jc(e, e.ownerDocument.documentElement);
                },
                tb: function (e) {
                  return !!p.a.vb(e, p.a.Qa);
                },
                v: function (e) {
                  return e && e.tagName && e.tagName.toLowerCase();
                },
                n: function (e, t, n) {
                  var i = m && g[t];
                  if (!i && d) d(e).bind(t, n);
                  else if (i || "function" != typeof e.addEventListener) {
                    if ("undefined" == typeof e.attachEvent)
                      throw Error(
                        "Browser doesn't support addEventListener or attachEvent",
                      );
                    var a = function (t) {
                        n.call(e, t);
                      },
                      r = "on" + t;
                    e.attachEvent(r, a),
                      p.a.C.fa(e, function () {
                        e.detachEvent(r, a);
                      });
                  } else e.addEventListener(t, n, !1);
                },
                qa: function (e, t) {
                  if (!e || !e.nodeType)
                    throw Error(
                      "element must be a DOM node when calling triggerEvent",
                    );
                  var n;
                  if (
                    ("input" === p.a.v(e) &&
                    e.type &&
                    "click" == t.toLowerCase()
                      ? ((n = e.type), (n = "checkbox" == n || "radio" == n))
                      : (n = !1),
                    d && !n)
                  )
                    d(e).trigger(t);
                  else if ("function" == typeof l.createEvent) {
                    if ("function" != typeof e.dispatchEvent)
                      throw Error(
                        "The supplied element doesn't support dispatchEvent",
                      );
                    (n = l.createEvent(f[t] || "HTMLEvents")),
                      n.initEvent(
                        t,
                        !0,
                        !0,
                        s,
                        0,
                        0,
                        0,
                        0,
                        0,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        e,
                      ),
                      e.dispatchEvent(n);
                  } else if (n && e.click) e.click();
                  else {
                    if ("undefined" == typeof e.fireEvent)
                      throw Error("Browser doesn't support triggering events");
                    e.fireEvent("on" + t);
                  }
                },
                c: function (e) {
                  return p.F(e) ? e() : e;
                },
                cb: function (e) {
                  return p.F(e) ? e.B() : e;
                },
                Ia: function (e, t, n) {
                  var a;
                  t &&
                    ("object" == typeof e.classList
                      ? ((a = e.classList[n ? "add" : "remove"]),
                        p.a.o(t.match(v), function (t) {
                          a.call(e.classList, t);
                        }))
                      : "string" == typeof e.className.baseVal
                      ? i(e.className, "baseVal", t, n)
                      : i(e, "className", t, n));
                },
                Ha: function (e, t) {
                  var n = p.a.c(t);
                  (null !== n && n !== o) || (n = "");
                  var i = p.e.firstChild(e);
                  !i || 3 != i.nodeType || p.e.nextSibling(i)
                    ? p.e.T(e, [e.ownerDocument.createTextNode(n)])
                    : (i.data = n),
                    p.a.mc(e);
                },
                Rb: function (e, t) {
                  if (((e.name = t), 7 >= m))
                    try {
                      e.mergeAttributes(
                        l.createElement("<input name='" + e.name + "'/>"),
                        !1,
                      );
                    } catch (n) {}
                },
                mc: function (e) {
                  9 <= m &&
                    ((e = 1 == e.nodeType ? e : e.parentNode),
                    e.style && (e.style.zoom = e.style.zoom));
                },
                kc: function (e) {
                  if (m) {
                    var t = e.style.width;
                    (e.style.width = 0), (e.style.width = t);
                  }
                },
                Bc: function (e, t) {
                  (e = p.a.c(e)), (t = p.a.c(t));
                  for (var n = [], i = e; i <= t; i++) n.push(i);
                  return n;
                },
                O: function (e) {
                  for (var t = [], n = 0, i = e.length; n < i; n++)
                    t.push(e[n]);
                  return t;
                },
                Hc: 6 === m,
                Ic: 7 === m,
                M: m,
                Db: function (e, t) {
                  for (
                    var n = p.a
                        .O(e.getElementsByTagName("input"))
                        .concat(p.a.O(e.getElementsByTagName("textarea"))),
                      i =
                        "string" == typeof t
                          ? function (e) {
                              return e.name === t;
                            }
                          : function (e) {
                              return t.test(e.name);
                            },
                      a = [],
                      r = n.length - 1;
                    0 <= r;
                    r--
                  )
                    i(n[r]) && a.push(n[r]);
                  return a;
                },
                yc: function (e) {
                  return "string" == typeof e && (e = p.a.ib(e))
                    ? u && u.parse
                      ? u.parse(e)
                      : new Function("return " + e)()
                    : null;
                },
                jb: function (e, t, n) {
                  if (!u || !u.stringify)
                    throw Error(
                      "Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js",
                    );
                  return u.stringify(p.a.c(e), t, n);
                },
                zc: function (t, n, i) {
                  i = i || {};
                  var a = i.params || {},
                    r = i.includeFields || this.Bb,
                    o = t;
                  if ("object" == typeof t && "form" === p.a.v(t))
                    for (var o = t.action, s = r.length - 1; 0 <= s; s--)
                      for (
                        var c = p.a.Db(t, r[s]), d = c.length - 1;
                        0 <= d;
                        d--
                      )
                        a[c[d].name] = c[d].value;
                  n = p.a.c(n);
                  var u = l.createElement("form");
                  (u.style.display = "none"),
                    (u.action = o),
                    (u.method = "post");
                  for (var f in n)
                    (t = l.createElement("input")),
                      (t.type = "hidden"),
                      (t.name = f),
                      (t.value = p.a.jb(p.a.c(n[f]))),
                      u.appendChild(t);
                  e(a, function (e, t) {
                    var n = l.createElement("input");
                    (n.type = "hidden"),
                      (n.name = e),
                      (n.value = t),
                      u.appendChild(n);
                  }),
                    l.body.appendChild(u),
                    i.submitter ? i.submitter(u) : u.submit(),
                    setTimeout(function () {
                      u.parentNode.removeChild(u);
                    }, 0);
                },
              };
            })()),
            p.b("utils", p.a),
            p.b("utils.arrayForEach", p.a.o),
            p.b("utils.arrayFirst", p.a.vb),
            p.b("utils.arrayFilter", p.a.xa),
            p.b("utils.arrayGetDistinctValues", p.a.wb),
            p.b("utils.arrayIndexOf", p.a.m),
            p.b("utils.arrayMap", p.a.Ka),
            p.b("utils.arrayPushAll", p.a.ia),
            p.b("utils.arrayRemoveItem", p.a.ya),
            p.b("utils.extend", p.a.extend),
            p.b("utils.fieldsIncludedWithJsonPost", p.a.Bb),
            p.b("utils.getFormFields", p.a.Db),
            p.b("utils.peekObservable", p.a.cb),
            p.b("utils.postJson", p.a.zc),
            p.b("utils.parseJson", p.a.yc),
            p.b("utils.registerEventHandler", p.a.n),
            p.b("utils.stringifyJson", p.a.jb),
            p.b("utils.range", p.a.Bc),
            p.b("utils.toggleDomNodeCssClass", p.a.Ia),
            p.b("utils.triggerEvent", p.a.qa),
            p.b("utils.unwrapObservable", p.a.c),
            p.b("utils.objectForEach", p.a.A),
            p.b("utils.addOrRemoveItem", p.a.ga),
            p.b("utils.setTextContent", p.a.Ha),
            p.b("unwrap", p.a.c),
            Function.prototype.bind ||
              (Function.prototype.bind = function (e) {
                var t = this;
                if (1 === arguments.length)
                  return function () {
                    return t.apply(e, arguments);
                  };
                var n = Array.prototype.slice.call(arguments, 1);
                return function () {
                  var i = n.slice(0);
                  return i.push.apply(i, arguments), t.apply(e, i);
                };
              }),
            (p.a.f = new (function () {
              function e(e, a) {
                var r = e[n];
                if (!r || "null" === r || !i[r]) {
                  if (!a) return o;
                  (r = e[n] = "ko" + t++), (i[r] = {});
                }
                return i[r];
              }
              var t = 0,
                n = "__ko__" + new Date().getTime(),
                i = {};
              return {
                get: function (t, n) {
                  var i = e(t, !1);
                  return i === o ? o : i[n];
                },
                set: function (t, n, i) {
                  (i === o && e(t, !1) === o) || (e(t, !0)[n] = i);
                },
                clear: function (e) {
                  var t = e[n];
                  return !!t && (delete i[t], (e[n] = null), !0);
                },
                I: function () {
                  return t++ + n;
                },
              };
            })()),
            p.b("utils.domData", p.a.f),
            p.b("utils.domData.clear", p.a.f.clear),
            (p.a.C = new (function () {
              function e(e, t) {
                var i = p.a.f.get(e, n);
                return i === o && t && ((i = []), p.a.f.set(e, n, i)), i;
              }
              function t(n) {
                var i = e(n, !1);
                if (i)
                  for (var i = i.slice(0), r = 0; r < i.length; r++) i[r](n);
                if ((p.a.f.clear(n), p.a.C.cleanExternalData(n), a[n.nodeType]))
                  for (i = n.firstChild; (n = i); )
                    (i = n.nextSibling), 8 === n.nodeType && t(n);
              }
              var n = p.a.f.I(),
                i = { 1: !0, 8: !0, 9: !0 },
                a = { 1: !0, 9: !0 };
              return {
                fa: function (t, n) {
                  if ("function" != typeof n)
                    throw Error("Callback must be a function");
                  e(t, !0).push(n);
                },
                Pb: function (t, i) {
                  var a = e(t, !1);
                  a && (p.a.ya(a, i), 0 == a.length && p.a.f.set(t, n, o));
                },
                S: function (e) {
                  if (i[e.nodeType] && (t(e), a[e.nodeType])) {
                    var n = [];
                    p.a.ia(n, e.getElementsByTagName("*"));
                    for (var r = 0, o = n.length; r < o; r++) t(n[r]);
                  }
                  return e;
                },
                removeNode: function (e) {
                  p.S(e), e.parentNode && e.parentNode.removeChild(e);
                },
                cleanExternalData: function (e) {
                  d && "function" == typeof d.cleanData && d.cleanData([e]);
                },
              };
            })()),
            (p.S = p.a.C.S),
            (p.removeNode = p.a.C.removeNode),
            p.b("cleanNode", p.S),
            p.b("removeNode", p.removeNode),
            p.b("utils.domNodeDisposal", p.a.C),
            p.b("utils.domNodeDisposal.addDisposeCallback", p.a.C.fa),
            p.b("utils.domNodeDisposal.removeDisposeCallback", p.a.C.Pb),
            (function () {
              (p.a.ca = function (e, t) {
                var n;
                if (d) {
                  if (d.parseHTML) n = d.parseHTML(e, t) || [];
                  else if ((n = d.clean([e], t)) && n[0]) {
                    for (
                      var i = n[0];
                      i.parentNode && 11 !== i.parentNode.nodeType;

                    )
                      i = i.parentNode;
                    i.parentNode && i.parentNode.removeChild(i);
                  }
                } else {
                  (i = t) || (i = l),
                    (n = i.parentWindow || i.defaultView || s);
                  var a = p.a.ib(e).toLowerCase(),
                    i = i.createElement("div"),
                    a = (a.match(/^<(thead|tbody|tfoot)/) && [
                      1,
                      "<table>",
                      "</table>",
                    ]) ||
                      (!a.indexOf("<tr") && [
                        2,
                        "<table><tbody>",
                        "</tbody></table>",
                      ]) ||
                      ((!a.indexOf("<td") || !a.indexOf("<th")) && [
                        3,
                        "<table><tbody><tr>",
                        "</tr></tbody></table>",
                      ]) || [0, "", ""],
                    r = "ignored<div>" + a[1] + e + a[2] + "</div>";
                  for (
                    "function" == typeof n.innerShiv
                      ? i.appendChild(n.innerShiv(r))
                      : (i.innerHTML = r);
                    a[0]--;

                  )
                    i = i.lastChild;
                  n = p.a.O(i.lastChild.childNodes);
                }
                return n;
              }),
                (p.a.gb = function (e, t) {
                  if ((p.a.Ra(e), (t = p.a.c(t)), null !== t && t !== o))
                    if (("string" != typeof t && (t = t.toString()), d))
                      d(e).html(t);
                    else
                      for (
                        var n = p.a.ca(t, e.ownerDocument), i = 0;
                        i < n.length;
                        i++
                      )
                        e.appendChild(n[i]);
                });
            })(),
            p.b("utils.parseHtmlFragment", p.a.ca),
            p.b("utils.setHtml", p.a.gb),
            (p.H = (function () {
              function e(t, n) {
                if (t)
                  if (8 == t.nodeType) {
                    var i = p.H.Lb(t.nodeValue);
                    null != i && n.push({ ic: t, wc: i });
                  } else if (1 == t.nodeType)
                    for (var i = 0, a = t.childNodes, r = a.length; i < r; i++)
                      e(a[i], n);
              }
              var t = {};
              return {
                $a: function (e) {
                  if ("function" != typeof e)
                    throw Error(
                      "You can only pass a function to ko.memoization.memoize()",
                    );
                  var n =
                    ((4294967296 * (1 + Math.random())) | 0)
                      .toString(16)
                      .substring(1) +
                    ((4294967296 * (1 + Math.random())) | 0)
                      .toString(16)
                      .substring(1);
                  return (t[n] = e), "<!--[ko_memo:" + n + "]-->";
                },
                Wb: function (e, n) {
                  var i = t[e];
                  if (i === o)
                    throw Error(
                      "Couldn't find any memo with ID " +
                        e +
                        ". Perhaps it's already been unmemoized.",
                    );
                  try {
                    return i.apply(null, n || []), !0;
                  } finally {
                    delete t[e];
                  }
                },
                Xb: function (t, n) {
                  var i = [];
                  e(t, i);
                  for (var a = 0, r = i.length; a < r; a++) {
                    var o = i[a].ic,
                      s = [o];
                    n && p.a.ia(s, n),
                      p.H.Wb(i[a].wc, s),
                      (o.nodeValue = ""),
                      o.parentNode && o.parentNode.removeChild(o);
                  }
                },
                Lb: function (e) {
                  return (e = e.match(/^\[ko_memo\:(.*?)\]$/)) ? e[1] : null;
                },
              };
            })()),
            p.b("memoization", p.H),
            p.b("memoization.memoize", p.H.$a),
            p.b("memoization.unmemoize", p.H.Wb),
            p.b("memoization.parseMemoText", p.H.Lb),
            p.b("memoization.unmemoizeDomNodeAndDescendants", p.H.Xb),
            (p.Sa = {
              throttle: function (e, t) {
                e.throttleEvaluation = t;
                var n = null;
                return p.j({
                  read: e,
                  write: function (i) {
                    clearTimeout(n),
                      (n = setTimeout(function () {
                        e(i);
                      }, t));
                  },
                });
              },
              rateLimit: function (e, t) {
                var n, r, o;
                "number" == typeof t
                  ? (n = t)
                  : ((n = t.timeout), (r = t.method)),
                  (o = "notifyWhenChangesStop" == r ? a : i),
                  e.Za(function (e) {
                    return o(e, n);
                  });
              },
              notify: function (e, t) {
                e.equalityComparer = "always" == t ? null : n;
              },
            });
          var f = { undefined: 1, boolean: 1, number: 1, string: 1 };
          p.b("extenders", p.Sa),
            (p.Ub = function (e, t, n) {
              (this.da = e),
                (this.La = t),
                (this.hc = n),
                (this.Gb = !1),
                p.D(this, "dispose", this.p);
            }),
            (p.Ub.prototype.p = function () {
              (this.Gb = !0), this.hc();
            }),
            (p.Q = function () {
              p.a.Ga(this, p.Q.fn), (this.G = {}), (this.rb = 1);
            });
          var g = {
            U: function (e, t, n) {
              var i = this;
              n = n || "change";
              var a = new p.Ub(i, t ? e.bind(t) : e, function () {
                p.a.ya(i.G[n], a), i.ua && i.ua(n);
              });
              return (
                i.ja && i.ja(n), i.G[n] || (i.G[n] = []), i.G[n].push(a), a
              );
            },
            notifySubscribers: function (e, t) {
              if (
                ((t = t || "change"), "change" === t && this.Yb(), this.Ba(t))
              )
                try {
                  p.k.xb();
                  for (var n, i = this.G[t].slice(0), a = 0; (n = i[a]); ++a)
                    n.Gb || n.La(e);
                } finally {
                  p.k.end();
                }
            },
            Aa: function () {
              return this.rb;
            },
            pc: function (e) {
              return this.Aa() !== e;
            },
            Yb: function () {
              ++this.rb;
            },
            Za: function (e) {
              var t,
                n,
                i,
                a = this,
                r = p.F(a);
              a.ta ||
                ((a.ta = a.notifySubscribers),
                (a.notifySubscribers = function (e, t) {
                  t && "change" !== t
                    ? "beforeChange" === t
                      ? a.pb(e)
                      : a.ta(e, t)
                    : a.qb(e);
                }));
              var o = e(function () {
                r && i === a && (i = a()),
                  (t = !1),
                  a.Wa(n, i) && a.ta((n = i));
              });
              (a.qb = function (e) {
                (t = !0), (i = e), o();
              }),
                (a.pb = function (e) {
                  t || ((n = e), a.ta(e, "beforeChange"));
                });
            },
            Ba: function (e) {
              return this.G[e] && this.G[e].length;
            },
            nc: function (e) {
              if (e) return (this.G[e] && this.G[e].length) || 0;
              var t = 0;
              return (
                p.a.A(this.G, function (e, n) {
                  t += n.length;
                }),
                t
              );
            },
            Wa: function (e, t) {
              return !this.equalityComparer || !this.equalityComparer(e, t);
            },
            extend: function (e) {
              var t = this;
              return (
                e &&
                  p.a.A(e, function (e, n) {
                    var i = p.Sa[e];
                    "function" == typeof i && (t = i(t, n) || t);
                  }),
                t
              );
            },
          };
          p.D(g, "subscribe", g.U),
            p.D(g, "extend", g.extend),
            p.D(g, "getSubscriptionsCount", g.nc),
            p.a.za && p.a.Fa(g, Function.prototype),
            (p.Q.fn = g),
            (p.Hb = function (e) {
              return (
                null != e &&
                "function" == typeof e.U &&
                "function" == typeof e.notifySubscribers
              );
            }),
            p.b("subscribable", p.Q),
            p.b("isSubscribable", p.Hb),
            (p.Z = p.k =
              (function () {
                function e(e) {
                  i.push(n), (n = e);
                }
                function t() {
                  n = i.pop();
                }
                var n,
                  i = [],
                  a = 0;
                return {
                  xb: e,
                  end: t,
                  Ob: function (e) {
                    if (n) {
                      if (!p.Hb(e))
                        throw Error(
                          "Only subscribable things can act as dependencies",
                        );
                      n.La(e, e.ac || (e.ac = ++a));
                    }
                  },
                  u: function (n, i, a) {
                    try {
                      return e(), n.apply(i, a || []);
                    } finally {
                      t();
                    }
                  },
                  oa: function () {
                    if (n) return n.w.oa();
                  },
                  Ca: function () {
                    if (n) return n.Ca;
                  },
                };
              })()),
            p.b("computedContext", p.Z),
            p.b("computedContext.getDependenciesCount", p.Z.oa),
            p.b("computedContext.isInitial", p.Z.Ca),
            p.b("computedContext.isSleeping", p.Z.Jc),
            p.b("ignoreDependencies", (p.Gc = p.k.u)),
            (p.r = function (e) {
              function t() {
                return 0 < arguments.length
                  ? (t.Wa(n, arguments[0]) &&
                      (t.X(), (n = arguments[0]), t.W()),
                    this)
                  : (p.k.Ob(t), n);
              }
              var n = e;
              return (
                p.Q.call(t),
                p.a.Ga(t, p.r.fn),
                (t.B = function () {
                  return n;
                }),
                (t.W = function () {
                  t.notifySubscribers(n);
                }),
                (t.X = function () {
                  t.notifySubscribers(n, "beforeChange");
                }),
                p.D(t, "peek", t.B),
                p.D(t, "valueHasMutated", t.W),
                p.D(t, "valueWillMutate", t.X),
                t
              );
            }),
            (p.r.fn = { equalityComparer: n });
          var m = (p.r.Ac = "__ko_proto__");
          (p.r.fn[m] = p.r),
            p.a.za && p.a.Fa(p.r.fn, p.Q.fn),
            (p.Ta = function (e, t) {
              return (
                null !== e &&
                e !== o &&
                e[m] !== o &&
                (e[m] === t || p.Ta(e[m], t))
              );
            }),
            (p.F = function (e) {
              return p.Ta(e, p.r);
            }),
            (p.Da = function (e) {
              return !!(
                ("function" == typeof e && e[m] === p.r) ||
                ("function" == typeof e && e[m] === p.j && e.qc)
              );
            }),
            p.b("observable", p.r),
            p.b("isObservable", p.F),
            p.b("isWriteableObservable", p.Da),
            p.b("isWritableObservable", p.Da),
            (p.ba = function (e) {
              if (((e = e || []), "object" != typeof e || !("length" in e)))
                throw Error(
                  "The argument passed when initializing an observable array must be an array, or null, or undefined.",
                );
              return (
                (e = p.r(e)),
                p.a.Ga(e, p.ba.fn),
                e.extend({ trackArrayChanges: !0 })
              );
            }),
            (p.ba.fn = {
              remove: function (e) {
                for (
                  var t = this.B(),
                    n = [],
                    i =
                      "function" != typeof e || p.F(e)
                        ? function (t) {
                            return t === e;
                          }
                        : e,
                    a = 0;
                  a < t.length;
                  a++
                ) {
                  var r = t[a];
                  i(r) &&
                    (0 === n.length && this.X(),
                    n.push(r),
                    t.splice(a, 1),
                    a--);
                }
                return n.length && this.W(), n;
              },
              removeAll: function (e) {
                if (e === o) {
                  var t = this.B(),
                    n = t.slice(0);
                  return this.X(), t.splice(0, t.length), this.W(), n;
                }
                return e
                  ? this.remove(function (t) {
                      return 0 <= p.a.m(e, t);
                    })
                  : [];
              },
              destroy: function (e) {
                var t = this.B(),
                  n =
                    "function" != typeof e || p.F(e)
                      ? function (t) {
                          return t === e;
                        }
                      : e;
                this.X();
                for (var i = t.length - 1; 0 <= i; i--)
                  n(t[i]) && (t[i]._destroy = !0);
                this.W();
              },
              destroyAll: function (e) {
                return e === o
                  ? this.destroy(function () {
                      return !0;
                    })
                  : e
                  ? this.destroy(function (t) {
                      return 0 <= p.a.m(e, t);
                    })
                  : [];
              },
              indexOf: function (e) {
                var t = this();
                return p.a.m(t, e);
              },
              replace: function (e, t) {
                var n = this.indexOf(e);
                0 <= n && (this.X(), (this.B()[n] = t), this.W());
              },
            }),
            p.a.o(
              "pop push reverse shift sort splice unshift".split(" "),
              function (e) {
                p.ba.fn[e] = function () {
                  var t = this.B();
                  return (
                    this.X(),
                    this.yb(t, e, arguments),
                    (t = t[e].apply(t, arguments)),
                    this.W(),
                    t
                  );
                };
              },
            ),
            p.a.o(["slice"], function (e) {
              p.ba.fn[e] = function () {
                var t = this();
                return t[e].apply(t, arguments);
              };
            }),
            p.a.za && p.a.Fa(p.ba.fn, p.r.fn),
            p.b("observableArray", p.ba),
            (p.Sa.trackArrayChanges = function (e) {
              function t() {
                if (!i) {
                  i = !0;
                  var t = e.notifySubscribers;
                  e.notifySubscribers = function (e, n) {
                    return (
                      (n && "change" !== n) || ++r, t.apply(this, arguments)
                    );
                  };
                  var o = [].concat(e.B() || []);
                  (a = null),
                    (n = e.U(function (t) {
                      if (((t = [].concat(t || [])), e.Ba("arrayChange"))) {
                        var n;
                        (!a || 1 < r) && (a = p.a.Ma(o, t, { sparse: !0 })),
                          (n = a);
                      }
                      (o = t),
                        (a = null),
                        (r = 0),
                        n && n.length && e.notifySubscribers(n, "arrayChange");
                    }));
                }
              }
              if (!e.yb) {
                var n,
                  i = !1,
                  a = null,
                  r = 0,
                  o = e.ja,
                  s = e.ua;
                (e.ja = function (n) {
                  o && o.call(e, n), "arrayChange" === n && t();
                }),
                  (e.ua = function (t) {
                    s && s.call(e, t),
                      "arrayChange" !== t ||
                        e.Ba("arrayChange") ||
                        (n.p(), (i = !1));
                  }),
                  (e.yb = function (e, t, n) {
                    function o(e, t, n) {
                      return (s[s.length] = { status: e, value: t, index: n });
                    }
                    if (i && !r) {
                      var s = [],
                        l = e.length,
                        c = n.length,
                        d = 0;
                      switch (t) {
                        case "push":
                          d = l;
                        case "unshift":
                          for (t = 0; t < c; t++) o("added", n[t], d + t);
                          break;
                        case "pop":
                          d = l - 1;
                        case "shift":
                          l && o("deleted", e[d], d);
                          break;
                        case "splice":
                          t = Math.min(
                            Math.max(0, 0 > n[0] ? l + n[0] : n[0]),
                            l,
                          );
                          for (
                            var l = 1 === c ? l : Math.min(t + (n[1] || 0), l),
                              c = t + c - 2,
                              d = Math.max(l, c),
                              u = [],
                              f = [],
                              g = 2;
                            t < d;
                            ++t, ++g
                          )
                            t < l && f.push(o("deleted", e[t], t)),
                              t < c && u.push(o("added", n[g], t));
                          p.a.Cb(f, u);
                          break;
                        default:
                          return;
                      }
                      a = s;
                    }
                  });
              }
            }),
            (p.w = p.j =
              function (e, t, n) {
                function i(e, t, n) {
                  if (S && t === c)
                    throw Error(
                      "A 'pure' computed must not be called recursively",
                    );
                  (I[e] = n), (n.sa = A++), (n.ea = t.Aa());
                }
                function a() {
                  var e, t;
                  for (e in I)
                    if (I.hasOwnProperty(e) && ((t = I[e]), t.da.pc(t.ea)))
                      return !0;
                }
                function r() {
                  !y &&
                    I &&
                    p.a.A(I, function (e, t) {
                      t.p && t.p();
                    }),
                    (I = null),
                    (A = 0),
                    (b = !0),
                    (y = m = !1);
                }
                function s() {
                  var e = c.throttleEvaluation;
                  e && 0 <= e
                    ? (clearTimeout(E),
                      (E = setTimeout(function () {
                        l(!0);
                      }, e)))
                    : c.nb
                    ? c.nb()
                    : l(!0);
                }
                function l(e) {
                  if (!v && !b) {
                    if (k && k()) {
                      if (!h) return void x();
                    } else h = !1;
                    v = !0;
                    try {
                      var n = I,
                        a = A,
                        r = S ? o : !A;
                      p.k.xb({
                        La: function (e, t) {
                          b ||
                            (a && n[t]
                              ? (i(t, e, n[t]), delete n[t], --a)
                              : I[t] || i(t, e, y ? { da: e } : e.U(s)));
                        },
                        w: c,
                        Ca: r,
                      }),
                        (I = {}),
                        (A = 0);
                      try {
                        var l = t ? _.call(t) : _();
                      } finally {
                        p.k.end(),
                          a &&
                            !y &&
                            p.a.A(n, function (e, t) {
                              t.p && t.p();
                            }),
                          (m = !1);
                      }
                      c.Wa(g, l) &&
                        (y || f(g, "beforeChange"),
                        (g = l),
                        y ? c.Yb() : e && f(g)),
                        r && f(g, "awake");
                    } finally {
                      v = !1;
                    }
                    A || x();
                  }
                }
                function c() {
                  if (0 < arguments.length) {
                    if ("function" != typeof w)
                      throw Error(
                        "Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.",
                      );
                    return w.apply(t, arguments), this;
                  }
                  return p.k.Ob(c), (m || (y && a())) && l(), g;
                }
                function d() {
                  return ((m && !A) || (y && a())) && l(), g;
                }
                function u() {
                  return m || 0 < A;
                }
                function f(e, t) {
                  c.notifySubscribers(e, t);
                }
                var g,
                  m = !0,
                  v = !1,
                  h = !1,
                  b = !1,
                  _ = e,
                  S = !1,
                  y = !1;
                if (
                  (_ && "object" == typeof _
                    ? ((n = _), (_ = n.read))
                    : ((n = n || {}), _ || (_ = n.read)),
                  "function" != typeof _)
                )
                  throw Error(
                    "Pass a function that returns the value of the ko.computed",
                  );
                var w = n.write,
                  T = n.disposeWhenNodeIsRemoved || n.q || null,
                  C = n.disposeWhen || n.Pa,
                  k = C,
                  x = r,
                  I = {},
                  A = 0,
                  E = null;
                t || (t = n.owner),
                  p.Q.call(c),
                  p.a.Ga(c, p.j.fn),
                  (c.B = d),
                  (c.oa = function () {
                    return A;
                  }),
                  (c.qc = "function" == typeof w),
                  (c.p = function () {
                    x();
                  }),
                  (c.$ = u);
                var D = c.Za;
                return (
                  (c.Za = function (e) {
                    D.call(c, e),
                      (c.nb = function () {
                        c.pb(g), (m = !0), c.qb(c);
                      });
                  }),
                  n.pure
                    ? ((y = S = !0),
                      (c.ja = function (e) {
                        if (!b && y && "change" == e) {
                          if (((y = !1), m || a()))
                            (I = null), (A = 0), (m = !0), l();
                          else {
                            var t = [];
                            p.a.A(I, function (e, n) {
                              t[n.sa] = e;
                            }),
                              p.a.o(t, function (e, t) {
                                var n = I[e],
                                  i = n.da.U(s);
                                (i.sa = t), (i.ea = n.ea), (I[e] = i);
                              });
                          }
                          b || f(g, "awake");
                        }
                      }),
                      (c.ua = function (e) {
                        b ||
                          "change" != e ||
                          c.Ba("change") ||
                          (p.a.A(I, function (e, t) {
                            t.p &&
                              ((I[e] = { da: t.da, sa: t.sa, ea: t.ea }),
                              t.p());
                          }),
                          (y = !0),
                          f(o, "asleep"));
                      }),
                      (c.bc = c.Aa),
                      (c.Aa = function () {
                        return y && (m || a()) && l(), c.bc();
                      }))
                    : n.deferEvaluation &&
                      (c.ja = function (e) {
                        ("change" != e && "beforeChange" != e) || d();
                      }),
                  p.D(c, "peek", c.B),
                  p.D(c, "dispose", c.p),
                  p.D(c, "isActive", c.$),
                  p.D(c, "getDependenciesCount", c.oa),
                  T &&
                    ((h = !0),
                    T.nodeType &&
                      (k = function () {
                        return !p.a.Qa(T) || (C && C());
                      })),
                  y || n.deferEvaluation || l(),
                  T &&
                    u() &&
                    T.nodeType &&
                    ((x = function () {
                      p.a.C.Pb(T, x), r();
                    }),
                    p.a.C.fa(T, x)),
                  c
                );
              }),
            (p.sc = function (e) {
              return p.Ta(e, p.j);
            }),
            (g = p.r.Ac),
            (p.j[g] = p.r),
            (p.j.fn = { equalityComparer: n }),
            (p.j.fn[g] = p.j),
            p.a.za && p.a.Fa(p.j.fn, p.Q.fn),
            p.b("dependentObservable", p.j),
            p.b("computed", p.j),
            p.b("isComputed", p.sc),
            (p.Nb = function (e, t) {
              return "function" == typeof e
                ? p.w(e, t, { pure: !0 })
                : ((e = p.a.extend({}, e)), (e.pure = !0), p.w(e, t));
            }),
            p.b("pureComputed", p.Nb),
            (function () {
              function e(i, a, r) {
                if (
                  ((r = r || new n()),
                  (i = a(i)),
                  "object" != typeof i ||
                    null === i ||
                    i === o ||
                    i instanceof Date ||
                    i instanceof String ||
                    i instanceof Number ||
                    i instanceof Boolean)
                )
                  return i;
                var s = i instanceof Array ? [] : {};
                return (
                  r.save(i, s),
                  t(i, function (t) {
                    var n = a(i[t]);
                    switch (typeof n) {
                      case "boolean":
                      case "number":
                      case "string":
                      case "function":
                        s[t] = n;
                        break;
                      case "object":
                      case "undefined":
                        var l = r.get(n);
                        s[t] = l !== o ? l : e(n, a, r);
                    }
                  }),
                  s
                );
              }
              function t(e, t) {
                if (e instanceof Array) {
                  for (var n = 0; n < e.length; n++) t(n);
                  "function" == typeof e.toJSON && t("toJSON");
                } else for (n in e) t(n);
              }
              function n() {
                (this.keys = []), (this.mb = []);
              }
              (p.Vb = function (t) {
                if (0 == arguments.length)
                  throw Error(
                    "When calling ko.toJS, pass the object you want to convert.",
                  );
                return e(t, function (e) {
                  for (var t = 0; p.F(e) && 10 > t; t++) e = e();
                  return e;
                });
              }),
                (p.toJSON = function (e, t, n) {
                  return (e = p.Vb(e)), p.a.jb(e, t, n);
                }),
                (n.prototype = {
                  save: function (e, t) {
                    var n = p.a.m(this.keys, e);
                    0 <= n
                      ? (this.mb[n] = t)
                      : (this.keys.push(e), this.mb.push(t));
                  },
                  get: function (e) {
                    return (e = p.a.m(this.keys, e)), 0 <= e ? this.mb[e] : o;
                  },
                });
            })(),
            p.b("toJS", p.Vb),
            p.b("toJSON", p.toJSON),
            (function () {
              p.i = {
                s: function (e) {
                  switch (p.a.v(e)) {
                    case "option":
                      return !0 === e.__ko__hasDomDataOptionValue__
                        ? p.a.f.get(e, p.d.options.ab)
                        : 7 >= p.a.M
                        ? e.getAttributeNode("value") &&
                          e.getAttributeNode("value").specified
                          ? e.value
                          : e.text
                        : e.value;
                    case "select":
                      return 0 <= e.selectedIndex
                        ? p.i.s(e.options[e.selectedIndex])
                        : o;
                    default:
                      return e.value;
                  }
                },
                Y: function (e, t, n) {
                  switch (p.a.v(e)) {
                    case "option":
                      switch (typeof t) {
                        case "string":
                          p.a.f.set(e, p.d.options.ab, o),
                            "__ko__hasDomDataOptionValue__" in e &&
                              delete e.__ko__hasDomDataOptionValue__,
                            (e.value = t);
                          break;
                        default:
                          p.a.f.set(e, p.d.options.ab, t),
                            (e.__ko__hasDomDataOptionValue__ = !0),
                            (e.value = "number" == typeof t ? t : "");
                      }
                      break;
                    case "select":
                      ("" !== t && null !== t) || (t = o);
                      for (
                        var i, a = -1, r = 0, s = e.options.length;
                        r < s;
                        ++r
                      )
                        if (
                          ((i = p.i.s(e.options[r])),
                          i == t || ("" == i && t === o))
                        ) {
                          a = r;
                          break;
                        }
                      (n || 0 <= a || (t === o && 1 < e.size)) &&
                        (e.selectedIndex = a);
                      break;
                    default:
                      (null !== t && t !== o) || (t = ""), (e.value = t);
                  }
                },
              };
            })(),
            p.b("selectExtensions", p.i),
            p.b("selectExtensions.readValue", p.i.s),
            p.b("selectExtensions.writeValue", p.i.Y),
            (p.h = (function () {
              function e(e) {
                (e = p.a.ib(e)),
                  123 === e.charCodeAt(0) && (e = e.slice(1, -1));
                var t,
                  n = [],
                  o = e.match(i),
                  s = [],
                  l = 0;
                if (o) {
                  o.push(",");
                  for (var c, d = 0; (c = o[d]); ++d) {
                    var u = c.charCodeAt(0);
                    if (44 === u) {
                      if (0 >= l) {
                        n.push(
                          t && s.length
                            ? { key: t, value: s.join("") }
                            : { unknown: t || s.join("") },
                        ),
                          (t = l = 0),
                          (s = []);
                        continue;
                      }
                    } else if (58 === u) {
                      if (!l && !t && 1 === s.length) {
                        t = s.pop();
                        continue;
                      }
                    } else
                      47 === u && d && 1 < c.length
                        ? (u = o[d - 1].match(a)) &&
                          !r[u[0]] &&
                          ((e = e.substr(e.indexOf(c) + 1)),
                          (o = e.match(i)),
                          o.push(","),
                          (d = -1),
                          (c = "/"))
                        : 40 === u || 123 === u || 91 === u
                        ? ++l
                        : 41 === u || 125 === u || 93 === u
                        ? --l
                        : t ||
                          s.length ||
                          (34 !== u && 39 !== u) ||
                          (c = c.slice(1, -1));
                    s.push(c);
                  }
                }
                return n;
              }
              var t = ["true", "false", "null", "undefined"],
                n = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                i = RegExp(
                  "\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]",
                  "g",
                ),
                a = /[\])"'A-Za-z0-9_$]+$/,
                r = { in: 1, return: 1, typeof: 1 },
                o = {};
              return {
                ka: [],
                V: o,
                bb: e,
                Ea: function (i, a) {
                  function r(e, i) {
                    var a;
                    if (!d) {
                      var u = p.getBindingHandler(e);
                      if (u && u.preprocess && !(i = u.preprocess(i, e, r)))
                        return;
                      (u = o[e]) &&
                        ((a = i),
                        0 <= p.a.m(t, a)
                          ? (a = !1)
                          : ((u = a.match(n)),
                            (a =
                              null !== u &&
                              (u[1] ? "Object(" + u[1] + ")" + u[2] : a))),
                        (u = a)),
                        u && l.push("'" + e + "':function(_z){" + a + "=_z}");
                    }
                    c && (i = "function(){return " + i + " }"),
                      s.push("'" + e + "':" + i);
                  }
                  a = a || {};
                  var s = [],
                    l = [],
                    c = a.valueAccessors,
                    d = a.bindingParams,
                    u = "string" == typeof i ? e(i) : i;
                  return (
                    p.a.o(u, function (e) {
                      r(e.key || e.unknown, e.value);
                    }),
                    l.length &&
                      r("_ko_property_writers", "{" + l.join(",") + " }"),
                    s.join(",")
                  );
                },
                vc: function (e, t) {
                  for (var n = 0; n < e.length; n++)
                    if (e[n].key == t) return !0;
                  return !1;
                },
                ra: function (e, t, n, i, a) {
                  e && p.F(e)
                    ? !p.Da(e) || (a && e.B() === i) || e(i)
                    : (e = t.get("_ko_property_writers")) && e[n] && e[n](i);
                },
              };
            })()),
            p.b("expressionRewriting", p.h),
            p.b("expressionRewriting.bindingRewriteValidators", p.h.ka),
            p.b("expressionRewriting.parseObjectLiteral", p.h.bb),
            p.b("expressionRewriting.preProcessBindings", p.h.Ea),
            p.b("expressionRewriting._twoWayBindings", p.h.V),
            p.b("jsonExpressionRewriting", p.h),
            p.b(
              "jsonExpressionRewriting.insertPropertyAccessorsIntoJson",
              p.h.Ea,
            ),
            (function () {
              function e(e) {
                return 8 == e.nodeType && r.test(a ? e.text : e.nodeValue);
              }
              function t(e) {
                return 8 == e.nodeType && o.test(a ? e.text : e.nodeValue);
              }
              function n(n, i) {
                for (var a = n, r = 1, o = []; (a = a.nextSibling); ) {
                  if (t(a) && (r--, 0 === r)) return o;
                  o.push(a), e(a) && r++;
                }
                if (!i)
                  throw Error(
                    "Cannot find closing comment tag to match: " + n.nodeValue,
                  );
                return null;
              }
              function i(e, t) {
                var i = n(e, t);
                return i
                  ? 0 < i.length
                    ? i[i.length - 1].nextSibling
                    : e.nextSibling
                  : null;
              }
              var a = l && "<!--test-->" === l.createComment("test").text,
                r = a
                  ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/
                  : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                o = a ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                s = { ul: !0, ol: !0 };
              p.e = {
                R: {},
                childNodes: function (t) {
                  return e(t) ? n(t) : t.childNodes;
                },
                ma: function (t) {
                  if (e(t)) {
                    t = p.e.childNodes(t);
                    for (var n = 0, i = t.length; n < i; n++)
                      p.removeNode(t[n]);
                  } else p.a.Ra(t);
                },
                T: function (t, n) {
                  if (e(t)) {
                    p.e.ma(t);
                    for (var i = t.nextSibling, a = 0, r = n.length; a < r; a++)
                      i.parentNode.insertBefore(n[a], i);
                  } else p.a.T(t, n);
                },
                Mb: function (t, n) {
                  e(t)
                    ? t.parentNode.insertBefore(n, t.nextSibling)
                    : t.firstChild
                    ? t.insertBefore(n, t.firstChild)
                    : t.appendChild(n);
                },
                Fb: function (t, n, i) {
                  i
                    ? e(t)
                      ? t.parentNode.insertBefore(n, i.nextSibling)
                      : i.nextSibling
                      ? t.insertBefore(n, i.nextSibling)
                      : t.appendChild(n)
                    : p.e.Mb(t, n);
                },
                firstChild: function (n) {
                  return e(n)
                    ? !n.nextSibling || t(n.nextSibling)
                      ? null
                      : n.nextSibling
                    : n.firstChild;
                },
                nextSibling: function (n) {
                  return (
                    e(n) && (n = i(n)),
                    n.nextSibling && t(n.nextSibling) ? null : n.nextSibling
                  );
                },
                oc: e,
                Fc: function (e) {
                  return (e = (a ? e.text : e.nodeValue).match(r))
                    ? e[1]
                    : null;
                },
                Kb: function (n) {
                  if (s[p.a.v(n)]) {
                    var a = n.firstChild;
                    if (a)
                      do
                        if (1 === a.nodeType) {
                          var r;
                          r = a.firstChild;
                          var o = null;
                          if (r)
                            do
                              if (o) o.push(r);
                              else if (e(r)) {
                                var l = i(r, !0);
                                l ? (r = l) : (o = [r]);
                              } else t(r) && (o = [r]);
                            while ((r = r.nextSibling));
                          if ((r = o))
                            for (o = a.nextSibling, l = 0; l < r.length; l++)
                              o ? n.insertBefore(r[l], o) : n.appendChild(r[l]);
                        }
                      while ((a = a.nextSibling));
                  }
                },
              };
            })(),
            p.b("virtualElements", p.e),
            p.b("virtualElements.allowedBindings", p.e.R),
            p.b("virtualElements.emptyNode", p.e.ma),
            p.b("virtualElements.insertAfter", p.e.Fb),
            p.b("virtualElements.prepend", p.e.Mb),
            p.b("virtualElements.setDomNodeChildren", p.e.T),
            (function () {
              (p.L = function () {
                this.ec = {};
              }),
                p.a.extend(p.L.prototype, {
                  nodeHasBindings: function (e) {
                    switch (e.nodeType) {
                      case 1:
                        return (
                          null != e.getAttribute("data-bind") ||
                          p.g.getComponentNameForNode(e)
                        );
                      case 8:
                        return p.e.oc(e);
                      default:
                        return !1;
                    }
                  },
                  getBindings: function (e, t) {
                    var n = this.getBindingsString(e, t),
                      n = n ? this.parseBindingsString(n, t, e) : null;
                    return p.g.sb(n, e, t, !1);
                  },
                  getBindingAccessors: function (e, t) {
                    var n = this.getBindingsString(e, t),
                      n = n
                        ? this.parseBindingsString(n, t, e, {
                            valueAccessors: !0,
                          })
                        : null;
                    return p.g.sb(n, e, t, !0);
                  },
                  getBindingsString: function (e) {
                    switch (e.nodeType) {
                      case 1:
                        return e.getAttribute("data-bind");
                      case 8:
                        return p.e.Fc(e);
                      default:
                        return null;
                    }
                  },
                  parseBindingsString: function (e, t, n, i) {
                    try {
                      var a,
                        r = this.ec,
                        o = e + ((i && i.valueAccessors) || "");
                      if (!(a = r[o])) {
                        var s,
                          l =
                            "with($context){with($data||{}){return{" +
                            p.h.Ea(e, i) +
                            "}}}";
                        (s = new Function("$context", "$element", l)),
                          (a = r[o] = s);
                      }
                      return a(t, n);
                    } catch (c) {
                      throw (
                        ((c.message =
                          "Unable to parse bindings.\nBindings value: " +
                          e +
                          "\nMessage: " +
                          c.message),
                        c)
                      );
                    }
                  },
                }),
                (p.L.instance = new p.L());
            })(),
            p.b("bindingProvider", p.L),
            (function () {
              function e(e) {
                return function () {
                  return e;
                };
              }
              function t(e) {
                return e();
              }
              function n(e) {
                return p.a.pa(p.k.u(e), function (t, n) {
                  return function () {
                    return e()[n];
                  };
                });
              }
              function i(t, i, a) {
                return "function" == typeof t
                  ? n(t.bind(null, i, a))
                  : p.a.pa(t, e);
              }
              function a(e, t) {
                return n(this.getBindings.bind(this, e, t));
              }
              function r(e, t, n) {
                var i,
                  a = p.e.firstChild(t),
                  r = p.L.instance,
                  o = r.preprocessNode;
                if (o) {
                  for (; (i = a); ) (a = p.e.nextSibling(i)), o.call(r, i);
                  a = p.e.firstChild(t);
                }
                for (; (i = a); ) (a = p.e.nextSibling(i)), l(e, i, n);
              }
              function l(e, t, n) {
                var i = !0,
                  a = 1 === t.nodeType;
                a && p.e.Kb(t),
                  ((a && n) || p.L.instance.nodeHasBindings(t)) &&
                    (i = u(t, null, e, n).shouldBindDescendants),
                  i && !g[p.a.v(t)] && r(e, t, !a);
              }
              function c(e) {
                var t = [],
                  n = {},
                  i = [];
                return (
                  p.a.A(e, function a(r) {
                    if (!n[r]) {
                      var o = p.getBindingHandler(r);
                      o &&
                        (o.after &&
                          (i.push(r),
                          p.a.o(o.after, function (t) {
                            if (e[t]) {
                              if (-1 !== p.a.m(i, t))
                                throw Error(
                                  "Cannot combine the following bindings, because they have a cyclic dependency: " +
                                    i.join(", "),
                                );
                              a(t);
                            }
                          }),
                          i.length--),
                        t.push({ key: r, Eb: o })),
                        (n[r] = !0);
                    }
                  }),
                  t
                );
              }
              function u(e, n, i, r) {
                var s = p.a.f.get(e, m);
                if (!n) {
                  if (s)
                    throw Error(
                      "You cannot apply bindings multiple times to the same element.",
                    );
                  p.a.f.set(e, m, !0);
                }
                !s && r && p.Tb(e, i);
                var l;
                if (n && "function" != typeof n) l = n;
                else {
                  var d = p.L.instance,
                    u = d.getBindingAccessors || a,
                    f = p.j(
                      function () {
                        return (
                          (l = n ? n(i, e) : u.call(d, e, i)) && i.K && i.K(), l
                        );
                      },
                      null,
                      { q: e },
                    );
                  (l && f.$()) || (f = null);
                }
                var g;
                if (l) {
                  var v = f
                      ? function (e) {
                          return function () {
                            return t(f()[e]);
                          };
                        }
                      : function (e) {
                          return l[e];
                        },
                    h = function () {
                      return p.a.pa(f ? f() : l, t);
                    };
                  (h.get = function (e) {
                    return l[e] && t(v(e));
                  }),
                    (h.has = function (e) {
                      return e in l;
                    }),
                    (r = c(l)),
                    p.a.o(r, function (t) {
                      var n = t.Eb.init,
                        a = t.Eb.update,
                        r = t.key;
                      if (8 === e.nodeType && !p.e.R[r])
                        throw Error(
                          "The binding '" +
                            r +
                            "' cannot be used with virtual elements",
                        );
                      try {
                        "function" == typeof n &&
                          p.k.u(function () {
                            var t = n(e, v(r), h, i.$data, i);
                            if (t && t.controlsDescendantBindings) {
                              if (g !== o)
                                throw Error(
                                  "Multiple bindings (" +
                                    g +
                                    " and " +
                                    r +
                                    ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.",
                                );
                              g = r;
                            }
                          }),
                          "function" == typeof a &&
                            p.j(
                              function () {
                                a(e, v(r), h, i.$data, i);
                              },
                              null,
                              { q: e },
                            );
                      } catch (s) {
                        throw (
                          ((s.message =
                            'Unable to process binding "' +
                            r +
                            ": " +
                            l[r] +
                            '"\nMessage: ' +
                            s.message),
                          s)
                        );
                      }
                    });
                }
                return { shouldBindDescendants: g === o };
              }
              function f(e) {
                return e && e instanceof p.N ? e : new p.N(e);
              }
              p.d = {};
              var g = { script: !0, textarea: !0 };
              (p.getBindingHandler = function (e) {
                return p.d[e];
              }),
                (p.N = function (e, t, n, i) {
                  var a,
                    r = this,
                    s = "function" == typeof e && !p.F(e),
                    l = p.j(
                      function () {
                        var a = s ? e() : e,
                          o = p.a.c(a);
                        return (
                          t
                            ? (t.K && t.K(), p.a.extend(r, t), l && (r.K = l))
                            : ((r.$parents = []), (r.$root = o), (r.ko = p)),
                          (r.$rawData = a),
                          (r.$data = o),
                          n && (r[n] = o),
                          i && i(r, t, o),
                          r.$data
                        );
                      },
                      null,
                      {
                        Pa: function () {
                          return a && !p.a.tb(a);
                        },
                        q: !0,
                      },
                    );
                  l.$() &&
                    ((r.K = l),
                    (l.equalityComparer = null),
                    (a = []),
                    (l.Zb = function (e) {
                      a.push(e),
                        p.a.C.fa(e, function (e) {
                          p.a.ya(a, e), a.length || (l.p(), (r.K = l = o));
                        });
                    }));
                }),
                (p.N.prototype.createChildContext = function (e, t, n) {
                  return new p.N(e, this, t, function (e, t) {
                    (e.$parentContext = t),
                      (e.$parent = t.$data),
                      (e.$parents = (t.$parents || []).slice(0)),
                      e.$parents.unshift(e.$parent),
                      n && n(e);
                  });
                }),
                (p.N.prototype.extend = function (e) {
                  return new p.N(this.K || this.$data, this, null, function (
                    t,
                    n,
                  ) {
                    (t.$rawData = n.$rawData),
                      p.a.extend(t, "function" == typeof e ? e() : e);
                  });
                });
              var m = p.a.f.I(),
                v = p.a.f.I();
              (p.Tb = function (e, t) {
                return 2 != arguments.length
                  ? p.a.f.get(e, v)
                  : (p.a.f.set(e, v, t), void (t.K && t.K.Zb(e)));
              }),
                (p.va = function (e, t, n) {
                  return 1 === e.nodeType && p.e.Kb(e), u(e, t, f(n), !0);
                }),
                (p.cc = function (e, t, n) {
                  return (n = f(n)), p.va(e, i(t, n, e), n);
                }),
                (p.Ja = function (e, t) {
                  (1 !== t.nodeType && 8 !== t.nodeType) || r(f(e), t, !0);
                }),
                (p.ub = function (e, t) {
                  if (
                    (!d && s.jQuery && (d = s.jQuery),
                    t && 1 !== t.nodeType && 8 !== t.nodeType)
                  )
                    throw Error(
                      "ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node",
                    );
                  (t = t || s.document.body), l(f(e), t, !0);
                }),
                (p.Oa = function (e) {
                  switch (e.nodeType) {
                    case 1:
                    case 8:
                      var t = p.Tb(e);
                      if (t) return t;
                      if (e.parentNode) return p.Oa(e.parentNode);
                  }
                  return o;
                }),
                (p.gc = function (e) {
                  return (e = p.Oa(e)) ? e.$data : o;
                }),
                p.b("bindingHandlers", p.d),
                p.b("applyBindings", p.ub),
                p.b("applyBindingsToDescendants", p.Ja),
                p.b("applyBindingAccessorsToNode", p.va),
                p.b("applyBindingsToNode", p.cc),
                p.b("contextFor", p.Oa),
                p.b("dataFor", p.gc);
            })(),
            (function (e) {
              function t(t, i) {
                var o,
                  s = a.hasOwnProperty(t) ? a[t] : e;
                s
                  ? s.U(i)
                  : ((s = a[t] = new p.Q()),
                    s.U(i),
                    n(t, function (e, n) {
                      var i = !(!n || !n.synchronous);
                      (r[t] = { definition: e, tc: i }),
                        delete a[t],
                        o || i
                          ? s.notifySubscribers(e)
                          : setTimeout(function () {
                              s.notifySubscribers(e);
                            }, 0);
                    }),
                    (o = !0));
              }
              function n(e, t) {
                i("getConfig", [e], function (n) {
                  n
                    ? i("loadComponent", [e, n], function (e) {
                        t(e, n);
                      })
                    : t(null, null);
                });
              }
              function i(t, n, a, r) {
                r || (r = p.g.loaders.slice(0));
                var o = r.shift();
                if (o) {
                  var s = o[t];
                  if (s) {
                    var l = !1;
                    if (
                      s.apply(
                        o,
                        n.concat(function (e) {
                          l ? a(null) : null !== e ? a(e) : i(t, n, a, r);
                        }),
                      ) !== e &&
                      ((l = !0), !o.suppressLoaderExceptions)
                    )
                      throw Error(
                        "Component loaders must supply values by invoking the callback, not by returning values synchronously.",
                      );
                  } else i(t, n, a, r);
                } else a(null);
              }
              var a = {},
                r = {};
              (p.g = {
                get: function (n, i) {
                  var a = r.hasOwnProperty(n) ? r[n] : e;
                  a
                    ? a.tc
                      ? p.k.u(function () {
                          i(a.definition);
                        })
                      : setTimeout(function () {
                          i(a.definition);
                        }, 0)
                    : t(n, i);
                },
                zb: function (e) {
                  delete r[e];
                },
                ob: i,
              }),
                (p.g.loaders = []),
                p.b("components", p.g),
                p.b("components.get", p.g.get),
                p.b("components.clearCachedDefinition", p.g.zb);
            })(),
            (function () {
              function e(e, t, n, i) {
                function a() {
                  0 === --s && i(o);
                }
                var o = {},
                  s = 2,
                  l = n.template;
                (n = n.viewModel),
                  l
                    ? r(t, l, function (t) {
                        p.g.ob("loadTemplate", [e, t], function (e) {
                          (o.template = e), a();
                        });
                      })
                    : a(),
                  n
                    ? r(t, n, function (t) {
                        p.g.ob("loadViewModel", [e, t], function (e) {
                          (o[d] = e), a();
                        });
                      })
                    : a();
              }
              function n(e, t, i) {
                if ("function" == typeof t)
                  i(function (e) {
                    return new t(e);
                  });
                else if ("function" == typeof t[d]) i(t[d]);
                else if ("instance" in t) {
                  var a = t.instance;
                  i(function () {
                    return a;
                  });
                } else
                  "viewModel" in t
                    ? n(e, t.viewModel, i)
                    : e("Unknown viewModel value: " + t);
              }
              function i(e) {
                switch (p.a.v(e)) {
                  case "script":
                    return p.a.ca(e.text);
                  case "textarea":
                    return p.a.ca(e.value);
                  case "template":
                    if (a(e.content)) return p.a.la(e.content.childNodes);
                }
                return p.a.la(e.childNodes);
              }
              function a(e) {
                return s.DocumentFragment
                  ? e instanceof DocumentFragment
                  : e && 11 === e.nodeType;
              }
              function r(e, n, i) {
                "string" == typeof n.require
                  ? t || s.require
                    ? (t || s.require)([n.require], i)
                    : e("Uses require, but no AMD loader is present")
                  : i(n);
              }
              function o(e) {
                return function (t) {
                  throw Error("Component '" + e + "': " + t);
                };
              }
              var c = {};
              (p.g.register = function (e, t) {
                if (!t) throw Error("Invalid configuration for " + e);
                if (p.g.Xa(e))
                  throw Error("Component " + e + " is already registered");
                c[e] = t;
              }),
                (p.g.Xa = function (e) {
                  return e in c;
                }),
                (p.g.Ec = function (e) {
                  delete c[e], p.g.zb(e);
                }),
                (p.g.Ab = {
                  getConfig: function (e, t) {
                    t(c.hasOwnProperty(e) ? c[e] : null);
                  },
                  loadComponent: function (t, n, i) {
                    var a = o(t);
                    r(a, n, function (n) {
                      e(t, a, n, i);
                    });
                  },
                  loadTemplate: function (e, t, n) {
                    if (((e = o(e)), "string" == typeof t)) n(p.a.ca(t));
                    else if (t instanceof Array) n(t);
                    else if (a(t)) n(p.a.O(t.childNodes));
                    else if (t.element)
                      if (
                        ((t = t.element),
                        s.HTMLElement
                          ? t instanceof HTMLElement
                          : t && t.tagName && 1 === t.nodeType)
                      )
                        n(i(t));
                      else if ("string" == typeof t) {
                        var r = l.getElementById(t);
                        r ? n(i(r)) : e("Cannot find element with ID " + t);
                      } else e("Unknown element type: " + t);
                    else e("Unknown template value: " + t);
                  },
                  loadViewModel: function (e, t, i) {
                    n(o(e), t, i);
                  },
                });
              var d = "createViewModel";
              p.b("components.register", p.g.register),
                p.b("components.isRegistered", p.g.Xa),
                p.b("components.unregister", p.g.Ec),
                p.b("components.defaultLoader", p.g.Ab),
                p.g.loaders.push(p.g.Ab),
                (p.g.$b = c);
            })(),
            (function () {
              function e(e, n) {
                var i = e.getAttribute("params");
                if (i) {
                  var i = t.parseBindingsString(i, n, e, {
                      valueAccessors: !0,
                      bindingParams: !0,
                    }),
                    i = p.a.pa(i, function (t) {
                      return p.w(t, null, { q: e });
                    }),
                    a = p.a.pa(i, function (t) {
                      var n = t.B();
                      return t.$()
                        ? p.w({
                            read: function () {
                              return p.a.c(t());
                            },
                            write:
                              p.Da(n) &&
                              function (e) {
                                t()(e);
                              },
                            q: e,
                          })
                        : n;
                    });
                  return a.hasOwnProperty("$raw") || (a.$raw = i), a;
                }
                return { $raw: {} };
              }
              (p.g.getComponentNameForNode = function (e) {
                return (e = p.a.v(e)), p.g.Xa(e) && e;
              }),
                (p.g.sb = function (t, n, i, a) {
                  if (1 === n.nodeType) {
                    var r = p.g.getComponentNameForNode(n);
                    if (r) {
                      if (((t = t || {}), t.component))
                        throw Error(
                          'Cannot use the "component" binding on a custom element matching a component',
                        );
                      var o = { name: r, params: e(n, i) };
                      t.component = a
                        ? function () {
                            return o;
                          }
                        : o;
                    }
                  }
                  return t;
                });
              var t = new p.L();
              9 > p.a.M &&
                ((p.g.register = (function (e) {
                  return function (t) {
                    return l.createElement(t), e.apply(this, arguments);
                  };
                })(p.g.register)),
                (l.createDocumentFragment = (function (e) {
                  return function () {
                    var t,
                      n = e(),
                      i = p.g.$b;
                    for (t in i) i.hasOwnProperty(t) && n.createElement(t);
                    return n;
                  };
                })(l.createDocumentFragment)));
            })(),
            (function (e) {
              function t(e, t, n) {
                if (((t = t.template), !t))
                  throw Error("Component '" + e + "' has no template");
                (e = p.a.la(t)), p.e.T(n, e);
              }
              function n(e, t, n, i) {
                var a = e.createViewModel;
                return a ? a.call(e, i, { element: t, templateNodes: n }) : i;
              }
              var i = 0;
              (p.d.component = {
                init: function (a, r, o, s, l) {
                  function c() {
                    var e = d && d.dispose;
                    "function" == typeof e && e.call(d), (u = null);
                  }
                  var d,
                    u,
                    f = p.a.O(p.e.childNodes(a));
                  return (
                    p.a.C.fa(a, c),
                    p.w(
                      function () {
                        var o,
                          s,
                          g = p.a.c(r());
                        if (
                          ("string" == typeof g
                            ? (o = g)
                            : ((o = p.a.c(g.name)), (s = p.a.c(g.params))),
                          !o)
                        )
                          throw Error("No component name specified");
                        var m = (u = ++i);
                        p.g.get(o, function (i) {
                          if (u === m) {
                            if ((c(), !i))
                              throw Error("Unknown component '" + o + "'");
                            t(o, i, a);
                            var r = n(i, a, f, s);
                            (i = l.createChildContext(r, e, function (e) {
                              (e.$component = r),
                                (e.$componentTemplateNodes = f);
                            })),
                              (d = r),
                              p.Ja(i, a);
                          }
                        });
                      },
                      null,
                      { q: a },
                    ),
                    { controlsDescendantBindings: !0 }
                  );
                },
              }),
                (p.e.R.component = !0);
            })();
          var v = { class: "className", for: "htmlFor" };
          (p.d.attr = {
            update: function (e, t) {
              var n = p.a.c(t()) || {};
              p.a.A(n, function (t, n) {
                n = p.a.c(n);
                var i = !1 === n || null === n || n === o;
                i && e.removeAttribute(t),
                  8 >= p.a.M && t in v
                    ? ((t = v[t]), i ? e.removeAttribute(t) : (e[t] = n))
                    : i || e.setAttribute(t, n.toString()),
                  "name" === t && p.a.Rb(e, i ? "" : n.toString());
              });
            },
          }),
            (function () {
              (p.d.checked = {
                after: ["value", "attr"],
                init: function (e, t, n) {
                  function i() {
                    var i = e.checked,
                      a = u ? r() : i;
                    if (!p.Z.Ca() && (!l || i)) {
                      var o = p.k.u(t);
                      c
                        ? d !== a
                          ? (i && (p.a.ga(o, a, !0), p.a.ga(o, d, !1)), (d = a))
                          : p.a.ga(o, a, i)
                        : p.h.ra(o, n, "checked", a, !0);
                    }
                  }
                  function a() {
                    var n = p.a.c(t());
                    e.checked = c ? 0 <= p.a.m(n, r()) : s ? n : r() === n;
                  }
                  var r = p.Nb(function () {
                      return n.has("checkedValue")
                        ? p.a.c(n.get("checkedValue"))
                        : n.has("value")
                        ? p.a.c(n.get("value"))
                        : e.value;
                    }),
                    s = "checkbox" == e.type,
                    l = "radio" == e.type;
                  if (s || l) {
                    var c = s && p.a.c(t()) instanceof Array,
                      d = c ? r() : o,
                      u = l || c;
                    l &&
                      !e.name &&
                      p.d.uniqueName.init(e, function () {
                        return !0;
                      }),
                      p.w(i, null, { q: e }),
                      p.a.n(e, "click", i),
                      p.w(a, null, { q: e });
                  }
                },
              }),
                (p.h.V.checked = !0),
                (p.d.checkedValue = {
                  update: function (e, t) {
                    e.value = p.a.c(t());
                  },
                });
            })(),
            (p.d.css = {
              update: function (e, t) {
                var n = p.a.c(t());
                null !== n && "object" == typeof n
                  ? p.a.A(n, function (t, n) {
                      (n = p.a.c(n)), p.a.Ia(e, t, n);
                    })
                  : ((n = String(n || "")),
                    p.a.Ia(e, e.__ko__cssValue, !1),
                    (e.__ko__cssValue = n),
                    p.a.Ia(e, n, !0));
              },
            }),
            (p.d.enable = {
              update: function (e, t) {
                var n = p.a.c(t());
                n && e.disabled
                  ? e.removeAttribute("disabled")
                  : n || e.disabled || (e.disabled = !0);
              },
            }),
            (p.d.disable = {
              update: function (e, t) {
                p.d.enable.update(e, function () {
                  return !p.a.c(t());
                });
              },
            }),
            (p.d.event = {
              init: function (e, t, n, i, a) {
                var r = t() || {};
                p.a.A(r, function (r) {
                  "string" == typeof r &&
                    p.a.n(e, r, function (e) {
                      var o,
                        s = t()[r];
                      if (s) {
                        try {
                          var l = p.a.O(arguments);
                          (i = a.$data), l.unshift(i), (o = s.apply(i, l));
                        } finally {
                          !0 !== o &&
                            (e.preventDefault
                              ? e.preventDefault()
                              : (e.returnValue = !1));
                        }
                        !1 === n.get(r + "Bubble") &&
                          ((e.cancelBubble = !0),
                          e.stopPropagation && e.stopPropagation());
                      }
                    });
                });
              },
            }),
            (p.d.foreach = {
              Ib: function (e) {
                return function () {
                  var t = e(),
                    n = p.a.cb(t);
                  return n && "number" != typeof n.length
                    ? (p.a.c(t),
                      {
                        foreach: n.data,
                        as: n.as,
                        includeDestroyed: n.includeDestroyed,
                        afterAdd: n.afterAdd,
                        beforeRemove: n.beforeRemove,
                        afterRender: n.afterRender,
                        beforeMove: n.beforeMove,
                        afterMove: n.afterMove,
                        templateEngine: p.P.Va,
                      })
                    : { foreach: t, templateEngine: p.P.Va };
                };
              },
              init: function (e, t) {
                return p.d.template.init(e, p.d.foreach.Ib(t));
              },
              update: function (e, t, n, i, a) {
                return p.d.template.update(e, p.d.foreach.Ib(t), n, i, a);
              },
            }),
            (p.h.ka.foreach = !1),
            (p.e.R.foreach = !0),
            (p.d.hasfocus = {
              init: function (e, t, n) {
                function i(i) {
                  e.__ko_hasfocusUpdating = !0;
                  var a = e.ownerDocument;
                  if ("activeElement" in a) {
                    var r;
                    try {
                      r = a.activeElement;
                    } catch (o) {
                      r = a.body;
                    }
                    i = r === e;
                  }
                  (a = t()),
                    p.h.ra(a, n, "hasfocus", i, !0),
                    (e.__ko_hasfocusLastValue = i),
                    (e.__ko_hasfocusUpdating = !1);
                }
                var a = i.bind(null, !0),
                  r = i.bind(null, !1);
                p.a.n(e, "focus", a),
                  p.a.n(e, "focusin", a),
                  p.a.n(e, "blur", r),
                  p.a.n(e, "focusout", r);
              },
              update: function (e, t) {
                var n = !!p.a.c(t());
                e.__ko_hasfocusUpdating ||
                  e.__ko_hasfocusLastValue === n ||
                  (n ? e.focus() : e.blur(),
                  p.k.u(p.a.qa, null, [e, n ? "focusin" : "focusout"]));
              },
            }),
            (p.h.V.hasfocus = !0),
            (p.d.hasFocus = p.d.hasfocus),
            (p.h.V.hasFocus = !0),
            (p.d.html = {
              init: function () {
                return { controlsDescendantBindings: !0 };
              },
              update: function (e, t) {
                p.a.gb(e, t());
              },
            }),
            r("if"),
            r("ifnot", !1, !0),
            r("with", !0, !1, function (e, t) {
              return e.createChildContext(t);
            });
          var h = {};
          (p.d.options = {
            init: function (e) {
              if ("select" !== p.a.v(e))
                throw Error("options binding applies only to SELECT elements");
              for (; 0 < e.length; ) e.remove(0);
              return { controlsDescendantBindings: !0 };
            },
            update: function (e, t, n) {
              function i() {
                return p.a.xa(e.options, function (e) {
                  return e.selected;
                });
              }
              function a(e, t, n) {
                var i = typeof t;
                return "function" == i ? t(e) : "string" == i ? e[t] : n;
              }
              function r(t, i) {
                if (m && d) p.i.Y(e, p.a.c(n.get("value")), !0);
                else if (g.length) {
                  var a = 0 <= p.a.m(g, p.i.s(i[0]));
                  p.a.Sb(i[0], a),
                    m && !a && p.k.u(p.a.qa, null, [e, "change"]);
                }
              }
              var s = e.multiple,
                l = 0 != e.length && s ? e.scrollTop : null,
                c = p.a.c(t()),
                d = n.get("valueAllowUnset") && n.has("value"),
                u = n.get("optionsIncludeDestroyed");
              t = {};
              var f,
                g = [];
              d ||
                (s
                  ? (g = p.a.Ka(i(), p.i.s))
                  : 0 <= e.selectedIndex &&
                    g.push(p.i.s(e.options[e.selectedIndex]))),
                c &&
                  ("undefined" == typeof c.length && (c = [c]),
                  (f = p.a.xa(c, function (e) {
                    return u || e === o || null === e || !p.a.c(e._destroy);
                  })),
                  n.has("optionsCaption") &&
                    ((c = p.a.c(n.get("optionsCaption"))),
                    null !== c && c !== o && f.unshift(h)));
              var m = !1;
              (t.beforeRemove = function (t) {
                e.removeChild(t);
              }),
                (c = r),
                n.has("optionsAfterRender") &&
                  "function" == typeof n.get("optionsAfterRender") &&
                  (c = function (e, t) {
                    r(0, t),
                      p.k.u(n.get("optionsAfterRender"), null, [
                        t[0],
                        e !== h ? e : o,
                      ]);
                  }),
                p.a.fb(
                  e,
                  f,
                  function (t, i, r) {
                    return (
                      r.length &&
                        ((g = !d && r[0].selected ? [p.i.s(r[0])] : []),
                        (m = !0)),
                      (i = e.ownerDocument.createElement("option")),
                      t === h
                        ? (p.a.Ha(i, n.get("optionsCaption")), p.i.Y(i, o))
                        : ((r = a(t, n.get("optionsValue"), t)),
                          p.i.Y(i, p.a.c(r)),
                          (t = a(t, n.get("optionsText"), r)),
                          p.a.Ha(i, t)),
                      [i]
                    );
                  },
                  t,
                  c,
                ),
                p.k.u(function () {
                  d
                    ? p.i.Y(e, p.a.c(n.get("value")), !0)
                    : (s
                        ? g.length && i().length < g.length
                        : g.length && 0 <= e.selectedIndex
                        ? p.i.s(e.options[e.selectedIndex]) !== g[0]
                        : g.length || 0 <= e.selectedIndex) &&
                      p.a.qa(e, "change");
                }),
                p.a.kc(e),
                l && 20 < Math.abs(l - e.scrollTop) && (e.scrollTop = l);
            },
          }),
            (p.d.options.ab = p.a.f.I()),
            (p.d.selectedOptions = {
              after: ["options", "foreach"],
              init: function (e, t, n) {
                p.a.n(e, "change", function () {
                  var i = t(),
                    a = [];
                  p.a.o(e.getElementsByTagName("option"), function (e) {
                    e.selected && a.push(p.i.s(e));
                  }),
                    p.h.ra(i, n, "selectedOptions", a);
                });
              },
              update: function (e, t) {
                if ("select" != p.a.v(e))
                  throw Error("values binding applies only to SELECT elements");
                var n = p.a.c(t());
                n &&
                  "number" == typeof n.length &&
                  p.a.o(e.getElementsByTagName("option"), function (e) {
                    var t = 0 <= p.a.m(n, p.i.s(e));
                    p.a.Sb(e, t);
                  });
              },
            }),
            (p.h.V.selectedOptions = !0),
            (p.d.style = {
              update: function (e, t) {
                var n = p.a.c(t() || {});
                p.a.A(n, function (t, n) {
                  (n = p.a.c(n)),
                    (null !== n && n !== o && !1 !== n) || (n = ""),
                    (e.style[t] = n);
                });
              },
            }),
            (p.d.submit = {
              init: function (e, t, n, i, a) {
                if ("function" != typeof t())
                  throw Error(
                    "The value for a submit binding must be a function",
                  );
                p.a.n(e, "submit", function (n) {
                  var i,
                    r = t();
                  try {
                    i = r.call(a.$data, e);
                  } finally {
                    !0 !== i &&
                      (n.preventDefault
                        ? n.preventDefault()
                        : (n.returnValue = !1));
                  }
                });
              },
            }),
            (p.d.text = {
              init: function () {
                return { controlsDescendantBindings: !0 };
              },
              update: function (e, t) {
                p.a.Ha(e, t());
              },
            }),
            (p.e.R.text = !0),
            (function () {
              if (s && s.navigator)
                var e = function (e) {
                    if (e) return parseFloat(e[1]);
                  },
                  t = s.opera && s.opera.version && parseInt(s.opera.version()),
                  n = s.navigator.userAgent,
                  i = e(n.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                  a = e(n.match(/Firefox\/([^ ]*)/));
              if (10 > p.a.M)
                var r = p.a.f.I(),
                  l = p.a.f.I(),
                  c = function (e) {
                    var t = this.activeElement;
                    (t = t && p.a.f.get(t, l)) && t(e);
                  },
                  d = function (e, t) {
                    var n = e.ownerDocument;
                    p.a.f.get(n, r) ||
                      (p.a.f.set(n, r, !0), p.a.n(n, "selectionchange", c)),
                      p.a.f.set(e, l, t);
                  };
              (p.d.textInput = {
                init: function (e, n, r) {
                  function s(t, n) {
                    p.a.n(e, t, n);
                  }
                  function l() {
                    var t = p.a.c(n());
                    (null !== t && t !== o) || (t = ""),
                      g !== o && t === g
                        ? setTimeout(l, 4)
                        : e.value !== t && ((m = t), (e.value = t));
                  }
                  function c() {
                    f || ((g = e.value), (f = setTimeout(u, 4)));
                  }
                  function u() {
                    clearTimeout(f), (g = f = o);
                    var t = e.value;
                    m !== t && ((m = t), p.h.ra(n(), r, "textInput", t));
                  }
                  var f,
                    g,
                    m = e.value;
                  10 > p.a.M
                    ? (s("propertychange", function (e) {
                        "value" === e.propertyName && u();
                      }),
                      8 == p.a.M && (s("keyup", u), s("keydown", u)),
                      8 <= p.a.M && (d(e, u), s("dragend", c)))
                    : (s("input", u),
                      5 > i && "textarea" === p.a.v(e)
                        ? (s("keydown", c), s("paste", c), s("cut", c))
                        : 11 > t
                        ? s("keydown", c)
                        : 4 > a &&
                          (s("DOMAutoComplete", u),
                          s("dragdrop", u),
                          s("drop", u))),
                    s("change", u),
                    p.w(l, null, { q: e });
                },
              }),
                (p.h.V.textInput = !0),
                (p.d.textinput = {
                  preprocess: function (e, t, n) {
                    n("textInput", e);
                  },
                });
            })(),
            (p.d.uniqueName = {
              init: function (e, t) {
                if (t()) {
                  var n = "ko_unique_" + ++p.d.uniqueName.fc;
                  p.a.Rb(e, n);
                }
              },
            }),
            (p.d.uniqueName.fc = 0),
            (p.d.value = {
              after: ["options", "foreach"],
              init: function (e, t, n) {
                if (
                  "input" != e.tagName.toLowerCase() ||
                  ("checkbox" != e.type && "radio" != e.type)
                ) {
                  var i = ["change"],
                    a = n.get("valueUpdate"),
                    r = !1,
                    o = null;
                  a &&
                    ("string" == typeof a && (a = [a]),
                    p.a.ia(i, a),
                    (i = p.a.wb(i)));
                  var s = function () {
                    (o = null), (r = !1);
                    var i = t(),
                      a = p.i.s(e);
                    p.h.ra(i, n, "value", a);
                  };
                  !p.a.M ||
                    "input" != e.tagName.toLowerCase() ||
                    "text" != e.type ||
                    "off" == e.autocomplete ||
                    (e.form && "off" == e.form.autocomplete) ||
                    -1 != p.a.m(i, "propertychange") ||
                    (p.a.n(e, "propertychange", function () {
                      r = !0;
                    }),
                    p.a.n(e, "focus", function () {
                      r = !1;
                    }),
                    p.a.n(e, "blur", function () {
                      r && s();
                    })),
                    p.a.o(i, function (t) {
                      var n = s;
                      p.a.Dc(t, "after") &&
                        ((n = function () {
                          (o = p.i.s(e)), setTimeout(s, 0);
                        }),
                        (t = t.substring(5))),
                        p.a.n(e, t, n);
                    });
                  var l = function () {
                    var i = p.a.c(t()),
                      a = p.i.s(e);
                    if (null !== o && i === o) setTimeout(l, 0);
                    else if (i !== a)
                      if ("select" === p.a.v(e)) {
                        var r = n.get("valueAllowUnset"),
                          a = function () {
                            p.i.Y(e, i, r);
                          };
                        a(),
                          r || i === p.i.s(e)
                            ? setTimeout(a, 0)
                            : p.k.u(p.a.qa, null, [e, "change"]);
                      } else p.i.Y(e, i);
                  };
                  p.w(l, null, { q: e });
                } else p.va(e, { checkedValue: t });
              },
              update: function () {},
            }),
            (p.h.V.value = !0),
            (p.d.visible = {
              update: function (e, t) {
                var n = p.a.c(t()),
                  i = "none" != e.style.display;
                n && !i
                  ? (e.style.display = "")
                  : !n && i && (e.style.display = "none");
              },
            }),
            (function (e) {
              p.d[e] = {
                init: function (t, n, i, a, r) {
                  return p.d.event.init.call(
                    this,
                    t,
                    function () {
                      var t = {};
                      return (t[e] = n()), t;
                    },
                    i,
                    a,
                    r,
                  );
                },
              };
            })("click"),
            (p.J = function () {}),
            (p.J.prototype.renderTemplateSource = function () {
              throw Error("Override renderTemplateSource");
            }),
            (p.J.prototype.createJavaScriptEvaluatorBlock = function () {
              throw Error("Override createJavaScriptEvaluatorBlock");
            }),
            (p.J.prototype.makeTemplateSource = function (e, t) {
              if ("string" == typeof e) {
                t = t || l;
                var n = t.getElementById(e);
                if (!n) throw Error("Cannot find template with ID " + e);
                return new p.t.l(n);
              }
              if (1 == e.nodeType || 8 == e.nodeType) return new p.t.ha(e);
              throw Error("Unknown template type: " + e);
            }),
            (p.J.prototype.renderTemplate = function (e, t, n, i) {
              return (
                (e = this.makeTemplateSource(e, i)),
                this.renderTemplateSource(e, t, n, i)
              );
            }),
            (p.J.prototype.isTemplateRewritten = function (e, t) {
              return (
                !1 === this.allowTemplateRewriting ||
                this.makeTemplateSource(e, t).data("isRewritten")
              );
            }),
            (p.J.prototype.rewriteTemplate = function (e, t, n) {
              (e = this.makeTemplateSource(e, n)),
                (t = t(e.text())),
                e.text(t),
                e.data("isRewritten", !0);
            }),
            p.b("templateEngine", p.J),
            (p.kb = (function () {
              function e(e, t, n, i) {
                e = p.h.bb(e);
                for (var a = p.h.ka, r = 0; r < e.length; r++) {
                  var o = e[r].key;
                  if (a.hasOwnProperty(o)) {
                    var s = a[o];
                    if ("function" == typeof s) {
                      if ((o = s(e[r].value))) throw Error(o);
                    } else if (!s)
                      throw Error(
                        "This template engine does not support the '" +
                          o +
                          "' binding within its templates",
                      );
                  }
                }
                return (
                  (n =
                    "ko.__tr_ambtns(function($context,$element){return(function(){return{ " +
                    p.h.Ea(e, { valueAccessors: !0 }) +
                    " } })()},'" +
                    n.toLowerCase() +
                    "')"),
                  i.createJavaScriptEvaluatorBlock(n) + t
                );
              }
              var t =
                  /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                n = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
              return {
                lc: function (e, t, n) {
                  t.isTemplateRewritten(e, n) ||
                    t.rewriteTemplate(
                      e,
                      function (e) {
                        return p.kb.xc(e, t);
                      },
                      n,
                    );
                },
                xc: function (i, a) {
                  return i
                    .replace(t, function (t, n, i, r, o) {
                      return e(o, n, i, a);
                    })
                    .replace(n, function (t, n) {
                      return e(n, "<!-- ko -->", "#comment", a);
                    });
                },
                dc: function (e, t) {
                  return p.H.$a(function (n, i) {
                    var a = n.nextSibling;
                    a && a.nodeName.toLowerCase() === t && p.va(a, e, i);
                  });
                },
              };
            })()),
            p.b("__tr_ambtns", p.kb.dc),
            (function () {
              (p.t = {}),
                (p.t.l = function (e) {
                  this.l = e;
                }),
                (p.t.l.prototype.text = function () {
                  var e = p.a.v(this.l),
                    e =
                      "script" === e
                        ? "text"
                        : "textarea" === e
                        ? "value"
                        : "innerHTML";
                  if (0 == arguments.length) return this.l[e];
                  var t = arguments[0];
                  "innerHTML" === e ? p.a.gb(this.l, t) : (this.l[e] = t);
                });
              var e = p.a.f.I() + "_";
              p.t.l.prototype.data = function (t) {
                return 1 === arguments.length
                  ? p.a.f.get(this.l, e + t)
                  : void p.a.f.set(this.l, e + t, arguments[1]);
              };
              var t = p.a.f.I();
              (p.t.ha = function (e) {
                this.l = e;
              }),
                (p.t.ha.prototype = new p.t.l()),
                (p.t.ha.prototype.text = function () {
                  if (0 == arguments.length) {
                    var e = p.a.f.get(this.l, t) || {};
                    return e.lb === o && e.Na && (e.lb = e.Na.innerHTML), e.lb;
                  }
                  p.a.f.set(this.l, t, { lb: arguments[0] });
                }),
                (p.t.l.prototype.nodes = function () {
                  return 0 == arguments.length
                    ? (p.a.f.get(this.l, t) || {}).Na
                    : void p.a.f.set(this.l, t, { Na: arguments[0] });
                }),
                p.b("templateSources", p.t),
                p.b("templateSources.domElement", p.t.l),
                p.b("templateSources.anonymousTemplate", p.t.ha);
            })(),
            (function () {
              function e(e, t, n) {
                var i;
                for (t = p.e.nextSibling(t); e && (i = e) !== t; )
                  (e = p.e.nextSibling(i)), n(i, e);
              }
              function t(t, n) {
                if (t.length) {
                  var i = t[0],
                    a = t[t.length - 1],
                    r = i.parentNode,
                    o = p.L.instance,
                    s = o.preprocessNode;
                  if (s) {
                    if (
                      (e(i, a, function (e, t) {
                        var n = e.previousSibling,
                          r = s.call(o, e);
                        r &&
                          (e === i && (i = r[0] || t),
                          e === a && (a = r[r.length - 1] || n));
                      }),
                      (t.length = 0),
                      !i)
                    )
                      return;
                    i === a ? t.push(i) : (t.push(i, a), p.a.na(t, r));
                  }
                  e(i, a, function (e) {
                    (1 !== e.nodeType && 8 !== e.nodeType) || p.ub(n, e);
                  }),
                    e(i, a, function (e) {
                      (1 !== e.nodeType && 8 !== e.nodeType) || p.H.Xb(e, [n]);
                    }),
                    p.a.na(t, r);
                }
              }
              function n(e) {
                return e.nodeType ? e : 0 < e.length ? e[0] : null;
              }
              function i(e, i, a, o, s) {
                s = s || {};
                var l = ((e && n(e)) || a || {}).ownerDocument,
                  c = s.templateEngine || r;
                if (
                  (p.kb.lc(a, c, l),
                  (a = c.renderTemplate(a, o, s, l)),
                  "number" != typeof a.length ||
                    (0 < a.length && "number" != typeof a[0].nodeType))
                )
                  throw Error(
                    "Template engine must return an array of DOM nodes",
                  );
                switch (((l = !1), i)) {
                  case "replaceChildren":
                    p.e.T(e, a), (l = !0);
                    break;
                  case "replaceNode":
                    p.a.Qb(e, a), (l = !0);
                    break;
                  case "ignoreTargetNode":
                    break;
                  default:
                    throw Error("Unknown renderMode: " + i);
                }
                return (
                  l &&
                    (t(a, o),
                    s.afterRender && p.k.u(s.afterRender, null, [a, o.$data])),
                  a
                );
              }
              function a(e, t, n) {
                return p.F(e) ? e() : "function" == typeof e ? e(t, n) : e;
              }
              var r;
              (p.hb = function (e) {
                if (e != o && !(e instanceof p.J))
                  throw Error(
                    "templateEngine must inherit from ko.templateEngine",
                  );
                r = e;
              }),
                (p.eb = function (e, t, s, l, c) {
                  if (((s = s || {}), (s.templateEngine || r) == o))
                    throw Error(
                      "Set a template engine before calling renderTemplate",
                    );
                  if (((c = c || "replaceChildren"), l)) {
                    var d = n(l);
                    return p.j(
                      function () {
                        var r = t && t instanceof p.N ? t : new p.N(p.a.c(t)),
                          o = a(e, r.$data, r),
                          r = i(l, c, o, r, s);
                        "replaceNode" == c && ((l = r), (d = n(l)));
                      },
                      null,
                      {
                        Pa: function () {
                          return !d || !p.a.Qa(d);
                        },
                        q: d && "replaceNode" == c ? d.parentNode : d,
                      },
                    );
                  }
                  return p.H.$a(function (n) {
                    p.eb(e, t, s, n, "replaceNode");
                  });
                }),
                (p.Cc = function (e, n, r, s, l) {
                  function c(e, n) {
                    t(n, u), r.afterRender && r.afterRender(n, e), (u = null);
                  }
                  function d(t, n) {
                    u = l.createChildContext(t, r.as, function (e) {
                      e.$index = n;
                    });
                    var o = a(e, t, u);
                    return i(null, "ignoreTargetNode", o, u, r);
                  }
                  var u;
                  return p.j(
                    function () {
                      var e = p.a.c(n) || [];
                      "undefined" == typeof e.length && (e = [e]),
                        (e = p.a.xa(e, function (e) {
                          return (
                            r.includeDestroyed ||
                            e === o ||
                            null === e ||
                            !p.a.c(e._destroy)
                          );
                        })),
                        p.k.u(p.a.fb, null, [s, e, d, r, c]);
                    },
                    null,
                    { q: s },
                  );
                });
              var s = p.a.f.I();
              (p.d.template = {
                init: function (e, t) {
                  var n = p.a.c(t());
                  if ("string" == typeof n || n.name) p.e.ma(e);
                  else {
                    if ("nodes" in n) {
                      if (((n = n.nodes || []), p.F(n)))
                        throw Error(
                          'The "nodes" option must be a plain, non-observable array.',
                        );
                    } else n = p.e.childNodes(e);
                    (n = p.a.Jb(n)), new p.t.ha(e).nodes(n);
                  }
                  return { controlsDescendantBindings: !0 };
                },
                update: function (e, t, n, i, a) {
                  var r,
                    l = t();
                  (t = p.a.c(l)),
                    (n = !0),
                    (i = null),
                    "string" == typeof t
                      ? (t = {})
                      : ((l = t.name),
                        "if" in t && (n = p.a.c(t["if"])),
                        n && "ifnot" in t && (n = !p.a.c(t.ifnot)),
                        (r = p.a.c(t.data))),
                    "foreach" in t
                      ? (i = p.Cc(l || e, (n && t.foreach) || [], t, e, a))
                      : n
                      ? ((a = "data" in t ? a.createChildContext(r, t.as) : a),
                        (i = p.eb(l || e, a, t, e)))
                      : p.e.ma(e),
                    (a = i),
                    (r = p.a.f.get(e, s)) && "function" == typeof r.p && r.p(),
                    p.a.f.set(e, s, a && a.$() ? a : o);
                },
              }),
                (p.h.ka.template = function (e) {
                  return (
                    (e = p.h.bb(e)),
                    (1 == e.length && e[0].unknown) || p.h.vc(e, "name")
                      ? null
                      : "This template engine does not support anonymous templates nested within its templates"
                  );
                }),
                (p.e.R.template = !0);
            })(),
            p.b("setTemplateEngine", p.hb),
            p.b("renderTemplate", p.eb),
            (p.a.Cb = function (e, t, n) {
              if (e.length && t.length) {
                var i, a, r, o, s;
                for (i = a = 0; (!n || i < n) && (o = e[a]); ++a) {
                  for (r = 0; (s = t[r]); ++r)
                    if (o.value === s.value) {
                      (o.moved = s.index),
                        (s.moved = o.index),
                        t.splice(r, 1),
                        (i = r = 0);
                      break;
                    }
                  i += r;
                }
              }
            }),
            (p.a.Ma = (function () {
              function e(e, t, n, i, a) {
                var r,
                  o,
                  s,
                  l,
                  c,
                  d = Math.min,
                  u = Math.max,
                  f = [],
                  g = e.length,
                  m = t.length,
                  v = m - g || 1,
                  h = g + m + 1;
                for (r = 0; r <= g; r++)
                  for (
                    l = s, f.push((s = [])), c = d(m, r + v), o = u(0, r - 1);
                    o <= c;
                    o++
                  )
                    s[o] = o
                      ? r
                        ? e[r - 1] === t[o - 1]
                          ? l[o - 1]
                          : d(l[o] || h, s[o - 1] || h) + 1
                        : o + 1
                      : r + 1;
                for (d = [], u = [], v = [], r = g, o = m; r || o; )
                  (m = f[r][o] - 1),
                    o && m === f[r][o - 1]
                      ? u.push(
                          (d[d.length] = {
                            status: n,
                            value: t[--o],
                            index: o,
                          }),
                        )
                      : r && m === f[r - 1][o]
                      ? v.push(
                          (d[d.length] = {
                            status: i,
                            value: e[--r],
                            index: r,
                          }),
                        )
                      : (--o,
                        --r,
                        a.sparse ||
                          d.push({ status: "retained", value: t[o] }));
                return p.a.Cb(u, v, 10 * g), d.reverse();
              }
              return function (t, n, i) {
                return (
                  (i = "boolean" == typeof i ? { dontLimitMoves: i } : i || {}),
                  (t = t || []),
                  (n = n || []),
                  t.length <= n.length
                    ? e(t, n, "added", "deleted", i)
                    : e(n, t, "deleted", "added", i)
                );
              };
            })()),
            p.b("utils.compareArrays", p.a.Ma),
            (function () {
              function e(e, t, n, i, a) {
                var r = [],
                  s = p.j(
                    function () {
                      var o = t(n, a, p.a.na(r, e)) || [];
                      0 < r.length &&
                        (p.a.Qb(r, o), i && p.k.u(i, null, [n, o, a])),
                        (r.length = 0),
                        p.a.ia(r, o);
                    },
                    null,
                    {
                      q: e,
                      Pa: function () {
                        return !p.a.tb(r);
                      },
                    },
                  );
                return { aa: r, j: s.$() ? s : o };
              }
              var t = p.a.f.I();
              p.a.fb = function (n, i, a, r, s) {
                function l(e, t) {
                  (S = u[t]),
                    h !== t && (T[e] = S),
                    S.Ua(h++),
                    p.a.na(S.aa, n),
                    m.push(S),
                    _.push(S);
                }
                function c(e, t) {
                  if (e)
                    for (var n = 0, i = t.length; n < i; n++)
                      t[n] &&
                        p.a.o(t[n].aa, function (i) {
                          e(i, n, t[n].wa);
                        });
                }
                (i = i || []), (r = r || {});
                var d = p.a.f.get(n, t) === o,
                  u = p.a.f.get(n, t) || [],
                  f = p.a.Ka(u, function (e) {
                    return e.wa;
                  }),
                  g = p.a.Ma(f, i, r.dontLimitMoves),
                  m = [],
                  v = 0,
                  h = 0,
                  b = [],
                  _ = [];
                i = [];
                for (var S, y, w, T = [], f = [], C = 0; (y = g[C]); C++)
                  switch (((w = y.moved), y.status)) {
                    case "deleted":
                      w === o &&
                        ((S = u[v]),
                        S.j && S.j.p(),
                        b.push.apply(b, p.a.na(S.aa, n)),
                        r.beforeRemove && ((i[C] = S), _.push(S))),
                        v++;
                      break;
                    case "retained":
                      l(C, v++);
                      break;
                    case "added":
                      w !== o
                        ? l(C, w)
                        : ((S = { wa: y.value, Ua: p.r(h++) }),
                          m.push(S),
                          _.push(S),
                          d || (f[C] = S));
                  }
                c(r.beforeMove, T),
                  p.a.o(b, r.beforeRemove ? p.S : p.removeNode);
                for (var k, C = 0, d = p.e.firstChild(n); (S = _[C]); C++) {
                  for (
                    S.aa || p.a.extend(S, e(n, a, S.wa, s, S.Ua)), v = 0;
                    (g = S.aa[v]);
                    d = g.nextSibling, k = g, v++
                  )
                    g !== d && p.e.Fb(n, g, k);
                  !S.rc && s && (s(S.wa, S.aa, S.Ua), (S.rc = !0));
                }
                c(r.beforeRemove, i),
                  c(r.afterMove, T),
                  c(r.afterAdd, f),
                  p.a.f.set(n, t, m);
              };
            })(),
            p.b("utils.setDomNodeChildrenFromArrayMapping", p.a.fb),
            (p.P = function () {
              this.allowTemplateRewriting = !1;
            }),
            (p.P.prototype = new p.J()),
            (p.P.prototype.renderTemplateSource = function (e, t, n, i) {
              return (t = (9 > p.a.M ? 0 : e.nodes) ? e.nodes() : null)
                ? p.a.O(t.cloneNode(!0).childNodes)
                : ((e = e.text()), p.a.ca(e, i));
            }),
            (p.P.Va = new p.P()),
            p.hb(p.P.Va),
            p.b("nativeTemplateEngine", p.P),
            (function () {
              (p.Ya = function () {
                var e = (this.uc = (function () {
                  if (!d || !d.tmpl) return 0;
                  try {
                    if (0 <= d.tmpl.tag.tmpl.open.toString().indexOf("__"))
                      return 2;
                  } catch (e) {}
                  return 1;
                })());
                (this.renderTemplateSource = function (t, n, i, a) {
                  if (((a = a || l), (i = i || {}), 2 > e))
                    throw Error(
                      "Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.",
                    );
                  var r = t.data("precompiled");
                  return (
                    r ||
                      ((r = t.text() || ""),
                      (r = d.template(
                        null,
                        "{{ko_with $item.koBindingContext}}" +
                          r +
                          "{{/ko_with}}",
                      )),
                      t.data("precompiled", r)),
                    (t = [n.$data]),
                    (n = d.extend({ koBindingContext: n }, i.templateOptions)),
                    (n = d.tmpl(r, t, n)),
                    n.appendTo(a.createElement("div")),
                    (d.fragments = {}),
                    n
                  );
                }),
                  (this.createJavaScriptEvaluatorBlock = function (e) {
                    return "{{ko_code ((function() { return " + e + " })()) }}";
                  }),
                  (this.addTemplate = function (e, t) {
                    l.write(
                      "<script type='text/html' id='" +
                        e +
                        "'>" +
                        t +
                        "</script>",
                    );
                  }),
                  0 < e &&
                    ((d.tmpl.tag.ko_code = { open: "__.push($1 || '');" }),
                    (d.tmpl.tag.ko_with = { open: "with($1) {", close: "} " }));
              }),
                (p.Ya.prototype = new p.J());
              var e = new p.Ya();
              0 < e.uc && p.hb(e), p.b("jqueryTmplTemplateEngine", p.Ya);
            })();
        });
      })();
    })();
  },
  function (e, t, n) {
    function i(e) {
      e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
    }
    var a = n(4),
      r = n(5),
      o = n(7),
      s = n(8),
      l = r.String,
      c = o.Helper,
      d = 1;
    t.applyExtensions = function (e) {
      function t(t, n) {
        var i = n.componentId;
        if (i && o[i]) {
          var a = o[i],
            r = a.parentViewModel,
            l = a.alias,
            c = e.unwrap(a.events) || {};
          l &&
            ("string" == typeof l && (l = r[l]),
            e.isWritableObservable(l) &&
              (l(t),
              e.utils.domNodeDisposal.addDisposeCallback(n, function () {
                l(null);
              }))),
            e.utils.objectForEach(c, function (e, n) {
              e &&
                n &&
                ("load" === e
                  ? n.call(r, t)
                  : ((e = "on" + e.charAt(0).toUpperCase() + e.substr(1)),
                    s.isComponentEvent(t[e]) &&
                      t[e].subscribe(function (e) {
                        n.apply(r, e);
                      })));
            });
        }
      }
      var r = 1,
        o = {};
      e.components.loaders.unshift({
        loadComponent: function (n, i, a) {
          e.components.defaultLoader.loadComponent(n, i, function (e) {
            i.enableExtensions &&
              !(function (n) {
                e.createViewModel = function (e, i) {
                  var a = n(e, i);
                  return t(a, i.element), a;
                };
              })(e.createViewModel),
              a(e);
          });
        },
      }),
        (function (t) {
          e.bindingHandlers.component.init = function (n, i, a, s, l) {
            var c = e.unwrap(i());
            if ("string" != typeof c) {
              var d = c.publicMethods,
                u = c.event;
              if (d || u) {
                var p = (n.componentId = r++);
                (o[p] = { parentViewModel: s, alias: d, events: u }),
                  e.utils.domNodeDisposal.addDisposeCallback(n, function () {
                    delete o[p];
                  });
              }
            }
            return t(n, i, a, s, l);
          };
        })(e.bindingHandlers.component.init),
        (e.bindingHandlers.pageViewComponent = {
          init: function (t, n, i, a, r) {
            var o = e.unwrap(n());
            (o.publicMethods = a.viewInterfaces[r.$index()]),
              (o.event = o.event || {}),
              (o.event.load = a.view_onLoad),
              (o.event.switchView = a.view_onSwitchView);
            var s = function () {
              return o;
            };
            return e.bindingHandlers.component.init(t, s, i, a, r);
          },
        }),
        (e.bindingHandlers.component.preprocess = function (e) {
          return !e || ('"' !== e.charAt(0) && "'" !== e.charAt(0))
            ? e
            : l.format("{ name: {0}, params: { } }", e);
        }),
        (e.bindingHandlers.invertOrder = {
          init: function (t, n) {
            var i = e.unwrap(n()),
              a = [];
            if (i) {
              for (; t.firstChild && a.length < 3; ) {
                var r = t.firstChild;
                r.nodeType === d && a.push(r), t.removeChild(r);
              }
              2 === a.length && (t.appendChild(a[1]), t.appendChild(a[0]));
            }
          },
        }),
        (e.bindingHandlers.defineGlobals = {
          init: function (t, n, i, a, r) {
            function o(e) {
              var t = "";
              try {
                var n = document.createElement("div");
                (n.innerHTML = e),
                  n.childNodes.length > 0 &&
                    n.childNodes[0].value &&
                    (t = n.childNodes[0].value);
              } catch (i) {}
              return t;
            }
            var s = e.unwrap(n());
            s.sFT = o(s.sFT) || s.sFT || o(s.sFTTag);
            var l = r.extend({
              svr: s,
              str: s.str,
              html: s.html,
              $location: e.observable(),
            });
            if (
              (l.$location.subscribe(function (e) {
                e && document.location.replace(e);
              }),
              i.has("bodyCssClass"))
            ) {
              var d = c.getIEVersion();
              if (d) {
                var u = { css: {} };
                (u.css["IE_M" + d] = !0), e.applyBindingsToNode(t, u);
              }
              var p = c.isHighContrast();
              if (p) {
                var f = c.getHighContrastTheme(),
                  g = "black" === f,
                  m = "white" === f;
                if (g || m) {
                  var v = g ? "theme-dark" : "theme-light",
                    h = { css: {} };
                  (h.css[v] = !0), e.applyBindingsToNode(t, h);
                }
              }
            }
            return (
              e.applyBindingsToDescendants(l, t),
              { controlsDescendantBindings: !0 }
            );
          },
        }),
        (e.bindingHandlers.autoSubmit = {
          update: function (t, n) {
            var i = n();
            e.unwrap(i) && (e.isWritableObservable(i) && i(!1), t.submit());
          },
        }),
        (e.bindingHandlers.href = {
          update: function (t, n) {
            e.bindingHandlers.attr.update(t, function () {
              return { href: n() };
            });
          },
        }),
        (e.bindingHandlers.placeholder = {
          update: function (t, n) {
            e.bindingHandlers.attr.update(t, function () {
              return { placeholder: n() };
            });
          },
        }),
        (e.bindingHandlers.ariaLabel = {
          update: function (t, n) {
            e.bindingHandlers.attr.update(t, function () {
              return { "aria-label": n() };
            });
          },
        }),
        (e.bindingHandlers.htmlWithBindings = {
          init: function () {
            return { controlsDescendantBindings: !0 };
          },
          update: function (t, n, i, a, r) {
            e.utils.setHtml(t, n());
            var o = i.get("childBindings");
            if (o)
              for (var s in o)
                if (o.hasOwnProperty(s)) {
                  var l = document.getElementById(s);
                  l && e.applyBindingsToNode(l, o[s], r);
                }
            e.applyBindingsToDescendants(r, t);
          },
        }),
        (e.bindingHandlers.backgroundImage = {
          update: function (e, t) {
            var n = t();
            e.style.backgroundImage = n ? l.format("url('{0}')", n) : "";
          },
        }),
        (e.bindingHandlers.wizardCssCheck = {
          update: function (e, t, n, i, a) {
            if (CSSLoadFail()) {
              var r = document.getElementById("mainDiv");
              r && (r.style.display = "none");
            }
          },
        }),
        (e.bindingHandlers.withProperties = {
          init: function (t, n, i, a, r) {
            var o = r.extend(n);
            return (
              e.applyBindingsToDescendants(o, t),
              { controlsDescendantBindings: !0 }
            );
          },
        }),
        (e.bindingHandlers.clickExpr = {
          preprocess: function (e) {
            return "function ($data, $event) { " + e + " }";
          },
          init: function (t, n, i, a, r) {
            return e.bindingHandlers.click.init.call(this, t, n, i, a, r);
          },
        }),
        (e.bindingHandlers.imgSrc = {
          init: function (e) {
            c.isSvgImgSupported()
              ? (e.src = e.getAttribute("svgSrc"))
              : (e.src = e.getAttribute("pngSrc"));
          },
        }),
        (e.bindingHandlers.svgSrc = {
          update: function (t, n, i) {
            var a = e.unwrap(n());
            e.bindingHandlers.attr.update(t, function () {
              a &&
                c.isSvgImgSupported() &&
                (a = a.replace(new RegExp(".png$"), ".svg"));
              var e = i.get("format");
              if (e)
                for (var t in e)
                  e.hasOwnProperty(t) && !e[t] && (a = a.replace(t, ""));
              return { src: a };
            });
          },
        }),
        (e.bindingHandlers.injectScript = {
          init: function (t, n) {
            var i = e.unwrap(n()),
              a = document.createElement("script");
            return (
              (a.type = "text/javascript"),
              (a.src = i),
              t.appendChild(a),
              { controlsDescendantBindings: !0 }
            );
          },
        }),
        (e.bindingHandlers.injectIframe = {
          init: function (t, n) {
            var i = e.unwrap(n());
            if (i && i.url) {
              var a = document.createElement("iframe");
              (a.height = "0"),
                (a.width = "0"),
                (a.style.display = "none"),
                (a.src = e.unwrap(i.url)),
                i.onload &&
                  (a.onload = function () {
                    i.onload(a);
                  }),
                t.appendChild(a);
            }
            return { controlsDescendantBindings: !0 };
          },
        }),
        (e.bindingHandlers.hasFocusEx = {
          init: e.bindingHandlers.hasFocus.init,
          update: function (t, n, i, a, r) {
            e.bindingHandlers.hasFocus.update(t, n, i, a, r);
            var o = e.unwrap(n());
            if (o) {
              if (t.value) {
                var s = t.value.length;
                if ("selectionStart" in t)
                  setTimeout(function () {
                    try {
                      (t.selectionStart = s), (t.selectionEnd = s);
                    } catch (e) {}
                  }, 0);
                else if ("createTextRange" in t) {
                  var l = t.createTextRange();
                  l.moveStart("character", s),
                    l.collapse(),
                    l.moveEnd("character", s),
                    l.select();
                }
              }
              t.focus();
            } else t.blur();
          },
        }),
        (e.bindingHandlers.preventTabbing = {
          init: function (t, n) {
            function r(t) {
              if (
                ((t = t || window.event),
                "Tab" === t.code || t.keyCode === a.TabKeyCode)
              ) {
                var r = e.unwrap(n()) || {};
                if (
                  !r.direction ||
                  "both" === r.direction ||
                  ("up" === r.direction && t.shiftKey) ||
                  ("down" === r.direction && !t.shiftKey)
                )
                  return i(t), !1;
              }
              return !0;
            }
            e.utils.registerEventHandler(t, "keydown", r);
          },
        }),
        (e.bindingHandlers.ariaHidden = {
          update: function (t, n) {
            e.bindingHandlers.attr.update(t, function () {
              return { "aria-hidden": e.unwrap(n()) };
            });
          },
        }),
        (e.bindingHandlers.moveOffScreen = {
          update: function (t) {
            e.bindingHandlers.css.update(t, function () {
              return { moveOffScreen: !0 };
            }),
              e.bindingHandlers.attr.update(t, function () {
                return { tabindex: -1 };
              }),
              e.bindingHandlers.ariaHidden.update(t, function () {
                return !0;
              });
          },
        }),
        (e.bindingHandlers.pressEnter = {
          init: function (t, n, r, o, s) {
            function l(e) {
              return (
                (e = e || window.event),
                ("Enter" !== e.code && e.keyCode !== a.EnterKeyCode) ||
                  (i(e), c(d, e), !1)
              );
            }
            var c = e.unwrap(n()),
              d = s.$data;
            e.utils.registerEventHandler(t, "keydown", l);
          },
        }),
        (e.virtualElements.allowedBindings.withProperties = !0);
      var u = n(9);
      u.applyExtensions(e);
    };
  },
  function (e, t) {
    (t.UsernameMaxLength = 113),
      (t.SATOTPV1Length = 6),
      (t.SATOTPLength = 8),
      (t.PhoneNumberConfirmationLength = 4),
      (t.PCExperienceQS = "pcexp"),
      (t.PCExperienceDisabled = t.PCExperienceQS + "=false"),
      (t.EscapeKeyCode = 27),
      (t.EnterKeyCode = 13),
      (t.TabKeyCode = 9),
      (t.ArrowDownKeyCode = 40),
      (t.ArrowUpKeyCode = 38),
      (t.Regex = { PhoneNumberValidation: /^[0-9 ()[\].\-#*\/+]+$/ }),
      (t.ProofUpRedirectLandingView = {
        AccountCompromised: 1,
        RiskySession: 2,
      }),
      (t.LoginMode = {
        None: 0,
        Login: 1,
        ForceCredType: 3,
        LWAConsent: 4,
        GenericError: 5,
        ForceSignin: 6,
        OTS: 7,
        HIP_Login: 8,
        HIP_Lockout: 9,
        InviteBlocked: 10,
        SwitchUser: 11,
        LWADelegation: 12,
        ServiceBlocked: 13,
        IDPFailed: 14,
        StrongAuthOTC: 16,
        StrongAuthMobileOTC: 25,
        Finish: 27,
        LoginWizard_Login: 28,
        StrongAuthWABOTC: 30,
        LoginWizard_HIP_Login: 32,
        LoginWizard_Finish: 34,
        LoginMobile: 36,
        ForceSigninMobile: 37,
        GenericErrorMobile: 38,
        LoginHost: 39,
        ForceSigninHost: 40,
        GenericErrorHost: 42,
        StrongAuthHostOTC: 43,
        HIP_LoginHost: 45,
        HIP_LoginMobile: 46,
        HIP_LockoutHost: 47,
        HIP_LockoutMobile: 48,
        SwitchUserHost: 49,
        LoginXbox_Login: 50,
        HIP_LoginXbox: 51,
        FinishXbox: 52,
        IfExistsXbox: 53,
        StartIfExistsXbox: 54,
        StrongAuthXboxOTC: 55,
        LoginWPWiz_Login: 56,
        LoginWPWiz_HIP_Login: 57,
        LoginWPWiz_Finish: 58,
        StrongAuthWizOTC: 59,
        StrongAuthWPWizOTC: 60,
        FinishWPWiz: 61,
        SwitchUserMobile: 62,
        LoginWPWiz_PhoneSignIn: 63,
        LoginWPWiz_HIP_PhoneSignIn: 64,
        Login_PhoneSignIn: 65,
        Login_HIP_PhoneSignIn: 66,
        LoginHost_PhoneSignIn: 67,
        LoginHost_HIP_PhoneSignIn: 68,
        LoginMobile_PhoneSignIn: 69,
        LoginMobile_HIP_PhoneSignIn: 70,
        LoginWizard_PhoneSignIn: 71,
        LoginWizard_HIP_PhoneSignIn: 72,
        LoginXbox_PhoneSignIn: 73,
        LoginXbox_HIP_PhoneSignIn: 74,
        LoginWin10: 75,
        HIP_LoginWin10: 76,
        FinishWin10: 77,
        FinishBlockedWin10: 78,
        LoginWin10_PhoneSignIn: 79,
        HIP_LoginWin10_PhoneSignIn: 80,
        FinishWin10_TokenBroker: 81,
        SwitchUserWin10: 82,
        ForceSignInXbox: 88,
        LoginClientSDK_Login: 92,
        LoginClientSDK_HIP_Login: 93,
        LoginClientSDK_Finish: 94,
        StrongAuthClientSDKOTC: 95,
        FinishClientSDK: 96,
        LoginClientSDK_PhoneSignIn: 97,
        LoginClientSDK_HIP_PhoneSignIn: 98,
        Win10InclusiveOOBE_Finish: 99,
        Win10InclusiveOOBE_FinishBlocked: 100,
        Tiles: 102,
        RemoteConnect: 103,
        DesktopSsoProgress: 104,
        FedConflict: 105,
      }),
      (t.LoginBody = { Login_OTC: 5 }),
      (t.PaginatedState = {
        Previous: -1,
        Unknown: 0,
        Username: 1,
        Password: 2,
        OneTimeCode: 3,
        RemoteNGC: 4,
        PhoneDisambiguation: 5,
        LwaConsent: 6,
        IdpDisambiguation: 7,
        IdpRedirect: 8,
        ViewAgreement: 10,
        LearnMore: 11,
        Tiles: 12,
        ConfirmSend: 13,
        RemoteConnectCode: 14,
        RemoteLoginPolling: 15,
        BindRedirect: 16,
        TermsOfUse: 17,
        DesktopSsoProgress: 18,
        ResetPasswordSplitter: 19,
        Kmsi: 20,
        CheckPasswordType: 21,
        ChangePassword: 22,
        Fido: 23,
        CredentialPicker: 24,
        Consent: 25,
        Error: 26,
        ConfirmSignup: 27,
        ConfirmRecoverUsername: 28,
        ConfirmConsentSelection: 29,
        SelectProvider: 30,
        FedConflict: 31,
        GitHubIdpRedirect: 32,
        ProofUpRedirect: 33,
        ProofUpRedirectLanding: 34,
      }),
      (t.PostType = {
        Password: 11,
        Federation: 13,
        SHA1: 15,
        OTC: 17,
        StrongAuth: 18,
        StrongAuthTOTP: 19,
        LWAConsent: 30,
        PasswordInline: 20,
        RemoteNGC: 21,
        SessionApproval: 22,
        NGC: 23,
        OtcNoPassword: 24,
        RemoteConnect_NativePlatform: 25,
      }),
      (t.UserProperty = {
        USERNAME: "login",
        ERROR_CODE: "HR",
        ERR_MSG: "ErrorMessage",
        EXT_ERROR: "ExtErr",
        ERR_URL: "ErrUrl",
        DATOKEN: "DAToken",
        DA_SESKEY: "DASessionKey",
        DA_START: "DAStartTime",
        DA_EXPIRE: "DAExpires",
        STS_ILFT: "STSInlineFlowToken",
        SIGNINNAME: "SigninName",
        FIRST_NAME: "LastName",
        LAST_NAME: "FirstName",
        TILE_URL: "TileUrl",
        CID: "CID",
        PUID: "PUID",
      }),
      (t.Error = {
        S_OK: "0",
        InvalidRealmDiscLogin: 10,
        UsernameInvalid: 1e3,
        PasswordEmpty: 1001,
        HIPEmpty: 1002,
        AltEmailInvalid: 1005,
        PhoneInvalid: 1006,
        SAContainsName: 1007,
        OTCEmpty: 1009,
        OTCInvalid: 1010,
        NotEnoughProofs: 1013,
        PhoneEmpty: 1015,
        FedUser: 1016,
        FedUserConflict: 1017,
        FedUserInviteBlocked: 1018,
        EmptyFields: 1020,
        PhoneHasSpecialChars: 1021,
        AutoVerifyNoCodeSent: 1022,
        ProofConfirmationEmpty: 1023,
        ProofConfirmationInvalid: 1024,
        TOTPInvalid: 1025,
        SessionNotApproved: 1026,
        PhoneNumberInvalid: 1027,
        PhoneFormattingInvalid: 1028,
        PollingTimedOut: 1029,
        SendNotificationFailed: 1030,
        Server_MessageOnly: 9999,
        PP_E_DB_MEMBERDOESNOTEXIST: "CFFFFC15",
        PP_E_EXCLUDED: "80041010",
        PP_E_MEMBER_LOCKED: "80041011",
        PP_E_BAD_PASSWORD: "80041012",
        PP_E_MISSING_MEMBERNAME: "80041031",
        PP_E_MISSING_PASSWORD: "80041032",
        PP_E_FEDERATION_INLINELOGIN_DISALLOWED: "800478AC",
        PP_E_PE_RULEFALSE: "8004490C",
        PP_E_MOBILECREDS_PHONENUMBER_BLANK: "80045801",
        PP_E_MOBILECREDS_PHONENUMBER_TOOSHORT: "80045806",
        PP_E_MOBILECREDS_PHONENUMBER_TOOLONG: "80045807",
        PP_E_MOBILECREDS_PHONENUMBER_INVALID: "80045800",
        PP_E_NAME_BLANK: "80041100",
        PP_E_EMAIL_INCOMPLETE: "8004110D",
        PP_E_EMAIL_INVALID: "8004110B",
        PP_E_NAME_TOO_SHORT: "80041101",
        PP_E_NAME_INVALID: "80041103",
        PP_E_INVALIDARG: "80048388",
        PP_E_SA_TOOSHORT: "80041120",
        PP_E_SA_TOOLONG: "80041121",
        PP_E_INVALID_PHONENUMBER: "8004113F",
        PP_E_SECRETQ_CONTAINS_SECRETA: "80041165",
        PP_E_SECRETA_CONTAINS_SECRETQ: "8004117D",
        PP_E_SA_CONTAINS_MEMBERNAME: "8004116A",
        PP_E_STRONGPROCESS_ALTEMAILSAMEASMAILBOX: "80049C2D",
        PP_E_EMAIL_RIGHT_TOO_LONG: "8004110C",
        PP_E_NAME_TOO_LONG: "80041102",
        PP_E_ALIAS_AUTH_NOTPERMITTED: "8004788B",
        PP_E_TOTP_INVALID: "80049C34",
        PP_E_OLD_SKYPE_PASSWORD: "80043557",
        PP_E_OTT_DATA_INVALID: "8004348F",
        PP_E_OTT_ALREADY_CONSUMED: "80043490",
        PP_E_OTT_INVALID_PURPOSE: "80043496",
        PP_E_STRONGPROCESS_BADDEVICENAME: "80049C22",
        PP_E_INLINELOGIN_INVALID_SMS: "800434E1",
        PP_E_INLINELOGIN_INVALID_ALT: "800434E2",
        PP_E_PREVIOUS_PASSWORD: "80041013",
        PP_E_HIP_VALIDATION_WRONG: "80045505",
        PP_E_HIP_VALIDATION_ERROR_FATAL: "80045537",
        PP_E_HIP_VALIDATION_ERROR_UNAUTHENTICATED: "80045538",
        PP_E_HIP_VALIDATION_ERROR_OTHER: "80045539",
        PP_E_SQ_CONTAINS_PASSWORD: "8004341E",
        PP_E_SA_CONTAINS_PASSWORD: "8004341C",
        PP_E_SA_CONTAINED_IN_PASSWORD: "8004341D",
        PP_E_LIBPHONENUMBERINTEROP_NUMBERPARSE_EXCEPTION: "80043510",
        PP_E_STRONGPROCESS_EMAIL_HAS_MOBILE_DOMAIN: "80049C33",
        PP_E_STRONGPROCESS_MXALIAS_NOTALLOWED: "80049C23",
        PP_E_INVALID_MEMBERNAME: "80041034",
        PP_E_SA_TOO_MANY_CACHE_SESSIONS: "8004A00C",
        PP_E_INTERFACE_DISABLED: "80043448",
        PP_E_ASSOCIATE_DUPLICATE_ACCOUNT: "80043534",
        PP_E_OAUTH_REMOTE_CONNECT_USER_CODE_MISSING_OR_INVALID: "800478C7",
      }),
      (t.EstsError = {
        UserAccountSelectionInvalid: "16001",
        UserUnauthorized: "50020",
        UserAccountNotFound: "50034",
        IdsLocked: "50053",
        InvalidPasswordLastPasswordUsed: "50054",
        InvalidPasswordExpiredPassword: "50055",
        InvalidPasswordNullPassword: "50056",
        UserDisabled: "50057",
        FlowTokenExpired: "50089",
        InvalidUserNameOrPassword: "50126",
        InvalidDomainName: "50128",
        MissingCustomSigningKey: "50146",
        IdpLoopDetected: "50174",
        InvalidTenantName: "90002",
        BlockedAdalVersion: "220300",
        BlockedClientId: "220400",
        UserVoiceAuthFailedCallWentToVoicemail:
          "UserVoiceAuthFailedCallWentToVoicemail",
        UserVoiceAuthFailedInvalidPhoneInput:
          "UserVoiceAuthFailedInvalidPhoneInput",
        UserVoiceAuthFailedPhoneHungUp: "UserVoiceAuthFailedPhoneHungUp",
        UserVoiceAuthFailedInvalidPhoneNumber:
          "UserVoiceAuthFailedInvalidPhoneNumber",
        UserVoiceAuthFailedInvalidExtension:
          "UserVoiceAuthFailedInvalidExtension",
        InvalidFormat: "InvalidFormat",
        UserAuthFailedDuplicateRequest: "UserAuthFailedDuplicateRequest",
        UserVoiceAuthFailedPhoneUnreachable:
          "UserVoiceAuthFailedPhoneUnreachable",
        UserVoiceAuthFailedProviderCouldntSendCall:
          "UserVoiceAuthFailedProviderCouldntSendCall",
        User2WaySMSAuthFailedProviderCouldntSendSMS:
          "User2WaySMSAuthFailedProviderCouldntSendSMS",
        SMSAuthFailedProviderCouldntSendSMS:
          "SMSAuthFailedProviderCouldntSendSMS",
        User2WaySMSAuthFailedNoResponseTimeout:
          "User2WaySMSAuthFailedNoResponseTimeout",
        SMSAuthFailedNoResponseTimeout: "SMSAuthFailedNoResponseTimeout",
        SMSAuthFailedWrongCodeEntered: "SMSAuthFailedWrongCodeEntered",
        OathCodeIncorrect: "OathCodeIncorrect",
        OathCodeDuplicate: "OathCodeDuplicate",
        OathCodeOld: "OathCodeOld",
        PhoneAppNoResponse: "PhoneAppNoResponse",
        User2WaySMSAuthFailedWrongCodeEntered:
          "User2WaySMSAuthFailedWrongCodeEntered",
        PhoneAppInvalidResult: "PhoneAppInvalidResult",
        PhoneAppDenied: "PhoneAppDenied",
        PhoneAppTokenChanged: "PhoneAppTokenChanged",
        SMSAuthFailedMaxAllowedCodeRetryReached:
          "SMSAuthFailedMaxAllowedCodeRetryReached",
      }),
      (t.Fido = {
        MaxUserPromptLength: 99,
        FinishStates: { Success: 0, Cancel: 1, Error: 2, NotSupported: 3 },
        UnexpectedErrorCode: 9999,
        EdgeErrorCodes: {
          SyntaxError: 3,
          NotFoundError: 8,
          NotSupportedError: 9,
          InvalidAccessError: 15,
          AbortError: 20,
        },
      }),
      (t.IfExistsResult = {
        Unknown: -1,
        Exists: 0,
        NotExist: 1,
        Throttled: 2,
        Error: 4,
        ExistsInOtherMicrosoftIDP: 5,
        ExistsBothIDPs: 6,
      }),
      (t.ThrottleStatus = {
        NotThrottled: 0,
        AadThrottled: 1,
        MsaThrottled: 2,
      }),
      (t.DomainType = {
        Unknown: 1,
        Consumer: 2,
        Managed: 3,
        Federated: 4,
        CloudFederated: 5,
      }),
      (t.CredentialType = {
        Password: 1,
        RemoteNGC: 2,
        OneTimeCode: 3,
        Federation: 4,
        CloudFederation: 5,
        Fido: 7,
        GitHub: 8,
      }),
      (t.RemoteNgcType = { PushNotification: 1, QrCode: 2, ListSessions: 3 }),
      (t.SessionPollingType = { Image: 1, Json: 2 }),
      (t.AgreementType = {
        Privacy: "privacy",
        Tou: "tou",
        Impressum: "impressum",
      }),
      (t.ApiErrorCodes = {
        GeneralError: 6e3,
        AuthFailure: 6001,
        InvalidArgs: 6002,
        Generic: 8e3,
        Timeout: 8001,
        Aborted: 8002,
      }),
      (t.DefaultRequestTimeout = 3e4),
      (PROOF = {
        Type: {
          Email: 1,
          AltEmail: 2,
          SMS: 3,
          DeviceId: 4,
          CSS: 5,
          SQSA: 6,
          HIP: 8,
          Birthday: 9,
          TOTPAuthenticator: 10,
          RecoveryCode: 11,
          StrongTicket: 13,
          TOTPAuthenticatorV2: 14,
          TwoWayVoice: 15,
          TwoWaySMS: 16,
          Voice: -3,
        },
      }),
      (t.ContentType = {
        Json: "application/json; charset=utf-8",
        FormUrlEncoded: "application/x-www-form-urlencoded",
      }),
      (t.BindProvider = { LinkedIn: 0, GitHub: 1 }),
      (t.PromotedAltCredFlags = { None: 0, GitHub: 1 });
  },
  function (e, t, n) {
    var i = n(1),
      a = n(6),
      r = (t.Object = {
        clone: function (e) {
          var t = {};
          return e && (t = a.parse(a.stringify(e))), t;
        },
        join: function (e, t, n) {
          var i = "";
          return (
            e &&
              r.forEach(e, function (e, a) {
                i && (i += t), (i += e + n + (a || ""));
              }),
            i
          );
        },
        forEach: function (e, t) {
          i.utils.objectForEach(e, t);
        },
        findOwnProperty: function (e, t, n) {
          var i;
          n && (i = t.toLowerCase());
          for (var a in e)
            if (
              e.hasOwnProperty(a) &&
              (a === t || (n && a.toLowerCase() === i))
            )
              return a;
          return null;
        },
      }),
      o = (t.String = {
        trim: function (e) {
          return e.replace(/^\s+|\s+$/g, "");
        },
        find: function (e, t, n, i) {
          return e
            ? n
              ? e.toLowerCase().indexOf(t.toLowerCase(), i)
              : e.indexOf(t, i)
            : -1;
        },
        format: function (e) {
          if (e)
            for (var t = 1; t < arguments.length; t++)
              e = e.replace(
                new RegExp("\\{" + (t - 1) + "\\}", "g"),
                arguments[t],
              );
          return e;
        },
        doubleSplit: function (e, t, n, i, a) {
          var r = {};
          return (
            e &&
              s.forEach(e.split(t), function (e) {
                if (e) {
                  var t = e.split(n),
                    o = t[0];
                  a && (o = a(o)),
                    1 === t.length
                      ? (r[o] = null)
                      : i
                      ? (r[o] = t.slice(1))
                      : (r[o] = t.slice(1).join(n));
                }
              }),
            r
          );
        },
        isEmailAddress: function (e) {
          if (((e = o.trim(e)), e.charAt(0) > "~" || e.indexOf(" ") !== -1))
            return !1;
          var t = e.indexOf("@");
          if (t === -1 || e.indexOf(".", t) === -1) return !1;
          var n = e.split("@");
          return !(n.length > 2 || n[0].length < 1 || n[1].length < 2);
        },
        isPhoneNumber: function (e) {
          var t = e.replace(/\D+/g, "");
          return t.length >= 4 && t.length <= 50;
        },
        isSkypeName: function (e) {
          e = o.trim(e);
          var t = new RegExp(/^[a-zA-Z][a-zA-Z0-9.,\-_:']{0,128}$/);
          return !!e.match(t);
        },
        extractDomain: function (e, t, n) {
          if (!o.isEmailAddress(e)) return e;
          var i = o.trim(e).split("@")[1];
          return (
            (e = n ? "@" : ""),
            t ? e + i.slice(0, i.lastIndexOf(".") + 1) : e + i
          );
        },
        extractDomainFromUrl: function (e) {
          if (e) {
            var t = document.createElement("a");
            return (t.href = e), t.hostname;
          }
          return "";
        },
        extractOriginFromUrl: function (e) {
          if (e) {
            var t = document.createElement("a");
            t.href = e;
            var n = t.origin;
            return (
              n ||
                (n =
                  t.protocol +
                  "//" +
                  t.hostname +
                  (t.port ? ":" + t.port : "")),
              n
            );
          }
          return "";
        },
        doOriginsMatch: function (e, t) {
          var n = o.extractOriginFromUrl(e),
            i = o.extractOriginFromUrl(t);
          return i === n;
        },
        capFirst: function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
        },
        cleanseUsername: function (e, t) {
          if (!e) return "";
          if (
            ((e = o.trim(e).toLowerCase()),
            !o.isEmailAddress(e) && !o.isSkypeName(e) && o.isPhoneNumber(e))
          ) {
            var n = "";
            return (
              t && "+" === e.charAt(0) && (n = "+"), n + e.replace(/\D+/g, "")
            );
          }
          return e;
        },
      }),
      s = (t.Array = {
        first: i.utils.arrayFirst,
        forEach: i.utils.arrayForEach,
        map: i.utils.arrayMap,
        removeItem: i.utils.arrayRemoveItem,
        findIndex: function (e, t) {
          if (e && "object" == typeof e && e.length)
            for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
          return -1;
        },
      });
    t.DateTime = {
      getCurrentTime: function () {
        return new Date().getTime();
      },
      getUTCString: function () {
        return Date.prototype.toISOString
          ? new Date().toISOString()
          : new Date().toUTCString();
      },
    };
  },
  function (module, exports) {
    var JSON;
    JSON || (JSON = {}),
      (function () {
        "use strict";
        function f(e) {
          return e < 10 ? "0" + e : e;
        }
        function quote(e) {
          return (
            (escapable.lastIndex = 0),
            escapable.test(e)
              ? '"' +
                e.replace(escapable, function (e) {
                  var t = meta[e];
                  return "string" == typeof t
                    ? t
                    : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
              : '"' + e + '"'
          );
        }
        function str(e, t) {
          var n,
            i,
            a,
            r,
            o,
            s = gap,
            l = t[e];
          switch (
            (l &&
              "object" == typeof l &&
              "function" == typeof l.toJSON &&
              (l = l.toJSON(e)),
            "function" == typeof rep && (l = rep.call(t, e, l)),
            typeof l)
          ) {
            case "string":
              return quote(l);
            case "number":
              return isFinite(l) ? String(l) : "null";
            case "boolean":
            case "null":
              return String(l);
            case "object":
              if (!l) return "null";
              if (
                ((gap += indent),
                (o = []),
                "[object Array]" === Object.prototype.toString.apply(l))
              ) {
                for (r = l.length, n = 0; n < r; n += 1)
                  o[n] = str(n, l) || "null";
                return (
                  (a =
                    0 === o.length
                      ? "[]"
                      : gap
                      ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]"
                      : "[" + o.join(",") + "]"),
                  (gap = s),
                  a
                );
              }
              if (rep && "object" == typeof rep)
                for (r = rep.length, n = 0; n < r; n += 1)
                  "string" == typeof rep[n] &&
                    ((i = rep[n]),
                    (a = str(i, l)),
                    a && o.push(quote(i) + (gap ? ": " : ":") + a));
              else
                for (i in l)
                  Object.prototype.hasOwnProperty.call(l, i) &&
                    ((a = str(i, l)),
                    a && o.push(quote(i) + (gap ? ": " : ":") + a));
              return (
                (a =
                  0 === o.length
                    ? "{}"
                    : gap
                    ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}"
                    : "{" + o.join(",") + "}"),
                (gap = s),
                a
              );
          }
        }
        var global = Function("return this")(),
          JSON = global.JSON;
        JSON || (JSON = {}),
          "function" != typeof Date.prototype.toJSON &&
            ((Date.prototype.toJSON = function (e) {
              return isFinite(this.valueOf())
                ? this.getUTCFullYear() +
                    "-" +
                    f(this.getUTCMonth() + 1) +
                    "-" +
                    f(this.getUTCDate()) +
                    "T" +
                    f(this.getUTCHours()) +
                    ":" +
                    f(this.getUTCMinutes()) +
                    ":" +
                    f(this.getUTCSeconds()) +
                    "Z"
                : null;
            }),
            (String.prototype.toJSON =
              Number.prototype.toJSON =
              Boolean.prototype.toJSON =
                function (e) {
                  return this.valueOf();
                }));
        var cx =
            /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          escapable =
            /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          gap,
          indent,
          meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\",
          },
          rep;
        "function" != typeof JSON.stringify &&
          (JSON.stringify = function (e, t, n) {
            var i;
            if (((gap = ""), (indent = ""), "number" == typeof n))
              for (i = 0; i < n; i += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (
              ((rep = t),
              t &&
                "function" != typeof t &&
                ("object" != typeof t || "number" != typeof t.length))
            )
              throw new Error("JSON.stringify");
            return str("", { "": e });
          }),
          "function" != typeof JSON.parse &&
            (JSON.parse = function (text, reviver) {
              function walk(e, t) {
                var n,
                  i,
                  a = e[t];
                if (a && "object" == typeof a)
                  for (n in a)
                    Object.prototype.hasOwnProperty.call(a, n) &&
                      ((i = walk(a, n)),
                      void 0 !== i ? (a[n] = i) : delete a[n]);
                return reviver.call(e, t, a);
              }
              var j;
              if (
                ((text = String(text)),
                (cx.lastIndex = 0),
                cx.test(text) &&
                  (text = text.replace(cx, function (e) {
                    return (
                      "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    );
                  })),
                /^[\],:{}\s]*$/.test(
                  text
                    .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                    .replace(
                      /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                      "]",
                    )
                    .replace(/(?:^|:|,)(?:\s*\[)+/g, ""),
                ))
              )
                return (
                  (j = eval("(" + text + ")")),
                  "function" == typeof reviver ? walk({ "": j }, "") : j
                );
              throw new SyntaxError("JSON.parse");
            }),
          (global.JSON = JSON),
          (module.exports = JSON);
      })();
  },
  function (e, t, n) {
    var i = n(5),
      a = i.Object,
      r = i.String,
      o = i.Array,
      s = window,
      l = null,
      c = {},
      d = {},
      u = {},
      p = null,
      f = null,
      g = null,
      m = null,
      v = null,
      h = null,
      b = null;
    t.HttpCode = { Ok: 200, NotModified: 304, Timeout: 408 };
    var _ = (t.Helper = {
        isIEOlderThan: function (e) {
          if (void 0 === c[e]) {
            var t = _.getIEVersion();
            c[e] = t && t < e + 1;
          }
          return c[e];
        },
        isEdge: function () {
          if (null === l) {
            l = !1;
            var e = _.getWindowsVersion();
            if (null !== e && e >= 10) {
              var t = _.getIEVersion();
              l = null !== t && t >= 12;
            }
          }
          return l;
        },
        isChrome: function () {
          return (
            null === p &&
              (p = navigator.userAgent.toLowerCase().indexOf("chrome") > -1),
            p
          );
        },
        isFirefoxNewerThan: function (e) {
          if (void 0 === d[e]) {
            var t = _.getFirefoxVersion();
            d[e] = t && t > e;
          }
          return d[e];
        },
        isChromeNewerThan: function (e) {
          if (void 0 === u[e]) {
            var t = _.getChromeVersion();
            u[e] = t && t > e;
          }
          return u[e];
        },
        isIOS: function () {
          if (null === f) {
            var e = s.navigator.userAgent.toLowerCase();
            f = /iphone|ipod|ipad/.test(e) && !s.MSStream;
          }
          return f;
        },
        isIOSSafari: function () {
          if (null === g) {
            var e = s.navigator.userAgent.toLowerCase();
            g = /safari/.test(e) && /iphone|ipod|ipad/.test(e) && !s.MSStream;
          }
          return g;
        },
        isIOSUIWebView: function () {
          if (null === m) {
            var e = s.navigator.userAgent.toLowerCase();
            m =
              /safari/.test(e) === !1 &&
              /iphone|ipod|ipad/.test(e) &&
              !s.MSStream;
          }
          return m;
        },
        isQtCarBrowser: function () {
          return (
            null === v &&
              (v =
                navigator.userAgent.toLowerCase().indexOf("qtcarbrowser") > -1),
            v
          );
        },
        getIEVersion: function () {
          var e = s.navigator.userAgent,
            t = e.indexOf("MSIE ");
          if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
          var n = e.indexOf("Trident/");
          if (n > 0) {
            var i = e.indexOf("rv:");
            return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
          }
          var a = e.indexOf("Edge/");
          return a > 0
            ? parseInt(e.substring(a + 5, e.indexOf(".", a)), 10)
            : null;
        },
        getFirefoxVersion: function () {
          var e = s.navigator.userAgent,
            t = e.match(/(firefox(?=\/))\/?\s*(\d+)/i);
          return t && 3 === t.length && "firefox" === t[1].toLowerCase()
            ? parseInt(t[2])
            : null;
        },
        getChromeVersion: function () {
          var e = s.navigator.userAgent,
            t = e.match(/(chrome(?=\/))\/?\s*(\d+)/i);
          return t && 3 === t.length && "chrome" === t[1].toLowerCase()
            ? parseInt(t[2])
            : null;
        },
        getWindowsVersion: function () {
          return null !==
            new RegExp("Windows NT ([0-9]{1,}[.0-9]{0,})").exec(
              navigator.userAgent,
            )
            ? parseFloat(RegExp.$1)
            : null;
        },
        htmlEscape: function (e) {
          if (!e) return "";
          var t = document.createElement("textarea");
          return (t.value = e), t.innerHTML;
        },
        htmlUnescape: function (e) {
          if (!e) return "";
          if (e.match(/<[^<>]+>/)) return e;
          var t = document.createElement("textarea");
          return (t.innerHTML = e), t.value;
        },
        getStackSize: function (e) {
          function t() {
            n++, (i || n <= e) && t();
          }
          var n = 0,
            i = "undefined" == typeof e || null === e;
          try {
            t();
          } catch (a) {}
          return n;
        },
        isStackSizeGreaterThan: function (e) {
          return (e = e || 0), _.getStackSize(e) > e;
        },
        isSvgImgSupported: function () {
          return document.implementation.hasFeature(
            "http://www.w3.org/TR/SVG11/feature#Image",
            "1.1",
          );
        },
        isPlaceholderAttributeAllowed: function (e) {
          return (
            null === b &&
              (b =
                _.isChromeNewerThan(16) ||
                _.isEdge() ||
                _.isFirefoxNewerThan(14) ||
                (e && _.isIOSUIWebView()) ||
                _.isIOSSafari() ||
                _.isQtCarBrowser()),
            b
          );
        },
        isCSSAnimationSupported: function () {
          var e = !1,
            t = ["Webkit", "Moz", "O"],
            n = document.createElement("div");
          if (((e = void 0 !== n.style.animationName), !e)) {
            var i = o.first(t, function (e) {
              return void 0 !== n.style[e + "AnimationName"];
            });
            e = null !== i;
          }
          return e;
        },
        isStyleSupported: function (e) {
          return e in document.documentElement.style;
        },
        isCORSSupported: function () {
          return (
            s.XDomainRequest ||
            (s.XMLHttpRequest && "withCredentials" in new XMLHttpRequest())
          );
        },
        isHistorySupported: function () {
          return (
            s.history &&
            s.history.pushState &&
            "undefined" != typeof history.state
          );
        },
        isFidoSupported: function () {
          return (
            void 0 !== s.navigator.credentials &&
            void 0 !== s.navigator.credentials.create &&
            void 0 !== s.navigator.credentials.get &&
            void 0 !== s.PublicKeyCredential
          );
        },
        isChangingInputTypeSupported: function () {
          return !_.isIEOlderThan(9);
        },
        isHighContrast: function () {
          if (null === h) {
            var e = document.createElement("span");
            (e.style.borderLeftColor = "red"),
              (e.style.borderRightColor = "blue"),
              (e.style.position = "absolute"),
              (e.style.top = "-999px"),
              document.body.appendChild(e);
            var t = _.getComputedStyle(e);
            (h = t.borderLeftColor === t.borderRightColor),
              document.body.removeChild(e);
          }
          return h;
        },
        getHighContrastTheme: function () {
          if (_.isHighContrast()) {
            var e = document.getElementsByTagName("body")[0],
              t = _.getComputedStyle(e);
            if (t.backgroundColor) {
              var n = t.backgroundColor
                .toLowerCase()
                .replace(new RegExp(" ", "g"), "");
              if ("rgb(0,0,0)" === n || "#000000" === n || "#000" === n)
                return "black";
              if ("rgb(255,255,255)" === n || "#ffffff" === n || "#fff" === n)
                return "white";
            }
          }
        },
        getComputedStyle: function (e) {
          return document.defaultView && document.defaultView.getComputedStyle
            ? document.defaultView.getComputedStyle(e, null)
            : e.currentStyle
            ? e.currentStyle
            : {};
        },
        history: {
          pushState: function (e, t) {
            _.isHistorySupported() && s.history.pushState(e, t);
          },
          replaceState: function (e, t) {
            _.isHistorySupported() && s.history.replaceState(e, t);
          },
        },
        addEventListener: function (e, t, n, i) {
          e.addEventListener
            ? e.addEventListener(t, n, i)
            : e.attachEvent && e.attachEvent("on" + t, n);
        },
        removeEventListener: function (e, t, n, i) {
          e.removeEventListener
            ? e.removeEventListener(t, n, i)
            : e.detachEvent && e.detachEvent("on" + t, n);
        },
        getEventTarget: function (e) {
          return e
            ? e.target
              ? e.target
              : e.srcElement
              ? e.srcElement
              : null
            : null;
        },
      }),
      S = (t.QueryString = {
        parse: function (e) {
          var t = e,
            n = null,
            i = null;
          if (e) {
            var a = e.indexOf("?"),
              o = e.indexOf("#");
            o !== -1 && (a === -1 || o < a)
              ? ((t = e.substring(0, o)),
                (i = r.doubleSplit(e.substring(o + 1), "&", "=")))
              : a !== -1 && o === -1
              ? ((t = e.substring(0, a)),
                (n = r.doubleSplit(e.substring(a + 1), "&", "=")))
              : a !== -1 &&
                o !== -1 &&
                ((t = e.substring(0, a)),
                (n = r.doubleSplit(e.substring(a + 1, o), "&", "=")),
                (i = r.doubleSplit(e.substring(o + 1), "&", "=")));
          }
          var s = { originAndPath: t, query: n, fragment: i };
          return s;
        },
        join: function (e) {
          var t = e.originAndPath || "";
          return (
            e.query && (t += "?" + a.join(e.query, "&", "=")),
            e.fragment && (t += "#" + a.join(e.fragment, "&", "=")),
            t
          );
        },
        append: function (e, t) {
          var n = S.parse(e),
            i = r.doubleSplit(t, "&", "=");
          return (
            (n.query = n.query || {}),
            a.forEach(i, function (e, t) {
              n.query[e] = t || null;
            }),
            S.join(n)
          );
        },
        addIfNotExist: function (e, t, n) {
          n = n || "";
          var i = S.parse(e);
          return (
            null === a.findOwnProperty(i.query || {}, t, !0) &&
              ((i.query = i.query || {}), (i.query[t.toLowerCase()] = n)),
            S.join(i)
          );
        },
        add: function (e, t) {
          var n = S.parse(e);
          return (
            e &&
              t &&
              t.length &&
              ((n.query = n.query || {}),
              o.forEach(t, function (e) {
                n.query[e[0]] = e[1];
              })),
            S.join(n)
          );
        },
        appendOrReplace: function (e, t, n, i) {
          var r = S.parse(e);
          r.query = r.query || {};
          var o = a.findOwnProperty(r.query, t, !0);
          o && delete r.query[o], (r.query[t.toLowerCase()] = n);
          var s = S.join(r);
          return i && s.length > i ? e : s;
        },
        extract: function (e, t) {
          t || "" === t || (t = document.location.search);
          var n = S.parse(t);
          n.query = n.query || {};
          var i = a.findOwnProperty(n.query, e, !0);
          return i ? n.query[i] : "";
        },
        appendOrReplaceFromCurrentUrl: function (e, t) {
          var n = S.extract(t);
          return n ? S.appendOrReplace(e, t, n) : e;
        },
      }),
      y = (t.Cookies = {
        expireDate: "Thu, 30-Oct-1980 16:00:00 GMT",
        persistDate: "Wed, 30-Dec-2037 16:00:00 GMT",
        cookieSafeRegex:
          /^[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]+$/,
        enabled: function () {
          var e = new Date(),
            t = "CkTst=G" + e.getTime();
          return (document.cookie = t), document.cookie.indexOf(t) !== -1;
        },
        getCookie: function (e) {
          var t = r.doubleSplit(document.cookie, ";", "=", !1, r.trim);
          return t[e] ? t[e] : null;
        },
        getObject: function (e) {
          var t = y.getCookie(e) || "";
          return r.doubleSplit(t, "&", "=");
        },
        remove: function (e, t, n) {
          var i = t || document.location.hostname,
            a = i.split("."),
            o = a.length,
            s = a[o - 2] + "." + a[o - 1],
            l = n || "/";
          (document.cookie = r.format(
            "{0}= ;domain=.{1};path={2};expires={3}",
            e,
            s,
            l,
            y.expireDate,
          )),
            (document.cookie = r.format(
              "{0}= ;domain=.{1};path={2};expires={3}",
              e,
              i,
              l,
              y.expireDate,
            ));
        },
        write: function (e, t, n, i, a, r, o) {
          var s = r ? "." : "",
            l = document.domain.split(".");
          a && l.splice(0, Math.max(0, l.length - 2));
          var c = s + l.join(".");
          y.writeWithExpiration(e, t, n, i ? y.persistDate : null, c, o);
        },
        writeWithExpiration: function (e, t, n, i, o, s) {
          if ("" === t) y.remove(e, o);
          else {
            "object" == typeof t && (t = a.join(t, "&", "="));
            var l = i ? ";expires=" + i : "",
              c = o ? ";domain=" + o : "",
              d = s || "/",
              u = n ? ";secure" : "",
              p = r.format("{0}={1}{2};path={3}{4}{5}", e, t, c, d, l, u);
            document.cookie = p;
          }
        },
        isCookieSafeValue: function (e) {
          return y.cookieSafeRegex.test(e);
        },
      });
  },
  function (e, t, n) {
    var i = n(1);
    (t.create = function () {
      function e() {
        (t = !0), e.eventArgs(Array.prototype.slice.call(arguments));
      }
      var t = !1;
      return (
        (e.eventArgs = i.observable().extend({ notify: "always" })),
        (e.subscribe = function (n) {
          e.eventArgs.subscribe(n), t && n(e.eventArgs.peek());
        }),
        e
      );
    }),
      (t.isComponentEvent = function (e) {
        return e && i.isObservable(e.eventArgs);
      });
  },
  function (e, t, n) {
    var i = n(5),
      a = n(7),
      r = i.String,
      o = 1;
    t.applyExtensions = function (e) {
      !(function (t) {
        e.bindingProvider.instance.preprocessNode = function (n) {
          if (
            n.nodeType === o &&
            n.tagName &&
            "select" === n.tagName.toLowerCase() &&
            a.Helper.isIEOlderThan(8)
          ) {
            var i = "data-bind",
              s = n.getAttribute(i);
            if (s) {
              var l = [],
                c = r.doubleSplit(s, ",", ":");
              e.utils.objectForEach(c, function (e) {
                l.push(e + "Ex:" + c[e]);
              }),
                n.setAttribute(i, l.join());
            }
          }
          t && t(n);
        };
      })(e.bindingProvider.instance.preprocessNode),
        (e.bindingHandlers.optionsEx = {
          init: function (t, n, i, a, r) {
            function o(t, n) {
              var i = typeof n;
              return "function" === i
                ? e.unwrap(n(t))
                : "string" === i && t[n]
                ? "function" == typeof t[n]
                  ? e.unwrap(t[n]())
                  : e.unwrap(t[n])
                : void 0;
            }
            function s() {
              var e = t.options[t.selectedIndex].$data;
              t.$data = e;
              var n = u.peek();
              u("object" == typeof n ? e : t.value);
            }
            var l = e.unwrap(n()),
              c = i.get("optionsValueEx"),
              d = i.get("optionsTextEx"),
              u = i.get("valueEx");
            e.utils.arrayForEach(l, function (e) {
              var n = document.createElement("option");
              (n.$data = e), c && (n.value = o(e, c));
              var i = o(e, d),
                a = document.createTextNode(i);
              n.appendChild(a), t.appendChild(n);
            }),
              e.applyBindingsToNode(t, { event: { change: s } });
            var p = u.subscribe(function (e) {
              if (e) {
                var n = typeof e,
                  i = "object" === n,
                  a = "string" === n;
                if ((i && t.$data !== e) || (a && t.value !== e))
                  for (var r = 0; r < t.options.length; r++) {
                    var o = t.options[r];
                    if ((i && o.$data === e) || (a && o.value === e))
                      return (o.selected = !0), void (t.$data = o.$data);
                  }
              }
            });
            !(function (n) {
              e.utils.domNodeDisposal.addDisposeCallback(t, function () {
                n.dispose();
              });
            })(p),
              u.peek()
                ? u.valueHasMutated()
                : (u(t.options[0].value), (t.$data = t.options[0].$data));
          },
        });
    };
  },
  function (e, t) {
    function n() {
      var e = this,
        t = {};
      (e.registerSource = function (e, n) {
        (t[e] = t[e] || []), t[e].push(n);
      }),
        (e.getStrings = function (e, n) {
          for (var i = {}, a = t[e] || [], r = 0, o = a.length; r < o; r++)
            a[r](i, n);
          return i;
        });
    }
    var i = window;
    i.StringRepository = e.exports = i.StringRepository || new n();
  },
  function (e, t) {
    (t.Tokens = { Username: "#~#MemberName_LS#~#" }),
      (t.Fed = {
        DomainToken: "#~#partnerdomain#~#",
        FedDomain: "#~#FederatedDomainName_LS#~#",
        Partner: "#~#FederatedPartnerName_LS#~#",
      }),
      (t.LoginOption = { DoNotRemember: 0, RememberPWD: 1, NothingChecked: 3 }),
      (t.StringsVariantId = {
        Default: 0,
        SkypeMoveAlias: 1,
        CombinedSigninSignup: 2,
        CombinedSigninSignupDefaultTitle: 3,
        RemoteConnectLogin: 4,
        CombinedSigninSignupV2: 5,
        CombinedSigninSignupV2WelcomeTitle: 6,
      }),
      (t.AllowedIdentitiesType = { MsaOnly: 0, AadOnly: 1, Both: 2 }),
      (t.SessionIdp = { Aad: 0, Msa: 1 });
  },
  function (e, t, n) {
    var i = n(1),
      a = n(6),
      r = n(5),
      o = n(13),
      s = n(4),
      l = n(7),
      c = n(82),
      d = n(83),
      u = n(85),
      p = n(87),
      f = null;
    n.e(1, function () {
      f = n(88);
    });
    var g = window,
      m = s.Error,
      v = s.EstsError,
      h = r.String,
      b = r.Object,
      _ = s.LoginMode,
      S = s.PaginatedState,
      y = l.Helper,
      w = l.QueryString,
      T = l.Cookies,
      C = c.States,
      k = c.MessageType,
      x = u.GctResultAction,
      I = u.GctRequestHelperFlags;
    e.exports = function (e) {
      function t(e) {
        if (h.doOriginsMatch(Te, e.origin) && e && e.data) {
          var t = null;
          try {
            t = a.parse(e.data);
          } catch (n) {
            return;
          }
          t.userList &&
            (N.asyncTileRequestCount--,
            r(p.parseMeControlSessions(t.userList)));
        }
      }
      function n() {
        y.removeEventListener(g, "message", t),
          N.asyncTileRequestCount--,
          r([]);
      }
      function r(e) {
        var t = N.paginationControlMethods(),
          n = t.getCurrentView();
        De
          ? ((O = O.concat(
              p.mergeSessions(t.getSharedDataItem("sessions"), e),
            )),
            N.asyncTileRequestCount <= 0 &&
              (n.viewId === S.Tiles
                ? (n.viewInterface.addNewSessions(O), (O = []))
                : n.viewId === S.Username &&
                  (!N.newSession() && O.length > 0 && N.newSession(O[0]),
                  (O = []))))
          : e.length > 0 &&
            (n.viewId === S.Tiles
              ? n.viewInterface.addNewSessions(e)
              : (p.mergeSessions(t.getSharedDataItem("sessions"), e),
                t.view_onSwitchView(S.Tiles)));
      }
      function l(e, t) {
        var n = e.value;
        switch (e.type) {
          case k.StatusUpdate:
            return (
              !t ||
                (n.state !== C.End && n.state !== C.EndSso) ||
                (N.asyncTileRequestCount--, r([])),
              !0
            );
          case k.AddUserTile:
            return r(p.parseBssoSessions(n.newSessions)), !0;
          case k.ReloadPage:
            return N.view_onRefresh(n.url), !0;
          case k.FailureRedirect:
            return N.view_onRedirect(n.url), !0;
        }
        return !1;
      }
      function A(e, t, n) {
        return n ? w.appendOrReplace(e, t, encodeURIComponent(h.trim(n))) : e;
      }
      function E() {
        var e = Q;
        return (
          me &&
            i.utils.objectForEach(h.doubleSplit(me, "&", "="), function (t, n) {
              e = w.addIfNotExist(e, t, n);
            }),
          e
        );
      }
      function D(e) {
        try {
          var t = T.getObject("wlidperf");
          (t.FR = "L"),
            (t.ST = new Date().getTime()),
            T.write("wlidperf", t, !1, !0, !0, e);
        } catch (n) {}
      }
      function P(e) {
        var t = "";
        try {
          var n = document.createElement("div");
          (n.innerHTML = e),
            n.childNodes.length > 0 &&
              n.childNodes[0].value &&
              (t = n.childNodes[0].value);
        } catch (i) {}
        return t;
      }
      function R() {
        N.showFeatureNotificationBanner(!1);
      }
      function B(e) {
        N.initialSharedData = {
          username: h.cleanseUsername(e),
          displayName: e,
          remoteNgcParams: {
            sessionIdentifier: Ie,
            entropy: Ae,
            defaultType: Ee,
          },
          fidoParams: {},
          hipRequiredForUsername: te ? h.cleanseUsername(e) : "",
          sessions: ve || [],
          flowToken: P(M.sFT) || M.sFT || P(q),
          userTenantBranding: {},
          callMetadata: {},
          availableCreds: [],
          altCredHintShown: !1,
          unsafe_desktopSsoDomainToUse:
            Ce && Ce.startDesktopSsoOnPageLoad ? Ce.hintedDomainName : null,
        };
      }
      function L(e, t) {
        var n = [_.ForceSignin, _.ForceSigninMobile, _.ForceSigninHost],
          a = i.utils.arrayIndexOf(n, j) !== -1 || G,
          r = !a && ve && ve.length ? S.Tiles : e,
          o = r;
        switch (j) {
          case _.LWAConsent:
            r = o = S.LwaConsent;
            break;
          case _.Tiles:
            r = o = S.Tiles;
            break;
          case _.FedConflict:
            r = o = S.FedConflict;
            break;
          default:
            if (xe && xe !== S.DesktopSsoProgress) o = xe;
            else if (ke) {
              var s = U.getResult(t, ke);
              switch (s.action) {
                case x.ShowError:
                  o = r;
                  break;
                case x.SwitchView:
                  i.utils.extend(
                    N.initialSharedData,
                    i.utils.extend(s.sharedData, s.viewParams || {}),
                  ),
                    (o =
                      j === _.DesktopSsoProgress
                        ? S.DesktopSsoProgress
                        : s.viewId);
                  break;
                case x.Redirect:
                  N.view_onRedirect(
                    s.redirectUrl,
                    s.redirectPostParams,
                    s.isIdpRedirect,
                  );
              }
            } else j === _.DesktopSsoProgress && (o = S.DesktopSsoProgress);
            (ne || a || se || re) && (r = o);
        }
        (N.initialViewId = r), (N.currentViewId = o);
      }
      var N = this,
        M = e,
        O = [],
        U = null,
        F = i.observable(),
        V = M.str,
        H = M.html,
        j = M.B,
        W = M.l,
        G = M.fPOST_ForceSignin,
        q = M.sFTTag,
        z = M.ae,
        K = M.c,
        $ = M.v,
        X = M.f,
        J = M.urlLogin,
        Q = M.urlPost,
        Y = M.F,
        Z = M.urlBack,
        ee = M.J,
        te = M.T,
        ne = M.Af,
        ie = M.g,
        ae = M.D,
        re = M.sZtdUpnHint,
        oe = M.r || "",
        se = M.b,
        le = M.sErrTxt,
        ce = M.H,
        de = M.Z,
        ue = M.staticTenantBranding,
        pe = M.d,
        fe = M.C,
        ge = M.sResetPasswordPrefillParam || "mn",
        me = M.N,
        ve = M.arrSessions,
        he = M.I,
        be = M.h,
        _e = M.oCancelPostParams,
        Se = M.urlUxPreviewOptOut,
        ye = M.fShowOptOutBanner,
        we = M.fShowOptInBanner,
        Te = M.AK,
        Ce = M.desktopSsoConfig,
        ke = M.AD,
        xe = M.af,
        Ie = M.aG,
        Ae = M.ag,
        Ee = M.aF,
        De = M.fShowAsyncTileLoad,
        Pe = !!M.urlBindProvider;
      (N.learnMore = null),
        (N.initialViewId = null),
        (N.currentViewId = null),
        (N.initialSharedData = {}),
        (N.debugDetails = {}),
        (N.prefillNames = []),
        (N.agreementType = null),
        (N.isFidoSupported = !1),
        (N.asyncTileRequestCount = 0),
        (N.ctx = i.observable()),
        (N.postUrl = i.observable()),
        (N.userClickedCentipede = i.observable(!1)),
        (N.pageSubmitted = i.observable(!1)),
        (N.forceSubmit = i.observable(!1)),
        (N.ariaHidden = i.observable(!1)),
        (N.wasLearnMoreShown = i.observable(!1)),
        (N.postRedirectUrl = i.observable()),
        (N.postRedirectParams = i.observableArray()),
        (N.postRedirectForceSubmit = i.observable(!1)),
        (N.postedLoginStateViewId = i.observable()),
        (N.postedLoginStateViewRNGCEntropy = i.observable()),
        (N.postedLoginStateViewRNGCDefaultType = i.observable()),
        (N.postedLoginStateViewRNGCSLK = i.observable()),
        (N.paginationControlMethods = i.observable()),
        (N.backgroundControlMethods = i.observable()),
        (N.learnMoreMethods = i.observable()),
        (N.instrumentationMethods = i.observable()),
        (N.password = i.observable()),
        (N.isRequestPending = i.observable(!1)),
        (N.bannerLogoUrl = i.observable()),
        (N.backgroundLogoUrl = i.observable()),
        (N.showFeatureNotificationBanner = i.observable(!1)),
        (N.newSession = i.observable()),
        (N.flowToken = i.pureComputed(function () {
          return F() || M.sFT;
        })),
        (N.newSessionMessage = i.pureComputed(function () {
          return N.newSession()
            ? h.format(
                H.TILE_HTML_AsyncSessionFound,
                N.newSession().displayName,
              )
            : null;
        })),
        (N.getServerError = function () {
          if (le) return le;
          if (ce && ce.length)
            switch (ce[0]) {
              case m.EmptyFields:
              case m.UsernameInvalid:
              case m.PP_E_MISSING_MEMBERNAME:
              case m.PP_E_NAME_INVALID:
              case m.PP_E_EMAIL_RIGHT_TOO_LONG:
              case m.PP_E_NAME_TOO_LONG:
              case m.PP_E_INVALID_PHONENUMBER:
              case m.PP_E_LIBPHONENUMBERINTEROP_NUMBERPARSE_EXCEPTION:
                return V.CT_PWD_STR_Error_InvalidUsername;
              case m.PP_E_BAD_PASSWORD:
              case m.PP_E_PREVIOUS_PASSWORD:
              case m.PP_E_INVALID_MEMBERNAME:
              case m.PP_E_DB_MEMBERDOESNOTEXIST:
              case m.PP_E_EXCLUDED:
              case m.PP_E_PE_RULEFALSE:
              case v.InvalidUserNameOrPassword:
              case v.InvalidPasswordExpiredPassword:
              case v.UserAccountNotFound:
              case v.UserUnauthorized:
              case v.InvalidTenantName:
              case v.InvalidDomainName:
                return H[
                  te
                    ? "CT_IHL_STR_Error_WrongHip"
                    : "CT_PWD_STR_Error_WrongCreds"
                ];
              case m.PP_E_OLD_SKYPE_PASSWORD:
                return V.CT_IL_STR_Error_OldSkypePwd;
              case m.PP_E_ALIAS_AUTH_NOTPERMITTED:
                return V.CT_PWD_STR_Error_AliasNotAllowed;
              case m.PP_E_FEDERATION_INLINELOGIN_DISALLOWED:
                return V.CT_PWD_STR_Error_FedNotAllowed;
              case m.PasswordEmpty:
              case m.PP_E_MISSING_PASSWORD:
              case v.InvalidPasswordNullPassword:
                return V.CT_PWD_STR_Error_MissingPassword;
              case m.PP_E_OTT_DATA_INVALID:
              case m.PP_E_OTT_ALREADY_CONSUMED:
              case m.PP_E_OTT_INVALID_PURPOSE:
                return V.CT_OTC_STR_Error_CodeIncorrect;
              case v.FlowTokenExpired:
                return V.CT_PWD_STR_Error_FlowTokenExpired;
              case v.IdsLocked:
                return V.CT_PWD_STR_Error_IdsLocked;
              case v.UserDisabled:
                return V.CT_PWD_STR_Error_UserDisabled;
              case v.MissingCustomSigningKey:
                return V.CT_PWD_STR_Error_MissingCustomSigningKey;
              case v.BlockedAdalVersion:
                return V.CT_PWD_STR_Error_BlockedAdalVersion;
              case v.BlockedClientId:
                return V.CT_PWD_STR_Error_BlockedClientId;
              case v.UserAccountSelectionInvalid:
                return V.CT_PWD_STR_Error_SelectedAccountInvalid;
              case v.IdpLoopDetected:
                return V.CT_PWD_STR_Error_IdpLoopDetected;
              case v.InvalidPasswordLastPasswordUsed:
                return V.CT_PWD_STR_Error_LastPasswordUsed;
              default:
                return null;
            }
          else if (ke) {
            var e = U.getResult(N.initialSharedData.displayName, ke);
            if (e.action === x.ShowError) return e.error;
          }
          return null;
        }),
        (N.dispose = function () {
          Te && y.removeEventListener(g, "message", t);
        }),
        (N.paginationControl_onCancel = function () {
          if (X && Y) {
            var e = Y;
            ie &&
              (_e
                ? (_e.username = ie)
                : (e = w.appendOrReplace(e, "username", ie))),
              N.view_onRedirect(e, _e);
          } else
            Z
              ? document.location.replace(Z)
              : f && f.handleOnFinalBack && f.handleOnFinalBack(M);
          N.isRequestPending(!0);
        }),
        (N.view_onSubmitReady = function () {
          var e = N.paginationControlMethods().getCurrentViewId(),
            t = N.paginationControlMethods().getSharedData();
          N.postedLoginStateViewId(e),
            N.postedLoginStateViewRNGCDefaultType(
              t.remoteNgcParams.defaultType,
            ),
            N.postedLoginStateViewRNGCEntropy(t.remoteNgcParams.entropy),
            N.postedLoginStateViewRNGCSLK(t.remoteNgcParams.sessionIdentifier),
            !F() && t.flowToken && F(t.flowToken);
          var n = (g.UserTracker || {}).destroy;
          if (n)
            try {
              n();
            } catch (i) {}
          D(de),
            N.instrumentationMethods().recordSubmit(),
            N.pageSubmitted(!0),
            N.forceSubmit(!0),
            N.isRequestPending(!0);
        }),
        (N.view_onRefresh = function (e) {
          document.location.replace(e);
        }),
        (N.view_onRedirect = function (e, t, n) {
          n && z && N.flowToken() && T.write(z, N.flowToken(), !$),
            t
              ? (N.postRedirectUrl(e),
                i.utils.objectForEach(t, function (e, t) {
                  "unsafe_" === e.substr(0, 7) && (e = e.substr(7)),
                    N.postRedirectParams.push({ name: e, unsafe_value: t });
                }),
                N.postRedirectForceSubmit(!0))
              : document.location.assign(e),
            N.isRequestPending(!0);
        }),
        (N.view_onShow = function (e, t) {
          var n = e.dynamicBranding
              ? N.paginationControlMethods().getSharedDataItem(
                  "userTenantBranding",
                )
              : o.loadTenantBranding(ue),
            i = o.getPageBranding(n, pe, fe);
          N.backgroundControlMethods() &&
            N.backgroundControlMethods().updateBranding(i),
            N.bannerLogoUrl(i.bannerLogoUrl),
            N.backgroundLogoUrl(i.backgroundLogoUrl),
            t !== S.Username && N.newSession(null),
            O.length > 0 &&
              ((t !== S.Username && t !== S.Tiles) ||
                (t === S.Username && N.newSession(O[0]), (O = [])));
        }),
        (N.view_onPostUrlUpdate = function (e) {
          N.postUrl(e);
        }),
        (N.view_onUpdateFlowToken = function (e) {
          F(e), N.paginationControlMethods().setSharedDataItem("flowToken", e);
        }),
        (N.footer_agreementClick = function (e) {
          (N.agreementType = e),
            N.paginationControlMethods().view_onSwitchView(S.ViewAgreement);
        }),
        (N.footer_showDebugDetailsClick = function () {
          R();
        }),
        (N.optOut_onClick = function () {
          var e = new d({ checkApiCanary: !1, breakCache: !0 });
          e.Get(
            Se,
            "",
            function () {
              document.location.replace(J);
            },
            null,
            s.DefaultRequestTimeout,
          );
        }),
        (N.bannerClose_onClick = function () {
          R();
        }),
        (N.learnMore_onShow = function () {
          N.ariaHidden(!0),
            N.wasLearnMoreShown(!0),
            N.learnMoreMethods().open();
        }),
        (N.learnMore_onHide = function () {
          N.ariaHidden(!1), N.paginationControlMethods().setDefaultFocus();
        }),
        (N.passwordView_onResetPassword = function (e) {
          document.location.assign(A(ee, ge, e)), N.isRequestPending(!0);
        }),
        (N.newSession_onClick = function () {
          var e = N.newSession();
          if (e.isWindowsSso) p.signInBssoSession(e, l);
          else if (e.isOtherIdp) {
            var t = h.trim(e.displayName),
              n = w.appendOrReplace(he, "username", encodeURIComponent(t)),
              i = be ? b.clone(be) : null;
            i && (i.username = t), N.view_onRedirect(n, i, !0);
          }
        }),
        (N.newSessionClose_onClick = function () {
          N.newSession(null);
        }),
        (function () {
          U = new u(M, I.DisableDesktopSsoPreferredCred | I.DisableAutoSend);
          var e = Pe ? S.SelectProvider : S.Username,
            a = oe ? oe.split(",") : [],
            r = y.htmlUnescape(ae || ie || ne || re || "");
          if (
            (a.sort(),
            (N.prefillNames = N.prefillNames.concat(
              i.utils.arrayMap(a, y.htmlUnescape),
            )),
            (N.isFidoSupported = y.isFidoSupported()),
            N.ctx(K),
            N.postUrl(E()),
            N.showFeatureNotificationBanner(ye || we),
            B(r),
            L(e, r),
            W)
          ) {
            var o = h.format("[{0}]", W),
              s = T.getObject("WLOpt"),
              d = s.act || "";
            d.indexOf(o) === -1 && (d += o),
              (s.act = d),
              T.write("WLOpt", s, !1, !0);
          }
          Te &&
            (De && (N.asyncTileRequestCount++, setTimeout(n, 1e4)),
            y.addEventListener(g, "message", t)),
            c.isEnabled() &&
              (De && N.asyncTileRequestCount++,
              c.PullBrowserSsoCookie(function (e) {
                return l(e, !0);
              }));
        })();
    };
  },
  function (e, t, n) {
    var i = n(1),
      a = n(5),
      r = n(7),
      o = n(14),
      s = n(17),
      l = n(56),
      c = r.Helper,
      d = a.String,
      u = {
        loadTenantBranding: function (e) {
          var t = {};
          if (e) {
            var n = [
                "BoilerPlateText",
                "UserIdLabel",
                "TileLogo",
                "BannerLogo",
                "BackgroundColor",
                "Illustration",
                "KeepMeSignedInDisabled",
              ],
              a = e[0] || {},
              r = e[1] || {};
            i.utils.arrayForEach(n, function (e) {
              t[e] = r[e] || a[e] || "";
            });
          }
          return t;
        },
        getPageBranding: function (e, t, n) {
          var i = {};
          return (
            e && (i.bannerLogoUrl = e.BannerLogo),
            e && (e.BackgroundColor || e.Illustration)
              ? ((i.color = e.BackgroundColor),
                (i.backgroundImageUrl = e.Illustration),
                (i.useImageMask = !0))
              : t &&
                (t.backgroundImageIndex >= 0 ||
                  t.backgroundLogoIndex >= 0 ||
                  t.backgroundColor ||
                  t.friendlyAppName)
              ? (t.backgroundImageIndex >= 0 &&
                  ((i.backgroundImageUrl = s(
                    d.format("./{0}.jpg", t.backgroundImageIndex),
                  )),
                  c.isStyleSupported("backgroundSize") &&
                    (i.smallImageUrl = s(
                      d.format("./{0}-small.jpg", t.backgroundImageIndex),
                    ))),
                t.backgroundLogoIndex >= 0 &&
                  (i.backgroundLogoUrl = l(
                    d.format("./{0}.png", t.backgroundLogoIndex),
                  )),
                (i.color = t.backgroundColor),
                (i.friendlyAppName = t.friendlyAppName))
              : t && t.urlLegacyBackgroundLogo
              ? (i.backgroundLogoUrl = t.urlLegacyBackgroundLogo)
              : n >= 0 &&
                ((i.backgroundImageUrl = o(d.format("./{0}.jpg", n))),
                c.isStyleSupported("backgroundSize") &&
                  (i.smallImageUrl = o(d.format("./{0}-small.jpg", n)))),
            i
          );
        },
      };
    e.exports = u;
  },
  function (e, t, n) {
    function i(e) {
      return n(a(e));
    }
    function a(e) {
      return (
        r[e] ||
        (function () {
          throw new Error("Cannot find module '" + e + "'.");
        })()
      );
    }
    var r = { "./0-small.jpg": 15, "./0.jpg": 16 };
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.resolve = a),
      (e.exports = i),
      (i.id = 14);
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/Backgrounds/0-small.jpg?x=138bcee624fa04ef9b75e86211a9fe0d";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/Backgrounds/0.jpg?x=a5dbd4393ff6a725c7e62b61df7e72f0";
  },
  function (e, t, n) {
    function i(e) {
      return n(a(e));
    }
    function a(e) {
      return (
        r[e] ||
        (function () {
          throw new Error("Cannot find module '" + e + "'.");
        })()
      );
    }
    var r = {
      "./0-small.jpg": 18,
      "./0.jpg": 19,
      "./1-small.jpg": 20,
      "./1.jpg": 21,
      "./10-small.jpg": 22,
      "./10.jpg": 23,
      "./11-small.jpg": 24,
      "./11.jpg": 25,
      "./13-small.jpg": 26,
      "./13.jpg": 27,
      "./14-small.jpg": 28,
      "./14.jpg": 29,
      "./15-small.jpg": 30,
      "./15.jpg": 31,
      "./16-small.jpg": 32,
      "./16.jpg": 33,
      "./17-small.jpg": 34,
      "./17.jpg": 35,
      "./18-small.jpg": 36,
      "./18.jpg": 37,
      "./19-small.jpg": 38,
      "./19.jpg": 39,
      "./2-small.jpg": 40,
      "./2.jpg": 41,
      "./3-small.jpg": 42,
      "./3.jpg": 43,
      "./4-small.jpg": 44,
      "./4.jpg": 45,
      "./5-small.jpg": 46,
      "./5.jpg": 47,
      "./6-small.jpg": 48,
      "./6.jpg": 49,
      "./7-small.jpg": 50,
      "./7.jpg": 51,
      "./8-small.jpg": 52,
      "./8.jpg": 53,
      "./9-small.jpg": 54,
      "./9.jpg": 55,
    };
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.resolve = a),
      (e.exports = i),
      (i.id = 17);
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/0-small.jpg?x=e4609ff3d3040b6cd9773ac01b9f93cb";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/0.jpg?x=018052905902821de9d4582b8fee8dff";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/1-small.jpg?x=c1521a732148032caaea57fe54c0592b";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/1.jpg?x=e82204f3715767fb3e89570bd3192ca6";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/10-small.jpg?x=d3978bbcb80c80865282847c54f2955c";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/10.jpg?x=954935061a5b76c674efdec7a310540f";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/11-small.jpg?x=5685955dc41987ed06e1ee3ade26b01f";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/11.jpg?x=cfe9cb62ebb6605e03fb8d285c611b48";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/13-small.jpg?x=a19e7bca4466059eadd344ab11e6904f";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/13.jpg?x=bbe2954e5ade3a8671e70904f32303b1";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/14-small.jpg?x=886156059d0730fbd2f056dd3f35c325";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/14.jpg?x=06019f5fb6b2ba38b86dce6a23f75cdd";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/15-small.jpg?x=fb2ae5a11d1f4505db855c2b63e8ca95";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/15.jpg?x=6028ea8133b464df430f44727872f384";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/16-small.jpg?x=e7ab9bba629cbe84dbeb87f69d2a0f6c";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/16.jpg?x=112f8f03c4affe4b3ac72fccffde1c7e";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/17-small.jpg?x=af6fcff57f13db6a19af43e541c67391";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/17.jpg?x=a33c806b2c7a6e5789b9cdc9423218ec";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/18-small.jpg?x=2cb079b6ea3bef0252a9219ed64c5c14";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/18.jpg?x=5c3341219c88b0391008d38f6f3e3571";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/19-small.jpg?x=2d7064925c8ab86081ac2dc0b8b91506";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/19.jpg?x=8cec1cb1024c6dedfdf6d4e62688d1e5";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/2-small.jpg?x=a0d21be5213bfa2667a01ddc00e59885";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/2.jpg?x=49d31aa7849c067b208f0457d8b1bb75";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/3-small.jpg?x=81eb6f5b568144df6ce35ea3cfd4832c";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/3.jpg?x=7367a94727cb52538e42e71b737c9d88";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/4-small.jpg?x=67004a0d7bad092a477597b0175c6062";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/4.jpg?x=8bc274514c6c4c4a88ee82de7cfeb906";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/5-small.jpg?x=f5ba2e25bc3764aa83a85853deb53d87";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/5.jpg?x=8556cca21df3b7e3eb714443b6cec208";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/6-small.jpg?x=c249ac53bc5f0b79972dd44b1ca95009";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/6.jpg?x=d405ce4edf49d83c99648a67afef9054";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/7-small.jpg?x=e1873e6ad53a0af444f5addb67eaced6";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/7.jpg?x=28c6789c809592f948d6ad165bc97b4d";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/8-small.jpg?x=552832c1e01cb3e3d5b224748901e127";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/8.jpg?x=128cd117ec14155b6859d175083c3095";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppBackgrounds/9-small.jpg?x=accdf35d13519e58309a75bd0f5340a6";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppBackgrounds/9.jpg?x=832d21976c5d596f2ce1e6714bb26802";
  },
  function (e, t, n) {
    function i(e) {
      return n(a(e));
    }
    function a(e) {
      return (
        r[e] ||
        (function () {
          throw new Error("Cannot find module '" + e + "'.");
        })()
      );
    }
    var r = {
      "./0.png": 57,
      "./1.png": 58,
      "./10.png": 59,
      "./11.png": 60,
      "./12.png": 61,
      "./13.png": 62,
      "./14.png": 63,
      "./15.png": 64,
      "./17.png": 65,
      "./18.png": 66,
      "./19.png": 67,
      "./2.png": 68,
      "./20.png": 69,
      "./21.png": 70,
      "./22.png": 71,
      "./23.png": 72,
      "./24.png": 73,
      "./25.png": 74,
      "./26.png": 75,
      "./3.png": 76,
      "./4.png": 77,
      "./5.png": 78,
      "./6.png": 79,
      "./7.png": 80,
      "./8.png": 81,
    };
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.resolve = a),
      (e.exports = i),
      (i.id = 56);
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/0.png?x=3b6f07e6d8c54e6e73095ec6dcbd124b";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/1.png?x=79ce9f07b32f13120b26926d7664f049";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/10.png?x=17fd0688756bf40a8d12f6ee52f7f1a7";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/11.png?x=982c43a3fb429f9992a1f78188deb510";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/12.png?x=e15869494a1446169159c7b1a5e959c0";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/13.png?x=95a0535e3464ebf94716badee4ed5a6f";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/14.png?x=298176657f8069ea5220c23adb6b70be";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/15.png?x=a846416602fb9578abe49da652bbcdc1";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/17.png?x=37e4ecbf38b26bf96a8e1265dd15375b";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/18.png?x=14049125ec20bdd5d6c6f82cefca4619";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/19.png?x=be793b7662d61fa9d560843178160f1b";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/2.png?x=c601ddb7e99a8e694619af9ca05d965d";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/20.png?x=71c5dd371596273fd346bd0c6ebe8fb9";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/21.png?x=ccf9445164fc98fb7351544a3d42a86d";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/22.png?x=ad08321ba2930b17abffc60dfd23469e";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/23.png?x=40c874683e32641f783179e8f56603b7";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/24.png?x=e967ae43b5a92fc57c5d4db47fd890d5";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/25.png?x=c62e84af0239fb879610b9cefcc1ce98";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/26.png?x=7bded57cb99fb8d542e1d50e86712e19";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/3.png?x=917c95184fc4f9f6e5d8d1cf7faa71af";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/4.png?x=1d92902596773fef1efc33d99ea1860a";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/5.png?x=b37baba9ebd2098f91aeeee5dae36aa5";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/6.png?x=b09574fe38718dccfcb89521d2079d9d";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/7.png?x=d8789a0ce2c0e1a63b0ab9faad3a6982";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/AppLogos/8.png?x=8a58659b05a0ce2da0c4b5cd6e2c7b20";
  },
  function (e, t, n) {
    function i() {
      function e(e) {
        return "function" == typeof e;
      }
      function t(e, t) {
        var n = f.getCookie(e);
        return n && (n = (t || window.decodeURIComponent)(n)), n;
      }
      function n(e) {
        var t = { nonce: e.nonce };
        return e.type && (t.type = e.type), t;
      }
      function i(e, t) {
        var n = Y[t];
        return !(!e || !e.reportStates || e.reportStates.indexOf(n) === -1);
      }
      function r(e, t) {
        var n = Y[t];
        return !(
          !e ||
          !e.redirectEndStates ||
          e.redirectEndStates.indexOf(n) === -1
        );
      }
      function o(e, t) {
        try {
          return t && t(), !0;
        } catch (n) {
          A("BSSO.exception", e + " exception"),
            h("telemetryName: exception: " + n),
            u && u.submitFromException && u.submitFromException(n);
        }
        return !1;
      }
      function v(e, t, n) {
        var i = m.Unhandled;
        if (e.handler) {
          var a = { type: t, value: n, logMessage: e.logMessage };
          o("message[" + t + "]", function () {
            e.handler(a) &&
              (h("message [" + t + "] handled."), (i = m.Handled));
          }) || (i = m.Exception);
        } else h("No handler for message [" + t + "]");
        return i;
      }
      function h(e) {
        Q.push(e), e && ((z.traces = z.traces || []), z.traces.push(e));
      }
      function b(e, t, c, d) {
        function u() {
          if (q.reloadOnFailure) x(e);
          else {
            var t = { url: q.failureRedirectUrl };
            v(e, P.FailureRedirect, t) !== m.Handled &&
              window.location.replace(q.failureRedirectUrl);
          }
        }
        function f() {
          v(e, P.StatusUpdate, { state: t }),
            (q.failureRedirectUrl || q.reloadOnFailure) &&
              r(q, t) &&
              (G ? k("redirect", u, 5e3) : setTimeout(u, 0)),
            d && d();
        }
        h(c),
          o("updateStatus", function () {
            if (t === D.End || t === D.EndSso || t === D.EndUsers)
              try {
                l.console &&
                  l.console.info("BSSO Telemetry: " + a.stringify(z));
              } catch (e) {}
            i(q.telemetry, t)
              ? (A("result", t),
                o("telemetry request", function () {
                  var e = p.appendOrReplace(
                      q.telemetry.url,
                      "client-request-id",
                      M,
                    ),
                    t = new s({ checkApiCanary: O });
                  t.Json(e, z, f, f, 500);
                }),
                (z = n(q.telemetry)))
              : f();
          });
      }
      function _() {
        function e(e, t) {
          return d++, (s[d] = { success: e, fail: t }), d;
        }
        function t(e) {
          var t = s[e];
          return delete s[e], t;
        }
        function n(e) {
          try {
            var t = e.body.method;
            h("Channel message[" + t + "] received"),
              "CreateProviderAsync" === t
                ? setTimeout(function () {
                    a(e);
                  }, 0)
                : "Response" === t && i(e);
          } catch (n) {
            throw (h("Page: Exception in the channel: " + n.toString()), n);
          }
        }
        function i(e) {
          var n = t(e.responseId);
          if (n)
            try {
              var i = e.body.response;
              "Success" === i.status
                ? n.success(i.result)
                : n.fail(new u.Error(i.code, i.description, i.ext));
            } catch (a) {
              throw (h("Page: Fail to deliver response: " + a.toString()), a);
            }
        }
        function a(e) {
          var n = t(e.responseId);
          if (n)
            try {
              var i = o,
                a = c.getElementById(i);
              if (null !== a) {
                var r = a.firstChild,
                  s = r ? r.id : null;
                a.remove(),
                  s && "" !== s
                    ? n.success(new u.BrowserCoreProvider(s))
                    : n.fail(
                        new u.Error(
                          "NoExtension",
                          "Extension is not installed.",
                          null,
                        ),
                      );
              } else
                n.fail(
                  new u.Error(
                    "PageException",
                    "Need element with id " + i,
                    null,
                  ),
                );
            } catch (l) {
              throw (h("Page: Fail to deliver response: " + l.toString()), l);
            }
        }
        var r = "53ee284d-920a-4b59-9d30-a60315b26836",
          o = "ch-53ee284d-920a-4b59-9d30-a60315b26836",
          s = {},
          d = 0,
          u = {
            BrowserCoreProvider: function (e) {
              this.extensionId = e;
            },
            Error: function (e, t, n) {
              var i = this;
              (i.code = e), (i.description = t), (i.ext = n);
            },
            CreateProviderAsync: function (t, n) {
              var i = c.createElement("div");
              (i.id = o),
                (i.style = "display:none"),
                c.body.appendChild(i),
                l.postMessage(
                  {
                    channel: r,
                    responseId: e(t, n),
                    body: { method: "CreateProviderAsync" },
                  },
                  "*",
                );
            },
          };
        return (
          (u.BrowserCoreProvider.prototype.GetCookieAsync = function (t, n, i) {
            l.postMessage(
              {
                channel: r,
                extensionId: this.extensionId,
                responseId: e(n, i),
                body: { method: "GetCookie", uri: t },
              },
              "*",
            );
          }),
          (u.Error.prototype.toString = function () {
            var e = this;
            return e.code + ": " + e.description;
          }),
          (u.Error.Codes = {
            NoExtension: "NoExtension",
            NoSupport: "NoSupport",
            OSError: "OSError",
            PageException: "PageException",
            ContentError: "ContentError",
          }),
          l.addEventListener &&
            l.addEventListener(
              "message",
              function (e) {
                e.source === l &&
                  (e.data.channel && e.data.channel === r
                    ? n(e.data)
                    : h("Post Message Received and ignored"));
              },
              !1,
            ),
          u
        );
      }
      function S(n, i) {
        if (B.enabled && $) {
          var a = { logMessage: h, handler: i };
          if (!l.navigator || !e(l.navigator.msLaunchUri) || W)
            return (
              b(a, D.Start, null),
              A("BSSO.info", W ? "disabled" : "not-supported"),
              void b(
                a,
                D.End,
                W
                  ? "Browser SSO is disabled"
                  : "window.navigator.msLaunchUri is not available for _loginWindowsUser",
              )
            );
          var r = C(a, n, "Windows user login", function () {
            var e,
              n = setInterval(function () {
                if (t(V.winSso)) {
                  clearInterval(n), clearTimeout(e);
                  var i = new Date().getTime() - r;
                  A("ESTSSSO.cookie.ms", i), x(a);
                }
              }, 100);
            e = setTimeout(function () {
              clearInterval(n);
              var e = new Date().getTime() - r;
              A("TB.response.timeout.ms", e),
                b(a, D.End, "Windows user login timed out.");
            }, q.overallTimeoutMs);
          });
        }
      }
      function y(n) {
        if (!l.navigator || !e(l.navigator.msLaunchUri) || W)
          return (
            b(n, D.Start, null),
            A("BSSO.info", W ? "disabled" : "not-supported"),
            void b(
              n,
              D.End,
              W
                ? "Browser SSO is disabled"
                : "window.navigator.msLaunchUri is not available for _pullBrowserSsoCookie",
            )
          );
        var i = t(V.ssoTiles) || q.forceTiles;
        if (!i && t(V.ssoPulled))
          return (
            b(n, D.Start, null),
            A("BSSO.info", "throttled"),
            void b(n, D.End, "Cookie pull throttled")
          );
        var a =
            "tbauth://login.windows.net?context=" +
            encodeURIComponent(l.location.href.split("/", 3).join("/")) +
            (q.nonce ? "&request_nonce=" + encodeURIComponent(q.nonce) : "") +
            (q.rid ? "&rid=" + encodeURIComponent(q.rid) : ""),
          r = a;
        i && ((r = p.appendOrReplace(r, "user_id", "*")), f.remove(V.ssoTiles));
        var o = !1,
          s = C(n, r, "cookie pull", function () {
            var e,
              i = setInterval(function () {
                var r,
                  l = t(V.userList, decodeURIComponent);
                !o && l
                  ? ((o = !0),
                    clearInterval(i),
                    clearTimeout(e),
                    (r = new Date().getTime() - s),
                    A("ESTSUSERLIST.cookie.ms", r),
                    b(n, D.InProgress, "Users list cookie detected"),
                    f.remove(V.userList),
                    I(n, l.replace(/\+/g, " "), a))
                  : !o &&
                    t(V.winSso) &&
                    ((o = !0),
                    clearInterval(i),
                    clearTimeout(e),
                    (r = new Date().getTime() - s),
                    A("ESTSSSO.cookie.ms", r),
                    x(n));
              }, 250);
            e = setTimeout(function () {
              clearInterval(i);
              var e = new Date().getTime() - s;
              A("TB.response.timeout.ms", e),
                b(n, D.End, "Pull cookie timed out.");
            }, q.overallTimeoutMs);
          });
      }
      function w(e) {
        function t(t) {
          var n = "NA";
          f.isCookieSafeValue(t.code) &&
            ((n += "|" + t.code),
            t.ext &&
              f.isCookieSafeValue(encodeURIComponent(t.ext)) &&
              (n += "|" + encodeURIComponent(t.ext))),
            f.write(V.aadSso, n, !N);
          var i = t.toString();
          t.ext && (i += " (ext: " + a.stringify(t.ext) + ")"),
            b(e, D.End, "Error: " + i);
        }
        function n(n) {
          var i = null,
            a = null;
          if (n && n.response && n.response.length) {
            for (var r = 0, o = n.response.length; r < o; ++r)
              (i = n.response[r].name),
                (a = n.response[r].data),
                i &&
                  a &&
                  ((a = a.replace("; httponly", "")),
                  N && (a = a.replace("; secure", "")),
                  (c.cookie = i + "=" + a));
            x(e);
          } else
            t(
              new K.Error(
                K.Error.Codes.PageException,
                "Extension returned no cookies",
              ),
            );
        }
        function i(i) {
          A("extension.id", i.extensionId),
            b(e, D.InProgress, "Pulling SSO cookies"),
            i.GetCookieAsync(
              p.appendOrReplace(l.location.href, "sso_nonce", q.nonce),
              n,
              t,
            );
        }
        return W
          ? (b(e, D.Start, null),
            A("BSSO.info", "disabled"),
            void b(e, D.End, "Browser SSO is disabled"))
          : (b(e, D.InProgress, "Creating chrome provider"),
            void K.CreateProviderAsync(i, t));
      }
      function T(e) {
        if (B.enabled && $) {
          var t = { logMessage: h, handler: e };
          "windows" === U ? y(t) : "chrome" === U && w(t);
        }
      }
      function C(e, t, n, i) {
        b(e, D.Start, "Initiating " + n);
        var a,
          r = !0,
          s = new Date().getTime();
        return (
          l.navigator.msLaunchUri(
            t,
            function () {
              clearTimeout(a);
              var t = new Date().getTime() - s;
              (r = !1),
                o("tokenBroker", i),
                A("msLaunchUri.success.ms", t),
                b(
                  e,
                  D.InProgress,
                  n + " initiated successfully (took " + t + " ms)",
                );
            },
            function () {
              clearTimeout(a);
              var t = new Date().getTime() - s;
              A("msLaunchUri.failure.ms", t),
                b(
                  e,
                  r ? D.End : D.InProgress,
                  n + " was NOT initiated successfully (took " + t + " ms)",
                ),
                (r = !1);
            },
          ),
          (a = setTimeout(function () {
            clearTimeout(a),
              r &&
                ((r = !1),
                "abort" === q.initiatePullTimeoutAction
                  ? (A("msLaunchUri.response", "timeout"),
                    b(e, D.End, "Initiating " + n + " timed out."))
                  : (o("tokenBrokerTimeout", i),
                    A("msLaunchUri.response", "timeout-continue"),
                    b(
                      e,
                      D.InProgress,
                      "Initiating " +
                        n +
                        " timed out but starting polling anyway in case cookie was pulled.",
                    )));
          }, q.initiatePullTimeoutMs)),
          s
        );
      }
      function k(e, t, n) {
        var i = X[e];
        i || ((i = []), (X[e] = i));
        var a = {
          timeoutId: null,
          trigger: function () {
            var n = this,
              a = !1,
              r = !1;
            n.timeoutId &&
              (clearTimeout(n.timeoutId), (n.timeoutId = null), (a = !0));
            for (var o = 0; o < i.length; o++)
              if (i[o] === n) {
                i.splice(o, 1), (r = !0);
                break;
              }
            h(
              "Triggering [" +
                e +
                "] callback. Timeout Cleared:" +
                a +
                ", Removed: " +
                r,
            ),
              t();
          },
        };
        !j && n
          ? ((a.timeoutId = setTimeout(a.trigger, 5e3)),
            h("Test callback added [" + e + "] with 5 sec timeout"))
          : h("Test callback added [" + e + "]"),
          i.push(a);
      }
      function x(e) {
        function t() {
          f.writeWithExpiration(V.ssoPulled, "1", !N, n.toUTCString());
          var t = l.location.href;
          (t = p.appendOrReplace(t, "sso_reload", "true")),
            q.reloadOnFailure ||
              "select_account" !== p.extract("prompt").toLowerCase() ||
              (t = p.appendOrReplace(t, "prompt", "")),
            setTimeout(function () {
              v(e, P.ReloadPage, { url: t }) !== m.Handled
                ? (h("Reload message not handled"), l.location.replace(t))
                : h("Reload Message handled");
            }, 0);
        }
        var n = new Date();
        n.setSeconds(n.getSeconds() + 60),
          H
            ? b(
                e,
                D.EndSso,
                "SSO cookie detected. Refreshing page in 5 seconds (due to debug mode).",
                function () {
                  k("reload", t, 5e3);
                },
              )
            : b(e, D.EndSso, "SSO cookie detected. Refreshing page.", t);
      }
      function I(e, t, n) {
        var i = [],
          r = a.parse(t).users;
        if (
          (r &&
            r.length > 0 &&
            g.forEach(r, function (e) {
              var t = {
                ssoUniqueId: e.unique_id,
                displayName: e.display_name || "",
                name: e.upn,
                isWindowsSso: !0,
                isSignedIn: !0,
                url: n,
              };
              i.push(t);
            }),
          i.length > 0)
        ) {
          switch (v(e, P.AddUserTile, { newSessions: i })) {
            case m.Exception:
              b(e, D.End, "processUsersList: failed");
              break;
            case m.Unhandled:
              b(e, D.End, "processUsersList: unhandled");
          }
          b(e, D.EndUsers, "User list processed.");
        } else b(e, D.End, "User list is empty.");
      }
      function A(e, t) {
        z && (z.data = (z.data || "") + e + "=" + t + ";");
      }
      var E = this,
        D = { Start: 0, InProgress: 1, End: 2, EndSso: 3, EndUsers: 4 },
        P = {
          StatusUpdate: 0,
          FailureRedirect: 1,
          ReloadPage: 2,
          AddUserTile: 3,
        },
        R = d,
        B = R.bsso || {},
        L = R.isOneBox,
        N = R.v,
        M = R.correlationId,
        O = R.checkApiCanary !== !1,
        U = B.type,
        F = B.states || {},
        V = B.cookieNames,
        H = !1,
        j = !1,
        W = !1,
        G = !1,
        q = null,
        z = null,
        K = null,
        $ = !1,
        X = {},
        J = null,
        Q = [],
        Y = {};
      (Y[D.Start] = F.START),
        (Y[D.InProgress] = F.INPROGRESS),
        (Y[D.End] = F.END),
        (Y[D.EndSso] = F.END_SSO),
        (Y[D.EndUsers] = F.END_USERS),
        (E.States = D),
        (E.MessageType = P),
        B.enabled &&
          ((E.LoginWindowsUser = function (e, t) {
            S(e, t);
          }),
          (E.PullBrowserSsoCookie = function (e) {
            e && (J = e), T(J);
          })),
        (E.getLog = function () {
          return Q;
        }),
        (E.isEnabled = function () {
          return (B.enabled && $) || !1;
        }),
        L &&
          ((E.triggerTestHook = function (e) {
            var t = X[e];
            return (
              !!(t && t.length > 0) &&
              (h("Manually triggering [" + e + "] callback"),
              t[0].trigger(),
              !0)
            );
          }),
          (l.WindowsBrowserSso = E)),
        B.enabled &&
          !(function (e) {
            (z = n(e.telemetry)),
              (q = e || { forceTiles: !1, overallTimeoutMs: 4e3 }),
              (q.initiatePullTimeoutMs =
                q.initiatePullTimeoutMs || q.overallTimeoutMs),
              (q.initiatePullTimeoutAction =
                q.initiatePullTimeoutAction || "abort");
            var t = p.extract("bsso").toLowerCase();
            if (t)
              for (
                var i = decodeURIComponent(t).split(";"), a = 0;
                a < i.length;
                a++
              )
                switch (i[a]) {
                  case "debug":
                    H = !0;
                    break;
                  case "test":
                    j = !0;
                    break;
                  case "disable":
                    W = !0;
                    break;
                  case "redirect":
                    G = !0;
                }
            "chrome" === U && (K = _()),
              h(
                N
                  ? "BrowserSSO Initialized (for cloudbuild)"
                  : "BrowserSSO Initialized",
              ),
              ($ = !0);
          })(B);
    }
    var a = n(6),
      r = n(5),
      o = n(7),
      s = n(83),
      l = window,
      c = document,
      d = l.$Config || l.ServerData || {},
      u = l.$WebWatson,
      p = o.QueryString,
      f = o.Cookies,
      g = r.Array,
      m = { Exception: -1, Unhandled: 0, Handled: 1 };
    e.exports = l.WindowsBrowserSso || new i();
  },
  function (e, t, n) {
    var i = n(6),
      a = n(84),
      r = n(4),
      o = n(5),
      s = window,
      l = s.$Config || s.ServerData || {},
      c = o.Object;
    e.exports = function (e) {
      function t() {
        var e = { hpgid: l.hpgid || 0, hpgact: l.hpgact || 0, Accept: h };
        return (
          b && l.apiCanary && (e.canary = l.apiCanary),
          l.correlationId && (e[v] = l.correlationId),
          l.sessionId && (e.hpgrequestid = l.sessionId),
          e
        );
      }
      function n(e) {
        var t = e;
        if (e && !s(e)) {
          var n = {};
          c.forEach(e, function (e, t) {
            "unsafe_" === e.substr(0, 7) && (e = e.substr(7)), (n[e] = t);
          }),
            (t = i.stringify(n));
        }
        return t && (t = t.replace(/\?/g, "\\u003F")), t;
      }
      function o(e) {
        (e.headers = t()),
          (e.withCredentials = _),
          (e.breakCache = S),
          (e.responseType = y);
      }
      function s(e) {
        return "string" == typeof e;
      }
      e = e || {};
      var d = this,
        u = 3e4,
        p = 8e3,
        f = 8001,
        g = 8002,
        m = 100,
        v = "client-request-id",
        h = "application/json",
        b = e.checkApiCanary !== !1,
        _ = e.withCredentials || !1,
        S = e.breakCache || !1,
        y = e.responseType || "";
      (d.Errors = []),
        (d.Json = function (e, t, a, o, s) {
          function c(e, t) {
            var n = {};
            if (500 === e.status)
              try {
                n = i.parse(e.responseText) || {};
              } catch (a) {}
            if (!n.error) {
              var r = !1,
                o = p,
                s = "Request Failed -- No Response from Server";
              switch (t) {
                case "timeout":
                  (o = f), (s = "Timeout Error"), (r = !0);
                  break;
                case "abort":
                  (o = g), (s = "Aborted");
                  break;
                case "error":
                  e.status >= 400 && (r = !0);
                  break;
                case "parsererror":
                  (s = "Unable to parse response"), (r = !0);
              }
              n.error = {
                code: o,
                message: s,
                debugMessage:
                  "(xhr status " +
                  e.status +
                  ") xhr.responseText: " +
                  e.responseText,
                stackTrace: "",
                isFatal: r,
              };
            }
            return n;
          }
          function u(t) {
            t = t || {};
            var n,
              r = t.error || null,
              s = { startTime: _, endTime: new Date().getTime() };
            if (
              (t.apiCanary && ((l.apiCanary = t.apiCanary), delete t.apiCanary),
              r)
            ) {
              (n = r.stackTrace), (n = n && n.encodeJson ? n.encodeJson() : "");
              var c = i.stringify({
                code: r.code,
                message: r.message,
                debug: r.debugMessage,
                stacktrace: n,
                requestUrl: e,
              });
              d.Errors.push(c),
                d.Errors.length > m && d.Errors.shift(),
                r.code !== g && o && o(t, s);
            } else a && a(t, s);
          }
          function v() {
            return (
              setTimeout(function () {
                var e = {
                  error: { code: g, message: "Request Failed!", isFatal: !0 },
                };
                u(e);
              }, 0),
              null
            );
          }
          var h = !(!a && !o),
            _ = new Date().getTime();
          if (b && !l.apiCanary) return v();
          var S = n(t);
          d.Post(
            e,
            r.ContentType.Json,
            S,
            function (e, t) {
              if (h) {
                var n = i.parse(t);
                u(n);
              }
            },
            function (e, t, n, i) {
              h && u(c(t, n, i));
            },
            s,
          );
        }),
        (d.Post = function (e, t, n, i, r, s) {
          var l = {
            targetUrl: e,
            contentType: t,
            data: n,
            requestType: a.RequestType.Post,
            timeout: s || u,
            successCallback: i,
            failureCallback: r,
            timeoutCallback: r,
          };
          o(l), a.Handler.call(d, l), d.sendRequest();
        }),
        (d.Get = function (e, t, n, i, r) {
          var s = {
            targetUrl: e,
            contentType: t,
            requestType: a.RequestType.Get,
            timeout: r || u,
            successCallback: n,
            failureCallback: i,
            timeoutCallback: i,
          };
          o(s), a.Handler.call(d, s), d.sendRequest();
        });
    };
  },
  function (e, t, n) {
    var i = n(6),
      a = n(7),
      r = n(5),
      o = r.Object,
      s = window;
    t.RequestType = { Post: "POST", Get: "GET" };
    var l = (t.State = { Unsupported: -1, Unsent: 0, Done: 4, Timeout: 5 });
    (t.Event = {
      OnSuccess: "ajaxsuccess",
      OnError: "ajaxerror",
      OnTimeout: "ajaxtimeout",
    }),
      (t.Helper = {
        generateRequestString: function (e) {
          var t = "";
          return (
            e &&
              o.forEach(e, function (e, n) {
                (n || "" === n) &&
                  (t.length > 0 && (t += "&"), (t += e + "=" + n));
              }),
            t
          );
        },
      }),
      (t.Handler = function (e) {
        function t(e, t) {
          e || p.isSuccess()
            ? O && O(v, g)
            : (t || (!p.isSuccess() && !b)) && U && U(v, h, h.statusText);
        }
        function n() {
          if (((S = null), (b = !0), p.cancel(), F)) {
            var e = { status: 408, statusText: "timeout" };
            F(v, e, e.statusText);
          }
        }
        function c(e) {
          p.isComplete() &&
            (S && clearTimeout(S),
            h.aborted || ((g = h.responseText), (v = e), t()));
        }
        function d() {
          b = !1;
          var e = "withCredentials" in new XMLHttpRequest();
          if (!y || e) {
            var t = x;
            (h = new XMLHttpRequest()),
              (h.onreadystatechange = c),
              L &&
                (t = a.QueryString.appendOrReplace(
                  t,
                  "_",
                  new Date().getTime(),
                )),
              D.length > 0 ? h.open(I, t, A, D, P) : h.open(I, t, A),
              p.clearResponse(),
              o.forEach(M, function (e, t) {
                h.setRequestHeader(e, t);
              }),
              (h.responseType = N),
              (h.withCredentials = B);
          } else
            s.XDomainRequest
              ? !A || D || P || w || T || C || B
                ? (_ = !1)
                : ((h = new XDomainRequest()),
                  (h.onerror = function () {
                    u(!1);
                  }),
                  (h.onload = function () {
                    u(!0);
                  }),
                  h.open(I, x),
                  p.clearResponse())
              : (_ = !1);
        }
        function u(e) {
          S && clearTimeout(S), (g = h.responseText), t(e, !e);
        }
        var p = this,
          f = "Content-type",
          g = "",
          m = [],
          v = null,
          h = null,
          b = !1,
          _ = !0,
          S = null,
          y = !1,
          w = !!e.contentType,
          T = !!e.headers,
          C = !!e.headerValue,
          k = e.data || "",
          x = e.targetUrl || "",
          I = e.requestType || "",
          A = e.isAsync !== !1,
          E = e.timeout || 0,
          D = e.username || "",
          P = e.password || "",
          R = e.contentType || "application/x-www-form-urlencoded",
          B = e.withCredentials || !1,
          L = e.breakCache || !1,
          N = e.responseType || "",
          M = e.headers || {},
          O = e.successCallback,
          U = e.failureCallback,
          F = e.timeoutCallback;
        (p.sendRequest = function (e) {
          (v = e),
            d(),
            _ &&
              (E > 0 &&
                (S = setTimeout(function () {
                  n.call(p);
                }, E)),
              h.send(k));
        }),
          (p.getState = function () {
            return _
              ? b
                ? l.Timeout
                : h
                ? h.readyState
                : l.Unsent
              : l.Unsupported;
          }),
          (p.getStatus = function () {
            return b ? a.HttpCode.Timeout : h ? h.status : 0;
          }),
          (p.cancel = function () {
            h && ((h.aborted = !0), h.abort());
          }),
          (p.getResponseJson = function () {
            return g ? i.parse(g) : {};
          }),
          (p.isComplete = function () {
            return p.getState() === l.Done || p.getState() === l.Timeout;
          }),
          (p.isSuccess = function () {
            return p.isComplete() && m[p.getStatus()];
          }),
          (p.clearResponse = function () {
            g = "";
          }),
          (function () {
            (M[f] = R),
              (m[a.HttpCode.Ok] = !0),
              (m[a.HttpCode.NotModified] = !0),
              (m[a.HttpCode.Timeout] = !1);
            var e = r.String.extractDomainFromUrl(x);
            e &&
              (y = r.String.extractDomainFromUrl(document.location.href) !== e);
          })();
      });
  },
  function (e, t, n) {
    function i(e, t) {
      function n(e, t) {
        var n = {
          unsafe_username: e,
          uaid: Z,
          isOtherIdpSupported: G,
          isFederationDisabled: te,
          checkPhones: f.isPhoneNumber(e),
          isRemoteNGCSupported: ne,
          isCookieBannerShown: ie,
          isFidoSupported: ae && u.isFidoSupported(),
          originalRequest: re,
        };
        return oe && (n.flowToken = t), le && (n.checkProofForAliases = !0), n;
      }
      function i(e, t) {
        return new o(function (i, r) {
          var o = new d({ checkApiCanary: ce });
          o.Json(de, n(e, t), i, r, a.DefaultRequestTimeout);
        });
      }
      function r(e, t, n) {
        var i = {},
          a = be && n.EstsProperties && n.EstsProperties.DesktopSsoEnabled,
          r = n.ErrorHR,
          o = N(e, n);
        return (
          (i =
            r === h.PP_E_INVALID_PHONENUMBER ||
            r === h.PP_E_LIBPHONENUMBERINTEROP_NUMBERPARSE_EXCEPTION
              ? D(r)
              : r === h.PP_E_NAME_INVALID || r === h.PP_E_INVALIDARG
              ? H(Y.CT_PWD_STR_Error_InvalidUsername)
              : r === h.PP_E_FEDERATION_INLINELOGIN_DISALLOWED
              ? H(Y.CT_PWD_STR_Error_FedNotAllowed, !0)
              : n.RequiresPhoneDisambiguation
              ? V(_.PhoneDisambiguation, {
                  phoneDisambigError:
                    n.IfExistsResult === S.NotExist
                      ? h.PP_E_DB_MEMBERDOESNOTEXIST
                      : null,
                })
              : n.IfExistsResult === S.NotExist
              ? P(e, t, n)
              : n.IfExistsResult === S.ExistsBothIDPs
              ? V(_.IdpDisambiguation, {
                  desktopSsoEnabled: a,
                  idpRedirectUrl: o.idpRedirectUrl,
                  idpRedirectPostParams: o.idpRedirectPostParams,
                  idpRedirectProvider: o.idpRedirectProvider,
                })
              : n.IfExistsResult === S.ExistsInOtherMicrosoftIDP
              ? R(e)
              : !G ||
                (n.IfExistsResult !== S.Error &&
                  n.IfExistsResult !== S.Throttled &&
                  0 === (n.ThrottleStatus & y.MsaThrottled))
              ? B(e, a, o, n)
              : V(_.IdpDisambiguation, {
                  hasIdpDisambigError: !0,
                  desktopSsoEnabled: a,
                  idpRedirectUrl: o.idpRedirectUrl,
                  idpRedirectPostParams: o.idpRedirectPostParams,
                  idpRedirectProvider: o.idpRedirectProvider,
                })),
          (z[e] = n),
          (i.flowToken = n.FlowToken || null),
          (z[e].FlowToken = null),
          (i.sharedData = A(n)),
          (i.sharedData.username = e),
          i
        );
      }
      function l(e) {
        var t = {};
        if (e && e.error)
          switch (e.error.code) {
            case b.AuthFailure:
              t = H(Y.CT_PWD_STR_Error_FlowTokenExpired);
              break;
            default:
              t = H(Y.CT_PWD_STR_Error_GetCredentialTypeError);
          }
        else t = H(Y.CT_PWD_STR_Error_GetCredentialTypeError);
        return (t.flowToken = e.FlowToken || null), t;
      }
      function c(e) {
        var t = m.Password,
          n = e.Credentials;
        return (
          n &&
            ((t = n.PrefCredential),
            t !== m.Fido ||
              u.isFidoSupported() ||
              (t =
                n.RemoteNgcParams && n.RemoteNgcParams.SessionIdentifier
                  ? m.RemoteNGC
                  : m.Password)),
          t
        );
      }
      function A(e) {
        var t = {},
          n = c(e),
          i = e.Credentials || {},
          a = i.RemoteNgcParams,
          r = i.FidoParams,
          o = i.SasParams,
          s = e.EstsProperties,
          l = a ? a.DefaultType : null;
        return (
          (t.preferredCredential = n),
          (t.location = e.Location),
          e.Display && (t.displayName = e.Display),
          (t.availableCreds = [].concat(
            i.HasPassword ? m.Password : [],
            i.HasRemoteNGC ? m.RemoteNGC : [],
            i.HasFido && u.isFidoSupported() ? m.Fido : [],
            i.HasPhone && i.SasParams ? m.OneTimeCode : [],
          )),
          (t.remoteNgcParams = {
            notificationSent:
              !Q && n === m.RemoteNGC && l === v.PushNotification,
            sessionIdentifier: a ? a.SessionIdentifier : null,
            entropy: a ? a.Entropy : null,
            defaultType: l,
          }),
          (t.fidoParams = { allowList: r ? r.AllowList : null }),
          (t.sasParams = {
            sessionIdentifier: o && o.Success ? o.SessionId : null,
          }),
          (t.callMetadata = s && s.CallMetadata ? s.CallMetadata : {}),
          (t.userTenantBranding = E(s)),
          t
        );
      }
      function E(e) {
        var t,
          n = s.loadTenantBranding(Se),
          i = s.loadTenantBranding((e && e.UserTenantBranding) || ye);
        return (
          we
            ? (t = i)
            : ((t = n),
              (t.BannerLogo = i.BannerLogo),
              (t.BoilerPlateText = i.BoilerPlateText),
              (t.KeepMeSignedInDisabled = i.KeepMeSignedInDisabled)),
          t
        );
      }
      function D(e) {
        return X
          ? H(Y.CT_PWD_STR_Error_InvalidPhoneNumber, !0)
          : V(_.PhoneDisambiguation, { phoneDisambigError: e });
      }
      function P(e, t, n) {
        if (n.IsProofForAlias) return V(_.ConfirmRecoverUsername);
        if (ue && U(e, n) && F()) return se ? L(e, n) : V(_.ConfirmSignup);
        var i,
          a = n.EstsProperties || {},
          r =
            a.DomainType &&
            a.DomainType !== w.Unknown &&
            a.DomainType !== w.Consumer;
        return (
          (i = t
            ? n.ThrottleStatus === y.NotThrottled && r
              ? Y.CT_PWD_STR_Error_UsernameNotExist_Alternate_VerifiedDomain
              : Y.CT_PWD_STR_Error_UsernameNotExist_Alternate
            : me && (a.IsConsumerDomain || a.DomainType === w.Consumer)
            ? Y.CT_PWD_STR_Error_UsernameNotExist_ConsumerEmail
            : n.ThrottleStatus === y.NotThrottled && r
            ? Y.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain
            : n.ThrottleStatus === y.MsaThrottled
            ? r
              ? Y.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain_MsaFailed
              : Y.CT_PWD_STR_Error_UnknownDomain_MsaFailed
            : Y.CT_PWD_STR_Error_UsernameNotExist),
          H(f.format(i, u.htmlEscape(f.extractDomain(e))), !0)
        );
      }
      function R(e) {
        var t = p.appendOrReplace(
            ve,
            "username",
            encodeURIComponent(e).replace(new RegExp("'", "g"), "%27"),
          ),
          n = he ? g.clone(he) : null;
        return n && (n.unsafe_username = e), j(t, n, !0);
      }
      function B(e, t, n, i) {
        var a = c(i);
        if (!J && t)
          return V(_.DesktopSsoProgress, {
            unsafe_desktopSsoDomainToUse: f.extractDomain(e),
          });
        switch (a) {
          case m.OneTimeCode:
            return V(Q ? _.ConfirmSend : _.OneTimeCode);
          case m.Fido:
            return V(_.Fido);
          case m.RemoteNGC:
            var r =
              i.Credentials.RemoteNgcParams.DefaultType === v.PushNotification;
            return V(Q && r ? _.ConfirmSend : _.RemoteNGC);
          case m.Federation:
          case m.CloudFederation:
          case m.GitHub:
            return V(_.IdpRedirect, {
              idpRedirectUrl: n.idpRedirectUrl,
              idpRedirectPostParams: n.idpRedirectPostParams,
              idpRedirectProvider: n.idpRedirectProvider,
            });
          case m.Password:
          default:
            return V(_.Password);
        }
      }
      function L(e, t) {
        var n = fe,
          i = ge ? g.clone(ge) : null;
        return (
          t &&
            t.IfExistsResult === S.NotExist &&
            U(e, t) &&
            (i
              ? (i.unsafe_username = e)
              : (n = p.appendOrReplace(n, "username", encodeURIComponent(e)))),
          j(n, i)
        );
      }
      function N(e, t) {
        var n = {},
          i = c(t),
          a = t.EstsProperties;
        switch (i) {
          case m.Federation:
            a && a.SamlRequest && a.RelayState
              ? ((n.idpRedirectUrl = t.Credentials.FederationRedirectUrl),
                (n.idpRedirectPostParams = {
                  SAMLRequest: a.SamlRequest,
                  RelayState: a.RelayState,
                  unsafe_username: e,
                }))
              : (n.idpRedirectUrl = M(t.Credentials.FederationRedirectUrl, e));
            break;
          case m.CloudFederation:
            n.idpRedirectUrl = t.Credentials.FederationRedirectUrl;
            break;
          case m.GitHub:
            (n.idpRedirectUrl = t.Credentials.FederationRedirectUrl),
              (n.idpRedirectProvider = T.GitHub);
        }
        return n;
      }
      function M(e, t) {
        if (_e) {
          var n = p.appendOrReplace(
            "?" + _e,
            "wctx",
            "LoginOptions%3D3%26" + p.extract("wctx", "?" + _e),
          );
          (n = n.substr(1)), (e = p.append(e, n));
        } else
          e = p.appendOrReplace(
            e,
            "wctx",
            "LoginOptions%3D3%26" + p.extract("wctx", e),
          );
        return (
          (e = p.appendOrReplace(
            e,
            "cbcxt",
            encodeURIComponent(decodeURIComponent(p.extract("cbcxt"))),
          )),
          (e = p.appendOrReplace(e, "username", encodeURIComponent(t))),
          (e = p.appendOrReplace(
            e,
            "mkt",
            encodeURIComponent(decodeURIComponent(p.extract("mkt"))),
          )),
          (e = p.appendOrReplace(
            e,
            "lc",
            encodeURIComponent(decodeURIComponent(p.extract("lc"))),
          ))
        );
      }
      function O(e) {
        return f.cleanseUsername(e, !0);
      }
      function U(e, t) {
        var n = pe && f.isSkypeName(e);
        return !t.IsSignupDisallowed && !n;
      }
      function F() {
        return se || le;
      }
      function V(e, t) {
        return { action: x.SwitchView, viewId: e, viewParams: t };
      }
      function H(e, t) {
        return { action: x.ShowError, error: e, isBlockingError: t };
      }
      function j(e, t, n) {
        return {
          action: x.Redirect,
          redirectUrl: e,
          redirectPostParams: t,
          isIdpRedirect: n,
        };
      }
      var W = this,
        G = !1,
        q = null,
        z = {},
        K = e,
        $ = 0 !== (t & I.CheckCurrentIdpOnly),
        X = 0 !== (t & I.IsPhoneNumberFullyQualified),
        J = 0 !== (t & I.DisableDesktopSsoPreferredCred),
        Q = 0 !== (t & I.DisableAutoSend),
        Y = K.str,
        Z = K.O,
        ee = K.Ab,
        te = K.Ar,
        ne = !!K.AS,
        ie = !!K.AW,
        ae = !!K.W,
        re = K.c,
        oe = K.Aa,
        se = K.P,
        le = K.V,
        ce = K.G,
        de = K.aM,
        ue = K.AO,
        pe = K.u,
        fe = K.e,
        ge = K.R,
        me = K.fUseConsumerEmailError,
        ve = K.I,
        he = K.h,
        be = K.desktopSsoConfig,
        _e = K.sFedQS,
        Se = K.staticTenantBranding,
        ye = K.dynamicTenantBranding,
        we = K.isGlobalTenant,
        Te = K.fCheckForWindowsSku;
      (W.sendAsync = function (e, t) {
        var n = O(e),
          a = z[n] ? z[n] : null,
          s = a ? o.resolve(a) : i(n, t);
        return o.all([q, s]).then(function (e) {
          var t = e[0],
            i = e[1];
          return r(n, t, i);
        }, l);
      }),
        (W.getResult = function (e, t) {
          return r(O(e), !1, t);
        }),
        (W.getState = function () {
          return { cache: z };
        }),
        (W.restoreState = function (e) {
          e && (z = e.cache || {});
        }),
        (W.cacheResponse = function (e, t) {
          z[O(e)] = t;
        }),
        (W.getSignupRedirectGctResult = function (e) {
          var t = O(e),
            n = z[t] ? z[t] : null;
          return L(t, n);
        }),
        (W.getOtherIdpRedirectGctResult = function (e) {
          return R(O(e));
        }),
        (function () {
          (G = !$ && ee === C.Both),
            (q = o.resolve(!1)),
            Te &&
              k &&
              k.isMsaProviderAllowedAsync &&
              (q = k.isMsaProviderAllowedAsync());
        })();
    }
    var a = n(4),
      r = n(11),
      o = n(86),
      s = n(13),
      l = n(7),
      c = n(5),
      d = n(83),
      u = l.Helper,
      p = l.QueryString,
      f = c.String,
      g = c.Object,
      m = a.CredentialType,
      v = a.RemoteNgcType,
      h = a.Error,
      b = a.ApiErrorCodes,
      _ = a.PaginatedState,
      S = a.IfExistsResult,
      y = a.ThrottleStatus,
      w = a.DomainType,
      T = a.BindProvider,
      C = r.AllowedIdentitiesType,
      k = null,
      x = (i.GctResultAction = { ShowError: 1, SwitchView: 2, Redirect: 3 }),
      I = (i.GctRequestHelperFlags = {
        CheckCurrentIdpOnly: 1,
        IsPhoneNumberFullyQualified: 2,
        DisableDesktopSsoPreferredCred: 4,
        DisableAutoSend: 8,
      });
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      function t(e, t, a, r) {
        p.push(function () {
          var i;
          try {
            i =
              d === s
                ? "function" == typeof e
                  ? e(u)
                  : u
                : "function" == typeof t
                ? t(u)
                : u;
          } catch (o) {
            return void r(o);
          }
          i instanceof n
            ? i.then(a, r)
            : d === l && "function" != typeof t
            ? r(i)
            : a(i);
        }),
          d !== o && i();
      }
      function i() {
        if (p.length > 0) {
          var e = p.slice();
          (p = []),
            setTimeout(function () {
              for (var t = 0, n = e.length; t < n; ++t) e[t]();
            }, 0);
        }
      }
      function a(e) {
        d === o && ((u = e), (d = s), i());
      }
      function r(e) {
        d === o && ((u = e), (d = l), i());
      }
      var c = this,
        d = o,
        u = null,
        p = [];
      (c.then = function (e, i) {
        return new n(function (n, a) {
          t(e, i, n, a);
        });
      }),
        (c["catch"] = function (e) {
          return c.then(null, e);
        }),
        (function () {
          if ("function" != typeof e)
            throw new TypeError("Promise: argument is not a Function object");
          try {
            e(a, r);
          } catch (t) {
            r(t);
          }
        })();
    }
    function i(e, t, n) {
      var i = function (i) {
        (e[t] = i), n();
      };
      return i;
    }
    function a(e, t) {
      var n = function () {
        e(t);
      };
      return n;
    }
    var r = window,
      o = 0,
      s = 1,
      l = 2;
    (n.all = function (e) {
      return e && e.length
        ? new n(function (t, a) {
            for (var r = [], o = 0, s = 0, l = e.length; s < l; ++s) {
              var c = e[s];
              c instanceof n
                ? (o++,
                  c.then(
                    i(r, s, function () {
                      0 === --o && t(r);
                    }),
                    a,
                  ))
                : (r[s] = c);
            }
            0 === o &&
              setTimeout(function () {
                t(r);
              }, 0);
          })
        : n.resolve([]);
    }),
      (n.race = function (e) {
        return new n(function (t, i) {
          if (e && e.length)
            for (var r = 0, o = e.length; r < o; ++r) {
              var s = e[r];
              s instanceof n ? s.then(t, i) : setTimeout(a(t, s), 0);
            }
        });
      }),
      (n.reject = function (e) {
        return new n(function (t, n) {
          n(e);
        });
      }),
      (n.resolve = function (e) {
        return e instanceof n
          ? e
          : new n(
              e && "function" == typeof e.then
                ? function (t, n) {
                    e.then(t, n);
                  }
                : function (t) {
                    t(e);
                  },
            );
      }),
      (e.exports = r.Promise || n);
  },
  function (e, t, n) {
    function i(e, t) {
      for (var n = 0; n < t.length; n++)
        if (t[n].name === e.name && t[n].idp === e.idp) return n;
      return -1;
    }
    var a = n(5),
      r = n(11),
      o = n(82),
      s = a.Array,
      l = {
        mergeSessions: function (e, t, n) {
          var a = [];
          return (
            s.forEach(t, function (t) {
              var r = i(t, e);
              r === -1
                ? (t.isWindowsSso ? e.unshift(t) : e.push(t), a.push(t))
                : t.isWindowsSso
                ? (e.splice(r, 1), e.unshift(t), a.push(t))
                : n && (e.splice(r, 1), e.push(t), a.push(t));
            }),
            a
          );
        },
        parseMeControlSessions: function (e) {
          return s.map(e, function (e) {
            var t = e.firstName,
              n = e.lastName;
            return (
              n && (t ? (t += " " + n) : (t = n)),
              {
                fullName: t,
                name: e.memberName,
                displayName: e.memberName,
                idp: r.SessionIdp.Msa,
                isOtherIdp: !0,
                isSignedIn: !0,
                isMeControlSession: !0,
                isGitHubFed: e.isGitHubFed || !1,
              }
            );
          });
        },
        parseBssoSessions: function (e) {
          return s.map(e, function (e) {
            return {
              ssoUniqueId: e.ssoUniqueId,
              name: e.name,
              displayName: e.displayName,
              idp: r.SessionIdp.Aad,
              ssoLink: e.url,
              isWindowsSso: e.isWindowsSso,
              isSignedIn: e.isSignedIn,
            };
          });
        },
        signInBssoSession: function (e, t) {
          o.isEnabled() && o.LoginWindowsUser(e.ssoLink, t);
        },
      };
    e.exports = l;
  },
  ,
  ,
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(91),
      n(166),
      n(186),
      n(189),
      n(218),
      n(240),
      n(242),
      n(244),
      n(246),
      n(248),
      n(250),
      n(281),
      n(284),
      n(286),
      n(288),
      n(293),
      n(295),
      n(312),
      n(320),
      n(324),
      n(327),
      n(329),
      n(335),
      n.e(2, function () {
        return n(341), "";
      }),
      n.e(3, function () {
        return n(343), n(347), n(349), n(168), n(351), "";
      }),
      "") +
      " --> <div data-bind=\"component: { name: 'background-image', publicMethods: backgroundControlMethods }\"></div> <form name=f1 id=i0281 novalidate=novalidate spellcheck=false method=post target=_top autocomplete=off data-bind=\"autoSubmit: forceSubmit, attr: { action: postUrl }\"><!-- ko withProperties: { '$loginPage': $data } --> <div class=outer data-bind=\"component: { name: 'page',\n        params: {\n            serverData: svr,\n            showButtons: svr.AV,\n            showFooterLinks: true,\n            useWizardBehavior: svr.A0,\n            handleWizardButtons: false,\n            password: password,\n            hideFromAria: ariaHidden },\n        event: {\n            footerAgreementClick: footer_agreementClick } }\"><!-- ko if: svr.AW --> <!-- ko component: \"cookie-banner-control\" --><!-- /ko --><!-- /ko --> <div class=middle data-bind=\"css: { 'app': $loginPage.backgroundLogoUrl() }\"><!-- ko if: $loginPage.backgroundLogoUrl() && !(paginationControlMethods() && paginationControlMethods().currentViewHasMetadata('hideLogo')) --> <div class=background-logo-holder> <img class=background-logo role=presentation data-bind=\"attr: { src: $loginPage.backgroundLogoUrl() }\"/> </div><!-- /ko --> <div class=inner data-bind=\"css: { 'app': $loginPage.backgroundLogoUrl(), 'wide': paginationControlMethods() && paginationControlMethods().currentViewHasMetadata('wide') }\"><!-- ko ifnot: paginationControlMethods()\n                    && (paginationControlMethods().currentViewHasMetadata('hideLogo')\n                        || (paginationControlMethods().currentViewHasMetadata('hideDefaultLogo') && !$loginPage.bannerLogoUrl())) --> <div role=banner data-bind=\"component: { name: 'logo-control',\n                    params: {\n                        isChinaDc: svr.fIsChinaDc,\n                        bannerLogoUrl: $loginPage.bannerLogoUrl() } }\"> </div><!-- /ko --><!-- ko if: svr.bH && (paginationControlMethods() && !paginationControlMethods().currentViewHasMetadata('hideLwaDisclaimer')) --> <div id=LWADisclaimer class=text-caption data-bind=\"text: svr.bH\"></div><!-- /ko --> <div role=main data-bind=\"component: { name: 'pagination-control',\n                        publicMethods: paginationControlMethods,\n                        params: {\n                            initialViewId: initialViewId,\n                            currentViewId: currentViewId,\n                            initialSharedData: initialSharedData,\n                            initialError: $loginPage.getServerError() },\n                        event: {\n                            cancel: paginationControl_onCancel,\n                            showView: $loginPage.view_onShow } }\"> <div data-viewid=\"" +
      n(4).PaginatedState.Username +
      '" data-bind="pageViewComponent: { name: \'login-paginated-username-view\',\n                        params: {\n                            serverData: svr,\n                            serverError: initialError,\n                            isInitialView: isInitialState,\n                            displayName: sharedData.displayName,\n                            prefillNames: $loginPage.prefillNames,\n                            flowToken: sharedData.flowToken,\n                            altCredHintShown: sharedData.altCredHintShown },\n                        event: {\n                            refresh: $loginPage.view_onRefresh,\n                            redirect: $loginPage.view_onRedirect,\n                            showLearnMore: $loginPage.learnMore_onShow } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.Password +
      "\" data-dynamicbranding=true data-bind=\"pageViewComponent: { name: 'login-paginated-password-view',\n                        params: {\n                            serverData: svr,\n                            serverError: initialError,\n                            isInitialView: isInitialState,\n                            username: sharedData.username,\n                            displayName: sharedData.displayName,\n                            hipRequiredForUsername: sharedData.hipRequiredForUsername,\n                            passwordBrowserPrefill: sharedData.passwordBrowserPrefill,\n                            availableCreds: sharedData.availableCreds,\n                            defaultKmsiValue: svr.q === " +
      n(11).LoginOption.RememberPWD +
      ',\n                            userTenantBranding: sharedData.userTenantBranding,\n                            sessions: sharedData.sessions,\n                            callMetadata: sharedData.callMetadata },\n                        event: {\n                            submitReady: $loginPage.view_onSubmitReady,\n                            redirect: $loginPage.view_onRedirect,\n                            resetPassword: $loginPage.passwordView_onResetPassword } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.OneTimeCode +
      "\" data-bind=\"pageViewComponent: { name: 'login-paginated-otc-view',\n                        params: {\n                            serverData: svr,\n                            serverError: initialError,\n                            isInitialView: isInitialState,\n                            username: sharedData.username,\n                            displayName: sharedData.displayName,\n                            availableCreds: sharedData.availableCreds,\n                            defaultKmsiValue: svr.q === " +
      n(11).LoginOption.RememberPWD +
      ',\n                            flowToken: sharedData.flowToken,\n                            sessionIdentifier: sharedData.sasParams ? sharedData.sasParams.sessionIdentifier : null },\n                        event: {\n                            postUrlUpdate: $loginPage.view_onPostUrlUpdate,\n                            updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                            submitReady: $loginPage.view_onSubmitReady } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.RemoteNGC +
      "\" data-dynamicbranding=true data-bind=\"pageViewComponent: { name: 'login-paginated-remotengc-view',\n                        params: {\n                            serverData: svr,\n                            serverError: initialError,\n                            isInitialView: isInitialState,\n                            username: sharedData.username,\n                            displayName: sharedData.displayName,\n                            remoteNgcParams: sharedData.remoteNgcParams,\n                            availableCreds: sharedData.availableCreds,\n                            defaultKmsiValue: svr.q === " +
      n(11).LoginOption.RememberPWD +
      ',\n                            sessions: sharedData.sessions,\n                            flowToken: sharedData.flowToken },\n                        event: {\n                            submitReady: $loginPage.view_onSubmitReady } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.PhoneDisambiguation +
      '" data-bind="pageViewComponent: { name: \'login-phone-disambig-view\',\n                        params: {\n                            serverData: svr,\n                            isInitialView: isInitialState,\n                            username: sharedData.username,\n                            location: sharedData.location,\n                            phoneDisambigError: sharedData.phoneDisambigError,\n                            flowToken: sharedData.flowToken },\n                        event: {\n                            refresh: $loginPage.view_onRefresh,\n                            redirect: $loginPage.view_onRedirect } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.LwaConsent +
      '" data-bind="pageViewComponent: { name: \'login-paginated-lwaconsent-view\',\n                        params: {\n                            serverData: svr,\n                            username: sharedData.username,\n                            displayName: sharedData.displayName },\n                        event: {\n                            submitReady: $loginPage.view_onSubmitReady } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.IdpDisambiguation +
      '" data-bind="pageViewComponent: { name: \'login-idp-disambiguation-view\',\n                        params: {\n                            serverData: svr,\n                            isInitialView: isInitialState,\n                            displayName: sharedData.displayName,\n                            hasInitialError: sharedData.hasIdpDisambigError,\n                            sessions: sharedData.sessions,\n                            idpRedirectUrl: sharedData.idpRedirectUrl,\n                            idpRedirectPostParams: sharedData.idpRedirectPostParams,\n                            preferredCredential: sharedData.preferredCredential,\n                            desktopSsoEnabled: sharedData.desktopSsoEnabled },\n                        event: {\n                            refresh: $loginPage.view_onRefresh,\n                            redirect: $loginPage.view_onRedirect } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.IdpRedirect +
      '" data-bind="pageViewComponent: { name: \'login-idp-redirect-view\',\n                        params: {\n                            serverData: svr,\n                            idpRedirectUrl: sharedData.idpRedirectUrl,\n                            idpRedirectPostParams: sharedData.idpRedirectPostParams,\n                            idpRedirectProvider: sharedData.idpRedirectProvider },\n                        event: {\n                            refresh: $loginPage.view_onRefresh,\n                            redirect: $loginPage.view_onRedirect } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.Tiles +
      '" data-bind="pageViewComponent: { name: \'login-tiles-view\',\n                        params: {\n                            serverData: svr,\n                            serverError: initialError,\n                            sessions: sharedData.sessions,\n                            flowToken: sharedData.flowToken,\n                            isTileRequestPending: $loginPage.asyncTileRequestCount > 0 },\n                        event: {\n                            refresh: $loginPage.view_onRefresh,\n                            redirect: $loginPage.view_onRedirect } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.ViewAgreement +
      '" data-wide=true data-hidelogo=true data-hidelwadisclaimer=true data-bind="pageViewComponent: { name: \'login-view-agreement-view\',\n                            params: {\n                                serverData: svr,\n                                agreementType: $loginPage.agreementType } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.ConfirmSend +
      '" data-bind="pageViewComponent: { name: \'login-confirm-send-view\',\n                        params: {\n                            serverData: svr,\n                            isInitialView: isInitialState,\n                            username: sharedData.username,\n                            displayName: sharedData.displayName,\n                            preferredCredential: sharedData.preferredCredential,\n                            availableCreds: sharedData.availableCreds,\n                            sessions: sharedData.sessions,\n                            flowToken: sharedData.flowToken },\n                        event: {\n                            redirect: $loginPage.view_onRedirect } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.RemoteLoginPolling +
      '" data-hidelwadisclaimer=true data-bind="pageViewComponent: { name: \'remote-login-polling-view\',\n                        params: {\n                            serverData: svr,\n                            userCode: sharedData.remoteLoginUserCode,\n                            deviceCode: sharedData.remoteLoginDeviceCode },\n                        event: {\n                            submitReady: $loginPage.view_onSubmitReady } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.LearnMore +
      "\" data-hidelogo=true data-hidelwadisclaimer=true data-bind=\"pageViewComponent: { name: 'login-learn-more-view',\n                            params: {\n                                serverData: svr,\n                                command: 'loginlearnmore' } }\"> </div> <div data-viewid=\"" +
      n(4).PaginatedState.ResetPasswordSplitter +
      '" data-bind="pageViewComponent: { name: \'login-reset-password-splitter-view\',\n                        params: {\n                            serverData: svr },\n                        event: {\n                            redirect: $loginPage.view_onRedirect } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.DesktopSsoProgress +
      "\" data-bind=\"pageViewComponent: { name: 'login-desktopsso-view',\n                        params: {\n                            serverData: svr,\n                            username: sharedData.username,\n                            displayName: sharedData.displayName,\n                            unsafe_desktopSsoDomainToUse: sharedData.unsafe_desktopSsoDomainToUse,\n                            preferredCredential: sharedData.preferredCredential,\n                            isPushNotification: sharedData.remoteNgcParams.defaultType === " +
      n(4).RemoteNgcType.PushNotification +
      ' },\n                        event: {\n                            submitReady: $loginPage.view_onSubmitReady } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.Fido +
      "\" data-bind=\"pageViewComponent: { name: 'login-fido-view',\n                        params: {\n                            serverData: svr,\n                            isInitialView: isInitialState,\n                            username: sharedData.username,\n                            displayName: sharedData.displayName,\n                            allowList: sharedData.fidoParams.allowList,\n                            challenge: $loginPage.flowToken(),\n                            availableCreds: sharedData.availableCreds,\n                            defaultKmsiValue: svr.q === " +
      n(11).LoginOption.RememberPWD +
      ',\n                            sessions: sharedData.sessions },\n                        event: {\n                            submitReady: $loginPage.view_onSubmitReady,\n                            redirect: $loginPage.view_onRedirect } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.CredentialPicker +
      '" data-bind="pageViewComponent: { name: \'login-credential-picker-view\',\n                        params: {\n                            serverData: svr,\n                            displayName: sharedData.displayName,\n                            availableCreds: sharedData.availableCreds },\n                        event: {\n                            redirect: $loginPage.view_onRedirect } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.ConfirmSignup +
      '" data-bind="pageViewComponent: { name: \'login-confirm-signup-view\',\n                        params: {\n                            serverData: svr,\n                            serverError: initialError,\n                            isInitialView: isInitialState,\n                            displayName: sharedData.displayName },\n                        event: {\n                            redirect: $loginPage.view_onRedirect } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.ConfirmRecoverUsername +
      '" data-bind="pageViewComponent: { name: \'login-confirm-recover-username-view\',\n                        params: {\n                            serverData: svr,\n                            serverError: initialError,\n                            isInitialView: isInitialState,\n                            displayName: sharedData.displayName },\n                        event: {\n                            redirect: $loginPage.view_onRedirect } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.SelectProvider +
      '" data-hidedefaultlogo=true data-bind="pageViewComponent: { name: \'login-select-provider-view\',\n                        params: {\n                            serverData: svr,\n                            isInitialView: isInitialState },\n                        event: {\n                            redirect: $loginPage.view_onRedirect } }"> </div> <div data-viewid="' +
      n(4).PaginatedState.FedConflict +
      '" data-hidedefaultlogo=true data-bind="pageViewComponent: { name: \'login-fed-conflict-view\',\n                        params: {\n                            serverData: svr,\n                            preferredCredential: sharedData.preferredCredential },\n                        event: {\n                            redirect: $loginPage.view_onRedirect } }"> </div> </div> </div><!-- ko if: newSessionMessage --> <div class="new-session-popup table"> <div class=table-row> <div class="table-cell text-left content"> <div data-bind="\n                            htmlWithBindings: newSessionMessage,\n                            childBindings: {\n                                \'newSessionName\': { css: { \'bold\': true } },\n                                \'newSessionLink\': { href: \'#\', click: newSession_onClick } }"> </div> </div> <div class="table-cell close-button"> <a id=newSessionCloseLink href=# data-bind="click: newSessionClose_onClick"><!-- ko component: \'accessible-image-control\' --> <img role=button pngsrc=' +
      n(176) +
      " svgsrc=" +
      n(177) +
      " data-bind=\"imgSrc, attr: { alt: str['CT_STR_OptOut_AltText'] }\"/> <img role=button pngsrc=" +
      n(178) +
      " svgsrc=" +
      n(179) +
      ' data-bind="imgSrc, attr: { alt: str[\'CT_STR_OptOut_AltText\'] }"/><!-- /ko --> </a> </div> </div> </div><!-- /ko --> <input type=hidden name=ps data-bind="value: postedLoginStateViewId"/> <input type=hidden name=psRNGCDefaultType data-bind="value: postedLoginStateViewRNGCDefaultType"/> <input type=hidden name=psRNGCEntropy data-bind="value: postedLoginStateViewRNGCEntropy"/> <input type=hidden name=psRNGCSLK data-bind="value: postedLoginStateViewRNGCSLK"/> <input type=hidden name=canary data-bind="value: svr.canary"/> <input type=hidden name=ctx data-bind="value: ctx"/> <input type=hidden name=hpgrequestid data-bind="value: svr.sessionId"/> <input type=hidden id=i0327 data-bind="attr: { name: svr.bC }, value: flowToken"/> <input type=hidden name=PPSX data-bind="value: svr.bF"/> <input type=hidden name=NewUser value=1 /> <input type=hidden name=FoundMSAs data-bind="value: svr.r"/> <input type=hidden name=fspost data-bind="value: svr.fPOST_ForceSignin ? 1 : 0"/> <input type=hidden name=i21 data-bind="value: wasLearnMoreShown() ? 1 : 0"/> <input type=hidden name=CookieDisclosure data-bind="value: svr.AW ? 1 : 0"/> <input type=hidden name=IsFidoSupported data-bind="value: isFidoSupported ? 1 : 0"/> <div data-bind="component: { name: \'instrumentation\',\n                publicMethods: instrumentationMethods,\n                params: { serverData: svr } }"> </div> </div> </div><!-- /ko --><!-- ko if: showFeatureNotificationBanner --> <div id=optOutUserBanner class="optin-banner table"> <div class=table-row> <div class=table-cell> <span data-bind="text: svr.fShowOptInBanner ? str[\'CT_STR_UxPreview_OptIn_Desc_June\'] : str[\'CT_STR_UxPreview_OptOut_Desc\']"></span> <span> <a target=_blank data-bind="text: str[\'CT_STR_UxPreview_LearnMore\'], href: svr.urlFeatureAnnouncementBlogPost"></a> </span> </div> <div> <a id=bannerCloseLink href=# data-bind="click: bannerClose_onClick"><!-- ko component: \'accessible-image-control\' --> <img role=button pngsrc=' +
      n(176) +
      " svgsrc=" +
      n(177) +
      " data-bind=\"imgSrc, attr: { alt: str['CT_STR_OptOut_AltText'] }\"/> <img role=button pngsrc=" +
      n(178) +
      " svgsrc=" +
      n(179) +
      ' data-bind="imgSrc, attr: { alt: str[\'CT_STR_OptOut_AltText\'] }"/><!-- /ko --> </a> </div> </div> </div><!-- /ko --> <div id=footer class=footer role=contentinfo data-bind="css: { \'default\': !backgroundLogoUrl() }"> <div data-bind="component: { name: \'footer-control\',\n            params: {\n                serverData: svr,\n                debugDetails: debugDetails,\n                showLinks: true },\n            event: {\n                agreementClick: footer_agreementClick,\n                showDebugDetailsClick: footer_showDebugDetailsClick } }"> </div> </div> </form> <form method=post target=_top data-bind="autoSubmit: postRedirectForceSubmit, attr: { action: postRedirectUrl }"><!-- ko foreach: postRedirectParams --> <input type=hidden data-bind="attr: { name: $data.name }, value: $data.unsafe_value"/><!-- /ko --> </form><!-- ko if: svr.AK --> <div data-bind="injectIframe: { url: svr.AK }"></div><!-- /ko --><!-- ko if: svr.AG --> <div id=idPartnerPL data-bind="injectIframe: { url: svr.AG }"></div> <!-- /ko -->';
  },
  function (e, t, n) {
    function i(e, t) {
      function i(e, t) {
        var n = [
          "Microsoft",
          "OneDrive",
          "Skype",
          "Bing",
          "Xbox",
          "Word",
          "Outlook",
          "Office",
          "Excel",
          "PowerPoint",
          "Cortana",
          "SkypeDialer",
          "Health",
          "MileIQ",
          "Beam",
          "MSN",
          "Minecraft",
        ];
        return (
          (e < 0 || e >= n.length) && (e = 0),
          r.String.format(
            "./AppCentipede_{0}{1}.{2}",
            n[e],
            t ? "_white" : "",
            d ? "svg" : "png",
          )
        );
      }
      var c = this,
        d = !1,
        u = e.serverData,
        p = e.showButtons || !1,
        f = e.showFooterLinks,
        g = e.showFooterLogo !== !1,
        m = e.useWizardBehavior,
        v = e.hideFromAria || a.observable(!1),
        h = u.A6;
      (c.templateNodes = {}),
        (c.showButtons = p),
        (c.footer = { showLinks: f, showLogo: g }),
        (c.centipede = {
          getLightUrl: function () {
            return l(i(h, !0));
          },
          getDarkUrl: function () {
            return l(i(h, !1));
          },
        }),
        (c.hideFromAria = v),
        (c.isInternalModeEnabled = "1" === o.QueryString.extract("psi")),
        (c.viewModel = null),
        (c.viewAgreement = a.observable(!1)),
        (c.agreementType = a.observable()),
        (c.onFooterAgreementClick = s.create()),
        (c.footer_agreementClick = function (e) {
          c.onFooterAgreementClick(e);
        }),
        (c.agreement_backButtonClick = function () {
          c.viewAgreement(!1);
        }),
        (c.showAgreement = function (e) {
          c.agreementType(e), c.viewAgreement(!0);
        }),
        (function () {
          (d = o.Helper.isSvgImgSupported()),
            t &&
              a.utils.arrayForEach(t, function (e) {
                e.id && (c.templateNodes[e.id] = e.childNodes);
              }),
            m &&
              n.e(1, function () {
                var t = n(162);
                c.viewModel = new t(e);
              });
        })();
    }
    var a = n(1),
      r = n(5),
      o = n(7),
      s = n(8),
      l = n(92),
      c = window;
    a.components.register("page", {
      viewModel: {
        createViewModel: function (e, t) {
          return new i(e, t.templateNodes);
        },
      },
      template: n(161),
      synchronous:
        !c.ServerData.A || o.Helper.isStackSizeGreaterThan(c.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    function i(e) {
      return n(a(e));
    }
    function a(e) {
      return (
        r[e] ||
        (function () {
          throw new Error("Cannot find module '" + e + "'.");
        })()
      );
    }
    var r = {
      "./AppCentipede_Beam.png": 93,
      "./AppCentipede_Beam.svg": 94,
      "./AppCentipede_Beam_white.png": 95,
      "./AppCentipede_Beam_white.svg": 96,
      "./AppCentipede_Bing.png": 97,
      "./AppCentipede_Bing.svg": 98,
      "./AppCentipede_Bing_white.png": 99,
      "./AppCentipede_Bing_white.svg": 100,
      "./AppCentipede_Cortana.png": 101,
      "./AppCentipede_Cortana.svg": 102,
      "./AppCentipede_Cortana_white.png": 103,
      "./AppCentipede_Cortana_white.svg": 104,
      "./AppCentipede_Excel.png": 105,
      "./AppCentipede_Excel.svg": 106,
      "./AppCentipede_Excel_white.png": 107,
      "./AppCentipede_Excel_white.svg": 108,
      "./AppCentipede_Health.png": 109,
      "./AppCentipede_Health.svg": 110,
      "./AppCentipede_Health_white.png": 111,
      "./AppCentipede_Health_white.svg": 112,
      "./AppCentipede_MSN.png": 113,
      "./AppCentipede_MSN.svg": 114,
      "./AppCentipede_MSN_white.png": 115,
      "./AppCentipede_MSN_white.svg": 116,
      "./AppCentipede_Microsoft.png": 117,
      "./AppCentipede_Microsoft.svg": 118,
      "./AppCentipede_Microsoft_white.png": 119,
      "./AppCentipede_Microsoft_white.svg": 120,
      "./AppCentipede_MileIQ.png": 121,
      "./AppCentipede_MileIQ.svg": 122,
      "./AppCentipede_MileIQ_white.png": 123,
      "./AppCentipede_MileIQ_white.svg": 124,
      "./AppCentipede_Minecraft.png": 125,
      "./AppCentipede_Minecraft.svg": 126,
      "./AppCentipede_Minecraft_white.png": 127,
      "./AppCentipede_Minecraft_white.svg": 128,
      "./AppCentipede_Office.png": 129,
      "./AppCentipede_Office.svg": 130,
      "./AppCentipede_Office_white.png": 131,
      "./AppCentipede_Office_white.svg": 132,
      "./AppCentipede_OneDrive.svg": 133,
      "./AppCentipede_OneDrive_white.svg": 134,
      "./AppCentipede_Onedrive.png": 135,
      "./AppCentipede_Onedrive_white.png": 136,
      "./AppCentipede_Outlook.png": 137,
      "./AppCentipede_Outlook.svg": 138,
      "./AppCentipede_Outlook_white.png": 139,
      "./AppCentipede_Outlook_white.svg": 140,
      "./AppCentipede_PowerPoint.png": 141,
      "./AppCentipede_PowerPoint.svg": 142,
      "./AppCentipede_PowerPoint_white.png": 143,
      "./AppCentipede_PowerPoint_white.svg": 144,
      "./AppCentipede_Skype.png": 145,
      "./AppCentipede_Skype.svg": 146,
      "./AppCentipede_SkypeDialer.png": 147,
      "./AppCentipede_SkypeDialer.svg": 148,
      "./AppCentipede_SkypeDialer_white.png": 149,
      "./AppCentipede_SkypeDialer_white.svg": 150,
      "./AppCentipede_Skype_white.png": 151,
      "./AppCentipede_Skype_white.svg": 152,
      "./AppCentipede_Word.png": 153,
      "./AppCentipede_Word.svg": 154,
      "./AppCentipede_Word_white.png": 155,
      "./AppCentipede_Word_white.svg": 156,
      "./AppCentipede_Xbox.png": 157,
      "./AppCentipede_Xbox.svg": 158,
      "./AppCentipede_Xbox_white.png": 159,
      "./AppCentipede_Xbox_white.svg": 160,
    };
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.resolve = a),
      (e.exports = i),
      (i.id = 92);
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Beam.png?x=abc123e93f98bea5f2ffb846840ab25d";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Beam.svg?x=e4b644c8f27c8b4a59adf70db0455f7b";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Beam_white.png?x=e97054c1b6d8a11971612d44ba691ed5";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Beam_white.svg?x=2f6d4cff1060fe900a46963c1d1bace1";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Bing.png?x=01509890278f938ba6070b34bd674e97";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Bing.svg?x=9a24fa411a5f181b8e66a0fe6abfa325";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Bing_white.png?x=84563b48358d261f9e365ea347fa5fc7";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Bing_white.svg?x=7876fa06353db7b26af550293e8fa831";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Cortana.png?x=60bc94b988f085b46cfa1946c9f13deb";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Cortana.svg?x=288e96d92e1010de6612fb2594b3e29d";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Cortana_white.png?x=f9360a48d6fbcf39bcbe23f94239d6d6";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Cortana_white.svg?x=f5f405824a0e680d7801300975082f93";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Excel.png?x=16121459dd2076b8e91df7db6ca028a8";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Excel.svg?x=8101a2b4643129a8a7507145bd743390";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Excel_white.png?x=390010e0c6066f82d7981a320b12c99c";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Excel_white.svg?x=a93b4b7c3ad9b0c3b94a4c4130ddcf69";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Health.png?x=5edbe76ae3b8ad56d0e898ad30f98e13";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Health.svg?x=c4b0c6a5ad3fe1eb7efebcc8490e7c76";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Health_white.png?x=8c18837eed8b70be0652f5464c63baa8";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Health_white.svg?x=7464188e4ed2feccc71ec58187448712";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_MSN.png?x=f4bce5062c4ec41d46665befc63f6db6";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_MSN.svg?x=6e63d37ede80f5ce1dc037980261bbb5";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_MSN_white.png?x=79471f10179f1b0a12b774891add64c0";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_MSN_white.svg?x=6a426568805318e8a39d73e79ec9aea0";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Microsoft.png?x=2278f8442c770adab4e50d19a0d3b16f";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Microsoft.svg?x=aed5eb9ccea43f119a25b3b74c59c7e7";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Microsoft_white.png?x=80fc460cfdfe07ed50208a6bb166b2d8";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Microsoft_white.svg?x=b9f4589659563b0e18c8346229c06fc5";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_MileIQ.png?x=415637b21bafbcd5ea3663ff65d61b06";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_MileIQ.svg?x=625e6e87eb5969f9afcaefed1dec05bc";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_MileIQ_white.png?x=5813dfac6d4e378019320f5fe311ff74";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_MileIQ_white.svg?x=481b25eba75580aaf5f80cacdf3620a9";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Minecraft.png?x=56b9d60cbc29b3158c7f3a0f3e39feb8";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Minecraft.svg?x=f626dec90a3d3c9111b03ccf5f833688";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Minecraft_white.png?x=36eb004e990195a2d2e6fb3ed668a829";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Minecraft_white.svg?x=3de6cedead3af55e8a4dd56cbaa2d53c";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Office.png?x=ecf4fcc984a3f68b55ef1474c58df705";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Office.svg?x=0c0427c2da7db70a7e64f64a2923cbef";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Office_white.png?x=0e4b310757601ca965a52a16e282d9cd";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Office_white.svg?x=a738a0c0216680c36de4445b918f4476";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_OneDrive.svg?x=13608923a0e316d264c0df5705875ac4";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_OneDrive_white.svg?x=04be02cd92223e76076db4e8c2b03fdc";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Onedrive.png?x=fc3aa12c812dc7b04f498eae71f33ea2";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Onedrive_white.png?x=cb16239838d9c1d0b8791ed37547e204";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Outlook.png?x=4af186a12cecea5a41dc4db81d3f5df5";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Outlook.svg?x=64589f528a7a7802290b5e64727a43a5";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Outlook_white.png?x=2e74e3e6ff729cb1afb05a0ad70b5190";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Outlook_white.svg?x=e06aa723e4775d33c168d0279d3190f3";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_PowerPoint.png?x=6ff4dbdb1b8025edd88c74a3b91646b8";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_PowerPoint.svg?x=b682753de8344e19fd81ba14a9b15cd1";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_PowerPoint_white.png?x=ad9010ae9f73d672b05dc0da3a52651a";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_PowerPoint_white.svg?x=228ee2d3e9222ab696ac793ce4d57ecd";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Skype.png?x=d377f9ccd35a4470ccabea4b24688819";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Skype.svg?x=e84d948df1aa1f8dd0bf9404623ce490";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_SkypeDialer.png?x=aa161df2f39b5fbbd2483e6154952d85";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_SkypeDialer.svg?x=09ad5cae937bb9160e367ae0c66c599c";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_SkypeDialer_white.png?x=78db1ad460c13f6cea9751b7d194000b";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_SkypeDialer_white.svg?x=95bcadd7a1eb1471340fca5a785c35b2";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Skype_white.png?x=18064fc3bb9681cd2c6fcbd15ddb92f2";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Skype_white.svg?x=20959b2d887dc005fc6e69d6bd72f4c8";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Word.png?x=2ed0b6c1934ddda271225cde00593605";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Word.svg?x=2f6c9ed1251de316cebf0c172c51cf85";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Word_white.png?x=b5f8bc8af54c4ab4cddfa39bca9653ae";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Word_white.svg?x=329f37b9a36eec17dd2429191689f112";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Xbox.png?x=1d4968015d72dcbecb1843c8ca89cb47";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Xbox.svg?x=a3d54c28e8a88393c33c27972c1d97d5";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Xbox_white.png?x=6b92c1741d4d58ef89705046e5dda711";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/AppCentipede/AppCentipede_Xbox_white.svg?x=67d09ff8fa2d43a50b165ce32a5ff58c";
  },
  function (e, t) {
    e.exports =
      "<!-- ko template: { nodes: $componentTemplateNodes, data: $parent } --><!-- /ko -->";
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    function i(e) {
      function t(e, t) {
        p && !f ? n.onAgreementClick(e) : l.open(t, "_blank");
      }
      var n = this,
        i = e.serverData,
        r = e.showLogo,
        s = e.showLinks,
        d = e.debugDetails,
        u = e.showDebugDetails,
        p = i.p,
        f = i.fIsChinaDc,
        g = i.al || i.Ai,
        m = i.aK || i.t,
        v = i.AI,
        h = i.urlGallatinIcp,
        b = i.fIsDebugTracingEnabled;
      (n.onAgreementClick = o.create()),
        (n.onShowDebugDetailsClick = o.create()),
        (n.showDebugDetails = a.observable(!!u)),
        (n.isDebugTracingEnabled = a.observable(!!b)),
        (n.showLogo = r && !f),
        (n.showLinks = s),
        (n.showIcpLicense = f),
        (n.debugDetails = d),
        (n.termsLink = g),
        (n.privacyLink = m),
        (n.impressumLink = v),
        (n.icpLink = h),
        (n.privacyLink_onClick = function () {
          t(c.Privacy, n.privacyLink);
        }),
        (n.termsLink_onClick = function () {
          t(c.Tou, n.termsLink);
        }),
        (n.impressumLink_onClick = function () {
          t(c.Impressum, n.impressumLink);
        }),
        (n.moreInfo_onClick = function () {
          n.onShowDebugDetailsClick(),
            n.showDebugDetails(!n.showDebugDetails());
        }),
        (n.setDebugTracing_onClick = function (e) {
          n.isDebugTracingEnabled(e);
        });
    }
    var a = n(1),
      r = n(7),
      o = n(8),
      s = n(4),
      l = window,
      c = s.AgreementType;
    a.components.register("footer-control", {
      viewModel: i,
      template: n(167),
      synchronous:
        !l.ServerData.A || r.Helper.isStackSizeGreaterThan(l.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(168), n(170), "") +
      " --><!-- ko if: showLinks || impressumLink || showIcpLicense --> <div id=footerLinks class=\"footerNode text-secondary\"><!-- ko if: !showIcpLicense --> <span id=ftrCopy data-bind=\"html: svr.bG\"></span><!-- /ko --> <a id=ftrTerms data-bind=\"text: str['MOBILE_STR_Footer_Terms'], href: termsLink, click: termsLink_onClick\"></a> <a id=ftrPrivacy data-bind=\"text: str['MOBILE_STR_Footer_Privacy'], href: privacyLink, click: privacyLink_onClick\"></a><!-- ko if: impressumLink --> <a id=ftrImpressum data-bind=\"text: str['WF_STR_Footer_LinkDisclaimer_Text'], href: impressumLink, click: impressumLink_onClick\"></a><!-- /ko --><!-- ko if: showIcpLicense --> <a id=ftrIcp href=# target=_blank data-bind=\"text: str['STR_Footer_IcpLicense_Text'], href: icpLink\"></a><!-- /ko --> <a href=# role=button class=moreOptions data-bind=\"click: moreInfo_onClick, ariaLabel: str['CT_STR_More_Options_Ellipsis_AriaLabel'], attr: { title: str['CT_STR_More_Options_Ellipsis_AriaLabel'] }\"><!-- ko component: 'accessible-image-control' --> <img class=desktopMode role=presentation pngsrc=" +
      n(180) +
      " svgsrc=" +
      n(181) +
      " data-bind=imgSrc /> <img class=desktopMode role=presentation pngsrc=" +
      n(182) +
      " svgsrc=" +
      n(183) +
      " data-bind=imgSrc /><!-- /ko --><!-- ko component: 'accessible-image-control' --> <img class=mobileMode role=presentation pngsrc=" +
      n(182) +
      " svgsrc=" +
      n(183) +
      " data-bind=imgSrc /> <img class=mobileMode role=presentation pngsrc=" +
      n(184) +
      " svgsrc=" +
      n(185) +
      " data-bind=imgSrc /><!-- /ko --> </a> </div><!-- ko if: showDebugDetails --> <div data-bind=\"component: { name: 'error-details-field',\n    params: {\n        debugDetails: debugDetails,\n        serverData: svr,\n        isDebugTracingEnabled: isDebugTracingEnabled() },\n    event: {\n        closeErrorBanner: moreInfo_onClick,\n        setDebugTracing: setDebugTracing_onClick } }\"> </div><!-- /ko --> <!-- /ko -->";
  },
  function (e, t, n) {
    function i(e, t, n) {
      var i = this;
      (i.isHighContrastBlackTheme = !1),
        (i.isHighContrastWhiteTheme = !1),
        (i.lightImageNode = t),
        (i.darkImageNode = n),
        (function () {
          var e = s.isHighContrast();
          if (e) {
            var t = s.getHighContrastTheme();
            (i.isHighContrastBlackTheme = "black" === t),
              (i.isHighContrastWhiteTheme = "white" === t);
          }
        })();
    }
    var a = n(1),
      r = n(7),
      o = window,
      s = r.Helper,
      l = 1;
    a.components.register("accessible-image-control", {
      viewModel: {
        createViewModel: function (e, t) {
          var n = a.utils.arrayFilter(t.templateNodes, function (e) {
            return e.nodeType === l;
          });
          return new i(e, n[0], n[1]);
        },
      },
      template: n(169),
      synchronous:
        !o.ServerData.A || r.Helper.isStackSizeGreaterThan(o.ServerData.A),
    }),
      (e.exports = i);
  },
  function (e, t) {
    e.exports =
      "<!-- ko if: (isHighContrastBlackTheme || svr.fHasBackgroundColor) && !isHighContrastWhiteTheme --> <!-- ko template: { nodes: [lightImageNode], data: $parent } --><!-- /ko --><!-- /ko --><!-- ko if: (isHighContrastWhiteTheme || !svr.fHasBackgroundColor) && !isHighContrastBlackTheme --> <!-- ko template: { nodes: [darkImageNode], data: $parent } --><!-- /ko --> <!-- /ko -->";
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        i.sending(!1),
          i.isDebugTracingEnabled(!i.isDebugTracingEnabled()),
          i.onSetDebugTracing(i.isDebugTracingEnabled());
      }
      function n() {
        i.sending(!1), i.debugModeError(h.STR_Error_Details_Debug_Mode_Failure);
      }
      var i = this,
        r = null,
        o = e.debugDetails,
        c = e.serverData,
        p = e.isDebugTracingEnabled,
        f = c.strServiceExceptionMessage,
        g = c.urlSetDebugMode,
        m = c.D,
        v = c.sSigninName,
        h = c.str;
      (i.onCloseErrorBanner = s.create()),
        (i.onSetDebugTracing = s.create()),
        (i.debugModeError = a.observable()),
        (i.isDebugTracingEnabled = a.observable(p)),
        (i.sending = a.observable(!1)),
        (i.showErrorBanner = a.observable(!0)),
        (i.unsafe_exceptionMessage = null),
        (i.debugDetails = null),
        (i.hideBanner_onClick = function () {
          i.onCloseErrorBanner(), i.showErrorBanner(!1);
        }),
        (i.setDebugMode_onClick = function () {
          if (!i.sending()) {
            var e = new l();
            i.sending(!0), i.debugModeError("");
            var a = { mode: i.isDebugTracingEnabled() ? 0 : 1, user: r };
            e.Json(g, a, t, n);
          }
        }),
        (function () {
          (r = m || v || ""),
            (i.unsafe_exceptionMessage = u.htmlUnescape(f)),
            (i.debugDetails = o || {}),
            i.debugDetails.timestamp ||
              (i.debugDetails.timestamp = d.getUTCString());
        })();
    }
    var a = n(1),
      r = n(7),
      o = n(5),
      s = n(8),
      l = n(83),
      c = window,
      d = o.DateTime,
      u = r.Helper;
    a.components.register("error-details-field", {
      viewModel: i,
      template: n(171),
      synchronous:
        !c.ServerData.A || r.Helper.isStackSizeGreaterThan(c.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(172), n(168), "") +
      ' --><!-- ko if: showErrorBanner --> <div id=errorDetailsBanner class="optin-banner table"> <div class=table-row> <div class=table-cell> <div class=override-ltr><!-- ko if: debugDetails.errorCode --> <div> <span class=bold>Error Code: </span> <span data-bind="text: debugDetails.errorCode"></span> </div><!-- /ko --><!-- ko if: svr.sessionId --> <div> <span class=bold>Request Id: </span> <span data-bind="text: svr.sessionId"></span> </div><!-- /ko --> <div> <span class=bold>Correlation Id: </span> <span data-bind="text: svr.correlationId"></span> </div> <div> <span class=bold>Timestamp: </span> <span data-bind="text: debugDetails.timestamp"></span> </div><!-- ko if: svr.strServiceExceptionMessage --> <div> <span class=bold>Message: </span> <span data-bind="text: unsafe_exceptionMessage"></span> </div><!-- /ko --> </div><!-- ko if: svr.urlSetDebugMode --> <div> <span class=bold data-bind="text: str[\'STR_Error_Details_Debug_Mode\']"></span> <a data-bind="href: svr.urlSetDebugMode, text: isDebugTracingEnabled() ? str[\'STR_Error_Details_Debug_Mode_Disable\'] : str[\'STR_Error_Details_Debug_Mode_Enable\'], click: setDebugMode_onClick"></a> </div><!-- ko if: sending --> <div class=progress-container-tile> <div class=progress role=progressbar data-bind="component: \'marching-ants-control\', ariaLabel: str[\'WF_STR_ProgressText\']"></div> </div><!-- /ko --><!-- ko if: debugModeError --> <div class="alert alert-error" role=alert data-bind="text: debugModeError"></div><!-- /ko --> <div data-bind="text: str[\'STR_Error_Details_Debug_Mode_Desc\']"></div><!-- /ko --> </div> <div> <a id=errorBannerCloseLink href=# data-bind="click: hideBanner_onClick"><!-- ko component: \'accessible-image-control\' --> <img role=button pngsrc=' +
      n(176) +
      " svgsrc=" +
      n(177) +
      " data-bind=\"imgSrc, attr: { alt: str['CT_STR_Error_Details_Close_AltText'] }\"/> <img role=button pngsrc=" +
      n(178) +
      " svgsrc=" +
      n(179) +
      " data-bind=\"imgSrc, attr: { alt: str['CT_STR_Error_Details_Close_AltText'] }\"/><!-- /ko --> </a> </div> </div> </div> <!-- /ko -->";
  },
  function (e, t, n) {
    function i() {
      var e = this;
      (e.useCssAnimation = !1),
        (function () {
          s.isCSSAnimationSupported() &&
            !s.isHighContrast() &&
            (e.useCssAnimation = !0);
        })();
    }
    var a = n(1),
      r = n(7),
      o = window,
      s = r.Helper;
    a.components.register("marching-ants-control", {
      viewModel: i,
      template: n(173),
      synchronous:
        !o.ServerData.A || r.Helper.isStackSizeGreaterThan(o.ServerData.A),
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(168), "") +
      " --><!-- ko if: useCssAnimation --> <div></div><div></div><div></div><div></div><div></div><div></div><!-- /ko --><!-- ko ifnot: useCssAnimation --><!-- ko component: 'accessible-image-control' --> <img role=presentation src=" +
      n(174) +
      " /> <img role=presentation src=" +
      n(175) +
      " /><!-- /ko --> <!-- /ko -->";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/marching_ants_white.gif?x=166de53471265253ab3a456defe6da23";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/marching_ants.gif?x=b540a8e518037192e32c4fe58bf2dbab";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/close_white.png?x=78782a80a32b23ea76f4e9e039610102";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/close_white.svg?x=6b2eebc2feff2d8583fcc9ad7a9e375a";
  },
  function (e, t, n) {
    e.exports = n.p + "images/close.png?x=6278ec0ac116a229512ee5c448658b16";
  },
  function (e, t, n) {
    e.exports = n.p + "images/close.svg?x=40eb39126300b56bf66c20ee75b54093";
  },
  function (e, t, n) {
    e.exports = n.p + "images/ellipsis.png?x=96f69d0cefd8a8ba623a182c351ccc64";
  },
  function (e, t, n) {
    e.exports = n.p + "images/ellipsis.svg?x=635a63d500a92a0b8497cdc58d0f66b1";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/ellipsis_white.png?x=0ad43084800fd8b50a2576b5173746fe";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/ellipsis_white.svg?x=5ac590ee72bfe06a7cecfd75b588ad73";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/ellipsis_grey.png?x=5bc252567ef56db648207d9c36a9d004";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/ellipsis_grey.svg?x=2b5d393db04a5e6e1f739cb266e65b4c";
  },
  function (e, t, n) {
    function i(e, t, n, i) {
      function a() {
        var e = g.currentViewIndex();
        return m[e]();
      }
      function r() {
        g.animate(!1), g.animate.back(!1);
      }
      function l(e) {
        b(null),
          (g.isInitialState = h.getState().isInitialState),
          g.onShowView(v[e].metadata, e),
          b(e);
      }
      function u(e) {
        var t = a();
        e && t.saveSharedData(g.sharedData);
        var n = t.getState(),
          i = h.getState();
        (i.viewState = n), h.replaceState(i);
      }
      function p() {
        u(!1);
      }
      function f(e) {
        l(e.viewId);
      }
      var g = this,
        m = n,
        v = i,
        h = null,
        b = o.observable(),
        _ = e.initialViewId || null,
        S = e.currentViewId || null,
        y = e.initialSharedData || {},
        w = e.initialError;
      (g.views = t),
        (g.viewInterfaces = n),
        (g.sharedData = y),
        (g.initialError = w),
        (g.isInitialState = !1),
        (g.animate = o.utils.extend(o.observable(!1), {
          back: o.observable(!1),
        })),
        (g.currentViewIndex = o.pureComputed(function () {
          var e = b();
          return v[e] && !isNaN(v[e].index) ? v[e].index : -1;
        })),
        (g.onCancel = d.create()),
        (g.onShowView = d.create()),
        (g.dispose = function () {
          h.dispose();
        }),
        (g.setDefaultFocus = function () {
          var e = a();
          e.setDefaultFocus && e.setDefaultFocus();
        }),
        (g.getCurrentViewId = function () {
          return b();
        }),
        (g.getSharedData = function () {
          return g.sharedData || {};
        }),
        (g.getSharedDataItem = function (e) {
          return g.getSharedData()[e];
        }),
        (g.getCurrentView = function () {
          return { viewId: b(), viewInterface: a() };
        }),
        (g.setSharedDataItem = function (e, t) {
          g.sharedData || (g.sharedData = {}), (g.sharedData[e] = t);
        }),
        (g.currentViewHasMetadata = function (e) {
          var t = b();
          return !!v[t] && !!v[t].metadata[e];
        }),
        (g.submitCurrentView = function () {
          var e = a();
          e && e.submit && e.submit();
        }),
        (g.view_onLoad = function () {
          var e = h.getState(),
            t = a();
          t.restoreState(e ? e.viewState : null), g.setDefaultFocus();
        }),
        (g.view_onSwitchView = function (e, t) {
          var n = h.getState() || {};
          (g.initialError = null),
            e === s.PaginatedState.Previous
              ? n.isInitialState
                ? g.onCancel()
                : (r(), g.animate.back(!0), h.goBack())
              : (u(!0),
                (t |= e === b()),
                t
                  ? ((n.viewId = e), (n.viewState = null), h.replaceState(n))
                  : ((n = { viewId: e }), h.pushState(n)),
                r(),
                g.animate(!0),
                l(e));
        }),
        (g.view_onCancel = function () {
          g.onCancel();
        }),
        (function () {
          h = new c(p, f);
          var e = null;
          (null === _ && null === S) ||
            ((_ = null === _ ? S : _),
            (S = null === S ? _ : S),
            (e = { viewId: _, isInitialState: !0 }),
            h.replaceState(e)),
            S !== _ && ((e = { viewId: S }), h.pushState(e)),
            null !== e && l(e.viewId);
        })();
    }
    function a(e, t) {
      var n = [],
        a = [],
        s = {},
        l = 0;
      return (
        o.utils.arrayForEach(t.templateNodes, function (e) {
          var t;
          e.nodeType === p &&
            ((t = e.getAttribute("data-viewid")),
            null !== t &&
              (n.push(e),
              a.push(o.observable()),
              (t = isNaN(t) ? t : parseInt(t)),
              (s[t] = { index: l++, metadata: r(e) })));
        }),
        new i(e, n, a, s)
      );
    }
    function r(e) {
      var t = {},
        n = [
          "wide",
          "hideLogo",
          "hideDefaultLogo",
          "dynamicBranding",
          "hideLwaDisclaimer",
        ];
      return (
        o.utils.arrayForEach(n, function (n) {
          var i = e.getAttribute("data-" + n);
          i && (t[n] = "true" === i.toLowerCase());
        }),
        t
      );
    }
    var o = n(1),
      s = n(4),
      l = n(7),
      c = n(187),
      d = n(8),
      u = window,
      p = 1;
    o.components.register("pagination-control", {
      viewModel: { createViewModel: a },
      template: n(188),
      synchronous:
        !u.ServerData.A || l.Helper.isStackSizeGreaterThan(u.ServerData.A),
      enableExtensions: !0,
    });
  },
  function (e, t, n) {
    var i = n(5),
      a = n(7),
      r = window,
      o = i.Object,
      s = a.Helper,
      l = s.history;
    e.exports = function (e, t) {
      function n(e) {
        if (e && "undefined" != typeof e.state && null !== e.state) {
          var t = e.state;
          t < f && d(), (f = t), u(i.getState());
        }
      }
      var i = this,
        a = "popstate",
        c = !1,
        d = e,
        u = t,
        p = [null],
        f = 0;
      (i.dispose = function () {
        c && s.removeEventListener(r, a, n);
      }),
        (i.pushState = function (e) {
          f++, p.splice(f, p.length - f, o.clone(e)), c && l.pushState(f, "");
        }),
        (i.replaceState = function (e) {
          p[f] = o.clone(e);
        }),
        (i.goBack = function () {
          f > 0 && (c ? r.history.back() : n({ state: f - 1 }));
        }),
        (i.getState = function () {
          return (
            f > p.length ? (f = p.length - 1) : f < 0 && (f = 0),
            null === p[f] ? null : o.clone(p[f])
          );
        }),
        (function () {
          if ((c = s.isHistorySupported())) {
            try {
              l.replaceState(f, "");
            } catch (e) {
              c = !1;
            }
            c && s.addEventListener(r, a, n);
          }
        })();
    };
  },
  function (e, t) {
    e.exports =
      "<div data-bind=\"css: { 'animate': animate() || animate.back(), 'back': animate.back }\"><!-- ko foreach: views --><!-- ko if: $parent.currentViewIndex() === $index() --> <!-- ko template: { nodes: [$data], data: $parent } --><!-- /ko --><!-- /ko --><!-- /ko --> </div>";
  },
  function (e, t, n) {
    function i(e) {
      function t(e) {
        (Z.result = e),
          I.isRequestPending(!1),
          I.onSwitchView(_.RemoteLoginPolling);
      }
      function n(e) {
        if ((I.isRequestPending(!1), e && e.error))
          switch (e.error.code) {
            case y.AuthFailure:
              I.usernameTextbox.error.setNonBlockingError(
                N.CT_PWD_STR_Error_FlowTokenExpired,
              );
              break;
            default:
              I.usernameTextbox.error.setNonBlockingError(
                N.CT_PWD_STR_Error_GetOneTimeCodeError,
              );
          }
        else
          I.usernameTextbox.error.setNonBlockingError(
            N.CT_PWD_STR_Error_GetOneTimeCodeError,
          );
        I.setDefaultFocus();
      }
      function i() {
        var e;
        return P
          ? void I.usernameTextbox.value(w.htmlUnescape(P))
          : void (
              R &&
              0 !== R.length &&
              (I.usernameTextbox.value(R[0]),
              R.length > 1 &&
                (a.utils.arrayForEach(R, function (e) {
                  I.prefillNames.push({ text: e, value: e });
                }),
                I.prefillNames.push({
                  text: N.CT_WPIL_STR_Android_UseDifferentAddress,
                  value: null,
                }),
                (e = I.usernameTextbox.value.subscribe(function (t) {
                  null === t &&
                    (I.prefillNames.removeAll(),
                    e.dispose(),
                    ae(!1),
                    I.usernameTextbox.value(""),
                    I.usernameTextbox.focused(!0));
                }))))
            );
      }
      function s() {
        I.usernameTextbox.value.subscribe(function (e) {
          e &&
            (ee
              ? e.toLowerCase() !== ee.toLowerCase() &&
                I.passwordBrowserPrefill(null)
              : (ee = e));
        });
      }
      function l() {
        if (!ae()) {
          var e = E || null;
          return (E = null), e;
        }
        return m();
      }
      function m() {
        var e = I.usernameTextbox.value();
        return U && e && e.indexOf("\\") > 0
          ? N.CT_PWD_STR_Error_InvalidUsername_WindowsFormat
          : e &&
            (C.isEmailAddress(e) ||
              (M && C.isPhoneNumber(e)) ||
              (O && C.isSkypeName(e)))
          ? C.isEmailAddress(e) ||
            (O && C.isSkypeName(e)) ||
            !C.isPhoneNumber(e) ||
            e.match(r.Regex.PhoneNumberValidation)
            ? null
            : N.CT_PWD_STR_Error_InvalidPhoneFormatting
          : N.CT_PWD_STR_Error_InvalidUsername;
      }
      function v(e) {
        z &&
          T.isCookieSafeValue(e) &&
          T.writeWithExpiration(
            z.name,
            e,
            z.secure,
            T.persistDate,
            z.domain,
            z.path,
          );
      }
      function b(e) {
        I.onRedirect(e.redirectUrl, e.redirectPostParams, e.isIdpRedirect);
      }
      var I = this,
        A = e.serverData,
        E = e.serverError,
        D = e.isInitialView,
        P = e.displayName,
        R = e.prefillNames,
        B = e.flowToken,
        L = e.altCredHintShown,
        N = A.str,
        M = A.AN,
        O = A.u,
        U = A.fCheckWindowsUsernameFormat,
        F = A.J,
        V = A.urlGetOneTimeCode,
        H = A.Al,
        j = A.c,
        W = A.staticTenantBranding,
        G = A.Ab,
        q = A.n,
        z = A.AL,
        K = A.f,
        $ = !!A.W,
        X = A.G,
        J = A.s,
        Q = !!A.Y,
        Y = !!A.Q,
        Z = {},
        ee = null,
        te = !1,
        ne = null,
        ie = {},
        ae = a.observable(!1),
        re = a.observable(!1),
        oe = a.observable(B).extend({ flowTokenUpdate: A });
      (I.onSwitchView = u.create()),
        (I.onShowLearnMore = u.create()),
        (I.onRedirect = u.create()),
        (I.usernameTextbox = new g(p.errorComputed(l))),
        (I.passwordBrowserPrefill = a.observable()),
        (I.prefillNames = a.observableArray()),
        (I.isRequestPending = a.observable(!1)),
        (I.isBackButtonVisible = a.observable(!1)),
        (I.secondaryButtonText = a.observable()),
        (I.isSkipLinkVisible = a.observable(!1)),
        (I.isCloudPolicyEnforced = a.observable(!1)),
        (I.showTileLogo = a.observable(!1)),
        (I.isCredSwitchLinkInMoreOptions = a.observable(!1)),
        (I.tenantBranding = null),
        (I.availableCredsWithoutUsername = []),
        (I.isInitialView = D),
        (I.pageDescription = null),
        (I.inputAttributes = a.pureComputed(function () {
          return O && w.isIOS() ? { type: "text" } : {};
        })),
        (I.altCredHintEnabled = a.pureComputed(function () {
          return (
            (!L && "" === I.usernameTextbox.value() && !re()) || ((L = !0), !1)
          );
        })),
        (I.saveSharedData = function (e) {
          var t = Z.result,
            n = te ? "" : I.usernameTextbox.value();
          (e.flowToken = oe()),
            (e.username = C.cleanseUsername(n)),
            (e.displayName = n),
            (e.passwordBrowserPrefill = I.passwordBrowserPrefill()),
            (e.remoteLoginUserCode = t ? t.UserCode : null),
            (e.remoteLoginDeviceCode = t ? t.DeviceCode : null),
            (e.altCredHintShown = !0),
            te && (e.availableCreds = I.availableCredsWithoutUsername),
            a.utils.extend(e, ie);
        }),
        (I.getState = function () {
          return {
            unsafe_displayName: I.usernameTextbox.value(),
            gctRequestHelperState: ne.getState(),
          };
        }),
        (I.restoreState = function (e) {
          e &&
            (ne.restoreState(e.gctRequestHelperState),
            I.usernameTextbox.value(e.unsafe_displayName));
        }),
        (I.setDefaultFocus = function () {
          I.usernameTextbox.focused(!0);
        }),
        (I.learnMore_onClick = function () {
          I.onSwitchView(_.LearnMore);
        }),
        (I.cantAccessAccount_onClick = function () {
          G === k.Both
            ? I.onSwitchView(_.ResetPasswordSplitter)
            : I.onRedirect(F);
        }),
        (I.primaryButton_onClick = function () {
          if ((ae(!0), I.usernameTextbox.error.isBlocking()))
            return void I.setDefaultFocus();
          var e = I.usernameTextbox.value();
          v(e),
            I.isRequestPending(!0),
            d.throwUnhandledExceptionOnRejection(
              ne.sendAsync(e, oe()).then(function (e) {
                switch (
                  (I.isRequestPending(!1),
                  e.flowToken && oe(e.flowToken),
                  e.action)
                ) {
                  case x.ShowError:
                    I.usernameTextbox.error.setError(
                      e.error,
                      e.isBlockingError,
                    ),
                      I.setDefaultFocus();
                    break;
                  case x.SwitchView:
                    (ie = a.utils.extend(e.sharedData, e.viewParams || {})),
                      I.onSwitchView(e.viewId);
                    break;
                  case x.Redirect:
                    b(e);
                }
              }),
            );
        }),
        (I.secondaryButton_onClick = function () {
          I.onSwitchView(_.Previous);
        }),
        (I.signup_onClick = function () {
          b(ne.getSignupRedirectGctResult(I.usernameTextbox.value()));
        }),
        (I.otherIdpLogin_onClick = function () {
          b(ne.getOtherIdpRedirectGctResult(I.usernameTextbox.value()));
        }),
        (I.skip_onClick = function () {
          h && h.handleOnSkip && (h.handleOnSkip(A), I.isRequestPending(!0));
        }),
        (I.skipZtd_onClick = function () {
          I.onRedirect(H);
        }),
        (I.privacy_onClick = function () {
          I.onSwitchView(_.ViewAgreement);
        }),
        (I.tou_onClick = function () {
          I.onSwitchView(_.TermsOfUse);
        }),
        (I.remoteLogin_onClick = function () {
          I.isRequestPending(!0);
          var e = new f({ checkApiCanary: X });
          e.Json(V, { originalRequest: j }, t, n, r.DefaultRequestTimeout);
        }),
        (I.noUsernameCredSwitchLink_onSwitchView = function (e) {
          (te = !0),
            e === _.GitHubIdpRedirect ? I.onRedirect(J) : I.onSwitchView(e);
        }),
        (I.tileLogo_onLoad = function () {
          I.showTileLogo(!0),
            h &&
              h.logEvent &&
              h.logEvent("Identity.UsernameView.Branding.TileLogoLoaded");
        }),
        (I.credSwitchLink_onMovedIntoMenu = function () {
          I.isCredSwitchLinkInMoreOptions(!0);
        }),
        (I.actionLinks_onMenuOpen = function () {
          re(!0);
        }),
        (function () {
          if (
            ((ne = new c(A)),
            (I.tenantBranding = o.loadTenantBranding(W)),
            (I.availableCredsWithoutUsername = [].concat(
              $ && w.isFidoSupported() ? S.Fido : [],
              J ? S.GitHub : [],
            )),
            N.WF_STR_Default_Desc &&
              (I.pageDescription = q
                ? C.format(N.WF_STR_Default_Desc, q)
                : N.WF_STR_Default_Desc),
            i(),
            s(),
            h &&
              (h.isBackButtonVisible &&
                h.handleBackButton &&
                h.isBackButtonVisible(A, function (e) {
                  e
                    ? h.handleBackButton(h.handleOnFinalBack.bind(h))
                    : h.handleBackButton(null);
                }),
              h.isSkipLinkVisible
                ? h.isSkipLinkVisible(A, function (e) {
                    I.isSkipLinkVisible(e);
                  })
                : I.isSkipLinkVisible(!0),
              h.isCloudPolicyEnforced &&
                h.isCloudPolicyEnforced(function (e) {
                  I.isCloudPolicyEnforced(e);
                }),
              h.logEvent))
          ) {
            var e =
              I.tenantBranding && I.tenantBranding.BoilerPlateText ? "1" : "0";
            h.logEvent("Identity.UsernameView.Branding.HasBoilerPlateText", e);
            var t = I.tenantBranding && I.tenantBranding.TileLogo ? "1" : "0";
            if (
              (h.logEvent("Identity.UsernameView.Branding.HasTileLogo", t), Q)
            ) {
              var n = Y
                ? "MSA.AssociateUpsell.UsernamePageLoad"
                : "MSA.ConnectUpsell.UsernamePageLoad";
              h.logEvent(n);
            }
          }
          D
            ? h && h.isBackButtonSupportedOnInitialView
              ? h.isBackButtonSupportedOnInitialView(A, function (e, t) {
                  I.isBackButtonVisible(e),
                    t && I.secondaryButtonText(N.CT_PWD_STR_Cancel_Button);
                })
              : K && I.isBackButtonVisible(!0)
            : I.isBackButtonVisible(!0);
        })();
    }
    var a = n(1),
      r = n(4),
      o = n(13),
      s = n(7),
      l = n(5),
      c = n(85),
      d = n(190),
      u = n(8),
      p = n(191),
      f = n(83),
      g = n(192),
      m = n(11),
      v = n(193),
      h = null;
    n.e(1, function () {
      h = n(88);
    });
    var b = window,
      _ = r.PaginatedState,
      S = r.CredentialType,
      y = r.ApiErrorCodes,
      w = s.Helper,
      T = s.Cookies,
      C = l.String,
      k = m.AllowedIdentitiesType,
      x = c.GctResultAction;
    v.applyExtenders(a),
      a.components.register("login-paginated-username-view", {
        viewModel: i,
        template: n(194),
        synchronous:
          !b.ServerData.A || s.Helper.isStackSizeGreaterThan(b.ServerData.A),
        enableExtensions: !0,
      }),
      (e.exports = i);
  },
  function (e, t) {
    t.throwUnhandledExceptionOnRejection = function (e) {
      e["catch"](function (e) {
        var t = e;
        e instanceof Error ||
          (t = new Error("Unhandled Promise rejection: " + e)),
          setTimeout(function () {
            throw t;
          }, 0);
      });
    };
  },
  function (e, t, n) {
    var i = n(1);
    t.errorComputed = function (e) {
      var t = i.observable(),
        n = i.observable(),
        a = i.pureComputed(e).extend({ notify: "always" }),
        r = i.pureComputed(function () {
          if (a()) return a();
          if (t()) {
            var e = t();
            return t(null), e;
          }
          return null;
        });
      return i.utils.extend(
        i.pureComputed(function () {
          if (r()) return r();
          if (n()) {
            var e = n();
            return n(null), e;
          }
          return null;
        }),
        {
          isBlocking: function () {
            return null !== r();
          },
          setBlockingError: function (e) {
            t(e);
          },
          setNonBlockingError: function (e) {
            n(e);
          },
          setError: function (e, i) {
            i ? t(e) : n(e);
          },
          clearNonBlockingError: function () {
            n(null), n.valueHasMutated();
          },
        },
      );
    };
  },
  function (e, t, n) {
    var i = n(1);
    e.exports = function (e, t) {
      function n(e) {
        var t = a.value.peek();
        e.toggleVisibility(!t),
          (r = a.value.subscribe(function (t) {
            e.toggleVisibility(!t);
          }));
      }
      var a = this,
        r = null;
      (a.placeholderTextboxMethods = i.observable()),
        (a.value = i.observable(t || "")),
        (a.focused = i.observable(!1).extend({ notify: "always" })),
        (a.error = e),
        (a.textbox_onUpdateFocus = function (e) {
          a.focused(e);
        }),
        (function () {
          a.placeholderTextboxMethods.subscribe(function (e) {
            e && !r && n(e);
          });
        })();
    };
  },
  function (e, t) {
    t.applyExtenders = function (e) {
      (e.extenders.preventExternalWrite = function (t) {
        var n = t(),
          i = e.observable(n).extend({ notify: "always" }),
          a = e
            .pureComputed({
              read: function () {
                return i();
              },
              write: function (e) {
                e !== n && i(n);
              },
            })
            .extend({ notify: "always" });
        return a;
      }),
        (e.extenders.flowTokenUpdate = function (t, n) {
          var i = e
            .pureComputed({
              read: t,
              write: function (e) {
                e &&
                  (n &&
                    (n.sFTTag && (n.sFTTag = n.sFTTag.replace(n.sFT, e)),
                    (n.sFT = e)),
                  t(e));
              },
            })
            .extend({ notify: "always" });
          return i;
        });
    };
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(172), n(195), n(203), n(205), n(207), n(210), n(212), n(216), "") +
      " --> <div data-bind=\"component: { name: 'header-control', params: { serverData: svr } }\"></div><!-- ko if: pageDescription && !svr.az --> <div class=\"row text-body no-margin-top\"> <div id=loginDescription data-bind=\"\n            htmlWithBindings: pageDescription,\n            childBindings: { 'learnMoreLink': { click: learnMore_onClick, ariaLabel: str['MOBILE_STR_SignIn_MSAcctHelpHeading'], visible: !svr.aY } }\"> </div> </div><!-- /ko --> <div class=row> <div role=alert aria-live=assertive aria-atomic=false><!-- ko if: usernameTextbox.error --> <div class=\"alert alert-error col-md-24\" id=usernameError data-bind=\"\n            htmlWithBindings: usernameTextbox.error,\n            childBindings: {\n                'idA_PWD_SignUp': { href: svr.e, click: signup_onClick },\n                'otherIdpLogin': { href: svr.I, click: otherIdpLogin_onClick } }\"> </div><!-- /ko --> </div> <div class=\"form-group col-md-24\"><!-- ko if: prefillNames().length > 1 --> <select id=usernames class=form-control aria-describedby=usernameError data-bind=\"options: prefillNames, optionsText: 'text', optionsValue: 'value', value: usernameTextbox.value, css: { 'has-error': usernameTextbox.error }\"> </select><!-- /ko --><!-- ko ifnot: prefillNames().length > 1 --> <div class=placeholderContainer data-bind=\"component: { name: 'placeholder-textbox',\n            publicMethods: usernameTextbox.placeholderTextboxMethods,\n            params: {\n                serverData: svr,\n                hintText: tenantBranding.UserIdLabel || str['CT_PWD_STR_Email_Example'],\n                hintCss: 'placeholder' + (!svr.AN ? ' ltr_override' : '') },\n            event: {\n                updateFocus: usernameTextbox.textbox_onUpdateFocus } }\"> <input type=email name=loginfmt id=i0116 maxlength=113 lang=en class=\"form-control ltr_override\" aria-describedby=\"usernameError loginHeader loginDescription\" aria-required=true data-bind=\"textInput: usernameTextbox.value,\n                    hasFocusEx: usernameTextbox.focused,\n                    placeholder: $placeholderText,\n                    ariaLabel: tenantBranding.UserIdLabel || str['CT_PWD_STR_Username_AriaLabel'],\n                    css: { 'has-error': usernameTextbox.error },\n                    attr: inputAttributes\"/> <input name=passwd type=password id=i0118 autocomplete=off data-bind=\"moveOffScreen, textInput: passwordBrowserPrefill\"/> <div id=usernameProgress class=progress role=progressbar data-bind=\"visible: isRequestPending, component: 'marching-ants-control', ariaLabel: str['WF_STR_ProgressText']\"></div> </div><!-- /ko --> </div> </div><!-- ko withProperties: { '$usernameView': $data } --> <div data-bind=\"invertOrder: svr.BH, css: { 'position-buttons': !tenantBranding.BoilerPlateText }\"> <div class=row data-bind=\"css: { 'move-buttons': tenantBranding.BoilerPlateText }\"> <div data-bind=\"component: { name: 'footer-buttons-field',\n            params: {\n                serverData: svr,\n                isPrimaryButtonEnabled: !isRequestPending(),\n                isPrimaryButtonVisible: svr.AV,\n                isSecondaryButtonEnabled: true,\n                isSecondaryButtonVisible: svr.AV && isBackButtonVisible() },\n            event: {\n                primaryButtonClick: primaryButton_onClick,\n                secondaryButtonClick: secondaryButton_onClick } }\"> </div> </div> <div data-bind=\"component: { name: 'action-links-control',\n            params: {\n                collapseExcessLinks: svr.av },\n            event: {\n                menuOpen: actionLinks_onMenuOpen } }\"><!-- ko if: svr.showCantAccessAccountLink --><!-- ko component: { name: 'action-link-control',\n                    event: {\n                        load: actionLink_onLoad,\n                        focusChange: actionLink_onFocusChange } } --> <div data-bind=\"css: { 'form-group': !isMenuLink(), 'action-links-menu-item': isMenuLink }\"> <a id=cantAccessAccount href=# data-bind=\"\n                        text: str['WF_STR_CantAccessAccount_Text'],\n                        hasFocus: hasFocus,\n                        click: $usernameView.cantAccessAccount_onClick,\n                        attr: { 'role': isMenuLink() ? 'menuitem' : null }\"></a> </div><!-- /ko --><!-- /ko --><!-- ko if: !svr.n && svr.B2 --><!-- ko component: { name: 'action-link-control',\n                    event: {\n                        load: actionLink_onLoad,\n                        focusChange: actionLink_onFocusChange } } --> <div data-bind=\"css: { 'form-group': !isMenuLink(), 'action-links-menu-item': isMenuLink }\"> <a id=remoteLoginLink href=# data-bind=\"\n                        text: str['CT_PWD_STR_RemoteLoginLink'],\n                        hasFocus: hasFocus,\n                        click: $usernameView.remoteLogin_onClick,\n                        attr: { 'role': isMenuLink() ? 'menuitem': null }\"></a> </div><!-- /ko --><!-- /ko --><!-- ko if: svr.AO && !svr.P && !svr.V --><!-- ko component: { name: 'action-link-control',\n                    event: {\n                        load: actionLink_onLoad,\n                        focusChange: actionLink_onFocusChange } } --><!-- ko if: isMenuLink --> <div class=action-links-menu-item> <a id=signup role=menuitem data-bind=\"\n                            href: svr.e,\n                            text: str['CT_PWD_STR_SignUp_MenuLink'],\n                            ariaLabel: str['WF_STR_SignupLink_AriaLabel_Text'],\n                            hasFocus: hasFocus,\n                            click: $usernameView.signup_onClick\"></a> </div><!-- /ko --><!-- ko ifnot: isMenuLink --> <div class=form-group data-bind=\"\n                        htmlWithBindings: html['WF_STR_SignUpLink_Text'],\n                        childBindings: {\n                            'signup': {\n                                href: svr.e,\n                                ariaLabel: str['WF_STR_SignupLink_AriaLabel_Text'],\n                                click: $usernameView.signup_onClick } }\"> </div><!-- /ko --><!-- /ko --><!-- /ko --><!-- ko if: $usernameView.availableCredsWithoutUsername.length > 0 --><!-- ko component: { name: 'action-link-control',\n                    event: {\n                        load: actionLink_onLoad,\n                        focusChange: actionLink_onFocusChange,\n                        movedIntoMenu: $usernameView.credSwitchLink_onMovedIntoMenu } } --> <div data-bind=\"\n                        css: { 'form-group': !isMenuLink(), 'action-links-menu-item': isMenuLink },\n                        component: { name: 'cred-switch-link-control',\n                            params: {\n                                availableCreds: $usernameView.availableCredsWithoutUsername,\n                                isMenuLink: isMenuLink() },\n                            event: {\n                                switchView: $usernameView.noUsernameCredSwitchLink_onSwitchView,\n                                focusChange: link_onFocusChange,\n                                registerSetFocus: link_onRegisterSetFocus } }\"> </div><!-- ko if: $usernameView.availableCredsWithoutUsername.length > 1 && $usernameView.altCredHintEnabled() && !isMenuLink() --> <div data-bind=\"component: { name: 'alt-cred-hint-control', params: {\n                        serverData: svr,\n                        availableCreds: $usernameView.availableCredsWithoutUsername } }\"> </div><!-- /ko --><!-- /ko --><!-- /ko --> </div> </div><!-- ko if: $usernameView.altCredHintEnabled() && isCredSwitchLinkInMoreOptions() --> <div data-bind=\"component: { name: 'alt-cred-hint-control', params: {\n        serverData: svr,\n        availableCreds: $usernameView.availableCredsWithoutUsername,\n        isCredSwitchLinkInMoreOptions: true } }\"> </div><!-- /ko --><!-- /ko --><!-- ko if: tenantBranding.BoilerPlateText --> <div id=idBoilerPlateText class=\"wrap-content boilerplate-text\" data-bind=\"html: tenantBranding.BoilerPlateText, css: { 'reposition-boiler-text': svr.BH }\"></div> <!-- /ko -->";
  },
  function (e, t, n) {
    function i(e) {
      var t = this,
        n = e.collapseExcessLinks;
      (t.onMenuOpen = o.create()),
        (t.actionLinks = a.observableArray([])),
        (t.collapseExcessLinks = n),
        (t.actionLink_onLoad = function (e) {
          t.actionLinks.push(e),
            !n || t.actionLinks().length < 3
              ? e.show(!1)
              : (t.actionLinks()[1].hide(), e.hide());
        }),
        (t.actionLink_onFocusChange = function () {});
    }
    var a = n(1),
      r = n(7),
      o = n(8),
      s = window;
    a.components.register("action-links-control", {
      viewModel: i,
      template: n(196),
      synchronous:
        !s.ServerData.A || r.Helper.isStackSizeGreaterThan(s.ServerData.A),
      enableExtensions: !0,
    });
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(197), "") +
      ' --> <div class=row> <div class=col-md-24> <div class="text-13 action-links"> <!-- ko template: { nodes: $componentTemplateNodes, data: $data } --><!-- /ko --><!-- ko if: collapseExcessLinks && actionLinks().length > 2 --> <div data-bind="component: { name: \'action-links-menu-control\',\n                params: {\n                    actionLinkNodes: $componentTemplateNodes },\n                event: {\n                    menuOpen: onMenuOpen } }"> </div><!-- /ko --> </div> </div> </div>';
  },
  function (e, t, n) {
    function i(e) {
      function t(e) {
        var t = d.findIndex(r, function (e) {
          return e.hasFocus;
        });
        if (t !== -1) {
          var n = t + (e ? 1 : -1);
          n >= r.length ? (n = 1) : n <= 0 && (n = r.length - 1),
            r[n].actionLink.setFocus();
        }
      }
      var n = this,
        i = e.actionLinkNodes,
        r = [],
        l = null;
      (n.onMenuOpen = o.create()),
        (n.actionLinkNodes = i),
        (n.isMenuOpen = a.observable(!1)),
        (n.isMenuButtonFocused = a.observable(!1)),
        (n.actionLink_onLoad = function (e) {
          r.push({ actionLink: e, hasFocus: !1 }),
            r.length < 2 ? e.hide() : e.show(!0);
        }),
        (n.menu_onClick = function () {
          n.isMenuOpen(!n.isMenuOpen()),
            n.isMenuOpen() && (r[1].actionLink.setFocus(), n.onMenuOpen());
        }),
        (n.menu_onKeyDown = function (e, i) {
          return (
            "Escape" === i.code || i.keyCode === s.EscapeKeyCode
              ? n.isMenuButtonFocused(!0)
              : "ArrowDown" === i.code || i.keyCode === s.ArrowDownKeyCode
              ? t(!0)
              : ("ArrowUp" !== i.code && i.keyCode !== s.ArrowUpKeyCode) ||
                t(!1),
            !0
          );
        }),
        (n.actionLink_onFocusChange = function (e, t) {
          var i = !t;
          t && l && (clearTimeout(l), (l = null)),
            d.forEach(r, function (n) {
              n.actionLink === e && (n.hasFocus = t), n.hasFocus && (i = !1);
            }),
            i &&
              (l = setTimeout(function () {
                n.isMenuOpen(!1), (l = null);
              }, 0));
        });
    }
    var a = n(1),
      r = n(7),
      o = n(8),
      s = n(4),
      l = n(5),
      c = window,
      d = l.Array;
    a.components.register("action-links-menu-control", {
      viewModel: i,
      template: n(198),
      synchronous:
        !c.ServerData.A || r.Helper.isStackSizeGreaterThan(c.ServerData.A),
      enableExtensions: !0,
    });
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(168), "") +
      " --> <div id=moreOptions class=action-links-menu tabindex=0 role=button aria-haspopup=true aria-controls=menuDropDown data-bind=\"\n        click: menu_onClick,\n        pressEnter: menu_onClick,\n        ariaLabel: str['CT_PWD_STR_MoreOptions_Link_AriaLabel'],\n        hasFocus: isMenuButtonFocused,\n        css: { 'open': isMenuOpen },\n        attr: { 'aria-expanded': isMenuOpen() || null }\"> <span data-bind=\"text: str['CT_PWD_STR_MoreOptions_Link']\"></span><!-- ko component: 'accessible-image-control' --> <img role=presentation pngsrc=" +
      n(199) +
      " svgsrc=" +
      n(200) +
      " data-bind=imgSrc /> <img role=presentation pngsrc=" +
      n(201) +
      " svgsrc=" +
      n(202) +
      ' data-bind=imgSrc /><!-- /ko --> </div> <div id=menuDropDown role=menu aria-labelledby=moreOptions class=action-links-menu-dropdown-holder data-bind="\n        visible: isMenuOpen,\n        event: { keydown: menu_onKeyDown }"> <div class=action-links-menu-dropdown> <!-- ko template: { nodes: actionLinkNodes, data: $data } --><!-- /ko --> </div> </div>';
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/more_options_caret_white.png?x=b738890ee5330c793692964d23e07209";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/more_options_caret_white.svg?x=5e0aa32ffe0da12f29120d8776e037dc";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/more_options_caret.png?x=7878aab1b744c6657019a01932c56e12";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/more_options_caret.svg?x=fbde26048e41086ec0ce73403316fc57";
  },
  function (e, t, n) {
    function i() {
      var e = this;
      (e.onMovedIntoMenu = o.create()),
        (e.onFocusChange = o.create()),
        (e.isVisible = a.observable(!1)),
        (e.isMenuLink = a.observable(!1)),
        (e.hasFocus = a.observable(!1));
      var t = null;
      (e.show = function (t) {
        e.isVisible(!0), e.isMenuLink(t), t && e.onMovedIntoMenu();
      }),
        (e.hide = function () {
          e.isVisible(!1);
        }),
        (e.setFocus = function () {
          t ? t() : e.hasFocus(!0);
        }),
        (e.link_onFocusChange = function (t) {
          e.hasFocus(t);
        }),
        (e.link_onRegisterSetFocus = function (e) {
          t = e;
        }),
        (function () {
          e.hasFocus.subscribe(function (t) {
            e.onFocusChange(e, t);
          });
        })();
    }
    var a = n(1),
      r = n(7),
      o = n(8),
      s = window;
    a.components.register("action-link-control", {
      viewModel: i,
      template: n(204),
      synchronous:
        !s.ServerData.A || r.Helper.isStackSizeGreaterThan(s.ServerData.A),
      enableExtensions: !0,
    });
  },
  function (e, t) {
    e.exports =
      "<!-- ko if: isVisible --> <!-- ko template: { nodes: $componentTemplateNodes, data: $data } --><!-- /ko --> <!-- /ko -->";
  },
  function (e, t, n) {
    function i(e) {
      var t = this,
        n = "placeholder" in document.createElement("input"),
        i = e.serverData,
        s = e.hintText,
        l = e.hintCss || "placeholder",
        c = i.p;
      (t.onUpdateFocus = o.create()),
        (t.hintText = s),
        (t.usePlaceholderAttribute = !1),
        (t.placeholderVisible = a.observable(!0)),
        (t.hintCss = a.pureComputed(function () {
          var e = {};
          return (
            l &&
              a.utils.arrayForEach(l.split(" "), function (t) {
                e[t] = !0;
              }),
            e
          );
        })),
        (t.placeholderText = a.pureComputed(function () {
          if (t.usePlaceholderAttribute) return t.hintText;
        })),
        (t.toggleVisibility = function (e) {
          t.placeholderVisible(e);
        }),
        (t.placeholder_onClick = function () {
          t.onUpdateFocus(!0);
        }),
        (function () {
          n &&
            r.Helper.isPlaceholderAttributeAllowed(c) &&
            (t.usePlaceholderAttribute = !0);
        })();
    }
    var a = n(1),
      r = n(7),
      o = n(8),
      s = window;
    a.components.register("placeholder-textbox", {
      viewModel: i,
      template: n(206),
      synchronous:
        !s.ServerData.A || r.Helper.isStackSizeGreaterThan(s.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t) {
    e.exports =
      '<!-- ko withProperties: { \'$placeholderText\': placeholderText } --> <!-- ko template: { nodes: $componentTemplateNodes, data: $parent } --><!-- /ko --><!-- /ko --><!-- ko ifnot: usePlaceholderAttribute --> <div class=placeholderInnerContainer data-bind="visible: placeholderVisible, click: placeholder_onClick"> <div class=placeholder aria-hidden=true data-bind="text: hintText, css: hintCss"></div> </div> <!-- /ko -->';
  },
  function (e, t, n) {
    function i(e) {
      e = e || {};
      var t = this,
        n = e.serverData,
        i = e.primaryButtonId,
        r = e.secondaryButtonId,
        l = e.primaryButtonText,
        c = e.secondaryButtonText,
        d = e.isPrimaryButtonVisible !== !1,
        u = e.isSecondaryButtonVisible !== !1,
        p = e.isPrimaryButtonEnabled !== !1,
        f = e.isSecondaryButtonEnabled !== !1,
        g = e.isCancelButtonVisible || !1,
        m = e.isCancelButtonEnabled || !1,
        v = e.focusOnSecondaryButton || !1,
        h = e.focusOnPrimaryButton || !1,
        b = e.focusOnCancelButton || !1,
        _ = e.primaryButtonDescribedBy,
        S = e.secondaryButtonDescribedBy,
        y = e.removeBottomMargin;
      (t.primaryButtonId = i),
        (t.secondaryButtonId = r),
        (t.primaryButtonText = a.observable(l)),
        (t.secondaryButtonText = a.observable(c)),
        (t.isPrimaryButtonVisible = a.observable(d)),
        (t.isSecondaryButtonVisible = a.observable(u)),
        (t.isPrimaryButtonEnabled = a.observable(p)),
        (t.isSecondaryButtonEnabled = a.observable(f)),
        (t.isCancelButtonVisible = a.observable(g)),
        (t.isCancelButtonEnabled = a.observable(m)),
        (t.focusOnSecondaryButton = a.observable(v)),
        (t.focusOnPrimaryButton = a.observable(h)),
        (t.focusOnCancelButton = a.observable(b)),
        (t.primaryButtonDescribedBy = _),
        (t.secondaryButtonDescribedBy = S),
        (t.removeBottomMargin = y),
        (t.onPrimaryButtonClick = o.create()),
        (t.onSecondaryButtonClick = o.create()),
        (t.setTextPrimaryButton = function (e) {
          t.primaryButtonText(e);
        }),
        (t.setTextSecondaryButton = function (e) {
          t.secondaryButtonText(e);
        }),
        (t.setVisibilityPrimaryButton = function (e) {
          t.isPrimaryButtonVisible(e);
        }),
        (t.setVisibilitySecondaryButton = function (e) {
          t.isSecondaryButtonVisible(e);
        }),
        (t.setEnabledPrimaryButton = function (e) {
          t.isPrimaryButtonEnabled(e);
        }),
        (t.setEnabledSecondaryButton = function (e) {
          t.isSecondaryButtonEnabled(e);
        }),
        (t.primaryButton_onClick = function () {
          t.onPrimaryButtonClick();
        }),
        (t.secondaryButton_onClick = function () {
          t.onSecondaryButtonClick();
        }),
        (function () {
          s && s.initialize && s.initialize(t, n, e);
        })();
    }
    var a = n(1),
      r = n(7),
      o = n(8),
      s = null;
    n.e(1, function () {
      s = n(209);
    });
    var l = window;
    a.components.register("footer-buttons-field", {
      viewModel: i,
      template: n(208),
      synchronous:
        !l.ServerData.A || r.Helper.isStackSizeGreaterThan(l.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t) {
    e.exports =
      "<div class=\"col-xs-24 no-padding-left-right form-group\" data-bind=\"\n     visible: isPrimaryButtonVisible() || isSecondaryButtonVisible(),\n     css: { 'no-margin-bottom': removeBottomMargin || svr.BH, 'button-container': svr.BH }\"> <div data-bind=\"\n            css: {\n                'inline-block': svr.BH,\n                'col-xs-12 secondary': isPrimaryButtonVisible() && !svr.BH,\n                'col-xs-24': !(isPrimaryButtonVisible() || svr.BH) }\"> <input type=button id=idBtn_Back class=\"btn btn-block\" data-bind=\"\n            attr: {\n                'id': secondaryButtonId || 'idBtn_Back',\n                'aria-describedby': secondaryButtonDescribedBy },\n            value: secondaryButtonText() || str['CT_HRD_STR_Splitter_Back'],\n            hasFocus: focusOnSecondaryButton,\n            click: secondaryButton_onClick,\n            enable: isSecondaryButtonEnabled,\n            visible: isSecondaryButtonVisible\"/> </div> <div data-bind=\"\n            css: {\n                'inline-block': svr.BH,\n                'col-xs-12 primary': isSecondaryButtonVisible() && !svr.BH,\n                'col-xs-24': !(isSecondaryButtonVisible() || svr.BH) }\"> <input type=submit id=idSIButton9 class=\"btn btn-block btn-primary\" data-bind=\"\n            attr: {\n                'id': primaryButtonId || 'idSIButton9',\n                'aria-describedby': primaryButtonDescribedBy },\n            value: primaryButtonText() || str['CT_PWD_STR_SignIn_Button_Next'],\n            hasFocus: focusOnPrimaryButton,\n            click: primaryButton_onClick,\n            enable: isPrimaryButtonEnabled,\n            visible: isPrimaryButtonVisible\"/> </div> </div>";
  },
  ,
  function (e, t, n) {
    function i(e) {
      var t = this,
        n = e.availableCreds,
        i = e.currentCred,
        r = e.isMenuLink,
        s = [];
      (t.onSwitchView = o.create()),
        (t.onFocusChange = o.create()),
        (t.onRegisterSetFocus = o.create()),
        (t.altCreds = []),
        (t.isMenuLink = r),
        (t.hasFocus = a.observable(!1)),
        (t.switchByAltCredType = function (e, n, i, a) {
          switch (t.altCreds[0]) {
            default:
            case d.Password:
              return e;
            case d.RemoteNGC:
              return n;
            case d.Fido:
              return i;
            case d.GitHub:
              return a;
          }
        }),
        (t.switchToCredPicker_onClick = function () {
          t.onSwitchView(c.CredentialPicker);
        }),
        (t.switchToCred_onClick = function (e) {
          t.onSwitchView(s[e] || c.Password);
        }),
        (function () {
          (s[d.Password] = c.Password),
            (s[d.RemoteNGC] = c.RemoteNGC),
            (s[d.Fido] = c.Fido),
            (s[d.GitHub] = c.GitHubIdpRedirect),
            a.utils.arrayForEach(n, function (e) {
              (i && e === i) || t.altCreds.push(e);
            }),
            t.hasFocus.subscribe(function (e) {
              t.onFocusChange(e);
            }),
            t.onRegisterSetFocus(function () {
              t.hasFocus(!0);
            });
        })();
    }
    var a = n(1),
      r = n(7),
      o = n(8),
      s = n(4),
      l = window,
      c = s.PaginatedState,
      d = s.CredentialType;
    a.components.register("cred-switch-link-control", {
      viewModel: i,
      template: n(211),
      synchronous:
        !l.ServerData.A || r.Helper.isStackSizeGreaterThan(l.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t) {
    e.exports =
      "<!-- ko if: altCreds.length > 1 --> <a id=idA_PWD_SwitchToCredPicker href=# data-bind=\"\n    text: str['CT_PWD_STR_SwitchToCredPicker_Link'],\n    hasFocus: hasFocus,\n    click: switchToCredPicker_onClick,\n    attr: { 'role': isMenuLink ? 'menuitem' : null }\"></a><!-- /ko --><!-- ko if: altCreds.length === 1 --> <a href=# data-bind=\"\n    attr: {\n        'id': switchByAltCredType('idA_PWD_SwitchToPassword', 'idA_PWD_SwitchToRemoteNGC', 'idA_PWD_SwitchToFido', 'useGitHubLink'),\n        'role': isMenuLink ? 'menuitem' : null },\n    text: switchByAltCredType(str['CT_RNGC_STR_SwitchToPassword_Link'], str['CT_PWD_STR_SwitchToRemoteNGC_Link'], str['CT_PWD_STR_SwitchToFido_Link'], str['CT_PWD_STR_UseGitHub_Link']),\n    hasFocus: hasFocus,\n    clickExpr: switchToCred_onClick(altCreds[0])\"></a> <!-- /ko -->";
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        n.altCredHintVisible(!0);
      }
      var n = this,
        i = e.serverData,
        r = e.availableCreds,
        o = e.isCredSwitchLinkInMoreOptions,
        s = i.str,
        d = i.arrPromotedAltCredTypes,
        u = null,
        p = c.None;
      (n.promotedAltCredCount = 0),
        (n.isGitHubPromoted = !1),
        (n.altCredHintVisible = a.observable(!1)),
        (n.altCredHintText = a.pureComputed(function () {
          switch (p) {
            case c.GitHub:
              return s.CT_PWD_STR_AltCredHint_GitHub;
          }
        })),
        (n.altCredHintAriaLabel = a.pureComputed(function () {
          switch (p) {
            case c.GitHub:
              return o
                ? s.CT_PWD_STR_AltCredHint_AriaLabel_GitHub_MoreOptions
                : s.CT_PWD_STR_AltCredHint_AriaLabel_GitHub_CredPicker;
          }
        })),
        (n.dispose = function () {
          clearTimeout(u);
        }),
        (n.altCredHintClose_onClick = function () {
          n.altCredHintVisible(!1);
        }),
        (function () {
          a.utils.arrayForEach(r, function (e) {
            if (a.utils.arrayIndexOf(d, e) !== -1)
              switch (e) {
                case l.GitHub:
                  (p |= c.GitHub),
                    n.promotedAltCredCount++,
                    (n.isGitHubPromoted = !0);
              }
          }),
            n.promotedAltCredCount > 0 && (u = setTimeout(t, 3e3));
        })();
    }
    var a = n(1),
      r = n(7),
      o = n(4),
      s = window,
      l = o.CredentialType,
      c = o.PromotedAltCredFlags;
    a.components.register("alt-cred-hint-control", {
      viewModel: i,
      template: n(213),
      synchronous:
        !s.ServerData.A || r.Helper.isStackSizeGreaterThan(s.ServerData.A),
      enableExtensions: !0,
    });
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(168), "") +
      ' --><!-- ko if: altCredHintVisible --> <div class=alt-cred-hint-holder> <div class="alt-cred-hint table"> <div class=table-row> <div class="table-cell tile-badge" data-bind="css: { \'one-badge\': promotedAltCredCount === 1 }"><!-- ko if: isGitHubPromoted --> <img role=presentation pngsrc=' +
      n(214) +
      " svgsrc=" +
      n(215) +
      ' data-bind=imgSrc /><!-- /ko --> </div> <div class="table-cell text-left content" tabindex=-1 role=alert aria-hidden=true data-bind="text: altCredHintText, ariaLabel: altCredHintAriaLabel"></div> <div class="table-cell close-button"> <a href=# role=button data-bind="\n                    click: altCredHintClose_onClick,\n                    ariaLabel: str[\'CT_STR_OptOut_AltText\']"><!-- ko component: \'accessible-image-control\' --> <img role=presentation pngsrc=' +
      n(176) +
      " svgsrc=" +
      n(177) +
      " data-bind=imgSrc /> <img role=presentation pngsrc=" +
      n(178) +
      " svgsrc=" +
      n(179) +
      " data-bind=imgSrc /><!-- /ko --> </a> </div> </div> </div> <div class=alt-cred-hint-pointer></div> </div> <!-- /ko -->";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/badge_github.png?x=2e66b03f59ea96b7c54ab4b8d11624a7";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/badge_github.svg?x=34e35e76ac36debeb920b55d4657bf4b";
  },
  function (e, t, n) {
    function i(e) {
      var t = this,
        n = e.serverData,
        i = e.title,
        a = e.subtitle,
        r = n.str,
        o = n.d,
        s = n.AZ;
      (t.title = null),
        (t.subtitle = null),
        (function () {
          var e = !(!o || !o.friendlyAppName);
          (t.isSubtitleVisible = e && s),
            (t.title = i || r.WF_STR_HeaderDefault_Title),
            (t.subtitle = a || r.WF_STR_App_Title);
        })();
    }
    var a = n(1),
      r = n(7),
      o = window;
    a.components.register("header-control", {
      viewModel: i,
      template: n(217),
      synchronous:
        !o.ServerData.A || r.Helper.isStackSizeGreaterThan(o.ServerData.A),
    }),
      (e.exports = i);
  },
  function (e, t) {
    e.exports =
      '<div class="row text-title" id=loginHeader role=heading> <div aria-level=1 data-bind="text: title"></div><!-- ko if: isSubtitleVisible --> <div aria-level=2 class="text-13 subtitle" data-bind="text: subtitle"></div><!-- /ko --> </div>';
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        var e;
        return o()
          ? i.passwordTextbox.value()
            ? null
            : I.CT_PWD_STR_Error_MissingPassword
          : ((e = c || null), (c = null), e);
      }
      function n() {
        u && u.handleOnPasswordUpdate
          ? u.handleOnPasswordUpdate(
              i.passwordTextbox.value(),
              l,
              i.onSubmitReady,
            )
          : i.onSubmitReady();
      }
      var i = this,
        r = !1,
        o = a.observable(!1),
        l = e.serverData,
        c = e.serverError,
        p = e.isInitialView,
        b = e.username,
        _ = e.displayName || "",
        S = e.hipRequiredForUsername,
        y = e.passwordBrowserPrefill,
        w = e.availableCreds,
        T = e.defaultKmsiValue,
        C = e.userTenantBranding,
        k = e.sessions,
        x = e.callMetadata,
        I = l.str,
        A = l.B,
        E = l.T,
        D = l.n,
        P = l.f,
        R = l.urlSwitch,
        B = l.Al,
        L = l.b,
        N = l.K,
        M = l.fPOST_ForceSignin,
        O = !!l.urlBindProvider;
      (i.onSwitchView = s.create()),
        (i.onSubmitReady = s.create()),
        (i.onResetPassword = s.create()),
        (i.onRedirect = s.create()),
        (i.passwordTextbox = new d(a.pureComputed(t), y)),
        (i.hipInterface = a.observable()),
        (i.isKmsiChecked = a.observable(T)),
        (i.isRequestPending = a.observable(!1)),
        (i.unsafe_username = a.observable()),
        (i.showTileLogo = a.observable(!1)),
        (i.isBackButtonVisible = a.observable(!1)),
        (i.secondaryButtonText = a.observable()),
        (i.tenantBranding = null),
        (i.unsafe_displayName = null),
        (i.hasRemoteNgc = !1),
        (i.availableCreds = w),
        (i.allowPhoneDisambiguation = !1),
        (i.unsafe_pageDescription = null),
        (i.isInitialView = p),
        (i.showHip = !1),
        (i.showChangeUserLink = !1),
        (i.callMetadata = x),
        (i.saveSharedData = function (e) {
          e.remoteNgcParams.notificationSent = !1;
        }),
        (i.getState = function () {
          return { isKmsiChecked: i.isKmsiChecked() };
        }),
        (i.restoreState = function (e) {
          e && i.isKmsiChecked(e.isKmsiChecked);
        }),
        (i.setDefaultFocus = function () {
          i.passwordTextbox.focused(!0);
        }),
        (i.primaryButton_onClick = function () {
          var e = i.showHip && i.hipInterface();
          if (!r && !i.isRequestPending()) {
            if (
              (o(!0),
              e && e.enableValidation(),
              null !== i.passwordTextbox.error())
            )
              return void i.setDefaultFocus();
            if (e) {
              if (null !== e.getError()) return;
              (r = !0),
                e.verify(function () {
                  (r = !1), n();
                });
            } else n();
          }
        }),
        (i.secondaryButton_onClick = function () {
          i.onSwitchView(g.Previous);
        }),
        (i.phoneDisambiguation_onClick = function () {
          i.onSwitchView(g.PhoneDisambiguation);
        }),
        (i.resetPassword_onClick = function () {
          i.onResetPassword(_);
        }),
        (i.selectAccount_onClick = function () {
          L && R
            ? i.onRedirect(R)
            : k.length
            ? i.onSwitchView(g.Tiles)
            : i.onSwitchView(O ? g.SelectProvider : g.Username);
        }),
        (i.hip_onHipLoad = function () {
          i.isRequestPending(!1);
        }),
        (i.skip_onClick = function () {
          u && u.handleOnSkip && (u.handleOnSkip(l), i.isRequestPending(!0));
        }),
        (i.switchToRemoteNGC_onClick = function () {
          i.onSwitchView(g.RemoteNGC);
        }),
        (i.skipZtd_onClick = function () {
          i.onRedirect(B);
        }),
        (i.privacy_onClick = function () {
          i.onSwitchView(g.ViewAgreement);
        }),
        (i.tileLogo_onLoad = function () {
          i.showTileLogo(!0),
            u &&
              u.logEvent &&
              u.logEvent("Identity.PasswordView.Branding.TileLogoLoaded");
        }),
        (i.desktopSso_onSuccess = function () {
          i.onSubmitReady();
        }),
        (function () {
          var e = h.htmlUnescape(_);
          if (
            (i.unsafe_username(h.htmlUnescape(b)),
            (i.unsafe_displayName = a
              .observable(e)
              .extend({ preventExternalWrite: null })),
            (i.allowPhoneDisambiguation =
              !L &&
              !f.isEmailAddress(_) &&
              !f.isSkypeName(_) &&
              f.isPhoneNumber(_)),
            (i.hasRemoteNgc = a.utils.arrayIndexOf(w, v.RemoteNGC) !== -1),
            (i.showHip = !!E && b === S),
            (i.showChangeUserLink = N && ((L && R) || p)),
            (i.tenantBranding = C),
            D && p
              ? (i.unsafe_pageDescription = f.format(
                  I.CT_PWD_STR_RemoteConnect_PasswordPage_Desc,
                  D,
                  e,
                ))
              : A === m.ForceSignin ||
                A === m.ForceSigninMobile ||
                A === m.ForceSigninHost ||
                M
              ? (i.unsafe_pageDescription = f.format(I.WF_STR_ForceSI_Info, e))
              : I.CT_PWD_STR_EnterPassword_Desc &&
                (i.unsafe_pageDescription = f.format(
                  I.CT_PWD_STR_EnterPassword_Desc,
                  e,
                )),
            i.showHip && i.isRequestPending(!0),
            u &&
              (u.initializePasswordViewModel &&
                u.initializePasswordViewModel(i, l),
              u.handleBackButton &&
                u.handleBackButton(i.secondaryButton_onClick.bind(i)),
              u.logEvent))
          ) {
            var t =
              i.tenantBranding && i.tenantBranding.BoilerPlateText ? "1" : "0";
            u.logEvent("Identity.PasswordView.Branding.HasBoilerPlateText", t);
            var n = i.tenantBranding && i.tenantBranding.TileLogo ? "1" : "0";
            u.logEvent("Identity.PasswordView.Branding.HasTileLogo", n);
          }
          i.unsafe_displayName.subscribe(function () {
            setTimeout(function () {
              i.passwordTextbox.value(null);
            }, 0);
          }),
            p
              ? u && u.isBackButtonSupportedOnInitialView
                ? u.isBackButtonSupportedOnInitialView(l, function (e, t) {
                    i.isBackButtonVisible(e),
                      t && i.secondaryButtonText(I.CT_PWD_STR_Cancel_Button);
                  })
                : P && i.isBackButtonVisible(!0)
              : i.isBackButtonVisible(!0);
        })();
    }
    var a = n(1),
      r = n(4),
      o = n(7),
      s = n(8),
      l = n(5),
      c = n(193),
      d = n(192),
      u = null;
    n.e(1, function () {
      u = n(88);
    });
    var p = window,
      f = l.String,
      g = r.PaginatedState,
      m = r.LoginMode,
      v = r.CredentialType,
      h = o.Helper;
    c.applyExtenders(a),
      a.components.register("login-paginated-password-view", {
        viewModel: i,
        template: n(219),
        synchronous:
          !p.ServerData.A || o.Helper.isStackSizeGreaterThan(p.ServerData.A),
        enableExtensions: !0,
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(205),
      n(207),
      n(220),
      n(210),
      n.e(2, function () {
        return n(235), "";
      }),
      "") +
      ' --> <input type=hidden name=i13 data-bind="value: isKmsiChecked() ? 1 : 0"/> <input type=hidden name=login data-bind="value: unsafe_username"/> <input type=text name=loginfmt data-bind="moveOffScreen, value: unsafe_displayName"/> <input type=hidden name=type data-bind="value: svr.A0 ? ' +
      n(4).PostType.PasswordInline +
      " : " +
      n(4).PostType.Password +
      '"/> <input type=hidden name=LoginOptions data-bind="value: isKmsiChecked() ? ' +
      n(11).LoginOption.RememberPWD +
      " : " +
      n(11).LoginOption.NothingChecked +
      '"/> <input type=hidden name=lrt data-bind="value: callMetadata.IsLongRunningTransaction"/> <input type=hidden name=lrtPartition data-bind="value: callMetadata.LongRunningTransactionPartition"/> <input type=hidden name=hisRegion data-bind="value: callMetadata.HisRegion"/> <input type=hidden name=hisScaleUnit data-bind="value: callMetadata.HisScaleUnit"/><!-- TODO: Rename \'displayName\' property to unsafe_displayName here and in other corresponding views --> <div data-bind="component: { name: \'identity-banner-control\',\n    params: {\n        pawnIconId: svr.Bv,\n        displayName: unsafe_displayName(),\n        isBackButtonVisible: svr.AV && isBackButtonVisible() && svr.BP },\n    event: {\n        backButtonClick: secondaryButton_onClick } }"> </div> <div id=loginHeader class="row text-title" role=heading data-bind="text: str[\'CT_PWD_STR_EnterPassword_Title\']"></div><!-- ko if: unsafe_pageDescription --> <div class="row text-body"> <div id=passwordDesc class=wrap-content data-bind="text: unsafe_pageDescription"></div> </div><!-- /ko --> <div class=row> <div class="form-group col-md-24"> <div role=alert aria-live=assertive aria-atomic=false><!-- ko if: passwordTextbox.error --> <div id=passwordError class="alert alert-error" data-bind="\n                htmlWithBindings: passwordTextbox.error,\n                childBindings: { \'idA_IL_ForgotPassword0\': { href: svr.J, click: resetPassword_onClick } }"></div><!-- /ko --> </div> <div class=placeholderContainer data-bind="component: { name: \'placeholder-textbox\',\n            publicMethods: passwordTextbox.placeholderTextboxMethods,\n            params: {\n                serverData: svr,\n                hintText: str[\'CT_PWD_STR_PwdTB_Label\'] },\n            event: {\n                updateFocus: passwordTextbox.textbox_onUpdateFocus } }"> <input name=passwd type=password id=i0118 autocomplete=off class=form-control aria-describedby="passwordError loginHeader passwordDesc" aria-required=true data-bind="\n                    textInput: passwordTextbox.value,\n                    hasFocusEx: passwordTextbox.focused,\n                    placeholder: $placeholderText,\n                    ariaLabel: str[\'CT_PWD_STR_PwdTB_AriaLabel\'],\n                    css: { \'has-error\': passwordTextbox.error }"/> </div> </div> </div><!-- ko if: svr.T && showHip --> <div data-bind="component: { name: \'hip-field\',\n    publicMethods: hipInterface,\n    params: {\n        str: str,\n        onDemandVerify: true,\n        hasServerError: svr.a0,\n        useFake: svr.Bp },\n    event: {\n        hipLoad: hip_onHipLoad } }"> </div><!-- /ko --> <div data-bind="invertOrder: svr.BH, css: { \'position-buttons\': !tenantBranding.BoilerPlateText }"> <div class=row data-bind="css: { \'move-buttons\': tenantBranding.BoilerPlateText }"> <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            primaryButtonText: str[\'CT_PWD_STR_SignIn_Button\'],\n            isPrimaryButtonEnabled: !isRequestPending(),\n            isPrimaryButtonVisible: svr.AV,\n            isSecondaryButtonEnabled: true,\n            isSecondaryButtonVisible: svr.AV && isBackButtonVisible() && !svr.BP },\n        event: {\n            primaryButtonClick: primaryButton_onClick,\n            secondaryButtonClick: secondaryButton_onClick } }"> </div> </div> <div><!-- ko if: svr.Bl --> <div class="row text-body"> <div id=swv-warning class=wrap-content data-bind="text: str[\'CT_PWD_STR_PersistentCookies_Warning\']"></div> </div><!-- /ko --><!-- ko if: svr.At !== false && !svr.Bl && !tenantBranding.KeepMeSignedInDisabled --> <div id=idTd_PWD_KMSI_Cb class="form-group checkbox text-block-body no-margin-top" data-bind="visible: !svr.b && !showHip"> <label id=idLbl_PWD_KMSI_Cb> <input name=KMSI id=idChkBx_PWD_KMSI0Pwd type=checkbox data-bind="checked: isKmsiChecked, ariaLabel: str[\'CT_PWD_STR_KeepMeSignedInCB_Text\']"/> <span data-bind="text: str[\'CT_PWD_STR_KeepMeSignedInCB_Text\']"></span> </label> </div><!-- /ko --> <div class=row> <div class=col-md-24> <div class="text-13 action-links"> <div class=form-group> <a id=idA_PWD_ForgotPassword role=link href=# data-bind="text: str[\'CT_PWD_STR_ForgotPwdLink_Text\'], href: svr.J, click: resetPassword_onClick"></a> </div><!-- ko if: allowPhoneDisambiguation --> <div class=form-group> <a id=switchToPhoneDisambiguation href=# data-bind="text: str[\'WF_STR_ThisIsntMyNumber_Text\'], click: phoneDisambiguation_onClick"></a> </div><!-- /ko --><!-- ko component: { name: "cred-switch-link-control",\n                        params: {\n                            serverData: svr,\n                            availableCreds: availableCreds,\n                            currentCred: ' +
      n(4).CredentialType.Password +
      ' },\n                        event: {\n                            switchView: onSwitchView } } --><!-- /ko --><!-- ko if: showChangeUserLink --> <div class=form-group> <a id=i1668 href=# data-bind="text: str[\'CT_FED_STR_ChangeUserLink_Text\'], click: selectAccount_onClick"></a> </div><!-- /ko --> </div> </div> </div> </div> </div><!-- ko if: tenantBranding.BoilerPlateText --> <div id=idBoilerPlateText class="wrap-content boilerplate-text" data-bind="html: tenantBranding.BoilerPlateText, css: { \'reposition-boiler-text\': svr.BH }"></div> <!-- /ko -->';
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        var e = new Image();
        (e.onload = function () {
          c.userTileUrl(g);
        }),
          (e.src = g);
      }
      function n() {
        return c.userTileUrl() ? c.userTileUrl() : l(i(f));
      }
      function i(e) {
        var t = ["aad", "msa"];
        return (
          (e < 0 || e >= t.length) && (e = 0),
          r.String.format("./picker_account_{0}.{1}", t[e], u ? "svg" : "png")
        );
      }
      var c = this,
        u = !1,
        p = e.displayName,
        f = e.pawnIconId,
        g = e.userTileUrl,
        m = e.isBackButtonVisible,
        v = e.backButtonId,
        h = e.backButtonDescribedBy,
        b = e.focusOnBackButton || !1;
      (c.onBackButtonClick = s.create()),
        (c.unsafe_displayName = null),
        (c.isBackButtonVisible = m),
        (c.backButtonId = v),
        (c.backButtonDescribedBy = h),
        (c.focusOnBackButton = b),
        (c.userTileUrl = a.observable(null)),
        (c.getUrl = a.pureComputed(function () {
          return g && t(), n();
        })),
        (c.backButton_onClick = function () {
          c.onBackButtonClick();
        }),
        (function () {
          (c.unsafe_displayName = d.htmlUnescape(p)),
            (u = o.Helper.isSvgImgSupported());
        })();
    }
    var a = n(1),
      r = n(5),
      o = n(7),
      s = n(8),
      l = n(221),
      c = window,
      d = o.Helper;
    a.components.register("identity-banner-control", {
      viewModel: i,
      template: n(226),
      synchronous:
        !c.ServerData.A || o.Helper.isStackSizeGreaterThan(c.ServerData.A),
      enableExtensions: !0,
    });
  },
  function (e, t, n) {
    function i(e) {
      return n(a(e));
    }
    function a(e) {
      return (
        r[e] ||
        (function () {
          throw new Error("Cannot find module '" + e + "'.");
        })()
      );
    }
    var r = {
      "./picker_account_aad.png": 222,
      "./picker_account_aad.svg": 223,
      "./picker_account_msa.png": 224,
      "./picker_account_msa.svg": 225,
    };
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.resolve = a),
      (e.exports = i),
      (i.id = 221);
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_account_aad.png?x=9dc88e7b0dfe417cfc59612381728698";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_account_aad.svg?x=9de70d1c5191d1852a0d5aac28b44a6c";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_account_msa.png?x=4e3619a499fd74c0c66d5215514b566a";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_account_msa.svg?x=2d8f86059be176833897099ee6ddedeb";
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(168), "") +
      " --> <div class=identityBanner><!-- ko if: isBackButtonVisible --> <button type=button class=backButton data-bind=\"\n        click: backButton_onClick,\n        hasFocus: focusOnBackButton,\n        attr: {\n            'id': backButtonId || 'idBtn_Back',\n            'aria-describedby': backButtonDescribedBy,\n            'aria-label': str['CT_HRD_STR_Splitter_Back'] }\"><!-- ko ifnot: svr.BA --><!-- ko component: 'accessible-image-control' --> <img role=presentation pngsrc=" +
      n(227) +
      " svgsrc=" +
      n(228) +
      " data-bind=imgSrc /> <img role=presentation pngsrc=" +
      n(229) +
      " svgsrc=" +
      n(230) +
      " data-bind=imgSrc /><!-- /ko --><!-- /ko --><!-- ko if: svr.BA --><!-- ko component: 'accessible-image-control' --> <img role=presentation pngsrc=" +
      n(231) +
      " svgsrc=" +
      n(232) +
      " data-bind=imgSrc /> <img role=presentation pngsrc=" +
      n(233) +
      " svgsrc=" +
      n(234) +
      ' data-bind=imgSrc /><!-- /ko --><!-- /ko --> </button><!-- /ko --> <div id=displayName class=identity data-bind="text: unsafe_displayName, attr: { \'title\': unsafe_displayName }"></div><!-- ko ifnot: svr.BP --> <div class=profile-photo> <img role=presentation data-bind="attr: { src: getUrl() }"/> </div><!-- /ko --> </div>';
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/arrow_left_white.png?x=632400e90b83377004b48ee42f3e69c7";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/arrow_left_white.svg?x=6721a930117e15d5f77b368b9a0d25f4";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/arrow_left.png?x=e1bdb6aa0ac109300b2b356869560655";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/arrow_left.svg?x=aa02fcd965bca78f4b2d246d36fd8426";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/arrow_right_white.png?x=3e13a10ba4be8256c165b09b31de3dad";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/arrow_right_white.svg?x=58b258cabbf0fb1b6ba3a61641035ed7";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/arrow_right.png?x=74828ee35978854801233dc54e3f4555";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/arrow_right.svg?x=81f17762e98a4c4299af28b719b8b09e";
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    function i(e) {
      var t = this,
        n = e.serverData,
        i = e.displayName,
        a = n.str,
        r = n.e,
        o = n.R;
      (t.onSwitchView = l.create()),
        (t.onRedirect = l.create()),
        (t.saveSharedData = function () {}),
        (t.restoreState = function () {}),
        (t.getState = function () {}),
        (t.primaryButton_onClick = function () {
          var e = r,
            n = o;
          n
            ? (n.username = i)
            : (e = u.appendOrReplace(e, "username", encodeURIComponent(i))),
            (e = u.appendOrReplace(e, "mnc", "0")),
            t.onRedirect(e, n);
        }),
        (t.secondaryButton_onClick = function () {
          t.onSwitchView(d.Previous);
        }),
        (function () {
          (i = p.trim(i)),
            (t.description = p.format(a.WF_STR_Confirm_Signup_Desc, i));
        })();
    }
    var a = n(1),
      r = n(4),
      o = n(7),
      s = n(5),
      l = n(8),
      c = window,
      d = r.PaginatedState,
      u = o.QueryString,
      p = s.String;
    a.components.register("login-confirm-signup-view", {
      viewModel: i,
      template: n(241),
      synchronous:
        !c.ServerData.A || o.Helper.isStackSizeGreaterThan(c.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(207), "") +
      ' --> <div id=confirmSignupHeader class="row text-title" role=heading data-bind="text: str[\'WF_STR_Confirm_Signup_Title\']"></div> <div class="row text-body"> <div id=confirmSignupDescription class=wrap-content data-bind="text: description"></div> </div> <div class=row> <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            isPrimaryButtonVisible: svr.AV,\n            primaryButtonText: str[\'WF_STR_Confirm_Signup_Button\'],\n            focusOnPrimaryButton: true,\n            primaryButtonDescribedBy: \'confirmSignupHeader confirmSignupDescription\',\n            isSecondaryButtonVisible: svr.AV },\n        event: {\n            primaryButtonClick: primaryButton_onClick,\n            secondaryButtonClick: secondaryButton_onClick } }"> </div> </div>';
  },
  function (e, t, n) {
    function i(e) {
      var t = this,
        n = e.serverData,
        i = n.e,
        a = n.R,
        r = n.am,
        o = n.str,
        s = e.displayName;
      (t.onSwitchView = l.create()),
        (t.onRedirect = l.create()),
        (t.description = null),
        (t.saveSharedData = function () {}),
        (t.restoreState = function () {}),
        (t.getState = function () {}),
        (t.primaryButton_onClick = function () {
          var e = u.appendOrReplace(r, "mn", encodeURIComponent(s));
          t.onRedirect(e);
        }),
        (t.secondaryButton_onClick = function () {
          t.onSwitchView(d.Previous);
        }),
        (t.signup_onClick = function () {
          var e = i,
            n = a;
          n
            ? (n.username = s)
            : (e = u.appendOrReplace(e, "username", encodeURIComponent(s))),
            t.onRedirect(e, n);
        }),
        (function () {
          (s = p.trim(s)),
            (t.description = p.format(
              o.WF_STR_Confirm_Recover_Username_Desc,
              s,
            ));
        })();
    }
    var a = n(1),
      r = n(4),
      o = n(7),
      s = n(5),
      l = n(8),
      c = window,
      d = r.PaginatedState,
      u = o.QueryString,
      p = s.String;
    a.components.register("login-confirm-recover-username-view", {
      viewModel: i,
      template: n(243),
      synchronous:
        !c.ServerData.A || o.Helper.isStackSizeGreaterThan(c.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(207), "") +
      ' --> <div id=confirmRecoverUsernameHeader class="row text-title" role=heading data-bind="text: str[\'WF_STR_Confirm_Recover_Username_Title\']"></div> <div class="row text-body"> <div id=confirmRecoverUsernameDescription class=wrap-content data-bind="text: description"></div> </div> <div class="row text-body"> <div id=confirmRecoverUsernameInstruction class=wrap-content data-bind="text: str[\'WF_STR_Confirm_Recover_Username_Instruction\']"></div> </div> <div class=position-buttons data-bind="invertOrder: svr.BH"> <div class=row> <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            isPrimaryButtonVisible: svr.AV,\n            primaryButtonDescribedBy: \'confirmRecoverUsernameHeader confirmRecoverUsernameDescription confirmRecoverUsernameInstruction\',\n            focusOnPrimaryButton: true,\n            primaryButtonText: str[\'CT_PWD_STR_SignIn_Button_Next\'],\n            isSecondaryButtonVisible: svr.AV },\n        event: {\n            primaryButtonClick: primaryButton_onClick,\n            secondaryButtonClick: secondaryButton_onClick } }"> </div> </div> <div class=row><!-- ko if: svr.AO --> <div class="text-13 action-links form-group"> <a id=signup data-bind="text: str[\'WF_STR_Confirm_Recover_Username_Signup_Link\'], href: svr.e, ariaLabel: str[\'WF_STR_SignupLink_AriaLabel_Text\'], click: signup_onClick"> </a> </div><!-- /ko --> </div> </div>';
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        var e;
        if (!d()) return (e = h || null), (h = null), e;
        var t = o.codeTextbox.value();
        return t ? (l() ? l() : null) : k.CT_OTC_STR_Error_EmptyCode;
      }
      function n() {
        var e = {
          Method: "EndAuth",
          SessionId: C,
          FlowToken: R(),
          Ctx: P,
          AdditionalAuthData: g.trim(o.codeTextbox.value()),
        };
        o.sending(!0);
        var t = new u();
        t.Json(E, e, i, i, r.DefaultRequestTimeout);
      }
      function i(e) {
        return (
          o.sending(!1),
          e.FlowToken && (R(e.FlowToken), o.onUpdateFlowToken(e.FlowToken)),
          e.Success
            ? (D && o.onPostUrlUpdate(D), void o.onSubmitReady())
            : (l(k.CT_OTC_STR_Error_CodeIncorrect), !1)
        );
      }
      var o = this,
        l = a.observable(),
        d = a.observable(!1),
        f = e.serverData,
        h = e.serverError,
        b = e.isInitialView,
        _ = e.username,
        S = e.displayName,
        y = e.defaultKmsiValue,
        w = e.availableCreds,
        T = e.flowToken,
        C = e.sessionIdentifier,
        k = f.str,
        x = f.b,
        I = f.urlSwitch,
        A = f.K,
        E = f.an,
        D = f.aN,
        P = f.c,
        R = a.observable(T).extend({ flowTokenUpdate: f });
      (o.onSwitchView = s.create()),
        (o.onSubmitReady = s.create()),
        (o.onRedirect = s.create()),
        (o.onPostUrlUpdate = s.create()),
        (o.onUpdateFlowToken = s.create()),
        (o.codeTextbox = new c(a.pureComputed(t))),
        (o.isKmsiChecked = a.observable(y)),
        (o.sending = a.observable(!1)),
        (o.unsafe_username = null),
        (o.unsafe_displayName = null),
        (o.pageDescription = null),
        (o.isInitialView = b),
        (o.showChangeUserLink = !1),
        (o.isEmailDestination = !1),
        (o.availableCreds = w),
        (o.saveSharedData = function (e) {
          e.flowToken = R();
        }),
        (o.getState = function () {
          return { isKmsiChecked: o.isKmsiChecked() };
        }),
        (o.restoreState = function (e) {
          e && o.isKmsiChecked(e.isKmsiChecked);
        }),
        (o.setDefaultFocus = function () {
          o.codeTextbox.focused(!0);
        }),
        (o.primaryButton_onClick = function () {
          if ((d(!0), l(null), null !== o.codeTextbox.error()))
            return void o.setDefaultFocus();
          if (E && C) {
            if (o.sending()) return;
            n();
          } else o.onSubmitReady();
        }),
        (o.secondaryButton_onClick = function () {
          o.onSwitchView(m.Previous);
        }),
        (o.phoneDisambiguation_onClick = function () {
          o.onSwitchView(m.PhoneDisambiguation);
        }),
        (o.privacy_onClick = function () {
          o.onSwitchView(m.ViewAgreement);
        }),
        (o.tou_onClick = function () {
          o.onSwitchView(m.TermsOfUse);
        }),
        (function () {
          (o.unsafe_displayName = v.htmlUnescape(S)),
            (o.unsafe_username = v.htmlUnescape(_)),
            (o.isEmailDestination = g.isEmailAddress(_)),
            (o.unsafe_pageDescription = g.format(
              k.CT_OTC_STR_EnterCode_Desc,
              o.unsafe_displayName,
            )),
            (o.showChangeUserLink = x && I && A),
            p &&
              (p.initializeOTCViewModel && p.initializeOTCViewModel(o, f),
              p.handleBackButton &&
                p.handleBackButton(o.secondaryButton_onClick.bind(o))),
            o.setDefaultFocus();
        })();
    }
    var a = n(1),
      r = n(4),
      o = n(7),
      s = n(8),
      l = n(5),
      c = n(192),
      d = n(193),
      u = n(83),
      p = null,
      f = window,
      g = l.String,
      m = r.PaginatedState,
      v = o.Helper;
    d.applyExtenders(a),
      a.components.register("login-paginated-otc-view", {
        viewModel: i,
        template: n(245),
        synchronous:
          !f.ServerData.A || o.Helper.isStackSizeGreaterThan(f.ServerData.A),
        enableExtensions: !0,
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(205), n(220), n(210), "") +
      ' --> <input type=hidden name=i13 data-bind="value: isKmsiChecked() ? 1 : 0"/> <input type=hidden name=login data-bind="value: unsafe_username"/> <input type=hidden name=loginfmt data-bind="value: unsafe_displayName"/> <input type=hidden name=type data-bind="value: svr.Az ? ' +
      n(4).PostType.OtcNoPassword +
      " : " +
      n(4).PostType.OTC +
      '"/> <input type=hidden name=LoginOptions data-bind="value: isKmsiChecked() ? ' +
      n(11).LoginOption.RememberPWD +
      " : " +
      n(11).LoginOption.NothingChecked +
      '"/> <div data-bind="component: { name: \'identity-banner-control\',\n    params: {\n        pawnIconId: svr.Bv,\n        profilePhotoUrl: svr.bZ,\n        displayName: unsafe_displayName,\n        isBackButtonVisible: svr.AV && !isInitialView && svr.BP },\n     event: {\n        backButtonClick: secondaryButton_onClick } }"> </div> <div id=loginHeader class="row text-title" role=heading data-bind="text: str[\'CT_OTC_STR_EnterCode_Title\']"></div> <div class=text-body> <div id=otcDesc data-bind="text: unsafe_pageDescription"></div><!-- ko ifnot: isEmailDestination || svr.b --> <div><a id=switchToPhoneDisambiguation href=# data-bind="text: str[\'WF_STR_ThisIsntMyNumber_Text\'], click: phoneDisambiguation_onClick"></a></div><!-- /ko --> </div><!-- ko if: codeTextbox.error --> <div id=idTd_OTC_Error_Content> <div class="alert alert-error" role=alert aria-live=assertive aria-relevant=text aria-atomic=true id=idTd_OTCC_Error_OTC data-bind="html: codeTextbox.error"></div> </div><!-- /ko --> <div class=textbox id=idDiv_OTCC_OTCTb> <div style=width:100%;position:relative> <div data-bind="component: { name: \'placeholder-textbox\',\n            publicMethods: codeTextbox.placeholderTextboxMethods,\n            params: {\n                serverData: svr,\n                hintText: str[\'CT_OTC_STR_EnterCode_Title\'] },\n            event: {\n                updateFocus: codeTextbox.textbox_onUpdateFocus } }"> <div class=form-group> <input name=otc id=idTxtBx_OTC_Password class=form-control type=tel maxlength=16 autocomplete=off aria-required=true aria-describedby="idTd_OTCC_Error_OTC loginHeader otcDesc" data-bind="\n                        textInput: codeTextbox.value,\n                        hasFocusEx: codeTextbox.focused,\n                        placeholder: $placeholderText,\n                        attr: { name: svr.Az ? \'npotc\' : \'otc\', },\n                        css: { \'has-error\': codeTextbox.error },\n                        ariaLabel: str[\'CT_OTC_STR_EnterCode_AriaLabel\']"/> </div> </div> </div> </div> <div class=position-buttons data-bind="invertOrder: svr.BH"> <div class=row> <div data-bind="component: { name: \'footer-buttons-field\',\n            params: {\n                serverData: svr,\n                primaryButtonText: str[\'CT_PWD_STR_SignIn_Button\'],\n                isPrimaryButtonVisible: svr.AV,\n                isSecondaryButtonVisible: svr.AV && !isInitialView && !svr.BP },\n            event: {\n                primaryButtonClick: primaryButton_onClick,\n                secondaryButtonClick: secondaryButton_onClick } }"> </div> </div> <div><!-- ko if: svr.At !== false --> <div data-bind="css: { \'action-links\': !showChangeUserLink }"> <div id=idTd_PWD_KMSI_Cb class="form-group checkbox text-block-body no-margin-top" data-bind="\n                visible: !svr.b,\n                css: { \'no-margin-bottom\': !showChangeUserLink }"> <label id=idLbl_PWD_KMSI_Cb> <input name=KMSI id=idChkBx_PWD_KMSI0Pwd type=checkbox data-bind="checked: isKmsiChecked, ariaLabel: str[\'CT_PWD_STR_KeepMeSignedInCB_Text\']"/> <span data-bind="text: str[\'CT_PWD_STR_KeepMeSignedInCB_Text\']"></span> </label> </div> </div><!-- /ko --> <div class=row> <div class=col-md-24> <div class=text-13 data-bind="css: { \'action-links\': showChangeUserLink }"><!-- ko component: { name: "cred-switch-link-control",\n                        params: {\n                            serverData: svr,\n                            availableCreds: availableCreds,\n                            currentCred: ' +
      n(4).CredentialType.OneTimeCode +
      " },\n                        event: {\n                            switchView: onSwitchView } } --><!-- /ko --><!-- ko if: showChangeUserLink --> <div class=form-group> <a id=i1668 href=# data-bind=\"text: str['CT_FED_STR_ChangeUserLink_Text'], href: svr.urlSwitch\"></a> </div><!-- /ko --> </div> </div> </div> </div> </div>";
  },
  function (e, t, n) {
    function i(e) {
      function t(e, t) {
        var n = r.parse(t);
        s.headerText(n.header), s.contentHtml(n.html);
      }
      function n() {
        s.loadFailed(!0);
      }
      function i() {
        var e = u.addIfNotExist(f, "command", d),
          i = {
            targetUrl: e,
            requestType: o.RequestType.Post,
            isAsync: !0,
            timeout: 1e4,
            responseType: "",
            successCallback: t,
            failureCallback: n,
            timeoutCallback: n,
          },
          a = new o.Handler(i);
        a.sendRequest();
      }
      var s = this,
        c = e.serverData,
        d = e.command;
      s.onSwitchView = l.create();
      var f = c.aj;
      (s.headerText = a.observable()),
        (s.contentHtml = a.observable()),
        (s.loadFailed = a.observable(!1)),
        (s.saveSharedData = function () {}),
        (s.getState = function () {
          if (s.contentHtml() && s.headerText()) {
            var e = {
              headerText: s.headerText(),
              contentHtml: s.contentHtml(),
            };
            return e;
          }
          return null;
        }),
        (s.restoreState = function (e) {
          e && e.headerText && e.headerText.contentHtml
            ? (s.headerText(e.headerText), s.contentHtml(e.contentHtml))
            : i();
        }),
        (s.button_onClick = function () {
          s.onSwitchView(p.Previous);
        });
    }
    var a = n(1),
      r = n(6),
      o = n(84),
      s = n(7),
      l = n(8),
      c = n(4),
      d = window,
      u = s.QueryString,
      p = c.PaginatedState;
    a.components.register("login-learn-more-view", {
      viewModel: i,
      template: n(247),
      synchronous:
        !d.ServerData.A || s.Helper.isStackSizeGreaterThan(d.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(207), n(172), "") +
      ' --><!-- ko ifnot: contentHtml --><!-- ko if: loadFailed --> <div class="text-subtitle no-margin-top" role=heading data-bind="text: str[\'MOBILE_STR_SignIn_MSAcctHelpHeading\']"></div> <div class=text-body data-bind="text: str[\'MOBILE_STR_SignIn_MSAcctHelpDesc\']"></div><!-- /ko --><!-- ko ifnot: loadFailed --> <div class="row progress-container"> <div class=progress role=progressbar tabindex=-1 data-bind="component: \'marching-ants-control\', hasFocus: true, ariaLabel: str[\'WF_STR_ProgressText\']"></div> </div><!-- /ko --><!-- /ko --><!-- ko if: contentHtml --> <div aria-live=assertive> <div class="text-subtitle no-margin-top no-outline" role=heading tabindex=-1 data-bind="text: headerText, hasFocus: svr.p"></div> <div data-bind="\n        htmlWithBindings: contentHtml,\n        childBindings: {\n            \'idA_MSAccLearnMore\': {\n                href: svr.by,\n                visible: !svr.p,\n                ariaLabel: str[\'MOBILE_STR_SignIn_MSAcctHelpHeading\'],\n                hasFocus: !svr.p } }"></div> </div><!-- /ko --> <div data-bind="component: { name: \'footer-buttons-field\',\n    params: {\n        serverData: svr,\n        secondaryButtonText: str[\'MOBILE_STR_SignIn_MSAcctHelpDone_Button\'],\n        isPrimaryButtonVisible: false,\n        isSecondaryButtonVisible: true },\n    event: {\n        secondaryButtonClick: button_onClick } }"> </div>';
  },
  function (e, t, n) {
    function i(e) {
      var t = this,
        n = e.serverData,
        i = n.urlMsaResetPassword,
        a = n.J;
      (t.onSwitchView = o.create()),
        (t.onRedirect = o.create()),
        (t.getState = function () {}),
        (t.restoreState = function () {}),
        (t.button_onClick = function () {
          t.onSwitchView(c.Previous);
        }),
        (t.msaTile_onClick = function () {
          t.onRedirect(i);
        }),
        (t.aadTile_onClick = function () {
          t.onRedirect(a);
        });
    }
    var a = n(1),
      r = n(7),
      o = n(8),
      s = n(4),
      l = window,
      c = s.PaginatedState;
    a.components.register("login-reset-password-splitter-view", {
      viewModel: i,
      template: n(249),
      synchronous:
        !l.ServerData.A || r.Helper.isStackSizeGreaterThan(l.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(207), "") +
      ' --> <div id=loginHeader class="row text-title" role=heading data-bind="text: str[\'CT_STR_ResetPasswordSplitterTitle\']"></div> <div class="row form-group"> <div class="row tile"> <div id=aadResetTile class=table tabindex=0 role=button aria-describedby=loginHeader data-bind="click: aadTile_onClick, hasFocus: true, pressEnter: aadTile_onClick"> <div class=table-row> <div class="table-cell tile-img"> <img class=tile-img role=presentation pngsrc=' +
      n(222) +
      " svgsrc=" +
      n(223) +
      ' data-bind=imgSrc /> </div> <div class="table-cell text-left content"> <div data-bind="text: str[\'CT_HRD_STR_Splitter_AadTile_Title\']"></div> <div id=aadTitleHint><small data-bind="text: str[\'CT_HRD_STR_Splitter_AadTile_Hint\']"></small></div> </div> </div> </div> </div> <div class="row tile"> <div id=msaResetTile class=table tabindex=0 role=button data-bind="click: msaTile_onClick, pressEnter: msaTile_onClick"> <div class=table-row> <div class="table-cell tile-img"> <img class=tile-img role=presentation pngsrc=' +
      n(224) +
      " svgsrc=" +
      n(225) +
      ' data-bind=imgSrc /> </div> <div class="table-cell text-left content"> <div data-bind="text: str[\'CT_HRD_STR_Splitter_MsaTile_Title\']"></div> <div id=msaTileHint><small data-bind="text: str[\'CT_HRD_STR_Splitter_MsaTile_Hint\']"></small></div> </div> </div> </div> </div> </div> <div class="row position-buttons"> <div data-bind="component: { name: \'footer-buttons-field\',\n    params: {\n        serverData: svr,\n        removeBottomMargin: true,\n        isPrimaryButtonVisible: false,\n        isSecondaryButtonVisible: true },\n    event: {\n        secondaryButtonClick: button_onClick } }"> </div> </div>';
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        y.title(O.CT_RNGC_STR_Polling_Title),
          y.sessionPollingInterface().startPolling();
      }
      function n() {
        y.title(""),
          y.error(null),
          y.sessionPollingInterface().stopPolling(),
          y.isPushNotification() && !D ? o() : t(),
          (D = !1);
      }
      function i(e) {
        y.sessionPollingInterface().setPollingEndTime(), u(e), y.error() && n();
      }
      function o() {
        if (!y.isRequestPending()) {
          y.displaySign(null), y.isRequestPending(!0);
          var e = {
            username: I,
            proofType: PROOF.Type.TOTPAuthenticatorV2,
            purpose: r.Purpose.RemoteNGC,
            flowToken: y.sessionIdentifier,
            unauthSessionId: F,
            lcid: U,
            successCallback: s,
            failureCallback: l,
          };
          V && (e.canaryFlowToken = q());
          var t = new d(e);
          t.sendRequest();
        }
      }
      function s(e) {
        q(e.getFlowToken()),
          y.displaySign(e.getDisplaySign()),
          y.isRequestPending(!1),
          t();
      }
      function l(e) {
        e && q(e.getFlowToken()),
          y.isRequestPending(!1),
          y.title(O.CT_RNGC_STR_Error_Title_SendFail),
          y.error(O.CT_RNGC_STR_Error_SendFail);
      }
      function u(e) {
        switch (e) {
          case h.QrCode:
            g();
            break;
          case h.ListSessions:
            S();
            break;
          default:
            p();
        }
      }
      function p() {
        w(h.PushNotification);
      }
      function g() {
        w(h.QrCode), y.qrCodeGenerated(!0);
      }
      function S() {
        w(h.ListSessions);
      }
      var y = this,
        w = a.observable(),
        T = "idSIButton9",
        C = "slk",
        k = e.serverData,
        x = e.isInitialView,
        I = e.username,
        A = e.displayName,
        E = e.defaultKmsiValue,
        D = e.remoteNgcParams.notificationSent,
        P = e.remoteNgcParams.sessionIdentifier,
        R = e.remoteNgcParams.entropy || null,
        B = e.remoteNgcParams.defaultType || h.PushNotification,
        L = e.sessions,
        N = e.flowToken,
        M = e.availableCreds,
        O = k.str,
        U = k.Ad,
        F = k.O,
        V = k.Aa,
        H = k.sSessionIdentifierName || C,
        j = k.AV,
        W = !!k.urlBindProvider,
        G = k.iRemoteNgcPollingType || b.Image,
        q = a.observable(N).extend({ flowTokenUpdate: k });
      (y.onSwitchView = c.create()),
        (y.onSubmitReady = c.create()),
        (y.error = a.observable(null)),
        (y.isRequestPending = a.observable(!1)),
        (y.isKmsiChecked = a.observable(E)),
        (y.sessionPollingInterface = a.observable(null)),
        (y.displaySign = a.observable(R)),
        (y.title = a.observable("")),
        (y.qrCodeGenerated = a.observable(!1)),
        (y.isBackButtonVisible = a.observable(!1)),
        (y.sessionIdentifier = P),
        (y.sessionIdentifierName = H),
        (y.unsafe_username = null),
        (y.unsafe_displayName = null),
        (y.isInitialView = x),
        (y.defaultRemoteNgcType = B),
        (y.pollingType = G),
        (y.availableCreds = M),
        (y.isPushNotification = a.pureComputed(function () {
          return w() === h.PushNotification;
        })),
        (y.isQrCode = a.pureComputed(function () {
          return w() === h.QrCode;
        })),
        (y.isListSessions = a.pureComputed(function () {
          return w() === h.ListSessions;
        })),
        (y.unsafe_pollingDescription = a.pureComputed(function () {
          return y.isPushNotification()
            ? y.isRequestPending()
              ? O.WF_STR_ProgressText
              : y.displaySign()
              ? m.format(
                  O.CT_RNGC_STR_Polling_PageDescription_UnfamiliarDevice,
                  y.unsafe_displayName,
                )
              : m.format(
                  O.CT_RNGC_STR_Polling_PageDescription,
                  y.unsafe_displayName,
                )
            : y.isQrCode()
            ? m.format(O.CT_RNGC_STR_QR_PageDescription, y.unsafe_displayName)
            : y.isListSessions()
            ? y.displaySign()
              ? m.format(
                  O.CT_RNGC_STR_LS_PageDescription_UnfamiliarDevice,
                  y.unsafe_displayName,
                )
              : m.format(O.CT_RNGC_STR_LS_PageDescription, y.unsafe_displayName)
            : void 0;
        })),
        (y.isPrimaryButtonVisible = a.pureComputed(function () {
          return j && !!y.error() && !y.isRequestPending();
        })),
        (y.isSecondaryButtonVisible = a.pureComputed(function () {
          return j && !x && !y.isRequestPending();
        })),
        (y.saveSharedData = function (e) {
          e.flowToken = q();
        }),
        (y.getState = function () {
          var e = {
            isKmsiChecked: y.isKmsiChecked(),
            error: y.error(),
            title: y.title(),
            remoteNgcType: w(),
          };
          return e;
        }),
        (y.restoreState = function (e) {
          e &&
            (y.isKmsiChecked(e.isKmsiChecked),
            y.error(e.error),
            y.title(e.title),
            u(e.remoteNgcType),
            null === y.error() && y.onSwitchView(v.Previous));
        }),
        (y.sessionPollingField_onLoad = function () {
          n();
        }),
        (y.sessionPollingField_onSessionTimeOut = function () {
          y.isPushNotification()
            ? (y.title(O.CT_RNGC_STR_TimeOut_Title),
              y.error(m.format(O.CT_RNGC_STR_TimeOut_PageDescription, A)))
            : y.isQrCode()
            ? (y.title(O.CT_RNGC_STR_QR_Timeout_Title),
              y.error(m.format(O.CT_RNGC_STR_QR_Timeout_PageDescription, A)))
            : y.isListSessions() &&
              (y.title(O.CT_RNGC_STR_LS_Timeout_Title),
              y.error(m.format(O.CT_RNGC_STR_LS_Timeout_PageDescription, A)));
        }),
        (y.sessionPollingField_onSessionDenied = function () {
          y.title(O.CT_RNGC_STR_Denied_Title),
            y.error(m.format(O.CT_RNGC_STR_Denied_PageDescription, A));
        }),
        (y.sessionPollingField_onSessionApproved = function () {
          y.title(""), y.isRequestPending(!0), y.onSubmitReady();
          var e = document.getElementById(T);
          e && e.click();
        }),
        (y.primaryButton_onClick = function () {
          n();
        }),
        (y.secondaryButton_onClick = function () {
          y.onSwitchView(v.Previous);
        }),
        (y.switchToPolling_onClick = function () {
          i(y.defaultRemoteNgcType);
        }),
        (y.switchToQrCode_onClick = function () {
          i(h.QrCode);
        }),
        (y.switchToPassword_onClick = function () {
          y.onSwitchView(v.Password);
        }),
        (y.selectAccount_onClick = function () {
          L.length
            ? y.onSwitchView(v.Tiles)
            : y.onSwitchView(W ? v.SelectProvider : v.Username);
        }),
        (function () {
          (y.unsafe_displayName = _.htmlUnescape(A)),
            (y.unsafe_username = _.htmlUnescape(I)),
            y.title(O.CT_RNGC_STR_Polling_Title),
            u(B),
            f &&
              (f.initializeRemoteNGCViewModel &&
                f.initializeRemoteNGCViewModel(y, k),
              f.handleBackButton &&
                f.handleBackButton(y.secondaryButton_onClick.bind(y))),
            x && f && f.isBackButtonSupportedOnInitialView
              ? f.isBackButtonSupportedOnInitialView(k, function (e) {
                  y.isBackButtonVisible(e);
                })
              : y.isBackButtonVisible(!0);
        })();
    }
    var a = n(1),
      r = n(251),
      o = n(4),
      s = n(5),
      l = n(7),
      c = n(8),
      d = n(252),
      u = n(253),
      p = n(193),
      f = null,
      g = window,
      m = s.String,
      v = o.PaginatedState,
      h = o.RemoteNgcType,
      b = o.SessionPollingType,
      _ = l.Helper;
    u.applyExtensions(a),
      p.applyExtenders(a),
      a.components.register("login-paginated-remotengc-view", {
        viewModel: i,
        template: n(255),
        synchronous:
          !g.ServerData.A || l.Helper.isStackSizeGreaterThan(g.ServerData.A),
        enableExtensions: !0,
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    var i = n(84),
      a = n(7),
      r = i.Helper,
      o = 3e4,
      s = (t.Properties = {
        State: "State",
        SessionLookupKey: "SessionLookupKey",
        DisplaySignForUI: "DisplaySignForUI",
        FlowToken: "FlowToken",
      }),
      l = (t.Purpose = {
        Password: "eOTT_OneTimePassword",
        RemoteNGC: "eOTT_RemoteNGC",
        NoPassword: "eOTT_NoPasswordAccountLoginCode",
      }),
      c = (t.Channel = {
        MobileSms: "SMS",
        EmailAddress: "Email",
        VoiceCall: "Voice",
        PushNotifications: "PushNotifications",
      }),
      d = (t.Type = {
        EmailAddress: "AltEmail",
        EmailAddressEncrypted: "AltEmailE",
        Mobile: "MobileNum",
        MobileEncrypted: "MobileNumE",
        SessionApprover: "SAPId",
      });
    t.Event = {
      OnSend: "otcsend",
      OnSendFail: "otcsendfailed",
      OnFlowExpired: "otcflowexpired",
    };
    var u = (t.RequestParam = {
        Username: "login",
        Purpose: "purpose",
        FlowToken: "flowtoken",
        CanaryFlowToken: "canaryFlowToken",
        Channel: "channel",
        UIMode: "UIMode",
        PhoneCountry: "MobileCountry",
        PhoneCountryCode: "MobileCC",
        UnauthSessionId: "uaid",
        ProofConfirmation: "ProofConfirmation",
      }),
      p = (t.Status = {
        None: 0,
        Error: 200,
        Success: 201,
        HIPError: 202,
        FTError: 203,
        InputError: 204,
        DestinationError: 205,
        Timeout: 300,
      }),
      f = (t.ProofTypeToChannel = function (e) {
        var t = null;
        switch (e) {
          case PROOF.Type.SMS:
            t = c.MobileSms;
            break;
          case PROOF.Type.Voice:
            t = c.VoiceCall;
            break;
          case PROOF.Type.Email:
          case PROOF.Type.AltEmail:
            t = c.EmailAddress;
            break;
          case PROOF.Type.TOTPAuthenticatorV2:
            t = c.PushNotifications;
        }
        return t;
      }),
      g = (t.ProofTypeToOtcType = function (e, t) {
        var n = null;
        switch (e) {
          case PROOF.Type.Voice:
          case PROOF.Type.SMS:
            n = t ? d.MobileEncrypted : d.Mobile;
            break;
          case PROOF.Type.Email:
          case PROOF.Type.AltEmail:
            n = t ? d.EmailAddressEncrypted : d.EmailAddress;
            break;
          case PROOF.Type.TOTPAuthenticatorV2:
            n = d.SessionApprover;
        }
        return n;
      });
    (t.Proof = function (e) {
      var t = this,
        n = e.username || "",
        i = e.flowToken || "",
        a = e.purpose || l.Password,
        r = e.proofType,
        o = e.proofData || "",
        s = e.isEncrypted,
        c = e.uiMode,
        d = e.lcid,
        p = e.phoneCountry || "",
        m = e.phoneCountryCode || "",
        v = e.unauthSessionId,
        h = e.proofConfirmation,
        b = e.canaryFlowToken;
      (t[u.Username] = n),
        (t[u.FlowToken] = i),
        (t[u.Purpose] = a),
        (t[u.Channel] = f(r)),
        (t[g(r, s)] = o),
        c && (t[u.UIMode] = c),
        d && (t.lcid = d),
        s ||
          (r !== PROOF.Type.SMS && r !== PROOF.Type.Voice) ||
          ((t[u.PhoneCountry] = p), (t[u.PhoneCountryCode] = m)),
        v && (t[u.UnauthSessionId] = v),
        h && (t[u.ProofConfirmation] = h),
        b && (t[u.CanaryFlowToken] = b);
    }),
      (t.Request = function (e) {
        function t(e) {
          var t = !1,
            n = d.getResponseJson();
          (m = n[s.FlowToken] || ""),
            n[s.State]
              ? ((u = n[s.State]),
                (f = n[s.SessionLookupKey] || ""),
                (g = n[s.DisplaySignForUI] || ""),
                (t = u !== p.Success))
              : ((u = p.Error), (f = ""), (g = ""), (t = !0)),
            t ? (u === p.FTError ? _(e, d) : b(e, d)) : h(e);
        }
        function n() {
          (m = ""), (u = p.Error), (f = ""), (g = ""), b(d);
        }
        function l() {
          (u = p.Timeout), (f = ""), (g = ""), (m = ""), b(d);
        }
        var c = "GetOneTimeCode.srf",
          d = this,
          u = p.None,
          f = "",
          g = "",
          m = "",
          v = e.data,
          h = e.onSend,
          b = e.onSendFail,
          _ = e.onFlowExpired,
          S = e.timeout || o;
        (d.getOtcStatus = function () {
          return d.isComplete() ? u : p.None;
        }),
          (d.getSessionKey = function () {
            return d.isComplete() ? f : "";
          }),
          (d.getDisplaySign = function () {
            return d.isComplete() ? g : "";
          }),
          (d.getFlowToken = function () {
            return d.isComplete() ? m : "";
          }),
          (function () {
            var e = c,
              o = a.QueryString.extract("mkt");
            o && (e = a.QueryString.addIfNotExist(e, "mkt", o));
            var s = a.QueryString.extract("lc");
            s && (e = a.QueryString.addIfNotExist(e, "lc", s));
            var u = {
              targetUrl: e,
              requestType: i.RequestType.Post,
              data: r.generateRequestString(v),
              isAsync: !0,
              timeout: S,
              successCallback: t,
              failureCallback: n,
              timeoutCallback: l,
            };
            i.Handler.call(d, u);
          })();
      });
  },
  function (e, t, n) {
    var i = n(251);
    e.exports = function (e) {
      function t() {
        var e = {
          username: s,
          proofData: l,
          proofType: c,
          purpose: d,
          flowToken: u,
          canaryFlowToken: p,
          isEncrypted: f,
          uiMode: g,
          lcid: m,
          unauthSessionId: v,
          proofConfirmation: h,
          phoneCountry: b,
          phoneCountryCode: _,
        };
        return new i.Proof(e);
      }
      function n() {
        S && S(o);
      }
      function a() {
        y && y(o);
      }
      var r = this,
        o = null,
        s = e.username,
        l = e.proofData,
        c = e.proofType,
        d = e.purpose || i.Purpose.Password,
        u = e.flowToken,
        p = e.canaryFlowToken,
        f = e.isEncrypted !== !1,
        g = e.uiMode,
        m = e.lcid,
        v = e.unauthSessionId,
        h = e.proofConfirmation,
        b = e.phoneCountry,
        _ = e.phoneCountryCode,
        S = e.successCallback,
        y = e.failureCallback;
      r.sendRequest = function () {
        var e = { data: t(), onSend: n, onSendFail: a, onFlowExpired: a };
        (o = new i.Request(e)), o.sendRequest();
      };
    };
  },
  function (e, t, n) {
    var i = n(254);
    t.applyExtensions = function (e) {
      e.bindingHandlers.qrCode = {
        init: function (t, n) {
          var a = e.unwrap(n());
          new i(t.id, a);
        },
      };
    };
  },
  function (e, t, n) {
    var i;
    !(function (t, n) {
      e.exports = n();
    })(this, function () {
      function e(e) {
        (this.mode = d.MODE_8BIT_BYTE), (this.data = e), (this.parsedData = []);
        for (var t = 0, n = this.data.length; t < n; t++) {
          var i = [],
            a = this.data.charCodeAt(t);
          a > 65536
            ? ((i[0] = 240 | ((1835008 & a) >>> 18)),
              (i[1] = 128 | ((258048 & a) >>> 12)),
              (i[2] = 128 | ((4032 & a) >>> 6)),
              (i[3] = 128 | (63 & a)))
            : a > 2048
            ? ((i[0] = 224 | ((61440 & a) >>> 12)),
              (i[1] = 128 | ((4032 & a) >>> 6)),
              (i[2] = 128 | (63 & a)))
            : a > 128
            ? ((i[0] = 192 | ((1984 & a) >>> 6)), (i[1] = 128 | (63 & a)))
            : (i[0] = a),
            this.parsedData.push(i);
        }
        (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
          this.parsedData.length != this.data.length &&
            (this.parsedData.unshift(191),
            this.parsedData.unshift(187),
            this.parsedData.unshift(239));
      }
      function t(e, t) {
        (this.typeNumber = e),
          (this.errorCorrectLevel = t),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      function n(e, t) {
        if (void 0 == e.length) throw new Error(e.length + "/" + t);
        for (var n = 0; n < e.length && 0 == e[n]; ) n++;
        this.num = new Array(e.length - n + t);
        for (var i = 0; i < e.length - n; i++) this.num[i] = e[i + n];
      }
      function a(e, t) {
        (this.totalCount = e), (this.dataCount = t);
      }
      function r() {
        (this.buffer = []), (this.length = 0);
      }
      function o() {
        return "undefined" != typeof CanvasRenderingContext2D;
      }
      function s() {
        var e = !1,
          t = navigator.userAgent;
        if (/android/i.test(t)) {
          e = !0;
          var n = t.toString().match(/android ([0-9]\.[0-9])/i);
          n && n[1] && (e = parseFloat(n[1]));
        }
        return e;
      }
      function l(e, t) {
        for (var n = 1, i = c(e), a = 0, r = v.length; a <= r; a++) {
          var o = 0;
          switch (t) {
            case u.L:
              o = v[a][0];
              break;
            case u.M:
              o = v[a][1];
              break;
            case u.Q:
              o = v[a][2];
              break;
            case u.H:
              o = v[a][3];
          }
          if (i <= o) break;
          n++;
        }
        if (n > v.length) throw new Error("Too long data");
        return n;
      }
      function c(e) {
        var t = encodeURI(e)
          .toString()
          .replace(/\%[0-9a-fA-F]{2}/g, "a");
        return t.length + (t.length != e ? 3 : 0);
      }
      (e.prototype = {
        getLength: function (e) {
          return this.parsedData.length;
        },
        write: function (e) {
          for (var t = 0, n = this.parsedData.length; t < n; t++)
            e.put(this.parsedData[t], 8);
        },
      }),
        (t.prototype = {
          addData: function (t) {
            var n = new e(t);
            this.dataList.push(n), (this.dataCache = null);
          },
          isDark: function (e, t) {
            if (
              e < 0 ||
              this.moduleCount <= e ||
              t < 0 ||
              this.moduleCount <= t
            )
              throw new Error(e + "," + t);
            return this.modules[e][t];
          },
          getModuleCount: function () {
            return this.moduleCount;
          },
          make: function () {
            this.makeImpl(!1, this.getBestMaskPattern());
          },
          makeImpl: function (e, n) {
            (this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = new Array(this.moduleCount));
            for (var i = 0; i < this.moduleCount; i++) {
              this.modules[i] = new Array(this.moduleCount);
              for (var a = 0; a < this.moduleCount; a++)
                this.modules[i][a] = null;
            }
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(e, n),
              this.typeNumber >= 7 && this.setupTypeNumber(e),
              null == this.dataCache &&
                (this.dataCache = t.createData(
                  this.typeNumber,
                  this.errorCorrectLevel,
                  this.dataList,
                )),
              this.mapData(this.dataCache, n);
          },
          setupPositionProbePattern: function (e, t) {
            for (var n = -1; n <= 7; n++)
              if (!(e + n <= -1 || this.moduleCount <= e + n))
                for (var i = -1; i <= 7; i++)
                  t + i <= -1 ||
                    this.moduleCount <= t + i ||
                    ((0 <= n && n <= 6 && (0 == i || 6 == i)) ||
                    (0 <= i && i <= 6 && (0 == n || 6 == n)) ||
                    (2 <= n && n <= 4 && 2 <= i && i <= 4)
                      ? (this.modules[e + n][t + i] = !0)
                      : (this.modules[e + n][t + i] = !1));
          },
          getBestMaskPattern: function () {
            for (var e = 0, t = 0, n = 0; n < 8; n++) {
              this.makeImpl(!0, n);
              var i = f.getLostPoint(this);
              (0 == n || e > i) && ((e = i), (t = n));
            }
            return t;
          },
          createMovieClip: function (e, t, n) {
            var i = e.createEmptyMovieClip(t, n),
              a = 1;
            this.make();
            for (var r = 0; r < this.modules.length; r++)
              for (var o = r * a, s = 0; s < this.modules[r].length; s++) {
                var l = s * a,
                  c = this.modules[r][s];
                c &&
                  (i.beginFill(0, 100),
                  i.moveTo(l, o),
                  i.lineTo(l + a, o),
                  i.lineTo(l + a, o + a),
                  i.lineTo(l, o + a),
                  i.endFill());
              }
            return i;
          },
          setupTimingPattern: function () {
            for (var e = 8; e < this.moduleCount - 8; e++)
              null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
            for (var t = 8; t < this.moduleCount - 8; t++)
              null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0);
          },
          setupPositionAdjustPattern: function () {
            for (
              var e = f.getPatternPosition(this.typeNumber), t = 0;
              t < e.length;
              t++
            )
              for (var n = 0; n < e.length; n++) {
                var i = e[t],
                  a = e[n];
                if (null == this.modules[i][a])
                  for (var r = -2; r <= 2; r++)
                    for (var o = -2; o <= 2; o++)
                      r == -2 ||
                      2 == r ||
                      o == -2 ||
                      2 == o ||
                      (0 == r && 0 == o)
                        ? (this.modules[i + r][a + o] = !0)
                        : (this.modules[i + r][a + o] = !1);
              }
          },
          setupTypeNumber: function (e) {
            for (
              var t = f.getBCHTypeNumber(this.typeNumber), n = 0;
              n < 18;
              n++
            ) {
              var i = !e && 1 == ((t >> n) & 1);
              this.modules[Math.floor(n / 3)][
                (n % 3) + this.moduleCount - 8 - 3
              ] = i;
            }
            for (var n = 0; n < 18; n++) {
              var i = !e && 1 == ((t >> n) & 1);
              this.modules[(n % 3) + this.moduleCount - 8 - 3][
                Math.floor(n / 3)
              ] = i;
            }
          },
          setupTypeInfo: function (e, t) {
            for (
              var n = (this.errorCorrectLevel << 3) | t,
                i = f.getBCHTypeInfo(n),
                a = 0;
              a < 15;
              a++
            ) {
              var r = !e && 1 == ((i >> a) & 1);
              a < 6
                ? (this.modules[a][8] = r)
                : a < 8
                ? (this.modules[a + 1][8] = r)
                : (this.modules[this.moduleCount - 15 + a][8] = r);
            }
            for (var a = 0; a < 15; a++) {
              var r = !e && 1 == ((i >> a) & 1);
              a < 8
                ? (this.modules[8][this.moduleCount - a - 1] = r)
                : a < 9
                ? (this.modules[8][15 - a - 1 + 1] = r)
                : (this.modules[8][15 - a - 1] = r);
            }
            this.modules[this.moduleCount - 8][8] = !e;
          },
          mapData: function (e, t) {
            for (
              var n = -1,
                i = this.moduleCount - 1,
                a = 7,
                r = 0,
                o = this.moduleCount - 1;
              o > 0;
              o -= 2
            )
              for (6 == o && o--; ; ) {
                for (var s = 0; s < 2; s++)
                  if (null == this.modules[i][o - s]) {
                    var l = !1;
                    r < e.length && (l = 1 == ((e[r] >>> a) & 1));
                    var c = f.getMask(t, i, o - s);
                    c && (l = !l),
                      (this.modules[i][o - s] = l),
                      a--,
                      a == -1 && (r++, (a = 7));
                  }
                if (((i += n), i < 0 || this.moduleCount <= i)) {
                  (i -= n), (n = -n);
                  break;
                }
              }
          },
        }),
        (t.PAD0 = 236),
        (t.PAD1 = 17),
        (t.createData = function (e, n, i) {
          for (
            var o = a.getRSBlocks(e, n), s = new r(), l = 0;
            l < i.length;
            l++
          ) {
            var c = i[l];
            s.put(c.mode, 4),
              s.put(c.getLength(), f.getLengthInBits(c.mode, e)),
              c.write(s);
          }
          for (var d = 0, l = 0; l < o.length; l++) d += o[l].dataCount;
          if (s.getLengthInBits() > 8 * d)
            throw new Error(
              "code length overflow. (" +
                s.getLengthInBits() +
                ">" +
                8 * d +
                ")",
            );
          for (
            s.getLengthInBits() + 4 <= 8 * d && s.put(0, 4);
            s.getLengthInBits() % 8 != 0;

          )
            s.putBit(!1);
          for (;;) {
            if (s.getLengthInBits() >= 8 * d) break;
            if ((s.put(t.PAD0, 8), s.getLengthInBits() >= 8 * d)) break;
            s.put(t.PAD1, 8);
          }
          return t.createBytes(s, o);
        }),
        (t.createBytes = function (e, t) {
          for (
            var i = 0,
              a = 0,
              r = 0,
              o = new Array(t.length),
              s = new Array(t.length),
              l = 0;
            l < t.length;
            l++
          ) {
            var c = t[l].dataCount,
              d = t[l].totalCount - c;
            (a = Math.max(a, c)), (r = Math.max(r, d)), (o[l] = new Array(c));
            for (var u = 0; u < o[l].length; u++)
              o[l][u] = 255 & e.buffer[u + i];
            i += c;
            var p = f.getErrorCorrectPolynomial(d),
              g = new n(o[l], p.getLength() - 1),
              m = g.mod(p);
            s[l] = new Array(p.getLength() - 1);
            for (var u = 0; u < s[l].length; u++) {
              var v = u + m.getLength() - s[l].length;
              s[l][u] = v >= 0 ? m.get(v) : 0;
            }
          }
          for (var h = 0, u = 0; u < t.length; u++) h += t[u].totalCount;
          for (var b = new Array(h), _ = 0, u = 0; u < a; u++)
            for (var l = 0; l < t.length; l++)
              u < o[l].length && (b[_++] = o[l][u]);
          for (var u = 0; u < r; u++)
            for (var l = 0; l < t.length; l++)
              u < s[l].length && (b[_++] = s[l][u]);
          return b;
        });
      for (
        var d = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8,
          },
          u = { L: 1, M: 0, Q: 3, H: 2 },
          p = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7,
          },
          f = {
            PATTERN_POSITION_TABLE: [
              [],
              [6, 18],
              [6, 22],
              [6, 26],
              [6, 30],
              [6, 34],
              [6, 22, 38],
              [6, 24, 42],
              [6, 26, 46],
              [6, 28, 50],
              [6, 30, 54],
              [6, 32, 58],
              [6, 34, 62],
              [6, 26, 46, 66],
              [6, 26, 48, 70],
              [6, 26, 50, 74],
              [6, 30, 54, 78],
              [6, 30, 56, 82],
              [6, 30, 58, 86],
              [6, 34, 62, 90],
              [6, 28, 50, 72, 94],
              [6, 26, 50, 74, 98],
              [6, 30, 54, 78, 102],
              [6, 28, 54, 80, 106],
              [6, 32, 58, 84, 110],
              [6, 30, 58, 86, 114],
              [6, 34, 62, 90, 118],
              [6, 26, 50, 74, 98, 122],
              [6, 30, 54, 78, 102, 126],
              [6, 26, 52, 78, 104, 130],
              [6, 30, 56, 82, 108, 134],
              [6, 34, 60, 86, 112, 138],
              [6, 30, 58, 86, 114, 142],
              [6, 34, 62, 90, 118, 146],
              [6, 30, 54, 78, 102, 126, 150],
              [6, 24, 50, 76, 102, 128, 154],
              [6, 28, 54, 80, 106, 132, 158],
              [6, 32, 58, 84, 110, 136, 162],
              [6, 26, 54, 82, 110, 138, 166],
              [6, 30, 58, 86, 114, 142, 170],
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (e) {
              for (
                var t = e << 10;
                f.getBCHDigit(t) - f.getBCHDigit(f.G15) >= 0;

              )
                t ^= f.G15 << (f.getBCHDigit(t) - f.getBCHDigit(f.G15));
              return ((e << 10) | t) ^ f.G15_MASK;
            },
            getBCHTypeNumber: function (e) {
              for (
                var t = e << 12;
                f.getBCHDigit(t) - f.getBCHDigit(f.G18) >= 0;

              )
                t ^= f.G18 << (f.getBCHDigit(t) - f.getBCHDigit(f.G18));
              return (e << 12) | t;
            },
            getBCHDigit: function (e) {
              for (var t = 0; 0 != e; ) t++, (e >>>= 1);
              return t;
            },
            getPatternPosition: function (e) {
              return f.PATTERN_POSITION_TABLE[e - 1];
            },
            getMask: function (e, t, n) {
              switch (e) {
                case p.PATTERN000:
                  return (t + n) % 2 == 0;
                case p.PATTERN001:
                  return t % 2 == 0;
                case p.PATTERN010:
                  return n % 3 == 0;
                case p.PATTERN011:
                  return (t + n) % 3 == 0;
                case p.PATTERN100:
                  return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
                case p.PATTERN101:
                  return ((t * n) % 2) + ((t * n) % 3) == 0;
                case p.PATTERN110:
                  return (((t * n) % 2) + ((t * n) % 3)) % 2 == 0;
                case p.PATTERN111:
                  return (((t * n) % 3) + ((t + n) % 2)) % 2 == 0;
                default:
                  throw new Error("bad maskPattern:" + e);
              }
            },
            getErrorCorrectPolynomial: function (e) {
              for (var t = new n([1], 0), i = 0; i < e; i++)
                t = t.multiply(new n([1, g.gexp(i)], 0));
              return t;
            },
            getLengthInBits: function (e, t) {
              if (1 <= t && t < 10)
                switch (e) {
                  case d.MODE_NUMBER:
                    return 10;
                  case d.MODE_ALPHA_NUM:
                    return 9;
                  case d.MODE_8BIT_BYTE:
                    return 8;
                  case d.MODE_KANJI:
                    return 8;
                  default:
                    throw new Error("mode:" + e);
                }
              else if (t < 27)
                switch (e) {
                  case d.MODE_NUMBER:
                    return 12;
                  case d.MODE_ALPHA_NUM:
                    return 11;
                  case d.MODE_8BIT_BYTE:
                    return 16;
                  case d.MODE_KANJI:
                    return 10;
                  default:
                    throw new Error("mode:" + e);
                }
              else {
                if (!(t < 41)) throw new Error("type:" + t);
                switch (e) {
                  case d.MODE_NUMBER:
                    return 14;
                  case d.MODE_ALPHA_NUM:
                    return 13;
                  case d.MODE_8BIT_BYTE:
                    return 16;
                  case d.MODE_KANJI:
                    return 12;
                  default:
                    throw new Error("mode:" + e);
                }
              }
            },
            getLostPoint: function (e) {
              for (var t = e.getModuleCount(), n = 0, i = 0; i < t; i++)
                for (var a = 0; a < t; a++) {
                  for (var r = 0, o = e.isDark(i, a), s = -1; s <= 1; s++)
                    if (!(i + s < 0 || t <= i + s))
                      for (var l = -1; l <= 1; l++)
                        a + l < 0 ||
                          t <= a + l ||
                          (0 == s && 0 == l) ||
                          (o == e.isDark(i + s, a + l) && r++);
                  r > 5 && (n += 3 + r - 5);
                }
              for (var i = 0; i < t - 1; i++)
                for (var a = 0; a < t - 1; a++) {
                  var c = 0;
                  e.isDark(i, a) && c++,
                    e.isDark(i + 1, a) && c++,
                    e.isDark(i, a + 1) && c++,
                    e.isDark(i + 1, a + 1) && c++,
                    (0 != c && 4 != c) || (n += 3);
                }
              for (var i = 0; i < t; i++)
                for (var a = 0; a < t - 6; a++)
                  e.isDark(i, a) &&
                    !e.isDark(i, a + 1) &&
                    e.isDark(i, a + 2) &&
                    e.isDark(i, a + 3) &&
                    e.isDark(i, a + 4) &&
                    !e.isDark(i, a + 5) &&
                    e.isDark(i, a + 6) &&
                    (n += 40);
              for (var a = 0; a < t; a++)
                for (var i = 0; i < t - 6; i++)
                  e.isDark(i, a) &&
                    !e.isDark(i + 1, a) &&
                    e.isDark(i + 2, a) &&
                    e.isDark(i + 3, a) &&
                    e.isDark(i + 4, a) &&
                    !e.isDark(i + 5, a) &&
                    e.isDark(i + 6, a) &&
                    (n += 40);
              for (var d = 0, a = 0; a < t; a++)
                for (var i = 0; i < t; i++) e.isDark(i, a) && d++;
              var u = Math.abs((100 * d) / t / t - 50) / 5;
              return (n += 10 * u);
            },
          },
          g = {
            glog: function (e) {
              if (e < 1) throw new Error("glog(" + e + ")");
              return g.LOG_TABLE[e];
            },
            gexp: function (e) {
              for (; e < 0; ) e += 255;
              for (; e >= 256; ) e -= 255;
              return g.EXP_TABLE[e];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          m = 0;
        m < 8;
        m++
      )
        g.EXP_TABLE[m] = 1 << m;
      for (var m = 8; m < 256; m++)
        g.EXP_TABLE[m] =
          g.EXP_TABLE[m - 4] ^
          g.EXP_TABLE[m - 5] ^
          g.EXP_TABLE[m - 6] ^
          g.EXP_TABLE[m - 8];
      for (var m = 0; m < 255; m++) g.LOG_TABLE[g.EXP_TABLE[m]] = m;
      (n.prototype = {
        get: function (e) {
          return this.num[e];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (e) {
          for (
            var t = new Array(this.getLength() + e.getLength() - 1), i = 0;
            i < this.getLength();
            i++
          )
            for (var a = 0; a < e.getLength(); a++)
              t[i + a] ^= g.gexp(g.glog(this.get(i)) + g.glog(e.get(a)));
          return new n(t, 0);
        },
        mod: function (e) {
          if (this.getLength() - e.getLength() < 0) return this;
          for (
            var t = g.glog(this.get(0)) - g.glog(e.get(0)),
              i = new Array(this.getLength()),
              a = 0;
            a < this.getLength();
            a++
          )
            i[a] = this.get(a);
          for (var a = 0; a < e.getLength(); a++)
            i[a] ^= g.gexp(g.glog(e.get(a)) + t);
          return new n(i, 0).mod(e);
        },
      }),
        (a.RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16],
        ]),
        (a.getRSBlocks = function (e, t) {
          var n = a.getRsBlockTable(e, t);
          if (void 0 == n)
            throw new Error(
              "bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t,
            );
          for (var i = n.length / 3, r = [], o = 0; o < i; o++)
            for (
              var s = n[3 * o + 0], l = n[3 * o + 1], c = n[3 * o + 2], d = 0;
              d < s;
              d++
            )
              r.push(new a(l, c));
          return r;
        }),
        (a.getRsBlockTable = function (e, t) {
          switch (t) {
            case u.L:
              return a.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case u.M:
              return a.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case u.Q:
              return a.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case u.H:
              return a.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
              return;
          }
        }),
        (r.prototype = {
          get: function (e) {
            var t = Math.floor(e / 8);
            return 1 == ((this.buffer[t] >>> (7 - (e % 8))) & 1);
          },
          put: function (e, t) {
            for (var n = 0; n < t; n++)
              this.putBit(1 == ((e >>> (t - n - 1)) & 1));
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0),
              e && (this.buffer[t] |= 128 >>> this.length % 8),
              this.length++;
          },
        });
      var v = [
          [17, 14, 11, 7],
          [32, 26, 20, 14],
          [53, 42, 32, 24],
          [78, 62, 46, 34],
          [106, 84, 60, 44],
          [134, 106, 74, 58],
          [154, 122, 86, 64],
          [192, 152, 108, 84],
          [230, 180, 130, 98],
          [271, 213, 151, 119],
          [321, 251, 177, 137],
          [367, 287, 203, 155],
          [425, 331, 241, 177],
          [458, 362, 258, 194],
          [520, 412, 292, 220],
          [586, 450, 322, 250],
          [644, 504, 364, 280],
          [718, 560, 394, 310],
          [792, 624, 442, 338],
          [858, 666, 482, 382],
          [929, 711, 509, 403],
          [1003, 779, 565, 439],
          [1091, 857, 611, 461],
          [1171, 911, 661, 511],
          [1273, 997, 715, 535],
          [1367, 1059, 751, 593],
          [1465, 1125, 805, 625],
          [1528, 1190, 868, 658],
          [1628, 1264, 908, 698],
          [1732, 1370, 982, 742],
          [1840, 1452, 1030, 790],
          [1952, 1538, 1112, 842],
          [2068, 1628, 1168, 898],
          [2188, 1722, 1228, 958],
          [2303, 1809, 1283, 983],
          [2431, 1911, 1351, 1051],
          [2563, 1989, 1423, 1093],
          [2699, 2099, 1499, 1139],
          [2809, 2213, 1579, 1219],
          [2953, 2331, 1663, 1273],
        ],
        h = (function () {
          var e = function (e, t) {
            (this._el = e), (this._htOption = t);
          };
          return (
            (e.prototype.draw = function (e) {
              function t(e, t) {
                var n = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e,
                );
                for (var i in t) t.hasOwnProperty(i) && n.setAttribute(i, t[i]);
                return n;
              }
              var n = this._htOption,
                i = this._el,
                a = e.getModuleCount();
              Math.floor(n.width / a), Math.floor(n.height / a);
              this.clear();
              var r = t("svg", {
                viewBox: "0 0 " + String(a) + " " + String(a),
                width: "100%",
                height: "100%",
                fill: n.colorLight,
              });
              r.setAttributeNS(
                "http://www.w3.org/2000/xmlns/",
                "xmlns:xlink",
                "http://www.w3.org/1999/xlink",
              ),
                i.appendChild(r),
                r.appendChild(
                  t("rect", {
                    fill: n.colorLight,
                    width: "100%",
                    height: "100%",
                  }),
                ),
                r.appendChild(
                  t("rect", {
                    fill: n.colorDark,
                    width: "1",
                    height: "1",
                    id: "template",
                  }),
                );
              for (var o = 0; o < a; o++)
                for (var s = 0; s < a; s++)
                  if (e.isDark(o, s)) {
                    var l = t("use", { x: String(s), y: String(o) });
                    l.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      "href",
                      "#template",
                    ),
                      r.appendChild(l);
                  }
            }),
            (e.prototype.clear = function () {
              for (; this._el.hasChildNodes(); )
                this._el.removeChild(this._el.lastChild);
            }),
            e
          );
        })(),
        b = "svg" === document.documentElement.tagName.toLowerCase(),
        _ = b
          ? h
          : o()
          ? (function () {
              function e() {
                (this._elImage.src = this._elCanvas.toDataURL("image/png")),
                  (this._elImage.style.display = "block"),
                  (this._elCanvas.style.display = "none");
              }
              function t(e, t) {
                var n = this;
                if (
                  ((n._fFail = t),
                  (n._fSuccess = e),
                  null === n._bSupportDataURI)
                ) {
                  var i = document.createElement("img"),
                    a = function () {
                      (n._bSupportDataURI = !1), n._fFail && n._fFail.call(n);
                    },
                    r = function () {
                      (n._bSupportDataURI = !0),
                        n._fSuccess && n._fSuccess.call(n);
                    };
                  return (
                    (i.onabort = a),
                    (i.onerror = a),
                    (i.onload = r),
                    void (i.src =
                      "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                  );
                }
                n._bSupportDataURI === !0 && n._fSuccess
                  ? n._fSuccess.call(n)
                  : n._bSupportDataURI === !1 && n._fFail && n._fFail.call(n);
              }
              if (this._android && this._android <= 2.1) {
                var n = 1 / window.devicePixelRatio,
                  i = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function (
                  e,
                  t,
                  a,
                  r,
                  o,
                  s,
                  l,
                  c,
                  d,
                ) {
                  if ("nodeName" in e && /img/i.test(e.nodeName))
                    for (var u = arguments.length - 1; u >= 1; u--)
                      arguments[u] = arguments[u] * n;
                  else
                    "undefined" == typeof c &&
                      ((arguments[1] *= n),
                      (arguments[2] *= n),
                      (arguments[3] *= n),
                      (arguments[4] *= n));
                  i.apply(this, arguments);
                };
              }
              var a = function (e, t) {
                (this._bIsPainted = !1),
                  (this._android = s()),
                  (this._htOption = t),
                  (this._elCanvas = document.createElement("canvas")),
                  (this._elCanvas.width = t.width),
                  (this._elCanvas.height = t.height),
                  e.appendChild(this._elCanvas),
                  (this._el = e),
                  (this._oContext = this._elCanvas.getContext("2d")),
                  (this._bIsPainted = !1),
                  (this._elImage = document.createElement("img")),
                  (this._elImage.alt = "Scan me!"),
                  (this._elImage.style.display = "none"),
                  this._el.appendChild(this._elImage),
                  (this._bSupportDataURI = null);
              };
              return (
                (a.prototype.draw = function (e) {
                  var t = this._elImage,
                    n = this._oContext,
                    i = this._htOption,
                    a = e.getModuleCount(),
                    r = i.width / a,
                    o = i.height / a,
                    s = Math.round(r),
                    l = Math.round(o);
                  (t.style.display = "none"), this.clear();
                  for (var c = 0; c < a; c++)
                    for (var d = 0; d < a; d++) {
                      var u = e.isDark(c, d),
                        p = d * r,
                        f = c * o;
                      (n.strokeStyle = u ? i.colorDark : i.colorLight),
                        (n.lineWidth = 1),
                        (n.fillStyle = u ? i.colorDark : i.colorLight),
                        n.fillRect(p, f, r, o),
                        n.strokeRect(
                          Math.floor(p) + 0.5,
                          Math.floor(f) + 0.5,
                          s,
                          l,
                        ),
                        n.strokeRect(
                          Math.ceil(p) - 0.5,
                          Math.ceil(f) - 0.5,
                          s,
                          l,
                        );
                    }
                  this._bIsPainted = !0;
                }),
                (a.prototype.makeImage = function () {
                  this._bIsPainted && t.call(this, e);
                }),
                (a.prototype.isPainted = function () {
                  return this._bIsPainted;
                }),
                (a.prototype.clear = function () {
                  this._oContext.clearRect(
                    0,
                    0,
                    this._elCanvas.width,
                    this._elCanvas.height,
                  ),
                    (this._bIsPainted = !1);
                }),
                (a.prototype.round = function (e) {
                  return e ? Math.floor(1e3 * e) / 1e3 : e;
                }),
                a
              );
            })()
          : (function () {
              var e = function (e, t) {
                (this._el = e), (this._htOption = t);
              };
              return (
                (e.prototype.draw = function (e) {
                  for (
                    var t = this._htOption,
                      n = this._el,
                      i = e.getModuleCount(),
                      a = Math.floor(t.width / i),
                      r = Math.floor(t.height / i),
                      o = [
                        '<table style="border:0;border-collapse:collapse;">',
                      ],
                      s = 0;
                    s < i;
                    s++
                  ) {
                    o.push("<tr>");
                    for (var l = 0; l < i; l++)
                      o.push(
                        '<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
                          a +
                          "px;height:" +
                          r +
                          "px;background-color:" +
                          (e.isDark(s, l) ? t.colorDark : t.colorLight) +
                          ';"></td>',
                      );
                    o.push("</tr>");
                  }
                  o.push("</table>"), (n.innerHTML = o.join(""));
                  var c = n.childNodes[0],
                    d = (t.width - c.offsetWidth) / 2,
                    u = (t.height - c.offsetHeight) / 2;
                  d > 0 && u > 0 && (c.style.margin = u + "px " + d + "px");
                }),
                (e.prototype.clear = function () {
                  this._el.innerHTML = "";
                }),
                e
              );
            })();
      return (
        (i = function (e, t) {
          if (
            ((this._htOption = {
              width: 256,
              height: 256,
              typeNumber: 4,
              colorDark: "#000000",
              colorLight: "#ffffff",
              correctLevel: u.H,
            }),
            "string" == typeof t && (t = { text: t }),
            t)
          )
            for (var n in t) this._htOption[n] = t[n];
          "string" == typeof e && (e = document.getElementById(e)),
            this._htOption.useSVG && (_ = h),
            (this._android = s()),
            (this._el = e),
            (this._oQRCode = null),
            (this._oDrawing = new _(this._el, this._htOption)),
            this._htOption.text && this.makeCode(this._htOption.text);
        }),
        (i.prototype.makeCode = function (e) {
          (this._oQRCode = new t(
            l(e, this._htOption.correctLevel),
            this._htOption.correctLevel,
          )),
            this._oQRCode.addData(e),
            this._oQRCode.make(),
            (this._el.title = e),
            this._oDrawing.draw(this._oQRCode),
            this.makeImage();
        }),
        (i.prototype.makeImage = function () {
          "function" == typeof this._oDrawing.makeImage &&
            (!this._android || this._android >= 3) &&
            this._oDrawing.makeImage();
        }),
        (i.prototype.clear = function () {
          this._oDrawing.clear();
        }),
        (i.CorrectLevel = u),
        i
      );
    });
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(172), n(207), n(256), n(259), n(220), n(210), "") +
      ' --> <input type=hidden name=i13 data-bind="value: isKmsiChecked() ? 1 : 0"/> <input type=hidden name=slk data-bind="value: sessionIdentifier, attr: { name: sessionIdentifierName }"/> <input type=hidden name=uaid data-bind="value: svr.O"/> <input type=hidden name=login data-bind="value: unsafe_username"/> <input type=hidden name=loginfmt data-bind="value: unsafe_displayName"/> <input type=hidden name=type value="' +
      n(4).PostType.RemoteNGC +
      '"/> <input type=hidden name=LoginOptions data-bind="value: isKmsiChecked() ? ' +
      n(11).LoginOption.RememberPWD +
      " : " +
      n(11).LoginOption.NothingChecked +
      '"/> <div data-bind="component: { name: \'identity-banner-control\',\n    params: {\n        pawnIconId: svr.Bv,\n        profilePhotoUrl: svr.bZ,\n        displayName: unsafe_displayName,\n        isBackButtonVisible: isSecondaryButtonVisible() && svr.BP },\n     event: {\n        backButtonClick: secondaryButton_onClick } }"> </div><!-- ko if: title --> <div id=loginHeader class="row text-title" role=heading data-bind="text: title"></div><!-- /ko --><!-- ko if: error --> <div class=section> <div class=form-group> <div id=idDiv_RemoteNGC_PageDescription data-bind="text: error" class="row text-body text-block-body"> </div><!-- ko if: isPushNotification --> <div id=idDiv_RemoteNGC_PageDescription2 data-bind="text: str[\'CT_RNGC_STR_ResendNotification_Text\']" class="row text-body text-block-body"> </div><!-- /ko --> </div> </div><!-- /ko --><!-- ko ifnot: error --><!-- ko if: isPushNotification() || isListSessions() --><!-- ko if: isRequestPending --> <div class="row progress-container"> <div class=progress role=progressbar tabindex=-1 data-bind="component: \'marching-ants-control\', hasFocus: true, ariaLabel: str[\'WF_STR_ProgressText\']"></div> </div><!-- /ko --><!-- ko ifnot: isRequestPending --> <div class=section> <div class="row text-body"> <div data-bind="component: { name: \'proof-image-field\', params: { type: PROOF.Type.TOTPAuthenticatorV2, small: true, animate: true } }"></div> <div id=idDiv_RemoteNGC_PollingDescription class="text-block-body overflow-hidden" role=alert aria-live=assertive aria-atomic=true data-bind="text: unsafe_pollingDescription"></div> </div> </div><!-- /ko --><!-- ko if: displaySign() && !isRequestPending() --> <div class=section> <div class="row text-body"> <div id=idRemoteNGC_DisplaySign class=displaySign data-bind="text: displaySign"></div> </div> </div><!-- /ko --><!-- /ko --><!-- ko if: qrCodeGenerated --> <div data-bind="visible: isQrCode"> <div class=form-group> <div id=idDiv_RemoteNGC_QR_PageDescription data-bind="text: unsafe_pollingDescription" class="row text-body text-block-body"> </div> </div> <div class="row form-group"> <span id=idSpan_RemoteNGC_QrCode class=align-center data-bind="qrCode: {\n                text: \'MSA-NGC-USID:\' + svr.O,\n                width: 196,\n                height: 196,\n                correctLevel: ' +
      n(254).CorrectLevel.H +
      ' }"></span> </div> </div><!-- /ko --><!-- /ko --> <div class=position-buttons data-bind="invertOrder: svr.BH"> <div class=row> <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            primaryButtonDescribedBy: \'loginHeader idDiv_RemoteNGC_PageDescription\',\n            secondaryButtonDescribedBy: \'loginHeader idDiv_SmallSpinnerText\',\n            focusOnPrimaryButton: isPrimaryButtonVisible(),\n            focusOnSecondaryButton: isSecondaryButtonVisible() && !error(),\n            isPrimaryButtonVisible: isPrimaryButtonVisible(),\n            isSecondaryButtonVisible: isSecondaryButtonVisible() && !svr.BP },\n        event: {\n            primaryButtonClick: primaryButton_onClick,\n            secondaryButtonClick: secondaryButton_onClick } }"> </div> </div> <div><!-- ko ifnot: error --> <div data-bind="if: svr.At !== false, visible: !isRequestPending()"> <div id=idTd_PWD_KMSI_Cb class="form-group checkbox text-block-body no-margin-top" data-bind="visible: !svr.b"> <label id=idLbl_PWD_KMSI_Cb> <input name=KMSI id=idChkBx_PWD_KMSI0Pwd type=checkbox data-bind="checked: isKmsiChecked, ariaLabel: str[\'CT_PWD_STR_KeepMeSignedInCB_Text\']"/> <span data-bind="text: str[\'CT_PWD_STR_KeepMeSignedInCB_Text\']"></span> </label> </div> </div><!-- /ko --> <div class=row> <div class=col-md-24> <div class="text-13 action-links"><!-- ko ifnot: isRequestPending --><!-- ko component: { name: "cred-switch-link-control",\n                        params: {\n                            serverData: svr,\n                            availableCreds: availableCreds,\n                            currentCred: ' +
      n(4).CredentialType.RemoteNGC +
      " },\n                        event: {\n                            switchView: onSwitchView } } --><!-- /ko --><!-- /ko --><!-- ko if: svr.BG --> <div class=form-group><!-- ko if: isPushNotification --> <a id=idA_SwitchToQRCode href=# data-bind=\"text: str['CT_RNGC_STR_SwitchToQrCode_Link'], click: switchToQrCode_onClick\"></a><!-- /ko --><!-- ko if: isQrCode --> <a id=idA_SwitchToPolling href=# data-bind=\"text: str['CT_RNGC_STR_SwitchToPolling_Link'], click: switchToPolling_onClick\"></a><!-- /ko --> </div><!-- /ko --> </div> </div> </div> </div> </div> <span data-bind=\"component: { name: 'session-polling-field',\n    publicMethods: sessionPollingInterface,\n    params: {\n        serverData: svr,\n        pollingInterval: svr.M,\n        pollingTimeout: svr.m,\n        sessionIdentifier: sessionIdentifier,\n        sessionIdentifierType: 'NGC',\n        pollingType: pollingType },\n    event: {\n        load: sessionPollingField_onLoad,\n        sessionTimeout: sessionPollingField_onSessionTimeOut,\n        sessionDenied: sessionPollingField_onSessionDenied,\n        sessionApproved: sessionPollingField_onSessionApproved } }\"> </span>";
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        var e = r.pollImage.getImage();
        if (!e) return !1;
        r.pollImage.show();
        var t = e.width,
          n = e.height;
        if ((r.pollImage.hide(), n === c.Height.Pending)) {
          if (t === c.Width.Invalid) throw new h("invalidSession");
        } else if (n === c.Height.Complete) {
          if (t === c.Width.Approved) return !0;
          if (t === c.Width.Denied) throw new b("denied");
        }
        return !1;
      }
      function n(e) {
        if (!e) throw new h("noResponse");
        switch (e.AuthorizationState) {
          case f.Pending:
            return !1;
          case f.Approved:
            return !0;
          case f.Declined:
            throw new b("denied");
          case f.Invalid:
          default:
            throw new h("invalidSession");
        }
      }
      function i() {
        if (r.useJsonPolling) {
          var e = new p(function (e, t) {
            var n = { DeviceCode: y },
              i = g.appendOrReplace(I, "code", y),
              a = new o({ checkApiCanary: E });
            a.Json(i, n, e, t, s.DefaultRequestTimeout);
          });
          return e.then(n);
        }
        var i = new p(function (e, t) {
          var n = v.getCurrentTime(),
            i = g.appendOrReplace(I, "slk", y);
          (i = g.appendOrReplace(i, "dt", n)),
            (i = g.appendOrReplace(i, "uaid", A)),
            C && (i = g.appendOrReplace(i, "slkt", C)),
            (r.pollImage.resolvePromise = e),
            (r.pollImage.rejectPromise = t),
            r.pollImage.id("iRetrievedState" + n),
            r.pollImage.src(i),
            r.pollImage.reset();
        });
        return i.then(t);
      }
      var r = this,
        c = {
          Width: { Approved: 1, Invalid: 2, Denied: 2 },
          Height: { Pending: 1, Complete: 2 },
        },
        f = { Pending: 0, Declined: 1, Approved: 2, Invalid: 3 },
        _ = null,
        S = e.serverData,
        y = e.sessionIdentifier,
        w = e.pollingInterval ? 1e3 * e.pollingInterval : 5e3,
        T = e.pollingTimeout ? 1e3 * e.pollingTimeout : 6e4,
        C = e.sessionIdentifierType,
        k = e.pollingType,
        x = S.A5 || 5,
        I = S.ap,
        A = S.O,
        E = S.G !== !1,
        D = S.AY;
      (r.onSessionTimeout = l.create()),
        (r.onSessionDenied = l.create()),
        (r.onSessionApproved = l.create()),
        (r.useJsonPolling = k === m.Json),
        (r.pollImage = {
          resolvePromise: null,
          rejectPromise: null,
          id: a.observable(),
          src: a.observable(),
          width: a.observable(),
          height: a.observable(),
          visible: a.observable(!1),
          visibility: a.pureComputed(function () {
            return r.pollImage.visible() ? "hidden" : "";
          }),
          show: function () {
            r.pollImage.visible(!0);
          },
          hide: function () {
            r.pollImage.visible(!1);
          },
          getImage: a.pureComputed(function () {
            return document.getElementById(r.pollImage.id());
          }),
          reset: function () {
            r.pollImage.width(null), r.pollImage.height(null);
          },
        }),
        (r.dispose = function () {
          r.stopPolling();
        }),
        (r.startPolling = function () {
          r.stopPolling(),
            d.throwUnhandledExceptionOnRejection(
              _.poll().then(r.onSessionApproved, function (e) {
                e instanceof b && "denied" === e.errorCode
                  ? r.onSessionDenied()
                  : r.onSessionTimeout();
              }),
            );
        }),
        (r.stopPolling = function () {
          _.stopPolling(), r.useJsonPolling || r.pollImage.hide();
        }),
        (r.evt_PollingImage_onload = function () {
          r.pollImage.resolvePromise();
        }),
        (r.evt_PollingImage_onerror = function () {
          r.pollImage.rejectPromise();
        }),
        (function () {
          _ = new u({
            apiRequestCallBack: i,
            pollingIntervalMilliseconds: w,
            maxPollErrors: x,
            pollingTimeoutMilliseconds: T,
            useConstantPolling: D,
          });
        })();
    }
    var a = n(1),
      r = n(7),
      o = n(83),
      s = n(4),
      l = n(8),
      c = n(5),
      d = n(190),
      u = n(257),
      p = n(86),
      f = window,
      g = r.QueryString,
      m = s.SessionPollingType,
      v = c.DateTime,
      h = u.RetryableError,
      b = u.NonRetryableError;
    a.components.register("session-polling-field", {
      viewModel: i,
      template: n(258),
      synchronous:
        !f.ServerData.A || r.Helper.isStackSizeGreaterThan(f.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    function i(e) {
      function t(e) {
        var t = o.getCurrentTime();
        return n(e)
          .then(f)
          .then(
            function (e) {
              if (!e) return a(t);
            },
            function (e) {
              if (e instanceof i.RetryableError) {
                if (++l >= h)
                  throw new i.NonRetryableError("maxRetryableErrors");
                return a(t);
              }
              throw e;
            },
          );
      }
      function n(e) {
        return new r(function (t) {
          p && (d = setTimeout(t, e));
        });
      }
      function a(e) {
        var n = o.getCurrentTime(),
          a = _ ? e + c - n : c;
        return n > u
          ? r.reject(new i.NonRetryableError("timeout"))
          : ((c *= v), t(Math.max(a, 0)));
      }
      var s = this,
        l = 0,
        c = 0,
        d = null,
        u = null,
        p = !1,
        f = e.apiRequestCallBack,
        g = e.pollingIntervalMilliseconds || 0,
        m = e.initialPollDelay || e.pollingIntervalMilliseconds,
        v = e.pollingBackoffInterval || 1,
        h = e.maxPollErrors || 5,
        b = e.pollingTimeoutMilliseconds || 6e4,
        _ = e.useConstantPolling || !1;
      (s.poll = function () {
        return (l = 0), (c = g), (u = o.getCurrentTime() + b), (p = !0), t(m);
      }),
        (s.stopPolling = function () {
          d && (clearTimeout(d), (d = null)), (p = !1);
        });
    }
    var a = n(5),
      r = n(86),
      o = a.DateTime;
    (i.RetryableError = function (e, t) {
      var n = this;
      (n.name = "RetryableError"),
        (n.errorCode = e),
        (n.errorData = t),
        (n.message = "Retryable polling error: " + e),
        (n.stack = new Error().stack);
    }),
      (i.RetryableError.prototype = new Error()),
      (i.NonRetryableError = function (e, t) {
        var n = this;
        (n.name = "NonRetryableError"),
          (n.errorCode = e),
          (n.errorData = t),
          (n.message = "Non-retryable polling error: " + e),
          (n.stack = new Error().stack);
      }),
      (i.NonRetryableError.prototype = new Error()),
      (e.exports = i);
  },
  function (e, t) {
    e.exports =
      '<!-- ko ifnot: useJsonPolling --> <img data-bind="\n    attr:\n    {\n        id: pollImage.id,\n        src: pollImage.src,\n        width: pollImage.width,\n        height: pollImage.height\n    },\n    visible: pollImage.visible,\n    style: { visibility: pollImage.visibility },\n    event:\n    {\n        load: evt_PollingImage_onload,\n        error: evt_PollingImage_onerror\n    }"/> <!-- /ko -->';
  },
  function (e, t, n) {
    function i(e) {
      var t = this,
        n = e.type,
        i = e.small,
        a = e.animate;
      (t.type = n), (t.small = i), (t.animate = a);
    }
    var a = n(1),
      r = n(7),
      o = window;
    a.components.register("proof-image-field", {
      viewModel: i,
      template: n(260),
      synchronous:
        !o.ServerData.A || r.Helper.isStackSizeGreaterThan(o.ServerData.A),
    });
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(168), "") +
      " --><!-- ko if: type === PROOF.Type.Email --><!-- ko component: 'accessible-image-control' --> <img class=tile-img role=presentation pngsrc=" +
      n(261) +
      " svgsrc=" +
      n(262) +
      " data-bind=\"imgSrc, css: { 'small': small }\"/> <img class=tile-img role=presentation pngsrc=" +
      n(263) +
      " svgsrc=" +
      n(264) +
      " data-bind=\"imgSrc, css: { 'small': small }\"/><!-- /ko --><!-- /ko --><!-- ko if: type === PROOF.Type.SMS || type === PROOF.Type.TwoWaySMS || type === PROOF.Type.TwoWaySMSAlternateMobile --><!-- ko component: 'accessible-image-control' --> <img class=tile-img role=presentation pngsrc=" +
      n(265) +
      " svgsrc=" +
      n(266) +
      " data-bind=\"imgSrc, css: { 'small': small, 'animate-pulse': animate }\"/> <img class=tile-img role=presentation pngsrc=" +
      n(267) +
      " svgsrc=" +
      n(268) +
      " data-bind=\"imgSrc, css: { 'small': small, 'animate-pulse': animate }\"/><!-- /ko --><!-- /ko --><!-- ko if: type === PROOF.Type.Voice || type === PROOF.Type.TwoWayVoice || type === PROOF.Type.TwoWayVoiceAlternateMobile || type === PROOF.Type.TwoWayVoiceOffice --><!-- ko component: 'accessible-image-control' --> <img class=tile-img role=presentation pngsrc=" +
      n(269) +
      " svgsrc=" +
      n(270) +
      " data-bind=\"imgSrc, css: { 'small': small, 'animate-pulse': animate }\"/> <img class=tile-img role=presentation pngsrc=" +
      n(271) +
      " svgsrc=" +
      n(272) +
      " data-bind=\"imgSrc, css: { 'small': small, 'animate-pulse': animate }\"/><!-- /ko --><!-- /ko --><!-- ko if: type === PROOF.Type.TOTPAuthenticatorV2 --><!-- ko component: 'accessible-image-control' --> <img class=tile-img role=presentation pngsrc=" +
      n(273) +
      " svgsrc=" +
      n(274) +
      " data-bind=\"imgSrc, css: { 'small': small, 'animate-pulse': animate }\"/> <img class=tile-img role=presentation pngsrc=" +
      n(275) +
      " svgsrc=" +
      n(276) +
      " data-bind=\"imgSrc, css: { 'small': small, 'animate-pulse': animate }\"/><!-- /ko --><!-- /ko --><!-- ko if: type === PROOF.Type.TOTPAuthenticator --><!-- ko component: 'accessible-image-control' --> <img class=tile-img role=presentation pngsrc=" +
      n(277) +
      " svgsrc=" +
      n(278) +
      " data-bind=\"imgSrc, css: { 'small': small }\"/> <img class=tile-img role=presentation pngsrc=" +
      n(279) +
      " svgsrc=" +
      n(280) +
      " data-bind=\"imgSrc, css: { 'small': small }\"/><!-- /ko --> <!-- /ko -->";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_email_white.png?x=71dc627c54a8eaa59ce1e29f0213ed04";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_email_white.svg?x=d9aea72524c9c4075d84785b65db14c3";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_verify_email.png?x=9e766f54b687ca9ba0a6349568d38d82";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_verify_email.svg?x=59759b80e24a89c8cd029b14700e646d";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_sms_white.png?x=302dc9decbdfae8eae3c6a25b17332c4";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_sms_white.svg?x=ab6d583d053559122b00fc5a7ededf0e";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_verify_sms.png?x=b15dda889e9803e9d6befd60000fadf8";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_verify_sms.svg?x=27a6d18b56f46818420e60a773c36d4e";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_call_white.png?x=93f4bf9fbc4c674d0aaeac512a2af158";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_call_white.svg?x=eae9d2d72cca95874ce8d2d15cec5abd";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_verify_call.png?x=3fb9c7e87c04ff8f56dd61ef8b748c02";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_verify_call.svg?x=fe87496cc7a44412f7893a72099c120a";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_authenticator_white.png?x=908a66124770acfcca011c1976262849";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_authenticator_white.svg?x=4287331afb341e9c516ba40a1e2228c1";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_authenticator.png?x=942ac71f77cb04004b0ab25950e170b5";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_authenticator.svg?x=f07afb27ad510dc785a94e802e3d7f73";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_code_white.png?x=869e37e386b61bd1ec2643bfed6b01e4";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_verify_code_white.svg?x=92f4111dfadf41a1060e908f10cf2ebf";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_verify_code.png?x=ea014b224eb1c04ac2f7cb85c43cc034";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/picker_verify_code.svg?x=f7ab697e65b83ce9870a4736085deeec";
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        return v() ? n() : null;
      }
      function n() {
        var e = T();
        return e &&
          !S.isEmailAddress(e) &&
          S.isPhoneNumber(e) &&
          e.match(r.Regex.PhoneNumberValidation)
          ? null
          : R.CT_PWD_STR_Error_InvalidPhoneFormatting;
      }
      function i() {
        var e = c.country(),
          t = c.numberTextbox.value();
        return (
          e &&
            t &&
            ((t = S.trim(t)),
            (t =
              "+" +
              ("+" === t.charAt(0) ? "" : e.prefix) +
              t.replace(/\D+/g, ""))),
          t
        );
      }
      function o(e) {
        c.onRedirect(e.redirectUrl, e.redirectPostParams, e.isIdpRedirect);
      }
      var c = this,
        f = null,
        v = a.observable(!1),
        T = a.pureComputed(i),
        C = null,
        k = {},
        x = e.serverData,
        I = e.isInitialView,
        A = e.username,
        E = e.location,
        D = e.phoneDisambigError,
        P = e.flowToken,
        R = x.str,
        B = x.S,
        L = E || x.AF,
        N = x.V,
        M = a.observable(P).extend({ flowTokenUpdate: x });
      (c.onSwitchView = d.create()),
        (c.onRedirect = d.create()),
        (c.country = a.observable()),
        (c.numberTextbox = new g(u.errorComputed(t), A)),
        (c.isRequestPending = a.observable(!1)),
        (c.isCloudPolicyEnforced = a.observable(!1)),
        (c.isInitialView = I),
        (c.saveSharedData = function (e) {
          (e.flowToken = M()),
            (e.username = T()),
            (e.displayName = c.numberTextbox.value()),
            (e.passwordBrowserPrefill = null),
            a.utils.extend(e, k);
        }),
        (c.getState = function () {
          var e = {
            unsafe_number: c.numberTextbox.value(),
            country: c.country(),
            gctRequestHelperState: C.getState(),
          };
          return e;
        }),
        (c.restoreState = function (e) {
          e &&
            (C.restoreState(e.gctRequestHelperState),
            c.country(e.country || p.Helpers.getDefaultCountry(L)),
            c.numberTextbox.value(e.unsafe_number));
        }),
        (c.setDefaultFocus = function () {
          c.numberTextbox.focused(!0);
        }),
        (c.getCountryName = function (e) {
          return e.name + (e.prefix ? " \u200f(\u200e+" + e.prefix + ")" : "");
        }),
        (c.primaryButton_onClick = function () {
          if ((v(!0), c.numberTextbox.error.isBlocking()))
            return void c.setDefaultFocus();
          var e = T(),
            t = e === f && D;
          !t ||
          (D !== h.PP_E_INVALID_PHONENUMBER &&
            D !== h.PP_E_LIBPHONENUMBERINTEROP_NUMBERPARSE_EXCEPTION)
            ? t &&
              D === h.PP_E_DB_MEMBERDOESNOTEXIST &&
              !N &&
              C.cacheResponse(e, { IfExistsResult: b.NotExist })
            : C.cacheResponse(e, { ErrorHR: D }),
            c.isRequestPending(!0),
            l.throwUnhandledExceptionOnRejection(
              C.sendAsync(e, M()).then(function (e) {
                switch (
                  (c.isRequestPending(!1),
                  e.flowToken && M(e.flowToken),
                  e.action)
                ) {
                  case y.ShowError:
                    c.numberTextbox.error.setError(e.error, e.isBlockingError),
                      c.setDefaultFocus();
                    break;
                  case y.SwitchView:
                    (k = a.utils.extend(e.sharedData, e.viewParams || {})),
                      c.onSwitchView(e.viewId);
                    break;
                  case y.Redirect:
                    o(e);
                }
              }),
            );
        }),
        (c.secondaryButton_onClick = function () {
          c.onSwitchView(_.Previous);
        }),
        (c.signup_onClick = function () {
          o(C.getSignupRedirectGctResult(T()));
        }),
        (c.otherIdpLogin_onClick = function () {
          o(C.getOtherIdpRedirectGctResult(T()));
        }),
        (c.privacy_onClick = function () {
          c.onSwitchView(_.ViewAgreement);
        }),
        (c.tou_onClick = function () {
          c.onSwitchView(_.TermsOfUse);
        }),
        (c.skip_onClick = function () {
          m && m.handleOnSkip && (m.handleOnSkip(x), c.isRequestPending(!0));
        }),
        (function () {
          (C = new s(x, w.CheckCurrentIdpOnly | w.IsPhoneNumberFullyQualified)),
            (c.countries = p.Helpers.parseCountryList(B, !0)),
            c.country(p.Helpers.getDefaultCountry(c.countries, L)),
            (f = T()),
            m &&
              (m.handleBackButton &&
                m.handleBackButton(c.secondaryButton_onClick.bind(c)),
              m.isCloudPolicyEnforced &&
                m.isCloudPolicyEnforced(function (e) {
                  c.isCloudPolicyEnforced(e);
                }));
        })();
    }
    var a = n(1),
      r = n(4),
      o = n(5),
      s = n(85),
      l = n(190),
      c = n(7),
      d = n(8),
      u = n(191),
      p = n(282),
      f = n(193),
      g = n(192),
      m = null,
      v = window,
      h = r.Error,
      b = r.IfExistsResult,
      _ = r.PaginatedState,
      S = o.String,
      y = s.GctResultAction,
      w = s.GctRequestHelperFlags;
    f.applyExtenders(a),
      a.components.register("login-phone-disambig-view", {
        viewModel: i,
        template: n(283),
        synchronous:
          !v.ServerData.A || c.Helper.isStackSizeGreaterThan(v.ServerData.A),
        enableExtensions: !0,
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    var i = n(5),
      a = "US",
      r = "JP",
      o = i.String,
      s = i.Object,
      l = i.Array,
      c = (t.Country = function (e, t, n) {
        var i = this,
          a =
            "^([\\(\\)\\- \\*\\.#/\\[\\]]*0[\\(\\)\\- \\*\\.#/\\[\\]]*){1}([\\(\\)\\- \\*\\.#/\\[\\]]*[1-9][\\(\\)\\- \\*\\.#/\\[\\]]*){1}([\\(\\)\\- \\*\\.#/\\[\\]]*\\d[\\(\\)\\- \\*\\.#/\\[\\]]*){2,18}$",
          o =
            "^([\\(\\)\\- \\*\\.#/\\[\\]]*[1-9][\\(\\)\\- \\*\\.#/\\[\\]]*){1}([\\(\\)\\- \\*\\.#/\\[\\]]*\\d[\\(\\)\\- \\*\\.#/\\[\\]]*){3,19}$",
          s = "^[A-Za-z0-9_.-]+@([A-Za-z0-9_-]+\\.)+[A-Za-z0-9]+$";
        (i.iso = e),
          (i.name = t),
          (i.prefix = n),
          (i.phone = null),
          (i.username = null),
          (i.strings = []),
          (i.Content = null),
          (i.validate = function (e) {
            if (e) {
              if (e.match(a)) return !0;
              if (e.match(o)) return !0;
              if (i.iso === r && e.match(s)) return !0;
            }
            return !1;
          });
      });
    t.Helpers = {
      parseCountryList: function (e, t) {
        var n = [];
        return (
          s.forEach(o.doubleSplit(e, "!!!", "~", !0), function (e, i) {
            n.push(new c(e, i[0], t || e !== r ? i[1] : ""));
          }),
          n
        );
      },
      getDefaultCountry: function (e, t) {
        t = (t || "").toUpperCase();
        var n = null,
          i = l.first(e, function (e) {
            return e.iso.toUpperCase() === t || (e.iso === a && (n = e), !1);
          });
        return i || n;
      },
    };
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(172), n(205), "") +
      ' --> <div id=loginHeader class="row text-title" role=heading data-bind="text: str[\'CT_STR_PhoneDisambiguation_Title\']"></div> <div class="row text-body"> <label id=loginDescription for=phoneCountry data-bind="text: str[\'CT_STR_CountryCodeError\']"></label> </div> <div class=row> <div role=alert aria-live=assertive aria-atomic=false><!-- ko if: numberTextbox.error --> <div class="alert alert-error col-md-24" id=usernameError data-bind="\n            htmlWithBindings: numberTextbox.error,\n            childBindings: {\n                \'idA_PWD_SignUp\': { href: svr.e, click: signup_onClick },\n                \'otherIdpLogin\': { href: svr.I, click: otherIdpLogin_onClick } }"> </div><!-- /ko --> </div> <div> <div class="form-group col-md-24"> <select id=phoneCountry class=form-control data-bind="options: countries, optionsText: getCountryName, value: country"></select> </div> <div class="form-group col-md-24"> <div class=placeholderContainer data-bind="component: { name: \'placeholder-textbox\',\n                publicMethods: numberTextbox.placeholderTextboxMethods,\n                params: {\n                    serverData: svr,\n                    hintText: str[\'CT_OTC_STR_SMSTextbox_Label2\'] },\n                event: {\n                    updateFocus: numberTextbox.textbox_onUpdateFocus } }"> <input type=tel name=loginfmt id=i0116 maxlength=113 lang=en class="form-control ltr_override" aria-describedby="usernameError loginHeader loginDescription" aria-required=true data-bind="\n                        textInput: numberTextbox.value,\n                        hasFocusEx: numberTextbox.focused,\n                        placeholder: $placeholderText,\n                        ariaLabel: str[\'CT_OTC_STR_SMSTextbox_AriaLabel\'],\n                        css: { \'has-error\': numberTextbox.error }"/> <div id=usernameProgress class=progress role=progressbar data-bind="visible: isRequestPending, component: \'marching-ants-control\', ariaLabel: str[\'WF_STR_ProgressText\']"></div> </div> </div> </div> </div> <div class="row position-buttons"> <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            removeBottomMargin: true,\n            isPrimaryButtonEnabled: !isRequestPending(),\n            isPrimaryButtonVisible: svr.AV,\n            isSecondaryButtonVisible: svr.AV && (!isInitialView || !!svr.f) },\n        event: {\n            primaryButtonClick: primaryButton_onClick,\n            secondaryButtonClick: secondaryButton_onClick } }"> </div> </div>';
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        var e = f.trim(v),
          t = o.QueryString.appendOrReplace(
            k,
            "username",
            encodeURIComponent(e),
          ),
          n = x ? g.clone(x) : null;
        n && (n.username = e), i.onRedirect(t, n, !0);
      }
      function n() {
        if (h) (a = !0), (r = h), (s = b), i.onSwitchView(u.IdpRedirect);
        else if (T)
          (d = f.extractDomain(i.displayName)),
            i.onSwitchView(u.DesktopSsoProgress);
        else
          switch (_) {
            case p.Fido:
              i.onSwitchView(u.Fido);
              break;
            case p.OneTimeCode:
              i.onSwitchView(u.OneTimeCode);
              break;
            case p.RemoteNGC:
              i.onSwitchView(u.RemoteNGC);
              break;
            case p.Password:
            default:
              i.onSwitchView(u.Password);
          }
      }
      var i = this,
        a = !1,
        r = null,
        s = null,
        d = "",
        m = e.serverData,
        v = e.displayName,
        h = e.idpRedirectUrl,
        b = e.idpRedirectPostParams,
        _ = e.preferredCredential,
        S = e.hasInitialError,
        y = e.isInitialView,
        w = e.sessions,
        T = e.desktopSsoEnabled,
        C = m.str,
        k = m.I,
        x = m.h,
        I = m.Ax,
        A = !!m.urlBindProvider;
      (i.onSwitchView = l.create()),
        (i.onRedirect = l.create()),
        (i.displayName = v),
        (i.pageDescription = null),
        (i.isInitialView = y),
        (i.saveSharedData = function (e) {
          a && ((e.idpRedirectUrl = r), (e.idpRedirectPostParams = s)),
            (e.unsafe_desktopSsoDomainToUse = d);
        }),
        (i.getState = function () {
          return null;
        }),
        (i.restoreState = function () {}),
        (i.secondaryButton_onClick = function () {
          i.onSwitchView(u.Previous);
        }),
        (i.skip_onClick = function () {
          c && c.handleOnSkip && c.handleOnSkip(m);
        }),
        (i.privacy_onClick = function () {
          i.onSwitchView(u.ViewAgreement);
        }),
        (i.aadTile_onClick = function () {
          (I ? n : t)();
        }),
        (i.msaTile_onClick = function () {
          (I ? t : n)();
        }),
        (i.selectAccount_onClick = function () {
          w.length
            ? i.onSwitchView(u.Tiles)
            : i.onSwitchView(A ? u.SelectProvider : u.Username);
        }),
        (function () {
          i.pageDescription = S
            ? C.CT_HRD_STR_Splitter_Error_Heading ||
              C.CT_HRD_STR_Splitter_Heading
            : C.CT_HRD_STR_Splitter_Heading;
        })();
    }
    var a = n(1),
      r = n(4),
      o = n(7),
      s = n(5),
      l = n(8),
      c = null,
      d = window,
      u = r.PaginatedState,
      p = r.CredentialType,
      f = s.String,
      g = s.Object;
    a.components.register("login-idp-disambiguation-view", {
      viewModel: i,
      template: n(285),
      synchronous:
        !d.ServerData.A || o.Helper.isStackSizeGreaterThan(d.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(207), "") +
      ' --> <div class="row text-body text-block-body"> <div id=loginDescription data-bind="text: pageDescription"></div> </div> <div class=form-group> <div class="row tile"> <div id=aadTile class=table tabindex=0 role=button data-bind="hasFocus: true, click: aadTile_onClick, pressEnter: aadTile_onClick"> <div class=table-row> <div class="table-cell tile-img"> <img class=tile-img role=presentation pngsrc=' +
      n(222) +
      " svgsrc=" +
      n(223) +
      ' data-bind=imgSrc /> </div> <div class="table-cell text-left content"> <div id=aadTileTitle data-bind="text: str[\'CT_HRD_STR_Splitter_AadTile_Title\']"></div> <div id=aadTitleHint><small data-bind="text: str[\'CT_HRD_STR_Splitter_AadTile_Hint\']"></small></div> <div><small data-bind="text: displayName"></small></div> </div> </div> </div> </div> <div class="row tile"> <div id=msaTile class=table tabindex=0 role=button data-bind="click: msaTile_onClick, pressEnter: msaTile_onClick"> <div class=table-row> <div class="table-cell tile-img"> <img class=tile-img role=presentation pngsrc=' +
      n(224) +
      " svgsrc=" +
      n(225) +
      ' data-bind=imgSrc /> </div> <div class="table-cell text-left content"> <div id=msaTileTitle data-bind="text: str[\'CT_HRD_STR_Splitter_MsaTile_Title\']"></div> <div id=msaTileHint><small data-bind="text: str[\'CT_HRD_STR_Splitter_MsaTile_Hint\']"></small></div> <div><small data-bind="text: displayName"></small></div> </div> </div> </div> </div> </div> <div class=position-buttons data-bind="invertOrder: svr.BH"> <div class=row> <div data-bind="component: { name: \'footer-buttons-field\',\n            params: {\n                serverData: svr,\n                isPrimaryButtonVisible: false,\n                isSecondaryButtonVisible: svr.AV && (!isInitialView || !!svr.f) },\n            event: {\n                secondaryButtonClick: secondaryButton_onClick } }"> </div> </div> <div class=row> <div class=col-md-24> <div class="text-13 action-links"> <div class=form-group data-bind="\n                    htmlWithBindings: html[\'CT_HRD_STR_Splitter_Rename\'],\n                    childBindings: { \'iDisambigRenameLink\': { href: svr.bv } }"> </div><!-- ko if: svr.K && isInitialView --> <div class=form-group> <a id=i1668 href=# data-bind="text: str[\'CT_FED_STR_ChangeUserLink_Text\'], click: selectAccount_onClick"></a> </div><!-- /ko --> </div> </div> </div> </div>';
  },
  function (e, t, n) {
    function i(e) {
      var t = this,
        n = null,
        i = e.serverData,
        a = e.idpRedirectUrl,
        r = e.idpRedirectPostParams,
        o = e.idpRedirectProvider,
        c = i.str,
        p = i.s;
      (t.title = null),
        (t.onSwitchView = s.create()),
        (t.onRedirect = s.create()),
        (t.saveSharedData = function () {}),
        (t.getState = function () {
          return null;
        }),
        (t.restoreState = function () {}),
        (t.cancelRedirect_onClick = function () {
          clearTimeout(n), t.onSwitchView(d.Previous);
        }),
        (function () {
          var e = a,
            i = r,
            s = c.CT_HRD_STR_Redirect_Title;
          switch (o) {
            case u.GitHub:
              (e = e || p),
                (i = null),
                (s = c.CT_HRD_STR_Redirect_Title_GitHub);
          }
          (t.title = s),
            l &&
              l.setBackNavigationCheckpointBeforeRedirect &&
              l.setBackNavigationCheckpointBeforeRedirect(),
            (n = setTimeout(function () {
              t.onRedirect(e, i, !0);
            }, 2e3));
        })();
    }
    var a = n(1),
      r = n(4),
      o = n(7),
      s = n(8),
      l = null,
      c = window,
      d = r.PaginatedState,
      u = r.BindProvider;
    a.components.register("login-idp-redirect-view", {
      viewModel: i,
      template: n(287),
      synchronous:
        !c.ServerData.A || o.Helper.isStackSizeGreaterThan(c.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(172), "") +
      ' --> <div id=loginHeader class="row text-title" role=heading data-bind="text: title"></div> <div class="row progress-container"> <div class=progress role=progressbar data-bind="component: \'marching-ants-control\', ariaLabel: str[\'WF_STR_ProgressText\']"></div> </div> <a id=aadRedirectCancel href=# aria-describedby=loginHeader data-bind="\n    text: str[\'CT_HRD_STR_Redirect_Cancel\'],\n    click: cancelRedirect_onClick,\n    hasFocus: true"></a>';
  },
  function (e, t, n) {
    function i(e) {
      var t = this,
        n = e.agreementType;
      (t.onSwitchView = o.create()),
        (t.agreementType = n),
        (t.saveSharedData = function () {}),
        (t.getState = function () {
          return null;
        }),
        (t.restoreState = function () {}),
        (t.agreementControl_onBack = function () {
          t.onSwitchView(d.Previous);
        }),
        (function () {
          l &&
            l.handleBackButton &&
            l.handleBackButton(t.agreementControl_onBack.bind(t));
        })();
    }
    var a = n(1),
      r = n(7),
      o = n(8),
      s = n(4),
      l = null,
      c = window,
      d = s.PaginatedState;
    a.components.register("login-view-agreement-view", {
      viewModel: i,
      template: n(289),
      synchronous:
        !c.ServerData.A || r.Helper.isStackSizeGreaterThan(c.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(290), "") +
      ' --><!-- ko component: { name: "view-agreement-control",\n    params: {\n        serverData: svr,\n        agreementType: agreementType\n    },\n    event: {\n        buttonClick: agreementControl_onBack } } --> <!-- /ko -->';
  },
  function (e, t, n) {
    function i(e) {
      function t(e, t) {
        o.agreementHtml(t);
      }
      function n() {
        o.downloadError(!0);
      }
      function i() {
        var e = {
            targetUrl: l,
            requestType: r.RequestType.Get,
            isAsync: !0,
            timeout: 1e4,
            responseType: "text",
            successCallback: t,
            failureCallback: n,
            timeoutCallback: n,
          },
          i = new r.Handler(e);
        i.sendRequest();
      }
      var o = this,
        l = null,
        c = e.serverData,
        d = e.agreementType,
        u = c.str,
        g = c.t,
        m = c.Ai,
        v = c.AI;
      (o.onButtonClick = s.create()),
        (o.agreementHtml = a.observable()),
        (o.downloadError = a.observable(!1)),
        (o.secondaryButton_onClick = function () {
          o.onButtonClick();
        }),
        (function () {
          d === p.Impressum
            ? o.agreementHtml(f.format(u.CT_STR_ViewAgreement_ExternalLink, v))
            : ((l = d === p.Privacy ? g : m), i());
        })();
    }
    var a = n(1),
      r = n(84),
      o = n(7),
      s = n(8),
      l = n(4),
      c = n(5),
      d = n(291),
      u = window,
      p = l.AgreementType,
      f = c.String;
    d.applyExtensions(a),
      a.components.register("view-agreement-control", {
        viewModel: i,
        template: n(292),
        synchronous:
          !u.ServerData.A || o.Helper.isStackSizeGreaterThan(u.ServerData.A),
        enableExtensions: !0,
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    var i = n(5),
      a = i.String;
    t.applyExtensions = function (e) {
      e.bindingHandlers.accessibleHtml = {
        init: function (t, n) {
          var i = a.trim(e.unwrap(n())),
            r = '<p id="agreementTitle" tabindex="-1">',
            o = '<p tabindex="-1">',
            s = "</p>",
            l = /(?:\r\n|\r|\n)/g,
            c = new RegExp(o + s, "g"),
            d = r + i + s;
          (d = d.replace(l, s + o)), (d = d.replace(c, "")), (t.innerHTML = d);
        },
      };
    };
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(172), n(207), "") +
      ' --> <div class=section><!-- ko ifnot: agreementHtml() || downloadError() --> <div class="row progress-container"> <div class=progress role=alert tabindex=-1 data-bind="component: \'marching-ants-control\', ariaLabel: str[\'WF_STR_ProgressText\']"></div> </div><!-- /ko --><!-- ko if: downloadError --> <div class="row text-body"> <div id=error aria-role=alert aria-live=assertive aria-relevant=text aria-atomic=true data-bind="text: str[\'CT_STR_ViewAgreementError\']"></div> </div><!-- /ko --> <div class="row agreement-buttons"> <div data-bind="component: { name: \'footer-buttons-field\',\n            params: {\n                serverData: svr,\n                focusOnSecondaryButton: true,\n                isPrimaryButtonVisible: false,\n                secondaryButtonDescribedBy: \'idDiv_iAgreement\',\n                isSecondaryButtonVisible: svr.AV },\n            event: {\n                secondaryButtonClick: secondaryButton_onClick } }"> </div> </div><!-- ko if: agreementHtml --> <pre class="text-body text-block-body agreement-layout" id=idDiv_iAgreement role=alert data-bind="accessibleHtml: agreementHtml"></pre> <div class="row agreement-buttons"> <div data-bind="component: { name: \'footer-buttons-field\',\n            params: {\n                serverData: svr,\n                isPrimaryButtonVisible: false,\n                secondaryButtonDescribedBy: \'idDiv_iAgreement\',\n                isSecondaryButtonVisible: svr.AV },\n            event: {\n                secondaryButtonClick: secondaryButton_onClick } }"> </div> </div><!-- /ko --> </div>';
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        if (!r.isRequestPending()) {
          r.isRequestPending(!0);
          var e = f.cleanseUsername(p),
            t = {
              username: e,
              proofData: e,
              proofType: o ? PROOF.Type.Email : PROOF.Type.SMS,
              purpose: I ? c.Purpose.NoPassword : c.Purpose.Password,
              flowToken: R(),
              isEncrypted: !1,
              unauthSessionId: k,
              lcid: x,
              successCallback: n,
              failureCallback: i,
            },
            a = new d(t);
          a.sendRequest();
        }
      }
      function n(e) {
        R(e.getFlowToken()),
          r.isRequestPending(!1),
          r.onSwitchView(g.OneTimeCode);
      }
      function i(e) {
        e && R(e.getFlowToken()),
          r.isRequestPending(!1),
          r.description(
            o
              ? y.CT_STR_ConfirmSend_Otc_SendError_Email
              : y.CT_STR_ConfirmSend_Otc_SendError,
          ),
          r.primaryButtonText(y.CT_PWD_STR_SignIn_Button_Next);
      }
      var r = this,
        o = !1,
        l = e.serverData,
        u = e.isInitialView,
        p = e.displayName,
        h = e.preferredCredential,
        b = e.sessions,
        _ = e.flowToken,
        S = e.availableCreds,
        y = l.str,
        w = l.html,
        T = l.B,
        C = l.fPOST_ForceSignin,
        k = l.O,
        x = l.Ad,
        I = l.Az,
        A = l.b,
        E = l.urlSwitch,
        D = l.K,
        P = !!l.urlBindProvider,
        R = a.observable(_).extend({ flowTokenUpdate: l });
      (r.onSwitchView = s.create()),
        (r.onRedirect = s.create()),
        (r.description = a.observable("")),
        (r.primaryButtonText = a.observable(null)),
        (r.isRequestPending = a.observable(!1)),
        (r.displayName = p),
        (r.hasRemoteNgc = !1),
        (r.availableCreds = S),
        (r.showChangeUserLink = !1),
        (r.isInitialView = u),
        (r.saveSharedData = function (e) {
          e.flowToken = R();
        }),
        (r.getState = function () {
          return null;
        }),
        (r.restoreState = function () {}),
        (r.primaryButton_onClick = function () {
          switch (h) {
            case m.RemoteNGC:
              r.onSwitchView(g.RemoteNGC);
              break;
            case m.OneTimeCode:
              t();
          }
        }),
        (r.secondaryButton_onClick = function () {
          r.onSwitchView(g.Previous);
        }),
        (r.privacy_onClick = function () {
          r.onSwitchView(g.ViewAgreement);
        }),
        (r.tou_onClick = function () {
          r.onSwitchView(g.TermsOfUse);
        }),
        (r.phoneDisambiguation_onClick = function () {
          r.onSwitchView(g.PhoneDisambiguation);
        }),
        (r.switchToPassword_onClick = function () {
          r.onSwitchView(g.Password);
        }),
        (r.selectAccount_onClick = function () {
          A && E
            ? r.onRedirect(E)
            : b.length
            ? r.onSwitchView(g.Tiles)
            : r.onSwitchView(P ? g.SelectProvider : g.Username);
        }),
        (function () {
          var e =
            T === v.ForceSignin ||
            T === v.ForceSigninMobile ||
            T === v.ForceSigninHost ||
            C;
          switch (
            ((o = f.isEmailAddress(p)),
            (r.showChangeUserLink = D && ((A && E) || u)),
            h)
          ) {
            case m.RemoteNGC:
              (r.hasRemoteNgc = !0),
                r.description(
                  f.format(
                    e
                      ? y.CT_STR_ConfirmSend_RemoteNgc_ForceSignin
                      : y.CT_STR_ConfirmSend_RemoteNgc,
                    p,
                  ),
                ),
                r.primaryButtonText(
                  y.CT_STR_ConfirmSend_RemoteNgc_SendNotification,
                );
              break;
            case m.OneTimeCode:
              r.description(
                f.format(
                  e
                    ? y.CT_STR_ConfirmSend_Otc_ForceSignin
                    : o
                    ? y.CT_STR_ConfirmSend_Otc_Email
                    : w.CT_STR_ConfirmSend_Otc,
                  p,
                ),
              ),
                r.primaryButtonText(y.CT_STR_ConfirmSend_Otc_SendCode);
          }
        })();
    }
    var a = n(1),
      r = n(7),
      o = n(5),
      s = n(8),
      l = n(4),
      c = n(251),
      d = n(252),
      u = n(193),
      p = window,
      f = o.String,
      g = l.PaginatedState,
      m = l.CredentialType,
      v = l.LoginMode;
    u.applyExtenders(a),
      a.components.register("login-confirm-send-view", {
        viewModel: i,
        template: n(294),
        synchronous:
          !p.ServerData.A || r.Helper.isStackSizeGreaterThan(p.ServerData.A),
        enableExtensions: !0,
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(172), n(207), n(220), n(210), n(216), "") +
      ' --> <div data-bind="component: { name: \'identity-banner-control\',\n    params: {\n        pawnIconId: svr.Bv,\n        profilePhotoUrl: svr.bZ,\n        displayName: displayName,\n        isBackButtonVisible: svr.AV && (!isInitialView || !!svr.f) && svr.BP },\n     event: {\n        backButtonClick: secondaryButton_onClick } }"> </div> <div data-bind="component: { name: \'header-control\', params: { serverData: svr } }"></div><!-- ko if: isRequestPending --> <div class="row progress-container"> <div class=progress role=progressbar tabindex=-1 data-bind="component: \'marching-ants-control\', hasFocus: true, ariaLabel: str[\'WF_STR_ProgressText\']"></div> </div><!-- /ko --><!-- ko ifnot: isRequestPending --> <div class=form-group> <div class="row text-body text-block-body" data-bind="\n        htmlWithBindings: description,\n        childBindings: { \'phoneDisambigLink\': { click: phoneDisambiguation_onClick } }"> </div> </div><!-- /ko --> <div class=position-buttons data-bind="invertOrder: svr.BH"> <div class=row> <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            removeBottomMargin: !hasRemoteNgc && !showChangeUserLink,\n            isPrimaryButtonVisible: svr.AV && !isRequestPending(),\n            focusOnPrimaryButton: true,\n            primaryButtonText: primaryButtonText,\n            primaryButtonDescribedBy: \'loginHeader\',\n            isSecondaryButtonVisible: svr.AV && (!isInitialView || !!svr.f) && !svr.BP },\n        event: {\n            primaryButtonClick: primaryButton_onClick,\n            secondaryButtonClick: secondaryButton_onClick } }"> </div> </div> <div><!-- ko if: hasRemoteNgc || showChangeUserLink --> <div class=row> <div class=col-md-24> <div class="text-13 action-links"><!-- ko component: { name: "cred-switch-link-control",\n                        params: {\n                            serverData: svr,\n                            availableCreds: availableCreds,\n                            currentCred: hasRemoteNgc ? ' +
      n(4).CredentialType.RemoteNGC +
      " : " +
      n(4).CredentialType.OneTimeCode +
      " },\n                        event: {\n                            switchView: onSwitchView } } --><!-- /ko --><!-- ko if: showChangeUserLink --> <div class=form-group> <a id=i1668 href=# data-bind=\"text: str['CT_FED_STR_ChangeUserLink_Text'], click: selectAccount_onClick\"></a> </div><!-- /ko --> </div> </div> </div><!-- /ko --> </div> </div>";
  },
  function (e, t, n) {
    function i(e) {
      function t(e, t) {
        return s.String.format(
          "./cred_option_{0}{1}.{2}",
          e,
          t ? "_white" : "",
          h ? "svg" : "png",
        );
      }
      var n = this,
        i = e.serverData,
        r = e.availableCreds,
        o = e.displayName,
        p = i.str,
        v = i.s,
        h = !1;
      (n.displayName = o),
        (n.credentials = []),
        (n.onSwitchView = l.create()),
        (n.onRedirect = l.create()),
        (n.dispose = function () {}),
        (n.saveSharedData = function () {}),
        (n.getState = function () {
          return null;
        }),
        (n.restoreState = function () {}),
        (n.tile_onClick = function (e) {
          e.paginatedState === f.GitHubIdpRedirect
            ? n.onRedirect(v)
            : n.onSwitchView(e.paginatedState);
        }),
        (n.secondaryButton_onClick = function () {
          n.onSwitchView(f.Previous);
        }),
        (function () {
          (h = m.isSvgImgSupported()),
            a.utils.arrayForEach(r, function (e) {
              var i = null,
                a = null,
                r = null,
                o = null,
                s = 0;
              switch (e) {
                case g.RemoteNGC:
                  (i = c(t("authenticator", !0))),
                    (a = c(t("authenticator", !1))),
                    (r = p.CT_STR_CredentialPicker_Option_AuthenticatorApp),
                    (o = f.RemoteNGG),
                    (s = 1);
                  break;
                case g.Fido:
                  (i = c(t("fido", !0))),
                    (a = c(t("fido", !1))),
                    (r = p.CT_STR_CredentialPicker_Option_Fido),
                    (o = f.Fido),
                    (s = 2);
                  break;
                case g.GitHub:
                  (i = h ? d : u),
                    (a = h ? d : u),
                    (r = p.CT_PWD_STR_UseGitHub_Link),
                    (o = f.GitHubIdpRedirect),
                    (s = 3);
                  break;
                case g.Password:
                  (i = c(t("password", !0))),
                    (a = c(t("password", !1))),
                    (r = p.CT_STR_CredentialPicker_Option_Password),
                    (o = f.Password),
                    (s = 4);
                  break;
                default:
                  return;
              }
              n.credentials.push({
                lightIconUrl: i,
                darkIconUrl: a,
                description: r,
                paginatedState: o,
                weight: s,
              });
            }),
            n.credentials.sort(function (e, t) {
              return e.weight - t.weight;
            });
        })();
    }
    var a = n(1),
      r = n(4),
      o = n(7),
      s = n(5),
      l = n(8),
      c = n(296),
      d = n(309),
      u = n(310),
      p = window,
      f = r.PaginatedState,
      g = r.CredentialType,
      m = o.Helper;
    a.components.register("login-credential-picker-view", {
      viewModel: i,
      template: n(311),
      synchronous: !p.ServerData.A || m.isStackSizeGreaterThan(p.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    function i(e) {
      return n(a(e));
    }
    function a(e) {
      return (
        r[e] ||
        (function () {
          throw new Error("Cannot find module '" + e + "'.");
        })()
      );
    }
    var r = {
      "./cred_option_authenticator.png": 297,
      "./cred_option_authenticator.svg": 298,
      "./cred_option_authenticator_white.png": 299,
      "./cred_option_authenticator_white.svg": 300,
      "./cred_option_fido.png": 301,
      "./cred_option_fido.svg": 302,
      "./cred_option_fido_white.png": 303,
      "./cred_option_fido_white.svg": 304,
      "./cred_option_password.png": 305,
      "./cred_option_password.svg": 306,
      "./cred_option_password_white.png": 307,
      "./cred_option_password_white.svg": 308,
    };
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.resolve = a),
      (e.exports = i),
      (i.id = 296);
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_authenticator.png?x=942ac71f77cb04004b0ab25950e170b5";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_authenticator.svg?x=f07afb27ad510dc785a94e802e3d7f73";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_authenticator_white.png?x=9fe4c7c8b413538439965b9e8655dea1";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_authenticator_white.svg?x=af7091d75246f1b2bf9c83a84edd07c8";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_fido.png?x=dc00f8f6e6d9a91d23d2bbfddef20fdd";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_fido.svg?x=78004568600e2e7da69486be4feed238";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_fido_white.png?x=8bae383bb73de97c725e7ced593e97c1";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_fido_white.svg?x=55d0f7ba72a86078851a43bbf7c64c55";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_password.png?x=4a1ffe28022bce60a66e5561ca7da808";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_password.svg?x=8179e8dc85861667a3d2d06e126b00e4";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_password_white.png?x=f1d36a17feadc29599336de745dc2b47";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_option_password_white.svg?x=86a8277ae5cc131052d45776a0fc2b70";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_account_github.svg?x=34afd3707396ba293e02d4c6baa4f1ab";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_account_github.png?x=21ea037945f24e20c851b05c75f342a4";
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(207), n(168), "") +
      ' --><!-- ko if: displayName --> <div data-bind="component: { name: \'identity-banner-control\',\n    params: {\n        pawnIconId: svr.Bv,\n        displayName: displayName,\n        isBackButtonVisible: svr.AV && svr.BP },\n    event: {\n        backButtonClick: secondaryButton_onClick } }"> </div> <div id=loginHeader class="row text-title" role=heading data-bind="text: str[\'CT_STR_CredentialPicker_Title\']"></div> <div class="row text-body no-margin-top"> <div id=credPickerDescription data-bind="text: str[\'CT_STR_CredentialPicker_Description\']"></div> </div><!-- /ko --><!-- ko ifnot: displayName --> <div id=loginHeader class="row text-title" role=heading data-bind="text: str[\'CT_PWD_STR_SwitchToCredPicker_Link\']"></div><!-- /ko --> <div data-bind="css: { \'position-buttons\': svr.AV && (!displayName || !svr.BP) }"> <div class=form-group><!-- ko foreach: { data: credentials, as: \'credential\' } --> <div class=tile-container> <div class="row tile"> <div class=table tabindex=0 role=button data-bind="\n                        click: $parent.tile_onClick,\n                        pressEnter: $parent.tile_onClick,\n                        ariaLabel: description,\n                        hasFocus: $index() === 0"> <div class="table-cell tile-img"> <div><!-- ko component: \'accessible-image-control\' --> <img class=tile-img role=presentation data-bind="attr: { src: lightIconUrl }"/> <img class=tile-img role=presentation data-bind="attr: { src: darkIconUrl }"/><!-- /ko --> </div> </div> <div class="table-cell text-left content"> <div data-bind="text: description"></div> </div> </div> </div> </div><!-- /ko --> </div> </div> <div class=row> <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            removeBottomMargin: true,\n            isPrimaryButtonVisible: false,\n            isPrimaryButtonEnabled: false,\n            isSecondaryButtonVisible: svr.AV && (!displayName || !svr.BP) },\n        event: {\n            secondaryButtonClick: secondaryButton_onClick } }"> </div> </div>';
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        n.isRequestPending(!0),
          n.showTryAgainButton(!0),
          n.error(null),
          l
            .getAssertion(v, h)
            .then(function (e) {
              var t = e.response,
                i = {
                  id: e.id,
                  clientDataJSON: d.arrayBufferToBase64UrlString(
                    t.clientDataJSON,
                  ),
                  authenticatorData: d.arrayBufferToBase64UrlString(
                    t.authenticatorData,
                  ),
                  signature: d.arrayBufferToBase64UrlString(t.signature),
                  userHandle: d.arrayBufferToBase64UrlString(t.userHandle),
                };
              n.fidoAssertion(c.stringify(i)), n.onSubmitReady();
            })
            ["catch"](function (e) {
              switch (e.name) {
                case "NotFoundError":
                case "ConstraintError":
                  n.error(_.CT_FIDO_STR_Error_NotFound);
                  break;
                case "NotAllowedError":
                  n.error(_.CT_FIDO_STR_Error_NotAllowed);
                  break;
                default:
                  n.error(_.CT_FIDO_STR_Error_Unknown);
              }
              n.isRequestPending(!1);
            });
      }
      var n = this,
        i = e.serverData,
        r = e.availableCreds,
        o = e.displayName,
        u = e.username,
        g = e.defaultKmsiValue,
        m = e.isInitialView,
        v = e.challenge,
        h = e.allowList,
        b = e.sessions,
        _ = i.str,
        S = i.b,
        y = i.urlSwitch,
        w = i.K,
        T = !!i.urlBindProvider;
      (n.isKmsiChecked = a.observable(g)),
        (n.isRequestPending = a.observable(!1)),
        (n.fidoAssertion = a.observable(null)),
        (n.showTryAgainButton = a.observable(!m)),
        (n.error = a.observable(null)),
        (n.unsafe_displayName = null),
        (n.unsafe_username = null),
        (n.availableCreds = r),
        (n.isInitialView = m),
        (n.showChangeUserLink = !1),
        (n.onSwitchView = s.create()),
        (n.onSubmitReady = s.create()),
        (n.onRedirect = s.create()),
        (n.dispose = function () {}),
        (n.saveSharedData = function () {}),
        (n.getState = function () {
          var e = { isKmsiChecked: n.isKmsiChecked() };
          return e;
        }),
        (n.restoreState = function (e) {
          e && n.isKmsiChecked(e.isKmsiChecked);
        }),
        (n.primaryButton_onClick = function () {
          t();
        }),
        (n.secondaryButton_onClick = function () {
          n.onSwitchView(p.Previous);
        }),
        (n.selectAccount_onClick = function () {
          S && y
            ? n.onRedirect(y)
            : b.length
            ? n.onSwitchView(p.Tiles)
            : n.onSwitchView(T ? p.SelectProvider : p.Username);
        }),
        (function () {
          (n.unsafe_displayName = f.htmlUnescape(o)),
            (n.unsafe_username = f.htmlUnescape(u)),
            (n.showChangeUserLink = w && ((S && y) || m)),
            m || t();
        })();
    }
    var a = n(1),
      r = n(4),
      o = n(7),
      s = n(8),
      l = n(313),
      c = n(6),
      d = n(314),
      u = window,
      p = r.PaginatedState,
      f = o.Helper;
    a.components.register("login-fido-view", {
      viewModel: i,
      template: n(315),
      synchronous:
        !u.ServerData.A || o.Helper.isStackSizeGreaterThan(u.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    var i = n(4),
      a = n(314),
      r = window,
      o = r.navigator;
    t.getAssertion = function (e, t) {
      var n = [];
      t &&
        (n = t.map(function (e) {
          return { type: "public-key", id: e };
        }));
      var r = {
        challenge: a.stringToArrayBuffer(e),
        timeout: i.DefaultRequestTimeout,
        allowList: n,
        allowCredentials: n,
      };
      return o.credentials.get({ publicKey: r });
    };
  },
  function (e, t) {
    var n = window,
      i = (t.stringToArrayBuffer = function (e) {
        if (n.TextEncoder) {
          var t = new n.TextEncoder();
          return t.encode(e).buffer;
        }
        for (
          var i = new ArrayBuffer(e.length),
            a = new Uint8Array(i),
            r = 0,
            o = e.length;
          r < o;
          ++r
        )
          a[r] = e.charCodeAt(r);
        return i;
      });
    (t.base64UrlStringToArrayBuffer = function (e) {
      var t = e.replace(/[-_]/g, function (e) {
          switch (e) {
            case "-":
              return "+";
            case "_":
              return "/";
          }
        }),
        n = atob(t);
      return i(n);
    }),
      (t.arrayBufferToBase64UrlString = function (e) {
        var t;
        if (n.TextDecoder) {
          var i = new n.TextDecoder("utf-8");
          t = i.decode(e);
        } else t = String.fromCharCode.apply(null, new Uint8Array(e));
        var a = btoa(t),
          r = a.replace(/[+\/=]/g, function (e) {
            switch (e) {
              case "+":
                return "-";
              case "/":
                return "_";
              case "=":
                return "";
            }
          });
        return r;
      });
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(207), n(168), n(220), n(172), n(210), "") +
      ' --> <input type=hidden name=i13 data-bind="value: isKmsiChecked() ? 1 : 0"/> <input type=hidden name=uaid data-bind="value: svr.O"/> <input type=hidden name=login data-bind="value: unsafe_username"/> <input type=hidden name=loginfmt data-bind="value: unsafe_displayName"/> <input type=hidden name=type value="' +
      n(4).PostType.NGC +
      '"/> <input type=hidden name=LoginOptions data-bind="value: isKmsiChecked() ? ' +
      n(11).LoginOption.RememberPWD +
      " : " +
      n(11).LoginOption.NothingChecked +
      '"/> <input type=hidden name=assertion data-bind="value: fidoAssertion"/><!-- ko if: unsafe_displayName --> <div data-bind="component: { name: \'identity-banner-control\',\n    params: {\n        pawnIconId: svr.Bv,\n        profilePhotoUrl: svr.bZ,\n        displayName: unsafe_displayName,\n        isBackButtonVisible: svr.AV && (!isInitialView || !!svr.f) && svr.BP },\n     event: {\n        backButtonClick: secondaryButton_onClick } }"> </div><!-- /ko --> <div id=loginHeader class="row text-title" role=heading data-bind="text: str[\'CT_FIDO_STR_Page_Title\']"></div> <div class=section> <div class="row text-body"><!-- ko ifnot: isRequestPending --><!-- ko if: error --> <div id=fidoError class="alert alert-error" role=alert aria-live=assertive aria-relevant=text aria-atomic=true data-bind="text: error"></div><!-- /ko --> <div class=pull-left><!-- ko component: \'accessible-image-control\' --> <img role=presentation pngsrc=' +
      n(316) +
      " svgsrc=" +
      n(317) +
      " data-bind=imgSrc /> <img role=presentation pngsrc=" +
      n(318) +
      " svgsrc=" +
      n(319) +
      ' data-bind=imgSrc /><!-- /ko --> </div> <div id=pageDescription class=page-description-with-icon data-bind="text: str[\'CT_FIDO_STR_Page_Description\']"> </div><!-- /ko --><!-- ko if: isRequestPending --> <div class="row progress-container"> <div class=progress role=progressbar tabindex=-1 data-bind="component: \'marching-ants-control\', hasFocus: true, ariaLabel: str[\'WF_STR_ProgressText\']"></div> </div><!-- /ko --> </div> </div> <div class=position-buttons data-bind="invertOrder: svr.BH"> <div class=row> <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            isPrimaryButtonEnabled: !isRequestPending(),\n            isPrimaryButtonVisible: !isRequestPending() && svr.AV,\n            isSecondaryButtonVisible: svr.AV && (!isInitialView || !!svr.f) && !svr.BP,\n            isSecondaryButtonEnabled: !isRequestPending(),\n            primaryButtonText: showTryAgainButton() ? str[\'CT_FIDO_STR_TryAgain_Button\'] : str[\'CT_PWD_STR_SignIn_Button_Next\'] },\n        event: {\n            primaryButtonClick: primaryButton_onClick,\n            secondaryButtonClick: secondaryButton_onClick } }"> </div> </div> <div> <div data-bind="if: svr.At !== false"> <div id=idTd_PWD_KMSI_Cb class="form-group checkbox text-block-body no-margin-top" data-bind="visible: !svr.b"> <label id=idLbl_PWD_KMSI_Cb> <input name=KMSI id=idChkBx_PWD_KMSI0Pwd type=checkbox data-bind="checked: isKmsiChecked"/> <span data-bind="text: str[\'CT_PWD_STR_KeepMeSignedInCB_Text\']"></span> </label> </div> </div> <div class=row> <div class=col-md-24> <div class="text-13 action-links"><!-- ko ifnot: isRequestPending --><!-- ko component: { name: "cred-switch-link-control",\n                        params: {\n                            serverData: svr,\n                            availableCreds: availableCreds,\n                            currentCred: ' +
      n(4).CredentialType.Fido +
      " },\n                        event: {\n                            switchView: onSwitchView } } --><!-- /ko --><!-- /ko --><!-- ko if: showChangeUserLink --> <div class=form-group> <a id=i1668 href=# data-bind=\"text: str['CT_FED_STR_ChangeUserLink_Text'], click: selectAccount_onClick\"></a> </div><!-- /ko --> </div> </div> </div> </div> </div>";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_inline_fido_white.png?x=0666805c5abb0a55c5da432eb93f8323";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_inline_fido_white.svg?x=242685560da32e0c8ec5102278e8b392";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_inline_fido.png?x=e6de0b05c58d06d4e8953a867f59748f";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/CredentialOptions/cred_inline_fido.svg?x=ab56ae745c7d2e872753c6d1461ed262";
  },
  function (e, t, n) {
    function i(e) {
      var t = this,
        n = e.serverData,
        i = e.preferredCredential,
        a = n.str,
        r = n.L,
        o = n.I,
        s = n.h,
        u = n.ak,
        S = n.aB,
        y = n.AD;
      (t.onSwitchView = l.create()),
        (t.onRedirect = l.create()),
        (t.unsafe_title = null),
        (t.providerText = null),
        (t.providerImage = null),
        (t.saveSharedData = function () {}),
        (t.getState = function () {
          return null;
        }),
        (t.restoreState = function () {}),
        (t.secondaryButton_onClick = function () {
          t.onSwitchView(p.Previous);
        }),
        (t.microsoftTile_onClick = function () {
          var e = y.IfExistsResult;
          if (e === f.ExistsBothIDPs) t.onSwitchView(p.IdpDisambiguation);
          else if (e === f.ExistsInOtherMicrosoftIDP) {
            var n = v.trim(y.Username),
              a = _.appendOrReplace(o, "username", encodeURIComponent(n)),
              r = s ? h.clone(s) : null;
            r && (r.username = n), t.onRedirect(a, r);
          } else
            switch (i) {
              case g.Fido:
                t.onSwitchView(p.Fido);
                break;
              case g.OneTimeCode:
                t.onSwitchView(p.OneTimeCode);
                break;
              case g.RemoteNGC:
                t.onSwitchView(p.RemoteNGC);
                break;
              case g.Password:
              default:
                t.onSwitchView(p.Password);
            }
        }),
        (t.providerTile_onClick = function () {
          t.onRedirect(u, S);
        }),
        (function () {
          var e = b.htmlUnescape(y.Display);
          switch (
            ((t.unsafe_title = v.format(a.CT_FEDCONFLICT_STR_Page_Title, e)), r)
          ) {
            default:
            case m.GitHub:
              (t.providerText = a.CT_FEDCONFLICT_STR_UseGitHub),
                (t.providerImage = b.isSvgImgSupported() ? c : d);
          }
        })();
    }
    var a = n(1),
      r = n(4),
      o = n(5),
      s = n(7),
      l = n(8),
      c = n(309),
      d = n(310),
      u = window,
      p = r.PaginatedState,
      f = r.IfExistsResult,
      g = r.CredentialType,
      m = r.BindProvider,
      v = o.String,
      h = o.Object,
      b = s.Helper,
      _ = s.QueryString;
    a.components.register("login-fed-conflict-view", {
      viewModel: i,
      template: n(321),
      synchronous:
        !u.ServerData.A || s.Helper.isStackSizeGreaterThan(u.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(207), "") +
      ' --> <div id=loginHeader class="row text-title" role=heading data-bind="text: unsafe_title"></div> <div class=form-group> <div class=tile-container> <div class="row tile"> <div class=table tabindex=0 role=button data-bind="\n                click: microsoftTile_onClick,\n                pressEnter: microsoftTile_onClick,\n                ariaLabel: str[\'CT_FEDCONFLICT_STR_UseMicrosoft\'],\n                attr: { \'aria-describedby\': \'loginHeader\' },\n                hasFocus: true"> <div class="table-cell tile-img"> <div> <img class=tile-img role=presentation pngsrc=' +
      n(322) +
      " svgsrc=" +
      n(323) +
      ' data-bind=imgSrc /> </div> </div> <div class="table-cell text-left content"> <div data-bind="text: str[\'CT_FEDCONFLICT_STR_UseMicrosoft\']"></div> <div><small data-bind="text: str[\'CT_FEDCONFLICT_STR_UseMicrosoft_Help_VSTS\']"></small></div> </div> </div> </div> <div class="row tile"> <div class=table tabindex=0 role=button data-bind="\n                click: providerTile_onClick,\n                pressEnter: providerTile_onClick,\n                ariaLabel: providerText"> <div class="table-cell tile-img"> <div> <img class=tile-img role=presentation data-bind="attr: { \'src\': providerImage }"/> </div> </div> <div class="table-cell text-left content"> <div data-bind="text: providerText"></div> </div> </div> </div> </div> </div> <div class=row> <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            isPrimaryButtonVisible: false,\n            isSecondaryButtonVisible: svr.AV && !!svr.f },\n        event: {\n            secondaryButtonClick: secondaryButton_onClick } }"> </div> </div>';
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_account_microsoft.png?x=ac0ece36638f852302754c027a40e20b";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/picker_account_microsoft.svg?x=57c677c3a4eac1dd11656fe4840eef19";
  },
  function (e, t, n) {
    function i(e) {
      function t() {
        var e = l.performance,
          t = {};
        return e
          ? (e.navigation && (t.navigation = n(e.navigation)),
            e.timing && (t.timing = n(e.timing)),
            e.getEntries && (t.entries = a.utils.arrayMap(e.getEntries(), n)),
            t)
          : null;
      }
      function n(e) {
        var t = {};
        if (e.toJSON) return e.toJSON();
        for (var n in e) t[n] = e[n];
        return t;
      }
      function i() {
        var e = {
            config: {
              instrumentationKey: y,
              isCookieUseDisabled: !0,
              isStorageUseDisabled: !0,
              disableAjaxTracking: !0,
              disableExceptionTracking: !0,
              endpointUrl: S,
            },
          },
          t = new s.Initialization(e),
          n = t.loadAppInsights();
        (l.appInsights = n),
          n.context.addTelemetryInitializer(function (e) {
            var t = e.data.baseData;
            (t.properties = t.properties || {}),
              (t.properties.hostBuildNumber = v ? v.ver.v.join(".") : f),
              (t.properties.requestCountry = m),
              (t.properties.hpgid = h),
              (t.measurements = t.measurements || {}),
              (t.measurements.enabledPercentage = _),
              "string" == typeof t.url && (t.url = t.url.split("?")[0]);
            for (
              var n = [
                  "ai.operation.id",
                  "ai.operation.parentid",
                  "ai.operation.rootid",
                  "ai.session.id",
                  "ai.user.accountId",
                  "ai.user.authUserId",
                  "ai.user.id",
                ],
                i = 0;
              i < n.length;
              i++
            )
              e.tags[n[i]] && delete e.tags[n[i]];
          });
      }
      var r = this,
        c = e.serverData,
        d = c.B,
        u = c.aO,
        p = c.G,
        f = c.aE,
        g = c.aa,
        m = c.aH || c.country,
        v = c.serverDetails,
        h = c.hpgid,
        b = c.Ao,
        _ = c.A1,
        S = c.aJ,
        y = c.ac;
      (r.clientMode = d),
        (r.srsFailed = l.g_iSRSFailed),
        (r.srsSuccess = l.g_sSRSSuccess),
        (r.timeOnPage = a.observable(null)),
        (r.recordSubmit = function () {
          l.performance &&
            l.performance.timing &&
            r.timeOnPage(
              new Date().getTime() - l.performance.timing.loadEventEnd,
            );
        }),
        (function () {
          b && i(),
            setTimeout(function () {
              if (u) {
                var e = {
                    hostBuildNumber: v ? v.ver.v.join(".") : f,
                    serverExecutionTime: v ? v.et : g,
                    requestCountry: m,
                    plt: 0,
                  },
                  n = t();
                n && (e.performanceData = n);
                var i = new o({ checkApiCanary: p });
                i.Json(u, e);
              }
              var a = l.appInsights;
              if (a) {
                var r = {},
                  s = {};
                (s.serverExecutionTime = v ? v.et : g),
                  a.trackPageView(null, null, r, s);
              }
            }, 0);
        })();
    }
    var a = n(1),
      r = n(7),
      o = n(83),
      s = n(325).Microsoft.ApplicationInsights,
      l = window;
    a.components.register("instrumentation", {
      viewModel: i,
      template: n(326),
      synchronous:
        !l.ServerData.A || r.Helper.isStackSizeGreaterThan(l.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t) {
    "use strict";
    var n,
      i =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function i() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })();
    !(function (e) {
      var t;
      !(function (e) {})(
        (t = e.ApplicationInsights || (e.ApplicationInsights = {})),
      );
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t = (function () {
          function e() {}
          return e;
        })();
        e.Base = t;
      })((t = e.Telemetry || (e.Telemetry = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t = (function () {
          function e() {
            (this.ver = 1), (this.sampleRate = 100), (this.tags = {});
          }
          return e;
        })();
        e.Envelope = t;
      })((t = e.Telemetry || (e.Telemetry = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {})((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {})((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {})((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {})((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {})((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {})((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {})((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {})((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {})(
        (t = e.ApplicationInsights || (e.ApplicationInsights = {})),
      );
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {})(
        (t = e.ApplicationInsights || (e.ApplicationInsights = {})),
      );
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {})(
        (t = e.ApplicationInsights || (e.ApplicationInsights = {})),
      );
    })(n || (n = {}));
    var a;
    !(function (e) {
      var t;
      !(function (e) {
        (e[(e.Verbose = 0)] = "Verbose"),
          (e[(e.Information = 1)] = "Information"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error"),
          (e[(e.Critical = 4)] = "Critical");
      })((t = e.SeverityLevel || (e.SeverityLevel = {})));
    })(a || (a = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {})(
        (t = e.ApplicationInsights || (e.ApplicationInsights = {})),
      );
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {
          (e[(e.CRITICAL = 0)] = "CRITICAL"), (e[(e.WARNING = 1)] = "WARNING");
        })((t = e.LoggingSeverity || (e.LoggingSeverity = {})));
        var n;
        !(function (e) {
          (e[(e.BrowserDoesNotSupportLocalStorage = 0)] =
            "BrowserDoesNotSupportLocalStorage"),
            (e[(e.BrowserCannotReadLocalStorage = 1)] =
              "BrowserCannotReadLocalStorage"),
            (e[(e.BrowserCannotReadSessionStorage = 2)] =
              "BrowserCannotReadSessionStorage"),
            (e[(e.BrowserCannotWriteLocalStorage = 3)] =
              "BrowserCannotWriteLocalStorage"),
            (e[(e.BrowserCannotWriteSessionStorage = 4)] =
              "BrowserCannotWriteSessionStorage"),
            (e[(e.BrowserFailedRemovalFromLocalStorage = 5)] =
              "BrowserFailedRemovalFromLocalStorage"),
            (e[(e.BrowserFailedRemovalFromSessionStorage = 6)] =
              "BrowserFailedRemovalFromSessionStorage"),
            (e[(e.CannotSendEmptyTelemetry = 7)] = "CannotSendEmptyTelemetry"),
            (e[(e.ClientPerformanceMathError = 8)] =
              "ClientPerformanceMathError"),
            (e[(e.ErrorParsingAISessionCookie = 9)] =
              "ErrorParsingAISessionCookie"),
            (e[(e.ErrorPVCalc = 10)] = "ErrorPVCalc"),
            (e[(e.ExceptionWhileLoggingError = 11)] =
              "ExceptionWhileLoggingError"),
            (e[(e.FailedAddingTelemetryToBuffer = 12)] =
              "FailedAddingTelemetryToBuffer"),
            (e[(e.FailedMonitorAjaxAbort = 13)] = "FailedMonitorAjaxAbort"),
            (e[(e.FailedMonitorAjaxDur = 14)] = "FailedMonitorAjaxDur"),
            (e[(e.FailedMonitorAjaxOpen = 15)] = "FailedMonitorAjaxOpen"),
            (e[(e.FailedMonitorAjaxRSC = 16)] = "FailedMonitorAjaxRSC"),
            (e[(e.FailedMonitorAjaxSend = 17)] = "FailedMonitorAjaxSend"),
            (e[(e.FailedToAddHandlerForOnBeforeUnload = 18)] =
              "FailedToAddHandlerForOnBeforeUnload"),
            (e[(e.FailedToSendQueuedTelemetry = 19)] =
              "FailedToSendQueuedTelemetry"),
            (e[(e.FailedToReportDataLoss = 20)] = "FailedToReportDataLoss"),
            (e[(e.FlushFailed = 21)] = "FlushFailed"),
            (e[(e.MessageLimitPerPVExceeded = 22)] =
              "MessageLimitPerPVExceeded"),
            (e[(e.MissingRequiredFieldSpecification = 23)] =
              "MissingRequiredFieldSpecification"),
            (e[(e.NavigationTimingNotSupported = 24)] =
              "NavigationTimingNotSupported"),
            (e[(e.OnError = 25)] = "OnError"),
            (e[(e.SessionRenewalDateIsZero = 26)] = "SessionRenewalDateIsZero"),
            (e[(e.SenderNotInitialized = 27)] = "SenderNotInitialized"),
            (e[(e.StartTrackEventFailed = 28)] = "StartTrackEventFailed"),
            (e[(e.StopTrackEventFailed = 29)] = "StopTrackEventFailed"),
            (e[(e.StartTrackFailed = 30)] = "StartTrackFailed"),
            (e[(e.StopTrackFailed = 31)] = "StopTrackFailed"),
            (e[(e.TelemetrySampledAndNotSent = 32)] =
              "TelemetrySampledAndNotSent"),
            (e[(e.TrackEventFailed = 33)] = "TrackEventFailed"),
            (e[(e.TrackExceptionFailed = 34)] = "TrackExceptionFailed"),
            (e[(e.TrackMetricFailed = 35)] = "TrackMetricFailed"),
            (e[(e.TrackPVFailed = 36)] = "TrackPVFailed"),
            (e[(e.TrackPVFailedCalc = 37)] = "TrackPVFailedCalc"),
            (e[(e.TrackTraceFailed = 38)] = "TrackTraceFailed"),
            (e[(e.TransmissionFailed = 39)] = "TransmissionFailed"),
            (e[(e.FailedToSetStorageBuffer = 40)] = "FailedToSetStorageBuffer"),
            (e[(e.FailedToRestoreStorageBuffer = 41)] =
              "FailedToRestoreStorageBuffer"),
            (e[(e.InvalidBackendResponse = 42)] = "InvalidBackendResponse"),
            (e[(e.FailedToFixDepricatedValues = 43)] =
              "FailedToFixDepricatedValues"),
            (e[(e.InvalidDurationValue = 44)] = "InvalidDurationValue"),
            (e[(e.CannotSerializeObject = 45)] = "CannotSerializeObject"),
            (e[(e.CannotSerializeObjectNonSerializable = 46)] =
              "CannotSerializeObjectNonSerializable"),
            (e[(e.CircularReferenceDetected = 47)] =
              "CircularReferenceDetected"),
            (e[(e.ClearAuthContextFailed = 48)] = "ClearAuthContextFailed"),
            (e[(e.ExceptionTruncated = 49)] = "ExceptionTruncated"),
            (e[(e.IllegalCharsInName = 50)] = "IllegalCharsInName"),
            (e[(e.ItemNotInArray = 51)] = "ItemNotInArray"),
            (e[(e.MaxAjaxPerPVExceeded = 52)] = "MaxAjaxPerPVExceeded"),
            (e[(e.MessageTruncated = 53)] = "MessageTruncated"),
            (e[(e.NameTooLong = 54)] = "NameTooLong"),
            (e[(e.SampleRateOutOfRange = 55)] = "SampleRateOutOfRange"),
            (e[(e.SetAuthContextFailed = 56)] = "SetAuthContextFailed"),
            (e[(e.SetAuthContextFailedAccountName = 57)] =
              "SetAuthContextFailedAccountName"),
            (e[(e.StringValueTooLong = 58)] = "StringValueTooLong"),
            (e[(e.StartCalledMoreThanOnce = 59)] = "StartCalledMoreThanOnce"),
            (e[(e.StopCalledWithoutStart = 60)] = "StopCalledWithoutStart"),
            (e[(e.TelemetryInitializerFailed = 61)] =
              "TelemetryInitializerFailed"),
            (e[(e.TrackArgumentsNotSpecified = 62)] =
              "TrackArgumentsNotSpecified"),
            (e[(e.UrlTooLong = 63)] = "UrlTooLong"),
            (e[(e.SessionStorageBufferFull = 64)] = "SessionStorageBufferFull"),
            (e[(e.CannotAccessCookie = 65)] = "CannotAccessCookie");
        })((n = e._InternalMessageId || (e._InternalMessageId = {})));
        var i = (function () {
          function e(t, i, a, r) {
            void 0 === a && (a = !1),
              (this.messageId = t),
              (this.message =
                (a ? e.AiUserActionablePrefix : e.AiNonUserActionablePrefix) +
                n[t].toString());
            var o =
              (i ? " message:" + e.sanitizeDiagnosticText(i) : "") +
              (r
                ? " props:" + e.sanitizeDiagnosticText(JSON.stringify(r))
                : "");
            this.message += o;
          }
          return (
            (e.sanitizeDiagnosticText = function (e) {
              return '"' + e.replace(/\"/g, "") + '"';
            }),
            (e.AiNonUserActionablePrefix = "AI (Internal): "),
            (e.AiUserActionablePrefix = "AI: "),
            e
          );
        })();
        e._InternalLogMessage = i;
        var a = (function () {
          function a() {}
          return (
            (a.throwInternal = function (e, t, a, r, o) {
              void 0 === o && (o = !1);
              var s = new i(t, a, o, r);
              if (this.enableDebugExceptions()) throw s;
              if (
                "undefined" != typeof s &&
                s &&
                "undefined" != typeof s.message
              ) {
                if (o) {
                  var l = n[s.messageId];
                  (this._messageLogged[l] && !this.verboseLogging()) ||
                    (this.warnToConsole(s.message),
                    (this._messageLogged[l] = !0));
                } else this.verboseLogging() && this.warnToConsole(s.message);
                this.logInternalMessage(e, s);
              }
            }),
            (a.warnToConsole = function (e) {
              "undefined" != typeof console &&
                console &&
                ("function" == typeof console.warn
                  ? console.warn(e)
                  : "function" == typeof console.log && console.log(e));
            }),
            (a.resetInternalMessageCount = function () {
              (this._messageCount = 0), (this._messageLogged = {});
            }),
            (a.clearInternalMessageLoggedTypes = function () {
              if (e.Util.canUseSessionStorage())
                for (
                  var t = e.Util.getSessionStorageKeys(), n = 0;
                  n < t.length;
                  n++
                )
                  0 === t[n].indexOf(a.AIInternalMessagePrefix) &&
                    e.Util.removeSessionStorage(t[n]);
            }),
            (a.setMaxInternalMessageLimit = function (e) {
              if (!e) throw new Error("limit cannot be undefined.");
              this.MAX_INTERNAL_MESSAGE_LIMIT = e;
            }),
            (a.logInternalMessage = function (r, o) {
              if (!this._areInternalMessagesThrottled()) {
                var s = !0,
                  l = a.AIInternalMessagePrefix + n[o.messageId];
                if (e.Util.canUseSessionStorage()) {
                  var c = e.Util.getSessionStorage(l);
                  c ? (s = !1) : e.Util.setSessionStorage(l, "1");
                } else
                  this._messageLogged[l]
                    ? (s = !1)
                    : (this._messageLogged[l] = !0);
                if (
                  s &&
                  ((this.verboseLogging() || r === t.CRITICAL) &&
                    (this.queue.push(o), this._messageCount++),
                  this._messageCount == this.MAX_INTERNAL_MESSAGE_LIMIT)
                ) {
                  var d =
                      "Internal events throttle limit per PageView reached for this app.",
                    u = new i(n.MessageLimitPerPVExceeded, d, !1);
                  this.queue.push(u), this.warnToConsole(d);
                }
              }
            }),
            (a._areInternalMessagesThrottled = function () {
              return this._messageCount >= this.MAX_INTERNAL_MESSAGE_LIMIT;
            }),
            (a.AIInternalMessagePrefix = "AITR_"),
            (a.enableDebugExceptions = function () {
              return !1;
            }),
            (a.verboseLogging = function () {
              return !1;
            }),
            (a.queue = []),
            (a.MAX_INTERNAL_MESSAGE_LIMIT = 25),
            (a._messageCount = 0),
            (a._messageLogged = {}),
            a
          );
        })();
        e._InternalLogging = a;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {
          (e[(e.LocalStorage = 0)] = "LocalStorage"),
            (e[(e.SessionStorage = 1)] = "SessionStorage");
        })(t || (t = {}));
        var n = (function () {
          function n() {}
          return (
            (n.disableStorage = function () {
              (n._canUseLocalStorage = !1), (n._canUseSessionStorage = !1);
            }),
            (n._getLocalStorageObject = function () {
              return n.canUseLocalStorage()
                ? n._getVerifiedStorageObject(t.LocalStorage)
                : null;
            }),
            (n._getVerifiedStorageObject = function (e) {
              var n,
                i,
                a = null;
              try {
                (i = new Date()),
                  (a =
                    e === t.LocalStorage
                      ? window.localStorage
                      : window.sessionStorage),
                  a.setItem(i, i),
                  (n = a.getItem(i) != i),
                  a.removeItem(i),
                  n && (a = null);
              } catch (r) {
                a = null;
              }
              return a;
            }),
            (n.canUseLocalStorage = function () {
              return (
                void 0 === n._canUseLocalStorage &&
                  (n._canUseLocalStorage = !!n._getVerifiedStorageObject(
                    t.LocalStorage,
                  )),
                n._canUseLocalStorage
              );
            }),
            (n.getStorage = function (t) {
              var i = n._getLocalStorageObject();
              if (null !== i)
                try {
                  return i.getItem(t);
                } catch (a) {
                  (n._canUseLocalStorage = !1),
                    e._InternalLogging.throwInternal(
                      e.LoggingSeverity.WARNING,
                      e._InternalMessageId.BrowserCannotReadLocalStorage,
                      "Browser failed read of local storage. " +
                        n.getExceptionName(a),
                      { exception: n.dump(a) },
                    );
                }
              return null;
            }),
            (n.setStorage = function (t, i) {
              var a = n._getLocalStorageObject();
              if (null !== a)
                try {
                  return a.setItem(t, i), !0;
                } catch (r) {
                  (n._canUseLocalStorage = !1),
                    e._InternalLogging.throwInternal(
                      e.LoggingSeverity.WARNING,
                      e._InternalMessageId.BrowserCannotWriteLocalStorage,
                      "Browser failed write to local storage. " +
                        n.getExceptionName(r),
                      { exception: n.dump(r) },
                    );
                }
              return !1;
            }),
            (n.removeStorage = function (t) {
              var i = n._getLocalStorageObject();
              if (null !== i)
                try {
                  return i.removeItem(t), !0;
                } catch (a) {
                  (n._canUseLocalStorage = !1),
                    e._InternalLogging.throwInternal(
                      e.LoggingSeverity.WARNING,
                      e._InternalMessageId.BrowserFailedRemovalFromLocalStorage,
                      "Browser failed removal of local storage item. " +
                        n.getExceptionName(a),
                      { exception: n.dump(a) },
                    );
                }
              return !1;
            }),
            (n._getSessionStorageObject = function () {
              return n.canUseSessionStorage()
                ? n._getVerifiedStorageObject(t.SessionStorage)
                : null;
            }),
            (n.canUseSessionStorage = function () {
              return (
                void 0 === n._canUseSessionStorage &&
                  (n._canUseSessionStorage = !!n._getVerifiedStorageObject(
                    t.SessionStorage,
                  )),
                n._canUseSessionStorage
              );
            }),
            (n.getSessionStorageKeys = function () {
              var e = [];
              if (n.canUseSessionStorage())
                for (var t in window.sessionStorage) e.push(t);
              return e;
            }),
            (n.getSessionStorage = function (t) {
              var i = n._getSessionStorageObject();
              if (null !== i)
                try {
                  return i.getItem(t);
                } catch (a) {
                  (n._canUseSessionStorage = !1),
                    e._InternalLogging.throwInternal(
                      e.LoggingSeverity.WARNING,
                      e._InternalMessageId.BrowserCannotReadSessionStorage,
                      "Browser failed read of session storage. " +
                        n.getExceptionName(a),
                      { exception: n.dump(a) },
                    );
                }
              return null;
            }),
            (n.setSessionStorage = function (t, i) {
              var a = n._getSessionStorageObject();
              if (null !== a)
                try {
                  return a.setItem(t, i), !0;
                } catch (r) {
                  (n._canUseSessionStorage = !1),
                    e._InternalLogging.throwInternal(
                      e.LoggingSeverity.WARNING,
                      e._InternalMessageId.BrowserCannotWriteSessionStorage,
                      "Browser failed write to session storage. " +
                        n.getExceptionName(r),
                      { exception: n.dump(r) },
                    );
                }
              return !1;
            }),
            (n.removeSessionStorage = function (t) {
              var i = n._getSessionStorageObject();
              if (null !== i)
                try {
                  return i.removeItem(t), !0;
                } catch (a) {
                  (n._canUseSessionStorage = !1),
                    e._InternalLogging.throwInternal(
                      e.LoggingSeverity.WARNING,
                      e._InternalMessageId
                        .BrowserFailedRemovalFromSessionStorage,
                      "Browser failed removal of session storage item. " +
                        n.getExceptionName(a),
                      { exception: n.dump(a) },
                    );
                }
              return !1;
            }),
            (n.disableCookies = function () {
              n._canUseCookies = !1;
            }),
            (n.canUseCookies = function () {
              if (void 0 === n._canUseCookies) {
                n._canUseCookies = !1;
                try {
                  n._canUseCookies = void 0 !== n.document.cookie;
                } catch (t) {
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.WARNING,
                    e._InternalMessageId.CannotAccessCookie,
                    "Cannot access document.cookie - " + n.getExceptionName(t),
                    { exception: n.dump(t) },
                  );
                }
              }
              return n._canUseCookies;
            }),
            (n.setCookie = function (e, t, i) {
              var a = "",
                r = "";
              i && (a = ";domain=" + i),
                n.document.location &&
                  "https:" === n.document.location.protocol &&
                  (r = ";secure"),
                n.canUseCookies() &&
                  (n.document.cookie = e + "=" + t + a + ";path=/" + r);
            }),
            (n.stringToBoolOrDefault = function (e, t) {
              return (
                void 0 === t && (t = !1),
                void 0 === e || null === e
                  ? t
                  : "true" === e.toString().toLowerCase()
              );
            }),
            (n.getCookie = function (e) {
              if (n.canUseCookies()) {
                var t = "";
                if (e && e.length)
                  for (
                    var i = e + "=", a = n.document.cookie.split(";"), r = 0;
                    r < a.length;
                    r++
                  ) {
                    var o = a[r];
                    if (((o = n.trim(o)), o && 0 === o.indexOf(i))) {
                      t = o.substring(i.length, a[r].length);
                      break;
                    }
                  }
                return t;
              }
            }),
            (n.deleteCookie = function (e) {
              n.canUseCookies() &&
                (n.document.cookie =
                  e + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;");
            }),
            (n.trim = function (e) {
              return "string" != typeof e ? e : e.replace(/^\s+|\s+$/g, "");
            }),
            (n.newId = function () {
              for (
                var e =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  t = "",
                  n = 1073741824 * Math.random();
                n > 0;

              ) {
                var i = e.charAt(n % 64);
                (t += i), (n = Math.floor(n / 64));
              }
              return t;
            }),
            (n.isArray = function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            }),
            (n.isError = function (e) {
              return "[object Error]" === Object.prototype.toString.call(e);
            }),
            (n.isDate = function (e) {
              return "[object Date]" === Object.prototype.toString.call(e);
            }),
            (n.toISOStringForIE8 = function (e) {
              if (n.isDate(e)) {
                if (Date.prototype.toISOString) return e.toISOString();
                var t = function (e) {
                  var t = String(e);
                  return 1 === t.length && (t = "0" + t), t;
                };
                return (
                  e.getUTCFullYear() +
                  "-" +
                  t(e.getUTCMonth() + 1) +
                  "-" +
                  t(e.getUTCDate()) +
                  "T" +
                  t(e.getUTCHours()) +
                  ":" +
                  t(e.getUTCMinutes()) +
                  ":" +
                  t(e.getUTCSeconds()) +
                  "." +
                  String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(
                    2,
                    5,
                  ) +
                  "Z"
                );
              }
            }),
            (n.getIEVersion = function (e) {
              void 0 === e && (e = null);
              var t = e ? e.toLowerCase() : navigator.userAgent.toLowerCase();
              return t.indexOf("msie") != -1
                ? parseInt(t.split("msie")[1])
                : null;
            }),
            (n.msToTimeSpan = function (e) {
              (isNaN(e) || e < 0) && (e = 0), (e = Math.round(e));
              var t = "" + (e % 1e3),
                n = "" + (Math.floor(e / 1e3) % 60),
                i = "" + (Math.floor(e / 6e4) % 60),
                a = "" + (Math.floor(e / 36e5) % 24),
                r = Math.floor(e / 864e5);
              return (
                (t = 1 === t.length ? "00" + t : 2 === t.length ? "0" + t : t),
                (n = n.length < 2 ? "0" + n : n),
                (i = i.length < 2 ? "0" + i : i),
                (a = a.length < 2 ? "0" + a : a),
                (r > 0 ? r + "." : "") + a + ":" + i + ":" + n + "." + t
              );
            }),
            (n.isCrossOriginError = function (e, t, n, i, a) {
              return ("Script error." === e || "Script error" === e) && !a;
            }),
            (n.dump = function (e) {
              var t = Object.prototype.toString.call(e),
                n = JSON.stringify(e);
              return (
                "[object Error]" === t &&
                  (n =
                    "{ stack: '" +
                    e.stack +
                    "', message: '" +
                    e.message +
                    "', name: '" +
                    e.name +
                    "'"),
                t + n
              );
            }),
            (n.getExceptionName = function (e) {
              var t = Object.prototype.toString.call(e);
              return "[object Error]" === t ? e.name : "";
            }),
            (n.addEventHandler = function (e, t) {
              if (!window || "string" != typeof e || "function" != typeof t)
                return !1;
              var n = "on" + e;
              if (window.addEventListener) window.addEventListener(e, t, !1);
              else {
                if (!window.attachEvent) return !1;
                window.attachEvent.call(n, t);
              }
              return !0;
            }),
            (n.IsBeaconApiSupported = function () {
              return "sendBeacon" in navigator && navigator.sendBeacon;
            }),
            (n.document = "undefined" != typeof document ? document : {}),
            (n._canUseCookies = void 0),
            (n._canUseLocalStorage = void 0),
            (n._canUseSessionStorage = void 0),
            (n.NotSpecified = "not_specified"),
            n
          );
        })();
        e.Util = n;
        var i = (function () {
          function e() {}
          return (
            (e.parseUrl = function (t) {
              return (
                e.htmlAnchorElement ||
                  (e.htmlAnchorElement = e.document.createElement
                    ? e.document.createElement("a")
                    : {}),
                (e.htmlAnchorElement.href = t),
                e.htmlAnchorElement
              );
            }),
            (e.getAbsoluteUrl = function (t) {
              var n,
                i = e.parseUrl(t);
              return i && (n = i.href), n;
            }),
            (e.getPathName = function (t) {
              var n,
                i = e.parseUrl(t);
              return i && (n = i.pathname), n;
            }),
            (e.getCompleteUrl = function (e, t) {
              return e ? e.toUpperCase() + " " + t : t;
            }),
            (e.document = "undefined" != typeof document ? document : {}),
            e
          );
        })();
        e.UrlHelper = i;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Required = 1)] = "Required"),
            (e[(e.Array = 2)] = "Array"),
            (e[(e.Hidden = 4)] = "Hidden");
        })((t = e.FieldType || (e.FieldType = {})));
        var n = (function () {
          function n() {}
          return (
            (n.serialize = function (e) {
              var t = n._serializeObject(e, "root");
              return JSON.stringify(t);
            }),
            (n._serializeObject = function (i, a) {
              var r = "__aiCircularRefCheck",
                o = {};
              if (!i)
                return (
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.CRITICAL,
                    e._InternalMessageId.CannotSerializeObject,
                    "cannot serialize object because it is null or undefined",
                    { name: a },
                    !0,
                  ),
                  o
                );
              if (i[r])
                return (
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.WARNING,
                    e._InternalMessageId.CircularReferenceDetected,
                    "Circular reference detected while serializing object",
                    { name: a },
                    !0,
                  ),
                  o
                );
              if (!i.aiDataContract) {
                if ("measurements" === a)
                  o = n._serializeStringMap(i, "number", a);
                else if ("properties" === a)
                  o = n._serializeStringMap(i, "string", a);
                else if ("tags" === a)
                  o = n._serializeStringMap(i, "string", a);
                else if (e.Util.isArray(i)) o = n._serializeArray(i, a);
                else {
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.WARNING,
                    e._InternalMessageId.CannotSerializeObjectNonSerializable,
                    "Attempting to serialize an object which does not implement ISerializable",
                    { name: a },
                    !0,
                  );
                  try {
                    JSON.stringify(i), (o = i);
                  } catch (s) {
                    e._InternalLogging.throwInternal(
                      e.LoggingSeverity.CRITICAL,
                      e._InternalMessageId.CannotSerializeObject,
                      s && "function" == typeof s.toString
                        ? s.toString()
                        : "Error serializing object",
                      null,
                      !0,
                    );
                  }
                }
                return o;
              }
              i[r] = !0;
              for (var l in i.aiDataContract) {
                var c = i.aiDataContract[l],
                  d =
                    "function" == typeof c ? c() & t.Required : c & t.Required,
                  u = "function" == typeof c ? c() & t.Hidden : c & t.Hidden,
                  p = c & t.Array,
                  f = void 0 !== i[l],
                  g = "object" == typeof i[l] && null !== i[l];
                if (!d || f || p) {
                  if (!u) {
                    var m;
                    (m = g
                      ? p
                        ? n._serializeArray(i[l], l)
                        : n._serializeObject(i[l], l)
                      : i[l]),
                      void 0 !== m && (o[l] = m);
                  }
                } else
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.CRITICAL,
                    e._InternalMessageId.MissingRequiredFieldSpecification,
                    "Missing required field specification. The field is required but not present on source",
                    { field: l, name: a },
                  );
              }
              return delete i[r], o;
            }),
            (n._serializeArray = function (t, i) {
              var a = void 0;
              if (t)
                if (e.Util.isArray(t)) {
                  a = [];
                  for (var r = 0; r < t.length; r++) {
                    var o = t[r],
                      s = n._serializeObject(o, i + "[" + r + "]");
                    a.push(s);
                  }
                } else
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.CRITICAL,
                    e._InternalMessageId.ItemNotInArray,
                    "This field was specified as an array in the contract but the item is not an array.\r\n",
                    { name: i },
                    !0,
                  );
              return a;
            }),
            (n._serializeStringMap = function (t, n, i) {
              var a = void 0;
              if (t) {
                a = {};
                for (var r in t) {
                  var o = t[r];
                  if ("string" === n)
                    void 0 === o
                      ? (a[r] = "undefined")
                      : null === o
                      ? (a[r] = "null")
                      : o.toString
                      ? (a[r] = o.toString())
                      : (a[r] = "invalid field: toString() is not defined.");
                  else if ("number" === n)
                    if (void 0 === o) a[r] = "undefined";
                    else if (null === o) a[r] = "null";
                    else {
                      var s = parseFloat(o);
                      isNaN(s) ? (a[r] = "NaN") : (a[r] = s);
                    }
                  else
                    (a[r] = "invalid field: " + i + " is of unknown type."),
                      e._InternalLogging.throwInternal(
                        e.LoggingSeverity.CRITICAL,
                        a[r],
                        null,
                        !0,
                      );
                }
              }
              return a;
            }),
            n
          );
        })();
        e.Serializer = n;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (t) {
        var n;
        !(function (n) {
          var a;
          !(function (n) {
            var a = (function (e) {
              function a(i, a) {
                var r = e.call(this) || this;
                return (
                  (r.name =
                    n.DataSanitizer.sanitizeString(a) || t.Util.NotSpecified),
                  (r.data = i),
                  (r.time = t.Util.toISOStringForIE8(new Date())),
                  (r.aiDataContract = {
                    time: t.FieldType.Required,
                    iKey: t.FieldType.Required,
                    name: t.FieldType.Required,
                    sampleRate: function () {
                      return 100 == r.sampleRate
                        ? t.FieldType.Hidden
                        : t.FieldType.Required;
                    },
                    tags: t.FieldType.Required,
                    data: t.FieldType.Required,
                  }),
                  r
                );
              }
              return i(a, e), a;
            })(e.Telemetry.Envelope);
            n.Envelope = a;
          })((a = n.Common || (n.Common = {})));
        })((n = t.Telemetry || (t.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (t) {
        var n;
        !(function (t) {
          var n;
          !(function (t) {
            var n = (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.aiDataContract = {}), t;
              }
              return i(t, e), t;
            })(e.Telemetry.Base);
            t.Base = n;
          })((n = t.Common || (t.Common = {})));
        })((n = t.Telemetry || (t.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var a;
    !(function (e) {
      var t = (function () {
        function e() {
          (this.applicationVersion = "ai.application.ver"),
            (this.applicationBuild = "ai.application.build"),
            (this.applicationTypeId = "ai.application.typeId"),
            (this.applicationId = "ai.application.applicationId"),
            (this.deviceId = "ai.device.id"),
            (this.deviceIp = "ai.device.ip"),
            (this.deviceLanguage = "ai.device.language"),
            (this.deviceLocale = "ai.device.locale"),
            (this.deviceModel = "ai.device.model"),
            (this.deviceNetwork = "ai.device.network"),
            (this.deviceNetworkName = "ai.device.networkName"),
            (this.deviceOEMName = "ai.device.oemName"),
            (this.deviceOS = "ai.device.os"),
            (this.deviceOSVersion = "ai.device.osVersion"),
            (this.deviceRoleInstance = "ai.device.roleInstance"),
            (this.deviceRoleName = "ai.device.roleName"),
            (this.deviceScreenResolution = "ai.device.screenResolution"),
            (this.deviceType = "ai.device.type"),
            (this.deviceMachineName = "ai.device.machineName"),
            (this.deviceVMName = "ai.device.vmName"),
            (this.locationIp = "ai.location.ip"),
            (this.operationId = "ai.operation.id"),
            (this.operationName = "ai.operation.name"),
            (this.operationParentId = "ai.operation.parentId"),
            (this.operationRootId = "ai.operation.rootId"),
            (this.operationSyntheticSource = "ai.operation.syntheticSource"),
            (this.operationIsSynthetic = "ai.operation.isSynthetic"),
            (this.operationCorrelationVector =
              "ai.operation.correlationVector"),
            (this.sessionId = "ai.session.id"),
            (this.sessionIsFirst = "ai.session.isFirst"),
            (this.sessionIsNew = "ai.session.isNew"),
            (this.userAccountAcquisitionDate =
              "ai.user.accountAcquisitionDate"),
            (this.userAccountId = "ai.user.accountId"),
            (this.userAgent = "ai.user.userAgent"),
            (this.userId = "ai.user.id"),
            (this.userStoreRegion = "ai.user.storeRegion"),
            (this.userAuthUserId = "ai.user.authUserId"),
            (this.userAnonymousUserAcquisitionDate =
              "ai.user.anonUserAcquisitionDate"),
            (this.userAuthenticatedUserAcquisitionDate =
              "ai.user.authUserAcquisitionDate"),
            (this.sampleRate = "ai.sample.sampleRate"),
            (this.cloudName = "ai.cloud.name"),
            (this.cloudRoleVer = "ai.cloud.roleVer"),
            (this.cloudEnvironment = "ai.cloud.environment"),
            (this.cloudLocation = "ai.cloud.location"),
            (this.cloudDeploymentUnit = "ai.cloud.deploymentUnit"),
            (this.serverDeviceOS = "ai.serverDevice.os"),
            (this.serverDeviceOSVer = "ai.serverDevice.osVer"),
            (this.internalSdkVersion = "ai.internal.sdkVersion"),
            (this.internalAgentVersion = "ai.internal.agentVersion"),
            (this.internalDataCollectorReceivedTime =
              "ai.internal.dataCollectorReceivedTime"),
            (this.internalProfileId = "ai.internal.profileId"),
            (this.internalProfileClassId = "ai.internal.profileClassId"),
            (this.internalAccountId = "ai.internal.accountId"),
            (this.internalApplicationName = "ai.internal.applicationName"),
            (this.internalInstrumentationKey =
              "ai.internal.instrumentationKey"),
            (this.internalTelemetryItemId = "ai.internal.telemetryItemId"),
            (this.internalApplicationType = "ai.internal.applicationType"),
            (this.internalRequestSource = "ai.internal.requestSource"),
            (this.internalFlowType = "ai.internal.flowType"),
            (this.internalIsAudit = "ai.internal.isAudit"),
            (this.internalTrackingSourceId = "ai.internal.trackingSourceId"),
            (this.internalTrackingType = "ai.internal.trackingType"),
            (this.internalIsDiagnosticExample =
              "ai.internal.isDiagnosticExample");
        }
        return e;
      })();
      e.ContextTagKeys = t;
    })(a || (a = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {
          var t = (function () {
            function e() {}
            return e;
          })();
          e.Application = t;
        })((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {
          var t = (function () {
            function e() {
              (this.id = "browser"), (this.type = "Browser");
            }
            return e;
          })();
          e.Device = t;
        })((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function () {
            function t(t) {
              this.sdkVersion =
                (t.sdkExtension() ? t.sdkExtension() + "_" : "") +
                "javascript:" +
                e.Version;
            }
            return t;
          })();
          t.Internal = n;
        })((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (e) {
          var t = (function () {
            function e() {}
            return e;
          })();
          e.Location = t;
        })((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function () {
            function t() {
              (this.id = e.Util.newId()),
                window &&
                  window.location &&
                  window.location.pathname &&
                  (this.name = window.location.pathname);
            }
            return t;
          })();
          t.Operation = n;
        })((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t = (function () {
          function e() {}
          return (
            (e.prototype.getHashCodeScore = function (t) {
              var n = this.getHashCode(t) / e.INT_MAX_VALUE;
              return 100 * n;
            }),
            (e.prototype.getHashCode = function (t) {
              if ("" == t) return 0;
              for (; t.length < e.MIN_INPUT_LENGTH; ) t = t.concat(t);
              for (var n = 5381, i = 0; i < t.length; ++i)
                (n = (n << 5) + n + t.charCodeAt(i)), (n &= n);
              return Math.abs(n);
            }),
            (e.INT_MAX_VALUE = 2147483647),
            (e.MIN_INPUT_LENGTH = 8),
            e
          );
        })();
        e.HashCodeScoreGenerator = t;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t = (function () {
          function t() {
            this.hashCodeGeneragor = new e.HashCodeScoreGenerator();
          }
          return (
            (t.prototype.getSamplingScore = function (e) {
              var t = new a.ContextTagKeys(),
                n = 0;
              return (n = e.tags[t.userId]
                ? this.hashCodeGeneragor.getHashCodeScore(e.tags[t.userId])
                : e.tags[t.operationId]
                ? this.hashCodeGeneragor.getHashCodeScore(e.tags[t.operationId])
                : Math.random());
            }),
            t
          );
        })();
        e.SamplingScoreGenerator = t;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function () {
            function t(t) {
              (this.INT_MAX_VALUE = 2147483647),
                (t > 100 || t < 0) &&
                  (e._InternalLogging.throwInternal(
                    e.LoggingSeverity.WARNING,
                    e._InternalMessageId.SampleRateOutOfRange,
                    "Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.",
                    { samplingRate: t },
                    !0,
                  ),
                  (this.sampleRate = 100)),
                (this.sampleRate = t),
                (this.samplingScoreGenerator = new e.SamplingScoreGenerator());
            }
            return (
              (t.prototype.isSampledIn = function (e) {
                if (100 == this.sampleRate) return !0;
                var t = this.samplingScoreGenerator.getSamplingScore(e);
                return t < this.sampleRate;
              }),
              t
            );
          })();
          t.Sample = n;
        })((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var a;
    !(function (e) {
      var t;
      !(function (e) {
        (e[(e.Start = 0)] = "Start"), (e[(e.End = 1)] = "End");
      })((t = e.SessionState || (e.SessionState = {})));
    })(a || (a = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function () {
            function e() {}
            return e;
          })();
          t.Session = n;
          var i = (function () {
            function t(e) {
              e || (e = {}),
                "function" != typeof e.sessionExpirationMs &&
                  (e.sessionExpirationMs = function () {
                    return t.acquisitionSpan;
                  }),
                "function" != typeof e.sessionRenewalMs &&
                  (e.sessionRenewalMs = function () {
                    return t.renewalSpan;
                  }),
                (this.config = e),
                (this.automaticSession = new n());
            }
            return (
              (t.prototype.update = function () {
                this.automaticSession.id || this.initializeAutomaticSession();
                var n = e.dateTime.Now(),
                  i =
                    n - this.automaticSession.acquisitionDate >
                    this.config.sessionExpirationMs(),
                  a =
                    n - this.automaticSession.renewalDate >
                    this.config.sessionRenewalMs();
                i || a
                  ? ((this.automaticSession.isFirst = void 0), this.renew())
                  : (!this.cookieUpdatedTimestamp ||
                      n - this.cookieUpdatedTimestamp >
                        t.cookieUpdateInterval) &&
                    ((this.automaticSession.renewalDate = n),
                    this.setCookie(
                      this.automaticSession.id,
                      this.automaticSession.acquisitionDate,
                      this.automaticSession.renewalDate,
                    ));
              }),
              (t.prototype.backup = function () {
                this.setStorage(
                  this.automaticSession.id,
                  this.automaticSession.acquisitionDate,
                  this.automaticSession.renewalDate,
                );
              }),
              (t.prototype.initializeAutomaticSession = function () {
                var t = e.Util.getCookie("ai_session");
                if (t && "function" == typeof t.split)
                  this.initializeAutomaticSessionWithData(t);
                else {
                  var n = e.Util.getStorage("ai_session");
                  n && this.initializeAutomaticSessionWithData(n);
                }
                this.automaticSession.id ||
                  ((this.automaticSession.isFirst = !0), this.renew());
              }),
              (t.prototype.initializeAutomaticSessionWithData = function (t) {
                var n = t.split("|");
                n.length > 0 && (this.automaticSession.id = n[0]);
                try {
                  if (n.length > 1) {
                    var i = +n[1];
                    (this.automaticSession.acquisitionDate = +new Date(i)),
                      (this.automaticSession.acquisitionDate =
                        this.automaticSession.acquisitionDate > 0
                          ? this.automaticSession.acquisitionDate
                          : 0);
                  }
                  if (n.length > 2) {
                    var a = +n[2];
                    (this.automaticSession.renewalDate = +new Date(a)),
                      (this.automaticSession.renewalDate =
                        this.automaticSession.renewalDate > 0
                          ? this.automaticSession.renewalDate
                          : 0);
                  }
                } catch (r) {
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.CRITICAL,
                    e._InternalMessageId.ErrorParsingAISessionCookie,
                    "Error parsing ai_session cookie, session will be reset: " +
                      e.Util.getExceptionName(r),
                    { exception: e.Util.dump(r) },
                  );
                }
                0 == this.automaticSession.renewalDate &&
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.WARNING,
                    e._InternalMessageId.SessionRenewalDateIsZero,
                    "AI session renewal date is 0, session will be reset.",
                  );
              }),
              (t.prototype.renew = function () {
                var t = e.dateTime.Now();
                (this.automaticSession.id = e.Util.newId()),
                  (this.automaticSession.acquisitionDate = t),
                  (this.automaticSession.renewalDate = t),
                  this.setCookie(
                    this.automaticSession.id,
                    this.automaticSession.acquisitionDate,
                    this.automaticSession.renewalDate,
                  ),
                  e.Util.canUseLocalStorage() ||
                    e._InternalLogging.throwInternal(
                      e.LoggingSeverity.WARNING,
                      e._InternalMessageId.BrowserDoesNotSupportLocalStorage,
                      "Browser does not support local storage. Session durations will be inaccurate.",
                    );
              }),
              (t.prototype.setCookie = function (t, n, i) {
                var a = n + this.config.sessionExpirationMs(),
                  r = i + this.config.sessionRenewalMs(),
                  o = new Date(),
                  s = [t, n, i];
                a < r ? o.setTime(a) : o.setTime(r);
                var l = this.config.cookieDomain
                  ? this.config.cookieDomain()
                  : null;
                e.Util.setCookie(
                  "ai_session",
                  s.join("|") + ";expires=" + o.toUTCString(),
                  l,
                ),
                  (this.cookieUpdatedTimestamp = e.dateTime.Now());
              }),
              (t.prototype.setStorage = function (t, n, i) {
                e.Util.setStorage("ai_session", [t, n, i].join("|"));
              }),
              (t.acquisitionSpan = 864e5),
              (t.renewalSpan = 18e5),
              (t.cookieUpdateInterval = 6e4),
              t
            );
          })();
          t._SessionManager = i;
        })((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function () {
            function t(n) {
              var i = e.Util.getCookie(t.userCookieName);
              if (i) {
                var a = i.split(t.cookieSeparator);
                a.length > 0 && (this.id = a[0]);
              }
              if (((this.config = n), !this.id)) {
                this.id = e.Util.newId();
                var r = new Date(),
                  o = e.Util.toISOStringForIE8(r);
                (this.accountAcquisitionDate = o),
                  r.setTime(r.getTime() + 31536e6);
                var s = [this.id, o],
                  l = this.config.cookieDomain
                    ? this.config.cookieDomain()
                    : void 0;
                e.Util.setCookie(
                  t.userCookieName,
                  s.join(t.cookieSeparator) + ";expires=" + r.toUTCString(),
                  l,
                ),
                  e.Util.removeStorage("ai_session");
              }
              this.accountId = n.accountId ? n.accountId() : void 0;
              var c = e.Util.getCookie(t.authUserCookieName);
              if (c) {
                c = decodeURI(c);
                var d = c.split(t.cookieSeparator);
                d[0] && (this.authenticatedId = d[0]),
                  d.length > 1 && d[1] && (this.accountId = d[1]);
              }
            }
            return (
              (t.prototype.setAuthenticatedUserContext = function (n, i) {
                var a =
                  !this.validateUserInput(n) ||
                  (i && !this.validateUserInput(i));
                if (a)
                  return void e._InternalLogging.throwInternal(
                    e.LoggingSeverity.WARNING,
                    e._InternalMessageId.SetAuthContextFailedAccountName,
                    "Setting auth user context failed. User auth/account id should be of type string, and not contain commas, semi-colons, equal signs, spaces, or vertical-bars.",
                    !0,
                  );
                this.authenticatedId = n;
                var r = this.authenticatedId;
                i &&
                  ((this.accountId = i),
                  (r = [this.authenticatedId, this.accountId].join(
                    t.cookieSeparator,
                  ))),
                  e.Util.setCookie(
                    t.authUserCookieName,
                    encodeURI(r),
                    this.config.cookieDomain(),
                  );
              }),
              (t.prototype.clearAuthenticatedUserContext = function () {
                (this.authenticatedId = null),
                  (this.accountId = null),
                  e.Util.deleteCookie(t.authUserCookieName);
              }),
              (t.prototype.validateUserInput = function (e) {
                return !("string" != typeof e || !e || e.match(/,|;|=| |\|/));
              }),
              (t.cookieSeparator = "|"),
              (t.userCookieName = "ai_user"),
              (t.authUserCookieName = "ai_authUser"),
              t
            );
          })();
          t.User = n;
        })((t = e.Context || (e.Context = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t = (function () {
          function e() {}
          return (
            (e.IsNullOrUndefined = function (e) {
              return "undefined" == typeof e || null === e;
            }),
            e
          );
        })();
        e.extensions = t;
        var n = (function () {
          function e() {}
          return (
            (e.GetLength = function (e) {
              var n = 0;
              if (!t.IsNullOrUndefined(e)) {
                var i = "";
                try {
                  i = e.toString();
                } catch (a) {}
                (n = i.length), (n = isNaN(n) ? 0 : n);
              }
              return n;
            }),
            e
          );
        })();
        e.stringUtils = n;
        var i = (function () {
          function e() {}
          return (
            (e.Now =
              window.performance &&
              window.performance.now &&
              window.performance.timing
                ? function () {
                    return (
                      window.performance.now() +
                      window.performance.timing.navigationStart
                    );
                  }
                : function () {
                    return new Date().getTime();
                  }),
            (e.GetDuration = function (e, n) {
              var i = null;
              return (
                0 === e ||
                  0 === n ||
                  t.IsNullOrUndefined(e) ||
                  t.IsNullOrUndefined(n) ||
                  (i = n - e),
                i
              );
            }),
            e
          );
        })();
        e.dateTime = i;
        var a = (function () {
          function e() {}
          return (
            (e.AttachEvent = function (e, n, i) {
              var a = !1;
              return (
                t.IsNullOrUndefined(e) ||
                  (t.IsNullOrUndefined(e.attachEvent)
                    ? t.IsNullOrUndefined(e.addEventListener) ||
                      (e.addEventListener(n, i, !1), (a = !0))
                    : (e.attachEvent("on" + n, i), (a = !0))),
                a
              );
            }),
            (e.DetachEvent = function (e, n, i) {
              t.IsNullOrUndefined(e) ||
                (t.IsNullOrUndefined(e.detachEvent)
                  ? t.IsNullOrUndefined(e.removeEventListener) ||
                    e.removeEventListener(n, i, !1)
                  : e.detachEvent("on" + n, i));
            }),
            e
          );
        })();
        e.EventHelper = a;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t = (function () {
          function e() {
            (this.openDone = !1),
              (this.setRequestHeaderDone = !1),
              (this.sendDone = !1),
              (this.abortDone = !1),
              (this.onreadystatechangeCallbackAttached = !1);
          }
          return e;
        })();
        e.XHRMonitoringState = t;
        var n = (function () {
          function n(n) {
            (this.completed = !1),
              (this.requestHeadersSize = null),
              (this.ttfb = null),
              (this.responseReceivingDuration = null),
              (this.callbackDuration = null),
              (this.ajaxTotalDuration = null),
              (this.aborted = null),
              (this.pageUrl = null),
              (this.requestUrl = null),
              (this.requestSize = 0),
              (this.method = null),
              (this.status = null),
              (this.requestSentTime = null),
              (this.responseStartedTime = null),
              (this.responseFinishedTime = null),
              (this.callbackFinishedTime = null),
              (this.endTime = null),
              (this.originalOnreadystatechage = null),
              (this.xhrMonitoringState = new t()),
              (this.clientFailure = 0),
              (this.CalculateMetrics = function () {
                var t = this;
                t.ajaxTotalDuration =
                  Math.round(
                    1e3 *
                      e.dateTime.GetDuration(
                        t.requestSentTime,
                        t.responseFinishedTime,
                      ),
                  ) / 1e3;
              }),
              (this.id = n);
          }
          return (
            (n.prototype.getAbsoluteUrl = function () {
              return this.requestUrl
                ? e.UrlHelper.getAbsoluteUrl(this.requestUrl)
                : null;
            }),
            (n.prototype.getPathName = function () {
              return this.requestUrl
                ? e.Telemetry.Common.DataSanitizer.sanitizeUrl(
                    e.UrlHelper.getCompleteUrl(this.method, this.requestUrl),
                  )
                : null;
            }),
            n
          );
        })();
        e.ajaxRecord = n;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (t) {
        var n = (function () {
          function n(e) {
            (this.currentWindowHost = window.location.host),
              (this.appInsights = e),
              (this.initialized = !1),
              this.Init();
          }
          return (
            (n.prototype.Init = function () {
              this.supportsMonitoring() &&
                (this.instrumentOpen(),
                this.instrumentSend(),
                this.instrumentAbort(),
                (this.initialized = !0));
            }),
            (n.prototype.isMonitoredInstance = function (e, i) {
              return (
                this.initialized &&
                (i === !0 || !t.extensions.IsNullOrUndefined(e.ajaxData)) &&
                e[n.DisabledPropertyName] !== !0
              );
            }),
            (n.prototype.supportsMonitoring = function () {
              var e = !1;
              return (
                t.extensions.IsNullOrUndefined(XMLHttpRequest) || (e = !0), e
              );
            }),
            (n.prototype.instrumentOpen = function () {
              var i = XMLHttpRequest.prototype.open,
                a = this;
              XMLHttpRequest.prototype.open = function (r, o, s) {
                try {
                  !a.isMonitoredInstance(this, !0) ||
                    (this.ajaxData &&
                      this.ajaxData.xhrMonitoringState.openDone) ||
                    a.openHandler(this, r, o, s);
                } catch (l) {
                  t._InternalLogging.throwInternal(
                    t.LoggingSeverity.CRITICAL,
                    t._InternalMessageId.FailedMonitorAjaxOpen,
                    "Failed to monitor XMLHttpRequest.open, monitoring data for this ajax call may be incorrect.",
                    {
                      ajaxDiagnosticsMessage:
                        n.getFailedAjaxDiagnosticsMessage(this),
                      exception: e.ApplicationInsights.Util.dump(l),
                    },
                  );
                }
                return i.apply(this, arguments);
              };
            }),
            (n.prototype.openHandler = function (e, n, i, a) {
              var r = new t.ajaxRecord(t.Util.newId());
              (r.method = n),
                (r.requestUrl = i),
                (r.xhrMonitoringState.openDone = !0),
                (e.ajaxData = r),
                this.attachToOnReadyStateChange(e);
            }),
            (n.getFailedAjaxDiagnosticsMessage = function (e) {
              var n = "";
              try {
                t.extensions.IsNullOrUndefined(e) ||
                  t.extensions.IsNullOrUndefined(e.ajaxData) ||
                  t.extensions.IsNullOrUndefined(e.ajaxData.requestUrl) ||
                  (n += "(url: '" + e.ajaxData.requestUrl + "')");
              } catch (i) {}
              return n;
            }),
            (n.prototype.instrumentSend = function () {
              var i = XMLHttpRequest.prototype.send,
                a = this;
              XMLHttpRequest.prototype.send = function (r) {
                try {
                  a.isMonitoredInstance(this) &&
                    !this.ajaxData.xhrMonitoringState.sendDone &&
                    a.sendHandler(this, r);
                } catch (o) {
                  t._InternalLogging.throwInternal(
                    t.LoggingSeverity.CRITICAL,
                    t._InternalMessageId.FailedMonitorAjaxSend,
                    "Failed to monitor XMLHttpRequest, monitoring data for this ajax call may be incorrect.",
                    {
                      ajaxDiagnosticsMessage:
                        n.getFailedAjaxDiagnosticsMessage(this),
                      exception: e.ApplicationInsights.Util.dump(o),
                    },
                  );
                }
                return i.apply(this, arguments);
              };
            }),
            (n.prototype.sendHandler = function (e, n) {
              if (
                ((e.ajaxData.requestSentTime = t.dateTime.Now()),
                !this.appInsights.config.disableCorrelationHeaders &&
                  t.UrlHelper.parseUrl(e.ajaxData.getAbsoluteUrl()).host ==
                    this.currentWindowHost)
              ) {
                var i = this.appInsights.context.operation.id;
                e.setRequestHeader("x-ms-request-root-id", i),
                  e.setRequestHeader("x-ms-request-id", e.ajaxData.id);
              }
              e.ajaxData.xhrMonitoringState.sendDone = !0;
            }),
            (n.prototype.instrumentAbort = function () {
              var i = XMLHttpRequest.prototype.abort,
                a = this;
              XMLHttpRequest.prototype.abort = function () {
                try {
                  a.isMonitoredInstance(this) &&
                    !this.ajaxData.xhrMonitoringState.abortDone &&
                    ((this.ajaxData.aborted = 1),
                    (this.ajaxData.xhrMonitoringState.abortDone = !0));
                } catch (r) {
                  t._InternalLogging.throwInternal(
                    t.LoggingSeverity.CRITICAL,
                    t._InternalMessageId.FailedMonitorAjaxAbort,
                    "Failed to monitor XMLHttpRequest.abort, monitoring data for this ajax call may be incorrect.",
                    {
                      ajaxDiagnosticsMessage:
                        n.getFailedAjaxDiagnosticsMessage(this),
                      exception: e.ApplicationInsights.Util.dump(r),
                    },
                  );
                }
                return i.apply(this, arguments);
              };
            }),
            (n.prototype.attachToOnReadyStateChange = function (i) {
              var a = this;
              i.ajaxData.xhrMonitoringState.onreadystatechangeCallbackAttached =
                t.EventHelper.AttachEvent(i, "readystatechange", function () {
                  try {
                    a.isMonitoredInstance(i) &&
                      4 === i.readyState &&
                      a.onAjaxComplete(i);
                  } catch (r) {
                    var o = e.ApplicationInsights.Util.dump(r);
                    (o && o.toLowerCase().indexOf("c00c023f") != -1) ||
                      t._InternalLogging.throwInternal(
                        t.LoggingSeverity.CRITICAL,
                        t._InternalMessageId.FailedMonitorAjaxRSC,
                        "Failed to monitor XMLHttpRequest 'readystatechange' event handler, monitoring data for this ajax call may be incorrect.",
                        {
                          ajaxDiagnosticsMessage:
                            n.getFailedAjaxDiagnosticsMessage(i),
                          exception: e.ApplicationInsights.Util.dump(r),
                        },
                      );
                  }
                });
            }),
            (n.prototype.onAjaxComplete = function (e) {
              (e.ajaxData.responseFinishedTime = t.dateTime.Now()),
                (e.ajaxData.status = e.status),
                e.ajaxData.CalculateMetrics(),
                e.ajaxData.ajaxTotalDuration < 0
                  ? t._InternalLogging.throwInternal(
                      t.LoggingSeverity.WARNING,
                      t._InternalMessageId.FailedMonitorAjaxDur,
                      "Failed to calculate the duration of the ajax call, monitoring data for this ajax call won't be sent.",
                      {
                        ajaxDiagnosticsMessage:
                          n.getFailedAjaxDiagnosticsMessage(e),
                        requestSentTime: e.ajaxData.requestSentTime,
                        responseFinishedTime: e.ajaxData.responseFinishedTime,
                      },
                    )
                  : (this.appInsights.trackDependency(
                      e.ajaxData.id,
                      e.ajaxData.method,
                      e.ajaxData.getAbsoluteUrl(),
                      e.ajaxData.getPathName(),
                      e.ajaxData.ajaxTotalDuration,
                      +e.ajaxData.status >= 200 && +e.ajaxData.status < 400,
                      +e.ajaxData.status,
                    ),
                    (e.ajaxData = null));
            }),
            (n.instrumentedByAppInsightsName = "InstrumentedByAppInsights"),
            (n.DisabledPropertyName =
              "Microsoft_ApplicationInsights_BypassAjaxInstrumentation"),
            n
          );
        })();
        t.AjaxMonitor = n;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t = (function () {
          function e(e) {
            (this._config = e), (this._buffer = []);
          }
          return (
            (e.prototype.enqueue = function (e) {
              this._buffer.push(e);
            }),
            (e.prototype.count = function () {
              return this._buffer.length;
            }),
            (e.prototype.clear = function () {
              this._buffer.length = 0;
            }),
            (e.prototype.getItems = function () {
              return this._buffer.slice(0);
            }),
            (e.prototype.batchPayloads = function (e) {
              if (e && e.length > 0) {
                var t = this._config.emitLineDelimitedJson()
                  ? e.join("\n")
                  : "[" + e.join(",") + "]";
                return t;
              }
              return null;
            }),
            (e.prototype.markAsSent = function (e) {
              this.clear();
            }),
            (e.prototype.clearSent = function (e) {}),
            e
          );
        })();
        e.ArraySendBuffer = t;
        var n = (function () {
          function t(e) {
            (this._bufferFullMessageSent = !1), (this._config = e);
            var n = this.getBuffer(t.BUFFER_KEY),
              i = this.getBuffer(t.SENT_BUFFER_KEY);
            (this._buffer = n.concat(i)),
              this._buffer.length > t.MAX_BUFFER_SIZE &&
                (this._buffer.length = t.MAX_BUFFER_SIZE),
              this.setBuffer(t.SENT_BUFFER_KEY, []),
              this.setBuffer(t.BUFFER_KEY, this._buffer);
          }
          return (
            (t.prototype.enqueue = function (n) {
              return this._buffer.length >= t.MAX_BUFFER_SIZE
                ? void (
                    this._bufferFullMessageSent ||
                    (e._InternalLogging.throwInternal(
                      e.LoggingSeverity.WARNING,
                      e._InternalMessageId.SessionStorageBufferFull,
                      "Maximum buffer size reached: " + this._buffer.length,
                      !0,
                    ),
                    (this._bufferFullMessageSent = !0))
                  )
                : (this._buffer.push(n),
                  void this.setBuffer(t.BUFFER_KEY, this._buffer));
            }),
            (t.prototype.count = function () {
              return this._buffer.length;
            }),
            (t.prototype.clear = function () {
              (this._buffer.length = 0),
                this.setBuffer(t.BUFFER_KEY, []),
                this.setBuffer(t.SENT_BUFFER_KEY, []),
                (this._bufferFullMessageSent = !1);
            }),
            (t.prototype.getItems = function () {
              return this._buffer.slice(0);
            }),
            (t.prototype.batchPayloads = function (e) {
              if (e && e.length > 0) {
                var t = this._config.emitLineDelimitedJson()
                  ? e.join("\n")
                  : "[" + e.join(",") + "]";
                return t;
              }
              return null;
            }),
            (t.prototype.markAsSent = function (n) {
              (this._buffer = this.removePayloadsFromBuffer(n, this._buffer)),
                this.setBuffer(t.BUFFER_KEY, this._buffer);
              var i = this.getBuffer(t.SENT_BUFFER_KEY);
              i instanceof Array &&
                n instanceof Array &&
                ((i = i.concat(n)),
                i.length > t.MAX_BUFFER_SIZE &&
                  (e._InternalLogging.throwInternal(
                    e.LoggingSeverity.CRITICAL,
                    e._InternalMessageId.SessionStorageBufferFull,
                    "Sent buffer reached its maximum size: " + i.length,
                    !0,
                  ),
                  (i.length = t.MAX_BUFFER_SIZE)),
                this.setBuffer(t.SENT_BUFFER_KEY, i));
            }),
            (t.prototype.clearSent = function (e) {
              var n = this.getBuffer(t.SENT_BUFFER_KEY);
              (n = this.removePayloadsFromBuffer(e, n)),
                this.setBuffer(t.SENT_BUFFER_KEY, n);
            }),
            (t.prototype.removePayloadsFromBuffer = function (e, t) {
              var n = [];
              for (var i in t) {
                var a = !1;
                for (var r in e)
                  if (e[r] === t[i]) {
                    a = !0;
                    break;
                  }
                a || n.push(t[i]);
              }
              return n;
            }),
            (t.prototype.getBuffer = function (t) {
              try {
                var n = e.Util.getSessionStorage(t);
                if (n) {
                  var i = JSON.parse(n);
                  if (i) return i;
                }
              } catch (a) {
                e._InternalLogging.throwInternal(
                  e.LoggingSeverity.CRITICAL,
                  e._InternalMessageId.FailedToRestoreStorageBuffer,
                  " storage key: " + t + ", " + e.Util.getExceptionName(a),
                  { exception: e.Util.dump(a) },
                );
              }
              return [];
            }),
            (t.prototype.setBuffer = function (t, n) {
              try {
                var i = JSON.stringify(n);
                e.Util.setSessionStorage(t, i);
              } catch (a) {
                e.Util.setSessionStorage(t, JSON.stringify([])),
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.WARNING,
                    e._InternalMessageId.FailedToSetStorageBuffer,
                    " storage key: " +
                      t +
                      ", " +
                      e.Util.getExceptionName(a) +
                      ". Buffer cleared",
                    { exception: e.Util.dump(a) },
                  );
              }
            }),
            (t.BUFFER_KEY = "AI_buffer"),
            (t.SENT_BUFFER_KEY = "AI_sentBuffer"),
            (t.MAX_BUFFER_SIZE = 2e3),
            t
          );
        })();
        e.SessionStorageSendBuffer = n;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t = (function () {
          function t(t) {
            if (
              ((this._XMLHttpRequestSupported = !1),
              (this._consecutiveErrors = 0),
              (this._retryAt = null),
              (this._lastSend = 0),
              (this._config = t),
              (this._sender = null),
              (this._buffer =
                e.Util.canUseSessionStorage() &&
                this._config.enableSessionStorageBuffer()
                  ? new e.SessionStorageSendBuffer(t)
                  : new e.ArraySendBuffer(t)),
              !this._config.isBeaconApiDisabled() &&
                e.Util.IsBeaconApiSupported())
            )
              this._sender = this._beaconSender;
            else if ("undefined" != typeof XMLHttpRequest) {
              var n = new XMLHttpRequest();
              "withCredentials" in n
                ? ((this._sender = this._xhrSender),
                  (this._XMLHttpRequestSupported = !0))
                : "undefined" != typeof XDomainRequest &&
                  (this._sender = this._xdrSender);
            }
          }
          return (
            (t.prototype.send = function (t) {
              try {
                if (this._config.disableTelemetry()) return;
                if (!t)
                  return void e._InternalLogging.throwInternal(
                    e.LoggingSeverity.CRITICAL,
                    e._InternalMessageId.CannotSendEmptyTelemetry,
                    "Cannot send empty telemetry",
                  );
                if (!this._sender)
                  return void e._InternalLogging.throwInternal(
                    e.LoggingSeverity.CRITICAL,
                    e._InternalMessageId.SenderNotInitialized,
                    "Sender was not initialized",
                  );
                var n = e.Serializer.serialize(t),
                  i = this._buffer.getItems(),
                  a = this._buffer.batchPayloads(i);
                a &&
                  a.length + n.length > this._config.maxBatchSizeInBytes() &&
                  this.triggerSend(),
                  this._buffer.enqueue(n),
                  this._setupTimer();
              } catch (r) {
                e._InternalLogging.throwInternal(
                  e.LoggingSeverity.WARNING,
                  e._InternalMessageId.FailedAddingTelemetryToBuffer,
                  "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " +
                    e.Util.getExceptionName(r),
                  { exception: e.Util.dump(r) },
                );
              }
            }),
            (t.prototype._setupTimer = function () {
              var e = this;
              if (!this._timeoutHandle) {
                var t = this._retryAt
                    ? Math.max(0, this._retryAt - Date.now())
                    : 0,
                  n = Math.max(this._config.maxBatchInterval(), t);
                this._timeoutHandle = setTimeout(function () {
                  e.triggerSend();
                }, n);
              }
            }),
            (t.prototype._getSizeInBytes = function (e) {
              var t = 0;
              if (e && e.length)
                for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  i && i.length && (t += i.length);
                }
              return t;
            }),
            (t.prototype.triggerSend = function (t) {
              void 0 === t && (t = !0);
              try {
                if (this._config.disableTelemetry()) this._buffer.clear();
                else {
                  if (this._buffer.count() > 0) {
                    var n = this._buffer.getItems();
                    this._sender(n, t);
                  }
                  this._lastSend = +new Date();
                }
                clearTimeout(this._timeoutHandle),
                  (this._timeoutHandle = null),
                  (this._retryAt = null);
              } catch (i) {
                (!e.Util.getIEVersion() || e.Util.getIEVersion() > 9) &&
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.CRITICAL,
                    e._InternalMessageId.TransmissionFailed,
                    "Telemetry transmission failed, some telemetry will be lost: " +
                      e.Util.getExceptionName(i),
                    { exception: e.Util.dump(i) },
                  );
              }
            }),
            (t.prototype._setRetryTime = function () {
              var e,
                t = 10;
              if (this._consecutiveErrors <= 1) e = t;
              else {
                var n = (Math.pow(2, this._consecutiveErrors) - 1) / 2,
                  i = Math.floor(Math.random() * n * t) + 1;
                e = Math.max(Math.min(i, 3600), t);
              }
              var a = Date.now() + 1e3 * e;
              this._retryAt = a;
            }),
            (t.prototype._parseResponse = function (t) {
              try {
                var n = JSON.parse(t);
                if (
                  n &&
                  n.itemsReceived &&
                  n.itemsReceived >= n.itemsAccepted &&
                  n.itemsReceived - n.itemsAccepted == n.errors.length
                )
                  return n;
              } catch (i) {
                e._InternalLogging.throwInternal(
                  e.LoggingSeverity.CRITICAL,
                  e._InternalMessageId.InvalidBackendResponse,
                  "Cannot parse the response. " + e.Util.getExceptionName(i),
                );
              }
              return null;
            }),
            (t.prototype._isRetriable = function (e) {
              return 408 == e || 429 == e || 500 == e || 503 == e;
            }),
            (t.prototype._resendPayload = function (e) {
              if (e && 0 !== e.length) {
                this._buffer.clearSent(e), this._consecutiveErrors++;
                for (var t = 0, n = e; t < n.length; t++) {
                  var i = n[t];
                  this._buffer.enqueue(i);
                }
                this._setRetryTime(), this._setupTimer();
              }
            }),
            (t.prototype._formatErrorMessageXhr = function (e, t) {
              return e
                ? "XMLHttpRequest,Status:" +
                    e.status +
                    ",Response:" +
                    e.responseText ||
                    e.response ||
                    ""
                : t;
            }),
            (t.prototype._formatErrorMessageXdr = function (e, t) {
              return e ? "XDomainRequest,Response:" + e.responseText || "" : t;
            }),
            (t.prototype._xhrSender = function (t, n) {
              var i = this,
                a = new XMLHttpRequest();
              (a[e.AjaxMonitor.DisabledPropertyName] = !0),
                a.open("POST", this._config.endpointUrl(), n),
                a.setRequestHeader("Content-type", "application/json"),
                (a.onreadystatechange = function () {
                  return i._xhrReadyStateChange(a, t, t.length);
                }),
                (a.onerror = function (e) {
                  return i._onError(t, i._formatErrorMessageXhr(a), e);
                });
              var r = this._buffer.batchPayloads(t);
              a.send(r), this._buffer.markAsSent(t);
            }),
            (t.prototype._xdrSender = function (t, n) {
              var i = this,
                a = new XDomainRequest();
              (a.onload = function () {
                return i._xdrOnLoad(a, t);
              }),
                (a.onerror = function (e) {
                  return i._onError(t, i._formatErrorMessageXdr(a), e);
                });
              var r = window.location.protocol;
              if (0 !== this._config.endpointUrl().lastIndexOf(r, 0))
                return (
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.WARNING,
                    e._InternalMessageId.TransmissionFailed,
                    ". Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol.",
                  ),
                  void this._buffer.clear()
                );
              var o = this._config.endpointUrl().replace(/^(https?:)/, "");
              a.open("POST", o);
              var s = this._buffer.batchPayloads(t);
              a.send(s), this._buffer.markAsSent(t);
            }),
            (t.prototype._beaconSender = function (t, n) {
              var i = this._config.endpointUrl(),
                a = this._buffer.batchPayloads(t),
                r = navigator.sendBeacon(i, a);
              r
                ? this._buffer.markAsSent(t)
                : e._InternalLogging.throwInternal(
                    e.LoggingSeverity.CRITICAL,
                    e._InternalMessageId.TransmissionFailed,
                    ". Failed to send telemetry with Beacon API.",
                  );
            }),
            (t.prototype._xhrReadyStateChange = function (t, n, i) {
              if (4 === t.readyState)
                if ((t.status < 200 || t.status >= 300) && 0 !== t.status)
                  !this._config.isRetryDisabled() && this._isRetriable(t.status)
                    ? (this._resendPayload(n),
                      e._InternalLogging.throwInternal(
                        e.LoggingSeverity.WARNING,
                        e._InternalMessageId.TransmissionFailed,
                        ". Response code " +
                          t.status +
                          ". Will retry to send " +
                          n.length +
                          " items.",
                      ))
                    : this._onError(n, this._formatErrorMessageXhr(t));
                else if (206 === t.status) {
                  var a = this._parseResponse(t.responseText || t.response);
                  a && !this._config.isRetryDisabled()
                    ? this._onPartialSuccess(n, a)
                    : this._onError(n, this._formatErrorMessageXhr(t));
                } else (this._consecutiveErrors = 0), this._onSuccess(n, i);
            }),
            (t.prototype._xdrOnLoad = function (e, t) {
              if (
                !e ||
                (e.responseText + "" != "200" && "" !== e.responseText)
              ) {
                var n = this._parseResponse(e.responseText);
                n &&
                n.itemsReceived &&
                n.itemsReceived > n.itemsAccepted &&
                !this._config.isRetryDisabled()
                  ? this._onPartialSuccess(t, n)
                  : this._onError(t, this._formatErrorMessageXdr(e));
              } else (this._consecutiveErrors = 0), this._onSuccess(t, 0);
            }),
            (t.prototype._onPartialSuccess = function (t, n) {
              for (
                var i = [], a = [], r = n.errors.reverse(), o = 0, s = r;
                o < s.length;
                o++
              ) {
                var l = s[o],
                  c = t.splice(l.index, 1)[0];
                this._isRetriable(l.statusCode) ? a.push(c) : i.push(c);
              }
              t.length > 0 && this._onSuccess(t, n.itemsAccepted),
                i.length > 0 &&
                  this._onError(
                    i,
                    this._formatErrorMessageXhr(
                      null,
                      [
                        "partial success",
                        n.itemsAccepted,
                        "of",
                        n.itemsReceived,
                      ].join(" "),
                    ),
                  ),
                a.length > 0 &&
                  (this._resendPayload(a),
                  e._InternalLogging.throwInternal(
                    e.LoggingSeverity.WARNING,
                    e._InternalMessageId.TransmissionFailed,
                    "Partial success. Delivered: " +
                      t.length +
                      ", Failed: " +
                      i.length +
                      ". Will retry to send " +
                      a.length +
                      " our of " +
                      n.itemsReceived +
                      " items",
                  ));
            }),
            (t.prototype._onError = function (t, n, i) {
              e._InternalLogging.throwInternal(
                e.LoggingSeverity.WARNING,
                e._InternalMessageId.OnError,
                "Failed to send telemetry.",
                { message: n },
              ),
                this._buffer.clearSent(t);
            }),
            (t.prototype._onSuccess = function (e, t) {
              this._buffer.clearSent(e);
            }),
            (t.MaxBeaconPayloadSize = 65536),
            t
          );
        })();
        e.Sender = t;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t = (function () {
          function e() {}
          return e;
        })();
        e.Domain = t;
      })((t = e.Telemetry || (e.Telemetry = {})));
    })(n || (n = {}));
    var a;
    !(function (e) {
      var t = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (t.ver = 2), (t.properties = {}), (t = e.call(this) || this);
        }
        return i(t, e), t;
      })(n.Telemetry.Domain);
      e.MessageData = t;
    })(a || (a = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n;
          !(function (t) {
            var n = (function () {
              function t() {}
              return (
                (t.sanitizeKeyAndAddUniqueness = function (e, n) {
                  var i = e.length,
                    a = t.sanitizeKey(e);
                  if (a.length !== i) {
                    for (var r = 0, o = a; void 0 !== n[o]; )
                      r++,
                        (o =
                          a.substring(0, t.MAX_NAME_LENGTH - 3) +
                          t.padNumber(r));
                    a = o;
                  }
                  return a;
                }),
                (t.sanitizeKey = function (n) {
                  return (
                    n &&
                      ((n = e.Util.trim(n.toString())),
                      n.length > t.MAX_NAME_LENGTH &&
                        ((n = n.substring(0, t.MAX_NAME_LENGTH)),
                        e._InternalLogging.throwInternal(
                          e.LoggingSeverity.WARNING,
                          e._InternalMessageId.NameTooLong,
                          "name is too long.  It has been truncated to " +
                            t.MAX_NAME_LENGTH +
                            " characters.",
                          { name: n },
                          !0,
                        ))),
                    n
                  );
                }),
                (t.sanitizeString = function (n) {
                  return (
                    n &&
                      ((n = e.Util.trim(n)),
                      n.toString().length > t.MAX_STRING_LENGTH &&
                        ((n = n.toString().substring(0, t.MAX_STRING_LENGTH)),
                        e._InternalLogging.throwInternal(
                          e.LoggingSeverity.WARNING,
                          e._InternalMessageId.StringValueTooLong,
                          "string value is too long. It has been truncated to " +
                            t.MAX_STRING_LENGTH +
                            " characters.",
                          { value: n },
                          !0,
                        ))),
                    n
                  );
                }),
                (t.sanitizeUrl = function (n) {
                  return (
                    n &&
                      ((n = e.Util.trim(n)),
                      n.length > t.MAX_URL_LENGTH &&
                        ((n = n.substring(0, t.MAX_URL_LENGTH)),
                        e._InternalLogging.throwInternal(
                          e.LoggingSeverity.WARNING,
                          e._InternalMessageId.UrlTooLong,
                          "url is too long, it has been truncated to " +
                            t.MAX_URL_LENGTH +
                            " characters.",
                          { url: n },
                          !0,
                        ))),
                    n
                  );
                }),
                (t.sanitizeMessage = function (n) {
                  return (
                    n &&
                      n.length > t.MAX_MESSAGE_LENGTH &&
                      ((n = n.substring(0, t.MAX_MESSAGE_LENGTH)),
                      e._InternalLogging.throwInternal(
                        e.LoggingSeverity.WARNING,
                        e._InternalMessageId.MessageTruncated,
                        "message is too long, it has been truncated to " +
                          t.MAX_MESSAGE_LENGTH +
                          " characters.",
                        { message: n },
                        !0,
                      )),
                    n
                  );
                }),
                (t.sanitizeException = function (n) {
                  return (
                    n &&
                      n.length > t.MAX_EXCEPTION_LENGTH &&
                      ((n = n.substring(0, t.MAX_EXCEPTION_LENGTH)),
                      e._InternalLogging.throwInternal(
                        e.LoggingSeverity.WARNING,
                        e._InternalMessageId.ExceptionTruncated,
                        "exception is too long, it has been truncated to " +
                          t.MAX_EXCEPTION_LENGTH +
                          " characters.",
                        { exception: n },
                        !0,
                      )),
                    n
                  );
                }),
                (t.sanitizeProperties = function (e) {
                  if (e) {
                    var n = {};
                    for (var i in e) {
                      var a = t.sanitizeString(e[i]);
                      (i = t.sanitizeKeyAndAddUniqueness(i, n)), (n[i] = a);
                    }
                    e = n;
                  }
                  return e;
                }),
                (t.sanitizeMeasurements = function (e) {
                  if (e) {
                    var n = {};
                    for (var i in e) {
                      var a = e[i];
                      (i = t.sanitizeKeyAndAddUniqueness(i, n)), (n[i] = a);
                    }
                    e = n;
                  }
                  return e;
                }),
                (t.padNumber = function (e) {
                  var t = "00" + e;
                  return t.substr(t.length - 3);
                }),
                (t.MAX_NAME_LENGTH = 150),
                (t.MAX_STRING_LENGTH = 1024),
                (t.MAX_URL_LENGTH = 2048),
                (t.MAX_MESSAGE_LENGTH = 32768),
                (t.MAX_EXCEPTION_LENGTH = 32768),
                t
              );
            })();
            t.DataSanitizer = n;
          })((n = t.Common || (t.Common = {})));
        })((t = e.Telemetry || (e.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function (n) {
            function a(i, a, r) {
              var o = n.call(this) || this;
              return (
                (o.aiDataContract = {
                  ver: e.FieldType.Required,
                  message: e.FieldType.Required,
                  severityLevel: e.FieldType.Default,
                  properties: e.FieldType.Default,
                }),
                (i = i || e.Util.NotSpecified),
                (o.message = t.Common.DataSanitizer.sanitizeMessage(i)),
                (o.properties = t.Common.DataSanitizer.sanitizeProperties(a)),
                r && (o.severityLevel = r),
                o
              );
            }
            return (
              i(a, n),
              (a.envelopeType = "Microsoft.ApplicationInsights.{0}.Message"),
              (a.dataType = "MessageData"),
              a
            );
          })(a.MessageData);
          t.Trace = n;
        })((t = e.Telemetry || (e.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var a;
    !(function (e) {
      var t = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t.ver = 2),
            (t.properties = {}),
            (t.measurements = {}),
            (t = e.call(this) || this)
          );
        }
        return i(t, e), t;
      })(n.Telemetry.Domain);
      e.EventData = t;
    })(a || (a = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function (t) {
            function n(n, i, a) {
              var r = t.call(this) || this;
              return (
                (r.aiDataContract = {
                  ver: e.FieldType.Required,
                  name: e.FieldType.Required,
                  properties: e.FieldType.Default,
                  measurements: e.FieldType.Default,
                }),
                (r.name =
                  e.Telemetry.Common.DataSanitizer.sanitizeString(n) ||
                  e.Util.NotSpecified),
                (r.properties =
                  e.Telemetry.Common.DataSanitizer.sanitizeProperties(i)),
                (r.measurements =
                  e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(a)),
                r
              );
            }
            return (
              i(n, t),
              (n.envelopeType = "Microsoft.ApplicationInsights.{0}.Event"),
              (n.dataType = "EventData"),
              n
            );
          })(a.EventData);
          t.Event = n;
        })((t = e.Telemetry || (e.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var a;
    !(function (e) {
      var t = (function () {
        function e() {
          (this.hasFullStack = !0), (this.parsedStack = []);
        }
        return e;
      })();
      e.ExceptionDetails = t;
    })(a || (a = {}));
    var a;
    !(function (e) {
      var t = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t.ver = 2),
            (t.exceptions = []),
            (t.properties = {}),
            (t.measurements = {}),
            (t = e.call(this) || this)
          );
        }
        return i(t, e), t;
      })(n.Telemetry.Domain);
      e.ExceptionData = t;
    })(a || (a = {}));
    var a;
    !(function (e) {
      var t = (function () {
        function e() {}
        return e;
      })();
      e.StackFrame = t;
    })(a || (a = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function (t) {
            function n(n, i, a, o, s) {
              var l = t.call(this) || this;
              return (
                (l.aiDataContract = {
                  ver: e.FieldType.Required,
                  handledAt: e.FieldType.Required,
                  exceptions: e.FieldType.Required,
                  severityLevel: e.FieldType.Default,
                  properties: e.FieldType.Default,
                  measurements: e.FieldType.Default,
                }),
                (l.properties =
                  e.Telemetry.Common.DataSanitizer.sanitizeProperties(a)),
                (l.measurements =
                  e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(o)),
                (l.handledAt = i || "unhandled"),
                (l.exceptions = [new r(n)]),
                s && (l.severityLevel = s),
                l
              );
            }
            return (
              i(n, t),
              (n.CreateSimpleException = function (e, t, n, i, a, r, o) {
                return {
                  handledAt: o || "unhandled",
                  exceptions: [
                    { hasFullStack: !0, message: e, stack: a, typeName: t },
                  ],
                };
              }),
              (n.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception"),
              (n.dataType = "ExceptionData"),
              n
            );
          })(a.ExceptionData);
          t.Exception = n;
          var r = (function (n) {
              function a(i) {
                var a = n.call(this) || this;
                (a.aiDataContract = {
                  id: e.FieldType.Default,
                  outerId: e.FieldType.Default,
                  typeName: e.FieldType.Required,
                  message: e.FieldType.Required,
                  hasFullStack: e.FieldType.Default,
                  stack: e.FieldType.Default,
                  parsedStack: e.FieldType.Array,
                }),
                  (a.typeName =
                    t.Common.DataSanitizer.sanitizeString(i.name) ||
                    e.Util.NotSpecified),
                  (a.message =
                    t.Common.DataSanitizer.sanitizeMessage(i.message) ||
                    e.Util.NotSpecified);
                var r = i.stack;
                return (
                  (a.parsedStack = a.parseStack(r)),
                  (a.stack = t.Common.DataSanitizer.sanitizeException(r)),
                  (a.hasFullStack =
                    e.Util.isArray(a.parsedStack) && a.parsedStack.length > 0),
                  a
                );
              }
              return (
                i(a, n),
                (a.prototype.parseStack = function (e) {
                  var t = void 0;
                  if ("string" == typeof e) {
                    var n = e.split("\n");
                    t = [];
                    for (var i = 0, a = 0, r = 0; r <= n.length; r++) {
                      var s = n[r];
                      if (o.regex.test(s)) {
                        var l = new o(n[r], i++);
                        (a += l.sizeInBytes), t.push(l);
                      }
                    }
                    var c = 32768;
                    if (a > c)
                      for (
                        var d = 0, u = t.length - 1, p = 0, f = d, g = u;
                        d < u;

                      ) {
                        var m = t[d].sizeInBytes,
                          v = t[u].sizeInBytes;
                        if (((p += m + v), p > c)) {
                          var h = g - f + 1;
                          t.splice(f, h);
                          break;
                        }
                        (f = d), (g = u), d++, u--;
                      }
                  }
                  return t;
                }),
                a
              );
            })(a.ExceptionDetails),
            o = (function (t) {
              function n(i, a) {
                var r = t.call(this) || this;
                (r.sizeInBytes = 0),
                  (r.aiDataContract = {
                    level: e.FieldType.Required,
                    method: e.FieldType.Required,
                    assembly: e.FieldType.Default,
                    fileName: e.FieldType.Default,
                    line: e.FieldType.Default,
                  }),
                  (r.level = a),
                  (r.method = "<no_method>"),
                  (r.assembly = e.Util.trim(i));
                var o = i.match(n.regex);
                return (
                  o &&
                    o.length >= 5 &&
                    ((r.method = e.Util.trim(o[2]) || r.method),
                    (r.fileName = e.Util.trim(o[4])),
                    (r.line = parseInt(o[5]) || 0)),
                  (r.sizeInBytes += r.method.length),
                  (r.sizeInBytes += r.fileName.length),
                  (r.sizeInBytes += r.assembly.length),
                  (r.sizeInBytes += n.baseSize),
                  (r.sizeInBytes += r.level.toString().length),
                  (r.sizeInBytes += r.line.toString().length),
                  r
                );
              }
              return (
                i(n, t),
                (n.regex =
                  /^([\s]+at)?(.*?)(\@|\s\(|\s)([^\(\@\n]+):([0-9]+):([0-9]+)(\)?)$/),
                (n.baseSize = 58),
                n
              );
            })(a.StackFrame);
          t._StackFrame = o;
        })((t = e.Telemetry || (e.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var a;
    !(function (e) {
      var t = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t.ver = 2),
            (t.metrics = []),
            (t.properties = {}),
            (t = e.call(this) || this)
          );
        }
        return i(t, e), t;
      })(n.Telemetry.Domain);
      e.MetricData = t;
    })(a || (a = {}));
    var a;
    !(function (e) {
      var t;
      !(function (e) {
        (e[(e.Measurement = 0)] = "Measurement"),
          (e[(e.Aggregation = 1)] = "Aggregation");
      })((t = e.DataPointType || (e.DataPointType = {})));
    })(a || (a = {}));
    var a;
    !(function (e) {
      var t = (function () {
        function t() {
          this.kind = e.DataPointType.Measurement;
        }
        return t;
      })();
      e.DataPoint = t;
    })(a || (a = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n;
          !(function (t) {
            var n = (function (t) {
              function n() {
                var n = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (n.aiDataContract = {
                    name: e.FieldType.Required,
                    kind: e.FieldType.Default,
                    value: e.FieldType.Required,
                    count: e.FieldType.Default,
                    min: e.FieldType.Default,
                    max: e.FieldType.Default,
                    stdDev: e.FieldType.Default,
                  }),
                  n
                );
              }
              return i(n, t), n;
            })(a.DataPoint);
            t.DataPoint = n;
          })((n = t.Common || (t.Common = {})));
        })((t = e.Telemetry || (e.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (t) {
        var n;
        !(function (n) {
          var r = (function (a) {
            function r(i, r, o, s, l, c) {
              var d = a.call(this) || this;
              d.aiDataContract = {
                ver: t.FieldType.Required,
                metrics: t.FieldType.Required,
                properties: t.FieldType.Default,
              };
              var u = new e.ApplicationInsights.Telemetry.Common.DataPoint();
              return (
                (u.count = o > 0 ? o : void 0),
                (u.max = isNaN(l) || null === l ? void 0 : l),
                (u.min = isNaN(s) || null === s ? void 0 : s),
                (u.name =
                  n.Common.DataSanitizer.sanitizeString(i) ||
                  t.Util.NotSpecified),
                (u.value = r),
                (d.metrics = [u]),
                (d.properties =
                  t.Telemetry.Common.DataSanitizer.sanitizeProperties(c)),
                d
              );
            }
            return (
              i(r, a),
              (r.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric"),
              (r.dataType = "MetricData"),
              r
            );
          })(a.MetricData);
          n.Metric = r;
        })((n = t.Telemetry || (t.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var a;
    !(function (e) {
      var t = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t.ver = 2),
            (t.properties = {}),
            (t.measurements = {}),
            (t = e.call(this) || this)
          );
        }
        return i(t, e), t;
      })(e.EventData);
      e.PageViewData = t;
    })(a || (a = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function (n) {
            function a(i, a, r, o, s) {
              var l = n.call(this) || this;
              return (
                (l.aiDataContract = {
                  ver: e.FieldType.Required,
                  name: e.FieldType.Default,
                  url: e.FieldType.Default,
                  duration: e.FieldType.Default,
                  properties: e.FieldType.Default,
                  measurements: e.FieldType.Default,
                }),
                (l.url = t.Common.DataSanitizer.sanitizeUrl(a)),
                (l.name =
                  t.Common.DataSanitizer.sanitizeString(i) ||
                  e.Util.NotSpecified),
                isNaN(r) || (l.duration = e.Util.msToTimeSpan(r)),
                (l.properties =
                  e.Telemetry.Common.DataSanitizer.sanitizeProperties(o)),
                (l.measurements =
                  e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(s)),
                l
              );
            }
            return (
              i(a, n),
              (a.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview"),
              (a.dataType = "PageviewData"),
              a
            );
          })(a.PageViewData);
          t.PageView = n;
        })((t = e.Telemetry || (e.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var a;
    !(function (e) {
      var t = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t.ver = 2),
            (t.properties = {}),
            (t.measurements = {}),
            (t = e.call(this) || this)
          );
        }
        return i(t, e), t;
      })(e.PageViewData);
      e.PageViewPerfData = t;
    })(a || (a = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function (n) {
            function a(i, r, o, s, l) {
              var c = n.call(this) || this;
              (c.aiDataContract = {
                ver: e.FieldType.Required,
                name: e.FieldType.Default,
                url: e.FieldType.Default,
                duration: e.FieldType.Default,
                perfTotal: e.FieldType.Default,
                networkConnect: e.FieldType.Default,
                sentRequest: e.FieldType.Default,
                receivedResponse: e.FieldType.Default,
                domProcessing: e.FieldType.Default,
                properties: e.FieldType.Default,
                measurements: e.FieldType.Default,
              }),
                (c.isValid = !1);
              var d = a.getPerformanceTiming();
              if (d) {
                var u = a.getDuration(d.navigationStart, d.loadEventEnd),
                  p = a.getDuration(d.navigationStart, d.connectEnd),
                  f = a.getDuration(d.requestStart, d.responseStart),
                  g = a.getDuration(d.responseStart, d.responseEnd),
                  m = a.getDuration(d.responseEnd, d.loadEventEnd);
                0 == u
                  ? e._InternalLogging.throwInternal(
                      e.LoggingSeverity.WARNING,
                      e._InternalMessageId.ErrorPVCalc,
                      "error calculating page view performance.",
                      { total: u, network: p, request: f, response: g, dom: m },
                    )
                  : a.shouldCollectDuration(u, p, f, g, m)
                  ? u <
                    Math.floor(p) +
                      Math.floor(f) +
                      Math.floor(g) +
                      Math.floor(m)
                    ? e._InternalLogging.throwInternal(
                        e.LoggingSeverity.WARNING,
                        e._InternalMessageId.ClientPerformanceMathError,
                        "client performance math error.",
                        {
                          total: u,
                          network: p,
                          request: f,
                          response: g,
                          dom: m,
                        },
                      )
                    : ((c.durationMs = u),
                      (c.perfTotal = c.duration = e.Util.msToTimeSpan(u)),
                      (c.networkConnect = e.Util.msToTimeSpan(p)),
                      (c.sentRequest = e.Util.msToTimeSpan(f)),
                      (c.receivedResponse = e.Util.msToTimeSpan(g)),
                      (c.domProcessing = e.Util.msToTimeSpan(m)),
                      (c.isValid = !0))
                  : e._InternalLogging.throwInternal(
                      e.LoggingSeverity.WARNING,
                      e._InternalMessageId.InvalidDurationValue,
                      "Invalid page load duration value. Browser perf data won't be sent.",
                      { total: u, network: p, request: f, response: g, dom: m },
                    );
              }
              return (
                (c.url = t.Common.DataSanitizer.sanitizeUrl(r)),
                (c.name =
                  t.Common.DataSanitizer.sanitizeString(i) ||
                  e.Util.NotSpecified),
                (c.properties =
                  e.Telemetry.Common.DataSanitizer.sanitizeProperties(s)),
                (c.measurements =
                  e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(l)),
                c
              );
            }
            return (
              i(a, n),
              (a.prototype.getIsValid = function () {
                return this.isValid;
              }),
              (a.prototype.getDurationMs = function () {
                return this.durationMs;
              }),
              (a.getPerformanceTiming = function () {
                return a.isPerformanceTimingSupported()
                  ? window.performance.timing
                  : null;
              }),
              (a.isPerformanceTimingSupported = function () {
                return (
                  "undefined" != typeof window &&
                  window.performance &&
                  window.performance.timing
                );
              }),
              (a.isPerformanceTimingDataReady = function () {
                var e = window.performance.timing;
                return (
                  e.domainLookupStart > 0 &&
                  e.navigationStart > 0 &&
                  e.responseStart > 0 &&
                  e.requestStart > 0 &&
                  e.loadEventEnd > 0 &&
                  e.responseEnd > 0 &&
                  e.connectEnd > 0 &&
                  e.domLoading > 0
                );
              }),
              (a.getDuration = function (e, t) {
                var n = void 0;
                return isNaN(e) || isNaN(t) || (n = Math.max(t - e, 0)), n;
              }),
              (a.shouldCollectDuration = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var n = navigator.userAgent,
                  i = !!n && n.toLowerCase().indexOf("googlebot") !== -1;
                if (i) return !1;
                for (var r = 0; r < e.length; r++)
                  if (e[r] >= a.MAX_DURATION_ALLOWED) return !1;
                return !0;
              }),
              (a.envelopeType =
                "Microsoft.ApplicationInsights.{0}.PageviewPerformance"),
              (a.dataType = "PageviewPerformanceData"),
              (a.MAX_DURATION_ALLOWED = 36e5),
              a
            );
          })(a.PageViewPerfData);
          t.PageViewPerformance = n;
        })((t = e.Telemetry || (e.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (t) {
        var n = (function () {
          function n(e) {
            (this._config = e),
              (this._sender = new t.Sender(e)),
              (this.telemetryInitializers = []),
              "undefined" != typeof window &&
                ((this._sessionManager = new t.Context._SessionManager(e)),
                (this.application = new t.Context.Application()),
                (this.device = new t.Context.Device()),
                (this.internal = new t.Context.Internal(e)),
                (this.location = new t.Context.Location()),
                (this.user = new t.Context.User(e)),
                (this.operation = new t.Context.Operation()),
                (this.session = new t.Context.Session()),
                (this.sample = new t.Context.Sample(e.sampleRate()))),
              this._addDefaultTelemetryInitializers();
          }
          return (
            (n.prototype.addTelemetryInitializer = function (e) {
              this.telemetryInitializers.push(e);
            }),
            (n.prototype.track = function (e) {
              return (
                e
                  ? (e.name === t.Telemetry.PageView.envelopeType &&
                      t._InternalLogging.resetInternalMessageCount(),
                    this.session &&
                      "string" != typeof this.session.id &&
                      this._sessionManager.update(),
                    this._track(e))
                  : t._InternalLogging.throwInternal(
                      t.LoggingSeverity.CRITICAL,
                      t._InternalMessageId.TrackArgumentsNotSpecified,
                      "cannot call .track() with a null or undefined argument",
                      null,
                      !0,
                    ),
                e
              );
            }),
            (n.prototype._addDefaultTelemetryInitializers = function () {
              if (!this._config.isBrowserLinkTrackingEnabled()) {
                var t = ["/browserLinkSignalR/", "/__browserLink/"],
                  n = function (n) {
                    if (
                      n.name ===
                      e.ApplicationInsights.Telemetry.RemoteDependencyData
                        .envelopeType
                    ) {
                      var i = n.data;
                      if (i && i.baseData)
                        for (var a = 0; a < t.length; a++)
                          if (i.baseData.name.indexOf(t[a]) >= 0) return !1;
                    }
                    return !0;
                  };
                this.addTelemetryInitializer(n);
              }
            }),
            (n.prototype._track = function (e) {
              this.session &&
                ("string" == typeof this.session.id
                  ? this._applySessionContext(e, this.session)
                  : this._applySessionContext(
                      e,
                      this._sessionManager.automaticSession,
                    )),
                this._applyApplicationContext(e, this.application),
                this._applyDeviceContext(e, this.device),
                this._applyInternalContext(e, this.internal),
                this._applyLocationContext(e, this.location),
                this._applySampleContext(e, this.sample),
                this._applyUserContext(e, this.user),
                this._applyOperationContext(e, this.operation),
                (e.iKey = this._config.instrumentationKey());
              var n = !1;
              try {
                for (
                  var i = this.telemetryInitializers.length, a = 0;
                  a < i;
                  ++a
                ) {
                  var r = this.telemetryInitializers[a];
                  if (r && r.apply(null, [e]) === !1) {
                    n = !0;
                    break;
                  }
                }
              } catch (o) {
                (n = !0),
                  t._InternalLogging.throwInternal(
                    t.LoggingSeverity.CRITICAL,
                    t._InternalMessageId.TelemetryInitializerFailed,
                    "One of telemetry initializers failed, telemetry item will not be sent: " +
                      t.Util.getExceptionName(o),
                    { exception: t.Util.dump(o) },
                    !0,
                  );
              }
              if (!n)
                if (
                  (this._fixDepricatedValues(e),
                  e.name === t.Telemetry.Metric.envelopeType ||
                    this.sample.isSampledIn(e))
                ) {
                  var s = this._config.instrumentationKey().replace(/-/g, "");
                  (e.name = e.name.replace("{0}", s)), this._sender.send(e);
                } else
                  t._InternalLogging.throwInternal(
                    t.LoggingSeverity.WARNING,
                    t._InternalMessageId.TelemetrySampledAndNotSent,
                    "Telemetry is sampled and not sent to the AI service.",
                    {
                      SampleRate: this.sample.sampleRate,
                    },
                    !0,
                  );
              return e;
            }),
            (n.prototype._applyApplicationContext = function (e, t) {
              if (t) {
                var n = new a.ContextTagKeys();
                "string" == typeof t.ver &&
                  (e.tags[n.applicationVersion] = t.ver),
                  "string" == typeof t.build &&
                    (e.tags[n.applicationBuild] = t.build);
              }
            }),
            (n.prototype._applyDeviceContext = function (e, t) {
              var n = new a.ContextTagKeys();
              t &&
                ("string" == typeof t.id && (e.tags[n.deviceId] = t.id),
                "string" == typeof t.ip && (e.tags[n.deviceIp] = t.ip),
                "string" == typeof t.language &&
                  (e.tags[n.deviceLanguage] = t.language),
                "string" == typeof t.locale &&
                  (e.tags[n.deviceLocale] = t.locale),
                "string" == typeof t.model && (e.tags[n.deviceModel] = t.model),
                "undefined" != typeof t.network &&
                  (e.tags[n.deviceNetwork] = t.network),
                "string" == typeof t.oemName &&
                  (e.tags[n.deviceOEMName] = t.oemName),
                "string" == typeof t.os && (e.tags[n.deviceOS] = t.os),
                "string" == typeof t.osversion &&
                  (e.tags[n.deviceOSVersion] = t.osversion),
                "string" == typeof t.resolution &&
                  (e.tags[n.deviceScreenResolution] = t.resolution),
                "string" == typeof t.type && (e.tags[n.deviceType] = t.type));
            }),
            (n.prototype._applyInternalContext = function (e, t) {
              if (t) {
                var n = new a.ContextTagKeys();
                "string" == typeof t.agentVersion &&
                  (e.tags[n.internalAgentVersion] = t.agentVersion),
                  "string" == typeof t.sdkVersion &&
                    (e.tags[n.internalSdkVersion] = t.sdkVersion);
              }
            }),
            (n.prototype._applyLocationContext = function (e, t) {
              if (t) {
                var n = new a.ContextTagKeys();
                "string" == typeof t.ip && (e.tags[n.locationIp] = t.ip);
              }
            }),
            (n.prototype._applyOperationContext = function (e, t) {
              if (t) {
                var n = new a.ContextTagKeys();
                "string" == typeof t.id && (e.tags[n.operationId] = t.id),
                  "string" == typeof t.name &&
                    (e.tags[n.operationName] = t.name),
                  "string" == typeof t.parentId &&
                    (e.tags[n.operationParentId] = t.parentId),
                  "string" == typeof t.rootId &&
                    (e.tags[n.operationRootId] = t.rootId),
                  "string" == typeof t.syntheticSource &&
                    (e.tags[n.operationSyntheticSource] = t.syntheticSource);
              }
            }),
            (n.prototype._applySampleContext = function (e, t) {
              t && (e.sampleRate = t.sampleRate);
            }),
            (n.prototype._applySessionContext = function (e, t) {
              if (t) {
                var n = new a.ContextTagKeys();
                "string" == typeof t.id && (e.tags[n.sessionId] = t.id),
                  "undefined" != typeof t.isFirst &&
                    (e.tags[n.sessionIsFirst] = t.isFirst);
              }
            }),
            (n.prototype._applyUserContext = function (e, t) {
              if (t) {
                var n = new a.ContextTagKeys();
                "string" == typeof t.accountId &&
                  (e.tags[n.userAccountId] = t.accountId),
                  "string" == typeof t.agent && (e.tags[n.userAgent] = t.agent),
                  "string" == typeof t.id && (e.tags[n.userId] = t.id),
                  "string" == typeof t.authenticatedId &&
                    (e.tags[n.userAuthUserId] = t.authenticatedId),
                  "string" == typeof t.storeRegion &&
                    (e.tags[n.userStoreRegion] = t.storeRegion);
              }
            }),
            (n.prototype._fixDepricatedValues = function (n) {
              try {
                var i = n.data;
                if (
                  i &&
                  i.baseType ===
                    e.ApplicationInsights.Telemetry.RemoteDependencyData
                      .dataType
                ) {
                  var a = i.baseData;
                  a && this._fixRDDDepricatedValues(a);
                }
              } catch (r) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.WARNING,
                  t._InternalMessageId.FailedToFixDepricatedValues,
                  "Failed to parse the base data object, to fix the depricated values " +
                    t.Util.getExceptionName(r),
                  { exception: t.Util.dump(r) },
                );
              }
            }),
            (n.prototype._fixRDDDepricatedValues = function (e) {
              e.commandName &&
                ((e.data = e.commandName), (e.commandName = void 0)),
                e.dependencyTypeName &&
                  ((e.type = e.dependencyTypeName),
                  (e.dependencyTypeName = void 0)),
                e.value &&
                  0 !== e.value &&
                  ((e.duration = t.Util.msToTimeSpan(e.value)),
                  (e.value = void 0)),
                e.kind && (e.kind = void 0),
                e.dependencySource && (e.dependencySource = void 0),
                e.async && (e.async = void 0),
                e.count && (e.count = void 0),
                e.min && (e.min = void 0),
                e.max && (e.max = void 0),
                e.stdDev && (e.stdDev = void 0),
                e.dependencyKind && (e.dependencyKind = void 0);
            }),
            n
          );
        })();
        t.TelemetryContext = n;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (t) {
        var n = (function (e) {
          function t() {
            return e.call(this) || this;
          }
          return i(t, e), t;
        })(e.Telemetry.Base);
        t.Data = n;
      })((t = e.Telemetry || (e.Telemetry = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (t) {
        var n;
        !(function (n) {
          var a;
          !(function (n) {
            var a = (function (e) {
              function n(n, i) {
                var a = e.call(this) || this;
                return (
                  (a.aiDataContract = {
                    baseType: t.FieldType.Required,
                    baseData: t.FieldType.Required,
                  }),
                  (a.baseType = n),
                  (a.baseData = i),
                  a
                );
              }
              return i(n, e), n;
            })(e.Telemetry.Data);
            n.Data = a;
          })((a = n.Common || (n.Common = {})));
        })((n = t.Telemetry || (t.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function () {
            function n(e, t) {
              (this.pageViewPerformanceSent = !1),
                (this.overridePageViewDuration = !1),
                (this.overridePageViewDuration = t),
                (this.appInsights = e);
            }
            return (
              (n.prototype.trackPageView = function (n, i, a, r, o) {
                var s = this;
                "string" != typeof n &&
                  (n = (window.document && window.document.title) || ""),
                  "string" != typeof i &&
                    (i = (window.location && window.location.href) || "");
                var l = !1,
                  c = void 0;
                if (t.PageViewPerformance.isPerformanceTimingSupported()) {
                  var d =
                    t.PageViewPerformance.getPerformanceTiming()
                      .navigationStart;
                  (c = t.PageViewPerformance.getDuration(d, +new Date())),
                    t.PageViewPerformance.shouldCollectDuration(c) ||
                      (c = void 0);
                } else
                  this.appInsights.sendPageViewInternal(
                    n,
                    i,
                    isNaN(o) ? void 0 : o,
                    a,
                    r,
                  ),
                    this.appInsights.flush(),
                    (l = !0);
                l ||
                  (!this.overridePageViewDuration && isNaN(o)) ||
                  (this.appInsights.sendPageViewInternal(
                    n,
                    i,
                    isNaN(o) ? c : o,
                    a,
                    r,
                  ),
                  this.appInsights.flush(),
                  (l = !0));
                var u = 6e4;
                if (!t.PageViewPerformance.isPerformanceTimingSupported())
                  return void e._InternalLogging.throwInternal(
                    e.LoggingSeverity.WARNING,
                    e._InternalMessageId.NavigationTimingNotSupported,
                    "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info.",
                  );
                var p = setInterval(function () {
                  try {
                    if (t.PageViewPerformance.isPerformanceTimingDataReady()) {
                      clearInterval(p);
                      var o = new t.PageViewPerformance(n, i, null, a, r);
                      o.getIsValid() || l
                        ? (l ||
                            s.appInsights.sendPageViewInternal(
                              n,
                              i,
                              o.getDurationMs(),
                              a,
                              r,
                            ),
                          s.pageViewPerformanceSent ||
                            (s.appInsights.sendPageViewPerformanceInternal(o),
                            (s.pageViewPerformanceSent = !0)),
                          s.appInsights.flush())
                        : (s.appInsights.sendPageViewInternal(n, i, c, a, r),
                          s.appInsights.flush());
                    } else
                      t.PageViewPerformance.getDuration(d, +new Date()) > u &&
                        (clearInterval(p),
                        l ||
                          (s.appInsights.sendPageViewInternal(n, i, u, a, r),
                          s.appInsights.flush()));
                  } catch (f) {
                    e._InternalLogging.throwInternal(
                      e.LoggingSeverity.CRITICAL,
                      e._InternalMessageId.TrackPVFailedCalc,
                      "trackPageView failed on page load calculation: " +
                        e.Util.getExceptionName(f),
                      { exception: e.Util.dump(f) },
                    );
                  }
                }, 100);
              }),
              n
            );
          })();
          t.PageViewManager = n;
        })((t = e.Telemetry || (e.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function () {
            function t(e) {
              (this.prevPageVisitDataKeyName = "prevPageVisitData"),
                (this.pageVisitTimeTrackingHandler = e);
            }
            return (
              (t.prototype.trackPreviousPageVisit = function (t, n) {
                try {
                  var i = this.restartPageVisitTimer(t, n);
                  i &&
                    this.pageVisitTimeTrackingHandler(
                      i.pageName,
                      i.pageUrl,
                      i.pageVisitTime,
                    );
                } catch (a) {
                  e._InternalLogging.warnToConsole(
                    "Auto track page visit time failed, metric will not be collected: " +
                      e.Util.dump(a),
                  );
                }
              }),
              (t.prototype.restartPageVisitTimer = function (t, n) {
                try {
                  var i = this.stopPageVisitTimer();
                  return this.startPageVisitTimer(t, n), i;
                } catch (a) {
                  return (
                    e._InternalLogging.warnToConsole(
                      "Call to restart failed: " + e.Util.dump(a),
                    ),
                    null
                  );
                }
              }),
              (t.prototype.startPageVisitTimer = function (t, n) {
                try {
                  if (e.Util.canUseSessionStorage()) {
                    if (
                      null !=
                      e.Util.getSessionStorage(this.prevPageVisitDataKeyName)
                    )
                      throw new Error(
                        "Cannot call startPageVisit consecutively without first calling stopPageVisit",
                      );
                    var a = new i(t, n),
                      r = JSON.stringify(a);
                    e.Util.setSessionStorage(this.prevPageVisitDataKeyName, r);
                  }
                } catch (o) {
                  e._InternalLogging.warnToConsole(
                    "Call to start failed: " + e.Util.dump(o),
                  );
                }
              }),
              (t.prototype.stopPageVisitTimer = function () {
                try {
                  if (e.Util.canUseSessionStorage()) {
                    var t = Date.now(),
                      n = e.Util.getSessionStorage(
                        this.prevPageVisitDataKeyName,
                      );
                    if (n) {
                      var i = JSON.parse(n);
                      return (
                        (i.pageVisitTime = t - i.pageVisitStartTime),
                        e.Util.removeSessionStorage(
                          this.prevPageVisitDataKeyName,
                        ),
                        i
                      );
                    }
                    return null;
                  }
                  return null;
                } catch (a) {
                  return (
                    e._InternalLogging.warnToConsole(
                      "Stop page visit timer failed: " + e.Util.dump(a),
                    ),
                    null
                  );
                }
              }),
              t
            );
          })();
          t.PageVisitTimeManager = n;
          var i = (function () {
            function e(e, t) {
              (this.pageVisitStartTime = Date.now()),
                (this.pageName = e),
                (this.pageUrl = t);
            }
            return e;
          })();
          t.PageVisitData = i;
        })((t = e.Telemetry || (e.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var a;
    !(function (e) {
      var t;
      !(function (e) {
        (e[(e.SQL = 0)] = "SQL"),
          (e[(e.Http = 1)] = "Http"),
          (e[(e.Other = 2)] = "Other");
      })((t = e.DependencyKind || (e.DependencyKind = {})));
    })(a || (a = {}));
    var a;
    !(function (e) {
      var t;
      !(function (e) {
        (e[(e.Undefined = 0)] = "Undefined"),
          (e[(e.Aic = 1)] = "Aic"),
          (e[(e.Apmc = 2)] = "Apmc");
      })((t = e.DependencySourceType || (e.DependencySourceType = {})));
    })(a || (a = {}));
    var a;
    !(function (e) {
      var t = (function (t) {
        function n() {
          var n = t.call(this) || this;
          return (
            (n.ver = 2),
            (n.kind = e.DataPointType.Aggregation),
            (n.dependencyKind = e.DependencyKind.Other),
            (n.success = !0),
            (n.dependencySource = e.DependencySourceType.Apmc),
            (n.properties = {}),
            (n.measurements = {}),
            (n = t.call(this) || this)
          );
        }
        return i(n, t), n;
      })(n.Telemetry.Domain);
      e.RemoteDependencyData = t;
    })(a || (a = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t;
        !(function (t) {
          var n = (function (n) {
            function r(i, r, o, s, l, c, d, u, p) {
              var f = n.call(this) || this;
              if (
                ((f.aiDataContract = {
                  id: e.FieldType.Required,
                  ver: e.FieldType.Required,
                  name: e.FieldType.Default,
                  resultCode: e.FieldType.Default,
                  duration: e.FieldType.Default,
                  success: e.FieldType.Default,
                  data: e.FieldType.Default,
                  target: e.FieldType.Default,
                  type: e.FieldType.Default,
                  properties: e.FieldType.Default,
                  measurements: e.FieldType.Default,
                  kind: e.FieldType.Default,
                  value: e.FieldType.Default,
                  count: e.FieldType.Default,
                  min: e.FieldType.Default,
                  max: e.FieldType.Default,
                  stdDev: e.FieldType.Default,
                  dependencyKind: e.FieldType.Default,
                  async: e.FieldType.Default,
                  dependencySource: e.FieldType.Default,
                  commandName: e.FieldType.Default,
                  dependencyTypeName: e.FieldType.Default,
                }),
                (f.id = i),
                (f.duration = e.Util.msToTimeSpan(s)),
                (f.success = l),
                (f.resultCode = c + ""),
                (f.dependencyKind = a.DependencyKind.Http),
                (f.type = "Ajax"),
                (f.data = t.Common.DataSanitizer.sanitizeUrl(o)),
                r && r.length > 0)
              ) {
                var g = e.UrlHelper.parseUrl(r);
                if (((f.target = g.host), null != g.pathname)) {
                  var m = 0 === g.pathname.length ? "/" : g.pathname;
                  "/" !== m.charAt(0) && (m = "/" + m),
                    (f.name = t.Common.DataSanitizer.sanitizeString(
                      d ? d + " " + m : m,
                    ));
                } else f.name = t.Common.DataSanitizer.sanitizeString(r);
              } else (f.target = o), (f.name = o);
              return (
                (f.properties =
                  e.Telemetry.Common.DataSanitizer.sanitizeProperties(u)),
                (f.measurements =
                  e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(p)),
                f
              );
            }
            return (
              i(r, n),
              (r.envelopeType =
                "Microsoft.ApplicationInsights.{0}.RemoteDependency"),
              (r.dataType = "RemoteDependencyData"),
              r
            );
          })(a.RemoteDependencyData);
          t.RemoteDependencyData = n;
        })((t = e.Telemetry || (e.Telemetry = {})));
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t = (function () {
          function t() {
            this.hashCodeGeneragor = new e.HashCodeScoreGenerator();
          }
          return (
            (t.prototype.isEnabled = function (e, t) {
              return this.hashCodeGeneragor.getHashCodeScore(e) < t;
            }),
            t
          );
        })();
        e.SplitTest = t;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (t) {
        t.Version = "1.0.12";
        var n = (function () {
          function n(a) {
            var r = this;
            (this._trackAjaxAttempts = 0), (this.config = a || {});
            var o = n.defaultConfig;
            if (void 0 !== o)
              for (var s in o)
                void 0 === this.config[s] && (this.config[s] = o[s]);
            (t._InternalLogging.verboseLogging = function () {
              return r.config.verboseLogging;
            }),
              (t._InternalLogging.enableDebugExceptions = function () {
                return r.config.enableDebug;
              });
            var l = {
              instrumentationKey: function () {
                return r.config.instrumentationKey;
              },
              accountId: function () {
                return r.config.accountId;
              },
              sessionRenewalMs: function () {
                return r.config.sessionRenewalMs;
              },
              sessionExpirationMs: function () {
                return r.config.sessionExpirationMs;
              },
              endpointUrl: function () {
                return r.config.endpointUrl;
              },
              emitLineDelimitedJson: function () {
                return r.config.emitLineDelimitedJson;
              },
              maxBatchSizeInBytes: function () {
                return !r.config.isBeaconApiDisabled &&
                  t.Util.IsBeaconApiSupported()
                  ? Math.min(
                      r.config.maxBatchSizeInBytes,
                      t.Sender.MaxBeaconPayloadSize,
                    )
                  : r.config.maxBatchSizeInBytes;
              },
              maxBatchInterval: function () {
                return r.config.maxBatchInterval;
              },
              disableTelemetry: function () {
                return r.config.disableTelemetry;
              },
              sampleRate: function () {
                return r.config.samplingPercentage;
              },
              cookieDomain: function () {
                return r.config.cookieDomain;
              },
              enableSessionStorageBuffer: function () {
                return (
                  (r.config.isBeaconApiDisabled ||
                    !t.Util.IsBeaconApiSupported()) &&
                  r.config.enableSessionStorageBuffer
                );
              },
              isRetryDisabled: function () {
                return r.config.isRetryDisabled;
              },
              isBeaconApiDisabled: function () {
                return r.config.isBeaconApiDisabled;
              },
              sdkExtension: function () {
                return r.config.sdkExtension;
              },
              isBrowserLinkTrackingEnabled: function () {
                return r.config.isBrowserLinkTrackingEnabled;
              },
            };
            this.config.isCookieUseDisabled && t.Util.disableCookies(),
              this.config.isStorageUseDisabled && t.Util.disableStorage(),
              (this.context = new t.TelemetryContext(l)),
              (this._pageViewManager =
                new e.ApplicationInsights.Telemetry.PageViewManager(
                  this,
                  this.config.overridePageViewDuration,
                )),
              (this._eventTracking = new i("trackEvent")),
              (this._eventTracking.action = function (e, n, i, a, o) {
                o
                  ? isNaN(o.duration) && (o.duration = i)
                  : (o = { duration: i });
                var s = new t.Telemetry.Event(e, a, o),
                  l = new t.Telemetry.Common.Data(
                    t.Telemetry.Event.dataType,
                    s,
                  ),
                  c = new t.Telemetry.Common.Envelope(
                    l,
                    t.Telemetry.Event.envelopeType,
                  );
                r.context.track(c);
              }),
              (this._pageTracking = new i("trackPageView")),
              (this._pageTracking.action = function (e, t, n, i, a) {
                r.sendPageViewInternal(e, t, n, i, a);
              }),
              (this._pageVisitTimeManager =
                new t.Telemetry.PageVisitTimeManager(function (e, t, n) {
                  return r.trackPageVisitTime(e, t, n);
                })),
              this.config.disableAjaxTracking ||
                (this._ajaxMonitor = new e.ApplicationInsights.AjaxMonitor(
                  this,
                ));
          }
          return (
            (n.prototype.sendPageViewInternal = function (e, n, i, a, r) {
              var o = new t.Telemetry.PageView(e, n, i, a, r),
                s = new t.Telemetry.Common.Data(
                  t.Telemetry.PageView.dataType,
                  o,
                ),
                l = new t.Telemetry.Common.Envelope(
                  s,
                  t.Telemetry.PageView.envelopeType,
                );
              this.context.track(l), (this._trackAjaxAttempts = 0);
            }),
            (n.prototype.sendPageViewPerformanceInternal = function (e) {
              var n = new t.Telemetry.Common.Data(
                  t.Telemetry.PageViewPerformance.dataType,
                  e,
                ),
                i = new t.Telemetry.Common.Envelope(
                  n,
                  t.Telemetry.PageViewPerformance.envelopeType,
                );
              this.context.track(i);
            }),
            (n.prototype.startTrackPage = function (e) {
              try {
                "string" != typeof e &&
                  (e = (window.document && window.document.title) || ""),
                  this._pageTracking.start(e);
              } catch (n) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.CRITICAL,
                  t._InternalMessageId.StartTrackFailed,
                  "startTrackPage failed, page view may not be collected: " +
                    t.Util.getExceptionName(n),
                  { exception: t.Util.dump(n) },
                );
              }
            }),
            (n.prototype.stopTrackPage = function (e, n, i, a) {
              try {
                "string" != typeof e &&
                  (e = (window.document && window.document.title) || ""),
                  "string" != typeof n &&
                    (n = (window.location && window.location.href) || ""),
                  this._pageTracking.stop(e, n, i, a),
                  this.config.autoTrackPageVisitTime &&
                    this._pageVisitTimeManager.trackPreviousPageVisit(e, n);
              } catch (r) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.CRITICAL,
                  t._InternalMessageId.StopTrackFailed,
                  "stopTrackPage failed, page view will not be collected: " +
                    t.Util.getExceptionName(r),
                  { exception: t.Util.dump(r) },
                );
              }
            }),
            (n.prototype.trackPageView = function (e, n, i, a, r) {
              try {
                this._pageViewManager.trackPageView(e, n, i, a, r),
                  this.config.autoTrackPageVisitTime &&
                    this._pageVisitTimeManager.trackPreviousPageVisit(e, n);
              } catch (o) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.CRITICAL,
                  t._InternalMessageId.TrackPVFailed,
                  "trackPageView failed, page view will not be collected: " +
                    t.Util.getExceptionName(o),
                  { exception: t.Util.dump(o) },
                );
              }
            }),
            (n.prototype.startTrackEvent = function (e) {
              try {
                this._eventTracking.start(e);
              } catch (n) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.CRITICAL,
                  t._InternalMessageId.StartTrackEventFailed,
                  "startTrackEvent failed, event will not be collected: " +
                    t.Util.getExceptionName(n),
                  { exception: t.Util.dump(n) },
                );
              }
            }),
            (n.prototype.stopTrackEvent = function (e, n, i) {
              try {
                this._eventTracking.stop(e, void 0, n, i);
              } catch (a) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.CRITICAL,
                  t._InternalMessageId.StopTrackEventFailed,
                  "stopTrackEvent failed, event will not be collected: " +
                    t.Util.getExceptionName(a),
                  { exception: t.Util.dump(a) },
                );
              }
            }),
            (n.prototype.trackEvent = function (e, n, i) {
              try {
                var a = new t.Telemetry.Event(e, n, i),
                  r = new t.Telemetry.Common.Data(
                    t.Telemetry.Event.dataType,
                    a,
                  ),
                  o = new t.Telemetry.Common.Envelope(
                    r,
                    t.Telemetry.Event.envelopeType,
                  );
                this.context.track(o);
              } catch (s) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.CRITICAL,
                  t._InternalMessageId.TrackEventFailed,
                  "trackEvent failed, event will not be collected: " +
                    t.Util.getExceptionName(s),
                  { exception: t.Util.dump(s) },
                );
              }
            }),
            (n.prototype.trackDependency = function (
              e,
              n,
              i,
              a,
              r,
              o,
              s,
              l,
              c,
            ) {
              if (
                this.config.maxAjaxCallsPerView === -1 ||
                this._trackAjaxAttempts < this.config.maxAjaxCallsPerView
              ) {
                var d = new t.Telemetry.RemoteDependencyData(
                    e,
                    i,
                    a,
                    r,
                    o,
                    s,
                    n,
                    l,
                    c,
                  ),
                  u = new t.Telemetry.Common.Data(
                    t.Telemetry.RemoteDependencyData.dataType,
                    d,
                  ),
                  p = new t.Telemetry.Common.Envelope(
                    u,
                    t.Telemetry.RemoteDependencyData.envelopeType,
                  );
                this.context.track(p);
              } else
                this._trackAjaxAttempts === this.config.maxAjaxCallsPerView &&
                  t._InternalLogging.throwInternal(
                    t.LoggingSeverity.CRITICAL,
                    t._InternalMessageId.MaxAjaxPerPVExceeded,
                    "Maximum ajax per page view limit reached, ajax monitoring is paused until the next trackPageView(). In order to increase the limit set the maxAjaxCallsPerView configuration parameter.",
                    !0,
                  );
              ++this._trackAjaxAttempts;
            }),
            (n.prototype.trackAjax = function (e, t, n, i, a, r, o) {
              this.trackDependency(e, null, t, n, i, a, r);
            }),
            (n.prototype.trackException = function (e, n, i, a, r) {
              try {
                if (!t.Util.isError(e))
                  try {
                    throw new Error(e);
                  } catch (o) {
                    e = o;
                  }
                var s = new t.Telemetry.Exception(e, n, i, a, r),
                  l = new t.Telemetry.Common.Data(
                    t.Telemetry.Exception.dataType,
                    s,
                  ),
                  c = new t.Telemetry.Common.Envelope(
                    l,
                    t.Telemetry.Exception.envelopeType,
                  );
                this.context.track(c);
              } catch (d) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.CRITICAL,
                  t._InternalMessageId.TrackExceptionFailed,
                  "trackException failed, exception will not be collected: " +
                    t.Util.getExceptionName(d),
                  { exception: t.Util.dump(d) },
                );
              }
            }),
            (n.prototype.trackMetric = function (e, n, i, a, r, o) {
              try {
                var s = new t.Telemetry.Metric(e, n, i, a, r, o),
                  l = new t.Telemetry.Common.Data(
                    t.Telemetry.Metric.dataType,
                    s,
                  ),
                  c = new t.Telemetry.Common.Envelope(
                    l,
                    t.Telemetry.Metric.envelopeType,
                  );
                this.context.track(c);
              } catch (d) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.CRITICAL,
                  t._InternalMessageId.TrackMetricFailed,
                  "trackMetric failed, metric will not be collected: " +
                    t.Util.getExceptionName(d),
                  { exception: t.Util.dump(d) },
                );
              }
            }),
            (n.prototype.trackTrace = function (e, n, i) {
              try {
                var a = new t.Telemetry.Trace(e, n, i),
                  r = new t.Telemetry.Common.Data(
                    t.Telemetry.Trace.dataType,
                    a,
                  ),
                  o = new t.Telemetry.Common.Envelope(
                    r,
                    t.Telemetry.Trace.envelopeType,
                  );
                this.context.track(o);
              } catch (s) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.WARNING,
                  t._InternalMessageId.TrackTraceFailed,
                  "trackTrace failed, trace will not be collected: " +
                    t.Util.getExceptionName(s),
                  { exception: t.Util.dump(s) },
                );
              }
            }),
            (n.prototype.trackPageVisitTime = function (e, t, n) {
              var i = { PageName: e, PageUrl: t };
              this.trackMetric("PageVisitTime", n, 1, n, n, i);
            }),
            (n.prototype.flush = function (e) {
              void 0 === e && (e = !0);
              try {
                this.context._sender.triggerSend(e);
              } catch (n) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.CRITICAL,
                  t._InternalMessageId.FlushFailed,
                  "flush failed, telemetry will not be collected: " +
                    t.Util.getExceptionName(n),
                  { exception: t.Util.dump(n) },
                );
              }
            }),
            (n.prototype.setAuthenticatedUserContext = function (e, n) {
              try {
                this.context.user.setAuthenticatedUserContext(e, n);
              } catch (i) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.WARNING,
                  t._InternalMessageId.SetAuthContextFailed,
                  "Setting auth user context failed. " +
                    t.Util.getExceptionName(i),
                  { exception: t.Util.dump(i) },
                  !0,
                );
              }
            }),
            (n.prototype.clearAuthenticatedUserContext = function () {
              try {
                this.context.user.clearAuthenticatedUserContext();
              } catch (e) {
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.WARNING,
                  t._InternalMessageId.SetAuthContextFailed,
                  "Clearing auth user context failed. " +
                    t.Util.getExceptionName(e),
                  { exception: t.Util.dump(e) },
                  !0,
                );
              }
            }),
            (n.prototype.SendCORSException = function (n) {
              var i =
                e.ApplicationInsights.Telemetry.Exception.CreateSimpleException(
                  "Script error.",
                  "Error",
                  "unknown",
                  "unknown",
                  "The browser's same-origin policy prevents us from getting the details of this exception. Consider using 'crossorigin' attribute.",
                  0,
                  null,
                );
              i.properties = n;
              var a = new t.Telemetry.Common.Data(
                  t.Telemetry.Exception.dataType,
                  i,
                ),
                r = new t.Telemetry.Common.Envelope(
                  a,
                  t.Telemetry.Exception.envelopeType,
                );
              this.context.track(r);
            }),
            (n.prototype._onerror = function (e, n, i, a, r) {
              try {
                var o = { url: n ? n : document.URL };
                if (t.Util.isCrossOriginError(e, n, i, a, r))
                  this.SendCORSException(o);
                else {
                  if (!t.Util.isError(r)) {
                    var s =
                      "window.onerror@" + o.url + ":" + i + ":" + (a || 0);
                    (r = new Error(e)), (r.stack = s);
                  }
                  this.trackException(r, null, o);
                }
              } catch (l) {
                var c = r ? r.name + ", " + r.message : "null",
                  d = t.Util.dump(l);
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.CRITICAL,
                  t._InternalMessageId.ExceptionWhileLoggingError,
                  "_onerror threw exception while logging error, error will not be collected: " +
                    t.Util.getExceptionName(l),
                  { exception: d, errorString: c },
                );
              }
            }),
            n
          );
        })();
        t.AppInsights = n;
        var i = (function () {
          function e(e) {
            (this._name = e), (this._events = {});
          }
          return (
            (e.prototype.start = function (e) {
              "undefined" != typeof this._events[e] &&
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.WARNING,
                  t._InternalMessageId.StartCalledMoreThanOnce,
                  "start was called more than once for this event without calling stop.",
                  { name: this._name, key: e },
                  !0,
                ),
                (this._events[e] = +new Date());
            }),
            (e.prototype.stop = function (e, n, i, a) {
              var r = this._events[e];
              if (isNaN(r))
                t._InternalLogging.throwInternal(
                  t.LoggingSeverity.WARNING,
                  t._InternalMessageId.StopCalledWithoutStart,
                  "stop was called without a corresponding start.",
                  { name: this._name, key: e },
                  !0,
                );
              else {
                var o = +new Date(),
                  s = t.Telemetry.PageViewPerformance.getDuration(r, o);
                this.action(e, n, s, i, a);
              }
              delete this._events[e], (this._events[e] = void 0);
            }),
            e
          );
        })();
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (e) {
        var t = (function () {
          function t() {}
          return (
            (t.reset = function () {
              t.isEnabled() &&
                (e.Util.setSessionStorage(t.ITEMS_QUEUED_KEY, "0"),
                e.Util.setSessionStorage(t.ISSUES_REPORTED_KEY, "0"),
                (t.itemsRestoredFromSessionBuffer = 0));
            }),
            (t.isEnabled = function () {
              return (
                t.enabled &&
                null != t.appInsights &&
                t.appInsights.context._sender._XMLHttpRequestSupported &&
                e.Util.canUseSessionStorage()
              );
            }),
            (t.getIssuesReported = function () {
              var n =
                !t.isEnabled() ||
                isNaN(+e.Util.getSessionStorage(t.ISSUES_REPORTED_KEY))
                  ? 0
                  : +e.Util.getSessionStorage(t.ISSUES_REPORTED_KEY);
              return n;
            }),
            (t.incrementItemsQueued = function () {
              try {
                if (t.isEnabled()) {
                  var n = t.getNumberOfLostItems();
                  ++n,
                    e.Util.setSessionStorage(t.ITEMS_QUEUED_KEY, n.toString());
                }
              } catch (i) {}
            }),
            (t.decrementItemsQueued = function (n) {
              try {
                if (t.isEnabled()) {
                  var i = t.getNumberOfLostItems();
                  (i -= n),
                    i < 0 && (i = 0),
                    e.Util.setSessionStorage(t.ITEMS_QUEUED_KEY, i.toString());
                }
              } catch (a) {}
            }),
            (t.getNumberOfLostItems = function () {
              var n = 0;
              try {
                t.isEnabled() &&
                  (n = isNaN(+e.Util.getSessionStorage(t.ITEMS_QUEUED_KEY))
                    ? 0
                    : +e.Util.getSessionStorage(t.ITEMS_QUEUED_KEY));
              } catch (i) {
                n = 0;
              }
              return n;
            }),
            (t.reportLostItems = function () {
              try {
                if (
                  t.isEnabled() &&
                  t.getIssuesReported() < t.LIMIT_PER_SESSION &&
                  t.getNumberOfLostItems() > 0
                ) {
                  var n =
                    t.getNumberOfLostItems() - t.itemsRestoredFromSessionBuffer;
                  t.appInsights.trackTrace(
                    'AI (Internal): Internal report DATALOSS:"' + n + '"',
                    null,
                  ),
                    t.appInsights.flush();
                  var i = t.getIssuesReported();
                  ++i,
                    e.Util.setSessionStorage(
                      t.ISSUES_REPORTED_KEY,
                      i.toString(),
                    );
                }
              } catch (a) {
                e._InternalLogging.throwInternal(
                  e.LoggingSeverity.CRITICAL,
                  e._InternalMessageId.FailedToReportDataLoss,
                  "Failed to report data loss: " + e.Util.getExceptionName(a),
                  { exception: e.Util.dump(a) },
                );
              } finally {
                try {
                  t.reset();
                } catch (a) {}
              }
            }),
            (t.enabled = !1),
            (t.itemsRestoredFromSessionBuffer = 0),
            (t.LIMIT_PER_SESSION = 10),
            (t.ITEMS_QUEUED_KEY = "AI_itemsQueued"),
            (t.ISSUES_REPORTED_KEY = "AI_lossIssuesReported"),
            t
          );
        })();
        e.DataLossAnalyzer = t;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (t) {
        var n = (function () {
          function n(t) {
            t.queue = t.queue || [];
            var i = t.config || {};
            if (i && !i.instrumentationKey)
              if (((i = t), i.iKey))
                (e.ApplicationInsights.Version = "0.10.0.0"),
                  (i.instrumentationKey = i.iKey);
              else {
                if (!i.applicationInsightsId)
                  throw new Error(
                    "Cannot load Application Insights SDK, no instrumentationKey was provided.",
                  );
                (e.ApplicationInsights.Version = "0.7.2.0"),
                  (i.instrumentationKey = i.applicationInsightsId);
              }
            (i = n.getDefaultConfig(i)), (this.snippet = t), (this.config = i);
          }
          return (
            (n.prototype.loadAppInsights = function () {
              var t = new e.ApplicationInsights.AppInsights(this.config);
              if (this.config.iKey) {
                var n = t.trackPageView;
                t.trackPageView = function (e, i, a) {
                  n.apply(t, [null, e, i, a]);
                };
              }
              var i = "logPageView";
              "function" == typeof this.snippet[i] &&
                (t[i] = function (e, n, i) {
                  t.trackPageView(null, e, n, i);
                });
              var a = "logEvent";
              return (
                "function" == typeof this.snippet[a] &&
                  (t[a] = function (e, n, i) {
                    t.trackEvent(e, n, i);
                  }),
                t
              );
            }),
            (n.prototype.emptyQueue = function () {
              try {
                if (e.ApplicationInsights.Util.isArray(this.snippet.queue)) {
                  for (var n = this.snippet.queue.length, i = 0; i < n; i++) {
                    var a = this.snippet.queue[i];
                    a();
                  }
                  (this.snippet.queue = void 0), delete this.snippet.queue;
                }
              } catch (r) {
                var o = {};
                r &&
                  "function" == typeof r.toString &&
                  (o.exception = r.toString()),
                  e.ApplicationInsights._InternalLogging.throwInternal(
                    t.LoggingSeverity.WARNING,
                    t._InternalMessageId.FailedToSendQueuedTelemetry,
                    "Failed to send queued telemetry",
                    o,
                  );
              }
            }),
            (n.prototype.pollInteralLogs = function (t) {
              return setInterval(function () {
                for (
                  var n = e.ApplicationInsights._InternalLogging.queue,
                    i = n.length,
                    a = 0;
                  a < i;
                  a++
                )
                  t.trackTrace(n[a].message);
                n.length = 0;
              }, this.config.diagnosticLogInterval);
            }),
            (n.prototype.addHousekeepingBeforeUnload = function (t) {
              if (
                !t.config.disableFlushOnBeforeUnload &&
                "onbeforeunload" in window
              ) {
                var n = function () {
                  t.context._sender.triggerSend(),
                    t.context._sessionManager.backup();
                };
                e.ApplicationInsights.Util.addEventHandler("beforeunload", n) ||
                  e.ApplicationInsights._InternalLogging.throwInternal(
                    e.ApplicationInsights.LoggingSeverity.CRITICAL,
                    e.ApplicationInsights._InternalMessageId
                      .FailedToAddHandlerForOnBeforeUnload,
                    "Could not add handler for beforeunload",
                  );
              }
            }),
            (n.getDefaultConfig = function (e) {
              return (
                e || (e = {}),
                (e.endpointUrl =
                  e.endpointUrl ||
                  "https://dc.services.visualstudio.com/v2/track"),
                (e.sessionRenewalMs = 18e5),
                (e.sessionExpirationMs = 864e5),
                (e.maxBatchSizeInBytes =
                  e.maxBatchSizeInBytes > 0 ? e.maxBatchSizeInBytes : 102400),
                (e.maxBatchInterval = isNaN(e.maxBatchInterval)
                  ? 15e3
                  : e.maxBatchInterval),
                (e.enableDebug = t.Util.stringToBoolOrDefault(e.enableDebug)),
                (e.disableExceptionTracking = t.Util.stringToBoolOrDefault(
                  e.disableExceptionTracking,
                )),
                (e.disableTelemetry = t.Util.stringToBoolOrDefault(
                  e.disableTelemetry,
                )),
                (e.verboseLogging = t.Util.stringToBoolOrDefault(
                  e.verboseLogging,
                )),
                (e.emitLineDelimitedJson = t.Util.stringToBoolOrDefault(
                  e.emitLineDelimitedJson,
                )),
                (e.diagnosticLogInterval = e.diagnosticLogInterval || 1e4),
                (e.autoTrackPageVisitTime = t.Util.stringToBoolOrDefault(
                  e.autoTrackPageVisitTime,
                )),
                (isNaN(e.samplingPercentage) ||
                  e.samplingPercentage <= 0 ||
                  e.samplingPercentage >= 100) &&
                  (e.samplingPercentage = 100),
                (e.disableAjaxTracking = t.Util.stringToBoolOrDefault(
                  e.disableAjaxTracking,
                )),
                (e.maxAjaxCallsPerView = isNaN(e.maxAjaxCallsPerView)
                  ? 500
                  : e.maxAjaxCallsPerView),
                (e.isBeaconApiDisabled = t.Util.stringToBoolOrDefault(
                  e.isBeaconApiDisabled,
                  !0,
                )),
                (e.disableCorrelationHeaders = t.Util.stringToBoolOrDefault(
                  e.disableCorrelationHeaders,
                )),
                (e.disableFlushOnBeforeUnload = t.Util.stringToBoolOrDefault(
                  e.disableFlushOnBeforeUnload,
                )),
                (e.enableSessionStorageBuffer = t.Util.stringToBoolOrDefault(
                  e.enableSessionStorageBuffer,
                  !0,
                )),
                (e.isRetryDisabled = t.Util.stringToBoolOrDefault(
                  e.isRetryDisabled,
                )),
                (e.isCookieUseDisabled = t.Util.stringToBoolOrDefault(
                  e.isCookieUseDisabled,
                )),
                (e.isStorageUseDisabled = t.Util.stringToBoolOrDefault(
                  e.isStorageUseDisabled,
                )),
                (e.isBrowserLinkTrackingEnabled = t.Util.stringToBoolOrDefault(
                  e.isBrowserLinkTrackingEnabled,
                )),
                e
              );
            }),
            n
          );
        })();
        t.Initialization = n;
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {}));
    var n;
    !(function (e) {
      var t;
      !(function (t) {
        try {
          if ("undefined" != typeof window && "undefined" != typeof JSON) {
            var n = "appInsights";
            if (void 0 === window[n])
              e.ApplicationInsights.AppInsights.defaultConfig =
                e.ApplicationInsights.Initialization.getDefaultConfig();
            else {
              var i = window[n] || {},
                a = new e.ApplicationInsights.Initialization(i),
                r = a.loadAppInsights();
              for (var o in r) i[o] = r[o];
              a.emptyQueue(),
                a.pollInteralLogs(r),
                a.addHousekeepingBeforeUnload(r);
            }
          }
        } catch (s) {
          e.ApplicationInsights._InternalLogging.warnToConsole(
            "Failed to initialize AppInsights JS SDK: " + s.message,
          );
        }
      })((t = e.ApplicationInsights || (e.ApplicationInsights = {})));
    })(n || (n = {})),
      (t.Microsoft = n),
      (t.AI = a);
  },
  function (e, t) {
    e.exports =
      '<input type=hidden name=i2 data-bind="value: clientMode"/> <input type=hidden name=i17 data-bind="value: srsFailed"/> <input type=hidden name=i18 data-bind="value: srsSuccess"/> <input type=hidden name=i19 data-bind="value: timeOnPage"/>';
  },
  function (e, t, n) {
    function i() {
      var e = this;
      (e.isAppBranding = a.observable(!1)),
        (e.backgroundStyle = a.observable()),
        (e.smallImageUrl = a.observable()),
        (e.backgroundImageUrl = a.observable()),
        (e.useImageMask = a.observable(!1)),
        (e.updateBranding = function (t) {
          e.isAppBranding(!!t.backgroundLogoUrl),
            e.backgroundStyle(t.color),
            e.smallImageUrl(t.smallImageUrl),
            e.backgroundImageUrl(t.backgroundImageUrl),
            e.useImageMask(!!t.useImageMask);
        });
    }
    var a = n(1),
      r = n(7),
      o = window;
    a.components.register("background-image", {
      viewModel: i,
      template: n(328),
      synchronous:
        !o.ServerData.A || r.Helper.isStackSizeGreaterThan(o.ServerData.A),
      enableExtensions: !0,
    }),
      (e.exports = i);
  },
  function (e, t) {
    e.exports =
      '<div class=background role=presentation data-bind="css: { app: isAppBranding }, style: { background: backgroundStyle }"><!-- ko if: smallImageUrl --> <div data-bind="backgroundImage: smallImageUrl()"></div><!-- /ko --><!-- ko if: backgroundImageUrl --> <div class=backgroundImage data-bind="backgroundImage: backgroundImageUrl()"></div><!-- ko if: useImageMask --> <div class=background-overlay></div><!-- /ko --><!-- /ko --> </div>';
  },
  function (e, t, n) {
    var i = n(1),
      a = n(7),
      r = window;
    i.components.register("logo-control", {
      template: n(330),
      synchronous:
        !r.ServerData.A || a.Helper.isStackSizeGreaterThan(r.ServerData.A),
    });
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(168), "") +
      " --><!-- ko if: bannerLogoUrl --> <img class=banner-logo role=presentation data-bind=\"attr: { src: bannerLogoUrl }\"/><!-- /ko --><!-- ko if: !bannerLogoUrl && !isChinaDc --><!-- ko component: 'accessible-image-control' --> <img class=logo role=presentation pngsrc=" +
      n(331) +
      " svgsrc=" +
      n(332) +
      " data-bind=imgSrc /> <img class=logo role=presentation pngsrc=" +
      n(333) +
      " svgsrc=" +
      n(334) +
      " data-bind=imgSrc /><!-- /ko --> <!-- /ko -->";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/microsoft_logo_white.png?x=a2203a52ce0843427c69786e18841437";
  },
  function (e, t, n) {
    e.exports =
      n.p +
      "images/microsoft_logo_white.svg?x=595e9206d4274c42c27b66e371fa633d";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/microsoft_logo.png?x=ed9c9eb0dce17d752bedea6b5acda6d9";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/microsoft_logo.svg?x=ee5c8d9fb6248c938fd0dc19370e90bd";
  },
  function (e, t, n) {
    var i = n(1),
      a = n(7),
      r = window;
    i.components.register("cookie-banner-control", {
      template: n(336),
      synchronous:
        !r.ServerData.A || a.Helper.isStackSizeGreaterThan(r.ServerData.A),
    });
  },
  function (e, t, n) {
    e.exports =
      "<!-- " +
      (n(168), "") +
      " --> <div id=msccBanner class=cc-banner role=alert> <div class=cc-container><!-- ko component: 'accessible-image-control' --> <img class=\"cc-icon cc-v-center\" role=presentation pngsrc=" +
      n(337) +
      " svgsrc=" +
      n(338) +
      ' data-bind=imgSrc /> <img class="cc-icon cc-v-center" role=presentation pngsrc=' +
      n(339) +
      " svgsrc=" +
      n(340) +
      " data-bind=imgSrc /><!-- /ko --> <span class=\"cc-v-center cc-text\" data-bind=\"\n            htmlWithBindings: html['CT_STR_CookieBanner_Text'],\n            childBindings: {\n                'msccLearnMore': {\n                    href: svr.aK,\n                    ariaLabel: str['CT_STR_CookieBanner_Link_AriaLabel'],\n                    css: { 'cc-link cc-v-center float-right': true } } }\"></span> </div> </div>";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/info_white.png?x=e00ab59e3d80d3eb2dee43a21cf7fa0e";
  },
  function (e, t, n) {
    e.exports =
      n.p + "images/info_white.svg?x=400085fad5af434e7f61e0a7e4f90e3d";
  },
  function (e, t, n) {
    e.exports = n.p + "images/info.png?x=f80c92602db0428ef47b2bb71ea236b4";
  },
  function (e, t, n) {
    e.exports = n.p + "images/info.svg?x=4883eb1a3cbdddf5a79e28d320cfe5a9";
  },
]),
  (window.__ConvergedLogin_PCore = !0);
//# sourceMappingURL=6f531b1998d09ac0d3d5.map
