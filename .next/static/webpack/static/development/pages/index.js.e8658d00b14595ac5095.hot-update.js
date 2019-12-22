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
        className: "jsx-2589799882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2589799882" + " " + 'row',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, __jsx("div", {
        id: "pane",
        draggable: "true",
        className: "jsx-2589799882" + " " + 'scroll ',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, __jsx("div", {
        id: "ghostpane",
        className: "jsx-2589799882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }), __jsx("div", {
        id: "v-pills-tab",
        role: "tablist",
        "aria-orientation": "vertical",
        className: "jsx-2589799882" + " " + 'nav flex-column nav-pills width pt-5',
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
        className: "jsx-2589799882" + " " + 'nav-link pl-4 active',
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
        className: "jsx-2589799882" + " " + 'col8 w-min-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, __jsx("div", {
        id: "v-pills-tabContent",
        className: "jsx-2589799882" + " " + 'tab-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, __jsx("div", {
        id: "v-pills-home",
        role: "tabpanel",
        "aria-labelledby": "v-pills-home-tab",
        className: "jsx-2589799882" + " " + 'tab-pane fade show active',
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
        id: "2589799882",
        __self: this
      }, ".w-min-content.jsx-2589799882{width:65vw;}.nav-pills.jsx-2589799882 .nav-link.active.jsx-2589799882,.nav-pills.jsx-2589799882 .show.jsx-2589799882>.nav-link.jsx-2589799882{color:#fff;background-color:lightblue;}.nav-link.active.jsx-2589799882{background-color:#17a2b8 !important;}[draggable=true].jsx-2589799882{cursor:move;}.resizable.jsx-2589799882{overflow:scroll;resize:both;max-width:300px;max-height:460px;border:1px solid black;min-width:50px;min-height:50px;background-color:skyblue;}#ghostpane.jsx-2589799882{display:none;height:auto;}.col8.jsx-2589799882{-webkit-flex:auto;-ms-flex:auto;flex:auto;}@media (max-width:767px){#pane.jsx-2589799882{max-width:30%;}}@media (min-width:768px){#pane.jsx-2589799882{max-width:30%;}}.scroll.jsx-2589799882{height:90vh;overflow-x:auto;}.width.jsx-2589799882{width:100%;}#pane.jsx-2589799882{-webkit-flex:inherit;-ms-flex:inherit;flex:inherit;width:25%;height:91vh;border-right:10px solid #17a2b8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxiaXRjb2luLXByaWNlXFxjb21wb25lbnRzXFxQcmljZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtYUyxBQUtRLEFBR1EsQUFNK0IsQUFJaEMsQUFJSSxBQVdILEFBSUgsQUFNRSxBQVNJLEFBT0ksQUFRZixBQUlnQixXQWxFZixBQUl1QixBQTBEdkIsQ0FoRFIsQUF5QzBCLENBMUJaLENBWWQsQUFRQSxFQS9CYyxTQVlkLEdBWGtCLEFBcUNWLFFBOUNBLEVBTFIsSUE0QkEsRUFibUIsT0ErQ1IsVUE5Q2MsQUErQ1gsWUFJbUIsV0FsRGhCLGVBQ0MsTUFtRGxCLFVBbEQyQix5QkFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYW5pZWxcXERlc2t0b3BcXGJpdGNvaW4tcHJpY2VcXGNvbXBvbmVudHNcXFByaWNlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDdXJyZW5jaWVzIGZyb20gJy4vQ3VycmVuY2llcydcclxuaW1wb3J0IFJhdGUgZnJvbSAnLi9SYXRlJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xyXG4vLyBpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNsYXNzIFByaWNlcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHt9XHJcbiAgc3RhdGUgPSB7XHJcbiAgfTtcclxuY29tcG9uZW50RGlkTW91bnQoKXtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIE1pbmltdW0gcmVzaXphYmxlIGFyZWFcclxudmFyIG1pbldpZHRoID0gNjA7XHJcbnZhciBtaW5IZWlnaHQgPSA0MDtcclxuXHJcbi8vIFRocmVzaG9sZHNcclxudmFyIEZVTExTQ1JFRU5fTUFSR0lOUyA9IC0xMDtcclxudmFyIE1BUkdJTlMgPSA0O1xyXG5cclxuLy8gRW5kIG9mIHdoYXQncyBjb25maWd1cmFibGUuXHJcbnZhciBjbGlja2VkID0gbnVsbDtcclxudmFyIG9uUmlnaHRFZGdlLCBvbkJvdHRvbUVkZ2UsIG9uTGVmdEVkZ2UsIG9uVG9wRWRnZTtcclxuXHJcbnZhciByaWdodFNjcmVlbkVkZ2UsIGJvdHRvbVNjcmVlbkVkZ2U7XHJcblxyXG52YXIgcHJlU25hcHBlZDtcclxuXHJcbnZhciBiLCB4LCB5O1xyXG5cclxudmFyIHJlZHJhdyA9IGZhbHNlO1xyXG5cclxudmFyIHBhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZScpO1xyXG52YXIgZ2hvc3RwYW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dob3N0cGFuZScpO1xyXG5cclxuZnVuY3Rpb24gc2V0Qm91bmRzKGVsZW1lbnQsIHgsIHksIHcsIGgpIHtcclxuXHRlbGVtZW50LnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcclxuXHRlbGVtZW50LnN0eWxlLnRvcCA9IHkgKyAncHgnO1xyXG5cdGVsZW1lbnQuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcclxuXHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaW50SGlkZSgpIHtcclxuICBzZXRCb3VuZHMoZ2hvc3RwYW5lLCBiLmxlZnQsIGIudG9wLCBiLndpZHRoLCBiLmhlaWdodCk7XHJcbiAgZ2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cclxuICAvLyB2YXIgYiA9IGdob3N0cGFuZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAvLyBnaG9zdHBhbmUuc3R5bGUudG9wID0gYi50b3AgKyBiLmhlaWdodCAvIDI7XHJcbiAgLy8gZ2hvc3RwYW5lLnN0eWxlLmxlZnQgPSBiLmxlZnQgKyBiLndpZHRoIC8gMjtcclxuICAvLyBnaG9zdHBhbmUuc3R5bGUud2lkdGggPSAwO1xyXG4gIC8vIGdob3N0cGFuZS5zdHlsZS5oZWlnaHQgPSAwO1xyXG59XHJcblxyXG5cclxuLy8gTW91c2UgZXZlbnRzXHJcbnBhbmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdmUpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25VcCk7XHJcblxyXG4vLyBUb3VjaCBldmVudHNcdFxyXG4vLyBwYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoRG93bik7XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBvblRvdWNoRG93bihlKSB7XHJcbi8vICAgb25Eb3duKGUudG91Y2hlc1swXSk7XHJcbi8vICAgaWYgKGUuY2FuY2VsYWJsZSkge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgfVxyXG4gIFxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBvblRvdWNoTW92ZShlKSB7XHJcbiAgb25Nb3ZlKGUudG91Y2hlc1swXSk7XHRcdFxyXG59XHJcblxyXG5mdW5jdGlvbiBvblRvdWNoRW5kKGUpIHtcclxuICBpZiAoZS50b3VjaGVzLmxlbmd0aCA9PTApIG9uVXAoZS5jaGFuZ2VkVG91Y2hlc1swXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcclxuICBvbkRvd24oZSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkRvd24oZSkge1xyXG4gIGNhbGMoZSk7XHJcblxyXG4gIHZhciBpc1Jlc2l6aW5nID0gb25SaWdodEVkZ2UgfHwgb25Cb3R0b21FZGdlIHx8IG9uVG9wRWRnZSB8fCBvbkxlZnRFZGdlO1xyXG5cclxuICBjbGlja2VkID0ge1xyXG4gICAgeDogeCxcclxuICAgIHk6IHksXHJcbiAgICBjeDogZS5jbGllbnRYLFxyXG4gICAgY3k6IGUuY2xpZW50WSxcclxuICAgIHc6IGIud2lkdGgsXHJcbiAgICBoOiBiLmhlaWdodCxcclxuICAgIGlzUmVzaXppbmc6IGlzUmVzaXppbmcsXHJcbiAgICBpc01vdmluZzogIWlzUmVzaXppbmcgJiYgY2FuTW92ZSgpLFxyXG4gICAgb25Ub3BFZGdlOiBvblRvcEVkZ2UsXHJcbiAgICBvbkxlZnRFZGdlOiBvbkxlZnRFZGdlLFxyXG4gICAgb25SaWdodEVkZ2U6IG9uUmlnaHRFZGdlLFxyXG4gICAgb25Cb3R0b21FZGdlOiBvbkJvdHRvbUVkZ2VcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5Nb3ZlKCkge1xyXG4gIHJldHVybiB4ID4gMCAmJiB4IDwgYi53aWR0aCAmJiB5ID4gMCAmJiB5IDwgYi5oZWlnaHRcclxuICAmJiB5IDwgMzA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGMoZSkge1xyXG4gIGIgPSBwYW5lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIHggPSBlLmNsaWVudFggLSBiLmxlZnQ7XHJcbiAgeSA9IGUuY2xpZW50WSAtIGIudG9wO1xyXG5cclxuICBvblRvcEVkZ2UgPSB5IDwgTUFSR0lOUztcclxuICBvbkxlZnRFZGdlID0geCA8IE1BUkdJTlM7XHJcbiAgb25SaWdodEVkZ2UgPSB4ID49IGIud2lkdGggLSBNQVJHSU5TO1xyXG4gIG9uQm90dG9tRWRnZSA9IHkgPj0gYi5oZWlnaHQgLSBNQVJHSU5TO1xyXG5cclxuICByaWdodFNjcmVlbkVkZ2UgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIE1BUkdJTlM7XHJcbiAgYm90dG9tU2NyZWVuRWRnZSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIE1BUkdJTlM7XHJcbn1cclxuXHJcbnZhciBlO1xyXG5cclxuZnVuY3Rpb24gb25Nb3ZlKGVlKSB7XHJcbiAgY2FsYyhlZSk7XHJcblxyXG4gIGUgPSBlZTtcclxuXHJcbiAgcmVkcmF3ID0gdHJ1ZTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcbiAgaWYgKCFyZWRyYXcpIHJldHVybjtcclxuXHJcbiAgcmVkcmF3ID0gZmFsc2U7XHJcblxyXG4gIGlmIChjbGlja2VkICYmIGNsaWNrZWQuaXNSZXNpemluZykge1xyXG5cclxuICAgIGlmIChjbGlja2VkLm9uUmlnaHRFZGdlKSBwYW5lLnN0eWxlLndpZHRoID0gTWF0aC5tYXgoeCwgbWluV2lkdGgpICsgJ3B4JztcclxuICAgIC8vIGlmIChjbGlja2VkLm9uQm90dG9tRWRnZSkgcGFuZS5zdHlsZS5oZWlnaHQgPSBNYXRoLm1heCh5LCBtaW5IZWlnaHQpICsgJ3B4JztcclxuXHJcbiAgICAvLyBpZiAoY2xpY2tlZC5vbkxlZnRFZGdlKSB7XHJcbiAgICAvLyAgIHZhciBjdXJyZW50V2lkdGggPSBNYXRoLm1heChjbGlja2VkLmN4IC0gZS5jbGllbnRYICArIGNsaWNrZWQudywgbWluV2lkdGgpO1xyXG4gICAgLy8gICBpZiAoY3VycmVudFdpZHRoID4gbWluV2lkdGgpIHtcclxuICAgIC8vICAgICBwYW5lLnN0eWxlLndpZHRoID0gY3VycmVudFdpZHRoICsgJ3B4JztcclxuICAgIC8vICAgICBwYW5lLnN0eWxlLmxlZnQgPSBlLmNsaWVudFggKyAncHgnO1x0XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoY2xpY2tlZC5vblRvcEVkZ2UpIHtcclxuICAgIC8vICAgdmFyIGN1cnJlbnRIZWlnaHQgPSBNYXRoLm1heChjbGlja2VkLmN5IC0gZS5jbGllbnRZICArIGNsaWNrZWQuaCwgbWluSGVpZ2h0KTtcclxuICAgIC8vICAgaWYgKGN1cnJlbnRIZWlnaHQgPiBtaW5IZWlnaHQpIHtcclxuICAgIC8vICAgICBwYW5lLnN0eWxlLmhlaWdodCA9IGN1cnJlbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgLy8gICAgIHBhbmUuc3R5bGUudG9wID0gZS5jbGllbnRZICsgJ3B4JztcdFxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaGludEhpZGUoKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuLy8gICBpZiAoY2xpY2tlZCAmJiBjbGlja2VkLmlzTW92aW5nKSB7XHJcblxyXG4vLyAgICAgaWYgKGIudG9wIDwgRlVMTFNDUkVFTl9NQVJHSU5TIHx8IGIubGVmdCA8IEZVTExTQ1JFRU5fTUFSR0lOUyB8fCBiLnJpZ2h0ID4gd2luZG93LmlubmVyV2lkdGggLSBGVUxMU0NSRUVOX01BUkdJTlMgfHwgYi5ib3R0b20gPiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBGVUxMU0NSRUVOX01BUkdJTlMpIHtcclxuLy8gICAgICAgLy8gaGludEZ1bGwoKTtcclxuLy8gICAgICAgc2V0Qm91bmRzKGdob3N0cGFuZSwgMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbi8vICAgICAgIGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMC4yO1xyXG4vLyAgICAgfSBlbHNlIGlmIChiLnRvcCA8IE1BUkdJTlMpIHtcclxuLy8gICAgICAgLy8gaGludFRvcCgpO1xyXG4vLyAgICAgICBzZXRCb3VuZHMoZ2hvc3RwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IC8gMik7XHJcbi8vICAgICAgIGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMC4yO1xyXG4vLyAgICAgfSBlbHNlIGlmIChiLmxlZnQgPCBNQVJHSU5TKSB7XHJcbi8vICAgICAgIC8vIGhpbnRMZWZ0KCk7XHJcbi8vICAgICAgIHNldEJvdW5kcyhnaG9zdHBhbmUsIDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuLy8gICAgICAgZ2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwLjI7XHJcbi8vICAgICB9IGVsc2UgaWYgKGIucmlnaHQgPiByaWdodFNjcmVlbkVkZ2UpIHtcclxuLy8gICAgICAgLy8gaGludFJpZ2h0KCk7XHJcbi8vICAgICAgIHNldEJvdW5kcyhnaG9zdHBhbmUsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgMCwgd2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4vLyAgICAgICBnaG9zdHBhbmUuc3R5bGUub3BhY2l0eSA9IDAuMjtcclxuLy8gICAgIH0gZWxzZSBpZiAoYi5ib3R0b20gPiBib3R0b21TY3JlZW5FZGdlKSB7XHJcbi8vICAgICAgIC8vIGhpbnRCb3R0b20oKTtcclxuLy8gICAgICAgc2V0Qm91bmRzKGdob3N0cGFuZSwgMCwgd2luZG93LmlubmVySGVpZ2h0IC8gMiwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIC8gMik7XHJcbi8vICAgICAgIGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMC4yO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgaGludEhpZGUoKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpZiAocHJlU25hcHBlZCkge1xyXG4vLyAgICAgICBzZXRCb3VuZHMocGFuZSxcclxuLy8gICAgICAgXHRlLmNsaWVudFggLSBwcmVTbmFwcGVkLndpZHRoIC8gMixcclxuLy8gICAgICAgXHRlLmNsaWVudFkgLSBNYXRoLm1pbihjbGlja2VkLnksIHByZVNuYXBwZWQuaGVpZ2h0KSxcclxuLy8gICAgICAgXHRwcmVTbmFwcGVkLndpZHRoLFxyXG4vLyAgICAgICBcdHByZVNuYXBwZWQuaGVpZ2h0XHJcbi8vICAgICAgICk7XHJcbi8vICAgICAgIHJldHVybjtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyBtb3ZpbmdcclxuLy8gICAgIHBhbmUuc3R5bGUudG9wID0gKGUuY2xpZW50WSAtIGNsaWNrZWQueSkgKyAncHgnO1xyXG4vLyAgICAgcGFuZS5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIGNsaWNrZWQueCkgKyAncHgnO1xyXG5cclxuLy8gICAgIHJldHVybjtcclxuLy8gICB9XHJcblxyXG4gIC8vIFRoaXMgY29kZSBleGVjdXRlcyB3aGVuIG1vdXNlIG1vdmVzIHdpdGhvdXQgY2xpY2tpbmdcclxuXHJcbiAgLy8gc3R5bGUgY3Vyc29yXHJcbi8vICAgaWYgKG9uUmlnaHRFZGdlICYmIG9uQm90dG9tRWRnZSB8fCBvbkxlZnRFZGdlICYmIG9uVG9wRWRnZSkge1xyXG4vLyAgICAgcGFuZS5zdHlsZS5jdXJzb3IgPSAnbndzZS1yZXNpemUnO1xyXG4vLyAgIH1cclxuLy8gICAgZWxzZSBpZiAob25SaWdodEVkZ2UgJiYgb25Ub3BFZGdlIHx8IG9uQm90dG9tRWRnZSAmJiBvbkxlZnRFZGdlKSB7XHJcbi8vICAgICBwYW5lLnN0eWxlLmN1cnNvciA9ICduZXN3LXJlc2l6ZSc7XHJcbi8vICAgfVxyXG4gIFxyXG4gICBpZiAob25SaWdodEVkZ2UgfHwgb25MZWZ0RWRnZSkge1xyXG4gICAgcGFuZS5zdHlsZS5jdXJzb3IgPSAnZS1yZXNpemUnO1xyXG4gIH0gXHJcbi8vICAgZWxzZSBpZiAob25Cb3R0b21FZGdlIHx8IG9uVG9wRWRnZSkge1xyXG4vLyAgICAgcGFuZS5zdHlsZS5jdXJzb3IgPSAnbnMtcmVzaXplJztcclxuLy8gICB9IFxyXG4vLyAgIGVsc2UgaWYgKGNhbk1vdmUoKSkge1xyXG4vLyAgICAgcGFuZS5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XHJcbi8vICAgfVxyXG4gICBlbHNlIHtcclxuICAgIHBhbmUuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gIH1cclxufVxyXG5cclxuYW5pbWF0ZSgpO1xyXG5cclxuZnVuY3Rpb24gb25VcChlKSB7XHJcbiAgY2FsYyhlKTtcclxuXHJcbiAgaWYgKGNsaWNrZWQgJiYgY2xpY2tlZC5pc01vdmluZykge1xyXG4gICAgLy8gU25hcFxyXG4gICAgdmFyIHNuYXBwZWQgPSB7XHJcbiAgICAgIHdpZHRoOiBiLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGIuaGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChiLnRvcCA8IEZVTExTQ1JFRU5fTUFSR0lOUyB8fCBiLmxlZnQgPCBGVUxMU0NSRUVOX01BUkdJTlMgfHwgYi5yaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gRlVMTFNDUkVFTl9NQVJHSU5TIHx8IGIuYm90dG9tID4gd2luZG93LmlubmVySGVpZ2h0IC0gRlVMTFNDUkVFTl9NQVJHSU5TKSB7XHJcbiAgICAgIC8vIGhpbnRGdWxsKCk7XHJcbiAgICAgIHNldEJvdW5kcyhwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgcHJlU25hcHBlZCA9IHNuYXBwZWQ7XHJcbiAgICB9IGVsc2UgaWYgKGIudG9wIDwgTUFSR0lOUykge1xyXG4gICAgICAvLyBoaW50VG9wKCk7XHJcbiAgICAgIHNldEJvdW5kcyhwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IC8gMik7XHJcbiAgICAgIHByZVNuYXBwZWQgPSBzbmFwcGVkO1xyXG4gICAgfSBlbHNlIGlmIChiLmxlZnQgPCBNQVJHSU5TKSB7XHJcbiAgICAgIC8vIGhpbnRMZWZ0KCk7XHJcbiAgICAgIHNldEJvdW5kcyhwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgIHByZVNuYXBwZWQgPSBzbmFwcGVkO1xyXG4gICAgfSBlbHNlIGlmIChiLnJpZ2h0ID4gcmlnaHRTY3JlZW5FZGdlKSB7XHJcbiAgICAgIC8vIGhpbnRSaWdodCgpO1xyXG4gICAgICBzZXRCb3VuZHMocGFuZSwgd2luZG93LmlubmVyV2lkdGggLyAyLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgIHByZVNuYXBwZWQgPSBzbmFwcGVkO1xyXG4gICAgfSBlbHNlIGlmIChiLmJvdHRvbSA+IGJvdHRvbVNjcmVlbkVkZ2UpIHtcclxuICAgICAgLy8gaGludEJvdHRvbSgpO1xyXG4gICAgICBzZXRCb3VuZHMocGFuZSwgMCwgd2luZG93LmlubmVySGVpZ2h0IC8gMiwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIC8gMik7XHJcbiAgICAgIHByZVNuYXBwZWQgPSBzbmFwcGVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJlU25hcHBlZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaGludEhpZGUoKTtcclxuXHJcbiAgfVxyXG5cclxuICBjbGlja2VkID0gbnVsbDtcclxuXHJcbn1cclxuICBcclxufVxyXG4gIHNldHN0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbmN5OiBcImJycFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHNldHVuc3QgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVuY3k6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpY2VHZXR0ZXIgPSAoY3VycmVuY3kpID0+IHtcclxuICAgICBsZXQgdmFsID0gXCJcIjtcclxuXHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH07XHJcblxyXG4gIHByaWNlUmV0dXJuZXIgPSAoKSA9PiB7fTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGxpc3QgPSBcIlwiO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5jdXJyZW5jeSkge1xyXG4gICAgICBjYXNlIFwidXNkXCI6XHJcbiAgICAgICAgbGlzdCA9IFwidXNkXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJicnBcIjpcclxuICAgICAgICBsaXN0ID0gXCJicnBcIjtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgbGlzdCA9IFwidW5zZXRcIjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5icGkpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJwYW5lXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIGNsYXNzTmFtZT0nc2Nyb2xsICc+XHJcbiAgICAgICAgIFxyXG4gICAgPGRpdiBpZD1cImdob3N0cGFuZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSduYXYgZmxleC1jb2x1bW4gbmF2LXBpbGxzIHdpZHRoIHB0LTUnXHJcbiAgICAgICAgICAgICAgaWQ9J3YtcGlsbHMtdGFiJ1xyXG4gICAgICAgICAgICAgIHJvbGU9J3RhYmxpc3QnXHJcbiAgICAgICAgICAgICAgYXJpYS1vcmllbnRhdGlvbj0ndmVydGljYWwnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbmF2LWxpbmsgcGwtNCBhY3RpdmUnXHJcbiAgICAgICAgICAgIGlkPSd2LXBpbGxzLWhvbWUtdGFiJ1xyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT0ncGlsbCdcclxuICAgICAgICAgICAgaHJlZj0nI3YtcGlsbHMtaG9tZSdcclxuICAgICAgICAgICAgcm9sZT0ndGFiJ1xyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPSd2LXBpbGxzLWhvbWUnXHJcbiAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9J3RydWUnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmJwaS5tYXAoKGNvdW50cmllcykgPT4gKFxyXG4gICAgICAgICAgICAgICA8Q3VycmVuY2llcyBrZXk9e2NvdW50cmllcy5jdXJyZW5jeX0gY3VycmVuY3k9e2NvdW50cmllcy5jdXJyZW5jeX0gY291bnRyeT17Y291bnRyaWVzLmNvdW50cnl9IGFjdGl2ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2w4IHctbWluLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFiLWNvbnRlbnQnIGlkPSd2LXBpbGxzLXRhYkNvbnRlbnQnPlxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmUnXHJcbiAgICAgICAgICAgICAgICBpZD0ndi1waWxscy1ob21lJ1xyXG4gICAgICAgICAgICAgICAgcm9sZT0ndGFicGFuZWwnXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J3YtcGlsbHMtaG9tZS10YWInXHJcbiAgICAgICAgICAgICAgPlxyXG5cclxuPEhvbWUvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJwaS5tYXAoKGNvdW50cmllcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFJhdGUga2V5PXtjb3VudHJpZXMuY3VycmVuY3l9IHNob3dBY3RpdmU9XCJcIiBjdXJyZW5jeT17Y291bnRyaWVzLmN1cnJlbmN5fS8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG5cclxuICAgICAgICAudy1taW4tY29udGVudHtcclxuICAgICAgICAgIHdpZHRoOiA2NXZ3XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsIC5uYXYtcGlsbHMgLnNob3c+Lm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG5cclxuLm5hdi1saW5rLmFjdGl2ZXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgW2RyYWdnYWJsZT10cnVlXSB7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcblxyXG4ucmVzaXphYmxlIHtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIHJlc2l6ZTogYm90aDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQ2MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbn1cclxuXHJcbiNnaG9zdHBhbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmNvbDh7XHJcbiAgZmxleDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgI3BhbmUge1xyXG5cclxubWF4LXdpZHRoOiAzMCU7XHJcblxyXG5cclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAjcGFuZSB7XHJcblxyXG4gICAgbWF4LXdpZHRoOiAzMCU7XHJcblxyXG59XHJcbn1cclxuICAgICAgICAuc2Nyb2xse1xyXG5cclxuICAgICAgXHJcbiAgICAgICAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC53aWR0aHtcclxuXHJcbiAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICNwYW5lIHtcclxuICAgICAgICAgIGZsZXg6IGluaGVyaXQ7XHJcblx0d2lkdGg6IDI1JTtcclxuICBoZWlnaHQ6IDkxdmg7XHJcblx0XHJcblx0XHJcblxyXG5cdGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjMTdhMmI4O1xyXG5cdFxyXG59XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Daniel\\Desktop\\bitcoin-price\\components\\Prices.jsx */"));
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
//# sourceMappingURL=index.js.e8658d00b14595ac5095.hot-update.js.map