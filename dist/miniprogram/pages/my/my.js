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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataStore = function () {
    _createClass(DataStore, null, [{
        key: 'getInstance',
        value: function getInstance() {
            if (!DataStore.instance) {
                DataStore.instance = new DataStore();
            }
            return DataStore.instance;
        }
    }]);

    function DataStore() {
        _classCallCheck(this, DataStore);

        this.map = new Map();
    }

    _createClass(DataStore, [{
        key: 'put',
        value: function put(key, Value) {
            if (typeof Value === 'function') {
                // 保存构造函数实例
                Value = new Value();
            }
            this.map.set(key, Value);
            return this;
        }
    }, {
        key: 'get',
        value: function get(key) {
            return this.map.get(key);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.map.clear();
        }
    }]);

    return DataStore;
}();

exports.default = DataStore.getInstance();

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bus = function () {
    _createClass(Bus, null, [{
        key: 'getInstance',
        value: function getInstance() {
            if (!Bus.instance) {
                Bus.instance = new Bus();
            }
            return Bus.instance;
        }
    }]);

    function Bus() {
        _classCallCheck(this, Bus);

        this._watcher = {};
    }

    _createClass(Bus, [{
        key: 'on',
        value: function on(name, handler) {
            if (!(handler instanceof Function)) {
                throw Error('第二个参数应该是函数,但获取的是' + (typeof handler === 'undefined' ? 'undefined' : _typeof(handler)));
            }

            if (this._watcher[name]) {
                this._watcher[name].push(handler);
            } else {
                this._watcher[name] = [handler];
            }
            return this;
        }
    }, {
        key: 'emit',
        value: function emit(name) {
            if (!this._watcher[name]) return;
            var args = Array.prototype.slice.call(arguments, 1);
            this._watcher[name].forEach(function (handler) {
                handler.apply(null, args);
            });

            return this;
        }
    }, {
        key: 'off',
        value: function off(name, handler) {
            var index = this._watcher[name].indexOf(handler);

            if (index < 0) return this;
            this._watcher[name].splice(index, 1);
            return this;
        }
    }]);

    return Bus;
}();

exports.default = Bus.getInstance();

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(60);


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dataStore = __webpack_require__(2);

var _dataStore2 = _interopRequireDefault(_dataStore);

var _bus = __webpack_require__(4);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Page({
    data: {
        nickName: {},
        avatarUrl: '',
        likeCount: 0
    },

    onLoad: function onLoad() {
        var _this = this;

        var _dataStore$get = _dataStore2.default.get('userInfo'),
            nickName = _dataStore$get.nickName,
            avatarUrl = _dataStore$get.avatarUrl;

        this.setData({ nickName: nickName, avatarUrl: avatarUrl });

        this.likeCountRequest().then(function (_ref) {
            var result = _ref.result;

            _this.setData({ likeCount: result });
        });

        _bus2.default.on('likeEvent', this.$OnLikeEvent).on('mulLike', this.$OnMulLike);
    },

    onUnload: function onUnload() {
        _bus2.default.off('likeEvent', this.$OnLikeEvent).off('mulLike', this.$OnMulLike);
    },

    onPullDownRefresh: function onPullDownRefresh() {
        var _this2 = this;

        this.likeCountRequest().then(function (_ref2) {
            var result = _ref2.result;

            _this2.setData({ likeCount: result });
            wx.stopPullDownRefresh();
        }).catch(wx.stopPullDownRefresh);
    },

    likeCountRequest: function likeCountRequest() {
        return wx.cloud.callFunction({
            name: 'api',
            data: {
                controller: 'LikeController',
                action: 'likeCount'
            }
        });
    },

    $OnLikeEvent: function $OnLikeEvent(id, hasLike) {
        var likeCount = hasLike ? this.data.likeCount - 1 : this.data.likeCount + 1;
        this.setData({ likeCount: likeCount });
    },

    $OnMulLike: function $OnMulLike() {
        var likeCount = this.data.likeCount - 1;
        this.setData({ likeCount: likeCount });
    }
});

/***/ })

/******/ });