(function (a, b) {
  var c = function () {
    var e = function (h) {
      var g = String.fromCharCode(h.which);
      if (g.toUpperCase() === g && g.toLowerCase() !== g && !h.shiftKey) {
        a("#password")
          .siblings(".otkicon-capslock")
          .addClass("otkinput-capslock-visible");
      } else {
        a("#password")
          .siblings(".otkicon-capslock")
          .removeClass("otkinput-capslock-visible");
      }
    };
    var d = function () {
      if (a(".otkinput-capslock:visible").length > 0) {
        a("#password")
          .siblings(".otkicon-capslock")
          .removeClass("otkinput-capslock-visible");
      }
    };
    a("#password").on("keypress", e);
    a("#password").on("focusout", d);
    a(".otkcheckbox input, .otkradio input, .otkselect select")
      .focusin(function (g) {
        g.preventDefault();
        a(this).parent("span").addClass("focus");
      })
      .focusout(function (g) {
        g.preventDefault();
        a(this).parent("span").removeClass("focus");
      });
    var f = function (g) {
      if (!g) {
        return;
      }
      g.each(function () {
        var n = 2;
        var r = parseFloat(a(this).css("padding-top")) + n;
        var j = parseFloat(a(this).css("padding-right")) + n;
        var i = parseFloat(a(this).css("padding-bottom")) + n;
        var k = parseFloat(a(this).css("padding-left")) + n;
        var q = r + "px " + j + "px " + i + "px " + k + "px";
        a(this).css("padding", q);
        var h = parseFloat(a(this).css("margin-top")) - n;
        var p = parseFloat(a(this).css("margin-right")) - n;
        var m = parseFloat(a(this).css("margin-bottom")) - n;
        var l = parseFloat(a(this).css("margin-left")) - n;
        var o = h + "px " + p + "px " + m + "px " + l + "px";
        a(this).css("margin", o);
        a(this).css("outline-offset", "-2px");
        a(this).hover(
          function () {
            a(this).blur();
          },
          function () {
            a(this).blur();
          },
        );
        a(this).click(function () {
          a(this).blur();
        });
        a(this).focus(function () {
          a(this).addClass("outline-focus");
        });
        a(this).blur(function () {
          a(this).removeClass("outline-focus");
        });
      });
    };
    f(a("a.forgot-password-link"));
    f(a("a.registration-link"));
    f(a("div#panel-privacy-settings > p > a"));
    a(a("div#panel-privacy-settings > p > a")).css("outline-offset", "0px");
    f(a("label#label-readAccept > a"));
    f(a("#uploader.container-inner > .file-select-note > span > a"));
    f(a("#panel-profile-upgrade > .panel-contents > .panel-content > p > a"));
    f(a("#panel-nux > .panel-contents > .panel-content > p > a"));
  };
  a(document).ready(function () {
    c();
  });
})(jQuery);
("use strict");
var QWebChannelMessageTypes = {
  signal: 1,
  propertyUpdate: 2,
  init: 3,
  idle: 4,
  debug: 5,
  invokeMethod: 6,
  connectToSignal: 7,
  disconnectFromSignal: 8,
  setProperty: 9,
  response: 10,
};
var QWebChannel = function (c, a) {
  if (typeof c !== "object" || typeof c.send !== "function") {
    console.error(
      "The QWebChannel expects a transport object with a send function and onmessage callback property. Given is: transport: " +
        typeof c +
        ", transport.send: " +
        typeof c.send,
    );
    return;
  }
  var b = this;
  this.transport = c;
  this.send = function (d) {
    if (typeof d !== "string") {
      d = JSON.stringify(d);
    }
    b.transport.send(d);
  };
  this.transport.onmessage = function (d) {
    var e = d.data;
    if (typeof e === "string") {
      e = JSON.parse(e);
    }
    switch (e.type) {
      case QWebChannelMessageTypes.signal:
        b.handleSignal(e);
        break;
      case QWebChannelMessageTypes.response:
        b.handleResponse(e);
        break;
      case QWebChannelMessageTypes.propertyUpdate:
        b.handlePropertyUpdate(e);
        break;
      default:
        console.error("invalid message received:", d.data);
        break;
    }
  };
  this.execCallbacks = {};
  this.execId = 0;
  this.exec = function (d, e) {
    if (!e) {
      b.send(d);
      return;
    }
    if (b.execId === Number.MAX_VALUE) {
      b.execId = Number.MIN_VALUE;
    }
    if (d.hasOwnProperty("id")) {
      console.error(
        "Cannot exec message with property id: " + JSON.stringify(d),
      );
      return;
    }
    d.id = b.execId++;
    b.execCallbacks[d.id] = e;
    b.send(d);
  };
  this.objects = {};
  this.handleSignal = function (e) {
    var d = b.objects[e.object];
    if (d) {
      d.signalEmitted(e.signal, e.args);
    } else {
      console.warn("Unhandled signal: " + e.object + "::" + e.signal);
    }
  };
  this.handleResponse = function (d) {
    if (!d.hasOwnProperty("id")) {
      console.error("Invalid response message received: ", JSON.stringify(d));
      return;
    }
    b.execCallbacks[d.id](d.data);
    delete b.execCallbacks[d.id];
  };
  this.handlePropertyUpdate = function (f) {
    for (var e in f.data) {
      var g = f.data[e];
      var d = b.objects[g.object];
      if (d) {
        d.propertyUpdate(g.signals, g.properties);
      } else {
        console.warn(
          "Unhandled property update: " + g.object + "::" + g.signal,
        );
      }
    }
    b.exec({ type: QWebChannelMessageTypes.idle });
  };
  this.debug = function (d) {
    b.send({ type: QWebChannelMessageTypes.debug, data: d });
  };
  b.exec({ type: QWebChannelMessageTypes.init }, function (e) {
    for (var f in e) {
      var d = new QObject(f, e[f], b);
    }
    for (var f in b.objects) {
      b.objects[f].unwrapProperties();
    }
    if (a) {
      a(b);
    }
    b.exec({ type: QWebChannelMessageTypes.idle });
  });
};
function QObject(d, g, e) {
  this.__id__ = d;
  e.objects[d] = this;
  this.__objectSignals__ = {};
  this.__propertyCache__ = {};
  var c = this;
  this.unwrapQObject = function (l) {
    if (l instanceof Array) {
      var m = new Array(l.length);
      for (var n = 0; n < l.length; ++n) {
        m[n] = c.unwrapQObject(l[n]);
      }
      return m;
    }
    if (!l || !l["__QObject*__"] || l.id === undefined) {
      return l;
    }
    var j = l.id;
    if (e.objects[j]) {
      return e.objects[j];
    }
    if (!l.data) {
      console.error("Cannot unwrap unknown QObject " + j + " without data.");
      return;
    }
    var k = new QObject(j, l.data, e);
    k.destroyed.connect(function () {
      if (e.objects[j] === k) {
        delete e.objects[j];
        var p = [];
        for (var o in k) {
          p.push(o);
        }
        for (var i in p) {
          delete k[p[i]];
        }
      }
    });
    k.unwrapProperties();
    return k;
  };
  this.unwrapProperties = function () {
    for (var i in c.__propertyCache__) {
      c.__propertyCache__[i] = c.unwrapQObject(c.__propertyCache__[i]);
    }
  };
  function f(j, k) {
    var i = j[0];
    var l = j[1];
    c[i] = {
      connect: function (m) {
        if (typeof m !== "function") {
          console.error("Bad callback given to connect to signal " + i);
          return;
        }
        c.__objectSignals__[l] = c.__objectSignals__[l] || [];
        c.__objectSignals__[l].push(m);
        if (!k && i !== "destroyed") {
          e.exec({
            type: QWebChannelMessageTypes.connectToSignal,
            object: c.__id__,
            signal: l,
          });
        }
      },
      disconnect: function (n) {
        if (typeof n !== "function") {
          console.error("Bad callback given to disconnect from signal " + i);
          return;
        }
        c.__objectSignals__[l] = c.__objectSignals__[l] || [];
        var m = c.__objectSignals__[l].indexOf(n);
        if (m === -1) {
          console.error(
            "Cannot find connection of signal " + i + " to " + n.name,
          );
          return;
        }
        c.__objectSignals__[l].splice(m, 1);
        if (!k && c.__objectSignals__[l].length === 0) {
          e.exec({
            type: QWebChannelMessageTypes.disconnectFromSignal,
            object: c.__id__,
            signal: l,
          });
        }
      },
    };
  }
  function a(j, i) {
    var k = c.__objectSignals__[j];
    if (k) {
      k.forEach(function (l) {
        l.apply(l, i);
      });
    }
  }
  this.propertyUpdate = function (l, j) {
    for (var m in j) {
      var k = j[m];
      c.__propertyCache__[m] = k;
    }
    for (var i in l) {
      a(i, l[i]);
    }
  };
  this.signalEmitted = function (j, i) {
    a(j, i);
  };
  function h(k) {
    var j = k[0];
    var i = k[1];
    c[j] = function () {
      var l = [];
      var n;
      for (var m = 0; m < arguments.length; ++m) {
        if (typeof arguments[m] === "function") {
          n = arguments[m];
        } else {
          l.push(arguments[m]);
        }
      }
      e.exec(
        {
          type: QWebChannelMessageTypes.invokeMethod,
          object: c.__id__,
          method: i,
          args: l,
        },
        function (p) {
          if (p !== undefined) {
            var o = c.unwrapQObject(p);
            if (n) {
              n(o);
            }
          }
        },
      );
    };
  }
  function b(k) {
    var l = k[0];
    var j = k[1];
    var i = k[2];
    c.__propertyCache__[l] = k[3];
    if (i) {
      if (i[0] === 1) {
        i[0] = j + "Changed";
      }
      f(i, true);
    }
    Object.defineProperty(c, j, {
      configurable: true,
      get: function () {
        var m = c.__propertyCache__[l];
        if (m === undefined) {
          console.warn(
            'Undefined value in property cache for property "' +
              j +
              '" in object ' +
              c.__id__,
          );
        }
        return m;
      },
      set: function (m) {
        if (m === undefined) {
          console.warn(
            "Property setter for " + j + " called with undefined value!",
          );
          return;
        }
        c.__propertyCache__[l] = m;
        e.exec({
          type: QWebChannelMessageTypes.setProperty,
          object: c.__id__,
          property: l,
          value: m,
        });
      },
    });
  }
  g.methods.forEach(h);
  g.properties.forEach(b);
  g.signals.forEach(function (i) {
    f(i, false);
  });
  for (var d in g.enums) {
    c[d] = g.enums[d];
  }
}
if (typeof module === "object") {
  module.exports = { QWebChannel: QWebChannel };
}
function OriginWrapper() {
  var a = null;
  function g() {
    return new Promise(function (k, j) {
      var l = 30000,
        m = qt.webChannelTransport,
        i = setTimeout(function () {
          console.error("[ERROR]: could not connect via webchannel");
          j();
        }, l);
      if (m) {
        window.webchannel = new QWebChannel(m, function () {
          if (i) {
            clearTimeout(i);
          }
          console.log("[ORIGIN][WEBCHANNEL] connection established.");
          window.webchannel.connected = true;
          k();
        });
      } else {
        console.error("[ORIGIN][WEBCHANNEL] embedded browser but no transport");
        j();
      }
    });
  }
  function b() {
    return (
      window !== window.parent &&
      window.parent &&
      window.parent.webchannel &&
      window.parent.webchannel.connected
    );
  }
  function f() {
    if (typeof qt === "undefined") {
      return Promise.reject();
    }
    if (!a) {
      if (b()) {
        console.log(
          "[ORIGIN][WEBCHANNEL] frame detected: using parent connection.",
        );
        window.webchannel = window.parent.webchannel;
        a = Promise.resolve();
      } else {
        if (!a) {
          a = g();
        }
      }
    }
    return a;
  }
  function h(i, j) {
    return function () {
      var k = Array.prototype.slice.call(arguments),
        l = this;
      return new Promise(function (n, m) {
        k.push(n);
        window.webchannel.objects[i][j].apply(l, k);
      });
    };
  }
  function c() {
    if (window.webchannel && window.webchannel.objects) {
      for (var i in window.webchannel.objects) {
        if (!window[i]) {
          window[i] = Object.create(window.webchannel.objects[i]);
          for (var j in window.webchannel.objects[i]) {
            if (typeof window.webchannel.objects[i][j] === "function") {
              window[i][j] = h(i, j);
            }
          }
        }
      }
    }
  }
  function e() {
    console.log("[ORIGIN][WEBCHANNEL] No connection.");
  }
  function d() {
    if (typeof Promise === "undefined") {
      return {
        then: function (i) {
          i();
        },
      };
    }
    return f().then(c)["catch"](e);
  }
  return { wrapWithWebChannel: d };
}
window.originWrapper = new OriginWrapper();
