"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MovieCard(_ref) {
  var img = _ref.img;
  return (
    /*#__PURE__*/
    // <!-- Continue Watch Movie Card -->
    _react["default"].createElement("div", {
      className: "movie-card Fl(start) hover"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      className: "movie-img",
      src: img,
      alt: ""
    }))
  );
}

var _default = MovieCard;
exports["default"] = _default;