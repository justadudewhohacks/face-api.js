(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./face-api.js-react/components/DisplayResults.tsx
var DisplayResults = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./face-api.js-react/facc/DetectFaces.tsx
var DetectFaces = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(170);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(171);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(172);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/face-api.js/build/es6/index.js + 161 modules
var es6 = __webpack_require__(159);

// EXTERNAL MODULE: ./face-api.js-react/hoc/withAsyncRendering.tsx
var withAsyncRendering = __webpack_require__(177);

// CONCATENATED MODULE: ./face-api.js-react/facc/DetectFacesWithLandmarks.tsx






function detectFacesWithLandmarks(_x) {
  return _detectFacesWithLandmarks.apply(this, arguments);
}

function _detectFacesWithLandmarks() {
  _detectFacesWithLandmarks = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(props) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (props.input) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", null);

          case 2:
            _context.next = 4;
            return es6["detectAllFaces"](props.input.element, props.detectionOptions).withFaceLandmarks();

          case 4:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              faceDetectionsWithLandmarks: _context.t0
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _detectFacesWithLandmarks.apply(this, arguments);
}

var DetectFacesWithLandmarks = Object(withAsyncRendering["a" /* withAsyncRendering */])(detectFacesWithLandmarks);
// EXTERNAL MODULE: ./src/components/FaceAndLandmarkDetection.tsx
var FaceAndLandmarkDetection = __webpack_require__(228);

// EXTERNAL MODULE: ./src/components/SelectableImage.tsx + 1 modules
var SelectableImage = __webpack_require__(187);

// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(175);

// EXTERNAL MODULE: ./src/Root.tsx + 3 modules
var Root = __webpack_require__(186);

// CONCATENATED MODULE: ./src/pages/face_and_landmark_detection.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return face_and_landmark_detection_default; });











var face_and_landmark_detection_default =
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

    return react["createElement"](Root["a" /* Root */], null, react["createElement"](SelectableImage["a" /* SelectableImage */], {
      items: src_const["d" /* EXAMPLE_IMAGES */],
      initialImageSrc: src_const["d" /* EXAMPLE_IMAGES */][0].url,
      onLoaded: function onLoaded(_ref) {
        var input = _ref.img,
            overlay = _ref.overlay;
        return _this2.setState({
          input: input,
          overlay: overlay
        });
      },
      selectionType: SelectableImage["b" /* SelectionTypes */].BOTH,
      imageStyle: {
        maxWidth: 800
      },
      imgId: "img"
    }), react["createElement"](FaceAndLandmarkDetection["a" /* FaceAndLandmarkDetection */], Object.assign({}, this.state, {
      initialFaceDetector: src_const["g" /* FACE_DETECTORS */][1]
    }), function (detectionOptions, withBoxes, withLandmarks) {
      return withLandmarks ? react["createElement"](DetectFacesWithLandmarks, {
        input: _this2.state.input,
        detectionOptions: detectionOptions
      }, function (_ref2) {
        var faceDetectionsWithLandmarks = _ref2.faceDetectionsWithLandmarks;
        return react["createElement"](DisplayResults["a" /* DisplayResults */], {
          input: _this2.state.input,
          overlay: _this2.state.overlay,
          results: faceDetectionsWithLandmarks,
          displayResultsOptions: {
            withBoxes: withBoxes
          }
        });
      }) : react["createElement"](DetectFaces["a" /* DetectFaces */], {
        input: _this2.state.input,
        detectionOptions: detectionOptions
      }, function (_ref3) {
        var faceDetections = _ref3.faceDetections;
        return react["createElement"](DisplayResults["a" /* DisplayResults */], {
          input: _this2.state.input,
          overlay: _this2.state.overlay,
          results: faceDetections,
          displayResultsOptions: {
            withBoxes: withBoxes
          }
        });
      });
    }));
  };

  return _default;
}(react["Component"]);



/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(35);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.es.js
var index_es = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(178);

// EXTERNAL MODULE: ./face-api.js-react/index.ts
var face_api_js_react = __webpack_require__(164);

// EXTERNAL MODULE: ./src/styled/SideBySide.tsx
var SideBySide = __webpack_require__(192);

// CONCATENATED MODULE: ./src/components/ImageSelection.tsx


var ImageSelection_ImageSelection = function ImageSelection(_ref) {
  var items = _ref.items,
      selectedImage = _ref.selectedImage,
      _onChange = _ref.onChange;
  return react["createElement"](index_es["h" /* FormControl */], null, react["createElement"](index_es["s" /* Select */], {
    value: selectedImage,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    input: react["createElement"](index_es["m" /* Input */], null)
  }, items.map(function (item) {
    return react["createElement"](index_es["r" /* MenuItem */], {
      key: item.url,
      value: item.url
    }, item.label);
  })), react["createElement"](index_es["j" /* FormHelperText */], null, "Pick an image"));
};
// CONCATENATED MODULE: ./src/components/SelectableImage.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectableImage_SelectableImage; });









var Container = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "SelectableImage__Container",
  componentId: "sc-1k2zozl-0"
})(["padding:10px;display:flex;flex-direction:column;align-items:center;"]);
var Margin = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "SelectableImage__Margin",
  componentId: "sc-1k2zozl-1"
})(["margin:10px;"]);
var SelectionTypes;

(function (SelectionTypes) {
  SelectionTypes["SELECT"] = "SELECT";
  SelectionTypes["FILE"] = "FILE";
  SelectionTypes["BOTH"] = "BOTH";
})(SelectionTypes || (SelectionTypes = {}));

var SelectableImage_SelectableImage =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SelectableImage, _React$Component);

  function SelectableImage(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      imageSrc: props.initialImageSrc
    };
    _this.onChangeSelection = _this.onChangeSelection.bind(assertThisInitialized_default()(_this));
    _this.onLoadFromDisk = _this.onLoadFromDisk.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  var _proto = SelectableImage.prototype;

  _proto.onChangeSelection = function onChangeSelection(imageSrc) {
    this.setState({
      imageSrc: imageSrc
    });
  };

  _proto.onLoadFromDisk = function onLoadFromDisk(e) {
    var _this2 = this;

    var file = (e.target.files || [])[0];

    if (!file) {
      return;
    }

    var reader = new FileReader();

    reader.onload = function (loadEvent) {
      return _this2.setState({
        imageSrc: loadEvent.target.result
      });
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  _proto.render = function render() {
    var selectionType = this.props.selectionType;
    return react["createElement"](Container, null, react["createElement"](face_api_js_react["ImageWithOverlay"], Object.assign({}, this.props, {
      imageSrc: this.state.imageSrc,
      imageStyle: this.props.imageStyle
    })), react["createElement"](SideBySide["a" /* SideBySide */], null, (selectionType === SelectionTypes.SELECT || selectionType === SelectionTypes.BOTH) && react["createElement"](Margin, null, react["createElement"](ImageSelection_ImageSelection, {
      items: this.props.items,
      selectedImage: this.state.imageSrc,
      onChange: this.onChangeSelection
    })), (selectionType === SelectionTypes.FILE || selectionType === SelectionTypes.BOTH) && react["createElement"](Margin, null, react["createElement"]("input", {
      accept: "image/*",
      id: this.props.imgId,
      multiple: true,
      style: {
        display: 'none'
      },
      onChange: this.onLoadFromDisk,
      type: "file"
    }), react["createElement"]("label", {
      htmlFor: this.props.imgId
    }, react["createElement"](index_es["a" /* Button */], {
      variant: "outlined",
      component: "span"
    }, "From Disk")))));
  };

  return SelectableImage;
}(react["Component"]);
SelectableImage_SelectableImage.defaultProps = {
  selectionType: SelectionTypes.SELECT
};

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceDetection; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(163);
/* harmony import */ var face_api_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(164);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ModalLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(188);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(175);
/* harmony import */ var _facc_SelectFaceDetector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(200);
/* harmony import */ var _styled_CenterContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(184);









var FaceDetection =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FaceDetection, _React$Component);

  function FaceDetection() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      withBoxes: true
    };
    return _this;
  }

  var _proto = FaceDetection.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_facc_SelectFaceDetector__WEBPACK_IMPORTED_MODULE_7__[/* SelectFaceDetector */ "a"], {
      initialFaceDetector: this.props.initialFaceDetector,
      initialTinyFaceDetectorOptions: this.props.initialTinyFaceDetectorOptions
    }, function (detectorName, detectionOptions, renderFaceDetectorSelection, renderFaceDetectorControls) {
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](face_api_js_react__WEBPACK_IMPORTED_MODULE_3__["LoadModels"], Object.assign({}, Object(_const__WEBPACK_IMPORTED_MODULE_6__[/* getFaceDetectionModelUri */ "i"])(detectorName, _const__WEBPACK_IMPORTED_MODULE_6__[/* MODELS_URI */ "h"]), {
        faceLandmarkModelUrl: _const__WEBPACK_IMPORTED_MODULE_6__[/* MODELS_URI */ "h"],
        renderBusyComponent: function renderBusyComponent() {
          return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_ModalLoader__WEBPACK_IMPORTED_MODULE_5__[/* ModalLoader */ "a"], {
            title: "Loading " + detectorName + " Model"
          });
        }
      }), function () {
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_styled_CenterContent__WEBPACK_IMPORTED_MODULE_8__[/* CenterContent */ "a"], null, renderFaceDetectorSelection(), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_styled_CenterContent__WEBPACK_IMPORTED_MODULE_8__[/* CenterContent */ "a"], {
          flexDirection: "column",
          alignItems: "baseline"
        }, _this2.props.renderCheckboxes ? _this2.props.renderCheckboxes() : null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* FormControlLabel */ "i"], {
          control: react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* Checkbox */ "b"], {
            checked: !_this2.state.withBoxes,
            onChange: function onChange() {
              return _this2.setState({
                withBoxes: !_this2.state.withBoxes
              });
            },
            color: "primary"
          }),
          label: "Hide Bounding Boxes"
        }))), renderFaceDetectorControls(), _this2.props.children ? _this2.props.children(detectionOptions, _this2.state.withBoxes) : null);
      });
    });
  };

  return FaceDetection;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceAndLandmarkDetection; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(163);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FaceDetection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(189);





var FaceAndLandmarkDetection =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FaceAndLandmarkDetection, _React$Component);

  function FaceAndLandmarkDetection() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      withLandmarks: false
    };
    return _this;
  }

  var _proto = FaceAndLandmarkDetection.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_FaceDetection__WEBPACK_IMPORTED_MODULE_4__[/* FaceDetection */ "a"], Object.assign({}, this.props, {
      renderCheckboxes: function renderCheckboxes() {
        return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* FormControlLabel */ "i"], {
          control: react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* Checkbox */ "b"], {
            checked: _this2.state.withLandmarks,
            onChange: function onChange() {
              return _this2.setState({
                withLandmarks: !_this2.state.withLandmarks
              });
            },
            color: "primary"
          }),
          label: "Detect Face Landmarks"
        });
      }
    }), function (detectionOptions, withBoxes) {
      return _this2.props.children(detectionOptions, withBoxes, _this2.state.withLandmarks);
    });
  };

  return FaceAndLandmarkDetection;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-face-and-landmark-detection-tsx-e5ff515cf3e240f4f263.js.map