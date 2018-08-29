webpackHotUpdate(5,{

/***/ "./containers/TableItems.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table__ = __webpack_require__("./node_modules/antd/lib/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_spin__ = __webpack_require__("./node_modules/antd/lib/spin/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_spin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_spin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_divider__ = __webpack_require__("./node_modules/antd/lib/divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);



var _jsxFileName = "/Users/kopkap/Documents/work-with-knowledge/Jang/Backoffice/containers/TableItems.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
      href: "javascript:;",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
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
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
      href: "javascript:;",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, "\u0E41\u0E01\u0E49\u0E44\u0E02"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_divider___default.a, {
      type: "vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
      href: "javascript:;",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
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
        isLoading: true
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "convertedData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(data) {
        data.map(function (item, key) {
          var subject = item.subject,
              description = item.description,
              type = item.type,
              due_date = item.due_date,
              due_time = item.due_time,
              appointment = item.appointment;
          __WEBPACK_IMPORTED_MODULE_4_moment___default.a.locale('th');
          return {
            key: key,
            subject: subject,
            description: description,
            type: type,
            date: __WEBPACK_IMPORTED_MODULE_4_moment___default()(due_date).format('LL'),
            time: __WEBPACK_IMPORTED_MODULE_4_moment___default()(due_time).format('LT'),
            appointment: appointment
          };
        });
      }
    }), _temp));
  }

  _createClass(TableItems, [{
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var data = this.props.data;
      console.log(data);
      if (isLoading) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_spin___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      });
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_table___default.a, {
        columns: columns,
        dataSource: this.convertedData(data),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      });
    }
  }]);

  return TableItems;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TableItems);

/***/ })

})
//# sourceMappingURL=5.114c15eb23c44f167dde.hot-update.js.map