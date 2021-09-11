"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Notification(_ref) {
  var desp = _ref.desp,
      title = _ref.title,
      icon = _ref.icon,
      gra = _ref.gra;
  return (
    /*#__PURE__*/
    // <!-- Notification Component -->
    _react["default"].createElement("div", {
      className: "gra-border Bxsh(shadow-ii) Bdc(t):h trs-300 Bdrs(2rem) Bg(gra-v) P(2rem) Pos(r) My(3rem) Cur(p) Bdw(1px)  Bdc(#2a2a32) Bds(s)"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "W(6rem) H(6rem) D(ib) Bg(gra-".concat(gra, ") Bdrs(50%) Pos(r) Va(t)")
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "icon-".concat(icon, " C(#fff) center-me icon-fix Fz(3rem)")
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "D(ib) Mstart(2rem)",
      style: {
        width: 'calc( 100% - 8.5rem )'
      }
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: "Fz(2.4rem) Fw(600)"
    }, title), /*#__PURE__*/_react["default"].createElement("p", {
      className: "Fz(1.6rem) C(#7e8296) Mt(1rem) Lh(1.3)"
    }, desp)))
  );
}

var _default = Notification;
exports["default"] = _default;