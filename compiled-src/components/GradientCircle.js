"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function GradientCircle(_ref) {
  var mt = _ref.mt,
      active = _ref.active;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "class": "W(7rem) H(7rem) trs-300 gradient-circle Bdrs(50%) Pos(r) h-center Mt(".concat(mt, ") ").concat(active)
  }, /*#__PURE__*/_react["default"].createElement("img", {
    "class": "center-me W(6.5rem) H(6.5rem) Bdrs(50%) Bdw(4px) Bdc(#191b21) Bds(s) Objf(cv)",
    src: img,
    alt: "User Avatar"
  }));
}

var _default = GradientCircle;
exports["default"] = _default;