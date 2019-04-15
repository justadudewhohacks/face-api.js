(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(163);
/* harmony import */ var face_api_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(164);
/* harmony import */ var face_api_js_react_components_DisplayResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(190);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _face_api_js_react_facc_DetectFaceLandmarks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(203);
/* harmony import */ var _components_SelectableImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(187);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(175);
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(186);
/* harmony import */ var _styled_MarginTop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(386);











var _default =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(_default, _React$Component);

  function _default() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      drawLines: true
    };

    _this.toggleDrawLines = function () {
      _this.setState({
        drawLines: !_this.state.drawLines
      });
    };

    _this.onTabIndexChanged = function () {
      _this.setState({
        inputImg: undefined
      });
    };

    return _this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this2 = this;

    if (!(typeof window !== 'undefined' && window.document)) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Root__WEBPACK_IMPORTED_MODULE_8__[/* Root */ "a"], null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](face_api_js_react__WEBPACK_IMPORTED_MODULE_2__["LoadModels"], {
      faceLandmarkModelUrl: _const__WEBPACK_IMPORTED_MODULE_7__[/* MODELS_URI */ "h"]
    }, function () {
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_SelectableImage__WEBPACK_IMPORTED_MODULE_6__[/* SelectableImage */ "a"], {
        items: _const__WEBPACK_IMPORTED_MODULE_7__[/* ALIGNED_FACE_IMAGES */ "a"],
        initialImageSrc: _const__WEBPACK_IMPORTED_MODULE_7__[/* ALIGNED_FACE_IMAGES */ "a"][30].url,
        onLoaded: function onLoaded(_ref) {
          var inputImg = _ref.img,
              overlay = _ref.overlay;
          return _this2.setState({
            inputImg: inputImg,
            overlay: overlay
          });
        },
        selectionType: _components_SelectableImage__WEBPACK_IMPORTED_MODULE_6__[/* SelectionTypes */ "b"].SELECT,
        imageStyle: {
          maxWidth: 150
        },
        imgId: "img"
      }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_face_api_js_react_facc_DetectFaceLandmarks__WEBPACK_IMPORTED_MODULE_5__[/* DetectFaceLandmarks */ "a"], {
        input: _this2.state.inputImg
      }, function (_ref2) {
        var faceLandmarks = _ref2.faceLandmarks;
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](face_api_js_react_components_DisplayResults__WEBPACK_IMPORTED_MODULE_3__[/* DisplayResults */ "a"], {
          input: _this2.state.inputImg,
          results: [faceLandmarks],
          overlay: _this2.state.overlay,
          displayResultsOptions: {
            drawLines: _this2.state.drawLines
          }
        });
      }));
    }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_styled_MarginTop__WEBPACK_IMPORTED_MODULE_9__[/* MarginTop */ "a"], null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* FormControlLabel */ "i"], {
      control: react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Checkbox */ "b"], {
        checked: this.state.drawLines,
        onChange: this.toggleDrawLines,
        color: "primary"
      }),
      label: "Draw Lines"
    })));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ })

}]);
//# sourceMappingURL=component---src-pages-bbt-face-landmark-detection-tsx-ebac050e5061fce1c6c9.js.map