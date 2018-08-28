webpackHotUpdate(5,{

/***/ "./containers/TableItems.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table__ = __webpack_require__("./node_modules/antd/lib/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_divider__ = __webpack_require__("./node_modules/antd/lib/divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);


var _jsxFileName = "/Users/kopkap/Documents/work-with-knowledge/Jang/Backoffice/containers/TableItems.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var columns = [{
  title: 'Subject',
  dataIndex: 'subject',
  key: 'subject',
  render: function render(text) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      href: "javascript:;",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, text);
  }
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description'
}, {
  title: 'due date',
  dataIndex: 'due',
  key: 'due'
}, {
  title: 'Action',
  key: 'action',
  render: function render(text, record) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      href: "javascript:;",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, "Invite ", record.name), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default.a, {
      type: "vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      href: "javascript:;",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, "Delete"));
  }
}];
var data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer']
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser']
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher']
}];

var TableItems =
/*#__PURE__*/
function (_Component) {
  _inherits(TableItems, _Component);

  function TableItems() {
    _classCallCheck(this, TableItems);

    return _possibleConstructorReturn(this, (TableItems.__proto__ || Object.getPrototypeOf(TableItems)).apply(this, arguments));
  }

  _createClass(TableItems, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_table___default.a, {
        columns: columns,
        dataSource: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      });
    }
  }]);

  return TableItems;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TableItems);

/***/ })

})
//# sourceMappingURL=5.09ad43dab11e8b649266.hot-update.js.map