(function() {
var exports = {};
exports.id = "pages/sell";
exports.ids = ["pages/sell"];
exports.modules = {

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Products */ "./components/Products.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");

var _jsxFileName = "C:\\Users\\kim\\Desktop\\js\\sickfits-frontend\\sickfits-frontend\\components\\CreateProduct.js";







const CREATE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation CREATE_PRODUCT_MUTATION(
    #which variables are getting passed in and what types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;
function CreateProduct() {
  const {
    inputs,
    handleChange,
    clearForm,
    resetForm
  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_4__.default)({
    image: '',
    name: 'shoes',
    description: 'da best shoes',
    price: 5443
  });
  const [createProduct, {
    data,
    error,
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: [{
      query: _Products__WEBPACK_IMPORTED_MODULE_6__.ALL_PRODUCTS_QUERY
    }] // so that when u refresh it automatically fetches da new queries onto the page

  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_7__.default, {
    onSubmit: async e => {
      e.preventDefault();
      const res = await createProduct();
      clearForm(); // go to that products page!

      next_router__WEBPACK_IMPORTED_MODULE_3___default().push({
        pathname: `/product/${res.data.createProduct.id}`
      });
      console.log(res.data.createProduct.id);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "image",
        children: ["Image", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "file",
          required: true,
          id: "image",
          name: "image",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          onChange: handleChange,
          value: inputs.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "Price",
          onChange: handleChange,
          value: inputs.price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          id: "description",
          name: "description",
          placeholder: "Description",
          onChange: handleChange,
          value: inputs.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "+Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/sell.js":
/*!***********************!*\
  !*** ./pages/sell.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SellPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateProduct */ "./components/CreateProduct.js");

var _jsxFileName = "C:\\Users\\kim\\Desktop\\js\\sickfits-frontend\\sickfits-frontend\\pages\\sell.js";

function SellPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ErrorMessage_js","components_Products_js","components_styles_Form_js-lib_useForm_js"], function() { return __webpack_exec__("./pages/sell.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vcGFnZXMvc2VsbC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiIsImdxbCIsIkNyZWF0ZVByb2R1Y3QiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VGb3JtIiwiaW1hZ2UiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImNyZWF0ZVByb2R1Y3QiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQUxMX1BST0RVQ1RTX1FVRVJZIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiUm91dGVyIiwicGF0aG5hbWUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJTZWxsUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsdUJBQXVCLEdBQUdDLG9EQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F2QkE7QUF5QmUsU0FBU0MsYUFBVCxHQUF5QjtBQUN0QyxRQUFNO0FBQUVDLFVBQUY7QUFBVUMsZ0JBQVY7QUFBd0JDLGFBQXhCO0FBQW1DQztBQUFuQyxNQUFpREMscURBQU8sQ0FBQztBQUM3REMsU0FBSyxFQUFFLEVBRHNEO0FBRTdEQyxRQUFJLEVBQUUsT0FGdUQ7QUFHN0RDLGVBQVcsRUFBRSxlQUhnRDtBQUk3REMsU0FBSyxFQUFFO0FBSnNELEdBQUQsQ0FBOUQ7QUFNQSxRQUFNLENBQUNDLGFBQUQsRUFBZ0I7QUFBRUMsUUFBRjtBQUFRQyxTQUFSO0FBQWVDO0FBQWYsR0FBaEIsSUFBNENDLDJEQUFXLENBQzNEaEIsdUJBRDJELEVBRTNEO0FBQ0VpQixhQUFTLEVBQUVkLE1BRGI7QUFFRWUsa0JBQWMsRUFBRSxDQUFDO0FBQUVDLFdBQUssRUFBRUMseURBQWtCQTtBQUEzQixLQUFELENBRmxCLENBRW1EOztBQUZuRCxHQUYyRCxDQUE3RDtBQU9BLHNCQUNFLDhEQUFDLGlEQUFEO0FBQ0UsWUFBUSxFQUFFLE1BQU9DLENBQVAsSUFBYTtBQUNyQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsWUFBTUMsR0FBRyxHQUFHLE1BQU1YLGFBQWEsRUFBL0I7QUFDQVAsZUFBUyxHQUhZLENBSXJCOztBQUNBbUIsNkRBQUEsQ0FBWTtBQUNWQyxnQkFBUSxFQUFHLFlBQVdGLEdBQUcsQ0FBQ1YsSUFBSixDQUFTRCxhQUFULENBQXVCYyxFQUFHO0FBRHRDLE9BQVo7QUFHQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlMLEdBQUcsQ0FBQ1YsSUFBSixDQUFTRCxhQUFULENBQXVCYyxFQUFuQztBQUNELEtBVkg7QUFBQSw0QkFZRSw4REFBQyxrREFBRDtBQUFjLFdBQUssRUFBRVo7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLGVBYUU7QUFBVSxjQUFRLEVBQUVDLE9BQXBCO0FBQTZCLG1CQUFXQSxPQUF4QztBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsa0JBQVEsTUFGVjtBQUdFLFlBQUUsRUFBQyxPQUhMO0FBSUUsY0FBSSxFQUFDLE9BSlA7QUFLRSxrQkFBUSxFQUFFWDtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFXRTtBQUFPLGVBQU8sRUFBQyxNQUFmO0FBQUEsd0NBRUU7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUUsRUFBQyxNQUZMO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxxQkFBVyxFQUFDLE1BSmQ7QUFLRSxrQkFBUSxFQUFFQSxZQUxaO0FBTUUsZUFBSyxFQUFFRCxNQUFNLENBQUNNO0FBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFzQkU7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxZQUFFLEVBQUMsT0FGTDtBQUdFLGNBQUksRUFBQyxPQUhQO0FBSUUscUJBQVcsRUFBQyxPQUpkO0FBS0Usa0JBQVEsRUFBRUwsWUFMWjtBQU1FLGVBQUssRUFBRUQsTUFBTSxDQUFDUTtBQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRixlQWlDRTtBQUFPLGVBQU8sRUFBQyxhQUFmO0FBQUEsK0NBRUU7QUFDRSxZQUFFLEVBQUMsYUFETDtBQUVFLGNBQUksRUFBQyxhQUZQO0FBR0UscUJBQVcsRUFBQyxhQUhkO0FBSUUsa0JBQVEsRUFBRVAsWUFKWjtBQUtFLGVBQUssRUFBRUQsTUFBTSxDQUFDTztBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDRixlQTJDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkRELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdEO0FBRWUsU0FBU21CLFFBQVQsR0FBb0I7QUFDakMsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7QUNSRCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9zZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZIH0gZnJvbSAnLi9Qcm9kdWN0cyc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5cclxuY29uc3QgQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04oXHJcbiAgICAjd2hpY2ggdmFyaWFibGVzIGFyZSBnZXR0aW5nIHBhc3NlZCBpbiBhbmQgd2hhdCB0eXBlcyBhcmUgdGhleVxyXG4gICAgJG5hbWU6IFN0cmluZyFcclxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nIVxyXG4gICAgJHByaWNlOiBJbnQhXHJcbiAgICAkaW1hZ2U6IFVwbG9hZFxyXG4gICkge1xyXG4gICAgY3JlYXRlUHJvZHVjdChcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6ICRuYW1lXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvblxyXG4gICAgICAgIHByaWNlOiAkcHJpY2VcclxuICAgICAgICBzdGF0dXM6IFwiQVZBSUxBQkxFXCJcclxuICAgICAgICBwaG90bzogeyBjcmVhdGU6IHsgaW1hZ2U6ICRpbWFnZSwgYWx0VGV4dDogJG5hbWUgfSB9XHJcbiAgICAgIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBpbWFnZTogJycsXHJcbiAgICBuYW1lOiAnc2hvZXMnLFxyXG4gICAgZGVzY3JpcHRpb246ICdkYSBiZXN0IHNob2VzJyxcclxuICAgIHByaWNlOiA1NDQzLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjcmVhdGVQcm9kdWN0LCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiBpbnB1dHMsXHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQUxMX1BST0RVQ1RTX1FVRVJZIH1dLCAvLyBzbyB0aGF0IHdoZW4gdSByZWZyZXNoIGl0IGF1dG9tYXRpY2FsbHkgZmV0Y2hlcyBkYSBuZXcgcXVlcmllcyBvbnRvIHRoZSBwYWdlXHJcbiAgICB9XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZVByb2R1Y3QoKTtcclxuICAgICAgICBjbGVhckZvcm0oKTtcclxuICAgICAgICAvLyBnbyB0byB0aGF0IHByb2R1Y3RzIHBhZ2UhXHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdC8ke3Jlcy5kYXRhLmNyZWF0ZVByb2R1Y3QuaWR9YCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5jcmVhdGVQcm9kdWN0LmlkKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+XHJcbiAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XHJcbiAgICAgICAgICBJbWFnZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XHJcbiAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+K0FkZCBQcm9kdWN0PC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgQ3JlYXRlUHJvZHVjdCBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsbFBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDcmVhdGVQcm9kdWN0IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==