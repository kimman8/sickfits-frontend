webpackHotUpdate_N_E("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateProduct; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");


var _jsxFileName = "C:\\Users\\kim\\Desktop\\js\\sickfits-frontend\\sickfits-frontend\\components\\CreateProduct.js",
    _s = $RefreshSig$();


function CreateProduct() {
  _s();

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])({
    name: 'shoes',
    description: 'da best shoes',
    price: 5443
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "name",
      children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "Name",
        onChange: handleChange,
        value: inputs.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "price",
      children: ["Price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "number",
        id: "price",
        name: "price",
        placeholder: "Price",
        onChange: handleChange,
        value: inputs.price
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "description",
      children: ["Description", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        id: "description",
        name: "description",
        placeholder: "Description",
        onChange: handleChange,
        value: inputs.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: clearForm,
      children: "Clear Form"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(CreateProduct, "LOtO0lHDV2LjftIddtYNHy++Tqs=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = CreateProduct;

var _c;

$RefreshReg$(_c, "CreateProduct");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNyZWF0ZVByb2R1Y3QiLCJ1c2VGb3JtIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUEsaUJBQ2lCQyw0REFBTyxDQUFDO0FBQzdEQyxRQUFJLEVBQUUsT0FEdUQ7QUFFN0RDLGVBQVcsRUFBRSxlQUZnRDtBQUc3REMsU0FBSyxFQUFFO0FBSHNELEdBQUQsQ0FEeEI7QUFBQSxNQUM5QkMsTUFEOEIsWUFDOUJBLE1BRDhCO0FBQUEsTUFDdEJDLFlBRHNCLFlBQ3RCQSxZQURzQjtBQUFBLE1BQ1JDLFNBRFEsWUFDUkEsU0FEUTtBQUFBLE1BQ0dDLFNBREgsWUFDR0EsU0FESDs7QUFNdEMsc0JBQ0U7QUFBQSw0QkFDRTtBQUFPLGFBQU8sRUFBQyxNQUFmO0FBQUEsc0NBRUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFVBQUUsRUFBQyxNQUZMO0FBR0UsWUFBSSxFQUFDLE1BSFA7QUFJRSxtQkFBVyxFQUFDLE1BSmQ7QUFLRSxnQkFBUSxFQUFFRixZQUxaO0FBTUUsYUFBSyxFQUFFRCxNQUFNLENBQUNIO0FBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVlFO0FBQU8sYUFBTyxFQUFDLE9BQWY7QUFBQSx1Q0FFRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsVUFBRSxFQUFDLE9BRkw7QUFHRSxZQUFJLEVBQUMsT0FIUDtBQUlFLG1CQUFXLEVBQUMsT0FKZDtBQUtFLGdCQUFRLEVBQUVJLFlBTFo7QUFNRSxhQUFLLEVBQUVELE1BQU0sQ0FBQ0Q7QUFOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLGVBdUJFO0FBQU8sYUFBTyxFQUFDLGFBQWY7QUFBQSw2Q0FFRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsVUFBRSxFQUFDLGFBRkw7QUFHRSxZQUFJLEVBQUMsYUFIUDtBQUlFLG1CQUFXLEVBQUMsYUFKZDtBQUtFLGdCQUFRLEVBQUVFLFlBTFo7QUFNRSxhQUFLLEVBQUVELE1BQU0sQ0FBQ0Y7QUFOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRixlQWtDRTtBQUFRLGFBQU8sRUFBRUksU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQ0Q7O0dBNUN1QlAsYTtVQUNpQ0Msb0Q7OztLQURqQ0QsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWxsLjhlOWE0N2Y1ODQ2Y2MxNzQzYjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVQcm9kdWN0KCkge1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIG5hbWU6ICdzaG9lcycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ2RhIGJlc3Qgc2hvZXMnLFxyXG4gICAgcHJpY2U6IDU0NDMsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICBOYW1lXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlxyXG4gICAgICAgIFByaWNlXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpY2VcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Y2xlYXJGb3JtfT5DbGVhciBGb3JtPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9