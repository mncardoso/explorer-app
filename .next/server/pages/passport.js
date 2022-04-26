(() => {
var exports = {};
exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 3696:
/***/ ((module) => {

// Exports
module.exports = {
	"stamp": "Stamp_stamp__mKxrT"
};


/***/ }),

/***/ 4569:
/***/ ((module) => {

// Exports
module.exports = {
	"home": "Passport_home__2IXC2",
	"image_header": "Passport_image_header__LQR8U",
	"info": "Passport_info__Gb0jx",
	"line": "Passport_line___CmnY",
	"content": "Passport_content__is8sz",
	"bot_bar": "Passport_bot_bar__j_hZY"
};


/***/ }),

/***/ 437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Passport),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/pages/Passport.module.css
var Passport_module = __webpack_require__(4569);
var Passport_module_default = /*#__PURE__*/__webpack_require__.n(Passport_module);
// EXTERNAL MODULE: ./data/data.js
var data_data = __webpack_require__(2023);
// EXTERNAL MODULE: ./Components/Layout/TopBar.js + 1 modules
var TopBar = __webpack_require__(2466);
// EXTERNAL MODULE: ./Components/Layout/BotBar.js
var BotBar = __webpack_require__(5272);
// EXTERNAL MODULE: ./styles/misc/Stamp.module.css
var Stamp_module = __webpack_require__(3696);
var Stamp_module_default = /*#__PURE__*/__webpack_require__.n(Stamp_module);
;// CONCATENATED MODULE: ./Components/misc/Stamp.js


let Stamp = (image, destination)=>{
    return destination === "" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Stamp_module_default()).stamp
    }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: destination,
        className: (Stamp_module_default()).stamp,
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: image,
            alt: ""
        })
    });
};

;// CONCATENATED MODULE: ./pages/passport.js







const getStaticProps = async ()=>{
    const data = data_data/* stamps.map */.ly.map((d)=>({
            id: d.id,
            image: d.image,
            destination: d.destination
        })
    );
    return {
        props: {
            data
        }
    };
};
function Passport({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Explorer App | Passport"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Explorer App is a concept of a web application for exploring the world."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: "#d96e1e"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TopBar/* TopBar */.D, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Passport_module_default()).home,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Passport_module_default()).image_header,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Passport_module_default()).image,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/jane.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Passport_module_default()).info,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "Name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Jane Doe"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "Nationality"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "UK"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "Joined"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "20/04/14"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                        className: (Passport_module_default()).line
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Passport_module_default()).content,
                                children: data.map((d)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Stamp, {
                                            image: d.image,
                                            destination: d.destination
                                        })
                                    }, d.id)
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Passport_module_default()).bot_bar,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(BotBar/* BotBar */.j, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [466,272,351], () => (__webpack_exec__(437)));
module.exports = __webpack_exports__;

})();