"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Body = _interopRequireDefault(require("../components/Body"));

var _Head = _interopRequireDefault(require("../components/Head"));

var _Html = _interopRequireDefault(require("../components/Html"));

var _Keyboard = _interopRequireDefault(require("../components/Keyboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Index() {
  return /*#__PURE__*/_react["default"].createElement(_Html["default"], null, /*#__PURE__*/_react["default"].createElement(_Head["default"], null), /*#__PURE__*/_react["default"].createElement(_Body["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "login-screen login-page-hook"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "Pos(a)  T(6rem) Start(10rem) Z(9)",
    src: "./assets/images/logo-full.png",
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "login-sidebar "
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "btn-ripple gra-btn H(8rem) Bdrs(2.5rem) Ta(c) Mt(8rem) Bxsh(shadow-i)"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "Pos(r) D(b) H(100%)"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "icon-phone Fz(2.5rem) v-center D(ib) C(#fff)! Fz(2.5rem)"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "Fz(2.8rem) label Mstart(5px) D(ib) v-center Fw(600) C(#fff)!"
  }, "Login With Mobile"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ta(c) Tal(j) My(5rem)"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "D(ib) Va(m) Bgc(#2a2a32) H(1px) W(35%)"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "Fz(2rem) Fz(600) D(ib) Va(m)"
  }, "Or Login"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "D(ib) Va(m) W(35%) Bgc(#2a2a32) H(1px)"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "Fz(1.8rem) C(#565969) Mb(2rem)"
  }, "Username:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "gra-border small Bdrs(2.5rem)"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "login-input Fz(2.4rem) Fz(600) H(8rem) Px(3rem) Bgc(#000) Bdrs(2.5rem) C(#fff) W(100%)",
    placeholder: "your name...",
    type: "text",
    name: "username"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Mt(4rem)"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "Fz(1.8rem) C(#565969) Mb(2rem)"
  }, "Mail:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "gra-border small Bdrs(2.5rem)"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "login-input Fz(2.4rem) Fz(600) H(8rem) Px(3rem) Bgc(#000) Bdrs(2.5rem) C(#fff) W(100%)",
    placeholder: "email address...",
    type: "email",
    name: "email"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Mt(4rem)"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "Fz(1.8rem) C(#565969) Mb(2rem)"
  }, "Phone:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "gra-border small Bdrs(2.5rem)"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "login-input Fz(2.4rem) Fz(600) H(8rem) Px(3rem) Bgc(#000) Bdrs(2.5rem) C(#fff) W(100%)",
    placeholder: "email address...",
    type: "email",
    name: "email"
  })))), /*#__PURE__*/_react["default"].createElement("a", {
    href: "create-profile.html"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "btn-ripple gra-btn H(7rem) Bdrs(2.5rem) Ta(c) Mt(6rem) active"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "Fz(2.8rem) label Mstart(5px) D(ib) v-center Fw(600) C(#fff)!"
  }, "Login")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "login-sidebar-keyboard "
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Mt(8rem) Mstart(2rem)"
  }, /*#__PURE__*/_react["default"].createElement(_Keyboard["default"], null))))));
}

var _default = Index;
exports["default"] = _default;