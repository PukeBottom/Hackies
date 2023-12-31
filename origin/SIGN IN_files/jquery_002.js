(function (a, b) {
  a.fn.originLayout = function (e, g) {
    var f = {};
    var d = {
      init: function () {
        a("form").bind("submit.originLayout", d.events.originFormSubmit);
        a(".panel-action-area .btn-next").bind(
          "click.originLayout",
          d.events.originNextButtonClick,
        );
      },
      events: {
        originFormSubmit: function (h) {
          a(".panel-action-area .origin-ux-button", this)
            .addClass("disabled")
            .unbind("click")
            .bind("click", function (i) {
              i.preventDefault();
            });
        },
        originNextButtonClick: function (h) {
          if (a(this).hasClass("disabled")) {
            h.stopImmediatePropagation();
          } else {
            a(this)
              .parent(".panel-action-area")
              .find(".origin-ux-button")
              .addClass("disabled");
          }
          return false;
        },
      },
      helpers: {},
    };
    var c = ["init"];
    if (typeof e === "object" || !e) {
      d.init();
    } else {
      if (a.inArray(e, c)) {
      }
    }
  };
})(jQuery);
$(document).ready(function () {
  $.fn.originLayout();
});
