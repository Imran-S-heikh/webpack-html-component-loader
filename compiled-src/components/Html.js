"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Html(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("html", {
    lang: "en"
  }, children);
}

var _default = Html;
exports["default"] = _default;