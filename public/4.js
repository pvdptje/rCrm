(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Client/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/Pages/Client/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/Layout */ "./resources/js/src/layouts/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _layouts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    title: String,
    breadcrumbs: Array
  },
  methods: {
    breadcrumbs: function breadcrumbs() {
      return [{
        'link': '/clients',
        'text': 'Clienten'
      }, {
        'link': '',
        'text': 'Nieuwe client toevoegen'
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Client/Create.vue?vue&type=template&id=93a7de48&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/Pages/Client/Create.vue?vue&type=template&id=93a7de48& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "layout",
    { attrs: { breadcrumbs: _vm.breadcrumbs(), title: _vm.title } },
    [
      _c("section", { attrs: { id: "basic-horizontal-layouts" } }, [
        _c("div", { staticClass: "row match-height" }, [
          _c("div", { staticClass: "col-md-6 col-12" }, [
            _c(
              "div",
              { staticClass: "card", staticStyle: { height: "419.75px" } },
              [
                _c("div", { staticClass: "card-header" }, [
                  _c("h4", { staticClass: "card-title" }, [
                    _vm._v("Horizontal Form")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("form", { staticClass: "form form-horizontal" }, [
                      _c("div", { staticClass: "form-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("span", [_vm._v("First Name")])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8" }, [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "first-name",
                                    name: "fname",
                                    placeholder: "First Name"
                                  }
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("span", [_vm._v("Email")])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8" }, [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "email",
                                    id: "email-id",
                                    name: "email-id",
                                    placeholder: "Email"
                                  }
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("span", [_vm._v("Mobile")])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8" }, [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "number",
                                    id: "contact-info",
                                    name: "contact",
                                    placeholder: "Mobile"
                                  }
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("span", [_vm._v("Password")])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8" }, [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "password",
                                    id: "password",
                                    name: "password",
                                    placeholder: "Password"
                                  }
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group col-md-8 offset-md-4" },
                            [
                              _c("fieldset", { staticClass: "checkbox" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "vs-checkbox-con vs-checkbox-primary"
                                  },
                                  [
                                    _c("input", {
                                      attrs: { type: "checkbox" }
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "vs-checkbox" }, [
                                      _c(
                                        "span",
                                        { staticClass: "vs-checkbox--check" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "vs-icon feather icon-check"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", {}, [_vm._v("Remember me")])
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 offset-md-4" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-primary mr-1 mb-1 waves-effect waves-light",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("Submit")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-outline-warning mr-1 mb-1 waves-effect waves-light",
                                attrs: { type: "reset" }
                              },
                              [_vm._v("Reset")]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-12" }, [
            _c(
              "div",
              { staticClass: "card", staticStyle: { height: "419.75px" } },
              [
                _c("div", { staticClass: "card-header" }, [
                  _c("h4", { staticClass: "card-title" }, [
                    _vm._v("Horizontal Form with Icons")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("form", { staticClass: "form form-horizontal" }, [
                      _c("div", { staticClass: "form-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("span", [_vm._v("First Name")])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "position-relative has-icon-left"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        id: "fname-icon",
                                        name: "fname-icon",
                                        placeholder: "First Name"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-control-position" },
                                      [
                                        _c("i", {
                                          staticClass: "feather icon-user"
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("span", [_vm._v("Email")])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "position-relative has-icon-left"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "email",
                                        id: "email-icon",
                                        name: "email-id-icon",
                                        placeholder: "Email"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-control-position" },
                                      [
                                        _c("i", {
                                          staticClass: "feather icon-mail"
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("span", [_vm._v("Mobile")])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "position-relative has-icon-left"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "number",
                                        id: "contact-icon",
                                        name: "contact-icon",
                                        placeholder: "Mobile"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-control-position" },
                                      [
                                        _c("i", {
                                          staticClass: "feather icon-smartphone"
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("span", [_vm._v("Password")])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "position-relative has-icon-left"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        id: "pass-icon",
                                        name: "contact-icon",
                                        placeholder: "Password"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-control-position" },
                                      [
                                        _c("i", {
                                          staticClass: "feather icon-lock"
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group col-md-8 offset-md-4" },
                            [
                              _c("fieldset", { staticClass: "checkbox" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "vs-checkbox-con vs-checkbox-primary"
                                  },
                                  [
                                    _c("input", {
                                      attrs: { type: "checkbox" }
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "vs-checkbox" }, [
                                      _c(
                                        "span",
                                        { staticClass: "vs-checkbox--check" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "vs-icon feather icon-check"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", {}, [_vm._v("Remember me")])
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 offset-md-4" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-primary mr-1 mb-1 waves-effect waves-light",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("Submit")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-outline-warning mr-1 mb-1 waves-effect waves-light",
                                attrs: { type: "reset" }
                              },
                              [_vm._v("Reset")]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/Pages/Client/Create.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/Pages/Client/Create.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_93a7de48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=93a7de48& */ "./resources/js/src/Pages/Client/Create.vue?vue&type=template&id=93a7de48&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/src/Pages/Client/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_93a7de48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_93a7de48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/Pages/Client/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/Pages/Client/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/Pages/Client/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Client/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/Pages/Client/Create.vue?vue&type=template&id=93a7de48&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/Pages/Client/Create.vue?vue&type=template&id=93a7de48& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_93a7de48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=93a7de48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Client/Create.vue?vue&type=template&id=93a7de48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_93a7de48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_93a7de48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);