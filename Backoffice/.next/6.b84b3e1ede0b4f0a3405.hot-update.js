webpackHotUpdate(6,{

/***/ "./containers/NotifyForm.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input__ = __webpack_require__("./node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_select__ = __webpack_require__("./node_modules/antd/lib/select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_form__ = __webpack_require__("./node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);




var _jsxFileName = "/Users/kopkap/Documents/work-with-knowledge/Jang/Backoffice/containers/NotifyForm.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var FormItem = __WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a.Item;
var Option = __WEBPACK_IMPORTED_MODULE_2_antd_lib_select___default.a.Option;

var NotifyForm =
/*#__PURE__*/
function (_Component) {
  _inherits(NotifyForm, _Component);

  function NotifyForm() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, NotifyForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = NotifyForm.__proto__ || Object.getPrototypeOf(NotifyForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        confirmDirty: false,
        autoCompleteResult: []
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleConfirmBlur", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var value = e.target.value;

        _this.setState({
          confirmDirty: _this.state.confirmDirty || !!value
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "compareToFirstPassword", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(rule, _value, callback) {
        var form = _this.props.form;

        if (_value && _value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "validateToNextPassword", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(rule, _value2, callback) {
        var form = _this.props.form;

        if (_value2 && _this.state.confirmDirty) {
          form.validateFields(['confirm'], {
            force: true
          });
        }

        callback();
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleWebsiteChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value3) {
        var autoCompleteResult;

        if (!_value3) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(function (domain) {
            return "".concat(_value3).concat(domain);
          });
        }

        _this.setState({
          autoCompleteResult: autoCompleteResult
        });
      }
    }), _temp));
  }

  _createClass(NotifyForm, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 4
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
            offset: 4
          }
        }
      };
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), getFieldDecorator('type', {
        rules: [{
          required: true,
          message: 'Please select your gender!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_select___default.a, {
        placeholder: "Select a option and change input text above",
        onChange: this.handleSelectChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Option, {
        value: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Text"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Option, {
        value: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Image")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E48\u0E07\u0E16\u0E36\u0E07",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), getFieldDecorator('subject', {
        rules: [{
          type: 'text',
          message: 'The input is not valid E-mail!'
        }, {
          required: true,
          message: 'Please input your E-mail!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default.a.TextArea, {
        rows: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FormItem, _extends({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "Record")));
    }
  }]);

  return NotifyForm;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a.create()(NotifyForm));

/***/ })

})
//# sourceMappingURL=6.b84b3e1ede0b4f0a3405.hot-update.js.map