(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/face-api.js/build/es6/index.js + 161 modules
var es6 = __webpack_require__(159);

// EXTERNAL MODULE: ./face-api.js-react/index.ts
var face_api_js_react = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./face-api.js-react/facc/DetectFacesWithLandmarksWithDescriptors.tsx
var DetectFacesWithLandmarksWithDescriptors = __webpack_require__(291);

// EXTERNAL MODULE: ./src/components/DisplayMatches.tsx
var DisplayMatches = __webpack_require__(292);

// EXTERNAL MODULE: ./src/components/ModalLoader.tsx
var ModalLoader = __webpack_require__(188);

// EXTERNAL MODULE: ./src/components/SelectableImage.tsx + 1 modules
var SelectableImage = __webpack_require__(187);

// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(175);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(170);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(171);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(172);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./src/facc/ComputeRefDescriptors.tsx












function initRefDescriptors(_x) {
  return _initRefDescriptors.apply(this, arguments);
}

function _initRefDescriptors() {
  _initRefDescriptors = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(props) {
    var refDescriptors, getBestMatch;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Promise.all(props.refDataSources.map(
            /*#__PURE__*/
            function () {
              var _ref2 = asyncToGenerator_default()(
              /*#__PURE__*/
              regenerator_default.a.mark(function _callee(_ref) {
                var label, url, img, descriptor;
                return regenerator_default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        label = _ref.label, url = _ref.url;
                        _context.t0 = es6;
                        _context.next = 4;
                        return fetch(url);

                      case 4:
                        _context.next = 6;
                        return _context.sent.blob();

                      case 6:
                        _context.t1 = _context.sent;
                        _context.next = 9;
                        return _context.t0.bufferToImage.call(_context.t0, _context.t1);

                      case 9:
                        img = _context.sent;
                        _context.next = 12;
                        return es6["nets"].faceRecognitionNet.computeFaceDescriptor(img);

                      case 12:
                        descriptor = _context.sent;
                        return _context.abrupt("return", {
                          label: label.replace('1.png', ''),
                          descriptor: descriptor
                        });

                      case 14:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 2:
            refDescriptors = _context2.sent;

            getBestMatch = function getBestMatch(queryDescriptor) {
              return refDescriptors.map(function (ref) {
                return {
                  label: ref.label,
                  distance: es6["euclideanDistance"](ref.descriptor, queryDescriptor)
                };
              }).reduce(function (best, curr) {
                return curr.distance < best.distance ? curr : best;
              });
            };

            return _context2.abrupt("return", {
              refDescriptors: refDescriptors,
              getBestMatch: getBestMatch
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _initRefDescriptors.apply(this, arguments);
}

var ComputeRefDescriptors = Object(face_api_js_react["withAsyncRendering"])(initRefDescriptors);
// EXTERNAL MODULE: ./src/facc/SelectFaceDetector.tsx + 4 modules
var SelectFaceDetector = __webpack_require__(200);

// EXTERNAL MODULE: ./src/Root.tsx + 3 modules
var Root = __webpack_require__(186);

// CONCATENATED MODULE: ./src/pages/bbt_face_recognition.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bbt_face_recognition_default; });













var REF_DATA_SOURCES = src_const["b" /* ALIGNED_FACE_IMAGES_BY_CLASS */].map(function (srcsByClass) {
  return srcsByClass[0];
});

var bbt_face_recognition_default =
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

    return react["createElement"](Root["a" /* Root */], null, react["createElement"](SelectableImage["a" /* SelectableImage */], {
      items: src_const["d" /* EXAMPLE_IMAGES */],
      initialImageSrc: src_const["d" /* EXAMPLE_IMAGES */][0].url,
      onLoaded: function onLoaded(_ref) {
        var inputImg = _ref.img,
            overlay = _ref.overlay;
        return _this2.setState({
          inputImg: inputImg,
          overlay: overlay
        });
      },
      selectionType: SelectableImage["b" /* SelectionTypes */].BOTH,
      imageStyle: {
        maxWidth: 800
      },
      imgId: "img"
    }), react["createElement"](face_api_js_react["LoadModels"], {
      faceLandmarkModelUrl: src_const["h" /* MODELS_URI */],
      faceRecognitionModelUrl: src_const["h" /* MODELS_URI */],
      renderBusyComponent: function renderBusyComponent() {
        return react["createElement"](ModalLoader["a" /* ModalLoader */], {
          title: "Loading Models"
        });
      }
    }, function () {
      return react["createElement"](ComputeRefDescriptors, {
        refDataSources: REF_DATA_SOURCES,
        renderBusyComponent: function renderBusyComponent() {
          return react["createElement"](ModalLoader["a" /* ModalLoader */], {
            title: "Computing Reference Descriptors"
          });
        }
      }, function (_ref2) {
        var getBestMatch = _ref2.getBestMatch;
        return react["createElement"](SelectFaceDetector["a" /* SelectFaceDetector */], {
          initialFaceDetector: src_const["g" /* FACE_DETECTORS */][0],
          initialTinyFaceDetectorOptions: new es6["TinyFaceDetectorOptions"]({
            inputSize: 512
          })
        }, function (detectorName, detectionOptions, renderFaceDetectorSelection, renderFaceDetectorControls) {
          return react["createElement"](face_api_js_react["LoadModels"], Object.assign({}, Object(src_const["i" /* getFaceDetectionModelUri */])(detectorName, src_const["h" /* MODELS_URI */]), {
            renderBusyComponent: function renderBusyComponent() {
              return react["createElement"](ModalLoader["a" /* ModalLoader */], {
                title: "Loading " + detectorName + " Model"
              });
            }
          }), function () {
            return react["createElement"]("div", null, renderFaceDetectorSelection(), renderFaceDetectorControls(), react["createElement"](DetectFacesWithLandmarksWithDescriptors["a" /* DetectFacesWithLandmarksWithDescriptors */], {
              input: _this2.state.inputImg,
              detectionOptions: detectionOptions
            }, function (_ref3) {
              var fullFaceDescriptions = _ref3.fullFaceDescriptions;
              return react["createElement"](DisplayMatches["a" /* DisplayMatches */], {
                input: _this2.state.inputImg,
                fullFaceDescriptions: fullFaceDescriptions,
                overlay: _this2.state.overlay,
                getBestMatch: getBestMatch,
                withScore: true
              });
            }));
          });
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
//# sourceMappingURL=component---src-pages-bbt-face-recognition-tsx-34d8dda608ec10061f92.js.map