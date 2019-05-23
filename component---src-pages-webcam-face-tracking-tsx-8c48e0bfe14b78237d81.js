(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 149:
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
/* harmony import */ var _components_FaceAndLandmarkDetection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(228);
/* harmony import */ var _components_TrackFacesWithLandmarks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(294);
/* harmony import */ var _components_WebcamVideoWithOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(295);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(175);
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(186);










var _default =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(_default, _React$Component);

  function _default() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this = this;

    if (!(typeof window !== 'undefined' && window.document)) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Root__WEBPACK_IMPORTED_MODULE_8__[/* Root */ "a"], null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_WebcamVideoWithOverlay__WEBPACK_IMPORTED_MODULE_6__[/* WebcamVideoWithOverlay */ "a"], {
      onLoaded: function onLoaded(_ref) {
        var input = _ref.video,
            overlay = _ref.overlay;
        return _this.setState({
          input: input,
          overlay: overlay
        });
      },
      maxVideoWidth: 800
    }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_FaceAndLandmarkDetection__WEBPACK_IMPORTED_MODULE_4__[/* FaceAndLandmarkDetection */ "a"], Object.assign({}, this.state, {
      initialFaceDetector: _const__WEBPACK_IMPORTED_MODULE_7__[/* FACE_DETECTORS */ "g"][0],
      initialTinyFaceDetectorOptions: new face_api_js__WEBPACK_IMPORTED_MODULE_2__["TinyFaceDetectorOptions"]({
        inputSize: 224
      })
    }), function (detectionOptions, withBoxes, withLandmarks) {
      return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_TrackFacesWithLandmarks__WEBPACK_IMPORTED_MODULE_5__[/* TrackFacesWithLandmarks */ "a"], Object.assign({
        detectionOptions: detectionOptions,
        withBoxes: withBoxes,
        withLandmarks: withLandmarks
      }, _this.state));
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



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

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoWithOverlay; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var face_api_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(164);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var VideoWithOverlay =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(VideoWithOverlay, _React$Component);

  function VideoWithOverlay(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.isLoaded = false;
    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    _this.onVideoRef = _this.onVideoRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    _this.onCanvasRef = _this.onCanvasRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    _this.onPlay = _this.onPlay.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackFacesWithLandmarks; });
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








var TrackFacesWithLandmarks =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(TrackFacesWithLandmarks, _React$Component);

  function TrackFacesWithLandmarks() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TrackFacesWithLandmarks.prototype;

  _proto.render = function render() {
    var _this = this;

    var runTask =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var task;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                task = face_api_js__WEBPACK_IMPORTED_MODULE_5__["detectAllFaces"](_this.props.input.element, _this.props.detectionOptions);

                if (!_this.props.withLandmarks) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", task.withFaceLandmarks());

              case 3:
                return _context.abrupt("return", task);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function runTask() {
        return _ref.apply(this, arguments);
      };
    }();

    var withBoxes = this.props.withBoxes;
    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_TrackFaces__WEBPACK_IMPORTED_MODULE_7__[/* TrackFaces */ "a"], Object.assign({}, this.props, {
      displayOptions: {
        withBoxes: withBoxes
      },
      runTask: runTask
    }));
  };

  return TrackFacesWithLandmarks;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebcamVideoWithOverlay; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(171);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(172);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _VideoWithOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(229);








var WebcamVideoWithOverlay =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5___default()(WebcamVideoWithOverlay, _React$Component);

  function WebcamVideoWithOverlay() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {};
    _this.onVideoRef =
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var srcObject;
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
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        style: {
          background: 'red',
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("h3", null, " Error occured while requesting webcam access: "), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("p", null, " ", this.state.error, " "));
    }

    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_VideoWithOverlay__WEBPACK_IMPORTED_MODULE_7__[/* VideoWithOverlay */ "a"], {
      srcObject: this.state.srcObject,
      onLoaded: this.props.onLoaded,
      maxVideoWidth: this.props.maxVideoWidth,
      onVideoRef: this.onVideoRef
    });
  };

  return WebcamVideoWithOverlay;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(297);
var anObject = __webpack_require__(5);
var $flags = __webpack_require__(76);
var DESCRIPTORS = __webpack_require__(18);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(14)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(19)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
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

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(18) && /./g.flags != 'g') __webpack_require__(25).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(76)
});


/***/ })

}]);
//# sourceMappingURL=component---src-pages-webcam-face-tracking-tsx-8c48e0bfe14b78237d81.js.map