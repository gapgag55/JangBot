webpackHotUpdate(5,{

/***/ "./containers/SettingForm.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input__ = __webpack_require__("./node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_form__ = __webpack_require__("./node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_request__ = __webpack_require__("./utilities/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_api__ = __webpack_require__("./config/api.js");




var _jsxFileName = "/Users/kopkap/Documents/work-with-knowledge/Jang/Backoffice/containers/SettingForm.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var FormItem = __WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a.Item;

var HomeworkForm =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeworkForm, _Component);

  function HomeworkForm() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, HomeworkForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = HomeworkForm.__proto__ || Object.getPrototypeOf(HomeworkForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "getSetting", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee() {
          var form, _ref2, statusCode, data, _data$, channel_access_token, group_id;

          return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  form = _this.props.form;
                  _context.next = 3;
                  return __WEBPACK_IMPORTED_MODULE_5__utilities_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_6__config_api__["a" /* default */].url.settings);

                case 3:
                  _ref2 = _context.sent;
                  statusCode = _ref2.statusCode;
                  data = _ref2.data;

                  if (statusCode) {
                    _data$ = data[0], channel_access_token = _data$.channel_access_token, group_id = _data$.group_id;
                    form.setFieldsValue({
                      channel_access_token: channel_access_token,
                      group_id: group_id
                    });
                  }

                case 7:
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
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.props.form.validateFieldsAndScroll(
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee2(err, values) {
            return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!err) {
                      console.log(values); // for (let key in values) {
                      //   await request.update(api.url.settings, values);
                      // }

                      _this.getSetting();
                    }

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function (_x, _x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
    }), _temp));
  }

  _createClass(HomeworkForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getSetting();
    }
  }, {
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 5
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 10
          }
        }
      };
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 2,
            offset: 14
          },
          sm: {
            span: 2,
            offset: 5
          }
        }
      };
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Line Channel Access Token",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), getFieldDecorator('channel_access_token', {
        rules: [{
          message: 'The input is not valid E-mail!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Group ID",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), getFieldDecorator('group_id', {
        rules: [{
          message: 'The input is not valid E-mail!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FormItem, _extends({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Save")));
    }
  }]);

  return HomeworkForm;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a.create()(HomeworkForm));

/***/ })

})
//# sourceMappingURL=5.1d040a17cff07f1ae807.hot-update.js.map