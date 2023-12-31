//tealium universal tag - utag.loader ut4.0.201806182110, Copyright 2018 Tealium.com Inc. All Rights Reserved.
var utag_condload = false;
try {
  (function () {
    function ul(src, a, b) {
      a = document;
      b = a.createElement("script");
      b.language = "javascript";
      b.type = "text/javascript";
      b.src = src;
      a.getElementsByTagName("head")[0].appendChild(b);
    }
    if (
      ("" + document.cookie).match(
        "utag_env_ea_originx=(//tags.tiqcdn.com/utag/ea/[^S;]*)",
      )
    ) {
      if (RegExp.$1.indexOf("/prod/") === -1) {
        var s = RegExp.$1;
        while (s.indexOf("%") != -1) {
          s = decodeURIComponent(s);
        }
        s = s.replace(/\.\./g, "");
        ul(s);
        utag_condload = true;
        __tealium_default_path = "//tags.tiqcdn.com/utag/ea/originx/prod/";
      }
    }
  })();
} catch (e) {}
try {
  window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
  window.utag_cfg_ovrd = { noview: true };
  window.utag_cfg_ovrd.load_rules_at_wait = true;
} catch (e) {}
if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id: "ea.originx",
    o: {},
    sender: {},
    send: {},
    rpt: { ts: { a: new Date() } },
    dbi: [],
    db_log: [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q: [],
      sendq: { pending: 0 },
      run_ready_q: function () {
        for (var i = 0; i < utag.loader.ready_q.length; i++) {
          utag.DB("READY_Q:" + i);
          try {
            utag.loader.ready_q[i]();
          } catch (e) {
            utag.DB(e);
          }
        }
      },
      lh: function (a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = /\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function (a, b, c, d, g) {
        utag.DB("WQ:" + utag.loader.wq.length);
        try {
          if (utag.udoname && utag.udoname.indexOf(".") < 0) {
            utag.ut.merge(utag.data, window[utag.udoname], 0);
          }
          if (utag.cfg.load_rules_at_wait) {
            utag.handler.LR(utag.data);
          }
        } catch (e) {
          utag.DB(e);
        }
        d = 0;
        g = [];
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
          b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4) {
            this.f[b.id] = 0;
            utag.loader.LOAD(b.id);
          } else if (b.load > 0) {
            g.push(b);
            d++;
          } else {
            this.f[b.id] = 1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }
        if (d == 0) {
          utag.loader.END();
        }
      },
      AS: function (a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == "undefined") {
          a.src =
            utag.cfg.path +
            (typeof a.name != "undefined"
              ? a.name
              : "ut" + "ag." + a.id + ".js");
        }
        a.src +=
          (a.src.indexOf("?") > 0 ? "&" : "?") +
          "utv=" +
          (a.v ? utag.cfg.template + a.v : utag.cfg.v);
        utag.rpt["l_" + a.id] = a.src;
        b = document;
        this.f[a.id] = 0;
        if (a.load == 2) {
          utag.DB("Attach sync: " + a.src);
          a.uid = a.id;
          b.write(
            '<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + "ipt>",
          );
          if (typeof a.cb != "undefined") a.cb();
        } else if (a.load == 1 || a.load == 3) {
          if (b.createElement) {
            c = "utag_ea.originx_" + a.id;
            if (!b.getElementById(c)) {
              d = { src: a.src, id: c, uid: a.id, loc: a.loc };
              if (a.load == 3) {
                d.type = "iframe";
              }
              if (typeof a.cb != "undefined") d.cb = a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function (a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b;
      },
      OU: function (a, b, c, d, f) {
        try {
          if (typeof utag.data["cp.OPTOUTMULTI"] != "undefined") {
            c = utag.loader.cfg;
            a = utag.ut.decode(utag.data["cp.OPTOUTMULTI"]).split("|");
            for (d = 0; d < a.length; d++) {
              b = a[d].split(":");
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf("c") == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                  }
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true;
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0;
                  }
                }
              }
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      RDdom: function (o) {
        var d = document || {},
          l = location || {};
        o["dom.referrer"] = d.referrer;
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] =
          window.innerHeight ||
          (d.documentElement ? d.documentElement.clientHeight : 960);
        o["dom.viewport_width"] =
          window.innerWidth ||
          (d.documentElement ? d.documentElement.clientWidth : 960);
      },
      RDcp: function (o, b, c, d) {
        b = utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV(utag.cl && !utag.cl["_all_"] ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined")
            o["cp." + c] = b[c];
        }
      },
      RDqp: function (o, a, b, c) {
        a = location.search + (location.hash + "").replace("#", "&");
        if (utag.cfg.lowerqp) {
          a = a.toLowerCase();
        }
        if (a.length > 1) {
          b = a.substring(1).split("&");
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if (c.length > 1) {
              o["qp." + c[0]] = utag.ut.decode(c[1]);
            }
          }
        }
      },
      RDmeta: function (o, a, b, h) {
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try {
            h = a[b].name || a[b].getAttribute("property") || "";
          } catch (e) {
            h = "";
            utag.DB(e);
          }
          if (utag.cfg.lowermeta) {
            h = h.toLowerCase();
          }
          if (h != "") {
            o["meta." + h] = a[b].content;
          }
        }
      },
      RDva: function (o) {
        var readAttr = function (o, l) {
          var a = "",
            b;
          a = localStorage.getItem(l);
          if (!a || a == "{}") return;
          b = utag.ut.flatten({ va: JSON.parse(a) });
          utag.ut.merge(o, b, 1);
        };
        try {
          readAttr(o, "tealium_va");
          readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
        } catch (e) {
          utag.DB(e);
        }
      },
      RDut: function (o, a) {
        var t = {};
        var d = new Date();
        var m = utag.ut.typeOf(d.toISOString) == "function";
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        t["tealium_event"] = o["ut.event"] = a || "view";
        t["tealium_visitor_id"] = o["ut.visitor_id"] = o["cp.utag_main_v_id"];
        t["tealium_session_id"] = o["ut.session_id"] = o["cp.utag_main_ses_id"];
        try {
          t["tealium_datasource"] = "";
          t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
          t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
          t["tealium_environment"] = o["ut.env"] = utag.cfg.path.split("/")[6];
        } catch (e) {
          utag.DB(e);
        }
        t["tealium_random"] = Math.random().toFixed(16).substring(2);
        t["tealium_library_name"] = "ut" + "ag.js";
        t["tealium_library_version"] = (utag.cfg.template + "0").substring(2);
        t["tealium_timestamp_epoch"] = Math.floor(d.getTime() / 1000);
        t["tealium_timestamp_utc"] = m ? d.toISOString() : "";
        d.setHours(d.getHours() - d.getTimezoneOffset() / 60);
        t["tealium_timestamp_local"] = m
          ? d.toISOString().replace("Z", "")
          : "";
        utag.ut.merge(o, t, 0);
      },
      RDses: function (o, a, c) {
        a = new Date().getTime();
        c = a + parseInt(utag.cfg.session_timeout) + "";
        if (!o["cp.utag_main_ses_id"]) {
          o["cp.utag_main_ses_id"] = a + "";
          o["cp.utag_main__ss"] = "1";
          o["cp.utag_main__sn"] = 1 + parseInt(o["cp.utag_main__sn"] || 0) + "";
        } else {
          o["cp.utag_main__ss"] = "0";
        }
        o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
        o["cp.utag_main__st"] = c;
        utag.loader.SC("utag_main", {
          _sn: o["cp.utag_main__sn"] || 1,
          _ss: o["cp.utag_main__ss"],
          _st: c,
          ses_id: (o["cp.utag_main_ses_id"] || a) + ";exp-session",
          _pn: o["cp.utag_main__pn"] + ";exp-session",
        });
      },
      RDpv: function (o) {
        if (typeof utag.pagevars == "function") {
          utag.DB("Read page variables");
          utag.pagevars(o);
        }
      },
      RD: function (o, a) {
        utag.DB("utag.loader.RD");
        utag.DB(o);
        utag.loader.RDcp(o);
        if (!utag.loader.rd_flag) {
          utag.loader.rd_flag = 1;
          o["cp.utag_main_v_id"] =
            o["cp.utag_main_v_id"] || utag.ut.vi(new Date().getTime());
          o["cp.utag_main__pn"] = 1 + parseInt(o["cp.utag_main__pn"] || 0) + "";
          utag.loader.SC("utag_main", { v_id: o["cp.utag_main_v_id"] });
          utag.loader.RDses(o);
        }
        if (a && !utag.cfg.noview) utag.loader.RDses(o);
        utag.loader.RDqp(o);
        utag.loader.RDmeta(o);
        utag.loader.RDdom(o);
        utag.loader.RDut(o, a || "view");
        utag.loader.RDpv(o);
        utag.loader.RDva(o);
      },
      RC: function (
        a,
        x,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        v,
        ck,
        cv,
        r,
        s,
        t,
      ) {
        o = {};
        b = "" + document.cookie != "" ? document.cookie.split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = new Date().getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck != "undefined") {
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try {
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h;
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                } catch (er) {
                  utag.DB(er);
                }
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (j[f] instanceof Array) {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)) {
                      k =
                        RegExp.$2 == "session"
                          ? typeof j._st != "undefined"
                            ? j._st
                            : t - 1
                          : parseInt(RegExp.$2);
                      if (k > t) n[m] = x == 0 ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k =
                      RegExp.$2 == "session"
                        ? typeof j._st != "undefined"
                          ? j._st
                          : t - 1
                        : parseInt(RegExp.$2);
                    j[f] = k < t ? null : x == 0 ? j[f] : RegExp.$1;
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl["_all_"]) {
              o[ck] = e;
            }
          }
        }
        return a ? (o[a] ? o[a] : {}) : o;
      },
      SC: function (a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a == "utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b;
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g =
                date.getTime() +
                parseInt(RegExp.$2) * (RegExp.$3 == "h" ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = d[e] != null ? f - 0 + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|");
                }
                g = d[e] instanceof Array ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g;
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (d[g] instanceof Array) {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c]);
              }
              h.push(g + ":~" + d[g].join("|"));
            } else
              h.push(
                (g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g]),
              );
          }
          if (h.length == 0) {
            h.push("");
            x = "";
          }
          v = h.join("$");
        }
        document.cookie =
          a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
        return 1;
      },
      LOAD: function (a, b, c, d) {
        if (!utag.loader.cfg) {
          return;
        }
        if (this.ol == 0) {
          if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
            this.f[a] = 1;
            delete utag.loader.bq[a];
          }
          for (b in utag.loader.GV(utag.loader.bq)) {
            if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
              utag.loader.bk[a] = 1;
              utag.DB("blocked: " + a);
            }
            utag.DB("blocking: " + b);
            return;
          }
          utag.loader.INIT();
          return;
        }
        utag.DB("utag.loader.LOAD:" + a);
        if (this.f[a] == 0) {
          this.f[a] = 1;
          if (utag.cfg.noview != true) {
            if (utag.loader.cfg[a].send) {
              utag.DB("SENDING: " + a);
              try {
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: " + a);
                  while ((d = utag.loader.sendq[a].shift())) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send("view", utag.handler.C(utag.data));
                }
                utag.rpt["s_" + a] = 0;
              } catch (e) {
                utag.DB(e);
                utag.rpt["s_" + a] = 1;
              }
            }
          }
          if (utag.loader.rf == 0) return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return;
          }
          utag.loader.END();
        }
      },
      EV: function (a, b, c, d) {
        if (b == "ready") {
          if (!utag.data) {
            try {
              utag.cl = { _all_: 1 };
              utag.loader.initdata();
              utag.loader.RD(utag.data);
            } catch (e) {
              utag.DB(e);
            }
          }
          if (
            document.attachEvent || utag.cfg.dom_complete
              ? document.readyState === "complete"
              : document.readyState !== "loading"
          )
            setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;
            if (utag.loader.ready_q.length <= 1) {
              if (document.addEventListener) {
                RH = function () {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q();
                };
                if (!utag.cfg.dom_complete)
                  document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function () {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q();
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false);
          } else if (a.attachEvent) {
            a.attachEvent((d == 1 ? "" : "on") + b, c);
          }
        }
      },
      END: function (b, c, d, e, v, w) {
        if (this.ended) {
          return;
        }
        this.ended = 1;
        utag.DB("loader.END");
        b = utag.data;
        if (utag.handler.base && utag.handler.base != "*") {
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]];
          }
        } else if (utag.handler.base == "*") {
          utag.ut.merge(utag.handler.df, b, 1);
        }
        utag.rpt["r_0"] = "t";
        for (var r in utag.loader.GV(utag.cond)) {
          utag.rpt["r_" + r] = utag.cond[r] ? "t" : "f";
        }
        utag.rpt.ts["s"] = new Date();
        v = ".tiqcdn.com";
        w = utag.cfg.path.indexOf(v);
        if (w > 0 && b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count)
          utag.ut.loader({
            src:
              utag.cfg.path.substring(0, w) +
              v +
              "/ut" +
              "ag/tiqapp/ut" +
              "ag.v.js?a=" +
              utag.cfg.utid +
              (utag.cfg.nocookie
                ? "&nocookie=1"
                : "&cb=" + new Date().getTime()),
            id: "tiqapp",
          });
        if (utag.cfg.noview != true) utag.handler.RE("view", b, "end");
        utag.handler.INIT();
      },
    },
    DB: function (a, b) {
      if (utag.cfg.utagdb === false) {
        return;
      } else if (typeof utag.cfg.utagdb == "undefined") {
        b = document.cookie + "";
        utag.cfg.utagdb = b.indexOf("utagdb=true") >= 0 ? true : false;
      }
      if (utag.cfg.utagdb === true) {
        var t;
        if (utag.ut.typeOf(a) == "object") {
          t = utag.handler.C(a);
        } else {
          t = a;
        }
        utag.db_log.push(t);
        try {
          if (!utag.cfg.noconsole) console.log(t);
        } catch (e) {}
      }
    },
    RP: function (a, b, c) {
      if (
        typeof a != "undefined" &&
        typeof a.src != "undefined" &&
        a.src != ""
      ) {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != "src") b.push(c + "=" + escape(a[c]));
        }
        this.dbi.push(
          (new Image().src =
            a.src +
            "?utv=" +
            utag.cfg.v +
            "&utid=" +
            utag.cfg.utid +
            "&" +
            b.join("&")),
        );
      }
    },
    view: function (a, c, d) {
      return this.track({ event: "view", data: a, cfg: { cb: c, uids: d } });
    },
    link: function (a, c, d) {
      return this.track({ event: "link", data: a, cfg: { cb: c, uids: d } });
    },
    track: function (a, b, c, d) {
      if (typeof a == "string") a = { event: a, data: b, cfg: { cb: c } };
      for (d in utag.loader.GV(utag.o)) {
        try {
          utag.o[d].handler.trigger(a.event || "view", a.data || a, a.cfg);
        } catch (e) {
          utag.DB(e);
        }
      }
      if (a.cfg && a.cfg.cb)
        try {
          a.cfg.cb();
        } catch (e) {
          utag.DB(e);
        }
      return true;
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function (a, b, c) {
        utag.DB("utag.handler.INIT");
        if (utag.initcatch) {
          utag.initcatch = 0;
          return;
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c);
          }
        }
      },
      test: function () {
        return 1;
      },
      LR: function (b) {
        utag.DB("Load Rules");
        for (var d in utag.loader.GV(utag.cond)) {
          utag.cond[d] = false;
        }
        utag.DB(b);
        utag.loader.loadrules(b);
        utag.DB(utag.cond);
        utag.loader.initcfg();
        utag.loader.OU();
        for (var r in utag.loader.GV(utag.cond)) {
          utag.rpt["r_" + r] = utag.cond[r] ? "t" : "f";
        }
      },
      RE: function (a, b, c, d, e, f, g) {
        if (c != "alr" && !this.cfg_extend) {
          return 0;
        }
        utag.DB("RE: " + c);
        if (c == "alr") utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if (typeof this.extend != "undefined") {
          g = 0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              e = 0;
              if (typeof this.cfg_extend != "undefined") {
                f = this.cfg_extend[d];
                if (typeof f.count == "undefined") f.count = 0;
                if (f[a] == 0 || (f.once == 1 && f.count > 0) || f[c] == 0) {
                  e = 1;
                } else {
                  if (f[c] == 1) {
                    g = 1;
                  }
                  f.count++;
                }
              }
              if (e != 1) {
                this.extend[d](a, b);
                utag.rpt["ex_" + d] = 0;
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt["ex_" + d] = 1;
              utag.ut.error({
                e: er.message,
                s: utag.cfg.path + "utag.js",
                l: d,
                t: "ge",
              });
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function (a, b, c, d, e, f) {
        utag.DB("trigger:" + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
        b = b || {};
        utag.DB(b);
        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1))
              utag.DB("Tag " + d + " did not LOAD");
          }
          utag.loader.q.push({ a: a, b: utag.handler.C(b), c: c });
          return;
        }
        utag.ut.merge(b, this.df, 0);
        utag.loader.RD(b, a);
        utag.cfg.noview = false;
        function sendTag(a, b, d) {
          try {
            if (typeof utag.sender[d] != "undefined") {
              utag.DB("SENDING: " + d);
              utag.sender[d].send(a, utag.handler.C(b));
              utag.rpt["s_" + d] = 0;
            } else if (
              utag.loader.cfg[d].load != 2 &&
              utag.loader.cfg[d].s2s != 1
            ) {
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({ event: a, data: utag.handler.C(b) });
              utag.loader.sendq.pending++;
              utag.loader.AS({ id: d, load: 1 });
            }
          } catch (e) {
            utag.DB(e);
          }
        }
        if (c && c.uids) {
          this.RE(a, b, "alr");
          for (f = 0; f < c.uids.length; f++) {
            d = c.uids[f];
            sendTag(a, b, d);
          }
        } else if (utag.cfg.load_rules_ajax) {
          this.RE(a, b, "blr");
          this.LR(b);
          this.RE(a, b, "alr");
          for (f = 0; f < utag.loader.cfgsort.length; f++) {
            d = utag.loader.cfgsort[f];
            if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
              sendTag(a, b, d);
            }
          }
        } else {
          this.RE(a, b, "alr");
          for (d in utag.loader.GV(utag.sender)) {
            sendTag(a, b, d);
          }
        }
        this.RE(a, b, "end");
      },
      C: function (a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if (a[c] instanceof Array) {
            b[c] = a[c].slice(0);
          } else {
            b[c] = a[c];
          }
        }
        return b;
      },
    },
    ut: {
      pad: function (a, b, c, d) {
        a = "" + (a - 0).toString(16);
        d = "";
        if (b > a.length) {
          for (c = 0; c < b - a.length; c++) {
            d += "0";
          }
        }
        return "" + d + a;
      },
      vi: function (t, a, b) {
        if (!utag.v_id) {
          a = this.pad(t, 12);
          b = "" + Math.random();
          a += this.pad(b.substring(2, b.length), 16);
          try {
            a += this.pad(
              navigator.plugins.length ? navigator.plugins.length : 0,
              2,
            );
            a += this.pad(navigator.userAgent.length, 3);
            a += this.pad(document.URL.length, 4);
            a += this.pad(navigator.appVersion.length, 3);
            a += this.pad(
              screen.width +
                screen.height +
                parseInt(
                  screen.colorDepth ? screen.colorDepth : screen.pixelDepth,
                ),
              5,
            );
          } catch (e) {
            utag.DB(e);
            a += "12345";
          }
          utag.v_id = a;
        }
        return utag.v_id;
      },
      hasOwn: function (o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a);
      },
      isEmptyObject: function (o, a) {
        for (a in o) {
          if (utag.ut.hasOwn(o, a)) return false;
        }
        return true;
      },
      isEmpty: function (o) {
        var t = utag.ut.typeOf(o);
        if (t == "number") {
          return isNaN(o);
        } else if (t == "boolean") {
          return false;
        } else if (t == "string") {
          return o.length === 0;
        } else return utag.ut.isEmptyObject(o);
      },
      typeOf: function (e) {
        return {}.toString
          .call(e)
          .match(/\s([a-zA-Z]+)/)[1]
          .toLowerCase();
      },
      flatten: function (o) {
        var a = {};
        function r(c, p) {
          if (Object(c) !== c || c instanceof Array) {
            a[p] = c;
          } else {
            if (utag.ut.isEmptyObject(c)) {
            } else {
              for (var d in c) {
                r(c[d], p ? p + "." + d : d);
              }
            }
          }
        }
        r(o, "");
        return a;
      },
      merge: function (a, b, c, d) {
        if (c) {
          for (d in utag.loader.GV(b)) {
            a[d] = b[d];
          }
        } else {
          for (d in utag.loader.GV(b)) {
            if (typeof a[d] == "undefined") a[d] = b[d];
          }
        }
      },
      decode: function (a, b) {
        b = "";
        try {
          b = decodeURIComponent(a);
        } catch (e) {
          utag.DB(e);
        }
        if (b == "") {
          b = unescape(a);
        }
        return b;
      },
      encode: function (a, b) {
        b = "";
        try {
          b = encodeURIComponent(a);
        } catch (e) {
          utag.DB(e);
        }
        if (b == "") {
          b = escape(a);
        }
        return b;
      },
      error: function (a, b, c) {
        if (typeof utag_err != "undefined") {
          utag_err.push(a);
        }
      },
      loader: function (o, a, b, c, l, m) {
        utag.DB(o);
        a = document;
        if (o.type == "iframe") {
          m = a.getElementById(o.id);
          if (m && m.tagName == "IFRAME") {
            b = m;
          } else {
            b = a.createElement("iframe");
          }
          o.attrs = o.attrs || {};
          utag.ut.merge(
            o.attrs,
            { height: "1", width: "1", style: "display:none" },
            0,
          );
        } else if (o.type == "img") {
          utag.DB("Attach img: " + o.src);
          b = new Image();
        } else {
          b = a.createElement("script");
          b.language = "javascript";
          b.type = "text/javascript";
          b.async = 1;
          b.charset = "utf-8";
        }
        if (o.id) {
          b.id = o.id;
        }
        for (l in utag.loader.GV(o.attrs)) {
          b.setAttribute(l, o.attrs[l]);
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb == "function") {
          if (b.addEventListener) {
            b.addEventListener(
              "load",
              function () {
                o.cb();
              },
              false,
            );
          } else {
            b.onreadystatechange = function () {
              if (
                this.readyState == "complete" ||
                this.readyState == "loaded"
              ) {
                this.onreadystatechange = null;
                o.cb();
              }
            };
          }
        }
        if (o.type != "img" && !m) {
          l = o.loc || "head";
          c = a.getElementsByTagName(l)[0];
          if (c) {
            utag.DB("Attach to " + l + ": " + o.src);
            if (l == "script") {
              c.parentNode.insertBefore(b, c);
            } else {
              c.appendChild(b);
            }
          }
        }
      },
    },
  };
  utag.o["ea.originx"] = utag;
  utag.cfg = {
    template: "ut4.42.",
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    noconsole: false,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    path: "//tags.tiqcdn.com/utag/ea/originx/prod/",
    utid: "ea/originx/201806182110",
  };
  utag.cfg.v = utag.cfg.template + "201806182110";
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [76]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [74]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [82]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [83]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [114]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [111]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [71]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [115]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [117]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [142]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [148]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [145]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [147]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [178]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [198]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  try {
    var _gaq = _gaq || [];
    var pageTracker = pageTracker || {
      _trackEvent: function (c, d, e, f, g) {
        g = {
          ga_eventCat: c,
          ga_eventAction: d,
          ga_eventLabel: e,
          ga_eventValue: f,
        };
        utag.link(g, null, [146]);
      },
      _trackPageview: function (c) {
        _gaq.push(["_trackPageview", c ? c : null]);
      },
    };
  } catch (e) {}
  utag.cond = {
    138: 0,
    139: 0,
    140: 0,
    141: 0,
    39: 0,
    40: 0,
    41: 0,
    42: 0,
    43: 0,
    44: 0,
    45: 0,
    46: 0,
    648: 0,
    649: 0,
    650: 0,
    652: 0,
    653: 0,
    654: 0,
    655: 0,
    656: 0,
    657: 0,
    658: 0,
    659: 0,
    660: 0,
    661: 0,
    662: 0,
    663: 0,
    664: 0,
    665: 0,
    666: 0,
    667: 0,
    668: 0,
    669: 0,
    670: 0,
    671: 0,
    672: 0,
    673: 0,
    674: 0,
    675: 0,
    676: 0,
    677: 0,
    678: 0,
    679: 0,
    680: 0,
    681: 0,
  };
  utag.pagevars = function (ud) {
    ud = ud || utag.data;
    try {
      ud["js_page.navigator.userAgent"] = navigator.userAgent;
    } catch (e) {
      utag.DB(e);
    }
  };
  utag.loader.initdata = function () {
    try {
      utag.data = typeof utag_data != "undefined" ? utag_data : {};
      utag.udoname = "utag_data";
    } catch (e) {
      utag.data = {};
      utag.DB("idf:" + e);
    }
  };
  utag.loader.loadrules = function (_pd, _pc) {
    var d = _pd || utag.data;
    var c = _pc || utag.cond;
    for (var l in utag.loader.GV(c)) {
      switch (l) {
        case "138":
          try {
            c[138] |=
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
              d["dom.hash"].toString().toLowerCase() ==
                "thankYou".toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "139":
          try {
            c[139] |=
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "140":
          try {
            c[140] |=
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("origin-access".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("nux".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "141":
          try {
            c[141] |=
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("origin-access".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "39":
          try {
            c[39] |=
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("battlefield".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("crysis".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("mass-effect".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("medal-of-honor".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("mirrors-edge".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("need-for-speed".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("plants-vs-zombies".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("star-wars".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("titanfall".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "40":
          try {
            c[40] |=
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("dragon-age".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("mirrors-edge".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("UNRAVEL".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "41":
          try {
            c[41] |=
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
              d["mdm_franchise"]
                .toString()
                .toLowerCase()
                .indexOf("need-for-speed".toLowerCase()) > -1 &&
              d["js_page.navigator.userAgent"]
                .toString()
                .toLowerCase()
                .indexOf("QtWebEngine".toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "42":
          try {
            c[42] |=
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("dragon-age".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("mirrors-edge".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("star-wars".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "43":
          try {
            c[43] |=
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("battlefield".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("crysis".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("dead-space".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("mass-effect".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("medal-of-honor".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("mirrors-edge".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("plants-vs-zombies".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("star-wars".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("titanfall".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "44":
          try {
            c[44] |=
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("the-sims".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("simcity".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "45":
          try {
            c[45] |=
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
              d["mdm_franchise"]
                .toString()
                .toLowerCase()
                .indexOf("fifa".toLowerCase()) > -1 &&
              d["js_page.navigator.userAgent"]
                .toString()
                .toLowerCase()
                .indexOf("QtWebEngine".toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "46":
          try {
            c[46] |=
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("plants-vs-zombies".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0) ||
              (d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
                d["mdm_franchise"]
                  .toString()
                  .toLowerCase()
                  .indexOf("UNRAVEL".toLowerCase()) > -1 &&
                d["js_page.navigator.userAgent"]
                  .toString()
                  .toLowerCase()
                  .indexOf("QtWebEngine".toLowerCase()) < 0);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "648":
          try {
            c[648] |=
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
              typeof d["userid"] != "undefined" &&
              d["userid"] != "";
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "649":
          try {
            c[649] |=
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
              d["dom.hash"].toString().toLowerCase() ==
                "thankYou".toLowerCase() &&
              d["mdm_master_title_id"]
                .toString()
                .toLowerCase()
                .indexOf("74889".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "650":
          try {
            c[650] |=
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
              d["dom.hash"].toString().toLowerCase() ==
                "thankYou".toLowerCase() &&
              d["product_id"]
                .toString()
                .toLowerCase()
                .indexOf("Origin.OFR.50.0001646".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "652":
          try {
            c[652] |=
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
              typeof d["userid"] != "undefined" &&
              d["userid"] != "" &&
              d["js_page.navigator.userAgent"]
                .toString()
                .toLowerCase()
                .indexOf("QtWebEngine".toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "653":
          try {
            c[653] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552299".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552409".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552408".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "654":
          try {
            c[654] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552414".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552412".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"] == "thankYou" &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552410".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "655":
          try {
            c[655] |=
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
              d["dom.hash"].toString().toLowerCase() ==
                "thankYou".toLowerCase() &&
              d["product_id"]
                .toString()
                .toLowerCase()
                .indexOf("SIMS4.OFF.SOLP.0x0000000000011AC5".toLowerCase()) >
                -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "656":
          try {
            c[656] |=
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
              d["dom.hash"].toString().toLowerCase() ==
                "thankYou".toLowerCase() &&
              d["product_id"]
                .toString()
                .toLowerCase()
                .indexOf("SIMS4.OFF.SOLP.0x00000000000170FF".toLowerCase()) >
                -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "657":
          try {
            c[657] |=
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
              d["dom.hash"].toString().toLowerCase() ==
                "thankYou".toLowerCase() &&
              d["product_id"]
                .toString()
                .toLowerCase()
                .indexOf("SIMS4.OFF.SOLP.0x000000000001D5ED".toLowerCase()) >
                -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "658":
          try {
            c[658] |=
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("store".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("mass-effect-andromeda".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "659":
          try {
            c[659] |=
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("store".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("star-wars-battlefront-2".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "660":
          try {
            c[660] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001523".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002015".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002022".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002023".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002024".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002027".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002028".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002029".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002030".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002031".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002032".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002148".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "661":
          try {
            c[661] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002018".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002019".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002020".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002025".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002026".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002033".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002034".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002035".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002036".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002037".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002038".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002065".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "662":
          try {
            c[662] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001523".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002015".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002022".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002023".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002024".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002027".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002028".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002029".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002030".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002031".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002032".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002148".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002018".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002019".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002020".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002025".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002026".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002033".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002034".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002035".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002036".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002037".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002038".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"]
                  .toString()
                  .toLowerCase()
                  .indexOf("thankYou".toLowerCase()) > -1 &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002065".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "663":
          try {
            c[663] |=
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) < 0 &&
              d["dom.hash"]
                .toString()
                .toLowerCase()
                .indexOf("thankYou".toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "664":
          try {
            c[664] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552299".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552409".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552408".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552414".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552412".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("OFB-EAST:109552410".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002407".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                /thankYou$/i.test(d["dom.hash"]) &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002408".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002409".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002597".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002598".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002599".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "665":
          try {
            c[665] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001380".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001386".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0000557".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "666":
          try {
            c[666] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001384".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001382".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001383".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "667":
          try {
            c[667] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001667".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001665".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001666".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "668":
          try {
            c[668] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001380".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001386".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0000557".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001382".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001383".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001384".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001665".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001666".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001667".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002321".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002323".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002324".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "669":
          try {
            c[669] |=
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("store".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("fifa-18".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "670":
          try {
            c[670] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001995".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002009".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002010".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002011".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002012".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002013".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001971".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001972".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001973".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001974".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001895".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001969".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "671":
          try {
            c[671] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002049".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002050".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002051".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002052".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002053".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002054".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002002".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002003".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002004".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002005".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002007".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002008".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "672":
          try {
            c[672] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002042".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002043".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002044".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002045".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002046".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002047".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001996".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001997".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001998".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001999".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002000".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002001".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "673":
          try {
            c[673] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002321".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002323".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002324".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "674":
          try {
            c[674] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001995".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002009".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002010".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002011".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002012".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002013".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001971".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001972".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001973".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001974".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001895".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001969".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002042".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002043".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002044".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002045".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002046".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002047".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001996".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001997".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                /thankYou$/i.test(d["dom.hash"]) &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001998".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001999".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002000".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002001".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002049".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002050".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002051".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002052".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002053".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002054".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002002".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002003".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002004".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002005".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002007".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002008".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "675":
          try {
            c[675] |=
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("store".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("need-for-speed-payback".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "676":
          try {
            c[676] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002174".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002175".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002176".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002177".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002178".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002167".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002168".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002170".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002171".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002172".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "677":
          try {
            c[677] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002174".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002175".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002176".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002177".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002178".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "678":
          try {
            c[678] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002167".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002168".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002170".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002171".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002172".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "679":
          try {
            c[679] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002407".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002408".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002409".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "680":
          try {
            c[680] |=
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("origin.com".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("store".toLowerCase()) > -1 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("a-way-out".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "681":
          try {
            c[681] |=
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0001900".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002487".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002488".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002489".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002490".toLowerCase()) > -1) ||
              (d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("checkout/origin".toLowerCase()) > -1 &&
                d["dom.hash"].toString().toLowerCase() ==
                  "thankYou".toLowerCase() &&
                d["product_id"]
                  .toString()
                  .toLowerCase()
                  .indexOf("Origin.OFR.50.0002491".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
      }
    }
  };
  utag.pre = function () {
    utag.loader.initdata();
    utag.pagevars();
    try {
      utag.loader.RD(utag.data);
    } catch (e) {
      utag.DB(e);
    }
    utag.loader.loadrules();
  };
  utag.loader.GET = function () {
    utag.cl = { _all_: 1 };
    utag.pre();
    utag.handler.extend = [
      function (a, b) {
        try {
          if (1) {
            var elems;
            if (a === "view") {
              if (window.jQuery) {
                jQuery("[id^='utag_']").remove();
              } else {
                elems = document.querySelectorAll("[id^='utag_']");
                if (elems) {
                  for (var i = 0; i < elems.length; i++) {
                    elems[i].parentNode.removeChild(elems[i]);
                  }
                }
              }
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "") ||
            (typeof b["qp.referringsite"] != "undefined" &&
              b["qp.referringsite"] != "")
          ) {
            document.cookie =
              "refsiteCookie=" +
              b["qp.referringsite"] +
              ";path=/;domain=" +
              utag.cfg.domain +
              ";expires=";
            b["cp.refsiteCookie"] = b["qp.referringsite"];
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b, c, d) {
        b._ccity = "";
        b._ccountry = typeof b["country"] != "undefined" ? b["country"] : "";
        b._ccurrency = typeof b["currency"] != "undefined" ? b["currency"] : "";
        b._ccustid = typeof b["userid"] != "undefined" ? b["userid"] : "";
        b._corder =
          typeof b["transaction_id"] != "undefined" ? b["transaction_id"] : "";
        b._cpromo =
          typeof b["promo_code"] != "undefined" ? b["promo_code"] : "";
        b._cship =
          typeof b["total_shipping"] != "undefined" ? b["total_shipping"] : "";
        b._cstate = "";
        b._cstore =
          typeof b["business_unit"] != "undefined" ? b["business_unit"] : "web";
        b._csubtotal = "";
        b._ctax = typeof b["total_tax"] != "undefined" ? b["total_tax"] : "";
        b._ctotal =
          typeof b["total_price"] != "undefined" ? b["total_price"] : "";
        b._ctype = "";
        b._czip = "";
        b._cprod =
          typeof b["product_id"] != "undefined" && b["product_id"].length > 0
            ? b["product_id"]
            : [];
        b._cprodname =
          typeof b["product_name"] != "undefined" &&
          b["product_name"].length > 0
            ? b["product_name"]
            : [];
        b._cbrand =
          typeof b["sub_brand"] != "undefined" && b["sub_brand"].length > 0
            ? b["sub_brand"]
            : [];
        b._ccat =
          typeof b["mdm_master_title"] != "undefined" &&
          b["mdm_master_title"].length > 0
            ? b["mdm_master_title"]
            : [];
        b._ccat2 =
          typeof b["product_facets"] != "undefined" &&
          b["product_facets"].length > 0
            ? b["product_facets"]
            : [];
        b._cquan =
          typeof b["product_quantity"] != "undefined" &&
          b["product_quantity"].length > 0
            ? b["product_quantity"]
            : [];
        b._cprice =
          typeof b["product_price"] != "undefined" &&
          b["product_price"].length > 0
            ? b["product_price"]
            : [];
        b._csku =
          typeof b["product_sku"] != "undefined" && b["product_sku"].length > 0
            ? b["product_sku"]
            : [];
        b._cpdisc =
          typeof b["product_discount"] != "undefined" &&
          b["product_discount"].length > 0
            ? b["product_discount"]
            : [];
        if (b._cprod.length == 0) {
          b._cprod = b._csku.slice();
        }
        if (b._cprodname.length == 0) {
          b._cprodname = b._csku.slice();
        }
        function tf(a) {
          if (a == "" || isNaN(parseFloat(a))) {
            return a;
          } else {
            return parseFloat(a).toFixed(2);
          }
        }
        b._ctotal = tf(b._ctotal);
        b._csubtotal = tf(b._csubtotal);
        b._ctax = tf(b._ctax);
        b._cship = tf(b._cship);
        for (c = 0; c < b._cprice.length; c++) {
          b._cprice[c] = tf(b._cprice[c]);
        }
        for (c = 0; c < b._cpdisc.length; c++) {
          b._cpdisc[c] = tf(b._cpdisc[c]);
        }
      },
    ];
    utag.handler.cfg_extend = [
      { alr: 0, bwq: 0, id: "227", blr: 1, end: 0 },
      { alr: 1, bwq: 0, id: "69", blr: 0, end: 0 },
      { alr: 1, bwq: 0, id: "33", blr: 0, end: 0 },
    ];
    utag.loader.initcfg = function () {
      utag.loader.cfg = {
        137: {
          load: utag.cond[139],
          send: 0,
          v: 201806182110,
          wait: 0,
          tid: 20060,
          src: "//tags.tiqcdn.com/utag/tiqapp/utag.currency.js",
        },
        239: {
          load: utag.cond[138],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        242: {
          load: utag.cond[141],
          send: 1,
          v: 201801081917,
          wait: 1,
          tid: 4001,
        },
        306: {
          load: utag.cond[138],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        330: {
          load: utag.cond[648],
          send: 1,
          v: 201609021640,
          wait: 1,
          tid: 20067,
        },
        344: {
          load: utag.cond[663],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        347: {
          load: utag.cond[140],
          send: 1,
          v: 201609021640,
          wait: 1,
          tid: 20078,
        },
        353: {
          load: utag.cond[652],
          send: 1,
          v: 201703272202,
          wait: 1,
          tid: 4001,
        },
        354: {
          load: utag.cond[649],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        358: {
          load: utag.cond[650],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        364: {
          load: utag.cond[653],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        365: {
          load: utag.cond[654],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        368: {
          load: utag.cond[655],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        369: {
          load: utag.cond[656],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        370: {
          load: utag.cond[657],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        373: {
          load: utag.cond[660],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        374: {
          load: utag.cond[661],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        377: {
          load: utag.cond[662],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        378: {
          load: utag.cond[664],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        379: {
          load: utag.cond[653],
          send: 1,
          v: 201706090251,
          wait: 1,
          tid: 7117,
        },
        380: {
          load: utag.cond[654],
          send: 1,
          v: 201706090251,
          wait: 1,
          tid: 7117,
        },
        381: {
          load: utag.cond[665],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        382: {
          load: utag.cond[666],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        383: {
          load: utag.cond[667],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        384: {
          load: utag.cond[668],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        386: {
          load: utag.cond[652],
          send: 1,
          v: 201708012325,
          wait: 1,
          tid: 20067,
        },
        388: {
          load: utag.cond[39],
          send: 1,
          v: 201707242231,
          wait: 1,
          tid: 20067,
        },
        389: {
          load: utag.cond[40],
          send: 1,
          v: 201707242231,
          wait: 1,
          tid: 20067,
        },
        390: {
          load: utag.cond[41],
          send: 1,
          v: 201707242231,
          wait: 1,
          tid: 20067,
        },
        391: {
          load: utag.cond[42],
          send: 1,
          v: 201707242231,
          wait: 1,
          tid: 20067,
        },
        392: {
          load: utag.cond[43],
          send: 1,
          v: 201707242231,
          wait: 1,
          tid: 20067,
        },
        393: {
          load: utag.cond[44],
          send: 1,
          v: 201707242231,
          wait: 1,
          tid: 20067,
        },
        394: {
          load: utag.cond[45],
          send: 1,
          v: 201707242231,
          wait: 1,
          tid: 20067,
        },
        395: {
          load: utag.cond[46],
          send: 1,
          v: 201707242231,
          wait: 1,
          tid: 20067,
        },
        396: {
          load: utag.cond[658],
          send: 1,
          v: 201708212301,
          wait: 1,
          tid: 20067,
        },
        397: {
          load: utag.cond[659],
          send: 1,
          v: 201707242231,
          wait: 1,
          tid: 20067,
        },
        398: {
          load: utag.cond[664],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        399: {
          load: utag.cond[669],
          send: 1,
          v: 201708212301,
          wait: 1,
          tid: 20067,
        },
        400: {
          load: utag.cond[670],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        401: {
          load: utag.cond[671],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        402: {
          load: utag.cond[672],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        403: {
          load: utag.cond[673],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        404: {
          load: utag.cond[674],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        406: {
          load: utag.cond[668],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        410: {
          load: utag.cond[674],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        411: {
          load: utag.cond[674],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        412: {
          load: utag.cond[141],
          send: 1,
          v: 201709132150,
          wait: 1,
          tid: 20067,
        },
        413: {
          load: utag.cond[675],
          send: 1,
          v: 201710182243,
          wait: 1,
          tid: 20067,
        },
        414: {
          load: utag.cond[677],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        415: {
          load: utag.cond[678],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        416: {
          load: utag.cond[676],
          send: 1,
          v: 201802052040,
          wait: 1,
          tid: 6026,
        },
        419: {
          load: utag.cond[141],
          send: 1,
          v: 201711202107,
          wait: 1,
          tid: 20067,
        },
        420: {
          load: utag.cond[141],
          send: 1,
          v: 201711202107,
          wait: 1,
          tid: 20067,
        },
        422: {
          load: utag.cond[679],
          send: 1,
          v: 201806182110,
          wait: 1,
          tid: 4001,
        },
        427: {
          load: utag.cond[138],
          send: 1,
          v: 201802272200,
          wait: 1,
          tid: 7132,
        },
        428: {
          load: utag.cond[680],
          send: 1,
          v: 201803262023,
          wait: 1,
          tid: 20067,
        },
        429: {
          load: utag.cond[681],
          send: 1,
          v: 201803262023,
          wait: 1,
          tid: 4001,
        },
      };
      utag.loader.cfgsort = [
        "137",
        "239",
        "242",
        "306",
        "330",
        "344",
        "347",
        "353",
        "354",
        "358",
        "364",
        "365",
        "368",
        "369",
        "370",
        "373",
        "374",
        "377",
        "378",
        "379",
        "380",
        "381",
        "382",
        "383",
        "384",
        "386",
        "388",
        "389",
        "390",
        "391",
        "392",
        "393",
        "394",
        "395",
        "396",
        "397",
        "398",
        "399",
        "400",
        "401",
        "402",
        "403",
        "404",
        "406",
        "410",
        "411",
        "412",
        "413",
        "414",
        "415",
        "416",
        "419",
        "420",
        "422",
        "427",
        "428",
        "429",
      ];
    };
    utag.loader.initcfg();
  };
  if (typeof utag_cfg_ovrd != "undefined") {
    for (var i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[i] = utag_cfg_ovrd[i];
  }
  utag.loader.PINIT = function (a, b, c) {
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }
    try {
      this.GET();
      if (utag.handler.RE("view", utag.data, "blr")) {
        utag.handler.LR(utag.data);
      }
    } catch (e) {
      utag.DB(e);
    }
    a = this.cfg;
    c = 0;
    for (b in this.GV(a)) {
      if (
        a[b].block == 1 ||
        (a[b].load > 0 && typeof a[b].src != "undefined" && a[b].src != "")
      ) {
        a[b].block = 1;
        c = 1;
        this.bq[b] = 1;
      }
    }
    if (c == 1) {
      for (b in this.GV(a)) {
        if (a[b].block) {
          a[b].id = b;
          if (a[b].load == 4) a[b].load = 1;
          a[b].cb = function () {
            var d = this.uid;
            utag.loader.cfg[d].cbf = 1;
            utag.loader.LOAD(d);
          };
          this.AS(a[b]);
        }
      }
    }
    if (c == 0) this.INIT();
  };
  utag.loader.INIT = function (a, b, c, d, e) {
    utag.DB("utag.loader.INIT");
    if (this.ol == 1) return -1;
    else this.ol = 1;
    if (utag.cfg.noview != true) utag.handler.RE("view", utag.data, "alr");
    utag.rpt.ts["i"] = new Date();
    d = this.cfgsort;
    for (a = 0; a < d.length; a++) {
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      if (b.block != 1 && b.s2s != 1) {
        if (
          utag.loader.bk[b.id] ||
          ((utag.cfg.readywait || utag.cfg.noview) && b.load == 4)
        ) {
          this.f[b.id] = 0;
          utag.loader.LOAD(b.id);
        } else if (b.wait == 1 && utag.loader.rf == 0) {
          utag.DB("utag.loader.INIT: waiting " + b.id);
          this.wq.push(b);
          this.f[b.id] = 2;
        } else if (b.load > 0) {
          utag.DB("utag.loader.INIT: loading " + b.id);
          this.lq.push(b);
          this.AS(b);
        }
      }
    }
    if (this.wq.length > 0)
      utag.loader.EV("", "ready", function (a) {
        if (utag.loader.rf == 0) {
          utag.DB("READY:utag.loader.wq");
          utag.loader.rf = 1;
          utag.loader.WQ();
        }
      });
    else if (this.lq.length > 0) utag.loader.rf = 1;
    else if (this.lq.length == 0) utag.loader.END();
    return 1;
  };
  utag.loader.EV("", "ready", function (a) {
    if (utag.loader.efr != 1) {
      utag.loader.efr = 1;
      try {
        window.document.addEventListener("uTagDataLayerReady", function () {
          utag.view(utag.data);
        });
      } catch (e) {
        utag.DB(e);
      }
      try {
        (function () {
          var sessionId = Date.now().toString(),
            clientId = sessionId,
            pinEventsEndpoint = isDev()
              ? "https://pin-river-test.data.ea.com/pinEvents"
              : "https://pin-river.data.ea.com/pinEvents",
            step = 0;
          function initTLM() {
            var current = "";
            if (window.angular) {
              var injector = angular.element(document.body).injector();
              if (injector) {
                var state = injector.get("$state");
                if (state) {
                  current = state.current.name;
                }
              }
            }
            loadGA();
            if (typeof YT === "undefined") {
              var tag = document.createElement("script");
              tag.src = "https://www.youtube.com/iframe_api";
              var firstScriptTag = document.getElementsByTagName("script")[0];
              firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
            return {
              failedSdkCall: -1,
              currentState: current,
              previousState: "",
            };
          }
          window.tlm = window.tlm || initTLM();
          tlm.onRouteChange = function (callback) {
            var INTERVAL_TIMER = 50,
              waitForScope = setInterval(function () {
                try {
                  var scope = window.angular
                    .element(document.body)
                    .injector()
                    .get("$rootScope");
                  if (scope) {
                    clearInterval(waitForScope);
                    scope.$on(
                      "$stateChangeSuccess",
                      function (
                        event,
                        toState,
                        toParams,
                        fromState,
                        fromParams,
                      ) {
                        window.tlm.currentState = toState.name;
                        window.tlm.previousState = fromState.name;
                        callback();
                      },
                    );
                  }
                } catch (e) {}
              }, INTERVAL_TIMER);
          };
          tlm.parseUrl = function (url) {
            var HOST = "origin.com",
              length = HOST.length,
              position = url.indexOf(HOST);
            if (position > -1) {
              return url.substring(position + length, url.length);
            }
            return url;
          };
          function postMessage(method, payload) {
            var msg = { method: method, payload: payload };
            window.parent.postMessage(JSON.stringify(msg), "*");
          }
          function sendEventToGA(category, action, label, value, gaParams) {
            if (window.ga) {
              ga("send", "event", category, action, label, value, gaParams);
            }
          }
          function isDev() {
            return getReleaseType() === "dev";
          }
          function getReleaseType() {
            if (window.location.hostname === "signin.int.ea.com") {
              return "dev";
            }
            return "prod";
          }
          function getOS() {
            var ua = navigator.userAgent,
              platform = "web",
              pinTid = "origin-2015-web",
              isEmbeddedBrowser = /QtWebEngine/.test(ua);
            if (isEmbeddedBrowser) {
              if (/Windows NT/.test(us)) {
                platform = "pc";
                pinTid = ORIGINX_TID_PC;
              } else if (/Mac OS/.test(us)) {
                platform = "mac";
                pinTid = ORIGINX_TID_MAC;
              }
            }
            return { platform: platform, pinTid: pinTid };
          }
          function sendPinEvent(eventName, event, additionalParameters) {
            if (window.jQuery) {
              var ts = new Date(),
                releaseType = getReleaseType(),
                APP_VERSION = "10.0.0.0",
                os = getOS(),
                language = navigator.userLanguage || navigator.language,
                config;
              step++;
              event = event || {};
              event.core = {};
              event.core.en = eventName;
              event.core.pidt = "origin_web";
              event.core.tid = os.pinTid;
              event.core.ts_event = ts;
              event.core.sid = sessionId;
              event.core.s = step;
              event.core.pid = clientId;
              event.core.pidm = { nucleus: "0" };
              event.install_type = "other";
              $.extend(event.core, additionalParameters);
              config = {
                type: "POST",
                url: pinEventsEndpoint,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                header: {
                  "x-ea-game-id": "OriginSPA",
                  "x-ea-game-id-type": "client",
                  "x-ea-app-type": "WEBTRACKING",
                  "x-ea-taxv": "1.1",
                },
                data: JSON.stringify({
                  taxv: "1.1",
                  tidt: "sku",
                  rel: releaseType,
                  v: APP_VERSION,
                  ts_post: ts,
                  sid: sessionId,
                  plat: os.platform,
                  et: "client_origin_x",
                  loc: language,
                  events: [event],
                }),
              };
              jQuery.ajax(config);
            }
          }
          function sendEventInternal(
            gaEventCategory,
            pinCategory,
            action,
            label,
            value,
            parameters,
            pinParameters,
          ) {
            var fieldsObject;
            var pinFieldsObject = parameters || {};
            pinFieldsObject.eventCategory = gaEventCategory;
            pinFieldsObject.eventAction = action;
            pinFieldsObject.eventLabel = label;
            pinFieldsObject.eventValue = value;
            sendEventToGA(gaEventCategory, action, label, value, parameters);
            sendPinEvent(pinCategory, pinFieldsObject, pinParameters);
          }
          tlm.sendEventInternal = sendEventInternal;
          tlm.setPinEndpoint = function (endPoint) {
            pinEventsEndpoint = endPoint;
          };
          function loadGA(id) {
            if (window.ga) {
              return;
            }
            if (!id) {
              id = "UA-49146401-5";
            }
            var tag = document.createElement("script");
            tag.src = "//www.google-analytics.com/analytics.js";
            var firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            window.ga =
              window.ga ||
              function () {
                (ga.q = ga.q || []).push(arguments);
              };
            ga.l = +new Date();
            ga("create", id, "auto");
          }
          tlm.loadGA = loadGA;
          tlm.setCustomDimension = function (dimension, data) {
            try {
              var isInIFrame = self !== top;
              if (
                typeof Origin !== "undefined" &&
                typeof Origin.telemetry !== "undefined" &&
                typeof Origin.telemetry.setCustomDimension !== "undefined"
              ) {
                var env = "";
                Origin.telemetry.setCustomDimension(dimension, data);
                if (
                  typeof Origin.config !== "undefined" &&
                  typeof Origin.config.overrides.env !== "undefined"
                ) {
                  env = Origin.config.overrides.env;
                }
                if (env === "dev" || env === "qa") {
                  console.log(
                    "Tealium:sendCustomDimension(Dimension" +
                      dimension +
                      "|" +
                      data,
                  );
                }
              } else if (isInIFrame) {
                postMessage("sendCustomDimension", {
                  dimension: dimension,
                  data: data,
                });
              }
            } catch (e) {}
          };
          tlm.sendMarketingEvent = function (
            category,
            action,
            label,
            value,
            parameters,
            pinParameters,
          ) {
            try {
              var isInIFrame = self !== top;
              var inSpa = tlm.isInSpa();
              if (inSpa) {
                Origin.telemetry.sendMarketingEvent(
                  category,
                  action,
                  label,
                  value,
                  parameters,
                  pinParameters,
                );
                tlm.logDebuggingMessage(
                  category,
                  action,
                  label,
                  value,
                  parameters,
                  pinParameters,
                );
              } else if (isInIFrame) {
                postMessage("sendMarketingEvent", {
                  category: category,
                  action: action,
                  label: label,
                  value: value,
                  parameters: parameters,
                  pinParameters: pinParameters,
                });
              } else {
                sendEventInternal(
                  category,
                  "origin_" + category,
                  action,
                  label,
                  value,
                  parameters,
                  pinParameters,
                );
              }
            } catch (e) {}
          };
          tlm.isInSpa = function () {
            return (
              typeof Origin !== "undefined" &&
              typeof Origin.telemetry !== "undefined" &&
              typeof Origin.telemetry.sendMarketingEvent !== "undefined"
            );
          };
          tlm.logDebuggingMessage = function (
            category,
            action,
            label,
            value,
            parameters,
            pinParameter,
          ) {
            var env = _.get(Origin, "config.overrides.env");
            if (env === "dev" || env === "qa") {
              console.debug(
                "Tealium:sendMarketingEvent(" +
                  category +
                  "|" +
                  action +
                  "|" +
                  label +
                  "|" +
                  value +
                  ")",
                parameters,
                pinParameter,
              );
            }
          };
          tlm.sendStandardPinEvent = function (
            category,
            action,
            label,
            value,
            pinFieldsObject,
          ) {
            try {
              var isInIFrame = self !== top;
              if (
                typeof Origin !== "undefined" &&
                typeof Origin.telemetry !== "undefined" &&
                typeof Origin.telemetry.sendStandardPinEvent !== "undefined"
              ) {
                var env = "";
                value = value || null;
                Origin.telemetry.sendStandardPinEvent(
                  "TRACKER_MARKETING",
                  category,
                  action,
                  label,
                  value,
                  pinFieldsObject,
                );
                if (
                  typeof Origin.config !== "undefined" &&
                  typeof Origin.config.overrides.env !== "undefined"
                ) {
                  env = Origin.config.overrides.env;
                }
                if (env === "dev" || env === "qa") {
                  if (value === null) {
                    console.log(
                      "Tealium:sendStandardPinEvent(" +
                        category +
                        "|" +
                        action +
                        "|" +
                        label +
                        ")",
                    );
                  } else {
                    console.log(
                      "Tealium:sendStandardPinEvent(" +
                        category +
                        "|" +
                        action +
                        "|" +
                        label +
                        "|" +
                        value +
                        ")",
                    );
                  }
                }
              } else if (isInIFrame) {
                postMessage("sendStandardPinEvent", {
                  category: category,
                  action: action,
                  label: label,
                  value: value,
                  fields: pinFieldsObject,
                });
              } else {
                sendEventInternal(
                  category,
                  category,
                  action,
                  label,
                  value,
                  pinFieldsObject,
                );
              }
            } catch (e) {}
          };
          tlm.sendTransactionEvent = function (
            transactionId,
            storeId,
            currency,
            revenue,
            tax,
            transactionItems,
          ) {
            try {
              if (
                typeof Origin !== "undefined" &&
                typeof Origin.telemetry !== "undefined" &&
                typeof Origin.telemetry.sendTransactionEvent !== "undefined"
              ) {
                var env = "";
                Origin.telemetry.sendMarketingEvent(
                  category,
                  action,
                  label,
                  value,
                );
                if (
                  typeof Origin.config !== "undefined" &&
                  typeof Origin.config.overrides.env !== "undefined"
                ) {
                  env = Origin.config.overrides.env;
                }
                if (env === "dev" || env === "qa") {
                  console.log(
                    "Tealium:sendTransactionEvent(" +
                      transactionId +
                      "|" +
                      storeId +
                      "|" +
                      currency +
                      "|" +
                      revenue +
                      "|" +
                      tax +
                      "|" +
                      JSON.stringify(transactionItems) +
                      ")",
                  );
                }
              }
            } catch (e) {}
          };
          tlm.sendTransactionReceipt = function (receipt) {
            postMessage("sendTransactionEvent", { receipt: receipt });
          };
          tlm.sendPageView = function (page) {
            if (
              typeof Origin !== "undefined" &&
              typeof Origin.telemetry !== "undefined" &&
              typeof Origin.telemetry.sendPageView !== "undefined"
            ) {
              var title = window.document.title;
              page = page || window.document.location.pathname;
              Origin.telemetry.sendPageView(page, title, {});
            } else {
              sendPageViewsWithoutSPA();
            }
          };
          tlm.sendPageViewsWithoutSPA = function () {
            var location;
            if (window.location.host.indexOf("checkout") > -1) {
              var domain = ".origin.com";
              var parentHost = document.referrer;
              parentHost = parentHost.substring(
                0,
                parentHost.indexOf(domain) + domain.length,
              );
              location =
                parentHost + window.location.pathname + window.location.hash;
            } else {
              location = window.location.href.replace(
                window.location.search,
                "",
              );
            }
            if (typeof ga !== "undefined") {
              ga("send", {
                hitType: "pageview",
                title: window.document.title,
                location: location,
                page: window.location.pathname + window.location.hash,
              });
            }
          };
          tlm.patchFunction = function (originalFunc, hookFunc) {
            return function () {
              hookFunc.apply(this, arguments);
              originalFunc.apply(this, arguments);
            };
          };
          tlm.isSubscriber = function () {
            if (
              typeof OriginComponents !== "undefined" &&
              typeof OriginComponents._factories !== "undefined" &&
              typeof OriginComponents._factories.SubscriptionFactory !==
                "undefined" &&
              typeof OriginComponents._factories.SubscriptionFactory
                .isActive !== "undefined"
            ) {
              return OriginComponents._factories.SubscriptionFactory.isActive();
            }
            return false;
          };
          tlm.getAttribute = function (ele, attributes) {
            var $ele = $(ele);
            var value;
            var findParameter;
            if (typeof attributes !== "object") {
              attributes = [attributes];
            }
            _.forEach(attributes, function (attribute) {
              attributeSelector = "[" + attribute + "]";
              if ($ele.attr(attribute)) {
                value = $ele.attr(attribute);
              } else if ($ele.find(attributeSelector)) {
                value = $ele.find(attributeSelector).attr(attribute);
              }
              if (value) {
                return false;
              }
            });
            if (value) {
              return value;
            }
          };
          tlm.isInViewport = function (ele) {
            var $ele = $(ele);
            var top = $ele.offset().top;
            var left = $ele.offset().left;
            var width = $ele.width();
            var height = $ele.height();
            return (
              top < window.pageYOffset + window.innerHeight &&
              left < window.pageXOffset + window.innerWidth &&
              top + height >= window.pageYOffset &&
              left + width >= window.pageXOffset
            );
          };
          tlm.YoutubeTracker = (function (playerIframe) {
            var TIMER_INTERVAL = 2000;
            function YoutubeTracker(playerIframe) {
              this.id = null;
              this.isSoundEnabled = null;
              this.percentageWatched = 0;
              this.timer = null;
              this.player = new YT.Player(playerIframe, {
                events: { onStateChange: _stateChange.bind(this) },
              });
            }
            YoutubeTracker.prototype = { getData: getData };
            function getData() {
              return {
                id: this.id,
                isSoundEnabled: this.isSoundEnabled,
                percentageWatched: this.percentageWatched,
              };
            }
            function _stateChange(e) {
              var state = e.data;
              if (state === YT.PlayerState.PLAYING) {
                this.timer = setInterval(_setData.bind(this), TIMER_INTERVAL);
              } else {
                _setData.call(this);
                clearInterval(this.timer);
              }
            }
            function _setData() {
              var watched = Math.floor(
                (this.player.getCurrentTime() / this.player.getDuration()) *
                  100,
              );
              this.percentageWatched =
                watched > this.percentageWatched
                  ? watched
                  : this.percentageWatched;
              this.id =
                this.id === null
                  ? this.player.getVideoData().video_id
                  : this.id;
              this.isSoundEnabled = !this.player.isMuted();
            }
            return YoutubeTracker;
          })();
        })();
      } catch (e) {
        utag.DB(e);
      }
      try {
        (function () {
          var CART_CHANGE_ELEMENTS =
            "#reviewOrder .upsell .otkbtn, #reviewOrder .upgrade .otkbtn, #reviewOrder .cart-item .remove-item";
          var CHECKOUT_PATH = "/checkout/origin";
          var CHECKOUT_GIFTING_PATH = "/checkout/origin/gift";
          var CHECKOUT_COUNT_COOKIE = "origin.checkoutCount";
          var DISPLAY = "display";
          var HAS_SENT_TRANSACTIONS = false;
          var MS_IN_DAY = 24 * 60 * 60 * 1000;
          var TELEMETRY_INFO = "telemetryInfo";
          var THIRD_PARTY = "3rd Party";
          var CATEGORY = "Checkout";
          var CHECKOUT_ERROR = "Checkout Error";
          var ERROR = "Error";
          var PROMO_CODE = "Promo Code";
          var PROMO_CODE_ERROR = "Promo Code - Error";
          var PROVIDER_ERROR = "Provider Error";
          var PURCHASE = "Purchase";
          var PURCHASE_GIFT = "Purchase: Gift";
          var PURCHASE_CROSS_SALE = "Purchase: Cross-Sell";
          var PURCHASE_UP_SELL = "Purchase: Up-Sell";
          var REMOVE_PRODUCT = "Remove product";
          var RESTART = "Restart";
          var RESTART_CHECKOUT = "Restart Checkout";
          var REVIEW_YOUR_PURCHASE = "Review your purchase";
          var REVIEW_YOUR_PURCHASE_GIFT = "Review your purchase: Gift";
          var REVIEW_YOUR_PURCHASE_CROSS_SELL =
            "Review your purchase: Cross-Sell";
          var REVIEW_YOUR_PURCHASE_UPSELL = "Review your purchase: Up-Sell";
          var UNKNOWN = "Unknown";
          var crossSell = {};
          var upSell = {};
          var promoCode = "";
          var paymentType = "";
          var promoCodeSuccessObserver;
          var promoCodeFailedObserver;
          var lockboxData;
          var mutationObserver =
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver;
          if (
            isCheckoutPage() &&
            window.Backbone &&
            window.tlm &&
            window.Lockbox
          ) {
            checkoutRestarts();
            onLoadCheckout();
          }
          function reviewOrderHandler() {
            hasPageLoaded(onReviewOrderLoaded);
          }
          function thankYouHandler() {
            hasPageLoaded(function () {
              if (!HAS_SENT_TRANSACTIONS) {
                waitFor(onThankYouLoaded, isThankYouPageReady, 10);
              }
            });
          }
          function paymentHandler() {
            tlm.sendPageViewsWithoutSPA();
          }
          function providerErrorHandler() {
            tlm.sendMarketingEvent(CATEGORY, CHECKOUT_ERROR, PROVIDER_ERROR);
          }
          function errorHandler() {
            tlm.sendMarketingEvent(CATEGORY, CHECKOUT_ERROR, ERROR);
          }
          function waitFor(
            callback,
            conditionCheck,
            maxAttempts,
            attemptCount,
          ) {
            attemptCount = attemptCount || 0;
            setTimeout(function () {
              attemptCount++;
              if (attemptCount > maxAttempts) {
                return false;
              }
              if (conditionCheck()) {
                callback();
              } else {
                waitFor(callback, conditionCheck, maxAttempts, attemptCount);
              }
            }, 250);
          }
          function onReviewOrderLoaded() {
            var action = isCheckoutGifting()
              ? REVIEW_YOUR_PURCHASE_GIFT
              : REVIEW_YOUR_PURCHASE;
            tlm.sendPageViewsWithoutSPA();
            paymentType = lockboxData.payment_type;
            $("body").on("click", CART_CHANGE_ELEMENTS, onChangeCart);
            promoCodeSuccessObserver = observeElement(
              $("#cartPromoCode"),
              onPromoCodeSuccess,
            );
            promoCodeFailedObserver = observeElement(
              $("#promoCodeError"),
              onPromoCodeError,
            );
            tlm.sendMarketingEvent(
              CATEGORY,
              action,
              lockboxData.product_id.join(","),
            );
          }
          function onThankYouLoaded() {
            var receipt = buildReceipt();
            var action = isCheckoutGifting() ? PURCHASE_GIFT : PURCHASE;
            if (!utag.data.product_id || !utag.data.product_id.length) {
              utag.data.product_id = lockboxData.product_id;
            }
            setCookie(CHECKOUT_COUNT_COOKIE, null, 0);
            sendCrossSellOfferIds();
            sendUpsellOfferIds();
            tlm.sendPageViewsWithoutSPA();
            tlm.sendTransactionReceipt(receipt);
            tlm.sendMarketingEvent(
              CATEGORY,
              action,
              getTransactionProductId(),
              null,
              { custom: receipt },
            );
            HAS_SENT_TRANSACTIONS = true;
            window.utag.data.total_price = receipt.totalPrice;
            window.utag.data.transaction_id = receipt.orderNumber;
            utag.view(window.utag.data);
          }
          function onPaymentLoaded() {
            tlm.sendPageViewsWithoutSPA();
          }
          function onProviderErrorLoaded() {
            tlm.sendMarketingEvent(CATEGORY, CHECKOUT_ERROR, PROVIDER_ERROR);
          }
          function onChangeCart(e) {
            var $el = $(e.target);
            var $elParent = $el.parent();
            var offerId = $el.attr("data-value");
            if ($el.hasClass("remove-item")) {
              var title = $el
                .parents(".cart-item")
                .find(".cart-item-details h4")
                .attr("title");
              tlm.sendMarketingEvent(CATEGORY, REMOVE_PRODUCT, title);
            } else if ($elParent.hasClass("upgrade")) {
              upSell[offerId] = true;
              tlm.sendMarketingEvent(
                CATEGORY,
                REVIEW_YOUR_PURCHASE_UPSELL,
                offerId,
              );
            } else if ($elParent.hasClass("upsell")) {
              crossSell[offerId] = true;
              tlm.sendMarketingEvent(
                CATEGORY,
                REVIEW_YOUR_PURCHASE_CROSS_SELL,
                offerId,
              );
            }
          }
          function onLoadCheckout() {
            loadPage();
            patchErrorHandler();
            Backbone.history.on("all", loadPage);
            window.addEventListener("message", onMessageTealium);
            $(window).on("unload", onWindowUnload);
          }
          function onMessageTealium(e) {
            var msg = JSON.parse(e.data);
            if (msg.method === TELEMETRY_INFO) {
              window.utag.data = !_.isUndefined(msg.payload.utag)
                ? msg.payload.utag
                : window.utag.data;
              utag.view(window.utag.data);
              if (
                Backbone.history.getHash() === "thankYou" &&
                isThankYouPageReady() &&
                HAS_SENT_TRANSACTIONS === false
              ) {
                onThankYouLoaded();
              }
            } else if (msg.method === DISPLAY) {
              window.parent.postMessage(
                JSON.stringify({ method: "tealiumReadyEvent", payload: "" }),
                "*",
              );
            }
          }
          function onPromoCodeError() {
            if ($("#promoCodeError") && $("#promoCodeError").text().length) {
              promoCode = $("#promoCodeInputBox").val();
              tlm.sendMarketingEvent(
                CATEGORY,
                PROMO_CODE_ERROR,
                promoCode + "," + lockboxData.product_id.join(","),
              );
            }
          }
          function onPromoCodeSuccess() {
            var $promoSuccess = $("#cartPromoCode");
            if (
              $promoSuccess.find(".cart-promo-code-applied-discount").length
            ) {
              promoCode = $promoSuccess
                .find(".cart-promo-code-applied-label .otktitle-4:last-child")
                .attr("title");
              tlm.sendMarketingEvent(
                CATEGORY,
                PROMO_CODE,
                promoCode + "," + lockboxData.product_id.join(","),
              );
            }
          }
          function onWindowUnload() {
            unbindAllEvents();
          }
          function buildProductData() {
            var products = [];
            var product = {};
            var length;
            if (_.isUndefined(lockboxData)) {
              length = utag.data.product_name
                ? utag.data.product_name.length
                : 0;
              for (var i = 0; i < length; i++) {
                product = {
                  name: utag.data.product_name[i],
                  offerId: utag.data.product_sku[i],
                  platformFacet: utag.data.product_facets,
                  quantity: 1,
                  totalPrice: utag.data.product_price[i],
                  totalPriceWithoutTax: utag.data.product_price[i],
                  type: utag.data.product_category,
                  unitPrice: utag.data.product_price[i],
                };
                products.push(product);
              }
            } else {
              length = lockboxData.product_id.length;
              for (var i = 0; i < length; i++) {
                product = {
                  name: lockboxData.product_name[i],
                  offerId: lockboxData.product_id[i],
                  platformFacet: lockboxData.product_facets[i],
                  quantity: lockboxData.product_quantity[i],
                  totalPrice: lockboxData.product_price[i],
                  totalPriceWithoutTax: lockboxData.product_price[i],
                  type: lockboxData.product_category[i],
                  unitPrice: lockboxData.product_price[i],
                };
                products.push(product);
              }
            }
            return products;
          }
          function buildReceipt() {
            var receipt;
            if (_.isUndefined(lockboxData)) {
              var price = $(".cart-total-cost h4").text();
              receipt = {
                currency: utag.data.currency,
                email: $(".order-confirmation-text strong").text(),
                orderNumber: $(".cart-tax-cost .otkc").text(),
                payment: THIRD_PARTY,
                products: buildProductData(),
                totalPrice: removeCurrencySymbol(price),
              };
            } else {
              receipt = {
                currency: utag.data.currency,
                discount: lockboxData.cart_discount_total,
                email: $(".order-confirmation-text strong").text(),
                itemsCount: lockboxData.product_id
                  ? lockboxData.product_id.length
                  : 0,
                orderNumber: lockboxData.transaction_id,
                payment: paymentType,
                products: buildProductData(),
                promoCode: promoCode,
                totalPrice: lockboxData.total_price,
              };
            }
            return receipt;
          }
          function checkoutRestarts() {
            var count = parseInt(getCookie(CHECKOUT_COUNT_COOKIE) || 0) + 1;
            setCookie(CHECKOUT_COUNT_COOKIE, count, 1);
            tlm.sendMarketingEvent(CATEGORY, RESTART, RESTART_CHECKOUT, count);
          }
          function getCookie(cookieName) {
            var name = cookieName + "=";
            var cookies = document.cookie.split(";");
            var length = cookies.length;
            for (var i = 0; i < length; i++) {
              var cookie = cookies[i];
              while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1);
              }
              if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
              }
            }
            return "";
          }
          function getTransactionProductId() {
            if (lockboxData && lockboxData.product_id) {
              return lockboxData.product_id.join(",");
            }
          }
          function hasPageLoaded(callback) {
            Lockbox.Telemetry.bind(function (data) {
              lockboxData = data;
              callback();
            });
          }
          function isCheckoutPage() {
            if (window.location.pathname.indexOf(CHECKOUT_PATH) > -1) {
              return true;
            }
          }
          function isCheckoutGifting() {
            return window.location.pathname.indexOf(CHECKOUT_GIFTING_PATH) > -1;
          }
          function isThankYouPageReady() {
            if (
              utag &&
              utag.data &&
              utag.data.currency &&
              $(".cart-tax-cost .otkc").length &&
              $(".cart-total-cost h4").length
            ) {
              return true;
            }
          }
          function loadPage() {
            unbindReviewEvents();
            var handlers = {
              reviewOrder: reviewOrderHandler,
              thankYou: thankYouHandler,
              payment: paymentHandler,
              providerError: providerErrorHandler,
              error: errorHandler,
            };
            var currentHandler = Backbone.history.getHash();
            var callback = handlers[currentHandler];
            if (callback) {
              callback();
            }
          }
          function observeElement(el, callback) {
            if (mutationObserver && el.length === 1) {
              var observer = new mutationObserver(callback);
              observer.observe(el[0], { childList: true, subtree: true });
              return observer;
            }
          }
          function patchErrorHandler() {
            window.ErrorHandler = tlm.patchFunction(
              window.ErrorHandler,
              function (error) {
                if (
                  error &&
                  error.errorResponses &&
                  error.errorResponses[0] &&
                  error.errorResponses[0].error_code
                ) {
                  tlm.sendMarketingEvent(
                    CATEGORY,
                    CHECKOUT_ERROR,
                    error.errorResponses[0].error_code,
                  );
                } else {
                  tlm.sendMarketingEvent(CATEGORY, CHECKOUT_ERROR, UNKNOWN);
                }
              },
            );
            Lockbox.errorHandler = window.ErrorHandler;
          }
          function removeCurrencySymbol(price) {
            var centPosition = 3;
            price = price.replace(/,/g, ".").replace(/[^0-9\.]+/g, "");
            if (price.charAt(0) === ".") {
              price = price.substr(1, price.length);
            }
            if (price.charAt(price.length - 1) === ".") {
              price = price.substr(0, price.length - 1);
            }
            var decimalIndexes = [];
            for (var i = 0; i < price.length; i++) {
              if (price[i] === "." && i !== price.length - centPosition) {
                decimalIndexes.push(i);
              }
            }
            if (decimalIndexes) {
              price = price.split("");
              for (var i = 0; i < decimalIndexes.length; i++) {
                price.splice(decimalIndexes[i], 1);
              }
              price = price.join("");
            }
            return Number(price);
          }
          function sendCrossSellOfferIds() {
            var crossSellOfferIds = _.keys(crossSell);
            if (crossSellOfferIds.length > 0) {
              tlm.sendMarketingEvent(
                CATEGORY,
                PURCHASE_CROSS_SALE,
                crossSellOfferIds.join(","),
              );
            }
            crossSell = {};
          }
          function sendUpsellOfferIds() {
            var upSellOfferIds = _.keys(upSell);
            if (upSellOfferIds.length > 0) {
              tlm.sendMarketingEvent(
                CATEGORY,
                PURCHASE_UP_SELL,
                upSellOfferIds.join(","),
              );
            }
            upSell = {};
          }
          function setCookie(cookieName, cookieValue, expiryDays) {
            var date = new Date();
            date.setTime(date.getTime() + expiryDays * MS_IN_DAY);
            var expires = "expires=" + date.toUTCString();
            document.cookie = cookieName + "=" + cookieValue + "; " + expires;
          }
          function unbindAllEvents() {
            unbindReviewEvents();
            window.removeEventListener("message", onMessageTealium);
            $(window).off("unload", onWindowUnload);
            Backbone.history.off("all", loadPage);
          }
          function unbindReviewEvents() {
            $("body").off("click", CART_CHANGE_ELEMENTS, onChangeCart);
            if (!_.isUndefined(promoCodeSuccessObserver)) {
              promoCodeSuccessObserver.disconnect();
            }
            if (!_.isUndefined(promoCodeFailedObserver)) {
              promoCodeFailedObserver.disconnect();
            }
          }
        })();
      } catch (e) {
        utag.DB(e);
      }
      try {
        (function () {
          var PAGE_PATH = "p/originX/login";
          var IS_LOGIN_PAGE =
            window.location.pathname.indexOf(PAGE_PATH) > -1 ? true : false;
          var ERROR = "Error";
          var IDENTITY = "Identity";
          var LOGIN = "Login";
          var OFFLINE_EMAIL_ID_OR_PASSWORD_IS_INCORRECT_OR_HAS_EXPIRED =
            "Offline: Email, ID, or Password is incorrect or has expired";
          var OFFLINE_MUST_BE_ONLINE_WHEN_LOGGING_IN_FOR_THE_FIRST_TIME =
            "Offline: Must be online when logging in for the first time";
          var ONLINE_EMAIL_ID_OR_PASSWORD_IS_INCORRECT_OR_HAS_EXPIRED =
            "Online: Email, ID, or Password is incorrect or has expired";
          if (IS_LOGIN_PAGE) {
            onLoadPage();
          }
          function onLoadPage() {
            tlm.sendPageViewsWithoutSPA();
            checkForErrors();
          }
          function checkForErrors() {
            if ($("#online-general-error").is(":visible")) {
              tlm.sendMarketingEvent(
                ERROR,
                LOGIN,
                ONLINE_EMAIL_ID_OR_PASSWORD_IS_INCORRECT_OR_HAS_EXPIRED,
              );
            }
            if ($("#offline-general-error").is(":visible")) {
              tlm.sendMarketingEvent(
                ERROR,
                LOGIN,
                OFFLINE_MUST_BE_ONLINE_WHEN_LOGGING_IN_FOR_THE_FIRST_TIME,
              );
            }
            if ($("#offline-auth-error").is(":visible")) {
              tlm.sendMarketingEvent(
                ERROR,
                LOGIN,
                OFFLINE_EMAIL_ID_OR_PASSWORD_IS_INCORRECT_OR_HAS_EXPIRED,
              );
            }
          }
        })();
      } catch (e) {
        utag.DB(e);
      }
      try {
        (function () {
          var $CONTENT_CONTAINER = $("#createBase");
          var PAGE_PATH = "p/originX/create";
          var IS_REGISTRATION_PAGE =
            window.location.pathname.indexOf(PAGE_PATH) > -1 ? true : false;
          var hasFinishedRegistering = false;
          var registrationPageIndex = 0;
          var REGISTRAION_COMPLETE_EVENT = "Complete";
          var COUNTRY = "Country";
          var IDENTITY = "Identity";
          var REGISTER = "Register";
          var REGISTRATION = "Registration";
          var REGISTRATION_CANCEL_EVENT = "Register - Cancel";
          var SECURITY = "Security";
          var REGISTRATION_START_EVENT = "Start";
          var USER_EMAIL = "User Email";
          var REGISTRATION_COMPLETE_PIN_PARAMETERS = {
            source: "origin",
            status: "complete",
          };
          if (IS_REGISTRATION_PAGE) {
            unbindEvents();
            onLoadPage();
          }
          function bindEvents() {
            $CONTENT_CONTAINER.on("click", onClickElement);
            $(window).on("beforeunload", onWindowClose);
          }
          function unbindEvents() {
            $CONTENT_CONTAINER.off("click", onClickElement);
            $(window).off("beforeunload", onWindowClose);
          }
          function onClickElement(e) {
            var $ele = $(e.target);
            if ($ele.hasClass("otkbtn-primary") || $ele.hasClass("back-btn")) {
              onViewChange();
              if (registrationPageIndex === 2) {
                hasFinishedRegistering = true;
              }
            }
          }
          function onLoadPage() {
            tlm.sendPageViewsWithoutSPA();
            bindEvents();
            tlm.sendMarketingEvent(
              IDENTITY,
              REGISTER,
              REGISTRATION_START_EVENT,
            );
          }
          function onViewChange() {
            setRegistrationPage();
            if (registrationPageIndex === 2) {
              tlm.sendMarketingEvent(
                IDENTITY,
                REGISTER,
                REGISTRAION_COMPLETE_EVENT,
              );
              tlm.sendMarketingEvent(
                REGISTRATION,
                null,
                null,
                null,
                null,
                REGISTRATION_COMPLETE_PIN_PARAMETERS,
              );
            }
          }
          function onWindowClose() {
            if (!hasFinishedRegistering) {
              sendCancelEvent();
            }
            unbindEvents();
          }
          function sendCancelEvent() {
            if (
              registrationPageIndex === 0 &&
              !$("#panel-underage-limit").is(":visible")
            ) {
              tlm.sendMarketingEvent(
                IDENTITY,
                REGISTRATION_CANCEL_EVENT,
                COUNTRY,
              );
            } else if (registrationPageIndex === 1) {
              tlm.sendMarketingEvent(
                IDENTITY,
                REGISTRATION_CANCEL_EVENT,
                USER_EMAIL,
              );
            } else if (registrationPageIndex === 2) {
              tlm.sendMarketingEvent(
                IDENTITY,
                REGISTRATION_CANCEL_EVENT,
                SECURITY,
              );
            }
          }
          function setRegistrationPage() {
            if (
              window.authenticationJsHelper &&
              typeof window.authenticationJsHelper === "object"
            ) {
              authenticationJsHelper.onNuxBegin = tlm.patchFunction(
                authenticationJsHelper.onNuxBegin,
                setRegistrationPageIndex,
              );
            }
          }
          function setRegistrationPageIndex(index) {
            registrationPageIndex = index;
          }
        })();
      } catch (e) {
        utag.DB(e);
      }
    }
  });
  if (utag.cfg.readywait || utag.cfg.waittimer) {
    utag.loader.EV("", "ready", function (a) {
      if (utag.loader.rf == 0) {
        utag.loader.rf = 1;
        utag.cfg.readywait = 1;
        utag.DB("READY:utag.cfg.readywait");
        setTimeout(function () {
          utag.loader.PINIT();
        }, utag.cfg.waittimer || 1);
      }
    });
  } else {
    utag.loader.PINIT();
  }
}
