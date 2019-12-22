webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Prices.jsx":
/*!*******************************!*\
  !*** ./components/Prices.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Currencies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Currencies */ "./components/Currencies.jsx");
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Rate */ "./components/Rate.jsx");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Home */ "./components/Home.jsx");









var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Prices.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;



 // import Axios from "axios";

var Prices =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Prices, _Component);

  function Prices() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Prices)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "setst", function () {
      _this.setState({
        currency: "brp"
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "setunst", function () {
      _this.setState({
        currency: ""
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "priceGetter", function (currency) {
      var val = "";
      return val;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "priceReturner", function () {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices, [{
    key: "componentDidMount",
    value: function componentDidMount() {
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
  }, {
    key: "render",
    value: function render() {
      var list = "";

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
        className: "jsx-2347037221",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2347037221" + " " + 'row',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, __jsx("div", {
        id: "pane",
        draggable: "true",
        className: "jsx-2347037221" + " " + 'scroll ',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, __jsx("div", {
        id: "ghostpane",
        className: "jsx-2347037221",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }), __jsx("div", {
        id: "v-pills-tab",
        role: "tablist",
        "aria-orientation": "vertical",
        className: "jsx-2347037221" + " " + 'nav flex-column nav-pills width pt-5',
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
        className: "jsx-2347037221" + " " + 'nav-link pl-4 active',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, "Home"), this.props.bpi.map(function (countries) {
        return __jsx(_Currencies__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: countries.currency,
          currency: countries.currency,
          country: countries.country,
          active: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          },
          __self: this
        });
      }))), __jsx("div", {
        className: "jsx-2347037221" + " " + 'col8 w-min-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, __jsx("div", {
        id: "v-pills-tabContent",
        className: "jsx-2347037221" + " " + 'tab-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, __jsx("div", {
        id: "v-pills-home",
        role: "tabpanel",
        "aria-labelledby": "v-pills-home-tab",
        className: "jsx-2347037221" + " " + 'tab-pane fade show active',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, __jsx(_Home__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      })), this.props.bpi.map(function (countries) {
        return __jsx(_Rate__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: countries.currency,
          showActive: "",
          currency: countries.currency,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 364
          },
          __self: this
        });
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2347037221",
        __self: this
      }, ".w-min-content.jsx-2347037221{width:65vw;}.nav-pills.jsx-2347037221 .nav-link.active.jsx-2347037221,.nav-pills.jsx-2347037221 .show.jsx-2347037221>.nav-link.jsx-2347037221{color:#fff;background-color:lightblue;}.nav-link.active.jsx-2347037221{background-color:#17a2b8 !important;}[draggable=true].jsx-2347037221{cursor:move;}.resizable.jsx-2347037221{overflow:scroll;resize:both;max-width:300px;max-height:460px;border:1px solid black;min-width:50px;min-height:50px;background-color:skyblue;}#ghostpane.jsx-2347037221{display:none;height:auto;}.col8.jsx-2347037221{-webkit-flex:auto;-ms-flex:auto;flex:auto;}.scroll.jsx-2347037221{height:90vh;overflow-x:auto;}.width.jsx-2347037221{width:100%;}#pane.jsx-2347037221{-webkit-flex:inherit;-ms-flex:inherit;flex:inherit;width:25%;height:91vh;border-right:10px solid #17a2b8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxjb21wb25lbnRzXFxQcmljZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtYUyxBQUtRLEFBR1EsQUFNK0IsQUFJaEMsQUFJSSxBQVdILEFBSUgsQUFPVSxBQVFmLEFBSWdCLFdBbkRmLEFBSXVCLEFBMkN2QixDQWpDUixBQTBCMEIsQ0FYWixHQVhBLFNBWWQsR0FYa0IsQUFzQlYsUUEvQkEsRUFMUixJQTRCQSxFQWJtQixPQWdDUixVQS9CYyxBQWdDWCxZQUltQixXQW5DaEIsZUFDQyxNQW9DbEIsVUFuQzJCLHlCQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXERhbmllbFxcRGVza3RvcFxcYml0Y29pbi1wcmljZVxcY29tcG9uZW50c1xcUHJpY2VzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1cnJlbmNpZXMgZnJvbSAnLi9DdXJyZW5jaWVzJ1xyXG5pbXBvcnQgUmF0ZSBmcm9tICcuL1JhdGUnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXHJcbi8vIGltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY2xhc3MgUHJpY2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge31cclxuICBzdGF0ZSA9IHtcclxuICB9O1xyXG5jb21wb25lbnREaWRNb3VudCgpe1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gTWluaW11bSByZXNpemFibGUgYXJlYVxyXG52YXIgbWluV2lkdGggPSA2MDtcclxudmFyIG1pbkhlaWdodCA9IDQwO1xyXG5cclxuLy8gVGhyZXNob2xkc1xyXG52YXIgRlVMTFNDUkVFTl9NQVJHSU5TID0gLTEwO1xyXG52YXIgTUFSR0lOUyA9IDQ7XHJcblxyXG4vLyBFbmQgb2Ygd2hhdCdzIGNvbmZpZ3VyYWJsZS5cclxudmFyIGNsaWNrZWQgPSBudWxsO1xyXG52YXIgb25SaWdodEVkZ2UsIG9uQm90dG9tRWRnZSwgb25MZWZ0RWRnZSwgb25Ub3BFZGdlO1xyXG5cclxudmFyIHJpZ2h0U2NyZWVuRWRnZSwgYm90dG9tU2NyZWVuRWRnZTtcclxuXHJcbnZhciBwcmVTbmFwcGVkO1xyXG5cclxudmFyIGIsIHgsIHk7XHJcblxyXG52YXIgcmVkcmF3ID0gZmFsc2U7XHJcblxyXG52YXIgcGFuZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYW5lJyk7XHJcbnZhciBnaG9zdHBhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2hvc3RwYW5lJyk7XHJcblxyXG5mdW5jdGlvbiBzZXRCb3VuZHMoZWxlbWVudCwgeCwgeSwgdywgaCkge1xyXG5cdGVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyAncHgnO1xyXG5cdGVsZW1lbnQuc3R5bGUudG9wID0geSArICdweCc7XHJcblx0ZWxlbWVudC5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xyXG5cdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpbnRIaWRlKCkge1xyXG4gIHNldEJvdW5kcyhnaG9zdHBhbmUsIGIubGVmdCwgYi50b3AsIGIud2lkdGgsIGIuaGVpZ2h0KTtcclxuICBnaG9zdHBhbmUuc3R5bGUub3BhY2l0eSA9IDA7XHJcblxyXG4gIC8vIHZhciBiID0gZ2hvc3RwYW5lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIC8vIGdob3N0cGFuZS5zdHlsZS50b3AgPSBiLnRvcCArIGIuaGVpZ2h0IC8gMjtcclxuICAvLyBnaG9zdHBhbmUuc3R5bGUubGVmdCA9IGIubGVmdCArIGIud2lkdGggLyAyO1xyXG4gIC8vIGdob3N0cGFuZS5zdHlsZS53aWR0aCA9IDA7XHJcbiAgLy8gZ2hvc3RwYW5lLnN0eWxlLmhlaWdodCA9IDA7XHJcbn1cclxuXHJcblxyXG4vLyBNb3VzZSBldmVudHNcclxucGFuZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW92ZSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvblVwKTtcclxuXHJcbi8vIFRvdWNoIGV2ZW50c1x0XHJcbi8vIHBhbmUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hEb3duKTtcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIG9uVG91Y2hEb3duKGUpIHtcclxuLy8gICBvbkRvd24oZS50b3VjaGVzWzBdKTtcclxuLy8gICBpZiAoZS5jYW5jZWxhYmxlKSB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICB9XHJcbiAgXHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcclxuICBvbk1vdmUoZS50b3VjaGVzWzBdKTtcdFx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xyXG4gIGlmIChlLnRvdWNoZXMubGVuZ3RoID09MCkgb25VcChlLmNoYW5nZWRUb3VjaGVzWzBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xyXG4gIG9uRG93bihlKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRG93bihlKSB7XHJcbiAgY2FsYyhlKTtcclxuXHJcbiAgdmFyIGlzUmVzaXppbmcgPSBvblJpZ2h0RWRnZSB8fCBvbkJvdHRvbUVkZ2UgfHwgb25Ub3BFZGdlIHx8IG9uTGVmdEVkZ2U7XHJcblxyXG4gIGNsaWNrZWQgPSB7XHJcbiAgICB4OiB4LFxyXG4gICAgeTogeSxcclxuICAgIGN4OiBlLmNsaWVudFgsXHJcbiAgICBjeTogZS5jbGllbnRZLFxyXG4gICAgdzogYi53aWR0aCxcclxuICAgIGg6IGIuaGVpZ2h0LFxyXG4gICAgaXNSZXNpemluZzogaXNSZXNpemluZyxcclxuICAgIGlzTW92aW5nOiAhaXNSZXNpemluZyAmJiBjYW5Nb3ZlKCksXHJcbiAgICBvblRvcEVkZ2U6IG9uVG9wRWRnZSxcclxuICAgIG9uTGVmdEVkZ2U6IG9uTGVmdEVkZ2UsXHJcbiAgICBvblJpZ2h0RWRnZTogb25SaWdodEVkZ2UsXHJcbiAgICBvbkJvdHRvbUVkZ2U6IG9uQm90dG9tRWRnZVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbk1vdmUoKSB7XHJcbiAgcmV0dXJuIHggPiAwICYmIHggPCBiLndpZHRoICYmIHkgPiAwICYmIHkgPCBiLmhlaWdodFxyXG4gICYmIHkgPCAzMDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsYyhlKSB7XHJcbiAgYiA9IHBhbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgeCA9IGUuY2xpZW50WCAtIGIubGVmdDtcclxuICB5ID0gZS5jbGllbnRZIC0gYi50b3A7XHJcblxyXG4gIG9uVG9wRWRnZSA9IHkgPCBNQVJHSU5TO1xyXG4gIG9uTGVmdEVkZ2UgPSB4IDwgTUFSR0lOUztcclxuICBvblJpZ2h0RWRnZSA9IHggPj0gYi53aWR0aCAtIE1BUkdJTlM7XHJcbiAgb25Cb3R0b21FZGdlID0geSA+PSBiLmhlaWdodCAtIE1BUkdJTlM7XHJcblxyXG4gIHJpZ2h0U2NyZWVuRWRnZSA9IHdpbmRvdy5pbm5lcldpZHRoIC0gTUFSR0lOUztcclxuICBib3R0b21TY3JlZW5FZGdlID0gd2luZG93LmlubmVySGVpZ2h0IC0gTUFSR0lOUztcclxufVxyXG5cclxudmFyIGU7XHJcblxyXG5mdW5jdGlvbiBvbk1vdmUoZWUpIHtcclxuICBjYWxjKGVlKTtcclxuXHJcbiAgZSA9IGVlO1xyXG5cclxuICByZWRyYXcgPSB0cnVlO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuICBpZiAoIXJlZHJhdykgcmV0dXJuO1xyXG5cclxuICByZWRyYXcgPSBmYWxzZTtcclxuXHJcbiAgaWYgKGNsaWNrZWQgJiYgY2xpY2tlZC5pc1Jlc2l6aW5nKSB7XHJcblxyXG4gICAgaWYgKGNsaWNrZWQub25SaWdodEVkZ2UpIHBhbmUuc3R5bGUud2lkdGggPSBNYXRoLm1heCh4LCBtaW5XaWR0aCkgKyAncHgnO1xyXG4gICAgLy8gaWYgKGNsaWNrZWQub25Cb3R0b21FZGdlKSBwYW5lLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KHksIG1pbkhlaWdodCkgKyAncHgnO1xyXG5cclxuICAgIC8vIGlmIChjbGlja2VkLm9uTGVmdEVkZ2UpIHtcclxuICAgIC8vICAgdmFyIGN1cnJlbnRXaWR0aCA9IE1hdGgubWF4KGNsaWNrZWQuY3ggLSBlLmNsaWVudFggICsgY2xpY2tlZC53LCBtaW5XaWR0aCk7XHJcbiAgICAvLyAgIGlmIChjdXJyZW50V2lkdGggPiBtaW5XaWR0aCkge1xyXG4gICAgLy8gICAgIHBhbmUuc3R5bGUud2lkdGggPSBjdXJyZW50V2lkdGggKyAncHgnO1xyXG4gICAgLy8gICAgIHBhbmUuc3R5bGUubGVmdCA9IGUuY2xpZW50WCArICdweCc7XHRcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmIChjbGlja2VkLm9uVG9wRWRnZSkge1xyXG4gICAgLy8gICB2YXIgY3VycmVudEhlaWdodCA9IE1hdGgubWF4KGNsaWNrZWQuY3kgLSBlLmNsaWVudFkgICsgY2xpY2tlZC5oLCBtaW5IZWlnaHQpO1xyXG4gICAgLy8gICBpZiAoY3VycmVudEhlaWdodCA+IG1pbkhlaWdodCkge1xyXG4gICAgLy8gICAgIHBhbmUuc3R5bGUuaGVpZ2h0ID0gY3VycmVudEhlaWdodCArICdweCc7XHJcbiAgICAvLyAgICAgcGFuZS5zdHlsZS50b3AgPSBlLmNsaWVudFkgKyAncHgnO1x0XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBoaW50SGlkZSgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4vLyAgIGlmIChjbGlja2VkICYmIGNsaWNrZWQuaXNNb3ZpbmcpIHtcclxuXHJcbi8vICAgICBpZiAoYi50b3AgPCBGVUxMU0NSRUVOX01BUkdJTlMgfHwgYi5sZWZ0IDwgRlVMTFNDUkVFTl9NQVJHSU5TIHx8IGIucmlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aCAtIEZVTExTQ1JFRU5fTUFSR0lOUyB8fCBiLmJvdHRvbSA+IHdpbmRvdy5pbm5lckhlaWdodCAtIEZVTExTQ1JFRU5fTUFSR0lOUykge1xyXG4vLyAgICAgICAvLyBoaW50RnVsbCgpO1xyXG4vLyAgICAgICBzZXRCb3VuZHMoZ2hvc3RwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuLy8gICAgICAgZ2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwLjI7XHJcbi8vICAgICB9IGVsc2UgaWYgKGIudG9wIDwgTUFSR0lOUykge1xyXG4vLyAgICAgICAvLyBoaW50VG9wKCk7XHJcbi8vICAgICAgIHNldEJvdW5kcyhnaG9zdHBhbmUsIDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcclxuLy8gICAgICAgZ2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwLjI7XHJcbi8vICAgICB9IGVsc2UgaWYgKGIubGVmdCA8IE1BUkdJTlMpIHtcclxuLy8gICAgICAgLy8gaGludExlZnQoKTtcclxuLy8gICAgICAgc2V0Qm91bmRzKGdob3N0cGFuZSwgMCwgMCwgd2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4vLyAgICAgICBnaG9zdHBhbmUuc3R5bGUub3BhY2l0eSA9IDAuMjtcclxuLy8gICAgIH0gZWxzZSBpZiAoYi5yaWdodCA+IHJpZ2h0U2NyZWVuRWRnZSkge1xyXG4vLyAgICAgICAvLyBoaW50UmlnaHQoKTtcclxuLy8gICAgICAgc2V0Qm91bmRzKGdob3N0cGFuZSwgd2luZG93LmlubmVyV2lkdGggLyAyLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbi8vICAgICAgIGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMC4yO1xyXG4vLyAgICAgfSBlbHNlIGlmIChiLmJvdHRvbSA+IGJvdHRvbVNjcmVlbkVkZ2UpIHtcclxuLy8gICAgICAgLy8gaGludEJvdHRvbSgpO1xyXG4vLyAgICAgICBzZXRCb3VuZHMoZ2hvc3RwYW5lLCAwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVyV2lkdGggLyAyKTtcclxuLy8gICAgICAgZ2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwLjI7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBoaW50SGlkZSgpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlmIChwcmVTbmFwcGVkKSB7XHJcbi8vICAgICAgIHNldEJvdW5kcyhwYW5lLFxyXG4vLyAgICAgICBcdGUuY2xpZW50WCAtIHByZVNuYXBwZWQud2lkdGggLyAyLFxyXG4vLyAgICAgICBcdGUuY2xpZW50WSAtIE1hdGgubWluKGNsaWNrZWQueSwgcHJlU25hcHBlZC5oZWlnaHQpLFxyXG4vLyAgICAgICBcdHByZVNuYXBwZWQud2lkdGgsXHJcbi8vICAgICAgIFx0cHJlU25hcHBlZC5oZWlnaHRcclxuLy8gICAgICAgKTtcclxuLy8gICAgICAgcmV0dXJuO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8vIG1vdmluZ1xyXG4vLyAgICAgcGFuZS5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gY2xpY2tlZC55KSArICdweCc7XHJcbi8vICAgICBwYW5lLnN0eWxlLmxlZnQgPSAoZS5jbGllbnRYIC0gY2xpY2tlZC54KSArICdweCc7XHJcblxyXG4vLyAgICAgcmV0dXJuO1xyXG4vLyAgIH1cclxuXHJcbiAgLy8gVGhpcyBjb2RlIGV4ZWN1dGVzIHdoZW4gbW91c2UgbW92ZXMgd2l0aG91dCBjbGlja2luZ1xyXG5cclxuICAvLyBzdHlsZSBjdXJzb3JcclxuLy8gICBpZiAob25SaWdodEVkZ2UgJiYgb25Cb3R0b21FZGdlIHx8IG9uTGVmdEVkZ2UgJiYgb25Ub3BFZGdlKSB7XHJcbi8vICAgICBwYW5lLnN0eWxlLmN1cnNvciA9ICdud3NlLXJlc2l6ZSc7XHJcbi8vICAgfVxyXG4vLyAgICBlbHNlIGlmIChvblJpZ2h0RWRnZSAmJiBvblRvcEVkZ2UgfHwgb25Cb3R0b21FZGdlICYmIG9uTGVmdEVkZ2UpIHtcclxuLy8gICAgIHBhbmUuc3R5bGUuY3Vyc29yID0gJ25lc3ctcmVzaXplJztcclxuLy8gICB9XHJcbiAgXHJcbiAgIGlmIChvblJpZ2h0RWRnZSB8fCBvbkxlZnRFZGdlKSB7XHJcbiAgICBwYW5lLnN0eWxlLmN1cnNvciA9ICdlLXJlc2l6ZSc7XHJcbiAgfSBcclxuLy8gICBlbHNlIGlmIChvbkJvdHRvbUVkZ2UgfHwgb25Ub3BFZGdlKSB7XHJcbi8vICAgICBwYW5lLnN0eWxlLmN1cnNvciA9ICducy1yZXNpemUnO1xyXG4vLyAgIH0gXHJcbi8vICAgZWxzZSBpZiAoY2FuTW92ZSgpKSB7XHJcbi8vICAgICBwYW5lLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcclxuLy8gICB9XHJcbiAgIGVsc2Uge1xyXG4gICAgcGFuZS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgfVxyXG59XHJcblxyXG5hbmltYXRlKCk7XHJcblxyXG5mdW5jdGlvbiBvblVwKGUpIHtcclxuICBjYWxjKGUpO1xyXG5cclxuICBpZiAoY2xpY2tlZCAmJiBjbGlja2VkLmlzTW92aW5nKSB7XHJcbiAgICAvLyBTbmFwXHJcbiAgICB2YXIgc25hcHBlZCA9IHtcclxuICAgICAgd2lkdGg6IGIud2lkdGgsXHJcbiAgICAgIGhlaWdodDogYi5oZWlnaHRcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGIudG9wIDwgRlVMTFNDUkVFTl9NQVJHSU5TIHx8IGIubGVmdCA8IEZVTExTQ1JFRU5fTUFSR0lOUyB8fCBiLnJpZ2h0ID4gd2luZG93LmlubmVyV2lkdGggLSBGVUxMU0NSRUVOX01BUkdJTlMgfHwgYi5ib3R0b20gPiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBGVUxMU0NSRUVOX01BUkdJTlMpIHtcclxuICAgICAgLy8gaGludEZ1bGwoKTtcclxuICAgICAgc2V0Qm91bmRzKHBhbmUsIDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICBwcmVTbmFwcGVkID0gc25hcHBlZDtcclxuICAgIH0gZWxzZSBpZiAoYi50b3AgPCBNQVJHSU5TKSB7XHJcbiAgICAgIC8vIGhpbnRUb3AoKTtcclxuICAgICAgc2V0Qm91bmRzKHBhbmUsIDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcclxuICAgICAgcHJlU25hcHBlZCA9IHNuYXBwZWQ7XHJcbiAgICB9IGVsc2UgaWYgKGIubGVmdCA8IE1BUkdJTlMpIHtcclxuICAgICAgLy8gaGludExlZnQoKTtcclxuICAgICAgc2V0Qm91bmRzKHBhbmUsIDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgcHJlU25hcHBlZCA9IHNuYXBwZWQ7XHJcbiAgICB9IGVsc2UgaWYgKGIucmlnaHQgPiByaWdodFNjcmVlbkVkZ2UpIHtcclxuICAgICAgLy8gaGludFJpZ2h0KCk7XHJcbiAgICAgIHNldEJvdW5kcyhwYW5lLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIDAsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgcHJlU25hcHBlZCA9IHNuYXBwZWQ7XHJcbiAgICB9IGVsc2UgaWYgKGIuYm90dG9tID4gYm90dG9tU2NyZWVuRWRnZSkge1xyXG4gICAgICAvLyBoaW50Qm90dG9tKCk7XHJcbiAgICAgIHNldEJvdW5kcyhwYW5lLCAwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVyV2lkdGggLyAyKTtcclxuICAgICAgcHJlU25hcHBlZCA9IHNuYXBwZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmVTbmFwcGVkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBoaW50SGlkZSgpO1xyXG5cclxuICB9XHJcblxyXG4gIGNsaWNrZWQgPSBudWxsO1xyXG5cclxufVxyXG4gIFxyXG59XHJcbiAgc2V0c3QgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVuY3k6IFwiYnJwXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgc2V0dW5zdCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW5jeTogXCJcIiB9KTtcclxuICB9O1xyXG5cclxuICBwcmljZUdldHRlciA9IChjdXJyZW5jeSkgPT4ge1xyXG4gICAgIGxldCB2YWwgPSBcIlwiO1xyXG5cclxuICAgIHJldHVybiB2YWw7XHJcbiAgfTtcclxuXHJcbiAgcHJpY2VSZXR1cm5lciA9ICgpID0+IHt9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgbGlzdCA9IFwiXCI7XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmN1cnJlbmN5KSB7XHJcbiAgICAgIGNhc2UgXCJ1c2RcIjpcclxuICAgICAgICBsaXN0ID0gXCJ1c2RcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImJycFwiOlxyXG4gICAgICAgIGxpc3QgPSBcImJycFwiO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBsaXN0ID0gXCJ1bnNldFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmJwaSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInBhbmVcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgY2xhc3NOYW1lPSdzY3JvbGwgJz5cclxuICAgICAgICAgXHJcbiAgICA8ZGl2IGlkPVwiZ2hvc3RwYW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J25hdiBmbGV4LWNvbHVtbiBuYXYtcGlsbHMgd2lkdGggcHQtNSdcclxuICAgICAgICAgICAgICBpZD0ndi1waWxscy10YWInXHJcbiAgICAgICAgICAgICAgcm9sZT0ndGFibGlzdCdcclxuICAgICAgICAgICAgICBhcmlhLW9yaWVudGF0aW9uPSd2ZXJ0aWNhbCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSduYXYtbGluayBwbC00IGFjdGl2ZSdcclxuICAgICAgICAgICAgaWQ9J3YtcGlsbHMtaG9tZS10YWInXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPSdwaWxsJ1xyXG4gICAgICAgICAgICBocmVmPScjdi1waWxscy1ob21lJ1xyXG4gICAgICAgICAgICByb2xlPSd0YWInXHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9J3YtcGlsbHMtaG9tZSdcclxuICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD0ndHJ1ZSdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3RoaXMucHJvcHMuYnBpLm1hcCgoY291bnRyaWVzKSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxDdXJyZW5jaWVzIGtleT17Y291bnRyaWVzLmN1cnJlbmN5fSBjdXJyZW5jeT17Y291bnRyaWVzLmN1cnJlbmN5fSBjb3VudHJ5PXtjb3VudHJpZXMuY291bnRyeX0gYWN0aXZlPVwiXCIgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbDggdy1taW4tY29udGVudCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWItY29udGVudCcgaWQ9J3YtcGlsbHMtdGFiQ29udGVudCc+XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZSdcclxuICAgICAgICAgICAgICAgIGlkPSd2LXBpbGxzLWhvbWUnXHJcbiAgICAgICAgICAgICAgICByb2xlPSd0YWJwYW5lbCdcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT0ndi1waWxscy1ob21lLXRhYidcclxuICAgICAgICAgICAgICA+XHJcblxyXG48SG9tZS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuYnBpLm1hcCgoY291bnRyaWVzKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UmF0ZSBrZXk9e2NvdW50cmllcy5jdXJyZW5jeX0gc2hvd0FjdGl2ZT1cIlwiIGN1cnJlbmN5PXtjb3VudHJpZXMuY3VycmVuY3l9Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcblxyXG4gICAgICAgIC53LW1pbi1jb250ZW50e1xyXG4gICAgICAgICAgd2lkdGg6IDY1dndcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcblxyXG4ubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBbZHJhZ2dhYmxlPXRydWVdIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbi5yZXNpemFibGUge1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgcmVzaXplOiBib3RoO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWF4LWhlaWdodDogNDYwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxufVxyXG5cclxuI2dob3N0cGFuZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4uY29sOHtcclxuICBmbGV4OiBhdXRvO1xyXG59XHJcblxyXG5cclxuICAgICAgICAuc2Nyb2xse1xyXG5cclxuICAgICAgXHJcbiAgICAgICAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC53aWR0aHtcclxuXHJcbiAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICNwYW5lIHtcclxuICAgICAgICAgIGZsZXg6IGluaGVyaXQ7XHJcblx0d2lkdGg6IDI1JTtcclxuICBoZWlnaHQ6IDkxdmg7XHJcblx0XHJcblx0XHJcblxyXG5cdGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjMTdhMmI4O1xyXG5cdFxyXG59XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Prices.jsx */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.af911df6d0d2c9def59e.hot-update.js.map