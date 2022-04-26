"use strict";
(() => {
var exports = {};
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 8103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pages_ListFav_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2838);
/* harmony import */ var _styles_pages_ListFav_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_ListFav_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2023);
/* harmony import */ var _Components_Layout_TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2466);
/* harmony import */ var _Components_Layout_BotBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5272);
/* harmony import */ var _Components_Layout_SearchField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5750);
/* harmony import */ var _Components_misc_Place__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8029);








const getStaticProps = async ()=>{
    const data = _data_data__WEBPACK_IMPORTED_MODULE_2__/* .destinations.map */ .MQ.map((d)=>({
            destination: d.destination,
            image: d.image,
            header: d.header,
            location: d.location,
            type: d.type,
            distance: d.distance,
            fav: d.fav,
            tags: d.tags.map((t)=>({
                    id: t.id,
                    type: t.type,
                    time: t.time
                })
            )
        })
    );
    return {
        props: {
            data
        }
    };
};
function Home({ data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Explorer App | List Fav"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Explorer App is a concept of a web application for exploring the world."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#d96e1e"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Layout_TopBar__WEBPACK_IMPORTED_MODULE_3__/* .TopBar */ .D, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_pages_ListFav_module_css__WEBPACK_IMPORTED_MODULE_7___default().home),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_pages_ListFav_module_css__WEBPACK_IMPORTED_MODULE_7___default().top_bar),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Layout_SearchField__WEBPACK_IMPORTED_MODULE_5__/* .SearchField */ .U, {
                                    input: "",
                                    destination: "./searchfiled"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_pages_ListFav_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_pages_ListFav_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),
                                    children: [
                                        data.map((d)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_misc_Place__WEBPACK_IMPORTED_MODULE_6__/* .Place */ .N, {
                                                destination: `./${d.destination}`,
                                                image: d.image,
                                                location: d.location,
                                                type: d.type,
                                                distance: d.distance,
                                                fav: d.fav
                                            }, d.destination)
                                        ),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_misc_Place__WEBPACK_IMPORTED_MODULE_6__/* .Place */ .N, {
                                            destination: "./Moon",
                                            image: "https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Moon.png",
                                            location: "Moon",
                                            type: "city",
                                            distance: "384.4 Mm",
                                            fav: false
                                        }, "Moon")
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_pages_ListFav_module_css__WEBPACK_IMPORTED_MODULE_7___default().bot_bar),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Layout_BotBar__WEBPACK_IMPORTED_MODULE_4__/* .BotBar */ .j, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,466,272,351,750,914], () => (__webpack_exec__(8103)));
module.exports = __webpack_exports__;

})();