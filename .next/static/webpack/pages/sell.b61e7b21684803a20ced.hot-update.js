webpackHotUpdate_N_E("pages/sell",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForm; });
/* harmony import */ var C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function useForm() {
  _s();

  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // create a state object for our inputs
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initial),
      inputs = _useState[0],
      setInputs = _useState[1];

  function handleChange(e) {
    var _e$target = e.target,
        type = _e$target.type,
        value = _e$target.value,
        name = _e$target.name;

    if (type === 'number') {
      value = (Object(C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("value"), parseInt(value));
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
  }

  return {
    inputs: inputs,
    handleChange: handleChange
  };
}

_s(useForm, "0tjT+aoDVbAe0wsQZsq9AKLCE20=");

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

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9yZWFkT25seUVycm9yLmpzIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJpbml0aWFsIiwidXNlU3RhdGUiLCJpbnB1dHMiLCJzZXRJbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidHlwZSIsInZhbHVlIiwibmFtZSIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQStCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUM1QztBQUQ0QyxrQkFFaEJDLHNEQUFRLENBQUNELE9BQUQsQ0FGUTtBQUFBLE1BRXJDRSxNQUZxQztBQUFBLE1BRTdCQyxTQUY2Qjs7QUFHNUMsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFBQSxvQkFDT0EsQ0FBQyxDQUFDQyxNQURUO0FBQUEsUUFDZkMsSUFEZSxhQUNmQSxJQURlO0FBQUEsUUFDVEMsS0FEUyxhQUNUQSxLQURTO0FBQUEsUUFDRkMsSUFERSxhQUNGQSxJQURFOztBQUV2QixRQUFJRixJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkMsV0FBSyxnTUFBR0UsUUFBUSxDQUFDRixLQUFELENBQVgsQ0FBTDtBQUNEOztBQUNETCxhQUFTLGlDQUVKRCxNQUZJLDhMQUdOTyxJQUhNLEVBR0NELEtBSEQsR0FBVDtBQUtEOztBQUNELFNBQU87QUFDTE4sVUFBTSxFQUFOQSxNQURLO0FBRUxFLGdCQUFZLEVBQVpBO0FBRkssR0FBUDtBQUlEOztHQWxCdUJMLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z4QjtBQUFBO0FBQWU7QUFDZjtBQUNBLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VsbC5iNjFlN2IyMTY4NDgwM2EyMGNlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSkge1xyXG4gIC8vIGNyZWF0ZSBhIHN0YXRlIG9iamVjdCBmb3Igb3VyIGlucHV0c1xyXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgY29uc3QgeyB0eXBlLCB2YWx1ZSwgbmFtZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBzZXRJbnB1dHMoe1xyXG4gICAgICAvLyBjb3B5IGV4aXN0aW5nIHN0YXRlXHJcbiAgICAgIC4uLmlucHV0cyxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXRzLFxyXG4gICAgaGFuZGxlQ2hhbmdlLFxyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==