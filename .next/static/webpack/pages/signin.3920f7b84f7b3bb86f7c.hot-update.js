self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./components/RequestReset.js":
/*!************************************!*\
  !*** ./components/RequestReset.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RequestReset; }
/* harmony export */ });
/* harmony import */ var C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\kim\\Desktop\\js\\sickfits-frontend\\sickfits-frontend\\components\\RequestReset.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation REQUEST_RESET_MUTATION($email: String!) {\n    sendUserPasswordResetLink(email: $email) {\n      code\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var REQUEST_RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());
function RequestReset() {
  _s();

  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default)({
    email: ''
  }),
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm,
      inputs = _useForm.inputs;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation)(REQUEST_RESET_MUTATION, {
    variables: inputs // refetchQueries: [{ query: CURRENT_USER_QUERY }],

  }),
      _useMutation2 = (0,C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      signup = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  } //   const error =
  //     data?.authenticateUserWithPassword.__typename ===
  //     'UserAuthenticationWithPasswordFailure'
  //       ? data?.authenticateUserWithPassword
  //       : undefined;


  function _handleSubmit() {
    _handleSubmit = (0,C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var res;
      return C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // stop da form from submitting

              _context.next = 3;
              return signup()["catch"](console.error);

            case 3:
              res = _context.sent;
              console.log(inputs);
              console.log({
                res: res
              });
              console.log({
                data: data,
                loading: loading,
                error: error
              });
              resetForm(); // send email and password to graphql API

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_6__.default, {
    onSubmit: handleSubmit,
    method: "POST",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      children: "Forgot My Password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.createUser) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: ["Signed up using ", data.createUser.email, " - Please go ahead and sign in!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "email",
          name: "email",
          placeholder: "Your Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        type: "submit",
        children: "Request Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

_s(RequestReset, "j2HNcZAOU2f3CyTVHeWkbrHaNEE=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation];
});

_c = RequestReset;

var _c;

$RefreshReg$(_c, "RequestReset");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQuanMiXSwibmFtZXMiOlsiUkVRVUVTVF9SRVNFVF9NVVRBVElPTiIsImdxbCIsIlJlcXVlc3RSZXNldCIsInVzZUZvcm0iLCJlbWFpbCIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsImlucHV0cyIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwic2lnbnVwIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJyZXMiLCJsb2ciLCJjcmVhdGVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxzQkFBc0IsR0FBR0MsbURBQUgsbUJBQTVCO0FBU2UsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGlCQUNPQyxxREFBTyxDQUFDO0FBQ2xEQyxTQUFLLEVBQUU7QUFEMkMsR0FBRCxDQURkO0FBQUEsTUFDN0JDLFlBRDZCLFlBQzdCQSxZQUQ2QjtBQUFBLE1BQ2ZDLFNBRGUsWUFDZkEsU0FEZTtBQUFBLE1BQ0pDLE1BREksWUFDSkEsTUFESTs7QUFBQSxxQkFJTUMsNERBQVcsQ0FDcERSLHNCQURvRCxFQUVwRDtBQUNFUyxhQUFTLEVBQUVGLE1BRGIsQ0FFRTs7QUFGRixHQUZvRCxDQUpqQjtBQUFBO0FBQUEsTUFJOUJHLE1BSjhCO0FBQUE7QUFBQSxNQUlwQkMsSUFKb0Isa0JBSXBCQSxJQUpvQjtBQUFBLE1BSWRDLE9BSmMsa0JBSWRBLE9BSmM7QUFBQSxNQUlMQyxLQUpLLGtCQUlMQSxLQUpLOztBQUFBLFdBV3RCQyxZQVhzQjtBQUFBO0FBQUEsSUFxQnJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXpCcUM7QUFBQSxnWEFXckMsaUJBQTRCQyxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsZUFBQyxDQUFDQyxjQUFGLEdBREYsQ0FDc0I7O0FBRHRCO0FBQUEscUJBRW9CTixNQUFNLFdBQU4sQ0FBZU8sT0FBTyxDQUFDSixLQUF2QixDQUZwQjs7QUFBQTtBQUVRSyxpQkFGUjtBQUdFRCxxQkFBTyxDQUFDRSxHQUFSLENBQVlaLE1BQVo7QUFDQVUscUJBQU8sQ0FBQ0UsR0FBUixDQUFZO0FBQUVELG1CQUFHLEVBQUhBO0FBQUYsZUFBWjtBQUNBRCxxQkFBTyxDQUFDRSxHQUFSLENBQVk7QUFBRVIsb0JBQUksRUFBSkEsSUFBRjtBQUFRQyx1QkFBTyxFQUFQQSxPQUFSO0FBQWlCQyxxQkFBSyxFQUFMQTtBQUFqQixlQUFaO0FBQ0FQLHVCQUFTLEdBTlgsQ0FPRTs7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVhxQztBQUFBO0FBQUE7O0FBMkJyQyxzQkFDRSw4REFBQyxpREFBRDtBQUFNLFlBQVEsRUFBRVEsWUFBaEI7QUFBOEIsVUFBTSxFQUFDLE1BQXJDO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGtEQUFEO0FBQWMsV0FBSyxFQUFFRDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLGlCQUNHLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFUyxVQUFOLGtCQUNDO0FBQUEsdUNBQ21CVCxJQUFJLENBQUNTLFVBQUwsQ0FBZ0JoQixLQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQVFFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsY0FBSSxFQUFDLE9BRlA7QUFHRSxxQkFBVyxFQUFDLG9CQUhkO0FBSUUsc0JBQVksRUFBQyxPQUpmO0FBS0UsZUFBSyxFQUFFRyxNQUFNLENBQUNILEtBTGhCO0FBTUUsa0JBQVEsRUFBRUM7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBbUJFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0dBdER1QkgsWTtVQUNzQkMsaUQsRUFHREssd0Q7OztLQUpyQk4sWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uMzkyMGY3Yjg0ZjdiM2JiODZmN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5jb25zdCBSRVFVRVNUX1JFU0VUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJFUVVFU1RfUkVTRVRfTVVUQVRJT04oJGVtYWlsOiBTdHJpbmchKSB7XHJcbiAgICBzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rKGVtYWlsOiAkZW1haWwpIHtcclxuICAgICAgY29kZVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVxdWVzdFJlc2V0KCkge1xyXG4gIGNvbnN0IHsgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0sIGlucHV0cyB9ID0gdXNlRm9ybSh7XHJcbiAgICBlbWFpbDogJycsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NpZ251cCwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgUkVRVUVTVF9SRVNFVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiBpbnB1dHMsXHJcbiAgICAgIC8vIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCBkYSBmb3JtIGZyb20gc3VibWl0dGluZ1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbnVwKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG4gICAgY29uc29sZS5sb2coeyByZXMgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgICAvLyBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBncmFwaHFsIEFQSVxyXG4gIH1cclxuXHJcbiAgLy8gICBjb25zdCBlcnJvciA9XHJcbiAgLy8gICAgIGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT1cclxuICAvLyAgICAgJ1VzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZEZhaWx1cmUnXHJcbiAgLy8gICAgICAgPyBkYXRhPy5hdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkXHJcbiAgLy8gICAgICAgOiB1bmRlZmluZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgIDxoMj5Gb3Jnb3QgTXkgUGFzc3dvcmQ8L2gyPlxyXG4gICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgIHtkYXRhPy5jcmVhdGVVc2VyICYmIChcclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBTaWduZWQgdXAgdXNpbmcge2RhdGEuY3JlYXRlVXNlci5lbWFpbH0gLSBQbGVhc2UgZ28gYWhlYWQgYW5kIHNpZ25cclxuICAgICAgICAgICAgaW4hXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgRW1haWxcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZXF1ZXN0IFJlc2V0PC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9