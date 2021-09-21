self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./components/SignUp.js":
/*!******************************!*\
  !*** ./components/SignUp.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignUp; }
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






var _jsxFileName = "C:\\Users\\kim\\Desktop\\js\\sickfits-frontend\\sickfits-frontend\\components\\SignUp.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_kim_Desktop_js_sickfits_frontend_sickfits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation SIGNUP_MUTATION(\n    $email: String!\n    $name: String!\n    $password: String!\n  ) {\n    createUser(data: { email: $email, name: $name, password: $password }) {\n      id\n      email\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());
function SignUp() {
  _s();

  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default)({
    email: '',
    name: '',
    password: ''
  }),
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm,
      inputs = _useForm.inputs;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation)(SIGNUP_MUTATION, {
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
      children: "Sign Up for an Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.createUser) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: ["Signed up using ", data.createUser.email, " - Please go ahead and sign in!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "text",
          name: "name",
          placeholder: "Your Name",
          autoComplete: "name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
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
          lineNumber: 73,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        type: "submit",
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

_s(SignUp, "j2HNcZAOU2f3CyTVHeWkbrHaNEE=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation];
});

_c = SignUp;

var _c;

$RefreshReg$(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXAuanMiXSwibmFtZXMiOlsiU0lHTlVQX01VVEFUSU9OIiwiZ3FsIiwiU2lnblVwIiwidXNlRm9ybSIsImVtYWlsIiwibmFtZSIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwiaW5wdXRzIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJzaWdudXAiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsInJlcyIsImxvZyIsImNyZWF0ZVVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MsbURBQUgsbUJBQXJCO0FBY2UsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGlCQUNhQyxxREFBTyxDQUFDO0FBQ2xEQyxTQUFLLEVBQUUsRUFEMkM7QUFFbERDLFFBQUksRUFBRSxFQUY0QztBQUdsREMsWUFBUSxFQUFFO0FBSHdDLEdBQUQsQ0FEcEI7QUFBQSxNQUN2QkMsWUFEdUIsWUFDdkJBLFlBRHVCO0FBQUEsTUFDVEMsU0FEUyxZQUNUQSxTQURTO0FBQUEsTUFDRUMsTUFERixZQUNFQSxNQURGOztBQUFBLHFCQU1ZQyw0REFBVyxDQUFDVixlQUFELEVBQWtCO0FBQ3RFVyxhQUFTLEVBQUVGLE1BRDJELENBRXRFOztBQUZzRSxHQUFsQixDQU52QjtBQUFBO0FBQUEsTUFNeEJHLE1BTndCO0FBQUE7QUFBQSxNQU1kQyxJQU5jLGtCQU1kQSxJQU5jO0FBQUEsTUFNUkMsT0FOUSxrQkFNUkEsT0FOUTtBQUFBLE1BTUNDLEtBTkQsa0JBTUNBLEtBTkQ7O0FBQUEsV0FVaEJDLFlBVmdCO0FBQUE7QUFBQSxJQW9CL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBeEIrQjtBQUFBLGdYQVUvQixpQkFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxlQUFDLENBQUNDLGNBQUYsR0FERixDQUNzQjs7QUFEdEI7QUFBQSxxQkFFb0JOLE1BQU0sV0FBTixDQUFlTyxPQUFPLENBQUNKLEtBQXZCLENBRnBCOztBQUFBO0FBRVFLLGlCQUZSO0FBR0VELHFCQUFPLENBQUNFLEdBQVIsQ0FBWVosTUFBWjtBQUNBVSxxQkFBTyxDQUFDRSxHQUFSLENBQVk7QUFBRUQsbUJBQUcsRUFBSEE7QUFBRixlQUFaO0FBQ0FELHFCQUFPLENBQUNFLEdBQVIsQ0FBWTtBQUFFUixvQkFBSSxFQUFKQSxJQUFGO0FBQVFDLHVCQUFPLEVBQVBBLE9BQVI7QUFBaUJDLHFCQUFLLEVBQUxBO0FBQWpCLGVBQVo7QUFDQVAsdUJBQVMsR0FOWCxDQU9FOztBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVitCO0FBQUE7QUFBQTs7QUEwQi9CLHNCQUNFLDhEQUFDLGlEQUFEO0FBQU0sWUFBUSxFQUFFUSxZQUFoQjtBQUE4QixVQUFNLEVBQUMsTUFBckM7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBYyxXQUFLLEVBQUVEO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsaUJBQ0csQ0FBQUYsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVTLFVBQU4sa0JBQ0M7QUFBQSx1Q0FDbUJULElBQUksQ0FBQ1MsVUFBTCxDQUFnQmxCLEtBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBT0U7QUFBTyxlQUFPLEVBQUMsTUFBZjtBQUFBLHdDQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLHFCQUFXLEVBQUMsV0FIZDtBQUlFLHNCQUFZLEVBQUMsTUFKZjtBQUtFLGVBQUssRUFBRUssTUFBTSxDQUFDSixJQUxoQjtBQU1FLGtCQUFRLEVBQUVFO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQWtCRTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUEseUNBRUU7QUFDRSxjQUFJLEVBQUMsT0FEUDtBQUVFLGNBQUksRUFBQyxPQUZQO0FBR0UscUJBQVcsRUFBQyxvQkFIZDtBQUlFLHNCQUFZLEVBQUMsT0FKZjtBQUtFLGVBQUssRUFBRUUsTUFBTSxDQUFDTCxLQUxoQjtBQU1FLGtCQUFRLEVBQUVHO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkYsZUE2QkU7QUFBTyxlQUFPLEVBQUMsVUFBZjtBQUFBLDRDQUVFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLHFCQUFXLEVBQUMsVUFIZDtBQUlFLHNCQUFZLEVBQUMsVUFKZjtBQUtFLGVBQUssRUFBRUUsTUFBTSxDQUFDSCxRQUxoQjtBQU1FLGtCQUFRLEVBQUVDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3QkYsZUF3Q0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdERDs7R0ExRXVCTCxNO1VBQ3NCQyxpRCxFQUtETyx3RDs7O0tBTnJCUixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi5mYjY1YWQ5OWYxZTNmZWZiNGUzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmNvbnN0IFNJR05VUF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBTSUdOVVBfTVVUQVRJT04oXHJcbiAgICAkZW1haWw6IFN0cmluZyFcclxuICAgICRuYW1lOiBTdHJpbmchXHJcbiAgICAkcGFzc3dvcmQ6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNyZWF0ZVVzZXIoZGF0YTogeyBlbWFpbDogJGVtYWlsLCBuYW1lOiAkbmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZCB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XHJcbiAgY29uc3QgeyBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSwgaW5wdXRzIH0gPSB1c2VGb3JtKHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzaWdudXAsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihTSUdOVVBfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogaW5wdXRzLFxyXG4gICAgLy8gcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcbiAgfSk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCBkYSBmb3JtIGZyb20gc3VibWl0dGluZ1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbnVwKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG4gICAgY29uc29sZS5sb2coeyByZXMgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgICAvLyBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBncmFwaHFsIEFQSVxyXG4gIH1cclxuXHJcbiAgLy8gICBjb25zdCBlcnJvciA9XHJcbiAgLy8gICAgIGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT1cclxuICAvLyAgICAgJ1VzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZEZhaWx1cmUnXHJcbiAgLy8gICAgICAgPyBkYXRhPy5hdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkXHJcbiAgLy8gICAgICAgOiB1bmRlZmluZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgIDxoMj5TaWduIFVwIGZvciBhbiBBY2NvdW50PC9oMj5cclxuICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+XHJcbiAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICB7ZGF0YT8uY3JlYXRlVXNlciAmJiAoXHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgU2lnbmVkIHVwIHVzaW5nIHtkYXRhLmNyZWF0ZVVzZXIuZW1haWx9IC0gUGxlYXNlIGdvIGFoZWFkIGFuZCBzaWduXHJcbiAgICAgICAgICAgIGluIVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9