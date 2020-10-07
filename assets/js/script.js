/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/certs.js":
/*!********************************!*\
  !*** ./src/assets/js/certs.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

 // configure Swiper to use modules

swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_1__["Pagination"]]);
var SWIPER_CONFIG = {
  loop: true,
  observer: true,
  observeParents: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  },
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2
    }
  }
};
var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('#certs-slider', SWIPER_CONFIG);
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function (e) {
  mySwiper.destroy();
  mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('#certs-slider', SWIPER_CONFIG);
});

/***/ }),

/***/ "./src/assets/js/constructor.js":
/*!**************************************!*\
  !*** ./src/assets/js/constructor.js ***!
  \**************************************/
/*! exports provided: Constructor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constructor", function() { return Constructor; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var DEFAULT_OPTIONS = {
  currentStep: 0,
  progressBarPercentage: 0,
  prevStepSelector: '.constructor__actions-prev',
  nextStepSelector: '.constructor__actions-next',
  headings: ['Какая у вас модель телевизора?', 'Какова причина поломки?', 'Какая диагональ экрана?', 'Был ли телевизор в ремонте?', 'Сколько лет телевизору?', 'Остался последний шаг']
};

var Constructor = /*#__PURE__*/function () {
  function Constructor(options) {
    _classCallCheck(this, Constructor);

    if (options === undefined) options = DEFAULT_OPTIONS;
    this.currentStep = options.currentStep;
    this.progressBarPercentage = options.progressBarPercentage;
    this.prevStepSelector = options.prevStepSelector;
    this.nextStepSelector = options.nextStepSelector;
    this.headings = options.headings;
    this.maxSteps = options.headings.length;
    this.init();
  }

  _createClass(Constructor, [{
    key: "listenToClickPrevButton",
    value: function listenToClickPrevButton(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).on('click', function () {
        this.prevStep();
      }.bind(this));
    }
  }, {
    key: "listenToClickNextButton",
    value: function listenToClickNextButton(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).on('click', function () {
        this.nextStep();
      }.bind(this));
    }
  }, {
    key: "listenToClickAnswer",
    value: function listenToClickAnswer() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__answers-list-item').on('click', function (e) {
        this.changeNextButtonColor();
      }.bind(this));
    }
  }, {
    key: "createProgressBar",
    value: function createProgressBar() {
      var createElement = function createElement(tag, attributes) {
        if (tag === undefined) throw Error('"tag" argument can\'t be undefined');

        var camelCaseToDash = function camelCaseToDash(str) {
          return str.replace(/[^a-zA-Z0-9]+/g, '-').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([0-9])([^0-9])/g, '$1-$2').replace(/([^0-9])([0-9])/g, '$1-$2').replace(/-+/g, '-').toLowerCase();
        };

        var element = document.createElement(tag);

        if (attributes !== undefined && _typeof(attributes) === 'object') {
          for (var key in attributes) {
            var normalizedAttrName = camelCaseToDash(key);
            element.setAttribute(normalizedAttrName, attributes[key]);
          }
        }

        for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          children[_key - 2] = arguments[_key];
        }

        if (children.length > 0) {
          var _$;

          (_$ = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)).append.apply(_$, children);
        }

        return element;
      };

      for (var i = 0; i < this.maxSteps - 1; i++) {
        var bar = createElement('div', {
          class: 'constructor__progress-dummy'
        }, createElement('div', {
          class: 'constructor__progress-dummy-inner'
        }));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__progress').append(bar);
      }
    }
  }, {
    key: "init",
    value: function init() {
      var currentStep = this.currentStep;
      var maxSteps = this.maxSteps;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#constructor-current').text(currentStep + 1);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#constructor-header-max').text(maxSteps);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#constructor-max').text(maxSteps);
      this.listenToClickAnswer();
      this.listenToClickPrevButton(this.prevStepSelector);
      this.listenToClickNextButton(this.nextStepSelector);
      this.createProgressBar();
      this.updateProgress();
    }
  }, {
    key: "prevStep",
    value: function prevStep() {
      var currentStep = this.currentStep;
      if (currentStep < 1) return;
      this.currentStep = currentStep - 1;
      this.progressBarPercentage = this.currentStep / this.maxSteps * 100;
      this.updateProgress();
      return this.currentStep;
    }
  }, {
    key: "nextStep",
    value: function nextStep() {
      var currentStep = this.currentStep;
      var maxSteps = this.maxSteps;
      if (currentStep >= maxSteps || !this.isCurrentStepValid()) return;
      this.currentStep = currentStep + 1;
      this.progressBarPercentage = this.currentStep / this.maxSteps * 100;
      this.updateProgress();
      return this.currentStep;
    }
  }, {
    key: "isCurrentStepValid",
    value: function isCurrentStepValid() {
      var currentStep = this.currentStep;
      var radiosInStep = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__answers-list-item').eq(currentStep).find('input[type="radio"]').length;
      if (!radiosInStep) return true;
      var checkedRadiosAmount = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__answers-list-item').eq(currentStep).find('input:checked').length;
      if (checkedRadiosAmount) return true;
      return false;
    }
  }, {
    key: "changeNextButtonColor",
    value: function changeNextButtonColor() {
      var isValid = this.isCurrentStepValid();
      if (isValid) jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.nextStepSelector).addClass('constructor__actions-next--valid');else jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.nextStepSelector).removeClass('constructor__actions-next--valid');
    }
  }, {
    key: "updateProgressBar",
    value: function updateProgressBar() {
      var currentStep = this.currentStep;
      var maxSteps = this.maxSteps;

      for (var i = 0; i < currentStep; i++) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__progress-dummy').eq(i).addClass('constructor__progress-dummy--active');
      }

      for (var _i = currentStep; _i < maxSteps; _i++) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__progress-dummy').eq(_i).removeClass('constructor__progress-dummy--active');
      }
    }
  }, {
    key: "updateProgress",
    value: function updateProgress() {
      var currentStep = this.currentStep;
      var maxSteps = this.maxSteps;
      var headings = this.headings;
      var progressBarPercentage = this.progressBarPercentage;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#constructor-current').text(this.currentStep + 1);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__question').text(headings[currentStep]);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__answers-list-item').eq(currentStep).addClass('constructor__answers-list-item--active').siblings().removeClass('constructor__answers-list-item--active');

      if (currentStep === maxSteps - 1) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__current').hide();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__footer').hide();
      }

      this.updateProgressBar();
      this.changeNextButtonColor();
    }
  }, {
    key: "showThanks",
    value: function showThanks() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__current').hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__question').hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__answers-list').hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__footer').hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.constructor__thanks').show().css({
        display: 'flex'
      });
    }
  }]);

  return Constructor;
}();



/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_isNan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/isNan */ "./src/assets/js/polyfills/isNan.js");
/* harmony import */ var _polyfills_isNan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_isNan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation */ "./src/assets/js/navigation.js");
/* harmony import */ var _smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smooth-scroll */ "./src/assets/js/smooth-scroll.js");
/* harmony import */ var _scroll_spy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scroll-spy */ "./src/assets/js/scroll-spy.js");
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constructor */ "./src/assets/js/constructor.js");
/* harmony import */ var _certs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./certs */ "./src/assets/js/certs.js");









var constructor = new _constructor__WEBPACK_IMPORTED_MODULE_7__["Constructor"]();

/***/ }),

/***/ "./src/assets/js/navigation.js":
/*!*************************************!*\
  !*** ./src/assets/js/navigation.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navigation__hamburger').on('click', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navigation__hamburger').toggleClass('navigation__hamburger--active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-navigation').toggleClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navigation__mobile').toggleClass('active');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navigation__list-item').on('click', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navigation__hamburger').removeClass('navigation__hamburger--active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-navigation').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navigation__mobile').removeClass('active');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').css({
  paddingTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-navigation').innerHeight()
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').css({
    paddingTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-navigation').innerHeight()
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-navigation').removeClass('navigation--scrolled');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function (e) {
  if (window.innerWidth > 991) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > 200) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-navigation').addClass('navigation--scrolled');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-navigation').removeClass('navigation--scrolled');
    }
  }
});

/***/ }),

/***/ "./src/assets/js/polyfills/isNan.js":
/*!******************************************!*\
  !*** ./src/assets/js/polyfills/isNan.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Number.isNaN = Number.isNaN || function (value) {
  return typeof value === 'number' && isNaN(value);
};

/***/ }),

/***/ "./src/assets/js/scroll-spy.js":
/*!*************************************!*\
  !*** ./src/assets/js/scroll-spy.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gumshoejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gumshoejs */ "./node_modules/gumshoejs/dist/gumshoe.min.js");
/* harmony import */ var gumshoejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gumshoejs__WEBPACK_IMPORTED_MODULE_1__);


var spy = new gumshoejs__WEBPACK_IMPORTED_MODULE_1___default.a('#main-navigation a', {
  offset: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-navigation').innerHeight()
});
/* harmony default export */ __webpack_exports__["default"] = (spy);

/***/ }),

/***/ "./src/assets/js/smooth-scroll.js":
/*!****************************************!*\
  !*** ./src/assets/js/smooth-scroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



var calculateOffset = function calculateOffset() {
  return jquery__WEBPACK_IMPORTED_MODULE_1___default()('#main-navigation').innerHeight();
};

var SCROLL_LINK = 'a[href*="#"]';
var scroll = new smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default.a(SCROLL_LINK, {
  speed: 300,
  speedAsDuration: true,
  offset: calculateOffset()
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('resize', function (e) {
  scroll.destroy();
  scroll = new smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default.a(SCROLL_LINK, {
    speed: 300,
    speedAsDuration: true,
    offset: calculateOffset()
  });
});
/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ }),

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************!*\
  !*** multi ./src/assets/js/index.js ./src/assets/scss/style.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/assets/js/index.js */"./src/assets/js/index.js");
module.exports = __webpack_require__(/*! ./src/assets/scss/style.scss */"./src/assets/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map