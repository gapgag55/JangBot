webpackHotUpdate(5,{

/***/ "./containers/TableItems.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table__ = __webpack_require__("./node_modules/antd/lib/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_spin__ = __webpack_require__("./node_modules/antd/lib/spin/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_spin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_spin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_divider__ = __webpack_require__("./node_modules/antd/lib/divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utilities_request__ = __webpack_require__("./utilities/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_api__ = __webpack_require__("./config/api.js");




var _jsxFileName = "/Users/kopkap/Documents/work-with-knowledge/Jang/Backoffice/containers/TableItems.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var columns = [{
  title: 'ชื่อวิชา',
  dataIndex: 'subject',
  key: 'subject',
  render: function render(text) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
      href: "javascript:;",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, text);
  }
}, {
  title: 'รายละเอียด',
  dataIndex: 'description',
  key: 'description'
}, {
  title: 'ประเภท',
  dataIndex: 'type',
  key: 'type'
}, {
  title: 'วันกำหนดส่ง',
  dataIndex: 'date',
  key: 'date'
}, {
  title: 'เวลากำหนดส่ง',
  dataIndex: 'time',
  key: 'time'
}, {
  title: 'แจ้งล่วงหน้า​ (วัน)',
  dataIndex: 'appointment',
  key: 'appointment'
}, {
  title: 'Action',
  key: 'action',
  render: function render(text, record) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
      href: "javascript:;",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, "\u0E41\u0E01\u0E49\u0E44\u0E02"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_divider___default.a, {
      type: "vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
      href: "javascript:;",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, "\u0E25\u0E1A"));
  }
}];

var TableItems =
/*#__PURE__*/
function (_Component) {
  _inherits(TableItems, _Component);

  function TableItems() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, TableItems);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = TableItems.__proto__ || Object.getPrototypeOf(TableItems)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        isLoading: true,
        data: []
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "removeHomework", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {}
    }), Object.defineProperty(_assertThisInitialized(_this), "updateHomework", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {}
    }), Object.defineProperty(_assertThisInitialized(_this), "getData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee() {
          var _ref2, statusCode, data, convertedData;

          return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __WEBPACK_IMPORTED_MODULE_6__utilities_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_7__config_api__["a" /* default */].url.homework);

                case 2:
                  _ref2 = _context.sent;
                  statusCode = _ref2.statusCode;
                  data = _ref2.data;

                  if (statusCode) {
                    convertedData = data.map(function (item, key) {
                      var subject = item.subject,
                          description = item.description,
                          type = item.type,
                          due_date = item.due_date,
                          due_time = item.due_time,
                          appointment = item.appointment;
                      console.log(__WEBPACK_IMPORTED_MODULE_5_moment___default.a.locale());
                      return {
                        key: key,
                        subject: subject,
                        description: description,
                        type: type,
                        date: __WEBPACK_IMPORTED_MODULE_5_moment___default()(due_date).format('LL'),
                        time: __WEBPACK_IMPORTED_MODULE_5_moment___default()(due_time).format('LT'),
                        appointment: appointment
                      };
                    });

                    _this.setState({
                      isLoading: false,
                      data: convertedData
                    });
                  }

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(TableItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          data = _state.data;
      if (isLoading) return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_spin___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      });
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_table___default.a, {
        columns: columns,
        dataSource: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      });
    }
  }]);

  return TableItems;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TableItems);

/***/ })

})
//# sourceMappingURL=5.7535103d6f7bcf5da582.hot-update.js.map