webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Rate.jsx":
/*!*****************************!*\
  !*** ./components/Rate.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rate; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Rate.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;



var Rate =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Rate, _Component);

  function Rate() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Rate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Rate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      bpi: ""
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Rate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // console.log(this.props.currency);
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://api.coindesk.com/v1/bpi/currentprice/".concat(this.props.currency, ".json")).then(function (result) {
        var time = result.data.time;
        var d = new Date();
        console.log(time.updated);
        console.log(d); // console.log(countries);

        var secondKey = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(result.data.bpi)[1]; //fetched the key at second index


        if (result.data.bpi[secondKey]) {
          var currencyName = result.data.bpi[secondKey].code;
          var eachRate = result.data.bpi[secondKey].rate;

          _this2.setState({
            bpi: eachRate
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1580686372" + " " + "container text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1580686372" + " " + "mt-5 mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(Typed, {
        strings: ["Hello, I'm an app"],
        typeSpeed: 40,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), __jsx("br", {
        className: "jsx-1580686372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("h4", {
        className: "jsx-1580686372" + " " + "mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(Typed, {
        strings: ["I've got bitcoin rates for over 150 countries worldwide"],
        typeSpeed: 30,
        startDelay: 2500,
        cursorChar: '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), __jsx("br", {
        className: "jsx-1580686372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("h4", {
        className: "jsx-1580686372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(Typed, {
        strings: ["Click on any of the currencies on the left to get their latest bitcoin rates"],
        typeSpeed: 10,
        startDelay: 6000,
        cursorChar: '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1580686372" + " " + "bottom float-bottom ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-1580686372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "With love from ", __jsx("a", {
        target: "_blank",
        href: "https://github.com/adedaniel",
        className: "jsx-1580686372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "adedaniel")), __jsx("p", {
        className: "jsx-1580686372" + " " + "m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Wanna reach out?"), __jsx("a", {
        target: "_blank",
        href: "https://twitter.com/ijebu_developer",
        className: "jsx-1580686372" + " " + "text-decoration-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("i", {
        "aria-hidden": "true",
        className: "jsx-1580686372" + " " + "fa icon blue fa-twitter-square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), "\xA0\xA0"), __jsx("a", {
        target: "_blank",
        href: "tel:+2348104172477",
        className: "jsx-1580686372" + " " + "text-decoration-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("i", {
        "aria-hidden": "true",
        className: "jsx-1580686372" + " " + "fa text-secondary icon fa-phone-square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), "\xA0\xA0"), __jsx("a", {
        target: "_blank",
        href: "mailto:adetoladaniel693@gmail.com",
        className: "jsx-1580686372" + " " + "text-decoration-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("i", {
        "aria-hidden": "true",
        className: "jsx-1580686372" + " " + "fa text-danger icon fa-envelope-square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), __jsx("br", {
        className: "jsx-1580686372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), __jsx("small", {
        className: "jsx-1580686372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "API from ", __jsx("a", {
        target: "_blank",
        href: "https://www.coindesk.com/",
        className: "jsx-1580686372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Coindesk")), __jsx("br", {
        className: "jsx-1580686372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), __jsx("small", {
        className: "jsx-1580686372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Theme from ", __jsx("a", {
        target: "_blank",
        href: "https://bootswatch.com/",
        className: "jsx-1580686372",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Bootswatch"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1580686372",
        __self: this
      }, ".bottom.jsx-1580686372{position:absolute;bottom:0;width:67vw;}.blue.jsx-1580686372{color:#17a2b8;}.icon.jsx-1580686372{font-size:50px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxjb21wb25lbnRzXFxSYXRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRlEsQUFHOEIsQUFNdkIsQUFJK0IsY0FKOUIsSUFMYSxRQVliLENBVkQsV0FBQyIsImZpbGUiOiJDOlxcVXNlcnNcXERhbmllbFxcRGVza3RvcFxcYml0Y29pbi1wcmljZVxcY29tcG9uZW50c1xcUmF0ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5jb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmN1cnJlbmN5KTtcclxuXHJcblxyXG4gIEF4aW9zLmdldChcclxuICAgICAgICAgIGBodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2N1cnJlbnRwcmljZS8ke3RoaXMucHJvcHMuY3VycmVuY3l9Lmpzb25gXHJcbiAgICAgICAgKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGxldCB0aW1lPXJlc3VsdC5kYXRhLnRpbWU7XHJcbiAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aW1lLnVwZGF0ZWQpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZCk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudHJpZXMpO1xyXG5cclxuXHJcbiAgICAgICAgICB2YXIgc2Vjb25kS2V5ID0gT2JqZWN0LmtleXMocmVzdWx0LmRhdGEuYnBpKVsxXTsgLy9mZXRjaGVkIHRoZSBrZXkgYXQgc2Vjb25kIGluZGV4XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmRhdGEuYnBpW3NlY29uZEtleV0pIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbmN5TmFtZSA9IHJlc3VsdC5kYXRhLmJwaVtzZWNvbmRLZXldLmNvZGU7XHJcbiAgICAgICAgICAgIGxldCBlYWNoUmF0ZSA9IHJlc3VsdC5kYXRhLmJwaVtzZWNvbmRLZXldLnJhdGU7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJwaTogZWFjaFJhdGUgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuc3RhdGU9e1xyXG4gIGJwaTogXCJcIlxyXG59XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC01IG1iLTNcIj5cclxuICAgICAgIDxUeXBlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdzPXtbXCJIZWxsbywgSSdtIGFuIGFwcFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXs0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgPC9oMT5cclxuICAgICAgIDxici8+XHJcbiAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgPFR5cGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ3M9e1tcIkkndmUgZ290IGJpdGNvaW4gcmF0ZXMgZm9yIG92ZXIgMTUwIGNvdW50cmllcyB3b3JsZHdpZGVcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVTcGVlZD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGVsYXk9IHsyNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3JDaGFyPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgPC9oND5cclxuICAgICAgIDxici8+XHJcbiAgICAgICBcclxuICAgICAgIDxoND5cclxuICAgICAgIDxUeXBlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdzPXtbXCJDbGljayBvbiBhbnkgb2YgdGhlIGN1cnJlbmNpZXMgb24gdGhlIGxlZnQgdG8gZ2V0IHRoZWlyIGxhdGVzdCBiaXRjb2luIHJhdGVzXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlU3BlZWQ9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERlbGF5PSB7NjAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yQ2hhcj17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgIDwvaDQ+XHJcbiAgICAgICBcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tIGZsb2F0LWJvdHRvbSBcIj5cclxuICAgICAgIDxoNj5cclxuICAgICAgIFxyXG4gICAgICAgV2l0aCBsb3ZlIGZyb20gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hZGVkYW5pZWxcIj5hZGVkYW5pZWw8L2E+XHJcbiAgICAgICA8L2g2PlxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMFwiPldhbm5hIHJlYWNoIG91dD88L3A+XHJcbiAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pamVidV9kZXZlbG9wZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZVwiPlxyXG4gICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgaWNvbiBibHVlIGZhLXR3aXR0ZXItc3F1YXJlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgPC9hPlxyXG4gICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwidGVsOisyMzQ4MTA0MTcyNDc3XCI+XHJcbiAgICAgICA8aSBjbGFzc05hbWU9XCJmYSB0ZXh0LXNlY29uZGFyeSBpY29uIGZhLXBob25lLXNxdWFyZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4mbmJzcDsmbmJzcDtcclxuICAgICAgIDwvYT5cclxuICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lXCIgaHJlZj1cIm1haWx0bzphZGV0b2xhZGFuaWVsNjkzQGdtYWlsLmNvbVwiPlxyXG4gICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgdGV4dC1kYW5nZXIgaWNvbiBmYS1lbnZlbG9wZS1zcXVhcmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICA8L2E+XHJcbiAgICAgICA8YnIvPlxyXG4gICAgICAgPHNtYWxsPkFQSSBmcm9tIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5jb2luZGVzay5jb20vXCI+Q29pbmRlc2s8L2E+PC9zbWFsbD5cclxuICAgICAgIDxici8+XHJcbiAgICAgICA8c21hbGw+VGhlbWUgZnJvbSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS9cIj5Cb290c3dhdGNoPC9hPjwvc21hbGw+XHJcbiAgICAgICBcclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgIHtgXHJcbiAgICAgICAuYm90dG9te1xyXG4gICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgd2lkdGg6IDY3dndcclxuICAgICAgIH1cclxuICAgICAgIC5ibHVle1xyXG4gICAgICAgICAgIGNvbG9yOiAgIzE3YTJiOFxyXG4gICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAuaWNvbntcclxuICAgICAgIFxyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBgfVxyXG4gICAgICAgPC9zdHlsZT5cclxuICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRhYi1wYW5lIGZhZGUgJHt0aGlzLnByb3BzLnNob3dBY3RpdmV9YH1cclxuICAgICAgICAgICAgICAgIGlkPXtgdi1waWxscy0ke3RoaXMucHJvcHMuY3VycmVuY3l9YH1cclxuICAgICAgICAgICAgICAgIHJvbGU9J3RhYnBhbmVsJ1xyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgdi1waWxscy0ke3RoaXMucHJvcHMuY3VycmVuY3l9LXRhYmB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJwaX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Rate.jsx */")), __jsx("div", {
        className: "tab-pane fade ".concat(this.props.showActive),
        id: "v-pills-".concat(this.props.currency),
        role: "tabpanel",
        "aria-labelledby": "v-pills-".concat(this.props.currency, "-tab"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, this.state.bpi), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }));
    }
  }]);

  return Rate;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.d509ced9949f8de1da8e.hot-update.js.map