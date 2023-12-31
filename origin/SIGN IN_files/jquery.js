(function (a, b) {
  a.fn.login = function (e, g) {
    var f = {
      regExEmail:
        /^[a-z0-9]+[a-z0-9!#$%&'*+/=?^_`{|}~-]*(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
      regEXPhoneNumber:
        /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/,
      gCaptchaEnabled: false,
      source: "",
      ipCountry: "",
      phoneNumber: "",
      selectedCountry: "",
      isIncompletePhone: false,
      isPhoneNumberChecked: false,
      isPhoneNumberValidate: false,
      isPhoneNumberLogin: false,
    };
    var d = {
      init: function () {
        a.extend(f, e);
        if (
          typeof console === "undefined" ||
          typeof console.log === "undefined"
        ) {
          console = {};
          console.log = function () {};
        }
        if (a("#storeKey").val()) {
          d.helpers.tryAutoLogin(a("#email").val().toLowerCase());
        }
        if (typeof window.authenticationJsHelper === "undefined") {
          window.authenticationJsHelper = {};
          window.authenticationJsHelper.currentEnvironment = "";
          window.authenticationJsHelper.online = true;
          window.authenticationJsHelper.onOfflineLoginSuccess = function (l) {
            console.log("offline success login cid: " + l);
          };
          window.authenticationJsHelper.onAuthenticationError = function (
            l,
            m,
          ) {
            console.log("authentication error: " + l + " with cid: " + m);
          };
          window.authenticationJsHelper.fallback = false;
          window.authenticationJsHelper.onSendTelemetry = function (l) {
            console.log("captcha step: " + l);
          };
          window.authenticationJsHelper.showAgeUpFlow = true;
          window.authenticationJsHelper.supportErrorDescription = false;
        }
        if (typeof window.authenticationJsHelper.fallback === "undefined") {
          window.authenticationJsHelper.fallback = false;
        }
        if (
          typeof window.authenticationJsHelper.onSendTelemetry === "undefined"
        ) {
          window.authenticationJsHelper.onSendTelemetry = function (l) {
            console.log("captcha step: " + l);
          };
        }
        if (
          typeof window.authenticationJsHelper.showAgeUpFlow === "undefined"
        ) {
          window.authenticationJsHelper.showAgeUpFlow = true;
        }
        if (
          typeof window.authenticationJsHelper.supportErrorDescription ===
          "undefined"
        ) {
          window.authenticationJsHelper.supportErrorDescription = false;
        }
        window.authenticationJsHelper.fallback = true;
        a("#back").bind("click", d.events.back);
        a("#login_with_email").bind("click", d.events.loginWithEmail);
        a("#login-with-phone-number").bind(
          "click",
          d.events.loginWithPhoneNumber,
        );
        a("#passwordShow").bind("click", d.events.toggleShowPassword);
        a("#phoneNumberLoginPasswordShow").bind(
          "click",
          d.events.toggleShowPhoneNumberPassword,
        );
        a("#loginBase #logInBtn").bind("click.login", d.events.validateLogin);
        a("#password, #recaptcha_response_field").bind(
          "input change",
          d.events.resetLoginBtn,
        );
        a("#email").bind("blur.login", d.events.validateEmail);
        a("#forgot-password-section .otka").bind(
          "click.login",
          d.events.resetPassword,
        );
        a("#phoneNumberCheckNextBtn").bind(
          "click.login",
          d.helpers.validateResetPasswordRequest,
        );
        a("#phoneNumberLoginBtn").bind(
          "click.login",
          d.events.validatePhoneNumberLogin,
        );
        a("#phoneNumber").bind(
          "focus.resetRequest",
          d.events.clearPhoneNumberError,
        );
        a("#phoneNumber").bind("keydown", d.events.validateIsNumber);
        a("#phoneNumber").bind(
          "blur.registration",
          d.events.validatePhoneNumber,
        );
        var h = a("#regionCode");
        var i = a("#phoneNumber");
        h.bind("change.login", d.events.validatePhoneNumber);
        h.bind("change.login", d.events.resetRegionCode);
        i.bind("keyup.login change.login", d.events.resetRegionCode);
        d.helpers.initDefaultCountry();
        d.events.resetRegionCode();
        a("#tooltip i").hover(
          function () {
            a(this)
              .siblings(".otktooltip-bottom")
              .addClass("otktooltip-isvisible");
          },
          function () {
            a(this)
              .siblings(".otktooltip-bottom")
              .removeClass("otktooltip-isvisible");
          },
        );
        a("span.otkicon-closecircle").bind("click.login", d.events.closeBanner);
        a("#loginBase input").bind("keydown.login", d.events.captureFieldEntry);
        if (!f.isIncompletePhone && f.isPhoneNumberChecked) {
          d.helpers.showPanel(
            "#login-with-complete-phone-number-account-panel",
          );
          var j = a("#errorCode").val();
          var k = a("#errorCodeWithDescription").val();
          if (a("#online-general-error > p").text().length > 0) {
            if (j == "10001") {
              d.helpers.tryOfflineLogin(j, a("#email").val().toLowerCase());
            } else {
              d.helpers.removeOrAddError("add");
              a("#online-general-error").addClass("otkform-group-haserror");
              d.helpers.removeKeyedData(f.phoneNumber.toLowerCase());
              if (j == "10004") {
                window.authenticationJsHelper.onSendTelemetry(5);
              } else {
                if (
                  j == "10003" &&
                  k != "" &&
                  window.authenticationJsHelper.supportErrorDescription
                ) {
                  window.authenticationJsHelper.onAuthenticationError(k, "");
                } else {
                  window.authenticationJsHelper.onAuthenticationError(j, "");
                }
              }
              if (j == "10002" || j == "10005") {
                if (d.helpers.isRecaptchaShown()) {
                  window.authenticationJsHelper.onSendTelemetry(4);
                }
                a("#password").val("").focus();
              }
            }
          } else {
            if (j) {
              if (
                j == "10003" &&
                k != "" &&
                window.authenticationJsHelper.supportErrorDescription
              ) {
                window.authenticationJsHelper.onAuthenticationError(k, "");
              } else {
                window.authenticationJsHelper.onAuthenticationError(j, "");
              }
            }
          }
        } else {
          if (f.isPhoneNumberLogin) {
            d.helpers.showPanel("#login-with-phone-number-check-panel");
          } else {
            d.helpers.showPanel("#login-with-OriginId-or-Email-panel");
            var j = a("#errorCode").val();
            var k = a("#errorCodeWithDescription").val();
            if (a("#online-general-error > p").text().length > 0) {
              if (j == "10001") {
                d.helpers.tryOfflineLogin(j, a("#email").val().toLowerCase());
              } else {
                d.helpers.removeOrAddError("add");
                a("#online-general-error").addClass("otkform-group-haserror");
                d.helpers.removeKeyedData(a("#email").val().toLowerCase());
                if (j == "10004") {
                  window.authenticationJsHelper.onSendTelemetry(5);
                } else {
                  if (
                    j == "10003" &&
                    k != "" &&
                    window.authenticationJsHelper.supportErrorDescription
                  ) {
                    window.authenticationJsHelper.onAuthenticationError(k, "");
                  } else {
                    window.authenticationJsHelper.onAuthenticationError(j, "");
                  }
                }
                if (j == "10002") {
                  if (d.helpers.isRecaptchaShown()) {
                    window.authenticationJsHelper.onSendTelemetry(4);
                  }
                  a("#password").val("").focus();
                }
              }
            } else {
              if (j) {
                if (
                  j == "10003" &&
                  k != "" &&
                  window.authenticationJsHelper.supportErrorDescription
                ) {
                  window.authenticationJsHelper.onAuthenticationError(k, "");
                } else {
                  window.authenticationJsHelper.onAuthenticationError(j, "");
                }
              }
            }
          }
        }
        d.helpers.displayBannerBox();
        d.helpers.displayLoginValues();
        a(
          "#createNav, #forget-password, #login-with-phone-number, #forget-phone-number-account-password",
        ).mousedown(function (l) {
          l.preventDefault();
          if (l.which == 1) {
            window.location = a(this).attr("href");
          }
        });
      },
      events: {
        setCountryOptIn: function (h) {
          var i = String(a(this).val());
          a(this)
            .siblings(".otkselect-label")
            .text(a(this).find("option:selected").text());
          d.helpers.errorAddOrRemove(
            a("#form-error-missing-country"),
            "remove",
          );
          d.helpers.inputErrorAddOrRemove(
            a("#clientreg_country-selctrl").parents(".otkinput-grouped"),
            "remove",
          );
        },
        back: function (h) {
          h.preventDefault();
          a("#back-form").submit();
        },
        loginWithEmail: function (h) {
          h.preventDefault();
          a("#login-with-email-form").submit();
        },
        loginWithPhoneNumber: function (h) {
          h.preventDefault();
          a("#login-with-phone-number-form").submit();
        },
        loginWithCompletePhoneNumberAccount: function (h) {
          h.preventDefault();
          a("#check-phone-number-form").submit();
        },
        clearPhoneNumberError: function (h) {
          d.helpers.errorAddOrRemove(
            a("#form-error-invalid-phoneNumber"),
            "remove",
          );
          d.helpers.inputErrorAddOrRemove(
            a("#phoneNumber").parents(".otkinput-grouped"),
            "remove",
          );
        },
        toggleShowPassword: function (i) {
          i.preventDefault();
          var h = a(this).siblings("#password");
          if (h.attr("type") === "text") {
            h.prop("type", "password");
            h.siblings("span").text(a("#form-password-show-text").text());
          } else {
            h.prop("type", "text");
            h.siblings("span").text(a("#form-password-hide-text").text());
          }
        },
        toggleShowPhoneNumberPassword: function (i) {
          i.preventDefault();
          var h = a(this).siblings("#phoneNumberLoginPassword");
          if (h.attr("type") === "text") {
            h.prop("type", "password");
            h.siblings("span").text(a("#form-password-show-text").text());
          } else {
            h.prop("type", "text");
            h.siblings("span").text(a("#form-password-hide-text").text());
          }
        },
        resetPassword: function (h) {
          h.preventDefault();
          if (!window.opener) {
            if (top == self) {
              window.location = a(this).attr("href");
            } else {
              window.open(a(this).attr("href"), "_parent");
            }
          } else {
            window.location = a(this).attr("href");
          }
        },
        resetLoginBtn: function (h) {
          if (h.target.id === "recaptcha_response_field") {
            a("#captcha-container p").removeClass("otkform-group-haserror");
            a("#recaptcha_response_field").removeClass(
              "otkform-group-haserror",
            );
          }
          if (f.source == "WEB" && !d.helpers.validateEmail(a("#email"))) {
            d.helpers.showError(a("#email-invalid-text").text());
          }
          return true;
        },
        validateEmail: function (h) {
          h.preventDefault();
          if (f.source == "WEB") {
            if (!d.helpers.validateEmail(a("#email"))) {
              d.helpers.showError(a("#email-invalid-text").text());
            } else {
              d.helpers.removeOrAddError("remove");
              a("#online-general-error, #offline-auth-error").removeClass(
                "otkform-group-haserror",
              );
              a("#online-general-error .otkc").text("");
            }
          }
        },
        validatePhoneNumber: function () {
          var h = a("#phoneNumber");
          d.helpers.removeOrAddError("remove");
          d.helpers.toggleErrorMessage(a("#phone-number-errors p"), "remove");
          d.helpers.toggleErrorMessage(
            a("#phone-number-not-existed p"),
            "remove",
          );
          if (d.helpers.validateIsEmpty(h)) {
            return false;
          }
          if (!f.regEXPhoneNumber.test(h.val())) {
            d.helpers.toggleErrorMessage(a("#phone-number-errors p"), "add");
            d.helpers.removeOrAddError("add");
            return false;
          }
          d.helpers.validatePhoneNumber(h);
        },
        validateLogin: function (j) {
          if (f.isPhoneNumberChecked) {
            d.events.validatePhoneNumberLogin(j);
          } else {
            j.preventDefault();
            d.helpers.removeOrAddError("remove");
            a("#online-general-error, #offline-auth-error").removeClass(
              "otkform-group-haserror",
            );
            var i = a("#email");
            var h = a("#password");
            if (d.helpers.validateIsEmpty(i) || d.helpers.validateIsEmpty(h)) {
              d.helpers.showError(a("#email-password-empty-text").text());
              return false;
            }
            if (f.source == "WEB" && !d.helpers.validateEmail(i)) {
              d.helpers.showError(a("#email-invalid-text").text());
              return false;
            }
            if (f.gCaptchaEnabled) {
              if (d.helpers.validateIsEmpty(a("#g-recaptcha-response"))) {
                a("#form-error-google-recaptcha-missing").addClass(
                  "otkform-group-haserror",
                );
                return false;
              } else {
                a("#form-error-google-recaptcha-missing").removeClass(
                  "otkform-group-haserror",
                );
                a("#googleCaptchaResponse").val(
                  a("#g-recaptcha-response").val(),
                );
                a(".g-recaptcha").remove();
              }
            }
            if (window.authenticationJsHelper.online) {
              d.helpers.loginOnline(i.val().toLowerCase(), h.val());
            } else {
              d.helpers.loginOffline(i.val().toLowerCase(), h.val());
            }
          }
        },
        validatePhoneNumberLogin: function (i) {
          i.preventDefault();
          d.helpers.removeOrAddError("remove");
          a("#online-general-error, #offline-auth-error").removeClass(
            "otkform-group-haserror",
          );
          var h = a("#password");
          if (d.helpers.validateIsEmpty(h)) {
            d.helpers.showError(a("#email-password-empty-text").text());
            return false;
          }
          if (window.authenticationJsHelper.online) {
            d.helpers.phoneNumberLoginOnline(h.val());
          } else {
          }
        },
        resetRegionCode: function () {
          var h = a("#regionCode");
          var i = a("#phoneNumber");
          var j = d.helpers.unicodeSubString(
            h.find("option:selected").text(),
            40,
          );
          if (h.val() === "0") {
            h.siblings(".otkselect-selected").text("");
            h.siblings(".otkselect-placeholder").text("(+)");
          } else {
            if (h.val() === "IO") {
              h.siblings(".otkselect-selected").text("(+246)");
              h.siblings(".otkselect-placeholder").text("");
            } else {
              if (h.val() === "GS") {
                h.siblings(".otkselect-selected").text("(+500)");
                h.siblings(".otkselect-placeholder").text("");
              } else {
                if (h.val() === "UM") {
                  h.siblings(".otkselect-selected").text("(+1)");
                  h.siblings(".otkselect-placeholder").text("");
                } else {
                  j = j.match(/\(\+[0-9]+\)/g);
                  h.siblings(".otkselect-selected").text(j);
                  h.siblings(".otkselect-placeholder").text("");
                }
              }
            }
          }
        },
        validateIsNumber: function (h) {
          if (
            !(h.keyCode == 46) &&
            !(h.keyCode == 8) &&
            !(h.keyCode == 37) &&
            !(h.keyCode == 39)
          ) {
            if (
              !(
                (h.keyCode >= 48 && h.keyCode <= 57) ||
                (h.keyCode >= 96 && h.keyCode <= 105)
              )
            ) {
              h.preventDefault();
            }
          }
        },
        submitPhoneInfo: function (h) {
          h.preventDefault();
          a("#check-phone-number-form").submit();
        },
        cancelTFA: function (h) {
          h.preventDefault();
          a(".login-container").removeClass("field-error");
          a("#_eventId").val("cancel");
          a("#login-form").submit();
        },
        captureFieldEntry: function (h) {
          if (h.which == 13) {
            h.preventDefault();
            a("#logInBtn").click();
          }
        },
      },
      helpers: {
        showPanel: function (h) {
          a("#reg-form > div").css("display", "none");
          switch (h) {
            case "#login-with-OriginId-or-Email-panel":
              d.helpers.resetLoginWithOriginIdOrEmailPanel();
              break;
            case "#login-with-phone-number-check-panel":
              d.helpers.resetLoginWithPhoneNumberCheckPanel();
              break;
            case "#login-with-complete-phone-number-account-panel":
              d.helpers.resetLoginWithCompletePhoneNumberAccountPanel();
              break;
          }
          a("#createBase").scrollTop(0);
        },
        resetLoginWithOriginIdOrEmailPanel: function () {
          a("#back").hide();
          a("#login-with-OriginId-or-Email-panel").css("display", "block");
          a("#login-with-phone-number-check-panel").css("display", "none");
          a("#loginWithOriginIDTitle").css("display", "block");
          a("#loginWithCompletePhoneNumberAccountTitle").css("display", "none");
        },
        resetLoginWithCompletePhoneNumberAccountPanel: function () {
          a("#back").show();
          a("#login-with-OriginId-or-Email-panel").css("display", "block");
          a("#login-with-phone-number-check-panel").css("display", "none");
          a("#loginWithCompletePhoneNumberAccountTitle").css(
            "display",
            "block",
          );
          a("#loginWithOriginIDTitle").css("display", "none");
          a;
        },
        resetLoginWithPhoneNumberCheckPanel: function () {
          var h = a("#back");
          h.show();
          a("#login-with-OriginId-or-Email-panel").css("display", "none");
          a("#login-with-phone-number-check-panel").css("display", "block");
        },
        initDefaultCountry: function () {
          var i = f.selectedCountry;
          if (i == "") {
            i = f.ipCountry;
          }
          if (i != "") {
            var h = a("#regionCode");
            h.find("option").each(function () {
              if (a(this).attr("value") === i) {
                h.val(i);
                a(this).attr("selected", "selected");
                return false;
              }
            });
            h.siblings(".otkselect-label").text(
              h.find("option:selected").text(),
            );
          }
        },
        unicodeSubString: function (j, h) {
          var i = document.documentElement.lang;
          if ("ru" === i || "th" === i) {
            h *= 1.7;
          }
          if (j.replace(/[^\x00-\xff]/g, "00").length <= h) {
            return j;
          }
          while (j.replace(/[^\x00-\xff]/g, "00").length > h) {
            j = j.substring(0, j.length - 2);
          }
          return j + "...";
        },
        errorAddOrRemove: function (i, h) {
          if (h === "add") {
            i.addClass("otkinput-errormsg");
            i.show();
          } else {
            i.removeClass("otkinput-errormsg");
            i.hide();
          }
        },
        toggleErrorMessage: function (i, h) {
          if (h === "add") {
            i.addClass("otkform-group-haserror");
          } else {
            i.removeClass("otkform-group-haserror");
          }
        },
        inputErrorAddOrRemove: function (i, h) {
          if (h === "add") {
            i.addClass("otkinput-iserror");
          } else {
            i.removeClass("otkinput-iserror");
          }
        },
        showError: function (h) {
          d.helpers.removeOrAddError("add");
          a("#online-general-error .otkc").text(h);
          a("#online-general-error").addClass("otkform-group-haserror");
        },
        clearSeverError: function () {
          a(".otkform-group-haserror").css("display", "none");
        },
        validateEmail: function (h) {
          if (!f.regExEmail.test(a(h).val().trim().toLowerCase())) {
            return false;
          } else {
            return true;
          }
        },
        validateIsEmpty: function (h) {
          if (a(h).attr("type") == "checkbox") {
            if (!a(h).is(":checked")) {
              a(h).removeClass("checked");
              return true;
            } else {
              a(h).addClass("checked");
              return false;
            }
          }
          if (a(h).val() == "") {
            return true;
          } else {
            return false;
          }
        },
        removeOrAddError: function (h) {
          if (h === "remove") {
            a(".otkinput-grouped").removeClass("otkinput-iserror");
          } else {
            a(".otkinput-grouped").addClass("otkinput-iserror");
          }
        },
        validatePhoneNumber: function (h) {
          var i = function (l, k, j) {
            if (
              l.status === true ||
              l.message == "register_phone_number_not_existed"
            ) {
              d.helpers.toggleErrorMessage(
                a("#phone-number-not-existed p"),
                "add",
              );
              d.helpers.removeOrAddError("add");
              f.isPhoneNumberValidate = false;
            } else {
              f.isPhoneNumberValidate = true;
            }
          };
          d.helpers.callService(
            "/user/checkPhoneNumberExisted",
            { success: i },
            {
              phoneNumber: a("#phoneNumber").val(),
              regionCode: a("#regionCode").val(),
            },
          );
        },
        callService: function (j, h, k) {
          var i = f.contextPath + "/ajax";
          $hr = a.ajax(
            a.extend(h, {
              url: i + j,
              dataType: "json",
              timeout: 3000,
              cache: false,
              data: a.extend({ requestorId: "portal" }, k),
              error: function (l, n, m) {
                a("#regViews").css("display", "none");
                a("#panel-connection-error").css("display", "block");
              },
            }),
          );
        },
        validateResetPasswordRequest: function (i) {
          i.preventDefault();
          var j = a("#regionCode");
          if (a(j).val() == "0") {
            d.helpers.inputErrorAddOrRemove(
              a("#clientreg_country-selctrl").parents(".otkinput-grouped"),
              "add",
            );
            d.helpers.errorAddOrRemove(a("#form-error-missing-country"), "add");
            return;
          }
          var h = a("#phoneNumber");
          d.helpers.validatePhoneNumber(h);
          if (a(h).val() == "" || f.isPhoneNumberValidate == false) {
            d.helpers.inputErrorAddOrRemove(
              a("#phoneNumber").parents(".otkinput-grouped"),
              "add",
            );
            d.helpers.errorAddOrRemove(
              a("#form-error-invalid-phoneNumber"),
              "add",
            );
            return;
          }
          if (f.isPhoneNumberValidate) {
            d.events.loginWithCompletePhoneNumberAccount(i);
          }
        },
        loginOnline: function (j, h) {
          var i = this.getCredentialsKey(j, h);
          this.storeKeyedData(j, i);
          var k = this.storeCidData(i, this.randomString());
          this.storeOtherLoginValue();
          a("#cid").val(k);
          a("#showAgeUp").val(window.authenticationJsHelper.showAgeUpFlow);
          a("#login-form").submit();
        },
        phoneNumberLoginOnline: function (h) {
          var i = this.getCredentialsKey(f.phoneNumber, h);
          this.storeKeyedData(f.phoneNumber, i);
          var j = this.storeCidData(i, this.randomString());
          this.storeOtherLoginValue();
          a("#cid").val(j);
          a("#showAgeUp").val(window.authenticationJsHelper.showAgeUpFlow);
          a("#login-form").submit();
        },
        loginOffline: function (h, i) {
          console.log("begin loginOffline");
          var j = this.getLocalStorageItem(h);
          console.log("offline old key: " + j + " with user:" + h);
          if (j) {
            var k = this.getCredentialsKey(h, i);
            console.log("offline new key: " + k);
            var l = this.loadCidData(k);
            console.log("login offline cid: " + l);
            if (l) {
              this.setLocalStorageItem("offlineLoginDisplay", h);
              window.authenticationJsHelper.onOfflineLoginSuccess(l);
            } else {
              a("#password").val("");
              d.helpers.removeOrAddError(a("#offline-auth-error"), "add");
              this.removeLocalStorageItem("offlineLoginDisplay");
              window.authenticationJsHelper.onAuthenticationError("10002", "");
            }
          } else {
            a("#password").val("");
            d.helpers.removeOrAddError("add");
            a("#offline-general-error").addClass("otkform-group-haserror");
            this.removeLocalStorageItem("offlineLoginDisplay");
            window.authenticationJsHelper.onAuthenticationError("10002", "");
          }
        },
        storeOtherLoginValue: function () {
          this.setLocalStorageItem(
            "loginInvisible",
            a("#loginInvisible").attr("checked"),
          );
        },
        tryAutoLogin: function (h) {
          console.log("try auto login: " + h);
          a(".form-container").hide();
          var i = this.getLocalStorageItem(h);
          if (i) {
            console.log("autologin key: " + i);
            a("#login-form").submit();
          } else {
            a(".form-container").show();
          }
        },
        tryOfflineLogin: function (l, j) {
          console.log("try offline login!");
          var k = this.getLocalStorageItem(j);
          if (k) {
            var h = this.getLocalStorageItem(k);
            if (h) {
              var i = h.split(",");
              if (i[1] != "") {
                if (
                  l == "10003" &&
                  errorCodeWithDescription != "" &&
                  window.authenticationJsHelper.supportErrorDescription
                ) {
                  window.authenticationJsHelper.onAuthenticationError(
                    errorCodeWithDescription,
                    h,
                  );
                } else {
                  window.authenticationJsHelper.onAuthenticationError(l, h);
                }
              } else {
                a("#online-general-error").removeClass("general-error");
                a("#online-general-error").addClass("red-box-error");
                a(".login-container").addClass("field-error");
                d.helpers.removeKeyedData(a("#email").val().toLowerCase());
              }
            }
          }
        },
        randomString: function () {
          var l =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
          var h = 32;
          var j = "";
          for (var k = 0; k < h; k++) {
            var m = Math.floor(Math.random() * l.length);
            j += l.substring(m, m + 1);
          }
          return j;
        },
        removeKeyedData: function (i) {
          var h = this.getLocalStorageItem(i);
          if (h) {
            this.removeLocalStorageItem(h);
            var j = this.getLocalStorageItem("oldKey");
            if (j) {
              this.setLocalStorageItem(i, j);
              this.removeLocalStorageItem("oldKey");
            } else {
              this.removeLocalStorageItem(i);
            }
            this.removeLocalStorageItem("latestSuccessLogin");
            this.removeLocalStorageItem("offlineLoginDisplay");
          }
        },
        storeKeyedData: function (h, j) {
          if (h) {
            var i = this.getLocalStorageItem(h);
            if (i) {
              if (i == j) {
                this.setLocalStorageItem("latestSuccessLogin", h);
              } else {
                this.setLocalStorageItem("latestSuccessLogin", null);
                this.setLocalStorageItem("oldKey", i);
              }
            } else {
              this.setLocalStorageItem("latestSuccessLogin", null);
            }
            this.setLocalStorageItem(h, j);
            this.setLocalStorageItem("offlineLoginDisplay", h);
          }
        },
        storeCidData: function (k, j) {
          var m = "";
          var i = this.getLocalStorageItem(k);
          var h = new Array(String);
          var l = new Array(String);
          if (i) {
            l = i.split(",");
            if (l[1] == "") {
              h[0] = l[0];
            } else {
              h[0] = l[1];
            }
            h[1] = j;
            m = h[0] + "," + h[1];
          } else {
            h[0] = j;
            h[1] = "";
            m = h[0];
          }
          this.setLocalStorageItem(k, h.join(","));
          return m;
        },
        loadCidData: function (j) {
          var k = "";
          if (j) {
            var h = this.getLocalStorageItem(j);
            if (h) {
              var i = h.split(",");
              if (i[1] != "") {
                k = i[0] + "," + i[1];
              } else {
                k = i[0];
              }
            }
          }
          return k;
        },
        getCredentialsKey: function (m, j) {
          var l = "";
          var i = this.getNormalizedKey(m);
          var h = this.getNormalizedKey(j);
          if (i && h) {
            var k = new jsSHA(
              i + h + window.authenticationJsHelper.currentEnvironment,
              "ASCII",
            );
            l = k.getHash("SHA-512", "HEX");
          }
          return l;
        },
        displayBannerBox: function () {
          var h = a("#bannerType").val();
          var i = a("#bannerText").val();
          if (h && i) {
            if (h == "error") {
              a("#originXBannerBox")
                .addClass("otknotice-error")
                .find("strong")
                .text(i);
            } else {
              if (h == "info") {
                a("#originXBannerBox")
                  .addClass("otknotice-passive")
                  .find("strong")
                  .text(i);
              } else {
                if (h == "caution") {
                  a("#originXBannerBox")
                    .addClass("otknotice-warning")
                    .find("strong")
                    .text(i);
                } else {
                  a("#originXBannerBox").hide();
                }
              }
            }
          } else {
            a("#originXBannerBox").hide();
          }
        },
        displayLoginValues: function () {
          var h = this.getLocalStorageItem("loginInvisible");
          if (h == "checked") {
            a("#loginInvisible").prop("checked", true);
          }
        },
        setLocalStorageItem: function (h, i) {
          localStorage.setItem(this.getNormalizedKey(h), i);
        },
        getLocalStorageItem: function (h) {
          return localStorage.getItem(this.getNormalizedKey(h));
        },
        removeLocalStorageItem: function (h) {
          localStorage.removeItem(this.getNormalizedKey(h));
        },
        getNormalizedKey: function (h) {
          return a.trim(h);
        },
        isRecaptchaShown: function () {
          var h = a("#captcha-container").html();
          h = h.replace(/[\r\n]/g, "").replace(/[ ]/g, "");
          return h != "";
        },
      },
    };
    var c = ["init"];
    if (typeof e === "object" || !e) {
      originWrapper.wrapWithWebChannel().then(d.init);
    } else {
      if (a.inArray(e, c)) {
      }
    }
  };
})(jQuery);
