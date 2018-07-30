webpackJsonp([64362231949834],{

/***/ 284:
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	
	var VideoWrap = function () {
	    function VideoWrap(video) {
	        _classCallCheck(this, VideoWrap);
	
	        if (!video) {
	            return;
	        }
	        if (video instanceof VideoWrap) {
	            this._video = video.video;
	            return;
	        }
	        this._video = video;
	    }
	
	    _createClass(VideoWrap, [{
	        key: "video",
	        get: function get() {
	            return this._video;
	        }
	    }, {
	        key: "element",
	        get: function get() {
	            return this.video;
	        }
	    }, {
	        key: "isLoaded",
	        get: function get() {
	            return this.video instanceof HTMLVideoElement;
	        }
	    }]);
	
	    return VideoWrap;
	}();
	
	exports.VideoWrap = VideoWrap;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  margin: 10px !important;\n"], ["\n  margin: 10px !important;\n"]),
	    _templateObject2 = _taggedTemplateLiteralLoose(["\n  width: 40px;\n  height: 40px;\n"], ["\n  width: 40px;\n  height: 40px;\n"]);
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(36);
	var React = __webpack_require__(2);
	var styled_components_1 = __webpack_require__(48);
	var SideBySide_1 = __webpack_require__(118);
	exports.StyledFormControl = styled_components_1.default(core_1.FormControl)(_templateObject);
	exports.StyledButton = styled_components_1.default(core_1.Button)(_templateObject2);
	exports.AdjustableInput = function (props) {
	  return React.createElement(exports.StyledFormControl, null, React.createElement(SideBySide_1.SideBySide, null, React.createElement(core_1.InputLabel, { htmlFor: props.inputId }, props.label), React.createElement(core_1.Input, { id: props.inputId, value: props.value }), React.createElement(exports.StyledButton, { variant: "outlined", onClick: function onClick() {
	      return props.onChange(Math.max(props.value - props.step, props.minValue));
	    } }, "-"), React.createElement(exports.StyledButton, { variant: "outlined", onClick: function onClick() {
	      return props.onChange(Math.min(props.value + props.step, props.maxValue));
	    } }, "+")));
	};

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var CenterContent_1 = __webpack_require__(177);
	var AdjustableInput_1 = __webpack_require__(171);
	exports.MtcnnParamControls = function (props) {
	    return React.createElement(CenterContent_1.CenterContent, { flexDirection: "column" }, React.createElement(AdjustableInput_1.AdjustableInput, { inputId: "scaleFactor", label: "scaleFactor:", value: props.detectionParams.scaleFactor, minValue: 0.1, maxValue: 0.9, step: 0.05, onChange: function onChange(scaleFactor) {
	            return props.onChange(_extends({}, props.detectionParams, { scaleFactor: scaleFactor }));
	        } }), React.createElement(AdjustableInput_1.AdjustableInput, { inputId: "minFaceSize", label: "minFaceSize:", value: props.detectionParams.minFaceSize, minValue: 40, maxValue: 400, step: 40, onChange: function onChange(minFaceSize) {
	            return props.onChange(_extends({}, props.detectionParams, { minFaceSize: minFaceSize }));
	        } }));
	};

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(40);
	var React = __webpack_require__(2);
	var VideoWrap_1 = __webpack_require__(284);
	
	var WebcamVideoWithOverlay = function (_React$Component) {
	    _inherits(WebcamVideoWithOverlay, _React$Component);
	
	    function WebcamVideoWithOverlay(props) {
	        _classCallCheck(this, WebcamVideoWithOverlay);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.isLoaded = false;
	        _this.onChange = _this.onChange.bind(_this);
	        _this.onVideoRef = _this.onVideoRef.bind(_this);
	        _this.onCanvasRef = _this.onCanvasRef.bind(_this);
	        _this.onPlay = _this.onPlay.bind(_this);
	        return _this;
	    }
	
	    WebcamVideoWithOverlay.prototype.onChange = function onChange() {
	        var video = this.video,
	            overlay = this.overlay,
	            isLoaded = this.isLoaded;
	
	        if (video && overlay && isLoaded) {
	            var _faceapi$getMediaDime = faceapi.getMediaDimensions(this.video),
	                width = _faceapi$getMediaDime.width,
	                height = _faceapi$getMediaDime.height;
	
	            this.overlay.width = width, this.overlay.height = height;
	            this.props.onLoaded({ video: new VideoWrap_1.VideoWrap(video), overlay: overlay });
	        }
	    };
	
	    WebcamVideoWithOverlay.prototype.onVideoRef = function onVideoRef(el) {
	        var _this2 = this;
	
	        this.video = el;
	        this.onChange();
	        navigator.getUserMedia({ video: {} }, function (stream) {
	            _this2.video.srcObject = stream;
	        }, function (err) {
	            return console.error(err);
	        });
	    };
	
	    WebcamVideoWithOverlay.prototype.onCanvasRef = function onCanvasRef(el) {
	        this.overlay = el;
	        this.onChange();
	    };
	
	    WebcamVideoWithOverlay.prototype.onPlay = function onPlay() {
	        this.isLoaded = true;
	        this.onChange();
	    };
	
	    WebcamVideoWithOverlay.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return false;
	    };
	
	    WebcamVideoWithOverlay.prototype.componentDidUpdate = function componentDidUpdate() {
	        this.onChange();
	    };
	
	    WebcamVideoWithOverlay.prototype.componentDidMount = function componentDidMount() {
	        this.onChange();
	    };
	
	    WebcamVideoWithOverlay.prototype.render = function render() {
	        return React.createElement("div", { style: { position: 'relative' } }, React.createElement("video", { muted: true, autoPlay: true, style: { maxWidth: this.props.maxVideoWidth }, ref: this.onVideoRef, onPlay: this.onPlay }), React.createElement("canvas", { style: { position: 'absolute', top: 0, left: 0 }, ref: this.onCanvasRef }));
	    };
	
	    return WebcamVideoWithOverlay;
	}(React.Component);
	
	exports.WebcamVideoWithOverlay = WebcamVideoWithOverlay;

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var detectFaces = function () {
	    var _ref = _asyncToGenerator(function* (props) {
	        var mtcnnResults = yield props.mtcnn.forward(props.input.element, props.detectionParams);
	        return {
	            mtcnnResults: mtcnnResults
	        };
	    });
	
	    return function detectFaces(_x) {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var ModalLoader_1 = __webpack_require__(29);
	var withAsyncRendering_1 = __webpack_require__(32);
	
	exports.DetectFacesMtcnn = withAsyncRendering_1.withAsyncRendering(detectFaces, function () {
	    return React.createElement(ModalLoader_1.ModalLoader, { title: "Detecting Faces" });
	});

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var faceapi = __webpack_require__(40);
	var React = __webpack_require__(2);
	var MtcnnParamControls_1 = __webpack_require__(173);
	var WebcamVideoWithOverlay_1 = __webpack_require__(639);
	var DetectFacesMtcnn_1 = __webpack_require__(644);
	var LoadModels_1 = __webpack_require__(70);
	var Root_1 = __webpack_require__(69);
	var VideoWrap_1 = __webpack_require__(284);
	
	var default_1 = function (_React$Component) {
	    _inherits(default_1, _React$Component);
	
	    function default_1(props) {
	        _classCallCheck(this, default_1);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.isBusy = true;
	        _this.state = {
	            inputVideo: new VideoWrap_1.VideoWrap(),
	            isPlaying: false,
	            detectionParams: {
	                minFaceSize: 200,
	                scaleFactor: 0.8
	            }
	        };
	        _this.interval = setInterval(function () {
	            if (_this.isBusy) {
	                return;
	            }
	            _this.isBusy = true;
	            _this.setState({ inputVideo: new VideoWrap_1.VideoWrap(_this.state.inputVideo) });
	        }, 16);
	        return _this;
	    }
	
	    default_1.prototype.render = function render() {
	        var _this2 = this;
	
	        if (!(typeof window !== 'undefined' && window.document)) {
	            return null;
	        }
	        return React.createElement(Root_1.Root, null, React.createElement(WebcamVideoWithOverlay_1.WebcamVideoWithOverlay, { onLoaded: function onLoaded(_ref) {
	                var inputVideo = _ref.video,
	                    overlay = _ref.overlay;
	                return _this2.setState({ inputVideo: inputVideo, overlay: overlay });
	            }, maxVideoWidth: 800 }), React.createElement(MtcnnParamControls_1.MtcnnParamControls, { detectionParams: this.state.detectionParams, onChange: function onChange(detectionParams) {
	                return _this2.setState({ detectionParams: detectionParams });
	            } }), React.createElement(LoadModels_1.LoadModels, { mtcnnModelUrl: '/models' }, function (_ref2) {
	            var mtcnn = _ref2.mtcnn;
	            return React.createElement(DetectFacesMtcnn_1.DetectFacesMtcnn, { mtcnn: mtcnn, input: _this2.state.inputVideo, detectionParams: _this2.state.detectionParams }, function (_ref3) {
	                var mtcnnResults = _ref3.mtcnnResults;
	                var overlay = _this2.state.overlay;
	
	                if (overlay && mtcnnResults) {
	                    var width = overlay.width,
	                        height = overlay.height;
	
	                    overlay.getContext('2d').clearRect(0, 0, width, height);
	                    faceapi.drawDetection(overlay, mtcnnResults.map(function (res) {
	                        return res.faceDetection.forSize(width, height);
	                    }));
	                    faceapi.drawLandmarks(overlay, mtcnnResults.map(function (res) {
	                        return res.faceLandmarks.forSize(width, height);
	                    }));
	                    _this2.isBusy = false;
	                }
	                return null;
	            });
	        }));
	    };
	
	    return default_1;
	}(React.Component);
	
	exports.default = default_1;

/***/ })

});
//# sourceMappingURL=component---src-pages-face-detection-webcam-mtcnn-tsx-d2b11c8510db612de088.js.map