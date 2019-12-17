(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/Pages/Auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_FullPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/FullPage */ "./resources/js/src/layouts/FullPage.vue");
/* harmony import */ var _components_vx_card_VxCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/vx-card/VxCard */ "./resources/js/src/components/vx-card/VxCard.vue");
/* harmony import */ var _components_vx_input_group_VxInputGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/vx-input-group/VxInputGroup */ "./resources/js/src/components/vx-input-group/VxInputGroup.vue");
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


 //@todo Use translations mixin.

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: 'Login'
  },
  components: {
    VxInputGroup: _components_vx_input_group_VxInputGroup__WEBPACK_IMPORTED_MODULE_2__["default"],
    VxCard: _components_vx_card_VxCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    FullPage: _layouts_FullPage__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    errors: Object
  },
  data: function data() {
    return {
      breadcrumbs: [{
        link: '/login',
        text: 'Login'
      }],
      sending: false,
      form: {
        email: null,
        password: null,
        remember: null
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    submit: function submit() {
      var _this = this;

      this.$vs.loading();
      this.sending = true;
      this.$inertia.post('/login', {
        email: this.form.email,
        password: this.form.password,
        remember: this.form.remember
      }).then(function () {
        return _this.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/FullPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/FullPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  created: function created() {
    this.toggleClassInBody(this.$store.state.theme);
  },
  watch: {
    '$store.state.theme': function $storeStateTheme(val) {
      this.toggleClassInBody(val);
    }
  },
  methods: {
    toggleClassInBody: function toggleClassInBody(className) {
      if (className == 'dark') {
        if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
        document.body.classList.add('theme-dark');
      } else if (className == 'semi-dark') {
        if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-semi-dark');
      } else {
        if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
        if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Auth/Login.vue?vue&type=template&id=652031d6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/Pages/Auth/Login.vue?vue&type=template&id=652031d6& ***!
  \************************************************************************************************************************************************************************************************************/
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
    "FullPage",
    { attrs: { breadcrumbs: _vm.breadcrumbs, title: "Inloggen" } },
    [
      _c(
        "div",
        {
          staticClass:
            "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",
          attrs: { id: "page-login" }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
            },
            [
              _c("vx-card", [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submit($event)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-row no-gutter justify-center items-center"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "vx-col hidden lg:block lg:w-1/2" },
                          [
                            _c("img", {
                              staticClass: "mx-auto",
                              attrs: {
                                src: "https://placebeard.it/400x230",
                                alt: "login"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "px-8 pt-8 login-tabs-container" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "vx-card__title mb-4" },
                                  [
                                    _c("h4", { staticClass: "mb-4" }, [
                                      _vm._v("Login")
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        "Welkom terug, log in op uw account."
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "vx-input-group",
                                      [
                                        _c("vs-input", {
                                          staticClass: "w-full",
                                          attrs: {
                                            icon: "email",
                                            "icon-after": "",
                                            label: "E-mailadres",
                                            type: "email",
                                            autofocus: ""
                                          },
                                          model: {
                                            value: _vm.form.email,
                                            callback: function($$v) {
                                              _vm.$set(_vm.form, "email", $$v)
                                            },
                                            expression: "form.email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.$page.errors.email
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "text-danger text-sm"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$page.errors.email[0]
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("vs-input", {
                                          staticClass: "w-full",
                                          attrs: {
                                            icon: "lock",
                                            "icon-after": "",
                                            label: "Wachtwoord",
                                            type: "password"
                                          },
                                          model: {
                                            value: _vm.form.password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "password",
                                                $$v
                                              )
                                            },
                                            expression: "form.password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.$page.errors.password
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "text-danger text-sm"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$page.errors.password[0]
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "flex flex-wrap justify-between my-5"
                                      },
                                      [
                                        _c(
                                          "vs-checkbox",
                                          {
                                            staticClass: "inline-flex",
                                            model: {
                                              value: _vm.form.remember,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "remember",
                                                  $$v
                                                )
                                              },
                                              expression: "form.remember"
                                            }
                                          },
                                          [_vm._v("Mij onthouden")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "flex flex-wrap justify-between mb-3"
                                      },
                                      [
                                        _c(
                                          "vs-button",
                                          { attrs: { color: "primary" } },
                                          [_vm._v("Log in")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/FullPage.vue?vue&type=template&id=aaabed26&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/FullPage.vue?vue&type=template&id=aaabed26& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "layout--full-page" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/Pages/Auth/Login.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/Pages/Auth/Login.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_652031d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=652031d6& */ "./resources/js/src/Pages/Auth/Login.vue?vue&type=template&id=652031d6&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/src/Pages/Auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_652031d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_652031d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/Pages/Auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/Pages/Auth/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/Pages/Auth/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/Pages/Auth/Login.vue?vue&type=template&id=652031d6&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/Pages/Auth/Login.vue?vue&type=template&id=652031d6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_652031d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=652031d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Auth/Login.vue?vue&type=template&id=652031d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_652031d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_652031d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/FullPage.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/layouts/FullPage.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FullPage_vue_vue_type_template_id_aaabed26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullPage.vue?vue&type=template&id=aaabed26& */ "./resources/js/src/layouts/FullPage.vue?vue&type=template&id=aaabed26&");
/* harmony import */ var _FullPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullPage.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/FullPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FullPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FullPage_vue_vue_type_template_id_aaabed26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FullPage_vue_vue_type_template_id_aaabed26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/FullPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/FullPage.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/layouts/FullPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FullPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/FullPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/FullPage.vue?vue&type=template&id=aaabed26&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/layouts/FullPage.vue?vue&type=template&id=aaabed26& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_template_id_aaabed26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FullPage.vue?vue&type=template&id=aaabed26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/FullPage.vue?vue&type=template&id=aaabed26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_template_id_aaabed26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_template_id_aaabed26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);