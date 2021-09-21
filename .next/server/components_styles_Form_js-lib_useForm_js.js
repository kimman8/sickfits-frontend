exports.id = "components_styles_Form_js-lib_useForm_js";
exports.ids = ["components_styles_Form_js-lib_useForm_js"];
exports.modules = {

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function useForm(initial = {}) {
  // create a state object for our inputs
  const {
    0: inputs,
    1: setInputs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
  const initialValues = Object.values(initial).join('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let {
      type,
      value,
      name
    } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2xpYi91c2VGb3JtLmpzIl0sIm5hbWVzIjpbImxvYWRpbmciLCJrZXlmcmFtZXMiLCJGb3JtIiwic3R5bGVkIiwidXNlRm9ybSIsImluaXRpYWwiLCJpbnB1dHMiLCJzZXRJbnB1dHMiLCJ1c2VTdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInR5cGUiLCJ2YWx1ZSIsIm5hbWUiLCJ0YXJnZXQiLCJwYXJzZUludCIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsNERBQUgsc0VBQWI7QUFZQSxNQUFNQyxJQUFJLEdBQUdDLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG10QkFzRFNILE9BdERULENBQVY7QUEyREEsK0RBQWVFLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFFZSxTQUFTRSxPQUFULENBQWlCQyxPQUFPLEdBQUcsRUFBM0IsRUFBK0I7QUFDNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLCtDQUFRLENBQUNILE9BQUQsQ0FBcEM7QUFDQSxRQUFNSSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixPQUFkLEVBQXVCTyxJQUF2QixDQUE0QixFQUE1QixDQUF0QjtBQUNBQyxrREFBUyxDQUFDLE1BQU07QUFDZE4sYUFBUyxDQUFDRixPQUFELENBQVQ7QUFDRCxHQUZRLEVBRU4sQ0FBQ0ksYUFBRCxDQUZNLENBQVQ7O0FBR0EsV0FBU0ssWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkIsUUFBSTtBQUFFQyxVQUFGO0FBQVFDLFdBQVI7QUFBZUM7QUFBZixRQUF3QkgsQ0FBQyxDQUFDSSxNQUE5Qjs7QUFDQSxRQUFJSCxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkMsV0FBSyxHQUFHRyxRQUFRLENBQUNILEtBQUQsQ0FBaEI7QUFDRDs7QUFDRCxRQUFJRCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQixPQUFDQyxLQUFELElBQVVGLENBQUMsQ0FBQ0ksTUFBRixDQUFTRSxLQUFuQjtBQUNEOztBQUNEZCxhQUFTLGlDQUVKRCxNQUZJO0FBR1AsT0FBQ1ksSUFBRCxHQUFRRDtBQUhELE9BQVQ7QUFLRDs7QUFFRCxXQUFTSyxTQUFULEdBQXFCO0FBQ25CZixhQUFTLENBQUNGLE9BQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNrQixTQUFULEdBQXFCO0FBQ25CLFVBQU1DLFVBQVUsR0FBR2QsTUFBTSxDQUFDZSxXQUFQLENBQ2pCZixNQUFNLENBQUNnQixPQUFQLENBQWVwQixNQUFmLEVBQXVCcUIsR0FBdkIsQ0FBMkIsQ0FBQyxDQUFDQyxHQUFELEVBQU1YLEtBQU4sQ0FBRCxLQUFrQixDQUFDVyxHQUFELEVBQU0sRUFBTixDQUE3QyxDQURpQixDQUFuQjtBQUdBckIsYUFBUyxDQUFDaUIsVUFBRCxDQUFUO0FBQ0Q7O0FBQ0QsU0FBTztBQUNMbEIsVUFESztBQUVMUSxnQkFGSztBQUdMUSxhQUhLO0FBSUxDO0FBSkssR0FBUDtBQU1ELEMiLCJmaWxlIjoiY29tcG9uZW50c19zdHlsZXNfRm9ybV9qcy1saWJfdXNlRm9ybV9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgIC8qIHJvdGF0ZTogMDsgKi9cclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICAgIC8qIHJvdGF0ZTogMzYwZGVnOyAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBpbnB1dCxcclxuICB0ZXh0YXJlYSxcclxuICBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbixcclxuICBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XHJcbiAgICAvKiB3aWR0aDogYXV0bzsgKi9cclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG4gIH1cclxuICBmaWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICAjZmYzMDE5IDAlLFxyXG4gICAgICAgICNlMmIwNGEgNTAlLFxyXG4gICAgICAgICNmZjMwMTkgMTAwJVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgJlthcmlhLWJ1c3k9J3RydWUnXTo6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcclxuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSkge1xyXG4gIC8vIGNyZWF0ZSBhIHN0YXRlIG9iamVjdCBmb3Igb3VyIGlucHV0c1xyXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsKS5qb2luKCcnKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xyXG4gIH0sIFtpbml0aWFsVmFsdWVzXSk7XHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGxldCB7IHR5cGUsIHZhbHVlLCBuYW1lIH0gPSBlLnRhcmdldDtcclxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcclxuICAgICAgW3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgfVxyXG4gICAgc2V0SW5wdXRzKHtcclxuICAgICAgLy8gY29weSBleGlzdGluZyBzdGF0ZVxyXG4gICAgICAuLi5pbnB1dHMsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIHNldElucHV0cyhpbml0aWFsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksICcnXSlcclxuICAgICk7XHJcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBpbnB1dHMsXHJcbiAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICByZXNldEZvcm0sXHJcbiAgICBjbGVhckZvcm0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9