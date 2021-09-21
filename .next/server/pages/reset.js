/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/reset";
exports.ids = ["pages/reset"];
exports.modules = {

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reset; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n\nvar _jsxFileName = \"/Users/KIM/Documents/react_projects/Advanced-React-master/sick-fits/frontend/components/Reset.js\";\n\n\n\n\n\n\n\nconst RESET_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  mutation RESET_MUTATION(\n    $email: String!\n    $token: String!\n    $password: String!\n  ) {\n    redeemUserPasswordResetToken(\n      email: $email\n      token: $token\n      password: $password\n    ) {\n      code\n      message\n    }\n  }\n`;\nfunction Reset({\n  token\n}) {\n  var _data$redeemUserPassw;\n\n  const {\n    handleChange,\n    resetForm,\n    inputs\n  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default)({\n    email: '',\n    password: '',\n    token\n  });\n  const [reset, {\n    data,\n    loading,\n    error\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(RESET_MUTATION, {\n    variables: inputs // refetchQueries: [{ query: CURRENT_USER_QUERY }],\n\n  });\n  const successfulError = data !== null && data !== void 0 && (_data$redeemUserPassw = data.redeemUserPasswordResetToken) !== null && _data$redeemUserPassw !== void 0 && _data$redeemUserPassw.code ? data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken : undefined;\n  console.log(successfulError);\n\n  async function handleSubmit(e) {\n    e.preventDefault(); // stop da form from submitting\n\n    const res = await reset().catch(console.error);\n    console.log(inputs);\n    console.log({\n      res\n    });\n    console.log({\n      data,\n      loading,\n      error\n    });\n    resetForm(); // send email and password to graphql API\n  } //   const error =\n  //     data?.authenticateUserWithPassword.__typename ===\n  //     'UserAuthenticationWithPasswordFailure'\n  //       ? data?.authenticateUserWithPassword\n  //       : undefined;\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_4__.default, {\n    onSubmit: handleSubmit,\n    method: \"POST\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: \"Reset your password\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__.default, {\n      error: error || successfulError\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Success! You can now sign in!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"email\",\n        children: [\"Email\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"Your Email Address\",\n          autoComplete: \"email\",\n          value: inputs.email,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"password\",\n        children: [\"Password\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Password\",\n          autoComplete: \"password\",\n          value: inputs.password,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Request Reset\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Jlc2V0LmpzP2EwODAiXSwibmFtZXMiOlsiUkVTRVRfTVVUQVRJT04iLCJncWwiLCJSZXNldCIsInRva2VuIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwiaW5wdXRzIiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNldCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInN1Y2Nlc3NmdWxFcnJvciIsInJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4iLCJjb2RlIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0Msb0RBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZkE7QUFpQmUsU0FBU0MsS0FBVCxDQUFlO0FBQUVDO0FBQUYsQ0FBZixFQUEwQjtBQUFBOztBQUN2QyxRQUFNO0FBQUVDLGdCQUFGO0FBQWdCQyxhQUFoQjtBQUEyQkM7QUFBM0IsTUFBc0NDLHFEQUFPLENBQUM7QUFDbERDLFNBQUssRUFBRSxFQUQyQztBQUVsREMsWUFBUSxFQUFFLEVBRndDO0FBR2xETjtBQUhrRCxHQUFELENBQW5EO0FBS0EsUUFBTSxDQUFDTyxLQUFELEVBQVE7QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQztBQUFqQixHQUFSLElBQW9DQywyREFBVyxDQUFDZCxjQUFELEVBQWlCO0FBQ3BFZSxhQUFTLEVBQUVULE1BRHlELENBRXBFOztBQUZvRSxHQUFqQixDQUFyRDtBQUlBLFFBQU1VLGVBQWUsR0FBR0wsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiw2QkFBQUEsSUFBSSxDQUFFTSw0QkFBTix3RUFBb0NDLElBQXBDLEdBQ3BCUCxJQURvQixhQUNwQkEsSUFEb0IsdUJBQ3BCQSxJQUFJLENBQUVNLDRCQURjLEdBRXBCRSxTQUZKO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxlQUFaOztBQUNBLGlCQUFlTSxZQUFmLENBQTRCQyxDQUE1QixFQUErQjtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGLEdBRDZCLENBQ1Q7O0FBQ3BCLFVBQU1DLEdBQUcsR0FBRyxNQUFNZixLQUFLLEdBQUdnQixLQUFSLENBQWNOLE9BQU8sQ0FBQ1AsS0FBdEIsQ0FBbEI7QUFDQU8sV0FBTyxDQUFDQyxHQUFSLENBQVlmLE1BQVo7QUFDQWMsV0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUk7QUFBRixLQUFaO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVWLFVBQUY7QUFBUUMsYUFBUjtBQUFpQkM7QUFBakIsS0FBWjtBQUNBUixhQUFTLEdBTm9CLENBTzdCO0FBQ0QsR0F2QnNDLENBeUJ2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxzQkFDRSw4REFBQyxpREFBRDtBQUFNLFlBQVEsRUFBRWlCLFlBQWhCO0FBQThCLFVBQU0sRUFBQyxNQUFyQztBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxrREFBRDtBQUFjLFdBQUssRUFBRVQsS0FBSyxJQUFJRztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLGlCQUNHLENBQUFMLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFTSw0QkFBTixNQUF1QyxJQUF2QyxpQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBS0U7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxjQUFJLEVBQUMsT0FGUDtBQUdFLHFCQUFXLEVBQUMsb0JBSGQ7QUFJRSxzQkFBWSxFQUFDLE9BSmY7QUFLRSxlQUFLLEVBQUVYLE1BQU0sQ0FBQ0UsS0FMaEI7QUFNRSxrQkFBUSxFQUFFSjtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFnQkU7QUFBTyxlQUFPLEVBQUMsVUFBZjtBQUFBLDRDQUVFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLHFCQUFXLEVBQUMsVUFIZDtBQUlFLHNCQUFZLEVBQUMsVUFKZjtBQUtFLGVBQUssRUFBRUUsTUFBTSxDQUFDRyxRQUxoQjtBQU1FLGtCQUFRLEVBQUVMO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkYsZUEyQkU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1DRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVzZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuXG5jb25zdCBSRVNFVF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gUkVTRVRfTVVUQVRJT04oXG4gICAgJGVtYWlsOiBTdHJpbmchXG4gICAgJHRva2VuOiBTdHJpbmchXG4gICAgJHBhc3N3b3JkOiBTdHJpbmchXG4gICkge1xuICAgIHJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4oXG4gICAgICBlbWFpbDogJGVtYWlsXG4gICAgICB0b2tlbjogJHRva2VuXG4gICAgICBwYXNzd29yZDogJHBhc3N3b3JkXG4gICAgKSB7XG4gICAgICBjb2RlXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNldCh7IHRva2VuIH0pIHtcbiAgY29uc3QgeyBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSwgaW5wdXRzIH0gPSB1c2VGb3JtKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIHRva2VuLFxuICB9KTtcbiAgY29uc3QgW3Jlc2V0LCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oUkVTRVRfTVVUQVRJT04sIHtcbiAgICB2YXJpYWJsZXM6IGlucHV0cyxcbiAgICAvLyByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcbiAgfSk7XG4gIGNvbnN0IHN1Y2Nlc3NmdWxFcnJvciA9IGRhdGE/LnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4/LmNvZGVcbiAgICA/IGRhdGE/LnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW5cbiAgICA6IHVuZGVmaW5lZDtcblxuICBjb25zb2xlLmxvZyhzdWNjZXNzZnVsRXJyb3IpO1xuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCBkYSBmb3JtIGZyb20gc3VibWl0dGluZ1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc2V0KCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgY29uc29sZS5sb2coaW5wdXRzKTtcbiAgICBjb25zb2xlLmxvZyh7IHJlcyB9KTtcbiAgICBjb25zb2xlLmxvZyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pO1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIC8vIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIGdyYXBocWwgQVBJXG4gIH1cblxuICAvLyAgIGNvbnN0IGVycm9yID1cbiAgLy8gICAgIGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT1cbiAgLy8gICAgICdVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlJ1xuICAvLyAgICAgICA/IGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmRcbiAgLy8gICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8aDI+UmVzZXQgeW91ciBwYXNzd29yZDwvaDI+XG4gICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvciB8fCBzdWNjZXNzZnVsRXJyb3J9IC8+XG4gICAgICA8ZmllbGRzZXQ+XG4gICAgICAgIHtkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuID09PSBudWxsICYmIChcbiAgICAgICAgICA8cD5TdWNjZXNzISBZb3UgY2FuIG5vdyBzaWduIGluITwvcD5cbiAgICAgICAgKX1cblxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgRW1haWxcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVxdWVzdCBSZXNldDwvYnV0dG9uPlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Reset.js\n");

/***/ }),

/***/ "./pages/reset.js":
/*!************************!*\
  !*** ./pages/reset.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResetPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/RequestReset */ \"./components/RequestReset.js\");\n/* harmony import */ var _components_Reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Reset */ \"./components/Reset.js\");\n\nvar _jsxFileName = \"/Users/KIM/Documents/react_projects/Advanced-React-master/sick-fits/frontend/pages/reset.js\";\n\n\nfunction ResetPage({\n  query\n}) {\n  if (!(query !== null && query !== void 0 && query.token)) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Sorry u must supply a token!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestReset__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"RESET YOUR PASSWORD \", query.token]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Reset__WEBPACK_IMPORTED_MODULE_2__.default, {\n      token: query.token\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9yZXNldC5qcz80YzgxIl0sIm5hbWVzIjpbIlJlc2V0UGFnZSIsInF1ZXJ5IiwidG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQjtBQUFFQztBQUFGLENBQW5CLEVBQThCO0FBQzNDLE1BQUksRUFBQ0EsS0FBRCxhQUFDQSxLQUFELGVBQUNBLEtBQUssQ0FBRUMsS0FBUixDQUFKLEVBQW1CO0FBQ2pCLHdCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQU1EOztBQUNELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSx5Q0FBd0JELEtBQUssQ0FBQ0MsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxzREFBRDtBQUFPLFdBQUssRUFBRUQsS0FBSyxDQUFDQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRCIsImZpbGUiOiIuL3BhZ2VzL3Jlc2V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcXVlc3RSZXNldCBmcm9tICcuLi9jb21wb25lbnRzL1JlcXVlc3RSZXNldCc7XG5pbXBvcnQgUmVzZXQgZnJvbSAnLi4vY29tcG9uZW50cy9SZXNldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2V0UGFnZSh7IHF1ZXJ5IH0pIHtcbiAgaWYgKCFxdWVyeT8udG9rZW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+U29ycnkgdSBtdXN0IHN1cHBseSBhIHRva2VuITwvcD5cbiAgICAgICAgPFJlcXVlc3RSZXNldCAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5SRVNFVCBZT1VSIFBBU1NXT1JEIHtxdWVyeS50b2tlbn08L3A+XG4gICAgICA8UmVzZXQgdG9rZW49e3F1ZXJ5LnRva2VufSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/reset.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js-components_User_js","components_RequestReset_js"], function() { return __webpack_exec__("./pages/reset.js"); });
module.exports = __webpack_exports__;

})();