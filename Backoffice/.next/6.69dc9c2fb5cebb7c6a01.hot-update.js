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
        label: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E48\u0E07\u0E16\u0E36\u0E07",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FormItem, _extends({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Record")));
    }
  }]);

  return NotifyForm;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a.create()(NotifyForm));

/***/ }),

/***/ "./node_modules/antd/lib/_util/getDataOrAriaProps.js":
false,

/***/ "./node_modules/antd/lib/_util/interopDefault.js":
false,

/***/ "./node_modules/antd/lib/date-picker/RangePicker.js":
false,

/***/ "./node_modules/antd/lib/date-picker/WeekPicker.js":
false,

/***/ "./node_modules/antd/lib/date-picker/createPicker.js":
false,

/***/ "./node_modules/antd/lib/date-picker/index.js":
false,

/***/ "./node_modules/antd/lib/date-picker/wrapPicker.js":
false,

/***/ "./node_modules/antd/lib/tag/CheckableTag.js":
false,

/***/ "./node_modules/antd/lib/tag/index.js":
false,

/***/ "./node_modules/antd/lib/time-picker/index.js":
false,

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
false,

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
false,

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/moment/locale recursive ^\\.\\/.*$":
false,

/***/ "./node_modules/moment/locale/af.js":
false,

/***/ "./node_modules/moment/locale/ar-dz.js":
false,

/***/ "./node_modules/moment/locale/ar-kw.js":
false,

/***/ "./node_modules/moment/locale/ar-ly.js":
false,

/***/ "./node_modules/moment/locale/ar-ma.js":
false,

/***/ "./node_modules/moment/locale/ar-sa.js":
false,

/***/ "./node_modules/moment/locale/ar-tn.js":
false,

/***/ "./node_modules/moment/locale/ar.js":
false,

/***/ "./node_modules/moment/locale/az.js":
false,

/***/ "./node_modules/moment/locale/be.js":
false,

/***/ "./node_modules/moment/locale/bg.js":
false,

/***/ "./node_modules/moment/locale/bm.js":
false,

/***/ "./node_modules/moment/locale/bn.js":
false,

/***/ "./node_modules/moment/locale/bo.js":
false,

/***/ "./node_modules/moment/locale/br.js":
false,

/***/ "./node_modules/moment/locale/bs.js":
false,

/***/ "./node_modules/moment/locale/ca.js":
false,

/***/ "./node_modules/moment/locale/cs.js":
false,

/***/ "./node_modules/moment/locale/cv.js":
false,

/***/ "./node_modules/moment/locale/cy.js":
false,

/***/ "./node_modules/moment/locale/da.js":
false,

/***/ "./node_modules/moment/locale/de-at.js":
false,

/***/ "./node_modules/moment/locale/de-ch.js":
false,

/***/ "./node_modules/moment/locale/de.js":
false,

/***/ "./node_modules/moment/locale/dv.js":
false,

/***/ "./node_modules/moment/locale/el.js":
false,

/***/ "./node_modules/moment/locale/en-au.js":
false,

/***/ "./node_modules/moment/locale/en-ca.js":
false,

/***/ "./node_modules/moment/locale/en-gb.js":
false,

/***/ "./node_modules/moment/locale/en-ie.js":
false,

/***/ "./node_modules/moment/locale/en-il.js":
false,

/***/ "./node_modules/moment/locale/en-nz.js":
false,

/***/ "./node_modules/moment/locale/eo.js":
false,

/***/ "./node_modules/moment/locale/es-do.js":
false,

/***/ "./node_modules/moment/locale/es-us.js":
false,

/***/ "./node_modules/moment/locale/es.js":
false,

/***/ "./node_modules/moment/locale/et.js":
false,

/***/ "./node_modules/moment/locale/eu.js":
false,

/***/ "./node_modules/moment/locale/fa.js":
false,

/***/ "./node_modules/moment/locale/fi.js":
false,

/***/ "./node_modules/moment/locale/fo.js":
false,

/***/ "./node_modules/moment/locale/fr-ca.js":
false,

/***/ "./node_modules/moment/locale/fr-ch.js":
false,

/***/ "./node_modules/moment/locale/fr.js":
false,

/***/ "./node_modules/moment/locale/fy.js":
false,

/***/ "./node_modules/moment/locale/gd.js":
false,

/***/ "./node_modules/moment/locale/gl.js":
false,

/***/ "./node_modules/moment/locale/gom-latn.js":
false,

/***/ "./node_modules/moment/locale/gu.js":
false,

/***/ "./node_modules/moment/locale/he.js":
false,

/***/ "./node_modules/moment/locale/hi.js":
false,

/***/ "./node_modules/moment/locale/hr.js":
false,

/***/ "./node_modules/moment/locale/hu.js":
false,

/***/ "./node_modules/moment/locale/hy-am.js":
false,

/***/ "./node_modules/moment/locale/id.js":
false,

/***/ "./node_modules/moment/locale/is.js":
false,

/***/ "./node_modules/moment/locale/it.js":
false,

/***/ "./node_modules/moment/locale/ja.js":
false,

/***/ "./node_modules/moment/locale/jv.js":
false,

/***/ "./node_modules/moment/locale/ka.js":
false,

/***/ "./node_modules/moment/locale/kk.js":
false,

/***/ "./node_modules/moment/locale/km.js":
false,

/***/ "./node_modules/moment/locale/kn.js":
false,

/***/ "./node_modules/moment/locale/ko.js":
false,

/***/ "./node_modules/moment/locale/ky.js":
false,

/***/ "./node_modules/moment/locale/lb.js":
false,

/***/ "./node_modules/moment/locale/lo.js":
false,

/***/ "./node_modules/moment/locale/lt.js":
false,

/***/ "./node_modules/moment/locale/lv.js":
false,

/***/ "./node_modules/moment/locale/me.js":
false,

/***/ "./node_modules/moment/locale/mi.js":
false,

/***/ "./node_modules/moment/locale/mk.js":
false,

/***/ "./node_modules/moment/locale/ml.js":
false,

/***/ "./node_modules/moment/locale/mn.js":
false,

/***/ "./node_modules/moment/locale/mr.js":
false,

/***/ "./node_modules/moment/locale/ms-my.js":
false,

/***/ "./node_modules/moment/locale/ms.js":
false,

/***/ "./node_modules/moment/locale/mt.js":
false,

/***/ "./node_modules/moment/locale/my.js":
false,

/***/ "./node_modules/moment/locale/nb.js":
false,

/***/ "./node_modules/moment/locale/ne.js":
false,

/***/ "./node_modules/moment/locale/nl-be.js":
false,

/***/ "./node_modules/moment/locale/nl.js":
false,

/***/ "./node_modules/moment/locale/nn.js":
false,

/***/ "./node_modules/moment/locale/pa-in.js":
false,

/***/ "./node_modules/moment/locale/pl.js":
false,

/***/ "./node_modules/moment/locale/pt-br.js":
false,

/***/ "./node_modules/moment/locale/pt.js":
false,

/***/ "./node_modules/moment/locale/ro.js":
false,

/***/ "./node_modules/moment/locale/ru.js":
false,

/***/ "./node_modules/moment/locale/sd.js":
false,

/***/ "./node_modules/moment/locale/se.js":
false,

/***/ "./node_modules/moment/locale/si.js":
false,

/***/ "./node_modules/moment/locale/sk.js":
false,

/***/ "./node_modules/moment/locale/sl.js":
false,

/***/ "./node_modules/moment/locale/sq.js":
false,

/***/ "./node_modules/moment/locale/sr-cyrl.js":
false,

/***/ "./node_modules/moment/locale/sr.js":
false,

/***/ "./node_modules/moment/locale/ss.js":
false,

/***/ "./node_modules/moment/locale/sv.js":
false,

/***/ "./node_modules/moment/locale/sw.js":
false,

/***/ "./node_modules/moment/locale/ta.js":
false,

/***/ "./node_modules/moment/locale/te.js":
false,

/***/ "./node_modules/moment/locale/tet.js":
false,

/***/ "./node_modules/moment/locale/tg.js":
false,

/***/ "./node_modules/moment/locale/th.js":
false,

/***/ "./node_modules/moment/locale/tl-ph.js":
false,

/***/ "./node_modules/moment/locale/tlh.js":
false,

/***/ "./node_modules/moment/locale/tr.js":
false,

/***/ "./node_modules/moment/locale/tzl.js":
false,

/***/ "./node_modules/moment/locale/tzm-latn.js":
false,

/***/ "./node_modules/moment/locale/tzm.js":
false,

/***/ "./node_modules/moment/locale/ug-cn.js":
false,

/***/ "./node_modules/moment/locale/uk.js":
false,

/***/ "./node_modules/moment/locale/ur.js":
false,

/***/ "./node_modules/moment/locale/uz-latn.js":
false,

/***/ "./node_modules/moment/locale/uz.js":
false,

/***/ "./node_modules/moment/locale/vi.js":
false,

/***/ "./node_modules/moment/locale/x-pseudo.js":
false,

/***/ "./node_modules/moment/locale/yo.js":
false,

/***/ "./node_modules/moment/locale/zh-cn.js":
false,

/***/ "./node_modules/moment/locale/zh-hk.js":
false,

/***/ "./node_modules/moment/locale/zh-tw.js":
false,

/***/ "./node_modules/moment/moment.js":
false,

/***/ "./node_modules/rc-calendar/es/Calendar.js":
false,

/***/ "./node_modules/rc-calendar/es/calendar/CalendarFooter.js":
false,

/***/ "./node_modules/rc-calendar/es/calendar/CalendarHeader.js":
false,

/***/ "./node_modules/rc-calendar/es/calendar/OkButton.js":
false,

/***/ "./node_modules/rc-calendar/es/calendar/TimePickerButton.js":
false,

/***/ "./node_modules/rc-calendar/es/calendar/TodayButton.js":
false,

/***/ "./node_modules/rc-calendar/es/date/DateConstants.js":
false,

/***/ "./node_modules/rc-calendar/es/date/DateInput.js":
false,

/***/ "./node_modules/rc-calendar/es/date/DateTBody.js":
false,

/***/ "./node_modules/rc-calendar/es/date/DateTHead.js":
false,

/***/ "./node_modules/rc-calendar/es/date/DateTable.js":
false,

/***/ "./node_modules/rc-calendar/es/decade/DecadePanel.js":
false,

/***/ "./node_modules/rc-calendar/es/index.js":
false,

/***/ "./node_modules/rc-calendar/es/locale/en_US.js":
false,

/***/ "./node_modules/rc-calendar/es/mixin/CalendarMixin.js":
false,

/***/ "./node_modules/rc-calendar/es/mixin/CommonMixin.js":
false,

/***/ "./node_modules/rc-calendar/es/month/MonthPanel.js":
false,

/***/ "./node_modules/rc-calendar/es/month/MonthTable.js":
false,

/***/ "./node_modules/rc-calendar/es/util/index.js":
false,

/***/ "./node_modules/rc-calendar/es/util/toTime.js":
false,

/***/ "./node_modules/rc-calendar/es/year/YearPanel.js":
false,

/***/ "./node_modules/rc-calendar/lib/MonthCalendar.js":
false,

/***/ "./node_modules/rc-calendar/lib/Picker.js":
false,

/***/ "./node_modules/rc-calendar/lib/RangeCalendar.js":
false,

/***/ "./node_modules/rc-calendar/lib/calendar/CalendarFooter.js":
false,

/***/ "./node_modules/rc-calendar/lib/calendar/CalendarHeader.js":
false,

/***/ "./node_modules/rc-calendar/lib/calendar/OkButton.js":
false,

/***/ "./node_modules/rc-calendar/lib/calendar/TimePickerButton.js":
false,

/***/ "./node_modules/rc-calendar/lib/calendar/TodayButton.js":
false,

/***/ "./node_modules/rc-calendar/lib/date/DateConstants.js":
false,

/***/ "./node_modules/rc-calendar/lib/date/DateInput.js":
false,

/***/ "./node_modules/rc-calendar/lib/date/DateTBody.js":
false,

/***/ "./node_modules/rc-calendar/lib/date/DateTHead.js":
false,

/***/ "./node_modules/rc-calendar/lib/date/DateTable.js":
false,

/***/ "./node_modules/rc-calendar/lib/decade/DecadePanel.js":
false,

/***/ "./node_modules/rc-calendar/lib/mixin/CalendarMixin.js":
false,

/***/ "./node_modules/rc-calendar/lib/mixin/CommonMixin.js":
false,

/***/ "./node_modules/rc-calendar/lib/month/MonthPanel.js":
false,

/***/ "./node_modules/rc-calendar/lib/month/MonthTable.js":
false,

/***/ "./node_modules/rc-calendar/lib/picker/placements.js":
false,

/***/ "./node_modules/rc-calendar/lib/range-calendar/CalendarPart.js":
false,

/***/ "./node_modules/rc-calendar/lib/util/index.js":
false,

/***/ "./node_modules/rc-calendar/lib/util/toTime.js":
false,

/***/ "./node_modules/rc-calendar/lib/year/YearPanel.js":
false,

/***/ "./node_modules/rc-time-picker/lib/Combobox.js":
false,

/***/ "./node_modules/rc-time-picker/lib/Header.js":
false,

/***/ "./node_modules/rc-time-picker/lib/Panel.js":
false,

/***/ "./node_modules/rc-time-picker/lib/Select.js":
false,

/***/ "./node_modules/rc-time-picker/lib/TimePicker.js":
false,

/***/ "./node_modules/rc-time-picker/lib/placements.js":
false,

/***/ "./node_modules/rc-util/es/Children/mapSelf.js":
false,

/***/ "./node_modules/rc-util/lib/Children/mapSelf.js":
false,

/***/ "./node_modules/rc-util/lib/KeyCode.js":
false,

/***/ "./node_modules/rc-util/lib/createChainedFunction.js":
false

})
//# sourceMappingURL=6.69dc9c2fb5cebb7c6a01.hot-update.js.map