(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");

var _jsxFileName = "C:\\Users\\kim\\Desktop\\js\\sickfits-frontend\\sickfits-frontend\\components\\Header.js";



const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;background:red;z-index:2;transform:skew(-7deg);a{color:white;text-decoration:none;text-transform:uppercase;padding:0.5rem 1rem;}"]);
const HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid var(--black,black);}"]);
function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: "Sick fits"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sub-bar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignOut */ "./components/SignOut.js");
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");


var _jsxFileName = "C:\\Users\\kim\\Desktop\\js\\sickfits-frontend\\sickfits-frontend\\components\\Nav.js";




function Nav() {
  const user = (0,_User__WEBPACK_IMPORTED_MODULE_4__.useUser)();
  console.log(user);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/products",
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/sell",
        children: "Sell"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/orders",
        children: "Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/account",
        children: "Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignOut__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this)]
    }, void 0, true), !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/signin",
      children: "Sign In"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");

var _jsxFileName = "C:\\Users\\kim\\Desktop\\js\\sickfits-frontend\\sickfits-frontend\\components\\Page.js";



const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle`
  @font-face{
    font-family: 'radnika_next';
    src:url('public/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html{
    --red: #ff0000;
    --black:#393939;
    --grey:#3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --max-width: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    font-size: 62.5%; //this is equivalent to 10px, also allows user to override  this value in their browser settings
    box-sizing: border-box;
  }

  *, *:before,*:after{
    box-sizing: inherit;

  }  

  body{
    font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding:0;
    margin:0; 
    font-size: 1.5rem;
    line-height: 2;
  }

  a{
    text-decoration: none;
    color: var(--black);
    margin-right: 1rem;
    
  }
  a:hover{
    text-decoration: underline;
    transition: 0.2s ease-in-out;
  }
  button{
    font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;
const InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
function Page({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyles, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
Page.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

/***/ }),

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignOut; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "C:\\Users\\kim\\Desktop\\js\\sickfits-frontend\\sickfits-frontend\\components\\SignOut.js";



const SIGN_OUT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation {
    endSession
  }
`;
function SignOut() {
  const [signout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(SIGN_OUT_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_3__.CURRENT_USER_QUERY
    }]
  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop da form from submitting

    const res = await signout();
    console.log({
      res
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    onClick: handleSubmit,
    children: "Sign Out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUser": function() { return /* binding */ useUser; },
/* harmony export */   "CURRENT_USER_QUERY": function() { return /* binding */ CURRENT_USER_QUERY; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
 // import gql from 'graphql-tag';

const CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    authenticatedItem {
      ... on User {
        id
        name
        email
        #TODO query the cart once we have it
      }
    }
  }
`;
function useUser() {
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}


/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:var(--lightGray);height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;text-decoration:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid var(--lightGray);width:100%;justify-content:center;font-size:1.5rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ paginationField; }
/* harmony export */ });
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");

function paginationField() {
  return {
    keyArgs: false,

    // tells apollo we will take care of everything
    read(existing = [], {
      args,
      cache
    }) {
      var _data$_allProductsMet;

      console.log({
        existing,
        args,
        cache
      });
      const {
        skip,
        first
      } = args; // read the number of items on the page from the cache

      const data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY
      });
      console.log({
        data
      });
      const count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first); // check if we have existing items

      const items = existing.slice(skip, skip + first).filter(x => x); // if there are items, just return them from the cache, and we dont need to go to the network

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        return false;
      } // fallback to network if the 2 above if statements dont work


      if (items.length) {
        return items;
      }

      return false;
    },

    merge(existing, incoming, {
      args
    }) {
      const {
        skip,
        first
      } = args; // this runs when the apollo client comes back from the network with our product

      console.log(`mergin items from network ${incoming.length} `);
      console.log({
        incoming,
        existing
      });
      const merged = existing ? existing.slice(0) : [];

      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      console.log(merged); // finally we return the merged items from the cache

      return merged;
    }

  };
}

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ "@apollo/link-error");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ "@apollo/client/react/ssr");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _paginationField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginationField */ "./lib/paginationField.js");








function createClient({
  headers,
  initialState
}) {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([(0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__.createUploadLink)({
      uri:  true ? _config__WEBPACK_IMPORTED_MODULE_5__.endpoint : 0,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allProducts: (0,_paginationField__WEBPACK_IMPORTED_MODULE_6__.default)()
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__.getDataFromTree
}));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\kim\\Desktop\\js\\sickfits-frontend\\sickfits-frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // TODO: swap with our own





next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().start());
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeError´', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());

function MyApp({
  apollo,
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_lib_withData__WEBPACK_IMPORTED_MODULE_6__.default)(MyApp));

/***/ }),

/***/ "./components/styles/nprogress.css":
/*!*****************************************!*\
  !*** ./components/styles/nprogress.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/react/ssr");;

/***/ }),

/***/ "@apollo/link-error":
/*!*************************************!*\
  !*** external "@apollo/link-error" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/link-error");;

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-upload-client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-with-apollo");;

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ErrorMessage_js","components_Pagination_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL05hdi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9TaWduT3V0LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvVXNlci5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9OYXZTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvd2l0aERhdGEuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50L3JlYWN0L3NzclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vbGluay1lcnJvclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcImFwb2xsby11cGxvYWQtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0LXdpdGgtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJMb2dvIiwic3R5bGVkIiwiSGVhZGVyU3R5bGVzIiwiSGVhZGVyIiwiTmF2IiwidXNlciIsInVzZVVzZXIiLCJjb25zb2xlIiwibG9nIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIklubmVyU3R5bGVzIiwiUGFnZSIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiU0lHTl9PVVRfTVVUQVRJT04iLCJncWwiLCJTaWduT3V0Iiwic2lnbm91dCIsInVzZU11dGF0aW9uIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImRhdGEiLCJ1c2VRdWVyeSIsImF1dGhlbnRpY2F0ZWRJdGVtIiwiTmF2U3R5bGVzIiwicGFnaW5hdGlvbkZpZWxkIiwia2V5QXJncyIsInJlYWQiLCJleGlzdGluZyIsImFyZ3MiLCJjYWNoZSIsInNraXAiLCJmaXJzdCIsInJlYWRRdWVyeSIsIlBBR0lOQVRJT05fUVVFUlkiLCJjb3VudCIsIl9hbGxQcm9kdWN0c01ldGEiLCJwYWdlIiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsIml0ZW1zIiwic2xpY2UiLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiLCJjcmVhdGVDbGllbnQiLCJoZWFkZXJzIiwiaW5pdGlhbFN0YXRlIiwiQXBvbGxvQ2xpZW50IiwibGluayIsIkFwb2xsb0xpbmsiLCJvbkVycm9yIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsImZvckVhY2giLCJtZXNzYWdlIiwibG9jYXRpb25zIiwicGF0aCIsImNyZWF0ZVVwbG9hZExpbmsiLCJ1cmkiLCJlbmRwb2ludCIsInByb2RFbmRwb2ludCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwiYWxsUHJvZHVjdHMiLCJyZXN0b3JlIiwid2l0aEFwb2xsbyIsImdldERhdGFGcm9tVHJlZSIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsIk15QXBwIiwiYXBvbGxvIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwid2l0aERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSwwTEFBVjtBQWdCQSxNQUFNQyxZQUFZLEdB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V0FBVjtBQUFxQkM7QUFBckIsQ0FBZixFQUFpRDtBQUMvQyxzQkFDRSw4REFBQywwREFBRDtBQUFnQixVQUFNLEVBQUVGLE1BQXhCO0FBQUEsMkJBQ0UsOERBQUMscURBQUQ7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFlRSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0FBRURILEtBQUssQ0FBQ0ksZUFBTixHQUF3QixnQkFBZ0I7QUFBRUYsV0FBRjtBQUFhRztBQUFiLENBQWhCLEVBQW9DO0FBQzFELE1BQUlGLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxNQUFJRCxTQUFTLENBQUNFLGVBQWQsRUFBK0I7QUFDN0JELGFBQVMsR0FBRyxNQUFNRCxTQUFTLENBQUNFLGVBQVYsQ0FBMEJDLEdBQTFCLENBQWxCO0FBQ0Q7O0FBQ0RGLFdBQVMsQ0FBQ25FLEtBQVYsR0FBa0JxRSxHQUFHLENBQUNyRSxLQUF0QjtBQUNBLFNBQU87QUFBRW1FO0FBQUYsR0FBUDtBQUNELENBUEQ7O0FBU0EsK0RBQWVHLHNEQUFRLENBQUNOLEtBQUQsQ0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLDRDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XHJcblxyXG5jb25zdCBMb2dvID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC03ZGVnKTtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyU3R5bGVzID0gc3R5bGVkLmhlYWRlcmBcclxuICAuYmFyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdmFyKC0tYmxhY2ssIGJsYWNrKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG5cclxuICAuc3ViLWJhciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjaywgYmxhY2spO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWRlclN0eWxlcz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cclxuICAgICAgICA8TG9nbz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+U2ljayBmaXRzPC9MaW5rPlxyXG4gICAgICAgIDwvTG9nbz5cclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1iYXJcIj5cclxuICAgICAgICA8cD5TZWFyY2g8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9IZWFkZXJTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgU2lnbk91dCBmcm9tICcuL1NpZ25PdXQnO1xyXG5pbXBvcnQgTmF2U3R5bGVzIGZyb20gJy4vc3R5bGVzL05hdlN0eWxlcyc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc29sZS5sb2codXNlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZTdHlsZXM+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5Qcm9kdWN0czwvTGluaz5cclxuICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlbGxcIj5TZWxsPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9vcmRlcnNcIj5PcmRlcnM8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnRcIj5BY2NvdW50PC9MaW5rPlxyXG4gICAgICAgICAgPFNpZ25PdXQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAgeyF1c2VyICYmIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+U2lnbiBJbjwvTGluaz59XHJcbiAgICA8L05hdlN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICBAZm9udC1mYWNle1xyXG4gICAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnO1xyXG4gICAgc3JjOnVybCgncHVibGljL3N0YXRpYy9yYWRuaWthbmV4dC1tZWRpdW0td2ViZm9udC53b2ZmMicpXHJcbiAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgaHRtbHtcclxuICAgIC0tcmVkOiAjZmYwMDAwO1xyXG4gICAgLS1ibGFjazojMzkzOTM5O1xyXG4gICAgLS1ncmV5OiMzQTNBM0E7XHJcbiAgICAtLWdyYXk6IHZhcigtLWdyZXkpO1xyXG4gICAgLS1saWdodEdyZXk6ICNlMWUxZTE7XHJcbiAgICAtLWxpZ2h0R3JheTogdmFyKC0tbGlnaHRHcmV5KTtcclxuICAgIC0tb2ZmV2hpdGU6ICNlZGVkZWQ7XHJcbiAgICAtLW1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgLS1iczogMCAxMnB4IDI0cHggMCByZ2JhKDAsMCwwLDAuMDkpO1xyXG4gICAgZm9udC1zaXplOiA2Mi41JTsgLy90aGlzIGlzIGVxdWl2YWxlbnQgdG8gMTBweCwgYWxzbyBhbGxvd3MgdXNlciB0byBvdmVycmlkZSAgdGhpcyB2YWx1ZSBpbiB0aGVpciBicm93c2VyIHNldHRpbmdzXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgKiwgKjpiZWZvcmUsKjphZnRlcntcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcblxyXG4gIH0gIFxyXG5cclxuICBib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnLCAtLS1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjowOyBcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgfVxyXG5cclxuICBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIFxyXG4gIH1cclxuICBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBmb250LWZhbWlseTogJ3JhZG5pa2FfbmV4dCcsIC0tLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbmA7XHJcblxyXG5jb25zdCBJbm5lclN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXhXaWR0aCk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMnJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxJbm5lclN0eWxlcz57Y2hpbGRyZW59PC9Jbm5lclN0eWxlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblBhZ2UucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XHJcblxyXG5jb25zdCBTSUdOX09VVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiB7XHJcbiAgICBlbmRTZXNzaW9uXHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduT3V0KCkge1xyXG4gIGNvbnN0IFtzaWdub3V0XSA9IHVzZU11dGF0aW9uKFNJR05fT1VUX01VVEFUSU9OLCB7XHJcbiAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICB9KTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCBkYSBmb3JtIGZyb20gc3VibWl0dGluZ1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbm91dCgpO1xyXG4gICAgY29uc29sZS5sb2coeyByZXMgfSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICBTaWduIE91dFxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG4vLyBpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmNvbnN0IENVUlJFTlRfVVNFUl9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBhdXRoZW50aWNhdGVkSXRlbSB7XHJcbiAgICAgIC4uLiBvbiBVc2VyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgICNUT0RPIHF1ZXJ5IHRoZSBjYXJ0IG9uY2Ugd2UgaGF2ZSBpdFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlcigpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KENVUlJFTlRfVVNFUl9RVUVSWSk7XHJcbiAgcmV0dXJuIGRhdGE/LmF1dGhlbnRpY2F0ZWRJdGVtO1xyXG59XHJcbmV4cG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE5hdlN0eWxlcyA9IHN0eWxlZC51bGBcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBhLFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRHcmF5KTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMjBkZWcpO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzO1xyXG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEsIC0wLjY1LCAwLCAyLjMxKTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2U3R5bGVzO1xyXG4iLCJpbXBvcnQgeyBQQUdJTkFUSU9OX1FVRVJZIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRpb25GaWVsZCgpIHtcclxuICByZXR1cm4ge1xyXG4gICAga2V5QXJnczogZmFsc2UsIC8vIHRlbGxzIGFwb2xsbyB3ZSB3aWxsIHRha2UgY2FyZSBvZiBldmVyeXRoaW5nXHJcbiAgICByZWFkKGV4aXN0aW5nID0gW10sIHsgYXJncywgY2FjaGUgfSkge1xyXG4gICAgICBjb25zb2xlLmxvZyh7IGV4aXN0aW5nLCBhcmdzLCBjYWNoZSB9KTtcclxuICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcclxuICAgICAgLy8gcmVhZCB0aGUgbnVtYmVyIG9mIGl0ZW1zIG9uIHRoZSBwYWdlIGZyb20gdGhlIGNhY2hlXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkUXVlcnkoeyBxdWVyeTogUEFHSU5BVElPTl9RVUVSWSB9KTtcclxuICAgICAgY29uc29sZS5sb2coeyBkYXRhIH0pO1xyXG4gICAgICBjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGE/LmNvdW50O1xyXG4gICAgICBjb25zdCBwYWdlID0gc2tpcCAvIGZpcnN0ICsgMTtcclxuICAgICAgY29uc3QgcGFnZXMgPSBNYXRoLmNlaWwoY291bnQgLyBmaXJzdCk7XHJcblxyXG4gICAgICAvLyBjaGVjayBpZiB3ZSBoYXZlIGV4aXN0aW5nIGl0ZW1zXHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gZXhpc3Rpbmcuc2xpY2Uoc2tpcCwgc2tpcCArIGZpcnN0KS5maWx0ZXIoKHgpID0+IHgpO1xyXG5cclxuICAgICAgLy8gaWYgdGhlcmUgYXJlIGl0ZW1zLCBqdXN0IHJldHVybiB0aGVtIGZyb20gdGhlIGNhY2hlLCBhbmQgd2UgZG9udCBuZWVkIHRvIGdvIHRvIHRoZSBuZXR3b3JrXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggJiYgaXRlbXMubGVuZ3RoICE9PSBmaXJzdCAmJiBwYWdlID09PSBwYWdlcykge1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoICE9PSBmaXJzdCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSAvLyBmYWxsYmFjayB0byBuZXR3b3JrIGlmIHRoZSAyIGFib3ZlIGlmIHN0YXRlbWVudHMgZG9udCB3b3JrXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZywgeyBhcmdzIH0pIHtcclxuICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcclxuICAgICAgLy8gdGhpcyBydW5zIHdoZW4gdGhlIGFwb2xsbyBjbGllbnQgY29tZXMgYmFjayBmcm9tIHRoZSBuZXR3b3JrIHdpdGggb3VyIHByb2R1Y3RcclxuICAgICAgY29uc29sZS5sb2coYG1lcmdpbiBpdGVtcyBmcm9tIG5ldHdvcmsgJHtpbmNvbWluZy5sZW5ndGh9IGApO1xyXG4gICAgICBjb25zb2xlLmxvZyh7IGluY29taW5nLCBleGlzdGluZyB9KTtcclxuICAgICAgY29uc3QgbWVyZ2VkID0gZXhpc3RpbmcgPyBleGlzdGluZy5zbGljZSgwKSA6IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gc2tpcDsgaSA8IHNraXAgKyBpbmNvbWluZy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIG1lcmdlZFtpXSA9IGluY29taW5nW2kgLSBza2lwXTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhtZXJnZWQpO1xyXG4gICAgICAvLyBmaW5hbGx5IHdlIHJldHVybiB0aGUgbWVyZ2VkIGl0ZW1zIGZyb20gdGhlIGNhY2hlXHJcbiAgICAgIHJldHVybiBtZXJnZWQ7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9MaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSAnQGFwb2xsby9saW5rLWVycm9yJztcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyJztcclxuaW1wb3J0IHsgY3JlYXRlVXBsb2FkTGluayB9IGZyb20gJ2Fwb2xsby11cGxvYWQtY2xpZW50JztcclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnbmV4dC13aXRoLWFwb2xsbyc7XHJcbmltcG9ydCB7IGVuZHBvaW50LCBwcm9kRW5kcG9pbnQgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgcGFnaW5hdGlvbkZpZWxkIGZyb20gJy4vcGFnaW5hdGlvbkZpZWxkJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudCh7IGhlYWRlcnMsIGluaXRpYWxTdGF0ZSB9KSB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgbGluazogQXBvbGxvTGluay5mcm9tKFtcclxuICAgICAgb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xyXG4gICAgICAgIGlmIChncmFwaFFMRXJyb3JzKVxyXG4gICAgICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGlmIChuZXR3b3JrRXJyb3IpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYFtOZXR3b3JrIGVycm9yXTogJHtuZXR3b3JrRXJyb3J9LiBCYWNrZW5kIGlzIHVucmVhY2hhYmxlLiBJcyBpdCBydW5uaW5nP2BcclxuICAgICAgICAgICk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyB0aGlzIHVzZXMgYXBvbGxvLWxpbmstaHR0cCB1bmRlciB0aGUgaG9vZCwgc28gYWxsIHRoZSBvcHRpb25zIGhlcmUgY29tZSBmcm9tIHRoYXQgcGFja2FnZVxyXG4gICAgICBjcmVhdGVVcGxvYWRMaW5rKHtcclxuICAgICAgICB1cmk6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gZW5kcG9pbnQgOiBwcm9kRW5kcG9pbnQsXHJcbiAgICAgICAgZmV0Y2hPcHRpb25zOiB7XHJcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gcGFzcyB0aGUgaGVhZGVycyBhbG9uZyBmcm9tIHRoaXMgcmVxdWVzdC4gVGhpcyBlbmFibGVzIFNTUiB3aXRoIGxvZ2dlZCBpbiBzdGF0ZVxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgIH0pLFxyXG4gICAgXSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xyXG4gICAgICB0eXBlUG9saWNpZXM6IHtcclxuICAgICAgICBRdWVyeToge1xyXG4gICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIGFsbFByb2R1Y3RzOiBwYWdpbmF0aW9uRmllbGQoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhjcmVhdGVDbGllbnQsIHsgZ2V0RGF0YUZyb21UcmVlIH0pO1xyXG4iLCJpbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5cclxuLy8gVE9ETzogc3dhcCB3aXRoIG91ciBvd25cclxuXHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zdHlsZXMvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJztcclxuaW1wb3J0IHsgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9ywrQnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgYXBvbGxvLCBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XHJcbiAgICAgIDxQYWdlPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoeyBDb21wb25lbnQsIGN0eCB9KSB7XHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgfVxyXG4gIHBhZ2VQcm9wcy5xdWVyeSA9IGN0eC5xdWVyeTtcclxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKE15QXBwKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L3JlYWN0L3NzclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9saW5rLWVycm9yXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtd2l0aC1hcG9sbG9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9