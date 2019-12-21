module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Currencies.jsx":
/*!***********************************!*\
  !*** ./components/Currencies.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Currencies; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Currencies.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Currencies(props) {
  return __jsx("a", {
    key: props.currency,
    id: `v-pills-${props.currency}-tab`,
    "data-toggle": "pill",
    href: `#v-pills-${props.currency}`,
    role: "tab",
    "aria-controls": `v-pills-${props.currency}`,
    "aria-selected": "true",
    className: "jsx-3377382825" + " " + `nav-link pl-4 ${props.active}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.country, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3377382825",
    __self: this
  }, ".nav-link.active.jsx-3377382825{background-color:#17a2b8 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxjb21wb25lbnRzXFxDdXJyZW5jaWVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQlMsQUFHK0Msb0NBQ3RDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxjb21wb25lbnRzXFxDdXJyZW5jaWVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXJyZW5jaWVzKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGtleT17cHJvcHMuY3VycmVuY3l9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayBwbC00ICR7cHJvcHMuYWN0aXZlfWB9XHJcbiAgICAgICAgICAgICAgICAgIGlkPXtgdi1waWxscy0ke3Byb3BzLmN1cnJlbmN5fS10YWJgfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT0ncGlsbCdcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YCN2LXBpbGxzLSR7cHJvcHMuY3VycmVuY3l9YH1cclxuICAgICAgICAgICAgICAgICAgcm9sZT0ndGFiJ1xyXG4gICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtgdi1waWxscy0ke3Byb3BzLmN1cnJlbmN5fWB9XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9J3RydWUnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5jb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgLm5hdi1saW5rLmFjdGl2ZXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbmB9XHJcbjwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Currencies.jsx */"));
}

/***/ }),

/***/ "./components/Home.jsx":
/*!*****************************!*\
  !*** ./components/Home.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typed */ "react-typed");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Home.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Home(props) {
  return __jsx("div", {
    className: "jsx-2636199626" + " " + "container text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2636199626" + " " + "mt-5 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_typed__WEBPACK_IMPORTED_MODULE_2___default.a, {
    strings: ["Hi! I'm Beta"],
    typeSpeed: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx("br", {
    className: "jsx-2636199626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-2636199626" + " " + "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(react_typed__WEBPACK_IMPORTED_MODULE_2___default.a, {
    strings: ["I've got bitcoin rates for over 150 countries worldwide"],
    typeSpeed: 30,
    startDelay: 2500,
    cursorChar: '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("br", {
    className: "jsx-2636199626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-2636199626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(react_typed__WEBPACK_IMPORTED_MODULE_2___default.a, {
    strings: ["Click on any of the currencies on the left to get their latest bitcoin rates"],
    typeSpeed: 10,
    startDelay: 6000,
    cursorChar: '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2636199626" + " " + "bottom float-bottom ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h6", {
    className: "jsx-2636199626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "With love from ", __jsx("a", {
    target: "_blank",
    href: "https://github.com/adedaniel",
    className: "jsx-2636199626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "adedaniel")), __jsx("p", {
    className: "jsx-2636199626" + " " + "m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Wanna reach out?"), __jsx("a", {
    target: "_blank",
    href: "https://twitter.com/ijebu_developer",
    className: "jsx-2636199626" + " " + "text-decoration-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "jsx-2636199626" + " " + "fa icon blue fa-twitter-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), "\xA0\xA0"), __jsx("a", {
    target: "_blank",
    href: "tel:+2348104172477",
    className: "jsx-2636199626" + " " + "text-decoration-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "jsx-2636199626" + " " + "fa text-secondary icon fa-phone-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), "\xA0\xA0"), __jsx("a", {
    target: "_blank",
    href: "mailto:adetoladaniel693@gmail.com",
    className: "jsx-2636199626" + " " + "text-decoration-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "jsx-2636199626" + " " + "fa text-danger icon fa-envelope-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), __jsx("br", {
    className: "jsx-2636199626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("small", {
    className: "jsx-2636199626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "API from ", __jsx("a", {
    target: "_blank",
    href: "https://www.coindesk.com/",
    className: "jsx-2636199626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Coindesk")), __jsx("br", {
    className: "jsx-2636199626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("small", {
    className: "jsx-2636199626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Theme from ", __jsx("a", {
    target: "_blank",
    href: "https://bootswatch.com/",
    className: "jsx-2636199626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Bootswatch"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2636199626",
    __self: this
  }, ".bottom.jsx-2636199626{position:absolute;bottom:0;width:67vw;}.blue.jsx-2636199626{color:#17a2b8;}.icon.jsx-2636199626{font-size:50px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxjb21wb25lbnRzXFxIb21lLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5REMsQUFHdUIsQUFJSCxBQUlXLGNBSlYsSUFIUCxRQVViLENBVGUsV0FBQyIsImZpbGUiOiJDOlxcVXNlcnNcXERhbmllbFxcRGVza3RvcFxcYml0Y29pbi1wcmljZVxcY29tcG9uZW50c1xcSG9tZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cclxuPGgxIGNsYXNzTmFtZT1cIm10LTUgbWItM1wiPlxyXG48VHlwZWRcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmdzPXtbXCJIaSEgSSdtIEJldGFcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXs0MH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbjwvaDE+XHJcbjxici8+XHJcbjxoNCBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbjxUeXBlZFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3M9e1tcIkkndmUgZ290IGJpdGNvaW4gcmF0ZXMgZm9yIG92ZXIgMTUwIGNvdW50cmllcyB3b3JsZHdpZGVcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXszMH1cclxuICAgICAgICAgICAgICAgICAgICBzdGFydERlbGF5PSB7MjUwMH1cclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3JDaGFyPXsnJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbjwvaDQ+XHJcbjxici8+XHJcblxyXG48aDQ+XHJcbjxUeXBlZFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3M9e1tcIkNsaWNrIG9uIGFueSBvZiB0aGUgY3VycmVuY2llcyBvbiB0aGUgbGVmdCB0byBnZXQgdGhlaXIgbGF0ZXN0IGJpdGNvaW4gcmF0ZXNcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXsxMH1cclxuICAgICAgICAgICAgICAgICAgICBzdGFydERlbGF5PSB7NjAwMH1cclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3JDaGFyPXsnJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbjwvaDQ+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImJvdHRvbSBmbG9hdC1ib3R0b20gXCI+XHJcbjxoNj5cclxuXHJcbldpdGggbG92ZSBmcm9tIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWRlZGFuaWVsXCI+YWRlZGFuaWVsPC9hPlxyXG48L2g2PlxyXG5cclxuXHJcbjxwIGNsYXNzTmFtZT1cIm0tMFwiPldhbm5hIHJlYWNoIG91dD88L3A+XHJcbjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2lqZWJ1X2RldmVsb3BlclwiIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lXCI+XHJcbjxpIGNsYXNzTmFtZT1cImZhIGljb24gYmx1ZSBmYS10d2l0dGVyLXNxdWFyZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4mbmJzcDsmbmJzcDtcclxuPC9hPlxyXG48YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZVwiIGhyZWY9XCJ0ZWw6KzIzNDgxMDQxNzI0NzdcIj5cclxuPGkgY2xhc3NOYW1lPVwiZmEgdGV4dC1zZWNvbmRhcnkgaWNvbiBmYS1waG9uZS1zcXVhcmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jm5ic3A7Jm5ic3A7XHJcbjwvYT5cclxuPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwibWFpbHRvOmFkZXRvbGFkYW5pZWw2OTNAZ21haWwuY29tXCI+XHJcbjxpIGNsYXNzTmFtZT1cImZhIHRleHQtZGFuZ2VyIGljb24gZmEtZW52ZWxvcGUtc3F1YXJlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG48L2E+XHJcbjxici8+XHJcbjxzbWFsbD5BUEkgZnJvbSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuY29pbmRlc2suY29tL1wiPkNvaW5kZXNrPC9hPjwvc21hbGw+XHJcbjxici8+XHJcbjxzbWFsbD5UaGVtZSBmcm9tIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tL1wiPkJvb3Rzd2F0Y2g8L2E+PC9zbWFsbD5cclxuXHJcbjwvZGl2PlxyXG48c3R5bGUganN4PlxyXG57YFxyXG4uYm90dG9te1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDY3dndcclxufVxyXG4uYmx1ZXtcclxuICAgIGNvbG9yOiAgIzE3YTJiOFxyXG59XHJcblxyXG4uaWNvbntcclxuXHJcbiAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcclxuICAgIFxyXG5cclxufVxyXG5gfVxyXG48L3N0eWxlPlxyXG48L2Rpdj5cclxuXHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Home.jsx */"));
}

/***/ }),

/***/ "./components/Prices.jsx":
/*!*******************************!*\
  !*** ./components/Prices.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Currencies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Currencies */ "./components/Currencies.jsx");
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rate */ "./components/Rate.jsx");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home */ "./components/Home.jsx");

var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Prices.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 // import Axios from "axios";

class Prices extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setst", () => {
      this.setState({
        currency: "brp"
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setunst", () => {
      this.setState({
        currency: ""
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priceGetter", currency => {
      let val = "";
      return val;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priceReturner", () => {});
  }

  static async getInitialProps() {}

  componentDidMount() {
    "use strict"; // Minimum resizable area

    var minWidth = 60;
    var minHeight = 40; // Thresholds

    var FULLSCREEN_MARGINS = -10;
    var MARGINS = 4; // End of what's configurable.

    var clicked = null;
    var onRightEdge, onBottomEdge, onLeftEdge, onTopEdge;
    var rightScreenEdge, bottomScreenEdge;
    var preSnapped;
    var b, x, y;
    var redraw = false;
    var pane = document.getElementById('pane');
    var ghostpane = document.getElementById('ghostpane');

    function setBounds(element, x, y, w, h) {
      element.style.left = x + 'px';
      element.style.top = y + 'px';
      element.style.width = w + 'px';
      element.style.height = h + 'px';
    }

    function hintHide() {
      setBounds(ghostpane, b.left, b.top, b.width, b.height);
      ghostpane.style.opacity = 0; // var b = ghostpane.getBoundingClientRect();
      // ghostpane.style.top = b.top + b.height / 2;
      // ghostpane.style.left = b.left + b.width / 2;
      // ghostpane.style.width = 0;
      // ghostpane.style.height = 0;
    } // Mouse events


    pane.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp); // Touch events	
    // pane.addEventListener('touchstart', onTouchDown);
    // document.addEventListener('touchmove', onTouchMove);
    // document.addEventListener('touchend', onTouchEnd);
    // function onTouchDown(e) {
    //   onDown(e.touches[0]);
    //   if (e.cancelable) {
    //     e.preventDefault();
    //  }
    // }

    function onTouchMove(e) {
      onMove(e.touches[0]);
    }

    function onTouchEnd(e) {
      if (e.touches.length == 0) onUp(e.changedTouches[0]);
    }

    function onMouseDown(e) {
      onDown(e);
      e.preventDefault();
    }

    function onDown(e) {
      calc(e);
      var isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;
      clicked = {
        x: x,
        y: y,
        cx: e.clientX,
        cy: e.clientY,
        w: b.width,
        h: b.height,
        isResizing: isResizing,
        isMoving: !isResizing && canMove(),
        onTopEdge: onTopEdge,
        onLeftEdge: onLeftEdge,
        onRightEdge: onRightEdge,
        onBottomEdge: onBottomEdge
      };
    }

    function canMove() {
      return x > 0 && x < b.width && y > 0 && y < b.height && y < 30;
    }

    function calc(e) {
      b = pane.getBoundingClientRect();
      x = e.clientX - b.left;
      y = e.clientY - b.top;
      onTopEdge = y < MARGINS;
      onLeftEdge = x < MARGINS;
      onRightEdge = x >= b.width - MARGINS;
      onBottomEdge = y >= b.height - MARGINS;
      rightScreenEdge = window.innerWidth - MARGINS;
      bottomScreenEdge = window.innerHeight - MARGINS;
    }

    var e;

    function onMove(ee) {
      calc(ee);
      e = ee;
      redraw = true;
    }

    function animate() {
      requestAnimationFrame(animate);
      if (!redraw) return;
      redraw = false;

      if (clicked && clicked.isResizing) {
        if (clicked.onRightEdge) pane.style.width = Math.max(x, minWidth) + 'px'; // if (clicked.onBottomEdge) pane.style.height = Math.max(y, minHeight) + 'px';
        // if (clicked.onLeftEdge) {
        //   var currentWidth = Math.max(clicked.cx - e.clientX  + clicked.w, minWidth);
        //   if (currentWidth > minWidth) {
        //     pane.style.width = currentWidth + 'px';
        //     pane.style.left = e.clientX + 'px';	
        //   }
        // }
        // if (clicked.onTopEdge) {
        //   var currentHeight = Math.max(clicked.cy - e.clientY  + clicked.h, minHeight);
        //   if (currentHeight > minHeight) {
        //     pane.style.height = currentHeight + 'px';
        //     pane.style.top = e.clientY + 'px';	
        //   }
        // }

        hintHide();
        return;
      } //   if (clicked && clicked.isMoving) {
      //     if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS) {
      //       // hintFull();
      //       setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight);
      //       ghostpane.style.opacity = 0.2;
      //     } else if (b.top < MARGINS) {
      //       // hintTop();
      //       setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight / 2);
      //       ghostpane.style.opacity = 0.2;
      //     } else if (b.left < MARGINS) {
      //       // hintLeft();
      //       setBounds(ghostpane, 0, 0, window.innerWidth / 2, window.innerHeight);
      //       ghostpane.style.opacity = 0.2;
      //     } else if (b.right > rightScreenEdge) {
      //       // hintRight();
      //       setBounds(ghostpane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
      //       ghostpane.style.opacity = 0.2;
      //     } else if (b.bottom > bottomScreenEdge) {
      //       // hintBottom();
      //       setBounds(ghostpane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
      //       ghostpane.style.opacity = 0.2;
      //     } else {
      //       hintHide();
      //     }
      //     if (preSnapped) {
      //       setBounds(pane,
      //       	e.clientX - preSnapped.width / 2,
      //       	e.clientY - Math.min(clicked.y, preSnapped.height),
      //       	preSnapped.width,
      //       	preSnapped.height
      //       );
      //       return;
      //     }
      //     // moving
      //     pane.style.top = (e.clientY - clicked.y) + 'px';
      //     pane.style.left = (e.clientX - clicked.x) + 'px';
      //     return;
      //   }
      // This code executes when mouse moves without clicking
      // style cursor
      //   if (onRightEdge && onBottomEdge || onLeftEdge && onTopEdge) {
      //     pane.style.cursor = 'nwse-resize';
      //   }
      //    else if (onRightEdge && onTopEdge || onBottomEdge && onLeftEdge) {
      //     pane.style.cursor = 'nesw-resize';
      //   }


      if (onRightEdge || onLeftEdge) {
        pane.style.cursor = 'e-resize';
      } //   else if (onBottomEdge || onTopEdge) {
      //     pane.style.cursor = 'ns-resize';
      //   } 
      //   else if (canMove()) {
      //     pane.style.cursor = 'move';
      //   }
      else {
          pane.style.cursor = 'default';
        }
    }

    animate();

    function onUp(e) {
      calc(e);

      if (clicked && clicked.isMoving) {
        // Snap
        var snapped = {
          width: b.width,
          height: b.height
        };

        if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS) {
          // hintFull();
          setBounds(pane, 0, 0, window.innerWidth, window.innerHeight);
          preSnapped = snapped;
        } else if (b.top < MARGINS) {
          // hintTop();
          setBounds(pane, 0, 0, window.innerWidth, window.innerHeight / 2);
          preSnapped = snapped;
        } else if (b.left < MARGINS) {
          // hintLeft();
          setBounds(pane, 0, 0, window.innerWidth / 2, window.innerHeight);
          preSnapped = snapped;
        } else if (b.right > rightScreenEdge) {
          // hintRight();
          setBounds(pane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
          preSnapped = snapped;
        } else if (b.bottom > bottomScreenEdge) {
          // hintBottom();
          setBounds(pane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
          preSnapped = snapped;
        } else {
          preSnapped = null;
        }

        hintHide();
      }

      clicked = null;
    }
  }

  render() {
    let list = "";

    switch (this.state.currency) {
      case "usd":
        list = "usd";
        break;

      case "brp":
        list = "brp";
        break;

      default:
        list = "unset";
        break;
    } // console.log(this.props.bpi);


    return __jsx("div", {
      className: "jsx-2935276130",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2935276130" + " " + 'row',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    }, __jsx("div", {
      id: "pane",
      draggable: "true",
      className: "jsx-2935276130" + " " + 'scroll ',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }, __jsx("div", {
      id: "ghostpane",
      className: "jsx-2935276130",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }), __jsx("div", {
      id: "v-pills-tab",
      role: "tablist",
      "aria-orientation": "vertical",
      className: "jsx-2935276130" + " " + 'nav flex-column nav-pills width pt-5',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, __jsx("a", {
      id: "v-pills-home-tab",
      "data-toggle": "pill",
      href: "#v-pills-home",
      role: "tab",
      "aria-controls": "v-pills-home",
      "aria-selected": "true",
      className: "jsx-2935276130" + " " + 'nav-link pl-4 active',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }, "Home"), this.props.bpi.map(countries => __jsx(_Currencies__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: countries.currency,
      currency: countries.currency,
      country: countries.country,
      active: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    })))), __jsx("div", {
      className: "jsx-2935276130" + " " + 'col8 w-min-content',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, __jsx("div", {
      id: "v-pills-tabContent",
      className: "jsx-2935276130" + " " + 'tab-content',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, __jsx("div", {
      id: "v-pills-home",
      role: "tabpanel",
      "aria-labelledby": "v-pills-home-tab",
      className: "jsx-2935276130" + " " + 'tab-pane fade show active',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, __jsx(_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    })), this.props.bpi.map(countries => __jsx(_Rate__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: countries.currency,
      showActive: "",
      currency: countries.currency,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2935276130",
      __self: this
    }, ".w-min-content.jsx-2935276130{width:65vw;}.nav-pills.jsx-2935276130 .nav-link.active.jsx-2935276130,.nav-pills.jsx-2935276130 .show.jsx-2935276130>.nav-link.jsx-2935276130{color:#fff;background-color:lightblue;}.nav-link.active.jsx-2935276130{background-color:#17a2b8 !important;}[draggable=true].jsx-2935276130{cursor:move;}.resizable.jsx-2935276130{overflow:scroll;resize:both;max-width:300px;max-height:460px;border:1px solid black;min-width:50px;min-height:50px;background-color:skyblue;}#ghostpane.jsx-2935276130{display:none;height:auto;}.col8.jsx-2935276130{-webkit-flex:auto;-ms-flex:auto;flex:auto;}@media (max-width:767px){#pane.jsx-2935276130{width:35% !important;max-width:50%;}}@media (min-width:768px){#pane.jsx-2935276130{max-width:30%;}}.scroll.jsx-2935276130{height:90vh;overflow-x:auto;}.width.jsx-2935276130{width:100%;}#pane.jsx-2935276130{-webkit-flex:inherit;-ms-flex:inherit;flex:inherit;width:25%;height:91vh;border-right:10px solid #17a2b8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxjb21wb25lbnRzXFxQcmljZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtYUyxBQUtRLEFBR1EsQUFNK0IsQUFJaEMsQUFJSSxBQVdILEFBSUgsQUFLUyxBQVNILEFBT0ksQUFRZixBQUlnQixXQWpFZixBQUl1QixBQXlEdkIsQ0EvQ1IsQUF3QzBCLENBekJaLENBbUJkLEVBOUJjLEtBb0JBLElBUmQsR0FYa0IsQUFvQ1YsT0FkUixDQS9CUSxFQUxSLElBNEJBLEVBYm1CLE9BOENSLFVBN0NjLEFBOENYLFlBSW1CLFdBakRoQixlQUNDLE1Ba0RsQixVQWpEMkIseUJBQzNCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxjb21wb25lbnRzXFxQcmljZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VycmVuY2llcyBmcm9tICcuL0N1cnJlbmNpZXMnXHJcbmltcG9ydCBSYXRlIGZyb20gJy4vUmF0ZSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcclxuLy8gaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5jbGFzcyBQcmljZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7fVxyXG4gIHN0YXRlID0ge1xyXG4gIH07XHJcbmNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBNaW5pbXVtIHJlc2l6YWJsZSBhcmVhXHJcbnZhciBtaW5XaWR0aCA9IDYwO1xyXG52YXIgbWluSGVpZ2h0ID0gNDA7XHJcblxyXG4vLyBUaHJlc2hvbGRzXHJcbnZhciBGVUxMU0NSRUVOX01BUkdJTlMgPSAtMTA7XHJcbnZhciBNQVJHSU5TID0gNDtcclxuXHJcbi8vIEVuZCBvZiB3aGF0J3MgY29uZmlndXJhYmxlLlxyXG52YXIgY2xpY2tlZCA9IG51bGw7XHJcbnZhciBvblJpZ2h0RWRnZSwgb25Cb3R0b21FZGdlLCBvbkxlZnRFZGdlLCBvblRvcEVkZ2U7XHJcblxyXG52YXIgcmlnaHRTY3JlZW5FZGdlLCBib3R0b21TY3JlZW5FZGdlO1xyXG5cclxudmFyIHByZVNuYXBwZWQ7XHJcblxyXG52YXIgYiwgeCwgeTtcclxuXHJcbnZhciByZWRyYXcgPSBmYWxzZTtcclxuXHJcbnZhciBwYW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbmUnKTtcclxudmFyIGdob3N0cGFuZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaG9zdHBhbmUnKTtcclxuXHJcbmZ1bmN0aW9uIHNldEJvdW5kcyhlbGVtZW50LCB4LCB5LCB3LCBoKSB7XHJcblx0ZWxlbWVudC5zdHlsZS5sZWZ0ID0geCArICdweCc7XHJcblx0ZWxlbWVudC5zdHlsZS50b3AgPSB5ICsgJ3B4JztcclxuXHRlbGVtZW50LnN0eWxlLndpZHRoID0gdyArICdweCc7XHJcblx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcclxufVxyXG5cclxuZnVuY3Rpb24gaGludEhpZGUoKSB7XHJcbiAgc2V0Qm91bmRzKGdob3N0cGFuZSwgYi5sZWZ0LCBiLnRvcCwgYi53aWR0aCwgYi5oZWlnaHQpO1xyXG4gIGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHJcbiAgLy8gdmFyIGIgPSBnaG9zdHBhbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgLy8gZ2hvc3RwYW5lLnN0eWxlLnRvcCA9IGIudG9wICsgYi5oZWlnaHQgLyAyO1xyXG4gIC8vIGdob3N0cGFuZS5zdHlsZS5sZWZ0ID0gYi5sZWZ0ICsgYi53aWR0aCAvIDI7XHJcbiAgLy8gZ2hvc3RwYW5lLnN0eWxlLndpZHRoID0gMDtcclxuICAvLyBnaG9zdHBhbmUuc3R5bGUuaGVpZ2h0ID0gMDtcclxufVxyXG5cclxuXHJcbi8vIE1vdXNlIGV2ZW50c1xyXG5wYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3ZlKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uVXApO1xyXG5cclxuLy8gVG91Y2ggZXZlbnRzXHRcclxuLy8gcGFuZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaERvd24pO1xyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gb25Ub3VjaERvd24oZSkge1xyXG4vLyAgIG9uRG93bihlLnRvdWNoZXNbMF0pO1xyXG4vLyAgIGlmIChlLmNhbmNlbGFibGUpIHtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gIH1cclxuICBcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xyXG4gIG9uTW92ZShlLnRvdWNoZXNbMF0pO1x0XHRcclxufVxyXG5cclxuZnVuY3Rpb24gb25Ub3VjaEVuZChlKSB7XHJcbiAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0wKSBvblVwKGUuY2hhbmdlZFRvdWNoZXNbMF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XHJcbiAgb25Eb3duKGUpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Eb3duKGUpIHtcclxuICBjYWxjKGUpO1xyXG5cclxuICB2YXIgaXNSZXNpemluZyA9IG9uUmlnaHRFZGdlIHx8IG9uQm90dG9tRWRnZSB8fCBvblRvcEVkZ2UgfHwgb25MZWZ0RWRnZTtcclxuXHJcbiAgY2xpY2tlZCA9IHtcclxuICAgIHg6IHgsXHJcbiAgICB5OiB5LFxyXG4gICAgY3g6IGUuY2xpZW50WCxcclxuICAgIGN5OiBlLmNsaWVudFksXHJcbiAgICB3OiBiLndpZHRoLFxyXG4gICAgaDogYi5oZWlnaHQsXHJcbiAgICBpc1Jlc2l6aW5nOiBpc1Jlc2l6aW5nLFxyXG4gICAgaXNNb3Zpbmc6ICFpc1Jlc2l6aW5nICYmIGNhbk1vdmUoKSxcclxuICAgIG9uVG9wRWRnZTogb25Ub3BFZGdlLFxyXG4gICAgb25MZWZ0RWRnZTogb25MZWZ0RWRnZSxcclxuICAgIG9uUmlnaHRFZGdlOiBvblJpZ2h0RWRnZSxcclxuICAgIG9uQm90dG9tRWRnZTogb25Cb3R0b21FZGdlXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuTW92ZSgpIHtcclxuICByZXR1cm4geCA+IDAgJiYgeCA8IGIud2lkdGggJiYgeSA+IDAgJiYgeSA8IGIuaGVpZ2h0XHJcbiAgJiYgeSA8IDMwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjKGUpIHtcclxuICBiID0gcGFuZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICB4ID0gZS5jbGllbnRYIC0gYi5sZWZ0O1xyXG4gIHkgPSBlLmNsaWVudFkgLSBiLnRvcDtcclxuXHJcbiAgb25Ub3BFZGdlID0geSA8IE1BUkdJTlM7XHJcbiAgb25MZWZ0RWRnZSA9IHggPCBNQVJHSU5TO1xyXG4gIG9uUmlnaHRFZGdlID0geCA+PSBiLndpZHRoIC0gTUFSR0lOUztcclxuICBvbkJvdHRvbUVkZ2UgPSB5ID49IGIuaGVpZ2h0IC0gTUFSR0lOUztcclxuXHJcbiAgcmlnaHRTY3JlZW5FZGdlID0gd2luZG93LmlubmVyV2lkdGggLSBNQVJHSU5TO1xyXG4gIGJvdHRvbVNjcmVlbkVkZ2UgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBNQVJHSU5TO1xyXG59XHJcblxyXG52YXIgZTtcclxuXHJcbmZ1bmN0aW9uIG9uTW92ZShlZSkge1xyXG4gIGNhbGMoZWUpO1xyXG5cclxuICBlID0gZWU7XHJcblxyXG4gIHJlZHJhdyA9IHRydWU7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlKCkge1xyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gIGlmICghcmVkcmF3KSByZXR1cm47XHJcblxyXG4gIHJlZHJhdyA9IGZhbHNlO1xyXG5cclxuICBpZiAoY2xpY2tlZCAmJiBjbGlja2VkLmlzUmVzaXppbmcpIHtcclxuXHJcbiAgICBpZiAoY2xpY2tlZC5vblJpZ2h0RWRnZSkgcGFuZS5zdHlsZS53aWR0aCA9IE1hdGgubWF4KHgsIG1pbldpZHRoKSArICdweCc7XHJcbiAgICAvLyBpZiAoY2xpY2tlZC5vbkJvdHRvbUVkZ2UpIHBhbmUuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgoeSwgbWluSGVpZ2h0KSArICdweCc7XHJcblxyXG4gICAgLy8gaWYgKGNsaWNrZWQub25MZWZ0RWRnZSkge1xyXG4gICAgLy8gICB2YXIgY3VycmVudFdpZHRoID0gTWF0aC5tYXgoY2xpY2tlZC5jeCAtIGUuY2xpZW50WCAgKyBjbGlja2VkLncsIG1pbldpZHRoKTtcclxuICAgIC8vICAgaWYgKGN1cnJlbnRXaWR0aCA+IG1pbldpZHRoKSB7XHJcbiAgICAvLyAgICAgcGFuZS5zdHlsZS53aWR0aCA9IGN1cnJlbnRXaWR0aCArICdweCc7XHJcbiAgICAvLyAgICAgcGFuZS5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgJ3B4JztcdFxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKGNsaWNrZWQub25Ub3BFZGdlKSB7XHJcbiAgICAvLyAgIHZhciBjdXJyZW50SGVpZ2h0ID0gTWF0aC5tYXgoY2xpY2tlZC5jeSAtIGUuY2xpZW50WSAgKyBjbGlja2VkLmgsIG1pbkhlaWdodCk7XHJcbiAgICAvLyAgIGlmIChjdXJyZW50SGVpZ2h0ID4gbWluSGVpZ2h0KSB7XHJcbiAgICAvLyAgICAgcGFuZS5zdHlsZS5oZWlnaHQgPSBjdXJyZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgIC8vICAgICBwYW5lLnN0eWxlLnRvcCA9IGUuY2xpZW50WSArICdweCc7XHRcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGhpbnRIaWRlKCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbi8vICAgaWYgKGNsaWNrZWQgJiYgY2xpY2tlZC5pc01vdmluZykge1xyXG5cclxuLy8gICAgIGlmIChiLnRvcCA8IEZVTExTQ1JFRU5fTUFSR0lOUyB8fCBiLmxlZnQgPCBGVUxMU0NSRUVOX01BUkdJTlMgfHwgYi5yaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gRlVMTFNDUkVFTl9NQVJHSU5TIHx8IGIuYm90dG9tID4gd2luZG93LmlubmVySGVpZ2h0IC0gRlVMTFNDUkVFTl9NQVJHSU5TKSB7XHJcbi8vICAgICAgIC8vIGhpbnRGdWxsKCk7XHJcbi8vICAgICAgIHNldEJvdW5kcyhnaG9zdHBhbmUsIDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4vLyAgICAgICBnaG9zdHBhbmUuc3R5bGUub3BhY2l0eSA9IDAuMjtcclxuLy8gICAgIH0gZWxzZSBpZiAoYi50b3AgPCBNQVJHSU5TKSB7XHJcbi8vICAgICAgIC8vIGhpbnRUb3AoKTtcclxuLy8gICAgICAgc2V0Qm91bmRzKGdob3N0cGFuZSwgMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpO1xyXG4vLyAgICAgICBnaG9zdHBhbmUuc3R5bGUub3BhY2l0eSA9IDAuMjtcclxuLy8gICAgIH0gZWxzZSBpZiAoYi5sZWZ0IDwgTUFSR0lOUykge1xyXG4vLyAgICAgICAvLyBoaW50TGVmdCgpO1xyXG4vLyAgICAgICBzZXRCb3VuZHMoZ2hvc3RwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbi8vICAgICAgIGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMC4yO1xyXG4vLyAgICAgfSBlbHNlIGlmIChiLnJpZ2h0ID4gcmlnaHRTY3JlZW5FZGdlKSB7XHJcbi8vICAgICAgIC8vIGhpbnRSaWdodCgpO1xyXG4vLyAgICAgICBzZXRCb3VuZHMoZ2hvc3RwYW5lLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIDAsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuLy8gICAgICAgZ2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwLjI7XHJcbi8vICAgICB9IGVsc2UgaWYgKGIuYm90dG9tID4gYm90dG9tU2NyZWVuRWRnZSkge1xyXG4vLyAgICAgICAvLyBoaW50Qm90dG9tKCk7XHJcbi8vICAgICAgIHNldEJvdW5kcyhnaG9zdHBhbmUsIDAsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpO1xyXG4vLyAgICAgICBnaG9zdHBhbmUuc3R5bGUub3BhY2l0eSA9IDAuMjtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIGhpbnRIaWRlKCk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaWYgKHByZVNuYXBwZWQpIHtcclxuLy8gICAgICAgc2V0Qm91bmRzKHBhbmUsXHJcbi8vICAgICAgIFx0ZS5jbGllbnRYIC0gcHJlU25hcHBlZC53aWR0aCAvIDIsXHJcbi8vICAgICAgIFx0ZS5jbGllbnRZIC0gTWF0aC5taW4oY2xpY2tlZC55LCBwcmVTbmFwcGVkLmhlaWdodCksXHJcbi8vICAgICAgIFx0cHJlU25hcHBlZC53aWR0aCxcclxuLy8gICAgICAgXHRwcmVTbmFwcGVkLmhlaWdodFxyXG4vLyAgICAgICApO1xyXG4vLyAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLy8gbW92aW5nXHJcbi8vICAgICBwYW5lLnN0eWxlLnRvcCA9IChlLmNsaWVudFkgLSBjbGlja2VkLnkpICsgJ3B4JztcclxuLy8gICAgIHBhbmUuc3R5bGUubGVmdCA9IChlLmNsaWVudFggLSBjbGlja2VkLngpICsgJ3B4JztcclxuXHJcbi8vICAgICByZXR1cm47XHJcbi8vICAgfVxyXG5cclxuICAvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgd2hlbiBtb3VzZSBtb3ZlcyB3aXRob3V0IGNsaWNraW5nXHJcblxyXG4gIC8vIHN0eWxlIGN1cnNvclxyXG4vLyAgIGlmIChvblJpZ2h0RWRnZSAmJiBvbkJvdHRvbUVkZ2UgfHwgb25MZWZ0RWRnZSAmJiBvblRvcEVkZ2UpIHtcclxuLy8gICAgIHBhbmUuc3R5bGUuY3Vyc29yID0gJ253c2UtcmVzaXplJztcclxuLy8gICB9XHJcbi8vICAgIGVsc2UgaWYgKG9uUmlnaHRFZGdlICYmIG9uVG9wRWRnZSB8fCBvbkJvdHRvbUVkZ2UgJiYgb25MZWZ0RWRnZSkge1xyXG4vLyAgICAgcGFuZS5zdHlsZS5jdXJzb3IgPSAnbmVzdy1yZXNpemUnO1xyXG4vLyAgIH1cclxuICBcclxuICAgaWYgKG9uUmlnaHRFZGdlIHx8IG9uTGVmdEVkZ2UpIHtcclxuICAgIHBhbmUuc3R5bGUuY3Vyc29yID0gJ2UtcmVzaXplJztcclxuICB9IFxyXG4vLyAgIGVsc2UgaWYgKG9uQm90dG9tRWRnZSB8fCBvblRvcEVkZ2UpIHtcclxuLy8gICAgIHBhbmUuc3R5bGUuY3Vyc29yID0gJ25zLXJlc2l6ZSc7XHJcbi8vICAgfSBcclxuLy8gICBlbHNlIGlmIChjYW5Nb3ZlKCkpIHtcclxuLy8gICAgIHBhbmUuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xyXG4vLyAgIH1cclxuICAgZWxzZSB7XHJcbiAgICBwYW5lLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcclxuICB9XHJcbn1cclxuXHJcbmFuaW1hdGUoKTtcclxuXHJcbmZ1bmN0aW9uIG9uVXAoZSkge1xyXG4gIGNhbGMoZSk7XHJcblxyXG4gIGlmIChjbGlja2VkICYmIGNsaWNrZWQuaXNNb3ZpbmcpIHtcclxuICAgIC8vIFNuYXBcclxuICAgIHZhciBzbmFwcGVkID0ge1xyXG4gICAgICB3aWR0aDogYi53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBiLmhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoYi50b3AgPCBGVUxMU0NSRUVOX01BUkdJTlMgfHwgYi5sZWZ0IDwgRlVMTFNDUkVFTl9NQVJHSU5TIHx8IGIucmlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aCAtIEZVTExTQ1JFRU5fTUFSR0lOUyB8fCBiLmJvdHRvbSA+IHdpbmRvdy5pbm5lckhlaWdodCAtIEZVTExTQ1JFRU5fTUFSR0lOUykge1xyXG4gICAgICAvLyBoaW50RnVsbCgpO1xyXG4gICAgICBzZXRCb3VuZHMocGFuZSwgMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgIHByZVNuYXBwZWQgPSBzbmFwcGVkO1xyXG4gICAgfSBlbHNlIGlmIChiLnRvcCA8IE1BUkdJTlMpIHtcclxuICAgICAgLy8gaGludFRvcCgpO1xyXG4gICAgICBzZXRCb3VuZHMocGFuZSwgMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpO1xyXG4gICAgICBwcmVTbmFwcGVkID0gc25hcHBlZDtcclxuICAgIH0gZWxzZSBpZiAoYi5sZWZ0IDwgTUFSR0lOUykge1xyXG4gICAgICAvLyBoaW50TGVmdCgpO1xyXG4gICAgICBzZXRCb3VuZHMocGFuZSwgMCwgMCwgd2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICBwcmVTbmFwcGVkID0gc25hcHBlZDtcclxuICAgIH0gZWxzZSBpZiAoYi5yaWdodCA+IHJpZ2h0U2NyZWVuRWRnZSkge1xyXG4gICAgICAvLyBoaW50UmlnaHQoKTtcclxuICAgICAgc2V0Qm91bmRzKHBhbmUsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgMCwgd2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICBwcmVTbmFwcGVkID0gc25hcHBlZDtcclxuICAgIH0gZWxzZSBpZiAoYi5ib3R0b20gPiBib3R0b21TY3JlZW5FZGdlKSB7XHJcbiAgICAgIC8vIGhpbnRCb3R0b20oKTtcclxuICAgICAgc2V0Qm91bmRzKHBhbmUsIDAsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpO1xyXG4gICAgICBwcmVTbmFwcGVkID0gc25hcHBlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByZVNuYXBwZWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGhpbnRIaWRlKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xpY2tlZCA9IG51bGw7XHJcblxyXG59XHJcbiAgXHJcbn1cclxuICBzZXRzdCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW5jeTogXCJicnBcIiB9KTtcclxuICB9O1xyXG5cclxuICBzZXR1bnN0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbmN5OiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaWNlR2V0dGVyID0gKGN1cnJlbmN5KSA9PiB7XHJcbiAgICAgbGV0IHZhbCA9IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9O1xyXG5cclxuICBwcmljZVJldHVybmVyID0gKCkgPT4ge307XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBsaXN0ID0gXCJcIjtcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuY3VycmVuY3kpIHtcclxuICAgICAgY2FzZSBcInVzZFwiOlxyXG4gICAgICAgIGxpc3QgPSBcInVzZFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiYnJwXCI6XHJcbiAgICAgICAgbGlzdCA9IFwiYnJwXCI7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGxpc3QgPSBcInVuc2V0XCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYnBpKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicGFuZVwiIGRyYWdnYWJsZT1cInRydWVcIiBjbGFzc05hbWU9J3Njcm9sbCAnPlxyXG4gICAgICAgICBcclxuICAgIDxkaXYgaWQ9XCJnaG9zdHBhbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nbmF2IGZsZXgtY29sdW1uIG5hdi1waWxscyB3aWR0aCBwdC01J1xyXG4gICAgICAgICAgICAgIGlkPSd2LXBpbGxzLXRhYidcclxuICAgICAgICAgICAgICByb2xlPSd0YWJsaXN0J1xyXG4gICAgICAgICAgICAgIGFyaWEtb3JpZW50YXRpb249J3ZlcnRpY2FsJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J25hdi1saW5rIHBsLTQgYWN0aXZlJ1xyXG4gICAgICAgICAgICBpZD0ndi1waWxscy1ob21lLXRhYidcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9J3BpbGwnXHJcbiAgICAgICAgICAgIGhyZWY9JyN2LXBpbGxzLWhvbWUnXHJcbiAgICAgICAgICAgIHJvbGU9J3RhYidcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz0ndi1waWxscy1ob21lJ1xyXG4gICAgICAgICAgICBhcmlhLXNlbGVjdGVkPSd0cnVlJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5icGkubWFwKChjb3VudHJpZXMpID0+IChcclxuICAgICAgICAgICAgICAgPEN1cnJlbmNpZXMga2V5PXtjb3VudHJpZXMuY3VycmVuY3l9IGN1cnJlbmN5PXtjb3VudHJpZXMuY3VycmVuY3l9IGNvdW50cnk9e2NvdW50cmllcy5jb3VudHJ5fSBhY3RpdmU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sOCB3LW1pbi1jb250ZW50Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYi1jb250ZW50JyBpZD0ndi1waWxscy10YWJDb250ZW50Jz5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlJ1xyXG4gICAgICAgICAgICAgICAgaWQ9J3YtcGlsbHMtaG9tZSdcclxuICAgICAgICAgICAgICAgIHJvbGU9J3RhYnBhbmVsJ1xyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSd2LXBpbGxzLWhvbWUtdGFiJ1xyXG4gICAgICAgICAgICAgID5cclxuXHJcbjxIb21lLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5icGkubWFwKChjb3VudHJpZXMpID0+IChcclxuICAgICAgICAgICAgICAgIDxSYXRlIGtleT17Y291bnRyaWVzLmN1cnJlbmN5fSBzaG93QWN0aXZlPVwiXCIgY3VycmVuY3k9e2NvdW50cmllcy5jdXJyZW5jeX0vPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuXHJcbiAgICAgICAgLnctbWluLWNvbnRlbnR7XHJcbiAgICAgICAgICB3aWR0aDogNjV2d1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuXHJcbi5uYXYtbGluay5hY3RpdmV7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFtkcmFnZ2FibGU9dHJ1ZV0ge1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLnJlc2l6YWJsZSB7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICByZXNpemU6IGJvdGg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXgtaGVpZ2h0OiA0NjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG59XHJcblxyXG4jZ2hvc3RwYW5le1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5jb2w4e1xyXG4gIGZsZXg6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNwYW5lIHtcclxud2lkdGg6IDM1JSAhaW1wb3J0YW50O1xyXG5tYXgtd2lkdGg6IDUwJTtcclxuXHJcblxyXG59XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgI3BhbmUge1xyXG5cclxuICAgIG1heC13aWR0aDogMzAlO1xyXG5cclxufVxyXG59XHJcbiAgICAgICAgLnNjcm9sbHtcclxuXHJcbiAgICAgIFxyXG4gICAgICAgICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAud2lkdGh7XHJcblxyXG4gICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAjcGFuZSB7XHJcbiAgICAgICAgICBmbGV4OiBpbmhlcml0O1xyXG5cdHdpZHRoOiAyNSU7XHJcbiAgaGVpZ2h0OiA5MXZoO1xyXG5cdFxyXG5cdFxyXG5cclxuXHRib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzE3YTJiODtcclxuXHRcclxufVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlcztcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Prices.jsx */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Rate.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


class Rate extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      bpi: "",
      date: "",
      currency: ""
    });
  }

  componentDidMount() {
    // console.log(this.props.currency);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://api.coindesk.com/v1/bpi/currentprice/${this.props.currency}.json`).then(result => {
      // let time=result.data.time;
      var d = new Date().toString(); // console.log(time.updated);

      this.setState({
        date: d
      }); // console.log(countries);

      var secondKey = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(result.data.bpi)[1]; //fetched the key at second index


      if (result.data.bpi[secondKey]) {
        let currencyName = result.data.bpi[secondKey].code;
        this.setState({
          currency: currencyName
        });
        let eachRate = result.data.bpi[secondKey].rate;
        this.setState({
          bpi: eachRate
        });
      }
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: `tab-pane fade ${this.props.showActive}`,
      id: `v-pills-${this.props.currency}`,
      role: "tabpanel",
      "aria-labelledby": `v-pills-${this.props.currency}-tab`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4232772317" + " " + "container text-center mt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("h3", {
      className: "jsx-4232772317" + " " + "mt5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "1 Bitcoin"), __jsx("h4", {
      className: "jsx-4232772317",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "is equivalent to"), __jsx("h1", {
      className: "jsx-4232772317" + " " + "mt-5 mb-3 text-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, this.state.bpi, "  ", this.state.currency), __jsx("br", {
      className: "jsx-4232772317",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx("h4", {
      className: "jsx-4232772317" + " " + "mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "as at"), __jsx("h4", {
      className: "jsx-4232772317" + " " + "mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, this.state.date), __jsx("br", {
      className: "jsx-4232772317",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-4232772317" + " " + "bottom float-bottom ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("h6", {
      className: "jsx-4232772317",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "With love from ", __jsx("a", {
      target: "_blank",
      href: "https://github.com/adedaniel",
      className: "jsx-4232772317",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "adedaniel"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "4232772317",
      __self: this
    }, ".bottom.jsx-4232772317{position:absolute;bottom:0;width:67vw;}.blue.jsx-4232772317{color:#17a2b8;}.mt5.jsx-4232772317{margin-top:65px;}.icon.jsx-4232772317{font-size:50px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxjb21wb25lbnRzXFxSYXRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRmUsQUFHcUMsQUFNdkIsQUFHQSxBQUcrQixjQU45QixFQUdBLEVBUmEsUUFjYixDQVpELFdBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYW5pZWxcXERlc2t0b3BcXGJpdGNvaW4tcHJpY2VcXGNvbXBvbmVudHNcXFJhdGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5jdXJyZW5jeSk7XHJcblxyXG5cclxuICBBeGlvcy5nZXQoXHJcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UvJHt0aGlzLnByb3BzLmN1cnJlbmN5fS5qc29uYFxyXG4gICAgICAgICkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAvLyBsZXQgdGltZT1yZXN1bHQuZGF0YS50aW1lO1xyXG4gICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aW1lLnVwZGF0ZWQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGU6IGQgfSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudHJpZXMpO1xyXG5cclxuXHJcbiAgICAgICAgICB2YXIgc2Vjb25kS2V5ID0gT2JqZWN0LmtleXMocmVzdWx0LmRhdGEuYnBpKVsxXTsgLy9mZXRjaGVkIHRoZSBrZXkgYXQgc2Vjb25kIGluZGV4XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmRhdGEuYnBpW3NlY29uZEtleV0pIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbmN5TmFtZSA9IHJlc3VsdC5kYXRhLmJwaVtzZWNvbmRLZXldLmNvZGU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW5jeTogY3VycmVuY3lOYW1lfSk7XHJcbiAgICAgICAgICAgIGxldCBlYWNoUmF0ZSA9IHJlc3VsdC5kYXRhLmJwaVtzZWNvbmRLZXldLnJhdGU7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJwaTogZWFjaFJhdGUgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuc3RhdGU9e1xyXG4gIGJwaTogXCJcIixcclxuICBkYXRlOiBcIlwiLFxyXG4gIGN1cnJlbmN5OiBcIlwiXHJcbn1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgIFxyXG4gICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGFiLXBhbmUgZmFkZSAke3RoaXMucHJvcHMuc2hvd0FjdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2B2LXBpbGxzLSR7dGhpcy5wcm9wcy5jdXJyZW5jeX1gfVxyXG4gICAgICAgICAgICAgICAgcm9sZT0ndGFicGFuZWwnXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e2B2LXBpbGxzLSR7dGhpcy5wcm9wcy5jdXJyZW5jeX0tdGFiYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdDVcIj5cclxuICAgICAgICAgICAgICAxIEJpdGNvaW4gXHJcbiAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIGlzIGVxdWl2YWxlbnQgdG9cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTUgbWItMyB0ZXh0LWluZm9cIj5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5icGl9ICB7dGhpcy5zdGF0ZS5jdXJyZW5jeX1cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgIGFzIGF0IFxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRlfVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbSBmbG9hdC1ib3R0b20gXCI+XHJcbiAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFdpdGggbG92ZSBmcm9tIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWRlZGFuaWVsXCI+YWRlZGFuaWVsPC9hPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgLmJvdHRvbXtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA2N3Z3XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5ibHVle1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogICMxN2EyYjhcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm10NXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDY1cHhcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Rate.jsx */"))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./components/navbar.jsx":
/*!*******************************!*\
  !*** ./components/navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\navbar.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Navbar() {
  return __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("a", {
    className: "navbar-brand",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Beta"), __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarColor02",
    "aria-controls": "navbarColor02",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarColor02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("ul", {
    className: "navbar-nav mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("form", {
    className: "form-inline my-2 my-lg-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("input", {
    className: "form-control mr-sm-2",
    type: "text",
    placeholder: "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("button", {
    className: "btn btn-secondary my-2 my-sm-0",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Search"))));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorPage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typed */ "react-typed");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\bitcoin-price\\pages\\_error.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ErrorPage(props) {
  return __jsx("div", {
    className: "jsx-1029802799" + " " + "container text-center margin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: "https://img.icons8.com/dusk/64/000000/broken-link.png",
    className: "jsx-1029802799" + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-1029802799" + " " + "mt-5 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Something's not right..."), __jsx("br", {
    className: "jsx-1029802799",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-1029802799" + " " + "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_typed__WEBPACK_IMPORTED_MODULE_2___default.a, {
    strings: ["Please check your internet connection and reload this page"],
    typeSpeed: 30,
    startDelay: 1000,
    cursorChar: '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("br", {
    className: "jsx-1029802799",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1029802799",
    __self: this
  }, ".img.jsx-1029802799{width:100px;}.margin.jsx-1029802799{margin-top:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxwYWdlc1xcX2Vycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCQyxBQUdpQixBQUdLLFlBSEosS0FJakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYW5pZWxcXERlc2t0b3BcXGJpdGNvaW4tcHJpY2VcXHBhZ2VzXFxfZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yUGFnZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgbWFyZ2luXCI+XHJcblxyXG4gICAgPGltZyBjbGFzc05hbWU9XCJpbWdcIiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2R1c2svNjQvMDAwMDAwL2Jyb2tlbi1saW5rLnBuZ1wiLz5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJtdC01IG1iLTNcIj5cclxuXHJcblNvbWV0aGluZydzIG5vdCByaWdodC4uLlxyXG48L2gxPlxyXG48YnIvPlxyXG48aDQgY2xhc3NOYW1lPVwibWItM1wiPlxyXG48VHlwZWRcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmdzPXtbXCJQbGVhc2UgY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIGFuZCByZWxvYWQgdGhpcyBwYWdlXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGVlZD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREZWxheT0gezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yQ2hhcj17Jyd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG48L2g0PlxyXG48YnIvPlxyXG5cclxuXHJcblxyXG5cclxuPHN0eWxlIGpzeD5cclxue2BcclxuLmltZ3tcclxuICAgIHdpZHRoOiAxMDBweFxyXG59XHJcblxyXG4ubWFyZ2lue1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuYH1cclxuPC9zdHlsZT5cclxuPC9kaXY+XHJcblxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Daniel\\Desktop\\bitcoin-price\\pages\\_error.js */"));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Prices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Prices */ "./components/Prices.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\bitcoin-price\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









const Index = props => __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, props.bpi ? __jsx("div", {
  className: "jsx-2409135465" + " " + "body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(_components_Prices__WEBPACK_IMPORTED_MODULE_7__["default"], {
  bpi: props.bpi,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})) : __jsx(_error__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2409135465",
  __self: undefined
}, ".body.jsx-2409135465{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUlJLGdCQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICcuL19lcnJvcidcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuLi9jb21wb25lbnRzL1ByaWNlc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxyXG5cclxuXHJcblxyXG4gIDxSZWFjdC5GcmFnbWVudD5cclxuICB7cHJvcHMuYnBpID8gKCAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgIDxQcmljZXMgYnBpPXtwcm9wcy5icGl9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApIDogPEVycm9yUGFnZS8+fVxyXG4gIFxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgLmJvZHl7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gXHJcbiAgICB9XHJcbiAgICBgfVxyXG4gICAgXHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbik7XHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuIFxyXG4gdHJ5IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvc3VwcG9ydGVkLWN1cnJlbmNpZXMuanNvblwiXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGJwaTogcmVzdWx0XHJcbiAgfTtcclxuIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuIH1cclxuIFxyXG4gIFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Daniel\\Desktop\\bitcoin-price\\pages\\index.js */"));

Index.getInitialProps = async () => {
  try {
    const data = await fetch("https://api.coindesk.com/v1/bpi/supported-currencies.json");
    console.log(data);
    const result = await data.json();
    return {
      bpi: result
    };
  } catch (error) {
    console.log(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel\Desktop\bitcoin-price\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-typed":
/*!******************************!*\
  !*** external "react-typed" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typed");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map