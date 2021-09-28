/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_User_js-config_js-lib_cartState_js";
exports.ids = ["components_User_js-config_js-lib_cartState_js"];
exports.modules = {

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useUser\": function() { return /* binding */ useUser; },\n/* harmony export */   \"CURRENT_USER_QUERY\": function() { return /* binding */ CURRENT_USER_QUERY; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n // import gql from 'graphql-tag';\n\nconst CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        email\n        cart {\n          id\n          quantity\n          product {\n            id\n            price\n            name\n            description\n            photo {\n              image {\n                publicUrlTransformed\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n`;\nfunction useUser() {\n  const {\n    data\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(CURRENT_USER_QUERY);\n  return data === null || data === void 0 ? void 0 : data.authenticatedItem;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VzZXIuanM/NTY1OCJdLCJuYW1lcyI6WyJDVVJSRU5UX1VTRVJfUVVFUlkiLCJncWwiLCJ1c2VVc2VyIiwiZGF0YSIsInVzZVF1ZXJ5IiwiYXV0aGVudGljYXRlZEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Q0FDQTs7QUFFQSxNQUFNQSxrQkFBa0IsR0FBR0MsK0NBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F6QkE7QUEwQk8sU0FBU0MsT0FBVCxHQUFtQjtBQUN4QixRQUFNO0FBQUVDO0FBQUYsTUFBV0Msd0RBQVEsQ0FBQ0osa0JBQUQsQ0FBekI7QUFDQSxTQUFPRyxJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRUUsaUJBQWI7QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG4vLyBpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3QgQ1VSUkVOVF9VU0VSX1FVRVJZID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgYXV0aGVudGljYXRlZEl0ZW0ge1xuICAgICAgLi4uIG9uIFVzZXIge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGVtYWlsXG4gICAgICAgIGNhcnQge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgICBwcm9kdWN0IHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHBob3RvIHtcbiAgICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlcigpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShDVVJSRU5UX1VTRVJfUVVFUlkpO1xuICByZXR1cm4gZGF0YT8uYXV0aGVudGljYXRlZEl0ZW07XG59XG5leHBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endpoint\": function() { return /* binding */ endpoint; },\n/* harmony export */   \"prodEndpoint\": function() { return /* binding */ prodEndpoint; },\n/* harmony export */   \"perPage\": function() { return /* binding */ perPage; }\n/* harmony export */ });\n// This is client side config only - don't put anything in here that shouldn't be public!\nconst endpoint = `http://localhost:3000/api/graphql`;\nconst prodEndpoint = `fill me in when we deploy`;\nconst perPage = 4;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb25maWcuanM/YTFiYyJdLCJuYW1lcyI6WyJlbmRwb2ludCIsInByb2RFbmRwb2ludCIsInBlclBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ08sTUFBTUEsUUFBUSxHQUFJLG1DQUFsQjtBQUNBLE1BQU1DLFlBQVksR0FBSSwyQkFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBaEIiLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIGNsaWVudCBzaWRlIGNvbmZpZyBvbmx5IC0gZG9uJ3QgcHV0IGFueXRoaW5nIGluIGhlcmUgdGhhdCBzaG91bGRuJ3QgYmUgcHVibGljIVxuZXhwb3J0IGNvbnN0IGVuZHBvaW50ID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbGA7XG5leHBvcnQgY29uc3QgcHJvZEVuZHBvaW50ID0gYGZpbGwgbWUgaW4gd2hlbiB3ZSBkZXBsb3lgO1xuZXhwb3J0IGNvbnN0IHBlclBhZ2UgPSA0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartStateProvider\": function() { return /* binding */ CartStateProvider; },\n/* harmony export */   \"useCart\": function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/KIM/Documents/react_projects/Advanced-React-master/sick-fits/frontend/lib/cartState.js\";\n\nconst LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst LocalStateProvider = LocalStateContext.Provider;\n\nfunction CartStateProvider({\n  children\n}) {\n  // this is our own custom provider! we will store data(state) and functionality (updates) in here and anyone can access it via the consumer!\n  const {\n    0: cartOpen,\n    1: setCartOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  function toggleCart() {\n    setCartOpen(!cartOpen);\n  }\n\n  function closeCart() {\n    setCartOpen(false);\n  }\n\n  function openCart() {\n    setCartOpen(true);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {\n    value: {\n      cartOpen,\n      setCartOpen,\n      toggleCart,\n      closeCart,\n      openCart\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n} // make a custom hook for accessing the cart local state\n\n\nfunction useCart() {\n  // we use a consumer here to access the local state\n  const all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);\n  return all;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvY2FydFN0YXRlLmpzPzdhNDQiXSwibmFtZXMiOlsiTG9jYWxTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTG9jYWxTdGF0ZVByb3ZpZGVyIiwiUHJvdmlkZXIiLCJDYXJ0U3RhdGVQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydE9wZW4iLCJzZXRDYXJ0T3BlbiIsInVzZVN0YXRlIiwidG9nZ2xlQ2FydCIsImNsb3NlQ2FydCIsIm9wZW5DYXJ0IiwidXNlQ2FydCIsImFsbCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxpQkFBaUIsZ0JBQUdDLG9EQUFhLEVBQXZDO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdGLGlCQUFpQixDQUFDRyxRQUE3Qzs7QUFFQSxTQUFTQyxpQkFBVCxDQUEyQjtBQUFFQztBQUFGLENBQTNCLEVBQXlDO0FBQ3ZDO0FBRUEsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7O0FBQ0EsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQkYsZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNEOztBQUVELFdBQVNJLFNBQVQsR0FBcUI7QUFDbkJILGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDRDs7QUFFRCxXQUFTSSxRQUFULEdBQW9CO0FBQ2xCSixlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7O0FBQ0Qsc0JBQ0UsOERBQUMsa0JBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRUQsY0FBRjtBQUFZQyxpQkFBWjtBQUF5QkUsZ0JBQXpCO0FBQXFDQyxlQUFyQztBQUFnREM7QUFBaEQsS0FEVDtBQUFBLGNBR0dOO0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QsQyxDQUNEOzs7QUFDQSxTQUFTTyxPQUFULEdBQW1CO0FBQ2pCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDZCxpQkFBRCxDQUF0QjtBQUNBLFNBQU9hLEdBQVA7QUFDRCIsImZpbGUiOiIuL2xpYi9jYXJ0U3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExvY2FsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgTG9jYWxTdGF0ZVByb3ZpZGVyID0gTG9jYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXI7XG5cbmZ1bmN0aW9uIENhcnRTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAvLyB0aGlzIGlzIG91ciBvd24gY3VzdG9tIHByb3ZpZGVyISB3ZSB3aWxsIHN0b3JlIGRhdGEoc3RhdGUpIGFuZCBmdW5jdGlvbmFsaXR5ICh1cGRhdGVzKSBpbiBoZXJlIGFuZCBhbnlvbmUgY2FuIGFjY2VzcyBpdCB2aWEgdGhlIGNvbnN1bWVyIVxuXG4gIGNvbnN0IFtjYXJ0T3Blbiwgc2V0Q2FydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBmdW5jdGlvbiB0b2dnbGVDYXJ0KCkge1xuICAgIHNldENhcnRPcGVuKCFjYXJ0T3Blbik7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUNhcnQoKSB7XG4gICAgc2V0Q2FydE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkNhcnQoKSB7XG4gICAgc2V0Q2FydE9wZW4odHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TG9jYWxTdGF0ZVByb3ZpZGVyXG4gICAgICB2YWx1ZT17eyBjYXJ0T3Blbiwgc2V0Q2FydE9wZW4sIHRvZ2dsZUNhcnQsIGNsb3NlQ2FydCwgb3BlbkNhcnQgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Mb2NhbFN0YXRlUHJvdmlkZXI+XG4gICk7XG59XG4vLyBtYWtlIGEgY3VzdG9tIGhvb2sgZm9yIGFjY2Vzc2luZyB0aGUgY2FydCBsb2NhbCBzdGF0ZVxuZnVuY3Rpb24gdXNlQ2FydCgpIHtcbiAgLy8gd2UgdXNlIGEgY29uc3VtZXIgaGVyZSB0byBhY2Nlc3MgdGhlIGxvY2FsIHN0YXRlXG4gIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpO1xuICByZXR1cm4gYWxsO1xufVxuZXhwb3J0IHsgQ2FydFN0YXRlUHJvdmlkZXIsIHVzZUNhcnQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/cartState.js\n");

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;