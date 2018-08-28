webpackHotUpdate(6,{

/***/ "./containers/NotifyForm.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_upload__ = __webpack_require__("./node_modules/antd/lib/upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input__ = __webpack_require__("./node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_select__ = __webpack_require__("./node_modules/antd/lib/select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form__ = __webpack_require__("./node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);






var _jsxFileName = "/Users/kopkap/Documents/work-with-knowledge/Jang/Backoffice/containers/NotifyForm.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var FormItem = __WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a.Item;
var Option = __WEBPACK_IMPORTED_MODULE_4_antd_lib_select___default.a.Option;

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

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = NotifyForm.__proto__ || Object.getPrototypeOf(NotifyForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "normFile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
          return e;
        }

        return e && e.fileList;
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
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), getFieldDecorator('type', {
        rules: [{
          required: true,
          message: 'Please select your gender!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_select___default.a, {
        placeholder: "Select a option and change input text above",
        onChange: this.handleSelectChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Text"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Image")))), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E48\u0E07\u0E16\u0E36\u0E07",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), getFieldDecorator('subject', {
        rules: [{
          type: 'text',
          message: 'The input is not valid E-mail!'
        }, {
          required: true,
          message: 'Please input your E-mail!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a.TextArea, {
        rows: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }))), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Dragger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
        className: "dropbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, getFieldDecorator('dragger', {
        valuePropName: 'fileList',
        getValueFromEvent: this.normFile
      })(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_upload___default.a.Dragger, {
        name: "files",
        action: "/upload.do",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", {
        className: "ant-upload-drag-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
        type: "inbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      })), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", {
        className: "ant-upload-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Click or drag file to this area to upload"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", {
        className: "ant-upload-hint",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Support for a single or bulk upload."))))), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem, _extends({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Push Message")));
    }
  }]);

  return NotifyForm;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a.create()(NotifyForm));

/***/ })

})
//# sourceMappingURL=6.d0da41fd81720bfaef02.hot-update.js.map