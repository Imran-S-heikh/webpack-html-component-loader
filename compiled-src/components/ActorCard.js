"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ActorCard(_ref) {
  var name = _ref.name,
      actor = _ref.actor;
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: "actor-single.html",
    classClass: "movie-card watch small Fl(start)"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    classClass: "W(22rem) H(34rem) movie-img",
    src: actor,
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("div", {
    classClass: "h-center Pos(a)! B(3rem) W(maxc)"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    classClass: "W(2rem) H(1.4rem) D(ib) Va(m)",
    src: country,
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("p", {
    classClass: "Fz(1.8rem) Fw(600) D(ib) Mstart(1rem) Va(m)"
  }, name)));
}

var _default = ActorCard;
exports["default"] = _default;