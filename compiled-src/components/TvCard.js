"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TvCard(_ref) {
  var img = _ref.img,
      title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "class": "tv-card"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    "class": "tv",
    src: img,
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("img", {
    "class": "title",
    src: title,
    alt: ""
  }));
}

var _default = TvCard;
exports["default"] = _default;