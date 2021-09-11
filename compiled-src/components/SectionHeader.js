"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SectionHeader(_ref) {
  var titleOne = _ref.titleOne,
      titleTwo = _ref.titleTwo,
      amount = _ref.amount,
      icon = _ref.icon;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Cf H(6rem)"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Fl(start) v-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "W(5rem) H(5rem) D(ib)  Va(m) Pos(r) Bdw(1px) Bds(s) Bdc(#4a5868)  Bg(gra-ii) Bdrs(50%)"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "icon-".concat(icon, " Fz(2.5rem) icon-fix center-me")
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "Fz(2.4rem) Fw(600) D(ib) Va(m) Mstart(1rem)"
  }, titleOne, /*#__PURE__*/_react["default"].createElement("span", {
    className: "C(#f98c34)"
  }, titleTwo)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Px(1.5rem) Py(8px) D(ib) Bg(gra-iv) Bdrs(2rem) Va(m) Mstart(1rem)"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "Fz(1.8rem) Fw(600) "
  }, amount))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Fl(end) v-center Mend(3rem)"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn-ripple gra-btn Px(2rem) Py(1rem) Bdrs(1.5rem)"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "Fz(1.6rem) label Pos(r)"
  }, "See All"))));
}

var _default = SectionHeader;
exports["default"] = _default;