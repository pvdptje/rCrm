/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
* Shards Dashboards v1.1.0
* Copyright 2011-2018 DesignRevision
* SEE LICENSE FILE
*/
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';

  if (typeof Chart === 'undefined') {
    throw new Error('Shards Dashboard requires the Chart.js library in order to function properly.');
  }

  window.ShardsDashboards = window.ShardsDashboards ? window.ShardsDashboards : {};
  $.extend($.easing, {
    easeOutSine: function easeOutSine(x, t, b, c, d) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    }
  });
  $(document).ready(function () {
    /**
     * Dropdown adjustments
     */
    var slideConfig = {
      duration: 270,
      easing: 'easeOutSine'
    }; // Add dropdown animations when toggled.

    $(':not(.main-sidebar--icons-only) .dropdown').on('show.bs.dropdown', function () {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown(slideConfig);
    });
    $(':not(.main-sidebar--icons-only) .dropdown').on('hide.bs.dropdown', function () {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp(slideConfig);
    });
    /**
     * Sidebar toggles
     */

    $('.toggle-sidebar').click(function (e) {
      $('.main-sidebar').toggleClass('open');
    });
    /**
     * Avatar upload
     */

    $('input[name=avatar]').change(function (e) {
      var file = e.target.files[0];
      var form = new FormData();
      var imgId = $(this).data('img');
      var img = $(imgId);
      var avatarErrorDiv = $("#avatar-error");
      avatarErrorDiv.addClass('d-none');
      form.append('avatar', file);
      form.append('_token', $(this).data('token'));
      $.post({
        url: '/upload/user/avatar',
        data: form,
        processData: false,
        contentType: false
      }).done(function (response) {
        img.attr('src', response);
      }).fail(function (error) {
        var errorMessage = error.responseJSON.errors.avatar[0];
        avatarErrorDiv.html('<p class="mb-0">' + errorMessage + '</p>');
        avatarErrorDiv.removeClass('d-none');
      });
    });
    /**
     * Confirm elements
     */

    $('.confirm').click(function (e) {
      var message = $(this).data('msg');

      if (!confirm(message)) {
        e.preventDefault();
      }
    });
  });
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\MAMP\htdocs\rCrm.io\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\rCrm.io\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });