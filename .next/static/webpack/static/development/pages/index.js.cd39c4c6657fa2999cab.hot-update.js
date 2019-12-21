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
      bpi: "",
      date: "",
      currency: ""
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Rate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // console.log(this.props.currency);
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://api.coindesk.com/v1/bpi/currentprice/".concat(this.props.currency, ".json")).then(function (result) {
        // let time=result.data.time;
        var d = new Date().toString(); // console.log(time.updated);

        _this2.setState({
          date: d
        }); // console.log(countries);


        var secondKey = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(result.data.bpi)[1]; //fetched the key at second index


        if (result.data.bpi[secondKey]) {
          var currencyName = result.data.bpi[secondKey].code;
          console.log(currencyName);

          _this2.setState({
            currency: currencyName
          });

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
          lineNumber: 43
        },
        __self: this
      }, __jsx("div", {
        className: "tab-pane fade ".concat(this.props.showActive),
        id: "v-pills-".concat(this.props.currency),
        role: "tabpanel",
        "aria-labelledby": "v-pills-".concat(this.props.currency, "-tab"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4193982630" + " " + "container text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-4193982630",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "1 Bitcoin"), __jsx("h4", {
        className: "jsx-4193982630",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "is equivalent to"), __jsx("h1", {
        className: "jsx-4193982630" + " " + "mt-5 mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, this.state.bpi, "  ", this.state.currency), __jsx("br", {
        className: "jsx-4193982630",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx("h4", {
        className: "jsx-4193982630" + " " + "mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "as at ", this.state.date), __jsx("br", {
        className: "jsx-4193982630",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-4193982630" + " " + "bottom float-bottom ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("h6", {
        className: "jsx-4193982630",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "With love from ", __jsx("a", {
        target: "_blank",
        href: "https://github.com/adedaniel",
        className: "jsx-4193982630",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "adedaniel"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "4193982630",
        __self: this
      }, ".bottom.jsx-4193982630{position:absolute;bottom:0;width:67vw;}.blue.jsx-4193982630{color:#17a2b8;}.icon.jsx-4193982630{font-size:50px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxjb21wb25lbnRzXFxSYXRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRWUsQUFHcUMsQUFNdkIsQUFJK0IsY0FKOUIsSUFMYSxRQVliLENBVkQsV0FBQyIsImZpbGUiOiJDOlxcVXNlcnNcXERhbmllbFxcRGVza3RvcFxcYml0Y29pbi1wcmljZVxcY29tcG9uZW50c1xcUmF0ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5jb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmN1cnJlbmN5KTtcclxuXHJcblxyXG4gIEF4aW9zLmdldChcclxuICAgICAgICAgIGBodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2N1cnJlbnRwcmljZS8ke3RoaXMucHJvcHMuY3VycmVuY3l9Lmpzb25gXHJcbiAgICAgICAgKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIC8vIGxldCB0aW1lPXJlc3VsdC5kYXRhLnRpbWU7XHJcbiAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRpbWUudXBkYXRlZCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZTogZCB9KTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50cmllcyk7XHJcblxyXG5cclxuICAgICAgICAgIHZhciBzZWNvbmRLZXkgPSBPYmplY3Qua2V5cyhyZXN1bHQuZGF0YS5icGkpWzFdOyAvL2ZldGNoZWQgdGhlIGtleSBhdCBzZWNvbmQgaW5kZXhcclxuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5icGlbc2Vjb25kS2V5XSkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVuY3lOYW1lID0gcmVzdWx0LmRhdGEuYnBpW3NlY29uZEtleV0uY29kZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVuY3lOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbmN5OiBjdXJyZW5jeU5hbWV9KTtcclxuICAgICAgICAgICAgbGV0IGVhY2hSYXRlID0gcmVzdWx0LmRhdGEuYnBpW3NlY29uZEtleV0ucmF0ZTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnBpOiBlYWNoUmF0ZSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5zdGF0ZT17XHJcbiAgYnBpOiBcIlwiLFxyXG4gIGRhdGU6IFwiXCIsXHJcbiAgY3VycmVuY3k6IFwiXCJcclxufVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgXHJcbiAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0YWItcGFuZSBmYWRlICR7dGhpcy5wcm9wcy5zaG93QWN0aXZlfWB9XHJcbiAgICAgICAgICAgICAgICBpZD17YHYtcGlsbHMtJHt0aGlzLnByb3BzLmN1cnJlbmN5fWB9XHJcbiAgICAgICAgICAgICAgICByb2xlPSd0YWJwYW5lbCdcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17YHYtcGlsbHMtJHt0aGlzLnByb3BzLmN1cnJlbmN5fS10YWJgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAxIEJpdGNvaW4gXHJcbiAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIGlzIGVxdWl2YWxlbnQgdG9cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTUgbWItM1wiPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJwaX0gIHt0aGlzLnN0YXRlLmN1cnJlbmN5fVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgYXMgYXQge3RoaXMuc3RhdGUuZGF0ZX1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20gZmxvYXQtYm90dG9tIFwiPlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBXaXRoIGxvdmUgZnJvbSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FkZWRhbmllbFwiPmFkZWRhbmllbDwvYT5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIC5ib3R0b217XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNjd2d1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYmx1ZXtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICAjMTdhMmI4XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Rate.jsx */"))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }));
    }
  }]);

  return Rate;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.cd39c4c6657fa2999cab.hot-update.js.map