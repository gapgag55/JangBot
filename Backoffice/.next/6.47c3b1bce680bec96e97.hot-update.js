webpackHotUpdate(6,{

/***/ "./utilities/request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var get =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(url) {
    var res, statusCode, json;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default()(url);

          case 2:
            res = _context.sent;
            statusCode = res.statusCode > 200 ? res.statusCode : 200;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            return _context.abrupt("return", {
              statusCode: statusCode,
              data: json
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function get(_x) {
    return _ref.apply(this, arguments);
  };
}();

var post =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(url, body) {
    var res, statusCode, json;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default()(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            });

          case 2:
            res = _context2.sent;
            statusCode = res.statusCode > 200 ? res.statusCode : 200;
            _context2.next = 6;
            return res.json();

          case 6:
            json = _context2.sent;
            return _context2.abrupt("return", {
              statusCode: statusCode,
              data: json
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function post(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var update =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(url, body) {
    var res, statusCode, json;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default()(url, {
              method: 'PUT',
              body: body
            });

          case 2:
            res = _context3.sent;
            statusCode = res.statusCode > 200 ? res.statusCode : 200;
            _context3.next = 6;
            return res.json();

          case 6:
            json = _context3.sent;
            return _context3.abrupt("return", {
              statusCode: statusCode,
              data: json
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function update(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

var remove =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(url, id) {
    var res, statusCode, json;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default()(url.concat(id), {
              method: 'DELETE'
            });

          case 2:
            res = _context4.sent;
            statusCode = res.statusCode > 200 ? res.statusCode : 200;
            _context4.next = 6;
            return res.json();

          case 6:
            json = _context4.sent;
            return _context4.abrupt("return", {
              statusCode: statusCode,
              data: json
            });

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function remove(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  get: get,
  post: post,
  update: update,
  remove: remove
});

/***/ })

})
//# sourceMappingURL=6.47c3b1bce680bec96e97.hot-update.js.map