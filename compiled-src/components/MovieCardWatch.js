"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MovieCardWatch(_ref) {
  var img = _ref.img,
      progress = _ref.progress,
      time = _ref.time;
  return (
    /*#__PURE__*/
    // <!-- Continue Watch Movie Card -->
    _react["default"].createElement("div", {
      className: "movie-card Fl(start) watch"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      className: "movie-img",
      src: img,
      alt: ""
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "time-wraper"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "time",
      style: {
        left: "".concat(progress, "%")
      }
    }, time)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "bar"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "progress",
      style: {
        width: "".concat(progress, "%")
      }
    })))
  );
}

var _default = MovieCardWatch;
exports["default"] = _default;