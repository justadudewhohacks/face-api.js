(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/face-api.js/build/es6/index.js + 161 modules
var es6 = __webpack_require__(159);

// EXTERNAL MODULE: ./face-api.js-react/index.ts
var face_api_js_react = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.es.js
var index_es = __webpack_require__(163);

// CONCATENATED MODULE: ./src/components/FaceSimilarity.tsx


var FaceSimilarity_FaceSimilarity = function FaceSimilarity(props) {
  return react["createElement"](index_es["h" /* FormControl */], null, react["createElement"](index_es["n" /* InputLabel */], {
    htmlFor: "distance"
  }, "Distance:"), react["createElement"](index_es["m" /* Input */], {
    id: "distance",
    value: props.text,
    style: {
      backgroundColor: props.isMatch ? '#b2ff59' : '#ea605d'
    }
  }));
};
// EXTERNAL MODULE: ./src/components/ModalLoader.tsx
var ModalLoader = __webpack_require__(188);

// EXTERNAL MODULE: ./src/components/SelectableImage.tsx + 1 modules
var SelectableImage = __webpack_require__(187);

// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(175);

// EXTERNAL MODULE: ./src/Root.tsx + 3 modules
var Root = __webpack_require__(186);

// EXTERNAL MODULE: ./src/styled/MarginTop.tsx
var MarginTop = __webpack_require__(386);

// EXTERNAL MODULE: ./src/styled/SideBySide.tsx
var SideBySide = __webpack_require__(192);

// CONCATENATED MODULE: ./src/pages/bbt_face_similarity.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bbt_face_similarity_default; });












var bbt_face_similarity_default =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(_default, _React$Component);

  function _default() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {};
    return _this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this2 = this;

    if (!(typeof window !== 'undefined' && window.document)) {
      return null;
    }

    return react["createElement"](Root["a" /* Root */], null, react["createElement"](SideBySide["a" /* SideBySide */], null, react["createElement"](SelectableImage["a" /* SelectableImage */], {
      items: src_const["a" /* ALIGNED_FACE_IMAGES */],
      initialImageSrc: src_const["a" /* ALIGNED_FACE_IMAGES */][30].url,
      onLoaded: function onLoaded(_ref) {
        var inputImg1 = _ref.img;
        return _this2.setState({
          inputImg1: inputImg1
        });
      },
      imageStyle: {
        maxWidth: 150
      },
      imgId: "img1"
    }), react["createElement"](SelectableImage["a" /* SelectableImage */], {
      items: src_const["a" /* ALIGNED_FACE_IMAGES */],
      initialImageSrc: src_const["a" /* ALIGNED_FACE_IMAGES */][31].url,
      onLoaded: function onLoaded(_ref2) {
        var inputImg2 = _ref2.img;
        return _this2.setState({
          inputImg2: inputImg2
        });
      },
      imageStyle: {
        maxWidth: 150
      },
      imgId: "img2"
    })), react["createElement"](MarginTop["a" /* MarginTop */], null, react["createElement"](face_api_js_react["LoadModels"], {
      faceRecognitionModelUrl: src_const["h" /* MODELS_URI */],
      renderBusyComponent: function renderBusyComponent() {
        return react["createElement"](ModalLoader["a" /* ModalLoader */], {
          title: "Loading Face Recognition Model"
        });
      }
    }, function () {
      return react["createElement"](face_api_js_react["ComputeFaceDescriptors"], {
        inputs: [_this2.state.inputImg1, _this2.state.inputImg2],
        renderBusyComponent: function renderBusyComponent() {
          return react["createElement"](ModalLoader["a" /* ModalLoader */], {
            title: "Computing Face Descriptors"
          });
        }
      }, function (_ref3) {
        var faceDescriptors = _ref3.faceDescriptors;

        if (!faceDescriptors) {
          return null;
        }

        var distance = es6["euclideanDistance"](faceDescriptors[0], faceDescriptors[1]);
        return react["createElement"](FaceSimilarity_FaceSimilarity, {
          text: "" + es6["round"](distance),
          isMatch: distance < 0.6
        });
      });
    })));
  };

  return _default;
}(react["Component"]);



/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLoader; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var ModalLoader = function ModalLoader(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* Dialog */ "c"], {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: true
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* DialogTitle */ "e"], null, props.title), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* DialogContent */ "d"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* LinearProgress */ "o"], null)));
};

/***/ })

}]);
//# sourceMappingURL=component---src-pages-bbt-face-similarity-tsx-0faec959c9357f247f79.js.map