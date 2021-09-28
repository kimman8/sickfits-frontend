/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Checkout\": function() { return /* binding */ Checkout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/SickButton */ \"./components/styles/SickButton.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/KIM/Documents/react_projects/Advanced-React-master/sick-fits/frontend/components/Checkout.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.form.withConfig({\n  displayName: \"Checkout__CheckoutFormStyles\",\n  componentId: \"sc-10mtoy5-0\"\n})([\"box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;gap:1rem;\"]);\n_c = CheckoutFormStyles;\nvar stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__.loadStripe)(\"pk_test_51JeCltKYkG4DuFzcFEQ2CvaaSVQMAmubVn8ljIPmQYG17BgsKF4YwpQu6IYz65P5hmsZicwvpNNkC7yFYtZCDhNe004A6Cn2nw\"); // required this outside of da checkout component so that we dont accidentally require it once every single time out component loads\n\nfunction CheckoutForm() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)();\n\n  function handleSubmit(e) {\n    // 1. stop the form from submitting and turn the loader on\n    e.preventDefault();\n    console.log('we gotta do some work..');\n    setLoading(true); // 2. start the page transition\n    // 3. create the payment method via stripe (token comes back here if sucessful)\n    // 4. handle any errors from stripe\n    // 5. send the token from step 3 to our keystone server via a custom mutation\n    // 6. change the page to view the order\n    // 7. close the cart\n    // 8. turn the loader off\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutFormStyles, {\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_4__.default, {\n      children: \"Checkout Now\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CheckoutForm, \"DAO45opIqeAeFajlWz10tVx6K9A=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe];\n});\n\n_c2 = CheckoutForm;\n\nfunction Checkout() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.Elements, {\n    stripe: stripeLib,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutForm, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n\n_c3 = Checkout;\n\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CheckoutFormStyles\");\n$RefreshReg$(_c2, \"CheckoutForm\");\n$RefreshReg$(_c3, \"Checkout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcz9hODMxIl0sIm5hbWVzIjpbIkNoZWNrb3V0Rm9ybVN0eWxlcyIsInN0eWxlZCIsInN0cmlwZUxpYiIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiQ2hlY2tvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHlJQUF4QjtLQUFNRCxrQjtBQVNOLElBQU1FLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQ0MsNkdBQUQsQ0FBNUIsQyxDQUFrRTs7QUFFbEUsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNJQywrQ0FBUSxFQURaO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBQUEsbUJBRVFGLCtDQUFRLENBQUMsS0FBRCxDQUZoQjtBQUFBLE1BRWZHLE9BRmU7QUFBQSxNQUVOQyxVQUZNOztBQUd0QixNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCOztBQUVBLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3ZCO0FBQ0FBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBUCxjQUFVLENBQUMsSUFBRCxDQUFWLENBSnVCLENBS3ZCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBQ0Qsc0JBQ0UsOERBQUMsa0JBQUQ7QUFBb0IsWUFBUSxFQUFFRyxZQUE5QjtBQUFBLDRCQUNFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0F6QlFSLFk7VUFHUU8sOEQ7OztNQUhSUCxZOztBQTBCVCxTQUFTYSxRQUFULEdBQW9CO0FBQ2xCLHNCQUNFLDhEQUFDLDZEQUFEO0FBQVUsVUFBTSxFQUFFaEIsU0FBbEI7QUFBQSwyQkFDRSw4REFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7TUFOUWdCLFE7QUFRVCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hlY2tvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgRWxlbWVudHMsIHVzZVN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpY2tCdXR0b24gZnJvbSAnLi9zdHlsZXMvU2lja0J1dHRvbic7XG5cbmNvbnN0IENoZWNrb3V0Rm9ybVN0eWxlcyA9IHN0eWxlZC5mb3JtYFxuICBib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuYDtcblxuY29uc3Qgc3RyaXBlTGliID0gbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZKTsgLy8gcmVxdWlyZWQgdGhpcyBvdXRzaWRlIG9mIGRhIGNoZWNrb3V0IGNvbXBvbmVudCBzbyB0aGF0IHdlIGRvbnQgYWNjaWRlbnRhbGx5IHJlcXVpcmUgaXQgb25jZSBldmVyeSBzaW5nbGUgdGltZSBvdXQgY29tcG9uZW50IGxvYWRzXG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgLy8gMS4gc3RvcCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgYW5kIHR1cm4gdGhlIGxvYWRlciBvblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnd2UgZ290dGEgZG8gc29tZSB3b3JrLi4nKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIC8vIDIuIHN0YXJ0IHRoZSBwYWdlIHRyYW5zaXRpb25cblxuICAgIC8vIDMuIGNyZWF0ZSB0aGUgcGF5bWVudCBtZXRob2QgdmlhIHN0cmlwZSAodG9rZW4gY29tZXMgYmFjayBoZXJlIGlmIHN1Y2Vzc2Z1bClcbiAgICAvLyA0LiBoYW5kbGUgYW55IGVycm9ycyBmcm9tIHN0cmlwZVxuICAgIC8vIDUuIHNlbmQgdGhlIHRva2VuIGZyb20gc3RlcCAzIHRvIG91ciBrZXlzdG9uZSBzZXJ2ZXIgdmlhIGEgY3VzdG9tIG11dGF0aW9uXG4gICAgLy8gNi4gY2hhbmdlIHRoZSBwYWdlIHRvIHZpZXcgdGhlIG9yZGVyXG4gICAgLy8gNy4gY2xvc2UgdGhlIGNhcnRcbiAgICAvLyA4LiB0dXJuIHRoZSBsb2FkZXIgb2ZmXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tvdXRGb3JtU3R5bGVzIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPENhcmRFbGVtZW50IC8+XG4gICAgICA8U2lja0J1dHRvbj5DaGVja291dCBOb3c8L1NpY2tCdXR0b24+XG4gICAgPC9DaGVja291dEZvcm1TdHlsZXM+XG4gICk7XG59XG5mdW5jdGlvbiBDaGVja291dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVMaWJ9PlxuICAgICAgPENoZWNrb3V0Rm9ybSAvPlxuICAgIDwvRWxlbWVudHM+XG4gICk7XG59XG5cbmV4cG9ydCB7IENoZWNrb3V0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Checkout.js\n");

/***/ })

});