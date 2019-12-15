(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
  props: {
    placeholder: {
      type: String,
      "default": 'Search..'
    },
    data: {
      type: Object,
      required: true
    },
    showAction: {
      type: Boolean,
      "default": false
    },
    inputClassses: {
      type: [String, Object, Array]
    },
    autoFocus: {
      type: Boolean,
      "default": false
    },
    showPinned: {
      type: Boolean,
      "default": false
    },
    backgroundOverlay: {
      type: Boolean,
      "default": false
    },
    searchLimit: {
      type: Number,
      "default": 10
    }
  },
  data: function data() {
    return {
      searchQuery: '',
      filteredData: [],
      currentSelected: -1,
      inputFocused: false,
      insideSuggestions: false
    };
  },
  watch: {
    // UPDATE SUGGESTIONS LIST
    searchQuery: function searchQuery(val) {
      var _this = this;

      if (val == '') {
        this.inputInit();
        if (this.bodyOverlay) this.$store.commit('TOGGLE_CONTENT_OVERLAY', false);
      } else {
        if (this.backgroundOverlay && !this.bodyOverlay) this.$store.commit('TOGGLE_CONTENT_OVERLAY', true);
        var exactEle = this.data.data.filter(function (item) {
          return item.label.toLowerCase().startsWith(_this.searchQuery.toLowerCase());
        });
        var containEle = this.data.data.filter(function (item) {
          return !item.label.toLowerCase().startsWith(_this.searchQuery.toLowerCase()) && item.label.toLowerCase().indexOf(_this.searchQuery.toLowerCase()) > -1;
        });
        this.filteredData = exactEle.concat(containEle).slice(0, this.searchLimit);
        if (!this.filteredData[0]) this.currentSelected = -1;
      } // ADD: No result found


      if (!this.filteredData.length && this.searchQuery) {
        this.filteredData = [{
          highlightAction: false,
          index: -1,
          label: 'No results found.',
          labelIcon: 'AlertCircleIcon',
          url: null
        }];
      }
    },
    autoFocus: function autoFocus(val) {
      if (val) this.focusInput();else this.searchQuery = '';
    },
    filteredData: function filteredData() {
      this.currentSelected = 0; // Prevent selecting if first item in list dont have url e.g. 'No Reult'

      if (this.filteredData[0]) {
        if (!this.filteredData[0].url) {
          this.currentSelected = -1;
        }
      }
    }
  },
  computed: {
    bodyOverlay: function bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    actionClasses: function actionClasses() {
      var _this2 = this;

      return function (isHighlighted) {
        if (isHighlighted) return "stroke-current text-".concat(_this2.data.highlightColor);
      };
    }
  },
  methods: {
    escPressed: function escPressed() {
      this.$emit('closeSearchbar');
      this.searchQuery = '';
      this.filteredData = [];
    },
    inputInit: function inputInit() {
      if (this.showPinned) {
        var starredData = this.data.data.filter(function (item) {
          return item.highlightAction;
        });
        this.filteredData = starredData;
      } else {
        this.filteredData = [];
      }
    },
    updateInputFocus: function updateInputFocus() {
      var _this3 = this;

      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (val) {
        if (this.searchQuery == '') this.inputInit();
        setTimeout(function () {
          _this3.inputFocused = true;
        }, 100);
      } else {
        if (this.insideSuggestions) return;
        setTimeout(function () {
          _this3.inputFocused = false;
        }, 100);
        this.escPressed();
      }
    },
    suggestionSelected: function suggestionSelected() {
      if (this.bodyOverlay && this.filteredData[0].url) this.$store.commit('TOGGLE_CONTENT_OVERLAY', false);

      if (this.filteredData.length) {
        if (this.filteredData[0].url) {
          this.searchQuery = '';
          if (this.currentSelected >= 0) this.$emit('selected', this.filteredData[this.currentSelected]);else this.$emit('selected', this.filteredData[0]);
          this.filteredData = [];
        }
      }
    },
    actionClicked: function actionClicked() {
      this.$emit('actionClicked', this.filteredData[this.currentSelected]);
      if (!this.filteredData[this.currentSelected].highlightAction) this.filteredData.splice(this.currentSelected, 1);
    },
    increaseIndex: function increaseIndex() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!val && this.currentSelected > 0) this.currentSelected--;else if (val && this.currentSelected < this.filteredData.length - 1 && this.filteredData[this.currentSelected + 1].index > -1) this.currentSelected++;
      this.fixScrolling();
    },
    focusInput: function focusInput() {
      this.$refs.input.$el.querySelector('input').focus();
    },
    fixScrolling: function fixScrolling() {
      if (this.currentSelected > 0) {
        var liH = this.$refs.option[this.currentSelected].clientHeight;
        var ulH = this.$refs.scrollContainer.clientHeight;

        if (ulH - liH * this.currentSelected < liH) {
          this.$refs.scrollContainer.scrollTop = Math.round((this.currentSelected + 1 - ulH / liH + 1) * liH);
        }
      }
    }
  },
  mounted: function mounted() {
    if (this.autoFocus) this.focusInput();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "the-footer",
  props: {
    classes: {
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/vx-auto-suggest/VxAutoSuggest.vue */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "the-navbar",
  props: {
    navbarColor: {
      type: String,
      "default": "#fff"
    }
  },
  data: function data() {
    return {
      navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
      searchQuery: '',
      showFullSearch: false,
      unreadNotifications: [{
        index: 0,
        title: 'New Message',
        msg: 'Are your going to meet me tonight?',
        icon: 'MessageSquareIcon',
        time: 'Wed Jan 30 2019 07:45:23 GMT+0000 (GMT)',
        category: 'primary'
      }, {
        index: 1,
        title: 'New Order Recieved',
        msg: 'You got new order of goods.',
        icon: 'PackageIcon',
        time: 'Wed Jan 30 2019 07:45:23 GMT+0000 (GMT)',
        category: 'success'
      }, {
        index: 2,
        title: 'Server Limit Reached!',
        msg: 'Server have 99% CPU usage.',
        icon: 'AlertOctagonIcon',
        time: 'Thu Jan 31 2019 07:45:23 GMT+0000 (GMT)',
        category: 'danger'
      }, {
        index: 3,
        title: 'New Mail From Peter',
        msg: 'Cake sesame snaps cupcake',
        icon: 'MailIcon',
        time: 'Fri Feb 01 2019 07:45:23 GMT+0000 (GMT)',
        category: 'primary'
      }, {
        index: 4,
        title: 'Bruce\'s Party',
        msg: 'Chocolate cake oat cake tiramisu',
        icon: 'CalendarIcon',
        time: 'Fri Feb 02 2019 07:45:23 GMT+0000 (GMT)',
        category: 'warning'
      }],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      },
      autoFocusSearch: false,
      showBookmarkPagesDropdown: false
    };
  },
  watch: {
    '$route': function $route() {
      if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false;
    }
  },
  computed: {
    // HELPER
    sidebarWidth: function sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    breakpoint: function breakpoint() {
      return this.$store.state.breakpoint;
    },
    // NAVBAR STYLE
    classObj: function classObj() {
      if (this.sidebarWidth == "default") return "navbar-default";else if (this.sidebarWidth == "reduced") return "navbar-reduced";else if (this.sidebarWidth) return "navbar-full";
    },
    // BOOKMARK & SEARCH
    data: function data() {
      return this.$store.state.navbarSearchAndPinList;
    },
    starredPages: function starredPages() {
      return this.$store.state.starredPages;
    },
    starredPagesLimited: {
      get: function get() {
        return this.starredPages.slice(0, 10);
      },
      set: function set(list) {
        this.$store.dispatch('arrangeStarredPagesLimited', list);
      }
    },
    starredPagesMore: {
      get: function get() {
        return this.starredPages.slice(10);
      },
      set: function set(list) {
        this.$store.dispatch('arrangeStarredPagesMore', list);
      }
    }
  },
  methods: {
    showSidebar: function showSidebar() {
      this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
    },
    selected: function selected(item) {
      this.$router.push(item.url);
      this.showFullSearch = false;
    },
    actionClicked: function actionClicked(item) {
      // e.stopPropogation();
      this.$store.dispatch('updateStarredPage', {
        index: item.index,
        val: !item.highlightAction
      });
    },
    showNavbarSearch: function showNavbarSearch() {
      this.showFullSearch = true;
    },
    showSearchbar: function showSearchbar() {
      this.showFullSearch = true;
    },
    elapsedTime: function elapsedTime(startTime) {
      var x = new Date(startTime);
      var now = new Date();
      var timeDiff = now - x;
      timeDiff /= 1000;
      var seconds = Math.round(timeDiff);
      timeDiff = Math.floor(timeDiff / 60);
      var minutes = Math.round(timeDiff % 60);
      timeDiff = Math.floor(timeDiff / 60);
      var hours = Math.round(timeDiff % 24);
      timeDiff = Math.floor(timeDiff / 24);
      var days = Math.round(timeDiff % 365);
      timeDiff = Math.floor(timeDiff / 365);
      var years = timeDiff;

      if (years > 0) {
        return years + (years > 1 ? ' Years ' : ' Year ') + 'ago';
      } else if (days > 0) {
        return days + (days > 1 ? ' Days ' : ' Day ') + 'ago';
      } else if (hours > 0) {
        return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago';
      } else if (minutes > 0) {
        return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago';
      } else if (seconds > 0) {
        return seconds + (seconds > 1 ? "".concat(seconds, " sec ago") : 'just now');
      }

      return 'Just Now';
    },
    outside: function outside() {
      this.showBookmarkPagesDropdown = false;
    }
  },
  directives: {
    'click-outside': {
      bind: function bind(el, binding) {
        var bubble = binding.modifiers.bubble;

        var handler = function handler(e) {
          if (bubble || !el.contains(e.target) && el !== e.target) {
            binding.value(e);
          }
        };

        el.__vueClickOutside__ = handler;
        document.addEventListener('click', handler);
      },
      unbind: function unbind(el) {
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  },
  components: {
    VxAutoSuggest: _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/VxSidebar.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue");
/* harmony import */ var _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TheNavbar.vue */ "./resources/js/src/layouts/components/TheNavbar.vue");
/* harmony import */ var _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TheFooter.vue */ "./resources/js/src/layouts/components/TheFooter.vue");
/* harmony import */ var _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../themeConfig.js */ "./resources/js/themeConfig.js");
/* harmony import */ var _layouts_components_vx_sidebar_sidebarItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/sidebarItems.js */ "./resources/js/src/layouts/components/vx-sidebar/sidebarItems.js");
/* harmony import */ var vue_backtotop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-backtotop */ "./node_modules/vue-backtotop/src/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      navbarType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].navbarType || 'floating',
      navbarColor: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].navbarColor || '#fff',
      footerType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].footerType || 'static',
      routerTransition: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].routerTransition || 'none',
      isNavbarDark: false,
      routeTitle: this.$route.meta.pageTitle,
      sidebarItems: _layouts_components_vx_sidebar_sidebarItems_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      disableCustomizer: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].disableCustomizer,
      windowWidth: window.innerWidth,
      //width of windows
      hideScrollToTop: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].hideScrollToTop,
      disableThemeTour: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].disableThemeTour
    };
  },
  watch: {
    '$route': function $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    },
    isThemeDark: function isThemeDark(val) {
      if (this.navbarColor == "#fff" && val) {
        this.updateNavbarColor("#10163a");
      } else {
        this.updateNavbarColor("#fff");
      }
    }
  },
  computed: {
    isAppPage: function isAppPage() {
      if (this.$route.path.includes('/apps/')) return true;else return false;
    },
    isThemeDark: function isThemeDark() {
      return this.$store.state.theme == 'dark';
    },
    sidebarWidth: function sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    bodyOverlay: function bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    contentAreaClass: function contentAreaClass() {
      if (this.sidebarWidth == "default") return "content-area-default";else if (this.sidebarWidth == "reduced") return "content-area-reduced";else if (this.sidebarWidth) return "content-area-full";
    },
    navbarClasses: function navbarClasses() {
      return {
        'navbar-hidden': this.navbarType == 'hidden',
        'navbar-sticky': this.navbarType == 'sticky',
        'navbar-static': this.navbarType == 'static',
        'navbar-floating': this.navbarType == 'floating'
      };
    },
    footerClasses: function footerClasses() {
      return {
        'footer-hidden': this.footerType == 'hidden',
        'footer-sticky': this.footerType == 'sticky',
        'footer-static': this.footerType == 'static'
      };
    }
  },
  methods: {
    changeRouteTitle: function changeRouteTitle(title) {
      this.routeTitle = title;
    },
    updateNavbarColor: function updateNavbarColor(val) {
      this.navbarColor = val;
      if (val == "#fff") this.isNavbarDark = false;else this.isNavbarDark = true;
    },
    handleWindowResize: function handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false);
        this.$store.dispatch('updateSidebarWidth', 'no-sidebar');
        this.disableThemeTour = true;
      } else if (this.windowWidth < 1200) {
        this.$store.dispatch('updateSidebarWidth', 'reduced');
      } else {
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
      }
    },
    toggleHideScrollToTop: function toggleHideScrollToTop(val) {
      this.hideScrollToTop = val;
    }
  },
  components: {
    VxSidebar: _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheNavbar: _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheFooter: _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BackToTop: vue_backtotop__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  created: function created() {
    this.setSidebarWidth();

    if (this.navbarColor == "#fff" && this.isThemeDark) {
      this.updateNavbarColor("#10163a");
    } else {
      this.updateNavbarColor(this.navbarColor);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: vxAutoSuggest.scss\n    Description: Styles for vx-auto-suggest component. Imported in VxAutoSuggest.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vx-auto-suggest {\n  position: relative;\n}\n.vx-auto-suggest .vs-input .vs-con-input .vs-inputx {\n  z-index: 10;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list {\n  position: absolute;\n  background: #fff;\n  width: 100%;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion {\n  padding: 0.8rem 1rem;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion.vx-auto-suggest__current-selected {\n  background: #F1F1F1;\n}\n.navbar-sticky .vx-auto-suggest .auto-suggest-suggestions-list {\n  margin-left: 0.5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "vx-auto-suggest" }, [
    _c(
      "div",
      { staticClass: "flex items-center relative" },
      [
        _c("vs-input", {
          ref: "input",
          staticClass: "z-50",
          class: _vm.inputClassses,
          attrs: {
            placeholder: _vm.placeholder,
            "icon-pack": "feather",
            icon: "icon-search",
            "icon-no-border": ""
          },
          on: {
            keyup: [
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, [
                    "Esc",
                    "Escape"
                  ])
                ) {
                  return null
                }
                return _vm.escPressed($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "up", 38, $event.key, [
                    "Up",
                    "ArrowUp"
                  ])
                ) {
                  return null
                }
                return _vm.increaseIndex(false)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "down", 40, $event.key, [
                    "Down",
                    "ArrowDown"
                  ])
                ) {
                  return null
                }
                return _vm.increaseIndex($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.suggestionSelected($event)
              }
            ],
            focus: _vm.updateInputFocus,
            blur: function($event) {
              return _vm.updateInputFocus(false)
            }
          },
          model: {
            value: _vm.searchQuery,
            callback: function($$v) {
              _vm.searchQuery = $$v
            },
            expression: "searchQuery"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "ul",
      {
        ref: "scrollContainer",
        staticClass:
          "auto-suggest-suggestions-list z-50 rounded-lg mt-2 shadow-lg overflow-hidden",
        class: { hidden: !_vm.inputFocused },
        attrs: { tabindex: "-1" },
        on: {
          mouseenter: function($event) {
            _vm.insideSuggestions = true
          },
          mouseleave: function($event) {
            _vm.insideSuggestions = false
          },
          focus: _vm.updateInputFocus,
          blur: function($event) {
            return _vm.updateInputFocus(false)
          }
        }
      },
      _vm._l(_vm.filteredData, function(suggestion, index) {
        return _c(
          "li",
          {
            key: index,
            ref: "option",
            refInFor: true,
            staticClass:
              "auto-suggest__suggestion flex items-center justify-between py-3 cursor-pointer",
            class: {
              "vx-auto-suggest__current-selected": _vm.currentSelected == index,
              "pointer-events-none": suggestion.index < 0
            },
            on: {
              mouseenter: function($event) {
                _vm.currentSelected = index
              },
              click: _vm.suggestionSelected
            }
          },
          [
            _c(
              "div",
              { staticClass: "flex items-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-4",
                  attrs: { icon: suggestion.labelIcon, svgClasses: "h-5 w-5" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(suggestion.label))])
              ],
              1
            ),
            _vm._v(" "),
            _vm.showAction
              ? _c("feather-icon", {
                  attrs: {
                    icon: _vm.data.actionIcon,
                    svgClasses: [
                      _vm.actionClasses(suggestion.highlightAction),
                      "h-5 w-5"
                    ]
                  },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.actionClicked($event)
                    }
                  }
                })
              : _vm._e()
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "footer",
    { staticClass: "the-footer flex-wrap justify-between", class: _vm.classes },
    [
      _c("span", [
        _vm._v("COPYRIGHT @ " + _vm._s(new Date().getFullYear()) + " "),
        _c(
          "a",
          {
            attrs: {
              href:
                "https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent",
              target: "_blank",
              rel: "nofollow"
            }
          },
          [_vm._v("Pixinvent")]
        ),
        _vm._v(", All rights Reserved")
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "md:flex hidden items-center" },
        [
          _c("span", [_vm._v("Hand-crafted & Made with")]),
          _vm._v(" "),
          _c("feather-icon", {
            staticClass: "ml-2",
            attrs: {
              icon: "HeartIcon",
              svgClasses: "stroke-current text-danger w-6 h-6"
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "relative" }, [
    _c(
      "div",
      { staticClass: "vx-navbar-wrapper" },
      [
        _c(
          "vs-navbar",
          {
            staticClass: "vx-navbar navbar-custom",
            class: _vm.classObj,
            attrs: { color: _vm.navbarColor }
          },
          [
            _c("feather-icon", {
              staticClass: "sm:inline-flex xl:hidden cursor-pointer mr-1",
              attrs: { icon: "MenuIcon" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.showSidebar($event)
                }
              }
            }),
            _vm._v(" "),
            _vm.breakpoint != "md"
              ? [
                  _c(
                    "ul",
                    { staticClass: "vx-navbar__starred-pages" },
                    [
                      _c(
                        "draggable",
                        {
                          staticClass: "flex cursor-move",
                          attrs: { group: { name: "pinList" } },
                          model: {
                            value: _vm.starredPagesLimited,
                            callback: function($$v) {
                              _vm.starredPagesLimited = $$v
                            },
                            expression: "starredPagesLimited"
                          }
                        },
                        _vm._l(_vm.starredPagesLimited, function(page) {
                          return _c(
                            "li",
                            { key: page.url, staticClass: "starred-page" },
                            [
                              _c(
                                "vx-tooltip",
                                {
                                  attrs: {
                                    text: page.label,
                                    position: "bottom",
                                    delay: ".3s"
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    staticClass: "p-2 cursor-pointer",
                                    attrs: {
                                      svgClasses: "h-6 w-6",
                                      icon: page.labelIcon
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.$router.push(page.url)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        0
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.starredPagesMore.length
                    ? _c(
                        "div",
                        {
                          staticClass: "vx-navbar__starred-pages--more-dropdown"
                        },
                        [
                          _c(
                            "vs-dropdown",
                            {
                              attrs: {
                                "vs-custom-content": "",
                                "vs-trigger-click": ""
                              }
                            },
                            [
                              _c("feather-icon", {
                                staticClass: "cursor-pointer p-2",
                                attrs: {
                                  icon: "ChevronDownIcon",
                                  svgClasses: "h-4 w-4"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-dropdown-menu", [
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "vx-navbar__starred-pages-more--list"
                                  },
                                  [
                                    _c(
                                      "draggable",
                                      {
                                        staticClass: "cursor-move",
                                        attrs: { group: { name: "pinList" } },
                                        model: {
                                          value: _vm.starredPagesMore,
                                          callback: function($$v) {
                                            _vm.starredPagesMore = $$v
                                          },
                                          expression: "starredPagesMore"
                                        }
                                      },
                                      _vm._l(_vm.starredPagesMore, function(
                                        page
                                      ) {
                                        return _c(
                                          "li",
                                          {
                                            key: page.url,
                                            staticClass:
                                              "starred-page--more flex items-center cursor-pointer",
                                            on: {
                                              click: function($event) {
                                                return _vm.$router.push(
                                                  page.url
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("feather-icon", {
                                              staticClass: "ml-2 mr-1",
                                              attrs: {
                                                svgClasses: "h-5 w-5",
                                                icon: page.labelIcon
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "px-2 pt-2 pb-1" },
                                              [_vm._v(_vm._s(page.label))]
                                            )
                                          ],
                                          1
                                        )
                                      }),
                                      0
                                    )
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "bookmark-container" },
                    [
                      _c("feather-icon", {
                        staticClass: "cursor-pointer p-2",
                        attrs: {
                          icon: "StarIcon",
                          svgClasses: [
                            "stoke-current text-warning",
                            { "text-white": _vm.navbarColor != "#fff" }
                          ]
                        },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            _vm.showBookmarkPagesDropdown = !_vm.showBookmarkPagesDropdown
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.showBookmarkPagesDropdown
                        ? _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "click-outside",
                                  rawName: "v-click-outside",
                                  value: _vm.outside,
                                  expression: "outside"
                                }
                              ],
                              staticClass:
                                "absolute bookmark-list w-1/3 xl:w-1/4 mt-4"
                            },
                            [
                              _c("vx-auto-suggest", {
                                attrs: {
                                  autoFocus: true,
                                  data: _vm.navbarSearchAndPinList,
                                  inputClassses: "w-full",
                                  "show-action": "",
                                  "show-pinned": "",
                                  "background-overlay": ""
                                },
                                on: {
                                  selected: _vm.selected,
                                  actionClicked: _vm.actionClicked
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("vs-spacer"),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showFullSearch,
                    expression: "showFullSearch"
                  }
                ],
                staticClass:
                  "search-full-container w-full h-full absolute left-0 rounded-lg",
                class: { flex: _vm.showFullSearch }
              },
              [
                _c("vx-auto-suggest", {
                  ref: "navbarSearch",
                  staticClass: "w-full",
                  attrs: {
                    autoFocus: _vm.showFullSearch,
                    data: _vm.navbarSearchAndPinList,
                    placeholder: "Search...",
                    inputClassses:
                      "w-full vs-input-no-border vs-input-no-shdow-focus no-icon-border",
                    icon: "SearchIcon",
                    "background-overlay": ""
                  },
                  on: {
                    selected: _vm.selected,
                    closeSearchbar: function($event) {
                      _vm.showFullSearch = false
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "absolute right-0 h-full z-50" },
                  [
                    _c("feather-icon", {
                      staticClass:
                        "px-4 cursor-pointer h-full close-search-icon",
                      attrs: { icon: "XIcon" },
                      on: {
                        click: function($event) {
                          _vm.showFullSearch = false
                        }
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("feather-icon", {
              staticClass: "cursor-pointer navbar-fuzzy-search ml-4",
              attrs: { icon: "SearchIcon" },
              on: {
                click: function($event) {
                  _vm.showFullSearch = true
                }
              }
            }),
            _vm._v(" "),
            _c(
              "vs-dropdown",
              {
                staticClass: "cursor-pointer ml-4",
                attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
              },
              [
                _c("feather-icon", {
                  staticClass: "cursor-pointer mt-1 sm:mr-6 mr-2",
                  attrs: {
                    icon: "BellIcon",
                    badge: _vm.unreadNotifications.length
                  }
                }),
                _vm._v(" "),
                _c(
                  "vs-dropdown-menu",
                  {
                    staticClass:
                      "notification-dropdown dropdown-custom vx-navbar-dropdown"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "notification-top text-center p-5 bg-primary text-white"
                      },
                      [
                        _c("h3", { staticClass: "text-white" }, [
                          _vm._v(
                            _vm._s(_vm.unreadNotifications.length) + " New"
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "opacity-75" }, [
                          _vm._v("App Notifications")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "VuePerfectScrollbar",
                      {
                        ref: "mainSidebarPs",
                        staticClass:
                          "scroll-area--nofications-dropdown p-0 mb-10",
                        attrs: { settings: _vm.settings }
                      },
                      [
                        _c(
                          "ul",
                          { staticClass: "bordered-items" },
                          _vm._l(_vm.unreadNotifications, function(ntf) {
                            return _c(
                              "li",
                              {
                                key: ntf.index,
                                staticClass:
                                  "flex justify-between px-4 py-4 notification cursor-pointer"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "flex items-start" },
                                  [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: ntf.icon,
                                        svgClasses: [
                                          "text-" + ntf.category,
                                          "stroke-current mr-1 h-6 w-6"
                                        ]
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mx-2" }, [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "font-medium block notification-title",
                                          class: ["text-" + ntf.category]
                                        },
                                        [_vm._v(_vm._s(ntf.title))]
                                      ),
                                      _vm._v(" "),
                                      _c("small", [_vm._v(_vm._s(ntf.msg))])
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "mt-1 whitespace-no-wrap" },
                                  [_vm._v(_vm._s(_vm.elapsedTime(ntf.time)))]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "\n                        checkout-footer\n                        fixed\n                        bottom-0\n                        rounded-b-lg\n                        text-primary\n                        w-full\n                        p-2\n                        font-semibold\n                        text-center\n                        border\n                        border-b-0\n                        border-l-0\n                        border-r-0\n                        border-solid\n                        d-theme-border-grey-light\n                        cursor-pointer"
                      },
                      [_c("span", [_vm._v("View All Notifications")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "the-navbar__user-meta flex items-center" },
              [
                _c(
                  "div",
                  { staticClass: "text-right leading-tight hidden sm:block" },
                  [
                    _c("p", { staticClass: "font-semibold" }, [
                      _vm._v("John Doe")
                    ]),
                    _vm._v(" "),
                    _c("small", [_vm._v("Available")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vs-dropdown",
                  {
                    staticClass: "cursor-pointer",
                    attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
                  },
                  [
                    _c("div", { staticClass: "con-img ml-3" }, [
                      _c("img", {
                        staticClass:
                          "rounded-full shadow-md cursor-pointer block",
                        attrs: {
                          src: __webpack_require__(/*! ../../../../assets/images/portrait/small/avatar-s-11.png */ "./resources/assets/images/portrait/small/avatar-s-11.png"),
                          alt: "",
                          width: "40",
                          height: "40"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown-menu",
                      { staticClass: "vx-navbar-dropdown" },
                      [
                        _c(
                          "ul",
                          { staticStyle: { "min-width": "9rem" } },
                          [
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push("/pages/profile")
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "UserIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Profile")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push("/apps/email")
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "MailIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Inbox")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push("/apps/todo")
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "CheckSquareIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Tasks")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push("/apps/chat")
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "MessageSquareIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Chat")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("vs-divider", { staticClass: "m-1" }),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push("/pages/login")
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "LogOutIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Logout")
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "layout--main",
      class: [
        _vm.navbarClasses,
        _vm.footerClasses,
        { "app-page": _vm.isAppPage }
      ]
    },
    [
      _c("vx-sidebar", {
        attrs: {
          sidebarItems: _vm.sidebarItems,
          logo: __webpack_require__(/*! @assets/images/logo/logo.png */ "./resources/assets/images/logo/logo.png"),
          title: "Vuesax",
          parent: ".layout--main"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [_vm.contentAreaClass, { "show-overlay": _vm.bodyOverlay }],
          attrs: { id: "content-area" }
        },
        [
          _c("div", { attrs: { id: "content-overlay" } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "content-wrapper" },
            [
              _c("the-navbar", {
                class: [
                  { "text-white": _vm.isNavbarDark && !_vm.isThemeDark },
                  { "text-base": !_vm.isNavbarDark && _vm.isThemeDark }
                ],
                attrs: { navbarColor: _vm.navbarColor }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "router-view" }, [
                _c(
                  "div",
                  {
                    staticClass: "router-content",
                    class: { "mt-0": _vm.navbarType == "hidden" }
                  },
                  [
                    _c(
                      "transition",
                      { attrs: { name: _vm.routerTransition } },
                      [
                        _vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "router-header flex flex-wrap items-center mb-6"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "content-area__heading",
                                    class: {
                                      "pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light":
                                        _vm.$route.meta.breadcrumb
                                    }
                                  },
                                  [
                                    _c("h2", { staticClass: "mb-1" }, [
                                      _vm._v(_vm._s(_vm.routeTitle))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.$route.meta.breadcrumb
                                  ? _c("vx-breadcrumb", {
                                      staticClass: "ml-4 md:block hidden"
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "vs-dropdown",
                                  {
                                    staticClass:
                                      "ml-auto md:block hidden cursor-pointer",
                                    attrs: { "vs-trigger-click": "" }
                                  },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        radius: "",
                                        icon: "icon-settings",
                                        "icon-pack": "feather"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "vs-dropdown-menu",
                                      { staticClass: "w-32" },
                                      [
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/pages/profile"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "UserIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Profile")])
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/apps/todo"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "CheckSquareIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Tasks")])
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/apps/email"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "MailIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Inbox")])
                                            ],
                                            1
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "content-area__content" },
                      [
                        !_vm.hideScrollToTop
                          ? _c(
                              "back-to-top",
                              { attrs: { bottom: "5%", visibleoffset: "500" } },
                              [
                                _c("vs-button", {
                                  staticClass: "shadow-lg",
                                  attrs: {
                                    "icon-pack": "feather",
                                    icon: "icon-arrow-up"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "transition",
                          {
                            attrs: {
                              name: _vm.routerTransition,
                              mode: "out-in"
                            }
                          },
                          [
                            _c("router-view", {
                              on: { changeRouteTitle: _vm.changeRouteTitle }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("the-footer")
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

/***/ "./resources/assets/images/portrait/small/avatar-s-11.png":
/*!****************************************************************!*\
  !*** ./resources/assets/images/portrait/small/avatar-s-11.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-11.png?51a23c074bd7469a69e220c62dce541a";

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=template&id=3b23de25& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&");
/* harmony import */ var _VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=script&lang=js& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=template&id=3b23de25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=287afc22& */ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/TheFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=template&id=287afc22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheNavbar.vue?vue&type=template&id=71a5bfd2& */ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&");
/* harmony import */ var _TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheNavbar.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/TheNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=template&id=71a5bfd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue":
/*!************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=22fa5a70& */ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/main/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=22fa5a70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);