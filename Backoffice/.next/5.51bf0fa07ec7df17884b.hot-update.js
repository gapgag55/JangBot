webpackHotUpdate(5,{

/***/ "./node_modules/add-dom-event-listener/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;

var _EventObject = __webpack_require__("./node_modules/add-dom-event-listener/lib/EventObject.js");

var _EventObject2 = _interopRequireDefault(_EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/_util/isFlexSupported.js":
false,

/***/ "./node_modules/antd/lib/tabs/index.js":
false,

/***/ "./node_modules/lodash/debounce.js":
false,

/***/ "./node_modules/lodash/now.js":
false,

/***/ "./node_modules/lodash/toNumber.js":
false,

/***/ "./node_modules/rc-tabs/es/KeyCode.js":
false,

/***/ "./node_modules/rc-tabs/es/TabContent.js":
false,

/***/ "./node_modules/rc-tabs/es/TabPane.js":
false,

/***/ "./node_modules/rc-tabs/es/Tabs.js":
false,

/***/ "./node_modules/rc-tabs/es/index.js":
false,

/***/ "./node_modules/rc-tabs/es/utils.js":
false,

/***/ "./node_modules/rc-tabs/lib/InkTabBarNode.js":
false,

/***/ "./node_modules/rc-tabs/lib/SaveRef.js":
false,

/***/ "./node_modules/rc-tabs/lib/ScrollableInkTabBar.js":
false,

/***/ "./node_modules/rc-tabs/lib/ScrollableTabBarNode.js":
false,

/***/ "./node_modules/rc-tabs/lib/TabBarRootNode.js":
false,

/***/ "./node_modules/rc-tabs/lib/TabBarTabsNode.js":
false,

/***/ "./node_modules/rc-tabs/lib/TabContent.js":
false,

/***/ "./node_modules/rc-tabs/lib/utils.js":
false,

/***/ "./node_modules/rc-util/es/Dom/addEventListener.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addEventListenerWrap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener__ = __webpack_require__("./node_modules/add-dom-event-listener/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);



function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unstable_batchedUpdates ? function run(e) {
    __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unstable_batchedUpdates(cb, e);
  } : cb;
  return __WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener___default()(target, eventType, callback);
}

/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/addEventListener.js":
false,

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__ = __webpack_require__("./node_modules/antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Wrapper__ = __webpack_require__("./components/Wrapper.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_HomeworkForm__ = __webpack_require__("./containers/HomeworkForm.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_TableItems__ = __webpack_require__("./containers/TableItems.jsx");

var _jsxFileName = "/Users/kopkap/Documents/work-with-knowledge/Jang/Backoffice/pages/index.js";




var Content = __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a.Content;

var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Wrapper__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Content, {
    style: {
      margin: '24px 16px',
      padding: 24,
      background: '#fff',
      minHeight: 280
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a, {
    style: {
      background: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_HomeworkForm__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_TableItems__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.51bf0fa07ec7df17884b.hot-update.js.map