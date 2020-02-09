webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Raul\\Desktop\\projects\\ReactJS\\valencia\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Carrusel
// import SlideShow from 'react-image-show';

const Index = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loaded: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    undefined.setState({
      loaded: true
    });
  }, []);
  const urlArray = ["https://cdn.pixabay.com/photo/2018/09/30/19/03/railway-station-3714297__340.jpg", "https://i.ytimg.com/vi/HEkpbJYyv6k/maxresdefault.jpg"];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "HomePage"));
};

Index.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.cba80ecc5be4c6aa4e3d.hot-update.js.map