(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Settings/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/Pages/Settings/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/Layout */ "./resources/js/src/layouts/Layout.vue");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/translations */ "./resources/js/src/translations.js");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_translations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_vx_card_VxCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/vx-card/VxCard */ "./resources/js/src/components/vx-card/VxCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_translations__WEBPACK_IMPORTED_MODULE_1___default.a],
  components: {
    VxCard: _components_vx_card_VxCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    Layout: _layouts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    'isConnectedToGoogle': Boolean,
    'calendarId': String,
    'calendarList': Array
  },
  data: function data() {
    return {
      breadcrumbs: [{
        link: '/settings',
        text: 'Instellingen'
      }],
      calendar: {
        id: this.calendarId
      }
    };
  },
  methods: {
    saveCalendar: function saveCalendar() {
      this.$vs.loading();
      var vm = this;
      this.$inertia.post('/user/saveSetting', {
        key: 'google_calendar_id',
        value: this.calendar.id
      }).then(function () {
        vm.$vs.loading.close();
      });
    },
    disconnectCalendar: function disconnectCalendar() {
      this.$vs.loading();
      var vm = this;
      this.$inertia.post('/user/saveSetting', {
        key: 'google_calendar_id',
        value: ''
      }).then(function () {
        vm.$vs.loading.close();
      });
    }
  },
  created: function created() {
    console.log(this.calendarId);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Settings/Index.vue?vue&type=template&id=f0e33d0c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/Pages/Settings/Index.vue?vue&type=template&id=f0e33d0c& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Instellingen", breadcrumbs: _vm.breadcrumbs } },
    [
      _c(
        "vs-tabs",
        { attrs: { position: "left" } },
        [
          _c(
            "vs-tab",
            { attrs: { label: _vm.__("Calendar"), position: "left" } },
            [
              _c(
                "vx-card",
                {
                  attrs: {
                    title: _vm.__("Calendar settings"),
                    subtitle: _vm.__(
                      "Connect your account with Google Calendar"
                    )
                  }
                },
                [
                  !_vm.isConnectedToGoogle
                    ? _c(
                        "div",
                        [
                          _c("p", { staticClass: "mb-6" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.__(
                                    "Connect with your Google account to automatically place appointments made here into your calendar."
                                  )
                                ) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-button",
                            {
                              attrs: {
                                href: "/oauth/redirect?followUpUrl=/settings",
                                color: "primary"
                              }
                            },
                            [_vm._v(_vm._s(_vm.__("Connect now")))]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isConnectedToGoogle && !_vm.calendarId
                    ? _c(
                        "div",
                        [
                          _c("p", { staticClass: "mb-6 font-bold" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.__(
                                    "Your Google account is successfully connected."
                                  )
                                ) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-6" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.__(
                                    " However, we don't know which calendar to work with. Please select one of your calendars."
                                  )
                                ) +
                                "\n                            "
                            ),
                            _c("br"),
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm.__(
                                    "You can only select calendars for which you have write and read access."
                                  )
                                ) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-select",
                            {
                              staticClass: "w-full mb-6",
                              attrs: { label: _vm.__("Choose a calendar") },
                              model: {
                                value: _vm.calendar.id,
                                callback: function($$v) {
                                  _vm.$set(_vm.calendar, "id", $$v)
                                },
                                expression: "calendar.id"
                              }
                            },
                            _vm._l(_vm.calendarList, function(value, key) {
                              return _c("vs-select-item", {
                                key: key,
                                attrs: { value: key, text: value }
                              })
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-button",
                            {
                              attrs: { color: "primary" },
                              on: { click: _vm.saveCalendar }
                            },
                            [_vm._v(_vm._s(_vm.__("Save calendar")))]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isConnectedToGoogle && _vm.calendarId
                    ? _c("div", [
                        _c("p", { staticClass: "mb-6 font-bold" }, [
                          _vm._v(
                            _vm._s(
                              _vm.__(
                                "Your Google Calendar is successfully connected."
                              )
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-6" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.__("Active calendar")) +
                              ": "
                          ),
                          _c("span", { staticClass: "font-bold" }, [
                            _vm._v(" " + _vm._s(_vm.calendarId) + " ")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-6" }, [
                          _vm._v(
                            "\n                             " +
                              _vm._s(
                                _vm.__(
                                  "If you wish to change or disconnect the calendar"
                                )
                              ) +
                              " "
                          ),
                          _c(
                            "a",
                            {
                              staticClass: "cursor-pointer",
                              on: { click: _vm.disconnectCalendar }
                            },
                            [_vm._v(_vm._s(_vm.__("Click here")))]
                          )
                        ])
                      ])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-tab",
            {
              attrs: { label: _vm.__("Invoicing settings"), position: "left" }
            },
            [
              _c(
                "vx-card",
                { attrs: { title: _vm.__("Change your invoicing settings") } },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full",
                          attrs: { "label-placeholder": "First Name" },
                          model: {
                            value: _vm.input25,
                            callback: function($$v) {
                              _vm.input25 = $$v
                            },
                            expression: "input25"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full",
                          attrs: { "label-placeholder": "Last Name" },
                          model: {
                            value: _vm.input26,
                            callback: function($$v) {
                              _vm.input26 = $$v
                            },
                            expression: "input26"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/Pages/Settings/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/Pages/Settings/Index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_f0e33d0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=f0e33d0c& */ "./resources/js/src/Pages/Settings/Index.vue?vue&type=template&id=f0e33d0c&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/src/Pages/Settings/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_f0e33d0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_f0e33d0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/Pages/Settings/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/Pages/Settings/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/Pages/Settings/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Settings/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/Pages/Settings/Index.vue?vue&type=template&id=f0e33d0c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/Pages/Settings/Index.vue?vue&type=template&id=f0e33d0c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f0e33d0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=f0e33d0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/Pages/Settings/Index.vue?vue&type=template&id=f0e33d0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f0e33d0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f0e33d0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);