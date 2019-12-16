(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Account/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/Pages/Account/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/Layout */ "./resources/js/src/layouts/Layout.vue");
/* harmony import */ var _components_vx_card_VxCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/vx-card/VxCard */ "./resources/js/src/components/vx-card/VxCard.vue");
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-cropperjs */ "./node_modules/vue-cropperjs/dist/VueCropper.js");
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_cropperjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/translations */ "./resources/js/src/translations.js");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_translations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_4__);
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
  metaInfo: {
    title: 'Account'
  },
  mixins: [_translations__WEBPACK_IMPORTED_MODULE_3___default.a],
  props: {
    user: Object,
    account: Object
  },
  data: function data() {
    return {
      breadcrumbs: [{
        link: '/account',
        text: 'Account'
      }],
      companyForm: {
        company_name: this.account.company_name,
        invoice_email: this.account.invoice_email,
        phone: this.account.phone,
        street: this.account.street,
        house_number: this.account.house_number,
        city: this.account.city,
        postcode: this.account.postcode,
        province: this.account.province,
        country: this.account.country
      },
      companyLogo: {
        input: null
      },
      uploadError: false
    };
  },
  methods: {
    saveCompanyDetails: function saveCompanyDetails() {
      var _this = this;

      this.$vs.loading();
      this.$inertia.post('/account/update', this.companyForm).then(function () {
        return _this.$vs.loading.close();
      });
    },
    storeCompanyLogo: function storeCompanyLogo() {
      this.$vs.loading();
      var vm = this;
      this.$inertia.post('/upload/account/logo', {
        logo: this.$refs.cropper.getCroppedCanvas().toDataURL()
      }).then(function () {
        vm.$vs.loading.close();
        vm.companyLogo.input = null;
      });
    },
    zoom: function zoom(percent) {
      this.$refs.cropper.relativeZoom(percent);
    },
    onLogoChange: function onLogoChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      var file = e.target.files[0];

      if (file.type.indexOf('image/') === -1) {
        this.uploadError = 'Upload een afbeelding aub.';
        return;
      }

      this.uploadError = false;
      this.createLogoImage(files[0]);
    },
    createLogoImage: function createLogoImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.companyLogo.input = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  },
  components: {
    VxCard: _components_vx_card_VxCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    Layout: _layouts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueCropper: vue_cropperjs__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Account/Index.vue?vue&type=template&id=a0abc968&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/Pages/Account/Index.vue?vue&type=template&id=a0abc968& ***!
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
    "Layout",
    { attrs: { title: _vm.__("Account"), breadcrumbs: _vm.breadcrumbs } },
    [
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full sm:w-3/4 mb-base" },
          [
            _c(
              "vx-card",
              {
                attrs: {
                  title: "Bedrijfsgegevens",
                  subtitle: _vm.__("Review them, or change if necessary.")
                }
              },
              [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.saveCompanyDetails($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "vx-row mb-6" }, [
                      _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                        _c("span", [_vm._v(_vm._s(_vm.__("Company name")))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col sm:w-2/3 w-full" },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            attrs: {
                              danger: _vm.$page.errors.company_name,
                              "text-danger": _vm.$page.errors.company_name
                                ? _vm.$page.errors.company_name[0]
                                : ""
                            },
                            model: {
                              value: _vm.companyForm.company_name,
                              callback: function($$v) {
                                _vm.$set(_vm.companyForm, "company_name", $$v)
                              },
                              expression: "companyForm.company_name"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row mb-6" }, [
                      _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                        _c("span", [_vm._v(_vm._s(_vm.__("Email")))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col sm:w-2/3 w-full" },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            attrs: { type: "email" },
                            model: {
                              value: _vm.companyForm.invoice_email,
                              callback: function($$v) {
                                _vm.$set(_vm.companyForm, "invoice_email", $$v)
                              },
                              expression: "companyForm.invoice_email"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row mb-6" }, [
                      _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                        _c("span", [_vm._v(_vm._s(_vm.__("Phone")))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col sm:w-2/3 w-full" },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.companyForm.phone,
                              callback: function($$v) {
                                _vm.$set(_vm.companyForm, "phone", $$v)
                              },
                              expression: "companyForm.phone"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row mb-6" }, [
                      _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                        _c("span", [_vm._v(_vm._s(_vm.__("Straat ")))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col sm:w-2/3 w-full" },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.companyForm.street,
                              callback: function($$v) {
                                _vm.$set(_vm.companyForm, "street", $$v)
                              },
                              expression: "companyForm.street"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row mb-6" }, [
                      _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                        _c("span", [_vm._v(_vm._s(_vm.__("House number")))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col sm:w-2/3 w-full" },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.companyForm.house_number,
                              callback: function($$v) {
                                _vm.$set(_vm.companyForm, "house_number", $$v)
                              },
                              expression: "companyForm.house_number"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row mb-6" }, [
                      _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                        _c("span", [_vm._v(_vm._s(_vm.__("Postcode")))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col sm:w-2/3 w-full" },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.companyForm.postcode,
                              callback: function($$v) {
                                _vm.$set(_vm.companyForm, "postcode", $$v)
                              },
                              expression: "companyForm.postcode"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row mb-6" }, [
                      _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                        _c("span", [_vm._v(_vm._s(_vm.__("City")))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col sm:w-2/3 w-full" },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.companyForm.city,
                              callback: function($$v) {
                                _vm.$set(_vm.companyForm, "city", $$v)
                              },
                              expression: "companyForm.city"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row mb-6" }, [
                      _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                        _c("span", [_vm._v(_vm._s(_vm.__("Province")))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col sm:w-2/3 w-full" },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.companyForm.province,
                              callback: function($$v) {
                                _vm.$set(_vm.companyForm, "province", $$v)
                              },
                              expression: "companyForm.province"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row mb-6" }, [
                      _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                        _c("span", [_vm._v(_vm._s(_vm.__("Country")))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col sm:w-2/3 w-full" },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.companyForm.country,
                              callback: function($$v) {
                                _vm.$set(_vm.companyForm, "country", $$v)
                              },
                              expression: "companyForm.country"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row" }, [
                      _c(
                        "div",
                        { staticClass: "vx-col sm:w-2/3 w-full ml-auto" },
                        [
                          _c("vs-button", { staticClass: "mr-3 mb-2" }, [
                            _vm._v(_vm._s(_vm.__("Save")))
                          ])
                        ],
                        1
                      )
                    ])
                  ]
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full sm:w-1/4 mb-base" },
          [
            _c(
              "vx-card",
              {
                attrs: {
                  title: _vm.__("Logo"),
                  subtitle: _vm.__("Change your company logo here")
                }
              },
              [
                this.$page.account.logo && !_vm.companyLogo.input
                  ? _c("div", { staticClass: "mb-6" }, [
                      _c("img", {
                        staticClass: "max-w-full",
                        attrs: { src: this.$page.account.logo }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("vs-input", {
                  staticStyle: { display: "none" },
                  attrs: { id: "logoInput", type: "file" },
                  on: { change: _vm.onLogoChange }
                }),
                _vm._v(" "),
                _vm.uploadError
                  ? _c(
                      "vs-alert",
                      {
                        ref: "alert",
                        staticClass: "mb-6",
                        attrs: {
                          color: "danger",
                          title: "Fout!",
                          active: "true"
                        }
                      },
                      [
                        _vm._v(
                          "\n                  " +
                            _vm._s(_vm.__("Please, upload an image")) +
                            "\n              "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.$page.errors.logo
                  ? _c(
                      "vs-alert",
                      {
                        ref: "alert",
                        staticClass: "mb-6",
                        attrs: {
                          color: "danger",
                          title: "Fout!",
                          active: "true"
                        }
                      },
                      [
                        _vm._v(
                          "\n                  " +
                            _vm._s(_vm.$page.errors.logo[0]) +
                            "\n              "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.companyLogo.input
                  ? _c(
                      "vs-button",
                      {
                        attrs: {
                          color: "primary",
                          onclick:
                            "document.getElementById('logoInput').click()"
                        }
                      },
                      [_vm._v("Wijzigen")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.companyLogo.input
                  ? _c(
                      "div",
                      { staticClass: "mt-6" },
                      [
                        _c("vue-cropper", {
                          ref: "cropper",
                          attrs: {
                            "aspect-ratio": 16 / 9,
                            src: _vm.companyLogo.input,
                            preview: ".preview"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-1" },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "inline-block",
                                attrs: {
                                  size: "small",
                                  role: "button",
                                  color: "secondary"
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.zoom(0.2)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.__("Zoom in")))]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                staticClass: "inline-block",
                                attrs: {
                                  role: "button",
                                  color: "secondary",
                                  size: "small"
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.zoom(-0.2)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.__("Zoom out")))]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                staticClass: "inline-block",
                                attrs: {
                                  role: "button",
                                  color: "primary",
                                  size: "small"
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.storeCompanyLogo($event)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.__("Save")))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mt-1" }, [
                          _vm._v(
                            "\n                      " +
                              _vm._s(
                                _vm.__(
                                  "Make sure that your logo fits the indicated ratio for the best result."
                                )
                              ) +
                              "\n                  "
                          )
                        ])
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/Pages/Account/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/Pages/Account/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_a0abc968___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=a0abc968& */ "./resources/js/src/Pages/Account/Index.vue?vue&type=template&id=a0abc968&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/src/Pages/Account/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_a0abc968___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_a0abc968___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/Pages/Account/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/Pages/Account/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/Pages/Account/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Account/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/Pages/Account/Index.vue?vue&type=template&id=a0abc968&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/Pages/Account/Index.vue?vue&type=template&id=a0abc968& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a0abc968___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=a0abc968& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Account/Index.vue?vue&type=template&id=a0abc968&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a0abc968___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a0abc968___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);