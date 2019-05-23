(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(159);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _face_api_js_react_facc_LoadModels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(205);
/* harmony import */ var _components_FaceDetection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189);
/* harmony import */ var _components_SelectableImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(187);
/* harmony import */ var _components_TrackFacesWithExpressions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(293);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(175);
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(186);











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

    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Root__WEBPACK_IMPORTED_MODULE_9__[/* Root */ "a"], null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_SelectableImage__WEBPACK_IMPORTED_MODULE_6__[/* SelectableImage */ "a"], {
      items: _const__WEBPACK_IMPORTED_MODULE_8__[/* EXAMPLE_IMAGES_FACE_EXPRESSIONS */ "e"].concat(_const__WEBPACK_IMPORTED_MODULE_8__[/* EXAMPLE_IMAGES */ "d"]),
      initialImageSrc: _const__WEBPACK_IMPORTED_MODULE_8__[/* EXAMPLE_IMAGES_FACE_EXPRESSIONS */ "e"][0].url,
      onLoaded: function onLoaded(_ref) {
        var input = _ref.img,
            overlay = _ref.overlay;
        return _this2.setState({
          input: input,
          overlay: overlay
        });
      },
      selectionType: _components_SelectableImage__WEBPACK_IMPORTED_MODULE_6__[/* SelectionTypes */ "b"].BOTH,
      imageStyle: {
        maxWidth: 800
      },
      imgId: "img"
    }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_face_api_js_react_facc_LoadModels__WEBPACK_IMPORTED_MODULE_4__[/* LoadModels */ "a"], {
      ssdMobilenetv1ModelUrl: _const__WEBPACK_IMPORTED_MODULE_8__[/* MODELS_URI */ "h"],
      faceExpessionModelUrl: _const__WEBPACK_IMPORTED_MODULE_8__[/* MODELS_URI */ "h"]
    }, function () {
      return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_FaceDetection__WEBPACK_IMPORTED_MODULE_5__[/* FaceDetection */ "a"], Object.assign({}, _this2.state, {
        initialFaceDetector: _const__WEBPACK_IMPORTED_MODULE_8__[/* FACE_DETECTORS */ "g"][1],
        initialTinyFaceDetectorOptions: new face_api_js__WEBPACK_IMPORTED_MODULE_2__["TinyFaceDetectorOptions"]({
          inputSize: 512
        })
      }), function (detectionOptions, withBoxes) {
        return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_TrackFacesWithExpressions__WEBPACK_IMPORTED_MODULE_7__[/* TrackFacesWithExpressions */ "a"], Object.assign({
          detectionOptions: detectionOptions,
          withBoxes: withBoxes
        }, _this2.state));
      });
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackFaces; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(171);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(172);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _face_api_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(164);






var TrackFaces =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(TrackFaces, _React$Component);

  function TrackFaces() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.isActive = false;
    _this.run =
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var results;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.isActive) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (_this.props.input) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", setTimeout(_this.run, 0));

            case 4:
              _context.next = 6;
              return _this.props.runTask();

            case 6:
              results = _context.sent;
              Object(_face_api_js_react__WEBPACK_IMPORTED_MODULE_5__["displayResults"])(_this.props.input, _this.props.overlay, results, _this.props.displayOptions);
              setTimeout(_this.run, 0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _this;
  }

  var _proto = TrackFaces.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.isActive = true;
    this.run();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.isActive = false;
  };

  _proto.render = function render() {
    return null;
  };

  return TrackFaces;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackFacesWithExpressions; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(170);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(171);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(172);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(159);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TrackFaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(199);








var TrackFacesWithExpressions =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(TrackFacesWithExpressions, _React$Component);

  function TrackFacesWithExpressions() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TrackFacesWithExpressions.prototype;

  _proto.render = function render() {
    var _this = this;

    var withBoxes = this.props.withBoxes;
    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_TrackFaces__WEBPACK_IMPORTED_MODULE_7__[/* TrackFaces */ "a"], Object.assign({}, this.props, {
      displayOptions: {
        withBoxes: withBoxes,
        withScore: false
      },
      runTask:
      /*#__PURE__*/
      _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", face_api_js__WEBPACK_IMPORTED_MODULE_5__["detectAllFaces"](_this.props.input.element, _this.props.detectionOptions).withFaceExpressions());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))
    }));
  };

  return TrackFacesWithExpressions;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-face-expression-recognition-tsx-077022e6f2f75c94a289.js.map