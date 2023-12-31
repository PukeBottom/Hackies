!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(function (e) {
  var r = "waitForImages";
  (e.waitForImages = {
    hasImageProperties: [
      "backgroundImage",
      "listStyleImage",
      "borderImage",
      "borderCornerImage",
      "cursor",
    ],
    hasImageAttributes: ["srcset"],
  }),
    (e.expr[":"]["has-src"] = function (r) {
      return e(r).is('img[src][src!=""]');
    }),
    (e.expr[":"].uncached = function (r) {
      return !!e(r).is(":has-src") && !r.complete;
    }),
    (e.fn.waitForImages = function () {
      var t,
        s,
        n,
        a = 0,
        i = 0,
        c = e.Deferred();
      if (
        (e.isPlainObject(arguments[0])
          ? ((n = arguments[0].waitForAll),
            (s = arguments[0].each),
            (t = arguments[0].finished))
          : 1 === arguments.length && "boolean" === e.type(arguments[0])
          ? (n = arguments[0])
          : ((t = arguments[0]), (s = arguments[1]), (n = arguments[2])),
        (t = t || e.noop),
        (s = s || e.noop),
        (n = !!n),
        !e.isFunction(t) || !e.isFunction(s))
      )
        throw new TypeError("An invalid callback was supplied.");
      return (
        this.each(function () {
          var o = e(this),
            u = [],
            h = e.waitForImages.hasImageProperties || [],
            l = e.waitForImages.hasImageAttributes || [],
            f = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
          n
            ? o
                .find("*")
                .addBack()
                .each(function () {
                  var r = e(this);
                  r.is("img:has-src") &&
                    !r.is("[srcset]") &&
                    u.push({ src: r.attr("src"), element: r[0] }),
                    e.each(h, function (e, t) {
                      var s,
                        n = r.css(t);
                      if (!n) return !0;
                      for (; (s = f.exec(n)); )
                        u.push({ src: s[2], element: r[0] });
                    }),
                    e.each(l, function (e, t) {
                      var s = r.attr(t);
                      return (
                        !s ||
                        void u.push({
                          src: r.attr("src"),
                          srcset: r.attr("srcset"),
                          element: r[0],
                        })
                      );
                    });
                })
            : o.find("img:has-src").each(function () {
                u.push({ src: this.src, element: this });
              }),
            (a = u.length),
            (i = 0),
            0 === a && (t.call(o[0]), c.resolveWith(o[0])),
            e.each(u, function (n, u) {
              var h = new Image(),
                l = "load." + r + " error." + r;
              e(h).one(l, function r(n) {
                var h = [i, a, "load" == n.type];
                return (
                  i++,
                  s.apply(u.element, h),
                  c.notifyWith(u.element, h),
                  e(this).off(l, r),
                  i == a ? (t.call(o[0]), c.resolveWith(o[0]), !1) : void 0
                );
              }),
                u.srcset && (h.srcset = u.srcset),
                (h.src = u.src);
            });
        }),
        c.promise()
      );
    });
});
