window.EA = typeof EA != "undefined" ? EA : {};
EA.originUxElements =
  typeof EA.originUxElements != "undefined" ? EA.originUxElements : {};
EA.originUxElements.$ =
  typeof EA.originUxElements.$ != "undefined"
    ? EA.originUxElements.$
    : typeof $ != "undefined"
    ? $
    : jQuery;
if (
  typeof EA.originUxElements.$ != "undefined" &&
  EA.originUxElements.$.isFunction(EA.originUxElements.$.fn.on) === false
) {
  EA.originUxElements.$ =
    typeof EA.originWidgets != "undefined" &&
    typeof EA.originWidgets.$ != "undefined"
      ? EA.originWidgets.$
      : EA.originUxElements.$;
  /*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
   * Licensed under the MIT License (LICENSE.txt).
   *
   * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
   * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
   * Thanks to: Seamus Leahy for adding deltaX and deltaY
   *
   * Version: 3.0.6
   *
   * Requires: 1.2.2+
   */
}
(function (f) {
  function g(a) {
    var n = a || window.event,
      m = [].slice.call(arguments, 1),
      l = 0,
      k = !0,
      j = 0,
      i = 0;
    return (
      (a = f.event.fix(n)),
      (a.type = "mousewheel"),
      n.wheelDelta && (l = n.wheelDelta / 120),
      n.detail && (l = -n.detail / 3),
      (i = l),
      n.axis !== undefined &&
        n.axis === n.HORIZONTAL_AXIS &&
        ((i = 0), (j = -1 * l)),
      n.wheelDeltaY !== undefined && (i = n.wheelDeltaY / 120),
      n.wheelDeltaX !== undefined && (j = (-1 * n.wheelDeltaX) / 120),
      m.unshift(a, l, j, i),
      (f.event.dispatch || f.event.handle).apply(this, m)
    );
  }
  var e = ["DOMMouseScroll", "mousewheel"];
  if (f.event.fixHooks) {
    for (var h = e.length; h; ) {
      f.event.fixHooks[e[--h]] = f.event.mouseHooks;
    }
  }
  (f.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener) {
        for (var b = e.length; b; ) {
          this.addEventListener(e[--b], g, !1);
        }
      } else {
        this.onmousewheel = g;
      }
    },
    teardown: function () {
      if (this.removeEventListener) {
        for (var b = e.length; b; ) {
          this.removeEventListener(e[--b], g, !1);
        }
      } else {
        this.onmousewheel = null;
      }
    },
  }),
    f.fn.extend({
      mousewheel: function (b) {
        return b ? this.bind("mousewheel", b) : this.trigger("mousewheel");
      },
      unmousewheel: function (b) {
        return this.unbind("mousewheel", b);
      },
    });
})(EA.originUxElements.$);
/*!
     jquery scroll - a custom stylable scrollbar
     Version 0.4
     https://github.com/thomd/jquery-scroll
     Copyright (c) 2011 Thomas Duerr (me-at-thomd-dot-net)
     Licensed under the MIT license (https://raw.github.com/thomd/jquery-scroll/master/MIT-LICENSE)
     */
(function (c, a) {
  var b = {
    init: function (e, f) {
      var d = c.extend({}, c.fn.scrollbar.defaults, f);
      return this.each(function () {
        var g = c(this),
          h = { arrows: d.arrows };
        if (d.containerHeight != "auto") {
          g.height(d.containerHeight);
        }
        h.containerHeight = g.height();
        h.contentHeight = c.fn.scrollbar.contentHeight(g);
        if (h.contentHeight <= h.containerHeight) {
          return true;
        }
        this.scrollbar = new c.fn.scrollbar.Scrollbar(g, h, d);
        this.scrollbar.buildHtml().setHandle().appendEvents();
        if (typeof e === "function") {
          e(g.find(".scrollbar-pane"), this.scrollbar);
        }
      });
    },
    repaint: function () {
      return this.each(function () {
        if (this.scrollbar) {
          this.scrollbar.repaint();
        }
      });
    },
    scrollto: function (d) {
      return this.each(function () {
        this.scrollbar.scrollto(d);
      });
    },
    unscrollbar: function () {
      return this.each(function () {
        if (this.scrollbar) {
          this.scrollbar.unscrollbar();
        }
      });
    },
  };
  c.fn.scrollbar = function (d) {
    if (b[d]) {
      return b[d].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
      if (typeof d === "function" || d === undefined) {
        return b.init.apply(this, arguments);
      } else {
        if (typeof d === "object") {
          return b.init.apply(this, [null, d]);
        } else {
          c.error("method '" + d + "' does not exist for $.fn.scrollbar");
        }
      }
    }
  };
  c.fn.scrollbar.defaults = {
    containerHeight: "auto",
    arrows: true,
    handleHeight: "auto",
    handleMinHeight: 40,
    scrollTimeout: 150,
    scrollStep: 40,
    scrollTimeoutArrows: 40,
    scrollStepArrows: 1,
  };
  c.fn.scrollbar.Scrollbar = function (d, f, e) {
    this.container = d;
    this.props = f;
    this.opts = e;
    this.mouse = {};
    this.props.arrows = this.container.hasClass("no-arrows")
      ? false
      : this.props.arrows;
  };
  c.fn.scrollbar.Scrollbar.prototype = {
    buildHtml: function () {
      this.container.wrapInner('<div class="scrollbar-pane"/>');
      this.container.append(
        '<div class="scrollbar-handle-container"><div class="scrollbar-handle-inner"><div class="scrollbar-handle"/></div></div>',
      );
      if (this.props.arrows) {
        this.container
          .append('<div class="scrollbar-handle-up"/>')
          .append('<div class="scrollbar-handle-down"/>');
      }
      var d = this.container.height();
      this.pane = this.container.find(".scrollbar-pane");
      this.handle = this.container.find(".scrollbar-handle");
      this.handleContainer = this.container.find(".scrollbar-handle-container");
      this.handleInner = this.container.find(".scrollbar-handle-inner");
      this.handleArrows = this.container.find(
        ".scrollbar-handle-up, .scrollbar-handle-down",
      );
      this.handleArrowUp = this.container.find(".scrollbar-handle-up");
      this.handleArrowDown = this.container.find(".scrollbar-handle-down");
      this.pane.defaultCss({ top: 0, left: 0 });
      this.handleContainer.defaultCss({ right: 0 });
      this.handle.defaultCss({ top: 0, right: 0 });
      this.handleArrows.defaultCss({ right: 0 });
      this.handleArrowUp.defaultCss({ top: 0 });
      this.handleArrowDown.defaultCss({ bottom: 0 });
      this.container.css({
        position:
          this.container.css("position") === "absolute"
            ? "absolute"
            : "relative",
        overflow: "hidden",
        height: d,
      });
      this.pane.css({
        position: "absolute",
        overflow: "visible",
        height: "auto",
      });
      this.handleContainer.css({
        position: "absolute",
        top: this.handleArrowUp.outerHeight(true),
        height:
          this.props.containerHeight -
          this.handleArrowUp.outerHeight(true) -
          this.handleArrowDown.outerHeight(true) +
          "px",
      });
      this.handleInner.css({
        height:
          this.props.containerHeight -
          this.handleArrowUp.outerHeight(true) -
          this.handleArrowDown.outerHeight(true) +
          "px",
        position: 0,
      });
      this.handle.css({ position: "absolute", cursor: "pointer" });
      this.handleArrows.css({ position: "absolute", cursor: "pointer" });
      this.pane.top = 0;
      return this;
    },
    setHandle: function () {
      this.props.handleContainerHeight = this.handleContainer.height();
      this.props.contentHeight = c.fn.scrollbar.contentHeight(this.pane);
      this.props.handleHeight =
        this.opts.handleHeight == "auto"
          ? Math.max(
              Math.ceil(
                (this.props.containerHeight *
                  this.props.handleContainerHeight) /
                  this.props.contentHeight,
              ),
              this.opts.handleMinHeight,
            )
          : this.opts.handleHeight;
      this.handle.height(this.props.handleHeight);
      this.handle.height(
        2 * this.handle.height() - this.handle.outerHeight(true),
      );
      this.props.handlePosition = {
        min: 0,
        max: this.props.handleContainerHeight - this.props.handleHeight,
      };
      this.props.handleContentRatio =
        (this.props.contentHeight - this.props.containerHeight) /
        (this.props.handleContainerHeight - this.props.handleHeight);
      if (this.handle.top == undefined) {
        this.handle.top = 0;
      } else {
        this.handle.top = (-1 * this.pane.top) / this.props.handleContentRatio;
      }
      return this;
    },
    appendEvents: function () {
      this.handle.on("mousedown.handle", c.proxy(this, "startOfHandleMove"));
      this.handleContainer.on(
        "mousedown.handle",
        c.proxy(this, "onHandleContainerMousedown"),
      );
      this.handleContainer.on(
        "mouseenter.container mouseleave.container",
        c.proxy(this, "onHandleContainerHover"),
      );
      this.handleArrows.on(
        "mousedown.arrows",
        c.proxy(this, "onArrowsMousedown"),
      );
      this.container.on("mousewheel.container", c.proxy(this, "onMouseWheel"));
      this.container.on(
        "mouseenter.container mouseleave.container",
        c.proxy(this, "onContentHover"),
      );
      this.handle.on("click.scrollbar", this.preventClickBubbling);
      this.handleContainer.on("click.scrollbar", this.preventClickBubbling);
      this.handleArrows.on("click.scrollbar", this.preventClickBubbling);
      return this;
    },
    mousePosition: function (d) {
      return (
        d.pageY ||
        d.clientY + (a.documentElement.scrollTop || a.body.scrollTop) ||
        0
      );
    },
    repaint: function () {
      this.setHandle();
      this.setHandlePosition();
      this.setContentPosition();
    },
    scrollto: function (e) {
      var d = 0;
      if (typeof e == "number") {
        d = (e < 0 ? 0 : e) / this.props.handleContentRatio;
      } else {
        if (typeof e == "string") {
          if (e == "bottom") {
            d = this.props.handlePosition.max;
          }
          if (e == "middle") {
            d = Math.ceil(this.props.handlePosition.max / 2);
          }
        } else {
          if (typeof e == "object" && !c.isPlainObject(e)) {
            d = Math.min(
              Math.floor(e.position().top / this.props.handleContentRatio),
              this.props.handlePosition.max,
            );
          }
        }
      }
      this.handle.top = d;
      this.setHandlePosition();
      this.setContentPosition();
    },
    unscrollbar: function () {
      var d = this.container.find(".scrollbar-pane").find("*");
      this.container.empty();
      this.container.append(d);
      this.container.attr("style", "");
    },
    startOfHandleMove: function (d) {
      d.preventDefault();
      d.stopPropagation();
      this.mouse.start = this.mousePosition(d);
      this.handle.start = this.handle.top;
      c(a)
        .on("mousemove.handle", c.proxy(this, "onHandleMove"))
        .on("mouseup.handle", c.proxy(this, "endOfHandleMove"));
      this.handle.addClass("move");
      this.handleContainer.addClass("move");
    },
    onHandleMove: function (d) {
      d.preventDefault();
      var e = this.mousePosition(d) - this.mouse.start;
      this.handle.top = this.handle.start + e;
      this.setHandlePosition();
      this.setContentPosition();
    },
    endOfHandleMove: function (d) {
      c(a).unbind(".handle");
      this.handle.removeClass("move");
      this.handleContainer.removeClass("move");
    },
    setHandlePosition: function () {
      this.handle.top =
        this.handle.top > this.props.handlePosition.max
          ? this.props.handlePosition.max
          : this.handle.top;
      this.handle.top =
        this.handle.top < this.props.handlePosition.min
          ? this.props.handlePosition.min
          : this.handle.top;
      this.handle[0].style.top = this.handle.top + "px";
    },
    setContentPosition: function () {
      this.pane.top = -1 * this.props.handleContentRatio * this.handle.top;
      this.pane[0].style.top = this.pane.top + "px";
    },
    onMouseWheel: function (d, f) {
      var e = Math.max(5000 / this.props.contentHeight, 1);
      f = Math.round(f * e);
      this.handle.top -= f;
      this.setHandlePosition();
      this.setContentPosition();
      if (
        this.handle.top > this.props.handlePosition.min &&
        this.handle.top < this.props.handlePosition.max
      ) {
        d.preventDefault();
      }
    },
    onHandleContainerMousedown: function (e) {
      e.preventDefault();
      if (!c(e.target).hasClass("scrollbar-handle-container")) {
        return false;
      }
      this.handle.direction =
        this.handle.offset().top < this.mousePosition(e) ? 1 : -1;
      this.handle.step = this.opts.scrollStep;
      var d = this;
      c(a).on("mouseup.handlecontainer", function () {
        clearInterval(f);
        d.handle.unbind("mouseenter.handlecontainer");
        c(a).unbind("mouseup.handlecontainer");
      });
      this.handle.on("mouseenter.handlecontainer", function () {
        clearInterval(f);
      });
      var f = setInterval(
        c.proxy(this.moveHandle, this),
        this.opts.scrollTimeout,
      );
    },
    onArrowsMousedown: function (d) {
      d.preventDefault();
      this.handle.direction = c(d.target).hasClass("scrollbar-handle-up")
        ? -1
        : 1;
      this.handle.step = this.opts.scrollStepArrows;
      c(d.target).addClass("move");
      var e = setInterval(
        c.proxy(this.moveHandle, this),
        this.opts.scrollTimeoutArrows,
      );
      c(a).one("mouseup.arrows", function () {
        clearInterval(e);
        c(d.target).removeClass("move");
      });
    },
    moveHandle: function () {
      this.handle.top =
        this.handle.direction === 1
          ? Math.min(
              this.handle.top + this.handle.step,
              this.props.handlePosition.max,
            )
          : Math.max(
              this.handle.top - this.handle.step,
              this.props.handlePosition.min,
            );
      this.handle[0].style.top = this.handle.top + "px";
      this.setContentPosition();
    },
    onContentHover: function (d) {
      if (d.type === "mouseenter") {
        this.container.addClass("hover");
        this.handleContainer.addClass("hover");
      } else {
        this.container.removeClass("hover");
        this.handleContainer.removeClass("hover");
      }
    },
    onHandleContainerHover: function (d) {
      if (d.type === "mouseenter") {
        this.handleArrows.addClass("hover");
      } else {
        this.handleArrows.removeClass("hover");
      }
    },
    preventClickBubbling: function (d) {
      d.stopPropagation();
    },
  };
  c.fn.scrollbar.contentHeight = function (f) {
    var h = f.wrapInner("<div/>").find(":first");
    var d = 0;
    var g = false;
    if (!c("body").is(":visible")) {
      c("body").show();
      g = true;
    }
    if (h.height() > 0) {
      d = h.height();
    } else {
      var e = h.clone().attr("id", false).css({
        visibility: "hidden",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
      });
      c("body").append(e);
      d = e.height();
      e.remove();
    }
    h.replaceWith(h.contents());
    return d;
  };
  c.fn.defaultCss = function (d) {
    var e = {
      right: "auto",
      left: "auto",
      top: "auto",
      bottom: "auto",
      position: "static",
    };
    return this.each(function () {
      var g = c(this);
      for (var f in d) {
        if (g.css(f) === e[f]) {
          g.css(f, d[f]);
        }
      }
    });
  };
})(EA.originUxElements.$, document);
(function (a, b) {
  a.fn.originUxElements = function (e) {
    var f = {};
    var d = {
      init: function () {
        a(".origin-ux-checkbox-control input[checked=checked]")
          .parents(".origin-ux-checkbox-control")
          .addClass("checked");
        a(".origin-ux-radio-button-control span input[checked=checked]")
          .parents(".origin-ux-radio-button-control")
          .addClass("checked");
        if (
          navigator.platform.indexOf("iPad") == -1 &&
          navigator.platform.indexOf("iPhone") == -1 &&
          navigator.platform.indexOf("iPod") == -1 &&
          navigator.userAgent.indexOf("Android") == -1 &&
          navigator.userAgent.indexOf("Windows Phone") == -1
        ) {
          a(".origin-ux-drop-down-control").each(function () {
            a("select", this).attr(
              "size",
              "" + a("select option", this).length,
            );
            a("select", this).wrap(
              "<div class='origin-ux-drop-down-selection' />",
            );
            a(".origin-ux-drop-down-selection", this).prepend(
              "<span value='" +
                a("select option:selected", this).val() +
                "'>" +
                a("select option:selected", this).text() +
                "</span>",
            );
            var g = a(
              "<div class='drop-down-options-container'><div class='drop-down-options'><div class='scrollbar'/></div></div>",
            );
            var h = 0;
            a("select option", this).each(function () {
              if (h++ > 0) {
                a(".scrollbar", g).append(
                  "<div class='drop-down-item'><a href='#' value=\"" +
                    a(this).val() +
                    '"><span>' +
                    a(this).text() +
                    "</span></a></div>",
                );
              }
            });
            if (a(".scrollbar .drop-down-item", g).length <= 1) {
              a(".scrollbar", g).addClass("items-one");
            }
            if (a(".scrollbar .drop-down-item", g).length == 2) {
              a(".scrollbar", g).addClass("items-two");
            }
            if (a(".scrollbar .drop-down-item", g).length == 3) {
              a(".scrollbar", g).addClass("items-three");
            }
            if (a(".scrollbar .drop-down-item", g).length == 4) {
              a(".scrollbar", g).addClass("items-four");
            }
            if (a(".scrollbar .drop-down-item", g).length == 5) {
              a(".scrollbar", g).addClass("items-five");
            }
            a(this).append(g);
          });
          a(".scrollbar").scrollbar();
        }
        a(".origin-ux-button").on(
          "mousedown.originUxElements",
          d.events.uxButtonMouseDown,
        );
        a(".origin-ux-button").on(
          "mouseup.originUxElements",
          d.events.uxButtonMouseUp,
        );
        a(".origin-ux-button").on(
          "click.originUxElements",
          d.events.uxButtonClick,
        );
        a(".origin-ux-button").on(
          "focus.originUxElements",
          d.events.uxButtonFocus,
        );
        a(".origin-ux-button").on(
          "blur.originUxElements",
          d.events.uxButtonBlur,
        );
        a(".origin-ux-button").on(
          "mouseout.originUxElements",
          d.events.uxButtonMouseOut,
        );
        a(".origin-ux-textbox-control input").on(
          "focus.originUxElements",
          d.events.uxTextboxFocus,
        );
        a(".origin-ux-textbox-control input").on(
          "blur.originUxElements",
          d.events.uxTextboxBlur,
        );
        a(".origin-ux-textbox-control input[type=password]").on(
          "keypress.originUxElements",
          d.events.uxTextboxCapLock,
        );
        a(".origin-ux-checkbox-control input").on(
          "focus.originUxElements",
          d.events.uxCheckboxFocus,
        );
        a(".origin-ux-checkbox-control span").on(
          "click.originUxElements",
          d.events.uxCheckboxClick,
        );
        a(".origin-ux-checkbox-control label").on(
          "click.originUxElements",
          d.events.uxCheckboxLabelClick,
        );
        a(".origin-ux-checkbox-control label a").click(function (g) {
          g.stopPropagation();
        });
        a(".origin-ux-checkbox-control input").on(
          "blur.originUxElements",
          d.events.uxCheckboxBlur,
        );
        a(".origin-ux-radio-button-control input").on(
          "focus.originUxElements",
          d.events.uxRadioButtonFocus,
        );
        a(".origin-ux-radio-button-control input").on(
          "blur.originUxElements",
          d.events.uxRadioButtonBlur,
        );
        a(".origin-ux-radio-button-control").on(
          "click.originUxElements",
          d.events.uxRadioButtonClick,
        );
        a(".origin-ux-drop-down-control select").on(
          "focus.originUxElements",
          d.events.uxDropDownFocus,
        );
        a(".origin-ux-drop-down-control select").on(
          "keyup.originUxElements",
          d.events.uxDropDownKeyup,
        );
        a(".origin-ux-drop-down-control select").on(
          "keydown.originUxElements",
          d.events.uxDropDownKeydown,
        );
        a(".origin-ux-drop-down-control .origin-ux-drop-down-selection").on(
          "click.originUxElements",
          d.events.uxDropDownShow,
        );
        a(".origin-ux-drop-down-control .drop-down-options-container a").on(
          "click.originUxElements",
          d.events.uxDropDownSelect,
        );
        a(".origin-ux-drop-down-control .drop-down-item").on(
          "mouseenter.originUxElements mouseleave.originUxElements",
          d.events.uxDropDownHover,
        );
        a(".origin-ux-tooltip a").on(
          "click.originUxElements",
          d.events.uxTooltipClick,
        );
        a("html").on("click.originUxElements", d.events.uxHtmlClick);
        a("html").on("keyup.originUxElements", d.events.uxHtmlKeyup);
        a(".origin-ux-control").on(
          "click.originUxElements",
          d.events.uxControlClick,
        );
      },
      events: {
        uxControlClick: function (g) {},
        uxHtmlClick: function (g) {
          a(".drop-down-options-container").hide();
          a(".origin-ux-drop-down-control").removeClass("selected");
          a(".origin-ux-drop-down-control").removeClass("focus");
        },
        uxHtmlKeyup: function (g) {
          if (
            g.which == 32 &&
            a(document.activeElement).is(":checkbox") &&
            a(document.activeElement)
              .parent()
              .parent(".origin-ux-checkbox-control").length
          ) {
            g.preventDefault();
            d.events.uxCheckboxClick(g, a(document.activeElement).parent());
          }
        },
        uxButtonMouseDown: function (g) {
          if (a(this).attr("propagate") != "true") {
            g.preventDefault();
          }
          if (!a(this).hasClass("disabled")) {
            a(this).addClass("active");
          }
        },
        uxButtonMouseUp: function (g) {
          if (a(this).attr("propagate") != "true") {
            g.preventDefault();
          }
          if (!a(this).hasClass("disabled")) {
            a(this).removeClass("active");
          }
        },
        uxButtonClick: function (g) {
          if (a(this).attr("propagate") != "true") {
            g.preventDefault();
          }
          if (a(this).hasClass("disabled")) {
            return false;
          }
        },
        uxButtonFocus: function (g) {
          if (a(this).hasClass("disabled")) {
            return false;
          }
          a(this).addClass("focus");
        },
        uxButtonBlur: function (g) {
          if (a(this).hasClass("disabled")) {
            return false;
          }
          a(this).removeClass("focus");
        },
        uxButtonMouseOut: function (g) {
          if (a(this).attr("propagate") != "true") {
            g.preventDefault();
          }
          if (a(this).hasClass("disabled")) {
            return false;
          }
          a(this).removeClass("active");
        },
        uxTextboxFocus: function (g) {
          a(this).parents(".origin-ux-textbox").addClass("focus");
          if (a(this).prop("type") === "password") {
            d.helpers.startUpdatingCapsLock(a(this));
          }
        },
        uxTextboxBlur: function (g) {
          a(this).parents(".origin-ux-textbox").removeClass("focus");
          if (a(this).prop("type") === "password") {
            d.helpers.stopUpdatingCapsLock(a(this));
          }
        },
        uxTextboxCapLock: function (i) {
          if (d.helpers.useSystemCapsLock() || d.helpers.useCustomCapsLock()) {
            return true;
          }
          var h = String.fromCharCode(i.which);
          var g = h.toUpperCase() === h && h.toLowerCase() !== h && !i.shiftKey;
          d.helpers.updateCapsLockStatus(a(this), g);
        },
        uxCheckboxFocus: function (g) {
          if (
            a(this).parents(".origin-ux-checkbox-control").hasClass("disabled")
          ) {
            return false;
          }
          a(".origin-ux-checkbox-control").removeClass("focus");
          a(this).parents(".origin-ux-checkbox-control").addClass("focus");
        },
        uxCheckboxBlur: function (g) {
          if (
            a(this).parents(".origin-ux-checkbox-control").hasClass("disabled")
          ) {
            return false;
          }
          a(this).parents(".origin-ux-checkbox-control").removeClass("focus");
        },
        uxCheckboxLabelClick: function (g, h) {
          if (a(this).parent().hasClass("origin-ux-complex-label-control")) {
            a(this).parent().siblings("span").click();
          } else {
            a(this).siblings("span").click();
          }
        },
        uxCheckboxClick: function (h, i) {
          h.preventDefault();
          var g = a(this);
          if (i) {
            g = i;
          }
          if (
            a(g).parents(".origin-ux-checkbox-control").hasClass("disabled")
          ) {
            return false;
          }
          a(g)
            .parents(".origin-ux-checkbox-control")
            .removeClass("field-error");
          if (a("input[type=checkbox]", g).prop("checked")) {
            a("input[type=checkbox]", g).prop("checked", false);
            a(g).parents(".origin-ux-checkbox-control").removeClass("checked");
          } else {
            a("input[type=checkbox]", g).prop("checked", true);
            a(g).parents(".origin-ux-checkbox-control").addClass("checked");
          }
          a("input[type=checkbox]", g).trigger("change");
        },
        uxRadioButtonFocus: function (g) {
          if (
            a(this)
              .parents(".origin-ux-radio-button-control")
              .hasClass("disabled")
          ) {
            return false;
          }
          a(this).parents(".origin-ux-radio-button-control").addClass("focus");
        },
        uxRadioButtonBlur: function (g) {
          a(this)
            .parents(".origin-ux-radio-button-control")
            .removeClass("focus");
        },
        uxRadioButtonClick: function (g) {
          a(".origin-ux-radio-button-control").removeClass("focus");
          if (
            a(this)
              .parents(".origin-ux-radio-button-control")
              .hasClass("disabled")
          ) {
            return false;
          }
          a(this)
            .parents(".origin-ux-radio-button-control")
            .removeClass("field-error");
          radioButtonSet = a(this).find("input").attr("name");
          a("input[name='" + radioButtonSet + "']")
            .parents(".origin-ux-radio-button-control")
            .removeClass("checked");
          a(this).addClass("checked");
          a("input", this).prop("checked", true);
          a("input", this).focus();
        },
        uxDropDownFocus: function (g) {
          if (a(this).attr("propagate") != "true") {
            g.preventDefault();
          }
          if (
            a(this).parents(".origin-ux-drop-down-control").hasClass("disabled")
          ) {
            return false;
          }
          a(".origin-ux-drop-down-control").removeClass("focus");
          a(this).parents(".origin-ux-drop-down-control").addClass("focus");
        },
        uxDropDownBlur: function (g) {
          if (a(this).attr("propagate") != "true") {
            g.preventDefault();
          }
          a(this).parents(".origin-ux-drop-down-control").removeClass("focus");
          a(this)
            .parents(".origin-ux-drop-down-control")
            .removeClass("selected");
          a(this)
            .parents(".origin-ux-drop-down-control")
            .find(".drop-down-options-container")
            .hide();
        },
        uxDropDownKeydown: function (h) {
          var g = a(this).parents(".origin-ux-drop-down-control");
          if (h.keyCode === 27 || h.keyCode === 13 || h.keyCode == 9) {
            g.removeClass("selected");
            if (h.keyCode == 9) {
              g.removeClass("focus");
            }
            g.find(".drop-down-options-container").hide();
          } else {
            if (h.keyCode == 32) {
              g.find(".origin-ux-drop-down-selection").click();
              g.find("select").focus();
            }
          }
        },
        uxDropDownKeyup: function (j) {
          var g = a(this).parents(".origin-ux-drop-down-control");
          var h = a("option:selected", this);
          g.find(".origin-ux-drop-down-selection span").text(h.text());
          if (g.find(".drop-down-options-container").is(":visible")) {
            var i = g.find("a[value='" + h.val() + "']").parent();
            if (i.length > 0) {
              g.find(".drop-down-item").removeClass("hover");
              i.addClass("hover");
              g.find(".scrollbar").scrollbar("scrollto", i);
            }
          }
        },
        uxDropDownShow: function (g) {
          if (a(this).attr("propagate") != "true") {
            g.preventDefault();
            g.stopPropagation();
          }
          a(".drop-down-options-container").hide();
          a(".origin-ux-drop-down-control")
            .removeClass("selected")
            .removeClass("focus");
          if (
            a(this).parents(".origin-ux-drop-down-control").hasClass("selected")
          ) {
            a(this)
              .parents(".origin-ux-drop-down-control")
              .removeClass("selected");
            a(this).parents(".origin-ux-drop-down-control").addClass("focus");
            a(this).next(".drop-down-options-container").hide();
          } else {
            a(this)
              .parents(".origin-ux-drop-down-control")
              .addClass("selected");
            a(this)
              .parents(".origin-ux-drop-down-control")
              .removeClass("focus");
            a(this).next(".drop-down-options-container").show();
          }
          a(this).find("select")[0].focus();
          var h = jQuery.Event("keyup", { keyCode: 32 });
          a(this).find("select").trigger(h);
        },
        uxDropDownSelect: function (g) {
          if (a(this).attr("propagate") != "true") {
            g.preventDefault();
            g.stopPropagation();
          }
          var h = a(this)
            .parents(".origin-ux-drop-down-control")
            .find(".origin-ux-drop-down-selection span")
            .text();
          a(this).parents(".drop-down-options-container").hide();
          a(this)
            .parents(".origin-ux-drop-down-control")
            .find(".origin-ux-drop-down-selection span")
            .text(a(this).text());
          a(this)
            .parents(".origin-ux-drop-down-control")
            .removeClass("selected");
          a(this).parents(".origin-ux-drop-down-control").addClass("focus");
          a(this)
            .parents(".origin-ux-drop-down-control")
            .find("select")
            .val(a(this).attr("value"));
          if (h != a(this).text()) {
            a(this)
              .parents(".origin-ux-drop-down-control")
              .find("select")
              .change();
          }
          a(this)
            .parents(".origin-ux-drop-down-control")
            .find("select")[0]
            .focus();
        },
        uxDropDownHover: function (g) {
          if (g.type === "mouseenter") {
            a(this)
              .parents(".scrollbar-pane")
              .find(".drop-down-item")
              .removeClass("hover");
            a(this).addClass("hover");
          } else {
            a(this).removeClass("hover");
          }
        },
        uxDropDownRepaint: function () {
          a(".origin-ux-drop-down-control").each(function () {
            a(".drop-down-options-container", this).remove();
            var g = a(
              "<div class='drop-down-options-container'><div class='drop-down-options'><div class='scrollbar'/></div></div>",
            );
            a("select option", this).each(function () {
              a(".scrollbar", g).append(
                "<div class='drop-down-item'><a href='#' value=\"" +
                  a(this).val() +
                  '"><span>' +
                  a(this).text() +
                  "</span></a></div>",
              );
            });
            if (a(".scrollbar .drop-down-item", g).length <= 1) {
              a(".scrollbar", g).addClass("items-one");
            }
            if (a(".scrollbar .drop-down-item", g).length == 2) {
              a(".scrollbar", g).addClass("items-two");
            }
            if (a(".scrollbar .drop-down-item", g).length == 3) {
              a(".scrollbar", g).addClass("items-three");
            }
            if (a(".scrollbar .drop-down-item", g).length == 4) {
              a(".scrollbar", g).addClass("items-four");
            }
            if (a(".scrollbar .drop-down-item", g).length == 5) {
              a(".scrollbar", g).addClass("items-five");
            }
            a("a", g).on("click.originUxElements", d.events.uxDropDownSelect);
            a(this).append(g);
          });
          a(".scrollbar").scrollbar();
        },
        uxTooltipClick: function (g) {
          g.preventDefault();
        },
      },
      helpers: {
        useSystemCapsLock: function () {
          return (
            (a.browser.webkit &&
              navigator.appVersion.indexOf("Mac") != -1 &&
              navigator.appVersion.indexOf("Origin") == -1) ||
            (a.browser.msie && a.browser.version > 9)
          );
        },
        useCustomCapsLock: function () {
          return typeof window.capsLock !== "undefined";
        },
        updateCapsLockStatus: function (g, h) {
          if (h) {
            a(g).parents(".origin-ux-textbox").addClass("caplock");
          } else {
            a(g).parents(".origin-ux-textbox").removeClass("caplock");
          }
        },
        startUpdatingCapsLock: function (h) {
          var g = h instanceof jQuery ? h[0] : h;
          if (
            d.helpers.useSystemCapsLock() ||
            !d.helpers.useCustomCapsLock() ||
            g.capsLockIntervalId != null
          ) {
            return false;
          }
          var i = window.capsLock.capsLockActive;
          d.helpers.updateCapsLockStatus(h, i);
          g.capsLockIntervalId = window.setInterval(function () {
            var j = window.capsLock.capsLockActive;
            if (j !== i) {
              d.helpers.updateCapsLockStatus(h, j);
            }
            i = j;
          }, 250);
          return true;
        },
        stopUpdatingCapsLock: function (h) {
          var g = h instanceof jQuery ? h[0] : h;
          if (
            d.helpers.useSystemCapsLock() ||
            !d.helpers.useCustomCapsLock() ||
            g.capsLockIntervalId == null
          ) {
            return false;
          }
          window.clearInterval(g.capsLockIntervalId);
          g.capsLockIntervalId = null;
          d.helpers.updateCapsLockStatus(h, false);
          return true;
        },
      },
    };
    var c = ["init", "dropdown-repaint"];
    if (typeof e === "object" || !e) {
      d.init();
    } else {
      if (a.inArray(e, c)) {
        switch (e) {
          case "dropdown-repaint":
            d.events.uxDropDownRepaint();
            break;
        }
      }
    }
  };
})(EA.originUxElements.$);
(function (a, b) {
  a(document).ready(function () {
    a.fn.originUxElements();
  });
})(EA.originUxElements.$);
