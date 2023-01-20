"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ModalCookies)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "cookies-next"
const external_cookies_next_namespaceObject = require("cookies-next");
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
;// CONCATENATED MODULE: ./src/components/ModalCookies/index.tsx




const ModalCookies = ()=>{
    const { 0: coookieTrue , 1: setCookieTrue  } = (0,external_react_.useState)(false);
    const { t , i18n  } = (0,external_react_i18next_.useTranslation)();
    (0,external_react_.useEffect)(()=>{
        getCookies();
    }, []);
    async function handleCookie() {
        const cookie = (0,external_cookies_next_namespaceObject.setCookie)("authorization", "authorized");
        setCookieTrue(true);
    }
    function getCookies() {
        setCookieTrue(!!(0,external_cookies_next_namespaceObject.getCookie)("authorization"));
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `containerCookie ${coookieTrue && "coke"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "infoCookie",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    dangerouslySetInnerHTML: {
                        __html: t("modal_cookies", {
                            interpolation: {
                                escapeValue: false
                            }
                        })
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "buttonDefault full",
                onClick: ()=>{
                    handleCookie();
                },
                children: t("modal_cookies_button")
            })
        ]
    });
};
/* harmony default export */ const components_ModalCookies = (ModalCookies);


/***/ }),

/***/ 2619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WppBtn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2601);


function WppBtn() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "https://wa.me/5511945678190",
        target: "_blank",
        className: "pulse",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_icons__WEBPACK_IMPORTED_MODULE_1__/* .WppIcon */ .Hb, {
            size: 60
        })
    });
}


/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1576);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ModalCookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4499);
/* harmony import */ var _components_WppBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2619);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _i18n__WEBPACK_IMPORTED_MODULE_3__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _i18n__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    if (router.locale) {
        _i18n__WEBPACK_IMPORTED_MODULE_3__/* ["default"].changeLanguage */ .Z.changeLanguage(router.locale);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=500px,user-scalable=no"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WppBtn__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalCookies__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [21], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();