(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(159);
/* harmony import */ var face_api_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(164);
/* harmony import */ var face_api_js_react_components_DisplayResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(190);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _face_api_js_react_facc_DetectFacesWithLandmarksWithDescriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(291);
/* harmony import */ var _components_DisplayMatches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(292);
/* harmony import */ var _components_ModalLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(188);
/* harmony import */ var _components_SelectableImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(187);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(175);
/* harmony import */ var _facc_SelectFaceDetector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(200);
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(186);















var _default =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(_default, _React$Component);

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

    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Root__WEBPACK_IMPORTED_MODULE_12__[/* Root */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_SelectableImage__WEBPACK_IMPORTED_MODULE_9__[/* SelectableImage */ "a"], {
      items: _const__WEBPACK_IMPORTED_MODULE_10__[/* EXAMPLE_IMAGES */ "d"],
      initialImageSrc: _const__WEBPACK_IMPORTED_MODULE_10__[/* EXAMPLE_IMAGES */ "d"][0].url,
      onLoaded: function onLoaded(_ref) {
        var input1 = _ref.img,
            overlay1 = _ref.overlay;
        return _this2.setState({
          input1: input1,
          overlay1: overlay1
        });
      },
      selectionType: _components_SelectableImage__WEBPACK_IMPORTED_MODULE_9__[/* SelectionTypes */ "b"].BOTH,
      imageStyle: {
        maxWidth: 500
      },
      imgId: "img1"
    }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_SelectableImage__WEBPACK_IMPORTED_MODULE_9__[/* SelectableImage */ "a"], {
      items: _const__WEBPACK_IMPORTED_MODULE_10__[/* EXAMPLE_IMAGES */ "d"],
      initialImageSrc: _const__WEBPACK_IMPORTED_MODULE_10__[/* EXAMPLE_IMAGES */ "d"][3].url,
      onLoaded: function onLoaded(_ref2) {
        var input2 = _ref2.img,
            overlay2 = _ref2.overlay;
        return _this2.setState({
          input2: input2,
          overlay2: overlay2
        });
      },
      selectionType: _components_SelectableImage__WEBPACK_IMPORTED_MODULE_9__[/* SelectionTypes */ "b"].BOTH,
      imageStyle: {
        maxWidth: 500
      },
      imgId: "img2"
    }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](face_api_js_react__WEBPACK_IMPORTED_MODULE_3__["LoadModels"], {
      faceLandmarkModelUrl: _const__WEBPACK_IMPORTED_MODULE_10__[/* MODELS_URI */ "h"],
      faceRecognitionModelUrl: _const__WEBPACK_IMPORTED_MODULE_10__[/* MODELS_URI */ "h"],
      renderBusyComponent: function renderBusyComponent() {
        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_ModalLoader__WEBPACK_IMPORTED_MODULE_8__[/* ModalLoader */ "a"], {
          title: "Loading Models"
        });
      }
    }, function () {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_facc_SelectFaceDetector__WEBPACK_IMPORTED_MODULE_11__[/* SelectFaceDetector */ "a"], {
        initialFaceDetector: _const__WEBPACK_IMPORTED_MODULE_10__[/* FACE_DETECTORS */ "g"][0],
        initialTinyFaceDetectorOptions: new face_api_js__WEBPACK_IMPORTED_MODULE_2__["TinyFaceDetectorOptions"]({
          inputSize: 512
        })
      }, function (detectorName, detectionOptions, renderFaceDetectorSelection, renderFaceDetectorControls) {
        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](face_api_js_react__WEBPACK_IMPORTED_MODULE_3__["LoadModels"], Object.assign({}, Object(_const__WEBPACK_IMPORTED_MODULE_10__[/* getFaceDetectionModelUri */ "i"])(detectorName, _const__WEBPACK_IMPORTED_MODULE_10__[/* MODELS_URI */ "h"]), {
          renderBusyComponent: function renderBusyComponent() {
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_ModalLoader__WEBPACK_IMPORTED_MODULE_8__[/* ModalLoader */ "a"], {
              title: "Loading " + detectorName + " Model"
            });
          }
        }), function () {
          return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", null, renderFaceDetectorSelection(), renderFaceDetectorControls(), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_face_api_js_react_facc_DetectFacesWithLandmarksWithDescriptors__WEBPACK_IMPORTED_MODULE_6__[/* DetectFacesWithLandmarksWithDescriptors */ "a"], {
            input: _this2.state.input1,
            detectionOptions: detectionOptions
          }, function (_ref3) {
            var results1 = _ref3.fullFaceDescriptions;

            if (!results1.length) {
              return null;
            }

            var faceMatcher = new face_api_js__WEBPACK_IMPORTED_MODULE_2__["FaceMatcher"](results1);
            var overlay1 = _this2.state.overlay1;
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_face_api_js_react_facc_DetectFacesWithLandmarksWithDescriptors__WEBPACK_IMPORTED_MODULE_6__[/* DetectFacesWithLandmarksWithDescriptors */ "a"], {
              input: _this2.state.input2,
              detectionOptions: detectionOptions
            }, function (_ref4) {
              var results2 = _ref4.fullFaceDescriptions;
              return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](face_api_js_react_components_DisplayResults__WEBPACK_IMPORTED_MODULE_4__[/* DisplayResults */ "a"], {
                input: _this2.state.input1,
                overlay: overlay1,
                results: faceMatcher.labeledDescriptors.map(function (ld, idx) {
                  return new face_api_js__WEBPACK_IMPORTED_MODULE_2__["BoxWithText"](results1[idx].detection.forSize(overlay1.width, overlay1.height).box, ld.label);
                })
              }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_DisplayMatches__WEBPACK_IMPORTED_MODULE_7__[/* DisplayMatches */ "a"], {
                input: _this2.state.input2,
                fullFaceDescriptions: results2,
                overlay: _this2.state.overlay2,
                getBestMatch: function getBestMatch(desc) {
                  return faceMatcher.findBestMatch(desc);
                },
                withScore: true
              }));
            });
          }));
        });
      });
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



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

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetectFacesWithLandmarksWithDescriptors; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(171);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(172);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var _hoc_withAsyncRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(177);






function detectFacesWithLandmarksWithDescriptors(_x) {
  return _detectFacesWithLandmarksWithDescriptors.apply(this, arguments);
}

function _detectFacesWithLandmarksWithDescriptors() {
  _detectFacesWithLandmarksWithDescriptors = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
            return face_api_js__WEBPACK_IMPORTED_MODULE_3__["detectAllFaces"](props.input.element, props.detectionOptions).withFaceLandmarks().withFaceDescriptors();

          case 4:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              fullFaceDescriptions: _context.t0
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _detectFacesWithLandmarksWithDescriptors.apply(this, arguments);
}

var DetectFacesWithLandmarksWithDescriptors = Object(_hoc_withAsyncRendering__WEBPACK_IMPORTED_MODULE_4__[/* withAsyncRendering */ "a"])(detectFacesWithLandmarksWithDescriptors);

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayMatches; });
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _face_api_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(164);




var DisplayMatches = function DisplayMatches(props) {
  var input = props.input,
      fullFaceDescriptions = props.fullFaceDescriptions,
      overlay = props.overlay,
      withScore = props.withScore,
      getBestMatch = props.getBestMatch;
  var boxesWithText = face_api_js__WEBPACK_IMPORTED_MODULE_0__["resizeResults"](fullFaceDescriptions, overlay).map(function (fd) {
    var bestMatch = getBestMatch(fd.descriptor);
    var text = (bestMatch.distance < 0.6 ? bestMatch.label : 'unknown') + " (" + face_api_js__WEBPACK_IMPORTED_MODULE_0__["round"](bestMatch.distance) + ")";
    return new face_api_js__WEBPACK_IMPORTED_MODULE_0__["BoxWithText"](fd.detection.box, text);
  });
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_face_api_js_react__WEBPACK_IMPORTED_MODULE_2__["DisplayResults"], {
    input: input,
    results: boxesWithText,
    overlay: overlay,
    displayResultsOptions: {
      withScore: withScore
    }
  }, props.children);
};

/***/ })

}]);
//# sourceMappingURL=component---src-pages-face-recognition-tsx-f2f829efeb3ac852698e.js.map