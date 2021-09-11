"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// <!-- Background Image , Svg blur and gradient Effect -->
function HeroImageBlur(_ref) {
  var img = _ref.img;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
    className: "W(100%) Objf(cv) H(100%) Pos(a) T(0) Start(0)",
    style: "object-position: 50% 0;",
    src: img,
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "W(100%) H(100%) Pos(a) T(0) Start(0)"
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("filter", {
    id: "blurMe"
  }, /*#__PURE__*/_react["default"].createElement("feGaussianBlur", {
    "in": "SourceGraphic",
    stdDeviation: "15"
  })), /*#__PURE__*/_react["default"].createElement("linearGradient", {
    id: "fadeGrad"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    offset: ".2",
    "stop-color": "white",
    "stop-opacity": "1"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: ".6",
    "stop-color": "white",
    "stop-opacity": "0"
  })), /*#__PURE__*/_react["default"].createElement("mask", {
    id: "fade",
    maskContentUnits: "objectBoundingBox"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "1",
    height: "1",
    fill: "url(#fadeGrad)"
  }))), /*#__PURE__*/_react["default"].createElement("image", {
    mask: "url(#fade)",
    filter: "url(#blurMe)",
    className: "W(100%) Z(-1)",
    xlinkHref: img,
    alt: ""
  })), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "W(100%) H(100%) Pos(a) T(0) Start(0)"
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
    id: "geffect",
    x1: "1",
    y1: "1",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0",
    "stop-color": "rgb(23, 24, 29)",
    "stop-opacity": "1"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "100%",
    "stop-color": "rgb(0, 0, 0)",
    "stop-opacity": "0"
  })), /*#__PURE__*/_react["default"].createElement("linearGradient", {
    id: "geffect2"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0",
    "stop-color": "rgb(23, 24, 29)",
    "stop-opacity": ".5"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "100%",
    "stop-color": "rgb(0, 0, 0)",
    "stop-opacity": "0"
  }))), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#geffect)"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#geffect2)"
  })));
}

var _default = HeroImageBlur;
exports["default"] = _default;