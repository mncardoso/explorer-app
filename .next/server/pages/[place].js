(() => {
var exports = {};
exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 1491:
/***/ ((module) => {

// Exports
module.exports = {
	"place_nearby": "Nearby_place_nearby__tgQ_F",
	"place_nearby_title": "Nearby_place_nearby_title__lbhCr",
	"place_nearby_image": "Nearby_place_nearby_image__lCzOr"
};


/***/ }),

/***/ 5829:
/***/ ((module) => {

// Exports
module.exports = {
	"home": "Place_home__ISomC",
	"image_header": "Place_image_header__PMQp4",
	"distance": "Place_distance__Rhmyf",
	"location": "Place_location__PNLxx",
	"image": "Place_image__HEuBU",
	"content": "Place_content__SHA3U",
	"tags": "Place_tags__2_h8k",
	"buttons": "Place_buttons__dYstW",
	"nearby": "Place_nearby__XwkcX",
	"nearby_list": "Place_nearby_list__2J09I",
	"about": "Place_about__4nZih",
	"bot_bar": "Place_bot_bar__43Ifi"
};


/***/ }),

/***/ 595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _place_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/pages/Place.module.css
var Place_module = __webpack_require__(5829);
var Place_module_default = /*#__PURE__*/__webpack_require__.n(Place_module);
// EXTERNAL MODULE: ./data/data.js
var data_data = __webpack_require__(2023);
// EXTERNAL MODULE: ./Components/Layout/TopBar.js + 1 modules
var TopBar = __webpack_require__(2466);
// EXTERNAL MODULE: ./Components/Layout/BotBar.js
var BotBar = __webpack_require__(5272);
// EXTERNAL MODULE: ./Components/Buttons/ButtonPlace.js
var ButtonPlace = __webpack_require__(5269);
// EXTERNAL MODULE: ./Components/misc/Tag.js
var Tag = __webpack_require__(2274);
// EXTERNAL MODULE: ./styles/misc/Nearby.module.css
var Nearby_module = __webpack_require__(1491);
var Nearby_module_default = /*#__PURE__*/__webpack_require__.n(Nearby_module);
;// CONCATENATED MODULE: ./Components/misc/Nearby.js


let Nearby = ({ title , image  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: "",
        className: (Nearby_module_default()).place_nearby,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Nearby_module_default()).place_nearby_image,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image,
                    alt: title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Nearby_module_default()).place_nearby_title,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: title
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/[place].js










const getStaticProps = async (context)=>{
    const data = data_data/* destinations.map */.MQ.map((d)=>d.destination === context.params.place ? {
            destination: d.destination,
            image: d.image,
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
        } : null
    ).filter((d)=>d !== null
    );
    return {
        props: {
            data
        }
    };
};
const getStaticPaths = async ()=>{
    const paths = data_data/* destinations.map */.MQ.map((d)=>({
            params: {
                place: d.destination.toString()
            }
        })
    );
    return {
        paths,
        fallback: false
    };
};
function Page({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "Explorer App | ",
                            data[0].location
                        ]
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
                        className: (Place_module_default()).home,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Place_module_default()).image_header,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Place_module_default()).distance,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: data[0].distance
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Place_module_default()).location,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: data[0].location
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Place_module_default()).image,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: data[0].header,
                                            alt: ""
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Place_module_default()).content,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Place_module_default()).tags,
                                        id: "tags",
                                        children: data[0].tags.map((d)=>/*#__PURE__*/ jsx_runtime_.jsx(Tag/* Tag */.V, {
                                                type: d.type,
                                                time: d.time
                                            }, d.type)
                                        )
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Place_module_default()).buttons,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonPlace/* ButtonPlace */.Y, {
                                                input: "Get me there",
                                                destination: "./map",
                                                active: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonPlace/* ButtonPlace */.Y, {
                                                input: "Get Stamp",
                                                destination: "",
                                                active: false
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Place_module_default()).nearby,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Nearby"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Place_module_default()).nearby_list,
                                                children: data_data/* near_by.map */.Kb.map((d)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Nearby, {
                                                            title: d.title,
                                                            image: d.image
                                                        })
                                                    }, d.id)
                                                )
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Place_module_default()).about,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "About"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Place_module_default()).bot_bar,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(BotBar/* BotBar */.j, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const _place_ = ((0,router_.withRouter)(Page));


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [466,272,351,552], () => (__webpack_exec__(595)));
module.exports = __webpack_exports__;

})();