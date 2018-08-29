webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification__ = __webpack_require__("./node_modules/antd/lib/notification/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__ = __webpack_require__("./node_modules/antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Wrapper__ = __webpack_require__("./components/Wrapper.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_HomeworkForm__ = __webpack_require__("./containers/HomeworkForm.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_TableItems__ = __webpack_require__("./containers/TableItems.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utilities_request__ = __webpack_require__("./utilities/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_api__ = __webpack_require__("./config/api.js");



var _jsxFileName = "/Users/kopkap/Documents/work-with-knowledge/Jang/Backoffice/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Content = __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Content;

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        isLoading: true,
        data: []
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "addHomework", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(form) {
        var self = _assertThisInitialized(_this);

        form.validateFieldsAndScroll(
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(err, values) {
            var _ref3, statusCode, message;

            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    form.resetFields();

                    if (err) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 4;
                    return __WEBPACK_IMPORTED_MODULE_8__utilities_request__["a" /* default */].post(__WEBPACK_IMPORTED_MODULE_9__config_api__["a" /* default */].url.homework, values);

                  case 4:
                    _ref3 = _context.sent;
                    statusCode = _ref3.statusCode;
                    message = statusCode == 200 ? 'Send Message: Success' : 'Send Message: Fail';

                    __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
                      message: message
                    });

                    self.getHomework();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function (_x, _x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "getHomework", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
          var _ref4, statusCode, data, convertedData;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this.setState({
                    isLoading: true
                  });

                  _context2.next = 3;
                  return __WEBPACK_IMPORTED_MODULE_8__utilities_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_9__config_api__["a" /* default */].url.homework);

                case 3:
                  _ref4 = _context2.sent;
                  statusCode = _ref4.statusCode;
                  data = _ref4.data;

                  if (statusCode) {
                    convertedData = data.map(function (item, key) {
                      var _id = item._id,
                          subject = item.subject,
                          description = item.description,
                          type = item.type,
                          due_date = item.due_date,
                          due_time = item.due_time,
                          appointment = item.appointment;
                      __WEBPACK_IMPORTED_MODULE_4_moment___default.a.locale('th');
                      return {
                        key: key,
                        id: _id,
                        subject: subject,
                        description: description,
                        type: type,
                        date: __WEBPACK_IMPORTED_MODULE_4_moment___default()(due_date).format('LL'),
                        time: __WEBPACK_IMPORTED_MODULE_4_moment___default()(due_time).format('LT'),
                        appointment: appointment
                      };
                    });

                    _this.setState({
                      isLoading: false,
                      data: convertedData
                    });
                  }

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "updateHomework", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(id) {
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function value(_x3) {
          return _value2.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "deleteHomework", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4() {
          var _ref5, statusCode, message;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return __WEBPACK_IMPORTED_MODULE_8__utilities_request__["a" /* default */].remove(__WEBPACK_IMPORTED_MODULE_9__config_api__["a" /* default */].url.homework, values);

                case 2:
                  _ref5 = _context4.sent;
                  statusCode = _ref5.statusCode;
                  message = statusCode == 200 ? 'Send Message: Success' : 'Send Message: Fail';

                  __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a.open({
                    message: message
                  });

                  self.getHomework();

                case 7:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function value() {
          return _value3.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getHomework();
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          data = _state.data,
          isLoading = _state.isLoading;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Wrapper__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Content, {
        style: {
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a, {
        style: {
          background: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_HomeworkForm__["a" /* default */], {
        onSubmit: this.addHomework,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__containers_TableItems__["a" /* default */], {
        isLoading: isLoading,
        data: data,
        onUpdate: this.updateHomework,
        onDelete: this.deleteHomework,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }))));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

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
//# sourceMappingURL=5.9b2996e49e6f1ffd6814.hot-update.js.map