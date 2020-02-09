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
/* harmony import */ var react_image_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-show */ "./node_modules/react-image-show/build/index.js");
/* harmony import */ var react_image_show__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_show__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Raul\\Desktop\\projects\\ReactJS\\valencia\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Carrusel



const Index = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loaded: false
  });
  const {
    loaded
  } = state;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => undefined.setState({
      loaded: true
    }), 2000);
  }, []);
  const urlArray = ["https://cdn.pixabay.com/photo/2018/09/30/19/03/railway-station-3714297__340.jpg", "https://i.ytimg.com/vi/HEkpbJYyv6k/maxresdefault.jpg"];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "HomePage"), loaded && __jsx(react_image_show__WEBPACK_IMPORTED_MODULE_1___default.a, {
    images: urlArray,
    width: "920px",
    imagesWidth: "800px",
    imagesHeight: "450px",
    imagesHeightMobile: "56vw",
    thumbnailsWidth: "920px",
    thumbnailsHeight: "12vw",
    indicators: true,
    thumbnails: true,
    fixedImagesHeight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }));
};

Index.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7e9b7889c8fab7eceb54.hot-update.js.map