(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBySide; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);

var SideBySide = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].div.withConfig({
  displayName: "SideBySide",
  componentId: "qx4hnf-0"
})(["display:flex;flex-direction:row;align-items:", ";"], function (props) {
  return props.alignItems || 'center';
});

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOCS_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EXAMPLE_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EXAMPLE_IMAGES_FACE_EXPRESSIONS; });
/* unused harmony export ALIGNED_FACE_IMAGES_BY_CLASS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EXAMPLE_VIDEOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MODELS_URI; });
/* unused harmony export ALIGNED_FACE_IMAGES */
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_0__);

var DOCS_URI = Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])('/docs/globals.html');
var EXAMPLE_IMAGES = [1, 2, 3, 4, 5].map(function (idx) {
  return "bbt" + idx + ".jpg";
}).map(function (label) {
  return {
    label: label,
    url: Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("/images/" + label)
  };
});
var EXAMPLE_IMAGES_FACE_EXPRESSIONS = ['happy', 'sad', 'angry', 'disgusted', 'surprised', 'fearful', 'neutral'].map(function (expression) {
  return expression + ".jpg";
}).map(function (label) {
  return {
    label: label,
    url: Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("/images/" + label)
  };
});
var ALIGNED_FACE_IMAGES_BY_CLASS = ['amy', 'bernadette', 'howard', 'leonard', 'penny', 'raj', 'sheldon', 'stuart'].map(function (clazz) {
  return [1, 2, 3, 4, 5].map(function (idx) {
    return "" + clazz + idx + ".png";
  }).map(function (label) {
    return {
      label: label,
      url: Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("/images/" + clazz + "/" + label)
    };
  });
});
var EXAMPLE_VIDEOS = ["bbt.mp4"].map(function (label) {
  return {
    label: label,
    url: Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("/media/" + label)
  };
});
var MODELS_URI = Object(gatsby_link__WEBPACK_IMPORTED_MODULE_0__["withPrefix"])("/models");
var ALIGNED_FACE_IMAGES = ALIGNED_FACE_IMAGES_BY_CLASS.reduce(function (flat, arr) {
  return flat.concat(arr);
}, []);

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InputTypeTabs; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(223);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(170);




var TabComponent = styled_components__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"].div.withConfig({
  displayName: "InputTypeTabs__TabComponent",
  componentId: "sc-1cadnkl-0"
})(["display:flex;align-items:center;svg{margin-left:8px;}"]);
var InputType;

(function (InputType) {
  InputType[InputType["IMAGE"] = 0] = "IMAGE";
  InputType[InputType["WEBCAM"] = 1] = "WEBCAM";
  InputType[InputType["VIDEO"] = 2] = "VIDEO";
})(InputType || (InputType = {}));

var InputTypeTabs = function InputTypeTabs(_ref) {
  var inputType = _ref.inputType,
      _onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* AppBar */ "a"], {
    position: "static"
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* Tabs */ "v"], {
    value: inputType,
    onChange: function onChange(_, inputType) {
      return _onChange(inputType);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* Tab */ "u"], {
    icon: react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TabComponent, null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null, "Image"), " ", react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "c"], null))
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* Tab */ "u"], {
    icon: react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TabComponent, null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null, "Webcam"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__[/* Videocam */ "g"], null))
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* Tab */ "u"], {
    icon: react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TabComponent, null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null, "Video"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__[/* VideoLibrary */ "f"], null))
  })));
};

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(205);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(207);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(36);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.es.js
var index_es = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/face-api.js/build/es6/index.js + 176 modules
var es6 = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(170);

// CONCATENATED MODULE: ./src/components/FaceDetectorSelection/const.ts

var TINY_FACE_DETECTOR = 'Tiny Face Detector';
var SSD_MOBILENET_V1 = 'SSD Mobilenet V1';
var MTCNN = 'MTCNN';
var FACE_DETECTORS = [SSD_MOBILENET_V1, TINY_FACE_DETECTOR, MTCNN];
function getFaceDetectorNameFromOptions(options) {
  if (options instanceof es6["d" /* SsdMobilenetv1Options */]) {
    return SSD_MOBILENET_V1;
  }

  if (options instanceof es6["e" /* TinyFaceDetectorOptions */]) {
    return TINY_FACE_DETECTOR;
  }

  if (options instanceof es6["c" /* MtcnnOptions */]) {
    return MTCNN;
  }

  throw new Error("getFaceDetectorNameFromOptions - invalid face detector options");
}
function createDefaultFaceDetectorOptionsFromName(detectorName) {
  if (detectorName === SSD_MOBILENET_V1) {
    return new es6["d" /* SsdMobilenetv1Options */]();
  }

  if (detectorName === TINY_FACE_DETECTOR) {
    return new es6["e" /* TinyFaceDetectorOptions */]();
  }

  if (detectorName === MTCNN) {
    return new es6["c" /* MtcnnOptions */]();
  }

  throw new Error("getFaceDetectorNameFromOptions - invalid detectorName: " + detectorName);
}
function getFaceDetectionNetFromName(detectorName) {
  if (detectorName === SSD_MOBILENET_V1) {
    return es6["n" /* nets */].ssdMobilenetv1;
  }

  if (detectorName === TINY_FACE_DETECTOR) {
    return es6["n" /* nets */].tinyFaceDetector;
  }

  if (detectorName === MTCNN) {
    return es6["n" /* nets */].mtcnn;
  }

  throw new Error("getFaceDetectionNetFromName - invalid detectorName: " + detectorName);
}
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(34);

// EXTERNAL MODULE: ./src/components/styled/SideBySide.tsx
var SideBySide = __webpack_require__(197);

// CONCATENATED MODULE: ./src/components/AdjustableInput.tsx



var AdjustableInput_AdjustableInput = function AdjustableInput(props) {
  return react["createElement"](index_es["i" /* FormControl */], null, react["createElement"](SideBySide["a" /* SideBySide */], null, react["createElement"](index_es["o" /* InputLabel */], {
    htmlFor: props.inputId
  }, props.label), react["createElement"](index_es["n" /* Input */], {
    id: props.inputId,
    value: props.value
  }), react["createElement"](index_es["b" /* Button */], {
    variant: "outlined",
    onClick: function onClick() {
      return props.onChange(Math.max(props.value - props.step, props.minValue));
    }
  }, "-"), react["createElement"](index_es["b" /* Button */], {
    variant: "outlined",
    onClick: function onClick() {
      return props.onChange(Math.min(props.value + props.step, props.maxValue));
    }
  }, "+")));
};
// CONCATENATED MODULE: ./src/components/FaceDetectorSelection/MtcnnControls.tsx





var MtcnnControls_MtcnnControls = function MtcnnControls(props) {
  var assignOptions = function assignOptions(partial) {
    var _props$detectionParam = props.detectionParams,
        scaleFactor = _props$detectionParam.scaleFactor,
        minFaceSize = _props$detectionParam.minFaceSize;
    return new es6["c" /* MtcnnOptions */](Object.assign({
      scaleFactor: scaleFactor,
      minFaceSize: minFaceSize
    }, partial));
  };

  return react["createElement"](index_es["i" /* FormControl */], null, react["createElement"](AdjustableInput_AdjustableInput, {
    inputId: "scaleFactor",
    label: "scaleFactor:",
    value: props.detectionParams.scaleFactor,
    minValue: 0.1,
    maxValue: 0.9,
    step: 0.05,
    onChange: function onChange(scaleFactor) {
      return props.onParamsChanged(assignOptions({
        scaleFactor: scaleFactor
      }));
    }
  }), react["createElement"](AdjustableInput_AdjustableInput, {
    inputId: "minFaceSize",
    label: "minFaceSize:",
    value: props.detectionParams.minFaceSize,
    minValue: 40,
    maxValue: 400,
    step: 40,
    onChange: function onChange(minFaceSize) {
      return props.onParamsChanged(assignOptions({
        minFaceSize: minFaceSize
      }));
    }
  }));
};
// CONCATENATED MODULE: ./src/components/FaceDetectorSelection/SsdMobilenetv1Controls.tsx





var SsdMobilenetv1Controls_SsdMobilenetv1Controls = function SsdMobilenetv1Controls(props) {
  var assignOptions = function assignOptions(partial) {
    var minConfidence = props.detectionParams.minConfidence;
    return new es6["d" /* SsdMobilenetv1Options */](Object.assign({
      minConfidence: minConfidence
    }, partial));
  };

  return react["createElement"](index_es["i" /* FormControl */], null, react["createElement"](AdjustableInput_AdjustableInput, {
    inputId: "minConfidence",
    label: "minConfidence:",
    value: props.detectionParams.minConfidence,
    minValue: 0.1,
    maxValue: 0.9,
    step: 0.1,
    onChange: function onChange(minConfidence) {
      return props.onParamsChanged(assignOptions({
        minConfidence: minConfidence
      }));
    }
  }));
};
// CONCATENATED MODULE: ./src/components/FaceDetectorSelection/TinyFaceDetectorControls.tsx





var TinyFaceDetectorControls_TinyFaceDetectorControls = function TinyFaceDetectorControls(props) {
  var assignOptions = function assignOptions(partial) {
    var _props$detectionParam = props.detectionParams,
        inputSize = _props$detectionParam.inputSize,
        scoreThreshold = _props$detectionParam.scoreThreshold;
    return new es6["e" /* TinyFaceDetectorOptions */](Object.assign({
      inputSize: inputSize,
      scoreThreshold: scoreThreshold
    }, partial));
  };

  return react["createElement"](index_es["i" /* FormControl */], null, react["createElement"](index_es["i" /* FormControl */], null, react["createElement"](index_es["o" /* InputLabel */], {
    htmlFor: "selectInputSize"
  }, "Input Size"), react["createElement"](index_es["t" /* Select */], {
    value: props.detectionParams.inputSize,
    onChange: function onChange(e) {
      return props.onParamsChanged(assignOptions({
        inputSize: e.target.value
      }));
    },
    input: react["createElement"](index_es["n" /* Input */], null),
    id: "selectInputSize"
  }, props.inputSizes.map(function (size) {
    return react["createElement"](index_es["s" /* MenuItem */], {
      key: size,
      value: size
    }, size);
  }))), react["createElement"](AdjustableInput_AdjustableInput, {
    inputId: "scoreThreshold",
    label: "scoreThreshold:",
    value: props.detectionParams.scoreThreshold,
    minValue: 0.1,
    maxValue: 0.9,
    step: 0.1,
    onChange: function onChange(scoreThreshold) {
      return props.onParamsChanged(assignOptions({
        scoreThreshold: scoreThreshold
      }));
    }
  }));
};
// CONCATENATED MODULE: ./src/components/FaceDetectorSelection/FaceDetectorSelectionDialog.tsx








var FaceDetectorSelectionDialog_FaceDetectorSelectionDialog =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(FaceDetectorSelectionDialog, _React$Component);

  function FaceDetectorSelectionDialog(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.onFaceDetectionOptionsChanged = function (faceDetectionOptions) {
      _this.setState({
        faceDetectionOptions: faceDetectionOptions
      });
    };

    _this.renderSelection = function () {
      return react["createElement"]("div", null, react["createElement"](index_es["o" /* InputLabel */], {
        htmlFor: "Dialog"
      }, "Choose face detector:"), react["createElement"](index_es["t" /* Select */], {
        value: getFaceDetectorNameFromOptions(_this.state.faceDetectionOptions),
        onChange: function onChange(e) {
          return _this.setState({
            faceDetectionOptions: createDefaultFaceDetectorOptionsFromName(e.target.value)
          });
        },
        input: react["createElement"](index_es["n" /* Input */], null),
        id: "Dialog"
      }, FACE_DETECTORS.map(function (item) {
        return react["createElement"](index_es["s" /* MenuItem */], {
          key: item,
          value: item
        }, item);
      })));
    };

    _this.renderControls = function () {
      if (_this.state.faceDetectionOptions instanceof es6["d" /* SsdMobilenetv1Options */]) {
        return react["createElement"](SsdMobilenetv1Controls_SsdMobilenetv1Controls, {
          detectionParams: _this.state.faceDetectionOptions,
          onParamsChanged: _this.onFaceDetectionOptionsChanged
        });
      } else if (_this.state.faceDetectionOptions instanceof es6["e" /* TinyFaceDetectorOptions */]) {
        return react["createElement"](TinyFaceDetectorControls_TinyFaceDetectorControls, {
          inputSizes: [128, 160, 224, 320, 416, 512, 608],
          detectionParams: _this.state.faceDetectionOptions,
          onParamsChanged: _this.onFaceDetectionOptionsChanged
        });
      } else if (_this.state.faceDetectionOptions instanceof es6["c" /* MtcnnOptions */]) {
        return react["createElement"](MtcnnControls_MtcnnControls, {
          detectionParams: _this.state.faceDetectionOptions,
          onParamsChanged: _this.onFaceDetectionOptionsChanged
        });
      }
    };

    _this.state = {
      faceDetectionOptions: props.initialFaceDetectionOptions
    };
    return _this;
  }

  var _proto = FaceDetectorSelectionDialog.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return react["createElement"](index_es["d" /* Dialog */], {
      disableBackdropClick: true,
      disableEscapeKeyDown: true,
      open: true
    }, react["createElement"](index_es["f" /* DialogTitle */], null, 'Face Detector Options'), react["createElement"](index_es["e" /* DialogContent */], null, react["createElement"](index_es["i" /* FormControl */], null, this.renderSelection(), this.renderControls(), react["createElement"](index_es["b" /* Button */], {
      variant: "outlined",
      onClick: function onClick() {
        return _this2.props.onClose(_this2.state.faceDetectionOptions);
      }
    }, 'Save'))));
  };

  return FaceDetectorSelectionDialog;
}(react["Component"]);
// CONCATENATED MODULE: ./src/components/FaceDetectorSelection/index.tsx





var FaceDetectorSelection_FaceDetectorSelection =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(FaceDetectorSelection, _React$Component);

  function FaceDetectorSelection(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.onCloseDialog = function (faceDetectionOptions) {
      _this.setState({
        isDialogOpen: false
      });

      if (_this.props.faceDetectionOptions !== faceDetectionOptions) {
        _this.props.onFaceDetectionOptionsChanged(faceDetectionOptions);
      }
    };

    _this.onOpenDialog = function () {
      _this.setState({
        isDialogOpen: true
      });
    };

    _this.state = {
      isDialogOpen: false
    };
    return _this;
  }

  var _proto = FaceDetectorSelection.prototype;

  _proto.render = function render() {
    var dialog = this.state.isDialogOpen ? react["createElement"](FaceDetectorSelectionDialog_FaceDetectorSelectionDialog, {
      initialFaceDetectionOptions: this.props.faceDetectionOptions,
      onClose: this.onCloseDialog
    }) : null;
    return react["createElement"]("div", null, dialog, react["createElement"](index_es["b" /* Button */], {
      variant: "outlined",
      onClick: this.onOpenDialog
    }, getFaceDetectorNameFromOptions(this.props.faceDetectionOptions)));
  };

  return FaceDetectorSelection;
}(react["Component"]);
// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(204);

// EXTERNAL MODULE: ./src/components/InputTypeTabs.tsx
var InputTypeTabs = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(155);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/MediaElement.ts

var MediaElement_MediaElement =
/*#__PURE__*/
function () {
  function MediaElement(element) {
    this._element = element;
  }

  createClass_default()(MediaElement, [{
    key: "element",
    get: function get() {
      return this._element;
    }
  }]);

  return MediaElement;
}();
// CONCATENATED MODULE: ./src/components/ImageWithOverlay.tsx





var ImageWithOverlay_ImageWithOverlay =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(ImageWithOverlay, _React$Component);

  function ImageWithOverlay(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.isLoaded = false;
    _this.onImageLoaded = _this.onImageLoaded.bind(assertThisInitialized_default()(_this));
    _this.onImageRef = _this.onImageRef.bind(assertThisInitialized_default()(_this));
    _this.onCanvasRef = _this.onCanvasRef.bind(assertThisInitialized_default()(_this));
    _this.onChange = _this.onChange.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  var _proto = ImageWithOverlay.prototype;

  _proto.onChange = function onChange() {
    var img = this.img,
        overlay = this.overlay,
        isLoaded = this.isLoaded;

    if (img && overlay && isLoaded) {
      this.overlay.height = this.img.height;
      this.overlay.width = this.img.width;
      this.props.onLoaded({
        mediaElement: new MediaElement_MediaElement(img),
        overlay: overlay
      });
    }
  };

  _proto.onImageLoaded = function onImageLoaded() {
    this.isLoaded = true;
    this.onChange();
  };

  _proto.onImageRef = function onImageRef(el) {
    this.img = el;
    this.onChange();
  };

  _proto.onCanvasRef = function onCanvasRef(el) {
    this.overlay = el;
    this.onChange();
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.imageSrc !== this.props.imageSrc;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.onChange();
  };

  _proto.componentDidMount = function componentDidMount() {
    this.onChange();
  };

  _proto.render = function render() {
    return react["createElement"]("div", {
      style: Object.assign({}, {
        position: 'relative'
      }, this.props.containerStyle)
    }, react["createElement"]("img", {
      src: this.props.imageSrc,
      ref: this.onImageRef,
      style: Object.assign({}, this.props.imageStyle),
      onLoad: this.onImageLoaded
    }), react["createElement"]("canvas", {
      style: Object.assign({}, {
        position: 'absolute',
        top: 0,
        left: 0
      }, this.props.canvasStyle),
      ref: this.onCanvasRef
    }));
  };

  return ImageWithOverlay;
}(react["Component"]);
// CONCATENATED MODULE: ./src/components/FileSelectionControls.tsx


var FileSelectionControls_FileSelectionControls = function FileSelectionControls(_ref) {
  var items = _ref.items,
      selectedFile = _ref.selectedFile,
      _onChange = _ref.onChange;
  return react["createElement"](index_es["i" /* FormControl */], null, react["createElement"](index_es["t" /* Select */], {
    value: selectedFile,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    input: react["createElement"](index_es["n" /* Input */], null)
  }, items.map(function (item) {
    return react["createElement"](index_es["s" /* MenuItem */], {
      key: item.url,
      value: item.url
    }, item.label);
  })), react["createElement"](index_es["k" /* FormHelperText */], null, "Pick a file"));
};
// CONCATENATED MODULE: ./src/components/SelectableInputElement.tsx







var Container = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "SelectableInputElement__Container",
  componentId: "sc-1ngakit-0"
})(["padding:10px;display:flex;flex-direction:column;align-items:center;"]);
var SelectableInputElement_MediaElement = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "SelectableInputElement__MediaElement",
  componentId: "sc-1ngakit-1"
})(["display:flex;align-items:center;justify-content:center;min-height:500px;width:800px;"]);
var Margin = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "SelectableInputElement__Margin",
  componentId: "sc-1ngakit-2"
})(["margin:10px;"]);
var SelectionTypes;

(function (SelectionTypes) {
  SelectionTypes["SELECT"] = "SELECT";
  SelectionTypes["FILE"] = "FILE";
  SelectionTypes["BOTH"] = "BOTH";
})(SelectionTypes || (SelectionTypes = {}));

var SelectableInputElement_SelectableInputElement =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SelectableInputElement, _React$Component);

  function SelectableInputElement(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      src: props.initialSrc
    };
    _this.onChangeSelection = _this.onChangeSelection.bind(assertThisInitialized_default()(_this));
    _this.onLoadFromDisk = _this.onLoadFromDisk.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  var _proto = SelectableInputElement.prototype;

  _proto.onChangeSelection = function onChangeSelection(src) {
    this.setState({
      src: src
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
        src: loadEvent.target.result
      });
    };

    reader.readAsDataURL(file);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        selectionType = _this$props.selectionType,
        onLoaded = _this$props.onLoaded,
        mediaElementStyle = _this$props.mediaElementStyle,
        renderMediaElement = _this$props.renderMediaElement,
        renderAdditionalControls = _this$props.renderAdditionalControls;
    var src = this.state.src;
    return react["createElement"](Container, null, react["createElement"](SelectableInputElement_MediaElement, null, renderMediaElement({
      src: src,
      onLoaded: onLoaded,
      mediaElementStyle: mediaElementStyle
    })), react["createElement"](SideBySide["a" /* SideBySide */], null, (selectionType === SelectionTypes.SELECT || selectionType === SelectionTypes.BOTH) && react["createElement"](Margin, null, react["createElement"](FileSelectionControls_FileSelectionControls, {
      items: this.props.items,
      selectedFile: this.state.src,
      onChange: this.onChangeSelection
    })), (selectionType === SelectionTypes.FILE || selectionType === SelectionTypes.BOTH) && react["createElement"](Margin, null, react["createElement"]("input", {
      accept: this.props.accept,
      id: this.props.mediaElementId,
      multiple: true,
      style: {
        display: 'none'
      },
      onChange: this.onLoadFromDisk,
      type: "file"
    }), react["createElement"]("label", {
      htmlFor: this.props.mediaElementId
    }, react["createElement"](index_es["b" /* Button */], {
      variant: "outlined",
      component: "span"
    }, "From Disk"))), renderAdditionalControls ? renderAdditionalControls() : null));
  };

  return SelectableInputElement;
}(react["Component"]);
SelectableInputElement_SelectableInputElement.defaultProps = {
  selectionType: SelectionTypes.SELECT
};
// CONCATENATED MODULE: ./src/components/SelectableImage.tsx





var SelectableImage_SelectableImage =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SelectableImage, _React$Component);

  function SelectableImage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SelectableImage.prototype;

  _proto.render = function render() {
    return react["createElement"](SelectableInputElement_SelectableInputElement, Object.assign({}, this.props, {
      accept: "image/*",
      renderMediaElement: function renderMediaElement(props) {
        return react["createElement"](ImageWithOverlay_ImageWithOverlay, {
          imageSrc: props.src,
          onLoaded: props.onLoaded,
          imageStyle: props.mediaElementStyle
        });
      }
    }));
  };

  return SelectableImage;
}(react["Component"]);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/index.es.js
var icons_index_es = __webpack_require__(223);

// CONCATENATED MODULE: ./src/components/styled/CenterContent.tsx

var CenterContent = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "CenterContent",
  componentId: "sc-1cuphol-0"
})(["display:flex;align-items:", ";justify-content:center;flex-direction:", ";flex-wrap:wrap;"], function (props) {
  return props.alignItems || 'center';
}, function (props) {
  return props.flexDirection || 'row';
});
// CONCATENATED MODULE: ./src/components/VideoWithOverlay.tsx





var VideoWithOverlay_VideoWithOverlay =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(VideoWithOverlay, _React$Component);

  function VideoWithOverlay(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.isLoaded = false;
    _this.onChange = _this.onChange.bind(assertThisInitialized_default()(_this));
    _this.onVideoRef = _this.onVideoRef.bind(assertThisInitialized_default()(_this));
    _this.onCanvasRef = _this.onCanvasRef.bind(assertThisInitialized_default()(_this));
    _this.onPlay = _this.onPlay.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  var _proto = VideoWithOverlay.prototype;

  _proto.onChange = function onChange() {
    var video = this.video,
        overlay = this.overlay,
        isLoaded = this.isLoaded;

    if (video && overlay && isLoaded) {
      var _this$video$getBoundi = this.video.getBoundingClientRect(),
          width = _this$video$getBoundi.width,
          height = _this$video$getBoundi.height;

      this.overlay.width = width, this.overlay.height = height;
      this.props.onLoaded({
        mediaElement: new MediaElement_MediaElement(video),
        overlay: overlay
      });
    }
  };

  _proto.onVideoRef = function onVideoRef(el) {
    this.video = el;
    this.props.onVideoRef && this.props.onVideoRef();
    this.onChange();
  };

  _proto.onCanvasRef = function onCanvasRef(el) {
    this.overlay = el;
    this.onChange();
  };

  _proto.onPlay = function onPlay() {
    this.isLoaded = true;
    this.onChange();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var srcObject = nextProps.srcObject;

    if (srcObject && this.props.srcObject !== srcObject) {
      this.video.srcObject = srcObject;
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.src !== this.props.src;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.onChange();
  };

  _proto.componentDidMount = function componentDidMount() {
    this.onChange();
  };

  _proto.render = function render() {
    return react["createElement"]("div", {
      style: {
        position: 'relative'
      }
    }, react["createElement"]("video", {
      muted: true,
      autoPlay: true,
      style: Object.assign({}, this.props.videoStyle),
      ref: this.onVideoRef,
      onPlay: this.onPlay,
      src: this.props.src
    }), react["createElement"]("canvas", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0
      },
      ref: this.onCanvasRef
    }));
  };

  return VideoWithOverlay;
}(react["Component"]);
// CONCATENATED MODULE: ./src/components/SelectableVideo.tsx










var PLAYBACK_RATES = [1.0, 0.75, 0.5, 0.25];
var PlayButtonContainer = Object(styled_components_browser_esm["b" /* default */])(CenterContent).withConfig({
  displayName: "SelectableVideo__PlayButtonContainer",
  componentId: "fy4fmi-0"
})(["position:absolute;top:0;left:0;width:100%;height:100%;"]);
var PlayButton = Object(styled_components_browser_esm["b" /* default */])(index_es["m" /* IconButton */]).withConfig({
  displayName: "SelectableVideo__PlayButton",
  componentId: "fy4fmi-1"
})(["svg{font-size:46px;background:rgba(255,255,255,0.6);border-radius:10px;padding:8px 16px;}width:100%;height:100%;border-radius:0;"]);
var ProgressBar = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "SelectableVideo__ProgressBar",
  componentId: "fy4fmi-2"
})(["position:absolute;bottom:8px;left:3%;width:94%;height:16px;background:rgba(255,255,255,0.6);border-radius:8px;cursor:pointer;"]);
var Progress = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "SelectableVideo__Progress",
  componentId: "fy4fmi-3"
})(["height:100%;width:4%;background:rgba(0,0,0,0.8);border-radius:8px;cursor:pointer;"]);
var SelectableVideo_Margin = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "SelectableVideo__Margin",
  componentId: "fy4fmi-4"
})(["margin:10px;"]);
var SelectableVideo_SelectableVideo =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SelectableVideo, _React$Component);

  function SelectableVideo() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      isPlaying: false,
      isShowPlayControls: false,
      playbackRate: PLAYBACK_RATES[0]
    };

    _this.onPause = function () {
      if (!_this.videoRef) {
        return;
      }

      _this.videoRef.pause();

      _this.setState({
        isPlaying: false
      });
    };

    _this.onPlay = function () {
      if (!_this.videoRef) {
        return;
      }

      _this.videoRef.play();

      _this.setState({
        isPlaying: true
      });
    };

    _this.onChangePlaybackRate = function (e) {
      if (!_this.videoRef) {
        return;
      }

      var playbackRate = e.target.value;
      _this.videoRef.playbackRate = playbackRate;

      _this.setState({
        playbackRate: playbackRate
      });
    };

    _this.onJumpTo = function (e) {
      if (!_this.videoRef) {
        return;
      }

      var _e$target$getBounding = e.target.getBoundingClientRect(),
          left = _e$target$getBounding.left,
          width = _e$target$getBounding.width;

      var x = e.clientX - left;
      var ratio = x / width;
      var duration = _this.videoRef.duration;
      _this.videoRef.currentTime = ratio * duration; // TODO: figure out why detection stops without timeout?

      _this.videoRef.pause();

      setTimeout(function () {
        return _this.videoRef.play();
      }, 500);
    };

    _this.onTimeUpdate = function (e) {
      if (_this.videoRef !== e.target || !_this.progressRef) {
        return;
      }

      var _this$videoRef = _this.videoRef,
          currentTime = _this$videoRef.currentTime,
          duration = _this$videoRef.duration;
      var fpsRef = document.getElementById('fps');
      fpsRef && (fpsRef.value = "" + Math.round(_this.props.getFps()));
      _this.progressRef.style['margin-left'] = 96 * (currentTime / duration) + "%";
    };

    _this.onLoaded = function (refs) {
      _this.videoRef = refs.mediaElement.element;

      _this.props.onLoaded(refs);

      _this.setState({
        isPlaying: true
      });

      _this.videoRef.ontimeupdate = _this.onTimeUpdate;
    };

    return _this;
  }

  var _proto = SelectableVideo.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return react["createElement"]("div", null, react["createElement"](SelectableInputElement_SelectableInputElement, Object.assign({}, this.props, {
      accept: "video/*",
      renderMediaElement: function renderMediaElement(props) {
        return react["createElement"]("div", {
          style: {
            position: 'relative'
          }
        }, react["createElement"](VideoWithOverlay_VideoWithOverlay, {
          src: props.src,
          onLoaded: _this2.onLoaded,
          videoStyle: props.mediaElementStyle
        }), react["createElement"](PlayButtonContainer, {
          style: {
            opacity: _this2.state.isShowPlayControls ? 1 : 0
          },
          onMouseEnter: function onMouseEnter() {
            return _this2.setState({
              isShowPlayControls: true
            });
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.setState({
              isShowPlayControls: false
            });
          }
        }, react["createElement"](PlayButton, {
          onClick: _this2.state.isPlaying ? _this2.onPause : _this2.onPlay
        }, _this2.state.isPlaying ? react["createElement"](icons_index_es["d" /* Pause */], null) : react["createElement"](icons_index_es["e" /* PlayArrow */], null))), react["createElement"](ProgressBar, {
          onClick: _this2.onJumpTo
        }, react["createElement"](Progress, {
          ref: function ref(progressRef) {
            return _this2.progressRef = progressRef;
          }
        })));
      },
      renderAdditionalControls: function renderAdditionalControls() {
        return react["createElement"](SideBySide["a" /* SideBySide */], null, react["createElement"](SelectableVideo_Margin, null, react["createElement"](index_es["i" /* FormControl */], null, react["createElement"](index_es["t" /* Select */], {
          value: _this2.state.playbackRate,
          onChange: _this2.onChangePlaybackRate,
          input: react["createElement"](index_es["n" /* Input */], null)
        }, PLAYBACK_RATES.map(function (rate) {
          return react["createElement"](index_es["s" /* MenuItem */], {
            key: rate,
            value: rate
          }, rate);
        })), react["createElement"](index_es["k" /* FormHelperText */], null, "Playback Rate"))), react["createElement"](SelectableVideo_Margin, null, react["createElement"](index_es["w" /* TextField */], {
          label: "FPS",
          id: "fps",
          InputLabelProps: {
            shrink: true
          },
          margin: "normal",
          variant: "outlined"
        })));
      }
    })));
  };

  return SelectableVideo;
}(react["Component"]);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(358);

// CONCATENATED MODULE: ./src/components/WebcamVideoWithOverlay.tsx








var WebcamVideoWithOverlay_WebcamVideoWithOverlay =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(WebcamVideoWithOverlay, _React$Component);

  function WebcamVideoWithOverlay() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {};
    _this.onVideoRef =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var srcObject;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return navigator.mediaDevices.getUserMedia({
                video: {}
              });

            case 3:
              srcObject = _context.sent;

              _this.setState({
                srcObject: srcObject
              });

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              _this.setState({
                error: _context.t0.toString()
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _this;
  }

  var _proto = WebcamVideoWithOverlay.prototype;

  _proto.render = function render() {
    if (this.state.error) {
      return react["createElement"]("div", {
        style: {
          background: 'red',
          color: 'white'
        }
      }, react["createElement"]("h3", null, " Error occured while requesting webcam access: "), react["createElement"]("p", null, " ", this.state.error, " "));
    }

    return react["createElement"](VideoWithOverlay_VideoWithOverlay, {
      srcObject: this.state.srcObject,
      onLoaded: this.props.onLoaded,
      videoStyle: {
        maxWidth: this.props.maxVideoWidth
      },
      onVideoRef: this.onVideoRef
    });
  };

  return WebcamVideoWithOverlay;
}(react["Component"]);
// CONCATENATED MODULE: ./src/components/InputComponent.tsx







var InputComponent_InputComponent = function InputComponent(_ref) {
  var inputType = _ref.inputType,
      onLoaded = _ref.onLoaded,
      getFps = _ref.getFps;

  if (inputType === InputTypeTabs["a" /* InputType */].IMAGE) {
    return react["createElement"](SelectableImage_SelectableImage, {
      items: [].concat(src_const["b" /* EXAMPLE_IMAGES */], src_const["c" /* EXAMPLE_IMAGES_FACE_EXPRESSIONS */]),
      initialSrc: src_const["b" /* EXAMPLE_IMAGES */][0].url,
      onLoaded: onLoaded,
      selectionType: SelectionTypes.BOTH,
      mediaElementStyle: {
        maxWidth: 800,
        maxHeight: 500
      },
      mediaElementId: "img"
    });
  }

  if (inputType === InputTypeTabs["a" /* InputType */].VIDEO) {
    return react["createElement"](SelectableVideo_SelectableVideo, {
      items: src_const["d" /* EXAMPLE_VIDEOS */],
      initialSrc: src_const["d" /* EXAMPLE_VIDEOS */][0].url,
      onLoaded: onLoaded,
      selectionType: SelectionTypes.BOTH,
      mediaElementStyle: {
        maxWidth: 800,
        maxHeight: 500
      },
      mediaElementId: "video",
      getFps: getFps
    });
  }

  if (inputType === InputTypeTabs["a" /* InputType */].WEBCAM) {
    return react["createElement"](WebcamVideoWithOverlay_WebcamVideoWithOverlay, {
      onLoaded: onLoaded,
      maxVideoWidth: 800
    });
  }

  return null;
};
// CONCATENATED MODULE: ./src/components/ModalLoader.tsx


var ModalLoader_ModalLoader = function ModalLoader(props) {
  return react["createElement"](index_es["d" /* Dialog */], {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: true
  }, react["createElement"](index_es["f" /* DialogTitle */], null, props.title), react["createElement"](index_es["e" /* DialogContent */], null, react["createElement"](index_es["p" /* LinearProgress */], null)));
};
// EXTERNAL MODULE: ./node_modules/@material-ui/core/styles/index.js
var styles = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Menu.js
var Menu = __webpack_require__(224);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu);

// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__(53);
var gatsby_link_default = /*#__PURE__*/__webpack_require__.n(gatsby_link);

// CONCATENATED MODULE: ./src/components/styled/StyledLink.tsx


var linkCss = Object(styled_components_browser_esm["a" /* css */])(["padding:4px;color:inherit;text-decoration:none;display:block;"]);
var StyledLink = Object(styled_components_browser_esm["b" /* default */])(gatsby_link_default.a).withConfig({
  displayName: "StyledLink",
  componentId: "sc-1tqjp8d-0"
})(["", ""], linkCss);
var StyledAbsLink = styled_components_browser_esm["b" /* default */].a.withConfig({
  displayName: "StyledLink__StyledAbsLink",
  componentId: "sc-1tqjp8d-1"
})(["", ""], linkCss);
// CONCATENATED MODULE: ./src/components/SideMenu.tsx








var SideMenu_styles = function styles(theme) {
  return {
    paper: {
      width: theme.sideMenuWidth
    }
  };
};

var SideMenu_SideMenuComponent =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SideMenuComponent, _React$Component);

  function SideMenuComponent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SideMenuComponent.prototype;

  _proto.renderDrawer = function renderDrawer(isSm) {
    var menu = react["createElement"]("div", null, isSm && react["createElement"](index_es["m" /* IconButton */], {
      "aria-label": "open drawer",
      onClick: this.props.onToggle
    }, react["createElement"](Menu_default.a, null)), react["createElement"](StyledAbsLink, {
      href: "https://github.com/justadudewhohacks/face-api.js"
    }, react["createElement"]("h3", {
      style: {
        paddingLeft: 24
      }
    }, " face-api.js ")), react["createElement"](index_es["g" /* Divider */], null), react["createElement"](StyledAbsLink, {
      href: src_const["a" /* DOCS_URI */]
    }, react["createElement"]("h3", {
      style: {
        paddingLeft: 24
      }
    }, " API Documentation ")), react["createElement"](index_es["g" /* Divider */], null), react["createElement"](index_es["q" /* List */], null, this.props.items.map(function (item) {
      return react["createElement"](index_es["r" /* ListItem */], {
        key: item.linkTo
      }, react["createElement"](StyledLink, {
        to: item.linkTo
      }, item.label));
    })));
    return react["createElement"](index_es["h" /* Drawer */], {
      anchor: "left",
      variant: isSm ? 'temporary' : 'permanent',
      open: this.props.isOpen,
      onClose: isSm ? this.props.onToggle : function () {},
      ModalProps: {
        keepMounted: true
      },
      classes: {
        paper: this.props.classes.paper
      }
    }, menu);
  };

  _proto.render = function render() {
    return react["createElement"]("div", null, react["createElement"](index_es["l" /* Hidden */], {
      mdUp: true
    }, this.renderDrawer(true)), react["createElement"](index_es["l" /* Hidden */], {
      smDown: true
    }, this.renderDrawer(false)));
  };

  return SideMenuComponent;
}(react["Component"]);

var SideMenu = Object(styles["withStyles"])(SideMenu_styles)(SideMenu_SideMenuComponent);
// CONCATENATED MODULE: ./src/layouts/PageLayout.tsx







var MENU_ITEMS = [{
  label: 'Face Classification',
  linkTo: '/face_classification'
}, {
  label: 'Face Recognition',
  linkTo: '/face_recognition'
}];

var PageLayout_styles = function styles(theme) {
  var _pageContent;

  return {
    pageContent: (_pageContent = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      maxWidth: '800px',
      padding: '10px',
      marginLeft: '0px'
    }, _pageContent[theme.breakpoints.up('md')] = {
      marginLeft: theme.sideMenuWidth
    }, _pageContent)
  };
};

var PageLayout_PageLayoutComponent =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(PageLayoutComponent, _React$Component);

  function PageLayoutComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      isSideMenuOpen: false
    };

    _this.toggleMenu = function () {
      _this.setState(function (state) {
        return {
          isSideMenuOpen: !state.isSideMenuOpen
        };
      });
    };

    return _this;
  }

  var _proto = PageLayoutComponent.prototype;

  _proto.render = function render() {
    return react["createElement"]("div", null, react["createElement"](index_es["m" /* IconButton */], {
      "aria-label": "open drawer",
      onClick: this.toggleMenu,
      style: {
        zIndex: 999
      }
    }, react["createElement"](Menu_default.a, null)), react["createElement"](SideMenu, {
      items: MENU_ITEMS,
      isOpen: this.state.isSideMenuOpen,
      onToggle: this.toggleMenu
    }), react["createElement"]("div", {
      className: this.props.classes.pageContent
    }, react["createElement"](CenterContent, null, this.props.children)));
  };

  return PageLayoutComponent;
}(react["Component"]);

var PageLayout = Object(styles["withStyles"])(PageLayout_styles)(PageLayout_PageLayoutComponent);
// CONCATENATED MODULE: ./src/Root.tsx





var getPageContext = __webpack_require__(5869).default;

var Root_Root =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(Root, _React$Component);

  function Root(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.pageContext = {};
    _this.pageContext = getPageContext();
    return _this;
  }

  var _proto = Root.prototype;

  _proto.render = function render() {
    return react["createElement"](styles["MuiThemeProvider"], {
      theme: this.pageContext.theme,
      sheetsManager: this.pageContext.sheetsManager
    }, react["createElement"](PageLayout, null, this.props.children));
  };

  return Root;
}(react["Component"]);
// CONCATENATED MODULE: ./src/container/BasePage.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage_BasePage; });























var AppBarContainer = Object(styled_components_browser_esm["b" /* default */])(CenterContent).withConfig({
  displayName: "BasePage__AppBarContainer",
  componentId: "sc-8ymjs7-0"
})(["width:100%;margin-bottom:20px;"]);
var ControlsContainer = styled_components_browser_esm["b" /* default */].div.withConfig({
  displayName: "BasePage__ControlsContainer",
  componentId: "sc-8ymjs7-1"
})(["width:100%;"]);
var BasePage_BasePage =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(BasePage, _React$Component);

  function BasePage() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      faceDetectionOptions: new es6["d" /* SsdMobilenetv1Options */](),
      isFaceDetectorLoaded: false,
      areModelsLoaded: false,
      inputType: InputTypeTabs["a" /* InputType */].IMAGE,
      currentFps: 0
    };
    _this.fpsMeter = [];

    _this.changeFaceDetector =
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(faceDetectionOptions) {
        var detectorName, prevDetectorName;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                detectorName = getFaceDetectorNameFromOptions(faceDetectionOptions);
                prevDetectorName = getFaceDetectorNameFromOptions(_this.state.faceDetectionOptions);

                if (!(detectorName !== prevDetectorName)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return _this.loadFaceDetector(detectorName);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onFaceDetectionOptionsChanged =
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(faceDetectionOptions) {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.changeFaceDetector(faceDetectionOptions);

              case 2:
                _this.setState({
                  faceDetectionOptions: faceDetectionOptions
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.onInputTypeChanged =
    /*#__PURE__*/
    function () {
      var _ref3 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(inputType) {
        var faceDetectionOptions;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.setState({
                  inputType: inputType
                });

                faceDetectionOptions = inputType === InputTypeTabs["a" /* InputType */].IMAGE ? new es6["d" /* SsdMobilenetv1Options */]() : inputType === InputTypeTabs["a" /* InputType */].WEBCAM ? new es6["e" /* TinyFaceDetectorOptions */]({
                  inputSize: 160
                }) : new es6["e" /* TinyFaceDetectorOptions */]();
                _context3.next = 4;
                return _this.changeFaceDetector(faceDetectionOptions);

              case 4:
                _this.setState({
                  faceDetectionOptions: faceDetectionOptions
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.updateFpsMeter = function (ts) {
      _this.fpsMeter = [ts].concat(_this.fpsMeter).slice(0, 30);
    };

    _this.getFps = function () {
      var avgTimeInMs = _this.fpsMeter.reduce(function (total, t) {
        return total + t;
      }) / _this.fpsMeter.length;

      return 1000 / avgTimeInMs || null;
    };

    _this.processInputs =
    /*#__PURE__*/
    asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee4() {
      var detector;
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              detector = getFaceDetectionNetFromName(getFaceDetectorNameFromOptions(_this.state.faceDetectionOptions));

              if (detector.isLoaded) {
                _context4.next = 4;
                break;
              }

              setTimeout(_this.processInputs, 100);
              return _context4.abrupt("return");

            case 4:
              _context4.next = 6;
              return _this.props.processInputs(_this.state);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    _this.processFrames =
    /*#__PURE__*/
    function () {
      var _ref5 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(processId) {
        var ts;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                ts = Date.now();
                _context5.next = 3;
                return _this.processInputs();

              case 3:
                _this.updateFpsMeter(Date.now() - ts);

                if (_this.processId !== null && _this.processId === processId) {
                  setTimeout(_this.processFrames.bind(assertThisInitialized_default()(_this), processId), 0);
                }

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }();

    _this.startProcessingFrames = function () {
      _this.processId = Date.now();

      _this.processFrames(_this.processId);
    };

    return _this;
  }

  var _proto = BasePage.prototype;

  _proto.loadFaceDetector =
  /*#__PURE__*/
  function () {
    var _loadFaceDetector = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee6(detectorName) {
      var faceDetector;
      return regenerator_default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              faceDetector = getFaceDetectionNetFromName(detectorName);
              faceDetector.isLoaded || faceDetector.loadFromUri(src_const["e" /* MODELS_URI */]);
              this.setState({
                isFaceDetectorLoaded: true
              });

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function loadFaceDetector(_x5) {
      return _loadFaceDetector.apply(this, arguments);
    }

    return loadFaceDetector;
  }();

  _proto.loadModels =
  /*#__PURE__*/
  function () {
    var _loadModels = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee7() {
      return regenerator_default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return Promise.all([this.loadFaceDetector(getFaceDetectorNameFromOptions(this.state.faceDetectionOptions)), es6["n" /* nets */].faceLandmark68Net.loadFromUri(src_const["e" /* MODELS_URI */]), this.props.loadAdditionalModels()]);

            case 2:
              this.setState({
                areModelsLoaded: true
              });

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function loadModels() {
      return _loadModels.apply(this, arguments);
    }

    return loadModels;
  }();

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.inputType === InputTypeTabs["a" /* InputType */].IMAGE) {
      this.processId = null;
      this.processInputs();
      return;
    }

    this.startProcessingFrames();
  };

  _proto.componentDidMount = function componentDidMount() {
    this.loadModels();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.processId = null;
  };

  _proto.render = function render() {
    var _this2 = this;

    if (!(typeof window !== 'undefined' && window.document)) {
      return null;
    }

    return react["createElement"](Root_Root, null, !this.state.areModelsLoaded || !this.state.isFaceDetectorLoaded ? react["createElement"](ModalLoader_ModalLoader, {
      title: "Loading Models"
    }) : null, react["createElement"](AppBarContainer, null, react["createElement"]("div", null, react["createElement"](InputTypeTabs["b" /* InputTypeTabs */], {
      inputType: this.state.inputType,
      onChange: this.onInputTypeChanged
    }))), react["createElement"](ControlsContainer, null, react["createElement"](SideBySide["a" /* SideBySide */], {
      alignItems: "baseline"
    }, react["createElement"](index_es["i" /* FormControl */], null, react["createElement"](FaceDetectorSelection_FaceDetectorSelection, {
      faceDetectionOptions: this.state.faceDetectionOptions,
      onFaceDetectionOptionsChanged: this.onFaceDetectionOptionsChanged
    })), this.props.renderControls(this.state))), this.props.renderChildren ? this.props.renderChildren(this.state) : null, react["createElement"](InputComponent_InputComponent, {
      inputType: this.state.inputType,
      onLoaded: function onLoaded(refs) {
        return _this2.setState(refs);
      },
      getFps: this.getFps
    }));
  };

  return BasePage;
}(react["Component"]);

/***/ }),

/***/ 5643:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5645:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5678:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5679:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPageContext; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5870);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(239);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(168);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(269);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__);








 // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["createMuiTheme"])({
  palette: {
    primary: Object.assign({}, _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["lightBlue"], {
      contrastText: 'white'
    })
  },
  sideMenuWidth: '240px'
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new jss__WEBPACK_IMPORTED_MODULE_6__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(166), __webpack_require__(73)))

/***/ })

}]);
//# sourceMappingURL=1-1cb2d092993fc21515c3.js.map