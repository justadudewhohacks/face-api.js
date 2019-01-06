(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(6);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/face-api.js/build/es6/index.js + 166 modules
var es6 = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/FaceDetection.tsx
var FaceDetection = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(159);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(160);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/components/TrackFaces.tsx
var TrackFaces = __webpack_require__(207);

// CONCATENATED MODULE: ./src/components/TrackFacesWithExpressions.tsx








var TrackFacesWithExpressions_TrackFacesWithExpressions =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(TrackFacesWithExpressions, _React$Component);

  function TrackFacesWithExpressions() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TrackFacesWithExpressions.prototype;

  _proto.render = function render() {
    var _this = this;

    return react["createElement"](TrackFaces["a" /* TrackFaces */], Object.assign({}, this.props, {
      withBoxes: this.props.withBoxes,
      runTask:
      /*#__PURE__*/
      asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", es6["detectAllFaces"](_this.props.input.element, _this.props.detectionOptions).withFaceExpressions());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))
    }));
  };

  return TrackFacesWithExpressions;
}(react["Component"]);
// EXTERNAL MODULE: ./src/components/WebcamVideoWithOverlay.tsx
var WebcamVideoWithOverlay = __webpack_require__(272);

// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(157);

// EXTERNAL MODULE: ./src/Root.tsx + 3 modules
var Root = __webpack_require__(180);

// CONCATENATED MODULE: ./src/pages/webcam_face_expression_recognition.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return webcam_face_expression_recognition_default; });










var webcam_face_expression_recognition_default =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(_default, _React$Component);

  function _default() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this = this;

    if (!(typeof window !== 'undefined' && window.document)) {
      return null;
    }

    return react["createElement"](Root["a" /* Root */], null, react["createElement"](WebcamVideoWithOverlay["a" /* WebcamVideoWithOverlay */], {
      onLoaded: function onLoaded(_ref) {
        var input = _ref.video,
            overlay = _ref.overlay;
        return _this.setState({
          input: input,
          overlay: overlay
        });
      },
      maxVideoWidth: 800
    }), react["createElement"](FaceDetection["a" /* FaceDetection */], Object.assign({}, this.state, {
      initialFaceDetector: src_const["f" /* FACE_DETECTORS */][0],
      initialTinyFaceDetectorOptions: new es6["TinyFaceDetectorOptions"]({
        inputSize: 224
      })
    }), function (detectionOptions, withBoxes) {
      return react["createElement"](TrackFacesWithExpressions_TrackFacesWithExpressions, Object.assign({
        detectionOptions: detectionOptions,
        withBoxes: withBoxes
      }, _this.state));
    }));
  };

  return _default;
}(react["Component"]);



/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(10);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(165);
var anObject = __webpack_require__(10);
var $flags = __webpack_require__(155);
var DESCRIPTORS = __webpack_require__(15);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(16)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(22)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(15) && /./g.flags != 'g') __webpack_require__(21).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(155)
});


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLoader; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var ModalLoader = function ModalLoader(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* Dialog */ "c"], {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: true
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* DialogTitle */ "e"], null, props.title), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* DialogContent */ "d"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* LinearProgress */ "o"], null)));
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(6);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.es.js
var index_es = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/face-api.js/build/es6/index.js + 166 modules
var es6 = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(161);

// EXTERNAL MODULE: ./src/styled/SideBySide.tsx
var SideBySide = __webpack_require__(169);

// CONCATENATED MODULE: ./src/components/AdjustableInput.tsx




var StyledFormControl = Object(styled_components_browser_esm["b" /* default */])(index_es["h" /* FormControl */]).withConfig({
  displayName: "AdjustableInput__StyledFormControl",
  componentId: "hi48c9-0"
})(["margin:10px !important;"]);
var StyledButton = Object(styled_components_browser_esm["b" /* default */])(index_es["a" /* Button */]).withConfig({
  displayName: "AdjustableInput__StyledButton",
  componentId: "hi48c9-1"
})(["width:40px;height:40px;"]);
var AdjustableInput_AdjustableInput = function AdjustableInput(props) {
  return react["createElement"](StyledFormControl, null, react["createElement"](SideBySide["a" /* SideBySide */], null, react["createElement"](index_es["n" /* InputLabel */], {
    htmlFor: props.inputId
  }, props.label), react["createElement"](index_es["m" /* Input */], {
    id: props.inputId,
    value: props.value
  }), react["createElement"](StyledButton, {
    variant: "outlined",
    onClick: function onClick() {
      return props.onChange(Math.max(props.value - props.step, props.minValue));
    }
  }, "-"), react["createElement"](StyledButton, {
    variant: "outlined",
    onClick: function onClick() {
      return props.onChange(Math.min(props.value + props.step, props.maxValue));
    }
  }, "+")));
};
// EXTERNAL MODULE: ./src/styled/CenterContent.tsx
var CenterContent = __webpack_require__(153);

// CONCATENATED MODULE: ./src/facc/MtcnnControls.tsx






var MtcnnControls_MtcnnParamControls = function MtcnnParamControls(props) {
  var assignOptions = function assignOptions(partial) {
    var _props$detectionParam = props.detectionParams,
        scaleFactor = _props$detectionParam.scaleFactor,
        minFaceSize = _props$detectionParam.minFaceSize;
    return new es6["MtcnnOptions"](Object.assign({
      scaleFactor: scaleFactor,
      minFaceSize: minFaceSize
    }, partial));
  };

  return react["createElement"](CenterContent["a" /* CenterContent */], null, react["createElement"](AdjustableInput_AdjustableInput, {
    inputId: "scaleFactor",
    label: "scaleFactor:",
    value: props.detectionParams.scaleFactor,
    minValue: 0.1,
    maxValue: 0.9,
    step: 0.05,
    onChange: function onChange(scaleFactor) {
      return props.onChange(assignOptions({
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
      return props.onChange(assignOptions({
        minFaceSize: minFaceSize
      }));
    }
  }));
};
var MtcnnControls_MtcnnControls =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(MtcnnControls, _React$Component);

  function MtcnnControls() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      detectionParams: new es6["MtcnnOptions"]()
    };

    _this.renderControls = function () {
      return react["createElement"](MtcnnControls_MtcnnParamControls, {
        detectionParams: _this.state.detectionParams,
        onChange: function onChange(detectionParams) {
          return _this.setState({
            detectionParams: detectionParams
          });
        }
      });
    };

    return _this;
  }

  var _proto = MtcnnControls.prototype;

  _proto.render = function render() {
    return this.props.children(this.state.detectionParams, this.renderControls);
  };

  return MtcnnControls;
}(react["Component"]);
// CONCATENATED MODULE: ./src/facc/SsdMobilenetv1Controls.tsx






var SsdMobilenetv1Controls_SsdMobilenetv1ParamControls = function SsdMobilenetv1ParamControls(props) {
  var assignOptions = function assignOptions(partial) {
    var minConfidence = props.detectionParams.minConfidence;
    return new es6["SsdMobilenetv1Options"](Object.assign({
      minConfidence: minConfidence
    }, partial));
  };

  return react["createElement"](CenterContent["a" /* CenterContent */], null, react["createElement"](AdjustableInput_AdjustableInput, {
    inputId: "minConfidence",
    label: "minConfidence:",
    value: props.detectionParams.minConfidence,
    minValue: 0.1,
    maxValue: 0.9,
    step: 0.1,
    onChange: function onChange(minConfidence) {
      return props.onChange(assignOptions({
        minConfidence: minConfidence
      }));
    }
  }));
};
var SsdMobilenetv1Controls_SsdMobilenetv1Controls =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SsdMobilenetv1Controls, _React$Component);

  function SsdMobilenetv1Controls() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      detectionParams: new es6["SsdMobilenetv1Options"]()
    };

    _this.renderControls = function () {
      return react["createElement"](SsdMobilenetv1Controls_SsdMobilenetv1ParamControls, {
        detectionParams: _this.state.detectionParams,
        onChange: function onChange(detectionParams) {
          return _this.setState({
            detectionParams: detectionParams
          });
        }
      });
    };

    return _this;
  }

  var _proto = SsdMobilenetv1Controls.prototype;

  _proto.render = function render() {
    return this.props.children(this.state.detectionParams, this.renderControls);
  };

  return SsdMobilenetv1Controls;
}(react["Component"]);
// CONCATENATED MODULE: ./src/facc/TinyFaceDetectorControls.tsx







var TinyFaceDetectorControls_TinyFaceDetectorParamControls = function TinyFaceDetectorParamControls(props) {
  var assignOptions = function assignOptions(partial) {
    var _props$detectionParam = props.detectionParams,
        inputSize = _props$detectionParam.inputSize,
        scoreThreshold = _props$detectionParam.scoreThreshold;
    return new es6["TinyFaceDetectorOptions"](Object.assign({
      inputSize: inputSize,
      scoreThreshold: scoreThreshold
    }, partial));
  };

  return react["createElement"](CenterContent["a" /* CenterContent */], null, react["createElement"](index_es["n" /* InputLabel */], {
    htmlFor: "selectInputSize"
  }, "Input Size"), react["createElement"](index_es["s" /* Select */], {
    value: props.detectionParams.inputSize,
    onChange: function onChange(e) {
      return props.onChange(assignOptions({
        inputSize: e.target.value
      }));
    },
    input: react["createElement"](index_es["m" /* Input */], null),
    id: "selectInputSize"
  }, props.inputSizes.map(function (size) {
    return react["createElement"](index_es["r" /* MenuItem */], {
      key: size,
      value: size
    }, size);
  })), react["createElement"](AdjustableInput_AdjustableInput, {
    inputId: "scoreThreshold",
    label: "scoreThreshold:",
    value: props.detectionParams.scoreThreshold,
    minValue: 0.1,
    maxValue: 0.9,
    step: 0.1,
    onChange: function onChange(scoreThreshold) {
      return props.onChange(assignOptions({
        scoreThreshold: scoreThreshold
      }));
    }
  }));
};
var TinyFaceDetectorControls_TinyFaceDetectorControls =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(TinyFaceDetectorControls, _React$Component);

  function TinyFaceDetectorControls(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.renderControls = function () {
      return react["createElement"](TinyFaceDetectorControls_TinyFaceDetectorParamControls, {
        inputSizes: _this.props.inputSizes,
        detectionParams: _this.state.detectionParams,
        onChange: function onChange(detectionParams) {
          return _this.setState({
            detectionParams: detectionParams
          });
        }
      });
    };

    _this.state = {
      detectionParams: _this.props.initialDetectionParams
    };
    return _this;
  }

  var _proto = TinyFaceDetectorControls.prototype;

  _proto.render = function render() {
    return this.props.children(this.state.detectionParams, this.renderControls);
  };

  return TinyFaceDetectorControls;
}(react["Component"]);
TinyFaceDetectorControls_TinyFaceDetectorControls.defaultProps = {
  initialDetectionParams: new es6["TinyFaceDetectorOptions"]()
};
// CONCATENATED MODULE: ./src/facc/SelectFaceDetector.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectFaceDetector_SelectFaceDetector; });







var SelectFaceDetector_SelectFaceDetector =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SelectFaceDetector, _React$Component);

  function SelectFaceDetector(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.renderSelection = function () {
      return react["createElement"]("div", {
        style: {
          marginRight: 10
        }
      }, react["createElement"](index_es["n" /* InputLabel */], {
        htmlFor: "selectFaceDetector"
      }, "Choose face detector:"), react["createElement"](index_es["s" /* Select */], {
        value: _this.state.detector,
        onChange: function onChange(e) {
          return _this.setState({
            detector: e.target.value
          });
        },
        input: react["createElement"](index_es["m" /* Input */], null),
        id: "selectFaceDetector"
      }, src_const["f" /* FACE_DETECTORS */].map(function (item) {
        return react["createElement"](index_es["r" /* MenuItem */], {
          key: item,
          value: item
        }, item);
      })));
    };

    _this.state = {
      detector: props.initialFaceDetector
    };
    return _this;
  }

  var _proto = SelectFaceDetector.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var renderChildren = function renderChildren(options, renderControls) {
      return _this2.props.children(_this2.state.detector, options, _this2.renderSelection, renderControls);
    };

    if (Object(src_const["j" /* isSsdMobilenetv1 */])(this.state.detector)) {
      return react["createElement"](SsdMobilenetv1Controls_SsdMobilenetv1Controls, null, renderChildren);
    } else if (Object(src_const["k" /* isTinyFaceDetector */])(this.state.detector)) {
      return react["createElement"](TinyFaceDetectorControls_TinyFaceDetectorControls, {
        inputSizes: [128, 160, 224, 320, 416, 512, 608],
        initialDetectionParams: this.props.initialTinyFaceDetectorOptions
      }, renderChildren);
    } else if (Object(src_const["i" /* isMtcnn */])(this.state.detector)) {
      return react["createElement"](MtcnnControls_MtcnnControls, null, renderChildren);
    }
  };

  return SelectFaceDetector;
}(react["Component"]);

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceDetection; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(141);
/* harmony import */ var face_api_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ModalLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(166);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(157);
/* harmony import */ var _facc_SelectFaceDetector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(172);
/* harmony import */ var _styled_CenterContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(153);









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
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](face_api_js_react__WEBPACK_IMPORTED_MODULE_3__["LoadModels"], Object.assign({}, Object(_const__WEBPACK_IMPORTED_MODULE_6__[/* getFaceDetectionModelUri */ "h"])(detectorName, _const__WEBPACK_IMPORTED_MODULE_6__[/* MODELS_URI */ "g"]), {
        faceLandmarkModelUrl: _const__WEBPACK_IMPORTED_MODULE_6__[/* MODELS_URI */ "g"],
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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackFaces; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(160);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _face_api_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(152);






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
      var withBoxes, results;
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
              withBoxes = _this.props.withBoxes;
              _context.next = 7;
              return _this.props.runTask();

            case 7:
              results = _context.sent;
              Object(_face_api_js_react__WEBPACK_IMPORTED_MODULE_5__["displayResults"])(_this.props.input, _this.props.overlay, results, {
                withBoxes: withBoxes
              });
              setTimeout(_this.run, 0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
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

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoWithOverlay; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var face_api_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var VideoWithOverlay =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(VideoWithOverlay, _React$Component);

  function VideoWithOverlay(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.isLoaded = false;
    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
    _this.onVideoRef = _this.onVideoRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
    _this.onCanvasRef = _this.onCanvasRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
    _this.onPlay = _this.onPlay.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
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
        video: new face_api_js_react__WEBPACK_IMPORTED_MODULE_2__["MediaElement"](video),
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

  _proto.shouldComponentUpdate = function shouldComponentUpdate() {
    return false;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.onChange();
  };

  _proto.componentDidMount = function componentDidMount() {
    this.onChange();
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      style: {
        position: 'relative'
      }
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("video", {
      muted: true,
      autoPlay: true,
      style: {
        width: '100%',
        maxWidth: this.props.maxVideoWidth
      },
      ref: this.onVideoRef,
      onPlay: this.onPlay,
      src: this.props.src
    }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("canvas", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0
      },
      ref: this.onCanvasRef
    }));
  };

  return VideoWithOverlay;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebcamVideoWithOverlay; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(164);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(158);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(160);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _VideoWithOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(208);







var WebcamVideoWithOverlay =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(WebcamVideoWithOverlay, _React$Component);

  function WebcamVideoWithOverlay() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {};
    _this.onVideoRef =
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _srcObject;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return navigator.mediaDevices.getUserMedia({
                video: {}
              });

            case 3:
              _srcObject = _context.sent;

              _this.setState({
                srcObject: _srcObject
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
      }, _callee, this, [[0, 7]]);
    }));
    return _this;
  }

  var _proto = WebcamVideoWithOverlay.prototype;

  _proto.render = function render() {
    if (this.state.error) {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        style: {
          background: 'red',
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h3", null, " Error occured while requesting webcam access: "), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", null, " ", this.state.error, " "));
    }

    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_VideoWithOverlay__WEBPACK_IMPORTED_MODULE_6__[/* VideoWithOverlay */ "a"], {
      srcObject: this.state.srcObject,
      onLoaded: this.props.onLoaded,
      maxVideoWidth: this.props.maxVideoWidth,
      onVideoRef: this.onVideoRef
    });
  };

  return WebcamVideoWithOverlay;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-webcam-face-expression-recognition-tsx-519384e85bcb430d16e9.js.map